!function(e){var t={};function n(d){if(t[d])return t[d].exports;var a=t[d]={i:d,l:!1,exports:{}};return e[d].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(d,a,function(t){return e[t]}.bind(null,a));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var d={setHeader:()=>{const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("h1"),d=document.createElement("ul"),a=document.createElement("li"),o=document.createElement("li"),c=document.createElement("li");n.textContent="JattDaDhaba",a.textContent="Home",o.textContent="Menu",c.textContent="Contact",a.setAttribute("id","Home"),o.setAttribute("id","Menu"),c.setAttribute("id","Contact"),d.appendChild(a),d.appendChild(o),d.appendChild(c),t.appendChild(n),t.appendChild(d),e.appendChild(t)}};var a={setHome:()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("home");const n=document.createElement("h3"),d=document.createElement("h2"),a=document.createElement("span");a.textContent="Muqabalas !",d.appendChild(a),n.textContent="We offer one of the most exotic",t.appendChild(n),t.appendChild(d),e.appendChild(t)}};var o={setMenu:()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("menu");const n=document.createElement("section"),d=document.createElement("section"),a=document.createElement("section"),o=document.createElement("h2"),c=document.createElement("h2"),l=document.createElement("h2"),i=document.createElement("ul"),r=document.createElement("ul"),u=document.createElement("ul"),m=document.createElement("li"),p=document.createElement("li"),s=document.createElement("li"),C=document.createElement("li"),h=document.createElement("li"),E=document.createElement("li"),f=document.createElement("li"),x=document.createElement("li"),v=document.createElement("li"),y=document.createElement("li"),b=document.createElement("li"),S=document.createElement("li");o.textContent="Breakfast",c.textContent="Lunch",l.textContent="Dinner",m.textContent="Bambiha Bole",p.textContent="Sanju",s.textContent="Old Skool",C.textContent="Death Route",h.textContent="Same Beef",E.textContent="East Side Flow",f.textContent="Dollar",x.textContent="Issa Jatt",v.textContent="Dhakka",y.textContent="So High",b.textContent="Famous",S.textContent="Tochan",i.appendChild(m),i.appendChild(p),i.appendChild(s),i.appendChild(C),r.appendChild(h),r.appendChild(E),r.appendChild(f),r.appendChild(x),u.appendChild(v),u.appendChild(y),u.appendChild(b),u.appendChild(S),n.appendChild(o),n.appendChild(i),d.appendChild(c),d.appendChild(r),a.appendChild(l),a.appendChild(u),t.appendChild(n),t.appendChild(d),t.appendChild(a),e.appendChild(t)}};var c={setContact:()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("contact");const n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),c=document.createElement("h3"),l=document.createElement("h3"),i=document.createElement("h3"),r=document.createElement("h3"),u=document.createElement("p"),m=document.createElement("p"),p=document.createElement("p"),s=document.createElement("p");c.textContent="Opening Hours",l.textContent="Phone",i.textContent="Email",r.textContent="Location",u.textContent="24/7",m.textContent="+91 XXX-XXX-XXXX",p.textContent="enquiry@jatt.com",s.textContent="Pind Moosa, Punjab",n.innerHTML='<i class="fa fa-coffee" aria-hidden="true"></i>',n.appendChild(c),n.appendChild(u),d.innerHTML='<i class="fa fa-phone" aria-hidden="true"></i>',d.appendChild(l),d.appendChild(m),a.innerHTML='<i class="fa fa-envelope" aria-hidden="true"></i>',a.appendChild(i),a.appendChild(p),o.innerHTML='<i class="fa fa-map-marker" aria-hidden="true"></i>',o.appendChild(r),o.appendChild(s),t.appendChild(n),t.appendChild(d),t.appendChild(a),t.appendChild(o),e.appendChild(t)}};(()=>{d.setHeader(),a.setHome();const e=document.querySelector("#Home"),t=document.querySelector("#Menu"),n=document.querySelector("#Contact"),l=document.querySelectorAll("header li");e.classList.add("active");const i=()=>{const e=document.querySelector("#content");e.removeChild(e.lastChild),l.forEach(e=>e.classList.remove("active"))};e.addEventListener("click",e=>{i(),a.setHome(),e.target.classList.add("active")}),t.addEventListener("click",e=>{i(),o.setMenu(),e.target.classList.add("active")}),n.addEventListener("click",e=>{i(),c.setContact(),e.target.classList.add("active")})})()}]);