function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function b(t,e,n){var o,r,i,f,u,a,c=0,l=!1,s=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,i=r;return o=r=void 0,c=e,f=t.apply(i,n)}function j(t){return c=t,u=setTimeout(O,e),l?y(t):f}function E(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=i}function O(){var t=v();if(E(t))return S(t);u=setTimeout(O,function(t){var n=e-(t-a);return s?m(n,i-(t-c)):n}(t))}function S(t){return u=void 0,b&&o?y(t):(o=r=void 0,f)}function T(){var t=v(),n=E(t);if(o=arguments,r=this,a=t,n){if(void 0===u)return j(a);if(s)return u=setTimeout(O,e),y(a)}return void 0===u&&(u=setTimeout(O,e)),f}return e=g(e)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(g(n.maxWait)||0,e):i,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},T.flush=function(){return void 0===u?f:S(v())},T}function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(p(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||f.test(t)?u(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(t,e,{leading:o,maxWait:e,trailing:r})};let y={};const j={formEl:document.querySelector(".feedback-form"),btnSubmit:document.querySelector("button")};j.formEl.addEventListener("input",t(e)((function(t){y[t.target.name]=t.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),j.formEl.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(y)})),function(){const t=localStorage.getItem("feedback-form-state");if(t){y=JSON.parse(t);const e=Object.keys(y);for(const t of e)j.formEl.elements[t].value=y[t]}}();
//# sourceMappingURL=03-feedback.daed82df.js.map