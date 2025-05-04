import {
    a as q,
    b as X,
    k as d
} from "./chunk-XDKSGOKZ.js";
var Q = () => {};
var te = function(t) {
        let e = [],
            n = 0;
        for (let i = 0; i < t.length; i++) {
            let r = t.charCodeAt(i);
            r < 128 ? e[n++] = r : r < 2048 ? (e[n++] = r >> 6 | 192, e[n++] = r & 63 | 128) : (r & 64512) === 55296 && i + 1 < t.length && (t.charCodeAt(i + 1) & 64512) === 56320 ? (r = 65536 + ((r & 1023) << 10) + (t.charCodeAt(++i) & 1023), e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128) : (e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128, e[n++] = r & 63 | 128)
        }
        return e
    },
    ve = function(t) {
        let e = [],
            n = 0,
            i = 0;
        for (; n < t.length;) {
            let r = t[n++];
            if (r < 128) e[i++] = String.fromCharCode(r);
            else if (r > 191 && r < 224) {
                let s = t[n++];
                e[i++] = String.fromCharCode((r & 31) << 6 | s & 63)
            } else if (r > 239 && r < 365) {
                let s = t[n++],
                    o = t[n++],
                    a = t[n++],
                    c = ((r & 7) << 18 | (s & 63) << 12 | (o & 63) << 6 | a & 63) - 65536;
                e[i++] = String.fromCharCode(55296 + (c >> 10)), e[i++] = String.fromCharCode(56320 + (c & 1023))
            } else {
                let s = t[n++],
                    o = t[n++];
                e[i++] = String.fromCharCode((r & 15) << 12 | (s & 63) << 6 | o & 63)
            }
        }
        return e.join("")
    },
    ne = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: typeof atob == "function",
        encodeByteArray(t, e) {
            if (!Array.isArray(t)) throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            let n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                i = [];
            for (let r = 0; r < t.length; r += 3) {
                let s = t[r],
                    o = r + 1 < t.length,
                    a = o ? t[r + 1] : 0,
                    c = r + 2 < t.length,
                    l = c ? t[r + 2] : 0,
                    Y = s >> 2,
                    _ = (s & 3) << 4 | a >> 4,
                    w = (a & 15) << 2 | l >> 6,
                    D = l & 63;
                c || (D = 64, o || (w = 64)), i.push(n[Y], n[_], n[w], n[D])
            }
            return i.join("")
        },
        encodeString(t, e) {
            return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(te(t), e)
        },
        decodeString(t, e) {
            return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : ve(this.decodeStringToByteArray(t, e))
        },
        decodeStringToByteArray(t, e) {
            this.init_();
            let n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                i = [];
            for (let r = 0; r < t.length;) {
                let s = n[t.charAt(r++)],
                    a = r < t.length ? n[t.charAt(r)] : 0;
                ++r;
                let l = r < t.length ? n[t.charAt(r)] : 64;
                ++r;
                let _ = r < t.length ? n[t.charAt(r)] : 64;
                if (++r, s == null || a == null || l == null || _ == null) throw new T;
                let w = s << 2 | a >> 4;
                if (i.push(w), l !== 64) {
                    let D = a << 4 & 240 | l >> 2;
                    if (i.push(D), _ !== 64) {
                        let Ee = l << 6 & 192 | _;
                        i.push(Ee)
                    }
                }
            }
            return i
        },
        init_() {
            if (!this.byteToCharMap_) {
                this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                for (let t = 0; t < this.ENCODED_VALS.length; t++) this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t)
            }
        }
    },
    T = class extends Error {
        constructor() {
            super(...arguments), this.name = "DecodeBase64StringError"
        }
    },
    we = function(t) {
        let e = te(t);
        return ne.encodeByteArray(e, !0)
    },
    y = function(t) {
        return we(t).replace(/\./g, "")
    },
    S = function(t) {
        try {
            return ne.decodeString(t, !0)
        } catch (e) {
            console.error("base64Decode failed: ", e)
        }
        return null
    };

function De() {
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("Unable to locate global object.")
}
var Se = () => De().__FIREBASE_DEFAULTS__,
    Ce = () => {
        if (typeof process > "u" || typeof process.env > "u") return;
        let t = process.env.__FIREBASE_DEFAULTS__;
        if (t) return JSON.parse(t)
    },
    Ie = () => {
        if (typeof document > "u") return;
        let t;
        try {
            t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
        } catch {
            return
        }
        let e = t && S(t[1]);
        return e && JSON.parse(e)
    },
    re = () => {
        try {
            return Q() || Se() || Ce() || Ie()
        } catch (t) {
            console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
            return
        }
    },
    Ae = t => {
        var e, n;
        return (n = (e = re()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || n === void 0 ? void 0 : n[t]
    },
    Ht = t => {
        let e = Ae(t);
        if (!e) return;
        let n = e.lastIndexOf(":");
        if (n <= 0 || n + 1 === e.length) throw new Error(`Invalid host ${e} with no separate hostname and port!`);
        let i = parseInt(e.substring(n + 1), 10);
        return e[0] === "[" ? [e.substring(1, n - 1), i] : [e.substring(0, n), i]
    },
    N = () => {
        var t;
        return (t = re()) === null || t === void 0 ? void 0 : t.config
    };
var C = class {
    constructor() {
        this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise((e, n) => {
            this.resolve = e, this.reject = n
        })
    }
    wrapCallback(e) {
        return (n, i) => {
            n ? this.reject(n) : this.resolve(i), typeof e == "function" && (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, i))
        }
    }
};

function jt(t, e) {
    if (t.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    let n = {
            alg: "none",
            type: "JWT"
        },
        i = e || "demo-project",
        r = t.iat || 0,
        s = t.sub || t.user_id;
    if (!s) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    let o = Object.assign({
        iss: `https://securetoken.google.com/${i}`,
        aud: i,
        iat: r,
        exp: r + 3600,
        auth_time: r,
        sub: s,
        user_id: s,
        firebase: {
            sign_in_provider: "custom",
            identities: {}
        }
    }, t);
    return [y(JSON.stringify(n)), y(JSON.stringify(o)), ""].join(".")
}

function zt() {
    let t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
    return typeof t == "object" && t.id !== void 0
}

function ie() {
    try {
        return typeof indexedDB == "object"
    } catch {
        return !1
    }
}

function se() {
    return new Promise((t, e) => {
        try {
            let n = !0,
                i = "validate-browser-context-for-indexeddb-analytics-module",
                r = self.indexedDB.open(i);
            r.onsuccess = () => {
                r.result.close(), n || self.indexedDB.deleteDatabase(i), t(!0)
            }, r.onupgradeneeded = () => {
                n = !1
            }, r.onerror = () => {
                var s;
                e(((s = r.error) === null || s === void 0 ? void 0 : s.message) || "")
            }
        } catch (n) {
            e(n)
        }
    })
}

function Ut() {
    return !(typeof navigator > "u" || !navigator.cookieEnabled)
}
var Oe = "FirebaseError",
    m = class t extends Error {
        constructor(e, n, i) {
            super(n), this.code = e, this.customData = i, this.name = Oe, Object.setPrototypeOf(this, t.prototype), Error.captureStackTrace && Error.captureStackTrace(this, E.prototype.create)
        }
    },
    E = class {
        constructor(e, n, i) {
            this.service = e, this.serviceName = n, this.errors = i
        }
        create(e, ...n) {
            let i = n[0] || {},
                r = `${this.service}/${e}`,
                s = this.errors[e],
                o = s ? xe(s, i) : "Error",
                a = `${this.serviceName}: ${o} (${r}).`;
            return new m(r, a, i)
        }
    };

function xe(t, e) {
    return t.replace(Be, (n, i) => {
        let r = e[i];
        return r != null ? String(r) : `<${i}?>`
    })
}
var Be = /\{\$([^}]+)}/g;

function Z(t) {
    return JSON.parse(t)
}
var Te = function(t) {
    let e = {},
        n = {},
        i = {},
        r = "";
    try {
        let s = t.split(".");
        e = Z(S(s[0]) || ""), n = Z(S(s[1]) || ""), r = s[2], i = n.d || {}, delete n.d
    } catch {}
    return {
        header: e,
        claims: n,
        data: i,
        signature: r
    }
};
var Vt = function(t) {
    let e = Te(t).claims;
    return typeof e == "object" && e.hasOwnProperty("iat") ? e.iat : null
};

function I(t, e) {
    if (t === e) return !0;
    let n = Object.keys(t),
        i = Object.keys(e);
    for (let r of n) {
        if (!i.includes(r)) return !1;
        let s = t[r],
            o = e[r];
        if (ee(s) && ee(o)) {
            if (!I(s, o)) return !1
        } else if (s !== o) return !1
    }
    for (let r of i)
        if (!n.includes(r)) return !1;
    return !0
}

function ee(t) {
    return t !== null && typeof t == "object"
}
var Ne = 1e3,
    Re = 2,
    Me = 4 * 60 * 60 * 1e3,
    Le = .5;

function Wt(t, e = Ne, n = Re) {
    let i = e * Math.pow(n, t),
        r = Math.round(Le * i * (Math.random() - .5) * 2);
    return Math.min(Me, i + r)
}

function Gt(t) {
    return t && t._delegate ? t._delegate : t
}
var g = class {
    constructor(e, n, i) {
        this.name = e, this.instanceFactory = n, this.type = i, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
    }
    setInstantiationMode(e) {
        return this.instantiationMode = e, this
    }
    setMultipleInstances(e) {
        return this.multipleInstances = e, this
    }
    setServiceProps(e) {
        return this.serviceProps = e, this
    }
    setInstanceCreatedCallback(e) {
        return this.onInstanceCreated = e, this
    }
};
var b = "[DEFAULT]";
var R = class {
    constructor(e, n) {
        this.name = e, this.container = n, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
    }
    get(e) {
        let n = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(n)) {
            let i = new C;
            if (this.instancesDeferred.set(n, i), this.isInitialized(n) || this.shouldAutoInitialize()) try {
                let r = this.getOrInitializeService({
                    instanceIdentifier: n
                });
                r && i.resolve(r)
            } catch {}
        }
        return this.instancesDeferred.get(n).promise
    }
    getImmediate(e) {
        var n;
        let i = this.normalizeInstanceIdentifier(e ? .identifier),
            r = (n = e ? .optional) !== null && n !== void 0 ? n : !1;
        if (this.isInitialized(i) || this.shouldAutoInitialize()) try {
            return this.getOrInitializeService({
                instanceIdentifier: i
            })
        } catch (s) {
            if (r) return null;
            throw s
        } else {
            if (r) return null;
            throw Error(`Service ${this.name} is not available`)
        }
    }
    getComponent() {
        return this.component
    }
    setComponent(e) {
        if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = e, !!this.shouldAutoInitialize()) {
            if (ke(e)) try {
                this.getOrInitializeService({
                    instanceIdentifier: b
                })
            } catch {}
            for (let [n, i] of this.instancesDeferred.entries()) {
                let r = this.normalizeInstanceIdentifier(n);
                try {
                    let s = this.getOrInitializeService({
                        instanceIdentifier: r
                    });
                    i.resolve(s)
                } catch {}
            }
        }
    }
    clearInstance(e = b) {
        this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
    }
    delete() {
        return d(this, null, function*() {
            let e = Array.from(this.instances.values());
            yield Promise.all([...e.filter(n => "INTERNAL" in n).map(n => n.INTERNAL.delete()), ...e.filter(n => "_delete" in n).map(n => n._delete())])
        })
    }
    isComponentSet() {
        return this.component != null
    }
    isInitialized(e = b) {
        return this.instances.has(e)
    }
    getOptions(e = b) {
        return this.instancesOptions.get(e) || {}
    }
    initialize(e = {}) {
        let {
            options: n = {}
        } = e, i = this.normalizeInstanceIdentifier(e.instanceIdentifier);
        if (this.isInitialized(i)) throw Error(`${this.name}(${i}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        let r = this.getOrInitializeService({
            instanceIdentifier: i,
            options: n
        });
        for (let [s, o] of this.instancesDeferred.entries()) {
            let a = this.normalizeInstanceIdentifier(s);
            i === a && o.resolve(r)
        }
        return r
    }
    onInit(e, n) {
        var i;
        let r = this.normalizeInstanceIdentifier(n),
            s = (i = this.onInitCallbacks.get(r)) !== null && i !== void 0 ? i : new Set;
        s.add(e), this.onInitCallbacks.set(r, s);
        let o = this.instances.get(r);
        return o && e(o, r), () => {
            s.delete(e)
        }
    }
    invokeOnInitCallbacks(e, n) {
        let i = this.onInitCallbacks.get(n);
        if (i)
            for (let r of i) try {
                r(e, n)
            } catch {}
    }
    getOrInitializeService({
        instanceIdentifier: e,
        options: n = {}
    }) {
        let i = this.instances.get(e);
        if (!i && this.component && (i = this.component.instanceFactory(this.container, {
                instanceIdentifier: $e(e),
                options: n
            }), this.instances.set(e, i), this.instancesOptions.set(e, n), this.invokeOnInitCallbacks(i, e), this.component.onInstanceCreated)) try {
            this.component.onInstanceCreated(this.container, e, i)
        } catch {}
        return i || null
    }
    normalizeInstanceIdentifier(e = b) {
        return this.component ? this.component.multipleInstances ? e : b : e
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT"
    }
};

function $e(t) {
    return t === b ? void 0 : t
}

function ke(t) {
    return t.instantiationMode === "EAGER"
}
var A = class {
    constructor(e) {
        this.name = e, this.providers = new Map
    }
    addComponent(e) {
        let n = this.getProvider(e.name);
        if (n.isComponentSet()) throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
        n.setComponent(e)
    }
    addOrOverwriteComponent(e) {
        this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
    }
    getProvider(e) {
        if (this.providers.has(e)) return this.providers.get(e);
        let n = new R(e, this);
        return this.providers.set(e, n), n
    }
    getProviders() {
        return Array.from(this.providers.values())
    }
};
var Pe = [],
    f = function(t) {
        return t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT", t
    }(f || {}),
    Fe = {
        debug: f.DEBUG,
        verbose: f.VERBOSE,
        info: f.INFO,
        warn: f.WARN,
        error: f.ERROR,
        silent: f.SILENT
    },
    He = f.INFO,
    je = {
        [f.DEBUG]: "log",
        [f.VERBOSE]: "log",
        [f.INFO]: "info",
        [f.WARN]: "warn",
        [f.ERROR]: "error"
    },
    ze = (t, e, ...n) => {
        if (e < t.logLevel) return;
        let i = new Date().toISOString(),
            r = je[e];
        if (r) console[r](`[${i}]  ${t.name}:`, ...n);
        else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)
    },
    O = class {
        constructor(e) {
            this.name = e, this._logLevel = He, this._logHandler = ze, this._userLogHandler = null, Pe.push(this)
        }
        get logLevel() {
            return this._logLevel
        }
        set logLevel(e) {
            if (!(e in f)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
            this._logLevel = e
        }
        setLogLevel(e) {
            this._logLevel = typeof e == "string" ? Fe[e] : e
        }
        get logHandler() {
            return this._logHandler
        }
        set logHandler(e) {
            if (typeof e != "function") throw new TypeError("Value assigned to `logHandler` must be a function");
            this._logHandler = e
        }
        get userLogHandler() {
            return this._userLogHandler
        }
        set userLogHandler(e) {
            this._userLogHandler = e
        }
        debug(...e) {
            this._userLogHandler && this._userLogHandler(this, f.DEBUG, ...e), this._logHandler(this, f.DEBUG, ...e)
        }
        log(...e) {
            this._userLogHandler && this._userLogHandler(this, f.VERBOSE, ...e), this._logHandler(this, f.VERBOSE, ...e)
        }
        info(...e) {
            this._userLogHandler && this._userLogHandler(this, f.INFO, ...e), this._logHandler(this, f.INFO, ...e)
        }
        warn(...e) {
            this._userLogHandler && this._userLogHandler(this, f.WARN, ...e), this._logHandler(this, f.WARN, ...e)
        }
        error(...e) {
            this._userLogHandler && this._userLogHandler(this, f.ERROR, ...e), this._logHandler(this, f.ERROR, ...e)
        }
    };
var Ue = (t, e) => e.some(n => t instanceof n),
    oe, ae;

function Ve() {
    return oe || (oe = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}

function We() {
    return ae || (ae = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
var ce = new WeakMap,
    L = new WeakMap,
    fe = new WeakMap,
    M = new WeakMap,
    k = new WeakMap;

function Ge(t) {
    let e = new Promise((n, i) => {
        let r = () => {
                t.removeEventListener("success", s), t.removeEventListener("error", o)
            },
            s = () => {
                n(h(t.result)), r()
            },
            o = () => {
                i(t.error), r()
            };
        t.addEventListener("success", s), t.addEventListener("error", o)
    });
    return e.then(n => {
        n instanceof IDBCursor && ce.set(n, t)
    }).catch(() => {}), k.set(e, t), e
}

function Je(t) {
    if (L.has(t)) return;
    let e = new Promise((n, i) => {
        let r = () => {
                t.removeEventListener("complete", s), t.removeEventListener("error", o), t.removeEventListener("abort", o)
            },
            s = () => {
                n(), r()
            },
            o = () => {
                i(t.error || new DOMException("AbortError", "AbortError")), r()
            };
        t.addEventListener("complete", s), t.addEventListener("error", o), t.addEventListener("abort", o)
    });
    L.set(t, e)
}
var $ = {
    get(t, e, n) {
        if (t instanceof IDBTransaction) {
            if (e === "done") return L.get(t);
            if (e === "objectStoreNames") return t.objectStoreNames || fe.get(t);
            if (e === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
        }
        return h(t[e])
    },
    set(t, e, n) {
        return t[e] = n, !0
    },
    has(t, e) {
        return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t
    }
};

function le(t) {
    $ = t($)
}

function Ke(t) {
    return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...n) {
        let i = t.call(x(this), e, ...n);
        return fe.set(i, e.sort ? e.sort() : [e]), h(i)
    } : We().includes(t) ? function(...e) {
        return t.apply(x(this), e), h(ce.get(this))
    } : function(...e) {
        return h(t.apply(x(this), e))
    }
}

function Ye(t) {
    return typeof t == "function" ? Ke(t) : (t instanceof IDBTransaction && Je(t), Ue(t, Ve()) ? new Proxy(t, $) : t)
}

function h(t) {
    if (t instanceof IDBRequest) return Ge(t);
    if (M.has(t)) return M.get(t);
    let e = Ye(t);
    return e !== t && (M.set(t, e), k.set(e, t)), e
}
var x = t => k.get(t);

function he(t, e, {
    blocked: n,
    upgrade: i,
    blocking: r,
    terminated: s
} = {}) {
    let o = indexedDB.open(t, e),
        a = h(o);
    return i && o.addEventListener("upgradeneeded", c => {
        i(h(o.result), c.oldVersion, c.newVersion, h(o.transaction), c)
    }), n && o.addEventListener("blocked", c => n(c.oldVersion, c.newVersion, c)), a.then(c => {
        s && c.addEventListener("close", () => s()), r && c.addEventListener("versionchange", l => r(l.oldVersion, l.newVersion, l))
    }).catch(() => {}), a
}
var qe = ["get", "getKey", "getAll", "getAllKeys", "count"],
    Xe = ["put", "add", "delete", "clear"],
    P = new Map;

function de(t, e) {
    if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
    if (P.get(e)) return P.get(e);
    let n = e.replace(/FromIndex$/, ""),
        i = e !== n,
        r = Xe.includes(n);
    if (!(n in (i ? IDBIndex : IDBObjectStore).prototype) || !(r || qe.includes(n))) return;
    let s = function(o, ...a) {
        return d(this, null, function*() {
            let c = this.transaction(o, r ? "readwrite" : "readonly"),
                l = c.store;
            return i && (l = l.index(a.shift())), (yield Promise.all([l[n](...a), r && c.done]))[0]
        })
    };
    return P.set(e, s), s
}
le(t => X(q({}, t), {
    get: (e, n, i) => de(e, n) || t.get(e, n, i),
    has: (e, n) => !!de(e, n) || t.has(e, n)
}));
var j = class {
    constructor(e) {
        this.container = e
    }
    getPlatformInfoString() {
        return this.container.getProviders().map(n => {
            if (Qe(n)) {
                let i = n.getImmediate();
                return `${i.library}/${i.version}`
            } else return null
        }).filter(n => n).join(" ")
    }
};

function Qe(t) {
    let e = t.getComponent();
    return e ? .type === "VERSION"
}
var z = "@firebase/app",
    ue = "0.11.4";
var u = new O("@firebase/app"),
    Ze = "@firebase/app-compat",
    et = "@firebase/analytics-compat",
    tt = "@firebase/analytics",
    nt = "@firebase/app-check-compat",
    rt = "@firebase/app-check",
    it = "@firebase/auth",
    st = "@firebase/auth-compat",
    ot = "@firebase/database",
    at = "@firebase/data-connect",
    ct = "@firebase/database-compat",
    ft = "@firebase/functions",
    lt = "@firebase/functions-compat",
    dt = "@firebase/installations",
    ht = "@firebase/installations-compat",
    ut = "@firebase/messaging",
    pt = "@firebase/messaging-compat",
    mt = "@firebase/performance",
    bt = "@firebase/performance-compat",
    gt = "@firebase/remote-config",
    _t = "@firebase/remote-config-compat",
    yt = "@firebase/storage",
    Et = "@firebase/storage-compat",
    vt = "@firebase/firestore",
    wt = "@firebase/vertexai",
    Dt = "@firebase/firestore-compat",
    St = "firebase",
    Ct = "11.6.0";
var U = "[DEFAULT]",
    It = {
        [z]: "fire-core",
        [Ze]: "fire-core-compat",
        [tt]: "fire-analytics",
        [et]: "fire-analytics-compat",
        [rt]: "fire-app-check",
        [nt]: "fire-app-check-compat",
        [it]: "fire-auth",
        [st]: "fire-auth-compat",
        [ot]: "fire-rtdb",
        [at]: "fire-data-connect",
        [ct]: "fire-rtdb-compat",
        [ft]: "fire-fn",
        [lt]: "fire-fn-compat",
        [dt]: "fire-iid",
        [ht]: "fire-iid-compat",
        [ut]: "fire-fcm",
        [pt]: "fire-fcm-compat",
        [mt]: "fire-perf",
        [bt]: "fire-perf-compat",
        [gt]: "fire-rc",
        [_t]: "fire-rc-compat",
        [yt]: "fire-gcs",
        [Et]: "fire-gcs-compat",
        [vt]: "fire-fst",
        [Dt]: "fire-fst-compat",
        [wt]: "fire-vertex",
        "fire-js": "fire-js",
        [St]: "fire-js-all"
    };
var B = new Map,
    At = new Map,
    V = new Map;

function pe(t, e) {
    try {
        t.container.addComponent(e)
    } catch (n) {
        u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n)
    }
}

function W(t) {
    let e = t.name;
    if (V.has(e)) return u.debug(`There were multiple attempts to register component ${e}.`), !1;
    V.set(e, t);
    for (let n of B.values()) pe(n, t);
    for (let n of At.values()) pe(n, t);
    return !0
}

function hn(t, e) {
    let n = t.container.getProvider("heartbeat").getImmediate({
        optional: !0
    });
    return n && n.triggerHeartbeat(), t.container.getProvider(e)
}

function un(t) {
    return t == null ? !1 : t.settings !== void 0
}
var Ot = {
        "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
        "bad-app-name": "Illegal App name: '{$appName}'",
        "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
        "app-deleted": "Firebase App named '{$appName}' already deleted",
        "server-app-deleted": "Firebase Server App has been deleted",
        "no-options": "Need to provide options, when not being deployed to hosting via source.",
        "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        "invalid-log-argument": "First argument to `onLog` must be null or a function.",
        "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
        "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
        "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
    },
    p = new E("app", "Firebase", Ot);
var G = class {
    constructor(e, n, i) {
        this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, n), this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = i, this.container.addComponent(new g("app", () => this, "PUBLIC"))
    }
    get automaticDataCollectionEnabled() {
        return this.checkDestroyed(), this._automaticDataCollectionEnabled
    }
    set automaticDataCollectionEnabled(e) {
        this.checkDestroyed(), this._automaticDataCollectionEnabled = e
    }
    get name() {
        return this.checkDestroyed(), this._name
    }
    get options() {
        return this.checkDestroyed(), this._options
    }
    get config() {
        return this.checkDestroyed(), this._config
    }
    get container() {
        return this._container
    }
    get isDeleted() {
        return this._isDeleted
    }
    set isDeleted(e) {
        this._isDeleted = e
    }
    checkDestroyed() {
        if (this.isDeleted) throw p.create("app-deleted", {
            appName: this._name
        })
    }
};
var pn = Ct;

function xt(t, e = {}) {
    let n = t;
    typeof e != "object" && (e = {
        name: e
    });
    let i = Object.assign({
            name: U,
            automaticDataCollectionEnabled: !1
        }, e),
        r = i.name;
    if (typeof r != "string" || !r) throw p.create("bad-app-name", {
        appName: String(r)
    });
    if (n || (n = N()), !n) throw p.create("no-options");
    let s = B.get(r);
    if (s) {
        if (I(n, s.options) && I(i, s.config)) return s;
        throw p.create("duplicate-app", {
            appName: r
        })
    }
    let o = new A(r);
    for (let c of V.values()) o.addComponent(c);
    let a = new G(n, i, o);
    return B.set(r, a), a
}

function mn(t = U) {
    let e = B.get(t);
    if (!e && t === U && N()) return xt();
    if (!e) throw p.create("no-app", {
        appName: t
    });
    return e
}

function F(t, e, n) {
    var i;
    let r = (i = It[t]) !== null && i !== void 0 ? i : t;
    n && (r += `-${n}`);
    let s = r.match(/\s|\//),
        o = e.match(/\s|\//);
    if (s || o) {
        let a = [`Unable to register library "${r}" with version "${e}":`];
        s && a.push(`library name "${r}" contains illegal characters (whitespace or "/")`), s && o && a.push("and"), o && a.push(`version name "${e}" contains illegal characters (whitespace or "/")`), u.warn(a.join(" "));
        return
    }
    W(new g(`${r}-version`, () => ({
        library: r,
        version: e
    }), "VERSION"))
}
var Bt = "firebase-heartbeat-database",
    Tt = 1,
    v = "firebase-heartbeat-store",
    H = null;

function _e() {
    return H || (H = he(Bt, Tt, {
        upgrade: (t, e) => {
            switch (e) {
                case 0:
                    try {
                        t.createObjectStore(v)
                    } catch (n) {
                        console.warn(n)
                    }
            }
        }
    }).catch(t => {
        throw p.create("idb-open", {
            originalErrorMessage: t.message
        })
    })), H
}

function Nt(t) {
    return d(this, null, function*() {
        try {
            let n = (yield _e()).transaction(v),
                i = yield n.objectStore(v).get(ye(t));
            return yield n.done, i
        } catch (e) {
            if (e instanceof m) u.warn(e.message);
            else {
                let n = p.create("idb-get", {
                    originalErrorMessage: e ? .message
                });
                u.warn(n.message)
            }
        }
    })
}

function me(t, e) {
    return d(this, null, function*() {
        try {
            let i = (yield _e()).transaction(v, "readwrite");
            yield i.objectStore(v).put(e, ye(t)), yield i.done
        } catch (n) {
            if (n instanceof m) u.warn(n.message);
            else {
                let i = p.create("idb-set", {
                    originalErrorMessage: n ? .message
                });
                u.warn(i.message)
            }
        }
    })
}

function ye(t) {
    return `${t.name}!${t.options.appId}`
}
var Rt = 1024,
    Mt = 30,
    J = class {
        constructor(e) {
            this.container = e, this._heartbeatsCache = null;
            let n = this.container.getProvider("app").getImmediate();
            this._storage = new K(n), this._heartbeatsCachePromise = this._storage.read().then(i => (this._heartbeatsCache = i, i))
        }
        triggerHeartbeat() {
            return d(this, null, function*() {
                var e, n;
                try {
                    let r = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
                        s = be();
                    if (((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null && (this._heartbeatsCache = yield this._heartbeatsCachePromise, ((n = this._heartbeatsCache) === null || n === void 0 ? void 0 : n.heartbeats) == null) || this._heartbeatsCache.lastSentHeartbeatDate === s || this._heartbeatsCache.heartbeats.some(o => o.date === s)) return;
                    if (this._heartbeatsCache.heartbeats.push({
                            date: s,
                            agent: r
                        }), this._heartbeatsCache.heartbeats.length > Mt) {
                        let o = $t(this._heartbeatsCache.heartbeats);
                        this._heartbeatsCache.heartbeats.splice(o, 1)
                    }
                    return this._storage.overwrite(this._heartbeatsCache)
                } catch (i) {
                    u.warn(i)
                }
            })
        }
        getHeartbeatsHeader() {
            return d(this, null, function*() {
                var e;
                try {
                    if (this._heartbeatsCache === null && (yield this._heartbeatsCachePromise), ((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) return "";
                    let n = be(),
                        {
                            heartbeatsToSend: i,
                            unsentEntries: r
                        } = Lt(this._heartbeatsCache.heartbeats),
                        s = y(JSON.stringify({
                            version: 2,
                            heartbeats: i
                        }));
                    return this._heartbeatsCache.lastSentHeartbeatDate = n, r.length > 0 ? (this._heartbeatsCache.heartbeats = r, yield this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), s
                } catch (n) {
                    return u.warn(n), ""
                }
            })
        }
    };

function be() {
    return new Date().toISOString().substring(0, 10)
}

function Lt(t, e = Rt) {
    let n = [],
        i = t.slice();
    for (let r of t) {
        let s = n.find(o => o.agent === r.agent);
        if (s) {
            if (s.dates.push(r.date), ge(n) > e) {
                s.dates.pop();
                break
            }
        } else if (n.push({
                agent: r.agent,
                dates: [r.date]
            }), ge(n) > e) {
            n.pop();
            break
        }
        i = i.slice(1)
    }
    return {
        heartbeatsToSend: n,
        unsentEntries: i
    }
}
var K = class {
    constructor(e) {
        this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
    }
    runIndexedDBEnvironmentCheck() {
        return d(this, null, function*() {
            return ie() ? se().then(() => !0).catch(() => !1) : !1
        })
    }
    read() {
        return d(this, null, function*() {
            if (yield this._canUseIndexedDBPromise) {
                let n = yield Nt(this.app);
                return n ? .heartbeats ? n : {
                    heartbeats: []
                }
            } else return {
                heartbeats: []
            }
        })
    }
    overwrite(e) {
        return d(this, null, function*() {
            var n;
            if (yield this._canUseIndexedDBPromise) {
                let r = yield this.read();
                return me(this.app, {
                    lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : r.lastSentHeartbeatDate,
                    heartbeats: e.heartbeats
                })
            } else return
        })
    }
    add(e) {
        return d(this, null, function*() {
            var n;
            if (yield this._canUseIndexedDBPromise) {
                let r = yield this.read();
                return me(this.app, {
                    lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : r.lastSentHeartbeatDate,
                    heartbeats: [...r.heartbeats, ...e.heartbeats]
                })
            } else return
        })
    }
};

function ge(t) {
    return y(JSON.stringify({
        version: 2,
        heartbeats: t
    })).length
}

function $t(t) {
    if (t.length === 0) return -1;
    let e = 0,
        n = t[0].date;
    for (let i = 1; i < t.length; i++) t[i].date < n && (n = t[i].date, e = i);
    return e
}

function kt(t) {
    W(new g("platform-logger", e => new j(e), "PRIVATE")), W(new g("heartbeat", e => new J(e), "PRIVATE")), F(z, ue, t), F(z, ue, "esm2017"), F("fire-js", "")
}
kt("");
export {
    ne as a, De as b, Ht as c, C as d, jt as e, zt as f, ie as g, se as h, Ut as i, m as j, E as k, Vt as l, I as m, Wt as n, Gt as o, g as p, f as q, O as r, he as s, W as t, hn as u, un as v, pn as w, xt as x, mn as y, F as z
};
//# sourceMappingURL=chunk-7XRFTPTI.js.map