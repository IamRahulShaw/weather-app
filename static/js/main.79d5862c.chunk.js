(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),a=c(5),s=c.n(a),r=c(4),d=c.n(r),j=c(6),o=c(2),l=c(0),p=function(e){var t=e.cityName,c=e.setCityName,i=e.fetchFucntion;return Object(l.jsxs)("div",{className:"middle",children:[Object(l.jsx)("input",{type:"search",value:t,onChange:function(e){return c(e.target.value)},name:"search",id:"search",placeholder:"enter city name...",autoFocus:!0,autoComplete:"off"}),Object(l.jsx)("button",{onClick:function(){i()},children:"Search"})]})},u=function(e){var t=e.data,c=Object(i.useState)(new Date),n=Object(o.a)(c,2),a=n[0],s=n[1];Object(i.useEffect)((function(){setInterval((function(){return s(new Date)}),1e3)}),[]);var r=t.name,d=t.region,j=t.country,p=t.timeZone,u=t.windSpeed,b=t.windDirection,h=t.pressure,m=t.precipitation,x=t.humidity,O=t.temperature,v=t.text,y=t.iconLink;return Object(l.jsxs)("div",{id:"display",children:[Object(l.jsxs)("div",{id:"displayUpperPortion",children:[Object(l.jsxs)("div",{id:"city",children:[Object(l.jsx)("div",{id:"cityUpperPart",children:r}),Object(l.jsxs)("div",{id:"cityLowerPart",children:[d,", ",j]}),Object(l.jsx)("div",{id:"cityDateAndTime",children:a.toLocaleString("en-IN",{timeZone:p})})]}),Object(l.jsx)("div",{id:"weatherIcon",children:Object(l.jsx)("img",{src:y})}),Object(l.jsxs)("div",{id:"temperature",children:[O,"\xb0C ",Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:v})]})]}),Object(l.jsxs)("div",{id:"displayLowerPortion",children:[Object(l.jsxs)("div",{id:"windSpeed",className:"layout",children:[Object(l.jsxs)("div",{className:"dataIcon",children:[Object(l.jsx)("span",{className:"iconify","data-icon":"bx:bx-wind"}),Object(l.jsx)("br",{})," ",Object(l.jsx)("span",{className:"caption",children:"wind speed"})]}),Object(l.jsxs)("div",{className:"data",children:[u," Km/H ",Object(l.jsx)("br",{}),b]})]}),Object(l.jsxs)("div",{id:"humidity",className:"layout",children:[Object(l.jsxs)("div",{className:"dataIcon",children:[Object(l.jsx)("span",{className:"iconify","data-icon":"carbon:humidity"}),Object(l.jsx)("br",{})," ",Object(l.jsx)("span",{className:"caption",id:"humidityCaption",children:"humidity"})]}),Object(l.jsx)("div",{className:"data number",id:"humidity",children:x})]}),Object(l.jsxs)("div",{id:"pressure",className:"layout",children:[Object(l.jsxs)("div",{className:"dataIcon",children:[Object(l.jsx)("span",{className:"iconify","data-icon":"carbon:pressure-filled"}),Object(l.jsx)("br",{})," ",Object(l.jsx)("span",{className:"caption",id:"pressureCaption",children:"pressure"})]}),Object(l.jsxs)("div",{className:"data number",children:[h," ",Object(l.jsx)("span",{className:"inch",children:"(inch)"})]})]}),Object(l.jsxs)("div",{id:"precipitation",className:"layout",children:[Object(l.jsxs)("div",{className:"dataIcon",children:[Object(l.jsx)("span",{className:"iconify","data-icon":"carbon:accumulation-precipitation"}),Object(l.jsx)("br",{})," ",Object(l.jsx)("span",{className:"caption",children:"precipitation"})]}),Object(l.jsxs)("div",{className:"data number",children:[m," ",Object(l.jsx)("span",{className:"inch",children:"(inch)"})]})]})]})]})};c(13);var b=function(){var e=Object(i.useState)("Kolkata"),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)({}),s=Object(o.a)(a,2),r=s[0],b=s[1],h=function(){var e=Object(j.a)(d.a.mark((function e(){var t,i,n,a,s,r,j,o,l,p,u,h,m,x,O,v,y,f;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://api.weatherapi.com/v1/current.json?key=e60df6e194d5484cbde123139212807&q=".concat(c,"&aqi=no"));case 3:return t=e.sent,e.next=6,t.json();case 6:i=e.sent,n=i.location,a=n.name,s=n.region,r=n.country,j=n.tz_id,o=i.current,l=o.wind_kph,p=o.wind_dir,u=o.pressure_in,h=o.precip_in,m=o.humidity,x=i.current.temp_c,O=i.current.condition,v=O.text,y=O.icon,f=y.replace("64x64","128x128"),b({name:a,region:s,country:r,timeZone:j,windSpeed:l,windDirection:p,pressure:u,precipitation:h,humidity:m,temperature:x,text:v,iconLink:f="https:"+f}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){h()}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{id:"app",children:[Object(l.jsx)(p,{cityName:c,setCityName:n,fetchFucntion:h}),Object(l.jsx)(u,{data:r})]})})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.79d5862c.chunk.js.map