var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var a=r("kEUo3");const n=document.querySelector(".feedback-form"),l=document.querySelector("input[name=email]"),c=document.querySelector("textarea[name=message]");function s(e){try{const t=localStorage.getItem(e);return JSON.parse(t)}catch(e){console.log("Some problem: ",e.message)}}n.addEventListener("input",(0,a.throttle)((function(e){!function(e,t){try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.log("Some problem: ",e.message)}}("feedback-form-state",{email:l.value,message:c.value})}),500)),n.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:l.value,message:c.value}),localStorage.clear(),e.currentTarget.reset()})),console.log("Data from Storage: ",s("feedback-form-state")),function(e){if(!e)return;console.log("Data from function: ",e),l.value=e.email,c.value=e.message}(s("feedback-form-state"));
//# sourceMappingURL=03-feedback.f901f1ca.js.map
