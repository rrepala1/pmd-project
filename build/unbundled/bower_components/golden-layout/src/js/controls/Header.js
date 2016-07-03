lm.controls.Header=function(t,e){lm.utils.EventEmitter.call(this),this.layoutManager=t,this.element=$(lm.controls.Header._template),this.layoutManager.config.settings.selectionEnabled===!0&&(this.element.addClass("lm_selectable"),this.element.click(lm.utils.fnBind(this._onHeaderClick,this))),this.element.height(t.config.dimensions.headerHeight),this.tabsContainer=this.element.find(".lm_tabs"),this.controlsContainer=this.element.find(".lm_controls"),this.parent=e,this.parent.on("resize",this._updateTabSizes,this),this.tabs=[],this.activeContentItem=null,this._createControls()},lm.controls.Header._template=['<div class="lm_header">','<ul class="lm_tabs"></ul>','<ul class="lm_controls"></ul>',"</div>"].join(""),lm.utils.copy(lm.controls.Header.prototype,{createTab:function(t,e){var s,i;for(i=0;i<this.tabs.length;i++)if(this.tabs[i].contentItem===t)return;return s=new lm.controls.Tab(this,t),0===this.tabs.length?(this.tabs.push(s),void this.tabsContainer.append(s.element)):(void 0===e&&(e=this.tabs.length),e>0?this.tabs[e-1].element.after(s.element):this.tabs[0].element.before(s.element),this.tabs.splice(e,0,s),void this._updateTabSizes())},removeTab:function(t){for(var e=0;e<this.tabs.length;e++)if(this.tabs[e].contentItem===t)return this.tabs[e]._$destroy(),void this.tabs.splice(e,1);throw new Error("contentItem is not controlled by this header")},setActiveContentItem:function(t){var e,s;for(e=0;e<this.tabs.length;e++)s=this.tabs[e].contentItem===t,this.tabs[e].setActive(s),s===!0&&(this.activeContentItem=t,this.parent.config.activeItemIndex=e);this._updateTabSizes(),this.parent.emitBubblingEvent("stateChanged")},_$destroy:function(){this.emit("destroy");for(var t=0;t<this.tabs.length;t++)this.tabs[t]._$destroy();this.element.remove()},_createControls:function(){var t,e,s,i,n,o,a;this.layoutManager.config.settings.showPopoutIcon&&(e=lm.utils.fnBind(this._onPopoutClick,this),s=this.layoutManager.config.labels.popout,new lm.controls.HeaderButton(this,s,"lm_popout",e)),this.layoutManager.config.settings.showMaximiseIcon&&(o=lm.utils.fnBind(this.parent.toggleMaximise,this.parent),i=this.layoutManager.config.labels.maximise,n=this.layoutManager.config.labels.minimise,a=new lm.controls.HeaderButton(this,i,"lm_maximise",o),this.parent.on("maximised",function(){a.element.attr("title",n)}),this.parent.on("minimised",function(){a.element.attr("title",i)})),this.parent.config.isClosable&&this.layoutManager.config.settings.showCloseIcon&&(t=lm.utils.fnBind(this.parent.remove,this.parent),s=this.layoutManager.config.labels.close,new lm.controls.HeaderButton(this,s,"lm_close",t))},_onPopoutClick:function(){this.layoutManager.config.settings.popoutWholeStack===!0?this.parent.popout():this.activeContentItem.popout()},_onHeaderClick:function(t){t.target===this.element[0]&&this.parent.select()},_updateTabSizes:function(){if(0!==this.tabs.length){var t,e,s,i,n=this.element.outerWidth()-this.controlsContainer.outerWidth(),o=0;for(e=0;e<this.tabs.length;e++)t=this.tabs[e].element,t.css("z-index",this.tabs.length-e),o+=t.outerWidth()+parseInt(t.css("margin-right"),10);for(i=(o-n)/(this.tabs.length-1),e=0;e<this.tabs.length;e++)s=!this.tabs[e].isActive&&i>0?"-"+Math.floor(i)+"px":"",this.tabs[e].element.css("margin-left",s);n<o?this.element.css("overflow","hidden"):this.element.css("overflow","visible")}}});