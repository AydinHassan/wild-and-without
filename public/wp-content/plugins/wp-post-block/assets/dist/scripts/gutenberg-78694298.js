!(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var o in e)
                    n.d(
                        r,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return r;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                        return e.default;
                    }
                    : function () {
                        return e;
                    };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 164));
})([
    function (e, t) {
        e.exports = React;
    },
    function (e, t) {
        e.exports = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        };
    },
    function (e, t) {
        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        e.exports = function (e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e;
        };
    },
    function (e, t, n) {
        var r = n(59),
            o = n(6);
        e.exports = function (e, t) {
            return !t || ("object" !== r(t) && "function" != typeof t) ? o(e) : t;
        };
    },
    function (e, t) {
        function n(t) {
            return (
                (e.exports = n = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    }),
                    n(t)
            );
        }
        e.exports = n;
    },
    function (e, t, n) {
        var r = n(60);
        e.exports = function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && r(e, t);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        };
    },
    function (e, t) {
        function n() {
            return (
                (e.exports = n =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }),
                    n.apply(this, arguments)
            );
        }
        e.exports = n;
    },
    function (e, t, n) {
        var r = n(35),
            o = "object" == typeof self && self && self.Object === Object && self,
            a = r || o || Function("return this")();
        e.exports = a;
    },
    function (e, t) {
        var n = Array.isArray;
        e.exports = n;
    },
    function (e, t, n) {
        var r = n(16);
        e.exports = function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                (o = o.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                )),
                    o.forEach(function (t) {
                        r(e, t, n[t]);
                    });
            }
            return e;
        };
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return P;
        });
        var r = n(7),
            o = n.n(r),
            a = n(1),
            i = n.n(a),
            s = n(2),
            c = n.n(s),
            l = n(3),
            u = n.n(l),
            p = n(4),
            f = n.n(p),
            h = n(6),
            d = n.n(h),
            v = n(5),
            m = n.n(v),
            g = n(0),
            b = n.n(g),
            y = (wp.element.createElement, wp.element.Component),
            w = wp.data,
            k = w.withSelect,
            x = w.select,
            _ = wp.compose,
            E = _.compose,
            C = _.createHigherOrderComponent;
        function j(e) {
            return x("core/block-editor").getBlocks(e);
        }
        var O = k(function (e, t) {
            return { childBlocks: j(t.clientId) };
        });
        function P(e) {
            return E(
                O,
                (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return C(function (t) {
                        return (function (n) {
                            function r() {
                                var t;
                                return i()(this, r), ((t = u()(this, f()(r).apply(this, arguments))).state = e), (t.state.childBlocks = j(t.props.clientId)), (t.setState = t.setState.bind(d()(t))), t;
                            }
                            return (
                                m()(r, n),
                                    c()(r, [
                                        {
                                            key: "shouldComponentUpdate",
                                            value: function (e) {
                                                var t = function (e) {
                                                        return e.clientId;
                                                    },
                                                    n = this.state.childBlocks.map(t),
                                                    r = e.childBlocks.map(t);
                                                return JSON.stringify(n) !== JSON.stringify(r) ? (this.setState({ childBlocks: e.childBlocks }), !0) : JSON.stringify(e.attributes) !== JSON.stringify(this.props.attributes);
                                            },
                                        },
                                        {
                                            key: "render",
                                            value: function () {
                                                return b.a.createElement(t, o()({}, this.props, this.state));
                                            },
                                        },
                                    ]),
                                    r
                            );
                        })(y);
                    }, "withChildren");
                })()
            )(e);
        }
    },
    function (e, t, n) {
        var r = n(80),
            o = n(83);
        e.exports = function (e, t) {
            var n = o(e, t);
            return r(n) ? n : void 0;
        };
    },
    function (e, t) {
        e.exports = function (e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t);
        };
    },
    function (e, t, n) {
        var r = n(18),
            o = n(65),
            a = n(66),
            i = "[object Null]",
            s = "[object Undefined]",
            c = r ? r.toStringTag : void 0;
        e.exports = function (e) {
            return null == e ? (void 0 === e ? s : i) : c && c in Object(e) ? o(e) : a(e);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return null != e && "object" == typeof e;
        };
    },
    function (e, t) {
        e.exports = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        };
    },
    function (e, t, n) {
        var r = n(14),
            o = n(15),
            a = "[object Symbol]";
        e.exports = function (e) {
            return "symbol" == typeof e || (o(e) && r(e) == a);
        };
    },
    function (e, t, n) {
        var r = n(8).Symbol;
        e.exports = r;
    },
    function (e, t, n) {
        var r = n(70),
            o = n(71),
            a = n(72),
            i = n(73),
            s = n(74);
        function c(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r), (c.prototype.delete = o), (c.prototype.get = a), (c.prototype.has = i), (c.prototype.set = s), (e.exports = c);
    },
    function (e, t, n) {
        var r = n(38);
        e.exports = function (e, t) {
            for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
            return -1;
        };
    },
    function (e, t, n) {
        var r = n(12)(Object, "create");
        e.exports = r;
    },
    function (e, t, n) {
        var r = n(92);
        e.exports = function (e, t) {
            var n = e.__data__;
            return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
        };
    },
    function (e, t, n) {
        var r = n(17),
            o = 1 / 0;
        e.exports = function (e) {
            if ("string" == typeof e || r(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -o ? "-0" : t;
        };
    },
    function (e, t, n) {
        var r = n(61);
        e.exports = function (e, t) {
            if (null == e) return {};
            var n,
                o,
                a = r(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
            }
            return a;
        };
    },
    function (e, t, n) {
        var r;
        /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
        /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
        !(function () {
            "use strict";
            var n = {}.hasOwnProperty;
            function o() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var r = arguments[t];
                    if (r) {
                        var a = typeof r;
                        if ("string" === a || "number" === a) e.push(r);
                        else if (Array.isArray(r) && r.length) {
                            var i = o.apply(null, r);
                            i && e.push(i);
                        } else if ("object" === a) for (var s in r) n.call(r, s) && r[s] && e.push(s);
                    }
                }
                return e.join(" ");
            }
            e.exports
                ? ((o.default = o), (e.exports = o))
                : void 0 ===
                (r = function () {
                    return o;
                }.apply(t, [])) || (e.exports = r);
        })();
    },
    function (e, t, n) {
        var r = n(12)(n(8), "Map");
        e.exports = r;
    },
    function (e, t, n) {
        var r = n(84),
            o = n(91),
            a = n(93),
            i = n(94),
            s = n(95);
        function c(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r), (c.prototype.delete = o), (c.prototype.get = a), (c.prototype.has = i), (c.prototype.set = s), (e.exports = c);
    },
    function (e, t, n) {
        var r = n(113),
            o = n(120),
            a = n(30);
        e.exports = function (e) {
            return a(e) ? r(e) : o(e);
        };
    },
    function (e, t) {
        var n = 9007199254740991;
        e.exports = function (e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n;
        };
    },
    function (e, t, n) {
        var r = n(39),
            o = n(29);
        e.exports = function (e) {
            return null != e && o(e.length) && !r(e);
        };
    },
    function (e, t, n) {
        var r = n(9),
            o = n(17),
            a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            i = /^\w*$/;
        e.exports = function (e, t) {
            if (r(e)) return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !o(e)) || i.test(e) || !a.test(e) || (null != t && e in Object(t));
        };
    },
    function (e, t, n) {
        e.exports = n(150)();
    },
    function (e, t, n) {
        e.exports = n(163);
    },
    function (e, t, n) {
        var r = n(8),
            o = n(52),
            a = /^\s+/,
            i = r.parseInt;
        e.exports = function (e, t, n) {
            return n || null == t ? (t = 0) : t && (t = +t), i(o(e).replace(a, ""), t || 0);
        };
    },
    function (e, t, n) {
        (function (t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n;
        }.call(this, n(63)));
    },
    function (e, t) {
        e.exports = function (e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; ) o[n] = t(e[n], n, e);
            return o;
        };
    },
    function (e, t, n) {
        var r = n(19),
            o = n(75),
            a = n(76),
            i = n(77),
            s = n(78),
            c = n(79);
        function l(e) {
            var t = (this.__data__ = new r(e));
            this.size = t.size;
        }
        (l.prototype.clear = o), (l.prototype.delete = a), (l.prototype.get = i), (l.prototype.has = s), (l.prototype.set = c), (e.exports = l);
    },
    function (e, t) {
        e.exports = function (e, t) {
            return e === t || (e != e && t != t);
        };
    },
    function (e, t, n) {
        var r = n(14),
            o = n(13),
            a = "[object AsyncFunction]",
            i = "[object Function]",
            s = "[object GeneratorFunction]",
            c = "[object Proxy]";
        e.exports = function (e) {
            if (!o(e)) return !1;
            var t = r(e);
            return t == i || t == s || t == a || t == c;
        };
    },
    function (e, t) {
        var n = Function.prototype.toString;
        e.exports = function (e) {
            if (null != e) {
                try {
                    return n.call(e);
                } catch (e) {}
                try {
                    return e + "";
                } catch (e) {}
            }
            return "";
        };
    },
    function (e, t, n) {
        var r = n(96),
            o = n(15);
        e.exports = function e(t, n, a, i, s) {
            return t === n || (null == t || null == n || (!o(t) && !o(n)) ? t != t && n != n : r(t, n, a, i, e, s));
        };
    },
    function (e, t, n) {
        var r = n(97),
            o = n(100),
            a = n(101),
            i = 1,
            s = 2;
        e.exports = function (e, t, n, c, l, u) {
            var p = n & i,
                f = e.length,
                h = t.length;
            if (f != h && !(p && h > f)) return !1;
            var d = u.get(e);
            if (d && u.get(t)) return d == t;
            var v = -1,
                m = !0,
                g = n & s ? new r() : void 0;
            for (u.set(e, t), u.set(t, e); ++v < f; ) {
                var b = e[v],
                    y = t[v];
                if (c) var w = p ? c(y, b, v, t, e, u) : c(b, y, v, e, t, u);
                if (void 0 !== w) {
                    if (w) continue;
                    m = !1;
                    break;
                }
                if (g) {
                    if (
                        !o(t, function (e, t) {
                            if (!a(g, t) && (b === e || l(b, e, n, c, u))) return g.push(t);
                        })
                    ) {
                        m = !1;
                        break;
                    }
                } else if (b !== y && !l(b, y, n, c, u)) {
                    m = !1;
                    break;
                }
            }
            return u.delete(e), u.delete(t), m;
        };
    },
    function (e, t, n) {
        var r = n(115),
            o = n(15),
            a = Object.prototype,
            i = a.hasOwnProperty,
            s = a.propertyIsEnumerable,
            c = r(
                (function () {
                    return arguments;
                })()
            )
                ? r
                : function (e) {
                    return o(e) && i.call(e, "callee") && !s.call(e, "callee");
                };
        e.exports = c;
    },
    function (e, t, n) {
        (function (e) {
            var r = n(8),
                o = n(116),
                a = t && !t.nodeType && t,
                i = a && "object" == typeof e && e && !e.nodeType && e,
                s = i && i.exports === a ? r.Buffer : void 0,
                c = (s ? s.isBuffer : void 0) || o;
            e.exports = c;
        }.call(this, n(45)(e)));
    },
    function (e, t) {
        e.exports = function (e) {
            return (
                e.webpackPolyfill ||
                ((e.deprecate = function () {}),
                    (e.paths = []),
                e.children || (e.children = []),
                    Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return e.l;
                        },
                    }),
                    Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function () {
                            return e.i;
                        },
                    }),
                    (e.webpackPolyfill = 1)),
                    e
            );
        };
    },
    function (e, t) {
        var n = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        e.exports = function (e, t) {
            var o = typeof e;
            return !!(t = null == t ? n : t) && ("number" == o || ("symbol" != o && r.test(e))) && e > -1 && e % 1 == 0 && e < t;
        };
    },
    function (e, t, n) {
        var r = n(117),
            o = n(118),
            a = n(119),
            i = a && a.isTypedArray,
            s = i ? o(i) : r;
        e.exports = s;
    },
    function (e, t, n) {
        var r = n(13);
        e.exports = function (e) {
            return e == e && !r(e);
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            return function (n) {
                return null != n && n[e] === t && (void 0 !== t || e in Object(n));
            };
        };
    },
    function (e, t, n) {
        var r = n(51),
            o = n(23);
        e.exports = function (e, t) {
            for (var n = 0, a = (t = r(t, e)).length; null != e && n < a; ) e = e[o(t[n++])];
            return n && n == a ? e : void 0;
        };
    },
    function (e, t, n) {
        var r = n(9),
            o = n(31),
            a = n(132),
            i = n(52);
        e.exports = function (e, t) {
            return r(e) ? e : o(e, t) ? [e] : a(i(e));
        };
    },
    function (e, t, n) {
        var r = n(135);
        e.exports = function (e) {
            return null == e ? "" : r(e);
        };
    },
    function (e, t, n) {
        var r = n(13),
            o = n(62),
            a = n(64),
            i = "Expected a function",
            s = Math.max,
            c = Math.min;
        e.exports = function (e, t, n) {
            var l,
                u,
                p,
                f,
                h,
                d,
                v = 0,
                m = !1,
                g = !1,
                b = !0;
            if ("function" != typeof e) throw new TypeError(i);
            function y(t) {
                var n = l,
                    r = u;
                return (l = u = void 0), (v = t), (f = e.apply(r, n));
            }
            function w(e) {
                var n = e - d;
                return void 0 === d || n >= t || n < 0 || (g && e - v >= p);
            }
            function k() {
                var e = o();
                if (w(e)) return x(e);
                h = setTimeout(
                    k,
                    (function (e) {
                        var n = t - (e - d);
                        return g ? c(n, p - (e - v)) : n;
                    })(e)
                );
            }
            function x(e) {
                return (h = void 0), b && l ? y(e) : ((l = u = void 0), f);
            }
            function _() {
                var e = o(),
                    n = w(e);
                if (((l = arguments), (u = this), (d = e), n)) {
                    if (void 0 === h)
                        return (function (e) {
                            return (v = e), (h = setTimeout(k, t)), m ? y(e) : f;
                        })(d);
                    if (g) return clearTimeout(h), (h = setTimeout(k, t)), y(d);
                }
                return void 0 === h && (h = setTimeout(k, t)), f;
            }
            return (
                (t = a(t) || 0),
                r(n) && ((m = !!n.leading), (p = (g = "maxWait" in n) ? s(a(n.maxWait) || 0, t) : p), (b = "trailing" in n ? !!n.trailing : b)),
                    (_.cancel = function () {
                        void 0 !== h && clearTimeout(h), (v = 0), (l = d = u = h = void 0);
                    }),
                    (_.flush = function () {
                        return void 0 === h ? f : x(o());
                    }),
                    _
            );
        };
    },
    function (e, t, n) {
        var r = n(36),
            o = n(67),
            a = n(143),
            i = n(9);
        e.exports = function (e, t) {
            return (i(e) ? r : a)(e, o(t, 3));
        };
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r,
            o = n(149),
            a = (r = o) && r.__esModule ? r : { default: r };
        t.default = a.default;
    },
    function (e, t, n) {
        var r = n(158),
            o = n(159),
            a = n(160);
        e.exports = function (e) {
            return r(e) || o(e) || a();
        };
    },
    ,
    ,
    function (e, t) {
        function n(e) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                    }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
        }
        function r(t) {
            return (
                "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
                    ? (e.exports = r = function (e) {
                        return n(e);
                    })
                    : (e.exports = r = function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e);
                    }),
                    r(t)
            );
        }
        e.exports = r;
    },
    function (e, t) {
        function n(t, r) {
            return (
                (e.exports = n =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    }),
                    n(t, r)
            );
        }
        e.exports = n;
    },
    function (e, t) {
        e.exports = function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
        };
    },
    function (e, t, n) {
        var r = n(8);
        e.exports = function () {
            return r.Date.now();
        };
    },
    function (e, t) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (n = window);
        }
        e.exports = n;
    },
    function (e, t, n) {
        var r = n(13),
            o = n(17),
            a = NaN,
            i = /^\s+|\s+$/g,
            s = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            l = /^0o[0-7]+$/i,
            u = parseInt;
        e.exports = function (e) {
            if ("number" == typeof e) return e;
            if (o(e)) return a;
            if (r(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = r(t) ? t + "" : t;
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(i, "");
            var n = c.test(e);
            return n || l.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? a : +e;
        };
    },
    function (e, t, n) {
        var r = n(18),
            o = Object.prototype,
            a = o.hasOwnProperty,
            i = o.toString,
            s = r ? r.toStringTag : void 0;
        e.exports = function (e) {
            var t = a.call(e, s),
                n = e[s];
            try {
                e[s] = void 0;
                var r = !0;
            } catch (e) {}
            var o = i.call(e);
            return r && (t ? (e[s] = n) : delete e[s]), o;
        };
    },
    function (e, t) {
        var n = Object.prototype.toString;
        e.exports = function (e) {
            return n.call(e);
        };
    },
    function (e, t, n) {
        var r = n(68),
            o = n(130),
            a = n(139),
            i = n(9),
            s = n(140);
        e.exports = function (e) {
            return "function" == typeof e ? e : null == e ? a : "object" == typeof e ? (i(e) ? o(e[0], e[1]) : r(e)) : s(e);
        };
    },
    function (e, t, n) {
        var r = n(69),
            o = n(129),
            a = n(49);
        e.exports = function (e) {
            var t = o(e);
            return 1 == t.length && t[0][2]
                ? a(t[0][0], t[0][1])
                : function (n) {
                    return n === e || r(n, e, t);
                };
        };
    },
    function (e, t, n) {
        var r = n(37),
            o = n(41),
            a = 1,
            i = 2;
        e.exports = function (e, t, n, s) {
            var c = n.length,
                l = c,
                u = !s;
            if (null == e) return !l;
            for (e = Object(e); c--; ) {
                var p = n[c];
                if (u && p[2] ? p[1] !== e[p[0]] : !(p[0] in e)) return !1;
            }
            for (; ++c < l; ) {
                var f = (p = n[c])[0],
                    h = e[f],
                    d = p[1];
                if (u && p[2]) {
                    if (void 0 === h && !(f in e)) return !1;
                } else {
                    var v = new r();
                    if (s) var m = s(h, d, f, e, t, v);
                    if (!(void 0 === m ? o(d, h, a | i, s, v) : m)) return !1;
                }
            }
            return !0;
        };
    },
    function (e, t) {
        e.exports = function () {
            (this.__data__ = []), (this.size = 0);
        };
    },
    function (e, t, n) {
        var r = n(20),
            o = Array.prototype.splice;
        e.exports = function (e) {
            var t = this.__data__,
                n = r(t, e);
            return !(n < 0 || (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, 0));
        };
    },
    function (e, t, n) {
        var r = n(20);
        e.exports = function (e) {
            var t = this.__data__,
                n = r(t, e);
            return n < 0 ? void 0 : t[n][1];
        };
    },
    function (e, t, n) {
        var r = n(20);
        e.exports = function (e) {
            return r(this.__data__, e) > -1;
        };
    },
    function (e, t, n) {
        var r = n(20);
        e.exports = function (e, t) {
            var n = this.__data__,
                o = r(n, e);
            return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
        };
    },
    function (e, t, n) {
        var r = n(19);
        e.exports = function () {
            (this.__data__ = new r()), (this.size = 0);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            var t = this.__data__,
                n = t.delete(e);
            return (this.size = t.size), n;
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return this.__data__.get(e);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return this.__data__.has(e);
        };
    },
    function (e, t, n) {
        var r = n(19),
            o = n(26),
            a = n(27),
            i = 200;
        e.exports = function (e, t) {
            var n = this.__data__;
            if (n instanceof r) {
                var s = n.__data__;
                if (!o || s.length < i - 1) return s.push([e, t]), (this.size = ++n.size), this;
                n = this.__data__ = new a(s);
            }
            return n.set(e, t), (this.size = n.size), this;
        };
    },
    function (e, t, n) {
        var r = n(39),
            o = n(81),
            a = n(13),
            i = n(40),
            s = /^\[object .+?Constructor\]$/,
            c = Function.prototype,
            l = Object.prototype,
            u = c.toString,
            p = l.hasOwnProperty,
            f = RegExp(
                "^" +
                u
                    .call(p)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                "$"
            );
        e.exports = function (e) {
            return !(!a(e) || o(e)) && (r(e) ? f : s).test(i(e));
        };
    },
    function (e, t, n) {
        var r,
            o = n(82),
            a = (r = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + r : "";
        e.exports = function (e) {
            return !!a && a in e;
        };
    },
    function (e, t, n) {
        var r = n(8)["__core-js_shared__"];
        e.exports = r;
    },
    function (e, t) {
        e.exports = function (e, t) {
            return null == e ? void 0 : e[t];
        };
    },
    function (e, t, n) {
        var r = n(85),
            o = n(19),
            a = n(26);
        e.exports = function () {
            (this.size = 0), (this.__data__ = { hash: new r(), map: new (a || o)(), string: new r() });
        };
    },
    function (e, t, n) {
        var r = n(86),
            o = n(87),
            a = n(88),
            i = n(89),
            s = n(90);
        function c(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r), (c.prototype.delete = o), (c.prototype.get = a), (c.prototype.has = i), (c.prototype.set = s), (e.exports = c);
    },
    function (e, t, n) {
        var r = n(21);
        e.exports = function () {
            (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            var t = this.has(e) && delete this.__data__[e];
            return (this.size -= t ? 1 : 0), t;
        };
    },
    function (e, t, n) {
        var r = n(21),
            o = "__lodash_hash_undefined__",
            a = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
            var t = this.__data__;
            if (r) {
                var n = t[e];
                return n === o ? void 0 : n;
            }
            return a.call(t, e) ? t[e] : void 0;
        };
    },
    function (e, t, n) {
        var r = n(21),
            o = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
            var t = this.__data__;
            return r ? void 0 !== t[e] : o.call(t, e);
        };
    },
    function (e, t, n) {
        var r = n(21),
            o = "__lodash_hash_undefined__";
        e.exports = function (e, t) {
            var n = this.__data__;
            return (this.size += this.has(e) ? 0 : 1), (n[e] = r && void 0 === t ? o : t), this;
        };
    },
    function (e, t, n) {
        var r = n(22);
        e.exports = function (e) {
            var t = r(this, e).delete(e);
            return (this.size -= t ? 1 : 0), t;
        };
    },
    function (e, t) {
        e.exports = function (e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
        };
    },
    function (e, t, n) {
        var r = n(22);
        e.exports = function (e) {
            return r(this, e).get(e);
        };
    },
    function (e, t, n) {
        var r = n(22);
        e.exports = function (e) {
            return r(this, e).has(e);
        };
    },
    function (e, t, n) {
        var r = n(22);
        e.exports = function (e, t) {
            var n = r(this, e),
                o = n.size;
            return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
        };
    },
    function (e, t, n) {
        var r = n(37),
            o = n(42),
            a = n(102),
            i = n(106),
            s = n(124),
            c = n(9),
            l = n(44),
            u = n(47),
            p = 1,
            f = "[object Arguments]",
            h = "[object Array]",
            d = "[object Object]",
            v = Object.prototype.hasOwnProperty;
        e.exports = function (e, t, n, m, g, b) {
            var y = c(e),
                w = c(t),
                k = y ? h : s(e),
                x = w ? h : s(t),
                _ = (k = k == f ? d : k) == d,
                E = (x = x == f ? d : x) == d,
                C = k == x;
            if (C && l(e)) {
                if (!l(t)) return !1;
                (y = !0), (_ = !1);
            }
            if (C && !_) return b || (b = new r()), y || u(e) ? o(e, t, n, m, g, b) : a(e, t, k, n, m, g, b);
            if (!(n & p)) {
                var j = _ && v.call(e, "__wrapped__"),
                    O = E && v.call(t, "__wrapped__");
                if (j || O) {
                    var P = j ? e.value() : e,
                        S = O ? t.value() : t;
                    return b || (b = new r()), g(P, S, n, m, b);
                }
            }
            return !!C && (b || (b = new r()), i(e, t, n, m, g, b));
        };
    },
    function (e, t, n) {
        var r = n(27),
            o = n(98),
            a = n(99);
        function i(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
        }
        (i.prototype.add = i.prototype.push = o), (i.prototype.has = a), (e.exports = i);
    },
    function (e, t) {
        var n = "__lodash_hash_undefined__";
        e.exports = function (e) {
            return this.__data__.set(e, n), this;
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return this.__data__.has(e);
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return !0;
            return !1;
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            return e.has(t);
        };
    },
    function (e, t, n) {
        var r = n(18),
            o = n(103),
            a = n(38),
            i = n(42),
            s = n(104),
            c = n(105),
            l = 1,
            u = 2,
            p = "[object Boolean]",
            f = "[object Date]",
            h = "[object Error]",
            d = "[object Map]",
            v = "[object Number]",
            m = "[object RegExp]",
            g = "[object Set]",
            b = "[object String]",
            y = "[object Symbol]",
            w = "[object ArrayBuffer]",
            k = "[object DataView]",
            x = r ? r.prototype : void 0,
            _ = x ? x.valueOf : void 0;
        e.exports = function (e, t, n, r, x, E, C) {
            switch (n) {
                case k:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    (e = e.buffer), (t = t.buffer);
                case w:
                    return !(e.byteLength != t.byteLength || !E(new o(e), new o(t)));
                case p:
                case f:
                case v:
                    return a(+e, +t);
                case h:
                    return e.name == t.name && e.message == t.message;
                case m:
                case b:
                    return e == t + "";
                case d:
                    var j = s;
                case g:
                    var O = r & l;
                    if ((j || (j = c), e.size != t.size && !O)) return !1;
                    var P = C.get(e);
                    if (P) return P == t;
                    (r |= u), C.set(e, t);
                    var S = i(j(e), j(t), r, x, E, C);
                    return C.delete(e), S;
                case y:
                    if (_) return _.call(e) == _.call(t);
            }
            return !1;
        };
    },
    function (e, t, n) {
        var r = n(8).Uint8Array;
        e.exports = r;
    },
    function (e, t) {
        e.exports = function (e) {
            var t = -1,
                n = Array(e.size);
            return (
                e.forEach(function (e, r) {
                    n[++t] = [r, e];
                }),
                    n
            );
        };
    },
    function (e, t) {
        e.exports = function (e) {
            var t = -1,
                n = Array(e.size);
            return (
                e.forEach(function (e) {
                    n[++t] = e;
                }),
                    n
            );
        };
    },
    function (e, t, n) {
        var r = n(107),
            o = 1,
            a = Object.prototype.hasOwnProperty;
        e.exports = function (e, t, n, i, s, c) {
            var l = n & o,
                u = r(e),
                p = u.length;
            if (p != r(t).length && !l) return !1;
            for (var f = p; f--; ) {
                var h = u[f];
                if (!(l ? h in t : a.call(t, h))) return !1;
            }
            var d = c.get(e);
            if (d && c.get(t)) return d == t;
            var v = !0;
            c.set(e, t), c.set(t, e);
            for (var m = l; ++f < p; ) {
                var g = e[(h = u[f])],
                    b = t[h];
                if (i) var y = l ? i(b, g, h, t, e, c) : i(g, b, h, e, t, c);
                if (!(void 0 === y ? g === b || s(g, b, n, i, c) : y)) {
                    v = !1;
                    break;
                }
                m || (m = "constructor" == h);
            }
            if (v && !m) {
                var w = e.constructor,
                    k = t.constructor;
                w != k && "constructor" in e && "constructor" in t && !("function" == typeof w && w instanceof w && "function" == typeof k && k instanceof k) && (v = !1);
            }
            return c.delete(e), c.delete(t), v;
        };
    },
    function (e, t, n) {
        var r = n(108),
            o = n(110),
            a = n(28);
        e.exports = function (e) {
            return r(e, a, o);
        };
    },
    function (e, t, n) {
        var r = n(109),
            o = n(9);
        e.exports = function (e, t, n) {
            var a = t(e);
            return o(e) ? a : r(a, n(e));
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
            return e;
        };
    },
    function (e, t, n) {
        var r = n(111),
            o = n(112),
            a = Object.prototype.propertyIsEnumerable,
            i = Object.getOwnPropertySymbols,
            s = i
                ? function (e) {
                    return null == e
                        ? []
                        : ((e = Object(e)),
                            r(i(e), function (t) {
                                return a.call(e, t);
                            }));
                }
                : o;
        e.exports = s;
    },
    function (e, t) {
        e.exports = function (e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, o = 0, a = []; ++n < r; ) {
                var i = e[n];
                t(i, n, e) && (a[o++] = i);
            }
            return a;
        };
    },
    function (e, t) {
        e.exports = function () {
            return [];
        };
    },
    function (e, t, n) {
        var r = n(114),
            o = n(43),
            a = n(9),
            i = n(44),
            s = n(46),
            c = n(47),
            l = Object.prototype.hasOwnProperty;
        e.exports = function (e, t) {
            var n = a(e),
                u = !n && o(e),
                p = !n && !u && i(e),
                f = !n && !u && !p && c(e),
                h = n || u || p || f,
                d = h ? r(e.length, String) : [],
                v = d.length;
            for (var m in e) (!t && !l.call(e, m)) || (h && ("length" == m || (p && ("offset" == m || "parent" == m)) || (f && ("buffer" == m || "byteLength" == m || "byteOffset" == m)) || s(m, v))) || d.push(m);
            return d;
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
            return r;
        };
    },
    function (e, t, n) {
        var r = n(14),
            o = n(15),
            a = "[object Arguments]";
        e.exports = function (e) {
            return o(e) && r(e) == a;
        };
    },
    function (e, t) {
        e.exports = function () {
            return !1;
        };
    },
    function (e, t, n) {
        var r = n(14),
            o = n(29),
            a = n(15),
            i = {};
        (i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i[
            "[object Uint32Array]"
            ] = !0),
            (i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i[
                "[object Number]"
                ] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1),
            (e.exports = function (e) {
                return a(e) && o(e.length) && !!i[r(e)];
            });
    },
    function (e, t) {
        e.exports = function (e) {
            return function (t) {
                return e(t);
            };
        };
    },
    function (e, t, n) {
        (function (e) {
            var r = n(35),
                o = t && !t.nodeType && t,
                a = o && "object" == typeof e && e && !e.nodeType && e,
                i = a && a.exports === o && r.process,
                s = (function () {
                    try {
                        var e = a && a.require && a.require("util").types;
                        return e || (i && i.binding && i.binding("util"));
                    } catch (e) {}
                })();
            e.exports = s;
        }.call(this, n(45)(e)));
    },
    function (e, t, n) {
        var r = n(121),
            o = n(122),
            a = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
            if (!r(e)) return o(e);
            var t = [];
            for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
            return t;
        };
    },
    function (e, t) {
        var n = Object.prototype;
        e.exports = function (e) {
            var t = e && e.constructor;
            return e === (("function" == typeof t && t.prototype) || n);
        };
    },
    function (e, t, n) {
        var r = n(123)(Object.keys, Object);
        e.exports = r;
    },
    function (e, t) {
        e.exports = function (e, t) {
            return function (n) {
                return e(t(n));
            };
        };
    },
    function (e, t, n) {
        var r = n(125),
            o = n(26),
            a = n(126),
            i = n(127),
            s = n(128),
            c = n(14),
            l = n(40),
            u = l(r),
            p = l(o),
            f = l(a),
            h = l(i),
            d = l(s),
            v = c;
        ((r && "[object DataView]" != v(new r(new ArrayBuffer(1)))) || (o && "[object Map]" != v(new o())) || (a && "[object Promise]" != v(a.resolve())) || (i && "[object Set]" != v(new i())) || (s && "[object WeakMap]" != v(new s()))) &&
        (v = function (e) {
            var t = c(e),
                n = "[object Object]" == t ? e.constructor : void 0,
                r = n ? l(n) : "";
            if (r)
                switch (r) {
                    case u:
                        return "[object DataView]";
                    case p:
                        return "[object Map]";
                    case f:
                        return "[object Promise]";
                    case h:
                        return "[object Set]";
                    case d:
                        return "[object WeakMap]";
                }
            return t;
        }),
            (e.exports = v);
    },
    function (e, t, n) {
        var r = n(12)(n(8), "DataView");
        e.exports = r;
    },
    function (e, t, n) {
        var r = n(12)(n(8), "Promise");
        e.exports = r;
    },
    function (e, t, n) {
        var r = n(12)(n(8), "Set");
        e.exports = r;
    },
    function (e, t, n) {
        var r = n(12)(n(8), "WeakMap");
        e.exports = r;
    },
    function (e, t, n) {
        var r = n(48),
            o = n(28);
        e.exports = function (e) {
            for (var t = o(e), n = t.length; n--; ) {
                var a = t[n],
                    i = e[a];
                t[n] = [a, i, r(i)];
            }
            return t;
        };
    },
    function (e, t, n) {
        var r = n(41),
            o = n(131),
            a = n(136),
            i = n(31),
            s = n(48),
            c = n(49),
            l = n(23),
            u = 1,
            p = 2;
        e.exports = function (e, t) {
            return i(e) && s(t)
                ? c(l(e), t)
                : function (n) {
                    var i = o(n, e);
                    return void 0 === i && i === t ? a(n, e) : r(t, i, u | p);
                };
        };
    },
    function (e, t, n) {
        var r = n(50);
        e.exports = function (e, t, n) {
            var o = null == e ? void 0 : r(e, t);
            return void 0 === o ? n : o;
        };
    },
    function (e, t, n) {
        var r = n(133),
            o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            a = /\\(\\)?/g,
            i = r(function (e) {
                var t = [];
                return (
                    46 === e.charCodeAt(0) && t.push(""),
                        e.replace(o, function (e, n, r, o) {
                            t.push(r ? o.replace(a, "$1") : n || e);
                        }),
                        t
                );
            });
        e.exports = i;
    },
    function (e, t, n) {
        var r = n(134),
            o = 500;
        e.exports = function (e) {
            var t = r(e, function (e) {
                    return n.size === o && n.clear(), e;
                }),
                n = t.cache;
            return t;
        };
    },
    function (e, t, n) {
        var r = n(27),
            o = "Expected a function";
        function a(e, t) {
            if ("function" != typeof e || (null != t && "function" != typeof t)) throw new TypeError(o);
            var n = function () {
                var r = arguments,
                    o = t ? t.apply(this, r) : r[0],
                    a = n.cache;
                if (a.has(o)) return a.get(o);
                var i = e.apply(this, r);
                return (n.cache = a.set(o, i) || a), i;
            };
            return (n.cache = new (a.Cache || r)()), n;
        }
        (a.Cache = r), (e.exports = a);
    },
    function (e, t, n) {
        var r = n(18),
            o = n(36),
            a = n(9),
            i = n(17),
            s = 1 / 0,
            c = r ? r.prototype : void 0,
            l = c ? c.toString : void 0;
        e.exports = function e(t) {
            if ("string" == typeof t) return t;
            if (a(t)) return o(t, e) + "";
            if (i(t)) return l ? l.call(t) : "";
            var n = t + "";
            return "0" == n && 1 / t == -s ? "-0" : n;
        };
    },
    function (e, t, n) {
        var r = n(137),
            o = n(138);
        e.exports = function (e, t) {
            return null != e && o(e, t, r);
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            return null != e && t in Object(e);
        };
    },
    function (e, t, n) {
        var r = n(51),
            o = n(43),
            a = n(9),
            i = n(46),
            s = n(29),
            c = n(23);
        e.exports = function (e, t, n) {
            for (var l = -1, u = (t = r(t, e)).length, p = !1; ++l < u; ) {
                var f = c(t[l]);
                if (!(p = null != e && n(e, f))) break;
                e = e[f];
            }
            return p || ++l != u ? p : !!(u = null == e ? 0 : e.length) && s(u) && i(f, u) && (a(e) || o(e));
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return e;
        };
    },
    function (e, t, n) {
        var r = n(141),
            o = n(142),
            a = n(31),
            i = n(23);
        e.exports = function (e) {
            return a(e) ? r(i(e)) : o(e);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return function (t) {
                return null == t ? void 0 : t[e];
            };
        };
    },
    function (e, t, n) {
        var r = n(50);
        e.exports = function (e) {
            return function (t) {
                return r(t, e);
            };
        };
    },
    function (e, t, n) {
        var r = n(144),
            o = n(30);
        e.exports = function (e, t) {
            var n = -1,
                a = o(e) ? Array(e.length) : [];
            return (
                r(e, function (e, r, o) {
                    a[++n] = t(e, r, o);
                }),
                    a
            );
        };
    },
    function (e, t, n) {
        var r = n(145),
            o = n(148)(r);
        e.exports = o;
    },
    function (e, t, n) {
        var r = n(146),
            o = n(28);
        e.exports = function (e, t) {
            return e && r(e, t, o);
        };
    },
    function (e, t, n) {
        var r = n(147)();
        e.exports = r;
    },
    function (e, t) {
        e.exports = function (e) {
            return function (t, n, r) {
                for (var o = -1, a = Object(t), i = r(t), s = i.length; s--; ) {
                    var c = i[e ? s : ++o];
                    if (!1 === n(a[c], c, a)) break;
                }
                return t;
            };
        };
    },
    function (e, t, n) {
        var r = n(30);
        e.exports = function (e, t) {
            return function (n, o) {
                if (null == n) return n;
                if (!r(n)) return e(n, o);
                for (var a = n.length, i = t ? a : -1, s = Object(n); (t ? i-- : ++i < a) && !1 !== o(s[i], i, s); );
                return n;
            };
        };
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            })(),
            o = n(0),
            a = l(o),
            i = l(n(32)),
            s = l(n(152)),
            c = l(n(153));
        function l(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var u = (function (e) {
            function t(e) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var n = (function (e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                (n.handlePreviousPage = function (e) {
                    var t = n.state.selected;
                    e.preventDefault ? e.preventDefault() : (e.returnValue = !1), t > 0 && n.handlePageSelected(t - 1, e);
                }),
                    (n.handleNextPage = function (e) {
                        var t = n.state.selected,
                            r = n.props.pageCount;
                        e.preventDefault ? e.preventDefault() : (e.returnValue = !1), t < r - 1 && n.handlePageSelected(t + 1, e);
                    }),
                    (n.handlePageSelected = function (e, t) {
                        t.preventDefault ? t.preventDefault() : (t.returnValue = !1), n.state.selected !== e && (n.setState({ selected: e }), n.callCallback(e));
                    }),
                    (n.handleBreakClick = function (e, t) {
                        t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
                        var r = n.state.selected;
                        n.handlePageSelected(r < e ? n.getForwardJump() : n.getBackwardJump(), t);
                    }),
                    (n.callCallback = function (e) {
                        void 0 !== n.props.onPageChange && "function" == typeof n.props.onPageChange && n.props.onPageChange({ selected: e });
                    }),
                    (n.pagination = function () {
                        var e = [],
                            t = n.props,
                            r = t.pageRangeDisplayed,
                            o = t.pageCount,
                            i = t.marginPagesDisplayed,
                            s = t.breakLabel,
                            l = t.breakClassName,
                            u = t.breakLinkClassName,
                            p = n.state.selected;
                        if (o <= r) for (var f = 0; f < o; f++) e.push(n.getPageElement(f));
                        else {
                            var h = r / 2,
                                d = r - h;
                            p > o - r / 2 ? (h = r - (d = o - p)) : p < r / 2 && (d = r - (h = p));
                            var v = void 0,
                                m = void 0,
                                g = void 0,
                                b = function (e) {
                                    return n.getPageElement(e);
                                };
                            for (v = 0; v < o; v++)
                                (m = v + 1) <= i
                                    ? e.push(b(v))
                                    : m > o - i
                                    ? e.push(b(v))
                                    : v >= p - h && v <= p + d
                                        ? e.push(b(v))
                                        : s && e[e.length - 1] !== g && ((g = a.default.createElement(c.default, { key: v, breakLabel: s, breakClassName: l, breakLinkClassName: u, onClick: n.handleBreakClick.bind(null, v) })), e.push(g));
                        }
                        return e;
                    });
                var r = void 0;
                return (r = e.initialPage ? e.initialPage : e.forcePage ? e.forcePage : 0), (n.state = { selected: r }), n;
            }
            return (
                (function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, o.Component),
                    r(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                var e = this.props,
                                    t = e.initialPage,
                                    n = e.disableInitialCallback,
                                    r = e.extraAriaContext;
                                void 0 === t || n || this.callCallback(t), r && console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.");
                            },
                        },
                        {
                            key: "UNSAFE_componentWillReceiveProps",
                            value: function (e) {
                                void 0 !== e.forcePage && this.props.forcePage !== e.forcePage && this.setState({ selected: e.forcePage });
                            },
                        },
                        {
                            key: "getForwardJump",
                            value: function () {
                                var e = this.state.selected,
                                    t = this.props,
                                    n = t.pageCount,
                                    r = e + t.pageRangeDisplayed;
                                return r >= n ? n - 1 : r;
                            },
                        },
                        {
                            key: "getBackwardJump",
                            value: function () {
                                var e = this.state.selected - this.props.pageRangeDisplayed;
                                return e < 0 ? 0 : e;
                            },
                        },
                        {
                            key: "hrefBuilder",
                            value: function (e) {
                                var t = this.props,
                                    n = t.hrefBuilder,
                                    r = t.pageCount;
                                if (n && e !== this.state.selected && e >= 0 && e < r) return n(e + 1);
                            },
                        },
                        {
                            key: "ariaLabelBuilder",
                            value: function (e) {
                                var t = e === this.state.selected;
                                if (this.props.ariaLabelBuilder && e >= 0 && e < this.props.pageCount) {
                                    var n = this.props.ariaLabelBuilder(e + 1, t);
                                    return this.props.extraAriaContext && !t && (n = n + " " + this.props.extraAriaContext), n;
                                }
                            },
                        },
                        {
                            key: "getPageElement",
                            value: function (e) {
                                var t = this.state.selected,
                                    n = this.props,
                                    r = n.pageClassName,
                                    o = n.pageLinkClassName,
                                    i = n.activeClassName,
                                    c = n.activeLinkClassName,
                                    l = n.extraAriaContext;
                                return a.default.createElement(s.default, {
                                    key: e,
                                    onClick: this.handlePageSelected.bind(null, e),
                                    selected: t === e,
                                    pageClassName: r,
                                    pageLinkClassName: o,
                                    activeClassName: i,
                                    activeLinkClassName: c,
                                    extraAriaContext: l,
                                    href: this.hrefBuilder(e),
                                    ariaLabel: this.ariaLabelBuilder(e),
                                    page: e + 1,
                                });
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.disabledClassName,
                                    n = e.previousClassName,
                                    r = e.nextClassName,
                                    o = e.pageCount,
                                    i = e.containerClassName,
                                    s = e.previousLinkClassName,
                                    c = e.previousLabel,
                                    l = e.nextLinkClassName,
                                    u = e.nextLabel,
                                    p = this.state.selected,
                                    f = n + (0 === p ? " " + t : ""),
                                    h = r + (p === o - 1 ? " " + t : ""),
                                    d = 0 === p ? "true" : "false",
                                    v = p === o - 1 ? "true" : "false";
                                return a.default.createElement(
                                    "ul",
                                    { className: i },
                                    a.default.createElement(
                                        "li",
                                        { className: f },
                                        a.default.createElement("a", { onClick: this.handlePreviousPage, className: s, href: this.hrefBuilder(p - 1), tabIndex: "0", role: "button", onKeyPress: this.handlePreviousPage, "aria-disabled": d }, c)
                                    ),
                                    this.pagination(),
                                    a.default.createElement(
                                        "li",
                                        { className: h },
                                        a.default.createElement("a", { onClick: this.handleNextPage, className: l, href: this.hrefBuilder(p + 1), tabIndex: "0", role: "button", onKeyPress: this.handleNextPage, "aria-disabled": v }, u)
                                    )
                                );
                            },
                        },
                    ]),
                    t
            );
        })();
        (u.propTypes = {
            pageCount: i.default.number.isRequired,
            pageRangeDisplayed: i.default.number.isRequired,
            marginPagesDisplayed: i.default.number.isRequired,
            previousLabel: i.default.node,
            nextLabel: i.default.node,
            breakLabel: i.default.oneOfType([i.default.string, i.default.node]),
            hrefBuilder: i.default.func,
            onPageChange: i.default.func,
            initialPage: i.default.number,
            forcePage: i.default.number,
            disableInitialCallback: i.default.bool,
            containerClassName: i.default.string,
            pageClassName: i.default.string,
            pageLinkClassName: i.default.string,
            activeClassName: i.default.string,
            activeLinkClassName: i.default.string,
            previousClassName: i.default.string,
            nextClassName: i.default.string,
            previousLinkClassName: i.default.string,
            nextLinkClassName: i.default.string,
            disabledClassName: i.default.string,
            breakClassName: i.default.string,
            breakLinkClassName: i.default.string,
            extraAriaContext: i.default.string,
            ariaLabelBuilder: i.default.func,
        }),
            (u.defaultProps = {
                pageCount: 10,
                pageRangeDisplayed: 2,
                marginPagesDisplayed: 3,
                activeClassName: "selected",
                previousClassName: "previous",
                nextClassName: "next",
                previousLabel: "Previous",
                nextLabel: "Next",
                breakLabel: "...",
                disabledClassName: "disabled",
                disableInitialCallback: !1,
            }),
            (t.default = u);
    },
    function (e, t, n) {
        "use strict";
        var r = n(151);
        function o() {}
        function a() {}
        (a.resetWarningCache = o),
            (e.exports = function () {
                function e(e, t, n, o, a, i) {
                    if (i !== r) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw ((s.name = "Invariant Violation"), s);
                    }
                }
                function t() {
                    return e;
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: a,
                    resetWarningCache: o,
                };
                return (n.PropTypes = n), n;
            });
    },
    function (e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = a(n(0)),
            o = a(n(32));
        function a(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var i = function (e) {
            var t = e.pageClassName,
                n = e.pageLinkClassName,
                o = e.onClick,
                a = e.href,
                i = e.ariaLabel || "Page " + e.page + (e.extraAriaContext ? " " + e.extraAriaContext : ""),
                s = null;
            return (
                e.selected &&
                ((s = "page"),
                    (i = e.ariaLabel || "Page " + e.page + " is your current page"),
                    (t = void 0 !== t ? t + " " + e.activeClassName : e.activeClassName),
                    void 0 !== n ? void 0 !== e.activeLinkClassName && (n = n + " " + e.activeLinkClassName) : (n = e.activeLinkClassName)),
                    r.default.createElement("li", { className: t }, r.default.createElement("a", { onClick: o, role: "button", className: n, href: a, tabIndex: "0", "aria-label": i, "aria-current": s, onKeyPress: o }, e.page))
            );
        };
        (i.propTypes = {
            onClick: o.default.func.isRequired,
            selected: o.default.bool.isRequired,
            pageClassName: o.default.string,
            pageLinkClassName: o.default.string,
            activeClassName: o.default.string,
            activeLinkClassName: o.default.string,
            extraAriaContext: o.default.string,
            href: o.default.string,
            ariaLabel: o.default.string,
            page: o.default.number.isRequired,
        }),
            (t.default = i);
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = a(n(0)),
            o = a(n(32));
        function a(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var i = function (e) {
            var t = e.breakLabel,
                n = e.breakClassName,
                o = e.breakLinkClassName,
                a = e.onClick,
                i = n || "break";
            return r.default.createElement("li", { className: i }, r.default.createElement("a", { className: o, onClick: a, role: "button", tabIndex: "0", onKeyPress: a }, t));
        };
        (i.propTypes = { breakLabel: o.default.oneOfType([o.default.string, o.default.node]), breakClassName: o.default.string, breakLinkClassName: o.default.string, onClick: o.default.func.isRequired }), (t.default = i);
    },
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t) {
        e.exports = function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
            }
        };
    },
    function (e, t) {
        e.exports = function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        };
    },
    function (e, t) {
        e.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        };
    },
    function (e, t, n) {},
    function (e, t) {},
    function (e, t, n) {
        var r = (function (e) {
            "use strict";
            var t,
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = "function" == typeof Symbol ? Symbol : {},
                a = o.iterator || "@@iterator",
                i = o.asyncIterator || "@@asyncIterator",
                s = o.toStringTag || "@@toStringTag";
            function c(e, t, n, r) {
                var o = t && t.prototype instanceof v ? t : v,
                    a = Object.create(o.prototype),
                    i = new O(r || []);
                return (
                    (a._invoke = (function (e, t, n) {
                        var r = u;
                        return function (o, a) {
                            if (r === f) throw new Error("Generator is already running");
                            if (r === h) {
                                if ("throw" === o) throw a;
                                return S();
                            }
                            for (n.method = o, n.arg = a; ; ) {
                                var i = n.delegate;
                                if (i) {
                                    var s = E(i, n);
                                    if (s) {
                                        if (s === d) continue;
                                        return s;
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (r === u) throw ((r = h), n.arg);
                                    n.dispatchException(n.arg);
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = f;
                                var c = l(e, t, n);
                                if ("normal" === c.type) {
                                    if (((r = n.done ? h : p), c.arg === d)) continue;
                                    return { value: c.arg, done: n.done };
                                }
                                "throw" === c.type && ((r = h), (n.method = "throw"), (n.arg = c.arg));
                            }
                        };
                    })(e, n, i)),
                        a
                );
            }
            function l(e, t, n) {
                try {
                    return { type: "normal", arg: e.call(t, n) };
                } catch (e) {
                    return { type: "throw", arg: e };
                }
            }
            e.wrap = c;
            var u = "suspendedStart",
                p = "suspendedYield",
                f = "executing",
                h = "completed",
                d = {};
            function v() {}
            function m() {}
            function g() {}
            var b = {};
            b[a] = function () {
                return this;
            };
            var y = Object.getPrototypeOf,
                w = y && y(y(P([])));
            w && w !== n && r.call(w, a) && (b = w);
            var k = (g.prototype = v.prototype = Object.create(b));
            function x(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    e[t] = function (e) {
                        return this._invoke(t, e);
                    };
                });
            }
            function _(e) {
                var t;
                this._invoke = function (n, o) {
                    function a() {
                        return new Promise(function (t, a) {
                            !(function t(n, o, a, i) {
                                var s = l(e[n], e, o);
                                if ("throw" !== s.type) {
                                    var c = s.arg,
                                        u = c.value;
                                    return u && "object" == typeof u && r.call(u, "__await")
                                        ? Promise.resolve(u.__await).then(
                                            function (e) {
                                                t("next", e, a, i);
                                            },
                                            function (e) {
                                                t("throw", e, a, i);
                                            }
                                        )
                                        : Promise.resolve(u).then(
                                            function (e) {
                                                (c.value = e), a(c);
                                            },
                                            function (e) {
                                                return t("throw", e, a, i);
                                            }
                                        );
                                }
                                i(s.arg);
                            })(n, o, t, a);
                        });
                    }
                    return (t = t ? t.then(a, a) : a());
                };
            }
            function E(e, n) {
                var r = e.iterator[n.method];
                if (r === t) {
                    if (((n.delegate = null), "throw" === n.method)) {
                        if (e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) return d;
                        (n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a 'throw' method"));
                    }
                    return d;
                }
                var o = l(r, e.iterator, n.arg);
                if ("throw" === o.type) return (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), d;
                var a = o.arg;
                return a
                    ? a.done
                        ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), d)
                        : a
                    : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), d);
            }
            function C(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
            }
            function j(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function O(e) {
                (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(C, this), this.reset(!0);
            }
            function P(e) {
                if (e) {
                    var n = e[a];
                    if (n) return n.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var o = -1,
                            i = function n() {
                                for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                                return (n.value = t), (n.done = !0), n;
                            };
                        return (i.next = i);
                    }
                }
                return { next: S };
            }
            function S() {
                return { value: t, done: !0 };
            }
            return (
                (m.prototype = k.constructor = g),
                    (g.constructor = m),
                    (g[s] = m.displayName = "GeneratorFunction"),
                    (e.isGeneratorFunction = function (e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name));
                    }),
                    (e.mark = function (e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : ((e.__proto__ = g), s in e || (e[s] = "GeneratorFunction")), (e.prototype = Object.create(k)), e;
                    }),
                    (e.awrap = function (e) {
                        return { __await: e };
                    }),
                    x(_.prototype),
                    (_.prototype[i] = function () {
                        return this;
                    }),
                    (e.AsyncIterator = _),
                    (e.async = function (t, n, r, o) {
                        var a = new _(c(t, n, r, o));
                        return e.isGeneratorFunction(n)
                            ? a
                            : a.next().then(function (e) {
                                return e.done ? e.value : a.next();
                            });
                    }),
                    x(k),
                    (k[s] = "Generator"),
                    (k[a] = function () {
                        return this;
                    }),
                    (k.toString = function () {
                        return "[object Generator]";
                    }),
                    (e.keys = function (e) {
                        var t = [];
                        for (var n in e) t.push(n);
                        return (
                            t.reverse(),
                                function n() {
                                    for (; t.length; ) {
                                        var r = t.pop();
                                        if (r in e) return (n.value = r), (n.done = !1), n;
                                    }
                                    return (n.done = !0), n;
                                }
                        );
                    }),
                    (e.values = P),
                    (O.prototype = {
                        constructor: O,
                        reset: function (e) {
                            if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(j), !e))
                                for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                        },
                        stop: function () {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval;
                        },
                        dispatchException: function (e) {
                            if (this.done) throw e;
                            var n = this;
                            function o(r, o) {
                                return (s.type = "throw"), (s.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                            }
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var i = this.tryEntries[a],
                                    s = i.completion;
                                if ("root" === i.tryLoc) return o("end");
                                if (i.tryLoc <= this.prev) {
                                    var c = r.call(i, "catchLoc"),
                                        l = r.call(i, "finallyLoc");
                                    if (c && l) {
                                        if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                                    } else if (c) {
                                        if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                    } else {
                                        if (!l) throw new Error("try statement without catch or finally");
                                        if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                                    }
                                }
                            }
                        },
                        abrupt: function (e, t) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var o = this.tryEntries[n];
                                if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                    var a = o;
                                    break;
                                }
                            }
                            a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                            var i = a ? a.completion : {};
                            return (i.type = e), (i.arg = t), a ? ((this.method = "next"), (this.next = a.finallyLoc), d) : this.complete(i);
                        },
                        complete: function (e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return (
                                "break" === e.type || "continue" === e.type
                                    ? (this.next = e.arg)
                                    : "return" === e.type
                                    ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                                    : "normal" === e.type && t && (this.next = t),
                                    d
                            );
                        },
                        finish: function (e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), j(n), d;
                            }
                        },
                        catch: function (e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.tryLoc === e) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var o = r.arg;
                                        j(n);
                                    }
                                    return o;
                                }
                            }
                            throw new Error("illegal catch attempt");
                        },
                        delegateYield: function (e, n, r) {
                            return (this.delegate = { iterator: P(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), d;
                        },
                    }),
                    e
            );
        })(e.exports);
        try {
            regeneratorRuntime = r;
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(r);
        }
    },
    function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(11),
            o = n(7),
            a = n.n(o),
            i = n(24),
            s = n.n(i),
            c = n(6),
            l = n.n(c),
            u = n(16),
            p = n.n(u),
            f = n(1),
            h = n.n(f),
            d = n(2),
            v = n.n(d),
            m = n(3),
            g = n.n(m),
            b = n(4),
            y = n.n(b),
            w = n(5),
            k = n.n(w),
            x = n(0),
            _ = n.n(x),
            E = n(53),
            C = n.n(E),
            j = n(10),
            O = n.n(j),
            P = n(54),
            S = n.n(P),
            N = n(55),
            A = n.n(N),
            T = (n(154), n(25)),
            L = n.n(T),
            B = wp.components.Draggable,
            I = wp.element,
            D = I.Component,
            R = I.Fragment,
            F = (I.createElement, wp.data.withSelect),
            z = wp.htmlEntities.decodeEntities,
            M = wp.components.Spinner,
            q = wp.date.dateI18n,
            U = (function (e) {
                function t(e) {
                    var n;
                    return h()(this, t), ((n = g()(this, y()(t).call(this, e))).state = { block: {} }), n;
                }
                return (
                    k()(t, e),
                        v()(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this.props.post,
                                        t = { id: e.id, key: e.id, title: [e.title.raw], link: e.link, imageId: e.featured_media, categoryId: e.categories[0], authorId: e.author, type: "block" };
                                    this.setState({ block: t });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        t = e.isDragging,
                                        n = e.post,
                                        r = e.mediaObject,
                                        o = e.hasImage,
                                        i = s()(e, ["isDragging", "post", "mediaObject", "hasImage"]),
                                        c = this.props.insertionPoint,
                                        l = c.index,
                                        u = c.rootUID,
                                        p = this.state.block,
                                        f = z(n.excerpt.rendered),
                                        h = L()("components-news-list-item-draggable", { "is-visible": t }),
                                        d = { type: "block", fromIndex: l, rootUID: u, attributes: p },
                                        v = o ? _.a.createElement(M, null) : null;
                                    if (o && r) {
                                        var m = r,
                                            g = m.media_details,
                                            b = g.width,
                                            y = g.height;
                                        r.media_details.sizes.thumbnail && ((m = r.media_details.sizes.thumbnail), (b = r.media_details.sizes.thumbnail.width), (y = r.media_details.sizes.thumbnail.height)),
                                            (v = _.a.createElement("figure", { className: "post-preview" }, _.a.createElement("img", { alt: f, src: m.source_url, height: y, width: b })));
                                    }
                                    return _.a.createElement(
                                        R,
                                        null,
                                        _.a.createElement(B, a()({ className: h, transferData: d }, i), function (e) {
                                            var t = e.onDraggableStart,
                                                n = e.onDraggableEnd;
                                            return _.a.createElement("div", { draggable: !0, key: l, className: h, onDragStart: t, onDragEnd: n });
                                        }),
                                        _.a.createElement(
                                            "div",
                                            { className: "components-news-list-item-wrapper" },
                                            _.a.createElement("div", { className: "components-news-list-item-thumbnail" }, v),
                                            _.a.createElement(
                                                "div",
                                                { className: "components-news-list-item-info" },
                                                _.a.createElement("div", { className: "components-news-list-item-pubdate" }, q("Y-m-d H:i", n.date)),
                                                _.a.createElement("div", { className: "components-news-list-item-title" }, n.title.rendered)
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                );
            })(D),
            G = F(function (e, t) {
                var n = t.post.featured_media > 0;
                return { hasImage: n, mediaObject: n ? e("core").getMedia(t.post.featured_media) : null, insertionPoint: e("core/block-editor").getBlockInsertionPoint() };
            })(U),
            $ = wp.i18n.__,
            W = wp.element,
            J = W.Component,
            Q = W.Fragment,
            V = (W.createElement, wp.data.dispatch),
            Y = wp.components,
            H = Y.Dashicon,
            K = Y.Spinner,
            X = wp.htmlEntities.decodeEntities,
            Z = (function (e) {
                function t(e) {
                    var n;
                    return h()(this, t), ((n = g()(this, y()(t).call(this, e))).onClick = n.onClick.bind(l()(n))), (n.state = { searching: !1 }), n;
                }
                return (
                    k()(t, e),
                        v()(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.setState({ searching: !0 });
                                },
                            },
                            {
                                key: "onClick",
                                value: function (e) {
                                    var t = this.props.clientId;
                                    t && e && V("core/block-editor").updateBlockAttributes(t, { id: e });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = this.props,
                                        n = t.posts,
                                        r = t.searchResults,
                                        o = t.searching,
                                        a = t.onPageChange,
                                        i = t.currentPage;
                                    if (n.length) {
                                        var s = r.totalPages,
                                            c = S()(n, function (t) {
                                                var n = X(t.title.rendered);
                                                t.title.rendered = n;
                                                var r = "post-item-".concat(t.id);
                                                return _.a.createElement(
                                                    "li",
                                                    {
                                                        title: n,
                                                        id: r,
                                                        className: "components-news-list-item",
                                                        key: t.id,
                                                        onClick: function (n) {
                                                            return e.onClick(t.id, n);
                                                        },
                                                    },
                                                    _.a.createElement(G, { post: t, elementId: r })
                                                );
                                            });
                                        return _.a.createElement(
                                            Q,
                                            null,
                                            _.a.createElement("ul", { className: "components-news-list" }, c),
                                            _.a.createElement(
                                                "div",
                                                { className: "wp-core-ui components-news-paginator" },
                                                _.a.createElement(A.a, {
                                                    onPageChange: a,
                                                    initialPage: i - 1,
                                                    pageCount: s,
                                                    pageRangeDisplayed: 0,
                                                    marginPagesDisplayed: 1,
                                                    disableInitialCallback: !0,
                                                    pageLinkClassName: "button",
                                                    previousLinkClassName: "button",
                                                    nextLinkClassName: "button",
                                                    activeLinkClassName: "active",
                                                    previousLabel: _.a.createElement(H, { icon: "arrow-left-alt2", size: "10" }),
                                                    nextLabel: _.a.createElement(H, { icon: "arrow-right-alt2", size: "10" }),
                                                })
                                            )
                                        );
                                    }
                                    return o
                                        ? _.a.createElement(Q, null, _.a.createElement(K, null), _.a.createElement("div", { className: "components-news-list-empty" }, $("Loading", "wp-post-block")))
                                        : _.a.createElement("div", { className: "components-news-list-empty" }, $("No posts matched the selected criteria", "wp-post-block"));
                                },
                            },
                        ]),
                        t
                );
            })(J),
            ee = wp.data.withSelect,
            te = (wp.element.createElement, "wp-post-block/article-block");
        var ne = ee(function (e, t) {
                var args = t.queryArgs;
                if (args.categories === '') {
                    delete args.categories;
                }
                return { searchResults: e("wp-post-block/news-search").getResults(args) };
            })(function (e) {
                var t = e.searchResults,
                    n = !0,
                    r = [];
                return (
                    t && ((r = t.results), (n = !1)),
                        (r = r.map(function (e) {
                            return O()({}, e, { blockType: te });
                        })),
                        _.a.createElement(Z, { posts: r, currentPage: e.queryArgs.page, onPageChange: e.onPageChange, searchResults: t, searching: n, clientId: e.clientId })
                );
            }),
            re = wp.i18n.__,
            oe = wp.components,
            ae = oe.TextControl,
            ie = oe.SelectControl,
            se = wp.element,
            ce = se.Component,
            le = se.Fragment,
            ue = (se.createElement, wp.data),
            pe = ue.withSelect,
            fe = ue.withDispatch,
            he = wp.compose.compose,
            de = (function (e) {
                function t(e) {
                    var n;
                    return (
                        h()(this, t),
                            ((n = g()(this, y()(t).call(this, e))).onCategoryChange = n.onCategoryChange.bind(l()(n))),
                            (n.onTermChange = n.onTermChange.bind(l()(n))),
                            (n.onPageChange = n.onPageChange.bind(l()(n))),
                            (n.triggerSearch = C()(n.props.setQueryArgs, 1e3, { trailing: !0 })),
                            (n.state = { search: n.props.queryArgs.search }),
                            n
                    );
                }
                return (
                    k()(t, e),
                        v()(t, [
                            {
                                key: "onCategoryChange",
                                value: function (e) {
                                    this.props.setQueryArgs({ categories: e, page: 1 });
                                },
                            },
                            {
                                key: "onTermChange",
                                value: function (e) {
                                    var t = this;
                                    this.setState({ search: e }, function () {
                                        (0 === e.length || e.length >= 3) && (t.triggerSearch.cancel(), t.triggerSearch({ search: e, page: 1 }));
                                    });
                                },
                            },
                            {
                                key: "onPageChange",
                                value: function (e) {
                                    this.props.setQueryArgs({ page: e.selected + 1 });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.categories,
                                        t = this.props.queryArgs.categories,
                                        n = this.state.search;
                                    e &&
                                    (e = e.map(function (e) {
                                        return { value: e.id, label: e.name };
                                    })).unshift({ value: '', label: re("All categories", "wp-post-block") });
                                    var r = this.props.clientId || {};
                                    return _.a.createElement(
                                        le,
                                        null,
                                        _.a.createElement(ae, { placeholder: re("Search posts", "wp-post-block"), value: n, onChange: this.onTermChange }),
                                        _.a.createElement(ie, { label: re("Category", "wp-post-block"), options: e, value: t, onChange: this.onCategoryChange }),
                                        _.a.createElement(ne, { queryArgs: this.props.queryArgs, clientId: r, onPageChange: this.onPageChange })
                                    );
                                },
                            },
                        ]),
                        t
                );
            })(ce),
            ve = he([
                fe(function (e) {
                    return { setQueryArgs: e("wp-post-block/news-search").setQueryArgs };
                }),
                pe(function (e) {
                    var t = e("core").isResolving;
                    return { categories: e("core").getEntityRecords("taxonomy", "category", { per_page: 25 }), isRequesting: t() };
                }),
                pe(function (e) {
                    return { queryArgs: e("wp-post-block/news-search").getQueryArgs() };
                }),
            ])(de),
            me = wp.i18n.__,
            ge = wp.element,
            be = ge.Fragment,
            ye = ge.Component,
            we = (ge.createElement, wp.components),
            ke = we.PanelBody,
            xe = we.ExternalLink,
            _e = wp.blockEditor.InspectorControls,
            Ee = wp.url.addQueryArgs,
            Ce = wp.blocks.registerBlockStyle,
            je = wp.data.withSelect;
        [
            { name: "normal", label: me("Normal", "wp-post-block"), isDefault: !0 },
            { name: "text-highlight", label: me("Text highlight", "wp-post-block") },
        ].forEach(function (e) {
            return Ce("wp-post-block/article-block", e);
        });
        var Oe = (function (e) {
                function t() {
                    return h()(this, t), g()(this, y()(t).apply(this, arguments));
                }
                return (
                    k()(t, e),
                        v()(t, [
                            {
                                key: "render",
                                value: function () {
                                    var e;
                                    return (
                                        this.props.mediaId && (e = _.a.createElement("div", null, _.a.createElement(xe, { href: Ee("upload.php", { item: this.props.mediaId }) }, me("Edit image", "wp-post-block")))),
                                            _.a.createElement(
                                                be,
                                                null,
                                                _.a.createElement(
                                                    _e,
                                                    null,
                                                    _.a.createElement(
                                                        ke,
                                                        { title: me("Shortcuts", "wp-post-block") },
                                                        _.a.createElement("div", null, _.a.createElement(xe, { className: "", href: Ee("post.php", { post: this.props.id, action: "edit" }) }, me("Edit post", "wp-post-block"))),
                                                        e
                                                    )
                                                )
                                            )
                                    );
                                },
                            },
                        ]),
                        t
                );
            })(ye),
            Pe = je(function (e, t) {
                if (t.id) {
                    var n = e("core").getEntityRecord("postType", "post", t.id);
                    if (n && n.featured_media) return { mediaId: n.featured_media };
                }
            })(Oe),
            Se = (function (e) {
                function t() {
                    return h()(this, t), g()(this, y()(t).apply(this, arguments));
                }
                return (
                    k()(t, e),
                        v()(t, [
                            {
                                key: "render",
                                value: function () {
                                    return _.a.createElement(be, null, _.a.createElement(_e, null, _.a.createElement(ke, { title: me("Change Post", "wp-post-block") }, _.a.createElement(ve, { clientId: this.props.clientId }))));
                                },
                            },
                        ]),
                        t
                );
            })(ye),
            Ne = (wp.element.createElement, wp.i18n.__),
            Ae = wp.element,
            Te = Ae.Component,
            Le = Ae.Fragment,
            Be = wp.blockEditor.InspectorControls,
            Ie = wp.components,
            De = Ie.DropZone,
            Re = Ie.PanelBody,
            Fe = Ie.ToggleControl,
            ze = wp.serverSideRender,
            Me = (function (e) {
                function t() {
                    return h()(this, t), g()(this, y()(t).apply(this, arguments));
                }
                return (
                    k()(t, e),
                        v()(t, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        t = e.option,
                                        n = e.label,
                                        r = e.setAttributes,
                                        o = this.props.attributes.allowedOptions,
                                        a = !!this.props.attributes[t],
                                        i = this.props.extra || !1;
                                    return o.includes("all") || o.includes(t) || i
                                        ? _.a.createElement(Fe, {
                                            label: n,
                                            checked: a,
                                            onChange: function (e) {
                                                r(p()({}, t, e));
                                            },
                                        })
                                        : null;
                                },
                            },
                        ]),
                        t
                );
            })(Te),
            qe = { "is-style-normal": "default", "is-style-vertical-image": "vertical", "is-style-image-highlight": "horizontal", "is-style-text-highlight": "horizontal" },
            Ue = (function (e) {
                function t() {
                    var e;
                    return h()(this, t), ((e = g()(this, y()(t).apply(this, arguments))).onDrop = e.onDrop.bind(l()(e))), e;
                }
                return (
                    k()(t, e),
                        v()(t, [
                            {
                                key: "updateID",
                                value: function (e) {
                                    this.props.setAttributes({ id: e });
                                },
                            },
                            {
                                key: "onDrop",
                                value: function (e) {
                                    var t;
                                    if (e.dataTransfer)
                                        try {
                                            (t = JSON.parse(e.dataTransfer.getData("text")).attributes), this.updateID(t.id);
                                        } catch (e) {}
                                },
                            },
                            {
                                key: "shouldComponentUpdate",
                                value: function (e) {
                                    var t = {};
                                    return (
                                        this.props.attributes.className
                                            ? this.props.attributes.className !== e.attributes.className && (t.imageSize = qe[e.attributes.className])
                                            : ((t.className = e.attributes.className || "is-style-normal"), (t.imageSize = qe[t.className])),
                                            this.props.setAttributes(t),
                                        JSON.stringify(e.attributes) !== JSON.stringify(this.props.attributes)
                                    );
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.attributes,
                                        t = e.allowedOptions;
                                    var n = s()(e, ["allowedOptions"]);
                                    var r = _.a.createElement(De, { onDrop: this.onDrop, label: Ne("Drag a post here", "wp-post-block") });
                                    return e.id
                                        ? _.a.createElement(
                                            Le,
                                            null,
                                            _.a.createElement(
                                                Be,
                                                null,
                                                !!t.length &&
                                                _.a.createElement(
                                                    Re,
                                                    { title: Ne("Post Settings", "wp-post-block") },
                                                    _.a.createElement(Me, a()({ option: "showSection", label: Ne("Show post category", "wp-post-block") }, this.props)),
                                                    _.a.createElement(Me, a()({ option: "showDate", label: Ne("Show post publish date", "wp-post-block") }, this.props)),
                                                    _.a.createElement(Me, a()({ option: "showComments", label: Ne("Show number of comments", "wp-post-block") }, this.props)),
                                                    _.a.createElement(Me, a()({ option: "showAuthor", label: Ne("Show author", "wp-post-block") }, this.props)),
                                                    _.a.createElement(Me, a()({ option: "showLead", label: Ne("Show excerpt", "wp-post-block") }, this.props)),
                                                    _.a.createElement(Me, a()({ option: "useTextShadow", label: Ne("Text shadow", "wp-post-block") }, this.props))
                                                )
                                            ),
                                            _.a.createElement(ze, { block: "wp-post-block/article-block", attributes: n }),
                                            r,
                                            _.a.createElement(Se, this.props),
                                            _.a.createElement(Pe, a()({ id: n.id }, this.props))
                                        )
                                        : _.a.createElement(Le, null, r, _.a.createElement("div", { className: "drag-wrapper dip-article-block" }, Ne("Select or drag a post here", "wp-post-block")), _.a.createElement(Se, this.props));
                                },
                            },
                        ]),
                        t
                );
            })(Te),
            Ge = (n(155), wp.element.createElement, wp.i18n.__);
        (0, wp.blocks.registerBlockType)("wp-post-block/article-block", {
            title: Ge("Post Block", "wp-post-block"),
            description: Ge("Post Block description", "wp-post-block"),
            icon: "welcome-write-blog",
            category: "wp-post-block",
            keywords: [Ge("post"), Ge("block"), Ge("text"), Ge("card")],
            supports: { className: !1 },
            attributes: {
                id: { type: "number" },
                classes: { type: "string", default: "" },
                className: { type: "string", default: "" },
                showSection: { type: "boolean", default: !0 },
                showDate: { type: "boolean", default: !0 },
                showComments: { type: "boolean", default: !0 },
                showAuthor: { type: "boolean", default: !1 },
                showLead: { type: "boolean", default: !0 },
                showContent: { type: "boolean", default: !0 },
                useTextShadow: { type: "boolean", default: !1 },
                displayType: { type: "boolean", default: !0 },
                allowedOptions: { type: "array", default: ["all"] },
                imageSize: { type: "string", default: "" },
            },
            getEditWrapperProps: function (e) {
                return { "data-article-style": e.className || "is-style-normal" };
            },
            edit: Ue,
            save: function () {
                return null;
            },
        });
        wp.element.createElement;
        var $e = wp.element,
            We = $e.Component,
            Je = $e.Fragment,
            Qe = wp.components,
            Ve = (Qe.SelectControl, Qe.PanelBody, Qe.ToggleControl, wp.blockEditor),
            Ye = (Ve.InspectorControls, Ve.InnerBlocks),
            He = wp.hooks.applyFilters,
            Ke = wp.data.dispatch,
            Xe = (function (e) {
                function t(e) {
                    var n;
                    return h()(this, t), ((n = g()(this, y()(t).call(this, e))).toggleFullScreen = n.toggleFullScreen.bind(l()(n))), (n.getTemplate = n.getTemplate.bind(l()(n))), n;
                }
                return (
                    k()(t, e),
                        v()(t, [
                            {
                                key: "toggleFullScreen",
                                value: function () {
                                    var e = this.props,
                                        t = e.attributes;
                                    (0, e.setAttributes)({ fullscreen: !t.fullscreen });
                                },
                            },
                            {
                                key: "getTemplate",
                                value: function () {
                                    var e = this,
                                        t = {
                                            className: "is-style-image-highlight",
                                            imageSize: "headline",
                                            allowedOptions: ["useTextShadow", "showLead", "showSection", "showComments", "showDate"],
                                            displayType: !1,
                                            useTextShadow: !0,
                                            showStatus: !0,
                                            showSection: !0,
                                        },
                                        n = this.props.childBlocks,
                                        r = n.length;
                                    return (
                                        n.forEach(function (n, o) {
                                            var a = t.imageSize,
                                                i = O()({}, t);
                                            (2 === r && 0 === o) || (r >= 4 && o <= 1) || 3 === r
                                                ? (a = "headline")
                                                : (2 === r && 1 === o) || (r >= 4 && o > 1 && o <= 3)
                                                ? (a = "headlineSquare")
                                                : 0 === o && e.props.attributes.fullscreen && (a = "headlineFull"),
                                                (i.imageSize = a),
                                            n.attributes.imageSize !== a && Ke("core/block-editor").updateBlockAttributes(n.clientId, i);
                                        }),
                                            Array(1).fill(["wp-post-block/article-block", {}])
                                    );
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        t = e.attributes,
                                        n = e.setAttributes,
                                        r = He("wp-post-block-headline-lock", "insert");
                                    return (
                                        n({ blocksNumber: this.props.childBlocks.length }),
                                            _.a.createElement(
                                                Je,
                                                null,
                                                _.a.createElement(
                                                    "div",
                                                    { className: L()(t.wrapperClassesFn(t, this.props.childBlocks.length), "edit-mode") },
                                                    _.a.createElement(Ye, { templateLock: r, template: this.getTemplate(), allowedBlocks: ["wp-post-block/article-block"] })
                                                )
                                            )
                                    );
                                },
                            },
                        ]),
                        t
                );
            })(We),
            Ze = Object(r.a)(Xe),
            et = (n(156), wp.element.createElement, wp.blockEditor.InnerBlocks),
            tt = wp.blocks.registerBlockType,
            nt = wp.i18n.__,
            rt = {
                fullscreen: { type: "boolean", default: !1 },
                wrapperClassesFn: {
                    default: function (e, t) {
                        var n = "headline-wrapper";
                        return e.fullscreen && (n += " headline-full"), (n += " blocks-" + Math.min(t || e.blocksNumber, 4));
                    },
                },
                blocksNumber: { type: "number", default: 0 },
            },
            ot = Ze;
        tt("wp-post-block/headline-block", {
            title: nt("Headline block", "wp-post-block"),
            description: nt("Block that represents a headline", "wp-post-block"),
            icon: "cover-image",
            category: "wp-post-block",
            keywords: [nt("post"), nt("head"), nt("headline"), nt("block"), nt("text"), nt("highlight")],
            supports: { reusable: !1, html: !1 },
            attributes: rt,
            edit: ot,
            save: function (e) {
                var t = e.attributes,
                    n = e.innerBlocks;
                return _.a.createElement("div", { className: t.wrapperClassesFn(t, n.length) }, _.a.createElement(et.Content, null));
            },
        });
        var at = wp.element,
            it = (at.createElement, at.Component),
            st = at.Fragment,
            ct = wp.blockEditor,
            lt = ct.InspectorControls,
            ut = ct.InnerBlocks,
            pt = wp.components,
            ft = pt.PanelBody,
            ht = pt.TextControl,
            dt = wp.i18n.__,
            vt = (function (e) {
                function t() {
                    return h()(this, t), g()(this, y()(t).apply(this, arguments));
                }
                return (
                    k()(t, e),
                        v()(t, [
                            {
                                key: "renderTitle",
                                value: function () {
                                    var e = this.props.attributes.sectionTitle || dt("Grid title", "wp-post-block");
                                    return _.a.createElement("h2", { className: "section-title" }, e);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this;
                                    return _.a.createElement(
                                        st,
                                        null,
                                        _.a.createElement(
                                            lt,
                                            null,
                                            _.a.createElement(
                                                ft,
                                                { title: dt("Grid Settings", "wp-post-block"), className: "blocks-font-size" },
                                                _.a.createElement(ht, {
                                                    label: dt("Grid title", "wp-post-block"),
                                                    help: dt("The headline of the section", "wp-post-block"),
                                                    value: this.props.attributes.sectionTitle || "",
                                                    onChange: function (t) {
                                                        e.props.setAttributes({ sectionTitle: t });
                                                    },
                                                })
                                            )
                                        ),
                                        _.a.createElement("div", { className: "dip-block-container section-block-container" }, this.renderTitle(), _.a.createElement(ut, { template: [], allowedBlocks: ["wp-post-block/article-block"] }))
                                    );
                                },
                            },
                        ]),
                        t
                );
            })(it),
            mt = Object(r.a)(vt),
            gt = (n(157), wp.i18n.__),
            bt = wp.blockEditor.InnerBlocks,
            yt = (wp.element.createElement, { sectionTitle: { type: "string", default: "" } });
        function wt(e) {
            return e ? _.a.createElement("h2", null, e) : "";
        }
        (0, wp.blocks.registerBlockType)("wp-post-block/section-block", {
            title: gt("Grid Block", "wp-post-block"),
            icon: "grid-view",
            category: "wp-post-block",
            description: gt("A container for other blocks.", "wp-post-block"),
            keywords: [gt("post"), gt("grid"), gt("section"), gt("block"), gt("category")],
            supports: { reusable: !1, html: !1, align: ["wide", "full"] },
            attributes: yt,
            edit: mt,
            save: function (e) {
                var t = e.attributes.sectionTitle;
                return _.a.createElement("div", { className: "dip-block-container section-block-container" }, wt(t), _.a.createElement(bt.Content, null));
            },
            deprecated: [
                {
                    attributes: yt,
                    save: function (e) {
                        var t = e.attributes.sectionTitle;
                        return _.a.createElement("div", { className: "section-block-container" }, wt(t), _.a.createElement(bt.Content, null));
                    },
                },
            ],
        });
        n(162);
        var kt = n(33),
            xt = n.n(kt),
            _t = n(34),
            Et = n.n(_t),
            Ct = wp.apiFetch,
            jt = wp.data.registerStore,
            Ot = wp.url.addQueryArgs,
            Pt = function (e) {
                return JSON.stringify(e);
            },
            St = { queryArgs: { categories: "", search: "", order: "desc", orderby: "date", page: 1, per_page: 8 }, searchResults: [] },
            Nt = {
                setQueryArgs: function (e) {
                    return { type: "SET_QUERY_ARGS", queryArgs: e };
                },
                updateResults: function (e, t) {
                    return { type: "UPDATE_RESULTS", results: e, key: t };
                },
                fetchFromAPI: function (e, t) {
                    return { type: "FETCH_FROM_API", path: e, args: t };
                },
                fetchResponseBody: function (e) {
                    return { type: "FETCH_RESPONSE_BODY", response: e };
                },
            };
        jt("wp-post-block/news-search", {
            reducer: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : St,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case "UPDATE_RESULTS":
                        return O()({}, e, { searchResults: O()({}, e.searchResults, p()({}, t.key, t.results)) });
                    case "SET_QUERY_ARGS":
                        return O()({}, e, { queryArgs: O()({}, e.queryArgs, t.queryArgs) });
                }
                return e;
            },
            actions: Nt,
            selectors: {
                getResults: function (e, t) {
                    var n = Pt(t);
                    return e.searchResults[n];
                },
                getQueryArgs: function (e) {
                    return e.queryArgs;
                },
            },
            controls: {
                FETCH_FROM_API: function (e) {
                    return Ct({ path: Ot(e.path, e.args), parse: !1 });
                },
                FETCH_RESPONSE_BODY: function (e) {
                    return e.response;
                },
            },
            resolvers: {
                getResults: xt.a.mark(function e(t) {
                    var n, r, o, a, i, s;
                    return xt.a.wrap(function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), Nt.fetchFromAPI("/wp/v2/posts/", t);
                                case 2:
                                    return (n = e.sent), (e.next = 5), Nt.fetchResponseBody(n.json());
                                case 5:
                                    return (
                                        (r = e.sent),
                                            (o = Et()(n.headers && n.headers.get("X-WP-TotalPages"))),
                                            (a = Et()(n.headers && n.headers.get("X-WP-Total"))),
                                            (i = { results: r, totalPages: o, totalResults: a }),
                                            (s = Pt(t)),
                                            e.abrupt("return", Nt.updateResults(i, s))
                                    );
                                case 11:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                }),
            },
        });
        try {
            n(165);
        } catch (e) {}
    },
    function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0),
            o = n.n(r),
            a = n(56),
            i = n.n(a),
            s = n(1),
            c = n.n(s),
            l = n(2),
            u = n.n(l),
            p = n(3),
            f = n.n(p),
            h = n(4),
            d = n.n(h),
            v = n(6),
            m = n.n(v),
            g = n(5),
            b = n.n(g),
            y = n(11),
            w = (wp.element.createElement, wp.element),
            k = w.Component,
            x = w.Fragment,
            _ = wp.components,
            E = _.PanelBody,
            C = _.TextControl,
            j = wp.blockEditor,
            O = j.InspectorControls,
            P = j.InnerBlocks,
            S = wp.i18n.__,
            N = wp.data.dispatch,
            A = (function (e) {
                function t(e) {
                    var n;
                    return c()(this, t), ((n = f()(this, d()(t).call(this, e))).getTemplate = n.getTemplate.bind(m()(n))), (n.fixArticlesAttrs = n.fixArticlesAttrs.bind(m()(n))), n;
                }
                return (
                    b()(t, e),
                        u()(t, [
                            {
                                key: "renderTitle",
                                value: function () {
                                    return this.props.attributes.sectionTitle ? o.a.createElement("h2", null, this.props.attributes.sectionTitle) : "";
                                },
                            },
                            {
                                key: "getTemplate",
                                value: function () {
                                    var e = this.getArticleAttrs();
                                    return [["wp-post-block/article-block", this.getArticleAttrs(!0)]].concat(i()(Array(4).fill(["wp-post-block/article-block", e])));
                                },
                            },
                            {
                                key: "getArticleAttrs",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    return {
                                        allowedOptions: e ? ["showSection"] : [],
                                        className: e ? "is-style-text-highlight" : "is-style-image-highlight",
                                        displayType: !1,
                                        imageSize: e ? "horizontal" : "multimediaSmall",
                                        useTextShadow: !e,
                                        showAuthor: !1,
                                        showContent: !0,
                                        showLead: e,
                                        showSection: e,
                                    };
                                },
                            },
                            {
                                key: "fixArticlesAttrs",
                                value: function () {
                                    var e = this;
                                    this.props.childBlocks.forEach(function (t, n) {
                                        var r = e.getArticleAttrs(0 === n);
                                        t.attributes.className !== r.className && N("core/block-editor").updateBlockAttributes(t.clientId, r);
                                    });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this;
                                    return (
                                        this.fixArticlesAttrs(),
                                            o.a.createElement(
                                                x,
                                                null,
                                                o.a.createElement(
                                                    O,
                                                    null,
                                                    o.a.createElement(
                                                        E,
                                                        { title: S("Block Settings", "wp-post-block") },
                                                        o.a.createElement(C, {
                                                            label: S("Block title", "wp-post-block"),
                                                            value: this.props.attributes.sectionTitle || "",
                                                            onChange: function (t) {
                                                                e.props.setAttributes({ sectionTitle: t });
                                                            },
                                                        })
                                                    )
                                                ),
                                                o.a.createElement("div", { className: "multimedia-block-wrapper" }, this.renderTitle(), o.a.createElement(P, { template: this.getTemplate(), allowedBlocks: ["wp-post-block/article-block"] }))
                                            )
                                    );
                                },
                            },
                        ]),
                        t
                );
            })(k),
            T = Object(y.a)(A),
            L = (n(161), wp.element.createElement, wp.blockEditor.InnerBlocks),
            B = wp.blocks.registerBlockType,
            I = wp.i18n.__,
            D = { sectionTitle: { type: "string", default: I("Multimedia", "wp-post-block") } },
            R = T;
    },
]);