lm.items.Stack = function (t, e, i) {
	lm.items.AbstractContentItem.call(this, t, e, i),
	this.element = $('<div class="lm_item lm_stack"></div>'),
	this._activeContentItem = null,
	this._dropZones = {},
	this._dropSegment = null,
	this._contentAreaDimensions = null,
	this._dropIndex = null,
	this.isStack = !0,
	this.childElementContainer = $('<div class="lm_items"></div>'),
	this.header = new lm.controls.Header(t, this),
	t.config.settings.hasHeaders === !0 && this.element.append(this.header.element),
	this.element.append(this.childElementContainer)
}, lm.utils.extend(lm.items.Stack, lm.items.AbstractContentItem), lm.utils.copy(lm.items.Stack.prototype, {
	setSize : function () {
		var t,
		e = this.element.width(),
		i = this.element.height() - this.layoutManager.config.dimensions.headerHeight;
		for (this.childElementContainer.width(e), this.childElementContainer.height(i), t = 0; t < this.contentItems.length; t++)
			this.contentItems[t].element.width(e).height(i);
		this.emit("resize"),
		this.emitBubblingEvent("stateChanged")
	},
	_$init : function () {
		var t,
		e;
		if (this.isInitialised !== !0) {
			for (lm.items.AbstractContentItem.prototype._$init.call(this), t = 0; t < this.contentItems.length; t++)
				this.header.createTab(this.contentItems[t]), this.contentItems[t]._$hide();
			if (this.contentItems.length > 0) {
				if (e = this.contentItems[this.config.activeItemIndex || 0], !e)
					throw new Error("Configured activeItemIndex out of bounds");
				this.setActiveContentItem(e)
			}
		}
	},
	setActiveContentItem : function (t) {
		if (lm.utils.indexOf(t, this.contentItems) === -1)
			throw new Error("contentItem is not a child of this stack");
		null !== this._activeContentItem && this._activeContentItem._$hide(),
		this._activeContentItem = t,
		this.header.setActiveContentItem(t),
		t._$show(),
		this.emit("activeContentItemChanged", t),
		this.emitBubblingEvent("stateChanged")
	},
	getActiveContentItem : function () {
		return this.header.activeContentItem
	},
	addChild : function (t, e) {
		t = this.layoutManager._$normalizeContentItem(t, this),
		lm.items.AbstractContentItem.prototype.addChild.call(this, t, e),
		this.childElementContainer.append(t.element),
		this.header.createTab(t, e),
		this.setActiveContentItem(t),
		this.callDownwards("setSize"),
		this.emitBubblingEvent("stateChanged")
	},
	removeChild : function (t, e) {
		var i = lm.utils.indexOf(t, this.contentItems);
		lm.items.AbstractContentItem.prototype.removeChild.call(this, t, e),
		this.header.removeTab(t),
		this.contentItems.length > 0 ? this.setActiveContentItem(this.contentItems[Math.max(i - 1, 0)]) : this._activeContentItem = null,
		this.emitBubblingEvent("stateChanged")
	},
	_$destroy : function () {
		lm.items.AbstractContentItem.prototype._$destroy.call(this),
		this.header._$destroy()
	},
	_$onDrop : function (t) {
		if ("header" === this._dropSegment)
			return this._resetHeaderDropZone(), void this.addChild(t, this._dropIndex);
		if ("body" === this._dropSegment)
			return void this.addChild(t);
		var e,
		i,
		n,
		h = "top" === this._dropSegment || "bottom" === this._dropSegment,
		s = "left" === this._dropSegment || "right" === this._dropSegment,
		o = "top" === this._dropSegment || "left" === this._dropSegment,
		a = h && this.parent.isColumn || s && this.parent.isRow,
		r = h ? "column" : "row",
		l = h ? "height" : "width";
		t.isComponent && (i = this.layoutManager.createContentItem({
					type : "stack"
				}, this), i._$init(), i.addChild(t), t = i),
		a ? (e = lm.utils.indexOf(this, this.parent.contentItems), this.parent.addChild(t, o ? e : e + 1, !0), this.config[l] *= .5, t.config[l] = this.config[l], this.parent.callDownwards("setSize")) : (r = h ? "column" : "row", n = this.layoutManager.createContentItem({
					type : r
				}, this), this.parent.replaceChild(this, n), n.addChild(t, o ? 0 : void 0, !0), n.addChild(this, o ? void 0 : 0, !0), this.config[l] = 50, t.config[l] = 50, n.callDownwards("setSize"))
	},
	_$highlightDropZone : function (t, e) {
		var i,
		n;
		for (i in this._contentAreaDimensions)
			if (n = this._contentAreaDimensions[i].hoverArea, n.x1 < t && n.x2 > t && n.y1 < e && n.y2 > e)
				return void("header" === i ? (this._dropSegment = "header", this._highlightHeaderDropZone(t)) : (this._resetHeaderDropZone(), this._highlightBodyDropZone(i)))
	},
	_$getArea : function () {
		if (this.element.is(":visible") === !1)
			return null;
		var t = lm.items.AbstractContentItem.prototype._$getArea,
		e = t.call(this, this.header.element),
		i = t.call(this, this.childElementContainer),
		n = i.x2 - i.x1,
		h = i.y2 - i.y1;
		return this._contentAreaDimensions = {
			header : {
				hoverArea : {
					x1 : e.x1,
					y1 : e.y1,
					x2 : e.x2,
					y2 : e.y2
				},
				highlightArea : {
					x1 : e.x1,
					y1 : e.y1,
					x2 : e.x2,
					y2 : e.y2
				}
			}
		},
		this._activeContentItem && this._activeContentItem.isComponent === !1 ? e : 0 === this.contentItems.length ? (this._contentAreaDimensions.body = {
				hoverArea : {
					x1 : i.x1,
					y1 : i.y1,
					x2 : i.x2,
					y2 : i.y2
				},
				highlightArea : {
					x1 : i.x1,
					y1 : i.y1,
					x2 : i.x2,
					y2 : i.y2
				}
			}, t.call(this, this.element)) : (this._contentAreaDimensions.left = {
				hoverArea : {
					x1 : i.x1,
					y1 : i.y1,
					x2 : i.x1 + .25 * n,
					y2 : i.y2
				},
				highlightArea : {
					x1 : i.x1,
					y1 : i.y1,
					x2 : i.x1 + .5 * n,
					y2 : i.y2
				}
			}, this._contentAreaDimensions.top = {
				hoverArea : {
					x1 : i.x1 + .25 * n,
					y1 : i.y1,
					x2 : i.x1 + .75 * n,
					y2 : i.y1 + .5 * h
				},
				highlightArea : {
					x1 : i.x1,
					y1 : i.y1,
					x2 : i.x2,
					y2 : i.y1 + .5 * h
				}
			}, this._contentAreaDimensions.right = {
				hoverArea : {
					x1 : i.x1 + .75 * n,
					y1 : i.y1,
					x2 : i.x2,
					y2 : i.y2
				},
				highlightArea : {
					x1 : i.x1 + .5 * n,
					y1 : i.y1,
					x2 : i.x2,
					y2 : i.y2
				}
			}, this._contentAreaDimensions.bottom = {
				hoverArea : {
					x1 : i.x1 + .25 * n,
					y1 : i.y1 + .5 * h,
					x2 : i.x1 + .75 * n,
					y2 : i.y2
				},
				highlightArea : {
					x1 : i.x1,
					y1 : i.y1 + .5 * h,
					x2 : i.x2,
					y2 : i.y2
				}
			}, t.call(this, this.element))
	},
	_highlightHeaderDropZone : function (t) {
		var e,
		i,
		n,
		h,
		s,
		o,
		a,
		r,
		l,
		d = this.header.tabs.length,
		m = !1;
		if (0 === d)
			return a = this.header.element.offset(), void this.layoutManager.dropTargetIndicator.highlightArea({
				x1 : a.left,
				x2 : a.left + 100,
				y1 : a.top + this.header.element.height() - 20,
				y2 : a.top + this.header.element.height()
			});
		for (e = 0; e < d; e++)
			if (i = this.header.tabs[e].element, s = i.offset(), h = s.left, n = s.top, r = i.width(), t > h && t < h + r) {
				m = !0;
				break
			}
		m === !1 && t < h || (l = h + r / 2, t < l ? (this._dropIndex = e, i.before(this.layoutManager.tabDropPlaceholder)) : (this._dropIndex = Math.min(e + 1, d), i.after(this.layoutManager.tabDropPlaceholder)), o = this.layoutManager.tabDropPlaceholder.offset().left, this.layoutManager.dropTargetIndicator.highlightArea({
				x1 : o,
				x2 : o + this.layoutManager.tabDropPlaceholder.width(),
				y1 : n,
				y2 : n + i.innerHeight()
			}))
	},
	_resetHeaderDropZone : function () {
		this.layoutManager.tabDropPlaceholder.remove()
	},
	_highlightBodyDropZone : function (t) {
		var e = this._contentAreaDimensions[t].highlightArea;
		this.layoutManager.dropTargetIndicator.highlightArea(e),
		this._dropSegment = t
	}
});