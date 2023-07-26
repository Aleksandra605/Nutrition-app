"use strict";(self.webpackChunknutrition=self.webpackChunknutrition||[]).push([[280,833],{2833:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r=t(885),a=t(2791),i=t(8687),s=t(7689),c=t(4527),o=t(7586),u=t(6605),l=(t(4676),t(4879),t(5257),t(4432),t(5880),t(5984)),d=t(1025),f=t(6478),_="_mealSwiper_swiper__J6JmF",p="_mealSwiper_slide__frAeQ",m="_mealSwiper_card__BHvo6",h="_mealSwiper_card__image__IDbDi",x="_mealSwiper_card__content__xHUjv",g="_mealSwiper_content__h4__sCfmH",v="_mealSwiper_ingredientsList__8712U",j="_mealSwiper_ingredientsList__item__gLuYF",L="_mealSwiper_additionalInfo__XehTt",S="_mealSwiper_nutrients_list__o8t+W",N="_mealSwiper_nutrientsList__item__Hq4m6",w="_mealSwiper_spanBox__R47vV",b="_mealSwiper_buttonsBox__-veY8",k="_mealSwiper_button__gGsGt",T="_mealSwiper_button_add__J5m97",Z=t(5223),y=t(184);var F=(0,i.$j)(null,(function(n){return{addToShoppingList:function(e){return n((0,d.AU)(e))},removeFromPlanner:function(e){return n((0,f.H3)(e))}}}))((function(n){var e=n.recipes,t=n.addToShoppingList,r=n.removeFromPlanner,a=n.mealType,i=(0,s.UO)();return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(o.tq,{navigation:!0,rewind:!0,modules:[u.W_,u.N1],effect:"fade",autoHeight:!0,slidesPerView:"2",className:_,keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0},initialSlide:0,children:e?e.map((function(n,e){return(0,y.jsx)(o.o5,{className:p,children:(0,y.jsxs)("div",{className:m,children:[(0,y.jsx)("img",{src:n.images.SMALL.url,alt:n.recipeLabel,className:h}),(0,y.jsxs)("div",{className:L,children:[(0,y.jsx)("ul",{className:S,children:n.totalNutrients.map((function(n){return(0,y.jsxs)("li",{className:N,children:[(0,y.jsx)("span",{children:n.label}),(0,y.jsxs)("span",{children:[Number(n.quantity).toFixed(0)," ",n.unit]})]},(0,l.x0)())}))}),(0,y.jsxs)("div",{className:b,children:[(0,y.jsx)("button",{className:k,onClick:function(){t(n.ingredients)},children:(0,y.jsx)(Z.Z,{name:"addToShoppingList"})}),(0,y.jsx)("button",{className:k,onClick:function(){r({date:i.date,uri:n.uri,mealType:a})},children:(0,y.jsx)(Z.Z,{name:"icon__delete"})})]})]}),(0,y.jsxs)("div",{className:x,children:[(0,y.jsx)("h4",{className:g,children:n.recipeLabel}),(0,y.jsx)("ul",{className:v,children:n.ingredientList.map((function(n){return(0,y.jsx)("li",{className:j,children:n},(0,l.x0)())}))}),(0,y.jsxs)("div",{className:w,children:[(0,y.jsx)("span",{children:"".concat(Math.round(n.calories)," kcal.")}),(0,y.jsx)("span",{children:"".concat(Math.round(n.totalWeight)," g.")}),(0,y.jsx)("span",{children:"".concat(n.cuisineType," cuisine")}),0!==n.totalTime?(0,y.jsx)("span",{children:"".concat(n.totalTime," min.")}):null]})]})]})},(0,l.x0)())})):(0,y.jsxs)("button",{className:T,children:[(0,y.jsx)(Z.Z,{name:"planner__add"}),"Add recipe"]})})})})),H="_plannerList_plannerList__IYicJ",P="_plannerList_h3__sRJu6",U=["Breakfast","Lunch","Snack","Teatime","Dinner"];var A=(0,i.$j)((function(n){return{plannerList:(0,c.f)(n)}}))((function(n){var e=n.plannerList,t=(0,a.useState)(null),i=(0,r.Z)(t,2),c=i[0],o=i[1],u=(0,s.UO)();return(0,a.useEffect)((function(){o(e.filter((function(n){return n.date===u.date})))}),[u,e]),(0,y.jsx)("ul",{className:H,children:U.map((function(n){var e;return(0,y.jsxs)("li",{children:[(0,y.jsx)("h3",{className:P,children:n}),(0,y.jsx)(F,{recipes:null===c||void 0===c||null===(e=c.find((function(e){return e.mealType===n})))||void 0===e?void 0:e.meals,mealType:n})]},n)}))})}))},6280:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r=t(885),a=t(2791),i=t(8687),s=t(7689),c=t(1087),o=t(2426),u=t.n(o),l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=function(){for(var n=[0,1,2,3,4,5,6],e=[],t=n.find((function(n){return(new Date).getDay()===n})),r=t,a=0,i=0;i<t;i++)e.push([l[i],u()().subtract(r,"d").format("LL")]),--r;for(var s=t;s<n.length;s++)e.push([l[s],u()().add(a,"d").format("LL")]),++a;return e},f=t(4527),_=t(6478),p=(t(2833),"_plannerPage_planner_section__VsdQl"),m="_plannerPage_daysBox__76fAE",h="_plannerPage_dayLink__N8dI6",x=t(184);var g=(0,i.$j)((function(n){return{plannerList:(0,f.f)(n)}}),(function(n){return{toFetchPlanner:function(){return n((0,_.tH)())}}}))((function(n){n.plannerList;var e=n.toFetchPlanner,t=(0,a.useState)(d()),i=(0,r.Z)(t,2),o=i[0],l=(i[1],(0,a.useState)(u()(new Date).format("LL"))),f=(0,r.Z)(l,2),_=f[0],g=f[1],v=(0,a.useRef)(!0),j=(0,s.s0)();return(0,s.TH)(),(0,s.UO)(),(0,a.useEffect)((function(){console.log("currentDate>>>",_),j("/planner/".concat(_),{replace:!0})}),[]),(0,a.useEffect)((function(){v.current&&(e(),v.current=!1)}),[v]),(0,x.jsxs)("section",{className:p,children:[(0,x.jsx)("div",{className:m,children:o.map((function(n){return(0,x.jsx)(c.OL,{to:"/planner/".concat(n[1]),onClick:function(n){return g(n.target.id)},id:n[1],className:h,style:{background:n[1]===_?"#51655c":null,color:n[1]===_?"whitesmoke":null},children:n[0]},n[1])}))}),(0,x.jsx)(s.j3,{})]})}))},1025:function(n,e,t){t.d(e,{AU:function(){return s},Tx:function(){return c}});var r=t(2388),a=t(6368);r.Z.defaults.baseURL="https://nutritionapp-1-t7373772.deta.app/api";var i=function(n){r.Z.defaults.headers.common.Authorization="Bearer ".concat(n)},s=function(n){return function(e){return e((0,a.bP)()),r.Z.post("/shoppingList/addToShoppingList",n).then((function(n){var t=n.data;e((0,a.s1)(t))})).catch((function(n){return console.log("Error from request >>>",n)}))}},c=function(){return function(n,e){var t=e().auth.token;if(t)return i(t),n(a.gS),r.Z.get("/shoppingList/getShoppingList").then((function(e){var t=e.data;n((0,a.ZN)(t))})).catch((function(n){return console.log("Error>>>",n)}))}}},6478:function(n,e,t){t.d(e,{H3:function(){return l},tH:function(){return d},yf:function(){return u}});var r=t(2388),a=t(6599),i=t.n(a),s=(t(9293),t(476));r.Z.defaults.baseURL="https://nutritionapp-1-t7373772.deta.app/api";var c={text:"Recipe added to planner",className:"success",stopOnFocus:!0,autoClose:5e3,style:{background:"rgba(154, 22, 46, 0.725)"}},o=function(n){r.Z.defaults.headers.common.Authorization="Bearer ".concat(n)},u=function(n){return function(e,t){var a=t().auth.token;if(a)return o(a),e((0,s.Gm)()),r.Z.post("/planner/addItem",n).then((function(n){var t=n.data;return e((0,s.dX)(t)),i()(c).showToast(),e(s.dX)})).catch((function(n){return console.log(n)}))}},l=function(n){return function(e,t){var a=t().auth.token;a&&(o(a),e((0,s.vA)()),r.Z.delete("/planner/removeItem",{data:n}).then((function(n){var t=n.data;return e((0,s.f0)(t))})).catch((function(n){return console.log(n)})))}},d=function(){return function(n,e){var t=e().auth.token;if(t)return o(t),n(s.gB),r.Z.get("/planner/getPlannerList").then((function(e){var t=e.data;n((0,s.sI)(t))})).catch((function(n){return console.log("Error>>>",n)}))}}},4527:function(n,e,t){t.d(e,{f:function(){return r}});var r=function(n){return n.plannerList}}}]);
//# sourceMappingURL=280.4bc01aaa.chunk.js.map