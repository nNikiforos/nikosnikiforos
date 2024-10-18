(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[0],{21:function(e,t,r){"use strict";var a=r(2);t.a=function(e){var t=e.title;return Object(a.jsx)("button",{children:t})}},25:function(e,t,r){},28:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);r(25);var a=r(39),s=r(1),n=r(13),c=r(3),i=function(){var e=Object(c.f)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},o=r(6),l=r(2);var d=function(){return Object(l.jsxs)("div",{className:"font-general-regular flex flex-col  justify-between items-center text-center md:text-left p-4",children:[Object(l.jsxs)("div",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:["\xa9 ",(new Date).getFullYear(),Object(l.jsx)("a",{href:"https://github.com/nNikiforos",target:"__blank",className:"hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500",children:"React & Tailwind CSS Portfolio"}),".",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/nikolaos-nikiforos-3b0b1a251/",target:"__blank",className:"text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500",children:"Nikiforos"})]}),Object(l.jsxs)("div",{className:"mt-4 md:mt-0 text-sm text-gray-500 dark:text-gray-400",children:["This is a template with React code written by"," ",Object(l.jsx)("a",{href:"https://cssauthor.com/",target:"__blank",className:"hover:underline text-indigo-600 dark:text-indigo-300 duration-500",children:"Stoman"}),"and customized to my preferences. Check it out on"," ",Object(l.jsx)("a",{href:"https://github.com/realstoman/react-tailwindcss-portfolio",target:"__blank",className:"hover:underline text-indigo-600 dark:text-indigo-300 duration-500",children:"GitHub"}),"."]})]})},m=[{id:1,icon:Object(l.jsx)(o.d,{}),url:"https://www.facebook.com/NikosNikiforos13"},{id:2,icon:Object(l.jsx)(o.e,{}),url:"https://github.com/nNikiforos"},{id:3,icon:Object(l.jsx)(o.p,{}),url:"https://x.com/nikiforos_nikos"},{id:4,icon:Object(l.jsx)(o.g,{}),url:"https://www.linkedin.com/in/nikolaos-nikiforos-3b0b1a251/"},{id:5,icon:Object(l.jsx)(o.f,{}),url:"https://www.instagram.com/Nikosnikiforos"}],x=function(){return Object(l.jsx)("div",{className:"container mx-auto",children:Object(l.jsxs)("div",{className:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark",children:[Object(l.jsxs)("div",{className:"font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28",children:[Object(l.jsx)("p",{className:"text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5",children:"Follow me"}),Object(l.jsx)("ul",{className:"flex gap-4 sm:gap-8",children:m.map((function(e){return Object(l.jsx)("a",{href:e.url,target:"__blank",className:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300",children:Object(l.jsx)("i",{className:"text-xl sm:text-2xl md:text-3xl",children:e.icon})},e.id)}))})]}),Object(l.jsx)(d,{})]})})},b=r(8),j=function(){var e=Object(s.useState)(localStorage.theme),t=Object(b.a)(e,2),r=t[0],a=t[1],n="dark"===r?"light":"dark";return Object(s.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(n),e.classList.add(r),localStorage.setItem("theme",r)}),[r,n]),[n,a]},h=r.p+"static/media/logo-light.f7f52f92.svg",u=r.p+"static/media/logo-dark.e37f9881.svg",g=r(38),k=r(21),f=function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),r=t[0],a=t[1],c=Object(s.useState)(!1),i=Object(b.a)(c,2),d=i[0],m=i[1],x=j(),f=Object(b.a)(x,2),p=f[0],O=f[1];return Object(l.jsx)(g.a.nav,{initial:{opacity:0},animate:{opacity:1},id:"nav",className:"sm:container sm:mx-auto",children:Object(l.jsxs)("div",{className:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6",children:[Object(l.jsxs)("div",{className:"flex justify-between items-center px-4 sm:px-0",children:[Object(l.jsx)("div",{children:Object(l.jsx)(n.b,{to:"/",children:"dark"===p?Object(l.jsx)("img",{src:u,className:"w-36",alt:"Dark Logo"}):Object(l.jsx)("img",{src:h,className:"w-36",alt:"Dark Logo"})})}),Object(l.jsx)("div",{onClick:function(){return O(p)},"aria-label":"Theme Switcher",className:"block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:"dark"===p?Object(l.jsx)(o.k,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(l.jsx)(o.n,{className:"text-gray-200 hover:text-gray-50 text-xl"})}),Object(l.jsx)("div",{className:"sm:hidden",children:Object(l.jsx)("button",{onClick:function(){a(!r)},type:"button",className:"focus:outline-none","aria-label":"Hamburger Menu",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light",children:r?Object(l.jsx)(o.q,{className:"text-3xl"}):Object(l.jsx)(o.j,{className:"text-3xl"})})})})]}),Object(l.jsxs)("div",{className:r?"block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none":"hidden",children:[Object(l.jsx)(n.b,{to:"/projects",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Projects",children:"Projects"}),Object(l.jsx)(n.b,{to:"/about",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me",children:"About Me"}),Object(l.jsx)(n.b,{to:"/contact",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact",children:"Contact"}),Object(l.jsx)("div",{className:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark",children:Object(l.jsx)("span",{onClick:function(){d?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),m(!1)):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),m(!0))},className:"font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24","aria-label":"Hire Me Button",children:Object(l.jsx)(k.a,{title:"Hire Me"})})})]}),Object(l.jsxs)("div",{className:"font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none",children:[Object(l.jsx)(n.b,{to:"/projects",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Projects",children:"Projects"}),Object(l.jsx)(n.b,{to:"/about",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"About Me",children:"About Me"}),Object(l.jsx)(n.b,{to:"/contact",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Contact",children:"Contact"})]}),Object(l.jsxs)("div",{className:"hidden sm:flex justify-between items-center flex-col md:flex-row",children:[Object(l.jsx)("div",{className:"hidden md:flex"}),Object(l.jsx)("div",{onClick:function(){return O(p)},"aria-label":"Theme Switcher",className:"ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:"dark"===p?Object(l.jsx)(o.k,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(l.jsx)(o.n,{className:"text-gray-200 hover:text-gray-50 text-xl"})})]})]})})},p=(r(28),function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),r=t[0],a=t[1];Object(s.useEffect)((function(){return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}));var n=function(){!r&&window.pageYOffset>400?a(!0):r&&window.pageYOffset<=400&&a(!1)};return window.addEventListener("scroll",n),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(o.b,{className:"scrollToTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{height:45,width:45,borderRadius:50,right:50,bottom:50,display:r?"flex":"none",padding:5}})})}),O=Object(s.lazy)((function(){return r.e(6).then(r.bind(null,53))})),y=Object(s.lazy)((function(){return r.e(7).then(r.bind(null,54))})),v=Object(s.lazy)((function(){return r.e(3).then(r.bind(null,55))})),w=Object(s.lazy)((function(){return r.e(4).then(r.bind(null,50))})),N=Object(s.lazy)((function(){return r.e(5).then(r.bind(null,52))}));var C=function(){return Object(l.jsx)(a.a,{children:Object(l.jsxs)("div",{className:"bg-secondary-light dark:bg-primary-dark transition duration-300",children:[Object(l.jsxs)(n.a,{children:[Object(l.jsx)(i,{}),Object(l.jsx)(f,{}),Object(l.jsx)(s.Suspense,{fallback:"",children:Object(l.jsxs)(c.d,{children:[Object(l.jsx)(c.b,{path:"/",element:Object(l.jsx)(v,{})}),Object(l.jsx)(c.b,{path:"projects",element:Object(l.jsx)(w,{})}),Object(l.jsx)(c.b,{path:"projects/single-project/:id",element:Object(l.jsx)(N,{})}),Object(l.jsx)(c.b,{path:"about",element:Object(l.jsx)(O,{})}),Object(l.jsx)(c.b,{path:"contact",element:Object(l.jsx)(y,{})}),Object(l.jsx)(c.b,{path:"*",element:Object(l.jsx)(c.a,{to:"/"})})]})}),Object(l.jsx)(x,{})]}),Object(l.jsx)(p,{})]})})},S=function(e){e&&e instanceof Function&&r.e(8).then(r.bind(null,51)).then((function(t){var r=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;r(e),a(e),s(e),n(e),c(e)}))},T=r(23),L=document.getElementById("root");Object(T.createRoot)(L).render(Object(l.jsx)(C,{})),S()}},[[36,1,2]]]);
//# sourceMappingURL=main.f32420a9.chunk.js.map