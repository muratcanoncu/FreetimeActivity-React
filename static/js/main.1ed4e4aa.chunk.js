(this.webpackJsonpmyrecipeapp=this.webpackJsonpmyrecipeapp||[]).push([[0],{10:function(t,e,c){},11:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(1),i=c.n(n),a=c(4),r=c.n(a),o=(c(10),c(11),c(12),c(5)),s=c(2),p=c(0),y=i.a.createContext(),d={newActivity:!0,activity:{}},l=function(t,e){switch(e.type){case"ACTIVITY_STORE":return Object(s.a)(Object(s.a)({},t),{},{activity:e.payload});case"NEW_ACTIVITY":return Object(s.a)(Object(s.a)({},t),{},{newActivity:!t.newActivity})}};function u(t){var e=Object(n.useReducer)(l,d),c=Object(o.a)(e,2),i=c[0],a=c[1];return Object(n.useEffect)((function(){fetch("https://www.boredapi.com/api/activity").then((function(t){return t.json()})).then((function(t){a({type:"ACTIVITY_STORE",payload:t})}))}),[i.newActivity]),Object(p.jsx)(y.Provider,{value:{myState:i,myDispatch:a},children:t.children})}var h=y;var b=function(){var t=Object(n.useContext)(h);return console.log(t.myState.newActivity),Object(p.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(p.jsx)("h1",{className:"mb-5",style:{textShadow:"2px 2px grey",fontSize:"4.3rem",width:"800px"},children:t.myState.activity.activity}),Object(p.jsxs)("p",{style:{textShadow:"1px 1px grey",fontWeight:"bolder"},children:["Type: ",t.myState.activity.type]}),Object(p.jsxs)("p",{style:{textShadow:"1px 1px grey",fontWeight:"bolder"},children:["Price: ",t.myState.activity.price," \u20ac"]}),Object(p.jsx)("button",{className:"w-50 btn-primary py-1 px-4 font-weight-bolder",onClick:function(){(0,t.myDispatch)({type:"NEW_ACTIVITY"})},children:"Another One"})]})},j=c.p+"static/media/background.fdde3381.jpeg";var x=function(){return Object(p.jsx)("div",{className:"App d-flex justify-content-center align-items-center",style:{height:"100vh",background:"url(".concat(j,")"),backgroundRepeat:"no-repeat",backgroundSize:"100vw 100vh"},children:Object(p.jsx)(b,{})})},f=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;c(t),n(t),i(t),a(t),r(t)}))};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(u,{children:Object(p.jsx)(x,{})})}),document.getElementById("root")),f()}},[[14,1,2]]]);
//# sourceMappingURL=main.1ed4e4aa.chunk.js.map