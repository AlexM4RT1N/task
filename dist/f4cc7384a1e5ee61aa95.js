!function(t){function e(e){for(var r,a,l=e[0],s=e[1],c=e[2],d=0,f=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(u&&u(e);f.length;)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={0:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;o.push([151,1]),n()}({151:function(t,e,n){n(152),t.exports=n(386)},384:function(t,e,n){},385:function(t,e,n){},386:function(t,e,n){"use strict";function r(t){var e=t.getDate();e=e<10?"0"+e:e;var n=t.getMonth()+1;n=n<10?"0"+n:n;var r=t.getFullYear()%100;r=r<10?"0"+r:r;var i=t.getHours();i=i<10?"0"+i:i;var o=t.getMinutes();return o=o<10?"0"+o:o,"Термін виконання: ".concat(e,".").concat(n,".").concat(r," о ").concat(i,":").concat(o)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.r(e);var a=function(t,e,n){if(0!==t&&""!==e){document.getElementById("email").checkValidity()&&document.getElementById("btnSubmit").removeAttribute("disabled"),document.getElementById("email").addEventListener("input",(function(t){this.checkValidity()?document.getElementById("btnSubmit").removeAttribute("disabled"):document.getElementById("btnSubmit").setAttribute("disabled","disabled")}));var o=function(t,e,n){var r=0;r="ukrainian"===e||"russian"===e?.05*t<=50?50:.05*t:.12*t<=120?120:.12*t;return r+=".doc"===n||".docx"===n||".rtf"===n||""===n?0:r/5,r=new Intl.NumberFormat("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2}).format(r)}(t,e,n),a=i(function(t,e,n){var r=.5;r+="ukrainian"===e||"russian"===e?t/1333:t/333;return(r+=".doc"===n||".docx"===n||".rtf"===n||""===n?0:r/5)>=1?[r-r%Math.floor(r),Math.round(r%Math.floor(r)*.6*100)]:[1,0]}(t,e,n),2),s=a[0],c=a[1];resultPrice.innerText="".concat(o," грн"),resultDate.innerText=function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=e,l=n,s={sat:6,sun:0},c={start:10,end:19},u=new Date(i),d=u.getDay(),f=u.getDate(),y=u.getHours(),m=u.getMinutes(),g=0,v=new Date(u);if(d===s.sat||d===s.sun)return g=d===s.sat?2:d===s.sun?1:0,v.setDate(f+g),v.setHours(c.start,0),t(a,l,v,0);if(!(y>=c.start&&y<c.end))return g=y>=0&&y<c.start?0:1,v.setDate(f+g),v.setHours(c.start,0),t(a,l,v,0);if(!(a<=c.end-c.start))return l<60-m?(l=60-(60-m-l),a--):l-=60-m,a-=c.end-(y+1),v.setDate(f+1),v.setHours(c.start,0),t(a,l,v,0);var p=m+l;v.setHours(y+a,p);var b=(p=v.getMinutes())>0&&p<=30?30:p>30&&p<=60?60:0,h=v.getHours();return v.setMinutes(b),h<c.end&&h>=c.start||h===c.end&&b<1?1===o?a<1||1===a&&l<1?"Здамо за: одну годину":a<2||2===a&&l<1?"Здамо за: дві години":a<3||3===a&&l<1?"Здамо за: три години":r(v):0===o?r(v):void 0:(l<60-m?(l=60-(60-m-l),a--):l-=60-m,a-=c.end-(y+1),v.setDate(f+1),v.setHours(c.start,0),t(a,l,v,0))}(s,c)}else document.getElementById("btnSubmit").setAttribute("disabled","disabled"),l()},l=function(){resultPrice.innerText="0,00 грн",resultDate.innerText=""};function s(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var f=n(338),y=n(340),m=n(363),g=0,v="",p="",b=document.getElementById("input-file"),h=document.getElementById("input-file-label"),E=document.getElementById("textarea"),x=document.getElementById("text-length"),S=document.getElementById("select"),L=document.getElementById("select__close-input"),w=document.getElementById("select__ext-name"),I=document.getElementsByName("language"),A=document.getElementsByName("selectExtention"),T=(document.getElementById("resultPrice"),document.getElementById("resultDate"),c(document.getElementsByClassName("label-current-file"),1)[0]),j=c(document.getElementsByClassName("select__title-input"),1)[0];function B(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function O(t,e){if(t){if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(t,e):void 0}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function k(t){if(Array.isArray(t))return t}b.addEventListener("change",(function(t){var e=t.currentTarget;if(0!==e.files.length){x.style.display="none";var n=e.files[0];p=f.extname(n.name);var r=new FileReader;".docx"===p?r.readAsBinaryString(n):r.readAsText(n),r.onload=function(){if(".docx"===p){var t=new y(r.result),e=new m(t).getFullText();g=e.length}else g=r.result.length;T.style.display="flex",h.style.display="none",S.style.display="none",s(T.children).forEach((function(t,e){t.innerText=0===e?n.name:1===e?"Кількість символів: ".concat(g):"завантажте файл"})),a(g,v,p)},T.children[2].addEventListener("click",(function(t){T.style.display="none",h.style.display="block",S.style.display="flex",N.classList.remove("go"),b.value="",a(g=0,v,p="")}))}else T.style.display="none",h.style.display="block",S.style.display="flex",N.classList.remove("go")})),E.addEventListener("input",(function(t){g=t.currentTarget.value.length,h.style.display=0!==g?"none":"block",S.style.display=0!==g?"none":"flex",0!==g&&N.classList.remove("go"),x.innerText=g,x.style.display="block",a(g,v,p)})),I.forEach((function(t){t.addEventListener("click",(function(e){v=t.value,a(g,v,p)}))})),A.forEach((function(t){t.addEventListener("click",(function(e){p=t.value,P.classList.add("select__input-length"),N.innerText="",w.innerText=p.slice(1),j.classList.toggle("active"),j.classList.toggle("inactive"),C.forEach((function(t){t.classList.toggle("active"),t.classList.toggle("inactive")})),a(g,v,p)}))})),L.addEventListener("click",(function(t){w.innerText="",N.innerText="Оберіть розширення файлу",j.value="",a(g=0,v,p),j.classList.toggle("active"),j.classList.toggle("inactive"),C.forEach((function(t){t.classList.toggle("active"),t.classList.toggle("inactive")})),P.classList.remove("select__input-length")})),j.addEventListener("input",(function(t){Number.isInteger(+t.currentTarget.value)&&(g=+t.currentTarget.value,a(g,v,p))}));var D,M,P=document.getElementById("select"),H=document.getElementsByClassName("select__title"),N=(M=1,k(D=H)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}}(D,M)||O(D,M)||B())[0],C=function(t){return k(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||O(t)||B()}(document.getElementsByClassName("select__input-label")).slice(0);N.addEventListener("click",(function(t){N.innerText="",j.classList.remove("active"),j.classList.add("inactive"),N.classList.add("go"),N.classList.toggle("active"),N.classList.toggle("inactive"),E.classList.toggle("inactive"),h.classList.toggle("inactive"),C.forEach((function(t){t.classList.toggle("active"),t.classList.toggle("inactive")})),setTimeout((function(){N.classList.contains("active")&&(N.innerText="Оберіть розширення файлу")}),900)}));n.p,n(384),n(385)}});