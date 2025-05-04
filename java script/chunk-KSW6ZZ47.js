var S = Symbol("Comlink.proxy"),
    L = Symbol("Comlink.endpoint"),
    z = Symbol("Comlink.releaseProxy"),
    M = Symbol("Comlink.finalizer"),
    w = Symbol("Comlink.thrown"),
    x = e => typeof e == "object" && e !== null || typeof e == "function",
    N = {
        canHandle: e => x(e) && e[S],
        serialize(e) {
            let {
                port1: t,
                port2: r
            } = new MessageChannel;
            return A(e, t), [r, [r]]
        },
        deserialize(e) {
            return e.start(), v(e)
        }
    },
    H = {
        canHandle: e => x(e) && w in e,
        serialize({
            value: e
        }) {
            let t;
            return e instanceof Error ? t = {
                isError: !0,
                value: {
                    message: e.message,
                    name: e.name,
                    stack: e.stack
                }
            } : t = {
                isError: !1,
                value: e
            }, [t, []]
        },
        deserialize(e) {
            throw e.isError ? Object.assign(new Error(e.value.message), e.value) : e.value
        }
    },
    T = new Map([
        ["proxy", N],
        ["throw", H]
    ]);

function V(e, t) {
    for (let r of e)
        if (t === r || r === "*" || r instanceof RegExp && r.test(t)) return !0;
    return !1
}

function A(e, t = globalThis, r = ["*"]) {
    t.addEventListener("message", function g(n) {
        if (!n || !n.data) return;
        if (!V(r, n.origin)) {
            console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
            return
        }
        let {
            id: a,
            type: f,
            path: c
        } = Object.assign({
            path: []
        }, n.data), l = (n.data.argumentList || []).map(y), s;
        try {
            let o = c.slice(0, -1).reduce((i, m) => i[m], e),
                u = c.reduce((i, m) => i[m], e);
            switch (f) {
                case "GET":
                    s = u;
                    break;
                case "SET":
                    o[c.slice(-1)[0]] = y(n.data.value), s = !0;
                    break;
                case "APPLY":
                    s = u.apply(o, l);
                    break;
                case "CONSTRUCT":
                    {
                        let i = new u(...l);s = F(i)
                    }
                    break;
                case "ENDPOINT":
                    {
                        let {
                            port1: i,
                            port2: m
                        } = new MessageChannel;A(e, m),
                        s = D(i, [i])
                    }
                    break;
                case "RELEASE":
                    s = void 0;
                    break;
                default:
                    return
            }
        } catch (o) {
            s = {
                value: o,
                [w]: 0
            }
        }
        Promise.resolve(s).catch(o => ({
            value: o,
            [w]: 0
        })).then(o => {
            let [u, i] = p(o);
            t.postMessage(Object.assign(Object.assign({}, u), {
                id: a
            }), i), f === "RELEASE" && (t.removeEventListener("message", g), R(t), M in e && typeof e[M] == "function" && e[M]())
        }).catch(o => {
            let [u, i] = p({
                value: new TypeError("Unserializable return value"),
                [w]: 0
            });
            t.postMessage(Object.assign(Object.assign({}, u), {
                id: a
            }), i)
        })
    }), t.start && t.start()
}

function _(e) {
    return e.constructor.name === "MessagePort"
}

function R(e) {
    _(e) && e.close()
}

function v(e, t) {
    let r = new Map;
    return e.addEventListener("message", function(n) {
        let {
            data: a
        } = n;
        if (!a || !a.id) return;
        let f = r.get(a.id);
        if (f) try {
            f(a)
        } finally {
            r.delete(a.id)
        }
    }), P(e, r, [], t)
}

function E(e) {
    if (e) throw new Error("Proxy has been released and is not useable")
}

function C(e) {
    return d(e, new Map, {
        type: "RELEASE"
    }).then(() => {
        R(e)
    })
}
var h = new WeakMap,
    b = "FinalizationRegistry" in globalThis && new FinalizationRegistry(e => {
        let t = (h.get(e) || 0) - 1;
        h.set(e, t), t === 0 && C(e)
    });

function I(e, t) {
    let r = (h.get(t) || 0) + 1;
    h.set(t, r), b && b.register(e, t, e)
}

function W(e) {
    b && b.unregister(e)
}

function P(e, t, r = [], g = function() {}) {
    let n = !1,
        a = new Proxy(g, {
            get(f, c) {
                if (E(n), c === z) return () => {
                    W(a), C(e), t.clear(), n = !0
                };
                if (c === "then") {
                    if (r.length === 0) return {
                        then: () => a
                    };
                    let l = d(e, t, {
                        type: "GET",
                        path: r.map(s => s.toString())
                    }).then(y);
                    return l.then.bind(l)
                }
                return P(e, t, [...r, c])
            },
            set(f, c, l) {
                E(n);
                let [s, o] = p(l);
                return d(e, t, {
                    type: "SET",
                    path: [...r, c].map(u => u.toString()),
                    value: s
                }, o).then(y)
            },
            apply(f, c, l) {
                E(n);
                let s = r[r.length - 1];
                if (s === L) return d(e, t, {
                    type: "ENDPOINT"
                }).then(y);
                if (s === "bind") return P(e, t, r.slice(0, -1));
                let [o, u] = k(l);
                return d(e, t, {
                    type: "APPLY",
                    path: r.map(i => i.toString()),
                    argumentList: o
                }, u).then(y)
            },
            construct(f, c) {
                E(n);
                let [l, s] = k(c);
                return d(e, t, {
                    type: "CONSTRUCT",
                    path: r.map(o => o.toString()),
                    argumentList: l
                }, s).then(y)
            }
        });
    return I(a, e), a
}

function j(e) {
    return Array.prototype.concat.apply([], e)
}

function k(e) {
    let t = e.map(p);
    return [t.map(r => r[0]), j(t.map(r => r[1]))]
}
var O = new WeakMap;

function D(e, t) {
    return O.set(e, t), e
}

function F(e) {
    return Object.assign(e, {
        [S]: !0
    })
}

function p(e) {
    for (let [t, r] of T)
        if (r.canHandle(e)) {
            let [g, n] = r.serialize(e);
            return [{
                type: "HANDLER",
                name: t,
                value: g
            }, n]
        }
    return [{
        type: "RAW",
        value: e
    }, O.get(e) || []]
}

function y(e) {
    switch (e.type) {
        case "HANDLER":
            return T.get(e.name).deserialize(e.value);
        case "RAW":
            return e.value
    }
}

function d(e, t, r, g) {
    return new Promise(n => {
        let a = U();
        t.set(a, n), e.start && e.start(), e.postMessage(Object.assign({
            id: a
        }, r), g)
    })
}

function U() {
    return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-")
}
export {
    v as a, D as b
};
//# sourceMappingURL=chunk-KSW6ZZ47.js.map