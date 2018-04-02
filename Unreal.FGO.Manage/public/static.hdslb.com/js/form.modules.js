(function(f){function b(g,c){this.config=f.extend(!0,{focusShowPos:"down",center:!1,bound:!1},g);this.animation={};f.extend(!0,this.animation,c);this.error=0;this.msgMap={};this.msgArray=[];this.firstErr=null}function d(i,c,m){var l=this;this.options={title:"\u6d88\u606f\u7a97",className:"",btns:{ok:"\u786e\u5b9a",cancel:"\u53d6\u6d88"},animation:"wnd-in",confirm:void 0,cancel:void 0};f.isPlainObject(i)?f.extend(!0,this.options,i):(this.options.title=i||this.options.title,this.options.confirm=c||this.options.confirm,this.options.cancel=m||this.options.cancel);this.mask=f('<div class="wnd-mask"></div>');this.wnd=f('<div class="float-wnd"><div class="content"><div class="title">'+this.options.title+'<div class="tag-icon tag-icon-wnd-close wnd-close"></div></div><div class="wnd-body"><div class="info"><div class="text"><p></p></div></div><div class="btn-wrp"></div></div></div></div>').addClass(this.options.className);var k,j;!1!==this.options.confirm&&(k=f('<div class="b-btn inline ok"></div>').text(this.options.btns.ok).appendTo(f(".btn-wrp",this.wnd)));this.options.cancel&&(j=f('<div class="b-btn inline b-btn-cancel"></div>').text(this.options.btns.cancel).appendTo(f(".btn-wrp",this.wnd)));if(this.options.cancel){j.off("click").on("click",function(){l.close();l._trigger("cancel")})}if(!1!==this.options.confirm){k.off("click").on("click",function(){("function"==typeof l.options.confirm&&!1!==l._trigger("confirm")||"function"!=typeof l.options.confirm)&&l.close()})}this.wnd.find(".wnd-close").off("click").on("click",function(){l.close()})}var e={};MessageBox.prototype.change=function(g,c){var h=this;f(".mini",this.msg).text(g);"undefined"!=typeof c&&(this.leftTimer=function(){clearTimeout(h.timer);h.timer=setTimeout(function(){clearTimeout(h.timer);h.close()},c)},this.leftTimer())};MessageBox.prototype.showEx=function(t,s,r,o,l,k){var m=this;this.focusShowPos="down";var j=200,i="",c={opacity:1,top:"-=5"};"object"==typeof s?(i=s.msg,f.extend(!0,c,s.data),"undefined"!=typeof s.dur&&(j=s.dur)):i=s;this.close=function(g){g="undefined"!=typeof g&&"object"!=typeof g?g:500;this.bindobj.removeAttr("hasMessageBox");this.msgbox.fadeOut(g,function(){m.msgbox.remove();"over"==m.evType&&m.bindobj.off("mouseenter",m.incomingTimer);m.bindobj.off("over"==m.evType?"mouseleave":"blur",m.leftTimer)});"error"==o&&(m.bindobj.removeClass("error"),m.clearErrorEvent())};s=this.show(t,i,r,o,l);if("undefined"!=typeof s){this.msgbox.stop().css("height","auto");this.closeHandler=function(g){m.close()};if("error"==o){t.off("mouseleave",this.leftTimer);0!=r?t.off("mouseenter",this.incomingTimer):this.msgbox.off("mouseleave",this.leftTimer);this.msgbox.find(".mini b").addClass("b-icon b-icon-error");this.msgbox.addClass("error");t.addClass("error");if(t.is(":text")||t.is("textarea")){t.on("focus",this.closeHandler)}else{if(0<t.find(":text,textarea").length){t.find(":text,textarea").on("focus",this.closeHandler)}else{if(t.is(":checkbox")||t.is("select")||t.is(":file")){t.on("change",this.closeHandler)}}}"function"==typeof l&&l()}else{"loading"==o?(this.msgbox.off("mouseleave",this.leftTimer),t.off("mouseleave",this.leftTimer),this.msgbox.addClass("loading"),t.addClass("loading")):"finish"==o?this.msgbox.addClass("finish"):"tips"==o&&(t.off("mouseenter",this.incomingTimer),t.off("mouseleave",this.leftTimer),this.msgbox.addClass("finish"))}this.setPos();k&&f(k).length&&(this.target=f(k),s.css({top:0,left:0}).appendTo(k));this.msgbox.css("top","+=5");this.msgbox.animate(c,j)}};MessageBox.prototype.clearErrorEvent=function(){var c=this.bindobj;c.is(":text")||c.is("textarea")?c.off("focus",this.closeHandler):0<c.find(":text,textarea").length?c.find(":text,textarea").off("focus",this.closeHandler):(c.is(":checkbox")||c.is("select")||c.is(":file"))&&c.off("change",this.closeHandler)};MessageBox.prototype.showLoading=function(h,l,k,j,i){this.show(h,l,k,j,i);this.bindobj.off("mouseleave",this.leftTimer);this.msgbox.off("mouseleave",this.leftTimer)};MessageBox.prototype.scrollToMsg=function(g){var c=null,c="undefined"!=typeof g?g:this.bindobj;f("html,body").animate({scrollTop:c.offset().top-50},200)};MessageBox.prototype.resetPos=function(){if(!this.target||!this.target.length){var c=this.bindobj;"down"!=this.focusShowPos&&(f(c).offset().top+f(c).outerHeight()+this.msgbox.outerHeight()-f("body").scrollTop()>f(window).height()||"up"==this.focusShowPos)?this.position.top=f(c).offset().top-this.msgbox.outerHeight():this.position.top=f(c).offset().top+f(c).outerHeight();this.position.left=f(c).offset().left;"undefined"!=typeof this.sp_position&&(this.position=this.sp_position);this.msgbox.css({top:this.position.top,left:this.position.left})}};f.fn.serializeObject=function(){var c={};f.each(this.serializeArray(),function(g,i){var h=c[i.name];"undefined"!==typeof h&&null!==h?f.isArray(h)?h.push(i.value):c[i.name]=[h,i.value]:c[i.name]=i.value});return c};var a=function(){var t=!1,s=function(u,h,x){t&&(h*=2);var g=u.data("strlen-count")||{element:null,maxLen:h,target:x};g.target||k();var v=u.offset().top,y=u.offset().left,q;g.element?q=g.element:(q=f('<div class="strlen-count"></div>'),g.element=q,u.data("strlen-count",g));g=o(u.val(),t);q.html(g+"/"+h);q.appendTo(x||"body");if(!x){x=-q.outerHeight()-1;var w=u.outerWidth()-q.outerWidth();q.css({top:v+x,left:y+w})}l(u,q,g,h)},r=function(h,g){t&&(g*=2);var q=h.data("strlen-count").element,p=o(h.val(),t);q.html(p+"/"+g);if(!h.data("strlen-count").target){var n=h.offset().left+h.outerWidth()-q.outerWidth();q.css({left:n})}l(h,q,p,g)},o=function(g,p){var n=0;p=void 0!==p?p:t;g=g.replace(/\r\n?/,"\n");if(p){for(var h=0;h<g.length;h++){n=/[^\u0000-\u00ff]/.test(g[h])?n+2:n+1}}else{n=g.length}return n},l=function(h,g,p,n){p>n?(g.addClass("error"),h.addClass("error")):(g.removeClass("error"),h.removeClass("error"))},k=function(){f(".strlen-count").remove()},m=function(){var g=f(this),h=parseInt(g.attr("maxlen"));s(g,h)},j=function(){var g=f(this);k(g)},i=function(){var h=f(this),g=parseInt(h.attr("maxlen"));r(h,g)},c=function(g,n,h){g.attr("maxlen",n);g.off("focus",m);g.off("blur",j);h||(g.focus(m),g.blur(j));g.keyup(i);s(g,n,h)};return{bind:function(g,h){!0===h&&(t=!0);f(g).find("[maxlen]").each(function(p,n){var u=f(n),q=parseInt(u.attr("maxlen"));u.data("strlen-count")?r(u,q):c(u.find("input[type=text],textarea"),q,u)})},on:c,getLen:o}}();b.prototype={init:function(){for(var c=this.error=0;c<this.msgArray.length;c++){this.msgArray[c].msgbox&&this.msgArray[c].close(0)}this.msgArray=[];this.firstErr=null},showErrMsg:function(i,c,n,m,k){null==this.firstErr&&(this.firstErr=i);var j=this.msgArray[this.error]=new MessageBox(this.config);if("undefined"!=typeof c){n="undefined"!=typeof n?n:0;var l=null;k&&("string"==typeof k?(this.msgMap[k]=j,l=f("[err-name="+k+"]")):k instanceof jQuery&&(l=k));this.msgArray[this.error].showEx(i,f.extend(!0,{msg:c},this.animation),n,"error",m,l);this.msgArray[this.error].msgbox?i.data("errorMsgBox",j):(this.error--,this.msgArray.pop())}this.error++;return j},close:function(c){"string"==typeof c&&this.msgMap[c]&&this.msgMap[c].msgbox&&this.msgMap[c].msgbox.is(":visible")?this.msgMap[c].close():c instanceof f&&(c.data("errorMsgBox")&&c.data("errorMsgBox").msgbox&&c.data("errorMsgBox").msgbox.is(":visible"))&&c.data("errorMsgBox").close()},removeErr:function(c){this.msgArray[c].needRemove=1},getIndex:function(g){for(var c=0;c<this.msgArray.length;c++){if(this.msgArray[c].bindobj.selector==g.selector){return c}}},clear:function(){for(var c=0;c<this.msgArray.length;c++){this.msgArray[c].msgbox&&(this.msgArray[c].bindobj.removeClass("error"),this.msgArray[c].close())}}};d.prototype={constructor:d,show:function(c){this.wnd.find(".text p").html(c);this.open()},set:function(c){this.wnd.find(".info").replaceWith(c)},open:function(){var c=this;this.mask.remove();this.mask.appendTo("body").hide().fadeIn(200);this.wnd.appendTo("body");setTimeout(function(){c.wnd.fadeIn(200).addClass(c.options.animation)},0);this.wnd.css({"margin-top":-this.wnd.outerHeight()/2,"margin-left":-this.wnd.outerWidth()/2})},close:function(){this.mask.remove();this.wnd.hide().removeClass(this.options.animation)},_trigger:function(){var g=Array.prototype.slice.call(arguments,0),c=g.shift();if(this.options[c]){return this.options[c].apply(this,g)}}};e.StrLenCount=a;e.ErrManager=b;e.FloatMessageBox=d;return window.FormModules=e})(jQuery);