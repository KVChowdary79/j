import "./chunk-BIBUI3MF.js";
import {
    a as w,
    b as q
} from "./chunk-GN2XDD6F.js";
import {
    f as z,
    g as U,
    h as G,
    i as j,
    j as B,
    k as N,
    m as K,
    n as A,
    o as I,
    p as C,
    r as W,
    t as E,
    u as P,
    y as Y,
    z as D
} from "./chunk-7XRFTPTI.js";
import {
    c as L
} from "./chunk-5INLNTLQ.js";
import {
    k as l
} from "./chunk-XDKSGOKZ.js";
var T = "analytics",
    le = "firebase_id",
    de = "origin",
    ue = 60 * 1e3,
    fe = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",
    x = "https://www.googletagmanager.com/gtag/js";
var d = new W("@firebase/analytics");
var pe = {
        "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
        "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",
        "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
        "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
        "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
        "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
        "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
        "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
        "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
        "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
        "no-client-id": 'The "client_id" field is empty.',
        "invalid-gtag-resource": "Trusted Types detected an invalid gtag resource: {$gtagURL}."
    },
    m = new N("analytics", "Analytics", pe);

function me(e) {
    if (!e.startsWith(x)) {
        let t = m.create("invalid-gtag-resource", {
            gtagURL: e
        });
        return d.warn(t.message), ""
    }
    return e
}

function ee(e) {
    return Promise.all(e.map(t => t.catch(n => n)))
}

function he(e, t) {
    let n;
    return window.trustedTypes && (n = window.trustedTypes.createPolicy(e, t)), n
}

function ge(e, t) {
    let n = he("firebase-js-sdk-policy", {
            createScriptURL: me
        }),
        a = document.createElement("script"),
        i = `${x}?l=${e}&id=${t}`;
    a.src = n ? n ? .createScriptURL(i) : i, a.async = !0, document.head.appendChild(a)
}

function ye(e) {
    let t = [];
    return Array.isArray(window[e]) ? t = window[e] : window[e] = t, t
}

function we(e, t, n, a, i, s) {
    return l(this, null, function*() {
        let r = a[i];
        try {
            if (r) yield t[r];
            else {
                let o = (yield ee(n)).find(u => u.measurementId === i);
                o && (yield t[o.appId])
            }
        } catch (c) {
            d.error(c)
        }
        e("config", i, s)
    })
}

function Ie(e, t, n, a, i) {
    return l(this, null, function*() {
        try {
            let s = [];
            if (i && i.send_to) {
                let r = i.send_to;
                Array.isArray(r) || (r = [r]);
                let c = yield ee(n);
                for (let o of r) {
                    let u = c.find(f => f.measurementId === o),
                        p = u && t[u.appId];
                    if (p) s.push(p);
                    else {
                        s = [];
                        break
                    }
                }
            }
            s.length === 0 && (s = Object.values(t)), yield Promise.all(s), e("event", a, i || {})
        } catch (s) {
            d.error(s)
        }
    })
}

function be(e, t, n, a) {
    function i(s, ...r) {
        return l(this, null, function*() {
            try {
                if (s === "event") {
                    let [c, o] = r;
                    yield Ie(e, t, n, c, o)
                } else if (s === "config") {
                    let [c, o] = r;
                    yield we(e, t, n, a, c, o)
                } else if (s === "consent") {
                    let [c, o] = r;
                    e("consent", c, o)
                } else if (s === "get") {
                    let [c, o, u] = r;
                    e("get", c, o, u)
                } else if (s === "set") {
                    let [c] = r;
                    e("set", c)
                } else e(s, ...r)
            } catch (c) {
                d.error(c)
            }
        })
    }
    return i
}

function ve(e, t, n, a, i) {
    let s = function(...r) {
        window[a].push(arguments)
    };
    return window[i] && typeof window[i] == "function" && (s = window[i]), window[i] = be(s, e, t, n), {
        gtagCore: s,
        wrappedGtag: window[i]
    }
}

function Te(e) {
    let t = window.document.getElementsByTagName("script");
    for (let n of Object.values(t))
        if (n.src && n.src.includes(x) && n.src.includes(e)) return n;
    return null
}
var _e = 30,
    Ae = 1e3,
    M = class {
        constructor(t = {}, n = Ae) {
            this.throttleMetadata = t, this.intervalMillis = n
        }
        getThrottleMetadata(t) {
            return this.throttleMetadata[t]
        }
        setThrottleMetadata(t, n) {
            this.throttleMetadata[t] = n
        }
        deleteThrottleMetadata(t) {
            delete this.throttleMetadata[t]
        }
    },
    te = new M;

function Ce(e) {
    return new Headers({
        Accept: "application/json",
        "x-goog-api-key": e
    })
}

function Ee(e) {
    return l(this, null, function*() {
        var t;
        let {
            appId: n,
            apiKey: a
        } = e, i = {
            method: "GET",
            headers: Ce(a)
        }, s = fe.replace("{app-id}", n), r = yield fetch(s, i);
        if (r.status !== 200 && r.status !== 304) {
            let c = "";
            try {
                let o = yield r.json();
                !((t = o.error) === null || t === void 0) && t.message && (c = o.error.message)
            } catch {}
            throw m.create("config-fetch-failed", {
                httpStatus: r.status,
                responseMessage: c
            })
        }
        return r.json()
    })
}

function Pe(a) {
    return l(this, arguments, function*(e, t = te, n) {
        let {
            appId: i,
            apiKey: s,
            measurementId: r
        } = e.options;
        if (!i) throw m.create("no-app-id");
        if (!s) {
            if (r) return {
                measurementId: r,
                appId: i
            };
            throw m.create("no-api-key")
        }
        let c = t.getThrottleMetadata(i) || {
                backoffCount: 0,
                throttleEndTimeMillis: Date.now()
            },
            o = new F;
        return setTimeout(() => l(this, null, function*() {
            o.abort()
        }), n !== void 0 ? n : ue), ne({
            appId: i,
            apiKey: s,
            measurementId: r
        }, c, o, t)
    })
}

function ne(s, r, c) {
    return l(this, arguments, function*(e, {
        throttleEndTimeMillis: t,
        backoffCount: n
    }, a, i = te) {
        var o;
        let {
            appId: u,
            measurementId: p
        } = e;
        try {
            yield De(a, t)
        } catch (f) {
            if (p) return d.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${f?.message}]`), {
                appId: u,
                measurementId: p
            };
            throw f
        }
        try {
            let f = yield Ee(e);
            return i.deleteThrottleMetadata(u), f
        } catch (f) {
            let h = f;
            if (!Se(h)) {
                if (i.deleteThrottleMetadata(u), p) return d.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${h?.message}]`), {
                    appId: u,
                    measurementId: p
                };
                throw f
            }
            let g = Number((o = h ? .customData) === null || o === void 0 ? void 0 : o.httpStatus) === 503 ? A(n, i.intervalMillis, _e) : A(n, i.intervalMillis),
                O = {
                    throttleEndTimeMillis: Date.now() + g,
                    backoffCount: n + 1
                };
            return i.setThrottleMetadata(u, O), d.debug(`Calling attemptFetch again in ${g} millis`), ne(e, O, a, i)
        }
    })
}

function De(e, t) {
    return new Promise((n, a) => {
        let i = Math.max(t - Date.now(), 0),
            s = setTimeout(n, i);
        e.addEventListener(() => {
            clearTimeout(s), a(m.create("fetch-throttle", {
                throttleEndTimeMillis: t
            }))
        })
    })
}

function Se(e) {
    if (!(e instanceof B) || !e.customData) return !1;
    let t = Number(e.customData.httpStatus);
    return t === 429 || t === 500 || t === 503 || t === 504
}
var F = class {
    constructor() {
        this.listeners = []
    }
    addEventListener(t) {
        this.listeners.push(t)
    }
    abort() {
        this.listeners.forEach(t => t())
    }
};
var R;

function Me(e, t, n, a, i) {
    return l(this, null, function*() {
        if (i && i.global) {
            e("event", n, a);
            return
        } else {
            let s = yield t, r = Object.assign(Object.assign({}, a), {
                send_to: s
            });
            e("event", n, r)
        }
    })
}

function Fe(e, t, n, a) {
    return l(this, null, function*() {
        if (a && a.global) return e("set", {
            user_id: n
        }), Promise.resolve(); {
            let i = yield t;
            e("config", i, {
                update: !0,
                user_id: n
            })
        }
    })
}

function Re(e, t, n, a) {
    return l(this, null, function*() {
        if (a && a.global) {
            let i = {};
            for (let s of Object.keys(n)) i[`user_properties.${s}`] = n[s];
            return e("set", i), Promise.resolve()
        } else {
            let i = yield t;
            e("config", i, {
                update: !0,
                user_properties: n
            })
        }
    })
}

function $e(e, t) {
    return l(this, null, function*() {
        let n = yield e;
        window[`ga-disable-${n}`] = !t
    })
}
var $;

function ie(e) {
    $ = e
}

function ke(e) {
    R = e
}

function xe() {
    return l(this, null, function*() {
        if (U()) try {
            yield G()
        } catch (e) {
            return d.warn(m.create("indexeddb-unavailable", {
                errorInfo: e ? .toString()
            }).message), !1
        } else return d.warn(m.create("indexeddb-unavailable", {
            errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        return !0
    })
}

function Oe(e, t, n, a, i, s, r) {
    return l(this, null, function*() {
        var c;
        let o = Pe(e);
        o.then(g => {
            n[g.measurementId] = g.appId, e.options.measurementId && g.measurementId !== e.options.measurementId && d.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
        }).catch(g => d.error(g)), t.push(o);
        let u = xe().then(g => {
                if (g) return a.getId()
            }),
            [p, f] = yield Promise.all([o, u]);
        Te(s) || ge(s, p.measurementId), $ && (i("consent", "default", $), ie(void 0)), i("js", new Date);
        let h = (c = r ? .config) !== null && c !== void 0 ? c : {};
        return h[de] = "firebase", h.update = !0, f != null && (h[le] = f), i("config", p.measurementId, h), R && (i("set", R), ke(void 0)), p.measurementId
    })
}
var k = class {
        constructor(t) {
            this.app = t
        }
        _delete() {
            return delete y[this.app.options.appId], Promise.resolve()
        }
    },
    y = {},
    H = [],
    V = {},
    S = "dataLayer",
    Le = "gtag",
    J, b, Q = !1;

function ze() {
    let e = [];
    if (z() && e.push("This is a browser extension environment."), j() || e.push("Cookies are not available."), e.length > 0) {
        let t = e.map((a, i) => `(${i+1}) ${a}`).join(" "),
            n = m.create("invalid-analytics-context", {
                errorInfo: t
            });
        d.warn(n.message)
    }
}

function Ue(e, t, n) {
    ze();
    let a = e.options.appId;
    if (!a) throw m.create("no-app-id");
    if (!e.options.apiKey)
        if (e.options.measurementId) d.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
        else throw m.create("no-api-key");
    if (y[a] != null) throw m.create("already-exists", {
        id: a
    });
    if (!Q) {
        ye(S);
        let {
            wrappedGtag: s,
            gtagCore: r
        } = ve(y, H, V, S, Le);
        b = s, J = r, Q = !0
    }
    return y[a] = Oe(e, H, V, t, J, S, n), new k(e)
}

function v(e = Y()) {
    e = I(e);
    let t = P(e, T);
    return t.isInitialized() ? t.getImmediate() : Ge(e)
}

function Ge(e, t = {}) {
    let n = P(e, T);
    if (n.isInitialized()) {
        let i = n.getImmediate();
        if (K(t, n.getOptions())) return i;
        throw m.create("already-initialized")
    }
    return n.initialize({
        options: t
    })
}

function ae(e, t, n) {
    e = I(e), Fe(b, y[e.app.options.appId], t, n).catch(a => d.error(a))
}

function se(e, t, n) {
    e = I(e), Re(b, y[e.app.options.appId], t, n).catch(a => d.error(a))
}

function re(e, t) {
    e = I(e), $e(y[e.app.options.appId], t).catch(n => d.error(n))
}

function _(e, t, n, a) {
    e = I(e), Me(b, y[e.app.options.appId], t, n, a).catch(i => d.error(i))
}

function oe(e) {
    b ? b("consent", "update", e) : ie(e)
}
var X = "@firebase/analytics",
    Z = "0.10.12";

function je() {
    E(new C(T, (t, {
        options: n
    }) => {
        let a = t.getProvider("app").getImmediate(),
            i = t.getProvider("installations-internal").getImmediate();
        return Ue(a, i, n)
    }, "PUBLIC")), E(new C("analytics-internal", e, "PRIVATE")), D(X, Z), D(X, Z, "esm2017");

    function e(t) {
        try {
            let n = t.getProvider(T).getImmediate();
            return {
                logEvent: (a, i, s) => _(n, a, i, s)
            }
        } catch (n) {
            throw m.create("interop-component-reg-failed", {
                reason: n
            })
        }
    }
}
je();
var ce = class extends L {
    getAppInstanceId() {
        return l(this, null, function*() {
            throw this.unimplemented("Not implemented on web.")
        })
    }
    setConsent(t) {
        return l(this, null, function*() {
            let n = t.status === q.Granted ? "granted" : "denied",
                a = {};
            switch (t.type) {
                case w.AdPersonalization:
                    a.ad_personalization = n;
                    break;
                case w.AdStorage:
                    a.ad_storage = n;
                    break;
                case w.AdUserData:
                    a.ad_user_data = n;
                    break;
                case w.AnalyticsStorage:
                    a.analytics_storage = n;
                    break;
                case w.FunctionalityStorage:
                    a.functionality_storage = n;
                    break;
                case w.PersonalizationStorage:
                    a.personalization_storage = n;
                    break
            }
            oe(a)
        })
    }
    setUserId(t) {
        return l(this, null, function*() {
            let n = v();
            ae(n, t.userId)
        })
    }
    setUserProperty(t) {
        return l(this, null, function*() {
            let n = v();
            se(n, {
                [t.key]: t.value
            })
        })
    }
    setCurrentScreen(t) {
        return l(this, null, function*() {
            let n = v();
            _(n, "screen_view", {
                firebase_screen: t.screenName || void 0,
                firebase_screen_class: t.screenClassOverride || void 0
            })
        })
    }
    logEvent(t) {
        return l(this, null, function*() {
            let n = v();
            _(n, t.name, t.params)
        })
    }
    setSessionTimeoutDuration(t) {
        return l(this, null, function*() {
            throw this.unimplemented("Not implemented on web.")
        })
    }
    setEnabled(t) {
        return l(this, null, function*() {
            let n = v();
            re(n, t.enabled)
        })
    }
    isEnabled() {
        return l(this, null, function*() {
            return {
                enabled: window["ga-disable-analyticsId"] === !0
            }
        })
    }
    resetAnalyticsData() {
        return l(this, null, function*() {
            throw this.unimplemented("Not implemented on web.")
        })
    }
};
export {
    ce as FirebaseAnalyticsWeb
};
//# sourceMappingURL=web-JOU53XVC.js.map