/**
 * skylark-langx-debugs - The skylark debug utility library
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(n,e){var t=e.define,require=e.require,r="function"==typeof t&&t.amd,o=!r&&"undefined"!=typeof exports;if(!r&&!t){var i={};t=e.define=function(n,e,t){"function"==typeof t?(i[n]={factory:t,deps:e.map(function(e){return function(n,e){if("."!==n[0])return n;var t=e.split("/"),r=n.split("/");t.pop();for(var o=0;o<r.length;o++)"."!=r[o]&&(".."==r[o]?t.pop():t.push(r[o]));return t.join("/")}(e,n)}),resolved:!1,exports:null},require(n)):i[n]={factory:null,resolved:!0,exports:t}},require=e.require=function(n){if(!i.hasOwnProperty(n))throw new Error("Module "+n+" has not been defined");var module=i[n];if(!module.resolved){var t=[];module.deps.forEach(function(n){t.push(require(n))}),module.exports=module.factory.apply(e,t)||null,module.resolved=!0}return module.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(n,require){n("skylark-langx-debugs/debugs",["skylark-langx-ns"],function(n){return n.attach("langx.debugs")}),n("skylark-langx-debugs/stack-trace",["./debugs"],function(n){function e(n){var t=(n=n||{guess:!0}).e||null,r=!!n.guess,o=new e.implementation,i=o.run(t);return r?o.guessAnonymousFunctions(i):i}return e.implementation=function(){},e.implementation.prototype={run:function(n,e){return n=n||this.createException(),"other"===(e=e||this.mode(n))?this.other(arguments.callee):this[e](n)},createException:function(){try{this.undef()}catch(n){return n}},mode:function(n){return n.arguments&&n.stack?"chrome":"string"==typeof n.message&&"undefined"!=typeof window&&window.opera?n.stacktrace?n.message.indexOf("\n")>-1&&n.message.split("\n").length>n.stacktrace.split("\n").length?"opera9":n.stack?n.stacktrace.indexOf("called from line")<0?"opera10b":"opera11":"opera10a":"opera9":n.stack?"firefox":"other"},instrumentFunction:function(n,t,r){var o=(n=n||window)[t];n[t]=function(){return r.call(this,e().slice(4)),n[t]._instrumented.apply(this,arguments)},n[t]._instrumented=o},deinstrumentFunction:function(n,e){n[e].constructor===Function&&n[e]._instrumented&&n[e]._instrumented.constructor===Function&&(n[e]=n[e]._instrumented)},chrome:function(n){var e=(n.stack+"\n").replace(/^\S[^\(]+?[\n$]/gm,"").replace(/^\s+(at eval )?at\s+/gm,"").replace(/^([^\(]+?)([\n$])/gm,"{anonymous}()@$1$2").replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm,"{anonymous}()@$1").split("\n");return e.pop(),e},firefox:function(n){return n.stack.replace(/(?:\n@:0)?\s+$/m,"").replace(/^\(/gm,"{anonymous}(").split("\n")},opera11:function(n){for(var e=/^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/,t=n.stacktrace.split("\n"),r=[],o=0,i=t.length;o<i;o+=2){var s=e.exec(t[o]);if(s){var u=s[4]+":"+s[1]+":"+s[2],c=s[3]||"global code";c=c.replace(/<anonymous function: (\S+)>/,"$1").replace(/<anonymous function>/,"{anonymous}"),r.push(c+"@"+u+" -- "+t[o+1].replace(/^\s+/,""))}}return r},opera10b:function(n){for(var e=/^(.*)@(.+):(\d+)$/,t=n.stacktrace.split("\n"),r=[],o=0,i=t.length;o<i;o++){var s=e.exec(t[o]);if(s){var u=s[1]?s[1]+"()":"global code";r.push(u+"@"+s[2]+":"+s[3])}}return r},opera10a:function(n){for(var e=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,t=n.stacktrace.split("\n"),r=[],o=0,i=t.length;o<i;o+=2){var s=e.exec(t[o]);if(s){var u=s[3]||"{anonymous}";r.push(u+"()@"+s[2]+":"+s[1]+" -- "+t[o+1].replace(/^\s+/,""))}}return r},opera9:function(n){for(var e=/Line (\d+).*script (?:in )?(\S+)/i,t=n.message.split("\n"),r=[],o=2,i=t.length;o<i;o+=2){var s=e.exec(t[o]);s&&r.push("{anonymous}()@"+s[2]+":"+s[1]+" -- "+t[o+1].replace(/^\s+/,""))}return r},other:function(n){for(var e,t,r=/function\s*([\w\-$]+)?\s*\(/i,o=[];n&&n.arguments&&o.length<10;)e=r.test(n.toString())&&RegExp.$1||"{anonymous}",t=Array.prototype.slice.call(n.arguments||[]),o[o.length]=e+"("+this.stringifyArguments(t)+")",n=n.caller;return o},stringifyArguments:function(n){for(var e=[],t=Array.prototype.slice,r=0;r<n.length;++r){var o=n[r];void 0===o?e[r]="undefined":null===o?e[r]="null":o.constructor&&(o.constructor===Array?o.length<3?e[r]="["+this.stringifyArguments(o)+"]":e[r]="["+this.stringifyArguments(t.call(o,0,1))+"..."+this.stringifyArguments(t.call(o,-1))+"]":o.constructor===Object?e[r]="#object":o.constructor===Function?e[r]="#function":o.constructor===String?e[r]='"'+o+'"':o.constructor===Number&&(e[r]=o))}return e.join(",")},sourceCache:{},ajax:function(n){var e=this.createXMLHTTPObject();if(e)try{return e.open("GET",n,!1),e.send(null),e.responseText}catch(n){}return""},createXMLHTTPObject:function(){for(var n,e=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],t=0;t<e.length;t++)try{return n=e[t](),this.createXMLHTTPObject=e[t],n}catch(n){}},isSameDomain:function(n){return-1!==n.indexOf(location.hostname)},getSource:function(n){return n in this.sourceCache||(this.sourceCache[n]=this.ajax(n).split("\n")),this.sourceCache[n]},guessAnonymousFunctions:function(n){for(var e=0;e<n.length;++e){var t=n[e],r=/\{anonymous\}\(.*\)@(.*)/.exec(t);if(r){var o=/^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/.exec(r[1]);if(o){var i=o[1],s=o[2],u=o[3]||0;if(i&&this.isSameDomain(i)&&s){var c=this.guessAnonymousFunction(i,s,u);n[e]=t.replace("{anonymous}",c)}}}}return n},guessAnonymousFunction:function(n,e,t){var r;try{r=this.findFunctionName(this.getSource(n),e)}catch(e){r="getSource failed with url: "+n+", exception: "+e.toString()}return r},findFunctionName:function(n,e){for(var t,r,o,i=/function\s+([^(]*?)\s*\(([^)]*)\)/,s=/['"]?([0-9A-Za-z_]+)['"]?\s*[:=]\s*function\b/,u=/['"]?([0-9A-Za-z_]+)['"]?\s*[:=]\s*(?:eval|new Function)\b/,c="",a=Math.min(e,20),l=0;l<a;++l)if(t=n[e-l-1],(o=t.indexOf("//"))>=0&&(t=t.substr(0,o)),t){if(c=t+c,(r=s.exec(c))&&r[1])return r[1];if((r=i.exec(c))&&r[1])return r[1];if((r=u.exec(c))&&r[1])return r[1]}return"(?)"}},n.StackTrace=e}),n("skylark-langx-debugs/main",["./debugs","./stack-trace"],function(n){return n}),n("skylark-langx-debugs",["skylark-langx-debugs/main"],function(n){return n})}(t),!r){var s=require("skylark-langx-ns");o?module.exports=s:e.skylarkjs=s}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-debugs.js.map
