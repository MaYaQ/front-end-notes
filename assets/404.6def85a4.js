import{C as d}from"./Common.523b6752.js";import{_ as i,e as p,u as h,r as f,o as g,f as v,w as _,a as e,t as o,g as x,d as B,h as C}from"./app.db14d82c.js";const F={class:"not-found-wrapper"},k={class:"emoji"},A=p({__name:"404",setup(D){var n,u;const t=h(),a=(n=t.value.notFound)!=null?n:["Not Found"],r=()=>a[Math.floor(Math.random()*a.length)],c=(u=t.value.backToHome)!=null?u:"$ cd /home/",s=["\\(o_o)/","(o^^)o","(\u02DA\u0394\u02DA)b","(^-^*)","(^_^)b","(\u256F\u2035\u25A1\u2032)\u256F","(='X'=)","(>_<)","\\(\xB0\u02CA\u0414\u02CB\xB0)/","\u311F(\u2594\u25BD\u2594)\u310F"],l=()=>s[Math.floor(Math.random()*s.length)];return(M,y)=>{const m=f("RouterLink");return g(),v(d,null,{page:_(()=>[e("div",F,[e("p",k,o(l()),1),e("h1",null,"404 - "+o(r()),1),x(m,{to:"/"},{default:_(()=>[B(o(C(c)),1)]),_:1})])]),_:1})}}});var T=i(A,[["__file","404.vue"]]);export{T as default};
