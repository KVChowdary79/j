import {
    $ as Mt,
    $a as $r,
    $b as xe,
    Aa as zr,
    Ab as xi,
    Ac as _e,
    Ba as Bt,
    Bb as Ur,
    Bc as qe,
    C as fe,
    Ca as $,
    Cb as pn,
    Da as t0,
    Db as i0,
    Dc as Qr,
    E as Be,
    Eb as un,
    Ec as c0,
    Fa as Sr,
    Fc as We,
    G as ln,
    Ga as H,
    Gb as qr,
    Gc as Jr,
    Hc as t2,
    I as vr,
    Ia as Fe,
    Ic as Dt,
    J as Y1,
    Jc as ki,
    K as oe,
    Ka as Ar,
    Kc as ke,
    La as e0,
    Lc as e2,
    M as fr,
    Ma as Ir,
    Mb as s0,
    N as gi,
    Na as ko,
    Nb as a0,
    Nc as d0,
    O as De,
    Ob as bi,
    P as Z1,
    Pa as cn,
    Pb as Wr,
    Q as wr,
    Qa as Lr,
    Qb as Gr,
    Sb as Xr,
    T as xr,
    Tc as o2,
    U as br,
    Ua as dn,
    Ub as Zt,
    Uc as n2,
    V as kr,
    Va as yo,
    Vb as r0,
    Vc as h0,
    W as yr,
    Wa as Mo,
    Wb as G,
    Wc as i2,
    Xa as Er,
    Xb as q,
    Y as mi,
    Ya as Br,
    Z as wt,
    Za as Dr,
    Zb as zo,
    _ as wo,
    _a as jr,
    _b as gn,
    a as pr,
    aa as dt,
    ab as Hr,
    ac as be,
    ad as s2,
    ba as xo,
    bb as Tr,
    c as ur,
    ca as N,
    cb as Ne,
    d as hi,
    da as bo,
    db as _r,
    e as W1,
    ea as Mr,
    f as G1,
    fa as tt,
    fb as Vr,
    g as gt,
    ga as K1,
    h as St,
    ha as X,
    hb as o0,
    ia as I,
    ib as hn,
    j as Jt,
    jb as fi,
    k as U,
    kb as Or,
    l as Et,
    la as Ft,
    lb as Ue,
    lc as So,
    m as O,
    ma as Cr,
    mb as v,
    n as rn,
    na as Nt,
    nb as Te,
    o as gr,
    oa as ne,
    p as mr,
    pa as vi,
    qa as je,
    qb as Rr,
    r as J,
    ra as Q1,
    rb as Pr,
    s as ve,
    sa as J1,
    sb as P,
    sc as l0,
    t as Xt,
    tb as Co,
    tc as V,
    u as pi,
    ub as Ct,
    v as X1,
    va as $e,
    vb as Fr,
    vc as Yr,
    w as fo,
    wa as He,
    wb as Yt,
    wc as Zr,
    x as ui,
    xa as kt,
    xb as Nr,
    xc as Kr,
    yb as n0,
    yc as mn,
    za as we,
    zb as wi
} from "./chunk-DIJUAHOD.js";
import {
    a as Lo,
    b as wn,
    c as Ye,
    d as Ii,
    g as Ze,
    h as b0,
    i as v2
} from "./chunk-G53WN73B.js";
import {
    a as F,
    b as f0,
    c as w0,
    d as vn,
    e as fn,
    f as Ge,
    g as Ci,
    h as Io,
    i as zi,
    j as Si,
    k as h2
} from "./chunk-TFYTOQTJ.js";
import {
    a as vt,
    b as r2
} from "./chunk-LNXCJBU2.js";
import {
    a as Xe,
    d as u2,
    e as g2
} from "./chunk-QYCU5LFW.js";
import {
    a as mt,
    b as M,
    c as ie,
    d as Ht,
    e as a2,
    f as u,
    g as S,
    h as L,
    i as se,
    j as C,
    k as Y,
    l as p0,
    m as yt,
    n as b,
    o as u0
} from "./chunk-ZGG45NVU.js";
import {
    a as m2
} from "./chunk-CBTCPHC5.js";
import {
    a as g0,
    b as Tt,
    c as ye,
    d as ae,
    e as zt,
    f as Ao,
    g as yi,
    h as ut,
    i as ft,
    j as l2,
    k as m0,
    l as c2,
    m as _t,
    n as xt,
    p as v0,
    q as d2,
    r as Mi
} from "./chunk-5HUCFAOZ.js";
import {
    a as x0,
    b as p2,
    c as Ai
} from "./chunk-DROM25MW.js";
import {
    a as k0
} from "./chunk-F4PI7WOR.js";
import {
    a as f2,
    b as w2,
    c as x2
} from "./chunk-ILNDS6YC.js";
import {
    a as pt,
    b as jt
} from "./chunk-7T7YRGPO.js";
import {
    a as y,
    b as Q,
    c as hr,
    d as di,
    k as w
} from "./chunk-XDKSGOKZ.js";
var M0 = class extends t2 {
        supportsDOMEvents = !0
    },
    C0 = class o extends M0 {
        static makeCurrent() {
            Jr(new o)
        }
        onAndCancel(t, e, n, i) {
            return t.addEventListener(e, n, i), () => {
                t.removeEventListener(e, n, i)
            }
        }
        dispatchEvent(t, e) {
            t.dispatchEvent(e)
        }
        remove(t) {
            t.remove()
        }
        createElement(t, e) {
            return e = e || this.getDefaultDocument(), e.createElement(t)
        }
        createHtmlDocument() {
            return document.implementation.createHTMLDocument("fakeTitle")
        }
        getDefaultDocument() {
            return document
        }
        isElementNode(t) {
            return t.nodeType === Node.ELEMENT_NODE
        }
        isShadowRoot(t) {
            return t instanceof DocumentFragment
        }
        getGlobalEventTarget(t, e) {
            return e === "window" ? window : e === "document" ? t : e === "body" ? t.body : null
        }
        getBaseHref(t) {
            let e = _6();
            return e == null ? null : V6(e)
        }
        resetBaseElement() {
            xn = null
        }
        getUserAgent() {
            return window.navigator.userAgent
        }
        getCookie(t) {
            return e2(document.cookie, t)
        }
    },
    xn = null;

function _6() {
    return xn = xn || document.querySelector("base"), xn ? xn.getAttribute("href") : null
}

function V6(o) {
    return new URL(o, document.baseURI).pathname
}
var O6 = (() => {
        class o {
            build() {
                return new XMLHttpRequest
            }
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac
            })
        }
        return o
    })(),
    z0 = new tt(""),
    S2 = (() => {
        class o {
            _zone;
            _plugins;
            _eventNameToPlugin = new Map;
            constructor(e, n) {
                this._zone = n, e.forEach(i => {
                    i.manager = this
                }), this._plugins = e.slice().reverse()
            }
            addEventListener(e, n, i, s) {
                return this._findPluginFor(n).addEventListener(e, n, i, s)
            }
            getZone() {
                return this._zone
            }
            _findPluginFor(e) {
                let n = this._eventNameToPlugin.get(e);
                if (n) return n;
                if (n = this._plugins.find(s => s.supports(e)), !n) throw new dt(5101, !1);
                return this._eventNameToPlugin.set(e, n), n
            }
            static\ u0275fac = function(n) {
                return new(n || o)(X(z0), X($))
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac
            })
        }
        return o
    })(),
    Ei = class {
        _doc;
        constructor(t) {
            this._doc = t
        }
        manager
    },
    Li = "ng-app-id";

function b2(o) {
    for (let t of o) t.remove()
}

function k2(o, t) {
    let e = t.createElement("style");
    return e.textContent = o, e
}

function R6(o, t, e, n) {
    let i = o.head ? .querySelectorAll(`style[${Li}="${t}"],link[${Li}="${t}"]`);
    if (i)
        for (let s of i) s.removeAttribute(Li), s instanceof HTMLLinkElement ? n.set(s.href.slice(s.href.lastIndexOf("/") + 1), {
            usage: 0,
            elements: [s]
        }) : s.textContent && e.set(s.textContent, {
            usage: 0,
            elements: [s]
        })
}

function S0(o, t) {
    let e = t.createElement("link");
    return e.setAttribute("rel", "stylesheet"), e.setAttribute("href", o), e
}
var A2 = (() => {
        class o {
            doc;
            appId;
            nonce;
            inline = new Map;
            external = new Map;
            hosts = new Set;
            isServer;
            constructor(e, n, i, s = {}) {
                this.doc = e, this.appId = n, this.nonce = i, this.isServer = h0(s), R6(e, n, this.inline, this.external), this.hosts.add(e.head)
            }
            addStyles(e, n) {
                for (let i of e) this.addUsage(i, this.inline, k2);
                n ? .forEach(i => this.addUsage(i, this.external, S0))
            }
            removeStyles(e, n) {
                for (let i of e) this.removeUsage(i, this.inline);
                n ? .forEach(i => this.removeUsage(i, this.external))
            }
            addUsage(e, n, i) {
                let s = n.get(e);
                s ? s.usage++ : n.set(e, {
                    usage: 1,
                    elements: [...this.hosts].map(a => this.addElement(a, i(e, this.doc)))
                })
            }
            removeUsage(e, n) {
                let i = n.get(e);
                i && (i.usage--, i.usage <= 0 && (b2(i.elements), n.delete(e)))
            }
            ngOnDestroy() {
                for (let [, {
                        elements: e
                    }] of [...this.inline, ...this.external]) b2(e);
                this.hosts.clear()
            }
            addHost(e) {
                this.hosts.add(e);
                for (let [n, {
                        elements: i
                    }] of this.inline) i.push(this.addElement(e, k2(n, this.doc)));
                for (let [n, {
                        elements: i
                    }] of this.external) i.push(this.addElement(e, S0(n, this.doc)))
            }
            removeHost(e) {
                this.hosts.delete(e)
            }
            addElement(e, n) {
                return this.nonce && n.setAttribute("nonce", this.nonce), this.isServer && n.setAttribute(Li, this.appId), e.appendChild(n)
            }
            static\ u0275fac = function(n) {
                return new(n || o)(X(Dt), X(e0), X(cn, 8), X(ko))
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac
            })
        }
        return o
    })(),
    y0 = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
        math: "http://www.w3.org/1998/Math/MathML"
    },
    I0 = /%COMP%/g;
var I2 = "%COMP%",
    P6 = `_nghost-${I2}`,
    F6 = `_ngcontent-${I2}`,
    N6 = !0,
    U6 = new tt("", {
        providedIn: "root",
        factory: () => N6
    });

function q6(o) {
    return F6.replace(I0, o)
}

function W6(o) {
    return P6.replace(I0, o)
}

function L2(o, t) {
    return t.map(e => e.replace(I0, o))
}
var y2 = (() => {
        class o {
            eventManager;
            sharedStylesHost;
            appId;
            removeStylesOnCompDestroy;
            doc;
            platformId;
            ngZone;
            nonce;
            tracingService;
            rendererByCompId = new Map;
            defaultRenderer;
            platformIsServer;
            constructor(e, n, i, s, a, r, l, c = null, d = null) {
                this.eventManager = e, this.sharedStylesHost = n, this.appId = i, this.removeStylesOnCompDestroy = s, this.doc = a, this.platformId = r, this.ngZone = l, this.nonce = c, this.tracingService = d, this.platformIsServer = h0(r), this.defaultRenderer = new bn(e, a, l, this.platformIsServer, this.tracingService)
            }
            createRenderer(e, n) {
                if (!e || !n) return this.defaultRenderer;
                this.platformIsServer && n.encapsulation === dn.ShadowDom && (n = Q(y({}, n), {
                    encapsulation: dn.Emulated
                }));
                let i = this.getOrCreateRenderer(e, n);
                return i instanceof Bi ? i.applyToHost(e) : i instanceof kn && i.applyStyles(), i
            }
            getOrCreateRenderer(e, n) {
                let i = this.rendererByCompId,
                    s = i.get(n.id);
                if (!s) {
                    let a = this.doc,
                        r = this.ngZone,
                        l = this.eventManager,
                        c = this.sharedStylesHost,
                        d = this.removeStylesOnCompDestroy,
                        p = this.platformIsServer,
                        g = this.tracingService;
                    switch (n.encapsulation) {
                        case dn.Emulated:
                            s = new Bi(l, c, n, this.appId, d, a, r, p, g);
                            break;
                        case dn.ShadowDom:
                            return new A0(l, c, e, n, a, r, this.nonce, p, g);
                        default:
                            s = new kn(l, c, n, d, a, r, p, g);
                            break
                    }
                    i.set(n.id, s)
                }
                return s
            }
            ngOnDestroy() {
                this.rendererByCompId.clear()
            }
            componentReplaced(e) {
                this.rendererByCompId.delete(e)
            }
            static\ u0275fac = function(n) {
                return new(n || o)(X(S2), X(A2), X(e0), X(U6), X(Dt), X(ko), X($), X(cn), X(Lr, 8))
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac
            })
        }
        return o
    })(),
    bn = class {
        eventManager;
        doc;
        ngZone;
        platformIsServer;
        tracingService;
        data = Object.create(null);
        throwOnSyntheticProps = !0;
        constructor(t, e, n, i, s) {
            this.eventManager = t, this.doc = e, this.ngZone = n, this.platformIsServer = i, this.tracingService = s
        }
        destroy() {}
        destroyNode = null;
        createElement(t, e) {
            return e ? this.doc.createElementNS(y0[e] || e, t) : this.doc.createElement(t)
        }
        createComment(t) {
            return this.doc.createComment(t)
        }
        createText(t) {
            return this.doc.createTextNode(t)
        }
        appendChild(t, e) {
            (M2(t) ? t.content : t).appendChild(e)
        }
        insertBefore(t, e, n) {
            t && (M2(t) ? t.content : t).insertBefore(e, n)
        }
        removeChild(t, e) {
            e.remove()
        }
        selectRootElement(t, e) {
            let n = typeof t == "string" ? this.doc.querySelector(t) : t;
            if (!n) throw new dt(-5104, !1);
            return e || (n.textContent = ""), n
        }
        parentNode(t) {
            return t.parentNode
        }
        nextSibling(t) {
            return t.nextSibling
        }
        setAttribute(t, e, n, i) {
            if (i) {
                e = i + ":" + e;
                let s = y0[i];
                s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n)
            } else t.setAttribute(e, n)
        }
        removeAttribute(t, e, n) {
            if (n) {
                let i = y0[n];
                i ? t.removeAttributeNS(i, e) : t.removeAttribute(`${n}:${e}`)
            } else t.removeAttribute(e)
        }
        addClass(t, e) {
            t.classList.add(e)
        }
        removeClass(t, e) {
            t.classList.remove(e)
        }
        setStyle(t, e, n, i) {
            i & (hn.DashCase | hn.Important) ? t.style.setProperty(e, n, i & hn.Important ? "important" : "") : t.style[e] = n
        }
        removeStyle(t, e, n) {
            n & hn.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
        }
        setProperty(t, e, n) {
            t != null && (t[e] = n)
        }
        setValue(t, e) {
            t.nodeValue = e
        }
        listen(t, e, n, i) {
            if (typeof t == "string" && (t = We().getGlobalEventTarget(this.doc, t), !t)) throw new dt(5102, !1);
            let s = this.decoratePreventDefault(n);
            return this.tracingService ? .wrapEventListener && (s = this.tracingService.wrapEventListener(t, e, s)), this.eventManager.addEventListener(t, e, s, i)
        }
        decoratePreventDefault(t) {
            return e => {
                if (e === "__ngUnwrap__") return t;
                (this.platformIsServer ? this.ngZone.runGuarded(() => t(e)) : t(e)) === !1 && e.preventDefault()
            }
        }
    };

function M2(o) {
    return o.tagName === "TEMPLATE" && o.content !== void 0
}
var A0 = class extends bn {
        sharedStylesHost;
        hostEl;
        shadowRoot;
        constructor(t, e, n, i, s, a, r, l, c) {
            super(t, s, a, l, c), this.sharedStylesHost = e, this.hostEl = n, this.shadowRoot = n.attachShadow({
                mode: "open"
            }), this.sharedStylesHost.addHost(this.shadowRoot);
            let d = i.styles;
            d = L2(i.id, d);
            for (let g of d) {
                let m = document.createElement("style");
                r && m.setAttribute("nonce", r), m.textContent = g, this.shadowRoot.appendChild(m)
            }
            let p = i.getExternalStyles ? .();
            if (p)
                for (let g of p) {
                    let m = S0(g, s);
                    r && m.setAttribute("nonce", r), this.shadowRoot.appendChild(m)
                }
        }
        nodeOrShadowRoot(t) {
            return t === this.hostEl ? this.shadowRoot : t
        }
        appendChild(t, e) {
            return super.appendChild(this.nodeOrShadowRoot(t), e)
        }
        insertBefore(t, e, n) {
            return super.insertBefore(this.nodeOrShadowRoot(t), e, n)
        }
        removeChild(t, e) {
            return super.removeChild(null, e)
        }
        parentNode(t) {
            return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))
        }
        destroy() {
            this.sharedStylesHost.removeHost(this.shadowRoot)
        }
    },
    kn = class extends bn {
        sharedStylesHost;
        removeStylesOnCompDestroy;
        styles;
        styleUrls;
        constructor(t, e, n, i, s, a, r, l, c) {
            super(t, s, a, r, l), this.sharedStylesHost = e, this.removeStylesOnCompDestroy = i;
            let d = n.styles;
            this.styles = c ? L2(c, d) : d, this.styleUrls = n.getExternalStyles ? .(c)
        }
        applyStyles() {
            this.sharedStylesHost.addStyles(this.styles, this.styleUrls)
        }
        destroy() {
            this.removeStylesOnCompDestroy && this.sharedStylesHost.removeStyles(this.styles, this.styleUrls)
        }
    },
    Bi = class extends kn {
        contentAttr;
        hostAttr;
        constructor(t, e, n, i, s, a, r, l, c) {
            let d = i + "-" + n.id;
            super(t, e, n, s, a, r, l, c, d), this.contentAttr = q6(d), this.hostAttr = W6(d)
        }
        applyToHost(t) {
            this.applyStyles(), this.setAttribute(t, this.hostAttr, "")
        }
        createElement(t, e) {
            let n = super.createElement(t, e);
            return super.setAttribute(n, this.contentAttr, ""), n
        }
    },
    G6 = (() => {
        class o extends Ei {
            constructor(e) {
                super(e)
            }
            supports(e) {
                return !0
            }
            addEventListener(e, n, i, s) {
                return e.addEventListener(n, i, s), () => this.removeEventListener(e, n, i, s)
            }
            removeEventListener(e, n, i, s) {
                return e.removeEventListener(n, i, s)
            }
            static\ u0275fac = function(n) {
                return new(n || o)(X(Dt))
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac
            })
        }
        return o
    })(),
    C2 = ["alt", "control", "meta", "shift"],
    X6 = {
        "\b": "Backspace",
        "	": "Tab",
        "\x7F": "Delete",
        "\x1B": "Escape",
        Del: "Delete",
        Esc: "Escape",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Up: "ArrowUp",
        Down: "ArrowDown",
        Menu: "ContextMenu",
        Scroll: "ScrollLock",
        Win: "OS"
    },
    Y6 = {
        alt: o => o.altKey,
        control: o => o.ctrlKey,
        meta: o => o.metaKey,
        shift: o => o.shiftKey
    },
    Z6 = (() => {
        class o extends Ei {
            constructor(e) {
                super(e)
            }
            supports(e) {
                return o.parseEventName(e) != null
            }
            addEventListener(e, n, i, s) {
                let a = o.parseEventName(n),
                    r = o.eventCallback(a.fullKey, i, this.manager.getZone());
                return this.manager.getZone().runOutsideAngular(() => We().onAndCancel(e, a.domEventName, r, s))
            }
            static parseEventName(e) {
                let n = e.toLowerCase().split("."),
                    i = n.shift();
                if (n.length === 0 || !(i === "keydown" || i === "keyup")) return null;
                let s = o._normalizeKey(n.pop()),
                    a = "",
                    r = n.indexOf("code");
                if (r > -1 && (n.splice(r, 1), a = "code."), C2.forEach(c => {
                        let d = n.indexOf(c);
                        d > -1 && (n.splice(d, 1), a += c + ".")
                    }), a += s, n.length != 0 || s.length === 0) return null;
                let l = {};
                return l.domEventName = i, l.fullKey = a, l
            }
            static matchEventFullKeyCode(e, n) {
                let i = X6[e.key] || e.key,
                    s = "";
                return n.indexOf("code.") > -1 && (i = e.code, s = "code."), i == null || !i ? !1 : (i = i.toLowerCase(), i === " " ? i = "space" : i === "." && (i = "dot"), C2.forEach(a => {
                    if (a !== i) {
                        let r = Y6[a];
                        r(e) && (s += a + ".")
                    }
                }), s += i, s === n)
            }
            static eventCallback(e, n, i) {
                return s => {
                    o.matchEventFullKeyCode(s, e) && i.runGuarded(() => n(s))
                }
            }
            static _normalizeKey(e) {
                return e === "esc" ? "escape" : e
            }
            static\ u0275fac = function(n) {
                return new(n || o)(X(Dt))
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac
            })
        }
        return o
    })();

function Qf(o, t) {
    return Yr(y({
        rootComponent: o
    }, K6(t)))
}

function K6(o) {
    return {
        appProviders: [...o8, ...o ? .providers ? ? []],
        platformProviders: e8
    }
}

function Q6() {
    C0.makeCurrent()
}

function J6() {
    return new t0
}

function t8() {
    return Ar(document), document
}
var e8 = [{
    provide: ko,
    useValue: o2
}, {
    provide: Ir,
    useValue: Q6,
    multi: !0
}, {
    provide: Dt,
    useFactory: t8,
    deps: []
}];
var o8 = [{
        provide: Cr,
        useValue: "root"
    }, {
        provide: t0,
        useFactory: J6,
        deps: []
    }, {
        provide: z0,
        useClass: G6,
        multi: !0,
        deps: [Dt]
    }, {
        provide: z0,
        useClass: Z6,
        multi: !0,
        deps: [Dt]
    }, y2, A2, S2, {
        provide: Or,
        useExisting: y2
    }, {
        provide: i2,
        useClass: O6,
        deps: []
    },
    []
];
var Jf = (() => {
        class o {
            _doc;
            _dom;
            constructor(e) {
                this._doc = e, this._dom = We()
            }
            addTag(e, n = !1) {
                return e ? this._getOrCreateElement(e, n) : null
            }
            addTags(e, n = !1) {
                return e ? e.reduce((i, s) => (s && i.push(this._getOrCreateElement(s, n)), i), []) : []
            }
            getTag(e) {
                return e && this._doc.querySelector(`meta[${e}]`) || null
            }
            getTags(e) {
                if (!e) return [];
                let n = this._doc.querySelectorAll(`meta[${e}]`);
                return n ? [].slice.call(n) : []
            }
            updateTag(e, n) {
                if (!e) return null;
                n = n || this._parseSelector(e);
                let i = this.getTag(n);
                return i ? this._setMetaElementAttributes(e, i) : this._getOrCreateElement(e, !0)
            }
            removeTag(e) {
                this.removeTagElement(this.getTag(e))
            }
            removeTagElement(e) {
                e && this._dom.remove(e)
            }
            _getOrCreateElement(e, n = !1) {
                if (!n) {
                    let a = this._parseSelector(e),
                        r = this.getTags(a).filter(l => this._containsAttributes(e, l))[0];
                    if (r !== void 0) return r
                }
                let i = this._dom.createElement("meta");
                return this._setMetaElementAttributes(e, i), this._doc.getElementsByTagName("head")[0].appendChild(i), i
            }
            _setMetaElementAttributes(e, n) {
                return Object.keys(e).forEach(i => n.setAttribute(this._getMetaKeyMap(i), e[i])), n
            }
            _parseSelector(e) {
                let n = e.name ? "name" : "property";
                return `${n}="${e[n]}"`
            }
            _containsAttributes(e, n) {
                return Object.keys(e).every(i => n.getAttribute(this._getMetaKeyMap(i)) === e[i])
            }
            _getMetaKeyMap(e) {
                return n8[e] || e
            }
            static\ u0275fac = function(n) {
                return new(n || o)(X(Dt))
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })(),
    n8 = {
        httpEquiv: "http-equiv"
    },
    E2 = (() => {
        class o {
            _doc;
            constructor(e) {
                this._doc = e
            }
            getTitle() {
                return this._doc.title
            }
            setTitle(e) {
                this._doc.title = e || ""
            }
            static\ u0275fac = function(n) {
                return new(n || o)(X(Dt))
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })();
var i8 = (() => {
        class o {
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: function(n) {
                    let i = null;
                    return n ? i = new(n || o) : i = X(s8), i
                },
                providedIn: "root"
            })
        }
        return o
    })(),
    s8 = (() => {
        class o extends i8 {
            _doc;
            constructor(e) {
                super(), this._doc = e
            }
            sanitize(e, n) {
                if (n == null) return null;
                switch (e) {
                    case Ne.NONE:
                        return n;
                    case Ne.HTML:
                        return Mo(n, "HTML") ? yo(n) : Tr(this._doc, String(n)).toString();
                    case Ne.STYLE:
                        return Mo(n, "Style") ? yo(n) : n;
                    case Ne.SCRIPT:
                        if (Mo(n, "Script")) return yo(n);
                        throw new dt(5200, !1);
                    case Ne.URL:
                        return Mo(n, "URL") ? yo(n) : Hr(String(n));
                    case Ne.RESOURCE_URL:
                        if (Mo(n, "ResourceURL")) return yo(n);
                        throw new dt(5201, !1);
                    default:
                        throw new dt(5202, !1)
                }
            }
            bypassSecurityTrustHtml(e) {
                return Er(e)
            }
            bypassSecurityTrustStyle(e) {
                return Br(e)
            }
            bypassSecurityTrustScript(e) {
                return Dr(e)
            }
            bypassSecurityTrustUrl(e) {
                return jr(e)
            }
            bypassSecurityTrustResourceUrl(e) {
                return $r(e)
            }
            static\ u0275fac = function(n) {
                return new(n || o)(X(Dt))
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })(),
    Di = function(o) {
        return o[o.NoHttpTransferCache = 0] = "NoHttpTransferCache", o[o.HttpTransferCacheOptions = 1] = "HttpTransferCacheOptions", o[o.I18nSupport = 2] = "I18nSupport", o[o.EventReplay = 3] = "EventReplay", o[o.IncrementalHydration = 4] = "IncrementalHydration", o
    }(Di || {});

function a8(o, t = [], e = {}) {
    return {\
        u0275kind: o,
        \u0275providers: t
    }
}

function tw() {
    return a8(Di.EventReplay, Zr())
}

function ew(...o) {
    let t = [],
        e = new Set,
        n = e.has(Di.HttpTransferCacheOptions);
    for (let {\
            u0275providers: i,
            \u0275kind: s
        } of o) e.add(s), i.length && t.push(i);
    return Ft([
        [], Kr(), e.has(Di.NoHttpTransferCache) || n ? [] : s2({}), t
    ])
}
var W = "primary",
    $n = Symbol("RouteTitle"),
    j0 = class {
        params;
        constructor(t) {
            this.params = t || {}
        }
        has(t) {
            return Object.prototype.hasOwnProperty.call(this.params, t)
        }
        get(t) {
            if (this.has(t)) {
                let e = this.params[t];
                return Array.isArray(e) ? e[0] : e
            }
            return null
        }
        getAll(t) {
            if (this.has(t)) {
                let e = this.params[t];
                return Array.isArray(e) ? e : [e]
            }
            return []
        }
        get keys() {
            return Object.keys(this.params)
        }
    };

function Ho(o) {
    return new j0(o)
}

function l8(o, t, e) {
    let n = e.path.split("/");
    if (n.length > o.length || e.pathMatch === "full" && (t.hasChildren() || n.length < o.length)) return null;
    let i = {};
    for (let s = 0; s < n.length; s++) {
        let a = n[s],
            r = o[s];
        if (a[0] === ":") i[a.substring(1)] = r;
        else if (a !== r.path) return null
    }
    return {
        consumed: o.slice(0, n.length),
        posParams: i
    }
}

function c8(o, t) {
    if (o.length !== t.length) return !1;
    for (let e = 0; e < o.length; ++e)
        if (!re(o[e], t[e])) return !1;
    return !0
}

function re(o, t) {
    let e = o ? $0(o) : void 0,
        n = t ? $0(t) : void 0;
    if (!e || !n || e.length != n.length) return !1;
    let i;
    for (let s = 0; s < e.length; s++)
        if (i = e[s], !O2(o[i], t[i])) return !1;
    return !0
}

function $0(o) {
    return [...Object.keys(o), ...Object.getOwnPropertySymbols(o)]
}

function O2(o, t) {
    if (Array.isArray(o) && Array.isArray(t)) {
        if (o.length !== t.length) return !1;
        let e = [...o].sort(),
            n = [...t].sort();
        return e.every((i, s) => n[s] === i)
    } else return o === t
}

function R2(o) {
    return o.length > 0 ? o[o.length - 1] : null
}

function Oe(o) {
    return gr(o) ? o : wi(o) ? Et(Promise.resolve(o)) : O(o)
}
var d8 = {
        exact: F2,
        subset: N2
    },
    P2 = {
        exact: h8,
        subset: p8,
        ignored: () => !0
    };

function B2(o, t, e) {
    return d8[e.paths](o.root, t.root, e.matrixParams) && P2[e.queryParams](o.queryParams, t.queryParams) && !(e.fragment === "exact" && o.fragment !== t.fragment)
}

function h8(o, t) {
    return re(o, t)
}

function F2(o, t, e) {
    if (!Je(o.segments, t.segments) || !Hi(o.segments, t.segments, e) || o.numberOfChildren !== t.numberOfChildren) return !1;
    for (let n in t.children)
        if (!o.children[n] || !F2(o.children[n], t.children[n], e)) return !1;
    return !0
}

function p8(o, t) {
    return Object.keys(t).length <= Object.keys(o).length && Object.keys(t).every(e => O2(o[e], t[e]))
}

function N2(o, t, e) {
    return U2(o, t, t.segments, e)
}

function U2(o, t, e, n) {
    if (o.segments.length > e.length) {
        let i = o.segments.slice(0, e.length);
        return !(!Je(i, e) || t.hasChildren() || !Hi(i, e, n))
    } else if (o.segments.length === e.length) {
        if (!Je(o.segments, e) || !Hi(o.segments, e, n)) return !1;
        for (let i in t.children)
            if (!o.children[i] || !N2(o.children[i], t.children[i], n)) return !1;
        return !0
    } else {
        let i = e.slice(0, o.segments.length),
            s = e.slice(o.segments.length);
        return !Je(o.segments, i) || !Hi(o.segments, i, n) || !o.children[W] ? !1 : U2(o.children[W], t, s, n)
    }
}

function Hi(o, t, e) {
    return t.every((n, i) => P2[e](o[i].parameters, n.parameters))
}
var Ce = class {
        root;
        queryParams;
        fragment;
        _queryParamMap;
        constructor(t = new nt([], {}), e = {}, n = null) {
            this.root = t, this.queryParams = e, this.fragment = n
        }
        get queryParamMap() {
            return this._queryParamMap ? ? = Ho(this.queryParams), this._queryParamMap
        }
        toString() {
            return m8.serialize(this)
        }
    },
    nt = class {
        segments;
        children;
        parent = null;
        constructor(t, e) {
            this.segments = t, this.children = e, Object.values(e).forEach(n => n.parent = this)
        }
        hasChildren() {
            return this.numberOfChildren > 0
        }
        get numberOfChildren() {
            return Object.keys(this.children).length
        }
        toString() {
            return Ti(this)
        }
    },
    Qe = class {
        path;
        parameters;
        _parameterMap;
        constructor(t, e) {
            this.path = t, this.parameters = e
        }
        get parameterMap() {
            return this._parameterMap ? ? = Ho(this.parameters), this._parameterMap
        }
        toString() {
            return W2(this)
        }
    };

function u8(o, t) {
    return Je(o, t) && o.every((e, n) => re(e.parameters, t[n].parameters))
}

function Je(o, t) {
    return o.length !== t.length ? !1 : o.every((e, n) => e.path === t[n].path)
}

function g8(o, t) {
    let e = [];
    return Object.entries(o.children).forEach(([n, i]) => {
        n === W && (e = e.concat(t(i, n)))
    }), Object.entries(o.children).forEach(([n, i]) => {
        n !== W && (e = e.concat(t(i, n)))
    }), e
}
var Hn = (() => {
        class o {
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: () => new Sn,
                providedIn: "root"
            })
        }
        return o
    })(),
    Sn = class {
        parse(t) {
            let e = new T0(t);
            return new Ce(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
        }
        serialize(t) {
            let e = `/${yn(t.root,!0)}`,
                n = w8(t.queryParams),
                i = typeof t.fragment == "string" ? `#${v8(t.fragment)}` : "";
            return `${e}${n}${i}`
        }
    },
    m8 = new Sn;

function Ti(o) {
    return o.segments.map(t => W2(t)).join("/")
}

function yn(o, t) {
    if (!o.hasChildren()) return Ti(o);
    if (t) {
        let e = o.children[W] ? yn(o.children[W], !1) : "",
            n = [];
        return Object.entries(o.children).forEach(([i, s]) => {
            i !== W && n.push(`${i}:${yn(s,!1)}`)
        }), n.length > 0 ? `${e}(${n.join("//")})` : e
    } else {
        let e = g8(o, (n, i) => i === W ? [yn(o.children[W], !1)] : [`${i}:${yn(n,!1)}`]);
        return Object.keys(o.children).length === 1 && o.children[W] != null ? `${Ti(o)}/${e[0]}` : `${Ti(o)}/(${e.join("//")})`
    }
}

function q2(o) {
    return encodeURIComponent(o).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
}

function ji(o) {
    return q2(o).replace(/%3B/gi, ";")
}

function v8(o) {
    return encodeURI(o)
}

function H0(o) {
    return q2(o).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
}

function _i(o) {
    return decodeURIComponent(o)
}

function D2(o) {
    return _i(o.replace(/\+/g, "%20"))
}

function W2(o) {
    return `${H0(o.path)}${f8(o.parameters)}`
}

function f8(o) {
    return Object.entries(o).map(([t, e]) => `;${H0(t)}=${H0(e)}`).join("")
}

function w8(o) {
    let t = Object.entries(o).map(([e, n]) => Array.isArray(n) ? n.map(i => `${ji(e)}=${ji(i)}`).join("&") : `${ji(e)}=${ji(n)}`).filter(e => e);
    return t.length ? `?${t.join("&")}` : ""
}
var x8 = /^[^\/()?;#]+/;

function L0(o) {
    let t = o.match(x8);
    return t ? t[0] : ""
}
var b8 = /^[^\/()?;=#]+/;

function k8(o) {
    let t = o.match(b8);
    return t ? t[0] : ""
}
var y8 = /^[^=?&#]+/;

function M8(o) {
    let t = o.match(y8);
    return t ? t[0] : ""
}
var C8 = /^[^&#]+/;

function z8(o) {
    let t = o.match(C8);
    return t ? t[0] : ""
}
var T0 = class {
    url;
    remaining;
    constructor(t) {
        this.url = t, this.remaining = t
    }
    parseRootSegment() {
        return this.consumeOptional("/"), this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new nt([], {}) : new nt([], this.parseChildren())
    }
    parseQueryParams() {
        let t = {};
        if (this.consumeOptional("?"))
            do this.parseQueryParam(t); while (this.consumeOptional("&"));
        return t
    }
    parseFragment() {
        return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
    }
    parseChildren() {
        if (this.remaining === "") return {};
        this.consumeOptional("/");
        let t = [];
        for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment());
        let e = {};
        this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0));
        let n = {};
        return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n[W] = new nt(t, e)), n
    }
    parseSegment() {
        let t = L0(this.remaining);
        if (t === "" && this.peekStartsWith(";")) throw new dt(4009, !1);
        return this.capture(t), new Qe(_i(t), this.parseMatrixParams())
    }
    parseMatrixParams() {
        let t = {};
        for (; this.consumeOptional(";");) this.parseParam(t);
        return t
    }
    parseParam(t) {
        let e = k8(this.remaining);
        if (!e) return;
        this.capture(e);
        let n = "";
        if (this.consumeOptional("=")) {
            let i = L0(this.remaining);
            i && (n = i, this.capture(n))
        }
        t[_i(e)] = _i(n)
    }
    parseQueryParam(t) {
        let e = M8(this.remaining);
        if (!e) return;
        this.capture(e);
        let n = "";
        if (this.consumeOptional("=")) {
            let a = z8(this.remaining);
            a && (n = a, this.capture(n))
        }
        let i = D2(e),
            s = D2(n);
        if (t.hasOwnProperty(i)) {
            let a = t[i];
            Array.isArray(a) || (a = [a], t[i] = a), a.push(s)
        } else t[i] = s
    }
    parseParens(t) {
        let e = {};
        for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
            let n = L0(this.remaining),
                i = this.remaining[n.length];
            if (i !== "/" && i !== ")" && i !== ";") throw new dt(4010, !1);
            let s;
            n.indexOf(":") > -1 ? (s = n.slice(0, n.indexOf(":")), this.capture(s), this.capture(":")) : t && (s = W);
            let a = this.parseChildren();
            e[s] = Object.keys(a).length === 1 ? a[W] : new nt([], a), this.consumeOptional("//")
        }
        return e
    }
    peekStartsWith(t) {
        return this.remaining.startsWith(t)
    }
    consumeOptional(t) {
        return this.peekStartsWith(t) ? (this.remaining = this.remaining.substring(t.length), !0) : !1
    }
    capture(t) {
        if (!this.consumeOptional(t)) throw new dt(4011, !1)
    }
};

function G2(o) {
    return o.segments.length > 0 ? new nt([], {
        [W]: o
    }) : o
}

function X2(o) {
    let t = {};
    for (let [n, i] of Object.entries(o.children)) {
        let s = X2(i);
        if (n === W && s.segments.length === 0 && s.hasChildren())
            for (let [a, r] of Object.entries(s.children)) t[a] = r;
        else(s.segments.length > 0 || s.hasChildren()) && (t[n] = s)
    }
    let e = new nt(o.segments, t);
    return S8(e)
}

function S8(o) {
    if (o.numberOfChildren === 1 && o.children[W]) {
        let t = o.children[W];
        return new nt(o.segments.concat(t.segments), t.children)
    }
    return o
}

function to(o) {
    return o instanceof Ce
}

function A8(o, t, e = null, n = null) {
    let i = Y2(o);
    return Z2(i, t, e, n)
}

function Y2(o) {
    let t;

    function e(s) {
        let a = {};
        for (let l of s.children) {
            let c = e(l);
            a[l.outlet] = c
        }
        let r = new nt(s.url, a);
        return s === o && (t = r), r
    }
    let n = e(o.root),
        i = G2(n);
    return t ? ? i
}

function Z2(o, t, e, n) {
    let i = o;
    for (; i.parent;) i = i.parent;
    if (t.length === 0) return E0(i, i, i, e, n);
    let s = I8(t);
    if (s.toRoot()) return E0(i, i, new nt([], {}), e, n);
    let a = L8(s, i, o),
        r = a.processChildren ? Cn(a.segmentGroup, a.index, s.commands) : Q2(a.segmentGroup, a.index, s.commands);
    return E0(i, a.segmentGroup, r, e, n)
}

function Oi(o) {
    return typeof o == "object" && o != null && !o.outlets && !o.segmentPath
}

function An(o) {
    return typeof o == "object" && o != null && o.outlets
}

function E0(o, t, e, n, i) {
    let s = {};
    n && Object.entries(n).forEach(([l, c]) => {
        s[l] = Array.isArray(c) ? c.map(d => `${d}`) : `${c}`
    });
    let a;
    o === t ? a = e : a = K2(o, t, e);
    let r = G2(X2(a));
    return new Ce(r, s, i)
}

function K2(o, t, e) {
    let n = {};
    return Object.entries(o.children).forEach(([i, s]) => {
        s === t ? n[i] = e : n[i] = K2(s, t, e)
    }), new nt(o.segments, n)
}
var Ri = class {
    isAbsolute;
    numberOfDoubleDots;
    commands;
    constructor(t, e, n) {
        if (this.isAbsolute = t, this.numberOfDoubleDots = e, this.commands = n, t && n.length > 0 && Oi(n[0])) throw new dt(4003, !1);
        let i = n.find(An);
        if (i && i !== R2(n)) throw new dt(4004, !1)
    }
    toRoot() {
        return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    }
};

function I8(o) {
    if (typeof o[0] == "string" && o.length === 1 && o[0] === "/") return new Ri(!0, 0, o);
    let t = 0,
        e = !1,
        n = o.reduce((i, s, a) => {
            if (typeof s == "object" && s != null) {
                if (s.outlets) {
                    let r = {};
                    return Object.entries(s.outlets).forEach(([l, c]) => {
                        r[l] = typeof c == "string" ? c.split("/") : c
                    }), [...i, {
                        outlets: r
                    }]
                }
                if (s.segmentPath) return [...i, s.segmentPath]
            }
            return typeof s != "string" ? [...i, s] : a === 0 ? (s.split("/").forEach((r, l) => {
                l == 0 && r === "." || (l == 0 && r === "" ? e = !0 : r === ".." ? t++ : r != "" && i.push(r))
            }), i) : [...i, s]
        }, []);
    return new Ri(e, t, n)
}
var Do = class {
    segmentGroup;
    processChildren;
    index;
    constructor(t, e, n) {
        this.segmentGroup = t, this.processChildren = e, this.index = n
    }
};

function L8(o, t, e) {
    if (o.isAbsolute) return new Do(t, !0, 0);
    if (!e) return new Do(t, !1, NaN);
    if (e.parent === null) return new Do(e, !0, 0);
    let n = Oi(o.commands[0]) ? 0 : 1,
        i = e.segments.length - 1 + n;
    return E8(e, i, o.numberOfDoubleDots)
}

function E8(o, t, e) {
    let n = o,
        i = t,
        s = e;
    for (; s > i;) {
        if (s -= i, n = n.parent, !n) throw new dt(4005, !1);
        i = n.segments.length
    }
    return new Do(n, !1, i - s)
}

function B8(o) {
    return An(o[0]) ? o[0].outlets : {
        [W]: o
    }
}

function Q2(o, t, e) {
    if (o ? ? = new nt([], {}), o.segments.length === 0 && o.hasChildren()) return Cn(o, t, e);
    let n = D8(o, t, e),
        i = e.slice(n.commandIndex);
    if (n.match && n.pathIndex < o.segments.length) {
        let s = new nt(o.segments.slice(0, n.pathIndex), {});
        return s.children[W] = new nt(o.segments.slice(n.pathIndex), o.children), Cn(s, 0, i)
    } else return n.match && i.length === 0 ? new nt(o.segments, {}) : n.match && !o.hasChildren() ? _0(o, t, e) : n.match ? Cn(o, 0, i) : _0(o, t, e)
}

function Cn(o, t, e) {
    if (e.length === 0) return new nt(o.segments, {}); {
        let n = B8(e),
            i = {};
        if (Object.keys(n).some(s => s !== W) && o.children[W] && o.numberOfChildren === 1 && o.children[W].segments.length === 0) {
            let s = Cn(o.children[W], t, e);
            return new nt(o.segments, s.children)
        }
        return Object.entries(n).forEach(([s, a]) => {
            typeof a == "string" && (a = [a]), a !== null && (i[s] = Q2(o.children[s], t, a))
        }), Object.entries(o.children).forEach(([s, a]) => {
            n[s] === void 0 && (i[s] = a)
        }), new nt(o.segments, i)
    }
}

function D8(o, t, e) {
    let n = 0,
        i = t,
        s = {
            match: !1,
            pathIndex: 0,
            commandIndex: 0
        };
    for (; i < o.segments.length;) {
        if (n >= e.length) return s;
        let a = o.segments[i],
            r = e[n];
        if (An(r)) break;
        let l = `${r}`,
            c = n < e.length - 1 ? e[n + 1] : null;
        if (i > 0 && l === void 0) break;
        if (l && c && typeof c == "object" && c.outlets === void 0) {
            if (!$2(l, c, a)) return s;
            n += 2
        } else {
            if (!$2(l, {}, a)) return s;
            n++
        }
        i++
    }
    return {
        match: !0,
        pathIndex: i,
        commandIndex: n
    }
}

function _0(o, t, e) {
    let n = o.segments.slice(0, t),
        i = 0;
    for (; i < e.length;) {
        let s = e[i];
        if (An(s)) {
            let l = j8(s.outlets);
            return new nt(n, l)
        }
        if (i === 0 && Oi(e[0])) {
            let l = o.segments[t];
            n.push(new Qe(l.path, j2(e[0]))), i++;
            continue
        }
        let a = An(s) ? s.outlets[W] : `${s}`,
            r = i < e.length - 1 ? e[i + 1] : null;
        a && r && Oi(r) ? (n.push(new Qe(a, j2(r))), i += 2) : (n.push(new Qe(a, {})), i++)
    }
    return new nt(n, {})
}

function j8(o) {
    let t = {};
    return Object.entries(o).forEach(([e, n]) => {
        typeof n == "string" && (n = [n]), n !== null && (t[e] = _0(new nt([], {}), 0, n))
    }), t
}

function j2(o) {
    let t = {};
    return Object.entries(o).forEach(([e, n]) => t[e] = `${n}`), t
}

function $2(o, t, e) {
    return o == e.path && re(t, e.parameters)
}
var Vi = "imperative",
    At = function(o) {
        return o[o.NavigationStart = 0] = "NavigationStart", o[o.NavigationEnd = 1] = "NavigationEnd", o[o.NavigationCancel = 2] = "NavigationCancel", o[o.NavigationError = 3] = "NavigationError", o[o.RoutesRecognized = 4] = "RoutesRecognized", o[o.ResolveStart = 5] = "ResolveStart", o[o.ResolveEnd = 6] = "ResolveEnd", o[o.GuardsCheckStart = 7] = "GuardsCheckStart", o[o.GuardsCheckEnd = 8] = "GuardsCheckEnd", o[o.RouteConfigLoadStart = 9] = "RouteConfigLoadStart", o[o.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd", o[o.ChildActivationStart = 11] = "ChildActivationStart", o[o.ChildActivationEnd = 12] = "ChildActivationEnd", o[o.ActivationStart = 13] = "ActivationStart", o[o.ActivationEnd = 14] = "ActivationEnd", o[o.Scroll = 15] = "Scroll", o[o.NavigationSkipped = 16] = "NavigationSkipped", o
    }(At || {}),
    Kt = class {
        id;
        url;
        constructor(t, e) {
            this.id = t, this.url = e
        }
    },
    eo = class extends Kt {
        type = At.NavigationStart;
        navigationTrigger;
        restoredState;
        constructor(t, e, n = "imperative", i = null) {
            super(t, e), this.navigationTrigger = n, this.restoredState = i
        }
        toString() {
            return `NavigationStart(id: ${this.id}, url: '${this.url}')`
        }
    },
    Ve = class extends Kt {
        urlAfterRedirects;
        type = At.NavigationEnd;
        constructor(t, e, n) {
            super(t, e), this.urlAfterRedirects = n
        }
        toString() {
            return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
        }
    },
    qt = function(o) {
        return o[o.Redirect = 0] = "Redirect", o[o.SupersededByNewNavigation = 1] = "SupersededByNewNavigation", o[o.NoDataFromResolver = 2] = "NoDataFromResolver", o[o.GuardRejected = 3] = "GuardRejected", o
    }(qt || {}),
    V0 = function(o) {
        return o[o.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation", o[o.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy", o
    }(V0 || {}),
    Me = class extends Kt {
        reason;
        code;
        type = At.NavigationCancel;
        constructor(t, e, n, i) {
            super(t, e), this.reason = n, this.code = i
        }
        toString() {
            return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
        }
    },
    oo = class extends Kt {
        reason;
        code;
        type = At.NavigationSkipped;
        constructor(t, e, n, i) {
            super(t, e), this.reason = n, this.code = i
        }
    },
    In = class extends Kt {
        error;
        target;
        type = At.NavigationError;
        constructor(t, e, n, i) {
            super(t, e), this.error = n, this.target = i
        }
        toString() {
            return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
        }
    },
    Pi = class extends Kt {
        urlAfterRedirects;
        state;
        type = At.RoutesRecognized;
        constructor(t, e, n, i) {
            super(t, e), this.urlAfterRedirects = n, this.state = i
        }
        toString() {
            return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
    },
    O0 = class extends Kt {
        urlAfterRedirects;
        state;
        type = At.GuardsCheckStart;
        constructor(t, e, n, i) {
            super(t, e), this.urlAfterRedirects = n, this.state = i
        }
        toString() {
            return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
    },
    R0 = class extends Kt {
        urlAfterRedirects;
        state;
        shouldActivate;
        type = At.GuardsCheckEnd;
        constructor(t, e, n, i, s) {
            super(t, e), this.urlAfterRedirects = n, this.state = i, this.shouldActivate = s
        }
        toString() {
            return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
        }
    },
    P0 = class extends Kt {
        urlAfterRedirects;
        state;
        type = At.ResolveStart;
        constructor(t, e, n, i) {
            super(t, e), this.urlAfterRedirects = n, this.state = i
        }
        toString() {
            return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
    },
    F0 = class extends Kt {
        urlAfterRedirects;
        state;
        type = At.ResolveEnd;
        constructor(t, e, n, i) {
            super(t, e), this.urlAfterRedirects = n, this.state = i
        }
        toString() {
            return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
    },
    N0 = class {
        route;
        type = At.RouteConfigLoadStart;
        constructor(t) {
            this.route = t
        }
        toString() {
            return `RouteConfigLoadStart(path: ${this.route.path})`
        }
    },
    U0 = class {
        route;
        type = At.RouteConfigLoadEnd;
        constructor(t) {
            this.route = t
        }
        toString() {
            return `RouteConfigLoadEnd(path: ${this.route.path})`
        }
    },
    q0 = class {
        snapshot;
        type = At.ChildActivationStart;
        constructor(t) {
            this.snapshot = t
        }
        toString() {
            return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
        }
    },
    W0 = class {
        snapshot;
        type = At.ChildActivationEnd;
        constructor(t) {
            this.snapshot = t
        }
        toString() {
            return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
        }
    },
    G0 = class {
        snapshot;
        type = At.ActivationStart;
        constructor(t) {
            this.snapshot = t
        }
        toString() {
            return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
        }
    },
    X0 = class {
        snapshot;
        type = At.ActivationEnd;
        constructor(t) {
            this.snapshot = t
        }
        toString() {
            return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
        }
    };
var Ln = class {},
    To = class {
        url;
        navigationBehaviorOptions;
        constructor(t, e) {
            this.url = t, this.navigationBehaviorOptions = e
        }
    };

function $8(o, t) {
    return o.providers && !o._injector && (o._injector = Pr(o.providers, t, `Route: ${o.path}`)), o._injector ? ? t
}

function te(o) {
    return o.outlet || W
}

function H8(o, t) {
    let e = o.filter(n => te(n) === t);
    return e.push(...o.filter(n => te(n) !== t)), e
}

function Tn(o) {
    if (!o) return null;
    if (o.routeConfig ? ._injector) return o.routeConfig._injector;
    for (let t = o.parent; t; t = t.parent) {
        let e = t.routeConfig;
        if (e ? ._loadedInjector) return e._loadedInjector;
        if (e ? ._injector) return e._injector
    }
    return null
}
var Y0 = class {
        rootInjector;
        outlet = null;
        route = null;
        children;
        attachRef = null;
        get injector() {
            return Tn(this.route ? .snapshot) ? ? this.rootInjector
        }
        constructor(t) {
            this.rootInjector = t, this.children = new no(this.rootInjector)
        }
    },
    no = (() => {
        class o {
            rootInjector;
            contexts = new Map;
            constructor(e) {
                this.rootInjector = e
            }
            onChildOutletCreated(e, n) {
                let i = this.getOrCreateContext(e);
                i.outlet = n, this.contexts.set(e, i)
            }
            onChildOutletDestroyed(e) {
                let n = this.getContext(e);
                n && (n.outlet = null, n.attachRef = null)
            }
            onOutletDeactivated() {
                let e = this.contexts;
                return this.contexts = new Map, e
            }
            onOutletReAttached(e) {
                this.contexts = e
            }
            getOrCreateContext(e) {
                let n = this.getContext(e);
                return n || (n = new Y0(this.rootInjector), this.contexts.set(e, n)), n
            }
            getContext(e) {
                return this.contexts.get(e) || null
            }
            static\ u0275fac = function(n) {
                return new(n || o)(X(Nt))
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })(),
    Fi = class {
        _root;
        constructor(t) {
            this._root = t
        }
        get root() {
            return this._root.value
        }
        parent(t) {
            let e = this.pathFromRoot(t);
            return e.length > 1 ? e[e.length - 2] : null
        }
        children(t) {
            let e = Z0(t, this._root);
            return e ? e.children.map(n => n.value) : []
        }
        firstChild(t) {
            let e = Z0(t, this._root);
            return e && e.children.length > 0 ? e.children[0].value : null
        }
        siblings(t) {
            let e = K0(t, this._root);
            return e.length < 2 ? [] : e[e.length - 2].children.map(i => i.value).filter(i => i !== t)
        }
        pathFromRoot(t) {
            return K0(t, this._root).map(e => e.value)
        }
    };

function Z0(o, t) {
    if (o === t.value) return t;
    for (let e of t.children) {
        let n = Z0(o, e);
        if (n) return n
    }
    return null
}

function K0(o, t) {
    if (o === t.value) return [t];
    for (let e of t.children) {
        let n = K0(o, e);
        if (n.length) return n.unshift(t), n
    }
    return []
}
var Ut = class {
    value;
    children;
    constructor(t, e) {
        this.value = t, this.children = e
    }
    toString() {
        return `TreeNode(${this.value})`
    }
};

function Bo(o) {
    let t = {};
    return o && o.children.forEach(e => t[e.value.outlet] = e), t
}
var Ni = class extends Fi {
    snapshot;
    constructor(t, e) {
        super(t), this.snapshot = e, as(this, t)
    }
    toString() {
        return this.snapshot.toString()
    }
};

function J2(o) {
    let t = T8(o),
        e = new St([new Qe("", {})]),
        n = new St({}),
        i = new St({}),
        s = new St({}),
        a = new St(""),
        r = new Vt(e, n, s, a, i, W, o, t.root);
    return r.snapshot = t.root, new Ni(new Ut(r, []), t)
}

function T8(o) {
    let t = {},
        e = {},
        n = {},
        i = "",
        s = new jo([], t, n, i, e, W, o, null, {});
    return new qi("", new Ut(s, []))
}
var Vt = class {
    urlSubject;
    paramsSubject;
    queryParamsSubject;
    fragmentSubject;
    dataSubject;
    outlet;
    component;
    snapshot;
    _futureSnapshot;
    _routerState;
    _paramMap;
    _queryParamMap;
    title;
    url;
    params;
    queryParams;
    fragment;
    data;
    constructor(t, e, n, i, s, a, r, l) {
        this.urlSubject = t, this.paramsSubject = e, this.queryParamsSubject = n, this.fragmentSubject = i, this.dataSubject = s, this.outlet = a, this.component = r, this._futureSnapshot = l, this.title = this.dataSubject ? .pipe(J(c => c[$n])) ? ? O(void 0), this.url = t, this.params = e, this.queryParams = n, this.fragment = i, this.data = s
    }
    get routeConfig() {
        return this._futureSnapshot.routeConfig
    }
    get root() {
        return this._routerState.root
    }
    get parent() {
        return this._routerState.parent(this)
    }
    get firstChild() {
        return this._routerState.firstChild(this)
    }
    get children() {
        return this._routerState.children(this)
    }
    get pathFromRoot() {
        return this._routerState.pathFromRoot(this)
    }
    get paramMap() {
        return this._paramMap ? ? = this.params.pipe(J(t => Ho(t))), this._paramMap
    }
    get queryParamMap() {
        return this._queryParamMap ? ? = this.queryParams.pipe(J(t => Ho(t))), this._queryParamMap
    }
    toString() {
        return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
    }
};

function Ui(o, t, e = "emptyOnly") {
    let n, {
        routeConfig: i
    } = o;
    return t !== null && (e === "always" || i ? .path === "" || !t.component && !t.routeConfig ? .loadComponent) ? n = {
        params: y(y({}, t.params), o.params),
        data: y(y({}, t.data), o.data),
        resolve: y(y(y(y({}, o.data), t.data), i ? .data), o._resolvedData)
    } : n = {
        params: y({}, o.params),
        data: y({}, o.data),
        resolve: y(y({}, o.data), o._resolvedData ? ? {})
    }, i && el(i) && (n.resolve[$n] = i.title), n
}
var jo = class {
        url;
        params;
        queryParams;
        fragment;
        data;
        outlet;
        component;
        routeConfig;
        _resolve;
        _resolvedData;
        _routerState;
        _paramMap;
        _queryParamMap;
        get title() {
            return this.data ? .[$n]
        }
        constructor(t, e, n, i, s, a, r, l, c) {
            this.url = t, this.params = e, this.queryParams = n, this.fragment = i, this.data = s, this.outlet = a, this.component = r, this.routeConfig = l, this._resolve = c
        }
        get root() {
            return this._routerState.root
        }
        get parent() {
            return this._routerState.parent(this)
        }
        get firstChild() {
            return this._routerState.firstChild(this)
        }
        get children() {
            return this._routerState.children(this)
        }
        get pathFromRoot() {
            return this._routerState.pathFromRoot(this)
        }
        get paramMap() {
            return this._paramMap ? ? = Ho(this.params), this._paramMap
        }
        get queryParamMap() {
            return this._queryParamMap ? ? = Ho(this.queryParams), this._queryParamMap
        }
        toString() {
            let t = this.url.map(n => n.toString()).join("/"),
                e = this.routeConfig ? this.routeConfig.path : "";
            return `Route(url:'${t}', path:'${e}')`
        }
    },
    qi = class extends Fi {
        url;
        constructor(t, e) {
            super(e), this.url = t, as(this, e)
        }
        toString() {
            return tl(this._root)
        }
    };

function as(o, t) {
    t.value._routerState = o, t.children.forEach(e => as(o, e))
}

function tl(o) {
    let t = o.children.length > 0 ? ` { ${o.children.map(tl).join(", ")} } ` : "";
    return `${o.value}${t}`
}

function B0(o) {
    if (o.snapshot) {
        let t = o.snapshot,
            e = o._futureSnapshot;
        o.snapshot = e, re(t.queryParams, e.queryParams) || o.queryParamsSubject.next(e.queryParams), t.fragment !== e.fragment && o.fragmentSubject.next(e.fragment), re(t.params, e.params) || o.paramsSubject.next(e.params), c8(t.url, e.url) || o.urlSubject.next(e.url), re(t.data, e.data) || o.dataSubject.next(e.data)
    } else o.snapshot = o._futureSnapshot, o.dataSubject.next(o._futureSnapshot.data)
}

function Q0(o, t) {
    let e = re(o.params, t.params) && u8(o.url, t.url),
        n = !o.parent != !t.parent;
    return e && !n && (!o.parent || Q0(o.parent, t.parent))
}

function el(o) {
    return typeof o.title == "string" || o.title === null
}
var _8 = new tt(""),
    V8 = (() => {
        class o {
            activated = null;
            get activatedComponentRef() {
                return this.activated
            }
            _activatedRoute = null;
            name = W;
            activateEvents = new Bt;
            deactivateEvents = new Bt;
            attachEvents = new Bt;
            detachEvents = new Bt;
            routerOutletData = Sr(void 0);
            parentContexts = I(no);
            location = I(Te);
            changeDetector = I(V);
            inputBinder = I(rs, {
                optional: !0
            });
            supportsBindingToComponentInputs = !0;
            ngOnChanges(e) {
                if (e.name) {
                    let {
                        firstChange: n,
                        previousValue: i
                    } = e.name;
                    if (n) return;
                    this.isTrackedInParentContexts(i) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)), this.initializeOutletWithName()
                }
            }
            ngOnDestroy() {
                this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name), this.inputBinder ? .unsubscribeFromRouteData(this)
            }
            isTrackedInParentContexts(e) {
                return this.parentContexts.getContext(e) ? .outlet === this
            }
            ngOnInit() {
                this.initializeOutletWithName()
            }
            initializeOutletWithName() {
                if (this.parentContexts.onChildOutletCreated(this.name, this), this.activated) return;
                let e = this.parentContexts.getContext(this.name);
                e ? .route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.injector))
            }
            get isActivated() {
                return !!this.activated
            }
            get component() {
                if (!this.activated) throw new dt(4012, !1);
                return this.activated.instance
            }
            get activatedRoute() {
                if (!this.activated) throw new dt(4012, !1);
                return this._activatedRoute
            }
            get activatedRouteData() {
                return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
            }
            detach() {
                if (!this.activated) throw new dt(4012, !1);
                this.location.detach();
                let e = this.activated;
                return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(e.instance), e
            }
            attach(e, n) {
                this.activated = e, this._activatedRoute = n, this.location.insert(e.hostView), this.inputBinder ? .bindActivatedRouteToOutletComponent(this), this.attachEvents.emit(e.instance)
            }
            deactivate() {
                if (this.activated) {
                    let e = this.component;
                    this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e)
                }
            }
            activateWith(e, n) {
                if (this.isActivated) throw new dt(4013, !1);
                this._activatedRoute = e;
                let i = this.location,
                    a = e.snapshot.component,
                    r = this.parentContexts.getOrCreateContext(this.name).children,
                    l = new J0(e, r, i.injector, this.routerOutletData);
                this.activated = i.createComponent(a, {
                    index: i.length,
                    injector: l,
                    environmentInjector: n
                }), this.changeDetector.markForCheck(), this.inputBinder ? .bindActivatedRouteToOutletComponent(this), this.activateEvents.emit(this.activated.instance)
            }
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275dir = Ct({
                type: o,
                selectors: [
                    ["router-outlet"]
                ],
                inputs: {
                    name: "name",
                    routerOutletData: [1, "routerOutletData"]
                },
                outputs: {
                    activateEvents: "activate",
                    deactivateEvents: "deactivate",
                    attachEvents: "attach",
                    detachEvents: "detach"
                },
                exportAs: ["outlet"],
                features: [je]
            })
        }
        return o
    })(),
    J0 = class o {
        route;
        childContexts;
        parent;
        outletData;
        __ngOutletInjector(t) {
            return new o(this.route, this.childContexts, t, this.outletData)
        }
        constructor(t, e, n, i) {
            this.route = t, this.childContexts = e, this.parent = n, this.outletData = i
        }
        get(t, e) {
            return t === Vt ? this.route : t === no ? this.childContexts : t === _8 ? this.outletData : this.parent.get(t, e)
        }
    },
    rs = new tt("");

function O8(o, t, e) {
    let n = En(o, t._root, e ? e._root : void 0);
    return new Ni(n, t)
}

function En(o, t, e) {
    if (e && o.shouldReuseRoute(t.value, e.value.snapshot)) {
        let n = e.value;
        n._futureSnapshot = t.value;
        let i = R8(o, t, e);
        return new Ut(n, i)
    } else {
        if (o.shouldAttach(t.value)) {
            let s = o.retrieve(t.value);
            if (s !== null) {
                let a = s.route;
                return a.value._futureSnapshot = t.value, a.children = t.children.map(r => En(o, r)), a
            }
        }
        let n = P8(t.value),
            i = t.children.map(s => En(o, s));
        return new Ut(n, i)
    }
}

function R8(o, t, e) {
    return t.children.map(n => {
        for (let i of e.children)
            if (o.shouldReuseRoute(n.value, i.value.snapshot)) return En(o, n, i);
        return En(o, n)
    })
}

function P8(o) {
    return new Vt(new St(o.url), new St(o.params), new St(o.queryParams), new St(o.fragment), new St(o.data), o.outlet, o.component, o)
}
var Bn = class {
        redirectTo;
        navigationBehaviorOptions;
        constructor(t, e) {
            this.redirectTo = t, this.navigationBehaviorOptions = e
        }
    },
    ol = "ngNavigationCancelingError";

function Wi(o, t) {
    let {
        redirectTo: e,
        navigationBehaviorOptions: n
    } = to(t) ? {
        redirectTo: t,
        navigationBehaviorOptions: void 0
    } : t, i = nl(!1, qt.Redirect);
    return i.url = e, i.navigationBehaviorOptions = n, i
}

function nl(o, t) {
    let e = new Error(`NavigationCancelingError: ${o||""}`);
    return e[ol] = !0, e.cancellationCode = t, e
}

function F8(o) {
    return il(o) && to(o.url)
}

function il(o) {
    return !!o && o[ol]
}
var N8 = (o, t, e, n) => J(i => (new ts(t, i.targetRouterState, i.currentRouterState, e, n).activate(o), i)),
    ts = class {
        routeReuseStrategy;
        futureState;
        currState;
        forwardEvent;
        inputBindingEnabled;
        constructor(t, e, n, i, s) {
            this.routeReuseStrategy = t, this.futureState = e, this.currState = n, this.forwardEvent = i, this.inputBindingEnabled = s
        }
        activate(t) {
            let e = this.futureState._root,
                n = this.currState ? this.currState._root : null;
            this.deactivateChildRoutes(e, n, t), B0(this.futureState.root), this.activateChildRoutes(e, n, t)
        }
        deactivateChildRoutes(t, e, n) {
            let i = Bo(e);
            t.children.forEach(s => {
                let a = s.value.outlet;
                this.deactivateRoutes(s, i[a], n), delete i[a]
            }), Object.values(i).forEach(s => {
                this.deactivateRouteAndItsChildren(s, n)
            })
        }
        deactivateRoutes(t, e, n) {
            let i = t.value,
                s = e ? e.value : null;
            if (i === s)
                if (i.component) {
                    let a = n.getContext(i.outlet);
                    a && this.deactivateChildRoutes(t, e, a.children)
                } else this.deactivateChildRoutes(t, e, n);
            else s && this.deactivateRouteAndItsChildren(e, n)
        }
        deactivateRouteAndItsChildren(t, e) {
            t.value.component && this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e)
        }
        detachAndStoreRouteSubtree(t, e) {
            let n = e.getContext(t.value.outlet),
                i = n && t.value.component ? n.children : e,
                s = Bo(t);
            for (let a of Object.values(s)) this.deactivateRouteAndItsChildren(a, i);
            if (n && n.outlet) {
                let a = n.outlet.detach(),
                    r = n.children.onOutletDeactivated();
                this.routeReuseStrategy.store(t.value.snapshot, {
                    componentRef: a,
                    route: t,
                    contexts: r
                })
            }
        }
        deactivateRouteAndOutlet(t, e) {
            let n = e.getContext(t.value.outlet),
                i = n && t.value.component ? n.children : e,
                s = Bo(t);
            for (let a of Object.values(s)) this.deactivateRouteAndItsChildren(a, i);
            n && (n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated()), n.attachRef = null, n.route = null)
        }
        activateChildRoutes(t, e, n) {
            let i = Bo(e);
            t.children.forEach(s => {
                this.activateRoutes(s, i[s.value.outlet], n), this.forwardEvent(new X0(s.value.snapshot))
            }), t.children.length && this.forwardEvent(new W0(t.value.snapshot))
        }
        activateRoutes(t, e, n) {
            let i = t.value,
                s = e ? e.value : null;
            if (B0(i), i === s)
                if (i.component) {
                    let a = n.getOrCreateContext(i.outlet);
                    this.activateChildRoutes(t, e, a.children)
                } else this.activateChildRoutes(t, e, n);
            else if (i.component) {
                let a = n.getOrCreateContext(i.outlet);
                if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
                    let r = this.routeReuseStrategy.retrieve(i.snapshot);
                    this.routeReuseStrategy.store(i.snapshot, null), a.children.onOutletReAttached(r.contexts), a.attachRef = r.componentRef, a.route = r.route.value, a.outlet && a.outlet.attach(r.componentRef, r.route.value), B0(r.route.value), this.activateChildRoutes(t, null, a.children)
                } else a.attachRef = null, a.route = i, a.outlet && a.outlet.activateWith(i, a.injector), this.activateChildRoutes(t, null, a.children)
            } else this.activateChildRoutes(t, null, n)
        }
    },
    Gi = class {
        path;
        route;
        constructor(t) {
            this.path = t, this.route = this.path[this.path.length - 1]
        }
    },
    $o = class {
        component;
        route;
        constructor(t, e) {
            this.component = t, this.route = e
        }
    };

function U8(o, t, e) {
    let n = o._root,
        i = t ? t._root : null;
    return Mn(n, i, e, [n.value])
}

function q8(o) {
    let t = o.routeConfig ? o.routeConfig.canActivateChild : null;
    return !t || t.length === 0 ? null : {
        node: o,
        guards: t
    }
}

function Vo(o, t) {
    let e = Symbol(),
        n = t.get(o, e);
    return n === e ? typeof o == "function" && !Mr(o) ? o : t.get(o) : n
}

function Mn(o, t, e, n, i = {
    canDeactivateChecks: [],
    canActivateChecks: []
}) {
    let s = Bo(t);
    return o.children.forEach(a => {
        W8(a, s[a.value.outlet], e, n.concat([a.value]), i), delete s[a.value.outlet]
    }), Object.entries(s).forEach(([a, r]) => zn(r, e.getContext(a), i)), i
}

function W8(o, t, e, n, i = {
    canDeactivateChecks: [],
    canActivateChecks: []
}) {
    let s = o.value,
        a = t ? t.value : null,
        r = e ? e.getContext(o.value.outlet) : null;
    if (a && s.routeConfig === a.routeConfig) {
        let l = G8(a, s, s.routeConfig.runGuardsAndResolvers);
        l ? i.canActivateChecks.push(new Gi(n)) : (s.data = a.data, s._resolvedData = a._resolvedData), s.component ? Mn(o, t, r ? r.children : null, n, i) : Mn(o, t, e, n, i), l && r && r.outlet && r.outlet.isActivated && i.canDeactivateChecks.push(new $o(r.outlet.component, a))
    } else a && zn(t, r, i), i.canActivateChecks.push(new Gi(n)), s.component ? Mn(o, null, r ? r.children : null, n, i) : Mn(o, null, e, n, i);
    return i
}

function G8(o, t, e) {
    if (typeof e == "function") return e(o, t);
    switch (e) {
        case "pathParamsChange":
            return !Je(o.url, t.url);
        case "pathParamsOrQueryParamsChange":
            return !Je(o.url, t.url) || !re(o.queryParams, t.queryParams);
        case "always":
            return !0;
        case "paramsOrQueryParamsChange":
            return !Q0(o, t) || !re(o.queryParams, t.queryParams);
        case "paramsChange":
        default:
            return !Q0(o, t)
    }
}

function zn(o, t, e) {
    let n = Bo(o),
        i = o.value;
    Object.entries(n).forEach(([s, a]) => {
        i.component ? t ? zn(a, t.children.getContext(s), e) : zn(a, null, e) : zn(a, t, e)
    }), i.component ? t && t.outlet && t.outlet.isActivated ? e.canDeactivateChecks.push(new $o(t.outlet.component, i)) : e.canDeactivateChecks.push(new $o(null, i)) : e.canDeactivateChecks.push(new $o(null, i))
}

function _n(o) {
    return typeof o == "function"
}

function X8(o) {
    return typeof o == "boolean"
}

function Y8(o) {
    return o && _n(o.canLoad)
}

function Z8(o) {
    return o && _n(o.canActivate)
}

function K8(o) {
    return o && _n(o.canActivateChild)
}

function Q8(o) {
    return o && _n(o.canDeactivate)
}

function J8(o) {
    return o && _n(o.canMatch)
}

function sl(o) {
    return o instanceof mr || o ? .name === "EmptyError"
}
var $i = Symbol("INITIAL_VALUE");

function _o() {
    return wt(o => ve(o.map(t => t.pipe(oe(1), mi($i)))).pipe(J(t => {
        for (let e of t)
            if (e !== !0) {
                if (e === $i) return $i;
                if (e === !1 || t5(e)) return e
            }
        return !0
    }), fe(t => t !== $i), oe(1)))
}

function t5(o) {
    return to(o) || o instanceof Bn
}

function e5(o, t) {
    return Xt(e => {
        let {
            targetSnapshot: n,
            currentSnapshot: i,
            guards: {
                canActivateChecks: s,
                canDeactivateChecks: a
            }
        } = e;
        return a.length === 0 && s.length === 0 ? O(Q(y({}, e), {
            guardsResult: !0
        })) : o5(a, n, i, o).pipe(Xt(r => r && X8(r) ? n5(n, s, o, t) : O(r)), J(r => Q(y({}, e), {
            guardsResult: r
        })))
    })
}

function o5(o, t, e, n) {
    return Et(o).pipe(Xt(i => l5(i.component, i.route, e, t, n)), De(i => i !== !0, !0))
}

function n5(o, t, e, n) {
    return Et(t).pipe(ln(i => pi(s5(i.route.parent, n), i5(i.route, n), r5(o, i.path, e), a5(o, i.route, e))), De(i => i !== !0, !0))
}

function i5(o, t) {
    return o !== null && t && t(new G0(o)), O(!0)
}

function s5(o, t) {
    return o !== null && t && t(new q0(o)), O(!0)
}

function a5(o, t, e) {
    let n = t.routeConfig ? t.routeConfig.canActivate : null;
    if (!n || n.length === 0) return O(!0);
    let i = n.map(s => X1(() => {
        let a = Tn(t) ? ? e,
            r = Vo(s, a),
            l = Z8(r) ? r.canActivate(t, o) : ne(a, () => r(t, o));
        return Oe(l).pipe(De())
    }));
    return O(i).pipe(_o())
}

function r5(o, t, e) {
    let n = t[t.length - 1],
        s = t.slice(0, t.length - 1).reverse().map(a => q8(a)).filter(a => a !== null).map(a => X1(() => {
            let r = a.guards.map(l => {
                let c = Tn(a.node) ? ? e,
                    d = Vo(l, c),
                    p = K8(d) ? d.canActivateChild(n, o) : ne(c, () => d(n, o));
                return Oe(p).pipe(De())
            });
            return O(r).pipe(_o())
        }));
    return O(s).pipe(_o())
}

function l5(o, t, e, n, i) {
    let s = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
    if (!s || s.length === 0) return O(!0);
    let a = s.map(r => {
        let l = Tn(t) ? ? i,
            c = Vo(r, l),
            d = Q8(c) ? c.canDeactivate(o, t, e, n) : ne(l, () => c(o, t, e, n));
        return Oe(d).pipe(De())
    });
    return O(a).pipe(_o())
}

function c5(o, t, e, n) {
    let i = t.canLoad;
    if (i === void 0 || i.length === 0) return O(!0);
    let s = i.map(a => {
        let r = Vo(a, o),
            l = Y8(r) ? r.canLoad(t, e) : ne(o, () => r(t, e));
        return Oe(l)
    });
    return O(s).pipe(_o(), al(n))
}

function al(o) {
    return ur(Mt(t => {
        if (typeof t != "boolean") throw Wi(o, t)
    }), J(t => t === !0))
}

function d5(o, t, e, n) {
    let i = t.canMatch;
    if (!i || i.length === 0) return O(!0);
    let s = i.map(a => {
        let r = Vo(a, o),
            l = J8(r) ? r.canMatch(t, e) : ne(o, () => r(t, e));
        return Oe(l)
    });
    return O(s).pipe(_o(), al(n))
}
var Dn = class {
        segmentGroup;
        constructor(t) {
            this.segmentGroup = t || null
        }
    },
    jn = class extends Error {
        urlTree;
        constructor(t) {
            super(), this.urlTree = t
        }
    };

function Eo(o) {
    return rn(new Dn(o))
}

function h5(o) {
    return rn(new dt(4e3, !1))
}

function p5(o) {
    return rn(nl(!1, qt.GuardRejected))
}
var es = class {
        urlSerializer;
        urlTree;
        constructor(t, e) {
            this.urlSerializer = t, this.urlTree = e
        }
        lineralizeSegments(t, e) {
            let n = [],
                i = e.root;
            for (;;) {
                if (n = n.concat(i.segments), i.numberOfChildren === 0) return O(n);
                if (i.numberOfChildren > 1 || !i.children[W]) return h5(`${t.redirectTo}`);
                i = i.children[W]
            }
        }
        applyRedirectCommands(t, e, n, i, s) {
            if (typeof e != "string") {
                let r = e,
                    {
                        queryParams: l,
                        fragment: c,
                        routeConfig: d,
                        url: p,
                        outlet: g,
                        params: m,
                        data: f,
                        title: x
                    } = i,
                    k = ne(s, () => r({
                        params: m,
                        data: f,
                        queryParams: l,
                        fragment: c,
                        routeConfig: d,
                        url: p,
                        outlet: g,
                        title: x
                    }));
                if (k instanceof Ce) throw new jn(k);
                e = k
            }
            let a = this.applyRedirectCreateUrlTree(e, this.urlSerializer.parse(e), t, n);
            if (e[0] === "/") throw new jn(a);
            return a
        }
        applyRedirectCreateUrlTree(t, e, n, i) {
            let s = this.createSegmentGroup(t, e.root, n, i);
            return new Ce(s, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment)
        }
        createQueryParams(t, e) {
            let n = {};
            return Object.entries(t).forEach(([i, s]) => {
                if (typeof s == "string" && s[0] === ":") {
                    let r = s.substring(1);
                    n[i] = e[r]
                } else n[i] = s
            }), n
        }
        createSegmentGroup(t, e, n, i) {
            let s = this.createSegments(t, e.segments, n, i),
                a = {};
            return Object.entries(e.children).forEach(([r, l]) => {
                a[r] = this.createSegmentGroup(t, l, n, i)
            }), new nt(s, a)
        }
        createSegments(t, e, n, i) {
            return e.map(s => s.path[0] === ":" ? this.findPosParam(t, s, i) : this.findOrReturn(s, n))
        }
        findPosParam(t, e, n) {
            let i = n[e.path.substring(1)];
            if (!i) throw new dt(4001, !1);
            return i
        }
        findOrReturn(t, e) {
            let n = 0;
            for (let i of e) {
                if (i.path === t.path) return e.splice(n), i;
                n++
            }
            return t
        }
    },
    os = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {}
    };

function u5(o, t, e, n, i) {
    let s = rl(o, t, e);
    return s.matched ? (n = $8(t, n), d5(n, t, e, i).pipe(J(a => a === !0 ? s : y({}, os)))) : O(s)
}

function rl(o, t, e) {
    if (t.path === "**") return g5(e);
    if (t.path === "") return t.pathMatch === "full" && (o.hasChildren() || e.length > 0) ? y({}, os) : {
        matched: !0,
        consumedSegments: [],
        remainingSegments: e,
        parameters: {},
        positionalParamSegments: {}
    };
    let i = (t.matcher || l8)(e, o, t);
    if (!i) return y({}, os);
    let s = {};
    Object.entries(i.posParams ? ? {}).forEach(([r, l]) => {
        s[r] = l.path
    });
    let a = i.consumed.length > 0 ? y(y({}, s), i.consumed[i.consumed.length - 1].parameters) : s;
    return {
        matched: !0,
        consumedSegments: i.consumed,
        remainingSegments: e.slice(i.consumed.length),
        parameters: a,
        positionalParamSegments: i.posParams ? ? {}
    }
}

function g5(o) {
    return {
        matched: !0,
        parameters: o.length > 0 ? R2(o).parameters : {},
        consumedSegments: o,
        remainingSegments: [],
        positionalParamSegments: {}
    }
}

function H2(o, t, e, n) {
    return e.length > 0 && f5(o, e, n) ? {
        segmentGroup: new nt(t, v5(n, new nt(e, o.children))),
        slicedSegments: []
    } : e.length === 0 && w5(o, e, n) ? {
        segmentGroup: new nt(o.segments, m5(o, e, n, o.children)),
        slicedSegments: e
    } : {
        segmentGroup: new nt(o.segments, o.children),
        slicedSegments: e
    }
}

function m5(o, t, e, n) {
    let i = {};
    for (let s of e)
        if (Xi(o, t, s) && !n[te(s)]) {
            let a = new nt([], {});
            i[te(s)] = a
        }
    return y(y({}, n), i)
}

function v5(o, t) {
    let e = {};
    e[W] = t;
    for (let n of o)
        if (n.path === "" && te(n) !== W) {
            let i = new nt([], {});
            e[te(n)] = i
        }
    return e
}

function f5(o, t, e) {
    return e.some(n => Xi(o, t, n) && te(n) !== W)
}

function w5(o, t, e) {
    return e.some(n => Xi(o, t, n))
}

function Xi(o, t, e) {
    return (o.hasChildren() || t.length > 0) && e.pathMatch === "full" ? !1 : e.path === ""
}

function x5(o, t, e) {
    return t.length === 0 && !o.children[e]
}
var ns = class {};

function b5(o, t, e, n, i, s, a = "emptyOnly") {
    return new is(o, t, e, n, i, a, s).recognize()
}
var k5 = 31,
    is = class {
        injector;
        configLoader;
        rootComponentType;
        config;
        urlTree;
        paramsInheritanceStrategy;
        urlSerializer;
        applyRedirects;
        absoluteRedirectCount = 0;
        allowRedirects = !0;
        constructor(t, e, n, i, s, a, r) {
            this.injector = t, this.configLoader = e, this.rootComponentType = n, this.config = i, this.urlTree = s, this.paramsInheritanceStrategy = a, this.urlSerializer = r, this.applyRedirects = new es(this.urlSerializer, this.urlTree)
        }
        noMatchError(t) {
            return new dt(4002, `'${t.segmentGroup}'`)
        }
        recognize() {
            let t = H2(this.urlTree.root, [], [], this.config).segmentGroup;
            return this.match(t).pipe(J(({
                children: e,
                rootSnapshot: n
            }) => {
                let i = new Ut(n, e),
                    s = new qi("", i),
                    a = A8(n, [], this.urlTree.queryParams, this.urlTree.fragment);
                return a.queryParams = this.urlTree.queryParams, s.url = this.urlSerializer.serialize(a), {
                    state: s,
                    tree: a
                }
            }))
        }
        match(t) {
            let e = new jo([], Object.freeze({}), Object.freeze(y({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), W, this.rootComponentType, null, {});
            return this.processSegmentGroup(this.injector, this.config, t, W, e).pipe(J(n => ({
                children: n,
                rootSnapshot: e
            })), Be(n => {
                if (n instanceof jn) return this.urlTree = n.urlTree, this.match(n.urlTree.root);
                throw n instanceof Dn ? this.noMatchError(n) : n
            }))
        }
        processSegmentGroup(t, e, n, i, s) {
            return n.segments.length === 0 && n.hasChildren() ? this.processChildren(t, e, n, s) : this.processSegment(t, e, n, n.segments, i, !0, s).pipe(J(a => a instanceof Ut ? [a] : []))
        }
        processChildren(t, e, n, i) {
            let s = [];
            for (let a of Object.keys(n.children)) a === "primary" ? s.unshift(a) : s.push(a);
            return Et(s).pipe(ln(a => {
                let r = n.children[a],
                    l = H8(e, a);
                return this.processSegmentGroup(t, l, r, a, i)
            }), br((a, r) => (a.push(...r), a)), Y1(null), wr(), Xt(a => {
                if (a === null) return Eo(n);
                let r = ll(a);
                return y5(r), O(r)
            }))
        }
        processSegment(t, e, n, i, s, a, r) {
            return Et(e).pipe(ln(l => this.processSegmentAgainstRoute(l._injector ? ? t, e, l, n, i, s, a, r).pipe(Be(c => {
                if (c instanceof Dn) return O(null);
                throw c
            }))), De(l => !!l), Be(l => {
                if (sl(l)) return x5(n, i, s) ? O(new ns) : Eo(n);
                throw l
            }))
        }
        processSegmentAgainstRoute(t, e, n, i, s, a, r, l) {
            return te(n) !== a && (a === W || !Xi(i, s, n)) ? Eo(i) : n.redirectTo === void 0 ? this.matchSegmentAgainstRoute(t, i, n, s, a, l) : this.allowRedirects && r ? this.expandSegmentAgainstRouteUsingRedirect(t, i, e, n, s, a, l) : Eo(i)
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, n, i, s, a, r) {
            let {
                matched: l,
                parameters: c,
                consumedSegments: d,
                positionalParamSegments: p,
                remainingSegments: g
            } = rl(e, i, s);
            if (!l) return Eo(e);
            typeof i.redirectTo == "string" && i.redirectTo[0] === "/" && (this.absoluteRedirectCount++, this.absoluteRedirectCount > k5 && (this.allowRedirects = !1));
            let m = new jo(s, c, Object.freeze(y({}, this.urlTree.queryParams)), this.urlTree.fragment, T2(i), te(i), i.component ? ? i._loadedComponent ? ? null, i, _2(i)),
                f = Ui(m, r, this.paramsInheritanceStrategy);
            m.params = Object.freeze(f.params), m.data = Object.freeze(f.data);
            let x = this.applyRedirects.applyRedirectCommands(d, i.redirectTo, p, m, t);
            return this.applyRedirects.lineralizeSegments(i, x).pipe(Xt(k => this.processSegment(t, n, e, k.concat(g), a, !1, r)))
        }
        matchSegmentAgainstRoute(t, e, n, i, s, a) {
            let r = u5(e, n, i, t, this.urlSerializer);
            return n.path === "**" && (e.children = {}), r.pipe(wt(l => l.matched ? (t = n._injector ? ? t, this.getChildConfig(t, n, i).pipe(wt(({
                routes: c
            }) => {
                let d = n._loadedInjector ? ? t,
                    {
                        parameters: p,
                        consumedSegments: g,
                        remainingSegments: m
                    } = l,
                    f = new jo(g, p, Object.freeze(y({}, this.urlTree.queryParams)), this.urlTree.fragment, T2(n), te(n), n.component ? ? n._loadedComponent ? ? null, n, _2(n)),
                    x = Ui(f, a, this.paramsInheritanceStrategy);
                f.params = Object.freeze(x.params), f.data = Object.freeze(x.data);
                let {
                    segmentGroup: k,
                    slicedSegments: B
                } = H2(e, g, m, c);
                if (B.length === 0 && k.hasChildren()) return this.processChildren(d, c, k, f).pipe(J(D => new Ut(f, D)));
                if (c.length === 0 && B.length === 0) return O(new Ut(f, []));
                let j = te(n) === s;
                return this.processSegment(d, c, k, B, j ? W : s, !0, f).pipe(J(D => new Ut(f, D instanceof Ut ? [D] : [])))
            }))) : Eo(e)))
        }
        getChildConfig(t, e, n) {
            return e.children ? O({
                routes: e.children,
                injector: t
            }) : e.loadChildren ? e._loadedRoutes !== void 0 ? O({
                routes: e._loadedRoutes,
                injector: e._loadedInjector
            }) : c5(t, e, n, this.urlSerializer).pipe(Xt(i => i ? this.configLoader.loadChildren(t, e).pipe(Mt(s => {
                e._loadedRoutes = s.routes, e._loadedInjector = s.injector
            })) : p5(e))) : O({
                routes: [],
                injector: t
            })
        }
    };

function y5(o) {
    o.sort((t, e) => t.value.outlet === W ? -1 : e.value.outlet === W ? 1 : t.value.outlet.localeCompare(e.value.outlet))
}

function M5(o) {
    let t = o.value.routeConfig;
    return t && t.path === ""
}

function ll(o) {
    let t = [],
        e = new Set;
    for (let n of o) {
        if (!M5(n)) {
            t.push(n);
            continue
        }
        let i = t.find(s => n.value.routeConfig === s.value.routeConfig);
        i !== void 0 ? (i.children.push(...n.children), e.add(i)) : t.push(n)
    }
    for (let n of e) {
        let i = ll(n.children);
        t.push(new Ut(n.value, i))
    }
    return t.filter(n => !e.has(n))
}

function T2(o) {
    return o.data || {}
}

function _2(o) {
    return o.resolve || {}
}

function C5(o, t, e, n, i, s) {
    return Xt(a => b5(o, t, e, n, a.extractedUrl, i, s).pipe(J(({
        state: r,
        tree: l
    }) => Q(y({}, a), {
        targetSnapshot: r,
        urlAfterRedirects: l
    }))))
}

function z5(o, t) {
    return Xt(e => {
        let {
            targetSnapshot: n,
            guards: {
                canActivateChecks: i
            }
        } = e;
        if (!i.length) return O(e);
        let s = new Set(i.map(l => l.route)),
            a = new Set;
        for (let l of s)
            if (!a.has(l))
                for (let c of cl(l)) a.add(c);
        let r = 0;
        return Et(a).pipe(ln(l => s.has(l) ? S5(l, n, o, t) : (l.data = Ui(l, l.parent, o).resolve, O(void 0))), Mt(() => r++), Z1(1), Xt(l => r === a.size ? O(e) : Jt))
    })
}

function cl(o) {
    let t = o.children.map(e => cl(e)).flat();
    return [o, ...t]
}

function S5(o, t, e, n) {
    let i = o.routeConfig,
        s = o._resolve;
    return i ? .title !== void 0 && !el(i) && (s[$n] = i.title), A5(s, o, t, n).pipe(J(a => (o._resolvedData = a, o.data = Ui(o, o.parent, e).resolve, null)))
}

function A5(o, t, e, n) {
    let i = $0(o);
    if (i.length === 0) return O({});
    let s = {};
    return Et(i).pipe(Xt(a => I5(o[a], t, e, n).pipe(De(), Mt(r => {
        if (r instanceof Bn) throw Wi(new Sn, r);
        s[a] = r
    }))), Z1(1), J(() => s), Be(a => sl(a) ? Jt : rn(a)))
}

function I5(o, t, e, n) {
    let i = Tn(t) ? ? n,
        s = Vo(o, i),
        a = s.resolve ? s.resolve(t, e) : ne(i, () => s(t, e));
    return Oe(a)
}

function D0(o) {
    return wt(t => {
        let e = o(t);
        return e ? Et(e).pipe(J(() => t)) : O(t)
    })
}
var dl = (() => {
        class o {
            buildTitle(e) {
                let n, i = e.root;
                for (; i !== void 0;) n = this.getResolvedTitleForRoute(i) ? ? n, i = i.children.find(s => s.outlet === W);
                return n
            }
            getResolvedTitleForRoute(e) {
                return e.data[$n]
            }
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: () => I(L5),
                providedIn: "root"
            })
        }
        return o
    })(),
    L5 = (() => {
        class o extends dl {
            title;
            constructor(e) {
                super(), this.title = e
            }
            updateTitle(e) {
                let n = this.buildTitle(e);
                n !== void 0 && this.title.setTitle(n)
            }
            static\ u0275fac = function(n) {
                return new(n || o)(X(E2))
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })(),
    ls = new tt("", {
        providedIn: "root",
        factory: () => ({})
    }),
    E5 = (() => {
        class o {
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275cmp = P({
                type: o,
                selectors: [
                    ["ng-component"]
                ],
                exportAs: ["emptyRouterOutlet"],
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && bi(0, "router-outlet")
                },
                dependencies: [V8],
                encapsulation: 2
            })
        }
        return o
    })();

function cs(o) {
    let t = o.children && o.children.map(cs),
        e = t ? Q(y({}, o), {
            children: t
        }) : y({}, o);
    return !e.component && !e.loadComponent && (t || e.loadChildren) && e.outlet && e.outlet !== W && (e.component = E5), e
}
var ds = new tt(""),
    B5 = (() => {
        class o {
            componentLoaders = new WeakMap;
            childrenLoaders = new WeakMap;
            onLoadStartListener;
            onLoadEndListener;
            compiler = I(l0);
            loadComponent(e) {
                if (this.componentLoaders.get(e)) return this.componentLoaders.get(e);
                if (e._loadedComponent) return O(e._loadedComponent);
                this.onLoadStartListener && this.onLoadStartListener(e);
                let n = Oe(e.loadComponent()).pipe(J(hl), Mt(s => {
                        this.onLoadEndListener && this.onLoadEndListener(e), e._loadedComponent = s
                    }), gi(() => {
                        this.componentLoaders.delete(e)
                    })),
                    i = new G1(n, () => new gt).pipe(W1());
                return this.componentLoaders.set(e, i), i
            }
            loadChildren(e, n) {
                if (this.childrenLoaders.get(n)) return this.childrenLoaders.get(n);
                if (n._loadedRoutes) return O({
                    routes: n._loadedRoutes,
                    injector: n._loadedInjector
                });
                this.onLoadStartListener && this.onLoadStartListener(n);
                let s = D5(n, this.compiler, e, this.onLoadEndListener).pipe(gi(() => {
                        this.childrenLoaders.delete(n)
                    })),
                    a = new G1(s, () => new gt).pipe(W1());
                return this.childrenLoaders.set(n, a), a
            }
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })();

function D5(o, t, e, n) {
    return Oe(o.loadChildren()).pipe(J(hl), Xt(i => i instanceof Rr || Array.isArray(i) ? O(i) : Et(t.compileModuleAsync(i))), J(i => {
        n && n(o);
        let s, a, r = !1;
        return Array.isArray(i) ? (a = i, r = !0) : (s = i.create(e).injector, a = s.get(ds, [], {
            optional: !0,
            self: !0
        }).flat()), {
            routes: a.map(cs),
            injector: s
        }
    }))
}

function j5(o) {
    return o && typeof o == "object" && "default" in o
}

function hl(o) {
    return j5(o) ? o.default : o
}
var hs = (() => {
        class o {
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: () => I($5),
                providedIn: "root"
            })
        }
        return o
    })(),
    $5 = (() => {
        class o {
            shouldProcessUrl(e) {
                return !0
            }
            extract(e) {
                return e
            }
            merge(e, n) {
                return e
            }
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })(),
    H5 = new tt("");
var T5 = new tt(""),
    _5 = (() => {
        class o {
            currentNavigation = null;
            currentTransition = null;
            lastSuccessfulNavigation = null;
            events = new gt;
            transitionAbortSubject = new gt;
            configLoader = I(B5);
            environmentInjector = I(Nt);
            destroyRef = I(we);
            urlSerializer = I(Hn);
            rootContexts = I(no);
            location = I(ke);
            inputBindingEnabled = I(rs, {
                optional: !0
            }) !== null;
            titleStrategy = I(dl);
            options = I(ls, {
                optional: !0
            }) || {};
            paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
            urlHandlingStrategy = I(hs);
            createViewTransition = I(H5, {
                optional: !0
            });
            navigationErrorHandler = I(T5, {
                optional: !0
            });
            navigationId = 0;
            get hasRequestedNavigation() {
                return this.navigationId !== 0
            }
            transitions;
            afterPreactivation = () => O(void 0);
            rootComponentType = null;
            destroyed = !1;
            constructor() {
                let e = i => this.events.next(new N0(i)),
                    n = i => this.events.next(new U0(i));
                this.configLoader.onLoadEndListener = n, this.configLoader.onLoadStartListener = e, this.destroyRef.onDestroy(() => {
                    this.destroyed = !0
                })
            }
            complete() {
                this.transitions ? .complete()
            }
            handleNavigationRequest(e) {
                let n = ++this.navigationId;
                this.transitions ? .next(Q(y({}, e), {
                    extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl),
                    targetSnapshot: null,
                    targetRouterState: null,
                    guards: {
                        canActivateChecks: [],
                        canDeactivateChecks: []
                    },
                    guardsResult: null,
                    id: n
                }))
            }
            setupNavigations(e) {
                return this.transitions = new St(null), this.transitions.pipe(fe(n => n !== null), wt(n => {
                    let i = !1,
                        s = !1;
                    return O(n).pipe(wt(a => {
                        if (this.navigationId > n.id) return this.cancelNavigationTransition(n, "", qt.SupersededByNewNavigation), Jt;
                        this.currentTransition = n, this.currentNavigation = {
                            id: a.id,
                            initialUrl: a.rawUrl,
                            extractedUrl: a.extractedUrl,
                            targetBrowserUrl: typeof a.extras.browserUrl == "string" ? this.urlSerializer.parse(a.extras.browserUrl) : a.extras.browserUrl,
                            trigger: a.source,
                            extras: a.extras,
                            previousNavigation: this.lastSuccessfulNavigation ? Q(y({}, this.lastSuccessfulNavigation), {
                                previousNavigation: null
                            }) : null
                        };
                        let r = !e.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl(),
                            l = a.extras.onSameUrlNavigation ? ? e.onSameUrlNavigation;
                        if (!r && l !== "reload") {
                            let c = "";
                            return this.events.next(new oo(a.id, this.urlSerializer.serialize(a.rawUrl), c, V0.IgnoredSameUrlNavigation)), a.resolve(!1), Jt
                        }
                        if (this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl)) return O(a).pipe(wt(c => (this.events.next(new eo(c.id, this.urlSerializer.serialize(c.extractedUrl), c.source, c.restoredState)), c.id !== this.navigationId ? Jt : Promise.resolve(c))), C5(this.environmentInjector, this.configLoader, this.rootComponentType, e.config, this.urlSerializer, this.paramsInheritanceStrategy), Mt(c => {
                            n.targetSnapshot = c.targetSnapshot, n.urlAfterRedirects = c.urlAfterRedirects, this.currentNavigation = Q(y({}, this.currentNavigation), {
                                finalUrl: c.urlAfterRedirects
                            });
                            let d = new Pi(c.id, this.urlSerializer.serialize(c.extractedUrl), this.urlSerializer.serialize(c.urlAfterRedirects), c.targetSnapshot);
                            this.events.next(d)
                        }));
                        if (r && this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)) {
                            let {
                                id: c,
                                extractedUrl: d,
                                source: p,
                                restoredState: g,
                                extras: m
                            } = a, f = new eo(c, this.urlSerializer.serialize(d), p, g);
                            this.events.next(f);
                            let x = J2(this.rootComponentType).snapshot;
                            return this.currentTransition = n = Q(y({}, a), {
                                targetSnapshot: x,
                                urlAfterRedirects: d,
                                extras: Q(y({}, m), {
                                    skipLocationChange: !1,
                                    replaceUrl: !1
                                })
                            }), this.currentNavigation.finalUrl = d, O(n)
                        } else {
                            let c = "";
                            return this.events.next(new oo(a.id, this.urlSerializer.serialize(a.extractedUrl), c, V0.IgnoredByUrlHandlingStrategy)), a.resolve(!1), Jt
                        }
                    }), Mt(a => {
                        let r = new O0(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot);
                        this.events.next(r)
                    }), J(a => (this.currentTransition = n = Q(y({}, a), {
                        guards: U8(a.targetSnapshot, a.currentSnapshot, this.rootContexts)
                    }), n)), e5(this.environmentInjector, a => this.events.next(a)), Mt(a => {
                        if (n.guardsResult = a.guardsResult, a.guardsResult && typeof a.guardsResult != "boolean") throw Wi(this.urlSerializer, a.guardsResult);
                        let r = new R0(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot, !!a.guardsResult);
                        this.events.next(r)
                    }), fe(a => a.guardsResult ? !0 : (this.cancelNavigationTransition(a, "", qt.GuardRejected), !1)), D0(a => {
                        if (a.guards.canActivateChecks.length !== 0) return O(a).pipe(Mt(r => {
                            let l = new P0(r.id, this.urlSerializer.serialize(r.extractedUrl), this.urlSerializer.serialize(r.urlAfterRedirects), r.targetSnapshot);
                            this.events.next(l)
                        }), wt(r => {
                            let l = !1;
                            return O(r).pipe(z5(this.paramsInheritanceStrategy, this.environmentInjector), Mt({
                                next: () => l = !0,
                                complete: () => {
                                    l || this.cancelNavigationTransition(r, "", qt.NoDataFromResolver)
                                }
                            }))
                        }), Mt(r => {
                            let l = new F0(r.id, this.urlSerializer.serialize(r.extractedUrl), this.urlSerializer.serialize(r.urlAfterRedirects), r.targetSnapshot);
                            this.events.next(l)
                        }))
                    }), D0(a => {
                        let r = l => {
                            let c = [];
                            l.routeConfig ? .loadComponent && !l.routeConfig._loadedComponent && c.push(this.configLoader.loadComponent(l.routeConfig).pipe(Mt(d => {
                                l.component = d
                            }), J(() => {})));
                            for (let d of l.children) c.push(...r(d));
                            return c
                        };
                        return ve(r(a.targetSnapshot.root)).pipe(Y1(null), oe(1))
                    }), D0(() => this.afterPreactivation()), wt(() => {
                        let {
                            currentSnapshot: a,
                            targetSnapshot: r
                        } = n, l = this.createViewTransition ? .(this.environmentInjector, a.root, r.root);
                        return l ? Et(l).pipe(J(() => n)) : O(n)
                    }), J(a => {
                        let r = O8(e.routeReuseStrategy, a.targetSnapshot, a.currentRouterState);
                        return this.currentTransition = n = Q(y({}, a), {
                            targetRouterState: r
                        }), this.currentNavigation.targetRouterState = r, n
                    }), Mt(() => {
                        this.events.next(new Ln)
                    }), N8(this.rootContexts, e.routeReuseStrategy, a => this.events.next(a), this.inputBindingEnabled), oe(1), Mt({
                        next: a => {
                            i = !0, this.lastSuccessfulNavigation = this.currentNavigation, this.events.next(new Ve(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects))), this.titleStrategy ? .updateTitle(a.targetRouterState.snapshot), a.resolve(!0)
                        },
                        complete: () => {
                            i = !0
                        }
                    }), wo(this.transitionAbortSubject.pipe(Mt(a => {
                        throw a
                    }))), gi(() => {
                        !i && !s && this.cancelNavigationTransition(n, "", qt.SupersededByNewNavigation), this.currentTransition ? .id === n.id && (this.currentNavigation = null, this.currentTransition = null)
                    }), Be(a => {
                        if (this.destroyed) return n.resolve(!1), Jt;
                        if (s = !0, il(a)) this.events.next(new Me(n.id, this.urlSerializer.serialize(n.extractedUrl), a.message, a.cancellationCode)), F8(a) ? this.events.next(new To(a.url, a.navigationBehaviorOptions)) : n.resolve(!1);
                        else {
                            let r = new In(n.id, this.urlSerializer.serialize(n.extractedUrl), a, n.targetSnapshot ? ? void 0);
                            try {
                                let l = ne(this.environmentInjector, () => this.navigationErrorHandler ? .(r));
                                if (l instanceof Bn) {
                                    let {
                                        message: c,
                                        cancellationCode: d
                                    } = Wi(this.urlSerializer, l);
                                    this.events.next(new Me(n.id, this.urlSerializer.serialize(n.extractedUrl), c, d)), this.events.next(new To(l.redirectTo, l.navigationBehaviorOptions))
                                } else throw this.events.next(r), a
                            } catch (l) {
                                this.options.resolveNavigationPromiseOnError ? n.resolve(!1) : n.reject(l)
                            }
                        }
                        return Jt
                    }))
                }))
            }
            cancelNavigationTransition(e, n, i) {
                let s = new Me(e.id, this.urlSerializer.serialize(e.extractedUrl), n, i);
                this.events.next(s), e.resolve(!1)
            }
            isUpdatingInternalState() {
                return this.currentTransition ? .extractedUrl.toString() !== this.currentTransition ? .currentUrlTree.toString()
            }
            isUpdatedBrowserUrl() {
                let e = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),
                    n = this.currentNavigation ? .targetBrowserUrl ? ? this.currentNavigation ? .extractedUrl;
                return e.toString() !== n ? .toString() && !this.currentNavigation ? .extras.skipLocationChange
            }
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })();

function V5(o) {
    return o !== Vi
}
var O5 = (() => {
        class o {
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: () => I(R5),
                providedIn: "root"
            })
        }
        return o
    })(),
    ss = class {
        shouldDetach(t) {
            return !1
        }
        store(t, e) {}
        shouldAttach(t) {
            return !1
        }
        retrieve(t) {
            return null
        }
        shouldReuseRoute(t, e) {
            return t.routeConfig === e.routeConfig
        }
    },
    R5 = (() => {
        class o extends ss {
            static\ u0275fac = (() => {
                let e;
                return function(i) {
                    return (e || (e = $e(o)))(i || o)
                }
            })();
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })(),
    pl = (() => {
        class o {
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: () => I(P5),
                providedIn: "root"
            })
        }
        return o
    })(),
    P5 = (() => {
        class o extends pl {
            location = I(ke);
            urlSerializer = I(Hn);
            options = I(ls, {
                optional: !0
            }) || {};
            canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
            urlHandlingStrategy = I(hs);
            urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
            currentUrlTree = new Ce;
            getCurrentUrlTree() {
                return this.currentUrlTree
            }
            rawUrlTree = this.currentUrlTree;
            getRawUrlTree() {
                return this.rawUrlTree
            }
            currentPageId = 0;
            lastSuccessfulId = -1;
            restoredState() {
                return this.location.getState()
            }
            get browserPageId() {
                return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState() ? .\u0275routerPageId ? ? this.currentPageId
            }
            routerState = J2(null);
            getRouterState() {
                return this.routerState
            }
            stateMemento = this.createStateMemento();
            createStateMemento() {
                return {
                    rawUrlTree: this.rawUrlTree,
                    currentUrlTree: this.currentUrlTree,
                    routerState: this.routerState
                }
            }
            registerNonRouterCurrentEntryChangeListener(e) {
                return this.location.subscribe(n => {
                    n.type === "popstate" && e(n.url, n.state)
                })
            }
            handleRouterEvent(e, n) {
                if (e instanceof eo) this.stateMemento = this.createStateMemento();
                else if (e instanceof oo) this.rawUrlTree = n.initialUrl;
                else if (e instanceof Pi) {
                    if (this.urlUpdateStrategy === "eager" && !n.extras.skipLocationChange) {
                        let i = this.urlHandlingStrategy.merge(n.finalUrl, n.initialUrl);
                        this.setBrowserUrl(n.targetBrowserUrl ? ? i, n)
                    }
                } else e instanceof Ln ? (this.currentUrlTree = n.finalUrl, this.rawUrlTree = this.urlHandlingStrategy.merge(n.finalUrl, n.initialUrl), this.routerState = n.targetRouterState, this.urlUpdateStrategy === "deferred" && !n.extras.skipLocationChange && this.setBrowserUrl(n.targetBrowserUrl ? ? this.rawUrlTree, n)) : e instanceof Me && (e.code === qt.GuardRejected || e.code === qt.NoDataFromResolver) ? this.restoreHistory(n) : e instanceof In ? this.restoreHistory(n, !0) : e instanceof Ve && (this.lastSuccessfulId = e.id, this.currentPageId = this.browserPageId)
            }
            setBrowserUrl(e, n) {
                let i = e instanceof Ce ? this.urlSerializer.serialize(e) : e;
                if (this.location.isCurrentPathEqualTo(i) || n.extras.replaceUrl) {
                    let s = this.browserPageId,
                        a = y(y({}, n.extras.state), this.generateNgRouterState(n.id, s));
                    this.location.replaceState(i, "", a)
                } else {
                    let s = y(y({}, n.extras.state), this.generateNgRouterState(n.id, this.browserPageId + 1));
                    this.location.go(i, "", s)
                }
            }
            restoreHistory(e, n = !1) {
                if (this.canceledNavigationResolution === "computed") {
                    let i = this.browserPageId,
                        s = this.currentPageId - i;
                    s !== 0 ? this.location.historyGo(s) : this.currentUrlTree === e.finalUrl && s === 0 && (this.resetState(e), this.resetUrlToCurrentUrlTree())
                } else this.canceledNavigationResolution === "replace" && (n && this.resetState(e), this.resetUrlToCurrentUrlTree())
            }
            resetState(e) {
                this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e.finalUrl ? ? this.rawUrlTree)
            }
            resetUrlToCurrentUrlTree() {
                this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
            }
            generateNgRouterState(e, n) {
                return this.canceledNavigationResolution === "computed" ? {
                    navigationId: e,
                    \u0275routerPageId: n
                } : {
                    navigationId: e
                }
            }
            static\ u0275fac = (() => {
                let e;
                return function(i) {
                    return (e || (e = $e(o)))(i || o)
                }
            })();
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })();

function F5(o, t) {
    o.events.pipe(fe(e => e instanceof Ve || e instanceof Me || e instanceof In || e instanceof oo), J(e => e instanceof Ve || e instanceof oo ? 0 : (e instanceof Me ? e.code === qt.Redirect || e.code === qt.SupersededByNewNavigation : !1) ? 2 : 1), fe(e => e !== 2), oe(1)).subscribe(() => {
        t()
    })
}
var N5 = {
        paths: "exact",
        fragment: "ignored",
        matrixParams: "ignored",
        queryParams: "exact"
    },
    U5 = {
        paths: "subset",
        fragment: "ignored",
        matrixParams: "ignored",
        queryParams: "subset"
    },
    le = (() => {
        class o {
            get currentUrlTree() {
                return this.stateManager.getCurrentUrlTree()
            }
            get rawUrlTree() {
                return this.stateManager.getRawUrlTree()
            }
            disposed = !1;
            nonRouterCurrentEntryChangeSubscription;
            console = I(n0);
            stateManager = I(pl);
            options = I(ls, {
                optional: !0
            }) || {};
            pendingTasks = I(zr);
            urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
            navigationTransitions = I(_5);
            urlSerializer = I(Hn);
            location = I(ke);
            urlHandlingStrategy = I(hs);
            _events = new gt;
            get events() {
                return this._events
            }
            get routerState() {
                return this.stateManager.getRouterState()
            }
            navigated = !1;
            routeReuseStrategy = I(O5);
            onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
            config = I(ds, {
                optional: !0
            }) ? .flat() ? ? [];
            componentInputBindingEnabled = !!I(rs, {
                optional: !0
            });
            constructor() {
                this.resetConfig(this.config), this.navigationTransitions.setupNavigations(this).subscribe({
                    error: e => {
                        this.console.warn(e)
                    }
                }), this.subscribeToNavigationEvents()
            }
            eventsSubscription = new pr;
            subscribeToNavigationEvents() {
                let e = this.navigationTransitions.events.subscribe(n => {
                    try {
                        let i = this.navigationTransitions.currentTransition,
                            s = this.navigationTransitions.currentNavigation;
                        if (i !== null && s !== null) {
                            if (this.stateManager.handleRouterEvent(n, s), n instanceof Me && n.code !== qt.Redirect && n.code !== qt.SupersededByNewNavigation) this.navigated = !0;
                            else if (n instanceof Ve) this.navigated = !0;
                            else if (n instanceof To) {
                                let a = n.navigationBehaviorOptions,
                                    r = this.urlHandlingStrategy.merge(n.url, i.currentRawUrl),
                                    l = y({
                                        browserUrl: i.extras.browserUrl,
                                        info: i.extras.info,
                                        skipLocationChange: i.extras.skipLocationChange,
                                        replaceUrl: i.extras.replaceUrl || this.urlUpdateStrategy === "eager" || V5(i.source)
                                    }, a);
                                this.scheduleNavigation(r, Vi, null, l, {
                                    resolve: i.resolve,
                                    reject: i.reject,
                                    promise: i.promise
                                })
                            }
                        }
                        W5(n) && this._events.next(n)
                    } catch (i) {
                        this.navigationTransitions.transitionAbortSubject.next(i)
                    }
                });
                this.eventsSubscription.add(e)
            }
            resetRootComponentType(e) {
                this.routerState.root.component = e, this.navigationTransitions.rootComponentType = e
            }
            initialNavigation() {
                this.setUpLocationChangeListener(), this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), Vi, this.stateManager.restoredState())
            }
            setUpLocationChangeListener() {
                this.nonRouterCurrentEntryChangeSubscription ? ? = this.stateManager.registerNonRouterCurrentEntryChangeListener((e, n) => {
                    setTimeout(() => {
                        this.navigateToSyncWithBrowser(e, "popstate", n)
                    }, 0)
                })
            }
            navigateToSyncWithBrowser(e, n, i) {
                let s = {
                        replaceUrl: !0
                    },
                    a = i ? .navigationId ? i : null;
                if (i) {
                    let l = y({}, i);
                    delete l.navigationId, delete l.\u0275routerPageId, Object.keys(l).length !== 0 && (s.state = l)
                }
                let r = this.parseUrl(e);
                this.scheduleNavigation(r, n, a, s)
            }
            get url() {
                return this.serializeUrl(this.currentUrlTree)
            }
            getCurrentNavigation() {
                return this.navigationTransitions.currentNavigation
            }
            get lastSuccessfulNavigation() {
                return this.navigationTransitions.lastSuccessfulNavigation
            }
            resetConfig(e) {
                this.config = e.map(cs), this.navigated = !1
            }
            ngOnDestroy() {
                this.dispose()
            }
            dispose() {
                this._events.unsubscribe(), this.navigationTransitions.complete(), this.nonRouterCurrentEntryChangeSubscription && (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(), this.nonRouterCurrentEntryChangeSubscription = void 0), this.disposed = !0, this.eventsSubscription.unsubscribe()
            }
            createUrlTree(e, n = {}) {
                let {
                    relativeTo: i,
                    queryParams: s,
                    fragment: a,
                    queryParamsHandling: r,
                    preserveFragment: l
                } = n, c = l ? this.currentUrlTree.fragment : a, d = null;
                switch (r ? ? this.options.defaultQueryParamsHandling) {
                    case "merge":
                        d = y(y({}, this.currentUrlTree.queryParams), s);
                        break;
                    case "preserve":
                        d = this.currentUrlTree.queryParams;
                        break;
                    default:
                        d = s || null
                }
                d !== null && (d = this.removeEmptyProps(d));
                let p;
                try {
                    let g = i ? i.snapshot : this.routerState.snapshot.root;
                    p = Y2(g)
                } catch {
                    (typeof e[0] != "string" || e[0][0] !== "/") && (e = []), p = this.currentUrlTree.root
                }
                return Z2(p, e, d, c ? ? null)
            }
            navigateByUrl(e, n = {
                skipLocationChange: !1
            }) {
                let i = to(e) ? e : this.parseUrl(e),
                    s = this.urlHandlingStrategy.merge(i, this.rawUrlTree);
                return this.scheduleNavigation(s, Vi, null, n)
            }
            navigate(e, n = {
                skipLocationChange: !1
            }) {
                return q5(e), this.navigateByUrl(this.createUrlTree(e, n), n)
            }
            serializeUrl(e) {
                return this.urlSerializer.serialize(e)
            }
            parseUrl(e) {
                try {
                    return this.urlSerializer.parse(e)
                } catch {
                    return this.urlSerializer.parse("/")
                }
            }
            isActive(e, n) {
                let i;
                if (n === !0 ? i = y({}, N5) : n === !1 ? i = y({}, U5) : i = n, to(e)) return B2(this.currentUrlTree, e, i);
                let s = this.parseUrl(e);
                return B2(this.currentUrlTree, s, i)
            }
            removeEmptyProps(e) {
                return Object.entries(e).reduce((n, [i, s]) => (s != null && (n[i] = s), n), {})
            }
            scheduleNavigation(e, n, i, s, a) {
                if (this.disposed) return Promise.resolve(!1);
                let r, l, c;
                a ? (r = a.resolve, l = a.reject, c = a.promise) : c = new Promise((p, g) => {
                    r = p, l = g
                });
                let d = this.pendingTasks.add();
                return F5(this, () => {
                    queueMicrotask(() => this.pendingTasks.remove(d))
                }), this.navigationTransitions.handleNavigationRequest({
                    source: n,
                    restoredState: i,
                    currentUrlTree: this.currentUrlTree,
                    currentRawUrl: this.currentUrlTree,
                    rawUrl: e,
                    extras: s,
                    resolve: r,
                    reject: l,
                    promise: c,
                    currentSnapshot: this.routerState.snapshot,
                    currentRouterState: this.routerState
                }), c.catch(p => Promise.reject(p))
            }
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })();

function q5(o) {
    for (let t = 0; t < o.length; t++)
        if (o[t] == null) throw new dt(4008, !1)
}

function W5(o) {
    return !(o instanceof Ln) && !(o instanceof To)
}
var G5 = (() => {
    class o {
        router;
        route;
        tabIndexAttribute;
        renderer;
        el;
        locationStrategy;
        href = null;
        target;
        queryParams;
        fragment;
        queryParamsHandling;
        state;
        info;
        relativeTo;
        isAnchorElement;
        subscription;
        onChanges = new gt;
        constructor(e, n, i, s, a, r) {
            this.router = e, this.route = n, this.tabIndexAttribute = i, this.renderer = s, this.el = a, this.locationStrategy = r;
            let l = a.nativeElement.tagName ? .toLowerCase();
            this.isAnchorElement = l === "a" || l === "area", this.isAnchorElement ? this.subscription = e.events.subscribe(c => {
                c instanceof Ve && this.updateHref()
            }) : this.setTabIndexIfNotOnNativeEl("0")
        }
        preserveFragment = !1;
        skipLocationChange = !1;
        replaceUrl = !1;
        setTabIndexIfNotOnNativeEl(e) {
            this.tabIndexAttribute != null || this.isAnchorElement || this.applyAttributeValue("tabindex", e)
        }
        ngOnChanges(e) {
            this.isAnchorElement && this.updateHref(), this.onChanges.next(this)
        }
        routerLinkInput = null;
        set routerLink(e) {
            e == null ? (this.routerLinkInput = null, this.setTabIndexIfNotOnNativeEl(null)) : (to(e) ? this.routerLinkInput = e : this.routerLinkInput = Array.isArray(e) ? e : [e], this.setTabIndexIfNotOnNativeEl("0"))
        }
        onClick(e, n, i, s, a) {
            let r = this.urlTree;
            if (r === null || this.isAnchorElement && (e !== 0 || n || i || s || a || typeof this.target == "string" && this.target != "_self")) return !0;
            let l = {
                skipLocationChange: this.skipLocationChange,
                replaceUrl: this.replaceUrl,
                state: this.state,
                info: this.info
            };
            return this.router.navigateByUrl(r, l), !this.isAnchorElement
        }
        ngOnDestroy() {
            this.subscription ? .unsubscribe()
        }
        updateHref() {
            let e = this.urlTree;
            this.href = e !== null && this.locationStrategy ? this.locationStrategy ? .prepareExternalUrl(this.router.serializeUrl(e)) : null;
            let n = this.href === null ? null : Vr(this.href, this.el.nativeElement.tagName.toLowerCase(), "href");
            this.applyAttributeValue("href", n)
        }
        applyAttributeValue(e, n) {
            let i = this.renderer,
                s = this.el.nativeElement;
            n !== null ? i.setAttribute(s, e, n) : i.removeAttribute(s, e)
        }
        get urlTree() {
            return this.routerLinkInput === null ? null : to(this.routerLinkInput) ? this.routerLinkInput : this.router.createUrlTree(this.routerLinkInput, {
                relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: this.preserveFragment
            })
        }
        static\ u0275fac = function(n) {
            return new(n || o)(v(le), v(Vt), He("tabindex"), v(Ue), v(H), v(ki))
        };
        static\ u0275dir = Ct({
            type: o,
            selectors: [
                ["", "routerLink", ""]
            ],
            hostVars: 1,
            hostBindings: function(n, i) {
                n & 1 && Zt("click", function(a) {
                    return i.onClick(a.button, a.ctrlKey, a.shiftKey, a.altKey, a.metaKey)
                }), n & 2 && i0("target", i.target)
            },
            inputs: {
                target: "target",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                state: "state",
                info: "info",
                relativeTo: "relativeTo",
                preserveFragment: [2, "preserveFragment", "preserveFragment", mn],
                skipLocationChange: [2, "skipLocationChange", "skipLocationChange", mn],
                replaceUrl: [2, "replaceUrl", "replaceUrl", mn],
                routerLink: "routerLink"
            },
            features: [je]
        })
    }
    return o
})();
var X5 = new tt("");

function Iw(o, ...t) {
    return Ft([{
            provide: ds,
            multi: !0,
            useValue: o
        },
        [], {
            provide: Vt,
            useFactory: Y5,
            deps: [le]
        }, {
            provide: Ur,
            multi: !0,
            useFactory: Z5
        },
        t.map(e => e.\u0275providers)
    ])
}

function Y5(o) {
    return o.routerState.root
}

function Z5() {
    let o = I(kt);
    return t => {
        let e = o.get(pn);
        if (t !== e.components[0]) return;
        let n = o.get(le),
            i = o.get(K5);
        o.get(Q5) === 1 && n.initialNavigation(), o.get(J5, null, K1.Optional) ? .setUpPreloading(), o.get(X5, null, K1.Optional) ? .init(), n.resetRootComponentType(e.componentTypes[0]), i.closed || (i.next(), i.complete(), i.unsubscribe())
    }
}
var K5 = new tt("", {
        factory: () => new gt
    }),
    Q5 = new tt("", {
        providedIn: "root",
        factory: () => 1
    });
var J5 = new tt("");
var Qt = (o, t, e, n, i) => ed(o[1], t[1], e[1], n[1], i).map(s => td(o[0], t[0], e[0], n[0], s)),
    td = (o, t, e, n, i) => {
        let s = 3 * t * Math.pow(i - 1, 2),
            a = -3 * e * i + 3 * e + n * i,
            r = o * Math.pow(i - 1, 3);
        return i * (s + i * a) - r
    },
    ed = (o, t, e, n, i) => (o -= i, t -= i, e -= i, n -= i, nd(n - 3 * e + 3 * t - o, 3 * e - 6 * t + 3 * o, 3 * t - 3 * o, o).filter(a => a >= 0 && a <= 1)),
    od = (o, t, e) => {
        let n = t * t - 4 * o * e;
        return n < 0 ? [] : [(-t + Math.sqrt(n)) / (2 * o), (-t - Math.sqrt(n)) / (2 * o)]
    },
    nd = (o, t, e, n) => {
        if (o === 0) return od(t, e, n);
        t /= o, e /= o, n /= o;
        let i = (3 * e - t * t) / 3,
            s = (2 * t * t * t - 9 * t * e + 27 * n) / 27;
        if (i === 0) return [Math.pow(-s, .3333333333333333)];
        if (s === 0) return [Math.sqrt(-i), -Math.sqrt(-i)];
        let a = Math.pow(s / 2, 2) + Math.pow(i / 3, 3);
        if (a === 0) return [Math.pow(s / 2, .5) - t / 3];
        if (a > 0) return [Math.pow(-(s / 2) + Math.sqrt(a), .3333333333333333) - Math.pow(s / 2 + Math.sqrt(a), .3333333333333333) - t / 3];
        let r = Math.sqrt(Math.pow(-(i / 3), 3)),
            l = Math.acos(-(s / (2 * Math.sqrt(Math.pow(-(i / 3), 3))))),
            c = 2 * Math.pow(r, 1 / 3);
        return [c * Math.cos(l / 3) - t / 3, c * Math.cos((l + 2 * Math.PI) / 3) - t / 3, c * Math.cos((l + 4 * Math.PI) / 3) - t / 3]
    };
var it = (o, t) => t.closest(o) !== null,
    Z = (o, t) => typeof o == "string" && o.length > 0 ? Object.assign({
        "ion-color": !0,
        [`ion-color-${o}`]: !0
    }, t) : t,
    id = o => o !== void 0 ? (Array.isArray(o) ? o : o.split(" ")).filter(e => e != null).map(e => e.trim()).filter(e => e !== "") : [],
    Yi = o => {
        let t = {};
        return id(o).forEach(e => t[e] = !0), t
    },
    sd = /^[a-z][a-z0-9+\-.]*:/,
    ce = (o, t, e, n) => w(void 0, null, function*() {
        if (o != null && o[0] !== "#" && !sd.test(o)) {
            let i = document.querySelector("ion-router");
            if (i) return t ? .preventDefault(), i.push(o, e, n)
        }
        return !1
    });
var ps = o => F().duration(o ? 400 : 300),
    ad = o => {
        let t, e, n = o.width + 8,
            i = F(),
            s = F();
        o.isEndSide ? (t = n + "px", e = "0px") : (t = -n + "px", e = "0px"), i.addElement(o.menuInnerEl).fromTo("transform", `translateX(${t})`, `translateX(${e})`);
        let r = b(o) === "ios",
            l = r ? .2 : .25;
        return s.addElement(o.backdropEl).fromTo("opacity", .01, l), ps(r).addAnimation([i, s])
    },
    rd = o => {
        let t, e, n = b(o),
            i = o.width;
        o.isEndSide ? (t = -i + "px", e = i + "px") : (t = i + "px", e = -i + "px");
        let s = F().addElement(o.menuInnerEl).fromTo("transform", `translateX(${e})`, "translateX(0px)"),
            a = F().addElement(o.contentEl).fromTo("transform", "translateX(0px)", `translateX(${t})`),
            r = F().addElement(o.backdropEl).fromTo("opacity", .01, .32);
        return ps(n === "ios").addAnimation([s, a, r])
    },
    ld = o => {
        let t = b(o),
            e = o.width * (o.isEndSide ? -1 : 1) + "px",
            n = F().addElement(o.contentEl).fromTo("transform", "translateX(0px)", `translateX(${e})`);
        return ps(t === "ios").addAnimation(n)
    },
    cd = () => {
        let o = new Map,
            t = [],
            e = z => w(void 0, null, function*() {
                let A = yield c(z, !0);
                return A ? A.open() : !1
            }),
            n = z => w(void 0, null, function*() {
                let A = yield z !== void 0 ? c(z, !0) : d();
                return A !== void 0 ? A.close() : !1
            }),
            i = z => w(void 0, null, function*() {
                let A = yield c(z, !0);
                return A ? A.toggle() : !1
            }),
            s = (z, A) => w(void 0, null, function*() {
                let R = yield c(A);
                return R && (R.disabled = !z), R
            }),
            a = (z, A) => w(void 0, null, function*() {
                let R = yield c(A);
                return R && (R.swipeGesture = z), R
            }),
            r = z => w(void 0, null, function*() {
                if (z != null) {
                    let A = yield c(z);
                    return A !== void 0 && A.isOpen()
                } else return (yield d()) !== void 0
            }),
            l = z => w(void 0, null, function*() {
                let A = yield c(z);
                return A ? !A.disabled : !1
            }),
            c = (z, A = !1) => w(void 0, null, function*() {
                if (yield E(), z === "start" || z === "end") {
                    let ot = t.filter(ht => ht.side === z && !ht.disabled);
                    if (ot.length >= 1) return ot.length > 1 && A && vt(`menuController queried for a menu on the "${z}" side, but ${ot.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, ot.map(ht => ht.el)), ot[0].el;
                    let lt = t.filter(ht => ht.side === z);
                    if (lt.length >= 1) return lt.length > 1 && A && vt(`menuController queried for a menu on the "${z}" side, but ${lt.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, lt.map(ht => ht.el)), lt[0].el
                } else if (z != null) return _(ot => ot.menuId === z);
                let R = _(ot => !ot.disabled);
                return R || (t.length > 0 ? t[0].el : void 0)
            }),
            d = () => w(void 0, null, function*() {
                return yield E(), j()
            }),
            p = () => w(void 0, null, function*() {
                return yield E(), D()
            }),
            g = () => w(void 0, null, function*() {
                return yield E(), T()
            }),
            m = (z, A) => {
                o.set(z, A)
            },
            f = z => {
                t.indexOf(z) < 0 && t.push(z)
            },
            x = z => {
                let A = t.indexOf(z);
                A > -1 && t.splice(A, 1)
            },
            k = (z, A, R, ot) => w(void 0, null, function*() {
                if (T()) return !1;
                if (A) {
                    let lt = yield d();
                    lt && z.el !== lt && (yield lt.setOpen(!1, !1))
                }
                return z._setOpen(A, R, ot)
            }),
            B = (z, A) => {
                let R = o.get(z);
                if (!R) throw new Error("animation not registered");
                return R(A)
            },
            j = () => _(z => z._isOpen),
            D = () => t.map(z => z.el),
            T = () => t.some(z => z.isAnimating),
            _ = z => {
                let A = t.find(z);
                if (A !== void 0) return A.el
            },
            E = () => Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(z => new Promise(A => Tt(z, A))));
        return m("reveal", ld), m("push", rd), m("overlay", ad), jt === null || jt === void 0 || jt.addEventListener("ionBackButton", z => {
            let A = j();
            A && z.detail.register(g2, () => A.close())
        }), {
            registerAnimation: m,
            get: c,
            getMenus: p,
            getOpen: d,
            isEnabled: l,
            swipeGesture: a,
            isAnimating: g,
            isOpen: r,
            enable: s,
            toggle: i,
            close: n,
            open: e,
            _getOpenSync: j,
            _createAnimation: B,
            _register: f,
            _unregister: x,
            _setOpen: k
        }
    },
    Wt = cd();
var de = (o, t, e, n, i, s) => w(void 0, null, function*() {
        var a;
        if (o) return o.attachViewToDom(t, e, i, n);
        if (!s && typeof e != "string" && !(e instanceof HTMLElement)) throw new Error("framework delegate is missing");
        let r = typeof e == "string" ? (a = t.ownerDocument) === null || a === void 0 ? void 0 : a.createElement(e) : e;
        return n && n.forEach(l => r.classList.add(l)), i && Object.assign(r, i), t.appendChild(r), yield new Promise(l => Tt(r, l)), r
    }),
    Oo = (o, t) => {
        if (t) {
            if (o) {
                let e = t.parentElement;
                return o.removeViewFromDom(e, t)
            }
            t.remove()
        }
        return Promise.resolve()
    },
    Zi = () => {
        let o, t;
        return {
            attachViewToDom: (l, c, ...d) => w(void 0, [l, c, ...d], function*(i, s, a = {}, r = []) {
                var p, g;
                o = i;
                let m;
                if (s) {
                    let x = typeof s == "string" ? (p = o.ownerDocument) === null || p === void 0 ? void 0 : p.createElement(s) : s;
                    r.forEach(k => x.classList.add(k)), Object.assign(x, a), o.appendChild(x), m = x, yield new Promise(k => Tt(x, k))
                } else if (o.children.length > 0 && (o.tagName === "ION-MODAL" || o.tagName === "ION-POPOVER") && !(m = o.children[0]).classList.contains("ion-delegate-host")) {
                    let k = (g = o.ownerDocument) === null || g === void 0 ? void 0 : g.createElement("div");
                    k.classList.add("ion-delegate-host"), r.forEach(B => k.classList.add(B)), k.append(...o.children), o.appendChild(k), m = k
                }
                let f = document.querySelector("ion-app") || document.body;
                return t = document.createComment("ionic teleport"), o.parentNode.insertBefore(t, o), f.appendChild(o), m ? ? o
            }),
            removeViewFromDom: () => (o && t && (t.parentNode.insertBefore(o, t), t.remove()), Promise.resolve())
        }
    };
var Vn = '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-checkbox:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-radio:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',
    Ro = (o, t) => {
        let e = o.querySelector(Vn);
        ml(e, t ? ? o)
    },
    Ki = (o, t) => {
        let e = Array.from(o.querySelectorAll(Vn)),
            n = e.length > 0 ? e[e.length - 1] : null;
        ml(n, t ? ? o)
    },
    ml = (o, t) => {
        let e = o,
            n = o ? .shadowRoot;
        if (n && (e = n.querySelector(Vn) || o), e) {
            let i = e.closest("ion-radio-group");
            i ? i.setFocus() : m0(e)
        } else t.focus()
    },
    us = 0,
    dd = 0,
    Qi = new WeakMap,
    vl = o => ({
        create(e) {
            return hd(o, e)
        },
        dismiss(e, n, i) {
            return md(document, e, n, o, i)
        },
        getTop() {
            return w(this, null, function*() {
                return io(document, o)
            })
        }
    });
var gs = vl("ion-modal");
var ms = vl("ion-popover");
var Ji = o => {
        typeof document < "u" && gd(document);
        let t = us++;
        o.overlayIndex = t
    },
    t1 = o => (o.hasAttribute("id") || (o.id = `ion-overlay-${++dd}`), o.id),
    hd = (o, t) => typeof window < "u" && typeof window.customElements < "u" ? window.customElements.whenDefined(o).then(() => {
        let e = document.createElement(o);
        return e.classList.add("overlay-hidden"), Object.assign(e, Object.assign(Object.assign({}, t), {
            hasController: !0
        })), wl(document).appendChild(e), new Promise(n => Tt(e, n))
    }) : Promise.resolve(),
    pd = o => o.classList.contains("overlay-hidden"),
    gl = (o, t) => {
        let e = o,
            n = o ? .shadowRoot;
        n && (e = n.querySelector(Vn) || o), e ? m0(e) : t.focus()
    },
    ud = (o, t) => {
        let e = io(t, "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover"),
            n = o.target;
        if (!e || !n || e.classList.contains(so)) return;
        let i = () => {
                if (e === n) e.lastFocus = void 0;
                else if (n.tagName === "ION-TOAST") gl(e.lastFocus, e);
                else {
                    let a = ut(e);
                    if (!a.contains(n)) return;
                    let r = a.querySelector(".ion-overlay-wrapper");
                    if (!r) return;
                    if (r.contains(n) || n === a.querySelector("ion-backdrop")) e.lastFocus = n;
                    else {
                        let l = e.lastFocus;
                        Ro(r, e), l === t.activeElement && Ki(r, e), e.lastFocus = t.activeElement
                    }
                }
            },
            s = () => {
                if (e.contains(n)) e.lastFocus = n;
                else if (n.tagName === "ION-TOAST") gl(e.lastFocus, e);
                else {
                    let a = e.lastFocus;
                    Ro(e), a === t.activeElement && Ki(e), e.lastFocus = t.activeElement
                }
            };
        e.shadowRoot ? s() : i()
    },
    gd = o => {
        us === 0 && (us = 1, o.addEventListener("focus", t => {
            ud(t, o)
        }, !0), o.addEventListener("ionBackButton", t => {
            let e = io(o);
            e ? .backdropDismiss && t.detail.register(u2, () => {
                e.dismiss(void 0, ze)
            })
        }), Xe() || o.addEventListener("keydown", t => {
            if (t.key === "Escape") {
                let e = io(o);
                e ? .backdropDismiss && e.dismiss(void 0, ze)
            }
        }))
    },
    md = (o, t, e, n, i) => {
        let s = io(o, n, i);
        return s ? s.dismiss(t, e) : Promise.reject("overlay does not exist")
    },
    vd = (o, t) => (t === void 0 && (t = "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover,ion-toast"), Array.from(o.querySelectorAll(t)).filter(e => e.overlayIndex > 0)),
    e1 = (o, t) => vd(o, t).filter(e => !pd(e)),
    io = (o, t, e) => {
        let n = e1(o, t);
        return e === void 0 ? n[n.length - 1] : n.find(i => i.id === e)
    },
    fl = (o = !1) => {
        let e = wl(document).querySelector("ion-router-outlet, ion-nav, #ion-view-container-root");
        e && (o ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden"))
    },
    o1 = (o, t, e, n, i) => w(void 0, null, function*() {
        var s, a;
        if (o.presented) return;
        o.el.tagName !== "ION-TOAST" && fl(!0), document.body.classList.add(x0), xd(o.el), yl(o.el), o.presented = !0, o.willPresent.emit(), (s = o.willPresentShorthand) === null || s === void 0 || s.emit();
        let r = b(o),
            l = o.enterAnimation ? o.enterAnimation : Y.get(t, r === "ios" ? e : n);
        (yield xl(o, l, o.el, i)) && (o.didPresent.emit(), (a = o.didPresentShorthand) === null || a === void 0 || a.emit()), o.el.tagName !== "ION-TOAST" && fd(o.el), o.keyboardClose && (document.activeElement === null || !o.el.contains(document.activeElement)) && o.el.focus(), o.el.removeAttribute("aria-hidden")
    }),
    fd = o => w(void 0, null, function*() {
        let t = document.activeElement;
        if (!t) return;
        let e = t ? .shadowRoot;
        e && (t = e.querySelector(Vn) || t), yield o.onDidDismiss(), (document.activeElement === null || document.activeElement === document.body) && t.focus()
    }),
    n1 = (o, t, e, n, i, s, a) => w(void 0, null, function*() {
        var r, l;
        if (!o.presented) return !1;
        let c = jt !== void 0 ? e1(jt).filter(p => p.tagName !== "ION-TOAST") : [];
        c.length === 1 && c[0].id === o.el.id && (fl(!1), document.body.classList.remove(x0)), o.presented = !1;
        try {
            yl(o.el), o.el.style.setProperty("pointer-events", "none"), o.willDismiss.emit({
                data: t,
                role: e
            }), (r = o.willDismissShorthand) === null || r === void 0 || r.emit({
                data: t,
                role: e
            });
            let p = b(o),
                g = o.leaveAnimation ? o.leaveAnimation : Y.get(n, p === "ios" ? i : s);
            e !== he && (yield xl(o, g, o.el, a)), o.didDismiss.emit({
                data: t,
                role: e
            }), (l = o.didDismissShorthand) === null || l === void 0 || l.emit({
                data: t,
                role: e
            }), (Qi.get(o) || []).forEach(f => f.destroy()), Qi.delete(o), o.el.classList.add("overlay-hidden"), o.el.style.removeProperty("pointer-events"), o.el.lastFocus !== void 0 && (o.el.lastFocus = void 0)
        } catch (p) {
            console.error(p)
        }
        return o.el.remove(), bd(), !0
    }),
    wl = o => o.querySelector("ion-app") || o.body,
    xl = (o, t, e, n) => w(void 0, null, function*() {
        e.classList.remove("overlay-hidden");
        let i = o.el,
            s = t(i, n);
        (!o.animated || !Y.getBoolean("animated", !0)) && s.duration(0), o.keyboardClose && s.beforeAddWrite(() => {
            let r = e.ownerDocument.activeElement;
            r ? .matches("input,ion-input, ion-textarea") && r.blur()
        });
        let a = Qi.get(o) || [];
        return Qi.set(o, [...a, s]), yield s.play(), !0
    }),
    Po = (o, t) => {
        let e, n = new Promise(i => e = i);
        return wd(o, t, i => {
            e(i.detail)
        }), n
    },
    wd = (o, t, e) => {
        let n = i => {
            yi(o, t, n), e(i)
        };
        Ao(o, t, n)
    };
var ze = "backdrop",
    he = "gesture",
    bl = 39;
var kl = () => {
        let o, t = () => {
            o && (o(), o = void 0)
        };
        return {
            addClickListener: (n, i) => {
                t();
                let s = i !== void 0 ? document.getElementById(i) : null;
                if (!s) {
                    vt(`A trigger element with the ID "${i}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`, n);
                    return
                }
                o = ((r, l) => {
                    let c = () => {
                        l.present()
                    };
                    return r.addEventListener("click", c), () => {
                        r.removeEventListener("click", c)
                    }
                })(s, n)
            },
            removeClickListener: t
        }
    },
    yl = o => {
        jt !== void 0 && yt("android") && o.setAttribute("aria-hidden", "true")
    },
    xd = o => {
        var t;
        if (jt === void 0) return;
        let e = e1(jt);
        for (let n = e.length - 1; n >= 0; n--) {
            let i = e[n],
                s = (t = e[n + 1]) !== null && t !== void 0 ? t : o;
            (s.hasAttribute("aria-hidden") || s.tagName !== "ION-TOAST") && i.setAttribute("aria-hidden", "true")
        }
    },
    bd = () => {
        if (jt === void 0) return;
        let o = e1(jt);
        for (let t = o.length - 1; t >= 0; t--) {
            let e = o[t];
            if (e.removeAttribute("aria-hidden"), e.tagName !== "ION-TOAST") break
        }
    },
    so = "ion-disable-focus-trap";
var Ll = (() => {
        class o {
            _renderer;
            _elementRef;
            onChange = e => {};
            onTouched = () => {};
            constructor(e, n) {
                this._renderer = e, this._elementRef = n
            }
            setProperty(e, n) {
                this._renderer.setProperty(this._elementRef.nativeElement, e, n)
            }
            registerOnTouched(e) {
                this.onTouched = e
            }
            registerOnChange(e) {
                this.onChange = e
            }
            setDisabledState(e) {
                this.setProperty("disabled", e)
            }
            static\ u0275fac = function(n) {
                return new(n || o)(v(Ue), v(H))
            };
            static\ u0275dir = Ct({
                type: o
            })
        }
        return o
    })(),
    Sd = (() => {
        class o extends Ll {
            static\ u0275fac = (() => {
                let e;
                return function(i) {
                    return (e || (e = $e(o)))(i || o)
                }
            })();
            static\ u0275dir = Ct({
                type: o,
                features: [Yt]
            })
        }
        return o
    })(),
    Nn = new tt("");
var Ad = {
    provide: Nn,
    useExisting: xo(() => El),
    multi: !0
};

function Id() {
    let o = We() ? We().getUserAgent() : "";
    return /android (\d+)/.test(o.toLowerCase())
}
var Ld = new tt(""),
    El = (() => {
        class o extends Ll {
            _compositionMode;
            _composing = !1;
            constructor(e, n, i) {
                super(e, n), this._compositionMode = i, this._compositionMode == null && (this._compositionMode = !Id())
            }
            writeValue(e) {
                let n = e ? ? "";
                this.setProperty("value", n)
            }
            _handleInput(e) {
                (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(e)
            }
            _compositionStart() {
                this._composing = !0
            }
            _compositionEnd(e) {
                this._composing = !1, this._compositionMode && this.onChange(e)
            }
            static\ u0275fac = function(n) {
                return new(n || o)(v(Ue), v(H), v(Ld, 8))
            };
            static\ u0275dir = Ct({
                type: o,
                selectors: [
                    ["input", "formControlName", "", 3, "type", "checkbox"],
                    ["textarea", "formControlName", ""],
                    ["input", "formControl", "", 3, "type", "checkbox"],
                    ["textarea", "formControl", ""],
                    ["input", "ngModel", "", 3, "type", "checkbox"],
                    ["textarea", "ngModel", ""],
                    ["", "ngDefaultControl", ""]
                ],
                hostBindings: function(n, i) {
                    n & 1 && Zt("input", function(a) {
                        return i._handleInput(a.target.value)
                    })("blur", function() {
                        return i.onTouched()
                    })("compositionstart", function() {
                        return i._compositionStart()
                    })("compositionend", function(a) {
                        return i._compositionEnd(a.target.value)
                    })
                },
                standalone: !1,
                features: [So([Ad]), Yt]
            })
        }
        return o
    })();
var Ed = new tt(""),
    Bd = new tt("");

function Bl(o) {
    return o != null
}

function Dl(o) {
    return wi(o) ? Et(o) : o
}

function jl(o) {
    let t = {};
    return o.forEach(e => {
        t = e != null ? y(y({}, t), e) : t
    }), Object.keys(t).length === 0 ? null : t
}

function $l(o, t) {
    return t.map(e => e(o))
}

function Dd(o) {
    return !o.validate
}

function Hl(o) {
    return o.map(t => Dd(t) ? t : e => t.validate(e))
}

function jd(o) {
    if (!o) return null;
    let t = o.filter(Bl);
    return t.length == 0 ? null : function(e) {
        return jl($l(e, t))
    }
}

function Tl(o) {
    return o != null ? jd(Hl(o)) : null
}

function $d(o) {
    if (!o) return null;
    let t = o.filter(Bl);
    return t.length == 0 ? null : function(e) {
        let n = $l(e, t).map(Dl);
        return fo(n).pipe(J(jl))
    }
}

function _l(o) {
    return o != null ? $d(Hl(o)) : null
}

function Ml(o, t) {
    return o === null ? [t] : Array.isArray(o) ? [...o, t] : [o, t]
}

function Vl(o) {
    return o._rawValidators
}

function Ol(o) {
    return o._rawAsyncValidators
}

function vs(o) {
    return o ? Array.isArray(o) ? o : [o] : []
}

function s1(o, t) {
    return Array.isArray(o) ? o.includes(t) : o === t
}

function Cl(o, t) {
    let e = vs(t);
    return vs(o).forEach(i => {
        s1(e, i) || e.push(i)
    }), e
}

function zl(o, t) {
    return vs(t).filter(e => !s1(o, e))
}
var fs = class {
    get value() {
        return this.control ? this.control.value : null
    }
    get valid() {
        return this.control ? this.control.valid : null
    }
    get invalid() {
        return this.control ? this.control.invalid : null
    }
    get pending() {
        return this.control ? this.control.pending : null
    }
    get disabled() {
        return this.control ? this.control.disabled : null
    }
    get enabled() {
        return this.control ? this.control.enabled : null
    }
    get errors() {
        return this.control ? this.control.errors : null
    }
    get pristine() {
        return this.control ? this.control.pristine : null
    }
    get dirty() {
        return this.control ? this.control.dirty : null
    }
    get touched() {
        return this.control ? this.control.touched : null
    }
    get status() {
        return this.control ? this.control.status : null
    }
    get untouched() {
        return this.control ? this.control.untouched : null
    }
    get statusChanges() {
        return this.control ? this.control.statusChanges : null
    }
    get valueChanges() {
        return this.control ? this.control.valueChanges : null
    }
    get path() {
        return null
    }
    _composedValidatorFn;_composedAsyncValidatorFn;_rawValidators = [];_rawAsyncValidators = [];_setValidators(t) {
        this._rawValidators = t || [], this._composedValidatorFn = Tl(this._rawValidators)
    }
    _setAsyncValidators(t) {
        this._rawAsyncValidators = t || [], this._composedAsyncValidatorFn = _l(this._rawAsyncValidators)
    }
    get validator() {
        return this._composedValidatorFn || null
    }
    get asyncValidator() {
        return this._composedAsyncValidatorFn || null
    }
    _onDestroyCallbacks = [];_registerOnDestroy(t) {
        this._onDestroyCallbacks.push(t)
    }
    _invokeOnDestroyCallbacks() {
        this._onDestroyCallbacks.forEach(t => t()), this._onDestroyCallbacks = []
    }
    reset(t = void 0) {
        this.control && this.control.reset(t)
    }
    hasError(t, e) {
        return this.control ? this.control.hasError(t, e) : !1
    }
    getError(t, e) {
        return this.control ? this.control.getError(t, e) : null
    }
};
var ao = class extends fs {
        _parent = null;
        name = null;
        valueAccessor = null
    },
    ws = class {
        _cd;
        constructor(t) {
            this._cd = t
        }
        get isTouched() {
            return this._cd ? .control ? ._touched ? .(), !!this._cd ? .control ? .touched
        }
        get isUntouched() {
            return !!this._cd ? .control ? .untouched
        }
        get isPristine() {
            return this._cd ? .control ? ._pristine ? .(), !!this._cd ? .control ? .pristine
        }
        get isDirty() {
            return !!this._cd ? .control ? .dirty
        }
        get isValid() {
            return this._cd ? .control ? ._status ? .(), !!this._cd ? .control ? .valid
        }
        get isInvalid() {
            return !!this._cd ? .control ? .invalid
        }
        get isPending() {
            return !!this._cd ? .control ? .pending
        }
        get isSubmitted() {
            return this._cd ? ._submitted ? .(), !!this._cd ? .submitted
        }
    },
    Hd = {
        "[class.ng-untouched]": "isUntouched",
        "[class.ng-touched]": "isTouched",
        "[class.ng-pristine]": "isPristine",
        "[class.ng-dirty]": "isDirty",
        "[class.ng-valid]": "isValid",
        "[class.ng-invalid]": "isInvalid",
        "[class.ng-pending]": "isPending"
    },
    xx = Q(y({}, Hd), {
        "[class.ng-submitted]": "isSubmitted"
    }),
    bx = (() => {
        class o extends ws {
            constructor(e) {
                super(e)
            }
            static\ u0275fac = function(n) {
                return new(n || o)(v(ao, 2))
            };
            static\ u0275dir = Ct({
                type: o,
                selectors: [
                    ["", "formControlName", ""],
                    ["", "ngModel", ""],
                    ["", "formControl", ""]
                ],
                hostVars: 14,
                hostBindings: function(n, i) {
                    n & 2 && qr("ng-untouched", i.isUntouched)("ng-touched", i.isTouched)("ng-pristine", i.isPristine)("ng-dirty", i.isDirty)("ng-valid", i.isValid)("ng-invalid", i.isInvalid)("ng-pending", i.isPending)
                },
                standalone: !1,
                features: [Yt]
            })
        }
        return o
    })();
var On = "VALID",
    i1 = "INVALID",
    Fo = "PENDING",
    Rn = "DISABLED",
    Uo = class {},
    a1 = class extends Uo {
        value;
        source;
        constructor(t, e) {
            super(), this.value = t, this.source = e
        }
    },
    Pn = class extends Uo {
        pristine;
        source;
        constructor(t, e) {
            super(), this.pristine = t, this.source = e
        }
    },
    Fn = class extends Uo {
        touched;
        source;
        constructor(t, e) {
            super(), this.touched = t, this.source = e
        }
    },
    No = class extends Uo {
        status;
        source;
        constructor(t, e) {
            super(), this.status = t, this.source = e
        }
    };

function Td(o) {
    return (l1(o) ? o.validators : o) || null
}

function _d(o) {
    return Array.isArray(o) ? Tl(o) : o || null
}

function Vd(o, t) {
    return (l1(t) ? t.asyncValidators : o) || null
}

function Od(o) {
    return Array.isArray(o) ? _l(o) : o || null
}

function l1(o) {
    return o != null && !Array.isArray(o) && typeof o == "object"
}
var xs = class {
    _pendingDirty = !1;
    _hasOwnPendingAsyncValidator = null;
    _pendingTouched = !1;
    _onCollectionChange = () => {};
    _updateOn;
    _parent = null;
    _asyncValidationSubscription;
    _composedValidatorFn;
    _composedAsyncValidatorFn;
    _rawValidators;
    _rawAsyncValidators;
    value;
    constructor(t, e) {
        this._assignValidators(t), this._assignAsyncValidators(e)
    }
    get validator() {
        return this._composedValidatorFn
    }
    set validator(t) {
        this._rawValidators = this._composedValidatorFn = t
    }
    get asyncValidator() {
        return this._composedAsyncValidatorFn
    }
    set asyncValidator(t) {
        this._rawAsyncValidators = this._composedAsyncValidatorFn = t
    }
    get parent() {
        return this._parent
    }
    get status() {
        return _e(this.statusReactive)
    }
    set status(t) {
        _e(() => this.statusReactive.set(t))
    }
    _status = qe(() => this.statusReactive());
    statusReactive = Fe(void 0);
    get valid() {
        return this.status === On
    }
    get invalid() {
        return this.status === i1
    }
    get pending() {
        return this.status == Fo
    }
    get disabled() {
        return this.status === Rn
    }
    get enabled() {
        return this.status !== Rn
    }
    errors;
    get pristine() {
        return _e(this.pristineReactive)
    }
    set pristine(t) {
        _e(() => this.pristineReactive.set(t))
    }
    _pristine = qe(() => this.pristineReactive());
    pristineReactive = Fe(!0);
    get dirty() {
        return !this.pristine
    }
    get touched() {
        return _e(this.touchedReactive)
    }
    set touched(t) {
        _e(() => this.touchedReactive.set(t))
    }
    _touched = qe(() => this.touchedReactive());
    touchedReactive = Fe(!1);
    get untouched() {
        return !this.touched
    }
    _events = new gt;
    events = this._events.asObservable();
    valueChanges;
    statusChanges;
    get updateOn() {
        return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
    }
    setValidators(t) {
        this._assignValidators(t)
    }
    setAsyncValidators(t) {
        this._assignAsyncValidators(t)
    }
    addValidators(t) {
        this.setValidators(Cl(t, this._rawValidators))
    }
    addAsyncValidators(t) {
        this.setAsyncValidators(Cl(t, this._rawAsyncValidators))
    }
    removeValidators(t) {
        this.setValidators(zl(t, this._rawValidators))
    }
    removeAsyncValidators(t) {
        this.setAsyncValidators(zl(t, this._rawAsyncValidators))
    }
    hasValidator(t) {
        return s1(this._rawValidators, t)
    }
    hasAsyncValidator(t) {
        return s1(this._rawAsyncValidators, t)
    }
    clearValidators() {
        this.validator = null
    }
    clearAsyncValidators() {
        this.asyncValidator = null
    }
    markAsTouched(t = {}) {
        let e = this.touched === !1;
        this.touched = !0;
        let n = t.sourceControl ? ? this;
        this._parent && !t.onlySelf && this._parent.markAsTouched(Q(y({}, t), {
            sourceControl: n
        })), e && t.emitEvent !== !1 && this._events.next(new Fn(!0, n))
    }
    markAllAsTouched(t = {}) {
        this.markAsTouched({
            onlySelf: !0,
            emitEvent: t.emitEvent,
            sourceControl: this
        }), this._forEachChild(e => e.markAllAsTouched(t))
    }
    markAsUntouched(t = {}) {
        let e = this.touched === !0;
        this.touched = !1, this._pendingTouched = !1;
        let n = t.sourceControl ? ? this;
        this._forEachChild(i => {
            i.markAsUntouched({
                onlySelf: !0,
                emitEvent: t.emitEvent,
                sourceControl: n
            })
        }), this._parent && !t.onlySelf && this._parent._updateTouched(t, n), e && t.emitEvent !== !1 && this._events.next(new Fn(!1, n))
    }
    markAsDirty(t = {}) {
        let e = this.pristine === !0;
        this.pristine = !1;
        let n = t.sourceControl ? ? this;
        this._parent && !t.onlySelf && this._parent.markAsDirty(Q(y({}, t), {
            sourceControl: n
        })), e && t.emitEvent !== !1 && this._events.next(new Pn(!1, n))
    }
    markAsPristine(t = {}) {
        let e = this.pristine === !1;
        this.pristine = !0, this._pendingDirty = !1;
        let n = t.sourceControl ? ? this;
        this._forEachChild(i => {
            i.markAsPristine({
                onlySelf: !0,
                emitEvent: t.emitEvent
            })
        }), this._parent && !t.onlySelf && this._parent._updatePristine(t, n), e && t.emitEvent !== !1 && this._events.next(new Pn(!0, n))
    }
    markAsPending(t = {}) {
        this.status = Fo;
        let e = t.sourceControl ? ? this;
        t.emitEvent !== !1 && (this._events.next(new No(this.status, e)), this.statusChanges.emit(this.status)), this._parent && !t.onlySelf && this._parent.markAsPending(Q(y({}, t), {
            sourceControl: e
        }))
    }
    disable(t = {}) {
        let e = this._parentMarkedDirty(t.onlySelf);
        this.status = Rn, this.errors = null, this._forEachChild(i => {
            i.disable(Q(y({}, t), {
                onlySelf: !0
            }))
        }), this._updateValue();
        let n = t.sourceControl ? ? this;
        t.emitEvent !== !1 && (this._events.next(new a1(this.value, n)), this._events.next(new No(this.status, n)), this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(Q(y({}, t), {
            skipPristineCheck: e
        }), this), this._onDisabledChange.forEach(i => i(!0))
    }
    enable(t = {}) {
        let e = this._parentMarkedDirty(t.onlySelf);
        this.status = On, this._forEachChild(n => {
            n.enable(Q(y({}, t), {
                onlySelf: !0
            }))
        }), this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: t.emitEvent
        }), this._updateAncestors(Q(y({}, t), {
            skipPristineCheck: e
        }), this), this._onDisabledChange.forEach(n => n(!1))
    }
    _updateAncestors(t, e) {
        this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t), t.skipPristineCheck || this._parent._updatePristine({}, e), this._parent._updateTouched({}, e))
    }
    setParent(t) {
        this._parent = t
    }
    getRawValue() {
        return this.value
    }
    updateValueAndValidity(t = {}) {
        if (this._setInitialStatus(), this._updateValue(), this.enabled) {
            let n = this._cancelExistingSubscription();
            this.errors = this._runValidator(), this.status = this._calculateStatus(), (this.status === On || this.status === Fo) && this._runAsyncValidator(n, t.emitEvent)
        }
        let e = t.sourceControl ? ? this;
        t.emitEvent !== !1 && (this._events.next(new a1(this.value, e)), this._events.next(new No(this.status, e)), this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !t.onlySelf && this._parent.updateValueAndValidity(Q(y({}, t), {
            sourceControl: e
        }))
    }
    _updateTreeValidity(t = {
        emitEvent: !0
    }) {
        this._forEachChild(e => e._updateTreeValidity(t)), this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: t.emitEvent
        })
    }
    _setInitialStatus() {
        this.status = this._allControlsDisabled() ? Rn : On
    }
    _runValidator() {
        return this.validator ? this.validator(this) : null
    }
    _runAsyncValidator(t, e) {
        if (this.asyncValidator) {
            this.status = Fo, this._hasOwnPendingAsyncValidator = {
                emitEvent: e !== !1
            };
            let n = Dl(this.asyncValidator(this));
            this._asyncValidationSubscription = n.subscribe(i => {
                this._hasOwnPendingAsyncValidator = null, this.setErrors(i, {
                    emitEvent: e,
                    shouldHaveEmitted: t
                })
            })
        }
    }
    _cancelExistingSubscription() {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
            let t = this._hasOwnPendingAsyncValidator ? .emitEvent ? ? !1;
            return this._hasOwnPendingAsyncValidator = null, t
        }
        return !1
    }
    setErrors(t, e = {}) {
        this.errors = t, this._updateControlsErrors(e.emitEvent !== !1, this, e.shouldHaveEmitted)
    }
    get(t) {
        let e = t;
        return e == null || (Array.isArray(e) || (e = e.split(".")), e.length === 0) ? null : e.reduce((n, i) => n && n._find(i), this)
    }
    getError(t, e) {
        let n = e ? this.get(e) : this;
        return n && n.errors ? n.errors[t] : null
    }
    hasError(t, e) {
        return !!this.getError(t, e)
    }
    get root() {
        let t = this;
        for (; t._parent;) t = t._parent;
        return t
    }
    _updateControlsErrors(t, e, n) {
        this.status = this._calculateStatus(), t && this.statusChanges.emit(this.status), (t || n) && this._events.next(new No(this.status, e)), this._parent && this._parent._updateControlsErrors(t, e, n)
    }
    _initObservables() {
        this.valueChanges = new Bt, this.statusChanges = new Bt
    }
    _calculateStatus() {
        return this._allControlsDisabled() ? Rn : this.errors ? i1 : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Fo) ? Fo : this._anyControlsHaveStatus(i1) ? i1 : On
    }
    _anyControlsHaveStatus(t) {
        return this._anyControls(e => e.status === t)
    }
    _anyControlsDirty() {
        return this._anyControls(t => t.dirty)
    }
    _anyControlsTouched() {
        return this._anyControls(t => t.touched)
    }
    _updatePristine(t, e) {
        let n = !this._anyControlsDirty(),
            i = this.pristine !== n;
        this.pristine = n, this._parent && !t.onlySelf && this._parent._updatePristine(t, e), i && this._events.next(new Pn(this.pristine, e))
    }
    _updateTouched(t = {}, e) {
        this.touched = this._anyControlsTouched(), this._events.next(new Fn(this.touched, e)), this._parent && !t.onlySelf && this._parent._updateTouched(t, e)
    }
    _onDisabledChange = [];
    _registerOnCollectionChange(t) {
        this._onCollectionChange = t
    }
    _setUpdateStrategy(t) {
        l1(t) && t.updateOn != null && (this._updateOn = t.updateOn)
    }
    _parentMarkedDirty(t) {
        let e = this._parent && this._parent.dirty;
        return !t && !!e && !this._parent._anyControlsDirty()
    }
    _find(t) {
        return null
    }
    _assignValidators(t) {
        this._rawValidators = Array.isArray(t) ? t.slice() : t, this._composedValidatorFn = _d(this._rawValidators)
    }
    _assignAsyncValidators(t) {
        this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t, this._composedAsyncValidatorFn = Od(this._rawAsyncValidators)
    }
};
var Rl = new tt("", {
        providedIn: "root",
        factory: () => bs
    }),
    bs = "always";

function Rd(o, t, e = bs) {
    Fd(o, t), t.valueAccessor.writeValue(o.value), (o.disabled || e === "always") && t.valueAccessor.setDisabledState ? .(o.disabled), Ud(o, t), Wd(o, t), qd(o, t), Pd(o, t)
}

function Sl(o, t, e = !0) {
    let n = () => {};
    t.valueAccessor && (t.valueAccessor.registerOnChange(n), t.valueAccessor.registerOnTouched(n)), Nd(o, t), o && (t._invokeOnDestroyCallbacks(), o._registerOnCollectionChange(() => {}))
}

function r1(o, t) {
    o.forEach(e => {
        e.registerOnValidatorChange && e.registerOnValidatorChange(t)
    })
}

function Pd(o, t) {
    if (t.valueAccessor.setDisabledState) {
        let e = n => {
            t.valueAccessor.setDisabledState(n)
        };
        o.registerOnDisabledChange(e), t._registerOnDestroy(() => {
            o._unregisterOnDisabledChange(e)
        })
    }
}

function Fd(o, t) {
    let e = Vl(o);
    t.validator !== null ? o.setValidators(Ml(e, t.validator)) : typeof e == "function" && o.setValidators([e]);
    let n = Ol(o);
    t.asyncValidator !== null ? o.setAsyncValidators(Ml(n, t.asyncValidator)) : typeof n == "function" && o.setAsyncValidators([n]);
    let i = () => o.updateValueAndValidity();
    r1(t._rawValidators, i), r1(t._rawAsyncValidators, i)
}

function Nd(o, t) {
    let e = !1;
    if (o !== null) {
        if (t.validator !== null) {
            let i = Vl(o);
            if (Array.isArray(i) && i.length > 0) {
                let s = i.filter(a => a !== t.validator);
                s.length !== i.length && (e = !0, o.setValidators(s))
            }
        }
        if (t.asyncValidator !== null) {
            let i = Ol(o);
            if (Array.isArray(i) && i.length > 0) {
                let s = i.filter(a => a !== t.asyncValidator);
                s.length !== i.length && (e = !0, o.setAsyncValidators(s))
            }
        }
    }
    let n = () => {};
    return r1(t._rawValidators, n), r1(t._rawAsyncValidators, n), e
}

function Ud(o, t) {
    t.valueAccessor.registerOnChange(e => {
        o._pendingValue = e, o._pendingChange = !0, o._pendingDirty = !0, o.updateOn === "change" && Pl(o, t)
    })
}

function qd(o, t) {
    t.valueAccessor.registerOnTouched(() => {
        o._pendingTouched = !0, o.updateOn === "blur" && o._pendingChange && Pl(o, t), o.updateOn !== "submit" && o.markAsTouched()
    })
}

function Pl(o, t) {
    o._pendingDirty && o.markAsDirty(), o.setValue(o._pendingValue, {
        emitModelToViewChange: !1
    }), t.viewToModelUpdate(o._pendingValue), o._pendingChange = !1
}

function Wd(o, t) {
    let e = (n, i) => {
        t.valueAccessor.writeValue(n), i && t.viewToModelUpdate(n)
    };
    o.registerOnChange(e), t._registerOnDestroy(() => {
        o._unregisterOnChange(e)
    })
}

function Gd(o, t) {
    if (!o.hasOwnProperty("model")) return !1;
    let e = o.model;
    return e.isFirstChange() ? !0 : !Object.is(t, e.currentValue)
}

function Xd(o) {
    return Object.getPrototypeOf(o.constructor) === Sd
}

function Yd(o, t) {
    if (!t) return null;
    Array.isArray(t);
    let e, n, i;
    return t.forEach(s => {
        s.constructor === El ? e = s : Xd(s) ? n = s : i = s
    }), i || n || e || null
}

function Al(o, t) {
    let e = o.indexOf(t);
    e > -1 && o.splice(e, 1)
}

function Il(o) {
    return typeof o == "object" && o !== null && Object.keys(o).length === 2 && "value" in o && "disabled" in o
}
var kx = class extends xs {
    defaultValue = null;
    _onChange = [];
    _pendingValue;
    _pendingChange = !1;
    constructor(t = null, e, n) {
        super(Td(e), Vd(n, e)), this._applyFormState(t), this._setUpdateStrategy(e), this._initObservables(), this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: !!this.asyncValidator
        }), l1(e) && (e.nonNullable || e.initialValueIsDefault) && (Il(t) ? this.defaultValue = t.value : this.defaultValue = t)
    }
    setValue(t, e = {}) {
        this.value = this._pendingValue = t, this._onChange.length && e.emitModelToViewChange !== !1 && this._onChange.forEach(n => n(this.value, e.emitViewToModelChange !== !1)), this.updateValueAndValidity(e)
    }
    patchValue(t, e = {}) {
        this.setValue(t, e)
    }
    reset(t = this.defaultValue, e = {}) {
        this._applyFormState(t), this.markAsPristine(e), this.markAsUntouched(e), this.setValue(this.value, e), this._pendingChange = !1
    }
    _updateValue() {}
    _anyControls(t) {
        return !1
    }
    _allControlsDisabled() {
        return this.disabled
    }
    registerOnChange(t) {
        this._onChange.push(t)
    }
    _unregisterOnChange(t) {
        Al(this._onChange, t)
    }
    registerOnDisabledChange(t) {
        this._onDisabledChange.push(t)
    }
    _unregisterOnDisabledChange(t) {
        Al(this._onDisabledChange, t)
    }
    _forEachChild(t) {}
    _syncPendingControls() {
        return this.updateOn === "submit" && (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), this._pendingChange) ? (this.setValue(this._pendingValue, {
            onlySelf: !0,
            emitModelToViewChange: !1
        }), !0) : !1
    }
    _applyFormState(t) {
        Il(t) ? (this.value = this._pendingValue = t.value, t.disabled ? this.disable({
            onlySelf: !0,
            emitEvent: !1
        }) : this.enable({
            onlySelf: !0,
            emitEvent: !1
        })) : this.value = this._pendingValue = t
    }
};
var Fl = new tt(""),
    Zd = {
        provide: ao,
        useExisting: xo(() => Kd)
    },
    Kd = (() => {
        class o extends ao {
            _ngModelWarningConfig;
            callSetDisabledState;
            viewModel;
            form;
            set isDisabled(e) {}
            model;
            update = new Bt;
            static _ngModelWarningSentOnce = !1;
            _ngModelWarningSent = !1;
            constructor(e, n, i, s, a) {
                super(), this._ngModelWarningConfig = s, this.callSetDisabledState = a, this._setValidators(e), this._setAsyncValidators(n), this.valueAccessor = Yd(this, i)
            }
            ngOnChanges(e) {
                if (this._isControlChanged(e)) {
                    let n = e.form.previousValue;
                    n && Sl(n, this, !1), Rd(this.form, this, this.callSetDisabledState), this.form.updateValueAndValidity({
                        emitEvent: !1
                    })
                }
                Gd(e, this.viewModel) && (this.form.setValue(this.model), this.viewModel = this.model)
            }
            ngOnDestroy() {
                this.form && Sl(this.form, this, !1)
            }
            get path() {
                return []
            }
            get control() {
                return this.form
            }
            viewToModelUpdate(e) {
                this.viewModel = e, this.update.emit(e)
            }
            _isControlChanged(e) {
                return e.hasOwnProperty("form")
            }
            static\ u0275fac = function(n) {
                return new(n || o)(v(Ed, 10), v(Bd, 10), v(Nn, 10), v(Fl, 8), v(Rl, 8))
            };
            static\ u0275dir = Ct({
                type: o,
                selectors: [
                    ["", "formControl", ""]
                ],
                inputs: {
                    form: [0, "formControl", "form"],
                    isDisabled: [0, "disabled", "isDisabled"],
                    model: [0, "ngModel", "model"]
                },
                outputs: {
                    update: "ngModelChange"
                },
                exportAs: ["ngForm"],
                standalone: !1,
                features: [So([Zd]), Yt, je]
            })
        }
        return o
    })();
var Qd = (() => {
    class o {
        static\ u0275fac = function(n) {
            return new(n || o)
        };
        static\ u0275mod = Co({
            type: o
        });
        static\ u0275inj = bo({})
    }
    return o
})();
var Mx = (() => {
    class o {
        static withConfig(e) {
            return {
                ngModule: o,
                providers: [{
                    provide: Fl,
                    useValue: e.warnOnNgModelWithFormControl ? ? "always"
                }, {
                    provide: Rl,
                    useValue: e.callSetDisabledState ? ? bs
                }]
            }
        }
        static\ u0275fac = function(n) {
            return new(n || o)
        };
        static\ u0275mod = Co({
            type: o
        });
        static\ u0275inj = bo({
            imports: [Qd]
        })
    }
    return o
})();
var Jd = ["tabsInner"];
var Wl = (() => {
        class o {
            doc;
            _readyPromise;
            win;
            backButton = new gt;
            keyboardDidShow = new gt;
            keyboardDidHide = new gt;
            pause = new gt;
            resume = new gt;
            resize = new gt;
            constructor(e, n) {
                this.doc = e, n.run(() => {
                    this.win = e.defaultView, this.backButton.subscribeWithPriority = function(s, a) {
                        return this.subscribe(r => r.register(s, l => n.run(() => a(l))))
                    }, qo(this.pause, e, "pause", n), qo(this.resume, e, "resume", n), qo(this.backButton, e, "ionBackButton", n), qo(this.resize, this.win, "resize", n), qo(this.keyboardDidShow, this.win, "ionKeyboardDidShow", n), qo(this.keyboardDidHide, this.win, "ionKeyboardDidHide", n);
                    let i;
                    this._readyPromise = new Promise(s => {
                        i = s
                    }), this.win ? .cordova ? e.addEventListener("deviceready", () => {
                        i("cordova")
                    }, {
                        once: !0
                    }) : i("dom")
                })
            }
            is(e) {
                return yt(this.win, e)
            }
            platforms() {
                return p0(this.win)
            }
            ready() {
                return this._readyPromise
            }
            get isRTL() {
                return this.doc.dir === "rtl"
            }
            getQueryParam(e) {
                return th(this.win.location.href, e)
            }
            isLandscape() {
                return !this.isPortrait()
            }
            isPortrait() {
                return this.win.matchMedia ? .("(orientation: portrait)").matches
            }
            testUserAgent(e) {
                let n = this.win.navigator;
                return !!(n ? .userAgent && n.userAgent.indexOf(e) >= 0)
            }
            url() {
                return this.win.location.href
            }
            width() {
                return this.win.innerWidth
            }
            height() {
                return this.win.innerHeight
            }
            static\ u0275fac = function(n) {
                return new(n || o)(X(Dt), X($))
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })(),
    th = (o, t) => {
        t = t.replace(/[[\]\\]/g, "\\$&");
        let n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(o);
        return n ? decodeURIComponent(n[1].replace(/\+/g, " ")) : null
    },
    qo = (o, t, e, n) => {
        t && t.addEventListener(e, i => {
            n.run(() => {
                let s = i ? .detail;
                o.next(s)
            })
        })
    },
    Wo = (() => {
        class o {
            location;
            serializer;
            router;
            topOutlet;
            direction = Nl;
            animated = Ul;
            animationBuilder;
            guessDirection = "forward";
            guessAnimation;
            lastNavId = -1;
            constructor(e, n, i, s) {
                this.location = n, this.serializer = i, this.router = s, s && s.events.subscribe(a => {
                    if (a instanceof eo) {
                        let r = a.restoredState ? a.restoredState.navigationId : a.id;
                        this.guessDirection = this.guessAnimation = r < this.lastNavId ? "back" : "forward", this.lastNavId = this.guessDirection === "forward" ? a.id : r
                    }
                }), e.backButton.subscribeWithPriority(0, a => {
                    this.pop(), a()
                })
            }
            navigateForward(e, n = {}) {
                return this.setDirection("forward", n.animated, n.animationDirection, n.animation), this.navigate(e, n)
            }
            navigateBack(e, n = {}) {
                return this.setDirection("back", n.animated, n.animationDirection, n.animation), this.navigate(e, n)
            }
            navigateRoot(e, n = {}) {
                return this.setDirection("root", n.animated, n.animationDirection, n.animation), this.navigate(e, n)
            }
            back(e = {
                animated: !0,
                animationDirection: "back"
            }) {
                return this.setDirection("back", e.animated, e.animationDirection, e.animation), this.location.back()
            }
            pop() {
                return w(this, null, function*() {
                    let e = this.topOutlet;
                    for (; e;) {
                        if (yield e.pop()) return !0;
                        e = e.parentOutlet
                    }
                    return !1
                })
            }
            setDirection(e, n, i, s) {
                this.direction = e, this.animated = eh(e, n, i), this.animationBuilder = s
            }
            setTopOutlet(e) {
                this.topOutlet = e
            }
            consumeTransition() {
                let e = "root",
                    n, i = this.animationBuilder;
                return this.direction === "auto" ? (e = this.guessDirection, n = this.guessAnimation) : (n = this.animated, e = this.direction), this.direction = Nl, this.animated = Ul, this.animationBuilder = void 0, {
                    direction: e,
                    animation: n,
                    animationBuilder: i
                }
            }
            navigate(e, n) {
                if (Array.isArray(e)) return this.router.navigate(e, n); {
                    let i = this.serializer.parse(e.toString());
                    return n.queryParams !== void 0 && (i.queryParams = y({}, n.queryParams)), n.fragment !== void 0 && (i.fragment = n.fragment), this.router.navigateByUrl(i, n)
                }
            }
            static\ u0275fac = function(n) {
                return new(n || o)(X(Wl), X(ke), X(Hn), X(le, 8))
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })(),
    eh = (o, t, e) => {
        if (t !== !1) {
            if (e !== void 0) return e;
            if (o === "forward" || o === "back") return o;
            if (o === "root" && t === !0) return "forward"
        }
    },
    Nl = "auto",
    Ul = void 0,
    Wn = (() => {
        class o {
            get(e, n) {
                let i = ks();
                return i ? i.get(e, n) : null
            }
            getBoolean(e, n) {
                let i = ks();
                return i ? i.getBoolean(e, n) : !1
            }
            getNumber(e, n) {
                let i = ks();
                return i ? i.getNumber(e, n) : 0
            }
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })(),
    c1 = new tt("USERCONFIG"),
    ks = () => {
        if (typeof window < "u") {
            let o = window.Ionic;
            if (o ? .config) return o.config
        }
        return null
    },
    Un = class {
        data;
        constructor(t = {}) {
            this.data = t, console.warn("[Ionic Warning]: NavParams has been deprecated in favor of using Angular's input API. Developers should migrate to either the @Input decorator or the Signals-based input API.")
        }
        get(t) {
            return this.data[t]
        }
    },
    lo = (() => {
        class o {
            zone = I($);
            applicationRef = I(pn);
            config = I(c1);
            create(e, n, i) {
                return new Ms(e, n, this.applicationRef, this.zone, i, this.config.useSetInputAPI ? ? !1)
            }
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac
            })
        }
        return o
    })(),
    Ms = class {
        environmentInjector;
        injector;
        applicationRef;
        zone;
        elementReferenceKey;
        enableSignalsSupport;
        elRefMap = new WeakMap;
        elEventsMap = new WeakMap;
        constructor(t, e, n, i, s, a) {
            this.environmentInjector = t, this.injector = e, this.applicationRef = n, this.zone = i, this.elementReferenceKey = s, this.enableSignalsSupport = a
        }
        attachViewToDom(t, e, n, i) {
            return this.zone.run(() => new Promise(s => {
                let a = y({}, n);
                this.elementReferenceKey !== void 0 && (a[this.elementReferenceKey] = t);
                let r = oh(this.zone, this.environmentInjector, this.injector, this.applicationRef, this.elRefMap, this.elEventsMap, t, e, a, i, this.elementReferenceKey, this.enableSignalsSupport);
                s(r)
            }))
        }
        removeViewFromDom(t, e) {
            return this.zone.run(() => new Promise(n => {
                let i = this.elRefMap.get(e);
                if (i) {
                    i.destroy(), this.elRefMap.delete(e);
                    let s = this.elEventsMap.get(e);
                    s && (s(), this.elEventsMap.delete(e))
                }
                n()
            }))
        }
    },
    oh = (o, t, e, n, i, s, a, r, l, c, d, p) => {
        let g = kt.create({
                providers: ih(l),
                parent: e
            }),
            m = Qr(r, {
                environmentInjector: t,
                elementInjector: g
            }),
            f = m.instance,
            x = m.location.nativeElement;
        if (l)
            if (d && f[d] !== void 0 && console.error(`[Ionic Error]: ${d} is a reserved property when using ${a.tagName.toLowerCase()}. Rename or remove the "${d}" property from ${r.name}.`), p === !0 && m.setInput !== void 0) {
                let B = l,
                    {
                        modal: j,
                        popover: D
                    } = B,
                    T = di(B, ["modal", "popover"]);
                for (let _ in T) m.setInput(_, T[_]);
                j !== void 0 && Object.assign(f, {
                    modal: j
                }), D !== void 0 && Object.assign(f, {
                    popover: D
                })
            } else Object.assign(f, l);
        if (c)
            for (let j of c) x.classList.add(j);
        let k = Gl(o, f, x);
        return a.appendChild(x), n.attachView(m.hostView), i.set(x, m), s.set(x, k), x
    },
    nh = [f0, w0, vn, fn, Ge],
    Gl = (o, t, e) => o.run(() => {
        let n = nh.filter(i => typeof t[i] == "function").map(i => {
            let s = a => t[i](a.detail);
            return e.addEventListener(i, s), () => e.removeEventListener(i, s)
        });
        return () => n.forEach(i => i())
    }),
    ql = new tt("NavParamsToken"),
    ih = o => [{
        provide: ql,
        useValue: o
    }, {
        provide: Un,
        useFactory: sh,
        deps: [ql]
    }],
    sh = o => new Un(o),
    ah = (o, t) => {
        let e = o.prototype;
        t.forEach(n => {
            Object.defineProperty(e, n, {
                get() {
                    return this.el[n]
                },
                set(i) {
                    this.z.runOutsideAngular(() => this.el[n] = i)
                }
            })
        })
    },
    rh = (o, t) => {
        let e = o.prototype;
        t.forEach(n => {
            e[n] = function() {
                let i = arguments;
                return this.z.runOutsideAngular(() => this.el[n].apply(this.el, i))
            }
        })
    },
    lh = (o, t, e) => {
        e.forEach(n => o[n] = ui(t, n))
    };

function Go(o) {
    return function(e) {
        let {
            defineCustomElementFn: n,
            inputs: i,
            methods: s
        } = o;
        return n !== void 0 && n(), i && ah(e, i), s && rh(e, s), e
    }
}
var ch = (o, t, e) => e === "root" ? Xl(o, t) : e === "forward" ? dh(o, t) : hh(o, t),
    Xl = (o, t) => (o = o.filter(e => e.stackId !== t.stackId), o.push(t), o),
    dh = (o, t) => (o.indexOf(t) >= 0 ? o = o.filter(n => n.stackId !== t.stackId || n.id <= t.id) : o.push(t), o),
    hh = (o, t) => o.indexOf(t) >= 0 ? o.filter(n => n.stackId !== t.stackId || n.id <= t.id) : Xl(o, t),
    Cs = (o, t) => {
        let e = o.createUrlTree(["."], {
            relativeTo: t
        });
        return o.serializeUrl(e)
    },
    Yl = (o, t) => t ? o.stackId !== t.stackId : !0,
    ph = (o, t) => {
        if (!o) return;
        let e = Zl(t);
        for (let n = 0; n < e.length; n++) {
            if (n >= o.length) return e[n];
            if (e[n] !== o[n]) return
        }
    },
    Zl = o => o.split("/").map(t => t.trim()).filter(t => t !== ""),
    Kl = o => {
        o && (o.ref.destroy(), o.unlistenEvents())
    },
    zs = class {
        containerEl;
        router;
        navCtrl;
        zone;
        location;
        views = [];
        runningTask;
        skipTransition = !1;
        tabsPrefix;
        activeView;
        nextId = 0;
        constructor(t, e, n, i, s, a) {
            this.containerEl = e, this.router = n, this.navCtrl = i, this.zone = s, this.location = a, this.tabsPrefix = t !== void 0 ? Zl(t) : void 0
        }
        createView(t, e) {
            let n = Cs(this.router, e),
                i = t ? .location ? .nativeElement,
                s = Gl(this.zone, t.instance, i);
            return {
                id: this.nextId++,
                stackId: ph(this.tabsPrefix, n),
                unlistenEvents: s,
                element: i,
                ref: t,
                url: n
            }
        }
        getExistingView(t) {
            let e = Cs(this.router, t),
                n = this.views.find(i => i.url === e);
            return n && n.ref.changeDetectorRef.reattach(), n
        }
        setActive(t) {
            let e = this.navCtrl.consumeTransition(),
                {
                    direction: n,
                    animation: i,
                    animationBuilder: s
                } = e,
                a = this.activeView,
                r = Yl(t, a);
            r && (n = "back", i = void 0);
            let l = this.views.slice(),
                c, d = this.router;
            d.getCurrentNavigation ? c = d.getCurrentNavigation() : d.navigations ? .value && (c = d.navigations.value), c ? .extras ? .replaceUrl && this.views.length > 0 && this.views.splice(-1, 1);
            let p = this.views.includes(t),
                g = this.insertView(t, n);
            p || t.ref.changeDetectorRef.detectChanges();
            let m = t.animationBuilder;
            return s === void 0 && n === "back" && !r && m !== void 0 && (s = m), a && (a.animationBuilder = s), this.zone.runOutsideAngular(() => this.wait(() => (a && a.ref.changeDetectorRef.detach(), t.ref.changeDetectorRef.reattach(), this.transition(t, a, i, this.canGoBack(1), !1, s).then(() => uh(t, g, l, this.location, this.zone)).then(() => ({
                enteringView: t,
                direction: n,
                animation: i,
                tabSwitch: r
            })))))
        }
        canGoBack(t, e = this.getActiveStackId()) {
            return this.getStack(e).length > t
        }
        pop(t, e = this.getActiveStackId()) {
            return this.zone.run(() => {
                let n = this.getStack(e);
                if (n.length <= t) return Promise.resolve(!1);
                let i = n[n.length - t - 1],
                    s = i.url,
                    a = i.savedData;
                if (a) {
                    let l = a.get("primary");
                    l ? .route ? ._routerState ? .snapshot.url && (s = l.route._routerState.snapshot.url)
                }
                let {
                    animationBuilder: r
                } = this.navCtrl.consumeTransition();
                return this.navCtrl.navigateBack(s, Q(y({}, i.savedExtras), {
                    animation: r
                })).then(() => !0)
            })
        }
        startBackTransition() {
            let t = this.activeView;
            if (t) {
                let e = this.getStack(t.stackId),
                    n = e[e.length - 2],
                    i = n.animationBuilder;
                return this.wait(() => this.transition(n, t, "back", this.canGoBack(2), !0, i))
            }
            return Promise.resolve()
        }
        endBackTransition(t) {
            t ? (this.skipTransition = !0, this.pop(1)) : this.activeView && Ql(this.activeView, this.views, this.views, this.location, this.zone)
        }
        getLastUrl(t) {
            let e = this.getStack(t);
            return e.length > 0 ? e[e.length - 1] : void 0
        }
        getRootUrl(t) {
            let e = this.getStack(t);
            return e.length > 0 ? e[0] : void 0
        }
        getActiveStackId() {
            return this.activeView ? this.activeView.stackId : void 0
        }
        getActiveView() {
            return this.activeView
        }
        hasRunningTask() {
            return this.runningTask !== void 0
        }
        destroy() {
            this.containerEl = void 0, this.views.forEach(Kl), this.activeView = void 0, this.views = []
        }
        getStack(t) {
            return this.views.filter(e => e.stackId === t)
        }
        insertView(t, e) {
            return this.activeView = t, this.views = ch(this.views, t, e), this.views.slice()
        }
        transition(t, e, n, i, s, a) {
            if (this.skipTransition) return this.skipTransition = !1, Promise.resolve(!1);
            if (e === t) return Promise.resolve(!1);
            let r = t ? t.element : void 0,
                l = e ? e.element : void 0,
                c = this.containerEl;
            return r && r !== l && (r.classList.add("ion-page"), r.classList.add("ion-page-invisible"), c.commit) ? c.commit(r, l, {
                duration: n === void 0 ? 0 : void 0,
                direction: n,
                showGoBack: i,
                progressAnimation: s,
                animationBuilder: a
            }) : Promise.resolve(!1)
        }
        wait(t) {
            return w(this, null, function*() {
                this.runningTask !== void 0 && (yield this.runningTask, this.runningTask = void 0);
                let e = this.runningTask = t();
                return e.finally(() => this.runningTask = void 0), e
            })
        }
    },
    uh = (o, t, e, n, i) => typeof requestAnimationFrame == "function" ? new Promise(s => {
        requestAnimationFrame(() => {
            Ql(o, t, e, n, i), s()
        })
    }) : Promise.resolve(),
    Ql = (o, t, e, n, i) => {
        i.run(() => e.filter(s => !t.includes(s)).forEach(Kl)), t.forEach(s => {
            let r = n.path().split("?")[0].split("#")[0];
            if (s !== o && s.url !== r) {
                let l = s.element;
                l.setAttribute("aria-hidden", "true"), l.classList.add("ion-page-hidden"), s.ref.changeDetectorRef.detach()
            }
        })
    },
    Es = (() => {
        class o {
            parentOutlet;
            nativeEl;
            activatedView = null;
            tabsPrefix;
            _swipeGesture;
            stackCtrl;
            proxyMap = new WeakMap;
            currentActivatedRoute$ = new St(null);
            activated = null;
            get activatedComponentRef() {
                return this.activated
            }
            _activatedRoute = null;
            name = W;
            stackWillChange = new Bt;
            stackDidChange = new Bt;
            activateEvents = new Bt;
            deactivateEvents = new Bt;
            parentContexts = I(no);
            location = I(Te);
            environmentInjector = I(Nt);
            inputBinder = I(Jl, {
                optional: !0
            });
            supportsBindingToComponentInputs = !0;
            config = I(Wn);
            navCtrl = I(Wo);
            set animation(e) {
                this.nativeEl.animation = e
            }
            set animated(e) {
                this.nativeEl.animated = e
            }
            set swipeGesture(e) {
                this._swipeGesture = e, this.nativeEl.swipeHandler = e ? {
                    canStart: () => this.stackCtrl.canGoBack(1) && !this.stackCtrl.hasRunningTask(),
                    onStart: () => this.stackCtrl.startBackTransition(),
                    onEnd: n => this.stackCtrl.endBackTransition(n)
                } : void 0
            }
            constructor(e, n, i, s, a, r, l, c) {
                this.parentOutlet = c, this.nativeEl = s.nativeElement, this.name = e || W, this.tabsPrefix = n === "true" ? Cs(a, l) : void 0, this.stackCtrl = new zs(this.tabsPrefix, this.nativeEl, a, this.navCtrl, r, i), this.parentContexts.onChildOutletCreated(this.name, this)
            }
            ngOnDestroy() {
                this.stackCtrl.destroy(), this.inputBinder ? .unsubscribeFromRouteData(this)
            }
            getContext() {
                return this.parentContexts.getContext(this.name)
            }
            ngOnInit() {
                this.initializeOutletWithName()
            }
            initializeOutletWithName() {
                if (!this.activated) {
                    let e = this.getContext();
                    e ? .route && this.activateWith(e.route, e.injector)
                }
                new Promise(e => Tt(this.nativeEl, e)).then(() => {
                    this._swipeGesture === void 0 && (this.swipeGesture = this.config.getBoolean("swipeBackEnabled", this.nativeEl.mode === "ios"))
                })
            }
            get isActivated() {
                return !!this.activated
            }
            get component() {
                if (!this.activated) throw new Error("Outlet is not activated");
                return this.activated.instance
            }
            get activatedRoute() {
                if (!this.activated) throw new Error("Outlet is not activated");
                return this._activatedRoute
            }
            get activatedRouteData() {
                return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
            }
            detach() {
                throw new Error("incompatible reuse strategy")
            }
            attach(e, n) {
                throw new Error("incompatible reuse strategy")
            }
            deactivate() {
                if (this.activated) {
                    if (this.activatedView) {
                        let n = this.getContext();
                        this.activatedView.savedData = new Map(n.children.contexts);
                        let i = this.activatedView.savedData.get("primary");
                        if (i && n.route && (i.route = y({}, n.route)), this.activatedView.savedExtras = {}, n.route) {
                            let s = n.route.snapshot;
                            this.activatedView.savedExtras.queryParams = s.queryParams, this.activatedView.savedExtras.fragment = s.fragment
                        }
                    }
                    let e = this.component;
                    this.activatedView = null, this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e)
                }
            }
            activateWith(e, n) {
                if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                this._activatedRoute = e;
                let i, s = this.stackCtrl.getExistingView(e);
                if (s) {
                    i = this.activated = s.ref;
                    let r = s.savedData;
                    if (r) {
                        let l = this.getContext();
                        l.children.contexts = r
                    }
                    this.updateActivatedRouteProxy(i.instance, e)
                } else {
                    let r = e._futureSnapshot,
                        l = this.parentContexts.getOrCreateContext(this.name).children,
                        c = new St(null),
                        d = this.createActivatedRouteProxy(c, e),
                        p = new Ss(d, l, this.location.injector),
                        g = r.routeConfig.component ? ? r.component;
                    i = this.activated = this.outletContent.createComponent(g, {
                        index: this.outletContent.length,
                        injector: p,
                        environmentInjector: n ? ? this.environmentInjector
                    }), c.next(i.instance), s = this.stackCtrl.createView(this.activated, e), this.proxyMap.set(i.instance, d), this.currentActivatedRoute$.next({
                        component: i.instance,
                        activatedRoute: e
                    })
                }
                this.inputBinder ? .bindActivatedRouteToOutletComponent(this), this.activatedView = s, this.navCtrl.setTopOutlet(this);
                let a = this.stackCtrl.getActiveView();
                this.stackWillChange.emit({
                    enteringView: s,
                    tabSwitch: Yl(s, a)
                }), this.stackCtrl.setActive(s).then(r => {
                    this.activateEvents.emit(i.instance), this.stackDidChange.emit(r)
                })
            }
            canGoBack(e = 1, n) {
                return this.stackCtrl.canGoBack(e, n)
            }
            pop(e = 1, n) {
                return this.stackCtrl.pop(e, n)
            }
            getLastUrl(e) {
                let n = this.stackCtrl.getLastUrl(e);
                return n ? n.url : void 0
            }
            getLastRouteView(e) {
                return this.stackCtrl.getLastUrl(e)
            }
            getRootView(e) {
                return this.stackCtrl.getRootUrl(e)
            }
            getActiveStackId() {
                return this.stackCtrl.getActiveStackId()
            }
            createActivatedRouteProxy(e, n) {
                let i = new Vt;
                return i._futureSnapshot = n._futureSnapshot, i._routerState = n._routerState, i.snapshot = n.snapshot, i.outlet = n.outlet, i.component = n.component, i._paramMap = this.proxyObservable(e, "paramMap"), i._queryParamMap = this.proxyObservable(e, "queryParamMap"), i.url = this.proxyObservable(e, "url"), i.params = this.proxyObservable(e, "params"), i.queryParams = this.proxyObservable(e, "queryParams"), i.fragment = this.proxyObservable(e, "fragment"), i.data = this.proxyObservable(e, "data"), i
            }
            proxyObservable(e, n) {
                return e.pipe(fe(i => !!i), wt(i => this.currentActivatedRoute$.pipe(fe(s => s !== null && s.component === i), wt(s => s && s.activatedRoute[n]), fr())))
            }
            updateActivatedRouteProxy(e, n) {
                let i = this.proxyMap.get(e);
                if (!i) throw new Error("Could not find activated route proxy for view");
                i._futureSnapshot = n._futureSnapshot, i._routerState = n._routerState, i.snapshot = n.snapshot, i.outlet = n.outlet, i.component = n.component, this.currentActivatedRoute$.next({
                    component: e,
                    activatedRoute: n
                })
            }
            static\ u0275fac = function(n) {
                return new(n || o)(He("name"), He("tabs"), v(ke), v(H), v(le), v($), v(Vt), v(o, 12))
            };
            static\ u0275dir = Ct({
                type: o,
                selectors: [
                    ["ion-router-outlet"]
                ],
                inputs: {
                    animated: "animated",
                    animation: "animation",
                    mode: "mode",
                    swipeGesture: "swipeGesture",
                    name: "name"
                },
                outputs: {
                    stackWillChange: "stackWillChange",
                    stackDidChange: "stackDidChange",
                    activateEvents: "activate",
                    deactivateEvents: "deactivate"
                },
                exportAs: ["outlet"],
                standalone: !1
            })
        }
        return o
    })(),
    Ss = class {
        route;
        childContexts;
        parent;
        constructor(t, e, n) {
            this.route = t, this.childContexts = e, this.parent = n
        }
        get(t, e) {
            return t === Vt ? this.route : t === no ? this.childContexts : this.parent.get(t, e)
        }
    },
    Jl = new tt(""),
    gh = (() => {
        class o {
            outletDataSubscriptions = new Map;
            bindActivatedRouteToOutletComponent(e) {
                this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e)
            }
            unsubscribeFromRouteData(e) {
                this.outletDataSubscriptions.get(e) ? .unsubscribe(), this.outletDataSubscriptions.delete(e)
            }
            subscribeToRouteData(e) {
                let {
                    activatedRoute: n
                } = e, i = ve([n.queryParams, n.params, n.data]).pipe(wt(([s, a, r], l) => (r = y(y(y({}, s), a), r), l === 0 ? O(r) : Promise.resolve(r)))).subscribe(s => {
                    if (!e.isActivated || !e.activatedComponentRef || e.activatedRoute !== n || n.component === null) {
                        this.unsubscribeFromRouteData(e);
                        return
                    }
                    let a = c0(n.component);
                    if (!a) {
                        this.unsubscribeFromRouteData(e);
                        return
                    }
                    for (let {
                            templateName: r
                        } of a.inputs) e.activatedComponentRef.setInput(r, s[r])
                });
                this.outletDataSubscriptions.set(e, i)
            }
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac
            })
        }
        return o
    })(),
    t4 = () => ({
        provide: Jl,
        useFactory: mh,
        deps: [le]
    });

function mh(o) {
    return o ? .componentInputBindingEnabled ? new gh : null
}
var vh = ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"],
    e4 = (() => {
        let o = class As {
            routerOutlet;
            navCtrl;
            config;
            r;
            z;
            el;
            constructor(e, n, i, s, a, r) {
                this.routerOutlet = e, this.navCtrl = n, this.config = i, this.r = s, this.z = a, r.detach(), this.el = this.r.nativeElement
            }
            onClick(e) {
                let n = this.defaultHref || this.config.get("backButtonDefaultHref");
                this.routerOutlet ? .canGoBack() ? (this.navCtrl.setDirection("back", void 0, void 0, this.routerAnimation), this.routerOutlet.pop(), e.preventDefault()) : n != null && (this.navCtrl.navigateBack(n, {
                    animation: this.routerAnimation
                }), e.preventDefault())
            }
            static\ u0275fac = function(n) {
                return new(n || As)(v(Es, 8), v(Wo), v(Wn), v(H), v($), v(V))
            };
            static\ u0275dir = Ct({
                type: As,
                hostBindings: function(n, i) {
                    n & 1 && Zt("click", function(a) {
                        return i.onClick(a)
                    })
                },
                inputs: {
                    color: "color",
                    defaultHref: "defaultHref",
                    disabled: "disabled",
                    icon: "icon",
                    mode: "mode",
                    routerAnimation: "routerAnimation",
                    text: "text",
                    type: "type"
                },
                standalone: !1
            })
        };
        return o = U([Go({
            inputs: vh
        })], o), o
    })();
var fh = ["animated", "animation", "root", "rootParams", "swipeGesture"],
    wh = ["push", "insert", "insertPages", "pop", "popTo", "popToRoot", "removeIndex", "setRoot", "setPages", "getActive", "getByIndex", "canGoBack", "getPrevious"],
    o4 = (() => {
        let o = class Is {
            z;
            el;
            constructor(e, n, i, s, a, r) {
                this.z = a, r.detach(), this.el = e.nativeElement, e.nativeElement.delegate = s.create(n, i), lh(this, this.el, ["ionNavDidChange", "ionNavWillChange"])
            }
            static\ u0275fac = function(n) {
                return new(n || Is)(v(H), v(Nt), v(kt), v(lo), v($), v(V))
            };
            static\ u0275dir = Ct({
                type: Is,
                inputs: {
                    animated: "animated",
                    animation: "animation",
                    root: "root",
                    rootParams: "rootParams",
                    swipeGesture: "swipeGesture"
                },
                standalone: !1
            })
        };
        return o = U([Go({
            inputs: fh,
            methods: wh
        })], o), o
    })(),
    n4 = (() => {
        class o {
            navCtrl;
            tabsInner;
            ionTabsWillChange = new Bt;
            ionTabsDidChange = new Bt;
            tabBarSlot = "bottom";
            hasTab = !1;
            selectedTab;
            leavingTab;
            constructor(e) {
                this.navCtrl = e
            }
            ngAfterViewInit() {
                let e = this.tabs.length > 0 ? this.tabs.first : void 0;
                e && (this.hasTab = !0, this.setActiveTab(e.tab), this.tabSwitch())
            }
            ngAfterContentInit() {
                this.detectSlotChanges()
            }
            ngAfterContentChecked() {
                this.detectSlotChanges()
            }
            onStackWillChange({
                enteringView: e,
                tabSwitch: n
            }) {
                let i = e.stackId;
                n && i !== void 0 && this.ionTabsWillChange.emit({
                    tab: i
                })
            }
            onStackDidChange({
                enteringView: e,
                tabSwitch: n
            }) {
                let i = e.stackId;
                n && i !== void 0 && (this.tabBar && (this.tabBar.selectedTab = i), this.ionTabsDidChange.emit({
                    tab: i
                }))
            }
            select(e) {
                let n = typeof e == "string",
                    i = n ? e : e.detail.tab;
                if (this.hasTab) {
                    this.setActiveTab(i), this.tabSwitch();
                    return
                }
                let s = this.outlet.getActiveStackId() === i,
                    a = `${this.outlet.tabsPrefix}/${i}`;
                if (n || e.stopPropagation(), s) {
                    let r = this.outlet.getActiveStackId();
                    if (this.outlet.getLastRouteView(r) ? .url === a) return;
                    let c = this.outlet.getRootView(i),
                        d = c && a === c.url && c.savedExtras;
                    return this.navCtrl.navigateRoot(a, Q(y({}, d), {
                        animated: !0,
                        animationDirection: "back"
                    }))
                } else {
                    let r = this.outlet.getLastRouteView(i),
                        l = r ? .url || a,
                        c = r ? .savedExtras;
                    return this.navCtrl.navigateRoot(l, Q(y({}, c), {
                        animated: !0,
                        animationDirection: "back"
                    }))
                }
            }
            setActiveTab(e) {
                let i = this.tabs.find(s => s.tab === e);
                if (!i) {
                    console.error(`[Ionic Error]: Tab with id: "${e}" does not exist`);
                    return
                }
                this.leavingTab = this.selectedTab, this.selectedTab = i, this.ionTabsWillChange.emit({
                    tab: e
                }), i.el.active = !0
            }
            tabSwitch() {
                let {
                    selectedTab: e,
                    leavingTab: n
                } = this;
                this.tabBar && e && (this.tabBar.selectedTab = e.tab), n ? .tab !== e ? .tab && n ? .el && (n.el.active = !1), e && this.ionTabsDidChange.emit({
                    tab: e.tab
                })
            }
            getSelected() {
                return this.hasTab ? this.selectedTab ? .tab : this.outlet.getActiveStackId()
            }
            detectSlotChanges() {
                this.tabBars.forEach(e => {
                    let n = e.el.getAttribute("slot");
                    n !== this.tabBarSlot && (this.tabBarSlot = n, this.relocateTabBar())
                })
            }
            relocateTabBar() {
                let e = this.tabBar.el;
                this.tabBarSlot === "top" ? this.tabsInner.nativeElement.before(e) : this.tabsInner.nativeElement.after(e)
            }
            static\ u0275fac = function(n) {
                return new(n || o)(v(Wo))
            };
            static\ u0275dir = Ct({
                type: o,
                selectors: [
                    ["ion-tabs"]
                ],
                viewQuery: function(n, i) {
                    if (n & 1 && gn(Jd, 7, H), n & 2) {
                        let s;
                        xe(s = be()) && (i.tabsInner = s.first)
                    }
                },
                hostBindings: function(n, i) {
                    n & 1 && Zt("ionTabButtonClick", function(a) {
                        return i.select(a)
                    })
                },
                outputs: {
                    ionTabsWillChange: "ionTabsWillChange",
                    ionTabsDidChange: "ionTabsDidChange"
                },
                standalone: !1
            })
        }
        return o
    })(),
    xh = o => typeof __zone_symbol__requestAnimationFrame == "function" ? __zone_symbol__requestAnimationFrame(o) : typeof requestAnimationFrame == "function" ? requestAnimationFrame(o) : setTimeout(o),
    Bs = (() => {
        class o {
            injector;
            elementRef;
            onChange = () => {};
            onTouched = () => {};
            lastValue;
            statusChanges;
            constructor(e, n) {
                this.injector = e, this.elementRef = n
            }
            writeValue(e) {
                this.elementRef.nativeElement.value = this.lastValue = e, ro(this.elementRef)
            }
            handleValueChange(e, n) {
                e === this.elementRef.nativeElement && (n !== this.lastValue && (this.lastValue = n, this.onChange(n)), ro(this.elementRef))
            }
            _handleBlurEvent(e) {
                e === this.elementRef.nativeElement ? (this.onTouched(), ro(this.elementRef)) : e.closest("ion-radio-group") === this.elementRef.nativeElement && this.onTouched()
            }
            registerOnChange(e) {
                this.onChange = e
            }
            registerOnTouched(e) {
                this.onTouched = e
            }
            setDisabledState(e) {
                this.elementRef.nativeElement.disabled = e
            }
            ngOnDestroy() {
                this.statusChanges && this.statusChanges.unsubscribe()
            }
            ngAfterViewInit() {
                let e;
                try {
                    e = this.injector.get(ao)
                } catch {}
                if (!e) return;
                e.statusChanges && (this.statusChanges = e.statusChanges.subscribe(() => ro(this.elementRef)));
                let n = e.control;
                n && ["markAsTouched", "markAllAsTouched", "markAsUntouched", "markAsDirty", "markAsPristine"].forEach(s => {
                    if (typeof n[s] < "u") {
                        let a = n[s].bind(n);
                        n[s] = (...r) => {
                            a(...r), ro(this.elementRef)
                        }
                    }
                })
            }
            static\ u0275fac = function(n) {
                return new(n || o)(v(kt), v(H))
            };
            static\ u0275dir = Ct({
                type: o,
                hostBindings: function(n, i) {
                    n & 1 && Zt("ionBlur", function(a) {
                        return i._handleBlurEvent(a.target)
                    })
                },
                standalone: !1
            })
        }
        return o
    })(),
    ro = o => {
        xh(() => {
            let t = o.nativeElement,
                e = t.value != null && t.value.toString().length > 0,
                n = bh(t);
            ys(t, n);
            let i = t.closest("ion-item");
            i && (e ? ys(i, [...n, "item-has-value"]) : ys(i, n))
        })
    },
    bh = o => {
        let t = o.classList,
            e = [];
        for (let n = 0; n < t.length; n++) {
            let i = t.item(n);
            i !== null && kh(i, "ng-") && e.push(`ion-${i.substring(3)}`)
        }
        return e
    },
    ys = (o, t) => {
        let e = o.classList;
        e.remove("ion-valid", "ion-invalid", "ion-touched", "ion-untouched", "ion-dirty", "ion-pristine"), e.add(...t)
    },
    kh = (o, t) => o.substring(0, t.length) === t,
    Ls = class {
        shouldDetach(t) {
            return !1
        }
        shouldAttach(t) {
            return !1
        }
        store(t, e) {}
        retrieve(t) {
            return null
        }
        shouldReuseRoute(t, e) {
            if (t.routeConfig !== e.routeConfig) return !1;
            let n = t.params,
                i = e.params,
                s = Object.keys(n),
                a = Object.keys(i);
            if (s.length !== a.length) return !1;
            for (let r of s)
                if (i[r] !== n[r]) return !1;
            return !0
        }
    },
    qn = class {
        ctrl;
        constructor(t) {
            this.ctrl = t
        }
        create(t) {
            return this.ctrl.create(t || {})
        }
        dismiss(t, e, n) {
            return this.ctrl.dismiss(t, e, n)
        }
        getTop() {
            return this.ctrl.getTop()
        }
    };
var i4 = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
var s4 = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",
    a4 = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
var Ds = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
var r4 = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
var l4 = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
    c4 = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
var js, Mh = () => {
        if (typeof window > "u") return new Map;
        if (!js) {
            let o = window;
            o.Ionicons = o.Ionicons || {}, js = o.Ionicons.map = o.Ionicons.map || new Map
        }
        return js
    },
    Ch = o => {
        let t = $s(o.src);
        return t || (t = h4(o.name, o.icon, o.mode, o.ios, o.md), t ? zh(t, o) : o.icon && (t = $s(o.icon), t || (t = $s(o.icon[o.mode]), t)) ? t : null)
    },
    zh = (o, t) => {
        let e = Mh().get(o);
        if (e) return e;
        try {
            return a2(`svg/${o}.svg`)
        } catch {
            console.warn(`[Ionicons Warning]: Could not load icon with name "${o}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, t)
        }
    },
    h4 = (o, t, e, n, i) => (e = (e && d1(e)) === "ios" ? "ios" : "md", n && e === "ios" ? o = d1(n) : i && e === "md" ? o = d1(i) : (!o && t && !p4(t) && (o = t), h1(o) && (o = d1(o))), !h1(o) || o.trim() === "" || o.replace(/[a-z]|-|\d/gi, "") !== "" ? null : o),
    $s = o => h1(o) && (o = o.trim(), p4(o)) ? o : null,
    p4 = o => o.length > 0 && /(\/|\.)/.test(o),
    h1 = o => typeof o == "string",
    d1 = o => o.toLowerCase(),
    Sh = (o, t = []) => {
        let e = {};
        return t.forEach(n => {
            o.hasAttribute(n) && (o.getAttribute(n) !== null && (e[n] = o.getAttribute(n)), o.removeAttribute(n))
        }), e
    },
    Ah = o => o && o.dir !== "" ? o.dir.toLowerCase() === "rtl" : document ? .dir.toLowerCase() === "rtl",
    Ih = o => {
        let t = document.createElement("div");
        t.innerHTML = o;
        for (let n = t.childNodes.length - 1; n >= 0; n--) t.childNodes[n].nodeName.toLowerCase() !== "svg" && t.removeChild(t.childNodes[n]);
        let e = t.firstElementChild;
        if (e && e.nodeName.toLowerCase() === "svg") {
            let n = e.getAttribute("class") || "";
            if (e.setAttribute("class", (n + " s-ion-icon").trim()), u4(e)) return t.innerHTML
        }
        return ""
    },
    u4 = o => {
        if (o.nodeType === 1) {
            if (o.nodeName.toLowerCase() === "script") return !1;
            for (let t = 0; t < o.attributes.length; t++) {
                let e = o.attributes[t].name;
                if (h1(e) && e.toLowerCase().indexOf("on") === 0) return !1
            }
            for (let t = 0; t < o.childNodes.length; t++)
                if (!u4(o.childNodes[t])) return !1
        }
        return !0
    },
    Lh = o => o.startsWith("data:image/svg+xml"),
    Eh = o => o.indexOf(";utf8,") !== -1,
    co = new Map,
    d4 = new Map,
    Hs, Bh = (o, t) => {
        let e = d4.get(o);
        if (!e)
            if (typeof fetch < "u" && typeof document < "u")
                if (Lh(o) && Eh(o)) {
                    Hs || (Hs = new DOMParser);
                    let i = Hs.parseFromString(o, "text/html").querySelector("svg");
                    return i && co.set(o, i.outerHTML), Promise.resolve()
                } else e = fetch(o).then(n => {
                    if (n.ok) return n.text().then(i => {
                        i && t !== !1 && (i = Ih(i)), co.set(o, i || "")
                    });
                    co.set(o, "")
                }), d4.set(o, e);
        else return co.set(o, ""), Promise.resolve();
        return e
    },
    Dh = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}",
    jh = Dh,
    $h = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.iconName = null, this.inheritedAttributes = {}, this.didLoadIcon = !1, this.svgContent = void 0, this.isVisible = !1, this.mode = Hh(), this.color = void 0, this.ios = void 0, this.md = void 0, this.flipRtl = void 0, this.name = void 0, this.src = void 0, this.icon = void 0, this.size = void 0, this.lazy = !1, this.sanitize = !0
        }
        componentWillLoad() {
            this.inheritedAttributes = Sh(this.el, ["aria-label"])
        }
        connectedCallback() {
            this.waitUntilVisible(this.el, "50px", () => {
                this.isVisible = !0, this.loadIcon()
            })
        }
        componentDidLoad() {
            this.didLoadIcon || this.loadIcon()
        }
        disconnectedCallback() {
            this.io && (this.io.disconnect(), this.io = void 0)
        }
        waitUntilVisible(t, e, n) {
            if (mt.isBrowser && this.lazy && typeof window < "u" && window.IntersectionObserver) {
                let i = this.io = new window.IntersectionObserver(s => {
                    s[0].isIntersecting && (i.disconnect(), this.io = void 0, n())
                }, {
                    rootMargin: e
                });
                i.observe(t)
            } else n()
        }
        loadIcon() {
            if (mt.isBrowser && this.isVisible) {
                let t = Ch(this);
                t && (co.has(t) ? this.svgContent = co.get(t) : Bh(t, this.sanitize).then(() => this.svgContent = co.get(t)), this.didLoadIcon = !0)
            }
            this.iconName = h4(this.name, this.icon, this.mode, this.ios, this.md)
        }
        render() {
            let {
                flipRtl: t,
                iconName: e,
                inheritedAttributes: n,
                el: i
            } = this, s = this.mode || "md", a = e ? (e.includes("arrow") || e.includes("chevron")) && t !== !1 : !1, r = t || a;
            return u(S, Object.assign({
                role: "img",
                class: Object.assign(Object.assign({
                    [s]: !0
                }, Th(this.color)), {
                    [`icon-${this.size}`]: !!this.size,
                    "flip-rtl": r,
                    "icon-rtl": r && Ah(i)
                })
            }, n), mt.isBrowser && this.svgContent ? u("div", {
                class: "icon-inner",
                innerHTML: this.svgContent
            }) : u("div", {
                class: "icon-inner"
            }))
        }
        static get assetsDirs() {
            return ["svg"]
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                name: ["loadIcon"],
                src: ["loadIcon"],
                icon: ["loadIcon"],
                ios: ["loadIcon"],
                md: ["loadIcon"]
            }
        }
        static get style() {
            return jh
        }
    }, [1, "ion-icon", {
        mode: [1025],
        color: [1],
        ios: [1],
        md: [1],
        flipRtl: [4, "flip-rtl"],
        name: [513],
        src: [1],
        icon: [8],
        size: [1],
        lazy: [4],
        sanitize: [4],
        svgContent: [32],
        isVisible: [32]
    }, void 0, {
        name: ["loadIcon"],
        src: ["loadIcon"],
        icon: ["loadIcon"],
        ios: ["loadIcon"],
        md: ["loadIcon"]
    }]),
    Hh = () => mt.isBrowser && typeof document < "u" && document.documentElement.getAttribute("mode") || "md",
    Th = o => o ? {
        "ion-color": !0,
        [`ion-color-${o}`]: !0
    } : null;

function pe() {
    if (typeof customElements > "u") return;
    ["ion-icon"].forEach(t => {
        switch (t) {
            case "ion-icon":
                customElements.get(t) || customElements.define(t, $h);
                break
        }
    })
}
var _h = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}",
    Vh = _h,
    Oh = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.type = "bounded"
        }
        addRipple(t, e) {
            return w(this, null, function*() {
                return new Promise(n => {
                    ie(() => {
                        let i = this.el.getBoundingClientRect(),
                            s = i.width,
                            a = i.height,
                            r = Math.sqrt(s * s + a * a),
                            l = Math.max(a, s),
                            c = this.unbounded ? l : r + Ph,
                            d = Math.floor(l * Fh),
                            p = c / d,
                            g = t - i.left,
                            m = e - i.top;
                        this.unbounded && (g = s * .5, m = a * .5);
                        let f = g - d * .5,
                            x = m - d * .5,
                            k = s * .5 - g,
                            B = a * .5 - m;
                        Ht(() => {
                            let j = document.createElement("div");
                            j.classList.add("ripple-effect");
                            let D = j.style;
                            D.top = x + "px", D.left = f + "px", D.width = D.height = d + "px", D.setProperty("--final-scale", `${p}`), D.setProperty("--translate-end", `${k}px, ${B}px`), (this.el.shadowRoot || this.el).appendChild(j), setTimeout(() => {
                                n(() => {
                                    Rh(j)
                                })
                            }, 325)
                        })
                    })
                })
            })
        }
        get unbounded() {
            return this.type === "unbounded"
        }
        render() {
            let t = b(this);
            return u(S, {
                key: "40c7f73e7f5f67e29f83e1236a61c6e1c9943c42",
                role: "presentation",
                class: {
                    [t]: !0,
                    unbounded: this.unbounded
                }
            })
        }
        get el() {
            return this
        }
        static get style() {
            return Vh
        }
    }, [1, "ion-ripple-effect", {
        type: [1],
        addRipple: [64]
    }]),
    Rh = o => {
        o.classList.add("fade-out"), setTimeout(() => {
            o.remove()
        }, 200)
    },
    Ph = 10,
    Fh = .5;

function Ot() {
    if (typeof customElements > "u") return;
    ["ion-ripple-effect"].forEach(t => {
        switch (t) {
            case "ion-ripple-effect":
                customElements.get(t) || customElements.define(t, Oh);
                break
        }
    })
}
var Nh = ':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-hover:transparent;--background-hover-opacity:1;--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #0054e9);--icon-margin-end:1px;--icon-margin-start:-4px;--icon-font-size:1.6em;--min-height:32px;font-size:clamp(17px, 1.0625rem, 21.998px)}.button-native{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}:host(.ion-activated) .button-native{opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',
    Uh = Nh,
    qh = ':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--border-radius:4px;--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:0.04;--color:currentColor;--icon-margin-end:0;--icon-margin-start:0;--icon-font-size:1.5rem;--icon-font-weight:normal;--min-height:32px;--min-width:44px;--padding-start:12px;--padding-end:12px;font-size:0.875rem;font-weight:500;text-transform:uppercase}:host(.back-button-has-icon-only){--border-radius:50%;min-width:48px;min-height:48px;aspect-ratio:1/1}.button-native{-webkit-box-shadow:none;box-shadow:none}.button-text{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0}ion-icon{line-height:0.67;text-align:start}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}',
    Wh = qh,
    Gh = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.inheritedAttributes = {}, this.onClick = t => w(this, null, function*() {
                let e = this.el.closest("ion-nav");
                return t.preventDefault(), e && (yield e.canGoBack()) ? e.pop({
                    animationBuilder: this.routerAnimation,
                    skipIfBusy: !0
                }) : ce(this.defaultHref, t, "back", this.routerAnimation)
            }), this.color = void 0, this.defaultHref = void 0, this.disabled = !1, this.icon = void 0, this.text = void 0, this.type = "button", this.routerAnimation = void 0
        }
        componentWillLoad() {
            this.inheritedAttributes = zt(this.el), this.defaultHref === void 0 && (this.defaultHref = Y.get("backButtonDefaultHref"))
        }
        get backButtonIcon() {
            let t = this.icon;
            return t ? ? (b(this) === "ios" ? Y.get("backButtonIcon", s4) : Y.get("backButtonIcon", i4))
        }
        get backButtonText() {
            let t = b(this) === "ios" ? "Back" : null;
            return this.text != null ? this.text : Y.get("backButtonText", t)
        }
        get hasIconOnly() {
            return this.backButtonIcon && !this.backButtonText
        }
        get rippleType() {
            return this.hasIconOnly ? "unbounded" : "bounded"
        }
        render() {
            let {
                color: t,
                defaultHref: e,
                disabled: n,
                type: i,
                hasIconOnly: s,
                backButtonIcon: a,
                backButtonText: r,
                icon: l,
                inheritedAttributes: c
            } = this, d = e !== void 0, p = b(this), g = c["aria-label"] || r || "back";
            return u(S, {
                key: "5466624a10f1ab56f5469e6dc07080303880f2fe",
                onClick: this.onClick,
                class: Z(t, {
                    [p]: !0,
                    button: !0,
                    "back-button-disabled": n,
                    "back-button-has-icon-only": s,
                    "in-toolbar": it("ion-toolbar", this.el),
                    "in-toolbar-color": it("ion-toolbar[color]", this.el),
                    "ion-activatable": !0,
                    "ion-focusable": !0,
                    "show-back-button": d
                })
            }, u("button", {
                key: "63bc75ef0ad7cc9fb79e58217a3314b20acd73e3",
                type: i,
                disabled: n,
                class: "button-native",
                part: "native",
                "aria-label": g
            }, u("span", {
                key: "5d3eacbd11af2245c6e1151cab446a0d96559ad8",
                class: "button-inner"
            }, a && u("ion-icon", {
                key: "6439af0ae463764174e7d3207f02267811df666d",
                part: "icon",
                icon: a,
                "aria-hidden": "true",
                lazy: !1,
                "flip-rtl": l === void 0
            }), r && u("span", {
                key: "8ee89fb18dfdb5b75948a8b197ff4cdbc008742f",
                part: "text",
                "aria-hidden": "true",
                class: "button-text"
            }, r)), p === "md" && u("ion-ripple-effect", {
                key: "63803a884998bc73bea5afe0b2a0a14e3fa4d6bf",
                type: this.rippleType
            })))
        }
        get el() {
            return this
        }
        static get style() {
            return {
                ios: Uh,
                md: Wh
            }
        }
    }, [33, "ion-back-button", {
        color: [513],
        defaultHref: [1025, "default-href"],
        disabled: [516],
        icon: [1],
        text: [1],
        type: [1],
        routerAnimation: [16]
    }]);

function Xh() {
    if (typeof customElements > "u") return;
    ["ion-back-button", "ion-icon", "ion-ripple-effect"].forEach(t => {
        switch (t) {
            case "ion-back-button":
                customElements.get(t) || customElements.define(t, Gh);
                break;
            case "ion-icon":
                customElements.get(t) || pe();
                break;
            case "ion-ripple-effect":
                customElements.get(t) || Ot();
                break
        }
    })
}
var g4 = Xh;
var Xo = () => {
    let o;
    return {
        lock: () => w(void 0, null, function*() {
            let e = o,
                n;
            return o = new Promise(i => n = i), e !== void 0 && (yield e), n
        })
    }
};
var Yh = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}",
    Zh = Yh,
    Kh = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionNavWillLoad = L(this, "ionNavWillLoad", 7), this.ionNavWillChange = L(this, "ionNavWillChange", 3), this.ionNavDidChange = L(this, "ionNavDidChange", 3), this.lockController = Xo(), this.gestureOrAnimationInProgress = !1, this.mode = b(this), this.delegate = void 0, this.animated = !0, this.animation = void 0, this.swipeHandler = void 0
        }
        swipeHandlerChanged() {
            this.gesture && this.gesture.enable(this.swipeHandler !== void 0)
        }
        connectedCallback() {
            return w(this, null, function*() {
                let t = () => {
                    this.gestureOrAnimationInProgress = !0, this.swipeHandler && this.swipeHandler.onStart()
                };
                this.gesture = (yield
                    import ("./swipe-back-GAKVXKU2.js")).createSwipeBackGesture(this.el, () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(), () => t(), e => {
                    var n;
                    return (n = this.ani) === null || n === void 0 ? void 0 : n.progressStep(e)
                }, (e, n, i) => {
                    if (this.ani) {
                        this.ani.onFinish(() => {
                            this.gestureOrAnimationInProgress = !1, this.swipeHandler && this.swipeHandler.onEnd(e)
                        }, {
                            oneTimeCallback: !0
                        });
                        let s = e ? -.001 : .001;
                        e ? s += Qt([0, 0], [.32, .72], [0, 1], [1, 1], n)[0] : (this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"), s += Qt([0, 0], [1, 0], [.68, .28], [1, 1], n)[0]), this.ani.progressEnd(e ? 1 : 0, s, i)
                    } else this.gestureOrAnimationInProgress = !1
                }), this.swipeHandlerChanged()
            })
        }
        componentWillLoad() {
            this.ionNavWillLoad.emit()
        }
        disconnectedCallback() {
            this.gesture && (this.gesture.destroy(), this.gesture = void 0)
        }
        commit(t, e, n) {
            return w(this, null, function*() {
                let i = yield this.lockController.lock(), s = !1;
                try {
                    s = yield this.transition(t, e, n)
                } catch (a) {
                    console.error(a)
                }
                return i(), s
            })
        }
        setRouteId(t, e, n, i) {
            return w(this, null, function*() {
                return {
                    changed: yield this.setRoot(t, e, {
                        duration: n === "root" ? 0 : void 0,
                        direction: n === "back" ? "back" : "forward",
                        animationBuilder: i
                    }), element: this.activeEl
                }
            })
        }
        getRouteId() {
            return w(this, null, function*() {
                let t = this.activeEl;
                return t ? {
                    id: t.tagName,
                    element: t,
                    params: this.activeParams
                } : void 0
            })
        }
        setRoot(t, e, n) {
            return w(this, null, function*() {
                if (this.activeComponent === t && Mi(e, this.activeParams)) return !1;
                let i = this.activeEl,
                    s = yield de(this.delegate, this.el, t, ["ion-page", "ion-page-invisible"], e);
                return this.activeComponent = t, this.activeEl = s, this.activeParams = e, yield this.commit(s, i, n), yield Oo(this.delegate, i), !0
            })
        }
        transition(i, s) {
            return w(this, arguments, function*(t, e, n = {}) {
                if (e === t) return !1;
                this.ionNavWillChange.emit();
                let {
                    el: a,
                    mode: r
                } = this, l = this.animated && Y.getBoolean("animated", !0), c = n.animationBuilder || this.animation || Y.get("navAnimation");
                return yield Ci(Object.assign(Object.assign({
                    mode: r,
                    animated: l,
                    enteringEl: t,
                    leavingEl: e,
                    baseEl: a,
                    deepWait: ye(a),
                    progressCallback: n.progressAnimation ? d => {
                        d !== void 0 && !this.gestureOrAnimationInProgress ? (this.gestureOrAnimationInProgress = !0, d.onFinish(() => {
                            this.gestureOrAnimationInProgress = !1, this.swipeHandler && this.swipeHandler.onEnd(!1)
                        }, {
                            oneTimeCallback: !0
                        }), d.progressEnd(0, 0, 0)) : this.ani = d
                    } : void 0
                }, n), {
                    animationBuilder: c
                })), this.ionNavDidChange.emit(), !0
            })
        }
        render() {
            return u("slot", {
                key: "8d0c163c5f63158e16ef2db7cc3c756cf597461d"
            })
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                swipeHandler: ["swipeHandlerChanged"]
            }
        }
        static get style() {
            return Zh
        }
    }, [1, "ion-router-outlet", {
        mode: [1025],
        delegate: [16],
        animated: [4],
        animation: [16],
        swipeHandler: [16],
        commit: [64],
        setRouteId: [64],
        getRouteId: [64]
    }, void 0, {
        swipeHandler: ["swipeHandlerChanged"]
    }]);

function Qh() {
    if (typeof customElements > "u") return;
    ["ion-router-outlet"].forEach(t => {
        switch (t) {
            case "ion-router-outlet":
                customElements.get(t) || customElements.define(t, Kh);
                break
        }
    })
}
var m4 = Qh;
var Jh = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",
    t7 = Jh,
    e7 = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",
    o7 = e7,
    n7 = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionBackdropTap = L(this, "ionBackdropTap", 7), this.visible = !0, this.tappable = !0, this.stopPropagation = !0
        }
        onMouseDown(t) {
            this.emitTap(t)
        }
        emitTap(t) {
            this.stopPropagation && (t.preventDefault(), t.stopPropagation()), this.tappable && this.ionBackdropTap.emit()
        }
        render() {
            let t = b(this);
            return u(S, {
                key: "7abaf2c310aa399607451b14063265e8a5846938",
                "aria-hidden": "true",
                class: {
                    [t]: !0,
                    "backdrop-hide": !this.visible,
                    "backdrop-no-tappable": !this.tappable
                }
            })
        }
        static get style() {
            return {
                ios: t7,
                md: o7
            }
        }
    }, [33, "ion-backdrop", {
            visible: [4],
            tappable: [4],
            stopPropagation: [4, "stop-propagation"]
        },
        [
            [2, "click", "onMouseDown"]
        ]
    ]);

function Yo() {
    if (typeof customElements > "u") return;
    ["ion-backdrop"].forEach(t => {
        switch (t) {
            case "ion-backdrop":
                customElements.get(t) || customElements.define(t, n7);
                break
        }
    })
}
var Gn = function(o) {
        return o.Dark = "DARK", o.Light = "LIGHT", o.Default = "DEFAULT", o
    }(Gn || {}),
    Os = {
        getEngine() {
            let o = f2();
            if (o ? .isPluginAvailable("StatusBar")) return o.Plugins.StatusBar
        },
        setStyle(o) {
            let t = this.getEngine();
            t && t.setStyle(o)
        },
        getStyle: function() {
            return w(this, null, function*() {
                let o = this.getEngine();
                if (!o) return Gn.Default;
                let {
                    style: t
                } = yield o.getInfo();
                return t
            })
        }
    },
    Ts = (o, t) => {
        if (t === 1) return 0;
        let e = 1 / (1 - t),
            n = -(t * e);
        return o * e + n
    },
    x4 = () => {
        !pt || pt.innerWidth >= 768 || Os.setStyle({
            style: Gn.Dark
        })
    },
    _s = (o = Gn.Default) => {
        !pt || pt.innerWidth >= 768 || Os.setStyle({
            style: o
        })
    },
    b4 = (o, t) => w(void 0, null, function*() {
        typeof o.canDismiss != "function" || !(yield o.canDismiss(void 0, he)) || (t.isRunning() ? t.onFinish(() => {
            o.dismiss(void 0, "handler")
        }, {
            oneTimeCallback: !0
        }) : o.dismiss(void 0, "handler"))
    }),
    Vs = o => .00255275 * 2.71828 ** (-14.9619 * o) - 1.00255 * 2.71828 ** (-.0380968 * o) + 1,
    p1 = {
        MIN_PRESENTING_SCALE: .915
    },
    i7 = (o, t, e, n) => {
        let s = o.offsetHeight,
            a = !1,
            r = !1,
            l = null,
            c = null,
            d = .2,
            p = !0,
            g = 0,
            m = () => l && Lo(l) ? l.scrollY : !0,
            j = Ai({
                el: o,
                gestureName: "modalSwipeToClose",
                gesturePriority: bl,
                direction: "y",
                threshold: 10,
                canStart: D => {
                    let T = D.event.target;
                    return T === null || !T.closest ? !0 : (l = Ii(T), l ? (Lo(l) ? c = ut(l).querySelector(".inner-scroll") : c = l, !!!l.querySelector("ion-refresher") && c.scrollTop === 0) : T.closest("ion-footer") === null)
                },
                onStart: D => {
                    let {
                        deltaY: T
                    } = D;
                    p = m(), r = o.canDismiss !== void 0 && o.canDismiss !== !0, T > 0 && l && b0(l), t.progressStart(!0, a ? 1 : 0)
                },
                onMove: D => {
                    let {
                        deltaY: T
                    } = D;
                    T > 0 && l && b0(l);
                    let _ = D.deltaY / s,
                        E = _ >= 0 && r,
                        z = E ? d : .9999,
                        A = E ? Vs(_ / z) : _,
                        R = _t(1e-4, A, z);
                    t.progressStep(R), R >= .5 && g < .5 ? _s(e) : R < .5 && g >= .5 && x4(), g = R
                },
                onEnd: D => {
                    let T = D.velocityY,
                        _ = D.deltaY / s,
                        E = _ >= 0 && r,
                        z = E ? d : .9999,
                        A = E ? Vs(_ / z) : _,
                        R = _t(1e-4, A, z),
                        ot = (D.deltaY + T * 1e3) / s,
                        lt = !E && ot >= .5,
                        ht = lt ? -.001 : .001;
                    lt ? (t.easing("cubic-bezier(0.32, 0.72, 0, 1)"), ht += Qt([0, 0], [.32, .72], [0, 1], [1, 1], R)[0]) : (t.easing("cubic-bezier(1, 0, 0.68, 0.28)"), ht += Qt([0, 0], [1, 0], [.68, .28], [1, 1], R)[0]);
                    let ee = v4(lt ? _ * s : (1 - R) * s, T);
                    a = lt, j.enable(!1), l && v2(l, p), t.onFinish(() => {
                        lt || j.enable(!0)
                    }).progressEnd(lt ? 1 : 0, ht, ee), E && R > z / 4 ? b4(o, t) : lt && n()
                }
            });
        return j
    },
    v4 = (o, t) => _t(400, o / Math.abs(t * 1.1), 500),
    k4 = o => {
        let {
            currentBreakpoint: t,
            backdropBreakpoint: e,
            expandToScroll: n
        } = o, i = e === void 0 || e < t, s = i ? `calc(var(--backdrop-opacity) * ${t})` : "0", a = F("backdropAnimation").fromTo("opacity", 0, s);
        i && a.beforeStyles({
            "pointer-events": "none"
        }).afterClearStyles(["pointer-events"]);
        let r = F("wrapperAnimation").keyframes([{
                offset: 0,
                opacity: 1,
                transform: "translateY(100%)"
            }, {
                offset: 1,
                opacity: 1,
                transform: `translateY(${100-t*100}%)`
            }]),
            l = n ? void 0 : F("contentAnimation").keyframes([{
                offset: 0,
                opacity: 1,
                maxHeight: `${(1-t)*100}%`
            }, {
                offset: 1,
                opacity: 1,
                maxHeight: `${t*100}%`
            }]);
        return {
            wrapperAnimation: r,
            backdropAnimation: a,
            contentAnimation: l
        }
    },
    y4 = o => {
        let {
            currentBreakpoint: t,
            backdropBreakpoint: e
        } = o, n = `calc(var(--backdrop-opacity) * ${Ts(t,e)})`, i = [{
            offset: 0,
            opacity: n
        }, {
            offset: 1,
            opacity: 0
        }], s = [{
            offset: 0,
            opacity: n
        }, {
            offset: e,
            opacity: 0
        }, {
            offset: 1,
            opacity: 0
        }], a = F("backdropAnimation").keyframes(e !== 0 ? s : i);
        return {
            wrapperAnimation: F("wrapperAnimation").keyframes([{
                offset: 0,
                opacity: 1,
                transform: `translateY(${100-t*100}%)`
            }, {
                offset: 1,
                opacity: 1,
                transform: "translateY(100%)"
            }]),
            backdropAnimation: a
        }
    },
    s7 = () => {
        let o = F().fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({
                "pointer-events": "none"
            }).afterClearStyles(["pointer-events"]),
            t = F().fromTo("transform", "translateY(100vh)", "translateY(0vh)");
        return {
            backdropAnimation: o,
            wrapperAnimation: t,
            contentAnimation: void 0
        }
    },
    f4 = (o, t) => {
        let {
            presentingEl: e,
            currentBreakpoint: n,
            expandToScroll: i
        } = t, s = ut(o), {
            wrapperAnimation: a,
            backdropAnimation: r,
            contentAnimation: l
        } = n !== void 0 ? k4(t) : s7();
        r.addElement(s.querySelector("ion-backdrop")), a.addElement(s.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({
            opacity: 1
        }), !i && l ? .addElement(o.querySelector(".ion-page"));
        let c = F("entering-base").addElement(o).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation([a]).beforeAddWrite(() => {
            if (i) return;
            let d = o.querySelector("ion-footer"),
                p = o.shadowRoot.querySelector("ion-footer");
            if (d && !p) {
                let g = d.clientHeight,
                    m = d.cloneNode(!0);
                o.shadowRoot.appendChild(m), d.style.setProperty("display", "none"), d.setAttribute("aria-hidden", "true"), o.querySelector(".ion-page").style.setProperty("padding-bottom", `${g}px`)
            }
        });
        if (l && c.addAnimation(l), e) {
            let d = window.innerWidth < 768,
                p = e.tagName === "ION-MODAL" && e.presentingElement !== void 0,
                g = ut(e),
                m = F().beforeStyles({
                    transform: "translateY(0)",
                    "transform-origin": "top center",
                    overflow: "hidden"
                }),
                f = document.body;
            if (d) {
                let x = CSS.supports("width", "max(0px, 1px)") ? "max(30px, var(--ion-safe-area-top))" : "30px",
                    k = p ? "-10px" : x,
                    B = p1.MIN_PRESENTING_SCALE,
                    j = `translateY(${k}) scale(${B})`;
                m.afterStyles({
                    transform: j
                }).beforeAddWrite(() => f.style.setProperty("background-color", "black")).addElement(e).keyframes([{
                    offset: 0,
                    filter: "contrast(1)",
                    transform: "translateY(0px) scale(1)",
                    borderRadius: "0px"
                }, {
                    offset: 1,
                    filter: "contrast(0.85)",
                    transform: j,
                    borderRadius: "10px 10px 0 0"
                }]), c.addAnimation(m)
            } else if (c.addAnimation(r), !p) a.fromTo("opacity", "0", "1");
            else {
                let k = `translateY(-10px) scale(${p?p1.MIN_PRESENTING_SCALE:1})`;
                m.afterStyles({
                    transform: k
                }).addElement(g.querySelector(".modal-wrapper")).keyframes([{
                    offset: 0,
                    filter: "contrast(1)",
                    transform: "translateY(0) scale(1)"
                }, {
                    offset: 1,
                    filter: "contrast(0.85)",
                    transform: k
                }]);
                let B = F().afterStyles({
                    transform: k
                }).addElement(g.querySelector(".modal-shadow")).keyframes([{
                    offset: 0,
                    opacity: "1",
                    transform: "translateY(0) scale(1)"
                }, {
                    offset: 1,
                    opacity: "0",
                    transform: k
                }]);
                c.addAnimation([m, B])
            }
        } else c.addAnimation(r);
        return c
    },
    a7 = () => {
        let o = F().fromTo("opacity", "var(--backdrop-opacity)", 0),
            t = F().fromTo("transform", "translateY(0vh)", "translateY(100vh)");
        return {
            backdropAnimation: o,
            wrapperAnimation: t
        }
    },
    w4 = (o, t, e = 500) => {
        let {
            presentingEl: n,
            currentBreakpoint: i,
            expandToScroll: s
        } = t, a = ut(o), {
            wrapperAnimation: r,
            backdropAnimation: l
        } = i !== void 0 ? y4(t) : a7();
        l.addElement(a.querySelector("ion-backdrop")), r.addElement(a.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({
            opacity: 1
        });
        let c = F("leaving-base").addElement(o).easing("cubic-bezier(0.32,0.72,0,1)").duration(e).addAnimation(r).beforeAddWrite(() => {
            if (s) return;
            let d = o.querySelector("ion-footer");
            if (d) {
                let p = o.shadowRoot.querySelector("ion-footer");
                d.style.removeProperty("display"), d.removeAttribute("aria-hidden"), p.style.setProperty("display", "none"), p.setAttribute("aria-hidden", "true"), o.querySelector(".ion-page").style.removeProperty("padding-bottom")
            }
        });
        if (n) {
            let d = window.innerWidth < 768,
                p = n.tagName === "ION-MODAL" && n.presentingElement !== void 0,
                g = ut(n),
                m = F().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(x => {
                    if (x !== 1) return;
                    n.style.setProperty("overflow", ""), Array.from(f.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter(B => B.presentingElement !== void 0).length <= 1 && f.style.setProperty("background-color", "")
                }),
                f = document.body;
            if (d) {
                let x = CSS.supports("width", "max(0px, 1px)") ? "max(30px, var(--ion-safe-area-top))" : "30px",
                    k = p ? "-10px" : x,
                    B = p1.MIN_PRESENTING_SCALE,
                    j = `translateY(${k}) scale(${B})`;
                m.addElement(n).keyframes([{
                    offset: 0,
                    filter: "contrast(0.85)",
                    transform: j,
                    borderRadius: "10px 10px 0 0"
                }, {
                    offset: 1,
                    filter: "contrast(1)",
                    transform: "translateY(0px) scale(1)",
                    borderRadius: "0px"
                }]), c.addAnimation(m)
            } else if (c.addAnimation(l), !p) r.fromTo("opacity", "1", "0");
            else {
                let k = `translateY(-10px) scale(${p?p1.MIN_PRESENTING_SCALE:1})`;
                m.addElement(g.querySelector(".modal-wrapper")).afterStyles({
                    transform: "translate3d(0, 0, 0)"
                }).keyframes([{
                    offset: 0,
                    filter: "contrast(0.85)",
                    transform: k
                }, {
                    offset: 1,
                    filter: "contrast(1)",
                    transform: "translateY(0) scale(1)"
                }]);
                let B = F().addElement(g.querySelector(".modal-shadow")).afterStyles({
                    transform: "translateY(0) scale(1)"
                }).keyframes([{
                    offset: 0,
                    opacity: "0",
                    transform: k
                }, {
                    offset: 1,
                    opacity: "1",
                    transform: "translateY(0) scale(1)"
                }]);
                c.addAnimation([m, B])
            }
        } else c.addAnimation(l);
        return c
    },
    r7 = () => {
        let o = F().fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({
                "pointer-events": "none"
            }).afterClearStyles(["pointer-events"]),
            t = F().keyframes([{
                offset: 0,
                opacity: .01,
                transform: "translateY(40px)"
            }, {
                offset: 1,
                opacity: 1,
                transform: "translateY(0px)"
            }]);
        return {
            backdropAnimation: o,
            wrapperAnimation: t,
            contentAnimation: void 0
        }
    },
    l7 = (o, t) => {
        let {
            currentBreakpoint: e,
            expandToScroll: n
        } = t, i = ut(o), {
            wrapperAnimation: s,
            backdropAnimation: a,
            contentAnimation: r
        } = e !== void 0 ? k4(t) : r7();
        a.addElement(i.querySelector("ion-backdrop")), s.addElement(i.querySelector(".modal-wrapper")), n && r ? .addElement(o.querySelector(".ion-page"));
        let l = F().addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([a, s]).beforeAddWrite(() => {
            if (n) return;
            let c = o.querySelector("ion-footer"),
                d = o.shadowRoot.querySelector("ion-footer");
            if (c && !d) {
                let p = c.clientHeight,
                    g = c.cloneNode(!0);
                o.shadowRoot.appendChild(g), c.style.setProperty("display", "none"), c.setAttribute("aria-hidden", "true"), o.querySelector(".ion-page").style.setProperty("padding-bottom", `${p}px`)
            }
        });
        return r && l.addAnimation(r), l
    },
    c7 = () => {
        let o = F().fromTo("opacity", "var(--backdrop-opacity)", 0),
            t = F().keyframes([{
                offset: 0,
                opacity: .99,
                transform: "translateY(0px)"
            }, {
                offset: 1,
                opacity: 0,
                transform: "translateY(40px)"
            }]);
        return {
            backdropAnimation: o,
            wrapperAnimation: t
        }
    },
    d7 = (o, t) => {
        let {
            currentBreakpoint: e,
            expandToScroll: n
        } = t, i = ut(o), {
            wrapperAnimation: s,
            backdropAnimation: a
        } = e !== void 0 ? y4(t) : c7();
        return a.addElement(i.querySelector("ion-backdrop")), s.addElement(i.querySelector(".modal-wrapper")), F().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([a, s]).beforeAddWrite(() => {
            if (n) return;
            let l = o.querySelector("ion-footer");
            if (l) {
                let c = o.shadowRoot.querySelector("ion-footer");
                l.style.removeProperty("display"), l.removeAttribute("aria-hidden"), c.style.setProperty("display", "none"), c.setAttribute("aria-hidden", "true"), o.querySelector(".ion-page").style.removeProperty("padding-bottom")
            }
        })
    },
    h7 = (o, t, e, n, i, s, a = [], r, l, c, d) => {
        let p = [{
                offset: 0,
                opacity: "var(--backdrop-opacity)"
            }, {
                offset: 1,
                opacity: .01
            }],
            g = [{
                offset: 0,
                opacity: "var(--backdrop-opacity)"
            }, {
                offset: 1 - i,
                opacity: 0
            }, {
                offset: 1,
                opacity: 0
            }],
            m = {
                WRAPPER_KEYFRAMES: [{
                    offset: 0,
                    transform: "translateY(0%)"
                }, {
                    offset: 1,
                    transform: "translateY(100%)"
                }],
                BACKDROP_KEYFRAMES: i !== 0 ? g : p,
                CONTENT_KEYFRAMES: [{
                    offset: 0,
                    maxHeight: "100%"
                }, {
                    offset: 1,
                    maxHeight: "0%"
                }]
            },
            f = o.querySelector("ion-content"),
            x = e.clientHeight,
            k = n,
            B = 0,
            j = !1,
            D = null,
            T = .95,
            _ = a[a.length - 1],
            E = a[0],
            z = s.childAnimations.find(ct => ct.id === "wrapperAnimation"),
            A = s.childAnimations.find(ct => ct.id === "backdropAnimation"),
            R = s.childAnimations.find(ct => ct.id === "contentAnimation"),
            ot = () => {
                o.style.setProperty("pointer-events", "auto"), t.style.setProperty("pointer-events", "auto"), o.classList.remove(so)
            },
            lt = () => {
                o.style.setProperty("pointer-events", "none"), t.style.setProperty("pointer-events", "none"), o.classList.add(so)
            },
            ht = ct => {
                let rt = o.querySelector("ion-footer");
                if (!rt) return;
                let bt = e.nextElementSibling,
                    It = ct === "original" ? bt : rt,
                    Gt = ct === "original" ? rt : bt;
                Gt.style.removeProperty("display"), Gt.removeAttribute("aria-hidden");
                let $t = o.querySelector(".ion-page");
                if (ct === "original") $t.style.removeProperty("padding-bottom");
                else {
                    let Lt = Gt.clientHeight;
                    $t.style.setProperty("padding-bottom", `${Lt}px`)
                }
                It.style.setProperty("display", "none"), It.setAttribute("aria-hidden", "true")
            };
        z && A && (z.keyframes([...m.WRAPPER_KEYFRAMES]), A.keyframes([...m.BACKDROP_KEYFRAMES]), R ? .keyframes([...m.CONTENT_KEYFRAMES]), s.progressStart(!0, 1 - k), k > i ? ot() : lt()), f && k !== _ && r && (f.scrollY = !1);
        let ee = ct => {
                let rt = Ii(ct.event.target);
                if (k = l(), !r && rt) return (Lo(rt) ? ut(rt).querySelector(".inner-scroll") : rt).scrollTop === 0;
                if (k === 1 && rt) {
                    let bt = Lo(rt) ? ut(rt).querySelector(".inner-scroll") : rt;
                    return !!!rt.querySelector("ion-refresher") && bt.scrollTop === 0
                }
                return !0
            },
            mo = ct => {
                if (j = o.canDismiss !== void 0 && o.canDismiss !== !0 && E === 0, !r) {
                    let rt = Ii(ct.event.target);
                    D = rt && Lo(rt) ? ut(rt).querySelector(".inner-scroll") : rt
                }
                r || ht("original"), ct.deltaY > 0 && f && (f.scrollY = !1), ft(() => {
                    o.focus()
                }), s.progressStart(!0, 1 - k)
            },
            N1 = ct => {
                if (!r && ct.deltaY <= 0 && D) return;
                ct.deltaY > 0 && f && (f.scrollY = !1);
                let rt = 1 - k,
                    bt = a.length > 1 ? 1 - a[1] : void 0,
                    It = rt + ct.deltaY / x,
                    Gt = bt !== void 0 && It >= bt && j,
                    $t = Gt ? T : .9999,
                    Lt = Gt && bt !== void 0 ? bt + Vs((It - bt) / ($t - bt)) : It;
                B = _t(1e-4, Lt, $t), s.progressStep(B)
            },
            U1 = ct => {
                if (!r && ct.deltaY <= 0 && D && D.scrollTop > 0) return;
                let rt = ct.velocityY,
                    bt = (ct.deltaY + rt * 350) / x,
                    It = k - bt,
                    Gt = a.reduce(($t, Lt) => Math.abs(Lt - It) < Math.abs($t - It) ? Lt : $t);
                li({
                    breakpoint: Gt,
                    breakpointOffset: B,
                    canDismiss: j,
                    animated: !0
                })
            },
            li = ct => {
                let {
                    breakpoint: rt,
                    canDismiss: bt,
                    breakpointOffset: It,
                    animated: Gt
                } = ct, $t = bt && rt === 0, Lt = $t ? k : rt, ci = Lt !== 0;
                return k = 0, z && A && (z.keyframes([{
                    offset: 0,
                    transform: `translateY(${It*100}%)`
                }, {
                    offset: 1,
                    transform: `translateY(${(1-Lt)*100}%)`
                }]), A.keyframes([{
                    offset: 0,
                    opacity: `calc(var(--backdrop-opacity) * ${Ts(1-It,i)})`
                }, {
                    offset: 1,
                    opacity: `calc(var(--backdrop-opacity) * ${Ts(Lt,i)})`
                }]), R && R.keyframes([{
                    offset: 0,
                    maxHeight: `${(1-It)*100}%`
                }, {
                    offset: 1,
                    maxHeight: `${Lt*100}%`
                }]), s.progressStep(0)), vo.enable(!1), !r && ci && ht("cloned"), $t ? b4(o, s) : ci || c(), f && (Lt === a[a.length - 1] || !r) && (f.scrollY = !0), new Promise(q1 => {
                    s.onFinish(() => {
                        ci ? z && A ? ft(() => {
                            z.keyframes([...m.WRAPPER_KEYFRAMES]), A.keyframes([...m.BACKDROP_KEYFRAMES]), R ? .keyframes([...m.CONTENT_KEYFRAMES]), s.progressStart(!0, 1 - Lt), k = Lt, d(k), k > i ? ot() : lt(), vo.enable(!0), q1()
                        }) : (vo.enable(!0), q1()) : q1()
                    }, {
                        oneTimeCallback: !0
                    }).progressEnd(1, 0, Gt ? 500 : 0)
                })
            },
            vo = Ai({
                el: e,
                gestureName: "modalSheet",
                gesturePriority: 40,
                direction: "y",
                threshold: 10,
                canStart: ee,
                onStart: mo,
                onMove: N1,
                onEnd: U1
            });
        return {
            gesture: vo,
            moveSheetToBreakpoint: li
        }
    },
    p7 = ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer{position:absolute;bottom:0;width:var(--width)}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer ion-toolbar:first-of-type{padding-top:6px}',
    u7 = p7,
    g7 = ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer{position:absolute;bottom:0;width:var(--width)}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}',
    m7 = g7,
    M4 = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.didPresent = L(this, "ionModalDidPresent", 7), this.willPresent = L(this, "ionModalWillPresent", 7), this.willDismiss = L(this, "ionModalWillDismiss", 7), this.didDismiss = L(this, "ionModalDidDismiss", 7), this.ionBreakpointDidChange = L(this, "ionBreakpointDidChange", 7), this.didPresentShorthand = L(this, "didPresent", 7), this.willPresentShorthand = L(this, "willPresent", 7), this.willDismissShorthand = L(this, "willDismiss", 7), this.didDismissShorthand = L(this, "didDismiss", 7), this.ionMount = L(this, "ionMount", 7), this.lockController = Xo(), this.triggerController = kl(), this.coreDelegate = Zi(), this.isSheetModal = !1, this.inheritedAttributes = {}, this.inline = !1, this.gestureAnimationDismissing = !1, this.onHandleClick = () => {
                let {
                    sheetTransition: t,
                    handleBehavior: e
                } = this;
                e !== "cycle" || t !== void 0 || this.moveToNextBreakpoint()
            }, this.onBackdropTap = () => {
                let {
                    sheetTransition: t
                } = this;
                t === void 0 && this.dismiss(void 0, ze)
            }, this.onLifecycle = t => {
                let e = this.usersElement,
                    n = v7[t.type];
                if (e && n) {
                    let i = new CustomEvent(n, {
                        bubbles: !1,
                        cancelable: !1,
                        detail: t.detail
                    });
                    e.dispatchEvent(i)
                }
            }, this.presented = !1, this.hasController = !1, this.overlayIndex = void 0, this.delegate = void 0, this.keyboardClose = !0, this.enterAnimation = void 0, this.leaveAnimation = void 0, this.breakpoints = void 0, this.expandToScroll = !0, this.initialBreakpoint = void 0, this.backdropBreakpoint = 0, this.handle = void 0, this.handleBehavior = "none", this.component = void 0, this.componentProps = void 0, this.cssClass = void 0, this.backdropDismiss = !0, this.showBackdrop = !0, this.animated = !0, this.presentingElement = void 0, this.htmlAttributes = void 0, this.isOpen = !1, this.trigger = void 0, this.keepContentsMounted = !1, this.focusTrap = !0, this.canDismiss = !0
        }
        onIsOpenChange(t, e) {
            t === !0 && e === !1 ? this.present() : t === !1 && e === !0 && this.dismiss()
        }
        triggerChanged() {
            let {
                trigger: t,
                el: e,
                triggerController: n
            } = this;
            t && n.addClickListener(e, t)
        }
        breakpointsChanged(t) {
            t !== void 0 && (this.sortedBreakpoints = t.sort((e, n) => e - n))
        }
        connectedCallback() {
            let {
                el: t
            } = this;
            Ji(t), this.triggerChanged()
        }
        disconnectedCallback() {
            this.triggerController.removeClickListener()
        }
        componentWillLoad() {
            var t;
            let {
                breakpoints: e,
                initialBreakpoint: n,
                el: i,
                htmlAttributes: s
            } = this, a = this.isSheetModal = e !== void 0 && n !== void 0, r = ["aria-label", "role"];
            this.inheritedAttributes = ae(i, r), s !== void 0 && r.forEach(l => {
                s[l] && (this.inheritedAttributes = Object.assign(Object.assign({}, this.inheritedAttributes), {
                    [l]: s[l]
                }), delete s[l])
            }), a && (this.currentBreakpoint = this.initialBreakpoint), e !== void 0 && n !== void 0 && !e.includes(n) && vt("Your breakpoints array must include the initialBreakpoint value."), !((t = this.htmlAttributes) === null || t === void 0) && t.id || t1(this.el)
        }
        componentDidLoad() {
            this.isOpen === !0 && ft(() => this.present()), this.breakpointsChanged(this.breakpoints), this.triggerChanged()
        }
        getDelegate(t = !1) {
            if (this.workingDelegate && !t) return {
                delegate: this.workingDelegate,
                inline: this.inline
            };
            let e = this.el.parentNode,
                n = this.inline = e !== null && !this.hasController,
                i = this.workingDelegate = n ? this.delegate || this.coreDelegate : this.delegate;
            return {
                inline: n,
                delegate: i
            }
        }
        checkCanDismiss(t, e) {
            return w(this, null, function*() {
                let {
                    canDismiss: n
                } = this;
                return typeof n == "function" ? n(t, e) : n
            })
        }
        present() {
            return w(this, null, function*() {
                let t = yield this.lockController.lock();
                if (this.presented) {
                    t();
                    return
                }
                let {
                    presentingElement: e,
                    el: n
                } = this;
                this.currentBreakpoint = this.initialBreakpoint;
                let {
                    inline: i,
                    delegate: s
                } = this.getDelegate(!0);
                this.ionMount.emit(), this.usersElement = yield de(s, n, this.component, ["ion-page"], this.componentProps, i), ye(n) ? yield Si(this.usersElement): this.keepContentsMounted || (yield zi()), Ht(() => this.el.classList.add("show-modal"));
                let a = e !== void 0;
                a && b(this) === "ios" && (this.statusBarStyle = yield Os.getStyle(), x4()), yield o1(this, "modalEnter", f4, l7, {
                    presentingEl: e,
                    currentBreakpoint: this.initialBreakpoint,
                    backdropBreakpoint: this.backdropBreakpoint,
                    expandToScroll: this.expandToScroll
                }), typeof window < "u" && (this.keyboardOpenCallback = () => {
                    this.gesture && (this.gesture.enable(!1), ft(() => {
                        this.gesture && this.gesture.enable(!0)
                    }))
                }, window.addEventListener(k0, this.keyboardOpenCallback)), this.isSheetModal ? this.initSheetGesture() : a && this.initSwipeToClose(), t()
            })
        }
        initSwipeToClose() {
            var t;
            if (b(this) !== "ios") return;
            let {
                el: e
            } = this, n = this.leaveAnimation || Y.get("modalLeave", w4), i = this.animation = n(e, {
                presentingEl: this.presentingElement,
                expandToScroll: this.expandToScroll
            });
            if (!Ye(e)) {
                Ze(e);
                return
            }
            let a = (t = this.statusBarStyle) !== null && t !== void 0 ? t : Gn.Default;
            this.gesture = i7(e, i, a, () => {
                this.gestureAnimationDismissing = !0, _s(this.statusBarStyle), this.animation.onFinish(() => w(this, null, function*() {
                    yield this.dismiss(void 0, he), this.gestureAnimationDismissing = !1
                }))
            }), this.gesture.enable(!0)
        }
        initSheetGesture() {
            let {
                wrapperEl: t,
                initialBreakpoint: e,
                backdropBreakpoint: n
            } = this;
            if (!t || e === void 0) return;
            let i = this.enterAnimation || Y.get("modalEnter", f4),
                s = this.animation = i(this.el, {
                    presentingEl: this.presentingElement,
                    currentBreakpoint: e,
                    backdropBreakpoint: n,
                    expandToScroll: this.expandToScroll
                });
            s.progressStart(!0, 1);
            let {
                gesture: a,
                moveSheetToBreakpoint: r
            } = h7(this.el, this.backdropEl, t, e, n, s, this.sortedBreakpoints, this.expandToScroll, () => {
                var l;
                return (l = this.currentBreakpoint) !== null && l !== void 0 ? l : 0
            }, () => this.sheetOnDismiss(), l => {
                this.currentBreakpoint !== l && (this.currentBreakpoint = l, this.ionBreakpointDidChange.emit({
                    breakpoint: l
                }))
            });
            this.gesture = a, this.moveSheetToBreakpoint = r, this.gesture.enable(!0)
        }
        sheetOnDismiss() {
            this.gestureAnimationDismissing = !0, this.animation.onFinish(() => w(this, null, function*() {
                this.currentBreakpoint = 0, this.ionBreakpointDidChange.emit({
                    breakpoint: this.currentBreakpoint
                }), yield this.dismiss(void 0, he), this.gestureAnimationDismissing = !1
            }))
        }
        dismiss(t, e) {
            return w(this, null, function*() {
                var n;
                if (this.gestureAnimationDismissing && e !== he) return !1;
                let i = yield this.lockController.lock();
                if (e !== "handler" && !(yield this.checkCanDismiss(t, e))) return i(), !1;
                let {
                    presentingElement: s
                } = this;
                s !== void 0 && b(this) === "ios" && _s(this.statusBarStyle), typeof window < "u" && this.keyboardOpenCallback && (window.removeEventListener(k0, this.keyboardOpenCallback), this.keyboardOpenCallback = void 0);
                let r = yield n1(this, t, e, "modalLeave", w4, d7, {
                    presentingEl: s,
                    currentBreakpoint: (n = this.currentBreakpoint) !== null && n !== void 0 ? n : this.initialBreakpoint,
                    backdropBreakpoint: this.backdropBreakpoint,
                    expandToScroll: this.expandToScroll
                });
                if (r) {
                    let {
                        delegate: l
                    } = this.getDelegate();
                    yield Oo(l, this.usersElement), Ht(() => this.el.classList.remove("show-modal")), this.animation && this.animation.destroy(), this.gesture && this.gesture.destroy()
                }
                return this.currentBreakpoint = void 0, this.animation = void 0, i(), r
            })
        }
        onDidDismiss() {
            return Po(this.el, "ionModalDidDismiss")
        }
        onWillDismiss() {
            return Po(this.el, "ionModalWillDismiss")
        }
        setCurrentBreakpoint(t) {
            return w(this, null, function*() {
                if (!this.isSheetModal) {
                    vt("setCurrentBreakpoint is only supported on sheet modals.");
                    return
                }
                if (!this.breakpoints.includes(t)) {
                    vt(`Attempted to set invalid breakpoint value ${t}. Please double check that the breakpoint value is part of your defined breakpoints.`);
                    return
                }
                let {
                    currentBreakpoint: e,
                    moveSheetToBreakpoint: n,
                    canDismiss: i,
                    breakpoints: s,
                    animated: a
                } = this;
                e !== t && n && (this.sheetTransition = n({
                    breakpoint: t,
                    breakpointOffset: 1 - e,
                    canDismiss: i !== void 0 && i !== !0 && s[0] === 0,
                    animated: a
                }), yield this.sheetTransition, this.sheetTransition = void 0)
            })
        }
        getCurrentBreakpoint() {
            return w(this, null, function*() {
                return this.currentBreakpoint
            })
        }
        moveToNextBreakpoint() {
            return w(this, null, function*() {
                let {
                    breakpoints: t,
                    currentBreakpoint: e
                } = this;
                if (!t || e == null) return !1;
                let n = t.filter(r => r !== 0),
                    s = (n.indexOf(e) + 1) % n.length,
                    a = n[s];
                return yield this.setCurrentBreakpoint(a), !0
            })
        }
        render() {
            let {
                handle: t,
                isSheetModal: e,
                presentingElement: n,
                htmlAttributes: i,
                handleBehavior: s,
                inheritedAttributes: a,
                focusTrap: r,
                expandToScroll: l
            } = this, c = t !== !1 && e, d = b(this), p = n !== void 0 && d === "ios", g = s === "cycle";
            return u(S, Object.assign({
                key: "e661562f9e4126136cee337e4ab8ca69ac80faae",
                "no-router": !0,
                tabindex: "-1"
            }, i, {
                style: {
                    zIndex: `${2e4+this.overlayIndex}`
                },
                class: Object.assign({
                    [d]: !0,
                    "modal-default": !p && !e,
                    "modal-card": p,
                    "modal-sheet": e,
                    "modal-no-expand-scroll": e && !l,
                    "overlay-hidden": !0,
                    [so]: r === !1
                }, Yi(this.cssClass)),
                onIonBackdropTap: this.onBackdropTap,
                onIonModalDidPresent: this.onLifecycle,
                onIonModalWillPresent: this.onLifecycle,
                onIonModalWillDismiss: this.onLifecycle,
                onIonModalDidDismiss: this.onLifecycle
            }), u("ion-backdrop", {
                key: "9221692e0e111f99e80239ca44faaaed9b288425",
                ref: m => this.backdropEl = m,
                visible: this.showBackdrop,
                tappable: this.backdropDismiss,
                part: "backdrop"
            }), d === "ios" && u("div", {
                key: "20def7088d31e5eb13c3f2404c514cd8b74cd966",
                class: "modal-shadow"
            }), u("div", Object.assign({
                key: "b11229330571d4ff7b9136dfdddcd7d759ada876",
                role: "dialog"
            }, a, {
                "aria-modal": "true",
                class: "modal-wrapper ion-overlay-wrapper",
                part: "content",
                ref: m => this.wrapperEl = m
            }), c && u("button", {
                key: "95b2a62477dfbc063a91910f0d37357388cfd914",
                class: "modal-handle",
                tabIndex: g ? 0 : -1,
                "aria-label": "Activate to adjust the size of the dialog overlaying the screen",
                onClick: g ? this.onHandleClick : void 0,
                part: "handle"
            }), u("slot", {
                key: "fba17dfdbdffbfd8992f473f633d172c5124dc19"
            })))
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                isOpen: ["onIsOpenChange"],
                trigger: ["triggerChanged"]
            }
        }
        static get style() {
            return {
                ios: u7,
                md: m7
            }
        }
    }, [33, "ion-modal", {
        hasController: [4, "has-controller"],
        overlayIndex: [2, "overlay-index"],
        delegate: [16],
        keyboardClose: [4, "keyboard-close"],
        enterAnimation: [16],
        leaveAnimation: [16],
        breakpoints: [16],
        expandToScroll: [4, "expand-to-scroll"],
        initialBreakpoint: [2, "initial-breakpoint"],
        backdropBreakpoint: [2, "backdrop-breakpoint"],
        handle: [4],
        handleBehavior: [1, "handle-behavior"],
        component: [1],
        componentProps: [16],
        cssClass: [1, "css-class"],
        backdropDismiss: [4, "backdrop-dismiss"],
        showBackdrop: [4, "show-backdrop"],
        animated: [4],
        presentingElement: [16],
        htmlAttributes: [16],
        isOpen: [4, "is-open"],
        trigger: [1],
        keepContentsMounted: [4, "keep-contents-mounted"],
        focusTrap: [4, "focus-trap"],
        canDismiss: [4, "can-dismiss"],
        presented: [32],
        present: [64],
        dismiss: [64],
        onDidDismiss: [64],
        onWillDismiss: [64],
        setCurrentBreakpoint: [64],
        getCurrentBreakpoint: [64]
    }, void 0, {
        isOpen: ["onIsOpenChange"],
        trigger: ["triggerChanged"]
    }]),
    v7 = {
        ionModalDidPresent: "ionViewDidEnter",
        ionModalWillPresent: "ionViewWillEnter",
        ionModalWillDismiss: "ionViewWillLeave",
        ionModalDidDismiss: "ionViewDidLeave"
    };

function C4() {
    if (typeof customElements > "u") return;
    ["ion-modal", "ion-backdrop"].forEach(t => {
        switch (t) {
            case "ion-modal":
                customElements.get(t) || customElements.define(t, M4);
                break;
            case "ion-backdrop":
                customElements.get(t) || Yo();
                break
        }
    })
}
var z4 = C4;
var f7 = o => {
        if (!o) return {
            arrowWidth: 0,
            arrowHeight: 0
        };
        let {
            width: t,
            height: e
        } = o.getBoundingClientRect();
        return {
            arrowWidth: t,
            arrowHeight: e
        }
    },
    A4 = (o, t, e) => {
        let n = t.getBoundingClientRect(),
            i = n.height,
            s = n.width;
        return o === "cover" && e && (s = e.getBoundingClientRect().width), {
            contentWidth: s,
            contentHeight: i
        }
    },
    w7 = (o, t, e, n) => {
        let i = [],
            a = ut(n).querySelector(".popover-content");
        switch (t) {
            case "hover":
                i = [{
                    eventName: "mouseenter",
                    callback: r => {
                        document.elementFromPoint(r.clientX, r.clientY) !== o && e.dismiss(void 0, void 0, !1)
                    }
                }];
                break;
            case "context-menu":
            case "click":
            default:
                i = [{
                    eventName: "click",
                    callback: r => {
                        if (r.target.closest("[data-ion-popover-trigger]") === o) {
                            r.stopPropagation();
                            return
                        }
                        e.dismiss(void 0, void 0, !1)
                    }
                }];
                break
        }
        return i.forEach(({
            eventName: r,
            callback: l
        }) => a.addEventListener(r, l)), () => {
            i.forEach(({
                eventName: r,
                callback: l
            }) => a.removeEventListener(r, l))
        }
    },
    x7 = (o, t, e) => {
        let n = [];
        switch (t) {
            case "hover":
                let i;
                n = [{
                    eventName: "mouseenter",
                    callback: s => w(void 0, null, function*() {
                        s.stopPropagation(), i && clearTimeout(i), i = setTimeout(() => {
                            ft(() => {
                                e.presentFromTrigger(s), i = void 0
                            })
                        }, 100)
                    })
                }, {
                    eventName: "mouseleave",
                    callback: s => {
                        i && clearTimeout(i);
                        let a = s.relatedTarget;
                        a && a.closest("ion-popover") !== e && e.dismiss(void 0, void 0, !1)
                    }
                }, {
                    eventName: "click",
                    callback: s => s.stopPropagation()
                }, {
                    eventName: "ionPopoverActivateTrigger",
                    callback: s => e.presentFromTrigger(s, !0)
                }];
                break;
            case "context-menu":
                n = [{
                    eventName: "contextmenu",
                    callback: s => {
                        s.preventDefault(), e.presentFromTrigger(s)
                    }
                }, {
                    eventName: "click",
                    callback: s => s.stopPropagation()
                }, {
                    eventName: "ionPopoverActivateTrigger",
                    callback: s => e.presentFromTrigger(s, !0)
                }];
                break;
            case "click":
            default:
                n = [{
                    eventName: "click",
                    callback: s => e.presentFromTrigger(s)
                }, {
                    eventName: "ionPopoverActivateTrigger",
                    callback: s => e.presentFromTrigger(s, !0)
                }];
                break
        }
        return n.forEach(({
            eventName: i,
            callback: s
        }) => o.addEventListener(i, s)), o.setAttribute("data-ion-popover-trigger", "true"), () => {
            n.forEach(({
                eventName: i,
                callback: s
            }) => o.removeEventListener(i, s)), o.removeAttribute("data-ion-popover-trigger")
        }
    },
    I4 = (o, t) => !t || t.tagName !== "ION-ITEM" ? -1 : o.findIndex(e => e === t),
    b7 = (o, t) => {
        let e = I4(o, t);
        return o[e + 1]
    },
    k7 = (o, t) => {
        let e = I4(o, t);
        return o[e - 1]
    },
    u1 = o => {
        let e = ut(o).querySelector("button");
        e && ft(() => e.focus())
    },
    y7 = o => o.hasAttribute("data-ion-popover-trigger"),
    M7 = o => {
        let t = e => w(void 0, null, function*() {
            var n;
            let i = document.activeElement,
                s = [],
                a = (n = e.target) === null || n === void 0 ? void 0 : n.tagName;
            if (!(a !== "ION-POPOVER" && a !== "ION-ITEM")) {
                try {
                    s = Array.from(o.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))
                } catch {}
                switch (e.key) {
                    case "ArrowLeft":
                        (yield o.getParentPopover()) && o.dismiss(void 0, void 0, !1);
                        break;
                    case "ArrowDown":
                        e.preventDefault();
                        let l = b7(s, i);
                        l !== void 0 && u1(l);
                        break;
                    case "ArrowUp":
                        e.preventDefault();
                        let c = k7(s, i);
                        c !== void 0 && u1(c);
                        break;
                    case "Home":
                        e.preventDefault();
                        let d = s[0];
                        d !== void 0 && u1(d);
                        break;
                    case "End":
                        e.preventDefault();
                        let p = s[s.length - 1];
                        p !== void 0 && u1(p);
                        break;
                    case "ArrowRight":
                    case " ":
                    case "Enter":
                        if (i && y7(i)) {
                            let g = new CustomEvent("ionPopoverActivateTrigger");
                            i.dispatchEvent(g)
                        }
                        break
                }
            }
        });
        return o.addEventListener("keydown", t), () => o.removeEventListener("keydown", t)
    },
    L4 = (o, t, e, n, i, s, a, r, l, c, d) => {
        var p;
        let g = {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        };
        switch (s) {
            case "event":
                if (!d) return l;
                let _ = d;
                g = {
                    top: _.clientY,
                    left: _.clientX,
                    width: 1,
                    height: 1
                };
                break;
            case "trigger":
            default:
                let E = d,
                    z = c || ((p = E ? .detail) === null || p === void 0 ? void 0 : p.ionShadowTarget) || E ? .target;
                if (!z) return l;
                let A = z.getBoundingClientRect();
                g = {
                    top: A.top,
                    left: A.left,
                    width: A.width,
                    height: A.height
                };
                break
        }
        let m = S7(a, g, t, e, n, i, o),
            f = A7(r, a, g, t, e),
            x = m.top + f.top,
            k = m.left + f.left,
            {
                arrowTop: B,
                arrowLeft: j
            } = z7(a, n, i, x, k, t, e, o),
            {
                originX: D,
                originY: T
            } = C7(a, r, o);
        return {
            top: x,
            left: k,
            referenceCoordinates: g,
            arrowTop: B,
            arrowLeft: j,
            originX: D,
            originY: T
        }
    },
    C7 = (o, t, e) => {
        switch (o) {
            case "top":
                return {
                    originX: S4(t),
                    originY: "bottom"
                };
            case "bottom":
                return {
                    originX: S4(t),
                    originY: "top"
                };
            case "left":
                return {
                    originX: "right",
                    originY: g1(t)
                };
            case "right":
                return {
                    originX: "left",
                    originY: g1(t)
                };
            case "start":
                return {
                    originX: e ? "left" : "right",
                    originY: g1(t)
                };
            case "end":
                return {
                    originX: e ? "right" : "left",
                    originY: g1(t)
                }
        }
    },
    S4 = o => {
        switch (o) {
            case "start":
                return "left";
            case "center":
                return "center";
            case "end":
                return "right"
        }
    },
    g1 = o => {
        switch (o) {
            case "start":
                return "top";
            case "center":
                return "center";
            case "end":
                return "bottom"
        }
    },
    z7 = (o, t, e, n, i, s, a, r) => {
        let l = {
                arrowTop: n + a / 2 - t / 2,
                arrowLeft: i + s - t / 2
            },
            c = {
                arrowTop: n + a / 2 - t / 2,
                arrowLeft: i - t * 1.5
            };
        switch (o) {
            case "top":
                return {
                    arrowTop: n + a,
                    arrowLeft: i + s / 2 - t / 2
                };
            case "bottom":
                return {
                    arrowTop: n - e,
                    arrowLeft: i + s / 2 - t / 2
                };
            case "left":
                return l;
            case "right":
                return c;
            case "start":
                return r ? c : l;
            case "end":
                return r ? l : c;
            default:
                return {
                    arrowTop: 0,
                    arrowLeft: 0
                }
        }
    },
    S7 = (o, t, e, n, i, s, a) => {
        let r = {
                top: t.top,
                left: t.left - e - i
            },
            l = {
                top: t.top,
                left: t.left + t.width + i
            };
        switch (o) {
            case "top":
                return {
                    top: t.top - n - s,
                    left: t.left
                };
            case "right":
                return l;
            case "bottom":
                return {
                    top: t.top + t.height + s,
                    left: t.left
                };
            case "left":
                return r;
            case "start":
                return a ? l : r;
            case "end":
                return a ? r : l
        }
    },
    A7 = (o, t, e, n, i) => {
        switch (o) {
            case "center":
                return L7(t, e, n, i);
            case "end":
                return I7(t, e, n, i);
            case "start":
            default:
                return {
                    top: 0,
                    left: 0
                }
        }
    },
    I7 = (o, t, e, n) => {
        switch (o) {
            case "start":
            case "end":
            case "left":
            case "right":
                return {
                    top: -(n - t.height),
                    left: 0
                };
            case "top":
            case "bottom":
            default:
                return {
                    top: 0,
                    left: -(e - t.width)
                }
        }
    },
    L7 = (o, t, e, n) => {
        switch (o) {
            case "start":
            case "end":
            case "left":
            case "right":
                return {
                    top: -(n / 2 - t.height / 2),
                    left: 0
                };
            case "top":
            case "bottom":
            default:
                return {
                    top: 0,
                    left: -(e / 2 - t.width / 2)
                }
        }
    },
    E4 = (o, t, e, n, i, s, a, r, l, c, d, p, g = 0, m = 0, f = 0) => {
        let x = g,
            k = m,
            B = e,
            j = t,
            D, T = c,
            _ = d,
            E = !1,
            z = !1,
            A = p ? p.top + p.height : s / 2 - r / 2,
            R = p ? p.height : 0,
            ot = !1;
        return B < n + l ? (B = n, E = !0, T = "left") : a + n + B + l > i && (z = !0, B = i - a - n, T = "right"), A + R + r > s && (o === "top" || o === "bottom") && (A - r > 0 ? (j = Math.max(12, A - r - R - (f - 1)), x = j + r, _ = "bottom", ot = !0) : D = n), {
            top: j,
            left: B,
            bottom: D,
            originX: T,
            originY: _,
            checkSafeAreaLeft: E,
            checkSafeAreaRight: z,
            arrowTop: x,
            arrowLeft: k,
            addPopoverBottomClass: ot
        }
    },
    E7 = (o, t = !1, e, n) => !(!e && !n || o !== "top" && o !== "bottom" && t),
    B7 = 5,
    D7 = (o, t) => {
        var e;
        let {
            event: n,
            size: i,
            trigger: s,
            reference: a,
            side: r,
            align: l
        } = t, c = o.ownerDocument, d = c.dir === "rtl", p = c.defaultView.innerWidth, g = c.defaultView.innerHeight, m = ut(o), f = m.querySelector(".popover-content"), x = m.querySelector(".popover-arrow"), k = s || ((e = n ? .detail) === null || e === void 0 ? void 0 : e.ionShadowTarget) || n ? .target, {
            contentWidth: B,
            contentHeight: j
        } = A4(i, f, k), {
            arrowWidth: D,
            arrowHeight: T
        } = f7(x), _ = {
            top: g / 2 - j / 2,
            left: p / 2 - B / 2,
            originX: d ? "right" : "left",
            originY: "top"
        }, E = L4(d, B, j, D, T, a, r, l, _, s, n), z = i === "cover" ? 0 : B7, A = i === "cover" ? 0 : 25, {
            originX: R,
            originY: ot,
            top: lt,
            left: ht,
            bottom: ee,
            checkSafeAreaLeft: mo,
            checkSafeAreaRight: N1,
            arrowTop: U1,
            arrowLeft: li,
            addPopoverBottomClass: vo
        } = E4(r, E.top, E.left, z, p, g, B, j, A, E.originX, E.originY, E.referenceCoordinates, E.arrowTop, E.arrowLeft, T), ct = F(), rt = F(), bt = F();
        return rt.addElement(m.querySelector("ion-backdrop")).fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({
            "pointer-events": "none"
        }).afterClearStyles(["pointer-events"]), bt.addElement(m.querySelector(".popover-arrow")).addElement(m.querySelector(".popover-content")).fromTo("opacity", .01, 1), ct.easing("ease").duration(100).beforeAddWrite(() => {
            i === "cover" && o.style.setProperty("--width", `${B}px`), vo && o.classList.add("popover-bottom"), ee !== void 0 && f.style.setProperty("bottom", `${ee}px`);
            let It = " + var(--ion-safe-area-left, 0)",
                Gt = " - var(--ion-safe-area-right, 0)",
                $t = `${ht}px`;
            if (mo && ($t = `${ht}px${It}`), N1 && ($t = `${ht}px${Gt}`), f.style.setProperty("top", `calc(${lt}px + var(--offset-y, 0))`), f.style.setProperty("left", `calc(${$t} + var(--offset-x, 0))`), f.style.setProperty("transform-origin", `${ot} ${R}`), x !== null) {
                let Lt = E.top !== lt || E.left !== ht;
                E7(r, Lt, n, s) ? (x.style.setProperty("top", `calc(${U1}px + var(--offset-y, 0))`), x.style.setProperty("left", `calc(${li}px + var(--offset-x, 0))`)) : x.style.setProperty("display", "none")
            }
        }).addAnimation([rt, bt])
    },
    j7 = o => {
        let t = ut(o),
            e = t.querySelector(".popover-content"),
            n = t.querySelector(".popover-arrow"),
            i = F(),
            s = F(),
            a = F();
        return s.addElement(t.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0), a.addElement(t.querySelector(".popover-arrow")).addElement(t.querySelector(".popover-content")).fromTo("opacity", .99, 0), i.easing("ease").afterAddWrite(() => {
            o.style.removeProperty("--width"), o.classList.remove("popover-bottom"), e.style.removeProperty("top"), e.style.removeProperty("left"), e.style.removeProperty("bottom"), e.style.removeProperty("transform-origin"), n && (n.style.removeProperty("top"), n.style.removeProperty("left"), n.style.removeProperty("display"))
        }).duration(300).addAnimation([s, a])
    },
    $7 = 12,
    H7 = (o, t) => {
        var e;
        let {
            event: n,
            size: i,
            trigger: s,
            reference: a,
            side: r,
            align: l
        } = t, c = o.ownerDocument, d = c.dir === "rtl", p = c.defaultView.innerWidth, g = c.defaultView.innerHeight, m = ut(o), f = m.querySelector(".popover-content"), x = s || ((e = n ? .detail) === null || e === void 0 ? void 0 : e.ionShadowTarget) || n ? .target, {
            contentWidth: k,
            contentHeight: B
        } = A4(i, f, x), j = {
            top: g / 2 - B / 2,
            left: p / 2 - k / 2,
            originX: d ? "right" : "left",
            originY: "top"
        }, D = L4(d, k, B, 0, 0, a, r, l, j, s, n), T = i === "cover" ? 0 : $7, {
            originX: _,
            originY: E,
            top: z,
            left: A,
            bottom: R
        } = E4(r, D.top, D.left, T, p, g, k, B, 0, D.originX, D.originY, D.referenceCoordinates), ot = F(), lt = F(), ht = F(), ee = F(), mo = F();
        return lt.addElement(m.querySelector("ion-backdrop")).fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({
            "pointer-events": "none"
        }).afterClearStyles(["pointer-events"]), ht.addElement(m.querySelector(".popover-wrapper")).duration(150).fromTo("opacity", .01, 1), ee.addElement(f).beforeStyles({
            top: `calc(${z}px + var(--offset-y, 0px))`,
            left: `calc(${A}px + var(--offset-x, 0px))`,
            "transform-origin": `${E} ${_}`
        }).beforeAddWrite(() => {
            R !== void 0 && f.style.setProperty("bottom", `${R}px`)
        }).fromTo("transform", "scale(0.8)", "scale(1)"), mo.addElement(m.querySelector(".popover-viewport")).fromTo("opacity", .01, 1), ot.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(() => {
            i === "cover" && o.style.setProperty("--width", `${k}px`), E === "bottom" && o.classList.add("popover-bottom")
        }).addAnimation([lt, ht, ee, mo])
    },
    T7 = o => {
        let t = ut(o),
            e = t.querySelector(".popover-content"),
            n = F(),
            i = F(),
            s = F();
        return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0), s.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity", .99, 0), n.easing("ease").afterAddWrite(() => {
            o.style.removeProperty("--width"), o.classList.remove("popover-bottom"), e.style.removeProperty("top"), e.style.removeProperty("left"), e.style.removeProperty("bottom"), e.style.removeProperty("transform-origin")
        }).duration(150).addAnimation([i, s])
    },
    _7 = ':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden;z-index:11}.popover-arrow::after{top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}.popover-arrow::after{inset-inline-start:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}@supports selector(:dir(rtl)){:host(.popover-side-start:dir(rtl)) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports selector(:dir(rtl)){:host(.popover-side-end:dir(rtl)) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}}.popover-arrow,.popover-content{opacity:0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',
    V7 = _7,
    O7 = ":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}[dir=rtl] .popover-content{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.popover-content:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}.popover-wrapper{opacity:0}",
    R7 = O7,
    B4 = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.didPresent = L(this, "ionPopoverDidPresent", 7), this.willPresent = L(this, "ionPopoverWillPresent", 7), this.willDismiss = L(this, "ionPopoverWillDismiss", 7), this.didDismiss = L(this, "ionPopoverDidDismiss", 7), this.didPresentShorthand = L(this, "didPresent", 7), this.willPresentShorthand = L(this, "willPresent", 7), this.willDismissShorthand = L(this, "willDismiss", 7), this.didDismissShorthand = L(this, "didDismiss", 7), this.ionMount = L(this, "ionMount", 7), this.parentPopover = null, this.coreDelegate = Zi(), this.lockController = Xo(), this.inline = !1, this.focusDescendantOnPresent = !1, this.onBackdropTap = () => {
                this.dismiss(void 0, ze)
            }, this.onLifecycle = t => {
                let e = this.usersElement,
                    n = P7[t.type];
                if (e && n) {
                    let i = new CustomEvent(n, {
                        bubbles: !1,
                        cancelable: !1,
                        detail: t.detail
                    });
                    e.dispatchEvent(i)
                }
            }, this.configureTriggerInteraction = () => {
                let {
                    trigger: t,
                    triggerAction: e,
                    el: n,
                    destroyTriggerInteraction: i
                } = this;
                if (i && i(), t === void 0) return;
                let s = this.triggerEl = t !== void 0 ? document.getElementById(t) : null;
                if (!s) {
                    vt(`A trigger element with the ID "${t}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`, this.el);
                    return
                }
                this.destroyTriggerInteraction = x7(s, e, n)
            }, this.configureKeyboardInteraction = () => {
                let {
                    destroyKeyboardInteraction: t,
                    el: e
                } = this;
                t && t(), this.destroyKeyboardInteraction = M7(e)
            }, this.configureDismissInteraction = () => {
                let {
                    destroyDismissInteraction: t,
                    parentPopover: e,
                    triggerAction: n,
                    triggerEl: i,
                    el: s
                } = this;
                !e || !i || (t && t(), this.destroyDismissInteraction = w7(i, n, s, e))
            }, this.presented = !1, this.hasController = !1, this.delegate = void 0, this.overlayIndex = void 0, this.enterAnimation = void 0, this.leaveAnimation = void 0, this.component = void 0, this.componentProps = void 0, this.keyboardClose = !0, this.cssClass = void 0, this.backdropDismiss = !0, this.event = void 0, this.showBackdrop = !0, this.translucent = !1, this.animated = !0, this.htmlAttributes = void 0, this.triggerAction = "click", this.trigger = void 0, this.size = "auto", this.dismissOnSelect = !1, this.reference = "trigger", this.side = "bottom", this.alignment = void 0, this.arrow = !0, this.isOpen = !1, this.keyboardEvents = !1, this.focusTrap = !0, this.keepContentsMounted = !1
        }
        onTriggerChange() {
            this.configureTriggerInteraction()
        }
        onIsOpenChange(t, e) {
            t === !0 && e === !1 ? this.present() : t === !1 && e === !0 && this.dismiss()
        }
        connectedCallback() {
            let {
                configureTriggerInteraction: t,
                el: e
            } = this;
            Ji(e), t()
        }
        disconnectedCallback() {
            let {
                destroyTriggerInteraction: t
            } = this;
            t && t()
        }
        componentWillLoad() {
            var t, e;
            let {
                el: n
            } = this, i = (e = (t = this.htmlAttributes) === null || t === void 0 ? void 0 : t.id) !== null && e !== void 0 ? e : t1(n);
            this.parentPopover = n.closest(`ion-popover:not(#${i})`), this.alignment === void 0 && (this.alignment = b(this) === "ios" ? "center" : "start")
        }
        componentDidLoad() {
            let {
                parentPopover: t,
                isOpen: e
            } = this;
            e === !0 && ft(() => this.present()), t && Ao(t, "ionPopoverWillDismiss", () => {
                this.dismiss(void 0, void 0, !1)
            }), this.configureTriggerInteraction()
        }
        presentFromTrigger(t, e = !1) {
            return w(this, null, function*() {
                this.focusDescendantOnPresent = e, yield this.present(t), this.focusDescendantOnPresent = !1
            })
        }
        getDelegate(t = !1) {
            if (this.workingDelegate && !t) return {
                delegate: this.workingDelegate,
                inline: this.inline
            };
            let e = this.el.parentNode,
                n = this.inline = e !== null && !this.hasController,
                i = this.workingDelegate = n ? this.delegate || this.coreDelegate : this.delegate;
            return {
                inline: n,
                delegate: i
            }
        }
        present(t) {
            return w(this, null, function*() {
                let e = yield this.lockController.lock();
                if (this.presented) {
                    e();
                    return
                }
                let {
                    el: n
                } = this, {
                    inline: i,
                    delegate: s
                } = this.getDelegate(!0);
                this.ionMount.emit(), this.usersElement = yield de(s, n, this.component, ["popover-viewport"], this.componentProps, i), this.keyboardEvents || this.configureKeyboardInteraction(), this.configureDismissInteraction(), ye(n) ? yield Si(this.usersElement): this.keepContentsMounted || (yield zi()), yield o1(this, "popoverEnter", D7, H7, {
                    event: t || this.event,
                    size: this.size,
                    trigger: this.triggerEl,
                    reference: this.reference,
                    side: this.side,
                    align: this.alignment
                }), this.focusDescendantOnPresent && Ro(n), e()
            })
        }
        dismiss(t, e, n = !0) {
            return w(this, null, function*() {
                let i = yield this.lockController.lock(), {
                    destroyKeyboardInteraction: s,
                    destroyDismissInteraction: a
                } = this;
                n && this.parentPopover && this.parentPopover.dismiss(t, e, n);
                let r = yield n1(this, t, e, "popoverLeave", j7, T7, this.event);
                if (r) {
                    s && (s(), this.destroyKeyboardInteraction = void 0), a && (a(), this.destroyDismissInteraction = void 0);
                    let {
                        delegate: l
                    } = this.getDelegate();
                    yield Oo(l, this.usersElement)
                }
                return i(), r
            })
        }
        getParentPopover() {
            return w(this, null, function*() {
                return this.parentPopover
            })
        }
        onDidDismiss() {
            return Po(this.el, "ionPopoverDidDismiss")
        }
        onWillDismiss() {
            return Po(this.el, "ionPopoverWillDismiss")
        }
        render() {
            let t = b(this),
                {
                    onLifecycle: e,
                    parentPopover: n,
                    dismissOnSelect: i,
                    side: s,
                    arrow: a,
                    htmlAttributes: r,
                    focusTrap: l
                } = this,
                c = yt("desktop"),
                d = a && !n;
            return u(S, Object.assign({
                key: "48f108a9b74f121559626889dd5a1fcccf38fc3d",
                "aria-modal": "true",
                "no-router": !0,
                tabindex: "-1"
            }, r, {
                style: {
                    zIndex: `${2e4+this.overlayIndex}`
                },
                class: Object.assign(Object.assign({}, Yi(this.cssClass)), {
                    [t]: !0,
                    "popover-translucent": this.translucent,
                    "overlay-hidden": !0,
                    "popover-desktop": c,
                    [`popover-side-${s}`]: !0,
                    [so]: l === !1,
                    "popover-nested": !!n
                }),
                onIonPopoverDidPresent: e,
                onIonPopoverWillPresent: e,
                onIonPopoverWillDismiss: e,
                onIonPopoverDidDismiss: e,
                onIonBackdropTap: this.onBackdropTap
            }), !n && u("ion-backdrop", {
                key: "580c14ab48472534f59eedc5ba7fa486df25ed4e",
                tappable: this.backdropDismiss,
                visible: this.showBackdrop,
                part: "backdrop"
            }), u("div", {
                key: "9bcf47893e8d3053e2baa40511785d84feb4038c",
                class: "popover-wrapper ion-overlay-wrapper",
                onClick: i ? () => this.dismiss() : void 0
            }, d && u("div", {
                key: "4d47f2bdc01a546a88190c07f8f4700f21de6715",
                class: "popover-arrow",
                part: "arrow"
            }), u("div", {
                key: "70018c088654c1996e305b7b6b114419e97824ef",
                class: "popover-content",
                part: "content"
            }, u("slot", {
                key: "3de8e1959b8facba2fbe694947704832200d8276"
            }))))
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                trigger: ["onTriggerChange"],
                triggerAction: ["onTriggerChange"],
                isOpen: ["onIsOpenChange"]
            }
        }
        static get style() {
            return {
                ios: V7,
                md: R7
            }
        }
    }, [33, "ion-popover", {
        hasController: [4, "has-controller"],
        delegate: [16],
        overlayIndex: [2, "overlay-index"],
        enterAnimation: [16],
        leaveAnimation: [16],
        component: [1],
        componentProps: [16],
        keyboardClose: [4, "keyboard-close"],
        cssClass: [1, "css-class"],
        backdropDismiss: [4, "backdrop-dismiss"],
        event: [8],
        showBackdrop: [4, "show-backdrop"],
        translucent: [4],
        animated: [4],
        htmlAttributes: [16],
        triggerAction: [1, "trigger-action"],
        trigger: [1],
        size: [1],
        dismissOnSelect: [4, "dismiss-on-select"],
        reference: [1],
        side: [1],
        alignment: [1025],
        arrow: [4],
        isOpen: [4, "is-open"],
        keyboardEvents: [4, "keyboard-events"],
        focusTrap: [4, "focus-trap"],
        keepContentsMounted: [4, "keep-contents-mounted"],
        presented: [32],
        presentFromTrigger: [64],
        present: [64],
        dismiss: [64],
        getParentPopover: [64],
        onDidDismiss: [64],
        onWillDismiss: [64]
    }, void 0, {
        trigger: ["onTriggerChange"],
        triggerAction: ["onTriggerChange"],
        isOpen: ["onIsOpenChange"]
    }]),
    P7 = {
        ionPopoverDidPresent: "ionViewDidEnter",
        ionPopoverWillPresent: "ionViewWillEnter",
        ionPopoverWillDismiss: "ionViewWillLeave",
        ionPopoverDidDismiss: "ionViewDidLeave"
    };

function D4() {
    if (typeof customElements > "u") return;
    ["ion-popover", "ion-backdrop"].forEach(t => {
        switch (t) {
            case "ion-popover":
                customElements.get(t) || customElements.define(t, B4);
                break;
            case "ion-backdrop":
                customElements.get(t) || Yo();
                break
        }
    })
}
var j4 = D4;
var F7 = ":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}",
    N7 = F7,
    U7 = ":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}",
    q7 = U7,
    W7 = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.updateListener = () => this.updateState(!1), this.setItemDefaults = () => {
                let t = this.getSlottedHeaderIonItem();
                t && (t.button = !0, t.detail = !1, t.lines === void 0 && (t.lines = "full"))
            }, this.getSlottedHeaderIonItem = () => {
                let {
                    headerEl: t
                } = this;
                if (!t) return;
                let e = t.querySelector("slot");
                if (e && e.assignedElements !== void 0) return e.assignedElements().find(n => n.tagName === "ION-ITEM")
            }, this.setAria = (t = !1) => {
                let e = this.getSlottedHeaderIonItem();
                if (!e) return;
                let i = ut(e).querySelector("button");
                i && i.setAttribute("aria-expanded", `${t}`)
            }, this.slotToggleIcon = () => {
                let t = this.getSlottedHeaderIonItem();
                if (!t) return;
                let {
                    toggleIconSlot: e,
                    toggleIcon: n
                } = this;
                if (t.querySelector(".ion-accordion-toggle-icon")) return;
                let s = document.createElement("ion-icon");
                s.slot = e, s.lazy = !1, s.classList.add("ion-accordion-toggle-icon"), s.icon = n, s.setAttribute("aria-hidden", "true"), t.appendChild(s)
            }, this.expandAccordion = (t = !1) => {
                let {
                    contentEl: e,
                    contentElWrapper: n
                } = this;
                if (t || e === void 0 || n === void 0) {
                    this.state = 4;
                    return
                }
                this.state !== 4 && (this.currentRaf !== void 0 && cancelAnimationFrame(this.currentRaf), this.shouldAnimate() ? ft(() => {
                    this.state = 8, this.currentRaf = ft(() => w(this, null, function*() {
                        let i = n.offsetHeight,
                            s = g0(e, 2e3);
                        e.style.setProperty("max-height", `${i}px`), yield s, this.state = 4, e.style.removeProperty("max-height")
                    }))
                }) : this.state = 4)
            }, this.collapseAccordion = (t = !1) => {
                let {
                    contentEl: e
                } = this;
                if (t || e === void 0) {
                    this.state = 1;
                    return
                }
                this.state !== 1 && (this.currentRaf !== void 0 && cancelAnimationFrame(this.currentRaf), this.shouldAnimate() ? this.currentRaf = ft(() => w(this, null, function*() {
                    let n = e.offsetHeight;
                    e.style.setProperty("max-height", `${n}px`), ft(() => w(this, null, function*() {
                        let i = g0(e, 2e3);
                        this.state = 2, yield i, this.state = 1, e.style.removeProperty("max-height")
                    }))
                })) : this.state = 1)
            }, this.shouldAnimate = () => !(typeof window > "u" || matchMedia("(prefers-reduced-motion: reduce)").matches || !Y.get("animated", !0) || this.accordionGroupEl && !this.accordionGroupEl.animated), this.updateState = (t = !1) => w(this, null, function*() {
                let e = this.accordionGroupEl,
                    n = this.value;
                if (!e) return;
                let i = e.value;
                if (Array.isArray(i) ? i.includes(n) : i === n) this.expandAccordion(t), this.isNext = this.isPrevious = !1;
                else {
                    this.collapseAccordion(t);
                    let a = this.getNextSibling(),
                        r = a ? .value;
                    r !== void 0 && (this.isPrevious = Array.isArray(i) ? i.includes(r) : i === r);
                    let l = this.getPreviousSibling(),
                        c = l ? .value;
                    c !== void 0 && (this.isNext = Array.isArray(i) ? i.includes(c) : i === c)
                }
            }), this.getNextSibling = () => {
                if (!this.el) return;
                let t = this.el.nextElementSibling;
                if (t ? .tagName === "ION-ACCORDION") return t
            }, this.getPreviousSibling = () => {
                if (!this.el) return;
                let t = this.el.previousElementSibling;
                if (t ? .tagName === "ION-ACCORDION") return t
            }, this.state = 1, this.isNext = !1, this.isPrevious = !1, this.value = `ion-accordion-${G7++}`, this.disabled = !1, this.readonly = !1, this.toggleIcon = a4, this.toggleIconSlot = "end"
        }
        valueChanged() {
            this.updateState()
        }
        connectedCallback() {
            var t;
            let e = this.accordionGroupEl = (t = this.el) === null || t === void 0 ? void 0 : t.closest("ion-accordion-group");
            e && (this.updateState(!0), Ao(e, "ionValueChange", this.updateListener))
        }
        disconnectedCallback() {
            let t = this.accordionGroupEl;
            t && yi(t, "ionValueChange", this.updateListener)
        }
        componentDidLoad() {
            this.setItemDefaults(), this.slotToggleIcon(), ft(() => {
                let t = this.state === 4 || this.state === 8;
                this.setAria(t)
            })
        }
        toggleExpanded() {
            let {
                accordionGroupEl: t,
                disabled: e,
                readonly: n,
                value: i,
                state: s
            } = this;
            if (!(e || n) && t) {
                let a = s === 1 || s === 2;
                t.requestAccordionToggle(i, a)
            }
        }
        render() {
            let {
                disabled: t,
                readonly: e
            } = this, n = b(this), i = this.state === 4 || this.state === 8, s = i ? "header expanded" : "header", a = i ? "content expanded" : "content";
            return this.setAria(i), u(S, {
                key: "073e1d02c18dcbc20c68648426e87c14750c031d",
                class: {
                    [n]: !0,
                    "accordion-expanding": this.state === 8,
                    "accordion-expanded": this.state === 4,
                    "accordion-collapsing": this.state === 2,
                    "accordion-collapsed": this.state === 1,
                    "accordion-next": this.isNext,
                    "accordion-previous": this.isPrevious,
                    "accordion-disabled": t,
                    "accordion-readonly": e,
                    "accordion-animated": this.shouldAnimate()
                }
            }, u("div", {
                key: "9b4cf326de8bb6b4033992903c0c1bfd7eea9bcc",
                onClick: () => this.toggleExpanded(),
                id: "header",
                part: s,
                "aria-controls": "content",
                ref: r => this.headerEl = r
            }, u("slot", {
                key: "464c32a37f64655eacf4218284214f5f30b14a1e",
                name: "header"
            })), u("div", {
                key: "8bb52e6a62d7de0106b253201a89a32e79d9a594",
                id: "content",
                part: a,
                role: "region",
                "aria-labelledby": "header",
                ref: r => this.contentEl = r
            }, u("div", {
                key: "1d9dfd952ad493754aaeea7a8f625b33c2dd90a0",
                id: "content-wrapper",
                ref: r => this.contentElWrapper = r
            }, u("slot", {
                key: "970dfbc55a612d739d0ca3b7b1a08e5c96d0c479",
                name: "content"
            }))))
        }
        static get delegatesFocus() {
            return !0
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                value: ["valueChanged"]
            }
        }
        static get style() {
            return {
                ios: N7,
                md: q7
            }
        }
    }, [49, "ion-accordion", {
        value: [1],
        disabled: [4],
        readonly: [4],
        toggleIcon: [1, "toggle-icon"],
        toggleIconSlot: [1, "toggle-icon-slot"],
        state: [32],
        isNext: [32],
        isPrevious: [32]
    }, void 0, {
        value: ["valueChanged"]
    }]),
    G7 = 0;

function X7() {
    if (typeof customElements > "u") return;
    ["ion-accordion", "ion-icon"].forEach(t => {
        switch (t) {
            case "ion-accordion":
                customElements.get(t) || customElements.define(t, W7);
                break;
            case "ion-icon":
                customElements.get(t) || pe();
                break
        }
    })
}
var $4 = X7;
var Y7 = ":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",
    Z7 = Y7,
    K7 = ":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-end-end-radius:6px;border-end-start-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-start-start-radius:6px;border-start-end-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",
    Q7 = K7,
    J7 = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionChange = L(this, "ionChange", 7), this.ionValueChange = L(this, "ionValueChange", 7), this.animated = !0, this.multiple = void 0, this.value = void 0, this.disabled = !1, this.readonly = !1, this.expand = "compact"
        }
        valueChanged() {
            let {
                value: t,
                multiple: e
            } = this;
            !e && Array.isArray(t) && vt(`ion-accordion-group was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${t.map(n=>`'${n}'`).join(", ")}]
`, this.el), this.ionValueChange.emit({
                value: this.value
            })
        }
        disabledChanged() {
            return w(this, null, function*() {
                let {
                    disabled: t
                } = this, e = yield this.getAccordions();
                for (let n of e) n.disabled = t
            })
        }
        readonlyChanged() {
            return w(this, null, function*() {
                let {
                    readonly: t
                } = this, e = yield this.getAccordions();
                for (let n of e) n.readonly = t
            })
        }
        onKeydown(t) {
            return w(this, null, function*() {
                let e = document.activeElement;
                if (!e || !e.closest('ion-accordion [slot="header"]')) return;
                let i = e.tagName === "ION-ACCORDION" ? e : e.closest("ion-accordion");
                if (!i || i.closest("ion-accordion-group") !== this.el) return;
                let a = yield this.getAccordions(), r = a.findIndex(c => c === i);
                if (r === -1) return;
                let l;
                t.key === "ArrowDown" ? l = this.findNextAccordion(a, r) : t.key === "ArrowUp" ? l = this.findPreviousAccordion(a, r) : t.key === "Home" ? l = a[0] : t.key === "End" && (l = a[a.length - 1]), l !== void 0 && l !== e && l.focus()
            })
        }
        componentDidLoad() {
            return w(this, null, function*() {
                this.disabled && this.disabledChanged(), this.readonly && this.readonlyChanged(), this.valueChanged()
            })
        }
        setValue(t) {
            let e = this.value = t;
            this.ionChange.emit({
                value: e
            })
        }
        requestAccordionToggle(t, e) {
            return w(this, null, function*() {
                let {
                    multiple: n,
                    value: i,
                    readonly: s,
                    disabled: a
                } = this;
                if (!(s || a))
                    if (e)
                        if (n) {
                            let r = i ? ? [],
                                l = Array.isArray(r) ? r : [r];
                            l.find(d => d === t) === void 0 && t !== void 0 && this.setValue([...l, t])
                        } else this.setValue(t);
                else if (n) {
                    let r = i ? ? [],
                        l = Array.isArray(r) ? r : [r];
                    this.setValue(l.filter(c => c !== t))
                } else this.setValue(void 0)
            })
        }
        findNextAccordion(t, e) {
            let n = t[e + 1];
            return n === void 0 ? t[0] : n
        }
        findPreviousAccordion(t, e) {
            let n = t[e - 1];
            return n === void 0 ? t[t.length - 1] : n
        }
        getAccordions() {
            return w(this, null, function*() {
                return Array.from(this.el.querySelectorAll(":scope > ion-accordion"))
            })
        }
        render() {
            let {
                disabled: t,
                readonly: e,
                expand: n
            } = this, i = b(this);
            return u(S, {
                key: "82f3e77066fabb4736638ee4c487ad56efd39c63",
                class: {
                    [i]: !0,
                    "accordion-group-disabled": t,
                    "accordion-group-readonly": e,
                    [`accordion-group-expand-${n}`]: !0
                },
                role: "presentation"
            }, u("slot", {
                key: "a3c791ea887fc640b512f81d429be465ae902b3d"
            }))
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                value: ["valueChanged"],
                disabled: ["disabledChanged"],
                readonly: ["readonlyChanged"]
            }
        }
        static get style() {
            return {
                ios: Z7,
                md: Q7
            }
        }
    }, [33, "ion-accordion-group", {
            animated: [4],
            multiple: [4],
            value: [1025],
            disabled: [4],
            readonly: [4],
            expand: [1],
            requestAccordionToggle: [64],
            getAccordions: [64]
        },
        [
            [0, "keydown", "onKeydown"]
        ], {
            value: ["valueChanged"],
            disabled: ["disabledChanged"],
            readonly: ["readonlyChanged"]
        }
    ]);

function tp() {
    if (typeof customElements > "u") return;
    ["ion-accordion-group"].forEach(t => {
        switch (t) {
            case "ion-accordion-group":
                customElements.get(t) || customElements.define(t, J7);
                break
        }
    })
}
var H4 = tp;
var ep = "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}",
    op = ep,
    np = C(class extends M {
        constructor() {
            super(), this.__registerHost()
        }
        componentDidLoad() {
            mt.isBrowser && sp(() => w(this, null, function*() {
                let t = yt(window, "hybrid");
                if (Y.getBoolean("_testing") ||
                    import ("./index9-UQCHSGJS.js").then(i => i.startTapClick(Y)), Y.getBoolean("statusTap", t) &&
                    import ("./status-tap-YYSEELS7.js").then(i => i.startStatusTap()), Y.getBoolean("inputShims", ip())) {
                    let i = yt(window, "ios") ? "ios" : "android";
                    import ("./input-shims-IXBTGJN4.js").then(s => s.startInputShims(Y, i))
                }
                let e = yield
                import ("./hardware-back-button-H7TE5Y2W.js"), n = t || Xe();
                Y.getBoolean("hardwareBackButton", n) ? e.startHardwareBackButton() : (Xe() && vt("experimentalCloseWatcher was set to `true`, but hardwareBackButton was set to `false`. Both config options must be `true` for the Close Watcher API to be used."), e.blockHardwareBackButton()), typeof window < "u" &&
                    import ("./keyboard2-KLO34JXF.js").then(i => i.startKeyboardAssist(window)),
                    import ("./focus-visible-3LIQY5J6.js").then(i => this.focusVisible = i.startFocusVisible())
            }))
        }
        setFocus(t) {
            return w(this, null, function*() {
                this.focusVisible && this.focusVisible.setFocus(t)
            })
        }
        render() {
            let t = b(this);
            return u(S, {
                key: "96715520fd05d6f0e6fa26a8ba78792cfccd4c0a",
                class: {
                    [t]: !0,
                    "ion-page": !0,
                    "force-statusbar-padding": Y.getBoolean("_forceStatusbarPadding")
                }
            })
        }
        get el() {
            return this
        }
        static get style() {
            return op
        }
    }, [0, "ion-app", {
        setFocus: [64]
    }]),
    ip = () => !!(yt(window, "ios") && yt(window, "mobile") || yt(window, "android") && yt(window, "mobileweb")),
    sp = o => {
        "requestIdleCallback" in window ? window.requestIdleCallback(o) : setTimeout(o, 32)
    };

function ap() {
    if (typeof customElements > "u") return;
    ["ion-app"].forEach(t => {
        switch (t) {
            case "ion-app":
                customElements.get(t) || customElements.define(t, np);
                break
        }
    })
}
var T4 = ap;
var rp = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}",
    lp = rp,
    cp = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}",
    dp = cp,
    hp = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow()
        }
        render() {
            return u(S, {
                key: "998217066084f966bf5d356fed85bcbd451f675a",
                class: b(this)
            }, u("slot", {
                key: "1a6f7c9d4dc6a875f86b5b3cda6d59cb39587f22"
            }))
        }
        static get style() {
            return {
                ios: lp,
                md: dp
            }
        }
    }, [33, "ion-avatar"]);

function pp() {
    if (typeof customElements > "u") return;
    ["ion-avatar"].forEach(t => {
        switch (t) {
            case "ion-avatar":
                customElements.get(t) || customElements.define(t, hp);
                break
        }
    })
}
var _4 = pp;
var up = ":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:0.8125rem;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{border-radius:10px;font-size:max(13px, 0.8125rem)}",
    gp = up,
    mp = ":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:0.8125rem;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}",
    vp = mp,
    fp = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.color = void 0
        }
        render() {
            let t = b(this);
            return u(S, {
                key: "1a2d39c5deec771a2f2196447627b62a7d4c8389",
                class: Z(this.color, {
                    [t]: !0
                })
            }, u("slot", {
                key: "fc1b6587f1ed24715748eb6785e7fb7a57cdd5cd"
            }))
        }
        static get style() {
            return {
                ios: gp,
                md: vp
            }
        }
    }, [33, "ion-badge", {
        color: [513]
    }]);

function wp() {
    if (typeof customElements > "u") return;
    ["ion-badge"].forEach(t => {
        switch (t) {
            case "ion-badge":
                customElements.get(t) || customElements.define(t, fp);
                break
        }
    })
}
var V4 = wp;
var xp = ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #0054e9);--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:14px;--padding-top:13px;--padding-bottom:13px;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:3.1em;font-size:min(1rem, 48px);font-weight:500;letter-spacing:0}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #004acd);--background-focused:var(--ion-color-primary-shade, #004acd);--background-hover:var(--ion-color-primary-tint, #1a65eb);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:14px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #0054e9);--background-focused:var(--ion-color-primary, #0054e9);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-activated-opacity:0;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:transparent;--background-focused-opacity:.1;font-size:min(1.0625rem, 51px);font-weight:normal}:host(.in-buttons){font-size:clamp(17px, 1.0625rem, 21.08px);font-weight:400}:host(.button-large){--border-radius:16px;--padding-top:17px;--padding-start:1em;--padding-end:1em;--padding-bottom:17px;min-height:3.1em;font-size:min(1.25rem, 60px)}:host(.button-small){--border-radius:6px;--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:min(0.8125rem, 39px)}:host(.button-round){--border-radius:999px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:var(--padding-top);--padding-end:var(--padding-top);--padding-start:var(--padding-end);min-width:clamp(30px, 2.125em, 60px);min-height:clamp(30px, 2.125em, 60px)}::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.12px, 1.125em, 43.02px)}:host(.button-small.button-has-icon-only){min-width:clamp(23px, 2.16em, 54px);min-height:clamp(23px, 2.16em, 54px)}:host(.button-small) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(12.1394px, 1.308125em, 40.1856px)}:host(.button-large.button-has-icon-only){min-width:clamp(46px, 2.5em, 78px);min-height:clamp(46px, 2.5em, 78px)}:host(.button-large) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.12px, 0.9em, 43.056px)}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:not(.ion-activated):hover),:host(.button-outline:not(.ion-activated):hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color):not(.ion-activated)) .button-native::after{background:#fff;opacity:0.1}}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}',
    bp = xp,
    kp = `:host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #0054e9);--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:8px;--padding-bottom:8px;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),
                background-color 15ms linear,
                color 15ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:36px;font-size:0.875rem;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:var(--ion-color-primary, #0054e9);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:var(--ion-color-primary, #0054e9);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:999px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:14px;--padding-start:1em;--padding-end:1em;--padding-bottom:14px;min-height:2.8em;font-size:1.25rem}:host(.button-small){--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:0.8125rem}:host(.button-strong){font-weight:bold}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:var(--padding-top);--padding-end:var(--padding-top);--padding-start:var(--padding-end);min-width:clamp(30px, 2.86em, 60px);min-height:clamp(30px, 2.86em, 60px)}::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.104px, 1.6em, 43.008px)}:host(.button-small.button-has-icon-only){min-width:clamp(23px, 2.16em, 54px);min-height:clamp(23px, 2.16em, 54px)}:host(.button-small) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(13.002px, 1.23125em, 40.385px)}:host(.button-large.button-has-icon-only){min-width:clamp(46px, 2.5em, 78px);min-height:clamp(46px, 2.5em, 78px)}:host(.button-large) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.008px, 1.4em, 43.008px)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-background, var(--color));color:var(--ion-toolbar-color, var(--background), var(--ion-color-primary-contrast, #fff))}`,
    yp = kp,
    O4 = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionFocus = L(this, "ionFocus", 7), this.ionBlur = L(this, "ionBlur", 7), this.inItem = !1, this.inListHeader = !1, this.inToolbar = !1, this.formButtonEl = null, this.formEl = null, this.inheritedAttributes = {}, this.handleClick = t => {
                let {
                    el: e
                } = this;
                this.type === "button" ? ce(this.href, t, this.routerDirection, this.routerAnimation) : l2(e) && this.submitForm(t)
            }, this.onFocus = () => {
                this.ionFocus.emit()
            }, this.onBlur = () => {
                this.ionBlur.emit()
            }, this.slotChanged = () => {
                this.isCircle = this.hasIconOnly
            }, this.isCircle = !1, this.color = void 0, this.buttonType = "button", this.disabled = !1, this.expand = void 0, this.fill = void 0, this.routerDirection = "forward", this.routerAnimation = void 0, this.download = void 0, this.href = void 0, this.rel = void 0, this.shape = void 0, this.size = void 0, this.strong = !1, this.target = void 0, this.type = "button", this.form = void 0
        }
        disabledChanged() {
            let {
                disabled: t
            } = this;
            this.formButtonEl && (this.formButtonEl.disabled = t)
        }
        renderHiddenButton() {
            let t = this.formEl = this.findForm();
            if (t) {
                let {
                    formButtonEl: e
                } = this;
                if (e !== null && t.contains(e)) return;
                let n = this.formButtonEl = document.createElement("button");
                n.type = this.type, n.style.display = "none", n.disabled = this.disabled, t.appendChild(n)
            }
        }
        componentWillLoad() {
            this.inToolbar = !!this.el.closest("ion-buttons"), this.inListHeader = !!this.el.closest("ion-list-header"), this.inItem = !!this.el.closest("ion-item") || !!this.el.closest("ion-item-divider"), this.inheritedAttributes = zt(this.el)
        }
        get hasIconOnly() {
            return !!this.el.querySelector('[slot="icon-only"]')
        }
        get rippleType() {
            return (this.fill === void 0 || this.fill === "clear") && this.hasIconOnly && this.inToolbar ? "unbounded" : "bounded"
        }
        findForm() {
            let {
                form: t
            } = this;
            if (t instanceof HTMLFormElement) return t;
            if (typeof t == "string") {
                let e = document.getElementById(t);
                return e ? e instanceof HTMLFormElement ? e : (vt(`Form with selector: "#${t}" could not be found. Verify that the id is attached to a <form> element.`, this.el), null) : (vt(`Form with selector: "#${t}" could not be found. Verify that the id is correct and the form is rendered in the DOM.`, this.el), null)
            }
            return t !== void 0 ? (vt('The provided "form" element is invalid. Verify that the form is a HTMLFormElement and rendered in the DOM.', this.el), null) : this.el.closest("form")
        }
        submitForm(t) {
            this.formEl && this.formButtonEl && (t.preventDefault(), this.formButtonEl.click())
        }
        render() {
            let t = b(this),
                {
                    buttonType: e,
                    type: n,
                    disabled: i,
                    rel: s,
                    target: a,
                    size: r,
                    href: l,
                    color: c,
                    expand: d,
                    hasIconOnly: p,
                    shape: g,
                    strong: m,
                    inheritedAttributes: f
                } = this,
                x = r === void 0 && this.inItem ? "small" : r,
                k = l === void 0 ? "button" : "a",
                B = k === "button" ? {
                    type: n
                } : {
                    download: this.download,
                    href: l,
                    rel: s,
                    target: a
                },
                j = this.fill;
            return j == null && (j = this.inToolbar || this.inListHeader ? "clear" : "solid"), n !== "button" && this.renderHiddenButton(), u(S, {
                key: "340a809d85698741bb36e796355cae89a970655f",
                onClick: this.handleClick,
                "aria-disabled": i ? "true" : null,
                class: Z(c, {
                    [t]: !0,
                    [e]: !0,
                    [`${e}-${d}`]: d !== void 0,
                    [`${e}-${x}`]: x !== void 0,
                    [`${e}-${g}`]: g !== void 0,
                    [`${e}-${j}`]: !0,
                    [`${e}-strong`]: m,
                    "in-toolbar": it("ion-toolbar", this.el),
                    "in-toolbar-color": it("ion-toolbar[color]", this.el),
                    "in-buttons": it("ion-buttons", this.el),
                    "button-has-icon-only": p,
                    "button-disabled": i,
                    "ion-activatable": !0,
                    "ion-focusable": !0
                })
            }, u(k, Object.assign({
                key: "03ae1b94a0d606aa65aa6f82c2fc76abcf3f1300"
            }, B, {
                class: "button-native",
                part: "native",
                disabled: i,
                onFocus: this.onFocus,
                onBlur: this.onBlur
            }, f), u("span", {
                key: "90bf53d4ffcab88ee596ece7113d5b6409e61143",
                class: "button-inner"
            }, u("slot", {
                key: "a7876695f0d8702e8bcb471ae4c0984f27d77458",
                name: "icon-only",
                onSlotchange: this.slotChanged
            }), u("slot", {
                key: "2c8551586f8726884d7797a6d3fee2d4b3aab35f",
                name: "start"
            }), u("slot", {
                key: "9ab07accdb22b08d0a463a7c821c9793507d1f7d"
            }), u("slot", {
                key: "8984afe177e6ba021435875a3798e2a64f3bdf2c",
                name: "end"
            })), t === "md" && u("ion-ripple-effect", {
                key: "3e9f01e7a1198b6b7109502293a971da7072a4f3",
                type: this.rippleType
            })))
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                disabled: ["disabledChanged"]
            }
        }
        static get style() {
            return {
                ios: bp,
                md: yp
            }
        }
    }, [33, "ion-button", {
        color: [513],
        buttonType: [1025, "button-type"],
        disabled: [516],
        expand: [513],
        fill: [1537],
        routerDirection: [1, "router-direction"],
        routerAnimation: [16],
        download: [1],
        href: [1],
        rel: [1],
        shape: [513],
        size: [513],
        strong: [4],
        target: [1],
        type: [1],
        form: [1],
        isCircle: [32]
    }, void 0, {
        disabled: ["disabledChanged"]
    }]);

function R4() {
    if (typeof customElements > "u") return;
    ["ion-button", "ion-ripple-effect"].forEach(t => {
        switch (t) {
            case "ion-button":
                customElements.get(t) || customElements.define(t, O4);
                break;
            case "ion-ripple-effect":
                customElements.get(t) || Ot();
                break
        }
    })
}
var P4 = R4;
var Mp = ".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-ios-s ion-button{--padding-top:3px;--padding-bottom:3px;--padding-start:5px;--padding-end:5px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;min-height:32px}.sc-ion-buttons-ios-s .button-has-icon-only{--padding-top:0;--padding-bottom:0}.sc-ion-buttons-ios-s ion-button:not(.button-round){--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button{--color:initial;--border-color:initial;--background-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-solid,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-solid{--background:var(--ion-color-contrast);--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12;--background-hover:var(--ion-color-base);--background-hover-opacity:0.45;--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-clear,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-clear{--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-outline,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-outline{--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast)}.sc-ion-buttons-ios-s .button-clear,.sc-ion-buttons-ios-s .button-outline{--background-activated:transparent;--background-focused:currentColor;--background-hover:transparent}.sc-ion-buttons-ios-s .button-solid:not(.ion-color){--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12}.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:1.41em;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:1.41em;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.65em;line-height:0.67}",
    Cp = Mp,
    zp = ".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-md-s ion-button{--padding-top:3px;--padding-bottom:3px;--padding-start:8px;--padding-end:8px;--box-shadow:none;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;min-height:32px}.sc-ion-buttons-md-s .button-has-icon-only{--padding-top:0;--padding-bottom:0}.sc-ion-buttons-md-s ion-button:not(.button-round){--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button{--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-solid,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-solid{--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-outline,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-outline{--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s .button-has-icon-only.button-clear{--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:3rem;height:3rem}.sc-ion-buttons-md-s .button{--background-hover:currentColor}.sc-ion-buttons-md-s .button-solid{--color:var(--ion-toolbar-background, var(--ion-background-color, #fff));--background:var(--ion-toolbar-color, var(--ion-text-color, #424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s .button-outline{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--border-color:currentColor}.sc-ion-buttons-md-s .button-clear{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}",
    Sp = zp,
    F4 = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.collapse = !1
        }
        render() {
            let t = b(this);
            return u(S, {
                key: "58c1fc5eb867d0731c63549b1ccb3ec3bbbe6e1b",
                class: {
                    [t]: !0,
                    "buttons-collapse": this.collapse
                }
            }, u("slot", {
                key: "0c8f95b9840c8fa0c4e50be84c5159620a3eb5c8"
            }))
        }
        static get style() {
            return {
                ios: Cp,
                md: Sp
            }
        }
    }, [38, "ion-buttons", {
        collapse: [4]
    }]);

function N4() {
    if (typeof customElements > "u") return;
    ["ion-buttons"].forEach(t => {
        switch (t) {
            case "ion-buttons":
                customElements.get(t) || customElements.define(t, F4);
                break
        }
    })
}
var U4 = N4;
var Ap = ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))));-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1), -webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:0.875rem;-webkit-box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}:host(.ion-activated){-webkit-transform:scale3d(0.97, 0.97, 1);transform:scale3d(0.97, 0.97, 1)}",
    Ip = Ap,
    Lp = ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, var(--ion-text-color-step-450, #737373))));-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:0.875rem;-webkit-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}",
    Ep = Lp,
    Bp = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.inheritedAriaAttributes = {}, this.color = void 0, this.button = !1, this.type = "button", this.disabled = !1, this.download = void 0, this.href = void 0, this.rel = void 0, this.routerDirection = "forward", this.routerAnimation = void 0, this.target = void 0
        }
        componentWillLoad() {
            this.inheritedAriaAttributes = ae(this.el, ["aria-label"])
        }
        isClickable() {
            return this.href !== void 0 || this.button
        }
        renderCard(t) {
            let e = this.isClickable();
            if (!e) return [u("slot", null)];
            let {
                href: n,
                routerAnimation: i,
                routerDirection: s,
                inheritedAriaAttributes: a
            } = this, r = e ? n === void 0 ? "button" : "a" : "div", l = r === "button" ? {
                type: this.type
            } : {
                download: this.download,
                href: this.href,
                rel: this.rel,
                target: this.target
            };
            return u(r, Object.assign({}, l, a, {
                class: "card-native",
                part: "native",
                disabled: this.disabled,
                onClick: c => ce(n, c, s, i)
            }), u("slot", null), e && t === "md" && u("ion-ripple-effect", null))
        }
        render() {
            let t = b(this);
            return u(S, {
                key: "85e9b30bd81e79a0c7ac75cb3664bdcf9e4afc4d",
                class: Z(this.color, {
                    [t]: !0,
                    "card-disabled": this.disabled,
                    "ion-activatable": this.isClickable()
                })
            }, this.renderCard(t))
        }
        get el() {
            return this
        }
        static get style() {
            return {
                ios: Ip,
                md: Ep
            }
        }
    }, [33, "ion-card", {
        color: [513],
        button: [4],
        type: [1],
        disabled: [4],
        download: [1],
        href: [1],
        rel: [1],
        routerDirection: [1, "router-direction"],
        routerAnimation: [16],
        target: [1]
    }]);

function Dp() {
    if (typeof customElements > "u") return;
    ["ion-card", "ion-ripple-effect"].forEach(t => {
        switch (t) {
            case "ion-card":
                customElements.get(t) || customElements.define(t, Bp);
                break;
            case "ion-ripple-effect":
                customElements.get(t) || Ot();
                break
        }
    })
}
var q4 = Dp;
var jp = "ion-card-content{display:block;position:relative}.card-content-ios{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:20px;font-size:1rem;line-height:1.4}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.5rem;font-weight:normal}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:1rem;font-weight:normal}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:0.875rem;font-weight:normal}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem}ion-card-header+.card-content-ios{padding-top:0}",
    $p = jp,
    Hp = "ion-card-content{display:block;position:relative}.card-content-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:13px;padding-bottom:13px;font-size:0.875rem;line-height:1.5}.card-content-md h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.5rem;font-weight:normal}.card-content-md h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:1rem;font-weight:normal}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:0.875rem;font-weight:normal}.card-content-md p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem;font-weight:normal;line-height:1.5}ion-card-header+.card-content-md{padding-top:0}",
    Tp = Hp,
    _p = C(class extends M {
        constructor() {
            super(), this.__registerHost()
        }
        render() {
            let t = b(this);
            return u(S, {
                key: "d98e4d1fc6ad3237549f9bc17e4c67ec5059b1b3",
                class: {
                    [t]: !0,
                    [`card-content-${t}`]: !0
                }
            })
        }
        static get style() {
            return {
                ios: $p,
                md: Tp
            }
        }
    }, [32, "ion-card-content"]);

function Vp() {
    if (typeof customElements > "u") return;
    ["ion-card-content"].forEach(t => {
        switch (t) {
            case "ion-card-content":
                customElements.get(t) || customElements.define(t, _p);
                break
        }
    })
}
var W4 = Vp;
var Op = ":host{--background:transparent;--color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:16px;-ms-flex-direction:column-reverse;flex-direction:column-reverse}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}}",
    Rp = Op,
    Pp = ":host{--background:transparent;--color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px}::slotted(ion-card-title:not(:first-child)),::slotted(ion-card-subtitle:not(:first-child)){margin-top:8px}",
    Fp = Pp,
    Np = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.color = void 0, this.translucent = !1
        }
        render() {
            let t = b(this);
            return u(S, {
                key: "64246b81931203a64d553c788cd736f41e23f37b",
                class: Z(this.color, {
                    "card-header-translucent": this.translucent,
                    "ion-inherit-color": !0,
                    [t]: !0
                })
            }, u("slot", {
                key: "af2da2dfe266889afeb57fac25c6a730558dbba4"
            }))
        }
        static get style() {
            return {
                ios: Rp,
                md: Fp
            }
        }
    }, [33, "ion-card-header", {
        color: [513],
        translucent: [4]
    }]);

function Up() {
    if (typeof customElements > "u") return;
    ["ion-card-header"].forEach(t => {
        switch (t) {
            case "ion-card-header":
                customElements.get(t) || customElements.define(t, Np);
                break
        }
    })
}
var G4 = Up;
var qp = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:0.75rem;font-weight:700;letter-spacing:0.4px;text-transform:uppercase}",
    Wp = qp,
    Gp = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:0.875rem;font-weight:500}",
    Xp = Gp,
    Yp = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.color = void 0
        }
        render() {
            let t = b(this);
            return u(S, {
                key: "84d820a19d9074f9c8bc61ccba1ca40062a60b73",
                role: "heading",
                "aria-level": "3",
                class: Z(this.color, {
                    "ion-inherit-color": !0,
                    [t]: !0
                })
            }, u("slot", {
                key: "e4d07d395a1f4469a90847636083101b32b776a1"
            }))
        }
        static get style() {
            return {
                ios: Wp,
                md: Xp
            }
        }
    }, [33, "ion-card-subtitle", {
        color: [513]
    }]);

function Zp() {
    if (typeof customElements > "u") return;
    ["ion-card-subtitle"].forEach(t => {
        switch (t) {
            case "ion-card-subtitle":
                customElements.get(t) || customElements.define(t, Yp);
                break
        }
    })
}
var X4 = Zp;
var Kp = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color, #000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:1.75rem;font-weight:700;line-height:1.2}",
    Qp = Kp,
    Jp = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:1.25rem;font-weight:500;line-height:1.2}",
    tu = Jp,
    eu = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.color = void 0
        }
        render() {
            let t = b(this);
            return u(S, {
                key: "fca001a86396e83718d5211cd71912fdf40dea2f",
                role: "heading",
                "aria-level": "2",
                class: Z(this.color, {
                    "ion-inherit-color": !0,
                    [t]: !0
                })
            }, u("slot", {
                key: "2ba416aed488b2ff462fa75fb3b70373a6dd7da6"
            }))
        }
        static get style() {
            return {
                ios: Qp,
                md: tu
            }
        }
    }, [33, "ion-card-title", {
        color: [513]
    }]);

function ou() {
    if (typeof customElements > "u") return;
    ["ion-card-title"].forEach(t => {
        switch (t) {
            case "ion-card-title":
                customElements.get(t) || customElements.define(t, eu);
                break
        }
    })
}
var Y4 = ou;
var nu = ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;-webkit-box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03);box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}',
    iu = nu,
    Z4 = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionScrollStart = L(this, "ionScrollStart", 7), this.ionScroll = L(this, "ionScroll", 7), this.ionScrollEnd = L(this, "ionScrollEnd", 7), this.watchDog = null, this.isScrolling = !1, this.lastScroll = 0, this.queued = !1, this.cTop = -1, this.cBottom = -1, this.isMainContent = !0, this.resizeTimeout = null, this.inheritedAttributes = {}, this.tabsElement = null, this.detail = {
                scrollTop: 0,
                scrollLeft: 0,
                type: "scroll",
                event: void 0,
                startX: 0,
                startY: 0,
                startTime: 0,
                currentX: 0,
                currentY: 0,
                velocityX: 0,
                velocityY: 0,
                deltaX: 0,
                deltaY: 0,
                currentTime: 0,
                data: void 0,
                isScrolling: !0
            }, this.color = void 0, this.fullscreen = !1, this.fixedSlotPlacement = "after", this.forceOverscroll = void 0, this.scrollX = !1, this.scrollY = !0, this.scrollEvents = !1
        }
        componentWillLoad() {
            this.inheritedAttributes = zt(this.el)
        }
        connectedCallback() {
            if (this.isMainContent = this.el.closest("ion-menu, ion-popover, ion-modal") === null, ye(this.el)) {
                let t = this.tabsElement = this.el.closest("ion-tabs");
                t !== null && (this.tabsLoadCallback = () => this.resize(), t.addEventListener("ionTabBarLoaded", this.tabsLoadCallback))
            }
        }
        disconnectedCallback() {
            if (this.onScrollEnd(), ye(this.el)) {
                let {
                    tabsElement: t,
                    tabsLoadCallback: e
                } = this;
                t !== null && e !== void 0 && t.removeEventListener("ionTabBarLoaded", e), this.tabsElement = null, this.tabsLoadCallback = void 0
            }
        }
        onResize() {
            this.resizeTimeout && (clearTimeout(this.resizeTimeout), this.resizeTimeout = null), this.resizeTimeout = setTimeout(() => {
                this.el.offsetParent !== null && this.resize()
            }, 100)
        }
        shouldForceOverscroll() {
            let {
                forceOverscroll: t
            } = this, e = b(this);
            return t === void 0 ? e === "ios" && yt("ios") : t
        }
        resize() {
            mt.isBrowser && (this.fullscreen ? ie(() => this.readDimensions()) : (this.cTop !== 0 || this.cBottom !== 0) && (this.cTop = this.cBottom = 0, se(this)))
        }
        readDimensions() {
            let t = au(this.el),
                e = Math.max(this.el.offsetTop, 0),
                n = Math.max(t.offsetHeight - e - this.el.offsetHeight, 0);
            (e !== this.cTop || n !== this.cBottom) && (this.cTop = e, this.cBottom = n, se(this))
        }
        onScroll(t) {
            let e = Date.now(),
                n = !this.isScrolling;
            this.lastScroll = e, n && this.onScrollStart(), !this.queued && this.scrollEvents && (this.queued = !0, ie(i => {
                this.queued = !1, this.detail.event = t, ru(this.detail, this.scrollEl, i, n), this.ionScroll.emit(this.detail)
            }))
        }
        getScrollElement() {
            return w(this, null, function*() {
                return this.scrollEl || (yield new Promise(t => Tt(this.el, t))), Promise.resolve(this.scrollEl)
            })
        }
        getBackgroundElement() {
            return w(this, null, function*() {
                return this.backgroundContentEl || (yield new Promise(t => Tt(this.el, t))), Promise.resolve(this.backgroundContentEl)
            })
        }
        scrollToTop(t = 0) {
            return this.scrollToPoint(void 0, 0, t)
        }
        scrollToBottom(t = 0) {
            return w(this, null, function*() {
                let e = yield this.getScrollElement(), n = e.scrollHeight - e.clientHeight;
                return this.scrollToPoint(void 0, n, t)
            })
        }
        scrollByPoint(t, e, n) {
            return w(this, null, function*() {
                let i = yield this.getScrollElement();
                return this.scrollToPoint(t + i.scrollLeft, e + i.scrollTop, n)
            })
        }
        scrollToPoint(t, e, n = 0) {
            return w(this, null, function*() {
                let i = yield this.getScrollElement();
                if (n < 32) {
                    e != null && (i.scrollTop = e), t != null && (i.scrollLeft = t);
                    return
                }
                let s, a = 0,
                    r = new Promise(m => s = m),
                    l = i.scrollTop,
                    c = i.scrollLeft,
                    d = e != null ? e - l : 0,
                    p = t != null ? t - c : 0,
                    g = m => {
                        let f = Math.min(1, (m - a) / n) - 1,
                            x = Math.pow(f, 3) + 1;
                        d !== 0 && (i.scrollTop = Math.floor(x * d + l)), p !== 0 && (i.scrollLeft = Math.floor(x * p + c)), x < 1 ? requestAnimationFrame(g) : s()
                    };
                return requestAnimationFrame(m => {
                    a = m, g(m)
                }), r
            })
        }
        onScrollStart() {
            this.isScrolling = !0, this.ionScrollStart.emit({
                isScrolling: !0
            }), this.watchDog && clearInterval(this.watchDog), this.watchDog = setInterval(() => {
                this.lastScroll < Date.now() - 120 && this.onScrollEnd()
            }, 100)
        }
        onScrollEnd() {
            this.watchDog && clearInterval(this.watchDog), this.watchDog = null, this.isScrolling && (this.isScrolling = !1, this.ionScrollEnd.emit({
                isScrolling: !1
            }))
        }
        render() {
            let {
                fixedSlotPlacement: t,
                inheritedAttributes: e,
                isMainContent: n,
                scrollX: i,
                scrollY: s,
                el: a
            } = this, r = m2(a) ? "rtl" : "ltr", l = b(this), c = this.shouldForceOverscroll(), d = l === "ios";
            return this.resize(), u(S, Object.assign({
                key: "f2a24aa66dbf5c76f9d4b06f708eb73cadc239df",
                role: n ? "main" : void 0,
                class: Z(this.color, {
                    [l]: !0,
                    "content-sizing": it("ion-popover", this.el),
                    overscroll: c,
                    [`content-${r}`]: !0
                }),
                style: {
                    "--offset-top": `${this.cTop}px`,
                    "--offset-bottom": `${this.cBottom}px`
                }
            }, e), u("div", {
                key: "6480ca7648b278abb36477b3838bccbcd4995e2a",
                ref: p => this.backgroundContentEl = p,
                id: "background-content",
                part: "background"
            }), t === "before" ? u("slot", {
                name: "fixed"
            }) : null, u("div", {
                key: "29a23b663f5f0215bb000820c01e1814c0d55985",
                class: {
                    "inner-scroll": !0, "scroll-x": i, "scroll-y": s, overscroll: (i || s) && c
                },
                ref: p => this.scrollEl = p,
                onScroll: this.scrollEvents ? p => this.onScroll(p) : void 0,
                part: "scroll"
            }, u("slot", {
                key: "0fe1bd05609a4b88ae2ce9addf5d5dc5dc1806f0"
            })), d ? u("div", {
                class: "transition-effect"
            }, u("div", {
                class: "transition-cover"
            }), u("div", {
                class: "transition-shadow"
            })) : null, t === "after" ? u("slot", {
                name: "fixed"
            }) : null)
        }
        get el() {
            return this
        }
        static get style() {
            return iu
        }
    }, [1, "ion-content", {
            color: [513],
            fullscreen: [4],
            fixedSlotPlacement: [1, "fixed-slot-placement"],
            forceOverscroll: [1028, "force-overscroll"],
            scrollX: [4, "scroll-x"],
            scrollY: [4, "scroll-y"],
            scrollEvents: [4, "scroll-events"],
            getScrollElement: [64],
            getBackgroundElement: [64],
            scrollToTop: [64],
            scrollToBottom: [64],
            scrollByPoint: [64],
            scrollToPoint: [64]
        },
        [
            [9, "resize", "onResize"]
        ]
    ]),
    su = o => {
        var t;
        return o.parentElement ? o.parentElement : !((t = o.parentNode) === null || t === void 0) && t.host ? o.parentNode.host : null
    },
    au = o => {
        let t = o.closest("ion-tabs");
        if (t) return t;
        let e = o.closest("ion-app, ion-page, .ion-page, page-inner, .popover-content");
        return e || su(o)
    },
    ru = (o, t, e, n) => {
        let i = o.currentX,
            s = o.currentY,
            a = o.currentTime,
            r = t.scrollLeft,
            l = t.scrollTop,
            c = e - a;
        if (n && (o.startTime = e, o.startX = r, o.startY = l, o.velocityX = o.velocityY = 0), o.currentTime = e, o.currentX = o.scrollLeft = r, o.currentY = o.scrollTop = l, o.deltaX = r - o.startX, o.deltaY = l - o.startY, c > 0 && c < 100) {
            let d = (r - i) / c,
                p = (l - s) / c;
            o.velocityX = d * .7 + o.velocityX * .3, o.velocityY = p * .7 + o.velocityY * .3
        }
    };

function K4() {
    if (typeof customElements > "u") return;
    ["ion-content"].forEach(t => {
        switch (t) {
            case "ion-content":
                customElements.get(t) || customElements.define(t, Z4);
                break
        }
    })
}
var Q4 = K4;
var lu = ":host{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;z-index:999}:host(.fab-horizontal-center){left:0px;right:0px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px));}:host-context([dir=rtl]):host(.fab-horizontal-start),:host-context([dir=rtl]).fab-horizontal-start{right:calc(10px + var(--ion-safe-area-right, 0px));left:unset}@supports selector(:dir(rtl)){:host(.fab-horizontal-start:dir(rtl)){right:calc(10px + var(--ion-safe-area-right, 0px));left:unset}}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px));}:host-context([dir=rtl]):host(.fab-horizontal-end),:host-context([dir=rtl]).fab-horizontal-end{left:calc(10px + var(--ion-safe-area-left, 0px));right:unset}@supports selector(:dir(rtl)){:host(.fab-horizontal-end:dir(rtl)){left:calc(10px + var(--ion-safe-area-left, 0px));right:unset}}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:0}:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-button){margin-top:-50%}:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-button.fab-button-small){margin-top:calc((-100% + 16px) / 2)}:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-list.fab-list-side-start),:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-list.fab-list-side-end){margin-top:-50%}:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-list.fab-list-side-top),:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-list.fab-list-side-bottom){margin-top:calc(50% + 10px)}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:0}:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-button){margin-bottom:-50%}:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-button.fab-button-small){margin-bottom:calc((-100% + 16px) / 2)}:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-list.fab-list-side-start),:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-list.fab-list-side-end){margin-bottom:-50%}:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-list.fab-list-side-top),:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-list.fab-list-side-bottom){margin-bottom:calc(50% + 10px)}:host(.fab-vertical-center){top:0px;bottom:0px;margin-top:auto;margin-bottom:auto}",
    cu = lu,
    du = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.horizontal = void 0, this.vertical = void 0, this.edge = !1, this.activated = !1
        }
        activatedChanged() {
            let t = this.activated,
                e = this.getFab();
            e && (e.activated = t), Array.from(this.el.querySelectorAll("ion-fab-list")).forEach(n => {
                n.activated = t
            })
        }
        componentDidLoad() {
            this.activated && this.activatedChanged()
        }
        close() {
            return w(this, null, function*() {
                this.activated = !1
            })
        }
        getFab() {
            return this.el.querySelector("ion-fab-button")
        }
        toggle() {
            return w(this, null, function*() {
                !!this.el.querySelector("ion-fab-list") && (this.activated = !this.activated)
            })
        }
        render() {
            let {
                horizontal: t,
                vertical: e,
                edge: n
            } = this, i = b(this);
            return u(S, {
                key: "8a310806d0e748d7ebb0ed3d9a2652038e0f2960",
                class: {
                    [i]: !0,
                    [`fab-horizontal-${t}`]: t !== void 0,
                    [`fab-vertical-${e}`]: e !== void 0,
                    "fab-edge": n
                }
            }, u("slot", {
                key: "9394ef6d6e5b0410fa6ba212171f687fb178ce2d"
            }))
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                activated: ["activatedChanged"]
            }
        }
        static get style() {
            return cu
        }
    }, [1, "ion-fab", {
        horizontal: [1],
        vertical: [1],
        edge: [4],
        activated: [1028],
        close: [64],
        toggle: [64]
    }, void 0, {
        activated: ["activatedChanged"]
    }]);

function hu() {
    if (typeof customElements > "u") return;
    ["ion-fab"].forEach(t => {
        switch (t) {
            case "ion-fab":
                customElements.get(t) || customElements.define(t, du);
                break
        }
    })
}
var J4 = hu;
var pu = ':host{--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--background-hover:var(--ion-color-primary-contrast, #fff);--background-hover-opacity:.08;--transition:background-color, opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-icon){line-height:1}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;z-index:1}:host(.fab-button-disabled){cursor:default;opacity:0.5;pointer-events:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-activated) .button-native{color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}.close-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;top:0;position:absolute;height:100%;-webkit-transform:scale(0.4) rotateZ(-45deg);transform:scale(0.4) rotateZ(-45deg);-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;font-size:var(--close-icon-font-size);opacity:0;z-index:1}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotateZ(0deg);transform:scale(1) rotateZ(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(0.4) rotateZ(45deg);transform:scale(0.4) rotateZ(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:var(--ion-color-primary, #0054e9);--background-activated:var(--ion-color-primary-shade, #004acd);--background-focused:var(--ion-color-primary-shade, #004acd);--background-hover:var(--ion-color-primary-tint, #1a65eb);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1;--color:var(--ion-color-primary-contrast, #fff);--box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59);--close-icon-font-size:28px}:host(.ion-activated){--box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);--transform:scale(1.1);--transition:0.2s transform ease-out}::slotted(ion-icon){font-size:28px}:host(.fab-button-in-list){--background:var(--ion-color-light, #f4f5f8);--background-activated:var(--ion-color-light-shade, #d7d8da);--background-focused:var(--background-activated);--background-hover:var(--ion-color-light-tint, #f5f6f9);--color:var(--ion-color-light-contrast, #000);--color-activated:var(--ion-color-light-contrast, #000);--color-focused:var(--color-activated);--transition:transform 200ms ease 10ms, opacity 200ms ease 10ms}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}:host(.ion-color.ion-focused) .button-native,:host(.ion-color.ion-activated) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .button-native::after,:host(.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-contrast)}:host(.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.fab-button-translucent){--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.9);--background-hover:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.8);--background-focused:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.82);--backdrop-filter:saturate(180%) blur(20px)}:host(.fab-button-translucent-in-list){--background:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.9);--background-hover:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.8);--background-focused:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.82)}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){@media (any-hover: hover){:host(.fab-button-translucent.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb), 0.8)}}:host(.ion-color.fab-button-translucent) .button-native{background:rgba(var(--ion-color-base-rgb), 0.9)}:host(.ion-color.ion-focused.fab-button-translucent) .button-native,:host(.ion-color.ion-activated.fab-button-translucent) .button-native{background:var(--ion-color-base)}}',
    uu = pu,
    gu = ':host{--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--background-hover:var(--ion-color-primary-contrast, #fff);--background-hover-opacity:.08;--transition:background-color, opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-icon){line-height:1}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;z-index:1}:host(.fab-button-disabled){cursor:default;opacity:0.5;pointer-events:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-activated) .button-native{color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}.close-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;top:0;position:absolute;height:100%;-webkit-transform:scale(0.4) rotateZ(-45deg);transform:scale(0.4) rotateZ(-45deg);-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;font-size:var(--close-icon-font-size);opacity:0;z-index:1}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotateZ(0deg);transform:scale(1) rotateZ(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(0.4) rotateZ(45deg);transform:scale(0.4) rotateZ(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:var(--ion-color-primary, #0054e9);--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--color:var(--ion-color-primary-contrast, #fff);--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 280ms cubic-bezier(0.4, 0, 0.2, 1), color 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;--close-icon-font-size:24px}:host(.ion-activated){--box-shadow:0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12)}::slotted(ion-icon){font-size:24px}:host(.fab-button-in-list){--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);--color-activated:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);--color-focused:var(--color-activated);--background:var(--ion-color-light, #f4f5f8);--background-activated:transparent;--background-focused:var(--ion-color-light-shade, #d7d8da);--background-hover:var(--ion-color-light-tint, #f5f6f9)}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.ion-color.ion-activated) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activated) .button-native::after{background:transparent}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-contrast)}:host(.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}}',
    mu = gu,
    vu = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionFocus = L(this, "ionFocus", 7), this.ionBlur = L(this, "ionBlur", 7), this.fab = null, this.inheritedAttributes = {}, this.onFocus = () => {
                this.ionFocus.emit()
            }, this.onBlur = () => {
                this.ionBlur.emit()
            }, this.onClick = () => {
                let {
                    fab: t
                } = this;
                t && t.toggle()
            }, this.color = void 0, this.activated = !1, this.disabled = !1, this.download = void 0, this.href = void 0, this.rel = void 0, this.routerDirection = "forward", this.routerAnimation = void 0, this.target = void 0, this.show = !1, this.translucent = !1, this.type = "button", this.size = void 0, this.closeIcon = r4
        }
        connectedCallback() {
            this.fab = this.el.closest("ion-fab")
        }
        componentWillLoad() {
            this.inheritedAttributes = zt(this.el)
        }
        render() {
            let {
                el: t,
                disabled: e,
                color: n,
                href: i,
                activated: s,
                show: a,
                translucent: r,
                size: l,
                inheritedAttributes: c
            } = this, d = it("ion-fab-list", t), p = b(this), g = i === void 0 ? "button" : "a", m = g === "button" ? {
                type: this.type
            } : {
                download: this.download,
                href: i,
                rel: this.rel,
                target: this.target
            };
            return u(S, {
                key: "4eee204d20b0e2ffed49a88f6cb3e04b6697965c",
                onClick: this.onClick,
                "aria-disabled": e ? "true" : null,
                class: Z(n, {
                    [p]: !0,
                    "fab-button-in-list": d,
                    "fab-button-translucent-in-list": d && r,
                    "fab-button-close-active": s,
                    "fab-button-show": a,
                    "fab-button-disabled": e,
                    "fab-button-translucent": r,
                    "ion-activatable": !0,
                    "ion-focusable": !0,
                    [`fab-button-${l}`]: l !== void 0
                })
            }, u(g, Object.assign({
                key: "914561622c0c6bd41453e828a7d8a39f924875ac"
            }, m, {
                class: "button-native",
                part: "native",
                disabled: e,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
                onClick: f => ce(i, f, this.routerDirection, this.routerAnimation)
            }, c), u("ion-icon", {
                key: "2c8090742a64c62a79243667027a195cca9d5912",
                "aria-hidden": "true",
                icon: this.closeIcon,
                part: "close-icon",
                class: "close-icon",
                lazy: !1
            }), u("span", {
                key: "c3e55291e4c4d306d34a4b95dd2e727e87bdf39c",
                class: "button-inner"
            }, u("slot", {
                key: "f8e57f71d8f8878d9746cfece82f57f19ef9e988"
            })), p === "md" && u("ion-ripple-effect", {
                key: "a5e94fa0bb9836072300617245ed0c1b4887bac6"
            })))
        }
        get el() {
            return this
        }
        static get style() {
            return {
                ios: uu,
                md: mu
            }
        }
    }, [33, "ion-fab-button", {
        color: [513],
        activated: [4],
        disabled: [4],
        download: [1],
        href: [1],
        rel: [1],
        routerDirection: [1, "router-direction"],
        routerAnimation: [16],
        target: [1],
        show: [4],
        translucent: [4],
        type: [1],
        size: [1],
        closeIcon: [1, "close-icon"]
    }]);

function fu() {
    if (typeof customElements > "u") return;
    ["ion-fab-button", "ion-icon", "ion-ripple-effect"].forEach(t => {
        switch (t) {
            case "ion-fab-button":
                customElements.get(t) || customElements.define(t, vu);
                break;
            case "ion-icon":
                customElements.get(t) || pe();
                break;
            case "ion-ripple-effect":
                customElements.get(t) || Ot();
                break
        }
    })
}
var tc = fu;
var wu = ":host{margin-left:0;margin-right:0;margin-top:calc(100% + 10px);margin-bottom:calc(100% + 10px);display:none;position:absolute;top:0;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;min-width:56px;min-height:56px}:host(.fab-list-active){display:-ms-flexbox;display:flex}::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;width:40px;height:40px;-webkit-transform:scale(0);transform:scale(0);opacity:0;visibility:hidden}:host(.fab-list-side-top) ::slotted(.fab-button-in-list),:host(.fab-list-side-bottom) ::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px}:host(.fab-list-side-start) ::slotted(.fab-button-in-list),:host(.fab-list-side-end) ::slotted(.fab-button-in-list){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted(.fab-button-in-list.fab-button-show){-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}:host(.fab-list-side-top){top:auto;bottom:0;-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.fab-list-side-start){-webkit-margin-start:calc(100% + 10px);margin-inline-start:calc(100% + 10px);-webkit-margin-end:calc(100% + 10px);margin-inline-end:calc(100% + 10px);margin-top:0;margin-bottom:0;-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.fab-list-side-start){inset-inline-end:0}:host(.fab-list-side-end){-webkit-margin-start:calc(100% + 10px);margin-inline-start:calc(100% + 10px);-webkit-margin-end:calc(100% + 10px);margin-inline-end:calc(100% + 10px);margin-top:0;margin-bottom:0;-ms-flex-direction:row;flex-direction:row}:host(.fab-list-side-end){inset-inline-start:0}",
    xu = wu,
    bu = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.activated = !1, this.side = "bottom"
        }
        activatedChanged(t) {
            let e = Array.from(this.el.querySelectorAll("ion-fab-button")),
                n = t ? 30 : 0;
            e.forEach((i, s) => {
                setTimeout(() => i.show = t, s * n)
            })
        }
        render() {
            let t = b(this);
            return u(S, {
                key: "64b33366447f66c7f979cfac56307fbb1a6fac1c",
                class: {
                    [t]: !0,
                    "fab-list-active": this.activated,
                    [`fab-list-side-${this.side}`]: !0
                }
            }, u("slot", {
                key: "d9f474f7f20fd7e813db358fddc720534ca05bb6"
            }))
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                activated: ["activatedChanged"]
            }
        }
        static get style() {
            return xu
        }
    }, [1, "ion-fab-list", {
        activated: [4],
        side: [1]
    }, void 0, {
        activated: ["activatedChanged"]
    }]);

function ku() {
    if (typeof customElements > "u") return;
    ["ion-fab-list"].forEach(t => {
        switch (t) {
            case "ion-fab-list":
                customElements.get(t) || customElements.define(t, bu);
                break
        }
    })
}
var ec = ku;
var nc = o => {
        if (jt === void 0 || o === w2.None || o === void 0) return null;
        let t = jt.querySelector("ion-app");
        return t ? ? jt.body
    },
    oc = o => {
        let t = nc(o);
        return t === null ? 0 : t.clientHeight
    },
    m1 = o => w(void 0, null, function*() {
        let t, e, n, i, s = () => w(void 0, null, function*() {
                let d = yield x2.getResizeMode(), p = d === void 0 ? void 0 : d.mode;
                t = () => {
                    i === void 0 && (i = oc(p)), n = !0, a(n, p)
                }, e = () => {
                    n = !1, a(n, p)
                }, pt === null || pt === void 0 || pt.addEventListener("keyboardWillShow", t), pt === null || pt === void 0 || pt.addEventListener("keyboardWillHide", e)
            }),
            a = (d, p) => {
                o && o(d, r(p))
            },
            r = d => {
                if (i === 0 || i === oc(d)) return;
                let p = nc(d);
                if (p !== null) return new Promise(g => {
                    let m = () => {
                            p.clientHeight === i && (f.disconnect(), g())
                        },
                        f = new ResizeObserver(m);
                    f.observe(p)
                })
            },
            l = () => {
                pt === null || pt === void 0 || pt.removeEventListener("keyboardWillShow", t), pt === null || pt === void 0 || pt.removeEventListener("keyboardWillHide", e), t = e = void 0
            },
            c = () => n;
        return yield s(), {
            init: s,
            destroy: l,
            isKeyboardVisible: c
        }
    });
var ic = (o, t) => {
        ie(() => {
            let e = o.scrollTop,
                n = o.scrollHeight - o.clientHeight,
                i = 10,
                s = n - i,
                a = e - s,
                r = _t(0, 1 - a / i, 1);
            Ht(() => {
                t.style.setProperty("--opacity-scale", r.toString())
            })
        })
    },
    yu = "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}.footer-collapse-fade ion-toolbar{--opacity-scale:inherit}",
    Mu = yu,
    Cu = "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.footer-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}",
    zu = Cu,
    Su = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.keyboardCtrl = null, this.checkCollapsibleFooter = () => {
                if (b(this) !== "ios") return;
                let {
                    collapse: e
                } = this, n = e === "fade";
                if (this.destroyCollapsibleFooter(), n) {
                    let i = this.el.closest("ion-app,ion-page,.ion-page,page-inner"),
                        s = i ? Ye(i) : null;
                    if (!s) {
                        Ze(this.el);
                        return
                    }
                    this.setupFadeFooter(s)
                }
            }, this.setupFadeFooter = t => w(this, null, function*() {
                let e = this.scrollEl = yield wn(t);
                this.contentScrollCallback = () => {
                    ic(e, this.el)
                }, e.addEventListener("scroll", this.contentScrollCallback), ic(e, this.el)
            }), this.keyboardVisible = !1, this.collapse = void 0, this.translucent = !1
        }
        componentDidLoad() {
            this.checkCollapsibleFooter()
        }
        componentDidUpdate() {
            this.checkCollapsibleFooter()
        }
        connectedCallback() {
            return w(this, null, function*() {
                this.keyboardCtrl = yield m1((t, e) => w(this, null, function*() {
                    t === !1 && e !== void 0 && (yield e), this.keyboardVisible = t
                }))
            })
        }
        disconnectedCallback() {
            this.keyboardCtrl && this.keyboardCtrl.destroy()
        }
        destroyCollapsibleFooter() {
            this.scrollEl && this.contentScrollCallback && (this.scrollEl.removeEventListener("scroll", this.contentScrollCallback), this.contentScrollCallback = void 0)
        }
        render() {
            let {
                translucent: t,
                collapse: e
            } = this, n = b(this), i = this.el.closest("ion-tabs"), s = i ? .querySelector(":scope > ion-tab-bar");
            return u(S, {
                key: "ddc228f1a1e7fa4f707dccf74db2490ca3241137",
                role: "contentinfo",
                class: {
                    [n]: !0,
                    [`footer-${n}`]: !0,
                    "footer-translucent": t,
                    [`footer-translucent-${n}`]: t,
                    "footer-toolbar-padding": !this.keyboardVisible && (!s || s.slot !== "bottom"),
                    [`footer-collapse-${e}`]: e !== void 0
                }
            }, n === "ios" && t && u("div", {
                key: "e16ed4963ff94e06de77eb8038201820af73937c",
                class: "footer-background"
            }), u("slot", {
                key: "f186934febf85d37133d9351a96c1a64b0a4b203"
            }))
        }
        get el() {
            return this
        }
        static get style() {
            return {
                ios: Mu,
                md: zu
            }
        }
    }, [36, "ion-footer", {
        collapse: [1],
        translucent: [4],
        keyboardVisible: [32]
    }]);

function Au() {
    if (typeof customElements > "u") return;
    ["ion-footer"].forEach(t => {
        switch (t) {
            case "ion-footer":
                customElements.get(t) || customElements.define(t, Su);
                break
        }
    })
}
var sc = Au;
var Iu = "all 0.2s ease-in-out",
    ac = o => {
        let t = document.querySelector(`${o}.ion-cloned-element`);
        if (t !== null) return t;
        let e = document.createElement(o);
        return e.classList.add("ion-cloned-element"), e.style.setProperty("display", "none"), document.body.appendChild(e), e
    },
    rc = o => {
        if (!o) return;
        let t = o.querySelectorAll("ion-toolbar");
        return {
            el: o,
            toolbars: Array.from(t).map(e => {
                let n = e.querySelector("ion-title");
                return {
                    el: e,
                    background: e.shadowRoot.querySelector(".toolbar-background"),
                    ionTitleEl: n,
                    innerTitleEl: n ? n.shadowRoot.querySelector(".toolbar-title") : null,
                    ionButtonsEl: Array.from(e.querySelectorAll("ion-buttons"))
                }
            })
        }
    },
    Lu = (o, t, e) => {
        ie(() => {
            let n = o.scrollTop,
                i = _t(1, 1 + -n / 500, 1.1);
            e.querySelector("ion-refresher.refresher-native") === null && Ht(() => {
                Du(t.toolbars, i)
            })
        })
    },
    Rs = (o, t) => {
        o.collapse !== "fade" && (t === void 0 ? o.style.removeProperty("--opacity-scale") : o.style.setProperty("--opacity-scale", t.toString()))
    },
    Eu = (o, t, e) => {
        if (!o[0].isIntersecting) return;
        let n = o[0].intersectionRatio > .9 || e <= 0 ? 0 : (1 - o[0].intersectionRatio) * 100 / 75;
        Rs(t.el, n === 1 ? void 0 : n)
    },
    Bu = (o, t, e, n) => {
        Ht(() => {
            let i = n.scrollTop;
            Eu(o, t, i);
            let s = o[0],
                a = s.intersectionRect,
                r = a.width * a.height,
                l = s.rootBounds.width * s.rootBounds.height,
                c = r === 0 && l === 0,
                d = Math.abs(a.left - s.boundingClientRect.left),
                p = Math.abs(a.right - s.boundingClientRect.right),
                g = r > 0 && (d >= 5 || p >= 5);
            c || g || (s.isIntersecting ? (Xn(t, !1), Xn(e)) : (a.x === 0 && a.y === 0 || a.width !== 0 && a.height !== 0) && i > 0 && (Xn(t), Xn(e, !1), Rs(t.el)))
        })
    },
    Xn = (o, t = !0) => {
        let e = o.el,
            i = o.toolbars.map(s => s.ionTitleEl);
        t ? (e.classList.remove("header-collapse-condense-inactive"), i.forEach(s => {
            s && s.removeAttribute("aria-hidden")
        })) : (e.classList.add("header-collapse-condense-inactive"), i.forEach(s => {
            s && s.setAttribute("aria-hidden", "true")
        }))
    },
    Du = (o = [], t = 1, e = !1) => {
        o.forEach(n => {
            let i = n.ionTitleEl,
                s = n.innerTitleEl;
            !i || i.size !== "large" || (s.style.transition = e ? Iu : "", s.style.transform = `scale3d(${t}, ${t}, 1)`)
        })
    },
    lc = (o, t, e) => {
        ie(() => {
            let n = o.scrollTop,
                i = t.clientHeight,
                s = e ? e.clientHeight : 0;
            if (e !== null && n < s) {
                t.style.setProperty("--opacity-scale", "0"), o.style.setProperty("clip-path", `inset(${i}px 0px 0px 0px)`);
                return
            }
            let a = n - s,
                l = _t(0, a / 10, 1);
            Ht(() => {
                o.style.removeProperty("clip-path"), t.style.setProperty("--opacity-scale", l.toString())
            })
        })
    },
    ju = "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:0px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}ion-header.header-ios:not(.header-collapse-main):has(~ion-content ion-header.header-ios[collapse=condense],~ion-content ion-header.header-ios.header-collapse-condense){opacity:0}",
    $u = ju,
    Hu = "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.header-collapse-condense{display:none}.header-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}",
    Tu = Hu,
    cc = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.inheritedAttributes = {}, this.setupFadeHeader = (t, e) => w(this, null, function*() {
                let n = this.scrollEl = yield wn(t);
                this.contentScrollCallback = () => {
                    lc(this.scrollEl, this.el, e)
                }, n.addEventListener("scroll", this.contentScrollCallback), lc(this.scrollEl, this.el, e)
            }), this.collapse = void 0, this.translucent = !1
        }
        componentWillLoad() {
            this.inheritedAttributes = zt(this.el)
        }
        componentDidLoad() {
            this.checkCollapsibleHeader()
        }
        componentDidUpdate() {
            this.checkCollapsibleHeader()
        }
        disconnectedCallback() {
            this.destroyCollapsibleHeader()
        }
        checkCollapsibleHeader() {
            return w(this, null, function*() {
                if (b(this) !== "ios") return;
                let {
                    collapse: e
                } = this, n = e === "condense", i = e === "fade";
                if (this.destroyCollapsibleHeader(), n) {
                    let s = this.el.closest("ion-app,ion-page,.ion-page,page-inner"),
                        a = s ? Ye(s) : null;
                    Ht(() => {
                        let r = ac("ion-title");
                        r.size = "large", ac("ion-back-button")
                    }), yield this.setupCondenseHeader(a, s)
                } else if (i) {
                    let s = this.el.closest("ion-app,ion-page,.ion-page,page-inner"),
                        a = s ? Ye(s) : null;
                    if (!a) {
                        Ze(this.el);
                        return
                    }
                    let r = a.querySelector('ion-header[collapse="condense"]');
                    yield this.setupFadeHeader(a, r)
                }
            })
        }
        destroyCollapsibleHeader() {
            this.intersectionObserver && (this.intersectionObserver.disconnect(), this.intersectionObserver = void 0), this.scrollEl && this.contentScrollCallback && (this.scrollEl.removeEventListener("scroll", this.contentScrollCallback), this.contentScrollCallback = void 0), this.collapsibleMainHeader && (this.collapsibleMainHeader.classList.remove("header-collapse-main"), this.collapsibleMainHeader = void 0)
        }
        setupCondenseHeader(t, e) {
            return w(this, null, function*() {
                if (!t || !e) {
                    Ze(this.el);
                    return
                }
                if (typeof IntersectionObserver > "u") return;
                this.scrollEl = yield wn(t);
                let n = e.querySelectorAll("ion-header");
                if (this.collapsibleMainHeader = Array.from(n).find(r => r.collapse !== "condense"), !this.collapsibleMainHeader) return;
                let i = rc(this.collapsibleMainHeader),
                    s = rc(this.el);
                if (!i || !s) return;
                Xn(i, !1), Rs(i.el, 0);
                let a = r => {
                    Bu(r, i, s, this.scrollEl)
                };
                this.intersectionObserver = new IntersectionObserver(a, {
                    root: t,
                    threshold: [.25, .3, .4, .5, .6, .7, .8, .9, 1]
                }), this.intersectionObserver.observe(s.toolbars[s.toolbars.length - 1].el), this.contentScrollCallback = () => {
                    Lu(this.scrollEl, s, t)
                }, this.scrollEl.addEventListener("scroll", this.contentScrollCallback), Ht(() => {
                    this.collapsibleMainHeader !== void 0 && this.collapsibleMainHeader.classList.add("header-collapse-main")
                })
            })
        }
        render() {
            let {
                translucent: t,
                inheritedAttributes: e
            } = this, n = b(this), i = this.collapse || "none", s = it("ion-menu", this.el) ? "none" : "banner";
            return u(S, Object.assign({
                key: "b6cc27f0b08afc9fcc889683525da765d80ba672",
                role: s,
                class: {
                    [n]: !0,
                    [`header-${n}`]: !0,
                    "header-translucent": this.translucent,
                    [`header-collapse-${i}`]: !0,
                    [`header-translucent-${n}`]: this.translucent
                }
            }, e), n === "ios" && t && u("div", {
                key: "395766d4dcee3398bc91960db21f922095292f14",
                class: "header-background"
            }), u("slot", {
                key: "09a67ece27b258ff1248805d43d92a49b2c6859a"
            }))
        }
        get el() {
            return this
        }
        static get style() {
            return {
                ios: $u,
                md: Tu
            }
        }
    }, [36, "ion-header", {
        collapse: [1],
        translucent: [4]
    }]);

function dc() {
    if (typeof customElements > "u") return;
    ["ion-header"].forEach(t => {
        switch (t) {
            case "ion-header":
                customElements.get(t) || customElements.define(t, cc);
                break
        }
    })
}
var hc = dc;
var _u = {
        bubbles: {
            dur: 1e3,
            circles: 9,
            fn: (o, t, e) => {
                let n = `${o*t/e-o}ms`,
                    i = 2 * Math.PI * t / e;
                return {
                    r: 5,
                    style: {
                        top: `${32*Math.sin(i)}%`,
                        left: `${32*Math.cos(i)}%`,
                        "animation-delay": n
                    }
                }
            }
        },
        circles: {
            dur: 1e3,
            circles: 8,
            fn: (o, t, e) => {
                let n = t / e,
                    i = `${o*n-o}ms`,
                    s = 2 * Math.PI * n;
                return {
                    r: 5,
                    style: {
                        top: `${32*Math.sin(s)}%`,
                        left: `${32*Math.cos(s)}%`,
                        "animation-delay": i
                    }
                }
            }
        },
        circular: {
            dur: 1400,
            elmDuration: !0,
            circles: 1,
            fn: () => ({
                r: 20,
                cx: 48,
                cy: 48,
                fill: "none",
                viewBox: "24 24 48 48",
                transform: "translate(0,0)",
                style: {}
            })
        },
        crescent: {
            dur: 750,
            circles: 1,
            fn: () => ({
                r: 26,
                style: {}
            })
        },
        dots: {
            dur: 750,
            circles: 3,
            fn: (o, t) => {
                let e = -(110 * t) + "ms";
                return {
                    r: 6,
                    style: {
                        left: `${32-32*t}%`,
                        "animation-delay": e
                    }
                }
            }
        },
        lines: {
            dur: 1e3,
            lines: 8,
            fn: (o, t, e) => {
                let n = `rotate(${360/e*t+(t<e/2?180:-180)}deg)`,
                    i = `${o*t/e-o}ms`;
                return {
                    y1: 14,
                    y2: 26,
                    style: {
                        transform: n,
                        "animation-delay": i
                    }
                }
            }
        },
        "lines-small": {
            dur: 1e3,
            lines: 8,
            fn: (o, t, e) => {
                let n = `rotate(${360/e*t+(t<e/2?180:-180)}deg)`,
                    i = `${o*t/e-o}ms`;
                return {
                    y1: 12,
                    y2: 20,
                    style: {
                        transform: n,
                        "animation-delay": i
                    }
                }
            }
        },
        "lines-sharp": {
            dur: 1e3,
            lines: 12,
            fn: (o, t, e) => {
                let n = `rotate(${30*t+(t<6?180:-180)}deg)`,
                    i = `${o*t/e-o}ms`;
                return {
                    y1: 17,
                    y2: 29,
                    style: {
                        transform: n,
                        "animation-delay": i
                    }
                }
            }
        },
        "lines-sharp-small": {
            dur: 1e3,
            lines: 12,
            fn: (o, t, e) => {
                let n = `rotate(${30*t+(t<6?180:-180)}deg)`,
                    i = `${o*t/e-o}ms`;
                return {
                    y1: 12,
                    y2: 20,
                    style: {
                        transform: n,
                        "animation-delay": i
                    }
                }
            }
        }
    },
    pc = _u,
    Vu = ":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{-webkit-transform-origin:center;transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){svg:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}",
    Ou = Vu,
    uc = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.color = void 0, this.duration = void 0, this.name = void 0, this.paused = !1
        }
        getName() {
            let t = this.name || Y.get("spinner"),
                e = b(this);
            return t || (e === "ios" ? "lines" : "circular")
        }
        render() {
            var t;
            let e = this,
                n = b(e),
                i = e.getName(),
                s = (t = pc[i]) !== null && t !== void 0 ? t : pc.lines,
                a = typeof e.duration == "number" && e.duration > 10 ? e.duration : s.dur,
                r = [];
            if (s.circles !== void 0)
                for (let l = 0; l < s.circles; l++) r.push(Ru(s, a, l, s.circles));
            else if (s.lines !== void 0)
                for (let l = 0; l < s.lines; l++) r.push(Pu(s, a, l, s.lines));
            return u(S, {
                key: "e0dfa8a3ee2a0469eb31323f506750bd77d65797",
                class: Z(e.color, {
                    [n]: !0,
                    [`spinner-${i}`]: !0,
                    "spinner-paused": e.paused || Y.getBoolean("_testing")
                }),
                role: "progressbar",
                style: s.elmDuration ? {
                    animationDuration: a + "ms"
                } : {}
            }, r)
        }
        static get style() {
            return Ou
        }
    }, [1, "ion-spinner", {
        color: [513],
        duration: [2],
        name: [1],
        paused: [4]
    }]),
    Ru = (o, t, e, n) => {
        let i = o.fn(t, e, n);
        return i.style["animation-duration"] = t + "ms", u("svg", {
            viewBox: i.viewBox || "0 0 64 64",
            style: i.style
        }, u("circle", {
            transform: i.transform || "translate(32,32)",
            cx: i.cx,
            cy: i.cy,
            r: i.r,
            style: o.elmDuration ? {
                animationDuration: t + "ms"
            } : {}
        }))
    },
    Pu = (o, t, e, n) => {
        let i = o.fn(t, e, n);
        return i.style["animation-duration"] = t + "ms", u("svg", {
            viewBox: i.viewBox || "0 0 64 64",
            style: i.style
        }, u("line", {
            transform: "translate(32,32)",
            y1: i.y1,
            y2: i.y2
        }))
    };

function gc() {
    if (typeof customElements > "u") return;
    ["ion-spinner"].forEach(t => {
        switch (t) {
            case "ion-spinner":
                customElements.get(t) || customElements.define(t, uc);
                break
        }
    })
}
var Fu = ':host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--detail-icon-color:initial;--detail-icon-font-size:1.25em;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:initial;text-decoration:none;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) .item-native,:host(.ion-color) .item-inner{border-color:var(--ion-color-shade)}:host(.ion-activated) .item-native{color:var(--color-activated)}:host(.ion-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-color.ion-activated) .item-native{color:var(--ion-color-contrast)}:host(.ion-focused) .item-native{color:var(--color-focused)}:host(.ion-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-color.ion-focused) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .item-native::after{background:var(--ion-color-contrast)}@media (any-hover: hover){:host(.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--color-hover)}:host(.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--ion-color-contrast)}}:host(.item-control-needs-pointer-cursor){cursor:pointer}:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){cursor:default;opacity:0.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-right:var(--padding-end);padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box}:host-context([dir=rtl]) .item-native{padding-right:calc(var(--padding-start) + var(--ion-safe-area-right, 0px));padding-left:var(--padding-end)}[dir=rtl] .item-native{padding-right:calc(var(--padding-start) + var(--ion-safe-area-right, 0px));padding-left:var(--padding-end)}@supports selector(:dir(rtl)){.item-native:dir(rtl){padding-right:calc(var(--padding-start) + var(--ion-safe-area-right, 0px));padding-left:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:var(--transition);transition:var(--transition);z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-left:var(--inner-padding-start);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}:host-context([dir=rtl]) .item-inner{padding-right:var(--inner-padding-start);padding-left:calc(var(--ion-safe-area-left, 0px) + var(--inner-padding-end))}[dir=rtl] .item-inner{padding-right:var(--inner-padding-start);padding-left:calc(var(--ion-safe-area-left, 0px) + var(--inner-padding-end))}@supports selector(:dir(rtl)){.item-inner:dir(rtl){padding-right:var(--inner-padding-start);padding-left:calc(var(--ion-safe-area-left, 0px) + var(--inner-padding-end))}}.item-detail-icon{-webkit-margin-start:calc(var(--inner-padding-end) / 2);margin-inline-start:calc(var(--inner-padding-end) / 2);-webkit-margin-end:-6px;margin-inline-end:-6px;color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label:not([slot=end])){-ms-flex:1;flex:1;width:-webkit-min-content;width:-moz-min-content;width:min-content;max-width:100%}:host(.item-input){-ms-flex-align:center;align-items:center}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-stacked),:host(.item-label-floating){-ms-flex-align:start;align-items:start}:host(.item-label-stacked) .input-wrapper,:host(.item-label-floating) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host{--min-height:44px;--transition:background-color 200ms linear, opacity 200ms linear;--padding-start:16px;--inner-padding-end:16px;--inner-border-width:0px 0px 0.55px 0px;--background:var(--ion-item-background, var(--ion-background-color, #fff));--background-activated:var(--ion-text-color, #000);--background-focused:var(--ion-text-color, #000);--background-hover:currentColor;--background-activated-opacity:.12;--background-focused-opacity:.15;--background-hover-opacity:.04;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--color:var(--ion-item-color, var(--ion-text-color, #000));font-size:1rem}:host(.ion-activated){--transition:none}:host(.ion-color.ion-focused) .item-native::after{background:#000;opacity:0.15}:host(.ion-color.ion-activated) .item-native::after{background:#000;opacity:0.12}:host(.item-lines-full){--border-width:0px 0px 0.55px 0px}:host(.item-lines-inset){--inner-border-width:0px 0px 0.55px 0px}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0px}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0px}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:2px;margin-bottom:2px}::slotted(ion-icon[slot=start]),::slotted(ion-icon[slot=end]){margin-top:7px;margin-bottom:7px}::slotted(ion-toggle[slot=start]),::slotted(ion-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small){--padding-top:1px;--padding-bottom:1px;--padding-start:.5em;--padding-end:.5em;min-height:24px;font-size:0.8125rem}::slotted(ion-avatar){width:36px;height:36px}::slotted(ion-thumbnail){--size:56px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px;margin-bottom:8px}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){-webkit-margin-start:0px;margin-inline-start:0px}::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:10px;margin-bottom:10px}:host(.item-label-floating),:host(.item-label-stacked){--min-height:68px}',
    Nu = Fu,
    Uu = ':host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--detail-icon-color:initial;--detail-icon-font-size:1.25em;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:initial;text-decoration:none;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) .item-native,:host(.ion-color) .item-inner{border-color:var(--ion-color-shade)}:host(.ion-activated) .item-native{color:var(--color-activated)}:host(.ion-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-color.ion-activated) .item-native{color:var(--ion-color-contrast)}:host(.ion-focused) .item-native{color:var(--color-focused)}:host(.ion-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-color.ion-focused) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .item-native::after{background:var(--ion-color-contrast)}@media (any-hover: hover){:host(.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--color-hover)}:host(.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--ion-color-contrast)}}:host(.item-control-needs-pointer-cursor){cursor:pointer}:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){cursor:default;opacity:0.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-right:var(--padding-end);padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box}:host-context([dir=rtl]) .item-native{padding-right:calc(var(--padding-start) + var(--ion-safe-area-right, 0px));padding-left:var(--padding-end)}[dir=rtl] .item-native{padding-right:calc(var(--padding-start) + var(--ion-safe-area-right, 0px));padding-left:var(--padding-end)}@supports selector(:dir(rtl)){.item-native:dir(rtl){padding-right:calc(var(--padding-start) + var(--ion-safe-area-right, 0px));padding-left:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:var(--transition);transition:var(--transition);z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-left:var(--inner-padding-start);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}:host-context([dir=rtl]) .item-inner{padding-right:var(--inner-padding-start);padding-left:calc(var(--ion-safe-area-left, 0px) + var(--inner-padding-end))}[dir=rtl] .item-inner{padding-right:var(--inner-padding-start);padding-left:calc(var(--ion-safe-area-left, 0px) + var(--inner-padding-end))}@supports selector(:dir(rtl)){.item-inner:dir(rtl){padding-right:var(--inner-padding-start);padding-left:calc(var(--ion-safe-area-left, 0px) + var(--inner-padding-end))}}.item-detail-icon{-webkit-margin-start:calc(var(--inner-padding-end) / 2);margin-inline-start:calc(var(--inner-padding-end) / 2);-webkit-margin-end:-6px;margin-inline-end:-6px;color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label:not([slot=end])){-ms-flex:1;flex:1;width:-webkit-min-content;width:-moz-min-content;width:min-content;max-width:100%}:host(.item-input){-ms-flex-align:center;align-items:center}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-stacked),:host(.item-label-floating){-ms-flex-align:start;align-items:start}:host(.item-label-stacked) .input-wrapper,:host(.item-label-floating) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host{--min-height:48px;--background:var(--ion-item-background, var(--ion-background-color, #fff));--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--color:var(--ion-item-color, var(--ion-text-color, #000));--transition:opacity 15ms linear, background-color 15ms linear;--padding-start:16px;--inner-padding-end:16px;--inner-border-width:0 0 1px 0;font-size:1rem;font-weight:normal;text-transform:none}:host(.ion-color.ion-activated) .item-native::after{background:transparent}:host(.item-interactive){--border-width:0 0 1px 0;--inner-border-width:0}:host(.item-lines-full){--border-width:0 0 1px 0}:host(.item-lines-inset){--inner-border-width:0 0 1px 0}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0}:host(.item-multi-line) ::slotted([slot=start]),:host(.item-multi-line) ::slotted([slot=end]){margin-top:16px;margin-bottom:16px;-ms-flex-item-align:start;align-self:flex-start}::slotted([slot=start]){-webkit-margin-end:16px;margin-inline-end:16px}::slotted([slot=end]){-webkit-margin-start:16px;margin-inline-start:16px}::slotted(ion-icon){color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);font-size:1.5em}:host(.ion-color) ::slotted(ion-icon){color:var(--ion-color-contrast)}::slotted(ion-icon[slot]){margin-top:12px;margin-bottom:12px}::slotted(ion-icon[slot=start]){-webkit-margin-end:32px;margin-inline-end:32px}::slotted(ion-icon[slot=end]){-webkit-margin-start:16px;margin-inline-start:16px}::slotted(ion-toggle[slot=start]),::slotted(ion-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}::slotted(ion-note){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-ms-flex-item-align:start;align-self:flex-start;font-size:0.6875rem}::slotted(ion-note[slot]){padding-left:0;padding-right:0;padding-top:18px;padding-bottom:10px}::slotted(ion-avatar){width:40px;height:40px}::slotted(ion-thumbnail){--size:56px}::slotted(ion-avatar),::slotted(ion-thumbnail){margin-top:8px;margin-bottom:8px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){-webkit-margin-end:16px;margin-inline-end:16px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){-webkit-margin-start:16px;margin-inline-start:16px}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:10px;margin-bottom:10px}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}:host(.item-toggle) ::slotted(ion-label),:host(.item-radio) ::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0}::slotted(.button-small){--padding-top:2px;--padding-bottom:2px;--padding-start:.6em;--padding-end:.6em;min-height:25px;font-size:0.75rem}:host(.item-label-floating),:host(.item-label-stacked){--min-height:55px}:host(.ion-focused:not(.ion-color)) ::slotted(.label-stacked),:host(.ion-focused:not(.ion-color)) ::slotted(.label-floating),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-stacked),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-floating){color:var(--ion-color-primary, #0054e9)}',
    qu = Uu,
    mc = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.labelColorStyles = {}, this.itemStyles = new Map, this.inheritedAriaAttributes = {}, this.multipleInputs = !1, this.focusable = !0, this.color = void 0, this.button = !1, this.detail = void 0, this.detailIcon = Ds, this.disabled = !1, this.download = void 0, this.href = void 0, this.rel = void 0, this.lines = void 0, this.routerAnimation = void 0, this.routerDirection = "forward", this.target = void 0, this.type = "button"
        }
        buttonChanged() {
            this.focusable = this.isFocusable()
        }
        labelColorChanged(t) {
            let {
                color: e
            } = this;
            e === void 0 && (this.labelColorStyles = t.detail)
        }
        itemStyle(t) {
            t.stopPropagation();
            let e = t.target.tagName,
                n = t.detail,
                i = {},
                s = this.itemStyles.get(e) || {},
                a = !1;
            Object.keys(n).forEach(r => {
                if (n[r]) {
                    let l = `item-${r}`;
                    s[l] || (a = !0), i[l] = !0
                }
            }), !a && Object.keys(i).length !== Object.keys(s).length && (a = !0), a && (this.itemStyles.set(e, i), se(this))
        }
        connectedCallback() {
            this.hasStartEl()
        }
        componentWillLoad() {
            this.inheritedAriaAttributes = ae(this.el, ["aria-label"])
        }
        componentDidLoad() {
            ft(() => {
                this.setMultipleInputs(), this.focusable = this.isFocusable()
            })
        }
        setMultipleInputs() {
            let t = this.el.querySelectorAll("ion-checkbox, ion-datetime, ion-select, ion-radio"),
                e = this.el.querySelectorAll("ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle"),
                n = this.el.querySelectorAll("ion-router-link, ion-button, a, button");
            this.multipleInputs = t.length + e.length > 1 || t.length + n.length > 1 || t.length > 0 && this.isClickable()
        }
        hasCover() {
            return this.el.querySelectorAll("ion-checkbox, ion-datetime, ion-select, ion-radio").length === 1 && !this.multipleInputs
        }
        isClickable() {
            return this.href !== void 0 || this.button
        }
        canActivate() {
            return this.isClickable() || this.hasCover()
        }
        isFocusable() {
            let t = this.el.querySelector(".ion-focusable");
            return this.canActivate() || t !== null
        }
        hasStartEl() {
            this.el.querySelector('[slot="start"]') !== null && this.el.classList.add("item-has-start-slot")
        }
        getFirstInteractive() {
            return this.el.querySelectorAll("ion-toggle:not([disabled]), ion-checkbox:not([disabled]), ion-radio:not([disabled]), ion-select:not([disabled]), ion-input:not([disabled]), ion-textarea:not([disabled])")[0]
        }
        render() {
            let {
                detail: t,
                detailIcon: e,
                download: n,
                labelColorStyles: i,
                lines: s,
                disabled: a,
                href: r,
                rel: l,
                target: c,
                routerAnimation: d,
                routerDirection: p,
                inheritedAriaAttributes: g,
                multipleInputs: m
            } = this, f = {}, x = b(this), k = this.isClickable(), B = this.canActivate(), j = k ? r === void 0 ? "button" : "a" : "div", D = j === "button" ? {
                type: this.type
            } : {
                download: n,
                href: r,
                rel: l,
                target: c
            }, T = {}, _ = this.getFirstInteractive();
            (k || _ !== void 0 && !m) && (T = {
                onClick: ot => {
                    if (k && ce(r, ot, p, d), _ !== void 0 && !m) {
                        let ht = ot.composedPath()[0];
                        ot.isTrusted && this.el.shadowRoot.contains(ht) && (_.tagName === "ION-INPUT" || _.tagName === "ION-TEXTAREA" ? _.setFocus() : _.click())
                    }
                }
            });
            let E = t !== void 0 ? t : x === "ios" && k;
            this.itemStyles.forEach(ot => {
                Object.assign(f, ot)
            });
            let z = a || f["item-interactive-disabled"] ? "true" : null,
                A = it("ion-list", this.el) && !it("ion-radio-group", this.el),
                R = _ !== void 0 && !["ION-INPUT", "ION-TEXTAREA"].includes(_.tagName);
            return u(S, {
                key: "02f540d8666146b5f2665ba6b39dfe774c65d5e6",
                "aria-disabled": z,
                class: Object.assign(Object.assign(Object.assign({}, f), i), Z(this.color, {
                    item: !0,
                    [x]: !0,
                    "item-lines-default": s === void 0,
                    [`item-lines-${s}`]: s !== void 0,
                    "item-control-needs-pointer-cursor": R,
                    "item-disabled": a,
                    "in-list": A,
                    "item-multiple-inputs": this.multipleInputs,
                    "ion-activatable": B,
                    "ion-focusable": this.focusable,
                    "item-rtl": document.dir === "rtl"
                })),
                role: A ? "listitem" : null
            }, u(j, Object.assign({
                key: "91cf3eedc2d7eca40a45fc3b0aaae5a87d387eb7"
            }, D, g, {
                class: "item-native",
                part: "native",
                disabled: a
            }, T), u("slot", {
                key: "ae4c679ca903a78a7c933c1d02f21f5d677b6388",
                name: "start"
            }), u("div", {
                key: "a61de72dce135b6dce18e6fa19680524958924dd",
                class: "item-inner"
            }, u("div", {
                key: "d5b09966b6de8d6b4da8e139875edec4eeb1ae27",
                class: "input-wrapper"
            }, u("slot", {
                key: "79077e5708a1783b135fab6f8caff9fb2f6f387a"
            })), u("slot", {
                key: "cdcc71689a87e985d32170ab98538ef25227f384",
                name: "end"
            }), E && u("ion-icon", {
                key: "1e82f2d0e2d2fc18bd3429a7c72e4e57447cad7a",
                icon: e,
                lazy: !1,
                class: "item-detail-icon",
                part: "detail-icon",
                "aria-hidden": "true",
                "flip-rtl": e === Ds
            })), B && x === "md" && u("ion-ripple-effect", {
                key: "ab9842d0d9c64408573f07323e10f9ed29fbe6e2"
            })))
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                button: ["buttonChanged"]
            }
        }
        static get style() {
            return {
                ios: Nu,
                md: qu
            }
        }
    }, [33, "ion-item", {
            color: [513],
            button: [4],
            detail: [4],
            detailIcon: [1, "detail-icon"],
            disabled: [516],
            download: [1],
            href: [1],
            rel: [1],
            lines: [1],
            routerAnimation: [16],
            routerDirection: [1, "router-direction"],
            target: [1],
            type: [1],
            multipleInputs: [32],
            focusable: [32]
        },
        [
            [0, "ionColor", "labelColorChanged"],
            [0, "ionStyle", "itemStyle"]
        ], {
            button: ["buttonChanged"]
        }
    ]);

function vc() {
    if (typeof customElements > "u") return;
    ["ion-item", "ion-icon", "ion-ripple-effect"].forEach(t => {
        switch (t) {
            case "ion-item":
                customElements.get(t) || customElements.define(t, mc);
                break;
            case "ion-icon":
                customElements.get(t) || pe();
                break;
            case "ion-ripple-effect":
                customElements.get(t) || Ot();
                break
        }
    })
}
var fc = vc;
var Wu = ".item.sc-ion-label-ios-h,.item .sc-ion-label-ios-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}.ion-text-nowrap.sc-ion-label-ios-h{overflow:hidden}.item-interactive-disabled.sc-ion-label-ios-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-ios-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-ios-h,.item-input .sc-ion-label-ios-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-ios-h,.item-textarea .sc-ion-label-ios-h{-ms-flex-item-align:baseline;align-self:baseline}.item-skeleton-text.sc-ion-label-ios-h,.item-skeleton-text .sc-ion-label-ios-h{overflow:hidden}.label-fixed.sc-ion-label-ios-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-ios-h,.label-floating.sc-ion-label-ios-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-ios-h{-webkit-transition:none;transition:none}.sc-ion-label-ios-s h1,.sc-ion-label-ios-s h2,.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-ios-h{font-size:0.875rem;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:0.875rem}.label-floating.sc-ion-label-ios-h{margin-bottom:0;-webkit-transform:translate(0, 29px);transform:translate(0, 29px);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out}[dir=rtl].sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl] .sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl].label-floating.sc-ion-label-ios-h,[dir=rtl] .label-floating.sc-ion-label-ios-h{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.label-floating.sc-ion-label-ios-h:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.item-textarea.label-floating.sc-ion-label-ios-h,.item-textarea .label-floating.sc-ion-label-ios-h{-webkit-transform:translate(0, 28px);transform:translate(0, 28px)}.item-has-focus.label-floating.sc-ion-label-ios-h,.item-has-focus .label-floating.sc-ion-label-ios-h,.item-has-placeholder.sc-ion-label-ios-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-ios-h,.item-has-value.label-floating.sc-ion-label-ios-h,.item-has-value .label-floating.sc-ion-label-ios-h{-webkit-transform:scale(0.82);transform:scale(0.82)}.sc-ion-label-ios-s h1{margin-left:0;margin-right:0;margin-top:3px;margin-bottom:2px;font-size:1.375rem;font-weight:normal}.sc-ion-label-ios-s h2{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.0625rem;font-weight:normal}.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:0.875rem;font-weight:normal;line-height:normal}.sc-ion-label-ios-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s>p{color:var(--ion-color-step-400, var(--ion-text-color-step-600, #999999))}.sc-ion-label-ios-h.in-item-color.sc-ion-label-ios-s>p{color:inherit}.sc-ion-label-ios-s h2:last-child,.sc-ion-label-ios-s h3:last-child,.sc-ion-label-ios-s h4:last-child,.sc-ion-label-ios-s h5:last-child,.sc-ion-label-ios-s h6:last-child,.sc-ion-label-ios-s p:last-child{margin-bottom:0}",
    Gu = Wu,
    Xu = ".item.sc-ion-label-md-h,.item .sc-ion-label-md-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}.ion-text-nowrap.sc-ion-label-md-h{overflow:hidden}.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-md-h,.item-input .sc-ion-label-md-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-md-h,.item-textarea .sc-ion-label-md-h{-ms-flex-item-align:baseline;align-self:baseline}.item-skeleton-text.sc-ion-label-md-h,.item-skeleton-text .sc-ion-label-md-h{overflow:hidden}.label-fixed.sc-ion-label-md-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-md-h{-webkit-transition:none;transition:none}.sc-ion-label-md-s h1,.sc-ion-label-md-s h2,.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:top left;transform-origin:top left}.label-stacked.label-rtl.sc-ion-label-md-h,.label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform-origin:top right;transform-origin:top right}.label-stacked.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.label-floating.sc-ion-label-md-h{-webkit-transform:translateY(96%);transform:translateY(96%);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}.ion-focused.label-floating.sc-ion-label-md-h,.ion-focused .label-floating.sc-ion-label-md-h,.item-has-focus.label-floating.sc-ion-label-md-h,.item-has-focus .label-floating.sc-ion-label-md-h,.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-has-value.label-floating.sc-ion-label-md-h,.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75)}.ion-focused.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-primary, #0054e9)}.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-contrast)}.ion-invalid.ion-touched.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--highlight-color-invalid)}.sc-ion-label-md-s h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.5rem;font-weight:normal}.sc-ion-label-md-s h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:1rem;font-weight:normal}.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:0.875rem;font-weight:normal;line-height:normal}.sc-ion-label-md-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem;line-height:1.25rem;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s>p{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.sc-ion-label-md-h.in-item-color.sc-ion-label-md-s>p{color:inherit}",
    Yu = Xu,
    wc = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.ionColor = L(this, "ionColor", 7), this.ionStyle = L(this, "ionStyle", 7), this.inRange = !1, this.color = void 0, this.position = void 0, this.noAnimate = !1
        }
        componentWillLoad() {
            this.inRange = !!this.el.closest("ion-range"), this.noAnimate = this.position === "floating", this.emitStyle(), this.emitColor()
        }
        componentDidLoad() {
            this.noAnimate && setTimeout(() => {
                this.noAnimate = !1
            }, 1e3)
        }
        colorChanged() {
            this.emitColor()
        }
        positionChanged() {
            this.emitStyle()
        }
        emitColor() {
            let {
                color: t
            } = this;
            this.ionColor.emit({
                "item-label-color": t !== void 0,
                [`ion-color-${t}`]: t !== void 0
            })
        }
        emitStyle() {
            let {
                inRange: t,
                position: e
            } = this;
            t || this.ionStyle.emit({
                label: !0,
                [`label-${e}`]: e !== void 0
            })
        }
        render() {
            let t = this.position,
                e = b(this);
            return u(S, {
                key: "4da84c95351a74b547f8224ecfa66924d21398c5",
                class: Z(this.color, {
                    [e]: !0,
                    "in-item-color": it("ion-item.ion-color", this.el),
                    [`label-${t}`]: t !== void 0,
                    "label-no-animate": this.noAnimate,
                    "label-rtl": document.dir === "rtl"
                })
            }, u("slot", {
                key: "ea158ebb620275e5492965234d0ab925d391f919"
            }))
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                color: ["colorChanged"],
                position: ["positionChanged"]
            }
        }
        static get style() {
            return {
                ios: Gu,
                md: Yu
            }
        }
    }, [38, "ion-label", {
        color: [513],
        position: [1],
        noAnimate: [32]
    }, void 0, {
        color: ["colorChanged"],
        position: ["positionChanged"]
    }]);

function xc() {
    if (typeof customElements > "u") return;
    ["ion-label"].forEach(t => {
        switch (t) {
            case "ion-label":
                customElements.get(t) || customElements.define(t, wc);
                break
        }
    })
}
var bc = xc;
var Zu = "ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-ios{background:var(--ion-item-background, var(--ion-background-color, #fff))}.list-ios.list-inset{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px;border-radius:10px}.list-ios.list-inset ion-item:only-child,.list-ios.list-inset ion-item:not(:only-of-type):last-of-type,.list-ios.list-inset ion-item-sliding:last-of-type ion-item{--border-width:0;--inner-border-width:0}.list-ios.list-inset+ion-list.list-inset{margin-top:0}.list-ios-lines-none .item-lines-default{--inner-border-width:0px;--border-width:0px}.list-ios-lines-full .item-lines-default{--inner-border-width:0px;--border-width:0 0 0.55px 0}.list-ios-lines-inset .item-lines-default{--inner-border-width:0 0 0.55px 0;--border-width:0px}ion-card .list-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",
    Ku = Zu,
    Qu = "ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;background:var(--ion-item-background, var(--ion-background-color, #fff))}.list-md>.input:last-child::after{inset-inline-start:0}.list-md.list-inset{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px;border-radius:2px}.list-md.list-inset ion-item:not(:only-of-type):last-of-type,.list-md.list-inset ion-item-sliding:last-of-type ion-item{--border-width:0;--inner-border-width:0}.list-md.list-inset ion-item:only-child{--border-width:0;--inner-border-width:0}.list-md.list-inset+ion-list.list-inset{margin-top:0}.list-md-lines-none .item-lines-default{--inner-border-width:0px;--border-width:0px}.list-md-lines-full .item-lines-default{--inner-border-width:0px;--border-width:0 0 1px 0}.list-md-lines-inset .item-lines-default{--inner-border-width:0 0 1px 0;--border-width:0px}ion-card .list-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",
    Ju = Qu,
    kc = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.lines = void 0, this.inset = !1
        }
        closeSlidingItems() {
            return w(this, null, function*() {
                let t = this.el.querySelector("ion-item-sliding");
                return t ? .closeOpened ? t.closeOpened() : !1
            })
        }
        render() {
            let t = b(this),
                {
                    lines: e,
                    inset: n
                } = this;
            return u(S, {
                key: "5ff2b0b3989cc99ce17abb8bcd7ec1847940d1ec",
                role: "list",
                class: {
                    [t]: !0,
                    [`list-${t}`]: !0,
                    "list-inset": n,
                    [`list-lines-${e}`]: e !== void 0,
                    [`list-${t}-lines-${e}`]: e !== void 0
                }
            })
        }
        get el() {
            return this
        }
        static get style() {
            return {
                ios: Ku,
                md: Ju
            }
        }
    }, [32, "ion-list", {
        lines: [1],
        inset: [4],
        closeSlidingItems: [64]
    }]);

function yc() {
    if (typeof customElements > "u") return;
    ["ion-list"].forEach(t => {
        switch (t) {
            case "ion-list":
                customElements.get(t) || customElements.define(t, kc);
                break
        }
    })
}
var Mc = yc;
var t9 = ":host{--border-style:solid;--border-width:0;--inner-border-width:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.list-header-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex:1 1 auto;flex:1 1 auto}:host(.list-header-lines-inset),:host(.list-header-lines-none){--border-width:0}:host(.list-header-lines-full),:host(.list-header-lines-none){--inner-border-width:0}:host{--background:transparent;--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));padding-right:var(--ion-safe-area-right);padding-left:calc(var(--ion-safe-area-left, 0px) + 16px);position:relative;-ms-flex-align:end;align-items:flex-end;font-size:min(1.375rem, 56.1px);font-weight:700;letter-spacing:0}:host-context([dir=rtl]){padding-right:calc(var(--ion-safe-area-right, 0px) + 16px);padding-left:var(--ion-safe-area-left)}@supports selector(:dir(rtl)){:host(:dir(rtl)){padding-right:calc(var(--ion-safe-area-right, 0px) + 16px);padding-left:var(--ion-safe-area-left)}}::slotted(ion-button),::slotted(ion-label){margin-top:29px;margin-bottom:6px}::slotted(ion-button){--padding-top:0;--padding-bottom:0;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:3px;margin-inline-end:3px;min-height:1.4em}:host(.list-header-lines-full){--border-width:0 0 0.55px 0}:host(.list-header-lines-inset){--inner-border-width:0 0 0.55px 0}",
    e9 = t9,
    o9 = ":host{--border-style:solid;--border-width:0;--inner-border-width:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.list-header-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex:1 1 auto;flex:1 1 auto}:host(.list-header-lines-inset),:host(.list-header-lines-none){--border-width:0}:host(.list-header-lines-full),:host(.list-header-lines-none){--inner-border-width:0}:host{--background:transparent;--color:var(--ion-text-color, #000);--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));padding-right:var(--ion-safe-area-right);padding-left:calc(var(--ion-safe-area-left, 0px) + 16px);min-height:45px;font-size:0.875rem}:host-context([dir=rtl]){padding-right:calc(var(--ion-safe-area-right, 0px) + 16px);padding-left:var(--ion-safe-area-left)}@supports selector(:dir(rtl)){:host(:dir(rtl)){padding-right:calc(var(--ion-safe-area-right, 0px) + 16px);padding-left:var(--ion-safe-area-left)}}:host(.list-header-lines-full){--border-width:0 0 1px 0}:host(.list-header-lines-inset){--inner-border-width:0 0 1px 0}",
    n9 = o9,
    Cc = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.color = void 0, this.lines = void 0
        }
        render() {
            let {
                lines: t
            } = this, e = b(this);
            return u(S, {
                key: "95ce2135e2b1ad4d7d6020b0fb9bc6e02b3c0851",
                class: Z(this.color, {
                    [e]: !0,
                    [`list-header-lines-${t}`]: t !== void 0
                })
            }, u("div", {
                key: "3065b0a094bc31a90518898a5126a813c8a33816",
                class: "list-header-inner"
            }, u("slot", {
                key: "fe15c87d7867f3e5d8185645c49c0228496697b8"
            })))
        }
        static get style() {
            return {
                ios: e9,
                md: n9
            }
        }
    }, [33, "ion-list-header", {
        color: [513],
        lines: [1]
    }]);

function zc() {
    if (typeof customElements > "u") return;
    ["ion-list-header"].forEach(t => {
        switch (t) {
            case "ion-list-header":
                customElements.get(t) || customElements.define(t, Cc);
                break
        }
    })
}
var Sc = zc;
var i9 = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",
    s9 = i9,
    a9 = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}",
    r9 = a9,
    l9 = "cubic-bezier(0.32,0.72,0,1)",
    c9 = "cubic-bezier(0.0,0.0,0.2,1)",
    d9 = "cubic-bezier(1, 0, 0.68, 0.28)",
    h9 = "cubic-bezier(0.4, 0, 0.6, 1)",
    p9 = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionWillOpen = L(this, "ionWillOpen", 7), this.ionWillClose = L(this, "ionWillClose", 7), this.ionDidOpen = L(this, "ionDidOpen", 7), this.ionDidClose = L(this, "ionDidClose", 7), this.ionMenuChange = L(this, "ionMenuChange", 7), this.lastOnEnd = 0, this.blocker = p2.createBlocker({
                disableScroll: !0
            }), this.didLoad = !1, this.operationCancelled = !1, this.isAnimating = !1, this._isOpen = !1, this.inheritedAttributes = {}, this.handleFocus = t => {
                let e = io(document);
                e && !e.contains(this.el) || this.trapKeyboardFocus(t, document)
            }, this.isPaneVisible = !1, this.isEndSide = !1, this.contentId = void 0, this.menuId = void 0, this.type = void 0, this.disabled = !1, this.side = "start", this.swipeGesture = !0, this.maxEdgeStart = 50
        }
        typeChanged(t, e) {
            let n = this.contentEl;
            n && (e !== void 0 && n.classList.remove(`menu-content-${e}`), n.classList.add(`menu-content-${t}`), n.removeAttribute("style")), this.menuInnerEl && this.menuInnerEl.removeAttribute("style"), this.animation = void 0
        }
        disabledChanged() {
            this.updateState(), this.ionMenuChange.emit({
                disabled: this.disabled,
                open: this._isOpen
            })
        }
        sideChanged() {
            this.isEndSide = v0(this.side), this.animation = void 0
        }
        swipeGestureChanged() {
            this.updateState()
        }
        connectedCallback() {
            return w(this, null, function*() {
                if (typeof customElements < "u" && customElements != null && (yield customElements.whenDefined("ion-menu")), this.type === void 0 && (this.type = Y.get("menuType", "overlay")), !mt.isBrowser) return;
                let t = this.contentId !== void 0 ? document.getElementById(this.contentId) : null;
                if (t === null) {
                    console.error('Menu: must have a "content" element to listen for drag events on.');
                    return
                }
                this.el.contains(t) && console.error(`Menu: "contentId" should refer to the main view's ion-content, not the ion-content inside of the ion-menu.`), this.contentEl = t, t.classList.add("menu-content"), this.typeChanged(this.type, void 0), this.sideChanged(), Wt._register(this), this.menuChanged(), this.gesture = (yield
                    import ("./index3-I37ZG6FD.js")).createGesture({
                    el: document,
                    gestureName: "menu-swipe",
                    gesturePriority: 30,
                    threshold: 10,
                    blurOnStart: !0,
                    canStart: e => this.canStart(e),
                    onWillStart: () => this.onWillStart(),
                    onStart: () => this.onStart(),
                    onMove: e => this.onMove(e),
                    onEnd: e => this.onEnd(e)
                }), this.updateState()
            })
        }
        componentWillLoad() {
            this.inheritedAttributes = zt(this.el)
        }
        componentDidLoad() {
            return w(this, null, function*() {
                this.didLoad = !0;
                let t = this.el.closest("ion-split-pane");
                t !== null && (this.isPaneVisible = yield t.isVisible()), this.menuChanged(), this.updateState()
            })
        }
        menuChanged() {
            this.didLoad && this.ionMenuChange.emit({
                disabled: this.disabled,
                open: this._isOpen
            })
        }
        disconnectedCallback() {
            return w(this, null, function*() {
                yield this.close(!1), this.blocker.destroy(), Wt._unregister(this), this.animation && this.animation.destroy(), this.gesture && (this.gesture.destroy(), this.gesture = void 0), this.animation = void 0, this.contentEl = void 0
            })
        }
        onSplitPaneChanged(t) {
            let e = this.el.closest("ion-split-pane");
            e !== null && e === t.target && (this.isPaneVisible = t.detail.visible, this.updateState())
        }
        onBackdropClick(t) {
            this._isOpen && this.lastOnEnd < t.timeStamp - 100 && (t.composedPath && !t.composedPath().includes(this.menuInnerEl)) && (t.preventDefault(), t.stopPropagation(), this.close(void 0, ze))
        }
        onKeydown(t) {
            t.key === "Escape" && this.close(void 0, ze)
        }
        isOpen() {
            return Promise.resolve(this._isOpen)
        }
        isActive() {
            return Promise.resolve(this._isActive())
        }
        open(t = !0) {
            return this.setOpen(!0, t)
        }
        close(t = !0, e) {
            return this.setOpen(!1, t, e)
        }
        toggle(t = !0) {
            return this.setOpen(!this._isOpen, t)
        }
        setOpen(t, e = !0, n) {
            return Wt._setOpen(this, t, e, n)
        }
        trapKeyboardFocus(t, e) {
            let n = t.target;
            if (n)
                if (this.el.contains(n)) this.lastFocus = n;
                else {
                    let {
                        el: i
                    } = this;
                    Ro(i), this.lastFocus === e.activeElement && Ki(i)
                }
        }
        _setOpen(t, e = !0, n) {
            return w(this, null, function*() {
                return !this._isActive() || this.isAnimating || t === this._isOpen ? !1 : (this.beforeAnimation(t, n), yield this.loadAnimation(), yield this.startAnimation(t, e), this.operationCancelled ? (this.operationCancelled = !1, !1) : (this.afterAnimation(t, n), !0))
            })
        }
        loadAnimation() {
            return w(this, null, function*() {
                let t = this.menuInnerEl.offsetWidth,
                    e = v0(this.side);
                if (t === this.width && this.animation !== void 0 && e === this.isEndSide) return;
                this.width = t, this.isEndSide = e, this.animation && (this.animation.destroy(), this.animation = void 0);
                let n = this.animation = yield Wt._createAnimation(this.type, this);
                Y.getBoolean("animated", !0) || n.duration(0), n.fill("both")
            })
        }
        startAnimation(t, e) {
            return w(this, null, function*() {
                let n = !t,
                    i = b(this),
                    s = i === "ios" ? l9 : c9,
                    a = i === "ios" ? d9 : h9,
                    r = this.animation.direction(n ? "reverse" : "normal").easing(n ? a : s);
                e ? yield r.play(): r.play({
                    sync: !0
                }), r.getDirection() === "reverse" && r.direction("normal")
            })
        }
        _isActive() {
            return !this.disabled && !this.isPaneVisible
        }
        canSwipe() {
            return this.swipeGesture && !this.isAnimating && this._isActive()
        }
        canStart(t) {
            return !!document.querySelector("ion-modal.show-modal") || !this.canSwipe() ? !1 : this._isOpen ? !0 : Wt._getOpenSync() ? !1 : u9(window, t.currentX, this.isEndSide, this.maxEdgeStart)
        }
        onWillStart() {
            return this.beforeAnimation(!this._isOpen, he), this.loadAnimation()
        }
        onStart() {
            if (!this.isAnimating || !this.animation) {
                xt(!1, "isAnimating has to be true");
                return
            }
            this.animation.progressStart(!0, this._isOpen ? 1 : 0)
        }
        onMove(t) {
            if (!this.isAnimating || !this.animation) {
                xt(!1, "isAnimating has to be true");
                return
            }
            let n = Ac(t.deltaX, this._isOpen, this.isEndSide) / this.width;
            this.animation.progressStep(this._isOpen ? 1 - n : n)
        }
        onEnd(t) {
            if (!this.isAnimating || !this.animation) {
                xt(!1, "isAnimating has to be true");
                return
            }
            let e = this._isOpen,
                n = this.isEndSide,
                i = Ac(t.deltaX, e, n),
                s = this.width,
                a = i / s,
                r = t.velocityX,
                l = s / 2,
                c = r >= 0 && (r > .2 || t.deltaX > l),
                d = r <= 0 && (r < -.2 || t.deltaX < -l),
                p = e ? n ? c : d : n ? d : c,
                g = !e && p;
            e && !p && (g = !0), this.lastOnEnd = t.currentTime;
            let m = p ? .001 : -.001,
                f = a < 0 ? .01 : a;
            m += Qt([0, 0], [.4, 0], [.6, 1], [1, 1], _t(0, f, .9999))[0] || 0;
            let x = this._isOpen ? !p : p;
            this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(() => this.afterAnimation(g, he), {
                oneTimeCallback: !0
            }).progressEnd(x ? 1 : 0, this._isOpen ? 1 - m : m, 300)
        }
        beforeAnimation(t, e) {
            xt(!this.isAnimating, "_before() should not be called while animating"), yt("android") && this.el.setAttribute("aria-hidden", "true"), this.el.classList.add(Ic), this.el.setAttribute("tabindex", "0"), this.backdropEl && this.backdropEl.classList.add(Lc), this.contentEl && (this.contentEl.classList.add(Ec), this.contentEl.setAttribute("aria-hidden", "true")), this.blocker.block(), this.isAnimating = !0, t ? this.ionWillOpen.emit() : this.ionWillClose.emit({
                role: e
            })
        }
        afterAnimation(t, e) {
            var n;
            this._isOpen = t, this.isAnimating = !1, this._isOpen || this.blocker.unblock(), t ? (yt("android") && this.el.removeAttribute("aria-hidden"), this.ionDidOpen.emit(), ((n = document.activeElement) === null || n === void 0 ? void 0 : n.closest("ion-menu")) !== this.el && this.el.focus(), document.addEventListener("focus", this.handleFocus, !0)) : (this.el.removeAttribute("aria-hidden"), this.el.classList.remove(Ic), this.el.removeAttribute("tabindex"), this.contentEl && (this.contentEl.classList.remove(Ec), this.contentEl.removeAttribute("aria-hidden")), this.backdropEl && this.backdropEl.classList.remove(Lc), this.animation && this.animation.stop(), this.ionDidClose.emit({
                role: e
            }), document.removeEventListener("focus", this.handleFocus, !0))
        }
        updateState() {
            let t = this._isActive();
            this.gesture && this.gesture.enable(t && this.swipeGesture), t || (this.isAnimating && (this.operationCancelled = !0), this.afterAnimation(!1, he))
        }
        render() {
            let {
                type: t,
                disabled: e,
                el: n,
                isPaneVisible: i,
                inheritedAttributes: s,
                side: a
            } = this, r = b(this);
            return u(S, {
                key: "342db8551d26604128b29b21d2d8c37593972ed9",
                onKeyDown: Xe() ? null : this.onKeydown,
                role: "navigation",
                "aria-label": s["aria-label"] || "menu",
                class: {
                    [r]: !0,
                    [`menu-type-${t}`]: !0,
                    "menu-enabled": !e,
                    [`menu-side-${a}`]: !0,
                    "menu-pane-visible": i,
                    "split-pane-side": it("ion-split-pane", n)
                }
            }, u("div", {
                key: "3c9bec2862b7fb9d88de66b1600be01f6735e3dd",
                class: "menu-inner",
                part: "container",
                ref: l => this.menuInnerEl = l
            }, u("slot", {
                key: "76283b4b2a65c78646f92c3b273eea021eda499c"
            })), u("ion-backdrop", {
                key: "121c395bc4873542a1b6ae2c9e23f2e881e75d93",
                ref: l => this.backdropEl = l,
                class: "menu-backdrop",
                tappable: !1,
                stopPropagation: !1,
                part: "backdrop"
            }))
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                type: ["typeChanged"],
                disabled: ["disabledChanged"],
                side: ["sideChanged"],
                swipeGesture: ["swipeGestureChanged"]
            }
        }
        static get style() {
            return {
                ios: s9,
                md: r9
            }
        }
    }, [33, "ion-menu", {
            contentId: [513, "content-id"],
            menuId: [513, "menu-id"],
            type: [1025],
            disabled: [1028],
            side: [513],
            swipeGesture: [4, "swipe-gesture"],
            maxEdgeStart: [2, "max-edge-start"],
            isPaneVisible: [32],
            isEndSide: [32],
            isOpen: [64],
            isActive: [64],
            open: [64],
            close: [64],
            toggle: [64],
            setOpen: [64]
        },
        [
            [16, "ionSplitPaneVisible", "onSplitPaneChanged"],
            [2, "click", "onBackdropClick"]
        ], {
            type: ["typeChanged"],
            disabled: ["disabledChanged"],
            side: ["sideChanged"],
            swipeGesture: ["swipeGestureChanged"]
        }
    ]),
    Ac = (o, t, e) => Math.max(0, t !== e ? -o : o),
    u9 = (o, t, e, n) => e ? t >= o.innerWidth - n : t <= n,
    Ic = "show-menu",
    Lc = "show-backdrop",
    Ec = "menu-content-open";

function g9() {
    if (typeof customElements > "u") return;
    ["ion-menu", "ion-backdrop"].forEach(t => {
        switch (t) {
            case "ion-menu":
                customElements.get(t) || customElements.define(t, p9);
                break;
            case "ion-backdrop":
                customElements.get(t) || Yo();
                break
        }
    })
}
var Bc = g9;
var v1 = o => w(void 0, null, function*() {
    let t = yield Wt.get(o);
    return !!(t && (yield t.isActive()))
});
var m9 = ':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #0054e9);--padding-start:5px;--padding-end:5px;min-height:32px;font-size:clamp(31px, 1.9375rem, 38.13px)}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',
    v9 = m9,
    f9 = ':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:3rem;height:3rem;font-size:1.5rem}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}',
    w9 = f9,
    x9 = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.inheritedAttributes = {}, this.onClick = () => w(this, null, function*() {
                return Wt.toggle(this.menu)
            }), this.visible = !1, this.color = void 0, this.disabled = !1, this.menu = void 0, this.autoHide = !0, this.type = "button"
        }
        componentWillLoad() {
            this.inheritedAttributes = zt(this.el)
        }
        componentDidLoad() {
            this.visibilityChanged()
        }
        visibilityChanged() {
            return w(this, null, function*() {
                this.visible = yield v1(this.menu)
            })
        }
        render() {
            let {
                color: t,
                disabled: e,
                inheritedAttributes: n
            } = this, i = b(this), s = Y.get("menuIcon", i === "ios" ? l4 : c4), a = this.autoHide && !this.visible, r = {
                type: this.type
            }, l = n["aria-label"] || "menu";
            return u(S, {
                key: "3cde3704f28eb275f4a5ff2985bbb68c1024e79c",
                onClick: this.onClick,
                "aria-disabled": e ? "true" : null,
                "aria-hidden": a ? "true" : null,
                class: Z(t, {
                    [i]: !0,
                    button: !0,
                    "menu-button-hidden": a,
                    "menu-button-disabled": e,
                    "in-toolbar": it("ion-toolbar", this.el),
                    "in-toolbar-color": it("ion-toolbar[color]", this.el),
                    "ion-activatable": !0,
                    "ion-focusable": !0
                })
            }, u("button", Object.assign({
                key: "a02a3374288bd1759b6e352ada8eab0d45c6422f"
            }, r, {
                disabled: e,
                class: "button-native",
                part: "native",
                "aria-label": l
            }), u("span", {
                key: "ba699f2277a4e7b27ce5e42faeefc53d8805bb43",
                class: "button-inner"
            }, u("slot", {
                key: "829fe6cbdeb173f50d1a670389d1565baa6273e4"
            }, u("ion-icon", {
                key: "a9a9f7b8dcffc648a8429fe0adbe766869de72fd",
                part: "icon",
                icon: s,
                mode: i,
                lazy: !1,
                "aria-hidden": "true"
            }))), i === "md" && u("ion-ripple-effect", {
                key: "48deca9a771a249f2fc76eaa8b9741c8d66d8355",
                type: "unbounded"
            })))
        }
        get el() {
            return this
        }
        static get style() {
            return {
                ios: v9,
                md: w9
            }
        }
    }, [33, "ion-menu-button", {
            color: [513],
            disabled: [4],
            menu: [1],
            autoHide: [4, "auto-hide"],
            type: [1],
            visible: [32]
        },
        [
            [16, "ionMenuChange", "visibilityChanged"],
            [16, "ionSplitPaneVisible", "visibilityChanged"]
        ]
    ]);

function b9() {
    if (typeof customElements > "u") return;
    ["ion-menu-button", "ion-icon", "ion-ripple-effect"].forEach(t => {
        switch (t) {
            case "ion-menu-button":
                customElements.get(t) || customElements.define(t, x9);
                break;
            case "ion-icon":
                customElements.get(t) || pe();
                break;
            case "ion-ripple-effect":
                customElements.get(t) || Ot();
                break
        }
    })
}
var Dc = b9;
var k9 = ":host(.menu-toggle-hidden){display:none}",
    y9 = k9,
    M9 = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.onClick = () => Wt.toggle(this.menu), this.visible = !1, this.menu = void 0, this.autoHide = !0
        }
        connectedCallback() {
            this.visibilityChanged()
        }
        visibilityChanged() {
            return w(this, null, function*() {
                this.visible = yield v1(this.menu)
            })
        }
        render() {
            let t = b(this),
                e = this.autoHide && !this.visible;
            return u(S, {
                key: "88e88fa13ac7f10ba3acfe378bd11cda0c7e2749",
                onClick: this.onClick,
                "aria-hidden": e ? "true" : null,
                class: {
                    [t]: !0,
                    "menu-toggle-hidden": e
                }
            }, u("slot", {
                key: "0a14c7b63eda64702d2fd1b4bc7db4809892842d"
            }))
        }
        static get style() {
            return y9
        }
    }, [1, "ion-menu-toggle", {
            menu: [1],
            autoHide: [4, "auto-hide"],
            visible: [32]
        },
        [
            [16, "ionMenuChange", "visibilityChanged"],
            [16, "ionSplitPaneVisible", "visibilityChanged"]
        ]
    ]);

function C9() {
    if (typeof customElements > "u") return;
    ["ion-menu-toggle"].forEach(t => {
        switch (t) {
            case "ion-menu-toggle":
                customElements.get(t) || customElements.define(t, M9);
                break
        }
    })
}
var jc = C9;
var z9 = (o, t, e, n, i) => {
        let s = o.closest("ion-nav");
        if (s) {
            if (t === "forward") {
                if (e !== void 0) return s.push(e, n, {
                    skipIfBusy: !0,
                    animationBuilder: i
                })
            } else if (t === "root") {
                if (e !== void 0) return s.setRoot(e, n, {
                    skipIfBusy: !0,
                    animationBuilder: i
                })
            } else if (t === "back") return s.pop({
                skipIfBusy: !0,
                animationBuilder: i
            })
        }
        return Promise.resolve(!1)
    },
    S9 = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.onClick = () => z9(this.el, this.routerDirection, this.component, this.componentProps, this.routerAnimation), this.component = void 0, this.componentProps = void 0, this.routerDirection = "forward", this.routerAnimation = void 0
        }
        render() {
            return u(S, {
                key: "9ba170d1b10e08e8a6b5e6a30d363871d455a0a9",
                onClick: this.onClick
            })
        }
        get el() {
            return this
        }
    }, [0, "ion-nav-link", {
        component: [1],
        componentProps: [16],
        routerDirection: [1, "router-direction"],
        routerAnimation: [16]
    }]);

function A9() {
    if (typeof customElements > "u") return;
    ["ion-nav-link"].forEach(t => {
        switch (t) {
            case "ion-nav-link":
                customElements.get(t) || customElements.define(t, S9);
                break
        }
    })
}
var $c = A9;
var I9 = ":host{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.3);--progress-background:var(--ion-color-primary, #0054e9);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.buffer-circles-container,.buffer-circles{left:0;right:0;top:0;bottom:0;position:absolute}.buffer-circles{right:-10px;left:-10px;}.progress,.progress-buffer-bar,.buffer-circles-container{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms linear;transition:-webkit-transform 150ms linear;transition:transform 150ms linear;transition:transform 150ms linear, -webkit-transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:var(--background);z-index:1}.buffer-circles-container{overflow:hidden}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s infinite linear;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{-webkit-animation:primary-indeterminate-scale 2s infinite linear;animation:primary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s infinite linear;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{-webkit-animation:secondary-indeterminate-scale 2s infinite linear;animation:secondary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.buffer-circles{background-image:radial-gradient(ellipse at center, var(--background) 0%, var(--background) 30%, transparent 30%);background-repeat:repeat-x;background-position:5px center;background-size:10px 10px;z-index:0;-webkit-animation:buffering 450ms infinite linear;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed){-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{-webkit-animation-play-state:paused;animation-play-state:paused}:host(.ion-color) .buffer-circles{background-image:radial-gradient(ellipse at center, rgba(var(--ion-color-base-rgb), 0.3) 0%, rgba(var(--ion-color-base-rgb), 0.3) 30%, transparent 30%)}:host(.ion-color) .progress,:host(.ion-color) .progress-indeterminate{background:var(--ion-color-base)}@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}:host{border-radius:9999px;height:4px}:host(.progress-bar-solid){--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}",
    L9 = I9,
    E9 = ":host{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.3);--progress-background:var(--ion-color-primary, #0054e9);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.buffer-circles-container,.buffer-circles{left:0;right:0;top:0;bottom:0;position:absolute}.buffer-circles{right:-10px;left:-10px;}.progress,.progress-buffer-bar,.buffer-circles-container{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms linear;transition:-webkit-transform 150ms linear;transition:transform 150ms linear;transition:transform 150ms linear, -webkit-transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:var(--background);z-index:1}.buffer-circles-container{overflow:hidden}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s infinite linear;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{-webkit-animation:primary-indeterminate-scale 2s infinite linear;animation:primary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s infinite linear;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{-webkit-animation:secondary-indeterminate-scale 2s infinite linear;animation:secondary-indeterminate-scale 2s infinite linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.buffer-circles{background-image:radial-gradient(ellipse at center, var(--background) 0%, var(--background) 30%, transparent 30%);background-repeat:repeat-x;background-position:5px center;background-size:10px 10px;z-index:0;-webkit-animation:buffering 450ms infinite linear;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed){-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{-webkit-animation-play-state:paused;animation-play-state:paused}:host(.ion-color) .buffer-circles{background-image:radial-gradient(ellipse at center, rgba(var(--ion-color-base-rgb), 0.3) 0%, rgba(var(--ion-color-base-rgb), 0.3) 30%, transparent 30%)}:host(.ion-color) .progress,:host(.ion-color) .progress-indeterminate{background:var(--ion-color-base)}@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}100%{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);-webkit-transform:scaleX(0.661479);transform:scaleX(0.661479)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}100%{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);-webkit-transform:scaleX(0.457104);transform:scaleX(0.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);-webkit-transform:scaleX(0.72796);transform:scaleX(0.72796)}100%{-webkit-transform:scaleX(0.08);transform:scaleX(0.08)}}@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}:host{height:4px}:host(.ion-color) .progress-buffer-bar{background:rgba(var(--ion-color-base-rgb), 0.3)}",
    B9 = E9,
    D9 = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.type = "determinate", this.reversed = !1, this.value = 0, this.buffer = 1, this.color = void 0
        }
        render() {
            let {
                color: t,
                type: e,
                reversed: n,
                value: i,
                buffer: s
            } = this, a = Y.getBoolean("_testing"), r = b(this), l = s === 1;
            return u(S, {
                key: "d60eeaa18aaee607e083c0ef9d0de8178d47c4cd",
                role: "progressbar",
                "aria-valuenow": e === "determinate" ? i : null,
                "aria-valuemin": "0",
                "aria-valuemax": "1",
                class: Z(t, {
                    [r]: !0,
                    [`progress-bar-${e}`]: !0,
                    "progress-paused": a,
                    "progress-bar-reversed": document.dir === "rtl" ? !n : n,
                    "progress-bar-solid": l
                })
            }, e === "indeterminate" ? j9() : $9(i, s))
        }
        static get style() {
            return {
                ios: L9,
                md: B9
            }
        }
    }, [33, "ion-progress-bar", {
        type: [1],
        reversed: [4],
        value: [2],
        buffer: [2],
        color: [513]
    }]),
    j9 = () => u("div", {
        part: "track",
        class: "progress-buffer-bar"
    }, u("div", {
        class: "indeterminate-bar-primary"
    }, u("span", {
        part: "progress",
        class: "progress-indeterminate"
    })), u("div", {
        class: "indeterminate-bar-secondary"
    }, u("span", {
        part: "progress",
        class: "progress-indeterminate"
    }))),
    $9 = (o, t) => {
        let e = _t(0, o, 1),
            n = _t(0, t, 1);
        return [u("div", {
            part: "progress",
            class: "progress",
            style: {
                transform: `scaleX(${e})`
            }
        }), u("div", {
            class: {
                "buffer-circles-container": !0, "ion-hide": n === 1
            },
            style: {
                transform: `translateX(${n*100}%)`
            }
        }, u("div", {
            class: "buffer-circles-container",
            style: {
                transform: `translateX(-${n*100}%)`
            }
        }, u("div", {
            part: "stream",
            class: "buffer-circles"
        }))), u("div", {
            part: "track",
            class: "progress-buffer-bar",
            style: {
                transform: `scaleX(${n})`
            }
        })]
    };

function H9() {
    if (typeof customElements > "u") return;
    ["ion-progress-bar"].forEach(t => {
        switch (t) {
            case "ion-progress-bar":
                customElements.get(t) || customElements.define(t, D9);
                break
        }
    })
}
var Hc = H9;
var T9 = ":host{--checkbox-background-checked:var(--ion-color-primary, #0054e9);--border-color-checked:var(--ion-color-primary, #0054e9);--checkmark-color:var(--ion-color-primary-contrast, #fff);--transition:none;display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}:host(.ion-color){--checkbox-background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}.checkbox-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper,:host(.in-item:not(.checkbox-label-placement-stacked):not([slot])) .native-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.checkbox-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.checkbox-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.checkbox-icon{border-radius:var(--border-radius);position:relative;width:var(--size);height:var(--size);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--checkbox-background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}.checkbox-bottom{padding-top:4px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;font-size:0.75rem;white-space:normal}:host(.checkbox-label-placement-stacked) .checkbox-bottom{font-size:1rem}.checkbox-bottom .error-text{display:none;color:var(--ion-color-danger, #c5000f)}.checkbox-bottom .helper-text{display:block;color:var(--ion-color-step-700, var(--ion-text-color-step-300, #4d4d4d))}:host(.ion-touched.ion-invalid) .checkbox-bottom .error-text{display:block}:host(.ion-touched.ion-invalid) .checkbox-bottom .helper-text{display:none}:host(.checkbox-label-placement-start) .checkbox-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.checkbox-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-end) .checkbox-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-pack:start;justify-content:start}:host(.checkbox-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.checkbox-label-placement-stacked) .checkbox-wrapper{-ms-flex-direction:column;flex-direction:column;text-align:center}:host(.checkbox-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host(.checkbox-justify-space-between) .checkbox-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.checkbox-justify-start) .checkbox-wrapper{-ms-flex-pack:start;justify-content:start}:host(.checkbox-justify-end) .checkbox-wrapper{-ms-flex-pack:end;justify-content:end}:host(.checkbox-alignment-start) .checkbox-wrapper{-ms-flex-align:start;align-items:start}:host(.checkbox-alignment-center) .checkbox-wrapper{-ms-flex-align:center;align-items:center}:host(.checkbox-justify-space-between),:host(.checkbox-justify-start),:host(.checkbox-justify-end),:host(.checkbox-alignment-start),:host(.checkbox-alignment-center){display:block}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--checkbox-background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:0.125rem;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.23);--checkbox-background:var(--ion-item-background, var(--ion-background-color, #fff));--size:min(1.375rem, 55.836px);--checkmark-width:1.5px}:host(.checkbox-disabled){opacity:0.3}",
    _9 = T9,
    V9 = ":host{--checkbox-background-checked:var(--ion-color-primary, #0054e9);--border-color-checked:var(--ion-color-primary, #0054e9);--checkmark-color:var(--ion-color-primary-contrast, #fff);--transition:none;display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}:host(.ion-color){--checkbox-background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}.checkbox-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper,:host(.in-item:not(.checkbox-label-placement-stacked):not([slot])) .native-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.checkbox-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.checkbox-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.checkbox-icon{border-radius:var(--border-radius);position:relative;width:var(--size);height:var(--size);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--checkbox-background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}.checkbox-bottom{padding-top:4px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;font-size:0.75rem;white-space:normal}:host(.checkbox-label-placement-stacked) .checkbox-bottom{font-size:1rem}.checkbox-bottom .error-text{display:none;color:var(--ion-color-danger, #c5000f)}.checkbox-bottom .helper-text{display:block;color:var(--ion-color-step-700, var(--ion-text-color-step-300, #4d4d4d))}:host(.ion-touched.ion-invalid) .checkbox-bottom .error-text{display:block}:host(.ion-touched.ion-invalid) .checkbox-bottom .helper-text{display:none}:host(.checkbox-label-placement-start) .checkbox-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.checkbox-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-end) .checkbox-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-pack:start;justify-content:start}:host(.checkbox-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.checkbox-label-placement-stacked) .checkbox-wrapper{-ms-flex-direction:column;flex-direction:column;text-align:center}:host(.checkbox-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host(.checkbox-justify-space-between) .checkbox-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.checkbox-justify-start) .checkbox-wrapper{-ms-flex-pack:start;justify-content:start}:host(.checkbox-justify-end) .checkbox-wrapper{-ms-flex-pack:end;justify-content:end}:host(.checkbox-alignment-start) .checkbox-wrapper{-ms-flex-align:start;align-items:start}:host(.checkbox-alignment-center) .checkbox-wrapper{-ms-flex-align:center;align-items:center}:host(.checkbox-justify-space-between),:host(.checkbox-justify-start),:host(.checkbox-justify-end),:host(.checkbox-alignment-start),:host(.checkbox-alignment-center){display:block}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--checkbox-background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgb(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--checkmark-width:3;--checkbox-background:var(--ion-item-background, var(--ion-background-color, #fff));--transition:background 180ms cubic-bezier(0.4, 0, 0.2, 1);--size:18px}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled) .label-text-wrapper{opacity:0.38}:host(.checkbox-disabled) .native-wrapper{opacity:0.63}",
    O9 = V9,
    Tc = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionChange = L(this, "ionChange", 7), this.ionFocus = L(this, "ionFocus", 7), this.ionBlur = L(this, "ionBlur", 7), this.inputId = `ion-cb-${R9++}`, this.helperTextId = `${this.inputId}-helper-text`, this.errorTextId = `${this.inputId}-error-text`, this.inheritedAttributes = {}, this.setChecked = t => {
                let e = this.checked = t;
                this.ionChange.emit({
                    checked: e,
                    value: this.value
                })
            }, this.toggleChecked = t => {
                t.preventDefault(), this.setFocus(), this.setChecked(!this.checked), this.indeterminate = !1
            }, this.onFocus = () => {
                this.ionFocus.emit()
            }, this.onBlur = () => {
                this.ionBlur.emit()
            }, this.onClick = t => {
                this.disabled || this.toggleChecked(t)
            }, this.color = void 0, this.name = this.inputId, this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.errorText = void 0, this.helperText = void 0, this.value = "on", this.labelPlacement = "start", this.justify = void 0, this.alignment = void 0, this.required = !1
        }
        componentWillLoad() {
            this.inheritedAttributes = Object.assign({}, zt(this.el))
        }
        setFocus() {
            return w(this, null, function*() {
                this.focusEl && this.focusEl.focus()
            })
        }
        getHintTextID() {
            let {
                el: t,
                helperText: e,
                errorText: n,
                helperTextId: i,
                errorTextId: s
            } = this;
            if (t.classList.contains("ion-touched") && t.classList.contains("ion-invalid") && n) return s;
            if (e) return i
        }
        renderHintText() {
            let {
                helperText: t,
                errorText: e,
                helperTextId: n,
                errorTextId: i
            } = this;
            if (t || e) return u("div", {
                class: "checkbox-bottom"
            }, u("div", {
                id: n,
                class: "helper-text",
                part: "supporting-text helper-text"
            }, t), u("div", {
                id: i,
                class: "error-text",
                part: "supporting-text error-text"
            }, e))
        }
        render() {
            let {
                color: t,
                checked: e,
                disabled: n,
                el: i,
                getSVGPath: s,
                indeterminate: a,
                inheritedAttributes: r,
                inputId: l,
                justify: c,
                labelPlacement: d,
                name: p,
                value: g,
                alignment: m,
                required: f
            } = this, x = b(this), k = s(x, a);
            return c2(!0, i, p, e ? g : "", n), u(S, {
                key: "7ac31df89b07c781ddcd30a6a8c109494d0c500a",
                "aria-checked": a ? "mixed" : `${e}`,
                "aria-describedby": this.getHintTextID(),
                "aria-invalid": this.getHintTextID() === this.errorTextId,
                class: Z(t, {
                    [x]: !0,
                    "in-item": it("ion-item", i),
                    "checkbox-checked": e,
                    "checkbox-disabled": n,
                    "checkbox-indeterminate": a,
                    interactive: !0,
                    [`checkbox-justify-${c}`]: c !== void 0,
                    [`checkbox-alignment-${m}`]: m !== void 0,
                    [`checkbox-label-placement-${d}`]: !0
                }),
                onClick: this.onClick
            }, u("label", {
                key: "674e923fe1ec83a33c31d67b0d414d61ba8f9e4b",
                class: "checkbox-wrapper"
            }, u("input", Object.assign({
                key: "c4866e392fbdf3b76edcd1507cb67f40a213a4e7",
                type: "checkbox",
                checked: e ? !0 : void 0,
                disabled: n,
                id: l,
                onChange: this.toggleChecked,
                onFocus: () => this.onFocus(),
                onBlur: () => this.onBlur(),
                ref: B => this.focusEl = B,
                required: f
            }, r)), u("div", {
                key: "79cb96e5963b9331a760438ec8cc9e456215de91",
                class: {
                    "label-text-wrapper": !0, "label-text-wrapper-hidden": i.textContent === ""
                },
                part: "label"
            }, u("slot", {
                key: "896cb26292c9a4a6c105afb39611472b93bf5e90"
            }), this.renderHintText()), u("div", {
                key: "52cd22e79fd5db30b45d7b092aa5af3944392336",
                class: "native-wrapper"
            }, u("svg", {
                key: "18d862ab7cc32055eaf200eea560ff1b2b6cbde0",
                class: "checkbox-icon",
                viewBox: "0 0 24 24",
                part: "container"
            }, k))))
        }
        getSVGPath(t, e) {
            let n = e ? u("path", {
                d: "M6 12L18 12",
                part: "mark"
            }) : u("path", {
                d: "M5.9,12.5l3.8,3.8l8.8-8.8",
                part: "mark"
            });
            return t === "md" && (n = e ? u("path", {
                d: "M2 12H22",
                part: "mark"
            }) : u("path", {
                d: "M1.73,12.91 8.1,19.28 22.79,4.59",
                part: "mark"
            })), n
        }
        get el() {
            return this
        }
        static get style() {
            return {
                ios: _9,
                md: O9
            }
        }
    }, [33, "ion-checkbox", {
        color: [513],
        name: [1],
        checked: [1028],
        indeterminate: [1028],
        disabled: [4],
        errorText: [1, "error-text"],
        helperText: [1, "helper-text"],
        value: [8],
        labelPlacement: [1, "label-placement"],
        justify: [1],
        alignment: [1],
        required: [4],
        setFocus: [64]
    }]),
    R9 = 0;

function _c() {
    if (typeof customElements > "u") return;
    ["ion-checkbox"].forEach(t => {
        switch (t) {
            case "ion-checkbox":
                customElements.get(t) || customElements.define(t, Tc);
                break
        }
    })
}
var P9 = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:min(1.0625rem, 20.4px);font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host{inset-inline-start:0}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:min(0.8125rem, 23.4px);font-weight:normal}:host(.title-large){-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:2px;padding-bottom:4px;-webkit-transform-origin:left center;transform-origin:left center;position:static;-ms-flex-align:end;align-items:flex-end;min-width:100%;font-size:min(2.125rem, 61.2px);font-weight:700;text-align:start}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000);font-family:var(--ion-font-family)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit;width:auto}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}@supports selector(:dir(rtl)){:host(.title-large:dir(rtl)) .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}}",
    F9 = P9,
    N9 = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:1.25rem;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:0.9375rem;font-weight:normal}",
    U9 = N9,
    Vc = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionStyle = L(this, "ionStyle", 7), this.color = void 0, this.size = void 0
        }
        sizeChanged() {
            this.emitStyle()
        }
        connectedCallback() {
            this.emitStyle()
        }
        emitStyle() {
            let t = this.getSize();
            this.ionStyle.emit({
                [`title-${t}`]: !0
            })
        }
        getSize() {
            return this.size !== void 0 ? this.size : "default"
        }
        render() {
            let t = b(this),
                e = this.getSize();
            return u(S, {
                key: "3f7b19c99961dbb86c0a925218332528b22e6880",
                class: Z(this.color, {
                    [t]: !0,
                    [`title-${e}`]: !0,
                    "title-rtl": document.dir === "rtl"
                })
            }, u("div", {
                key: "12054fbdd60e40a15875e442c20143766fc34fc3",
                class: "toolbar-title"
            }, u("slot", {
                key: "9f14fb14a67d4bd1e4536a4d64a637fbe5a151c7"
            })))
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                size: ["sizeChanged"]
            }
        }
        static get style() {
            return {
                ios: F9,
                md: U9
            }
        }
    }, [33, "ion-title", {
        color: [513],
        size: [1]
    }, void 0, {
        size: ["sizeChanged"]
    }]);

function Oc() {
    if (typeof customElements > "u") return;
    ["ion-title"].forEach(t => {
        switch (t) {
            case "ion-title":
                customElements.get(t) || customElements.define(t, Vc);
                break
        }
    })
}
var q9 = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, var(--ion-background-color-step-50, #f7f7f7)));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.2)))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}",
    W9 = q9,
    G9 = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, #c1c4cd))));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}",
    X9 = G9,
    Rc = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.childrenStyles = new Map, this.color = void 0
        }
        componentWillLoad() {
            let t = Array.from(this.el.querySelectorAll("ion-buttons")),
                e = t.find(s => s.slot === "start");
            e && e.classList.add("buttons-first-slot");
            let n = t.reverse(),
                i = n.find(s => s.slot === "end") || n.find(s => s.slot === "primary") || n.find(s => s.slot === "secondary");
            i && i.classList.add("buttons-last-slot")
        }
        childrenStyle(t) {
            t.stopPropagation();
            let e = t.target.tagName,
                n = t.detail,
                i = {},
                s = this.childrenStyles.get(e) || {},
                a = !1;
            Object.keys(n).forEach(r => {
                let l = `toolbar-${r}`,
                    c = n[r];
                c !== s[l] && (a = !0), c && (i[l] = !0)
            }), a && (this.childrenStyles.set(e, i), se(this))
        }
        render() {
            let t = b(this),
                e = {};
            return this.childrenStyles.forEach(n => {
                Object.assign(e, n)
            }), u(S, {
                key: "402afe7ce0c97883cedd0e48a5a0492a9bfe76ae",
                class: Object.assign(Object.assign({}, e), Z(this.color, {
                    [t]: !0,
                    "in-toolbar": it("ion-toolbar", this.el)
                }))
            }, u("div", {
                key: "2465a6dc8d507ec650538378d1be2abd399c58ad",
                class: "toolbar-background",
                part: "background"
            }), u("div", {
                key: "6075096afd12303b961e4fe9ad345ef2887573af",
                class: "toolbar-container",
                part: "container"
            }, u("slot", {
                key: "8b7eec1148cfeb339d87cdf9273f2104703e7601",
                name: "start"
            }), u("slot", {
                key: "b102d3926cade24faf78b7af78ad5e192c4c0308",
                name: "secondary"
            }), u("div", {
                key: "c6ab2e978328324c6f9e7892024cbcd8b8987067",
                class: "toolbar-content",
                part: "content"
            }, u("slot", {
                key: "86f8952c4355a9df5b4bbb95e9d0cafefd272d5b"
            })), u("slot", {
                key: "501e43431da6b9dd35b47b79222f948d445f7a78",
                name: "primary"
            }), u("slot", {
                key: "84bf1a15a5e52e8e94df9f479c4ce18004f5ab57",
                name: "end"
            })))
        }
        get el() {
            return this
        }
        static get style() {
            return {
                ios: W9,
                md: X9
            }
        }
    }, [33, "ion-toolbar", {
            color: [513]
        },
        [
            [0, "ionStyle", "childrenStyle"]
        ]
    ]);

function Pc() {
    if (typeof customElements > "u") return;
    ["ion-toolbar"].forEach(t => {
        switch (t) {
            case "ion-toolbar":
                customElements.get(t) || customElements.define(t, Rc);
                break
        }
    })
}
var Fc = gc;
var Y9 = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--side-min-width:270px;--side-max-width:28%}",
    Z9 = Y9,
    K9 = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--side-min-width:270px;--side-max-width:28%}",
    Q9 = K9,
    Nc = "split-pane-main",
    Uc = "split-pane-side",
    qc = {
        xs: "(min-width: 0px)",
        sm: "(min-width: 576px)",
        md: "(min-width: 768px)",
        lg: "(min-width: 992px)",
        xl: "(min-width: 1200px)",
        never: ""
    },
    J9 = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionSplitPaneVisible = L(this, "ionSplitPaneVisible", 7), this.visible = !1, this.contentId = void 0, this.disabled = !1, this.when = qc.lg
        }
        visibleChanged(t) {
            this.ionSplitPaneVisible.emit({
                visible: t
            })
        }
        isVisible() {
            return w(this, null, function*() {
                return Promise.resolve(this.visible)
            })
        }
        connectedCallback() {
            return w(this, null, function*() {
                typeof customElements < "u" && customElements != null && (yield customElements.whenDefined("ion-split-pane")), this.styleMainElement(), this.updateState()
            })
        }
        disconnectedCallback() {
            this.rmL && (this.rmL(), this.rmL = void 0)
        }
        updateState() {
            if (!mt.isBrowser) return;
            if (this.rmL && (this.rmL(), this.rmL = void 0), this.disabled) {
                this.visible = !1;
                return
            }
            let t = this.when;
            if (typeof t == "boolean") {
                this.visible = t;
                return
            }
            let e = qc[t] || t;
            if (e.length === 0) {
                this.visible = !1;
                return
            }
            let n = s => {
                    this.visible = s.matches
                },
                i = window.matchMedia(e);
            i.addListener(n), this.rmL = () => i.removeListener(n), this.visible = i.matches
        }
        styleMainElement() {
            if (!mt.isBrowser) return;
            let t = this.contentId,
                e = this.el.children,
                n = this.el.childElementCount,
                i = !1;
            for (let s = 0; s < n; s++) {
                let a = e[s],
                    r = t !== void 0 && a.id === t;
                if (r)
                    if (i) {
                        console.warn("split pane cannot have more than one main node");
                        return
                    } else tg(a, r), i = !0
            }
            i || console.warn("split pane does not have a specified main node")
        }
        render() {
            let t = b(this);
            return u(S, {
                key: "76be70d7fbebc52646a5851f47accc1006615b85",
                class: {
                    [t]: !0,
                    [`split-pane-${t}`]: !0,
                    "split-pane-visible": this.visible
                }
            }, u("slot", {
                key: "9a859530f4fb18aff43255bc3940feb9aca625d7"
            }))
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                visible: ["visibleChanged"],
                disabled: ["updateState"],
                when: ["updateState"]
            }
        }
        static get style() {
            return {
                ios: Z9,
                md: Q9
            }
        }
    }, [33, "ion-split-pane", {
        contentId: [513, "content-id"],
        disabled: [4],
        when: [8],
        visible: [32],
        isVisible: [64]
    }, void 0, {
        visible: ["visibleChanged"],
        disabled: ["updateState"],
        when: ["updateState"]
    }]),
    tg = (o, t) => {
        let e, n;
        t ? (e = Nc, n = Uc) : (e = Uc, n = Nc);
        let i = o.classList;
        i.add(e), i.remove(n)
    };

function eg() {
    if (typeof customElements > "u") return;
    ["ion-split-pane"].forEach(t => {
        switch (t) {
            case "ion-split-pane":
                customElements.get(t) || customElements.define(t, J9);
                break
        }
    })
}
var Wc = eg;
var og = ":host(.tab-hidden){display:none !important}",
    ng = og,
    ig = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.loaded = !1, this.active = !1, this.delegate = void 0, this.tab = void 0, this.component = void 0
        }
        componentWillLoad() {
            return w(this, null, function*() {
                mt.isDev && this.component !== void 0 && this.el.childElementCount > 0 && console.error(`You can not use a lazy-loaded component in a tab and inlined content at the same time.- Remove the component attribute in: <ion-tab component="${this.component}"> or- Remove the embedded content inside the ion-tab: <ion-tab></ion-tab>`), this.active && (yield this.setActive())
            })
        }
        setActive() {
            return w(this, null, function*() {
                yield this.prepareLazyLoaded(), this.active = !0
            })
        }
        changeActive(t) {
            t && this.prepareLazyLoaded()
        }
        prepareLazyLoaded() {
            if (!this.loaded && this.component != null) {
                this.loaded = !0;
                try {
                    return de(this.delegate, this.el, this.component, ["ion-page"])
                } catch (t) {
                    console.error(t)
                }
            }
            return Promise.resolve(void 0)
        }
        render() {
            let {
                tab: t,
                active: e,
                component: n
            } = this;
            return u(S, {
                key: "2107ece2f1ebdf748bac8adb78a9ad67e7fc9057",
                role: "tabpanel",
                "aria-hidden": e ? null : "true",
                "aria-labelledby": `tab-button-${t}`,
                class: {
                    "ion-page": n === void 0, "tab-hidden": !e
                }
            }, u("slot", {
                key: "b4a1bc1aa79f6b82b8f77b544bcb74e65229b541"
            }))
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                active: ["changeActive"]
            }
        }
        static get style() {
            return ng
        }
    }, [1, "ion-tab", {
        active: [1028],
        delegate: [16],
        tab: [1],
        component: [1],
        setActive: [64]
    }, void 0, {
        active: ["changeActive"]
    }]);

function sg() {
    if (typeof customElements > "u") return;
    ["ion-tab"].forEach(t => {
        switch (t) {
            case "ion-tab":
                customElements.get(t) || customElements.define(t, ig);
                break
        }
    })
}
var Gc = sg;
var ag = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, var(--ion-background-color-step-50, #f7f7f7)));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.2)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, var(--ion-text-color-step-400, #666666)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}",
    rg = ag,
    lg = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.07)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, var(--ion-text-color-step-350, #595959)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:56px}",
    cg = lg,
    dg = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionTabBarChanged = L(this, "ionTabBarChanged", 7), this.ionTabBarLoaded = L(this, "ionTabBarLoaded", 7), this.keyboardCtrl = null, this.keyboardVisible = !1, this.color = void 0, this.selectedTab = void 0, this.translucent = !1
        }
        selectedTabChanged() {
            this.selectedTab !== void 0 && this.ionTabBarChanged.emit({
                tab: this.selectedTab
            })
        }
        componentWillLoad() {
            this.selectedTabChanged()
        }
        connectedCallback() {
            return w(this, null, function*() {
                this.keyboardCtrl = yield m1((t, e) => w(this, null, function*() {
                    t === !1 && e !== void 0 && (yield e), this.keyboardVisible = t
                }))
            })
        }
        disconnectedCallback() {
            this.keyboardCtrl && this.keyboardCtrl.destroy()
        }
        componentDidLoad() {
            this.ionTabBarLoaded.emit()
        }
        render() {
            let {
                color: t,
                translucent: e,
                keyboardVisible: n
            } = this, i = b(this), s = n && this.el.getAttribute("slot") !== "top";
            return u(S, {
                key: "62303a7f9d8c98ffab51a5900c144c5117b9c543",
                role: "tablist",
                "aria-hidden": s ? "true" : null,
                class: Z(t, {
                    [i]: !0,
                    "tab-bar-translucent": e,
                    "tab-bar-hidden": s
                })
            }, u("slot", {
                key: "5771a9828f748c2bd6b5e26758b9723c6b3de5ff"
            }))
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                selectedTab: ["selectedTabChanged"]
            }
        }
        static get style() {
            return {
                ios: rg,
                md: cg
            }
        }
    }, [33, "ion-tab-bar", {
        color: [513],
        selectedTab: [1, "selected-tab"],
        translucent: [4],
        keyboardVisible: [32]
    }, void 0, {
        selectedTab: ["selectedTabChanged"]
    }]);

function hg() {
    if (typeof customElements > "u") return;
    ["ion-tab-bar"].forEach(t => {
        switch (t) {
            case "ion-tab-bar":
                customElements.get(t) || customElements.define(t, dg);
                break
        }
    })
}
var Xc = hg;
var pg = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:24px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){font-size:30px}',
    ug = pg,
    gg = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}',
    mg = gg,
    vg = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionTabButtonClick = L(this, "ionTabButtonClick", 7), this.inheritedAttributes = {}, this.onKeyUp = t => {
                (t.key === "Enter" || t.key === " ") && this.selectTab(t)
            }, this.onClick = t => {
                this.selectTab(t)
            }, this.disabled = !1, this.download = void 0, this.href = void 0, this.rel = void 0, this.layout = void 0, this.selected = !1, this.tab = void 0, this.target = void 0
        }
        onTabBarChanged(t) {
            let e = t.target,
                n = this.el.parentElement;
            (t.composedPath().includes(n) || e ? .contains(this.el)) && (this.selected = this.tab === t.detail.tab)
        }
        componentWillLoad() {
            this.inheritedAttributes = Object.assign({}, ae(this.el, ["aria-label"])), this.layout === void 0 && (this.layout = Y.get("tabButtonLayout", "icon-top"))
        }
        selectTab(t) {
            this.tab !== void 0 && (this.disabled || this.ionTabButtonClick.emit({
                tab: this.tab,
                href: this.href,
                selected: this.selected
            }), t.preventDefault())
        }
        get hasLabel() {
            return !!this.el.querySelector("ion-label")
        }
        get hasIcon() {
            return !!this.el.querySelector("ion-icon")
        }
        render() {
            let {
                disabled: t,
                hasIcon: e,
                hasLabel: n,
                href: i,
                rel: s,
                target: a,
                layout: r,
                selected: l,
                tab: c,
                inheritedAttributes: d
            } = this, p = b(this), g = {
                download: this.download,
                href: i,
                rel: s,
                target: a
            };
            return u(S, {
                key: "a86d441d8df350fe991f2f948fc6b6ad007728f7",
                onClick: this.onClick,
                onKeyup: this.onKeyUp,
                id: c !== void 0 ? `tab-button-${c}` : null,
                class: {
                    [p]: !0,
                    "tab-selected": l,
                    "tab-disabled": t,
                    "tab-has-label": n,
                    "tab-has-icon": e,
                    "tab-has-label-only": n && !e,
                    "tab-has-icon-only": e && !n,
                    [`tab-layout-${r}`]: !0,
                    "ion-activatable": !0,
                    "ion-selectable": !0,
                    "ion-focusable": !0
                }
            }, u("a", Object.assign({
                key: "8dfe1ccff2cf21601c5aea7f7f877c0fbe384e09"
            }, g, {
                class: "button-native",
                part: "native",
                role: "tab",
                "aria-selected": l ? "true" : null,
                "aria-disabled": t ? "true" : null,
                tabindex: t ? "-1" : void 0
            }, d), u("span", {
                key: "3f557cf6e96e22b9318b4aee19ede810eb7fb720",
                class: "button-inner"
            }, u("slot", {
                key: "836dd090dbe3c2ea97dc263fca7d01dea6ea0eb6"
            })), p === "md" && u("ion-ripple-effect", {
                key: "488a924fd04602c1b23e03d1a4c84dfa0f2ca03d",
                type: "unbounded"
            })))
        }
        get el() {
            return this
        }
        static get style() {
            return {
                ios: ug,
                md: mg
            }
        }
    }, [33, "ion-tab-button", {
            disabled: [4],
            download: [1],
            href: [1],
            rel: [1],
            layout: [1025],
            selected: [1028],
            tab: [1],
            target: [1]
        },
        [
            [8, "ionTabBarChanged", "onTabBarChanged"]
        ]
    ]);

function fg() {
    if (typeof customElements > "u") return;
    ["ion-tab-button", "ion-ripple-effect"].forEach(t => {
        switch (t) {
            case "ion-tab-button":
                customElements.get(t) || customElements.define(t, vg);
                break;
            case "ion-ripple-effect":
                customElements.get(t) || Ot();
                break
        }
    })
}
var Yc = fg;
var Zc = Oc;
var Kc = Pc;
var t3 = 1,
    e3 = 2,
    f1 = 3,
    Yn = class {
        constructor(t, e) {
            this.component = t, this.params = e, this.state = t3
        }
        init(t) {
            return w(this, null, function*() {
                if (this.state = e3, !this.element) {
                    let e = this.component;
                    this.element = yield de(this.delegate, t, e, ["ion-page", "ion-page-invisible"], this.params)
                }
            })
        }
        _destroy() {
            xt(this.state !== f1, "view state must be ATTACHED");
            let t = this.element;
            t && (this.delegate ? this.delegate.removeViewFromDom(t.parentElement, t) : t.remove()), this.nav = void 0, this.state = f1
        }
    },
    Qc = (o, t, e) => !o || o.component !== t ? !1 : Mi(o.params, e),
    Jc = (o, t) => o ? o instanceof Yn ? o : new Yn(o, t) : null,
    wg = o => o.map(t => t instanceof Yn ? t : "component" in t ? Jc(t.component, t.componentProps === null ? void 0 : t.componentProps) : Jc(t, void 0)).filter(t => t !== null),
    xg = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}",
    bg = xg,
    kg = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionNavWillLoad = L(this, "ionNavWillLoad", 7), this.ionNavWillChange = L(this, "ionNavWillChange", 3), this.ionNavDidChange = L(this, "ionNavDidChange", 3), this.transInstr = [], this.gestureOrAnimationInProgress = !1, this.useRouter = !1, this.isTransitioning = !1, this.destroyed = !1, this.views = [], this.didLoad = !1, this.delegate = void 0, this.swipeGesture = void 0, this.animated = !0, this.animation = void 0, this.rootParams = void 0, this.root = void 0
        }
        swipeGestureChanged() {
            this.gesture && this.gesture.enable(this.swipeGesture === !0)
        }
        rootChanged() {
            let t = mt.isDev;
            this.root !== void 0 && this.didLoad !== !1 && (this.useRouter ? t && vt("<ion-nav> does not support a root attribute when using ion-router.", this.el) : this.root !== void 0 && this.setRoot(this.root, this.rootParams))
        }
        componentWillLoad() {
            if (this.useRouter = document.querySelector("ion-router") !== null && this.el.closest("[no-router]") === null, this.swipeGesture === void 0) {
                let t = b(this);
                this.swipeGesture = Y.getBoolean("swipeBackEnabled", t === "ios")
            }
            this.ionNavWillLoad.emit()
        }
        componentDidLoad() {
            return w(this, null, function*() {
                this.didLoad = !0, this.rootChanged(), this.gesture = (yield
                    import ("./swipe-back-GAKVXKU2.js")).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this)), this.swipeGestureChanged()
            })
        }
        connectedCallback() {
            this.destroyed = !1
        }
        disconnectedCallback() {
            for (let t of this.views) Io(t.element, Ge), t._destroy();
            this.gesture && (this.gesture.destroy(), this.gesture = void 0), this.transInstr.length = 0, this.views.length = 0, this.destroyed = !0
        }
        push(t, e, n, i) {
            return this.insert(-1, t, e, n, i)
        }
        insert(t, e, n, i, s) {
            return this.insertPages(t, [{
                component: e,
                componentProps: n
            }], i, s)
        }
        insertPages(t, e, n, i) {
            return this.queueTrns({
                insertStart: t,
                insertViews: e,
                opts: n
            }, i)
        }
        pop(t, e) {
            return this.removeIndex(-1, 1, t, e)
        }
        popTo(t, e, n) {
            let i = {
                removeStart: -1,
                removeCount: -1,
                opts: e
            };
            return typeof t == "object" && t.component ? (i.removeView = t, i.removeStart = 1) : typeof t == "number" && (i.removeStart = t + 1), this.queueTrns(i, n)
        }
        popToRoot(t, e) {
            return this.removeIndex(1, -1, t, e)
        }
        removeIndex(t, e = 1, n, i) {
            return this.queueTrns({
                removeStart: t,
                removeCount: e,
                opts: n
            }, i)
        }
        setRoot(t, e, n, i) {
            return this.setPages([{
                component: t,
                componentProps: e
            }], n, i)
        }
        setPages(t, e, n) {
            return e ? ? (e = {}), e.animated !== !0 && (e.animated = !1), this.queueTrns({
                insertStart: 0,
                insertViews: t,
                removeStart: 0,
                removeCount: -1,
                opts: e
            }, n)
        }
        setRouteId(t, e, n, i) {
            let s = this.getActiveSync();
            if (Qc(s, t, e)) return Promise.resolve({
                changed: !1,
                element: s.element
            });
            let a, r = new Promise(d => a = d),
                l, c = {
                    updateURL: !1,
                    viewIsReady: d => {
                        let p, g = new Promise(m => p = m);
                        return a({
                            changed: !0,
                            element: d,
                            markVisible: () => w(this, null, function*() {
                                p(), yield l
                            })
                        }), g
                    }
                };
            if (n === "root") l = this.setRoot(t, e, c);
            else {
                let d = this.views.find(p => Qc(p, t, e));
                d ? l = this.popTo(d, Object.assign(Object.assign({}, c), {
                    direction: "back",
                    animationBuilder: i
                })) : n === "forward" ? l = this.push(t, e, Object.assign(Object.assign({}, c), {
                    animationBuilder: i
                })) : n === "back" && (l = this.setRoot(t, e, Object.assign(Object.assign({}, c), {
                    direction: "back",
                    animated: !0,
                    animationBuilder: i
                })))
            }
            return r
        }
        getRouteId() {
            return w(this, null, function*() {
                let t = this.getActiveSync();
                if (t) return {
                    id: t.element.tagName,
                    params: t.params,
                    element: t.element
                }
            })
        }
        getActive() {
            return w(this, null, function*() {
                return this.getActiveSync()
            })
        }
        getByIndex(t) {
            return w(this, null, function*() {
                return this.views[t]
            })
        }
        canGoBack(t) {
            return w(this, null, function*() {
                return this.canGoBackSync(t)
            })
        }
        getPrevious(t) {
            return w(this, null, function*() {
                return this.getPreviousSync(t)
            })
        }
        getLength() {
            return w(this, null, function*() {
                return Promise.resolve(this.views.length)
            })
        }
        getActiveSync() {
            return this.views[this.views.length - 1]
        }
        canGoBackSync(t = this.getActiveSync()) {
            return !!(t && this.getPreviousSync(t))
        }
        getPreviousSync(t = this.getActiveSync()) {
            if (!t) return;
            let e = this.views,
                n = e.indexOf(t);
            return n > 0 ? e[n - 1] : void 0
        }
        queueTrns(t, e) {
            return w(this, null, function*() {
                var n, i;
                if (this.isTransitioning && (!((n = t.opts) === null || n === void 0) && n.skipIfBusy)) return !1;
                let s = new Promise((a, r) => {
                    t.resolve = a, t.reject = r
                });
                if (t.done = e, t.opts && t.opts.updateURL !== !1 && this.useRouter) {
                    let a = document.querySelector("ion-router");
                    if (a) {
                        let r = yield a.canTransition();
                        if (r === !1) return !1;
                        if (typeof r == "string") return a.push(r, t.opts.direction || "back"), !1
                    }
                }
                return ((i = t.insertViews) === null || i === void 0 ? void 0 : i.length) === 0 && (t.insertViews = void 0), this.transInstr.push(t), this.nextTrns(), s
            })
        }
        success(t, e) {
            if (this.destroyed) {
                this.fireError("nav controller was destroyed", e);
                return
            }
            if (e.done && e.done(t.hasCompleted, t.requiresTransition, t.enteringView, t.leavingView, t.direction), e.resolve(t.hasCompleted), e.opts.updateURL !== !1 && this.useRouter) {
                let n = document.querySelector("ion-router");
                if (n) {
                    let i = t.direction === "back" ? "back" : "forward";
                    n.navChanged(i)
                }
            }
        }
        failed(t, e) {
            if (this.destroyed) {
                this.fireError("nav controller was destroyed", e);
                return
            }
            this.transInstr.length = 0, this.fireError(t, e)
        }
        fireError(t, e) {
            e.done && e.done(!1, !1, t), e.reject && !this.destroyed ? e.reject(t) : e.resolve(!1)
        }
        nextTrns() {
            if (this.isTransitioning) return !1;
            let t = this.transInstr.shift();
            return t ? (this.runTransition(t), !0) : !1
        }
        runTransition(t) {
            return w(this, null, function*() {
                try {
                    this.ionNavWillChange.emit(), this.isTransitioning = !0, this.prepareTI(t);
                    let e = this.getActiveSync(),
                        n = this.getEnteringView(t, e);
                    if (!e && !n) throw new Error("no views in the stack to be removed");
                    n && n.state === t3 && (yield n.init(this.el)), this.postViewInit(n, e, t);
                    let i = (t.enteringRequiresTransition || t.leavingRequiresTransition) && n !== e;
                    i && t.opts && e && (t.opts.direction === "back" && (t.opts.animationBuilder = t.opts.animationBuilder || n ? .animationBuilder), e.animationBuilder = t.opts.animationBuilder);
                    let s;
                    i ? s = yield this.transition(n, e, t): s = {
                        hasCompleted: !0,
                        requiresTransition: !1
                    }, this.success(s, t), this.ionNavDidChange.emit()
                } catch (e) {
                    this.failed(e, t)
                }
                this.isTransitioning = !1, this.nextTrns()
            })
        }
        prepareTI(t) {
            var e, n, i;
            let s = this.views.length;
            if ((e = t.opts) !== null && e !== void 0 || (t.opts = {}), (n = (i = t.opts).delegate) !== null && n !== void 0 || (i.delegate = this.delegate), t.removeView !== void 0) {
                xt(t.removeStart !== void 0, "removeView needs removeStart"), xt(t.removeCount !== void 0, "removeView needs removeCount");
                let l = this.views.indexOf(t.removeView);
                if (l < 0) throw new Error("removeView was not found");
                t.removeStart += l
            }
            t.removeStart !== void 0 && (t.removeStart < 0 && (t.removeStart = s - 1), t.removeCount < 0 && (t.removeCount = s - t.removeStart), t.leavingRequiresTransition = t.removeCount > 0 && t.removeStart + t.removeCount === s), t.insertViews && ((t.insertStart < 0 || t.insertStart > s) && (t.insertStart = s), t.enteringRequiresTransition = t.insertStart === s);
            let a = t.insertViews;
            if (!a) return;
            xt(a.length > 0, "length can not be zero");
            let r = wg(a);
            if (r.length === 0) throw new Error("invalid views to insert");
            for (let l of r) {
                l.delegate = t.opts.delegate;
                let c = l.nav;
                if (c && c !== this) throw new Error("inserted view was already inserted");
                if (l.state === f1) throw new Error("inserted view was already destroyed")
            }
            t.insertViews = r
        }
        getEnteringView(t, e) {
            let n = t.insertViews;
            if (n !== void 0) return n[n.length - 1];
            let i = t.removeStart;
            if (i !== void 0) {
                let s = this.views,
                    a = i + t.removeCount;
                for (let r = s.length - 1; r >= 0; r--) {
                    let l = s[r];
                    if ((r < i || r >= a) && l !== e) return l
                }
            }
        }
        postViewInit(t, e, n) {
            var i, s, a;
            xt(e || t, "Both leavingView and enteringView are null"), xt(n.resolve, "resolve must be valid"), xt(n.reject, "reject must be valid");
            let r = n.opts,
                {
                    insertViews: l,
                    removeStart: c,
                    removeCount: d
                } = n,
                p;
            if (c !== void 0 && d !== void 0) {
                xt(c >= 0, "removeStart can not be negative"), xt(d >= 0, "removeCount can not be negative"), p = [];
                for (let m = c; m < c + d; m++) {
                    let f = this.views[m];
                    f !== void 0 && f !== t && f !== e && p.push(f)
                }(i = r.direction) !== null && i !== void 0 || (r.direction = "back")
            }
            let g = this.views.length + ((s = l ? .length) !== null && s !== void 0 ? s : 0) - (d ? ? 0);
            if (xt(g >= 0, "final balance can not be negative"), g === 0) throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el), new Error("navigation stack needs at least one root page");
            if (l) {
                let m = n.insertStart;
                for (let f of l) this.insertViewAt(f, m), m++;
                n.enteringRequiresTransition && ((a = r.direction) !== null && a !== void 0 || (r.direction = "forward"))
            }
            if (p && p.length > 0) {
                for (let m of p) Io(m.element, vn), Io(m.element, fn), Io(m.element, Ge);
                for (let m of p) this.destroyView(m)
            }
        }
        transition(t, e, n) {
            return w(this, null, function*() {
                let i = n.opts,
                    s = i.progressAnimation ? p => {
                        p !== void 0 && !this.gestureOrAnimationInProgress ? (this.gestureOrAnimationInProgress = !0, p.onFinish(() => {
                            this.gestureOrAnimationInProgress = !1
                        }, {
                            oneTimeCallback: !0
                        }), p.progressEnd(0, 0, 0)) : this.sbAni = p
                    } : void 0,
                    a = b(this),
                    r = t.element,
                    l = e && e.element,
                    c = Object.assign(Object.assign({
                        mode: a,
                        showGoBack: this.canGoBackSync(t),
                        baseEl: this.el,
                        progressCallback: s,
                        animated: this.animated && Y.getBoolean("animated", !0),
                        enteringEl: r,
                        leavingEl: l
                    }, i), {
                        animationBuilder: i.animationBuilder || this.animation || Y.get("navAnimation")
                    }),
                    {
                        hasCompleted: d
                    } = yield Ci(c);
                return this.transitionFinish(d, t, e, i)
            })
        }
        transitionFinish(t, e, n, i) {
            let s = t ? e : n;
            return s && this.unmountInactiveViews(s), {
                hasCompleted: t,
                requiresTransition: !0,
                enteringView: e,
                leavingView: n,
                direction: i.direction
            }
        }
        insertViewAt(t, e) {
            let n = this.views,
                i = n.indexOf(t);
            i > -1 ? (xt(t.nav === this, "view is not part of the nav"), n.splice(i, 1), n.splice(e, 0, t)) : (xt(!t.nav, "nav is used"), t.nav = this, n.splice(e, 0, t))
        }
        removeView(t) {
            xt(t.state === e3 || t.state === f1, "view state should be loaded or destroyed");
            let e = this.views,
                n = e.indexOf(t);
            xt(n > -1, "view must be part of the stack"), n >= 0 && e.splice(n, 1)
        }
        destroyView(t) {
            t._destroy(), this.removeView(t)
        }
        unmountInactiveViews(t) {
            if (this.destroyed) return;
            let e = this.views,
                n = e.indexOf(t);
            for (let i = e.length - 1; i >= 0; i--) {
                let s = e[i],
                    a = s.element;
                a && (i > n ? (Io(a, Ge), this.destroyView(s)) : i < n && h2(a, !0))
            }
        }
        canStart() {
            return !this.gestureOrAnimationInProgress && !!this.swipeGesture && !this.isTransitioning && this.transInstr.length === 0 && this.canGoBackSync()
        }
        onStart() {
            this.gestureOrAnimationInProgress = !0, this.pop({
                direction: "back",
                progressAnimation: !0
            })
        }
        onMove(t) {
            this.sbAni && this.sbAni.progressStep(t)
        }
        onEnd(t, e, n) {
            if (this.sbAni) {
                this.sbAni.onFinish(() => {
                    this.gestureOrAnimationInProgress = !1
                }, {
                    oneTimeCallback: !0
                });
                let i = t ? -.001 : .001;
                t ? i += Qt([0, 0], [.32, .72], [0, 1], [1, 1], e)[0] : (this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"), i += Qt([0, 0], [1, 0], [.68, .28], [1, 1], e)[0]), this.sbAni.progressEnd(t ? 1 : 0, i, n)
            } else this.gestureOrAnimationInProgress = !1
        }
        render() {
            return u("slot", {
                key: "71e9b5d07fc90ca5534197a63a003a4154aabd59"
            })
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                swipeGesture: ["swipeGestureChanged"],
                root: ["rootChanged"]
            }
        }
        static get style() {
            return bg
        }
    }, [1, "ion-nav", {
        delegate: [16],
        swipeGesture: [1028, "swipe-gesture"],
        animated: [4],
        animation: [16],
        rootParams: [16],
        root: [1],
        push: [64],
        insert: [64],
        insertPages: [64],
        pop: [64],
        popTo: [64],
        popToRoot: [64],
        removeIndex: [64],
        setRoot: [64],
        setPages: [64],
        setRouteId: [64],
        getRouteId: [64],
        getActive: [64],
        getByIndex: [64],
        canGoBack: [64],
        getPrevious: [64],
        getLength: [64]
    }, void 0, {
        swipeGesture: ["swipeGestureChanged"],
        root: ["rootChanged"]
    }]);

function yg() {
    if (typeof customElements > "u") return;
    ["ion-nav"].forEach(t => {
        switch (t) {
            case "ion-nav":
                customElements.get(t) || customElements.define(t, kg);
                break
        }
    })
}
var o3 = yg;
var n3 = _c;
var h = {
    allRenderFn: !1,
    element: !0,
    event: !0,
    hasRenderFn: !0,
    hostListener: !0,
    hostListenerTargetWindow: !0,
    hostListenerTargetDocument: !0,
    hostListenerTargetBody: !0,
    hostListenerTargetParent: !1,
    hostListenerTarget: !0,
    member: !0,
    method: !0,
    mode: !0,
    observeAttribute: !0,
    prop: !0,
    propMutable: !0,
    reflect: !0,
    scoped: !0,
    shadowDom: !0,
    slot: !0,
    cssAnnotations: !0,
    state: !0,
    style: !0,
    formAssociated: !1,
    svg: !0,
    updatable: !0,
    vdomAttribute: !0,
    vdomXlink: !0,
    vdomClass: !0,
    vdomFunctional: !0,
    vdomKey: !0,
    vdomListener: !0,
    vdomRef: !0,
    vdomPropOrAttr: !0,
    vdomRender: !0,
    vdomStyle: !0,
    vdomText: !0,
    watchCallback: !0,
    taskQueue: !0,
    hotModuleReplacement: !1,
    isDebug: !1,
    isDev: !1,
    isTesting: !1,
    hydrateServerSide: !1,
    hydrateClientSide: !1,
    lifecycleDOMEvents: !1,
    lazyLoad: !1,
    profile: !1,
    slotRelocation: !0,
    appendChildSlotFix: !1,
    cloneNodeFix: !1,
    hydratedAttribute: !1,
    hydratedClass: !0,
    scriptDataOpts: !1,
    scopedSlotTextContentFix: !1,
    shadowDomShim: !1,
    slotChildNodesFix: !1,
    invisiblePrehydration: !0,
    propBoolean: !0,
    propNumber: !0,
    propString: !0,
    constructableCSS: !0,
    devTools: !1,
    shadowDelegatesFocus: !0,
    initializeNextTick: !1,
    asyncLoading: !0,
    asyncQueue: !1,
    transformTagName: !1,
    attachStyles: !0,
    experimentalSlotFixes: !1
};
var w1 = "app";
var Mg = hr({});
var Cg = Object.defineProperty,
    zg = (o, t) => {
        for (var e in t) Cg(o, e, {
            get: t[e],
            enumerable: !0
        })
    },
    oi = {
        isDev: !!h.isDev,
        isBrowser: !0,
        isServer: !1,
        isTesting: !!h.isTesting
    },
    Sg = "http://www.w3.org/2000/svg",
    Ag = "http://www.w3.org/1999/xhtml",
    Ig = (o, t) => {
        var e;
        let n = t.$cmpMeta$;
        Object.entries((e = n.$members$) != null ? e : {}).map(([s, [a]]) => {
            if ((h.state || h.prop) && (a & 31 || a & 32)) {
                let r = o[s],
                    l = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(o), s);
                Object.defineProperty(o, s, {
                    get() {
                        return l.get.call(this)
                    },
                    set(c) {
                        l.set.call(this, c)
                    },
                    configurable: !0,
                    enumerable: !0
                }), o[s] = t.$instanceValues$.has(s) ? t.$instanceValues$.get(s) : r
            }
        })
    },
    ue = o => {
        if (o.__stencil__getHostRef) return o.__stencil__getHostRef()
    };
var Lg = (o, t) => {
        let e = {
            $flags$: 0,
            $hostElement$: o,
            $cmpMeta$: t,
            $instanceValues$: new Map
        };
        h.isDev && (e.$renderCount$ = 0), h.method && h.lazyLoad && (e.$onInstancePromise$ = new Promise(i => e.$onInstanceResolve$ = i)), h.asyncLoading && (e.$onReadyPromise$ = new Promise(i => e.$onReadyResolve$ = i), o["s-p"] = [], o["s-rc"] = []);
        let n = e;
        return o.__stencil__getHostRef = () => n, !h.lazyLoad && h.modernPropertyDecls && (h.state || h.prop) && Ig(o, e), n
    },
    i3 = (o, t) => t in o,
    Eg, Ee = (o, t) => (Eg || console.error)(o, t),
    S3 = h.isTesting ? ["STENCIL:"] : ["%cstencil", "color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"],
    M1 = (...o) => console.error(...S3, ...o),
    C1 = (...o) => console.warn(...S3, ...o);
var s3 = new Map;
var Bg = (o, t, e) => {
        let n = o.$tagName$.replace(/-/g, "_"),
            i = o.$lazyBundleId$;
        if (h.isDev && typeof i != "string") {
            M1(`Trying to lazily load component <${o.$tagName$}> with style mode "${t.$modeName$}", but it does not exist.`);
            return
        } else if (!i) return;
        let s = h.hotModuleReplacement ? !1 : s3.get(i);
        if (s) return s[n];
        return Mg(`./${i}.entry.js${h.hotModuleReplacement&&e?"?s-hmr="+e:""}`).then(a => (h.hotModuleReplacement || s3.set(i, a), a[n]), a => {
            Ee(a, t.$hostElement$)
        })
    },
    z1 = new Map,
    Dg = [],
    jg = "r",
    $g = "o",
    Hg = "s",
    Tg = "t",
    _g = "c",
    Qn = "s-id",
    Zn = "sty-id",
    a3 = "c-id";
var Vg = "slot-fb{display:contents}slot-fb[hidden]{display:none}",
    r3 = "http://www.w3.org/1999/xlink",
    Og = ["formAssociatedCallback", "formResetCallback", "formDisabledCallback", "formStateRestoreCallback"],
    at = typeof window < "u" ? window : {},
    A3 = at.HTMLElement || class {},
    st = {
        $flags$: 0,
        $resourcesUrl$: "",
        jmp: o => o(),
        raf: o => requestAnimationFrame(o),
        ael: (o, t, e, n) => o.addEventListener(t, e, n),
        rel: (o, t, e, n) => o.removeEventListener(t, e, n),
        ce: (o, t) => new CustomEvent(o, t)
    };
var Jo = h.shadowDom,
    Rg = (() => {
        var o;
        let t = !1;
        try {
            (o = at.document) == null || o.addEventListener("e", null, Object.defineProperty({}, "passive", {
                get() {
                    t = !0
                }
            }))
        } catch {}
        return t
    })(),
    Pg = o => Promise.resolve(o),
    I3 = h.constructableCSS ? (() => {
        try {
            return new CSSStyleSheet, typeof new CSSStyleSheet().replaceSync == "function"
        } catch {}
        return !1
    })() : !1,
    Ps = 0,
    S1 = !1,
    Fs = [],
    ho = [],
    Ns = [],
    Fg = (o, t) => e => {
        o.push(e), S1 || (S1 = !0, t && st.$flags$ & 4 ? D1(A1) : st.raf(A1))
    },
    l3 = o => {
        for (let t = 0; t < o.length; t++) try {
            o[t](performance.now())
        } catch (e) {
            Ee(e)
        }
        o.length = 0
    },
    c3 = (o, t) => {
        let e = 0,
            n = 0;
        for (; e < o.length && (n = performance.now()) < t;) try {
            o[e++](n)
        } catch (i) {
            Ee(i)
        }
        e === o.length ? o.length = 0 : e !== 0 && o.splice(0, e)
    },
    A1 = () => {
        if (h.asyncQueue && Ps++, l3(Fs), h.asyncQueue) {
            let o = (st.$flags$ & 6) === 2 ? performance.now() + 14 * Math.ceil(Ps * .1) : 1 / 0;
            c3(ho, o), c3(Ns, o), ho.length > 0 && (Ns.push(...ho), ho.length = 0), (S1 = Fs.length + ho.length + Ns.length > 0) ? st.raf(A1) : Ps = 0
        } else l3(ho), (S1 = Fs.length > 0) && st.raf(A1)
    },
    D1 = o => Pg().then(o);
var Ng = Fg(ho, !0),
    L3 = o => {
        let t = new URL(o, st.$resourcesUrl$);
        return t.origin !== at.location.origin ? t.href : t.pathname
    };
var Ug = o => o != null && o !== void 0,
    oa = o => (o = typeof o, o === "object" || o === "function");

function qg(o) {
    var t, e, n;
    return (n = (e = (t = o.head) == null ? void 0 : t.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : e.getAttribute("content")) != null ? n : void 0
}
var Wg = o => o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    Gg = {};
zg(Gg, {
    err: () => E3,
    map: () => Xg,
    ok: () => Ws,
    unwrap: () => Yg,
    unwrapErr: () => Zg
});
var Ws = o => ({
        isOk: !0,
        isErr: !1,
        value: o
    }),
    E3 = o => ({
        isOk: !1,
        isErr: !0,
        value: o
    });

function Xg(o, t) {
    if (o.isOk) {
        let e = t(o.value);
        return e instanceof Promise ? e.then(n => Ws(n)) : Ws(e)
    }
    if (o.isErr) {
        let e = o.value;
        return E3(e)
    }
    throw "should never get here"
}
var Yg = o => {
        if (o.isOk) return o.value;
        throw o.value
    },
    Zg = o => {
        if (o.isErr) return o.value;
        throw o.value
    },
    ni = o => t => o(t.toLowerCase()),
    Kg = ni(o => o.endsWith(".d.ts") || o.endsWith(".d.mts") || o.endsWith(".d.cts")),
    uS = ni(o => !Kg(o) && (o.endsWith(".ts") || o.endsWith(".mts") || o.endsWith(".cts"))),
    gS = ni(o => o.endsWith(".tsx") || o.endsWith(".mtsx") || o.endsWith(".ctsx")),
    mS = ni(o => o.endsWith(".jsx") || o.endsWith(".mjsx") || o.endsWith(".cjsx")),
    vS = ni(o => o.endsWith(".js") || o.endsWith(".mjs") || o.endsWith(".cjs")),
    j1 = o => {
        let t = Pt(o, "childNodes");
        o.tagName && o.tagName.includes("-") && o["s-cr"] && o.tagName !== "SLOT-FB" && ii(t, o.tagName).forEach(n => {
            n.nodeType === 1 && n.tagName === "SLOT-FB" && (na(n, en(n), !1).length ? n.hidden = !0 : n.hidden = !1)
        });
        let e = 0;
        for (e = 0; e < t.length; e++) {
            let n = t[e];
            n.nodeType === 1 && Pt(n, "childNodes").length && j1(n)
        }
    },
    Jn = o => {
        let t = [];
        for (let e = 0; e < o.length; e++) {
            let n = o[e]["s-nr"] || void 0;
            n && n.isConnected && t.push(n)
        }
        return t
    };

function ii(o, t, e) {
    let n = 0,
        i = [],
        s;
    for (; n < o.length; n++) {
        if (s = o[n], s["s-sr"] && (!t || s["s-hn"] === t) && (e === void 0 || en(s) === e) && (i.push(s), typeof e < "u")) return i;
        i = [...i, ...ii(s.childNodes, t, e)]
    }
    return i
}
var na = (o, t, e = !0) => {
        let n = [];
        (e && o["s-sr"] || !o["s-sr"]) && n.push(o);
        let i = o;
        for (; i = i.nextSibling;) en(i) === t && (e || !i["s-sr"]) && n.push(i);
        return n
    },
    d3 = (o, t) => o.nodeType === 1 ? o.getAttribute("slot") === null && t === "" || o.getAttribute("slot") === t : o["s-sn"] === t ? !0 : t === "",
    $1 = (o, t, e, n) => {
        if (o["s-ol"] && o["s-ol"].isConnected) return;
        let i = document.createTextNode("");
        if (i["s-nr"] = o, !t["s-cr"] || !t["s-cr"].parentNode) return;
        let s = t["s-cr"].parentNode,
            a = e ? Pt(s, "prepend") : Pt(s, "appendChild");
        if (h.hydrateClientSide && typeof n < "u") {
            i["s-oo"] = n;
            let r = Pt(s, "childNodes"),
                l = [i];
            r.forEach(c => {
                c["s-nr"] && l.push(c)
            }), l.sort((c, d) => !c["s-oo"] || c["s-oo"] < (d["s-oo"] || 0) ? -1 : !d["s-oo"] || d["s-oo"] < c["s-oo"] ? 1 : 0), l.forEach(c => a.call(s, c))
        } else a.call(s, i);
        o["s-ol"] = i, o["s-sh"] = t["s-hn"]
    },
    en = o => typeof o["s-sn"] == "string" ? o["s-sn"] : o.nodeType === 1 && o.getAttribute("slot") || void 0;

function B3(o) {
    if (o.assignedElements || o.assignedNodes || !o["s-sr"]) return;
    let t = e => function(n) {
        let i = [],
            s = this["s-sn"];
        n ? .flatten && console.error(`
          Flattening is not supported for Stencil non-shadow slots. 
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);
        let a = this["s-cr"].parentElement;
        return (a.__childNodes ? a.childNodes : Jn(a.childNodes)).forEach(l => {
            s === en(l) && i.push(l)
        }), e ? i.filter(l => l.nodeType === 1) : i
    }.bind(o);
    o.assignedElements = t(!0), o.assignedNodes = t(!1)
}

function H1(o) {
    o.dispatchEvent(new CustomEvent("slotchange", {
        bubbles: !1,
        cancelable: !1,
        composed: !1
    }))
}

function ia(o, t) {
    var e;
    if (t = t || ((e = o["s-ol"]) == null ? void 0 : e.parentElement), !t) return {
        slotNode: null,
        slotName: ""
    };
    let n = o["s-sn"] = en(o) || "",
        i = Pt(t, "childNodes");
    return {
        slotNode: ii(i, t.tagName, n)[0],
        slotName: n
    }
}
var Qg = o => {
        D3(o), j3(o), em(o), tm(o), sm(o), om(o), nm(o), im(o), $3(o), H3(o), Jg(o)
    },
    D3 = o => {
        let t = o.cloneNode;
        o.cloneNode = function(e) {
            let n = this,
                i = h.shadowDom ? n.shadowRoot && Jo : !1,
                s = t.call(n, i ? e : !1);
            if (h.slot && !i && e) {
                let a = 0,
                    r, l, c = ["s-id", "s-cr", "s-lr", "s-rc", "s-sc", "s-p", "s-cn", "s-sr", "s-sn", "s-hn", "s-ol", "s-nr", "s-si", "s-rf", "s-scs"],
                    d = this.__childNodes || this.childNodes;
                for (; a < d.length; a++) r = d[a]["s-nr"], l = c.every(p => !d[a][p]), r && (h.appendChildSlotFix && s.__appendChild ? s.__appendChild(r.cloneNode(!0)) : s.appendChild(r.cloneNode(!0))), l && s.appendChild(d[a].cloneNode(!0))
            }
            return s
        }
    },
    j3 = o => {
        o.__appendChild = o.appendChild, o.appendChild = function(t) {
            let {
                slotName: e,
                slotNode: n
            } = ia(t, this);
            if (n) {
                $1(t, n);
                let i = na(n, e),
                    s = i[i.length - 1],
                    a = Pt(s, "parentNode"),
                    r = Pt(a, "insertBefore")(t, s.nextSibling);
                return H1(n), j1(this), r
            }
            return this.__appendChild(t)
        }
    },
    Jg = o => {
        o.__removeChild = o.removeChild, o.removeChild = function(t) {
            if (t && typeof t["s-sn"] < "u") {
                let e = this.__childNodes || this.childNodes;
                if (ii(e, this.tagName, t["s-sn"]) && t.isConnected) {
                    t.remove(), j1(this);
                    return
                }
            }
            return this.__removeChild(t)
        }
    },
    tm = o => {
        o.__prepend = o.prepend, o.prepend = function(...t) {
            t.forEach(e => {
                typeof e == "string" && (e = this.ownerDocument.createTextNode(e));
                let n = (e["s-sn"] = en(e)) || "",
                    i = Pt(this, "childNodes"),
                    s = ii(i, this.tagName, n)[0];
                if (s) {
                    $1(e, s, !0);
                    let r = na(s, n)[0],
                        l = Pt(r, "parentNode"),
                        c = Pt(l, "insertBefore")(e, Pt(r, "nextSibling"));
                    return H1(s), c
                }
                return e.nodeType === 1 && e.getAttribute("slot") && (e.hidden = !0), o.__prepend(e)
            })
        }
    },
    em = o => {
        o.__append = o.append, o.append = function(...t) {
            t.forEach(e => {
                typeof e == "string" && (e = this.ownerDocument.createTextNode(e)), this.appendChild(e)
            })
        }
    },
    om = o => {
        let t = o.insertAdjacentHTML;
        o.insertAdjacentHTML = function(e, n) {
            if (e !== "afterbegin" && e !== "beforeend") return t.call(this, e, n);
            let i = this.ownerDocument.createElement("_"),
                s;
            if (i.innerHTML = n, e === "afterbegin")
                for (; s = i.firstChild;) this.prepend(s);
            else if (e === "beforeend")
                for (; s = i.firstChild;) this.append(s)
        }
    },
    nm = o => {
        o.insertAdjacentText = function(t, e) {
            this.insertAdjacentHTML(t, e)
        }
    },
    im = o => {
        let t = o;
        t.__insertBefore || (t.__insertBefore = o.insertBefore, o.insertBefore = function(e, n) {
            let {
                slotName: i,
                slotNode: s
            } = ia(e, this), a = this.__childNodes ? this.childNodes : Jn(this.childNodes);
            if (s) {
                let l = !1;
                if (a.forEach(c => {
                        if (c === n || n === null) {
                            if (l = !0, n === null || i !== n["s-sn"]) {
                                this.appendChild(e);
                                return
                            }
                            if (i === n["s-sn"]) {
                                $1(e, s);
                                let d = Pt(n, "parentNode");
                                Pt(d, "insertBefore")(e, n), H1(s)
                            }
                            return
                        }
                    }), l) return e
            }
            let r = n ? .__parentNode;
            return r && !this.isSameNode(r) ? this.appendChild(e) : this.__insertBefore(e, n)
        })
    },
    sm = o => {
        let t = o.insertAdjacentElement;
        o.insertAdjacentElement = function(e, n) {
            return e !== "afterbegin" && e !== "beforeend" ? t.call(this, e, n) : e === "afterbegin" ? (this.prepend(n), n) : (e === "beforeend" && this.append(n), n)
        }
    },
    $3 = o => {
        ge("textContent", o), Object.defineProperty(o, "textContent", {
            get: function() {
                let t = "";
                return (this.__childNodes ? this.childNodes : Jn(this.childNodes)).forEach(n => t += n.textContent || ""), t
            },
            set: function(t) {
                (this.__childNodes ? this.childNodes : Jn(this.childNodes)).forEach(n => {
                    n["s-ol"] && n["s-ol"].remove(), n.remove()
                }), this.insertAdjacentHTML("beforeend", t)
            }
        })
    },
    H3 = o => {
        class t extends Array {
            item(n) {
                return this[n]
            }
        }
        ge("children", o), Object.defineProperty(o, "children", {
            get() {
                return this.childNodes.filter(e => e.nodeType === 1)
            }
        }), Object.defineProperty(o, "childElementCount", {
            get() {
                return this.children.length
            }
        }), ge("firstChild", o), Object.defineProperty(o, "firstChild", {
            get() {
                return this.childNodes[0]
            }
        }), ge("lastChild", o), Object.defineProperty(o, "lastChild", {
            get() {
                return this.childNodes[this.childNodes.length - 1]
            }
        }), ge("childNodes", o), Object.defineProperty(o, "childNodes", {
            get() {
                let e = new t;
                return e.push(...Jn(this.__childNodes)), e
            }
        })
    },
    am = o => {
        !o || o.__nextSibling !== void 0 || !globalThis.Node || (rm(o), cm(o), T3(o), o.nodeType === Node.ELEMENT_NODE && (lm(o), dm(o)))
    },
    rm = o => {
        !o || o.__nextSibling || (ge("nextSibling", o), Object.defineProperty(o, "nextSibling", {
            get: function() {
                var t;
                let e = (t = this["s-ol"]) == null ? void 0 : t.parentNode.childNodes,
                    n = e ? .indexOf(this);
                return e && n > -1 ? e[n + 1] : this.__nextSibling
            }
        }))
    },
    lm = o => {
        !o || o.__nextElementSibling || (ge("nextElementSibling", o), Object.defineProperty(o, "nextElementSibling", {
            get: function() {
                var t;
                let e = (t = this["s-ol"]) == null ? void 0 : t.parentNode.children,
                    n = e ? .indexOf(this);
                return e && n > -1 ? e[n + 1] : this.__nextElementSibling
            }
        }))
    },
    cm = o => {
        !o || o.__previousSibling || (ge("previousSibling", o), Object.defineProperty(o, "previousSibling", {
            get: function() {
                var t;
                let e = (t = this["s-ol"]) == null ? void 0 : t.parentNode.childNodes,
                    n = e ? .indexOf(this);
                return e && n > -1 ? e[n - 1] : this.__previousSibling
            }
        }))
    },
    dm = o => {
        !o || o.__previousElementSibling || (ge("previousElementSibling", o), Object.defineProperty(o, "previousElementSibling", {
            get: function() {
                var t;
                let e = (t = this["s-ol"]) == null ? void 0 : t.parentNode.children,
                    n = e ? .indexOf(this);
                return e && n > -1 ? e[n - 1] : this.__previousElementSibling
            }
        }))
    },
    T3 = o => {
        !o || o.__parentNode || (ge("parentNode", o), Object.defineProperty(o, "parentNode", {
            get: function() {
                var t;
                return ((t = this["s-ol"]) == null ? void 0 : t.parentNode) || this.__parentNode
            },
            set: function(t) {
                this.__parentNode = t
            }
        }))
    },
    hm = ["children", "nextElementSibling", "previousElementSibling"],
    pm = ["childNodes", "firstChild", "lastChild", "nextSibling", "previousSibling", "textContent", "parentNode"];

function ge(o, t) {
    let e;
    hm.includes(o) ? e = Object.getOwnPropertyDescriptor(Element.prototype, o) : pm.includes(o) && (e = Object.getOwnPropertyDescriptor(Node.prototype, o)), e || (e = Object.getOwnPropertyDescriptor(t, o)), e && Object.defineProperty(t, "__" + o, e)
}

function Pt(o, t) {
    if ("__" + t in o) {
        let e = o["__" + t];
        return typeof e != "function" ? e : e.bind(o)
    } else return typeof o[t] != "function" ? o[t] : o[t].bind(o)
}
var um = 0,
    Le = (o, t = "") => {
        if (h.profile && performance.mark) {
            let e = `st:${o}:${t}:${um++}`;
            return performance.mark(e), () => performance.measure(`[Stencil] ${o}() <${t}>`, e)
        } else return () => {}
    },
    gm = (o, t) => h.profile && performance.mark ? (performance.getEntriesByName(o, "mark").length === 0 && performance.mark(o), () => {
        performance.getEntriesByName(t, "measure").length === 0 && performance.measure(t, o)
    }) : () => {};
var on = (o, t, ...e) => {
        let n = null,
            i = null,
            s = null,
            a = !1,
            r = !1,
            l = [],
            c = p => {
                for (let g = 0; g < p.length; g++) n = p[g], Array.isArray(n) ? c(n) : n != null && typeof n != "boolean" && ((a = typeof o != "function" && !oa(n)) ? n = String(n) : h.isDev && typeof o != "function" && n.$flags$ === void 0 && M1(`vNode passed as children has unexpected type.
Make sure it's using the correct h() function.
Empty objects can also be the cause, look for JSX comments that became objects.`), a && r ? l[l.length - 1].$text$ += n : l.push(a ? tn(null, n) : n), r = a)
            };
        if (c(e), t && (h.isDev && o === "input" && fm(t), h.vdomKey && t.key && (i = t.key), h.slotRelocation && t.name && (s = t.name), h.vdomClass)) {
            let p = t.className || t.class;
            p && (t.class = typeof p != "object" ? p : Object.keys(p).filter(g => p[g]).join(" "))
        }
        if (h.isDev && l.some(Gs) && M1(`The <Host> must be the single root component. Make sure:
- You are NOT using hostData() and <Host> in the same component.
- <Host> is used once, and it's the single root component of the render() function.`), h.vdomFunctional && typeof o == "function") return o(t === null ? {} : t, l, mm);
        let d = tn(o, null);
        return d.$attrs$ = t, l.length > 0 && (d.$children$ = l), h.vdomKey && (d.$key$ = i), h.slotRelocation && (d.$name$ = s), d
    },
    tn = (o, t) => {
        let e = {
            $flags$: 0,
            $tag$: o,
            $text$: t,
            $elm$: null,
            $children$: null
        };
        return h.vdomAttribute && (e.$attrs$ = null), h.vdomKey && (e.$key$ = null), h.slotRelocation && (e.$name$ = null), e
    },
    sa = {},
    Gs = o => o && o.$tag$ === sa,
    mm = {
        forEach: (o, t) => o.map(h3).forEach(t),
        map: (o, t) => o.map(h3).map(t).map(vm)
    },
    h3 = o => ({
        vattrs: o.$attrs$,
        vchildren: o.$children$,
        vkey: o.$key$,
        vname: o.$name$,
        vtag: o.$tag$,
        vtext: o.$text$
    }),
    vm = o => {
        if (typeof o.vtag == "function") {
            let e = y({}, o.vattrs);
            return o.vkey && (e.key = o.vkey), o.vname && (e.name = o.vname), on(o.vtag, e, ...o.vchildren || [])
        }
        let t = tn(o.vtag, o.vtext);
        return t.$attrs$ = o.vattrs, t.$children$ = o.vchildren, t.$key$ = o.vkey, t.$name$ = o.vname, t
    },
    fm = o => {
        let t = Object.keys(o),
            e = t.indexOf("value");
        if (e === -1) return;
        let n = t.indexOf("type"),
            i = t.indexOf("min"),
            s = t.indexOf("max"),
            a = t.indexOf("step");
        (e < n || e < i || e < s || e < a) && C1('The "value" prop of <input> should be set after "min", "max", "type" and "step"')
    },
    wm = (o, t, e, n) => {
        let i = Le("hydrateClient", t),
            s = o.shadowRoot,
            a = [],
            r = [],
            l = [],
            c = h.shadowDom && s ? [] : null,
            d = tn(t, null);
        d.$elm$ = o;
        let p;
        if (h.scoped) {
            let E = n.$cmpMeta$;
            E && E.$flags$ & 10 && o["s-sc"] ? (p = o["s-sc"], o.classList.add(p + "-h")) : o["s-sc"] && delete o["s-sc"]
        }
        at.document && (!st.$orgLocNodes$ || !st.$orgLocNodes$.size) && Ys(at.document.body, st.$orgLocNodes$ = new Map), o[Qn] = e, o.removeAttribute(Qn), n.$vnode$ = Xs(d, a, r, c, o, o, e, l);
        let g = 0,
            m = a.length,
            f;
        for (g; g < m; g++) {
            f = a[g];
            let E = f.$hostId$ + "." + f.$nodeId$,
                z = st.$orgLocNodes$.get(E),
                A = f.$elm$;
            s || (A["s-hn"] = t.toUpperCase(), f.$tag$ === "slot" && (A["s-cr"] = o["s-cr"])), f.$tag$ === "slot" && (f.$name$ = f.$elm$["s-sn"] || f.$elm$.name || null, f.$children$ ? (f.$flags$ |= 2, f.$elm$.childNodes.length || f.$children$.forEach(R => {
                f.$elm$.appendChild(R.$elm$)
            })) : f.$flags$ |= 1), z && z.isConnected && (s && z["s-en"] === "" && z.parentNode.insertBefore(A, z.nextSibling), z.parentNode.removeChild(z), s || (A["s-oo"] = parseInt(f.$nodeId$))), st.$orgLocNodes$.delete(E)
        }
        let x = [],
            k = l.length,
            B = 0,
            j, D, T, _;
        for (B; B < k; B++)
            if (j = l[B], !(!j || !j.length))
                for (T = j.length, D = 0, D; D < T; D++) {
                    if (_ = j[D], x[_.hostId] || (x[_.hostId] = st.$orgLocNodes$.get(_.hostId)), !x[_.hostId]) continue;
                    let E = x[_.hostId];
                    (!E.shadowRoot || !s) && (_.slot["s-cr"] = E["s-cr"], !_.slot["s-cr"] && E.shadowRoot ? _.slot["s-cr"] = E : _.slot["s-cr"] = (E.__childNodes || E.childNodes)[0], $1(_.node, _.slot, !1, _.node["s-oo"]), h.experimentalSlotFixes && am(_.node)), E.shadowRoot && _.node.parentElement !== E && E.appendChild(_.node)
                }
        if (h.scoped && p && r.length && r.forEach(E => {
                E.$elm$.parentElement.classList.add(p + "-s")
            }), h.shadowDom && s && !s.childNodes.length) {
            let E = 0,
                z = c.length;
            if (z) {
                for (E; E < z; E++) s.appendChild(c[E]);
                Array.from(o.childNodes).forEach(A => {
                    typeof A["s-sn"] != "string" && (A.nodeType === 1 && A.slot && A.hidden ? A.removeAttribute("hidden") : (A.nodeType === 8 || A.nodeType === 3 && !A.wholeText.trim()) && A.parentNode.removeChild(A))
                })
            }
        }
        st.$orgLocNodes$.delete(o["s-id"]), n.$hostElement$ = o, i()
    },
    Xs = (o, t, e, n, i, s, a, r = []) => {
        let l, c, d, p, g = i["s-sc"];
        if (s.nodeType === 1) {
            if (l = s.getAttribute(a3), l && (c = l.split("."), c[0] === a || c[0] === "0")) {
                d = p3({
                    $flags$: 0,
                    $hostId$: c[0],
                    $nodeId$: c[1],
                    $depth$: c[2],
                    $index$: c[3],
                    $tag$: s.tagName.toLowerCase(),
                    $elm$: s,
                    $attrs$: {
                        class: s.className || ""
                    }
                }), t.push(d), s.removeAttribute(a3), o.$children$ || (o.$children$ = []), h.scoped && g && (s["s-si"] = g, d.$attrs$.class += " " + g);
                let f = d.$elm$.getAttribute("s-sn");
                typeof f == "string" && (d.$tag$ === "slot-fb" && (u3(f, c[2], d, s, o, t, e, n, r), h.scoped && g && s.classList.add(g)), d.$elm$["s-sn"] = f, d.$elm$.removeAttribute("s-sn")), d.$index$ !== void 0 && (o.$children$[d.$index$] = d), o = d, n && d.$depth$ === "0" && (n[d.$index$] = d.$elm$)
            }
            if (s.shadowRoot)
                for (p = s.shadowRoot.childNodes.length - 1; p >= 0; p--) Xs(o, t, e, n, i, s.shadowRoot.childNodes[p], a, r);
            let m = s.__childNodes || s.childNodes;
            for (p = m.length - 1; p >= 0; p--) Xs(o, t, e, n, i, m[p], a, r)
        } else if (s.nodeType === 8) {
            if (c = s.nodeValue.split("."), c[1] === a || c[1] === "0") {
                if (l = c[0], d = p3({
                        $hostId$: c[1],
                        $nodeId$: c[2],
                        $depth$: c[3],
                        $index$: c[4] || "0",
                        $elm$: s,
                        $attrs$: null,
                        $children$: null,
                        $key$: null,
                        $name$: null,
                        $tag$: null,
                        $text$: null
                    }), l === Tg) d.$elm$ = m3(s, 3), d.$elm$ && d.$elm$.nodeType === 3 && (d.$text$ = d.$elm$.textContent, t.push(d), s.remove(), a === d.$hostId$ && (o.$children$ || (o.$children$ = []), o.$children$[d.$index$] = d), n && d.$depth$ === "0" && (n[d.$index$] = d.$elm$));
                else if (l === _g) d.$elm$ = m3(s, 8), d.$elm$ && d.$elm$.nodeType === 8 && (t.push(d), s.remove());
                else if (d.$hostId$ === a)
                    if (l === Hg) {
                        let m = s["s-sn"] = c[5] || "";
                        u3(m, c[2], d, s, o, t, e, n, r)
                    } else l === jg && (h.shadowDom && n ? s.remove() : h.slotRelocation && (i["s-cr"] = s, s["s-cn"] = !0))
            }
        } else if (o && o.$tag$ === "style") {
            let m = tn(null, s.textContent);
            m.$elm$ = s, m.$index$ = "0", o.$children$ = [m]
        } else s.nodeType === 3 && !s.wholeText.trim() && s.remove();
        return o
    },
    Ys = (o, t) => {
        if (o.nodeType === 1) {
            let e = o[Qn] || o.getAttribute(Qn);
            e && t.set(e, o);
            let n = 0;
            if (o.shadowRoot)
                for (; n < o.shadowRoot.childNodes.length; n++) Ys(o.shadowRoot.childNodes[n], t);
            let i = o.__childNodes || o.childNodes;
            for (n = 0; n < i.length; n++) Ys(i[n], t)
        } else if (o.nodeType === 8) {
            let e = o.nodeValue.split(".");
            e[0] === $g && (t.set(e[1] + "." + e[2], o), o.nodeValue = "", o["s-en"] = e[3])
        }
    },
    p3 = o => y(y({}, {
        $flags$: 0,
        $hostId$: null,
        $nodeId$: null,
        $depth$: null,
        $index$: "0",
        $elm$: null,
        $attrs$: null,
        $children$: null,
        $key$: null,
        $name$: null,
        $tag$: null,
        $text$: null
    }), o);

function u3(o, t, e, n, i, s, a, r, l) {
    n["s-sr"] = !0, e.$name$ = o || null, e.$tag$ = "slot";
    let c = i ? .$elm$ ? i.$elm$["s-id"] || i.$elm$.getAttribute("s-id") : "";
    if (h.shadowDom && r && at.document) {
        let d = e.$elm$ = at.document.createElement(e.$tag$);
        e.$name$ && e.$elm$.setAttribute("name", o), c && c !== e.$hostId$ ? i.$elm$.insertBefore(d, i.$elm$.children[0]) : n.parentNode.insertBefore(e.$elm$, n), g3(l, t, o, n, e.$hostId$), n.remove(), e.$depth$ === "0" && (r[e.$index$] = e.$elm$)
    } else {
        let d = e.$elm$,
            p = c && c !== e.$hostId$ && i.$elm$.shadowRoot;
        g3(l, t, o, n, p ? c : e.$hostId$), B3(n), p && i.$elm$.insertBefore(d, i.$elm$.children[0]), s.push(e)
    }
    a.push(e), i.$children$ || (i.$children$ = []), i.$children$[e.$index$] = e
}
var g3 = (o, t, e, n, i) => {
        let s = n.nextSibling;
        for (o[t] = o[t] || []; s && ((s.getAttribute && s.getAttribute("slot") || s["s-sn"]) === e || e === "" && !s["s-sn"] && (s.nodeType === 8 && s.nodeValue.indexOf(".") !== 1 || s.nodeType === 3));) s["s-sn"] = e, o[t].push({
            slot: n,
            node: s,
            hostId: i
        }), s = s.nextSibling
    },
    m3 = (o, t) => {
        let e = o;
        do e = e.nextSibling; while (e && (e.nodeType !== t || !e.nodeValue));
        return e
    };
var xm = o => {
        let t = [],
            e = 0;
        return o = o.replace(/(\[[^\]]*\])/g, (s, a) => {
            let r = `__ph-${e}__`;
            return t.push(a), e++, r
        }), {
            content: o.replace(/(:nth-[-\w]+)(\([^)]+\))/g, (s, a, r) => {
                let l = `__ph-${e}__`;
                return t.push(r), e++, a + l
            }),
            placeholders: t
        }
    },
    bm = (o, t) => t.replace(/__ph-(\d+)__/g, (e, n) => o[+n]),
    si = "-shadowcsshost",
    _3 = "-shadowcssslotted",
    V3 = "-shadowcsscontext",
    aa = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",
    km = new RegExp("(" + si + aa, "gim"),
    ym = new RegExp("(" + V3 + aa, "gim"),
    Mm = new RegExp("(" + _3 + aa, "gim"),
    po = si + "-no-combinator",
    Cm = /-shadowcsshost-no-combinator([^\s]*)/,
    zm = [/::shadow/g, /::content/g],
    Sm = "([>\\s~+[.,{:][\\s\\S]*)?$",
    k1 = /-shadowcsshost/gim,
    ra = o => new RegExp(`((?<!(^@supports(.*)))|(?<={.*))(${o}\\b)`, "gim"),
    Am = ra("::slotted"),
    Im = ra(":host"),
    Lm = ra(":host-context"),
    Em = /\/\*\s*[\s\S]*?\*\//g,
    Bm = o => o.replace(Em, ""),
    Dm = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,
    jm = o => o.match(Dm) || [],
    $m = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,
    Hm = /([{}])/g,
    Tm = /(^.*?[^\\])??((:+)(.*)|$)/,
    _m = "{",
    Vm = "}",
    I1 = "%BLOCK%",
    Zs = (o, t) => {
        let e = Om(o),
            n = 0;
        return e.escapedString.replace($m, (...i) => {
            let s = i[2],
                a = "",
                r = i[4],
                l = "";
            r && r.startsWith("{" + I1) && (a = e.blocks[n++], r = r.substring(I1.length + 1), l = "{");
            let d = t({
                selector: s,
                content: a
            });
            return `${i[1]}${d.selector}${i[3]}${l}${d.content}${r}`
        })
    },
    Om = o => {
        let t = o.split(Hm),
            e = [],
            n = [],
            i = 0,
            s = [];
        for (let r = 0; r < t.length; r++) {
            let l = t[r];
            l === Vm && i--, i > 0 ? s.push(l) : (s.length > 0 && (n.push(s.join("")), e.push(I1), s = []), e.push(l)), l === _m && i++
        }
        return s.length > 0 && (n.push(s.join("")), e.push(I1)), {
            escapedString: e.join(""),
            blocks: n
        }
    },
    Rm = o => (o = o.replace(Lm, `$1${V3}`).replace(Im, `$1${si}`).replace(Am, `$1${_3}`), o),
    O3 = (o, t, e) => o.replace(t, (...n) => {
        if (n[2]) {
            let i = n[2].split(","),
                s = [];
            for (let a = 0; a < i.length; a++) {
                let r = i[a].trim();
                if (!r) break;
                s.push(e(po, r, n[3]))
            }
            return s.join(",")
        } else return po + n[3]
    }),
    R3 = (o, t, e) => o + t.replace(si, "") + e,
    Pm = o => O3(o, km, R3),
    Fm = (o, t, e) => t.indexOf(si) > -1 ? R3(o, t, e) : o + t + e + ", " + t + " " + o + e,
    Nm = (o, t) => {
        let e = "." + t + " > ",
            n = [];
        return o = o.replace(Mm, (...i) => {
            if (i[2]) {
                let s = i[2].trim(),
                    a = i[3],
                    r = e + s + a,
                    l = "";
                for (let p = i[4] - 1; p >= 0; p--) {
                    let g = i[5][p];
                    if (g === "}" || g === ",") break;
                    l = g + l
                }
                let c = (l + r).trim(),
                    d = `${l.trimEnd()}${r.trim()}`.trim();
                if (c !== d) {
                    let p = `${d}, ${c}`;
                    n.push({
                        orgSelector: c,
                        updatedSelector: p
                    })
                }
                return r
            } else return po + i[3]
        }), {
            selectors: n,
            cssText: o
        }
    },
    Um = o => O3(o, ym, Fm),
    qm = o => zm.reduce((t, e) => t.replace(e, " "), o),
    Wm = o => {
        let t = /\[/g,
            e = /\]/g;
        return o = o.replace(t, "\\[").replace(e, "\\]"), new RegExp("^(" + o + ")" + Sm, "m")
    },
    Gm = (o, t) => !Wm(t).test(o),
    P3 = (o, t) => o.replace(Tm, (e, n = "", i, s = "", a = "") => n + t + s + a),
    Xm = (o, t, e) => {
        if (k1.lastIndex = 0, k1.test(o)) {
            let n = `.${e}`;
            return o.replace(Cm, (i, s) => P3(s, n)).replace(k1, n + " ")
        }
        return t + " " + o
    },
    Ym = (o, t, e) => {
        let n = /\[is=([^\]]*)\]/g;
        t = t.replace(n, (f, ...x) => x[0]);
        let i = "." + t,
            s = f => {
                let x = f.trim();
                if (!x) return "";
                if (f.indexOf(po) > -1) x = Xm(f, t, e);
                else {
                    let k = f.replace(k1, "");
                    k.length > 0 && (x = P3(k, i))
                }
                return x
            },
            a = xm(o);
        o = a.content;
        let r = "",
            l = 0,
            c, d = /( |>|\+|~(?!=))\s*/g,
            g = !(o.indexOf(po) > -1);
        for (;
            (c = d.exec(o)) !== null;) {
            let f = c[1],
                x = o.slice(l, c.index).trim();
            g = g || x.indexOf(po) > -1;
            let k = g ? s(x) : x;
            r += `${k} ${f} `, l = d.lastIndex
        }
        let m = o.substring(l);
        return g = g || m.indexOf(po) > -1, r += g ? s(m) : m, bm(a.placeholders, r)
    },
    Zm = (o, t, e, n) => o.split(",").map(i => n && i.indexOf("." + n) > -1 ? i.trim() : Gm(i, t) ? Ym(i, t, e).trim() : i.trim()).join(", "),
    F3 = (o, t, e, n, i) => Zs(o, s => {
        let a = s.selector,
            r = s.content;
        return s.selector[0] !== "@" ? a = Zm(s.selector, t, e, n) : (s.selector.startsWith("@media") || s.selector.startsWith("@supports") || s.selector.startsWith("@page") || s.selector.startsWith("@document")) && (r = F3(s.content, t, e, n, i)), {
            selector: a.replace(/\s{2,}/g, " ").trim(),
            content: r
        }
    }),
    Km = (o, t, e, n, i) => {
        o = Rm(o), o = Pm(o), o = Um(o);
        let s = Nm(o, n);
        return o = s.cssText, o = qm(o), t && (o = F3(o, t, e, n, i)), o = Us(o, e), o = o.replace(/>\s*\*\s+([^{, ]+)/gm, " $1 "), {
            cssText: o.trim(),
            slottedSelectors: s.selectors.map(a => ({
                orgSelector: Us(a.orgSelector, e),
                updatedSelector: Us(a.updatedSelector, e)
            }))
        }
    },
    Us = (o, t) => o.replace(/-shadowcsshost-no-combinator/g, `.${t}`),
    Qm = (o, t, e) => {
        let n = t + "-h",
            i = t + "-s",
            s = jm(o);
        o = Bm(o);
        let a = [];
        if (e) {
            let l = c => {
                let d = `/*!@___${a.length}___*/`,
                    p = `/*!@${c.selector}*/`;
                return a.push({
                    placeholder: d,
                    comment: p
                }), c.selector = d + c.selector, c
            };
            o = Zs(o, c => c.selector[0] !== "@" ? l(c) : ((c.selector.startsWith("@media") || c.selector.startsWith("@supports") || c.selector.startsWith("@page") || c.selector.startsWith("@document")) && (c.content = Zs(c.content, l)), c))
        }
        let r = Km(o, t, n, i, e);
        return o = [r.cssText, ...s].join(`
`), e && a.forEach(({
            placeholder: l,
            comment: c
        }) => {
            o = o.replace(l, c)
        }), r.slottedSelectors.forEach(l => {
            let c = new RegExp(Wg(l.orgSelector), "g");
            o = o.replace(c, l.updatedSelector)
        }), o
    },
    Jm = o => Dg.map(t => t(o)).find(t => !!t);
var Ks = (o, t) => o != null && !oa(o) ? h.propBoolean && t & 4 ? o === "false" ? !1 : o === "" || !!o : h.propNumber && t & 2 ? parseFloat(o) : h.propString && t & 1 ? String(o) : o : o;
var N3 = (o, t, e) => {
        let n = st.ce(t, e);
        return o.dispatchEvent(n), n
    },
    Ko = new WeakMap,
    U3 = (o, t, e) => {
        let n = z1.get(o);
        I3 && e ? (n = n || new CSSStyleSheet, typeof n == "string" ? n = t : n.replaceSync(t)) : n = t, z1.set(o, n)
    },
    Qs = (o, t, e) => {
        var n;
        let i = la(t, e),
            s = z1.get(i);
        if (!h.attachStyles || !at.document) return i;
        if (o = o.nodeType === 11 ? o : at.document, s)
            if (typeof s == "string") {
                o = o.head || o;
                let a = Ko.get(o),
                    r;
                if (a || Ko.set(o, a = new Set), !a.has(i)) {
                    if (h.hydrateClientSide && o.host && (r = o.querySelector(`[${Zn}="${i}"]`))) r.innerHTML = s;
                    else {
                        r = document.querySelector(`[${Zn}="${i}"]`) || at.document.createElement("style"), r.innerHTML = s;
                        let l = (n = st.$nonce$) != null ? n : qg(at.document);
                        if (l != null && r.setAttribute("nonce", l), (h.hydrateServerSide || h.hotModuleReplacement) && (t.$flags$ & 2 || t.$flags$ & 128) && r.setAttribute(Zn, i), !(t.$flags$ & 1))
                            if (o.nodeName === "HEAD") {
                                let c = o.querySelectorAll("link[rel=preconnect]"),
                                    d = c.length > 0 ? c[c.length - 1].nextSibling : o.querySelector("style");
                                o.insertBefore(r, d ? .parentNode === o ? d : null)
                            } else if ("host" in o)
                            if (I3) {
                                let c = new CSSStyleSheet;
                                c.replaceSync(s), o.adoptedStyleSheets = [c, ...o.adoptedStyleSheets]
                            } else {
                                let c = o.querySelector("style");
                                c ? c.innerHTML = s + c.innerHTML : o.prepend(r)
                            }
                        else o.append(r);
                        t.$flags$ & 1 && o.insertBefore(r, null)
                    }
                    t.$flags$ & 4 && (r.innerHTML += Vg), a && a.add(i)
                }
            } else h.constructableCSS && !o.adoptedStyleSheets.includes(s) && (o.adoptedStyleSheets = [...o.adoptedStyleSheets, s]);
        return i
    },
    tv = o => {
        let t = o.$cmpMeta$,
            e = o.$hostElement$,
            n = t.$flags$,
            i = Le("attachStyles", t.$tagName$),
            s = Qs(h.shadowDom && Jo && e.shadowRoot ? e.shadowRoot : e.getRootNode(), t, o.$modeName$);
        (h.shadowDom || h.scoped) && h.cssAnnotations && (n & 10 && n & 2 || n & 128) && (e["s-sc"] = s, e.classList.add(s + "-h")), i()
    },
    la = (o, t) => "sc-" + (h.mode && t && o.$flags$ & 32 ? o.$tagName$ + "-" + t : o.$tagName$),
    ev = o => o.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{"),
    ov = () => {
        if (!at.document) return;
        let o = at.document.querySelectorAll(`[${Zn}]`),
            t = 0;
        for (; t < o.length; t++) U3(o[t].getAttribute(Zn), ev(o[t].innerHTML), !0)
    },
    v3 = (o, t, e, n, i, s, a) => {
        if (e === n) return;
        let r = i3(o, t),
            l = t.toLowerCase();
        if (h.vdomClass && t === "class") {
            let c = o.classList,
                d = f3(e),
                p = f3(n);
            h.hydrateClientSide && o["s-si"] && a ? (p.push(o["s-si"]), d.forEach(g => {
                g.startsWith(o["s-si"]) && p.push(g)
            }), p = [...new Set(p)], c.add(...p)) : (c.remove(...d.filter(g => g && !p.includes(g))), c.add(...p.filter(g => g && !d.includes(g))))
        } else if (h.vdomStyle && t === "style") {
            if (h.updatable)
                for (let c in e)(!n || n[c] == null) && (!h.hydrateServerSide && c.includes("-") ? o.style.removeProperty(c) : o.style[c] = "");
            for (let c in n)(!e || n[c] !== e[c]) && (!h.hydrateServerSide && c.includes("-") ? o.style.setProperty(c, n[c]) : o.style[c] = n[c])
        } else if (!(h.vdomKey && t === "key")) {
            if (h.vdomRef && t === "ref") n && n(o);
            else if (h.vdomListener && (h.lazyLoad ? !r : !o.__lookupSetter__(t)) && t[0] === "o" && t[1] === "n") {
                if (t[2] === "-" ? t = t.slice(3) : i3(at, l) ? t = l.slice(2) : t = l[2] + t.slice(3), e || n) {
                    let c = t.endsWith(q3);
                    t = t.replace(iv, ""), e && st.rel(o, t, e, c), n && st.ael(o, t, n, c)
                }
            } else if (h.vdomPropOrAttr) {
                let c = oa(n);
                if ((r || c && n !== null) && !i) try {
                    if (o.tagName.includes("-")) o[t] !== n && (o[t] = n);
                    else {
                        let p = n ? ? "";
                        t === "list" ? r = !1 : (e == null || o[t] != p) && (typeof o.__lookupSetter__(t) == "function" ? o[t] = p : o.setAttribute(t, p))
                    }
                } catch {}
                let d = !1;
                h.vdomXlink && l !== (l = l.replace(/^xlink\:?/, "")) && (t = l, d = !0), n == null || n === !1 ? (n !== !1 || o.getAttribute(t) === "") && (h.vdomXlink && d ? o.removeAttributeNS(r3, t) : o.removeAttribute(t)) : (!r || s & 4 || i) && !c && o.nodeType === 1 && (n = n === !0 ? "" : n, h.vdomXlink && d ? o.setAttributeNS(r3, t, n) : o.setAttribute(t, n))
            }
        }
    },
    nv = /\s/,
    f3 = o => (typeof o == "object" && o && "baseVal" in o && (o = o.baseVal), !o || typeof o != "string" ? [] : o.split(nv)),
    q3 = "Capture",
    iv = new RegExp(q3 + "$"),
    Js = (o, t, e, n) => {
        let i = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$,
            s = o && o.$attrs$ || {},
            a = t.$attrs$ || {};
        if (h.updatable)
            for (let r of w3(Object.keys(s))) r in a || v3(i, r, s[r], void 0, e, t.$flags$, n);
        for (let r of w3(Object.keys(a))) v3(i, r, s[r], a[r], e, t.$flags$, n)
    };

function w3(o) {
    return o.includes("ref") ? [...o.filter(t => t !== "ref"), "ref"] : o
}
var y1, L1, Ie, Kn = !1,
    E1 = !1,
    T1 = !1,
    Rt = !1,
    B1 = (o, t, e) => {
        var n;
        let i = t.$children$[e],
            s = 0,
            a, r, l;
        if (h.slotRelocation && !Kn && (T1 = !0, i.$tag$ === "slot" && (i.$flags$ |= i.$children$ ? 2 : 1)), h.isDev && i.$elm$ && M1(`The JSX ${i.$text$!==null?`"${i.$text$}" text`:`"${i.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`), h.vdomText && i.$text$ !== null) a = i.$elm$ = at.document.createTextNode(i.$text$);
        else if (h.slotRelocation && i.$flags$ & 1) a = i.$elm$ = h.isDebug || h.hydrateServerSide ? av(i) : at.document.createTextNode(""), h.vdomAttribute && Js(null, i, Rt);
        else {
            if (h.svg && !Rt && (Rt = i.$tag$ === "svg"), !at.document) throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.");
            if (a = i.$elm$ = h.svg ? at.document.createElementNS(Rt ? Sg : Ag, !Kn && h.slotRelocation && i.$flags$ & 2 ? "slot-fb" : i.$tag$) : at.document.createElement(!Kn && h.slotRelocation && i.$flags$ & 2 ? "slot-fb" : i.$tag$), h.svg && Rt && i.$tag$ === "foreignObject" && (Rt = !1), h.vdomAttribute && Js(null, i, Rt), h.scoped && Ug(y1) && a["s-si"] !== y1 && a.classList.add(a["s-si"] = y1), i.$children$)
                for (s = 0; s < i.$children$.length; ++s) r = B1(o, i, s), r && a.appendChild(r);
            h.svg && (i.$tag$ === "svg" ? Rt = !1 : a.tagName === "foreignObject" && (Rt = !0))
        }
        return a["s-hn"] = Ie, h.slotRelocation && i.$flags$ & 3 && (a["s-sr"] = !0, a["s-cr"] = L1, a["s-sn"] = i.$name$ || "", a["s-rf"] = (n = i.$attrs$) == null ? void 0 : n.ref, B3(a), l = o && o.$children$ && o.$children$[e], l && l.$tag$ === i.$tag$ && o.$elm$ && (h.experimentalSlotFixes ? W3(o.$elm$) : ti(o.$elm$, !1)), h.scoped && K3(L1, a, t.$elm$, o ? .$elm$)), a
    },
    W3 = o => {
        st.$flags$ |= 1;
        let t = o.closest(Ie.toLowerCase());
        if (t != null) {
            let e = Array.from(t.__childNodes || t.childNodes).find(i => i["s-cr"]),
                n = Array.from(o.__childNodes || o.childNodes);
            for (let i of e ? n.reverse() : n) i["s-sh"] != null && (me(t, i, e ? ? null), i["s-sh"] = void 0, T1 = !0)
        }
        st.$flags$ &= -2
    },
    ti = (o, t) => {
        st.$flags$ |= 1;
        let e = Array.from(o.__childNodes || o.childNodes);
        if (o["s-sr"] && h.experimentalSlotFixes) {
            let n = o;
            for (; n = n.nextSibling;) n && n["s-sn"] === o["s-sn"] && n["s-sh"] === Ie && e.push(n)
        }
        for (let n = e.length - 1; n >= 0; n--) {
            let i = e[n];
            i["s-hn"] !== Ie && i["s-ol"] && (me(ei(i).parentNode, i, ei(i)), i["s-ol"].remove(), i["s-ol"] = void 0, i["s-sh"] = void 0, T1 = !0), t && ti(i, t)
        }
        st.$flags$ &= -2
    },
    G3 = (o, t, e, n, i, s) => {
        let a = h.slotRelocation && o["s-cr"] && o["s-cr"].parentNode || o,
            r;
        for (h.shadowDom && a.shadowRoot && a.tagName === Ie && (a = a.shadowRoot); i <= s; ++i) n[i] && (r = B1(null, e, i), r && (n[i].$elm$ = r, me(a, r, h.slotRelocation ? ei(t) : t)))
    },
    X3 = (o, t, e) => {
        for (let n = t; n <= e; ++n) {
            let i = o[n];
            if (i) {
                let s = i.$elm$;
                Z3(i), s && (h.slotRelocation && (E1 = !0, s["s-ol"] ? s["s-ol"].remove() : ti(s, !0)), s.remove())
            }
        }
    },
    sv = (o, t, e, n, i = !1) => {
        let s = 0,
            a = 0,
            r = 0,
            l = 0,
            c = t.length - 1,
            d = t[0],
            p = t[c],
            g = n.length - 1,
            m = n[0],
            f = n[g],
            x, k;
        for (; s <= c && a <= g;)
            if (d == null) d = t[++s];
            else if (p == null) p = t[--c];
        else if (m == null) m = n[++a];
        else if (f == null) f = n[--g];
        else if (x1(d, m, i)) Zo(d, m, i), d = t[++s], m = n[++a];
        else if (x1(p, f, i)) Zo(p, f, i), p = t[--c], f = n[--g];
        else if (x1(d, f, i)) h.slotRelocation && (d.$tag$ === "slot" || f.$tag$ === "slot") && ti(d.$elm$.parentNode, !1), Zo(d, f, i), me(o, d.$elm$, p.$elm$.nextSibling), d = t[++s], f = n[--g];
        else if (x1(p, m, i)) h.slotRelocation && (d.$tag$ === "slot" || f.$tag$ === "slot") && ti(p.$elm$.parentNode, !1), Zo(p, m, i), me(o, p.$elm$, d.$elm$), p = t[--c], m = n[++a];
        else {
            if (r = -1, h.vdomKey) {
                for (l = s; l <= c; ++l)
                    if (t[l] && t[l].$key$ !== null && t[l].$key$ === m.$key$) {
                        r = l;
                        break
                    }
            }
            h.vdomKey && r >= 0 ? (k = t[r], k.$tag$ !== m.$tag$ ? x = B1(t && t[a], e, r) : (Zo(k, m, i), t[r] = void 0, x = k.$elm$), m = n[++a]) : (x = B1(t && t[a], e, a), m = n[++a]), x && (h.slotRelocation ? me(ei(d.$elm$).parentNode, x, ei(d.$elm$)) : me(d.$elm$.parentNode, x, d.$elm$))
        }
        s > c ? G3(o, n[g + 1] == null ? null : n[g + 1].$elm$, e, n, a, g) : h.updatable && a > g && X3(t, s, c)
    },
    x1 = (o, t, e = !1) => o.$tag$ === t.$tag$ ? h.slotRelocation && o.$tag$ === "slot" ? o.$name$ === t.$name$ : h.vdomKey && !e ? o.$key$ === t.$key$ : (e && !o.$key$ && t.$key$ && (o.$key$ = t.$key$), !0) : !1,
    ei = o => o && o["s-ol"] || o,
    Zo = (o, t, e = !1) => {
        let n = t.$elm$ = o.$elm$,
            i = o.$children$,
            s = t.$children$,
            a = t.$tag$,
            r = t.$text$,
            l;
        !h.vdomText || r === null ? (h.svg && (Rt = a === "svg" ? !0 : a === "foreignObject" ? !1 : Rt), (h.vdomAttribute || h.reflect) && (h.slot && a === "slot" && !Kn && h.experimentalSlotFixes && o.$name$ !== t.$name$ && (t.$elm$["s-sn"] = t.$name$ || "", W3(t.$elm$.parentElement)), Js(o, t, Rt, e)), h.updatable && i !== null && s !== null ? sv(n, i, t, s, e) : s !== null ? (h.updatable && h.vdomText && o.$text$ !== null && (n.textContent = ""), G3(n, null, t, s, 0, s.length - 1)) : !e && h.updatable && i !== null && X3(i, 0, i.length - 1), h.svg && Rt && a === "svg" && (Rt = !1)) : h.vdomText && h.slotRelocation && (l = n["s-cr"]) ? l.parentNode.textContent = r : h.vdomText && o.$text$ !== r && (n.data = r)
    },
    Se = [],
    Y3 = o => {
        let t, e, n, i = o.__childNodes || o.childNodes;
        for (let s of i) {
            if (s["s-sr"] && (t = s["s-cr"]) && t.parentNode) {
                e = t.parentNode.__childNodes || t.parentNode.childNodes;
                let a = s["s-sn"];
                for (n = e.length - 1; n >= 0; n--)
                    if (t = e[n], !t["s-cn"] && !t["s-nr"] && t["s-hn"] !== s["s-hn"] && (!h.experimentalSlotFixes || !t["s-sh"] || t["s-sh"] !== s["s-hn"]))
                        if (d3(t, a)) {
                            let r = Se.find(l => l.$nodeToRelocate$ === t);
                            E1 = !0, t["s-sn"] = t["s-sn"] || a, r ? (r.$nodeToRelocate$["s-sh"] = s["s-hn"], r.$slotRefNode$ = s) : (t["s-sh"] = s["s-hn"], Se.push({
                                $slotRefNode$: s,
                                $nodeToRelocate$: t
                            })), t["s-sr"] && Se.map(l => {
                                d3(l.$nodeToRelocate$, t["s-sn"]) && (r = Se.find(c => c.$nodeToRelocate$ === t), r && !l.$slotRefNode$ && (l.$slotRefNode$ = r.$slotRefNode$))
                            })
                        } else Se.some(r => r.$nodeToRelocate$ === t) || Se.push({
                            $nodeToRelocate$: t
                        })
            }
            s.nodeType === 1 && Y3(s)
        }
    },
    Z3 = o => {
        h.vdomRef && (o.$attrs$ && o.$attrs$.ref && o.$attrs$.ref(null), o.$children$ && o.$children$.map(Z3))
    },
    me = (o, t, e) => {
        if (h.scoped && typeof t["s-sn"] == "string" && t["s-sr"] && t["s-cr"]) K3(t["s-cr"], t, o, t.parentElement);
        else if (h.experimentalSlotFixes && typeof t["s-sn"] == "string") {
            o.getRootNode().nodeType !== 11 && T3(t), o.insertBefore(t, e);
            let {
                slotNode: n
            } = ia(t);
            return n && H1(n), t
        }
        return h.experimentalSlotFixes && o.__insertBefore ? o.__insertBefore(t, e) : o ? .insertBefore(t, e)
    };

function K3(o, t, e, n) {
    var i, s;
    let a;
    if (o && typeof t["s-sn"] == "string" && t["s-sr"] && o.parentNode && o.parentNode["s-sc"] && (a = t["s-si"] || o.parentNode["s-sc"])) {
        let r = t["s-sn"],
            l = t["s-hn"];
        if ((i = e.classList) == null || i.add(a + "-s"), n && ((s = n.classList) != null && s.contains(a + "-s"))) {
            let c = (n.__childNodes || n.childNodes)[0],
                d = !1;
            for (; c;) {
                if (c["s-sn"] !== r && c["s-hn"] === l && c["s-sr"]) {
                    d = !0;
                    break
                }
                c = c.nextSibling
            }
            d || n.classList.remove(a + "-s")
        }
    }
}
var x3 = (o, t, e = !1) => {
        var n, i, s, a, r;
        let l = o.$hostElement$,
            c = o.$cmpMeta$,
            d = o.$vnode$ || tn(null, null),
            p = Gs(t) ? t : on(null, null, t);
        if (Ie = l.tagName, h.isDev && Array.isArray(t) && t.some(Gs)) throw new Error(`The <Host> must be the single root component.
Looks like the render() function of "${Ie.toLowerCase()}" is returning an array that contains the <Host>.

The render() function should look like this instead:

render() {
  // Do not return an array
  return (
    <Host>{content}</Host>
  );
}
  `);
        if (h.reflect && c.$attrsToReflect$ && (p.$attrs$ = p.$attrs$ || {}, c.$attrsToReflect$.map(([g, m]) => p.$attrs$[m] = l[g])), e && p.$attrs$)
            for (let g of Object.keys(p.$attrs$)) l.hasAttribute(g) && !["key", "ref", "style", "class"].includes(g) && (p.$attrs$[g] = l[g]);
        if (p.$tag$ = null, p.$flags$ |= 4, o.$vnode$ = p, p.$elm$ = d.$elm$ = h.shadowDom && l.shadowRoot || l, (h.scoped || h.shadowDom) && (y1 = l["s-sc"]), Kn = Jo && !!(c.$flags$ & 1) && !(c.$flags$ & 128), h.slotRelocation && (L1 = l["s-cr"], E1 = !1), Zo(d, p, e), h.slotRelocation) {
            if (st.$flags$ |= 1, T1) {
                Y3(p.$elm$);
                for (let g of Se) {
                    let m = g.$nodeToRelocate$;
                    if (!m["s-ol"] && at.document) {
                        let f = h.isDebug || h.hydrateServerSide ? rv(m) : at.document.createTextNode("");
                        f["s-nr"] = m, me(m.parentNode, m["s-ol"] = f, m)
                    }
                }
                for (let g of Se) {
                    let m = g.$nodeToRelocate$,
                        f = g.$slotRefNode$;
                    if (f) {
                        let x = f.parentNode,
                            k = f.nextSibling;
                        if (!h.hydrateServerSide && (!h.experimentalSlotFixes || k && k.nodeType === 1)) {
                            let D = (n = m["s-ol"]) == null ? void 0 : n.previousSibling;
                            for (; D;) {
                                let T = (i = D["s-nr"]) != null ? i : null;
                                if (T && T["s-sn"] === m["s-sn"] && x === (T.__parentNode || T.parentNode)) {
                                    for (T = T.nextSibling; T === m || T ? .["s-sr"];) T = T ? .nextSibling;
                                    if (!T || !T["s-nr"]) {
                                        k = T;
                                        break
                                    }
                                }
                                D = D.previousSibling
                            }
                        }
                        let B = m.__parentNode || m.parentNode,
                            j = m.__nextSibling || m.nextSibling;
                        (!k && x !== B || j !== k) && m !== k && (!h.experimentalSlotFixes && !m["s-hn"] && m["s-ol"] && (m["s-hn"] = m["s-ol"].parentNode.nodeName), me(x, m, k), m.nodeType === 1 && m.tagName !== "SLOT-FB" && (m.hidden = (s = m["s-ih"]) != null ? s : !1)), m && typeof f["s-rf"] == "function" && f["s-rf"](f)
                    } else m.nodeType === 1 && (e && (m["s-ih"] = (a = m.hidden) != null ? a : !1), m.hidden = !0)
                }
            }
            E1 && j1(p.$elm$), st.$flags$ &= -2, Se.length = 0
        }
        if (h.experimentalScopedSlotChanges && c.$flags$ & 2) {
            let g = p.$elm$.__childNodes || p.$elm$.childNodes;
            for (let m of g) m["s-hn"] !== Ie && !m["s-sh"] && (e && m["s-ih"] == null && (m["s-ih"] = (r = m.hidden) != null ? r : !1), m.hidden = !0)
        }
        L1 = void 0
    },
    av = o => {
        var t;
        return (t = at.document) == null ? void 0 : t.createComment(`<slot${o.$name$?' name="'+o.$name$+'"':""}> (host=${Ie.toLowerCase()})`)
    },
    rv = o => {
        var t;
        return (t = at.document) == null ? void 0 : t.createComment("org-location for " + (o.localName ? `<${o.localName}> (host=${o["s-hn"]})` : `[${o.textContent}]`))
    },
    Q3 = (o, t) => {
        if (h.asyncLoading && t && !o.$onRenderResolve$ && t["s-p"]) {
            let e = t["s-p"].push(new Promise(n => o.$onRenderResolve$ = () => {
                t["s-p"].splice(e - 1, 1), n()
            }))
        }
    },
    ca = (o, t) => {
        if (h.taskQueue && h.updatable && (o.$flags$ |= 16), h.asyncLoading && o.$flags$ & 4) {
            o.$flags$ |= 512;
            return
        }
        Q3(o, o.$ancestorComponent$);
        let e = () => lv(o, t);
        return h.taskQueue ? Ng(e) : e()
    },
    lv = (o, t) => {
        let e = o.$hostElement$,
            n = Le("scheduleUpdate", o.$cmpMeta$.$tagName$),
            i = h.lazyLoad ? o.$lazyInstance$ : e;
        if (!i) throw new Error(`Can't render component <${e.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
        let s;
        return t ? (h.lazyLoad && h.hostListener && (o.$flags$ |= 256, o.$queuedListeners$ && (o.$queuedListeners$.map(([a, r]) => Ae(i, a, r, e)), o.$queuedListeners$ = void 0)), Qo(e, "componentWillLoad"), s = Ae(i, "componentWillLoad", void 0, e)) : (Qo(e, "componentWillUpdate"), s = Ae(i, "componentWillUpdate", void 0, e)), Qo(e, "componentWillRender"), s = b3(s, () => Ae(i, "componentWillRender", void 0, e)), n(), b3(s, () => dv(o, i, t))
    },
    b3 = (o, t) => cv(o) ? o.then(t).catch(e => {
        console.error(e), t()
    }) : t(),
    cv = o => o instanceof Promise || o && o.then && typeof o.then == "function",
    dv = (o, t, e) => w(void 0, null, function*() {
        var n;
        let i = o.$hostElement$,
            s = Le("update", o.$cmpMeta$.$tagName$),
            a = i["s-rc"];
        h.style && e && tv(o);
        let r = Le("render", o.$cmpMeta$.$tagName$);
        if (h.isDev && (o.$flags$ |= 1024), h.hydrateServerSide ? yield y3(o, t, i, e): y3(o, t, i, e), h.isDev && (o.$renderCount$ = o.$renderCount$ === void 0 ? 1 : o.$renderCount$ + 1, o.$flags$ &= -1025), h.hydrateServerSide) try {
            J3(i), e && (o.$cmpMeta$.$flags$ & 1 ? i["s-en"] = "" : o.$cmpMeta$.$flags$ & 2 && (i["s-en"] = "c"))
        } catch (l) {
            Ee(l, i)
        }
        if (h.asyncLoading && a && (a.map(l => l()), i["s-rc"] = void 0), r(), s(), h.asyncLoading) {
            let l = (n = i["s-p"]) != null ? n : [],
                c = () => M3(o);
            l.length === 0 ? c() : (Promise.all(l).then(c), o.$flags$ |= 4, l.length = 0)
        } else M3(o)
    }),
    k3 = null,
    y3 = (o, t, e, n) => {
        let i = !!h.allRenderFn,
            s = !!h.lazyLoad,
            a = !!h.taskQueue,
            r = !!h.updatable;
        try {
            if (k3 = t, t = (i || t.render) && t.render(), r && a && (o.$flags$ &= -17), (r || s) && (o.$flags$ |= 2), h.hasRenderFn || h.reflect)
                if (h.vdomRender || h.reflect) {
                    if (h.hydrateServerSide) return Promise.resolve(t).then(l => x3(o, l, n));
                    x3(o, t, n)
                } else {
                    let l = e.shadowRoot;
                    o.$cmpMeta$.$flags$ & 1 ? l.textContent = t : e.textContent = t
                }
        } catch (l) {
            Ee(l, o.$hostElement$)
        }
        return k3 = null, null
    };
var M3 = o => {
    let t = o.$cmpMeta$.$tagName$,
        e = o.$hostElement$,
        n = Le("postUpdate", t),
        i = h.lazyLoad ? o.$lazyInstance$ : e,
        s = o.$ancestorComponent$;
    h.isDev && (o.$flags$ |= 1024), Ae(i, "componentDidRender", void 0, e), h.isDev && (o.$flags$ &= -1025), Qo(e, "componentDidRender"), o.$flags$ & 64 ? (h.isDev && (o.$flags$ |= 1024), Ae(i, "componentDidUpdate", void 0, e), h.isDev && (o.$flags$ &= -1025), Qo(e, "componentDidUpdate"), n()) : (o.$flags$ |= 64, h.asyncLoading && h.cssAnnotations && pv(e), h.isDev && (o.$flags$ |= 2048), Ae(i, "componentDidLoad", void 0, e), h.isDev && (o.$flags$ &= -2049), Qo(e, "componentDidLoad"), n(), h.asyncLoading && (o.$onReadyResolve$(e), s || hv(t))), h.method && h.lazyLoad && o.$onInstanceResolve$(e), h.asyncLoading && (o.$onRenderResolve$ && (o.$onRenderResolve$(), o.$onRenderResolve$ = void 0), o.$flags$ & 512 && D1(() => ca(o, !1)), o.$flags$ &= -517)
};
var hv = o => {
        h.asyncQueue && (st.$flags$ |= 2), D1(() => N3(at, "appload", {
            detail: {
                namespace: w1
            }
        })), h.profile && performance.measure && performance.measure(`[Stencil] ${w1} initial load (by ${o})`, "st:app:start")
    },
    Ae = (o, t, e, n) => {
        if (o && o[t]) try {
            return o[t](e)
        } catch (i) {
            Ee(i, n)
        }
    },
    Qo = (o, t) => {
        h.lifecycleDOMEvents && N3(o, "stencil_" + t, {
            bubbles: !0,
            composed: !0,
            detail: {
                namespace: w1
            }
        })
    },
    pv = o => {
        var t, e;
        return h.hydratedClass ? o.classList.add((t = h.hydratedSelectorName) != null ? t : "hydrated") : h.hydratedAttribute ? o.setAttribute((e = h.hydratedSelectorName) != null ? e : "hydrated", "") : void 0
    },
    J3 = o => {
        let t = o.children;
        if (t != null)
            for (let e = 0, n = t.length; e < n; e++) {
                let i = t[e];
                typeof i.connectedCallback == "function" && i.connectedCallback(), J3(i)
            }
    },
    C3 = (o, t) => ue(o).$instanceValues$.get(t),
    b1 = (o, t, e, n) => {
        let i = ue(o);
        if (h.lazyLoad && !i) throw new Error(`Couldn't find host element for "${n.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`);
        let s = h.lazyLoad ? i.$hostElement$ : o,
            a = i.$instanceValues$.get(t),
            r = i.$flags$,
            l = h.lazyLoad ? i.$lazyInstance$ : s;
        e = Ks(e, n.$members$[t][0]);
        let c = Number.isNaN(a) && Number.isNaN(e),
            d = e !== a && !c;
        if ((!h.lazyLoad || !(r & 8) || a === void 0) && d && (i.$instanceValues$.set(t, e), h.isDev && (i.$flags$ & 1024 ? C1(`The state/prop "${t}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`, `
Element`, s, `
New value`, e, `
Old value`, a) : i.$flags$ & 2048 && C1(`The state/prop "${t}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`, `
Element`, s, `
New value`, e, `
Old value`, a)), !h.lazyLoad || l)) {
            if (h.watchCallback && n.$watchers$ && r & 128) {
                let p = n.$watchers$[t];
                p && p.map(g => {
                    try {
                        l[g](e, a, t)
                    } catch (m) {
                        Ee(m, s)
                    }
                })
            }
            if (h.updatable && (r & 18) === 2) {
                if (l.componentShouldUpdate && l.componentShouldUpdate(e, a, t) === !1) return;
                ca(i, !1)
            }
        }
    },
    t6 = (o, t, e) => {
        var n, i;
        let s = o.prototype;
        if (h.isTesting) {
            if (s.__stencilAugmented) return;
            s.__stencilAugmented = !0
        }
        if (h.formAssociated && t.$flags$ & 64 && e & 1 && Og.forEach(a => {
                let r = s[a];
                Object.defineProperty(s, a, {
                    value(...l) {
                        let c = ue(this),
                            d = h.lazyLoad ? c.$lazyInstance$ : this;
                        if (!d) c.$onReadyPromise$.then(p => {
                            let g = p[a];
                            typeof g == "function" && g.call(p, ...l)
                        });
                        else {
                            let p = h.lazyLoad ? d[a] : r;
                            typeof p == "function" && p.call(d, ...l)
                        }
                    }
                })
            }), h.member && t.$members$ || h.watchCallback && (t.$watchers$ || o.watchers)) {
            h.watchCallback && o.watchers && !t.$watchers$ && (t.$watchers$ = o.watchers);
            let a = Object.entries((n = t.$members$) != null ? n : {});
            if (a.map(([r, [l]]) => {
                    if ((h.prop || h.state) && (l & 31 || (!h.lazyLoad || e & 2) && l & 32)) {
                        let {
                            get: c,
                            set: d
                        } = Object.getOwnPropertyDescriptor(s, r) || {};
                        c && (t.$members$[r][0] |= 2048), d && (t.$members$[r][0] |= 4096), (e & 1 || !c) && Object.defineProperty(s, r, {
                            get() {
                                if (h.lazyLoad) {
                                    if ((t.$members$[r][0] & 2048) === 0) return C3(this, r);
                                    let p = ue(this),
                                        g = p ? p.$lazyInstance$ : s;
                                    return g ? g[r] : void 0
                                }
                                if (!h.lazyLoad) return c ? c.apply(this) : C3(this, r)
                            },
                            configurable: !0,
                            enumerable: !0
                        }), Object.defineProperty(s, r, {
                            set(p) {
                                let g = ue(this);
                                if (h.isDev && (e & 1) === 0 && (t.$members$[r][0] & 4096) === 0 && (g && g.$flags$ & 8) === 0 && (l & 31) !== 0 && (l & 1024) === 0 && C1(`@Prop() "${r}" on <${t.$tagName$}> is immutable but was modified from within the component.
More information: https://stenciljs.com/docs/properties#prop-mutability`), d) {
                                    let m = l & 32 ? this[r] : g.$hostElement$[r];
                                    typeof m > "u" && g.$instanceValues$.get(r) ? p = g.$instanceValues$.get(r) : !g.$instanceValues$.get(r) && m && g.$instanceValues$.set(r, m), d.apply(this, [Ks(p, l)]), p = l & 32 ? this[r] : g.$hostElement$[r], b1(this, r, p, t);
                                    return
                                }
                                if (!h.lazyLoad) {
                                    b1(this, r, p, t);
                                    return
                                }
                                if (h.lazyLoad) {
                                    if ((e & 1) === 0 || (t.$members$[r][0] & 4096) === 0) {
                                        b1(this, r, p, t), e & 1 && !g.$lazyInstance$ && g.$onReadyPromise$.then(() => {
                                            t.$members$[r][0] & 4096 && g.$lazyInstance$[r] !== g.$instanceValues$.get(r) && (g.$lazyInstance$[r] = p)
                                        });
                                        return
                                    }
                                    let m = () => {
                                        let f = g.$lazyInstance$[r];
                                        !g.$instanceValues$.get(r) && f && g.$instanceValues$.set(r, f), g.$lazyInstance$[r] = Ks(p, l), b1(this, r, g.$lazyInstance$[r], t)
                                    };
                                    g.$lazyInstance$ ? m() : g.$onReadyPromise$.then(() => m())
                                }
                            }
                        })
                    } else h.lazyLoad && h.method && e & 1 && l & 64 && Object.defineProperty(s, r, {
                        value(...c) {
                            var d;
                            let p = ue(this);
                            return (d = p ? .$onInstancePromise$) == null ? void 0 : d.then(() => {
                                var g;
                                return (g = p.$lazyInstance$) == null ? void 0 : g[r](...c)
                            })
                        }
                    })
                }), h.observeAttribute && (!h.lazyLoad || e & 1)) {
                let r = new Map;
                s.attributeChangedCallback = function(l, c, d) {
                    st.jmp(() => {
                        var p;
                        let g = r.get(l);
                        if (this.hasOwnProperty(g) && h.lazyLoad) d = this[g], delete this[g];
                        else {
                            if (s.hasOwnProperty(g) && typeof this[g] == "number" && this[g] == d) return;
                            if (g == null) {
                                let f = ue(this),
                                    x = f ? .$flags$;
                                if (x && !(x & 8) && x & 128 && d !== c) {
                                    let k = h.lazyLoad ? f.$hostElement$ : this,
                                        B = h.lazyLoad ? f.$lazyInstance$ : k,
                                        j = (p = t.$watchers$) == null ? void 0 : p[l];
                                    j ? .forEach(D => {
                                        B[D] != null && B[D].call(B, d, c, l)
                                    })
                                }
                                return
                            }
                        }
                        let m = Object.getOwnPropertyDescriptor(s, g);
                        d = d === null && typeof this[g] == "boolean" ? !1 : d, d !== this[g] && (!m.get || m.set) && (this[g] = d)
                    })
                }, o.observedAttributes = Array.from(new Set([...Object.keys((i = t.$watchers$) != null ? i : {}), ...a.filter(([l, c]) => c[0] & 15).map(([l, c]) => {
                    var d;
                    let p = c[1] || l;
                    return r.set(p, l), h.reflect && c[0] & 512 && ((d = t.$attrsToReflect$) == null || d.push([l, p])), p
                })]))
            }
        }
        return o
    },
    z3 = (o, t, e, n) => w(void 0, null, function*() {
        let i;
        if ((t.$flags$ & 32) === 0) {
            t.$flags$ |= 32;
            let r = e.$lazyBundleId$;
            if (h.lazyLoad && r) {
                let l = Bg(e, t, n);
                if (l && "then" in l) {
                    let d = gm(`st:load:${e.$tagName$}:${t.$modeName$}`, `[Stencil] Load module for <${e.$tagName$}>`);
                    i = yield l, d()
                } else i = l;
                if (!i) throw new Error(`Constructor for "${e.$tagName$}#${t.$modeName$}" was not found`);
                h.member && !i.isProxied && (h.watchCallback && (e.$watchers$ = i.watchers), t6(i, e, 2), i.isProxied = !0);
                let c = Le("createInstance", e.$tagName$);
                h.member && (t.$flags$ |= 8);
                try {
                    new i(t)
                } catch (d) {
                    Ee(d, o)
                }
                h.member && (t.$flags$ &= -9), h.watchCallback && (t.$flags$ |= 128), c(), ta(t.$lazyInstance$, o)
            } else {
                i = o.constructor;
                let l = o.localName;
                customElements.whenDefined(l).then(() => t.$flags$ |= 128)
            }
            if (h.style && i && i.style) {
                let l;
                typeof i.style == "string" ? l = i.style : h.mode && typeof i.style != "string" && (t.$modeName$ = Jm(o), t.$modeName$ && (l = i.style[t.$modeName$]), h.hydrateServerSide && t.$modeName$ && o.setAttribute("s-mode", t.$modeName$));
                let c = la(e, t.$modeName$);
                if (!z1.has(c)) {
                    let d = Le("registerStyles", e.$tagName$);
                    h.hydrateServerSide && h.shadowDom && e.$flags$ & 128 && (l = Qm(l, c, !0)), U3(c, l, !!(e.$flags$ & 1)), d()
                }
            }
        }
        let s = t.$ancestorComponent$,
            a = () => ca(t, !0);
        h.asyncLoading && s && s["s-rc"] ? s["s-rc"].push(a) : a()
    }),
    ta = (o, t) => {
        h.lazyLoad && Ae(o, "connectedCallback", void 0, t)
    },
    uv = o => {
        if ((st.$flags$ & 1) === 0) {
            let t = ue(o),
                e = t.$cmpMeta$,
                n = Le("connectedCallback", e.$tagName$);
            if (h.hostListenerTargetParent && ea(o, t, e.$listeners$, !0), t.$flags$ & 1) ea(o, t, e.$listeners$, !1), t ? .$lazyInstance$ ? ta(t.$lazyInstance$, o) : t ? .$onReadyPromise$ && t.$onReadyPromise$.then(() => ta(t.$lazyInstance$, o));
            else {
                t.$flags$ |= 1;
                let i;
                if (h.hydrateClientSide && (i = o.getAttribute(Qn), i)) {
                    if (h.shadowDom && Jo && e.$flags$ & 1) {
                        let s = h.mode ? Qs(o.shadowRoot, e, o.getAttribute("s-mode")) : Qs(o.shadowRoot, e);
                        o.classList.remove(s + "-h", s + "-s")
                    } else if (h.scoped && e.$flags$ & 2) {
                        let s = la(e, h.mode ? o.getAttribute("s-mode") : void 0);
                        o["s-sc"] = s
                    }
                    wm(o, e.$tagName$, i, t)
                }
                if (h.slotRelocation && !i && (h.hydrateServerSide || (h.slot || h.shadowDom) && e.$flags$ & 12) && gv(o), h.asyncLoading) {
                    let s = o;
                    for (; s = s.parentNode || s.host;)
                        if (h.hydrateClientSide && s.nodeType === 1 && s.hasAttribute("s-id") && s["s-p"] || s["s-p"]) {
                            Q3(t, t.$ancestorComponent$ = s);
                            break
                        }
                }
                h.prop && !h.hydrateServerSide && e.$members$ && Object.entries(e.$members$).map(([s, [a]]) => {
                    if (a & 31 && o.hasOwnProperty(s)) {
                        let r = o[s];
                        delete o[s], o[s] = r
                    }
                }), h.initializeNextTick ? D1(() => z3(o, t, e)) : z3(o, t, e)
            }
            n()
        }
    },
    gv = o => {
        if (!at.document) return;
        let t = o["s-cr"] = at.document.createComment(h.isDebug ? `content-ref (host=${o.localName})` : "");
        t["s-cn"] = !0, me(o, t, o.firstChild)
    },
    qs = (o, t) => {
        h.lazyLoad && Ae(o, "disconnectedCallback", void 0, t || o)
    },
    mv = o => w(void 0, null, function*() {
        if ((st.$flags$ & 1) === 0) {
            let t = ue(o);
            h.hostListener && t.$rmListeners$ && (t.$rmListeners$.map(e => e()), t.$rmListeners$ = void 0), h.lazyLoad ? t ? .$lazyInstance$ ? qs(t.$lazyInstance$, o) : t ? .$onReadyPromise$ && t.$onReadyPromise$.then(() => qs(t.$lazyInstance$, o)) : qs(o)
        }
        Ko.has(o) && Ko.delete(o), o.shadowRoot && Ko.has(o.shadowRoot) && Ko.delete(o.shadowRoot)
    });
var e6 = (o, t) => {
    let e = {
        $flags$: t[0],
        $tagName$: t[1]
    };
    h.member && (e.$members$ = t[2]), h.hostListener && (e.$listeners$ = t[3]), h.watchCallback && (e.$watchers$ = o.$watchers$), h.reflect && (e.$attrsToReflect$ = []), h.shadowDom && !Jo && e.$flags$ & 1 && (e.$flags$ |= 8), h.experimentalSlotFixes ? h.scoped && e.$flags$ & 2 && Qg(o.prototype) : (h.slotChildNodesFix && H3(o.prototype), h.cloneNodeFix && D3(o.prototype), h.appendChildSlotFix && j3(o.prototype), h.scopedSlotTextContentFix && e.$flags$ & 2 && $3(o.prototype)), h.hydrateClientSide && h.shadowDom && ov();
    let n = o.prototype.connectedCallback,
        i = o.prototype.disconnectedCallback;
    return Object.assign(o.prototype, {
        __hasHostListenerAttached: !1,
        __registerHost() {
            Lg(this, e)
        },
        connectedCallback() {
            if (!this.__hasHostListenerAttached) {
                let s = ue(this);
                ea(this, s, e.$listeners$, !1), this.__hasHostListenerAttached = !0
            }
            uv(this), n && n.call(this)
        },
        disconnectedCallback() {
            mv(this), i && i.call(this)
        },
        __attachShadow() {
            if (Jo) {
                if (!this.shadowRoot) h.shadowDelegatesFocus ? this.attachShadow({
                    mode: "open",
                    delegatesFocus: !!(e.$flags$ & 16)
                }) : this.attachShadow({
                    mode: "open"
                });
                else if (this.shadowRoot.mode !== "open") throw new Error(`Unable to re-use existing shadow root for ${e.$tagName$}! Mode is set to ${this.shadowRoot.mode} but Stencil only supports open shadow roots.`)
            } else this.shadowRoot = this
        }
    }), o.is = e.$tagName$, t6(o, e, 3)
};
var ea = (o, t, e, n) => {
        h.hostListener && e && at.document && (h.hostListenerTargetParent && (n ? e = e.filter(([i]) => i & 32) : e = e.filter(([i]) => !(i & 32))), e.map(([i, s, a]) => {
            let r = h.hostListenerTarget ? fv(at.document, o, i) : o,
                l = vv(t, a),
                c = wv(i);
            st.ael(r, s, l, c), (t.$rmListeners$ = t.$rmListeners$ || []).push(() => st.rel(r, s, l, c))
        }))
    },
    vv = (o, t) => e => {
        var n;
        try {
            h.lazyLoad ? o.$flags$ & 256 ? (n = o.$lazyInstance$) == null || n[t](e) : (o.$queuedListeners$ = o.$queuedListeners$ || []).push([t, e]) : o.$hostElement$[t](e)
        } catch (i) {
            Ee(i, o.$hostElement$)
        }
    },
    fv = (o, t, e) => h.hostListenerTargetDocument && e & 4 ? o : h.hostListenerTargetWindow && e & 8 ? at : h.hostListenerTargetBody && e & 16 ? o.body : h.hostListenerTargetParent && e & 32 && t.parentElement ? t.parentElement : t,
    wv = o => Rg ? {
        passive: (o & 1) !== 0,
        capture: (o & 2) !== 0
    } : (o & 2) !== 0;
var da, xv = () => {
    if (typeof window > "u") return new Map;
    if (!da) {
        let o = window;
        o.Ionicons = o.Ionicons || {}, da = o.Ionicons.map = o.Ionicons.map || new Map
    }
    return da
};
var o6 = o => {
        let t = ha(o.src);
        return t || (t = pa(o.name, o.icon, o.mode, o.ios, o.md), t ? bv(t, o) : o.icon && (t = ha(o.icon), t || (t = ha(o.icon[o.mode]), t)) ? t : null)
    },
    bv = (o, t) => {
        let e = xv().get(o);
        if (e) return e;
        try {
            return L3(`svg/${o}.svg`)
        } catch {
            console.warn(`[Ionicons Warning]: Could not load icon with name "${o}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, t)
        }
    },
    pa = (o, t, e, n, i) => (e = (e && _1(e)) === "ios" ? "ios" : "md", n && e === "ios" ? o = _1(n) : i && e === "md" ? o = _1(i) : (!o && t && !n6(t) && (o = t), ai(o) && (o = _1(o))), !ai(o) || o.trim() === "" || o.replace(/[a-z]|-|\d/gi, "") !== "" ? null : o),
    ha = o => ai(o) && (o = o.trim(), n6(o)) ? o : null,
    n6 = o => o.length > 0 && /(\/|\.)/.test(o),
    ai = o => typeof o == "string",
    _1 = o => o.toLowerCase(),
    i6 = (o, t = []) => {
        let e = {};
        return t.forEach(n => {
            o.hasAttribute(n) && (o.getAttribute(n) !== null && (e[n] = o.getAttribute(n)), o.removeAttribute(n))
        }), e
    },
    s6 = o => o && o.dir !== "" ? o.dir.toLowerCase() === "rtl" : document ? .dir.toLowerCase() === "rtl";
var kv = o => {
        let t = document.createElement("div");
        t.innerHTML = o;
        for (let n = t.childNodes.length - 1; n >= 0; n--) t.childNodes[n].nodeName.toLowerCase() !== "svg" && t.removeChild(t.childNodes[n]);
        let e = t.firstElementChild;
        if (e && e.nodeName.toLowerCase() === "svg") {
            let n = e.getAttribute("class") || "";
            if (e.setAttribute("class", (n + " s-ion-icon").trim()), r6(e)) return t.innerHTML
        }
        return ""
    },
    r6 = o => {
        if (o.nodeType === 1) {
            if (o.nodeName.toLowerCase() === "script") return !1;
            for (let t = 0; t < o.attributes.length; t++) {
                let e = o.attributes[t].name;
                if (ai(e) && e.toLowerCase().indexOf("on") === 0) return !1
            }
            for (let t = 0; t < o.childNodes.length; t++)
                if (!r6(o.childNodes[t])) return !1
        }
        return !0
    },
    yv = o => o.startsWith("data:image/svg+xml"),
    Mv = o => o.indexOf(";utf8,") !== -1,
    uo = new Map,
    a6 = new Map,
    ua, Cv = (o, t) => {
        let e = a6.get(o);
        if (!e)
            if (typeof fetch < "u" && typeof document < "u")
                if (yv(o) && Mv(o)) {
                    ua || (ua = new DOMParser);
                    let i = ua.parseFromString(o, "text/html").querySelector("svg");
                    return i && uo.set(o, i.outerHTML), Promise.resolve()
                } else e = fetch(o).then(n => {
                    if (n.ok) return n.text().then(i => {
                        i && t !== !1 && (i = kv(i)), uo.set(o, i || "")
                    });
                    uo.set(o, "")
                }), a6.set(o, e);
        else return uo.set(o, ""), Promise.resolve();
        return e
    },
    zv = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}",
    Sv = e6(class extends A3 {
        constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.iconName = null, this.inheritedAttributes = {}, this.didLoadIcon = !1, this.svgContent = void 0, this.isVisible = !1, this.mode = Av(), this.color = void 0, this.ios = void 0, this.md = void 0, this.flipRtl = void 0, this.name = void 0, this.src = void 0, this.icon = void 0, this.size = void 0, this.lazy = !1, this.sanitize = !0
        }
        componentWillLoad() {
            this.inheritedAttributes = i6(this.el, ["aria-label"])
        }
        connectedCallback() {
            this.waitUntilVisible(this.el, "50px", () => {
                this.isVisible = !0, this.loadIcon()
            })
        }
        componentDidLoad() {
            this.didLoadIcon || this.loadIcon()
        }
        disconnectedCallback() {
            this.io && (this.io.disconnect(), this.io = void 0)
        }
        waitUntilVisible(t, e, n) {
            if (oi.isBrowser && this.lazy && typeof window < "u" && window.IntersectionObserver) {
                let i = this.io = new window.IntersectionObserver(s => {
                    s[0].isIntersecting && (i.disconnect(), this.io = void 0, n())
                }, {
                    rootMargin: e
                });
                i.observe(t)
            } else n()
        }
        loadIcon() {
            if (oi.isBrowser && this.isVisible) {
                let t = o6(this);
                t && (uo.has(t) ? this.svgContent = uo.get(t) : Cv(t, this.sanitize).then(() => this.svgContent = uo.get(t)), this.didLoadIcon = !0)
            }
            this.iconName = pa(this.name, this.icon, this.mode, this.ios, this.md)
        }
        render() {
            let {
                flipRtl: t,
                iconName: e,
                inheritedAttributes: n,
                el: i
            } = this, s = this.mode || "md", a = e ? (e.includes("arrow") || e.includes("chevron")) && t !== !1 : !1, r = t || a;
            return on(sa, Object.assign({
                role: "img",
                class: Object.assign(Object.assign({
                    [s]: !0
                }, Iv(this.color)), {
                    [`icon-${this.size}`]: !!this.size,
                    "flip-rtl": r,
                    "icon-rtl": r && s6(i)
                })
            }, n), oi.isBrowser && this.svgContent ? on("div", {
                class: "icon-inner",
                innerHTML: this.svgContent
            }) : on("div", {
                class: "icon-inner"
            }))
        }
        static get assetsDirs() {
            return ["svg"]
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                name: ["loadIcon"],
                src: ["loadIcon"],
                icon: ["loadIcon"],
                ios: ["loadIcon"],
                md: ["loadIcon"]
            }
        }
        static get style() {
            return zv
        }
    }, [1, "ion-icon", {
        mode: [1025],
        color: [1],
        ios: [1],
        md: [1],
        flipRtl: [4, "flip-rtl"],
        name: [513],
        src: [1],
        icon: [8],
        size: [1],
        lazy: [4],
        sanitize: [4],
        svgContent: [32],
        isVisible: [32]
    }]),
    Av = () => oi.isBrowser && typeof document < "u" && document.documentElement.getAttribute("mode") || "md",
    Iv = o => o ? {
        "ion-color": !0,
        [`ion-color-${o}`]: !0
    } : null;

function Lv() {
    if (typeof customElements > "u") return;
    ["ion-icon"].forEach(t => {
        switch (t) {
            case "ion-icon":
                customElements.get(t) || customElements.define(t, Sv);
                break
        }
    })
}
var l6 = Lv;
var c6 = (o, t, e) => {
    let n, i = () => !(t() === void 0 || o.label !== void 0 || e() === null),
        s = () => {
            i() && ft(() => {
                a()
            })
        },
        a = () => {
            let l = t();
            if (l === void 0) return;
            if (!i()) {
                l.style.removeProperty("width");
                return
            }
            let c = e().scrollWidth;
            if (c === 0 && l.offsetParent === null && pt !== void 0 && "IntersectionObserver" in pt) {
                if (n !== void 0) return;
                let d = n = new IntersectionObserver(p => {
                    p[0].intersectionRatio === 1 && (a(), d.disconnect(), n = void 0)
                }, {
                    threshold: .01,
                    root: o
                });
                d.observe(l);
                return
            }
            l.style.setProperty("width", `${c*.75}px`)
        };
    return {
        calculateNotchWidth: s,
        destroy: () => {
            n && (n.disconnect(), n = void 0)
        }
    }
};
var d6 = (o, t, e) => {
        let n, i;
        if (pt !== void 0 && "MutationObserver" in pt) {
            let l = Array.isArray(t) ? t : [t];
            n = new MutationObserver(c => {
                for (let d of c)
                    for (let p of d.addedNodes)
                        if (p.nodeType === Node.ELEMENT_NODE && l.includes(p.slot)) {
                            e(), ft(() => s(p));
                            return
                        }
            }), n.observe(o, {
                childList: !0,
                subtree: !0
            })
        }
        let s = l => {
                var c;
                i && (i.disconnect(), i = void 0), i = new MutationObserver(d => {
                    e();
                    for (let p of d)
                        for (let g of p.removedNodes) g.nodeType === Node.ELEMENT_NODE && g.slot === t && r()
                }), i.observe((c = l.parentElement) !== null && c !== void 0 ? c : l, {
                    subtree: !0,
                    childList: !0
                })
            },
            a = () => {
                n && (n.disconnect(), n = void 0), r()
            },
            r = () => {
                i && (i.disconnect(), i = void 0)
            };
        return {
            destroy: a
        }
    },
    h6 = (o, t, e) => {
        let n = o == null ? 0 : o.toString().length,
            i = Ev(n, t);
        if (e === void 0) return i;
        try {
            return e(n, t)
        } catch (s) {
            return r2("Exception in provided `counterFormatter`.", s), i
        }
    },
    Ev = (o, t) => `${o} / ${t}`;
var Bv = '.sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--padding-top:0;--padding-end:0;--padding-bottom:8px;--padding-start:0;--border-radius:0;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.textarea-label-placement-floating.sc-ion-textarea-ios-h,.textarea-label-placement-stacked.sc-ion-textarea-ios-h{--padding-top:0px;min-height:56px}[cols].sc-ion-textarea-ios-h:not([auto-grow]){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.ion-color.sc-ion-textarea-ios-h{--highlight-color-focused:var(--ion-color-base);background:initial}ion-item.sc-ion-textarea-ios-h,ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item[slot=start].sc-ion-textarea-ios-h,ion-item [slot=start].sc-ion-textarea-ios-h,ion-item[slot=end].sc-ion-textarea-ios-h,ion-item [slot=end].sc-ion-textarea-ios-h{width:auto}.native-textarea.sc-ion-textarea-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;white-space:pre-wrap;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios{color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;grid-area:1/1/2/2;word-break:break-word}.cloned-input.sc-ion-textarea-ios{top:0;bottom:0;position:absolute;pointer-events:none}.cloned-input.sc-ion-textarea-ios{inset-inline-start:0}.cloned-input.sc-ion-textarea-ios:disabled{opacity:1}[auto-grow].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios{height:100%}[auto-grow].sc-ion-textarea-ios-h .native-textarea.sc-ion-textarea-ios{overflow:hidden}.textarea-wrapper.sc-ion-textarea-ios{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:0px;padding-bottom:0px;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:start;align-items:flex-start;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal}.native-wrapper.sc-ion-textarea-ios{position:relative;width:100%;height:100%}.has-focus.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios{caret-color:var(--highlight-color)}.native-wrapper.sc-ion-textarea-ios textarea.sc-ion-textarea-ios{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom)}.native-wrapper.sc-ion-textarea-ios{display:grid;min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit;grid-auto-rows:100%}.native-wrapper.sc-ion-textarea-ios::after{white-space:pre-wrap;content:attr(data-replicated-value) " ";visibility:hidden}.native-wrapper.sc-ion-textarea-ios::after{padding-left:0;padding-right:0;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;grid-area:1/1/2/2;word-break:break-word}.textarea-wrapper-inner.sc-ion-textarea-ios{display:-ms-flexbox;display:flex;width:100%;min-height:inherit}.ion-touched.ion-invalid.sc-ion-textarea-ios-h{--highlight-color:var(--highlight-color-invalid)}.ion-valid.sc-ion-textarea-ios-h{--highlight-color:var(--highlight-color-valid)}.textarea-bottom.sc-ion-textarea-ios{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:5px;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-top:var(--border-width) var(--border-style) var(--border-color);font-size:0.75rem;white-space:normal}.has-focus.ion-valid.sc-ion-textarea-ios-h,.ion-touched.ion-invalid.sc-ion-textarea-ios-h{--border-color:var(--highlight-color)}.textarea-bottom.sc-ion-textarea-ios .error-text.sc-ion-textarea-ios{display:none;color:var(--highlight-color-invalid)}.textarea-bottom.sc-ion-textarea-ios .helper-text.sc-ion-textarea-ios{display:block;color:var(--ion-color-step-700, var(--ion-text-color-step-300, #4d4d4d))}.ion-touched.ion-invalid.sc-ion-textarea-ios-h .textarea-bottom.sc-ion-textarea-ios .error-text.sc-ion-textarea-ios{display:block}.ion-touched.ion-invalid.sc-ion-textarea-ios-h .textarea-bottom.sc-ion-textarea-ios .helper-text.sc-ion-textarea-ios{display:none}.textarea-bottom.sc-ion-textarea-ios .counter.sc-ion-textarea-ios{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-700, var(--ion-text-color-step-300, #4d4d4d));white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}.label-text-wrapper.sc-ion-textarea-ios{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text.sc-ion-textarea-ios,.sc-ion-textarea-ios-s>[slot=label]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden.sc-ion-textarea-ios,.textarea-outline-notch-hidden.sc-ion-textarea-ios{display:none}.textarea-wrapper.sc-ion-textarea-ios textarea.sc-ion-textarea-ios{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.textarea-label-placement-start.sc-ion-textarea-ios-h .textarea-wrapper.sc-ion-textarea-ios{-ms-flex-direction:row;flex-direction:row}.textarea-label-placement-start.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.textarea-label-placement-end.sc-ion-textarea-ios-h .textarea-wrapper.sc-ion-textarea-ios{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.textarea-label-placement-end.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}.textarea-label-placement-fixed.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.textarea-label-placement-fixed.sc-ion-textarea-ios-h .label-text.sc-ion-textarea-ios{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.textarea-label-placement-stacked.sc-ion-textarea-ios-h .textarea-wrapper.sc-ion-textarea-ios,.textarea-label-placement-floating.sc-ion-textarea-ios-h .textarea-wrapper.sc-ion-textarea-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}.textarea-label-placement-stacked.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,.textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-transform-origin:left top;transform-origin:left top;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;max-width:100%;z-index:2}[dir=rtl].sc-ion-textarea-ios-h -no-combinator.textarea-label-placement-stacked.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl] .sc-ion-textarea-ios-h -no-combinator.textarea-label-placement-stacked.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl].textarea-label-placement-stacked.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl] .textarea-label-placement-stacked.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl].sc-ion-textarea-ios-h -no-combinator.textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl] .sc-ion-textarea-ios-h -no-combinator.textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl].textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios,[dir=rtl] .textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.textarea-label-placement-stacked.sc-ion-textarea-ios-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-ios,.textarea-label-placement-floating.sc-ion-textarea-ios-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-ios{-webkit-transform-origin:right top;transform-origin:right top}}.textarea-label-placement-stacked.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios,.textarea-label-placement-floating.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios,.textarea-label-placement-stacked[auto-grow].sc-ion-textarea-ios-h .native-wrapper.sc-ion-textarea-ios::after,.textarea-label-placement-floating[auto-grow].sc-ion-textarea-ios-h .native-wrapper.sc-ion-textarea-ios::after{-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:8px;margin-bottom:0px}.sc-ion-textarea-ios-h.textarea-label-placement-stacked.sc-ion-textarea-ios-s>[slot=start],.sc-ion-textarea-ios-h.textarea-label-placement-stacked .sc-ion-textarea-ios-s>[slot=start],.sc-ion-textarea-ios-h.textarea-label-placement-stacked.sc-ion-textarea-ios-s>[slot=end],.sc-ion-textarea-ios-h.textarea-label-placement-stacked .sc-ion-textarea-ios-s>[slot=end],.sc-ion-textarea-ios-h.textarea-label-placement-floating.sc-ion-textarea-ios-s>[slot=start],.sc-ion-textarea-ios-h.textarea-label-placement-floating .sc-ion-textarea-ios-s>[slot=start],.sc-ion-textarea-ios-h.textarea-label-placement-floating.sc-ion-textarea-ios-s>[slot=end],.sc-ion-textarea-ios-h.textarea-label-placement-floating .sc-ion-textarea-ios-s>[slot=end]{margin-top:8px}.textarea-label-placement-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}.textarea-label-placement-floating.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios{opacity:0}.has-focus.textarea-label-placement-floating.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios,.has-value.textarea-label-placement-floating.sc-ion-textarea-ios-h textarea.sc-ion-textarea-ios{opacity:1}.label-floating.sc-ion-textarea-ios-h .label-text-wrapper.sc-ion-textarea-ios{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}.start-slot-wrapper.sc-ion-textarea-ios,.end-slot-wrapper.sc-ion-textarea-ios{padding-left:0;padding-right:0;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:start;align-self:start}.sc-ion-textarea-ios-s>[slot=start],.sc-ion-textarea-ios-s>[slot=end]{margin-top:0}.sc-ion-textarea-ios-s>[slot=start]:last-of-type{-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}.sc-ion-textarea-ios-s>[slot=end]:first-of-type{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}.sc-ion-textarea-ios-h{--border-width:0.55px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--padding-top:10px;--padding-end:0px;--padding-bottom:8px;--padding-start:0px;--highlight-height:0px;font-size:inherit}.textarea-disabled.sc-ion-textarea-ios-h{opacity:0.3}.sc-ion-textarea-ios-s>ion-button[slot=start].button-has-icon-only,.sc-ion-textarea-ios-s>ion-button[slot=end].button-has-icon-only{--border-radius:50%;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;aspect-ratio:1}',
    Dv = Bv,
    jv = `.sc-ion-textarea-md-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--padding-top:0;--padding-end:0;--padding-bottom:8px;--padding-start:0;--border-radius:0;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.textarea-label-placement-floating.sc-ion-textarea-md-h,.textarea-label-placement-stacked.sc-ion-textarea-md-h{--padding-top:0px;min-height:56px}[cols].sc-ion-textarea-md-h:not([auto-grow]){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.ion-color.sc-ion-textarea-md-h{--highlight-color-focused:var(--ion-color-base);background:initial}ion-item.sc-ion-textarea-md-h,ion-item .sc-ion-textarea-md-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item[slot=start].sc-ion-textarea-md-h,ion-item [slot=start].sc-ion-textarea-md-h,ion-item[slot=end].sc-ion-textarea-md-h,ion-item [slot=end].sc-ion-textarea-md-h{width:auto}.native-textarea.sc-ion-textarea-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;white-space:pre-wrap;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-textarea.sc-ion-textarea-md::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md{color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;grid-area:1/1/2/2;word-break:break-word}.cloned-input.sc-ion-textarea-md{top:0;bottom:0;position:absolute;pointer-events:none}.cloned-input.sc-ion-textarea-md{inset-inline-start:0}.cloned-input.sc-ion-textarea-md:disabled{opacity:1}[auto-grow].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md{height:100%}[auto-grow].sc-ion-textarea-md-h .native-textarea.sc-ion-textarea-md{overflow:hidden}.textarea-wrapper.sc-ion-textarea-md{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:0px;padding-bottom:0px;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:start;align-items:flex-start;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal}.native-wrapper.sc-ion-textarea-md{position:relative;width:100%;height:100%}.has-focus.sc-ion-textarea-md-h textarea.sc-ion-textarea-md{caret-color:var(--highlight-color)}.native-wrapper.sc-ion-textarea-md textarea.sc-ion-textarea-md{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom)}.native-wrapper.sc-ion-textarea-md{display:grid;min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit;grid-auto-rows:100%}.native-wrapper.sc-ion-textarea-md::after{white-space:pre-wrap;content:attr(data-replicated-value) " ";visibility:hidden}.native-wrapper.sc-ion-textarea-md::after{padding-left:0;padding-right:0;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;grid-area:1/1/2/2;word-break:break-word}.textarea-wrapper-inner.sc-ion-textarea-md{display:-ms-flexbox;display:flex;width:100%;min-height:inherit}.ion-touched.ion-invalid.sc-ion-textarea-md-h{--highlight-color:var(--highlight-color-invalid)}.ion-valid.sc-ion-textarea-md-h{--highlight-color:var(--highlight-color-valid)}.textarea-bottom.sc-ion-textarea-md{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:5px;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-top:var(--border-width) var(--border-style) var(--border-color);font-size:0.75rem;white-space:normal}.has-focus.ion-valid.sc-ion-textarea-md-h,.ion-touched.ion-invalid.sc-ion-textarea-md-h{--border-color:var(--highlight-color)}.textarea-bottom.sc-ion-textarea-md .error-text.sc-ion-textarea-md{display:none;color:var(--highlight-color-invalid)}.textarea-bottom.sc-ion-textarea-md .helper-text.sc-ion-textarea-md{display:block;color:var(--ion-color-step-700, var(--ion-text-color-step-300, #4d4d4d))}.ion-touched.ion-invalid.sc-ion-textarea-md-h .textarea-bottom.sc-ion-textarea-md .error-text.sc-ion-textarea-md{display:block}.ion-touched.ion-invalid.sc-ion-textarea-md-h .textarea-bottom.sc-ion-textarea-md .helper-text.sc-ion-textarea-md{display:none}.textarea-bottom.sc-ion-textarea-md .counter.sc-ion-textarea-md{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-700, var(--ion-text-color-step-300, #4d4d4d));white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}.label-text-wrapper.sc-ion-textarea-md{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text.sc-ion-textarea-md,.sc-ion-textarea-md-s>[slot=label]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden.sc-ion-textarea-md,.textarea-outline-notch-hidden.sc-ion-textarea-md{display:none}.textarea-wrapper.sc-ion-textarea-md textarea.sc-ion-textarea-md{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.textarea-label-placement-start.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{-ms-flex-direction:row;flex-direction:row}.textarea-label-placement-start.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.textarea-label-placement-end.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.textarea-label-placement-end.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}.textarea-label-placement-fixed.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.textarea-label-placement-fixed.sc-ion-textarea-md-h .label-text.sc-ion-textarea-md{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.textarea-label-placement-stacked.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md,.textarea-label-placement-floating.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:left top;transform-origin:left top;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;max-width:100%;z-index:2}[dir=rtl].sc-ion-textarea-md-h -no-combinator.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h -no-combinator.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].sc-ion-textarea-md-h -no-combinator.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h -no-combinator.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.textarea-label-placement-stacked.sc-ion-textarea-md-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-md,.textarea-label-placement-floating.sc-ion-textarea-md-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:right top;transform-origin:right top}}.textarea-label-placement-stacked.sc-ion-textarea-md-h textarea.sc-ion-textarea-md,.textarea-label-placement-floating.sc-ion-textarea-md-h textarea.sc-ion-textarea-md,.textarea-label-placement-stacked[auto-grow].sc-ion-textarea-md-h .native-wrapper.sc-ion-textarea-md::after,.textarea-label-placement-floating[auto-grow].sc-ion-textarea-md-h .native-wrapper.sc-ion-textarea-md::after{-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:8px;margin-bottom:0px}.sc-ion-textarea-md-h.textarea-label-placement-stacked.sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-label-placement-stacked .sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-label-placement-stacked.sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-label-placement-stacked .sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-label-placement-floating.sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-label-placement-floating .sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-label-placement-floating.sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-label-placement-floating .sc-ion-textarea-md-s>[slot=end]{margin-top:8px}.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}.textarea-label-placement-floating.sc-ion-textarea-md-h textarea.sc-ion-textarea-md{opacity:0}.has-focus.textarea-label-placement-floating.sc-ion-textarea-md-h textarea.sc-ion-textarea-md,.has-value.textarea-label-placement-floating.sc-ion-textarea-md-h textarea.sc-ion-textarea-md{opacity:1}.label-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}.start-slot-wrapper.sc-ion-textarea-md,.end-slot-wrapper.sc-ion-textarea-md{padding-left:0;padding-right:0;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:start;align-self:start}.sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-s>[slot=end]{margin-top:0}.sc-ion-textarea-md-s>[slot=start]:last-of-type{-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}.sc-ion-textarea-md-s>[slot=end]:first-of-type{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}.textarea-fill-solid.sc-ion-textarea-md-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-color:var(--ion-color-step-500, var(--ion-background-color-step-500, gray));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}.textarea-fill-solid.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{border-bottom:var(--border-width) var(--border-style) var(--border-color)}.has-focus.textarea-fill-solid.ion-valid.sc-ion-textarea-md-h,.textarea-fill-solid.ion-touched.ion-invalid.sc-ion-textarea-md-h{--border-color:var(--highlight-color)}.textarea-fill-solid.sc-ion-textarea-md-h .textarea-bottom.sc-ion-textarea-md{border-top:none}@media (any-hover: hover){.textarea-fill-solid.sc-ion-textarea-md-h:hover{--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}.textarea-fill-solid.has-focus.sc-ion-textarea-md-h{--background:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}.textarea-fill-solid.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0px;border-end-start-radius:0px}.label-floating.textarea-fill-solid.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{max-width:calc(100% / 0.75)}.textarea-fill-outline.sc-ion-textarea-md-h{--border-color:var(--ion-color-step-300, var(--ion-background-color-step-300, #b3b3b3));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}.textarea-fill-outline.textarea-shape-round.sc-ion-textarea-md-h{--border-radius:28px;--padding-start:32px;--padding-end:32px}.has-focus.textarea-fill-outline.ion-valid.sc-ion-textarea-md-h,.textarea-fill-outline.ion-touched.ion-invalid.sc-ion-textarea-md-h{--border-color:var(--highlight-color)}@media (any-hover: hover){.textarea-fill-outline.sc-ion-textarea-md-h:hover{--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}.textarea-fill-outline.has-focus.sc-ion-textarea-md-h{--border-width:var(--highlight-height);--border-color:var(--highlight-color)}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-bottom.sc-ion-textarea-md{border-top:none}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-wrapper.sc-ion-textarea-md{border-bottom:none}.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:left top;transform-origin:left top;position:absolute;max-width:calc(100% - var(--padding-start) - var(--padding-end))}[dir=rtl].sc-ion-textarea-md-h -no-combinator.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h -no-combinator.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].sc-ion-textarea-md-h -no-combinator.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h -no-combinator.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl].textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,[dir=rtl] .textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-md,.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h:dir(rtl) .label-text-wrapper.sc-ion-textarea-md{-webkit-transform-origin:right top;transform-origin:right top}}.textarea-fill-outline.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{position:relative}.label-floating.textarea-fill-outline.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{-webkit-transform:translateY(-32%) scale(0.75);transform:translateY(-32%) scale(0.75);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;max-width:calc(
    (100% - var(--padding-start) - var(--padding-end) - 8px) / 0.75
  )}.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-h textarea.sc-ion-textarea-md,.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-h textarea.sc-ion-textarea-md,.textarea-fill-outline.textarea-label-placement-stacked[auto-grow].sc-ion-textarea-md-h .native-wrapper.sc-ion-textarea-md::after,.textarea-fill-outline.textarea-label-placement-floating[auto-grow].sc-ion-textarea-md-h .native-wrapper.sc-ion-textarea-md::after{-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:12px;margin-bottom:0px}.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-stacked .sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-stacked.sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-stacked .sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-floating .sc-ion-textarea-md-s>[slot=start],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-floating.sc-ion-textarea-md-s>[slot=end],.sc-ion-textarea-md-h.textarea-fill-outline.textarea-label-placement-floating .sc-ion-textarea-md-s>[slot=end]{margin-top:12px}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-container.sc-ion-textarea-md{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;width:100%;height:100%}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-start.sc-ion-textarea-md,.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-end.sc-ion-textarea-md{pointer-events:none}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-start.sc-ion-textarea-md,.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-notch.sc-ion-textarea-md,.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-end.sc-ion-textarea-md{border-top:var(--border-width) var(--border-style) var(--border-color);border-bottom:var(--border-width) var(--border-style) var(--border-color)}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-notch.sc-ion-textarea-md{max-width:calc(100% - var(--padding-start) - var(--padding-end))}.textarea-fill-outline.sc-ion-textarea-md-h .notch-spacer.sc-ion-textarea-md{-webkit-padding-end:8px;padding-inline-end:8px;font-size:calc(1em * 0.75);opacity:0;pointer-events:none;-webkit-box-sizing:content-box;box-sizing:content-box}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-start.sc-ion-textarea-md{border-start-start-radius:var(--border-radius);border-start-end-radius:0px;border-end-end-radius:0px;border-end-start-radius:var(--border-radius);-webkit-border-start:var(--border-width) var(--border-style) var(--border-color);border-inline-start:var(--border-width) var(--border-style) var(--border-color);width:calc(var(--padding-start) - 4px)}.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-end.sc-ion-textarea-md{-webkit-border-end:var(--border-width) var(--border-style) var(--border-color);border-inline-end:var(--border-width) var(--border-style) var(--border-color);border-start-start-radius:0px;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);border-end-start-radius:0px;-ms-flex-positive:1;flex-grow:1}.label-floating.textarea-fill-outline.sc-ion-textarea-md-h .textarea-outline-notch.sc-ion-textarea-md{border-top:none}.sc-ion-textarea-md-h{--border-width:1px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--padding-top:18px;--padding-end:0px;--padding-bottom:8px;--padding-start:0px;--highlight-height:2px;font-size:inherit}.textarea-bottom.sc-ion-textarea-md .counter.sc-ion-textarea-md{letter-spacing:0.0333333333em}.textarea-label-placement-floating.has-focus.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.textarea-label-placement-stacked.has-focus.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{color:var(--highlight-color)}.has-focus.textarea-label-placement-floating.ion-valid.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.textarea-label-placement-floating.ion-touched.ion-invalid.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.has-focus.textarea-label-placement-stacked.ion-valid.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md,.textarea-label-placement-stacked.ion-touched.ion-invalid.sc-ion-textarea-md-h .label-text-wrapper.sc-ion-textarea-md{color:var(--highlight-color)}.textarea-disabled.sc-ion-textarea-md-h{opacity:0.38}.textarea-highlight.sc-ion-textarea-md{bottom:-1px;position:absolute;width:100%;height:var(--highlight-height);-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform 200ms;transition:-webkit-transform 200ms;transition:transform 200ms;transition:transform 200ms, -webkit-transform 200ms;background:var(--highlight-color)}.textarea-highlight.sc-ion-textarea-md{inset-inline-start:0}.has-focus.sc-ion-textarea-md-h .textarea-highlight.sc-ion-textarea-md{-webkit-transform:scale(1);transform:scale(1)}.in-item.sc-ion-textarea-md-h .textarea-highlight.sc-ion-textarea-md{bottom:0}.in-item.sc-ion-textarea-md-h .textarea-highlight.sc-ion-textarea-md{inset-inline-start:0}.textarea-shape-round.sc-ion-textarea-md-h{--border-radius:16px}.sc-ion-textarea-md-s>ion-button[slot=start].button-has-icon-only,.sc-ion-textarea-md-s>ion-button[slot=end].button-has-icon-only{--border-radius:50%;--padding-start:8px;--padding-end:8px;--padding-top:8px;--padding-bottom:8px;aspect-ratio:1;min-height:40px}`,
    $v = jv,
    Hv = C(class extends M {
        constructor() {
            super(), this.__registerHost(), this.ionChange = L(this, "ionChange", 7), this.ionInput = L(this, "ionInput", 7), this.ionBlur = L(this, "ionBlur", 7), this.ionFocus = L(this, "ionFocus", 7), this.inputId = `ion-textarea-${Tv++}`, this.helperTextId = `${this.inputId}-helper-text`, this.errorTextId = `${this.inputId}-error-text`, this.didTextareaClearOnEdit = !1, this.inheritedAttributes = {}, this.onInput = t => {
                let e = t.target;
                e && (this.value = e.value || ""), this.emitInputChange(t)
            }, this.onChange = t => {
                this.emitValueChange(t)
            }, this.onFocus = t => {
                this.hasFocus = !0, this.focusedValue = this.value, this.ionFocus.emit(t)
            }, this.onBlur = t => {
                this.hasFocus = !1, this.focusedValue !== this.value && this.emitValueChange(t), this.didTextareaClearOnEdit = !1, this.ionBlur.emit(t)
            }, this.onKeyDown = t => {
                this.checkClearOnEdit(t)
            }, this.hasFocus = !1, this.color = void 0, this.autocapitalize = "none", this.autofocus = !1, this.clearOnEdit = !1, this.debounce = void 0, this.disabled = !1, this.fill = void 0, this.inputmode = void 0, this.enterkeyhint = void 0, this.maxlength = void 0, this.minlength = void 0, this.name = this.inputId, this.placeholder = void 0, this.readonly = !1, this.required = !1, this.spellcheck = !1, this.cols = void 0, this.rows = void 0, this.wrap = void 0, this.autoGrow = !1, this.value = "", this.counter = !1, this.counterFormatter = void 0, this.errorText = void 0, this.helperText = void 0, this.label = void 0, this.labelPlacement = "start", this.shape = void 0
        }
        debounceChanged() {
            let {
                ionInput: t,
                debounce: e,
                originalIonInput: n
            } = this;
            this.ionInput = e === void 0 ? n ? ? t : d2(t, e)
        }
        valueChanged() {
            let t = this.nativeInput,
                e = this.getValue();
            t && t.value !== e && (t.value = e), this.runAutoGrow()
        }
        onDirChanged(t) {
            this.inheritedAttributes = Object.assign(Object.assign({}, this.inheritedAttributes), {
                dir: t
            }), se(this)
        }
        connectedCallback() {
            let {
                el: t
            } = this;
            this.slotMutationController = d6(t, ["label", "start", "end"], () => se(this)), this.notchController = c6(t, () => this.notchSpacerEl, () => this.labelSlot), this.debounceChanged(), mt.isBrowser && document.dispatchEvent(new CustomEvent("ionInputDidLoad", {
                detail: t
            }))
        }
        disconnectedCallback() {
            mt.isBrowser && document.dispatchEvent(new CustomEvent("ionInputDidUnload", {
                detail: this.el
            })), this.slotMutationController && (this.slotMutationController.destroy(), this.slotMutationController = void 0), this.notchController && (this.notchController.destroy(), this.notchController = void 0)
        }
        componentWillLoad() {
            this.inheritedAttributes = Object.assign(Object.assign({}, zt(this.el)), ae(this.el, ["data-form-type", "title", "tabindex", "dir"]))
        }
        componentDidLoad() {
            this.originalIonInput = this.ionInput, this.runAutoGrow()
        }
        componentDidRender() {
            var t;
            (t = this.notchController) === null || t === void 0 || t.calculateNotchWidth()
        }
        setFocus() {
            return w(this, null, function*() {
                this.nativeInput && this.nativeInput.focus()
            })
        }
        getInputElement() {
            return w(this, null, function*() {
                return this.nativeInput || (yield new Promise(t => Tt(this.el, t))), Promise.resolve(this.nativeInput)
            })
        }
        emitValueChange(t) {
            let {
                value: e
            } = this, n = e == null ? e : e.toString();
            this.focusedValue = n, this.ionChange.emit({
                value: n,
                event: t
            })
        }
        emitInputChange(t) {
            let {
                value: e
            } = this;
            this.ionInput.emit({
                value: e,
                event: t
            })
        }
        runAutoGrow() {
            this.nativeInput && this.autoGrow && Ht(() => {
                var t;
                this.textareaWrapper && (this.textareaWrapper.dataset.replicatedValue = (t = this.value) !== null && t !== void 0 ? t : "")
            })
        }
        checkClearOnEdit(t) {
            if (!this.clearOnEdit) return;
            let n = ["Tab", "Shift", "Meta", "Alt", "Control"].includes(t.key);
            !this.didTextareaClearOnEdit && this.hasValue() && !n && (this.value = "", this.emitInputChange(t)), n || (this.didTextareaClearOnEdit = !0)
        }
        hasValue() {
            return this.getValue() !== ""
        }
        getValue() {
            return this.value || ""
        }
        renderLabel() {
            let {
                label: t
            } = this;
            return u("div", {
                class: {
                    "label-text-wrapper": !0, "label-text-wrapper-hidden": !this.hasLabel
                }
            }, t === void 0 ? u("slot", {
                name: "label"
            }) : u("div", {
                class: "label-text"
            }, t))
        }
        get labelSlot() {
            return this.el.querySelector('[slot="label"]')
        }
        get hasLabel() {
            return this.label !== void 0 || this.labelSlot !== null
        }
        renderLabelContainer() {
            return b(this) === "md" && this.fill === "outline" ? [u("div", {
                class: "textarea-outline-container"
            }, u("div", {
                class: "textarea-outline-start"
            }), u("div", {
                class: {
                    "textarea-outline-notch": !0, "textarea-outline-notch-hidden": !this.hasLabel
                }
            }, u("div", {
                class: "notch-spacer",
                "aria-hidden": "true",
                ref: n => this.notchSpacerEl = n
            }, this.label)), u("div", {
                class: "textarea-outline-end"
            })), this.renderLabel()] : this.renderLabel()
        }
        renderHintText() {
            let {
                helperText: t,
                errorText: e,
                helperTextId: n,
                errorTextId: i
            } = this;
            return [u("div", {
                id: n,
                class: "helper-text"
            }, t), u("div", {
                id: i,
                class: "error-text"
            }, e)]
        }
        getHintTextID() {
            let {
                el: t,
                helperText: e,
                errorText: n,
                helperTextId: i,
                errorTextId: s
            } = this;
            if (t.classList.contains("ion-touched") && t.classList.contains("ion-invalid") && n) return s;
            if (e) return i
        }
        renderCounter() {
            let {
                counter: t,
                maxlength: e,
                counterFormatter: n,
                value: i
            } = this;
            if (!(t !== !0 || e === void 0)) return u("div", {
                class: "counter"
            }, h6(i, e, n))
        }
        renderBottomContent() {
            let {
                counter: t,
                helperText: e,
                errorText: n,
                maxlength: i
            } = this;
            if (!(!(e || n) && !(t === !0 && i !== void 0))) return u("div", {
                class: "textarea-bottom"
            }, this.renderHintText(), this.renderCounter())
        }
        render() {
            let {
                inputId: t,
                disabled: e,
                fill: n,
                shape: i,
                labelPlacement: s,
                el: a,
                hasFocus: r
            } = this, l = b(this), c = this.getValue(), d = it("ion-item", this.el), p = l === "md" && n !== "outline" && !d, g = this.hasValue(), m = a.querySelector('[slot="start"], [slot="end"]') !== null, f = s === "stacked" || s === "floating" && (g || r || m);
            return u(S, {
                key: "3bf42ea1fa739f334427c70f91a89b8b0e0f21ec",
                class: Z(this.color, {
                    [l]: !0,
                    "has-value": g,
                    "has-focus": r,
                    "label-floating": f,
                    [`textarea-fill-${n}`]: n !== void 0,
                    [`textarea-shape-${i}`]: i !== void 0,
                    [`textarea-label-placement-${s}`]: !0,
                    "textarea-disabled": e
                })
            }, u("label", {
                key: "f7acceeb74849d13a6af8d39b66ea2701384c955",
                class: "textarea-wrapper",
                htmlFor: t
            }, this.renderLabelContainer(), u("div", {
                key: "05e9f2ebad1742a9e66d243d18c22ddd4c83ee04",
                class: "textarea-wrapper-inner"
            }, u("div", {
                key: "70a9935351c38413ced05f5e4dc0055b9b001ee9",
                class: "start-slot-wrapper"
            }, u("slot", {
                key: "11206eaa31d112c01f2218bf2ff46375ad819d1f",
                name: "start"
            })), u("div", {
                key: "bfd215dbb5f4d60f5fb62d37226fdc6ce61ec107",
                class: "native-wrapper",
                ref: x => this.textareaWrapper = x
            }, u("textarea", Object.assign({
                key: "2fa5cdf4c6614dd8cd4b7d2a19811a79c96ac50d",
                class: "native-textarea",
                ref: x => this.nativeInput = x,
                id: t,
                disabled: e,
                autoCapitalize: this.autocapitalize,
                autoFocus: this.autofocus,
                enterKeyHint: this.enterkeyhint,
                inputMode: this.inputmode,
                minLength: this.minlength,
                maxLength: this.maxlength,
                name: this.name,
                placeholder: this.placeholder || "",
                readOnly: this.readonly,
                required: this.required,
                spellcheck: this.spellcheck,
                cols: this.cols,
                rows: this.rows,
                wrap: this.wrap,
                onInput: this.onInput,
                onChange: this.onChange,
                onBlur: this.onBlur,
                onFocus: this.onFocus,
                onKeyDown: this.onKeyDown,
                "aria-describedby": this.getHintTextID(),
                "aria-invalid": this.getHintTextID() === this.errorTextId
            }, this.inheritedAttributes), c)), u("div", {
                key: "8a67ad8e3b5650680f770cefc562d190f6760718",
                class: "end-slot-wrapper"
            }, u("slot", {
                key: "03bb6bc5f2808c1f474a6c3168169d17f7569fda",
                name: "end"
            }))), p && u("div", {
                key: "cd564bd01a1ca3f914218e34a78d296ad0838e4a",
                class: "textarea-highlight"
            })), this.renderBottomContent())
        }
        get el() {
            return this
        }
        static get watchers() {
            return {
                debounce: ["debounceChanged"],
                value: ["valueChanged"],
                dir: ["onDirChanged"]
            }
        }
        static get style() {
            return {
                ios: Dv,
                md: $v
            }
        }
    }, [38, "ion-textarea", {
        color: [513],
        autocapitalize: [1],
        autofocus: [4],
        clearOnEdit: [4, "clear-on-edit"],
        debounce: [2],
        disabled: [4],
        fill: [1],
        inputmode: [1],
        enterkeyhint: [1],
        maxlength: [2],
        minlength: [2],
        name: [1],
        placeholder: [1],
        readonly: [4],
        required: [4],
        spellcheck: [4],
        cols: [514],
        rows: [2],
        wrap: [1],
        autoGrow: [516, "auto-grow"],
        value: [1025],
        counter: [4],
        counterFormatter: [16],
        errorText: [1, "error-text"],
        helperText: [1, "helper-text"],
        label: [1],
        labelPlacement: [1, "label-placement"],
        shape: [1],
        hasFocus: [32],
        setFocus: [64],
        getInputElement: [64]
    }, void 0, {
        debounce: ["debounceChanged"],
        value: ["valueChanged"],
        dir: ["onDirChanged"]
    }]),
    Tv = 0;

function _v() {
    if (typeof customElements > "u") return;
    ["ion-textarea"].forEach(t => {
        switch (t) {
            case "ion-textarea":
                customElements.get(t) || customElements.define(t, Hv);
                break
        }
    })
}
var p6 = _v;
var Vv = ["outletContent"],
    K = ["*"];
var Ov = ["outlet"],
    Rv = [
        [
            ["", "slot", "top"]
        ], "*", [
            ["ion-tab"]
        ]
    ],
    Pv = ["[slot=top]", "*", "ion-tab"];

function Fv(o, t) {
    if (o & 1) {
        let e = Xr();
        s0(0, "ion-router-outlet", 5, 1), Zt("stackWillChange", function(i) {
            Q1(e);
            let s = r0();
            return J1(s.onStackWillChange(i))
        })("stackDidChange", function(i) {
            Q1(e);
            let s = r0();
            return J1(s.onStackDidChange(i))
        }), a0()
    }
}

function Nv(o, t) {
    o & 1 && q(0, 2, ["*ngIf", "tabs.length > 0"])
}
var ga = (() => {
        let o = class V1 extends Es {
            parentOutlet;
            outletContent;
            constructor(e, n, i, s, a, r, l, c) {
                super(e, n, i, s, a, r, l, c), this.parentOutlet = c
            }
            static\ u0275fac = function(n) {
                return new(n || V1)(He("name"), He("tabs"), v(ke), v(H), v(le), v($), v(Vt), v(V1, 12))
            };
            static\ u0275cmp = P({
                type: V1,
                selectors: [
                    ["ion-router-outlet"]
                ],
                viewQuery: function(n, i) {
                    if (n & 1 && gn(Vv, 7, Te), n & 2) {
                        let s;
                        xe(s = be()) && (i.outletContent = s.first)
                    }
                },
                features: [Yt],
                ngContentSelectors: K,
                decls: 3,
                vars: 0,
                consts: [
                    ["outletContent", ""]
                ],
                template: function(n, i) {
                    n & 1 && (G(), Wr(0, null, 0), q(2), Gr())
                },
                encapsulation: 2
            })
        };
        return o = U([Go({
            defineCustomElementFn: m4
        })], o), o
    })(),
    bI = (() => {
        let o = class ma extends e4 {
            constructor(e, n, i, s, a, r) {
                super(e, n, i, s, a, r)
            }
            static\ u0275fac = function(n) {
                return new(n || ma)(v(ga, 8), v(Wo), v(Wn), v(H), v($), v(V))
            };
            static\ u0275cmp = P({
                type: ma,
                selectors: [
                    ["ion-back-button"]
                ],
                features: [Yt],
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([Go({
            defineCustomElementFn: g4
        })], o), o
    })();
var Uv = (o, t) => {
        let e = o.prototype;
        t.forEach(n => {
            Object.defineProperty(e, n, {
                get() {
                    return this.el[n]
                },
                set(i) {
                    this.z.runOutsideAngular(() => this.el[n] = i)
                },
                configurable: !0
            })
        })
    },
    qv = (o, t) => {
        let e = o.prototype;
        t.forEach(n => {
            e[n] = function() {
                let i = arguments;
                return this.z.runOutsideAngular(() => this.el[n].apply(this.el, i))
            }
        })
    },
    Re = (o, t, e) => {
        e.forEach(n => o[n] = ui(t, n))
    };

function et(o) {
    return function(e) {
        let {
            defineCustomElementFn: n,
            inputs: i,
            methods: s
        } = o;
        return n !== void 0 && n(), i && Uv(e, i), s && qv(e, s), e
    }
}
var kI = (() => {
        let o = class va {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || va)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: va,
                selectors: [
                    ["ion-accordion"]
                ],
                inputs: {
                    disabled: "disabled",
                    mode: "mode",
                    readonly: "readonly",
                    toggleIcon: "toggleIcon",
                    toggleIconSlot: "toggleIconSlot",
                    value: "value"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: $4,
            inputs: ["disabled", "mode", "readonly", "toggleIcon", "toggleIconSlot", "value"]
        })], o), o
    })(),
    yI = (() => {
        let o = class fa {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement, Re(this, this.el, ["ionChange"])
            }
            static\ u0275fac = function(n) {
                return new(n || fa)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: fa,
                selectors: [
                    ["ion-accordion-group"]
                ],
                inputs: {
                    animated: "animated",
                    disabled: "disabled",
                    expand: "expand",
                    mode: "mode",
                    multiple: "multiple",
                    readonly: "readonly",
                    value: "value"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: H4,
            inputs: ["animated", "disabled", "expand", "mode", "multiple", "readonly", "value"]
        })], o), o
    })();
var MI = (() => {
        let o = class wa {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || wa)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: wa,
                selectors: [
                    ["ion-app"]
                ],
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: T4,
            methods: ["setFocus"]
        })], o), o
    })(),
    CI = (() => {
        let o = class xa {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || xa)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: xa,
                selectors: [
                    ["ion-avatar"]
                ],
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: _4
        })], o), o
    })();
var zI = (() => {
    let o = class ba {
        z;
        el;
        constructor(e, n, i) {
            this.z = i, e.detach(), this.el = n.nativeElement
        }
        static\ u0275fac = function(n) {
            return new(n || ba)(v(V), v(H), v($))
        };
        static\ u0275cmp = P({
            type: ba,
            selectors: [
                ["ion-badge"]
            ],
            inputs: {
                color: "color",
                mode: "mode"
            },
            ngContentSelectors: K,
            decls: 1,
            vars: 0,
            template: function(n, i) {
                n & 1 && (G(), q(0))
            },
            encapsulation: 2,
            changeDetection: 0
        })
    };
    return o = U([et({
        defineCustomElementFn: V4,
        inputs: ["color", "mode"]
    })], o), o
})();
var SI = (() => {
        let o = class ka {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement, Re(this, this.el, ["ionFocus", "ionBlur"])
            }
            static\ u0275fac = function(n) {
                return new(n || ka)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: ka,
                selectors: [
                    ["ion-button"]
                ],
                inputs: {
                    buttonType: "buttonType",
                    color: "color",
                    disabled: "disabled",
                    download: "download",
                    expand: "expand",
                    fill: "fill",
                    form: "form",
                    href: "href",
                    mode: "mode",
                    rel: "rel",
                    routerAnimation: "routerAnimation",
                    routerDirection: "routerDirection",
                    shape: "shape",
                    size: "size",
                    strong: "strong",
                    target: "target",
                    type: "type"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: P4,
            inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"]
        })], o), o
    })(),
    AI = (() => {
        let o = class ya {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || ya)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: ya,
                selectors: [
                    ["ion-buttons"]
                ],
                inputs: {
                    collapse: "collapse"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: U4,
            inputs: ["collapse"]
        })], o), o
    })(),
    II = (() => {
        let o = class Ma {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || Ma)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Ma,
                selectors: [
                    ["ion-card"]
                ],
                inputs: {
                    button: "button",
                    color: "color",
                    disabled: "disabled",
                    download: "download",
                    href: "href",
                    mode: "mode",
                    rel: "rel",
                    routerAnimation: "routerAnimation",
                    routerDirection: "routerDirection",
                    target: "target",
                    type: "type"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: q4,
            inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
        })], o), o
    })(),
    LI = (() => {
        let o = class Ca {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || Ca)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Ca,
                selectors: [
                    ["ion-card-content"]
                ],
                inputs: {
                    mode: "mode"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: W4,
            inputs: ["mode"]
        })], o), o
    })(),
    EI = (() => {
        let o = class za {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || za)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: za,
                selectors: [
                    ["ion-card-header"]
                ],
                inputs: {
                    color: "color",
                    mode: "mode",
                    translucent: "translucent"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: G4,
            inputs: ["color", "mode", "translucent"]
        })], o), o
    })(),
    BI = (() => {
        let o = class Sa {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || Sa)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Sa,
                selectors: [
                    ["ion-card-subtitle"]
                ],
                inputs: {
                    color: "color",
                    mode: "mode"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: X4,
            inputs: ["color", "mode"]
        })], o), o
    })(),
    DI = (() => {
        let o = class Aa {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || Aa)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Aa,
                selectors: [
                    ["ion-card-title"]
                ],
                inputs: {
                    color: "color",
                    mode: "mode"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: Y4,
            inputs: ["color", "mode"]
        })], o), o
    })();
var jI = (() => {
    let o = class Ia {
        z;
        el;
        constructor(e, n, i) {
            this.z = i, e.detach(), this.el = n.nativeElement, Re(this, this.el, ["ionScrollStart", "ionScroll", "ionScrollEnd"])
        }
        static\ u0275fac = function(n) {
            return new(n || Ia)(v(V), v(H), v($))
        };
        static\ u0275cmp = P({
            type: Ia,
            selectors: [
                ["ion-content"]
            ],
            inputs: {
                color: "color",
                fixedSlotPlacement: "fixedSlotPlacement",
                forceOverscroll: "forceOverscroll",
                fullscreen: "fullscreen",
                scrollEvents: "scrollEvents",
                scrollX: "scrollX",
                scrollY: "scrollY"
            },
            ngContentSelectors: K,
            decls: 1,
            vars: 0,
            template: function(n, i) {
                n & 1 && (G(), q(0))
            },
            encapsulation: 2,
            changeDetection: 0
        })
    };
    return o = U([et({
        defineCustomElementFn: Q4,
        inputs: ["color", "fixedSlotPlacement", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"],
        methods: ["getScrollElement", "scrollToTop", "scrollToBottom", "scrollByPoint", "scrollToPoint"]
    })], o), o
})();
var $I = (() => {
        let o = class La {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || La)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: La,
                selectors: [
                    ["ion-fab"]
                ],
                inputs: {
                    activated: "activated",
                    edge: "edge",
                    horizontal: "horizontal",
                    vertical: "vertical"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: J4,
            inputs: ["activated", "edge", "horizontal", "vertical"],
            methods: ["close"]
        })], o), o
    })(),
    HI = (() => {
        let o = class Ea {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement, Re(this, this.el, ["ionFocus", "ionBlur"])
            }
            static\ u0275fac = function(n) {
                return new(n || Ea)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Ea,
                selectors: [
                    ["ion-fab-button"]
                ],
                inputs: {
                    activated: "activated",
                    closeIcon: "closeIcon",
                    color: "color",
                    disabled: "disabled",
                    download: "download",
                    href: "href",
                    mode: "mode",
                    rel: "rel",
                    routerAnimation: "routerAnimation",
                    routerDirection: "routerDirection",
                    show: "show",
                    size: "size",
                    target: "target",
                    translucent: "translucent",
                    type: "type"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: tc,
            inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"]
        })], o), o
    })(),
    TI = (() => {
        let o = class Ba {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || Ba)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Ba,
                selectors: [
                    ["ion-fab-list"]
                ],
                inputs: {
                    activated: "activated",
                    side: "side"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: ec,
            inputs: ["activated", "side"]
        })], o), o
    })(),
    _I = (() => {
        let o = class Da {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || Da)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Da,
                selectors: [
                    ["ion-footer"]
                ],
                inputs: {
                    collapse: "collapse",
                    mode: "mode",
                    translucent: "translucent"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: sc,
            inputs: ["collapse", "mode", "translucent"]
        })], o), o
    })();
var VI = (() => {
    let o = class ja {
        z;
        el;
        constructor(e, n, i) {
            this.z = i, e.detach(), this.el = n.nativeElement
        }
        static\ u0275fac = function(n) {
            return new(n || ja)(v(V), v(H), v($))
        };
        static\ u0275cmp = P({
            type: ja,
            selectors: [
                ["ion-header"]
            ],
            inputs: {
                collapse: "collapse",
                mode: "mode",
                translucent: "translucent"
            },
            ngContentSelectors: K,
            decls: 1,
            vars: 0,
            template: function(n, i) {
                n & 1 && (G(), q(0))
            },
            encapsulation: 2,
            changeDetection: 0
        })
    };
    return o = U([et({
        defineCustomElementFn: hc,
        inputs: ["collapse", "mode", "translucent"]
    })], o), o
})();
var OI = (() => {
    let o = class $a {
        z;
        el;
        constructor(e, n, i) {
            this.z = i, e.detach(), this.el = n.nativeElement
        }
        static\ u0275fac = function(n) {
            return new(n || $a)(v(V), v(H), v($))
        };
        static\ u0275cmp = P({
            type: $a,
            selectors: [
                ["ion-item"]
            ],
            inputs: {
                button: "button",
                color: "color",
                detail: "detail",
                detailIcon: "detailIcon",
                disabled: "disabled",
                download: "download",
                href: "href",
                lines: "lines",
                mode: "mode",
                rel: "rel",
                routerAnimation: "routerAnimation",
                routerDirection: "routerDirection",
                target: "target",
                type: "type"
            },
            ngContentSelectors: K,
            decls: 1,
            vars: 0,
            template: function(n, i) {
                n & 1 && (G(), q(0))
            },
            encapsulation: 2,
            changeDetection: 0
        })
    };
    return o = U([et({
        defineCustomElementFn: fc,
        inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
    })], o), o
})();
var RI = (() => {
        let o = class Ha {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || Ha)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Ha,
                selectors: [
                    ["ion-label"]
                ],
                inputs: {
                    color: "color",
                    mode: "mode",
                    position: "position"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: bc,
            inputs: ["color", "mode", "position"]
        })], o), o
    })(),
    PI = (() => {
        let o = class Ta {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || Ta)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Ta,
                selectors: [
                    ["ion-list"]
                ],
                inputs: {
                    inset: "inset",
                    lines: "lines",
                    mode: "mode"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: Mc,
            inputs: ["inset", "lines", "mode"],
            methods: ["closeSlidingItems"]
        })], o), o
    })(),
    FI = (() => {
        let o = class _a {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || _a)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: _a,
                selectors: [
                    ["ion-list-header"]
                ],
                inputs: {
                    color: "color",
                    lines: "lines",
                    mode: "mode"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: Sc,
            inputs: ["color", "lines", "mode"]
        })], o), o
    })();
var NI = (() => {
        let o = class Va {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement, Re(this, this.el, ["ionWillOpen", "ionWillClose", "ionDidOpen", "ionDidClose"])
            }
            static\ u0275fac = function(n) {
                return new(n || Va)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Va,
                selectors: [
                    ["ion-menu"]
                ],
                inputs: {
                    contentId: "contentId",
                    disabled: "disabled",
                    maxEdgeStart: "maxEdgeStart",
                    menuId: "menuId",
                    side: "side",
                    swipeGesture: "swipeGesture",
                    type: "type"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: Bc,
            inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"],
            methods: ["isOpen", "isActive", "open", "close", "toggle", "setOpen"]
        })], o), o
    })(),
    UI = (() => {
        let o = class Oa {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || Oa)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Oa,
                selectors: [
                    ["ion-menu-button"]
                ],
                inputs: {
                    autoHide: "autoHide",
                    color: "color",
                    disabled: "disabled",
                    menu: "menu",
                    mode: "mode",
                    type: "type"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: Dc,
            inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"]
        })], o), o
    })(),
    qI = (() => {
        let o = class Ra {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || Ra)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Ra,
                selectors: [
                    ["ion-menu-toggle"]
                ],
                inputs: {
                    autoHide: "autoHide",
                    menu: "menu"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: jc,
            inputs: ["autoHide", "menu"]
        })], o), o
    })(),
    WI = (() => {
        let o = class Pa {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || Pa)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Pa,
                selectors: [
                    ["ion-nav-link"]
                ],
                inputs: {
                    component: "component",
                    componentProps: "componentProps",
                    routerAnimation: "routerAnimation",
                    routerDirection: "routerDirection"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: $c,
            inputs: ["component", "componentProps", "routerAnimation", "routerDirection"]
        })], o), o
    })();
var GI = (() => {
    let o = class Fa {
        z;
        el;
        constructor(e, n, i) {
            this.z = i, e.detach(), this.el = n.nativeElement
        }
        static\ u0275fac = function(n) {
            return new(n || Fa)(v(V), v(H), v($))
        };
        static\ u0275cmp = P({
            type: Fa,
            selectors: [
                ["ion-progress-bar"]
            ],
            inputs: {
                buffer: "buffer",
                color: "color",
                mode: "mode",
                reversed: "reversed",
                type: "type",
                value: "value"
            },
            ngContentSelectors: K,
            decls: 1,
            vars: 0,
            template: function(n, i) {
                n & 1 && (G(), q(0))
            },
            encapsulation: 2,
            changeDetection: 0
        })
    };
    return o = U([et({
        defineCustomElementFn: Hc,
        inputs: ["buffer", "color", "mode", "reversed", "type", "value"]
    })], o), o
})();
var XI = (() => {
        let o = class Na {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || Na)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Na,
                selectors: [
                    ["ion-spinner"]
                ],
                inputs: {
                    color: "color",
                    duration: "duration",
                    name: "name",
                    paused: "paused"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: Fc,
            inputs: ["color", "duration", "name", "paused"]
        })], o), o
    })(),
    YI = (() => {
        let o = class Ua {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement, Re(this, this.el, ["ionSplitPaneVisible"])
            }
            static\ u0275fac = function(n) {
                return new(n || Ua)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Ua,
                selectors: [
                    ["ion-split-pane"]
                ],
                inputs: {
                    contentId: "contentId",
                    disabled: "disabled",
                    when: "when"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: Wc,
            inputs: ["contentId", "disabled", "when"]
        })], o), o
    })(),
    Wv = (() => {
        let o = class qa {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || qa)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: qa,
                selectors: [
                    ["ion-tab"]
                ],
                inputs: {
                    component: "component",
                    tab: "tab"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: Gc,
            inputs: ["component", "tab"],
            methods: ["setActive"]
        })], o), o
    })(),
    u6 = (() => {
        let o = class Wa {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || Wa)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Wa,
                selectors: [
                    ["ion-tab-bar"]
                ],
                inputs: {
                    color: "color",
                    mode: "mode",
                    selectedTab: "selectedTab",
                    translucent: "translucent"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: Xc,
            inputs: ["color", "mode", "selectedTab", "translucent"]
        })], o), o
    })(),
    ZI = (() => {
        let o = class Ga {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || Ga)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Ga,
                selectors: [
                    ["ion-tab-button"]
                ],
                inputs: {
                    disabled: "disabled",
                    download: "download",
                    href: "href",
                    layout: "layout",
                    mode: "mode",
                    rel: "rel",
                    selected: "selected",
                    tab: "tab",
                    target: "target"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: Yc,
            inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"]
        })], o), o
    })();
var KI = (() => {
    let o = class Xa {
        z;
        el;
        constructor(e, n, i) {
            this.z = i, e.detach(), this.el = n.nativeElement
        }
        static\ u0275fac = function(n) {
            return new(n || Xa)(v(V), v(H), v($))
        };
        static\ u0275cmp = P({
            type: Xa,
            selectors: [
                ["ion-title"]
            ],
            inputs: {
                color: "color",
                size: "size"
            },
            ngContentSelectors: K,
            decls: 1,
            vars: 0,
            template: function(n, i) {
                n & 1 && (G(), q(0))
            },
            encapsulation: 2,
            changeDetection: 0
        })
    };
    return o = U([et({
        defineCustomElementFn: Zc,
        inputs: ["color", "size"]
    })], o), o
})();
var QI = (() => {
        let o = class Ya {
            z;
            el;
            constructor(e, n, i) {
                this.z = i, e.detach(), this.el = n.nativeElement
            }
            static\ u0275fac = function(n) {
                return new(n || Ya)(v(V), v(H), v($))
            };
            static\ u0275cmp = P({
                type: Ya,
                selectors: [
                    ["ion-toolbar"]
                ],
                inputs: {
                    color: "color",
                    mode: "mode"
                },
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: Kc,
            inputs: ["color", "mode"]
        })], o), o
    })(),
    JI = (() => {
        class o extends n4 {
            outlet;
            tabBar;
            tabBars;
            tabs;
            static\ u0275fac = (() => {
                let e;
                return function(i) {
                    return (e || (e = $e(o)))(i || o)
                }
            })();
            static\ u0275cmp = P({
                type: o,
                selectors: [
                    ["ion-tabs"]
                ],
                contentQueries: function(n, i, s) {
                    if (n & 1 && (zo(s, u6, 5), zo(s, u6, 4), zo(s, Wv, 4)), n & 2) {
                        let a;
                        xe(a = be()) && (i.tabBar = a.first), xe(a = be()) && (i.tabBars = a), xe(a = be()) && (i.tabs = a)
                    }
                },
                viewQuery: function(n, i) {
                    if (n & 1 && gn(Ov, 5, ga), n & 2) {
                        let s;
                        xe(s = be()) && (i.outlet = s.first)
                    }
                },
                features: [Yt],
                ngContentSelectors: Pv,
                decls: 6,
                vars: 2,
                consts: [
                    ["tabsInner", ""],
                    ["outlet", ""],
                    [1, "tabs-inner"],
                    ["tabs", "true", 3, "stackWillChange", "stackDidChange", 4, "ngIf"],
                    [4, "ngIf"],
                    ["tabs", "true", 3, "stackWillChange", "stackDidChange"]
                ],
                template: function(n, i) {
                    n & 1 && (G(Rv), q(0), s0(1, "div", 2, 0), Nr(3, Fv, 2, 0, "ion-router-outlet", 3)(4, Nv, 1, 0, "ng-content", 4), a0(), q(5, 1)), n & 2 && (o0(3), un("ngIf", i.tabs.length === 0), o0(), un("ngIf", i.tabs.length > 0))
                },
                dependencies: [ga, d0],
                styles: ["[_nghost-%COMP%]{display:flex;position:absolute;inset:0;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner[_ngcontent-%COMP%]{position:relative;flex:1;contain:layout size style}"]
            })
        }
        return o
    })(),
    Gv = (() => {
        class o extends qn {
            angularDelegate = I(lo);
            injector = I(kt);
            environmentInjector = I(Nt);
            constructor() {
                super(gs), z4()
            }
            create(e) {
                return super.create(Q(y({}, e), {
                    delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "modal")
                }))
            }
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac
            })
        }
        return o
    })(),
    Za = class extends qn {
        angularDelegate = I(lo);
        injector = I(kt);
        environmentInjector = I(Nt);
        constructor() {
            super(ms), j4()
        }
        create(t) {
            return super.create(Q(y({}, t), {
                delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "popover")
            }))
        }
    },
    tL = (o = {}) => Ft([{
        provide: c1,
        useValue: o
    }, {
        provide: xi,
        useFactory: Xv,
        multi: !0,
        deps: [c1, Dt]
    }, t4(), lo, Gv, Za]),
    Xv = (o, t) => () => {
        t.documentElement.classList.add("ion-ce"), u0(o)
    };
var eL = (() => {
        let o = class Ka extends o4 {
            constructor(e, n, i, s, a, r) {
                super(e, n, i, s, a, r)
            }
            static\ u0275fac = function(n) {
                return new(n || Ka)(v(H), v(Nt), v(kt), v(lo), v($), v(V))
            };
            static\ u0275cmp = P({
                type: Ka,
                selectors: [
                    ["ion-nav"]
                ],
                features: [Yt],
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2
            })
        };
        return o = U([Go({
            defineCustomElementFn: o3
        })], o), o
    })(),
    Yv = ["checked", "color", "disabled", "errorText", "helperText", "indeterminate", "justify", "labelPlacement", "mode", "name", "value"],
    Zv = {
        provide: Nn,
        useExisting: xo(() => Kv),
        multi: !0
    },
    Kv = (() => {
        let o = class Qa extends Bs {
            z;
            el;
            constructor(e, n, i, s) {
                super(s, n), this.z = i, e.detach(), this.el = n.nativeElement, Re(this, this.el, ["ionChange", "ionFocus", "ionBlur"])
            }
            writeValue(e) {
                this.elementRef.nativeElement.checked = this.lastValue = e, ro(this.elementRef)
            }
            handleIonChange(e) {
                this.handleValueChange(e, e.checked)
            }
            static\ u0275fac = function(n) {
                return new(n || Qa)(v(V), v(H), v($), v(kt))
            };
            static\ u0275cmp = P({
                type: Qa,
                selectors: [
                    ["ion-checkbox"]
                ],
                hostBindings: function(n, i) {
                    n & 1 && Zt("ionChange", function(a) {
                        return i.handleIonChange(a.target)
                    })
                },
                inputs: {
                    checked: "checked",
                    color: "color",
                    disabled: "disabled",
                    errorText: "errorText",
                    helperText: "helperText",
                    indeterminate: "indeterminate",
                    justify: "justify",
                    labelPlacement: "labelPlacement",
                    mode: "mode",
                    name: "name",
                    value: "value"
                },
                features: [So([Zv]), Yt],
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: n3,
            inputs: Yv
        })], o), o
    })();
var oL = (() => {
    let o = class Ja {
        z;
        el;
        constructor(e, n, i) {
            this.z = i, e.detach(), this.el = n.nativeElement
        }
        static\ u0275fac = function(n) {
            return new(n || Ja)(v(V), v(H), v($))
        };
        static\ u0275cmp = P({
            type: Ja,
            selectors: [
                ["ion-icon"]
            ],
            inputs: {
                color: "color",
                flipRtl: "flipRtl",
                icon: "icon",
                ios: "ios",
                lazy: "lazy",
                md: "md",
                mode: "mode",
                name: "name",
                sanitize: "sanitize",
                size: "size",
                src: "src"
            },
            ngContentSelectors: K,
            decls: 1,
            vars: 0,
            template: function(n, i) {
                n & 1 && (G(), q(0))
            },
            encapsulation: 2,
            changeDetection: 0
        })
    };
    return o = U([et({
        defineCustomElementFn: l6,
        inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"]
    })], o), o
})();
var Qv = ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "shape", "spellcheck", "value", "wrap"],
    Jv = {
        provide: Nn,
        useExisting: xo(() => tf),
        multi: !0
    },
    tf = (() => {
        let o = class tr extends Bs {
            z;
            el;
            constructor(e, n, i, s) {
                super(s, n), this.z = i, e.detach(), this.el = n.nativeElement, Re(this, this.el, ["ionChange", "ionInput", "ionBlur", "ionFocus"])
            }
            handleIonInput(e) {
                this.handleValueChange(e, e.value)
            }
            static\ u0275fac = function(n) {
                return new(n || tr)(v(V), v(H), v($), v(kt))
            };
            static\ u0275cmp = P({
                type: tr,
                selectors: [
                    ["ion-textarea"]
                ],
                hostBindings: function(n, i) {
                    n & 1 && Zt("ionInput", function(a) {
                        return i.handleIonInput(a.target)
                    })
                },
                inputs: {
                    autoGrow: "autoGrow",
                    autocapitalize: "autocapitalize",
                    autofocus: "autofocus",
                    clearOnEdit: "clearOnEdit",
                    color: "color",
                    cols: "cols",
                    counter: "counter",
                    counterFormatter: "counterFormatter",
                    debounce: "debounce",
                    disabled: "disabled",
                    enterkeyhint: "enterkeyhint",
                    errorText: "errorText",
                    fill: "fill",
                    helperText: "helperText",
                    inputmode: "inputmode",
                    label: "label",
                    labelPlacement: "labelPlacement",
                    maxlength: "maxlength",
                    minlength: "minlength",
                    mode: "mode",
                    name: "name",
                    placeholder: "placeholder",
                    readonly: "readonly",
                    required: "required",
                    rows: "rows",
                    shape: "shape",
                    spellcheck: "spellcheck",
                    value: "value",
                    wrap: "wrap"
                },
                features: [So([Jv]), Yt],
                ngContentSelectors: K,
                decls: 1,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (G(), q(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        };
        return o = U([et({
            defineCustomElementFn: p6,
            inputs: Qv,
            methods: ["setFocus", "getInputElement"]
        })], o), o
    })();

function O1(o) {
    o || (vi(O1), o = I(we));
    let t = new hi(e => o.onDestroy(e.next.bind(e)));
    return e => e.pipe(wo(t))
}

function g6(o, t) {
    let e = !t ? .manualCleanup;
    e && !t ? .injector && vi(g6);
    let n = e ? t ? .injector ? .get(we) ? ? I(we) : null,
        i = ef(t ? .equal),
        s;
    t ? .requireSync ? s = Fe({
        kind: 0
    }, {
        equal: i
    }) : s = Fe({
        kind: 1,
        value: t ? .initialValue
    }, {
        equal: i
    });
    let a = o.subscribe({
        next: r => s.set({
            kind: 1,
            value: r
        }),
        error: r => {
            if (t ? .rejectErrors) throw r;
            s.set({
                kind: 2,
                error: r
            })
        }
    });
    if (t ? .requireSync && s().kind === 0) throw new dt(601, !1);
    return n ? .onDestroy(a.unsubscribe.bind(a)), qe(() => {
        let r = s();
        switch (r.kind) {
            case 1:
                return r.value;
            case 2:
                throw r.error;
            case 0:
                throw new dt(601, !1)
        }
    }, {
        equal: t ? .equal
    })
}

function ef(o = Object.is) {
    return (t, e) => t.kind === 1 && e.kind === 1 && o(t.value, e.value)
}
var nr = class {
        translations;
        constructor(t) {
            this.translations = t
        }
        getTranslation(t) {
            return O(this.translations.get(t) || {})
        }
    },
    f6 = new tt("");

function er(o, t) {
    return o && (Object.prototype.hasOwnProperty.call(o, t) ? o[t] : t.split(".").reduce((e, n) => e ? .[n], o))
}

function of (o, t, e) {
    o = y({}, o);
    let n = t.split("."),
        i = n.length - 1;
    return n.reduce((s, a, r) => (r === i ? s[a] = e : s[a] = Array.isArray(s[a]) ? s[a].slice() : y({}, s[a]), s && s[a]), o), o
}

function w6(o) {
    return o ? Array.isArray(o) ? o.length : F1(o) ? Object.keys(o).length : o ? o.length : 0 : 0
}

function nf(o) {
    return w6(o) === 0
}

function sf(o) {
    return typeof o == "function"
}

function sn(o) {
    return typeof o == "string"
}

function F1(o) {
    return !!o && typeof o == "object" && !Array.isArray(o)
}

function x6(o) {
    return o.replace(/(?:^\w|[A-Z]|\b\w)/g, (t, e) => e == 0 ? t.toLowerCase() : t.toUpperCase()).replace(/\s+|_|-|\//g, "")
}

function ir(o) {
    return o == null
}

function m6(o) {
    return ir(o) === !1
}

function b6(o) {
    return o && typeof o.scope == "string"
}

function af(o) {
    return o && F1(o.loader)
}

function v6(o) {
    let t = {};

    function e(n, i) {
        if (n === null) t[i] = null;
        else if (F1(n))
            for (let [s, a] of Object.entries(n)) e(a, i ? `${i}.${s}` : s);
        else t[i] = n
    }
    return e(o, ""), t
}

function rf(o) {
    let t = {};
    for (let [e, n] of Object.entries(o)) {
        let i = e.split("."),
            s = t;
        i.forEach((a, r) => {
            r === i.length - 1 ? s[a] = n : (s[a] ? ? = {}, s = s[a])
        })
    }
    return t
}
var an = new tt("", {
        providedIn: "root",
        factory: () => nn
    }),
    nn = {
        defaultLang: "en",
        reRenderOnLangChange: !1,
        prodMode: !1,
        failedRetries: 2,
        fallbackLang: [],
        availableLangs: [],
        missingHandler: {
            logMissingKey: !0,
            useFallbackTranslation: !1,
            allowEmpty: !1
        },
        flatten: {
            aot: !1
        },
        interpolation: ["{{", "}}"],
        scopes: {
            keepCasing: !1
        }
    };

function lf(o = {}) {
    return Q(y(y({}, nn), o), {
        missingHandler: y(y({}, nn.missingHandler), o.missingHandler),
        flatten: y(y({}, nn.flatten), o.flatten),
        scopes: y(y({}, nn.scopes), o.scopes)
    })
}
var k6 = new tt(""),
    cf = (() => {
        class o {
            config = I(an, {
                optional: !0
            }) ? ? nn;
            get interpolationMatcher() {
                return df(this.config)
            }
            transpile({
                value: e,
                params: n = {},
                translation: i,
                key: s
            }) {
                if (sn(e)) {
                    let a, r = e;
                    for (;
                        (a = this.interpolationMatcher.exec(r)) !== null;) {
                        let [l, c] = a;
                        r = r.replace(l, () => {
                            let d = c.trim(),
                                p = er(n, d);
                            return m6(p) ? p : m6(i[d]) ? this.transpile({
                                params: n,
                                translation: i,
                                key: s,
                                value: i[d]
                            }) : ""
                        })
                    }
                    return r
                } else n && (F1(e) ? e = this.handleObject({
                    value: e,
                    params: n,
                    translation: i,
                    key: s
                }) : Array.isArray(e) && (e = this.handleArray({
                    value: e,
                    params: n,
                    translation: i,
                    key: s
                })));
                return e
            }
            handleObject({
                value: e,
                params: n = {},
                translation: i,
                key: s
            }) {
                let a = e;
                return Object.keys(n).forEach(r => {
                    let l = this.transpile({
                        value: er(a, r),
                        params: er(n, r),
                        translation: i,
                        key: s
                    });
                    a = of (a, r, l)
                }), a
            }
            handleArray(i) {
                var s = i,
                    {
                        value: e
                    } = s,
                    n = di(s, ["value"]);
                return e.map(a => this.transpile(y({
                    value: a
                }, n)))
            }
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac
            })
        }
        return o
    })();

function df(o) {
    let [t, e] = o.interpolation;
    return new RegExp(`${t}([^${t}${e}]*?)${e}`, "g")
}
var y6 = new tt(""),
    hf = (() => {
        class o {
            handle(e, n) {
                if (n.missingHandler.logMissingKey && !n.prodMode) {
                    let i = `Missing translation for '${e}'`;
                    console.warn(`%c ${i}`, "font-size: 12px; color: red")
                }
                return e
            }
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac
            })
        }
        return o
    })(),
    M6 = new tt(""),
    pf = (() => {
        class o {
            preSaveTranslation(e) {
                return e
            }
            preSaveTranslationKey(e, n) {
                return n
            }
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac
            })
        }
        return o
    })(),
    C6 = new tt(""),
    uf = (() => {
        class o {
            userConfig;
            constructor(e) {
                this.userConfig = e
            }
            getNextLangs() {
                let e = this.userConfig.fallbackLang;
                if (!e) throw new Error("When using the default fallback, a fallback language must be provided in the config!");
                return Array.isArray(e) ? e : [e]
            }
            static\ u0275fac = function(n) {
                return new(n || o)(X(an))
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac
            })
        }
        return o
    })();

function ri(o) {
    if (!o) return "";
    let t = o.split("/");
    return t.pop(), t.join("/")
}

function Pe(o) {
    return o ? o.split("/").pop() : ""
}

function sr(o, t, e = "|") {
    if (sn(o)) {
        let n = o.split(e),
            i = n.pop();
        return i === t ? [!0, n.toString()] : [!1, i]
    }
    return [!1, ""]
}

function z6(o, t) {
    let [e] = sr(t, "static");
    return e ? !1 : !!o.config.reRenderOnLangChange
}

function S6(o) {
    return o ? t => t : oe(1)
}

function gf(o, t) {
    return Object.keys(o).reduce((e, n) => (e[`${t}/${n}`] = o[n], e), {})
}

function rr(o, t) {
    return af(o) ? gf(o.loader, t) : void 0
}

function or(o) {
    return {
        scope: ri(o) || null,
        langName: Pe(o)
    }
}

function A6(o) {
    let {
        path: t,
        inlineLoader: e,
        mainLoader: n,
        data: i
    } = o;
    if (e) {
        let s = e[t];
        if (sf(s) === !1) throw `You're using an inline loader but didn't provide a loader for ${t}`;
        return e[t]().then(a => a.default ? a.default : a)
    }
    return n.getTranslation(t, i)
}

function mf({
    mainLoader: o,
    path: t,
    data: e,
    fallbackPath: n,
    inlineLoader: i
}) {
    return (n ? [t, n] : [t]).map(a => {
        let r = A6({
            path: a,
            mainLoader: o,
            inlineLoader: i,
            data: e
        });
        return Et(r).pipe(J(l => ({
            translation: l,
            lang: a
        })))
    })
}
var vf;
var I6 = (() => {
        class o {
            loader;
            parser;
            missingHandler;
            interceptor;
            fallbackStrategy;
            langChanges$;
            translations = new Map;
            cache = new Map;
            firstFallbackLang;
            defaultLang = "";
            availableLangs = [];
            isResolvedMissingOnce = !1;
            lang;
            failedLangs = new Set;
            events = new gt;
            events$ = this.events.asObservable();
            config;
            destroyRef = I(we);
            constructor(e, n, i, s, a, r) {
                this.loader = e, this.parser = n, this.missingHandler = i, this.interceptor = s, this.fallbackStrategy = r, this.loader || (this.loader = new nr(this.translations)), vf = this, this.config = JSON.parse(JSON.stringify(a)), this.setAvailableLangs(this.config.availableLangs || []), this.setFallbackLangForMissingTranslation(this.config), this.setDefaultLang(this.config.defaultLang), this.lang = new St(this.getDefaultLang()), this.langChanges$ = this.lang.asObservable(), this.events$.subscribe(l => {
                    l.type === "translationLoadSuccess" && l.wasFailure && this.setActiveLang(l.payload.langName)
                }), this.destroyRef.onDestroy(() => {
                    this.lang.complete(), this.events.complete(), this.cache.clear()
                })
            }
            getDefaultLang() {
                return this.defaultLang
            }
            setDefaultLang(e) {
                this.defaultLang = e
            }
            getActiveLang() {
                return this.lang.getValue()
            }
            setActiveLang(e) {
                return this.parser.onLangChanged ? .(e), this.lang.next(e), this.events.next({
                    type: "langChanged",
                    payload: or(e)
                }), this
            }
            setAvailableLangs(e) {
                this.availableLangs = e
            }
            getAvailableLangs() {
                return this.availableLangs
            }
            load(e, n = {}) {
                let i = this.cache.get(e);
                if (i) return i;
                let s, a = this._isLangScoped(e),
                    r;
                a && (r = ri(e));
                let l = {
                    path: e,
                    mainLoader: this.loader,
                    inlineLoader: n.inlineLoader,
                    data: a ? {
                        scope: r
                    } : void 0
                };
                if (this.useFallbackTranslation(e)) {
                    let d = a ? `${r}/${this.firstFallbackLang}` : this.firstFallbackLang,
                        p = mf(Q(y({}, l), {
                            fallbackPath: d
                        }));
                    s = fo(p)
                } else {
                    let d = A6(l);
                    s = Et(d)
                }
                let c = s.pipe(xr(this.config.failedRetries), Mt(d => {
                    if (Array.isArray(d)) {
                        d.forEach(p => {
                            this.handleSuccess(p.lang, p.translation), p.lang !== e && this.cache.set(p.lang, O({}))
                        });
                        return
                    }
                    this.handleSuccess(e, d)
                }), Be(d => (this.config.prodMode || console.error(`Error while trying to load "${e}"`, d), this.handleFailure(e, n))), kr(1), O1(this.destroyRef));
                return this.cache.set(e, c), c
            }
            translate(e, n = {}, i = this.getActiveLang()) {
                if (!e) return e;
                let {
                    scope: s,
                    resolveLang: a
                } = this.resolveLangAndScope(i);
                if (Array.isArray(e)) return e.map(c => this.translate(s ? `${s}.${c}` : c, n, a));
                e = s ? `${s}.${e}` : e;
                let r = this.getTranslation(a),
                    l = r[e];
                return l ? this.parser.transpile({
                    value: l,
                    params: n,
                    translation: r,
                    key: e
                }) : this._handleMissingKey(e, l, n)
            }
            selectTranslate(e, n, i, s = !1) {
                let a, r = (c, d) => this.load(c, d).pipe(J(() => s ? this.translateObject(e, n, c) : this.translate(e, n, c)));
                if (ir(i)) return this.langChanges$.pipe(wt(c => r(c)));
                if (i = Array.isArray(i) ? i[0] : i, b6(i)) {
                    let c = i;
                    i = c.scope, a = rr(c, c.scope)
                }
                if (i = i, this.isLang(i) || this.isScopeWithLang(i)) return r(i);
                let l = i;
                return this.langChanges$.pipe(wt(c => r(`${l}/${c}`, {
                    inlineLoader: a
                })))
            }
            isScopeWithLang(e) {
                return this.isLang(Pe(e))
            }
            translateObject(e, n = {}, i = this.getActiveLang()) {
                if (sn(e) || Array.isArray(e)) {
                    let {
                        resolveLang: a,
                        scope: r
                    } = this.resolveLangAndScope(i);
                    if (Array.isArray(e)) return e.map(d => this.translateObject(r ? `${r}.${d}` : d, n, a));
                    let l = this.getTranslation(a);
                    e = r ? `${r}.${e}` : e;
                    let c = rf(this.getObjectByKey(l, e));
                    return nf(c) ? this.translate(e, n, i) : this.parser.transpile({
                        value: c,
                        params: n,
                        translation: l,
                        key: e
                    })
                }
                let s = [];
                for (let [a, r] of this.getEntries(e)) s.push(this.translateObject(a, r, i));
                return s
            }
            selectTranslateObject(e, n, i) {
                if (sn(e) || Array.isArray(e)) return this.selectTranslate(e, n, i, !0);
                let [
                    [s, a], ...r
                ] = this.getEntries(e);
                return this.selectTranslateObject(s, a, i).pipe(J(l => {
                    let c = [l];
                    for (let [d, p] of r) c.push(this.translateObject(d, p, i));
                    return c
                }))
            }
            getTranslation(e) {
                if (e) {
                    if (this.isLang(e)) return this.translations.get(e) || {}; {
                        let {
                            scope: n,
                            resolveLang: i
                        } = this.resolveLangAndScope(e), s = this.translations.get(i) || {};
                        return this.getObjectByKey(s, n)
                    }
                }
                return this.translations
            }
            selectTranslation(e) {
                let n = this.langChanges$;
                if (e) {
                    let i = Pe(e) !== e;
                    this.isLang(e) || i ? n = O(e) : n = this.langChanges$.pipe(J(s => `${e}/${s}`))
                }
                return n.pipe(wt(i => this.load(i).pipe(J(() => this.getTranslation(i)))))
            }
            setTranslation(e, n = this.getActiveLang(), i = {}) {
                let a = y(y({}, {
                        merge: !0,
                        emitChange: !0
                    }), i),
                    r = ri(n),
                    l = e;
                if (r) {
                    let m = this.getMappedScope(r);
                    l = v6({
                        [m]: e
                    })
                }
                let c = r ? Pe(n) : n,
                    d = y(y({}, a.merge && this.getTranslation(c)), l),
                    p = this.config.flatten.aot ? d : v6(d),
                    g = this.interceptor.preSaveTranslation(p, c);
                this.translations.set(c, g), a.emitChange && this.setActiveLang(this.getActiveLang())
            }
            setTranslationKey(e, n, i = {}) {
                let s = i.lang || this.getActiveLang(),
                    a = this.interceptor.preSaveTranslationKey(e, n, s),
                    r = {
                        [e]: a
                    };
                this.setTranslation(r, s, Q(y({}, i), {
                    merge: !0
                }))
            }
            setFallbackLangForMissingTranslation({
                fallbackLang: e
            }) {
                let n = Array.isArray(e) ? e[0] : e;
                e && this.useFallbackTranslation(n) && (this.firstFallbackLang = n)
            }
            _handleMissingKey(e, n, i) {
                if (this.config.missingHandler.allowEmpty && n === "") return "";
                if (!this.isResolvedMissingOnce && this.useFallbackTranslation()) {
                    this.isResolvedMissingOnce = !0;
                    let s = this.translate(e, i, this.firstFallbackLang);
                    return this.isResolvedMissingOnce = !1, s
                }
                return this.missingHandler.handle(e, this.getMissingHandlerData(), i)
            }
            _isLangScoped(e) {
                return this.getAvailableLangsIds().indexOf(e) === -1
            }
            isLang(e) {
                return this.getAvailableLangsIds().indexOf(e) !== -1
            }
            _loadDependencies(e, n) {
                let i = Pe(e);
                return this._isLangScoped(e) && !this.isLoadedTranslation(i) ? ve([this.load(i), this.load(e, {
                    inlineLoader: n
                })]) : this.load(e, {
                    inlineLoader: n
                })
            }
            _completeScopeWithLang(e) {
                return this._isLangScoped(e) && !this.isLang(Pe(e)) ? `${e}/${this.getActiveLang()}` : e
            }
            _setScopeAlias(e, n) {
                this.config.scopeMapping || (this.config.scopeMapping = {}), this.config.scopeMapping[e] = n
            }
            isLoadedTranslation(e) {
                return w6(this.getTranslation(e))
            }
            getAvailableLangsIds() {
                let e = this.getAvailableLangs()[0];
                return sn(e) ? this.getAvailableLangs() : this.getAvailableLangs().map(n => n.id)
            }
            getMissingHandlerData() {
                return Q(y({}, this.config), {
                    activeLang: this.getActiveLang(),
                    availableLangs: this.availableLangs,
                    defaultLang: this.defaultLang
                })
            }
            useFallbackTranslation(e) {
                return this.config.missingHandler.useFallbackTranslation && e !== this.firstFallbackLang
            }
            handleSuccess(e, n) {
                this.setTranslation(n, e, {
                    emitChange: !1
                }), this.events.next({
                    wasFailure: !!this.failedLangs.size,
                    type: "translationLoadSuccess",
                    payload: or(e)
                }), this.failedLangs.forEach(i => this.cache.delete(i)), this.failedLangs.clear()
            }
            handleFailure(e, n) {
                ir(n.failedCounter) && (n.failedCounter = 0, n.fallbackLangs || (n.fallbackLangs = this.fallbackStrategy.getNextLangs(e)));
                let i = e.split("/"),
                    a = n.fallbackLangs[n.failedCounter];
                if (this.failedLangs.add(e), this.cache.has(a)) return this.handleSuccess(a, this.getTranslation(a)), Jt;
                let r = a === i[i.length - 1];
                if (!a || r) {
                    let c = "Unable to load translation and all the fallback languages";
                    throw i.length > 1 && (c += ", did you misspelled the scope name?"), new Error(c)
                }
                let l = a;
                return i.length > 1 && (i[i.length - 1] = a, l = i.join("/")), n.failedCounter++, this.events.next({
                    type: "translationLoadFailure",
                    payload: or(e)
                }), this.load(l, n)
            }
            getMappedScope(e) {
                let {
                    scopeMapping: n = {},
                    scopes: i = {
                        keepCasing: !1
                    }
                } = this.config;
                return n[e] || (i.keepCasing ? e : x6(e))
            }
            resolveLangAndScope(e) {
                let n = e,
                    i;
                if (this._isLangScoped(e)) {
                    let s = Pe(e),
                        a = this.isLang(s);
                    n = a ? s : this.getActiveLang(), i = this.getMappedScope(a ? ri(e) : e)
                }
                return {
                    scope: i,
                    resolveLang: n
                }
            }
            getObjectByKey(e, n) {
                let i = {},
                    s = `${n}.`;
                for (let a in e) a.startsWith(s) && (i[a.replace(s, "")] = e[a]);
                return i
            }
            getEntries(e) {
                return e instanceof Map ? e.entries() : Object.entries(e)
            }
            static\ u0275fac = function(n) {
                return new(n || o)(X(f6, 8), X(k6), X(y6), X(M6), X(an), X(C6))
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })(),
    ff = (() => {
        class o {
            html;
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275cmp = P({
                type: o,
                selectors: [
                    ["ng-component"]
                ],
                inputs: {
                    html: "html"
                },
                decls: 1,
                vars: 1,
                consts: [
                    [1, "transloco-loader-template", 3, "innerHTML"]
                ],
                template: function(n, i) {
                    n & 1 && bi(0, "div", 0), n & 2 && un("innerHTML", i.html, _r)
                },
                encapsulation: 2
            })
        }
        return o
    })(),
    ar = class {
        view;
        vcr;
        constructor(t, e) {
            this.view = t, this.vcr = e
        }
        attachView() {
            if (this.view instanceof fi) this.vcr.createEmbeddedView(this.view);
            else if (sn(this.view)) {
                let t = this.vcr.createComponent(ff);
                t.instance.html = this.view, t.hostView.detectChanges()
            } else this.vcr.createComponent(this.view)
        }
        detachView() {
            this.vcr.clear()
        }
    },
    L6 = new tt(""),
    wf = new tt(""),
    E6 = new tt(""),
    R1 = class {
        initialized = !1;
        resolve({
            inline: t,
            provider: e,
            active: n
        }) {
            let i = n;
            if (this.initialized) return i = n, i;
            if (e) {
                let [, s] = sr(e, "static");
                i = s
            }
            if (t) {
                let [, s] = sr(t, "static");
                i = s
            }
            return this.initialized = !0, i
        }
        resolveLangBasedOnScope(t) {
            return ri(t) ? Pe(t) : t
        }
        resolveLangPath(t, e) {
            return e ? `${e}/${t}` : t
        }
    },
    P1 = class {
        service;
        constructor(t) {
            this.service = t
        }
        resolve(t) {
            let {
                inline: e,
                provider: n
            } = t;
            if (e) return e;
            if (n) {
                if (b6(n)) {
                    let {
                        scope: i,
                        alias: s = this.service.config.scopes.keepCasing ? i : x6(i)
                    } = n;
                    return this.service._setScopeAlias(i, s), i
                }
                return n
            }
        }
    },
    BL = (() => {
        class o {
            destroyRef = I(we);
            service = I(I6);
            tpl = I(fi, {
                optional: !0
            });
            providerLang = I(L6, {
                optional: !0
            });
            providerScope = I(E6, {
                optional: !0
            });
            providedLoadingTpl = I(wf, {
                optional: !0
            });
            cdr = I(V);
            host = I(H);
            vcr = I(Te);
            renderer = I(Ue);
            view;
            memo = new Map;
            key;
            params = {};
            inlineScope;
            inlineRead;
            prefix;
            inlineLang;
            inlineTpl;
            currentLang;
            loaderTplHandler;
            initialized = !1;
            path;
            langResolver = new R1;
            scopeResolver = new P1(this.service);
            strategy = this.tpl === null ? "attribute" : "structural";
            static ngTemplateContextGuard(e, n) {
                return !0
            }
            ngOnInit() {
                let e = z6(this.service, this.providerLang || this.inlineLang);
                if (this.service.langChanges$.pipe(wt(n => {
                        let i = this.langResolver.resolve({
                            inline: this.inlineLang,
                            provider: this.providerLang,
                            active: n
                        });
                        return Array.isArray(this.providerScope) ? fo(this.providerScope.map(s => this.resolveScope(i, s))) : this.resolveScope(i, this.providerScope)
                    }), S6(e), O1(this.destroyRef)).subscribe(() => {
                        this.currentLang = this.langResolver.resolveLangBasedOnScope(this.path), this.strategy === "attribute" ? this.attributeStrategy() : this.structuralStrategy(this.currentLang, this.prefix || this.inlineRead), this.cdr.markForCheck(), this.initialized = !0
                    }), !this.initialized) {
                    let n = this.resolveLoadingContent();
                    n && (this.loaderTplHandler = new ar(n, this.vcr), this.loaderTplHandler.attachView())
                }
            }
            ngOnChanges(e) {
                this.strategy === "attribute" && Object.keys(e).some(i => !e[i].firstChange) && this.attributeStrategy()
            }
            attributeStrategy() {
                this.detachLoader(), this.renderer.setProperty(this.host.nativeElement, "innerText", this.service.translate(this.key, this.params, this.currentLang))
            }
            structuralStrategy(e, n) {
                this.memo.clear();
                let i = this.getTranslateFn(e, n);
                this.view ? (this.view.context.$implicit = i, this.view.context.currentLang = this.currentLang) : (this.detachLoader(), this.view = this.vcr.createEmbeddedView(this.tpl, {
                    $implicit: i,
                    currentLang: this.currentLang
                }))
            }
            getTranslateFn(e, n) {
                return (i, s) => {
                    let a = n ? `${n}.${i}` : i,
                        r = s ? `${a}${JSON.stringify(s)}` : a;
                    return this.memo.has(r) || this.memo.set(r, this.service.translate(a, s, e)), this.memo.get(r)
                }
            }
            resolveLoadingContent() {
                return this.inlineTpl || this.providedLoadingTpl
            }
            ngOnDestroy() {
                this.memo.clear()
            }
            detachLoader() {
                this.loaderTplHandler ? .detachView()
            }
            resolveScope(e, n) {
                let i = this.scopeResolver.resolve({
                    inline: this.inlineScope,
                    provider: n
                });
                this.path = this.langResolver.resolveLangPath(e, i);
                let s = rr(n, i);
                return this.service._loadDependencies(this.path, s)
            }
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275dir = Ct({
                type: o,
                selectors: [
                    ["", "transloco", ""]
                ],
                inputs: {
                    key: [0, "transloco", "key"],
                    params: [0, "translocoParams", "params"],
                    inlineScope: [0, "translocoScope", "inlineScope"],
                    inlineRead: [0, "translocoRead", "inlineRead"],
                    prefix: [0, "translocoPrefix", "prefix"],
                    inlineLang: [0, "translocoLang", "inlineLang"],
                    inlineTpl: [0, "translocoLoadingTpl", "inlineTpl"]
                },
                features: [je]
            })
        }
        return o
    })(),
    DL = (() => {
        class o {
            service;
            providerScope;
            providerLang;
            cdr;
            subscription = null;
            lastValue = "";
            lastKey;
            path;
            langResolver = new R1;
            scopeResolver;
            constructor(e, n, i, s) {
                this.service = e, this.providerScope = n, this.providerLang = i, this.cdr = s, this.scopeResolver = new P1(this.service)
            }
            transform(e, n, i) {
                if (!e) return e;
                let s = n ? `${e}${JSON.stringify(n)}` : e;
                if (s === this.lastKey) return this.lastValue;
                this.lastKey = s, this.subscription ? .unsubscribe();
                let a = z6(this.service, this.providerLang || i);
                return this.subscription = this.service.langChanges$.pipe(wt(r => {
                    let l = this.langResolver.resolve({
                        inline: i,
                        provider: this.providerLang,
                        active: r
                    });
                    return Array.isArray(this.providerScope) ? fo(this.providerScope.map(c => this.resolveScope(l, c))) : this.resolveScope(l, this.providerScope)
                }), S6(a)).subscribe(() => this.updateValue(e, n)), this.lastValue
            }
            ngOnDestroy() {
                this.subscription ? .unsubscribe(), this.subscription = null
            }
            updateValue(e, n) {
                let i = this.langResolver.resolveLangBasedOnScope(this.path);
                this.lastValue = this.service.translate(e, n, i), this.cdr.markForCheck()
            }
            resolveScope(e, n) {
                let i = this.scopeResolver.resolve({
                    inline: void 0,
                    provider: n
                });
                this.path = this.langResolver.resolveLangPath(e, i);
                let s = rr(n, i);
                return this.service._loadDependencies(this.path, s)
            }
            static\ u0275fac = function(n) {
                return new(n || o)(v(I6, 16), v(E6, 24), v(L6, 24), v(V, 16))
            };
            static\ u0275pipe = Fr({
                name: "transloco",
                type: o,
                pure: !1
            })
        }
        return o
    })();

function jL(o) {
    let t = [kf(cf), Mf(hf), Cf(pf), yf(uf)];
    return o.config && t.push(xf(o.config)), o.loader && t.push(bf(o.loader)), t
}

function xf(o) {
    return Ft([{
        provide: an,
        useValue: lf(o)
    }])
}

function bf(o) {
    return Ft([{
        provide: f6,
        useClass: o
    }])
}

function kf(o) {
    return Ft([{
        provide: k6,
        useClass: o,
        deps: [an]
    }])
}

function yf(o) {
    return Ft([{
        provide: C6,
        useClass: o,
        deps: [an]
    }])
}

function Mf(o) {
    return Ft([{
        provide: y6,
        useClass: o
    }])
}

function Cf(o) {
    return Ft([{
        provide: M6,
        useClass: o
    }])
}
var $L = new tt("TRANSLOCO_TEST_LANGS - Available testing languages"),
    HL = new tt("TRANSLOCO_TEST_OPTIONS - Testing options");
var VL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M256 112a56 56 0 1156-56 56.06 56.06 0 01-56 56z'/><path d='M432 112.8l-.45.12-.42.13c-1 .28-2 .58-3 .89-18.61 5.46-108.93 30.92-172.56 30.92-59.13 0-141.28-22-167.56-29.47a73.79 73.79 0 00-8-2.58c-19-5-32 14.3-32 31.94 0 17.47 15.7 25.79 31.55 31.76v.28l95.22 29.74c9.73 3.73 12.33 7.54 13.6 10.84 4.13 10.59.83 31.56-.34 38.88l-5.8 45-32.19 176.19q-.15.72-.27 1.47l-.23 1.27c-2.32 16.15 9.54 31.82 32 31.82 19.6 0 28.25-13.53 32-31.94s28-157.57 42-157.57 42.84 157.57 42.84 157.57c3.75 18.41 12.4 31.94 32 31.94 22.52 0 34.38-15.74 32-31.94a57.17 57.17 0 00-.76-4.06L329 301.27l-5.79-45c-4.19-26.21-.82-34.87.32-36.9a1.09 1.09 0 00.08-.15c1.08-2 6-6.48 17.48-10.79l89.28-31.21a16.9 16.9 0 001.62-.52c16-6 32-14.3 32-31.93S451 107.81 432 112.8z'/></svg>";
var OL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M256 112v288M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var RL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M186.62 464H160a16 16 0 01-14.57-22.6l64.46-142.25L113.1 297l-35.3 42.77C71.07 348.23 65.7 352 52 352H34.08a17.66 17.66 0 01-14.7-7.06c-2.38-3.21-4.72-8.65-2.44-16.41l19.82-71c.15-.53.33-1.06.53-1.58a.38.38 0 000-.15 14.82 14.82 0 01-.53-1.59l-19.84-71.45c-2.15-7.61.2-12.93 2.56-16.06a16.83 16.83 0 0113.6-6.7H52c10.23 0 20.16 4.59 26 12l34.57 42.05 97.32-1.44-64.44-142A16 16 0 01160 48h26.91a25 25 0 0119.35 9.8l125.05 152 57.77-1.52c4.23-.23 15.95-.31 18.66-.31C463 208 496 225.94 496 256c0 9.46-3.78 27-29.07 38.16-14.93 6.6-34.85 9.94-59.21 9.94-2.68 0-14.37-.08-18.66-.31l-57.76-1.54-125.36 152a25 25 0 01-19.32 9.75z'/></svg>";
var PL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z'/></svg>";
var FL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M456 128a40 40 0 00-37.23 54.6l-84.17 84.17a39.86 39.86 0 00-29.2 0l-60.17-60.17a40 40 0 10-74.46 0L70.6 306.77a40 40 0 1022.63 22.63L193.4 229.23a39.86 39.86 0 0029.2 0l60.17 60.17a40 40 0 1074.46 0l84.17-84.17A40 40 0 10456 128z'/></svg>";
var NL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M268 112l144 144-144 144M392 256H100' class='ionicon-fill-none'/></svg>";
var UL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var qL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M124 158v-22h-24v22M335.76 285.22v-13.31a80 80 0 00-131-61.6M176 258.78v13.31a80 80 0 00130.73 61.8' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M196 272l-20-20-20 20M356 272l-20 20-20-20' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var WL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M60.44 389.17c0 .07 0 .2-.08.38.03-.12.05-.25.08-.38zM439.9 405.6a26.77 26.77 0 01-9.59-2l-56.78-20.13-.42-.17a9.88 9.88 0 00-3.91-.76 10.32 10.32 0 00-3.62.66c-1.38.52-13.81 5.19-26.85 8.77-7.07 1.94-31.68 8.27-51.43 8.27-50.48 0-97.68-19.4-132.89-54.63A183.38 183.38 0 01100.3 215.1a175.9 175.9 0 014.06-37.58c8.79-40.62 32.07-77.57 65.55-104A194.76 194.76 0 01290.3 32c52.21 0 100.86 20 137 56.18 34.16 34.27 52.88 79.33 52.73 126.87a177.86 177.86 0 01-30.3 99.15l-.19.28-.74 1c-.17.23-.34.45-.5.68l-.15.27a21.63 21.63 0 00-1.08 2.09l15.74 55.94a26.42 26.42 0 011.12 7.11 24 24 0 01-24.03 24.03z'/><path d='M299.87 425.39a15.74 15.74 0 00-10.29-8.1c-5.78-1.53-12.52-1.27-17.67-1.65a201.78 201.78 0 01-128.82-58.75A199.21 199.21 0 0186.4 244.16C85 234.42 85 232 85 232a16 16 0 00-28-10.58s-7.88 8.58-11.6 17.19a162.09 162.09 0 0011 150.06C59 393 59 395 58.42 399.5c-2.73 14.11-7.51 39-10 51.91a24 24 0 008 22.92l.46.39A24.34 24.34 0 0072 480a23.42 23.42 0 009-1.79l53.51-20.65a8.05 8.05 0 015.72 0c21.07 7.84 43 12 63.78 12a176 176 0 0074.91-16.66c5.46-2.56 14-5.34 19-11.12a15 15 0 001.95-16.39z'/></svg>";
var GL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
var XL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
var YL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
var ZL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56M192 400.1l64 63.9 64-63.9M256 224v224.03' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var KL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M93.72 183.25C49.49 198.05 16 233.1 16 288c0 66 54 112 120 112h184.37M467.82 377.74C485.24 363.3 496 341.61 496 312c0-59.82-53-85.76-96-88-8.89-89.54-71-144-144-144-26.16 0-48.79 6.93-67.6 18.14' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M448 448L64 64' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var QL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M473.66 210c-14-10.38-31.2-18-49.36-22.11a16.11 16.11 0 01-12.19-12.22c-7.8-34.75-24.59-64.55-49.27-87.13C334.15 62.25 296.21 47.79 256 47.79c-35.35 0-68 11.08-94.37 32.05a150.07 150.07 0 00-42.06 53 16 16 0 01-11.31 8.87c-26.75 5.4-50.9 16.87-69.34 33.12C13.46 197.33 0 227.24 0 261.39c0 34.52 14.49 66 40.79 88.76 25.12 21.69 58.94 33.64 95.21 33.64h104V230.42l-36.69 36.69a16 16 0 01-23.16-.56c-5.8-6.37-5.24-16.3.85-22.39l63.69-63.68a16 16 0 0122.62 0L331 244.14c6.28 6.29 6.64 16.6.39 22.91a16 16 0 01-22.68.06L272 230.42v153.37h124c31.34 0 59.91-8.8 80.45-24.77 23.26-18.1 35.55-44 35.55-74.83 0-29.94-13.26-55.61-38.34-74.19zM240 448.21a16 16 0 1032 0v-64.42h-32z'/></svg>";
var JL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M160 389a20.91 20.91 0 01-13.82-5.2l-128-112a21 21 0 010-31.6l128-112a21 21 0 0127.66 31.61L63.89 256l109.94 96.19A21 21 0 01160 389zM352 389a21 21 0 01-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0127.66-31.61l128 112a21 21 0 010 31.6l-128 112A20.89 20.89 0 01352 389z'/></svg>";
var tE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='128' y='128' width='336' height='336' rx='57' ry='57' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var eE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path stroke-linecap='round' stroke-linejoin='round' d='M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M69 153.99l187 110 187-110M256 463.99v-200' class='ionicon-fill-none ionicon-stroke-width'/><ellipse cx='256' cy='152' rx='24' ry='16'/><ellipse cx='208' cy='296' rx='16' ry='24'/><ellipse cx='112' cy='328' rx='16' ry='24'/><ellipse cx='304' cy='296' rx='16' ry='24'/><ellipse cx='400' cy='240' rx='16' ry='24'/><ellipse cx='304' cy='384' rx='16' ry='24'/><ellipse cx='400' cy='328' rx='16' ry='24'/></svg>";
var oE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M176 272l80 80 80-80M256 48v288' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var nE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M335.72 330.76C381.73 299.5 416 251.34 416 192a160 160 0 00-320 0v206.57c0 44.26 35.74 81.43 80 81.43h0c44.26 0 66.83-25.94 77.29-40 14.77-19.81 41.71-81.56 82.43-109.24z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M160 304V184c0-48.4 43.2-88 96-88h0c52.8 0 96 39.6 96 88' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M160 239c25-18 79.82-15 79.82-15 26 0 41.17 29.42 26 50.6 0 0-36.86 42.4-41.86 61.4' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var iE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var sE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 224h-68a128 128 0 00-247.9 0H64a32 32 0 000 64h68.05A128 128 0 00380 288h68a32 32 0 000-64zm-192 96a64 64 0 1164-64 64.07 64.07 0 01-64 64z'/></svg>";
var aE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z'/><path d='M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z'/></svg>";
var rE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M450.29 112H142c-34 0-62 27.51-62 61.33v245.34c0 33.82 28 61.33 62 61.33h308c34 0 62-26.18 62-60V173.33c0-33.82-27.68-61.33-61.71-61.33zm-77.15 61.34a46 46 0 11-46.28 46 46.19 46.19 0 0146.28-46.01zm-231.55 276c-17 0-29.86-13.75-29.86-30.66v-64.83l90.46-80.79a46.54 46.54 0 0163.44 1.83L328.27 337l-113 112.33zM480 418.67a30.67 30.67 0 01-30.71 30.66H259L376.08 333a46.24 46.24 0 0159.44-.16L480 370.59z'/><path d='M384 32H64A64 64 0 000 96v256a64.11 64.11 0 0048 62V152a72 72 0 0172-72h326a64.11 64.11 0 00-62-48z'/></svg>",
    lE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 112V96a48.14 48.14 0 00-48-48H64a48.14 48.14 0 00-48 48v256a48.14 48.14 0 0048 48h16' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect x='96' y='128' width='400' height='336' rx='45.99' ry='45.99' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><ellipse cx='372.92' cy='219.64' rx='30.77' ry='30.55' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M342.15 372.17L255 285.78a30.93 30.93 0 00-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0141.46-1.87L496 402.91' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var cE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z'/></svg>";
var dE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M478.33 433.6l-90-218a22 22 0 00-40.67 0l-90 218a22 22 0 1040.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 00458 464a22 22 0 0020.32-30.4zM334.83 362L368 281.65 401.17 362zM267.84 342.92a22 22 0 00-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 000-44H214V70a22 22 0 00-44 0v20H54a22 22 0 000 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 00-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1021.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0030.75-4.9z'/></svg>",
    hE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M48 112h288M192 64v48M272 448l96-224 96 224M301.5 384h133M281.3 112S257 206 199 277 80 384 80 384' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 336s-35-27-72-75-56-85-56-85' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var pE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path stroke-linecap='round' stroke-linejoin='round' d='M201.14 64L256 32l54.86 32' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M256 32v80' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M310.86 448L256 480l-54.86-32' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M256 480v-80' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M64 207.51V144l53.15-31.51' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M64 144l67.29 40' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M448 304.49V368l-53.15 31.51' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M448 368l-67.29-40' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M117.15 400L64 368v-63.51' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M64 368l66.64-40' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M394.85 112.49L448 144v63.51' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M448 144l-67.29 40M256 320v-64l54.86-32M256 256l-54.86-32' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var uE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M192 448h128M384 208v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32M256 368v80' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 320a78.83 78.83 0 01-56.55-24.1A80.89 80.89 0 01176 239V128a79.69 79.69 0 0180-80c44.86 0 80 35.14 80 80v111c0 44.66-35.89 81-80 81z'/></svg>";
var gE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M192 448h128M384 208v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32M256 368v80' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 64a63.68 63.68 0 00-64 64v111c0 35.2 29 65 64 65s64-29 64-65V128c0-36-28-64-64-64z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var mE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='336' cy='128' r='32' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='176' cy='256' r='32' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='336' cy='384' r='32' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var vE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z'/></svg>";
var fE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93zM256 432a175.49 175.49 0 01-126-53.22 122.91 122.91 0 0135.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.87 122.87 0 01382 378.78 175.45 175.45 0 01256 432z'/></svg>";
var wE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M216.32 334.44l114.45-69.14a10.89 10.89 0 000-18.6l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31z'/></svg>";
var xE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M320 146s24.36-12-64-12a160 160 0 10160 160' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M256 58l80 80-80 80' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var bE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M336 192h40a40 40 0 0140 40v192a40 40 0 01-40 40H136a40 40 0 01-40-40V232a40 40 0 0140-40h40M336 128l-80-80-80 80M256 321V48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var kE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='128' cy='256' r='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='384' cy='112' r='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='384' cy='400' r='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var yE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M208 512a24.84 24.84 0 01-23.34-16l-39.84-103.6a16.06 16.06 0 00-9.19-9.19L32 343.34a25 25 0 010-46.68l103.6-39.84a16.06 16.06 0 009.19-9.19L184.66 144a25 25 0 0146.68 0l39.84 103.6a16.06 16.06 0 009.19 9.19l103 39.63a25.49 25.49 0 0116.63 24.1 24.82 24.82 0 01-16 22.82l-103.6 39.84a16.06 16.06 0 00-9.19 9.19L231.34 496A24.84 24.84 0 01208 512zm66.85-254.84zM88 176a14.67 14.67 0 01-13.69-9.4l-16.86-43.84a7.28 7.28 0 00-4.21-4.21L9.4 101.69a14.67 14.67 0 010-27.38l43.84-16.86a7.31 7.31 0 004.21-4.21L74.16 9.79A15 15 0 0186.23.11a14.67 14.67 0 0115.46 9.29l16.86 43.84a7.31 7.31 0 004.21 4.21l43.84 16.86a14.67 14.67 0 010 27.38l-43.84 16.86a7.28 7.28 0 00-4.21 4.21l-16.86 43.84A14.67 14.67 0 0188 176zM400 256a16 16 0 01-14.93-10.26l-22.84-59.37a8 8 0 00-4.6-4.6l-59.37-22.84a16 16 0 010-29.86l59.37-22.84a8 8 0 004.6-4.6l22.67-58.95a16.45 16.45 0 0113.17-10.57 16 16 0 0116.86 10.15l22.84 59.37a8 8 0 004.6 4.6l59.37 22.84a16 16 0 010 29.86l-59.37 22.84a8 8 0 00-4.6 4.6l-22.84 59.37A16 16 0 01400 256z'/></svg>";
var ME = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M310.4 336H201.6a25.62 25.62 0 01-25.6-25.6V201.6a25.62 25.62 0 0125.6-25.6h108.8a25.62 25.62 0 0125.6 25.6v108.8a25.62 25.62 0 01-25.6 25.6z'/></svg>";
var CE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M304 48l112 112-112 112M398.87 160H96M208 464L96 352l112-112M114 352h302' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
    zE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M304 48l112 112-112 112M398.87 160H96M208 464L96 352l112-112M114 352h302' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var SE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M296 64h-80a7.91 7.91 0 00-8 8v24h96V72a7.91 7.91 0 00-8-8z' class='ionicon-fill-none'/><path d='M432 96h-96V72a40 40 0 00-40-40h-80a40 40 0 00-40 40v24H80a16 16 0 000 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 000-32zM192.57 416H192a16 16 0 01-16-15.43l-8-224a16 16 0 1132-1.14l8 224A16 16 0 01192.57 416zM272 400a16 16 0 01-32 0V176a16 16 0 0132 0zm32-304h-96V72a7.91 7.91 0 018-8h80a7.91 7.91 0 018 8zm32 304.57A16 16 0 01320 416h-.58A16 16 0 01304 399.43l8-224a16 16 0 1132 1.14z'/></svg>";
var AE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 384.39a32 32 0 01-13-2.77 15.77 15.77 0 01-2.71-1.54l-82.71-58.22A32 32 0 01352 295.7v-79.4a32 32 0 0113.58-26.16l82.71-58.22a15.77 15.77 0 012.71-1.54 32 32 0 0145 29.24v192.76a32 32 0 01-32 32zM268 400H84a68.07 68.07 0 01-68-68V180a68.07 68.07 0 0168-68h184.48A67.6 67.6 0 01336 179.52V332a68.07 68.07 0 01-68 68z'/></svg>";
var IE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path stroke-linecap='round' stroke-linejoin='round' d='M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M50.19 140.57A51.94 51.94 0 0032 180v152a52.15 52.15 0 0052 52h184a51.6 51.6 0 0022-4.9M208 128h60.48A51.68 51.68 0 01320 179.52V248M416 416L80 80' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var LE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var EE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M264 416.19a23.92 23.92 0 01-14.21-4.69l-.66-.51-91.46-75H88a24 24 0 01-24-24V200a24 24 0 0124-24h69.65l91.46-75 .66-.51A24 24 0 01288 119.83v272.34a24 24 0 01-24 24zM352 336a16 16 0 01-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0128.5-14.54C378.2 208.16 384 231.47 384 256c0 23.83-6 47.78-17.7 71.18A16 16 0 01352 336z'/><path d='M400 384a16 16 0 01-13.87-24C405 327.05 416 299.45 416 256c0-44.12-10.94-71.52-29.83-103.95A16 16 0 01413.83 136C434.92 172.16 448 204.88 448 256c0 50.36-13.06 83.24-34.12 120a16 16 0 01-13.88 8z'/></svg>",
    BE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M157.65 192H88a8 8 0 00-8 8v112a8 8 0 008 8h69.65a16 16 0 0110.14 3.63l91.47 75a8 8 0 0012.74-6.46V119.83a8 8 0 00-12.74-6.44l-91.47 75a16 16 0 01-10.14 3.61zM352 320c9.74-19.41 16-40.81 16-64 0-23.51-6-44.4-16-64M400 368c19.48-34 32-64 32-112s-12-77.7-32-112' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var DE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M416 432L64 80' class='ionicon-fill-none ionicon-stroke-width'/><path d='M224 136.92v33.8a4 4 0 001.17 2.82l24 24a4 4 0 006.83-2.82v-74.15a24.53 24.53 0 00-12.67-21.72 23.91 23.91 0 00-25.55 1.83 8.27 8.27 0 00-.66.51l-31.94 26.15a4 4 0 00-.29 5.92l17.05 17.06a4 4 0 005.37.26zM224 375.08l-78.07-63.92a32 32 0 00-20.28-7.16H64v-96h50.72a4 4 0 002.82-6.83l-24-24a4 4 0 00-2.82-1.17H56a24 24 0 00-24 24v112a24 24 0 0024 24h69.76l91.36 74.8a8.27 8.27 0 00.66.51 23.93 23.93 0 0025.85 1.69A24.49 24.49 0 00256 391.45v-50.17a4 4 0 00-1.17-2.82l-24-24a4 4 0 00-6.83 2.82zM125.82 336zM352 256c0-24.56-5.81-47.88-17.75-71.27a16 16 0 00-28.5 14.54C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 002.32 6.25l19.66 19.67a4 4 0 006.75-2A146.89 146.89 0 00352 256zM416 256c0-51.19-13.08-83.89-34.18-120.06a16 16 0 00-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 001.9 8.26l16.77 16.76a4 4 0 006.52-1.27C410.09 315.88 416 289.91 416 256z'/><path d='M480 256c0-74.26-20.19-121.11-50.51-168.61a16 16 0 10-27 17.22C429.82 147.38 448 189.5 448 256c0 47.45-8.9 82.12-23.59 113a4 4 0 00.77 4.55L443 391.39a4 4 0 006.4-1C470.88 348.22 480 307 480 256z'/></svg>";
var lr, zf = function() {
        if (typeof window > "u") return new Map;
        if (!lr) {
            var o = window;
            o.Ionicons = o.Ionicons || {}, lr = o.Ionicons.map = o.Ionicons.map || new Map
        }
        return lr
    },
    Sf = function(o) {
        Object.keys(o).forEach(function(t) {
            B6(t, o[t]);
            var e = t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, "$1-$2").toLowerCase();
            t !== e && B6(e, o[t])
        })
    },
    B6 = function(o, t) {
        var e = zf(),
            n = e.get(o);
        n === void 0 ? e.set(o, t) : n !== t && console.warn('[Ionicons Warning]: Multiple icons were mapped to name "'.concat(o, '". Ensure that multiple icons are not mapped to the same icon name.'))
    };
var cr;
try {
    cr = typeof Intl < "u" && Intl.v8BreakIterator
} catch {
    cr = !1
}
var D6 = (() => {
    class o {
        _platformId = I(ko);
        isBrowser = this._platformId ? n2(this._platformId) : typeof document == "object" && !!document;
        EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        BLINK = this.isBrowser && !!(window.chrome || cr) && typeof CSS < "u" && !this.EDGE && !this.TRIDENT;
        WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
        FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
        constructor() {}
        static\ u0275fac = function(n) {
            return new(n || o)
        };
        static\ u0275prov = N({
            token: o,
            factory: o.\u0275fac,
            providedIn: "root"
        })
    }
    return o
})();

function dr(o) {
    return Array.isArray(o) ? o : [o]
}
var j6 = new Set,
    go, Af = (() => {
        class o {
            _platform = I(D6);
            _nonce = I(cn, {
                optional: !0
            });
            _matchMedia;
            constructor() {
                this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : Lf
            }
            matchMedia(e) {
                return (this._platform.WEBKIT || this._platform.BLINK) && If(e, this._nonce), this._matchMedia(e)
            }
            static\ u0275fac = function(n) {
                return new(n || o)
            };
            static\ u0275prov = N({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })();

function If(o, t) {
    if (!j6.has(o)) try {
        go || (go = document.createElement("style"), t && go.setAttribute("nonce", t), go.setAttribute("type", "text/css"), document.head.appendChild(go)), go.sheet && (go.sheet.insertRule(`@media ${o} {body{ }}`, 0), j6.add(o))
    } catch (e) {
        console.error(e)
    }
}

function Lf(o) {
    return {
        matches: o === "all" || o === "",
        media: o,
        addListener: () => {},
        removeListener: () => {}
    }
}
var XE = (() => {
    class o {
        _mediaMatcher = I(Af);
        _zone = I($);
        _queries = new Map;
        _destroySubject = new gt;
        constructor() {}
        ngOnDestroy() {
            this._destroySubject.next(), this._destroySubject.complete()
        }
        isMatched(e) {
            return $6(dr(e)).some(i => this._registerQuery(i).mql.matches)
        }
        observe(e) {
            let i = $6(dr(e)).map(a => this._registerQuery(a).observable),
                s = ve(i);
            return s = pi(s.pipe(oe(1)), s.pipe(yr(1), vr(0))), s.pipe(J(a => {
                let r = {
                    matches: !1,
                    breakpoints: {}
                };
                return a.forEach(({
                    matches: l,
                    query: c
                }) => {
                    r.matches = r.matches || l, r.breakpoints[c] = l
                }), r
            }))
        }
        _registerQuery(e) {
            if (this._queries.has(e)) return this._queries.get(e);
            let n = this._mediaMatcher.matchMedia(e),
                s = {
                    observable: new hi(a => {
                        let r = l => this._zone.run(() => a.next(l));
                        return n.addListener(r), () => {
                            n.removeListener(r)
                        }
                    }).pipe(mi(n), J(({
                        matches: a
                    }) => ({
                        query: e,
                        matches: a
                    })), wo(this._destroySubject)),
                    mql: n
                };
            return this._queries.set(e, s), s
        }
        static\ u0275fac = function(n) {
            return new(n || o)
        };
        static\ u0275prov = N({
            token: o,
            factory: o.\u0275fac,
            providedIn: "root"
        })
    }
    return o
})();

function $6(o) {
    return o.map(t => t.split(",")).reduce((t, e) => t.concat(e)).map(t => t.trim())
}
export {
    y2 as a, Qf as b, Jf as c, E2 as d, i8 as e, tw as f, ew as g, Ve as h, Vt as i, V8 as j, O5 as k, le as l, G5 as m, Iw as n, El as o, bx as p, kx as q, Kd as r, Mx as s, Ls as t, ga as u, bI as v, kI as w, yI as x, MI as y, CI as z, zI as A, SI as B, AI as C, II as D, LI as E, EI as F, BI as G, DI as H, jI as I, $I as J, HI as K, TI as L, _I as M, VI as N, OI as O, RI as P, PI as Q, FI as R, NI as S, UI as T, qI as U, WI as V, GI as W, XI as X, YI as Y, u6 as Z, ZI as _, KI as $, QI as aa, JI as ba, tL as ca, eL as da, Kv as ea, oL as fa, tf as ga, O1 as ha, g6 as ia, I6 as ja, E6 as ka, BL as la, DL as ma, jL as na, VL as oa, OL as pa, RL as qa, PL as ra, FL as sa, NL as ta, UL as ua, qL as va, WL as wa, GL as xa, XL as ya, YL as za, ZL as Aa, KL as Ba, QL as Ca, JL as Da, tE as Ea, eE as Fa, oE as Ga, nE as Ha, iE as Ia, sE as Ja, aE as Ka, rE as La, lE as Ma, cE as Na, dE as Oa, hE as Pa, pE as Qa, uE as Ra, gE as Sa, mE as Ta, vE as Ua, fE as Va, wE as Wa, xE as Xa, bE as Ya, kE as Za, yE as _a, ME as $a, CE as ab, zE as bb, SE as cb, AE as db, IE as eb, LE as fb, EE as gb, BE as hb, DE as ib, Sf as jb, D6 as kb, dr as lb, Af as mb, XE as nb
};
//# sourceMappingURL=chunk-GFV577OQ.js.map