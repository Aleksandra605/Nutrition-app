(self.webpackChunknutrition=self.webpackChunknutrition||[]).push([[182],{1686:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Y}});var a=t(2791),r=t(8687),i=t(2993),s=t(2321),c=t(2117),o=t(2982),u=t(885),l=t(4922),d=["Balanced","High-fiber","High-protein","Low-carb","Low-fat","Low-sodium"],p=["alcohol-cocktail","alcohol-free","celery-free","crustacean-free","dairy-free","DASH","egg-free","fodmap-free","fish-free","gluten-free","immuno-supportive","keto-friendly","kidney-friendly","kosher","low-fat-abs","low-potassium","low-sugar","lupine-free","Mediterranean","mollusk-free","mustard-free","no-oil-added","paleo","peanut-free","pescatarian","pork-free","red-meat-free","sesame-free","shellfish-free","soy-free","sugar-conscious","sulfite-free","tree-nut-free","vegan","vegetarian","wheat-free"],f=["American","Asian","British","Caribbean","Central Europe","Chinese","Eastern Europe","French","Indian","Italian","Japanese","Kosher","Mediterranean","Mexican","Middle Eastern","Nordic","South American","South East Asian"],h=["Biscuits and cookies","Bread","Cereals","Condiments and sauces","Desserts","Drinks","Main course","Pancake","Preps","Preserve","Salad","Sandwiches","Side dish","Soup","Starter","Sweets"],m=["Breakfast","Dinner","Lunch","Snack","Teatime"],_=t(4942),y=t(1413);var v=function(e,n){var t=n.type,a=n.payload;switch(t){case"query":return(0,y.Z)((0,y.Z)({},e),{},{query:a});case"mealType":return e.mealType.includes(a)?(0,y.Z)((0,y.Z)({},e),{},(0,_.Z)({},t,e[t].filter((function(e){return e!==a})))):(0,y.Z)((0,y.Z)({},e),{},{mealType:[a]});case"".concat(t):return e[t].includes(a)?(0,y.Z)((0,y.Z)({},e),{},(0,_.Z)({},t,e[t].filter((function(e){return e!==a})))):(0,y.Z)((0,y.Z)({},e),{},(0,_.Z)({},t,[].concat((0,o.Z)(e[t]),[a])));default:return}},x="_dropdownMenu_dropdownMenu__EldJh",g="_dropdownMenu_select__8SPzz",Z="_dropdownMenu_menuTitle__FcT7y",j="_dropdownMenu_span__HBW4u",b="_dropdownMenu_option__MZ04T",T=t(7845),k=t(6700),S=t(184),w=k.mM.create({fadeIn:{animationName:T.Ji,animationDuration:"2s"}});var C=function(e){var n=e.state,t=e.labels,a=e.handleEvent,r=e.text,i=e.name;return(0,S.jsxs)("div",{className:x,children:[(0,S.jsxs)("h3",{className:Z,children:[r,n.length>0?(0,S.jsx)("span",{className:j,children:n.length}):null]}),(0,S.jsx)("select",{multiple:!0,value:n,name:i,onChange:function(e){return a({name:e.target.name,value:e.target.value})},className:"".concat(g," ").concat((0,k.iv)(w.fadeIn)," ").concat((0,k.iv)(w.fadeOut)),children:t.map((function(e){return(0,S.jsx)("option",{className:b,name:e,value:e,children:e},e)}))})]})},N=t(5223),E="_chips_chipsContainer__51JG+",M="_chips_item__rp0Y0",F="_chips_chip__ShnAe";var q=function(e){var n=e.data,t=e.handleClick;return(0,S.jsx)("ul",{className:E,children:n.map((function(e){return(0,S.jsx)("li",{className:M,children:(0,S.jsx)("button",{type:"button",name:e,className:F,onClick:function(e){return t(e.target.name)},children:e})},e)}))})},D="_recipesForm_form__ddH4K",A="_recipesForm_queryBox__p3jLS",B="_recipesForm_filtersWrapper__6AFCO",L="_recipesForm_input__QfJP6",P="_recipesForm_visible__y+uB9",H="_recipesForm_notVisible__EvjWO",J="_recipesForm_buttonSubmit__cA-GG",R="_recipesForm_toggleButton__S29RR",I="_recipesForm_close__i1nyu",O="_recipesForm_open__HreDY",z=(k.mM.create({fadeIn:{animationName:T.Ji,animationDuration:"2s"}}),{query:"",diet:[],health:[],cuisineType:[],dishType:[],mealType:[]});var G=(0,r.$j)(null,(function(e){return{fetchRecipes:function(n){return e((0,l.m)(n))}}}))((function(e){var n=e.fetchRecipes,t=(0,a.useReducer)(v,z),r=(0,u.Z)(t,2),i=r[0],s=r[1],c=(0,a.useState)(!1),l=(0,u.Z)(c,2),_=l[0],y=l[1];function x(e){e.preventDefault();var t=function(e,n){for(var t in""!==n.query&&(e.q=n.query),n)n[t].length>0&&(e[t]=n[t]);return e}({},i);n(t)}var g=function(e){var n=e.name,t=e.value;return s({type:n,payload:t})};return(0,S.jsxs)("form",{id:"form",className:D,onSubmit:x,children:[(0,S.jsxs)("div",{className:A,children:[(0,S.jsx)("input",{type:"text",className:L,placeholder:"Enter your request",onChange:function(e){g(e.target)},label:"Enter your request",name:"query",autoComplete:"false",id:"query"}),(0,S.jsx)("button",{className:J,onClick:x,type:"submit",children:(0,S.jsx)(N.Z,{name:"icon__search2"})}),(0,S.jsx)("button",{type:"button",className:"".concat(R," ").concat(_?O:I),onClick:function(){return y(!_)},children:(0,S.jsx)(N.Z,{name:"filter"})})]}),(0,S.jsxs)("div",{className:"".concat(B," ").concat(_?P:H),children:[_&&(0,S.jsxs)("div",{children:[(0,S.jsx)(C,{state:i.diet,labels:d,handleEvent:g,text:"Diet option",name:"diet"}),(0,S.jsx)(C,{state:i.health,labels:p,handleEvent:g,text:"Health option",name:"health"}),(0,S.jsx)(C,{state:i.cuisineType,labels:f,handleEvent:g,text:"Cuisine type",name:"cuisineType"}),(0,S.jsx)(C,{state:i.dishType,labels:h,handleEvent:g,text:"Dish type",name:"dishType"}),(0,S.jsx)(C,{state:i.mealType,labels:m,handleEvent:g,text:"Meal type",name:"mealType"})]}),[].concat((0,o.Z)(i.diet),(0,o.Z)(i.health),(0,o.Z)(i.cuisineType),(0,o.Z)(i.dishType),(0,o.Z)(i.mealType)).length>0&&_?(0,S.jsx)(q,{data:[].concat((0,o.Z)(i.diet),(0,o.Z)(i.health),(0,o.Z)(i.cuisineType),(0,o.Z)(i.dishType),(0,o.Z)(i.mealType)),handleClick:function(e){for(var n in i)if("string"!==typeof i[n]&&!(i[n].length<0)&&i[n].includes(e))return s({type:n,payload:e})}}):null]})]})})),K="_recipesPage_section__XrvOA",W=(0,a.lazy)((function(){return Promise.all([t.e(993),t.e(426),t.e(936),t.e(902)]).then(t.bind(t,2902))}));var Y=(0,r.$j)((function(e){return{recipesList:(0,i.q)(e),loadingStatus:(0,s.v)(e)}}))((function(e){var n=e.recipesList,t=e.loadingStatus;return(0,S.jsxs)("section",{className:K,children:[(0,S.jsx)(G,{}),t?(0,S.jsx)(c.Z,{}):null,n.length>0?(0,S.jsx)(W,{}):null]})}))},4922:function(e,n,t){"use strict";t.d(n,{F:function(){return c},m:function(){return s}});var a=t(2388),r=t(1428),i=t(2808);a.Z.defaults.baseURL="https://nutritionapp-1-t7373772.deta.app/api";var s=function(e){return function(n){n((0,r.K6)());var t=i.stringify(e);return a.Z.get("/recipes?".concat(t)).then((function(e){var t=e.data;n((0,r._b)(t))})).catch((function(e){return console.log(e)}))}},c=function(){return function(e){e((0,r.uD)());var n=i.stringify({next:"nextPage"});return a.Z.get("/recipes?".concat(n)).then((function(n){var t=n.data;e((0,r.T)(t))})).catch((function(e){return console.log(e)}))}}},2993:function(e,n,t){"use strict";t.d(n,{q:function(){return a}});var a=function(e){return e.recipes}},4654:function(){}}]);
//# sourceMappingURL=182.d414a715.chunk.js.map