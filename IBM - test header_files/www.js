/*!
 * Name: ibm.com v18 production file
 * Release: 150.0.0
 * Built: 2021-11-24 9:26:48 AM
 * Owner: Michael Santelia, Vlad Saling
 * Copyright (c) 2021 IBM Corporation
 * Description: Official file for production use
 */
var IBMPerformance = {
	mark: function (e) {
		try {
			window.performance.mark(e)
		} catch (e) {}
	},
	measure: function (e, t, i) {
		try {
			window.performance.measure(e, t, i)
		} catch (e) {}
	}
};
IBMPerformance.mark("V18-begin-execute"), window.v18JsStart = (new Date).getTime(),
	function () {
		for (var e, t = ["assert", "assert", "cd", "clear", "count", "countReset", "debug", "dir", "dirxml", "dirxml", "dirxml", "error", "error", "exception", "group", "group", "groupCollapsed", "groupCollapsed", "groupEnd", "info", "info", "log", "log", "markTimeline", "profile", "profileEnd", "profileEnd", "select", "table", "table", "time", "time", "timeEnd", "timeEnd", "timeEnd", "timeEnd", "timeEnd", "timeStamp", "timeline", "timelineEnd", "trace", "trace", "trace", "trace", "trace", "warn"], i = t.length, n = window.console = window.console || {}, o = function () {}; i--;) n[e = t[i]] || (n[e] = o)
	}(),
	function (p, m, h) {
		function f(e, t) {
			return typeof e === t
		}

		function r(e) {
			var t = x.className,
				i = u._config.classPrefix || "";
			if (T && (t = t.baseVal), u._config.enableJSClass) {
				var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
				t = t.replace(n, "$1" + i + "js$2")
			}
			u._config.enableClasses && (t += " " + i + e.join(" " + i), T ? x.className.baseVal = t : x.className = t)
		}

		function a(e, t) {
			if ("object" == typeof e)
				for (var i in e) C(e, i) && a(i, e[i]);
			else {
				var n = (e = e.toLowerCase()).split("."),
					o = u[n[0]];
				if (2 == n.length && (o = o[n[1]]), void 0 !== o) return u;
				t = "function" == typeof t ? t() : t, 1 == n.length ? u[n[0]] = t : (!u[n[0]] || u[n[0]] instanceof Boolean || (u[n[0]] = new Boolean(u[n[0]])), u[n[0]][n[1]] = t), r([(t && 0 != t ? "" : "no-") + n.join("-")]), u._trigger(e, t)
			}
			return u
		}

		function g() {
			return "function" != typeof m.createElement ? m.createElement(arguments[0]) : T ? m.createElementNS.call(m, "http://www.w3.org/2000/svg", arguments[0]) : m.createElement.apply(m, arguments)
		}

		function v(e, t) {
			return !!~("" + e).indexOf(t)
		}

		function b(e, t, i, n) {
			var o, r, a, s, l, c = "modernizr",
				d = g("div"),
				u = ((l = m.body) || ((l = g(T ? "svg" : "body")).fake = !0), l);
			if (parseInt(i, 10))
				for (; i--;)(a = g("div")).id = n ? n[i] : c + (i + 1), d.appendChild(a);
			return (o = g("style")).type = "text/css", o.id = "s" + c, (u.fake ? u : d).appendChild(o), u.appendChild(d), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(m.createTextNode(e)), d.id = c, u.fake && (u.style.background = "", u.style.overflow = "hidden", s = x.style.overflow, x.style.overflow = "hidden", x.appendChild(u)), r = t(d, e), u.fake ? (u.parentNode.removeChild(u), x.style.overflow = s, x.offsetHeight) : d.parentNode.removeChild(d), !!r
		}

		function y(e) {
			return e.replace(/([a-z])-([a-z])/g, function (e, t, i) {
				return t + i.toUpperCase()
			}).replace(/^-/, "")
		}

		function s(e, t) {
			return function () {
				return e.apply(t, arguments)
			}
		}

		function w(e) {
			return e.replace(/([A-Z])/g, function (e, t) {
				return "-" + t.toLowerCase()
			}).replace(/^ms-/, "-ms-")
		}

		function l(e, t, i, n) {
			function o() {
				a && (delete Y.style, delete Y.modElem)
			}
			if (n = !f(n, "undefined") && n, !f(i, "undefined")) {
				var r = function (e, t) {
					var i = e.length;
					if ("CSS" in p && "supports" in p.CSS) {
						for (; i--;)
							if (p.CSS.supports(w(e[i]), t)) return !0;
						return !1
					}
					if ("CSSSupportsRule" in p) {
						for (var n = []; i--;) n.push("(" + w(e[i]) + ":" + t + ")");
						return b("@supports (" + (n = n.join(" or ")) + ") { #modernizr { position: absolute; } }", function (e) {
							return "absolute" == getComputedStyle(e, null).position
						})
					}
					return h
				}(e, i);
				if (!f(r, "undefined")) return r
			}
			for (var a, s, l, c, d, u = ["modernizr", "tspan", "samp"]; !Y.style && u.length;) a = !0, Y.modElem = g(u.shift()), Y.style = Y.modElem.style;
			for (l = e.length, s = 0; s < l; s++)
				if (c = e[s], d = Y.style[c], v(c, "-") && (c = y(c)), Y.style[c] !== h) {
					if (n || f(i, "undefined")) return o(), "pfx" != t || c;
					try {
						Y.style[c] = i
					} catch (e) {}
					if (Y.style[c] != d) return o(), "pfx" != t || c
				}
			return o(), !1
		}

		function n(e, t, i, n, o) {
			var r = e.charAt(0).toUpperCase() + e.slice(1),
				a = (e + " " + F.join(r + " ") + r).split(" ");
			return f(t, "string") || f(t, "undefined") ? l(a, t, n, o) : function (e, t, i) {
				var n;
				for (var o in e)
					if (e[o] in t) return !1 === i ? e[o] : f(n = t[e[o]], "function") ? s(n, i || t) : n;
				return !1
			}(a = (e + " " + E.join(r + " ") + r).split(" "), t, i)
		}

		function o(e, t, i) {
			return n(e, h, h, t, i)
		}
		var c = [],
			d = [],
			e = {
				_version: "3.3.1",
				_config: {
					classPrefix: "",
					enableClasses: !0,
					enableJSClass: !0,
					usePrefixes: !0
				},
				_q: [],
				on: function (e, t) {
					var i = this;
					setTimeout(function () {
						t(i[e])
					}, 0)
				},
				addTest: function (e, t, i) {
					d.push({
						name: e,
						fn: t,
						options: i
					})
				},
				addAsyncTest: function (e) {
					d.push({
						name: null,
						fn: e
					})
				}
			},
			u = function () {};
		u.prototype = e, (u = new u).addTest("applicationcache", "applicationCache" in p), u.addTest("geolocation", "geolocation" in navigator), u.addTest("history", function () {
			var e = navigator.userAgent;
			return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && (p.history && "pushState" in p.history)
		}), u.addTest("postmessage", "postMessage" in p), u.addTest("svg", !!m.createElementNS && !!m.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
		var t = !1;
		try {
			t = "WebSocket" in p && 2 === p.WebSocket.CLOSING
		} catch (e) {}
		u.addTest("websockets", t), u.addTest("localstorage", function () {
			var e = "modernizr";
			try {
				return localStorage.setItem(e, e), localStorage.removeItem(e), !0
			} catch (e) {
				return !1
			}
		}), u.addTest("sessionstorage", function () {
			var e = "modernizr";
			try {
				return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
			} catch (e) {
				return !1
			}
		}), u.addTest("websqldatabase", "openDatabase" in p), u.addTest("webworkers", "Worker" in p);
		var k = e._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
		e._prefixes = k;
		var C, i, x = m.documentElement,
			T = "svg" === x.nodeName.toLowerCase(),
			S = "Moz O ms Webkit",
			E = e._config.usePrefixes ? S.toLowerCase().split(" ") : [];
		e._domPrefixes = E, C = f(i = {}.hasOwnProperty, "undefined") || f(i.call, "undefined") ? function (e, t) {
			return t in e && f(e.constructor.prototype[t], "undefined")
		} : function (e, t) {
			return i.call(e, t)
		}, e._l = {}, e.on = function (e, t) {
			this._l[e] || (this._l[e] = []), this._l[e].push(t), u.hasOwnProperty(e) && setTimeout(function () {
				u._trigger(e, u[e])
			}, 0)
		}, e._trigger = function (e, t) {
			if (this._l[e]) {
				var i = this._l[e];
				setTimeout(function () {
					var e;
					for (e = 0; e < i.length; e++)(0, i[e])(t)
				}, 0), delete this._l[e]
			}
		}, u._q.push(function () {
			e.addTest = a
		});
		var $, I = ($ = !("onblur" in m.documentElement), function (e, t) {
			var i;
			return !!e && (t && "string" != typeof t || (t = g(t || "div")), !(i = (e = "on" + e) in t) && $ && (t.setAttribute || (t = g("div")), t.setAttribute(e, ""), i = "function" == typeof t[e], t[e] !== h && (t[e] = h), t.removeAttribute(e)), i)
		});
		e.hasEvent = I, u.addTest("hashchange", function () {
			return !1 !== I("hashchange", p) && (m.documentMode === h || 7 < m.documentMode)
		}), u.addTest("pointerevents", function () {
			var e = !1,
				t = E.length;
			for (e = u.hasEvent("pointerdown"); t-- && !e;) I(E[t] + "pointerdown") && (e = !0);
			return e
		}), u.addTest("canvas", function () {
			var e = g("canvas");
			return !(!e.getContext || !e.getContext("2d"))
		}), u.addTest("audio", function () {
			var e = g("audio"),
				t = !1;
			try {
				(t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
			} catch (e) {}
			return t
		}), u.addTest("canvastext", function () {
			return !1 !== u.canvas && "function" == typeof g("canvas").getContext("2d").fillText
		}), u.addTest("video", function () {
			var e = g("video"),
				t = !1;
			try {
				(t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
			} catch (e) {}
			return t
		}), u.addTest("webgl", function () {
			var e = g("canvas"),
				t = "probablySupportsContext" in e ? "probablySupportsContext" : "supportsContext";
			return t in e ? e[t]("webgl") || e[t]("experimental-webgl") : "WebGLRenderingContext" in p
		}), u.addTest("cssgradients", function () {
			for (var e, t = "background-image:", i = "", n = 0, o = k.length - 1; n < o; n++) e = 0 === n ? "to " : "", i += t + k[n] + "linear-gradient(" + e + "left top, #9f9, white);";
			u._config.usePrefixes && (i += t + "-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");
			var r = g("a").style;
			return r.cssText = i, -1 < ("" + r.backgroundImage).indexOf("gradient")
		}), u.addTest("multiplebgs", function () {
			var e = g("a").style;
			return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
		}), u.addTest("opacity", function () {
			var e = g("a").style;
			return e.cssText = k.join("opacity:.55;"), /^0.55$/.test(e.opacity)
		}), u.addTest("rgba", function () {
			var e = g("a").style;
			return e.cssText = "background-color:rgba(150,255,150,.5)", -1 < ("" + e.backgroundColor).indexOf("rgba")
		}), u.addTest("inlinesvg", function () {
			var e = g("div");
			return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
		});
		var A = g("input"),
			_ = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
			M = {};
		u.input = function (e) {
			for (var t = 0, i = e.length; t < i; t++) M[e[t]] = !!(e[t] in A);
			return M.list && (M.list = !(!g("datalist") || !p.HTMLDataListElement)), M
		}(_);
		var D = "search tel url email datetime date month week time datetime-local number range color".split(" "),
			j = {};
		u.inputtypes = function (e) {
			for (var t, i, n, o = e.length, r = 0; r < o; r++) A.setAttribute("type", t = e[r]), (n = "text" !== A.type && "style" in A) && (A.value = "1)", A.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(t) && A.style.WebkitAppearance !== h ? (x.appendChild(A), n = (i = m.defaultView).getComputedStyle && "textfield" !== i.getComputedStyle(A, null).WebkitAppearance && 0 !== A.offsetHeight, x.removeChild(A)) : /^(search|tel)$/.test(t) || (n = /^(url|email)$/.test(t) ? A.checkValidity && !1 === A.checkValidity() : "1)" != A.value)), j[e[r]] = !!n;
			return j
		}(D), u.addTest("hsla", function () {
			var e = g("a").style;
			return e.cssText = "background-color:hsla(120,40%,100%,.5)", v(e.backgroundColor, "rgba") || v(e.backgroundColor, "hsla")
		});
		var L = "CSS" in p && "supports" in p.CSS,
			O = "supportsCSS" in p;
		u.addTest("supports", L || O);
		var B = {}.toString;
		u.addTest("svgclippaths", function () {
			return !!m.createElementNS && /SVGClipPath/.test(B.call(m.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
		}), u.addTest("smil", function () {
			return !!m.createElementNS && /SVGAnimate/.test(B.call(m.createElementNS("http://www.w3.org/2000/svg", "animate")))
		});
		var P, N = (P = p.matchMedia || p.msMatchMedia) ? function (e) {
			var t = P(e);
			return t && t.matches || !1
		} : function (e) {
			var t = !1;
			return b("@media " + e + " { #modernizr { position: absolute; } }", function (e) {
				t = "absolute" == (p.getComputedStyle ? p.getComputedStyle(e, null) : e.currentStyle).position
			}), t
		};
		e.mq = N;
		var R, H, q, U, z, W = e.testStyles = b;
		u.addTest("touchevents", function () {
			var t;
			if ("ontouchstart" in p || p.DocumentTouch && m instanceof DocumentTouch) t = !0;
			else {
				var e = ["@media (", k.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
				W(e, function (e) {
					t = 9 === e.offsetTop
				})
			}
			return t
		}), (R = navigator.userAgent, H = R.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1), q = R.match(/w(eb)?osbrowser/gi), U = R.match(/windows phone/gi) && R.match(/iemobile\/([0-9])+/gi) && 9 <= parseFloat(RegExp.$1), z = H < 533 && R.match(/android/gi), q || z || U) ? u.addTest("fontface", !1) : W('@font-face {font-family:"font";src:url("https://")}', function (e, t) {
			var i = m.getElementById("smodernizr"),
				n = i.sheet || i.styleSheet,
				o = n ? n.cssRules && n.cssRules[0] ? n.cssRules[0].cssText : n.cssText || "" : "",
				r = /src/i.test(o) && 0 === o.indexOf(t.split(" ")[0]);
			u.addTest("fontface", r)
		}), W('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function (e) {
			u.addTest("generatedcontent", 7 <= e.offsetHeight)
		});
		var F = e._config.usePrefixes ? S.split(" ") : [];
		e._cssomPrefixes = F;
		var V = function (e) {
			var t, i = k.length,
				n = p.CSSRule;
			if (void 0 === n) return h;
			if (!e) return !1;
			if ((t = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in n) return "@" + e;
			for (var o = 0; o < i; o++) {
				var r = k[o];
				if (r.toUpperCase() + "_" + t in n) return "@-" + r.toLowerCase() + "-" + e
			}
			return !1
		};
		e.atRule = V;
		var Q = {
			elem: g("modernizr")
		};
		u._q.push(function () {
			delete Q.elem
		});
		var Y = {
			style: Q.elem.style
		};
		u._q.unshift(function () {
			delete Y.style
		});
		var X = e.testProp = function (e, t, i) {
			return l([e], h, t, i)
		};
		u.addTest("textshadow", X("textShadow", "1px 1px")), e.testAllProps = n, e.testAllProps = o, u.addTest("cssanimations", o("animationName", "a", !0)), u.addTest("backgroundsize", o("backgroundSize", "100%", !0)), u.addTest("borderimage", o("borderImage", "url() 1", !0)), u.addTest("borderradius", o("borderRadius", "0px", !0)), u.addTest("boxshadow", o("boxShadow", "1px 1px", !0)),
			function () {
				u.addTest("csscolumns", function () {
					var e = !1,
						t = o("columnCount");
					try {
						(e = !!t) && (e = new Boolean(e))
					} catch (e) {}
					return e
				});
				for (var e, t, i = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], n = 0; n < i.length; n++) e = i[n].toLowerCase(), t = o("column" + i[n]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || o(i[n])), u.addTest("csscolumns." + e, t)
			}(), u.addTest("flexbox", o("flexBasis", "1px", !0)), u.addTest("flexboxlegacy", o("boxDirection", "reverse", !0)), u.addTest("cssreflections", o("boxReflect", "above", !0)), u.addTest("csstransforms", function () {
				return -1 === navigator.userAgent.indexOf("Android 2.") && o("transform", "scale(1)", !0)
			}), u.addTest("csstransforms3d", function () {
				var t = !!o("perspective", "1px", !0),
					e = u._config.usePrefixes;
				if (t && (!e || "webkitPerspective" in x.style)) {
					var i;
					u.supports ? i = "@supports (perspective: 1px)" : (i = "@media (transform-3d)", e && (i += ",(-webkit-transform-3d)")), W("#modernizr{width:0;height:0}" + (i += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"), function (e) {
						t = 7 === e.offsetWidth && 18 === e.offsetHeight
					})
				}
				return t
			}), u.addTest("csstransitions", o("transition", "all", !0));
		var G, K = e.prefixed = function (e, t, i) {
			return 0 === e.indexOf("@") ? V(e) : (-1 != e.indexOf("-") && (e = y(e)), t ? n(e, t, i) : n(e, "pfx"))
		};
		try {
			G = K("indexedDB", p)
		} catch (e) {}
		u.addTest("indexeddb", !!G), G && u.addTest("indexeddb.deletedatabase", "deleteDatabase" in G),
			function () {
				var e, t, i, n, o, r;
				for (var a in d)
					if (d.hasOwnProperty(a)) {
						if (e = [], (t = d[a]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
							for (i = 0; i < t.options.aliases.length; i++) e.push(t.options.aliases[i].toLowerCase());
						for (n = f(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) 1 === (r = e[o].split(".")).length ? u[r[0]] = n : (!u[r[0]] || u[r[0]] instanceof Boolean || (u[r[0]] = new Boolean(u[r[0]])), u[r[0]][r[1]] = n), c.push((n ? "" : "no-") + r.join("-"))
					}
			}(), r(c), delete e.addTest, delete e.addAsyncTest;
		for (var J = 0; J < u._q.length; J++) u._q[J]();
		p.Modernizr = u
	}(window, document),
	function (e, t) {
		"use strict";
		"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
			if (!e.document) throw new Error("jQuery requires a window with a document");
			return t(e)
		} : t(e)
	}("undefined" != typeof window ? window : this, function (x, e) {
		"use strict";
		var t = [],
			T = x.document,
			n = Object.getPrototypeOf,
			s = t.slice,
			f = t.concat,
			l = t.push,
			o = t.indexOf,
			i = {},
			r = i.toString,
			g = i.hasOwnProperty,
			a = g.toString,
			c = a.call(Object),
			v = {},
			b = function (e) {
				return "function" == typeof e && "number" != typeof e.nodeType
			},
			y = function (e) {
				return null != e && e === e.window
			},
			d = {
				type: !0,
				src: !0,
				noModule: !0
			};

		function w(e, t, i) {
			var n, o = (t = t || T).createElement("script");
			if (o.text = e, i)
				for (n in d) i[n] && (o[n] = i[n]);
			t.head.appendChild(o).parentNode.removeChild(o)
		}

		function k(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[r.call(e)] || "object" : typeof e
		}
		var S = function (e, t) {
				return new S.fn.init(e, t)
			},
			u = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

		function p(e) {
			var t = !!e && "length" in e && e.length,
				i = k(e);
			return !b(e) && !y(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
		}
		S.fn = S.prototype = {
			jquery: "3.3.1",
			constructor: S,
			length: 0,
			toArray: function () {
				return s.call(this)
			},
			get: function (e) {
				return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
			},
			pushStack: function (e) {
				var t = S.merge(this.constructor(), e);
				return t.prevObject = this, t
			},
			each: function (e) {
				return S.each(this, e)
			},
			map: function (i) {
				return this.pushStack(S.map(this, function (e, t) {
					return i.call(e, t, e)
				}))
			},
			slice: function () {
				return this.pushStack(s.apply(this, arguments))
			},
			first: function () {
				return this.eq(0)
			},
			last: function () {
				return this.eq(-1)
			},
			eq: function (e) {
				var t = this.length,
					i = +e + (e < 0 ? t : 0);
				return this.pushStack(0 <= i && i < t ? [this[i]] : [])
			},
			end: function () {
				return this.prevObject || this.constructor()
			},
			push: l,
			sort: t.sort,
			splice: t.splice
		}, S.extend = S.fn.extend = function () {
			var e, t, i, n, o, r, a = arguments[0] || {},
				s = 1,
				l = arguments.length,
				c = !1;
			for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
				if (null != (e = arguments[s]))
					for (t in e) i = a[t], a !== (n = e[t]) && (c && n && (S.isPlainObject(n) || (o = Array.isArray(n))) ? (r = o ? (o = !1, i && Array.isArray(i) ? i : []) : i && S.isPlainObject(i) ? i : {}, a[t] = S.extend(c, r, n)) : void 0 !== n && (a[t] = n));
			return a
		}, S.extend({
			expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function (e) {
				throw new Error(e)
			},
			noop: function () {},
			isPlainObject: function (e) {
				var t, i;
				return !(!e || "[object Object]" !== r.call(e) || (t = n(e)) && ("function" != typeof (i = g.call(t, "constructor") && t.constructor) || a.call(i) !== c))
			},
			isEmptyObject: function (e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			globalEval: function (e) {
				w(e)
			},
			each: function (e, t) {
				var i, n = 0;
				if (p(e))
					for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
				else
					for (n in e)
						if (!1 === t.call(e[n], n, e[n])) break;
				return e
			},
			trim: function (e) {
				return null == e ? "" : (e + "").replace(u, "")
			},
			makeArray: function (e, t) {
				var i = t || [];
				return null != e && (p(Object(e)) ? S.merge(i, "string" == typeof e ? [e] : e) : l.call(i, e)), i
			},
			inArray: function (e, t, i) {
				return null == t ? -1 : o.call(t, e, i)
			},
			merge: function (e, t) {
				for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
				return e.length = o, e
			},
			grep: function (e, t, i) {
				for (var n = [], o = 0, r = e.length, a = !i; o < r; o++) !t(e[o], o) !== a && n.push(e[o]);
				return n
			},
			map: function (e, t, i) {
				var n, o, r = 0,
					a = [];
				if (p(e))
					for (n = e.length; r < n; r++) null != (o = t(e[r], r, i)) && a.push(o);
				else
					for (r in e) null != (o = t(e[r], r, i)) && a.push(o);
				return f.apply([], a)
			},
			guid: 1,
			support: v
		}), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
			i["[object " + t + "]"] = t.toLowerCase()
		});
		var m = function (i) {
			var e, m, w, r, o, h, u, f, k, l, c, C, x, a, T, g, s, d, v, S = "sizzle" + 1 * new Date,
				b = i.document,
				E = 0,
				n = 0,
				p = ae(),
				y = ae(),
				$ = ae(),
				I = function (e, t) {
					return e === t && (c = !0), 0
				},
				A = {}.hasOwnProperty,
				t = [],
				_ = t.pop,
				M = t.push,
				D = t.push,
				j = t.slice,
				L = function (e, t) {
					for (var i = 0, n = e.length; i < n; i++)
						if (e[i] === t) return i;
					return -1
				},
				O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				B = "[\\x20\\t\\r\\n\\f]",
				P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
				N = "\\[" + B + "*(" + P + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + B + "*\\]",
				R = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
				H = new RegExp(B + "+", "g"),
				q = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
				U = new RegExp("^" + B + "*," + B + "*"),
				z = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
				W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
				F = new RegExp(R),
				V = new RegExp("^" + P + "$"),
				Q = {
					ID: new RegExp("^#(" + P + ")"),
					CLASS: new RegExp("^\\.(" + P + ")"),
					TAG: new RegExp("^(" + P + "|[*])"),
					ATTR: new RegExp("^" + N),
					PSEUDO: new RegExp("^" + R),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + O + ")$", "i"),
					needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
				},
				Y = /^(?:input|select|textarea|button)$/i,
				X = /^h\d$/i,
				G = /^[^{]+\{\s*\[native \w/,
				K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				J = /[+~]/,
				Z = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
				ee = function (e, t, i) {
					var n = "0x" + t - 65536;
					return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
				},
				te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
				ie = function (e, t) {
					return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
				},
				ne = function () {
					C()
				},
				oe = be(function (e) {
					return !0 === e.disabled && ("form" in e || "label" in e)
				}, {
					dir: "parentNode",
					next: "legend"
				});
			try {
				D.apply(t = j.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
			} catch (i) {
				D = {
					apply: t.length ? function (e, t) {
						M.apply(e, j.call(t))
					} : function (e, t) {
						for (var i = e.length, n = 0; e[i++] = t[n++];);
						e.length = i - 1
					}
				}
			}

			function re(e, t, i, n) {
				var o, r, a, s, l, c, d, u = t && t.ownerDocument,
					p = t ? t.nodeType : 9;
				if (i = i || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return i;
				if (!n && ((t ? t.ownerDocument || t : b) !== x && C(t), t = t || x, T)) {
					if (11 !== p && (l = K.exec(e)))
						if (o = l[1]) {
							if (9 === p) {
								if (!(a = t.getElementById(o))) return i;
								if (a.id === o) return i.push(a), i
							} else if (u && (a = u.getElementById(o)) && v(t, a) && a.id === o) return i.push(a), i
						} else {
							if (l[2]) return D.apply(i, t.getElementsByTagName(e)), i;
							if ((o = l[3]) && m.getElementsByClassName && t.getElementsByClassName) return D.apply(i, t.getElementsByClassName(o)), i
						}
					if (m.qsa && !$[e + " "] && (!g || !g.test(e))) {
						if (1 !== p) u = t, d = e;
						else if ("object" !== t.nodeName.toLowerCase()) {
							for ((s = t.getAttribute("id")) ? s = s.replace(te, ie) : t.setAttribute("id", s = S), r = (c = h(e)).length; r--;) c[r] = "#" + s + " " + ve(c[r]);
							d = c.join(","), u = J.test(e) && fe(t.parentNode) || t
						}
						if (d) try {
							return D.apply(i, u.querySelectorAll(d)), i
						} catch (e) {} finally {
							s === S && t.removeAttribute("id")
						}
					}
				}
				return f(e.replace(q, "$1"), t, i, n)
			}

			function ae() {
				var n = [];
				return function e(t, i) {
					return n.push(t + " ") > w.cacheLength && delete e[n.shift()], e[t + " "] = i
				}
			}

			function se(e) {
				return e[S] = !0, e
			}

			function le(e) {
				var t = x.createElement("fieldset");
				try {
					return !!e(t)
				} catch (e) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function ce(e, t) {
				for (var i = e.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = t
			}

			function de(e, t) {
				var i = t && e,
					n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
				if (n) return n;
				if (i)
					for (; i = i.nextSibling;)
						if (i === t) return -1;
				return e ? 1 : -1
			}

			function ue(t) {
				return function (e) {
					return "input" === e.nodeName.toLowerCase() && e.type === t
				}
			}

			function pe(i) {
				return function (e) {
					var t = e.nodeName.toLowerCase();
					return ("input" === t || "button" === t) && e.type === i
				}
			}

			function me(t) {
				return function (e) {
					return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && oe(e) === t : e.disabled === t : "label" in e && e.disabled === t
				}
			}

			function he(a) {
				return se(function (r) {
					return r = +r, se(function (e, t) {
						for (var i, n = a([], e.length, r), o = n.length; o--;) e[i = n[o]] && (e[i] = !(t[i] = e[i]))
					})
				})
			}

			function fe(e) {
				return e && void 0 !== e.getElementsByTagName && e
			}
			for (e in m = re.support = {}, o = re.isXML = function (e) {
					var t = e && (e.ownerDocument || e).documentElement;
					return !!t && "HTML" !== t.nodeName
				}, C = re.setDocument = function (e) {
					var t, i, n = e ? e.ownerDocument || e : b;
					return n !== x && 9 === n.nodeType && n.documentElement && (a = (x = n).documentElement, T = !o(x), b !== x && (i = x.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ne, !1) : i.attachEvent && i.attachEvent("onunload", ne)), m.attributes = le(function (e) {
						return e.className = "i", !e.getAttribute("className")
					}), m.getElementsByTagName = le(function (e) {
						return e.appendChild(x.createComment("")), !e.getElementsByTagName("*").length
					}), m.getElementsByClassName = G.test(x.getElementsByClassName), m.getById = le(function (e) {
						return a.appendChild(e).id = S, !x.getElementsByName || !x.getElementsByName(S).length
					}), m.getById ? (w.filter.ID = function (e) {
						var t = e.replace(Z, ee);
						return function (e) {
							return e.getAttribute("id") === t
						}
					}, w.find.ID = function (e, t) {
						if (void 0 !== t.getElementById && T) {
							var i = t.getElementById(e);
							return i ? [i] : []
						}
					}) : (w.filter.ID = function (e) {
						var i = e.replace(Z, ee);
						return function (e) {
							var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
							return t && t.value === i
						}
					}, w.find.ID = function (e, t) {
						if (void 0 !== t.getElementById && T) {
							var i, n, o, r = t.getElementById(e);
							if (r) {
								if ((i = r.getAttributeNode("id")) && i.value === e) return [r];
								for (o = t.getElementsByName(e), n = 0; r = o[n++];)
									if ((i = r.getAttributeNode("id")) && i.value === e) return [r]
							}
							return []
						}
					}), w.find.TAG = m.getElementsByTagName ? function (e, t) {
						return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : m.qsa ? t.querySelectorAll(e) : void 0
					} : function (e, t) {
						var i, n = [],
							o = 0,
							r = t.getElementsByTagName(e);
						if ("*" !== e) return r;
						for (; i = r[o++];) 1 === i.nodeType && n.push(i);
						return n
					}, w.find.CLASS = m.getElementsByClassName && function (e, t) {
						if (void 0 !== t.getElementsByClassName && T) return t.getElementsByClassName(e)
					}, s = [], g = [], (m.qsa = G.test(x.querySelectorAll)) && (le(function (e) {
						a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + B + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + S + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || g.push(".#.+[+~]")
					}), le(function (e) {
						e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
						var t = x.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + B + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
					})), (m.matchesSelector = G.test(d = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && le(function (e) {
						m.disconnectedMatch = d.call(e, "*"), d.call(e, "[s!='']:x"), s.push("!=", R)
					}), g = g.length && new RegExp(g.join("|")), s = s.length && new RegExp(s.join("|")), t = G.test(a.compareDocumentPosition), v = t || G.test(a.contains) ? function (e, t) {
						var i = 9 === e.nodeType ? e.documentElement : e,
							n = t && t.parentNode;
						return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
					} : function (e, t) {
						if (t)
							for (; t = t.parentNode;)
								if (t === e) return !0;
						return !1
					}, I = t ? function (e, t) {
						if (e === t) return c = !0, 0;
						var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !m.sortDetached && t.compareDocumentPosition(e) === i ? e === x || e.ownerDocument === b && v(b, e) ? -1 : t === x || t.ownerDocument === b && v(b, t) ? 1 : l ? L(l, e) - L(l, t) : 0 : 4 & i ? -1 : 1)
					} : function (e, t) {
						if (e === t) return c = !0, 0;
						var i, n = 0,
							o = e.parentNode,
							r = t.parentNode,
							a = [e],
							s = [t];
						if (!o || !r) return e === x ? -1 : t === x ? 1 : o ? -1 : r ? 1 : l ? L(l, e) - L(l, t) : 0;
						if (o === r) return de(e, t);
						for (i = e; i = i.parentNode;) a.unshift(i);
						for (i = t; i = i.parentNode;) s.unshift(i);
						for (; a[n] === s[n];) n++;
						return n ? de(a[n], s[n]) : a[n] === b ? -1 : s[n] === b ? 1 : 0
					}), x
				}, re.matches = function (e, t) {
					return re(e, null, null, t)
				}, re.matchesSelector = function (e, t) {
					if ((e.ownerDocument || e) !== x && C(e), t = t.replace(W, "='$1']"), m.matchesSelector && T && !$[t + " "] && (!s || !s.test(t)) && (!g || !g.test(t))) try {
						var i = d.call(e, t);
						if (i || m.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
					} catch (e) {}
					return 0 < re(t, x, null, [e]).length
				}, re.contains = function (e, t) {
					return (e.ownerDocument || e) !== x && C(e), v(e, t)
				}, re.attr = function (e, t) {
					(e.ownerDocument || e) !== x && C(e);
					var i = w.attrHandle[t.toLowerCase()],
						n = i && A.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !T) : void 0;
					return void 0 !== n ? n : m.attributes || !T ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
				}, re.escape = function (e) {
					return (e + "").replace(te, ie)
				}, re.error = function (e) {
					throw new Error("Syntax error, unrecognized expression: " + e)
				}, re.uniqueSort = function (e) {
					var t, i = [],
						n = 0,
						o = 0;
					if (c = !m.detectDuplicates, l = !m.sortStable && e.slice(0), e.sort(I), c) {
						for (; t = e[o++];) t === e[o] && (n = i.push(o));
						for (; n--;) e.splice(i[n], 1)
					}
					return l = null, e
				}, r = re.getText = function (e) {
					var t, i = "",
						n = 0,
						o = e.nodeType;
					if (o) {
						if (1 === o || 9 === o || 11 === o) {
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) i += r(e)
						} else if (3 === o || 4 === o) return e.nodeValue
					} else
						for (; t = e[n++];) i += r(t);
					return i
				}, (w = re.selectors = {
					cacheLength: 50,
					createPseudo: se,
					match: Q,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function (e) {
							return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function (e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
						},
						PSEUDO: function (e) {
							var t, i = !e[6] && e[2];
							return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && F.test(i) && (t = h(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
						}
					},
					filter: {
						TAG: function (e) {
							var t = e.replace(Z, ee).toLowerCase();
							return "*" === e ? function () {
								return !0
							} : function (e) {
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function (e) {
							var t = p[e + " "];
							return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && p(e, function (e) {
								return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
							})
						},
						ATTR: function (i, n, o) {
							return function (e) {
								var t = re.attr(e, i);
								return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === o : "!=" === n ? t !== o : "^=" === n ? o && 0 === t.indexOf(o) : "*=" === n ? o && -1 < t.indexOf(o) : "$=" === n ? o && t.slice(-o.length) === o : "~=" === n ? -1 < (" " + t.replace(H, " ") + " ").indexOf(o) : "|=" === n && (t === o || t.slice(0, o.length + 1) === o + "-"))
							}
						},
						CHILD: function (h, e, t, f, g) {
							var v = "nth" !== h.slice(0, 3),
								b = "last" !== h.slice(-4),
								y = "of-type" === e;
							return 1 === f && 0 === g ? function (e) {
								return !!e.parentNode
							} : function (e, t, i) {
								var n, o, r, a, s, l, c = v !== b ? "nextSibling" : "previousSibling",
									d = e.parentNode,
									u = y && e.nodeName.toLowerCase(),
									p = !i && !y,
									m = !1;
								if (d) {
									if (v) {
										for (; c;) {
											for (a = e; a = a[c];)
												if (y ? a.nodeName.toLowerCase() === u : 1 === a.nodeType) return !1;
											l = c = "only" === h && !l && "nextSibling"
										}
										return !0
									}
									if (l = [b ? d.firstChild : d.lastChild], b && p) {
										for (m = (s = (n = (o = (r = (a = d)[S] || (a[S] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[h] || [])[0] === E && n[1]) && n[2], a = s && d.childNodes[s]; a = ++s && a && a[c] || (m = s = 0) || l.pop();)
											if (1 === a.nodeType && ++m && a === e) {
												o[h] = [E, s, m];
												break
											}
									} else if (p && (m = s = (n = (o = (r = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[h] || [])[0] === E && n[1]), !1 === m)
										for (;
											(a = ++s && a && a[c] || (m = s = 0) || l.pop()) && ((y ? a.nodeName.toLowerCase() !== u : 1 !== a.nodeType) || !++m || (p && ((o = (r = a[S] || (a[S] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[h] = [E, m]), a !== e)););
									return (m -= g) === f || m % f == 0 && 0 <= m / f
								}
							}
						},
						PSEUDO: function (e, r) {
							var t, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
							return a[S] ? a(r) : 1 < a.length ? (t = [e, e, "", r], w.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, t) {
								for (var i, n = a(e, r), o = n.length; o--;) e[i = L(e, n[o])] = !(t[i] = n[o])
							}) : function (e) {
								return a(e, 0, t)
							}) : a
						}
					},
					pseudos: {
						not: se(function (e) {
							var n = [],
								o = [],
								s = u(e.replace(q, "$1"));
							return s[S] ? se(function (e, t, i, n) {
								for (var o, r = s(e, null, n, []), a = e.length; a--;)(o = r[a]) && (e[a] = !(t[a] = o))
							}) : function (e, t, i) {
								return n[0] = e, s(n, null, i, o), n[0] = null, !o.pop()
							}
						}),
						has: se(function (t) {
							return function (e) {
								return 0 < re(t, e).length
							}
						}),
						contains: se(function (t) {
							return t = t.replace(Z, ee),
								function (e) {
									return -1 < (e.textContent || e.innerText || r(e)).indexOf(t)
								}
						}),
						lang: se(function (i) {
							return V.test(i || "") || re.error("unsupported lang: " + i), i = i.replace(Z, ee).toLowerCase(),
								function (e) {
									var t;
									do {
										if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
									} while ((e = e.parentNode) && 1 === e.nodeType);
									return !1
								}
						}),
						target: function (e) {
							var t = i.location && i.location.hash;
							return t && t.slice(1) === e.id
						},
						root: function (e) {
							return e === a
						},
						focus: function (e) {
							return e === x.activeElement && (!x.hasFocus || x.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
						},
						enabled: me(!1),
						disabled: me(!0),
						checked: function (e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !!e.checked || "option" === t && !!e.selected
						},
						selected: function (e) {
							return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
						},
						empty: function (e) {
							for (e = e.firstChild; e; e = e.nextSibling)
								if (e.nodeType < 6) return !1;
							return !0
						},
						parent: function (e) {
							return !w.pseudos.empty(e)
						},
						header: function (e) {
							return X.test(e.nodeName)
						},
						input: function (e) {
							return Y.test(e.nodeName)
						},
						button: function (e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function (e) {
							var t;
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
						},
						first: he(function () {
							return [0]
						}),
						last: he(function (e, t) {
							return [t - 1]
						}),
						eq: he(function (e, t, i) {
							return [i < 0 ? i + t : i]
						}),
						even: he(function (e, t) {
							for (var i = 0; i < t; i += 2) e.push(i);
							return e
						}),
						odd: he(function (e, t) {
							for (var i = 1; i < t; i += 2) e.push(i);
							return e
						}),
						lt: he(function (e, t, i) {
							for (var n = i < 0 ? i + t : i; 0 <= --n;) e.push(n);
							return e
						}),
						gt: he(function (e, t, i) {
							for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
							return e
						})
					}
				}).pseudos.nth = w.pseudos.eq, {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) w.pseudos[e] = ue(e);
			for (e in {
					submit: !0,
					reset: !0
				}) w.pseudos[e] = pe(e);

			function ge() {}

			function ve(e) {
				for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
				return n
			}

			function be(s, e, t) {
				var l = e.dir,
					c = e.next,
					d = c || l,
					u = t && "parentNode" === d,
					p = n++;
				return e.first ? function (e, t, i) {
					for (; e = e[l];)
						if (1 === e.nodeType || u) return s(e, t, i);
					return !1
				} : function (e, t, i) {
					var n, o, r, a = [E, p];
					if (i) {
						for (; e = e[l];)
							if ((1 === e.nodeType || u) && s(e, t, i)) return !0
					} else
						for (; e = e[l];)
							if (1 === e.nodeType || u)
								if (o = (r = e[S] || (e[S] = {}))[e.uniqueID] || (r[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e;
								else {
									if ((n = o[d]) && n[0] === E && n[1] === p) return a[2] = n[2];
									if ((o[d] = a)[2] = s(e, t, i)) return !0
								} return !1
				}
			}

			function ye(o) {
				return 1 < o.length ? function (e, t, i) {
					for (var n = o.length; n--;)
						if (!o[n](e, t, i)) return !1;
					return !0
				} : o[0]
			}

			function we(e, t, i, n, o) {
				for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(r = e[s]) && (i && !i(r, n, o) || (a.push(r), c && t.push(s)));
				return a
			}

			function ke(m, h, f, g, v, e) {
				return g && !g[S] && (g = ke(g)), v && !v[S] && (v = ke(v, e)), se(function (e, t, i, n) {
					var o, r, a, s = [],
						l = [],
						c = t.length,
						d = e || function (e, t, i) {
							for (var n = 0, o = t.length; n < o; n++) re(e, t[n], i);
							return i
						}(h || "*", i.nodeType ? [i] : i, []),
						u = !m || !e && h ? d : we(d, s, m, i, n),
						p = f ? v || (e ? m : c || g) ? [] : t : u;
					if (f && f(u, p, i, n), g)
						for (o = we(p, l), g(o, [], i, n), r = o.length; r--;)(a = o[r]) && (p[l[r]] = !(u[l[r]] = a));
					if (e) {
						if (v || m) {
							if (v) {
								for (o = [], r = p.length; r--;)(a = p[r]) && o.push(u[r] = a);
								v(null, p = [], o, n)
							}
							for (r = p.length; r--;)(a = p[r]) && -1 < (o = v ? L(e, a) : s[r]) && (e[o] = !(t[o] = a))
						}
					} else p = we(p === t ? p.splice(c, p.length) : p), v ? v(null, t, p, n) : D.apply(t, p)
				})
			}

			function Ce(e) {
				for (var o, t, i, n = e.length, r = w.relative[e[0].type], a = r || w.relative[" "], s = r ? 1 : 0, l = be(function (e) {
						return e === o
					}, a, !0), c = be(function (e) {
						return -1 < L(o, e)
					}, a, !0), d = [function (e, t, i) {
						var n = !r && (i || t !== k) || ((o = t).nodeType ? l(e, t, i) : c(e, t, i));
						return o = null, n
					}]; s < n; s++)
					if (t = w.relative[e[s].type]) d = [be(ye(d), t)];
					else {
						if ((t = w.filter[e[s].type].apply(null, e[s].matches))[S]) {
							for (i = ++s; i < n && !w.relative[e[i].type]; i++);
							return ke(1 < s && ye(d), 1 < s && ve(e.slice(0, s - 1).concat({
								value: " " === e[s - 2].type ? "*" : ""
							})).replace(q, "$1"), t, s < i && Ce(e.slice(s, i)), i < n && Ce(e = e.slice(i)), i < n && ve(e))
						}
						d.push(t)
					}
				return ye(d)
			}
			return ge.prototype = w.filters = w.pseudos, w.setFilters = new ge, h = re.tokenize = function (e, t) {
				var i, n, o, r, a, s, l, c = y[e + " "];
				if (c) return t ? 0 : c.slice(0);
				for (a = e, s = [], l = w.preFilter; a;) {
					for (r in i && !(n = U.exec(a)) || (n && (a = a.slice(n[0].length) || a), s.push(o = [])), i = !1, (n = z.exec(a)) && (i = n.shift(), o.push({
							value: i,
							type: n[0].replace(q, " ")
						}), a = a.slice(i.length)), w.filter) !(n = Q[r].exec(a)) || l[r] && !(n = l[r](n)) || (i = n.shift(), o.push({
						value: i,
						type: r,
						matches: n
					}), a = a.slice(i.length));
					if (!i) break
				}
				return t ? a.length : a ? re.error(e) : y(e, s).slice(0)
			}, u = re.compile = function (e, t) {
				var i, g, v, b, y, n, o = [],
					r = [],
					a = $[e + " "];
				if (!a) {
					for (t || (t = h(e)), i = t.length; i--;)(a = Ce(t[i]))[S] ? o.push(a) : r.push(a);
					(a = $(e, (g = r, v = o, b = 0 < v.length, y = 0 < g.length, n = function (e, t, i, n, o) {
						var r, a, s, l = 0,
							c = "0",
							d = e && [],
							u = [],
							p = k,
							m = e || y && w.find.TAG("*", o),
							h = E += null == p ? 1 : Math.random() || .1,
							f = m.length;
						for (o && (k = t === x || t || o); c !== f && null != (r = m[c]); c++) {
							if (y && r) {
								for (a = 0, t || r.ownerDocument === x || (C(r), i = !T); s = g[a++];)
									if (s(r, t || x, i)) {
										n.push(r);
										break
									}
								o && (E = h)
							}
							b && ((r = !s && r) && l--, e && d.push(r))
						}
						if (l += c, b && c !== l) {
							for (a = 0; s = v[a++];) s(d, u, t, i);
							if (e) {
								if (0 < l)
									for (; c--;) d[c] || u[c] || (u[c] = _.call(n));
								u = we(u)
							}
							D.apply(n, u), o && !e && 0 < u.length && 1 < l + v.length && re.uniqueSort(n)
						}
						return o && (E = h, k = p), d
					}, b ? se(n) : n))).selector = e
				}
				return a
			}, f = re.select = function (e, t, i, n) {
				var o, r, a, s, l, c = "function" == typeof e && e,
					d = !n && h(e = c.selector || e);
				if (i = i || [], 1 === d.length) {
					if (2 < (r = d[0] = d[0].slice(0)).length && "ID" === (a = r[0]).type && 9 === t.nodeType && T && w.relative[r[1].type]) {
						if (!(t = (w.find.ID(a.matches[0].replace(Z, ee), t) || [])[0])) return i;
						c && (t = t.parentNode), e = e.slice(r.shift().value.length)
					}
					for (o = Q.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !w.relative[s = a.type]);)
						if ((l = w.find[s]) && (n = l(a.matches[0].replace(Z, ee), J.test(r[0].type) && fe(t.parentNode) || t))) {
							if (r.splice(o, 1), !(e = n.length && ve(r))) return D.apply(i, n), i;
							break
						}
				}
				return (c || u(e, d))(n, t, !T, i, !t || J.test(e) && fe(t.parentNode) || t), i
			}, m.sortStable = S.split("").sort(I).join("") === S, m.detectDuplicates = !!c, C(), m.sortDetached = le(function (e) {
				return 1 & e.compareDocumentPosition(x.createElement("fieldset"))
			}), le(function (e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || ce("type|href|height|width", function (e, t, i) {
				if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), m.attributes && le(function (e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || ce("value", function (e, t, i) {
				if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
			}), le(function (e) {
				return null == e.getAttribute("disabled")
			}) || ce(O, function (e, t, i) {
				var n;
				if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
			}), re
		}(x);
		S.find = m, S.expr = m.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = m.uniqueSort, S.text = m.getText, S.isXMLDoc = m.isXML, S.contains = m.contains, S.escapeSelector = m.escape;
		var h = function (e, t, i) {
				for (var n = [], o = void 0 !== i;
					(e = e[t]) && 9 !== e.nodeType;)
					if (1 === e.nodeType) {
						if (o && S(e).is(i)) break;
						n.push(e)
					}
				return n
			},
			C = function (e, t) {
				for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
				return i
			},
			E = S.expr.match.needsContext;

		function $(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		}
		var I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

		function A(e, i, n) {
			return b(i) ? S.grep(e, function (e, t) {
				return !!i.call(e, t, e) !== n
			}) : i.nodeType ? S.grep(e, function (e) {
				return e === i !== n
			}) : "string" != typeof i ? S.grep(e, function (e) {
				return -1 < o.call(i, e) !== n
			}) : S.filter(i, e, n)
		}
		S.filter = function (e, t, i) {
			var n = t[0];
			return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? S.find.matchesSelector(n, e) ? [n] : [] : S.find.matches(e, S.grep(t, function (e) {
				return 1 === e.nodeType
			}))
		}, S.fn.extend({
			find: function (e) {
				var t, i, n = this.length,
					o = this;
				if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
					for (t = 0; t < n; t++)
						if (S.contains(o[t], this)) return !0
				}));
				for (i = this.pushStack([]), t = 0; t < n; t++) S.find(e, o[t], i);
				return 1 < n ? S.uniqueSort(i) : i
			},
			filter: function (e) {
				return this.pushStack(A(this, e || [], !1))
			},
			not: function (e) {
				return this.pushStack(A(this, e || [], !0))
			},
			is: function (e) {
				return !!A(this, "string" == typeof e && E.test(e) ? S(e) : e || [], !1).length
			}
		});
		var _, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
		(S.fn.init = function (e, t, i) {
			var n, o;
			if (!e) return this;
			if (i = i || _, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== i.ready ? i.ready(e) : e(S) : S.makeArray(e, this);
			if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : M.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
			if (n[1]) {
				if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), I.test(n[1]) && S.isPlainObject(t))
					for (n in t) b(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
				return this
			}
			return (o = T.getElementById(n[2])) && (this[0] = o, this.length = 1), this
		}).prototype = S.fn, _ = S(T);
		var D = /^(?:parents|prev(?:Until|All))/,
			j = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};

		function L(e, t) {
			for (;
				(e = e[t]) && 1 !== e.nodeType;);
			return e
		}
		S.fn.extend({
			has: function (e) {
				var t = S(e, this),
					i = t.length;
				return this.filter(function () {
					for (var e = 0; e < i; e++)
						if (S.contains(this, t[e])) return !0
				})
			},
			closest: function (e, t) {
				var i, n = 0,
					o = this.length,
					r = [],
					a = "string" != typeof e && S(e);
				if (!E.test(e))
					for (; n < o; n++)
						for (i = this[n]; i && i !== t; i = i.parentNode)
							if (i.nodeType < 11 && (a ? -1 < a.index(i) : 1 === i.nodeType && S.find.matchesSelector(i, e))) {
								r.push(i);
								break
							}
				return this.pushStack(1 < r.length ? S.uniqueSort(r) : r)
			},
			index: function (e) {
				return e ? "string" == typeof e ? o.call(S(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function (e, t) {
				return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
			},
			addBack: function (e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), S.each({
			parent: function (e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function (e) {
				return h(e, "parentNode")
			},
			parentsUntil: function (e, t, i) {
				return h(e, "parentNode", i)
			},
			next: function (e) {
				return L(e, "nextSibling")
			},
			prev: function (e) {
				return L(e, "previousSibling")
			},
			nextAll: function (e) {
				return h(e, "nextSibling")
			},
			prevAll: function (e) {
				return h(e, "previousSibling")
			},
			nextUntil: function (e, t, i) {
				return h(e, "nextSibling", i)
			},
			prevUntil: function (e, t, i) {
				return h(e, "previousSibling", i)
			},
			siblings: function (e) {
				return C((e.parentNode || {}).firstChild, e)
			},
			children: function (e) {
				return C(e.firstChild)
			},
			contents: function (e) {
				return $(e, "iframe") ? e.contentDocument : ($(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
			}
		}, function (n, o) {
			S.fn[n] = function (e, t) {
				var i = S.map(this, o, e);
				return "Until" !== n.slice(-5) && (t = e), t && "string" == typeof t && (i = S.filter(t, i)), 1 < this.length && (j[n] || S.uniqueSort(i), D.test(n) && i.reverse()), this.pushStack(i)
			}
		});
		var O = /[^\x20\t\r\n\f]+/g;

		function B(e) {
			return e
		}

		function P(e) {
			throw e
		}

		function N(e, t, i, n) {
			var o;
			try {
				e && b(o = e.promise) ? o.call(e).done(t).fail(i) : e && b(o = e.then) ? o.call(e, t, i) : t.apply(void 0, [e].slice(n))
			} catch (e) {
				i.apply(void 0, [e])
			}
		}
		S.Callbacks = function (n) {
			var e, i;
			n = "string" == typeof n ? (e = n, i = {}, S.each(e.match(O) || [], function (e, t) {
				i[t] = !0
			}), i) : S.extend({}, n);
			var o, t, r, a, s = [],
				l = [],
				c = -1,
				d = function () {
					for (a = a || n.once, r = o = !0; l.length; c = -1)
						for (t = l.shift(); ++c < s.length;) !1 === s[c].apply(t[0], t[1]) && n.stopOnFalse && (c = s.length, t = !1);
					n.memory || (t = !1), o = !1, a && (s = t ? [] : "")
				},
				u = {
					add: function () {
						return s && (t && !o && (c = s.length - 1, l.push(t)), function i(e) {
							S.each(e, function (e, t) {
								b(t) ? n.unique && u.has(t) || s.push(t) : t && t.length && "string" !== k(t) && i(t)
							})
						}(arguments), t && !o && d()), this
					},
					remove: function () {
						return S.each(arguments, function (e, t) {
							for (var i; - 1 < (i = S.inArray(t, s, i));) s.splice(i, 1), i <= c && c--
						}), this
					},
					has: function (e) {
						return e ? -1 < S.inArray(e, s) : 0 < s.length
					},
					empty: function () {
						return s && (s = []), this
					},
					disable: function () {
						return a = l = [], s = t = "", this
					},
					disabled: function () {
						return !s
					},
					lock: function () {
						return a = l = [], t || o || (s = t = ""), this
					},
					locked: function () {
						return !!a
					},
					fireWith: function (e, t) {
						return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || d()), this
					},
					fire: function () {
						return u.fireWith(this, arguments), this
					},
					fired: function () {
						return !!r
					}
				};
			return u
		}, S.extend({
			Deferred: function (e) {
				var r = [
						["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
						["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
						["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
					],
					o = "pending",
					a = {
						state: function () {
							return o
						},
						always: function () {
							return s.done(arguments).fail(arguments), this
						},
						catch: function (e) {
							return a.then(null, e)
						},
						pipe: function () {
							var o = arguments;
							return S.Deferred(function (n) {
								S.each(r, function (e, t) {
									var i = b(o[t[4]]) && o[t[4]];
									s[t[1]](function () {
										var e = i && i.apply(this, arguments);
										e && b(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this, i ? [e] : arguments)
									})
								}), o = null
							}).promise()
						},
						then: function (t, i, n) {
							var l = 0;

							function c(o, r, a, s) {
								return function () {
									var i = this,
										n = arguments,
										e = function () {
											var e, t;
											if (!(o < l)) {
												if ((e = a.apply(i, n)) === r.promise()) throw new TypeError("Thenable self-resolution");
												t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? s ? t.call(e, c(l, r, B, s), c(l, r, P, s)) : (l++, t.call(e, c(l, r, B, s), c(l, r, P, s), c(l, r, B, r.notifyWith))) : (a !== B && (i = void 0, n = [e]), (s || r.resolveWith)(i, n))
											}
										},
										t = s ? e : function () {
											try {
												e()
											} catch (e) {
												S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (a !== P && (i = void 0, n = [e]), r.rejectWith(i, n))
											}
										};
									o ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), x.setTimeout(t))
								}
							}
							return S.Deferred(function (e) {
								r[0][3].add(c(0, e, b(n) ? n : B, e.notifyWith)), r[1][3].add(c(0, e, b(t) ? t : B)), r[2][3].add(c(0, e, b(i) ? i : P))
							}).promise()
						},
						promise: function (e) {
							return null != e ? S.extend(e, a) : a
						}
					},
					s = {};
				return S.each(r, function (e, t) {
					var i = t[2],
						n = t[5];
					a[t[1]] = i.add, n && i.add(function () {
						o = n
					}, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock), i.add(t[3].fire), s[t[0]] = function () {
						return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
					}, s[t[0] + "With"] = i.fireWith
				}), a.promise(s), e && e.call(s, s), s
			},
			when: function (e) {
				var i = arguments.length,
					t = i,
					n = Array(t),
					o = s.call(arguments),
					r = S.Deferred(),
					a = function (t) {
						return function (e) {
							n[t] = this, o[t] = 1 < arguments.length ? s.call(arguments) : e, --i || r.resolveWith(n, o)
						}
					};
				if (i <= 1 && (N(e, r.done(a(t)).resolve, r.reject, !i), "pending" === r.state() || b(o[t] && o[t].then))) return r.then();
				for (; t--;) N(o[t], a(t), r.reject);
				return r.promise()
			}
		});
		var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
		S.Deferred.exceptionHook = function (e, t) {
			x.console && x.console.warn && e && R.test(e.name) && x.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
		}, S.readyException = function (e) {
			x.setTimeout(function () {
				throw e
			})
		};
		var H = S.Deferred();

		function q() {
			T.removeEventListener("DOMContentLoaded", q), x.removeEventListener("load", q), S.ready()
		}
		S.fn.ready = function (e) {
			return H.then(e).catch(function (e) {
				S.readyException(e)
			}), this
		}, S.extend({
			isReady: !1,
			readyWait: 1,
			ready: function (e) {
				(!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait || H.resolveWith(T, [S]))
			}
		}), S.ready.then = H.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? x.setTimeout(S.ready) : (T.addEventListener("DOMContentLoaded", q), x.addEventListener("load", q));
		var U = function (e, t, i, n, o, r, a) {
				var s = 0,
					l = e.length,
					c = null == i;
				if ("object" === k(i))
					for (s in o = !0, i) U(e, t, s, i[s], !0, r, a);
				else if (void 0 !== n && (o = !0, b(n) || (a = !0), c && (t = a ? (t.call(e, n), null) : (c = t, function (e, t, i) {
						return c.call(S(e), i)
					})), t))
					for (; s < l; s++) t(e[s], i, a ? n : n.call(e[s], s, t(e[s], i)));
				return o ? e : c ? t.call(e) : l ? t(e[0], i) : r
			},
			z = /^-ms-/,
			W = /-([a-z])/g;

		function F(e, t) {
			return t.toUpperCase()
		}

		function V(e) {
			return e.replace(z, "ms-").replace(W, F)
		}
		var Q = function (e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};

		function Y() {
			this.expando = S.expando + Y.uid++
		}
		Y.uid = 1, Y.prototype = {
			cache: function (e) {
				var t = e[this.expando];
				return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
					value: t,
					configurable: !0
				}))), t
			},
			set: function (e, t, i) {
				var n, o = this.cache(e);
				if ("string" == typeof t) o[V(t)] = i;
				else
					for (n in t) o[V(n)] = t[n];
				return o
			},
			get: function (e, t) {
				return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
			},
			access: function (e, t, i) {
				return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
			},
			remove: function (e, t) {
				var i, n = e[this.expando];
				if (void 0 !== n) {
					if (void 0 !== t) {
						i = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in n ? [t] : t.match(O) || []).length;
						for (; i--;) delete n[t[i]]
					}(void 0 === t || S.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
				}
			},
			hasData: function (e) {
				var t = e[this.expando];
				return void 0 !== t && !S.isEmptyObject(t)
			}
		};
		var X = new Y,
			G = new Y,
			K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			J = /[A-Z]/g;

		function Z(e, t, i) {
			var n, o;
			if (void 0 === i && 1 === e.nodeType)
				if (n = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (i = e.getAttribute(n))) {
					try {
						i = "true" === (o = i) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : K.test(o) ? JSON.parse(o) : o)
					} catch (e) {}
					G.set(e, t, i)
				} else i = void 0;
			return i
		}
		S.extend({
			hasData: function (e) {
				return G.hasData(e) || X.hasData(e)
			},
			data: function (e, t, i) {
				return G.access(e, t, i)
			},
			removeData: function (e, t) {
				G.remove(e, t)
			},
			_data: function (e, t, i) {
				return X.access(e, t, i)
			},
			_removeData: function (e, t) {
				X.remove(e, t)
			}
		}), S.fn.extend({
			data: function (i, e) {
				var t, n, o, r = this[0],
					a = r && r.attributes;
				if (void 0 !== i) return "object" == typeof i ? this.each(function () {
					G.set(this, i)
				}) : U(this, function (e) {
					var t;
					if (r && void 0 === e) {
						if (void 0 !== (t = G.get(r, i))) return t;
						if (void 0 !== (t = Z(r, i))) return t
					} else this.each(function () {
						G.set(this, i, e)
					})
				}, null, e, 1 < arguments.length, null, !0);
				if (this.length && (o = G.get(r), 1 === r.nodeType && !X.get(r, "hasDataAttrs"))) {
					for (t = a.length; t--;) a[t] && 0 === (n = a[t].name).indexOf("data-") && (n = V(n.slice(5)), Z(r, n, o[n]));
					X.set(r, "hasDataAttrs", !0)
				}
				return o
			},
			removeData: function (e) {
				return this.each(function () {
					G.remove(this, e)
				})
			}
		}), S.extend({
			queue: function (e, t, i) {
				var n;
				if (e) return t = (t || "fx") + "queue", n = X.get(e, t), i && (!n || Array.isArray(i) ? n = X.access(e, t, S.makeArray(i)) : n.push(i)), n || []
			},
			dequeue: function (e, t) {
				t = t || "fx";
				var i = S.queue(e, t),
					n = i.length,
					o = i.shift(),
					r = S._queueHooks(e, t);
				"inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete r.stop, o.call(e, function () {
					S.dequeue(e, t)
				}, r)), !n && r && r.empty.fire()
			},
			_queueHooks: function (e, t) {
				var i = t + "queueHooks";
				return X.get(e, i) || X.access(e, i, {
					empty: S.Callbacks("once memory").add(function () {
						X.remove(e, [t + "queue", i])
					})
				})
			}
		}), S.fn.extend({
			queue: function (t, i) {
				var e = 2;
				return "string" != typeof t && (i = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === i ? this : this.each(function () {
					var e = S.queue(this, t, i);
					S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
				})
			},
			dequeue: function (e) {
				return this.each(function () {
					S.dequeue(this, e)
				})
			},
			clearQueue: function (e) {
				return this.queue(e || "fx", [])
			},
			promise: function (e, t) {
				var i, n = 1,
					o = S.Deferred(),
					r = this,
					a = this.length,
					s = function () {
						--n || o.resolveWith(r, [r])
					};
				for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = X.get(r[a], e + "queueHooks")) && i.empty && (n++, i.empty.add(s));
				return s(), o.promise(t)
			}
		});
		var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
			ie = ["Top", "Right", "Bottom", "Left"],
			ne = function (e, t) {
				return "none" === (e = t || e).style.display || "" === e.style.display && S.contains(e.ownerDocument, e) && "none" === S.css(e, "display")
			},
			oe = function (e, t, i, n) {
				var o, r, a = {};
				for (r in t) a[r] = e.style[r], e.style[r] = t[r];
				for (r in o = i.apply(e, n || []), t) e.style[r] = a[r];
				return o
			};

		function re(e, t, i, n) {
			var o, r, a = 20,
				s = n ? function () {
					return n.cur()
				} : function () {
					return S.css(e, t, "")
				},
				l = s(),
				c = i && i[3] || (S.cssNumber[t] ? "" : "px"),
				d = (S.cssNumber[t] || "px" !== c && +l) && te.exec(S.css(e, t));
			if (d && d[3] !== c) {
				for (l /= 2, c = c || d[3], d = +l || 1; a--;) S.style(e, t, d + c), (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0), d /= r;
				d *= 2, S.style(e, t, d + c), i = i || []
			}
			return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = o)), o
		}
		var ae = {};

		function se(e, t) {
			for (var i, n, o = [], r = 0, a = e.length; r < a; r++)(n = e[r]).style && (i = n.style.display, t ? ("none" === i && (o[r] = X.get(n, "display") || null, o[r] || (n.style.display = "")), "" === n.style.display && ne(n) && (o[r] = (u = c = l = void 0, c = (s = n).ownerDocument, d = s.nodeName, (u = ae[d]) || (l = c.body.appendChild(c.createElement(d)), u = S.css(l, "display"), l.parentNode.removeChild(l), "none" === u && (u = "block"), ae[d] = u)))) : "none" !== i && (o[r] = "none", X.set(n, "display", i)));
			var s, l, c, d, u;
			for (r = 0; r < a; r++) null != o[r] && (e[r].style.display = o[r]);
			return e
		}
		S.fn.extend({
			show: function () {
				return se(this, !0)
			},
			hide: function () {
				return se(this)
			},
			toggle: function (e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
					ne(this) ? S(this).show() : S(this).hide()
				})
			}
		});
		var le = /^(?:checkbox|radio)$/i,
			ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
			de = /^$|^module$|\/(?:java|ecma)script/i,
			ue = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};

		function pe(e, t) {
			var i;
			return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && $(e, t) ? S.merge([e], i) : i
		}

		function me(e, t) {
			for (var i = 0, n = e.length; i < n; i++) X.set(e[i], "globalEval", !t || X.get(t[i], "globalEval"))
		}
		ue.optgroup = ue.option, ue.tbody = ue.tfoot = ue.colgroup = ue.caption = ue.thead, ue.th = ue.td;
		var he, fe, ge = /<|&#?\w+;/;

		function ve(e, t, i, n, o) {
			for (var r, a, s, l, c, d, u = t.createDocumentFragment(), p = [], m = 0, h = e.length; m < h; m++)
				if ((r = e[m]) || 0 === r)
					if ("object" === k(r)) S.merge(p, r.nodeType ? [r] : r);
					else if (ge.test(r)) {
				for (a = a || u.appendChild(t.createElement("div")), s = (ce.exec(r) || ["", ""])[1].toLowerCase(), l = ue[s] || ue._default, a.innerHTML = l[1] + S.htmlPrefilter(r) + l[2], d = l[0]; d--;) a = a.lastChild;
				S.merge(p, a.childNodes), (a = u.firstChild).textContent = ""
			} else p.push(t.createTextNode(r));
			for (u.textContent = "", m = 0; r = p[m++];)
				if (n && -1 < S.inArray(r, n)) o && o.push(r);
				else if (c = S.contains(r.ownerDocument, r), a = pe(u.appendChild(r), "script"), c && me(a), i)
				for (d = 0; r = a[d++];) de.test(r.type || "") && i.push(r);
			return u
		}
		he = T.createDocumentFragment().appendChild(T.createElement("div")), (fe = T.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), he.appendChild(fe), v.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue;
		var be = T.documentElement,
			ye = /^key/,
			we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			ke = /^([^.]*)(?:\.(.+)|)/;

		function Ce() {
			return !0
		}

		function xe() {
			return !1
		}

		function Te() {
			try {
				return T.activeElement
			} catch (e) {}
		}

		function Se(e, t, i, n, o, r) {
			var a, s;
			if ("object" == typeof t) {
				for (s in "string" != typeof i && (n = n || i, i = void 0), t) Se(e, s, i, n, t[s], r);
				return e
			}
			if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = xe;
			else if (!o) return e;
			return 1 === r && (a = o, (o = function (e) {
				return S().off(e), a.apply(this, arguments)
			}).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
				S.event.add(this, t, o, n, i)
			})
		}
		S.event = {
			global: {},
			add: function (t, e, i, n, o) {
				var r, a, s, l, c, d, u, p, m, h, f, g = X.get(t);
				if (g)
					for (i.handler && (i = (r = i).handler, o = r.selector), o && S.find.matchesSelector(be, o), i.guid || (i.guid = S.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (e) {
							return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
						}), c = (e = (e || "").match(O) || [""]).length; c--;) m = f = (s = ke.exec(e[c]) || [])[1], h = (s[2] || "").split(".").sort(), m && (u = S.event.special[m] || {}, m = (o ? u.delegateType : u.bindType) || m, u = S.event.special[m] || {}, d = S.extend({
						type: m,
						origType: f,
						data: n,
						handler: i,
						guid: i.guid,
						selector: o,
						needsContext: o && S.expr.match.needsContext.test(o),
						namespace: h.join(".")
					}, r), (p = l[m]) || ((p = l[m] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, h, a) || t.addEventListener && t.addEventListener(m, a)), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), S.event.global[m] = !0)
			},
			remove: function (e, t, i, n, o) {
				var r, a, s, l, c, d, u, p, m, h, f, g = X.hasData(e) && X.get(e);
				if (g && (l = g.events)) {
					for (c = (t = (t || "").match(O) || [""]).length; c--;)
						if (m = f = (s = ke.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), m) {
							for (u = S.event.special[m] || {}, p = l[m = (n ? u.delegateType : u.bindType) || m] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = p.length; r--;) d = p[r], !o && f !== d.origType || i && i.guid !== d.guid || s && !s.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
							a && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, g.handle) || S.removeEvent(e, m, g.handle), delete l[m])
						} else
							for (m in l) S.event.remove(e, m + t[c], i, n, !0);
					S.isEmptyObject(l) && X.remove(e, "handle events")
				}
			},
			dispatch: function (e) {
				var t, i, n, o, r, a, s = S.event.fix(e),
					l = new Array(arguments.length),
					c = (X.get(this, "events") || {})[s.type] || [],
					d = S.event.special[s.type] || {};
				for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
				if (s.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, s)) {
					for (a = S.event.handlers.call(this, s, c), t = 0;
						(o = a[t++]) && !s.isPropagationStopped();)
						for (s.currentTarget = o.elem, i = 0;
							(r = o.handlers[i++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (n = ((S.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = n) && (s.preventDefault(), s.stopPropagation()));
					return d.postDispatch && d.postDispatch.call(this, s), s.result
				}
			},
			handlers: function (e, t) {
				var i, n, o, r, a, s = [],
					l = t.delegateCount,
					c = e.target;
				if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
					for (; c !== this; c = c.parentNode || this)
						if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
							for (r = [], a = {}, i = 0; i < l; i++) void 0 === a[o = (n = t[i]).selector + " "] && (a[o] = n.needsContext ? -1 < S(o, this).index(c) : S.find(o, this, null, [c]).length), a[o] && r.push(n);
							r.length && s.push({
								elem: c,
								handlers: r
							})
						}
				return c = this, l < t.length && s.push({
					elem: c,
					handlers: t.slice(l)
				}), s
			},
			addProp: function (t, e) {
				Object.defineProperty(S.Event.prototype, t, {
					enumerable: !0,
					configurable: !0,
					get: b(e) ? function () {
						if (this.originalEvent) return e(this.originalEvent)
					} : function () {
						if (this.originalEvent) return this.originalEvent[t]
					},
					set: function (e) {
						Object.defineProperty(this, t, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: e
						})
					}
				})
			},
			fix: function (e) {
				return e[S.expando] ? e : new S.Event(e)
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function () {
						if (this !== Te() && this.focus) return this.focus(), !1
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function () {
						if (this === Te() && this.blur) return this.blur(), !1
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function () {
						if ("checkbox" === this.type && this.click && $(this, "input")) return this.click(), !1
					},
					_default: function (e) {
						return $(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function (e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			}
		}, S.removeEvent = function (e, t, i) {
			e.removeEventListener && e.removeEventListener(t, i)
		}, S.Event = function (e, t) {
			if (!(this instanceof S.Event)) return new S.Event(e, t);
			e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
		}, S.Event.prototype = {
			constructor: S.Event,
			isDefaultPrevented: xe,
			isPropagationStopped: xe,
			isImmediatePropagationStopped: xe,
			isSimulated: !1,
			preventDefault: function () {
				var e = this.originalEvent;
				this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
			},
			stopPropagation: function () {
				var e = this.originalEvent;
				this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, S.each({
			altKey: !0,
			bubbles: !0,
			cancelable: !0,
			changedTouches: !0,
			ctrlKey: !0,
			detail: !0,
			eventPhase: !0,
			metaKey: !0,
			pageX: !0,
			pageY: !0,
			shiftKey: !0,
			view: !0,
			char: !0,
			charCode: !0,
			key: !0,
			keyCode: !0,
			button: !0,
			buttons: !0,
			clientX: !0,
			clientY: !0,
			offsetX: !0,
			offsetY: !0,
			pointerId: !0,
			pointerType: !0,
			screenX: !0,
			screenY: !0,
			targetTouches: !0,
			toElement: !0,
			touches: !0,
			which: function (e) {
				var t = e.button;
				return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
			}
		}, S.event.addProp), S.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (e, o) {
			S.event.special[e] = {
				delegateType: o,
				bindType: o,
				handle: function (e) {
					var t, i = e.relatedTarget,
						n = e.handleObj;
					return i && (i === this || S.contains(this, i)) || (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = o), t
				}
			}
		}), S.fn.extend({
			on: function (e, t, i, n) {
				return Se(this, e, t, i, n)
			},
			one: function (e, t, i, n) {
				return Se(this, e, t, i, n, 1)
			},
			off: function (e, t, i) {
				var n, o;
				if (e && e.preventDefault && e.handleObj) return n = e.handleObj, S(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
				if ("object" != typeof e) return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = xe), this.each(function () {
					S.event.remove(this, e, i, t)
				});
				for (o in e) this.off(o, t, e[o]);
				return this
			}
		});
		var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
			$e = /<script|<style|<link/i,
			Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

		function _e(e, t) {
			return $(e, "table") && $(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
		}

		function Me(e) {
			return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
		}

		function De(e) {
			return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
		}

		function je(e, t) {
			var i, n, o, r, a, s, l, c;
			if (1 === t.nodeType) {
				if (X.hasData(e) && (r = X.access(e), a = X.set(t, r), c = r.events))
					for (o in delete a.handle, a.events = {}, c)
						for (i = 0, n = c[o].length; i < n; i++) S.event.add(t, o, c[o][i]);
				G.hasData(e) && (s = G.access(e), l = S.extend({}, s), G.set(t, l))
			}
		}

		function Le(i, n, o, r) {
			n = f.apply([], n);
			var e, t, a, s, l, c, d = 0,
				u = i.length,
				p = u - 1,
				m = n[0],
				h = b(m);
			if (h || 1 < u && "string" == typeof m && !v.checkClone && Ie.test(m)) return i.each(function (e) {
				var t = i.eq(e);
				h && (n[0] = m.call(this, e, t.html())), Le(t, n, o, r)
			});
			if (u && (t = (e = ve(n, i[0].ownerDocument, !1, i, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
				for (s = (a = S.map(pe(e, "script"), Me)).length; d < u; d++) l = e, d !== p && (l = S.clone(l, !0, !0), s && S.merge(a, pe(l, "script"))), o.call(i[d], l, d);
				if (s)
					for (c = a[a.length - 1].ownerDocument, S.map(a, De), d = 0; d < s; d++) l = a[d], de.test(l.type || "") && !X.access(l, "globalEval") && S.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && S._evalUrl(l.src) : w(l.textContent.replace(Ae, ""), c, l))
			}
			return i
		}

		function Oe(e, t, i) {
			for (var n, o = t ? S.filter(t, e) : e, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || S.cleanData(pe(n)), n.parentNode && (i && S.contains(n.ownerDocument, n) && me(pe(n, "script")), n.parentNode.removeChild(n));
			return e
		}
		S.extend({
			htmlPrefilter: function (e) {
				return e.replace(Ee, "<$1></$2>")
			},
			clone: function (e, t, i) {
				var n, o, r, a, s, l, c, d = e.cloneNode(!0),
					u = S.contains(e.ownerDocument, e);
				if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
					for (a = pe(d), n = 0, o = (r = pe(e)).length; n < o; n++) s = r[n], l = a[n], void 0, "input" === (c = l.nodeName.toLowerCase()) && le.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
				if (t)
					if (i)
						for (r = r || pe(e), a = a || pe(d), n = 0, o = r.length; n < o; n++) je(r[n], a[n]);
					else je(e, d);
				return 0 < (a = pe(d, "script")).length && me(a, !u && pe(e, "script")), d
			},
			cleanData: function (e) {
				for (var t, i, n, o = S.event.special, r = 0; void 0 !== (i = e[r]); r++)
					if (Q(i)) {
						if (t = i[X.expando]) {
							if (t.events)
								for (n in t.events) o[n] ? S.event.remove(i, n) : S.removeEvent(i, n, t.handle);
							i[X.expando] = void 0
						}
						i[G.expando] && (i[G.expando] = void 0)
					}
			}
		}), S.fn.extend({
			detach: function (e) {
				return Oe(this, e, !0)
			},
			remove: function (e) {
				return Oe(this, e)
			},
			text: function (e) {
				return U(this, function (e) {
					return void 0 === e ? S.text(this) : this.empty().each(function () {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
					})
				}, null, e, arguments.length)
			},
			append: function () {
				return Le(this, arguments, function (e) {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _e(this, e).appendChild(e)
				})
			},
			prepend: function () {
				return Le(this, arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = _e(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function () {
				return Le(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function () {
				return Le(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			empty: function () {
				for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(pe(e, !1)), e.textContent = "");
				return this
			},
			clone: function (e, t) {
				return e = null != e && e, t = null == t ? e : t, this.map(function () {
					return S.clone(this, e, t)
				})
			},
			html: function (e) {
				return U(this, function (e) {
					var t = this[0] || {},
						i = 0,
						n = this.length;
					if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
					if ("string" == typeof e && !$e.test(e) && !ue[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = S.htmlPrefilter(e);
						try {
							for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (S.cleanData(pe(t, !1)), t.innerHTML = e);
							t = 0
						} catch (e) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function () {
				var i = [];
				return Le(this, arguments, function (e) {
					var t = this.parentNode;
					S.inArray(this, i) < 0 && (S.cleanData(pe(this)), t && t.replaceChild(e, this))
				}, i)
			}
		}), S.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (e, a) {
			S.fn[e] = function (e) {
				for (var t, i = [], n = S(e), o = n.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), S(n[r])[a](t), l.apply(i, t.get());
				return this.pushStack(i)
			}
		});
		var Be = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
			Pe = function (e) {
				var t = e.ownerDocument.defaultView;
				return t && t.opener || (t = x), t.getComputedStyle(e)
			},
			Ne = new RegExp(ie.join("|"), "i");

		function Re(e, t, i) {
			var n, o, r, a, s = e.style;
			return (i = i || Pe(e)) && ("" !== (a = i.getPropertyValue(t) || i[t]) || S.contains(e.ownerDocument, e) || (a = S.style(e, t)), !v.pixelBoxStyles() && Be.test(a) && Ne.test(t) && (n = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = i.width, s.width = n, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
		}

		function He(e, t) {
			return {
				get: function () {
					if (!e()) return (this.get = t).apply(this, arguments);
					delete this.get
				}
			}
		}! function () {
			function e() {
				if (l) {
					s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(s).appendChild(l);
					var e = x.getComputedStyle(l);
					i = "1%" !== e.top, a = 12 === t(e.marginLeft), l.style.right = "60%", r = 36 === t(e.right), n = 36 === t(e.width), l.style.position = "absolute", o = 36 === l.offsetWidth || "absolute", be.removeChild(s), l = null
				}
			}

			function t(e) {
				return Math.round(parseFloat(e))
			}
			var i, n, o, r, a, s = T.createElement("div"),
				l = T.createElement("div");
			l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(v, {
				boxSizingReliable: function () {
					return e(), n
				},
				pixelBoxStyles: function () {
					return e(), r
				},
				pixelPosition: function () {
					return e(), i
				},
				reliableMarginLeft: function () {
					return e(), a
				},
				scrollboxSize: function () {
					return e(), o
				}
			}))
		}();
		var qe = /^(none|table(?!-c[ea]).+)/,
			Ue = /^--/,
			ze = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			We = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			Fe = ["Webkit", "Moz", "ms"],
			Ve = T.createElement("div").style;

		function Qe(e) {
			var t = S.cssProps[e];
			return t || (t = S.cssProps[e] = function (e) {
				if (e in Ve) return e;
				for (var t = e[0].toUpperCase() + e.slice(1), i = Fe.length; i--;)
					if ((e = Fe[i] + t) in Ve) return e
			}(e) || e), t
		}

		function Ye(e, t, i) {
			var n = te.exec(t);
			return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
		}

		function Xe(e, t, i, n, o, r) {
			var a = "width" === t ? 1 : 0,
				s = 0,
				l = 0;
			if (i === (n ? "border" : "content")) return 0;
			for (; a < 4; a += 2) "margin" === i && (l += S.css(e, i + ie[a], !0, o)), n ? ("content" === i && (l -= S.css(e, "padding" + ie[a], !0, o)), "margin" !== i && (l -= S.css(e, "border" + ie[a] + "Width", !0, o))) : (l += S.css(e, "padding" + ie[a], !0, o), "padding" !== i ? l += S.css(e, "border" + ie[a] + "Width", !0, o) : s += S.css(e, "border" + ie[a] + "Width", !0, o));
			return !n && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - .5))), l
		}

		function Ge(e, t, i) {
			var n = Pe(e),
				o = Re(e, t, n),
				r = "border-box" === S.css(e, "boxSizing", !1, n),
				a = r;
			if (Be.test(o)) {
				if (!i) return o;
				o = "auto"
			}
			return a = a && (v.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === S.css(e, "display", !1, n)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (o = parseFloat(o) || 0) + Xe(e, t, i || (r ? "border" : "content"), a, n, o) + "px"
		}

		function Ke(e, t, i, n, o) {
			return new Ke.prototype.init(e, t, i, n, o)
		}
		S.extend({
			cssHooks: {
				opacity: {
					get: function (e, t) {
						if (t) {
							var i = Re(e, "opacity");
							return "" === i ? "1" : i
						}
					}
				}
			},
			cssNumber: {
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {},
			style: function (e, t, i, n) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var o, r, a, s = V(t),
						l = Ue.test(t),
						c = e.style;
					if (l || (t = Qe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === i) return a && "get" in a && void 0 !== (o = a.get(e, !1, n)) ? o : c[t];
					"string" == (r = typeof i) && (o = te.exec(i)) && o[1] && (i = re(e, t, o), r = "number"), null != i && i == i && ("number" === r && (i += o && o[3] || (S.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (i = a.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i))
				}
			},
			css: function (e, t, i, n) {
				var o, r, a, s = V(t);
				return Ue.test(t) || (t = Qe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (o = a.get(e, !0, i)), void 0 === o && (o = Re(e, t, n)), "normal" === o && t in We && (o = We[t]), "" === i || i ? (r = parseFloat(o), !0 === i || isFinite(r) ? r || 0 : o) : o
			}
		}), S.each(["height", "width"], function (e, s) {
			S.cssHooks[s] = {
				get: function (e, t, i) {
					if (t) return !qe.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, s, i) : oe(e, ze, function () {
						return Ge(e, s, i)
					})
				},
				set: function (e, t, i) {
					var n, o = Pe(e),
						r = "border-box" === S.css(e, "boxSizing", !1, o),
						a = i && Xe(e, s, i, r, o);
					return r && v.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(o[s]) - Xe(e, s, "border", !1, o) - .5)), a && (n = te.exec(t)) && "px" !== (n[3] || "px") && (e.style[s] = t, t = S.css(e, s)), Ye(0, t, a)
				}
			}
		}), S.cssHooks.marginLeft = He(v.reliableMarginLeft, function (e, t) {
			if (t) return (parseFloat(Re(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {
				marginLeft: 0
			}, function () {
				return e.getBoundingClientRect().left
			})) + "px"
		}), S.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (o, r) {
			S.cssHooks[o + r] = {
				expand: function (e) {
					for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[o + ie[t] + r] = n[t] || n[t - 2] || n[0];
					return i
				}
			}, "margin" !== o && (S.cssHooks[o + r].set = Ye)
		}), S.fn.extend({
			css: function (e, t) {
				return U(this, function (e, t, i) {
					var n, o, r = {},
						a = 0;
					if (Array.isArray(t)) {
						for (n = Pe(e), o = t.length; a < o; a++) r[t[a]] = S.css(e, t[a], !1, n);
						return r
					}
					return void 0 !== i ? S.style(e, t, i) : S.css(e, t)
				}, e, t, 1 < arguments.length)
			}
		}), ((S.Tween = Ke).prototype = {
			constructor: Ke,
			init: function (e, t, i, n, o, r) {
				this.elem = e, this.prop = i, this.easing = o || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (S.cssNumber[i] ? "" : "px")
			},
			cur: function () {
				var e = Ke.propHooks[this.prop];
				return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
			},
			run: function (e) {
				var t, i = Ke.propHooks[this.prop];
				return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Ke.propHooks._default.set(this), this
			}
		}).init.prototype = Ke.prototype, (Ke.propHooks = {
			_default: {
				get: function (e) {
					var t;
					return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
				},
				set: function (e) {
					S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
				}
			}
		}).scrollTop = Ke.propHooks.scrollLeft = {
			set: function (e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, S.easing = {
			linear: function (e) {
				return e
			},
			swing: function (e) {
				return .5 - Math.cos(e * Math.PI) / 2
			},
			_default: "swing"
		}, S.fx = Ke.prototype.init, S.fx.step = {};
		var Je, Ze, et, tt, it = /^(?:toggle|show|hide)$/,
			nt = /queueHooks$/;

		function ot() {
			Ze && (!1 === T.hidden && x.requestAnimationFrame ? x.requestAnimationFrame(ot) : x.setTimeout(ot, S.fx.interval), S.fx.tick())
		}

		function rt() {
			return x.setTimeout(function () {
				Je = void 0
			}), Je = Date.now()
		}

		function at(e, t) {
			var i, n = 0,
				o = {
					height: e
				};
			for (t = t ? 1 : 0; n < 4; n += 2 - t) o["margin" + (i = ie[n])] = o["padding" + i] = e;
			return t && (o.opacity = o.width = e), o
		}

		function st(e, t, i) {
			for (var n, o = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), r = 0, a = o.length; r < a; r++)
				if (n = o[r].call(i, t, e)) return n
		}

		function lt(r, e, t) {
			var i, a, n = 0,
				o = lt.prefilters.length,
				s = S.Deferred().always(function () {
					delete l.elem
				}),
				l = function () {
					if (a) return !1;
					for (var e = Je || rt(), t = Math.max(0, c.startTime + c.duration - e), i = 1 - (t / c.duration || 0), n = 0, o = c.tweens.length; n < o; n++) c.tweens[n].run(i);
					return s.notifyWith(r, [c, i, t]), i < 1 && o ? t : (o || s.notifyWith(r, [c, 1, 0]), s.resolveWith(r, [c]), !1)
				},
				c = s.promise({
					elem: r,
					props: S.extend({}, e),
					opts: S.extend(!0, {
						specialEasing: {},
						easing: S.easing._default
					}, t),
					originalProperties: e,
					originalOptions: t,
					startTime: Je || rt(),
					duration: t.duration,
					tweens: [],
					createTween: function (e, t) {
						var i = S.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
						return c.tweens.push(i), i
					},
					stop: function (e) {
						var t = 0,
							i = e ? c.tweens.length : 0;
						if (a) return this;
						for (a = !0; t < i; t++) c.tweens[t].run(1);
						return e ? (s.notifyWith(r, [c, 1, 0]), s.resolveWith(r, [c, e])) : s.rejectWith(r, [c, e]), this
					}
				}),
				d = c.props;
			for (function (e, t) {
					var i, n, o, r, a;
					for (i in e)
						if (o = t[n = V(i)], r = e[i], Array.isArray(r) && (o = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), (a = S.cssHooks[n]) && "expand" in a)
							for (i in r = a.expand(r), delete e[n], r) i in e || (e[i] = r[i], t[i] = o);
						else t[n] = o
				}(d, c.opts.specialEasing); n < o; n++)
				if (i = lt.prefilters[n].call(c, r, d, c.opts)) return b(i.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
			return S.map(d, st, c), b(c.opts.start) && c.opts.start.call(r, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), S.fx.timer(S.extend(l, {
				elem: r,
				anim: c,
				queue: c.opts.queue
			})), c
		}
		S.Animation = S.extend(lt, {
			tweeners: {
				"*": [function (e, t) {
					var i = this.createTween(e, t);
					return re(i.elem, e, te.exec(t), i), i
				}]
			},
			tweener: function (e, t) {
				for (var i, n = 0, o = (e = b(e) ? (t = e, ["*"]) : e.match(O)).length; n < o; n++) i = e[n], lt.tweeners[i] = lt.tweeners[i] || [], lt.tweeners[i].unshift(t)
			},
			prefilters: [function (e, t, i) {
				var n, o, r, a, s, l, c, d, u = "width" in t || "height" in t,
					p = this,
					m = {},
					h = e.style,
					f = e.nodeType && ne(e),
					g = X.get(e, "fxshow");
				for (n in i.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
						a.unqueued || s()
					}), a.unqueued++, p.always(function () {
						p.always(function () {
							a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
						})
					})), t)
					if (o = t[n], it.test(o)) {
						if (delete t[n], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
							if ("show" !== o || !g || void 0 === g[n]) continue;
							f = !0
						}
						m[n] = g && g[n] || S.style(e, n)
					}
				if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(m))
					for (n in u && 1 === e.nodeType && (i.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = X.get(e, "display")), "none" === (d = S.css(e, "display")) && (c ? d = c : (se([e], !0), c = e.style.display || c, d = S.css(e, "display"), se([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === S.css(e, "float") && (l || (p.done(function () {
							h.display = c
						}), null == c && (d = h.display, c = "none" === d ? "" : d)), h.display = "inline-block")), i.overflow && (h.overflow = "hidden", p.always(function () {
							h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
						})), l = !1, m) l || (g ? "hidden" in g && (f = g.hidden) : g = X.access(e, "fxshow", {
						display: c
					}), r && (g.hidden = !f), f && se([e], !0), p.done(function () {
						for (n in f || se([e]), X.remove(e, "fxshow"), m) S.style(e, n, m[n])
					})), l = st(f ? g[n] : 0, n, p), n in g || (g[n] = l.start, f && (l.end = l.start, l.start = 0))
			}],
			prefilter: function (e, t) {
				t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
			}
		}), S.speed = function (e, t, i) {
			var n = e && "object" == typeof e ? S.extend({}, e) : {
				complete: i || !i && t || b(e) && e,
				duration: e,
				easing: i && t || t && !b(t) && t
			};
			return S.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in S.fx.speeds ? n.duration = S.fx.speeds[n.duration] : n.duration = S.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
				b(n.old) && n.old.call(this), n.queue && S.dequeue(this, n.queue)
			}, n
		}, S.fn.extend({
			fadeTo: function (e, t, i, n) {
				return this.filter(ne).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, i, n)
			},
			animate: function (t, e, i, n) {
				var o = S.isEmptyObject(t),
					r = S.speed(e, i, n),
					a = function () {
						var e = lt(this, S.extend({}, t), r);
						(o || X.get(this, "finish")) && e.stop(!0)
					};
				return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
			},
			stop: function (o, e, r) {
				var a = function (e) {
					var t = e.stop;
					delete e.stop, t(r)
				};
				return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function () {
					var e = !0,
						t = null != o && o + "queueHooks",
						i = S.timers,
						n = X.get(this);
					if (t) n[t] && n[t].stop && a(n[t]);
					else
						for (t in n) n[t] && n[t].stop && nt.test(t) && a(n[t]);
					for (t = i.length; t--;) i[t].elem !== this || null != o && i[t].queue !== o || (i[t].anim.stop(r), e = !1, i.splice(t, 1));
					!e && r || S.dequeue(this, o)
				})
			},
			finish: function (a) {
				return !1 !== a && (a = a || "fx"), this.each(function () {
					var e, t = X.get(this),
						i = t[a + "queue"],
						n = t[a + "queueHooks"],
						o = S.timers,
						r = i ? i.length : 0;
					for (t.finish = !0, S.queue(this, a, []), n && n.stop && n.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0), o.splice(e, 1));
					for (e = 0; e < r; e++) i[e] && i[e].finish && i[e].finish.call(this);
					delete t.finish
				})
			}
		}), S.each(["toggle", "show", "hide"], function (e, n) {
			var o = S.fn[n];
			S.fn[n] = function (e, t, i) {
				return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(at(n, !0), e, t, i)
			}
		}), S.each({
			slideDown: at("show"),
			slideUp: at("hide"),
			slideToggle: at("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function (e, n) {
			S.fn[e] = function (e, t, i) {
				return this.animate(n, e, t, i)
			}
		}), S.timers = [], S.fx.tick = function () {
			var e, t = 0,
				i = S.timers;
			for (Je = Date.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
			i.length || S.fx.stop(), Je = void 0
		}, S.fx.timer = function (e) {
			S.timers.push(e), S.fx.start()
		}, S.fx.interval = 13, S.fx.start = function () {
			Ze || (Ze = !0, ot())
		}, S.fx.stop = function () {
			Ze = null
		}, S.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, S.fn.delay = function (n, e) {
			return n = S.fx && S.fx.speeds[n] || n, e = e || "fx", this.queue(e, function (e, t) {
				var i = x.setTimeout(e, n);
				t.stop = function () {
					x.clearTimeout(i)
				}
			})
		}, et = T.createElement("input"), tt = T.createElement("select").appendChild(T.createElement("option")), et.type = "checkbox", v.checkOn = "" !== et.value, v.optSelected = tt.selected, (et = T.createElement("input")).value = "t", et.type = "radio", v.radioValue = "t" === et.value;
		var ct, dt = S.expr.attrHandle;
		S.fn.extend({
			attr: function (e, t) {
				return U(this, S.attr, e, t, 1 < arguments.length)
			},
			removeAttr: function (e) {
				return this.each(function () {
					S.removeAttr(this, e)
				})
			}
		}), S.extend({
			attr: function (e, t, i) {
				var n, o, r = e.nodeType;
				if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? S.prop(e, t, i) : (1 === r && S.isXMLDoc(e) || (o = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== i ? null === i ? void S.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : null == (n = S.find.attr(e, t)) ? void 0 : n)
			},
			attrHooks: {
				type: {
					set: function (e, t) {
						if (!v.radioValue && "radio" === t && $(e, "input")) {
							var i = e.value;
							return e.setAttribute("type", t), i && (e.value = i), t
						}
					}
				}
			},
			removeAttr: function (e, t) {
				var i, n = 0,
					o = t && t.match(O);
				if (o && 1 === e.nodeType)
					for (; i = o[n++];) e.removeAttribute(i)
			}
		}), ct = {
			set: function (e, t, i) {
				return !1 === t ? S.removeAttr(e, i) : e.setAttribute(i, i), i
			}
		}, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
			var a = dt[t] || S.find.attr;
			dt[t] = function (e, t, i) {
				var n, o, r = t.toLowerCase();
				return i || (o = dt[r], dt[r] = n, n = null != a(e, t, i) ? r : null, dt[r] = o), n
			}
		});
		var ut = /^(?:input|select|textarea|button)$/i,
			pt = /^(?:a|area)$/i;

		function mt(e) {
			return (e.match(O) || []).join(" ")
		}

		function ht(e) {
			return e.getAttribute && e.getAttribute("class") || ""
		}

		function ft(e) {
			return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || []
		}
		S.fn.extend({
			prop: function (e, t) {
				return U(this, S.prop, e, t, 1 < arguments.length)
			},
			removeProp: function (e) {
				return this.each(function () {
					delete this[S.propFix[e] || e]
				})
			}
		}), S.extend({
			prop: function (e, t, i) {
				var n, o, r = e.nodeType;
				if (3 !== r && 8 !== r && 2 !== r) return 1 === r && S.isXMLDoc(e) || (t = S.propFix[t] || t, o = S.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function (e) {
						var t = S.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : ut.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
					}
				}
			},
			propFix: {
				for: "htmlFor",
				class: "className"
			}
		}), v.optSelected || (S.propHooks.selected = {
			get: function (e) {
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex, null
			},
			set: function (e) {
				var t = e.parentNode;
				t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
			}
		}), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			S.propFix[this.toLowerCase()] = this
		}), S.fn.extend({
			addClass: function (t) {
				var e, i, n, o, r, a, s, l = 0;
				if (b(t)) return this.each(function (e) {
					S(this).addClass(t.call(this, e, ht(this)))
				});
				if ((e = ft(t)).length)
					for (; i = this[l++];)
						if (o = ht(i), n = 1 === i.nodeType && " " + mt(o) + " ") {
							for (a = 0; r = e[a++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
							o !== (s = mt(n)) && i.setAttribute("class", s)
						}
				return this
			},
			removeClass: function (t) {
				var e, i, n, o, r, a, s, l = 0;
				if (b(t)) return this.each(function (e) {
					S(this).removeClass(t.call(this, e, ht(this)))
				});
				if (!arguments.length) return this.attr("class", "");
				if ((e = ft(t)).length)
					for (; i = this[l++];)
						if (o = ht(i), n = 1 === i.nodeType && " " + mt(o) + " ") {
							for (a = 0; r = e[a++];)
								for (; - 1 < n.indexOf(" " + r + " ");) n = n.replace(" " + r + " ", " ");
							o !== (s = mt(n)) && i.setAttribute("class", s)
						}
				return this
			},
			toggleClass: function (o, t) {
				var r = typeof o,
					a = "string" === r || Array.isArray(o);
				return "boolean" == typeof t && a ? t ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function (e) {
					S(this).toggleClass(o.call(this, e, ht(this), t), t)
				}) : this.each(function () {
					var e, t, i, n;
					if (a)
						for (t = 0, i = S(this), n = ft(o); e = n[t++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
					else void 0 !== o && "boolean" !== r || ((e = ht(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : X.get(this, "__className__") || ""))
				})
			},
			hasClass: function (e) {
				var t, i, n = 0;
				for (t = " " + e + " "; i = this[n++];)
					if (1 === i.nodeType && -1 < (" " + mt(ht(i)) + " ").indexOf(t)) return !0;
				return !1
			}
		});
		var gt = /\r/g;
		S.fn.extend({
			val: function (i) {
				var n, e, o, t = this[0];
				return arguments.length ? (o = b(i), this.each(function (e) {
					var t;
					1 === this.nodeType && (null == (t = o ? i.call(this, e, S(this).val()) : i) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
						return null == e ? "" : e + ""
					})), (n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
				})) : t ? (n = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(gt, "") : null == e ? "" : e : void 0
			}
		}), S.extend({
			valHooks: {
				option: {
					get: function (e) {
						var t = S.find.attr(e, "value");
						return null != t ? t : mt(S.text(e))
					}
				},
				select: {
					get: function (e) {
						var t, i, n, o = e.options,
							r = e.selectedIndex,
							a = "select-one" === e.type,
							s = a ? null : [],
							l = a ? r + 1 : o.length;
						for (n = r < 0 ? l : a ? r : 0; n < l; n++)
							if (((i = o[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !$(i.parentNode, "optgroup"))) {
								if (t = S(i).val(), a) return t;
								s.push(t)
							}
						return s
					},
					set: function (e, t) {
						for (var i, n, o = e.options, r = S.makeArray(t), a = o.length; a--;)((n = o[a]).selected = -1 < S.inArray(S.valHooks.option.get(n), r)) && (i = !0);
						return i || (e.selectedIndex = -1), r
					}
				}
			}
		}), S.each(["radio", "checkbox"], function () {
			S.valHooks[this] = {
				set: function (e, t) {
					if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
				}
			}, v.checkOn || (S.valHooks[this].get = function (e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		}), v.focusin = "onfocusin" in x;
		var vt = /^(?:focusinfocus|focusoutblur)$/,
			bt = function (e) {
				e.stopPropagation()
			};
		S.extend(S.event, {
			trigger: function (e, t, i, n) {
				var o, r, a, s, l, c, d, u, p = [i || T],
					m = g.call(e, "type") ? e.type : e,
					h = g.call(e, "namespace") ? e.namespace.split(".") : [];
				if (r = u = a = i = i || T, 3 !== i.nodeType && 8 !== i.nodeType && !vt.test(m + S.event.triggered) && (-1 < m.indexOf(".") && (m = (h = m.split(".")).shift(), h.sort()), l = m.indexOf(":") < 0 && "on" + m, (e = e[S.expando] ? e : new S.Event(m, "object" == typeof e && e)).isTrigger = n ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : S.makeArray(t, [e]), d = S.event.special[m] || {}, n || !d.trigger || !1 !== d.trigger.apply(i, t))) {
					if (!n && !d.noBubble && !y(i)) {
						for (s = d.delegateType || m, vt.test(s + m) || (r = r.parentNode); r; r = r.parentNode) p.push(r), a = r;
						a === (i.ownerDocument || T) && p.push(a.defaultView || a.parentWindow || x)
					}
					for (o = 0;
						(r = p[o++]) && !e.isPropagationStopped();) u = r, e.type = 1 < o ? s : d.bindType || m, (c = (X.get(r, "events") || {})[e.type] && X.get(r, "handle")) && c.apply(r, t), (c = l && r[l]) && c.apply && Q(r) && (e.result = c.apply(r, t), !1 === e.result && e.preventDefault());
					return e.type = m, n || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), t) || !Q(i) || l && b(i[m]) && !y(i) && ((a = i[l]) && (i[l] = null), S.event.triggered = m, e.isPropagationStopped() && u.addEventListener(m, bt), i[m](), e.isPropagationStopped() && u.removeEventListener(m, bt), S.event.triggered = void 0, a && (i[l] = a)), e.result
				}
			},
			simulate: function (e, t, i) {
				var n = S.extend(new S.Event, i, {
					type: e,
					isSimulated: !0
				});
				S.event.trigger(n, null, t)
			}
		}), S.fn.extend({
			trigger: function (e, t) {
				return this.each(function () {
					S.event.trigger(e, t, this)
				})
			},
			triggerHandler: function (e, t) {
				var i = this[0];
				if (i) return S.event.trigger(e, t, i, !0)
			}
		}), v.focusin || S.each({
			focus: "focusin",
			blur: "focusout"
		}, function (i, n) {
			var o = function (e) {
				S.event.simulate(n, e.target, S.event.fix(e))
			};
			S.event.special[n] = {
				setup: function () {
					var e = this.ownerDocument || this,
						t = X.access(e, n);
					t || e.addEventListener(i, o, !0), X.access(e, n, (t || 0) + 1)
				},
				teardown: function () {
					var e = this.ownerDocument || this,
						t = X.access(e, n) - 1;
					t ? X.access(e, n, t) : (e.removeEventListener(i, o, !0), X.remove(e, n))
				}
			}
		});
		var yt = x.location,
			wt = Date.now(),
			kt = /\?/;
		S.parseXML = function (e) {
			var t;
			if (!e || "string" != typeof e) return null;
			try {
				t = (new x.DOMParser).parseFromString(e, "text/xml")
			} catch (e) {
				t = void 0
			}
			return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
		};
		var Ct = /\[\]$/,
			xt = /\r?\n/g,
			Tt = /^(?:submit|button|image|reset|file)$/i,
			St = /^(?:input|select|textarea|keygen)/i;

		function Et(i, e, n, o) {
			var t;
			if (Array.isArray(e)) S.each(e, function (e, t) {
				n || Ct.test(i) ? o(i, t) : Et(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, n, o)
			});
			else if (n || "object" !== k(e)) o(i, e);
			else
				for (t in e) Et(i + "[" + t + "]", e[t], n, o)
		}
		S.param = function (e, t) {
			var i, n = [],
				o = function (e, t) {
					var i = b(t) ? t() : t;
					n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
				};
			if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
				o(this.name, this.value)
			});
			else
				for (i in e) Et(i, e[i], t, o);
			return n.join("&")
		}, S.fn.extend({
			serialize: function () {
				return S.param(this.serializeArray())
			},
			serializeArray: function () {
				return this.map(function () {
					var e = S.prop(this, "elements");
					return e ? S.makeArray(e) : this
				}).filter(function () {
					var e = this.type;
					return this.name && !S(this).is(":disabled") && St.test(this.nodeName) && !Tt.test(e) && (this.checked || !le.test(e))
				}).map(function (e, t) {
					var i = S(this).val();
					return null == i ? null : Array.isArray(i) ? S.map(i, function (e) {
						return {
							name: t.name,
							value: e.replace(xt, "\r\n")
						}
					}) : {
						name: t.name,
						value: i.replace(xt, "\r\n")
					}
				}).get()
			}
		});
		var $t = /%20/g,
			It = /#.*$/,
			At = /([?&])_=[^&]*/,
			_t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			Mt = /^(?:GET|HEAD)$/,
			Dt = /^\/\//,
			jt = {},
			Lt = {},
			Ot = "*/".concat("*"),
			Bt = T.createElement("a");

		function Pt(r) {
			return function (e, t) {
				"string" != typeof e && (t = e, e = "*");
				var i, n = 0,
					o = e.toLowerCase().match(O) || [];
				if (b(t))
					for (; i = o[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (r[i] = r[i] || []).unshift(t)) : (r[i] = r[i] || []).push(t)
			}
		}

		function Nt(t, o, r, a) {
			var s = {},
				l = t === Lt;

			function c(e) {
				var n;
				return s[e] = !0, S.each(t[e] || [], function (e, t) {
					var i = t(o, r, a);
					return "string" != typeof i || l || s[i] ? l ? !(n = i) : void 0 : (o.dataTypes.unshift(i), c(i), !1)
				}), n
			}
			return c(o.dataTypes[0]) || !s["*"] && c("*")
		}

		function Rt(e, t) {
			var i, n, o = S.ajaxSettings.flatOptions || {};
			for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
			return n && S.extend(!0, e, n), e
		}
		Bt.href = yt.href, S.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: yt.href,
				type: "GET",
				isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Ot,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": JSON.parse,
					"text xml": S.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function (e, t) {
				return t ? Rt(Rt(e, S.ajaxSettings), t) : Rt(S.ajaxSettings, e)
			},
			ajaxPrefilter: Pt(jt),
			ajaxTransport: Pt(Lt),
			ajax: function (e, t) {
				"object" == typeof e && (t = e, e = void 0), t = t || {};
				var d, u, p, i, m, n, h, f, o, r, g = S.ajaxSetup({}, t),
					v = g.context || g,
					b = g.context && (v.nodeType || v.jquery) ? S(v) : S.event,
					y = S.Deferred(),
					w = S.Callbacks("once memory"),
					k = g.statusCode || {},
					a = {},
					s = {},
					l = "canceled",
					C = {
						readyState: 0,
						getResponseHeader: function (e) {
							var t;
							if (h) {
								if (!i)
									for (i = {}; t = _t.exec(p);) i[t[1].toLowerCase()] = t[2];
								t = i[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function () {
							return h ? p : null
						},
						setRequestHeader: function (e, t) {
							return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
						},
						overrideMimeType: function (e) {
							return null == h && (g.mimeType = e), this
						},
						statusCode: function (e) {
							var t;
							if (e)
								if (h) C.always(e[C.status]);
								else
									for (t in e) k[t] = [k[t], e[t]];
							return this
						},
						abort: function (e) {
							var t = e || l;
							return d && d.abort(t), c(0, t), this
						}
					};
				if (y.promise(C), g.url = ((e || g.url || yt.href) + "").replace(Dt, yt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(O) || [""], null == g.crossDomain) {
					n = T.createElement("a");
					try {
						n.href = g.url, n.href = n.href, g.crossDomain = Bt.protocol + "//" + Bt.host != n.protocol + "//" + n.host
					} catch (e) {
						g.crossDomain = !0
					}
				}
				if (g.data && g.processData && "string" != typeof g.data && (g.data = S.param(g.data, g.traditional)), Nt(jt, g, t, C), h) return C;
				for (o in (f = S.event && g.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Mt.test(g.type), u = g.url.replace(It, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace($t, "+")) : (r = g.url.slice(u.length), g.data && (g.processData || "string" == typeof g.data) && (u += (kt.test(u) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (u = u.replace(At, "$1"), r = (kt.test(u) ? "&" : "?") + "_=" + wt++ + r), g.url = u + r), g.ifModified && (S.lastModified[u] && C.setRequestHeader("If-Modified-Since", S.lastModified[u]), S.etag[u] && C.setRequestHeader("If-None-Match", S.etag[u])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && C.setRequestHeader("Content-Type", g.contentType), C.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : g.accepts["*"]), g.headers) C.setRequestHeader(o, g.headers[o]);
				if (g.beforeSend && (!1 === g.beforeSend.call(v, C, g) || h)) return C.abort();
				if (l = "abort", w.add(g.complete), C.done(g.success), C.fail(g.error), d = Nt(Lt, g, t, C)) {
					if (C.readyState = 1, f && b.trigger("ajaxSend", [C, g]), h) return C;
					g.async && 0 < g.timeout && (m = x.setTimeout(function () {
						C.abort("timeout")
					}, g.timeout));
					try {
						h = !1, d.send(a, c)
					} catch (e) {
						if (h) throw e;
						c(-1, e)
					}
				} else c(-1, "No Transport");

				function c(e, t, i, n) {
					var o, r, a, s, l, c = t;
					h || (h = !0, m && x.clearTimeout(m), d = void 0, p = n || "", C.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, i && (s = function (e, t, i) {
						for (var n, o, r, a, s = e.contents, l = e.dataTypes;
							"*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
						if (n)
							for (o in s)
								if (s[o] && s[o].test(n)) {
									l.unshift(o);
									break
								}
						if (l[0] in i) r = l[0];
						else {
							for (o in i) {
								if (!l[0] || e.converters[o + " " + l[0]]) {
									r = o;
									break
								}
								a || (a = o)
							}
							r = r || a
						}
						if (r) return r !== l[0] && l.unshift(r), i[r]
					}(g, C, i)), s = function (e, t, i, n) {
						var o, r, a, s, l, c = {},
							d = e.dataTypes.slice();
						if (d[1])
							for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
						for (r = d.shift(); r;)
							if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
								if ("*" === r) r = l;
								else if ("*" !== l && l !== r) {
							if (!(a = c[l + " " + r] || c["* " + r]))
								for (o in c)
									if ((s = o.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
										!0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], d.unshift(s[1]));
										break
									}
							if (!0 !== a)
								if (a && e.throws) t = a(t);
								else try {
									t = a(t)
								} catch (e) {
									return {
										state: "parsererror",
										error: a ? e : "No conversion from " + l + " to " + r
									}
								}
						}
						return {
							state: "success",
							data: t
						}
					}(g, s, C, o), o ? (g.ifModified && ((l = C.getResponseHeader("Last-Modified")) && (S.lastModified[u] = l), (l = C.getResponseHeader("etag")) && (S.etag[u] = l)), 204 === e || "HEAD" === g.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = s.state, r = s.data, o = !(a = s.error))) : (a = c, !e && c || (c = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || c) + "", o ? y.resolveWith(v, [r, c, C]) : y.rejectWith(v, [C, c, a]), C.statusCode(k), k = void 0, f && b.trigger(o ? "ajaxSuccess" : "ajaxError", [C, g, o ? r : a]), w.fireWith(v, [C, c]), f && (b.trigger("ajaxComplete", [C, g]), --S.active || S.event.trigger("ajaxStop")))
				}
				return C
			},
			getJSON: function (e, t, i) {
				return S.get(e, t, i, "json")
			},
			getScript: function (e, t) {
				return S.get(e, void 0, t, "script")
			}
		}), S.each(["get", "post"], function (e, o) {
			S[o] = function (e, t, i, n) {
				return b(t) && (n = n || i, i = t, t = void 0), S.ajax(S.extend({
					url: e,
					type: o,
					dataType: n,
					data: t,
					success: i
				}, S.isPlainObject(e) && e))
			}
		}), S._evalUrl = function (e) {
			return S.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				throws: !0
			})
		}, S.fn.extend({
			wrapAll: function (e) {
				var t;
				return this[0] && (b(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
					for (var e = this; e.firstElementChild;) e = e.firstElementChild;
					return e
				}).append(this)), this
			},
			wrapInner: function (i) {
				return b(i) ? this.each(function (e) {
					S(this).wrapInner(i.call(this, e))
				}) : this.each(function () {
					var e = S(this),
						t = e.contents();
					t.length ? t.wrapAll(i) : e.append(i)
				})
			},
			wrap: function (t) {
				var i = b(t);
				return this.each(function (e) {
					S(this).wrapAll(i ? t.call(this, e) : t)
				})
			},
			unwrap: function (e) {
				return this.parent(e).not("body").each(function () {
					S(this).replaceWith(this.childNodes)
				}), this
			}
		}), S.expr.pseudos.hidden = function (e) {
			return !S.expr.pseudos.visible(e)
		}, S.expr.pseudos.visible = function (e) {
			return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
		}, S.ajaxSettings.xhr = function () {
			try {
				return new x.XMLHttpRequest
			} catch (e) {}
		};
		var Ht = {
				0: 200,
				1223: 204
			},
			qt = S.ajaxSettings.xhr();
		v.cors = !!qt && "withCredentials" in qt, v.ajax = qt = !!qt, S.ajaxTransport(function (o) {
			var r, a;
			if (v.cors || qt && !o.crossDomain) return {
				send: function (e, t) {
					var i, n = o.xhr();
					if (n.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
						for (i in o.xhrFields) n[i] = o.xhrFields[i];
					for (i in o.mimeType && n.overrideMimeType && n.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) n.setRequestHeader(i, e[i]);
					r = function (e) {
						return function () {
							r && (r = a = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null, "abort" === e ? n.abort() : "error" === e ? "number" != typeof n.status ? t(0, "error") : t(n.status, n.statusText) : t(Ht[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
								binary: n.response
							} : {
								text: n.responseText
							}, n.getAllResponseHeaders()))
						}
					}, n.onload = r(), a = n.onerror = n.ontimeout = r("error"), void 0 !== n.onabort ? n.onabort = a : n.onreadystatechange = function () {
						4 === n.readyState && x.setTimeout(function () {
							r && a()
						})
					}, r = r("abort");
					try {
						n.send(o.hasContent && o.data || null)
					} catch (e) {
						if (r) throw e
					}
				},
				abort: function () {
					r && r()
				}
			}
		}), S.ajaxPrefilter(function (e) {
			e.crossDomain && (e.contents.script = !1)
		}), S.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function (e) {
					return S.globalEval(e), e
				}
			}
		}), S.ajaxPrefilter("script", function (e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
		}), S.ajaxTransport("script", function (i) {
			var n, o;
			if (i.crossDomain) return {
				send: function (e, t) {
					n = S("<script>").prop({
						charset: i.scriptCharset,
						src: i.url
					}).on("load error", o = function (e) {
						n.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
					}), T.head.appendChild(n[0])
				},
				abort: function () {
					o && o()
				}
			}
		});
		var Ut, zt = [],
			Wt = /(=)\?(?=&|$)|\?\?/;
		S.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
				var e = zt.pop() || S.expando + "_" + wt++;
				return this[e] = !0, e
			}
		}), S.ajaxPrefilter("json jsonp", function (e, t, i) {
			var n, o, r, a = !1 !== e.jsonp && (Wt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(e.data) && "data");
			if (a || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Wt, "$1" + n) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function () {
				return r || S.error(n + " was not called"), r[0]
			}, e.dataTypes[0] = "json", o = x[n], x[n] = function () {
				r = arguments
			}, i.always(function () {
				void 0 === o ? S(x).removeProp(n) : x[n] = o, e[n] && (e.jsonpCallback = t.jsonpCallback, zt.push(n)), r && b(o) && o(r[0]), r = o = void 0
			}), "script"
		}), v.createHTMLDocument = ((Ut = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, i) {
			return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (v.createHTMLDocument ? ((n = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, t.head.appendChild(n)) : t = T), r = !i && [], (o = I.exec(e)) ? [t.createElement(o[1])] : (o = ve([e], t, r), r && r.length && S(r).remove(), S.merge([], o.childNodes)));
			var n, o, r
		}, S.fn.load = function (e, t, i) {
			var n, o, r, a = this,
				s = e.indexOf(" ");
			return -1 < s && (n = mt(e.slice(s)), e = e.slice(0, s)), b(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && S.ajax({
				url: e,
				type: o || "GET",
				dataType: "html",
				data: t
			}).done(function (e) {
				r = arguments, a.html(n ? S("<div>").append(S.parseHTML(e)).find(n) : e)
			}).always(i && function (e, t) {
				a.each(function () {
					i.apply(this, r || [e.responseText, t, e])
				})
			}), this
		}, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
			S.fn[t] = function (e) {
				return this.on(t, e)
			}
		}), S.expr.pseudos.animated = function (t) {
			return S.grep(S.timers, function (e) {
				return t === e.elem
			}).length
		}, S.offset = {
			setOffset: function (e, t, i) {
				var n, o, r, a, s, l, c = S.css(e, "position"),
					d = S(e),
					u = {};
				"static" === c && (e.style.position = "relative"), s = d.offset(), r = S.css(e, "top"), l = S.css(e, "left"), o = ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (a = (n = d.position()).top, n.left) : (a = parseFloat(r) || 0, parseFloat(l) || 0), b(t) && (t = t.call(e, i, S.extend({}, s))), null != t.top && (u.top = t.top - s.top + a), null != t.left && (u.left = t.left - s.left + o), "using" in t ? t.using.call(e, u) : d.css(u)
			}
		}, S.fn.extend({
			offset: function (t) {
				if (arguments.length) return void 0 === t ? this : this.each(function (e) {
					S.offset.setOffset(this, t, e)
				});
				var e, i, n = this[0];
				return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
					top: e.top + i.pageYOffset,
					left: e.left + i.pageXOffset
				}) : {
					top: 0,
					left: 0
				} : void 0
			},
			position: function () {
				if (this[0]) {
					var e, t, i, n = this[0],
						o = {
							top: 0,
							left: 0
						};
					if ("fixed" === S.css(n, "position")) t = n.getBoundingClientRect();
					else {
						for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === S.css(e, "position");) e = e.parentNode;
						e && e !== n && 1 === e.nodeType && ((o = S(e).offset()).top += S.css(e, "borderTopWidth", !0), o.left += S.css(e, "borderLeftWidth", !0))
					}
					return {
						top: t.top - o.top - S.css(n, "marginTop", !0),
						left: t.left - o.left - S.css(n, "marginLeft", !0)
					}
				}
			},
			offsetParent: function () {
				return this.map(function () {
					for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
					return e || be
				})
			}
		}), S.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function (t, o) {
			var r = "pageYOffset" === o;
			S.fn[t] = function (e) {
				return U(this, function (e, t, i) {
					var n;
					if (y(e) ? n = e : 9 === e.nodeType && (n = e.defaultView), void 0 === i) return n ? n[o] : e[t];
					n ? n.scrollTo(r ? n.pageXOffset : i, r ? i : n.pageYOffset) : e[t] = i
				}, t, e, arguments.length)
			}
		}), S.each(["top", "left"], function (e, i) {
			S.cssHooks[i] = He(v.pixelPosition, function (e, t) {
				if (t) return t = Re(e, i), Be.test(t) ? S(e).position()[i] + "px" : t
			})
		}), S.each({
			Height: "height",
			Width: "width"
		}, function (a, s) {
			S.each({
				padding: "inner" + a,
				content: s,
				"": "outer" + a
			}, function (n, r) {
				S.fn[r] = function (e, t) {
					var i = arguments.length && (n || "boolean" != typeof e),
						o = n || (!0 === e || !0 === t ? "margin" : "border");
					return U(this, function (e, t, i) {
						var n;
						return y(e) ? 0 === r.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + a], n["scroll" + a], e.body["offset" + a], n["offset" + a], n["client" + a])) : void 0 === i ? S.css(e, t, o) : S.style(e, t, i, o)
					}, s, i ? e : void 0, i)
				}
			})
		}), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, i) {
			S.fn[i] = function (e, t) {
				return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
			}
		}), S.fn.extend({
			hover: function (e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			}
		}), S.fn.extend({
			bind: function (e, t, i) {
				return this.on(e, null, t, i)
			},
			unbind: function (e, t) {
				return this.off(e, null, t)
			},
			delegate: function (e, t, i, n) {
				return this.on(t, e, i, n)
			},
			undelegate: function (e, t, i) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
			}
		}), S.proxy = function (e, t) {
			var i, n, o;
			if ("string" == typeof t && (i = e[t], t = e, e = i), b(e)) return n = s.call(arguments, 2), (o = function () {
				return e.apply(t || this, n.concat(s.call(arguments)))
			}).guid = e.guid = e.guid || S.guid++, o
		}, S.holdReady = function (e) {
			e ? S.readyWait++ : S.ready(!0)
		}, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = $, S.isFunction = b, S.isWindow = y, S.camelCase = V, S.type = k, S.now = Date.now, S.isNumeric = function (e) {
			var t = S.type(e);
			return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
		}, "function" == typeof define && define.amd && define("jquery", [], function () {
			return S
		});
		var Ft = x.jQuery,
			Vt = x.$;
		return S.noConflict = function (e) {
			return x.$ === S && (x.$ = Vt), e && x.jQuery === S && (x.jQuery = Ft), S
		}, e || (x.jQuery = x.$ = S), S
	}),
	function (s) {
		function l(e) {
			return s.expr.filters.visible(e) && !s(e).parents().addBack().filter(function () {
				return "hidden" === s.css(this, "visibility")
			}).length
		}
		s.extend(s.expr[":"], {
			focusable: function (e) {
				return t = e, i = !isNaN(s.attr(e, "tabindex")), "area" === (a = t.nodeName.toLowerCase()) ? (o = (n = t.parentNode).name, !(!t.href || !o || "map" !== n.nodeName.toLowerCase()) && !!(r = s("img[usemap=#" + o + "]")[0]) && l(r)) : (/input|select|textarea|button|object/.test(a) ? !t.disabled : "a" === a && t.href || i) && l(t);
				var t, i, n, o, r, a
			}
		})
	}(jQuery),
	function (e) {
		var t = "na";
		try {
			t = navigator.connection.effectiveType
		} catch (e) {}
		t = "ibm-cxtype-" + t, e(document.documentElement).addClass("js ibm-v18 " + t), Modernizr.addTest("hires", function () {
			return 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI || 1)
		})
	}(jQuery),
	function (s) {
		s.browserTest = function (e, t) {
			var r = "unknown",
				a = function (e, t) {
					for (var i = 0; i < t.length; i += 1) e = e.replace(t[i][0], t[i][1]);
					return e
				},
				i = function (e, t, i, n) {
					var o = {
						name: a((t.exec(e) || [r, r])[1], i)
					};
					return o[o.name] = !0, o.version = (n.exec(e) || ["X", "X", "X", "X"])[3], o.name.match(/safari/) && 400 < o.version && (o.version = "2.0"), "presto" === o.name && (o.version = 9.27 < s.browser.version ? "futhark" : "linear_b"), o.versionNumber = parseFloat(o.version, 10) || 0, o.versionX = "X" !== o.version ? (o.version + "").substr(0, 1) : "X", o.className = o.name + o.versionX, o
				};
			e = (e.match(/Opera|Navigator|Minefield|KHTML|Chrome/) ? a(e, [
				[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/, ""],
				["Chrome Safari", "Chrome"],
				["KHTML", "Konqueror"],
				["Minefield", "Firefox"],
				["Navigator", "Netscape"]
			]) : e).toLowerCase(), s.browser = s.extend(t ? {} : s.browser, i(e, /(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/, [], /(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/)), s.layout = i(e, /(gecko|konqueror|msie|opera|webkit)/, [
				["konqueror", "khtml"],
				["msie", "trident"],
				["opera", "presto"]
			], /(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/), s.os = {
				name: (/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase()) || [r])[0].replace("sunos", "solaris")
			}, t || s("html").addClass([s.os.name, s.browser.name, s.browser.className, s.layout.name, s.layout.className].join(" "))
		}, s.browserTest(navigator.userAgent)
	}(jQuery),
	function (e) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
	}(function (c) {
		"use strict";
		var o, a = window.Slick || {};
		o = 0, (a = function (e, t) {
			var i, n = this;
			n.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: c(e),
				appendDots: c(e),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function (e, t) {
					return c('<button type="button" data-role="none" role="button" tabindex="0" />').text(t + 1)
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnFocus: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, n.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = c(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = c(e).data("slick") || {}, n.options = c.extend({}, n.defaults, t, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), n.changeSlide = c.proxy(n.changeSlide, n), n.clickHandler = c.proxy(n.clickHandler, n), n.selectHandler = c.proxy(n.selectHandler, n), n.setPosition = c.proxy(n.setPosition, n), n.swipeHandler = c.proxy(n.swipeHandler, n), n.dragHandler = c.proxy(n.dragHandler, n), n.keyHandler = c.proxy(n.keyHandler, n), n.instanceUid = o++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
		}).prototype.activateADA = function () {
			this.$slideTrack.find(".slick-active").attr({
				"aria-hidden": "false"
			}).find("a, input, button, select").attr({
				tabindex: "0"
			})
		}, a.prototype.addSlide = a.prototype.slickAdd = function (e, t, i) {
			var n = this;
			if ("boolean" == typeof t) i = t, t = null;
			else if (t < 0 || t >= n.slideCount) return !1;
			n.unload(), "number" == typeof t ? 0 === t && 0 === n.$slides.length ? c(e).appendTo(n.$slideTrack) : i ? c(e).insertBefore(n.$slides.eq(t)) : c(e).insertAfter(n.$slides.eq(t)) : !0 === i ? c(e).prependTo(n.$slideTrack) : c(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function (e, t) {
				c(t).attr("data-slick-index", e)
			}), n.$slidesCache = n.$slides, n.reinit()
		}, a.prototype.animateHeight = function () {
			var e = this;
			if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
				var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
				e.$list.animate({
					height: t
				}, e.options.speed)
			}
		}, a.prototype.animateSlide = function (e, t) {
			var i = {},
				n = this;
			n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
				left: e
			}, n.options.speed, n.options.easing, t) : n.$slideTrack.animate({
				top: e
			}, n.options.speed, n.options.easing, t) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), c({
				animStart: n.currentLeft
			}).animate({
				animStart: e
			}, {
				duration: n.options.speed,
				easing: n.options.easing,
				step: function (e) {
					e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate(" + e + "px, 0px)" : i[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(i)
				},
				complete: function () {
					t && t.call()
				}
			})) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(i), t && setTimeout(function () {
				n.disableTransition(), t.call()
			}, n.options.speed))
		}, a.prototype.getNavTarget = function () {
			var e = this.options.asNavFor;
			return e && null !== e && (e = c(e).not(this.$slider)), e
		}, a.prototype.asNavFor = function (t) {
			var e = this.getNavTarget();
			null !== e && "object" == typeof e && e.each(function () {
				var e = c(this).slick("getSlick");
				e.unslicked || e.slideHandler(t, !0)
			})
		}, a.prototype.applyTransition = function (e) {
			var t = this,
				i = {};
			!1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
		}, a.prototype.autoPlay = function () {
			var e = this;
			e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
		}, a.prototype.autoPlayClear = function () {
			this.autoPlayTimer && clearInterval(this.autoPlayTimer)
		}, a.prototype.autoPlayIterator = function () {
			var e = this,
				t = e.currentSlide + e.options.slidesToScroll;
			e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
		}, a.prototype.buildArrows = function () {
			var e = this;
			!0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
				"aria-disabled": "true",
				tabindex: "-1"
			}))
		}, a.prototype.buildDots = function () {
			var e, t, i = this;
			if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
				for (i.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) t.append(c("<li />").append(i.options.customPaging.call(this, i, e)));
				i.$dots = t.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
			}
		}, a.prototype.buildOut = function () {
			var e = this;
			e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
				c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
			}), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
		}, a.prototype.buildRows = function () {
			var e, t, i, n, o, r, a, s = this;
			if (n = document.createDocumentFragment(), r = s.$slider.children(), 1 < s.options.rows) {
				for (a = s.options.slidesPerRow * s.options.rows, o = Math.ceil(r.length / a), e = 0; e < o; e++) {
					var l = document.createElement("div");
					for (t = 0; t < s.options.rows; t++) {
						var c = document.createElement("div");
						for (i = 0; i < s.options.slidesPerRow; i++) {
							var d = e * a + (t * s.options.slidesPerRow + i);
							r.get(d) && c.appendChild(r.get(d))
						}
						l.appendChild(c)
					}
					n.appendChild(l)
				}
				s.$slider.empty().append(n), s.$slider.children().children().children().css({
					width: 100 / s.options.slidesPerRow + "%",
					display: "inline-block"
				})
			}
		}, a.prototype.checkResponsive = function (e, t) {
			var i, n, o, r = this,
				a = !1,
				s = r.$slider.width(),
				l = window.innerWidth || c(window).width();
			if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = s : "min" === r.respondTo && (o = Math.min(l, s)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
				for (i in n = null, r.breakpoints) r.breakpoints.hasOwnProperty(i) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[i] && (n = r.breakpoints[i]) : o > r.breakpoints[i] && (n = r.breakpoints[i]));
				null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || t) && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = n) : (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = n), e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
			}
		}, a.prototype.changeSlide = function (e, t) {
			var i, n, o = this,
				r = c(e.currentTarget);
			switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
				case "previous":
					n = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, t);
					break;
				case "next":
					n = 0 === i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, t);
					break;
				case "index":
					var a = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
					o.slideHandler(o.checkNavigable(a), !1, t), r.children().trigger("focus");
					break;
				default:
					return
			}
		}, a.prototype.checkNavigable = function (e) {
			var t, i;
			if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
			else
				for (var n in t) {
					if (e < t[n]) {
						e = i;
						break
					}
					i = t[n]
				}
			return e
		}, a.prototype.cleanUpEvents = function () {
			var e = this;
			e.options.dots && null !== e.$dots && c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), c(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
		}, a.prototype.cleanUpSlideEvents = function () {
			var e = this;
			e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
		}, a.prototype.cleanUpRows = function () {
			var e;
			1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
		}, a.prototype.clickHandler = function (e) {
			!1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
		}, a.prototype.destroy = function (e) {
			var t = this;
			t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
				c(this).attr("style", c(this).data("originalStyling"))
			}), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
		}, a.prototype.disableTransition = function (e) {
			var t = {};
			t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
		}, a.prototype.fadeSlide = function (e, t) {
			var i = this;
			!1 === i.cssTransitions ? (i.$slides.eq(e).css({
				zIndex: i.options.zIndex
			}), i.$slides.eq(e).animate({
				opacity: 1
			}, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
				opacity: 1,
				zIndex: i.options.zIndex
			}), t && setTimeout(function () {
				i.disableTransition(e), t.call()
			}, i.options.speed))
		}, a.prototype.fadeSlideOut = function (e) {
			var t = this;
			!1 === t.cssTransitions ? t.$slides.eq(e).animate({
				opacity: 0,
				zIndex: t.options.zIndex - 2
			}, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
				opacity: 0,
				zIndex: t.options.zIndex - 2
			}))
		}, a.prototype.filterSlides = a.prototype.slickFilter = function (e) {
			var t = this;
			null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
		}, a.prototype.focusHandler = function () {
			var i = this;
			i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (e) {
				e.stopImmediatePropagation();
				var t = c(this);
				setTimeout(function () {
					i.options.pauseOnFocus && (i.focussed = t.is(":focus"), i.autoPlay())
				}, 0)
			})
		}, a.prototype.getCurrent = a.prototype.slickCurrentSlide = function () {
			return this.currentSlide
		}, a.prototype.getDotCount = function () {
			var e = this,
				t = 0,
				i = 0,
				n = 0;
			if (!0 === e.options.infinite)
				for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			else if (!0 === e.options.centerMode) n = e.slideCount;
			else if (e.options.asNavFor)
				for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
			return n - 1
		}, a.prototype.getLeft = function (e) {
			var t, i, n, o = this,
				r = 0;
			return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (r = e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (r = o.slideOffset = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + r, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (o.$list.width() - n.outerWidth()) / 2)), t
		}, a.prototype.getOption = a.prototype.slickGetOption = function (e) {
			return this.options[e]
		}, a.prototype.getNavigableIndexes = function () {
			var e, t = this,
				i = 0,
				n = 0,
				o = [];
			for (e = !1 === t.options.infinite ? t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
			return o
		}, a.prototype.getSlick = function () {
			return this
		}, a.prototype.getSlideCount = function () {
			var i, n, o = this;
			return n = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (e, t) {
				return t.offsetLeft - n + c(t).outerWidth() / 2 > -1 * o.swipeLeft ? (i = t, !1) : void 0
			}), Math.abs(c(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
		}, a.prototype.goTo = a.prototype.slickGoTo = function (e, t) {
			this.changeSlide({
				data: {
					message: "index",
					index: parseInt(e)
				}
			}, t)
		}, a.prototype.init = function (e) {
			var t = this;
			c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
		}, a.prototype.initADA = function () {
			var t = this;
			t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
				"aria-hidden": "true",
				tabindex: "-1"
			}).find("a, input, button, select").attr({
				tabindex: "-1"
			}), t.$slideTrack.attr("role", "listbox").attr("aria-label", "Carousel"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (e) {
				c(this).attr({
					role: "option",
					"aria-describedby": "slick-slide" + t.instanceUid + e,
					id: "navigation" + t.instanceUid + e
				})
			}), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function (e) {
				c(this).attr({
					role: "tab",
					"aria-selected": "false",
					"aria-controls": "navigation" + t.instanceUid + e,
					id: "slick-slide" + t.instanceUid + e
				})
			}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
		}, a.prototype.initArrowEvents = function () {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
				message: "previous"
			}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
				message: "next"
			}, e.changeSlide))
		}, a.prototype.initDotEvents = function () {
			var e = this;
			!0 === e.options.dots && e.slideCount > e.options.slidesToShow && c("li", e.$dots).on("click.slick", {
				message: "index"
			}, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
		}, a.prototype.initSlideEvents = function () {
			var e = this;
			e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
		}, a.prototype.initializeEvents = function () {
			var e = this;
			e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
				action: "start"
			}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
				action: "move"
			}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
				action: "end"
			}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
				action: "end"
			}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
		}, a.prototype.initUI = function () {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
		}, a.prototype.keyHandler = function (e) {
			var t = this;
			e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
				data: {
					message: !0 === t.options.rtl ? "next" : "previous"
				}
			}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
				data: {
					message: !0 === t.options.rtl ? "previous" : "next"
				}
			}))
		}, a.prototype.lazyLoad = function () {
			function e(e) {
				c("img[data-lazy]", e).each(function () {
					var e = c(this),
						t = c(this).attr("data-lazy"),
						i = document.createElement("img");
					i.onload = function () {
						e.animate({
							opacity: 0
						}, 100, function () {
							e.attr("src", t).animate({
								opacity: 1
							}, 200, function () {
								e.removeAttr("data-lazy").removeClass("slick-loading")
							}), n.$slider.trigger("lazyLoaded", [n, e, t])
						})
					}, i.onerror = function () {
						e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
					}, i.src = t
				})
			}
			var t, i, n = this;
			!0 === n.options.centerMode ? i = !0 === n.options.infinite ? (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (t = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (t = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, i = Math.ceil(t + n.options.slidesToShow), !0 === n.options.fade && (0 < t && t--, i <= n.slideCount && i++)), e(n.$slider.find(".slick-slide").slice(t, i)), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
		}, a.prototype.loadSlider = function () {
			var e = this;
			e.setPosition(), e.$slideTrack.css({
				opacity: 1
			}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
		}, a.prototype.next = a.prototype.slickNext = function () {
			this.changeSlide({
				data: {
					message: "next"
				}
			})
		}, a.prototype.orientationChange = function () {
			this.checkResponsive(), this.setPosition()
		}, a.prototype.pause = a.prototype.slickPause = function () {
			this.autoPlayClear(), this.paused = !0
		}, a.prototype.play = a.prototype.slickPlay = function () {
			var e = this;
			e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
		}, a.prototype.postSlide = function (e) {
			var t = this;
			t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
		}, a.prototype.prev = a.prototype.slickPrev = function () {
			this.changeSlide({
				data: {
					message: "previous"
				}
			})
		}, a.prototype.preventDefault = function (e) {
			e.preventDefault()
		}, a.prototype.progressiveLazyLoad = function (e) {
			e = e || 1;
			var t, i, n, o = this,
				r = c("img[data-lazy]", o.$slider);
			r.length ? (t = r.first(), i = t.attr("data-lazy"), (n = document.createElement("img")).onload = function () {
				t.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === o.options.adaptiveHeight && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, t, i]), o.progressiveLazyLoad()
			}, n.onerror = function () {
				e < 3 ? setTimeout(function () {
					o.progressiveLazyLoad(e + 1)
				}, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, i]), o.progressiveLazyLoad())
			}, n.src = i) : o.$slider.trigger("allImagesLoaded", [o])
		}, a.prototype.refresh = function (e) {
			var t, i, n = this;
			i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), t = n.currentSlide, n.destroy(!0), c.extend(n, n.initials, {
				currentSlide: t
			}), n.init(), e || n.changeSlide({
				data: {
					message: "index",
					index: t
				}
			}, !1)
		}, a.prototype.registerBreakpoints = function () {
			var e, t, i, n = this,
				o = n.options.responsive || null;
			if ("array" === c.type(o) && o.length) {
				for (e in n.respondTo = n.options.respondTo || "window", o)
					if (i = n.breakpoints.length - 1, t = o[e].breakpoint, o.hasOwnProperty(e)) {
						for (; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === t && n.breakpoints.splice(i, 1), i--;
						n.breakpoints.push(t), n.breakpointSettings[t] = o[e].settings
					}
				n.breakpoints.sort(function (e, t) {
					return n.options.mobileFirst ? e - t : t - e
				})
			}
		}, a.prototype.reinit = function () {
			var e = this;
			e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
		}, a.prototype.resize = function () {
			var e = this;
			c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
				e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
			}, 50))
		}, a.prototype.removeSlide = a.prototype.slickRemove = function (e, t, i) {
			var n = this;
			return e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, !(n.slideCount < 1 || e < 0 || e > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
		}, a.prototype.setCSS = function (e) {
			var t, i, n = this,
				o = {};
			!0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled || (!(o = {}) === n.cssTransitions ? o[n.animType] = "translate(" + t + ", " + i + ")" : o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"), n.$slideTrack.css(o)
		}, a.prototype.setDimensions = function () {
			var e = this;
			!1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
				padding: "0px " + e.options.centerPadding
			}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
				padding: e.options.centerPadding + " 0px"
			})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
			var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
			!1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
		}, a.prototype.setFade = function () {
			var i, n = this;
			n.$slides.each(function (e, t) {
				i = n.slideWidth * e * -1, !0 === n.options.rtl ? c(t).css({
					position: "relative",
					right: i,
					top: 0,
					zIndex: n.options.zIndex - 2,
					opacity: 0
				}) : c(t).css({
					position: "relative",
					left: i,
					top: 0,
					zIndex: n.options.zIndex - 2,
					opacity: 0
				})
			}), n.$slides.eq(n.currentSlide).css({
				zIndex: n.options.zIndex - 1,
				opacity: 1
			})
		}, a.prototype.setHeight = function () {
			var e = this;
			if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
				var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
				e.$list.css("height", t)
			}
		}, a.prototype.setOption = a.prototype.slickSetOption = function () {
			var e, t, i, n, o, r = this,
				a = !1;
			if ("object" === c.type(arguments[0]) ? (i = arguments[0], a = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[0], n = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[i] = n;
			else if ("multiple" === o) c.each(i, function (e, t) {
				r.options[e] = t
			});
			else if ("responsive" === o)
				for (t in n)
					if ("array" !== c.type(r.options.responsive)) r.options.responsive = [n[t]];
					else {
						for (e = r.options.responsive.length - 1; 0 <= e;) r.options.responsive[e].breakpoint === n[t].breakpoint && r.options.responsive.splice(e, 1), e--;
						r.options.responsive.push(n[t])
					}
			a && (r.unload(), r.reinit())
		}, a.prototype.setPosition = function () {
			var e = this;
			e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
		}, a.prototype.setProps = function () {
			var e = this,
				t = document.body.style;
			e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
		}, a.prototype.setSlideClasses = function (e) {
			var t, i, n, o, r = this;
			i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode ? (t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t <= e && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
		}, a.prototype.setupInfinite = function () {
			var e, t, i, n = this;
			if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (t = null, n.slideCount > n.options.slidesToShow)) {
				for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - i; e -= 1) t = e - 1, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
				for (e = 0; e < i; e += 1) t = e, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
				n.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
					c(this).attr("id", "")
				})
			}
		}, a.prototype.interrupt = function (e) {
			e || this.autoPlay(), this.interrupted = e
		}, a.prototype.selectHandler = function (e) {
			var t = this,
				i = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
				n = parseInt(i.attr("data-slick-index"));
			return n || (n = 0), t.slideCount <= t.options.slidesToShow ? (t.setSlideClasses(n), void t.asNavFor(n)) : void t.slideHandler(n)
		}, a.prototype.slideHandler = function (e, t, i) {
			var n, o, r, a, s, l = null,
				c = this;
			return t = t || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === t && c.asNavFor(e), n = e, l = c.getLeft(n), a = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? a : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll) ? void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(a, function () {
				c.postSlide(n)
			}) : c.postSlide(n))) : !1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll) ? void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(a, function () {
				c.postSlide(n)
			}) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && ((s = (s = c.getNavTarget()).slick("getSlick")).slideCount <= s.options.slidesToShow && s.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== i ? (c.fadeSlideOut(r), c.fadeSlide(o, function () {
				c.postSlide(o)
			})) : c.postSlide(o), void c.animateHeight()) : void(!0 !== i ? c.animateSlide(l, function () {
				c.postSlide(o)
			}) : c.postSlide(o))))
		}, a.prototype.startLoad = function () {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
		}, a.prototype.swipeDirection = function () {
			var e, t, i, n, o = this;
			return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === o.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
		}, a.prototype.swipeEnd = function (e) {
			var t, i, n = this;
			if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
			if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
				switch (i = n.swipeDirection()) {
					case "left":
					case "down":
						t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
						break;
					case "right":
					case "up":
						t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
				}
				"vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
			} else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
		}, a.prototype.swipeHandler = function (e) {
			var t = this;
			if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
				case "start":
					t.swipeStart(e);
					break;
				case "move":
					t.swipeMove(e);
					break;
				case "end":
					t.swipeEnd(e)
			}
		}, a.prototype.swipeMove = function (e) {
			var t, i, n, o, r, a = this;
			return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), !0 === a.options.verticalSwiping && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))), "vertical" !== (i = a.swipeDirection()) ? (void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && e.preventDefault(), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + n * o : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))) : void 0)
		}, a.prototype.swipeStart = function (e) {
			var t, i = this;
			return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? !(i.touchObject = {}) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
		}, a.prototype.unfilterSlides = a.prototype.slickUnfilter = function () {
			var e = this;
			null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
		}, a.prototype.unload = function () {
			var e = this;
			c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
		}, a.prototype.unslick = function (e) {
			this.$slider.trigger("unslick", [this, e]), this.destroy()
		}, a.prototype.updateArrows = function () {
			var e = this;
			Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
		}, a.prototype.updateDots = function () {
			var e = this;
			null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
		}, a.prototype.visibility = function () {
			this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
		}, c.fn.slick = function () {
			var e, t, i = this,
				n = arguments[0],
				o = Array.prototype.slice.call(arguments, 1),
				r = i.length;
			for (e = 0; e < r; e++)
				if ("object" == typeof n || void 0 === n ? i[e].slick = new a(i[e], n) : t = i[e].slick[n].apply(i[e].slick, o), void 0 !== t) return t;
			return i
		}
	}),
	function (e, t) {
		"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
	}("undefined" != typeof window ? window : this, function () {
		function e() {}
		var t = e.prototype;
		return t.on = function (e, t) {
			if (e && t) {
				var i = this._events = this._events || {},
					n = i[e] = i[e] || [];
				return -1 == n.indexOf(t) && n.push(t), this
			}
		}, t.once = function (e, t) {
			if (e && t) {
				this.on(e, t);
				var i = this._onceEvents = this._onceEvents || {};
				return (i[e] = i[e] || {})[t] = !0, this
			}
		}, t.off = function (e, t) {
			var i = this._events && this._events[e];
			if (i && i.length) {
				var n = i.indexOf(t);
				return -1 != n && i.splice(n, 1), this
			}
		}, t.emitEvent = function (e, t) {
			var i = this._events && this._events[e];
			if (i && i.length) {
				var n = 0,
					o = i[n];
				t = t || [];
				for (var r = this._onceEvents && this._onceEvents[e]; o;) {
					var a = r && r[o];
					a && (this.off(e, o), delete r[o]), o.apply(this, t), o = i[n += a ? 0 : 1]
				}
				return this
			}
		}, t.allOff = t.removeAllListeners = function () {
			delete this._events, delete this._onceEvents
		}, e
	}),
	function (t, i) {
		"use strict";
		"function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (e) {
			return i(t, e)
		}) : "object" == typeof module && module.exports ? module.exports = i(t, require("ev-emitter")) : t.imagesLoaded = i(t, t.EvEmitter)
	}("undefined" != typeof window ? window : this, function (t, e) {
		var n = t.jQuery,
			o = t.console;

		function r(e, t) {
			for (var i in t) e[i] = t[i];
			return e
		}

		function a(e, t, i) {
			if (!(this instanceof a)) return new a(e, t, i);
			"string" == typeof e && (e = document.querySelectorAll(e)), this.elements = function (e) {
				var t = [];
				if (Array.isArray(e)) t = e;
				else if ("number" == typeof e.length)
					for (var i = 0; i < e.length; i++) t.push(e[i]);
				else t.push(e);
				return t
			}(e), this.options = r({}, this.options), "function" == typeof t ? i = t : r(this.options, t), i && this.on("always", i), this.getImages(), n && (this.jqDeferred = new n.Deferred), setTimeout(function () {
				this.check()
			}.bind(this))
		}(a.prototype = Object.create(e.prototype)).options = {}, a.prototype.getImages = function () {
			this.images = [], this.elements.forEach(this.addElementImages, this)
		}, a.prototype.addElementImages = function (e) {
			"IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
			var t = e.nodeType;
			if (t && s[t]) {
				for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
					var o = i[n];
					this.addImage(o)
				}
				if ("string" == typeof this.options.background) {
					var r = e.querySelectorAll(this.options.background);
					for (n = 0; n < r.length; n++) {
						var a = r[n];
						this.addElementBackgroundImages(a)
					}
				}
			}
		};
		var s = {
			1: !0,
			9: !0,
			11: !0
		};

		function i(e) {
			this.img = e
		}

		function l(e, t) {
			this.url = e, this.element = t, this.img = new Image
		}
		return a.prototype.addElementBackgroundImages = function (e) {
			var t = getComputedStyle(e);
			if (t)
				for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
					var o = n && n[2];
					o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
				}
		}, a.prototype.addImage = function (e) {
			var t = new i(e);
			this.images.push(t)
		}, a.prototype.addBackground = function (e, t) {
			var i = new l(e, t);
			this.images.push(i)
		}, a.prototype.check = function () {
			var n = this;

			function t(e, t, i) {
				setTimeout(function () {
					n.progress(e, t, i)
				})
			}
			this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (e) {
				e.once("progress", t), e.check()
			}) : this.complete()
		}, a.prototype.progress = function (e, t, i) {
			this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && o && o.log("progress: " + i, e, t)
		}, a.prototype.complete = function () {
			var e = this.hasAnyBroken ? "fail" : "done";
			if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
				var t = this.hasAnyBroken ? "reject" : "resolve";
				this.jqDeferred[t](this)
			}
		}, (i.prototype = Object.create(e.prototype)).check = function () {
			this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
		}, i.prototype.getIsImageComplete = function () {
			return this.img.complete && void 0 !== this.img.naturalWidth
		}, i.prototype.confirm = function (e, t) {
			this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
		}, i.prototype.handleEvent = function (e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, i.prototype.onload = function () {
			this.confirm(!0, "onload"), this.unbindEvents()
		}, i.prototype.onerror = function () {
			this.confirm(!1, "onerror"), this.unbindEvents()
		}, i.prototype.unbindEvents = function () {
			this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
		}, (l.prototype = Object.create(i.prototype)).check = function () {
			this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
		}, l.prototype.unbindEvents = function () {
			this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
		}, l.prototype.confirm = function (e, t) {
			this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
		}, a.makeJQueryPlugin = function (e) {
			(e = e || t.jQuery) && ((n = e).fn.imagesLoaded = function (e, t) {
				return new a(this, e, t).jqDeferred.promise(n(this))
			})
		}, a.makeJQueryPlugin(), a
	}),
	function (e) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], e) : jQuery && !jQuery.fn.hoverIntent && e(jQuery)
	}(function (l) {
		"use strict";
		var o, r, a = {
				interval: 100,
				sensitivity: 6,
				timeout: 0
			},
			c = 0,
			d = function (e) {
				o = e.pageX, r = e.pageY
			},
			u = function (e, t, i, n) {
				if (Math.sqrt((i.pX - o) * (i.pX - o) + (i.pY - r) * (i.pY - r)) < n.sensitivity) return t.off(i.event, d), delete i.timeoutId, i.isActive = !0, e.pageX = o, e.pageY = r, delete i.pX, delete i.pY, n.over.apply(t[0], [e]);
				i.pX = o, i.pY = r, i.timeoutId = setTimeout(function () {
					u(e, t, i, n)
				}, n.interval)
			};
		l.fn.hoverIntent = function (e, t, i) {
			var n = c++,
				s = l.extend({}, a);
			l.isPlainObject(e) ? (s = l.extend(s, e), l.isFunction(s.out) || (s.out = s.over)) : s = l.isFunction(t) ? l.extend(s, {
				over: e,
				out: t,
				selector: i
			}) : l.extend(s, {
				over: e,
				out: e,
				selector: t
			});
			var o = function (e) {
				var o = l.extend({}, e),
					r = l(this),
					t = r.data("hoverIntent");
				t || r.data("hoverIntent", t = {});
				var a = t[n];
				a || (t[n] = a = {
					id: n
				}), a.timeoutId && (a.timeoutId = clearTimeout(a.timeoutId));
				var i = a.event = "mousemove.hoverIntent.hoverIntent" + n;
				if ("mouseenter" === e.type) {
					if (a.isActive) return;
					a.pX = o.pageX, a.pY = o.pageY, r.off(i, d).on(i, d), a.timeoutId = setTimeout(function () {
						u(o, r, a, s)
					}, s.interval)
				} else {
					if (!a.isActive) return;
					r.off(i, d), a.timeoutId = setTimeout(function () {
						var e, t, i, n;
						e = o, t = r, i = a, n = s.out, delete t.data("hoverIntent")[i.id], n.apply(t[0], [e])
					}, s.timeout)
				}
			};
			return this.on({
				"mouseenter.hoverIntent": o,
				"mouseleave.hoverIntent": o
			}, s.selector)
		}
	}), jQuery.noConflict();
var IBMCore = {
	version: "150.0.0"
};
(function (e, t) {
	t.namespace = function () {
		var e, t, i, n, o, r = arguments[0],
			a = arguments.length;
		for (e = 1; e < a; e++)
			for (o = r[(n = arguments[e].split("."))[0]] = Object(r[n[0]]), t = 1, i = n.length; t < i; t++) o = o[n[t]] = Object(o[n[t]]);
		return o
	}, t.namespace(t, "performance", "common", "common.config", "common.meta", "common.module", "common.util", "common.vendor", "common.widget", "www", "www.module")
})(jQuery, IBMCore),
function (e) {
	var t = e.namespace(e, "common.util.debug"),
		n = [];
	t.add = function (e, t, i) {
		n.push({
			func: e,
			contents: t,
			usePrefix: i
		})
	}, t.show = function () {
		var e = 0;
		for (; e < n.length; e++) t = n[e].func, i = n[e].contents, !1 !== n[e].usePrefix ? window.console[t]("v18: ", i) : window.console[t](i);
		var t, i
	}
}(IBMCore),
function (t, n) {
	var i = n.namespace(n, "common.util.config");
	i.set = function (e) {
		"object" === jQuery.type(e) && t.extend(!0, n.common.config, e)
	}, i.get = function (e) {
		for (var t = e.split("."), i = n.common.config; i && t.length;) i = i[t.shift()];
		return i
	}, i.isEnabled = function (e) {
		var t = i.get(e + ".enabled");
		return !1 === n.common.util.config.get("coremodules.enabled") && (t = !1), t
	}
}(jQuery, IBMCore),
function (e, t) {
	var i, n = "production",
		o = {
			production: {
				config: "www",
				forced: !1,
				usedSettings: "production",
				imageUrl: "https://1.www.s81c.com/common/v18/i/",
				jsFilesUrl: "https://1.www.s81c.com/common/v18/js/",
				jsFilesUrlNC: "https://1.www.s81c.com/common/noticechoice/",
				jsFilesUrlUrx: "https://www.ibm.com/account/ibmidutil/urx/v2/js/urx.modal.min.js",
				dataUrl: "https://www.ibm.com/common/v18/js/data/",
				datepickerDataUrl: "https://1.www.s81c.com/common/v18/js/datepicker/data/",
				coreservicesUrl: "https://www.ibm.com/gateway/secstate/?",
				coreservicesUrlSecure: "https://www.ibm.com/gateway/sec/?",
				noticechoice: {
					jsonUrl: "https://1.www.s81c.com/common/translations"
				},
				userStateUrl: "https://login.ibm.com/v1/mgmt/idaas/user/status/",
				coremodules: {
					enabled: !0
				},
				contentwidgets: {
					enabled: !0
				},
				eluminate: {
					enabled: !0
				},
				backtotop: {
					enabled: !1
				},
				contactModuleWidget: {
					enabled: !0
				},
				dynamicContactModule: {
					enabled: !1
				},
				errorchecking: {
					enabled: !0
				},
				feedbacklink: {
					enabled: !1
				},
				footer: {
					enabled: !0,
					socialLinks: {
						enabled: !1
					},
					type: "default"
				},
				footermenu: {
					enabled: !0
				},
				greeting: {
					enabled: !0
				},
				localeselector: {
					enabled: !0
				},
				masthead: {
					enabled: !0,
					logoanimation: {
						enabled: !1
					},
					megamenu: {
						enabled: !0
					},
					mobilemenu: {
						enabled: !0
					},
					notifications: {
						enabled: !0
					},
					profile: {
						enabled: !0
					},
					search: {
						enabled: !0,
						typeahead: {
							enabled: !0
						}
					},
					sticky: {
						enabled: !0
					},
					type: "default"
				},
				scrolltracker: {
					enabled: !1
				},
				sharethispage: {
					enabled: !0
				},
				survey: {
					enabled: !0
				},
				useriplookup: {
					enabled: !0
				},
				userstateservice: {
					enabled: !0
				},
				wat: {
					enabled: !1
				},
				bitly: {
					login: "ibmdigital",
					key: "R_1ed9169df98d3b072731d88ec80d18a7",
					timeout: 3e3
				}
			},
			staging: {
				usedSettings: "staging",
				imageUrl: "https://1.wwwstage.s81c.com/common/v18/i/",
				jsFilesUrl: "https://1.wwwstage.s81c.com/common/v18/js/",
				jsFilesUrlNC: "https://1.wwwstage.s81c.com/common/noticechoice/",
				jsFilesUrlUrx: "https://wwwtest.ibm.com/account/ibmidutil/urx/v2/js/urx.modal.min.js",
				dataUrl: "https://1.wwwstage.s81c.com/common/v18/js/data/",
				datepickerDataUrl: "https://1.wwwstage.s81c.com/common/v18/js/datepicker/data/",
				coreservicesUrl: "https://www-sso.toronto.ca.ibm.com/gateway/secstate/?",
				coreservicesUrlSecure: "https://www-sso.toronto.ca.ibm.com/gateway/sec/?",
				noticechoice: {
					jsonUrl: "https://1.wwwstage.s81c.com/common/translations"
				},
				userStateUrl: "https://login.ibm.com/v1/mgmt/idaas/user/status/"
			},
			preview: {
				usedSettings: "preview",
				imageUrl: "https://1.wwwpreview.s81c.com/common/v18/i/",
				jsFilesUrl: "https://1.wwwpreview.s81c.com/common/v18/js/",
				jsFilesUrlNC: "https://1.wwwpreview.s81c.com/common/noticechoice/",
				dataUrl: "https://1.wwwpreview.s81c.com/common/v18/js/data/",
				datepickerDataUrl: "https://1.wwwpreview.s81c.com/common/v18/js/datepicker/data/",
				coreservicesUrl: "https://www-sso.toronto.ca.ibm.com/gateway/secstate/?",
				coreservicesUrlSecure: "https://www-sso.toronto.ca.ibm.com/gateway/sec/?",
				noticechoice: {
					jsonUrl: "https://1.wwwpreview.s81c.com/common/translations"
				},
				userStateUrl: "https://login.ibm.com/v1/mgmt/idaas/user/status/"
			}
		};
	e.extend(!0, t.common.config, o.production), (i = document.cookie.match(/__forcev18env=(\w*)/)) && "" !== i[1] && (n = i[1]), "production" !== n && o[n] && (e.extend(!0, t.common.config, o[n]), t.common.config.forced = !0), window.digitalData && window.digitalData.page && window.digitalData.page.pageInfo && window.digitalData.page.pageInfo.ibm && e.extend(!0, t.common.config, window.digitalData.page.pageInfo.ibm.config || {})
}(jQuery, IBMCore),
function (s, e) {
	var a = e.namespace(e, "common.util.url");

	function t(e) {
		var t = e.url,
			i = t,
			n = (-1 < t.indexOf("?") ? t.substr(t.indexOf("?") + 1) : "").split("#")[0],
			o = -1 < t.indexOf("#") ? t.substr(t.indexOf("#")) : "",
			r = {};
		return "" !== o && (i = t.substr(0, t.indexOf("#"))), "" !== n && (i = t.substr(0, t.indexOf("?")), r = a.paramsToObject(n)), "add" === e.action ? r[e.paramName] = e.paramValue : "remove" === e.action && delete r[e.paramName], i + "?" + a.objectToQuerystring(r) + o
	}
	a.addParam = function (e) {
		return e.action = "add", t(e)
	}, a.removeParam = function (e) {
		return e.action = "remove", t(e)
	}, a.getAllParams = function (e) {
		var t = a.urlParams;
		return e && "" !== e && (t = {}, -1 < e.indexOf("?") && (t = a.paramsToObject(e))), t
	}, a.getParam = function (e, t) {
		var i = a.urlParams[e];
		return t && "" !== t && (i = a.paramsToObject(t)[e]), i
	}, a.getUrl = function () {
		var e = s('link[rel="canonical"]').attr("href");
		if (e) return e;
		if (-1 !== (e = location.href).indexOf("?")) {
			var t, i, n = e.substr(0, e.indexOf("?")),
				o = e.substr(e.indexOf("?") + 1).split("&"),
				r = /^(cm_re|ca|me|met|re|lnk)=/,
				a = [];
			for (t = 0, i = o.length; t < i; t++) r.test(o[t]) || a.push(o[t]);
			e = 0 < a.length ? n + "?" + a.join("&") : n
		}
		return e
	}, a.paramsToObject = function (e) {
		var o = {};
		return e && "" !== e && (-1 < e.indexOf("?") && (e = e.substr(e.indexOf("?") + 1)), s.each(e.split("&"), function (e, t) {
			var i = t.split("="),
				n = decodeURIComponent(i[0]);
			i[0] = s.trim(i[0]), i[1] = s.trim(i[1]) || "", i[0] && (-1 === n.indexOf("[]") ? o[n] = decodeURIComponent(i[1]) : -1 < n.indexOf("[]") && (o[n] || (o[n] = []), o[n].push(decodeURIComponent(i[1]))))
		})), o
	}, a.objectToQuerystring = function (e) {
		var i = "",
			n = 0;
		return s.each(e, function (e, t) {
			if ("" !== e && "object" != typeof t) i += "&" + e + "=" + t;
			else if ("object" == typeof t)
				for (n = 0; n < t.length; n++) i += "&" + e + "=" + t[n]
		}), i = i.substr(1)
	}, a.urlParams = a.paramsToObject(window.location.search.substr(1))
}(jQuery, IBMCore),
function (s, e) {
	function i(e, t) {
		var n = this;

		function i() {
			return "rgb(" + n.red + "," + n.green + "," + n.blue + ")"
		}

		function o(e) {
			return "0123456789abcdef".indexOf(e.toLowerCase())
		}

		function r(e) {
			var t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
			return t[Math.floor(e / 16)] + t[e % 16]
		}

		function a(e) {
			return e = "#" === e.substr(0, 1) ? e.substr(1) : e, 128 <= (299 * parseInt(e.substr(0, 2), 16) + 587 * parseInt(e.substr(2, 2), 16) + 114 * parseInt(e.substr(4, 2), 16)) / 1e3 ? "black" : "white"
		}
		n.red = 0, n.green = 0, n.blue = 0, n.alpha = 0, n.accessibleTextColor = null, n.setColor = function (e) {
			var t, i = e;
			"#" === i.charAt(0) ? (4 === i.length && (i = "#" + i.charAt(1) + i.charAt(1) + i.charAt(2) + i.charAt(2) + i.charAt(3) + i.charAt(3)), n.red = 16 * o(i.charAt(1)) + o(i.charAt(2)), n.green = 16 * o(i.charAt(3)) + o(i.charAt(4)), n.blue = 16 * o(i.charAt(5)) + o(i.charAt(6)), n.alpha = 1, n.accessibleTextColor = a(i)) : (t = (t = i.substring(i.indexOf("(") + 1, i.indexOf(")"))).split(","), n.red = parseInt(t[0], 10), n.green = parseInt(t[1], 10), n.blue = parseInt(t[2], 10), n.alpha = parseFloat(t[3], 10), n.accessibleTextColor = a(n.hex()))
		}, n.hex = function () {
			return "#" + r(n.red) + r(n.green) + r(n.blue)
		}, n.rgb = i, n.rgba = function () {
			if (s.browser.msie && s.browser.versionNumber < 8) return i();
			return "rgba(" + n.red + "," + n.green + "," + n.blue + "," + n.alpha + ")"
		}, void 0 !== e && n.setColor(e), void 0 !== t && (n.alpha = t)
	}
	e.namespace(e, "common.util.color").createColor = function (e, t) {
		return new i(e, t)
	}
}(jQuery, IBMCore),
function (e, t) {
	var o = t.namespace(t, "common.util.cookie");
	o.set = function (e, t, i) {
		var n, o = null;
		(n = (i = i || {}).expires) && (n.toUTCString ? o = n : "number" == typeof n && (o = new Date).setTime(o.getTime() + 1e3 * parseInt(n, 10))), document.cookie = e + "=" + encodeURIComponent(t) + (o ? "; expires=" + o.toUTCString() : "") + (i.path ? "; path=" + i.path : "") + (i.domain ? "; domain=" + i.domain : "") + (i.secure ? "; secure" : "")
	}, o.get = function (e) {
		var t, i = e + "=",
			n = document.cookie.indexOf(i);
		if (-1 === n) return null;
		if (0 < n) {
			if (-1 === (n = document.cookie.indexOf("; " + i))) return null;
			n += 2
		}
		return -1 === (t = document.cookie.indexOf(";", n)) && (t = document.cookie.length), decodeURIComponent(document.cookie.substring(n + i.length, t))
	}, o.remove = function (e, t, i) {
		var n = o.get(e);
		return null !== n && (document.cookie = e + "=" + (t ? "; path=" + t : "") + (i ? "; domain=" + i : "") + "; expires=" + new Date(0).toUTCString()), n
	}, o.isSupported = function () {
		var e = "allowsCookies",
			t = !1;
		return o.set(e, 1), 1 === parseInt(o.get(e)) && (o.remove(e), t = !0), t
	}
}(jQuery, IBMCore),
function (s, l) {
	var e = l.namespace(l, "common.util.data"),
		c = {
			url: "https://www.ibm.com/common/translations/{TOKEN}/{CC}/{LC}/{ENC}.js",
			cc: null,
			lc: null,
			enc: null
		};

	function d(e) {
		return !!l.common.translations.data[e]
	}
	e.get = function (n, o, e) {
		var r, t, i, a = !0;
		if (n) {
			for (s.isArray(n) || (n = [n]), t = 0, i = n.length; t < i; t++) a = a && d(n[t]);
			a ? "function" == typeof o && o(l.common.translations.data) : (r = s.extend(c, e), l.common.util.queue.push(function () {
				return l.common.meta.isLoaded
			}, function () {
				var e, t, i = function (t) {
					var e = r.url.replace("{CC}", r.cc || l.common.util.meta.getPageCc()).replace("{LC}", r.lc || l.common.util.meta.getPageLc()).replace("{TOKEN}", t).replace("{ENC}", r.enc || l.common.meta.page.pageInfo.ibm.encoding);
					s.ajax({
						url: e,
						dataType: "script",
						cache: !0
					}).fail(function (e) {
						window.console.error("v18: Error while loading translation file for token: " + t, e)
					})
				};
				for (e = 0, t = n.length; e < t; e++) d(n[e]) || i(n[e]);
				l.common.util.queue.push(function () {
					var e, t, i = !0;
					for (e = 0, t = n.length; e < t; e++) i = i && d(n[e]);
					return i
				}, function () {
					"function" == typeof o && o(l.common.translations.data)
				})
			}))
		}
	}, e.provide = function (e, t) {
		l.common.translations.data[e] = t
	}, window.ibmweb = window.ibmweb || {}, l.namespace(window.ibmweb, "data"), window.ibmweb.data.provide = e.provide
}(jQuery, IBMCore),
function (u) {
	var p = !1;

	function n(r, a, e) {
		var t, s = this,
			l = {},
			c = null,
			d = null,
			i = e.length;
		for (t = 0; t < i; t++) l[e[t].toLowerCase()] = new o(r, e[t].toLowerCase());

		function n() {
			if (c) try {
				switch (arguments.length) {
					case 0:
						c.fn.call(r);
						break;
					case 1:
						c.fn.call(r, arguments[0]);
						break;
					case 2:
						c.fn.call(r, arguments[0], arguments[1])
				}
			} catch (e) {
				window.console.warn("The [" + c.owner + "] subscription to the " + r + "[" + c.event_name + "] event failed with error:"), window.console.error(e)
			}
		}
		s.handlers = function () {
			return l
		}, s.mergeWith = function (e) {
			c = null;
			var t, i, n = ["subscribe", "unsubscribe", "resumeSubscription", "pauseSubscription", "publish", "handlers", "stopPropagation"],
				o = n.length;
			for (t = 0; t < o; t++) void 0 === r[i = n[t]] ? r[i] = s[i] : window.console.warn("Cannot merge event handler method '" + i + "' for " + r.toString() + ".");
			r.instanceName = function (e) {
				if (0 === arguments.length) return d;
				d = e
			}, r.toString = function () {
				return d ? "[ {{class_name}}: {{instance_name}} ]".replace("{{class_name}}", a).replace("{{instance_name}}", d) : "[ {{class_name}} ]".replace("{{class_name}}", a)
			}, r.event_coordinator = s
		}, s.subscribe = function (e, t, i, n) {
			if (c = null, void 0 === t) return window.console.warn("Cannot call on() with an undefined owner."), s;
			var o = l[e.toLowerCase()];
			o ? o.add(t, i, n) : window.console.warn("on() - No event name found: " + e);
			return c = {
				fn: i,
				owner: t,
				event_name: e
			}, s
		}, s.unsubscribe = function (e, t) {
			if (c = null, void 0 === e) return window.console.warn("Cannot call unsubscribe() with an undefined event_name."), s;
			var i = l[e.toLowerCase()];
			t ? i.remove(t) : i.reset();
			return s
		}, s.resumeSubscription = function (e, t) {
			if (c = null, void 0 === e) return window.console.warn("Cannot call resumeSubscription() with an undefined event_name."), s;
			var i = l[e.toLowerCase()];
			i ? void 0 !== t ? i.resumeSubscription(t) : i.resumeAllSubscriptions() : window.console.warn("resumeSubscription() - No event name found: " + e);
			return s
		}, s.pauseSubscription = function (e, t) {
			if (c = null, void 0 === e) return window.console.warn("Cannot call pauseSubscription() with an undefined event_name."), s;
			var i = l[e.toLowerCase()];
			i ? void 0 !== t ? i.pauseSubscription(t) : i.pauseAllSubscriptions() : window.console.warn("pauseSubscription() - No event name found: " + e);
			return s
		}, s.publish = function (e) {
			if (c = null, void 0 === e) return window.console.warn("Cannot call publish() with an undefined event_name."), s;
			var t = l[e.toLowerCase()];
			if (t) {
				if (0 < t.activeOwners().length) switch (arguments.length) {
					case 1:
						t.publish();
						break;
					case 2:
						t.publish(arguments[1])
				}
			} else window.console.warn("publish() - No event name found: " + e);
			return s
		}, s.stopPropagation = function () {
			p = !0
		}, s.runNow = n, s.runAsap = function () {
			if (c) {
				var e = l[c.event_name.toLowerCase()].runCount();
				0 < e && n()
			} else window.console.warn("Event '" + c.event_name + "' for '" + c.owner + " has no function available to run.")
		}, s.mergeWith(r)
	}

	function o(r, a) {
		var t = this,
			s = 0,
			l = 0,
			c = {},
			d = [];
		t.activeOwners = function () {
			var e, t = [];
			for (e in c) c[e] && t.push(e);
			return t
		}, t.events = d, t.runCount = function () {
			return s
		}, t.add = function (e, t, i) {
			void 0 === c[e] && (c[e] = !0);
			d[i ? "unshift" : "push"]({
				owner: e,
				fn: t,
				runs: 0
			})
		}, t.remove = function (e) {
			var t = -1;
			for (; ++t < d.length;) d[t].owner === e && (d.splice(t, 1), t--, l++)
		}, t.reset = function () {
			s = 0, c = {}, l = d.length, d = []
		}, t.resumeSubscription = function (e) {
			c[e] ? c[e] = !0 : window.console.warn("Cannot resumeSubscription function with an unknown owner: " + a);
			return t
		}, t.pauseSubscription = function (e) {
			c[e] ? c[e] = !1 : window.console.warn("Cannot pauseSubscription function with an unknown owner: " + a);
			return t
		}, t.resumeAllSubscriptions = function () {
			var e;
			for (e in c) c[e] = !0;
			return t
		}, t.pauseAllSubscriptions = function () {
			var e;
			for (e in c) c[e] = !1;
			return t
		}, t.publish = function () {
			p = !1, s++, l = 0;
			var t, e, i, n, o = d.length;
			for (t = 0; t < o; t++) {
				if (void 0 === (e = d[t - l])) throw window.console.warn("Failed event on:"), window.console.warn(r), "Cannot publish event: " + a;
				if (i = e.owner, p) u.common.util.debug.add("log", "Propagation stopped. " + i + " will not publish this time.");
				else if (c[e.owner]) {
					e.runs++, n = e.fn;
					try {
						switch (arguments.length) {
							case 0:
								n.call(r);
								break;
							case 1:
								n.call(r, arguments[0]);
								break;
							case 2:
								n.call(r, arguments[0], arguments[1])
						}
					} catch (e) {
						window.console.warn("Event function[" + t + "] failed. Owner: " + i), window.console.error(e)
					}
				} else u.common.util.debug.add("log", "The [" + i + "] subscription to the " + r + "[" + a + "] event is not active. (paused)")
			}
		}
	}
	u.common.util.eventCoordinator = function (e, t, i) {
		return new n(e, t, i)
	}
}(IBMCore),
function (t, n) {
	var e, i = n.namespace(n, "common.util");
	i.addCssRule = function () {
		var r, t = document.createElement("style");
		try {
			r = document.head.appendChild(t).sheet
		} catch (e) {
			r = document.getElementsByTagName("head")[0].appendChild(t).styleSheet
		}
		return function (t, i) {
			var n, o = "";
			if ("string" == typeof i) o = i;
			else try {
				o = Object.keys(i).map(function (e) {
					return e + ":" + ("content" === e ? "'" + i[e] + "'" : i[e])
				}).join(";")
			} catch (e) {
				for (n in i) o += n + ":" + ("content" === n ? "'" + i[n] + "'" : i[n]) + ";"
			}
			try {
				r.insertRule(t + "{" + o + "}", r.cssRules.length)
			} catch (e) {
				r.addRule(t, o, r.rules.length)
			}
		}
	}(), i.convertSecondsToHMS = function (e) {
		var t = parseInt(e, 10),
			i = Math.floor(t / 3600),
			n = Math.floor((t - 3600 * i) / 60),
			o = t - 3600 * i - 60 * n;
		return i < 10 && (i = "0" + i), n < 10 && (n = "0" + n), o < 10 && (o = "0" + o), (i = i < 1 ? "" : i + ":") + n + ":" + o
	}, i.generateId = function () {
		for (var e; n.common.util.idcount++, e = "ibm-dynid-" + n.common.util.idcount, null !== document.getElementById(e););
		return e
	}, i.idcount = 0, i.getDataAttributes = function (e, n) {
		var o = t(e).data() || {};
		return t(e)[0] && "" !== n && (o = {}, t.each(t(e).data(), function (e, t) {
			var i = "";
			0 === e.indexOf(n) && (i = e.substring(n.length), o[i] = t)
		})), o
	}, i.getScrollbarWidth = function () {
		var e, t, i = document.createElement("div"),
			n = document.createElement("div");
		return i.style.visibility = "hidden", i.style.width = "100px", document.body.appendChild(i), e = i.offsetWidth, i.style.overflow = "scroll", n.style.width = "100%", i.appendChild(n), t = n.offsetWidth, i.parentNode.removeChild(i), e - t
	}, i.has12grid = (e = null, function () {
		return null === e && (e = 0 !== document.getElementsByClassName("ibm-fluid").length), e
	}), i.hasScrollbars = function (e) {
		return !!t(e)[0] && t(e)[0].scrollHeight > t(e).innerHeight()
	}, i.setIpcCookie = function (e, t) {
		if (e && t && 4 === (e + t).length) {
			var i = IBMCore.www.module.truste.getUiAllowedStorageTtl(31536e3);
			n.common.util.cookie.set("ipcInfo", "cc=" + e + ";lc=" + t + ";ac=all", {
				path: "/",
				domain: ".ibm.com",
				expires: i
			})
		}
	}, n.common.util.string = {}, i.string.htmlspecialchars = function (e) {
		return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\//g, "&#47;")
	}, String.prototype.htmlspecialchars = function () {
		return n.common.util.string.htmlspecialchars(this)
	}
}(jQuery, IBMCore),
function (t, i) {
	i.common.util.freezeScrollbars = function (e) {
		t(document.body)[e ? "addClass" : "removeClass"]("ibm-no-scroll")
	}, t(function () {
		var e = i.common.util.getScrollbarWidth();
		i.common.util.addCssRule(".ibm-no-scroll #ibm-content-wrapper", {
			"margin-left": -e + "px"
		})
	})
}(jQuery, IBMCore),
function (l) {
	function t(e) {
		var t = this,
			i = l.common.util.eventCoordinator(t, "Gatekeeper", ["ready"]),
			n = {};

		function o(e) {
			var t, i = e.length;
			for (t = 0; t < i; t++) r(e[t])
		}

		function r(e) {
			return n[e] = !0, t
		}

		function a() {
			return s() && i.publish("ready"), t
		}

		function s() {
			var e, t = !0;
			for (e in n) n[e] && (t = !1);
			return t
		}
		e instanceof Array ? o(e) : "string" == typeof e && r(e), t.addHolds = o, t.addHold = r, t.removeHold = function (e) {
			!0 !== n[e] ? window.console.warn("v18: Removing a hold that does not exist: " + e + ". If the hold is added after, this removal will have no effect.") : (n[e] = !1, a());
			return t
		}, t.getHolds = function () {
			var e, t = [];
			for (e in n) n[e] && t.push(e);
			return t
		}, t.removeAllHolds = function () {
			n = {}, a()
		}, t.isReady = s
	}
	l.common.util.gatekeeper = function (e) {
		return new t(e)
	}
}(IBMCore),
function (o, r) {
	r.namespace(r, "common.util").getCurrentGridSize = function () {
		var e = window.innerWidth,
			t = 0;
		switch (o("html.safari")[0] && (e = o(document.body).width()), !0) {
			case 1480 <= e:
				t = 1440;
				break;
			case 1240 <= e:
				t = 1200;
				break;
			case 1e3 <= e:
				t = 960;
				break;
			case 760 <= e:
				t = 720;
				break;
			case 580 <= e:
				t = 540;
				break;
			case e < 580:
				t = 0
		}
		return t
	}, o(function () {
		var e = !1,
			t = null,
			i = {
				0: "small",
				540: "medium",
				720: "medium",
				960: "large",
				1200: "xlarge",
				1440: "xlarge"
			};

		function n() {
			var e = r.common.util.getCurrentGridSize();
			e !== t && (t = e, o(document.documentElement).removeClass("ibm-grid-small ibm-grid-medium ibm-grid-large ibm-grid-xlarge").addClass("ibm-grid-" + i[e]), r.common.widget.manager.dispatchEvent({
				evtEl: document.documentElement,
				evtName: "grid-change",
				evtDetail: {
					gridnum: e
				}
			}))
		}
		n(), o(window).on("resize", function () {
			e = !0
		}), setInterval(function () {
			e && (e = !1, n())
		}, 50)
	})
}(jQuery, IBMCore),
function (r, e) {
	var a = e.namespace(e, "common.util.queue");

	function i() {
		if (!a._lock && 0 !== a._queue.length) {
			a._lock = !0;
			var e = 0,
				t = a._queue.length;
			for (e = 0, t = a._queue.length; e < t; e++) a._queue[e][1]() && (a._queue[e][2](), a._queue.splice(e, 1), e--, t = a._queue.length);
			a._lock = !1, a._timer = setTimeout(i, 50)
		}
	}
	a._queue = [], a._timer = null, a._count = 0, a._lock = !1, a.push = function (e, t) {
		return a._count++, a._queue.push([a._count, e, t]), i(), a._count
	}, a.unshift = function (e, t) {
		return a._count++, a._queue.unshift([a._count, e, t]), i(), a._count
	}, a.remove = function (e) {
		var t = 0,
			i = a._queue.length;
		for (t = 0, i = a._queue.length; t < i; t++)
			if (a._queue[t][0] === e) return a._queue.splice(t, 1), !0;
		return !1
	}, a.waitForElement = function (e, t, i) {
		var n = !1,
			o = a.push(function () {
				return null !== document.getElementById(e)
			}, function () {
				n || (n = !0, t())
			});
		void 0 !== i && !0 === i && r(function () {
			n || (n = !0, a.remove(o), t())
		})
	}
}(jQuery, IBMCore),
function (n, o) {
	var r = o.namespace(o, "common.meta"),
		e = o.namespace(o, "common.util.meta"),
		a = o.common.util.eventCoordinator(r, "Meta", ["dataReady"]);
	r.isLoaded = !1, r.init = function () {
		if (IBMPerformance.mark("V18-meta-info-end"), IBMPerformance.measure("V18-meta-wait-duration", "V18-meta-info-begin", "V18-meta-info-end"), window.digitalData = window.digitalData || {}, n.extend(!0, r, window.digitalData), r.page && r.page.pageInfo) {
			var e = r.page.pageInfo.ibm,
				t = document.documentElement.lang,
				i = {
					pt: "br",
					zh: "cn",
					de: "de",
					es: "es",
					fr: "fr",
					it: "it",
					ja: "jp",
					ko: "kr"
				};
			e.wwCase = "", e.cc = "", e.lc = "", e.country && (e.cc = n.trim(e.country.toLowerCase()), -1 < e.cc.indexOf(",") && (e.cc = n.trim(e.cc.substring(0, e.cc.indexOf(",")))), "gb" === e.cc && (e.cc = "uk"), "zz" === e.cc && (e.cc = "us", e.wwCase = "Y")), r.page.pageInfo.language && (e.lc = r.page.pageInfo.language.substring(0, 2).toLowerCase()), t && (e.lc = e.lc || t.substring(0, 2).toLowerCase(), e.cc = e.cc || t.substring(3, 5).toLowerCase()), e.lc = e.lc || "en", e.cc = e.cc || "us", e.cc = o.common.util.config.get("meta.cc") || e.cc, e.lc = o.common.util.config.get("meta.lc") || e.lc, e.cpi = e.cc + e.lc, "us" === e.cc && "en" !== e.lc && i[e.lc] && (e.cpi = i[e.lc] + e.lc), e.subject || (e.subject = "ZZ999"), e.encoding = "utf8", e.encodingRaw = "UTF-8", n("meta[charset]")[0] && (e.encodingRaw = n("meta[charset]").attr("charset"), e.encoding = e.encodingRaw.replace("-", "").replace("_", "").toLowerCase()), e.title = "", n("title")[0] && (e.title = n("title")[0].innerHTML), !1 === n(document.body).data("coremodules_enabled") && o.common.util.config.set({
				coremodules: {
					enabled: !1
				}
			}), !1 === n(document.body).data("contentwidgets_enabled") && o.common.util.config.set({
				contentwidgets: {
					enabled: !1
				}
			}), n.extend(!0, window.digitalData.page, r.page), a.publish("dataReady")
		}
	}, e.changePageLocale = function (e) {
		var t = e.substr(0, 2).toLowerCase(),
			i = e.substr(3).toUpperCase();
		window.digitalData.page.pageInfo.ibm.country = i, window.digitalData.page.pageInfo.language = t + "-" + i, r.init()
	}, e.getPageCc = function () {
		return o.common.meta.page.pageInfo.ibm.cc
	}, e.getPageLc = function () {
		return o.common.meta.page.pageInfo.ibm.lc
	}, r.subscribe("dataReady", "self", function () {
		r.isLoaded = !0
	}), IBMPerformance.mark("V18-meta-info-begin"), o.common.util.queue.waitForElement("ibm-top", r.init, !0)
}(jQuery, IBMCore),
function (i, e) {
	var t = e.namespace(e, "common.util.anchorlinkAdjustment");
	t.adjustLinks = function (e) {
		i(e).on("click", "a", function (e) {
			e.preventDefault(), t.gotoElement(this.getAttribute("href"))
		})
	}, t.gotoElement = function (e) {
		var t = i(e).offset().top - 60;
		window.scroll(0, t)
	}
}(jQuery, IBMCore),
function (a, e) {
	e.namespace(e, "common.util").scrolledintoview = function (e) {
		var t = a(e),
			i = a(window),
			n = i.scrollTop(),
			o = n + i.height(),
			r = t.offset().top;
		return r + t.height() <= o && n <= r
	}
}(jQuery, IBMCore),
function (n, o) {
	var e = o.namespace(o, "common.util.scrolltracker");
	e.autoInit = function () {}, e.init = function () {
		var e = 0,
			t = 0,
			i = !1;
		n(window).on("scroll", function () {
			i = !0
		}), setInterval(function () {
			i && (i = !1, t = Math.floor(n(window).scrollTop() / 400), e < t && (e = t, o.common.util.statshelper.fireEvent({
				ibmEV: "scroll distance",
				ibmEvGroup: o.common.util.getCurrentGridSize() + " grid",
				ibmEvAction: 400 * e,
				ibmEvModule: n(document.body).height()
			})))
		}, 50)
	}, o.common.meta.subscribe("dataReady", "scrolltracker", e.autoInit)
}(jQuery, IBMCore),
function (r, o) {
	var e = o.namespace(o, "common.util.statshelper");
	e.fireEvent = function (e) {
		var t, i, n = document.getElementsByTagName("h2")[0],
			o = ["Group", "Name", "Module", "Section", "Target", "FileSize", "LinkTitle"];
		for (e.ibmEvLinkTitle || e.ibmEvLinktitle || n && n.innerHTML && r.extend(e, {
				ibmEvLinkTitle: n.innerHTML
			}), t = o.length - 1; 0 <= t; t--) e[i = "ibmEv" + o[t]] || (e[i] = "null");
		"undefined" != typeof ibmStats && ibmStats.event ? ibmStats.event(e) : window.console.warn("v18: ibmStats.event doesn't exist yet, cannot fire event: ", e)
	}, e.getCustomEventParams = function (e) {
		var t = o.common.util.getDataAttributes(e, "ibmevent_"),
			i = {
				ibmev: "ibmEV",
				ibmevaction: "ibmEvAction",
				ibmevname: "ibmEvName",
				ibmevmodule: "ibmEvModule",
				ibmevgroup: "ibmEvGroup",
				ibmevsection: "ibmEvSection",
				ibmevlinktitle: "ibmEvLinkTitle",
				ibmevfilesize: "ibmEvFileSize",
				ibmevtarget: "ibmEvTarget"
			},
			n = {};
		return r.each(t, function (e, t) {
			n[i[e]] = t
		}), n
	}
}(jQuery, IBMCore),
function (e, t) {
	var a = t.namespace(t, "common.util.storage");
	a.clear = function () {
		return !!a.isSupported() && (localStorage.clear(), !0)
	}, a.getItem = function (e) {
		IBMPerformance.mark("V18-storage-get-begin");
		var t = null,
			i = 0,
			n = (new Date).getTime();
		return a.isSupported() ? (null !== localStorage.getItem(e) && (0 !== (i = JSON.parse(localStorage.getItem(e)).expires) && i < n ? a.removeItem(e) : t = JSON.parse(localStorage.getItem(e)).value), IBMPerformance.mark("V18-storage-get-end"), IBMPerformance.measure("V18-storage-get-duration-" + e, "V18-storage-get-begin", "V18-storage-get-end"), t) : null
	}, a.isSupported = function () {
		return Modernizr.localstorage && "undefined" != typeof JSON
	}, a.removeItem = function (e) {
		return !!a.isSupported() && (localStorage.removeItem(e), !0)
	}, a.setItem = function (e, t, i) {
		IBMPerformance.mark("V18-storage-set-begin");
		var n, o = 0,
			r = (new Date).getTime();
		return !!a.isSupported() && (a.removeItem(e), i && (o = 1e3 * i, o += r), n = {
			value: t,
			expires: o
		}, localStorage.setItem(e, JSON.stringify(n)), IBMPerformance.mark("V18-storage-set-end"), IBMPerformance.measure("V18-storage-set-duration-" + e, "V18-storage-set-begin", "V18-storage-set-end"), !0)
	}
}(jQuery, IBMCore),
function (t, i) {
	var n = i.namespace(i, "common.translations"),
		o = i.common.util.eventCoordinator(n, "meta", ["dataAndDomReady", "dataReady", "error"]),
		r = i.common.util.storage.getItem("v18mainxl8ns") || {},
		a = {
			v18: {
				data: {},
				ready: !1
			}
		};

	function e(e) {
		t.extend(!0, n.data, e)
	}
	n.data = {}, n.isDataLoaded = !1, n.init = function () {
		n.data = {}, a.v18.ready = !1, i.common.util.meta.getPageLc() && i.common.util.meta.getPageCc() ? (i.common.util.queue.push(function () {
			return a.v18.ready
		}, function () {
			e(r[i.common.meta.page.pageInfo.ibm.cpi]), e(a.v18.data),
				function () {
					r[i.common.meta.page.pageInfo.ibm.cpi] = n.data;
					var e = {},
						t = IBMCore.www.module.truste.getUiAllowedStorageTtl(14400);
					e[i.common.meta.page.pageInfo.ibm.cpi] = {
						v18main: n.data.v18main
					}, i.common.util.storage.setItem("v18mainxl8ns", e, t)
				}(), o.publish("dataReady"), t(function () {
					o.publish("dataAndDomReady")
				})
		}), r[i.common.meta.page.pageInfo.ibm.cpi] && r[i.common.meta.page.pageInfo.ibm.cpi].v18main && (a.v18.ready = !0), a.v18.ready || function () {
			IBMPerformance.mark("V18-begin-load-i18n");
			var e = i.common.config.dataUrl + i.common.meta.page.pageInfo.ibm.cpi + ".js";
			t.ajax({
				url: e,
				dataType: "script",
				cache: !0
			}).done(function () {
				IBMPerformance.mark("V18-end-load-i18n"), IBMPerformance.measure("V18-load-i18n", "V18-begin-load-i18n", "V18-end-load-i18n"), a.v18.ready = !0
			}).fail(function (e) {
				window.console.error("v18: Error while loading main v18 translation file", e), a.v18.ready = !0, o.publish("error")
			})
		}()) : window.console.error("v18: Page is missing required digitalData object language and country code. v18 JS cannot continue.")
	}, n.subscribe("dataReady", "self", function () {
		n.isDataLoaded = !0
	}), i.common.meta.subscribe("dataReady", "translations", n.init).runAsap(n.init)
}(jQuery, IBMCore),
function (o, r) {
	var e, t, i, n, a, s, l = r.namespace(r, "common.util.user"),
		c = r.common.util.eventCoordinator(l, "user", ["userIpDataReady", "userIBMDataReady", "userstateReady", "error", "ready"]),
		d = ["annual_sales", "audience", "audience_segment", "b2b", "b2c", "city", "company_name", "country", "country_name", "demandbase_sid", "employee_count", "employee_range", "forbes_2000", "fortune_1000", "industry", "information_level", "ip", "isp", "marketing_alias", "phone", "primary_naics", "primary_sic", "registry_city", "registry_country_code", "registry_state", "state", "stock_ticker", "street_address", "sub_industry", "traffic", "web_site", "zip"],
		u = {
			cryptKey: "yxsdpqmouenictjarzvkbfhwlg",
			decode: function (e) {
				if ("boolean" == typeof e) return e;
				var t, i = e,
					n = "",
					o = /[a-z]/;
				for (t = 0; t < i.length; t++) o.test(i.charAt(t)) ? n += String.fromCharCode(u.cryptKey.indexOf(i.charAt(t)) + 97) : n += i.charAt(t);
				return decodeURIComponent(n)
			},
			encode: function (e) {
				if ("string" != typeof e || !e || "" === e) return e;
				var t, i = e.toLowerCase(),
					n = "",
					o = /[a-z]/;
				for (t = 0; t < i.length; t++) o.test(i.charAt(t)) ? n += u.cryptKey.charAt(i.charCodeAt(t) - 97) : n += i.charAt(t);
				return encodeURIComponent(n)
			}
		},
		p = {
			signedin: {
				complete: !1
			}
		},
		m = {
			expireDaysBasic: 3,
			expireDaysDetailed: 3,
			key: "comusrtag"
		},
		h = {};

	function f() {
		IBMPerformance.mark("V18-dbipcall-begin"), o.ajax({
			url: "https://api.www.s81c.com/webmaster/dbip/",
			dataType: "jsonp",
			success: function (e) {
				var t, i, n = (t = e, i = {}, o.each(d, function () {
					var e = t[this];
					null == e ? e = "n/a" : "boolean" != typeof e && (e = e.toString().toLowerCase()), i[this] = e
				}), i.information_level = "basic", i);
				l.setInfo(n),
					function () {
						var e, t = {},
							i = IBMCore.www.module.truste.getUiAllowedStorageTtl(24 * m.expireDaysDetailed * 3600);
						for (e in h) h.hasOwnProperty(e) && (t[u.encode(e)] = u.encode(h[e]));
						r.common.util.storage.setItem(m.key, t, i)
					}(), IBMPerformance.mark("V18-dbipcall-end"), IBMPerformance.measure("V18-dbipcall-duration", "V18-dbipcall-begin", "V18-dbipcall-end"), c.publish("userIpDataReady")
			}
		})
	}

	function g() {
		var e = function () {
			var e, t, i, n = {},
				o = r.common.util.storage.getItem(m.key);
			if ("object" == typeof o)
				for (e in o) o.hasOwnProperty(e) && (t = u.decode(e), i = u.decode(o[e]), n[t] = i);
			return n
		}();
		e && e.information_level ? (l.setInfo(e), c.publish("userIpDataReady")) : f()
	}

	function v(e) {
		l.setInfo({
			signedin: e
		})
	}

	function b() {
		r.common.util.config.isEnabled("userstateservice") && o.ajax({
			url: r.common.config.userStateUrl,
			dataType: "json",
			xhrFields: {
				withCredentials: !0
			},
			signedIn: !1
		}).done(function (e) {
			e.user && "Unauthenticated" !== e.user && (this.signedIn = !0)
		}).fail(function () {
			r.common.util.debug.add("warn", "User service failed.")
		}).always(function () {
			v(this.signedIn), c.publish("userIBMDataReady"), c.publish("userstateReady"), p.signedin.complete = !0
		})
	}
	l.getInfo = function () {
		return h
	}, l.setInfo = function (e) {
		return o.extend(h, e), h
	}, l.setUserSigninState = function (e) {
		e && e.results && "1" === e.results.signinstate ? v(!0) : v(!1);
		p.signedin.complete = !0, c.publish("userIBMDataReady"), c.publish("userstateReady")
	}, l.subscribe("userIpDataReady", "self", function () {
		l.userIpDataReady = !0
	}), l.subscribe("userIBMDataReady", "self", function () {
		l.userIBMDataReady = !0
	}), l.subscribe("userstateReady", "self", function () {
		l.userstateReady = !0
	}), l.subscribe("error", "self", function () {}), r.common.util.config.isEnabled("useriplookup") && g(), h.browser_lang = window.navigator.userLanguage || window.navigator.language, e = r.common.util.cookie.get("ipcInfo"), t = [], n = i = "", a = {
		ipcinfo: "n/a"
	}, e && (t = e.split(";"), o.each(t, function () {
		var e = this.split("=");
		"cc" === e[0] ? i = e[1] : "lc" === e[0] && (n = e[1])
	}), a.ipcinfo = n + "-" + i), l.setInfo(a), s = String(document.cookie).match(/(^| )(w3ibmProfile|w3_sauid|PD-W3-SSO-[^\=]*|OSCw3Session|IBM_W3SSO_ACCESS)=/), l.setInfo({
		isIBMer: !!s
	}), c.publish("ready"), r.common.meta.subscribe("dataReady", "v18user", b).runAsap(b)
}(jQuery, IBMCore),
function (c, r) {
	var e = r.namespace(r, "common.util.a11y");

	function d(e) {
		e.parent("li").addClass("ibm-active").siblings().removeClass("ibm-active")
	}

	function u(e) {
		e.find("a:visible:eq(0)").focus()
	}

	function p(e) {
		e.find("a:visible:eq(-1)").focus()
	}

	function m(e) {
		var t = e.find("a:visible").index(e.find("a:focus")),
			i = e.find("a:visible:eq(" + (t + 1) + ")");
		i[0] ? i.focus() : u(e)
	}

	function h(e) {
		var t = e.find("a:visible").index(e.find("a:focus")),
			i = e.find("a:visible:eq(" + (t - 1) + ")");
		i[0] ? i.focus() : p(e)
	}

	function l(e) {
		var t = e.find("a:focus").closest("li").next("li").find("a");
		t[0] ? t.first().focus() : u(e.find("a:focus").closest("ul"))
	}

	function f(e) {
		var t = e.parent("li").prev("li").find("a");
		t[0] ? t.first().focus() : p(e.closest("ul"))
	}

	function n(e, t) {
		t[0] && (e.find("a").attr("tabindex", -1), t.attr("tabindex", 0))
	}
	e.makeTreeAccessible = function (a) {
		var s = c(a.el);
		a.el && (n(s, s.find("a[aria-selected='true']")), s.on("focus", "a", function (e) {
			a.focus && a.focus(this, e)
		}).on("keydown", "a", function (e) {
			var t, i, n, o, r = c(this);
			switch (e.keyCode) {
				case 9:
					break;
				case 32:
					e.preventDefault(), r.click();
					break;
				case 35:
					e.preventDefault(), p(s);
					break;
				case 36:
					e.preventDefault(), u(s);
					break;
				case 37:
					e.preventDefault(), (o = (n = r).closest("ul").parent("li"))[0] ? o.children("a").first().focus() : f(n);
					break;
				case 38:
					e.preventDefault(), f(r);
					break;
				case 39:
					e.preventDefault(), (i = (t = s).find("a:focus").closest("li").children("ul"))[0] ? u(i) : l(t);
					break;
				case 40:
					e.preventDefault(), l(s)
			}
			a.keydown && a.keydown(this, e)
		}))
	}, e.makeMenuAccessible = function (s) {
		var l = c(s.el);
		s.el && (l.find(":focusable").attr("tabindex", -1).filter(":first").attr("tabindex", 0), l.on("focus", "a, button", function (e) {
			s.focus && s.focus(this, e)
		}).on("keydown", "a, button", function (e) {
			var t, i, n, o, r, a = c(this);
			switch (e.keyCode) {
				case 9:
				case 27:
					l.find(".ibm-active").removeClass("ibm-active");
					break;
				case 32:
					e.preventDefault(), a.click();
					break;
				case 35:
					e.preventDefault(), p(l);
					break;
				case 36:
					e.preventDefault(), u(l);
					break;
				case 37:
					e.preventDefault(),
						function (e) {
							var t, i = e.closest("ul[role='menu']").parent("li"),
								n = e.parent("li");
							t = 1 === i.prev("li").length ? i.prev("li") : 0 === i.prev("li").length && 0 < i.siblings("li").length ? i.parent("ul").children("li:last") : 1 === n.prev("li").length ? n.prev("li") : n.siblings("li:last");
							t[0] ? u((t = t.siblings().removeClass("ibm-active").end().addClass("ibm-active").find(":focusable").first().focus()).siblings("ul")) : p(e.closest("ul"))
						}(a);
					break;
				case 38:
					e.preventDefault(), r = (o = a).parent("li").prev("li"), "menubar" === o.closest("ul").attr("role") ? o.siblings("ul")[0] ? (d(o), u(o.siblings("ul"))) : (h(o.closest("ul")), d(o.closest("ul").children("li:last")), u(o.closest("ul").children("li:last").children("ul"))) : r[0] ? h(o.closest("ul")) : p(o.closest("ul"));
					break;
				case 39:
					e.preventDefault(),
						function (e) {
							var t, i = e.closest("ul[role='menu']").parent("li"),
								n = e.parent("li");
							t = 1 === i.next("li").length ? i.next("li") : 0 === i.next("li").length && 0 < i.siblings("li").length ? i.parent("ul").children("li:first") : n.next("li");
							t[0] ? u((t = t.siblings().removeClass("ibm-active").end().addClass("ibm-active").find(":focusable").first().focus()).siblings("ul")) : u(e.closest("ul"))
						}(a);
					break;
				case 40:
					e.preventDefault(), "menubar" === (t = a).closest("ul").attr("role") ? t.siblings("ul")[0] ? (d(t), u(t.siblings("ul"))) : (m(t.closest("ul")), d(t.parent("li").next("li")), u(t.parent("li").next("li").children("ul"))) : (n = (i = t).closest("li").next("li").find("a"))[0] ? n.first().focus() : u(i.closest("ul"))
			}
			s.keydown && s.keydown(this, e)
		}))
	}, e.makeTabsAccessible = function (t) {
		var i = c(t.el);
		t.el && (n(i, i.find("a[aria-selected='true']")), i.on("focus", "a", function (e) {
			t.focus && t.focus(this, e)
		}).on("keydown", "a", function (e) {
			switch (e.keyCode) {
				case 9:
					break;
				case 32:
					e.preventDefault(), c(this).click();
					break;
				case 35:
					e.preventDefault(), p(i);
					break;
				case 36:
					e.preventDefault(), u(i);
					break;
				case 37:
				case 38:
					e.preventDefault(), h(i);
					break;
				case 39:
				case 40:
					e.preventDefault(), m(i)
			}
			t.keydown && t.keydown(this, e)
		}))
	}, e.makeToolbarAccessible = function (t) {
		var i = c(t.el);
		t.el && i.on("focus", "a", function (e) {
			n(i, c(this)), t.focus && t.focus(this, e)
		}).on("keydown", "a", function (e) {
			switch (e.keyCode) {
				case 9:
					break;
				case 32:
					e.preventDefault(), c(this).click();
					break;
				case 35:
					e.preventDefault(), p(i);
					break;
				case 36:
					e.preventDefault(), u(i);
					break;
				case 37:
				case 38:
					e.preventDefault(), h(i);
					break;
				case 39:
				case 40:
					e.preventDefault(), m(i)
			}
			t.keydown && t.keydown(this, e)
		})
	}, e.gotoFirstItem = u, c(function () {
		var e, t, i, n, o;
		e = c(document.getElementById("ibm-leadspace-head")).find("h1").text() || "", t = c(document.getElementById("ibm-primary-tabs")).find("a[aria-selected='true']").text() || "", i = c(document.getElementById("ibm-secondary-tabs")).find("a[aria-selected='true']").text() || "", n = c(document.getElementById("ibm-primary-links")).children("li").children("a[aria-selected='true']").text() || "", o = c(document.getElementById("ibm-primary-links")).children("li").find("a[aria-selected='true']").text() || "", c("main").removeAttr("aria-labelledby").attr("aria-label", c.trim(o + " " + i + " " + n + " " + t + " " + e)), document.getElementById("ibm-primary-tabs") && !c("#ibm-primary-tabs[data-widget]")[0] && setTimeout(function () {
			r.common.util.a11y.makeTabsAccessible({
				el: document.getElementById("ibm-primary-tabs")
			})
		}, 100), document.getElementById("ibm-secondary-tabs") && !c("#ibm-secondary-tabs[data-widget]")[0] && setTimeout(function () {
			r.common.util.a11y.makeTabsAccessible({
				el: document.getElementById("ibm-secondary-tabs")
			})
		}, 100)
	})
}(jQuery, IBMCore),
function (n, o) {
	function t() {
		var e = o.common.util.config.get("survey.global_percent"),
			t = "n/a",
			i = o.common.util.user.getInfo().country;
		0 !== e && "number" != typeof e && (e = "not set"), e = e.toString();
		try {
			t = navigator.connection.effectiveType
		} catch (e) {}
		"n/a" === i && (i = o.common.util.user.getInfo().registry_country_code), o.common.util.statshelper.fireEvent({
			ibmEV: "page load",
			ibmEvAction: "v18 page tracker",
			ibmEvFileSize: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
			ibmEvGroup: t,
			ibmEvLinkTitle: o.common.util.getCurrentGridSize(),
			ibmEvModule: o.common.util.config.get("masthead.type"),
			ibmEvName: n(document.documentElement).hasClass("hires") ? "1" : "0",
			ibmEvSection: e,
			attribute1: o.common.util.meta.getPageLc() + "-" + o.common.util.meta.getPageCc(),
			attribute2: i + "^" + o.common.util.user.getInfo().browser_lang,
			attribute3: o.common.util.user.getInfo().ipcinfo,
			attribute4: o.common.util.user.getInfo().signedin ? "true" : "false"
		})
	}
	n(function () {
		setTimeout(function () {
			var e = o.common.util.gatekeeper();
			e.addHolds(["ipdata", "ibmdata"]), e.subscribe("ready", "v18pagetacker", t), o.common.util.user.subscribe("userIpDataReady", "v18tipdata", function () {
				e.removeHold("ipdata")
			}).runAsap(function () {
				e.removeHold("ipdata")
			}), o.common.util.user.subscribe("userIBMDataReady", "v18tibmdata", function () {
				e.removeHold("ibmdata")
			}).runAsap(function () {
				e.removeHold("ibmdata")
			})
		}, 1500)
	})
}(jQuery, IBMCore),
function (e, i) {
	var n = i.namespace(i, "common.util.bitly");
	n.shorten = function (t) {
		t.url || (t.url = window.location.href), e.ajax({
			url: "http:" === window.location.protocol ? "http://api.bit.ly/v3/shorten" : "https://api-ssl.bit.ly/v3/shorten",
			dataType: "script",
			data: {
				login: i.common.config.bitly.login,
				apiKey: i.common.config.bitly.key,
				longUrl: t.url,
				format: "json",
				callback: "IBMCore.common.util.bitly._callback"
			},
			timeout: i.common.config.bitly.timeout,
			error: function (e) {
				window.console.error("v18: Error while getting bit.ly URL", e), t.error && t.error(t.url)
			}
		}), n._callback = function (e) {
			e && e.status_code && 200 === e.status_code || (window.console.error("v18: Error while getting bit.ly URL", e), t.error && t.error(t.url)), t.success && t.success(e.data.url)
		}
	}
}(jQuery, IBMCore),
function (t, i) {
	var e, n, o = i.namespace(i, "www.module.truste"),
		r = i.common.util.eventCoordinator(o, "truste", ["ready"]),
		a = "Cookie preferences";

	function s() {
		var e = i.common.translations.data.v18main.misc.cookiePrefs || a;
		"es" === i.common.util.meta.getPageLc() && e === a ? e = "Configuración de Cookies" : "fr" === i.common.util.meta.getPageLc() && e === a && (e = "Préférences relatives aux témoins"), t(".ibm-footer-corporate-links ul").children("#ibm-truste-cp").remove().end().append('<li id="ibm-truste-cp"><a href="#" onclick="truste.eu.clickListener();return false;">' + e + "</a></li>")
	}
	o.init = function () {
		"fr" === i.common.util.meta.getPageLc() && "ca" === i.common.util.meta.getPageCc() && "fr_CA"
	}, o.getConsentDecision = function (e, t) {
		e || (e = "ibm.com");
		try {
			var i = truste.cma.callApi("getConsentDecision", e);
			return t ? i : i.consentDecision
		} catch (e) {
			return 0
		}
	}, o.getUiAllowedStorageTtl = function (e) {
		return 1 < IBMCore.www.module.truste.getConsentDecision() ? e : 14400
	}, i.www.module.truste.subscribe("ready", "self", function () {}), i.common.translations.subscribe("dataReady", "truste", o.init), e = i.common.util.queue.push(function () {
		return "undefined" != typeof truste
	}, function () {
		window.top.postMessage('{"PrivacyManagerAPI":{"action":"getConsent","timestamp":' + (new Date).getTime() + "}}", "*"), r.publish("ready"), i.common.module.footer.subscribe("ready", "truste", s).runAsap(s), clearTimeout(n)
	}), n = setTimeout(function () {
		i.common.util.queue.remove(e), i.common.util.debug.add("log", "Truste library didn't load in time. Cookie preference link not injected.")
	}, 5e3)
}(jQuery, IBMCore),
function (i, n) {
	var e = n.namespace(n, "common.module.backtotop"),
		o = !1,
		r = {
			btt: {}
		},
		t = !1,
		a = i(window).height();

	function s() {
		!t && i(window).scrollTop() > a ? (r.btt.addClass("ibm-active").children("a").attr("tabindex", "0"), t = !0) : t && i(window).scrollTop() < a && (r.btt.removeClass("ibm-active").children("a").attr("tabindex", "-1"), t = !1)
	}
	e.autoInit = function () {
		n.common.util.config.isEnabled("backtotop") && e.init()
	}, e.init = function () {
		var e = document.getElementById("ibm-content-wrapper") || document.getElementById("ibm-pcon") || document.getElementById("ibm-content-main") || i(n.common.util.config.get("backtotop.container"))[0],
			t = n.common.translations.data.v18main.misc.backtotop;
		i(window).scroll(function () {
			o = !0
		}), setInterval(function () {
			o && (o = !1, s())
		}, 500), i(function () {
			i(e).find(".ibm-btt-auto").remove(), i('<p class="ibm-ind-link ibm-nospacing ibm-icononly ibm-btt-auto ibm-hidden-small"><a class="ibm-nospacing ibm-chevron-up-link" href="#top" tabindex="-1">' + t + "</a></p>").appendTo(e).children("a").on("click", function (e) {
				var t = i(window).scrollTop() / 16;
				e.preventDefault(), i("html, body").animate({
					scrollTop: 0
				}, t)
			}), r.btt = i(document.getElementsByClassName("ibm-btt-auto")[0]), s()
		})
	}, n.common.translations.subscribe("dataReady", "backtotop", e.autoInit).runAsap(e.autoInit)
}(jQuery, IBMCore),
function (t, i) {
	var e = i.namespace(i, "common.module.canadanotice");

	function n() {
		var e = '<img src="' + i.common.util.config.get("imageUrl") + 'adchoices.png" width="77" height="16" alt="" border="0" />';
		"fr" === i.common.util.meta.getPageLc() && (e = '<img src="' + i.common.util.config.get("imageUrl") + 'adchoices-cafr.png" width="87" height="15" alt="" border="0" />'), t("body").prepend('<div class="ibm-legalfooter-text" id="ibm-canada-legal-adchoice"><div class="ibm-columns"><div class="ibm-col-1-1"><p><a style="cursor:pointer" href="https://youradchoices.ca/en/tools" target="_blank">' + e + "</a></p></div></div></div>")
	}
	e.autoInit = function () {
		t("#ibm-canada-legal-adchoice, .ibm-canada-notice, .ibm-canada-notice-button").remove(), "ca" !== i.common.util.meta.getPageCc() || t("#ibm-canada-legal-adchoice").length || t(n)
	}, i.common.meta.subscribe("dataReady", "canadaadchoice", e.autoInit).runAsap(e.autoInit)
}(jQuery, IBMCore),
function (s, t) {
	var i, n = t.namespace(t, "common.module.contactmodule"),
		o = t.common.util.eventCoordinator(n, "contactmodule", ["ready"]),
		r = ["blue-60", "blue-50", "green-50", "magenta-50", "orange-50", "purple-50", "red-50", "teal-50"],
		a = "Contact IBM",
		l = {
			contactModule: {},
			cmButton: {}
		},
		e = {
			"en-bn": "asean-imt",
			"en-id": "asean-imt",
			"en-my": "asean-imt",
			"en-ph": "asean-imt",
			"en-sg": "asean-imt",
			"en-th": "asean-imt",
			"en-vn": "asean-imt",
			"en-au": "anz-imt",
			"en-nz": "anz-imt",
			"en-bu": "benelux-imt",
			"en-lu": "benelux-imt",
			"en-nl": "benelux-imt",
			bg_bg: "cee-imt",
			cs_cz: "cee-imt",
			"en-az": "cee-imt",
			"en-cz": "cee-imt",
			"en-ee": "cee-imt",
			"en-hr": "cee-imt",
			"en-hu": "cee-imt",
			"en-lt": "cee-imt",
			"en-lv": "cee-imt",
			"en-ro": "cee-imt",
			et_ee: "cee-imt",
			hr_hr: "cee-imt",
			hu_hu: "cee-imt",
			lt_lt: "cee-imt",
			lv_lv: "cee-imt",
			"pl-pl": "cee-imt",
			ro_ro: "cee-imt",
			"ru-ru": "cee-imt",
			sk_sk: "cee-imt",
			sl_si: "cee-imt",
			sr_rs: "cee-imt",
			uk_ua: "cee-imt",
			"de-at": "dach-imt",
			"de-ch": "dach-imt",
			"de-de": "dach-imt",
			"de-li": "dach-imt",
			"en-at": "dach-imt",
			"en-ch": "dach-imt",
			"en-li": "dach-imt",
			"fr-ch": "dach-imt",
			"it-ch": "dach-imt",
			"en-ma": "france-imt",
			"en-mc": "france-imt",
			"fr-fr": "france-imt",
			"fr-mc": "france-imt",
			"en-hk": "greater-china-imt",
			"ko-kr": "greater-china-imt",
			"zh-cn": "greater-china-imt",
			"zh-tw": "greater-china-imt",
			"en-in": "isa-imt",
			"en-pk": "isa-imt",
			"it-it": "italy-imt",
			"ja-jp": "japan-imt",
			"en-bz": "latin-america-imt",
			"es-ar": "latin-america-imt",
			"es-bz": "latin-america-imt",
			"es-cl": "latin-america-imt",
			"es-co": "latin-america-imt",
			"es-ec": "latin-america-imt",
			"es-mx": "latin-america-imt",
			"es-pe": "latin-america-imt",
			"es-sv": "latin-america-imt",
			"es-uy": "latin-america-imt",
			"es-ve": "latin-america-imt",
			"pt-br": "latin-america-imt",
			"en-ng": "mea-imt",
			"en-za": "mea-imt",
			"da-dk": "nordic-imt",
			"en-dk": "nordic-imt",
			"en-fi": "nordic-imt",
			"en-is": "nordic-imt",
			"en-no": "nordic-imt",
			"en-se": "nordic-imt",
			"fi-fi": "nordic-imt",
			"no-no": "nordic-imt",
			"sv-se": "nordic-imt",
			"en-cy": "spgi-imt",
			"en-gr": "spgi-imt",
			"en-il": "spgi-imt",
			"en-mt": "spgi-imt",
			"en-pt": "spgi-imt",
			"es-es": "spgi-imt",
			"pt-pt": "spgi-imt",
			"en-gb": "uk-imt",
			"en-ie": "uk-imt",
			"en-uk": "uk-imt"
		},
		c = "",
		d = {
			bgColorClass: "",
			buttonColorClass: "",
			color: "blue-60"
		};

	function u() {
		if (!l.contactModule.find("h3")[0] || "" === s.trim(l.contactModule.find("h3").text())) {
			var e = "Considering a Purchase?";
			try {
				switch (c) {
					case "de-de":
						e = "Wir beraten Sie gerne.";
						break;
					case "es-es":
						e = "¿Está considerando la compra?";
						break;
					case "es-sv":
					case "es-mx":
					case "es-cl":
					case "es-co":
					case "es-ar":
					case "es-pe":
					case "es-ve":
					case "es-ec":
					case "es-uy":
					case "es-bz":
					case "es-cr":
					case "es-hn":
						e = "¿Está considerando comprar?";
						break;
					case "fr-ca":
						e = "Achat en vue?";
						break;
					case "fr-fr":
						e = "Vous envisagez un achat ?";
						break;
					case "it-it":
						e = "Stai considerando di fare un acquisto?";
						break;
					case "ja-jp":
						e = "お問い合わせはこちら";
						break;
					case "ko-kr":
						e = "구매를 고려하십니까?";
						break;
					case "pl-pl":
						e = "Myślisz o zakupie?";
						break;
					case "pt-br":
						e = "Pensando em comprar?";
						break;
					case "ru-RU":
						e = "Планируете покупку?";
						break;
					case "tr-tr":
						e = "Satın almayı mı düşünüyorsunuz?";
						break;
					case "zh-cn":
						e = "考虑购买";
						break;
					case "zh-tw":
						e = "詢價"
				}
			} catch (e) {
				window.console.warn("Contact module: Header doesn't exist and page locale default doesn't exist.")
			}
			l.contactModule.find("h3")[0] ? l.contactModule.find("h3").text(e) : l.contactModule.prepend('<h3 class="ibm-autofill">' + e + "</h3>")
		}
		l.contactModule.find(".ibm-icononly .ibm-close-link")[0] || l.contactModule.prepend('<p class="ibm-icononly"><a class="ibm-close-link" href="#">Close</a></p>'), l.contactModule.find("ul:last").addClass("ibm-padding-bottom-0"), l.contactModule.find("h2")[0] && "" !== s.trim(l.contactModule.find("h2").text()) && (a = l.contactModule.find("h2").text()), p("LVADVISOR:CM-TAB-CODE", "conversion", "CM-TAB-INSTALLED", null, null, null), l.cmButton[0] || (l.cmButton = s('<button type="button" class="ibm-btn-pri ' + d.bgColorClass + ' ibm-contact-widget-btn ibm-active" value="">' + a + "</button>").appendTo(i).click(function (e) {
			e.preventDefault(), n.showContactModule(!0)
		})), l.contactCTA.click(function (e) {
			e.preventDefault(), n.showContactModule(!0)
		}), l.contactModule.find(".ibm-close-link").click(function (e) {
			e.preventDefault(), n.showContactModule(!1)
		}), setTimeout(function () {
			l.contactModule.removeClass("ibm-hide")
		}, 1e3), t.common.translations.subscribe("dataready", "contactmodulewidget", m).runAsap(m), o.publish("ready")
	}

	function p(e, t, i, n, o, r) {
		var a = {
			eventCategoryGroup: "LVADVISOR"
		};
		if (a.primaryCategory = e, a.type = t, a.eventName = i, n && (a.eventAction = n), o && (a.eventCallBackCode = o), r && (a.executionPath = r), "undefined" != typeof digitalData && void 0 !== digitalData.page && void 0 !== digitalData.page.isDataLayerReady && !0 === digitalData.page.isDataLayerReady) try {
			ibmStats.event(a)
		} catch (e) {
			window.console.log("Error: " + e)
		} else try {
			s(document).on("datalayer_ready", function (e) {
				ibmStats.event(a)
			})
		} catch (e) {
			window.console.log("Error: " + e)
		}
	}

	function m() {
		l.contactModule.find(".ibm-close-link").html(t.common.translations.data.v18main.misc.close)
	}
	n.autoInit = function () {
		t.common.util.config.isEnabled("contactModuleWidget") && s(n.init)
	}, n.init = function () {
		l.contactModule = s(document.getElementById("ibm-contact-module")), l.contactCTA = s('[data-ibm-contact="contact-link"]'), i = document.getElementById("ibm-content-wrapper") || document.getElementById("ibm-pcon") || document.getElementById("ibm-content-main"), c = t.common.util.meta.getPageLc() + "-" + t.common.util.meta.getPageCc(), e[c] && s(document.documentElement).addClass(e[c]),
			function () {
				var e = t.common.util.config.get("contactModuleWidget.color");
				e && -1 < s.inArray(e, r) && (d.color = e);
				d.bgColorClass = "ibm-contact--bg-" + d.color, d.buttonColorClass = "ibm-btn-" + d.color
			}(), l.contactModule[0] && l.contactModule.children()[0] ? (l.contactModule.addClass("ibm-contact-widget " + d.bgColorClass + " addtransition ibm-hide"), l.contactModule.attr("aria-hidden", "true"), setTimeout(u, 100)) : o.publish("ready")
	}, n.showContactModule = function (e) {
		if (e) {
			l.contactModule.addClass("ibm-active"), l.contactModule.attr("aria-hidden", "false"), l.cmButton.removeClass("ibm-active"), p("LVADVISOR:CM-TAB-CODE", "conversion", "CM-TAB-EXPANDED", null, null, null);
			try {
				"object" == typeof window.Chat_Router && window.Chat_Router.isChatAvailable() && window.Chat_Router.chatAnalytics("conversion", "CM-CHAT", "1", null, null)
			} catch (e) {
				window.console.log("Error: " + e)
			}
		} else l.contactModule.removeClass("ibm-active"), l.contactModule.attr("aria-hidden", "true"), l.cmButton.addClass("ibm-active")
	}, t.common.meta.subscribe("dataReady", "contactmodulewidget", n.autoInit)
}(jQuery, IBMCore),
function (r, a) {
	var e = a.namespace(a, "common.module.footermenu"),
		s = a.common.util.eventCoordinator(e, "footermenu", ["ready"]),
		l = {};
	e.isLoaded = !1, e.autoInit = function () {
		document.getElementById("ibm-footer-module") && r(document.getElementById("ibm-footer-module")).remove(), a.common.util.config.isEnabled("footermenu") && "alternate" !== a.common.util.config.get("footer.type") && "popup" !== a.common.util.config.get("masthead.type") ? e.init() : r(function () {
			s.publish("ready")
		})
	}, e.init = function () {
		var e = "",
			n = a.common.util.has12grid() ? "ibm-fluid" : "ibm-columns",
			o = a.common.util.has12grid() ? "ibm-col-12-12 ibm-col-8-8" : "ibm-col-1-1";
		l = a.common.translations.data.v18main.footerMenu || [], r(function () {
			var t, i;
			l[0] && l[0].links && 0 < l[0].links.length && (t = "", i = a.common.util.has12grid() ? "ibm-col-12-3 ibm-col-8-2" : "ibm-col-4-1", r.each(l, function () {
				var e = "";
				r.each(this.links, function () {
					e += '<li><a href="' + this.url + '">' + this.title + "</a></li>"
				}), t += '<div class="ibm-footermenu-list ' + i + '" aria-label="' + this.title + '"><h3 class="ibm-bold">' + this.title + '</h3><ul class="ibm-plain-list ibm-textcolumns-small-2">' + e + "</ul></div>"
			}), e = t), "" !== e && r(document.getElementById("ibm-footer")).before('<div id="ibm-footer-module"><section role="region" aria-label="Resources"><div class="' + n + ' ibm-word-break" id="ibm-footer-module-links">' + e + '</div><div class="' + n + ' ibm-padding-bottom-0"><div class="' + o + '"><div class="ibm-rule ibm-alternate ibm-nospacing ibm-gray-30"><hr></div></div></div></section></div>'), s.publish("ready")
		})
	}, e.subscribe("ready", "footermenuself", function () {
		e.isLoaded = !0
	}), a.common.translations.subscribe("dataReady", "footermenu", e.autoInit).runAsap(e.autoInit)
}(jQuery, IBMCore),
function (o, r) {
	var e = r.namespace(r, "common.module.footer"),
		a = r.common.util.eventCoordinator(e, "Footer", ["ready"]);
	e.isLoaded = !1, e.autoInit = function () {
		r.common.util.config.isEnabled("footer") ? e.init() : a.publish("ready")
	}, e.init = function () {
		var t, n = '<div class="ibm-footer-corporate-links ibm-word-break-all">' + (t = "", o.each(r.common.translations.data.v18main.footerThin, function () {
			var e = 0 < this.url.indexOf("?lnk") ? "" : "?lnk=flg";
			t += '<li><a href="' + this.url + e + '">' + this.title.htmlspecialchars() + "</a></li>"
		}), '<ul class="ibm-padding-bottom-0 ibm-textcolumns-small-2">' + t + "</ul>") + "</div>" + function () {
			var e = "",
				t = "",
				i = r.common.translations.data.v18main.socialFollow.title || "Follow IBM";
			r.common.util.config.isEnabled("footer.socialLinks") && 0 < r.common.translations.data.v18main.socialFollow.links.length && (o.each(r.common.translations.data.v18main.socialFollow.links, function () {
				t += '<a class="' + (this.linkClass || "ibm-forward-link") + '" href="' + this.url + '" target="_blank">' + this.title.htmlspecialchars() + "</a>"
			}), e = '<div class="ibm-footer-social-links ibm-fright"><div class="ibm-fleft"><p class="ibm-padding-bottom-0">' + i + '</p></div><div><p class="ibm-ind-link ibm-icononly ibm-padding-bottom-0">' + t + "</p></div></div>");
			return e
		}();
		"popup" === r.common.util.config.get("masthead.type") && r.common.util.config.set({
			footer: {
				type: "popup"
			},
			localeselector: {
				enabled: !1
			}
		}), o(function () {
			var e, t, i;
			o(document.getElementById("ibm-footer")).html((e = n, t = r.common.util.has12grid() ? "ibm-fluid" : "ibm-columns", i = r.common.util.has12grid() ? "ibm-col-12-12 ibm-col-8-8" : "ibm-col-1-1", '<div class="' + t + ' ibm-padding-bottom-0"><div class="' + i + '">' + e + "</div></div>")), a.publish("ready")
		})
	}, e.subscribe("ready", "footerself", function () {
		e.isLoaded = !0
	}), r.common.translations.subscribe("dataReady", "Footer", e.autoInit).runAsap(e.autoInit)
}(jQuery, IBMCore),
function (i, e) {
	var t = e.namespace(e, "common.module.leftnav"),
		n = {
			leftnav: {}
		};
	t.autoInit = function () {
		i(function () {
			document.getElementById("ibm-primary-links") && !i(document.getElementById("ibm-primary-links")).hasClass("ibm-widget-processed") && t.init()
		})
	}, t.init = function () {
		n.leftnav = i(document.getElementById("ibm-primary-links")), n.leftnav.find(".ibm-subnav-heading").each(function () {
			var e = i(this).parent(),
				t = e.wrapInner('<div class="ibm-show-hide" data-type="panel">').children("div");
			i(this).wrap("<h2>"), t.children("ul").wrap('<div class="ibm-container-body">'), "true" === e.attr("aria-expanded") && e.find("h2").attr("data-open", !0), t.showhide()
		}), setTimeout(function () {
			e.common.util.a11y.makeTreeAccessible({
				el: n.leftnav
			}), e.common.widget.manager.dispatchInitEvent(n.leftnav[0])
		}, 100)
	}, e.common.meta.subscribe("dataReady", "leftnav", t.autoInit).runAsap(t.autoInit)
}(jQuery, IBMCore),
function (e, t) {
	var i = t.namespace(t, "common.module.liveperson");
	i.autoInit = function () {
		var e = t.common.meta.page.pageInfo.liveperson;
		e && e.enabled && e.routing && "" !== e.routing && i.init()
	}, i.init = function () {
		window.lpEditSkill = window.editskill || t.common.meta.page.pageInfo.liveperson.routing, e(function () {
			e.ajax({
				url: "https://www.ibm.com/common/digitaladvisor/js/router.js",
				dataType: "script",
				cache: !0
			})
		})
	}, t.common.module.contactmodule.subscribe("ready", "liveperson-loader", i.autoInit).runAsap(i.autoInit)
}(jQuery, IBMCore),
function (l, c) {
	var d = c.namespace(c, "common.module.localeselector"),
		u = c.common.util.eventCoordinator(d, "localeselector", ["ready", "error"]),
		p = c.common.util.storage.getItem("v18lsdata") || {},
		m = "",
		e = !1;

	function i() {
		e || ("alternate" !== c.common.util.config.get("footer.type") ? c.common.module.footermenu.subscribe("ready", "localeselect", t).runAsap(t) : c.common.module.footer.subscribe("ready", "localeselect", t).runAsap(t), e = !0)
	}

	function t() {
		var t, i, n;
		n = i = t = "", l.each(p.regionList, function () {
			l.each(this.countryList, function () {
				var e = this.name;
				l.each(this.locale, function () {
					n = this[0].substr(0, 2), "gb" === (i = this[0].substr(3)) && (i = "uk"), t += '<option data-localecode="' + n + "-" + i + '" value="http://www.ibm.com/' + i + "-" + n + '/?lnk=fcc">' + e + " - " + this[1] + "</option>"
				})
			})
		}), m = '<select class="ibm-fullwidth" aria-labelledby="ibm-footer-locale-selector-label">' + t + "</select>", o()
	}

	function o() {
		var o, e, r = l(document.getElementById("ibm-footer-locale-selector")),
			t = l("link[rel='alternate'][hreflang][href]:not([data-exclude='true'])"),
			i = c.common.util.has12grid() ? "ibm-fluid" : "ibm-columns",
			n = c.common.util.has12grid() ? "ibm-col-12-3 ibm-col-medium-12-6 ibm-col-8-2 ibm-col-medium-8-4" : "ibm-col-4-1 ibm-col-medium-4-2",
			a = c.common.util.config.get("localeselector.localVersionsHeading") || c.common.translations.data.v18main.localeSelector.localVersions,
			s = c.common.translations.data.v18main.misc.selectCountry || p.translations.select;
		r[0] ? r.find("select")[0] && r.find("select").select2 && r.find("select").select2("destroy") : "alternate" !== c.common.util.config.get("footer.type") && 0 < c.common.translations.data.v18main.footerMenu[0].links.length ? l('<div class="ibm-footer-locale-columns ' + i + '"><div id="ibm-footer-locale-selector" class="' + n + ' ibm-fright"></div></div>').insertAfter("#ibm-footer-module-links") : (l(document.getElementById("ibm-footer")).addClass("ibm-alternate"), l('<div id="ibm-footer-locale-selector"></div>').insertAfter(".ibm-footer-corporate-links")), r = l(document.getElementById("ibm-footer-locale-selector")).html('<h3 id="ibm-footer-locale-selector-label" class="ibm-bold">' + s + "</h3>" + m).children("select"), (o = r.find("option")).sort(function (e, t) {
			return e.text > t.text ? 1 : e.text < t.text ? -1 : 0
		}), r.html(o).on("change.setCookie", function () {
			var e = d.$el.find(":selected").data("localecode");
			(e = e.split("-")) && c.common.util.setIpcCookie(e[1], e[0])
		}).on("change.defaultAction", function () {
			d.defaultOnchangeAction()
		}), 0 < t.length ? (o = [], t.sort(function (e, t) {
			var i = e.getAttribute("hreflang"),
				n = t.getAttribute("hreflang");
			return i.length - n.length
		}), t.each(function () {
			var e = this.getAttribute("hreflang"),
				t = this.getAttribute("href"),
				i = this.getAttribute("data-label"),
				n = null;
			"en-gb" === e && (e = "en-uk"), n = r.find("option[data-localecode='" + e + "']"), i ? (o.push(l('<option data-localecode="' + e + '" value="' + t + '">' + i + "</option>")), n.remove()) : 5 === e.length ? n[0] && o.push(n.attr("value", t)) : 2 === e.length && r.find("option[data-localecode^='" + e + "']").each(function () {
				o.push(l(this).attr("value", t))
			})
		}), o.sort(function (e, t) {
			return e[0].text > t[0].text ? 1 : e[0].text < t[0].text ? -1 : 0
		}), r.wrapInner('<optgroup label="' + c.common.translations.data.v18main.localeSelector.homepages + '"></optgroup>').prepend(l('<optgroup label="' + a + '"></optgroup>').html(o))) : r.wrapInner('<optgroup label="' + c.common.translations.data.v18main.localeSelector.homepages + '"></optgroup>'), e = r.find("option[data-localecode='" + c.common.util.meta.getPageLc() + "-" + c.common.util.meta.getPageCc() + "']").prop("selected", !0), r.find("optgroup:first").prepend(e), c.common.widget.selectlist.init(r, {
			width: "100%"
		}), d.$el = r, u.publish("ready")
	}
	d.autoInit = function () {
		c.common.util.config.isEnabled("localeselector") && "popup" !== c.common.util.config.get("masthead.type") ? (c.common.util.config.isEnabled("footer") || c.common.util.config.isEnabled("footermenu")) && d.init() : u.publish("ready")
	}, d.init = function () {
		p.translations ? i() : l.ajax({
			url: "https://1.www.s81c.com/common/js/dynamicnav/www/countrylist/usen-utf8.js",
			dataType: "script",
			cache: !0
		}).fail(function (e) {
			window.console.error("v18: Error while loading locale selector data file", e), u.publish("error")
		})
	}, d.dataCallback = function (e) {
		var t = IBMCore.www.module.truste.getUiAllowedStorageTtl(86400);
		p = e, c.common.util.data.provide("localeSelector", e), c.common.util.storage.setItem("v18lsdata", p, t), i()
	}, d.setupLocaleSelector = o, d.defaultOnchangeAction = function () {
		var e = {
			ibmEV: "widget",
			ibmEvAction: "locale selector",
			ibmEvGroup: c.common.util.meta.getPageLc() + "-" + c.common.util.meta.getPageCc(),
			ibmEvModule: d.$el.find(":selected").data("localecode"),
			ibmEvLinkTitle: d.$el.find(":selected").text(),
			ibmEvLinkTarget: d.$el.find(":selected").val()
		};
		"" !== this.value && (c.common.util.statshelper.fireEvent(e), setTimeout(function () {
			window.location.href = d.$el.val()
		}, 150))
	}, window.ibmweb = window.ibmweb || {}, c.namespace(window.ibmweb, "dynnav.localeselector.dataCallback"), window.ibmweb.dynnav.localeselector.dataCallback = d.dataCallback, c.common.meta.subscribe("dataReady", "localeselector", d.autoInit).runAsap(d.autoInit), d.subscribe("ready", "self", function () {})
}(jQuery, IBMCore),
function (a, i) {
	var o = i.namespace(i, "common.module.masthead"),
		t = i.common.util.eventCoordinator(o, "masthead", ["ready", "profileMenuReady", "profileMenuUpdated"]),
		r = {
			body: {},
			masthead: {}
		},
		e = {
			mainLinks: null
		},
		n = {
			mainLinks: {
				$el: null,
				html: ""
			},
			iconsonly: {
				$el: null,
				html: ""
			},
			imagesloaded: {}
		},
		s = "",
		l = {
			default: "full",
			alternate: "minimal",
			mobile: "mobile",
			popup: "popup"
		},
		c = {
			$closeButtonLink: null,
			$el: null,
			$sectionShowing: null,
			isopen: !1,
			$panelShowing: null
		},
		d = {
			megamenus: [],
			dropdownmenus: []
		},
		u = null,
		p = {};

	function m() {
		n.iconsonly.$el.append(n.iconsonly.html), u = n.iconsonly.$el.find(".ibm-masthead-item-signin")
	}

	function h() {
		var e = "",
			t = a(document.getElementById("ibm-search")).removeClass("ibm-btn-search").addClass("ibm-search-link");
		a.each(t[0].attributes, function () {
			e += " " + this.name + '="' + this.value + '"'
		}), t.replaceWith('<button role="button"' + e + '><span class="ibm-access">' + t[0].value + "</span></button>")
	}

	function f(e) {
		var i = "";
		return a.each(e, function () {
			var e = this.id && "" !== this.id ? ' data-linktype="' + this.id + '"' : "",
				t = !0 !== this.newWindow ? "" : ' target="_blank"';
			this.title && (i += '<li role="presentation"' + e + '><a role="menuitem" href="' + this.url.replace("{{window.location}}", encodeURIComponent(window.location.href)) + '"' + t + ">" + this.title + "</a></li>")
		}), i
	}

	function g() {
		n.iconsonly.$el || (n.iconsonly.$el = a('<div class="ibm-masthead-rightside"></div>').prepend(a(document.getElementById("ibm-search-module"))).insertAfter(document.getElementById("ibm-menu-links")))
	}

	function v() {
		n.iconsonly.$el.removeClass("signedin hasinitials"), u.children("button").removeAttr("style aria-label").html("")
	}

	function b(e) {
		var t = a(document.getElementsByClassName("ibm-notification-count")[0]),
			i = a(document.getElementsByClassName("ibm-masthead-item-signin")[0]).find("li[data-linktype='notifications'] a");
		0 < e ? (t[0] || (t = a('<div class="ibm-notification-count"></div>').appendTo(".ibm-masthead-item-signin")), t.html(e), i[0] && (i.children("span")[0] || i.append("<span></span>"), i.children("span").html(" (" + e + ")"))) : t.remove()
	}

	function y(e) {
		v(), n.iconsonly.$el.addClass("signedin"), u.children("button").html(e.linkContents).attr("aria-label", e.linkAlt), "image" === e.type && e.backgroundImage && "" !== e.backgroundImage && (n.iconsonly.$el.addClass("hasinitials"), u.children("button").html("").css({
			"background-image": "url(" + e.backgroundImage + ")",
			"background-size": "cover"
		})), "text" === e.type && "" !== e.linkContents && n.iconsonly.$el.addClass("hasinitials")
	}

	function w() {
		var e = {
			linkContents: "",
			linkAlt: p.misc.welcomeback,
			backgroundImage: i.common.util.user.getInfo().imageUrl,
			type: "default"
		};
		i.common.util.user.getInfo().imageUrl && "" !== i.common.util.user.getInfo().imageUrl || (e.backgroundImage = ""), y(e)
	}

	function k() {
		var e = f(p.profileMenu.signedin);
		"" !== e && (u && u.children("ul")[0] || i.common.util.debug.add("log", "Waiting for profile menu to be ready"), i.common.util.queue.push(function () {
			return u && u.children("ul")[0]
		}, function () {
			i.common.util.debug.add("log", "Profile menu now exists, changing to 'signed in' menu"), u.children("ul").html(e), b(i.common.util.user.getInfo().newNotificationCount), t.publish("profileMenuUpdated")
		}))
	}

	function C() {
		T(!1), x(n.mainLinks.$el.find("li.ibm-active a"), !1)
	}

	function x(e, t) {
		t ? e.parent().addClass("ibm-active") : e.parent().removeClass("ibm-active")
	}

	function T(e) {
		e ? (r.body.addClass("ibm-masthead-megamenu-showing"), c.isopen = !0) : (r.body.removeClass("ibm-masthead-megamenu-showing"), c.isopen = !1, setTimeout(function () {
			!c.isopen && c.$sectionShowing && (c.$sectionShowing.removeClass("ibm-showing"), c.$sectionShowing = null, c.$panelShowing && (c.$panelShowing.removeClass("ibm-showing"), c.$panelShowing = null))
		}, 3e3))
	}

	function S(e) {
		e && (c.$panelShowing && c.$panelShowing.removeClass("ibm-showing"), c.$panelShowing = a(document.getElementById(e)).addClass("ibm-showing"))
	}

	function E(e) {
		c.$sectionShowing && c.$sectionShowing.removeClass("ibm-showing"), c.$panelShowing && c.$panelShowing.removeClass("ibm-showing"), c.$sectionShowing = a(".ibm-megamenu-section[data-linkid='" + e + "']").addClass("ibm-showing"), S(c.$sectionShowing.find(".ibm-megapanel:first")[0].id), c.$sectionShowing.find(".ibm-megapaneltrigs li.ibm-active").removeClass("ibm-active"), c.$sectionShowing.find(".ibm-megapaneltrigs a[data-panelid='" + e + "-mp0']").parent().addClass("ibm-active")
	}

	function $(e) {
		i.common.util.statshelper.fireEvent({
			ibmEV: "masthead",
			ibmEvAction: "hover",
			ibmEvGroup: e.id,
			ibmEvLinkTitle: e.title,
			ibmEvSection: e.type
		})
	}

	function I() {
		var e = 0;
		a(document.getElementById("ibm-universal-nav")).addClass("getWidth").find("#ibm-home, .ibm-masthead-categories, .ibm-masthead-rightside, .ibm-parent-site-name").each(function () {
			e += a(this).outerWidth(!0)
		}).end().removeClass("getWidth"), document.getElementById("ibm-masthead-hidelinks") || a("head").append('<style id="ibm-masthead-hidelinks"></style>'), document.getElementById("ibm-masthead-hidelinks").innerHTML = "@media screen and (max-width: " + (e + 50) + "px) { .ibm-masthead-categories,#ibm-megamenu-sections{display:none} }"
	}

	function A() {
		var e = !1;
		_(), a(window).on("resize", function () {
			e = !0
		}), setInterval(function () {
			e && (e = !1, _())
		}, 100)
	}

	function _() {
		"maximized" !== i.common.module.mastheadsearch.getDisplayState() && (a(window).width() < 580 ? i.common.module.mastheadsearch.showAs("minimized") : i.common.module.mastheadsearch.showAs("default"))
	}
	o.isLoaded = !1, o.autoInit = function () {
		i.common.util.config.isEnabled("masthead") && o.init()
	}, o.init = function () {
		s = i.common.util.config.get("masthead.type"), s = l[s], p = i.common.translations.data.v18main, window.mhcustomtest && (p = window.mhcustomtest), e.mainLinks = p.mastheadNav, n.mainLinks.html = function () {
			var o = "";
			0 < e.mainLinks.links.length && (a.each(e.mainLinks.links, function (e) {
				var t = this.hasMenu ? " ibm-hasmenu" : "",
					i = "" !== t ? ' class="ibm-chevron-down-link ibm-icon-after"' : "",
					n = this.hasMegapanel ? "megamenu" : this.hasMenu ? "dropdown" : "none";
				o += '<li role="presentation" class="ibm-mh-mainitem' + t + '"><a role="button" href="' + this.url + '" id="mhitem-mms' + e + '" data-linkid="mms' + e + '"' + i + ' data-menutype="' + n + '">' + this.title.htmlspecialchars() + "</a></li>", "megamenu" === n ? d.megamenus.push({
					id: "mms" + e,
					data: this
				}) : "dropdown" === n && d.dropdownmenus.push({
					id: "mms" + e,
					data: this
				})
			}), o = '<ul aria-label="' + p.unav.title + '" role="toolbar" class="ibm-masthead-categories">' + o + "</ul>");
			return o
		}(), n.iconsonly.html = function () {
			var e = "";
			(i.common.util.config.isEnabled("masthead.profile") && 0 < p.profileMenu.signedout.length || i.common.util.config.isEnabled("masthead.profileAlways")) && (e += '<li role="presentation" class="ibm-masthead-item-signin"><button role="button" aria-haspopup="true" aria-owns="ibm-signin-minimenu-container" class="ibm-profile-link">' + (p.profileMenu.signedout[0] ? p.profileMenu.signedout[0].title : "") + "</button></li>");
			i.common.util.config.isEnabled("masthead.mobilemenu") && (e += '<li role="presentation" class="ibm-masthead-item-menu"><button role="button" aria-haspopup="true" aria-owns="ibm-burger-menu-container" class="ibm-menu-link">' + p.misc.sitenav + "</button></li>");
			"" !== e && (e = '<ul aria-label="Tools" role="menubar" class="ibm-masthead-iconsonly">' + e + "</ul>");
			return e
		}(), n.mainLinks.burgerMenuHtml = function (e) {
			var o = "";

			function r(e) {
				for (var t = 0, i = "", n = ""; t < e.length; t++) n = "" !== e[t].url ? e[t].url : e[t].megapanelContent.headingUrl, i += '<li><a href="' + n + '">' + e[t].title + "</a></li>";
				return i
			}
			0 < e.length && (a.each(e, function () {
				var e, t = "",
					i = "",
					n = 0;
				if (this.menuSections && 0 < this.menuSections.length)
					for (; n < this.menuSections.length; n++) i += r(this.menuSections[n].menuItems);
				else this.menuItems && 0 < this.menuItems.length && (i += r(this.menuItems));
				t = "" !== i ? (e = i, '<div data-widget="showhide" data-type="panel" class="ibm-show-hide"><h2>' + this.title.htmlspecialchars() + '</h2><div class="ibm-container-body"><ul>' + e + "</ul></div></div>") : '<a href="' + this.url + '">' + this.title.htmlspecialchars() + "</a>", o += "<li>" + t + "</li>"
			}), o = '<ul class="ibm-mobilemenu-mhlinks" aria-label="' + p.unav.title + '">' + o + "</ul>");
			return o
		}(e.mainLinks.links), a(function () {
			if (IBMPerformance.mark("V18-masthead-begin"), a("#ibm-megamenu-sections, .ibm-masthead-categories, .ibm-masthead-iconsonly").remove(), r.body = a(document.body), r.masthead = a(document.getElementById("ibm-masthead")), "popup" === s) r.masthead.addClass("ibm-mhtype-popup"), i.common.util.config.set({
				masthead: {
					megamenu: {
						enabled: !1
					},
					mobilemenu: {
						enabled: !1
					},
					profile: {
						enabled: !1
					},
					search: {
						enabled: !1
					},
					sticky: {
						enabled: !1
					}
				}
			});
			else if ("minimal" === s) r.masthead.addClass("ibm-mhtype-minimal"), g(), m(), i.common.util.config.isEnabled("masthead.search") && (h(), document.getElementById("ibm-search-form").setAttribute("aria-labelledby", "ibm-masthead")), I(), A();
			else {
				if ("full" !== s) return;
				r.masthead.addClass("ibm-mhtype-full"), n.mainLinks.$el = a(n.mainLinks.html).insertBefore("#ibm-menu-links"), g(), m(), i.common.util.config.isEnabled("masthead.search") && (h(), document.getElementById("ibm-search-form").setAttribute("aria-labelledby", "ibm-masthead")), a.browser.safari ? setTimeout(function () {
					I()
				}, 200) : I(), A(), setTimeout(function () {
					var e;
					i.common.util.config.isEnabled("masthead.megamenu") && (! function () {
						var e = "",
							t = 0;
						a.each(d.megamenus, function () {
							var m, h, f;
							e += (m = this, f = h = "", a.each(m.data.menuSections, function () {
								var e, t;
								h += ((t = "") !== (e = this).heading && (t = '<li role="presentation" class="ibm-mm-sec-heading ibm-bold">' + e.heading + "</li>"), t), a.each(this.menuItems, function (e) {
									var t, i, n, o, r, a, s, l, c, d = this,
										u = !(!d.megapanelContent || "" === d.megapanelContent.headingTitle),
										p = u ? m.id + "-mp" + e : "";
									h += (n = "" !== (i = p) ? ' data-panelid="' + i + '"' : "", '<li role="presentation"><a class="ibm-light ibm-h4' + ("" !== i ? " ibm-arrow-forward-link" : "") + '" href="' + (t = d).url + '"' + n + ">" + t.title + "</a></li>"), u && (f += '<div class="ibm-megapanel" id="' + p + '"><h3 class="ibm-light ibm-h1 ibm-medium ibm-padding-bottom-1"><a href="' + d.megapanelContent.headingUrl + '">' + d.megapanelContent.headingTitle + '</a></h3><div class="ibm-columns"><div class="ibm-col-6-2">' + (a = d.megapanelContent, s = "", l = "<p>" + a.quickLinks.title + "</p>", c = '<ul class="ibm-plain-list ibm-mh-quicklinks">' + function (e) {
										for (var t = "", i = 0; i < e.length; i++) t += '<li><a class="ibm-h4 ibm-light" href="' + e[i].url + '">' + e[i].title + "</a></li>";
										return t
									}(a.quickLinks.links) + "</ul>", a.description && "" !== a.description && (s = '<p class="ibm-h4 ibm-light">' + a.description + "</p>"), "{descr}{qlTitle}{quickLinks}".replace("{descr}", s).replace("{qlTitle}", l).replace("{quickLinks}", c)) + '</div><div class="ibm-col-6-2">' + (o = d.megapanelContent, r = "" !== o.feature.imageUrl ? '<p><img data-src="' + o.feature.imageUrl.replace("http:", "https:") + '" width="300" height="150" alt="" class="ibm-resize"></p>' : "", '<p class="ibm-bold">' + o.feature.heading + "</p>" + r + '<p class="ibm-linkcolor-default"><a href="' + o.feature.linkUrl + '">' + o.feature.linkTitle + "</a></p>") + "</div></div></div>")
								})
							}), '<div role="dialog" aria-labelledby="mhitem-' + m.id + '" class="ibm-megamenu-section" data-linkid="' + m.id + '"><div id="' + m.id + '" class="ibm-columns"><div class="ibm-col-6-2 ibm-background-neutral-white-30 ibm-megapaneltrigs"><ul class="ibm-dropdown-menu ibm-background-neutral-white-30">' + h + '</ul></div><div class="ibm-col-6-4 ibm-background-white-core">' + f + "</div></div></div>")
						}), document.getElementById("ibm-megamenu-sections") && a(document.getElementById("ibm-megamenu-sections")).remove();
						c.$el = a('<div id="ibm-megamenu-sections" class="ibm-hidden-small">' + e + '<div class="ibm-megamenu-close-container"><p class="ibm-icononly ibm-ind-link ibm-nospacing"><a class="ibm-chevron-up-link ibm-nospacing" href="#close">' + i.common.translations.data.v18main.misc.close + "</a></p></div></div>").insertAfter("#ibm-universal-nav"), c.$closeButtonLink = c.$el.find(".ibm-megamenu-close-container a"), a(document.getElementById("ibm-megamenu-sections")).addClass("getheight").find(".ibm-megapanel, .ibm-megapaneltrigs").each(function () {
							var e = a(this).height();
							t < e && (t = e)
						}).end().removeClass("getheight"), i.common.util.addCssRule(".ibm-megamenu-section, #ibm-megamenu-sections", {
							height: t + 30 + "px"
						})
					}(), a.each(d.dropdownmenus, function () {
						var e, t, i, n;
						e = this, t = r.masthead.find("[data-linkid='" + e.id + "']"), n = i = "", a.each(e.data.menuSections, function () {
							i = function (e) {
								for (var t = "", i = 0; i < e.length; i++) t += '<li><a href="' + e[i].url + '">' + e[i].title + "</a></li>";
								return t
							}(this.menuItems)
						}), n = '<ul class="ibm-dropdown-menu">' + i + "</ul>", t.removeAttr("href"), t.after(n)
					}), e = null, n.mainLinks.$el.hoverIntent(function () {
						var e = this.getAttribute("data-menutype"),
							t = this.getAttribute("data-linkid");
						C(), "dropdown" === e ? x(a(this), !0) : "megamenu" === e && (n.imagesloaded[t] || (a(".ibm-megamenu-section[data-linkid='" + t + "']").find("img[data-src]").each(function () {
							a(this).attr("src", a(this).data("src"))
						}), n.imagesloaded[t] = !0), E(t), T(!0), x(a(this), !0)), $({
							id: t,
							title: this.innerHTML,
							type: e
						})
					}, function () {}, ">li>a").on("click keydown", ">li>a", function (e) {
						var t = this.getAttribute("data-menutype"),
							i = this.getAttribute("data-linkid");
						"keydown" === e.type && 13 !== e.keyCode || (C(), "dropdown" === t ? (e.preventDefault(), x(a(this), !0), a(this).next("ul").find("a:first").focus()) : "megamenu" === t && (e.preventDefault(), E(i), T(!0), c.$sectionShowing.find("a:first").focus()))
					}), n.mainLinks.$el.children("li").add(c.$el).hover(function () {
						clearTimeout(e)
					}, function () {
						clearTimeout(null), e = setTimeout(function () {
							C()
						}, 400)
					}), c.$closeButtonLink.click(function (e) {
						e.preventDefault(), T(!1), n.mainLinks.$el.find("a[tabindex='0']").focus()
					}), c.$el.on("keydown", function (e) {
						var t = "";
						9 !== e.keyCode || e.shiftKey ? 9 === e.keyCode && e.shiftKey ? a(e.target).is(c.$sectionShowing.find("a:first")) ? t = c.$closeButtonLink : a(e.target).is(c.$closeButtonLink) && (t = c.$panelShowing.find("a:last")) : 27 === e.keyCode && (T(!1), n.mainLinks.$el.find("a[tabindex='0']").focus()) : a(e.target).is(c.$sectionShowing.find("a:last")) ? t = c.$closeButtonLink : a(e.target).is(c.$closeButtonLink) && (t = c.$sectionShowing.find("a:first")), "" !== t && (e.preventDefault(), t.focus())
					}), a(document.getElementsByClassName("ibm-megapaneltrigs")).hoverIntent(function () {
						S(this.getAttribute("data-panelid")), x(a(document.getElementsByClassName("ibm-megapaneltrigs")).find("a"), !1), x(a(this), !0), a(document.getElementsByClassName("ibm-megapaneltrigs")).find("a").blur(), $({
							id: this.getAttribute("data-panelid"),
							url: this.getAttribute("href"),
							title: this.innerHTML,
							type: "megapanel trigger"
						})
					}, function () {}, "a").on("click", "a", function (e) {
						this.getAttribute("data-panelid") && (e.preventDefault(), S(this.getAttribute("data-panelid")), x(a(document.getElementsByClassName("ibm-megapaneltrigs")).find("a"), !1), x(a(this), !0))
					}), i.common.util.a11y.makeToolbarAccessible({
						el: r.masthead.find(".ibm-masthead-categories")[0],
						keydown: function (e, t) {
							if (null === e.getAttribute("data-menutype")) {
								var i = null;
								switch (t.originalEvent.keyCode) {
									case 9:
										C(), a(e).closest(".ibm-mh-mainitem").children("a").attr("tabindex", "0"), t.originalEvent.shiftKey && (a(e).closest(".ibm-mh-mainitem").prev().children("a").focus().attr("tabindex", "-1"), a(e).closest(".ibm-mh-mainitem").children("a").attr("tabindex", "0"));
										break;
									case 37:
										a(e).closest(".ibm-mh-mainitem").prev().children("a").focus(), C();
										break;
									case 38:
										i = a(e).parent().prev().children("a")[0] || a(e).closest("ul").find("a:eq(-1)");
										break;
									case 39:
										a(e).closest(".ibm-mh-mainitem").next().children("a").focus(), C();
										break;
									case 40:
										i = a(e).parent().next().children("a")[0] || a(e).closest("ul").find("a:eq(0)")
								}
								null !== i && a(i).focus()
							}
						}
					}))
				}, 50)
			}
			a(document.getElementById("ibm-menu-links")).addClass("ibm-hide"), setTimeout(function () {
				var n;
				i.common.util.config.isEnabled("masthead.mobilemenu") && a(document.getElementsByClassName("ibm-masthead-iconsonly")).find(".ibm-masthead-item-menu button").click(function (e) {
					e.preventDefault(), i.common.module.mobilemenu.toggle()
				}), a(document.getElementById("ibm-home")).find("a")[0].href += "?lnk=m", i.common.util.config.isEnabled("masthead.profile") && (! function () {
					var e = f(p.profileMenu.signedout);
					if ("" === e && !i.common.util.config.isEnabled("masthead.profileAlways")) return;
					if (u.append('<ul id="ibm-signin-minimenu-container" role="menu" aria-label="Profile" class="ibm-dropdown-menu">' + e + "</ul>"), o.subscribe("profileMenuReady", "self", function () {}), !i.common.util.config.isEnabled("greeting")) return t.publish("profileMenuReady");
					o.subscribe("profileMenuUpdated", "self", function () {
						t.publish("profileMenuReady")
					}), i.common.util.user.subscribe("userIBMDataReady", "masthead", function () {
						i.common.util.user.getInfo().signedin ? (i.common.util.debug.add("log", "User is signed in - Waited for IBMid WSR"), w(), k()) : t.publish("profileMenuReady")
					}).runAsap(function () {
						i.common.util.user.getInfo().signedin ? (i.common.util.debug.add("log", "User is signed in - IBMid WSR already done"), w(), k()) : t.publish("profileMenuReady")
					})
				}(), function () {
					var t = !1;
					if (!u[0]) return;
					u.children("button").click(function (e) {
						e.preventDefault(), u.hasClass("ibm-active") ? o.hideProfileMenu() : (o.showProfileMenu(), u.find("li:eq(0) a").focus(), t || (r.body.on("click", function () {
							o.hideProfileMenu()
						}), t = !0))
					}), u.hoverIntent(function () {
						o.showProfileMenu()
					}, function () {}).on("click", function (e) {
						e.stopPropagation()
					}), u.hoverIntent({
						over: function () {},
						out: function () {
							o.hideProfileMenu()
						},
						timeout: 300
					})
				}(), 0 < (n = r.masthead.find(".ibm-masthead-iconsonly")).children("li").length && i.common.util.a11y.makeToolbarAccessible({
					el: n[0],
					keydown: function (e, t) {
						var i = null;
						switch (t.originalEvent.keyCode) {
							case 9:
								o.hideProfileMenu();
								break;
							case 27:
								i = n.find("li.ibm-active button").focus(), o.hideProfileMenu();
								break;
							case 38:
								i = a(e).parent().prev().children("a")[0] || a(e).closest("ul").find("a:eq(-1)");
								break;
							case 40:
								i = a(e).parent().next().children("a")[0] || a(e).closest("ul").find("a:eq(0)")
						}
						null !== i && a(i).focus()
					}
				}))
			}, 50), IBMPerformance.mark("V18-masthead-end"), IBMPerformance.measure("V18-masthead-load", "V18-masthead-begin", "V18-masthead-end"), o.isLoaded = !0, t.publish("ready")
		})
	}, o.editProfileMenu = function (e) {
		"replace" === e.action ? a(document.getElementById("ibm-signin-minimenu-container")).html(f(e.links)) : "prepend" === e.action ? a(document.getElementById("ibm-signin-minimenu-container")).prepend(f(e.links)) : "append" === e.action ? a(document.getElementById("ibm-signin-minimenu-container")).append(f(e.links)) : "replaceLinkUrl" === e.action && a(document.getElementById("ibm-signin-minimenu-container")).find("li[data-linktype='" + e.linktype + "'] a").attr("href", e.linkurl)
	}, o.showNotificationCount = b, o.showProfileLinkAnonymous = function (e) {
		v(), b(0), u.children("button").html(e.linkContents).attr("aria-label", e.linkAlt)
	}, o.showProfileLinkContents = function () {
		n.iconsonly.$el.addClass("hasinitials")
	}, o.showProfileLinkSignedin = y, o.showProfileMenu = function () {
		u.addClass("ibm-active")
	}, o.hideProfileMenu = function () {
		u.removeClass("ibm-active")
	}, o.showMegamenu = T, o.showMegamenuPanel = S, o.showMegamenuSection = E, o.getMastheadLinklists = function () {
		return n
	}, o.setMastheadWidthUsed = I, i.common.translations.subscribe("dataReady", "Masthead", o.autoInit).runAsap(o.autoInit), o.subscribe("ready", "dyncss", function () {
		i.common.util.addCssRule("#ibm-com.ibm-no-scroll #ibm-universal-nav .ibm-masthead-iconsonly", {
			"margin-right": parseInt(a(document.getElementById("ibm-universal-nav")).find(".ibm-masthead-iconsonly").css("margin-right"), 10) + i.common.util.getScrollbarWidth() + "px"
		})
	})
}(jQuery, IBMCore),
function (c, s) {
	var e = s.namespace(s, "common.module.mastheadbanner"),
		t = "v18mastheadbanner";

	function i(e) {
		var t, i, n, o = s.common.util.meta.getPageLc(),
			r = s.common.util.meta.getPageCc(),
			a = o + "-" + r;
		e.thinkBanner && e.thinkBanner.active && -1 === e.thinkBanner.blacklist.indexOf(location.pathname) && (i = e.thinkBanner.blacklistWildcard || [], n = !1, i.forEach(function (e) {
			-1 !== location.pathname.indexOf(e) && (n = !0)
		}), !n) && -1 === e.thinkBanner.blacklistCountry.indexOf(r) && e.thinkBanner.content[o] && 0 === c("#think-banner-container").length ? function (e, t) {
			var i = new Date(t).getTime(),
				n = (new Date).getTime(),
				o = i - n,
				r = Math.ceil(o / 864e5);
			r <= 0 && (r = "");
			var a = "" === r ? e.bannerTextLive1 : e.bannerTextLine1,
				s = "" === r ? e.bannerTextLive2 : e.bannerTextLine2;
			"" !== s && (s = "<br/>" + s);
			var l = "" === r ? e.ctaLabelLive : e.ctaLabel;
			c("body").prepend('<div id="think-banner-container"><a id="think-banner-link" class="ibm-blocklink ibm-alternate-background" href="' + e.ctaUrl + '"><div id="think-banner-content"><div class="ibm-columns ibm-padding-bottom-0"><div id="think-banner-desktop"><div class="video-background"><video autoplay muted><source type="video/mp4" src="' + e.videoUrl + '" /></video></div><div class="flex align-center think-counter__container"><div class="think-counter">' + r + '</div><div><span class="ibm-bold ibm-h4-small counter-text">' + a + s + '</span></div></div><div class="cta"><span class="cta__text">' + l + '</span></div></div><div id="think-banner-mobile"><div class="flex align-center space-between"><div class="flex align-center space-between"><div class="flex align-center"><div class="think-counter">' + r + '</div><div><span class="ibm-bold ibm-h4-small counter-text">' + a + s + '</span></div></div><span class="forward-icon"></span></div></div></div></div></div></a></div>')
		}(e.thinkBanner.content[o], e.thinkBanner.countdownDate) : e.bannerActive && -1 !== e.whitelist.indexOf(location.pathname) && e.content[a] && 0 === c("#masthead-banner").length && (t = e.content[a], c("body").prepend('<a id="masthead-banner" class="ibm-blocklink" href="' + t.ctaURL + '"><div id="masthead-banner-content"><div id="masthead-banner-desktop"><div class="masthead-banner--flex masthead-banner--align-center"><img class="masthead-banner__icon" src="' + t.iconUrl + '" /><span class="ibm-bold ibm-h4-small">' + t.bannerText + '</span></div><div class="cta"><span class="cta__text">' + t.ctaLabel + '</span></div></div>\x3c!-- Mobile banner --\x3e<div id="masthead-banner-mobile"><div class="masthead-banner--flex masthead-banner--align-center"><img class="masthead-banner__icon" src="' + t.iconUrl + '" /><span class="ibm-bold" style="word-wrap: break-word;">' + t.bannerTextMobile + '</span><span class="forward-icon"></span></div></div>\x3c!-- Mobile banner --\x3e</div></a>'))
	}
	e.autoInit = function () {
		var e;
		(e = JSON.parse(sessionStorage.getItem(t))) ? i(e): c.getJSON("https://www.ibm.com/common/v18/mastheadbanner/masthead-banner.json", function (e) {
			sessionStorage.setItem(t, JSON.stringify(e)), i(e)
		})
	}, s.common.meta.subscribe("dataReady", "mastheadbanner", e.autoInit).runAsap(e.autoInit)
}(jQuery, IBMCore),
function (e, t) {
	var i = t.namespace(t, "common.module.masthead.sticky"),
		n = {
			sticky: "ibm-masthead-sticky",
			stickyShowing: "ibm-masthead-sticky-showing",
			enableTransition: "hastransition"
		},
		o = 0,
		r = 120,
		a = !1,
		s = {
			masthead: {},
			body: {},
			mhPlaceholder: {}
		},
		l = 0,
		c = "";

	function d(e) {
		s.mhPlaceholder[e ? "removeClass" : "addClass"]("ibm-hide")
	}
	i.autoInit = function () {
		t.common.util.config.isEnabled("masthead") && t.common.module.masthead.subscribe("ready", "mastheadsticky", function () {
			t.common.util.config.isEnabled("masthead.sticky") && setTimeout(i.init, 20)
		})
	}, i.init = function () {
		s.body = e(document.body), s.masthead = e(document.getElementById("ibm-masthead")), e(window).scroll(function () {
			a = !0
		}), setInterval(function () {
			a ? (a = !1, function () {
				0 === (o = e(this).scrollTop()) ? (s.masthead.removeClass(n.enableTransition), s.body.removeClass(n.sticky + " " + n.stickyShowing), d(!1)) : Math.abs(l - o) >= r && (l < o ? "down" !== c && (c = "down", s.body.addClass(n.sticky).removeClass(n.stickyShowing), d(!0), setTimeout(function () {
					s.masthead.addClass(n.enableTransition)
				}, 200)) : "up" !== c && (c = "up", s.masthead.addClass(n.enableTransition), s.body.addClass(n.sticky + " " + n.stickyShowing), d(!0)), l = o)
			}()) : "down" === c && (l = e(this).scrollTop())
		}, 100), document.getElementsByClassName("ibm-mhplaceholder")[0] || (s.mhPlaceholder = e('<div class="ibm-hide ibm-mhplaceholder"></div>').insertAfter("#ibm-masthead"))
	}, t.common.meta.subscribe("dataReady", "mastheadsticky", i.autoInit).runAsap(i.autoInit)
}(jQuery, IBMCore),
function (n, i) {
	var o, r = i.namespace(i, "common.module.mastheadsearch"),
		e = i.common.util.eventCoordinator(r, "Mastheadsearch", ["ready"]),
		a = 50,
		t = "default",
		s = {
			body: {},
			inputField: {},
			searchScope: {},
			searchButton: {},
			searchCloseButton: {},
			searchForm: {},
			searchModule: {},
			typeaheadContainer: {},
			typeaheadUl: {}
		},
		l = "",
		c = !1,
		d = 0,
		u = !1;

	function p() {
		0 < s.typeaheadUl.length && s.typeaheadUl.empty()
	}

	function m() {
		return t
	}

	function h(e) {
		var t = s.inputField[0].value;
		(t !== l || e) && ("" !== (l = t) ? !c && s.searchScope.find(":checkbox").prop("checked") && r.customTypeaheadFunction ? r.customTypeaheadFunction(t) : c && s.searchScope.find(":checkbox").prop("checked") ? r.makeTypeaheadRequest(function () {
			n.ajax({
				url: "https://www.ibm.com/marketplace/api/search/v3/combined_suggestions?locale=" + i.common.util.meta.getPageLc() + "-" + i.common.util.meta.getPageCc() + "&q=" + t,
				dataType: "json",
				searchString: t,
				requestCount: ++d,
				success: function (e) {
					if (d === this.requestCount) {
						var t = [],
							i = 0,
							n = e["phrase-suggestions"].options,
							o = e["product-suggestions"].results.items;
						if (0 < n.length)
							for (i = 0; i < n.length; i++) t.push(n[i].text);
						if (0 < o.length)
							for (i = 0; i < o.length; i++) t.push(o[i].fields["doc.name"][0]);
						r.createTypeahead(this.searchString, t)
					}
				},
				error: function (e) {
					window.console.error("Error calling typeahead service: ", e)
				}
			})
		}) : r.makeTypeaheadRequest(function () {
			n.ajax({
				url: "https://www-api.ibm.com/search/typeahead/v1?lang=" + i.common.util.meta.getPageLc() + "&cc=" + i.common.util.meta.getPageCc() + "&query=" + t,
				dataType: "jsonp",
				searchString: t,
				requestCount: ++d,
				success: function (e) {
					if (d === this.requestCount) {
						for (var t = [], i = 0, n = e.response.length; i < n; i++) t.push(e.response[i][0]);
						r.createTypeahead(this.searchString, t)
					}
				},
				error: function (e) {
					window.console.error("Error calling typeahead service: ", e)
				}
			})
		}) : r.makeTypeaheadRequest(function () {
			p(), b(!1)
		}, a + 10))
	}

	function f() {
		s.inputField.attr("aria-activedescendant", s.typeaheadUl.find("li.ibm-active").attr("id")), s.inputField.val(s.typeaheadUl.find("li.ibm-active").text())
	}

	function g(e) {
		e ? "default" === m() && n(".ibm-masthead-categories, .ibm-mh-marketplace-link").addClass("ibm-fadein").removeClass("ibm-fadeout") : n(".ibm-masthead-categories, .ibm-mh-marketplace-link").addClass("ibm-fadeout").removeClass("ibm-fadein")
	}

	function v(e) {
		"default" === e ? (n(document.body).removeClass("ibm-masthead-search-minimized ibm-masthead-search-maximized"), t = "default") : "minimized" === e ? (n(document.body).addClass("ibm-masthead-search-minimized").removeClass("ibm-masthead-search-maximized"), i.common.util.freezeScrollbars(!1), t = "minimized") : "maximized" === e && (n(document.body).removeClass("ibm-masthead-search-minimized").addClass("ibm-masthead-search-maximized"), i.common.util.freezeScrollbars(!0), t = "maximized")
	}

	function b(e) {
		u = e ? (s.typeaheadContainer.add(s.searchScope).addClass("ibm-fadein").removeClass("ibm-fadeout").attr("aria-expanded", !0), s.inputField.attr("aria-expanded", !0), !0) : (s.typeaheadContainer.add(s.searchScope).addClass("ibm-fadeout").removeClass("ibm-fadein").attr("aria-expanded", !0), s.inputField.attr("aria-expanded", !1), !1)
	}
	r.isLoaded = !1, r.autoInit = function () {
		i.common.util.config.isEnabled("masthead") && (i.common.util.config.isEnabled("masthead.search") ? (i.common.module.masthead.subscribe("ready", "mastheadsearch", function () {
			setTimeout(r.init, 100), i.common.module.masthead.pauseSubscription("ready", "mastheadsearch")
		}), i.common.util.config.isEnabled("masthead.search.typeahead") && r.subscribe("ready", "mastheadsearchtypeahead", function () {
			! function () {
				s.typeaheadContainer[0] ? s.typeaheadContainer.empty() : s.typeaheadContainer = n('<div id="ibm-search-typeahead-container" aria-expanded="false" class="ibm-search-typeahead-container" role="listbox" aria-label="' + (i.common.translations.data.v18main.misc.resultsNav || "Suggestions") + '"></div>').insertAfter(s.searchModule);
				s.typeaheadUl = n('<ul class="ibm-plain-list ibm-padding-bottom-0" role="listbox" aria-live="polite" aria-label="' + (i.common.translations.data.v18main.misc.resultsNav || "Suggestions") + '"></ul>'), s.inputField.attr({
					role: "combobox",
					"aria-autocomplete": "list",
					"aria-expanded": "false",
					"aria-owns": "ibm-search-typeahead-container"
				}), s.typeaheadUl.on("focusin", function () {}).on("click", function (e) {
					n(e.target).closest(".typeahead-nooption")[0] || (e.preventDefault(), e.stopPropagation(), function (e) {
						"li" !== e[0].nodeName.toLowerCase() && (e = e.parent());
						if (e.hasClass("typeahead-nooption")) return;
						s.typeaheadUl.find("li.ibm-active").removeClass("ibm-active"), e.addClass("ibm-active"), s.inputField.focus()
					}(n(e.target)), f(), s.searchForm.submit())
				}).on("mouseover", function (e) {
					var t = n(e.target);
					"li" !== t[0].nodeName.toLowerCase() && (t = t.parent()), t.hasClass("typeahead-nooption") || (s.typeaheadUl.find("li").removeClass("ibm-active"), t.addClass("ibm-active"))
				}), s.inputField.on("input", function () {
					h(), g(!1)
				}).on("focus", function () {
					"" !== s.inputField.val() && (g(!1), b(!0))
				}).on("keydown", function (e) {
					var t = e.keyCode;
					37 !== t && 39 !== t && (9 === e.keyCode && e.shiftKey && "maximized" !== m() && (b(!1), g(!0)), 38 === t ? (e.preventDefault(), u ? (! function e() {
						var t = s.typeaheadUl.find("li.ibm-active").prev("li");
						s.typeaheadUl.find("li.ibm-active").attr("aria-selected", !1);
						s.typeaheadUl.find("li.ibm-active").removeClass("ibm-active");
						t[0] ? (t.addClass("ibm-active"), t.attr("aria-selected", !0)) : (s.typeaheadUl.find("li:last").addClass("ibm-active"), s.typeaheadUI.find("li:last").attr("aria-selected", !0));
						s.typeaheadUl.find("li.ibm-active").hasClass("typeahead-nooption") && e()
					}(), f()) : h()) : 40 === t && (e.preventDefault(), u ? (! function e() {
						var t = s.typeaheadUl.find("li.ibm-active").next("li");
						s.typeaheadUl.find("li.ibm-active").attr("aria-selected", !1);
						s.typeaheadUl.find("li.ibm-active").removeClass("ibm-active");
						t[0] ? (t.addClass("ibm-active"), t.attr("aria-selected", !0)) : (s.typeaheadUl.find("li:first").addClass("ibm-active"), s.typeaheadUI.find("li:first").attr("aria-selected", !0));
						s.typeaheadUl.find("li.ibm-active").hasClass("typeahead-nooption") && e()
					}(), f()) : h()))
				}), e = !1, n(window).on("scroll", function () {
					e = !0
				}), setInterval(function () {
					e && (e = !1, document.getElementsByClassName("ibm-masthead-search-maximized")[0] || (b(!1), g(!0)))
				}, 100), s.body.on("click", function (e) {
					"maximized" !== m() && (n(e.target).closest(".ibm-masthead-rightside")[0] || (b(!1), g(!0)))
				}), s.searchButton.on("keydown", function (e) {
					9 !== e.keyCode || e.shiftKey || "maximized" === m() || b(!1)
				});
				var e
			}()
		})) : n(function () {
			n(document.getElementById("ibm-search-module")).addClass("ibm-hide")
		}))
	}, r.init = function () {
		s.body = n(document.body), s.inputField = n(document.getElementById("q")), s.searchButton = n(document.getElementById("ibm-search")), s.searchForm = n(document.getElementById("ibm-search-form")), s.searchModule = n(document.getElementById("ibm-search-module")), s.searchCloseButton = n('<div class="ibm-masthead-search-close"><p class="ibm-ind-link ibm-icononly ibm-padding-bottom-0"><a href="#" class="ibm-close-link ibm-nospacing">' + i.common.translations.data.v18main.misc.close + "</a></p></div>").insertBefore("#ibm-search-form").on("click", function (e) {
				e.preventDefault(), v("minimized"), b(!1), s.searchButton.focus()
			}).find("a"),
			function () {
				var t = s.searchModule.find("form:not('#ibm-search-form')"),
					e = '<form class="ibm-hide" id="ibm-default-scope-form" action="https://www.ibm.com/search" method="get"><input name="lang" type="hidden" value="' + i.common.util.meta.getPageLc() + '"><input name="cc" type="hidden" value="' + i.common.util.meta.getPageCc() + '"><input name="tabType[0]" type="hidden" value="Products"><input name="q" type="text" value=""><input name="lnk" type="hidden" value="mhmpsrch"></form>';
				t[0] || (t = n(e).insertAfter("#ibm-search-form"), c = !0);
				s.inputField.attr("autocomplete", "off").after('<input name="lnk" type="hidden" value="mhsrch">'), s.searchScope = s.searchModule.find(".ibm-search-scope"), s.searchScope[0] && s.searchModule.addClass("ibm-has-scope");
				s.searchForm.submit(function (e) {
					"" !== s.inputField.val() ? s.searchScope.find(":checkbox").prop("checked") && t[0] && (e.preventDefault(), t.find("input:text").val(s.inputField.val()), t.submit()) : e.preventDefault()
				}), s.inputField.on("focus", function () {
					"minimized" === m() && v("maximized")
				}), s.searchButton.on("keydown", function (e) {
					9 !== e.keyCode || e.shiftKey || ("maximized" === m() ? (e.preventDefault(), s.searchCloseButton.focus()) : g(!0))
				}), s.searchCloseButton.on("keydown", function (e) {
					9 === e.keyCode && e.shiftKey && (e.preventDefault(), s.searchButton.focus())
				}), s.searchScope.find(":checkbox").on("change", function () {
					h(!0)
				})
			}(), r.isLoaded = !0, e.publish("ready")
	}, r.clearTypeahead = p, r.createTypeahead = function (e, t) {
		var i = t,
			o = "",
			r = e;
		i.sort(), n.each(i, function (e, t) {
			var i = t,
				n = new RegExp(r, "i");
			i = i.replace(n, "<strong>" + r + "</strong>"), e < 6 && (o += '<li id="ibm-search-overlay-typeahead-res-' + e + '" role="option" tabindex="-1" aria-selected="false">' + i + "</li>")
		}), "" === s.inputField.val() ? (p(), b(!1)) : (s.typeaheadContainer.find("ul")[0] || s.typeaheadContainer.html(s.typeaheadUl), s.typeaheadUl.html(o), b(!0))
	}, r.getDisplayState = m, r.makeTypeaheadRequest = (o = 0, function (e, t) {
		var i = t || a;
		clearTimeout(o), o = setTimeout(e, i)
	}), r.showAs = v, r.showTypeaheadResults = b, i.common.meta.subscribe("dataReady", "mastheadsearch", r.autoInit).runAsap(r.autoInit)
}(jQuery, IBMCore),
function (r, n) {
	var o, a, s, l, c, d = n.namespace(n, "common.module.mobilemenu"),
		u = n.common.util.eventCoordinator(d, "mobilemenu", ["ready"]),
		e = !1,
		p = {
			menuScreen: {}
		},
		m = null;

	function h() {
		var e, t = document.getElementById("ibm-primary-tabs"),
			i = document.getElementById("ibm-secondary-tabs"),
			n = document.getElementById("ibm-primary-links"),
			o = document.getElementById("ibm-secondary-navigation");
		if (0 < r(t).find("li").length) e = r(t).find("ul").clone(!0), r("#ibm-primary-tabs[data-widget='dyntabs']")[0] && e.attr("data-type", "dyntabs"), 0 < r(i).find("li").length && e.find("a[aria-selected='true']").after(r(i).find("ul").clone());
		else if (0 < r(i).find("li").length) e = r(i).find("ul").clone().removeAttr("id");
		else {
			if (!(0 < r(n).find("li").length)) return e;
			(e = r(n).clone().removeAttr("id")).find(".ibm-show-hide.ibm-widget-processed").removeClass("ibm-widget-processed").find(".ibm-container-body").removeAttr("style"), 0 < r(o).find("li").length && (o = r(o).clone().attr("id", "ibm-mobile-menu-lnavrel-links").wrapInner('<div class="ibm-show-hide" data-type="panel" data-widget="showhide"></div>').find("ul").addClass("ibm-padding-top-0").wrap('<div class="ibm-container-body"><div>').end(), e = e.add(o))
		}
		return e.removeClass("ibm-tabs").find(".ibm-tabs").removeClass("ibm-tabs"), e.find("[id]").removeAttr("id"), e.find("a[aria-selected='true']:last").wrapInner("<span>").parent().addClass("ibm-mobilemenu-nav-selected"), r('<div class="ibm-mobilemenu-section ibm-mobilemenu-pagenav"></div>').html(e)
	}

	function f() {
		var e;
		if (document.getElementsByClassName("ibm-sitenav-menu-container")[0] && 0 !== r(".ibm-sitenav-menu-list > ul > li").length) return e = r(".ibm-sitenav-menu-container").children(".ibm-sitenav-menu-list").children("ul").clone(), document.getElementsByClassName("ibm-sitenav-menu-name")[0] && e.prepend('<li class="ibm-mobile-section-heading ibm-mobile-sitename">' + r(document.getElementsByClassName("ibm-sitenav-menu-name")[0]).html() + "</li>"), document.getElementsByClassName("ibm-parent-site-name")[0] && e.prepend('<li class="ibm-mobile-section-heading ibm-mobile-sitename">' + r(document.getElementsByClassName("ibm-parent-site-name")[0]).html() + "</li>"), e.find("[data-altlabel]").each(function () {
			r(this).text(r(this).attr("data-altlabel"))
		}), e.find("a.ibm-highlight").removeClass("ibm-highlight").parent().addClass("ibm-highlight"), e.find(".ibm-highlight").addClass("ibm-mobilemenu-nav-selected").children("a").closest("li.ibm-haschildlist").attr("aria-expanded", "true"), e.find("li.ibm-haschildlist").wrapInner('<div class="ibm-show-hide" data-type="panel" data-widget="showhide"></div>').each(function () {
			var e = r(this),
				t = e.find("> div > button")[0] || e.find("> div > span")[0],
				i = t.innerHTML;
			r("<h2>" + i + "</h2>").replaceAll(r(t)).siblings("ul").addClass("ibm-padding-top-0").removeAttr("style").wrap('<div class="ibm-container-body"><div>')
		}), e.find(".ibm-highlight").closest(".ibm-show-hide").children("h2").attr("data-open", "true"), r('<div class="ibm-mobilemenu-section ibm-mobilemenu-sitenavmenu"></div>').html(e)
	}

	function g() {
		o.find(".ibm-mobilemenu-section li li a").wrapInner("<span>"), n.common.util.a11y.makeTreeAccessible({
			el: o.find(".ibm-mobilemenu-pagenav > ul")
		}), n.common.util.a11y.makeToolbarAccessible({
			el: o.find(".ibm-mobilemenu-sitenavmenu > ul")
		})
	}

	function v() {
		o.find(".ibm-show-hide:not(.ibm-widget-processed)").showhide(), o.find(".ibm-mobilemenu-nav-selected .ibm-show-hide").parent().addClass("ibm-showing")
	}
	d.isLoaded = !1, d.autoInit = function () {
		n.common.util.config.isEnabled("masthead") && n.common.module.masthead.subscribe("ready", "mobilemenu", function () {
			n.common.util.config.isEnabled("masthead.mobilemenu") && setTimeout(d.init, 100)
		})
	}, d.init = function () {
		var e, t;
		m = n.common.module.masthead.getMastheadLinklists(), r(document.getElementsByClassName("ibm-mobilemenu")[0]).remove(), p.menuScreen = r(document.getElementById("ibm-mobilemenu-screen")), p.menuScreen[0] || (p.menuScreen = r('<div id="ibm-mobilemenu-screen"></div>').appendTo(document.body)), a = h(), s = document.getElementsByClassName("ibm-parent-site-menu")[0] && 0 !== r(".ibm-parent-site-menu").find("ul > li").length ? ((e = r(".ibm-parent-site-menu").children(".ibm-sitenav-menu-list").children("ul").clone()).find("[data-altlabel]").each(function () {
			r(this).text(r(this).attr("data-altlabel"))
		}), e.find("a.ibm-highlight").removeClass("ibm-highlight").parent().addClass("ibm-highlight"), e.find(".ibm-highlight").addClass("ibm-mobilemenu-nav-selected").children("a").closest("li.ibm-haschildlist").attr("aria-expanded", "true"), e.find("li.ibm-haschildlist").wrapInner('<div class="ibm-show-hide" data-type="panel" data-widget="showhide"></div>').each(function () {
			var e = r(this),
				t = e.find("> div > button")[0] || e.find("> div > span")[0],
				i = t.innerHTML;
			r("<h2>" + i + "</h2>").replaceAll(r(t)).siblings("ul").addClass("ibm-padding-top-0").removeAttr("style").wrap('<div class="ibm-container-body"><div>')
		}), e.find(".ibm-highlight").closest(".ibm-show-hide").children("h2").attr("data-open", "true"), r('<div class="ibm-mobilemenu-section ibm-mobilemenu-sitenavmenu"></div>').html(e)) : void 0, l = f(), t = '<div class="ibm-mobilemenu-section">' + m.mainLinks.burgerMenuHtml + "</div>", c = r(t).find(".ibm-masthead-categories").attr("class", "ibm-masthead-categories-mobilemenu").end();
		var i = '<div class="ibm-mobilemenu-close"><p class="ibm-icononly ibm-fright ibm-ind-link ibm-nospacing"><a class="ibm-close-link" href="#">' + n.common.translations.data.v18main.misc.close + "</a></p></div>";
		a || l || c.find(".ibm-show-hide > h2").attr("data-open", "true"), o = r('<div class="ibm-mobilemenu ibm-hide" id="ibm-burger-menu-container" aria-labelledby="ibm-burgermenu-a11y" role="dialog" tabindex="0"></div>').append('<p class="ibm-hide" id="ibm-burgermenu-a11y">' + (n.common.translations.data.v18main.misc.sitenav || "Site navigation") + "</p>").append(i).append(a).append(s).append(l).append(c).insertAfter("#ibm-masthead"), setTimeout(function () {
			r(document.getElementsByClassName("ibm-mobilemenu-close")[0]).click(function (e) {
				e.preventDefault(), d.hide(), r(document.getElementsByClassName("ibm-masthead-item-menu")[0]).find("button").focus()
			}), o.find("a").each(function () {
				var e = n.common.util.url.addParam({
					url: this.getAttribute("href"),
					paramName: "lnk",
					paramValue: "hm" + (n.common.util.url.getParam("lnk", this.href) || "")
				});
				this.href = e
			}), v(), g(), o.find(".ibm-show-hide h2 a").on("click", function () {
				var e = r(this);
				e.parent("h2.ibm-showing")[0] ? e.closest(".ibm-haschildlist").addClass("ibm-showing") : e.closest(".ibm-haschildlist").removeClass("ibm-showing")
			}), o.find(".ibm-mobilemenu-mhlinks").each(function () {
				n.common.util.a11y.makeToolbarAccessible({
					el: this
				})
			}), o.find(".ibm-mobilemenu-section:last a").keydown(function (e) {
				if (9 === e.keyCode && !e.shiftKey) {
					if (r(this).hasClass("ibm-show-active")) return;
					e.preventDefault(), o.find("a:first").focus()
				}
			}), o.find(".ibm-mobilemenu-close a").keydown(function (e) {
				9 === e.keyCode && e.shiftKey && (e.preventDefault(), o.find("a:visible:last").focus())
			}), p.menuScreen.on("click", function () {
				n.common.module.mobilemenu.isShowing() && n.common.module.mobilemenu.hide()
			})
		}, 100), d.isLoaded = !0, u.publish("ready")
	}, d.addSiteNavigation = function () {
		a || l || (a = h(), l = f(), (a || l) && (c.find(".ibm-show-hide.ibm-widget-processed > h2 a.ibm-show-active").trigger("click"), o.find(".ibm-mobilemenu-section:first").prepend(l).prepend(a), v(), g()))
	}, d.show = function () {
		o.removeClass("ibm-hide"), setTimeout(function () {
			r(document.body).addClass("ibm-show-mobilemenu-screen ibm-mobilemenu-show"), o.focus(), n.common.util.freezeScrollbars(!0), e = !0
		}, 30)
	}, d.hide = function () {
		r(document.body).removeClass("ibm-mobilemenu-show"), setTimeout(function () {
			r(document.body).removeClass("ibm-show-mobilemenu-screen"), n.common.util.freezeScrollbars(!1)
		}, 150), setTimeout(function () {
			o.addClass("ibm-hide"), e = !1
		}, 400)
	}, d.toggle = function () {
		d.isShowing() ? d.hide() : d.show()
	}, d.isShowing = function () {
		return e
	}, d.isOpen = d.isShowing, n.common.meta.subscribe("dataReady", "mobilemenu", d.autoInit).runAsap(d.autoInit)
}(jQuery, IBMCore),
function (r, t) {
	var n, e = t.namespace(t, "common.module.sharethiscontent"),
		i = t.common.util.eventCoordinator(e, "sharethiscontent", ["ready"]);

	function a() {
		var e = "";
		return window.getSelection ? e = window.getSelection().toString() : document.selection && "Control" !== document.selection.type && (e = document.selection.createRange().text), e
	}
	e.autoInit = function () {
		t.common.util.config.isEnabled("sharethiscontent") && e.init()
	}, e.init = function () {
		var e, o = {};
		r.extend(!0, o, {
				links: {
					email: {
						url: "mailto:?subject={title}&body={text}",
						linkClass: "ibm-email-mono-link"
					},
					linkedin: {
						url: "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={text}",
						linkClass: "ibm-linkedin-mono-link"
					},
					twitter: {
						url: "https://twitter.com/intent/tweet?text={text} {url}",
						linkClass: "ibm-twitter-mono-link"
					}
				}
			}, t.common.util.config.get("sharethiscontent"), {
				$links: []
			}), r.each(o.links, function (e, t) {
				var i, n;
				t && (t.id = e, o.$links.push((n = "email" !== (i = t).id ? "window.open()" : "null", i.url && "" !== i.url ? r("<a></a>").attr({
					class: i.linkClass + " ibm-thick-underline",
					href: i.url,
					"data-id": i.id,
					onclick: "return IBMCore.common.module.sharethiscontent.gotoUrl(" + n + ", this);"
				}).html(i.id) : void 0)))
			}),
			function (e) {
				(n = r(document.getElementById("social-media-share-tooltip-content")))[0] || (n = r('<div id="social-media-share-tooltip-content" class="tipso_bubble bottom ibm-background-neutral-white-40 ibm-hide"><div class="tipso_content"><div class="tipso_contents"><p class="ibm-icononly"></p></div></div><div class="tipso_arrow"></div></div>'));
				n.find(".ibm-icononly").html(e), n.appendTo("body")
			}(o.$links), e = document.getElementById("ibm-content-wrapper") || document.getElementById("ibm-pcon"), r(e).on("selectstart", function () {
				n.addClass("ibm-hide")
			}).on("mouseup", function (e) {
				var t, i;
				r(e.target).is("a") || r(e.target).parent().is("a") || (e.preventDefault(), 1 < a().length ? (n.removeClass("ibm-hide"), i = {
					top: e.pageY + 20,
					left: e.pageX - .5 * n.outerWidth(),
					right: "auto"
				}, n.css(i), t = n[0].getBoundingClientRect(), i.left < 0 ? i.left = 0 : i.left + t.width + 40 > window.innerWidth && (i.left = "auto", i.right = 0), t.top + t.height > window.innerHeight ? (i.top = i.top - (t.height + 30), n.css(i).removeClass("bottom").addClass("top")) : n.css(i).addClass("bottom").removeClass("top"), n.css(i)) : n.addClass("ibm-hide"))
			}), i.publish("ready")
	}, e.gotoUrl = function (i, e) {
		var n = e.getAttribute("data-id"),
			o = e.href;
		return t.common.util.statshelper.fireEvent({
			ibmEV: "external link",
			ibmEvAction: o,
			ibmEvGroup: "Share this content icons",
			ibmEvName: "stc-" + n
		}), t.common.util.bitly.shorten({
			url: t.common.util.url.getUrl(),
			success: function (e) {
				var t = e;
				"email" === n ? (t = o.replace("{text}", encodeURIComponent(a()) + "%0D%0A%0D%0A" + encodeURIComponent(e)).replace("{title}", encodeURIComponent(r("title").text())), window.location.href = t) : (t = o.replace("{text}", encodeURIComponent(a())).replace("{url}", encodeURIComponent(e)).replace("{title}", encodeURIComponent(r("title").text())), i.location.href = t)
			}
		}), !1
	}, t.common.meta.subscribe("dataReady", "sharethiscontent", e.autoInit).runAsap(e.autoInit)
}(jQuery, IBMCore),
function (i, o) {
	var r, a, e = o.namespace(o, "common.module.sharethispage"),
		t = o.common.util.eventCoordinator(e, "sharethispage", ["ready"]);

	function n(e) {
		return e.replace(/%\{URL\}/g, encodeURIComponent(r)).replace(/%\{TITLE\}/g, encodeURIComponent(a))
	}

	function s(e) {
		return i("<a></a>").attr({
			class: "ibm-" + e.id + "-encircled-link",
			href: e.linkUrl,
			"data-id": e.id,
			onclick: "email" !== e.id ? "return IBMCore.common.module.sharethispage.gotoUrl(window.open(), this);" : ""
		}).html(e.title)
	}
	e.autoInit = function () {
		o.common.util.config.isEnabled("sharethispage") && o.common.translations.data.v18main.socialSharing && 0 !== o.common.translations.data.v18main.socialSharing.length && i(e.init)
	}, e.init = function () {
		r = o.common.util.url.getUrl(), a = i("title").html() || "";
		var e = function () {
			var e = [],
				t = {
					id: "email",
					title: o.common.translations.data.v18main.misc.emailThisPage,
					url: ""
				};
			i.each(o.common.translations.data.v18main.socialSharing, function () {
				this.url && "ibm-dogear" !== this.id && ("stumble" === this.id ? this.id = "stumbleupon" : "twitter" === this.id && (this.url = "https://twitter.com/intent/tweet?url=%{URL}&text=%{TITLE}"), this.linkUrl = n(this.url), e.push(s(this)))
			}), t.title && "" !== t.title && (t.linkUrl = n("mailto:?subject=%{TITLE}&body=%{URL}"), e.push(s(t)));
			return e
		}();
		i(function () {
			document.getElementsByClassName("ibm-sharethispage")[0] && i('<p class="ibm-icononly"></p>').appendTo(i(document.getElementsByClassName("ibm-sharethispage")).html('<h4 class="ibm-bold">' + (o.common.translations.data.v18main.misc.sharePage || "Share this page") + "</h4>")).html(e), t.publish("ready")
		})
	}, e.gotoUrl = function (i, e) {
		var t = e.getAttribute("data-id"),
			n = e.href;
		return o.common.util.statshelper.fireEvent({
			ibmEV: "external link",
			ibmEvAction: n,
			ibmEvGroup: "Share this page icons",
			ibmEvName: "stp-" + t
		}), "email" === t || ("stumbleupon" !== t ? o.common.util.bitly.shorten({
			url: r,
			success: function (e) {
				var t = n.replace(/%\{URL\}/g, encodeURIComponent(e)).replace(/%\{TITLE\}/g, encodeURIComponent(a));
				i.location.href = t
			}
		}) : i.location.href = n, !1)
	}, o.common.translations.subscribe("dataReady", "sharethispage", e.autoInit).runAsap(e.autoInit)
}(jQuery, IBMCore),
function (o, t) {
	var i, n = t.namespace(t, "common.module.sitenavmenu"),
		e = t.namespace(t, "common.module.sitenavmenu.parentnav"),
		r = t.common.util.eventCoordinator(n, "Sitenavmenu", ["ready"]),
		a = t.common.util.eventCoordinator(e, "Sitenavmenu", ["ready"]),
		s = !1,
		l = {
			sitenavMenu: {},
			sitenavMenuList: {},
			itemWithSubmenu: {}
		},
		c = {
			sitenavMenu: {},
			sitenavMenuList: {},
			itemWithSubmenu: {}
		};

	function d() {
		var e = o(window).scrollTop();
		i < e ? o(document.body).addClass("ibm-sitenav-menu-sticky") : o(document.body).removeClass("ibm-sitenav-menu-sticky")
	}

	function u(e, t) {
		p(e.sitenavMenuList.find("> ul > li.ibm-active")), t.children("ul")[0] && (t.children("ul").hasClass("ibm-align-right") && t.children("ul").removeClass("ibm-align-right"), m(t) && t.children("ul").addClass("ibm-align-right"), t.addClass("ibm-active"))
	}

	function p(e) {
		e.removeClass("ibm-active")
	}

	function m(e) {
		var t = e.addClass("ibm-active").children("ul").addClass("getWidth"),
			i = t[0].getBoundingClientRect().width,
			n = t.addClass("abs").offset().left;
		return e.removeClass("ibm-active").children("ul").removeClass("getWidth"), t.removeClass("abs")[0].style.width = i + "px", n + i + 3 > o(window).width()
	}

	function h() {
		var e = document.getElementsByClassName("ibm-sitenav-menu-name")[0],
			t = l.sitenavMenuList[0],
			i = o(".ibm-sitenav-menu-item-right"),
			n = 0;
		l.sitenavMenu.addClass("getWidth"), n = e.getBoundingClientRect().width, t && (n += t.getBoundingClientRect().width), e.getBoundingClientRect().width, i[0] && i.each(function () {
			this.getBoundingClientRect().width
		}), l.sitenavMenu.removeClass("getWidth"), document.getElementById("ibm-sitenav-menu-hidelinks") || o("head").append('<style id="ibm-sitenav-menu-hidelinks"></style>'), document.getElementById("ibm-sitenav-menu-hidelinks").innerHTML = "@media screen and (max-width: " + (n + 100) + "px) {.ibm-sitenav-menu-container .ibm-sitenav-menu-list > ul > li {display:none}}@media screen and (min-width: " + (n + 101) + "px) {.ibm-mobilemenu-sitenavmenu > ul > li {display:none}}"
	}
	n.init = function () {
		o(document.body).addClass("ibm-sitenav-menu"), l.sitenavMenu = o(document.getElementsByClassName("ibm-sitenav-menu-container")[0]), l.sitenavMenuList = l.sitenavMenu.find(".ibm-sitenav-menu-list"), l.itemWithSubmenu = l.sitenavMenuList.find(" > ul > li.ibm-haschildlist"), i = l.sitenavMenu.offset().top, t.common.module.masthead.subscribe("ready", "menunav", function () {
			i = l.sitenavMenu.offset().top
		}), o.each(l.itemWithSubmenu.children("span"), function () {
			var e = "",
				t = o(this);
			o.each(this.attributes, function () {
				e += " " + this.name + '="' + this.value + '"'
			}), t.replaceWith("<button" + e + ">" + t.html() + "</button>")
		}), l.itemWithSubmenu.each(function () {
			var e = o(this);
			m(e) && e.find("ul").addClass("ibm-align-right")
		}), l.itemWithSubmenu.find("> :focusable").click(function () {
			var e = o(this).parent();
			e.hasClass("ibm-active") ? p(e) : u(l, e)
		}), l.sitenavMenuList.hoverIntent(function () {
			var e = o(this);
			u(l, e)
		}, function () {}, " >ul >li"), l.sitenavMenuList.hoverIntent({
			over: function () {},
			out: function () {
				p(l.sitenavMenuList.find("> ul > li.ibm-active"))
			},
			timeout: 300
		}), !1 !== l.sitenavMenu.data("sticky") && (o(window).scroll(function () {
			s = !0
		}), setInterval(function () {
			s && (s = !1, d())
		}, 10), d()), o.browser.safari ? setTimeout(function () {
			t.common.module.sitenavmenu.setSitenavMinWidth(), l.sitenavMenu.attr("data-widgetprocessed", !0)
		}, 150) : (h(), l.sitenavMenu.attr("data-widgetprocessed", !0)), t.common.util.a11y.makeMenuAccessible({
			el: l.sitenavMenuList
		}), r.publish("ready")
	}, n.initParent = function () {
		c.sitenavMenu = o(document.getElementsByClassName("ibm-parent-site-menu")[0]), c.sitenavMenuList = c.sitenavMenu.find(".ibm-sitenav-menu-list"), c.itemWithSubmenu = c.sitenavMenuList.find(" > ul > li.ibm-haschildlist"), c.itemWithSubmenu.find("> :focusable").click(function () {
			var e = o(this).parent();
			e.hasClass("ibm-active") ? p(c) : u(c, e)
		}), c.sitenavMenuList.hoverIntent(function () {
			var e = o(this);
			u(c, e)
		}, function () {}, " >ul >li"), c.sitenavMenuList.hoverIntent({
			over: function () {},
			out: function () {
				p(c.sitenavMenuList.find("> ul > li.ibm-active"))
			},
			timeout: 300
		}), t.common.util.a11y.makeMenuAccessible({
			el: c.sitenavMenuList
		}), c.sitenavMenu.attr("data-widgetprocessed", !0), a.publish("ready")
	}, n.setSitenavMinWidth = h, o(function () {
		if (document.getElementsByClassName("ibm-sitenav-menu-container")[0]) {
			var e = t.common.util.getScrollbarWidth();
			t.common.util.addCssRule(".ibm-no-scroll .ibm-sitenav-menu-container", {
				"margin-left": e + "px",
				"margin-right": e + "px"
			}), setTimeout(n.init, 50)
		}
		document.getElementsByClassName("ibm-parent-site-menu")[0] && setTimeout(n.initParent, 50)
	}), n.subscribe("ready", "menunavself", function () {})
}(jQuery, IBMCore),
function (e, t) {
	var i = t.namespace(t, "common.module.urx"),
		n = null;
	i.autoInit = function () {
		(n = t.common.meta.page.pageInfo.urx) && n.enabled && !n.ran && (i.init(), n.ran = !0)
	}, i.init = function () {
		var e = document.createElement("script");
		e.setAttribute("src", t.common.util.config.get("jsFilesUrlUrx")), document.head.appendChild(e)
	}, t.common.meta.subscribe("dataReady", "urxloader", i.autoInit).runAsap(i.autoInit)
}(jQuery, IBMCore),
function (t, e) {
	var i = e.namespace(e, "common.widget.manager");
	i.dispatchEvent = function (e) {
		var t, i = {};
		e.evtDetail && (i.detail = e.evtDetail), "function" == typeof window.CustomEvent ? (t = new window.CustomEvent("ibm-" + e.evtName, i), e.evtEl.dispatchEvent(t)) : "function" == typeof document.createEvent && ((t = document.createEvent("Event")).initEvent("ibm-" + e.evtName, !1, !1), e.evtEl.dispatchEvent(t))
	}, i.dispatchInitEvent = function (e) {
		t(e).addClass("ibm-widget-processed"), i.dispatchEvent({
			evtEl: e,
			evtName: "init"
		})
	}
}(jQuery, IBMCore),
function (c, d) {
	d.namespace(d, "common.widget.carousel");
	var i = [];

	function u(i, n) {
		setTimeout(function () {
			var e = n.slidecount ? "slidecount-" : n.dots ? "dots-" : "",
				t = n.arrows ? "arrows" : "";
			d.common.util.statshelper.fireEvent({
				ibmEV: "widget",
				ibmEvAction: i.evAction,
				ibmEvGroup: "carousel",
				ibmEvModule: e + t
			})
		}, 800)
	}

	function n(i) {
		var n, o, r, a = this,
			s = {
				adaptiveheight: !1,
				arrows: !0,
				autoplay: !1,
				autoplayspeed: 6e3,
				customPaging: function (e, t) {
					return c('<button type="button" data-role="none" role="button">').text(t + 1)
				},
				dots: !0,
				easing: "swing",
				infinite: !1,
				prevArrow: '<button type="button" data-role="none" class="ibm-chevron-left-regular-link ibm-linkcolor-default ibm-carousel-prev" aria-label="previous">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="ibm-chevron-right-regular-link ibm-linkcolor-default ibm-carousel-next" aria-label="next">Next</button>',
				randomfirst: !1,
				slidecount: !1,
				speed: 275,
				variablewidth: !1,
				rtl: "rtl" === document.documentElement.getAttribute("dir")
			},
			l = {};
		a.destroy = function () {
			return n.replaceWith(l), l
		}, a.init = function (e) {
			n = c(e), l = n.clone(!0), n.data("widget", a);
			try {
				o = n,
					function () {
						-1 === o[0].className.indexOf("ibm-carousel__arrows--large") && (o.after('<div class="ibm-carousel-controls"><div class="ibm-cc-prev"></div><div class="ibm-cc-middle" aria-label="Carousel controls"></div><div class="ibm-cc-next"></div></div>'), s.appendDots = o.next().children("div:eq(1)"), s.appendArrows = o.next().children("div:eq(0)"));
						(r = c.extend(!0, {}, s, o.data() || {}, i)).adaptiveHeight = r.adaptiveheight, r.autoplaySpeed = r.autoplayspeed, r.variableWidth = r.variablewidth, -1 !== o[0].className.indexOf("ibm-carousel__arrows--large") || r.dots || r.slidecount || (r.dots = !0)
					}(), r.randomfirst && (t = Math.floor(Math.random() * o.children().length), o.children(":eq(" + t + ")").prependTo(o)), r.slidecount && o.on("init reInit afterChange", function (e, t, i, n) {
						var o = (i || 0) + 1;
						s.appendDots.addClass("ibm-h4").text(o + " / " + t.slideCount)
					}), o.slick(r), u({
						evAction: "init"
					}, r), -1 === o[0].className.indexOf("ibm-carousel__arrows--large") ? (r.appendArrows.find(".ibm-carousel-next").appendTo(r.appendDots.next()), o.next().appendTo(o), o.find(".ibm-carousel-controls").on("click", "button", function () {
						var e = c(this).text();
						u({
							evAction: e
						}, r)
					})) : (o.find(".slick-dots").on("click", "button", function () {
						var e = c(this).text();
						u({
							evAction: e
						}, r)
					}), o.find(".slick-arrow").on("click", function () {
						var e = c(this).text();
						u({
							evAction: e
						}, r)
					})), d.common.widget.manager.dispatchInitEvent(n[0])
			} catch (e) {
				throw e
			}
			var t
		}
	}
	c.fn.carousel = function (t) {
		return this.each(function () {
			var e;
			(e = new n(t), i.push(e), e).init(this)
		})
	}
}(jQuery, IBMCore),
function (l, c) {
	function d(e) {
		var t = e.parent().find(".dataTables_filter label input").clone(!0);
		t[0] && e.parent().find(".dataTables_filter label").html((c.common.translations.data.v18main.misc.search || "Search") + ":").append(t[0])
	}
	c.namespace(c, "common.widget.datatable").init = function (e, t) {
		var i, n, o = l(e),
			r = {
				classes: {
					sFilterInput: "ibm-styled-input"
				},
				colReorder: !1,
				info: !1,
				ordering: !1,
				paging: !1,
				responsive: !0,
				scrollCollapse: !0,
				searching: !1
			},
			a = r,
			s = o.clone(!0);
		return o.data("widget", {
			destroy: function () {
				return n.destroy(), o.replaceWith(s), s
			}
		}), t = t || {}, (a = l.extend(!0, {}, r, o.data(), t)).scrollaxis && (-1 < a.scrollaxis.indexOf("x") && (a.scrollX = !0, a.responsive = !1), -1 < a.scrollaxis.indexOf("y") && (a.scrollY = a.height || 200, a.responsive = !1)), n = o.addClass("display").DataTable(a), a.language && a.language.search || "en" === c.common.util.meta.getPageLc() || c.common.translations.subscribe("dataready", "datatable", function () {
			d(o)
		}).runAsap(function () {
			d(o)
		}), a.scrollaxis && (-1 < a.scrollaxis.indexOf("x") || -1 < a.scrollaxis.indexOf("y")) && (i = o.parent(".dataTables_scrollBody").siblings(".dataTables_scrollHead").children("caption"))[0] && i.addClass("ibm-access").prependTo(o), c.common.widget.manager.dispatchInitEvent(o[0]), n
	}
}(jQuery, IBMCore),
function (e, t) {
	e.fn.hiresimageswap = function () {
		return this
	}
}(jQuery),
function (h, f) {
	f.namespace(f, "common.widget.leavingibm");
	var o = [],
		g = {
			title: "Leaving the IBM Web site",
			text: "You are now leaving the IBM Web site. IBM makes no representations or warranties about any other Web site which you may access through this one.",
			continueText: "Continue",
			cancelText: "Cancel",
			overlayId: "overlay-leaving-ibm"
		};

	function r(a) {
		var s, l, c, d, u, p, m = this;
		m.destroy = function () {
			return s.remove(), l.replaceWith(c), c.off(".leavingibm").removeClass("ibm-widget-processed"), c
		}, m.init = function (e) {
			l = h(e), c = l.clone(!0), l.data("widget", m);
			try {
				h.extend(!0, g, {
					title: f.common.translations.data.v18main.leaving.LEAVING001,
					text: f.common.translations.data.v18main.leaving.LEAVING002,
					continueText: f.common.translations.data.v18main.misc.continueText,
					cancelText: f.common.translations.data.v18main.misc.cancelText
				}), u = h.extend({}, g, l.data("options") || {}, a), (d = f.common.widget.overlay.createOverlay({
					contentHtml: (r = u, '<h4 class="ibm-bold">' + r.title + "</h4><p>" + r.text + '</p><div class="ibm-rule"><hr /></div><div class="ibm-buttons-row ibm-center"><p class="ibm-btn-row"><button class="ibm-btn-sec">' + r.cancelText + '</button> <button class="ibm-btn-pri">' + r.continueText + "</button></p>"),
					classes: "ibm-leaving-overlay ibm-overlay-alt"
				})).init(), s = h(document.getElementById(d.getId())), m.overlay = d, o = l.attr("href"), t = o, i = t.indexOf("url="), n = t.indexOf("ibm.com/links"), -1 !== i && -1 !== n && n < i && (t = t.substr(i + 4)), p = decodeURIComponent(t), d.subscribe("show", "ibm-leaving", function () {
					f.common.util.statshelper.fireEvent({
						ibmEV: "overlay",
						ibmEvAction: "show",
						ibmEvTarget: p,
						ibmEvGroup: "Leaving IBM",
						ibmEvLinkTitle: l.text()
					})
				}), d.subscribe("hide", "ibm-leaving", function () {
					f.common.util.statshelper.fireEvent({
						ibmEV: "overlay",
						ibmEvAction: "close",
						ibmEvTarget: p,
						ibmEvGroup: "Leaving IBM",
						ibmEvLinkTitle: l.text()
					})
				}), s.on("click", ".ibm-btn-pri", function (e) {
					e.preventDefault(), f.common.util.statshelper.fireEvent({
						ibmEV: "external link",
						ibmEvAction: "continue",
						ibmEvTarget: p,
						ibmEvGroup: "Leaving IBM",
						ibmEvLinkTitle: l.text()
					}), void 0 !== l.attr("target") ? (window.open(p, l.attr("target")), d.hide()) : location.href = p
				}), s.on("click", ".ibm-btn-sec", function (e) {
					e.preventDefault(), d.hide()
				})
			} catch (e) {
				throw e
			}
			var t, i, n;
			var o;
			var r
		}
	}
	h.fn.leavingibm = function (n) {
		return this.each(function () {
			var i = h(this);
			i.clone(!0);
			i.on("click.leavingibm", function (e) {
				var t;
				i.data("widget").overlay || (t = new r(n), o.push(t), t).init(this);
				i.data("widget").overlay.show(), e.preventDefault()
			}), i.data("widget", {
				destroy: function () {
					return i.off(".leavingibm"), i.removeClass("ibm-widget-processed")
				}
			}), f.common.widget.manager.dispatchInitEvent(this)
		})
	}
}(jQuery, IBMCore),
function (I, A) {
	var o, t = A.namespace(A, "common.widget.overlay"),
		_ = [],
		M = null,
		D = [],
		i = A.common.util.url.getParam("showoverlay");

	function n(e) {
		var t = new r(e);
		return _.push(t), t
	}

	function j(e, t) {
		A.common.util.statshelper.fireEvent({
			ibmEV: "widget",
			ibmEvGroup: "Overlay",
			ibmEvName: e,
			ibmEvAction: t
		})
	}

	function L() {
		if (0 === D.length) o.hide(), A.common.util.freezeScrollbars(!1);
		else {
			var e, t, i = 0,
				n = D.length;
			for (e = 0; e < n; e++) t = D[e], i = Math.max(i, t.backdrop_opacity);
			o.css("opacity", i), o.show(), A.common.util.freezeScrollbars(!0)
		}
	}

	function r(e) {
		var n, o, r, t, i = {
				$overlay: null,
				allowResize: !0,
				arialabel: "Overlay content",
				ariadescribedby: !0,
				backdropopacity: .5,
				backgroundcolor: null,
				classes: "",
				contentHtml: null,
				fullwidth: !1,
				hidexscroll: !1,
				id: "ibm-overlaywidget-" + (I("[data-widget='overlay container']").length + 1),
				name: "",
				type: "modal"
			},
			a = e.$overlay ? e.$overlay.data() : {},
			s = I.extend(!0, i, a, e),
			l = this,
			c = A.common.util.eventCoordinator(l, "Overlay", ["show", "hide", "pre-show", "background-change", "direction-change", "positioner-change", "resize"]),
			d = s.$overlay,
			u = "active",
			p = s.backgroundcolor,
			m = !0,
			h = !0,
			f = !1,
			g = [],
			v = [],
			b = "ibm-common-overlay " + s.classes,
			y = "prepped",
			w = 0;

		function k(e) {
			return e = void 0 !== e ? e + "px" : "auto", o.css("width", e), l
		}

		function C(e) {
			var t = A.common.util.color.createColor(e),
				i = t.rgba();
			return d.css({
				backgroundColor: i
			}), d.addClass("ibm-overlay-text-" + t.accessibleTextColor), p = i, l
		}

		function x() {
			for (var e = -1, t = D.length; ++e < t && l.id !== D[e].getId(););
			return e < t ? e : -1
		}

		function T() {
			return t = document.activeElement, "" === o.innerHTML ? (window.console.warn("v18: Will not show an empty overlay"), !1) : E() ? (window.console.warn("v18: This overlay is already showing"), !1) : (M = l, D.push(l), w = 920 + x(), d.css("zIndex", w), L(), I.each(v, function () {
				this.call(l, h)
			}), c.publish("pre-show", h), d.addClass(y + " " + u), c.publish("show", h), j("show", l.id), f = !0, l)
		}

		function S(e) {
			return E() && ("alert" !== s.type || e) && (I.each(g, function () {
				this.call(l, m)
			}), M = null, D.splice(x(), 1), L(), d.removeClass(u), setTimeout(function () {
				d.removeClass(y)
			}, 100), c.publish("hide", m), j("hide", l.id), f = m = !1, I(t).focus()), l
		}

		function E() {
			return f
		}

		function $(e) {
			return void 0 === e ? -1 < d[0].className.indexOf("seamless") : (d[!1 === e ? "removeClass" : "addClass"]("seamless"), l)
		}
		d && ("" !== d[0].id && (s.id = "ibm-overlaywidget-" + d[0].id), b = d[0].getAttribute("class")), l.backdrop_opacity = s.backdropopacity, l.id = s.id, l.destroy = function () {
			return S(), r && d.replaceWith(r), I.each(_, function (e) {
				this.id === l.id && _.splice(e, 1)
			}), r
		}, l.init = function () {
			var e, t, i = I('<div class="" id="' + l.id + '" role="dialog" aria-describedby="' + l.id + '-content" aria-label="' + s.arialabel + '" data-widget="overlay container" data-name="' + s.name + '"><div class="ibm-overlay-heading-con"><p class="ibm-icononly"><a href="javascript:void(0);" class="ibm-close-link" role="button">Close</a></p></div><div id="' + l.id + '-content" class="content"></div></div>');
			d && (r = d.clone(!0)), e = s.contentHtml ? I(s.contentHtml) : d.attr("class", ""), i.find(".content").append(e), d = i.addClass(b).appendTo(document.body).data("widget", l), n = d.find(".ibm-overlay-heading-con .ibm-close-link"), (o = d.find(".content [data-widget='overlay']"))[0] || (o = d.find(".content")), !1 === s.ariadescribedby && d.removeAttr("aria-describedby"), s.fullwidth && d.addClass("full-width"), "alert" === s.type && n.remove(), o.find(".ibm-common-overlay-close")[0] ? n.html(o.find(".ibm-common-overlay-close")[0].innerHTML) : A.common.translations.subscribe("dataReady", "Overlay", function () {
				n.html(A.common.translations.data.v18main.misc.close)
			}).runAsap(function () {
				n.html(A.common.translations.data.v18main.misc.close)
			}), s.seamless && $(!0), void 0 !== s.width && k(s.width), void 0 !== s.height && (t = void 0 !== (t = s.height) ? t + "px" : "auto", o.css("height", t)), p && C(p), s.hidexscroll && o.addClass("hidexscroll"), n.click(function (e) {
				e.preventDefault(), S()
			}), c.subscribe("show", "Overlay init", function () {
				d.find(".content").attr("tabindex", 0).focus()
			}), c.subscribe("hide", "Overlay init", function () {
				d.find(".content").attr("tabindex", -1), d.find("[data-widget=videoplayer]").data("widget") && d.find("[data-widget=videoplayer]").data("widget").pauseVideo && d.find("[data-widget=videoplayer]").data("widget").pauseVideo()
			}), d.on("keydown", function (e) {
				var t = d.find(":focusable:last"),
					i = d.find(":focusable:first");
				9 === e.keyCode && !e.shiftKey && I(e.target).is(t) ? (e.preventDefault(), i.focus()) : 9 === e.keyCode && e.shiftKey && I(e.target).is(i) && (e.preventDefault(), t.focus())
			}), d.find("[data-widget='overlay']")[0] && A.common.widget.manager.dispatchInitEvent(d.find("[data-widget='overlay']")[0])
		}, l.getId = function () {
			return l.id
		}, l.setHtml = function (e) {
			o.html(e), "" === e && S();
			return l
		}, l.setWidth = k, l.setBackground = C, l.setPosition = function () {
			return l
		}, l.getStackIndex = x, l.show = T, l.getZindex = function () {
			return w
		}, l.hide = S, l.toggle = function () {
			E() ? S() : T();
			return l
		}, l.isShowing = E, l.isOpen = E, l.seamless = $
	}
	I.fn.overlay = function () {
		return this.each(function () {
			var e = n({
				$overlay: I(this)
			});
			e.init(this), i && i === this.id && e.show()
		})
	}, t.consoleAll = function () {
		I.each(_, function () {
			window.console.log(this)
		})
	}, t.currentShowingOverlay = function () {
		return M
	}, t.destroy = function (e) {
		return t.getWidget(e).destroy(), I(document.getElementById(e))
	}, t.getWidget = function (e) {
		return I(document.getElementById(e)).closest("[data-widget='overlay container']").data("widget")
	}, t.hide = function (e, t) {
		I(document.getElementById(e)).closest("[data-widget='overlay container']").data("widget").hide(t)
	}, t.hideAllOverlays = function () {
		I.each(_, function () {
			this.hide()
		})
	}, t.show = function (e) {
		I(document.getElementById(e)).closest("[data-widget='overlay container']").data("widget").show()
	}, t.createOverlay = n, I(document).keydown(function (e) {
		switch (e.keyCode || e.which) {
			case 27:
				0 < D.length && D[D.length - 1].hide()
		}
	}), I(function () {
		(o = I('<div id="ibm-overlay-backdrop"></div>').appendTo(document.body)).show = function () {
			I(document.body).addClass("ibm-overlay-backdrop-visible")
		}, o.hide = function () {
			I(document.body).removeClass("ibm-overlay-backdrop-visible")
		}, o.click(t.hideAllOverlays)
	})
}(jQuery, IBMCore),
function (l, c) {
	c.namespace(c, "common.widget.parallaxscroll").init = function (e) {
		var i = l(e),
			t = i.css("background-position"),
			n = i.data("scrollspeed") || 6,
			o = i.css("backgroundPosition").split(" ")[0],
			r = i.data("disablesmallgrid"),
			a = Math.floor(999 * Math.random() + 1);

		function s() {
			var e = l(window),
				t = o + " " + -Math.floor((Math.floor(e.scrollTop()) - Math.floor(i.offset().top)) / n) + "px";
			r && -1 < document.documentElement.className.indexOf("ibm-grid-small") || i.css("background-position", t)
		}
		i.addClass("ibm-parallax-scroll"), i.data("widget", {
			destroy: function () {
				return l(window).off(".parallaxscroll." + a), i.removeClass("ibm-widget-processed").css("background-position", t), i
			}
		}), l(window).on("scroll.parallaxscroll." + a, s), s(), c.common.widget.manager.dispatchInitEvent(i[0])
	}
}(jQuery, IBMCore),
function (t) {
	"function" == typeof define && define.amd ? define(["jquery"], function (e) {
		return t(e, window, document)
	}) : "object" == typeof exports ? module.exports = t(require("jquery"), window, document) : t(jQuery, window, document)
}(function (n, r, u) {
	"use strict";
	var p, m, i, c, d, o, a, t, h, s, l, f, g, v, b, y, w, k;
	l = {
		paneClass: "nano-pane",
		sliderClass: "nano-slider",
		contentClass: "nano-content",
		enabledClass: "has-scrollbar",
		flashedClass: "flashed",
		activeClass: "active",
		iOSNativeScrolling: !1,
		preventPageScrolling: !1,
		disableResize: !1,
		alwaysVisible: !1,
		flashDelay: 1500,
		sliderMinHeight: 20,
		sliderMaxHeight: null,
		documentContext: null,
		windowContext: null
	}, h = "scroll", d = "mouseenter", o = "mousewheel", t = "resize", i = "DOMMouseScroll", c = "down", p = "Microsoft Internet Explorer" === r.navigator.appName && /msie 7./i.test(r.navigator.appVersion) && r.ActiveXObject, m = null, b = r.requestAnimationFrame, s = r.cancelAnimationFrame, w = u.createElement("div").style, k = function () {
		var e, t, i, n;
		for (e = i = 0, n = (t = ["t", "webkitT", "MozT", "msT", "OT"]).length; i < n; e = ++i)
			if (t[e], t[e] + "ransform" in w) return t[e].substr(0, t[e].length - 1);
		return !1
	}(), y = function (e) {
		return !1 !== k && ("" === k ? e : k + e.charAt(0).toUpperCase() + e.substr(1))
	}("transform"), g = !1 !== y, f = function () {
		var e, t, i;
		return (t = (e = u.createElement("div")).style).position = "absolute", t.width = "100px", t.height = "100px", t.overflow = h, t.top = "-9999px", u.body.appendChild(e), i = e.offsetWidth - e.clientWidth, u.body.removeChild(e), i
	}, v = function () {
		var e, t, i;
		return t = r.navigator.userAgent, !!(e = /(?=.+Mac OS X)(?=.+Firefox)/.test(t)) && ((i = /Firefox\/\d{2}\./.exec(t)) && (i = i[0].replace(/\D+/g, "")), e && 23 < +i)
	}, a = function () {
		function e(e, t) {
			this.el = e, this.options = t, m || (m = f()), this.$el = n(this.el), this.doc = n(this.options.documentContext || u), this.win = n(this.options.windowContext || r), this.body = this.doc.find("body"), this.$content = this.$el.children("." + this.options.contentClass), this.$content.attr("tabindex", this.options.tabIndex || 0), this.content = this.$content[0], this.previousPosition = 0, this.options.iOSNativeScrolling && null != this.el.style.WebkitOverflowScrolling ? this.nativeScrolling() : this.generate(), this.createEvents(), this.addEvents(), this.reset()
		}
		return e.prototype.preventScrolling = function (e, t) {
			if (this.isActive)
				if (e.type === i)(t === c && 0 < e.originalEvent.detail || "up" === t && e.originalEvent.detail < 0) && e.preventDefault();
				else if (e.type === o) {
				if (!e.originalEvent || !e.originalEvent.wheelDelta) return;
				(t === c && e.originalEvent.wheelDelta < 0 || "up" === t && 0 < e.originalEvent.wheelDelta) && e.preventDefault()
			}
		}, e.prototype.nativeScrolling = function () {
			this.$content.css({
				WebkitOverflowScrolling: "touch"
			}), this.iOSNativeScrolling = !0, this.isActive = !0
		}, e.prototype.updateScrollValues = function () {
			var e, t;
			e = this.content, this.maxScrollTop = e.scrollHeight - e.clientHeight, this.prevScrollTop = this.contentScrollTop || 0, this.contentScrollTop = e.scrollTop, t = this.contentScrollTop > this.previousPosition ? "down" : this.contentScrollTop < this.previousPosition ? "up" : "same", this.previousPosition = this.contentScrollTop, "same" !== t && this.$el.trigger("update", {
				position: this.contentScrollTop,
				maximum: this.maxScrollTop,
				direction: t
			}), this.iOSNativeScrolling || (this.maxSliderTop = this.paneHeight - this.sliderHeight, this.sliderTop = 0 === this.maxScrollTop ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop)
		}, e.prototype.setOnScrollStyles = function () {
			var e, t;
			g ? (e = {})[y] = "translate(0, " + this.sliderTop + "px)" : e = {
				top: this.sliderTop
			}, b ? (s && this.scrollRAF && s(this.scrollRAF), this.scrollRAF = b((t = this, function () {
				return t.scrollRAF = null, t.slider.css(e)
			}))) : this.slider.css(e)
		}, e.prototype.createEvents = function () {
			var i, n, t, o, r, a, s, l;
			this.events = {
				down: (l = this, function (e) {
					return l.isBeingDragged = !0, l.offsetY = e.pageY - l.slider.offset().top, l.slider.is(e.target) || (l.offsetY = 0), l.pane.addClass(l.options.activeClass), l.doc.bind("mousemove", l.events.drag).bind("mouseup", l.events.up), l.body.bind(d, l.events.enter), !1
				}),
				drag: (s = this, function (e) {
					return s.sliderY = e.pageY - s.$el.offset().top - s.paneTop - (s.offsetY || .5 * s.sliderHeight), s.scroll(), s.contentScrollTop >= s.maxScrollTop && s.prevScrollTop !== s.maxScrollTop ? s.$el.trigger("scrollend") : 0 === s.contentScrollTop && 0 !== s.prevScrollTop && s.$el.trigger("scrolltop"), !1
				}),
				up: (a = this, function (e) {
					return a.isBeingDragged = !1, a.pane.removeClass(a.options.activeClass), a.doc.unbind("mousemove", a.events.drag).unbind("mouseup", a.events.up), a.body.unbind(d, a.events.enter), !1
				}),
				resize: (r = this, function (e) {
					r.reset()
				}),
				panedown: (o = this, function (e) {
					return o.sliderY = (e.offsetY || e.originalEvent.layerY) - .5 * o.sliderHeight, o.scroll(), o.events.down(e), !1
				}),
				scroll: (t = this, function (e) {
					t.updateScrollValues(), t.isBeingDragged || (t.iOSNativeScrolling || (t.sliderY = t.sliderTop, t.setOnScrollStyles()), null != e && (t.contentScrollTop >= t.maxScrollTop ? (t.options.preventPageScrolling && t.preventScrolling(e, c), t.prevScrollTop !== t.maxScrollTop && t.$el.trigger("scrollend")) : 0 === t.contentScrollTop && (t.options.preventPageScrolling && t.preventScrolling(e, "up"), 0 !== t.prevScrollTop && t.$el.trigger("scrolltop"))))
				}),
				wheel: (n = this, function (e) {
					var t;
					if (null != e) return (t = e.delta || e.wheelDelta || e.originalEvent && e.originalEvent.wheelDelta || -e.detail || e.originalEvent && -e.originalEvent.detail) && (n.sliderY += -t / 3), n.scroll(), !1
				}),
				enter: (i = this, function (e) {
					var t;
					if (i.isBeingDragged) return 1 !== (e.buttons || e.which) ? (t = i.events).up.apply(t, arguments) : void 0
				})
			}
		}, e.prototype.addEvents = function () {
			var e;
			this.removeEvents(), e = this.events, this.options.disableResize || this.win.bind(t, e[t]), this.iOSNativeScrolling || (this.slider.bind("mousedown", e.down), this.pane.bind("mousedown", e.panedown).bind(o + " " + i, e.wheel)), this.$content.bind(h + " " + o + " " + i + " touchmove", e[h])
		}, e.prototype.removeEvents = function () {
			var e;
			e = this.events, this.win.unbind(t, e[t]), this.iOSNativeScrolling || (this.slider.unbind(), this.pane.unbind()), this.$content.unbind(h + " " + o + " " + i + " touchmove", e[h])
		}, e.prototype.generate = function () {
			var e, t, i, n, o;
			return n = (t = this.options).paneClass, o = t.sliderClass, t.contentClass, (i = this.$el.children("." + n)).length || i.children("." + o).length || this.$el.append('<div class="' + n + '"><div class="' + o + '" /></div>'), this.pane = this.$el.children("." + n), this.slider = this.pane.find("." + o), 0 === m && v() ? e = "rtl" != u.dir ? {
				right: -14,
				paddingRight: +r.getComputedStyle(this.content, null).getPropertyValue("padding-right").replace(/[^0-9.]+/g, "") + 14
			} : {
				left: -14,
				paddingLeft: +r.getComputedStyle(this.content, null).getPropertyValue("padding-left").replace(/[^0-9.]+/g, "") + 14
			} : m && (e = "rtl" != u.dir ? {
				right: -m
			} : {
				left: -m
			}, this.$el.addClass(this.options.enabledClass)), null != e && this.$content.css(e), this
		}, e.prototype.restore = function () {
			this.stopped = !1, this.iOSNativeScrolling || this.pane.show(), this.addEvents()
		}, e.prototype.reset = function () {
			var e, t, i, n, o, r, a, s, l, c, d;
			if (!this.iOSNativeScrolling) return this.$el.find("." + this.options.paneClass).length || this.generate().stop(), this.stopped && this.restore(), o = (n = (e = this.content).style).overflowY, p && this.$content.css({
				height: this.$content.height()
			}), t = e.scrollHeight + m, 0 < (l = parseInt(this.$el.css("max-height"), 10)) && (this.$el.height(""), this.$el.height(e.scrollHeight > l ? l : e.scrollHeight)), a = (r = this.pane.outerHeight(!1)) + (s = parseInt(this.pane.css("top"), 10)) + parseInt(this.pane.css("bottom"), 10), (d = Math.round(a / t * r)) < this.options.sliderMinHeight ? d = this.options.sliderMinHeight : null != this.options.sliderMaxHeight && d > this.options.sliderMaxHeight && (d = this.options.sliderMaxHeight), o === h && n.overflowX !== h && (d += m), this.maxSliderTop = a - d, this.contentHeight = t, this.paneHeight = r, this.paneOuterHeight = a, this.sliderHeight = d, this.paneTop = s, this.slider.height(d), this.events.scroll(), this.pane.show(), this.isActive = !0, e.scrollHeight === e.clientHeight || this.pane.outerHeight(!0) >= e.scrollHeight && o !== h ? (this.pane.hide(), this.isActive = !1) : this.el.clientHeight === e.scrollHeight && o === h ? this.slider.hide() : this.slider.show(), this.pane.css({
				opacity: this.options.alwaysVisible ? 1 : "",
				visibility: this.options.alwaysVisible ? "visible" : ""
			}), "static" !== (i = this.$content.css("position")) && "relative" !== i || ("rtl" != u.dir ? (c = parseInt(this.$content.css("right"), 10)) && this.$content.css({
				right: "",
				marginRight: c
			}) : (left = parseInt(this.$content.css("left"), 10), left && this.$content.css({
				left: "",
				marginLeft: left
			}))), this;
			this.contentHeight = this.content.scrollHeight
		}, e.prototype.scroll = function () {
			if (this.isActive) return this.sliderY = Math.max(0, this.sliderY), this.sliderY = Math.min(this.maxSliderTop, this.sliderY), this.$content.scrollTop(this.maxScrollTop * this.sliderY / this.maxSliderTop), this.iOSNativeScrolling || (this.updateScrollValues(), this.setOnScrollStyles()), this
		}, e.prototype.scrollBottom = function (e) {
			if (this.isActive) return this.$content.scrollTop(this.contentHeight - this.$content.height() - e).trigger(o), this.stop().restore(), this
		}, e.prototype.scrollTop = function (e) {
			if (this.isActive) return this.$content.scrollTop(+e).trigger(o), this.stop().restore(), this
		}, e.prototype.scrollTo = function (e) {
			if (this.isActive) return this.scrollTop(this.$el.find(e).get(0).offsetTop), this
		}, e.prototype.stop = function () {
			return s && this.scrollRAF && (s(this.scrollRAF), this.scrollRAF = null), this.stopped = !0, this.removeEvents(), this.iOSNativeScrolling || this.pane.hide(), this
		}, e.prototype.destroy = function () {
			return this.stopped || this.stop(), !this.iOSNativeScrolling && this.pane.length && this.pane.remove(), p && this.$content.height(""), this.$content.removeAttr("tabindex"), this.$el.hasClass(this.options.enabledClass) && (this.$el.removeClass(this.options.enabledClass), "rtl" != u.dir ? this.$content.css({
				right: ""
			}) : this.$content.css({
				left: ""
			})), this
		}, e.prototype.flash = function () {
			var e;
			if (!this.iOSNativeScrolling && this.isActive) return this.reset(), this.pane.addClass(this.options.flashedClass), setTimeout((e = this, function () {
				e.pane.removeClass(e.options.flashedClass)
			}), this.options.flashDelay), this
		}, e
	}(), n.fn.nanoScroller = function (i) {
		return this.each(function () {
			var e, t;
			if ((t = this.nanoscroller) || (e = n.extend({}, l, i), this.nanoscroller = t = new a(this, e)), i && "object" == typeof i) {
				if (n.extend(t.options, i), null != i.scrollBottom) return t.scrollBottom(i.scrollBottom);
				if (null != i.scrollTop) return t.scrollTop(i.scrollTop);
				if (i.scrollTo) return t.scrollTo(i.scrollTo);
				if ("bottom" === i.scroll) return t.scrollBottom(0);
				if ("top" === i.scroll) return t.scrollTop(0);
				if (i.scroll && i.scroll instanceof n) return t.scrollTo(i.scroll);
				if (i.stop) return t.stop();
				if (i.destroy) return t.destroy();
				if (i.flash) return t.flash()
			}
			return t.reset()
		})
	}, n.fn.nanoScroller.Constructor = a
}),
function (s, l) {
	l.namespace(l, "common.widget.rssdisplay");
	var i = [];

	function n(t) {
		var o, i, n = this,
			r = {},
			a = {
				feedurl: "",
				limit: 5,
				newwindow: !1,
				externalicon: !1
			};
		n.destroy = function () {
			return o.replaceWith(i), i
		}, n.init = function (e) {
			Math.floor(999999 * Math.random() + 1);
			o = s(e), i = o.clone(!0), o.data("widget", n), s.extend(r, a, o.data() || {}, t), "" === r.feedurl && window.console.error("v18: RSS display widget is missing required feedurl parameter.");
			s.ajax({
				url: "https://api.www.s81c.com/web-platform/feedtojson/?url=" + encodeURIComponent(r.feedurl) + "&limit=" + r.limit,
				dataType: "json",
				success: function (e) {
					! function (e) {
						var t = "",
							i = !0 === r.externalicon ? "ibm-external-link" : "ibm-forward-link",
							n = !0 === r.newwindow ? ' target="_blank"' : "";
						if (!e || !e.feedItems) return window.console.warn("v18: The service was unable to return data for the RSS url: " + r.feedurl, " It returned: ", e);
						s.each(e.feedItems, function () {
							t += '<li><a class="' + i + '" href="' + this.link + '"' + n + ">" + this.title + "</a></li>"
						}), t = '<ul class="ibm-link-list">' + t + "</ul>", o.html(t), l.common.widget.manager.dispatchInitEvent(o[0])
					}(e)
				}
			})
		}
	}
	s.fn.rssdisplay = function (t) {
		return this.each(function () {
			var e;
			(e = new n(t), i.push(e), e).init(this)
		})
	}
}(jQuery, IBMCore),
function (d, u) {
	u.namespace(u, "common.widget.setsameheight");
	var i = [];

	function n(t) {
		var r, a, i = this,
			s = {},
			n = {
				always: !0,
				alwaystallest: !1,
				excludesmallgrid: !0
			},
			o = !1,
			l = Math.floor(999 * Math.random() + 1);

		function c(e) {
			var i = 0,
				t = r.find(s.items),
				n = u.common.util.getCurrentGridSize(),
				o = !(!e && !s.always);
			(0 === n || a !== n || o) && (a = n, t.each(function () {
				d(this).height("auto");
				var e = d(this).height(),
					t = !1;
				d(this).find(".ibm-card__bottom").each(function () {
					t = !0, e += d(this).height()
				}), i < e && (i = e), 0 === n && t && d(this).height(e + "px")
			}), (0 !== n || 0 === n && o && !s.excludesmallgrid) && t.height(i))
		}
		i.destroy = function () {
			return clearInterval(r.data("widget").scrollInterval), r.find(s.items).height("auto"), d(window).off(".setsameheight." + l), r
		}, i.init = function (e) {
			(r = d(e)).data("widget", i), (s = d.extend({}, n, r.data() || {}, t)).alwaystallest && (s.always = !0, s.excludesmallgrid = !0);
			d(window).on("orientationchange.setsameheight." + l, function () {
				c(!0)
			}), d(window).on("resize.setsameheight." + l, function () {
				o = !0
			}), i.scrollInterval = setInterval(function () {
				o && (o = !1, c())
			}, 50), c(!0), r.imagesLoaded(function () {
				d.browser.safari ? setTimeout(function () {
					c(!0)
				}, 200) : setTimeout(function () {
					c(!0)
				}, 0), u.common.widget.manager.dispatchInitEvent(r[0]), r.addClass("ibm-sameheight-processed")
			})
		}, i.adjustHeights = c
	}
	d.fn.setsameheight = function (t) {
		return this.each(function () {
			var e;
			(e = new n(t), i.push(e), e).init(this)
		})
	}
}(jQuery, IBMCore),
function (s, l) {
	l.namespace(l, "common.widget.scrollable");
	var i = [];

	function n(t) {
		var i, n, o, r = this,
			a = {
				alwaysVisible: !0
			};
		r.destroy = function () {
			return i.nanoScroller({
				destroy: !0
			}), i.replaceWith(n), n
		}, r.init = function (e) {
			i = s(e), n = i.clone(!0), i.data("widget", r);
			try {
				i.css({
					height: i.data("height") + "px"
				}), o = s.extend({}, a, i.data() || {}, t), i.addClass("nano").wrapInner('<div class="nano-content"></div>'), i.nanoScroller(o), l.common.widget.manager.dispatchInitEvent(i[0])
			} catch (e) {
				throw e
			}
		}
	}
	s.fn.scrollable = function (t) {
		return this.each(function () {
			var e;
			(e = new n(t), i.push(e), e).init(this)
		})
	}
}(jQuery, IBMCore),
function (i) {
	"function" == typeof define && define.amd ? define(["jquery"], i) : "object" == typeof module && module.exports ? module.exports = function (e, t) {
		return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), i(t), t
	} : i(jQuery)
}(function (i) {
	var e = function () {
			if (i && i.fn && i.fn.select2 && i.fn.select2.amd) var e = i.fn.select2.amd;
			var t, o, c;
			return e && e.requirejs || (e ? o = e : e = {}, function (p) {
				var r, a, m, h, f = {},
					g = {},
					v = {},
					b = {},
					i = Object.prototype.hasOwnProperty,
					n = [].slice,
					y = /\.js$/;

				function w(e, t) {
					return i.call(e, t)
				}

				function s(e, t) {
					var i, n, o, r, a, s, l, c, d, u, p, m = t && t.split("/"),
						h = v.map,
						f = h && h["*"] || {};
					if (e && "." === e.charAt(0))
						if (t) {
							for (a = (e = e.split("/")).length - 1, v.nodeIdCompat && y.test(e[a]) && (e[a] = e[a].replace(y, "")), e = m.slice(0, m.length - 1).concat(e), d = 0; d < e.length; d += 1)
								if ("." === (p = e[d])) e.splice(d, 1), d -= 1;
								else if (".." === p) {
								if (1 === d && (".." === e[2] || ".." === e[0])) break;
								0 < d && (e.splice(d - 1, 2), d -= 2)
							}
							e = e.join("/")
						} else 0 === e.indexOf("./") && (e = e.substring(2));
					if ((m || f) && h) {
						for (d = (i = e.split("/")).length; 0 < d; d -= 1) {
							if (n = i.slice(0, d).join("/"), m)
								for (u = m.length; 0 < u; u -= 1)
									if ((o = h[m.slice(0, u).join("/")]) && (o = o[n])) {
										r = o, s = d;
										break
									}
							if (r) break;
							!l && f && f[n] && (l = f[n], c = d)
						}!r && l && (r = l, s = c), r && (i.splice(0, s, r), e = i.join("/"))
					}
					return e
				}

				function k(t, i) {
					return function () {
						var e = n.call(arguments, 0);
						return "string" != typeof e[0] && 1 === e.length && e.push(null), a.apply(p, e.concat([t, i]))
					}
				}

				function C(t) {
					return function (e) {
						f[t] = e
					}
				}

				function x(e) {
					if (w(g, e)) {
						var t = g[e];
						delete g[e], b[e] = !0, r.apply(p, t)
					}
					if (!w(f, e) && !w(b, e)) throw new Error("No " + e);
					return f[e]
				}

				function l(e) {
					var t, i = e ? e.indexOf("!") : -1;
					return -1 < i && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
				}
				m = function (e, t) {
					var i, n, o = l(e),
						r = o[0];
					return e = o[1], r && (i = x(r = s(r, t))), r ? e = i && i.normalize ? i.normalize(e, (n = t, function (e) {
						return s(e, n)
					})) : s(e, t) : (r = (o = l(e = s(e, t)))[0], e = o[1], r && (i = x(r))), {
						f: r ? r + "!" + e : e,
						n: e,
						pr: r,
						p: i
					}
				}, h = {
					require: function (e) {
						return k(e)
					},
					exports: function (e) {
						var t = f[e];
						return void 0 !== t ? t : f[e] = {}
					},
					module: function (e) {
						return {
							id: e,
							uri: "",
							exports: f[e],
							config: (t = e, function () {
								return v && v.config && v.config[t] || {}
							})
						};
						var t
					}
				}, r = function (e, t, i, n) {
					var o, r, a, s, l, c, d = [],
						u = typeof i;
					if (n = n || e, "undefined" === u || "function" === u) {
						for (t = !t.length && i.length ? ["require", "exports", "module"] : t, l = 0; l < t.length; l += 1)
							if ("require" === (r = (s = m(t[l], n)).f)) d[l] = h.require(e);
							else if ("exports" === r) d[l] = h.exports(e), c = !0;
						else if ("module" === r) o = d[l] = h.module(e);
						else if (w(f, r) || w(g, r) || w(b, r)) d[l] = x(r);
						else {
							if (!s.p) throw new Error(e + " missing " + r);
							s.p.load(s.n, k(n, !0), C(r), {}), d[l] = f[r]
						}
						a = i ? i.apply(f[e], d) : void 0, e && (o && o.exports !== p && o.exports !== f[e] ? f[e] = o.exports : a === p && c || (f[e] = a))
					} else e && (f[e] = i)
				}, t = o = a = function (e, t, i, n, o) {
					if ("string" == typeof e) return h[e] ? h[e](t) : x(m(e, t).f);
					if (!e.splice) {
						if ((v = e).deps && a(v.deps, v.callback), !t) return;
						t.splice ? (e = t, t = i, i = null) : e = p
					}
					return t = t || function () {}, "function" == typeof i && (i = n, n = o), n ? r(p, e, t, i) : setTimeout(function () {
						r(p, e, t, i)
					}, 4), a
				}, a.config = function (e) {
					return a(e)
				}, t._defined = f, (c = function (e, t, i) {
					if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
					t.splice || (i = t, t = []), w(f, e) || w(g, e) || (g[e] = [e, t, i])
				}).amd = {
					jQuery: !0
				}
			}(), e.requirejs = t, e.require = o, e.define = c), e.define("almond", function () {}), e.define("jquery", [], function () {
				var e = i || $;
				return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
			}), e.define("select2/utils", ["jquery"], function (r) {
				var e = {};

				function d(e) {
					var t = e.prototype,
						i = [];
					for (var n in t) {
						"function" == typeof t[n] && ("constructor" !== n && i.push(n))
					}
					return i
				}
				e.Extend = function (e, t) {
					var i = {}.hasOwnProperty;

					function n() {
						this.constructor = e
					}
					for (var o in t) i.call(t, o) && (e[o] = t[o]);
					return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
				}, e.Decorate = function (n, o) {
					var e = d(o),
						t = d(n);

					function r() {
						var e = Array.prototype.unshift,
							t = o.prototype.constructor.length,
							i = n.prototype.constructor;
						0 < t && (e.call(arguments, n.prototype.constructor), i = o.prototype.constructor), i.apply(this, arguments)
					}
					o.displayName = n.displayName, r.prototype = new function () {
						this.constructor = r
					};
					for (var i = 0; i < t.length; i++) {
						var a = t[i];
						r.prototype[a] = n.prototype[a]
					}
					for (var s = function (e) {
							var t = function () {};
							e in r.prototype && (t = r.prototype[e]);
							var i = o.prototype[e];
							return function () {
								return Array.prototype.unshift.call(arguments, t), i.apply(this, arguments)
							}
						}, l = 0; l < e.length; l++) {
						var c = e[l];
						r.prototype[c] = s(c)
					}
					return r
				};
				var t = function () {
					this.listeners = {}
				};
				return t.prototype.on = function (e, t) {
					this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
				}, t.prototype.trigger = function (e) {
					var t = Array.prototype.slice,
						i = t.call(arguments, 1);
					this.listeners = this.listeners || {}, null == i && (i = []), 0 === i.length && i.push({}), (i[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
				}, t.prototype.invoke = function (e, t) {
					for (var i = 0, n = e.length; i < n; i++) e[i].apply(this, t)
				}, e.Observable = t, e.generateChars = function (e) {
					for (var t = "", i = 0; i < e; i++) {
						t += Math.floor(36 * Math.random()).toString(36)
					}
					return t
				}, e.bind = function (e, t) {
					return function () {
						e.apply(t, arguments)
					}
				}, e._convertData = function (e) {
					for (var t in e) {
						var i = t.split("-"),
							n = e;
						if (1 !== i.length) {
							for (var o = 0; o < i.length; o++) {
								var r = i[o];
								(r = r.substring(0, 1).toLowerCase() + r.substring(1)) in n || (n[r] = {}), o == i.length - 1 && (n[r] = e[t]), n = n[r]
							}
							delete e[t]
						}
					}
					return e
				}, e.hasScroll = function (e, t) {
					var i = r(t),
						n = t.style.overflowX,
						o = t.style.overflowY;
					return (n !== o || "hidden" !== o && "visible" !== o) && ("scroll" === n || "scroll" === o || (i.innerHeight() < t.scrollHeight || i.innerWidth() < t.scrollWidth))
				}, e.escapeMarkup = function (e) {
					var t = {
						"\\": "&#92;",
						"&": "&amp;",
						"<": "&lt;",
						">": "&gt;",
						'"': "&quot;",
						"'": "&#39;",
						"/": "&#47;"
					};
					return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
						return t[e]
					})
				}, e.appendMany = function (e, t) {
					if ("1.7" === r.fn.jquery.substr(0, 3)) {
						var i = r();
						r.map(t, function (e) {
							i = i.add(e)
						}), t = i
					}
					e.append(t)
				}, e
			}), e.define("select2/results", ["jquery", "./utils"], function (p, e) {
				function n(e, t, i) {
					this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this)
				}
				return e.Extend(n, e.Observable), n.prototype.render = function () {
					var e = p('<ul class="select2-results__options" role="tree"></ul>');
					return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e
				}, n.prototype.clear = function () {
					this.$results.empty()
				}, n.prototype.displayMessage = function (e) {
					var t = this.options.get("escapeMarkup");
					this.clear(), this.hideLoading();
					var i = p('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
						n = this.options.get("translations").get(e.message);
					i.append(t(n(e.args))), i[0].className += " select2-results__message", this.$results.append(i)
				}, n.prototype.hideMessages = function () {
					this.$results.find(".select2-results__message").remove()
				}, n.prototype.append = function (e) {
					this.hideLoading();
					var t = [];
					if (null != e.results && 0 !== e.results.length) {
						e.results = this.sort(e.results);
						for (var i = 0; i < e.results.length; i++) {
							var n = e.results[i],
								o = this.option(n);
							t.push(o)
						}
						this.$results.append(t)
					} else 0 === this.$results.children().length && this.trigger("results:message", {
						message: "noResults"
					})
				}, n.prototype.position = function (e, t) {
					t.find(".select2-results").append(e)
				}, n.prototype.sort = function (e) {
					return this.options.get("sorter")(e)
				}, n.prototype.highlightFirstItem = function () {
					var e = this.$results.find(".select2-results__option[aria-selected]"),
						t = e.filter("[aria-selected=true]");
					0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
				}, n.prototype.setClasses = function () {
					var t = this;
					this.data.current(function (e) {
						var n = p.map(e, function (e) {
							return e.id.toString()
						});
						t.$results.find(".select2-results__option[aria-selected]").each(function () {
							var e = p(this),
								t = p.data(this, "data"),
								i = "" + t.id;
							null != t.element && t.element.selected || null == t.element && -1 < p.inArray(i, n) ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
						})
					})
				}, n.prototype.showLoading = function (e) {
					this.hideLoading();
					var t = {
							disabled: !0,
							loading: !0,
							text: this.options.get("translations").get("searching")(e)
						},
						i = this.option(t);
					i.className += " loading-results", this.$results.prepend(i)
				}, n.prototype.hideLoading = function () {
					this.$results.find(".loading-results").remove()
				}, n.prototype.option = function (e) {
					var t = document.createElement("li");
					t.className = "select2-results__option";
					var i = {
						role: "treeitem",
						"aria-selected": "false"
					};
					for (var n in e.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == e.id && delete i["aria-selected"], null != e._resultId && (t.id = e._resultId), e.title && (t.title = e.title), e.children && (i.role = "group", i["aria-label"] = e.text, delete i["aria-selected"]), i) {
						var o = i[n];
						t.setAttribute(n, o)
					}
					if (e.children) {
						var r = p(t),
							a = document.createElement("strong");
						a.className = "select2-results__group";
						p(a);
						this.template(e, a);
						for (var s = [], l = 0; l < e.children.length; l++) {
							var c = e.children[l],
								d = this.option(c);
							s.push(d)
						}
						var u = p("<ul></ul>", {
							class: "select2-results__options select2-results__options--nested"
						});
						u.append(s), r.append(a), r.append(u)
					} else this.template(e, t);
					return p.data(t, "data", e), t
				}, n.prototype.bind = function (t, e) {
					var l = this,
						i = t.id + "-results";
					this.$results.attr("id", i), t.on("results:all", function (e) {
						l.clear(), l.append(e.data), t.isOpen() && (l.setClasses(), l.highlightFirstItem())
					}), t.on("results:append", function (e) {
						l.append(e.data), t.isOpen() && l.setClasses()
					}), t.on("query", function (e) {
						l.hideMessages(), l.showLoading(e)
					}), t.on("select", function () {
						t.isOpen() && (l.setClasses(), l.highlightFirstItem())
					}), t.on("unselect", function () {
						t.isOpen() && (l.setClasses(), l.highlightFirstItem())
					}), t.on("open", function () {
						l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible()
					}), t.on("close", function () {
						l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant")
					}), t.on("results:toggle", function () {
						var e = l.getHighlightedResults();
						0 !== e.length && e.trigger("mouseup")
					}), t.on("results:select", function () {
						var e = l.getHighlightedResults();
						if (0 !== e.length) {
							var t = e.data("data");
							"true" == e.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", {
								data: t
							})
						}
					}), t.on("results:previous", function () {
						var e = l.getHighlightedResults(),
							t = l.$results.find("[aria-selected]"),
							i = t.index(e);
						if (0 !== i) {
							var n = i - 1;
							0 === e.length && (n = 0);
							var o = t.eq(n);
							o.trigger("mouseenter");
							var r = l.$results.offset().top,
								a = o.offset().top,
								s = l.$results.scrollTop() + (a - r);
							0 === n ? l.$results.scrollTop(0) : a - r < 0 && l.$results.scrollTop(s)
						}
					}), t.on("results:next", function () {
						var e = l.getHighlightedResults(),
							t = l.$results.find("[aria-selected]"),
							i = t.index(e) + 1;
						if (!(i >= t.length)) {
							var n = t.eq(i);
							n.trigger("mouseenter");
							var o = l.$results.offset().top + l.$results.outerHeight(!1),
								r = n.offset().top + n.outerHeight(!1),
								a = l.$results.scrollTop() + r - o;
							0 === i ? l.$results.scrollTop(0) : o < r && l.$results.scrollTop(a)
						}
					}), t.on("results:focus", function (e) {
						e.element.addClass("select2-results__option--highlighted")
					}), t.on("results:message", function (e) {
						l.displayMessage(e)
					}), p.fn.mousewheel && this.$results.on("mousewheel", function (e) {
						var t = l.$results.scrollTop(),
							i = l.$results.get(0).scrollHeight - t + e.deltaY,
							n = 0 < e.deltaY && t - e.deltaY <= 0,
							o = e.deltaY < 0 && i <= l.$results.height();
						n ? (l.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : o && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), e.preventDefault(), e.stopPropagation())
					}), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (e) {
						var t = p(this),
							i = t.data("data");
						"true" !== t.attr("aria-selected") ? l.trigger("select", {
							originalEvent: e,
							data: i
						}) : l.options.get("multiple") ? l.trigger("unselect", {
							originalEvent: e,
							data: i
						}) : l.trigger("close", {})
					}), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (e) {
						var t = p(this).data("data");
						l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", {
							data: t,
							element: p(this)
						})
					})
				}, n.prototype.getHighlightedResults = function () {
					return this.$results.find(".select2-results__option--highlighted")
				}, n.prototype.destroy = function () {
					this.$results.remove()
				}, n.prototype.ensureHighlightVisible = function () {
					var e = this.getHighlightedResults();
					if (0 !== e.length) {
						var t = this.$results.find("[aria-selected]").index(e),
							i = this.$results.offset().top,
							n = e.offset().top,
							o = this.$results.scrollTop() + (n - i),
							r = n - i;
						o -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (r > this.$results.outerHeight() || r < 0) && this.$results.scrollTop(o)
					}
				}, n.prototype.template = function (e, t) {
					var i = this.options.get("templateResult"),
						n = this.options.get("escapeMarkup"),
						o = i(e, t);
					null == o ? t.style.display = "none" : "string" == typeof o ? t.innerHTML = n(o) : p(t).append(o)
				}, n
			}), e.define("select2/keys", [], function () {
				return {
					BACKSPACE: 8,
					TAB: 9,
					ENTER: 13,
					SHIFT: 16,
					CTRL: 17,
					ALT: 18,
					ESC: 27,
					SPACE: 32,
					PAGE_UP: 33,
					PAGE_DOWN: 34,
					END: 35,
					HOME: 36,
					LEFT: 37,
					UP: 38,
					RIGHT: 39,
					DOWN: 40,
					DELETE: 46
				}
			}), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (i, e, o) {
				function n(e, t) {
					this.$element = e, this.options = t, n.__super__.constructor.call(this)
				}
				return e.Extend(n, e.Observable), n.prototype.render = function () {
					var e = i('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
					return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e
				}, n.prototype.bind = function (e, t) {
					var i = this,
						n = (e.id, e.id + "-results");
					this.container = e, this.$selection.on("focus", function (e) {
						i.trigger("focus", e)
					}), this.$selection.on("blur", function (e) {
						i._handleBlur(e)
					}), this.$selection.on("keydown", function (e) {
						i.trigger("keypress", e), e.which === o.SPACE && e.preventDefault()
					}), e.on("results:focus", function (e) {
						i.$selection.attr("aria-activedescendant", e.data._resultId)
					}), e.on("selection:update", function (e) {
						i.update(e.data)
					}), e.on("open", function () {
						i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", n), i._attachCloseHandler(e)
					}), e.on("close", function () {
						i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.focus(), i._detachCloseHandler(e)
					}), e.on("enable", function () {
						i.$selection.attr("tabindex", i._tabindex)
					}), e.on("disable", function () {
						i.$selection.attr("tabindex", "-1")
					})
				}, n.prototype._handleBlur = function (e) {
					var t = this;
					window.setTimeout(function () {
						document.activeElement == t.$selection[0] || i.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e)
					}, 1)
				}, n.prototype._attachCloseHandler = function (e) {
					i(document.body).on("mousedown.select2." + e.id, function (e) {
						var t = i(e.target).closest(".select2");
						i(".select2.select2-container--open").each(function () {
							var e = i(this);
							this != t[0] && e.data("element").select2("close")
						})
					})
				}, n.prototype._detachCloseHandler = function (e) {
					i(document.body).off("mousedown.select2." + e.id)
				}, n.prototype.position = function (e, t) {
					t.find(".selection").append(e)
				}, n.prototype.destroy = function () {
					this._detachCloseHandler(this.container)
				}, n.prototype.update = function (e) {
					throw new Error("The `update` method must be defined in child classes.")
				}, n
			}), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, i, n) {
				function o() {
					o.__super__.constructor.apply(this, arguments)
				}
				return i.Extend(o, t), o.prototype.render = function () {
					var e = o.__super__.render.call(this);
					return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
				}, o.prototype.bind = function (t, e) {
					var i = this;
					o.__super__.bind.apply(this, arguments);
					var n = t.id + "-container";
					this.$selection.find(".select2-selection__rendered").attr("id", n), this.$selection.attr("aria-labelledby", n), this.$selection.on("mousedown", function (e) {
						1 === e.which && i.trigger("toggle", {
							originalEvent: e
						})
					}), this.$selection.on("focus", function (e) {}), this.$selection.on("blur", function (e) {}), t.on("focus", function (e) {
						t.isOpen() || i.$selection.focus()
					}), t.on("selection:update", function (e) {
						i.update(e.data)
					})
				}, o.prototype.clear = function () {
					this.$selection.find(".select2-selection__rendered").empty()
				}, o.prototype.display = function (e, t) {
					var i = this.options.get("templateSelection");
					return this.options.get("escapeMarkup")(i(e, t))
				}, o.prototype.selectionContainer = function () {
					return e("<span></span>")
				}, o.prototype.update = function (e) {
					if (0 !== e.length) {
						var t = e[0],
							i = this.$selection.find(".select2-selection__rendered"),
							n = this.display(t, i);
						i.empty().append(n), i.prop("title", t.title || t.text)
					} else this.clear()
				}, o
			}), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (n, e, s) {
				function o(e, t) {
					o.__super__.constructor.apply(this, arguments)
				}
				return s.Extend(o, e), o.prototype.render = function () {
					var e = o.__super__.render.call(this);
					return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
				}, o.prototype.bind = function (e, t) {
					var i = this;
					o.__super__.bind.apply(this, arguments), this.$selection.on("click", function (e) {
						i.trigger("toggle", {
							originalEvent: e
						})
					}), this.$selection.on("click", ".select2-selection__choice__remove", function (e) {
						if (!i.options.get("disabled")) {
							var t = n(this).parent().data("data");
							i.trigger("unselect", {
								originalEvent: e,
								data: t
							})
						}
					})
				}, o.prototype.clear = function () {
					this.$selection.find(".select2-selection__rendered").empty()
				}, o.prototype.display = function (e, t) {
					var i = this.options.get("templateSelection");
					return this.options.get("escapeMarkup")(i(e, t))
				}, o.prototype.selectionContainer = function () {
					return n('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
				}, o.prototype.update = function (e) {
					if (this.clear(), 0 !== e.length) {
						for (var t = [], i = 0; i < e.length; i++) {
							var n = e[i],
								o = this.selectionContainer(),
								r = this.display(n, o);
							o.append(r), o.prop("title", n.title || n.text), o.data("data", n), t.push(o)
						}
						var a = this.$selection.find(".select2-selection__rendered");
						s.appendMany(a, t)
					}
				}, o
			}), e.define("select2/selection/placeholder", ["../utils"], function (e) {
				function t(e, t, i) {
					this.placeholder = this.normalizePlaceholder(i.get("placeholder")), e.call(this, t, i)
				}
				return t.prototype.normalizePlaceholder = function (e, t) {
					return "string" == typeof t && (t = {
						id: "",
						text: t
					}), t
				}, t.prototype.createPlaceholder = function (e, t) {
					var i = this.selectionContainer();
					return i.html(this.display(t)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i
				}, t.prototype.update = function (e, t) {
					var i = 1 == t.length && t[0].id != this.placeholder.id;
					if (1 < t.length || i) return e.call(this, t);
					this.clear();
					var n = this.createPlaceholder(this.placeholder);
					this.$selection.find(".select2-selection__rendered").append(n)
				}, t
			}), e.define("select2/selection/allowClear", ["jquery", "../keys"], function (n, o) {
				function e() {}
				return e.prototype.bind = function (e, t, i) {
					var n = this;
					e.call(this, t, i), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
						n._handleClear(e)
					}), t.on("keypress", function (e) {
						n._handleKeyboardClear(e, t)
					})
				}, e.prototype._handleClear = function (e, t) {
					if (!this.options.get("disabled")) {
						var i = this.$selection.find(".select2-selection__clear");
						if (0 !== i.length) {
							t.stopPropagation();
							for (var n = i.data("data"), o = 0; o < n.length; o++) {
								var r = {
									data: n[o]
								};
								if (this.trigger("unselect", r), r.prevented) return
							}
							this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
						}
					}
				}, e.prototype._handleKeyboardClear = function (e, t, i) {
					i.isOpen() || t.which != o.DELETE && t.which != o.BACKSPACE || this._handleClear(t)
				}, e.prototype.update = function (e, t) {
					if (e.call(this, t), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length)) {
						var i = n('<span class="select2-selection__clear">&times;</span>');
						i.data("data", t), this.$selection.find(".select2-selection__rendered").prepend(i)
					}
				}, e
			}), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (n, e, a) {
				function t(e, t, i) {
					e.call(this, t, i)
				}
				return t.prototype.render = function (e) {
					var t = n('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
					this.$searchContainer = t, this.$search = t.find("input");
					var i = e.call(this);
					return this._transferTabIndex(), i
				}, t.prototype.bind = function (e, t, i) {
					var n = this;
					e.call(this, t, i), t.on("open", function () {
						n.$search.trigger("focus")
					}), t.on("close", function () {
						n.$search.val(""), n.$search.removeAttr("aria-activedescendant"), n.$search.trigger("focus")
					}), t.on("enable", function () {
						n.$search.prop("disabled", !1), n._transferTabIndex()
					}), t.on("disable", function () {
						n.$search.prop("disabled", !0)
					}), t.on("focus", function (e) {
						n.$search.trigger("focus")
					}), t.on("results:focus", function (e) {
						n.$search.attr("aria-activedescendant", e.id)
					}), this.$selection.on("focusin", ".select2-search--inline", function (e) {
						n.trigger("focus", e)
					}), this.$selection.on("focusout", ".select2-search--inline", function (e) {
						n._handleBlur(e)
					}), this.$selection.on("keydown", ".select2-search--inline", function (e) {
						if (e.stopPropagation(), n.trigger("keypress", e), n._keyUpPrevented = e.isDefaultPrevented(), e.which === a.BACKSPACE && "" === n.$search.val()) {
							var t = n.$searchContainer.prev(".select2-selection__choice");
							if (0 < t.length) {
								var i = t.data("data");
								n.searchRemoveChoice(i), e.preventDefault()
							}
						}
					});
					var o = document.documentMode,
						r = o && o <= 11;
					this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
						r ? n.$selection.off("input.search input.searchcheck") : n.$selection.off("keyup.search")
					}), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
						if (r && "input" === e.type) n.$selection.off("input.search input.searchcheck");
						else {
							var t = e.which;
							t != a.SHIFT && t != a.CTRL && t != a.ALT && t != a.TAB && n.handleSearch(e)
						}
					})
				}, t.prototype._transferTabIndex = function (e) {
					this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
				}, t.prototype.createPlaceholder = function (e, t) {
					this.$search.attr("placeholder", t.text)
				}, t.prototype.update = function (e, t) {
					var i = this.$search[0] == document.activeElement;
					this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), i && this.$search.focus()
				}, t.prototype.handleSearch = function () {
					if (this.resizeSearch(), !this._keyUpPrevented) {
						var e = this.$search.val();
						this.trigger("query", {
							term: e
						})
					}
					this._keyUpPrevented = !1
				}, t.prototype.searchRemoveChoice = function (e, t) {
					this.trigger("unselect", {
						data: t
					}), this.$search.val(t.text), this.handleSearch()
				}, t.prototype.resizeSearch = function () {
					this.$search.css("width", "25px");
					var e = "";
					"" !== this.$search.attr("placeholder") ? e = this.$selection.find(".select2-selection__rendered").innerWidth() : e = .75 * (this.$search.val().length + 1) + "em";
					this.$search.css("width", e)
				}, t
			}), e.define("select2/selection/eventRelay", ["jquery"], function (a) {
				function e() {}
				return e.prototype.bind = function (e, t, i) {
					var n = this,
						o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
						r = ["opening", "closing", "selecting", "unselecting"];
					e.call(this, t, i), t.on("*", function (e, t) {
						if (-1 !== a.inArray(e, o)) {
							t = t || {};
							var i = a.Event("select2:" + e, {
								params: t
							});
							n.$element.trigger(i), -1 !== a.inArray(e, r) && (t.prevented = i.isDefaultPrevented())
						}
					})
				}, e
			}), e.define("select2/translation", ["jquery", "require"], function (t, i) {
				function n(e) {
					this.dict = e || {}
				}
				return n.prototype.all = function () {
					return this.dict
				}, n.prototype.get = function (e) {
					return this.dict[e]
				}, n.prototype.extend = function (e) {
					this.dict = t.extend({}, e.all(), this.dict)
				}, n._cache = {}, n.loadPath = function (e) {
					if (!(e in n._cache)) {
						var t = i(e);
						n._cache[e] = t
					}
					return new n(n._cache[e])
				}, n
			}), e.define("select2/diacritics", [], function () {
				return {
					"Ⓐ": "A",
					"Ａ": "A",
					"À": "A",
					"Á": "A",
					"Â": "A",
					"Ầ": "A",
					"Ấ": "A",
					"Ẫ": "A",
					"Ẩ": "A",
					"Ã": "A",
					"Ā": "A",
					"Ă": "A",
					"Ằ": "A",
					"Ắ": "A",
					"Ẵ": "A",
					"Ẳ": "A",
					"Ȧ": "A",
					"Ǡ": "A",
					"Ä": "A",
					"Ǟ": "A",
					"Ả": "A",
					"Å": "A",
					"Ǻ": "A",
					"Ǎ": "A",
					"Ȁ": "A",
					"Ȃ": "A",
					"Ạ": "A",
					"Ậ": "A",
					"Ặ": "A",
					"Ḁ": "A",
					"Ą": "A",
					"Ⱥ": "A",
					"Ɐ": "A",
					"Ꜳ": "AA",
					"Æ": "AE",
					"Ǽ": "AE",
					"Ǣ": "AE",
					"Ꜵ": "AO",
					"Ꜷ": "AU",
					"Ꜹ": "AV",
					"Ꜻ": "AV",
					"Ꜽ": "AY",
					"Ⓑ": "B",
					"Ｂ": "B",
					"Ḃ": "B",
					"Ḅ": "B",
					"Ḇ": "B",
					"Ƀ": "B",
					"Ƃ": "B",
					"Ɓ": "B",
					"Ⓒ": "C",
					"Ｃ": "C",
					"Ć": "C",
					"Ĉ": "C",
					"Ċ": "C",
					"Č": "C",
					"Ç": "C",
					"Ḉ": "C",
					"Ƈ": "C",
					"Ȼ": "C",
					"Ꜿ": "C",
					"Ⓓ": "D",
					"Ｄ": "D",
					"Ḋ": "D",
					"Ď": "D",
					"Ḍ": "D",
					"Ḑ": "D",
					"Ḓ": "D",
					"Ḏ": "D",
					"Đ": "D",
					"Ƌ": "D",
					"Ɗ": "D",
					"Ɖ": "D",
					"Ꝺ": "D",
					"Ǳ": "DZ",
					"Ǆ": "DZ",
					"ǲ": "Dz",
					"ǅ": "Dz",
					"Ⓔ": "E",
					"Ｅ": "E",
					"È": "E",
					"É": "E",
					"Ê": "E",
					"Ề": "E",
					"Ế": "E",
					"Ễ": "E",
					"Ể": "E",
					"Ẽ": "E",
					"Ē": "E",
					"Ḕ": "E",
					"Ḗ": "E",
					"Ĕ": "E",
					"Ė": "E",
					"Ë": "E",
					"Ẻ": "E",
					"Ě": "E",
					"Ȅ": "E",
					"Ȇ": "E",
					"Ẹ": "E",
					"Ệ": "E",
					"Ȩ": "E",
					"Ḝ": "E",
					"Ę": "E",
					"Ḙ": "E",
					"Ḛ": "E",
					"Ɛ": "E",
					"Ǝ": "E",
					"Ⓕ": "F",
					"Ｆ": "F",
					"Ḟ": "F",
					"Ƒ": "F",
					"Ꝼ": "F",
					"Ⓖ": "G",
					"Ｇ": "G",
					"Ǵ": "G",
					"Ĝ": "G",
					"Ḡ": "G",
					"Ğ": "G",
					"Ġ": "G",
					"Ǧ": "G",
					"Ģ": "G",
					"Ǥ": "G",
					"Ɠ": "G",
					"Ꞡ": "G",
					"Ᵹ": "G",
					"Ꝿ": "G",
					"Ⓗ": "H",
					"Ｈ": "H",
					"Ĥ": "H",
					"Ḣ": "H",
					"Ḧ": "H",
					"Ȟ": "H",
					"Ḥ": "H",
					"Ḩ": "H",
					"Ḫ": "H",
					"Ħ": "H",
					"Ⱨ": "H",
					"Ⱶ": "H",
					"Ɥ": "H",
					"Ⓘ": "I",
					"Ｉ": "I",
					"Ì": "I",
					"Í": "I",
					"Î": "I",
					"Ĩ": "I",
					"Ī": "I",
					"Ĭ": "I",
					"İ": "I",
					"Ï": "I",
					"Ḯ": "I",
					"Ỉ": "I",
					"Ǐ": "I",
					"Ȉ": "I",
					"Ȋ": "I",
					"Ị": "I",
					"Į": "I",
					"Ḭ": "I",
					"Ɨ": "I",
					"Ⓙ": "J",
					"Ｊ": "J",
					"Ĵ": "J",
					"Ɉ": "J",
					"Ⓚ": "K",
					"Ｋ": "K",
					"Ḱ": "K",
					"Ǩ": "K",
					"Ḳ": "K",
					"Ķ": "K",
					"Ḵ": "K",
					"Ƙ": "K",
					"Ⱪ": "K",
					"Ꝁ": "K",
					"Ꝃ": "K",
					"Ꝅ": "K",
					"Ꞣ": "K",
					"Ⓛ": "L",
					"Ｌ": "L",
					"Ŀ": "L",
					"Ĺ": "L",
					"Ľ": "L",
					"Ḷ": "L",
					"Ḹ": "L",
					"Ļ": "L",
					"Ḽ": "L",
					"Ḻ": "L",
					"Ł": "L",
					"Ƚ": "L",
					"Ɫ": "L",
					"Ⱡ": "L",
					"Ꝉ": "L",
					"Ꝇ": "L",
					"Ꞁ": "L",
					"Ǉ": "LJ",
					"ǈ": "Lj",
					"Ⓜ": "M",
					"Ｍ": "M",
					"Ḿ": "M",
					"Ṁ": "M",
					"Ṃ": "M",
					"Ɱ": "M",
					"Ɯ": "M",
					"Ⓝ": "N",
					"Ｎ": "N",
					"Ǹ": "N",
					"Ń": "N",
					"Ñ": "N",
					"Ṅ": "N",
					"Ň": "N",
					"Ṇ": "N",
					"Ņ": "N",
					"Ṋ": "N",
					"Ṉ": "N",
					"Ƞ": "N",
					"Ɲ": "N",
					"Ꞑ": "N",
					"Ꞥ": "N",
					"Ǌ": "NJ",
					"ǋ": "Nj",
					"Ⓞ": "O",
					"Ｏ": "O",
					"Ò": "O",
					"Ó": "O",
					"Ô": "O",
					"Ồ": "O",
					"Ố": "O",
					"Ỗ": "O",
					"Ổ": "O",
					"Õ": "O",
					"Ṍ": "O",
					"Ȭ": "O",
					"Ṏ": "O",
					"Ō": "O",
					"Ṑ": "O",
					"Ṓ": "O",
					"Ŏ": "O",
					"Ȯ": "O",
					"Ȱ": "O",
					"Ö": "O",
					"Ȫ": "O",
					"Ỏ": "O",
					"Ő": "O",
					"Ǒ": "O",
					"Ȍ": "O",
					"Ȏ": "O",
					"Ơ": "O",
					"Ờ": "O",
					"Ớ": "O",
					"Ỡ": "O",
					"Ở": "O",
					"Ợ": "O",
					"Ọ": "O",
					"Ộ": "O",
					"Ǫ": "O",
					"Ǭ": "O",
					"Ø": "O",
					"Ǿ": "O",
					"Ɔ": "O",
					"Ɵ": "O",
					"Ꝋ": "O",
					"Ꝍ": "O",
					"Ƣ": "OI",
					"Ꝏ": "OO",
					"Ȣ": "OU",
					"Ⓟ": "P",
					"Ｐ": "P",
					"Ṕ": "P",
					"Ṗ": "P",
					"Ƥ": "P",
					"Ᵽ": "P",
					"Ꝑ": "P",
					"Ꝓ": "P",
					"Ꝕ": "P",
					"Ⓠ": "Q",
					"Ｑ": "Q",
					"Ꝗ": "Q",
					"Ꝙ": "Q",
					"Ɋ": "Q",
					"Ⓡ": "R",
					"Ｒ": "R",
					"Ŕ": "R",
					"Ṙ": "R",
					"Ř": "R",
					"Ȑ": "R",
					"Ȓ": "R",
					"Ṛ": "R",
					"Ṝ": "R",
					"Ŗ": "R",
					"Ṟ": "R",
					"Ɍ": "R",
					"Ɽ": "R",
					"Ꝛ": "R",
					"Ꞧ": "R",
					"Ꞃ": "R",
					"Ⓢ": "S",
					"Ｓ": "S",
					"ẞ": "S",
					"Ś": "S",
					"Ṥ": "S",
					"Ŝ": "S",
					"Ṡ": "S",
					"Š": "S",
					"Ṧ": "S",
					"Ṣ": "S",
					"Ṩ": "S",
					"Ș": "S",
					"Ş": "S",
					"Ȿ": "S",
					"Ꞩ": "S",
					"Ꞅ": "S",
					"Ⓣ": "T",
					"Ｔ": "T",
					"Ṫ": "T",
					"Ť": "T",
					"Ṭ": "T",
					"Ț": "T",
					"Ţ": "T",
					"Ṱ": "T",
					"Ṯ": "T",
					"Ŧ": "T",
					"Ƭ": "T",
					"Ʈ": "T",
					"Ⱦ": "T",
					"Ꞇ": "T",
					"Ꜩ": "TZ",
					"Ⓤ": "U",
					"Ｕ": "U",
					"Ù": "U",
					"Ú": "U",
					"Û": "U",
					"Ũ": "U",
					"Ṹ": "U",
					"Ū": "U",
					"Ṻ": "U",
					"Ŭ": "U",
					"Ü": "U",
					"Ǜ": "U",
					"Ǘ": "U",
					"Ǖ": "U",
					"Ǚ": "U",
					"Ủ": "U",
					"Ů": "U",
					"Ű": "U",
					"Ǔ": "U",
					"Ȕ": "U",
					"Ȗ": "U",
					"Ư": "U",
					"Ừ": "U",
					"Ứ": "U",
					"Ữ": "U",
					"Ử": "U",
					"Ự": "U",
					"Ụ": "U",
					"Ṳ": "U",
					"Ų": "U",
					"Ṷ": "U",
					"Ṵ": "U",
					"Ʉ": "U",
					"Ⓥ": "V",
					"Ｖ": "V",
					"Ṽ": "V",
					"Ṿ": "V",
					"Ʋ": "V",
					"Ꝟ": "V",
					"Ʌ": "V",
					"Ꝡ": "VY",
					"Ⓦ": "W",
					"Ｗ": "W",
					"Ẁ": "W",
					"Ẃ": "W",
					"Ŵ": "W",
					"Ẇ": "W",
					"Ẅ": "W",
					"Ẉ": "W",
					"Ⱳ": "W",
					"Ⓧ": "X",
					"Ｘ": "X",
					"Ẋ": "X",
					"Ẍ": "X",
					"Ⓨ": "Y",
					"Ｙ": "Y",
					"Ỳ": "Y",
					"Ý": "Y",
					"Ŷ": "Y",
					"Ỹ": "Y",
					"Ȳ": "Y",
					"Ẏ": "Y",
					"Ÿ": "Y",
					"Ỷ": "Y",
					"Ỵ": "Y",
					"Ƴ": "Y",
					"Ɏ": "Y",
					"Ỿ": "Y",
					"Ⓩ": "Z",
					"Ｚ": "Z",
					"Ź": "Z",
					"Ẑ": "Z",
					"Ż": "Z",
					"Ž": "Z",
					"Ẓ": "Z",
					"Ẕ": "Z",
					"Ƶ": "Z",
					"Ȥ": "Z",
					"Ɀ": "Z",
					"Ⱬ": "Z",
					"Ꝣ": "Z",
					"ⓐ": "a",
					"ａ": "a",
					"ẚ": "a",
					"à": "a",
					"á": "a",
					"â": "a",
					"ầ": "a",
					"ấ": "a",
					"ẫ": "a",
					"ẩ": "a",
					"ã": "a",
					"ā": "a",
					"ă": "a",
					"ằ": "a",
					"ắ": "a",
					"ẵ": "a",
					"ẳ": "a",
					"ȧ": "a",
					"ǡ": "a",
					"ä": "a",
					"ǟ": "a",
					"ả": "a",
					"å": "a",
					"ǻ": "a",
					"ǎ": "a",
					"ȁ": "a",
					"ȃ": "a",
					"ạ": "a",
					"ậ": "a",
					"ặ": "a",
					"ḁ": "a",
					"ą": "a",
					"ⱥ": "a",
					"ɐ": "a",
					"ꜳ": "aa",
					"æ": "ae",
					"ǽ": "ae",
					"ǣ": "ae",
					"ꜵ": "ao",
					"ꜷ": "au",
					"ꜹ": "av",
					"ꜻ": "av",
					"ꜽ": "ay",
					"ⓑ": "b",
					"ｂ": "b",
					"ḃ": "b",
					"ḅ": "b",
					"ḇ": "b",
					"ƀ": "b",
					"ƃ": "b",
					"ɓ": "b",
					"ⓒ": "c",
					"ｃ": "c",
					"ć": "c",
					"ĉ": "c",
					"ċ": "c",
					"č": "c",
					"ç": "c",
					"ḉ": "c",
					"ƈ": "c",
					"ȼ": "c",
					"ꜿ": "c",
					"ↄ": "c",
					"ⓓ": "d",
					"ｄ": "d",
					"ḋ": "d",
					"ď": "d",
					"ḍ": "d",
					"ḑ": "d",
					"ḓ": "d",
					"ḏ": "d",
					"đ": "d",
					"ƌ": "d",
					"ɖ": "d",
					"ɗ": "d",
					"ꝺ": "d",
					"ǳ": "dz",
					"ǆ": "dz",
					"ⓔ": "e",
					"ｅ": "e",
					"è": "e",
					"é": "e",
					"ê": "e",
					"ề": "e",
					"ế": "e",
					"ễ": "e",
					"ể": "e",
					"ẽ": "e",
					"ē": "e",
					"ḕ": "e",
					"ḗ": "e",
					"ĕ": "e",
					"ė": "e",
					"ë": "e",
					"ẻ": "e",
					"ě": "e",
					"ȅ": "e",
					"ȇ": "e",
					"ẹ": "e",
					"ệ": "e",
					"ȩ": "e",
					"ḝ": "e",
					"ę": "e",
					"ḙ": "e",
					"ḛ": "e",
					"ɇ": "e",
					"ɛ": "e",
					"ǝ": "e",
					"ⓕ": "f",
					"ｆ": "f",
					"ḟ": "f",
					"ƒ": "f",
					"ꝼ": "f",
					"ⓖ": "g",
					"ｇ": "g",
					"ǵ": "g",
					"ĝ": "g",
					"ḡ": "g",
					"ğ": "g",
					"ġ": "g",
					"ǧ": "g",
					"ģ": "g",
					"ǥ": "g",
					"ɠ": "g",
					"ꞡ": "g",
					"ᵹ": "g",
					"ꝿ": "g",
					"ⓗ": "h",
					"ｈ": "h",
					"ĥ": "h",
					"ḣ": "h",
					"ḧ": "h",
					"ȟ": "h",
					"ḥ": "h",
					"ḩ": "h",
					"ḫ": "h",
					"ẖ": "h",
					"ħ": "h",
					"ⱨ": "h",
					"ⱶ": "h",
					"ɥ": "h",
					"ƕ": "hv",
					"ⓘ": "i",
					"ｉ": "i",
					"ì": "i",
					"í": "i",
					"î": "i",
					"ĩ": "i",
					"ī": "i",
					"ĭ": "i",
					"ï": "i",
					"ḯ": "i",
					"ỉ": "i",
					"ǐ": "i",
					"ȉ": "i",
					"ȋ": "i",
					"ị": "i",
					"į": "i",
					"ḭ": "i",
					"ɨ": "i",
					"ı": "i",
					"ⓙ": "j",
					"ｊ": "j",
					"ĵ": "j",
					"ǰ": "j",
					"ɉ": "j",
					"ⓚ": "k",
					"ｋ": "k",
					"ḱ": "k",
					"ǩ": "k",
					"ḳ": "k",
					"ķ": "k",
					"ḵ": "k",
					"ƙ": "k",
					"ⱪ": "k",
					"ꝁ": "k",
					"ꝃ": "k",
					"ꝅ": "k",
					"ꞣ": "k",
					"ⓛ": "l",
					"ｌ": "l",
					"ŀ": "l",
					"ĺ": "l",
					"ľ": "l",
					"ḷ": "l",
					"ḹ": "l",
					"ļ": "l",
					"ḽ": "l",
					"ḻ": "l",
					"ſ": "l",
					"ł": "l",
					"ƚ": "l",
					"ɫ": "l",
					"ⱡ": "l",
					"ꝉ": "l",
					"ꞁ": "l",
					"ꝇ": "l",
					"ǉ": "lj",
					"ⓜ": "m",
					"ｍ": "m",
					"ḿ": "m",
					"ṁ": "m",
					"ṃ": "m",
					"ɱ": "m",
					"ɯ": "m",
					"ⓝ": "n",
					"ｎ": "n",
					"ǹ": "n",
					"ń": "n",
					"ñ": "n",
					"ṅ": "n",
					"ň": "n",
					"ṇ": "n",
					"ņ": "n",
					"ṋ": "n",
					"ṉ": "n",
					"ƞ": "n",
					"ɲ": "n",
					"ŉ": "n",
					"ꞑ": "n",
					"ꞥ": "n",
					"ǌ": "nj",
					"ⓞ": "o",
					"ｏ": "o",
					"ò": "o",
					"ó": "o",
					"ô": "o",
					"ồ": "o",
					"ố": "o",
					"ỗ": "o",
					"ổ": "o",
					"õ": "o",
					"ṍ": "o",
					"ȭ": "o",
					"ṏ": "o",
					"ō": "o",
					"ṑ": "o",
					"ṓ": "o",
					"ŏ": "o",
					"ȯ": "o",
					"ȱ": "o",
					"ö": "o",
					"ȫ": "o",
					"ỏ": "o",
					"ő": "o",
					"ǒ": "o",
					"ȍ": "o",
					"ȏ": "o",
					"ơ": "o",
					"ờ": "o",
					"ớ": "o",
					"ỡ": "o",
					"ở": "o",
					"ợ": "o",
					"ọ": "o",
					"ộ": "o",
					"ǫ": "o",
					"ǭ": "o",
					"ø": "o",
					"ǿ": "o",
					"ɔ": "o",
					"ꝋ": "o",
					"ꝍ": "o",
					"ɵ": "o",
					"ƣ": "oi",
					"ȣ": "ou",
					"ꝏ": "oo",
					"ⓟ": "p",
					"ｐ": "p",
					"ṕ": "p",
					"ṗ": "p",
					"ƥ": "p",
					"ᵽ": "p",
					"ꝑ": "p",
					"ꝓ": "p",
					"ꝕ": "p",
					"ⓠ": "q",
					"ｑ": "q",
					"ɋ": "q",
					"ꝗ": "q",
					"ꝙ": "q",
					"ⓡ": "r",
					"ｒ": "r",
					"ŕ": "r",
					"ṙ": "r",
					"ř": "r",
					"ȑ": "r",
					"ȓ": "r",
					"ṛ": "r",
					"ṝ": "r",
					"ŗ": "r",
					"ṟ": "r",
					"ɍ": "r",
					"ɽ": "r",
					"ꝛ": "r",
					"ꞧ": "r",
					"ꞃ": "r",
					"ⓢ": "s",
					"ｓ": "s",
					"ß": "s",
					"ś": "s",
					"ṥ": "s",
					"ŝ": "s",
					"ṡ": "s",
					"š": "s",
					"ṧ": "s",
					"ṣ": "s",
					"ṩ": "s",
					"ș": "s",
					"ş": "s",
					"ȿ": "s",
					"ꞩ": "s",
					"ꞅ": "s",
					"ẛ": "s",
					"ⓣ": "t",
					"ｔ": "t",
					"ṫ": "t",
					"ẗ": "t",
					"ť": "t",
					"ṭ": "t",
					"ț": "t",
					"ţ": "t",
					"ṱ": "t",
					"ṯ": "t",
					"ŧ": "t",
					"ƭ": "t",
					"ʈ": "t",
					"ⱦ": "t",
					"ꞇ": "t",
					"ꜩ": "tz",
					"ⓤ": "u",
					"ｕ": "u",
					"ù": "u",
					"ú": "u",
					"û": "u",
					"ũ": "u",
					"ṹ": "u",
					"ū": "u",
					"ṻ": "u",
					"ŭ": "u",
					"ü": "u",
					"ǜ": "u",
					"ǘ": "u",
					"ǖ": "u",
					"ǚ": "u",
					"ủ": "u",
					"ů": "u",
					"ű": "u",
					"ǔ": "u",
					"ȕ": "u",
					"ȗ": "u",
					"ư": "u",
					"ừ": "u",
					"ứ": "u",
					"ữ": "u",
					"ử": "u",
					"ự": "u",
					"ụ": "u",
					"ṳ": "u",
					"ų": "u",
					"ṷ": "u",
					"ṵ": "u",
					"ʉ": "u",
					"ⓥ": "v",
					"ｖ": "v",
					"ṽ": "v",
					"ṿ": "v",
					"ʋ": "v",
					"ꝟ": "v",
					"ʌ": "v",
					"ꝡ": "vy",
					"ⓦ": "w",
					"ｗ": "w",
					"ẁ": "w",
					"ẃ": "w",
					"ŵ": "w",
					"ẇ": "w",
					"ẅ": "w",
					"ẘ": "w",
					"ẉ": "w",
					"ⱳ": "w",
					"ⓧ": "x",
					"ｘ": "x",
					"ẋ": "x",
					"ẍ": "x",
					"ⓨ": "y",
					"ｙ": "y",
					"ỳ": "y",
					"ý": "y",
					"ŷ": "y",
					"ỹ": "y",
					"ȳ": "y",
					"ẏ": "y",
					"ÿ": "y",
					"ỷ": "y",
					"ẙ": "y",
					"ỵ": "y",
					"ƴ": "y",
					"ɏ": "y",
					"ỿ": "y",
					"ⓩ": "z",
					"ｚ": "z",
					"ź": "z",
					"ẑ": "z",
					"ż": "z",
					"ž": "z",
					"ẓ": "z",
					"ẕ": "z",
					"ƶ": "z",
					"ȥ": "z",
					"ɀ": "z",
					"ⱬ": "z",
					"ꝣ": "z",
					"Ά": "Α",
					"Έ": "Ε",
					"Ή": "Η",
					"Ί": "Ι",
					"Ϊ": "Ι",
					"Ό": "Ο",
					"Ύ": "Υ",
					"Ϋ": "Υ",
					"Ώ": "Ω",
					"ά": "α",
					"έ": "ε",
					"ή": "η",
					"ί": "ι",
					"ϊ": "ι",
					"ΐ": "ι",
					"ό": "ο",
					"ύ": "υ",
					"ϋ": "υ",
					"ΰ": "υ",
					"ω": "ω",
					"ς": "σ"
				}
			}), e.define("select2/data/base", ["../utils"], function (n) {
				function i(e, t) {
					i.__super__.constructor.call(this)
				}
				return n.Extend(i, n.Observable), i.prototype.current = function (e) {
					throw new Error("The `current` method must be defined in child classes.")
				}, i.prototype.query = function (e, t) {
					throw new Error("The `query` method must be defined in child classes.")
				}, i.prototype.bind = function (e, t) {}, i.prototype.destroy = function () {}, i.prototype.generateResultId = function (e, t) {
					var i = e.id + "-result-";
					return i += n.generateChars(4), null != t.id ? i += "-" + t.id.toString() : i += "-" + n.generateChars(4), i
				}, i
			}), e.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, t, s) {
				function i(e, t) {
					this.$element = e, this.options = t, i.__super__.constructor.call(this)
				}
				return t.Extend(i, e), i.prototype.current = function (e) {
					var i = [],
						n = this;
					this.$element.find(":selected").each(function () {
						var e = s(this),
							t = n.item(e);
						i.push(t)
					}), e(i)
				}, i.prototype.select = function (o) {
					var r = this;
					if (o.selected = !0, s(o.element).is("option")) return o.element.selected = !0, void this.$element.trigger("change");
					if (this.$element.prop("multiple")) this.current(function (e) {
						var t = [];
						(o = [o]).push.apply(o, e);
						for (var i = 0; i < o.length; i++) {
							var n = o[i].id; - 1 === s.inArray(n, t) && t.push(n)
						}
						r.$element.val(t), r.$element.trigger("change")
					});
					else {
						var e = o.id;
						this.$element.val(e), this.$element.trigger("change")
					}
				}, i.prototype.unselect = function (o) {
					var r = this;
					if (this.$element.prop("multiple")) {
						if (o.selected = !1, s(o.element).is("option")) return o.element.selected = !1, void this.$element.trigger("change");
						this.current(function (e) {
							for (var t = [], i = 0; i < e.length; i++) {
								var n = e[i].id;
								n !== o.id && -1 === s.inArray(n, t) && t.push(n)
							}
							r.$element.val(t), r.$element.trigger("change")
						})
					}
				}, i.prototype.bind = function (e, t) {
					var i = this;
					(this.container = e).on("select", function (e) {
						i.select(e.data)
					}), e.on("unselect", function (e) {
						i.unselect(e.data)
					})
				}, i.prototype.destroy = function () {
					this.$element.find("*").each(function () {
						s.removeData(this, "data")
					})
				}, i.prototype.query = function (n, e) {
					var o = [],
						r = this;
					this.$element.children().each(function () {
						var e = s(this);
						if (e.is("option") || e.is("optgroup")) {
							var t = r.item(e),
								i = r.matches(n, t);
							null !== i && o.push(i)
						}
					}), e({
						results: o
					})
				}, i.prototype.addOptions = function (e) {
					t.appendMany(this.$element, e)
				}, i.prototype.option = function (e) {
					var t;
					e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, void 0 !== e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
					var i = s(t),
						n = this._normalizeItem(e);
					return n.element = t, s.data(t, "data", n), i
				}, i.prototype.item = function (e) {
					var t = {};
					if (null != (t = s.data(e[0], "data"))) return t;
					if (e.is("option")) t = {
						id: e.val(),
						text: e.text(),
						disabled: e.prop("disabled"),
						selected: e.prop("selected"),
						title: e.prop("title")
					};
					else if (e.is("optgroup")) {
						t = {
							text: e.prop("label"),
							children: [],
							title: e.prop("title")
						};
						for (var i = e.children("option"), n = [], o = 0; o < i.length; o++) {
							var r = s(i[o]),
								a = this.item(r);
							n.push(a)
						}
						t.children = n
					}
					return (t = this._normalizeItem(t)).element = e[0], s.data(e[0], "data", t), t
				}, i.prototype._normalizeItem = function (e) {
					s.isPlainObject(e) || (e = {
						id: e,
						text: e
					});
					return null != (e = s.extend({}, {
						text: ""
					}, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), s.extend({}, {
						selected: !1,
						disabled: !1
					}, e)
				}, i.prototype.matches = function (e, t) {
					return this.options.get("matcher")(e, t)
				}, i
			}), e.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, h, f) {
				function n(e, t) {
					var i = t.get("data") || [];
					n.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(i))
				}
				return h.Extend(n, e), n.prototype.select = function (i) {
					var e = this.$element.find("option").filter(function (e, t) {
						return t.value == i.id.toString()
					});
					0 === e.length && (e = this.option(i), this.addOptions(e)), n.__super__.select.call(this, i)
				}, n.prototype.convertToOptions = function (e) {
					var t = this,
						i = this.$element.find("option"),
						n = i.map(function () {
							return t.item(f(this)).id
						}).get(),
						o = [];

					function r(e) {
						return function () {
							return f(this).val() == e.id
						}
					}
					for (var a = 0; a < e.length; a++) {
						var s = this._normalizeItem(e[a]);
						if (0 <= f.inArray(s.id, n)) {
							var l = i.filter(r(s)),
								c = this.item(l),
								d = f.extend(!0, {}, s, c),
								u = this.option(d);
							l.replaceWith(u)
						} else {
							var p = this.option(s);
							if (s.children) {
								var m = this.convertToOptions(s.children);
								h.appendMany(p, m)
							}
							o.push(p)
						}
					}
					return o
				}, n
			}), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, r) {
				function i(e, t) {
					this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t)
				}
				return t.Extend(i, e), i.prototype._applyDefaults = function (e) {
					var t = {
						data: function (e) {
							return r.extend({}, e, {
								q: e.term
							})
						},
						transport: function (e, t, i) {
							var n = r.ajax(e);
							return n.then(t), n.fail(i), n
						}
					};
					return r.extend({}, t, e, !0)
				}, i.prototype.processResults = function (e) {
					return e
				}, i.prototype.query = function (i, n) {
					var o = this;
					null != this._request && (r.isFunction(this._request.abort) && this._request.abort(), this._request = null);
					var t = r.extend({
						type: "GET"
					}, this.ajaxOptions);

					function e() {
						var e = t.transport(t, function (e) {
							var t = o.processResults(e, i);
							o.options.get("debug") && window.console && console.error && (t && t.results && r.isArray(t.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), n(t)
						}, function () {
							e.status && "0" === e.status || o.trigger("results:message", {
								message: "errorLoading"
							})
						});
						o._request = e
					}
					"function" == typeof t.url && (t.url = t.url.call(this.$element, i)), "function" == typeof t.data && (t.data = t.data.call(this.$element, i)), this.ajaxOptions.delay && null != i.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e()
				}, i
			}), e.define("select2/data/tags", ["jquery"], function (d) {
				function e(e, t, i) {
					var n = i.get("tags"),
						o = i.get("createTag");
					void 0 !== o && (this.createTag = o);
					var r = i.get("insertTag");
					if (void 0 !== r && (this.insertTag = r), e.call(this, t, i), d.isArray(n))
						for (var a = 0; a < n.length; a++) {
							var s = n[a],
								l = this._normalizeItem(s),
								c = this.option(l);
							this.$element.append(c)
						}
				}
				return e.prototype.query = function (e, c, d) {
					var u = this;
					this._removeOldTags(), null != c.term && null == c.page ? e.call(this, c, function e(t, i) {
						for (var n = t.results, o = 0; o < n.length; o++) {
							var r = n[o],
								a = null != r.children && !e({
									results: r.children
								}, !0);
							if ((r.text || "").toUpperCase() === (c.term || "").toUpperCase() || a) return !i && (t.data = n, void d(t))
						}
						if (i) return !0;
						var s = u.createTag(c);
						if (null != s) {
							var l = u.option(s);
							l.attr("data-select2-tag", !0), u.addOptions([l]), u.insertTag(n, s)
						}
						t.results = n, d(t)
					}) : e.call(this, c, d)
				}, e.prototype.createTag = function (e, t) {
					var i = d.trim(t.term);
					return "" === i ? null : {
						id: i,
						text: i
					}
				}, e.prototype.insertTag = function (e, t, i) {
					t.unshift(i)
				}, e.prototype._removeOldTags = function (e) {
					this._lastTag;
					this.$element.find("option[data-select2-tag]").each(function () {
						this.selected || d(this).remove()
					})
				}, e
			}), e.define("select2/data/tokenizer", ["jquery"], function (u) {
				function e(e, t, i) {
					var n = i.get("tokenizer");
					void 0 !== n && (this.tokenizer = n), e.call(this, t, i)
				}
				return e.prototype.bind = function (e, t, i) {
					e.call(this, t, i), this.$search = t.dropdown.$search || t.selection.$search || i.find(".select2-search__field")
				}, e.prototype.query = function (e, t, i) {
					var o = this;
					t.term = t.term || "";
					var n = this.tokenizer(t, this.options, function (e) {
						var t, i = o._normalizeItem(e);
						if (!o.$element.find("option").filter(function () {
								return u(this).val() === i.id
							}).length) {
							var n = o.option(i);
							n.attr("data-select2-tag", !0), o._removeOldTags(), o.addOptions([n])
						}
						t = i, o.trigger("select", {
							data: t
						})
					});
					n.term !== t.term && (this.$search.length && (this.$search.val(n.term), this.$search.focus()), t.term = n.term), e.call(this, t, i)
				}, e.prototype.tokenizer = function (e, t, i, n) {
					for (var o = i.get("tokenSeparators") || [], r = t.term, a = 0, s = this.createTag || function (e) {
							return {
								id: e.term,
								text: e.term
							}
						}; a < r.length;) {
						var l = r[a];
						if (-1 !== u.inArray(l, o)) {
							var c = r.substr(0, a),
								d = s(u.extend({}, t, {
									term: c
								}));
							null != d ? (n(d), r = r.substr(a + 1) || "", a = 0) : a++
						} else a++
					}
					return {
						term: r
					}
				}, e
			}), e.define("select2/data/minimumInputLength", [], function () {
				function e(e, t, i) {
					this.minimumInputLength = i.get("minimumInputLength"), e.call(this, t, i)
				}
				return e.prototype.query = function (e, t, i) {
					t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
						message: "inputTooShort",
						args: {
							minimum: this.minimumInputLength,
							input: t.term,
							params: t
						}
					}) : e.call(this, t, i)
				}, e
			}), e.define("select2/data/maximumInputLength", [], function () {
				function e(e, t, i) {
					this.maximumInputLength = i.get("maximumInputLength"), e.call(this, t, i)
				}
				return e.prototype.query = function (e, t, i) {
					t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
						message: "inputTooLong",
						args: {
							maximum: this.maximumInputLength,
							input: t.term,
							params: t
						}
					}) : e.call(this, t, i)
				}, e
			}), e.define("select2/data/maximumSelectionLength", [], function () {
				function e(e, t, i) {
					this.maximumSelectionLength = i.get("maximumSelectionLength"), e.call(this, t, i)
				}
				return e.prototype.query = function (i, n, o) {
					var r = this;
					this.current(function (e) {
						var t = null != e ? e.length : 0;
						0 < r.maximumSelectionLength && t >= r.maximumSelectionLength ? r.trigger("results:message", {
							message: "maximumSelected",
							args: {
								maximum: r.maximumSelectionLength
							}
						}) : i.call(r, n, o)
					})
				}, e
			}), e.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
				function i(e, t) {
					this.$element = e, this.options = t, i.__super__.constructor.call(this)
				}
				return e.Extend(i, e.Observable), i.prototype.render = function () {
					var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
					return e.attr("dir", this.options.get("dir")), this.$dropdown = e
				}, i.prototype.bind = function () {}, i.prototype.position = function (e, t) {}, i.prototype.destroy = function () {
					this.$dropdown.remove()
				}, i
			}), e.define("select2/dropdown/search", ["jquery", "../utils"], function (o, e) {
				function t() {}
				return t.prototype.render = function (e) {
					var t = e.call(this),
						i = o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
					return this.$searchContainer = i, this.$search = i.find("input"), t.prepend(i), t
				}, t.prototype.bind = function (e, t, i) {
					var n = this;
					e.call(this, t, i), this.$search.on("keydown", function (e) {
						n.trigger("keypress", e), n._keyUpPrevented = e.isDefaultPrevented()
					}), this.$search.on("input", function (e) {
						o(this).off("keyup")
					}), this.$search.on("keyup input", function (e) {
						n.handleSearch(e)
					}), t.on("open", function () {
						n.$search.attr("tabindex", 0), n.$search.focus(), window.setTimeout(function () {
							n.$search.focus()
						}, 0)
					}), t.on("close", function () {
						n.$search.attr("tabindex", -1), n.$search.val("")
					}), t.on("focus", function () {
						t.isOpen() && n.$search.focus()
					}), t.on("results:all", function (e) {
						null != e.query.term && "" !== e.query.term || (n.showSearch(e) ? n.$searchContainer.removeClass("select2-search--hide") : n.$searchContainer.addClass("select2-search--hide"))
					})
				}, t.prototype.handleSearch = function (e) {
					if (!this._keyUpPrevented) {
						var t = this.$search.val();
						this.trigger("query", {
							term: t
						})
					}
					this._keyUpPrevented = !1
				}, t.prototype.showSearch = function (e, t) {
					return !0
				}, t
			}), e.define("select2/dropdown/hidePlaceholder", [], function () {
				function e(e, t, i, n) {
					this.placeholder = this.normalizePlaceholder(i.get("placeholder")), e.call(this, t, i, n)
				}
				return e.prototype.append = function (e, t) {
					t.results = this.removePlaceholder(t.results), e.call(this, t)
				}, e.prototype.normalizePlaceholder = function (e, t) {
					return "string" == typeof t && (t = {
						id: "",
						text: t
					}), t
				}, e.prototype.removePlaceholder = function (e, t) {
					for (var i = t.slice(0), n = t.length - 1; 0 <= n; n--) {
						var o = t[n];
						this.placeholder.id === o.id && i.splice(n, 1)
					}
					return i
				}, e
			}), e.define("select2/dropdown/infiniteScroll", ["jquery"], function (o) {
				function e(e, t, i, n) {
					this.lastParams = {}, e.call(this, t, i, n), this.$loadingMore = this.createLoadingMore(), this.loading = !1
				}
				return e.prototype.append = function (e, t) {
					this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
				}, e.prototype.bind = function (e, t, i) {
					var n = this;
					e.call(this, t, i), t.on("query", function (e) {
						n.lastParams = e, n.loading = !0
					}), t.on("query:append", function (e) {
						n.lastParams = e, n.loading = !0
					}), this.$results.on("scroll", function () {
						var e = o.contains(document.documentElement, n.$loadingMore[0]);
						if (!n.loading && e) {
							var t = n.$results.offset().top + n.$results.outerHeight(!1);
							n.$loadingMore.offset().top + n.$loadingMore.outerHeight(!1) <= t + 50 && n.loadMore()
						}
					})
				}, e.prototype.loadMore = function () {
					this.loading = !0;
					var e = o.extend({}, {
						page: 1
					}, this.lastParams);
					e.page++, this.trigger("query:append", e)
				}, e.prototype.showLoadingMore = function (e, t) {
					return t.pagination && t.pagination.more
				}, e.prototype.createLoadingMore = function () {
					var e = o('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
						t = this.options.get("translations").get("loadingMore");
					return e.html(t(this.lastParams)), e
				}, e
			}), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (h, s) {
				function e(e, t, i) {
					this.$dropdownParent = i.get("dropdownParent") || h(document.body), e.call(this, t, i)
				}
				return e.prototype.bind = function (e, t, i) {
					var n = this,
						o = !1;
					e.call(this, t, i), t.on("open", function () {
						n._showDropdown(), n._attachPositioningHandler(t), o || (o = !0, t.on("results:all", function () {
							n._positionDropdown(), n._resizeDropdown()
						}), t.on("results:append", function () {
							n._positionDropdown(), n._resizeDropdown()
						}))
					}), t.on("close", function () {
						n._hideDropdown(), n._detachPositioningHandler(t)
					}), this.$dropdownContainer.on("mousedown", function (e) {
						e.stopPropagation()
					})
				}, e.prototype.destroy = function (e) {
					e.call(this), this.$dropdownContainer.remove()
				}, e.prototype.position = function (e, t, i) {
					t.attr("class", i.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
						position: "absolute",
						top: -999999
					}), this.$container = i
				}, e.prototype.render = function (e) {
					var t = h("<span></span>"),
						i = e.call(this);
					return t.append(i), this.$dropdownContainer = t
				}, e.prototype._hideDropdown = function (e) {
					this.$dropdownContainer.detach()
				}, e.prototype._attachPositioningHandler = function (e, t) {
					var i = this,
						n = "scroll.select2." + t.id,
						o = "resize.select2." + t.id,
						r = "orientationchange.select2." + t.id,
						a = this.$container.parents().filter(s.hasScroll);
					a.each(function () {
						h(this).data("select2-scroll-position", {
							x: h(this).scrollLeft(),
							y: h(this).scrollTop()
						})
					}), a.on(n, function (e) {
						var t = h(this).data("select2-scroll-position");
						h(this).scrollTop(t.y)
					}), h(window).on(n + " " + o + " " + r, function (e) {
						i._positionDropdown(), i._resizeDropdown()
					})
				}, e.prototype._detachPositioningHandler = function (e, t) {
					var i = "scroll.select2." + t.id,
						n = "resize.select2." + t.id,
						o = "orientationchange.select2." + t.id;
					this.$container.parents().filter(s.hasScroll).off(i), h(window).off(i + " " + n + " " + o)
				}, e.prototype._positionDropdown = function () {
					var e = h(window),
						t = this.$dropdown.hasClass("select2-dropdown--above"),
						i = this.$dropdown.hasClass("select2-dropdown--below"),
						n = null,
						o = this.$container.offset();
					o.bottom = o.top + this.$container.outerHeight(!1);
					var r = {
						height: this.$container.outerHeight(!1)
					};
					r.top = o.top, r.bottom = o.top + r.height;
					var a = this.$dropdown.outerHeight(!1),
						s = e.scrollTop(),
						l = e.scrollTop() + e.height(),
						c = s < o.top - a,
						d = l > o.bottom + a,
						u = {
							left: o.left,
							top: r.bottom
						},
						p = this.$dropdownParent;
					"static" === p.css("position") && (p = p.offsetParent());
					var m = p.offset();
					u.top -= m.top, u.left -= m.left, t || i || (n = "below"), d || !c || t ? !c && d && t && (n = "below") : n = "above", ("above" == n || t && "below" !== n) && (u.top = r.top - m.top - a), null != n && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + n), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + n)), this.$dropdownContainer.css(u)
				}, e.prototype._resizeDropdown = function () {
					var e = {
						width: this.$container.outerWidth(!1) + "px"
					};
					this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
				}, e.prototype._showDropdown = function (e) {
					this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
				}, e
			}), e.define("select2/dropdown/minimumResultsForSearch", [], function () {
				function e(e, t, i, n) {
					this.minimumResultsForSearch = i.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, i, n)
				}
				return e.prototype.showSearch = function (e, t) {
					return !(function e(t) {
						for (var i = 0, n = 0; n < t.length; n++) {
							var o = t[n];
							o.children ? i += e(o.children) : i++
						}
						return i
					}(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
				}, e
			}), e.define("select2/dropdown/selectOnClose", [], function () {
				function e() {}
				return e.prototype.bind = function (e, t, i) {
					var n = this;
					e.call(this, t, i), t.on("close", function (e) {
						n._handleSelectOnClose(e)
					})
				}, e.prototype._handleSelectOnClose = function (e, t) {
					if (t && null != t.originalSelect2Event) {
						var i = t.originalSelect2Event;
						if ("select" === i._type || "unselect" === i._type) return
					}
					var n = this.getHighlightedResults();
					if (!(n.length < 1)) {
						var o = n.data("data");
						null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {
							data: o
						})
					}
				}, e
			}), e.define("select2/dropdown/closeOnSelect", [], function () {
				function e() {}
				return e.prototype.bind = function (e, t, i) {
					var n = this;
					e.call(this, t, i), t.on("select", function (e) {
						n._selectTriggered(e)
					}), t.on("unselect", function (e) {
						n._selectTriggered(e)
					})
				}, e.prototype._selectTriggered = function (e, t) {
					var i = t.originalEvent;
					i && i.ctrlKey || this.trigger("close", {
						originalEvent: i,
						originalSelect2Event: t
					})
				}, e
			}), e.define("select2/i18n/en", [], function () {
				return {
					errorLoading: function () {
						return "The results could not be loaded."
					},
					inputTooLong: function (e) {
						var t = e.input.length - e.maximum,
							i = "Please delete " + t + " character";
						return 1 != t && (i += "s"), i
					},
					inputTooShort: function (e) {
						return "Please enter " + (e.minimum - e.input.length) + " or more characters"
					},
					loadingMore: function () {
						return "Loading more results…"
					},
					maximumSelected: function (e) {
						var t = "You can only select " + e.maximum + " item";
						return 1 != e.maximum && (t += "s"), t
					},
					noResults: function () {
						return "No results found"
					},
					searching: function () {
						return "Searching…"
					}
				}
			}), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (h, f, g, v, b, y, w, k, C, x, T, t, S, E, $, I, A, _, M, D, j, L, O, B, P, N, R, H, e) {
				function i() {
					this.reset()
				}
				return i.prototype.apply = function (t) {
					if (null == (t = h.extend(!0, {}, this.defaults, t)).dataAdapter) {
						if (null != t.ajax ? t.dataAdapter = $ : null != t.data ? t.dataAdapter = E : t.dataAdapter = S, 0 < t.minimumInputLength && (t.dataAdapter = x.Decorate(t.dataAdapter, _)), 0 < t.maximumInputLength && (t.dataAdapter = x.Decorate(t.dataAdapter, M)), 0 < t.maximumSelectionLength && (t.dataAdapter = x.Decorate(t.dataAdapter, D)), t.tags && (t.dataAdapter = x.Decorate(t.dataAdapter, I)), null == t.tokenSeparators && null == t.tokenizer || (t.dataAdapter = x.Decorate(t.dataAdapter, A)), null != t.query) {
							var e = f(t.amdBase + "compat/query");
							t.dataAdapter = x.Decorate(t.dataAdapter, e)
						}
						if (null != t.initSelection) {
							var i = f(t.amdBase + "compat/initSelection");
							t.dataAdapter = x.Decorate(t.dataAdapter, i)
						}
					}
					if (null == t.resultsAdapter && (t.resultsAdapter = g, null != t.ajax && (t.resultsAdapter = x.Decorate(t.resultsAdapter, B)), null != t.placeholder && (t.resultsAdapter = x.Decorate(t.resultsAdapter, O)), t.selectOnClose && (t.resultsAdapter = x.Decorate(t.resultsAdapter, R))), null == t.dropdownAdapter) {
						if (t.multiple) t.dropdownAdapter = j;
						else {
							var n = x.Decorate(j, L);
							t.dropdownAdapter = n
						}
						if (0 !== t.minimumResultsForSearch && (t.dropdownAdapter = x.Decorate(t.dropdownAdapter, N)), t.closeOnSelect && (t.dropdownAdapter = x.Decorate(t.dropdownAdapter, H)), null != t.dropdownCssClass || null != t.dropdownCss || null != t.adaptDropdownCssClass) {
							var o = f(t.amdBase + "compat/dropdownCss");
							t.dropdownAdapter = x.Decorate(t.dropdownAdapter, o)
						}
						t.dropdownAdapter = x.Decorate(t.dropdownAdapter, P)
					}
					if (null == t.selectionAdapter) {
						if (t.multiple ? t.selectionAdapter = b : t.selectionAdapter = v, null != t.placeholder && (t.selectionAdapter = x.Decorate(t.selectionAdapter, y)), t.allowClear && (t.selectionAdapter = x.Decorate(t.selectionAdapter, w)), t.multiple && (t.selectionAdapter = x.Decorate(t.selectionAdapter, k)), null != t.containerCssClass || null != t.containerCss || null != t.adaptContainerCssClass) {
							var r = f(t.amdBase + "compat/containerCss");
							t.selectionAdapter = x.Decorate(t.selectionAdapter, r)
						}
						t.selectionAdapter = x.Decorate(t.selectionAdapter, C)
					}
					if ("string" == typeof t.language)
						if (0 < t.language.indexOf("-")) {
							var a = t.language.split("-")[0];
							t.language = [t.language, a]
						} else t.language = [t.language];
					if (h.isArray(t.language)) {
						var s = new T;
						t.language.push("en");
						for (var l = t.language, c = 0; c < l.length; c++) {
							var d = l[c],
								u = {};
							try {
								u = T.loadPath(d)
							} catch (e) {
								try {
									d = this.defaults.amdLanguageBase + d, u = T.loadPath(d)
								} catch (e) {
									t.debug && window.console && console.warn && console.warn('Select2: The language file for "' + d + '" could not be automatically loaded. A fallback will be used instead.');
									continue
								}
							}
							s.extend(u)
						}
						t.translations = s
					} else {
						var p = T.loadPath(this.defaults.amdLanguageBase + "en"),
							m = new T(t.language);
						m.extend(p), t.translations = m
					}
					return t
				}, i.prototype.reset = function () {
					function s(e) {
						return e.replace(/[^\u0000-\u007E]/g, function (e) {
							return t[e] || e
						})
					}
					this.defaults = {
						amdBase: "./",
						amdLanguageBase: "./i18n/",
						closeOnSelect: !0,
						debug: !1,
						dropdownAutoWidth: !1,
						escapeMarkup: x.escapeMarkup,
						language: e,
						matcher: function e(t, i) {
							if ("" === h.trim(t.term)) return i;
							if (i.children && 0 < i.children.length) {
								for (var n = h.extend(!0, {}, i), o = i.children.length - 1; 0 <= o; o--) null == e(t, i.children[o]) && n.children.splice(o, 1);
								return 0 < n.children.length ? n : e(t, n)
							}
							var r = s(i.text).toUpperCase(),
								a = s(t.term).toUpperCase();
							return -1 < r.indexOf(a) ? i : null
						},
						minimumInputLength: 0,
						maximumInputLength: 0,
						maximumSelectionLength: 0,
						minimumResultsForSearch: 0,
						selectOnClose: !1,
						sorter: function (e) {
							return e
						},
						templateResult: function (e) {
							return e.text
						},
						templateSelection: function (e) {
							return e.text
						},
						theme: "default",
						width: "resolve"
					}
				}, i.prototype.set = function (e, t) {
					var i = {};
					i[h.camelCase(e)] = t;
					var n = x._convertData(i);
					h.extend(this.defaults, n)
				}, new i
			}), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (n, r, o, a) {
				function e(e, t) {
					if (this.options = e, null != t && this.fromElement(t), this.options = o.apply(this.options), t && t.is("input")) {
						var i = n(this.get("amdBase") + "compat/inputData");
						this.options.dataAdapter = a.Decorate(this.options.dataAdapter, i)
					}
				}
				return e.prototype.fromElement = function (e) {
					var t = ["select2"];
					null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
					var i = {};
					i = r.fn.jquery && "1." == r.fn.jquery.substr(0, 2) && e[0].dataset ? r.extend(!0, {}, e[0].dataset, e.data()) : e.data();
					var n = r.extend(!0, {}, i);
					for (var o in n = a._convertData(n)) - 1 < r.inArray(o, t) || (r.isPlainObject(this.options[o]) ? r.extend(this.options[o], n[o]) : this.options[o] = n[o]);
					return this
				}, e.prototype.get = function (e) {
					return this.options[e]
				}, e.prototype.set = function (e, t) {
					this.options[e] = t
				}, e
			}), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (o, c, i, n) {
				var d = function (e, t) {
					null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), t = t || {}, this.options = new c(t, e), d.__super__.constructor.call(this);
					var i = e.attr("tabindex") || 0;
					e.data("old-tabindex", i), e.attr("tabindex", "-1");
					var n = this.options.get("dataAdapter");
					this.dataAdapter = new n(e, this.options);
					var o = this.render();
					this._placeContainer(o);
					var r = this.options.get("selectionAdapter");
					this.selection = new r(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, o);
					var a = this.options.get("dropdownAdapter");
					this.dropdown = new a(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, o);
					var s = this.options.get("resultsAdapter");
					this.results = new s(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
					var l = this;
					this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
						l.trigger("selection:update", {
							data: e
						})
					}), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
				};
				return i.Extend(d, i.Observable), d.prototype._generateId = function (e) {
					return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + i.generateChars(2) : i.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
				}, d.prototype._placeContainer = function (e) {
					e.insertAfter(this.$element);
					var t = this._resolveWidth(this.$element, this.options.get("width"));
					null != t && e.css("width", t)
				}, d.prototype._resolveWidth = function (e, t) {
					var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
					if ("resolve" == t) {
						var n = this._resolveWidth(e, "style");
						return null != n ? n : this._resolveWidth(e, "element")
					}
					if ("element" == t) {
						var o = e.outerWidth(!1);
						return o <= 0 ? "auto" : o + "px"
					}
					if ("style" != t) return t;
					var r = e.attr("style");
					if ("string" != typeof r) return null;
					for (var a = r.split(";"), s = 0, l = a.length; s < l; s += 1) {
						var c = a[s].replace(/\s/g, "").match(i);
						if (null !== c && 1 <= c.length) return c[1]
					}
					return null
				}, d.prototype._bindAdapters = function () {
					this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
				}, d.prototype._registerDomEvents = function () {
					var t = this;
					this.$element.on("change.select2", function () {
						t.dataAdapter.current(function (e) {
							t.trigger("selection:update", {
								data: e
							})
						})
					}), this.$element.on("focus.select2", function (e) {
						t.trigger("focus", e)
					}), this._syncA = i.bind(this._syncAttributes, this), this._syncS = i.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
					var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
					null != e ? (this._observer = new e(function (e) {
						o.each(e, t._syncA), o.each(e, t._syncS)
					}), this._observer.observe(this.$element[0], {
						attributes: !0,
						childList: !0,
						subtree: !1
					})) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
				}, d.prototype._registerDataEvents = function () {
					var i = this;
					this.dataAdapter.on("*", function (e, t) {
						i.trigger(e, t)
					})
				}, d.prototype._registerSelectionEvents = function () {
					var i = this,
						n = ["toggle", "focus"];
					this.selection.on("toggle", function () {
						i.toggleDropdown()
					}), this.selection.on("focus", function (e) {
						i.focus(e)
					}), this.selection.on("*", function (e, t) {
						-1 === o.inArray(e, n) && i.trigger(e, t)
					})
				}, d.prototype._registerDropdownEvents = function () {
					var i = this;
					this.dropdown.on("*", function (e, t) {
						i.trigger(e, t)
					})
				}, d.prototype._registerResultsEvents = function () {
					var i = this;
					this.results.on("*", function (e, t) {
						i.trigger(e, t)
					})
				}, d.prototype._registerEvents = function () {
					var i = this;
					this.on("open", function () {
						i.$container.addClass("select2-container--open")
					}), this.on("close", function () {
						i.$container.removeClass("select2-container--open")
					}), this.on("enable", function () {
						i.$container.removeClass("select2-container--disabled")
					}), this.on("disable", function () {
						i.$container.addClass("select2-container--disabled")
					}), this.on("blur", function () {
						i.$container.removeClass("select2-container--focus")
					}), this.on("query", function (t) {
						i.isOpen() || i.trigger("open", {}), this.dataAdapter.query(t, function (e) {
							i.trigger("results:all", {
								data: e,
								query: t
							})
						})
					}), this.on("query:append", function (t) {
						this.dataAdapter.query(t, function (e) {
							i.trigger("results:append", {
								data: e,
								query: t
							})
						})
					}), this.on("keypress", function (e) {
						var t = e.which;
						i.isOpen() ? t === n.ESC || t === n.TAB || t === n.UP && e.altKey ? (i.close(), e.preventDefault()) : t === n.ENTER ? (i.trigger("results:select", {}), e.preventDefault()) : t === n.SPACE && e.ctrlKey ? (i.trigger("results:toggle", {}), e.preventDefault()) : t === n.UP ? (i.trigger("results:previous", {}), e.preventDefault()) : t === n.DOWN && (i.trigger("results:next", {}), e.preventDefault()) : (t === n.ENTER || t === n.SPACE || t === n.DOWN && e.altKey) && (i.open(), e.preventDefault())
					})
				}, d.prototype._syncAttributes = function () {
					this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
				}, d.prototype._syncSubtree = function (e, t) {
					var i = !1,
						n = this;
					if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
						if (t)
							if (t.addedNodes && 0 < t.addedNodes.length)
								for (var o = 0; o < t.addedNodes.length; o++) {
									t.addedNodes[o].selected && (i = !0)
								} else t.removedNodes && 0 < t.removedNodes.length && (i = !0);
							else i = !0;
						i && this.dataAdapter.current(function (e) {
							n.trigger("selection:update", {
								data: e
							})
						})
					}
				}, d.prototype.trigger = function (e, t) {
					var i = d.__super__.trigger,
						n = {
							open: "opening",
							close: "closing",
							select: "selecting",
							unselect: "unselecting"
						};
					if (void 0 === t && (t = {}), e in n) {
						var o = n[e],
							r = {
								prevented: !1,
								name: e,
								args: t
							};
						if (i.call(this, o, r), r.prevented) return void(t.prevented = !0)
					}
					i.call(this, e, t)
				}, d.prototype.toggleDropdown = function () {
					this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
				}, d.prototype.open = function () {
					this.isOpen() || this.options.get("disabled") || this.trigger("query", {})
				}, d.prototype.close = function () {
					this.isOpen() && this.trigger("close", {})
				}, d.prototype.isOpen = function () {
					return this.$container.hasClass("select2-container--open")
				}, d.prototype.hasFocus = function () {
					return this.$container.hasClass("select2-container--focus")
				}, d.prototype.focus = function (e) {
					this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
				}, d.prototype.enable = function (e) {
					this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
					var t = !e[0];
					this.$element.prop("disabled", t)
				}, d.prototype.data = function () {
					this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
					var t = [];
					return this.dataAdapter.current(function (e) {
						t = e
					}), t
				}, d.prototype.val = function (e) {
					if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
					var t = e[0];
					o.isArray(t) && (t = o.map(t, function (e) {
						return e.toString()
					})), this.$element.val(t).trigger("change")
				}, d.prototype.destroy = function () {
					this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
				}, d.prototype.render = function () {
					var e = o('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
					return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
				}, d
			}), e.define("jquery-mousewheel", ["jquery"], function (e) {
				return e
			}), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (o, e, r, t) {
				if (null == o.fn.select2) {
					var a = ["open", "close", "destroy"];
					o.fn.select2 = function (t) {
						if ("object" == typeof (t = t || {})) return this.each(function () {
							var e = o.extend(!0, {}, t);
							new r(o(this), e)
						}), this;
						if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
						var i, n = Array.prototype.slice.call(arguments, 1);
						return this.each(function () {
							var e = o(this).data("select2");
							null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = e[t].apply(e, n)
						}), -1 < o.inArray(t, a) ? this : i
					}
				}
				return null == o.fn.select2.defaults && (o.fn.select2.defaults = t), r
			}), {
				define: e.define,
				require: e.require
			}
		}(),
		t = e.require("jquery.select2");
	return i.fn.select2.amd = e, t
}),
function (a, s) {
	var e = s.namespace(s, "common.widget.selectlist");
	a.fn.select2 && (a.fn.select2.defaults.set("minimumResultsForSearch", 8), a.fn.select2.defaults.set("width", "resolve")), e.init = function (e, t) {
		var i = a(e),
			n = {
				language: {
					noResults: function () {
						return s.common.translations.data.v18main.misc.noresults || "No results found"
					}
				}
			},
			o = {};
		if (a.fn.select2 && !(-1 < i[0].className.indexOf("ibm-widget-processed"))) {
			if (a(document.getElementsByClassName("ibm-common-overlay")).find("select:not([data-init=false]):not(.ibm-widget-processed):not(.ibm-selectlist-overlay)").addClass("ibm-selectlist-overlay"), !1 === (o = a.extend(!0, n, i.data() || {}, t)).searchenabled && (o.minimumResultsForSearch = -1), -1 === i[0].className.indexOf("ibm-selectlist-overlay")) i.css("width", i.outerWidth(!0) + 20), i.select2(o);
			else {
				var r = i.closest(".ibm-common-overlay").removeClass("ibm-common-overlay");
				i.css("width", i.outerWidth(!0) + 20), i.select2(o), r.addClass("ibm-common-overlay")
			}
			i.data("widget", {
				destroy: function () {
					return i.removeClass("ibm-widget-processed").select2("destroy"), i
				}
			}), s.common.widget.manager.dispatchInitEvent(i[0])
		}
	}
}(jQuery, IBMCore),
function (r, a) {
	a.namespace(a, "common.widget.selectlistnav");
	var i = [];

	function n(e) {
		var t, i, n, o = this;
		o.destroy = function () {
			return n.off("change.selectlistnav").select2("destroy"), t.replaceWith(i), i
		}, o.init = function (e) {
			t = r(e), i = t.clone(!0), t.data("widget", o);
			try {
				if (0 === (n = t.find("select")).length) throw "The selectlistnav form must contain a selectlist element. Please add one.";
				t.find("input.ibm-btn-go").remove(), n.on("change.selectlistnav", function () {
					"" !== this.value && (window.location.href = this.value)
				}), a.common.widget.manager.dispatchInitEvent(t[0])
			} catch (e) {
				throw e
			}
		}
	}
	r.fn.selectlistnav = function (t) {
		return this.each(function () {
			var e;
			(e = new n(t), i.push(e), e).init(this)
		})
	}
}(jQuery, IBMCore),
function (h, f) {
	f.namespace(f, "common.widget.showhide");
	var i = [];

	function g(e, t) {
		f.common.util.statshelper.fireEvent({
			ibmEV: "widget",
			ibmEvGroup: "Showhide",
			ibmEvName: e,
			ibmEvAction: t
		})
	}

	function n(t) {
		var i, o, r, a, s = this,
			l = {
				type: "simple"
			},
			c = "fast",
			d = "fast";

		function u(e) {
			var t = r.index(e) || 0;
			e || (e = r), m(e, !1), o.eq(t).slideUp(c)
		}

		function p(e) {
			var t = r.index(e) || 0;
			e || (e = r), m(r.filter(".ibm-show-active"), !1), o.filter(":visible").slideUp(c), m(e, !0), o.eq(t).slideDown(d)
		}

		function m(e, t) {
			t ? e.addClass("ibm-show-active").parent().addClass("ibm-showing") : e.removeClass("ibm-show-active").parent().removeClass("ibm-showing")
		}
		s.destroy = function () {
			return o.css({
				display: "block"
			}), r.each(function () {
				h(this).parent().html(h(this).html())
			}), i.removeClass("ibm-show-hide ibm-widget-processed"), i
		}, s.init = function (e) {
			(i = h(e)).data("widget", s), "panel" === (a = h.extend({}, l, i.data() || {}, t)).type ? (o = i.find("div.ibm-container-body"), i.find(" > h2").not(":has('>a')").wrapInner('<a href="javascript:void();"></a>').children("a"), (r = i.find(" > h2 > a")).parent(":not([data-open='true'])").next(".ibm-container-body").css("display", "none"), m(r.parent("[data-open='true']").children(), !0), r.click(function (e) {
				var t, i;
				e.preventDefault(), -1 < this.className.indexOf("ibm-show-active") ? (u(h(this)), g("hide", h(this).text())) : (p(h(this)), t = h(this), i = r.index(t), o.eq(i).find(".ibm-widget-processed[data-widget='setsameheight']")[0] && o.eq(i).find(".ibm-widget-processed[data-widget='setsameheight']").each(function () {
					h(this).data("widget").adjustHeights(!0)
				}), g("show", h(this).text()))
			})) : "simple" === a.type && (n = i.find(".ibm-hideable").css("display", "none"), i.find("p.ibm-show-hide-controls").on("click", "a", function (e) {
				var t = h(this),
					i = t.attr("href");
				e.preventDefault(), h(e.delegateTarget).find(".ibm-active").removeClass("ibm-active"), t.addClass("ibm-active"), "#show" === i ? (n.slideDown(d), g("show descriptions", "descriptions widget")) : "#hide" === i && (n.slideUp(c), g("hide descriptions", "descriptions widget"))
			}));
			var n;
			f.common.widget.manager.dispatchInitEvent(i[0])
		}, s.hide = u, s.show = p
	}
	h.fn.showhide = function (t) {
		return this.each(function () {
			var e;
			(e = new n(t), i.push(e), e).init(this)
		})
	}
}(jQuery, IBMCore),
function (h, f) {
	f.namespace(f, "common.widget.stepindicator");
	var i = [];

	function n(t) {
		var i, n, o, r, a, s, l, c = "ibm-step-container",
			d = "ibm-active-completed",
			u = "ibm-active-current",
			p = "ibm-disabled",
			m = this;
		m.destroy = function () {
			return i.next().replaceWith(o), i.replaceWith(n), n
		}, m.init = function (e) {
			i = h(e), n = i.clone(!0), i.data("widget", m), s = {
				future_clickable: !1,
				disable_previous: !0 === i.data("disableprevious"),
				content: i.next(),
				focus_index: -1
			}, r = h("." + c, s.content), o = s.content.clone(!0), t = t || {}, l = i.find("li"), h.extend(!0, s, t), i.find("h2.ibm-access")[0] && i.find("h2.ibm-access").remove(), r.each(function () {
				h(this).find("[data-step=next]").on("click", function () {
					m.next()
				}), h(this).find("[data-step=prev]").on("click", function () {
					m.prev()
				})
			}), -1 === (a = m.getCurrentStep()) && (a = 0), m.goToStep(a), f.common.util.a11y.makeTabsAccessible({
				el: i.children("ul")
			}), l.each(function (i, e) {
				h(e).find("a:eq(0)").click(function (e) {
					var t = m.getCurrentStep() < i;
					(!t || t && s.future_clickable) && !s.disable_previous && m.goToStep(i), e.preventDefault()
				})
			}), s.content.addClass("ibm-widget-processed"), f.common.widget.manager.dispatchInitEvent(i[0])
		}, m.getCurrentStep = function () {
			var i = -1;
			return l.each(function (e, t) {
				0 < h(t).find("." + u).length && (i = e)
			}), i
		}, m.totalSteps = function () {
			return l.length
		}, m.isOnFirst = function () {
			return 0 === m.getCurrentStep()
		}, m.isOnLast = function () {
			return m.getCurrentStep() === m.totalSteps() - 1
		}, m.goToStep = function (i) {
			var n;
			l.each(function (e, t) {
				n = h(t).find("a:eq(0)"), s.disable_previous ? (n[e !== i ? "addClass" : "removeClass"](p), n[e === i ? "addClass" : "removeClass"](u)) : (n[e < i ? "addClass" : "removeClass"](d), n[e === i ? "addClass" : "removeClass"](u), n[i < e ? "addClass" : "removeClass"](p)), n[0].tabIndex = e === i ? (n.attr("aria-selected", !0), 0) : (n.attr("aria-selected", !1), -1)
			}), r.each(function (e, t) {
				h(t).css("display", e === i ? "block" : "none")
			}), s.focus_index = i
		}, m.next = function () {
			m.isOnLast() || m.goToStep(m.getCurrentStep() + 1)
		}, m.prev = function () {
			m.isOnFirst() || m.goToStep(m.getCurrentStep() - 1)
		}
	}
	h.fn.stepindicator = function (t) {
		return this.each(function () {
			var e;
			(e = new n(t), i.push(e), e).init(this)
		})
	}
}(jQuery, IBMCore),
function (c, d) {
	d.namespace(d, "common.widget.stickytabs");
	var i = [];

	function n(e) {
		var t, i, n = this,
			o = !1,
			r = 0,
			a = !1,
			s = 0;

		function l() {
			r = c(window).scrollTop(), a || (s = t.offset().top), document.getElementsByClassName("ibm-masthead-sticky-showing")[0] && (r += 50), s < r ? a || (c(document.body).addClass("ibm-sticky-tabs"), a = !0) : a && (c(document.body).removeClass("ibm-sticky-tabs"), a = !1)
		}
		n.destroy = function () {
			return clearInterval(t.data("widget").scrollInterval), c(window).off(".stickytabs"), i.remove(), c(document.body).removeClass("ibm-sticky-tabs"), t
		}, n.init = function (e) {
			(t = c(e)).data("widget", n), i = c('<div id="ibm-pritabs-ph"></div>').insertBefore(t), r = c(window).scrollTop(), s = t.offset().top, document.getElementById("ibm-pritabs-ph") || t.before('<div id="ibm-pritabs-ph"></div>'), c(window).on("scroll.stickytabs", function () {
				o = !0
			}), n.scrollInterval = setInterval(function () {
				o && (o = !1, l())
			}, 20), l(), d.common.widget.manager.dispatchInitEvent(t[0])
		}
	}
	c.fn.stickytabs = function (t) {
		return this.each(function () {
			var e;
			(e = new n(t), i.push(e), e).init(this)
		})
	}
}(jQuery, IBMCore),
function (r, e) {
	e.namespace(e, "common.widget.syntaxhighlighter");
	r.fn.syntaxhighlighter = function () {
		return this.each(function () {
			! function (e) {
				var t = r(e),
					i = t.clone(!0),
					n = t.wrap('<div class="ibm-syntax-container"></div>').parent(),
					o = t.data("maxheight");
				window.SyntaxHighlighter.defaults.toolbar = !1, window.SyntaxHighlighter.defaults["auto-links"] = !1, window.SyntaxHighlighter.defaults.gutter = !1, n.data("widget", {
					destroy: function () {
						return n.replaceWith(i), i
					}
				}), "" !== e.id && (n[0].id = e.id);
				t.attr("class") || t.attr("class", "brush: js; html-script: true");
				t.html(t.html().replace(/</g, "&lt;")), window.SyntaxHighlighter.highlight(window.SyntaxHighlighter.defaults, e), n.find("table").attr("role", "none"), o && n.find(".syntaxhighlighter").css({
					"max-height": o,
					"overflow-y": "auto"
				})
			}(this)
		})
	}
}(jQuery, IBMCore),
function (e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (d) {
	function o(e, t) {
		this.element = e, this.$element = d(this.element), this.doc = d(document), this.win = d(window), this.settings = d.extend({}, l, t), "object" == typeof this.$element.data("tipso") && d.extend(this.settings, this.$element.data("tipso"));
		for (var i = Object.keys(this.$element.data()), n = {}, o = 0; o < i.length; o++) {
			var r = i[o].replace(s, "");
			if ("" !== r)
				for (var a in n[r = r.charAt(0).toLowerCase() + r.slice(1)] = this.$element.data(i[o]), this.settings) a.toLowerCase() == r && (this.settings[a] = n[r])
		}
		this._defaults = l, this._name = s, this._title = this.$element.attr("title"), this.mode = "hide", this.ieFade = !c, this.settings.preferedPosition = this.settings.position, this.init()
	}

	function u(e) {
		var t = e.clone();
		t.css("visibility", "hidden"), d("body").append(t);
		var i = t.outerHeight(),
			n = t.outerWidth();
		return t.remove(), {
			width: n,
			height: i
		}
	}

	function p(e) {
		e.removeClass("top_right_corner bottom_right_corner top_left_corner bottom_left_corner"), e.find(".tipso_title").removeClass("top_right_corner bottom_right_corner top_left_corner bottom_left_corner")
	}

	function m(e) {
		var t, i, n, o = e.tooltip(),
			r = e.$element,
			a = e,
			s = d(window),
			l = a.settings.background,
			c = a.titleContent();
		switch (void 0 !== c && "" !== c && (l = a.settings.titleBackground), r.parent().outerWidth() > s.outerWidth() && (s = r.parent()), a.settings.position) {
			case "top-right":
				i = r.offset().left + r.outerWidth(), t = r.offset().top - u(o).height - 10, o.find(".tipso_arrow").css({
					marginLeft: -a.settings.arrowWidth,
					marginTop: ""
				}), t < s.scrollTop() ? (t = r.offset().top + r.outerHeight() + 10, o.find(".tipso_arrow").css({
					"border-bottom-color": l,
					"border-top-color": "transparent",
					"border-left-color": "transparent",
					"border-right-color": "transparent"
				}), p(o), o.addClass("bottom_right_corner"), o.find(".tipso_title").addClass("bottom_right_corner"), o.find(".tipso_arrow").css({
					"border-left-color": l
				}), o.removeClass("top-right top bottom left right"), o.addClass("bottom")) : (o.find(".tipso_arrow").css({
					"border-top-color": a.settings.background,
					"border-bottom-color": "transparent ",
					"border-left-color": "transparent",
					"border-right-color": "transparent"
				}), p(o), o.addClass("top_right_corner"), o.find(".tipso_arrow").css({
					"border-left-color": a.settings.background
				}), o.removeClass("top bottom left right"), o.addClass("top"));
				break;
			case "top-left":
				i = r.offset().left - u(o).width, t = r.offset().top - u(o).height - 10, o.find(".tipso_arrow").css({
					marginLeft: -a.settings.arrowWidth,
					marginTop: ""
				}), t < s.scrollTop() ? (t = r.offset().top + r.outerHeight() + 10, o.find(".tipso_arrow").css({
					"border-bottom-color": l,
					"border-top-color": "transparent",
					"border-left-color": "transparent",
					"border-right-color": "transparent"
				}), p(o), o.addClass("bottom_left_corner"), o.find(".tipso_title").addClass("bottom_left_corner"), o.find(".tipso_arrow").css({
					"border-right-color": l
				}), o.removeClass("top-right top bottom left right"), o.addClass("bottom")) : (o.find(".tipso_arrow").css({
					"border-top-color": a.settings.background,
					"border-bottom-color": "transparent ",
					"border-left-color": "transparent",
					"border-right-color": "transparent"
				}), p(o), o.addClass("top_left_corner"), o.find(".tipso_arrow").css({
					"border-right-color": a.settings.background
				}), o.removeClass("top bottom left right"), o.addClass("top"));
				break;
			case "bottom-right":
				i = r.offset().left + r.outerWidth(), t = r.offset().top + r.outerHeight() + 10, o.find(".tipso_arrow").css({
					marginLeft: -a.settings.arrowWidth,
					marginTop: ""
				}), t + u(o).height > s.scrollTop() + s.outerHeight() ? (t = r.offset().top - u(o).height - 10, o.find(".tipso_arrow").css({
					"border-bottom-color": "transparent",
					"border-top-color": a.settings.background,
					"border-left-color": "transparent",
					"border-right-color": "transparent"
				}), p(o), o.addClass("top_right_corner"), o.find(".tipso_title").addClass("top_left_corner"), o.find(".tipso_arrow").css({
					"border-left-color": a.settings.background
				}), o.removeClass("top-right top bottom left right"), o.addClass("top")) : (o.find(".tipso_arrow").css({
					"border-top-color": "transparent",
					"border-bottom-color": l,
					"border-left-color": "transparent",
					"border-right-color": "transparent"
				}), p(o), o.addClass("bottom_right_corner"), o.find(".tipso_title").addClass("bottom_right_corner"), o.find(".tipso_arrow").css({
					"border-left-color": l
				}), o.removeClass("top bottom left right"), o.addClass("bottom"));
				break;
			case "bottom-left":
				i = r.offset().left - u(o).width, t = r.offset().top + r.outerHeight() + 10, o.find(".tipso_arrow").css({
					marginLeft: -a.settings.arrowWidth,
					marginTop: ""
				}), t + u(o).height > s.scrollTop() + s.outerHeight() ? (t = r.offset().top - u(o).height - 10, o.find(".tipso_arrow").css({
					"border-bottom-color": "transparent",
					"border-top-color": a.settings.background,
					"border-left-color": "transparent",
					"border-right-color": "transparent"
				}), p(o), o.addClass("top_left_corner"), o.find(".tipso_title").addClass("top_left_corner"), o.find(".tipso_arrow").css({
					"border-right-color": a.settings.background
				}), o.removeClass("top-right top bottom left right"), o.addClass("top")) : (o.find(".tipso_arrow").css({
					"border-top-color": "transparent",
					"border-bottom-color": l,
					"border-left-color": "transparent",
					"border-right-color": "transparent"
				}), p(o), o.addClass("bottom_left_corner"), o.find(".tipso_title").addClass("bottom_left_corner"), o.find(".tipso_arrow").css({
					"border-right-color": l
				}), o.removeClass("top bottom left right"), o.addClass("bottom"));
				break;
			case "top":
				i = r.offset().left + r.outerWidth() / 2 - u(o).width / 2, t = r.offset().top - u(o).height - 10, o.find(".tipso_arrow").css({
					marginLeft: -a.settings.arrowWidth,
					marginTop: ""
				}), t < s.scrollTop() ? (t = r.offset().top + r.outerHeight() + 10, o.find(".tipso_arrow").css({
					"border-bottom-color": l,
					"border-top-color": "transparent",
					"border-left-color": "transparent",
					"border-right-color": "transparent"
				}), o.removeClass("top bottom left right"), o.addClass("bottom")) : (o.find(".tipso_arrow").css({
					"border-top-color": a.settings.background,
					"border-bottom-color": "transparent",
					"border-left-color": "transparent",
					"border-right-color": "transparent"
				}), o.removeClass("top bottom left right"), o.addClass("top"));
				break;
			case "bottom":
				i = r.offset().left + r.outerWidth() / 2 - u(o).width / 2, t = r.offset().top + r.outerHeight() + 10, o.find(".tipso_arrow").css({
					marginLeft: -a.settings.arrowWidth,
					marginTop: ""
				}), t + u(o).height > s.scrollTop() + s.outerHeight() ? (t = r.offset().top - u(o).height - 10, o.find(".tipso_arrow").css({
					"border-top-color": a.settings.background,
					"border-bottom-color": "transparent",
					"border-left-color": "transparent",
					"border-right-color": "transparent"
				}), o.removeClass("top bottom left right"), o.addClass("top")) : (o.find(".tipso_arrow").css({
					"border-bottom-color": l,
					"border-top-color": "transparent",
					"border-left-color": "transparent",
					"border-right-color": "transparent"
				}), o.removeClass("top bottom left right"), o.addClass(a.settings.position));
				break;
			case "left":
				i = r.offset().left - u(o).width - 10, t = r.offset().top + r.outerHeight() / 2 - u(o).height / 2, o.find(".tipso_arrow").css({
					marginTop: -a.settings.arrowWidth,
					marginLeft: ""
				}), i < s.scrollLeft() ? (i = r.offset().left + r.outerWidth() + 10, o.find(".tipso_arrow").css({
					"border-right-color": a.settings.background,
					"border-left-color": "transparent",
					"border-top-color": "transparent",
					"border-bottom-color": "transparent"
				}), o.removeClass("top bottom left right"), o.addClass("right")) : (o.find(".tipso_arrow").css({
					"border-left-color": a.settings.background,
					"border-right-color": "transparent",
					"border-top-color": "transparent",
					"border-bottom-color": "transparent"
				}), o.removeClass("top bottom left right"), o.addClass(a.settings.position));
				break;
			case "right":
				i = r.offset().left + r.outerWidth() + 10, t = r.offset().top + r.outerHeight() / 2 - u(o).height / 2, o.find(".tipso_arrow").css({
					marginTop: -a.settings.arrowWidth,
					marginLeft: ""
				}), i + 10 + a.settings.width > s.scrollLeft() + s.outerWidth() ? (i = r.offset().left - u(o).width - 10, o.find(".tipso_arrow").css({
					"border-left-color": a.settings.background,
					"border-right-color": "transparent",
					"border-top-color": "transparent",
					"border-bottom-color": "transparent"
				}), o.removeClass("top bottom left right"), o.addClass("left")) : (o.find(".tipso_arrow").css({
					"border-right-color": a.settings.background,
					"border-left-color": "transparent",
					"border-top-color": "transparent",
					"border-bottom-color": "transparent"
				}), o.removeClass("top bottom left right"), o.addClass(a.settings.position))
		}("top-right" === a.settings.position && o.find(".tipso_arrow").css({
			"margin-left": -a.settings.width / 2
		}), "top-left" === a.settings.position) && o.find(".tipso_arrow").eq(0).css({
			"margin-left": a.settings.width / 2 - 2 * a.settings.arrowWidth
		});
		"bottom-right" === a.settings.position && o.find(".tipso_arrow").eq(0).css({
			"margin-left": -a.settings.width / 2,
			"margin-top": ""
		});
		"bottom-left" === a.settings.position && o.find(".tipso_arrow").eq(0).css({
			"margin-left": a.settings.width / 2 - 2 * a.settings.arrowWidth,
			"margin-top": ""
		});
		i < s.scrollLeft() && ("bottom" === a.settings.position || "top" === a.settings.position) && (o.find(".tipso_arrow").css({
			marginLeft: i - a.settings.arrowWidth
		}), i = 0), i + a.settings.width > s.outerWidth() && ("bottom" === a.settings.position || "top" === a.settings.position) && (n = s.outerWidth() - (i + a.settings.width), o.find(".tipso_arrow").css({
			marginLeft: -n - a.settings.arrowWidth,
			marginTop: ""
		}), i += n), i < s.scrollLeft() && ("left" === a.settings.position || "right" === a.settings.position || "top-right" === a.settings.position || "top-left" === a.settings.position || "bottom-right" === a.settings.position || "bottom-left" === a.settings.position) && (i = r.offset().left + r.outerWidth() / 2 - u(o).width / 2, o.find(".tipso_arrow").css({
			marginLeft: -a.settings.arrowWidth,
			marginTop: ""
		}), (t = r.offset().top - u(o).height - 10) < s.scrollTop() ? (t = r.offset().top + r.outerHeight() + 10, o.find(".tipso_arrow").css({
			"border-bottom-color": l,
			"border-top-color": "transparent",
			"border-left-color": "transparent",
			"border-right-color": "transparent"
		}), o.removeClass("top bottom left right"), p(o), o.addClass("bottom")) : (o.find(".tipso_arrow").css({
			"border-top-color": a.settings.background,
			"border-bottom-color": "transparent",
			"border-left-color": "transparent",
			"border-right-color": "transparent"
		}), o.removeClass("top bottom left right"), p(o), o.addClass("top")), i + a.settings.width > s.outerWidth() && (n = s.outerWidth() - (i + a.settings.width), o.find(".tipso_arrow").css({
			marginLeft: -n - a.settings.arrowWidth,
			marginTop: ""
		}), i += n), i < s.scrollLeft() && (o.find(".tipso_arrow").css({
			marginLeft: i - a.settings.arrowWidth
		}), i = 0)), i + a.settings.width > s.outerWidth() && ("left" === a.settings.position || "right" === a.settings.position || "top-right" === a.settings.position || "top-left" === a.settings.position || "bottom-right" === a.settings.position || "bottom-right" === a.settings.position) && (i = r.offset().left + r.outerWidth() / 2 - u(o).width / 2, o.find(".tipso_arrow").css({
			marginLeft: -a.settings.arrowWidth,
			marginTop: ""
		}), (t = r.offset().top - u(o).height - 10) < s.scrollTop() ? (t = r.offset().top + r.outerHeight() + 10, o.find(".tipso_arrow").css({
			"border-bottom-color": l,
			"border-top-color": "transparent",
			"border-left-color": "transparent",
			"border-right-color": "transparent"
		}), p(o), o.removeClass("top bottom left right"), o.addClass("bottom")) : (o.find(".tipso_arrow").css({
			"border-top-color": a.settings.background,
			"border-bottom-color": "transparent",
			"border-left-color": "transparent",
			"border-right-color": "transparent"
		}), p(o), o.removeClass("top bottom left right"), o.addClass("top")), i + a.settings.width > s.outerWidth() && (n = s.outerWidth() - (i + a.settings.width), o.find(".tipso_arrow").css({
			marginLeft: -n - a.settings.arrowWidth,
			marginTop: ""
		}), i += n), i < s.scrollLeft() && (o.find(".tipso_arrow").css({
			marginLeft: i - a.settings.arrowWidth
		}), i = 0)), o.css({
			left: i + a.settings.offsetX,
			top: t + a.settings.offsetY
		}), t < s.scrollTop() && ("right" === a.settings.position || "left" === a.settings.position) && (r.tipso("update", "position", "bottom"), m(a)), t + u(o).height > s.scrollTop() + s.outerHeight() && ("right" === a.settings.position || "left" === a.settings.position) && (r.tipso("update", "position", "top"), m(a))
	}
	var s = "tipso",
		l = {
			speed: 400,
			background: "#55b555",
			titleBackground: "#333333",
			color: "#ffffff",
			titleColor: "#ffffff",
			titleContent: "",
			showArrow: !0,
			position: "top",
			width: 200,
			maxWidth: "",
			delay: 200,
			hideDelay: 0,
			animationIn: "",
			animationOut: "",
			offsetX: 0,
			offsetY: 0,
			arrowWidth: 8,
			tooltipHover: !1,
			content: null,
			ajaxContentUrl: null,
			ajaxContentBuffer: 0,
			contentElementId: null,
			useTitle: !1,
			templateEngineFunc: null,
			onBeforeShow: null,
			onShow: null,
			onHide: null
		};
	d.extend(o.prototype, {
		init: function () {
			var e = this,
				t = this.$element;
			if (this.doc, t.addClass("tipso_style").removeAttr("title"), e.settings.tooltipHover) {
				var i = null,
					n = null;
				t.on("mouseover." + s, function () {
					clearTimeout(i), clearTimeout(n), n = setTimeout(function () {
						e.show()
					}, 150)
				}), t.on("mouseout." + s, function () {
					clearTimeout(i), clearTimeout(n), i = setTimeout(function () {
						e.hide()
					}, 200), e.tooltip().on("mouseover." + s, function () {
						e.mode = "tooltipHover"
					}).on("mouseout." + s, function () {
						e.mode = "show", clearTimeout(i), i = setTimeout(function () {
							e.hide()
						}, 200)
					})
				})
			} else t.on("mouseover." + s, function () {
				e.show()
			}), t.on("mouseout." + s, function () {
				e.hide()
			});
			e.settings.ajaxContentUrl && (e.ajaxContent = null)
		},
		tooltip: function () {
			return this.tipso_bubble || (this.tipso_bubble = d('<div class="tipso_bubble"><div class="tipso_title"></div><div class="tipso_content"></div><div class="tipso_arrow"></div></div>')), this.tipso_bubble
		},
		show: function () {
			var e = this.tooltip(),
				t = this,
				i = this.win;
			!1 === t.settings.showArrow ? e.find(".tipso_arrow").hide() : e.find(".tipso_arrow").show(), "hide" === t.mode && (d.isFunction(t.settings.onBeforeShow) && t.settings.onBeforeShow(t.$element, t.element, t), t.settings.size && e.addClass(t.settings.size), t.settings.width ? e.css({
				background: t.settings.background,
				color: t.settings.color,
				width: t.settings.width
			}).hide() : t.settings.maxWidth ? e.css({
				background: t.settings.background,
				color: t.settings.color,
				maxWidth: t.settings.maxWidth
			}).hide() : e.css({
				background: t.settings.background,
				color: t.settings.color,
				width: 200
			}).hide(), e.find(".tipso_title").css({
				background: t.settings.titleBackground,
				color: t.settings.titleColor
			}), e.find(".tipso_content").html(t.content()), e.find(".tipso_title").html(t.titleContent()), m(t), i.on("resize." + s, function () {
				t.settings.position = t.settings.preferedPosition, m(t)
			}), window.clearTimeout(t.timeout), t.timeout = null, t.timeout = window.setTimeout(function () {
				t.ieFade || "" === t.settings.animationIn || "" === t.settings.animationOut ? e.appendTo("body").stop(!0, !0).fadeIn(t.settings.speed, function () {
					t.mode = "show", d.isFunction(t.settings.onShow) && t.settings.onShow(t.$element, t.element, t)
				}) : e.remove().appendTo("body").stop(!0, !0).removeClass("animated " + t.settings.animationOut).addClass("noAnimation").removeClass("noAnimation").addClass("animated " + t.settings.animationIn).fadeIn(t.settings.speed, function () {
					d(this).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
						d(this).removeClass("animated " + t.settings.animationIn)
					}), t.mode = "show", d.isFunction(t.settings.onShow) && t.settings.onShow(t.$element, t.element, t), i.off("resize." + s, null, "tipsoResizeHandler")
				})
			}, t.settings.delay))
		},
		hide: function (e) {
			var t = this,
				i = this.win,
				n = this.tooltip(),
				o = t.settings.hideDelay;
			e && (o = 0, t.mode = "show"), window.clearTimeout(t.timeout), t.timeout = null, t.timeout = window.setTimeout(function () {
				"tooltipHover" !== t.mode && (t.ieFade || "" === t.settings.animationIn || "" === t.settings.animationOut ? n.stop(!0, !0).fadeOut(t.settings.speed, function () {
					d(this).remove(), d.isFunction(t.settings.onHide) && "show" === t.mode && t.settings.onHide(t.$element, t.element, t), t.mode = "hide", i.off("resize." + s, null, "tipsoResizeHandler")
				}) : n.stop(!0, !0).removeClass("animated " + t.settings.animationIn).addClass("noAnimation").removeClass("noAnimation").addClass("animated " + t.settings.animationOut).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
					d(this).removeClass("animated " + t.settings.animationOut).remove(), d.isFunction(t.settings.onHide) && "show" === t.mode && t.settings.onHide(t.$element, t.element, t), t.mode = "hide", i.off("resize." + s, null, "tipsoResizeHandler")
				}))
			}, o)
		},
		close: function () {
			this.hide(!0)
		},
		destroy: function () {
			var e = this.$element,
				t = this.win;
			this.doc, e.off("." + s), t.off("resize." + s, null, "tipsoResizeHandler"), e.removeData(s), e.removeClass("tipso_style").attr("title", this._title)
		},
		titleContent: function () {
			var e = this.$element;
			return this.settings.titleContent ? this.settings.titleContent : e.data("tipso-title")
		},
		content: function () {
			var e, t = this.$element,
				i = this,
				n = this._title;
			return i.settings.ajaxContentUrl ? i._ajaxContent ? e = i._ajaxContent : (i._ajaxContent = e = d.ajax({
				type: "GET",
				url: i.settings.ajaxContentUrl,
				async: !1
			}).responseText, 0 < i.settings.ajaxContentBuffer ? setTimeout(function () {
				i._ajaxContent = null
			}, i.settings.ajaxContentBuffer) : i._ajaxContent = null) : i.settings.contentElementId ? e = d("#" + i.settings.contentElementId).text() : i.settings.content ? e = i.settings.content : !0 === i.settings.useTitle ? e = n : "string" == typeof t.data("tipso") && (e = t.data("tipso")), null !== i.settings.templateEngineFunc && (e = i.settings.templateEngineFunc(e)), e
		},
		update: function (e, t) {
			return t ? void(this.settings[e] = t) : this.settings[e]
		}
	});
	var c = function () {
		var e = document.createElement("p").style,
			t = ["ms", "O", "Moz", "Webkit"];
		if ("" === e.transition) return !0;
		for (; t.length;)
			if (t.pop() + "Transition" in e) return !0;
		return !1
	}();
	d[s] = d.fn[s] = function (t) {
		var i, n = arguments;
		return void 0 === t || "object" == typeof t ? (this instanceof d || d.extend(l, t), this.each(function () {
			d.data(this, "plugin_" + s) || d.data(this, "plugin_" + s, new o(this, t))
		})) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each(function () {
			var e = d.data(this, "plugin_" + s);
			e || (e = d.data(this, "plugin_" + s, new o(this, t))), e instanceof o && "function" == typeof e[t] && (i = e[t].apply(e, Array.prototype.slice.call(n, 1))), "destroy" === t && d.data(this, "plugin_" + s, null)
		}), void 0 !== i ? i : this) : void 0
	}
}),
function (a, s) {
	s.namespace(s, "common.widget.tooltip");
	var i = [],
		e = "Tooltip";

	function n(t) {
		var i, n, o = this,
			r = {
				background: "#ececec",
				color: "#323232",
				contentid: "",
				speed: 200,
				useTitle: !0,
				width: null,
				maxWidth: 300
			};
		s.common.util.eventCoordinator(o, e, ["ready"]);
		o.destroy = function () {
			return i.removeClass("ibm-widget-processed").tipso("destroy"), i
		}, o.init = function (e) {
			(i = a(e)).data("widget", o), "" !== (n = a.extend({}, r, i.data() || {}, t)).contentid && (n.useTitle = !1, n.tooltipHover = !0, n.content = a(document.getElementById(n.contentid)).html()), i.tipso(n), i.on("click", function () {
				i.tipso("hide")
			}), s.common.widget.manager.dispatchInitEvent(i[0])
		}
	}
	a.fn.tooltip = function (t) {
		return this.each(function () {
			var e;
			(e = new n(t), i.push(e), e).init(this)
		})
	}
}(jQuery, IBMCore),
function (s, l) {
	l.namespace(l, "common.widget.twisty");
	var i = [];

	function c(e, t) {
		l.common.util.statshelper.fireEvent({
			ibmEV: "widget",
			ibmEvGroup: "Twisty",
			ibmEvName: e,
			ibmEvAction: t
		})
	}

	function n(t) {
		var i, n, o = this,
			r = {};

		function a(e, t) {
			e.find("> a.ibm-twisty-trigger").text();
			t ? e.addClass("ibm-active").find("> div.ibm-twisty-body").removeClass("ibm-hide") : e.removeClass("ibm-active").find("> div.ibm-twisty-body").addClass("ibm-hide")
		}
		o.destroy = function () {
			return i.replaceWith(n), n
		}, o.init = function (e) {
			i = s(e), n = i.clone(!0), i.data("widget", o), s.extend({}, r, i.data() || {}, t), i.find("li").each(function () {
				var e = s(this);
				0 === e.find(" > a.ibm-twisty-trigger").length && 1 === e.find(" > .ibm-twisty-head").length && e.find(" > .ibm-twisty-head").replaceWith('<a class="ibm-twisty-trigger" href="javascript:void();">' + e.find(" > .ibm-twisty-head").html() + "</a>"), e.data("open") ? a(e, !0) : a(e, !1)
			}), i.on("click.twisty", ".ibm-twisty-trigger, .ibm-twisty-head", function (e) {
				var t, i;
				e.preventDefault(), t = s(this).closest("li"), i = t.find("> a.ibm-twisty-trigger").text(), -1 < t[0].className.indexOf("ibm-active") ? (a(t, !1), c("collapse", i)) : (a(t, !0), c("expand", i))
			}), l.common.widget.manager.dispatchInitEvent(i[0])
		}, o.openTwisty = a
	}
	s.fn.twisty = function (t) {
		return this.each(function () {
			var e;
			(e = new n(t), i.push(e), e).init(this)
		})
	}
}(jQuery, IBMCore),
function (s, l) {
	l.namespace(l, "common.widget.videolooper");
	var i = [];

	function n(t) {
		var i, n, o = this,
			r = {
				playtimes: 1
			},
			a = 1;
		o.destroy = function () {
			return i.removeClass("ibm-widget-processed").off(".videolooper"), i
		}, o.init = function (e) {
			(i = s(e)).data("widget", o), n = s.extend({}, r, i.data() || {}, t), a = n.playtimes, i.on("ended.videolooper", function () {
				0 !== (a -= 1) && this.play()
			}), l.common.widget.manager.dispatchInitEvent(i[0])
		}
	}
	s.fn.videolooper = function (t) {
		return this.each(function () {
			var e;
			(e = new n(t), i.push(e), e).init(this)
		})
	}
}(jQuery, IBMCore),
function (a, i) {
	var s = i.namespace(i, "common.widget.videoplayer");
	s.videos = [], s.object_name = "Videoplayer", a.fn.videoplayer = function (t) {
		return this.each(function () {
			var e = function (e, t) {
				var i = {
						videotype: "direct",
						width: a(e).width()
					},
					n = a.extend(!0, i, a(e).data(), t, {
						origEl: e
					}),
					o = {
						appliedSettings: n,
						init: function () {
							window.console.warn("v18: Video player type is not valid on this element: ", n.origEl)
						},
						status: "Video player type is not valid."
					};
				switch (n.videotype) {
					case "youtube":
						o = new s.youtube.Player(n);
						break;
					case "kaltura":
						o = new s.kaltura.Player(n);
						break;
					case "ustream":
						o = new s.ustream.Player(n)
				}
				return o
			}(this, t);
			s.videos.push(e), a(this).data("widget", e), e.init()
		})
	}, s.columnsToClass = function (e) {
		var t = "";
		switch (e) {
			case 6:
				t = "ibm-col-6-1";
				break;
			case 5:
				t = "ibm-col-5-1";
				break;
			case 3:
				t = "ibm-col-6-2";
				break;
			case 4:
				t = "ibm-col-4-1";
				break;
			case 2:
				t = "ibm-col-6-3";
				break;
			case 1:
				t = "ibm-col-1-1"
		}
		return t
	}, s.createOverlay = function (e) {
		var t = i.common.widget.overlay.createOverlay({
			allowResize: !1,
			backgroundcolor: "#000000",
			classes: e.overlayclasses + " ibm-video-overlay",
			contentHtml: " ",
			fullwidth: e.theatermode,
			hidexscroll: !0,
			seamless: !0
		});
		return t.init(), t
	}, s.createVideoCarousel = function (e, i) {
		var t, n = e.split(","),
			o = [];

		function r(e) {
			var t = "";
			return a.each(e, function () {
				t += '<div class="' + s.columnsToClass(i.carouselcolumns) + '"><div data-videoid="' + this + '"></div></div>'
			}), t
		}
		for (; n.length >= i.carouselcolumns;) t = n.splice(0, i.carouselcolumns), o.push('<div class="ibm-columns">' + r(t) + "</div>");
		0 < n.length && o.push('<div class="ibm-columns">' + r(n) + "</div>"), i.$origEl.html('<div data-widget="carousel">' + o.join(" ") + "</div>"), i.$origEl.find("[data-videoid]").each(function () {
			var e = a(this);
			a.extend(!0, e.data(), i.$origEl.data(), {
				videotype: i.videotype,
				videodisplay: "carousel-overlay" === i.videodisplay ? "overlayandtrigger" : "inline",
				videoid: e.data().videoid
			}), e.videoplayer(e.data())
		}), i.$origEl.find("[data-widget='carousel']").carousel({
			dots: !0,
			arrows: !0
		})
	}, s.fireVideoEvent = function (e) {
		var t, i = "n/a",
			n = e.playerState,
			o = Math.floor(e.currentTime),
			r = Math.floor(e.duration),
			a = e.percentWatched || Math.floor(o / r * 100);
		switch (e.playerState) {
			case 0:
				i = "launched";
				break;
			case 1:
				i = "paused";
				break;
			case 2:
				i = "played";
				break;
			case 3:
				i = "ended";
				break;
			case 99:
				i = "error"
		}
		0 === o && (o = "start", a = "0"), (r <= o || 3 === e.playerState) && (o = "end", a = "100"), "end" === o && 1 === e.playerState || (t = {
			type: "video",
			primaryCategory: "VIDEO",
			eventName: e.title,
			eventCategoryGroup: e.playerType,
			executionPath: e.videoId,
			execPathReturnCode: i,
			eventVidStatus: n,
			eventVidTimeStamp: o,
			eventVidLength: r,
			eventVidPlayed: a + "%"
		}, e.customMetricsData && (e.customMetricsData.driverId && (t.driverId = e.customMetricsData.driverId), e.customMetricsData.targetURL && (t.targetURL = e.customMetricsData.targetURL), e.customMetricsData.playerStateLabel && (t.playerStateLabel = e.customMetricsData.playerStateLabel)), window.ibmStats.event(t))
	}
}(jQuery, IBMCore),
function (k, C) {
	var x = C.namespace(C, "common.widget.videoplayer.kaltura"),
		T = {
			dev: {
				partnerId: 1511271,
				uiConfId: {
					title_sharing: 27801331
				}
			},
			prod: {
				partnerId: 1773841,
				uiConfId: {
					title_sharing: 27941801
				}
			},
			embedVideo: {
				dynamic: "https://cdnapisec.kaltura.com/p/{partnerId}/sp/{partnerId}00/embedIframeJs/uiconf_id/{uiConfId}/partner_id/{partnerId}"
			},
			images: {
				video: "https://cfvod.kaltura.com/p/{partnerId}/sp/{partnerId}00/thumbnail/entry_id/{videoId}/acv/191/width/{width}"
			}
		};

	function S(e) {
		return e.url.replace(/\{partnerId\}/g, T.prod.partnerId).replace(/\{uiConfId\}/g, E()).replace(/\{videoId\}/g, e.videoId).replace(/\{width\}/g, e.width).replace(/\{height\}/g, e.height)
	}

	function E() {
		return T.prod.uiConfId.title_sharing
	}
	x.apiStatus = "", x.loadApi = function () {
		if ("" === x.apiStatus) {
			x.apiStatus = "loading";
			var e = S({
					url: T.embedVideo.dynamic
				}),
				t = document.createElement("script"),
				i = document.getElementsByTagName("script")[0];
			t.src = e, i.parentNode.insertBefore(t, i)
		}
	}, x.Player = function (t) {
		var o = this,
			i = C.common.util.eventCoordinator(o, "videoplayer", ["videoDataReady"]),
			r = C.common.widget.videoplayer,
			a = {},
			s = {},
			e = {
				settings: {
					carouselcolumns: 6,
					customplaceholder: !1,
					maxnumvideos: 20,
					overlayclasses: "ibm-common-overlay ibm-overlay-alt",
					overlayplayerwidth: 564,
					overlayplayersize: "medium",
					placeholderalttext: "",
					showimageplaybutton: !0,
					showvideodescription: !1,
					showvideoduration: !0,
					showvideotitle: !0,
					theatermode: !1,
					titledisplaytype: "below",
					videodisplay: "inline",
					videodurationcolor: "default",
					videoid: "",
					videoplaylistid: "",
					videoratio: "16/9",
					videotitleoverride: "",
					videotype: "kaltura"
				}
			},
			l = "ibm-video-placeholder",
			n = {
				dataPrefix: "playervar_",
				defaults: {
					autoplay: 1,
					showinfo: 1
				}
			},
			c = {};

		function d(e) {
			var t = Math.round(o.player.evaluate("{video.player.currentTime}"));
			2 === e && 0 === t && (e = 0);
			var i = {
				playerType: "kaltura",
				title: o.player.evaluate("{mediaProxy.entry.name}"),
				currentTime: t,
				duration: o.player.evaluate("{mediaProxy.entry.duration}"),
				playerState: e,
				videoId: s.videoid
			};
			i.customMetricsData = C.common.util.statshelper.getCustomEventParams(s.$origEl), r.fireVideoEvent(i)
		}

		function u() {
			"large" === s.overlayplayersize ? (s.overlayplayerwidth = 745, s.overlayclasses = "ibm-common-overlay ibm-overlay-alt-two") : "xlarge" === s.overlayplayersize ? (s.overlayplayerwidth = 975, s.overlayclasses = "ibm-common-overlay ibm-overlay-alt-three") : (s.overlayplayerwidth = e.settings.overlayplayerwidth, s.overlayclasses = e.settings.overlayclasses)
		}

		function p(e, t) {
			var i = "" !== s.videotitleoverride ? s.videotitleoverride : c.name,
				n = t && "" !== t ? t : i;
			e.attr("aria-label", "MediaCenter - " + n)
		}

		function m() {
			i.subscribe("videoDataReady", "videoplayer", function () {
				var e = "",
					t = "",
					i = "" !== s.videotitleoverride ? s.videotitleoverride : c.name,
					n = "" !== s.placeholderalttext ? s.placeholderalttext : i;
				c && (s.showvideoduration && (t = '<div class="ibm-video-duration"><p class="ibm-padding-bottom-0">' + c.formattedTime + "</p></div>"), s.showvideotitle && (e += '<div class="ibm-video-title ibm-bold"><p class="ibm-padding-bottom-0">' + i + "</p></div>"), s.showvideodescription && (e += '<p class="ibm-padding-bottom-0">' + c.description + "</p>"), "overlay" === s.titledisplaytype && "" !== t && "" !== e ? o.$trigger.append('<div class="ibm-video-info">' + t + e + "</div>") : ("" !== t && o.$trigger.append('<div class="ibm-video-info">' + t + "</div>"), s.$origEl.children("div").after(e)), o.$trigger.children("img").attr("alt", n))
			})
		}

		function h(e) {
			var t = s.videoratio.split("/");
			return e / (t[0] / t[1])
		}

		function f(e) {
			var t = o.overlay ? s.width : s.$origEl.width(),
				i = S({
					url: T.images.video,
					videoId: e,
					width: t
				}),
				n = k('<a href="#"></a>').html('<img src="' + i + '" width="100%" height="100%" alt="" />');
			o.$trigger = s.customplaceholder ? s.$origEl.find("a") : n, o.$trigger.addClass(l), s.showimageplaybutton && g(o.$trigger)
		}

		function g(e) {
			e.find("img").before('<span class="ibm-play-link"></span>').parent()
		}

		function v(e, t) {
			var i = o.overlay ? h(s.width) : h(s.$origEl.width()),
				n = E();
			k(document.getElementById(e)).css("height", i), kWidget.embed({
				targetId: e,
				wid: "_" + T.prod.partnerId,
				uiconf_id: n,
				entry_id: t,
				flashvars: {
					autoPlay: a.autoplay,
					"titleLabel.plugin": a.showtitle,
					"share.plugin": a.showshare
				},
				params: {
					wmode: "transparent"
				},
				readyCallback: function (e) {
					o.player = k(document.getElementById(e)).get(0), o.player.addJsListener("playerPaused", function () {
						o.player, d(1)
					}), o.player.addJsListener("playerPlayed", function () {
						o.player, d(2)
					}), o.player.addJsListener("playerPlayEnd", function () {
						o.player, d(3)
					}), o.player.addJsListener("IbmCtaEvent", function (e) {
						var t = e;
						t.customMetricsData = k.extend(!0, t.customMetricsData, C.common.util.statshelper.getCustomEventParams(s.$origEl)), r.fireVideoEvent(t)
					})
				}
			})
		}

		function b(e, t) {
			new kWidget.api({
				wid: "_" + T.prod.partnerId
			}).doRequest({
				service: "media",
				action: "get",
				entryId: e
			}, function (e) {
				e.formattedTime = C.common.util.convertSecondsToHMS(e.duration), c = e, i.publish("videoDataReady")
			})
		}

		function y() {
			o.overlay.show(), k(document.getElementById(s.playerContainerId)).children("iframe")[0] ? setTimeout(function () {
				o.player.sendNotification("play")
			}, 600) : v(s.playerContainerId, s.videoid)
		}

		function w() {
			var e = s.videodisplay;
			switch (0 === e.indexOf("carousel-") && (e = "carousel"), s.$origEl.addClass("ibm-video-player-con"), e) {
				case "inline":
					b(s.videoid), f(s.videoid), k('<div id="' + s.playerContainerId + '"></div>').appendTo(s.$origEl.empty()).html(o.$trigger), m(), i.subscribe("videoDataReady", "videoplayer", function () {
						p(o.$trigger)
					}).runAsap(function () {
						p(o.$trigger)
					}), o.$trigger.click(function (e) {
						var t, i;
						e.preventDefault(), t = s.playerContainerId, i = s.videoid, v(t, i), k(window).on("resize", function () {
							var e = k(document.getElementById(s.playerContainerId)),
								t = {
									height: h(e.width()) + "px"
								};
							e.css(t).children("iframe").css(t)
						}), C.common.widget.manager.dispatchInitEvent(s.$origEl[0])
					});
					break;
				case "overlay":
					b(s.videoid), u(), s.showvideoduration && i.subscribe("videoDataReady", "videoplayer", function () {
						"none" !== s.videodurationcolor ? s.$origEl.append(' <span class="ibm-item-note">(' + c.formattedTime + ")</span>") : s.$origEl.append(" (" + c.formattedTime + ")")
					}), o.overlay = r.createOverlay(s), o.overlay.setHtml('<div id="' + s.playerContainerId + '" style="margin:auto;width:100%;"></div>'), o.overlay.subscribe("hide", "Videoplayer", function () {
						o.player.sendNotification("pause")
					}), t.showimageplaybutton && (s.$origEl.addClass(l), g(s.$origEl)), s.width = s.overlayplayerwidth, i.subscribe("videoDataReady", "videoplayer", function () {
						p(s.$origEl, s.$origEl.text())
					}).runAsap(function () {
						p(s.$origEl, s.$origEl.text())
					}), s.$origEl.click(function (e) {
						e.preventDefault(), y(), C.common.widget.manager.dispatchInitEvent(s.$origEl[0])
					});
					break;
				case "overlayandtrigger":
					b(s.videoid), u(), f(s.videoid), k("<div></div>").appendTo(s.$origEl.empty()).html(o.$trigger), m(), o.overlay = r.createOverlay(s), o.overlay.setHtml('<div id="' + s.playerContainerId + '"></div>'), o.overlay.subscribe("hide", "Videoplayer", function () {
						o.player.sendNotification("pause")
					}), s.width = s.overlayplayerwidth, i.subscribe("videoDataReady", "videoplayer", function () {
						p(o.$trigger)
					}).runAsap(function () {
						p(o.$trigger)
					}), o.$trigger.click(function (e) {
						e.preventDefault(), y(), C.common.widget.manager.dispatchInitEvent(s.$origEl[0])
					});
					break;
				case "carousel":
					"" !== s.videoplaylistid ? window.console.log("v18: Video playlist for Kaltura aren't setup yet.") : -1 < s.videoid.indexOf(",") && r.createVideoCarousel(s.videoid, s);
					break;
				default:
					C.common.util.debug.add("log", ["Video player display type unknown: ", s.$origEl])
			}
		}
		k.extend(!0, s, e.settings, t), s.id = s.origEl.id || C.common.util.generateId(), s.playerContainerId = s.id + "_playercontainer", s.$origEl = k(s.origEl), s.$restoreEl = s.$origEl.clone(!0), k.extend(!0, a, n.defaults, C.common.util.getDataAttributes(s.$origEl, n.dataPrefix), n.force), k.each(a, function (e, t) {
			"autoplay" !== e && "showinfo" !== e || (0 === t ? a[e] = !1 : 1 === t && (a[e] = !0))
		}), !0 === a.showinfo ? (a.showtitle = !0, a.showshare = !0) : (a.showtitle = !1, a.showshare = !1), o.appliedPlayerVars = a, o.appliedSettings = s, o.player = {
			status: "Kaltura player not created yet"
		}, o.destroy = function () {
			return o.overlay && o.overlay.destroy(), -1 < s.videodisplay.indexOf("carousel-") && s.$origEl.find(".ibm-video-player-con").each(function () {
				k(this).data("widget").overlay && k(this).data("widget").overlay.destroy()
			}), s.$origEl.replaceWith(s.$restoreEl), s.$restoreEl
		}, o.init = function () {
			"undefined" == typeof kWidget ? (C.common.util.queue.push(function () {
				return "undefined" != typeof kWidget
			}, function () {
				x.apiStatus = "ready", w()
			}), x.loadApi()) : w()
		}, o.showOverlayAndPlay = y, o.playVideo = function () {
			o.player.sendNotification && o.player.sendNotification("doPlay")
		}, o.playVideoAt = function (e) {
			o.player.sendNotification && o.player.sendNotification("doSeek", e)
		}, o.pauseVideo = function () {
			o.player.sendNotification && o.player.sendNotification("doPause")
		}, o.stopVideo = function () {
			o.player.sendNotification && o.player.sendNotification("doStop")
		}
	}
}(jQuery, IBMCore),
function (x, T) {
	var S = T.namespace(T, "common.widget.videoplayer.youtube");
	S.apiStatus = "", S.loadApi = function () {
		if ("" === S.apiStatus) {
			S.apiStatus = "loading";
			var e = document.createElement("script"),
				t = document.getElementsByTagName("script")[0];
			e.src = "https://www.youtube.com/iframe_api", t.parentNode.insertBefore(e, t)
		}
	}, S.Player = function (t) {
		var r = this,
			n = T.common.util.eventCoordinator(r, "videoplayer", ["videoDataReady"]),
			o = T.common.widget.videoplayer,
			e = "AIzaSyBPJgae27KnTkonw-GBNoY9i3eyEA1j8Tw",
			a = {
				images: {
					video: {
						thumbnail: "https://i.ytimg.com/vi/{videoId}/default.jpg",
						medium: "https://i.ytimg.com/vi/{videoId}/hqdefault.jpg",
						large: "https://i.ytimg.com/vi/{videoId}/maxresdefault.jpg"
					}
				},
				playlistVideos: "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults={maxResults}&playlistId={playlistId}&key=" + e,
				videoInfo: "https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id={videoId}&key=" + e,
				videoDuration: "https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id={videoId}&key=" + e
			},
			s = {},
			l = {},
			c = {
				events: {
					onStateChange: function (e) {
						var t = function (e) {
								var t = 1111;
								switch (e.data) {
									case 0:
										t = 3;
										break;
									case 1:
										t = 0 === Math.round(e.target.getCurrentTime()) ? 0 : 2;
										break;
									case 2:
										t = 1;
										break;
									default:
										t = 9999
								}
								return t
							}(e),
							i = {
								playerType: "youtube",
								title: e.target.getVideoData().title,
								currentTime: e.target.getCurrentTime(),
								duration: e.target.getDuration(),
								playerState: t,
								videoId: l.videoid
							};
						i.customMetricsData = T.common.util.statshelper.getCustomEventParams(l.$origEl), o.fireVideoEvent(i), 1 === e.data && x(".ibm-widget-processed[data-widget='videoplayer']").each(function () {
							if (this !== l.$origEl[0]) try {
								x(this).data("widget").pauseVideo()
							} catch (e) {}
						})
					},
					onError: function (e) {
						var t = {
							title: e.target.getVideoData().title,
							currentTime: "0",
							duration: e.target.getDuration(),
							playerState: 99
						};
						t.customMetricsData = T.common.util.statshelper.getCustomEventParams(l.$origEl), o.fireVideoEvent(t)
					}
				},
				settings: {
					autoplay: !1,
					carouselcolumns: 6,
					customplaceholder: !1,
					imagesize: "large",
					maxnumvideos: 20,
					overlayclasses: "ibm-common-overlay ibm-overlay-alt",
					overlayplayerwidth: 564,
					overlayplayersize: "medium",
					placeholderalttext: "",
					showimageplaybutton: !0,
					showvideodescription: !1,
					showvideoduration: !0,
					showvideotitle: !0,
					theatermode: !1,
					titledisplaytype: "below",
					videodisplay: "inline",
					videodurationcolor: "default",
					videoid: "",
					videoplaylistid: "",
					videoratio: "16/9",
					videotitleoverride: "",
					videotype: "youtube"
				}
			},
			d = "ibm-video-placeholder",
			i = {
				dataPrefix: "playervar_",
				defaults: {
					autoplay: 1,
					hl: T.common.meta.page.pageInfo.language.toLowerCase(),
					iv_load_policy: 3,
					listType: "playlist",
					origin: document.location.protocol + "//" + document.location.host,
					rel: 0,
					showinfo: 1
				},
				force: {
					controls: 1,
					modestbranding: 0,
					theme: "dark"
				}
			},
			u = {};

		function p() {
			"large" === l.overlayplayersize ? (l.overlayplayerwidth = 745, l.overlayclasses = "ibm-common-overlay ibm-overlay-alt-two") : "xlarge" === l.overlayplayersize ? (l.overlayplayerwidth = 975, l.overlayclasses = "ibm-common-overlay ibm-overlay-alt-three") : (l.overlayplayerwidth = c.settings.overlayplayerwidth, l.overlayclasses = c.settings.overlayclasses)
		}

		function m(e, t) {
			var i = "" !== l.videotitleoverride ? l.videotitleoverride : u.items[0].snippet.title,
				n = t && "" !== t ? t : i;
			e.attr("aria-label", "Youtube - " + n)
		}

		function h() {
			n.subscribe("videoDataReady", "videoplayer", function () {
				var e = u;
				if (e.items[0]) {
					var t = "",
						i = "",
						n = "" !== l.videotitleoverride ? l.videotitleoverride : e.items[0].snippet.title,
						o = "" !== l.placeholderalttext ? l.placeholderalttext : n;
					l.showvideoduration && (i = '<div class="ibm-video-duration"><p class="ibm-padding-bottom-0">' + e.formattedTime + "</p></div>"), l.showvideotitle && (t += '<div class="ibm-video-title ibm-bold"><p class="ibm-padding-bottom-0">' + n + "</p></div>"), l.showvideodescription && (t += '<p class="ibm-padding-bottom-0">' + e.items[0].snippet.description + "</p>"), "overlay" === l.titledisplaytype && "" !== i && "" !== t ? r.$trigger.append('<div class="ibm-video-info">' + i + t + "</div>") : ("" !== i && r.$trigger.append('<div class="ibm-video-info">' + i + "</div>"), l.$origEl.children("div").after(t)), r.$trigger.children("img").attr("alt", o)
				}
			})
		}

		function f(e) {
			var t = l.videoratio.split("/");
			return e / (t[0] / t[1])
		}

		function g() {
			u.items[0].snippet.thumbnails.maxres || r.$trigger.find("img").attr("src", u.items[0].snippet.thumbnails.medium.url)
		}

		function v(e) {
			var t = a.images.video[l.imagesize] || a.images.video.large,
				i = x('<a href="#"></a>').html('<img src="' + t.replace("{videoId}", e) + '" width="100%" height="100%" alt="" />');
			r.$trigger = l.customplaceholder ? l.$origEl.find("a") : i, l.customplaceholder || n.subscribe("videoDataReady", "videoplayer", g).runAsap(g), r.$trigger.addClass(d), l.showimageplaybutton && b(r.$trigger)
		}

		function b(e) {
			e.find("img").before('<span class="ibm-play-youtube"></span>').parent()
		}

		function y(t, i) {
			var n = r.overlay ? f(l.width) : f(l.$origEl.width());
			YT.ready(function () {
				var e = new YT.Player(t[0], {
					videoId: i,
					width: l.theatermode ? l.width : "100%",
					height: n,
					host: "https://www.youtube-nocookie.com",
					playerVars: s,
					events: c.events
				});
				r.player = e
			})
		}

		function w(e, t) {
			x.getJSON(a.videoInfo.replace("{videoId}", e)).done(function (e) {
				var t, i;
				0 < e.items.length && (e.formattedTime = (t = e.items[0].contentDetails.duration, -1 === (i = (t.match(/(\d+)(?=[MHS])/gi) || []).map(function (e) {
					return e.length < 2 ? "0" + e : e
				}).join(":")).indexOf(":") && (t.indexOf("M") < 0 ? i = "00:" + i : i += ":00"), i)), u = e, n.publish("videoDataReady")
			})
		}

		function k() {
			r.overlay.show(), x("div#" + l.id + "-tmpcon")[0] ? y(x("div#" + l.id + "-tmpcon"), l.videoid) : setTimeout(function () {
				r.player.playVideo()
			}, 600)
		}

		function C() {
			var e = l.videodisplay;
			switch (0 === e.indexOf("carousel-") && (e = "carousel"), l.$origEl.addClass("ibm-video-player-con"), e) {
				case "inline":
					w(l.videoid), v(l.videoid), x("<div></div>").appendTo(l.$origEl.empty()).html(r.$trigger), h(), l.$origEl.closest(".ibm-widget-processed[data-widget='setsameheight']")[0] && l.$origEl.closest(".ibm-widget-processed[data-widget='setsameheight']").data("widget").adjustHeights(!0), n.subscribe("videoDataReady", "videoplayer", function () {
						m(r.$trigger)
					}).runAsap(function () {
						m(r.$trigger)
					}), r.$trigger.click(function (e) {
						var t, i;
						e.preventDefault(), t = l.$origEl.children("div"), i = l.videoid, y(t, i), x(window).on("resize", function () {
							var e = x(r.player.getIframe()),
								t = f(e.parent().width());
							e.attr("height", t + "px")
						}), T.common.widget.manager.dispatchInitEvent(l.$origEl[0])
					}), l.autoplay && r.$trigger.trigger("click");
					break;
				case "overlay":
					w(l.videoid), p(), l.showvideoduration && n.subscribe("videoDataReady", "videoplayer", function () {
						"none" !== l.videodurationcolor ? l.$origEl.append(' <span class="ibm-item-note">(' + u.formattedTime + ")</span>") : l.$origEl.append(" (" + u.formattedTime + ")")
					}), r.overlay = o.createOverlay(l), r.overlay.setHtml('<div id="' + l.id + '-tmpcon"></div>'), r.overlay.subscribe("hide", "Videoplayer", function () {
						r.player.pauseVideo()
					}), t.showimageplaybutton && (l.$origEl.addClass(d), b(l.$origEl)), l.width = l.overlayplayerwidth, n.subscribe("videoDataReady", "videoplayer", function () {
						m(l.$origEl, l.$origEl.text())
					}).runAsap(function () {
						m(l.$origEl, l.$origEl.text())
					}), l.$origEl.click(function (e) {
						e.preventDefault(), k(), T.common.widget.manager.dispatchInitEvent(l.$origEl[0])
					});
					break;
				case "overlayandtrigger":
					w(l.videoid), p(), v(l.videoid), x("<div></div>").appendTo(l.$origEl.empty()).html(r.$trigger), h(), l.$origEl.closest(".ibm-widget-processed[data-widget='setsameheight']")[0] && l.$origEl.closest(".ibm-widget-processed[data-widget='setsameheight']").data("widget").adjustHeights(!0), r.overlay = o.createOverlay(l), r.overlay.setHtml('<div id="' + l.id + '-tmpcon"></div>'), r.overlay.subscribe("hide", "Videoplayer", function () {
						r.player.pauseVideo()
					}), l.width = l.overlayplayerwidth, n.subscribe("videoDataReady", "videoplayer", function () {
						m(r.$trigger)
					}).runAsap(function () {
						m(r.$trigger)
					}), r.$trigger.click(function (e) {
						e.preventDefault(), k(), T.common.widget.manager.dispatchInitEvent(l.$origEl[0])
					});
					break;
				case "carousel":
					"" !== l.videoplaylistid ? x.getJSON(a.playlistVideos.replace("{playlistId}", l.videoplaylistid).replace("{maxResults}", l.maxnumvideos)).done(function (e) {
						var t = "";
						x.each(e.items, function () {
							t += "," + this.contentDetails.videoId
						}), t = t.substring(1), o.createVideoCarousel(t, l)
					}) : -1 < l.videoid.indexOf(",") && o.createVideoCarousel(l.videoid, l);
					break;
				default:
					T.common.util.debug.add("log", ["Video player display type unknown: ", l.$origEl])
			}
		}
		x.extend(!0, l, c.settings, t), l.id = l.origEl.id || T.common.util.generateId(), l.$origEl = x(l.origEl), l.$restoreEl = l.$origEl.clone(!0), x.extend(!0, s, i.defaults, T.common.util.getDataAttributes(l.$origEl, i.dataPrefix), i.force), r.appliedPlayerVars = s, r.appliedSettings = l, "" !== r.appliedSettings.videoplaylistid && (r.appliedPlayerVars.list = r.appliedSettings.videoplaylistid), r.player = {
			status: "YT.player not created yet"
		}, r.destroy = function () {
			return r.overlay && r.overlay.destroy(), -1 < l.videodisplay.indexOf("carousel-") && l.$origEl.find(".ibm-video-player-con").each(function () {
				x(this).data("widget").overlay && x(this).data("widget").overlay.destroy()
			}), l.$origEl.replaceWith(l.$restoreEl), l.$restoreEl
		}, r.init = function () {
			var t, e;
			"undefined" == typeof YT ? (t = T.common.util.queue.push(function () {
				return "undefined" != typeof YT
			}, function () {
				clearTimeout(e), S.apiStatus = "ready", C()
			}), e = setTimeout(function () {
				var e;
				T.common.util.queue.remove(t), window.console.warn("YouTube API took to long. Falling back to Kaltura."), (e = l.$origEl.data("kalturaFallbackid")) && "" !== e && (T.common.util.debug.add("log", "Switching " + l.$origEl + " to Kaltura fallback ID " + e), l.$origEl.data({
					videotype: "kaltura",
					videoid: e
				}).videoplayer())
			}, 3e3), S.loadApi()) : C()
		}, r.showOverlayAndPlay = k, r.playVideo = function () {
			r.player.playVideo && r.player.playVideo()
		}, r.playVideoAt = function (e) {
			r.player.playVideo && (r.player.seekTo(e), r.player.playVideo())
		}, r.pauseVideo = function () {
			r.player.pauseVideo && r.player.pauseVideo()
		}, r.stopVideo = function () {
			r.player.stopVideo && r.player.stopVideo()
		}
	}
}(jQuery, IBMCore);
var UstreamEmbed = function () {
	var v = void 0 !== Object.keys,
		b = {},
		t = new RegExp("^(http(?:s)?://[^/]+)", "im");

	function e(e) {
		return function (e) {
			var t = y(e),
				i = function (r) {
					var i, a, s, l, c = !1,
						d = !1,
						u = [],
						p = {},
						o = {},
						m = [];

					function n(e) {
						if ("socialstream" !== e) {
							if (!c) return u || (u = []), void u.push(arguments);
							var t, i = (t = arguments, Array.prototype.slice.call(t, 0)).slice(1);
							i[0] && "function" == typeof i[0] && (p[e] || (p[e] = []), p[e].push(i[0])), x(r, a, {
								cmd: e,
								args: i
							})
						} else if (S(window, "message", h), l = y(arguments[1]), s = T(l.getAttribute("src")), d = !0, m.length)
							for (var n = 0, o = m.length; n < o; n++) C(m[n])
					}

					function h(e) {
						var t = l;
						t && t.contentWindow && t.contentWindow === e.source ? i.onmessage(e) : e.source === l.id && i.onmessage(e)
					}

					function f(e) {
						var t, i = JSON.parse(e.data);
						i.cmd && "ready" == i.cmd ? x(l, s, {
							cmd: "ready"
						}) : (t = (t = [i.cmd]).concat(i.args), n.apply(this, t))
					}

					function g() {
						c = !0, x(r, a, {
								cmd: "apihandshake",
								args: []
							}),
							function () {
								if (u) {
									for (; u.length;) n.apply(this, u.shift());
									u = null
								}
							}(), l && x(l, s, {
								cmd: "viewer_ready"
							})
					}

					function e() {
						n.apply(this, arguments)
					}
					return a = T(r.getAttribute("src")).toLowerCase(), r.onload = function () {
						x(r, a, {
							cmd: "ready"
						})
					}, i = {
						host: a,
						callMethod: e,
						getProperty: function () {
							e.apply(this, arguments)
						},
						addListener: function (e, t) {
							o[e] || (o[e] = []), o[e].push(t)
						},
						removeListener: function (e, t) {
							if (t)
								for (var i = 0, n = o[e].length; i < n; i++) o[e][i] === t && o[e].splice(i, 1);
							else o[e] = null
						},
						onmessage: function (e) {
							var t;
							if (a || s || m.push({
									origin: e.origin,
									data: e.data
								}), e.origin.toLowerCase() == a) {
								try {
									t = JSON.parse(e.data)
								} catch (e) {
									return
								}
								if (t.sstream) return void f(e);
								if (t.event && t.event.ready && (g(), w(o, "ready")), t.event && !0 === t.event.live) return void w(o, "live");
								if (t.event && !1 === t.event.live) return void w(o, "offline");
								if (t.event && !t.event.ready)
									if (v) Object.keys(t.event).forEach(function (e) {
										w(o, e, t.event[e])
									});
									else
										for (var i in t.event) t.event.hasOwnProperty(i) && w(o, i, t.event[i]);
								if (t.property)
									if (v) Object.keys(t.property).forEach(function (e) {
										k(p, e, t.property[e])
									});
									else
										for (var i in t.property) t.property.hasOwnProperty(i) && k(p, i, t.property[i])
							} else if (d && e.origin == s) return void f(e)
						},
						destroy: function () {
							d = c = !1, s = a = "", l = null, u = [], p = {}, o = {}, m = [], b[r.id] && (b[r.id] = null), r = null
						}
					}
				}(t);
			t.id || (t.id = "UstreamEmbed" + Math.ceil(1e5 * Math.random()));
			return i.id = t.id, b[t.id] = i
		}(e)
	}

	function y(e) {
		return "string" == typeof e && (e = document.getElementById(e)), e
	}

	function w(e, t, i) {
		for (var n in e[t]) e[t].hasOwnProperty(n) && e[t][n].call(window, t, i)
	}

	function k(e, t, i) {
		if (e[t]) {
			var n = e[t];
			e[t] = null, delete e[t], n.forEach(function (e) {
				e.call(window, i)
			})
		}
	}

	function C(e) {
		var t, i;
		for (t in b) b.hasOwnProperty(t) && b[t] && ((i = document.getElementById(t)) && i.contentWindow ? i.contentWindow === e.source && b[t].onmessage(e) : "string" == typeof e.source && e.source == t && b[t].onmessage(e))
	}

	function x(e, t, i) {
		e.contentWindow.postMessage(JSON.stringify(i), t)
	}

	function T(e) {
		return e.indexOf("http") < 0 && (e = location.protocol + e), e.match(t)[1].toString()
	}

	function S(e, t, i) {
		e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent("on" + t, i)
	}
	return S(window, "message", C), "function" == typeof define && define.amd && define([], function () {
		return e
	}), window.UstreamEmbed = e
}();
! function (m, h) {
	h.namespace(h, "common.widget.videoplayer.ustream").Player = function (t) {
		var n, o = this,
			r = h.common.widget.videoplayer,
			a = {},
			i = {
				settings: {
					autoplay: !1,
					customplaceholder: !1,
					overlayclasses: "ibm-common-overlay ibm-overlay-alt",
					overlayplayerwidth: 554,
					overlayplayersize: "medium",
					recorded: !1,
					showimageplaybutton: !0,
					showtitle: !0,
					videodisplay: "inline",
					videoid: ""
				}
			},
			s = "ibm-video-placeholder";

		function l(e, t) {
			if (n !== t) {
				n = t;
				var i = {
					playerType: "ustream",
					title: o.appliedSettings.videoid,
					currentTime: 0,
					duration: 0,
					playerState: t ? 2 : 1,
					videoId: o.appliedSettings.videoid
				};
				i.customMetricsData = h.common.util.statshelper.getCustomEventParams(a.$origEl), r.fireVideoEvent(i)
			}
		}

		function c(e) {
			u(e)
		}

		function d(e) {
			e.find("img").before('<span class="ibm-play-link"></span>').parent()
		}

		function u(e) {
			var t = "",
				i = "//www.ustream.tv/embed/";
			a.autoplay && (t += "&autoplay=true"), a.showtitle || (t += "&showtitle=false"), a.recorded && (i += "recorded/");
			var n = m('<div style="padding-bottom:56.25%; position:relative; display:block; width: 100%"><iframe src="' + i + a.videoid + "?html5ui=1" + t + '" width="100%" height="100%" frameborder="0" style="position:absolute; top:0; left: 0" allowfullscreen webkitallowfullscreen></iframe></div>');
			o.player = window.UstreamEmbed(n.appendTo(e.empty()).children("iframe")[0]), o.player.addListener("playing", l)
		}

		function p() {
			o.overlay.show(), document.getElementById(a.id + "-tmpcon") ? (a.autoplay = !0, u(m(document.getElementById(a.id + "-tmpcon")).parent())) : setTimeout(function () {
				o.playVideo()
			}, 300)
		}
		m.extend(!0, a, i.settings, t), a.id = a.origEl.id || h.common.util.generateId(), a.$origEl = m(a.origEl), a.$restoreEl = a.$origEl.clone(!0), o.appliedSettings = a, o.player = {
			status: "uStream player not created yet"
		}, o.destroy = function () {
			return o.overlay && o.overlay.destroy(), a.$origEl.replaceWith(a.$restoreEl), a.$restoreEl
		}, o.init = function () {
			! function () {
				var e = a.videodisplay;
				0 === e.indexOf("carousel-") && (e = "carousel");
				switch (a.$origEl.addClass("ibm-video-player-con"), e) {
					case "inline":
						a.customplaceholder ? (a.customplaceholder && (o.$trigger = a.$origEl.find("a"), o.$trigger.addClass(s), a.showimageplaybutton && d(o.$trigger)), m("<div></div>").appendTo(a.$origEl.empty()).html(o.$trigger), o.$trigger.click(function (e) {
							e.preventDefault(), a.autoplay = !0, c(m(" > div", a.$origEl)), h.common.widget.manager.dispatchInitEvent(a.$origEl[0])
						})) : (c(a.$origEl), h.common.widget.manager.dispatchInitEvent(a.$origEl[0])), a.autoplay && o.$trigger.trigger("click");
						break;
					case "overlay":
						"large" === a.overlayplayersize ? a.overlayclasses = "ibm-common-overlay ibm-overlay-alt-two" : "xlarge" === a.overlayplayersize ? a.overlayclasses = "ibm-common-overlay ibm-overlay-alt-three" : a.overlayclasses = i.settings.overlayclasses, o.overlay = r.createOverlay(a), o.overlay.setHtml('<div id="' + a.id + '-tmpcon"></div>'), t.showimageplaybutton && (a.$origEl.addClass(s), d(a.$origEl)), a.$origEl.click(function (e) {
							e.preventDefault(), p(), h.common.widget.manager.dispatchInitEvent(a.$origEl[0])
						}), o.overlay.subscribe("hide", "Videoplayer", function () {
							o.pauseVideo()
						});
						break;
					default:
						h.common.util.debug.add("log", ["Video player display type unknown: ", a.$origEl])
				}
			}()
		}, o.showOverlayAndPlay = p, o.playVideo = function () {
			o.player.callMethod && o.player.callMethod("play")
		}, o.playVideoAt = function (e) {
			o.player.callMethod && o.player.callMethod("seek", e)
		}, o.pauseVideo = function () {
			o.player.callMethod && o.player.callMethod("pause")
		}, o.stopVideo = function () {
			o.player.callMethod && o.player.callMethod("stop")
		}
	}
}(jQuery, IBMCore),
function (m, h) {
	var a, f, i, e = h.namespace(h, "common.widget.surveyccfintercept"),
		u = {
			global_minimum_wait: 30,
			interceptDisp: "pageLoad",
			surveyDisp: "immediate",
			anon: "true",
			anonData: {
				userName: "",
				userEmail: "",
				emailInfoLoaded: !1
			},
			percent: 0,
			start: "",
			stop: "",
			presentDelay: 45,
			invitation: {
				title: "Tell IBM what you think",
				content: "Would you please take 1 minute to take this survey?",
				yes_label: "Yes",
				no_label: "No thanks"
			},
			survey: {
				type: "medallia",
				id: "web-exp",
				width: 700,
				height: 700,
				metaData: ""
			}
		},
		p = {
			intercept: {
				enabled: !0,
				percent: 0,
				start: "Jul 27 2016",
				stop: "Jul 27 2099",
				invitation: {
					title: "Tell IBM what you think",
					content: "Would you please take a minute to send IBM your feedback?",
					yes_label: "Yes",
					no_label: "No Thanks"
				},
				survey: {
					type: "medallia",
					id: "web-exp",
					width: 970,
					height: 700
				}
			}
		},
		s = "",
		k = null,
		l = null,
		g = {
			randNum: 100 * Math.random(),
			globalDefault: null,
			pageCustom: null,
			pageAlt: null
		},
		C = [],
		x = location.href.replace(location.protocol + "//", ""),
		v = IBMCore.www.module.truste.getUiAllowedStorageTtl(2592e3),
		T = {
			en: "enus",
			de: "dede",
			es: "esco",
			fr: "frfr",
			it: "itit",
			pt: "ptbr",
			ko: "kokr",
			ja: "jajp",
			ru: "ruru",
			zh: "zhcn",
			tr: "trtr"
		};

	function b(e) {
		if (e) {
			var t = e.cookie_name = "ccf-" + e.survey.type + ":" + e.survey.id;
			e.isActive = (r = e.start, a = !1, s = new Date, new Date(r) < s && (a = !0), a && (i = e.stop, n = !1, o = new Date, new Date(i) < o && (n = !0), !n) && e.enabled && 0 !== e.percent), e.seen = null !== h.common.util.cookie.get(t)
		}
		var i, n, o, r, a, s;
		return e
	}

	function y() {
		i = function () {
				var e = IBMCore.common.meta.page.pageInfo.ibm,
					t = e.lc,
					i = "enus";
				if (t) {
					var n = t + e.cc; - 1 < ["eses", "zhtw", "frca"].indexOf(n) ? i = n : T[t] && (i = T[t])
				}
				return i
			}(), (k = m.extend(!0, u, h.common.util.config.get("survey.intercept"))).cookie_name = "ccf-" + k.survey.type + "-" + k.survey.id,
			function () {
				var e = "",
					t = function () {
						var t, e, i, n, o = [],
							r = k.survey.metaData,
							a = window.digitalData.page,
							s = a.category.ibm,
							l = a.pageInfo.ibm;
						if ("medallia" === k.survey.type.toLowerCase()) {
							o.push("tstamp=" + (f = new Date, g = f.getUTCDate() < 10 ? "0" + f.getUTCDate() : f.getUTCDate(), v = f.getUTCHours() < 10 ? "0" + (f.getUTCMonth() + 1) : f.getUTCMonth() + 1, b = f.getUTCHours() < 10 ? "0" + f.getUTCHours() : f.getUTCHours(), y = f.getUTCMinutes() < 10 ? "0" + f.getUTCMinutes() : f.getUTCMinutes(), w = f.getUTCSeconds() < 10 ? "0" + f.getUTCSeconds() : f.getUTCSeconds(), f.getUTCFullYear() + "-" + v + "-" + g + " " + b + ":" + y + ":" + w));
							try {
								t = IBMCore.common.meta.page.pageInfo.language.split("-")
							} catch (e) {
								t = ["en-US"].split("-")
							}
							var c;
							c = l.country && "WW" !== l.country ? l.country : "US", o.push($("country", c.toUpperCase(), "US"));
							var d = Object.keys(T);
							if (-1 < d.indexOf(t[0].toLowerCase()) ? "ca" === c || "tw" === c || "co" === c ? o.push($("lang", t[0] + "_" + c.toUpperCase())) : o.push($("lang", t[0])) : o.push($("lang", "en")), IBMCore.common.util.user) {
								var u = IBMCore.common.util.user.getInfo().country.toUpperCase();
								o.push($("usercountry", u))
							}
							o.push($("source", "footer"));
							var p, m = "";
							if (C.override.hasOwnProperty(x) && (p = C.override[x].survey), p && p.metaData && (m = p.metaData), m ? e = m.split("&") : r && (e = r.split("&")), e)
								for (n = 0; n < e.length; n++) i = e[n].split("="), o.indexOf(i[0]) < 0 && o.push($(i[0], i[1]));
							m.indexOf("pgroup") < 0 && o.push($("pgroup", null, "default")), m.indexOf("pparent") < 0 && l.owner && o.push($("pparent", l.owner)), m.indexOf("pmain") < 0 && l.industry && o.push($("pmain", l.industry)), l.owningPortal && o.push($("origin", l.owningPortal)), l.subject && o.push($("content", l.subject)), a.category && a.category.primaryCategory && o.push($("campaign", a.category.primaryCategory)), l.siteID && o.push($("oid", l.siteID)), a.pageInfo && a.pageInfo.pageName && o.push($("oname", a.pageInfo.pageName)), s.globalBrandTableL10 && s.gbt10 ? o.push($("gbt10", s.gbt10 + " - " + s.globalBrandTableL10)) : s.gbt10 && o.push($("gbt10", s.gbt10)), s.globalBrandTableL17 && s.gbt17 ? o.push($("gbt17", s.gbt17 + " - " + s.globalBrandTableL17)) : s.gbt17 && o.push($("gbt17", s.gbt17)), s.globalBrandTableL20 && s.gbt20 ? o.push($("gbt20", s.gbt20 + " - " + s.globalBrandTableL20)) : s.gbt20 && o.push($("gbt20", s.gbt20)), s.globalBrandTableL30 && s.gbt30 ? o.push($("gbt30", s.gbt30 + " - " + s.globalBrandTableL30)) : s.gbt30 && o.push($("gbt30", s.gbt30)), s.globalBrandTableL40 && s.gbt40 ? o.push($("gbt40", s.gbt40 + " - " + s.globalBrandTableL40)) : s.gbt40 && o.push($("gbt40", s.gbt40)), s.ut10 && o.push($("ut10", s.ut10)), s.ut15 && o.push($("ut15", s.ut15)), s.ut17 && o.push($("ut17", s.ut17)), s.ut20 && o.push($("ut20", s.ut20)), s.ut30 && o.push($("ut30", s.ut30)), a.session && a.session.uPageViewID && o.push($("pageviewid", a.session.uPageViewID));
							var h = window.digitalData.user;
							h && h.profile && h.profile.auid && o.push($("upid", h.profile.auid)), h && h.user && h.segment && h.segment.isIBMer && o.push($("isibmer", h.segment.isIBMer)), (o = o.filter(Boolean)).push($("url", encodeURIComponent(window.location.href), ""))
						}
						var f, g, v, b, y, w;
						return 0 < o.length ? o.join("&") : ""
					}();
				switch (k.survey.type) {
					case "medallia":
						t = 0 < t.length ? "?" + t : "", e = "https://survey.medallia.eu/ibm-" + k.survey.id + t;
						break;
					case "qualtrics":
						e = "https://ibmsurveys.qualtrics.com/SE/?SID=" + k.survey.id;
						break;
					case "efm":
						e = "https://ucdsurvey1.torolab.ibm.com/ss2/wsb.dll/s/" + k.survey.id;
						break;
					case "verint":
						e = "https://survey.vovici.com/se/" + k.survey.id + "/?";
						break;
					case "userzoom":
						e = "https://s.userzoom.com/m/" + k.survey.id;
						break;
					case "sg":
						e = "https://www.surveygizmo.com/" + k.survey.id;
						break;
					case "customB":
						e = k.survey.url
				}
				return null !== e ? (k.survey.url = e, !0) : (window.console.warn("v18: Intercept survey type is unknown: " + k.survey.type), !1)
			}() && (a = window.digitalData.user.segment.isIBMer ? function () {
				var e, t, i = m("<div class='ibm-padding-content'>");
				e = m("<h2>").attr({
					class: "ibm-h1 ibm-bottom-top-1 ibm-center"
				}).html("Need Help ?"), '<p class="ibm-ind-link ibm-h3"><a class="ibm-help-link" href="https://w3.ibm.com/help" target="_blank">Help@IBM</a></p>';
				t = m("<div>").attr({
					class: "ibm-padding-bottom-0"
				}).html('<p class="ibm-ind-link ibm-h3"><a class="ibm-help-link" href="https://w3.ibm.com/help" target="_blank">Help@IBM</a></p><p class=\'ibm-button-link ibm-h5 ibm-background-blue-10 ibm-center ibm-padding-bottom-0 ibm-margin-bottom-0\'>Medallia survey suppressed for internal IBM visitors</p>'), i.append(e, t);
				var n = h.common.widget.overlay.createOverlay({
					backgroundcolor: "#ffffff",
					contentHtml: i,
					fullwidth: !1,
					seamless: !0,
					classes: "ibm-overlay ibm-overlay-alt"
				});
				return n.init(), n.subscribe("hide", "Overlay", function () {
					var e = w();
					h.common.util.cookie.set(k.cookie_name, e, {
						path: "/",
						domain: ".ibm.com",
						expires: v
					})
				}), n
			}() : function () {
				C.override.hasOwnProperty(x) && (f = C.override[x].invitation);
				var e = S("invitation_title"),
					t = S("invitation_content"),
					i = S("invitation_yes_label"),
					n = S("invitation_no_label"),
					o = S("feedback_statement_label"),
					r = window.location.href,
					a = m("<div class='ibm-center'>"),
					s = m("<h2>").attr({
						class: "ibm-h2 ibm-margin-top-1 ibm-margin-bottom-1"
					}).html(e),
					l = '<p class="ibm-h4">' + t + "</p>",
					c = "<p class='ibm-padding-content'><button class='ibm-btn-pri ibm-btn-blue-50' data-action='showme' data-attribute1='ok_survey_nps' data-attribute2=" + r + " >" + i + "</button> <button class='ibm-btn-pri ibm-btn-blue-50' data-action='hideme' data-attribute1='no_thanks_survey_nps' data-attribute2=" + r + " >" + n + "</button></p>",
					d = "<p id='feedback' class='ibm-button-link ibm-padding-top-1 ibm-padding-bottom-0 ibm-margin-bottom-0'><a href='#' class='ibm-btn-gray-50 ibm-margin-bottom-0 ibm-btn-pri ibm-fullwidth' data-action='feedback-slide' >" + o + "<a></p>",
					u = m("<div>").attr({
						class: "ibm-padding-bottom-0"
					}).html(l + c + d);
				a.append(s, u), m("body").click("#feedback", E);
				var p = h.common.widget.overlay.createOverlay({
					backgroundcolor: "#ffffff",
					contentHtml: a,
					fullwidth: !1,
					seamless: !0,
					classes: "ibm-overlay ibm-overlay-alt"
				});
				return p.init(), p.subscribe("hide", "Overlay", function () {
					var e = w();
					h.common.util.cookie.set(k.cookie_name, e, {
						path: "/",
						domain: ".ibm.com",
						expires: v
					})
				}), p
			}(), E(), "pageExit" !== k.interceptDisp && "siteExit" !== k.interceptDisp ? setTimeout(function () {
				a.show()
			}, k.presentDelay) : n())
	}

	function n() {
		var e = !1,
			i = {
				url: ""
			};

		function t() {
			if ("" === s) {
				if (IBMCore.common.widget.overlay.currentShowingOverlay()) return void window.console.log("v18: Survey invitation did not show because another overlay was currently showing.");
				a.show(), a.subscribe("hide", "Overlay", function () {
					"opt-in" === s ? (e = !0, l.subscribe("hide", "Overlay", function () {
						e = !1, o()
					})) : o()
				})
			} else l.show(), l.subscribe("hide", "Overlay", function () {
				e = !1, o()
			})
		}

		function n() {
			t(), r()
		}

		function o() {
			e || (e = !0, window.onbeforeunload = null, m(window).unbind("beforeunload"), "" !== i.url && ("" === i.target ? window.location.href = i.url : window.open(i.url, i.target)))
		}

		function r() {
			m(window).bind("beforeunload", function () {
				return t(), k.invitation.title
			}), setTimeout(function () {
				window.onbeforeunload = function () {
					return t(), k.invitation.title
				}
			}, 500)
		}
		return Array.prototype.diff = function (t) {
			return this.filter(function (e) {
				return t.indexOf(e) < 0
			})
		}, setTimeout(function () {
			m("#ibm-masthead a, .ibm-mobilemenu a").click(function (e) {
				var t = e.currentTarget.parentElement.parentElement;
				"" !== e.currentTarget.href && "#" !== e.currentTarget.href.substr(0, 1) && "ibm-menu-links" !== t.id && (e.preventDefault(), i.target = e.currentTarget.target, i.url = e.currentTarget.href, n())
			}), m("#ibm-footer-module a, #ibm-footer a").click(function (e) {
				"" !== e.currentTarget.href && "#" !== e.currentTarget.href.substr(0, 1) && (e.preventDefault(), i.target = e.currentTarget.target, i.url = e.currentTarget.href, n())
			}), m("a.ibm-intercept-exit-survey").click(function (e) {
				"" !== e.currentTarget.href && "#" !== e.currentTarget.href.substr(0, 1) && (e.preventDefault(), i.url = e.currentTarget.href, i.target = e.currentTarget.target, n())
			}), r()
		}, 1e3), {
			status: "loaded"
		}
	}

	function w() {
		return '{"date": ' + (new Date).getTime() + ',"type": "' + k.survey.type + '","id": "' + k.survey.id + '"}'
	}

	function S(e) {
		var t = C.defaults.invitation[e][i];
		return f && f[e] && (t = f[e][i]), t
	}

	function E() {
		var e = m("#" + a.getId());
		m("[data-action]", e).on("click", function () {
			var e, t;
			switch (m(this).data("action")) {
				case "hideme":
					s = "opt-out", a.hide();
					break;
				case "feedback-slide":
					s = "opt-in", a.hide(), e = '<div class="ibm-padding-content"><h2 class="ibm-bold">' + S("feedback_statement_label") + '</h2><p class="ibm-small">' + S("feedback_statement_content") + "</p></div>", (t = h.common.widget.overlay.createOverlay({
						backgroundcolor: "#ffffff",
						contentHtml: e,
						fullwidth: !1,
						seamless: !0,
						classes: "ibm-overlay ibm-overlay-alt"
					})).init(), t.subscribe("hide", "Overlay", function () {
						var e = w();
						h.common.util.cookie.set(k.cookie_name, e, {
							path: "/",
							domain: ".ibm.com",
							expires: v
						})
					}), l = t, "pageExit" !== k.surveyDisp && "siteExit" !== k.surveyDisp ? l.show() : n();
					break;
				case "showme":
					s = "opt-in", h.common.util.statshelper.fireEvent({
						ibmEV: "ol survey",
						ibmEvGroup: k.survey.type,
						ibmEvModule: k.survey.id,
						ibmEvAction: "intercept yes clicked"
					}), a.hide(), k.survey.url += "&inter=y", l = function () {
						var e, t, i, n = h.common.util.user.getInfo().ip;
						n && (e = "id=" + n), e && (e = -1 < k.survey.url.indexOf("?") ? "&" + e : "?" + e), i = 770 < window.innerWidth ? 950 : "100%", t = '<iframe src="{{survey_url}}" width="{{survey_width}}" height="800"></iframe>'.replace("{{survey_url}}", k.survey.url + e).replace("{{survey_width}}", i);
						var o = h.common.widget.overlay.createOverlay({
							backgroundcolor: "#ffffff",
							contentHtml: t,
							seamless: !0,
							classes: "ibm-overlay ibm-overlay-alt-three"
						});
						o.init();
						var r = m("#" + o.getId());
						return o.subscribe("show", "Overlay", function () {
							h.common.util.statshelper.fireEvent({
								ibmEV: "ol survey",
								ibmEvGroup: k.survey.type,
								ibmEvModule: k.survey.id,
								ibmEvAction: "intercept shown"
							});
							var e = w();
							h.common.util.cookie.set(k.cookie_name, e, {
								path: "/",
								domain: ".ibm.com",
								expires: v
							}), r.find("iframe").attr({
								height: r.height() - 80
							})
						}), o
					}(), "pageExit" !== k.surveyDisp && "siteExit" !== k.surveyDisp ? l.show() : n()
			}
		})
	}

	function $(e, t, i) {
		var n = e + "=" + t;
		return i = i || null, "" !== t && "REPLACE" !== t && null != t || (n = null === i ? "" : e + "=" + i), n
	}
	e.autoInit = function () {
		var e, t, i, n, o, r, a, s = null,
			l = 0;
		if (g.globalDefault = p.intercept, g.pageCustom = h.common.util.config.get("survey.intercept"), g.pageAlt = h.common.util.config.get("survey.intercept_alternate"), g.globalDefault = (e = g.globalDefault, 0 <= (t = h.common.util.config.get("survey.global_percent")) && (e.percent = Number(t)), e), g.globalDefault = b(g.globalDefault), g.pageCustom = b(g.pageCustom) || {}, g.pageAlt = b(g.pageAlt) || {}, l = g.pageAlt.isActive ? h.common.util.config.get("survey.entry_percent") : g.pageCustom.isActive ? g.pageCustom.percent : g.globalDefault.percent, o = (i = g).globalDefault, r = i.pageCustom, s = (a = i.pageAlt).isActive || r.isActive ? (a.isActive || !r.isActive || r.seen ? a.isActive && (a.seen ? r.isActive && !r.seen ? n = r : r.isActive || o.seen || (n = o) : g.randNum < a.percent || r.isActive && r.seen || !r.isActive && o.seen ? n = a : r.isActive && !r.seen ? n = r : r.isActive || o.seen || (n = o)) : n = r, n) : o.seen ? n : n = o) {
			h.common.util.debug.add("log", "Using survey config: " + s.survey.id);
			var c = m.extend(!0, {}, u, h.common.util.config.get("survey.intercept"), s || {});
			if ("web-exp" !== c.survey.id || !g.globalDefault.percent || g.globalDefault.percent && 5 !== g.globalDefault.percent) {
				var d = {
					ibmEV: "v18 survey tracker",
					ibmEvAction: c.survey.type,
					ibmEvGroup: c.survey.id,
					ibmEvModule: c.percent,
					ibmEvSection: l,
					ibmEvLinkTitle: g.globalDefault.percent,
					ibmEvLinkTarget: c.presentDelay
				};
				h.common.util.statshelper.fireEvent(d)
			}! function () {
				var e = h.common.util.cookie.get("__forcev18env"),
					t = {
						dataType: "script",
						url: "https://tags.tiqcdn.com/dle/ibm/web/d_medallia_survey_configurations.js?callback=?",
						timeout: 5e3,
						data: "prod"
					};
				e && (t = {
					dataType: "json",
					url: "https://singlesurveysystem-prod.w3ibm.mybluemix.net/callbackmergedata",
					timeout: 5e3,
					data: "preview"
				});
				m.ajax(t).done(function (e) {
					switch (t.data) {
						case "prod":
							C = window.utag.globals.dle.enrichments.d_medallia_survey_configurations;
							break;
						case "preview":
							C = e
					}
					y()
				})
			}(), setTimeout(function () {
				h.common.util.queue.remove(void 0), window.console.warn("v18: Intercept translations took too long, killed listener.")
			}, 1e3), m.ajax({
				url: h.common.util.config.get("jsFilesUrl") + "ccftranslations.js",
				dataType: "script",
				cache: !0
			}).fail(function (e) {
				window.console.error("v18: Error while loading intercept survey translation file.", e)
			})
		} else h.common.util.debug.add("log", "A survey config was matched but you have already seen it.")
	}, e.initFeedback = y
}(jQuery, IBMCore),
function (t, i) {
	i.common.meta.subscribe("dataReady", "NoticeChoice", function () {
		var e = i.common.meta.page.pageInfo;
		e.nc && e.nc.id && t(function () {
			(e.nc.id.form ? document.getElementById(e.nc.id.form) : document.getElementsByClassName("nc_register_form")[0] || document.getElementById("registerform")) && document.getElementById(e.nc.id.privacyDiv) && t.ajax({
				url: i.common.util.config.get("jsFilesUrlNC") + "notice-choice.js",
				dataType: "script",
				cache: !0
			})
		})
	})
}(jQuery, IBMCore),
function (e, t) {
	e(function () {
		!0 === t.common.util.config.get("contentwidgets.enabled") && (t.common.util.anchorlinkAdjustment && e("[data-widget=adjustanchorlinks]:not([data-init=false])").each(function () {
			t.common.util.anchorlinkAdjustment.adjustLinks(this)
		}), t.common.widget.checkbox && e("input[data-widget=checkbox]:not([data-init=false])").checkbox(), t.common.widget.datepicker && e("input[data-widget=datepicker]:not([data-init=false])").each(function () {
			t.common.widget.datepicker.init(this)
		}), t.common.widget.formvalidator && e("form[data-formvalidator=enable]:not([data-init=false])").each(function () {
			t.common.widget.formvalidator.init(this)
		}), t.common.widget.selectlistnav && e("[data-widget=selectlistnav]:not([data-init=false])").selectlistnav(), t.common.widget.leavingibm && e("[data-widget=leavingibm]:not([data-init=false])").leavingibm(), t.common.widget.masonry && e("[data-widget=masonry]:not([data-init=false])").each(function () {
			t.common.widget.masonry.init(this)
		}), t.common.widget.datatable && e("table[data-widget=datatable]:not([data-init=false])").each(function () {
			t.common.widget.datatable.init(this)
		}), t.common.widget.parallaxscroll && e("[data-widget=parallaxscroll]:not([data-init=false])").each(function () {
			t.common.widget.parallaxscroll.init(this)
		}), t.common.widget.rssdisplay && e("[data-widget=rssdisplay]:not([data-init=false])").rssdisplay(), t.common.widget.scrollable && e("[data-widget=scrollable]:not([data-init=false])").scrollable(), t.common.widget.stickytabs && e("[data-widget=stickytabs]:not([data-init=false])").stickytabs(), void 0 !== window.SyntaxHighlighter && e("[data-widget=syntaxhighlighter]:not([data-init=false])").syntaxhighlighter(), t.common.widget.tooltip && e("[data-widget=tooltip]:not([data-init=false])").tooltip(), t.common.widget.videoplayer && e("[data-widget=videoplayer]:not([data-init=false])").videoplayer(), t.common.widget.videolooper && e("[data-widget=videolooper]:not([data-init=false])").videolooper(), t.common.widget.selectlist && e("div.dataTables_length > label > select:not([data-init=false]), form select:not([data-init=false]), table select:not([data-init=false])").each(function () {
			t.common.widget.selectlist.init(this)
		}), t.common.widget.fileinput && e("input:file[data-widget=fileinput]:not([data-init=false])").fileinput(), t.common.widget.tablesrowselector && e("table[data-tablerowselector=enable]:not([data-init=false])").tablesrowselector(), t.common.widget.setsameheight && e("[data-widget=setsameheight]:not([data-init=false])").setsameheight(), t.common.widget.showhide && e("[data-widget=showhide]:not([data-init=false])").showhide(), t.common.widget.twisty && e("[data-widget=twisty]:not([data-init=false])").twisty(), t.common.widget.overlay && e("[data-widget=overlay]:not([data-init=false])").overlay(), t.common.widget.carousel && e("div[data-widget=carousel]:not([data-init=false])").carousel(), t.common.widget.dyntabs && e("div[data-widget=dyntabs]:not([data-init=false])").dyntabs(), t.common.widget.stepindicator && e("div[data-widget=stepindicator]:not([data-init=false])").stepindicator())
	}), t.common.widget.manager.dispatchEvent({
		evtEl: document.documentElement,
		evtName: "v18-ready"
	})
}(jQuery, IBMCore),
function (e, t) {
	function i(e) {
		window.console.timeStamp && window.console.timeStamp(e)
	}
	t.performance.Note = "Times are in MS", t.performance.jsStart = window.v18JsStart, t.performance.jsEnd = (new Date).getTime();
	var n = function () {
		return (new Date).getTime() - t.performance.jsStart
	};
	t.performance.getMetaTime = function () {
		t.performance.startToMetaLoaded = n()
	}, t.performance.getTranslationTime = function () {
		t.performance.startToTranslationsLoaded = n()
	}, t.performance.getMastheadMainLinksReady = function () {
		t.performance.onReadyToMastheadMainLinks = n(), i("Masthead main links created")
	}, t.performance.getMobilemenuReady = function () {
		t.performance.onReadyToMobilemenuLinks = n(), i("Mobile menu created (deferred)")
	}, t.performance.showRunTimes = function () {
		t.common.util.config.isEnabled("errorchecking") && setTimeout(function () {
			t.common.util.debug.add("info", "v18 JS KPIs (from JS start):\n  - Meta data ready: " + t.performance.startToMetaLoaded + "ms\n  - Translations ready: " + t.performance.startToTranslationsLoaded + "ms\n  - jQuery DocReady: " + t.performance.startToDocReady + "ms\n  - Masthead main links onscreen: " + t.performance.onReadyToMastheadMainLinks + "ms\n  - Mobile menu created (deferred): " + t.performance.onReadyToMobilemenuLinks + "ms\n")
		}, 20)
	}, e(function () {
		t.performance.startToDocReady = n(), i("jQuery DocReady")
	}), t.performance.startToEnd = n(), t.common.meta.subscribe("dataReady", "JSperf", t.performance.getMetaTime).runAsap(t.performance.getMetaTime), t.common.translations.subscribe("dataReady", "JSperf", t.performance.getTranslationTime).runAsap(t.performance.getTranslationTime), t.common.module.masthead.subscribe("ready", "JSperf", t.performance.getMastheadMainLinksReady).runAsap(t.performance.getMastheadMainLinksReady), t.common.module.mobilemenu.subscribe("ready", "JSperf", function () {
		t.performance.getMobilemenuReady(), setTimeout(t.performance.showRunTimes, 1e3)
	}).runAsap(function () {
		t.performance.getMobilemenuReady(), setTimeout(t.performance.showRunTimes, 1e3)
	})
}(jQuery, IBMCore), IBMPerformance.mark("V18-end-execute"), IBMPerformance.measure("V18-begin-end-execute", "V18-begin-execute", "V18-end-execute"),
	function (e, t) {
		t.common.util.config.isEnabled("wat") && "n" !== t.common.util.url.getParam("wat") && e(function () {
			setTimeout(function () {
				e.ajax({
					url: "https://1.www.s81c.com/common/scripts/wat.js",
					dataType: "script",
					cache: !0
				})
			}, 1e3)
		})
	}(jQuery, IBMCore),
	function (i, e) {
		window.top !== window.self && "preview-tool" === window.name && setTimeout(function () {
			["datepicker.css", "expertise-rtl.css", "expertise.css", "forms-rtl.css", "forms.css", "grid-16.css", "grid-duo.css", "grid-fluid-rtl.css", "grid-fluid.css", "liveperson-rtl.css", "liveperson.css", "syntaxhighlighter-rtl.css", "syntaxhighlighter.css", "tables-rtl.css", "tables.css", "textcolumns-rtl.css", "textcolumns.css", "www-hfonly.css", "www-rtl.css", "www-widgetsonly.css", "www.css"].forEach(function (e) {
				var t;
				0 < i("link[href*='v18/css/" + e + "']").length ? t = i("link[href*='v18/css/" + e + "']") : i("link[href*='/css/" + e + "']") && "localhost" === window.location.hostname && (t = i("link[href*='/css/" + e + "']")), t && t.attr("href", "https://1.www.s81c.com/common/v18/preview/css/" + e)
			}), i("body").prepend('<div class="ibm-background-red-10 ibm-padding-content">This is a preview page showing the upcoming Digital Design release</div>')
		}, 1e3)
	}(jQuery);