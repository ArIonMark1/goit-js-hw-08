var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var a=n("kEUo3");const o=document.querySelector(".feedback-form"),l=document.querySelector("input[name=email]"),u=document.querySelector("textarea[name=message]"),i={};var c,s;o.addEventListener("input",(0,a.throttle)((function(e){i[e.target.name]=e.target.value,function(e,t){try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.log("Some problem: ",e.message)}}("feedback-form-state",i)}),500)),o.addEventListener("submit",(function(e){e.preventDefault();if(!function(e){if(!l.value)return alert("Empty email field!!"),!1;if(!u.value)return alert("Need write some message!"),!1;return!0}())return;console.log("Вивід даних із полів вводу у консоль:",{email:l.value,message:u.value}),localStorage.clear(),e.currentTarget.reset()})),function(e){if(!e)return;l.value=e.email,u.value=e.message}(function(e){try{const t=localStorage.getItem(e);return JSON.parse(t)}catch(e){console.log("Some problem: ",e.message)}}("feedback-form-state")),s=u,i[(c=l).name]=c.value,i[s.name]=s.value;
//# sourceMappingURL=03-feedback.5c3e28ed.js.map