var LARGE_SIZE_DOT = ( this.largeSize = window.Modernizr.touch ? 50 : 35 );
var gUpwardOnly = false;

/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
/*!
 * Sizzle CSS Selector Engine v1.10.2
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03
 */
/*! Hammer.JS - v1.0.9 - 2014-03-18
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */
/*! jQuery plugin for Hammer.JS - v1.0.1 - 2014-02-03
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */
/** @license MIT License (c) copyright 2011-2013 original author or authors */
/**
 * A lightweight CommonJS Promises/A and when() implementation
 * when is part of the cujo.js family of libraries (http://cujojs.com/)
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author Brian Cavalier
 * @author John Hann
 * @version 2.5.1
 */
// Copyright 2013 jQuery Foundation and other contributors
/**
 * PhysicsJS v1.0.0-rc1 - 2014-04-09
 * A modular, extendable, and easy-to-use physics engine for javascript
 * http://wellcaffeinated.net/PhysicsJS
 *
 * Copyright (c) 2014 Jasper Palfree <jasper@wellcaffeinated.net>
 * Licensed MIT
 */
/**
 * @license
 * Lo-Dash 2.2.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash modern exports="none" iife="(function(window){%output%;lodash.extend(Physics.util, lodash);}(this));" include="isObject,isFunction,isArray,isPlainObject,uniqueId,uniq,filter,find,each,random,defaults,extend,transform,clone,throttle,bind,sortedIndex,shuffle" --minify --output lib/lodash.js`
 */
/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function (e, t) {
    function H(e) {
        var t = e.length,
            n = w.type(e);
        return w.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
    }

    function j(e) {
        var t = B[e] = {};
        return w.each(e.match(S) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function q(e, n, r, i) {
        if (!w.acceptData(e)) return;
        var s, o, u = w.expando,
            a = e.nodeType,
            f = a ? w.cache : e,
            l = a ? e[u] : e[u] && u;
        if ((!l || !f[l] || !i && !f[l].data) && r === t && typeof n == "string") return;
        l || (a ? l = e[u] = c.pop() || w.guid++ : l = u), f[l] || (f[l] = a ? {} : {
            toJSON: w.noop
        });
        if (typeof n == "object" || typeof n == "function") i ? f[l] = w.extend(f[l], n) : f[l].data = w.extend(f[l].data, n);
        return o = f[l], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[w.camelCase(n)] = r), typeof n == "string" ? (s = o[n], s == null && (s = o[w.camelCase(n)])) : s = o, s
    }

    function R(e, t, n) {
        if (!w.acceptData(e)) return;
        var r, i, s = e.nodeType,
            o = s ? w.cache : e,
            u = s ? e[w.expando] : w.expando;
        if (!o[u]) return;
        if (t) {
            r = n ? o[u] : o[u].data;
            if (r) {
                w.isArray(t) ? t = t.concat(w.map(t, w.camelCase)) : t in r ? t = [t] : (t = w.camelCase(t), t in r ? t = [t] : t = t.split(" ")), i = t.length;
                while (i--) delete r[t[i]];
                if (n ? !z(r) : !w.isEmptyObject(r)) return
            }
        }
        if (!n) {
            delete o[u].data;
            if (!z(o[u])) return
        }
        s ? w.cleanData([e], !0) : w.support.deleteExpando || o != o.window ? delete o[u] : o[u] = null
    }

    function U(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(I, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : F.test(r) ? w.parseJSON(r) : r
                } catch (s) {}
                w.data(e, n, r)
            } else r = t
        }
        return r
    }

    function z(e) {
        var t;
        for (t in e) {
            if (t === "data" && w.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function it() {
        return !0
    }

    function st() {
        return !1
    }

    function ot() {
        try {
            return o.activeElement
        } catch (e) {}
    }

    function ct(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function ht(e, t, n) {
        if (w.isFunction(t)) return w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return w.grep(e, function (e) {
            return e === t !== n
        });
        if (typeof t == "string") {
            if (ut.test(t)) return w.filter(t, e, n);
            t = w.filter(t, e)
        }
        return w.grep(e, function (e) {
            return w.inArray(e, t) >= 0 !== n
        })
    }

    function pt(e) {
        var t = dt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Mt(e, t) {
        return w.nodeName(e, "table") && w.nodeName(t.nodeType === 1 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function _t(e) {
        return e.type = (w.find.attr(e, "type") !== null) + "/" + e.type, e
    }

    function Dt(e) {
        var t = Ct.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Pt(e, t) {
        var n, r = 0;
        for (;
            (n = e[r]) != null; r++) w._data(n, "globalEval", !t || w._data(t[r], "globalEval"))
    }

    function Ht(e, t) {
        if (t.nodeType !== 1 || !w.hasData(e)) return;
        var n, r, i, s = w._data(e),
            o = w._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++) w.event.add(t, n, u[n][r])
        }
        o.data && (o.data = w.extend({}, o.data))
    }

    function Bt(e, t) {
        var n, r, i;
        if (t.nodeType !== 1) return;
        n = t.nodeName.toLowerCase();
        if (!w.support.noCloneEvent && t[w.expando]) {
            i = w._data(t);
            for (r in i.events) w.removeEvent(t, r, i.handle);
            t.removeAttribute(w.expando)
        }
        if (n === "script" && t.text !== e.text) _t(t).text = e.text, Dt(t);
        else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML), w.support.html5Clone && e.innerHTML && !w.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
        else if (n === "input" && xt.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
        else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected;
        else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
    }

    function jt(e, n) {
        var r, s, o = 0,
            u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!u)
            for (u = [], r = e.childNodes || e;
                (s = r[o]) != null; o++)!n || w.nodeName(s, n) ? u.push(s) : w.merge(u, jt(s, n));
        return n === t || n && w.nodeName(e, n) ? w.merge([e], u) : u
    }

    function Ft(e) {
        xt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--) {
            t = en[i] + n;
            if (t in e) return t
        }
        return r
    }

    function nn(e, t) {
        return e = t || e, w.css(e, "display") === "none" || !w.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, s = [],
            o = 0,
            u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            s[o] = w._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && nn(r) && (s[o] = w._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && n !== "none" || !i) && w._data(r, "olddisplay", i ? n : w.css(r, "display")))
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none"
        }
        return e
    }

    function sn(e, t, n) {
        var r = $t.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function on(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            o = 0;
        for (; s < 4; s += 2) n === "margin" && (o += w.css(e, n + Zt[s], !0, i)), r ? (n === "content" && (o -= w.css(e, "padding" + Zt[s], !0, i)), n !== "margin" && (o -= w.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += w.css(e, "padding" + Zt[s], !0, i), n !== "padding" && (o += w.css(e, "border" + Zt[s] + "Width", !0, i)));
        return o
    }

    function un(e, t, n) {
        var r = !0,
            i = t === "width" ? e.offsetWidth : e.offsetHeight,
            s = qt(e),
            o = w.support.boxSizing && w.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = Rt(e, t, s);
            if (i < 0 || i == null) i = e.style[t];
            if (Jt.test(i)) return i;
            r = o && (w.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function an(e) {
        var t = o,
            n = Qt[e];
        if (!n) {
            n = fn(e, t);
            if (n === "none" || !n) It = (It || w("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = fn(e, t), It.detach();
            Qt[e] = n
        }
        return n
    }

    function fn(e, t) {
        var n = w(t.createElement(e)).appendTo(t.body),
            r = w.css(n[0], "display");
        return n.remove(), r
    }

    function vn(e, t, n, r) {
        var i;
        if (w.isArray(t)) w.each(t, function (t, i) {
            n || cn.test(e) ? r(e, i) : vn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && w.type(t) === "object")
            for (i in t) vn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function _n(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(S) || [];
            if (w.isFunction(n))
                while (r = s[i++]) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Dn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, w.each(e[u] || [], function (e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
                if (s) return !(a = f)
            }), a
        }
        var i = {},
            s = e === An;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function Pn(e, n) {
        var r, i, s = w.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        return r && w.extend(!0, e, r), e
    }

    function Hn(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes;
        while (f[0] === "*") f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
        if (s)
            for (u in a)
                if (a[u] && a[u].test(s)) {
                    f.unshift(u);
                    break
                }
        if (f[0] in r) o = f[0];
        else {
            for (u in r) {
                if (!f[0] || e.converters[u + " " + f[0]]) {
                    o = u;
                    break
                }
                i || (i = u)
            }
            o = o || i
        } if (o) return o !== f[0] && f.unshift(o), r[o]
    }

    function Bn(e, t, n, r) {
        var i, s, o, u, a, f = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s) {
            e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift();
            if (s)
                if (s === "*") s = a;
                else if (a !== "*" && a !== s) {
                o = f[a + " " + s] || f["* " + s];
                if (!o)
                    for (i in f) {
                        u = i.split(" ");
                        if (u[1] === s) {
                            o = f[a + " " + u[0]] || f["* " + u[0]];
                            if (o) {
                                o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                                break
                            }
                        }
                    }
                if (o !== !0)
                    if (o && e["throws"]) t = o(t);
                    else try {
                        t = o(t)
                    } catch (c) {
                        return {
                            state: "parsererror",
                            error: o ? c : "No conversion from " + a + " to " + s
                        }
                    }
            }
        }
        return {
            state: "success",
            data: t
        }
    }

    function zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function Wn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function Yn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = w.now()
    }

    function Zn(e, t, n) {
        var r, i = (Gn[t] || []).concat(Gn["*"]),
            s = 0,
            o = i.length;
        for (; s < o; s++)
            if (r = i[s].call(n, t, e)) return r
    }

    function er(e, t, n) {
        var r, i, s = 0,
            o = Qn.length,
            u = w.Deferred().always(function () {
                delete a.elem
            }),
            a = function () {
                if (i) return !1;
                var t = Xn || Yn(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    s = 1 - r,
                    o = 0,
                    a = f.tweens.length;
                for (; o < a; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Yn(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    i = !0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        tr(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = Qn[s].call(f, e, l, f.opts);
            if (r) return r
        }
        return w.map(l, Zn, f), w.isFunction(f.opts.start) && f.opts.start.call(e, f), w.fx.timer(w.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function tr(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = w.camelCase(n), i = t[r], s = e[n], w.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = w.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function nr(e, t, n) {
        var r, i, s, o, u, a, f = this,
            l = {},
            c = e.style,
            h = e.nodeType && nn(e),
            p = w._data(e, "fxshow");
        n.queue || (u = w._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function () {
            u.unqueued || a()
        }), u.unqueued++, f.always(function () {
            f.always(function () {
                u.unqueued--, w.queue(e, "fx").length || u.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [c.overflow, c.overflowX, c.overflowY], w.css(e, "display") === "inline" && w.css(e, "float") === "none" && (!w.support.inlineBlockNeedsLayout || an(e.nodeName) === "inline" ? c.display = "inline-block" : c.zoom = 1)), n.overflow && (c.overflow = "hidden", w.support.shrinkWrapBlocks || f.always(function () {
            c.overflow = n.overflow[0], c.overflowX = n.overflow[1], c.overflowY = n.overflow[2]
        }));
        for (r in t) {
            i = t[r];
            if ($n.exec(i)) {
                delete t[r], s = s || i === "toggle";
                if (i === (h ? "hide" : "show")) continue;
                l[r] = p && p[r] || w.style(e, r)
            }
        }
        if (!w.isEmptyObject(l)) {
            p ? "hidden" in p && (h = p.hidden) : p = w._data(e, "fxshow", {}), s && (p.hidden = !h), h ? w(e).show() : f.done(function () {
                w(e).hide()
            }), f.done(function () {
                var t;
                w._removeData(e, "fxshow");
                for (t in l) w.style(e, t, l[t])
            });
            for (r in l) o = Zn(h ? p[r] : 0, r, f), r in p || (p[r] = o.start, h && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    function ir(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function sr(e) {
        return w.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = typeof t,
        s = e.location,
        o = e.document,
        u = o.documentElement,
        a = e.jQuery,
        f = e.$,
        l = {},
        c = [],
        h = "1.10.2",
        p = c.concat,
        d = c.push,
        v = c.slice,
        m = c.indexOf,
        g = l.toString,
        y = l.hasOwnProperty,
        b = h.trim,
        w = function (e, t) {
            return new w.fn.init(e, t, r)
        },
        E = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        S = /\S+/g,
        x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        C = /^[\],:{}\s]*$/,
        k = /(?:^|:|,)(?:\s*\[)+/g,
        L = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        O = /^-ms-/,
        M = /-([\da-z])/gi,
        _ = function (e, t) {
            return t.toUpperCase()
        },
        D = function (e) {
            if (o.addEventListener || e.type === "load" || o.readyState === "complete") P(), w.ready()
        },
        P = function () {
            o.addEventListener ? (o.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1)) : (o.detachEvent("onreadystatechange", D), e.detachEvent("onload", D))
        };
    w.fn = w.prototype = {
        jquery: h,
        constructor: w,
        init: function (e, n, r) {
            var i, s;
            if (!e) return this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = T.exec(e);
                if (i && (i[1] || !n)) {
                    if (i[1]) {
                        n = n instanceof w ? n[0] : n, w.merge(this, w.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0));
                        if (N.test(i[1]) && w.isPlainObject(n))
                            for (i in n) w.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    s = o.getElementById(i[2]);
                    if (s && s.parentNode) {
                        if (s.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = s
                    }
                    return this.context = o, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : w.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function () {
            return v.call(this)
        },
        get: function (e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return w.each(this, e, t)
        },
        ready: function (e) {
            return w.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(v.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: d,
        sort: [].sort,
        splice: [].splice
    }, w.fn.init.prototype = w.fn, w.extend = w.fn.extend = function () {
        var e, n, r, i, s, o, u = arguments[0] || {},
            a = 1,
            f = arguments.length,
            l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !w.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)
            if ((s = arguments[a]) != null)
                for (i in s) {
                    e = u[i], r = s[i];
                    if (u === r) continue;
                    l && r && (w.isPlainObject(r) || (n = w.isArray(r))) ? (n ? (n = !1, o = e && w.isArray(e) ? e : []) : o = e && w.isPlainObject(e) ? e : {}, u[i] = w.extend(l, o, r)) : r !== t && (u[i] = r)
                }
            return u
    }, w.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        noConflict: function (t) {
            return e.$ === w && (e.$ = f), t && e.jQuery === w && (e.jQuery = a), w
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? w.readyWait++ : w.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? --w.readyWait : w.isReady) return;
            if (!o.body) return setTimeout(w.ready);
            w.isReady = !0;
            if (e !== !0 && --w.readyWait > 0) return;
            n.resolveWith(o, [w]), w.fn.trigger && w(o).trigger("ready").off("ready")
        },
        isFunction: function (e) {
            return w.type(e) === "function"
        },
        isArray: Array.isArray || function (e) {
            return w.type(e) === "array"
        },
        isWindow: function (e) {
            return e != null && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? l[g.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            var n;
            if (!e || w.type(e) !== "object" || e.nodeType || w.isWindow(e)) return !1;
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            if (w.support.ownLast)
                for (n in e) return y.call(e, n);
            for (n in e);
            return n === t || y.call(e, n)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw new Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || typeof e != "string") return null;
            typeof t == "boolean" && (n = t, t = !1), t = t || o;
            var r = N.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = w.buildFragment([e], t, i), i && w(i).remove(), w.merge([], r.childNodes))
        },
        parseJSON: function (t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (t === null) return t;
            if (typeof t == "string") {
                t = w.trim(t);
                if (t && C.test(t.replace(L, "@").replace(A, "]").replace(k, ""))) return (new Function("return " + t))()
            }
            w.error("Invalid JSON: " + t)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && w.error("Invalid XML: " + n), r
        },
        noop: function () {},
        globalEval: function (t) {
            t && w.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(O, "ms-").replace(M, _)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, n) {
            var r, i = 0,
                s = e.length,
                o = H(e);
            if (n)
                if (o)
                    for (; i < s; i++) {
                        r = t.apply(e[i], n);
                        if (r === !1) break
                    } else
                        for (i in e) {
                            r = t.apply(e[i], n);
                            if (r === !1) break
                        } else if (o)
                            for (; i < s; i++) {
                                r = t.call(e[i], i, e[i]);
                                if (r === !1) break
                            } else
                                for (i in e) {
                                    r = t.call(e[i], i, e[i]);
                                    if (r === !1) break
                                }
                        return e
        },
        trim: b && !b.call("﻿ ") ? function (e) {
            return e == null ? "" : b.call(e)
        } : function (e) {
            return e == null ? "" : (e + "").replace(x, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return e != null && (H(Object(e)) ? w.merge(n, typeof e == "string" ? [e] : e) : d.call(n, e)), n
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (m) return m.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if (typeof r == "number")
                for (; s < r; s++) e[i++] = n[s];
            else
                while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !!n;
            for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function (e, t, n) {
            var r, i = 0,
                s = e.length,
                o = H(e),
                u = [];
            if (o)
                for (; i < s; i++) r = t(e[i], i, n), r != null && (u[u.length] = r);
            else
                for (i in e) r = t(e[i], i, n), r != null && (u[u.length] = r);
            return p.apply([], u)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, s;
            return typeof n == "string" && (s = e[n], n = e, e = s), w.isFunction(e) ? (r = v.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(v.call(arguments)))
            }, i.guid = e.guid = e.guid || w.guid++, i) : t
        },
        access: function (e, n, r, i, s, o, u) {
            var a = 0,
                f = e.length,
                l = r == null;
            if (w.type(r) === "object") {
                s = !0;
                for (a in r) w.access(e, n, a, r[a], !0, o, u)
            } else if (i !== t) {
                s = !0, w.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function (e, t, n) {
                    return l.call(w(e), n)
                }));
                if (n)
                    for (; a < f; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)))
            }
            return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
        },
        now: function () {
            return (new Date).getTime()
        },
        swap: function (e, t, n, r) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t) e.style[s] = o[s];
            return i
        }
    }), w.ready.promise = function (t) {
        if (!n) {
            n = w.Deferred();
            if (o.readyState === "complete") setTimeout(w.ready);
            else if (o.addEventListener) o.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1);
            else {
                o.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
                var r = !1;
                try {
                    r = e.frameElement == null && o.documentElement
                } catch (i) {}
                r && r.doScroll && function s() {
                    if (!w.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (e) {
                            return setTimeout(s, 50)
                        }
                        P(), w.ready()
                    }
                }()
            }
        }
        return n.promise(t)
    }, w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }), r = w(o),
    function (e, t) {
        function ot(e, t, n, i) {
            var s, o, u, a, f, l, p, m, g, w;
            (t ? t.ownerDocument || t : E) !== h && c(t), t = t || h, n = n || [];
            if (!e || typeof e != "string") return n;
            if ((a = t.nodeType) !== 1 && a !== 9) return [];
            if (d && !i) {
                if (s = Z.exec(e))
                    if (u = s[1]) {
                        if (a === 9) {
                            o = t.getElementById(u);
                            if (!o || !o.parentNode) return n;
                            if (o.id === u) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && y(t, o) && o.id === u) return n.push(o), n
                    } else {
                        if (s[2]) return H.apply(n, t.getElementsByTagName(e)), n;
                        if ((u = s[3]) && r.getElementsByClassName && t.getElementsByClassName) return H.apply(n, t.getElementsByClassName(u)), n
                    }
                if (r.qsa && (!v || !v.test(e))) {
                    m = p = b, g = t, w = a === 9 && e;
                    if (a === 1 && t.nodeName.toLowerCase() !== "object") {
                        l = mt(e), (p = t.getAttribute("id")) ? m = p.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", f = l.length;
                        while (f--) l[f] = m + gt(l[f]);
                        g = $.test(e) && t.parentNode || t, w = l.join(",")
                    }
                    if (w) try {
                        return H.apply(n, g.querySelectorAll(w)), n
                    } catch (S) {} finally {
                        p || t.removeAttribute("id")
                    }
                }
            }
            return Nt(e.replace(W, "$1"), t, n, i)
        }

        function ut() {
            function t(n, r) {
                return e.push(n += " ") > s.cacheLength && delete t[e.shift()], t[n] = r
            }
            var e = [];
            return t
        }

        function at(e) {
            return e[b] = !0, e
        }

        function ft(e) {
            var t = h.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function lt(e, t) {
            var n = e.split("|"),
                r = e.length;
            while (r--) s.attrHandle[n[r]] = t
        }

        function ct(e, t) {
            var n = t && e,
                r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || O) - (~e.sourceIndex || O);
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ht(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }

        function pt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }

        function dt(e) {
            return at(function (t) {
                return t = +t, at(function (n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function vt() {}

        function mt(e, t) {
            var n, r, i, o, u, a, f, l = N[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = s.preFilter;
            while (u) {
                if (!n || (r = X.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(i = []);
                n = !1;
                if (r = V.exec(u)) n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(W, " ")
                }), u = u.slice(n.length);
                for (o in s.filter)(r = G[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), u = u.slice(n.length));
                if (!n) break
            }
            return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
        }

        function gt(e) {
            var t = 0,
                n = e.length,
                r = "";
            for (; t < n; t++) r += e[t].value;
            return r
        }

        function yt(e, t, n) {
            var r = t.dir,
                s = n && r === "parentNode",
                o = x++;
            return t.first ? function (t, n, i) {
                while (t = t[r])
                    if (t.nodeType === 1 || s) return e(t, n, i)
            } : function (t, n, u) {
                var a, f, l, c = S + " " + o;
                if (u) {
                    while (t = t[r])
                        if (t.nodeType === 1 || s)
                            if (e(t, n, u)) return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || s) {
                            l = t[b] || (t[b] = {});
                            if ((f = l[r]) && f[0] === c) {
                                if ((a = f[1]) === !0 || a === i) return a === !0
                            } else {
                                f = l[r] = [c], f[1] = e(t, n, u) || i;
                                if (f[1] === !0) return !0
                            }
                        }
            }
        }

        function bt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function wt(e, t, n, r, i) {
            var s, o = [],
                u = 0,
                a = e.length,
                f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i)) o.push(s), f && t.push(u);
            return o
        }

        function Et(e, t, n, r, i, s) {
            return r && !r[b] && (r = Et(r)), i && !i[b] && (i = Et(i, s)), at(function (s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || Tt(t || "*", u.nodeType ? [u] : u, []),
                    m = e && (s || !t) ? wt(v, h, e, u, a) : v,
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = wt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)
                        if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? j.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = wt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : H.apply(o, g)
            })
        }

        function St(e) {
            var t, n, r, i = e.length,
                o = s.relative[e[0].type],
                u = o || s.relative[" "],
                a = o ? 1 : 0,
                l = yt(function (e) {
                    return e === t
                }, u, !0),
                c = yt(function (e) {
                    return j.call(t, e) > -1
                }, u, !0),
                h = [
                    function (e, n, r) {
                        return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                    }
                ];
            for (; a < i; a++)
                if (n = s.relative[e[a].type]) h = [yt(bt(h), n)];
                else {
                    n = s.filter[e[a].type].apply(null, e[a].matches);
                    if (n[b]) {
                        r = ++a;
                        for (; r < i; r++)
                            if (s.relative[e[r].type]) break;
                        return Et(a > 1 && bt(h), a > 1 && gt(e.slice(0, a - 1).concat({
                            value: e[a - 2].type === " " ? "*" : ""
                        })).replace(W, "$1"), n, a < r && St(e.slice(a, r)), r < i && St(e = e.slice(r)), r < i && gt(e))
                    }
                    h.push(n)
                }
            return bt(h)
        }

        function xt(e, t) {
            var n = 0,
                r = t.length > 0,
                o = e.length > 0,
                u = function (u, a, l, c, p) {
                    var d, v, m, g = [],
                        y = 0,
                        b = "0",
                        w = u && [],
                        E = p != null,
                        x = f,
                        T = u || o && s.find.TAG("*", p && a.parentNode || a),
                        N = S += x == null ? 1 : Math.random() || .1;
                    E && (f = a !== h && a, i = n);
                    for (;
                        (d = T[b]) != null; b++) {
                        if (o && d) {
                            v = 0;
                            while (m = e[v++])
                                if (m(d, a, l)) {
                                    c.push(d);
                                    break
                                }
                            E && (S = N, i = ++n)
                        }
                        r && ((d = !m && d) && y--, u && w.push(d))
                    }
                    y += b;
                    if (r && b !== y) {
                        v = 0;
                        while (m = t[v++]) m(w, g, a, l);
                        if (u) {
                            if (y > 0)
                                while (b--)!w[b] && !g[b] && (g[b] = D.call(c));
                            g = wt(g)
                        }
                        H.apply(c, g), E && !u && g.length > 0 && y + t.length > 1 && ot.uniqueSort(c)
                    }
                    return E && (S = N, f = x), w
                };
            return r ? at(u) : u
        }

        function Tt(e, t, n) {
            var r = 0,
                i = t.length;
            for (; r < i; r++) ot(e, t[r], n);
            return n
        }

        function Nt(e, t, n, i) {
            var o, u, f, l, c, h = mt(e);
            if (!i && h.length === 1) {
                u = h[0] = h[0].slice(0);
                if (u.length > 2 && (f = u[0]).type === "ID" && r.getById && t.nodeType === 9 && d && s.relative[u[1].type]) {
                    t = (s.find.ID(f.matches[0].replace(rt, it), t) || [])[0];
                    if (!t) return n;
                    e = e.slice(u.shift().value.length)
                }
                o = G.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    f = u[o];
                    if (s.relative[l = f.type]) break;
                    if (c = s.find[l])
                        if (i = c(f.matches[0].replace(rt, it), $.test(u[0].type) && t.parentNode || t)) {
                            u.splice(o, 1), e = i.length && gt(u);
                            if (!e) return H.apply(n, i), n;
                            break
                        }
                }
            }
            return a(e, h)(i, t, !d, n, $.test(e)), n
        }
        var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b = "sizzle" + -(new Date),
            E = e.document,
            S = 0,
            x = 0,
            T = ut(),
            N = ut(),
            C = ut(),
            k = !1,
            L = function (e, t) {
                return e === t ? (k = !0, 0) : 0
            },
            A = typeof t,
            O = 1 << 31,
            M = {}.hasOwnProperty,
            _ = [],
            D = _.pop,
            P = _.push,
            H = _.push,
            B = _.slice,
            j = _.indexOf || function (e) {
                var t = 0,
                    n = this.length;
                for (; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            },
            F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            R = q.replace("w", "w#"),
            U = "\\[" + I + "*(" + q + ")" + I + "*(?:([*^$|!~]?=)" + I + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + R + ")|)|)" + I + "*\\]",
            z = ":(" + q + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + U.replace(3, 8) + ")*)|.*)\\)|)",
            W = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            X = new RegExp("^" + I + "*," + I + "*"),
            V = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            $ = new RegExp(I + "*[+~]"),
            J = new RegExp("=" + I + "*([^\\]'\"]*)" + I + "*\\]", "g"),
            K = new RegExp(z),
            Q = new RegExp("^" + R + "$"),
            G = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + U),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + F + ")$", "i"),
                needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            et = /^(?:input|select|textarea|button)$/i,
            tt = /^h\d$/i,
            nt = /'|\\/g,
            rt = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
            it = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            };
        try {
            H.apply(_ = B.call(E.childNodes), E.childNodes), _[E.childNodes.length].nodeType
        } catch (st) {
            H = {
                apply: _.length ? function (e, t) {
                    P.apply(e, B.call(t))
                } : function (e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        u = ot.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, r = ot.support = {}, c = ot.setDocument = function (e) {
            var t = e ? e.ownerDocument || e : E,
                n = t.defaultView;
            if (t === h || t.nodeType !== 9 || !t.documentElement) return h;
            h = t, p = t.documentElement, d = !u(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
                c()
            }), r.attributes = ft(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), r.getElementsByTagName = ft(function (e) {
                return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ft(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", e.getElementsByClassName("i").length === 2
            }), r.getById = ft(function (e) {
                return p.appendChild(e).id = b, !t.getElementsByName || !t.getElementsByName(b).length
            }), r.getById ? (s.find.ID = function (e, t) {
                if (typeof t.getElementById !== A && d) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, s.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete s.find.ID, s.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), s.find.TAG = r.getElementsByTagName ? function (e, t) {
                if (typeof t.getElementsByTagName !== A) return t.getElementsByTagName(e)
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++]) n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            }, s.find.CLASS = r.getElementsByClassName && function (e, t) {
                if (typeof t.getElementsByClassName !== A && d) return t.getElementsByClassName(e)
            }, m = [], v = [];
            if (r.qsa = Y.test(t.querySelectorAll)) ft(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + F + ")"), e.querySelectorAll(":checked").length || v.push(":checked")
            }), ft(function (e) {
                var n = t.createElement("input");
                n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            });
            return (r.matchesSelector = Y.test(g = p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ft(function (e) {
                r.disconnectedMatch = g.call(e, "div"), g.call(e, "[s!='']:x"), m.push("!=", z)
            }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), y = Y.test(p.contains) || p.compareDocumentPosition ? function (e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            } : function (e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, L = p.compareDocumentPosition ? function (e, n) {
                if (e === n) return k = !0, 0;
                var i = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                if (i) return i & 1 || !r.sortDetached && n.compareDocumentPosition(e) === i ? e === t || y(E, e) ? -1 : n === t || y(E, n) ? 1 : l ? j.call(l, e) - j.call(l, n) : 0 : i & 4 ? -1 : 1;
                return e.compareDocumentPosition ? -1 : 1
            } : function (e, n) {
                var r, i = 0,
                    s = e.parentNode,
                    o = n.parentNode,
                    u = [e],
                    a = [n];
                if (e === n) return k = !0, 0;
                if (!s || !o) return e === t ? -1 : n === t ? 1 : s ? -1 : o ? 1 : l ? j.call(l, e) - j.call(l, n) : 0;
                if (s === o) return ct(e, n);
                r = e;
                while (r = r.parentNode) u.unshift(r);
                r = n;
                while (r = r.parentNode) a.unshift(r);
                while (u[i] === a[i]) i++;
                return i ? ct(u[i], a[i]) : u[i] === E ? -1 : a[i] === E ? 1 : 0
            }, t
        }, ot.matches = function (e, t) {
            return ot(e, null, null, t)
        }, ot.matchesSelector = function (e, t) {
            (e.ownerDocument || e) !== h && c(e), t = t.replace(J, "='$1']");
            if (r.matchesSelector && d && (!m || !m.test(t)) && (!v || !v.test(t))) try {
                var n = g.call(e, t);
                if (n || r.disconnectedMatch || e.document && e.document.nodeType !== 11) return n
            } catch (i) {}
            return ot(t, h, null, [e]).length > 0
        }, ot.contains = function (e, t) {
            return (e.ownerDocument || e) !== h && c(e), y(e, t)
        }, ot.attr = function (e, n) {
            (e.ownerDocument || e) !== h && c(e);
            var i = s.attrHandle[n.toLowerCase()],
                o = i && M.call(s.attrHandle, n.toLowerCase()) ? i(e, n, !d) : t;
            return o === t ? r.attributes || !d ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null : o
        }, ot.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ot.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                s = 0;
            k = !r.detectDuplicates, l = !r.sortStable && e.slice(0), e.sort(L);
            if (k) {
                while (t = e[s++]) t === e[s] && (i = n.push(s));
                while (i--) e.splice(n[i], 1)
            }
            return e
        }, o = ot.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (!i)
                for (; t = e[r]; r++) n += o(t);
            else if (i === 1 || i === 9 || i === 11) {
                if (typeof e.textContent == "string") return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
            } else if (i === 3 || i === 4) return e.nodeValue;
            return n
        }, s = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: G,
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
                    return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ot.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var n, r = !e[5] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && K.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return e === "*" ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && T(e, function (e) {
                        return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = ot.attr(r, e);
                        return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth",
                        o = e.slice(-4) !== "last",
                        u = t === "of-type";
                    return r === 1 && i === 0 ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                    d = v = e === "only" && !d && "nextSibling"
                                }
                                return !0
                            }
                            d = [o ? m.firstChild : m.lastChild];
                            if (o && y) {
                                l = m[b] || (m[b] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (c.nodeType === 1 && ++h && c === t) {
                                        l[e] = [S, p, h];
                                        break
                                    }
                            } else if (y && (f = (t[b] || (t[b] = {}))[e]) && f[0] === S) h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                        y && ((c[b] || (c[b] = {}))[e] = [S, h]);
                                        if (c === t) break
                                    } return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, r = s.pseudos[e] || s.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], s.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function (e, n) {
                        var i, s = r(e, t),
                            o = s.length;
                        while (o--) i = j.call(e, s[o]), e[i] = !(n[i] = s[o])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: at(function (e) {
                    var t = [],
                        n = [],
                        r = a(e.replace(W, "$1"));
                    return r[b] ? at(function (e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--)
                            if (s = o[u]) e[u] = !(t[u] = s)
                    }) : function (e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: at(function (e) {
                    return function (t) {
                        return ot(e, t).length > 0
                    }
                }),
                contains: at(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    }
                }),
                lang: at(function (e) {
                    return Q.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                        function (t) {
                            var n;
                            do
                                if (n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
                            while ((t = t.parentNode) && t.nodeType === 1);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === p
                },
                focus: function (e) {
                    return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) return !1;
                    return !0
                },
                parent: function (e) {
                    return !s.pseudos.empty(e)
                },
                header: function (e) {
                    return tt.test(e.nodeName)
                },
                input: function (e) {
                    return et.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                text: function (e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                },
                first: dt(function () {
                    return [0]
                }),
                last: dt(function (e, t) {
                    return [t - 1]
                }),
                eq: dt(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: dt(function (e, t) {
                    var n = 0;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: dt(function (e, t) {
                    var n = 1;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: dt(function (e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: dt(function (e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; ++r < t;) e.push(r);
                    return e
                })
            }
        }, s.pseudos.nth = s.pseudos.eq;
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) s.pseudos[n] = ht(n);
        for (n in {
            submit: !0,
            reset: !0
        }) s.pseudos[n] = pt(n);
        vt.prototype = s.filters = s.pseudos, s.setFilters = new vt, a = ot.compile = function (e, t) {
            var n, r = [],
                i = [],
                s = C[e + " "];
            if (!s) {
                t || (t = mt(e)), n = t.length;
                while (n--) s = St(t[n]), s[b] ? r.push(s) : i.push(s);
                s = C(e, xt(i, r))
            }
            return s
        }, r.sortStable = b.split("").sort(L).join("") === b, r.detectDuplicates = k, c(), r.sortDetached = ft(function (e) {
            return e.compareDocumentPosition(h.createElement("div")) & 1
        }), ft(function (e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
        }) || lt("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), (!r.attributes || !ft(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
        })) && lt("value", function (e, t, n) {
            if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue
        }), ft(function (e) {
            return e.getAttribute("disabled") == null
        }) || lt(F, function (e, t, n) {
            var r;
            if (!n) return (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
        }), w.find = ot, w.expr = ot.selectors, w.expr[":"] = w.expr.pseudos, w.unique = ot.uniqueSort, w.text = ot.getText, w.isXMLDoc = ot.isXML, w.contains = ot.contains
    }(e);
    var B = {};
    w.Callbacks = function (e) {
        e = typeof e == "string" ? B[e] || j(e) : w.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function (t) {
                r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0;
                for (; a && o < s; o++)
                    if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable())
            },
            c = {
                add: function () {
                    if (a) {
                        var t = a.length;
                        (function i(t) {
                            w.each(t, function (t, n) {
                                var r = w.type(n);
                                r === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && r !== "string" && i(n)
                            })
                        })(arguments), n ? s = a.length : r && (u = t, l(r))
                    }
                    return this
                },
                remove: function () {
                    return a && w.each(arguments, function (e, t) {
                        var r;
                        while ((r = w.inArray(t, a, r)) > -1) a.splice(r, 1), n && (r <= s && s--, r <= o && o--)
                    }), this
                },
                has: function (e) {
                    return e ? w.inArray(e, a) > -1 : !!a && !!a.length
                },
                empty: function () {
                    return a = [], s = 0, this
                },
                disable: function () {
                    return a = f = r = t, this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return f = t, r || c.disable(), this
                },
                locked: function () {
                    return !f
                },
                fireWith: function (e, t) {
                    return a && (!i || f) && (t = t || [], t = [e, t.slice ? t.slice() : t], n ? f.push(t) : l(t)), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return c
    }, w.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", w.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", w.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return w.Deferred(function (n) {
                            w.each(t, function (t, s) {
                                var o = s[0],
                                    u = w.isFunction(e[t]) && e[t];
                                i[s[1]](function () {
                                    var e = u && u.apply(this, arguments);
                                    e && w.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return e != null ? w.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, w.each(t, function (e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function () {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t = 0,
                n = v.call(arguments),
                r = n.length,
                i = r !== 1 || e && w.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : w.Deferred(),
                o = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? v.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                },
                u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && w.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), w.support = function (t) {
        var n, r, s, u, a, f, l, c, h, p = o.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], r = p.getElementsByTagName("a")[0];
        if (!r || !r.style || !n.length) return t;
        u = o.createElement("select"), f = u.appendChild(o.createElement("option")), s = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = p.className !== "t", t.leadingWhitespace = p.firstChild.nodeType === 3, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !!p.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = r.getAttribute("href") === "/a", t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!s.value, t.optSelected = f.selected, t.enctype = !!o.createElement("form").enctype, t.html5Clone = o.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, u.disabled = !0, t.optDisabled = !f.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        s = o.createElement("input"), s.setAttribute("value", ""), t.input = s.getAttribute("value") === "", s.value = "t", s.setAttribute("type", "radio"), t.radioValue = s.value === "t", s.setAttribute("checked", "t"), s.setAttribute("name", "t"), a = o.createDocumentFragment(), a.appendChild(s), t.appendChecked = s.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (h in {
            submit: !0,
            change: !0,
            focusin: !0
        }) p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = p.style.backgroundClip === "content-box";
        for (h in w(t)) break;
        return t.ownLast = h !== "0", w(function () {
            var n, r, s, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = o.getElementsByTagName("body")[0];
            if (!a) return;
            n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = p.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", w.swap(a, a.style.zoom != null ? {
                zoom: 1
            } : {}, function () {
                t.boxSizing = p.offsetWidth === 4
            }), e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(p, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(p, null) || {
                width: "4px"
            }).width === "4px", r = p.appendChild(o.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = p.offsetWidth !== 3, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = s = r = null
        }), n = u = a = f = r = s = null, t
    }({});
    var F = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        I = /([A-Z])/g;
    w.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando], !!e && !z(e)
        },
        data: function (e, t, n) {
            return q(e, t, n)
        },
        removeData: function (e, t) {
            return R(e, t)
        },
        _data: function (e, t, n) {
            return q(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return R(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9) return !1;
            var t = e.nodeName && w.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), w.fn.extend({
        data: function (e, n) {
            var r, i, s = null,
                o = 0,
                u = this[0];
            if (e === t) {
                if (this.length) {
                    s = w.data(u);
                    if (u.nodeType === 1 && !w._data(u, "parsedAttrs")) {
                        r = u.attributes;
                        for (; o < r.length; o++) i = r[o].name, i.indexOf("data-") === 0 && (i = w.camelCase(i.slice(5)), U(u, i, s[i]));
                        w._data(u, "parsedAttrs", !0)
                    }
                }
                return s
            }
            return typeof e == "object" ? this.each(function () {
                w.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                w.data(this, e, n)
            }) : u ? U(u, e, w.data(u, e)) : null
        },
        removeData: function (e) {
            return this.each(function () {
                w.removeData(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = w._data(e, t), n && (!r || w.isArray(n) ? r = w._data(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = w._queueHooks(e, t),
                o = function () {
                    w.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return w._data(e, n) || w._data(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    w._removeData(e, t + "queue"), w._removeData(e, n)
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? w.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = w.queue(this, e, n);
                w._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && w.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = w.fx ? w.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                s = w.Deferred(),
                o = this,
                u = this.length,
                a = function () {
                    --i || s.resolveWith(o, [o])
                };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = w._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var W, X, V = /[\t\r\n\f]/g,
        $ = /\r/g,
        J = /^(?:input|select|textarea|button|object)$/i,
        K = /^(?:a|area)$/i,
        Q = /^(?:checked|selected)$/i,
        G = w.support.getSetAttribute,
        Y = w.support.input;
    w.fn.extend({
        attr: function (e, t) {
            return w.access(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return w.access(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = w.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = typeof e == "string" && e;
            if (w.isFunction(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(S) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(V, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = w.trim(r)
                    }
                }
            }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = arguments.length === 0 || typeof e == "string" && e;
            if (w.isFunction(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(S) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(V, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? w.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : w.isFunction(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var t, r = 0,
                        s = w(this),
                        o = e.match(S) || [];
                    while (t = o[r++]) s.hasClass(t) ? s.removeClass(t) : s.addClass(t)
                } else if (n === i || n === "boolean") this.className && w._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : w._data(this, "__className__") || ""
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(V, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return r = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()], r && "get" in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, typeof n == "string" ? n.replace($, "") : n == null ? "" : n);
                return
            }
            return i = w.isFunction(e), this.each(function (n) {
                var s;
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, n, w(this).val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : w.isArray(s) && (s = w.map(s, function (e) {
                    return e == null ? "" : e + ""
                })), r = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()];
                if (!r || !("set" in r) || r.set(this, s, "value") === t) this.value = s
            })
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return t != null ? t : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (w.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !w.nodeName(n.parentNode, "optgroup"))) {
                            t = w(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function (e, t) {
                    var n, r, i = e.options,
                        s = w.makeArray(t),
                        o = i.length;
                    while (o--) {
                        r = i[o];
                        if (r.selected = w.inArray(w(r).val(), s) >= 0) n = !0
                    }
                    return n || (e.selectedIndex = -1), s
                }
            }
        },
        attr: function (e, n, r) {
            var s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            if (typeof e.getAttribute === i) return w.prop(e, n, r);
            if (u !== 1 || !w.isXMLDoc(e)) n = n.toLowerCase(), s = w.attrHooks[n] || (w.expr.match.bool.test(n) ? X : W);
            if (r === t) return s && "get" in s && (o = s.get(e, n)) !== null ? o : (o = w.find.attr(e, n), o == null ? t : o);
            if (r !== null) return s && "set" in s && (o = s.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r);
            w.removeAttr(e, n)
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                s = t && t.match(S);
            if (s && e.nodeType === 1)
                while (n = s[i++]) r = w.propFix[n] || n, w.expr.match.bool.test(n) ? Y && G || !Q.test(n) ? e[r] = !1 : e[w.camelCase("default-" + n)] = e[r] = !1 : w.attr(e, n, ""), e.removeAttribute(G ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!w.support.radioValue && t === "radio" && w.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !w.isXMLDoc(e), o && (n = w.propFix[n] || n, s = w.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : J.test(e.nodeName) || K.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function (e, t, n) {
            return t === !1 ? w.removeAttr(e, n) : Y && G || !Q.test(n) ? e.setAttribute(!G && w.propFix[n] || n, n) : e[w.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = w.expr.attrHandle[n] || w.find.attr;
        w.expr.attrHandle[n] = Y && G || !Q.test(n) ? function (e, n, i) {
            var s = w.expr.attrHandle[n],
                o = i ? t : (w.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return w.expr.attrHandle[n] = s, o
        } : function (e, n, r) {
            return r ? t : e[w.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    });
    if (!Y || !G) w.attrHooks.value = {
        set: function (e, t, n) {
            if (!w.nodeName(e, "input")) return W && W.set(e, t, n);
            e.defaultValue = t
        }
    };
    G || (W = {
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", r === "value" || n === e.getAttribute(r) ? n : t
        }
    }, w.expr.attrHandle.id = w.expr.attrHandle.name = w.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && i.value !== "" ? i.value : null
    }, w.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: W.set
    }, w.attrHooks.contenteditable = {
        set: function (e, t, n) {
            W.set(e, t === "" ? !1 : t, n)
        }
    }, w.each(["width", "height"], function (e, t) {
        w.attrHooks[t] = {
            set: function (e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        }
    })), w.support.hrefNormalized || w.each(["href", "src"], function (e, t) {
        w.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), w.support.style || (w.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), w.support.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    }), w.support.enctype || (w.propFix.enctype = "encoding"), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (w.isArray(t)) return e.checked = w.inArray(w(e).val(), t) >= 0
            }
        }, w.support.checkOn || (w.valHooks[this].get = function (e) {
            return e.getAttribute("value") === null ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;
    w.event = {
        global: {},
        add: function (e, n, r, s, o) {
            var u, a, f, l, c, h, p, d, v, m, g, y = w._data(e);
            if (!y) return;
            r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = w.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function (e) {
                return typeof w === i || !!e && w.event.triggered === e.type ? t : w.event.dispatch.apply(h.elem, arguments)
            }, h.elem = e), n = (n || "").match(S) || [""], f = n.length;
            while (f--) {
                u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort();
                if (!v) continue;
                c = w.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = w.event.special[v] || {}, p = w.extend({
                    type: v,
                    origType: g,
                    data: s,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && w.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l);
                if (!(d = a[v])) {
                    d = a[v] = [], d.delegateCount = 0;
                    if (!c.setup || c.setup.call(e, s, m, h) === !1) e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h)
                }
                c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), w.event.global[v] = !0
            }
            e = null
        },
        remove: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = w.hasData(e) && w._data(e);
            if (!m || !(l = m.events)) return;
            t = (t || "").match(S) || [""], f = t.length;
            while (f--) {
                u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                if (!p) {
                    for (p in l) w.event.remove(e, p + t[f], n, r, !0);
                    continue
                }
                c = w.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                while (s--) o = h[s], (i || v === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                a && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && w.removeEvent(e, p, m.handle), delete l[p])
            }
            w.isEmptyObject(l) && (delete m.handle, w._removeData(e, "events"))
        },
        trigger: function (n, r, i, s) {
            var u, a, f, l, c, h, p, d = [i || o],
                v = y.call(n, "type") ? n.type : n,
                m = y.call(n, "namespace") ? n.namespace.split(".") : [];
            f = h = i = i || o;
            if (i.nodeType === 3 || i.nodeType === 8) return;
            if (nt.test(v + w.event.triggered)) return;
            v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = v.indexOf(":") < 0 && "on" + v, n = n[w.expando] ? n : new w.Event(v, typeof n == "object" && n), n.isTrigger = s ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = r == null ? [n] : w.makeArray(r, [n]), c = w.event.special[v] || {};
            if (!s && c.trigger && c.trigger.apply(i, r) === !1) return;
            if (!s && !c.noBubble && !w.isWindow(i)) {
                l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode);
                for (; f; f = f.parentNode) d.push(f), h = f;
                h === (i.ownerDocument || o) && d.push(h.defaultView || h.parentWindow || e)
            }
            p = 0;
            while ((f = d[p++]) && !n.isPropagationStopped()) n.type = p > 1 ? l : c.bindType || v, u = (w._data(f, "events") || {})[n.type] && w._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && w.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
            n.type = v;
            if (!s && !n.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), r) === !1) && w.acceptData(i) && a && i[v] && !w.isWindow(i)) {
                h = i[a], h && (i[a] = null), w.event.triggered = v;
                try {
                    i[v]()
                } catch (g) {}
                w.event.triggered = t, h && (i[a] = h)
            }
            return n.result
        },
        dispatch: function (e) {
            e = w.event.fix(e);
            var n, r, i, s, o, u = [],
                a = v.call(arguments),
                f = (w._data(this, "events") || {})[e.type] || [],
                l = w.event.special[e.type] || {};
            a[0] = e, e.delegateTarget = this;
            if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
            u = w.event.handlers.call(this, e, f), n = 0;
            while ((s = u[n++]) && !e.isPropagationStopped()) {
                e.currentTarget = s.elem, o = 0;
                while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
                    if (!e.namespace_re || e.namespace_re.test(i.namespace)) e.handleObj = i, e.data = i.data, r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())
            }
            return l.postDispatch && l.postDispatch.call(this, e), e.result
        },
        handlers: function (e, n) {
            var r, i, s, o, u = [],
                a = n.delegateCount,
                f = e.target;
            if (a && f.nodeType && (!e.button || e.type !== "click"))
                for (; f != this; f = f.parentNode || this)
                    if (f.nodeType === 1 && (f.disabled !== !0 || e.type !== "click")) {
                        s = [];
                        for (o = 0; o < a; o++) i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? w(r, this).index(f) >= 0 : w.find(r, this, null, [f]).length), s[r] && s.push(i);
                        s.length && u.push({
                            elem: f,
                            handlers: s
                        })
                    }
            return a < n.length && u.push({
                elem: this,
                handlers: n.slice(a)
            }), u
        },
        fix: function (e) {
            if (e[w.expando]) return e;
            var t, n, r, i = e.type,
                s = e,
                u = this.fixHooks[i];
            u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new w.Event(s), t = r.length;
            while (t--) n = r[t], e[n] = s[n];
            return e.target || (e.target = s.srcElement || o), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, u.filter ? u.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, s, u = n.button,
                    a = n.fromElement;
                return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || o, s = i.documentElement, r = i.body, e.pageX = n.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== ot() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === ot() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (w.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
                },
                _default: function (e) {
                    return w.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? w.event.trigger(i, null, t) : w.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, w.removeEvent = o.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || w.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                if (!i || i !== r && !w.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), w.support.submitBubbles || (w.event.special.submit = {
        setup: function () {
            if (w.nodeName(this, "form")) return !1;
            w.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = w.nodeName(n, "input") || w.nodeName(n, "button") ? n.form : t;
                r && !w._data(r, "submitBubbles") && (w.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), w._data(r, "submitBubbles", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && w.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            if (w.nodeName(this, "form")) return !1;
            w.event.remove(this, "._submit")
        }
    }), w.support.changeBubbles || (w.event.special.change = {
        setup: function () {
            if (Z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") w.event.add(this, "propertychange._change", function (e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), w.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), w.event.simulate("change", this, e, !0)
                });
                return !1
            }
            w.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !w._data(t, "changeBubbles") && (w.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && w.event.simulate("change", this.parentNode, e, !0)
                }), w._data(t, "changeBubbles", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return w.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), w.support.focusinBubbles || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                w.event.simulate(t, e.target, w.event.fix(e), !0)
            };
        w.event.special[t] = {
            setup: function () {
                n++ === 0 && o.addEventListener(e, r, !0)
            },
            teardown: function () {
                --n === 0 && o.removeEventListener(e, r, !0)
            }
        }
    }), w.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (o in e) this.on(o, n, r, e[o], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = st;
            else if (!i) return this;
            return s === 1 && (u = i, i = function (e) {
                return w().off(e), u.apply(this, arguments)
            }, i.guid = u.guid || (u.guid = w.guid++)), this.each(function () {
                w.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if (typeof e == "object") {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = st), this.each(function () {
                w.event.remove(this, e, r, n)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    });
    var ut = /^.[^:#\[\.,]*$/,
        at = /^(?:parents|prev(?:Until|All))/,
        ft = w.expr.match.needsContext,
        lt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    w.fn.extend({
        find: function (e) {
            var t, n = [],
                r = this,
                i = r.length;
            if (typeof e != "string") return this.pushStack(w(e).filter(function () {
                for (t = 0; t < i; t++)
                    if (w.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) w.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? w.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function (e) {
            var t, n = w(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++)
                    if (w.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(ht(this, e || [], !0))
        },
        filter: function (e) {
            return this.pushStack(ht(this, e || [], !1))
        },
        is: function (e) {
            return !!ht(this, typeof e == "string" && ft.test(e) ? w(e) : e || [], !1).length
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = ft.test(e) || typeof e != "string" ? w(e, t || this.context) : 0;
            for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && w.find.matchesSelector(n, e))) {
                        n = s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? w.unique(s) : s)
        },
        index: function (e) {
            return e ? typeof e == "string" ? w.inArray(this[0], w(e)) : w.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = typeof e == "string" ? w(e, t) : w.makeArray(e && e.nodeType ? [e] : e),
                r = w.merge(this.get(), n);
            return this.pushStack(w.unique(r))
        },
        addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
            return w.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return w.dir(e, "parentNode", n)
        },
        next: function (e) {
            return ct(e, "nextSibling")
        },
        prev: function (e) {
            return ct(e, "previousSibling")
        },
        nextAll: function (e) {
            return w.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return w.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return w.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return w.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return w.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return w.sibling(e.firstChild)
        },
        contents: function (e) {
            return w.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : w.merge([], e.childNodes)
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = w.filter(r, i)), this.length > 1 && (lt[e] || (i = w.unique(i)), at.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), w.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
                return e.nodeType === 1
            }))
        },
        dir: function (e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !w(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        vt = / jQuery\d+="(?:null|\d+)"/g,
        mt = new RegExp("<(?:" + dt + ")[\\s/>]", "i"),
        gt = /^\s+/,
        yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        wt = /<tbody/i,
        Et = /<|&#?\w+;/,
        St = /<(?:script|style|link)/i,
        xt = /^(?:checkbox|radio)$/i,
        Tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Nt = /^$|\/(?:java|ecma)script/i,
        Ct = /^true\/(.*)/,
        kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: w.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        At = pt(o),
        Ot = At.appendChild(o.createElement("div"));
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, w.fn.extend({
        text: function (e) {
            return w.access(this, function (e) {
                return e === t ? w.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Mt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Mt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            var n, r = e ? w.filter(e, this) : this,
                i = 0;
            for (;
                (n = r[i]) != null; i++)!t && n.nodeType === 1 && w.cleanData(jt(n)), n.parentNode && (t && w.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            var e, t = 0;
            for (;
                (e = this[t]) != null; t++) {
                e.nodeType === 1 && w.cleanData(jt(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && w.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        },
        html: function (e) {
            return w.access(this, function (e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(vt, "") : t;
                if (typeof e == "string" && !St.test(e) && (w.support.htmlSerialize || !mt.test(e)) && (w.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(yt, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (w.cleanData(jt(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = w.map(this, function (e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function (n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), w(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t, n) {
            e = p.apply([], e);
            var r, i, s, o, u, a, f = 0,
                l = this.length,
                c = this,
                h = l - 1,
                d = e[0],
                v = w.isFunction(d);
            if (v || !(l <= 1 || typeof d != "string" || w.support.checkClone || !Tt.test(d))) return this.each(function (r) {
                var i = c.eq(r);
                v && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (l) {
                a = w.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = a.firstChild, a.childNodes.length === 1 && (a = r);
                if (r) {
                    o = w.map(jt(a, "script"), _t), s = o.length;
                    for (; f < l; f++) i = a, f !== h && (i = w.clone(i, !0, !0), s && w.merge(o, jt(i, "script"))), t.call(this[f], i, f);
                    if (s) {
                        u = o[o.length - 1].ownerDocument, w.map(o, Dt);
                        for (f = 0; f < s; f++) i = o[f], Nt.test(i.type || "") && !w._data(i, "globalEval") && w.contains(u, i) && (i.src ? w._evalUrl(i.src) : w.globalEval((i.text || i.textContent || i.innerHTML || "").replace(kt, "")))
                    }
                    a = r = null
                }
            }
            return this
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            var n, r = 0,
                i = [],
                s = w(e),
                o = s.length - 1;
            for (; r <= o; r++) n = r === o ? this : this.clone(!0), w(s[r])[t](n), d.apply(i, n.get());
            return this.pushStack(i)
        }
    }), w.extend({
        clone: function (e, t, n) {
            var r, i, s, o, u, a = w.contains(e.ownerDocument, e);
            w.support.html5Clone || w.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild));
            if ((!w.support.noCloneEvent || !w.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !w.isXMLDoc(e)) {
                r = jt(s), u = jt(e);
                for (o = 0;
                    (i = u[o]) != null; ++o) r[o] && Bt(i, r[o])
            }
            if (t)
                if (n) {
                    u = u || jt(e), r = r || jt(s);
                    for (o = 0;
                        (i = u[o]) != null; o++) Ht(i, r[o])
                } else Ht(e, s);
            return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s
        },
        buildFragment: function (e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length,
                h = pt(t),
                p = [],
                d = 0;
            for (; d < c; d++) {
                s = e[d];
                if (s || s === 0)
                    if (w.type(s) === "object") w.merge(p, s.nodeType ? [s] : s);
                    else if (!Et.test(s)) p.push(t.createTextNode(s));
                else {
                    u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                    while (i--) u = u.lastChild;
                    !w.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0]));
                    if (!w.support.tbody) {
                        s = a === "table" && !wt.test(s) ? u.firstChild : l[1] === "<table>" && !wt.test(s) ? u : 0, i = s && s.childNodes.length;
                        while (i--) w.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                    }
                    w.merge(p, u.childNodes), u.textContent = "";
                    while (u.firstChild) u.removeChild(u.firstChild);
                    u = h.lastChild
                }
            }
            u && h.removeChild(u), w.support.appendChecked || w.grep(jt(p, "input"), Ft), d = 0;
            while (s = p[d++]) {
                if (r && w.inArray(s, r) !== -1) continue;
                o = w.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u);
                if (n) {
                    i = 0;
                    while (s = u[i++]) Nt.test(s.type || "") && n.push(s)
                }
            }
            return u = null, h
        },
        cleanData: function (e, t) {
            var n, r, s, o, u = 0,
                a = w.expando,
                f = w.cache,
                l = w.support.deleteExpando,
                h = w.event.special;
            for (;
                (n = e[u]) != null; u++)
                if (t || w.acceptData(n)) {
                    s = n[a], o = s && f[s];
                    if (o) {
                        if (o.events)
                            for (r in o.events) h[r] ? w.event.remove(n, r) : w.removeEvent(n, r, o.handle);
                        f[s] && (delete f[s], l ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, c.push(s))
                    }
                }
        },
        _evalUrl: function (e) {
            return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), w.fn.extend({
        wrapAll: function (e) {
            if (w.isFunction(e)) return this.each(function (t) {
                w(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = w(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return w.isFunction(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = w.isFunction(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                w.nodeName(this, "body") || w(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var It, qt, Rt, Ut = /alpha\([^)]*\)/i,
        zt = /opacity\s*=\s*([^)]*)/,
        Wt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Vt = /^margin/,
        $t = new RegExp("^(" + E + ")(.*)$", "i"),
        Jt = new RegExp("^(" + E + ")(?!px)[a-z%]+$", "i"),
        Kt = new RegExp("^([+-])=(" + E + ")", "i"),
        Qt = {
            BODY: "block"
        },
        Gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Yt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];
    w.fn.extend({
        css: function (e, n) {
            return w.access(this, function (e, n, r) {
                var i, s, o = {},
                    u = 0;
                if (w.isArray(n)) {
                    s = qt(e), i = n.length;
                    for (; u < i; u++) o[n[u]] = w.css(e, n[u], !1, s);
                    return o
                }
                return r !== t ? w.style(e, n, r) : w.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return rn(this, !0)
        },
        hide: function () {
            return rn(this)
        },
        toggle: function (e) {
            return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function () {
                nn(this) ? w(this).show() : w(this).hide()
            })
        }
    }), w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Rt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": w.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = w.camelCase(n),
                f = e.style;
            n = w.cssProps[a] || (w.cssProps[a] = tn(f, a)), u = w.cssHooks[n] || w.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(w.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !w.cssNumber[a] && (r += "px"), !w.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch (l) {}
        },
        css: function (e, n, r, i) {
            var s, o, u, a = w.camelCase(n);
            return n = w.cssProps[a] || (w.cssProps[a] = tn(e.style, a)), u = w.cssHooks[n] || w.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), o === "normal" && n in Yt && (o = Yt[n]), r === "" || r ? (s = parseFloat(o), r === !0 || w.isNumeric(s) ? s || 0 : o) : o
        }
    }), e.getComputedStyle ? (qt = function (t) {
        return e.getComputedStyle(t, null)
    }, Rt = function (e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u.getPropertyValue(n) || u[n] : t,
            f = e.style;
        return u && (a === "" && !w.contains(e.ownerDocument, e) && (a = w.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
    }) : o.documentElement.currentStyle && (qt = function (e) {
        return e.currentStyle
    }, Rt = function (e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u[n] : t,
            f = e.style;
        return a == null && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return e.offsetWidth === 0 && Xt.test(w.css(e, "display")) ? w.swap(e, Gt, function () {
                    return un(e, t, r)
                }) : un(e, t, r)
            },
            set: function (e, n, r) {
                var i = r && qt(e);
                return sn(e, n, r ? on(e, t, r, w.support.boxSizing && w.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }
        }
    }), w.support.opacity || (w.cssHooks.opacity = {
        get: function (e, t) {
            return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = w.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if ((t >= 1 || t === "") && w.trim(s.replace(Ut, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (t === "" || r && !r.filter) return
            }
            n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i
        }
    }), w(function () {
        w.support.reliableMarginRight || (w.cssHooks.marginRight = {
            get: function (e, t) {
                if (t) return w.swap(e, {
                    display: "inline-block"
                }, Rt, [e, "marginRight"])
            }
        }), !w.support.pixelPosition && w.fn.position && w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n) {
                    if (n) return n = Rt(e, t), Jt.test(n) ? w(e).position()[t] + "px" : n
                }
            }
        })
    }), w.expr && w.expr.filters && (w.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !w.support.reliableHiddenOffsets && (e.style && e.style.display || w.css(e, "display")) === "none"
    }, w.expr.filters.visible = function (e) {
        return !w.expr.filters.hidden(e)
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0,
                    i = {},
                    s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++) i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Vt.test(e) || (w.cssHooks[e + t].set = sn)
    });
    var ln = /%20/g,
        cn = /\[\]$/,
        hn = /\r?\n/g,
        pn = /^(?:submit|button|image|reset|file)$/i,
        dn = /^(?:input|select|textarea|keygen)/i;
    w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return n == null ? null : w.isArray(n) ? w.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(hn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(hn, "\r\n")
                }
            }).get()
        }
    }), w.param = function (e, n) {
        var r, i = [],
            s = function (e, t) {
                t = w.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = w.ajaxSettings && w.ajaxSettings.traditional);
        if (w.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            s(this.name, this.value)
        });
        else
            for (r in e) vn(r, e[r], n, s);
        return i.join("&").replace(ln, "+")
    }, w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, gn, yn = w.now(),
        bn = /\?/,
        wn = /#.*$/,
        En = /([?&])_=[^&]*/,
        Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Tn = /^(?:GET|HEAD)$/,
        Nn = /^\/\//,
        Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        kn = w.fn.load,
        Ln = {},
        An = {},
        On = "*/".concat("*");
    try {
        gn = s.href
    } catch (Mn) {
        gn = o.createElement("a"), gn.href = "", gn = gn.href
    }
    mn = Cn.exec(gn.toLowerCase()) || [], w.fn.load = function (e, n, r) {
        if (typeof e != "string" && kn) return kn.apply(this, arguments);
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), w.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (o = "POST"), u.length > 0 && w.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function (e) {
            s = arguments, u.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            u.each(r, s || [e.responseText, t, e])
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gn,
            type: "GET",
            isLocal: xn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": On,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": w.parseJSON,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Pn(Pn(e, w.ajaxSettings), t) : Pn(w.ajaxSettings, e)
        },
        ajaxPrefilter: _n(Ln),
        ajaxTransport: _n(An),
        ajax: function (e, n) {
            function N(e, n, r, i) {
                var l, g, y, E, S, T = n;
                if (b === 2) return;
                b = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || e === 304, r && (E = Hn(c, x, r)), E = Bn(c, E, x, l);
                if (l) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (w.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (w.etag[s] = S)), e === 204 || c.type === "HEAD" ? T = "nocontent" : e === 304 ? T = "notmodified" : (T = E.state, g = E.data, y = E.error, l = !y);
                else {
                    y = T;
                    if (e || !T) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --w.active || w.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = w.ajaxSetup({}, n),
                h = c.context || c,
                p = c.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                d = w.Deferred(),
                v = w.Callbacks("once memory"),
                m = c.statusCode || {},
                g = {},
                y = {},
                b = 0,
                E = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (b === 2) {
                            if (!l) {
                                l = {};
                                while (t = Sn.exec(o)) l[t[1].toLowerCase()] = t[2]
                            }
                            t = l[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return b === 2 ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (c.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e) m[t] = [m[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || E;
                        return f && f.abort(t), N(0, t), this
                    }
                };
            d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = w.trim(c.dataType || "*").toLowerCase().match(S) || [""], c.crossDomain == null && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || (r[1] === "http:" ? "80" : "443")) === (mn[3] || (mn[1] === "http:" ? "80" : "443")))), c.data && c.processData && typeof c.data != "string" && (c.data = w.param(c.data, c.traditional)), Dn(Ln, c, n, x);
            if (b === 2) return x;
            a = c.global, a && w.active++ === 0 && w.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (w.lastModified[s] && x.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && x.setRequestHeader("If-None-Match", w.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers) x.setRequestHeader(i, c.headers[i]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && b !== 2) {
                E = "abort";
                for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[i](c[i]);
                f = Dn(An, c, n, x);
                if (!f) N(-1, "No Transport");
                else {
                    x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        b = 1, f.send(g, N)
                    } catch (T) {
                        if (!(b < 2)) throw T;
                        N(-1, T)
                    }
                }
                return x
            }
            return x.abort()
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return w.get(e, t, n, "script")
        }
    }), w.each(["get", "post"], function (e, n) {
        w[n] = function (e, r, i, s) {
            return w.isFunction(r) && (s = s || i, i = r, r = t), w.ajax({
                url: e,
                type: n,
                dataType: s,
                data: r,
                success: i
            })
        }
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = o.head || w("head")[0] || o.documentElement;
            return {
                send: function (t, i) {
                    n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        if (t || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var jn = [],
        Fn = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = jn.pop() || w.expando + "_" + yn++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function (n, r, i) {
        var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
        if (a || n.dataTypes[0] === "jsonp") return s = n.jsonpCallback = w.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
            return u || w.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", o = e[s], e[s] = function () {
            u = arguments
        }, i.always(function () {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && w.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    });
    var In, qn, Rn = 0,
        Un = e.ActiveXObject && function () {
            var e;
            for (e in In) In[e](t, !0)
        };
    w.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && zn() || Wn()
    } : zn, qn = w.ajaxSettings.xhr(), w.support.cors = !!qn && "withCredentials" in qn, qn = w.support.ajax = !!qn, qn && w.ajaxTransport(function (n) {
        if (!n.crossDomain || w.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields)
                        for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null), r = function (e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = w.noop, Un && delete In[o]);
                                if (i) a.readyState !== 4 && a.abort();
                                else {
                                    c = {}, u = a.status, f = a.getAllResponseHeaders(), typeof a.responseText == "string" && (c.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (h) {
                                        l = ""
                                    }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (p) {
                            i || s(-1, p)
                        }
                        c && s(u, l, c, f)
                    }, n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {}, w(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Vn, $n = /^(?:toggle|show|hide)$/,
        Jn = new RegExp("^(?:([+-])=|)(" + E + ")([a-z%]*)$", "i"),
        Kn = /queueHooks$/,
        Qn = [nr],
        Gn = {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = Jn.exec(t),
                        s = i && i[3] || (w.cssNumber[e] ? "" : "px"),
                        o = (w.cssNumber[e] || s !== "px" && +r) && Jn.exec(w.css(n.elem, e)),
                        u = 1,
                        a = 20;
                    if (o && o[3] !== s) {
                        s = s || o[3], i = i || [], o = +r || 1;
                        do u = u || ".5", o /= u, w.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && u !== 1 && --a)
                    }
                    return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
                }
            ]
        };
    w.Animation = w.extend(er, {
        tweener: function (e, t) {
            w.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Qn.unshift(e) : Qn.push(e)
        }
    }), w.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (w.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = rr.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = w.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : e.elem.style && (e.elem.style[w.cssProps[e.prop]] != null || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), w.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = w.isEmptyObject(e),
                s = w.speed(t, n, r),
                o = function () {
                    var t = er(this, w.extend({}, e), s);
                    (i || w._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = w.timers,
                    o = w._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && w.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = w._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    s = w.timers,
                    o = r ? r.length : 0;
                n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
                for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        w.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), w.speed = function (e, t, n) {
        var r = e && typeof e == "object" ? w.extend({}, e) : {
            complete: n || !n && t || w.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !w.isFunction(t) && t
        };
        r.duration = w.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in w.fx.speeds ? w.fx.speeds[r.duration] : w.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function () {
            w.isFunction(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, w.timers = [], w.fx = rr.prototype.init, w.fx.tick = function () {
        var e, n = w.timers,
            r = 0;
        Xn = w.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || w.fx.stop(), Xn = t
    }, w.fx.timer = function (e) {
        e() && w.timers.push(e) && w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        Vn || (Vn = setInterval(w.fx.tick, w.fx.interval))
    }, w.fx.stop = function () {
        clearInterval(Vn), Vn = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fx.step = {}, w.expr && w.expr.filters && (w.expr.filters.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem
        }).length
    }), w.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            w.offset.setOffset(this, e, t)
        });
        var n, r, s = {
                top: 0,
                left: 0
            },
            o = this[0],
            u = o && o.ownerDocument;
        if (!u) return;
        return n = u.documentElement, w.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
            top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : s
    }, w.offset = {
        setOffset: function (e, t, n) {
            var r = w.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = w(e),
                s = i.offset(),
                o = w.css(e, "top"),
                u = w.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && w.inArray("auto", [o, u]) > -1,
                f = {},
                l = {},
                c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), w.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, w.fn.extend({
        position: function () {
            if (!this[0]) return;
            var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
            return w.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), w.nodeName(e[0], "html") || (n = e.offset()), n.top += w.css(e[0], "borderTopWidth", !0), n.left += w.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - n.top - w.css(r, "marginTop", !0),
                left: t.left - n.left - w.css(r, "marginLeft", !0)
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || u;
                while (e && !w.nodeName(e, "html") && w.css(e, "position") === "static") e = e.offsetParent;
                return e || u
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        w.fn[e] = function (i) {
            return w.access(this, function (e, i, s) {
                var o = sr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? w(o).scrollLeft() : s, r ? s : w(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), w.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        w.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            w.fn[i] = function (i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return w.access(this, function (n, r, i) {
                    var s;
                    return w.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? w.css(n, r, u) : w.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), w.fn.size = function () {
        return this.length
    }, w.fn.andSelf = w.fn.addBack, typeof module == "object" && module && typeof module.exports == "object" ? module.exports = w : (e.jQuery = e.$ = w, typeof define == "function" && define.amd && define("jquery", [], function () {
        return w
    }))
})(window),
function (e, t) {
    function H(e) {
        var t = e.length,
            n = w.type(e);
        return w.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
    }

    function j(e) {
        var t = B[e] = {};
        return w.each(e.match(S) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function q(e, n, r, i) {
        if (!w.acceptData(e)) return;
        var s, o, u = w.expando,
            a = e.nodeType,
            f = a ? w.cache : e,
            l = a ? e[u] : e[u] && u;
        if ((!l || !f[l] || !i && !f[l].data) && r === t && typeof n == "string") return;
        l || (a ? l = e[u] = c.pop() || w.guid++ : l = u), f[l] || (f[l] = a ? {} : {
            toJSON: w.noop
        });
        if (typeof n == "object" || typeof n == "function") i ? f[l] = w.extend(f[l], n) : f[l].data = w.extend(f[l].data, n);
        return o = f[l], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[w.camelCase(n)] = r), typeof n == "string" ? (s = o[n], s == null && (s = o[w.camelCase(n)])) : s = o, s
    }

    function R(e, t, n) {
        if (!w.acceptData(e)) return;
        var r, i, s = e.nodeType,
            o = s ? w.cache : e,
            u = s ? e[w.expando] : w.expando;
        if (!o[u]) return;
        if (t) {
            r = n ? o[u] : o[u].data;
            if (r) {
                w.isArray(t) ? t = t.concat(w.map(t, w.camelCase)) : t in r ? t = [t] : (t = w.camelCase(t), t in r ? t = [t] : t = t.split(" ")), i = t.length;
                while (i--) delete r[t[i]];
                if (n ? !z(r) : !w.isEmptyObject(r)) return
            }
        }
        if (!n) {
            delete o[u].data;
            if (!z(o[u])) return
        }
        s ? w.cleanData([e], !0) : w.support.deleteExpando || o != o.window ? delete o[u] : o[u] = null
    }

    function U(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(I, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : F.test(r) ? w.parseJSON(r) : r
                } catch (s) {}
                w.data(e, n, r)
            } else r = t
        }
        return r
    }

    function z(e) {
        var t;
        for (t in e) {
            if (t === "data" && w.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function it() {
        return !0
    }

    function st() {
        return !1
    }

    function ot() {
        try {
            return o.activeElement
        } catch (e) {}
    }

    function ct(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function ht(e, t, n) {
        if (w.isFunction(t)) return w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return w.grep(e, function (e) {
            return e === t !== n
        });
        if (typeof t == "string") {
            if (ut.test(t)) return w.filter(t, e, n);
            t = w.filter(t, e)
        }
        return w.grep(e, function (e) {
            return w.inArray(e, t) >= 0 !== n
        })
    }

    function pt(e) {
        var t = dt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Mt(e, t) {
        return w.nodeName(e, "table") && w.nodeName(t.nodeType === 1 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function _t(e) {
        return e.type = (w.find.attr(e, "type") !== null) + "/" + e.type, e
    }

    function Dt(e) {
        var t = Ct.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Pt(e, t) {
        var n, r = 0;
        for (;
            (n = e[r]) != null; r++) w._data(n, "globalEval", !t || w._data(t[r], "globalEval"))
    }

    function Ht(e, t) {
        if (t.nodeType !== 1 || !w.hasData(e)) return;
        var n, r, i, s = w._data(e),
            o = w._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++) w.event.add(t, n, u[n][r])
        }
        o.data && (o.data = w.extend({}, o.data))
    }

    function Bt(e, t) {
        var n, r, i;
        if (t.nodeType !== 1) return;
        n = t.nodeName.toLowerCase();
        if (!w.support.noCloneEvent && t[w.expando]) {
            i = w._data(t);
            for (r in i.events) w.removeEvent(t, r, i.handle);
            t.removeAttribute(w.expando)
        }
        if (n === "script" && t.text !== e.text) _t(t).text = e.text, Dt(t);
        else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML), w.support.html5Clone && e.innerHTML && !w.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
        else if (n === "input" && xt.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
        else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected;
        else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
    }

    function jt(e, n) {
        var r, s, o = 0,
            u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!u)
            for (u = [], r = e.childNodes || e;
                (s = r[o]) != null; o++)!n || w.nodeName(s, n) ? u.push(s) : w.merge(u, jt(s, n));
        return n === t || n && w.nodeName(e, n) ? w.merge([e], u) : u
    }

    function Ft(e) {
        xt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--) {
            t = en[i] + n;
            if (t in e) return t
        }
        return r
    }

    function nn(e, t) {
        return e = t || e, w.css(e, "display") === "none" || !w.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, s = [],
            o = 0,
            u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            s[o] = w._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && nn(r) && (s[o] = w._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && n !== "none" || !i) && w._data(r, "olddisplay", i ? n : w.css(r, "display")))
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none"
        }
        return e
    }

    function sn(e, t, n) {
        var r = $t.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function on(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            o = 0;
        for (; s < 4; s += 2) n === "margin" && (o += w.css(e, n + Zt[s], !0, i)), r ? (n === "content" && (o -= w.css(e, "padding" + Zt[s], !0, i)), n !== "margin" && (o -= w.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += w.css(e, "padding" + Zt[s], !0, i), n !== "padding" && (o += w.css(e, "border" + Zt[s] + "Width", !0, i)));
        return o
    }

    function un(e, t, n) {
        var r = !0,
            i = t === "width" ? e.offsetWidth : e.offsetHeight,
            s = qt(e),
            o = w.support.boxSizing && w.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = Rt(e, t, s);
            if (i < 0 || i == null) i = e.style[t];
            if (Jt.test(i)) return i;
            r = o && (w.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function an(e) {
        var t = o,
            n = Qt[e];
        if (!n) {
            n = fn(e, t);
            if (n === "none" || !n) It = (It || w("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = fn(e, t), It.detach();
            Qt[e] = n
        }
        return n
    }

    function fn(e, t) {
        var n = w(t.createElement(e)).appendTo(t.body),
            r = w.css(n[0], "display");
        return n.remove(), r
    }

    function vn(e, t, n, r) {
        var i;
        if (w.isArray(t)) w.each(t, function (t, i) {
            n || cn.test(e) ? r(e, i) : vn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && w.type(t) === "object")
            for (i in t) vn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function _n(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(S) || [];
            if (w.isFunction(n))
                while (r = s[i++]) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Dn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, w.each(e[u] || [], function (e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
                if (s) return !(a = f)
            }), a
        }
        var i = {},
            s = e === An;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function Pn(e, n) {
        var r, i, s = w.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        return r && w.extend(!0, e, r), e
    }

    function Hn(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes;
        while (f[0] === "*") f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
        if (s)
            for (u in a)
                if (a[u] && a[u].test(s)) {
                    f.unshift(u);
                    break
                }
        if (f[0] in r) o = f[0];
        else {
            for (u in r) {
                if (!f[0] || e.converters[u + " " + f[0]]) {
                    o = u;
                    break
                }
                i || (i = u)
            }
            o = o || i
        } if (o) return o !== f[0] && f.unshift(o), r[o]
    }

    function Bn(e, t, n, r) {
        var i, s, o, u, a, f = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s) {
            e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift();
            if (s)
                if (s === "*") s = a;
                else if (a !== "*" && a !== s) {
                o = f[a + " " + s] || f["* " + s];
                if (!o)
                    for (i in f) {
                        u = i.split(" ");
                        if (u[1] === s) {
                            o = f[a + " " + u[0]] || f["* " + u[0]];
                            if (o) {
                                o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                                break
                            }
                        }
                    }
                if (o !== !0)
                    if (o && e["throws"]) t = o(t);
                    else try {
                        t = o(t)
                    } catch (c) {
                        return {
                            state: "parsererror",
                            error: o ? c : "No conversion from " + a + " to " + s
                        }
                    }
            }
        }
        return {
            state: "success",
            data: t
        }
    }

    function zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function Wn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function Yn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = w.now()
    }

    function Zn(e, t, n) {
        var r, i = (Gn[t] || []).concat(Gn["*"]),
            s = 0,
            o = i.length;
        for (; s < o; s++)
            if (r = i[s].call(n, t, e)) return r
    }

    function er(e, t, n) {
        var r, i, s = 0,
            o = Qn.length,
            u = w.Deferred().always(function () {
                delete a.elem
            }),
            a = function () {
                if (i) return !1;
                var t = Xn || Yn(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    s = 1 - r,
                    o = 0,
                    a = f.tweens.length;
                for (; o < a; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Yn(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    i = !0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        tr(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = Qn[s].call(f, e, l, f.opts);
            if (r) return r
        }
        return w.map(l, Zn, f), w.isFunction(f.opts.start) && f.opts.start.call(e, f), w.fx.timer(w.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function tr(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = w.camelCase(n), i = t[r], s = e[n], w.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = w.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function nr(e, t, n) {
        var r, i, s, o, u, a, f = this,
            l = {},
            c = e.style,
            h = e.nodeType && nn(e),
            p = w._data(e, "fxshow");
        n.queue || (u = w._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function () {
            u.unqueued || a()
        }), u.unqueued++, f.always(function () {
            f.always(function () {
                u.unqueued--, w.queue(e, "fx").length || u.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [c.overflow, c.overflowX, c.overflowY], w.css(e, "display") === "inline" && w.css(e, "float") === "none" && (!w.support.inlineBlockNeedsLayout || an(e.nodeName) === "inline" ? c.display = "inline-block" : c.zoom = 1)), n.overflow && (c.overflow = "hidden", w.support.shrinkWrapBlocks || f.always(function () {
            c.overflow = n.overflow[0], c.overflowX = n.overflow[1], c.overflowY = n.overflow[2]
        }));
        for (r in t) {
            i = t[r];
            if ($n.exec(i)) {
                delete t[r], s = s || i === "toggle";
                if (i === (h ? "hide" : "show")) continue;
                l[r] = p && p[r] || w.style(e, r)
            }
        }
        if (!w.isEmptyObject(l)) {
            p ? "hidden" in p && (h = p.hidden) : p = w._data(e, "fxshow", {}), s && (p.hidden = !h), h ? w(e).show() : f.done(function () {
                w(e).hide()
            }), f.done(function () {
                var t;
                w._removeData(e, "fxshow");
                for (t in l) w.style(e, t, l[t])
            });
            for (r in l) o = Zn(h ? p[r] : 0, r, f), r in p || (p[r] = o.start, h && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    function ir(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function sr(e) {
        return w.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = typeof t,
        s = e.location,
        o = e.document,
        u = o.documentElement,
        a = e.jQuery,
        f = e.$,
        l = {},
        c = [],
        h = "1.10.2",
        p = c.concat,
        d = c.push,
        v = c.slice,
        m = c.indexOf,
        g = l.toString,
        y = l.hasOwnProperty,
        b = h.trim,
        w = function (e, t) {
            return new w.fn.init(e, t, r)
        },
        E = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        S = /\S+/g,
        x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        C = /^[\],:{}\s]*$/,
        k = /(?:^|:|,)(?:\s*\[)+/g,
        L = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        O = /^-ms-/,
        M = /-([\da-z])/gi,
        _ = function (e, t) {
            return t.toUpperCase()
        },
        D = function (e) {
            if (o.addEventListener || e.type === "load" || o.readyState === "complete") P(), w.ready()
        },
        P = function () {
            o.addEventListener ? (o.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1)) : (o.detachEvent("onreadystatechange", D), e.detachEvent("onload", D))
        };
    w.fn = w.prototype = {
        jquery: h,
        constructor: w,
        init: function (e, n, r) {
            var i, s;
            if (!e) return this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = T.exec(e);
                if (i && (i[1] || !n)) {
                    if (i[1]) {
                        n = n instanceof w ? n[0] : n, w.merge(this, w.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0));
                        if (N.test(i[1]) && w.isPlainObject(n))
                            for (i in n) w.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    s = o.getElementById(i[2]);
                    if (s && s.parentNode) {
                        if (s.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = s
                    }
                    return this.context = o, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : w.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function () {
            return v.call(this)
        },
        get: function (e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return w.each(this, e, t)
        },
        ready: function (e) {
            return w.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(v.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: d,
        sort: [].sort,
        splice: [].splice
    }, w.fn.init.prototype = w.fn, w.extend = w.fn.extend = function () {
        var e, n, r, i, s, o, u = arguments[0] || {},
            a = 1,
            f = arguments.length,
            l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !w.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)
            if ((s = arguments[a]) != null)
                for (i in s) {
                    e = u[i], r = s[i];
                    if (u === r) continue;
                    l && r && (w.isPlainObject(r) || (n = w.isArray(r))) ? (n ? (n = !1, o = e && w.isArray(e) ? e : []) : o = e && w.isPlainObject(e) ? e : {}, u[i] = w.extend(l, o, r)) : r !== t && (u[i] = r)
                }
            return u
    }, w.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        noConflict: function (t) {
            return e.$ === w && (e.$ = f), t && e.jQuery === w && (e.jQuery = a), w
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? w.readyWait++ : w.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? --w.readyWait : w.isReady) return;
            if (!o.body) return setTimeout(w.ready);
            w.isReady = !0;
            if (e !== !0 && --w.readyWait > 0) return;
            n.resolveWith(o, [w]), w.fn.trigger && w(o).trigger("ready").off("ready")
        },
        isFunction: function (e) {
            return w.type(e) === "function"
        },
        isArray: Array.isArray || function (e) {
            return w.type(e) === "array"
        },
        isWindow: function (e) {
            return e != null && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? l[g.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            var n;
            if (!e || w.type(e) !== "object" || e.nodeType || w.isWindow(e)) return !1;
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            if (w.support.ownLast)
                for (n in e) return y.call(e, n);
            for (n in e);
            return n === t || y.call(e, n)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw new Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || typeof e != "string") return null;
            typeof t == "boolean" && (n = t, t = !1), t = t || o;
            var r = N.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = w.buildFragment([e], t, i), i && w(i).remove(), w.merge([], r.childNodes))
        },
        parseJSON: function (t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (t === null) return t;
            if (typeof t == "string") {
                t = w.trim(t);
                if (t && C.test(t.replace(L, "@").replace(A, "]").replace(k, ""))) return (new Function("return " + t))()
            }
            w.error("Invalid JSON: " + t)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && w.error("Invalid XML: " + n), r
        },
        noop: function () {},
        globalEval: function (t) {
            t && w.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(O, "ms-").replace(M, _)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, n) {
            var r, i = 0,
                s = e.length,
                o = H(e);
            if (n)
                if (o)
                    for (; i < s; i++) {
                        r = t.apply(e[i], n);
                        if (r === !1) break
                    } else
                        for (i in e) {
                            r = t.apply(e[i], n);
                            if (r === !1) break
                        } else if (o)
                            for (; i < s; i++) {
                                r = t.call(e[i], i, e[i]);
                                if (r === !1) break
                            } else
                                for (i in e) {
                                    r = t.call(e[i], i, e[i]);
                                    if (r === !1) break
                                }
                        return e
        },
        trim: b && !b.call("﻿ ") ? function (e) {
            return e == null ? "" : b.call(e)
        } : function (e) {
            return e == null ? "" : (e + "").replace(x, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return e != null && (H(Object(e)) ? w.merge(n, typeof e == "string" ? [e] : e) : d.call(n, e)), n
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (m) return m.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if (typeof r == "number")
                for (; s < r; s++) e[i++] = n[s];
            else
                while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !!n;
            for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function (e, t, n) {
            var r, i = 0,
                s = e.length,
                o = H(e),
                u = [];
            if (o)
                for (; i < s; i++) r = t(e[i], i, n), r != null && (u[u.length] = r);
            else
                for (i in e) r = t(e[i], i, n), r != null && (u[u.length] = r);
            return p.apply([], u)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, s;
            return typeof n == "string" && (s = e[n], n = e, e = s), w.isFunction(e) ? (r = v.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(v.call(arguments)))
            }, i.guid = e.guid = e.guid || w.guid++, i) : t
        },
        access: function (e, n, r, i, s, o, u) {
            var a = 0,
                f = e.length,
                l = r == null;
            if (w.type(r) === "object") {
                s = !0;
                for (a in r) w.access(e, n, a, r[a], !0, o, u)
            } else if (i !== t) {
                s = !0, w.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function (e, t, n) {
                    return l.call(w(e), n)
                }));
                if (n)
                    for (; a < f; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)))
            }
            return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
        },
        now: function () {
            return (new Date).getTime()
        },
        swap: function (e, t, n, r) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t) e.style[s] = o[s];
            return i
        }
    }), w.ready.promise = function (t) {
        if (!n) {
            n = w.Deferred();
            if (o.readyState === "complete") setTimeout(w.ready);
            else if (o.addEventListener) o.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1);
            else {
                o.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
                var r = !1;
                try {
                    r = e.frameElement == null && o.documentElement
                } catch (i) {}
                r && r.doScroll && function s() {
                    if (!w.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (e) {
                            return setTimeout(s, 50)
                        }
                        P(), w.ready()
                    }
                }()
            }
        }
        return n.promise(t)
    }, w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }), r = w(o),
    function (e, t) {
        function ot(e, t, n, i) {
            var s, o, u, a, f, l, p, m, g, w;
            (t ? t.ownerDocument || t : E) !== h && c(t), t = t || h, n = n || [];
            if (!e || typeof e != "string") return n;
            if ((a = t.nodeType) !== 1 && a !== 9) return [];
            if (d && !i) {
                if (s = Z.exec(e))
                    if (u = s[1]) {
                        if (a === 9) {
                            o = t.getElementById(u);
                            if (!o || !o.parentNode) return n;
                            if (o.id === u) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && y(t, o) && o.id === u) return n.push(o), n
                    } else {
                        if (s[2]) return H.apply(n, t.getElementsByTagName(e)), n;
                        if ((u = s[3]) && r.getElementsByClassName && t.getElementsByClassName) return H.apply(n, t.getElementsByClassName(u)), n
                    }
                if (r.qsa && (!v || !v.test(e))) {
                    m = p = b, g = t, w = a === 9 && e;
                    if (a === 1 && t.nodeName.toLowerCase() !== "object") {
                        l = mt(e), (p = t.getAttribute("id")) ? m = p.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", f = l.length;
                        while (f--) l[f] = m + gt(l[f]);
                        g = $.test(e) && t.parentNode || t, w = l.join(",")
                    }
                    if (w) try {
                        return H.apply(n, g.querySelectorAll(w)), n
                    } catch (S) {} finally {
                        p || t.removeAttribute("id")
                    }
                }
            }
            return Nt(e.replace(W, "$1"), t, n, i)
        }

        function ut() {
            function t(n, r) {
                return e.push(n += " ") > s.cacheLength && delete t[e.shift()], t[n] = r
            }
            var e = [];
            return t
        }

        function at(e) {
            return e[b] = !0, e
        }

        function ft(e) {
            var t = h.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function lt(e, t) {
            var n = e.split("|"),
                r = e.length;
            while (r--) s.attrHandle[n[r]] = t
        }

        function ct(e, t) {
            var n = t && e,
                r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || O) - (~e.sourceIndex || O);
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ht(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }

        function pt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }

        function dt(e) {
            return at(function (t) {
                return t = +t, at(function (n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function vt() {}

        function mt(e, t) {
            var n, r, i, o, u, a, f, l = N[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = s.preFilter;
            while (u) {
                if (!n || (r = X.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(i = []);
                n = !1;
                if (r = V.exec(u)) n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(W, " ")
                }), u = u.slice(n.length);
                for (o in s.filter)(r = G[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), u = u.slice(n.length));
                if (!n) break
            }
            return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
        }

        function gt(e) {
            var t = 0,
                n = e.length,
                r = "";
            for (; t < n; t++) r += e[t].value;
            return r
        }

        function yt(e, t, n) {
            var r = t.dir,
                s = n && r === "parentNode",
                o = x++;
            return t.first ? function (t, n, i) {
                while (t = t[r])
                    if (t.nodeType === 1 || s) return e(t, n, i)
            } : function (t, n, u) {
                var a, f, l, c = S + " " + o;
                if (u) {
                    while (t = t[r])
                        if (t.nodeType === 1 || s)
                            if (e(t, n, u)) return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || s) {
                            l = t[b] || (t[b] = {});
                            if ((f = l[r]) && f[0] === c) {
                                if ((a = f[1]) === !0 || a === i) return a === !0
                            } else {
                                f = l[r] = [c], f[1] = e(t, n, u) || i;
                                if (f[1] === !0) return !0
                            }
                        }
            }
        }

        function bt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function wt(e, t, n, r, i) {
            var s, o = [],
                u = 0,
                a = e.length,
                f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i)) o.push(s), f && t.push(u);
            return o
        }

        function Et(e, t, n, r, i, s) {
            return r && !r[b] && (r = Et(r)), i && !i[b] && (i = Et(i, s)), at(function (s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || Tt(t || "*", u.nodeType ? [u] : u, []),
                    m = e && (s || !t) ? wt(v, h, e, u, a) : v,
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = wt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)
                        if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? j.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = wt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : H.apply(o, g)
            })
        }

        function St(e) {
            var t, n, r, i = e.length,
                o = s.relative[e[0].type],
                u = o || s.relative[" "],
                a = o ? 1 : 0,
                l = yt(function (e) {
                    return e === t
                }, u, !0),
                c = yt(function (e) {
                    return j.call(t, e) > -1
                }, u, !0),
                h = [
                    function (e, n, r) {
                        return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                    }
                ];
            for (; a < i; a++)
                if (n = s.relative[e[a].type]) h = [yt(bt(h), n)];
                else {
                    n = s.filter[e[a].type].apply(null, e[a].matches);
                    if (n[b]) {
                        r = ++a;
                        for (; r < i; r++)
                            if (s.relative[e[r].type]) break;
                        return Et(a > 1 && bt(h), a > 1 && gt(e.slice(0, a - 1).concat({
                            value: e[a - 2].type === " " ? "*" : ""
                        })).replace(W, "$1"), n, a < r && St(e.slice(a, r)), r < i && St(e = e.slice(r)), r < i && gt(e))
                    }
                    h.push(n)
                }
            return bt(h)
        }

        function xt(e, t) {
            var n = 0,
                r = t.length > 0,
                o = e.length > 0,
                u = function (u, a, l, c, p) {
                    var d, v, m, g = [],
                        y = 0,
                        b = "0",
                        w = u && [],
                        E = p != null,
                        x = f,
                        T = u || o && s.find.TAG("*", p && a.parentNode || a),
                        N = S += x == null ? 1 : Math.random() || .1;
                    E && (f = a !== h && a, i = n);
                    for (;
                        (d = T[b]) != null; b++) {
                        if (o && d) {
                            v = 0;
                            while (m = e[v++])
                                if (m(d, a, l)) {
                                    c.push(d);
                                    break
                                }
                            E && (S = N, i = ++n)
                        }
                        r && ((d = !m && d) && y--, u && w.push(d))
                    }
                    y += b;
                    if (r && b !== y) {
                        v = 0;
                        while (m = t[v++]) m(w, g, a, l);
                        if (u) {
                            if (y > 0)
                                while (b--)!w[b] && !g[b] && (g[b] = D.call(c));
                            g = wt(g)
                        }
                        H.apply(c, g), E && !u && g.length > 0 && y + t.length > 1 && ot.uniqueSort(c)
                    }
                    return E && (S = N, f = x), w
                };
            return r ? at(u) : u
        }

        function Tt(e, t, n) {
            var r = 0,
                i = t.length;
            for (; r < i; r++) ot(e, t[r], n);
            return n
        }

        function Nt(e, t, n, i) {
            var o, u, f, l, c, h = mt(e);
            if (!i && h.length === 1) {
                u = h[0] = h[0].slice(0);
                if (u.length > 2 && (f = u[0]).type === "ID" && r.getById && t.nodeType === 9 && d && s.relative[u[1].type]) {
                    t = (s.find.ID(f.matches[0].replace(rt, it), t) || [])[0];
                    if (!t) return n;
                    e = e.slice(u.shift().value.length)
                }
                o = G.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    f = u[o];
                    if (s.relative[l = f.type]) break;
                    if (c = s.find[l])
                        if (i = c(f.matches[0].replace(rt, it), $.test(u[0].type) && t.parentNode || t)) {
                            u.splice(o, 1), e = i.length && gt(u);
                            if (!e) return H.apply(n, i), n;
                            break
                        }
                }
            }
            return a(e, h)(i, t, !d, n, $.test(e)), n
        }
        var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b = "sizzle" + -(new Date),
            E = e.document,
            S = 0,
            x = 0,
            T = ut(),
            N = ut(),
            C = ut(),
            k = !1,
            L = function (e, t) {
                return e === t ? (k = !0, 0) : 0
            },
            A = typeof t,
            O = 1 << 31,
            M = {}.hasOwnProperty,
            _ = [],
            D = _.pop,
            P = _.push,
            H = _.push,
            B = _.slice,
            j = _.indexOf || function (e) {
                var t = 0,
                    n = this.length;
                for (; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            },
            F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            R = q.replace("w", "w#"),
            U = "\\[" + I + "*(" + q + ")" + I + "*(?:([*^$|!~]?=)" + I + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + R + ")|)|)" + I + "*\\]",
            z = ":(" + q + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + U.replace(3, 8) + ")*)|.*)\\)|)",
            W = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            X = new RegExp("^" + I + "*," + I + "*"),
            V = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            $ = new RegExp(I + "*[+~]"),
            J = new RegExp("=" + I + "*([^\\]'\"]*)" + I + "*\\]", "g"),
            K = new RegExp(z),
            Q = new RegExp("^" + R + "$"),
            G = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + U),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + F + ")$", "i"),
                needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            et = /^(?:input|select|textarea|button)$/i,
            tt = /^h\d$/i,
            nt = /'|\\/g,
            rt = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
            it = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            };
        try {
            H.apply(_ = B.call(E.childNodes), E.childNodes), _[E.childNodes.length].nodeType
        } catch (st) {
            H = {
                apply: _.length ? function (e, t) {
                    P.apply(e, B.call(t))
                } : function (e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        u = ot.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, r = ot.support = {}, c = ot.setDocument = function (e) {
            var t = e ? e.ownerDocument || e : E,
                n = t.defaultView;
            if (t === h || t.nodeType !== 9 || !t.documentElement) return h;
            h = t, p = t.documentElement, d = !u(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
                c()
            }), r.attributes = ft(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), r.getElementsByTagName = ft(function (e) {
                return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ft(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", e.getElementsByClassName("i").length === 2
            }), r.getById = ft(function (e) {
                return p.appendChild(e).id = b, !t.getElementsByName || !t.getElementsByName(b).length
            }), r.getById ? (s.find.ID = function (e, t) {
                if (typeof t.getElementById !== A && d) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, s.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete s.find.ID, s.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), s.find.TAG = r.getElementsByTagName ? function (e, t) {
                if (typeof t.getElementsByTagName !== A) return t.getElementsByTagName(e)
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++]) n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            }, s.find.CLASS = r.getElementsByClassName && function (e, t) {
                if (typeof t.getElementsByClassName !== A && d) return t.getElementsByClassName(e)
            }, m = [], v = [];
            if (r.qsa = Y.test(t.querySelectorAll)) ft(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + F + ")"), e.querySelectorAll(":checked").length || v.push(":checked")
            }), ft(function (e) {
                var n = t.createElement("input");
                n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            });
            return (r.matchesSelector = Y.test(g = p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ft(function (e) {
                r.disconnectedMatch = g.call(e, "div"), g.call(e, "[s!='']:x"), m.push("!=", z)
            }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), y = Y.test(p.contains) || p.compareDocumentPosition ? function (e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            } : function (e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, L = p.compareDocumentPosition ? function (e, n) {
                if (e === n) return k = !0, 0;
                var i = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                if (i) return i & 1 || !r.sortDetached && n.compareDocumentPosition(e) === i ? e === t || y(E, e) ? -1 : n === t || y(E, n) ? 1 : l ? j.call(l, e) - j.call(l, n) : 0 : i & 4 ? -1 : 1;
                return e.compareDocumentPosition ? -1 : 1
            } : function (e, n) {
                var r, i = 0,
                    s = e.parentNode,
                    o = n.parentNode,
                    u = [e],
                    a = [n];
                if (e === n) return k = !0, 0;
                if (!s || !o) return e === t ? -1 : n === t ? 1 : s ? -1 : o ? 1 : l ? j.call(l, e) - j.call(l, n) : 0;
                if (s === o) return ct(e, n);
                r = e;
                while (r = r.parentNode) u.unshift(r);
                r = n;
                while (r = r.parentNode) a.unshift(r);
                while (u[i] === a[i]) i++;
                return i ? ct(u[i], a[i]) : u[i] === E ? -1 : a[i] === E ? 1 : 0
            }, t
        }, ot.matches = function (e, t) {
            return ot(e, null, null, t)
        }, ot.matchesSelector = function (e, t) {
            (e.ownerDocument || e) !== h && c(e), t = t.replace(J, "='$1']");
            if (r.matchesSelector && d && (!m || !m.test(t)) && (!v || !v.test(t))) try {
                var n = g.call(e, t);
                if (n || r.disconnectedMatch || e.document && e.document.nodeType !== 11) return n
            } catch (i) {}
            return ot(t, h, null, [e]).length > 0
        }, ot.contains = function (e, t) {
            return (e.ownerDocument || e) !== h && c(e), y(e, t)
        }, ot.attr = function (e, n) {
            (e.ownerDocument || e) !== h && c(e);
            var i = s.attrHandle[n.toLowerCase()],
                o = i && M.call(s.attrHandle, n.toLowerCase()) ? i(e, n, !d) : t;
            return o === t ? r.attributes || !d ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null : o
        }, ot.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ot.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                s = 0;
            k = !r.detectDuplicates, l = !r.sortStable && e.slice(0), e.sort(L);
            if (k) {
                while (t = e[s++]) t === e[s] && (i = n.push(s));
                while (i--) e.splice(n[i], 1)
            }
            return e
        }, o = ot.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (!i)
                for (; t = e[r]; r++) n += o(t);
            else if (i === 1 || i === 9 || i === 11) {
                if (typeof e.textContent == "string") return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
            } else if (i === 3 || i === 4) return e.nodeValue;
            return n
        }, s = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: G,
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
                    return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ot.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var n, r = !e[5] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && K.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return e === "*" ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && T(e, function (e) {
                        return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = ot.attr(r, e);
                        return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth",
                        o = e.slice(-4) !== "last",
                        u = t === "of-type";
                    return r === 1 && i === 0 ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                    d = v = e === "only" && !d && "nextSibling"
                                }
                                return !0
                            }
                            d = [o ? m.firstChild : m.lastChild];
                            if (o && y) {
                                l = m[b] || (m[b] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (c.nodeType === 1 && ++h && c === t) {
                                        l[e] = [S, p, h];
                                        break
                                    }
                            } else if (y && (f = (t[b] || (t[b] = {}))[e]) && f[0] === S) h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                        y && ((c[b] || (c[b] = {}))[e] = [S, h]);
                                        if (c === t) break
                                    } return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, r = s.pseudos[e] || s.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], s.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function (e, n) {
                        var i, s = r(e, t),
                            o = s.length;
                        while (o--) i = j.call(e, s[o]), e[i] = !(n[i] = s[o])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: at(function (e) {
                    var t = [],
                        n = [],
                        r = a(e.replace(W, "$1"));
                    return r[b] ? at(function (e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--)
                            if (s = o[u]) e[u] = !(t[u] = s)
                    }) : function (e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: at(function (e) {
                    return function (t) {
                        return ot(e, t).length > 0
                    }
                }),
                contains: at(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    }
                }),
                lang: at(function (e) {
                    return Q.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                        function (t) {
                            var n;
                            do
                                if (n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
                            while ((t = t.parentNode) && t.nodeType === 1);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === p
                },
                focus: function (e) {
                    return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) return !1;
                    return !0
                },
                parent: function (e) {
                    return !s.pseudos.empty(e)
                },
                header: function (e) {
                    return tt.test(e.nodeName)
                },
                input: function (e) {
                    return et.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                text: function (e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                },
                first: dt(function () {
                    return [0]
                }),
                last: dt(function (e, t) {
                    return [t - 1]
                }),
                eq: dt(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: dt(function (e, t) {
                    var n = 0;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: dt(function (e, t) {
                    var n = 1;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: dt(function (e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: dt(function (e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; ++r < t;) e.push(r);
                    return e
                })
            }
        }, s.pseudos.nth = s.pseudos.eq;
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) s.pseudos[n] = ht(n);
        for (n in {
            submit: !0,
            reset: !0
        }) s.pseudos[n] = pt(n);
        vt.prototype = s.filters = s.pseudos, s.setFilters = new vt, a = ot.compile = function (e, t) {
            var n, r = [],
                i = [],
                s = C[e + " "];
            if (!s) {
                t || (t = mt(e)), n = t.length;
                while (n--) s = St(t[n]), s[b] ? r.push(s) : i.push(s);
                s = C(e, xt(i, r))
            }
            return s
        }, r.sortStable = b.split("").sort(L).join("") === b, r.detectDuplicates = k, c(), r.sortDetached = ft(function (e) {
            return e.compareDocumentPosition(h.createElement("div")) & 1
        }), ft(function (e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
        }) || lt("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), (!r.attributes || !ft(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
        })) && lt("value", function (e, t, n) {
            if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue
        }), ft(function (e) {
            return e.getAttribute("disabled") == null
        }) || lt(F, function (e, t, n) {
            var r;
            if (!n) return (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
        }), w.find = ot, w.expr = ot.selectors, w.expr[":"] = w.expr.pseudos, w.unique = ot.uniqueSort, w.text = ot.getText, w.isXMLDoc = ot.isXML, w.contains = ot.contains
    }(e);
    var B = {};
    w.Callbacks = function (e) {
        e = typeof e == "string" ? B[e] || j(e) : w.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function (t) {
                r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0;
                for (; a && o < s; o++)
                    if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable())
            },
            c = {
                add: function () {
                    if (a) {
                        var t = a.length;
                        (function i(t) {
                            w.each(t, function (t, n) {
                                var r = w.type(n);
                                r === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && r !== "string" && i(n)
                            })
                        })(arguments), n ? s = a.length : r && (u = t, l(r))
                    }
                    return this
                },
                remove: function () {
                    return a && w.each(arguments, function (e, t) {
                        var r;
                        while ((r = w.inArray(t, a, r)) > -1) a.splice(r, 1), n && (r <= s && s--, r <= o && o--)
                    }), this
                },
                has: function (e) {
                    return e ? w.inArray(e, a) > -1 : !!a && !!a.length
                },
                empty: function () {
                    return a = [], s = 0, this
                },
                disable: function () {
                    return a = f = r = t, this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return f = t, r || c.disable(), this
                },
                locked: function () {
                    return !f
                },
                fireWith: function (e, t) {
                    return a && (!i || f) && (t = t || [], t = [e, t.slice ? t.slice() : t], n ? f.push(t) : l(t)), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return c
    }, w.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", w.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", w.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return w.Deferred(function (n) {
                            w.each(t, function (t, s) {
                                var o = s[0],
                                    u = w.isFunction(e[t]) && e[t];
                                i[s[1]](function () {
                                    var e = u && u.apply(this, arguments);
                                    e && w.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return e != null ? w.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, w.each(t, function (e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function () {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t = 0,
                n = v.call(arguments),
                r = n.length,
                i = r !== 1 || e && w.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : w.Deferred(),
                o = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? v.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                },
                u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && w.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), w.support = function (t) {
        var n, r, s, u, a, f, l, c, h, p = o.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], r = p.getElementsByTagName("a")[0];
        if (!r || !r.style || !n.length) return t;
        u = o.createElement("select"), f = u.appendChild(o.createElement("option")), s = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = p.className !== "t", t.leadingWhitespace = p.firstChild.nodeType === 3, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !!p.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = r.getAttribute("href") === "/a", t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!s.value, t.optSelected = f.selected, t.enctype = !!o.createElement("form").enctype, t.html5Clone = o.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, u.disabled = !0, t.optDisabled = !f.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        s = o.createElement("input"), s.setAttribute("value", ""), t.input = s.getAttribute("value") === "", s.value = "t", s.setAttribute("type", "radio"), t.radioValue = s.value === "t", s.setAttribute("checked", "t"), s.setAttribute("name", "t"), a = o.createDocumentFragment(), a.appendChild(s), t.appendChecked = s.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (h in {
            submit: !0,
            change: !0,
            focusin: !0
        }) p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = p.style.backgroundClip === "content-box";
        for (h in w(t)) break;
        return t.ownLast = h !== "0", w(function () {
            var n, r, s, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = o.getElementsByTagName("body")[0];
            if (!a) return;
            n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = p.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", w.swap(a, a.style.zoom != null ? {
                zoom: 1
            } : {}, function () {
                t.boxSizing = p.offsetWidth === 4
            }), e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(p, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(p, null) || {
                width: "4px"
            }).width === "4px", r = p.appendChild(o.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = p.offsetWidth !== 3, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = s = r = null
        }), n = u = a = f = r = s = null, t
    }({});
    var F = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        I = /([A-Z])/g;
    w.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando], !!e && !z(e)
        },
        data: function (e, t, n) {
            return q(e, t, n)
        },
        removeData: function (e, t) {
            return R(e, t)
        },
        _data: function (e, t, n) {
            return q(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return R(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9) return !1;
            var t = e.nodeName && w.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), w.fn.extend({
        data: function (e, n) {
            var r, i, s = null,
                o = 0,
                u = this[0];
            if (e === t) {
                if (this.length) {
                    s = w.data(u);
                    if (u.nodeType === 1 && !w._data(u, "parsedAttrs")) {
                        r = u.attributes;
                        for (; o < r.length; o++) i = r[o].name, i.indexOf("data-") === 0 && (i = w.camelCase(i.slice(5)), U(u, i, s[i]));
                        w._data(u, "parsedAttrs", !0)
                    }
                }
                return s
            }
            return typeof e == "object" ? this.each(function () {
                w.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                w.data(this, e, n)
            }) : u ? U(u, e, w.data(u, e)) : null
        },
        removeData: function (e) {
            return this.each(function () {
                w.removeData(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = w._data(e, t), n && (!r || w.isArray(n) ? r = w._data(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = w._queueHooks(e, t),
                o = function () {
                    w.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return w._data(e, n) || w._data(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    w._removeData(e, t + "queue"), w._removeData(e, n)
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? w.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = w.queue(this, e, n);
                w._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && w.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = w.fx ? w.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                s = w.Deferred(),
                o = this,
                u = this.length,
                a = function () {
                    --i || s.resolveWith(o, [o])
                };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = w._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var W, X, V = /[\t\r\n\f]/g,
        $ = /\r/g,
        J = /^(?:input|select|textarea|button|object)$/i,
        K = /^(?:a|area)$/i,
        Q = /^(?:checked|selected)$/i,
        G = w.support.getSetAttribute,
        Y = w.support.input;
    w.fn.extend({
        attr: function (e, t) {
            return w.access(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return w.access(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = w.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = typeof e == "string" && e;
            if (w.isFunction(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(S) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(V, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = w.trim(r)
                    }
                }
            }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = arguments.length === 0 || typeof e == "string" && e;
            if (w.isFunction(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(S) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(V, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? w.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : w.isFunction(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var t, r = 0,
                        s = w(this),
                        o = e.match(S) || [];
                    while (t = o[r++]) s.hasClass(t) ? s.removeClass(t) : s.addClass(t)
                } else if (n === i || n === "boolean") this.className && w._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : w._data(this, "__className__") || ""
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(V, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return r = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()], r && "get" in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, typeof n == "string" ? n.replace($, "") : n == null ? "" : n);
                return
            }
            return i = w.isFunction(e), this.each(function (n) {
                var s;
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, n, w(this).val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : w.isArray(s) && (s = w.map(s, function (e) {
                    return e == null ? "" : e + ""
                })), r = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()];
                if (!r || !("set" in r) || r.set(this, s, "value") === t) this.value = s
            })
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return t != null ? t : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (w.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !w.nodeName(n.parentNode, "optgroup"))) {
                            t = w(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function (e, t) {
                    var n, r, i = e.options,
                        s = w.makeArray(t),
                        o = i.length;
                    while (o--) {
                        r = i[o];
                        if (r.selected = w.inArray(w(r).val(), s) >= 0) n = !0
                    }
                    return n || (e.selectedIndex = -1), s
                }
            }
        },
        attr: function (e, n, r) {
            var s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            if (typeof e.getAttribute === i) return w.prop(e, n, r);
            if (u !== 1 || !w.isXMLDoc(e)) n = n.toLowerCase(), s = w.attrHooks[n] || (w.expr.match.bool.test(n) ? X : W);
            if (r === t) return s && "get" in s && (o = s.get(e, n)) !== null ? o : (o = w.find.attr(e, n), o == null ? t : o);
            if (r !== null) return s && "set" in s && (o = s.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r);
            w.removeAttr(e, n)
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                s = t && t.match(S);
            if (s && e.nodeType === 1)
                while (n = s[i++]) r = w.propFix[n] || n, w.expr.match.bool.test(n) ? Y && G || !Q.test(n) ? e[r] = !1 : e[w.camelCase("default-" + n)] = e[r] = !1 : w.attr(e, n, ""), e.removeAttribute(G ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!w.support.radioValue && t === "radio" && w.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !w.isXMLDoc(e), o && (n = w.propFix[n] || n, s = w.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : J.test(e.nodeName) || K.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function (e, t, n) {
            return t === !1 ? w.removeAttr(e, n) : Y && G || !Q.test(n) ? e.setAttribute(!G && w.propFix[n] || n, n) : e[w.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = w.expr.attrHandle[n] || w.find.attr;
        w.expr.attrHandle[n] = Y && G || !Q.test(n) ? function (e, n, i) {
            var s = w.expr.attrHandle[n],
                o = i ? t : (w.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return w.expr.attrHandle[n] = s, o
        } : function (e, n, r) {
            return r ? t : e[w.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    });
    if (!Y || !G) w.attrHooks.value = {
        set: function (e, t, n) {
            if (!w.nodeName(e, "input")) return W && W.set(e, t, n);
            e.defaultValue = t
        }
    };
    G || (W = {
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", r === "value" || n === e.getAttribute(r) ? n : t
        }
    }, w.expr.attrHandle.id = w.expr.attrHandle.name = w.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && i.value !== "" ? i.value : null
    }, w.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: W.set
    }, w.attrHooks.contenteditable = {
        set: function (e, t, n) {
            W.set(e, t === "" ? !1 : t, n)
        }
    }, w.each(["width", "height"], function (e, t) {
        w.attrHooks[t] = {
            set: function (e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        }
    })), w.support.hrefNormalized || w.each(["href", "src"], function (e, t) {
        w.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), w.support.style || (w.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), w.support.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    }), w.support.enctype || (w.propFix.enctype = "encoding"), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (w.isArray(t)) return e.checked = w.inArray(w(e).val(), t) >= 0
            }
        }, w.support.checkOn || (w.valHooks[this].get = function (e) {
            return e.getAttribute("value") === null ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;
    w.event = {
        global: {},
        add: function (e, n, r, s, o) {
            var u, a, f, l, c, h, p, d, v, m, g, y = w._data(e);
            if (!y) return;
            r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = w.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function (e) {
                return typeof w === i || !!e && w.event.triggered === e.type ? t : w.event.dispatch.apply(h.elem, arguments)
            }, h.elem = e), n = (n || "").match(S) || [""], f = n.length;
            while (f--) {
                u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort();
                if (!v) continue;
                c = w.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = w.event.special[v] || {}, p = w.extend({
                    type: v,
                    origType: g,
                    data: s,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && w.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l);
                if (!(d = a[v])) {
                    d = a[v] = [], d.delegateCount = 0;
                    if (!c.setup || c.setup.call(e, s, m, h) === !1) e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h)
                }
                c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), w.event.global[v] = !0
            }
            e = null
        },
        remove: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = w.hasData(e) && w._data(e);
            if (!m || !(l = m.events)) return;
            t = (t || "").match(S) || [""], f = t.length;
            while (f--) {
                u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                if (!p) {
                    for (p in l) w.event.remove(e, p + t[f], n, r, !0);
                    continue
                }
                c = w.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                while (s--) o = h[s], (i || v === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                a && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && w.removeEvent(e, p, m.handle), delete l[p])
            }
            w.isEmptyObject(l) && (delete m.handle, w._removeData(e, "events"))
        },
        trigger: function (n, r, i, s) {
            var u, a, f, l, c, h, p, d = [i || o],
                v = y.call(n, "type") ? n.type : n,
                m = y.call(n, "namespace") ? n.namespace.split(".") : [];
            f = h = i = i || o;
            if (i.nodeType === 3 || i.nodeType === 8) return;
            if (nt.test(v + w.event.triggered)) return;
            v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = v.indexOf(":") < 0 && "on" + v, n = n[w.expando] ? n : new w.Event(v, typeof n == "object" && n), n.isTrigger = s ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = r == null ? [n] : w.makeArray(r, [n]), c = w.event.special[v] || {};
            if (!s && c.trigger && c.trigger.apply(i, r) === !1) return;
            if (!s && !c.noBubble && !w.isWindow(i)) {
                l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode);
                for (; f; f = f.parentNode) d.push(f), h = f;
                h === (i.ownerDocument || o) && d.push(h.defaultView || h.parentWindow || e)
            }
            p = 0;
            while ((f = d[p++]) && !n.isPropagationStopped()) n.type = p > 1 ? l : c.bindType || v, u = (w._data(f, "events") || {})[n.type] && w._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && w.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
            n.type = v;
            if (!s && !n.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), r) === !1) && w.acceptData(i) && a && i[v] && !w.isWindow(i)) {
                h = i[a], h && (i[a] = null), w.event.triggered = v;
                try {
                    i[v]()
                } catch (g) {}
                w.event.triggered = t, h && (i[a] = h)
            }
            return n.result
        },
        dispatch: function (e) {
            e = w.event.fix(e);
            var n, r, i, s, o, u = [],
                a = v.call(arguments),
                f = (w._data(this, "events") || {})[e.type] || [],
                l = w.event.special[e.type] || {};
            a[0] = e, e.delegateTarget = this;
            if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
            u = w.event.handlers.call(this, e, f), n = 0;
            while ((s = u[n++]) && !e.isPropagationStopped()) {
                e.currentTarget = s.elem, o = 0;
                while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
                    if (!e.namespace_re || e.namespace_re.test(i.namespace)) e.handleObj = i, e.data = i.data, r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())
            }
            return l.postDispatch && l.postDispatch.call(this, e), e.result
        },
        handlers: function (e, n) {
            var r, i, s, o, u = [],
                a = n.delegateCount,
                f = e.target;
            if (a && f.nodeType && (!e.button || e.type !== "click"))
                for (; f != this; f = f.parentNode || this)
                    if (f.nodeType === 1 && (f.disabled !== !0 || e.type !== "click")) {
                        s = [];
                        for (o = 0; o < a; o++) i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? w(r, this).index(f) >= 0 : w.find(r, this, null, [f]).length), s[r] && s.push(i);
                        s.length && u.push({
                            elem: f,
                            handlers: s
                        })
                    }
            return a < n.length && u.push({
                elem: this,
                handlers: n.slice(a)
            }), u
        },
        fix: function (e) {
            if (e[w.expando]) return e;
            var t, n, r, i = e.type,
                s = e,
                u = this.fixHooks[i];
            u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new w.Event(s), t = r.length;
            while (t--) n = r[t], e[n] = s[n];
            return e.target || (e.target = s.srcElement || o), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, u.filter ? u.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, s, u = n.button,
                    a = n.fromElement;
                return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || o, s = i.documentElement, r = i.body, e.pageX = n.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== ot() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === ot() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (w.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
                },
                _default: function (e) {
                    return w.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? w.event.trigger(i, null, t) : w.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, w.removeEvent = o.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || w.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                if (!i || i !== r && !w.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), w.support.submitBubbles || (w.event.special.submit = {
        setup: function () {
            if (w.nodeName(this, "form")) return !1;
            w.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = w.nodeName(n, "input") || w.nodeName(n, "button") ? n.form : t;
                r && !w._data(r, "submitBubbles") && (w.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), w._data(r, "submitBubbles", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && w.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            if (w.nodeName(this, "form")) return !1;
            w.event.remove(this, "._submit")
        }
    }), w.support.changeBubbles || (w.event.special.change = {
        setup: function () {
            if (Z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") w.event.add(this, "propertychange._change", function (e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), w.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), w.event.simulate("change", this, e, !0)
                });
                return !1
            }
            w.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !w._data(t, "changeBubbles") && (w.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && w.event.simulate("change", this.parentNode, e, !0)
                }), w._data(t, "changeBubbles", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return w.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), w.support.focusinBubbles || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                w.event.simulate(t, e.target, w.event.fix(e), !0)
            };
        w.event.special[t] = {
            setup: function () {
                n++ === 0 && o.addEventListener(e, r, !0)
            },
            teardown: function () {
                --n === 0 && o.removeEventListener(e, r, !0)
            }
        }
    }), w.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (o in e) this.on(o, n, r, e[o], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = st;
            else if (!i) return this;
            return s === 1 && (u = i, i = function (e) {
                return w().off(e), u.apply(this, arguments)
            }, i.guid = u.guid || (u.guid = w.guid++)), this.each(function () {
                w.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if (typeof e == "object") {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = st), this.each(function () {
                w.event.remove(this, e, r, n)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    });
    var ut = /^.[^:#\[\.,]*$/,
        at = /^(?:parents|prev(?:Until|All))/,
        ft = w.expr.match.needsContext,
        lt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    w.fn.extend({
        find: function (e) {
            var t, n = [],
                r = this,
                i = r.length;
            if (typeof e != "string") return this.pushStack(w(e).filter(function () {
                for (t = 0; t < i; t++)
                    if (w.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) w.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? w.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function (e) {
            var t, n = w(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++)
                    if (w.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(ht(this, e || [], !0))
        },
        filter: function (e) {
            return this.pushStack(ht(this, e || [], !1))
        },
        is: function (e) {
            return !!ht(this, typeof e == "string" && ft.test(e) ? w(e) : e || [], !1).length
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = ft.test(e) || typeof e != "string" ? w(e, t || this.context) : 0;
            for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && w.find.matchesSelector(n, e))) {
                        n = s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? w.unique(s) : s)
        },
        index: function (e) {
            return e ? typeof e == "string" ? w.inArray(this[0], w(e)) : w.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = typeof e == "string" ? w(e, t) : w.makeArray(e && e.nodeType ? [e] : e),
                r = w.merge(this.get(), n);
            return this.pushStack(w.unique(r))
        },
        addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
            return w.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return w.dir(e, "parentNode", n)
        },
        next: function (e) {
            return ct(e, "nextSibling")
        },
        prev: function (e) {
            return ct(e, "previousSibling")
        },
        nextAll: function (e) {
            return w.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return w.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return w.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return w.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return w.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return w.sibling(e.firstChild)
        },
        contents: function (e) {
            return w.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : w.merge([], e.childNodes)
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = w.filter(r, i)), this.length > 1 && (lt[e] || (i = w.unique(i)), at.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), w.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
                return e.nodeType === 1
            }))
        },
        dir: function (e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !w(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        vt = / jQuery\d+="(?:null|\d+)"/g,
        mt = new RegExp("<(?:" + dt + ")[\\s/>]", "i"),
        gt = /^\s+/,
        yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        wt = /<tbody/i,
        Et = /<|&#?\w+;/,
        St = /<(?:script|style|link)/i,
        xt = /^(?:checkbox|radio)$/i,
        Tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Nt = /^$|\/(?:java|ecma)script/i,
        Ct = /^true\/(.*)/,
        kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: w.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        At = pt(o),
        Ot = At.appendChild(o.createElement("div"));
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, w.fn.extend({
        text: function (e) {
            return w.access(this, function (e) {
                return e === t ? w.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Mt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Mt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            var n, r = e ? w.filter(e, this) : this,
                i = 0;
            for (;
                (n = r[i]) != null; i++)!t && n.nodeType === 1 && w.cleanData(jt(n)), n.parentNode && (t && w.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            var e, t = 0;
            for (;
                (e = this[t]) != null; t++) {
                e.nodeType === 1 && w.cleanData(jt(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && w.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        },
        html: function (e) {
            return w.access(this, function (e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(vt, "") : t;
                if (typeof e == "string" && !St.test(e) && (w.support.htmlSerialize || !mt.test(e)) && (w.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(yt, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (w.cleanData(jt(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = w.map(this, function (e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function (n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), w(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t, n) {
            e = p.apply([], e);
            var r, i, s, o, u, a, f = 0,
                l = this.length,
                c = this,
                h = l - 1,
                d = e[0],
                v = w.isFunction(d);
            if (v || !(l <= 1 || typeof d != "string" || w.support.checkClone || !Tt.test(d))) return this.each(function (r) {
                var i = c.eq(r);
                v && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (l) {
                a = w.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = a.firstChild, a.childNodes.length === 1 && (a = r);
                if (r) {
                    o = w.map(jt(a, "script"), _t), s = o.length;
                    for (; f < l; f++) i = a, f !== h && (i = w.clone(i, !0, !0), s && w.merge(o, jt(i, "script"))), t.call(this[f], i, f);
                    if (s) {
                        u = o[o.length - 1].ownerDocument, w.map(o, Dt);
                        for (f = 0; f < s; f++) i = o[f], Nt.test(i.type || "") && !w._data(i, "globalEval") && w.contains(u, i) && (i.src ? w._evalUrl(i.src) : w.globalEval((i.text || i.textContent || i.innerHTML || "").replace(kt, "")))
                    }
                    a = r = null
                }
            }
            return this
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            var n, r = 0,
                i = [],
                s = w(e),
                o = s.length - 1;
            for (; r <= o; r++) n = r === o ? this : this.clone(!0), w(s[r])[t](n), d.apply(i, n.get());
            return this.pushStack(i)
        }
    }), w.extend({
        clone: function (e, t, n) {
            var r, i, s, o, u, a = w.contains(e.ownerDocument, e);
            w.support.html5Clone || w.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild));
            if ((!w.support.noCloneEvent || !w.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !w.isXMLDoc(e)) {
                r = jt(s), u = jt(e);
                for (o = 0;
                    (i = u[o]) != null; ++o) r[o] && Bt(i, r[o])
            }
            if (t)
                if (n) {
                    u = u || jt(e), r = r || jt(s);
                    for (o = 0;
                        (i = u[o]) != null; o++) Ht(i, r[o])
                } else Ht(e, s);
            return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s
        },
        buildFragment: function (e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length,
                h = pt(t),
                p = [],
                d = 0;
            for (; d < c; d++) {
                s = e[d];
                if (s || s === 0)
                    if (w.type(s) === "object") w.merge(p, s.nodeType ? [s] : s);
                    else if (!Et.test(s)) p.push(t.createTextNode(s));
                else {
                    u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                    while (i--) u = u.lastChild;
                    !w.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0]));
                    if (!w.support.tbody) {
                        s = a === "table" && !wt.test(s) ? u.firstChild : l[1] === "<table>" && !wt.test(s) ? u : 0, i = s && s.childNodes.length;
                        while (i--) w.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                    }
                    w.merge(p, u.childNodes), u.textContent = "";
                    while (u.firstChild) u.removeChild(u.firstChild);
                    u = h.lastChild
                }
            }
            u && h.removeChild(u), w.support.appendChecked || w.grep(jt(p, "input"), Ft), d = 0;
            while (s = p[d++]) {
                if (r && w.inArray(s, r) !== -1) continue;
                o = w.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u);
                if (n) {
                    i = 0;
                    while (s = u[i++]) Nt.test(s.type || "") && n.push(s)
                }
            }
            return u = null, h
        },
        cleanData: function (e, t) {
            var n, r, s, o, u = 0,
                a = w.expando,
                f = w.cache,
                l = w.support.deleteExpando,
                h = w.event.special;
            for (;
                (n = e[u]) != null; u++)
                if (t || w.acceptData(n)) {
                    s = n[a], o = s && f[s];
                    if (o) {
                        if (o.events)
                            for (r in o.events) h[r] ? w.event.remove(n, r) : w.removeEvent(n, r, o.handle);
                        f[s] && (delete f[s], l ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, c.push(s))
                    }
                }
        },
        _evalUrl: function (e) {
            return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), w.fn.extend({
        wrapAll: function (e) {
            if (w.isFunction(e)) return this.each(function (t) {
                w(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = w(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return w.isFunction(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = w.isFunction(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                w.nodeName(this, "body") || w(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var It, qt, Rt, Ut = /alpha\([^)]*\)/i,
        zt = /opacity\s*=\s*([^)]*)/,
        Wt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Vt = /^margin/,
        $t = new RegExp("^(" + E + ")(.*)$", "i"),
        Jt = new RegExp("^(" + E + ")(?!px)[a-z%]+$", "i"),
        Kt = new RegExp("^([+-])=(" + E + ")", "i"),
        Qt = {
            BODY: "block"
        },
        Gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Yt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];
    w.fn.extend({
        css: function (e, n) {
            return w.access(this, function (e, n, r) {
                var i, s, o = {},
                    u = 0;
                if (w.isArray(n)) {
                    s = qt(e), i = n.length;
                    for (; u < i; u++) o[n[u]] = w.css(e, n[u], !1, s);
                    return o
                }
                return r !== t ? w.style(e, n, r) : w.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return rn(this, !0)
        },
        hide: function () {
            return rn(this)
        },
        toggle: function (e) {
            return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function () {
                nn(this) ? w(this).show() : w(this).hide()
            })
        }
    }), w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Rt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": w.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = w.camelCase(n),
                f = e.style;
            n = w.cssProps[a] || (w.cssProps[a] = tn(f, a)), u = w.cssHooks[n] || w.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(w.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !w.cssNumber[a] && (r += "px"), !w.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch (l) {}
        },
        css: function (e, n, r, i) {
            var s, o, u, a = w.camelCase(n);
            return n = w.cssProps[a] || (w.cssProps[a] = tn(e.style, a)), u = w.cssHooks[n] || w.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), o === "normal" && n in Yt && (o = Yt[n]), r === "" || r ? (s = parseFloat(o), r === !0 || w.isNumeric(s) ? s || 0 : o) : o
        }
    }), e.getComputedStyle ? (qt = function (t) {
        return e.getComputedStyle(t, null)
    }, Rt = function (e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u.getPropertyValue(n) || u[n] : t,
            f = e.style;
        return u && (a === "" && !w.contains(e.ownerDocument, e) && (a = w.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
    }) : o.documentElement.currentStyle && (qt = function (e) {
        return e.currentStyle
    }, Rt = function (e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u[n] : t,
            f = e.style;
        return a == null && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return e.offsetWidth === 0 && Xt.test(w.css(e, "display")) ? w.swap(e, Gt, function () {
                    return un(e, t, r)
                }) : un(e, t, r)
            },
            set: function (e, n, r) {
                var i = r && qt(e);
                return sn(e, n, r ? on(e, t, r, w.support.boxSizing && w.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }
        }
    }), w.support.opacity || (w.cssHooks.opacity = {
        get: function (e, t) {
            return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = w.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if ((t >= 1 || t === "") && w.trim(s.replace(Ut, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (t === "" || r && !r.filter) return
            }
            n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i
        }
    }), w(function () {
        w.support.reliableMarginRight || (w.cssHooks.marginRight = {
            get: function (e, t) {
                if (t) return w.swap(e, {
                    display: "inline-block"
                }, Rt, [e, "marginRight"])
            }
        }), !w.support.pixelPosition && w.fn.position && w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n) {
                    if (n) return n = Rt(e, t), Jt.test(n) ? w(e).position()[t] + "px" : n
                }
            }
        })
    }), w.expr && w.expr.filters && (w.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !w.support.reliableHiddenOffsets && (e.style && e.style.display || w.css(e, "display")) === "none"
    }, w.expr.filters.visible = function (e) {
        return !w.expr.filters.hidden(e)
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0,
                    i = {},
                    s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++) i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Vt.test(e) || (w.cssHooks[e + t].set = sn)
    });
    var ln = /%20/g,
        cn = /\[\]$/,
        hn = /\r?\n/g,
        pn = /^(?:submit|button|image|reset|file)$/i,
        dn = /^(?:input|select|textarea|keygen)/i;
    w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return n == null ? null : w.isArray(n) ? w.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(hn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(hn, "\r\n")
                }
            }).get()
        }
    }), w.param = function (e, n) {
        var r, i = [],
            s = function (e, t) {
                t = w.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = w.ajaxSettings && w.ajaxSettings.traditional);
        if (w.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            s(this.name, this.value)
        });
        else
            for (r in e) vn(r, e[r], n, s);
        return i.join("&").replace(ln, "+")
    }, w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, gn, yn = w.now(),
        bn = /\?/,
        wn = /#.*$/,
        En = /([?&])_=[^&]*/,
        Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Tn = /^(?:GET|HEAD)$/,
        Nn = /^\/\//,
        Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        kn = w.fn.load,
        Ln = {},
        An = {},
        On = "*/".concat("*");
    try {
        gn = s.href
    } catch (Mn) {
        gn = o.createElement("a"), gn.href = "", gn = gn.href
    }
    mn = Cn.exec(gn.toLowerCase()) || [], w.fn.load = function (e, n, r) {
        if (typeof e != "string" && kn) return kn.apply(this, arguments);
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), w.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (o = "POST"), u.length > 0 && w.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function (e) {
            s = arguments, u.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            u.each(r, s || [e.responseText, t, e])
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gn,
            type: "GET",
            isLocal: xn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": On,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": w.parseJSON,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Pn(Pn(e, w.ajaxSettings), t) : Pn(w.ajaxSettings, e)
        },
        ajaxPrefilter: _n(Ln),
        ajaxTransport: _n(An),
        ajax: function (e, n) {
            function N(e, n, r, i) {
                var l, g, y, E, S, T = n;
                if (b === 2) return;
                b = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || e === 304, r && (E = Hn(c, x, r)), E = Bn(c, E, x, l);
                if (l) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (w.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (w.etag[s] = S)), e === 204 || c.type === "HEAD" ? T = "nocontent" : e === 304 ? T = "notmodified" : (T = E.state, g = E.data, y = E.error, l = !y);
                else {
                    y = T;
                    if (e || !T) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --w.active || w.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = w.ajaxSetup({}, n),
                h = c.context || c,
                p = c.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                d = w.Deferred(),
                v = w.Callbacks("once memory"),
                m = c.statusCode || {},
                g = {},
                y = {},
                b = 0,
                E = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (b === 2) {
                            if (!l) {
                                l = {};
                                while (t = Sn.exec(o)) l[t[1].toLowerCase()] = t[2]
                            }
                            t = l[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return b === 2 ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (c.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e) m[t] = [m[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || E;
                        return f && f.abort(t), N(0, t), this
                    }
                };
            d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = w.trim(c.dataType || "*").toLowerCase().match(S) || [""], c.crossDomain == null && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || (r[1] === "http:" ? "80" : "443")) === (mn[3] || (mn[1] === "http:" ? "80" : "443")))), c.data && c.processData && typeof c.data != "string" && (c.data = w.param(c.data, c.traditional)), Dn(Ln, c, n, x);
            if (b === 2) return x;
            a = c.global, a && w.active++ === 0 && w.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (w.lastModified[s] && x.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && x.setRequestHeader("If-None-Match", w.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers) x.setRequestHeader(i, c.headers[i]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && b !== 2) {
                E = "abort";
                for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[i](c[i]);
                f = Dn(An, c, n, x);
                if (!f) N(-1, "No Transport");
                else {
                    x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        b = 1, f.send(g, N)
                    } catch (T) {
                        if (!(b < 2)) throw T;
                        N(-1, T)
                    }
                }
                return x
            }
            return x.abort()
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return w.get(e, t, n, "script")
        }
    }), w.each(["get", "post"], function (e, n) {
        w[n] = function (e, r, i, s) {
            return w.isFunction(r) && (s = s || i, i = r, r = t), w.ajax({
                url: e,
                type: n,
                dataType: s,
                data: r,
                success: i
            })
        }
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = o.head || w("head")[0] || o.documentElement;
            return {
                send: function (t, i) {
                    n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        if (t || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var jn = [],
        Fn = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = jn.pop() || w.expando + "_" + yn++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function (n, r, i) {
        var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
        if (a || n.dataTypes[0] === "jsonp") return s = n.jsonpCallback = w.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
            return u || w.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", o = e[s], e[s] = function () {
            u = arguments
        }, i.always(function () {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && w.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    });
    var In, qn, Rn = 0,
        Un = e.ActiveXObject && function () {
            var e;
            for (e in In) In[e](t, !0)
        };
    w.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && zn() || Wn()
    } : zn, qn = w.ajaxSettings.xhr(), w.support.cors = !!qn && "withCredentials" in qn, qn = w.support.ajax = !!qn, qn && w.ajaxTransport(function (n) {
        if (!n.crossDomain || w.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields)
                        for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null), r = function (e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = w.noop, Un && delete In[o]);
                                if (i) a.readyState !== 4 && a.abort();
                                else {
                                    c = {}, u = a.status, f = a.getAllResponseHeaders(), typeof a.responseText == "string" && (c.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (h) {
                                        l = ""
                                    }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (p) {
                            i || s(-1, p)
                        }
                        c && s(u, l, c, f)
                    }, n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {}, w(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Vn, $n = /^(?:toggle|show|hide)$/,
        Jn = new RegExp("^(?:([+-])=|)(" + E + ")([a-z%]*)$", "i"),
        Kn = /queueHooks$/,
        Qn = [nr],
        Gn = {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = Jn.exec(t),
                        s = i && i[3] || (w.cssNumber[e] ? "" : "px"),
                        o = (w.cssNumber[e] || s !== "px" && +r) && Jn.exec(w.css(n.elem, e)),
                        u = 1,
                        a = 20;
                    if (o && o[3] !== s) {
                        s = s || o[3], i = i || [], o = +r || 1;
                        do u = u || ".5", o /= u, w.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && u !== 1 && --a)
                    }
                    return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
                }
            ]
        };
    w.Animation = w.extend(er, {
        tweener: function (e, t) {
            w.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Qn.unshift(e) : Qn.push(e)
        }
    }), w.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (w.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = rr.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = w.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : e.elem.style && (e.elem.style[w.cssProps[e.prop]] != null || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), w.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = w.isEmptyObject(e),
                s = w.speed(t, n, r),
                o = function () {
                    var t = er(this, w.extend({}, e), s);
                    (i || w._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = w.timers,
                    o = w._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && w.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = w._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    s = w.timers,
                    o = r ? r.length : 0;
                n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
                for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        w.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), w.speed = function (e, t, n) {
        var r = e && typeof e == "object" ? w.extend({}, e) : {
            complete: n || !n && t || w.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !w.isFunction(t) && t
        };
        r.duration = w.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in w.fx.speeds ? w.fx.speeds[r.duration] : w.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function () {
            w.isFunction(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, w.timers = [], w.fx = rr.prototype.init, w.fx.tick = function () {
        var e, n = w.timers,
            r = 0;
        Xn = w.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || w.fx.stop(), Xn = t
    }, w.fx.timer = function (e) {
        e() && w.timers.push(e) && w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        Vn || (Vn = setInterval(w.fx.tick, w.fx.interval))
    }, w.fx.stop = function () {
        clearInterval(Vn), Vn = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fx.step = {}, w.expr && w.expr.filters && (w.expr.filters.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem
        }).length
    }), w.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            w.offset.setOffset(this, e, t)
        });
        var n, r, s = {
                top: 0,
                left: 0
            },
            o = this[0],
            u = o && o.ownerDocument;
        if (!u) return;
        return n = u.documentElement, w.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
            top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : s
    }, w.offset = {
        setOffset: function (e, t, n) {
            var r = w.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = w(e),
                s = i.offset(),
                o = w.css(e, "top"),
                u = w.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && w.inArray("auto", [o, u]) > -1,
                f = {},
                l = {},
                c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), w.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, w.fn.extend({
        position: function () {
            if (!this[0]) return;
            var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
            return w.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), w.nodeName(e[0], "html") || (n = e.offset()), n.top += w.css(e[0], "borderTopWidth", !0), n.left += w.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - n.top - w.css(r, "marginTop", !0),
                left: t.left - n.left - w.css(r, "marginLeft", !0)
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || u;
                while (e && !w.nodeName(e, "html") && w.css(e, "position") === "static") e = e.offsetParent;
                return e || u
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        w.fn[e] = function (i) {
            return w.access(this, function (e, i, s) {
                var o = sr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? w(o).scrollLeft() : s, r ? s : w(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), w.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        w.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            w.fn[i] = function (i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return w.access(this, function (n, r, i) {
                    var s;
                    return w.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? w.css(n, r, u) : w.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), w.fn.size = function () {
        return this.length
    }, w.fn.andSelf = w.fn.addBack, typeof module == "object" && module && typeof module.exports == "object" ? module.exports = w : (e.jQuery = e.$ = w, typeof define == "function" && define.amd && define("jquery", [], function () {
        return w
    }))
}(window), ! function (e, t) {
    function n() {
        r.READY || (y.determineEventTypes(), d.each(r.gestures, function (e) {
            w.register(e)
        }), y.onTouch(r.DOCUMENT, h, w.detect), y.onTouch(r.DOCUMENT, p, w.detect), r.READY = !0)
    }
    var r = function (e, t) {
        return new r.Instance(e, t || {})
    };
    r.defaults = {
        stop_browser_behavior: {
            userSelect: "none",
            touchAction: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    }, r.HAS_POINTEREVENTS = e.navigator.pointerEnabled || e.navigator.msPointerEnabled, r.HAS_TOUCHEVENTS = "ontouchstart" in e, r.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android|silk/i, r.NO_MOUSEEVENTS = r.HAS_TOUCHEVENTS && e.navigator.userAgent.match(r.MOBILE_REGEX), r.EVENT_TYPES = {}, r.UPDATE_VELOCITY_INTERVAL = 16, r.DOCUMENT = e.document;
    var i = r.DIRECTION_DOWN = "down",
        s = r.DIRECTION_LEFT = "left",
        o = r.DIRECTION_UP = "up",
        u = r.DIRECTION_RIGHT = "right",
        a = r.POINTER_MOUSE = "mouse",
        f = r.POINTER_TOUCH = "touch",
        l = r.POINTER_PEN = "pen",
        c = r.EVENT_START = "start",
        h = r.EVENT_MOVE = "move",
        p = r.EVENT_END = "end";
    r.plugins = r.plugins || {}, r.gestures = r.gestures || {}, r.READY = !1;
    var d = r.utils = {
        extend: function (e, n, r) {
            for (var i in n) e[i] !== t && r || (e[i] = n[i]);
            return e
        },
        each: function (e, n, r) {
            var i, s;
            if ("forEach" in e) e.forEach(n, r);
            else if (e.length !== t) {
                for (i = -1; s = e[++i];)
                    if (n.call(r, s, i, e) === !1) return
            } else
                for (i in e)
                    if (e.hasOwnProperty(i) && n.call(r, e[i], i, e) === !1) return
        },
        hasParent: function (e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parentNode
            }
            return !1
        },
        getCenter: function (e) {
            var t = [],
                n = [];
            return d.each(e, function (e) {
                t.push("undefined" != typeof e.clientX ? e.clientX : e.pageX), n.push("undefined" != typeof e.clientY ? e.clientY : e.pageY)
            }), {
                pageX: (Math.min.apply(Math, t) + Math.max.apply(Math, t)) / 2,
                pageY: (Math.min.apply(Math, n) + Math.max.apply(Math, n)) / 2
            }
        },
        getVelocity: function (e, t, n) {
            return {
                x: Math.abs(t / e) || 0,
                y: Math.abs(n / e) || 0
            }
        },
        getAngle: function (e, t) {
            var n = t.pageY - e.pageY,
                r = t.pageX - e.pageX;
            return 180 * Math.atan2(n, r) / Math.PI
        },
        getDirection: function (e, t) {
            var n = Math.abs(e.pageX - t.pageX),
                r = Math.abs(e.pageY - t.pageY);
            return n >= r ? e.pageX - t.pageX > 0 ? s : u : e.pageY - t.pageY > 0 ? o : i
        },
        getDistance: function (e, t) {
            var n = t.pageX - e.pageX,
                r = t.pageY - e.pageY;
            return Math.sqrt(n * n + r * r)
        },
        getScale: function (e, t) {
            return e.length >= 2 && t.length >= 2 ? this.getDistance(t[0], t[1]) / this.getDistance(e[0], e[1]) : 1
        },
        getRotation: function (e, t) {
            return e.length >= 2 && t.length >= 2 ? this.getAngle(t[1], t[0]) - this.getAngle(e[1], e[0]) : 0
        },
        isVertical: function (e) {
            return e == o || e == i
        },
        toggleDefaultBehavior: function (e, t, n) {
            if (t && e && e.style) {
                d.each(["webkit", "moz", "Moz", "ms", "o", ""], function (r) {
                    d.each(t, function (t, i) {
                        r && (i = r + i.substring(0, 1).toUpperCase() + i.substring(1)), i in e.style && (e.style[i] = !n && t)
                    })
                });
                var r = function () {
                    return !1
                };
                "none" == t.userSelect && (e.onselectstart = !n && r), "none" == t.userDrag && (e.ondragstart = !n && r)
            }
        }
    };
    r.Instance = function (e, t) {
        var i = this;
        return n(), this.element = e, this.enabled = !0, this.options = d.extend(d.extend({}, r.defaults), t || {}), this.options.stop_browser_behavior && d.toggleDefaultBehavior(this.element, this.options.stop_browser_behavior, !1), this.eventStartHandler = y.onTouch(e, c, function (e) {
            i.enabled && w.startDetect(i, e)
        }), this.eventHandlers = [], this
    }, r.Instance.prototype = {
        on: function (e, t) {
            var n = e.split(" ");
            return d.each(n, function (e) {
                this.element.addEventListener(e, t, !1), this.eventHandlers.push({
                    gesture: e,
                    handler: t
                })
            }, this), this
        },
        off: function (e, t) {
            var n, r, i = e.split(" ");
            return d.each(i, function (e) {
                for (this.element.removeEventListener(e, t, !1), n = -1; r = this.eventHandlers[++n];) r.gesture === e && r.handler === t && this.eventHandlers.splice(n, 1)
            }, this), this
        },
        trigger: function (e, t) {
            t || (t = {});
            var n = r.DOCUMENT.createEvent("Event");
            n.initEvent(e, !0, !0), n.gesture = t;
            var i = this.element;
            return d.hasParent(t.target, i) && (i = t.target), i.dispatchEvent(n), this
        },
        enable: function (e) {
            return this.enabled = e, this
        },
        dispose: function () {
            var e, t;
            for (this.options.stop_browser_behavior && d.toggleDefaultBehavior(this.element, this.options.stop_browser_behavior, !0), e = -1; t = this.eventHandlers[++e];) this.element.removeEventListener(t.gesture, t.handler, !1);
            return this.eventHandlers = [], y.unbindDom(this.element, r.EVENT_TYPES[c], this.eventStartHandler), null
        }
    };
    var v = null,
        m = !1,
        g = !1,
        y = r.event = {
            bindDom: function (e, t, n) {
                var r = t.split(" ");
                d.each(r, function (t) {
                    e.addEventListener(t, n, !1)
                })
            },
            unbindDom: function (e, t, n) {
                var r = t.split(" ");
                d.each(r, function (t) {
                    e.removeEventListener(t, n, !1)
                })
            },
            onTouch: function (e, t, n) {
                var i = this,
                    s = function (s) {
                        var o = s.type.toLowerCase();
                        if (!o.match(/mouse/) || !g) {
                            o.match(/touch/) || o.match(/pointerdown/) || o.match(/mouse/) && 1 === s.which ? m = !0 : o.match(/mouse/) && !s.which && (m = !1), o.match(/touch|pointer/) && (g = !0);
                            var u = 0;
                            m && (r.HAS_POINTEREVENTS && t != p ? u = b.updatePointer(t, s) : o.match(/touch/) ? u = s.touches.length : g || (u = o.match(/up/) ? 0 : 1), u > 0 && t == p ? t = h : u || (t = p), (u || null === v) && (v = s), n.call(w, i.collectEventData(e, t, i.getTouchList(v, t), s)), r.HAS_POINTEREVENTS && t == p && (u = b.updatePointer(t, s))), u || (v = null, m = !1, g = !1, b.reset())
                        }
                    };
                return this.bindDom(e, r.EVENT_TYPES[t], s), s
            },
            determineEventTypes: function () {
                var e;
                e = r.HAS_POINTEREVENTS ? b.getEvents() : r.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], r.EVENT_TYPES[c] = e[0], r.EVENT_TYPES[h] = e[1], r.EVENT_TYPES[p] = e[2]
            },
            getTouchList: function (e) {
                return r.HAS_POINTEREVENTS ? b.getTouchList() : e.touches ? e.touches : (e.identifier = 1, [e])
            },
            collectEventData: function (e, t, n, r) {
                var i = f;
                return (r.type.match(/mouse/) || b.matchType(a, r)) && (i = a), {
                    center: d.getCenter(n),
                    timeStamp: (new Date).getTime(),
                    target: r.target,
                    touches: n,
                    eventType: t,
                    pointerType: i,
                    srcEvent: r,
                    preventDefault: function () {
                        this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
                    },
                    stopPropagation: function () {
                        this.srcEvent.stopPropagation()
                    },
                    stopDetect: function () {
                        return w.stopDetect()
                    }
                }
            }
        },
        b = r.PointerEvent = {
            pointers: {},
            getTouchList: function () {
                var e = [];
                return d.each(this.pointers, function (t) {
                    e.push(t)
                }), e
            },
            updatePointer: function (e, t) {
                return e == p ? delete this.pointers[t.pointerId] : (t.identifier = t.pointerId, this.pointers[t.pointerId] = t), Object.keys(this.pointers).length
            },
            matchType: function (e, t) {
                if (!t.pointerType) return !1;
                var n = t.pointerType,
                    r = {};
                return r[a] = n === a, r[f] = n === f, r[l] = n === l, r[e]
            },
            getEvents: function () {
                return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
            },
            reset: function () {
                this.pointers = {}
            }
        },
        w = r.detection = {
            gestures: [],
            current: null,
            previous: null,
            stopped: !1,
            startDetect: function (e, t) {
                this.current || (this.stopped = !1, this.current = {
                    inst: e,
                    startEvent: d.extend({}, t),
                    lastEvent: !1,
                    lastVelocityEvent: !1,
                    velocity: !1,
                    name: ""
                }, this.detect(t))
            },
            detect: function (e) {
                if (this.current && !this.stopped) {
                    e = this.extendEventData(e);
                    var t = this.current.inst.options;
                    return d.each(this.gestures, function (n) {
                        return this.stopped || t[n.name] === !1 || n.handler.call(n, e, this.current.inst) !== !1 ? void 0 : (this.stopDetect(), !1)
                    }, this), this.current && (this.current.lastEvent = e), e.eventType == p && !e.touches.length - 1 && this.stopDetect(), e
                }
            },
            stopDetect: function () {
                this.previous = d.extend({}, this.current), this.current = null, this.stopped = !0
            },
            extendEventData: function (e) {
                var t = this.current,
                    n = t.startEvent;
                (e.touches.length != n.touches.length || e.touches === n.touches) && (n.touches = [], d.each(e.touches, function (e) {
                    n.touches.push(d.extend({}, e))
                }));
                var i, s, o = e.timeStamp - n.timeStamp,
                    u = e.center.pageX - n.center.pageX,
                    a = e.center.pageY - n.center.pageY,
                    f = t.lastVelocityEvent,
                    l = t.velocity;
                return f && e.timeStamp - f.timeStamp > r.UPDATE_VELOCITY_INTERVAL ? (l = d.getVelocity(e.timeStamp - f.timeStamp, e.center.pageX - f.center.pageX, e.center.pageY - f.center.pageY), t.lastVelocityEvent = e, t.velocity = l) : t.velocity || (l = d.getVelocity(o, u, a), t.lastVelocityEvent = e, t.velocity = l), e.eventType == p ? (i = t.lastEvent && t.lastEvent.interimAngle, s = t.lastEvent && t.lastEvent.interimDirection) : (i = t.lastEvent && d.getAngle(t.lastEvent.center, e.center), s = t.lastEvent && d.getDirection(t.lastEvent.center, e.center)), d.extend(e, {
                    deltaTime: o,
                    deltaX: u,
                    deltaY: a,
                    velocityX: l.x,
                    velocityY: l.y,
                    distance: d.getDistance(n.center, e.center),
                    angle: d.getAngle(n.center, e.center),
                    interimAngle: i,
                    direction: d.getDirection(n.center, e.center),
                    interimDirection: s,
                    scale: d.getScale(n.touches, e.touches),
                    rotation: d.getRotation(n.touches, e.touches),
                    startEvent: n
                }), e
            },
            register: function (e) {
                var n = e.defaults || {};
                return n[e.name] === t && (n[e.name] = !0), d.extend(r.defaults, n, !0), e.index = e.index || 1e3, this.gestures.push(e), this.gestures.sort(function (e, t) {
                    return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
                }), this.gestures
            }
        };
    r.gestures.Drag = {
        name: "drag",
        index: 50,
        defaults: {
            drag_min_distance: 10,
            correct_for_drag_min_distance: !0,
            drag_max_touches: 1,
            drag_block_horizontal: !1,
            drag_block_vertical: !1,
            drag_lock_to_axis: !1,
            drag_lock_min_distance: 25
        },
        triggered: !1,
        handler: function (e, t) {
            if (w.current.name != this.name && this.triggered) return t.trigger(this.name + "end", e), void(this.triggered = !1);
            if (!(t.options.drag_max_touches > 0 && e.touches.length > t.options.drag_max_touches)) switch (e.eventType) {
            case c:
                this.triggered = !1;
                break;
            case h:
                if (e.distance < t.options.drag_min_distance && w.current.name != this.name) return;
                if (w.current.name != this.name && (w.current.name = this.name, t.options.correct_for_drag_min_distance && e.distance > 0)) {
                    var n = Math.abs(t.options.drag_min_distance / e.distance);
                    w.current.startEvent.center.pageX += e.deltaX * n, w.current.startEvent.center.pageY += e.deltaY * n, e = w.extendEventData(e)
                }(w.current.lastEvent.drag_locked_to_axis || t.options.drag_lock_to_axis && t.options.drag_lock_min_distance <= e.distance) && (e.drag_locked_to_axis = !0);
                var r = w.current.lastEvent.direction;
                e.drag_locked_to_axis && r !== e.direction && (e.direction = d.isVertical(r) ? e.deltaY < 0 ? o : i : e.deltaX < 0 ? s : u), this.triggered || (t.trigger(this.name + "start", e), this.triggered = !0), t.trigger(this.name, e), t.trigger(this.name + e.direction, e);
                var a = d.isVertical(e.direction);
                (t.options.drag_block_vertical && a || t.options.drag_block_horizontal && !a) && e.preventDefault();
                break;
            case p:
                this.triggered && t.trigger(this.name + "end", e), this.triggered = !1
            }
        }
    }, r.gestures.Hold = {
        name: "hold",
        index: 10,
        defaults: {
            hold_timeout: 500,
            hold_threshold: 1
        },
        timer: null,
        handler: function (e, t) {
            switch (e.eventType) {
            case c:
                clearTimeout(this.timer), w.current.name = this.name, this.timer = setTimeout(function () {
                    "hold" == w.current.name && t.trigger("hold", e)
                }, t.options.hold_timeout);
                break;
            case h:
                e.distance > t.options.hold_threshold && clearTimeout(this.timer);
                break;
            case p:
                clearTimeout(this.timer)
            }
        }
    }, r.gestures.Release = {
        name: "release",
        index: 1 / 0,
        handler: function (e, t) {
            e.eventType == p && t.trigger(this.name, e)
        }
    }, r.gestures.Swipe = {
        name: "swipe",
        index: 40,
        defaults: {
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            swipe_velocity: .7
        },
        handler: function (e, t) {
            if (e.eventType == p) {
                if (e.touches.length < t.options.swipe_min_touches || e.touches.length > t.options.swipe_max_touches) return;
                (e.velocityX > t.options.swipe_velocity || e.velocityY > t.options.swipe_velocity) && (t.trigger(this.name, e), t.trigger(this.name + e.direction, e))
            }
        }
    }, r.gestures.Tap = {
        name: "tap",
        index: 100,
        defaults: {
            tap_max_touchtime: 250,
            tap_max_distance: 10,
            tap_always: !0,
            doubletap_distance: 20,
            doubletap_interval: 300
        },
        has_moved: !1,
        handler: function (e, t) {
            var n, r, i;
            e.eventType == c ? this.has_moved = !1 : e.eventType != h || this.moved ? e.eventType == p && "touchcancel" != e.srcEvent.type && e.deltaTime < t.options.tap_max_touchtime && !this.has_moved && (n = w.previous, r = n && n.lastEvent && e.timeStamp - n.lastEvent.timeStamp, i = !1, n && "tap" == n.name && r && r < t.options.doubletap_interval && e.distance < t.options.doubletap_distance && (t.trigger("doubletap", e), i = !0), (!i || t.options.tap_always) && (w.current.name = "tap", t.trigger(w.current.name, e))) : this.has_moved = e.distance > t.options.tap_max_distance
        }
    }, r.gestures.Touch = {
        name: "touch",
        index: -1 / 0,
        defaults: {
            prevent_default: !1,
            prevent_mouseevents: !1
        },
        handler: function (e, t) {
            return t.options.prevent_mouseevents && e.pointerType == a ? void e.stopDetect() : (t.options.prevent_default && e.preventDefault(), void(e.eventType == c && t.trigger(this.name, e)))
        }
    }, r.gestures.Transform = {
        name: "transform",
        index: 45,
        defaults: {
            transform_min_scale: .01,
            transform_min_rotation: 1,
            transform_always_block: !1,
            transform_within_instance: !1
        },
        triggered: !1,
        handler: function (e, t) {
            if (w.current.name != this.name && this.triggered) return t.trigger(this.name + "end", e), void(this.triggered = !1);
            if (!(e.touches.length < 2)) {
                if (t.options.transform_always_block && e.preventDefault(), t.options.transform_within_instance)
                    for (var n = -1; e.touches[++n];)
                        if (!d.hasParent(e.touches[n].target, t.element)) return;
                switch (e.eventType) {
                case c:
                    this.triggered = !1;
                    break;
                case h:
                    var r = Math.abs(1 - e.scale),
                        i = Math.abs(e.rotation);
                    if (r < t.options.transform_min_scale && i < t.options.transform_min_rotation) return;
                    w.current.name = this.name, this.triggered || (t.trigger(this.name + "start", e), this.triggered = !0), t.trigger(this.name, e), i > t.options.transform_min_rotation && t.trigger("rotate", e), r > t.options.transform_min_scale && (t.trigger("pinch", e), t.trigger("pinch" + (e.scale < 1 ? "in" : "out"), e));
                    break;
                case p:
                    this.triggered && t.trigger(this.name + "end", e), this.triggered = !1
                }
            }
        }
    }, "function" == typeof define && define.amd ? define("hammerjs", [], function () {
        return r
    }) : "object" == typeof module && module.exports ? module.exports = r : e.Hammer = r
}(window),
function (e, t) {
    function n(e, n) {
        e.event.bindDom = function (e, r, i) {
            n(e).on(r, function (e) {
                var n = e.originalEvent || e;
                n.pageX === t && (n.pageX = e.pageX, n.pageY = e.pageY), n.target || (n.target = e.target), n.which === t && (n.which = n.button), n.preventDefault || (n.preventDefault = e.preventDefault), n.stopPropagation || (n.stopPropagation = e.stopPropagation), i.call(this, n)
            })
        }, e.Instance.prototype.on = function (e, t) {
            return n(this.element).on(e, t)
        }, e.Instance.prototype.off = function (e, t) {
            return n(this.element).off(e, t)
        }, e.Instance.prototype.trigger = function (e, t) {
            var r = n(this.element);
            return r.has(t.target).length && (r = n(t.target)), r.trigger({
                type: e,
                gesture: t
            })
        }, n.fn.hammer = function (t) {
            return this.each(function () {
                var r = n(this),
                    i = r.data("hammer");
                i ? i && t && e.utils.extend(i.options, t) : r.data("hammer", new e(this, t || {}))
            })
        }
    }
    typeof define == "function" && typeof define.amd == "object" && define.amd ? define("hammer.jquery", ["hammerjs", "jquery"], n) : n(e.Hammer, e.jQuery || e.Zepto)
}(this),
function (e, t) {
    e("when/when", ["require"], function (e) {
        function n(e, t, n, i) {
            return r(e).then(t, n, i)
        }

        function r(e) {
            return e instanceof i ? e : s(e)
        }

        function i(e, t) {
            this._message = e, this.inspect = t
        }

        function s(e) {
            return a(function (t) {
                t(e)
            })
        }

        function o(e) {
            return n(e, h)
        }

        function u() {
            function r(r, i, o) {
                e.resolve = e.resolver.resolve = function (e) {
                    return n ? s(e) : (n = !0, r(e), t)
                }, e.reject = e.resolver.reject = function (e) {
                    return n ? s(h(e)) : (n = !0, i(e), t)
                }, e.notify = e.resolver.notify = function (e) {
                    return o(e), e
                }
            }
            var e, t, n;
            return e = {
                promise: W,
                resolve: W,
                reject: W,
                notify: W,
                resolver: {
                    resolve: W,
                    reject: W,
                    notify: W
                }
            }, e.promise = t = a(r), e
        }

        function a(e) {
            return f(e, R.PromiseStatus && R.PromiseStatus())
        }

        function f(e, t) {
            function u(e, t, n, i) {
                function o(r) {
                    r._message(e, t, n, i)
                }
                s ? s.push(o) : X(function () {
                    o(r)
                })
            }

            function a() {
                return r ? r.inspect() : M()
            }

            function f(e) {
                if (!s) return;
                var i = s;
                s = W, X(function () {
                    r = v(n, e), t && b(r, t), l(i, r)
                })
            }

            function c(e) {
                f(h(e))
            }

            function p(e) {
                if (s) {
                    var t = s;
                    X(function () {
                        l(t, d(e))
                    })
                }
            }
            var n, r, s = [];
            n = new i(u, a), n._status = t;
            try {
                e(f, c, p)
            } catch (o) {
                c(o)
            }
            return n
        }

        function l(e, t) {
            for (var n = 0; n < e.length; n++) e[n](t)
        }

        function c(e) {
            return p(new g(e), function () {
                return A(e)
            })
        }

        function h(e) {
            return p(new y(e), function () {
                return O(e)
            })
        }

        function p(e, t) {
            return new i(function (t, n, r) {
                try {
                    r(e[t].apply(e, n))
                } catch (i) {
                    r(h(i))
                }
            }, t)
        }

        function d(e) {
            return new i(function (t, n, r, i) {
                var s = n[2];
                try {
                    i(typeof s == "function" ? s(e) : e)
                } catch (o) {
                    i(o)
                }
            })
        }

        function v(e, t) {
            if (t === e) return h(new TypeError);
            if (t instanceof i) return t;
            try {
                var n = t === Object(t) && t.then;
                return typeof n == "function" ? m(n, t) : c(t)
            } catch (r) {
                return h(r)
            }
        }

        function m(e, t) {
            return a(function (n, r) {
                P(e, t, n, r)
            })
        }

        function g(e) {
            this.value = e
        }

        function y(e) {
            this.reason = e
        }

        function b(e, t) {
            function n() {
                t.fulfilled()
            }

            function r(e) {
                t.rejected(e)
            }
            e.then(n, r)
        }

        function w(e) {
            return e && typeof e.then == "function"
        }

        function E(e, t, r, i, s) {
            return n(e, function (e) {
                function o(r, i, s) {
                    function d(e) {
                        c(e)
                    }

                    function v(e) {
                        l(e)
                    }
                    var o, u, a, f, l, c, h, p;
                    h = e.length >>> 0, o = Math.max(0, Math.min(t, h)), a = [], u = h - o + 1, f = [];
                    if (!o) r(a);
                    else {
                        c = function (e) {
                            f.push(e), --u || (l = c = J, i(f))
                        }, l = function (e) {
                            a.push(e), --o || (l = c = J, r(a))
                        };
                        for (p = 0; p < h; ++p) p in e && n(e[p], v, d, s)
                    }
                }
                return a(o).then(r, i, s)
            })
        }

        function S(e, t, n, r) {
            function i(e) {
                return t ? t(e[0]) : e[0]
            }
            return E(e, 1, i, n, r)
        }

        function x(e, t, n, r) {
            return k(e, J).then(t, n, r)
        }

        function T() {
            return k(arguments, J)
        }

        function N(e) {
            return k(e, A, O)
        }

        function C(e, t) {
            return k(e, t)
        }

        function k(e, t, r) {
            return n(e, function (e) {
                function i(i, s, o) {
                    function c(e, a) {
                        n(e, t, r).then(function (e) {
                            u[a] = e, --f || i(u)
                        }, s, o)
                    }
                    var u, a, f, l;
                    f = a = e.length >>> 0, u = [];
                    if (!f) {
                        i(u);
                        return
                    }
                    for (l = 0; l < a; l++) l in e ? c(e[l], l) : --f
                }
                return f(i)
            })
        }

        function L(e, t) {
            var r = P(D, arguments, 1);
            return n(e, function (e) {
                var i;
                return i = e.length, r[0] = function (e, r, s) {
                    return n(e, function (e) {
                        return n(r, function (n) {
                            return t(e, n, s, i)
                        })
                    })
                }, _.apply(e, r)
            })
        }

        function A(e) {
            return {
                state: "fulfilled",
                value: e
            }
        }

        function O(e) {
            return {
                state: "rejected",
                reason: e
            }
        }

        function M() {
            return {
                state: "pending"
            }
        }

        function X(e) {
            B.push(e) === 1 && H(V)
        }

        function V() {
            l(B), B = []
        }

        function J(e) {
            return e
        }
        n.promise = a, n.resolve = s, n.reject = o, n.defer = u, n.join = T, n.all = x, n.map = C, n.reduce = L, n.settle = N, n.any = S, n.some = E, n.isPromise = w, n.isPromiseLike = w, i.prototype = {
            then: function (e, t, n) {
                var r, i;
                return r = arguments, i = this._message, f(function (e, t, n) {
                    i("when", r, e, n)
                }, this._status && this._status.observed())
            },
            otherwise: function (e) {
                return this.then(W, e)
            },
            ensure: function (e) {
                function t() {
                    return s(e())
                }
                return typeof e == "function" ? this.then(t, t).yield(this) : this
            },
            yield: function (e) {
                return this.then(function () {
                    return e
                })
            },
            tap: function (e) {
                return this.then(e).yield(this)
            },
            spread: function (e) {
                return this.then(function (t) {
                    return x(t, function (t) {
                        return e.apply(W, t)
                    })
                })
            },
            always: function (e, t) {
                return this.then(e, e, t)
            }
        }, g.prototype.when = function (e) {
            return typeof e == "function" ? e(this.value) : this.value
        }, y.prototype.when = function (e, t) {
            if (typeof t == "function") return t(this.reason);
            throw this.reason
        };
        var _, D, P, H, B, j, F, I, q, R, U, z, W;
        U = e, B = [], j = t.setTimeout, R = typeof console != "undefined" ? console : n;
        if (typeof process == "object" && process.nextTick) H = process.nextTick;
        else if (z = t.MutationObserver || t.WebKitMutationObserver) H = function (e, t, n) {
            var r = e.createElement("div");
            return (new t(n)).observe(r, {
                    attributes: !0
                }),
                function () {
                    r.setAttribute("x", "x")
                }
        }(document, z, V);
        else try {
            H = U("vertx").runOnLoop || U("vertx").runOnContext
        } catch ($) {
            H = function (e) {
                j(e, 0)
            }
        }
        return F = Function.prototype, I = F.call, P = F.bind ? I.bind(I) : function (e, t) {
            return e.apply(t, D.call(arguments, 2))
        }, q = [], D = q.slice, _ = q.reduce || function (e) {
            var t, n, r, i, s;
            s = 0, t = Object(this), i = t.length >>> 0, n = arguments;
            if (n.length <= 1)
                for (;;) {
                    if (s in t) {
                        r = t[s++];
                        break
                    }
                    if (++s >= i) throw new TypeError
                } else r = n[1];
            for (; s < i; ++s) s in t && (r = e(r, t[s], s, t));
            return r
        }, n
    })
}(typeof define == "function" && define.amd ? define : function (e) {
    module.exports = e(require)
}, this), define("when", ["when/when"], function (e) {
    return e
}), define("util/events", ["when"], function (e) {
    var t;
    return Function.prototype.bind ? t = function (t, n) {
        return t.bind(n)
    } : t = function (t, n) {
        return function () {
            return t.apply(n, arguments)
        }
    }, {
        on: function (e, n, r) {
            var i = this._topics || (this._topics = {}),
                s = i[e] || (i[e] = []),
                o = n,
                u;
            if (typeof e == "object") {
                for (var a in e) this.on(a, e[a], n, r);
                return this
            }
            return typeof r == "object" && (n = t(n, r), n._bindfn_ = o), s.push(n), this
        },
        off: function (e, t) {
            var n = this._topics || (this._topics = {}),
                r = n[e],
                i;
            if (!r) return this;
            for (var s = 0, o = r.length; s < o; s++) {
                i = r[s];
                if (i._bindfn_ === t || i === t) {
                    r.splice(s, 1);
                    break
                }
            }
            return this
        },
        emit: function (e, t) {
            var n = this._topics || (this._topics = {}),
                r = n[e],
                i = r && r.length,
                s = 0,
                o = {
                    topic: e
                };
            if (!i) return this;
            while (s < i) o.handler = r[s], o.handler && o.handler(o, t), s++;
            return this
        },
        after: function (t, n) {
            var r = this._dfds || (this._dfds = {}),
                i = r[t] || (r[t] = e.defer());
            return n ? i.promise.then(n) : i.promise
        },
        resolve: function (t, n) {
            var r = this._dfds || (this._dfds = {}),
                i = r[t] || (r[t] = e.defer());
            return i.resolve(n), this
        }
    }
}), define("moddef", ["util/events"], function (e) {
    var t = {}.hasOwnProperty,
        n = {
            events: e
        },
        r = function (t) {
            return typeof t == "function"
        },
        i = Array.isArray,
        s = function (e) {
            if (typeof e != "object" || e.nodeType || e === window) return !1;
            try {
                if (e.constructor && !t.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            return !0
        },
        o = function a() {
            var e, t, n, o, u, f, l = arguments[0] || {},
                c = 1,
                h = arguments.length,
                p = !1;
            typeof l == "boolean" && (p = l, l = arguments[c] || {}, c++), typeof l != "object" && !r(l) && (l = {});
            if (c === h) return l;
            for (; c < h; c++)
                if ((e = arguments[c]) != null)
                    for (t in e) {
                        n = l[t], o = e[t];
                        if (l === o) continue;
                        p && o && (s(o) || (u = i(o))) ? (u ? (u = !1, f = n && i(n) ? n : []) : f = n && s(n) ? n : {}, l[t] = a(p, f, o)) : o !== undefined && (l[t] = o)
                    }
                return l
        },
        u = function (t, r) {
            var i = function u(e) {
                if (!(this instanceof u)) return new u(e);
                this.constructor && this.constructor(e)
            };
            i.prototype = t;
            if (r) {
                var s;
                while (s = r.pop()) i.prototype = o(i.prototype, n[s])
            }
            return i
        };
    return u
}),
function (e, t) {
    typeof exports == "object" ? module.exports = t.call(e) : typeof define == "function" && define.amd ? define("physicsjs", [], function () {
        return t.call(e)
    }) : e.Physics = t.call(e)
}(this, function () {
    var e = this,
        t = e.document,
        n = function i() {
            return i.world.apply(i, arguments)
        };
    n.util = {},
    function (e) {
        function t(e, t, n) {
            n = (n || 0) - 1;
            for (var r = e ? e.length : 0; ++n < r;)
                if (e[n] === t) return n;
            return -1
        }

        function r(e, n) {
            var r = typeof n;
            e = e.l;
            if ("boolean" == r || null == n) return e[n] ? 0 : -1;
            "number" != r && "string" != r && (r = "object");
            var i = "number" == r ? n : P + n;
            return e = (e = e[r]) && e[i], "object" == r ? e && -1 < t(e, n) ? 0 : -1 : e ? 0 : -1
        }

        function i(e) {
            var t = this.l,
                n = typeof e;
            if ("boolean" == n || null == e) t[e] = !0;
            else {
                "number" != n && "string" != n && (n = "object");
                var r = "number" == n ? e : P + e,
                    t = t[n] || (t[n] = {});
                "object" == n ? (t[r] || (t[r] = [])).push(e) : t[r] = !0
            }
        }

        function s() {
            return M.pop() || []
        }

        function o() {
            return _.pop() || {
                k: null,
                l: null,
                "false": !1,
                "null": !1,
                number: null,
                object: null,
                push: null,
                string: null,
                "true": !1,
                "undefined": !1
            }
        }

        function u() {}

        function a(e) {
            e.length = 0, M.length < B && M.push(e)
        }

        function f(e) {
            var t = e.l;
            t && f(t), e.k = e.l = e.object = e.number = e.string = null, _.length < B && _.push(e)
        }

        function l(e, t, n) {
            t || (t = 0), typeof n == "undefined" && (n = e ? e.length : 0);
            var r = -1;
            n = n - t || 0;
            for (var i = Array(0 > n ? 0 : n); ++r < n;) i[r] = e[t + r];
            return i
        }

        function c() {}

        function h(e, t, n, r, i) {
            if (n) {
                var o = n(e);
                if (typeof o != "undefined") return o
            }
            if (!b(e)) return e;
            var u = ut.call(e);
            if (!J[u]) return e;
            var f = yt[u];
            switch (u) {
            case U:
            case z:
                return new f(+e);
            case W:
            case $:
                return new f(e);
            case V:
                return o = f(e.source, j.exec(e)), o.lastIndex = e.lastIndex, o
            }
            u = Et(e);
            if (t) {
                var c = !r;
                r || (r = s()), i || (i = s());
                for (var p = r.length; p--;)
                    if (r[p] == e) return i[p];
                o = u ? f(e.length) : {}
            } else o = u ? l(e) : xt({}, e);
            return u && (it.call(e, "index") && (o.index = e.index), it.call(e, "input") && (o.input = e.input)), t ? (r.push(e), i.push(o), (u ? S : Nt)(e, function (e, s) {
                o[s] = h(e, t, n, r, i)
            }), c && (a(r), a(i)), o) : o
        }

        function p(e, t, n) {
            if (typeof e != "function") return L;
            if (typeof t == "undefined") return e;
            var r = e.__bindData__ || bt.funcNames && !e.name;
            if (typeof r == "undefined") {
                var i = I && nt.call(e);
                bt.funcNames || !i || F.test(i) || (r = !0);
                if (bt.funcNames || !r) r = !bt.funcDecomp || I.test(i), wt(e, r)
            }
            if (!0 !== r && r && r[1] & 1) return e;
            switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, i) {
                    return e.call(t, n, r, i)
                };
            case 4:
                return function (n, r, i, s) {
                    return e.call(t, n, r, i, s)
                }
            }
            return C(e, t)
        }

        function d(e, t, n, r, i, o) {
            if (n) {
                var u = n(e, t);
                if (typeof u != "undefined") return !!u
            }
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            if (e === e && !(e && G[typeof e] || t && G[typeof t])) return !1;
            if (null == e || null == t) return e === t;
            var f = ut.call(e),
                l = ut.call(t);
            f == q && (f = X), l == q && (l = X);
            if (f != l) return !1;
            switch (f) {
            case U:
            case z:
                return +e == +t;
            case W:
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
            case V:
            case $:
                return e == String(t)
            }
            l = f == R;
            if (!l) {
                if (it.call(e, "__wrapped__") || it.call(t, "__wrapped__")) return d(e.__wrapped__ || e, t.__wrapped__ || t, n, r, i, o);
                if (f != X) return !1;
                var f = e.constructor,
                    c = t.constructor;
                if (f != c && !(y(f) && f instanceof f && y(c) && c instanceof c)) return !1
            }
            c = !i, i || (i = s()), o || (o = s());
            for (f = i.length; f--;)
                if (i[f] == e) return o[f] == t;
            var h = 0,
                u = !0;
            i.push(e), o.push(t);
            if (l) {
                f = e.length, h = t.length, u = h == e.length;
                if (!u && !r) return u;
                for (; h--;)
                    if (l = f, c = t[h], r)
                        for (; l-- && !(u = d(e[l], c, n, r, i, o)););
                    else if (!(u = d(e[h], c, n, r, i, o))) break;
                return u
            }
            return Tt(t, function (t, s, a) {
                if (it.call(a, s)) return h++, u = it.call(e, s) && d(e[s], t, n, r, i, o)
            }), u && !r && Tt(e, function (e, t, n) {
                if (it.call(n, t)) return u = -1 < --h
            }), c && (a(i), a(o)), u
        }

        function v(e, t, n, r, i, s) {
            var o = t & 1,
                u = t & 2,
                a = t & 4,
                f = t & 8,
                l = t & 16,
                c = t & 32,
                h = e;
            if (!u && !y(e)) throw new TypeError;
            l && !n.length && (t &= -17, l = n = !1), c && !r.length && (t &= -33, c = r = !1);
            var p = e && e.__bindData__;
            if (p) return !o || p[1] & 1 || (p[4] = i), !o && p[1] & 1 && (t |= 8), !a || p[1] & 4 || (p[5] = s), l && ot.apply(p[2] || (p[2] = []), n), c && ot.apply(p[3] || (p[3] = []), r), p[1] |= t, v.apply(null, p);
            if (!o || u || a || c || !(bt.fastBind || lt && l)) g = function () {
                var p = arguments,
                    d = o ? i : this;
                if (a || l || c)
                    if (p = gt.call(p), l && at.apply(p, n), c && ot.apply(p, r), a && p.length < s) return t |= 16, v(e, f ? t : t & -4, p, null, i, s);
                return u && (e = d[h]), this instanceof g ? (d = m(e.prototype), p = e.apply(d, p), b(p) ? p : d) : e.apply(d, p)
            };
            else {
                if (l) {
                    var d = [i];
                    ot.apply(d, n)
                }
                var g = l ? lt.apply(e, d) : lt.call(e, i)
            }
            return wt(g, gt.call(arguments)), g
        }

        function m(e) {
            return b(e) ? ct(e) : {}
        }

        function g(e) {
            var t, n;
            return !!e && ut.call(e) == X && (t = e.constructor, !y(t) || t instanceof t) ? (Tt(e, function (e, t) {
                n = t
            }), typeof n == "undefined" || it.call(e, n)) : !1
        }

        function y(e) {
            return typeof e == "function"
        }

        function b(e) {
            return !!e && !!G[typeof e]
        }

        function w(e, t, n) {
            var r = [];
            t = c.createCallback(t, n, 3), n = -1;
            var i = e ? e.length : 0;
            if (typeof i == "number")
                for (; ++n < i;) {
                    var s = e[n];
                    t(s, n, e) && r.push(s)
                } else Nt(e, function (e, n, i) {
                    t(e, n, i) && r.push(e)
                });
            return r
        }

        function E(e, t, n) {
            t = c.createCallback(t, n, 3), n = -1;
            var r = e ? e.length : 0;
            if (typeof r != "number") {
                var s;
                return Nt(e, function (e, n, r) {
                    if (t(e, n, r)) return s = e, !1
                }), s
            }
            for (; ++n < r;) {
                var i = e[n];
                if (t(i, n, e)) return i
            }
        }

        function S(e, t, n) {
            var r = -1,
                i = e ? e.length : 0;
            t = t && typeof n == "undefined" ? t : p(t, n, 3);
            if (typeof i == "number")
                for (; ++r < i && !1 !== t(e[r], r, e););
            else Nt(e, t);
            return e
        }

        function x(e, n, r) {
            if (typeof r == "number") {
                var i = e ? e.length : 0;
                r = 0 > r ? dt(0, i + r) : r || 0
            } else if (r) return r = T(e, n), e[r] === n ? r : -1;
            return t(e, n, r)
        }

        function T(e, t, n, r) {
            var i = 0,
                s = e ? e.length : i;
            n = n ? c.createCallback(n, r, 1) : L;
            for (t = n(t); i < s;) r = i + s >>> 1, n(e[r]) < t ? i = r + 1 : s = r;
            return i
        }

        function N(e, n, u, l) {
            typeof n != "boolean" && null != n && (u = (l = u) && l[n] === e ? null : n, n = !1), null != u && (u = c.createCallback(u, l, 3)), l = -1;
            var h;
            h = (h = c.indexOf) === x ? t : h;
            var p = e ? e.length : 0,
                d = [],
                v = !n && p >= H && h === t,
                m = u || v ? s() : d;
            if (v) {
                var g;
                g = m;
                var y = -1,
                    b = g.length,
                    w = g[0],
                    E = g[b / 2 | 0],
                    S = g[b - 1];
                if (w && typeof w == "object" && E && typeof E == "object" && S && typeof S == "object") g = !1;
                else {
                    w = o(), w["false"] = w["null"] = w["true"] = w.undefined = !1, E = o(), E.k = g, E.l = w;
                    for (E.push = i; ++y < b;) E.push(g[y]);
                    g = E
                }
                g ? (h = r, m = g) : (v = !1, m = u ? m : (a(m), d))
            }
            for (; ++l < p;)
                if (g = e[l], y = u ? u(g, l, e) : g, n ? !l || m[m.length - 1] !== y : 0 > h(m, y))(u || v) && m.push(y), d.push(g);
            return v ? (a(m.k), f(m)) : u && a(m), d
        }

        function C(e, t) {
            return 2 < arguments.length ? v(e, 17, gt.call(arguments, 2), null, t) : v(e, 1, null, null, t)
        }

        function k(e, t, n) {
            var r, i, s, o, u, a, f, l = 0,
                c = !1,
                h = !0;
            if (!y(e)) throw new TypeError;
            t = dt(0, t) || 0;
            if (!0 === n) var p = !0,
                h = !1;
            else b(n) && (p = n.leading, c = "maxWait" in n && (dt(t, n.maxWait) || 0), h = "trailing" in n ? n.trailing : h);
            var d = function () {
                    var n = t - (st() - o);
                    0 >= n ? (i && clearTimeout(i), n = f, i = a = f = O, n && (l = st(), s = e.apply(u, r))) : a = setTimeout(d, n)
                },
                v = function () {
                    a && clearTimeout(a), i = a = f = O;
                    if (h || c !== t) l = st(), s = e.apply(u, r)
                };
            return function () {
                r = arguments, o = st(), u = this, f = h && (a || !p);
                if (!1 === c) var n = p && !a;
                else {
                    i || p || (l = o);
                    var m = c - (o - l);
                    0 >= m ? (i && (i = clearTimeout(i)), l = o, s = e.apply(u, r)) : i || (i = setTimeout(v, m))
                }
                return a || t === c || (a = setTimeout(d, t)), n && (s = e.apply(u, r)), s
            }
        }

        function L(e) {
            return e
        }

        function A(e, t, n) {
            var r = null == e,
                i = null == t;
            return null == n && (typeof e == "boolean" && i ? (n = e, e = 1) : i || typeof t != "boolean" || (n = t, i = !0)), r && i && (t = 1), e = +e || 0, i ? (t = e, e = 0) : t = +t || 0, r = mt(), n || e % 1 || t % 1 ? vt(e + r * (t - e + parseFloat("1e-" + ((r + "").length - 1))), t) : e + tt(r * (t - e + 1))
        }
        var O, M = [],
            _ = [],
            D = 0,
            P = +(new Date) + "",
            H = 75,
            B = 40,
            j = /\w*$/,
            F = /^function[ \n\r\t]+\w/,
            I = /\bthis\b/,
            q = "[object Arguments]",
            R = "[object Array]",
            U = "[object Boolean]",
            z = "[object Date]",
            W = "[object Number]",
            X = "[object Object]",
            V = "[object RegExp]",
            $ = "[object String]",
            J = {
                "[object Function]": !1
            };
        J[q] = J[R] = J[U] = J[z] = J[W] = J[X] = J[V] = J[$] = !0;
        var K = {
                leading: !1,
                maxWait: 0,
                trailing: !1
            },
            Q = {
                configurable: !1,
                enumerable: !1,
                value: null,
                writable: !1
            },
            G = {
                "boolean": !1,
                "function": !0,
                object: !0,
                number: !1,
                string: !1,
                "undefined": !1
            };
        e = G[typeof e] && e || this;
        var Y = [],
            Z = Object.prototype,
            et = RegExp("^" + String(Z.valueOf).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
            tt = Math.floor,
            nt = Function.prototype.toString,
            rt = et.test(rt = Object.getPrototypeOf) && rt,
            it = Z.hasOwnProperty,
            st = et.test(st = Date.now) && st || function () {
                return +(new Date)
            },
            ot = Y.push,
            ut = Z.toString,
            at = Y.unshift,
            ft = function () {
                try {
                    var e = {},
                        t = et.test(t = Object.defineProperty) && t,
                        n = t(e, e, e) && t
                } catch (r) {}
                return n
            }(),
            lt = et.test(lt = ut.bind) && lt,
            ct = et.test(ct = Object.create) && ct,
            ht = et.test(ht = Array.isArray) && ht,
            pt = et.test(pt = Object.keys) && pt,
            dt = Math.max,
            vt = Math.min,
            mt = Math.random,
            gt = Y.slice,
            Y = et.test(e.attachEvent),
            Y = lt && !/\n|true/.test(lt + Y),
            yt = {};
        yt[R] = Array, yt[U] = Boolean, yt[z] = Date, yt["[object Function]"] = Function, yt[X] = Object, yt[W] = Number, yt[V] = RegExp, yt[$] = String;
        var bt = c.support = {};
        bt.fastBind = lt && !Y, bt.funcDecomp = !et.test(e.WinRTError) && I.test(function () {
            return this
        }), bt.funcNames = typeof Function.name == "string", ct || (m = function (e) {
            if (b(e)) {
                u.prototype = e;
                var t = new u;
                u.prototype = null
            }
            return t || {}
        });
        var wt = ft ? function (e, t) {
                Q.value = t, ft(e, "__bindData__", Q)
            } : u,
            Et = ht || function (e) {
                return e && typeof e == "object" && typeof e.length == "number" && ut.call(e) == R || !1
            },
            ht = function (e) {
                var t, n = [];
                if (!e || !G[typeof e]) return n;
                for (t in e) it.call(e, t) && n.push(t);
                return n
            },
            St = pt ? function (e) {
                return b(e) ? pt(e) : []
            } : ht,
            xt = function (e, t, n) {
                var r, i = e,
                    s = i;
                if (!i) return s;
                var o = arguments,
                    u = 0,
                    a = typeof n == "number" ? 2 : o.length;
                if (3 < a && "function" == typeof o[a - 2]) var f = p(o[--a - 1], o[a--], 2);
                else 2 < a && "function" == typeof o[a - 1] && (f = o[--a]);
                for (; ++u < a;)
                    if ((i = o[u]) && G[typeof i])
                        for (var l = -1, c = G[typeof i] && St(i), h = c ? c.length : 0; ++l < h;) r = c[l], s[r] = f ? f(s[r], i[r]) : i[r];
                return s
            },
            Tt = function (e, t, n) {
                var r;
                if (!e || !G[typeof e]) return e;
                t = t && typeof n == "undefined" ? t : p(t, n, 3);
                for (r in e)
                    if (!1 === t(e[r], r, e)) break;
                return e
            },
            Nt = function (e, t, n) {
                if (!e || !G[typeof e]) return e;
                t = t && typeof n == "undefined" ? t : p(t, n, 3);
                for (var r = -1, i = G[typeof e] && St(e), s = i ? i.length : 0; ++r < s && (n = i[r], !1 !== t(e[n], n, e)););
                return e
            };
        c.assign = xt, c.bind = C, c.createCallback = function (e, t, n) {
            var r = typeof e;
            if (null == e || "function" == r) return p(e, t, n);
            if ("object" != r) return function (t) {
                return t[e]
            };
            var i = St(e),
                s = i[0],
                o = e[s];
            return 1 != i.length || o !== o || b(o) ? function (t) {
                for (var n = i.length, r = !1; n-- && (r = d(t[i[n]], e[i[n]], null, !0)););
                return r
            } : function (e) {
                return e = e[s], o === e && (0 !== o || 1 / o == 1 / e)
            }
        }, c.debounce = k, c.defaults = function (e, t, n) {
            var r, i = e,
                s = i;
            if (!i) return s;
            for (var o = arguments, u = 0, a = typeof n == "number" ? 2 : o.length; ++u < a;)
                if ((i = o[u]) && G[typeof i])
                    for (var f = -1, l = G[typeof i] && St(i), c = l ? l.length : 0; ++f < c;) r = l[f], "undefined" == typeof s[r] && (s[r] = i[r]);
            return s
        }, c.filter = w, c.forEach = S, c.forIn = Tt, c.forOwn = Nt, c.keys = St, c.shuffle = function (e) {
            var t = -1,
                n = e ? e.length : 0,
                r = Array(typeof n == "number" ? n : 0);
            return S(e, function (e) {
                var n = A(++t);
                r[t] = r[n], r[n] = e
            }), r
        }, c.throttle = function (e, t, n) {
            var r = !0,
                i = !0;
            if (!y(e)) throw new TypeError;
            return !1 === n ? r = !1 : b(n) && (r = "leading" in n ? n.leading : r, i = "trailing" in n ? n.trailing : i), K.leading = r, K.maxWait = t, K.trailing = i, k(e, t, K)
        }, c.transform = function (e, t, n, r) {
            var i = Et(e);
            return t = p(t, r, 4), null == n && (i ? n = [] : (r = e && e.constructor, n = m(r && r.prototype))), (i ? S : Nt)(e, function (e, r, i) {
                return t(n, e, r, i)
            }), n
        }, c.uniq = N, c.each = S, c.extend = xt, c.select = w, c.unique = N, c.clone = function (e, t, n, r) {
            return typeof t != "boolean" && null != t && (r = n, n = t, t = !1), h(e, t, typeof n == "function" && p(n, r, 1))
        }, c.find = E, c.identity = L, c.indexOf = x, c.isArray = Et, c.isFunction = y, c.isObject = b, c.isPlainObject = function (e) {
            if (!e || ut.call(e) != X) return !1;
            var t = e.valueOf,
                n = typeof t == "function" && (n = rt(t)) && rt(n);
            return n ? e == n || rt(e) == n : g(e)
        }, c.random = A, c.sortedIndex = T, c.uniqueId = function (e) {
            var t = ++D;
            return String(null == e ? "" : e) + t
        }, c.detect = E, c.findWhere = E, c.VERSION = "2.2.1", c.extend(n.util, c)
    }(this),
    function () {
        n.aabb = function (e, t, n, r) {
            var i = {};
            return e && e.x !== undefined && (n = t.x, r = t.y, t = e.y, e = e.x), n && n.x !== undefined ? (i.x = n.x, i.y = n.y, i.hw = e * .5, i.hh = t * .5, i) : (i.hw = Math.abs(n - e) * .5, i.hh = Math.abs(r - t) * .5, i.x = (n + e) * .5, i.y = (r + t) * .5, i)
        }, n.aabb.contains = function (t, n) {
            return n.x > t.x - t.hw && n.x < t.x + t.hw && n.y > t.y - t.hh && n.y < t.y + t.hh
        }, n.aabb.clone = function (e) {
            return {
                x: e.x,
                y: e.y,
                hw: e.hw,
                hh: e.hh
            }
        }, n.aabb.overlap = function (e, t) {
            var n = e.x - e.hw,
                r = t.x - t.hw,
                i = e.x + e.hw,
                s = t.x + t.hw;
            return r <= i && i <= s || n <= s && s <= i ? (n = e.y - e.hh, r = t.y - t.hh, i = e.y + e.hh, s = t.y + t.hh, r <= i && i <= s || n <= s && s <= i) : !1
        }
    }(),
    function () {
        var e = 1e-4,
            t = 100,
            r = function (t, n, r) {
                var i = n.normSq() - n.dot(t),
                    s = n.dot(t) - t.normSq();
                return i < 0 ? r.clone(n).negate() : s > 0 ? r.clone(t).negate() : (r.clone(n).vsub(t), r.perp(t.cross(r) > 0))
            },
            i = function (t) {
                var r = t.length,
                    i = t[r - 2],
                    s = t[r - 3],
                    o = n.scratchpad(),
                    u = o.vector().clone(i.pt),
                    a = o.vector().clone(s.pt).vsub(u),
                    f, l;
                if (a.equals(n.vector.zero)) return o.done(), {
                    a: i.a,
                    b: i.b
                };
                f = -a.dot(u) / a.normSq(), l = 1 - f;
                if (l <= 0) return o.done(), {
                    a: s.a,
                    b: s.b
                };
                if (f <= 0) return o.done(), {
                    a: i.a,
                    b: i.b
                };
                var c = {
                    a: u.clone(i.a).mult(l).vadd(a.clone(s.a).mult(f)).values(),
                    b: u.clone(i.b).mult(l).vadd(a.clone(s.b).mult(f)).values()
                };
                return o.done(), c
            },
            s = function (o, u, a, f) {
                var l = !1,
                    c = !1,
                    h = !1,
                    p = [],
                    d = 1,
                    v = n.scratchpad(),
                    m = v.vector().clone(u || n.vector.axis[0]),
                    g = v.vector(),
                    y = v.vector(),
                    b = v.vector(),
                    w = v.vector(),
                    E, S, x, T, N = 0;
                T = o(m), d = p.push(T), g.clone(T.pt), m.negate();
                while (++N) {
                    g.swap(y), T = o(m), d = p.push(T), g.clone(T.pt), f && f(p);
                    if (g.equals(n.vector.zero)) {
                        l = !0;
                        break
                    }
                    if (!c && g.dot(m) <= 0) {
                        if (a) break;
                        c = !0
                    }
                    if (d === 2) m = r(g, y, m);
                    else if (c) {
                        m.normalize(), T = y.dot(m);
                        if (Math.abs(T - g.dot(m)) < e) {
                            h = -T;
                            break
                        }
                        y.normSq() < b.clone(p[0].pt).normSq() ? p.shift() : p.splice(1, 1), m = r(b.clone(p[1].pt), w.clone(p[0].pt), m)
                    } else {
                        E = E || v.vector(), S = S || v.vector(), E.clone(y).vsub(g), S.clone(p[0].pt).vsub(g), x = E.cross(S) > 0;
                        if (x ^ g.cross(E) > 0) p.shift(), E.perp(!x), m.swap(E);
                        else {
                            if (!(x ^ S.cross(g) > 0)) {
                                l = !0;
                                break
                            }
                            p.splice(1, 1), S.perp(x), m.swap(E)
                        }
                    } if (N > t) return v.done(), {
                        simplex: p,
                        iterations: N,
                        distance: 0,
                        maxIterationsReached: !0
                    }
                }
                return v.done(), T = {
                    overlap: l,
                    simplex: p,
                    iterations: N
                }, h !== !1 && (T.distance = h, T.closest = i(p)), T
            };
        n.gjk = s
    }(),
    function () {
        var e = function t(e, r, i) {
            if (!(this instanceof t)) return new t(e, r);
            this.v = n.vector(), this.o = n.vector();
            if (e instanceof t) {
                this.clone(e);
                return
            }
            e && this.setTranslation(e), this.setRotation(r || 0, i)
        };
        e.prototype.setTranslation = function (e) {
            return this.v.clone(e), this
        }, e.prototype.setRotation = function (e, t) {
            return this.cosA = Math.cos(e), this.sinA = Math.sin(e), t ? this.o.clone(t) : this.o.zero(), this
        }, e.prototype.clone = function (t) {
            return t ? (this.setTranslation(t.v), this.cosA = t.cosA, this.sinA = t.sinA, this.o.clone(t.o), this) : new e(this)
        }, n.transform = e
    }(),
    function (e) {
        var t = Math.sqrt,
            r = Math.min,
            i = Math.max,
            s = Math.acos,
            o = Math.atan2,
            u = Math.PI * 2,
            a = !!e.Float64Array,
            f = function l(e, t) {
                if (!(this instanceof l)) return new l(e, t);
                a ? this._ = new Float64Array(5) : this._ = [], e && (e.x !== undefined || e._ && e._.length) ? this.clone(e) : (this.recalc = !0, this.set(e, t))
            };
        Object.defineProperties(f.prototype, {
            x: {
                get: function () {
                    return +this._[0]
                },
                set: function (e) {
                    e = +e || 0, this.recalc = e === this._[0], this._[0] = e
                }
            },
            y: {
                get: function () {
                    return +this._[1]
                },
                set: function (e) {
                    e = +e || 0, this.recalc = e === this._[1], this._[1] = e
                }
            }
        }), f.prototype.set = function (e, t) {
            return this.recalc = !0, this._[0] = +e || 0, this._[1] = +t || 0, this
        }, f.prototype.get = function (e) {
            return this._[e]
        }, f.prototype.vadd = function (e) {
            return this.recalc = !0, this._[0] += e._[0], this._[1] += e._[1], this
        }, f.prototype.vsub = function (e) {
            return this.recalc = !0, this._[0] -= e._[0], this._[1] -= e._[1], this
        }, f.prototype.add = function (e, t) {
            return this.recalc = !0, this._[0] += +e || 0, this._[1] += +t || 0, this
        }, f.prototype.sub = function (e, t) {
            return this.recalc = !0, this._[0] -= e, this._[1] -= t === undefined ? 0 : t, this
        }, f.prototype.mult = function (e) {
            return this.recalc || (this._[4] *= e * e, this._[3] *= e), this._[0] *= e, this._[1] *= e, this
        }, f.prototype.dot = function (e) {
            return this._[0] * e._[0] + this._[1] * e._[1]
        }, f.prototype.cross = function (e) {
            return -this._[0] * e._[1] + this._[1] * e._[0]
        }, f.prototype.proj = function (e) {
            return this.dot(e) / e.norm()
        }, f.prototype.vproj = function (e) {
            var t = this.dot(e) / e.normSq();
            return this.clone(e).mult(t)
        }, f.prototype.angle = function (e) {
            var t;
            if (this.equals(f.zero)) return e ? e.angle() : NaN;
            e && !e.equals(f.zero) ? t = o(this._[1] * e._[0] - this._[0] * e._[1], this._[0] * e._[0] + this._[1] * e._[1]) : t = o(this._[1], this._[0]);
            while (t > Math.PI) t -= u;
            while (t < -Math.PI) t += u;
            return t
        }, f.prototype.angle2 = function (e, t) {
            var n = e._[0] - this._[0],
                r = e._[1] - this._[1],
                i = t._[0] - this._[0],
                s = t._[1] - this._[1],
                a = o(r * i - n * s, n * i + r * s);
            while (a > Math.PI) a -= u;
            while (a < -Math.PI) a += u;
            return a
        }, f.prototype.norm = function () {
            return this.recalc && (this.recalc = !1, this._[4] = this._[0] * this._[0] + this._[1] * this._[1], this._[3] = t(this._[4])), this._[3]
        }, f.prototype.normSq = function () {
            return this.recalc && (this.recalc = !1, this._[4] = this._[0] * this._[0] + this._[1] * this._[1], this._[3] = t(this._[4])), this._[4]
        }, f.prototype.dist = function (e) {
            var n, r;
            return t((n = e._[0] - this._[0]) * n + (r = e._[1] - this._[1]) * r)
        }, f.prototype.distSq = function (e) {
            var t, n;
            return (t = e._[0] - this._[0]) * t + (n = e._[1] - this._[1]) * n
        }, f.prototype.perp = function (e) {
            var t = this._[0];
            return e ? (this._[0] = this._[1], this._[1] = -t) : (this._[0] = -this._[1], this._[1] = t), this
        }, f.prototype.normalize = function () {
            var e = this.norm();
            return e === 0 ? this : (e = 1 / e, this._[0] *= e, this._[1] *= e, this._[3] = 1, this._[4] = 1, this)
        }, f.prototype.transform = function (e) {
            var t = e.sinA,
                n = e.cosA,
                r = e.o._[0],
                i = e.o._[1];
            return this._[0] -= r, this._[1] -= i, this.set(this._[0] * n - this._[1] * t + r + e.v._[0], this._[0] * t + this._[1] * n + i + e.v._[1])
        }, f.prototype.transformInv = function (e) {
            var t = e.sinA,
                n = e.cosA,
                r = e.o._[0],
                i = e.o._[1];
            return this._[0] -= r + e.v._[0], this._[1] -= i + e.v._[1], this.set(this._[0] * n + this._[1] * t + r, -this._[0] * t + this._[1] * n + i)
        }, f.prototype.rotate = function (e, t) {
            var n, r, i = 0,
                s = 0;
            return typeof e == "number" ? (n = Math.sin(e), r = Math.cos(e), t && (i = (t.x || t._[0]) | 0, s = (t.y || t._[1]) | 0)) : (n = e.sinA, r = e.cosA, i = e.o._[0], s = e.o._[1]), this._[0] -= i, this._[1] -= s, this.set(this._[0] * r - this._[1] * n + i, this._[0] * n + this._[1] * r + s)
        }, f.prototype.rotateInv = function (e) {
            return this.set((this._[0] - e.o._[0]) * e.cosA + (this._[1] - e.o._[1]) * e.sinA + e.o._[0], -(this._[0] - e.o._[0]) * e.sinA + (this._[1] - e.o._[1]) * e.cosA + e.o._[1])
        }, f.prototype.translate = function (e) {
            return this.vadd(e.v)
        }, f.prototype.translateInv = function (e) {
            return this.vsub(e.v)
        }, f.prototype.clone = function (e) {
            return e ? e._ ? (this.recalc = e.recalc, e.recalc || (this._[3] = e._[3], this._[4] = e._[4]), this._[0] = e._[0], this._[1] = e._[1], this) : this.set(e.x, e.y) : new f(this)
        }, f.prototype.swap = function (e) {
            var t = this._;
            return this._ = e._, e._ = t, t = this.recalc, this.recalc = e.recalc, e.recalc = t, this
        }, f.prototype.values = function () {
            return {
                x: this._[0],
                y: this._[1]
            }
        }, f.prototype.zero = function () {
            return this._[3] = 0, this._[4] = 0, this._[0] = 0, this._[1] = 0, this
        }, f.prototype.negate = function (e) {
            return e !== undefined ? (this._[e] = -this._[e], this) : (this._[0] = -this._[0], this._[1] = -this._[1], this)
        }, f.prototype.clamp = function (e, t) {
            return this._[0] = r(i(this._[0], e.x), t.x), this._[1] = r(i(this._[1], e.y), t.y), this.recalc = !0, this
        }, f.prototype.toString = function () {
            return "(" + this._[0] + ", " + this._[1] + ")"
        }, f.prototype.equals = function (e) {
            return this._[0] === e._[0] && this._[1] === e._[1] && this._[2] === e._[2]
        }, f.axis = [new f(1, 0), new f(0, 1)], f.zero = new f(0, 0), n.vector = f
    }(this),
    function (e) {
        var t = e.Physics;
        n.noConflict = function () {
            return e.Physics === n && (e.Physics = t), n
        }
    }(this);
    var r = n.util.decorator = function (t, r) {
        var i = {},
            s = {},
            o = function (t, r, i, s) {
                var o = Object.getOwnPropertyDescriptor(s, i);
                o.get || o.set ? Object.defineProperty(t, i, o) : n.util.isFunction(o.value) && (t[i] = o.value)
            },
            u = function (t, r) {
                return n.util.transform(r, o, t)
            },
            a = Object.getPrototypeOf;
        typeof a != "function" && (typeof "test".__proto__ == "object" ? a = function (e) {
            return e.__proto__
        } : a = function (e) {
            return e.constructor.prototype
        });
        var f = Object.create;
        typeof f != "function" && (f = function (e) {
            function t() {}
            return t.prototype = e, new t
        });
        var l = function (r, i) {
            if (typeof r == "object") {
                s = u(s, r), s.type = t;
                return
            }
            r !== "type" && n.util.isFunction(i) && (s[r] = i)
        };
        l(r);
        var c = function (n, r, o, l) {
            var c, h, p = s,
                d;
            if (typeof r != "string") l = o, o = r;
            else {
                p = i[r];
                if (!p) throw 'Error: "' + r + '" ' + t + " not defined";
                p = p.prototype
            } if (typeof o == "function") h = i[n], h ? h.prototype = u(h.prototype, o(a(h.prototype))) : (h = i[n] = function v(e) {
                this.init && this.init(e)
            }, h.prototype = f(p), h.prototype = u(h.prototype, o(p, h.prototype))), h.prototype.type = t, h.prototype.name = n;
            else {
                l = o || {}, h = i[n];
                if (!h) throw 'Error: "' + n + '" ' + t + " not defined"
            } if (l) return new h(l)
        };
        return c.mixin = l, c
    };
    return n.util.indexOf = function (t, n) {
            var r = 0,
                i = t.length;
            while (r < i) {
                i--;
                if (t[r] === n) return r;
                if (t[i] === n) return i;
                r++
            }
            return -1
        }, n.util.options = function (e, t) {
            var r = {},
                i, s = [];
            return i = function (r) {
                n.util.extend(t, r, null);
                for (var i = 0, o = s.length; i < o; ++i) s[i](t);
                return t
            }, i.defaults = function (i) {
                return n.util.extend(r, i), n.util.defaults(t, r), r
            }, i.onChange = function (e) {
                s.push(e)
            }, t = t || i, i.defaults(e), i
        }, n.scratchpad = function () {
            var e = "Error: Scratchpad used after .done() called. (Could it be unintentionally scoped?)",
                t = "Error: Scratchpad usage space out of bounds. (Did you forget to call .done()?)",
                r = "Error: Too many scratchpads created. (Did you forget to call .done()?)",
                i = "Error: Object is already registered.",
                s = [],
                o = 0,
                u, a, f = 0;
            return u = function () {
                this._active = !1, this._indexArr = [];
                if (++o >= a.maxScratches) throw r
            }, u.prototype = {
                done: function (e) {
                    this._active = !1;
                    var t;
                    for (var n = 0; n < f; ++n) this[n] = 0;
                    return s.push(this), e
                }
            }, a = function l(e) {
                if (e) return l.fn(e);
                var t = s.pop() || new u;
                return t._active = !0, t
            }, a.maxScratches = 100, a.maxIndex = 20, a.fn = function (e) {
                var t = [];
                for (var n = 0, r = e.length; n < r; n++) t.push(n);
                t = "a" + t.join(",a");
                var i = new Function("fn, scratches, Scratch", "return function(" + t + "){ " + "var scratch = scratches.pop() || new Scratch( scratches );" + "scratch._active = true;" + "return scratch.done( fn(scratch, " + t + ") );" + "};");
                return i(e, s, u)
            }, a.register = function (r, s, o) {
                var l = u.prototype,
                    c = f++,
                    h = "_" + r + "Stack",
                    p = o && o.useFactory;
                if (r in l) throw i;
                l[r] = function () {
                    var n = this[h] || (this[h] = []),
                        r = this[c] | 0;
                    this[c] = r + 1;
                    if (!this._active) throw e;
                    if (r >= a.maxIndex) throw t;
                    return n[r] || (n[r] = p ? s() : new s)
                }
            }, a.register("vector", n.vector), a.register("transform", n.transform), a
        }(),
        function () {
            n.scratchpad.register("event", function () {
                return {}
            }, {
                useFactory: !0
            });
            var e = function t() {
                if (!(this instanceof t)) return new t
            };
            e.prototype = {
                on: function (e, t, r, i) {
                    var s, o, u;
                    this._topics = this._topics || (this._topics = {});
                    if (n.util.isObject(e)) {
                        for (var a in e) this.on(a, e[a], t, r);
                        return this
                    }
                    return s = this._topics[e] || (this._topics[e] = []), o = t, n.util.isObject(r) ? (t = n.util.bind(t, r), t._bindfn_ = o, t._one_ = o._one_) : i || (i = r), t._priority_ = i, u = n.util.sortedIndex(s, t, "_priority_"), s.splice(u, 0, t), this
                },
                off: function (e, t) {
                    var r, i;
                    if (!this._topics) return this;
                    if (e === !0) return this._topics = {}, this;
                    if (n.util.isObject(e)) {
                        for (var s in e) this.off(s, e[s]);
                        return this
                    }
                    r = this._topics[e];
                    if (!r) return this;
                    if (t === !0) return this._topics[e] = [], this;
                    for (var o = 0, u = r.length; o < u; o++) {
                        i = r[o];
                        if (i._bindfn_ === t || i === t) {
                            r.splice(o, 1);
                            break
                        }
                    }
                    return this
                },
                emit: function (e, t) {
                    if (!this._topics) return this;
                    var r = this._topics[e],
                        i = r && r.length,
                        s, o, u = n.scratchpad();
                    if (!i) return u.done(this);
                    o = u.event(), o.topic = e, o.handler = s;
                    while (i--) s = r[i], s(t, o), s._one_ && r.splice(i, 1);
                    return u.done(this)
                },
                one: function (e, t, r) {
                    if (n.util.isObject(e)) {
                        for (var i in e) this.one(i, e[i], t, r);
                        return this
                    }
                    return t._one_ = !0, this.on(e, t, r), this
                }
            }, n.util.pubsub = e
        }(),
        function (e) {
            function s() {
                return i && i.now ? i.now() + i.timing.navigationStart : Date.now()
            }

            function o(n) {
                if (!t) return;
                e.requestAnimationFrame(o), r.emit("tick", n)
            }

            function u() {
                return t = !0, o(), this
            }

            function a() {
                return t = !1, this
            }

            function f(e) {
                return r.on("tick", e), this
            }

            function l(e) {
                return r.off("tick", e), this
            }

            function c() {
                return !!t
            }
            var t = !1,
                r = n.util.pubsub(),
                i = e.performance;
            n.util.ticker = {
                now: s,
                start: u,
                stop: a,
                on: f,
                off: l,
                isActive: c
            }
        }(this),
        function (e) {
            var t = function () {
                    return !0
                },
                r = n.util.indexOf,
                i = function (t, n) {
                    return function (e) {
                        return t(e[n])
                    }
                },
                s = function (t, i) {
                    return function (e) {
                        e = i ? e[i] : e;
                        var s = 0,
                            o;
                        if (n.util.isArray(e)) {
                            if (n.util.isArray(t)) {
                                o = e.length;
                                if (o !== t.length) return !1;
                                while (s < o) {
                                    o--;
                                    if (r(t, e[s]) === -1 || r(t, e[o]) === -1) return !1;
                                    s++
                                }
                                return !0
                            }
                            return r(e, t) > -1
                        }
                        return e === t
                    }
                },
                o = function (t, n) {
                    var r = s(t, n);
                    return function (e) {
                        return !r(e)
                    }
                },
                u = function (t, i) {
                    return function (e) {
                        e = i ? e[i] : e;
                        var s = 0,
                            o;
                        if (n.util.isArray(e)) {
                            o = e.length;
                            while (s < o) {
                                o--;
                                if (r(t, e[s]) > -1 || r(t, e[o]) > -1) return !0;
                                s++
                            }
                            return !1
                        }
                        return r(t, e) > -1
                    }
                },
                a = function (t, n) {
                    var r = u(t, n);
                    return function (e) {
                        return !r(e)
                    }
                },
                f = function (t) {
                    return t = n.vector(t),
                        function (e) {
                            var r = e.aabb();
                            return n.aabb.contains(r, t)
                        }
                },
                l = function (t) {
                    return t.next ? function (e) {
                        var n = t;
                        while (n) {
                            if (!n(e)) return !1;
                            n = n.next
                        }
                        return !0
                    } : t
                },
                c = function (t) {
                    return t.next ? function (e) {
                        var n = t;
                        while (n) {
                            if (n(e)) return !0;
                            n = n.next
                        }
                        return !1
                    } : t
                },
                h = {
                    $eq: s,
                    $ne: o,
                    $in: u,
                    $nin: a,
                    $at: f
                },
                p = function d(e, r) {
                    var o, u, a, f, p, v;
                    if (r) {
                        if (r === "$or" || r === "$and") {
                            for (o = 0, u = e.length; o < u; ++o) v = d(e[o]), p = p ? p.next = v : f = v;
                            return r === "$or" ? c(f) : l(f)
                        }
                        if (o = h[r]) return o(e);
                        throw "Unknown query operation: " + r
                    }
                    for (o in e) a = e[o], o[0] === "$" ? v = d(a, o) : n.util.isPlainObject(a) ? v = i(d(a), o) : v = s(a, o), p = p ? p.next = v : f = v;
                    return l(f || t)
                };
            n.query = p
        }(this),
        function () {
            var e = {
                priority: 0
            };
            n.behavior = r("behavior", {
                init: function (t) {
                    this.options = n.util.options(e), this.options(t)
                },
                applyTo: function (e) {
                    return e === !0 ? this._targets = null : this._targets = n.util.uniq(e), this
                },
                getTargets: function () {
                    return this._targets || (this._world ? this._world._bodies : [])
                },
                setWorld: function (e) {
                    return this.disconnect && this._world && this.disconnect(this._world), this._world = e, this.connect && e && this.connect(e), this
                },
                connect: function (e) {
                    this.behave && e.on("integrate:positions", this.behave, this, this.options.priority)
                },
                disconnect: function (e) {
                    this.behave && e.off("integrate:positions", this.behave)
                },
                behave: null
            })
        }(),
        function () {
            var e = {
                hidden: !1,
                treatment: "dynamic",
                mass: 1,
                restitution: 1,
                cof: .8,
                view: null
            };
            n.body = r("body", {
                init: function (t) {
                    var r = n.vector;
                    this.options = n.util.options(e, this), this.options(t), this.state = {
                        pos: r(this.x, this.y),
                        vel: r(this.vx, this.vy),
                        acc: r(),
                        angular: {
                            pos: this.angle || 0,
                            vel: this.angularVelocity || 0,
                            acc: 0
                        },
                        old: {
                            pos: r(),
                            vel: r(),
                            acc: r(),
                            angular: {
                                pos: 0,
                                vel: 0,
                                acc: 0
                            }
                        }
                    }, delete this.x, delete this.y, delete this.vx, delete this.vy, delete this.angle, delete this.angularVelocity;
                    if (this.mass === 0) throw "Error: Bodies must have non-zero mass";
                    this.geometry = n.geometry("point")
                },
                setWorld: function (e) {
                    return this.disconnect && this._world && this.disconnect(this._world), this._world = e, this.connect && e && this.connect(e), this
                },
                accelerate: function (e) {
                    return this.treatment === "dynamic" && this.state.acc.vadd(e), this
                },
                applyForce: function (e, t) {
                    if (this.treatment !== "dynamic") return this;
                    var r = n.scratchpad(),
                        i = r.vector(),
                        s;
                    return t ? this.moi && (s = this.state, i.clone(t), this.state.angular.acc -= i.cross(e) / this.moi, this.applyForce(e)) : this.accelerate(i.clone(e).mult(1 / this.mass)), r.done(), this
                },
                aabb: function () {
                    var e = this.state.angular.pos,
                        t = this.geometry.aabb(e);
                    return t.x += this.state.pos.x, t.y += this.state.pos.y, t
                },
                recalc: function () {
                    return this
                }
            })
        }(),
        function () {
            n.geometry = r("geometry", {
                init: function (e) {
                    this.options = n.util.options(), this.options(e), this._aabb = new n.aabb
                },
                aabb: function (e) {
                    return n.aabb.clone(this._aabb)
                },
                getFarthestHullPoint: function (e, t) {
                    return t = t || n.vector(), t.set(0, 0)
                },
                getFarthestCorePoint: function (e, t, r) {
                    return t = t || n.vector(), t.set(0, 0)
                }
            })
        }(), n.geometry.isPolygonConvex = function (e) {
            var t = n.scratchpad(),
                r = t.vector(),
                i = t.vector(),
                s = t.vector(),
                o = !0,
                u = !1,
                a = e.length;
            if (!e || !a) return !1;
            if (a < 3) return t.done(), o;
            r.clone(e[0]).vsub(s.clone(e[a - 1]));
            for (var f = 1; f <= a; ++f) {
                i.clone(e[f % a]).vsub(s.clone(e[(f - 1) % a]));
                if (u === !1) u = r.cross(i);
                else if (u > 0 ^ r.cross(i) > 0) {
                    o = !1;
                    break
                }
                i.swap(r)
            }
            return t.done(), o
        }, n.geometry.getPolygonMOI = function (e) {
            var t = n.scratchpad(),
                r = t.vector(),
                i = t.vector(),
                s = 0,
                o = 0,
                u, a = e.length;
            if (a < 2) return t.done(), 0;
            if (a === 2) return u = i.clone(e[1]).distSq(r.clone(e[0])), t.done(), u / 12;
            r.clone(e[0]);
            for (var f = 1; f < a; ++f) i.clone(e[f]), u = Math.abs(i.cross(r)), s += u * (i.normSq() + i.dot(r) + r.normSq()), o += u, r.swap(i);
            return t.done(), s / (6 * o)
        }, n.geometry.isPointInPolygon = function (e, t) {
            var r = n.scratchpad(),
                i = r.vector().clone(e),
                s = r.vector(),
                o = r.vector(),
                u = 0,
                a = t.length;
            if (a < 2) return u = i.equals(s.clone(t[0])), r.done(), u;
            if (a === 2) return u = i.angle(s.clone(t[0])), u += i.angle(s.clone(t[1])), r.done(), Math.abs(u) === Math.PI;
            s.clone(t[0]).vsub(i);
            for (var f = 1; f <= a; ++f) o.clone(t[f % a]).vsub(i), u += o.angle(s), s.swap(o);
            return r.done(), Math.abs(u) > 1e-6
        }, n.geometry.getPolygonArea = function (t) {
            var r = n.scratchpad(),
                i = r.vector(),
                s = r.vector(),
                o = 0,
                u = t.length;
            if (u < 3) return r.done(), 0;
            i.clone(t[u - 1]);
            for (var a = 0; a < u; ++a) s.clone(t[a]), o += i.cross(s), i.swap(s);
            return r.done(), o / 2
        }, n.geometry.getPolygonCentroid = function (t) {
            var r = n.scratchpad(),
                i = r.vector(),
                s = r.vector(),
                o = n.vector(),
                u, a = t.length;
            if (a < 2) return r.done(), n.vector(t[0]);
            if (a === 2) return r.done(), n.vector((t[1].x + t[0].x) / 2, (t[1].y + t[0].y) / 2);
            i.clone(t[a - 1]);
            for (var f = 0; f < a; ++f) s.clone(t[f]), u = i.cross(s), i.vadd(s).mult(u), o.vadd(i), i.swap(s);
            return u = 1 / (6 * n.geometry.getPolygonArea(t)), r.done(), o.mult(u)
        }, n.geometry.nearestPointOnLine = function (t, r, i) {
            var s = n.scratchpad(),
                o = s.vector().clone(t),
                u = s.vector().clone(r).vsub(o),
                a = s.vector().clone(i).vsub(o).vsub(u),
                f, l;
            return a.equals(n.vector.zero) ? (s.done(), n.vector(r)) : (f = -a.dot(u) / a.normSq(), l = 1 - f, l <= 0 ? (s.done(), n.vector(i)) : f <= 0 ? (s.done(), n.vector(r)) : (o = n.vector(i).mult(f).vadd(u.clone(r).mult(l)), s.done(), o))
        },
        function () {
            var e = {
                drag: 0
            };
            n.integrator = r("integrator", {
                init: function (t) {
                    this.options = n.util.options(e)
                },
                setWorld: function (e) {
                    return this.disconnect && this._world && this.disconnect(this._world), this._world = e, this.connect && e && this.connect(e), this
                },
                integrate: function (e, t) {
                    var n = this._world;
                    return this.integrateVelocities(e, t), n && n.emit("integrate:velocities", {
                        bodies: e,
                        dt: t
                    }), this.integratePositions(e, t), n && n.emit("integrate:positions", {
                        bodies: e,
                        dt: t
                    }), this
                },
                connect: null,
                disconnect: null,
                integrateVelocities: function (e, t) {
                    throw "The integrator.integrateVelocities() method must be overriden"
                },
                integratePositions: function (e, t) {
                    throw "The integrator.integratePositions() method must be overriden"
                }
            })
        }(),
        function () {
            var e = {
                meta: !1,
                metaRefresh: 200,
                width: 600,
                height: 600
            };
            n.renderer = r("renderer", {
                init: function (r) {
                    var i = typeof r.el == "string" ? t.getElementById(r.el) : r.el;
                    this.options = n.util.extend({}, e, r), this.el = i ? i : t.body, this.drawMeta = n.util.throttle(n.util.bind(this.drawMeta, this), this.options.metaRefresh)
                },
                setWorld: function (e) {
                    return this.disconnect && this._world && this.disconnect(this._world), this._world = e, this.connect && e && this.connect(e), this
                },
                render: function (e, t) {
                    var n, r, i;
                    this.beforeRender && this.beforeRender(), this._world.emit("beforeRender", {
                        renderer: this,
                        bodies: e,
                        meta: t
                    }), this.options.meta && this.drawMeta(t);
                    for (var s = 0, o = e.length; s < o; ++s) n = e[s], r = n.view || (n.view = this.createView(n.geometry, n.styles)), n.hidden || this.drawBody(n, r);
                    return this
                },
                createView: function (e, t) {
                    throw "You must override the renderer.createView() method."
                },
                drawMeta: function (e) {
                    throw "You must override the renderer.drawMeta() method."
                },
                drawBody: function (e, t) {
                    throw "You must override the renderer.drawBody() method."
                }
            })
        }(),
        function () {
            var e = function i(e, t, n) {
                    var r, s, o = function () {
                        return i(e, t, n)
                    };
                    while (r = e.shift()) {
                        s = r.apply(t, n);
                        if (s && s.then) return s.then(o)
                    }
                },
                t = {
                    timestep: 6.25,
                    maxIPF: 16,
                    webworker: !1,
                    integrator: "verlet"
                },
                r = function s(e, t) {
                    if (!(this instanceof s)) return new s(e, t);
                    this.init(e, t)
                };
            r.prototype = n.util.extend({}, n.util.pubsub.prototype, {
                init: function (r, i) {
                    var s = this;
                    if (n.util.isFunction(r) || n.util.isArray(r)) i = r, r = {};
                    this._stats = {
                        fps: 0,
                        ipf: 0
                    }, this._bodies = [], this._behaviors = [], this._integrator = null, this._renderer = null, this._paused = !1, this.options = n.util.options(t), this.options.onChange(function (e) {
                        s.timeStep(e.timestep)
                    }), this.options(r), this.add(n.integrator(this.options.integrator)), n.util.isFunction(i) ? e([i], this, [this, n]) : n.util.isArray(i) && e(i, this, [this, n])
                },
                options: null,
                add: function (e) {
                    var t = 0,
                        n = e && e.length || 0,
                        r = n ? e[0] : e;
                    if (!r) return this;
                    do switch (r.type) {
                    case "behavior":
                        this.addBehavior(r);
                        break;
                    case "integrator":
                        this.integrator(r);
                        break;
                    case "renderer":
                        this.renderer(r);
                        break;
                    case "body":
                        this.addBody(r);
                        break;
                    default:
                        throw 'Error: failed to add item of unknown type "' + r.type + '" to world'
                    }
                    while (++t < n && (r = e[t]));
                    return this
                },
                remove: function (e) {
                    var t = 0,
                        n = e && e.length || 0,
                        r = n ? e[0] : e;
                    if (!r) return this;
                    do switch (r.type) {
                    case "behavior":
                        this.removeBehavior(r);
                        break;
                    case "integrator":
                        r === this._integrator && this.integrator(null);
                        break;
                    case "renderer":
                        r === this._renderer && this.renderer(null);
                        break;
                    case "body":
                        this.removeBody(r);
                        break;
                    default:
                        throw 'Error: failed to remove item of unknown type "' + r.type + '" from world'
                    }
                    while (++t < n && (r = e[t]));
                    return this
                },
                has: function (e) {
                    var t, r, i;
                    if (!e) return !1;
                    switch (e.type) {
                    case "behavior":
                        t = this._behaviors;
                        break;
                    case "integrator":
                        return this._integrator === e;
                    case "renderer":
                        return this._renderer === e;
                    case "body":
                        t = this._bodies;
                        break;
                    default:
                        throw 'Error: unknown type "' + e.type + '"'
                    }
                    return n.util.indexOf(t, e) > -1
                },
                integrator: function (e) {
                    return e === undefined ? this._integrator : this._integrator === e ? this : (this._integrator && (this._integrator.setWorld(null), this.emit("remove:integrator", {
                        integrator: this._integrator
                    })), e && (this._integrator = e, this._integrator.setWorld(this), this.emit("add:integrator", {
                        integrator: this._integrator
                    })), this)
                },
                renderer: function (e) {
                    return e === undefined ? this._renderer : this._renderer === e ? this : (this._renderer && (this._renderer.setWorld(null), this.emit("remove:renderer", {
                        renderer: this._renderer
                    })), e && (this._renderer = e, this._renderer.setWorld(this), this.emit("add:renderer", {
                        renderer: this._renderer
                    })), this)
                },
                timeStep: function (e) {
                    return e ? (this._dt = e, this._maxJump = e * this.options.maxIPF, this) : this._dt
                },
                addBehavior: function (e) {
                    var t;
                    return this.has(e) ? this : (e.setWorld(this), this._behaviors.push(e), this.emit("add:behavior", {
                        behavior: e
                    }), this)
                },
                getBehaviors: function () {
                    return [].concat(this._behaviors)
                },
                removeBehavior: function (e) {
                    var t = this._behaviors;
                    if (e)
                        for (var n = 0, r = t.length; n < r; ++n)
                            if (e === t[n]) {
                                t.splice(n, 1), e.setWorld(null), this.emit("remove:behavior", {
                                    behavior: e
                                });
                                break
                            }
                    return this
                },
                addBody: function (e) {
                    var t;
                    return this.has(e) ? this : (e.setWorld(this), this._bodies.push(e), this.emit("add:body", {
                        body: e
                    }), this)
                },
                getBodies: function () {
                    return [].concat(this._bodies)
                },
                removeBody: function (e) {
                    var t = this._bodies;
                    if (e)
                        for (var n = 0, r = t.length; n < r; ++n)
                            if (e === t[n]) {
                                t.splice(n, 1), e.setWorld(null), this.emit("remove:body", {
                                    body: e
                                });
                                break
                            }
                    return this
                },
                findOne: function (e) {
                    var t = this,
                        r = typeof e == "function" ? e : n.query(e);
                    return n.util.find(t._bodies, r) || !1
                },
                find: function (e) {
                    var t = this,
                        r = typeof e == "function" ? e : n.query(e);
                    return n.util.filter(t._bodies, r)
                },
                iterate: function (e) {
                    this._integrator.integrate(this._bodies, e)
                },
                step: function (e) {
                    if (this._paused) return this._time = !1, this;
                    var t = this._time || (this._time = e),
                        n = e - t,
                        r = this._stats,
                        i = this._dt;
                    if (!n) return this;
                    n > this._maxJump && (this._time = e - this._maxJump, n = this._maxJump), r.fps = 1e3 / n, r.ipf = Math.ceil(n / this._dt);
                    while (this._time < e) this._time += i, this.iterate(i);
                    return this.emit("step"), this
                },
                render: function () {
                    if (!this._renderer) throw "No renderer added to world";
                    return this._renderer.render(this._bodies, this._stats), this.emit("render", {
                        bodies: this._bodies,
                        stats: this._stats,
                        renderer: this._renderer
                    }), this
                },
                pause: function () {
                    return this._paused = !0, this.emit("pause"), this
                },
                unpause: function () {
                    return this._paused = !1, this.emit("unpause"), this
                },
                isPaused: function () {
                    return !!this._paused
                },
                destroy: function () {
                    var e = this;
                    e.pause(), this.emit("destroy"), e.off(!0), e.remove(e.getBodies()), e.remove(e.getBehaviors()), e.integrator(null), e.renderer(null)
                }
            }), n.world = r
        }(), n.integrator("verlet", function (e) {
            return n.body.mixin({
                started: function (e) {
                    return e !== undefined && (this._started = !0), !!this._started
                }
            }), {
                init: function (t) {
                    e.init.call(this, t)
                },
                integrateVelocities: function (e, t) {
                    var n = t * t,
                        r = 1 - this.options.drag,
                        i = null,
                        s;
                    for (var o = 0, u = e.length; o < u; ++o) i = e[o], s = i.state, i.treatment !== "static" ? (s.vel.equals(s.old.vel) && i.started() ? s.vel.clone(s.pos).vsub(s.old.pos) : (s.old.pos.clone(s.pos).vsub(s.vel), s.vel.mult(t)), r && s.vel.mult(r), s.vel.vadd(s.acc.mult(n)), s.vel.mult(1 / t), s.old.vel.clone(s.vel), s.acc.zero(), s.angular.vel === s.old.angular.vel && i.started() ? s.angular.vel = s.angular.pos - s.old.angular.pos : (s.old.angular.pos = s.angular.pos - s.angular.vel, s.angular.vel *= t), s.angular.vel += s.angular.acc * n, s.angular.vel /= t, s.old.angular.vel = s.angular.vel, s.angular.acc = 0, i.started(!0)) : (s.vel.zero(), s.acc.zero(), s.angular.vel = 0, s.angular.acc = 0)
                },
                integratePositions: function (e, t) {
                    var n = t * t,
                        r = null,
                        i;
                    for (var s = 0, o = e.length; s < o; ++s) r = e[s], i = r.state, r.treatment !== "static" && (i.vel.mult(t), i.old.pos.clone(i.pos), i.pos.vadd(i.vel), i.vel.mult(1 / t), i.old.vel.clone(i.vel), i.angular.vel *= t, i.old.angular.pos = i.angular.pos, i.angular.pos += i.angular.vel, i.angular.vel /= t, i.old.angular.vel = i.angular.vel)
                }
            }
        }), n.geometry("point", function (e) {}), n.body("point", function () {}), n.geometry("circle", function (e) {
            var t = {
                radius: 1
            };
            return {
                init: function (r) {
                    var i = this;
                    e.init.call(this, r), this.options.defaults(t), this.options.onChange(function (e) {
                        this.radius = e.radius
                    }), this.options(r), this._aabb = n.aabb(), this.radius = this.options.radius
                },
                aabb: function (e) {
                    var t = this.radius;
                    return this._aabb.hw !== t && (this._aabb = n.aabb(-t, -t, t, t)), n.aabb.clone(this._aabb)
                },
                getFarthestHullPoint: function (e, t) {
                    return t = t || n.vector(), t.clone(e).normalize().mult(this.radius)
                },
                getFarthestCorePoint: function (e, t, r) {
                    return t = t || n.vector(), t.clone(e).normalize().mult(this.radius - r)
                }
            }
        }), n.geometry("convex-polygon", function (e) {
            var t = "Error: The vertices specified do not match that of a _convex_ polygon.",
                r = {};
            return {
                init: function (t) {
                    var n = this;
                    e.init.call(this, t), this.options.defaults(r), this.options.onChange(function (e) {
                        n.setVertices(e.vertices || [])
                    }), this.options(t), n.setVertices(this.options.vertices || [])
                },
                setVertices: function (e) {
                    var r = n.scratchpad(),
                        i = r.transform(),
                        s = this.vertices = [];
                    if (!n.geometry.isPolygonConvex(e)) throw t;
                    i.setRotation(0), i.setTranslation(n.geometry.getPolygonCentroid(e).negate());
                    for (var o = 0, u = e.length; o < u; ++o) s.push(n.vector(e[o]).translate(i));
                    return this._area = n.geometry.getPolygonArea(s), this._aabb = !1, r.done(), this
                },
                aabb: function (e) {
                    if (!e && this._aabb) return n.aabb.clone(this._aabb);
                    var t = n.scratchpad(),
                        r = t.vector(),
                        i = t.transform().setRotation(e || 0),
                        s = t.vector().set(1, 0).rotateInv(i),
                        o = t.vector().set(0, 1).rotateInv(i),
                        u = this.getFarthestHullPoint(s, r).proj(s),
                        a = -this.getFarthestHullPoint(s.negate(), r).proj(s),
                        f = this.getFarthestHullPoint(o, r).proj(o),
                        l = -this.getFarthestHullPoint(o.negate(), r).proj(o),
                        c;
                    return c = n.aabb(a, l, u, f), e || (this._aabb = c), t.done(), n.aabb.clone(c)
                },
                getFarthestHullPoint: function (e, t, r) {
                    var i = this.vertices,
                        s, o, u = i.length,
                        a = 2,
                        f;
                    t = t || n.vector();
                    if (u < 2) return r && (r.idx = 0), t.clone(i[0]);
                    o = i[0].dot(e), s = i[1].dot(e);
                    if (u === 2) return f = s >= o ? 1 : 0, r && (r.idx = f), t.clone(i[f]);
                    if (s >= o) {
                        while (a < u && s >= o) o = s, s = i[a].dot(e), a++;
                        return s >= o && a++, f = a - 2, r && (r.idx = a - 2), t.clone(i[f])
                    }
                    a = u;
                    while (a > 1 && o >= s) a--, s = o, o = i[a].dot(e);
                    return f = (a + 1) % u, r && (r.idx = f), t.clone(i[f])
                },
                getFarthestCorePoint: function (e, t, r) {
                    var i, s = n.scratchpad(),
                        o = s.vector(),
                        u = s.vector(),
                        a = this.vertices,
                        f = a.length,
                        l, c = this._area > 0,
                        h = {};
                    return t = this.getFarthestHullPoint(e, t, h), o.clone(a[(h.idx + 1) % f]).vsub(t).normalize().perp(c), u.clone(a[(h.idx - 1 + f) % f]).vsub(t).normalize().perp(!c), l = r / (1 + o.dot(u)), t.vadd(o.vadd(u).mult(l)), s.done(), t
                }
            }
        }), n.body("circle", function (e) {
            var t = {
                radius: 1
            };
            return {
                init: function (r) {
                    e.init.call(this, r), r = n.util.extend({}, t, r), this.geometry = n.geometry("circle", {
                        radius: r.radius
                    }), this.recalc()
                },
                recalc: function () {
                    e.recalc.call(this), this.moi = this.mass * this.geometry.radius * this.geometry.radius / 2
                }
            }
        }), n.body("convex-polygon", function (e) {
            var t = {};
            return {
                init: function (r) {
                    e.init.call(this, r), r = n.util.extend({}, t, r), this.geometry = n.geometry("convex-polygon", {
                        vertices: r.vertices
                    }), this.recalc()
                },
                recalc: function () {
                    e.recalc.call(this), this.moi = n.geometry.getPolygonMOI(this.geometry.vertices)
                }
            }
        }), n.behavior("attractor", function (e) {
            var t = {
                pos: null,
                strength: 1,
                order: 2,
                max: !1,
                min: !1
            };
            return {
                init: function (r) {
                    var i = this;
                    this._pos = new n.vector, e.init.call(this), this.options.defaults(t), this.options.onChange(function (e) {
                        i._maxDist = e.max === !1 ? Infinity : e.max, i._minDist = e.min ? e.min : 10, i.position(e.pos)
                    }), this.options(r)
                },
                position: function (e) {
                    var t = this;
                    return e ? (this._pos.clone(e), t) : this._pos.values()
                },
                behave: function (e) {
                    var t = this.getTargets(),
                        r, i = this.options.order,
                        s = this.options.strength,
                        o = this._minDist,
                        u = this._maxDist,
                        a = n.scratchpad(),
                        f = a.vector(),
                        l, c;
                    for (var h = 0, p = t.length; h < p; h++) r = t[h], f.clone(this._pos), f.vsub(r.state.pos), l = f.norm(), l > o && l < u && (c = s / Math.pow(l, i), r.accelerate(f.normalize().mult(c)));
                    a.done()
                }
            }
        }), n.behavior("body-collision-detection", function (e) { /* all non-edge-of-screen collisions */
            var t = function (t, r) {
                    var i;
                    return i = function (e) {
                        var s = n.scratchpad(),
                            o = s.transform().setTranslation(t.state.pos).setRotation(t.state.angular.pos),
                            u = s.transform().setTranslation(r.state.pos).setRotation(r.state.angular.pos),
                            a = s.vector(),
                            f = s.vector(),
                            l = i.useCore ? "getFarthestCorePoint" : "getFarthestHullPoint",
                            c = i.marginA,
                            h = i.marginB,
                            p;
                        return a = t.geometry[l](e.rotateInv(o), a, c).transform(o), f = r.geometry[l](e.rotate(o).rotateInv(u).negate(), f, h).transform(u), e.negate().rotate(u), p = {
                            a: a.values(),
                            b: f.values(),
                            pt: a.vsub(f).values()
                        }, s.done(), p
                    }, i.useCore = !1, i.margin = 0, i
                },
                r = function (r, i) {
                    var s = n.scratchpad(),
                        o = s.vector(),
                        u = s.vector(),
                        a, f, l, c = !1,
                        h = r.aabb(),
                        p = Math.min(h.hw, h.hh),
                        d = i.aabb(),
                        v = Math.min(d.hw, d.hh);
                    l = t(r, i), o.clone(r.state.pos).vsub(i.state.pos), f = n.gjk(l, o, !0);
                    if (f.overlap) {
                        c = {
                            bodyA: r,
                            bodyB: i
                        }, l.useCore = !0, l.marginA = 0, l.marginB = 0;
                        while (f.overlap && (l.marginA < p || l.marginB < v)) l.marginA < p && (l.marginA += 1), l.marginB < v && (l.marginB += 1), f = n.gjk(l, o);
                        if (f.overlap || f.maxIterationsReached) return s.done(), !1;
                        a = Math.max(0, l.marginA + l.marginB - f.distance), c.overlap = a, c.norm = o.clone(f.closest.b).vsub(u.clone(f.closest.a)).normalize().values(), c.mtv = o.mult(a).values(), c.pos = o.clone(c.norm).mult(l.margin).vadd(u.clone(f.closest.a)).vsub(r.state.pos).values()
                    }
                    return s.done(), c
                },
                i = function (t, r) { /* qqq collision of the air molecules and big balls - true if they collide */
                    var i = n.scratchpad(),
                        s = i.vector(),
                        o = i.vector(),
                        u, collision = !1;
                    s.clone(r.state.pos).vsub(t.state.pos);
                    u = s.norm() - (t.geometry.radius + r.geometry.radius);
                    s.equals(n.vector.zero) && s.set(1, 0);
                    if ( u <= 0 ) {
                        /* qqq
                            for r and t
                                r.type == "body"
                                r.radius = LARGE_SIZE_DOT if one of the big balls, else smaller
                                r.state.vel._[0] has something to do with X velocity
                                r.state.vel._[1] has something to do with Y velocity
                         */

                        /* qqq

                           If this involves the collision of a small ball with a large one, and if the small
                           ball is going down, then it is not a collision
                         */
                        var acceptThisCollision = true;
                        if ( gUpwardOnly ) {
                            if ( ((r.radius === LARGE_SIZE_DOT) || (t.radius === LARGE_SIZE_DOT))
                              && (r.radius != t.radius) ) {
                                // one of these is big and one is small
                                var small = (r.radius === LARGE_SIZE_DOT) ? t : r ;
                                if ( small.state.vel._[1] > 0 ) {
                                    // ignore collision of small particles going down
                                    acceptThisCollision = false;
                                }
                            }
                        }

                        if ( acceptThisCollision ) {
                            collision = {   /* qqq, if this is set, then it's a collision */
                                bodyA: t,
                                bodyB: r,
                                norm: s.normalize().values(),
                                mtv: s.mult(-u).values(),
                                pos: s.normalize().mult(t.geometry.radius).values(),
                                overlap: -u
                            }
                        }
                    }
                    i.done();
                    return collision;
                },
                s = function (t, n) { /* qqq if this returns true there was a collision, else false */
                    return t.treatment !== "static" && t.treatment !== "kinematic" || n.treatment !== "static" && n.treatment !== "kinematic" ? t.geometry.name === "circle" && n.geometry.name === "circle" ? i(t, n) : r(t, n) : !1
                },
                o = {
                    check: "collisions:candidates",
                    channel: "collisions:detected"
                };
            return {
                init: function (t) {
                    e.init.call(this), this.options.defaults(o), this.options(t)
                },
                connect: function (e) {
                    this.options.check === !0 ? e.on("integrate:velocities", this.checkAll, this) : e.on(this.options.check, this.check, this)
                },
                disconnect: function (e) {
                    this.options.check === !0 ? e.off("integrate:velocities", this.checkAll) : e.off(this.options.check, this.check)
                },
                check: function (e) {
                    var t = e.candidates,
                        r, i = this.getTargets(),
                        o = [],
                        u;
                    for (var a = 0, f = t.length; a < f; ++a) {
                        r = t[a];
                        if (i === this._world._bodies || n.util.indexOf(i, r.bodyA) > -1 && n.util.indexOf(i, r.bodyB) > -1) {
                            u = s(r.bodyA, r.bodyB), u && o.push(u)
                        }
                    }
                    o.length && this._world.emit(this.options.channel, {
                        collisions: o  /* qqq whatever is set here is a collision */
                    })
                },
                checkAll: function (e) {
                    var t = this.getTargets(),
                        n = e.dt,
                        r, i, o = [],
                        u;
                    for (var a = 0, f = t.length; a < f; a++) {
                        r = t[a];
                        for (var l = a + 1; l < f; l++) i = t[l], u = s(r, i), u && o.push(u)
                    }
                    o.length && this._world.emit(this.options.channel, {
                        collisions: o
                    })
                }
            }
        }), n.behavior("body-impulse-response", function (e) {
            var t = {
                check: "collisions:detected"
            };
            return {
                init: function (n) {
                    e.init.call(this), this.options.defaults(t), this.options(n)
                },
                applyTo: !1,
                connect: function (e) {
                    e.on(this.options.check, this.respond, this)
                },
                disconnect: function (e) {
                    e.off(this.options.check, this.respond)
                },
                collideBodies: function (e, t, r, i, s, o) {
                    var u = e.treatment === "static" || e.treatment === "kinematic",
                        a = t.treatment === "static" || t.treatment === "kinematic",
                        f = n.scratchpad(),
                        l = f.vector().clone(s);
                    if (u && a) {
                        f.done();
                        return
                    }
                    u ? t.state.pos.vadd(l) : a ? e.state.pos.vsub(l) : (l.mult(.5), e.state.pos.vsub(l), t.state.pos.vadd(l));
                    var c = u ? 0 : 1 / e.moi,
                        h = a ? 0 : 1 / t.moi,
                        p = u ? 0 : 1 / e.mass,
                        d = a ? 0 : 1 / t.mass,
                        v = o ? 0 : e.restitution * t.restitution,
                        m = e.cof * t.cof,
                        g = f.vector().clone(r),
                        y = f.vector().clone(g).perp(),
                        b = f.vector().clone(i),
                        w = f.vector().clone(i).vadd(e.state.pos).vsub(t.state.pos),
                        E = f.vector(),
                        S = e.state.angular.vel,
                        x = t.state.angular.vel,
                        T = f.vector().clone(t.state.vel).vadd(E.clone(w).perp().mult(x)).vsub(e.state.vel).vsub(E.clone(b).perp().mult(S)),
                        N = b.proj(g),
                        C = b.proj(y),
                        k = w.proj(g),
                        L = w.proj(y),
                        A = T.proj(g),
                        O = T.proj(y),
                        M, _, D, P = !1;
                    if (A >= 0) {
                        f.done();
                        return
                    }
                    M = -((1 + v) * A) / (p + d + c * C * C + h * L * L), u ? (t.state.vel.vadd(g.mult(M * d)), t.state.angular.vel -= M * h * L) : a ? (e.state.vel.vsub(g.mult(M * p)), e.state.angular.vel += M * c * C) : (t.state.vel.vadd(g.mult(M * d)), t.state.angular.vel -= M * h * L, e.state.vel.vsub(g.mult(p * t.mass)), e.state.angular.vel += M * c * C), m && O && (D = O / (p + d + c * N * N + h * k * k), P ? M = D : (_ = O < 0 ? -1 : 1, M *= _ * m, M = _ === 1 ? Math.min(M, D) : Math.max(M, D)), u ? (t.state.vel.vsub(y.mult(M * d)), t.state.angular.vel -= M * h * k) : a ? (e.state.vel.vadd(y.mult(M * p)), e.state.angular.vel += M * c * N) : (t.state.vel.vsub(y.mult(M * d)), t.state.angular.vel -= M * h * k, e.state.vel.vadd(y.mult(p * t.mass)), e.state.angular.vel += M * c * N)), f.done()
                },
                respond: function (e) {
                    var t = this,
                        r, i = n.util.shuffle(e.collisions);
                    for (var s = 0, o = i.length; s < o; ++s) r = i[s], t.collideBodies(r.bodyA, r.bodyB, r.norm, r.pos, r.mtv)
                }
            }
        }), n.behavior("constant-acceleration", function (e) {
            var t = {
                acc: {
                    x: 0,
                    y: 4e-4
                }
            };
            return {
                init: function (r) {
                    e.init.call(this), this.options.defaults(t), this.options(r), this._acc = n.vector(), this.setAcceleration(this.options.acc), delete this.options.acc
                },
                setAcceleration: function (e) {
                    return this._acc.clone(e), this
                },
                behave: function (e) {
                    var t = this.getTargets();
                    for (var n = 0, r = t.length; n < r; ++n) t[n].accelerate(this._acc)
                }
            }
        }), n.behavior("edge-collision-detection", function (e) { /* qqq collisions with the top/bottom/left/right edges of the screen */
            var t = function (t, r, i) {
                    var s, o = t.aabb(),
                        u = n.scratchpad(),
                        a = u.transform(),
                        f = u.vector(),
                        l = u.vector(),
                        c = !1,
                        h = [];
                    return s = o.x + o.hw - r.max.x, s >= 0 && (f.set(1, 0).rotateInv(a.setRotation(t.state.angular.pos)), c = {
                        bodyA: t,
                        bodyB: i,
                        overlap: s,
                        norm: {
                            x: 1,
                            y: 0
                        },
                        mtv: {
                            x: s,
                            y: 0
                        },
                        pos: t.geometry.getFarthestHullPoint(f, l).rotate(a).values()
                    }, h.push(c)), s = o.y + o.hh - r.max.y, s >= 0 && (f.set(0, 1).rotateInv(a.setRotation(t.state.angular.pos)), c = {
                        bodyA: t,
                        bodyB: i,
                        overlap: s,
                        norm: {
                            x: 0,
                            y: 1
                        },
                        mtv: {
                            x: 0,
                            y: s
                        },
                        pos: t.geometry.getFarthestHullPoint(f, l).rotate(a).values()
                    }, h.push(c)), s = r.min.x - (o.x - o.hw), s >= 0 && (f.set(-1, 0).rotateInv(a.setRotation(t.state.angular.pos)), c = {
                        bodyA: t,
                        bodyB: i,
                        overlap: s,
                        norm: {
                            x: -1,
                            y: 0
                        },
                        mtv: {
                            x: -s,
                            y: 0
                        },
                        pos: t.geometry.getFarthestHullPoint(f, l).rotate(a).values()
                    }, h.push(c)), s = r.min.y - (o.y - o.hh), s >= 0 && (f.set(0, -1).rotateInv(a.setRotation(t.state.angular.pos)), c = {
                        bodyA: t,
                        bodyB: i,
                        overlap: s,
                        norm: {
                            x: 0,
                            y: -1
                        },
                        mtv: {
                            x: 0,
                            y: -s
                        },
                        pos: t.geometry.getFarthestHullPoint(f, l).rotate(a).values()
                    }, h.push(c)), u.done(), h
                },
                r = function (n, r, i) {
                    return t(n, r, i)
                },
                i = {
                    aabb: null,
                    restitution: .99,
                    cof: 1,
                    channel: "collisions:detected"
                };
            return {
                init: function (t) {
                    e.init.call(this), this.options.defaults(i), this.options(t), this.setAABB(this.options.aabb), this.restitution = this.options.restitution, this.body = n.body("point", {
                        treatment: "static",
                        restitution: this.options.restitution,
                        cof: this.options.cof
                    })
                },
                setAABB: function (e) {
                    if (!e) throw "Error: aabb not set";
                    this._edges = {
                        min: {
                            x: e.x - e.hw,
                            y: e.y - e.hh
                        },
                        max: {
                            x: e.x + e.hw,
                            y: e.y + e.hh
                        }
                    }
                },
                connect: function (e) {
                    e.on("integrate:velocities", this.checkAll, this)
                },
                disconnect: function (e) {
                    e.off("integrate:velocities", this.checkAll)
                },
                checkAll: function (e) {
                    var t = this.getTargets(),
                        n = e.dt,
                        i, s = [],
                        o, u = this._edges,
                        a = this.body;
                    for (var f = 0, l = t.length; f < l; f++) i = t[f], i.treatment === "dynamic" && (o = r(i, u, a), o && s.push.apply(s, o));
                    s.length && this._world.emit(this.options.channel, {
                        collisions: s
                    })
                }
            }
        }), n.behavior("interactive", function (e) {
            if (!t) return {};
            var r = {
                    el: null,
                    moveThrottle: 10,
                    minVel: {
                        x: -5,
                        y: -5
                    },
                    maxVel: {
                        x: 5,
                        y: 5
                    }
                },
                i = function (e) {
                    var t = 0,
                        n = 0;
                    if (e.offsetParent)
                        do t += e.offsetLeft, n += e.offsetTop; while (e = e.offsetParent);
                    return {
                        left: t,
                        top: n
                    }
                },
                s = function (e) {
                    var t = i(e.target),
                        n = e.changedTouches && e.changedTouches[0] || e,
                        r = n.pageX - t.left,
                        s = n.pageY - t.top;
                    return {
                        x: r,
                        y: s
                    }
                };
            return {
                init: function (i) {
                    var o = this,
                        u, a;
                    e.init.call(this), this.options.defaults(r), this.options(i), this.mousePos = new n.vector, this.mousePosOld = new n.vector, this.offset = new n.vector, this.el = typeof this.options.el == "string" ? t.getElementById(this.options.el) : this.options.el;
                    if (!this.el) throw "No DOM element specified";
                    var f = function (t) {
                            var r = s(t),
                                i;
                            o._world && (i = o._world.findOne({
                                $at: new n.vector(r.x, r.y)
                            }), i ? (u = i.treatment, i.treatment = "kinematic", i.state.vel.zero(), i.state.angular.vel = 0, o.body = i, o.mousePos.clone(r), o.offset.clone(r).vsub(i.state.pos), r.body = i, o._world.emit("interact:grab", r)) : o._world.emit("interact:poke", r))
                        },
                        l = n.util.throttle(function (t) {
                            var n, r;
                            o.body && (n = s(t), a = Date.now(), o.mousePosOld.clone(o.mousePos), o.mousePos.set(n.x, n.y))
                        }, o.options.moveThrottle),
                        c = function (t) {
                            var n = s(t),
                                r, i = Math.max(Date.now() - a, o.options.moveThrottle);
                            o.mousePos.set(n.x, n.y), o.body && (o.body.treatment = u, o.body.state.vel.clone(o.mousePos).vsub(o.mousePosOld).mult(1 / i), o.body.state.vel.clamp(o.options.minVel, o.options.maxVel), o.body = !1), o._world && o._world.emit("interact:release", n)
                        };
                    this.el.addEventListener("mousedown", f), this.el.addEventListener("touchstart", f), this.el.addEventListener("mousemove", l), this.el.addEventListener("touchmove", l), this.el.addEventListener("mouseup", c), this.el.addEventListener("touchend", c)
                },
                connect: function (e) {
                    e.on("integrate:positions", this.behave, this)
                },
                disconnect: function (e) {
                    e.off("integrate:positions", this.behave)
                },
                behave: function (e) {
                    var t = this,
                        n;
                    t.body && (n = t.body.state, n.vel.clone(t.mousePos).vsub(t.offset).vsub(n.pos).mult(1 / t.options.moveThrottle))
                }
            }
        }), n.behavior("newtonian", function (e) {
            var t = {
                strength: 1,
                max: !1,
                min: !1
            };
            return {
                init: function (n) {
                    var r = this;
                    e.init.call(this), this.options.defaults(t), this.options.onChange(function (e) {
                        r._maxDistSq = e.max === !1 ? Infinity : e.max * e.max, r._minDistSq = e.min ? e.min * e.min : 100 * e.strength
                    }), this.options(n)
                },
                behave: function (e) {
                    var t = this.getTargets(),
                        r, i, s = this.options.strength,
                        o = this._minDistSq,
                        u = this._maxDistSq,
                        a = n.scratchpad(),
                        f = a.vector(),
                        l, c;
                    for (var h = 0, p = t.length; h < p; h++) {
                        r = t[h];
                        for (var d = h + 1; d < p; d++) {
                            i = t[d];
                            f.clone(i.state.pos);
                            f.vsub(r.state.pos);
                            l = f.normSq();
                            l > o && l < u && (c = s / l, r.accelerate(f.normalize().mult(c * i.mass)), i.accelerate(f.mult(r.mass / i.mass).negate()));
                        }
                    }
                    a.done()
                }
            }
        }), n.behavior("sweep-prune", function (e) {
            function o(e, t) {
                return e |= 0, t |= 0, (e | 0) === (t | 0) ? -1 : ((e | 0) > (t | 0) ? e << 16 | t & 65535 : t << 16 | e & 65535) | 0
            }
            var t = 1,
                r = function () {
                    return t++
                },
                i = {
                    x: 0,
                    y: 1
                },
                s = 2;
            return {
                init: function (t) {
                    e.init.call(this), this.options.defaults({
                        channel: "collisions:candidates"
                    }), this.options(t), this.encounters = [], this.candidates = [], this.clear()
                },
                clear: function () {
                    this.tracked = [], this.pairs = [], this.intervalLists = [];
                    for (var e = 0; e < s; ++e) this.intervalLists[e] = []
                },
                connect: function (e) {
                    e.on("add:body", this.trackBody, this), e.on("remove:body", this.untrackBody, this), e.on("integrate:velocities", this.sweep, this);
                    var t = e.getBodies();
                    for (var n = 0, r = t.length; n < r; ++n) this.trackBody({
                        body: t[n]
                    })
                },
                disconnect: function (e) {
                    e.off("add:body", this.trackBody), e.off("remove:body", this.untrackBody), e.off("integrate:velocities", this.sweep), this.clear()
                },
                broadPhase: function () {
                    return this.updateIntervals(), this.sortIntervalLists(), this.checkOverlaps()
                },
                sortIntervalLists: function () {
                    var e, t, n, r, i, o, u, a, f;
                    for (var l = 0; l < s; ++l) {
                        e = this.intervalLists[l], n = 0, t = e.length, f = l;
                        while (++n < t) {
                            i = e[n], o = i.val.get(f), r = n, u = e[r - 1], a = u && u.val.get(f);
                            while (r > 0 && (a > o || a === o && u.type && !i.type)) e[r] = u, r--, u = e[r - 1], a = u && u.val.get(f);
                            e[r] = i
                        }
                    }
                },
                getPair: function (e, t, n) {
                    var r = o(e.id, t.id);
                    if (r === !1) return null;
                    var i = this.pairs[r];
                    if (!i) {
                        if (!n) return null;
                        i = this.pairs[r] = {
                            bodyA: e.body,
                            bodyB: t.body,
                            flag: 1
                        }
                    }
                    return i
                },
                checkOverlaps: function () {
                    var e, t, n, r, o, u, a, f, l, c, h = 1 << i.z + 1 << i.y + 1 << i.x + 1,
                        p = this.encounters,
                        d = 0,
                        v = this.candidates;
                    p.length = v.length = 0;
                    for (var m = 0; m < s; ++m) {
                        e = m === 0, u = this.intervalLists[m];
                        for (f = 0, a = u.length; f < a; f++) {
                            o = u[f], n = o.tracker;
                            if (o.type) {
                                l = d;
                                for (l = d - 1; l >= 0; l--) r = p[l], r === n ? (l < d - 1 ? p[l] = p.pop() : p.pop(), d--) : (c = this.getPair(n, r, e), c && (c.flag > h && (c.flag = 1), c.flag = c.flag << m + 1, c.flag === h && v.push(c)))
                            } else d = p.push(n)
                        }
                    }
                    return v
                },
                updateIntervals: function () {
                    var e, t, r = n.scratchpad(),
                        i = r.vector(),
                        s, o = r.vector(),
                        u = this.tracked,
                        a = u.length;
                    while (--a >= 0) e = u[a], t = e.interval, i.clone(e.body.state.pos), s = e.body.aabb(), o.set(s.hw, s.hh), t.min.val.clone(i).vsub(o), t.max.val.clone(i).vadd(o);
                    r.done()
                },
                trackBody: function (e) {
                    var t = e.body,
                        i = {
                            id: r(),
                            body: t
                        },
                        o = {
                            min: {
                                type: !1,
                                val: n.vector(),
                                tracker: i
                            },
                            max: {
                                type: !0,
                                val: n.vector(),
                                tracker: i
                            }
                        };
                    i.interval = o, this.tracked.push(i);
                    for (var u = 0; u < s; ++u) this.intervalLists[u].push(o.min, o.max)
                },
                untrackBody: function (e) {
                    var t = e.body,
                        n, r, i = this.tracked,
                        o, u;
                    for (var a = 0, f = i.length; a < f; ++a) {
                        o = i[a];
                        if (o.body === t) {
                            i.splice(a, 1);
                            for (var l = 0; l < s; ++l) {
                                u = 0, n = this.intervalLists[l];
                                for (var c = 0, h = n.length; c < h; ++c) {
                                    r = n[c];
                                    if (r === o.interval.min || r === o.interval.max) {
                                        n.splice(c, 1), c--, f--;
                                        if (u > 0) break;
                                        u++
                                    }
                                }
                            }
                            break
                        }
                    }
                },
                sweep: function (e) {
                    var t = this,
                        n;
                    n = t.broadPhase(), n.length && this._world.emit(this.options.channel, {
                        candidates: n
                    })
                }
            }
        }), n.behavior("verlet-constraints", function (e) {
            var t = 2 * Math.PI,
                r = {
                    iterations: 2
                };
            return {
                init: function (t) {
                    e.init.call(this), this.options.defaults(r), this.options(t), this._distanceConstraints = [], this._angleConstraints = []
                },
                connect: function (e) {
                    var t = e.integrator();
                    if (t && t.name.indexOf("verlet") < 0) throw 'The rigid constraint manager needs a world with a "verlet" compatible integrator.';
                    e.on("integrate:positions", this.resolve, this)
                },
                disconnect: function (e) {
                    e.off("integrate:positions", this.resolve)
                },
                drop: function () {
                    return this._distanceConstraints = [], this._angleConstraints = [], this
                },
                distanceConstraint: function (e, t, r, i) {
                    var s;
                    return !e || !t ? !1 : (s = {
                        id: n.util.uniqueId("dis-constraint"),
                        type: "dis",
                        bodyA: e,
                        bodyB: t,
                        stiffness: r || .5,
                        targetLength: i || t.state.pos.dist(e.state.pos)
                    }, s.targetLengthSq = s.targetLength * s.targetLength, this._distanceConstraints.push(s), s)
                },
                angleConstraint: function (e, t, r, i, s) {
                    var o;
                    return !e || !t ? !1 : (o = {
                        id: n.util.uniqueId("ang-constraint"),
                        type: "ang",
                        bodyA: e,
                        bodyB: t,
                        bodyC: r,
                        stiffness: i || .5,
                        targetAngle: s || t.state.pos.angle2(e.state.pos, r.state.pos)
                    }, this._angleConstraints.push(o), o)
                },
                remove: function (e) {
                    var t, r, i, s, o;
                    i = n.util.isObject(e), r = i ? e.type : e.substr(0, 3), t = r === "ang" ? this._angleConstraints : this._distanceConstraints;
                    if (i) {
                        for (s = 0, o = t.length; s < o; ++s)
                            if (t[s] === e) return t.splice(s, 1), this
                    } else
                        for (s = 0, o = t.length; s < o; ++s)
                            if (t[s].id === e) return t.splice(s, 1), this; return this
                },
                resolveAngleConstraints: function (e) {
                    var r = this._angleConstraints,
                        i = n.scratchpad(),
                        s = i.transform(),
                        o, u, a, f, l;
                    for (var c = 0, h = r.length; c < h; ++c) {
                        o = r[c], u = o.bodyB.state.pos.angle2(o.bodyA.state.pos, o.bodyC.state.pos), a = u - o.targetAngle;
                        if (!a) continue;
                        a <= -Math.PI ? a += t : a >= Math.PI && (a -= t), s.setTranslation(o.bodyB.state.pos), a *= -e * o.stiffness, o.bodyA.treatment === "dynamic" && o.bodyB.treatment === "dynamic" && o.bodyC.treatment === "dynamic" && (l = 1 / (o.bodyA.mass + o.bodyB.mass + o.bodyC.mass)), o.bodyA.treatment === "dynamic" && (o.bodyB.treatment === "dynamic" && o.bodyC.treatment === "dynamic" ? u = a * (o.bodyB.mass + o.bodyC.mass) * l : o.bodyB.treatment !== "dynamic" ? u = a * o.bodyC.mass / (o.bodyC.mass + o.bodyA.mass) : u = a * o.bodyB.mass / (o.bodyB.mass + o.bodyA.mass), s.setRotation(u), o.bodyA.state.pos.translateInv(s), o.bodyA.state.pos.rotate(s), o.bodyA.state.pos.translate(s)), o.bodyC.treatment === "dynamic" && (o.bodyA.treatment === "dynamic" && o.bodyB.treatment === "dynamic" ? u = -a * (o.bodyB.mass + o.bodyA.mass) * l : o.bodyB.treatment !== "dynamic" ? u = -a * o.bodyA.mass / (o.bodyC.mass + o.bodyA.mass) : u = -a * o.bodyB.mass / (o.bodyB.mass + o.bodyC.mass), s.setRotation(u), o.bodyC.state.pos.translateInv(s), o.bodyC.state.pos.rotate(s), o.bodyC.state.pos.translate(s)), o.bodyB.treatment === "dynamic" && (o.bodyA.treatment === "dynamic" && o.bodyC.treatment === "dynamic" ? u = a * (o.bodyA.mass + o.bodyC.mass) * l : o.bodyA.treatment !== "dynamic" ? u = a * o.bodyC.mass / (o.bodyC.mass + o.bodyB.mass) : u = a * o.bodyA.mass / (o.bodyA.mass + o.bodyC.mass), s.setRotation(u).setTranslation(o.bodyA.state.pos), o.bodyB.state.pos.translateInv(s), o.bodyB.state.pos.rotate(s), o.bodyB.state.pos.translate(s), s.setTranslation(o.bodyC.state.pos), o.bodyB.state.pos.translateInv(s), o.bodyB.state.pos.rotateInv(s), o.bodyB.state.pos.translate(s))
                    }
                    i.done()
                },
                resolveDistanceConstraints: function (e) {
                    var t = this._distanceConstraints,
                        r = n.scratchpad(),
                        i = r.vector(),
                        s, o, u, a;
                    for (var f = 0, l = t.length; f < l; ++f) {
                        s = t[f];
                        i.clone(s.bodyB.state.pos).vsub(s.bodyA.state.pos);
                        o = i.normSq() || Math.random() * 1e-4;
                        u = e * s.stiffness * (o - s.targetLengthSq) / o, i.mult(u);
                        a = s.bodyA.treatment !== "dynamic" || s.bodyB.treatment !== "dynamic" ? 1 : s.bodyB.mass / (s.bodyA.mass + s.bodyB.mass);
                        s.bodyA.treatment === "dynamic" && (s.bodyB.treatment === "dynamic" && i.mult(a), s.bodyA.state.pos.vadd(i), s.bodyB.treatment === "dynamic" && i.mult(1 / a));
                        s.bodyB.treatment === "dynamic" && (s.bodyA.treatment === "dynamic" && i.mult(1 - a), s.bodyB.state.pos.vsub(i));
                    }
                    r.done()
                },
                shuffleConstraints: function () {
                    this._distanceConstraints = n.util.shuffle(this._distanceConstraints), this._angleConstraints = n.util.shuffle(this._angleConstraints)
                },
                resolve: function () {
                    var e = this.options.iterations,
                        t = 1 / e;
                    for (var n = 0; n < e; n++) this.resolveDistanceConstraints(t), this.resolveAngleConstraints(t)
                },
                getConstraints: function () {
                    return {
                        distanceConstraints: [].concat(this._distanceConstraints),
                        angleConstraints: [].concat(this._angleConstraints)
                    }
                }
            }
        }), n.integrator("improved-euler", function (e) {
            return {
                init: function (t) {
                    e.init.call(this, t)
                },
                integrateVelocities: function (e, t) {
                    var n = 1 - this.options.drag,
                        r = null,
                        i;
                    for (var s = 0, o = e.length; s < o; ++s) r = e[s], i = r.state, r.treatment !== "static" ? (i.old.vel.clone(i.vel), i.old.acc.clone(i.acc), i.vel.vadd(i.acc.mult(t)), n && i.vel.mult(n), i.acc.zero(), i.old.angular.vel = i.angular.vel, i.angular.vel += i.angular.acc * t, i.angular.acc = 0) : (i.vel.zero(), i.acc.zero(), i.angular.vel = 0, i.angular.acc = 0)
                },
                integratePositions: function (e, t) {
                    var r = .5 * t * t,
                        i = null,
                        s, o = n.scratchpad(),
                        u = o.vector(),
                        a;
                    for (var f = 0, l = e.length; f < l; ++f) i = e[f], s = i.state, i.treatment !== "static" && (s.old.pos.clone(s.pos), u.clone(s.old.vel), s.pos.vadd(u.mult(t)).vadd(s.old.acc.mult(r)), s.old.acc.zero(), s.old.angular.pos = s.angular.pos, s.angular.pos += s.old.angular.vel * t + s.old.angular.acc * r, s.old.angular.acc = 0);
                    o.done()
                }
            }
        }), n.renderer("canvas", function (e) {
            if (!t) return {};
            var r = Math.PI * 2,
                i = function (e, n) {
                    var r = t.createElement(e || "div");
                    return n && (r.innerHTML = n), r
                },
                s = {
                    debug: !1,
                    metaEl: null,
                    styles: {
                        point: "rgba(80, 50, 100, 0.7)",
                        circle: {
                            strokeStyle: "rgba(70, 50, 100, 0.7)",
                            lineWidth: 1,
                            fillStyle: "rgba(44, 105, 44, 0.7)",
                            angleIndicator: "rgba(69, 51, 78, 0.7)"
                        },
                        "convex-polygon": {
                            strokeStyle: "rgba(80, 50, 100, 0.7)",
                            lineWidth: 1,
                            fillStyle: "rgba(114, 105, 124, 0.7)",
                            angleIndicator: "rgba(69, 51, 78, 0.7)"
                        }
                    },
                    offset: {
                        x: 0,
                        y: 0
                    }
                },
                o = function (e, t) {
                    return n.util.isPlainObject(t) ? n.util.extend({}, e, t, o) : t !== undefined ? t : e
                };
            return {
                init: function (r) {
                    var u = this;
                    e.init.call(this, r), this.options = n.util.extend({}, s, this.options, o), this.options.offset = n.vector(this.options.offset), this.hiddenCanvas = t.createElement("canvas"), this.hiddenCanvas.width = this.hiddenCanvas.height = 100;
                    if (!this.hiddenCanvas.getContext) throw "Canvas not supported";
                    this.hiddenCtx = this.hiddenCanvas.getContext("2d");
                    var a = this.el;
                    a.nodeName.toUpperCase() !== "CANVAS" && (a = t.createElement("canvas"), this.el.appendChild(a), typeof this.options.el == "string" && this.el === t.body && (a.id = this.options.el), this.el = a), a.width = this.options.width, a.height = this.options.height, this.ctx = a.getContext("2d"), this.els = {};
                    if (this.options.meta) {
                        var f = this.options.metaEl || i();
                        f.className = "pjs-meta", this.els.fps = i("span"), this.els.ipf = i("span"), f.appendChild(i("span", "fps: ")), f.appendChild(this.els.fps), f.appendChild(i("br")), f.appendChild(i("span", "ipf: ")), f.appendChild(this.els.ipf), a.parentNode.insertBefore(f, a)
                    }
                },
                setStyle: function (e, t) {
                    t = t || this.ctx, n.util.isObject(e) ? (t.lineWidth = e.lineWidth, t.strokeStyle = e.lineWidth ? e.strokeStyle : "rgba(0,0,0,0)", t.fillStyle = e.fillStyle) : (t.fillStyle = t.strokeStyle = e, t.lineWidth = 1)
                },
                drawCircle: function (e, t, n, i, s) {
                    s = s || this.ctx, s.beginPath(), this.setStyle(i, s), s.arc(e, t, n, 0, r, !1), s.closePath(), s.stroke(), s.fill()
                },
                drawPolygon: function (e, t, n) {
                    var r = e[0],
                        i = r.x,
                        s = r.y,
                        o = e.length;
                    n = n || this.ctx, n.beginPath(), this.setStyle(t, n), n.moveTo(i, s);
                    for (var u = 1; u < o; ++u) r = e[u], i = r.x, s = r.y, n.lineTo(i, s);
                    o > 2 && n.closePath(), n.stroke(), n.fill()
                },
                drawRect: function (e, t, n, r, i, s) {
                    var o = n * .5,
                        u = r * .5;
                    s = s || this.ctx, this.setStyle(i, s), s.beginPath(), s.rect(e - o, t - u, n, r), s.closePath(), s.stroke(), s.fill()
                },
                drawLine: function (e, t, n, r) {
                    var i = e.x,
                        s = e.y;
                    r = r || this.ctx, r.beginPath(), this.setStyle(n, r), r.moveTo(i, s), i = t.x, s = t.y, r.lineTo(i, s), r.stroke(), r.fill()
                },
                createView: function (e, t) {
                    var n, r = e.aabb(),
                        i = r.hw + Math.abs(r.x),
                        s = r.hh + Math.abs(r.y),
                        o = i + 1,
                        u = s + 1,
                        a = this.hiddenCtx,
                        f = this.hiddenCanvas,
                        l = e.name;
                    return t = t || this.options.styles[l], t.src ? (n = new Image, n.src = t.src, t.width && (n.width = t.width), t.height && (n.height = t.height), n) : (o += t.lineWidth | 0, u += t.lineWidth | 0, f.width = 2 * i + 2 + (2 * t.lineWidth | 0), f.height = 2 * s + 2 + (2 * t.lineWidth | 0), a.save(), a.translate(o, u), l === "circle" ? this.drawCircle(0, 0, e.radius, t, a) : l === "convex-polygon" && this.drawPolygon(e.vertices, t, a), t.angleIndicator && (a.beginPath(), this.setStyle(t.angleIndicator, a), a.moveTo(0, 0), a.lineTo(i, 0), a.closePath(), a.stroke()), a.restore(), n = new Image(f.width, f.height), n.src = f.toDataURL("image/png"), n)
                },
                drawMeta: function (e) {
                    this.els.fps.innerHTML = e.fps.toFixed(2), this.els.ipf.innerHTML = e.ipf
                },
                beforeRender: function () {
                    this.ctx.clearRect(0, 0, this.el.width, this.el.height)
                },
                drawBody: function (e, t, n, r) {
                    var i = e.state.pos,
                        s;
                    r = r || this.options.offset, n = n || this.ctx, n.save(), n.translate(i.x + r.x, i.y + r.y), n.rotate(e.state.angular.pos), n.drawImage(t, -t.width / 2, -t.height / 2), n.restore(), this.options.debug && (s = e.aabb(), this.drawRect(s.x, s.y, 2 * s.hw, 2 * s.hh, "rgba(0, 0, 255, 0.3)"), e._debugView = e._debugView || this.createView(e.geometry, "rgba(255, 0, 0, 0.5)"), n.save(), n.translate(i.x + r.x, i.y + r.y), n.rotate(e.state.angular.pos), n.drawImage(e._debugView, -e._debugView.width * .5, -e._debugView.height * .5), n.restore())
                }
            }
        }), n.renderer("dom", function (e) {
            if (!t) return {};
            var n = {},
                r = t.createElement("div"),
                i = function (t) {
                    return t.replace(/(?:^|\s)\w/g, function (e) {
                        return e.toUpperCase()
                    })
                },
                s = function (t) {
                    if (n[t]) return n[t];
                    var s = ["Webkit", "Moz", "Ms", "O"],
                        o;
                    for (var u = 0, a = s.length; u < a; ++u) {
                        o = s[u] + i(t);
                        if (o in r.style) return n[t] = o
                    }
                    return o in r.style ? n[t] = t : !1
                },
                o = "pjs-",
                u = "px",
                a = s("transform"),
                f = function (e, n) {
                    var r = t.createElement(e || "div");
                    return n && (r.innerHTML = n), r
                },
                l;
            return a ? l = function (e, t) {
                var n = e.state.pos;
                t.style[a] = "translate(" + n.x + "px," + n.y + "px) rotate(" + e.state.angular.pos + "rad)"
            } : l = function (e, t) {
                var n = e.state.pos;
                t.style.left = n.x + u, t.style.top = n.y + u
            }, {
                init: function (t) {
                    e.init.call(this, t);
                    var n = this.el;
                    n.style.position = "relative", n.style.overflow = "hidden", n.style[a] = "translateZ(0)", n.style.width = this.options.width + u, n.style.height = this.options.height + u, this.els = {};
                    if (t.meta) {
                        var r = f();
                        r.className = "pjs-meta", this.els.fps = f("span"), this.els.ipf = f("span"), r.appendChild(f("span", "fps: ")), r.appendChild(this.els.fps), r.appendChild(f("br")), r.appendChild(f("span", "ipf: ")), r.appendChild(this.els.ipf), n.appendChild(r)
                    }
                },
                circleProperties: function (e, t) {
                    var n = t.aabb();
                    e.style.width = n.hw * 2 + u, e.style.height = n.hh * 2 + u, e.style.marginLeft = -n.hw + u, e.style.marginTop = -n.hh + u
                },
                createView: function (e) {
                    var t = f(),
                        n = e.name + "Properties";
                    return t.className = o + e.name, t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", this[n] && this[n](t, e), this.el.appendChild(t), t
                },
                connect: function (e) {
                    e.on("add:body", this.attach, this), e.on("remove:body", this.detach, this)
                },
                disconnect: function (e) {
                    e.off("add:body", this.attach), e.off("remove:body", this.detach)
                },
                detach: function (e) {
                    var t = e.nodeType && e || e.body && e.body.view,
                        n = t && t.parentNode;
                    return t && n && n.removeChild(t), this
                },
                attach: function (e) {
                    var t = e.nodeType && e || e.body && e.body.view;
                    return t && this.el.appendChild(t), this
                },
                drawMeta: function (e) {
                    this.els.fps.innerHTML = e.fps.toFixed(2), this.els.ipf.innerHTML = e.ipf
                },
                drawBody: l
            }
        }), n.renderer("pixi", function (e) {
            if (!t) return {};
            var r = Math.PI * 2,
                i = {
                    debug: !1,
                    metaEl: null,
                    offset: {
                        x: 0,
                        y: 0
                    },
                    styles: {
                        color: 6750105,
                        point: "0xE8900C",
                        circle: {
                            strokeStyle: "0xE8900C",
                            lineWidth: 3,
                            fillStyle: "0xD5DE4C",
                            angleIndicator: "0xE8900C"
                        },
                        "convex-polygon": {
                            strokeStyle: "0xE8900C",
                            lineWidth: 3,
                            fillStyle: "0xD5DE4C",
                            angleIndicator: "0xE8900C"
                        }
                    }
                },
                s = function (e, t) {
                    return n.util.isPlainObject(t) ? n.util.extend({}, e, t, s) : t !== undefined ? t : e
                };
            return {
                init: function (r) {
                    if (typeof PIXI == "undefined") throw "PIXI obj not present - cannot continue ";
                    e.init.call(this, r), this.options = n.util.extend({}, i, this.options, s), this.options.offset = n.vector(this.options.offset), this.stage = new PIXI.Stage(this.options.styles.color), this.renderer = new PIXI.autoDetectRenderer(this.options.width, this.options.height), this.meta = {}, this.el.nodeName === "CANVAS" ? this.renderer = new PIXI.autoDetectRenderer(this.options.width, this.options.height, this.el) : (this.renderer = new PIXI.autoDetectRenderer(this.options.width, this.options.height), this.el !== null ? this.el.appendChild(this.renderer.view) : t.body.appendChild(this.renderer.view))
                },
                loadSpritesheets: function (e, t) {
                    if (!e instanceof Array) throw "Spritesheets must be defined in arrays";
                    var n = new PIXI.AssetLoader(e);
                    n.load();
                    var r = this;
                    n.on("onComplete", function (e) {
                        r.assetsLoaded = !0, t()
                    })
                },
                drawBody: function (e, t) {
                    if (t) {
                        var n = e.state.pos.x,
                            r = e.state.pos.y,
                            i = e.state.angular.pos;
                        t.position.x = n, t.position.y = r, t.rotation = i
                    }
                },
                render: function (t, n) {
                    e.render.call(this, t, n), this.renderer.render(this.stage)
                },
                createCircle: function (e, t, n, r) {
                    var i = new PIXI.Graphics;
                    return i.beginFill(r.fillStyle), i.lineStyle(r.lineWidth, r.strokeStyle), i.drawCircle(e, t, n), i.pivot.x = e / 2 + n / 2, i.pivot.y = t / 2 + n / 2, i
                },
                createPolygon: function (e, t) {
                    var n = e[0],
                        r = n.x,
                        i = n.y,
                        s = e.length,
                        o = {
                            x: r,
                            y: i
                        },
                        u = new PIXI.Graphics;
                    u.beginFill(t.fillStyle), u.lineStyle(t.lineWidth, t.strokeStyle), u.moveTo(r, i);
                    for (var a = 1; a < s; ++a) n = e[a], r = n.x, i = n.y, u.lineTo(r, i);
                    return s > 2 && u.lineTo(o.x, o.y), u.endFill(), u
                },
                createLine: function (e, t, n) {
                    var r = e.x,
                        i = e.y,
                        s = new PIXI.Graphics;
                    return s.beginFill(n.fillStyle), s.lineStyle(n.lineWidth, n.strokeStyle), s.moveTo(r, i), r = t.x, i = t.y, s.lineTo(r, i), s.endFill(), s
                },
                createView: function (e) {
                    var t = null,
                        n = e.aabb(),
                        r = n.hw + Math.abs(n.x),
                        i = n.hh + Math.abs(n.y),
                        s = r + 1,
                        o = i + 1,
                        u = e.name,
                        a = a || this.options.styles[u];
                    s += a.lineWidth | 0, o += a.lineWidth | 0, u === "circle" ? t = this.createCircle(s, o, e.radius, a) : u === "convex-polygon" && (t = this.createPolygon(e.vertices, a)), a.angleIndicator && (t.beginFill(a.angleIndicator), t.moveTo(s / 2, 5 + a.lineWidth), t.lineTo(s / 2 + e.radius / 2, e.radius), t.endFill());
                    if (t) return this.stage.addChild(t), t;
                    throw "Invalid view name passed."
                },
                drawMeta: function (e) {
                    if (!this.meta.loaded) {
                        var t = {
                            font: "18px Snippet",
                            fill: "white",
                            align: "left"
                        };
                        this.meta.fps = new PIXI.Text("FPS: " + e.fps.toFixed(2), t), this.meta.fps.position.x = 15, this.meta.fps.position.y = 5, this.meta.ipf = new PIXI.Text("IPF: " + e.ipf, t), this.meta.ipf.position.x = 15, this.meta.ipf.position.y = 30, this.stage.addChild(this.meta.fps), this.stage.addChild(this.meta.ipf), this.meta.loaded = !0
                    } else this.meta.fps.setText("FPS: " + e.fps.toFixed(2)), this.meta.ipf.setText("IPF: " + e.ipf)
                },
                beforeRender: function () {},
                createDisplay: function (e, t) {
                    var n = null,
                        r = null;
                    switch (e) {
                    case "sprite":
                        return r = PIXI.Texture.fromImage(t.texture), n = new PIXI.Sprite(r), t.anchor && (n.anchor.x = t.anchor.x, n.anchor.y = t.anchor.y), t.container ? t.container.addChild(n) : this.stage.addChild(n), n;
                    case "movieclip":
                        if (!this.assetsLoaded) throw "No assets have been loaded. Use loadSpritesheet() first";
                        var i = [],
                            s = 0;
                        for (s; s < t.frames.length; s++) r = PIXI.Texture.fromFrame(t.frames[s]), i.push(r);
                        return n = new PIXI.MovieClip(i), t.anchor && (n.anchor.x = t.anchor.x, n.anchor.y = t.anchor.y), t.container ? t.container.addChild(n) : this.stage.addChild(n), n;
                    default:
                        throw "Invalid PIXI.DisplayObject passed"
                    }
                },
                centerAnchor: function (e) {
                    e !== null && (e.anchor.x = .5, e.anchor.y = .5)
                }
            }
        }), n
}),
function (e, t) {
    typeof define == "function" && define.amd ? define("dat", t) : e.dat = t()
}(this, function () {
    var e = e || {};
    return e.gui = e.gui || {}, e.utils = e.utils || {}, e.controllers = e.controllers || {}, e.dom = e.dom || {}, e.color = e.color || {}, e.utils.css = function () {
        return {
            load: function (e, t) {
                t = t || document;
                var n = t.createElement("link");
                n.type = "text/css", n.rel = "stylesheet", n.href = e, t.getElementsByTagName("head")[0].appendChild(n)
            },
            inject: function (e, t) {
                t = t || document;
                var n = document.createElement("style");
                n.type = "text/css", n.innerHTML = e, t.getElementsByTagName("head")[0].appendChild(n)
            }
        }
    }(), e.utils.common = function () {
        var e = Array.prototype.forEach,
            t = Array.prototype.slice;
        return {
            BREAK: {},
            extend: function (e) {
                return this.each(t.call(arguments, 1), function (t) {
                    for (var n in t) this.isUndefined(t[n]) || (e[n] = t[n])
                }, this), e
            },
            defaults: function (e) {
                return this.each(t.call(arguments, 1), function (t) {
                    for (var n in t) this.isUndefined(e[n]) && (e[n] = t[n])
                }, this), e
            },
            compose: function () {
                var e = t.call(arguments);
                return function () {
                    var n = t.call(arguments);
                    for (var r = e.length - 1; r >= 0; r--) n = [e[r].apply(this, n)];
                    return n[0]
                }
            },
            each: function (t, n, r) {
                if (!t) return;
                if (e && t.forEach && t.forEach === e) t.forEach(n, r);
                else if (t.length === t.length + 0) {
                    for (var i = 0, s = t.length; i < s; i++)
                        if (i in t && n.call(r, t[i], i) === this.BREAK) return
                } else
                    for (var i in t)
                        if (n.call(r, t[i], i) === this.BREAK) return
            },
            defer: function (e) {
                setTimeout(e, 0)
            },
            toArray: function (e) {
                return e.toArray ? e.toArray() : t.call(e)
            },
            isUndefined: function (e) {
                return e === undefined
            },
            isNull: function (e) {
                return e === null
            },
            isNaN: function (e) {
                return e !== e
            },
            isArray: Array.isArray || function (e) {
                return e.constructor === Array
            },
            isObject: function (e) {
                return e === Object(e)
            },
            isNumber: function (e) {
                return e === e + 0
            },
            isString: function (e) {
                return e === e + ""
            },
            isBoolean: function (e) {
                return e === !1 || e === !0
            },
            isFunction: function (e) {
                return Object.prototype.toString.call(e) === "[object Function]"
            }
        }
    }(), e.controllers.Controller = function (e) {
        var t = function (e, t) {
            this.initialValue = e[t], this.domElement = document.createElement("div"), this.object = e, this.property = t, this.__onChange = undefined, this.__onFinishChange = undefined
        };
        return e.extend(t.prototype, {
            onChange: function (e) {
                return this.__onChange = e, this
            },
            onFinishChange: function (e) {
                return this.__onFinishChange = e, this
            },
            setValue: function (e) {
                return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this
            },
            getValue: function () {
                return this.object[this.property]
            },
            updateDisplay: function () {
                return this
            },
            isModified: function () {
                return this.initialValue !== this.getValue()
            }
        }), t
    }(e.utils.common), e.dom.dom = function (e) {
        function i(t) {
            if (t === "0" || e.isUndefined(t)) return 0;
            var n = t.match(r);
            return e.isNull(n) ? 0 : parseFloat(n[1])
        }
        var t = {
                HTMLEvents: ["change"],
                MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
                KeyboardEvents: ["keydown"]
            },
            n = {};
        e.each(t, function (t, r) {
            e.each(t, function (e) {
                n[e] = r
            })
        });
        var r = /(\d+(\.\d+)?)px/,
            s = {
                makeSelectable: function (e, t) {
                    if (e === undefined || e.style === undefined) return;
                    e.onselectstart = t ? function () {
                        return !1
                    } : function () {}, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off"
                },
                makeFullscreen: function (t, n, r) {
                    e.isUndefined(n) && (n = !0), e.isUndefined(r) && (r = !0), t.style.position = "absolute", n && (t.style.left = 0, t.style.right = 0), r && (t.style.top = 0, t.style.bottom = 0)
                },
                fakeEvent: function (t, r, i, s) {
                    i = i || {};
                    var o = n[r];
                    if (!o) throw new Error("Event type " + r + " not supported.");
                    var u = document.createEvent(o);
                    switch (o) {
                    case "MouseEvents":
                        var a = i.x || i.clientX || 0,
                            f = i.y || i.clientY || 0;
                        u.initMouseEvent(r, i.bubbles || !1, i.cancelable || !0, window, i.clickCount || 1, 0, 0, a, f, !1, !1, !1, !1, 0, null);
                        break;
                    case "KeyboardEvents":
                        var l = u.initKeyboardEvent || u.initKeyEvent;
                        e.defaults(i, {
                            cancelable: !0,
                            ctrlKey: !1,
                            altKey: !1,
                            shiftKey: !1,
                            metaKey: !1,
                            keyCode: undefined,
                            charCode: undefined
                        }), l(r, i.bubbles || !1, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode);
                        break;
                    default:
                        u.initEvent(r, i.bubbles || !1, i.cancelable || !0)
                    }
                    e.defaults(u, s), t.dispatchEvent(u)
                },
                bind: function (e, t, n, r) {
                    return r = r || !1, e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent && e.attachEvent("on" + t, n), s
                },
                unbind: function (e, t, n, r) {
                    return r = r || !1, e.removeEventListener ? e.removeEventListener(t, n, r) : e.detachEvent && e.detachEvent("on" + t, n), s
                },
                addClass: function (e, t) {
                    if (e.className === undefined) e.className = t;
                    else if (e.className !== t) {
                        var n = e.className.split(/ +/);
                        n.indexOf(t) == -1 && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                    }
                    return s
                },
                removeClass: function (e, t) {
                    if (t) {
                        if (e.className !== undefined)
                            if (e.className === t) e.removeAttribute("class");
                            else {
                                var n = e.className.split(/ +/),
                                    r = n.indexOf(t);
                                r != -1 && (n.splice(r, 1), e.className = n.join(" "))
                            }
                    } else e.className = undefined;
                    return s
                },
                hasClass: function (e, t) {
                    return (new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)")).test(e.className) || !1
                },
                getWidth: function (e) {
                    var t = getComputedStyle(e);
                    return i(t["border-left-width"]) + i(t["border-right-width"]) + i(t["padding-left"]) + i(t["padding-right"]) + i(t.width)
                },
                getHeight: function (e) {
                    var t = getComputedStyle(e);
                    return i(t["border-top-width"]) + i(t["border-bottom-width"]) + i(t["padding-top"]) + i(t["padding-bottom"]) + i(t.height)
                },
                getOffset: function (e) {
                    var t = {
                        left: 0,
                        top: 0
                    };
                    if (e.offsetParent)
                        do t.left += e.offsetLeft, t.top += e.offsetTop; while (e = e.offsetParent);
                    return t
                },
                isActive: function (e) {
                    return e === document.activeElement && (e.type || e.href)
                }
            };
        return s
    }(e.utils.common), e.controllers.OptionController = function (e, t, n) {
        var r = function (e, i, s) {
            r.superclass.call(this, e, i);
            var o = this;
            this.__select = document.createElement("select");
            if (n.isArray(s)) {
                var u = {};
                n.each(s, function (e) {
                    u[e] = e
                }), s = u
            }
            n.each(s, function (e, t) {
                var n = document.createElement("option");
                n.innerHTML = t, n.setAttribute("value", e), o.__select.appendChild(n)
            }), this.updateDisplay(), t.bind(this.__select, "change", function () {
                var e = this.options[this.selectedIndex].value;
                o.setValue(e)
            }), this.domElement.appendChild(this.__select)
        };
        return r.superclass = e, n.extend(r.prototype, e.prototype, {
            setValue: function (e) {
                var t = r.superclass.prototype.setValue.call(this, e);
                return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), t
            },
            updateDisplay: function () {
                return this.__select.value = this.getValue(), r.superclass.prototype.updateDisplay.call(this)
            }
        }), r
    }(e.controllers.Controller, e.dom.dom, e.utils.common), e.controllers.NumberController = function (e, t) {
        function r(e) {
            return e = e.toString(), e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0
        }
        var n = function (e, i, s) {
            n.superclass.call(this, e, i), s = s || {}, this.__min = s.min, this.__max = s.max, this.__step = s.step, t.isUndefined(this.__step) ? this.initialValue == 0 ? this.__impliedStep = 1 : this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__impliedStep = this.__step, this.__precision = r(this.__impliedStep)
        };
        return n.superclass = e, t.extend(n.prototype, e.prototype, {
            setValue: function (e) {
                return this.__min !== undefined && e < this.__min ? e = this.__min : this.__max !== undefined && e > this.__max && (e = this.__max), this.__step !== undefined && e % this.__step != 0 && (e = Math.round(e / this.__step) * this.__step), n.superclass.prototype.setValue.call(this, e)
            },
            min: function (e) {
                return this.__min = e, this
            },
            max: function (e) {
                return this.__max = e, this
            },
            step: function (e) {
                return this.__step = e, this.__impliedStep = e, this.__precision = r(e), this
            }
        }), n
    }(e.controllers.Controller, e.utils.common), e.controllers.NumberControllerBox = function (e, t, n) {
        function i(e, t) {
            var n = Math.pow(10, t);
            return Math.round(e * n) / n
        }
        var r = function (e, i, s) {
            function a() {
                var e = parseFloat(o.__input.value);
                n.isNaN(e) || o.setValue(e)
            }

            function f() {
                a(), o.__onFinishChange && o.__onFinishChange.call(o, o.getValue())
            }

            function l(e) {
                t.bind(window, "mousemove", c), t.bind(window, "mouseup", h), u = e.clientY
            }

            function c(e) {
                var t = u - e.clientY;
                o.setValue(o.getValue() + t * o.__impliedStep), u = e.clientY
            }

            function h() {
                t.unbind(window, "mousemove", c), t.unbind(window, "mouseup", h)
            }
            this.__truncationSuspended = !1, r.superclass.call(this, e, i, s);
            var o = this,
                u;
            this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), t.bind(this.__input, "change", a), t.bind(this.__input, "blur", f), t.bind(this.__input, "mousedown", l), t.bind(this.__input, "keydown", function (e) {
                e.keyCode === 13 && (o.__truncationSuspended = !0, this.blur(), o.__truncationSuspended = !1)
            }), this.updateDisplay(), this.domElement.appendChild(this.__input)
        };
        return r.superclass = e, n.extend(r.prototype, e.prototype, {
            updateDisplay: function () {
                return this.__input.value = this.__truncationSuspended ? this.getValue() : i(this.getValue(), this.__precision), r.superclass.prototype.updateDisplay.call(this)
            }
        }), r
    }(e.controllers.NumberController, e.dom.dom, e.utils.common), e.controllers.NumberControllerSlider = function (e, t, n, r, i) {
        function o(e, t, n, r, i) {
            return r + (i - r) * ((e - t) / (n - t))
        }
        var s = function (e, n, r, i, u) {
            function f(e) {
                t.bind(window, "mousemove", l), t.bind(window, "mouseup", c), l(e)
            }

            function l(e) {
                e.preventDefault();
                var n = t.getOffset(a.__background),
                    r = t.getWidth(a.__background);
                return a.setValue(o(e.clientX, n.left, n.left + r, a.__min, a.__max)), !1
            }

            function c() {
                t.unbind(window, "mousemove", l), t.unbind(window, "mouseup", c), a.__onFinishChange && a.__onFinishChange.call(a, a.getValue())
            }
            s.superclass.call(this, e, n, {
                min: r,
                max: i,
                step: u
            });
            var a = this;
            this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), t.bind(this.__background, "mousedown", f), t.addClass(this.__background, "slider"), t.addClass(this.__foreground, "slider-fg"), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background)
        };
        return s.superclass = e, s.useDefaultStyles = function () {
            n.inject(i)
        }, r.extend(s.prototype, e.prototype, {
            updateDisplay: function () {
                var e = (this.getValue() - this.__min) / (this.__max - this.__min);
                return this.__foreground.style.width = e * 100 + "%", s.superclass.prototype.updateDisplay.call(this)
            }
        }), s
    }(e.controllers.NumberController, e.dom.dom, e.utils.css, e.utils.common, "/**\n * dat-gui JavaScript Controller Library\n * http://code.google.com/p/dat-gui\n *\n * Copyright 2011 Data Arts Team, Google Creative Lab\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n */\n\n.slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}"), e.controllers.FunctionController = function (e, t, n) {
        var r = function (e, n, i) {
            r.superclass.call(this, e, n);
            var s = this;
            this.__button = document.createElement("div"), this.__button.innerHTML = i === undefined ? "Fire" : i, t.bind(this.__button, "click", function (e) {
                return e.preventDefault(), s.fire(), !1
            }), t.addClass(this.__button, "button"), this.domElement.appendChild(this.__button)
        };
        return r.superclass = e, n.extend(r.prototype, e.prototype, {
            fire: function () {
                this.__onChange && this.__onChange.call(this), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.getValue().call(this.object)
            }
        }), r
    }(e.controllers.Controller, e.dom.dom, e.utils.common), e.controllers.BooleanController = function (e, t, n) {
        var r = function (e, n) {
            function s() {
                i.setValue(!i.__prev)
            }
            r.superclass.call(this, e, n);
            var i = this;
            this.__prev = this.getValue(), this.__checkbox = document.createElement("input"), this.__checkbox.setAttribute("type", "checkbox"), t.bind(this.__checkbox, "change", s, !1), this.domElement.appendChild(this.__checkbox), this.updateDisplay()
        };
        return r.superclass = e, n.extend(r.prototype, e.prototype, {
            setValue: function (e) {
                var t = r.superclass.prototype.setValue.call(this, e);
                return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), t
            },
            updateDisplay: function () {
                return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1, r.superclass.prototype.updateDisplay.call(this)
            }
        }), r
    }(e.controllers.Controller, e.dom.dom, e.utils.common), e.color.toString = function (e) {
        return function (t) {
            if (t.a == 1 || e.isUndefined(t.a)) {
                var n = t.hex.toString(16);
                while (n.length < 6) n = "0" + n;
                return "#" + n
            }
            return "rgba(" + Math.round(t.r) + "," + Math.round(t.g) + "," + Math.round(t.b) + "," + t.a + ")"
        }
    }(e.utils.common), e.color.interpret = function (e, t) {
        var n, r, i = function () {
                r = !1;
                var e = arguments.length > 1 ? t.toArray(arguments) : arguments[0];
                return t.each(s, function (i) {
                    if (i.litmus(e)) return t.each(i.conversions, function (i, s) {
                        n = i.read(e);
                        if (r === !1 && n !== !1) return r = n, n.conversionName = s, n.conversion = i, t.BREAK
                    }), t.BREAK
                }), r
            },
            s = [{
                litmus: t.isString,
                conversions: {
                    THREE_CHAR_HEX: {
                        read: function (e) {
                            var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                            return t === null ? !1 : {
                                space: "HEX",
                                hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString())
                            }
                        },
                        write: e
                    },
                    SIX_CHAR_HEX: {
                        read: function (e) {
                            var t = e.match(/^#([A-F0-9]{6})$/i);
                            return t === null ? !1 : {
                                space: "HEX",
                                hex: parseInt("0x" + t[1].toString())
                            }
                        },
                        write: e
                    },
                    CSS_RGB: {
                        read: function (e) {
                            var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                            return t === null ? !1 : {
                                space: "RGB",
                                r: parseFloat(t[1]),
                                g: parseFloat(t[2]),
                                b: parseFloat(t[3])
                            }
                        },
                        write: e
                    },
                    CSS_RGBA: {
                        read: function (e) {
                            var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
                            return t === null ? !1 : {
                                space: "RGB",
                                r: parseFloat(t[1]),
                                g: parseFloat(t[2]),
                                b: parseFloat(t[3]),
                                a: parseFloat(t[4])
                            }
                        },
                        write: e
                    }
                }
            }, {
                litmus: t.isNumber,
                conversions: {
                    HEX: {
                        read: function (e) {
                            return {
                                space: "HEX",
                                hex: e,
                                conversionName: "HEX"
                            }
                        },
                        write: function (e) {
                            return e.hex
                        }
                    }
                }
            }, {
                litmus: t.isArray,
                conversions: {
                    RGB_ARRAY: {
                        read: function (e) {
                            return e.length != 3 ? !1 : {
                                space: "RGB",
                                r: e[0],
                                g: e[1],
                                b: e[2]
                            }
                        },
                        write: function (e) {
                            return [e.r, e.g, e.b]
                        }
                    },
                    RGBA_ARRAY: {
                        read: function (e) {
                            return e.length != 4 ? !1 : {
                                space: "RGB",
                                r: e[0],
                                g: e[1],
                                b: e[2],
                                a: e[3]
                            }
                        },
                        write: function (e) {
                            return [e.r, e.g, e.b, e.a]
                        }
                    }
                }
            }, {
                litmus: t.isObject,
                conversions: {
                    RGBA_OBJ: {
                        read: function (e) {
                            return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) && t.isNumber(e.a) ? {
                                space: "RGB",
                                r: e.r,
                                g: e.g,
                                b: e.b,
                                a: e.a
                            } : !1
                        },
                        write: function (e) {
                            return {
                                r: e.r,
                                g: e.g,
                                b: e.b,
                                a: e.a
                            }
                        }
                    },
                    RGB_OBJ: {
                        read: function (e) {
                            return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) ? {
                                space: "RGB",
                                r: e.r,
                                g: e.g,
                                b: e.b
                            } : !1
                        },
                        write: function (e) {
                            return {
                                r: e.r,
                                g: e.g,
                                b: e.b
                            }
                        }
                    },
                    HSVA_OBJ: {
                        read: function (e) {
                            return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) && t.isNumber(e.a) ? {
                                space: "HSV",
                                h: e.h,
                                s: e.s,
                                v: e.v,
                                a: e.a
                            } : !1
                        },
                        write: function (e) {
                            return {
                                h: e.h,
                                s: e.s,
                                v: e.v,
                                a: e.a
                            }
                        }
                    },
                    HSV_OBJ: {
                        read: function (e) {
                            return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) ? {
                                space: "HSV",
                                h: e.h,
                                s: e.s,
                                v: e.v
                            } : !1
                        },
                        write: function (e) {
                            return {
                                h: e.h,
                                s: e.s,
                                v: e.v
                            }
                        }
                    }
                }
            }];
        return i
    }(e.color.toString, e.utils.common), e.GUI = e.gui.GUI = function (e, t, n, r, i, s, o, u, a, f, l, c, h, p, d) {
        function C(e, t, n, s) {
            if (t[n] === undefined) throw new Error("Object " + t + ' has no property "' + n + '"');
            var o;
            if (s.color) o = new l(t, n);
            else {
                var u = [t, n].concat(s.factoryArgs);
                o = r.apply(e, u)
            }
            s.before instanceof i && (s.before = s.before.__li), A(e, o), p.addClass(o.domElement, "c");
            var a = document.createElement("span");
            p.addClass(a, "property-name"), a.innerHTML = o.property;
            var f = document.createElement("div");
            f.appendChild(a), f.appendChild(o.domElement);
            var c = k(e, f, s.before);
            return p.addClass(c, N.CLASS_CONTROLLER_ROW), p.addClass(c, typeof o.getValue()), L(e, c, o), e.__controllers.push(o), o
        }

        function k(e, t, n) {
            var r = document.createElement("li");
            return t && r.appendChild(t), n ? e.__ul.insertBefore(r, params.before) : e.__ul.appendChild(r), e.onResize(), r
        }

        function L(e, t, n) {
            n.__li = t, n.__gui = e, d.extend(n, {
                options: function (t) {
                    if (arguments.length > 1) return n.remove(), C(e, n.object, n.property, {
                        before: n.__li.nextElementSibling,
                        factoryArgs: [d.toArray(arguments)]
                    });
                    if (d.isArray(t) || d.isObject(t)) return n.remove(), C(e, n.object, n.property, {
                        before: n.__li.nextElementSibling,
                        factoryArgs: [t]
                    })
                },
                name: function (e) {
                    return n.__li.firstElementChild.firstElementChild.innerHTML = e, n
                },
                listen: function () {
                    return n.__gui.listen(n), n
                },
                remove: function () {
                    return n.__gui.remove(n), n
                }
            });
            if (n instanceof a) {
                var r = new u(n.object, n.property, {
                    min: n.__min,
                    max: n.__max,
                    step: n.__step
                });
                d.each(["updateDisplay", "onChange", "onFinishChange"], function (e) {
                    var t = n[e],
                        i = r[e];
                    n[e] = r[e] = function () {
                        var e = Array.prototype.slice.call(arguments);
                        return t.apply(n, e), i.apply(r, e)
                    }
                }), p.addClass(t, "has-slider"), n.domElement.insertBefore(r.domElement, n.domElement.firstElementChild)
            } else if (n instanceof u) {
                var i = function (t) {
                    return d.isNumber(n.__min) && d.isNumber(n.__max) ? (n.remove(), C(e, n.object, n.property, {
                        before: n.__li.nextElementSibling,
                        factoryArgs: [n.__min, n.__max, n.__step]
                    })) : t
                };
                n.min = d.compose(i, n.min), n.max = d.compose(i, n.max)
            } else n instanceof s ? (p.bind(t, "click", function () {
                p.fakeEvent(n.__checkbox, "click")
            }), p.bind(n.__checkbox, "click", function (e) {
                e.stopPropagation()
            })) : n instanceof o ? (p.bind(t, "click", function () {
                p.fakeEvent(n.__button, "click")
            }), p.bind(t, "mouseover", function () {
                p.addClass(n.__button, "hover")
            }), p.bind(t, "mouseout", function () {
                p.removeClass(n.__button, "hover")
            })) : n instanceof l && (p.addClass(t, "color"), n.updateDisplay = d.compose(function (e) {
                return t.style.borderLeftColor = n.__color.toString(), e
            }, n.updateDisplay), n.updateDisplay());
            n.setValue = d.compose(function (t) {
                return e.getRoot().__preset_select && n.isModified() && j(e.getRoot(), !0), t
            }, n.setValue)
        }

        function A(e, t) {
            var n = e.getRoot(),
                r = n.__rememberedObjects.indexOf(t.object);
            if (r != -1) {
                var i = n.__rememberedObjectIndecesToControllers[r];
                i === undefined && (i = {}, n.__rememberedObjectIndecesToControllers[r] = i), i[t.property] = t;
                if (n.load && n.load.remembered) {
                    var s = n.load.remembered,
                        o;
                    if (s[e.preset]) o = s[e.preset];
                    else {
                        if (!s[y]) return;
                        o = s[y]
                    } if (o[r] && o[r][t.property] !== undefined) {
                        var u = o[r][t.property];
                        t.initialValue = u, t.setValue(u)
                    }
                }
            }
        }

        function O(e, t) {
            return document.location.href + "." + t
        }

        function M(e) {
            var t = e.__save_row = document.createElement("li");
            p.addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), p.addClass(t, "save-row");
            var n = document.createElement("span");
            n.innerHTML = "&nbsp;", p.addClass(n, "button gears");
            var r = document.createElement("span");
            r.innerHTML = "Save", p.addClass(r, "button"), p.addClass(r, "save");
            var i = document.createElement("span");
            i.innerHTML = "New", p.addClass(i, "button"), p.addClass(i, "save-as");
            var s = document.createElement("span");
            s.innerHTML = "Revert", p.addClass(s, "button"), p.addClass(s, "revert");
            var o = e.__preset_select = document.createElement("select");
            e.load && e.load.remembered ? d.each(e.load.remembered, function (t, n) {
                H(e, n, n == e.preset)
            }) : H(e, y, !1), p.bind(o, "change", function () {
                for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].innerHTML = e.__preset_select[t].value;
                e.preset = this.value
            }), t.appendChild(o), t.appendChild(n), t.appendChild(r), t.appendChild(i), t.appendChild(s);
            if (b) {
                var u = document.getElementById("dg-save-locally"),
                    a = document.getElementById("dg-local-explain");
                u.style.display = "block";
                var f = document.getElementById("dg-local-storage");
                localStorage.getItem(O(e, "isLocal")) === "true" && f.setAttribute("checked", "checked");

                function l() {
                    a.style.display = e.useLocalStorage ? "block" : "none"
                }
                l(), p.bind(f, "change", function () {
                    e.useLocalStorage = !e.useLocalStorage, l()
                })
            }
            var c = document.getElementById("dg-new-constructor");
            p.bind(c, "keydown", function (e) {
                e.metaKey && (e.which === 67 || e.keyCode == 67) && w.hide()
            }), p.bind(n, "click", function () {
                c.innerHTML = JSON.stringify(e.getSaveObject(), undefined, 2), w.show(), c.focus(), c.select()
            }), p.bind(r, "click", function () {
                e.save()
            }), p.bind(i, "click", function () {
                var t = prompt("Enter a new preset name.");
                t && e.saveAs(t)
            }), p.bind(s, "click", function () {
                e.revert()
            })
        }

        function _(e) {
            function n(n) {
                return n.preventDefault(), t = n.clientX, p.addClass(e.__closeButton, N.CLASS_DRAG), p.bind(window, "mousemove", r), p.bind(window, "mouseup", i), !1
            }

            function r(n) {
                return n.preventDefault(), e.width += t - n.clientX, e.onResize(), t = n.clientX, !1
            }

            function i() {
                p.removeClass(e.__closeButton, N.CLASS_DRAG), p.unbind(window, "mousemove", r), p.unbind(window, "mouseup", i)
            }
            e.__resize_handle = document.createElement("div"), d.extend(e.__resize_handle.style, {
                width: "6px",
                marginLeft: "-3px",
                height: "200px",
                cursor: "ew-resize",
                position: "absolute"
            });
            var t;
            p.bind(e.__resize_handle, "mousedown", n), p.bind(e.__closeButton, "mousedown", n), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild)
        }

        function D(e, t) {
            e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px")
        }

        function P(e, t) {
            var n = {};
            return d.each(e.__rememberedObjects, function (r, i) {
                var s = {},
                    o = e.__rememberedObjectIndecesToControllers[i];
                d.each(o, function (e, n) {
                    s[n] = t ? e.initialValue : e.getValue()
                }), n[i] = s
            }), n
        }

        function H(e, t, n) {
            var r = document.createElement("option");
            r.innerHTML = t, r.value = t, e.__preset_select.appendChild(r), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1)
        }

        function B(e) {
            for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].value == e.preset && (e.__preset_select.selectedIndex = t)
        }

        function j(e, t) {
            var n = e.__preset_select[e.__preset_select.selectedIndex];
            t ? n.innerHTML = n.value + "*" : n.innerHTML = n.value
        }

        function F(e) {
            e.length != 0 && c(function () {
                F(e)
            }), d.each(e, function (e) {
                e.updateDisplay()
            })
        }
        e.inject(n);
        var v = "dg",
            m = 72,
            g = 20,
            y = "Default",
            b = function () {
                try {
                    return "localStorage" in window && window.localStorage !== null
                } catch (e) {
                    return !1
                }
            }(),
            w, E = !0,
            S, x = !1,
            T = [],
            N = function (e) {
                function f() {
                    var e = t.getRoot();
                    e.width += 1, d.defer(function () {
                        e.width -= 1
                    })
                }
                var t = this;
                this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), p.addClass(this.domElement, v), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], e = e || {}, e = d.defaults(e, {
                    autoPlace: !0,
                    width: N.DEFAULT_WIDTH
                }), e = d.defaults(e, {
                    resizable: e.autoPlace,
                    hideable: e.autoPlace
                }), d.isUndefined(e.load) ? e.load = {
                    preset: y
                } : e.preset && (e.load.preset = e.preset), d.isUndefined(e.parent) && e.hideable && T.push(this), e.resizable = d.isUndefined(e.parent) && e.resizable, e.autoPlace && d.isUndefined(e.scrollable) && (e.scrollable = !0);
                var n = b && localStorage.getItem(O(this, "isLocal")) === "true",
                    r;
                Object.defineProperties(this, {
                    parent: {
                        get: function () {
                            return e.parent
                        }
                    },
                    scrollable: {
                        get: function () {
                            return e.scrollable
                        }
                    },
                    autoPlace: {
                        get: function () {
                            return e.autoPlace
                        }
                    },
                    preset: {
                        get: function () {
                            return t.parent ? t.getRoot().preset : e.load.preset
                        },
                        set: function (n) {
                            t.parent ? t.getRoot().preset = n : e.load.preset = n, B(this), t.revert()
                        }
                    },
                    width: {
                        get: function () {
                            return e.width
                        },
                        set: function (n) {
                            e.width = n, D(t, n)
                        }
                    },
                    name: {
                        get: function () {
                            return e.name
                        },
                        set: function (t) {
                            e.name = t, s && (s.innerHTML = e.name)
                        }
                    },
                    closed: {
                        get: function () {
                            return e.closed
                        },
                        set: function (n) {
                            e.closed = n, e.closed ? p.addClass(t.__ul, N.CLASS_CLOSED) : p.removeClass(t.__ul, N.CLASS_CLOSED), this.onResize(), t.__closeButton && (t.__closeButton.innerHTML = n ? N.TEXT_OPEN : N.TEXT_CLOSED)
                        }
                    },
                    load: {
                        get: function () {
                            return e.load
                        }
                    },
                    useLocalStorage: {
                        get: function () {
                            return n
                        },
                        set: function (e) {
                            b && (n = e, e ? p.bind(window, "unload", r) : p.unbind(window, "unload", r), localStorage.setItem(O(t, "isLocal"), e))
                        }
                    }
                });
                if (d.isUndefined(e.parent)) {
                    e.closed = !1, p.addClass(this.domElement, N.CLASS_MAIN), p.makeSelectable(this.domElement, !1);
                    if (b && n) {
                        t.useLocalStorage = !0;
                        var i = localStorage.getItem(O(this, "gui"));
                        i && (e.load = JSON.parse(i))
                    }
                    this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = N.TEXT_CLOSED, p.addClass(this.__closeButton, N.CLASS_CLOSE_BUTTON), this.domElement.appendChild(this.__closeButton), p.bind(this.__closeButton, "click", function () {
                        t.closed = !t.closed
                    })
                } else {
                    e.closed === undefined && (e.closed = !0);
                    var s = document.createTextNode(e.name);
                    p.addClass(s, "controller-name");
                    var o = k(t, s),
                        u = function (e) {
                            return e.preventDefault(), t.closed = !t.closed, !1
                        };
                    p.addClass(this.__ul, N.CLASS_CLOSED), p.addClass(o, "title"), p.bind(o, "click", u), e.closed || (this.closed = !1)
                }
                e.autoPlace && (d.isUndefined(e.parent) && (E && (S = document.createElement("div"), p.addClass(S, v), p.addClass(S, N.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(S), E = !1), S.appendChild(this.domElement), p.addClass(this.domElement, N.CLASS_AUTO_PLACE)), this.parent || D(t, e.width)), p.bind(window, "resize", function () {
                    t.onResize()
                }), p.bind(this.__ul, "webkitTransitionEnd", function () {
                    t.onResize()
                }), p.bind(this.__ul, "transitionend", function () {
                    t.onResize()
                }), p.bind(this.__ul, "oTransitionEnd", function () {
                    t.onResize()
                }), this.onResize(), e.resizable && _(this), r = function () {
                    b && localStorage.getItem(O(t, "isLocal")) === "true" && localStorage.setItem(O(t, "gui"), JSON.stringify(t.getSaveObject()))
                }, this.saveToLocalStorageIfPossible = r;
                var a = t.getRoot();
                e.parent || f()
            };
        return N.toggleHide = function () {
            x = !x, d.each(T, function (e) {
                e.domElement.style.zIndex = x ? -999 : 999, e.domElement.style.opacity = x ? 0 : 1
            })
        }, N.CLASS_AUTO_PLACE = "a", N.CLASS_AUTO_PLACE_CONTAINER = "ac", N.CLASS_MAIN = "main", N.CLASS_CONTROLLER_ROW = "cr", N.CLASS_TOO_TALL = "taller-than-window", N.CLASS_CLOSED = "closed", N.CLASS_CLOSE_BUTTON = "close-button", N.CLASS_DRAG = "drag", N.DEFAULT_WIDTH = 245, N.TEXT_CLOSED = "Close Controls", N.TEXT_OPEN = "Open Controls", p.bind(window, "keydown", function (e) {
            document.activeElement.type !== "text" && (e.which === m || e.keyCode == m) && N.toggleHide()
        }, !1), d.extend(N.prototype, {
            add: function (e, t) {
                return C(this, e, t, {
                    factoryArgs: Array.prototype.slice.call(arguments, 2)
                })
            },
            addColor: function (e, t) {
                return C(this, e, t, {
                    color: !0
                })
            },
            remove: function (e) {
                this.__ul.removeChild(e.__li), this.__controllers.slice(this.__controllers.indexOf(e), 1);
                var t = this;
                d.defer(function () {
                    t.onResize()
                })
            },
            destroy: function () {
                this.autoPlace && S.removeChild(this.domElement)
            },
            addFolder: function (e) {
                if (this.__folders[e] !== undefined) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
                var t = {
                    name: e,
                    parent: this
                };
                t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
                var n = new N(t);
                this.__folders[e] = n;
                var r = k(this, n.domElement);
                return p.addClass(r, "folder"), n
            },
            open: function () {
                this.closed = !1
            },
            close: function () {
                this.closed = !0
            },
            onResize: function () {
                var e = this.getRoot();
                if (e.scrollable) {
                    var t = p.getOffset(e.__ul).top,
                        n = 0;
                    d.each(e.__ul.childNodes, function (t) {
                        if (!e.autoPlace || t !== e.__save_row) n += p.getHeight(t)
                    }), window.innerHeight - t - g < n ? (p.addClass(e.domElement, N.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - g + "px") : (p.removeClass(e.domElement, N.CLASS_TOO_TALL), e.__ul.style.height = "auto")
                }
                e.__resize_handle && d.defer(function () {
                    e.__resize_handle.style.height = e.__ul.offsetHeight + "px"
                }), e.__closeButton && (e.__closeButton.style.width = e.width + "px")
            },
            remember: function () {
                d.isUndefined(w) && (w = new h, w.domElement.innerHTML = t);
                if (this.parent) throw new Error("You can only call remember on a top level GUI.");
                var e = this;
                d.each(Array.prototype.slice.call(arguments), function (t) {
                    e.__rememberedObjects.length == 0 && M(e), e.__rememberedObjects.indexOf(t) == -1 && e.__rememberedObjects.push(t)
                }), this.autoPlace && D(this, this.width)
            },
            getRoot: function () {
                var e = this;
                while (e.parent) e = e.parent;
                return e
            },
            getSaveObject: function () {
                var e = this.load;
                return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = P(this)), e.folders = {}, d.each(this.__folders, function (t, n) {
                    e.folders[n] = t.getSaveObject()
                }), e
            },
            save: function () {
                this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = P(this), j(this, !1), this.saveToLocalStorageIfPossible()
            },
            saveAs: function (e) {
                this.load.remembered || (this.load.remembered = {}, this.load.remembered[y] = P(this, !0)), this.load.remembered[e] = P(this), this.preset = e, H(this, e, !0), this.saveToLocalStorageIfPossible()
            },
            revert: function (e) {
                d.each(this.__controllers, function (t) {
                    this.getRoot().load.remembered ? A(e || this.getRoot(), t) : t.setValue(t.initialValue)
                }, this), d.each(this.__folders, function (e) {
                    e.revert(e)
                }), e || j(this.getRoot(), !1)
            },
            listen: function (e) {
                var t = this.__listening.length == 0;
                this.__listening.push(e), t && F(this.__listening)
            }
        }), N
    }(e.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>', ".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      position: absolute;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-x: hidden; }\n    .dg.a.has-save > ul {\n      margin-top: 27px; }\n      .dg.a.has-save > ul.closed {\n        margin-top: 0; }\n    .dg.a .save-row {\n      position: fixed;\n      top: 0;\n      z-index: 1002; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid rgba(0, 0, 0, 0); }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 9px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: black url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2fa1d6; }\n    .dg .cr.number input[type=text] {\n      color: #2fa1d6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2fa1d6; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n", e.controllers.factory = function (e, t, n, r, i, s, o) {
        return function (u, a) {
            var f = u[a];
            if (o.isArray(arguments[2]) || o.isObject(arguments[2])) return new e(u, a, arguments[2]);
            if (o.isNumber(f)) return o.isNumber(arguments[2]) && o.isNumber(arguments[3]) ? new n(u, a, arguments[2], arguments[3]) : new t(u, a, {
                min: arguments[2],
                max: arguments[3]
            });
            if (o.isString(f)) return new r(u, a);
            if (o.isFunction(f)) return new i(u, a, "");
            if (o.isBoolean(f)) return new s(u, a)
        }
    }(e.controllers.OptionController, e.controllers.NumberControllerBox, e.controllers.NumberControllerSlider, e.controllers.StringController = function (e, t, n) {
        var r = function (e, n) {
            function s() {
                i.setValue(i.__input.value)
            }

            function o() {
                i.__onFinishChange && i.__onFinishChange.call(i, i.getValue())
            }
            r.superclass.call(this, e, n);
            var i = this;
            this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), t.bind(this.__input, "keyup", s), t.bind(this.__input, "change", s), t.bind(this.__input, "blur", o), t.bind(this.__input, "keydown", function (e) {
                e.keyCode === 13 && this.blur()
            }), this.updateDisplay(), this.domElement.appendChild(this.__input)
        };
        return r.superclass = e, n.extend(r.prototype, e.prototype, {
            updateDisplay: function () {
                return t.isActive(this.__input) || (this.__input.value = this.getValue()), r.superclass.prototype.updateDisplay.call(this)
            }
        }), r
    }(e.controllers.Controller, e.dom.dom, e.utils.common), e.controllers.FunctionController, e.controllers.BooleanController, e.utils.common), e.controllers.Controller, e.controllers.BooleanController, e.controllers.FunctionController, e.controllers.NumberControllerBox, e.controllers.NumberControllerSlider, e.controllers.OptionController, e.controllers.ColorController = function (e, t, n, r, i) {
        function u(e, t, n, r) {
            e.style.background = "", i.each(o, function (i) {
                e.style.cssText += "background: " + i + "linear-gradient(" + t + ", " + n + " 0%, " + r + " 100%); "
            })
        }

        function a(e) {
            e.style.background = "", e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
        }
        var s = function (e, o) {
            function c(e) {
                v(e), t.bind(window, "mousemove", v), t.bind(window, "mouseup", h)
            }

            function h() {
                t.unbind(window, "mousemove", v), t.unbind(window, "mouseup", h)
            }

            function p() {
                var e = r(this.value);
                e !== !1 ? (f.__color.__state = e, f.setValue(f.__color.toOriginal())) : this.value = f.__color.toString()
            }

            function d() {
                t.unbind(window, "mousemove", m), t.unbind(window, "mouseup", d)
            }

            function v(e) {
                e.preventDefault();
                var n = t.getWidth(f.__saturation_field),
                    r = t.getOffset(f.__saturation_field),
                    i = (e.clientX - r.left + document.body.scrollLeft) / n,
                    s = 1 - (e.clientY - r.top + document.body.scrollTop) / n;
                return s > 1 ? s = 1 : s < 0 && (s = 0), i > 1 ? i = 1 : i < 0 && (i = 0), f.__color.v = s, f.__color.s = i, f.setValue(f.__color.toOriginal()), !1
            }

            function m(e) {
                e.preventDefault();
                var n = t.getHeight(f.__hue_field),
                    r = t.getOffset(f.__hue_field),
                    i = 1 - (e.clientY - r.top + document.body.scrollTop) / n;
                return i > 1 ? i = 1 : i < 0 && (i = 0), f.__color.h = i * 360, f.setValue(f.__color.toOriginal()), !1
            }
            s.superclass.call(this, e, o), this.__color = new n(this.getValue()), this.__temp = new n(0);
            var f = this;
            this.domElement = document.createElement("div"), t.makeSelectable(this.domElement, !1), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement("div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement("div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement("input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", t.bind(this.__input, "keydown", function (e) {
                e.keyCode === 13 && p.call(this)
            }), t.bind(this.__input, "blur", p), t.bind(this.__selector, "mousedown", function (e) {
                t.addClass(this, "drag").bind(window, "mouseup", function (e) {
                    t.removeClass(f.__selector, "drag")
                })
            });
            var l = document.createElement("div");
            i.extend(this.__selector.style, {
                width: "122px",
                height: "102px",
                padding: "3px",
                backgroundColor: "#222",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
            }), i.extend(this.__field_knob.style, {
                position: "absolute",
                width: "12px",
                height: "12px",
                border: this.__field_knob_border + (this.__color.v < .5 ? "#fff" : "#000"),
                boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                borderRadius: "12px",
                zIndex: 1
            }), i.extend(this.__hue_knob.style, {
                position: "absolute",
                width: "15px",
                height: "2px",
                borderRight: "4px solid #fff",
                zIndex: 1
            }), i.extend(this.__saturation_field.style, {
                width: "100px",
                height: "100px",
                border: "1px solid #555",
                marginRight: "3px",
                display: "inline-block",
                cursor: "pointer"
            }), i.extend(l.style, {
                width: "100%",
                height: "100%",
                background: "none"
            }), u(l, "top", "rgba(0,0,0,0)", "#000"), i.extend(this.__hue_field.style, {
                width: "15px",
                height: "100px",
                display: "inline-block",
                border: "1px solid #555",
                cursor: "ns-resize"
            }), a(this.__hue_field), i.extend(this.__input.style, {
                outline: "none",
                textAlign: "center",
                color: "#fff",
                border: 0,
                fontWeight: "bold",
                textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
            }), t.bind(this.__saturation_field, "mousedown", c), t.bind(this.__field_knob, "mousedown", c), t.bind(this.__hue_field, "mousedown", function (e) {
                m(e), t.bind(window, "mousemove", m), t.bind(window, "mouseup", d)
            }), this.__saturation_field.appendChild(l), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay()
        };
        s.superclass = e, i.extend(s.prototype, e.prototype, {
            updateDisplay: function () {
                var e = r(this.getValue());
                if (e !== !1) {
                    var t = !1;
                    i.each(n.COMPONENTS, function (n) {
                        if (!i.isUndefined(e[n]) && !i.isUndefined(this.__color.__state[n]) && e[n] !== this.__color.__state[n]) return t = !0, {}
                    }, this), t && i.extend(this.__color.__state, e)
                }
                i.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
                var s = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                    o = 255 - s;
                i.extend(this.__field_knob.style, {
                    marginLeft: 100 * this.__color.s - 7 + "px",
                    marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                    backgroundColor: this.__temp.toString(),
                    border: this.__field_knob_border + "rgb(" + s + "," + s + "," + s + ")"
                }), this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + "px", this.__temp.s = 1, this.__temp.v = 1, u(this.__saturation_field, "left", "#fff", this.__temp.toString()), i.extend(this.__input.style, {
                    backgroundColor: this.__input.value = this.__color.toString(),
                    color: "rgb(" + s + "," + s + "," + s + ")",
                    textShadow: this.__input_textShadow + "rgba(" + o + "," + o + "," + o + ",.7)"
                })
            }
        });
        var o = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
        return s
    }(e.controllers.Controller, e.dom.dom, e.color.Color = function (e, t, n, r) {
        function s(e, t, n) {
            Object.defineProperty(e, t, {
                get: function () {
                    return this.__state.space === "RGB" ? this.__state[t] : (u(this, t, n), this.__state[t])
                },
                set: function (e) {
                    this.__state.space !== "RGB" && (u(this, t, n), this.__state.space = "RGB"), this.__state[t] = e
                }
            })
        }

        function o(e, t) {
            Object.defineProperty(e, t, {
                get: function () {
                    return this.__state.space === "HSV" ? this.__state[t] : (a(this), this.__state[t])
                },
                set: function (e) {
                    this.__state.space !== "HSV" && (a(this), this.__state.space = "HSV"), this.__state[t] = e
                }
            })
        }

        function u(e, n, i) {
            if (e.__state.space === "HEX") e.__state[n] = t.component_from_hex(e.__state.hex, i);
            else {
                if (e.__state.space !== "HSV") throw "Corrupted color state";
                r.extend(e.__state, t.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
            }
        }

        function a(e) {
            var n = t.rgb_to_hsv(e.r, e.g, e.b);
            r.extend(e.__state, {
                s: n.s,
                v: n.v
            }), r.isNaN(n.h) ? r.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = n.h
        }
        var i = function () {
            this.__state = e.apply(this, arguments);
            if (this.__state === !1) throw "Failed to interpret color arguments";
            this.__state.a = this.__state.a || 1
        };
        return i.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], r.extend(i.prototype, {
            toString: function () {
                return n(this)
            },
            toOriginal: function () {
                return this.__state.conversion.write(this)
            }
        }), s(i.prototype, "r", 2), s(i.prototype, "g", 1), s(i.prototype, "b", 0), o(i.prototype, "h"), o(i.prototype, "s"), o(i.prototype, "v"), Object.defineProperty(i.prototype, "a", {
            get: function () {
                return this.__state.a
            },
            set: function (e) {
                this.__state.a = e
            }
        }), Object.defineProperty(i.prototype, "hex", {
            get: function () {
                return !this.__state.space !== "HEX" && (this.__state.hex = t.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
            },
            set: function (e) {
                this.__state.space = "HEX", this.__state.hex = e
            }
        }), i
    }(e.color.interpret, e.color.math = function () {
        var e;
        return {
            hsv_to_rgb: function (e, t, n) {
                var r = Math.floor(e / 60) % 6,
                    i = e / 60 - Math.floor(e / 60),
                    s = n * (1 - t),
                    o = n * (1 - i * t),
                    u = n * (1 - (1 - i) * t),
                    a = [
                        [n, u, s],
                        [o, n, s],
                        [s, n, u],
                        [s, o, n],
                        [u, s, n],
                        [n, s, o]
                    ][r];
                return {
                    r: a[0] * 255,
                    g: a[1] * 255,
                    b: a[2] * 255
                }
            },
            rgb_to_hsv: function (e, t, n) {
                var r = Math.min(e, t, n),
                    i = Math.max(e, t, n),
                    s = i - r,
                    o, u;
                return i == 0 ? {
                    h: NaN,
                    s: 0,
                    v: 0
                } : (u = s / i, e == i ? o = (t - n) / s : t == i ? o = 2 + (n - e) / s : o = 4 + (e - t) / s, o /= 6, o < 0 && (o += 1), {
                    h: o * 360,
                    s: u,
                    v: i / 255
                })
            },
            rgb_to_hex: function (e, t, n) {
                var r = this.hex_with_component(0, 2, e);
                return r = this.hex_with_component(r, 1, t), r = this.hex_with_component(r, 0, n), r
            },
            component_from_hex: function (e, t) {
                return e >> t * 8 & 255
            },
            hex_with_component: function (t, n, r) {
                return r << (e = n * 8) | t & ~(255 << e)
            }
        }
    }(), e.color.toString, e.utils.common), e.color.interpret, e.utils.common), e.utils.requestAnimationFrame = function () {
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
            window.setTimeout(e, 1e3 / 60)
        }
    }(), e.dom.CenteredDiv = function (e, t) {
        function r(e) {
            console.log(e)
        }
        var n = function () {
            this.backgroundElement = document.createElement("div"), t.extend(this.backgroundElement.style, {
                backgroundColor: "rgba(0,0,0,0.8)",
                top: 0,
                left: 0,
                display: "none",
                zIndex: "1000",
                opacity: 0,
                WebkitTransition: "opacity 0.2s linear"
            }), e.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), t.extend(this.domElement.style, {
                position: "fixed",
                display: "none",
                zIndex: "1001",
                opacity: 0,
                WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear"
            }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
            var n = this;
            e.bind(this.backgroundElement, "click", function () {
                n.hide()
            })
        };
        return n.prototype.show = function () {
            var e = this;
            this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), t.defer(function () {
                e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)"
            })
        }, n.prototype.hide = function () {
            var t = this,
                n = function () {
                    t.domElement.style.display = "none", t.backgroundElement.style.display = "none", e.unbind(t.domElement, "webkitTransitionEnd", n), e.unbind(t.domElement, "transitionend", n), e.unbind(t.domElement, "oTransitionEnd", n)
                };
            e.bind(this.domElement, "webkitTransitionEnd", n), e.bind(this.domElement, "transitionend", n), e.bind(this.domElement, "oTransitionEnd", n), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
        }, n.prototype.layout = function () {
            this.domElement.style.left = window.innerWidth / 2 - e.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - e.getHeight(this.domElement) / 2 + "px"
        }, n
    }(e.dom.dom, e.utils.common), e.dom.dom, e.utils.common), e
}), define("modules/multicanvas-renderer", ["physicsjs"], function (e) {
    e.renderer("multicanvas", "canvas", function (t) {
        return {
            init: function (e) {
                t.init.call(this, e), this._layers = {}, this.addLayer("main", this.el), this.resize(this.options.width, this.options.height)
            },
            layer: function (e) {
                return e in this._layers ? this._layers[e] : null
            },
            addLayer: function (t, n, r) {
                var i = this,
                    s = [],
                    o = e.util.extend({}, this.options.styles),
                    u = {
                        id: t,
                        el: n || document.createElement("canvas"),
                        options: e.util.options({
                            width: this.el.width,
                            height: this.el.height,
                            manual: !1,
                            autoResize: !0,
                            follow: null,
                            scale: 1
                        })(r)
                    };
                if (t in this._layers) throw 'Layer "' + t + '" already added.';
                return this.el.parentNode.appendChild(u.el), u.el.className += " physics-layer-" + u.id, u.ctx = u.el.getContext("2d"), u.ctx.scale(1, 1), u.el.width = u.options.width, u.el.height = u.options.height, u.bodies = s, u.reset = function (e) {
                    s = e || []
                }, u.addToStack = function (t) {
                    return e.util.isArray(t) ? s.push.apply(s, t) : s.push(t), u
                }, u.removeFromStack = function (t) {
                    var n, r;
                    if (e.util.isArray(t))
                        for (n = 0, r = t.length; n < r; ++n) u.removeFromStack(t[n]);
                    else n = e.util.indexOf(s, t), n > -1 && s.splice(n, 1);
                    return u
                }, u.render = function (t) {
                    var n, r = e.scratchpad(),
                        a = r.vector().set(0, 0),
                        f = u.options.scale,
                        l;
                    if (u.options.manual) return r.done(), u;
                    u.options.offset && (u.options.offset === "center" ? a.add(u.el.width * .5, u.el.height * .5).mult(1 / f) : a.vadd(u.options.offset).mult(1 / f)), u.options.follow && a.vsub(u.options.follow.state.pos), t !== !1 && u.ctx.clearRect(0, 0, u.el.width, u.el.height), f !== 1 && (u.ctx.save(), u.ctx.scale(f, f));
                    for (var c = 0, h = s.length; c < h; ++c) n = s[c], n.hidden || (l = n.view || (n.view = i.createView(n.geometry, n.styles || o[n.geometry.name])), i.drawBody(n, n.view, u.ctx, a));
                    return f !== 1 && u.ctx.restore(), r.done(), u
                }, this._layers[t] = u, u
            },
            resize: function (e, t) {
                var n;
                for (var r in this._layers) n = this._layers[r], n.options.autoResize && (n.el.width = e, n.el.height = t)
            },
            render: function (e, t) {
                var n, r, i;
                this._world.emit("beforeRender", {
                    renderer: this,
                    meta: t
                }), this.options.meta && this.drawMeta(t);
                for (var s in this._layers) this._layers[s].render();
                return this
            }
        }
    })
}), define("mediators/boilerplate", ["jquery", "hammer.jquery", "moddef", "physicsjs", "dat", "modules/multicanvas-renderer"], function (e, t, n, r, i, s) {
    function o(e, t) {
        var n, r, i, s;
        e.beginPath(), e.moveTo(t[0].x, t[0].y);
        for (n = 1; n < t.length - 2; n++) i = (t[n].x + t[n + 1].x) / 2, s = (t[n].y + t[n + 1].y) / 2, e.quadraticCurveTo(t[n].x, t[n].y, i, s);
        e.quadraticCurveTo(t[n].x, t[n].y, t[n + 1].x, t[n + 1].y), e.stroke()
    }

    function a(e) {
        window.console.error(e)
    }
    e.fn.slider = function (t) {
        var n = e.extend({
            min: 0,
            max: 1,
            value: .5
        }, t);
        return e(this).each(function () {
            function a(e) {
                var r = t.width();
                e = Math.max(0, Math.min(r, e)), s = e / r, o.css("left", e), u.css("width", s * 100 + "%"), t.trigger("change", s * i + n.min)
            }
            var t = e(this).addClass("slider"),
                i = n.max - n.min,
                s = (n.value - n.min) / i,
                o = e("<div>").appendTo(t).addClass("handle"),
                u = e("<div>").appendTo(t).addClass("meter");
            t.css({
                position: this.style.position || "relative"
            }), u.css({
                display: "block",
                position: "absolute",
                top: "0",
                left: "0",
                bottom: "0"
            }), o.css({
                position: "absolute",
                top: "50%",
                marginLeft: -o.outerWidth() * .5,
                marginTop: -o.outerHeight() * .5
            }), t.hammer().on("touch drag", r.util.throttle(function (e) {
                var n = t.offset(),
                    r = e.gesture.center.pageX - n.left,
                    i = e.gesture.center.pageY - n.top;
                a(r), e.preventDefault()
            }, 20)), t.on("mousedown", function () {
                return !1
            }), a(s * t.width())
        })
    };
    var u = ["rgb(18, 84, 151)", "rgb(167, 42, 34)", "rgb(159, 80, 31)", "rgb(64, 128, 0)", "rgb(139, 129, 23)", "#542437", "#53777A", "#ECD078", "#D95B43", "#C02942"],
        f = function (t, n) {
            var r = 2 * (Math.random() + Math.random() + Math.random()) - 3; /* qqq speed of air molecules */
            return r * n + t
        };
    r.behavior("position-tracker", function (e) {
        return {
            connect: function (e) {
                e.on("integrate:positions", this.behave, this, -100)
            },
            disconnect: function (e) {
                e.off("integrate:positions", this.behave)
            },
            behave: function () {
                var e = this.getTargets(),
                    t, n;
                for (var r = 0, i = e.length; r < i; ++r) t = e[r], n = t.positionBuffer || (t.positionBuffer = []), n.length > 100 ? n.splice(0, n.length - 100, t.state.old.pos.values()) : n.push(t.state.old.pos.values())
            }
        }
    });
    var l = function (e) {
            var t, n = this,
                r = n.bodies,
                i = n.ctx,
                s, o, u;
            if (n.el.style.opacity === "0") return n;
            e !== !1 && n.ctx.clearRect(0, 0, n.el.width, n.el.height);
            for (var a = 0, f = r.length; a < f; ++a) t = r[a], t.hidden || (s = t.state.pos, o = n.circleView || t.view, u = o.width * .5, i.drawImage(o, s.x - u, s.y - u));
            return n
        },
        c = n({
            constructor: function () {
                var t = this;
                t.energyScale = 1, this.velSigma = .1, this.tinyDensity = .003, this.largeDensity = 2e-4, this.largeSize = LARGE_SIZE_DOT/*window.Modernizr.touch ? 50 : 35*/, this.ratio = .15, this.massRatio = .06, this.maxParticles = window.Modernizr.touch ? 100 : 500, this.tinyParticles = [], this.largeParticles = [], t.initEvents(), e(function () {
                    t.resolve("domready")
                }), t.after("domready").then(function () {
                    t.onDomReady()
                }).otherwise(a)
            },
            initEvents: function () {
                var t = this;
                t.on("add:large", function () {
                    t.posTracker && t.posTracker.applyTo(t.largeParticles)
                }), t.on({
                    "settings:tiny-opacity": function (e, n) {
                        t.renderer.layer("tiny").el.style.opacity = "" + (Math.exp(n) - 1) / (Math.E - 1)
                    },
                    "settings:paths": function (e, n) {
                        var r = t.renderer.layer("paths");
                        n === !1 ? (r.ctx.clearRect(0, 0, r.el.width, r.el.height), t.world.remove(t.posTracker)) : t.world.add(t.posTracker), r.enabled = n
                    },
                    "settings:energy": r.util.throttle(function (e, n) {
                        n = Math.sqrt(n);
                        var r = n / t.energyScale,
                            i = t.world._bodies;
                        t.energyScale = n, t.world.one("step", function () {
                            for (var e = 0, t = i.length; e < t; ++e) i[e].state.vel.mult(r)
                        })
                    }, 100),
                    "settings:ratio": function (e, n) {
                        var i = n * t.largeSize;
                        t.renderer.layer("tiny").circleView = this.tinyParticleView = t.renderer.createView(r.geometry("circle", {
                            radius: i
                        }), "grey");
                        var s;
                        for (var o = 0, u = t.tinyParticles.length; o < u; ++o) s = t.tinyParticles[o], s.geometry.radius = i, s.recalc()
                    },
                    "settings:mass-ratio": function (e, n) {
                        var r;
                        for (var i = 0, s = t.largeParticles.length; i < s; ++i) r = t.largeParticles[i], r.mass = 1 / n
                    }
                }), t.on("settings:tiny-opacity", function (n, r) {
                    r > .2 && (setTimeout(function () { /*e("#video-msg").show()*/ }, 2e3), t.off(n.topic, n.handler))
                }), e(function () {
                    var n = e("#controls").hammer();
                    n.on("touch", "#ctrl-draw-paths", function () {
                        var n = e(this),
                            r = !n.hasClass("on");
                        n.toggleClass("on", r), t.emit("settings:paths", r)
                    }), n.on("touch", "#ctrl-upward-only", function () {
                        var n = e(this),
                            r = !n.hasClass("on");
                        n.toggleClass("on", r), gUpwardOnly = r
                    }), n.on("touch", "#ctrl-download", function () {
                        var e = t.getImage();
                        this.href = e, this.download = "minutelabs-brownian-motion.png"
                    });
                    var r, i = !1;
                    n.on("touch", "#ctrl-move", function (t) {
                        t.preventDefault(), i = !0, r = e("#controls").position()
                    }), n.on("touchmove", function (e) {
                        e.preventDefault()
                    }), n.on("drag", function (e) {
                        i && t.emit("move-controls", {
                            x: r.left + e.gesture.deltaX,
                            y: r.top + e.gesture.deltaY
                        })
                    }), n.on("dragend", function (e) {
                        i = !1
                    }), e("#viewport").hammer().on("touch", ".ctrl-close", function () {
                        e(this).parent().hide()
                    })
                }), window.addEventListener("resize", r.util.throttle(function () {
                    t.emit("resize", {
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                }, 50), !1);
                var n, i, s = 0,
                    o = 0;
                t.on("speed-monitor", function (e, n) {
                    o += o > 10 ? -5 : 1, s = s * (o - 1) + n, s /= o, (o >= 10 || n > 1e3 / 7) && s > 1e3 / 30 && (t.emit("sluggish", {
                        avg: s,
                        time: Date.now()
                    }), o = 0, s = 0)
                });
                var u = 0,
                    a = !1;
                t.on("sluggish", function (n, r) {
                    if (r.time - u < 3e3 || r.avg > 100) {
                        var i = t.world.find({
                            tags: {
                                $in: ["tiny"]
                            }
                        });
                        i.length > .4 * t.tinyDensity * window.innerWidth * window.innerHeight / (t.ratio * t.largeSize) ? (i = i.slice(-30), t.world.remove(i), t.renderer.layer("tiny").removeFromStack(i), u = 0) : a || (e("body").addClass("slow"), a = !0, setTimeout(function () {
                            e("body").removeClass("slow")
                        }, 8e3))
                    } else u = r.time
                })
            },
            initPhysics: function (t) {
                var n = this,
                    i = window.innerWidth,
                    s = window.innerHeight,
                    o = r.renderer("multicanvas", {
                        el: "physics",
                        width: i,
                        height: s,
                        styles: {
                            circle: {
                                strokeStyle: "#1a1a1a",
                                lineWidth: 0,
                                fillStyle: "#1a1a1a",
                                angleIndicator: "rgba(0,0,0,0)"
                            }
                        }
                    }),
                    a, f, c, h = r.aabb(0, 0, i, s);
                this.world = t, this.renderer = o, t.add(o), t.on("step", function () {
                    t.render()
                }), c = r.behavior("edge-collision-detection", {
                    aabb: h,
                    restitution: 1,
                    cof: 0
                }), n.on("resize", function (e, t) {
                    i = t.width, s = t.height, o.resize(i, s), h = r.aabb(0, 0, i, s), c.setAABB(h)
                }), t.add([r.behavior("body-collision-detection"), r.behavior("sweep-prune"), r.behavior("body-impulse-response"), n.posTracker = r.behavior("position-tracker"), c]), r.util.ticker.on(function (e) {
                    var r = Date.now();
                    t.step(e), r = Date.now() - r, n.emit("speed-monitor", r)
                }), r.util.ticker.start();
                var p = r.body("convex-polygon", {
                    hidden: !0,
                    x: i * .5,
                    y: s * .5,
                    vertices: [{
                        x: 0,
                        y: 0
                    }, {
                        x: 0,
                        y: 280
                    }, {
                        x: 400,
                        y: 280
                    }, {
                        x: 400,
                        y: 0
                    }],
                    treatment: "static"
                });
                t.add(p);
                var d = e("#controls");
                n.on("move-controls", function (e, t) {
                    d.css("left", t.x).css("top", t.y), p.state.pos.clone(t)
                }), n.on("resize", function (e, t) {
                    var n = d.position();
                    p.state.pos.set(n.left, n.top)
                });
                for (a = 0, f = Math.min(this.maxParticles, parseInt(this.tinyDensity * i * s / (this.ratio * this.largeSize))); a < f; ++a) this.addTinyParticle({
                    x: Math.random() * i, /* qqq this where the air molecules start on the screen, x-axis */
                    y: Math.random() * s, /* qqq this where the air molecules start on the screen, y-axis */
                    radius: 5
                });
                for (a = 0, f = Math.max(3, parseInt(this.largeDensity * i * s / this.largeSize)); a < f; ++a) {
                    this.addLargeParticle({
                        x: Math.random() * i, /* qqq this where the large particles start on the screen, x-axis */
                        y: Math.random() * s, /* qqq this where the large particles start on the screen, y-axis */
                        color: u[a % u.length]
                    })
                }
                o.addLayer("tiny").addToStack(t.find({
                    tags: {
                        $in: ["tiny"]
                    }
                })).render = l, o.layer("tiny").circleView = this.tinyParticleView = n.renderer.createView(r.geometry("circle", {
                    radius: n.ratio * n.largeSize
                }), "grey"), o.layer("main").addToStack(t.find({
                    tags: {
                        $in: ["large"]
                    }
                })).render = l;
                var v = o.addLayer("paths"),
                    m = !1;
                v.render = function () {
                    var e = n.largeParticles,
                        t, r, i = v.ctx,
                        s, u = {
                            lineWidth: 2,
                            fillStyle: "rgba(0,0,0,0)"
                        };
                    if (!v.enabled) {
                        m = !0;
                        return
                    }
                    i.lineCap = "round", i.shadowBlur = 2;
                    for (var a = 0, f = e.length; a < f; ++a) {
                        t = e[a], r = t.positionBuffer, i.strokeStyle = i.shadowColor = t.color;
                        if (r)
                            if (m) r.length = 0;
                            else {
                                for (var l = 0, c = r.length - 1; l < c; l++) o.drawLine(r[l], r[l + 1], u, i);
                                s = r.pop(), r.length = 0, r.push(s)
                            }
                    }
                    m = !1
                }
            },
            addTinyParticle: function (e) {
                var t;
                e = r.util.extend({
                    x: 50,
                    y: 50,
                    vx: f(0, this.velSigma),
                    vy: f(0, this.velSigma),
                    radius: 5,
                    restitution: 1,
                    cof: 0,
                    hidden: !1
                }, e), t = r.body("circle", e), t.tags = ["tiny"], this.tinyParticles.push(t), this.world.add(t)
            },
            addLargeParticle: function (e) {
                var t;
                e = r.util.extend({
                    x: 50,
                    y: 50,
                    vx: f(0, this.velSigma / 10),
                    vy: f(0, this.velSigma / 10),
                    radius: this.largeSize,
                    restitution: 1,
                    cof: 0,
                    mass: 1 / this.massRatio,
                    color: "#125497"
                }, e), t = r.body("circle", e), t.tags = ["large"], t.view = this.renderer.createView(t.geometry, e.color), this.largeParticles.push(t), this.world.add(t), this.emit("add:large", t)
            },
            initControls: function () {
                var t = this;
                e("#ctrl-opacity").on("change", function (e, n) {
                    t.emit("settings:tiny-opacity", n)
                }).slider({
                    value: 0
                }), e("#ctrl-energy").on("change", function (e, n) {
                    t.emit("settings:energy", n)
                }).slider({
                    value: 1,
                    min: .1,
                    max: 10
                }), e("#ctrl-ratio").on("change", function (e, n) {
                    t.emit("settings:ratio", n)
                }).slider({
                    value: this.ratio,
                    min: .1,
                    max: .6
                }), e("#ctrl-mass-ratio").on("change", function (e, n) {
                    t.emit("settings:mass-ratio", n)
                }).slider({
                    value: this.massRatio,
                    min: .001,
                    max: 1
                })
            },
            getImage: function () {
                var e = ["tiny", "paths", "main"],
                    t, n = this.renderer.hiddenCtx,
                    r = this.renderer.hiddenCanvas,
                    i, s = this.renderer.el.width,
                    o = this.renderer.el.height;
                r.width = s, r.height = o;
                for (var u = 0, a = e.length; u < a; ++u) t = this.renderer.layer(e[u]).el, i = parseFloat(t.style.opacity, 10), n.globalAlpha = isNaN(i) ? 1 : i, n.drawImage(t, 0, 0);
                return n.globalAlpha = 1, r.toDataURL("image/png")
            },
            onDomReady: function () {
                var t = this;
                window.innerWidth > 500 && (r({
                    timestep: window.Modernizr.touch ? 10 : 8
                }, t.initPhysics.bind(t)), t.initControls(), t.emit("settings:paths", e("#ctrl-draw-paths").hasClass("on")))
            }
        }, ["events"]);
    return new c
}), require(["config/require-config"], function () {
    require(["mediators/boilerplate"])
}), define("page-boilerplate", function () {}), define("page-boilerplate", function () {});
