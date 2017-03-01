!function(e,t){
	"object"==typeof module&&"object"==typeof module.exports?
		module.exports=e.document?
			t(e,!0):
			function(e){
				if(!e.document)throw new Error("jQuery requires a window with a document");
				return t(e)
			}:
		t(e)
}("undefined"!=typeof window?
	window:
	this,
function(e,t){
	function n(e){
		var t=!!e&&"length"in e&&e.length,
		n=pe.type(e);
		return"function"!==n&&!pe.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)
	}
	function i(e,t,n){
		if(pe.isFunction(t))
			return pe.grep(e,function(e,i){
				return!!t.call(e,i,e)!==n
			});
		if(t.nodeType)
			return pe.grep(e,function(e){return e===t!==n});
		if("string"==typeof t){
			if(Se.test(t))
				return pe.filter(t,e,n);
			t=pe.filter(t,e)
		}
		return pe.grep(e,function(e){return pe.inArray(e,t)>-1!==n})
	}
	function r(e,t){
		do e=e[t];while(e&&1!==e.nodeType);return e
		}
		function a(e){
			var t={};
			return pe.each(e.match(Ae)||[],function(e,n){t[n]=!0}),
			t
		}
		function o(){
			ie.addEventListener?
			(ie.removeEventListener("DOMContentLoaded",s),e.removeEventListener("load",s)):
			(ie.detachEvent("onreadystatechange",s),e.detachEvent("onload",s))
		}
		function s(){
			(ie.addEventListener||"load"===e.event.type||"complete"===ie.readyState)&&(o(),pe.ready())
		}
		function u(e,t,n){
			if(void 0===n&&1===e.nodeType){
				var i="data-"+t.replace(Re,"-$1").toLowerCase();
				if(n=e.getAttribute(i),"string"==typeof n){
					try{
						n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Le.test(n)?pe.parseJSON(n):n)
					}catch(e){}
					pe.data(e,t,n)
				}
				else n=void 0
			}
			return n
		}
		function c(e){
			var t;
			for(t in e)
				if(("data"!==t||!pe.isEmptyObject(e[t]))&&"toJSON"!==t)
					return!1;
				return!0
		}
		function l(e,t,n,i){
			if(De(e)){
				var r,a,o=pe.expando,s=e.nodeType,
				u=s?pe.cache:e,
				c=s?e[o]:e[o]&&o;
				if(c&&u[c]&&(i||u[c].data)||void 0!==n||"string"!=typeof t)
					return c||(c=s?e[o]=ne.pop()||pe.guid++:o),
						u[c]||(u[c]=s?{}:{toJSON:pe.noop}),
						"object"!=typeof t&&"function"!=typeof t||(i?u[c]=pe.extend(u[c],t):u[c].data=pe.extend(u[c].data,t)),
						a=u[c],
						i||(a.data||(a.data={}),a=a.data),
						void 0!==n&&(a[pe.camelCase(t)]=n),
					"string"==typeof t?(r=a[t],null==r&&(r=a[pe.camelCase(t)])):r=a,r
			}
		}
		function d(e,t,n){
			if(De(e)){
				var i,r,a=e.nodeType,o=a?pe.cache:e,s=a?e[pe.expando]:pe.expando;if(o[s]){if(t&&(i=n?o[s]:o[s].data)){pe.isArray(t)?t=t.concat(pe.map(t,pe.camelCase)):t in i?t=[t]:(t=pe.camelCase(t),t=t in i?[t]:t.split(" ")),r=t.length;for(;r--;)delete i[t[r]];if(n?!c(i):!pe.isEmptyObject(i))return}(n||(delete o[s].data,c(o[s])))&&(a?pe.cleanData([e],!0):de.deleteExpando||o!=o.window?delete o[s]:o[s]=void 0)
				}
			}
		}
		function f(e,t,n,i){
			var r,a=1,o=20,
			s=i?
				function(){return i.cur()}:
				function(){return pe.css(e,t,"")},
			u=s(),
			c=n&&n[3]||(pe.cssNumber[t]?"":"px"),
			l=(pe.cssNumber[t]||"px"!==c&&+u)&&qe.exec(pe.css(e,t));
			if(l&&l[3]!==c){
				c=c||l[3],n=n||[],l=+u||1;
				do 
					a=a||".5",
					l/=a,pe.style(e,t,l+c);
				while(a!==(a=s()/u)&&1!==a&&--o)
			}
			return n&&(l=+l||+u||0,r=n[1]?l+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=l,i.end=r)),
			r
		}
		function p(e){var t=Be.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function h(e,t){var n,i,r=0,a="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):void 0;if(!a)for(a=[],n=e.childNodes||e;null!=(i=n[r]);r++)!t||pe.nodeName(i,t)?a.push(i):pe.merge(a,h(i,t));return void 0===t||t&&pe.nodeName(e,t)?pe.merge([e],a):a}function m(e,t){for(var n,i=0;null!=(n=e[i]);i++)pe._data(n,"globalEval",!t||pe._data(t[i],"globalEval"))}function g(e){Oe.test(e.type)&&(e.defaultChecked=e.checked)}function y(e,t,n,i,r){for(var a,o,s,u,c,l,d,f=e.length,y=p(t),v=[],b=0;b<f;b++)if(o=e[b],o||0===o)if("object"===pe.type(o))pe.merge(v,o.nodeType?[o]:o);else if(Ue.test(o)){for(u=u||y.appendChild(t.createElement("div")),c=(Pe.exec(o)||["",""])[1].toLowerCase(),d=Ke[c]||Ke._default,u.innerHTML=d[1]+pe.htmlPrefilter(o)+d[2],a=d[0];a--;)u=u.lastChild;if(!de.leadingWhitespace&&We.test(o)&&v.push(t.createTextNode(We.exec(o)[0])),!de.tbody)for(o="table"!==c||Qe.test(o)?"<table>"!==d[1]||Qe.test(o)?0:u:u.firstChild,a=o&&o.childNodes.length;a--;)pe.nodeName(l=o.childNodes[a],"tbody")&&!l.childNodes.length&&o.removeChild(l);for(pe.merge(v,u.childNodes),u.textContent="";u.firstChild;)u.removeChild(u.firstChild);u=y.lastChild
			}else v.push(t.createTextNode(o));for(u&&y.removeChild(u),de.appendChecked||pe.grep(h(v,"input"),g),b=0;o=v[b++];)if(i&&pe.inArray(o,i)>-1)r&&r.push(o);else if(s=pe.contains(o.ownerDocument,o),u=h(y.appendChild(o),"script"),s&&m(u),n)for(a=0;o=u[a++];)ze.test(o.type||"")&&n.push(o);return u=null,y}function v(){return!0}function b(){return!1}function w(){try{return ie.activeElement}catch(e){}}function x(e,t,n,i,r,a){var o,s;if("object"==typeof t){"string"!=typeof n&&(i=i||n,n=void 0);for(s in t)x(e,s,n,i,t[s],a);return e}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),r===!1)r=b;else if(!r)return e;return 1===a&&(o=r,r=function(e){return pe().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=pe.guid++)),e.each(function(){pe.event.add(this,t,r,i,n)})}function k(e,t){return pe.nodeName(e,"table")&&pe.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function S(e){return e.type=(null!==pe.find.attr(e,"type"))+"/"+e.type,e}function C(e){var t=rt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function T(e,t){if(1===t.nodeType&&pe.hasData(e)){var n,i,r,a=pe._data(e),o=pe._data(t,a),s=a.events;if(s){delete o.handle,o.events={};for(n in s)for(i=0,r=s[n].length;i<r;i++)pe.event.add(t,n,s[n][i])
			}o.data&&(o.data=pe.extend({},o.data))}}function j(e,t){var n,i,r;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!de.noCloneEvent&&t[pe.expando]){r=pe._data(t);for(i in r.events)pe.removeEvent(t,i,r.handle);t.removeAttribute(pe.expando)}"script"===n&&t.text!==e.text?(S(t).text=e.text,C(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),de.html5Clone&&e.innerHTML&&!pe.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Oe.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function _(e,t,n,i){t=ae.apply([],t);var r,a,o,s,u,c,l=0,d=e.length,f=d-1,p=t[0],m=pe.isFunction(p);if(m||d>1&&"string"==typeof p&&!de.checkClone&&it.test(p))return e.each(function(r){var a=e.eq(r);m&&(t[0]=p.call(this,r,a.html())),_(a,t,n,i)});if(d&&(c=y(t,e[0].ownerDocument,!1,e,i),r=c.firstChild,1===c.childNodes.length&&(c=r),r||i)){for(s=pe.map(h(c,"script"),S),o=s.length;l<d;l++)a=c,l!==f&&(a=pe.clone(a,!0,!0),o&&pe.merge(s,h(a,"script"))),n.call(e[l],a,l);if(o)for(u=s[s.length-1].ownerDocument,pe.map(s,C),l=0;l<o;l++)a=s[l],ze.test(a.type||"")&&!pe._data(a,"globalEval")&&pe.contains(u,a)&&(a.src?pe._evalUrl&&pe._evalUrl(a.src):pe.globalEval((a.text||a.textContent||a.innerHTML||"").replace(at,"")));
			c=r=null}return e}function $(e,t,n){for(var i,r=t?pe.filter(t,e):e,a=0;null!=(i=r[a]);a++)n||1!==i.nodeType||pe.cleanData(h(i)),i.parentNode&&(n&&pe.contains(i.ownerDocument,i)&&m(h(i,"script")),i.parentNode.removeChild(i));return e}function A(e,t){var n=pe(t.createElement(e)).appendTo(t.body),i=pe.css(n[0],"display");return n.detach(),i}function E(e){var t=ie,n=ct[e];return n||(n=A(e,t),"none"!==n&&n||(ut=(ut||pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(ut[0].contentWindow||ut[0].contentDocument).document,t.write(),t.close(),n=A(e,t),ut.detach()),ct[e]=n),n}function N(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function D(e){if(e in Ct)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=St.length;n--;)if(e=St[n]+t,e in Ct)return e}function L(e,t){for(var n,i,r,a=[],o=0,s=e.length;o<s;o++)i=e[o],i.style&&(a[o]=pe._data(i,"olddisplay"),n=i.style.display,t?(a[o]||"none"!==n||(i.style.display=""),""===i.style.display&&Me(i)&&(a[o]=pe._data(i,"olddisplay",E(i.nodeName)))):(r=Me(i),(n&&"none"!==n||!r)&&pe._data(i,"olddisplay",r?n:pe.css(i,"display"))));for(o=0;o<s;o++)i=e[o],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?a[o]||"":"none"));return e}function R(e,t,n){var i=wt.exec(t);
			return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function I(e,t,n,i,r){for(var a=n===(i?"border":"content")?4:"width"===t?1:0,o=0;a<4;a+=2)"margin"===n&&(o+=pe.css(e,n+He[a],!0,r)),i?("content"===n&&(o-=pe.css(e,"padding"+He[a],!0,r)),"margin"!==n&&(o-=pe.css(e,"border"+He[a]+"Width",!0,r))):(o+=pe.css(e,"padding"+He[a],!0,r),"padding"!==n&&(o+=pe.css(e,"border"+He[a]+"Width",!0,r)));return o}function q(e,t,n){var i=!0,r="width"===t?e.offsetWidth:e.offsetHeight,a=ht(e),o=de.boxSizing&&"border-box"===pe.css(e,"boxSizing",!1,a);if(r<=0||null==r){if(r=mt(e,t,a),(r<0||null==r)&&(r=e.style[t]),dt.test(r))return r;i=o&&(de.boxSizingReliable()||r===e.style[t]),r=parseFloat(r)||0}return r+I(e,t,n||(o?"border":"content"),i,a)+"px"}function H(e,t,n,i,r){return new H.prototype.init(e,t,n,i,r)}function M(){return e.setTimeout(function(){Tt=void 0}),Tt=pe.now()}function F(e,t){var n,i={height:e},r=0;for(t=t?1:0;r<4;r+=2-t)n=He[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function O(e,t,n){for(var i,r=(W.tweeners[t]||[]).concat(W.tweeners["*"]),a=0,o=r.length;a<o;a++)if(i=r[a].call(n,t,e))return i}function P(e,t,n){var i,r,a,o,s,u,c,l,d=this,f={},p=e.style,h=e.nodeType&&Me(e),m=pe._data(e,"fxshow");n.queue||(s=pe._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,u=s.empty.fire,
			s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,d.always(function(){d.always(function(){s.unqueued--,pe.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],c=pe.css(e,"display"),l="none"===c?pe._data(e,"olddisplay")||E(e.nodeName):c,"inline"===l&&"none"===pe.css(e,"float")&&(de.inlineBlockNeedsLayout&&"inline"!==E(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",de.shrinkWrapBlocks()||d.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(i in t)if(r=t[i],_t.exec(r)){if(delete t[i],a=a||"toggle"===r,r===(h?"hide":"show")){if("show"!==r||!m||void 0===m[i])continue;h=!0}f[i]=m&&m[i]||pe.style(e,i)}else c=void 0;if(pe.isEmptyObject(f))"inline"===("none"===c?E(e.nodeName):c)&&(p.display=c);else{m?"hidden"in m&&(h=m.hidden):m=pe._data(e,"fxshow",{}),a&&(m.hidden=!h),h?pe(e).show():d.done(function(){pe(e).hide()}),d.done(function(){var t;pe._removeData(e,"fxshow");for(t in f)pe.style(e,t,f[t])});for(i in f)o=O(h?m[i]:0,i,d),i in m||(m[i]=o.start,h&&(o.end=o.start,o.start="width"===i||"height"===i?1:0))}}function z(e,t){var n,i,r,a,o;for(n in e)if(i=pe.camelCase(n),r=t[i],a=e[n],pe.isArray(a)&&(r=a[1],a=e[n]=a[0]),
			n!==i&&(e[i]=a,delete e[n]),o=pe.cssHooks[i],o&&"expand"in o){a=o.expand(a),delete e[i];for(n in a)n in e||(e[n]=a[n],t[n]=r)}else t[i]=r}function W(e,t,n){var i,r,a=0,o=W.prefilters.length,s=pe.Deferred().always(function(){delete u.elem}),u=function(){if(r)return!1;for(var t=Tt||M(),n=Math.max(0,c.startTime+c.duration-t),i=n/c.duration||0,a=1-i,o=0,u=c.tweens.length;o<u;o++)c.tweens[o].run(a);return s.notifyWith(e,[c,a,n]),a<1&&u?n:(s.resolveWith(e,[c]),!1)},c=s.promise({elem:e,props:pe.extend({},t),opts:pe.extend(!0,{specialEasing:{},easing:pe.easing._default},n),originalProperties:t,originalOptions:n,startTime:Tt||M(),duration:n.duration,tweens:[],createTween:function(t,n){var i=pe.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,i=t?c.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)c.tweens[n].run(1);return t?(s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c,t])):s.rejectWith(e,[c,t]),this}}),l=c.props;for(z(l,c.opts.specialEasing);a<o;a++)if(i=W.prefilters[a].call(c,e,l,c.opts))return pe.isFunction(i.stop)&&(pe._queueHooks(c.elem,c.opts.queue).stop=pe.proxy(i.stop,i)),i;return pe.map(l,O,c),pe.isFunction(c.opts.start)&&c.opts.start.call(e,c),pe.fx.timer(pe.extend(u,{elem:e,anim:c,queue:c.opts.queue})),
			c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function B(e){return pe.attr(e,"class")||""}function K(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,a=t.toLowerCase().match(Ae)||[];if(pe.isFunction(n))for(;i=a[r++];)"+"===i.charAt(0)?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function U(e,t,n,i){function r(s){var u;return a[s]=!0,pe.each(e[s]||[],function(e,s){var c=s(t,n,i);return"string"!=typeof c||o||a[c]?o?!(u=c):void 0:(t.dataTypes.unshift(c),r(c),!1)}),u}var a={},o=e===Gt;return r(t.dataTypes[0])||!a["*"]&&r("*")}function Q(e,t){var n,i,r=pe.ajaxSettings.flatOptions||{};for(i in t)void 0!==t[i]&&((r[i]?e:n||(n={}))[i]=t[i]);return n&&pe.extend(!0,e,n),e}function X(e,t,n){for(var i,r,a,o,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(o in s)if(s[o]&&s[o].test(r)){u.unshift(o);break}if(u[0]in n)a=u[0];else{for(o in n){if(!u[0]||e.converters[o+" "+u[0]]){a=o;break}i||(i=o)}a=a||i}if(a)return a!==u[0]&&u.unshift(a),n[a]}function J(e,t,n,i){var r,a,o,s,u,c={},l=e.dataTypes.slice();if(l[1])for(o in e.converters)c[o.toLowerCase()]=e.converters[o];for(a=l.shift();a;)if(e.responseFields[a]&&(n[e.responseFields[a]]=t),
			!u&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=a,a=l.shift())if("*"===a)a=u;else if("*"!==u&&u!==a){if(o=c[u+" "+a]||c["* "+a],!o)for(r in c)if(s=r.split(" "),s[1]===a&&(o=c[u+" "+s[0]]||c["* "+s[0]])){o===!0?o=c[r]:c[r]!==!0&&(a=s[0],l.unshift(s[1]));break}if(o!==!0)if(o&&e["throws"])t=o(t);else try{t=o(t)}catch(e){return{state:"parsererror",error:o?e:"No conversion from "+u+" to "+a}}}return{state:"success",data:t}}function V(e){return e.style&&e.style.display||pe.css(e,"display")}function Y(e){if(!pe.contains(e.ownerDocument||ie,e))return!0;for(;e&&1===e.nodeType;){if("none"===V(e)||"hidden"===e.type)return!0;e=e.parentNode}return!1
		}
		function G(e,t,n,i){var r;if(pe.isArray(t))pe.each(t,function(t,r){n||rn.test(e)?i(e,r):G(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)});else if(n||"object"!==pe.type(t))i(e,t);else for(r in t)G(e+"["+r+"]",t[r],n,i)}function Z(){try{return new e.XMLHttpRequest}catch(e){}}function ee(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}
		}
		function te(e){return pe.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}var ne=[],ie=e.document,re=ne.slice,ae=ne.concat,oe=ne.push,se=ne.indexOf,ue={},ce=ue.toString,le=ue.hasOwnProperty,de={},fe="1.12.4",
	pe=function(e,t){
		return new pe.fn.init(e,t)
	},
	he=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,me=/^-ms-/,ge=/-([\da-z])/gi,ye=function(e,t){return t.toUpperCase()};
	pe.fn=pe.prototype={
		jquery:fe,
		constructor:pe,
		selector:"",
		length:0,
		toArray:function(){return re.call(this)},
		get:function(e){
			return null!=e?e<0?this[e+this.length]:this[e]:re.call(this)
		},
		pushStack:function(e){
			var t=pe.merge(this.constructor(),e);
			return t.prevObject=this,t.context=this.context,t
		},
		each:function(e){
			return pe.each(this,e)
		},
		map:function(e){
			return this.pushStack(pe.map(this,function(t,n){
				return e.call(t,n,t)
			}))
		},
		slice:function(){
			return this.pushStack(re.apply(this,arguments))
		},
		first:function(){return this.eq(0)},
		last:function(){return this.eq(-1)},
		eq:function(e){
			var t=this.length,n=+e+(e<0?t:0);
			return this.pushStack(n>=0&&n<t?[this[n]]:[])
		},
		end:function(){return this.prevObject||this.constructor()},
		push:oe,
		sort:ne.sort,
		splice:ne.splice
	},
	pe.extend=pe.fn.extend=function(){
		var e,t,n,i,r,a,o=arguments[0]||{},s=1,u=arguments.length,c=!1;
		for("boolean"==typeof o&&(c=o,o=arguments[s]||{},s++),
			"object"==typeof o||pe.isFunction(o)||(o={}),
		s===u&&(o=this,s--);s<u;s++)
			if(null!=(r=arguments[s]))
				for(i in r)
					e=o[i],
					n=r[i],
					o!==n&&(c&&n&&(pe.isPlainObject(n)||(t=pe.isArray(n)))?
						(t?
							(t=!1,a=e&&pe.isArray(e)?e:[]):
							a=e&&pe.isPlainObject(e)?
								e:
								{},
						o[i]=pe.extend(c,a,n)):
						void 0!==n&&(o[i]=n));
		return o
	},
	pe.extend({
		expando:"jQuery"+(fe+Math.random()).replace(/\D/g,""),
		isReady:!0,
		error:function(e){throw new Error(e)},
		noop:function(){},
		isFunction:function(e){return"function"===pe.type(e)},
		isArray:Array.isArray||function(e){return"array"===pe.type(e)},
		isWindow:function(e){return null!=e&&e==e.window},
		isNumeric:function(e){var t=e&&e.toString();return!pe.isArray(e)&&t-parseFloat(t)+1>=0},
		isEmptyObject:function(e){var t;for(t in e)return!1;return!0},
		isPlainObject:function(e){
			var t;if(!e||"object"!==pe.type(e)||e.nodeType||pe.isWindow(e))return!1;
			try{
				if(e.constructor&&!le.call(e,"constructor")&&!le.call(e.constructor.prototype,"isPrototypeOf"))return!1
			}
			catch(e){return!1}
			if(!de.ownFirst)for(t in e)return le.call(e,t);
			for(t in e);
			return void 0===t||le.call(e,t)
		},
		type:function(e){
			return null==e?e+"":"object"==typeof e||"function"==typeof e?ue[ce.call(e)]||"object":typeof e
		},
		globalEval:function(t){
			t&&pe.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)
		},
		camelCase:function(e){return e.replace(me,"ms-").replace(ge,ye)},
		nodeName:function(e,t){
			return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
		},
		each:function(e,t){
			var i,r=0;if(n(e))for(i=e.length;r<i&&t.call(e[r],r,e[r])!==!1;r++);else for(r in e)if(t.call(e[r],r,e[r])===!1)break;return e
		},
		trim:function(e){
			return null==e?"":(e+"").replace(he,"")
		},
		makeArray:function(e,t){
			var i=t||[];return null!=e&&(n(Object(e))?pe.merge(i,"string"==typeof e?[e]:e):oe.call(i,e)),i
		},
		inArray:function(e,t,n){
			var i;if(t){if(se)return se.call(t,e,n);for(i=t.length,n=n?n<0?Math.max(0,i+n):n:0;n<i;n++)if(n in t&&t[n]===e)return n}return-1
		},
		merge:function(e,t){
			for(var n=+t.length,i=0,r=e.length;i<n;)e[r++]=t[i++];if(n!==n)for(;void 0!==t[i];)e[r++]=t[i++];return e.length=r,e
		},
		grep:function(e,t,n){
			for(var i,r=[],a=0,o=e.length,s=!n;a<o;a++)i=!t(e[a],a),i!==s&&r.push(e[a]);return r
		},
		map:function(e,t,i){
			var r,a,o=0,s=[];if(n(e))for(r=e.length;o<r;o++)a=t(e[o],o,i),null!=a&&s.push(a);else for(o in e)a=t(e[o],o,i),null!=a&&s.push(a);return ae.apply([],s)
		},
		guid:1,
		proxy:function(e,t){
			var n,i,r;
			if("string"==typeof t&&(r=e[t],t=e,e=r),pe.isFunction(e))
				return n=re.call(arguments,2),
					i=function(){
						return e.apply(t||this,n.concat(re.call(arguments)))
					},
					i.guid=e.guid=e.guid||pe.guid++,
				i
		},
		now:function(){
			return+new Date
		},
		support:de
	}),
	"function"==typeof Symbol&&(pe.fn[Symbol.iterator]=ne[Symbol.iterator]),
	pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
	function(e,t){
		ue["[object "+t+"]"]=t.toLowerCase()
	});
	var ve=function(e){
		function t(e,t,n,i){
			var r,a,o,s,u,c,d,p,h=t&&t.ownerDocument,m=t?t.nodeType:9;
			if(n=n||[],"string"!=typeof e||!e||1!==m&&9!==m&&11!==m)
				return n;
			if(!i&&((t?t.ownerDocument||t:O)!==D&&N(t),t=t||D,R)){
				if(11!==m&&(c=ye.exec(e)))
					if(r=c[1]){
						if(9===m){
							if(!(o=t.getElementById(r)))
								return n;
							if(o.id===r)
								return n.push(o),n
						}
						else if(h&&(o=h.getElementById(r))&&M(t,o)&&o.id===r)
							return n.push(o),n
					}
					else{
						if(c[2])
							return G.apply(n,t.getElementsByTagName(e)),n;
						if((r=c[3])&&x.getElementsByClassName&&t.getElementsByClassName)
							return G.apply(n,t.getElementsByClassName(r)),n
					}
					if(x.qsa&&!K[e+" "]&&(!I||!I.test(e))){
						if(1!==m)
							h=t,p=e;
						else if("object"!==t.nodeName.toLowerCase()){
							for((s=t.getAttribute("id"))?
									s=s.replace(be,"\\$&"):
									t.setAttribute("id",s=F),
								d=T(e),
								a=d.length,
								u=fe.test(s)?
									"#"+s:
									"[id='"+s+"']";
							a--;)
								d[a]=u+" "+f(d[a]);
							p=d.join(","),
							h=ve.test(e)&&l(t.parentNode)||t
						}
					if(p)
						try{
							return G.apply(n,h.querySelectorAll(p)),n
						}
						catch(e){}
						finally{s===F&&t.removeAttribute("id")}
					}
				}
				return _(e.replace(se,"$1"),t,n,i)
				}
		function n(){
			function e(n,i){
				return t.push(n+" ")>k.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[F]=!0,e}function r(e){var t=D.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function a(e,t){for(var n=e.split("|"),i=n.length;i--;)k.attrHandle[n[i]]=t}function o(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||Q)-(~e.sourceIndex||Q);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i(function(t){return t=+t,i(function(n,i){for(var r,a=e([],n.length,t),o=a.length;o--;)n[r=a[o]]&&(n[r]=!(i[r]=n[r]))})})}function l(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function d(){}function f(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function p(e,t,n){var i=t.dir,r=n&&"parentNode"===i,a=z++;return t.first?function(t,n,a){for(;t=t[i];)if(1===t.nodeType||r)return e(t,n,a)}:function(t,n,o){var s,u,c,l=[P,a];if(o){for(;t=t[i];)if((1===t.nodeType||r)&&e(t,n,o))return!0}else for(;t=t[i];)if(1===t.nodeType||r){if(c=t[F]||(t[F]={}),u=c[t.uniqueID]||(c[t.uniqueID]={}),(s=u[i])&&s[0]===P&&s[1]===a)return l[2]=s[2];if(u[i]=l,l[2]=e(t,n,o))return!0}}}function h(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function m(e,n,i){for(var r=0,a=n.length;r<a;r++)t(e,n[r],i);return i}function g(e,t,n,i,r){for(var a,o=[],s=0,u=e.length,c=null!=t;s<u;s++)(a=e[s])&&(n&&!n(a,i,r)||(o.push(a),c&&t.push(s)));return o}function y(e,t,n,r,a,o){return r&&!r[F]&&(r=y(r)),a&&!a[F]&&(a=y(a,o)),i(function(i,o,s,u){var c,l,d,f=[],p=[],h=o.length,y=i||m(t||"*",s.nodeType?[s]:s,[]),v=!e||!i&&t?y:g(y,f,e,s,u),b=n?a||(i?e:h||r)?[]:o:v;if(n&&n(v,b,s,u),r)for(c=g(b,p),r(c,[],s,u),l=c.length;l--;)(d=c[l])&&(b[p[l]]=!(v[p[l]]=d));if(i){if(a||e){if(a){for(c=[],l=b.length;l--;)(d=b[l])&&c.push(v[l]=d);a(null,b=[],c,u)}for(l=b.length;l--;)(d=b[l])&&(c=a?ee(i,d):f[l])>-1&&(i[c]=!(o[c]=d))}}else b=g(b===o?b.splice(h,b.length):b),a?a(null,o,b,u):G.apply(o,b)})}function v(e){for(var t,n,i,r=e.length,a=k.relative[e[0].type],o=a||k.relative[" "],s=a?1:0,u=p(function(e){return e===t},o,!0),c=p(function(e){return ee(t,e)>-1},o,!0),l=[function(e,n,i){var r=!a&&(i||n!==$)||((t=n).nodeType?u(e,n,i):c(e,n,i));return t=null,r}];s<r;s++)if(n=k.relative[e[s].type])l=[p(h(l),n)];else{if(n=k.filter[e[s].type].apply(null,e[s].matches),n[F]){for(i=++s;i<r&&!k.relative[e[i].type];i++);return y(s>1&&h(l),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(se,"$1"),n,s<i&&v(e.slice(s,i)),i<r&&v(e=e.slice(i)),i<r&&f(e))}l.push(n)}return h(l)}function b(e,n){var r=n.length>0,a=e.length>0,o=function(i,o,s,u,c){var l,d,f,p=0,h="0",m=i&&[],y=[],v=$,b=i||a&&k.find.TAG("*",c),w=P+=null==v?1:Math.random()||.1,x=b.length;for(c&&($=o===D||o||c);h!==x&&null!=(l=b[h]);h++){if(a&&l){for(d=0,o||l.ownerDocument===D||(N(l),s=!R);f=e[d++];)if(f(l,o||D,s)){u.push(l);break}c&&(P=w)}r&&((l=!f&&l)&&p--,i&&m.push(l))}if(p+=h,r&&h!==p){for(d=0;f=n[d++];)f(m,y,o,s);if(i){if(p>0)for(;h--;)m[h]||y[h]||(y[h]=V.call(u));y=g(y)}G.apply(u,y),c&&!i&&y.length>0&&p+n.length>1&&t.uniqueSort(u)}return c&&(P=w,$=v),m};return r?i(o):o}var w,x,k,S,C,T,j,_,$,A,E,N,D,L,R,I,q,H,M,F="sizzle"+1*new Date,O=e.document,P=0,z=0,W=n(),B=n(),K=n(),U=function(e,t){return e===t&&(E=!0),0},Q=1<<31,X={}.hasOwnProperty,J=[],V=J.pop,Y=J.push,G=J.push,Z=J.slice,ee=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",re="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",ae=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+re+")*)|.*)\\)|)",oe=new RegExp(ne+"+","g"),se=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),ce=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),le=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),de=new RegExp(ae),fe=new RegExp("^"+ie+"$"),pe={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+re),PSEUDO:new RegExp("^"+ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")
		},
		he=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,
		ge=/^[^{]+\{\s*\[native \w/,
		ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		ve=/[+~]/,
		be=/'|\\/g,
		we=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),
		xe=function(e,t,n){
			var i="0x"+t-65536;return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)
		},
		ke=function(){N()};
		try{
			G.apply(J=Z.call(O.childNodes),O.childNodes),
			J[O.childNodes.length].nodeType
		}
		catch(e){
			G={
				apply:J.length?
					function(e,t){Y.apply(e,Z.call(t))}:
					function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}
			}
		}
		x=t.support={},
		C=t.isXML=function(e){
			var t=e&&(e.ownerDocument||e).documentElement;
			return!!t&&"HTML"!==t.nodeName
		},
		N=t.setDocument=function(e){
			var t,n,i=e?e.ownerDocument||e:O;
			return i!==D&&9===i.nodeType&&i.documentElement?
				(D=i,
					L=D.documentElement,
					R=!C(D),
					(n=D.defaultView)&&n.top!==n&&(n.addEventListener?
							n.addEventListener("unload",ke,!1):
							n.attachEvent&&n.attachEvent("onunload",ke)),
					x.attributes=r(function(e){
						return e.className="i",!e.getAttribute("className")
					}),
					x.getElementsByTagName=r(function(e){
						return e.appendChild(D.createComment("")),!e.getElementsByTagName("*").length
					}),
					x.getElementsByClassName=ge.test(D.getElementsByClassName),
					x.getById=r(function(e){
						return L.appendChild(e).id=F,!D.getElementsByName||!D.getElementsByName(F).length
					}),
					x.getById?
						(k.find.ID=function(e,t){
							if("undefined"!=typeof t.getElementById&&R){
							var n=t.getElementById(e);return n?[n]:[]
						}
					},
					k.filter.ID=function(e){var t=e.replace(we,xe);return function(e){return e.getAttribute("id")===t}}):(delete k.find.ID,k.filter.ID=function(e){var t=e.replace(we,xe);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),k.find.TAG=x.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):x.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,a=t.getElementsByTagName(e);if("*"===e){for(;n=a[r++];)1===n.nodeType&&i.push(n);return i}return a
					},
					k.find.CLASS=x.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&R)return t.getElementsByClassName(e)
					},
					q=[],I=[],(x.qsa=ge.test(D.querySelectorAll))&&(r(function(e){L.appendChild(e).innerHTML="<a id='"+F+"'></a><select id='"+F+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&I.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||I.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+F+"-]").length||I.push("~="),e.querySelectorAll(":checked").length||I.push(":checked"),e.querySelectorAll("a#"+F+"+*").length||I.push(".#.+[+~]")}),r(function(e){var t=D.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&I.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||I.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),I.push(",.*:")})),(x.matchesSelector=ge.test(H=L.matches||L.webkitMatchesSelector||L.mozMatchesSelector||L.oMatchesSelector||L.msMatchesSelector))&&r(function(e){x.disconnectedMatch=H.call(e,"div"),H.call(e,"[s!='']:x"),q.push("!=",ae)}),I=I.length&&new RegExp(I.join("|")),q=q.length&&new RegExp(q.join("|")),t=ge.test(L.compareDocumentPosition),
					M=t||ge.test(L.contains)?
						function(e,t){
							var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))
						}:
						function(e,t){
							if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1
						},
					U=t?function(e,t){if(e===t)return E=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!x.sortDetached&&t.compareDocumentPosition(e)===n?e===D||e.ownerDocument===O&&M(O,e)?-1:t===D||t.ownerDocument===O&&M(O,t)?1:A?ee(A,e)-ee(A,t):0:4&n?-1:1)}:function(e,t){if(e===t)return E=!0,0;var n,i=0,r=e.parentNode,a=t.parentNode,s=[e],u=[t];if(!r||!a)return e===D?-1:t===D?1:r?-1:a?1:A?ee(A,e)-ee(A,t):0;if(r===a)return o(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;s[i]===u[i];)i++;return i?o(s[i],u[i]):s[i]===O?-1:u[i]===O?1:0
					},
				D):
				D
		},
		t.matches=function(e,n){return t(e,null,null,n)
		},
		t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==D&&N(e),n=n.replace(le,"='$1']"),x.matchesSelector&&R&&!K[n+" "]&&(!q||!q.test(n))&&(!I||!I.test(n)))try{var i=H.call(e,n);if(i||x.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,D,null,[e]).length>0
		},
		t.contains=function(e,t){return(e.ownerDocument||e)!==D&&N(e),M(e,t)
		},
		t.attr=function(e,t){(e.ownerDocument||e)!==D&&N(e);var n=k.attrHandle[t.toLowerCase()],i=n&&X.call(k.attrHandle,t.toLowerCase())?n(e,t,!R):void 0;return void 0!==i?i:x.attributes||!R?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null
		},
		t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)
		},
		t.uniqueSort=function(e){
			var t,n=[],i=0,r=0;if(E=!x.detectDuplicates,A=!x.sortStable&&e.slice(0),e.sort(U),E){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return A=null,e
		},
		S=t.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=S(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=S(t);return n
		},
		k=t.selectors={
			cacheLength:50,
			createPseudo:i,
			match:pe,
			attrHandle:{
			},
			find:{
			},
			relative:{">":{dir:"parentNode",first:!0
			},
			" ":{dir:"parentNode"
			},
			"+":{dir:"previousSibling",first:!0
			},
			"~":{dir:"previousSibling"}
			},
			preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,xe),e[3]=(e[3]||e[4]||e[5]||"").replace(we,xe),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)
			},
			CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e
			},
			PSEUDO:function(e){var t,n=!e[6]&&e[2];return pe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(t=T(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}
			},
			filter:{
				TAG:function(e){
					var t=e.replace(we,xe).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}
				},
				CLASS:function(e){
					var t=W[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&W(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})
				},
				ATTR:function(e,n,i){
					return function(r){var a=t.attr(r,e);return null==a?"!="===n:!n||(a+="","="===n?a===i:"!="===n?a!==i:"^="===n?i&&0===a.indexOf(i):"*="===n?i&&a.indexOf(i)>-1:"$="===n?i&&a.slice(-i.length)===i:"~="===n?(" "+a.replace(oe," ")+" ").indexOf(i)>-1:"|="===n&&(a===i||a.slice(0,i.length+1)===i+"-"))}
				},
				CHILD:function(e,t,n,i,r){
					var a="nth"!==e.slice(0,3),o="last"!==e.slice(-4),s="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,u){var c,l,d,f,p,h,m=a!==o?"nextSibling":"previousSibling",g=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s,b=!1;if(g){if(a){for(;m;){for(f=t;f=f[m];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[o?g.firstChild:g.lastChild],o&&v){for(f=g,d=f[F]||(f[F]={}),l=d[f.uniqueID]||(d[f.uniqueID]={}),c=l[e]||[],p=c[0]===P&&c[1],b=p&&c[2],f=p&&g.childNodes[p];f=++p&&f&&f[m]||(b=p=0)||h.pop();)if(1===f.nodeType&&++b&&f===t){l[e]=[P,p,b];break}}else if(v&&(f=t,d=f[F]||(f[F]={}),l=d[f.uniqueID]||(d[f.uniqueID]={}),c=l[e]||[],p=c[0]===P&&c[1],b=p),b===!1)for(;(f=++p&&f&&f[m]||(b=p=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++b||(v&&(d=f[F]||(f[F]={}),l=d[f.uniqueID]||(d[f.uniqueID]={}),l[e]=[P,b]),f!==t)););return b-=r,b===i||b%i===0&&b/i>=0}}
				},
				PSEUDO:function(e,n){
					var r,a=k.pseudos[e]||k.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return a[F]?a(n):a.length>1?(r=[e,e,"",n],k.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,r=a(e,n),o=r.length;o--;)i=ee(e,r[o]),e[i]=!(t[i]=r[o])}):
					function(e){return a(e,0,r)}
					):
					a
				}
			},
			pseudos:{
				not:i(function(e){
					var t=[],n=[],r=j(e.replace(se,"$1"));
					return r[F]?
						i(function(e,t,n,i){
							for(var a,o=r(e,null,i,[]),s=e.length;s--;)
								(a=o[s])&&(e[s]=!(t[s]=a))
						}):
						function(e,i,a){
							return t[0]=e,
								r(t,null,a,n),
								t[0]=null,
							!n.pop()
						}
				}),
				has:i(function(e){
					return function(n){
						return t(e,n).length>0
					}
				}),
				contains:i(function(e){
					return e=e.replace(we,xe),
					function(t){
						return(t.textContent||t.innerText||S(t))
							.indexOf(e)>-1
					}
				}),
				lang:i(function(e){
					return fe.test(e||"")||t.error("unsupported lang: "+e),
						e=e.replace(we,xe).toLowerCase(),
					function(t){
						var n;
						do 
							if(n=R?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))
								return n=n.toLowerCase(),
								n===e||0===n.indexOf(e+"-");
						while((t=t.parentNode)&&1===t.nodeType);
						return!1
					}
				}),
				target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},
				root:function(e){return e===L},
				focus:function(e){return e===D.activeElement&&(!D.hasFocus||D.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},
				enabled:function(e){return e.disabled===!1},
				disabled:function(e){return e.disabled===!0},
				checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},
				selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},
				empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},
				parent:function(e){return!k.pseudos.empty(e)},
				header:function(e){return me.test(e.nodeName)},
				input:function(e){return he.test(e.nodeName)},
				button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},
				text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},
				first:c(function(){return[0]}),
				last:c(function(e,t){return[t-1]}),
				eq:c(function(e,t,n){return[n<0?n+t:n]}),
				even:c(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),
				odd:c(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),
				lt:c(function(e,t,n){for(var i=n<0?n+t:n;--i>=0;)e.push(i);return e}),
				gt:c(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})
			}
		},
		k.pseudos.nth=k.pseudos.eq;
		for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})
			k.pseudos[w]=s(w);
		for(w in{submit:!0,reset:!0})
			k.pseudos[w]=u(w);
		return d.prototype=k.filters=k.pseudos,
			k.setFilters=new d,
			T=t.tokenize=function(e,n){
				var i,r,a,o,s,u,c,l=B[e+" "];
				if(l)return n?0:l.slice(0);
				for(s=e,u=[],c=k.preFilter;s;){
					i&&!(r=ue.exec(s))||(r&&(s=s.slice(r[0].length)||s),u.push(a=[])),
					i=!1,
					(r=ce.exec(s))&&(i=r.shift(),
						a.push({value:i,type:r[0].replace(se," ")}),
					s=s.slice(i.length));
					for(o in k.filter)
						!(r=pe[o].exec(s))||c[o]&&!(r=c[o](r))||
							(i=r.shift(),
								a.push({value:i,type:o,matches:r}),
							s=s.slice(i.length));
					if(!i)break
				}
				return n?s.length:s?t.error(e):B(e,u).slice(0)
			},
			j=t.compile=function(e,t){
				var n,i=[],r=[],a=K[e+" "];if(!a){for(t||(t=T(e)),n=t.length;n--;)a=v(t[n]),a[F]?i.push(a):r.push(a);a=K(e,b(r,i)),a.selector=e}return a
			},
			_=t.select=function(e,t,n,i){
				var r,a,o,s,u,c="function"==typeof e&&e,d=!i&&T(e=c.selector||e);if(n=n||[],1===d.length){if(a=d[0]=d[0].slice(0),a.length>2&&"ID"===(o=a[0]).type&&x.getById&&9===t.nodeType&&R&&k.relative[a[1].type]){if(t=(k.find.ID(o.matches[0].replace(we,xe),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(a.shift().value.length)}for(r=pe.needsContext.test(e)?0:a.length;r--&&(o=a[r],!k.relative[s=o.type]);)if((u=k.find[s])&&(i=u(o.matches[0].replace(we,xe),ve.test(a[0].type)&&l(t.parentNode)||t))){if(a.splice(r,1),e=i.length&&f(a),!e)return G.apply(n,i),n;break}}return(c||j(e,d))(i,t,!R,n,!t||ve.test(e)&&l(t.parentNode)||t),n
			},
			x.sortStable=F.split("").sort(U).join("")===F,
			x.detectDuplicates=!!E,
			N(),
			x.sortDetached=r(function(e){
				return 1&e.compareDocumentPosition(D.createElement("div"))
			}),
			r(function(e){
				return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")
			})||a("type|href|height|width",function(e,t,n){
				if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)
			}),
			x.attributes&&r(function(e){
				return e.innerHTML="<input/>",
					e.firstChild.setAttribute("value",""),
				""===e.firstChild.getAttribute("value")
			})||a("value",function(e,t,n){
				if(!n&&"input"===e.nodeName.toLowerCase())
					return e.defaultValue
			}),
			r(function(e){
				return null==e.getAttribute("disabled")
			})||a(te,function(e,t,n){
				var i;if(!n)return e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null
			}),
		t
	}(e);
	pe.find=ve,
	pe.expr=ve.selectors,
	pe.expr[":"]=pe.expr.pseudos,
	pe.uniqueSort=pe.unique=ve.uniqueSort,
	pe.text=ve.getText,
	pe.isXMLDoc=ve.isXML,
	pe.contains=ve.contains;
	var be=function(e,t,n){
		for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&pe(e).is(n))break;i.push(e)}return i
	},
	we=function(e,t){
		for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n
	},
	xe=pe.expr.match.needsContext,
	ke=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Se=/^.[^:#\[\.,]*$/;
	pe.filter=function(e,t,n){
		var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?pe.find.matchesSelector(i,e)?[i]:[]:pe.find.matches(e,pe.grep(t,function(e){return 1===e.nodeType}))
	},
	pe.fn.extend({
		find:function(e){
			var t,n=[],i=this,r=i.length;if("string"!=typeof e)return this.pushStack(pe(e).filter(function(){for(t=0;t<r;t++)if(pe.contains(i[t],this))return!0}));for(t=0;t<r;t++)pe.find(e,i[t],n);return n=this.pushStack(r>1?pe.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n
		},
		filter:function(e){
			return this.pushStack(i(this,e||[],!1))
		},
		not:function(e){
			return this.pushStack(i(this,e||[],!0))
		},
		is:function(e){
			return!!i(this,"string"==typeof e&&xe.test(e)?pe(e):e||[],!1).length
		}
	});
	var Ce,
	Te=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	je=pe.fn.init=function(e,t,n){
		var i,r;
		if(!e)return this;
		if(n=n||Ce,"string"==typeof e){
			if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:Te.exec(e),!i||!i[1]&&t)
				return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);
			if(i[1]){
				if(t=t instanceof pe?t[0]:t,
					pe.merge(this,pe.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:ie,!0)),
				ke.test(i[1])&&pe.isPlainObject(t))
					for(i in t)pe.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);
				return this
			}
			if(r=ie.getElementById(i[2]),r&&r.parentNode){
				if(r.id!==i[2])
					return Ce.find(e);
				this.length=1,this[0]=r
			}
			return this.context=ie,
				this.selector=e,
			this
		}
		return e.nodeType?(this.context=this[0]=e,this.length=1,this):pe.isFunction(e)?"undefined"!=typeof n.ready?n.ready(e):e(pe):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),pe.makeArray(e,this))
	};
	je.prototype=pe.fn,
	Ce=pe(ie);
	var _e=/^(?:parents|prev(?:Until|All))/,
	$e={children:!0,contents:!0,next:!0,prev:!0};
	pe.fn.extend({
		has:function(e){
			var t,n=pe(e,this),i=n.length;return this.filter(function(){for(t=0;t<i;t++)if(pe.contains(this,n[t]))return!0})
		},
		closest:function(e,t){
			for(var n,i=0,r=this.length,a=[],o=xe.test(e)||"string"!=typeof e?pe(e,t||this.context):0;i<r;i++)
				for(n=this[i];n&&n!==t;n=n.parentNode)
					if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&pe.find.matchesSelector(n,e))){
						a.push(n);break
					}
			return this.pushStack(a.length>1?pe.uniqueSort(a):a)
		},
		index:function(e){
			return e?"string"==typeof e?pe.inArray(this[0],pe(e)):pe.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
		},
		add:function(e,t){
			return this.pushStack(pe.uniqueSort(pe.merge(this.get(),pe(e,t))))
		},
		addBack:function(e){
			return this.add(null==e?this.prevObject:this.prevObject.filter(e))
		}
	}),
	pe.each({
		parent:function(e){
			var t=e.parentNode;return t&&11!==t.nodeType?t:null
		},
		parents:function(e){
			return be(e,"parentNode")
		},
		parentsUntil:function(e,t,n){
			return be(e,"parentNode",n)
		},
		next:function(e){
			return r(e,"nextSibling")
		},
		prev:function(e){
			return r(e,"previousSibling")
		},
		nextAll:function(e){
			return be(e,"nextSibling")
		},
		prevAll:function(e){
			return be(e,"previousSibling")
		},
		nextUntil:function(e,t,n){
			return be(e,"nextSibling",n)
		},
		prevUntil:function(e,t,n){
			return be(e,"previousSibling",n)
		},
		siblings:function(e){
			return we((e.parentNode||{}).firstChild,e)
		},
		children:function(e){
			return we(e.firstChild)
		},
		contents:function(e){
			return pe.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:pe.merge([],e.childNodes)
		}
	},
	function(e,t){
		pe.fn[e]=function(n,i){
			var r=pe.map(this,t,n);
			return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=pe.filter(i,r)),this.length>1&&($e[e]||(r=pe.uniqueSort(r)),_e.test(e)&&(r=r.reverse())),
			this.pushStack(r)
		}
	});
	var Ae=/\S+/g;
	pe.Callbacks=function(e){
		e="string"==typeof e?a(e):pe.extend({},e);
		var t,n,i,r,o=[],s=[],u=-1,
		c=function(){
			for(r=e.once,i=t=!0;s.length;u=-1)
				for(n=s.shift();++u<o.length;)
					o[u].apply(n[0],n[1])===!1&&e.stopOnFalse&&(u=o.length,n=!1);
				e.memory||(n=!1),t=!1,r&&(o=n?[]:"")
		},
		l={
			add:function(){
				return o&&(n&&!t&&(u=o.length-1,s.push(n)),function t(n){
					pe.each(n,function(n,i){
						pe.isFunction(i)?e.unique&&l.has(i)||o.push(i):i&&i.length&&"string"!==pe.type(i)&&t(i)
					})
				}(arguments),n&&!t&&c()),
				this
			},
			remove:function(){
				return pe.each(arguments,function(e,t){
					for(var n;(n=pe.inArray(t,o,n))>-1;)
						o.splice(n,1),n<=u&&u--
				}),
				this
			},
			has:function(e){
				return e?pe.inArray(e,o)>-1:o.length>0
			},
			empty:function(){
				return o&&(o=[]),this
			},
			disable:function(){
				return r=s=[],o=n="",this
			},
			disabled:function(){return!o},
			lock:function(){
				return r=!0,n||l.disable(),this
			},
			locked:function(){return!!r},
			fireWith:function(e,n){
				return r||(n=n||[],n=[e,n.slice?n.slice():n],s.push(n),t||c()),this
			},
			fire:function(){
				return l.fireWith(this,arguments),this
			},
			fired:function(){return!!i}
		};
		return l
	},
	pe.extend({
		Deferred:function(e){
			var t=[["resolve","done",pe.Callbacks("once memory"),"resolved"],
				["reject","fail",pe.Callbacks("once memory"),"rejected"],
				["notify","progress",pe.Callbacks("memory")]],
			n="pending",
			i={
				state:function(){return n},
				always:function(){return r.done(arguments).fail(arguments),this},
				then:function(){
					var e=arguments;
					return pe.Deferred(function(n){
						pe.each(t,function(t,a){
							var o=pe.isFunction(e[t])&&e[t];
							r[a[1]](function(){
								var e=o&&o.apply(this,arguments);
								e&&pe.isFunction(e.promise)?
									e.promise().progress(n.notify).done(n.resolve).fail(n.reject):
									n[a[0]+"With"](this===i?n.promise():this,o?[e]:arguments)
							})
						}),e=null
					}).promise()
				},
				promise:function(e){return null!=e?pe.extend(e,i):i}
			},
			r={};
			return i.pipe=i.then,
				pe.each(t,function(e,a){
					var o=a[2],s=a[3];
					i[a[1]]=o.add,
					s&&o.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),
					r[a[0]]=function(){return r[a[0]+"With"](this===r?i:this,arguments),this},
					r[a[0]+"With"]=o.fireWith
				}),
				i.promise(r),
				e&&e.call(r,r),
			r
		},
		when:function(e){
			var t,n,i,r=0,a=re.call(arguments),
			o=a.length,
			s=1!==o||e&&pe.isFunction(e.promise)?o:0,
			u=1===s?e:pe.Deferred(),
			c=function(e,n,i){
				return function(r){
					n[e]=this,
					i[e]=arguments.length>1?re.call(arguments):r,
					i===t?u.notifyWith(n,i):--s||u.resolveWith(n,i)
				}
			};
			if(o>1)
				for(t=new Array(o),n=new Array(o),i=new Array(o);r<o;r++)
					a[r]&&pe.isFunction(a[r].promise)?
						a[r].promise().progress(c(r,n,t)).done(c(r,i,a)).fail(u.reject):
						--s;
			return s||u.resolveWith(i,a),u.promise()
		}
	});
	var Ee;
	pe.fn.ready=function(e){
		return pe.ready.promise().done(e),this
	},
	pe.extend({
		isReady:!1,
		readyWait:1,
		holdReady:function(e){
			e?pe.readyWait++:pe.ready(!0)
		},
		ready:function(e){
			(e===!0?--pe.readyWait:pe.isReady)||(pe.isReady=!0,e!==!0&&--pe.readyWait>0||(Ee.resolveWith(ie,[pe]),pe.fn.triggerHandler&&(pe(ie).triggerHandler("ready"),pe(ie).off("ready"))))
		}
	}),
	pe.ready.promise=function(t){
		if(!Ee)
			if(Ee=pe.Deferred(),"complete"===ie.readyState||"loading"!==ie.readyState&&!ie.documentElement.doScroll)
				e.setTimeout(pe.ready);
			else if(ie.addEventListener)ie.addEventListener("DOMContentLoaded",s),
			e.addEventListener("load",s);
		else{
			ie.attachEvent("onreadystatechange",s),e.attachEvent("onload",s);
			var n=!1;try{
				n=null==e.frameElement&&ie.documentElement
			}
			catch(e){}
			n&&n.doScroll&&!function t(){
				if(!pe.isReady){
					try{n.doScroll("left")
					}
					catch(n){return e.setTimeout(t,50)}
					o(),
					pe.ready()
				}
			}()
		}return Ee.promise(t)
	},
	pe.ready.promise();
	var Ne;
	for(Ne in pe(de))
		break;
	de.ownFirst="0"===Ne,
	de.inlineBlockNeedsLayout=!1,
	pe(function(){
		var e,t,n,i;
		n=ie.getElementsByTagName("body")[0],
		n&&n.style&&(t=ie.createElement("div"),
			i=ie.createElement("div"),
			i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
			n.appendChild(i).appendChild(t),
			"undefined"!=typeof t.style.zoom&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
				de.inlineBlockNeedsLayout=e=3===t.offsetWidth,
			e&&(n.style.zoom=1)),
		n.removeChild(i))
	}),
	function(){
		var e=ie.createElement("div");
		de.deleteExpando=!0;
		try{delete e.test}
		catch(e){de.deleteExpando=!1}
		e=null
	}();
	var De=function(e){
		var t=pe.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||t!==!0&&e.getAttribute("classid")===t)},Le=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Re=/([A-Z])/g;pe.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?pe.cache[e[pe.expando]]:e[pe.expando],!!e&&!c(e)},data:function(e,t,n){return l(e,t,n)},removeData:function(e,t){return d(e,t)},_data:function(e,t,n){return l(e,t,n,!0)},_removeData:function(e,t){return d(e,t,!0)}}),pe.fn.extend({data:function(e,t){var n,i,r,a=this[0],o=a&&a.attributes;if(void 0===e){if(this.length&&(r=pe.data(a),1===a.nodeType&&!pe._data(a,"parsedAttrs"))){for(n=o.length;n--;)o[n]&&(i=o[n].name,0===i.indexOf("data-")&&(i=pe.camelCase(i.slice(5)),u(a,i,r[i])));pe._data(a,"parsedAttrs",!0)}return r}return"object"==typeof e?this.each(function(){pe.data(this,e)}):arguments.length>1?this.each(function(){pe.data(this,e,t)}):a?u(a,e,pe.data(a,e)):void 0},removeData:function(e){return this.each(function(){pe.removeData(this,e)})}}),pe.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=pe._data(e,t),n&&(!i||pe.isArray(n)?i=pe._data(e,t,pe.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=pe.queue(e,t),i=n.length,r=n.shift(),a=pe._queueHooks(e,t),o=function(){pe.dequeue(e,t)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete a.stop,r.call(e,o,a)),!i&&a&&a.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return pe._data(e,n)||pe._data(e,n,{empty:pe.Callbacks("once memory").add(function(){pe._removeData(e,t+"queue"),pe._removeData(e,n)})})}}),pe.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?pe.queue(this[0],e):void 0===t?this:this.each(function(){var n=pe.queue(this,e,t);pe._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&pe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){pe.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=pe.Deferred(),a=this,o=this.length,s=function(){--i||r.resolveWith(a,[a])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";o--;)n=pe._data(a[o],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(s));return s(),r.promise(t)}}),function(){var e;de.shrinkWrapBlocks=function(){if(null!=e)return e;e=!1;var t,n,i;return n=ie.getElementsByTagName("body")[0],n&&n.style?(t=ie.createElement("div"),i=ie.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(t),"undefined"!=typeof t.style.zoom&&(t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",t.appendChild(ie.createElement("div")).style.width="5px",e=3!==t.offsetWidth),n.removeChild(i),e):void 0}}();var Ie=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,qe=new RegExp("^(?:([+-])=|)("+Ie+")([a-z%]*)$","i"),He=["Top","Right","Bottom","Left"],Me=function(e,t){return e=t||e,"none"===pe.css(e,"display")||!pe.contains(e.ownerDocument,e)},Fe=function(e,t,n,i,r,a,o){var s=0,u=e.length,c=null==n;if("object"===pe.type(n)){r=!0;for(s in n)Fe(e,t,s,n[s],!0,a,o)}else if(void 0!==i&&(r=!0,pe.isFunction(i)||(o=!0),c&&(o?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(pe(e),n)})),t))for(;s<u;s++)t(e[s],n,o?i:i.call(e[s],s,t(e[s],n)));return r?e:c?t.call(e):u?t(e[0],n):a},Oe=/^(?:checkbox|radio)$/i,Pe=/<([\w:-]+)/,ze=/^$|\/(?:java|ecma)script/i,We=/^\s+/,Be="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";!function(){var e=ie.createElement("div"),t=ie.createDocumentFragment(),n=ie.createElement("input");e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",de.leadingWhitespace=3===e.firstChild.nodeType,de.tbody=!e.getElementsByTagName("tbody").length,de.htmlSerialize=!!e.getElementsByTagName("link").length,de.html5Clone="<:nav></:nav>"!==ie.createElement("nav").cloneNode(!0).outerHTML,n.type="checkbox",n.checked=!0,t.appendChild(n),de.appendChecked=n.checked,e.innerHTML="<textarea>x</textarea>",de.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue,t.appendChild(e),n=ie.createElement("input"),n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),e.appendChild(n),de.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,de.noCloneEvent=!!e.addEventListener,e[pe.expando]=1,de.attributes=!e.getAttribute(pe.expando)}();var Ke={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:de.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};Ke.optgroup=Ke.option,Ke.tbody=Ke.tfoot=Ke.colgroup=Ke.caption=Ke.thead,Ke.th=Ke.td;var Ue=/<|&#?\w+;/,Qe=/<tbody/i;!function(){var t,n,i=ie.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(de[t]=n in e)||(i.setAttribute(n,"t"),de[t]=i.attributes[n].expando===!1);i=null}();var Xe=/^(?:input|select|textarea)$/i,Je=/^key/,Ve=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ye=/^(?:focusinfocus|focusoutblur)$/,Ge=/^([^.]*)(?:\.(.+)|)/;pe.event={global:{},
		add:function(e,t,n,i,r){var a,o,s,u,c,l,d,f,p,h,m,g=pe._data(e);if(g){for(n.handler&&(u=n,n=u.handler,r=u.selector),n.guid||(n.guid=pe.guid++),(o=g.events)||(o=g.events={}),(l=g.handle)||(l=g.handle=function(e){return"undefined"==typeof pe||e&&pe.event.triggered===e.type?void 0:pe.event.dispatch.apply(l.elem,arguments)},l.elem=e),t=(t||"").match(Ae)||[""],s=t.length;s--;)a=Ge.exec(t[s])||[],p=m=a[1],h=(a[2]||"").split(".").sort(),p&&(c=pe.event.special[p]||{},p=(r?c.delegateType:c.bindType)||p,c=pe.event.special[p]||{},d=pe.extend({type:p,origType:m,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&pe.expr.match.needsContext.test(r),namespace:h.join(".")},u),(f=o[p])||(f=o[p]=[],f.delegateCount=0,c.setup&&c.setup.call(e,i,h,l)!==!1||(e.addEventListener?e.addEventListener(p,l,!1):e.attachEvent&&e.attachEvent("on"+p,l))),c.add&&(c.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),r?f.splice(f.delegateCount++,0,d):f.push(d),pe.event.global[p]=!0);e=null}},remove:function(e,t,n,i,r){var a,o,s,u,c,l,d,f,p,h,m,g=pe.hasData(e)&&pe._data(e);if(g&&(l=g.events)){for(t=(t||"").match(Ae)||[""],c=t.length;c--;)if(s=Ge.exec(t[c])||[],p=m=s[1],h=(s[2]||"").split(".").sort(),p){for(d=pe.event.special[p]||{},p=(i?d.delegateType:d.bindType)||p,f=l[p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=a=f.length;a--;)o=f[a],!r&&m!==o.origType||n&&n.guid!==o.guid||s&&!s.test(o.namespace)||i&&i!==o.selector&&("**"!==i||!o.selector)||(f.splice(a,1),o.selector&&f.delegateCount--,d.remove&&d.remove.call(e,o));u&&!f.length&&(d.teardown&&d.teardown.call(e,h,g.handle)!==!1||pe.removeEvent(e,p,g.handle),delete l[p])}else for(p in l)pe.event.remove(e,p+t[c],n,i,!0);pe.isEmptyObject(l)&&(delete g.handle,pe._removeData(e,"events"))}},trigger:function(t,n,i,r){var a,o,s,u,c,l,d,f=[i||ie],p=le.call(t,"type")?t.type:t,h=le.call(t,"namespace")?t.namespace.split("."):[];if(s=l=i=i||ie,3!==i.nodeType&&8!==i.nodeType&&!Ye.test(p+pe.event.triggered)&&(p.indexOf(".")>-1&&(h=p.split("."),p=h.shift(),h.sort()),o=p.indexOf(":")<0&&"on"+p,t=t[pe.expando]?t:new pe.Event(p,"object"==typeof t&&t),t.isTrigger=r?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:pe.makeArray(n,[t]),c=pe.event.special[p]||{},r||!c.trigger||c.trigger.apply(i,n)!==!1)){if(!r&&!c.noBubble&&!pe.isWindow(i)){for(u=c.delegateType||p,Ye.test(u+p)||(s=s.parentNode);s;s=s.parentNode)f.push(s),l=s;l===(i.ownerDocument||ie)&&f.push(l.defaultView||l.parentWindow||e)}for(d=0;(s=f[d++])&&!t.isPropagationStopped();)t.type=d>1?u:c.bindType||p,a=(pe._data(s,"events")||{})[t.type]&&pe._data(s,"handle"),a&&a.apply(s,n),a=o&&s[o],a&&a.apply&&De(s)&&(t.result=a.apply(s,n),t.result===!1&&t.preventDefault());if(t.type=p,!r&&!t.isDefaultPrevented()&&(!c._default||c._default.apply(f.pop(),n)===!1)&&De(i)&&o&&i[p]&&!pe.isWindow(i)){l=i[o],l&&(i[o]=null),pe.event.triggered=p;try{i[p]()}catch(e){}pe.event.triggered=void 0,l&&(i[o]=l)}return t.result}},dispatch:function(e){e=pe.event.fix(e);var t,n,i,r,a,o=[],s=re.call(arguments),u=(pe._data(this,"events")||{})[e.type]||[],c=pe.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(o=pe.event.handlers.call(this,e,u),t=0;(r=o[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,n=0;(a=r.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(a.namespace)||(e.handleObj=a,e.data=a.data,i=((pe.event.special[a.origType]||{}).handle||a.handler).apply(r.elem,s),void 0!==i&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,r,a,o=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(i=[],n=0;n<s;n++)a=t[n],r=a.selector+" ",void 0===i[r]&&(i[r]=a.needsContext?pe(r,this).index(u)>-1:pe.find(r,this,null,[u]).length),i[r]&&i.push(a);i.length&&o.push({elem:u,handlers:i})}return s<t.length&&o.push({elem:this,handlers:t.slice(s)}),o},fix:function(e){if(e[pe.expando])return e;var t,n,i,r=e.type,a=e,o=this.fixHooks[r];for(o||(this.fixHooks[r]=o=Ve.test(r)?this.mouseHooks:Je.test(r)?this.keyHooks:{}),i=o.props?this.props.concat(o.props):this.props,e=new pe.Event(a),t=i.length;t--;)n=i[t],e[n]=a[n];return e.target||(e.target=a.srcElement||ie),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,o.filter?o.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,a=t.button,o=t.fromElement;return null==e.pageX&&null!=t.clientX&&(i=e.target.ownerDocument||ie,r=i.documentElement,n=i.body,e.pageX=t.clientX+(r&&r.scrollLeft||n&&n.scrollLeft||0)-(r&&r.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||n&&n.scrollTop||0)-(r&&r.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&o&&(e.relatedTarget=o===e.target?t.toElement:o),e.which||void 0===a||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==w()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===w()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(pe.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return pe.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n){var i=pe.extend(new pe.Event,n,{type:e,isSimulated:!0});pe.event.trigger(i,null,t),i.isDefaultPrevented()&&n.preventDefault()}},pe.removeEvent=ie.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)}:function(e,t,n){var i="on"+t;e.detachEvent&&("undefined"==typeof e[i]&&(e[i]=null),e.detachEvent(i,n))},pe.Event=function(e,t){return this instanceof pe.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?v:b):this.type=e,t&&pe.extend(this,t),this.timeStamp=e&&e.timeStamp||pe.now(),void(this[pe.expando]=!0)):new pe.Event(e,t)},pe.Event.prototype={constructor:pe.Event,isDefaultPrevented:b,isPropagationStopped:b,isImmediatePropagationStopped:b,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=v,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=v,e&&!this.isSimulated&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=v,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},pe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){pe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,a=e.handleObj;return r&&(r===i||pe.contains(i,r))||(e.type=a.origType,n=a.handler.apply(this,arguments),e.type=t),n}}}),de.submit||(pe.event.special.submit={setup:function(){return!pe.nodeName(this,"form")&&void pe.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=pe.nodeName(t,"input")||pe.nodeName(t,"button")?pe.prop(t,"form"):void 0;n&&!pe._data(n,"submit")&&(pe.event.add(n,"submit._submit",function(e){e._submitBubble=!0}),pe._data(n,"submit",!0))})},postDispatch:function(e){e._submitBubble&&(delete e._submitBubble,this.parentNode&&!e.isTrigger&&pe.event.simulate("submit",this.parentNode,e))},teardown:function(){return!pe.nodeName(this,"form")&&void pe.event.remove(this,"._submit")}}),de.change||(pe.event.special.change={setup:function(){return Xe.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(pe.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._justChanged=!0)}),pe.event.add(this,"click._change",function(e){this._justChanged&&!e.isTrigger&&(this._justChanged=!1),pe.event.simulate("change",this,e)})),!1):void pe.event.add(this,"beforeactivate._change",function(e){var t=e.target;Xe.test(t.nodeName)&&!pe._data(t,"change")&&(pe.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||pe.event.simulate("change",this.parentNode,e)}),pe._data(t,"change",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return pe.event.remove(this,"._change"),!Xe.test(this.nodeName)}}),de.focusin||pe.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){pe.event.simulate(t,e.target,pe.event.fix(e))};pe.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=pe._data(i,t);r||i.addEventListener(e,n,!0),pe._data(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=pe._data(i,t)-1;r?pe._data(i,t,r):(i.removeEventListener(e,n,!0),pe._removeData(i,t))}}}),pe.fn.extend({on:function(e,t,n,i){return x(this,e,t,n,i)},one:function(e,t,n,i){return x(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,pe(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=b),this.each(function(){pe.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){pe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return pe.event.trigger(e,t,n,!0)}});var Ze=/ jQuery\d+="(?:null|\d+)"/g,et=new RegExp("<(?:"+Be+")[\\s/>]","i"),tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,nt=/<script|<style|<link/i,it=/checked\s*(?:[^=]|=\s*.checked.)/i,rt=/^true\/(.*)/,at=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ot=p(ie),st=ot.appendChild(ie.createElement("div"));pe.extend({htmlPrefilter:function(e){return e.replace(tt,"<$1></$2>")},clone:function(e,t,n){var i,r,a,o,s,u=pe.contains(e.ownerDocument,e);if(de.html5Clone||pe.isXMLDoc(e)||!et.test("<"+e.nodeName+">")?a=e.cloneNode(!0):(st.innerHTML=e.outerHTML,st.removeChild(a=st.firstChild)),!(de.noCloneEvent&&de.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||pe.isXMLDoc(e)))for(i=h(a),s=h(e),o=0;null!=(r=s[o]);++o)i[o]&&j(r,i[o]);if(t)if(n)for(s=s||h(e),i=i||h(a),o=0;null!=(r=s[o]);o++)T(r,i[o]);else T(e,a);return i=h(a,"script"),i.length>0&&m(i,!u&&h(e,"script")),i=s=r=null,a},cleanData:function(e,t){for(var n,i,r,a,o=0,s=pe.expando,u=pe.cache,c=de.attributes,l=pe.event.special;null!=(n=e[o]);o++)if((t||De(n))&&(r=n[s],a=r&&u[r])){if(a.events)for(i in a.events)l[i]?pe.event.remove(n,i):pe.removeEvent(n,i,a.handle);u[r]&&(delete u[r],c||"undefined"==typeof n.removeAttribute?n[s]=void 0:n.removeAttribute(s),ne.push(r))}}}),pe.fn.extend({domManip:_,detach:function(e){return $(this,e,!0)},remove:function(e){return $(this,e)},text:function(e){return Fe(this,function(e){return void 0===e?pe.text(this):this.empty().append((this[0]&&this[0].ownerDocument||ie).createTextNode(e))},null,e,arguments.length)},append:function(){return _(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=k(this,e);t.appendChild(e)}})},prepend:function(){return _(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=k(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return _(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return _(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&pe.cleanData(h(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&pe.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return pe.clone(this,e,t)})},html:function(e){return Fe(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(Ze,""):void 0;if("string"==typeof e&&!nt.test(e)&&(de.htmlSerialize||!et.test(e))&&(de.leadingWhitespace||!We.test(e))&&!Ke[(Pe.exec(e)||["",""])[1].toLowerCase()]){e=pe.htmlPrefilter(e);try{for(;n<i;n++)t=this[n]||{},1===t.nodeType&&(pe.cleanData(h(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return _(this,arguments,function(t){var n=this.parentNode;pe.inArray(this,e)<0&&(pe.cleanData(h(this)),n&&n.replaceChild(t,this))},e)}}),pe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){pe.fn[e]=function(e){for(var n,i=0,r=[],a=pe(e),o=a.length-1;i<=o;i++)n=i===o?this:this.clone(!0),pe(a[i])[t](n),oe.apply(r,n.get());return this.pushStack(r)}});var ut,ct={HTML:"block",BODY:"block"},lt=/^margin/,dt=new RegExp("^("+Ie+")(?!px)[a-z%]+$","i"),ft=function(e,t,n,i){var r,a,o={};for(a in t)o[a]=e.style[a],e.style[a]=t[a];r=n.apply(e,i||[]);for(a in t)e.style[a]=o[a];return r},pt=ie.documentElement;!function(){function t(){var t,l,d=ie.documentElement;d.appendChild(u),c.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",n=r=s=!1,i=o=!0,e.getComputedStyle&&(l=e.getComputedStyle(c),n="1%"!==(l||{}).top,s="2px"===(l||{}).marginLeft,r="4px"===(l||{width:"4px"}).width,c.style.marginRight="50%",i="4px"===(l||{marginRight:"4px"}).marginRight,t=c.appendChild(ie.createElement("div")),
		t.style.cssText=c.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",t.style.marginRight=t.style.width="0",c.style.width="1px",o=!parseFloat((e.getComputedStyle(t)||{}).marginRight),c.removeChild(t)),c.style.display="none",a=0===c.getClientRects().length,a&&(c.style.display="",c.innerHTML="<table><tr><td></td><td>t</td></tr></table>",c.childNodes[0].style.borderCollapse="separate",t=c.getElementsByTagName("td"),
t[0].style.cssText="margin:0;border:0;padding:0;display:none",a=0===t[0].offsetHeight,a&&(t[0].style.display="",t[1].style.display="none",a=0===t[0].offsetHeight)),d.removeChild(u)}var n,i,r,a,o,s,u=ie.createElement("div"),c=ie.createElement("div");c.style&&(c.style.cssText="float:left;opacity:.5",de.opacity="0.5"===c.style.opacity,de.cssFloat=!!c.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",de.clearCloneStyle="content-box"===c.style.backgroundClip,u=ie.createElement("div"),u.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",c.innerHTML="",u.appendChild(c),de.boxSizing=""===c.style.boxSizing||""===c.style.MozBoxSizing||""===c.style.WebkitBoxSizing,pe.extend(de,{reliableHiddenOffsets:function(){return null==n&&t(),a},boxSizingReliable:function(){return null==n&&t(),r},pixelMarginRight:function(){return null==n&&t(),i},pixelPosition:function(){return null==n&&t(),n},reliableMarginRight:function(){return null==n&&t(),o},reliableMarginLeft:function(){return null==n&&t(),s}}))}();var ht,mt,gt=/^(top|right|bottom|left)$/;e.getComputedStyle?(ht=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},mt=function(e,t,n){var i,r,a,o,s=e.style;return n=n||ht(e),o=n?n.getPropertyValue(t)||n[t]:void 0,""!==o&&void 0!==o||pe.contains(e.ownerDocument,e)||(o=pe.style(e,t)),n&&!de.pixelMarginRight()&&dt.test(o)&&lt.test(t)&&(i=s.width,r=s.minWidth,a=s.maxWidth,s.minWidth=s.maxWidth=s.width=o,o=n.width,s.width=i,s.minWidth=r,s.maxWidth=a),void 0===o?o:o+""}):pt.currentStyle&&(ht=function(e){return e.currentStyle},mt=function(e,t,n){var i,r,a,o,s=e.style;return n=n||ht(e),o=n?n[t]:void 0,null==o&&s&&s[t]&&(o=s[t]),dt.test(o)&&!gt.test(t)&&(i=s.left,r=e.runtimeStyle,a=r&&r.left,a&&(r.left=e.currentStyle.left),s.left="fontSize"===t?"1em":o,o=s.pixelLeft+"px",s.left=i,a&&(r.left=a)),void 0===o?o:o+""||"auto"});var yt=/alpha\([^)]*\)/i,vt=/opacity\s*=\s*([^)]*)/i,bt=/^(none|table(?!-c[ea]).+)/,wt=new RegExp("^("+Ie+")(.*)$","i"),xt={position:"absolute",visibility:"hidden",display:"block"},kt={letterSpacing:"0",fontWeight:"400"},St=["Webkit","O","Moz","ms"],Ct=ie.createElement("div").style;pe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=mt(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":de.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,a,o,s=pe.camelCase(t),u=e.style;if(t=pe.cssProps[s]||(pe.cssProps[s]=D(s)||s),o=pe.cssHooks[t]||pe.cssHooks[s],void 0===n)return o&&"get"in o&&void 0!==(r=o.get(e,!1,i))?r:u[t];if(a=typeof n,"string"===a&&(r=qe.exec(n))&&r[1]&&(n=f(e,t,r),a="number"),null!=n&&n===n&&("number"===a&&(n+=r&&r[3]||(pe.cssNumber[s]?"":"px")),de.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),!(o&&"set"in o&&void 0===(n=o.set(e,n,i)))))try{u[t]=n}catch(e){}}},css:function(e,t,n,i){var r,a,o,s=pe.camelCase(t);return t=pe.cssProps[s]||(pe.cssProps[s]=D(s)||s),o=pe.cssHooks[t]||pe.cssHooks[s],o&&"get"in o&&(a=o.get(e,!0,n)),void 0===a&&(a=mt(e,t,i)),"normal"===a&&t in kt&&(a=kt[t]),""===n||n?(r=parseFloat(a),n===!0||isFinite(r)?r||0:a):a}}),pe.each(["height","width"],function(e,t){pe.cssHooks[t]={get:function(e,n,i){if(n)return bt.test(pe.css(e,"display"))&&0===e.offsetWidth?ft(e,xt,function(){return q(e,t,i)}):q(e,t,i)},set:function(e,n,i){var r=i&&ht(e);return R(e,n,i?I(e,t,i,de.boxSizing&&"border-box"===pe.css(e,"boxSizing",!1,r),r):0)}}}),de.opacity||(pe.cssHooks.opacity={get:function(e,t){return vt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,i=e.currentStyle,r=pe.isNumeric(t)?"alpha(opacity="+100*t+")":"",a=i&&i.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===pe.trim(a.replace(yt,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||i&&!i.filter)||(n.filter=yt.test(a)?a.replace(yt,r):a+" "+r)}}),pe.cssHooks.marginRight=N(de.reliableMarginRight,function(e,t){if(t)return ft(e,{display:"inline-block"},mt,[e,"marginRight"])}),pe.cssHooks.marginLeft=N(de.reliableMarginLeft,function(e,t){if(t)return(parseFloat(mt(e,"marginLeft"))||(pe.contains(e.ownerDocument,e)?e.getBoundingClientRect().left-ft(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}):0))+"px"}),pe.each({margin:"",padding:"",border:"Width"},function(e,t){pe.cssHooks[e+t]={expand:function(n){for(var i=0,r={},a="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+He[i]+t]=a[i]||a[i-2]||a[0];return r}},lt.test(e)||(pe.cssHooks[e+t].set=R)}),pe.fn.extend({css:function(e,t){return Fe(this,function(e,t,n){var i,r,a={},o=0;if(pe.isArray(t)){for(i=ht(e),r=t.length;o<r;o++)a[t[o]]=pe.css(e,t[o],!1,i);return a}return void 0!==n?pe.style(e,t,n):pe.css(e,t)},e,t,arguments.length>1)},show:function(){return L(this,!0)},hide:function(){return L(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Me(this)?pe(this).show():pe(this).hide()})}}),pe.Tween=H,H.prototype={constructor:H,init:function(e,t,n,i,r,a){this.elem=e,this.prop=n,this.easing=r||pe.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=a||(pe.cssNumber[n]?"":"px")},cur:function(){var e=H.propHooks[this.prop];return e&&e.get?e.get(this):H.propHooks._default.get(this)},run:function(e){var t,n=H.propHooks[this.prop];return this.options.duration?this.pos=t=pe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):H.propHooks._default.set(this),this}},H.prototype.init.prototype=H.prototype,H.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=pe.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){pe.fx.step[e.prop]?pe.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[pe.cssProps[e.prop]]&&!pe.cssHooks[e.prop]?e.elem[e.prop]=e.now:pe.style(e.elem,e.prop,e.now+e.unit)}}},H.propHooks.scrollTop=H.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},pe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},pe.fx=H.prototype.init,pe.fx.step={};var Tt,jt,_t=/^(?:toggle|show|hide)$/,$t=/queueHooks$/;pe.Animation=pe.extend(W,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return f(n.elem,e,qe.exec(t),n),n}]},tweener:function(e,t){pe.isFunction(e)?(t=e,e=["*"]):e=e.match(Ae);for(var n,i=0,r=e.length;i<r;i++)n=e[i],W.tweeners[n]=W.tweeners[n]||[],W.tweeners[n].unshift(t)},prefilters:[P],prefilter:function(e,t){t?W.prefilters.unshift(e):W.prefilters.push(e)}}),pe.speed=function(e,t,n){var i=e&&"object"==typeof e?pe.extend({},e):{complete:n||!n&&t||pe.isFunction(e)&&e,duration:e,easing:n&&t||t&&!pe.isFunction(t)&&t};return i.duration=pe.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in pe.fx.speeds?pe.fx.speeds[i.duration]:pe.fx.speeds._default,null!=i.queue&&i.queue!==!0||(i.queue="fx"),i.old=i.complete,i.complete=function(){pe.isFunction(i.old)&&i.old.call(this),i.queue&&pe.dequeue(this,i.queue)},i},pe.fn.extend({fadeTo:function(e,t,n,i){return this.filter(Me).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=pe.isEmptyObject(e),a=pe.speed(t,n,i),o=function(){var t=W(this,pe.extend({},e),a);(r||pe._data(this,"finish"))&&t.stop(!0)};return o.finish=o,r||a.queue===!1?this.each(o):this.queue(a.queue,o)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",a=pe.timers,o=pe._data(this);if(r)o[r]&&o[r].stop&&i(o[r]);else for(r in o)o[r]&&o[r].stop&&$t.test(r)&&i(o[r]);for(r=a.length;r--;)a[r].elem!==this||null!=e&&a[r].queue!==e||(a[r].anim.stop(n),t=!1,a.splice(r,1));!t&&n||pe.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=pe._data(this),i=n[e+"queue"],r=n[e+"queueHooks"],a=pe.timers,o=i?i.length:0;for(n.finish=!0,pe.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=a.length;t--;)a[t].elem===this&&a[t].queue===e&&(a[t].anim.stop(!0),a.splice(t,1));for(t=0;t<o;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish})}}),pe.each(["toggle","show","hide"],function(e,t){var n=pe.fn[t];pe.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(F(t,!0),e,i,r)}}),pe.each({slideDown:F("show"),slideUp:F("hide"),slideToggle:F("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){pe.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),pe.timers=[],pe.fx.tick=function(){var e,t=pe.timers,n=0;for(Tt=pe.now();n<t.length;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||pe.fx.stop(),Tt=void 0},pe.fx.timer=function(e){pe.timers.push(e),e()?pe.fx.start():pe.timers.pop()},pe.fx.interval=13,pe.fx.start=function(){jt||(jt=e.setInterval(pe.fx.tick,pe.fx.interval))},pe.fx.stop=function(){e.clearInterval(jt),jt=null},pe.fx.speeds={slow:600,fast:200,_default:400},pe.fn.delay=function(t,n){return t=pe.fx?pe.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,i){var r=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(r)}})},function(){var e,t=ie.createElement("input"),n=ie.createElement("div"),i=ie.createElement("select"),r=i.appendChild(ie.createElement("option"));n=ie.createElement("div"),n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=n.getElementsByTagName("a")[0],t.setAttribute("type","checkbox"),n.appendChild(t),e=n.getElementsByTagName("a")[0],e.style.cssText="top:1px",de.getSetAttribute="t"!==n.className,de.style=/top/.test(e.getAttribute("style")),de.hrefNormalized="/a"===e.getAttribute("href"),de.checkOn=!!t.value,de.optSelected=r.selected,de.enctype=!!ie.createElement("form").enctype,i.disabled=!0,de.optDisabled=!r.disabled,t=ie.createElement("input"),t.setAttribute("value",""),de.input=""===t.getAttribute("value"),t.value="t",t.setAttribute("type","radio"),de.radioValue="t"===t.value}();var At=/\r/g,Et=/[\x20\t\r\n\f]+/g;pe.fn.extend({val:function(e){var t,n,i,r=this[0];{if(arguments.length)return i=pe.isFunction(e),this.each(function(n){var r;1===this.nodeType&&(r=i?e.call(this,n,pe(this).val()):e,null==r?r="":"number"==typeof r?r+="":pe.isArray(r)&&(r=pe.map(r,function(e){return null==e?"":e+""})),t=pe.valHooks[this.type]||pe.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))});if(r)return t=pe.valHooks[r.type]||pe.valHooks[r.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(At,""):null==n?"":n)}}}),pe.extend({valHooks:{option:{get:function(e){var t=pe.find.attr(e,"value");return null!=t?t:pe.trim(pe.text(e)).replace(Et," ")}},select:{get:function(e){for(var t,n,i=e.options,r=e.selectedIndex,a="select-one"===e.type||r<0,o=a?null:[],s=a?r+1:i.length,u=r<0?s:a?r:0;u<s;u++)if(n=i[u],(n.selected||u===r)&&(de.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!pe.nodeName(n.parentNode,"optgroup"))){if(t=pe(n).val(),a)return t;o.push(t)}return o},set:function(e,t){for(var n,i,r=e.options,a=pe.makeArray(t),o=r.length;o--;)if(i=r[o],pe.inArray(pe.valHooks.option.get(i),a)>-1)try{i.selected=n=!0}catch(e){i.scrollHeight}else i.selected=!1;return n||(e.selectedIndex=-1),r}}}}),pe.each(["radio","checkbox"],function(){pe.valHooks[this]={set:function(e,t){if(pe.isArray(t))return e.checked=pe.inArray(pe(e).val(),t)>-1}},de.checkOn||(pe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Nt,Dt,Lt=pe.expr.attrHandle,Rt=/^(?:checked|selected)$/i,It=de.getSetAttribute,qt=de.input;pe.fn.extend({attr:function(e,t){return Fe(this,pe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){pe.removeAttr(this,e)})}}),pe.extend({attr:function(e,t,n){var i,r,a=e.nodeType;if(3!==a&&8!==a&&2!==a)return"undefined"==typeof e.getAttribute?pe.prop(e,t,n):(1===a&&pe.isXMLDoc(e)||(t=t.toLowerCase(),r=pe.attrHooks[t]||(pe.expr.match.bool.test(t)?Dt:Nt)),void 0!==n?null===n?void pe.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=pe.find.attr(e,t),null==i?void 0:i))},attrHooks:{type:{set:function(e,t){if(!de.radioValue&&"radio"===t&&pe.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i,r=0,a=t&&t.match(Ae);if(a&&1===e.nodeType)for(;n=a[r++];)i=pe.propFix[n]||n,pe.expr.match.bool.test(n)?qt&&It||!Rt.test(n)?e[i]=!1:e[pe.camelCase("default-"+n)]=e[i]=!1:pe.attr(e,n,""),e.removeAttribute(It?n:i)}}),Dt={set:function(e,t,n){return t===!1?pe.removeAttr(e,n):qt&&It||!Rt.test(n)?e.setAttribute(!It&&pe.propFix[n]||n,n):e[pe.camelCase("default-"+n)]=e[n]=!0,n}},pe.each(pe.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Lt[t]||pe.find.attr;qt&&It||!Rt.test(t)?Lt[t]=function(e,t,i){var r,a;return i||(a=Lt[t],Lt[t]=r,r=null!=n(e,t,i)?t.toLowerCase():null,Lt[t]=a),r}:Lt[t]=function(e,t,n){if(!n)return e[pe.camelCase("default-"+t)]?t.toLowerCase():null}}),qt&&It||(pe.attrHooks.value={set:function(e,t,n){return pe.nodeName(e,"input")?void(e.defaultValue=t):Nt&&Nt.set(e,t,n)}}),It||(Nt={set:function(e,t,n){var i=e.getAttributeNode(n);if(i||e.setAttributeNode(i=e.ownerDocument.createAttribute(n)),i.value=t+="","value"===n||t===e.getAttribute(n))return t}},Lt.id=Lt.name=Lt.coords=function(e,t,n){var i;if(!n)return(i=e.getAttributeNode(t))&&""!==i.value?i.value:null},pe.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:Nt.set},pe.attrHooks.contenteditable={set:function(e,t,n){Nt.set(e,""!==t&&t,n)}},pe.each(["width","height"],function(e,t){pe.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}})),de.style||(pe.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var Ht=/^(?:input|select|textarea|button|object)$/i,Mt=/^(?:a|area)$/i;pe.fn.extend({prop:function(e,t){return Fe(this,pe.prop,e,t,arguments.length>1)},removeProp:function(e){return e=pe.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(e){}})}}),pe.extend({prop:function(e,t,n){var i,r,a=e.nodeType;if(3!==a&&8!==a&&2!==a)return 1===a&&pe.isXMLDoc(e)||(t=pe.propFix[t]||t,r=pe.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=pe.find.attr(e,"tabindex");return t?parseInt(t,10):Ht.test(e.nodeName)||Mt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),de.hrefNormalized||pe.each(["href","src"],function(e,t){pe.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),de.optSelected||(pe.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),pe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){pe.propFix[this.toLowerCase()]=this}),de.enctype||(pe.propFix.enctype="encoding");var Ft=/[\t\r\n\f]/g;pe.fn.extend({addClass:function(e){var t,n,i,r,a,o,s,u=0;if(pe.isFunction(e))return this.each(function(t){pe(this).addClass(e.call(this,t,B(this)))});if("string"==typeof e&&e)for(t=e.match(Ae)||[];n=this[u++];)if(r=B(n),i=1===n.nodeType&&(" "+r+" ").replace(Ft," ")){for(o=0;a=t[o++];)i.indexOf(" "+a+" ")<0&&(i+=a+" ");s=pe.trim(i),r!==s&&pe.attr(n,"class",s)}return this},removeClass:function(e){var t,n,i,r,a,o,s,u=0;if(pe.isFunction(e))return this.each(function(t){pe(this).removeClass(e.call(this,t,B(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(Ae)||[];n=this[u++];)if(r=B(n),i=1===n.nodeType&&(" "+r+" ").replace(Ft," ")){for(o=0;a=t[o++];)for(;i.indexOf(" "+a+" ")>-1;)i=i.replace(" "+a+" "," ");s=pe.trim(i),r!==s&&pe.attr(n,"class",s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):pe.isFunction(e)?this.each(function(n){pe(this).toggleClass(e.call(this,n,B(this),t),t)}):this.each(function(){var t,i,r,a;if("string"===n)for(i=0,r=pe(this),a=e.match(Ae)||[];t=a[i++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else void 0!==e&&"boolean"!==n||(t=B(this),t&&pe._data(this,"__className__",t),pe.attr(this,"class",t||e===!1?"":pe._data(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+B(n)+" ").replace(Ft," ").indexOf(t)>-1)return!0;return!1}}),pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){pe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),pe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});var Ot=e.location,Pt=pe.now(),zt=/\?/,Wt=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;pe.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,i=null,r=pe.trim(t+"");return r&&!pe.trim(r.replace(Wt,function(e,t,r,a){return n&&t&&(i=0),0===i?e:(n=r||t,i+=!a-!r,"")}))?Function("return "+r)():pe.error("Invalid JSON: "+t)},pe.parseXML=function(t){var n,i;if(!t||"string"!=typeof t)return null;try{e.DOMParser?(i=new e.DOMParser,n=i.parseFromString(t,"text/xml")):(n=new e.ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(t))}catch(e){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||pe.error("Invalid XML: "+t),n};var Bt=/#.*$/,Kt=/([?&])_=[^&]*/,Ut=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Qt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Xt=/^(?:GET|HEAD)$/,Jt=/^\/\//,Vt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Yt={},Gt={},Zt="*/".concat("*"),en=Ot.href,tn=Vt.exec(en.toLowerCase())||[];pe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:en,type:"GET",isLocal:Qt.test(tn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":pe.parseJSON,"text xml":pe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Q(Q(e,pe.ajaxSettings),t):Q(pe.ajaxSettings,e)},ajaxPrefilter:K(Yt),ajaxTransport:K(Gt),ajax:function(t,n){function i(t,n,i,r){var a,d,v,b,x,S=n;2!==w&&(w=2,u&&e.clearTimeout(u),l=void 0,s=r||"",k.readyState=t>0?4:0,a=t>=200&&t<300||304===t,i&&(b=X(f,k,i)),b=J(f,b,k,a),a?(f.ifModified&&(x=k.getResponseHeader("Last-Modified"),x&&(pe.lastModified[o]=x),x=k.getResponseHeader("etag"),x&&(pe.etag[o]=x)),204===t||"HEAD"===f.type?S="nocontent":304===t?S="notmodified":(S=b.state,d=b.data,v=b.error,a=!v)):(v=S,!t&&S||(S="error",t<0&&(t=0))),k.status=t,k.statusText=(n||S)+"",a?m.resolveWith(p,[d,S,k]):m.rejectWith(p,[k,S,v]),k.statusCode(y),y=void 0,c&&h.trigger(a?"ajaxSuccess":"ajaxError",[k,f,a?d:v]),g.fireWith(p,[k,S]),c&&(h.trigger("ajaxComplete",[k,f]),--pe.active||pe.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var r,a,o,s,u,c,l,d,f=pe.ajaxSetup({},n),p=f.context||f,h=f.context&&(p.nodeType||p.jquery)?pe(p):pe.event,m=pe.Deferred(),g=pe.Callbacks("once memory"),y=f.statusCode||{},v={},b={},w=0,x="canceled",k={readyState:0,getResponseHeader:function(e){var t;if(2===w){if(!d)for(d={};t=Ut.exec(s);)d[t[1].toLowerCase()]=t[2];t=d[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===w?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return w||(e=b[n]=b[n]||e,v[e]=t),this},overrideMimeType:function(e){return w||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(w<2)for(t in e)y[t]=[y[t],e[t]];else k.always(e[k.status]);return this},abort:function(e){var t=e||x;return l&&l.abort(t),i(0,t),this}};if(m.promise(k).complete=g.add,k.success=k.done,k.error=k.fail,f.url=((t||f.url||en)+"").replace(Bt,"").replace(Jt,tn[1]+"//"),f.type=n.method||n.type||f.method||f.type,f.dataTypes=pe.trim(f.dataType||"*").toLowerCase().match(Ae)||[""],null==f.crossDomain&&(r=Vt.exec(f.url.toLowerCase()),f.crossDomain=!(!r||r[1]===tn[1]&&r[2]===tn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(tn[3]||("http:"===tn[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=pe.param(f.data,f.traditional)),U(Yt,f,n,k),2===w)return k;c=pe.event&&f.global,c&&0===pe.active++&&pe.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Xt.test(f.type),o=f.url,f.hasContent||(f.data&&(o=f.url+=(zt.test(o)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=Kt.test(o)?o.replace(Kt,"$1_="+Pt++):o+(zt.test(o)?"&":"?")+"_="+Pt++)),f.ifModified&&(pe.lastModified[o]&&k.setRequestHeader("If-Modified-Since",pe.lastModified[o]),pe.etag[o]&&k.setRequestHeader("If-None-Match",pe.etag[o])),(f.data&&f.hasContent&&f.contentType!==!1||n.contentType)&&k.setRequestHeader("Content-Type",f.contentType),k.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Zt+"; q=0.01":""):f.accepts["*"]);for(a in f.headers)k.setRequestHeader(a,f.headers[a]);if(f.beforeSend&&(f.beforeSend.call(p,k,f)===!1||2===w))return k.abort();x="abort";for(a in{success:1,error:1,complete:1})k[a](f[a]);if(l=U(Gt,f,n,k)){if(k.readyState=1,c&&h.trigger("ajaxSend",[k,f]),2===w)return k;f.async&&f.timeout>0&&(u=e.setTimeout(function(){k.abort("timeout")},f.timeout));try{w=1,l.send(v,i)}catch(e){if(!(w<2))throw e;i(-1,e)}}else i(-1,"No Transport");return k},getJSON:function(e,t,n){return pe.get(e,t,n,"json")},getScript:function(e,t){return pe.get(e,void 0,t,"script")}}),pe.each(["get","post"],function(e,t){pe[t]=function(e,n,i,r){return pe.isFunction(n)&&(r=r||i,i=n,n=void 0),pe.ajax(pe.extend({url:e,type:t,dataType:r,data:n,success:i},pe.isPlainObject(e)&&e))}
}),
pe._evalUrl=function(e){return pe.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},pe.fn.extend({wrapAll:function(e){if(pe.isFunction(e))return this.each(function(t){pe(this).wrapAll(e.call(this,t))});if(this[0]){var t=pe(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return pe.isFunction(e)?this.each(function(t){pe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=pe(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})
	},
wrap:function(e){var t=pe.isFunction(e);return this.each(function(n){pe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){pe.nodeName(this,"body")||pe(this).replaceWith(this.childNodes)}).end()}}),pe.expr.filters.hidden=function(e){return de.reliableHiddenOffsets()?e.offsetWidth<=0&&e.offsetHeight<=0&&!e.getClientRects().length:Y(e)
	},
pe.expr.filters.visible=function(e){return!pe.expr.filters.hidden(e)};var nn=/%20/g,rn=/\[\]$/,an=/\r?\n/g,on=/^(?:submit|button|image|reset|file)$/i,sn=/^(?:input|select|textarea|keygen)/i;pe.param=function(e,t){var n,i=[],r=function(e,t){t=pe.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=pe.ajaxSettings&&pe.ajaxSettings.traditional),pe.isArray(e)||e.jquery&&!pe.isPlainObject(e))pe.each(e,function(){r(this.name,this.value)});else for(n in e)G(n,e[n],t,r);return i.join("&").replace(nn,"+")},pe.fn.extend({serialize:function(){return pe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=pe.prop(this,"elements");return e?pe.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!pe(this).is(":disabled")&&sn.test(this.nodeName)&&!on.test(e)&&(this.checked||!Oe.test(e))}).map(function(e,t){var n=pe(this).val();return null==n?null:pe.isArray(n)?pe.map(n,function(e){return{name:t.name,value:e.replace(an,"\r\n")}}):{name:t.name,value:n.replace(an,"\r\n")}}).get()}}),pe.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return this.isLocal?ee():ie.documentMode>8?Z():/^(get|post|head|put|delete|options)$/i.test(this.type)&&Z()||ee()}:Z;var un=0,cn={},ln=pe.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in cn)cn[e](void 0,!0)}),de.cors=!!ln&&"withCredentials"in ln,ln=de.ajax=!!ln,ln&&pe.ajaxTransport(function(t){if(!t.crossDomain||de.cors){var n;return{send:function(i,r){var a,o=t.xhr(),s=++un;if(o.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)o[a]=t.xhrFields[a];t.mimeType&&o.overrideMimeType&&o.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)void 0!==i[a]&&o.setRequestHeader(a,i[a]+"");o.send(t.hasContent&&t.data||null),n=function(e,i){var a,u,c;if(n&&(i||4===o.readyState))if(delete cn[s],n=void 0,o.onreadystatechange=pe.noop,i)4!==o.readyState&&o.abort();else{c={},a=o.status,"string"==typeof o.responseText&&(c.text=o.responseText);try{u=o.statusText}catch(e){u=""}a||!t.isLocal||t.crossDomain?1223===a&&(a=204):a=c.text?200:404}c&&r(a,u,c,o.getAllResponseHeaders())},t.async?4===o.readyState?e.setTimeout(n):o.onreadystatechange=cn[s]=n:n()},abort:function(){n&&n(void 0,!0)}}}}),pe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return pe.globalEval(e),e}
}
}),pe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),pe.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=ie.head||pe("head")[0]||ie.documentElement;return{send:function(i,r){t=ie.createElement("script"),t.async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||r(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var dn=[],fn=/(=)\?(?=&|$)|\?\?/;pe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=dn.pop()||pe.expando+"_"+Pt++;return this[e]=!0,e}}),pe.ajaxPrefilter("json jsonp",function(t,n,i){var r,a,o,s=t.jsonp!==!1&&(fn.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&fn.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return r=t.jsonpCallback=pe.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(fn,"$1"+r):t.jsonp!==!1&&(t.url+=(zt.test(t.url)?"&":"?")+t.jsonp+"="+r),t.converters["script json"]=function(){return o||pe.error(r+" was not called"),o[0]},t.dataTypes[0]="json",a=e[r],e[r]=function(){o=arguments},i.always(function(){void 0===a?pe(e).removeProp(r):e[r]=a,t[r]&&(t.jsonpCallback=n.jsonpCallback,dn.push(r)),o&&pe.isFunction(a)&&a(o[0]),o=a=void 0}),"script"}),pe.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||ie;var i=ke.exec(e),r=!n&&[];return i?[t.createElement(i[1])]:(i=y([e],t,r),r&&r.length&&pe(r).remove(),pe.merge([],i.childNodes))};var pn=pe.fn.load;pe.fn.load=function(e,t,n){if("string"!=typeof e&&pn)return pn.apply(this,arguments);var i,r,a,o=this,s=e.indexOf(" ");return s>-1&&(i=pe.trim(e.slice(s,e.length)),e=e.slice(0,s)),pe.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),o.length>0&&pe.ajax({url:e,type:r||"GET",dataType:"html",data:t}).done(function(e){a=arguments,o.html(i?pe("<div>").append(pe.parseHTML(e)).find(i):e)}).always(n&&function(e,t){o.each(function(){n.apply(this,a||[e.responseText,t,e])})}),this},pe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){pe.fn[t]=function(e){return this.on(t,e)}}),pe.expr.filters.animated=function(e){return pe.grep(pe.timers,function(t){return e===t.elem}).length},pe.offset={setOffset:function(e,t,n){var i,r,a,o,s,u,c,l=pe.css(e,"position"),d=pe(e),f={};"static"===l&&(e.style.position="relative"),s=d.offset(),a=pe.css(e,"top"),u=pe.css(e,"left"),c=("absolute"===l||"fixed"===l)&&pe.inArray("auto",[a,u])>-1,c?(i=d.position(),o=i.top,r=i.left):(o=parseFloat(a)||0,r=parseFloat(u)||0),pe.isFunction(t)&&(t=t.call(e,n,pe.extend({},s))),null!=t.top&&(f.top=t.top-s.top+o),null!=t.left&&(f.left=t.left-s.left+r),"using"in t?t.using.call(e,f):d.css(f)}},pe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){pe.offset.setOffset(this,e,t)});var t,n,i={top:0,left:0},r=this[0],a=r&&r.ownerDocument;if(a)return t=a.documentElement,pe.contains(t,r)?("undefined"!=typeof r.getBoundingClientRect&&(i=r.getBoundingClientRect()),n=te(a),{top:i.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:i.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):i},position:function(){if(this[0]){var e,t,n={top:0,left:0},i=this[0];return"fixed"===pe.css(i,"position")?t=i.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),pe.nodeName(e[0],"html")||(n=e.offset()),n.top+=pe.css(e[0],"borderTopWidth",!0),n.left+=pe.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-pe.css(i,"marginTop",!0),left:t.left-n.left-pe.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&!pe.nodeName(e,"html")&&"static"===pe.css(e,"position");)e=e.offsetParent;return e||pt})}}),pe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);pe.fn[e]=function(i){return Fe(this,function(e,i,r){var a=te(e);return void 0===r?a?t in a?a[t]:a.document.documentElement[i]:e[i]:void(a?a.scrollTo(n?pe(a).scrollLeft():r,n?r:pe(a).scrollTop()):e[i]=r)},e,i,arguments.length,null)}}),pe.each(["top","left"],function(e,t){pe.cssHooks[t]=N(de.pixelPosition,function(e,n){if(n)return n=mt(e,t),dt.test(n)?pe(e).position()[t]+"px":n})}),pe.each({Height:"height",Width:"width"},function(e,t){pe.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){pe.fn[i]=function(i,r){var a=arguments.length&&(n||"boolean"!=typeof i),o=n||(i===!0||r===!0?"margin":"border");return Fe(this,function(t,n,i){var r;return pe.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===i?pe.css(t,n,o):pe.style(t,n,i,o)},t,a?i:void 0,a,null)}})}),pe.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),pe.fn.size=function(){return this.length},pe.fn.andSelf=pe.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return pe});var hn=e.jQuery,mn=e.$;return pe.noConflict=function(t){return e.$===pe&&(e.$=mn),t&&e.jQuery===pe&&(e.jQuery=hn),pe},t||(e.jQuery=e.$=pe),pe}),function(e,t){"use strict";e.rails!==t&&e.error("jquery-ujs has already been loaded!");var n,i=e(document);e.rails=n={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",buttonClickSelector:"button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
disableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",requiredInputSelector:"input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",fileInputSelector:"input[name][type=file]:not([disabled])",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]",csrfToken:function(){return e("meta[name=csrf-token]").attr("content")},csrfParam:function(){return e("meta[name=csrf-param]").attr("content")},CSRFProtection:function(e){var t=n.csrfToken();t&&e.setRequestHeader("X-CSRF-Token",t)},refreshCSRFTokens:function(){e('form input[name="'+n.csrfParam()+'"]').val(n.csrfToken())},fire:function(t,n,i){var r=e.Event(n);return t.trigger(r,i),r.result!==!1},confirm:function(e){return confirm(e)},ajax:function(t){return e.ajax(t)},href:function(e){return e[0].href},isRemote:function(e){return e.data("remote")!==t&&e.data("remote")!==!1},handleRemote:function(i){var r,a,o,s,u,c;if(n.fire(i,"ajax:before")){if(s=i.data("with-credentials")||null,u=i.data("type")||e.ajaxSettings&&e.ajaxSettings.dataType,i.is("form")){r=i.data("ujs:submit-button-formmethod")||i.attr("method"),a=i.data("ujs:submit-button-formaction")||i.attr("action"),o=e(i[0]).serializeArray();var l=i.data("ujs:submit-button");l&&(o.push(l),i.data("ujs:submit-button",null)),i.data("ujs:submit-button-formmethod",null),i.data("ujs:submit-button-formaction",null)}else i.is(n.inputChangeSelector)?(r=i.data("method"),a=i.data("url"),o=i.serialize(),i.data("params")&&(o=o+"&"+i.data("params"))):i.is(n.buttonClickSelector)?(r=i.data("method")||"get",a=i.data("url"),o=i.serialize(),i.data("params")&&(o=o+"&"+i.data("params"))):(r=i.data("method"),a=n.href(i),o=i.data("params")||null);return c={type:r||"GET",data:o,dataType:u,beforeSend:function(e,r){return r.dataType===t&&e.setRequestHeader("accept","*/*;q=0.5, "+r.accepts.script),!!n.fire(i,"ajax:beforeSend",[e,r])&&void i.trigger("ajax:send",e)},success:function(e,t,n){i.trigger("ajax:success",[e,t,n])},complete:function(e,t){i.trigger("ajax:complete",[e,t])},error:function(e,t,n){i.trigger("ajax:error",[e,t,n])},crossDomain:n.isCrossDomain(a)},s&&(c.xhrFields={withCredentials:s}),a&&(c.url=a),n.ajax(c)}return!1},isCrossDomain:function(e){var t=document.createElement("a");t.href=location.href;var n=document.createElement("a");try{return n.href=e,n.href=n.href,!((!n.protocol||":"===n.protocol)&&!n.host||t.protocol+"//"+t.host==n.protocol+"//"+n.host)}catch(e){return!0}},handleMethod:function(i){var r=n.href(i),a=i.data("method"),o=i.attr("target"),s=n.csrfToken(),u=n.csrfParam(),c=e('<form method="post" action="'+r+'"></form>'),l='<input name="_method" value="'+a+'" type="hidden" />';u===t||s===t||n.isCrossDomain(r)||(l+='<input name="'+u+'" value="'+s+'" type="hidden" />'),o&&c.attr("target",o),c.hide().append(l).appendTo("body"),c.submit()},formElements:function(t,n){return t.is("form")?e(t[0].elements).filter(n):t.find(n)},disableFormElements:function(t){n.formElements(t,n.disableSelector).each(function(){n.disableFormElement(e(this))})},disableFormElement:function(e){var n,i;n=e.is("button")?"html":"val",i=e.data("disable-with"),i!==t&&(e.data("ujs:enable-with",e[n]()),e[n](i)),e.prop("disabled",!0),e.data("ujs:disabled",!0)},enableFormElements:function(t){n.formElements(t,n.enableSelector).each(function(){n.enableFormElement(e(this))})},enableFormElement:function(e){var n=e.is("button")?"html":"val";e.data("ujs:enable-with")!==t&&(e[n](e.data("ujs:enable-with")),e.removeData("ujs:enable-with")),e.prop("disabled",!1),e.removeData("ujs:disabled")},allowAction:function(e){var t,i=e.data("confirm"),r=!1;if(!i)return!0;if(n.fire(e,"confirm")){try{r=n.confirm(i)}catch(e){(console.error||console.log).call(console,e.stack||e)}t=n.fire(e,"confirm:complete",[r])}return r&&t},blankInputs:function(t,n,i){var r,a,o,s,u=e(),c=n||"input,textarea",l=t.find(c),d={};return l.each(function(){r=e(this),r.is("input[type=radio]")?(s=r.attr("name"),d[s]||(0===t.find('input[type=radio]:checked[name="'+s+'"]').length&&(o=t.find('input[type=radio][name="'+s+'"]'),u=u.add(o)),d[s]=s)):(a=r.is("input[type=checkbox],input[type=radio]")?r.is(":checked"):!!r.val(),a===i&&(u=u.add(r)))}),!!u.length&&u},nonBlankInputs:function(e,t){return n.blankInputs(e,t,!0)},stopEverything:function(t){return e(t.target).trigger("ujs:everythingStopped"),t.stopImmediatePropagation(),!1},disableElement:function(e){var i=e.data("disable-with");i!==t&&(e.data("ujs:enable-with",e.html()),e.html(i)),e.bind("click.railsDisable",function(e){return n.stopEverything(e)}),e.data("ujs:disabled",!0)},enableElement:function(e){e.data("ujs:enable-with")!==t&&(e.html(e.data("ujs:enable-with")),e.removeData("ujs:enable-with")),e.unbind("click.railsDisable"),e.removeData("ujs:disabled")}},n.fire(i,"rails:attachBindings")&&(e.ajaxPrefilter(function(e,t,i){e.crossDomain||n.CSRFProtection(i)}),e(window).on("pageshow.rails",function(){e(e.rails.enableSelector).each(function(){var t=e(this);t.data("ujs:disabled")&&e.rails.enableFormElement(t)}),e(e.rails.linkDisableSelector).each(function(){var t=e(this);t.data("ujs:disabled")&&e.rails.enableElement(t)})}),i.on("ajax:complete",n.linkDisableSelector,function(){n.enableElement(e(this))}),i.on("ajax:complete",n.buttonDisableSelector,function(){n.enableFormElement(e(this))}),i.on("click.rails",n.linkClickSelector,function(t){var i=e(this),r=i.data("method"),a=i.data("params"),o=t.metaKey||t.ctrlKey;if(!n.allowAction(i))return n.stopEverything(t);if(!o&&i.is(n.linkDisableSelector)&&n.disableElement(i),n.isRemote(i)){if(o&&(!r||"GET"===r)&&!a)return!0;var s=n.handleRemote(i);return s===!1?n.enableElement(i):s.fail(function(){n.enableElement(i)}),!1}return r?(n.handleMethod(i),!1):void 0}),i.on("click.rails",n.buttonClickSelector,function(t){var i=e(this);if(!n.allowAction(i)||!n.isRemote(i))return n.stopEverything(t);i.is(n.buttonDisableSelector)&&n.disableFormElement(i);var r=n.handleRemote(i);return r===!1?n.enableFormElement(i):r.fail(function(){n.enableFormElement(i)}),!1}),i.on("change.rails",n.inputChangeSelector,function(t){var i=e(this);return n.allowAction(i)&&n.isRemote(i)?(n.handleRemote(i),!1):n.stopEverything(t)}),i.on("submit.rails",n.formSubmitSelector,function(i){var r,a,o=e(this),s=n.isRemote(o);if(!n.allowAction(o))return n.stopEverything(i);if(o.attr("novalidate")===t)if(o.data("ujs:formnovalidate-button")===t){if(r=n.blankInputs(o,n.requiredInputSelector,!1),r&&n.fire(o,"ajax:aborted:required",[r]))return n.stopEverything(i)}else o.data("ujs:formnovalidate-button",t);if(s){if(a=n.nonBlankInputs(o,n.fileInputSelector)){setTimeout(function(){n.disableFormElements(o)},13);var u=n.fire(o,"ajax:aborted:file",[a]);return u||setTimeout(function(){n.enableFormElements(o)},13),u}return n.handleRemote(o),!1}setTimeout(function(){n.disableFormElements(o)},13)}),i.on("click.rails",n.formInputClickSelector,function(t){var i=e(this);if(!n.allowAction(i))return n.stopEverything(t);var r=i.attr("name"),a=r?{name:r,value:i.val()}:null,o=i.closest("form");0===o.length&&(o=e("#"+i.attr("form"))),o.data("ujs:submit-button",a),o.data("ujs:formnovalidate-button",i.attr("formnovalidate")),o.data("ujs:submit-button-formaction",i.attr("formaction")),o.data("ujs:submit-button-formmethod",i.attr("formmethod"))}),i.on("ajax:send.rails",n.formSubmitSelector,function(t){this===t.target&&n.disableFormElements(e(this))}),i.on("ajax:complete.rails",n.formSubmitSelector,function(t){this===t.target&&n.enableFormElements(e(this))}),e(function(){n.refreshCSRFTokens()}))}(jQuery),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){e.ui=e.ui||{},e.ui.version="1.12.1";var t="ui-effects-",n="ui-effects-style",i="ui-effects-animated",r=e;e.effects={effect:{}},function(e,t){function n(e,t,n){var i=d[t.type]||{};return null==e?n||!t.def?null:t.def:(e=i.floor?~~e:parseFloat(e),isNaN(e)?t.def:i.mod?(e+i.mod)%i.mod:0>e?0:e>i.max?i.max:e)}function i(n){var i=c(),r=i._rgba=[];return n=n.toLowerCase(),h(u,function(e,a){var o,s=a.re.exec(n),u=s&&a.parse(s),c=a.space||"rgba";return u?(o=i[c](u),i[l[c].cache]=o[l[c].cache],r=i._rgba=o._rgba,!1):t}),r.length?("0,0,0,0"===r.join()&&e.extend(r,a.transparent),i):a[n]}function r(e,t,n){return n=(n+1)%1,1>6*n?e+6*(t-e)*n:1>2*n?t:2>3*n?e+6*(t-e)*(2/3-n):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",s=/^([\-+])=\s*(\d+\.?\d*)/,u=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],c=e.Color=function(t,n,i,r){return new e.Color.fn.parse(t,n,i,r)},l={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},f=c.support={},p=e("<p>")[0],h=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",f.rgba=p.style.backgroundColor.indexOf("rgba")>-1,h(l,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),c.fn=e.extend(c.prototype,{parse:function(r,o,s,u){if(r===t)return this._rgba=[null,null,null,null],this;(r.jquery||r.nodeType)&&(r=e(r).css(o),o=t);var d=this,f=e.type(r),p=this._rgba=[];return o!==t&&(r=[r,o,s,u],f="array"),"string"===f?this.parse(i(r)||a._default):"array"===f?(h(l.rgba.props,function(e,t){p[t.idx]=n(r[t.idx],t)}),this):"object"===f?(r instanceof c?h(l,function(e,t){r[t.cache]&&(d[t.cache]=r[t.cache].slice())}):h(l,function(t,i){var a=i.cache;h(i.props,function(e,t){if(!d[a]&&i.to){if("alpha"===e||null==r[e])return;d[a]=i.to(d._rgba)}d[a][t.idx]=n(r[e],t,!0)}),d[a]&&0>e.inArray(null,d[a].slice(0,3))&&(d[a][3]=1,i.from&&(d._rgba=i.from(d[a])))}),this):t},is:function(e){var n=c(e),i=!0,r=this;return h(l,function(e,a){var o,s=n[a.cache];return s&&(o=r[a.cache]||a.to&&a.to(r._rgba)||[],h(a.props,function(e,n){return null!=s[n.idx]?i=s[n.idx]===o[n.idx]:t})),i}),i},_space:function(){var e=[],t=this;return h(l,function(n,i){t[i.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var i=c(e),r=i._space(),a=l[r],o=0===this.alpha()?c("transparent"):this,s=o[a.cache]||a.to(o._rgba),u=s.slice();return i=i[a.cache],h(a.props,function(e,r){var a=r.idx,o=s[a],c=i[a],l=d[r.type]||{};null!==c&&(null===o?u[a]=c:(l.mod&&(c-o>l.mod/2?o+=l.mod:o-c>l.mod/2&&(o-=l.mod)),u[a]=n((c-o)*t+o,r)))}),this[r](u)},blend:function(t){if(1===this._rgba[3])return this;var n=this._rgba.slice(),i=n.pop(),r=c(t)._rgba;return c(e.map(n,function(e,t){return(1-i)*r[t]+i*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===n[3]&&(n.pop(),t="rgb("),t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===n[3]&&(n.pop(),t="hsl("),t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),i=n.pop();return t&&n.push(~~(255*i)),"#"+e.map(n,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),c.fn.parse.prototype=c.fn,l.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,n,i=e[0]/255,r=e[1]/255,a=e[2]/255,o=e[3],s=Math.max(i,r,a),u=Math.min(i,r,a),c=s-u,l=s+u,d=.5*l;return t=u===s?0:i===s?60*(r-a)/c+360:r===s?60*(a-i)/c+120:60*(i-r)/c+240,n=0===c?0:.5>=d?c/l:c/(2-l),[Math.round(t)%360,n,d,null==o?1:o]},l.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,n=e[1],i=e[2],a=e[3],o=.5>=i?i*(1+n):i+n-i*n,s=2*i-o;return[Math.round(255*r(s,o,t+1/3)),Math.round(255*r(s,o,t)),Math.round(255*r(s,o,t-1/3)),a]},h(l,function(i,r){var a=r.props,o=r.cache,u=r.to,l=r.from;c.fn[i]=function(i){if(u&&!this[o]&&(this[o]=u(this._rgba)),i===t)return this[o].slice();var r,s=e.type(i),d="array"===s||"object"===s?i:arguments,f=this[o].slice();return h(a,function(e,t){var i=d["object"===s?e:t.idx];null==i&&(i=f[t.idx]),f[t.idx]=n(i,t)}),l?(r=c(l(f)),r[o]=f,r):c(f)},h(a,function(t,n){c.fn[t]||(c.fn[t]=function(r){var a,o=e.type(r),u="alpha"===t?this._hsla?"hsla":"rgba":i,c=this[u](),l=c[n.idx];return"undefined"===o?l:("function"===o&&(r=r.call(this,l),o=e.type(r)),null==r&&n.empty?this:("string"===o&&(a=s.exec(r),a&&(r=l+parseFloat(a[2])*("+"===a[1]?1:-1))),c[n.idx]=r,this[u](c)))})})}),c.hook=function(t){var n=t.split(" ");h(n,function(t,n){e.cssHooks[n]={set:function(t,r){var a,o,s="";if("transparent"!==r&&("string"!==e.type(r)||(a=i(r)))){if(r=c(a||r),!f.rgba&&1!==r._rgba[3]){for(o="backgroundColor"===n?t.parentNode:t;(""===s||"transparent"===s)&&o&&o.style;)try{s=e.css(o,"backgroundColor"),o=o.parentNode}catch(e){}r=r.blend(s&&"transparent"!==s?s:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(e){}}},e.fx.step[n]=function(t){t.colorInit||(t.start=c(t.elem,n),t.end=c(t.end),t.colorInit=!0),e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})},c.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return h(["Top","Right","Bottom","Left"],function(n,i){t["border"+i+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(r),function(){function t(t){var n,i,r=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(r&&r.length&&r[0]&&r[r[0]])for(i=r.length;i--;)n=r[i],"string"==typeof r[n]&&(a[e.camelCase(n)]=r[n]);else for(n in r)"string"==typeof r[n]&&(a[n]=r[n]);return a}function n(t,n){var i,r,o={};for(i in n)r=n[i],t[i]!==r&&(a[i]||(e.fx.step[i]||!isNaN(parseFloat(r)))&&(o[i]=r));return o}var i=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(r.style(e.elem,n,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(r,a,o,s){var u=e.speed(a,o,s);return this.queue(function(){var a,o=e(this),s=o.attr("class")||"",c=u.children?o.find("*").addBack():o;c=c.map(function(){var n=e(this);return{el:n,start:t(this)}}),a=function(){e.each(i,function(e,t){r[t]&&o[t+"Class"](r[t])})},a(),c=c.map(function(){return this.end=t(this.el[0]),this.diff=n(this.start,this.end),this}),o.attr("class",s),c=c.map(function(){var t=this,n=e.Deferred(),i=e.extend({},u,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,i),n.promise()}),e.when.apply(e,c.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),u.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(n,i,r,a){return i?e.effects.animateClass.call(this,{add:n},i,r,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(n,i,r,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:n},i,r,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(n,i,r,a,o){return"boolean"==typeof i||void 0===i?r?e.effects.animateClass.call(this,i?{add:n}:{remove:n},r,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:n},i,r,a)}}(e.fn.toggleClass),switchClass:function(t,n,i,r,a){return e.effects.animateClass.call(this,{add:n,remove:t},i,r,a)}})}(),function(){function r(t,n,i,r){return e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},null==n&&(n={}),e.isFunction(n)&&(r=n,i=null,n={}),("number"==typeof n||e.fx.speeds[n])&&(r=i,i=n,n={}),e.isFunction(i)&&(r=i,i=null),n&&e.extend(t,n),i=i||n.duration,t.duration=e.fx.off?0:"number"==typeof i?i:i in e.fx.speeds?e.fx.speeds[i]:e.fx.speeds._default,t.complete=r||n.complete,t}function a(t){return!(t&&"number"!=typeof t&&!e.fx.speeds[t])||("string"==typeof t&&!e.effects.effect[t]||(!!e.isFunction(t)||"object"==typeof t&&!t.effect))}function o(e,t){var n=t.outerWidth(),i=t.outerHeight(),r=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,a=r.exec(e)||["",0,n,i,0];return{top:parseFloat(a[1])||0,right:"auto"===a[2]?n:parseFloat(a[2]),bottom:"auto"===a[3]?i:parseFloat(a[3]),left:parseFloat(a[4])||0}}e.expr&&e.expr.filters&&e.expr.filters.animated&&(e.expr.filters.animated=function(t){return function(n){return!!e(n).data(i)||t(n)}}(e.expr.filters.animated)),e.uiBackCompat!==!1&&e.extend(e.effects,{save:function(e,n){for(var i=0,r=n.length;r>i;i++)null!==n[i]&&e.data(t+n[i],e[0].style[n[i]])},restore:function(e,n){for(var i,r=0,a=n.length;a>r;r++)null!==n[r]&&(i=e.data(t+n[r]),e.css(n[r],i))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},i=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),r={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(e){a=document.body}return t.wrap(i),(t[0]===a||e.contains(t[0],a))&&e(a).trigger("focus"),i=t.parent(),"static"===t.css("position")?(i.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,i){n[i]=t.css(i),isNaN(parseInt(n[i],10))&&(n[i]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(r),i.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).trigger("focus")),t}}),e.extend(e.effects,{version:"1.12.1",define:function(t,n,i){return i||(i=n,n="effect"),e.effects.effect[t]=i,e.effects.effect[t].mode=n,i},scaledDimensions:function(e,t,n){if(0===t)return{height:0,width:0,outerHeight:0,outerWidth:0};var i="horizontal"!==n?(t||100)/100:1,r="vertical"!==n?(t||100)/100:1;return{height:e.height()*r,width:e.width()*i,outerHeight:e.outerHeight()*r,outerWidth:e.outerWidth()*i}},clipToBox:function(e){return{width:e.clip.right-e.clip.left,height:e.clip.bottom-e.clip.top,left:e.clip.left,top:e.clip.top}},unshift:function(e,t,n){var i=e.queue();t>1&&i.splice.apply(i,[1,0].concat(i.splice(t,n))),e.dequeue()},saveStyle:function(e){e.data(n,e[0].style.cssText)},restoreStyle:function(e){e[0].style.cssText=e.data(n)||"",e.removeData(n)},mode:function(e,t){var n=e.is(":hidden");return"toggle"===t&&(t=n?"show":"hide"),(n?"hide"===t:"show"===t)&&(t="none"),t},getBaseline:function(e,t){var n,i;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":i=0;break;case"center":i=.5;break;case"right":i=1;break;default:i=e[1]/t.width}return{x:i,y:n}},createPlaceholder:function(n){var i,r=n.css("position"),a=n.position();return n.css({marginTop:n.css("marginTop"),marginBottom:n.css("marginBottom"),marginLeft:n.css("marginLeft"),marginRight:n.css("marginRight")}).outerWidth(n.outerWidth()).outerHeight(n.outerHeight()),/^(static|relative)/.test(r)&&(r="absolute",i=e("<"+n[0].nodeName+">").insertAfter(n).css({display:/^(inline|ruby)/.test(n.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:n.css("marginTop"),marginBottom:n.css("marginBottom"),marginLeft:n.css("marginLeft"),marginRight:n.css("marginRight"),"float":n.css("float")}).outerWidth(n.outerWidth()).outerHeight(n.outerHeight()).addClass("ui-effects-placeholder"),n.data(t+"placeholder",i)),n.css({position:r,left:a.left,top:a.top}),i},removePlaceholder:function(e){var n=t+"placeholder",i=e.data(n);i&&(i.remove(),e.removeData(n))},cleanUp:function(t){e.effects.restoreStyle(t),e.effects.removePlaceholder(t)},setTransition:function(t,n,i,r){return r=r||{},e.each(n,function(e,n){var a=t.cssUnit(n);a[0]>0&&(r[n]=a[0]*i+a[1])}),r}}),e.fn.extend({effect:function(){function t(t){function r(){u.removeData(i),e.effects.cleanUp(u),"hide"===n.mode&&u.hide(),s()}function s(){e.isFunction(c)&&c.call(u[0]),e.isFunction(t)&&t()}var u=e(this);
n.mode=d.shift(),e.uiBackCompat===!1||o?"none"===n.mode?(u[l](),s()):a.call(u[0],n,r):(u.is(":hidden")?"hide"===l:"show"===l)?(u[l](),s()):a.call(u[0],n,s)}var n=r.apply(this,arguments),a=e.effects.effect[n.effect],o=a.mode,s=n.queue,u=s||"fx",c=n.complete,l=n.mode,d=[],f=function(t){var n=e(this),r=e.effects.mode(n,l)||o;n.data(i,!0),d.push(r),o&&("show"===r||r===o&&"hide"===r)&&n.show(),o&&"none"===r||e.effects.saveStyle(n),e.isFunction(t)&&t()};return e.fx.off||!a?l?this[l](n.duration,c):this.each(function(){c&&c.call(this)}):s===!1?this.each(f).each(t):this.queue(u,f).queue(u,t)
},
show:function(e){return function(t){if(a(t))return e.apply(this,arguments);var n=r.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(t){if(a(t))return e.apply(this,arguments);var n=r.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(t){if(a(t)||"boolean"==typeof t)return e.apply(this,arguments);var n=r.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var n=this.css(t),i=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(i=[parseFloat(n),t])}),i},cssClip:function(e){return e?this.css("clip","rect("+e.top+"px "+e.right+"px "+e.bottom+"px "+e.left+"px)"):o(this.css("clip"),this)},transfer:function(t,n){var i=e(this),r=e(t.to),a="fixed"===r.css("position"),o=e("body"),s=a?o.scrollTop():0,u=a?o.scrollLeft():0,c=r.offset(),l={top:c.top-s,left:c.left-u,height:r.innerHeight(),width:r.innerWidth()},d=i.offset(),f=e("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({top:d.top-s,left:d.left-u,height:i.innerHeight(),width:i.innerWidth(),position:a?"fixed":"absolute"}).animate(l,t.duration,t.easing,function(){f.remove(),e.isFunction(n)&&n()})}}),e.fx.step.clip=function(t){t.clipInit||(t.start=e(t.elem).cssClip(),"string"==typeof t.end&&(t.end=o(t.end,t.elem)),t.clipInit=!0),e(t.elem).cssClip({top:t.pos*(t.end.top-t.start.top)+t.start.top,right:t.pos*(t.end.right-t.start.right)+t.start.right,bottom:t.pos*(t.end.bottom-t.start.bottom)+t.start.bottom,left:t.pos*(t.end.left-t.start.left)+t.start.left})}}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,n=4;((t=Math.pow(2,--n))-1)/11>e;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?n(2*e)/2:1-n(-2*e+2)/2}})}();var a=e.effects;e.effects.define("blind","hide",function(t,n){var i={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},r=e(this),a=t.direction||"up",o=r.cssClip(),s={clip:e.extend({},o)},u=e.effects.createPlaceholder(r);s.clip[i[a][0]]=s.clip[i[a][1]],"show"===t.mode&&(r.cssClip(s.clip),u&&u.css(e.effects.clipToBox(s)),s.clip=o),u&&u.animate(e.effects.clipToBox(s),t.duration,t.easing),r.animate(s,{queue:!1,duration:t.duration,easing:t.easing,complete:n})}),e.effects.define("bounce",function(t,n){var i,r,a,o=e(this),s=t.mode,u="hide"===s,c="show"===s,l=t.direction||"up",d=t.distance,f=t.times||5,p=2*f+(c||u?1:0),h=t.duration/p,m=t.easing,g="up"===l||"down"===l?"top":"left",y="up"===l||"left"===l,v=0,b=o.queue().length;for(e.effects.createPlaceholder(o),a=o.css(g),d||(d=o["top"===g?"outerHeight":"outerWidth"]()/3),c&&(r={opacity:1},r[g]=a,o.css("opacity",0).css(g,y?2*-d:2*d).animate(r,h,m)),u&&(d/=Math.pow(2,f-1)),r={},r[g]=a;f>v;v++)i={},i[g]=(y?"-=":"+=")+d,o.animate(i,h,m).animate(r,h,m),d=u?2*d:d/2;u&&(i={opacity:0},i[g]=(y?"-=":"+=")+d,o.animate(i,h,m)),o.queue(n),e.effects.unshift(o,b,p+1)}),e.effects.define("clip","hide",function(t,n){var i,r={},a=e(this),o=t.direction||"vertical",s="both"===o,u=s||"horizontal"===o,c=s||"vertical"===o;i=a.cssClip(),r.clip={top:c?(i.bottom-i.top)/2:i.top,right:u?(i.right-i.left)/2:i.right,bottom:c?(i.bottom-i.top)/2:i.bottom,left:u?(i.right-i.left)/2:i.left},e.effects.createPlaceholder(a),"show"===t.mode&&(a.cssClip(r.clip),r.clip=i),a.animate(r,{queue:!1,duration:t.duration,easing:t.easing,complete:n})}),e.effects.define("drop","hide",function(t,n){var i,r=e(this),a=t.mode,o="show"===a,s=t.direction||"left",u="up"===s||"down"===s?"top":"left",c="up"===s||"left"===s?"-=":"+=",l="+="===c?"-=":"+=",d={opacity:0};e.effects.createPlaceholder(r),i=t.distance||r["top"===u?"outerHeight":"outerWidth"](!0)/2,d[u]=c+i,o&&(r.css(d),d[u]=l+i,d.opacity=1),r.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:n})}),e.effects.define("explode","hide",function(t,n){function i(){b.push(this),b.length===d*f&&r()}function r(){p.css({visibility:"visible"}),e(b).remove(),n()}var a,o,s,u,c,l,d=t.pieces?Math.round(Math.sqrt(t.pieces)):3,f=d,p=e(this),h=t.mode,m="show"===h,g=p.show().css("visibility","hidden").offset(),y=Math.ceil(p.outerWidth()/f),v=Math.ceil(p.outerHeight()/d),b=[];for(a=0;d>a;a++)for(u=g.top+a*v,l=a-(d-1)/2,o=0;f>o;o++)s=g.left+o*y,c=o-(f-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*y,top:-a*v}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:y,height:v,left:s+(m?c*y:0),top:u+(m?l*v:0),opacity:m?0:1}).animate({left:s+(m?0:c*y),top:u+(m?0:l*v),opacity:m?1:0},t.duration||500,t.easing,i)}),e.effects.define("fade","toggle",function(t,n){var i="show"===t.mode;e(this).css("opacity",i?0:1).animate({opacity:i?1:0},{queue:!1,duration:t.duration,easing:t.easing,complete:n})}),e.effects.define("fold","hide",function(t,n){var i=e(this),r=t.mode,a="show"===r,o="hide"===r,s=t.size||15,u=/([0-9]+)%/.exec(s),c=!!t.horizFirst,l=c?["right","bottom"]:["bottom","right"],d=t.duration/2,f=e.effects.createPlaceholder(i),p=i.cssClip(),h={clip:e.extend({},p)},m={clip:e.extend({},p)},g=[p[l[0]],p[l[1]]],y=i.queue().length;u&&(s=parseInt(u[1],10)/100*g[o?0:1]),h.clip[l[0]]=s,m.clip[l[0]]=s,m.clip[l[1]]=0,a&&(i.cssClip(m.clip),f&&f.css(e.effects.clipToBox(m)),m.clip=p),i.queue(function(n){f&&f.animate(e.effects.clipToBox(h),d,t.easing).animate(e.effects.clipToBox(m),d,t.easing),n()}).animate(h,d,t.easing).animate(m,d,t.easing).queue(n),e.effects.unshift(i,y,4)}),e.effects.define("highlight","show",function(t,n){var i=e(this),r={backgroundColor:i.css("backgroundColor")};"hide"===t.mode&&(r.opacity=0),e.effects.saveStyle(i),i.css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(r,{queue:!1,duration:t.duration,easing:t.easing,complete:n})}),e.effects.define("size",function(t,n){var i,r,a,o=e(this),s=["fontSize"],u=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],l=t.mode,d="effect"!==l,f=t.scale||"both",p=t.origin||["middle","center"],h=o.css("position"),m=o.position(),g=e.effects.scaledDimensions(o),y=t.from||g,v=t.to||e.effects.scaledDimensions(o,0);e.effects.createPlaceholder(o),"show"===l&&(a=y,y=v,v=a),r={from:{y:y.height/g.height,x:y.width/g.width},to:{y:v.height/g.height,x:v.width/g.width}},("box"===f||"both"===f)&&(r.from.y!==r.to.y&&(y=e.effects.setTransition(o,u,r.from.y,y),v=e.effects.setTransition(o,u,r.to.y,v)),r.from.x!==r.to.x&&(y=e.effects.setTransition(o,c,r.from.x,y),v=e.effects.setTransition(o,c,r.to.x,v))),("content"===f||"both"===f)&&r.from.y!==r.to.y&&(y=e.effects.setTransition(o,s,r.from.y,y),v=e.effects.setTransition(o,s,r.to.y,v)),p&&(i=e.effects.getBaseline(p,g),y.top=(g.outerHeight-y.outerHeight)*i.y+m.top,y.left=(g.outerWidth-y.outerWidth)*i.x+m.left,v.top=(g.outerHeight-v.outerHeight)*i.y+m.top,v.left=(g.outerWidth-v.outerWidth)*i.x+m.left),o.css(y),("content"===f||"both"===f)&&(u=u.concat(["marginTop","marginBottom"]).concat(s),c=c.concat(["marginLeft","marginRight"]),o.find("*[width]").each(function(){var n=e(this),i=e.effects.scaledDimensions(n),a={height:i.height*r.from.y,width:i.width*r.from.x,outerHeight:i.outerHeight*r.from.y,outerWidth:i.outerWidth*r.from.x},o={height:i.height*r.to.y,width:i.width*r.to.x,outerHeight:i.height*r.to.y,outerWidth:i.width*r.to.x};r.from.y!==r.to.y&&(a=e.effects.setTransition(n,u,r.from.y,a),o=e.effects.setTransition(n,u,r.to.y,o)),r.from.x!==r.to.x&&(a=e.effects.setTransition(n,c,r.from.x,a),o=e.effects.setTransition(n,c,r.to.x,o)),d&&e.effects.saveStyle(n),n.css(a),n.animate(o,t.duration,t.easing,function(){d&&e.effects.restoreStyle(n)})})),o.animate(v,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){var t=o.offset();0===v.opacity&&o.css("opacity",y.opacity),d||(o.css("position","static"===h?"relative":h).offset(t),e.effects.saveStyle(o)),n()}})}),e.effects.define("scale",function(t,n){var i=e(this),r=t.mode,a=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"effect"!==r?0:100),o=e.extend(!0,{from:e.effects.scaledDimensions(i),to:e.effects.scaledDimensions(i,a,t.direction||"both"),origin:t.origin||["middle","center"]},t);t.fade&&(o.from.opacity=1,o.to.opacity=0),e.effects.effect.size.call(this,o,n)}),e.effects.define("puff","hide",function(t,n){var i=e.extend(!0,{},t,{fade:!0,percent:parseInt(t.percent,10)||150});e.effects.effect.scale.call(this,i,n)}),e.effects.define("pulsate","show",function(t,n){var i=e(this),r=t.mode,a="show"===r,o="hide"===r,s=a||o,u=2*(t.times||5)+(s?1:0),c=t.duration/u,l=0,d=1,f=i.queue().length;for((a||!i.is(":visible"))&&(i.css("opacity",0).show(),l=1);u>d;d++)i.animate({opacity:l},c,t.easing),l=1-l;i.animate({opacity:l},c,t.easing),i.queue(n),e.effects.unshift(i,f,u+1)}),e.effects.define("shake",function(t,n){var i=1,r=e(this),a=t.direction||"left",o=t.distance||20,s=t.times||3,u=2*s+1,c=Math.round(t.duration/u),l="up"===a||"down"===a?"top":"left",d="up"===a||"left"===a,f={},p={},h={},m=r.queue().length;for(e.effects.createPlaceholder(r),f[l]=(d?"-=":"+=")+o,p[l]=(d?"+=":"-=")+2*o,h[l]=(d?"-=":"+=")+2*o,r.animate(f,c,t.easing);s>i;i++)r.animate(p,c,t.easing).animate(h,c,t.easing);r.animate(p,c,t.easing).animate(f,c/2,t.easing).queue(n),e.effects.unshift(r,m,u+1)}),e.effects.define("slide","show",function(t,n){var i,r,a=e(this),o={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},s=t.mode,u=t.direction||"left",c="up"===u||"down"===u?"top":"left",l="up"===u||"left"===u,d=t.distance||a["top"===c?"outerHeight":"outerWidth"](!0),f={};e.effects.createPlaceholder(a),i=a.cssClip(),r=a.position()[c],f[c]=(l?-1:1)*d+r,f.clip=a.cssClip(),f.clip[o[u][1]]=f.clip[o[u][0]],"show"===s&&(a.cssClip(f.clip),a.css(c,f[c]),f.clip=i,f[c]=r),a.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:n});
});
var a;e.uiBackCompat!==!1&&(a=e.effects.define("transfer",function(t,n){e(this).transfer(t,n)}))}),function(){function e(){var e=!1;if("localStorage"in window)try{window.localStorage.setItem("_tmptest","tmpval"),e=!0,window.localStorage.removeItem("_tmptest")}catch(e){}if(e)try{window.localStorage&&(x=window.localStorage,C="localStorage",_=x.jStorage_update)}catch(e){}else if("globalStorage"in window)try{window.globalStorage&&(x="localhost"==window.location.hostname?window.globalStorage["localhost.localdomain"]:window.globalStorage[window.location.hostname],C="globalStorage",_=x.jStorage_update)}catch(e){}else{if(k=document.createElement("link"),!k.addBehavior)return void(k=null);k.style.behavior="url(#default#userData)",document.getElementsByTagName("head")[0].appendChild(k);try{k.load("jStorage")}catch(e){k.setAttribute("jStorage","{}"),k.save("jStorage"),k.load("jStorage")}var t="{}";try{t=k.getAttribute("jStorage")}catch(e){}try{_=k.getAttribute("jStorage_update")}catch(e){}x.jStorage=t,C="userDataBehavior"}s(),l(),n(),d(),"addEventListener"in window&&window.addEventListener("pageshow",function(e){e.persisted&&i()},!1)}function t(){var e="{}";if("userDataBehavior"==C){k.load("jStorage");try{e=k.getAttribute("jStorage")}catch(e){}try{_=k.getAttribute("jStorage_update")}catch(e){}x.jStorage=e}s(),l(),d()}function n(){"localStorage"==C||"globalStorage"==C?"addEventListener"in window?window.addEventListener("storage",i,!1):document.attachEvent("onstorage",i):"userDataBehavior"==C&&setInterval(i,1e3)}function i(){var e;clearTimeout(j),j=setTimeout(function(){if("localStorage"==C||"globalStorage"==C)e=x.jStorage_update;else if("userDataBehavior"==C){k.load("jStorage");try{e=k.getAttribute("jStorage_update")}catch(e){}}e&&e!=_&&(_=e,r())},25)}function r(){var e,n=v.parse(v.stringify(w.__jstorage_meta.CRC32));t(),e=v.parse(v.stringify(w.__jstorage_meta.CRC32));var i,r=[],o=[];for(i in n)if(n.hasOwnProperty(i)){if(!e[i]){o.push(i);continue}n[i]!=e[i]&&"2."==String(n[i]).substr(0,2)&&r.push(i)}for(i in e)e.hasOwnProperty(i)&&(n[i]||r.push(i));a(r,"updated"),a(o,"deleted")}function a(e,t){if(e=[].concat(e||[]),"flushed"==t){e=[];for(var n in T)T.hasOwnProperty(n)&&e.push(n);t="deleted"}for(var i=0,r=e.length;i<r;i++){if(T[e[i]])for(var a=0,o=T[e[i]].length;a<o;a++)T[e[i]][a](e[i],t);if(T["*"])for(var a=0,o=T["*"].length;a<o;a++)T["*"][a](e[i],t)}}function o(){var e=(+new Date).toString();"localStorage"==C||"globalStorage"==C?x.jStorage_update=e:"userDataBehavior"==C&&(k.setAttribute("jStorage_update",e),k.save("jStorage")),i()}function s(){if(x.jStorage)try{w=v.parse(String(x.jStorage))}catch(e){x.jStorage="{}"}else x.jStorage="{}";S=x.jStorage?String(x.jStorage).length:0,w.__jstorage_meta||(w.__jstorage_meta={}),w.__jstorage_meta.CRC32||(w.__jstorage_meta.CRC32={})}function u(){p();try{x.jStorage=v.stringify(w),k&&(k.setAttribute("jStorage",x.jStorage),k.save("jStorage")),S=x.jStorage?String(x.jStorage).length:0}catch(e){}}function c(e){if(!e||"string"!=typeof e&&"number"!=typeof e)throw new TypeError("Key name must be string or numeric");if("__jstorage_meta"==e)throw new TypeError("Reserved key name");return!0}function l(){var e,t,n,i,r=1/0,s=!1,c=[];if(clearTimeout(b),w.__jstorage_meta&&"object"==typeof w.__jstorage_meta.TTL){e=+new Date,n=w.__jstorage_meta.TTL,i=w.__jstorage_meta.CRC32;for(t in n)n.hasOwnProperty(t)&&(n[t]<=e?(delete n[t],delete i[t],delete w[t],s=!0,c.push(t)):n[t]<r&&(r=n[t]));r!=1/0&&(b=setTimeout(l,r-e)),s&&(u(),o(),a(c,"deleted"))}}function d(){var e,t;if(w.__jstorage_meta.PubSub){var n,i=A;for(e=t=w.__jstorage_meta.PubSub.length-1;e>=0;e--)n=w.__jstorage_meta.PubSub[e],n[0]>A&&(i=n[0],f(n[1],n[2]));A=i}}function f(e,t){if($[e])for(var n=0,i=$[e].length;n<i;n++)$[e][n](e,v.parse(v.stringify(t)))}function p(){if(w.__jstorage_meta.PubSub){for(var e=+new Date-2e3,t=0,n=w.__jstorage_meta.PubSub.length;t<n;t++)if(w.__jstorage_meta.PubSub[t][0]<=e){w.__jstorage_meta.PubSub.splice(t,w.__jstorage_meta.PubSub.length-t);break}w.__jstorage_meta.PubSub.length||delete w.__jstorage_meta.PubSub}}function h(e,t){w.__jstorage_meta||(w.__jstorage_meta={}),w.__jstorage_meta.PubSub||(w.__jstorage_meta.PubSub=[]),w.__jstorage_meta.PubSub.unshift([+new Date,e,t]),u(),o()}function m(e,t){for(var n,i=e.length,r=t^i,a=0;i>=4;)n=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),n^=n>>>24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^n,i-=4,++a;switch(i){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),r^=r>>>15,r>>>0}var g="0.4.3",y=window.jQuery||window.$||(window.$={}),v={parse:window.JSON&&(window.JSON.parse||window.JSON.decode)||String.prototype.evalJSON&&function(e){return String(e).evalJSON()}||y.parseJSON||y.evalJSON,stringify:Object.toJSON||window.JSON&&(window.JSON.stringify||window.JSON.encode)||y.toJSON};if(!v.parse||!v.stringify)throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");var b,w={__jstorage_meta:{CRC32:{}}},x={jStorage:"{}"},k=null,S=0,C=!1,T={},j=!1,_=0,$={},A=+new Date,E={isXML:function(e){var t=(e?e.ownerDocument||e:0).documentElement;return!!t&&"HTML"!==t.nodeName},encode:function(e){if(!this.isXML(e))return!1;try{return(new XMLSerializer).serializeToString(e)}catch(t){try{return e.xml}catch(e){}}return!1},decode:function(e){var t,n="DOMParser"in window&&(new DOMParser).parseFromString||window.ActiveXObject&&function(e){var t=new ActiveXObject("Microsoft.XMLDOM");return t.async="false",t.loadXML(e),t};return!!n&&(t=n.call("DOMParser"in window&&new DOMParser||window,e,"text/xml"),!!this.isXML(t)&&t)}};y.jStorage={version:g,set:function(e,t,n){if(c(e),n=n||{},"undefined"==typeof t)return this.deleteKey(e),t;if(E.isXML(t))t={_is_xml:!0,xml:E.encode(t)};else{if("function"==typeof t)return;t&&"object"==typeof t&&(t=v.parse(v.stringify(t)))}return w[e]=t,w.__jstorage_meta.CRC32[e]="2."+m(v.stringify(t),2538058380),this.setTTL(e,n.TTL||0),a(e,"updated"),t},get:function(e,t){return c(e),e in w?w[e]&&"object"==typeof w[e]&&w[e]._is_xml?E.decode(w[e].xml):w[e]:"undefined"==typeof t?null:t},deleteKey:function(e){return c(e),e in w&&(delete w[e],"object"==typeof w.__jstorage_meta.TTL&&e in w.__jstorage_meta.TTL&&delete w.__jstorage_meta.TTL[e],delete w.__jstorage_meta.CRC32[e],u(),o(),a(e,"deleted"),!0)},setTTL:function(e,t){var n=+new Date;return c(e),t=Number(t)||0,e in w&&(w.__jstorage_meta.TTL||(w.__jstorage_meta.TTL={}),t>0?w.__jstorage_meta.TTL[e]=n+t:delete w.__jstorage_meta.TTL[e],u(),l(),o(),!0)},getTTL:function(e){var t,n=+new Date;return c(e),e in w&&w.__jstorage_meta.TTL&&w.__jstorage_meta.TTL[e]?(t=w.__jstorage_meta.TTL[e]-n,t||0):0},flush:function(){return w={__jstorage_meta:{CRC32:{}}},u(),o(),a(null,"flushed"),!0},storageObj:function(){function e(){}return e.prototype=w,new e},index:function(){var e,t=[];for(e in w)w.hasOwnProperty(e)&&"__jstorage_meta"!=e&&t.push(e);return t},storageSize:function(){return S},currentBackend:function(){return C},storageAvailable:function(){return!!C},listenKeyChange:function(e,t){c(e),T[e]||(T[e]=[]),T[e].push(t)},stopListening:function(e,t){if(c(e),T[e]){if(!t)return void delete T[e];for(var n=T[e].length-1;n>=0;n--)T[e][n]==t&&T[e].splice(n,1)}},subscribe:function(e,t){if(e=(e||"").toString(),!e)throw new TypeError("Channel not defined");$[e]||($[e]=[]),$[e].push(t)},publish:function(e,t){if(e=(e||"").toString(),!e)throw new TypeError("Channel not defined");h(e,t)},reInit:function(){t()}},e()}();var levenshteinDistance=function(e,t){var n=[],i=e.length,r=t.length;if(0==i)return r;if(0==r)return i;for(var a=i;a>=0;a--)n[a]=[];for(var a=i;a>=0;a--)n[a][0]=a;for(var o=r;o>=0;o--)n[0][o]=o;for(var a=1;a<=i;a++)for(var s=e.charAt(a-1),o=1;o<=r;o++){if(a==o&&n[a][o]>4)return i;var u=t.charAt(o-1),c=s==u?0:1,l=n[a-1][o]+1,d=n[a][o-1]+1,f=n[a-1][o-1]+c;d<l&&(l=d),f<l&&(l=f),n[a][o]=l,a>1&&o>1&&s==t.charAt(o-2)&&e.charAt(a-2)==u&&(n[a][o]=Math.min(n[a][o],n[a-2][o-2]+c))}return n[i][r]};
!function(e){
	"function"==typeof define&&define.amd?define(["jquery"],e):e(window.jQuery||window.$)
}(function(e){
	var t,n={
		className:"autosizejs",append:"",callback:!1,resizeDelay:10
		},i='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',
		r=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],
		a=e(i).data("autosize",!0)[0];
	a.style.lineHeight="99px","99px"===e(a).css("lineHeight")&&r.push("lineHeight"),a.style.lineHeight="",
	e.fn.autosize=function(i){
		return i=e.extend({},n,i||{}),a.parentNode!==document.body&&e(document.body).append(a),this.each(function(){function n(){var t,n;"getComputedStyle"in window?(t=window.getComputedStyle(f),n=f.getBoundingClientRect().width,e.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(e,i){n-=parseInt(t[i],10)}),a.style.width=n+"px"):a.style.width=Math.max(p.width(),0)+"px"}function o(){var o={};if(t=f,a.className=i.className,c=parseInt(p.css("maxHeight"),10),e.each(r,function(e,t){o[t]=p.css(t)}),e(a).css(o),n(),window.chrome&&"setSelectionRange"in f){var s=f.selectionStart;f.value+=" ",f.value=f.value.slice(0,-1),f.setSelectionRange(s,s)}}function s(){var e,r;t!==f?o():n(),a.value=f.value+i.append,a.style.overflowY=f.style.overflowY,r=parseInt(f.style.height,10),a.scrollTop=0,a.scrollTop=9e4,e=a.scrollTop,c&&e>c?(f.style.overflowY="scroll",e=c):(f.style.overflowY="hidden",e<l&&(e=l)),e+=h,r!==e&&(f.style.height=e+"px",m&&i.callback.call(f,f))}function u(){clearTimeout(d),d=setTimeout(function(){var e=p.width();e!==y&&(y=e,s())},parseInt(i.resizeDelay,10))}var c,l,d,f=this,p=e(f),h=0,m=e.isFunction(i.callback),g={height:f.style.height,overflow:f.style.overflow,overflowY:f.style.overflowY,wordWrap:f.style.wordWrap,resize:f.style.resize},y=p.width();p.data("autosize")||(p.data("autosize",!0),"border-box"!==p.css("box-sizing")&&"border-box"!==p.css("-moz-box-sizing")&&"border-box"!==p.css("-webkit-box-sizing")||(h=p.outerHeight()-p.height()),l=Math.max(parseInt(p.css("minHeight"),10)-h||0,p.height()),p.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word",resize:"none"===p.css("resize")||"vertical"===p.css("resize")?"none":"horizontal"}),"onpropertychange"in f?"oninput"in f?p.on("input.autosize keyup.autosize",s):p.on("propertychange.autosize",function(){"value"===event.propertyName&&s()}):p.on("input.autosize",s),i.resizeDelay!==!1&&e(window).on("resize.autosize",u),p.on("autosize.resize",s),p.on("autosize.resizeIncludeStyle",function(){t=null,s()}),p.on("autosize.destroy",function(){t=null,clearTimeout(d),e(window).off("resize",u),p.off("autosize").off(".autosize").css(g).removeData("autosize")}),s())})
	}
}),
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(){var t=n(this),o=a.settings;return isNaN(t.datetime)||(0==o.cutoff||r(t.datetime)<o.cutoff)&&e(this).text(i(t.datetime)),this}function n(t){if(t=e(t),!t.data("timeago")){t.data("timeago",{datetime:a.datetime(t)});var n=e.trim(t.text());a.settings.localeTitle?t.attr("title",t.data("timeago").datetime.toLocaleString()):!(n.length>0)||a.isTime(t)&&t.attr("title")||t.attr("title",n)}return t.data("timeago")}function i(e){return a.inWords(r(e))}function r(e){return(new Date).getTime()-e.getTime()}e.timeago=function(t){return i(t instanceof Date?t:"string"==typeof t?e.timeago.parse(t):"number"==typeof t?new Date(t):e.timeago.datetime(t))};var a=e.timeago;e.extend(e.timeago,{settings:{refreshMillis:6e4,allowFuture:!0,localeTitle:!1,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"",seconds:"less than a minute",minute:"1 minute",minutes:"%d minutes",hour:"1 hour",hours:"%d hours",day:"a day",days:"%d days",month:"1 month",months:"%d months",year:"1 year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(t){function n(n,r){var a=e.isFunction(n)?n(r,t):n,o=i.numbers&&i.numbers[r]||r;return a.replace(/%d/i,o)}var i=this.settings.strings,r=i.prefixAgo,a=i.suffixAgo;this.settings.allowFuture&&t<0&&(r=i.prefixFromNow,a=i.suffixFromNow);var o=Math.abs(t)/1e3,s=o/60,u=s/60,c=u/24,l=c/365,d=o<45&&n(i.seconds,Math.round(o))||o<90&&n(i.minute,1)||s<45&&n(i.minutes,Math.round(s))||s<90&&n(i.hour,1)||u<24&&n(i.hours,Math.round(u))||u<42&&n(i.day,1)||c<30&&n(i.days,Math.round(c))||c<45&&n(i.month,1)||c<365&&n(i.months,Math.round(c/30))||l<1.5&&n(i.year,1)||n(i.years,Math.round(l)),f=i.wordSeparator||"";return void 0===i.wordSeparator&&(f=" "),e.trim([r,d,a].join(f))},parse:function(t){var n=e.trim(t);return n=n.replace(/\.\d+/,""),n=n.replace(/-/,"/").replace(/-/,"/"),n=n.replace(/T/," ").replace(/Z/," UTC"),n=n.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(n)},
datetime:function(t){var n=a.isTime(t)?e(t).attr("datetime"):e(t).attr("title");return a.parse(n)},isTime:function(t){return"time"===e(t).get(0).tagName.toLowerCase()}});var o={init:function(){var n=e.proxy(t,this);n();var i=a.settings;i.refreshMillis>0&&setInterval(n,i.refreshMillis)},update:function(n){e(this).data("timeago",{datetime:a.parse(n)}),t.apply(this)},updateFromDOM:function(){e(this).data("timeago",{datetime:a.parse(a.isTime(this)?e(this).attr("datetime"):e(this).attr("title"))}),t.apply(this)}};e.fn.timeago=function(e,t){var n=e?o[e]:o.init;if(!n)throw new Error("Unknown function name '"+e+"' for timeago");return this.each(function(){n.call(this,t)}),this},document.createElement("abbr"),document.createElement("time")});
var wanakana,
	__indexOf=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};
wanakana=wanakana||{},
wanakana.version="1.3.6",
"function"==typeof define&&define.amd&&define("wanakana",[],function(){return wanakana}),
wanakana.LOWERCASE_START=97,
wanakana.LOWERCASE_END=122,
wanakana.UPPERCASE_START=65,
wanakana.UPPERCASE_END=90,
wanakana.HIRAGANA_START=12353,
wanakana.HIRAGANA_END=12438,
wanakana.KATAKANA_START=12449,
wanakana.KATAKANA_END=12538,
wanakana.LOWERCASE_FULLWIDTH_START=65345,
wanakana.LOWERCASE_FULLWIDTH_END=65370,
wanakana.UPPERCASE_FULLWIDTH_START=65313,
wanakana.UPPERCASE_FULLWIDTH_END=65338,
wanakana.defaultOptions={useObseleteKana:!1,IMEMode:!1},
wanakana.bind=function(e){return e.addEventListener("input",wanakana._onInput)},
wanakana.unbind=function(e){return e.removeEventListener("input",wanakana._onInput)},
wanakana._onInput=function(e){var t,n,i,r,a,o;if(t=e.target,a=t.selectionStart,o=t.value.length,i=wanakana._convertFullwidthCharsToASCII(t.value),n=wanakana.toKana(i,{IMEMode:!0}),i!==n){if(t.value=n,"number"==typeof t.selectionStart)return t.selectionStart=t.selectionEnd=t.value.length;if("undefined"!=typeof t.createTextRange)return t.focus(),r=t.createTextRange(),r.collapse(!1),r.select()}},
wanakana._extend=function(e,t){var n;if(null==e)return t;for(n in t)null==e[n]&&null!=t[n]&&(e[n]=t[n]);return e},
wanakana._allTrue=function(e,t){var n,i,r;for(i=0,r=e.length;i<r;i++)if(n=e[i],t(n)===!1)return!1;return!0},
wanakana._isCharInRange=function(e,t,n){var i;return i=e.charCodeAt(0),t<=i&&i<=n},
wanakana._isCharVowel=function(e,t){var n;return null==t&&(t=!0),n=t?/[aeiouy]/:/[aeiou]/,e.toLowerCase().charAt(0).search(n)!==-1},
wanakana._isCharConsonant=function(e,t){var n;return null==t&&(t=!0),n=t?/[bcdfghjklmnpqrstvwxyz]/:/[bcdfghjklmnpqrstvwxz]/,e.toLowerCase().charAt(0).search(n)!==-1},
wanakana._isCharKatakana=function(e){return wanakana._isCharInRange(e,wanakana.KATAKANA_START,wanakana.KATAKANA_END)},
wanakana._isCharHiragana=function(e){return wanakana._isCharInRange(e,wanakana.HIRAGANA_START,wanakana.HIRAGANA_END)},
wanakana._isCharKana=function(e){return wanakana._isCharHiragana(e)||wanakana._isCharKatakana(e)},
wanakana._isCharNotKana=function(e){return!wanakana._isCharHiragana(e)&&!wanakana._isCharKatakana(e)},
wanakana._convertFullwidthCharsToASCII=function(e){var t,n,i,r,a,o;for(n=e.split(""),r=a=0,o=n.length;a<o;r=++a)t=n[r],i=t.charCodeAt(0),wanakana._isCharInRange(t,wanakana.LOWERCASE_FULLWIDTH_START,wanakana.LOWERCASE_FULLWIDTH_END)&&(n[r]=String.fromCharCode(i-wanakana.LOWERCASE_FULLWIDTH_START+wanakana.LOWERCASE_START)),wanakana._isCharInRange(t,wanakana.UPPERCASE_FULLWIDTH_START,wanakana.UPPERCASE_FULLWIDTH_END)&&n[r](String.fromCharCode(i-wanakana.UPPERCASE_FULLWIDTH_START+wanakana.UPPERCASE_START));return n.join("")},
wanakana._katakanaToHiragana=function(e){var t,n,i,r,a,o,s;for(n=[],s=e.split(""),a=0,o=s.length;a<o;a++)r=s[a],wanakana._isCharKatakana(r)?(t=r.charCodeAt(0),t+=wanakana.HIRAGANA_START-wanakana.KATAKANA_START,i=String.fromCharCode(t),n.push(i)):n.push(r);return n.join("")},
wanakana._hiraganaToKatakana=function(e){var t,n,i,r,a,o,s;for(i=[],s=e.split(""),a=0,o=s.length;a<o;a++)n=s[a],wanakana._isCharHiragana(n)?(t=n.charCodeAt(0),t+=wanakana.KATAKANA_START-wanakana.HIRAGANA_START,r=String.fromCharCode(t),i.push(r)):i.push(n);return i.join("")},
wanakana._hiraganaToRomaji=function(e,t){var n,i,r,a,o,s,u,c,l,d;for(t=wanakana._extend(t,wanakana.defaultOptions),o=e.length,l=[],r=0,i=0,s=2,a=function(){return e.substr(r,i)},c=function(){return i=Math.min(s,o-r)};r<o;){for(c();i>0;){if(n=a(),wanakana.isKatakana(n)&&(n=wanakana._katakanaToHiragana(n)),"\u3063"===n.charAt(0)&&1===i&&r<o-1){u=!0,d="";break}if(d=wanakana.J_to_R[n],null!=d&&u&&(d=d.charAt(0).concat(d),u=!1),null!=d)break;i--}null==d&&(d=n),l.push(d),r+=i||1}return l.join("")},
wanakana._romajiToHiragana=function(e,t){return wanakana._romajiToKana(e,t,!0)},
wanakana._romajiToKana=function(e,t,n){var i,r,a,o,s,u,c,l,d,f;for(null==n&&(n=!1),t=wanakana._extend(t,wanakana.defaultOptions),d=e.length,c=[],o=0,f=3,s=function(){return e.substr(o,a)},u=function(e){return wanakana._isCharInRange(e,wanakana.UPPERCASE_START,wanakana.UPPERCASE_END)};o<d;){for(a=Math.min(f,d-o);a>0;){if(i=s(),r=i.toLowerCase(),__indexOf.call(wanakana.FOUR_CHARACTER_EDGE_CASES,r)>=0&&d-o>=4)a++,i=s(),r=i.toLowerCase();else{if("n"===r.charAt(0)){if(t.IMEMode&&"'"===r.charAt(1)&&2===a){l="\u3093";break}wanakana._isCharConsonant(r.charAt(1),!1)&&wanakana._isCharVowel(r.charAt(2))&&(a=1,i=s(),r=i.toLowerCase())}"n"!==r.charAt(0)&&wanakana._isCharConsonant(r.charAt(0))&&i.charAt(0)===i.charAt(1)&&(a=1,r=i=wanakana._isCharInRange(i.charAt(0),wanakana.UPPERCASE_START,wanakana.UPPERCASE_END)?"\u30c3":"\u3063")}if(l=wanakana.R_to_J[r],null!=l)break;4===a?a-=2:a--}null==l&&(i=wanakana._convertPunctuation(i),l=i),(null!=t?t.useObseleteKana:void 0)&&("wi"===r&&(l="\u3090"),"we"===r&&(l="\u3091")),t.IMEMode&&"n"===r.charAt(0)&&("y"===e.charAt(o+1).toLowerCase()&&wanakana._isCharVowel(e.charAt(o+2))===!1||o===d-1||wanakana.isKana(e.charAt(o+1)))&&(l=i.charAt(0)),n||u(i.charAt(0))&&(l=wanakana._hiraganaToKatakana(l)),c.push(l),o+=a||1}return c.join("")},
wanakana._convertPunctuation=function(e){return"\u3000"===e?" ":"-"===e?"\u30fc":e},
wanakana.isHiragana=function(e){var t;return t=e.split(""),wanakana._allTrue(t,wanakana._isCharHiragana)},
wanakana.isKatakana=function(e){var t;return t=e.split(""),wanakana._allTrue(t,wanakana._isCharKatakana)},
wanakana.isKana=function(e){var t;return t=e.split(""),wanakana._allTrue(t,function(e){return wanakana.isHiragana(e)||wanakana.isKatakana(e)})},
wanakana.isRomaji=function(e){
	var t;
	return t=e.split(""),
	wanakana._allTrue(t,function(e){return!wanakana.isHiragana(e)&&!wanakana.isKatakana(e)})
},
wanakana.toHiragana=function(e,t){return wanakana.isRomaji(e)?e=wanakana._romajiToHiragana(e,t):wanakana.isKatakana(e)?e=wanakana._katakanaToHiragana(e,t):e},
wanakana.toKatakana=function(e,t){return wanakana.isHiragana(e)?e=wanakana._hiraganaToKatakana(e,t):wanakana.isRomaji(e)?(e=wanakana._romajiToHiragana(e,t),e=wanakana._hiraganaToKatakana(e,t)):e},
wanakana.toKana=function(e,t){return e=wanakana._romajiToKana(e,t)},
wanakana.toRomaji=function(e){return e=wanakana._hiraganaToRomaji(e)},
wanakana.R_to_J={
	a:"\u3042",i:"\u3044",u:"\u3046",e:"\u3048",o:"\u304a",yi:"\u3044",wu:"\u3046",whu:"\u3046",xa:"\u3041",xi:"\u3043",xu:"\u3045",xe:"\u3047",xo:"\u3049",xyi:"\u3043",xye:"\u3047",ye:"\u3044\u3047",wha:"\u3046\u3041",whi:"\u3046\u3043",whe:"\u3046\u3047",who:"\u3046\u3049",wi:"\u3046\u3043",we:"\u3046\u3047",va:"\u3094\u3041",vi:"\u3094\u3043",vu:"\u3094",ve:"\u3094\u3047",vo:"\u3094\u3049",vya:"\u3094\u3083",vyi:"\u3094\u3043",vyu:"\u3094\u3085",vye:"\u3094\u3047",vyo:"\u3094\u3087",ka:"\u304b",ki:"\u304d",ku:"\u304f",ke:"\u3051",ko:"\u3053",lka:"\u30f5",lke:"\u30f6",xka:"\u30f5",xke:"\u30f6",kya:"\u304d\u3083",kyi:"\u304d\u3043",kyu:"\u304d\u3085",kye:"\u304d\u3047",kyo:"\u304d\u3087",ca:"\u304b",ci:"\u304d",cu:"\u304f",ce:"\u3051",co:"\u3053",lca:"\u30f5",lce:"\u30f6",xca:"\u30f5",xce:"\u30f6",qya:"\u304f\u3083",qyu:"\u304f\u3085",qyo:"\u304f\u3087",qwa:"\u304f\u3041",qwi:"\u304f\u3043",qwu:"\u304f\u3045",qwe:"\u304f\u3047",qwo:"\u304f\u3049",qa:"\u304f\u3041",qi:"\u304f\u3043",qe:"\u304f\u3047",qo:"\u304f\u3049",kwa:"\u304f\u3041",qyi:"\u304f\u3043",qye:"\u304f\u3047",ga:"\u304c",gi:"\u304e",gu:"\u3050",ge:"\u3052",go:"\u3054",gya:"\u304e\u3083",gyi:"\u304e\u3043",gyu:"\u304e\u3085",gye:"\u304e\u3047",gyo:"\u304e\u3087",gwa:"\u3050\u3041",gwi:"\u3050\u3043",gwu:"\u3050\u3045",gwe:"\u3050\u3047",gwo:"\u3050\u3049",sa:"\u3055",si:"\u3057",shi:"\u3057",su:"\u3059",se:"\u305b",so:"\u305d",za:"\u3056",zi:"\u3058",zu:"\u305a",ze:"\u305c",zo:"\u305e",ji:"\u3058",sya:"\u3057\u3083",syi:"\u3057\u3043",syu:"\u3057\u3085",sye:"\u3057\u3047",syo:"\u3057\u3087",sha:"\u3057\u3083",shu:"\u3057\u3085",she:"\u3057\u3047",sho:"\u3057\u3087",shya:"\u3057\u3083",shyu:"\u3057\u3085",shye:"\u3057\u3047",shyo:"\u3057\u3087",swa:"\u3059\u3041",swi:"\u3059\u3043",swu:"\u3059\u3045",swe:"\u3059\u3047",swo:"\u3059\u3049",zya:"\u3058\u3083",zyi:"\u3058\u3043",zyu:"\u3058\u3085",zye:"\u3058\u3047",zyo:"\u3058\u3087",ja:"\u3058\u3083",ju:"\u3058\u3085",je:"\u3058\u3047",jo:"\u3058\u3087",jya:"\u3058\u3083",jyi:"\u3058\u3043",jyu:"\u3058\u3085",jye:"\u3058\u3047",jyo:"\u3058\u3087",ta:"\u305f",ti:"\u3061",tu:"\u3064",te:"\u3066",to:"\u3068",chi:"\u3061",tsu:"\u3064",ltu:"\u3063",xtu:"\u3063",tya:"\u3061\u3083",tyi:"\u3061\u3043",tyu:"\u3061\u3085",tye:"\u3061\u3047",tyo:"\u3061\u3087",cha:"\u3061\u3083",chu:"\u3061\u3085",che:"\u3061\u3047",cho:"\u3061\u3087",cya:"\u3061\u3083",cyi:"\u3061\u3043",cyu:"\u3061\u3085",cye:"\u3061\u3047",cyo:"\u3061\u3087",chya:"\u3061\u3083",chyu:"\u3061\u3085",chye:"\u3061\u3047",chyo:"\u3061\u3087",tsa:"\u3064\u3041",tsi:"\u3064\u3043",tse:"\u3064\u3047",tso:"\u3064\u3049",tha:"\u3066\u3083",thi:"\u3066\u3043",thu:"\u3066\u3085",the:"\u3066\u3047",tho:"\u3066\u3087",twa:"\u3068\u3041",twi:"\u3068\u3043",twu:"\u3068\u3045",twe:"\u3068\u3047",two:"\u3068\u3049",da:"\u3060",di:"\u3062",du:"\u3065",de:"\u3067","do":"\u3069",dya:"\u3062\u3083",dyi:"\u3062\u3043",dyu:"\u3062\u3085",dye:"\u3062\u3047",dyo:"\u3062\u3087",dha:"\u3067\u3083",dhi:"\u3067\u3043",dhu:"\u3067\u3085",dhe:"\u3067\u3047",dho:"\u3067\u3087",dwa:"\u3069\u3041",dwi:"\u3069\u3043",dwu:"\u3069\u3045",dwe:"\u3069\u3047",dwo:"\u3069\u3049",na:"\u306a",ni:"\u306b",nu:"\u306c",ne:"\u306d",no:"\u306e",nya:"\u306b\u3083",nyi:"\u306b\u3043",nyu:"\u306b\u3085",nye:"\u306b\u3047",nyo:"\u306b\u3087",ha:"\u306f",hi:"\u3072",hu:"\u3075",he:"\u3078",ho:"\u307b",fu:"\u3075",hya:"\u3072\u3083",hyi:"\u3072\u3043",hyu:"\u3072\u3085",hye:"\u3072\u3047",hyo:"\u3072\u3087",fya:"\u3075\u3083",fyu:"\u3075\u3085",fyo:"\u3075\u3087",fwa:"\u3075\u3041",fwi:"\u3075\u3043",fwu:"\u3075\u3045",fwe:"\u3075\u3047",fwo:"\u3075\u3049",fa:"\u3075\u3041",fi:"\u3075\u3043",fe:"\u3075\u3047",fo:"\u3075\u3049",fyi:"\u3075\u3043",fye:"\u3075\u3047",ba:"\u3070",bi:"\u3073",bu:"\u3076",be:"\u3079",bo:"\u307c",bya:"\u3073\u3083",byi:"\u3073\u3043",byu:"\u3073\u3085",bye:"\u3073\u3047",byo:"\u3073\u3087",pa:"\u3071",pi:"\u3074",pu:"\u3077",pe:"\u307a",po:"\u307d",pya:"\u3074\u3083",pyi:"\u3074\u3043",pyu:"\u3074\u3085",pye:"\u3074\u3047",pyo:"\u3074\u3087",ma:"\u307e",mi:"\u307f",mu:"\u3080",me:"\u3081",mo:"\u3082",mya:"\u307f\u3083",myi:"\u307f\u3043",myu:"\u307f\u3085",mye:"\u307f\u3047",myo:"\u307f\u3087",ya:"\u3084",yu:"\u3086",yo:"\u3088",xya:"\u3083",xyu:"\u3085",xyo:"\u3087",ra:"\u3089",ri:"\u308a",ru:"\u308b",re:"\u308c",ro:"\u308d",rya:"\u308a\u3083",ryi:"\u308a\u3043",ryu:"\u308a\u3085",rye:"\u308a\u3047",ryo:"\u308a\u3087",la:"\u3089",li:"\u308a",lu:"\u308b",le:"\u308c",lo:"\u308d",lya:"\u308a\u3083",lyi:"\u308a\u3043",lyu:"\u308a\u3085",lye:"\u308a\u3047",lyo:"\u308a\u3087",wa:"\u308f",wo:"\u3092",lwe:"\u308e",xwa:"\u308e",n:"\u3093",nn:"\u3093","n ":"\u3093",xn:"\u3093",ltsu:"\u3063"
},
wanakana.FOUR_CHARACTER_EDGE_CASES=["lts","chy","shy"],
wanakana.J_to_R={
	"\u3042":"a","\u3044":"i","\u3046":"u","\u3048":"e","\u304a":"o","\u3094\u3041":"va","\u3094\u3043":"vi","\u3094":"vu","\u3094\u3047":"ve","\u3094\u3049":"vo","\u304b":"ka","\u304d":"ki","\u304d\u3083":"kya","\u304d\u3043":"kyi","\u304d\u3085":"kyu","\u304f":"ku","\u3051":"ke","\u3053":"ko","\u304c":"ga","\u304e":"gi","\u3050":"gu","\u3052":"ge","\u3054":"go","\u304e\u3083":"gya","\u304e\u3043":"gyi","\u304e\u3085":"gyu","\u304e\u3047":"gye","\u304e\u3087":"gyo","\u3055":"sa","\u3059":"su","\u305b":"se","\u305d":"so","\u3056":"za","\u305a":"zu","\u305c":"ze","\u305e":"zo","\u3057":"shi","\u3057\u3083":"sha","\u3057\u3085":"shu","\u3057\u3087":"sho","\u3058":"ji","\u3058\u3083":"ja","\u3058\u3085":"ju","\u3058\u3087":"jo","\u305f":"ta","\u3061":"chi","\u3061\u3083":"cha","\u3061\u3085":"chu","\u3061\u3087":"cho","\u3064":"tsu","\u3066":"te","\u3068":"to","\u3060":"da","\u3062":"di","\u3065":"du","\u3067":"de","\u3069":"do","\u306a":"na","\u306b":"ni","\u306b\u3083":"nya","\u306b\u3085":"nyu","\u306b\u3087":"nyo","\u306c":"nu","\u306d":"ne","\u306e":"no","\u306f":"ha","\u3072":"hi","\u3075":"fu","\u3078":"he","\u307b":"ho","\u3072\u3083":"hya","\u3072\u3085":"hyu","\u3072\u3087":"hyo","\u3075\u3041":"fa","\u3075\u3043":"fi","\u3075\u3047":"fe","\u3075\u3049":"fo","\u3070":"ba","\u3073":"bi","\u3076":"bu","\u3079":"be","\u307c":"bo","\u3073\u3083":"bya","\u3073\u3085":"byu","\u3073\u3087":"byo","\u3071":"pa","\u3074":"pi","\u3077":"pu","\u307a":"pe","\u307d":"po","\u3074\u3083":"pya","\u3074\u3085":"pyu","\u3074\u3087":"pyo","\u307e":"ma","\u307f":"mi","\u3080":"mu","\u3081":"me","\u3082":"mo","\u307f\u3083":"mya","\u307f\u3085":"myu","\u307f\u3087":"myo","\u3084":"ya","\u3086":"yu","\u3088":"yo","\u3089":"ra","\u308a":"ri","\u308b":"ru","\u308c":"re","\u308d":"ro","\u308a\u3083":"rya","\u308a\u3085":"ryu","\u308a\u3087":"ryo","\u308f":"wa","\u3092":"wo","\u3093":"n","\u3090":"wi","\u3091":"we","\u304d\u3047":"kye","\u304d\u3087":"kyo","\u3058\u3043":"jyi","\u3058\u3047":"jye","\u3061\u3043":"cyi","\u3061\u3047":"che","\u3072\u3043":"hyi","\u3072\u3047":"hye","\u3073\u3043":"byi","\u3073\u3047":"bye","\u3074\u3043":"pyi","\u3074\u3047":"pye","\u307f\u3047":"mye","\u307f\u3043":"myi","\u308a\u3043":"ryi","\u308a\u3047":"rye","\u306b\u3043":"nyi","\u306b\u3047":"nye","\u3057\u3043":"syi","\u3057\u3047":"she","\u3044\u3047":"ye","\u3046\u3041":"wha","\u3046\u3049":"who","\u3046\u3043":"wi","\u3046\u3047":"we","\u3094\u3083":"vya","\u3094\u3085":"vyu","\u3094\u3087":"vyo","\u3059\u3041":"swa","\u3059\u3043":"swi","\u3059\u3045":"swu","\u3059\u3047":"swe","\u3059\u3049":"swo","\u304f\u3083":"qya","\u304f\u3085":"qyu","\u304f\u3087":"qyo","\u304f\u3041":"qwa","\u304f\u3043":"qwi","\u304f\u3045":"qwu","\u304f\u3047":"qwe","\u304f\u3049":"qwo","\u3050\u3041":"gwa","\u3050\u3043":"gwi","\u3050\u3045":"gwu","\u3050\u3047":"gwe","\u3050\u3049":"gwo","\u3064\u3041":"tsa","\u3064\u3043":"tsi","\u3064\u3047":"tse","\u3064\u3049":"tso","\u3066\u3083":"tha","\u3066\u3043":"thi","\u3066\u3085":"thu","\u3066\u3047":"the","\u3066\u3087":"tho","\u3068\u3041":"twa","\u3068\u3043":"twi","\u3068\u3045":"twu","\u3068\u3047":"twe","\u3068\u3049":"two","\u3062\u3083":"dya","\u3062\u3043":"dyi","\u3062\u3085":"dyu","\u3062\u3047":"dye","\u3062\u3087":"dyo","\u3067\u3083":"dha","\u3067\u3043":"dhi","\u3067\u3085":"dhu","\u3067\u3047":"dhe","\u3067\u3087":"dho","\u3069\u3041":"dwa","\u3069\u3043":"dwi","\u3069\u3045":"dwu","\u3069\u3047":"dwe","\u3069\u3049":"dwo","\u3075\u3045":"fwu","\u3075\u3083":"fya","\u3075\u3085":"fyu","\u3075\u3087":"fyo","\u3041":"a","\u3043":"i","\u3047":"e","\u3045":"u","\u3049":"o","\u3083":"ya","\u3085":"yu","\u3087":"yo","\u3063":"","\u3095":"ka","\u3096":"ka","\u308e":"wa","\u3000":" ","\u3093\u3042":"n'a","\u3093\u3044":"n'i","\u3093\u3046":"n'u","\u3093\u3048":"n'e","\u3093\u304a":"n'o","\u3093\u3084":"n'ya","\u3093\u3086":"n'yu","\u3093\u3088":"n'yo"
},
	function(){// Notes
		var e,t,n;
		this.Notes={},
		this.Notes.add=e=function(e,t,n,i,r){
			return $("<div></div>",{"class":"note-"+t+" noSwipe",html:Notes.format(i,"html")}).appendTo(r),Notes.click(e,t,n)
		},
		this.Notes.format=n=function(e,t){
			switch(t){
				case"html":
					return e?e.replace(/\n/g,"<br>"):"Click to add note";
				case"input":return e?(e="Click to add note"===e?"":e,e.replace(/<br>/g,"\n")):""
			}
		},
		this.Notes.click=t=function(e,t,n){
			var i,r,a,o,s;
			return s=$(".note-"+t),r=$.jStorage.get("l/note/"+e.substring(0,3)+"/"+t.substring(0,1)+"/"+n)||"",
			i=function(){
				var e,t;return t=s.find("button[type=submit]"),e=s.find("textarea"),
				t.after('<span class="counter-note" title="Characters Remaining">'+(e.attr("maxlength")-e.val().length)+' <i class="icon-pencil"></i></span>'),e.off,e.on("propertychange input textInput",function(){var e;return e=$(this).attr("maxlength")-$(this).val().length,e<0&&(e=0),s.find(".counter-note").html(e+' <i class="icon-pencil"></i>'),0===$(this).val().length?t.text("Remove"):t.text("Save")})
			},
			a=function(){
				var e;
				return e=s.find(".btn-cancel"),e.off("click"),e.on("click",function(e){
					return e.preventDefault(),setTimeout(function(){return s.find("form").remove(),s.html(Notes.format(r,"html"))},100)
				})
			},
			o=function(e,t,n){
				var i;
				return i=s.find("button[type=submit]"),
				i.off("click"),
				i.on("click",function(a){
					return a.preventDefault(),s.find(".processing-note").delay(100).show(0),$.ajax({type:"POST",url:"/note/create/",contentType:"application/json",data:JSON.stringify({item_type:e,id:n,note_type:t,note:s.find("textarea").val()})}).success(function(i){if(r=Notes.format(i.sanitized_note,"html"),s.empty().html(r),$("#lessons"))return $.jStorage.set("l/note/"+e.substring(0,3)+"/"+t.substring(0,1)+"/"+n,i.sanitized_note),$.jStorage.setTTL("l/note/"+e.substring(0,3)+"/"+t.substring(0,1)+"/"+n,72e5)}).fail(function(){return $(".processing-note").delay(300).hide(0),i.addClass("error-note-button").text("Error Adding Note. Retry?")})
				})
			},
			s.off("click"),
			s.on("click",function(){
				var r,u,c,l;return 0===s.find("form").size()?(c=Notes.format($(this).html(),"input"),$(this).empty(),u=$("<form></form>").appendTo($(this)),r=$("<fieldset></fieldset>").appendTo(u),
				l=$("<textarea></textarea>",{maxlength:500,placeholder:"Add a note",text:c}).appendTo(r).autosize({append:"\n"}),$("<button></button>",{"class":"btn-cancel",text:"Cancel"}).appendTo(r),$("<button></button>",{type:"submit",text:"Save"}).appendTo(r),i(l),o(e,t,n),a()):s.find("textarea").focus()
			})
		}
	}.call(this),
	function(){// UserSynonyms
		this.UserSynonyms={},
		this.UserSynonyms.load=function(e,t,n,i){
			return UserSynonyms.generateList(t),UserSynonyms.addOption(e,n,i),UserSynonyms.removeOption(e,n,i)
		},
		this.UserSynonyms.addOption=function(e,t,n){
			var i,r;return i=$(".user-synonyms-add-btn"),r=UserSynonyms.wrapper(),i.off("click"),i.on("click",function(){var a,o,s,u,c;return $(this).hide(),s=$("<li></li>",{"class":"user-synonyms-add-form"}).appendTo(r),u=$("<form></form>").appendTo(s),c=$("<input></input>",{type:"text",autocapitalize:"off",autocomplete:"off",autocorrect:"off"}).appendTo(u).focus(),o=$("<button></button>",{type:"submit",text:"Add"}).appendTo(u),a=$("<button></button>",{type:"button",html:'<i class="icon-remove"></i>'}).appendTo(u),o.off("click"),o.on("click",function(a){var u,l,d;return a.preventDefault(),u=c.val(),l=r.find("li"),d=u.length+l.slice(0,l.size()-1).text().length,d>255?o.attr("disabled","disabled").text("Exceeded Synonym Limit"):0!==u.trim().length&&$.ajax({type:"POST",url:"/user_synonym/create/",contentType:"application/json",data:JSON.stringify({item_type:e,item_id:t,synonym:c.val()})}).success(function(a){
					var o,u,c;
				return c=$("<li></li>",{text:a.user_synonym}),
				n&&(u=$.jStorage.get("currentItem"),
	o=$.grep($.jStorage.get("activeQueue"),function(e){return e.id!==u.id}),u.syn.push(a.user_synonym),o.push(u),$.jStorage.set("activeQueue",o)),
	r.find("li:last").prev().before(c),s.remove(),i.show(),UserSynonyms.removeOption(e,t)}).fail(function(){return!1})}),a.off("click"),a.on("click",function(e){return e.preventDefault(),s.remove(),i.show()})})
		},
		this.UserSynonyms.generateList=function(e){
			var t,n,i,r,a;for($(".user-synonyms").append($("<ul></ul>")),a=UserSynonyms.wrapper(),e||(e=""),i=UserSynonyms.stringToArray(e),t=0,n=i.length;t<n;t++)r=i[t],$("<li></li>",{text:r,title:"Click to remove synonym"}).appendTo(a);return $("<li></li>",{html:"&nbsp;",title:"Add your own synonym","class":"user-synonyms-add-btn"}).appendTo(a)
		},
		this.UserSynonyms.removeOption=function(e,t,n){
			var i;return i=UserSynonyms.wrapper().find("li:not(.user-synonyms-add-btn):not(.user-synonyms-add-form)"),i.off("click"),i.on("click",function(){var i;return i=$(this),$.ajax({type:"DELETE",url:"/user_synonym/destroy/",contentType:"application/json",data:JSON.stringify({item_type:e,item_id:t,synonym:$(this).text()})}).success(function(e){var t,r;return n&&(r=$.jStorage.get("currentItem"),t=$.grep($.jStorage.get("activeQueue"),function(e){return e.id!==r.id}),r.syn.splice($.inArray(e.user_synonym_destroyed,r.syn),1),t.push(r),$.jStorage.set("activeQueue",t)),i.remove()}).fail(function(){return!1})})
		},
		this.UserSynonyms.stringToArray=function(e){
			return 0===e.length?[]:e.split(",")
		},
		this.UserSynonyms.wrapper=function(){
			return $(".user-synonyms ul")
		}
	}.call(this),
	function(){// additionalContent
		var e,t,n,i,r,a,o,s,u;
		this.additionalContent={},
		this.additionalContent.audio=e=function(t){
			var n,i,r,a;if(r=$.jStorage.get("currentItem"),a=$.jStorage.get("questionType"),$("audio").remove(),r.aud&&"reading"===a)return i=$("#option-audio"),n=i.find("button"),t=t,$("#answer-form fieldset").hasClass("correct")||(t=!1),n.removeAttr("disabled"),e=$("<audio></audio>",{autoplay:t}).appendTo(i.removeClass("disabled").children("span")),$("<source></source>",{src:"https://cdn.wanikani.com/audio/"+r.aud,type:"audio/mpeg"}).appendTo(e),$("<source></source>",{src:"https://cdn.wanikani.com/audio/"+r.aud.replace(".mp3",".ogg"),type:"audio/ogg"}).appendTo(e),e[0].addEventListener("play",function(){return n.removeClass("audio-idle").addClass("audio-play")}),e[0].addEventListener("ended",function(){return n.removeClass("audio-play").addClass("audio-idle")}),n.off("click"),n.on("click",function(){return e[0].play()}),i.off("click"),i.on("click",function(){if($("#user-response").is(":disabled"))return $("audio").trigger("play"),!1})
		},
		this.additionalContent.load=s=function(){
			return additionalContent.menu(),additionalContent.itemInfo()
		},
		this.additionalContent.menu=u=function(){
			var e,t,n,i;return e=["kana-chart","item-info","home","last-items","wrap-up"],i=$("#additional-content li"),t=$("#information"),n=$("#user-response"),i.click(function(){var r,a;if(a=$(this).attr("id").replace("option-",""),$(this).hasClass("inactive"))return!1;if($.inArray(a,e)>=0){if("home"===a)return location.href="/review";if("wrap-up"===a)return $(this).hasClass("wrap-up-selected")?($(this).removeClass("wrap-up-selected"),
			$.jStorage.deleteKey("r/wrap-up"),$("#wrap-up-countdown").empty()):(r=($.jStorage.get("activeQueue")||[]).length,$.jStorage.set("r/wrap-up",!0),$("#wrap-up-countdown").text(r),$(this).addClass("wrap-up-selected"));if(!$(this).hasClass("active")){if(!n.is(":disabled")&&"item-info"===a)return;return t.show().children().hide(),"last-items"===a&&($("#additional-content-load").show(),lastItems.load()),$("html, body").animate({scrollTop:n.offset().top-10},200),i.removeClass("active"),$(this).addClass("active"),$("#"+a).fadeIn(300)}if(i.removeClass("active"),t.hide().children().hide(),$("html, body").animate({scrollTop:0},200),"last-items"===a)return lastItems.clear()}})
		},
		this.additionalContent.itemInfo=a=function(){
			var e,t;return e=function(e){switch(e){case"radical":return/\[(?:radical)\]/gi;case"kanji":return/\[(?:kanji)\]/gi;case"vocabulary":return/\[(?:vocabulary)\]/gi;case"meaning":return/\[(?:meaning)\]/gi;case"reading":return/\[(?:reading)\]/gi;case"ja":return/\[(?:ja)\]/gi;case"closeTagSpan":return/\[\/(?:radical|kanji|vocabulary|meaning|reading|ja)\]/gi}},t=function(t){var n,i,r;t=t.replace("\r\n","<br><br>"),i=["radical","kanji","vocabulary","meaning","reading","ja","closeTagSpan"];for(n in i)r=i[n],t=function(){switch(r){case"ja":return t.replace(e(r),'<span lang="ja">');case"closeTagSpan":return t.replace(e(r),"</span>");default:return t.replace(e(r),'<span class="highlight-'+r+'">')}}();return t},$("#option-item-info").click(function(){var e,n,i,r,o,s;if(a=$("#item-info"),i=$.jStorage.get("currentItem"),o=$.jStorage.get("questionType"),r=i.rad?"r":i.kan?"k":i.voc?"v":void 0,a.is(":visible")&&(a.data("question-type")!==o||a.data("id")!==r+i.id)){if($("#additional-content-load").show(),e=$("#item-info-col1"),n=$("#item-info-col2"),e.empty(),n.empty(),i.rad)return s="/json/radical/"+i.id,$.getJSON(s,function(r){return r.mnemonic=t(r.mnemonic),e.html("<section><h2>Name</h2>"+r.en+'</section><section class="user-synonyms"><h2>User Synonyms</h2></section>'),n.html("<section><h2>Mnemonics</h2>"+r.mnemonic+'</section><section id="note-meaning"><h2>Name Note</h2></section>'),UserSynonyms.load("radical",i.syn.join(),i.id,!0),Notes.add("radical","meaning",i.id,r.meaning_note,$("#note-meaning")),$("#all-info").hide(),$("#additional-content-load").fadeOut(200),a.data("id","r"+i.id),a.data("question-type",o)}).fail(function(){return $("#information-offline").show(),a.hide()});if(i.kan)return s="/json/kanji/"+i.id,$.getJSON(s,function(r){var s,u,c,l,d,f;l=function(){switch(i.emph){case"kunyomi":return i.kun;case"onyomi":return i.on;case"nanori":return i.nanori}}(),r.meaning_mnemonic=t(r.meaning_mnemonic),r.reading_mnemonic=t(r.reading_mnemonic),r.meaning_hint=t(r.meaning_hint),r.reading_hint=t(r.reading_hint),f="",d=r.related;for(c in d)u=d[c],s=u.custom_font_name?'<i class="radical-'+u.custom_font_name+'"></i>':/.png/i.test(u.rad)?'<img src="https://cdn.wanikani.com/images/radicals/'+u.rad+'">':u.rad,f+='<li><a title="View radical information page" target="_blank" href="/radicals/'+u.slug+'"><span class="radical" lang="ja">'+s+"</span> "+u.en.split(",")[0]+"</li>";return e.html('<section id="item-info-meaning"><h2>Meanings</h2>'+r.en+'</section><section class="user-synonyms"><h2>User Synonyms</h2></section><section id="item-info-reading"><h2>Important Readings ('+i.emph+')</h2><span lang="ja">'+l+'</span></section><section id="related-items"><h2>Radical Combination</h2><ul class="radical">'+f+"</ul></section>"),n.html('<section id="item-info-meaning-mnemonic"><h2>Meaning Mnemonic</h2>'+r.meaning_mnemonic+'<blockquote><h3><i class="icon-question-sign"></i> HINT</h3>'+r.meaning_hint+'</blockquote></section><section id="note-meaning"><h2>Meaning Note</h2></section><section id="item-info-reading-mnemonic"><h2>Reading Mnemonic</h2>'+r.reading_mnemonic+'<blockquote><h3><i class="icon-question-sign"></i> HINT</h3>'+r.reading_hint+'</blockquote></section><section id="note-reading"><h2>Reading Note</h2></section>'),
			$("#item-info-meaning-mnemonic blockquote").text().trim().length>0&&$("#item-info-meaning-mnemonic blockquote").hide(),$("#item-info-reading-mnemonic blockquote").text().trim().length>0&&$("#item-info-reading-mnemonic blockquote").hide(),
			Notes.add("kanji","meaning",i.id,r.meaning_note,$("#note-meaning")),Notes.add("kanji","reading",i.id,r.reading_note,$("#note-reading")),UserSynonyms.load("kanji",i.syn.join(),i.id,!0),"meaning"===o?$("#item-info-reading, #item-info-reading-mnemonic, #note-reading").hide():$("#item-info-meaning, #item-info-meaning-mnemonic, #note-meaning, .user-synonyms").hide(),$("#all-info").show(),$("#additional-content-load").fadeOut(200),a.data("id","k"+i.id),a.data("question-type",o)}).fail(function(){return $("#information-offline").show(),a.hide()});if(i.voc)return s="/json/vocabulary/"+i.id,$.getJSON(s,function(r){var s,u,c,l,d,f,p;r.meaning_explanation=t(r.meaning_explanation),r.reading_explanation=t(r.reading_explanation),f="",d=r.related;for(l in d)c=d[l],f+='<li><a title="View kanji information page" target="_blank" href="/kanji/'+c.slug+'"><span class="kanji" lang="ja">'+c.kan+"</span> "+c.en+"</a></li>";return s=0===r.sentences.length?"<p>N/A</p>":(u=function(){var e,t,n,i;for(n=r.sentences,i=[],e=0,t=n.length;e<t;e++)p=n[e],i.push('<div class="context-sentence-group"><p lang="ja">'+p[0]+"</p><p>"+p[1]+"</p></div>");return i}(),u.join("")),e.html('<section id="item-info-meaning"><h2>Meanings</h2>'+r.en+'</section><section class="user-synonyms"><h2>User Synonyms</h2></section><section id="item-info-reading"><h2>Reading</h2><span lang="ja">'+r.kana+'</span></section><section id="part-of-speech"><h2>Part of Speech</h2>'+r.part_of_speech+'</section><section id="related-items"><h2>Related Kanji</h2><ul class="kanji">'+f+"</ul></section>"),
n.html('<section id="item-info-meaning-mnemonic"><h2>Meaning Explanation</h2>'+r.meaning_explanation+'</section><section id="note-meaning"><h2>Meaning Note</h2></section><section id="item-info-reading-mnemonic"><h2>Reading Explanation</h2>'+r.reading_explanation+'</section><section id="note-reading"><h2>Reading Note</h2></section><section id="item-info-context-sentences"><h2>Context Sentence</h2>'+s+"</section>"),Notes.add("vocabulary","meaning",i.id,r.meaning_note,$("#note-meaning")),Notes.add("vocabulary","reading",i.id,r.reading_note,$("#note-reading")),UserSynonyms.load("vocabulary",i.syn.join(),i.id,!0),"meaning"===o?$("#item-info-reading, #item-info-reading-mnemonic, #note-reading").hide():$("#item-info-meaning, #item-info-meaning-mnemonic, #note-meaning, .user-synonyms").hide(),$("#all-info").show(),$("#additional-content-load").fadeOut(200),a.data("id","v"+i.id),a.data("question-type",o)}).fail(function(){return $("#information-offline").show(),a.hide()})}})
		},
		this.additionalContent.closeItemInfo=t=function(){
			if($("#item-info").is(":visible"))return $("#information").hide().children().hide(),$("#option-item-info").removeClass()
		},
		this.additionalContent.enableButtons=r=function(){
			return $("#option-item-info").removeClass(),additionalContent.audio(audioAutoplay)
		},
		this.additionalContent.disableAudio=n=function(){
			return $("#option-audio").addClass("disabled"),$("#option-audio button").prop("disabled","disabled")
		},
		this.additionalContent.disableItemInfo=i=function(){
			return $("#item-info").is(":visible")&&($("#information").hide(),$("#option-item-info").removeClass()),$("#option-item-info").addClass("disabled")
		},
		this.additionalContent.itemInfoAllButton=o=function(){
			var e;return e=$("#all-info"),e.click(function(){
				return $("html, body").animate({scrollTop:$("#additional-content").offset().top-20},200),
					$("#item-info section").fadeIn(300),
				e.hide()
			})
		}
	}.call(this),
	function(){// answerChecker
		var e,t,n,i,r,a;
		this.answerChecker={},
		this.answerChecker.evaluate=n=function(e,t){
			var n,i,r,a,o,s,u,c,l,d,f;
			if(
				r=[],
				s=[],
				a=$.jStorage.get("currentItem"),
				n=!1,
				l=!1,
				c=!1,
				o=!1,
				t=$.trim(t),
				"reading"===e&&(t=t.replace("n","\u3093")),
				$("#user-response").val(t),
			"reading"===e){
				if(a.kan){
					switch(a.emph){
						case"onyomi":
							r=a.on,s=a.kun.concat(a.nanori);
							break;
						case"kunyomi":
							r=a.kun,s=a.on.concat(a.nanori);
							break;
						case"nanori":
							r=a.nanori,s=a.kun.concat(a.on)
					}
					o=answerChecker.checkIfOtherKanjiReading(t,s,r)
				}
				else a.voc&&(r=a.kana);
				r.length>1&&(c=!0),
				t=answerChecker.stringFormat(t);
				for(u in r)i=r[u],t===i&&(l=!0,n=!0)
			}
			else{
				r=$.merge(a.en,a.syn),
				r.length>1&&(c=!0),
				t=answerChecker.stringFormat(t);
				for(u in r)
					i=r[u],i=answerChecker.stringFormat(i),f=levenshteinDistance(i,t),d=answerChecker.distanceTolerance(i),f<=d&&(l=!0),0===f&&(n=!0)
			}
			return{
				passed:l,accurate:n,multipleAnswers:c,exception:o
			}
		},
		this.answerChecker.checkIfOtherKanjiReading=e=function(e,t,n){
			var i,r,a;a=!1;
			for(r in t)i=t[r],e===i.replace(/\..*/,"")&&(a=!0);
			for(r in n)i=n[r],e===i&&(a=!1);
			return a
		},
		this.answerChecker.isAsciiPresent=i=function(e){
			return e="n"===e[e.length-1]?e.slice(0,-1):e,/[\\000-\177]/.test(e)
		},
		this.answerChecker.isNonAsciiPresent=r=function(e){
			var t;return t=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f]/,t.test(e)
		},
		this.answerChecker.stringFormat=a=function(e){
			return e=e.toLowerCase().replace("-"," ").replace(".","").replace("'","").replace("/",""),"s"===e.substr(-1)&&(e=e.slice(0,-1)),e
		},
		this.answerChecker.distanceTolerance=t=function(e){
			switch(e.length){case 1:case 2:case 3:return 0;case 4:case 5:return 1;case 6:case 7:return 2;default:return 2+1*Math.floor(e.length/7)}
		}
	}.call(this),
	function(){// hotKeys
		var e,t,n;
		this.hotKeys={},
		this.hotKeys.keyBinds=e=function(){
			var e,t;
			return t=$("#user-response"),
				e=$("#answer-form button"),
				$(document).on("keydown.reviewScreen",function(n){
					if($("#reviews").is(":visible")&&!$('[class^="note-"] textarea').is(":focus")&&!$(".user-synonyms input").is(":focus"))
						switch(n.keyCode){
							case 8:
								if(!t.is(":focus"))return!1;
								break;
							case 13:
								if(t.is(":enabled")&&!t.is(":focus"))return t.focus(),!1;
								if(t.is(":disabled"))return $(window).scrollTop(0),e.trigger("click"),t.prop("disabled",!1),!1;
								break;
							case 32:
								if($("#item-info").is(":visible"))return $("#all-info").trigger("click");
								break;
							case 70:
								if(t.is(":disabled"))return $("#option-item-info").trigger("click"),!1;
								break;
							case 74:
								if(t.is(":disabled"))return $("audio").trigger("play"),!1;
								break;
							case 188:
								return $("#option-last-items").trigger("click"),!1
						}
				}),
			$(document).on("keypress.reviewScreen",function(e){
				if(!$('[class^="note-"] textarea').is(":focus")&&!$(".user-synonyms input").is(":focus"))
					switch(e.charCode){
						case 47:
							return $("#option-kana-chart").trigger("click"),!1
					}
			})
		},
		this.hotKeys.load=t=function(){return hotKeys.keyBinds(),hotKeys.renderView()},
		this.hotKeys.renderView=n=function(){
			var e,t,n;
			return n=$("#hotkeys"),
				t=$("#hotkeys table"),
				e=$("#hotkeys-header span"),
				$("#hotkeys a").click(function(){
					return n.trigger("click"),!1
				}),
			n.click(function(){
				return t.is(":visible")?(t.hide(),e.hide(),$("footer").css("z-index","0")):($("footer").css("z-index","100"),t.show(),e.show())
			})
		}
	}.call(this),
	function(){// idleTime
		var e,t,n,i,r;
		this.idleTime={},
		t=0,
		this.idleTime.load=i=function(){return idleTime.core()},
		this.idleTime.core=e=function(){
			return $(document).ready(function(){
				var e;
				return e=setInterval("idleTime.increment()",6e4),$(this).mousemove(function(){return t=0}),$(this).keypress(function(){return t=0})
			})
		},
		this.idleTime.increment=n=function(){var e;if(e=$("#timeout"),t+=1,t>9&&e.is(":hidden"))return idleTime.view()},
		this.idleTime.view=r=function(){
			var e;
			return e=function(){
				var e,t;
				return t=$(window).innerHeight(),
					e=$("#timeout div"),
					e.css("padding-top",(t-e.height())/2),
				$("html, body").css("overflow","hidden")
			},
				$("#timeout").show(),
				$("#timeout-idle").show(),
				$(window).resize(function(){return e()}),
			e()
		}
	}.call(this),
	function(){// kanaChart
		var e;
		this.kanaChart={},
		this.kanaChart.init=e=function(){
			var e,t,n;
			return n=$("#user-response"),
				e=$("#kana-chart ol li"),
				t=$("#user-response"),
				$("#kana-chart ol li").click(function(){
					return"backspace"!==$(this).attr("class")||
					t.is(":disabled")?
						"backspace"!==$(this).attr("class")&&(
							e.not(".backspace").removeClass(),$(this).addClass("active").parent().parent().children("ul").hide(),$("#chart-"+$(this).attr("id")[0]).fadeIn(300),
							$(window).scrollTop(t.offset().top)
						):
						void n.val(n.val().slice(0,-1))
				}),
			$("#kana-chart ul li:not(.empty)").click(function(){
				if(!n.is(":disabled"))return n.val(n.val()+$(this).children("span").text())
			})
		}
	}.call(this),
	function(){// lastItems
		var e,t,n,i,r,a,o,s;
		this.lastItems={},
		this.lastItems.addToList=e=function(e){
			var t;
			return t=$.jStorage.get("lastItems")||[],
				t.push(e),
				$.jStorage.set("lastItems",t.slice(Math.max(t.length-10,0))),
			$.jStorage.setTTL("lastItems",36e5)
		},
		this.lastItems.clear=t=function(){
			return $("#last-items-list ul").empty()
		},
		this.lastItems.disableSessionStats=n=function(){
			return $("#last-items").is(":visible")&&($("#information").hide(),$("#option-last-items").removeClass()),
			$("#last-items").addClass("disabled")
		},
		this.lastItems.itemInfoKanji=a=function(e){
			var t,n;
			return n=lastItems.listAttributes(e.srs_level,e.stats),
			t='<span class="srs-status" title="'+n.leveledTitle+'">'+n.srs,'<li class="pure-u-1-5 kanji"><div class="item"><a href="/kanji/'+e.slug+'" target="_blank" title="View kanji information"><h3 lang="ja">'+e.kan+'</h3></a><div class="add-info">'+t+"</div></div></li>"
		},
		this.lastItems.generate=i=function(e){
			var t,n,i,r,a;
			return i=$("#last-items-list > .pure-u-1 > ul"),
				a=lastItems.listItemAttributes(e),
				e.rad&&(e.custom_font_name?e.rad='<i class="radical-'+e.custom_font_name+'"></i>':/.png/i.test(e.rad)&&(e.rad='<img src="https://cdn.wanikani.com/images/radicals/'+e.rad+'" />')),
				t=e.rad?
					e.rad:
					e.kan?
						e.kan:
						e.voc,
				r=$("<li></li>",{"class":a.correctClass+" "+a.itemTypeClass}).appendTo(i),
				n=$("<a></a>",{href:"/"+a.itemTypeClass+"/"+e.slug,target:"_blank"}).appendTo(r),
			$("<div></div>",{}).appendTo(n)
				.html('<ul><li lang="ja" title="Characters">'+t+'</li><li lang="ja" title="A reading of the item">'+(e.ja||"")+'</li><li title="A meaning or name of the item">'+e.en+'</li><li title="SRS level change">'+a.srsTitle+"</li></ul>")
		},
		this.lastItems.listItemAttributes=o=function(e){
			var t,n,i;return t=1===e.srs_level&&1===e.stats.meaning_correct?"incorrect":1===e.stats.meaning_current_streak||1===e.stats.reading_current_streak?"incorrect":"correct",i=function(){switch(e.srs_level){case 1:case 2:case 3:case 4:return"Apprentice";case 5:case 6:return"Guru";case 7:return"Master";case 8:return"Enlightened";case 9:return"Burned"}}(),n=e.rad?"radicals":e.kan?"kanji":"vocabulary",{correctClass:t,srsTitle:i,itemTypeClass:n}
		},
		this.lastItems.getlastItems=r=function(){
			var e,t,n,i;n=$.jStorage.get("lastItems")||[],i="/review/last-items?";for(e in n)t=n[e],i+="list[]="+t+"&";return $.getJSON(i,function(t){var n;if(0===t.length)$("#last-items-list .pure-u-1").html('<div class="no-data">You have not recently completed any items in your reviews</div>');else for(e in t)n=t[e],lastItems.generate(n);return loadingScreen.remove()}).fail(function(){return $("#last-items").hide(),$("#information-offline").show()})
		},
		this.lastItems.load=s=function(){
			return $("#last-session").show(),lastItems.clear(),lastItems.getlastItems(),$("#additional-content-load").fadeOut(200)
		}
	}.call(this),
	function(){// loadingScreen
		var e;
		this.loadingScreen={},
		this.loadingScreen.remove=e=function(){
			return $("#loading").delay(1500).fadeOut(300)
		}
	}.call(this),
	function(){// popover
		var e,t;
		this.popover={},
		this.popover.load=t=function(){
			return popover.info()
		},
		this.popover.info=e=function(){
			var e,t;
			return t=$(".apprentice > ul > li, .guru > ul > li, .master > ul > li, .enlightened > ul > li, .burned > ul > li"),
				e=/iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent),
				$(".apprentice a, .guru a, .master a, .enlightened a, .burned a").click(function(t){
					if(e)return t.preventDefault()
				}),
			t.hover(function(){
				var e,t,n,i,r,a,o,s;
				return r=$(this).height()+4,
					a=$(window).width()-$(this).offset().left,i=$(window).height()-$(this).offset().top,n=$("<div></div>",{"class":"hover"}).appendTo(this),$("<ul></ul>").appendTo($(this).children("div")),$("<li></li>",{text:$(this).data("en")}).appendTo($(this).find("ul")),$("<li></li>",{text:$(this).data("ja")}).appendTo($(this).find("ul")),$("<li></li>",{text:$(this).data("mc")}).appendTo($(this).find("ul")),$("<li></li>",{text:$(this).data("rc")}).appendTo($(this).find("ul")),
					o=a>200?
						(e="left-side","auto"):
						(e="right-side","0"),
					s=i<100?
						(t="down-arrow",(n.height()+r/2)*-1):
						(t="up-arrow",r),
					n.css({top:s,right:o}).addClass(t+" "+e)
				},
				function(){
					return $(this).children("div").remove()
				})
		}
	}.call(this),
	function(){
		var e;
		jQuery(function(){
			if($("#reviews").length)
				return kanaChart.init(),
					additionalContent.load(),
					additionalContent.itemInfoAllButton(),
					e.load(),
					e.processAnswer(),
					e.buttons(),
					e.listenSubmitFailedQueue(),
					e.counters(),
					e.listenRenderView(),
					e.listenWrapUp(),
					$("#user-response").click(function(){
						return $("html, body").scrollTop(0)
					}),
					hotKeys.load(),
				idleTime.load()
		}),
		e={
			answerException:function(e){
				var t,n;
				return t=$("#additional-content"),
					n=$.jStorage.get("questionType"),
					$("#answer-exception").remove(),
					e.passed?
						e.accurate&&e.multipleAnswers?
							t.append(
								$('<div id="answer-exception"><span>Did you know this item has multiple possible '+n+"s?</span></div>")
									.addClass("animated fadeInUp")
							):
							e.accurate?
								void 0:
								t.append(
									$('<div id="answer-exception"><span>Your answer was a bit off. Check the '+n+" to make sure you are correct</span></div>")
										.addClass("animated fadeInUp")
								):
						t.append(
							$('<div id="answer-exception"><span>Need help? View the correct '+n+" and mnemonic</span></div>")
								.addClass("animated fadeInUp")
							)
			},
			buttons:function(){
				var t;
				return t=$("#user-response"),
					$("#submit-errors").hover(function(){
						return $(this)
							.children("#submit-errors-ext-text")
							.css("display","inline")
					},
					function(){
						return $(this)
							.children("#submit-errors-ext-text")
							.css("display","none")
					}),
					$("#option-item-info").click(function(){
						if(t.is(":disabled"))
							return $("#answer-exception").remove()
					}),
					$("#submit-errors").click(function(){return e.submitFailedQueue({newQuestion:!1})})
			},
			counters:function(){
				return e.countersReset(),
				$.jStorage.listenKeyChange("questionCount",function(){
					var e,t,n;return t=$.jStorage.get("questionCount"),n=$.jStorage.get("wrongCount"),e=0===t?100:Math.round((t-n)/t*100),$("#correct-rate").html(e)
				}),
				$.jStorage.listenKeyChange("completedCount",function(){
					var e,t,n;return e=parseInt($("#completed-count").text())+parseInt($("#available-count").text()),t=$.jStorage.get("completedCount"),n=Math.round(t/e*100),n=isNaN(n)?0:n,$("#completed-count").html(t),$("#progress-bar #bar").css("width",n+"%")
				}),
				$.jStorage.listenKeyChange("activeQueue",function(){
					var e;return e=$.jStorage.get("reviewQueue").length+$.jStorage.get("activeQueue").length,$("#available-count").html(e)
				})
			},
			countersIncr:function(e){
				var t,n;return e||(n=$.jStorage.get("wrongCount")+1,$.jStorage.set("wrongCount",n)),t=$.jStorage.get("questionCount")+1,$.jStorage.set("questionCount",t)
			},
			countersReset:function(){
				return $.jStorage.set("questionCount",0),
					$.jStorage.set("completedCount",0),
				$.jStorage.set("wrongCount",0)
			},
			/** jQuery type
			* @typedef jqXHR}
			* @see {@link http://api.jquery.com/Types/#jqXHR}
			*/
			/** Simultaneously queries the server for due items and reports on recently completed lessons.
			* Populates the reviewQueue with the response.
			* @returns {jqXHR}
			*/
			getQueueAndAssignQuestion:function(){
				var t,n,i,r,a,reviewQueueUrlTail;
				if(reviewQueueUrlTail="/review/queue?",
					n=$.jStorage.get("recentCompletedRadicals")||[],
					t=$.jStorage.get("recentCompletedKanji")||[],
					i=$.jStorage.get("recentCompletedVocabulary")||[],
				n.length>0)
					for(a in n)r=n[a],reviewQueueUrlTail+="r[]="+r+"&";
				if(t.length>0)
					for(a in t)r=t[a],reviewQueueUrlTail+="k[]="+r+"&";
				if(i.length>0)
					for(a in i)r=i[a],reviewQueueUrlTail+="v[]="+r+"&";
				return $.getJSON(reviewQueueUrlTail,function(reviewQueue){
					var activeQueue;
					return activeQueue=reviewQueue.splice(0,10),
						$.jStorage.set("reviewQueue",reviewQueue),
						$.jStorage.set("activeQueue",activeQueue),
					activeQueue.length>0?
						($("#reviews").is(":hidden")&&$("#reviews").show(),e.nextQuestion()):
						window.location="/review/"
				}).done(function(){return e.countersReset()})
			},
			/** Uses Get protocol to report results back to the server
			* @param {{newQuestion: boolean}} [t = {{newQuestion: false}}] - If newQuestion is true, a new question will be assigned to the prompt
			* @returns {jqXHR}
			*/
			submitFailedQueue:function(t){
				var k,submitFailed,submitFailedQueue,progressUrlTail;
				if(t.newQuestion=t.newQuestion||!1,
					submitFailedQueue=$.jStorage.get("submitFailedQueue")||[],
				submitFailedQueue.length>0){
					progressUrlTail="/json/progress?";
					for(k in submitFailedQueue)submitFailed=submitFailedQueue[k],
					progressUrlTail+=submitFailed.id+"[]="+submitFailed.mi+"&"+submitFailed.id+"[]="+submitFailed.ri+"&";
					return $.getJSON(progressUrlTail,function(){return!1}).done(function(){
						if($.jStorage.deleteKey("submitFailedQueue"),
						t.newQuestion===!0)
							return e.getQueueAndAssignQuestion()
					})
					.fail(function(){return $("#timeout").show(),
						$("#timeout-session-end").show(),
						idleTime.view(),
						$("#timeout-idle").hide()
					})
				}
				return e.getQueueAndAssignQuestion()
			},
			/** Calls {@link e.submitFailedQueue} with newQuestion option
			* @returns 
			*/
			load:function(){
				return e.submitFailedQueue({newQuestion:!0})
			},
			nextQuestion:function(){
				var t,n;return t=$.jStorage.get("activeQueue")||[],n=$.jStorage.get("r/wrap-up"),t.length>0?e.randomQuestion():n?($.jStorage.deleteKey("r/wrap-up"),window.location="/review/"):e.submitFailedQueue({newQuestion:!0})
			},
			processAnswer:function(){
				var t,n,i,r,a;
				return i=$("#answer-form button"),
					r=$("#answer-form form"),
					a=$("#user-response"),
					t=function(){
						var t,n,i,o;
						return i=answerChecker.evaluate($.jStorage.get("questionType"),a.val()),
							$("html, body").animate({scrollTop:0},200),
						i.exception?
							(t=$.jStorage.get("currentItem"),
								r=$("#answer-form form"),
								o=$("#reviews"),
								r.is(":animated")||
								(o.css("overflow-x","hidden"),
									n=function(){
										switch(t.emph){
											case"onyomi":
												return"on'yomi";
											case"kunyomi":
												return"kun'yomi";
											case"nanori":
												return"nanori"
										}
									}(),
								r.effect("shake",{},400,function(){
									return o.css("overflow-x","visible"),
									r.append($('<div id="answer-exception" class="answer-exception-form"><span>WaniKani is looking for the '+n+" reading</span></div>").addClass("animated fadeInUp"))
								}).find("input").focus()),
							!1):
							(a.blur(),e.renderPostAnswer(i),!1)
					},
					n=function(){
						return $("#answer-exception").remove(),
							e.nextQuestion(),
							additionalContent.closeItemInfo(),
						!1
					},
					r.delegate("input:text","keydown",function(e){
						if(13===e.which)
							return i.trigger("click"),
							!1
					}),
				i.on("click",function(e){
					return e.preventDefault(),
						a.is(":disabled")?
							n():
							"reading"===$.jStorage.get("questionType")&&answerChecker.isAsciiPresent(a.val())||
							"meaning"===$.jStorage.get("questionType")&&answerChecker.isNonAsciiPresent(a.val())||
							0===a.val().length?
								(r.is(":animated")||
									($("#reviews").css("overflow-x","hidden"),
									r.effect("shake",{},400,function(){
										return $("#reviews").css("overflow-x","visible")
									})
									),
								!1):
								0!==a.val().length?
									t():
									void 0
				})
			},
			processCompleted:function(e,t){
				var n,i,r,a,o,s,u,c,l,d;
				if(u="r"===e.charAt(0),t.mc>=1&&t.rc>=1||u&&t.mc>=1){
					if(a=$.jStorage.get("currentItem"),
						n=$.jStorage.get("activeQueue"),
						l=$.jStorage.get("reviewQueue"),
						t.mi=t.mi||0,
						t.ri=t.ri||0,
						u&&(t.ri=""),
						d="/json/progress?"+e+"[]="+t.mi+"&"+e+"[]="+t.ri,
						i=$.jStorage.get("completedCount")+1,
						$.jStorage.set("completedCount",i),
						c=function(){
							switch(e.charAt(0)){
								case"r":
									return"recentCompletedRadicals";
								case"k":
									return"recentCompletedKanji";
								case"v":
									return"recentCompletedVocabulary"
							}
						}(),
						r=$.jStorage.get(c)||[],r.push(e.slice(1)),
						r=r.slice(Math.max(r.length-10,0)),
						$.jStorage.set(c,r),$.jStorage.setTTL(c,6e5),lastItems.addToList(e),
						$.jStorage.get("r/srsIndicator")&&Srs.load($.jStorage.get(e),a.srs),
						$.getJSON(d,function(){return!1})
						.done(function(){return!1})
						.fail(function(){
							var n;
							return n=$.jStorage.get("submitFailedQueue")||[],
								n.push({id:e,mi:t.mi,ri:t.ri}),
							$.jStorage.set("submitFailedQueue",n)
						}),
						s=$.grep(n,function(e){
							return e.id!==a.id||!(a.rad&&e.rad||a.kan&&e.kan||a.voc&&e.voc)
						}),
					!$.jStorage.get("r/wrap-up")&&0!==l.length){
						for(o=11-s.length;o-=1;)s.push(l.pop());
						s.filter(function(e){return e})
					}
					return $.jStorage.set("activeQueue",s),
						$.jStorage.set("reviewQueue",l),
					$.jStorage.deleteKey(e)
				}
			},
			randomQuestion:function(){
				var e,t,n,i;return n=$.jStorage.get("activeQueue"),e=n[Math.floor(Math.random()*n.length)],t=e.kan?$.jStorage.get("k"+e.id):e.voc?$.jStorage.get("v"+e.id):void 0,i=e.rad?"meaning":null===t||"undefined"==typeof t.mc&&"undefined"==typeof t.rc?["meaning","reading"][Math.floor(2*Math.random())]:t.mc>=1?"reading":t.rc>=1?"meaning":void 0,$.jStorage.set("questionType",i),$.jStorage.set("currentItem",e)
			},
			renderPostAnswer:function(t){
				return t.passed?$("#answer-form fieldset").addClass("correct"):$("#answer-form fieldset").addClass("incorrect"),$("#user-response").prop("disabled",!0),additionalContent.enableButtons(),lastItems.disableSessionStats(),e.countersIncr(t.passed),e.answerException(t),e.updateLocalItemStat(t.passed)
			},
			listenRenderView:function(){
				return $.jStorage.listenKeyChange("currentItem",function(e){
					var t,n,i;
					return t=$.jStorage.get(e),
						n=$("#user-response"),
						i=$.jStorage.get("questionType"),
						$("html, body").animate({scrollTop:0},200),
						additionalContent.disableItemInfo(),
						additionalContent.disableAudio(),
						Srs.remove(),
						$("#answer-form fieldset").removeClass(),
						n.prop("disabled",!1).val("").focus(),
						wanakana.unbind(n[0]),
						"reading"===i&&wanakana.bind(n[0]),
						n.val(""),
						t.rad?
							(t.custom_font_name?
								$("#character span").html('<i class="radical-'+t.custom_font_name+'"></i>'):
								/.png/i.test(t.rad)?
									$("#character span").html('<img src="https://cdn.wanikani.com/images/radicals/'+t.rad+'">'):
									$("#character span").html(t.rad),
								$("#character").removeClass().addClass("radical"),
								$("#question-type").removeClass().addClass(i),
							$("#question-type h1").html("Radical <strong>Name</strong>")):
							t.kan?
								($("#character span").html(t.kan),
									$("#character").removeClass().addClass("kanji"),
									$("#question-type").removeClass().addClass(i),
								$("#question-type h1").html("Kanji <strong>"+i+"</strong>")):
								t.voc&&($("#character span").html(t.voc),
									$("#character").removeClass().addClass("vocabulary"),
									$("#question-type").removeClass().addClass(i),
								$("#question-type h1").html("Vocabulary <strong>"+i+"</strong>")),
					"meaning"===i?
						n.removeAttr("lang").attr("placeholder","Your Response"):
						n.attr({lang:"ja",placeholder:"\u7b54\u3048"}),
						loadingScreen.remove()
				})
			},
			updateLocalItemStat:function(t){
				var n,i,r,a,o;return n=$.jStorage.get("currentItem"),a=$.jStorage.get("questionType"),i=n.rad?"r":n.kan?"k":"v",i+=n.id,r=$.jStorage.get(i)||{},"meaning"===a?t?r.mc=1:r.mi="undefined"==typeof r.mi?1:r.mi+1:t?r.rc=1:r.ri="undefined"==typeof r.ri?1:r.ri+1,o=$.jStorage.set(i,r),$.jStorage.setTTL(i,72e5),e.processCompleted(i,o)
			},
			listenSubmitFailedQueue:function(){
				return $.jStorage.listenKeyChange("submitFailedQueue",function(e,t){
					var n;
					switch(t){
						case"deleted":
							return!1;
						case"updated":
							return n=$.jStorage.get(e),
								$("#timeout").show(),
								$("#timeout-session-end").show(),
								idleTime.view(),
							$("#timeout-idle").hide()
					}
				})
			},
			listenWrapUp:function(){
				return $.jStorage.deleteKey("r/wrap-up"),
				$.jStorage.listenKeyChange("activeQueue",function(e,t){
					var n;
					if($.jStorage.get("r/wrap-up"))
						switch(t){
							case"updated":
								return n=($.jStorage.get("activeQueue")||[]).length,
								$("#wrap-up-countdown").text(n)
							}
				})
			}
		}
	}.call(this),
	function(){// Srs
		this.Srs={},
		this.Srs.load=function(e,t){return Srs.newSrs(e,t)},
		this.Srs.name=function(e){
			switch(e){case 1:case 2:case 3:case 4:return"apprentice";case 5:case 6:return"guru";case 7:return"master";case 8:return"enlighten";case 9:return"burn"}
		},
		this.Srs.newSrs=function(e,t){
			var n,i,r,a,o,s;return o=(e.mi||0)+(e.ri||0),0===o?(n=Srs.name(t+1),r="srs-up",a="Your item has leveled up in the spaced repetition system"):(i=t>=5?2*Math.round(o/2):1*Math.round(o/2),n=t-i<1?1:t-i,n=Srs.name(n),r="srs-down",a="Your item has leveled down in the spaced repetition system"),s=$("<div></div>",{"class":"srs"}).appendTo("#question-type"),$("<div></div>",{"class":r+" srs-"+n+" animated fadeInUp",title:a}).appendTo(s)
		},
		this.Srs.remove=function(){
			return $(".srs").remove()
		}
	}.call(this),
	function(){
		var e;
		jQuery(function(){if($("#reviews-summary").length)return e.load()}),
		e={
			load:function(){return e.get()},
			get:function(){
				var t,n,i,r,a,o;
				if(o="/review?",
					n=$.jStorage.get("recentCompletedRadicals")||[],
					t=$.jStorage.get("recentCompletedKanji")||[],
					i=$.jStorage.get("recentCompletedVocabulary")||[],
				n.length>0)
				for(a in n)r=n[a],o+="r[]="+r+"&";
				if(t.length>0)
					for(a in t)r=t[a],o+="k[]="+r+"&";
				if(i.length>0)
					for(a in i)r=i[a],o+="v[]="+r+"&";
				return $.getJSON(o,function(t){
					var n,i,r,a,o,s,u,c,l,d,f,p,h,m,g,y,v,b;
					return e.processItem("radicals",t.incorrect.radicals,"incorrect"),
						e.processItem("kanji",t.incorrect.kanji,"incorrect"),
						e.processItem("vocabulary",t.incorrect.vocabulary,"incorrect"),
						e.processItem("radicals",t.correct.radicals,"correct"),
						e.processItem("kanji",t.correct.kanji,"correct"),
						e.processItem("vocabulary",t.correct.vocabulary,"correct"),
						p=$("#incorrect .apprentice li").length,
						m=$("#incorrect .guru li").length,
						y=$("#incorrect .master li").length,
						r=$("#correct .apprentice li").length,
						u=$("#correct .guru li").length,
						l=$("#correct .master li").length,
						s=$("#correct .enlightened li").length,
						a=$("#correct .burned li").length,
						v=t.incorrect.radicals.length,
						g=t.incorrect.kanji.length,
						b=t.incorrect.vocabulary.length,
						d=t.correct.radicals.length,
						c=t.correct.kanji.length,
						f=t.correct.vocabulary.length,
						h=p+m+y,
						o=r+u+l+s+a,
						n=o+h===0?100:Math.round(o/(o+h)*100),
						0===h&&$("#incorrect").parent().hide(),
						0===o&&$("#correct").parent().hide(),
						h>0&&$("#incorrect").show(),
						o>0&&$("#correct").show(),
						$("#incorrect:visible, #correct:visible").find("li").parent().parent().addClass("active"),
						0===t.queue_count?(i=$("#start-session a"),i.click(function(e){
								return e.preventDefault()
							}).addClass("disabled").attr("title","No reviews in queue")):
							$("#review-queue-count").text(t.queue_count),
						$("#review-queue-count").text(t.queue_count),
						$("#incorrect h2 strong").text(h),
						$("#incorrect .apprentice strong").text(p),
						$("#incorrect .guru strong").text(m),
						$("#incorrect .master strong").text(y),
						$("#correct h2 strong").text(o),
						$("#correct .apprentice strong").text(r),
						$("#correct .guru strong").text(u),
						$("#correct .master strong").text(l),
						$("#correct .enlightened strong").text(s),
						$("#correct .burned strong").text(a),
						t.last_review_date?
							$("#last-session-date time").attr("datetime",t.last_review_date).text(t.last_review_date).timeago():
							$("#last-session-date").hide(),
						$("#review-stats-answered-correctly .review-stats-value").text(n),
						$("#review-stats-radicals").children(".review-stats-value").text(d).parent().find(".review-stats-total span").text(d+v),
						$("#review-stats-kanji").children(".review-stats-value").text(c).parent().find(".review-stats-total span").text(c+g),
						$("#review-stats-vocabulary").children(".review-stats-value").text(f).parent().find(".review-stats-total span").text(f+b),
					popover.load()
				})
				.done(function(){return!1})
				.fail(function(){return!1})
				.always(function(){return!1})
			},
			processItem:function(e,t,n){
				var i,r,a,o,s,u,c;
				c=[];
				for(i in t)
					r=t[i],o=function(){
						switch(r.srs_level){
							case 1:case 2:case 3:case 4:
								return"#"+n+" .apprentice ul";
							case 5:case 6:
								return"#"+n+" .guru ul";
							case 7:
								return"#"+n+" .master ul";
							case 8:
								return"#"+n+" .enlightened ul";
							case 9:
								return"#"+n+" .burned ul"
						}
					}(),
					s=Math.round(r.stats.meaning_correct/(r.stats.meaning_correct+r.stats.meaning_incorrect)*100),
					u=r.kan||r.voc?
						Math.round(r.stats.reading_correct/(r.stats.reading_correct+r.stats.reading_incorrect)*100):
						void 0,
					"radicals"===e&&(r.custom_font_name?
						r.rad='<i class="radical-'+r.custom_font_name+'"></i>':
						/.png/i.test(r.rad)&&(r.rad='<img src="https://cdn.wanikani.com/images/radicals/'+r.rad+'" />')),
					a=r.rad?r.rad:r.kan?r.kan:r.voc,
					$("<li></li>",{"class":e,"data-en":r.en,"data-ja":r.ja,"data-mc":s,"data-rc":u}).appendTo(o),
					c.push($("<a></a>",{lang:"ja",href:"/"+e+"/"+r.slug}).html(a).appendTo(o+" li:last-child"));
				return c
			}
		}
	}.call(this);