!function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,exports,t){"use strict";var jQuery=window.jQuery||t(1);t(2),t(3),function($,e){var i=e.location||{},n=i.hostname||"",a=e.BiliCm={env:"ENV_PRO"};a.config=t(4),a.utils=t(7),a.loadwebp=t(8),a.base=e.ad_rp=t(9),a.base.init(),t(10);var r=t(11);a.config&&a.config.PGC_HOSTNAME===n&&r.mainAd()}(jQuery,window)},function(e,exports){e.exports=window.jQuery},function(module,exports){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};"object"!==("undefined"==typeof JSON?"undefined":_typeof(JSON))&&(JSON={}),function(){function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var i,n,a,r,o,s=gap,d=t[e];switch(d&&"object"===("undefined"==typeof d?"undefined":_typeof(d))&&"function"==typeof d.toJSON&&(d=d.toJSON(e)),"function"==typeof rep&&(d=rep.call(t,e,d)),"undefined"==typeof d?"undefined":_typeof(d)){case"string":return quote(d);case"number":return isFinite(d)?String(d):"null";case"boolean":case"null":return String(d);case"object":if(!d)return"null";if(gap+=indent,o=[],"[object Array]"===Object.prototype.toString.apply(d)){for(r=d.length,i=0;i<r;i+=1)o[i]=str(i,d)||"null";return a=0===o.length?"[]":gap?"[\n"+gap+o.join(",\n"+gap)+"\n"+s+"]":"["+o.join(",")+"]",gap=s,a}if(rep&&"object"===("undefined"==typeof rep?"undefined":_typeof(rep)))for(r=rep.length,i=0;i<r;i+=1)"string"==typeof rep[i]&&(n=rep[i],a=str(n,d),a&&o.push(quote(n)+(gap?": ":":")+a));else for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(a=str(n,d),a&&o.push(quote(n)+(gap?": ":":")+a));return a=0===o.length?"{}":gap?"{\n"+gap+o.join(",\n"+gap)+"\n"+s+"}":"{"+o.join(",")+"}",gap=s,a}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,i){var n;if(gap="",indent="","number"==typeof i)for(n=0;n<i;n+=1)indent+=" ";else"string"==typeof i&&(indent=i);if(rep=t,t&&"function"!=typeof t&&("object"!==("undefined"==typeof t?"undefined":_typeof(t))||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var i,n,a=e[t];if(a&&"object"===("undefined"==typeof a?"undefined":_typeof(a)))for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n=walk(a,i),void 0!==n?a[i]=n:delete a[i]);return reviver.call(e,t,a)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()},function(e,exports){"use strict";!function($,e){var t=function(e,t){var i;return function(){function n(){e.apply(a,r),i=null}var a=this,r=arguments;i&&clearTimeout(i),i=setTimeout(n,t||100)}};jQuery.fn[e]=function(i){return i?this.on("resize",t(i)):this.trigger(e)}}(jQuery,"smartresize")},function(e,exports,t){"use strict";var i=t(5),n=t(6);switch(window.BiliCm&&window.BiliCm.env){case"ENV_TEST":case"ENV_DEV":i=n}e.exports=i},function(e,exports){"use strict";e.exports={API_BILIBILI_HOSTNAME:"//api.bilibili.com",DATA_BILIBILI_HOSTNAME:"//data.bilibili.com",DATA_BILIBILI_OTHER_HOSTNAME:"//data.bilibili.com",PGC_HOSTNAME:"bangumi.bilibili.com",VEDIO_URL_REG:/www\.bilibili\.com\/video\/av/i,BASE_AD_IMG:"//static.hdslb.com/images/base/ad.png",ADOBE_SHOCKWAVE_URL:"//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash",GOOGLE_AD_JS_URL:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}},function(e,exports){"use strict";e.exports={API_BILIBILI_HOSTNAME:"//api.bilibili.com",DATA_BILIBILI_HOSTNAME:"//data.bilibili.com",DATA_BILIBILI_OTHER_HOSTNAME:"//cpm-data.bilibili.com",PGC_HOSTNAME:"bangumi.bilibili.com",VEDIO_URL_REG:/www\.bilibili\.com\/video\/av/i,BASE_AD_IMG:"//static.hdslb.com/images/base/ad.png",ADOBE_SHOCKWAVE_URL:"//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash",GOOGLE_AD_JS_URL:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}},function(e,exports){"use strict";e.exports=function($,e,t){return{sendReq:function(e){$.ajax(e)},adJsonp:function(e){if(e.url){var t={type:"GET",url:e.url,dataType:"jsonp",data:e.data,success:e.success||function(e){},error:e.error||function(e){}};e.callback&&(t.callback=e.callback),this.sendReq(t)}},adPostJSONLite:function(e,t){$.browser.msie&&parseInt($.browser.version)<=9?(e.data.script="script",e.callback=t.callbackName||null,this.adPostJSON(e)):this.sendReq(e)},adPostJSON:function(i){var n=e.location.href||"",a=function(i,n){e.Bilibili&&(e.Bilibili.interface_domain=i),t.domain=n};n.match(/\.bilibili\.tv/)?a("interface.bilibili.tv","bilibili.tv"):n.match(/\.bilibili\.com/)?a("interface.bilibili.com","bilibili.com"):a("interface.bilibili.cn","bilibili.cn");var r=i.callback||"_jsonpCallback_"+(new Date).getTime(),o=$('<iframe name="frm'+r+'" id="frm'+r+'" style="visibility:hidden; width:1px; height:1px"></iframe>').appendTo("body"),s=$('<form action="'+i.url+'" method="POST" target="frm'+r+'"></form>').appendTo("body");"undefined"==typeof i.data&&(i.data={}),i.data[i.jsonpCallback||"callback"]=r;for(var d in i.data)$('<input type="hidden" name="'+d+'" />').appendTo(s).val(i.data[d]);e[r]=function(e){"function"==typeof i.success&&i.success(e),"function"==typeof i.complete&&i.complete(e),o.remove(),s.remove()},s.submit()}}}(jQuery,window,document)},function(e,exports){"use strict";e.exports=function(e,t){return{isWebp:function(){try{return 0==t.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")}catch(e){return!1}}(),setSrc:function(e){var t=this._urlFormat(e);e=t?t:e;var i="",n=e.match(/_(\d+)x(\d+)./),a=e.indexOf("/bfs/")!=-1,r=e.indexOf(".gif")!=-1,o=e.indexOf(".webp")!=-1;return!this.isWebp||!a||r||o?e.replace(/^http:/i,""):(i=null===n?e+"@.webp":e.substring(0,e.lastIndexOf("_"))+"@"+n[1]+"w_"+n[2]+"h.webp",i.replace(/^http:/i,""))},_urlFormat:function(t){var i=/\/\d+?_\d+?\/bfs/,n=t.replace(i,"/bfs"),a=e.RegExp;if(!i.test(t))return!1;var r=/\/(\d+?)_(\d+?)\/bfs\/\w+?\/.+?(\.\w{3,4})/;r.exec(t);return n+"_"+a.$1+"x"+a.$2+a.$3}}}(window,document)},function(e,exports){"use strict";e.exports=function($,e,t,i){var n=e.BiliCm,a=n.config,r=n.utils||{};return{_list:[],_log:[],_getDataHostname:function(){return a["DATA_BILIBILI_HOSTNAME"]},_getOtherDataHostname:function(){return a["DATA_BILIBILI_OTHER_HOSTNAME"]},_getWebAdLogUrl:function(){return this._getDataHostname()+"/v/web/web_cm_event"},_getFeesDataUrl:function(){return this._getOtherDataHostname()+"/cm/api/fees/pc"},_getApiPvUrl:function(){return this._getOtherDataHostname()+"/cm/api/apidata/pc"},_genReqOps:function(e,t,i){return JSON.stringify({uploads:[{ad_server:e.server?e.server:"bilibili",is_ad:e.is_ad?1:0,ad_cb:e.ad_cb,area:e.area,event:t?t:"",is_visible:1,idx:e.pos_num,src_id:e.src_id,mid:__GetCookie&&__GetCookie("DedeUserID"),client_version:i?i:"",resource_id:e.resource_id&&$.isNumeric(e.resource_id)?e.resource_id:"",ts:e["ts"]||Date.now(),_:e["_"]||parseInt(1e6*Math.random(),10)}]})},_genReqPostOps:function(e,t,i,n){var a=this,r=a._genReqOps(t,i,n);return{url:e,type:"POST",data:$.browser.msie&&parseInt($.browser.version,10)<=9?{message:r}:r,headers:{"Content-Type":"application/json"},dataType:"json",xhrFields:{withCredentials:!0},success:function(e){},error:function(e){}}},_sendTposReq:function(e){if(!e)return!1;var t=new Image(1,1);t.onload=t.onerror=function(){t=null},t.src=e},_genLogReqOps:function(t){var n=function(e){return e===i?"":"boolean"==typeof e?e?1:0:"number"==typeof e?e?1:0:e?1:0};return{log_name:t["log_name"],page_ref:e.encodeURIComponent(e.location.href),resource_id:t["resource_id"],src_id:t["src_id"]!==i?t["src_id"]:"",is_cm_loc:n(t["is_ad_loc"]),is_cm:n(t["is_ad"]),event:t["event"]!==i?t["event"]:"",ts:t["ts"]}},_colWebAdLog:function(e,t){try{r.adJsonp({url:e,data:t})}catch(i){}},_sendWebLogPv:function(){var t=e.location,i=t.hostname,n=t.pathname;if("www.bilibili.com"===i){var a={log_name:"pv",ts:Date.now()};if("/"===n||"/index.html"===n)return this._colWebAdLog(this._getWebAdLogUrl(),this._genLogReqOps($.extend({},a,{resource_id:"29"})));if(/^(\/video\/av)/i.test(n))return this._colWebAdLog(this._getWebAdLogUrl(),this._genLogReqOps($.extend({},a,{resource_id:encodeURIComponent([124,126].join(";"))})))}},_filter:function(){for(var e in this._list)this._list.hasOwnProperty(e)&&this._watch(this._list[e])},_watch:function(t){var i=$(e),n=$(t.el),a=t.data,r=t.height=t.height||n.height(),o=t.top=t.top||n.offset()&&n.offset().top,s=i.scrollTop(),d=s+i.height(),c=!!a.server||t.img[0]&&t.img[0].complete;o+Math.ceil(r/2)>s&&o+Math.ceil(r/2)<d&&c&&(a.focus?a.show&&this._show(t):this._show(t))},_show:function(e){var t=$.extend({},e.data,{ts:Date.now(),_:parseInt(1e6*Math.random(),10)});r.adPostJSONLite(this._genReqPostOps(this._getFeesDataUrl(),t,"show")),this._colWebAdLog(this._getWebAdLogUrl(),this._genLogReqOps($.extend({},t,{log_name:"eventlog",event:"show"}))),t.show_url&&this._sendTposReq(t.show_url),this._list.splice(this._list.indexOf(e),1)},_hit:function(e){var t=$.extend({},e.data,{ts:Date.now(),_:parseInt(1e6*Math.random(),10)});r.adPostJSONLite(this._genReqPostOps(this._getFeesDataUrl(),t,"click")),this._colWebAdLog(this._getWebAdLogUrl(),this._genLogReqOps($.extend({},t,{log_name:"eventlog",event:"click"})))},send:function(e,t,i){var n=e?this._getFeesDataUrl():this._getApiPvUrl(),a=$.extend({},t,{ts:Date.now(),_:parseInt(1e6*Math.random(),10)});r.adPostJSONLite(this._genReqPostOps(n,a,e,i)),e&&this._colWebAdLog(this._getWebAdLogUrl(),this._genLogReqOps($.extend({},a,{log_name:"eventlog",event:e})))},add:function(t,i){var n=this,a=i["resource_id"]||$(t).attr("data-loc-id")||$("[data-loc-id]",t).attr("data-loc-id"),o={el:t,locid:a,rid:i.request_id,cid:i.creative_id,sid:i.src_id,data:i?i["resource_id"]?i:$.extend(i,{resource_id:a?+a:""}):null,img:$("img",t)};try{!i["resource_id"]||23!==+i["resource_id"]&&29!==+i["resource_id"]&&124!==+i["resource_id"]&&126!==+i["resource_id"]||this._colWebAdLog(this._getWebAdLogUrl(),this._genLogReqOps($.extend({},i,{log_name:"apidata",ts:Date.now()}))),i&&i.is_ad_loc&&r.adPostJSONLite(n._genReqPostOps(this._getApiPvUrl(),i))}catch(s){}if(i.is_ad&&i.is_ad_loc||$("img[img-ad]",t).remove(),i.is_ad_loc&&this._log.indexOf(o.rid+"|"+o.cid+"|"+o.sid+"|"+o.locid)===-1){var d=e.navigator.userAgent.match(/iPad/i)?"touchstart":"click";this._log.push(o.rid+"|"+o.cid+"|"+o.sid+"|"+o.locid),this._list.push(o),i.focus&&(i.trigger=function(){n._filter()}),$(t).on(d,function(e){n._hit(o)})}},formatCmSyncUrl:function(e,t,i){var n="javascript:void(0);";if(!e||!e.url)return n;if(!e.is_ad_loc)return e.url||n;try{var a={uploads:[{a:e.src_id,b:e.server||"bilibili",c:e.is_ad?1:0,e:e.ad_cb,d:e.area,f:"click_sync",g:1,h:e.pos_num,i:__GetCookie&&__GetCookie("DedeUserID"),j:i||"",k:t||"",l:Date.now()}]};return this._getOtherDataHostname()+"/cm/api/fees/pc/sync?msg="+encodeURIComponent(JSON.stringify(a))+"&loc="+encodeURIComponent(e.url)}catch(r){}return e.url||n},_bindEvent:function(){var i=this,n=$(t),a=$(e);n.on("add.BiliCm",function(e,t){i.add(t.elem,t.data)}),n.on("send.BiliCm",function(e,t){i.send(t.event,t.data,t.version)}),a.on("scroll.BiliCm",function(){i._filter()})},init:function(){var e=this,t=function i(){e._filter(),setTimeout(function(){i()},2e3)};e._sendWebLogPv(),e._bindEvent(),t()}}}(jQuery,window,document)},function(e,exports){"use strict";!function($,e,t,i){var n=e.BiliCm||{},a=n.config||{},r=n.utils||{},o=n.loadwebp||{},s={0:[40,42,44],1:[151,152,153],3:[243,245,247],129:[249,251,253],4:[255,257,259],36:[261,263,265],160:[273,275,277],5:[267,269,271],119:[285,287,289],155:[279,281,283]},d={124:["arc",51,".ad-fl",4993155050],126:["arc",46,".ad-fr",6469888252],130:["arc",3,".ad-e1",8033278259]},c={arc:{thin:{".ad-e1":{width:690,height:56},".ad-fl":{width:468,height:60},".ad-fr":{width:468,height:60}},wide:{".ad-e1":{width:870,height:72},".ad-fl":{width:468,height:60},".ad-fr":{width:468,height:60}}}},l={indexAd1:1630,indexAd2:1630,indexAd3:2,indexAd4:3,indexAd5:4,partitionAd1:11,partitionAd2:11,partitionAd3:12,partitionAd4:13,partitionAd5:14,secondPartitionAd1:11,secondPartitionAd2:11,rankAd1:1626,rankAd2:1626,rankAd3:136,rankAd4:138,topicAd1:132,topicAd2:134,topicAd3:1628},u={1:"1578",13:"1614",3:"1582",129:"1586",4:"1590",36:"1594",160:"1602",119:"1610",155:"1606",5:"1598"},f=function(t,a,r){return{_adCache:{},_isWideScreen:function(){return!!$("body").hasClass("widescreen")},_getResLocsUrl:function(){return t["API_BILIBILI_HOSTNAME"]+"/x/web-show/res/locs"},_getKeys:function(e){var t=[];for(var i in e)t.push(i);return t},_winSmartSize:function(t){var i=this;$(e).smartresize(function(){$.isFunction(t)&&t.call(i)})},_sendAdData:function(e,t){var i=n&&n.base||{};return i&&i.add&&i.add(e,t)},_newAdAjaxs:function(e,t,i){var n=e&&e.join(",")||"",r=this;return a.adJsonp({url:r._getResLocsUrl(),data:{pf:0,ids:n,jsonp:"jsonp"},success:function(n){n&&0===n.code?t.call(r,n,i):r._errorHandle(e,1)},error:function(){r._errorHandle(e,2)}})},_createBannerAd:function(e){var i=$('<div style="display: none; overflow: hidden; border-radius: 5px; position: relative;"><a target="_blank"><img style="width: 100%; height: 100%;" /><img img-ad src="'+t["BASE_AD_IMG"]+'" style="width:32px;height:20px;position:absolute;left:2px;bottom:2px;" /></a></div>'),n=i.find("a"),a=i.find("a img:eq(0)");return i.attr({"data-loc-id":e||"","data-ad-type":"banner"}),i.hide(),{bannerWrp:i,bannerLink:n,bannerImg:a}},_resetBannerSize:function(e,t){var i=this,n=i._adCache,a=i._isWideScreen(),r=function(e,t){var i={},n=!!+e.find("a").data("hasurl");!n&&t&&(i={height:"1px",width:"1160px",overflow:"hidden","margin-bottom":0,"margin-top":0}),n||t||(i={height:"1px",width:"980px",overflow:"hidden","margin-bottom":0,"margin-top":0}),n&&t&&(i={width:"1160px",height:"96px"}),n&&!t&&(i={width:"980px",height:"80px"}),e.css(i).show()};for(var o in n)"bannerAd"!==o&&r(n[o].bannerWrp,a)},_createBannerTpl:function(e,t,i,n){var a=this,r=a._adCache||(a._adCache={});r.bannerAd=!0;for(var o=0,s=e.length;o<s;o++){var d=a._createBannerAd(e[o]||"");i&&d.bannerWrp.css(i),r["bannerAd_"+o]=d,$.isFunction(t)&&t.call(a,d,o)}},_mainBannerRender:function(t,i){var n=this,a=e.localStorage||null,o=a&&a.getItem("killSideBarAd");if(!(parseInt(o)+864e5>(new Date).getTime())){var s=$("[data-loc-id="+(i||t["resource_id"])+"]")||null;s&&(s.find("a").attr({"data-hasurl":t.url?"1":"0",href:t.url||"javascript: void(0);"}),s.find("img").eq(0).attr({src:r.setSrc(t.pic||t.litpic||"")}),s.attr({"data-id":t.id,"data-name":t.name}).show(),n._sendAdData(s,t))}},_mainSuccessHandle:function(e){var t=this,i=e.data||{};for(var n in i){var a=i[n]&&i[n][0];a&&(a?t._mainBannerRender($.extend(a,{loc_id:n,resource_id:n}),n):t._errorHandle([n],0))}},_errorHandle:function(e,t){for(var i=$(document),n=0,a=e.lenth;n<a;n++)$("[data-loc-id="+e[n]+"]").attr({"data-error-type":t}),i.trigger("adLoadError",{"data-loc-id":e[n],"data-error-type":t})},_resetVedioBanner:function(e){var t=d,i=c;for(var n in t){var a=t[n],r=a[0],o=a[2],s=i[r][e?"wide":"thin"][o],l=$(o).find("a[data-loc-id]");+l.data("hasurl")?l.find("img").attr({width:s["width"],height:s["height"]}):l.find("img").attr({width:s["width"],height:1})}},_vedioSuccessHandle:function(e,n,a){var o=this,s=e.data,d={},c=function(e,t,n){var a=[124,126],r=function(e){e.css({height:"1px",overflow:"hidden"})},o=function(e,t){for(var n=0,a=t.length;n<a;n++)if(e[t[n]]!==i&&null!==e[t[n]])return!0;return!1};return $.inArray(+e,a)>-1?(d[e]=t?t:null,o(d,a)||(r(n),n.parent(".ad-f").css({"margin-bottom":"0"})),!1):void(130!==e||t||r(n))},l=function(e,i,n,a){try{var s=i[0],d=i[1],l=i[2],u=!1,f=$(l);if(o._isWideScreen()&&(u=!0),n["is_ad_loc"]&&1!==n.area)return n.server="google",f.css({"text-align":"center",display:"block"}).html('<script async src="'+t["GOOGLE_AD_JS_URL"]+'"></script><ins class="adsbygoogle" style="display:inline-block;width:468px;height:60px" data-ad-client="ca-pub-7192215716035284" data-ad-slot="'+i[3]+'"></ins> <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>').show(),!0;c(e,n["url"],f),$(l+" #a_ds_"+d).remove(),"img"==a?(f.html('<a id="a_ds_'+d+'" data-id="'+(n["id"]||"")+'" data-hasurl="'+(n["url"]?"1":"0")+'" data-loc-id="'+(e||"")+'" href="'+(n["url"]||"javascript: void(0);")+'" target="_blank "><img src="'+r.setSrc(u?n["pic"]:n["pic"])+'" border="0" /></a>'),n.is_ad_loc&&n.is_ad&&f.css({position:"relative"}).append('<img img-ad src="'+t["BASE_AD_IMG"]+'" style="width:32px;height:20px;position:absolute;left:2px;bottom:2px;">'),o._sendAdData(f,n)):f.html('<embed id="a_ds_'+d+'" wmode="opaque" pluginspage="'+t["ADOBE_SHOCKWAVE_URL"]+'" allowscriptaccess="none" rel="noreferrer" src="'+(u?n["pic"]:n["pic"])+'" type="application/x-shockwave-flash" allowfullscreen="true" quality="high">'),f.attr({"b-stat":s+l,"b-stat-v":n["url"]||""}).show()}catch(p){}};if($.isPlainObject(s))for(var u in s){var f=n[u]||null,p=s[u]&&s[u][0]||null;f&&p&&l(+u,f,p,"img")}},_bindEvent:function(){$(e).on("onNavigatorChange",function(){})},_genBanner:function(e,t,i,n,a){var r=this;r._createBannerTpl(e,t,i,a||!1),r._newAdAjaxs(e,function(e){r._mainSuccessHandle(e),n&&r._resetBannerSize()}),n&&r._winSmartSize(function(){r._resetBannerSize()})},init:function(t,i,n,a,r){var o=this,s=[],d=e.location,c=d.pathname,l=d.hostname,u=/^\/video\/(douga|music|dance|game|technology|life|ent|kichiku|fashion)\.html$/,f=/^\/video\/av/gi,p=/^\/video\//,_=/^\/topic\/[^i]/,h=/^(\/video\/av)/i,g=$(".header .num .m-i.on").attr("data-tid");if(i.partitionAd1=i.partitionAd2=n[g],o._bindEvent(),"www.bilibili.com"===l)if("/"===c||"/index.html"===c){var m=[0,2,4];o._genBanner([t[0][0],t[0][1],t[0][2]],function(e,t){setTimeout(function(){$(".container-row").not("#b_tag_promote").eq(m[t]).after(e.bannerWrp)},0)},{margin:"0 auto 10px",position:"relative",top:"-10px"},!0,!1)}else if(u.test(c)&&t[e.tid])o._genBanner([t[e.tid][0],t[e.tid][1],t[e.tid][2]],function(e,t){setTimeout(function(){if(0===t)return $(".container-top-wrapper").after(e.bannerWrp);var i=$(".container-row").not("#b_tag_promote");return 1===t?i.eq(2).after(e.bannerWrp):void(2===t&&(i.length-1>3?i.eq(4).after(e.bannerWrp):i.last().after(e.bannerWrp)))},0)},{margin:"0 auto 10px",position:"relative",top:"-10px"},!0,!1);else{if(!u.test(c)&&!f.test(c)&&p.test(c))return!1;if("/ranking"===c||"/ranking_beta"===c)o._genBanner([i.rankAd3,i.rankAd4],function(e,t){setTimeout(function(){$(".rank-container,.b-page-body:eq(0)").append(e.bannerWrp)},0)},{margin:"20px auto"},!0,!1);else if(_.test(c))o._genBanner([i.topicAd1,i.topicAd2],function(e,t){setTimeout(function(){$(".rank-container,.b-page-body:eq(0)").after(e.bannerWrp)},0)},{margin:"0 0 20px"},!1,!1);else if(h.test(c))return s=o._getKeys(a),o._newAdAjaxs(s,function(e){o._vedioSuccessHandle(e,a,r),o._resetVedioBanner(o._isWideScreen())}),o._winSmartSize(function(){o._resetVedioBanner(o._isWideScreen())}),!0}}}}(a,r,o);$(function(){f.init(s,l,u,d,c)})}(jQuery,window,document)},function(e,exports){"use strict";function t(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function i(e,t,i){if(!e)return e;var n=/i[0-2]/;if(n.test(e)){var a,r="";if(e.indexOf("?")>=0&&(a=e.split("?"),e=a[0],r="?"+a[1]),e.indexOf("/bfs/")>=0||e.indexOf("/group1/")>=0){var n=/_+[0-9]+x[0-9]/;if(!n.test(e)&&t&&i){var o=e.split("."),s=o[o.length-1];e+="_"+t+"x"+i+"."+s}e=h.setSrc(e)}else{var n=/\d+_\d+\//;n.test(e)&&(e=e.replace(n,"")),e=e.replace("com/","com/"+t+"_"+i+"/")}e+=r}return e}function n(e){return e=e.data||e,'\n    <div data-name="'+e.name+'">\n        <a href="'+(e.url?e.url:"javascript:void(0);")+'" data-url="'+(e.url?1:0)+'" target="_blank" style="display:block; position:relative;" rel="nofollow">\n            '+(e.is_ad_loc&&e.is_ad?'<img src="'+p["BASE_AD_IMG"]+'" style="width:32px;height:20px;margin-right:5px;position:absolute;bottom:2px;left:2px;" />':"")+'\n            <img src="'+e.pic+'" alt="'+e.name+'" style="width:100%;height:100%;" />\n        </a>\n    </div>\n    '}function a(e){if(e&&!m[e.request_id+e.src_id+e.creative_id]){var t=f&&f.base||{};if($.isFunction(t.send)&&(m[e.request_id+e.src_id+e.creative_id]=e,t.send("show",e)),e.show_url){var i=new Image(1,1);i.onload=i.onerror=function(){i=null},i.src=e.show_url}}}function r(e){if(e){var t=f&&f.base||{};$.isFunction(t.send)&&t.send("click",e)}}function o(e,t,i){var n={};!t&&i&&(n={height:"1px",width:"1160px",overflow:"hidden","margin-bottom":0,"margin-top":0}),t||i||(n={height:"1px",width:"980px",overflow:"hidden","margin-bottom":0,"margin-top":0}),t&&i&&(n={width:"1160px",height:"96px"}),t&&!i&&(n={width:"980px",height:"80px"}),e.css(n)}function s(){clearTimeout(g),g=setTimeout(function(){$("div[data-loc-id]").each(function(e,t){var i=$(t),n=$(window),r=$(t).data("loc-id"),o=window.adDatasLoc[r],s=i.height(),d=i.offset().top>0?i.offset().top:t.offsetTop,c=n.scrollTop(),l=c+n.height();d>c-s/2&&d+s/2<l&&a(o)})},0)}function d(e,i){_.adJsonp({url:p["API_BILIBILI_HOSTNAME"]+"/x/web-show/res/locs",data:{pf:0,ids:e,jsonp:"jsonp"},success:function(n){"0"!=n.code||t(n.data)||""==n.data.image||""==n.data.url||i(e,n.data)},error:function(){}})}function c(e,t){for(var a=$(".container-row").length>0?$(".container-row"):$(".bm-container-row"),r=e.split(","),d=$("body").hasClass("widescreen"),c=0;c<r.length;c++){var l='<div data-loc-id="'+r[c]+'" style="display:none; overflow: hidden; border-radius: 5px; margin: 0px auto 50px; position: relative; " ></div>';a.eq(2*(c+1)-1).after(l)}var u=b["home"]["wide"][0],p=b["home"]["wide"][1];for(var c in t){var _=t[c][0];if(_){_["resource_id"]=parseInt(c,10),_.pic=i(_.pic,u,p);var h=$("div[data-loc-id="+c+"]");h.attr({"data-id":_.id}).html(n({data:_,type:window.tid||23})),o(h,_.url,d),h.show(),window.adDatasLoc[c]=_;try{_.is_ad_loc&&f&&f.base&&$.isFunction(f.base.send)&&f.base.send("",$.extend({},_,{resource_id:c}))}catch(g){}}}s()}function l(e,t){var a=e.split(",");$(".ad-fl").attr("data-loc-id",a[0]),$(".ad-fr").attr("data-loc-id",a[1]),$(".ad-e1").attr("data-loc-id",a[2]);var r=b["play"]["f-wide"][0],o=b["play"]["f-wide"][1],d=b["play"]["e-wide"][0],c=b["play"]["e-wide"][1];for(var l in t){var u=t[l][0];if(u){$("div[data-loc-id="+l+"]").hasClass("ad-e1")?u.pic=i(u.pic,d,c):u.pic=i(u.pic,r,o),$("div[data-loc-id="+l+"]").attr("data-id",u.id).show().html(n({data:u,type:""})),window.adDatasLoc[l]=u;try{u.is_ad_loc&&f&&f.base&&$.isFunction(f.base.send)&&f.base.send("",$.extend({},u,{resource_id:l}))}catch(p){}}}s()}function u(){var e=window.tid,t=$(window);if(e){var i=v[e][1];d(i,c)}else if(window.location.href.indexOf("33")>0){var i=v["bm"][1];d(i,c)}else{if($(".movie_head").length>0&&""!=$(".movie_head").attr("style"))return;try{var n=location.href.split(p["PGC_HOSTNAME"]+"/")[1].split("/")[0],i=v[n]}catch(a){}d(i,l)}t.resize(function(e){var t=$("body").hasClass("widescreen"),i=$("div[data-loc-id]"),n=$(".couplet"),a=$(window).width(),r=(a-1160)/2-118-20,d=(a+1160)/2+20,c=(a-980)/2-118-20,l=(a+980)/2+20,u=i.not(".topic-preview-wrapper,.couplet,.ad-fl,.ad-fr,.ad-e1");$.each(u,function(e,i){i=$(i),o(i,!!parseInt(i.find("a[data-url]").data("url"),10),t)}),t?(n.eq(0).css("left",r+"px"),n.eq(1).css("left",d+"px")):(n.eq(0).css("left",c+"px"),n.eq(1).css("left",l+"px")),s()}),t.on("scroll",function(){s()}),$(document).on("click","li[data-loc-id], div[data-loc-id]",function(e){var t=$(this).data("loc-id"),i=window.adDatasLoc[t];r($.extend({},window.adDatasLoc[t],{src_id:w[t],resource_id:i["resource_id"]||t}))})}var f=window.BiliCm||{},p=f.config||{},_=f.utils||{},h=f.loadwebp||{},g=null,m={},v={13:["106","291,293,295","1614"],23:["112","405,412,417","1632"],11:["118","406,413,418","1618"],bm:["395","403,414,415"],anime:"124,126,130",movie:"124,126,130"},b={home:{wide:[1160,96]},play:{"f-wide":[468,60],"e-wide":[870,72]}},w={395:"397",118:"120",112:"114",106:"108"};window.adDatasLoc=window.adDatasLoc||{},e.exports.mainAd=function(){return $(function(){u()}),!0}}]);