define(["widget","jquery","jqueryUI"],function(t,n,i){function e(){this.CONFIG={width:500,height:300,title:"系统消息",content:"",hanMask:!0,skinClassName:null,isDraggable:!0,dragHandle:null,hasCloseBtn:!1,handler4CloseBtn:null,text4CancelBtn:"取消",handler4CancelBtn:null,text4AlertBtn:"确定",handler4AlertBtn:null,handler4ConfirmBtn:null,text4PromptBtn:"确定",isPromptInputPassword:!1,defaultValue4PromptInput:!1,maxlength4PromptInput:10,handler4PromptBtn:null}}return e.prototype=n.extend({},new t.Widget,{renderUI:function(){var t="";switch(this.CONFIG.winType){case"alert":t='<input type="button" value="'+this.CONFIG.text4AlertBtn+'" class="window_alertBtn">';break;case"confirm":t='<input type="button" value="'+this.CONFIG.text4ConfirmBtn+'" class="window_confirmBtn"><input type="button" value="'+this.CONFIG.text4CancelBtn+'" class="window_cancelBtn">';break;case"prompt":this.CONFIG.content+='<p class="window_promptInputWrapper"><input type="'+(this.CONFIG.isPromptInputPassword?"password":"text")+'" value="'+this.CONFIG.defaultValue4PromptInput+'" maxlength="'+this.CONFIG.maxlength4PromptInput+'" class="window_promptInput"></p>',t='<input type="button" value="'+this.CONFIG.text4PromptBtn+' " class="window_promptBtn"><input type="button" value="'+this.CONFIG.text4CancelBtn+'" class="window_cancelBtn">'}this.boudingBox=n('<div class="window_boundingBox"><div class="window_body">'+this.CONFIG.content+"</div></div>"),"common"!=this.CONFIG.winType&&(this.boudingBox.prepend('<div class="window_header">'+this.CONFIG.title+"</div>"),this.boudingBox.append('<div class="window_footer">'+t+"</div>")),this.CONFIG.hanMask&&(this._mask=n('<div class="window_mask"></div>'),this._mask.appendTo("body")),this.CONFIG.hasCloseBtn&&this.boudingBox.append('<span class="window_closeBtn">X</span>'),this.boudingBox.appendTo(document.body),this._promptInput=this.boudingBox.find(".window_promptInput")},bindUI:function(){var t=this;this.boudingBox.delegate(".window_alertBtn","click",function(){t.fire("alert"),t.destroy()}).delegate(".window_closeBtn","click",function(){t.fire("close"),t.destroy()}).delegate(".window_confirmBtn","click",function(){t.fire("confirm"),t.destroy()}).delegate(".window_cancelBtn","click",function(){t.fire("cancel"),t.destroy()}).delegate(".window_promptBtn","click",function(){t.fire("prompt",t._promptInput.val()),t.destroy()}),this.CONFIG.handler4AlertBtn&&this.on("alert",this.CONFIG.handler4AlertBtn),this.CONFIG.handler4CloseBtn&&this.on("close",this.CONFIG.handler4CloseBtn),this.CONFIG.handler4PromptBtn&&this.on("prompt",this.CONFIG.handler4PromptBtn)},syncUI:function(){this.boudingBox.css({width:this.CONFIG.width+"px",height:this.CONFIG.height+"px",left:(this.CONFIG.x||(window.innerWidth-this.CONFIG.width)/2)+"px",top:(this.CONFIG.y||(window.innerHeight-this.CONFIG.height)/2)+"px"}),this.CONFIG.skinClassName&&this.boudingBox.addClass(this.CONFIG.skinClassName),this.CONFIG.isDraggable&&(this.CONFIG.dragHandle?this.boudingBox.draggable({handle:this.CONFIG.dragHandle}):this.boudingBox.draggable())},destructor:function(){this._mask&&this._mask.remove()},alert:function(t){return n.extend(this.CONFIG,t,{winType:"alert"}),this.render(),this},confirm:function(t){return n.extend(this.CONFIG,t,{winType:"confirm"}),this.render(),this},prompt:function(t){return n.extend(this.CONFIG,t,{winType:"prompt"}),this.render(),this._promptInput.focus(),this},common:function(t){return n.extend(this.CONFIG,t,{winType:"common"}),this.render(),this}}),{Window:e}});