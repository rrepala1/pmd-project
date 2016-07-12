lm.LayoutManager = function (t, e) {
	if (!$ || "function" != typeof $.noConflict) {
		var i = "jQuery is missing as dependency for GoldenLayout. ";
		throw i += 'Please either expose $ on GoldenLayout\'s scope (e.g. window) or add "jquery" to ',
		i += "your paths when using RequireJS/AMD",
		new Error(i)
	}
	lm.utils.EventEmitter.call(this),
	this.isInitialised = !1,
	this._isFullPage = !1,
	this._resizeTimeoutId = null,
	this._components = {
		"lm-react-component" : lm.utils.ReactComponentHandler
	},
	this._itemAreas = [],
	this._resizeFunction = lm.utils.fnBind(this._onResize, this),
	this._maximisedItem = null,
	this._maximisePlaceholder = $('<div class="lm_maximise_place"></div>'),
	this._creationTimeoutPassed = !1,
	this._subWindowsCreated = !1,
	this.width = null,
	this.height = null,
	this.root = null,
	this.openPopouts = [],
	this.selectedItem = null,
	this.isSubWindow = !1,
	this.eventHub = new lm.utils.EventHub(this),
	this.config = this._createConfig(t),
	this.container = e,
	this.dropTargetIndicator = null,
	this.transitionIndicator = null,
	this.tabDropPlaceholder = $('<div class="lm_drop_tab_placeholder"></div>'),
	this.isSubWindow === !0 && $("body").css("visibility", "hidden"),
	$(window).on("unload beforeunload", lm.utils.fnBind(this._onUnload, this)),
	this._typeToItem = {
		column : lm.utils.fnBind(lm.items.RowOrColumn, this, [!0]),
		row : lm.utils.fnBind(lm.items.RowOrColumn, this, [!1]),
		stack : lm.items.Stack,
		component : lm.items.Component
	}
}, lm.LayoutManager.__lm = lm, lm.LayoutManager.minifyConfig = function (t) {
	return (new lm.utils.ConfigMinifier).minifyConfig(t)
}, lm.LayoutManager.unminifyConfig = function (t) {
	return (new lm.utils.ConfigMinifier).unminifyConfig(t)
}, lm.utils.copy(lm.LayoutManager.prototype, {
	registerComponent : function (t, e) {
		if ("function" != typeof e)
			throw new Error("Please register a constructor function");
		if (void 0 !== this._components[t])
			throw new Error("Component " + t + " is already registered");
		this._components[t] = e
	},
	toConfig : function (t) {
		var e,
		i,
		n;
		if (this.isInitialised === !1)
			throw new Error("Can't create config, layout not yet initialised");
		if (t && !(t instanceof lm.items.AbstractContentItem))
			throw new Error("Root must be a ContentItem");
		for (e = {
				settings : lm.utils.copy({}, this.config.settings),
				dimensions : lm.utils.copy({}, this.config.dimensions),
				labels : lm.utils.copy({}, this.config.labels)
			}, e.content = [], i = function (t, e) {
			var n,
			o;
			for (n in e.config)
				"content" !== n && (t[n] = e.config[n]);
				if (e.contentItems.length)
					for (t.content = [], o = 0; o < e.contentItems.length; o++)
						t.content[o] = {},
				i(t.content[o], e.contentItems[o])
			}, t ? i(e, {
					contentItems : [t]
				}) : i(e, this.root), this._$reconcilePopoutWindows(), e.openPopouts = [], n = 0; n < this.openPopouts.length; n++)e.openPopouts.push(this.openPopouts[n].toConfig());
		return e.maximisedItemId = this._maximisedItem ? "__glMaximised" : null,
		e
	},
	getComponent : function (t) {
		if (void 0 === this._components[t])
			throw new lm.errors.ConfigurationError('Unknown component "' + t + '"');
		return this._components[t]
	},
	init : function () {
		return this._subWindowsCreated === !1 && (this._createSubWindows(), this._subWindowsCreated = !0),
		"loading" === document.readyState || null === document.body ? void $(document).ready(lm.utils.fnBind(this.init, this)) : this.isSubWindow === !0 && this._creationTimeoutPassed === !1 ? (setTimeout(lm.utils.fnBind(this.init, this), 7), void(this._creationTimeoutPassed = !0)) : (this.isSubWindow === !0 && this._adjustToWindowMode(), this._setContainer(), this.dropTargetIndicator = new lm.controls.DropTargetIndicator(this.container), this.transitionIndicator = new lm.controls.TransitionIndicator, this.updateSize(), this._create(this.config), this._bindEvents(), this.isInitialised = !0, void this.emit("initialised"))
	},
	updateSize : function (t, e) {
		2 === arguments.length ? (this.width = t, this.height = e) : (this.width = this.container.width(), this.height = this.container.height()),
		this.isInitialised === !0 && (this.root.callDownwards("setSize"), this._maximisedItem && (this._maximisedItem.element.width(this.container.width()), this._maximisedItem.element.height(this.container.height()), this._maximisedItem.callDownwards("setSize")))
	},
	destroy : function () {
		this.isInitialised !== !1 && (this._onUnload(), $(window).off("resize", this._resizeFunction), this.root.callDownwards("_$destroy", [], !0), this.root.contentItems = [], this.tabDropPlaceholder.remove(), this.dropTargetIndicator.destroy(), this.transitionIndicator.destroy())
	},
	createContentItem : function (t, e) {
		var i,
		n;
		if ("string" != typeof t.type)
			throw new lm.errors.ConfigurationError("Missing parameter 'type'", t);
		if ("react-component" === t.type && (t.type = "component", t.componentName = "lm-react-component"), !this._typeToItem[t.type])
			throw i = "Unknown type '" + t.type + "'. Valid types are " + lm.utils.objectKeys(this._typeToItem).join(","), new lm.errors.ConfigurationError(i);
		return "component" !== t.type || e instanceof lm.items.Stack || !e || this.isSubWindow === !0 && e instanceof lm.items.Root || (t = {
				type : "stack",
				isClosable : t.isClosable,
				width : t.width,
				height : t.height,
				content : [t]
			}),
		n = new this._typeToItem[t.type](this, t, e)
	},
	createPopout : function (t, e, i, n) {
		var o,
		s,
		r,
		a,
		l,
		m,
		h = t,
		c = t instanceof lm.items.AbstractContentItem,
		d = this;
		if (i = i || null, c) {
			for (h = this.toConfig(t).content, i = lm.utils.getUniqueId(), a = t.parent, l = t; 1 === a.contentItems.length && !a.isRoot; )
				a = a.parent, l = l.parent;
			a.addId(i),
			isNaN(n) && (n = lm.utils.indexOf(l, a.contentItems))
		} else
			h instanceof Array || (h = [h]);
		return !e && c && (o = window.screenX || window.screenLeft, s = window.screenY || window.screenTop, r = t.element.offset(), e = {
				left : o + r.left,
				top : s + r.top,
				width : t.element.width(),
				height : t.element.height()
			}),
		e || c || (e = {
				left : window.screenX || window.screenLeft + 20,
				top : window.screenY || window.screenTop + 20,
				width : 500,
				height : 309
			}),
		c && t.remove(),
		m = new lm.controls.BrowserPopout(h, e, i, n, this),
		m.on("initialised", function () {
			d.emit("windowOpened", m)
		}),
		m.on("closed", function () {
			d._$reconcilePopoutWindows()
		}),
		this.openPopouts.push(m),
		m
	},
	createDragSource : function (t, e) {
		this.config.settings.constrainDragToContainer = !1,
		new lm.controls.DragSource($(t), e, this)
	},
	selectItem : function (t, e) {
		if (this.config.settings.selectionEnabled !== !0)
			throw new Error("Please set selectionEnabled to true to use this feature");
		t !== this.selectedItem && (null !== this.selectedItem && this.selectedItem.deselect(), t && e !== !0 && t.select(), this.selectedItem = t, this.emit("selectionChanged", t))
	},
	_$maximiseItem : function (t) {
		null !== this._maximisedItem && this._$minimiseItem(this._maximisedItem),
		this._maximisedItem = t,
		this._maximisedItem.addId("__glMaximised"),
		t.element.addClass("lm_maximised"),
		t.element.after(this._maximisePlaceholder),
		this.root.element.prepend(t.element),
		t.element.width(this.container.width()),
		t.element.height(this.container.height()),
		t.callDownwards("setSize"),
		this._maximisedItem.emit("maximised"),
		this.emit("stateChanged")
	},
	_$minimiseItem : function (t) {
		t.element.removeClass("lm_maximised"),
		t.removeId("__glMaximised"),
		this._maximisePlaceholder.after(t.element),
		this._maximisePlaceholder.remove(),
		t.parent.callDownwards("setSize"),
		this._maximisedItem = null,
		t.emit("minimised"),
		this.emit("stateChanged")
	},
	_$closeWindow : function () {
		window.setTimeout(function () {
			window.close()
		}, 1)
	},
	_$getArea : function (t, e) {
		var i,
		n,
		o = 1 / 0,
		s = null;
		for (i = 0; i < this._itemAreas.length; i++)
			n = this._itemAreas[i], t > n.x1 && t < n.x2 && e > n.y1 && e < n.y2 && o > n.surface && (o = n.surface, s = n);
		return s
	},
	_$calculateItemAreas : function () {
		var t,
		e,
		i = this._getAllContentItems();
		if (this._itemAreas = [], 1 === i.length)
			return void this._itemAreas.push(this.root._$getArea());
		for (t = 0; t < i.length; t++)
			i[t].isStack && (e = i[t]._$getArea(), null !== e && (e instanceof Array ? this._itemAreas = this._itemAreas.concat(e) : this._itemAreas.push(e)))
	},
	_$normalizeContentItem : function (t, e) {
		if (!t)
			throw new Error("No content item defined");
		if (t instanceof lm.items.AbstractContentItem)
			return t;
		if ($.isPlainObject(t) && t.type) {
			var i = this.createContentItem(t, e);
			return i.callDownwards("_$init"),
			i
		}
		throw new Error("Invalid contentItem")
	},
	_$reconcilePopoutWindows : function () {
		var t,
		e = [];
		for (t = 0; t < this.openPopouts.length; t++)
			this.openPopouts[t].getWindow().closed === !1 ? e.push(this.openPopouts[t]) : this.emit("windowClosed", this.openPopouts[t]);
		this.openPopouts.length !== e.length && (this.emit("stateChanged"), this.openPopouts = e)
	},
	_getAllContentItems : function () {
		var t = [],
		e = function (i) {
			if (t.push(i), i.contentItems instanceof Array)
				for (var n = 0; n < i.contentItems.length; n++)
					e(i.contentItems[n])
		};
		return e(this.root),
		t
	},
	_bindEvents : function () {
		this._isFullPage && $(window).resize(this._resizeFunction)
	},
	_onResize : function () {
		clearTimeout(this._resizeTimeoutId),
		this._resizeTimeoutId = setTimeout(lm.utils.fnBind(this.updateSize, this), 100)
	},
	_createConfig : function (t) {
		var e = lm.utils.getQueryStringParam("gl-window");
		e && (this.isSubWindow = !0, t = localStorage.getItem(e), t = JSON.parse(t), t = (new lm.utils.ConfigMinifier).unminifyConfig(t), localStorage.removeItem(e)),
		t = $.extend(!0, {}, lm.config.defaultConfig, t);
		var i = function (t) {
			for (var e in t)
				"props" !== e && "object" == typeof t[e] ? i(t[e]) : "type" === e && "react-component" === t[e] && (t.type = "component", t.componentName = "lm-react-component")
		};
		return i(t),
		t.settings.hasHeaders === !1 && (t.dimensions.headerHeight = 0),
		t
	},
	_adjustToWindowMode : function () {
		var t = $('<div class="lm_popin" title="' + this.config.labels.popin + '"><div class="lm_icon"></div><div class="lm_bg"></div></div>');
		t.click(lm.utils.fnBind(function () {
				this.emit("popIn")
			}, this)),
		document.title = lm.utils.stripTags(this.config.content[0].title),
		$("head").append($("body link, body style, template, .gl_keep")),
		this.container = $("body").html("").css("visibility", "visible").append(t);
		document.body.offsetHeight;
		window.__glInstance = this
	},
	_createSubWindows : function () {
		var t,
		e;
		for (t = 0; t < this.config.openPopouts.length; t++)
			e = this.config.openPopouts[t], this.createPopout(e.content, e.dimensions, e.parentId, e.indexInParent)
	},
	_setContainer : function () {
		var t = $(this.container || "body");
		if (0 === t.length)
			throw new Error("GoldenLayout container not found");
		if (t.length > 1)
			throw new Error("GoldenLayout more than one container element specified");
		t[0] === document.body && (this._isFullPage = !0, $("html, body").css({
				height : "100%",
				margin : 0,
				padding : 0,
				overflow : "hidden"
			})),
		this.container = t
	},
	_create : function (t) {
		var e;
		if (!(t.content instanceof Array))
			throw e = void 0 === t.content ? "Missing setting 'content' on top level of configuration" : "Configuration parameter 'content' must be an array", new lm.errors.ConfigurationError(e, t);
		if (t.content.length > 1)
			throw e = "Top level content can't contain more then one element.", new lm.errors.ConfigurationError(e, t);
		this.root = new lm.items.Root(this, {
				content : t.content
			}, this.container),
		this.root.callDownwards("_$init"),
		"__glMaximised" === t.maximisedItemId && this.root.getItemsById(t.maximisedItemId)[0].toggleMaximise()
	},
	_onUnload : function () {
		if (this.config.settings.closePopoutsOnUnload === !0)
			for (var t = 0; t < this.openPopouts.length; t++)
				this.openPopouts[t].close()
	}
}), function () {
	"function" == typeof define && define.amd ? define(["jquery"], function (t) {
		return $ = t,
		lm.LayoutManager
	}) : "object" == typeof exports ? module.exports = lm.LayoutManager : window.GoldenLayout = lm.LayoutManager
}
();