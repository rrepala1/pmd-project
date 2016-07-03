lm.controls.DragProxy=function(t,e,i,n,a,s){lm.utils.EventEmitter.call(this),this._dragListener=i,this._layoutManager=n,this._contentItem=a,this._originalParent=s,this._area=null,this._lastValidArea=null,this._dragListener.on("drag",this._onDrag,this),this._dragListener.on("dragStop",this._onDrop,this),this.element=$(lm.controls.DragProxy._template),this.element.css({left:t,top:e}),this.element.find(".lm_title").html(this._contentItem.config.title),this.childElementContainer=this.element.find(".lm_content"),this.childElementContainer.append(a.element),this._updateTree(),this._layoutManager._$calculateItemAreas(),this._setDimensions(),$(document.body).append(this.element);var h=this._layoutManager.container.offset();this._minX=h.left,this._minY=h.top,this._maxX=this._layoutManager.container.width()+this._minX,this._maxY=this._layoutManager.container.height()+this._minY,this._width=this.element.width(),this._height=this.element.height()},lm.controls.DragProxy._template='<div class="lm_dragProxy"><div class="lm_header"><ul class="lm_tabs"><li class="lm_tab lm_active"><i class="lm_left"></i><span class="lm_title"></span><i class="lm_right"></i></li></ul></div><div class="lm_content"></div></div>',lm.utils.copy(lm.controls.DragProxy.prototype,{_onDrag:function(t,e,i){var n=i.pageX,a=i.pageY,s=n>this._minX&&n<this._maxX&&a>this._minY&&a<this._maxY;(s||this._layoutManager.config.settings.constrainDragToContainer!==!0)&&(this.element.css({left:n,top:a}),this._area=this._layoutManager._$getArea(n,a),null!==this._area&&(this._lastValidArea=this._area,this._area.contentItem._$highlightDropZone(n,a,this._area)))},_onDrop:function(){this._layoutManager.dropTargetIndicator.hide(),null!==this._area?this._area.contentItem._$onDrop(this._contentItem):null!==this._lastValidArea?this._lastValidArea.contentItem._$onDrop(this._contentItem):this._originalParent&&this._originalParent.addChild(this._contentItem),this.element.remove()},_updateTree:function(){this._contentItem.parent&&this._contentItem.parent.removeChild(this._contentItem,!0),this._contentItem._$setParent(this)},_setDimensions:function(){var t=this._layoutManager.config.dimensions,e=t.dragProxyWidth,i=t.dragProxyHeight-t.headerHeight;this.childElementContainer.width(e),this.childElementContainer.height(i),this._contentItem.element.width(e),this._contentItem.element.height(i),this._contentItem.callDownwards("_$show"),this._contentItem.callDownwards("setSize")}});