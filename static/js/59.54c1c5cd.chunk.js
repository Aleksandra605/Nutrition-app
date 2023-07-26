/*! For license information please see 59.54c1c5cd.chunk.js.LICENSE.txt */
(self.webpackChunknutrition=self.webpackChunknutrition||[]).push([[59],{2059:function(t,o,i){"use strict";i.r(o),i.d(o,{default:function(){return r}});var e=i(2791),s=i(8687),n=i(7467),a=i(184);var r=(0,s.$j)(null,(function(t){return{wishList:function(){return t((0,n.BW)())}}}))((function(t){var o=t.wishList,i=(0,e.useRef)(!0);return(0,e.useEffect)((function(){!0===i.current&&(o(),i.current=!1)}),[i]),(0,a.jsx)("div",{})}))},7467:function(t,o,i){"use strict";i.d(o,{$$:function(){return p},BW:function(){return c},Mp:function(){return u}});var e=i(2388),s=i(5949),n=i(6599),a=i.n(n),r=(i(9293),{text:"The recipe is already on the wishlist",className:"error",stopOnFocus:!0,autoClose:5e3,style:{background:"rgba(154, 22, 46, 0.725)"}});e.Z.defaults.baseURL="https://nutritionapp-1-t7373772.deta.app/api";var l=function(t){e.Z.defaults.headers.common.Authorization="Bearer ".concat(t)},u=function(t){return function(o,i){var n=i().auth.token;if(n)return l(n),console.log("Request body",t),o((0,s.f$)()),e.Z.post("/wishlist/addtowishlist",t).then((function(t){var i=t.data;o((0,s.Ag)(i))})).catch((function(t){return a()(r).showToast()}))}},p=function(t){var o=t.uri;return function(t,i){var n=i().auth.token;n&&(l(n),t((0,s.nk)()),e.Z.delete("/wishlist/removeItem",{data:{uri:o}}).then((function(o){var i=o.data;return t((0,s.dC)(i))})).catch((function(t){return console.log(t)})))}},c=function(){return function(t,o){var i=o().auth.token;if(i)return l(i),t(s.xu),e.Z.get("/wishlist").then((function(o){var i=o.data;t((0,s.IK)(i))})).catch((function(t){return console.log("Error>>>",t)}))}}},6599:function(t){var o,i;o=this,i=function(t){var o=function t(o){return new t.lib.init(o)};function i(t,o){return o.offset[t]?isNaN(o.offset[t])?o.offset[t]:o.offset[t]+"px":"0px"}function e(t,o){return!(!t||"string"!==typeof o)&&!!(t.className&&t.className.trim().split(/\s+/gi).indexOf(o)>-1)}return o.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},o.lib=o.prototype={toastify:"1.12.0",constructor:o,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||o.defaults.text,this.options.node=t.node||o.defaults.node,this.options.duration=0===t.duration?0:t.duration||o.defaults.duration,this.options.selector=t.selector||o.defaults.selector,this.options.callback=t.callback||o.defaults.callback,this.options.destination=t.destination||o.defaults.destination,this.options.newWindow=t.newWindow||o.defaults.newWindow,this.options.close=t.close||o.defaults.close,this.options.gravity="bottom"===t.gravity?"toastify-bottom":o.defaults.gravity,this.options.positionLeft=t.positionLeft||o.defaults.positionLeft,this.options.position=t.position||o.defaults.position,this.options.backgroundColor=t.backgroundColor||o.defaults.backgroundColor,this.options.avatar=t.avatar||o.defaults.avatar,this.options.className=t.className||o.defaults.className,this.options.stopOnFocus=void 0===t.stopOnFocus?o.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||o.defaults.onClick,this.options.offset=t.offset||o.defaults.offset,this.options.escapeMarkup=void 0!==t.escapeMarkup?t.escapeMarkup:o.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||o.defaults.ariaLive,this.options.style=t.style||o.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");for(var o in t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)t.style[o]=this.options.style[o];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,""!==this.options.avatar){var e=document.createElement("img");e.src=this.options.avatar,e.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(e):t.insertAdjacentElement("afterbegin",e)}if(!0===this.options.close){var s=document.createElement("button");s.type="button",s.setAttribute("aria-label","Close"),s.className="toast-close",s.innerHTML="&#10006;",s.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var n=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&n>360?t.insertAdjacentElement("afterbegin",s):t.appendChild(s)}if(this.options.stopOnFocus&&this.options.duration>0){var a=this;t.addEventListener("mouseover",(function(o){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){a.removeElement(t)}),a.options.duration)}))}if("undefined"!==typeof this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"===typeof this.options.onClick&&"undefined"===typeof this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"===typeof this.options.offset){var r=i("x",this.options),l=i("y",this.options),u="left"==this.options.position?r:"-"+r,p="toastify-top"==this.options.gravity?l:"-"+l;t.style.transform="translate("+u+","+p+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t="string"===typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!==typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var i=o.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,i),o.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),o.reposition()}.bind(this),400)}},o.reposition=function(){for(var t,o={top:15,bottom:15},i={top:15,bottom:15},s={top:15,bottom:15},n=document.getElementsByClassName("toastify"),a=0;a<n.length;a++){t=!0===e(n[a],"toastify-top")?"toastify-top":"toastify-bottom";var r=n[a].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(n[a].style[t]=s[t]+"px",s[t]+=r+15):!0===e(n[a],"toastify-left")?(n[a].style[t]=o[t]+"px",o[t]+=r+15):(n[a].style[t]=i[t]+"px",i[t]+=r+15)}return this},o.lib.init.prototype=o.lib,o},t.exports?t.exports=i():o.Toastify=i()},9293:function(){}}]);
//# sourceMappingURL=59.54c1c5cd.chunk.js.map