(this["webpackJsonpsap-shopping"]=this["webpackJsonpsap-shopping"]||[]).push([[0],{26:function(s,e,t){},27:function(s,e,t){},28:function(s,e,t){},35:function(s,e,t){},36:function(s,e,t){},37:function(s,e,t){},38:function(s,e,t){},39:function(s,e,t){},40:function(s,e,t){"use strict";t.r(e);var c=t(1),a=t.n(c),i=t(19),n=t.n(i),o=t(11),r=t(16),d=t(17),j=(t(26),t(7)),l=t(2),b=(t(27),t(28),t(0));function m(s){var e=Object(c.useContext)(u);return Object(b.jsxs)("div",{className:"checkout-product",children:[Object(b.jsx)("img",{src:s.imgLink,alt:""}),Object(b.jsxs)("div",{className:"checkout-product-info",children:[Object(b.jsx)("strong",{children:s.name}),Object(b.jsxs)("span",{children:["Rs ",s.cost]}),Object(b.jsx)("button",{onClick:function(){e.dispatch({type:"remove-from-cart",id:s.id})},className:"remove-from-cart",children:"Remove"})]})]})}var p=function(){var s=Object(c.useState)("-22%"),e=Object(o.a)(s,2),t=e[0],a=e[1],i=Object(c.useContext)(u),n=Object(c.useState)("none"),r=Object(o.a)(n,2),d=r[0],l=r[1];return Object(c.useEffect)((function(){a("0px")}),[]),Object(b.jsxs)("div",{className:"header",children:[Object(b.jsxs)("div",{className:"header-container",children:[Object(b.jsx)("h1",{className:"brand-name",children:Object(b.jsx)(j.b,{className:"home-link",exact:!0,to:"/",children:"Shop-Stop"})}),Object(b.jsxs)("div",{className:"user-cart",children:[Object(b.jsxs)("div",{className:"cart",children:[Object(b.jsx)("i",{onClick:function(){l("none"===d?"block":"none")},class:"fas fa-2x fa-shopping-cart"}),Object(b.jsx)("span",{children:i.cart.basket.length})]}),Object(b.jsxs)("div",{className:"user",children:[Object(b.jsx)("i",{class:"far fa-2x fa-user"}),Object(b.jsx)("span",{children:"Shubham"})]})]})]}),Object(b.jsxs)("div",{className:"menu",style:{left:t},children:[Object(b.jsx)(j.b,{activeClassName:"selected",class:"nav-link",to:"/shoes",children:Object(b.jsx)("span",{children:"Shoes"})}),Object(b.jsx)(j.b,{activeClassName:"selected",class:"nav-link",to:"/bags",children:Object(b.jsx)("span",{children:"Bags"})}),Object(b.jsx)(j.b,{class:"nav-link",to:"/masks",children:Object(b.jsx)("span",{children:"Masks"})})]}),Object(b.jsxs)("div",{style:{display:d},className:"checkout-cart",children:[Object(b.jsx)("strong",{children:"Your shopping cart"}),i.cart.basket.map((function(s){return Object(b.jsx)(m,{id:s.id,name:s.name,cost:s.cost,imgLink:s.imgLink})}))]})]})};t(35);function h(){return Object(b.jsx)("div",{className:"home",children:Object(b.jsxs)("div",{className:"home-text",children:[Object(b.jsxs)("h1",{className:"home-heading",children:["Welcome To ",Object(b.jsx)("span",{children:"ShopStop"})]}),Object(b.jsx)("p",{className:"home-tagline",children:"Stop looking for it, Shopstop is your one stop for all you want"}),Object(b.jsx)("button",{className:"shop-now",children:Object(b.jsx)(j.b,{to:"/shoes",className:"shop-now-link",children:" Shop Now"})})]})})}t(36);var f=function(s){var e=Object(c.useContext)(u);return Object(b.jsxs)("div",{className:"product",children:[Object(b.jsx)("img",{class:"product-image",src:s.imgLink,alt:""}),Object(b.jsx)("strong",{className:"product-name",children:s.name}),Object(b.jsx)("span",{className:"product-info",children:s.info}),Object(b.jsxs)("span",{className:"product-cost",children:["Rs ",s.cost]}),Object(b.jsx)("button",{onClick:function(){e.dispatch({type:"add-to-cart",item:{id:s.id,imgLink:s.imgLink,name:s.name,cost:s.cost}})},className:"add-to-cart",children:"Add to Cart"})]})};t(37);function g(){return Object(b.jsxs)("div",{className:"shoes",children:[Object(b.jsx)("h1",{children:"shoes"}),Object(b.jsxs)("div",{className:"product-section",children:[Object(b.jsx)(f,{id:1,imgLink:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/19/2838ca0b-d645-4e81-b8d2-c653dbb6f72a1624120057030-1.jpg",cost:1500,name:"NewFeel",info:"Walking shoes"}),Object(b.jsx)(f,{id:2,imgLink:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12849768/2020/11/4/2231be8d-e0b2-43a5-b22d-2adce2d407de1604491192080RedTapeMenBlackWalkingShoes1.jpg",cost:2700,name:"RedTape",info:"Running + walking shoes"}),Object(b.jsx)(f,{id:3,imgLink:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13328054/2021/3/31/a5f33de4-0fce-4260-b76d-148410224ad11617164510532-Nike-Men-Black-FLEX-EXPERIENCE-RN-10-Running-Shoes-767161716-1.jpg",cost:4500,name:"Nike",info:"Nike FLEX"}),Object(b.jsx)(f,{id:4,imgLink:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13426886/2021/7/27/75844fa4-245a-43f6-9fb8-33a97b1fde241627365356738-Reebok-Men-Black-Woven-Design-Solecure-Running-Shoes-2916273-1.jpg",cost:2999,name:"Reebox",info:"Running shoes"})]}),Object(b.jsx)("div",{className:"product-section",children:Object(b.jsx)(f,{id:5,imgLink:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11986112/2021/2/17/1456ef1a-6d72-4bc8-b506-d77d68883ea21613525167572HIGHLANDERMenWhiteColourblockedSneakers1.jpg",cost:3200,name:"HIGHLANDER",info:"Men sneakers"})})]})}t(38);function x(){return Object(b.jsxs)("div",{className:"masks",children:[Object(b.jsx)("h1",{children:"masks"}),Object(b.jsxs)("div",{className:"product-section",children:[Object(b.jsx)(f,{id:1,imgLink:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/17/ad4db26c-66a1-434a-b2dd-e7698c07a2081613548778190-1.jpg",cost:499,name:"Enamore",info:"Women pack of 3 masks"}),Object(b.jsx)(f,{id:2,imgLink:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/8/10/f162dfd2-c220-47bc-ba11-2c0140f9abdf1597014867893-1.jpg",cost:599,name:"puma",info:"unisex pack of 2"}),Object(b.jsx)(f,{id:3,imgLink:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12027352/2020/7/30/8b8e028a-2191-4471-a00d-caac1df1fa3c1596083033814-HRX-by-Hrithik-Roshan-Unisex-Outdoor-Masks-9271596083031936-1.jpg",cost:599,name:"HRX",info:"HRX men pack of 3"}),Object(b.jsx)(f,{id:4,imgLink:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12027342/2020/7/30/6115d2c0-66a8-42bc-bc98-a73ef23b20cf1596090231121-HRX-by-Hrithik-Roshan-Unisex-Pack-of-3-Protekt-X-N-95-Reusab-1.jpg",cost:439,name:"HRX",info:"HRX men pack of 3"})]})]})}t(39);function O(){return Object(b.jsxs)("div",{className:"bags",children:[Object(b.jsx)("h1",{children:"bags"}),Object(b.jsxs)("div",{className:"product-section",children:[Object(b.jsx)(f,{id:1,imgLink:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13693720/2021/3/17/4ca0933d-3ffc-4927-a855-3d0f9e2f08141615983717026-MANGO-Burgundy-Solid-Tote-Bag-9741615983715753-1.jpg",cost:2999,name:"Mango",info:"Solid Tote bag"}),Object(b.jsx)(f,{id:2,imgLink:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14059334/2021/4/27/ccd5603d-b59d-4cd0-b3f3-098b9d799bcf1619502214761-Baggit-Pink-Solid-Handheld-Bag-2531619502213960-1.jpg",cost:1500,name:"LaFille",info:"Solid Shoulder Bag"}),Object(b.jsx)(f,{id:3,imgLink:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12088792/2020/8/7/f597d19b-8709-4f59-834e-ca2ea5588e411596785149763CapreseBlackSolidSlingBag1.jpg",cost:2500,name:"Caprese",info:"Women Sling bag"}),Object(b.jsx)(f,{id:4,imgLink:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15130916/2021/8/13/c50a3a2c-d9ae-4cba-8241-96ffcbfa19c31628826291867Smallshoulderbag1.jpg",cost:2999,name:"H&M",info:"Small Shoulder Bag"})]}),Object(b.jsx)("div",{className:"product-section",children:Object(b.jsx)(f,{id:5,imgLink:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10953282/2020/9/10/e6ace4c6-ad35-469a-a186-910504aab1a71599748674272WildcraftUnisexGreenBlueRoadster40Rucksack1.jpg",cost:1200,name:"Wildcraft",info:"Unisex Roadster 40 Rucksack"})})]})}var u=Object(c.createContext)(),_={basket:[]},k=function(s,e){switch(e.type){case"add-to-cart":return Object(d.a)(Object(d.a)({},s.basket),{},{basket:[].concat(Object(r.a)(s.basket),[e.item])});case"remove-from-cart":Object(r.a)(s.basket);var t=s.basket.findIndex((function(s){return s.id===e.id}));return console.log(t);default:return s}};var v=function(){var s=Object(c.useReducer)(k,_),e=Object(o.a)(s,2),t=e[0],a=e[1];return Object(b.jsx)(u.Provider,{value:{cart:t,dispatch:a},children:Object(b.jsx)(j.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(l.c,{children:[Object(b.jsxs)(l.a,{exact:!0,path:"/bags",children:[Object(b.jsx)(p,{}),Object(b.jsx)(O,{})]}),Object(b.jsxs)(l.a,{exact:!0,path:"/shoes",children:[Object(b.jsx)(p,{}),Object(b.jsx)(g,{})]}),Object(b.jsxs)(l.a,{exact:!0,path:"/masks",children:[Object(b.jsx)(p,{}),Object(b.jsx)(x,{})]}),Object(b.jsxs)(l.a,{exact:!0,path:"/",children:[Object(b.jsx)(p,{}),Object(b.jsx)(h,{})]})]})})})})};n.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.6f373551.chunk.js.map