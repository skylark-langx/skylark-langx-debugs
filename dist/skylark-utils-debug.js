/**
 * skylark-utils-debug - The skylark debug utility library
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,e){var n=e.define,t=e.require,u="function"==typeof n&&n.amd,o=!u&&"undefined"!=typeof exports;if(!u&&!n){var i={};n=e.define=function(r,e,n){"function"==typeof n?(i[r]={factory:n,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var n=e.split("/"),t=r.split("/");n.pop();for(var u=0;u<t.length;u++)"."!=t[u]&&(".."==t[u]?n.pop():n.push(t[u]));return n.join("/")}(e,r)}),exports:null},t(r)):i[r]=n},t=e.require=function(r){if(!i.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var n=i[r];if(!n.exports){var u=[];n.deps.forEach(function(r){u.push(t(r))}),n.exports=n.factory.apply(e,u)}return n.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,e){r("skylark-utils-debug/debug",["skylark-langx/skylark"],function(r){return r.debug=r.debug||{}}),r("skylark-utils-debug/main",["./debug"],function(r){return r}),r("skylark-utils-debug",["skylark-utils-debug/main"],function(r){return r})}(n),!u){var s=t("skylark-langx/skylark");o?module.exports=s:e.skylarkjs=s}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-utils-debug.js.map
