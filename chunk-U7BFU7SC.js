import {
    ia as Ft
} from "./chunk-GFV577OQ.js";
import {
    $ as Ot,
    Ac as At,
    Bb as Dt,
    Bc as Nt,
    C as O,
    Ca as _,
    Da as It,
    E as W,
    J as q,
    K as j,
    M as yt,
    N as mt,
    Na as Tt,
    R as vt,
    V as T,
    Vc as bt,
    Y as Et,
    _ as N,
    b as z,
    ca as f,
    d as x,
    fa as m,
    g as A,
    h as St,
    ha as J,
    i as C,
    ia as a,
    ja as Q,
    ka as _t,
    l as K,
    la as tt,
    m as E,
    n as P,
    o as Z,
    oa as Mt,
    r as w,
    t as I,
    va as wt,
    w as Y,
    xa as et,
    zb as nt
} from "./chunk-DIJUAHOD.js";
import {
    a as rt
} from "./chunk-5INLNTLQ.js";
import {
    a as S,
    b as ht,
    k as y,
    l as D,
    m as gt,
    n as X
} from "./chunk-XDKSGOKZ.js";
var v = "NGXS_META",
    it = "NGXS_OPTIONS_META",
    ce = "NGXS_SELECTOR_META";

function st(e) {
    if (!e.hasOwnProperty(v)) {
        let o = {
            name: null,
            actions: {},
            defaults: {},
            path: null,
            makeRootSelector(t) {
                return t.getStateGetter(o.name)
            },
            children: []
        };
        Object.defineProperty(e, v, {
            value: o
        })
    }
    return k(e)
}

function k(e) {
    return e[v]
}

function xt(e) {
    return e[ce]
}

function ue(e, o, t) {
    if (o === null || t === null || o.length !== t.length) return !1;
    let n = o.length;
    for (let r = 0; r < n; r++)
        if (!e(o[r], t[r])) return !1;
    return !0
}

function Ct(e, o = Object.is) {
    let t = null,
        n = null;

    function r() {
        return ue(o, t, arguments) || (n = e.apply(null, arguments)), t = arguments, n
    }
    return r.reset = function() {
        t = null, n = null
    }, r
}
var le = (() => {
        class e {
            static {
                this._value = {}
            }
            static set(t) {
                this._value = t
            }
            static pop() {
                let t = this._value;
                return this._value = {}, t
            }
        }
        return e
    })(),
    at = new m("", {
        providedIn: "root",
        factory: () => le.pop()
    }),
    ct = (() => {
        class e extends C {
            constructor() {
                super(1)
            }
            bootstrap() {
                this.next(!0), this.complete()
            }
            static {
                this.\u0275fac = function(n) {
                    return new(n || e)
                }
            }
            static {
                this.\u0275prov = f({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                })
            }
        }
        return e
    })();

function Pt(e) {
    let o = [],
        t = !1;
    return function(...r) {
        if (t) {
            o.unshift(r);
            return
        }
        for (t = !0, e(...r); o.length > 0;) {
            let i = o.pop();
            i && e(...i)
        }
        t = !1
    }
}
var U = class extends A {
        constructor() {
            super(...arguments), this._orderedNext = Pt(o => super.next(o))
        }
        next(o) {
            this._orderedNext(o)
        }
    },
    ot = class extends St {
        constructor(o) {
            super(o), this._orderedNext = Pt(t => super.next(t)), this._currentValue = o
        }
        getValue() {
            return this._currentValue
        }
        next(o) {
            this._currentValue = o, this._orderedNext(o)
        }
    };

function ut(e) {
    return o => new x(t => o.subscribe({
        next(n) {
            e(() => t.next(n))
        },
        error(n) {
            e(() => t.error(n))
        },
        complete() {
            e(() => t.complete())
        }
    }))
}
var G = (() => {
    class e extends ot {
        constructor() {
            super({}), this.state = Ft(this.pipe(ut(At)), {
                manualCleanup: !0,
                requireSync: !0
            })
        }
        ngOnDestroy() {
            this.complete()
        }
        static {
            this.\u0275fac = function(n) {
                return new(n || e)
            }
        }
        static {
            this.\u0275prov = f({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return e
})();
var jt = (() => {
        class e {
            static {
                this.type = "@@INIT"
            }
        }
        return e
    })(),
    Ut = (() => {
        class e {
            static {
                this.type = "@@UPDATE_STATE"
            }
            constructor(t) {
                this.addedStates = t
            }
        }
        return e
    })(),
    kt = new m("");

function L(e) {
    return e.constructor ? .type || e.type
}
var lt = (e, o, t) => {
        e = S({}, e);
        let n = o.split("."),
            r = n.length - 1;
        return n.reduce((i, s, c) => (c === r ? i[s] = t : i[s] = Array.isArray(i[s]) ? i[s].slice() : S({}, i[s]), i && i[s]), e), e
    },
    B = (e, o) => o.split(".").reduce((t, n) => t && t[n], e);

function Gt(e) {
    return typeof e == "function"
}
var de = (() => {
    class e {
        enter(t) {
            return t()
        }
        leave(t) {
            return t()
        }
        static {
            this.\u0275fac = function(n) {
                return new(n || e)
            }
        }
        static {
            this.\u0275prov = f({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return e
})();
var Xt = (() => {
    class e {
        constructor() {
            this._ngZone = a(_), this._isServer = bt(a(Tt))
        }
        enter(t) {
            return this._isServer ? this.runInsideAngular(t) : this.runOutsideAngular(t)
        }
        leave(t) {
            return this.runInsideAngular(t)
        }
        runInsideAngular(t) {
            return _.isInAngularZone() ? t() : this._ngZone.run(t)
        }
        runOutsideAngular(t) {
            return _.isInAngularZone() ? this._ngZone.runOutsideAngular(t) : t()
        }
        static {
            this.\u0275fac = function(n) {
                return new(n || e)
            }
        }
        static {
            this.\u0275prov = f({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return e
})();
var zt = new m(""),
    fe = new m("", {
        providedIn: "root",
        factory: () => {
            let e = a(_),
                o = a(_t),
                t = o.get(zt),
                n = e instanceof _;
            return t ? o.get(t) : o.get(n ? Xt : de)
        }
    }),
    Kt = (() => {
        class e {
            constructor() {
                this._executionStrategy = a(fe)
            }
            enter(t) {
                return this._executionStrategy.enter(t)
            }
            leave(t) {
                return this._executionStrategy.leave(t)
            }
            static {
                this.\u0275fac = function(n) {
                    return new(n || e)
                }
            }
            static {
                this.\u0275prov = f({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                })
            }
        }
        return e
    })();

function $(e) {
    return ut(o => e.leave(o))
}
var Zt = (() => {
    class e extends U {
        constructor() {
            super(), this.dispatched$ = new A, this.pipe(O(t => t.status === "DISPATCHED")).subscribe(t => {
                this.dispatched$.next(t)
            })
        }
        ngOnDestroy() {
            this.complete()
        }
        static {
            this.\u0275fac = function(n) {
                return new(n || e)
            }
        }
        static {
            this.\u0275prov = f({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return e
})();
var Yt = (() => {
        class e {
            constructor() {
                this.plugins = [], this._parentManager = a(e, {
                    optional: !0,
                    skipSelf: !0
                }), this._pluginHandlers = a(kt, {
                    optional: !0
                }), this.registerHandlers()
            }
            get _rootPlugins() {
                return this._parentManager ? .plugins || this.plugins
            }
            registerHandlers() {
                let t = this.getPluginHandlers();
                this._rootPlugins.push(...t)
            }
            getPluginHandlers() {
                return (this._pluginHandlers || []).map(n => n.handle ? n.handle.bind(n) : n)
            }
            static {
                this.\u0275fac = function(n) {
                    return new(n || e)
                }
            }
            static {
                this.\u0275prov = f({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                })
            }
        }
        return e
    })(),
    ft = new WeakMap,
    Lt = !1;

function pe() {
    if (Lt) return;
    let e = z.onUnhandledError;
    z.onUnhandledError = function(o) {
        let t = ft.get(o);
        if (t) t();
        else if (e) e.call(this, o);
        else throw o
    }, Lt = !0
}

function he(e) {
    let o = ft.get(e);
    return o ? (o(), !0) : !1
}

function ge(e, o) {
    if (e !== null && typeof e == "object") {
        let t = !1;
        ft.set(e, () => {
            t || (t = !0, o())
        })
    }
    return e
}

function Se(e) {
    return o => {
        let t = o.subscribe({
            error: n => {
                e.runOutsideAngular(() => {
                    queueMicrotask(() => {
                        t && he(n)
                    })
                })
            }
        });
        return new x(n => (t ? .unsubscribe(), t = null, o.subscribe(n)))
    }
}
var Wt = (() => {
        class e extends A {
            static {
                this.\u0275fac = (() => {
                    let t;
                    return function(r) {
                        return (t || (t = wt(e)))(r || e)
                    }
                })()
            }
            static {
                this.\u0275prov = f({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                })
            }
        }
        return e
    })(),
    ye = (() => {
        class e {
            constructor() {
                this._ngZone = a(_), this._actions = a(Zt), this._actionResults = a(Wt), this._pluginManager = a(Yt), this._stateStream = a(G), this._ngxsExecutionStrategy = a(Kt), this._injector = a(et)
            }
            dispatch(t) {
                return this._ngxsExecutionStrategy.enter(() => this.dispatchByEvents(t)).pipe(Se(this._ngZone), $(this._ngxsExecutionStrategy))
            }
            dispatchByEvents(t) {
                return Array.isArray(t) ? t.length === 0 ? E(void 0) : Y(t.map(n => this.dispatchSingle(n))).pipe(w(() => {})) : this.dispatchSingle(t)
            }
            dispatchSingle(t) {
                let n = this._stateStream.getValue(),
                    r = this._pluginManager.plugins;
                return qt(this._injector, [...r, (i, s) => {
                    i !== n && this._stateStream.next(i);
                    let c = this.getActionResultStream(s);
                    return c.subscribe(u => this._actions.next(u)), this._actions.next({
                        action: s,
                        status: "DISPATCHED"
                    }), this.createDispatchObservable(c)
                }])(n, t).pipe(T())
            }
            getActionResultStream(t) {
                return this._actionResults.pipe(O(n => n.action === t && n.status !== "DISPATCHED"), j(1), T())
            }
            createDispatchObservable(t) {
                return t.pipe(I(n => {
                    switch (n.status) {
                        case "SUCCESSFUL":
                            return E(this._stateStream.getValue());
                        case "ERRORED":
                            return P(() => n.error);
                        default:
                            return E()
                    }
                }), T())
            }
            static {
                this.\u0275fac = function(n) {
                    return new(n || e)
                }
            }
            static {
                this.\u0275prov = f({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                })
            }
        }
        return e
    })(),
    qt = (e, o) => (...t) => {
        let n = o.shift();
        return Mt(e, () => n(...t, (...r) => qt(e, o)(...r)))
    },
    Jt = new m(""),
    Qt = new m(""),
    te = new m(""),
    b = (() => {
        class e {
            constructor() {
                this.compatibility = {
                    strictContentSecurityPolicy: !1
                }, this.executionStrategy = Xt, this.selectorOptions = {
                    injectContainerState: !1,
                    suppressErrors: !1
                }
            }
            static {
                this.\u0275fac = function(n) {
                    return new(n || e)
                }
            }
            static {
                this.\u0275prov = f({
                    token: e,
                    factory: () => (() => {
                        let t = new e,
                            n = a(te);
                        return ht(S(S({}, t), n), {
                            selectorOptions: S(S({}, t.selectorOptions), n.selectorOptions)
                        })
                    })(),
                    providedIn: "root"
                })
            }
        }
        return e
    })(),
    dt = class {
        constructor(o, t, n) {
            this.previousValue = o, this.currentValue = t, this.firstChange = n
        }
    };
var F = (() => {
    class e {
        constructor() {
            this._stateStream = a(G), this._dispatcher = a(ye), this._config = a(b)
        }
        getRootStateOperations() {
            return {
                getState: () => this._stateStream.getValue(),
                setState: n => this._stateStream.next(n),
                dispatch: n => this._dispatcher.dispatch(n)
            }
        }
        setStateToTheCurrentWithNew(t) {
            let n = this.getRootStateOperations(),
                r = n.getState();
            n.setState(S(S({}, r), t.defaults))
        }
        static {
            this.\u0275fac = function(n) {
                return new(n || e)
            }
        }
        static {
            this.\u0275prov = f({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return e
})();

function me(e) {
    let o = xt(e) || k(e);
    return o && o.makeRootSelector || (() => e)
}

function ve(e) {
    return o => {
        for (let t = 0; t < e.length; t++) {
            if (!o) return;
            o = o[e[t]]
        }
        return o
    }
}

function Ee(e) {
    let o = e,
        t = "store." + o[0],
        n = 0,
        r = o.length,
        i = t;
    for (; ++n < r;) i = i + " && " + (t = t + "." + o[n]);
    return new Function("store", "return " + i + ";")
}
var Oe = new m("", {
    providedIn: "root",
    factory: () => a(b).compatibility ? .strictContentSecurityPolicy ? ve : Ee
});

function _e(e) {
    let o = t => e.find(r => r === t)[v].name;
    return e.reduce((t, n) => {
        let {
            name: r,
            children: i
        } = n[v];
        return t[r] = (i || []).map(o), t
    }, {})
}

function Me(e) {
    return e.reduce((o, t) => {
        let n = t[v];
        return o[n.name] = t, o
    }, {})
}

function we(e, o = {}) {
    let t = (n, r) => {
        for (let i in n)
            if (n.hasOwnProperty(i) && n[i].indexOf(r) >= 0) {
                let s = t(n, i);
                return s !== null ? `${s}.${i}` : i
            }
        return null
    };
    for (let n in e)
        if (e.hasOwnProperty(n)) {
            let r = t(e, n);
            o[n] = r ? `${r}.${n}` : n
        }
    return o
}

function Ie(e) {
    let o = [],
        t = {},
        n = (r, i = []) => {
            Array.isArray(i) || (i = []), i.push(r), t[r] = !0, e[r].forEach(s => {
                t[s] || n(s, i.slice(0))
            }), o.indexOf(r) < 0 && o.push(r)
        };
    return Object.keys(e).forEach(r => n(r)), o.reverse()
}
var Te = (() => {
        class e {
            constructor() {
                this._actionTypeToHandlersMap = new Map
            }
            ngOnDestroy() {
                this._actionTypeToHandlersMap.clear()
            }
            get(t) {
                return this._actionTypeToHandlersMap.get(t)
            }
            register(t, n) {
                let r = this._actionTypeToHandlersMap.get(t) ? ? new Set;
                return r.add(n), this._actionTypeToHandlersMap.set(t, r), () => {
                    this._actionTypeToHandlersMap.get(t).delete(n)
                }
            }
            static {
                this.\u0275fac = function(n) {
                    return new(n || e)
                }
            }
            static {
                this.\u0275prov = f({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                })
            }
        }
        return e
    })(),
    _n = new RegExp("^[a-zA-Z0-9_]+$");
var De = (() => {
    class e {
        constructor() {
            this._ngZone = a(_), this._errorHandler = a(It)
        }
        handleError(t, n) {
            this._ngZone.runOutsideAngular(() => this._errorHandler.handleError(t))
        }
        static {
            this.\u0275fac = function(n) {
                return new(n || e)
            }
        }
        static {
            this.\u0275prov = f({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return e
})();

function Ae(e) {
    return o => {
        let t = S({}, o);
        for (let n in e) t[n] = e[n];
        return t
    }
}
var ee = (() => {
    class e {
        constructor() {
            this._internalStateOperations = a(F)
        }
        createStateContext(t) {
            let n = this._internalStateOperations.getRootStateOperations();
            return {
                getState() {
                    let r = n.getState();
                    return re(r, t)
                },
                patchState(r) {
                    let i = n.getState(),
                        s = Ae(r);
                    Bt(n, i, s, t)
                },
                setState(r) {
                    let i = n.getState();
                    Gt(r) ? Bt(n, i, r, t) : ne(n, i, r, t)
                },
                dispatch(r) {
                    return n.dispatch(r)
                }
            }
        }
        static {
            this.\u0275fac = function(n) {
                return new(n || e)
            }
        }
        static {
            this.\u0275prov = f({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return e
})();

function ne(e, o, t, n) {
    let r = lt(o, n, t);
    return e.setState(r), r
}

function Bt(e, o, t, n) {
    let r = re(o, n),
        i = t(r);
    return ne(e, o, i, n)
}

function re(e, o) {
    return B(e, o)
}

function Ne(...e) {
    return be(e, ["DISPATCHED"])
}

function be(e, o, t = Re) {
    let n = xe(e),
        r = o && Ce(o);
    return function(i) {
        return i.pipe(Fe(n, r), t())
    }
}

function Fe(e, o) {
    return O(t => {
        let n = L(t.action),
            r = e[n],
            i = o ? o[t.status] : !0;
        return r && i
    })
}

function Re() {
    return w(e => e.action)
}

function xe(e) {
    return e.reduce((o, t) => (o[L(t)] = !0, o), {})
}

function Ce(e) {
    return e.reduce((o, t) => (o[t] = !0, o), {})
}

function Pe(e) {
    let o = e === void 0 ? {} : e;
    return e && (Array.isArray(e) ? o = e.slice() : typeof e == "object" && (o = S({}, e))), o
}
var pt = (() => {
    class e {
        constructor() {
            this._injector = a(et), this._config = a(b), this._stateContextFactory = a(ee), this._actions = a(Zt), this._actionResults = a(Wt), this._initialState = a(at, {
                optional: !0
            }), this._actionRegistry = a(Te), this._propGetter = a(Oe), this._actionsSubscription = null, this._ngxsUnhandledErrorHandler = null, this._states = [], this._statesByName = {}, this._statePaths = {}, this.getRuntimeSelectorContext = Ct(() => {
                let t = this,
                    n = t._propGetter;

                function r(s) {
                    let c = t._statePaths[s];
                    return c ? n(c.split(".")) : null
                }
                return {
                    getStateGetter(s) {
                        let c = r(s);
                        return c || ((...u) => (c || (c = r(s)), c ? c(...u) : void 0))
                    },
                    getSelectorOptions(s) {
                        let c = t._config.selectorOptions;
                        return S(S({}, c), s || {})
                    }
                }
            })
        }
        ngOnDestroy() {
            this._actionsSubscription ? .unsubscribe()
        }
        add(t) {
            let {
                newStates: n
            } = this.addToStatesMap(t);
            if (!n.length) return [];
            let r = _e(n),
                i = Ie(r),
                s = we(r),
                c = Me(n),
                u = [];
            for (let p of i) {
                let h = c[p],
                    l = s[p],
                    d = h[v];
                this.addRuntimeInfoToMeta(d, l);
                let g = {
                    name: p,
                    path: l,
                    isInitialised: !1,
                    actions: d.actions,
                    instance: a(h),
                    defaults: Pe(d.defaults)
                };
                this.hasBeenMountedAndBootstrapped(p, l) || u.push(g), this._states.push(g), this.hydrateActionMetasMap(g)
            }
            return u
        }
        addAndReturnDefaults(t) {
            let n = t || [],
                r = this.add(n);
            return {
                defaults: r.reduce((s, c) => lt(s, c.path, c.defaults), {}),
                states: r
            }
        }
        connectActionHandlers() {
            this._actionsSubscription = this._actions.pipe(O(t => t.status === "DISPATCHED"), I(t => {
                let n = t.action;
                return this.invokeActions(n).pipe(w(() => ({
                    action: n,
                    status: "SUCCESSFUL"
                })), q({
                    action: n,
                    status: "CANCELED"
                }), W(r => {
                    let i = this._ngxsUnhandledErrorHandler || = this._injector.get(De),
                        s = ge(r, () => i.handleError(r, {
                            action: n
                        }));
                    return E({
                        action: n,
                        status: "ERRORED",
                        error: s
                    })
                }))
            })).subscribe(t => this._actionResults.next(t))
        }
        invokeActions(t) {
            let n = L(t),
                r = [],
                i = !1,
                s = this._actionRegistry.get(n);
            if (s)
                for (let c of s) {
                    let u;
                    try {
                        u = c(t)
                    } catch (p) {
                        u = P(() => p)
                    }
                    r.push(u), i = !0
                }
            return r.length || r.push(E(void 0)), Y(r)
        }
        addToStatesMap(t) {
            let n = [],
                r = this._statesByName;
            for (let i of t) {
                let s = k(i).name;
                !r[s] && (n.push(i), r[s] = i)
            }
            return {
                newStates: n
            }
        }
        addRuntimeInfoToMeta(t, n) {
            this._statePaths[t.name] = n, t.path = n
        }
        hasBeenMountedAndBootstrapped(t, n) {
            let r = B(this._initialState, n) !== void 0;
            return this._statesByName[t] && r
        }
        hydrateActionMetasMap({
            path: t,
            actions: n,
            instance: r
        }) {
            let {
                dispatched$: i
            } = this._actions;
            for (let s of Object.keys(n)) {
                let c = n[s].map(u => {
                    let p = !!u.options.cancelUncompleted;
                    return h => {
                        let l = this._stateContextFactory.createStateContext(t),
                            d = r[u.fn](l, h);
                        if (nt(d) && (d = K(d)), Z(d)) {
                            if (d = d.pipe(I(g => nt(g) ? K(g) : Z(g) ? g : E(g)), q(void 0)), p) {
                                let g = i.pipe(Ne(h));
                                d = d.pipe(N(g))
                            }
                            d = d.pipe(mt(() => {
                                l.setState = $t, l.patchState = $t
                            }))
                        } else d = E(void 0);
                        return d
                    }
                });
                for (let u of c) this._actionRegistry.register(s, u)
            }
        }
        static {
            this.\u0275fac = function(n) {
                return new(n || e)
            }
        }
        static {
            this.\u0275prov = f({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return e
})();

function $t() {}
var H = (() => {
        class e {
            constructor() {
                this._stateStream = a(G), this._internalStateOperations = a(F), this._config = a(b), this._internalExecutionStrategy = a(Kt), this._stateFactory = a(pt), this._selectableStateStream = this._stateStream.pipe($(this._internalExecutionStrategy), T({
                    bufferSize: 1,
                    refCount: !0
                })), this.initStateStream()
            }
            dispatch(t) {
                return this._internalStateOperations.getRootStateOperations().dispatch(t)
            }
            select(t) {
                let n = this.getStoreBoundSelectorFn(t);
                return this._selectableStateStream.pipe(w(n), W(r => this._config.selectorOptions.suppressErrors && r instanceof TypeError ? E(void 0) : P(r)), yt(), $(this._internalExecutionStrategy))
            }
            selectOnce(t) {
                return this.select(t).pipe(j(1))
            }
            selectSnapshot(t) {
                return this.getStoreBoundSelectorFn(t)(this._stateStream.getValue())
            }
            selectSignal(t) {
                let n = this.getStoreBoundSelectorFn(t);
                return Nt(() => n(this._stateStream.state()))
            }
            subscribe(t) {
                return this._selectableStateStream.pipe($(this._internalExecutionStrategy)).subscribe(t)
            }
            snapshot() {
                return this._internalStateOperations.getRootStateOperations().getState()
            }
            reset(t) {
                this._internalStateOperations.getRootStateOperations().setState(t)
            }
            getStoreBoundSelectorFn(t) {
                let n = me(t),
                    r = this._stateFactory.getRuntimeSelectorContext();
                return n(r)
            }
            initStateStream() {
                let t = a(at),
                    n = this._stateStream.value;
                (!n || Object.keys(n).length === 0) && this._stateStream.next(t)
            }
            static {
                this.\u0275fac = function(n) {
                    return new(n || e)
                }
            }
            static {
                this.\u0275prov = f({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                })
            }
        }
        return e
    })(),
    je = new m("");
var Ue = (() => {
        class e {
            static {
                this.store = null
            }
            static {
                this.config = null
            }
            constructor(t, n) {
                e.store = t, e.config = n
            }
            ngOnDestroy() {
                e.store = null, e.config = null
            }
            static {
                this.\u0275fac = function(n) {
                    return new(n || e)(J(H), J(b))
                }
            }
            static {
                this.\u0275prov = f({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                })
            }
        }
        return e
    })(),
    oe = (() => {
        class e {
            constructor() {
                this._store = a(H), this._internalStateOperations = a(F), this._stateContextFactory = a(ee), this._appBootstrappedState = a(ct), this._destroy$ = new C(1)
            }
            ngOnDestroy() {
                this._destroy$.next()
            }
            ngxsBootstrap(t, n) {
                this._internalStateOperations.getRootStateOperations().dispatch(t).pipe(O(() => !!n), Ot(() => this._invokeInitOnStates(n.states)), I(() => this._appBootstrappedState), O(r => !!r), N(this._destroy$)).subscribe(() => this._invokeBootstrapOnStates(n.states))
            }
            _invokeInitOnStates(t) {
                for (let n of t) {
                    let r = n.instance;
                    r.ngxsOnChanges && this._store.select(i => B(i, n.path)).pipe(Et(void 0), vt(), N(this._destroy$)).subscribe(([i, s]) => {
                        let c = new dt(i, s, !n.isInitialised);
                        r.ngxsOnChanges(c)
                    }), r.ngxsOnInit && r.ngxsOnInit(this._getStateContext(n)), n.isInitialised = !0
                }
            }
            _invokeBootstrapOnStates(t) {
                for (let n of t) {
                    let r = n.instance;
                    r.ngxsAfterBootstrap && r.ngxsAfterBootstrap(this._getStateContext(n))
                }
            }
            _getStateContext(t) {
                return this._stateContextFactory.createStateContext(t.path)
            }
            static {
                this.\u0275fac = function(n) {
                    return new(n || e)
                }
            }
            static {
                this.\u0275prov = f({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                })
            }
        }
        return e
    })();

function ke() {
    pe(), (a(je, {
        optional: !0
    }) || []).forEach(s => s());
    let o = a(pt),
        t = a(F);
    a(H), a(Ue);
    let n = a(Jt, {
            optional: !0
        }) || [],
        r = a(oe),
        i = o.addAndReturnDefaults(n);
    t.setStateToTheCurrentWithNew(i), o.connectActionHandlers(), r.ngxsBootstrap(new jt, i)
}

function Ge() {
    a(H);
    let e = a(F),
        o = a(pt),
        t = a(Qt, {
            optional: !0
        }) || [],
        n = a(oe),
        r = t.reduce((s, c) => s.concat(c), []),
        i = o.addAndReturnDefaults(r);
    i.states.length && (e.setStateToTheCurrentWithNew(i), n.ngxsBootstrap(new Ut(i.defaults), i))
}
var Ht = new m(""),
    Vt = new m(""),
    Le = [{
        provide: Ht,
        useFactory: ke
    }, {
        provide: Q,
        multi: !0,
        useFactory() {
            return () => a(Ht)
        }
    }],
    Be = [{
        provide: Vt,
        useFactory: Ge
    }, {
        provide: Q,
        multi: !0,
        useFactory() {
            return () => a(Vt)
        }
    }];

function $e(e, o) {
    return [...e, {
        provide: Jt,
        useValue: e
    }, {
        provide: Dt,
        useFactory: () => {
            let t = a(ct);
            return () => t.bootstrap()
        },
        multi: !0
    }, {
        provide: te,
        useValue: o
    }, {
        provide: zt,
        useValue: o.executionStrategy
    }]
}

function He(e) {
    return [Yt, ...e, {
        provide: Qt,
        multi: !0,
        useValue: e
    }]
}

function Mn(e, o) {
    return (t, n, r) => {
        let i = st(t.constructor),
            s = Array.isArray(e) ? e : [e];
        for (let c of s) {
            let u = c.type;
            i.actions[u] || (i.actions[u] = []), i.actions[u].push({
                fn: n,
                options: o || {},
                type: u
            })
        }
    }
}

function wn(e) {
    return o => {
        let t = o,
            n = st(t),
            r = Object.getPrototypeOf(t),
            i = Ve(r, e);
        Xe({
            meta: n,
            inheritedStateClass: r,
            optionsWithInheritance: i
        }), t[it] = i
    }
}

function Ve(e, o) {
    let t = e[it] || {};
    return S(S({}, t), o)
}

function Xe(e) {
    let {
        meta: o,
        inheritedStateClass: t,
        optionsWithInheritance: n
    } = e, {
        children: r,
        defaults: i,
        name: s
    } = n, c = typeof s == "string" ? s : s && s.getName() || null;
    if (t.hasOwnProperty(v)) {
        let u = t[v] || {};
        o.actions = S(S({}, o.actions), u.actions)
    }
    o.children = r, o.defaults = i, o.name = c
}

function In(e = [], ...o) {
    let t = [],
        n = {};
    return o.length > 0 && (ze(o[0]) ? t.push(...o) : (n = o[0], t.push(...o.slice(1)))), tt([...$e(e, n), Le, t])
}

function ze(e) {
    return !!e.\u0275providers
}

function Tn(e, ...o) {
    return tt([...He(e), o, Be])
}
var bn = (() => {
    class e {
        static {
            this.BUCKET_URL = "https://firebasestorage.googleapis.com/v0/b/sign-mt-assets/o/"
        }
        static {
            this.BUCKET = "gs://sign-mt-assets"
        }
        getStorage() {
            return import ("./esm-3AFSWZZ5.js")
        }
        getFilesystem() {
            return import ("./esm-442P45VC.js")
        }
        stat(t) {
            if (t.endsWith("/")) {
                let i = this.getLocalStorageDirectory(t);
                if (!i) return {
                    path: t,
                    exists: !1,
                    children: []
                };
                let s = i.map(c => this.stat(t + c));
                return {
                    path: t,
                    exists: s.every(c => c.exists),
                    size: s.reduce((c, u) => c + u.size, 0),
                    children: s
                }
            }
            let n = localStorage.getItem(t);
            if (!n) return {
                path: t,
                exists: !1
            };
            let r = JSON.parse(n);
            return {
                path: t,
                exists: !0,
                size: r.size,
                modified: new Date(r.updatedAt)
            }
        }
        deleteCache(t) {
            return y(this, null, function*() {
                if (t.endsWith("/")) {
                    let n = this.getLocalStorageDirectory(t);
                    n && (yield Promise.all(n.map(r => this.deleteCache(t + r))))
                } else yield this.deleteFile(t);
                localStorage.removeItem(t)
            })
        }
        getLocalStorageDirectory(t) {
            let n = localStorage.getItem(t);
            return n ? n.split(",") : null
        }
        download(t, n) {
            return y(this, null, function*() {
                return t.endsWith("/") ? this.getDirectory(t, n) : this.getFileUri(t, n)
            })
        }
        getDirectory(t, n) {
            return y(this, null, function*() {
                if (!t.endsWith("/")) throw new Error("Directory path must end with /");
                let r = this.getLocalStorageDirectory(t);
                r || (r = Array.from(yield this.listDirectory(t)), localStorage.setItem(t, r.join(",")));
                let i = 0,
                    s = new Array(r.length).fill(0),
                    c = new Set,
                    u = (l, d, g) => {
                        if (c.has(l) || (c.add(l), i += g), s[l] = d, n) {
                            let R = s.reduce((se, V) => se + V, 0);
                            n(R, i)
                        }
                    },
                    p = yield Promise.all(r.map((l, d) => this.getFileUri(t + l, (g, R) => u(d, g, R)))), h = new Map;
                return r.forEach((l, d) => h.set(l, p[d])), h
            })
        }
        getFileUri(t, n) {
            return y(this, null, function*() {
                let r = (s = !1) => y(this, null, function*() {
                        return s ? this.getRemoteFileAsBlob(t, n) : this.getRemoteFile(t, n)
                    }),
                    i = () => y(this, null, function*() {
                        let s = yield this.statRemoteFile(t);
                        localStorage.setItem(t, JSON.stringify(s))
                    });
                try {
                    return yield this.navigatorStorageFileUri(t, r, i)
                } catch {}
                try {
                    return yield this.capacitorGetFileUri(t, r, i)
                } catch {}
                return this.buildRemotePath(t)
            })
        }
        deleteFile(t) {
            return y(this, null, function*() {
                return Promise.all([this.deleteNavigatorStorageFile(t).catch(() => {}), this.deleteCapacitorGetFileUri(t).catch(() => {})])
            })
        }
        deleteNavigatorStorageFile(t) {
            return y(this, null, function*() {
                let [n, r] = yield this.navigatorStorageDirectory(t);
                try {
                    yield(yield n.getFileHandle(r)).remove()
                } catch {}
            })
        }
        navigatorStorageDirectory(t) {
            return y(this, null, function*() {
                let n = yield navigator.storage.getDirectory(), r = t.split("/"), i = r.pop();
                for (let s of r) n = yield n.getDirectoryHandle(s, {
                    create: !0
                });
                return [n, i]
            })
        }
        navigatorStorageFileUri(t, n, r) {
            return y(this, null, function*() {
                let [i, s] = yield this.navigatorStorageDirectory(t), c = () => y(this, null, function*() {
                    let h = yield i.getFileHandle(s, {
                        create: !0
                    });
                    if (!("createWritable" in h)) throw yield h.remove(), new Error("Web storage not supported");
                    let l = yield h.createWritable();
                    try {
                        let V = yield n();
                        try {
                            for (var d = X(V), g, R, se; g = !(R = yield d.next()).done; g = !1) {
                                let ae = R.value;
                                yield l.write(ae)
                            }
                        } catch {
                            se = [R]
                        } finally {
                            try {
                                g && (R = d.return) && (yield R.call(d))
                            } finally {
                                if (se) throw se[0]
                            }
                        }
                    } finally {
                        yield l.close()
                    }
                    yield r()
                }), u = () => y(this, null, function*() {
                    let h = localStorage.getItem(t);
                    if (!h) return null;
                    let l = JSON.parse(h),
                        d;
                    try {
                        d = yield i.getFileHandle(s)
                    } catch {
                        return console.log("File handle does not exist in navigator.storage"), null
                    }
                    let g = yield d.getFile();
                    return Number(l.size) !== g.size ? (console.error("File size mismatch", l, g), null) : g
                }), p = yield u();
                for (; !p;) yield c(), p = yield u();
                return URL.createObjectURL(p)
            })
        }
        deleteCapacitorGetFileUri(t) {
            return y(this, null, function*() {
                let {
                    Directory: n,
                    Filesystem: r
                } = yield this.getFilesystem(), i = {
                    directory: n.External,
                    path: t
                };
                yield r.deleteFile(i)
            })
        }
        capacitorGetFileUri(t, n, r) {
            return y(this, null, function*() {
                let {
                    Directory: i,
                    Filesystem: s
                } = yield this.getFilesystem(), c = {
                    directory: i.External,
                    path: t
                };
                try {
                    if ((yield s.stat(c)).size === 0) return yield s.deleteFile(c), this.capacitorGetFileUri(t, n, r)
                } catch {
                    let h = yield n(!0);
                    yield(yield
                        import ("./blob_writer-VWRTU4UY.js")).default({
                        path: t,
                        directory: i.External,
                        blob: h,
                        fast_mode: !0,
                        recursive: !0
                    }), yield r()
                }
                if (rt.isNativePlatform()) {
                    let {
                        uri: p
                    } = yield s.getUri(c);
                    return rt.convertFileSrc(p)
                }
                let {
                    data: u
                } = yield s.readFile(c);
                return URL.createObjectURL(u)
            })
        }
        buildRemotePath(t) {
            return e.BUCKET_URL + encodeURIComponent(t)
        }
        listDirectory(t) {
            return y(this, null, function*() {
                let {
                    FirebaseStorage: n
                } = yield this.getStorage(), {
                    items: r
                } = yield n.listFiles({
                    path: `${e.BUCKET}/${t}`
                });
                return r.map(i => i.name)
            })
        }
        statRemoteFile(t) {
            return y(this, null, function*() {
                let {
                    FirebaseStorage: n
                } = yield this.getStorage();
                return n.getMetadata({
                    path: `${e.BUCKET}/${t}`
                })
            })
        }
        getRemoteFileAsBlob(t, n) {
            return y(this, null, function*() {
                let r = null,
                    i = 0,
                    s = this.getRemoteFile(t, (l, d) => {
                        r || (r = new Uint8Array(d)), n && n(l, d)
                    });
                try {
                    for (var c = X(s), u, p, h; u = !(p = yield c.next()).done; u = !1) {
                        let l = p.value;
                        r.set(l, i), i += l.length
                    }
                } catch {
                    h = [p]
                } finally {
                    try {
                        u && (p = c.return) && (yield p.call(c))
                    } finally {
                        if (h) throw h[0]
                    }
                }
                return new Blob([r])
            })
        }
        getRemoteFile(t, n) {
            return gt(this, null, function*() {
                let {
                    FirebaseStorage: r
                } = yield new D(this.getStorage()), {
                    downloadUrl: i
                } = yield new D(r.getDownloadUrl({
                    path: `${e.BUCKET}/${t}`
                })), s = yield new D(fetch(i)), c = s.body.getReader(), u = +s.headers.get("Content-Length"), p = 0;
                for (;;) {
                    let {
                        done: h,
                        value: l
                    } = yield new D(c.read());
                    if (h) break;
                    p += l.length, n && n(p, u), yield l
                }
            })
        }
        static {
            this.\u0275fac = function(n) {
                return new(n || e)
            }
        }
        static {
            this.\u0275prov = f({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return e
})();

function M(e) {
    return "navigator" in globalThis ? navigator[e] : ""
}
var xn = /(Mac|iPhone|iPod|iPad)/i.test(M("platform")),
    Ke = /(iPhone|iPod|iPad)/i.test(M("platform")),
    Cn = /apple/i.test(M("vendor")) && !/crios/i.test(M("userAgent")) && !/fxios/i.test(M("userAgent")) && !/Opera|OPT\//.test(M("userAgent")),
    ie = /(Chrome|Chromium)/i.test(M("userAgent")),
    Pn = /AppleWebKit/i.test(M("userAgent")) && (!ie || Ke && ie);
export {
    H as a, Mn as b, wn as c, In as d, Tn as e, bn as f, Ke as g, Cn as h, ie as i
};
//# sourceMappingURL=chunk-U7BFU7SC.js.map