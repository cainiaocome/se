/*! Copyright 2015 Baidu Inc. All Rights Reserved. */
;
(function() {
	var l = void 0,
	m = ! 0,
	p = null,
	s = ! 1;
	function x(d) {
		return function() {
			return d
		}
	}
	var G = {
		t1: + new Date,
		t2: 0,
		t3: 0,
		t4: 0
	},
	I = ["search!"],
	aa = 3,
	ma = "BAIDU_DUP2_replacement",
	na = "http://dup.baidustatic.com/painter/",
	J = document,
	L = {},
	oa = 0,
	pa = 1,
	M = 2,
	N = 3,
	O = 4,
	qa = 5;
	function ra(d) {
		var g = sa(d),
		c = g[0],
		g = g[1];
		this.id = d;
		this.name = g;
		this.uri = P(g);
		this.Ld = ! g;
		this.status = oa;
		c && g && (this.Xd = R(S(c + "!")) || {
			load: function() {}
		});
		this.Wa = []
	}
	var X = window.BAIDU_DUP2_require || function(d, g, c) {
		T(d, function() {
			for (var c = [], f = 0; f < d.length; f++) c[f] = R(S(d[f]));
			W(g) && g.apply(window, c)
		},
		c)
	};
	function T(d, g, c) {
		var h = d.length;
		if (0 === h) g();
		else for (var f = h, j = 0; j < h; j++)(function(b) {
			function a() {
				if (b.status < M) e();
				else {
					for (var a = b.Wa, k = [], f = 0; f < a.length; f++) {
						var d = a[f];
						d && S(d).status < N && k.push(d)
					}
					0 === k.length ? e() : T(k, e, c)
				}
			}
			function e() {
				b && b.status < N && (b.status = N);
				0 === --f && g()
			}
			var k = b.Xd;
			k && (k.normalize && (b.name = k.normalize(b.name, P)), k.name2url && (b.uri = k.name2url(b.name)));
			b.status < M ? k && W(k.load) ? k.load(b.name, X, function(a) {
				Y(b.id, [], function() {
					return a
				});
				e()
			}) : ta(b, a, c) : a()
		})(S(d[j]))
	}
	var Z = {},
	$ = {},
	ua = {};
	function ta(d, g, c) {
		d.status = pa;
		ua[d.id] ? g() : $[d.id] ? Z[d.id].push(g) : ($[d.id] = m, Z[d.id] = [g], 0 === d.uri.indexOf("http://pos.baidu.com/acom?") && (G.t2 = + new Date), c ? (g = d.uri, d = J.createElement("script"), d.charset = "utf-8", d.async = m, d.src = g, g = J.getElementsByTagName("head")[0] || J.body, g.insertBefore(d, g.firstChild)) : J.write('<script charset="utf-8" src="' + d.uri + '"><\/script>'))
	}
	var Y = window.BAIDU_DUP2_define || function(d, g, c) {
		8 < d.length && 0 === d.indexOf("request!") && (G.t3 = + new Date);
		var h = S(d);
		h.status < M && (h.Wa = g, h.factory = c, h.status = h.Ld ? N: M);
		if ($[d]) {
			delete $[d];
			ua[d] = m;
			g = Z[d];
			for (delete Z[d]; d = g.shift();) d()
		}
	};
	function R(d) {
		if (!d) return p;
		if (d.status >= O) return d.qc;
		if (d.status < N && d.qc === l) return p;
		d.status = O;
		for (var g = [], c = 0; c < d.Wa.length; c++) g[c] = R(S(d.Wa[c]));
		var h = c = d.factory;
		W(c) && (h = c.apply(window, g));
		d.status = qa;
		return d.qc = h
	}
	function P(d) {
		return /^https?:\/\//.test(d) ? d: na + d + ".js"
	}
	function S(d) {
		return L[d] || (L[d] = new ra(d))
	}
	function sa(d) {
		var g, c = d ? d.indexOf("!") : - 1; - 1 < c && (g = d.slice(0, c), d = d.slice(c + 1, d.length));
		return [g, d]
	}
	function W(d) {
		return "[object Function]" === Object.prototype.toString.call(d)
	}
	Y("util/lang", [], function() {
		function d(c) {
			for (var d = {}, f = "Array Boolean Date Error Function Number RegExp String".split(" "), j = 0, b = f.length; j < b; j++) d["[object " + f[j] + "]"] = f[j].toLowerCase();
			return c == p ? "null": d[Object.prototype.toString.call(c)] || "object"
		}
		var g = Object.prototype.hasOwnProperty;
		return {
			Za: g,
			p: d,
			getAttribute: function(c, d) {
				for (var f = c, j = d.split("."); j.length;) {
					if (f === l || f === p) return;
					f = f[j.shift()]
				}
				return f
			},
			Gc: function(c) {
				if ("object" !== d(c)) return "";
				var h = [],
				f;
				for (f in c) g.call(c, f) && h.push(f + "=" + encodeURIComponent(c[f]));
				return h.join("&")
			},
			qa: function(c) {
				var h = [];
				switch (d(c)) {
				case "object":
					h = Array.prototype.slice.call(c);
					break;
				case "array":
					h = c;
					break;
				case "number":
				case "string":
					h.push(c)
				}
				return h
			},
			unique: function(c) {
				for (var d = [], f = {},
				j = c.length, b = 0; b < j; b++) {
					var a = c[b];
					f[a] || (d[d.length] = a, f[a] = m)
				}
				return d
			},
			removeItem: function(c, d) {
				for (var f = [].slice.call(c), j = f.length - 1; 0 <= j; j--) f[j] === d && f.splice(j, 1);
				return f
			},
			Cc: function() {}
		}
	});
	Y("util/browser", ["util/lang"], function(d) {
		var g = {},
		c = navigator.userAgent,
		h = window.RegExp;
		/msie (\d+\.\d)/i.test(c) && (g.d = document.documentMode || + h.$1);
		/opera\/(\d+\.\d)/i.test(c) && (g.opera = + h.$1);
		/firefox\/(\d+\.\d)/i.test(c) && (g.md = + h.$1);
		/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(c) && ! /chrome/i.test(c) && (g.fe = + (h.$1 || h.$2));
		if (/chrome\/(\d+\.\d)/i.test(c)) {
			g.wb = + h.$1;
			var f;
			try {
				f = "scoped" in document.createElement("style")
			} catch(j) {
				f = s
			}
			f && (g.ce = m)
		}
		try {
			/(\d+\.\d)/.test(d.getAttribute(window, "external.max_version")) && (g.Qd = + h.$1)
		} catch(b) {}
		d = "Android iPad iPhone Linux Macintosh Windows".split(" ");
		h = "";
		for (f = 0; f < d.length && ! (h = d[f], c.match(RegExp(h.toLowerCase(), "i"))); f++);
		g.platform = h;
		return g
	});
	Y("util/dom", ["util/lang"], function(d) {
		function g(b) {
			try {
				if (b && "object" === typeof b && b.document && "setInterval" in b) return m
			} catch(a) {}
			return s
		}
		function c(b, a) {
			a = 2 === arguments.length ? a: b.parent;
			return b != a || ! g(b)
		}
		function h(b, a) {
			for (var a = 2 === arguments.length ? a: b.parent, e = 0; 10 > e++ && c(b, a);) {
				var k;
				try {
					k = !! b.parent.location.toString()
				} catch(i) {
					k = s
				}
				if (!k) return m;
				b = b.parent
			}
			return 10 <= e
		}
		function f(b) {
			return 9 === b.nodeType ? b: b.ownerDocument || b.document
		}
		function j(b, a) {
			1 === arguments.length && "number" === d.p(arguments[0]) && (a = arguments[0], b = l);
			for (var a = a || 10, e = window, k = 0; k++ < a && c(e) && ! h(e) && (!b || ! b(e));) e = e.parent;
			return e
		}
		return {
			c: function(b, a) {
				return "string" === d.p(b) && 0 < b.length ? (a || window).document.getElementById(b) : b.nodeName && (1 === b.nodeType || 9 === b.nodeType) ? b: p
			},
			ab: g,
			G: c,
			U: h,
			Ja: f,
			tc: function() {
				var b = j().document.title;
				60 < b.length && (b = b.substr(0, 60));
				return b
			},
			$: function(b) {
				b = f(b);
				return b.parentWindow || b.defaultView || p
			},
			ia: function(b) {
				b = g(b) ? b.document: f(b);
				return "CSS1Compat" === b.compatMode ? b.documentElement: b.body
			},
			Hb: j
		}
	});
	Y("util/style", ["util/lang", "util/dom", "util/browser"], function(d, g, c) {
		function h(a, e) {
			if (!a) return "";
			var b = "",
			b = - 1 < e.indexOf("-") ? e.replace(/[-][^-]{1}/g, function(e) {
				return e.charAt(1).toUpperCase()
			}) : e.replace(/[A-Z]{1}/g, function(e) {
				return "-" + e.charAt(0).toLowerCase()
			}),
			i = g.$(a);
			if (i && i.getComputedStyle) {
				if (i = i.getComputedStyle(a, p)) return i.getPropertyValue(e) || i.getPropertyValue(b)
			} else if (a.currentStyle) return i = a.currentStyle,
			i[e] || i[b];
			return ""
		}
		function f(a) {
			var e = {
				top: 0,
				left: 0
			};
			if (a === g.ia(a)) return e;
			var b = g.Ja(a),
			i = b.body,
			b = b.documentElement;
			a.getBoundingClientRect && (a = a.getBoundingClientRect(), e.left = Math.floor(a.left) + Math.max(b.scrollLeft, i.scrollLeft), e.top = Math.floor(a.top) + Math.max(b.scrollTop, i.scrollTop), e.left -= b.clientLeft, e.top -= b.clientTop, a = h(i, "borderLeftWidth"), i = h(i, "borderTopWidth"), a = parseInt(a, 10), i = parseInt(i, 10), e.left -= isNaN(a) ? 2: a, e.top -= isNaN(i) ? 2: i);
			return e
		}
		function j(a, e) {
			var b = h(a, "margin" + e).toString().toLowerCase().replace("px", "").replace("auto", "0");
			return parseInt(b, 10) || 0
		}
		function b(a) {
			for (var e = g.$(a), b = 100; a && a.tagName;) {
				var i = 100;
				if (c.d) {
					if (5 < c.d) try {
						i = parseInt(d.getAttribute(a, "filters.alpha.opacity"), 10) || 100
					} catch(f) {}
					b = b > i ? i: b
				} else {
					try {
						i = 100 * (e.getComputedStyle(a, p).opacity || 1)
					} catch(n) {}
					b *= i / 100
				}
				a = a.parentNode
			}
			return 0 === b ? 0: b || 100
		}
		return {
			s: h,
			ga: f,
			Z: function(a) {
				var e = g.c(a);
				if (!e) return s;
				a = f(e);
				e = g.$(e);
				if (!e) return a;
				for (var b = 0; e !== e.parent && 10 > b++ && ! g.U(e) && e.frameElement;) {
					var i = f(e.frameElement);
					a.left += i.left;
					a.top += i.top;
					e = e.parent
				}
				return a
			},
			Fe: j,
			ya: function(a, e) {
				var b = g.c(a),
				i = b.offsetWidth;
				e && (i += j(b, "Left") + j(b, "Right"));
				return i
			},
			xa: function(a, e) {
				var b = g.c(a),
				i = b.offsetHeight;
				e && (i += j(b, "Top") + j(b, "Bottom"));
				return i
			},
			Ib: b,
			vc: function(a) {
				for (var e = g.c(a), a = g.$(e), e = b(e), f = 0; 10 > f++ && g.G(a) && ! g.U(a);) {
					var i = a.frameElement ? b(a.frameElement) : 100,
					e = e * (i / 100);
					a = a.parent
				}
				return e
			},
			Lb: function(a) {
				try {
					var e = g.ia(a || window).scrollWidth;
					if (e || 0 === e) return e
				} catch(b) {}
				return - 1
			},
			Kb: function(a) {
				try {
					var e = g.ia(a || window).scrollHeight;
					if (e || 0 === e) return e
				} catch(b) {}
				return - 1
			},
			o: function(a) {
				try {
					var e = g.ia(a || window).clientWidth;
					if (e || 0 === e) return e
				} catch(b) {}
				return - 1
			},
			j: function(a) {
				try {
					var e = g.ia(a || window).clientHeight;
					if (e || 0 === e) return e
				} catch(b) {}
				return - 1
			},
			H: function(a) {
				var e = g.ia(a);
				return a.pageYOffset || e.scrollTop
			},
			Ka: function(a) {
				var e = g.ia(a);
				return a.pageXOffset || e.scrollLeft
			}
		}
	});
	Y("util/url", ["util/dom"], function(d) {
		return {
			wc: function(d, c, h) {
				d = d.match(RegExp("(\\?|&|#)" + c + "=([^&#]*)(&|#)?"));
				c = "";
				d && (c = d[2]);
				h && (c = decodeURIComponent(c));
				return c
			},
			Mb: function(g) {
				var g = d.Hb(g),
				c = "";
				d.G(g) && (c = g.document.referrer);
				return c = c || g.location.href
			}
		}
	});
	Y("util/event", ["util/dom"], function(d) {
		return {
			bind: function(g, c, h) {
				if (g = d.ab(g) ? g: d.c(g)) if (g.addEventListener) g.addEventListener(c, h, s);
				else if (g.attachEvent) g.attachEvent("on" + c, h);
				else {
					var f = g["on" + c];
					g["on" + c] = function() {
						f && f.apply(this, arguments);
						h.apply(this, arguments)
					}
				}
				return g
			}
		}
	});
	Y("util/cookie", ["util/lang"], function(d) {
		return {
			get: function(d, c) {
				var h = RegExp("(^| )" + d + "=([^;]*)(;|$)").exec(document.cookie);
				return h ? c ? decodeURIComponent(h[2]) : h[2] : ""
			},
			set: function(g, c, h, f) {
				var j = h.expires;
				"number" === d.p(j) && (j = new Date, j.setTime( + j + h.expires));
				document.cookie = g + "=" + (f ? encodeURIComponent(c) : c) + (h.path ? "; path=" + h.path: "") + (j ? "; expires=" + j.toGMTString() : "") + (h.domain ? "; domain=" + h.domain: "")
			}
		}
	});
	Y("util/data", ["util/lang", "util/dom"], function(d, g) {
		function c(e, b, i) {
			var i = i ? a: j,
			f;
			if ("string" === d.p(e)) {
				for (e = e.split("."); e.length;) f = e.shift(),
				i[f] = e.length ? i[f] !== l ? i[f] : {}: b,
				i = i[f];
				f = b
			}
			return f
		}
		function h(e, b) {
			var i = b ? a: j,
			f;
			"string" === d.p(e) && (f = d.getAttribute(i, e));
			return f
		}
		function f(e, a, b) {
			if (!e || ! a) return s;
			var f = h(e) || {};
			switch (b) {
			case "+1":
				b = f[a] || 0;
				f[a] = ++b;
				break;
			default:
				f[a] = parseInt(b, 10)
			}
			c(e, f);
			return f[a]
		}
		var j = {},
		b = g.Hb(),
		a = b.BAIDU_DUP2_info || (b.BAIDU_DUP2_info = {});
		return {
			sa: function(e, a) {
				var b = window;
				return b[e] ? b[e] : b[e] = a
			},
			wa: function(e) {
				var a = window,
				b = a[e];
				a[e] = l;
				return b
			},
			N: c,
			D: h,
			Fc: function(e, b) {
				var i = b ? a: j;
				switch (d.p(e)) {
				case "string":
					for (var f = e.split("."); f.length;) {
						var n = f.shift();
						if (f.length && i[n] !== l) i = i[n];
						else return delete i[n],
						m
					}
				}
				return s
			},
			kc: function(e, a, b) {
				return b ? (this.I = this.I || {},
				this.I[b] = this.I[b] || 0, ! this.I[b] && document.getElementById(b) && (this.I[b] = 1), this.I[b]) : f(e, a, "+1")
			},
			Oe: function(e, a, b) {
				return f(e, a, b)
			},
			count: f,
			rd: function(e, a, b) {
				return b ? (this.I = this.I || {},
				this.I[b] = this.I[b] || 0, document.getElementById(b) || delete this.I[b], this.I[b] || 0) : ! e || ! a ? s: (h(e) || {})[a] || 0
			},
			be: function(e, a) {
				if (!e || ! a) return s;
				var b = h("pageConfig") || {};
				b[e] = a;
				c("pageConfig", b);
				return m
			},
			qd: function(a) {
				return ! a ? s: (h("pageConfig") || {})[a]
			}
		}
	});
	Y("util/storage", [], function() {
		function d(f, d, b) {
			if (c) try {
				c.setItem(f, b ? encodeURIComponent(d) : d)
			} catch(a) {}
		}
		function g(f, d) {
			if (c) {
				var b = c.getItem(f);
				return d && b ? decodeURIComponent(b) : b
			}
			return p
		}
		var c;
		try {
			c = window.localStorage
		} catch(h) {}
		return {
			Xc: function() {
				var f = s;
				try {
					c.removeItem("BAIDU_DUP_storage_available"),
					d("BAIDU_DUP_storage_available", "1"),
					g("BAIDU_DUP_storage_available") && (f = m),
					c.removeItem("BAIDU_DUP_storage_available")
				} catch(j) {}
				return f
			},
			setItem: d,
			getItem: g,
			Sc: function(f, j, b) {
				if (c) {
					j = b ? encodeURIComponent(j) : j;
					b = g(f) || "";
					try {
						d(f, b + ((b && "|") + j))
					} catch(a) {}
				}
			},
			Lc: function(f, j, b) {
				if (c) if (j = b ? encodeURIComponent(j) : j, b = g(f) || "", b = b.replace(RegExp(j + "\\|?", "g"), "").replace(/\|$/, "")) try {
					d(f, b)
				} catch(a) {} else c.removeItem(f)
			}
		}
	});
	Y("util/log", ["util/lang", "util/event", "util/storage"], function(d, g, c) {
		function h(c, b) {
			var a = new Image,
			e = "BAIDU_DUP_log_" + Math.floor(2147483648 * Math.random()).toString(36);
			window[e] = a;
			a.onload = a.onerror = a.onabort = function() {
				a.onload = a.onerror = a.onabort = p;
				a = window[e] = p;
				b && b(f, c, m)
			};
			a.src = c
		}
		var f = "BAIDU_DUP_log_storage";
		return {
			Od: h,
			Pe: function() {
				var d = c.getItem(f);
				if (d) for (var d = d.split("|"), b = 0, a = d.length; b < a; b++) h(decodeURIComponent(d[b]), c.Lc)
			},
			ib: function(j) {
				var j = "object" === d.p(j) ? j: {},
				b = j.url || "http://cbjslog.baidu.com/log",
				a = j.option || "now",
				j = d.Gc(j.data || {}),
				b = b + ((0 <= b.indexOf("?") ? "&": "?") + j + (j ? "&": "") + "rdm=" + + new Date);
				switch (a) {
				case "now":
					h(b);
					break;
				case "block":
					break;
				default:
					c.Sc(f, b, m),
					g.bind(window, "unload", function() {
						h(b, c.Lc)
					})
				}
			}
		}
	});
	Y("util", "util/lang,util/dom,util/style,util/url,util/event,util/cookie,util/data,util/storage,util/log,util/browser".split(","), function(d, g, c, h, f, j, b, a, e, k) {
		return {
			lang: d,
			m: g,
			style: c,
			url: h,
			event: f,
			cookie: j,
			data: b,
			Ue: a,
			log: e,
			f: k
		}
	});
	Y("biz", ["util", "slot"], function(d, g) {
		function c(b, a) {
			var e = /^[0-9a-zA-Z]+$/;
			return ! b || ! e.test(b) || ! a ? [] : a = "array" === d.lang.p(a) ? a: Array.prototype.slice.call(arguments, 1)
		}
		function h(b, a, e) {
			if (!a || ! a.length) return s;
			var e = e || {
				gc: s,
				Bc: s,
				Dc: s
			},
			c = e.Bc ? d.data.D(f) : {},
			i = e.gc ? j: f,
			c = e.Dc ? {}: d.data.D(i) || c,
			e = {},
			o;
			for (o in c) d.lang.Za.call(c, o) && (e[o] = "array" === d.lang.p(c[o]) ? c[o].slice() : c[o]);
			var c = e[b] || [],
			n = a.length;
			for (o = 0; o < n; o++) {
				var h = a[o];
				"string" === typeof h && (h = encodeURIComponent(h), 100 >= h.length && (c[c.length] = h))
			}
			if (!c.length) return s;
			e[b] = d.lang.unique(c);
			d.data.N(i, e);
			return m
		}
		var f = "bizOrientations",
		j = "bizUrgentOrientations";
		return {
			lc: function(b, a) {
				var e = c.apply(this, arguments);
				return h(b, e)
			},
			Tc: function(b, a) {
				var e = c.apply(this, arguments);
				return h(b, e, {
					gc: m,
					Bc: m
				})
			},
			ie: function(b, a) {
				var e = c.apply(this, arguments);
				return h(b, e, {
					gc: m,
					Dc: m
				})
			},
			Bd: function(b) {
				var b = Math.max(0, Math.min(b || 500, 500)),
				a = [],
				e = d.data.D(j) || d.data.D(f) || {};
				if ("object" === d.lang.p(e)) for (var c in e) d.lang.Za.call(e, c) && (a[a.length] = c + "=" + e[c].join(","));
				d.data.N(j, l);
				a.sort(function(a, e) {
					return a.length - e.length
				});
				e = "";
				c = a.length;
				for (var i = 0; i < c && ! (e.length + a[i].length >= b); i++) e += (i ? "&": "") + a[i];
				return e
			},
			Uc: function(b, a) {
				g.ke(b);
				g.Vc(a)
			}
		}
	});
	Y("preview", ["biz", "util"], function(d, g) {
		function c() {
			function d(a) {
				var e = g.url.wc;
				return e(f, "baidu_clb_preview_" + a) || e(f, "baidu_dup_preview_" + a)
			}
			var f = g.url.Mb(),
			j = d("sid"),
			b = d("mid"),
			a = d("vc"),
			e = + d("ts"),
			k = p;
			3E4 >= + new Date - e && (k = {
				Ic: j,
				Rd: b,
				re: a
			});
			c = function() {
				return k
			};
			return k
		}
		return {
			Dd: function(d) {
				var f = [],
				j = c();
				j && d == j.Ic && (f.push("mid=" + j.Rd), f.push("sid=" + j.re));
				return f.join("&")
			},
			D: function() {
				return c()
			},
			Ma: function(c) {
				var f = s;
				c ? /cpro_template=/gi.test(c) && (g.data.N("#unionPreviewSwitch", m), f = m) : f = !! g.data.D("#unionPreviewSwitch");
				return f
			},
			Ed: function() {
				var c = g.data.D("#unionPreviewData");
				return c ? "prev=" + encodeURIComponent(c) + "&pt=union": ""
			},
			le: function(c) {
				g.data.N("#unionPreviewData", c)
			},
			Be: function() {
				g.data.Fc("#unionPreviewSwitch");
				g.data.Fc("#unionPreviewData")
			}
		}
	});
	Y("slot", ["util"], function(d) {
		function g() {
			for (var a = {
				response: {},
				holder: "",
				stack: [],
				errors: [],
				status: {}
			},
			b = e.length - 1; 0 <= b; b--) a.status[e[b]] = 0;
			return a
		}
		function c(a, e) {
			var b = s;
			"fillAsync" === e && (b = m);
			o[a] && - 1 !== o[a].stack.join(" ").toLowerCase().indexOf("async") && (b = m);
			return b
		}
		function h(a, e) {
			if (!a) return "";
			var b = q + a;
			e && (b += "_" + e);
			return b
		}
		function f(a, e, b) {
			if (!a || ! e) return s;
			b === l && (b = + new Date);
			if (o[a]) {
				o[a].status[e] = b;
				if ("finish" === e) {
					var e = {},
					b = s,
					f;
					for (f in t) if (f && t.hasOwnProperty(f) && t[f] && 0 === ("" + a).indexOf("" + f) && o[a].response) {
						var b = o[a].response.data,
						c = b._h || b.sh || b.height || 0;
						e[a] = 0 === (b._w || b.sw || b.width || 0) || 0 === c ? s: m;
						b = m
					}
					b && n.apply(window, [e])
				}
				return m
			}
			return s
		}
		function j(a, e) {
			b(a, "errors", e)
		}
		function b(a, e, b) {
			a && e && b && (a = o[a]) && "array" === d.lang.p(a[e]) && a[e].push(b)
		}
		function a(a) {
			return ! a ? o: o[a] || s
		}
		var e = "add,create,request,response,render,finish".split(","),
		k = [],
		i = {},
		o = {},
		n,
		t = {},
		q = "BAIDU_DUP_wrapper_";
		return {
			add: function() {
				var e = {
					ids: [],
					preloadIds: []
				},
				b = d.lang.qa(arguments);
				if (!b.length) return e;
				for (var b = b.join(",").split(","), c = [], n = [], j = b.length, h = 0; h < j; h++) {
					var t = b[h];
					if (i.hasOwnProperty(t)) {
						var q = t + "_" + i[t],
						H = a(q).stack || [];
						if ("preload" === H[H.length - 1]) {
							e.preloadIds.push(q);
							continue
						}
						i[t] += 1
					} else i[t] = 0;
					t = t + "_" + i[t];
					o[t] = new g;
					f(t, "add");
					n.push(t);
					c.push(t)
				}
				k = k.concat(n);
				e.ids = c;
				return e
			},
			create: function(a, e, b) {
				if (!a || ! e) return s;
				var i = h(a),
				n = m;
				if (d.m.c(i)) return o[a].holder = i,
				n;
				if (c(a, e)) {
					b = b || "";
					o[a].holder = b;
					b = d.m.c(b);
					try {
						b && (b.innerHTML = '<div id="' + i + '"></div>', o[a].holder = i)
					} catch(k) {
						j(a, "Failed to insert wrapper"),
						n = s
					}
				} else if (document.write('<div id="' + i + '"></div>'), ! d.m.c(i)) try {
					var t = document.getElementsByTagName("script"),
					g = t[t.length - 1];
					if (g) {
						var q = g.parentNode;
						if (q) {
							var z = document.createElement("div");
							z.id = h(a, "b");
							q.insertBefore(z, g)
						}
					}
				} catch(F) {
					j(a, "Failed to create backup wrapper")
				}
				f(a, "create");
				return n
			},
			gd: c,
			vd: function(a) {
				return c(a) ? "async": "sync"
			},
			uc: function(a) {
				return ! a ? "": (a = d.m.c(o[a].holder) || d.m.c(h(a)) || d.m.c(h(a, "b"))) && a.id || ""
			},
			Ya: a,
			Zb: function(a, e) {
				if (!a || ! e) return s;
				return o[a] ? (o[a].response = e, f(a, "response"), m) : s
			},
			Ca: f,
			oa: j,
			tb: function(a, e) {
				b(a, "stack", e)
			},
			Gb: function(a) {
				a = d.lang.qa(a);
				if (!a.length) return s;
				var e = [],
				b = {},
				f;
				for (f = 0; f < k.length; f++) b[k[f]] = f + 1;
				for (f = 0; f < a.length; f++) {
					var c = b["" + a[f]];
					c === l && (c = 0);
					e.push(c)
				}
				return e
			},
			ke: function(a) {
				n = a
			},
			Vc: function(a) {
				t[a] = m
			},
			Z: function(a) {
				a = d.lang.qa(a);
				if (!a.length) return ["-1x-1"];
				for (var e = [], b = 0; b < a.length; b++) {
					var f = a[b],
					c;
					try {
						var i = d.m.c(h(f)) || d.m.c(h(f, "b"));
						if (i) {
							var n = d.style.Z(i);
							n && (c = [n.top, n.left])
						}
					} catch(o) {
						j(f, "Unable to get ps")
					}
					c = c ? c: [ - 1, - 1];
					e.push(c.join("x"))
				}
				return e
			}
		}
	});
	Y("api", ["slot", "util"], function(d, g) {
		return {
			getDai: d.Gb,
			getSlots: d.Ya,
			getFillType: d.vd,
			getFillWrapperId: d.uc,
			setStatus: d.Ca,
			addErrorItem: d.oa,
			addStackItem: d.tb,
			bind: g.event.bind,
			getType: g.lang.p,
			sendLog: g.log.ib,
			putInfo: g.data.N,
			getInfo: g.data.D,
			defineOnce: g.data.sa,
			addCount: g.data.kc,
			getCount: g.data.rd,
			getConfig: g.data.qd,
			getDocumentTitle: g.m.tc
		}
	});
	Y("param", ["slot", "preview", "biz", "util"], function(d, g, c, h) {
		function f(a, e) {
			for (var e = e || 0, b = [], f = 0, c = a.length; f < c; f++) b.push(a[f].split("_")[e]);
			return b.join(",")
		}
		function j(a) {
			a = a || window.document.domain;
			0 === a.indexOf("www.") && (a = a.substr(4));
			"." === a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
			var e = a.match(RegExp("([a-z0-9][a-z0-9\\-]*?\\.(?:com|cn|net|org|gov|info|la|cc|co|jp|us|hk|tv|me|biz|in|be|io|tk|cm|li|ru|ws|hn|fm|tw|ma|in|vn|name|mx|gd|im)(?:\\.(?:cn|jp|tw|ru|th))?)$", "i"));
			return e ? e[0] : a
		}
		var b = window,
		a = b.document,
		e = b.screen,
		k = b.navigator,
		i = + new Date,
		o = [{
			key: "di",
			value: function(a) {
				return f(a.id)
			}
		},
		{
			key: "dcb",
			value: x("BAIDU_DUP2_define")
		},
		{
			key: "dtm",
			value: x("BAIDU_DUP2_SETJSONADSLOT")
		},
		{
			key: "dbv",
			value: function() {
				var a = h.f;
				return a.ce ? "1": a.wb ? "2": "0"
			}
		},
		{
			key: "dci",
			value: function(a) {
				for (var e = "-1", b = {
					fill: "0",
					fillOnePiece: "1",
					fillAsync: "2",
					preload: "3"
				},
				f = 0; f < a.id.length; f++) {
					var c = d.Ya(a.id[f]);
					if (c) {
						var c = c.stack,
						i = c.length;
						if (1 <= i) {
							e = b[c[i - 1]];
							break
						}
					}
				}
				return e
			}
		},
		{
			key: "dri",
			value: function(a) {
				return f(a.id, 1)
			}
		},
		{
			key: "dis",
			value: function() {
				var a = 0;
				h.m.G(b) && (a += 1);
				h.m.U(b, b.top) && (a += 2);
				var e = h.style.o(),
				f = h.style.j();
				if (40 > e || 10 > f) a += 4;
				return a
			}
		},
		{
			key: "dai",
			value: function(a) {
				return d.Gb(a.id).join(",")
			}
		},
		{
			key: "dds",
			value: function() {
				var a = h.data.D("dds");
				return h.lang.Gc(a)
			}
		},
		{
			key: "drs",
			value: function() {
				var e = {
					uninitialized: 0,
					loading: 1,
					loaded: 2,
					interactive: 3,
					complete: 4
				};
				try {
					return e[a.readyState]
				} catch(b) {
					return - 1
				}
			}
		},
		{
			key: "dvi",
			value: x("1442290465")
		},
		{
			key: "ltu",
			ta: m,
			value: function() {
				var a = h.url.Mb(function(a) {
					var e = h.style.o(a),
					a = h.style.j(a);
					return 400 < e && 120 < a ? m: s
				});
				0 < a.indexOf("cpro_prev") && (a = a.slice(0, a.indexOf("?")));
				return a
			}
		},
		{
			key: "liu",
			ta: m,
			value: function() {
				return h.m.G(b) ? a.URL: ""
			}
		},
		{
			key: "ltr",
			ta: m,
			value: function() {
				var a = h.m.Hb(),
				e = "";
				try {
					e = a.opener ? a.opener.document.location.href: ""
				} catch(b) {}
				e = e || a.document.referrer;
				return 0 <= e.indexOf("http://pos.baidu.com") || 1E3 <= e.length ? "": e
			}
		},
		{
			key: "lcr",
			ta: m,
			value: function(e) {
				if (e && 0 !== e.id.length && - 1 < e.id[0].indexOf("u")) return "";
				var e = a.referrer,
				b = e.replace(/^https?:\/\//, ""),
				b = b.split("/")[0],
				b = b.split(":")[0],
				b = j(b),
				f = j(),
				c = h.cookie.get("BAIDU_DUP_lcr");
				if (c && f === b) return c;
				return f !== b ? (h.cookie.set("BAIDU_DUP_lcr", e, {
					domain: f
				}), e) : ""
			}
		},
		{
			key: "ps",
			value: function(a) {
				return d.Z(a.id).join(",")
			}
		},
		{
			key: "psr",
			value: function() {
				return [e.width, e.height].join("x")
			}
		},
		{
			key: "par",
			value: function() {
				return [e.availWidth, e.availHeight].join("x")
			}
		},
		{
			key: "pcs",
			value: function() {
				return [h.style.o(), h.style.j()].join("x")
			}
		},
		{
			key: "pss",
			value: function() {
				return [h.style.Lb(), h.style.Kb()].join("x")
			}
		},
		{
			key: "pis",
			value: function() {
				return (h.m.G(b) ? [h.style.o(), h.style.j()] : [ - 1, - 1]).join("x")
			}
		},
		{
			key: "cfv",
			value: function() {
				var a = 0;
				if (45 <= h.f.wb) return 0;
				if (k.plugins && k.mimeTypes.length) {
					var e = k.plugins["Shockwave Flash"];
					e && e.description && (a = e.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0")
				}
				if (0 === a && (b.ActiveXObject || b.hasOwnProperty("ActiveXObject")) && ! b.opera) for (e = 30; 2 <= e; e--) try {
					var f = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + e);
					f && (a = f.GetVariable("$version").replace(/WIN/g, "").replace(/,/g, "."))
				} catch(c) {}
				return parseInt(a, 10)
			}
		},
		{
			key: "ccd",
			value: function() {
				return e.colorDepth || 0
			}
		},
		{
			key: "chi",
			value: function() {
				return b.history.length || 0
			}
		},
		{
			key: "cja",
			value: function() {
				return k.javaEnabled().toString()
			}
		},
		{
			key: "cpl",
			value: function() {
				return k.plugins.length || 0
			}
		},
		{
			key: "cmi",
			value: function() {
				return k.mimeTypes.length || 0
			}
		},
		{
			key: "cce",
			value: function() {
				return k.cookieEnabled || 0
			}
		},
		{
			key: "col",
			value: function() {
				return (k.language || k.browserLanguage || k.systemLanguage).replace(/[^a-zA-Z0-9\-]/g, "")
			}
		},
		{
			key: "cec",
			value: function() {
				return (a.characterSet ? a.characterSet: a.charset) || ""
			}
		},
		{
			key: "cdo",
			value: function() {
				var a = window.orientation;
				a === l && (a = - 1);
				return a
			}
		},
		{
			key: "tsr",
			value: function() {
				var a = 0,
				e = + new Date;
				i && (a = e - i);
				return a
			}
		},
		{
			key: "tlm",
			value: function() {
				return Date.parse(a.lastModified) / 1E3
			}
		},
		{
			key: "tcn",
			value: function() {
				return Math.round( + new Date / 1E3)
			}
		},
		{
			key: "tpr",
			value: function(a) {
				var a = a && a.max_age ? a.max_age: 24E4,
				e = (new Date).getTime(),
				b,
				f;
				try {
					b = !! window.top.location.toString()
				} catch(c) {
					b = s
				}
				f = b ? window.top: window;
				(b = f.BAIDU_DUP2_pageFirstRequestTime) ? e - b >= a && (b = f.BAIDU_DUP2_pageFirstRequestTime = e) : b = f.BAIDU_DUP2_pageFirstRequestTime = e;
				return b || ""
			}
		},
		{
			key: "_preview",
			value: function(a) {
				return g.Dd(f(a.id))
			}
		},
		{
			key: "dpt",
			value: function() {
				var a = "none";
				g.Ma() && (a = "union");
				return a
			}
		},
		{
			key: "coa",
			ta: m,
			value: function(a) {
				var a = a.id,
				e = {
					cpro_w: "rsi0",
					cpro_h: "rsi1"
				},
				a = a[0].split("_")[0],
				b = {},
				f = s,
				c = h.data.D("#novaOpenApi");
				if (c && a && c[a]) {
					var f = m,
					c = c[a],
					i;
					for (i in c) i && c.hasOwnProperty(i) && "undefined" !== typeof c[i] && (b[i] = encodeURIComponent(c[i]).toString())
				}
				f && (b.c01 = 1);
				var f = i = "",
				d;
				for (d in b) d && b.hasOwnProperty(d) && "undefined" !== typeof b[d] && (f = b[d], "cpro_h" === d && (h.data.N(a + "_setCoaHeight", m), f = parseInt(f, 10) || 125), "cpro_w" === d && (h.data.N(a + "_setCoaWidth", m), f = parseInt(f, 10) || 125), i += "&" + (e[d] ? e[d] : d) + "=" + f);
				return i = i.slice(1)
			}
		},
		{
			key: "dpr",
			value: function() {
				return window.devicePixelRatio || 1
			}
		},
		{
			key: "ti",
			ta: m,
			value: function() {
				return h.m.tc()
			}
		},
		{
			key: "_unionpreview",
			value: function() {
				return g.Ed()
			}
		},
		{
			key: "baidu_id",
			value: x("")
		},
		{
			key: "_orientation",
			value: function() {
				return c.Bd()
			}
		}];
		return {
			get: function(a, e) {
				for (var b = [], f = 0, c = o.length; f < c; f++) {
					var i;
					try {
						var d = o[f],
						k = d.key,
						j = d.ta,
						g = d.value,
						g = "function" === typeof g ? g(a) : g,
						g = j ? encodeURIComponent(g) : g;
						if (e && e === k) return g;
						i = k && 0 !== k.indexOf("_") ? k + "=" + g: g
					} catch(h) {
						i = encodeURIComponent(h.toString()),
						i = i.slice(0, 100)
					}
					i && b.push(i)
				}
				b = b.join("&");
				return b.slice(0, 2048)
			}
		}
	});
	Y("request", ["param", "slot", "util"], function(d, g, c) {
		Y("request!", [], {
			name2url: function(c) {
				return "http://pos.baidu.com/acom?" + d.get({
					id: c.split(",")
				})
			}
		});
		Y("batch!", [], {
			name2url: function(c) {
				return "http://pos.baidu.com/acom?" + d.get({
					id: c.split(",")
				})
			}
		});
		return {
			send: function(d, f, j) {
				if (!d || ! f || j === l) return s;
				var b = [];
				if ("array" !== c.lang.p(d)) g.Ca(d, "request"),
				b = ["request!" + d];
				else {
					for (b = 0; b < d.length; b++) g.Ca(d[b], "request");
					b = 1 === d.length ? ["request!" + d[0]] : ["batch!" + d.join(",")]
				}
				X(b, f, j);
				return m
			}
		}
	});
	Y("control", ["slot", "request", "preview", "util"], function(d, g, c, h) {
		function f(a, e, b) {
			var f = e.deps,
			c = e.data;
			c && c.hasOwnProperty("_html") && "baidujson_patch" === c._html.tn && (f = ["union/patch"]);
			var g = d.uc(a);
			b && ! g ? d.oa(a, "HolderNotFound") : f && (0 > f[0].indexOf("clb/") && d.Ca(a, "finish"), X(f, function(e) {
				if ("object" === h.lang.p(c)) {
					c.id = a;
					if (e.hasOwnProperty("validate")) try {
						var b = e.validate(c);
						b !== m && h.log.ib({
							data: {
								type: b || "ResponseError",
								errorPainter: f[0],
								id: a,
								slotType: c._stype,
								materialType: c._isMlt,
								html: !! c._html
							}
						})
					} catch(k) {
						d.oa(a, "validateException")
					}
					if (e.hasOwnProperty("render")) try {
						d.Ca(a, "render"),
						e.render(c, g)
					} catch(j) {
						d.oa(a, "RenderException")
					} else d.oa(a, "RenderNotFound")
				} else d.oa(a, "ResponseFormatError")
			},
			b))
		}
		function j(a, e, b) {
			if (!a) return s;
			var b = b || "",
			c = d.add(a),
			a = c.ids[0] || c.preloadIds[0];
			h.data.N("timestampWathcer" + a, G);
			if (!a) return s;
			var j = d.gd(a, e);
			d.tb(a, e);
			d.create(a, e, b);
			c.ids.length ? g.send(a, function(e) {
				d.Zb(a, e);
				f(a, e, j)
			},
			j) : c.preloadIds.length && (e = d.Ya(a).response, f(a, e, j));
			return m
		}
		function b(a) {
			for (var e = 0, b = a + "_" + e; 0 !== d.Gb([b])[0];) {
				var f = d.Ya(b);
				if ((f = f && f.response) && 0 === f.deps[0].indexOf("clb/")) {
					var c = f.data,
					f = c._isMlt;
					(0 === f && "" !== c._html || f === s && c._fxp) && d.Ca(b, "finish", 0)
				}
				b = a + "_" + ++e
			}
			if (a !== l && (a = (e = window.BAIDU_CLB_SLOTS_MAP) && e[a], a !== l && (f = a._isMlt, 0 === f && "" !== a._html || f === s && a._fxp))) a._done = s
		}
		window.BAIDU_CLB_prepareMoveSlot = b;
		return {
			fill: function(a) {
				return j(a, "fill")
			},
			Cb: function(a, e) {
				return j(a, "fillAsync", e)
			},
			Yd: function() {
				function a(a) {
					g.send(a, function(e) {
						if ("array" === h.lang.p(e)) {
							if (e && e.length === a.length) for (var b = 0; b < a.length; b++) d.Zb(a[b], e[b])
						} else "object" === h.lang.p(e) && e && 1 === a.length && d.Zb(a[0], e)
					},
					s)
				}
				var e = h.lang.qa(arguments),
				e = h.lang.unique(e),
				b = c.D();
				if (b) for (var f = 0, j = e.length; f < j; f++) e[f] === b.Ic && (e.splice(f, 1), f--);
				for (e = d.add(e).ids; e.length;) {
					b = e.splice(0, 16);
					for (f = 0; f < b.length; f++) d.tb(b[f], "preload");
					a(b)
				}
			},
			$d: b
		}
	});
	Y("global", ["control", "biz", "util", "preview"], function(d, g, c, h) {
		function f(a) {
			a = a.split(".");
			return k[a[0]] + a[1]
		}
		function j() {
			var f = e.BAIDU_DUP2;
			if (! ("object" === c.lang.p(f) && f.push)) {
				if ("array" === c.lang.p(f) && f.length) for (var i = 0; i < f.length; i++) b(f[i]);
				e.BAIDU_DUP2 = l;
				c.data.sa("BAIDU_DUP2", {
					push: b
				});
				c.data.sa("BAIDU_DUP2_proxy", function(a) {
					if (a) return function() {
						try {
							return b([a].concat(c.lang.qa(arguments)))
						} catch(e) {
							0 < aa-- && c.log.ib({
								data: {
									type: "ExecuteException",
									errorName: a,
									args: c.lang.qa(arguments).join("|"),
									isQuirksMode: "CSS1Compat" !== document.compatMode,
									documentMode: document.documentMode || "",
									readyState: document.readyState || "",
									message: e.message
								}
							})
						}
					}
				});
				for (i in o) i && c.lang.Za.call(o, i) && c.data.sa(i, e.BAIDU_DUP2_proxy(i));
				a()
			}
		}
		function b(a) {
			if ("array" !== c.lang.p(a)) return s;
			var e = a.shift();
			c.data.kc("apiCount", e);
			return (e = o[e] || n[e] || s) && e.apply(p, a)
		}
		function a() {
			function a(e) {
				for (var b = 0, f = I.length; b < f; b++) if (0 === e.indexOf(I[b])) return m;
				return s
			}
			c.data.sa("BAIDU_DUP2_require", function(e) {
				for (var b = 0, f = e.length; b < f; b++) if (a(e[b])) return;
				X.apply(p, arguments)
			});
			c.data.sa("BAIDU_DUP2_define", function(e, b) {
				for (var f = 0, c = b.length; f < c; f++) if (a(b[f])) return;
				Y.apply(p, arguments)
			})
		}
		var e = window,
		k = {
			clb: "BAIDU_CLB_DUP2_",
			dan: "BAIDU_DAN_DUP2_",
			nova: "cpro",
			dup: "BAIDU_DUP_"
		},
		i = [{
			Q: ["clb.fillSlot", "clb.singleFillSlot", "clb.fillSlotWithSize"],
			R: ["fill"],
			P: d.fill
		},
		{
			Q: ["clb.fillSlotAsync"],
			R: ["fillAsync"],
			P: d.Cb
		},
		{
			Q: ["clb.preloadSlots"],
			R: ["preload"],
			P: d.Yd
		},
		{
			Q: ["clb.prepareMoveSlot"],
			R: ["prepareMove"],
			P: d.$d
		},
		{
			Q: ["clb.addOrientation"],
			R: ["addOrientation"],
			P: g.lc
		},
		{
			Q: ["clb.addOrientationOnce"],
			R: ["addOrientationOnce"],
			P: g.Tc
		},
		{
			Q: ["clb.setOrientationOnce"],
			R: ["setOrientationOnce"],
			P: g.ie
		},
		{
			Q: ["clb.setConfig"],
			R: ["putConfig"],
			P: c.data.be
		},
		{
			Q: ["clb.addSlot", "clb.enableAllSlots", "clb.SETHTMLSLOT"],
			R: [],
			P: c.lang.Cc
		},
		{
			Q: ["dup.addSlotStatusCallback"],
			R: [],
			P: g.Uc
		}],
		i = function(a) {
			for (var e = {}, b = {}, c = 0; c < a.length; c++) {
				for (var i = a[c], d = i.Q, j = i.R, i = i.P; d.length;) e[f(d.shift())] = i;
				for (; j.length;) b[j.shift()] = i
			}
			return {
				Td: e,
				ae: b
			}
		} (i),
		o = i.Td,
		n = i.ae;
		return {
			Gd: function() {
				var a = c.data.wa(f("clb.ORIENTATIONS"));
				if (a) for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && g.lc(e, a[e]);
				c.data.N("#novaOpenApi", c.data.wa("cproStyleApi"));
				var b = c.data.wa("cproArray");
				if (b) for (var a = 0, i = b.length; a < i; a++) b[a] && b[a].id && d.Cb(b[a].id, "cpro_" + b[a].id);
				if (b = c.data.wa("cpro_mobile_slot")) {
					a = 0;
					for (i = b.length; a < i; a++) {
						var k = b[a],
						o = k.id,
						n = c.data.D("#novaOpenApi") || {};
						n[o] || (n[o] = {});
						for (e in k) e && "id" !== e && k.hasOwnProperty(e) && (n[o][e] = k[e]);
						c.data.N("#novaOpenApi", n);
						b[a] && b[a].id && d.Cb(b[a].id, "cpro_" + b[a].id)
					}
				}
				if (e = c.data.wa("cpro_id")) h.Ma(e) && (h.le(e), e = "u0"),
				d.fill(e);
				d.fill(c.data.wa(f("clb.SLOT_ID")));
				j()
			}
		}
	});
	Y("logService", ["util/lang", "util/event"], function(d, g) {
		g.bind(window, "load", function() {
			X(["detect"], d.Cc, m)
		})
	});
	Y("fingerprint", "util/log,util/storage,util/event,util/browser,util/data,param".split(","), function(d, g, c, h, f, j) {
		var b = window,
		a = s;
		h.d ? 6 <= h.d && (a = m) : g.Xc() && (a = m);
		0 <= b.location.href.indexOf("wa.kuwo.cn") || (a && (f.D("isFPLoaded", m) === m ? a = s: f.N("isFPLoaded", m, m)), a && c.bind(b, "load", function() {
			var a = b.document,
			f = a.body,
			c = "http://pos.baidu.com/wh/o.htm?ltr=" + j.get({},
			"ltr"),
			c = c + "&cf=u",
			d = a.createElement("div");
			d.id = "BAIDU_DUP_fp_wrapper";
			d.style.position = "absolute";
			d.style.left = "-1px";
			d.style.bottom = "-1px";
			d.style.zIndex = 0;
			d.style.width = 0;
			d.style.height = 0;
			d.style.overflow = "hidden";
			d.style.visibility = "hidden";
			d.style.display = "none";
			a = a.createElement("iframe");
			a.id = "BAIDU_DUP_fp_iframe";
			a.src = c;
			a.style.width = 0;
			a.style.height = 0;
			a.style.visibility = "hidden";
			a.style.display = "none";
			try {
				d.insertBefore(a, d.firstChild),
				f && f.insertBefore(d, f.firstChild)
			} catch(g) {}
		}), 1E3 > 1E5 * Math.random() && d.Od("http://release.baidu.com/coverage"))
	});
	Y("replacement", ["util"], function(d) {
		function g() {
			var c = d.url.Mb(),
			h = d.url.wc(c, ma, m);
			g = function() {
				return h
			};
			return h
		}
		return {
			Cd: function() {
				return g()
			}
		}
	});
	X(["replacement"], function(d) { (d = d.Cd()) ? X([d]) : (X(["global"], function(d) {
			d.Gd()
		}), X(["logService"]), X(["fingerprint"]))
	});
	window.BAIDU_DUP2_define && window.BAIDU_DUP2_define("detect", ["api"], function(d) {
		function g(c) {
			c.url = "";
			c.host = window.location.hostname;
			c.from = "DUP";
			d.sendLog({
				data: c,
				Me: "now"
			})
		}
		try {
			setTimeout(function() {
				var c = d.getSlots(),
				f;
				for (f in c) {
					var j = c[f],
					b = j.response,
					a = s;
					if ("object" !== d.getType(b)) a = m;
					else {
						var a = m,
						e;
						for (e in b) if (Object.prototype.hasOwnProperty.call(b, e)) {
							a = s;
							break
						}
					}
					var k = j.status,
					j = j.stack;
					a ? g({
						type: "preload" === j[0] ? "preloadFail": "loadFail",
						id: f
					}) : ! k.render && ! k.finish && g({
						type: "renderFail",
						id: f,
						error: "preload" === j[0] ? "PreloadNotFilled": "NotFilled",
						empty: ! (!b.data || ! b.data._html)
					})
				}
			},
			0)
		} catch(c) {}
	});
	window.BAIDU_DUP2_define && window.BAIDU_DUP2_define("viewWatch", ["util", "param"], function(d, g) {
		function c() {
			var e = + new Date,
			f = 500;
			y === a && r && (f = e - r);
			r = e;
			for (var c in n) if (o.call(n, c)) {
				y === j && (y = b);
				var g = n[c];
				g.eb && (g.Qb += f);
				g.cb && (g.Pb += f);
				g.Ub = e - g.timestamp;
				if (y === a) v && (g.Xa += e - g.bb);
				else if (72E5 <= g.Ub) h(s);
				else {
					var k = g = l,
					t = l;
					for (t in n) if (o.call(n, t)) {
						var q = n[t];
						if (v) {
							var u = d.m.c(q.te);
							if (!u) break;
							try {
								var K = i.o(B),
								ba = i.j(B),
								Q = i.Z(u);
								q.top = Q.top;
								q.left = Q.left;
								var ca = i.H(B),
								da = i.Ka(B),
								ea = i.ya(u),
								fa = i.xa(u),
								ga = Q.top - ca + 0.35 * fa,
								ha = Q.left - da + 0.35 * ea;
								q.eb = 0 < ga && ga < ba && 0 < ha && ha < K;
								var va = ea * fa,
								ia = i.Z(u),
								U = ia.top - ca,
								V = ia.left - da,
								ja = i.ya(u),
								ka = i.xa(u),
								la = u = 0,
								u = 0 > U ? Math.max(U + ka, 0) : Math.min(ka, Math.max(ba - U, 0)),
								la = 0 > V ? Math.max(V + ja, 0) : Math.min(ja, Math.max(K - V, 0));
								g = la;
								k = u;
								q.cb = k * g > 0.5 * va
							} catch(wa) {
								q.eb = s,
								q.cb = s
							}
						} else q.eb = s,
						q.cb = s
					}
				}
			}
		}
		function h(i) {
			clearInterval(q);
			var g = document.domain.toLowerCase();
			if (! ( - 1 < g.indexOf("autohome.com.cn") || - 1 < g.indexOf("sina.com.cn") || - 1 < g.indexOf("pconline.com.cn") || - 1 < g.indexOf("pcauto.com.cn") || - 1 < g.indexOf("pclady.com.cn") || - 1 < g.indexOf("pcgames.com.cn") || - 1 < g.indexOf("pcbaby.com.cn") || - 1 < g.indexOf("pchouse.com.cn") || - 1 < g.indexOf("xcar.com.cn"))) if (y !== b) y = a;
			else {
				y = a;
				c();
				var g = s,
				j;
				for (j in n) if (j && n.hasOwnProperty(j) && n[j]) {
					var k = n[j];
					"block" === k.Pd && (g = m);
					k.total = t;
					d.log.ib({
						url: f(k)
					})
				}
				if (i && g) if (i = + new Date, e.d) for (g = i + 200; g > + new Date;);
				else {
					j = 1E5;
					for (g = 0; g < j; g++);
					g = + new Date;
					j = Math.min(200 * j / (g - i), 1E7);
					for (g = 0; g < j; g++);
				}
			}
		}
		function f(a) {
			var e = ["tu=" + a.id, "word=" + g.get(l, "ltu"), "if=" + g.get(l, "dis"), "aw=" + a.width, "ah=" + a.height, "pt=" + a.Ub, "it=" + a.Qb, "vt=" + a.Pb, "csp=" + u, "bcl=" + a.bd, "pof=" + a.ge, "top=" + a.top, "left=" + a.left, "total=" + a.total];
			return a.url + (a.rc ? a.rc + "&": "") + e.join("&")
		}
		var j = 1,
		b = 2,
		a = 3,
		e = d.f,
		k = d.event.bind,
		i = d.style,
		o = d.lang.Za,
		n = [],
		t = 0,
		q = 0,
		y = j,
		v = m,
		r = 0,
		u = [1E4 < screen.availWidth ? 0: screen.availWidth, 1E4 < screen.availHeight ? 0: screen.availHeight].join(),
		B = window;
		d.m.G(window) && ! d.m.U(window) && (B = window.top);
		q = setInterval(c, 500);
		(function() {
			function a() {
				var e = + new Date,
				b;
				for (b in n) if (o.call(n, b)) {
					var f = n[b];
					f.Xa += e - f.bb;
					f.bb = e
				}
				v = s
			}
			function b() {
				var a = + new Date,
				e;
				for (e in n) o.call(n, e) && (n[e].bb = a);
				v = m
			}
			e.d ? (k(document, "focusin", b), k(document, "focusout", a)) : (k(window, "focus", b), k(window, "blur", a))
		})();
		k(window, "beforeunload", h);
		return {
			register: function(a) {
				var e = + new Date,
				b = a.id,
				f = a.wrapperId,
				c = a.url || "http://eclick.baidu.com/a.js?",
				g = a.logType || "storage",
				a = a.extra || "";
				if (f && ! n[f]) {
					var j = d.m.c(f);
					if (j) {
						var k = i.Z(j);
						n[f] = {
							id: b,
							te: f,
							url: c,
							Pd: g,
							rc: a,
							timestamp: e,
							Qb: 0,
							eb: s,
							Pb: 0,
							cb: s,
							Ub: 0,
							Xa: 0,
							bb: e,
							top: k.top,
							left: k.left,
							Qe: u,
							opacity: i.vc(j),
							bd: [i.o(), i.j()].join(),
							ge: [i.Lb(), i.Kb()].join(),
							width: i.ya(j),
							height: i.xa(j)
						};
						t++
					}
				}
			},
			getWatchCount: function() {
				return t
			}
		}
	});
	Y && Y("union/preview", ["union/common/bom", "union/common/logic", "union/common/cookie"], function(d, g, c) {
		function h(f) {
			f = decodeURIComponent(f).replace(/\\x1e/g, "&").replace(/\\x1d/g, "=").replace(/\\x1c/g, "?").replace(/\\x5c/g, "\\");
			return g.Nd(f)
		}
		function f(f, b) {
			var a;
			a = b ? b.substring(b.indexOf("?")) : d.U(window) ? window.location.search.slice(1) : window.top.location.search.slice(1);
			var e = document.referrer,
			k = 0 <= f.indexOf("inlay") || "ui" === f ? "bd_cpro_prev": "bd_cpro_fprev",
			i = "",
			o;
			try {
				o = document.cookie
			} catch(n) {} - 1 !== a.indexOf(k) && (i = g.xc(a, k)); ! i && o && - 1 !== o.indexOf(k) && (i = c.ha(k)); ! i && - 1 !== e.indexOf(k) && (i = g.xc(e, k));
			return i
		}
		return {
			Jb: function(c, b) {
				var a = window.location.href,
				e = parseInt(c.rsi0, 10),
				d = parseInt(c.rsi1, 10),
				i = parseInt(c.at, 10),
				g = s,
				n = f(b, a);
				if (n) if (n = h(n), i === l && (i = 1), 1 !== parseInt(n.type, 10) && 2 === (i & 2)) g = parseInt(n.imgWidth, 10) === parseInt(e, 10) && parseInt(n.imgHeight, 10) === parseInt(d, 10);
				else if (1 === parseInt(n.type, 10) && (1 === (i & 1) || 64 === (i & 64) || 32 === (i & 32))) g = m;
				return g ? (e = 0 <= b.indexOf("inlay") || "ui" === b ? "bd_cpro_prev": "bd_cpro_fprev", a = f(b, a), d = c.tn, i = h(a), g = p, 0 <= b.indexOf("inlay") ? g = {
					serviceUrl: "http://cpro.baidu.com/cpro/ui/preview/templates/" + (1 === parseInt(i.type, 10) ? d + ".html": 2 === parseInt(i.type, 10) ? "image.html": 4 === parseInt(i.type, 10) ? "flash.html": "blank_tips.html") + "?",
					paramString: ("" + e + "=#" + a + "&ut=" + + new Date).replace(/\.(?!swf)/g, "%252e")
				}: 0 <= b.indexOf("float") && (i = parseInt(i.type, 10), i = "http://cpro.baidu.com/cpro/ui/preview/templates/" + (2 === i ? "float_image.html": 4 === i ? "float_flash.html": "blank_tips.html") + "?", a = "tn=" + d + ("&" + e + "=" + a).replace(/\./g, "%252e") + "&ut=" + + new Date, g = {
					serviceUrl: i,
					paramString: a
				}), g) : p
			}
		}
	});
	Y && Y("union/business/businessLogic", ["union/preview", "union/common/dom", "api"], function(d, g, c) {
		var h = {
			inlay: 8,
			"float": 2,
			patch: 2,
			linkunit: 20,
			popup: 1
		},
		f = {
			inlay: {},
			"float": {},
			patch: {},
			linkunit: {},
			popup: {}
		},
		j = {
			1001: "inlay-fixed",
			1002: "inlay-float",
			2001: "float-left-middle",
			2002: "float-right-middle",
			2003: "float-left-bottom",
			2004: "float-right-bottom",
			2005: "float-top",
			2006: "float-bottom",
			2007: "float-linkunit-left",
			3001: "patch-webpage",
			3002: "patch-flash",
			4001: "captcha-webpage"
		};
		return {
			gb: function(b) {
				var a = b._html || {},
				e = "",
				f = "http://pos.baidu.com/acom?",
				i = b.id.split("_")[0],
				g = parseInt(a.conW || 0, 10) || parseInt(b._w, 10) || parseInt(b.sw, 10) || parseInt(a.rsi0, 10),
				j = parseInt(a.conH || 0, 10) || parseInt(b._h, 10) || parseInt(b.sh, 10) || parseInt(a.rsi1, 10),
				h = b.displayType,
				q = a.tn || "",
				y = q.toLowerCase(),
				v = a.ch || 0,
				r = b.qn || "",
				u = a.n || "",
				B = a.dai || 0;
				a.dtm = "BAIDU_DUP2_SETJSONADSLOT";
				a.dc = "2";
				a.di = i;
				a.ti = c.getDocumentTitle();
				var C = s,
				e = 1E6 * Math.random();
				1E4 >= e ? a.rs = "60010": 2E4 >= e && (a.rs = "60011", C = m);
				(b = c.getInfo("timestampWathcer" + b.id)) && (a.tt = b.t1 + "." + (b.t2 - b.t1) + "." + (b.t3 - b.t1) + "." + ( + new Date - b.t1));
				var b = [],
				w;
				for (w in a) w && a.hasOwnProperty(w) && b.push("" + w + "=" + encodeURIComponent(a[w].toString()));
				e = b.join("&");
				if ((w = d.Jb(a, h)) && w.serviceUrl !== l && w.paramString !== l) f = w.serviceUrl,
				e = w.paramString;
				return {
					slotId: i,
					slotWidth: g,
					slotHeight: j,
					displayType: h,
					styleType: y,
					iframeId: "cproIframe_" + i + "_" + a.dai,
					unionAccount: u,
					adIndex: B,
					channel: v,
					pvId: r,
					stuffType: "unknown",
					serviceUrl: f,
					paramString: e,
					delayIn: a.delayIn,
					delayOut: a.delayOut,
					sessionSync: a.sessionSync !== s && "false" !== a.sessionSync,
					closeFor: a.closeFor,
					xuantingType: a.xuanting,
					isExp: C,
					tn: q
				}
			},
			Wb: function(b) {
				var a = {};
				a.hd = (b.hd || "pc").toLowerCase();
				a.K = (b.K || "inlay-fixed").toLowerCase();
				a.z = (b.z || "template_inlay_all_normal").toLowerCase();
				a.ba = (b.ba || "text").toLowerCase();
				a.T = b.T;
				if ( - 1 < a.z.indexOf("tlink") || - 1 < a.z.indexOf("linkunit") || - 1 < a.z.indexOf("baiducustnativead")) a.K = "linkunit-fixed";
				0 <= a.z.indexOf("float_xuanfuwin") && (a.K = "popup-float");
				b = a.K.split("-");
				a.zb = b[0] || "inlay";
				a.Ce = b[1] || "fixed";
				return a
			},
			vb: function(b) {
				var b = this.Wb(b),
				a = b.zb;
				return this.pd(b) < h[a]
			},
			pd: function(b) {
				var b = this.Wb(b),
				a = 0,
				b = f[b.zb],
				e;
				for (e in b) e && b[e] && b.hasOwnProperty(e) && (g.c(e) ? a++ : b[e] = l);
				return a
			},
			jb: function(b) {
				b = this.Wb(b);
				f[b.zb][b.T] = 1;
				return m
			},
			Nb: function(b, a) {
				var e = document.getElementById("cpro_" + b);
				e || (e = document.getElementById(a));
				return e
			},
			ud: function(b) {
				return j[b]
			},
			lb: function(b) {
				var a = b.slotId;
				X(["viewWatch"], function(e) {
					e.register({
						id: a,
						wrapperId: b.iframeId,
						logType: "block",
						extra: "ch=" + b.channel + "&jk=" + b.pvId + "&n=" + b.unionAccount
					})
				},
				m)
			}
		}
	});
	Y && Y("union/common/bom", [], function() {
		var d = {};
		/msie (\d+\.\d)/i.test(navigator.userAgent) && (d.d = document.documentMode || + RegExp.$1);
		/opera\/(\d+\.\d)/i.test(navigator.userAgent) && (d.opera = + RegExp.$1);
		/firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (d.md = + RegExp.$1);
		/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(navigator.userAgent) && ! /chrome/i.test(navigator.userAgent) && (d.fe = + (RegExp.$1 || RegExp.$2));
		/chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (d.wb = + RegExp.$1);
		try {
			/(\d+\.\d)/.test(window.external.Ke) && (d.Qd = + RegExp.$1)
		} catch(g) {}
		d.Ac = /webkit/i.test(navigator.userAgent);
		d.Kd = /gecko/i.test(navigator.userAgent) && ! /like gecko/i.test(navigator.userAgent);
		d.zc = "CSS1Compat" == document.compatMode;
		return {
			f: d,
			J: function() {
				var c = m;
				if (this.f.d && (7 > this.f.d || "BackCompat" === document.compatMode)) c = s;
				return c
			},
			Lb: function(c) {
				try {
					return c = c || window,
					"BackCompat" === c.document.compatMode ? c.document.body.scrollWidth: c.document.documentElement.scrollWidth
				} catch(d) {
					return 0
				}
			},
			Kb: function(c) {
				try {
					return c = c || window,
					"BackCompat" === c.document.compatMode ? c.document.body.scrollHeight: c.document.documentElement.scrollHeight
				} catch(d) {
					return 0
				}
			},
			o: function(c) {
				try {
					return c = c || window,
					"BackCompat" === c.document.compatMode ? c.document.body.clientWidth: c.document.documentElement.clientWidth
				} catch(d) {
					return 0
				}
			},
			j: function(c) {
				try {
					return c = c || window,
					"BackCompat" === c.document.compatMode ? c.document.body.clientHeight: c.document.documentElement.clientHeight
				} catch(d) {
					return 0
				}
			},
			H: function(c) {
				c = (c || window).document;
				return window.pageYOffset || c.documentElement.scrollTop || c.body.scrollTop
			},
			Ka: function(c) {
				c = (c || window).document;
				return window.pageXOffset || c.documentElement.scrollLeft || c.body.scrollLeft
			},
			ab: function(c) {
				var d = s;
				try {
					c && "object" === typeof c && c.document && "setInterval" in c && (d = m)
				} catch(f) {
					d = s
				}
				return d
			},
			G: function(c) {
				c = c || window;
				return c != window.top && c != c.parent || ! this.ab(c)
			},
			U: function(c, d) {
				for (var d = 2 === arguments.length ? d: c.parent, f = 0; 10 > f++ && this.G(c, d);) {
					var g;
					try {
						g = !! c.parent.location.toString()
					} catch(b) {
						g = s
					}
					if (!g) return m;
					c = c.parent
				}
				return 10 <= f ? m: s
			},
			he: function(c, d) {
				var f = new Image,
				g = "cpro_log_" + Math.floor(2147483648 * Math.random()).toString(36),
				d = d || window;
				d[g] = f;
				f.onload = f.onerror = f.onabort = function() {
					f.onload = f.onerror = f.onabort = p;
					f = d[g] = p
				};
				f.src = c
			},
			Ja: function(c) {
				if (!c) return document;
				"string" === typeof c && (c = document.getElementById(c));
				return 9 === c.nodeType ? c: c.ownerDocument || c.document
			},
			$: function(c) {
				"string" === typeof c && (c = document.getElementById(c));
				c = this.Ja(c);
				return c.parentWindow || c.defaultView || p
			},
			He: function(c) {
				c = c || window;
				return this.G(c) && ! this.U(c, c.top) && this.ab(c.top) ? c.top: c
			}
		}
	});
	Y && Y("union/common/cookie", [], function() {
		return {
			ha: function(d, g) {
				var c, h = RegExp("(^| )" + d + "=([^;]*)(;|$)").exec((g || window).document.cookie);
				h && (c = h[2]);
				return c
			},
			Ba: function(d, g, c) {
				var c = c || {},
				h = c.ua;
				"number" == typeof c.ua && (h = new Date, h.setTime(h.getTime() + c.ua));
				document.cookie = "" + d + "=" + g + (c.path ? "; path=" + c.path: "") + (h ? "; expires=" + h.toGMTString() : "") + (c.domain ? "; domain=" + c.domain: "") + (c.Se ? "; secure": "")
			},
			remove: function(d) {
				var g = new Date;
				g.setTime(g.getTime() - 86400);
				this.Ba(d, "", {
					path: "/",
					ua: g
				})
			}
		}
	});
	Y && Y("union/common/dom", ["union/common/oo", "union/common/bom"], function(d, g) {
		return d(function(c) {
			var d = g.f;
			return {
				c: function(f, c) {
					return "string" === typeof f || f instanceof String ? (c || window).document.getElementById(f) : f
				},
				yc: function(f, d) {
					var b = m;
					if ("string" === typeof d) return f.id === d;
					if (d.constructor === Object) return c.kd(d, function(a, e) {
						var c = (f.getAttribute ? f.getAttribute(e) : f[e]) || f[e];
						if ("tagName" === e) {
							if (c.toUpperCase() != a.toUpperCase()) return b = s
						} else if (c != a) return b = s
					}),
					b;
					if (d.constructor === Array) {
						var a = d.concat([]);
						a.reverse();
						for (var e = f; e && a.length; e = e.parentNode) this.yc(e, a[0]) && a.shift();
						return ! a.length ? m: s
					}
				},
				Pc: function(f, c) {
					if (f && c(f) !== s) {
						var b = f.childNodes;
						if (b) for (var a = 0, e = b.length; a < e; a++) if (this.Pc(b[a], c) === s) return s
					}
				},
				Mc: function(f, c) {
					var b = this;
					f.constructor === Object && (f = this.w(f));
					if ("string" === typeof c) {
						for (var a = document.getElementById(c), e = a; e;) {
							if (e === f) return a;
							e = e.parentNode
						}
						return p
					}
					if (c.constructor === Object) {
						var d = p;
						b.Pc(f, function(a) {
							if (b.yc(a, c)) return d = a,
							s
						});
						return d
					}
				},
				w: function(f) {
					if (f) {
						if (f.nodeName) return f;
						1 < arguments.length && (f = Array.prototype.slice.call(arguments, 0));
						if ("string" === typeof f) return document.getElementById(f);
						if (f.constructor === Object) return this.Mc(document.documentElement, f);
						if (f.constructor === Array) {
							for (var c = f.concat([]), b = document.documentElement; c.length && b;) b = this.Mc(b, c.shift());
							return b
						}
					}
				},
				de: function(f, g, b) {
					var b = b || this.Xe || window,
					a = b.document;
					this.pc = 0;
					this.za = this.za || [];
					this.za.push({
						Fb: f,
						oc: g || 0,
						Ab: s
					});
					var e = c.k(function() {
						var e = s;
						this.pc++;
						var f = s;
						try {
							b.frameElement && (f = m)
						} catch(c) {
							f = m
						}
						if (d.d && 9 > d.d && ! f) try {
							a.documentElement.doScroll("left"),
							e = m
						} catch(g) {} else if ("complete" === a.readyState || this.jd) e = m;
						else if (3E5 < this.pc) {
							this.ea && (b.clearInterval(this.ea), this.ea = p);
							return
						}
						if (e) try {
							if (this.za && this.za.length) for (var e = 0, j = this.za.length; e < j; e++) {
								var q = this.za[e];
								q && q.Fb && ! q.Ab && (q.oc ? (q.Ab = m, b.setTimeout(q.Fb, q.oc)) : (q.Ab = m, q.Fb()))
							}
						} catch(y) {
							throw y;
						} finally {
							this.ea && (b.clearInterval(this.ea), this.ea = p)
						}
					},
					this),
					f = c.k(function() {
						this.jd = m;
						e()
					},
					this);
					this.ea || (this.ea = b.setInterval(e, 50), a.addEventListener ? (a.addEventListener("DOMContentLoaded", f, s), b.addEventListener("load", f, s)) : a.attachEvent && b.attachEvent("onload", f, s))
				},
				J: function() {
					var f = m;
					if (d.d && (7 > d.d || "BackCompat" === document.compatMode)) f = s;
					return f
				},
				bind: function(f, c, b) {
					"string" === typeof f && (f = this.w(f));
					c = c.replace(/^on/i, "").toLowerCase();
					f.addEventListener ? f.addEventListener(c, b, s) : f.attachEvent && f.attachEvent("on" + c, b);
					return f
				},
				Qc: function(f, c, b) {
					f = this.w(f);
					if (!f) return p;
					c = c.replace(/^on/i, "").toLowerCase();
					f.removeEventListener ? f.removeEventListener(c, b, s) : f.detachEvent && f.detachEvent("on" + c, b);
					return f
				},
				s: function(f, c) {
					var b;
					"string" === typeof f && (f = this.w(f));
					var a = g.Ja(f),
					e = "",
					e = - 1 < c.indexOf("-") ? c.replace(/[-_][^-_]{1}/g, function(a) {
						return a.charAt(1).toUpperCase()
					}) : c.replace(/[A-Z]{1}/g, function(a) {
						return "-" + a.charAt(0).toLowerCase()
					});
					a && a.defaultView && a.defaultView.getComputedStyle ? ((a = a.defaultView.getComputedStyle(f, p)) && (b = a.getPropertyValue(c)), "boolean" !== typeof b && ! b && (b = a.getPropertyValue(e))) : f.currentStyle && ((a = f.currentStyle) && (b = a[c]), "boolean" !== typeof b && ! b && (b = a[e]));
					return b
				},
				Z: function(f, c) {
					c = c || window;
					"string" === typeof f && (f = this.w(f));
					if (f) {
						for (var b = this.ga(f), a, e = 0; c != c.parent && 10 > e;) e++,
						a = this.ga(c.frameElement),
						b.left += a.left,
						b.top += a.top,
						c = c.parent;
						return b
					}
				},
				ga: function(f) {
					"string" === typeof f && (f = this.w(f));
					var c = g.Ja(f),
					b = g.f;
					0 < b.Kd && c.getBoxObjectFor && this.s(f, "position");
					var a = {
						left: 0,
						top: 0
					},
					e;
					if (f == (b.d && ! b.zc ? c.body: c.documentElement) || ! f) return a;
					if (f.getBoundingClientRect) f = f.getBoundingClientRect(),
					a.left = Math.floor(f.left) + Math.max(c.documentElement.scrollLeft, c.body.scrollLeft),
					a.top = Math.floor(f.top) + Math.max(c.documentElement.scrollTop, c.body.scrollTop),
					a.left -= c.documentElement.clientLeft,
					a.top -= c.documentElement.clientTop,
					f = c.body,
					c = parseInt(this.s(f, "borderLeftWidth"), 10),
					f = parseInt(this.s(f, "borderTopWidth"), 10),
					b.d && ! b.zc && (a.left -= isNaN(c) ? 2: c, a.top -= isNaN(f) ? 2: f);
					else {
						e = f;
						do {
							a.left += e.offsetLeft;
							a.top += e.offsetTop;
							if (0 < b.Ac && "fixed" == this.s(e, "position")) {
								a.left += c.body.scrollLeft;
								a.top += c.body.scrollTop;
								break
							}
							e = e.offsetParent
						} while (e && e != f);
						if (0 < b.opera || 0 < b.Ac && "absolute" == this.s(f, "position")) a.top -= c.body.offsetTop;
						for (e = f.offsetParent; e && e != c.body;) {
							a.left -= e.scrollLeft;
							if (!b.opera || "TR" != e.tagName) a.top -= e.scrollTop;
							e = e.offsetParent
						}
					}
					return a
				},
				ya: function(c, d) {
					var c = this.w(c),
					b = c.offsetWidth;
					if (d || s) var a = this.s(c, "marginLeft").toString().toLowerCase().replace("px", "").replace("auto", "0"),
					e = this.s(c, "marginRight").toString().toLowerCase().replace("px", "").replace("auto", "0"),
					b = b + (parseInt(a || 0, 10) + parseInt(e || 0, 10));
					return b
				},
				xa: function(c, d) {
					var c = this.w(c),
					b = c.offsetHeight;
					if (d || s) var a = this.s(c, "marginTop").toString().toLowerCase().replace("px", "").replace("auto", "0"),
					e = this.s(c, "marginBottom").toString().toLowerCase().replace("px", "").replace("auto", "0"),
					b = b + (parseInt(a || 0, 10) + parseInt(e || 0, 10));
					return b
				},
				Ge: function(c) {
					var c = this.w(c),
					d = this.$(c),
					b = 0;
					if (this.G(window) && ! g.U(window)) {
						for (; d.parent != window.top && 10 > b;) b++,
						d = d.parent;
						10 > b && (c = d.frameElement || c)
					}
					return c
				},
				Ib: function(c) {
					var d = this.w(c),
					c = this.$(d),
					b = 100,
					a;
					try {
						for (; d && d.tagName;) {
							a = 100;
							if (this.f.d) {
								if (5 < this.f.d) try {
									a = d.Ee.alpha.opacity || 100
								} catch(e) {}
								b = b > a ? a: b
							} else {
								try {
									a = 100 * (c.getComputedStyle(d, p).opacity || 1)
								} catch(g) {}
								b *= a / 100
							}
							d = d.parentNode
						}
					} catch(i) {}
					return b || 100
				},
				vc: function(c) {
					for (var d = this.w(c), c = this.$(d), d = this.Ib(d), b = 100, a = 0; this.G(c);) {
						a++;
						if (g.U(c, c.parent)) break;
						else b = 100,
						c.frameElement && (b = this.Ib(c.frameElement)),
						d *= b / 100;
						c = c.parent
					}
					return d
				}
			}
		})
	});
	Y && Y("union/common/logic", [], function() {
		return {
			De: function(d) { (d = d || "") && (d = d.replace(/%u[\d|\w]{4}/g, function(d) {
					return encodeURIComponent(unescape(d))
				}));
				return d
			},
			ka: function(d, g) {
				return d.replace(/{(.*?)}/g, function(c, d) {
					return g[d] || ""
				})
			},
			Nd: function(d) {
				var g = "";
				window.JSON && window.JSON.parse && (g = window.JSON.parse(d));
				return g
			},
			xc: function(d, g) {
				if (d && g) {
					var c = d.match(RegExp("(^|&|\\?|#)" + g + "=([^&]*)(&|$)", ""));
					if (c) return c[2]
				}
				return p
			},
			Ne: function(d, g) {
				var d = d || "",
				g = g || "?",
				c = arguments.callee;
				c.hasOwnProperty[g] || (c[g] = {});
				c = c[g];
				if (c.hasOwnProperty(d)) return c[d];
				var h = {},
				f = d.indexOf(g),
				j = d.substring(f + 1).split("&");
				if ( - 1 !== f) for (var f = 0, b = j.length; f < b; f++) {
					var a = j[f].split("="),
					e = decodeURIComponent(a[0]),
					a = decodeURIComponent(a[1]);
					h.hasOwnProperty(e) ? (h[e].constructor !== Array && (h[e] = [h[e]]), h[e].push(a)) : h[e] = a
				}
				return c[d] = h
			}
		}
	});
	Y && Y("union/common/oo", [], function() {
		function d(c) {
			var g = d.create(d);
			return c.call(g, g, g.jc)
		}
		function g(c, d) {
			if (c.constructor === Array) for (var b = 0, a = c.length; b < a; b++) {
				if (d.call(c, c[b], b, c) === s) return s
			} else {
				var b = ! {
					toString: 1
				}.propertyIsEnumerable("toString"),
				e = "toString,toLocaleString,valueOf,constructor,propertyIsEnumerable,hasOwnProperty,isPrototypeOf".split(",");
				for (a in c) if (c.hasOwnProperty(a) && d.call(c, c[a], a, c) === s) return s;
				if (b) {
					b = 0;
					for (a = e.length; b < a; b++) {
						var g = e[b];
						if (c.hasOwnProperty(g) && d.call(c, g, b, c) === s) return s
					}
				}
			}
			return m
		}
		function c(c, d, b) {
			g(d, function(a, e) {
				if (!c.hasOwnProperty(e) || b) c[e] = a
			})
		}
		function h(c) {
			function d() {}
			if (Object.create) return Object.create(c);
			d.prototype = c;
			return new d
		}
		d.jc = {};
		d.create = h;
		d.kd = g;
		d.qb = function(f) {
			var d, b = f.hasOwnProperty("constructor") ? f.constructor: function() {};
			b.prototype = f;
			b.prototype.constructor = b;
			d = d || {};
			d.$b && c(b, d.$b);
			return b
		};
		d.extend = function(d, g, b) {
			var a;
			a = g.hasOwnProperty("constructor") ? g.constructor: function() {
				d.constructor.apply(this, arguments)
			};
			a.prototype = h(d.prototype);
			c(a.prototype, g, m);
			a.prototype.constructor = a;
			a.prototype.ye = d.prototype;
			c(a, d);
			b = b || {};
			b.$b && c(a, b.$b, m);
			return a
		};
		d.Le = function(c) {
			var d = this.jc;
			g(c.split("."), function(b) {
				d.hasOwnProperty(b) || (d[b] = {});
				d = d[b]
			});
			return d
		};
		d.k = function(c, d) {
			var b;
			return function() {
				b = b || [];
				for (var a = 0, e = arguments.length; a < e; a++) b.push(arguments[a]);
				return c.apply(d || {},
				b)
			}
		};
		return d
	});
	Y && Y("union/DynamicFloatDecorator", ["union/common/bom", "union/common/dom", "union/common/cookie", "union/common/oo"], function(d, g, c, h) {
		var f = window,
		j;
		h(function(b) {
			j = b.qb({
				constructor: function(a) {
					this.Rb(a);
					this.Hd();
					this.Id()
				},
				Rb: function(a) {
					this.r = a.r;
					this.da = a.da;
					this.O = 5;
					this.a = g.c(this.r);
					this.Rc = g.c(a.xe);
					this.Ea = g.c(a.ve);
					this.h = a.h;
					this.l = a.l || 0;
					0 > this.l && (this.l = 0);
					this.S = "bd_close_" + a.e;
					c.ha(this.S, f);
					if (this.h && (this.ub = 500, this.pa = s, this.Sa = m, this.B = a.B || 0, this.C = a.C || 0, 0 > this.B && (this.B = 0), 0 > this.C && (this.C = 0), this.A = a.A || s)) this.l = 0;
					this.i = a.i;
					var e = g.c(this.da);
					0 === this.i ? e && e.getAttribute("_src") && e.setAttribute("src", e.getAttribute("_src")) : isNaN(this.i) ? e.parentNode.removeChild(e) : (this.Ua = a.Ua ? a.Ua: 0, this.ma = a.ma ? a.ma: 0, this.aa = a.aa || s)
				},
				Hd: function() {
					if (!this.aa) {
						var a = g.J(),
						e;
						if (this.i) {
							e = 1;
							if (2 === this.i) this.h = "top",
							e = 2;
							else if (3 === this.i) this.h = "bottom",
							e = 1;
							else if (1 != this.i && 0 != this.i && this.a) {
								this.a.style.display = "none";
								return
							}
							for (var b = 1; 2 >= b; b++)(function(a) {
								var e = "bkimg_" + + new Date + Math.floor(1E5 * Math.random()),
								b = window[e] = new Image;
								b.onload = b.onerror = function() {
									b.onload = b.onerror = p;
									b = window[e] = p
								};
								b.src = "http://cpro.baidustatic.com/cpro/ui/noexpire/img/toggle_btn_bk" + a + ".png"
							})(b);
							this.h && ! a && this.a && document.body.appendChild(this.a);
							var b = 2 === this.i || 3 === this.i,
							c = 1 < this.i ? "display:none;": "",
							o = 1 === this.i ? "width:" + this.Ua + "px;": "";
							this.h && ! a && (o = d.o(window) + "px");
							var n;
							g.J() ? 2 === this.i ? n = "position:fixed;top:0;width:100%;": 3 === this.i && (n = "position:fixed;bottom:0;width:100%;") : 2 === this.i ? n = "position:absolute;top:0;width:100%;": 3 === this.i && (n = "position:absolute;top:" + (d.H(f) + d.j(f) - this.Ua) + "px;width:100%;");
							a = "";
							d.f.d && 7 > d.f.d && (a = "_background-image:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://cpro.baidustatic.com/cpro/ui/noexpire/img/toggle_btn_bk" + e + ".png');");
							if (this.a) {
								var h = "",
								j = "";
								b && (h = '<div id="' + this.r + 'Toggle" style="z-index:2147483646;cursor:pointer;position:absolute;right:0;' + this.h + ':0;width:40px;height:100%;background-color:#3f3f3f;"><div style="width:20px;height:22px;position:absolute;top:50%;margin-top:-11px;left:50%;margin-left:-10px;background:no-repeat url(http://cpro.baidustatic.com/cpro/ui/noexpire/img/toggle_btn_bk' + e + ".png);" + a + '"></div></div>', j = '<div id="' + this.r + 'Bk" style="' + this.h + ':0;left:0;position:absolute;width:100%;height:100%;background-color:#666;-moz-opacity:.6;filter:alpha(opacity=60);opacity:.6;"></div>');
								var y = "position:relative;margin:5px 0;";
								this.a.insertAdjacentHTML("afterBegin", j + h);
								e = this.a.getElementsByTagName("IFRAME")[0]
							} else e = g.c(this.da);
							b && (this.ob = document.getElementById(this.r + "Toggle"), this.pb = this.ob.getElementsByTagName("DIV")[0], this.h && this.a.setAttribute("dockTo", this.h), this.ca = document.getElementById(this.r + "Bk"), this.ca.style.height = this.ma + 10 + "px", this.ob.style.height = this.ma + 10 + "px", this.a.style.cssText = c + o + "height:" + (this.ma + 10) + "px;right:0;z-index:2147483646;text-align:center;font-size:0;_overflow-y:hidden;" + n, e.style.cssText = y);
							this.W()
						}
					}
				},
				Id: function() {
					g.de(h.k(this.Sd, this));
					g.bind(f, "scroll", h.k(this.W, this));
					g.bind(f, "resize", h.k(this.W, this));
					this.aa && g.bind(f, "onorientationchange" in window ? "orientationchange": "resize", h.k(this.W, this));
					this.ob && g.bind(this.ob, "click", h.k(this.cc, this));
					this.Rc && g.bind(this.Rc, "click", h.k(this.we, this));
					this.Ea && g.bind(this.Ea, "click", h.k(this.ue, this))
				},
				Sd: function() {
					if (this.a) {
						var a = this;
						this.a.setAttribute("baiduxuanting", "baiduCproXuantingRoof");
						this.h && (c.ha(this.S, f) ? this.a.parentNode.removeChild(this.a) : (setTimeout(function() {
							if (a.a) {
								var e = g.c(a.da);
								e.getAttribute("_src") && e.setAttribute("src", e.getAttribute("_src"));
								a.a.style.display = "block"
							}
						},
						this.B), this.C && setTimeout(function() {
							a.a && (a.a.style.display = "none", a.a.parentNode.removeChild(a.a))
						},
						this.B + this.C)))
					}
				},
				kb: function() {
					var a = {
						path: ""
					};
					if (this.l) {
						var e = new Date;
						e.setTime(e.getTime() + this.l);
						a.ua = e
					}
					c.Ba(this.S, 1, a)
				},
				we: function() {
					this.a && (this.a.parentNode.removeChild(this.a), c.remove(this.S), (this.A || this.l) && this.kb(), document.body.removeChild(g.c(this.da + "Wrap_placeholder")))
				},
				ue: function() {
					var a = g.c(this.da);
					"hidden" === a.parentNode.style.visibility ? (a.parentNode.style.visibility = "visible", this.Ea.style.backgroundImage = "url(http://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.0/lu_shouqi.png)", this.Ea.innerHTML = "\u6536\u8d77") : (a.parentNode.style.visibility = "hidden", this.Ea.style.backgroundImage = "url(http://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.0/lu_logo.png)", this.Ea.innerHTML = "")
				},
				cc: function() {
					this.Sa ? this.Ob() : this.show()
				},
				Qa: function(a) {
					if (!this.pa) {
						this.pa = m;
						var e = this.ca,
						b = g.c(this.da),
						c = this.h,
						f = this.a.offsetHeight,
						n = Math.round(this.ub / f),
						h = 0;
						a && (this.a.style.width = "100%");
						var j = + new Date,
						y = this,
						v = setInterval(function() {
							var g = h = Math.round(( + new Date - j) / n),
							u = g;
							a && (u = f - g);
							e.style[c] = - u + "px";
							b.style[c] = - u + "px";
							g >= f && (this.pa = s, (y.Sa = a) && "top" === c || ! a && "bottom" === c ? d.f.d && 7 > d.f.d ? this.pb.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://cpro.baidustatic.com/cpro/ui/noexpire/img/toggle_btn_bk2.png');": this.pb.style.backgroundImage = "url(http://cpro.baidustatic.com/cpro/ui/noexpire/img/toggle_btn_bk2.png)": d.f.d && 7 > d.f.d ? this.pb.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://cpro.baidustatic.com/cpro/ui/noexpire/img/toggle_btn_bk1.png');": this.pb.style.backgroundImage = "url(http://cpro.baidustatic.com/cpro/ui/noexpire/img/toggle_btn_bk1.png)", u = f, a && (u = 0), e.style[c] = - u + "px", b.style[c] = - u + "px", clearInterval(v))
						},
						n)
					}
				},
				show: function() {
					this.A && c.remove(this.S);
					this.Qa(m)
				},
				Ob: function() { (this.A || this.l) && this.kb();
					this.Qa(s)
				},
				W: function() {
					var a = d.o(f);
					this.h && ! this.aa && (this.a && (this.a.style.width = a + "px"), this.ca && (this.ca.style.width = a + "px"));
					this.Hc && clearTimeout(this.Hc);
					this.Hc = setTimeout(h.k(this.Na, this), 5)
				},
				Na: function() {
					g.s(document.body, "position");
					if (g.J()) {
						this.a.style.zIndex = 2147483646;
						if (1 === this.i) if ("fixed" === this.a.style.position) this.Fa(),
						this.Jd() && (this.a.style.cssText = p, this.Xb());
						else {
							var a = this.fc();
							a && (this.Ha(), this.a.style.position = "fixed", this.a.style.top = a + "px", this.Fa())
						}
						4 === this.i && (this.la || (this.la = this.a.style.bottom.replace("px", "")), this.a.style.bottom = 361 > d.j() ? Math.min(60, this.la) + "px": this.la + "px")
					} else this.Aa(this.r)
				},
				Ha: function() {
					var a = this.r + "placeholder",
					e = document.createElement("div");
					e.id = a;
					e.align && (e.align = this.a.getAttribute("align"));
					e.style.width = this.a.getAttribute("width") + "px";
					e.style.height = this.a.getAttribute("height") + "px";
					e.style.margin = "0";
					e.style.padding = "0";
					e.style.background = "none";
					e.style.border = "none";
					this.a.parentNode.insertBefore(e, this.a);
					return m
				},
				Xb: function() {
					var a = document.getElementById(this.r + "placeholder");
					a.parentNode.removeChild(a);
					return m
				},
				fc: function() {
					return 5 > this.q(this.a).top ? 5: s
				},
				Md: function() {
					return 5 > this.q(this.a).top ? 5: s
				},
				Jd: function() {
					var a = document.getElementById(this.r + "placeholder");
					return this.a && a && (a = this.q(a).X.top, this.q(this.a).X.top <= a) ? m: s
				},
				Fa: function() {
					var a = document.getElementById(this.r + "placeholder");
					this.a && a && (this.a.style.left = this.q(a).left + "px")
				},
				q: function(a) {
					var e = g.ga(a),
					b = g.Ka(f),
					c = g.H(f),
					d = g.ya(a, s),
					a = g.xa(a, s);
					return {
						top: e.top - c,
						bottom: e.top - c + a,
						left: e.left - b,
						right: e.left - b + d,
						X: {
							top: e.top,
							bottom: e.top + a,
							left: e.left,
							right: e.left + d
						}
					}
				},
				Aa: function() {
					var a = d.H(f),
					e = g.s(f.document.body, "position").toString(),
					b = g.ga(f.document.body),
					c = b.left,
					o = b.top;
					if (b = document.getElementById(this.r)) if (b.style.position = "absolute", b.style.zIndex = 2147483646, 1 === this.i) if (document.getElementById(this.r + "placeholder")) {
						var n = document.getElementById(this.r + "placeholder"),
						h = this.q(n);
						b.style.top = a + this.O + "px";
						b.style.left = h.X.left + "px";
						"relative" === e && (b.style.top = a + this.O - o + "px", b.style.left = h.X.left - c + "px");
						b.style.visibility = "visible";
						a = this.q(b);
						h.X.top >= a.X.top && (b.parentNode.removeChild(b), n.parentNode.insertBefore(b, n), n.parentNode.removeChild(n), b.style.cssText = p)
					} else {
						if (n = this.Md()) this.O = n,
						this.Ha(this.r),
						n = document.getElementById(this.r + "placeholder"),
						h = this.q(n),
						b.parentNode.removeChild(b),
						document.body.appendChild(b),
						b.style.zIndex = 2147483646,
						b.style.top = a + this.O + "px",
						b.style.left = h.X.left + "px",
						"relative" === e && (b.style.top = a + this.O - o + "px", b.style.left = h.X.left - c + "px"),
						b.style.visibility = "visible",
						b.style.position = "absolute"
					} else 2 === this.i ? b.style.top = a + "px": 3 === this.i ? b.style.top = a + d.j() - (this.ma + 10) + "px": 4 === this.i && (this.la || (this.la = this.a.style.bottom.replace("px", "")), this.a.style.bottom = 361 > d.j() ? Math.min(60, this.la) + a + "px": this.la + a + "px")
				}
			})
		});
		return {
			se: function(b) {
				new j(b)
			}
		}
	});
	Y && Y("nova/painter/inlayFixed1392089005", ["union/business/businessLogic"], function(d) {
		function g(c, d) {
			return c.replace(/{(.*?)}/g, function(c, g) {
				return d[g] || ""
			})
		}
		return {
			render: function(c, h) {
				c.displayType = "inlay-fixed";
				var f = d.gb(c),
				j = d.Nb(f.slotId, h),
				b = {
					K: f.displayType,
					z: f.styleType,
					ba: f.stuffType,
					T: f.iframeId
				};
				if (!d.vb(b)) return s;
				var a = "";
				f.isExp === m && (a = '<div id="tip" style="box-sizing: content-box; position: absolute; bottom: 0px; left: 0px; width: 28px; height: 14px; z-index: 100; overflow:hidden; margin: 0px; _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,src="http://cpro.baidustatic.com/cpro/ui/noexpire/img/0.0.1/tip1.png",sizingMethod="crop"); _background: 0;"><img src="http://cpro.baidustatic.com/cpro/ui/noexpire/img/0.0.1/tip1.png"/></div>');
				j.innerHTML = g(['<div style="margin:0 auto;width:{slotWidth}px;height:{slotHeight}px;position:relative;"><iframe id="{iframeId}" width="{slotWidth}" height="{slotHeight}" src="{serviceUrl}{paramString}" align="center,center" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>', a, "</div>"].join(""), f);
				d.jb(b);
				d.lb(f, h)
			}
		}
	});
	Y && Y("nova/painter/xuanting1392089005", "union/common/cookie,union/common/bom,union/common/dom,union/common/logic,union/common/oo,union/business/businessLogic".split(","), function(d, g, c, h, f, j) {
		var b;
		f(function(a) {
			b = a.qb({
				constructor: function(a) {
					var b = a.Ta.id;
					this.Ta = c.w(a.Ta);
					this.type = + a.type;
					this.src = a.src;
					this.width = a.width;
					this.height = a.height;
					this.z = a.z || "";
					this.ac = a.ac || "";
					this.ra = a.ra || "0";
					this.Da = a.Da || "";
					this.Oa = a.Oa || "";
					this.O = this.ec = 5;
					this.M = a.M;
					this.V = a.V;
					this.e = a.e;
					this.S = "bd_close_" + this.e;
					this.qe = !! d.ha(this.S);
					this.b = this.zd(this.e);
					this.v = b;
					this.h = "";
					this.fileName = "c";
					this.Va = a.Va || 0;
					this.backgroundColor = a.backgroundColor;
					this.Ga = a.Ga;
					this.ja = a.ja;
					2 === this.type ? this.h = "top": 3 === this.type && (this.h = "bottom");
					this.h && (this.Sa = m, this.B = + a.B || 0, this.C = + a.C || 0, this.A = !! a.A || s, this.l = + a.l || 0, this.ub = 500);
					this.aa = a.aa || s
				},
				Ie: function(a) {
					return "string" === typeof a ? document.getElementById(a) : a
				},
				ne: function(a, b) {
					return (b || document).getElementsByTagName(a)[0]
				},
				Oc: function(a, b) {
					return a.replace(/\{(.*?)\}/g, function(a, e) {
						return b.hasOwnProperty(e) ? b[e] : a
					})
				},
				zd: function(a) {
					return "cproIframe_" + a
				},
				f: g.f,
				kb: function() {
					var a = {
						path: ""
					};
					if (this.l && ! this.A) {
						var b = new Date;
						b.setTime(b.getTime() + this.l);
						a.ua = b
					}
					d.Ba(this.S, 1, a)
				},
				ee: function(a) {
					var b = new Date;
					b.setTime(b.getTime() - 86400);
					d.Ba(a, "", {
						path: "/",
						ua: b
					})
				},
				W: function() {
					this.clientWidth = g.o(window);
					this.clientHeight = g.j(window);
					this.h && (this.u && (this.u.style.width = this.clientWidth + "px"), this.ca && (this.ca.style.width = this.clientWidth + "px"));
					this.Pa && clearTimeout(this.Pa);
					this.Pa = setTimeout(a.k(this.Na, this), 5)
				},
				Na: function() {
					var a = this.u;
					if (a) if (c.J()) {
						if (a.style.zIndex = 2147483646, 1 === this.type) if ("fixed" == a.style.position) this.Fa(),
						this.Yc() && (a.style.cssText = p, this.Xb());
						else {
							var b = this.fc();
							b && (this.Ha(), a.style.position = "fixed", a.style.top = b + "px", this.Fa())
						}
					} else this.Aa(this.u)
				},
				Yc: function(a) {
					var b;
					a ? (b = document.getElementById(a), a = document.getElementById("" + a + "placeholder")) : (b = this.u || document.getElementById(this.v), a = document.getElementById("" + this.v + "placeholder"));
					return b && a && (a = this.q(a).nb, this.q(b).nb <= a) ? m: s
				},
				Fa: function(a) {
					var b;
					a ? (b = document.getElementById(a), a = document.getElementById("" + a + "placeholder")) : (b = this.u || document.getElementById(this.v), a = document.getElementById("" + this.v + "placeholder"));
					b && a && (a = this.q(a).left, b.style.left = a + "px")
				},
				q: function(a) {
					var b = c.ga(a),
					d = g.Ka(window),
					f = g.H(window),
					n = c.ya(a, s),
					a = c.xa(a, s);
					return {
						top: b.top - f,
						bottom: b.top - f + a,
						left: b.left - d,
						right: b.left - d + n,
						nb: b.top,
						Ae: b.top + a,
						fb: b.left,
						Re: b.left + n
					}
				},
				Aa: function() {
					this.clientWidth = g.o(window);
					this.clientHeight = g.j(window);
					var a = g.H(window),
					b = c.s(document.body, "position").toString(),
					d = c.ga(document.body),
					f = d.left,
					n = d.top;
					if (d = this.u) if (d.style.position = "absolute", d.style.zIndex = 2147483646, 1 === this.type) if (document.getElementById("" + this.v + "placeholder")) {
						var h = document.getElementById("" + this.v + "placeholder"),
						j = this.q(h);
						d.style.top = "" + (a + this.O) + "px";
						d.style.left = "" + j.fb + "px";
						"relative" == b && (d.style.top = a + this.O - n + "px", d.style.left = j.fb - f + "px");
						d.style.visibility = "visible";
						a = this.q(d);
						j.nb >= a.nb && (d.parentNode.removeChild(d), h.parentNode.insertBefore(d, h), h.parentNode.removeChild(h), d.style.cssText = p)
					} else {
						if (h = this.oe(this.v)) this.O = h,
						this.Ha(this.v),
						h = document.getElementById("" + this.v + "placeholder"),
						j = this.q(h),
						d.parentNode.removeChild(d),
						document.body.appendChild(d),
						d.style.zIndex = 2147483646,
						d.style.top = a + this.O + "px",
						d.style.left = j.fb + "px",
						"relative" == b && (d.style.top = a + this.O - n + "px", d.style.left = j.fb - f + "px"),
						d.style.visibility = "visible",
						d.style.position = "absolute"
					} else 2 === this.type ? d.style.top = a + "px": 3 === this.type && (d.style.top = a + this.clientHeight - (this.height + 10) + "px")
				},
				Yb: function() {
					if (!this.aa) {
						var a = this.type,
						b = this.width,
						d = this.height,
						f = {
							srcAttrName: a === l || 1 == a ? "src": "_src",
							iframeWidth: b,
							iframeHeight: d,
							iframeId: this.b,
							paramString: this.M || "",
							serviceUrl: this.V
						},
						g = "";
						this.ja === m && (g = '<div id="tip" style="box-sizing: content-box; position: absolute; bottom: 0px; left: 0px; width: 28px; height: 14px; z-index: 100; overflow:hidden; margin: 0px; _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,src="http://cpro.baidustatic.com/cpro/ui/noexpire/img/0.0.1/tip1.png",sizingMethod="crop"); _background: 0;"><img src="http://cpro.baidustatic.com/cpro/ui/noexpire/img/0.0.1/tip1.png"/></div>');
						this.Zd();
						var g = ['<div style="margin:0 auto;width:{iframeWidth}px;height:{iframeHeight}px;position:relative;"><iframe id="{iframeId}" {srcAttrName}="{serviceUrl}{paramString}" width="{iframeWidth}" height="{iframeHeight}" align="center,center" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true" ></iframe>', g, "</div>"].join(""),
						h = s;
						if (a && (1 === a || 2 === a || 3 === a)) {
							var j = h = "auto",
							y;
							if (1 === a) y = "inline-block",
							h = b + "px",
							j = d + "px";
							else if (2 === a || 3 === a) y = "block",
							h = "100%",
							j = + d + 10 + "px";
							f.widthValue = h;
							f.heightValue = j;
							f.displayValue = y;
							a = this.Ta;
							a.setAttribute("width", h);
							a.setAttribute("height", j);
							a.style.cssText = this.Oc("width:{widthValue};height:{heightValue};display:{displayValue};", f);
							h = m
						}
						f = this.Oc(g, f);
						this.Ta.innerHTML = f;
						this.$a = c.w(this.b);
						h && (this.u = this.$a.parentNode);
						this.fd();
						this.pe()
					}
				},
				fd: function() {
					var a = this.type,
					b = this.$a,
					d = this.u;
					if (a) {
						var f = 1;
						if (2 === a) f = 2;
						else if (3 === a) f = 1;
						else if (1 !== a && 0 !== a && this.u) {
							this.u.style.display = "none";
							return
						}
						var h = 2 === a || 3 === a,
						j = "";
						switch (a) {
						case 2:
						case 3:
							var j = "display:none;",
							q = "";
							this.f.d && 7 > this.f.d && (q = "_background-image:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://cpro.baidustatic.com/cpro/ui/noexpire/img/toggle_btn_bk" + f + ".png');");
							f = h ? '<div id="' + this.b + 'WrapToggle" style="z-index:2147483646;cursor:pointer;position:absolute;right:0;' + this.h + ":0;width:40px;height:100%;background-color:" + this.backgroundColor + ';"><div style="width:20px;height:22px;position:absolute;top:50%;margin-top:-11px;left:50%;margin-left:-10px;background:no-repeat url(http://cpro.baidustatic.com/cpro/ui/noexpire/img/toggle_btn_bk' + f + ".png);" + q + '"></div></div>': "";
							h = h ? '<div id="' + this.b + 'WrapBk" style="' + this.h + ":0;left:0;position:absolute;width:100%;height:100%;background-color:" + this.backgroundColor + ";-moz-opacity:" + this.Ga / 100 + ";filter:alpha(opacity=" + this.Ga + ");opacity:" + this.Ga / 100 + ';"></div>': "";
							q = "";
							c.J() ? 1 === a ? q = "position:fixed;top:0;": 2 === a ? q = "position:fixed;top:0;width:100%;": 3 === a && (q = "position:fixed;bottom:0;width:100%;") : 1 === a ? q = "position:absolute;top:0;": 2 === a ? q = "position:absolute;top:0;width:100%;": 3 === a && (q = "position:absolute;top:" + (g.H(window) + g.j(window) - this.width) + "px;width:100%;");
							d.insertAdjacentHTML("afterBegin", h + f);
							d.style.cssText = [j, "height:", this.height + 10, "px;right:0;z-index:2147483646;text-align:center;font-size:0;_overflow-y:hidden;", q].join("");
							b.style.cssText = "position:relative;margin:5px 0;";
							this.bc = c.w("" + this.b + "WrapToggle");
							this.mb = this.ne("DIV", this.bc);
							this.ca = c.w(this.b + "WrapBk");
							this.W()
						}
					}
				},
				lb: function() {
					var a = this.e,
					b = this.v,
					c = this;
					X(["viewWatch"], function(d) {
						d.register({
							id: a,
							wrapperId: b,
							logType: "block",
							extra: "ch=" + c.ra + "&jk=" + c.Oa + "&n=" + c.Da
						})
					},
					m)
				},
				pe: function() {
					var b = this,
					d = b.u,
					f = b.type,
					g = b.$a,
					b = this;
					this.h ? this.qe ? d.parentNode.removeChild(d) : (setTimeout(function() {
						d.style.display = "block";
						if (2 === f || 3 === f) {
							var a = g.getAttribute("_src");
							a && (g.setAttribute("src", a), g.removeAttribute("_src"), b.lb())
						}
					},
					this.B), this.C && setTimeout(function() {
						d.style.display = "none"
					},
					this.B + this.C)) : this.lb();
					this.bc && (2 === this.type || 3 === this.type) && c.bind(this.bc, "click", a.k(this.cc, this));
					c.bind(window, "scroll", a.k(this.Na, this));
					c.bind(window, "resize", a.k(this.Na, this))
				},
				Zd: function() {
					for (var a = 1; 2 >= a; a++)(function(a) {
						var b = "bkimg_" + + new Date + Math.floor(1E5 * Math.random()),
						c = window[b] = new Image;
						c.onload = c.onerror = function() {
							c.onload = c.onerror = p;
							c = window[b] = p
						};
						c.src = "http://cpro.baidustatic.com/cpro/ui/noexpire/img/toggle_btn_bk" + a + ".png"
					})(a)
				},
				cc: function() {
					this.Sa ? this.Ob() : this.show()
				},
				Qa: function(a) {
					if (!this.pa) {
						this.pa = m;
						var b = this.u,
						c = this.ca,
						d = this.$a,
						f = this.h,
						g = b.offsetHeight,
						h = Math.round(this.ub / g),
						j = 0,
						v = this;
						a && (b.style.width = "100%");
						var r = + new Date,
						u = setInterval(function() {
							var b = j = Math.round(( + new Date - r) / h),
							k = b;
							a && (k = g - b);
							c.style[f] = - k + "px";
							d.style[f] = - k + "px";
							b >= g && (v.pa = s, (v.Sa = a) && "top" === f || ! a && "bottom" === f ? v.f.d && 7 > v.f.d ? v.mb.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://cpro.baidustatic.com/cpro/ui/noexpire/img/toggle_btn_bk2.png');": v.mb.style.backgroundImage = "url(http://cpro.baidustatic.com/cpro/ui/noexpire/img/toggle_btn_bk2.png)": v.f.d && 7 > v.f.d ? v.mb.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://cpro.baidustatic.com/cpro/ui/noexpire/img/toggle_btn_bk1.png');": v.mb.style.backgroundImage = "url(http://cpro.baidustatic.com/cpro/ui/noexpire/img/toggle_btn_bk1.png)", k = g, a && (k = 0), c.style[f] = - k + "px", d.style[f] = - k + "px", clearInterval(u))
						},
						h)
					}
				},
				show: function() { (this.A || this.l) && this.ee(this.S);
					this.Qa(m)
				},
				Ob: function() { (this.A || this.l) && this.kb();
					this.Qa(s)
				},
				Ha: function(a) {
					var b;
					a ? (b = document.getElementById(a), a += "placeholder") : (b = this.u || document.getElementById(this.v), a = this.v + "placeholder");
					var c = document.createElement("div");
					c.id = a;
					c.align && (c.align = b.getAttribute("align"));
					c.style.width = "" + parseInt(b.getAttribute("width"), 10) + "px";
					c.style.height = "" + parseInt(b.getAttribute("height"), 10) + "px";
					c.style.margin = "0";
					c.style.padding = "0";
					c.style.background = "none";
					c.style.border = "none";
					1 === this.type && (c.style.display = "inline-block");
					b.parentNode.insertBefore(c, b);
					return m
				},
				Xb: function(a) {
					a = document.getElementById(a ? a + "placeholder": this.v + "placeholder");
					a.parentNode.removeChild(a);
					return m
				},
				fc: function(a) {
					var b = this.ec;
					return this.q(a ? document.getElementById(a) : this.u || document.getElementById(this.v)).top < b ? b: s
				},
				oe: function(a) {
					var b = this.ec;
					return this.q(a ? document.getElementById(a) : this.u || document.getElementById(this.v)).top < b ? b: s
				}
			})
		});
		return {
			render: function(a, c) {
				switch (parseInt(a._html.xuanting, 10)) {
				case 1:
					a.displayType = "inlay-float";
					break;
				case 2:
					a.displayType = "float-top";
					break;
				case 3:
					a.displayType = "float-bottom";
					break;
				default:
					a.displayType = "inlay-float"
				}
				var d = j.gb(a);
				d.backgroundColor = a._html.rss1 || "#666";
				d.backgroundOpacity = parseInt(a._html.opacity || 60, 10);
				var f = j.Nb(d.slotId, c),
				g = {
					K: d.displayType,
					z: d.styleType,
					ba: d.stuffType
				};
				if (!j.vb(g)) return s;
				(new b({
					Ta: f,
					e: d.slotId,
					type: d.xuantingType,
					src: "",
					width: d.slotWidth,
					height: d.slotHeight,
					backgroundColor: d.backgroundColor,
					Ga: d.backgroundOpacity,
					z: d.styleType,
					ac: d.tn,
					ra: d.channel,
					Da: d.unionAccount,
					Va: d.adIndex,
					Oa: d.pvId,
					B: d.delayIn,
					C: d.delayOut,
					A: d.sessionSync,
					l: d.closeFor,
					M: d.paramString,
					V: d.serviceUrl,
					ja: d.isExp
				})).Yb();
				j.jb(g)
			}
		}
	});
	Y && Y("union/floatad", "union/common/oo,union/common/cookie,union/common/dom,union/common/bom,union/common/logic,union/business/businessLogic,union/preview,api".split(","), function(d, g, c, h, f, j, b, a) {
		function e(c, d, e) {
			if (!c || ! c._html) return p;
			var f = j.ud(d),
			g = c._html,
			i = "",
			h = "http://pos.baidu.com/acom?",
			k = c.id.split("_")[0],
			B = parseInt(g.conW || 0, 10) || parseInt(g.rsi0, 10) || parseInt(c._w, 10) || parseInt(c.sw, 10),
			C = parseInt(g.conH || 0, 10) || parseInt(g.rsi1, 10) || parseInt(c._h, 10) || parseInt(c.sh, 10),
			i = g.tn || "",
			w = i.toLowerCase(),
			D = g.n || "",
			H = parseInt(g.ch || 0, 10),
			z = parseInt(g.dai || 0, 10),
			F = s,
			E = 1E6 * Math.random();
			1E4 >= E ? g.rs = "60010": 2E4 >= E && (g.rs = "60011", F = m);
			g.dtm = "BAIDU_DUP2_SETJSONADSLOT";
			g.dc = "2";
			g.di = k;
			g.distp = d;
			g.ti = a.getDocumentTitle();
			(c = a.getInfo("timestampWathcer" + c.id)) && (g.tt = c.t1 + "." + (c.t2 - c.t1) + "." + (c.t3 - c.t1) + "." + ( + new Date - c.t1));
			0 <= i.indexOf("float") && (g.tn = "template_float_all_normal");
			var c = [],
			A;
			for (A in g) A && g.hasOwnProperty(A) && c.push("" + A + "=" + encodeURIComponent(g[A].toString()));
			i = c.join("&");
			if ((A = b.Jb(g, f)) && A.serviceUrl !== l && A.paramString !== l) h = A.serviceUrl,
			i = A.paramString;
			return {
				e: k,
				Kc: B,
				Jc: C,
				K: f,
				Eb: parseInt(g.rsi6, 10),
				Db: parseInt(g.rsi7, 10),
				yb: parseInt(g.ccw, 10),
				xb: parseInt(g.ct, 10),
				Ia: parseInt(g.pt, 10),
				va: e,
				L: parseInt(g.fa, 10),
				od: parseInt(g.flw, 10),
				Ve: g.tn,
				hb: g.qn,
				z: w,
				V: h,
				M: i,
				b: "cproIframe" + (d || parseInt(100 + 100 * Math.random(), 10)),
				Da: D,
				ra: H,
				Va: z,
				ba: "unknown",
				ja: F
			}
		}
		function k(a) {
			var b = a.e;
			X(["viewWatch"], function(c) {
				c.register({
					id: b,
					wrapperId: a.b,
					logType: "block",
					extra: "ch=" + a.ra + "&jk=" + a.hb + "&n=" + a.Da
				})
			},
			m)
		}
		var i;
		d(function(a) {
			i = a.qb({
				nd: {
					1: {
						ic: 1,
						hc: 150
					},
					2: {
						ic: 0,
						hc: 40
					},
					3: {
						ic: 0,
						hc: 0
					}
				},
				constructor: function(b) {
					this.b = b.b;
					this.V = b.V;
					this.M = b.M;
					this.T = this.b + "holder";
					this.L = b.L;
					this.va = b.va;
					this.Ia = b.Ia;
					this.sc = b.od;
					this.Y = b.Kc;
					this.na = b.Jc;
					this.sb = b.Kc;
					this.rb = b.Jc;
					this.hb = b.hb;
					this.Eb = b.Eb;
					this.Db = b.Db;
					this.yb = b.yb;
					this.na += 20;
					this.nc = 1 === this.L ? 0: 5;
					this.Y += 10;
					this.na += 10;
					this.ja = b.ja;
					this.Nc = this.nd;
					this.xb = b.xb;
					this.e = b.e;
					this.J = h.J();
					c.bind(window, "resize", a.k(this.W, this));
					c.bind(window, "scroll", a.k(this.W, this))
				},
				Yb: function() {
					var b = document.createElement("div");
					b.style.cssText = ["box-sizing: content-box;maring:0;padding:0;display:block;visibility:visible;border:none;background:none;float:none;overflow:hidden;position:absolute;", "z-index:" + (1 === this.L ? 2147483646: 2147483647) + ";", "width:" + this.Y + "px;", "height:" + (this.na + this.nc) + "px"].join("");
					b.id = this.T;
					var c = "",
					d = 0,
					e = "",
					g = document.createElement("div");
					g.id = this.b + "CloseBtnWrap";
					var i = document.createElement("div");
					i.id = this.b + "CloseBtn";
					1 === this.L ? (g.style.cssText = ["box-sizing: content-box;position:absolute;top:275px;left:0;cursor:pointer;", "width:" + this.Y + "px;", "height:28px;z-index:100;opacity:0;filter:alpha(opacity=0);background-color:#999999;"].join(""), i.style.cssText = ["box-sizing: content-box;position:absolute;", "width:" + this.Y + "px;", "height:20px;top:280px;left:0;cursor:pointer;background-color:#999999;color:#fff;font-size:12px;font-family: \u5fae\u8f6f\u96c5\u9ed1;text-align:center;line-height:20px;"].join(""), i.innerHTML = "\u5173\u95ed", d = 22) : (g.style.cssText = ["box-sizing: content-box;position:absolute;top:0px;", "left:" + (this.Y - 61) + "px;", "cursor:pointer;width:61px;height:20px;z-index:100;opacity:0;filter:alpha(opacity=0);background-color:#999999;margin:0;paddong:0;"].join(""), i.style.cssText = ["box-sizing: content-box;position:absolute;width:61px;height:20px;top:0;", "left:" + (this.Y - 61) + "px;", "margin:0;padding:0;margin-bottom:5px;cursor:pointer;overflow:hidden;"].join(""), i.innerHTML = '<div style="box-sizing: content-box;width:40px;height:20px;background-color:#999999;color:#fff;float:left;margin-right:1px;font-size:12px;font-family:\u5fae\u8f6f\u96c5\u9ed1;text-align: center;line-height:20px;">\u5173\u95ed</div><a style="maring:0;padding:0;display:inline-block;border:none;overflow:hidden;height:20px;line-height:20px;cursor:pointer;width:20px;background:url(\'http://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.1/xuanfu_close.png\') no-repeat 0 0;margin-bottom:3px;float:left" ></a>', e = "position:absolute;left:0;top:25px;");
					c = "";
					this.ja === m && (c = ['<div id="tip" style="box-sizing: content-box; position: absolute; ', "bottom: " + d + "px; left: 0px; ", 'width: 28px; height: 14px; z-index: 100; overflow:hidden; margin: 0px; _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,src="http://cpro.baidustatic.com/cpro/ui/noexpire/img/0.0.1/tip1.png",sizingMethod="crop"); _background: 0;"><img src="http://cpro.baidustatic.com/cpro/ui/noexpire/img/0.0.1/tip1.png"/></div>'].join(""));
					b.appendChild(g);
					b.appendChild(i);
					d = document.createElement("div");
					e = ["box-sizing: content-box;", "width:" + this.sb + "px;", "height:" + this.rb + "px;", "overflow:hidden;" + e];
					e.push("padding:4px;");
					e.push("border:#acacac 1px solid;");
					d.style.cssText = e.join("");
					c = ['<div style="display:none">-</div><iframe id="{iframeId}" src="{cproServiceUrl}{paramString}" width="{iframeWidth}" height="{iframeHeight}" align="center,center" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>', c].join("");
					this.M += "&adclass=1&conW=" + this.sb + "&conH=" + this.rb;
					d.innerHTML = f.ka(c, {
						iframeId: this.b,
						cproServiceUrl: this.V,
						paramString: this.M,
						iframeWidth: this.sb,
						iframeHeight: this.rb
					});
					b.appendChild(d);
					this.Aa(b);
					for (var c = document.body.children, e = c.length, d = 10 > c.length ? c.length: 10, i = document.body.lastChild, h = 0; h < d; h++) {
						var j = c[e - h - 1].getAttribute("data-baidu-dan-id");
						if (j || "" === j) {
							i = c[e - h - 1];
							break
						}
					}
					i.parentNode.insertBefore(b, i);
					g.onclick = a.k(this.Zc, this);
					g.onmouseover = a.k(this.ad, this);
					g.onmouseout = a.k(this.$c, this)
				},
				xd: function() {
					var a = 2;
					return a = 1 === this.sc ? this.J ? 1 === this.Ia ? 4: 3: 1 === this.Ia ? 2: 1: 1 === this.Ia ? 6: 5
				},
				wd: function() {
					var a = this.Db;
					return a = 0 > a || 9999 < a ? 0: Math.floor(a)
				},
				yd: function() {
					var a = this.Eb;
					return a = 0 > a || 9999 < a ? this.Nc[this.L].hc: Math.floor(a)
				},
				td: function() {
					var a = this.yb;
					4095 < a && (a = 4095);
					return a = Math.floor(a)
				},
				W: function() {
					this.Pa && clearTimeout(this.Pa);
					this.Pa = setTimeout(a.k(this.je, this), 50)
				},
				je: function() {
					var a = document.getElementById(this.T);
					a && this.Aa(a)
				},
				Aa: function(a) {
					a.style.position = this.J ? (1 === this.L || 2 === this.L) && 2 === this.sc ? "absolute": "fixed": "absolute";
					var b = h.H(window),
					d = h.Ka(window),
					e = h.o(window),
					f = h.j(window),
					g = this.Y,
					i = this.na + this.nc,
					j = this.Nc[this.L].ic,
					o = c.s(document.body, "position").toString(),
					k = c.s(document.body, "width").toString().replace("px", ""),
					D = this.xd(),
					H = "right",
					z,
					F,
					E = this.wd(),
					A = this.yd();
					z = this.td();
					var K = c.Z(document.body).left;
					z = Math.floor((e - z) / 2) - g - 10;
					z = 0 <= z && 0 == D % 2 ? z: 7;
					switch (D) {
					case 1:
					case 2:
						"relative" === o && "auto" != k && e > k ? (g = e - z - g - K, d = d + z - K) : (g = d + e - z - g, d += z);
						H = "left";
						F = Math.max(1 === j ? f >= i + A ? b + A: b + f - i: f >= i + A ? b + f - A - i: b, E);
						break;
					case 3:
					case 4:
						d = g = z;
						1 === j ? F = Math.max(f >= i + A ? A: f - i, E - b) : (F = Math.min(b + f - E - i, A), F = Math.min(F, f - i));
						break;
					case 5:
					case 6:
						"relative" === o && "auto" != k && e > k ? (g = e - (e - k) / 2 - z - g, d = d + z - (e - k) / 2) : (g = d + e - z - g, d += z);
						H = "left";
						F = Math.max(1 === j ? A: f >= i + A ? f - A - i: 0, E);
						break;
					default:
						d = g = 10
					}
					if (1 === D % 4 || 2 === D % 4) j = 1;
					b = j ? "top": "bottom";
					1 === (this.va & 1) ? (a = a.style, a.left = d + "px", a[b] = F + "px", a.visibility = "visible") : 2 === (this.va & 2) && (a = a.style, a[H] = g + "px", a[b] = F + "px", a.visibility = "visible")
				},
				Zc: function() {
					var a = document.getElementById(this.T);
					if (2 === this.xb) {
						var b = "bd_close_" + this.e,
						c = g.ha(b, window),
						c = c ? c | this.va: this.va;
						g.Ba(b, c, {
							path: "/"
						})
					}
					a.parentNode && a.parentNode.removeChild ? a.parentNode.removeChild(a) : document.body.removeChild(a);
					a = {
						jk: this.hb || "",
						dt: (new Date).getTime(),
						rnd: Math.floor(2147483648 * Math.random())
					};
					try {
						h.he(f.ka("http://eclick.baidu.com/fcb.jpg?jk={jk}&dt={dt}&rnd={rnd}", a), window)
					} catch(d) {}
				},
				ad: function() {
					var a = document.getElementById(this.b + "CloseBtn");
					a && (1 === this.L ? a.style.backgroundColor = "#0066cc": (a.getElementsByTagName("div")[0].style.backgroundColor = "#0066cc", a.getElementsByTagName("a")[0].style.backgroundImage = "url(http://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.0/xuanfu_mouseover_close.png)"))
				},
				$c: function() {
					var a = document.getElementById(this.b + "CloseBtn");
					a && (1 === this.L ? a.style.backgroundColor = "#999999": (a.getElementsByTagName("div")[0].style.backgroundColor = "#999999", a.getElementsByTagName("a")[0].style.backgroundImage = "url(http://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.1/xuanfu_close.png)"))
				}
			})
		});
		return {
			render: function(a) {
				var b;
				if (h.G()) b = s;
				else if (b = parseInt(a._html.ww || 0, 10), 4095 < b && (b = 4095), b >= screen.width) b = s;
				else {
					var c = b = s;
					b = /iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());
					c = /ipad|android 3|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk|SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-I9205|GT-P5200|GT-P5210|SM-T311|SM-T310|SM-T210|SM-T211|SM-P900|IdeaTab|S2110|S6000|K3011|A3000|A1000|A2107|A2109|A1107/i.test(navigator.userAgent.toLowerCase());
					b = 1024 > screen.width && b && ! c ? s: m
				}
				if (b) {
					if (a && a._html) {
						var d = a._html;
						b = parseInt(d.fa, 10);
						var c = parseInt(d.ls, 10),
						f = a.id.split("_")[0],
						v = 0;
						2 === parseInt(d.ct, 10) && (v = parseInt(g.ha("bd_close_" + f), 10));
						d = [];
						1 === b || 2 === b ? (2 === (c & 2) && 2 !== (v & 2) && d.push(e(a, "2002", 2)), 1 === (c & 1) && 1 !== (v & 1) && d.push(e(a, "2001", 1))) : (c = 3 !== c ? c: 2, v != c && d.push(e(a, 1 === c ? "2003": "2004", c)));
						a = d
					} else a = l;
					b = a.length;
					for (c = 0; c < b; c++) if (v = a[c]) d = {
						K: v.K,
						z: v.z,
						ba: v.ba,
						T: v.b
					},
					j.vb(d) && ((new i(v)).Yb(), j.jb(d), k(v))
				}
			}
		}
	});
	Y && Y("union/mobile", "union/business/businessLogic,union/common/logic,union/common/bom,union/common/dom,union/common/cookie,union/DynamicFloatDecorator,union/preview,api".split(","), function(d, g, c, h, f, j, b, a) {
		function e(a, b, d, e, g) {
			function j() {
				"top" == d ? r.style.top = B + "px": "bottom" == d && (r.style.bottom = B + "px")
			}
			function k(a, b) {
				var c = a,
				d = setInterval(function() {
					c--;
					0 >= c && (clearInterval(d), b && b())
				},
				1E3)
			}
			var e = e || 5,
			g = g || 0.5,
			r = document.getElementById(a + "Wrap");
			r.style.display = "block";
			var u = document.getElementById(a),
			a = document.getElementById("xuantingCloseBtn_" + b),
			B = - 1 * (parseInt(r.style.height, 10) + parseInt(a.style.height, 10)),
			C = s,
			w = s,
			D = s;
			j();
			r.style.cssText += "-webkit-transition: all .3s linear;-moz-transition: all .3s linear;-ms-transition: all .3s linear;-o-transition: all .3s linear;transition: all .3s linear;";
			this.Tb = c.H();
			this.Ra = 0;
			var H, z, F = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * g,
			E = this;
			h.bind(a, "click", function() {
				j();
				D = m;
				f.Ba("bd_close_" + b, 1, {
					path: ""
				})
			});
			h.bind(window, "scroll", function() {
				H = c.H();
				z = H > E.Tb ? "down": "top";
				E.Ra += H - E.Tb;
				E.Tb = H;
				"top" === z && ! D && Math.abs(E.Ra) >= F && ! w ? ("top" == d ? r.style.top = 0: r.style.bottom = 0, C || (u.src = u.getAttribute("_src"), C = m), w = m, k(e, function() {
					j();
					w = s;
					E.Ra = 0
				})) : "down" === z && (E.Ra = 0)
			})
		}
		var k = window;
		return {
			Rb: function(b) {
				this.e = b.id.split("_")[0];
				this.La = 1;
				var c = b._html;
				this.b = "cproIframe" + (c.dai || 0);
				"u0" === this.e && (this.Ma = m);
				this.scale = c.scale || "20.3";
				this.g = parseInt(c.xuanting || 0, 10);
				"20.5" === this.scale && (this.g = 0);
				var d = this.scale.split("."),
				e = a.getInfo(this.e + "_setCoaHeight"),
				f = a.getInfo(this.e + "_setCoaWidth");
				f && e ? (this.F = c.rsi0, this.t = c.rsi1) : ! f && e ? (this.F = this.sd(c.rsi0), this.t = c.rsi1) : (this.F = ! e && f ? c.rsi0: 2 > this.g && this.Ec ? this.Ec: this.Ad(c.rsi0), this.t = Math.ceil(this.F / d[0] * d[1]));
				this.Fd(c.n);
				this.Bb = "BaiduCproExpansion" + this.b;
				this.ld = parseInt(b._html.expansion || 0, 10)
			},
			gb: function(c) {
				var d = c._html || {},
				e = c.displayType,
				f = d.tn || "",
				g = f.toLowerCase(),
				h = d.ch || 0,
				j = parseInt(d.stid || 0, 10),
				k = c.qn || "",
				u = d.n || "",
				B = d.dai || 0;
				d.hasOwnProperty("stid") && (d.stid = j);
				(j = d.skin) || (j = "mobile_skin_white_red");
				var C = parseInt(d.at || 99, 10);
				4 === (C & 4) && (d.at = C ^ 4);
				this.g && "mobile_skin_white_red" === j && (j = "mobile_skin_black_white");
				d.skin = j;
				d.rsi0 = this.F;
				d.rsi1 = this.t;
				(c = a.getInfo("timestampWathcer" + c.id)) && (d.tt = c.t1 + "." + (c.t2 - c.t1) + "." + (c.t3 - c.t1) + "." + ( + new Date - c.t1));
				this.g && (this.Vb(), c = 12 * this.F / 640, d.conbw = 0, d.conbl = c);
				if (g && ( - 1 < g.indexOf("tlink") || - 1 < g.indexOf("linkunit_1"))) this.b += (new Date).getTime().toString();
				if ("07095078_1_cpr" === u || "07095078_cpr" === u || "71049059_cpr" === u || "68056018_cpr" === u) d.titSU = "0";
				d.dtm = "BAIDU_DUP2_SETJSONADSLOT";
				d.dc = "2";
				d.di = this.e;
				d.ti = a.getDocumentTitle();
				d.wt = 1;
				switch (this.g) {
				case 0:
					d.distp = "1001";
					break;
				case 2:
					d.distp = "2005";
					break;
				case 3:
					d.distp = "2006";
					break;
				case 4:
					d.distp = "2007"
				}
				if (!d.adn || 0 === parseInt(d.adn || 0, 10)) d.adn = 1;
				this.Sb() && this.Bb && (d.expToken = this.Bb);
				d.conW = this.F;
				d.conH = this.t;
				var c = [],
				w;
				for (w in d) w && d.hasOwnProperty(w) && c.push("" + w + "=" + encodeURIComponent(d[w].toString()));
				w = "http://pos.baidu.com/acom?";
				c = c.join("&");
				if ((C = b.Jb(d, e)) && C.serviceUrl !== l && C.paramString !== l) w = C.serviceUrl,
				c = C.paramString;
				return {
					e: this.e,
					F: this.F,
					t: this.t,
					K: e,
					z: g,
					Da: u,
					Va: B,
					ra: h,
					Oa: k,
					ba: "unknown",
					V: w,
					M: c,
					B: parseInt(d.delayIn || 0, 10),
					C: parseInt(d.delayOut || 0, 10),
					A: d.sessionSync !== s && "false" !== d.sessionSync,
					l: d.closeFor,
					g: this.g,
					ac: f,
					Te: j,
					b: this.b
				}
			},
			Fd: function(a) {
				if ("19076084_1_cpr" === a) {
					for (var b = /android/gi.test(navigator.userAgent), a = document.getElementsByTagName("meta"), c = 0; c < a.length; c++) if ("viewport" == a[c].name) {
						var d = a[c].content;
						if ( - 1 < d.indexOf("initial-scale")) {
							this.La = d.match(/initial-scale=(\d(.\d)*)/)[1];
							break
						}
					}
					this.F /= this.La;
					this.t /= this.La;
					1 !== this.La && h.bind(k, "onorientationchange" in k ? "orientationchange": "resize", function() {
						setTimeout(function() {
							h.c(this.b + "Wrap").style.width = k.innerWidth + "px"
						},
						b ? 1E3: 0)
					})
				}
			},
			Ad: function(a) {
				var b = k.innerWidth,
				d = k.innerHeight,
				e = Math.min(b, d);
				c.G(k) && b > d && (e = k.innerWidth);
				a = this.Ma ? a: Math.max(320, e);
				isNaN(a) && (a = Math.min(c.o(), c.j()));
				return a
			},
			sd: function(a) {
				a = this.Ma ? a: Math.max(320, k.innerWidth);
				isNaN && isNaN(a) && (a = c.o());
				return a
			},
			Wd: function(a) {
				var b = a.rss1 || "#000",
				d = "",
				d = "opacity:" + parseFloat(a.opacity || 0.9) + ";",
				a = "absolute";
				c.J() && (a = "fixed");
				this.g && (d += "position:" + a + ";z-index:2147483647;");
				2 === this.g ? (this.Vb(), d += "top:0;background-color:" + b + ";") : 3 === this.g && ("fixed" === a ? d += "bottom:0;background-color:" + b + ";": (a = c.H(k) + c.j(k) - this.t, d += "top:" + a + "px;background-color:" + b + ";"));
				return d
			},
			Ud: function() {
				if (!this.g) return "";
				var a = this.Vb();
				return g.ka("<div id=\"xuantingCloseBtn_{slotId}\" style=\"position:absolute;right:0;top:{top}px;width:{closeBtnWidth}px;height:{closeBtnHeight}px;overflow:hidden;display:block;background:url('{closeBtnImgUrl}') no-repeat 0 0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=none, src='{closeBtnImgUrl}');_background:none;cursor:pointer;background-position:center;background-size:100% 100%;z-index:2147483647;\">&nbsp;</div>", {
					slotId: this.e,
					right: "" + a.dd,
					top: "20.2" === this.scale ? this.t: "-" + a.mc,
					closeBtnWidth: "" + a.ed,
					closeBtnHeight: a.mc,
					closeBtnImgUrl: "http://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.0/xuantingClose" + a.cd + ".png"
				})
			},
			Vd: function(a) {
				var b = this.Ud(a),
				c = this.Wd(a),
				d = "100%",
				a = a.n;
				1 != this.La && "19076084_1_cpr" === a && (d = k.innerWidth + "px");
				return ['<div style="display:none">-</div>', '<div id="{iframeId}Wrap" style="text-align:center;display:' + (0 === this.g || 1 === this.g ? "block": "none") + ";font-size:0;width:" + d + ";height:" + this.t + "px;" + c + '">', '<div style="width:' + this.F + "px;height:" + this.t + 'px;position:relative;margin:0 auto;">', b, '<iframe id="{iframeId}" ' + (0 === this.g || 1 === this.g ? "src": "_src") + '="{serviceUrl}{paramString}" ', 'width="{iframeWidth}" height="{iframeHeight}" align="center,center" marginwidth="0"  marginheight="0" scrolling="no" frameborder="0" allowtransparency="true" style="margin-left:{iframMarginLeft}px" ></iframe><iframe src="http://cpro.baidustatic.com/cpro/ui/html/appDetect.html" width="0" height="0"align="center,center" marginwidth="0"  marginheight="0" scrolling="no" frameborder="0" allowtransparency="true" style="margin-left:{iframMarginLeft}px" ></iframe></div></div>'].join("")
			},
			me: function() {
				var a = document.createElement("div"),
				b = Math.min(c.o(), c.j()),
				d = Math.max(c.o(), c.j()),
				e = a.style;
				e.position = "fixed";
				e.left = "0";
				e.top = d + "px";
				e.zIndex = 2147483647;
				e.background = "#ffffff";
				e.width = "100%";
				e.We = e.WebkitTransition = e.MozTransition = e.ze = "top 1s ease-in-out";
				document.body.appendChild(a);
				var f = this.Bb,
				j = this.b;
				h.bind(k, "message", function(d) {
					h.c(j);
					if ("object" === typeof d && d.data && (d = d.data, ! (0 > d.indexOf(f)))) {
						d = d.slice(f.length);
						a.innerHTML = g.ka('<iframe id="{lpIframeId}" src="{clickUrl}" width="{iframeWidth}" height="{iframeHeight}" align="center,center" marginwidth="0"  marginheight="0" frameborder="0"></iframe><div id="{lpIframeId}_closeBtn" style="position:absolute;right:0;top:0;width:{closeBtnSize}px;height:{closeBtnSize}px;overflow:hidden;display:block;background:url(\'http://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.0/xuantingClose.png\') no-repeat 0 0; _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=none, src=\'http://cpro.baidustatic.com/cpro/ui/noexpire/img/2.0.0/xuantingClose.png\');_background:none;cursor:pointer;background-position:center;background-size:100%,100%;">&nbsp;</div>', {
							lpIframeId: j + "ExpansionLP",
							clickUrl: d,
							iframeWidth: c.o(),
							iframeHeight: c.j(),
							closeBtnSize: 80 * b / 640
						});
						a.style.top = "0";
						var e = h.c(j + "ExpansionLP"),
						n = function() {
							var a = c.o(),
							b = c.j();
							e.style.width = a + "px";
							e.style.height = b + "px";
							e.setAttribute("width", a);
							e.setAttribute("height", b)
						};
						h.bind(k, "resize", n);
						var t = h.c(j + "ExpansionLP_closeBtn");
						h.bind(t, "click", function() {
							a.style.top = Math.max(c.o(), c.j()) + "px";
							a.innerHTML = "";
							h.Qc(t, "click", arguments.callee);
							h.Qc(k, "resize", n)
						})
					}
				})
			},
			Vb: function() {
				var a = 40,
				b = "",
				b = 2 === this.g ? 4: 3,
				a = 0.125 * Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
				return {
					ed: a,
					mc: 0.4 * a,
					dd: 16 * (a / 50),
					cd: b
				}
			},
			Sb: function() {
				var a = !! /(iPhone|iPad|iPod|iOS)/i.test(k.navigator.userAgent),
				b = "postMessage" in k,
				c = ! a && 1 === this.ld && b;
				this.Sb = function() {
					return c
				};
				return c
			},
			render: function(a, b) {
				a.displayType = "inlay-mobile";
				var c = "true" === a._html.cpro_enable_hidden_float ? m: s,
				t = parseInt(a._html.cpro_close_time, 10) || 5,
				t = 3 <= t ? t: 3,
				q = parseInt(a._html.cpro_show_dist, 10) || 5,
				q = 5 <= q ? q: 5;
				if (c) {
					if (this.Wc) return s;
					this.Wc = m
				}
				var y = d.Nb(a.id.split("_")[0], b);
				"true" === a._html.cpro_ftpc && y && y.parentElement.offsetWidth && (this.Ec = y.parentElement.offsetWidth || 0);
				var v = parseInt(a._isMlt || 0, 10);
				this.Rb(a);
				var r = this.gb(a),
				u = {
					K: r.displayType,
					z: r.styleType,
					ba: r.stuffType,
					T: r.b
				},
				B = f.ha("bd_close_" + this.e, k);
				if (! (0 != r.l && B)) {
					var B = this.Vd(a._html, r),
					C = {
						iframeId: r.b,
						serviceUrl: r.V,
						paramString: r.M,
						iframeWidth: r.F,
						iframeHeight: r.t,
						iframeMarginLeft: ""
					};
					2 === this.g || 3 === this.g && document.body && document.body.appendChild ? (y = document.createElement("div"), y.innerHTML = g.ka(B, C), document.body.appendChild(y)) : y ? y.innerHTML = g.ka(B, C) : document.write(g.ka(B, C));
					this.Sb() && this.me();
					if (this.g) {
						var w;
						2 === this.g ? w = "top": 3 === this.g && (w = "bottom");
						c && "u0" != a.id ? e(r.b, r.e, w, t, (1 / q).toFixed(2)) : j.se({
							r: r.b + "Wrap",
							da: r.b,
							i: this.g,
							Ua: this.F,
							ma: this.t,
							xe: "xuantingCloseBtn_" + r.e,
							Je: r.Oa,
							e: r.e,
							l: r.l,
							aa: m,
							h: w,
							B: r.B,
							C: r.C,
							A: r.A,
							ve: "xuanting4CloseBtn_" + r.e
						});
						var D = document.createElement("div");
						D.id = this.b + "Wrap_placeholder";
						D.style.width = "100%";
						D.style.height = this.t + "px";
						D.style.margin = "0";
						D.style.padding = "0";
						D.style.background = "none";
						D.style.border = "none";
						2 === this.g ? document.body.insertBefore(D, document.body.firstChild) : 3 === this.g && h.bind(k, "load", function() {
							document.body.appendChild(D)
						})
					}
					4 === v && d.jb(u)
				}
			}
		}
	});
})();

