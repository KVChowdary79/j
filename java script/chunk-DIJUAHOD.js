import {
    a as Z,
    b as ne,
    d as Nu,
    k as Be
} from "./chunk-XDKSGOKZ.js";

function Ut(e) {
    let n = e(r => {
        Error.call(r), r.stack = new Error().stack
    });
    return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n
}
var Ue = Ut(e => function() {
    e(this), this.name = "EmptyError", this.message = "no elements in sequence"
});

function w(e) {
    return typeof e == "function"
}
var vr = Ut(e => function(n) {
    e(this), this.message = n ? `${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}` : "", this.name = "UnsubscriptionError", this.errors = n
});

function ft(e, t) {
    if (e) {
        let n = e.indexOf(t);
        0 <= n && e.splice(n, 1)
    }
}
var $ = class e {
    constructor(t) {
        this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null
    }
    unsubscribe() {
        let t;
        if (!this.closed) {
            this.closed = !0;
            let {
                _parentage: n
            } = this;
            if (n)
                if (this._parentage = null, Array.isArray(n))
                    for (let i of n) i.remove(this);
                else n.remove(this);
            let {
                initialTeardown: r
            } = this;
            if (w(r)) try {
                r()
            } catch (i) {
                t = i instanceof vr ? i.errors : [i]
            }
            let {
                _finalizers: o
            } = this;
            if (o) {
                this._finalizers = null;
                for (let i of o) try {
                    xu(i)
                } catch (s) {
                    t = t ? ? [], s instanceof vr ? t = [...t, ...s.errors] : t.push(s)
                }
            }
            if (t) throw new vr(t)
        }
    }
    add(t) {
        var n;
        if (t && t !== this)
            if (this.closed) xu(t);
            else {
                if (t instanceof e) {
                    if (t.closed || t._hasParent(this)) return;
                    t._addParent(this)
                }(this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t)
            }
    }
    _hasParent(t) {
        let {
            _parentage: n
        } = this;
        return n === t || Array.isArray(n) && n.includes(t)
    }
    _addParent(t) {
        let {
            _parentage: n
        } = this;
        this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t
    }
    _removeParent(t) {
        let {
            _parentage: n
        } = this;
        n === t ? this._parentage = null : Array.isArray(n) && ft(n, t)
    }
    remove(t) {
        let {
            _finalizers: n
        } = this;
        n && ft(n, t), t instanceof e && t._removeParent(this)
    }
};
$.EMPTY = (() => {
    let e = new $;
    return e.closed = !0, e
})();
var $i = $.EMPTY;

function Dr(e) {
    return e instanceof $ || e && "closed" in e && w(e.remove) && w(e.add) && w(e.unsubscribe)
}

function xu(e) {
    w(e) ? e() : e.unsubscribe()
}
var pe = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1
};
var $t = {
    setTimeout(e, t, ...n) {
        let {
            delegate: r
        } = $t;
        return r ? .setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n)
    },
    clearTimeout(e) {
        let {
            delegate: t
        } = $t;
        return (t ? .clearTimeout || clearTimeout)(e)
    },
    delegate: void 0
};

function Er(e) {
    $t.setTimeout(() => {
        let {
            onUnhandledError: t
        } = pe;
        if (t) t(e);
        else throw e
    })
}

function Ee() {}
var Au = Hi("C", void 0, void 0);

function Ru(e) {
    return Hi("E", void 0, e)
}

function Ou(e) {
    return Hi("N", e, void 0)
}

function Hi(e, t, n) {
    return {
        kind: e,
        value: t,
        error: n
    }
}
var pt = null;

function Ht(e) {
    if (pe.useDeprecatedSynchronousErrorHandling) {
        let t = !pt;
        if (t && (pt = {
                errorThrown: !1,
                error: null
            }), e(), t) {
            let {
                errorThrown: n,
                error: r
            } = pt;
            if (pt = null, n) throw r
        }
    } else e()
}

function ku(e) {
    pe.useDeprecatedSynchronousErrorHandling && pt && (pt.errorThrown = !0, pt.error = e)
}
var ht = class extends $ {
        constructor(t) {
            super(), this.isStopped = !1, t ? (this.destination = t, Dr(t) && t.add(this)) : this.destination = qg
        }
        static create(t, n, r) {
            return new we(t, n, r)
        }
        next(t) {
            this.isStopped ? Gi(Ou(t), this) : this._next(t)
        }
        error(t) {
            this.isStopped ? Gi(Ru(t), this) : (this.isStopped = !0, this._error(t))
        }
        complete() {
            this.isStopped ? Gi(Au, this) : (this.isStopped = !0, this._complete())
        }
        unsubscribe() {
            this.closed || (this.isStopped = !0, super.unsubscribe(), this.destination = null)
        }
        _next(t) {
            this.destination.next(t)
        }
        _error(t) {
            try {
                this.destination.error(t)
            } finally {
                this.unsubscribe()
            }
        }
        _complete() {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }
    },
    zg = Function.prototype.bind;

function zi(e, t) {
    return zg.call(e, t)
}
var qi = class {
        constructor(t) {
            this.partialObserver = t
        }
        next(t) {
            let {
                partialObserver: n
            } = this;
            if (n.next) try {
                n.next(t)
            } catch (r) {
                wr(r)
            }
        }
        error(t) {
            let {
                partialObserver: n
            } = this;
            if (n.error) try {
                n.error(t)
            } catch (r) {
                wr(r)
            } else wr(t)
        }
        complete() {
            let {
                partialObserver: t
            } = this;
            if (t.complete) try {
                t.complete()
            } catch (n) {
                wr(n)
            }
        }
    },
    we = class extends ht {
        constructor(t, n, r) {
            super();
            let o;
            if (w(t) || !t) o = {
                next: t ? ? void 0,
                error: n ? ? void 0,
                complete: r ? ? void 0
            };
            else {
                let i;
                this && pe.useDeprecatedNextContext ? (i = Object.create(t), i.unsubscribe = () => this.unsubscribe(), o = {
                    next: t.next && zi(t.next, i),
                    error: t.error && zi(t.error, i),
                    complete: t.complete && zi(t.complete, i)
                }) : o = t
            }
            this.destination = new qi(o)
        }
    };

function wr(e) {
    pe.useDeprecatedSynchronousErrorHandling ? ku(e) : Er(e)
}

function Gg(e) {
    throw e
}

function Gi(e, t) {
    let {
        onStoppedNotification: n
    } = pe;
    n && $t.setTimeout(() => n(e, t))
}
var qg = {
    closed: !0,
    next: Ee,
    error: Gg,
    complete: Ee
};

function Wg(e, t) {
    let n = typeof t == "object";
    return new Promise((r, o) => {
        let i = new we({
            next: s => {
                r(s), i.unsubscribe()
            },
            error: o,
            complete: () => {
                n ? r(t.defaultValue) : o(new Ue)
            }
        });
        e.subscribe(i)
    })
}

function nM(e, t, n, r) {
    var o = arguments.length,
        i = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r,
        s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(e, t, n, r);
    else
        for (var a = e.length - 1; a >= 0; a--)(s = e[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(t, n, i) : s(t, n)) || i);
    return o > 3 && i && Object.defineProperty(t, n, i), i
}

function Pu(e, t, n, r) {
    function o(i) {
        return i instanceof n ? i : new n(function(s) {
            s(i)
        })
    }
    return new(n || (n = Promise))(function(i, s) {
        function a(l) {
            try {
                u(r.next(l))
            } catch (d) {
                s(d)
            }
        }

        function c(l) {
            try {
                u(r.throw(l))
            } catch (d) {
                s(d)
            }
        }

        function u(l) {
            l.done ? i(l.value) : o(l.value).then(a, c)
        }
        u((r = r.apply(e, t || [])).next())
    })
}

function Fu(e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
        n = t && e[t],
        r = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number") return {
        next: function() {
            return e && r >= e.length && (e = void 0), {
                value: e && e[r++],
                done: !e
            }
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function gt(e) {
    return this instanceof gt ? (this.v = e, this) : new gt(e)
}

function Lu(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(e, t || []),
        o, i = [];
    return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", s), o[Symbol.asyncIterator] = function() {
        return this
    }, o;

    function s(f) {
        return function(h) {
            return Promise.resolve(h).then(f, d)
        }
    }

    function a(f, h) {
        r[f] && (o[f] = function(g) {
            return new Promise(function(y, v) {
                i.push([f, g, y, v]) > 1 || c(f, g)
            })
        }, h && (o[f] = h(o[f])))
    }

    function c(f, h) {
        try {
            u(r[f](h))
        } catch (g) {
            p(i[0][3], g)
        }
    }

    function u(f) {
        f.value instanceof gt ? Promise.resolve(f.value.v).then(l, d) : p(i[0][2], f)
    }

    function l(f) {
        c("next", f)
    }

    function d(f) {
        c("throw", f)
    }

    function p(f, h) {
        f(h), i.shift(), i.length && c(i[0][0], i[0][1])
    }
}

function ju(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator],
        n;
    return t ? t.call(e) : (e = typeof Fu == "function" ? Fu(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
        return this
    }, n);

    function r(i) {
        n[i] = e[i] && function(s) {
            return new Promise(function(a, c) {
                s = e[i](s), o(a, c, s.done, s.value)
            })
        }
    }

    function o(i, s, a, c) {
        Promise.resolve(c).then(function(u) {
            i({
                value: u,
                done: a
            })
        }, s)
    }
}
var zt = e => e && typeof e.length == "number" && typeof e != "function";

function Ir(e) {
    return w(e ? .then)
}
var Gt = typeof Symbol == "function" && Symbol.observable || "@@observable";

function Y(e) {
    return e
}

function Zg(...e) {
    return Wi(e)
}

function Wi(e) {
    return e.length === 0 ? Y : e.length === 1 ? e[0] : function(n) {
        return e.reduce((r, o) => o(r), n)
    }
}
var N = (() => {
    class e {
        constructor(n) {
            n && (this._subscribe = n)
        }
        lift(n) {
            let r = new e;
            return r.source = this, r.operator = n, r
        }
        subscribe(n, r, o) {
            let i = Qg(n) ? n : new we(n, r, o);
            return Ht(() => {
                let {
                    operator: s,
                    source: a
                } = this;
                i.add(s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i))
            }), i
        }
        _trySubscribe(n) {
            try {
                return this._subscribe(n)
            } catch (r) {
                n.error(r)
            }
        }
        forEach(n, r) {
            return r = Vu(r), new r((o, i) => {
                let s = new we({
                    next: a => {
                        try {
                            n(a)
                        } catch (c) {
                            i(c), s.unsubscribe()
                        }
                    },
                    error: i,
                    complete: o
                });
                this.subscribe(s)
            })
        }
        _subscribe(n) {
            var r;
            return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)
        }[Gt]() {
            return this
        }
        pipe(...n) {
            return Wi(n)(this)
        }
        toPromise(n) {
            return n = Vu(n), new n((r, o) => {
                let i;
                this.subscribe(s => i = s, s => o(s), () => r(i))
            })
        }
    }
    return e.create = t => new e(t), e
})();

function Vu(e) {
    var t;
    return (t = e ? ? pe.Promise) !== null && t !== void 0 ? t : Promise
}

function Yg(e) {
    return e && w(e.next) && w(e.error) && w(e.complete)
}

function Qg(e) {
    return e && e instanceof ht || Yg(e) && Dr(e)
}

function br(e) {
    return w(e[Gt])
}

function Cr(e) {
    return Symbol.asyncIterator && w(e ? .[Symbol.asyncIterator])
}

function Tr(e) {
    return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)
}

function Kg() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
}
var _r = Kg();

function Mr(e) {
    return w(e ? .[_r])
}

function Sr(e) {
    return Lu(this, arguments, function*() {
        let n = e.getReader();
        try {
            for (;;) {
                let {
                    value: r,
                    done: o
                } = yield gt(n.read());
                if (o) return yield gt(void 0);
                yield yield gt(r)
            }
        } finally {
            n.releaseLock()
        }
    })
}

function Nr(e) {
    return w(e ? .getReader)
}

function A(e) {
    if (e instanceof N) return e;
    if (e != null) {
        if (br(e)) return Jg(e);
        if (zt(e)) return Xg(e);
        if (Ir(e)) return em(e);
        if (Cr(e)) return Bu(e);
        if (Mr(e)) return tm(e);
        if (Nr(e)) return nm(e)
    }
    throw Tr(e)
}

function Jg(e) {
    return new N(t => {
        let n = e[Gt]();
        if (w(n.subscribe)) return n.subscribe(t);
        throw new TypeError("Provided object does not correctly implement Symbol.observable")
    })
}

function Xg(e) {
    return new N(t => {
        for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
        t.complete()
    })
}

function em(e) {
    return new N(t => {
        e.then(n => {
            t.closed || (t.next(n), t.complete())
        }, n => t.error(n)).then(null, Er)
    })
}

function tm(e) {
    return new N(t => {
        for (let n of e)
            if (t.next(n), t.closed) return;
        t.complete()
    })
}

function Bu(e) {
    return new N(t => {
        rm(e, t).catch(n => t.error(n))
    })
}

function nm(e) {
    return Bu(Sr(e))
}

function rm(e, t) {
    var n, r, o, i;
    return Pu(this, void 0, void 0, function*() {
        try {
            for (n = ju(e); r = yield n.next(), !r.done;) {
                let s = r.value;
                if (t.next(s), t.closed) return
            }
        } catch (s) {
            o = {
                error: s
            }
        } finally {
            try {
                r && !r.done && (i = n.return) && (yield i.call(n))
            } finally {
                if (o) throw o.error
            }
        }
        t.complete()
    })
}

function Zi(e) {
    return w(e ? .lift)
}

function D(e) {
    return t => {
        if (Zi(t)) return t.lift(function(n) {
            try {
                return e(n, this)
            } catch (r) {
                this.error(r)
            }
        });
        throw new TypeError("Unable to lift unknown Observable type")
    }
}

function E(e, t, n, r, o) {
    return new Yi(e, t, n, r, o)
}
var Yi = class extends ht {
    constructor(t, n, r, o, i, s) {
        super(t), this.onFinalize = i, this.shouldUnsubscribe = s, this._next = n ? function(a) {
            try {
                n(a)
            } catch (c) {
                t.error(c)
            }
        } : super._next, this._error = o ? function(a) {
            try {
                o(a)
            } catch (c) {
                t.error(c)
            } finally {
                this.unsubscribe()
            }
        } : super._error, this._complete = r ? function() {
            try {
                r()
            } catch (a) {
                t.error(a)
            } finally {
                this.unsubscribe()
            }
        } : super._complete
    }
    unsubscribe() {
        var t;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            let {
                closed: n
            } = this;
            super.unsubscribe(), !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this))
        }
    }
};

function J(e, t) {
    return D((n, r) => {
        let o = 0;
        n.subscribe(E(r, i => {
            r.next(e.call(t, i, o++))
        }))
    })
}

function re(e, t, n, r = 0, o = !1) {
    let i = t.schedule(function() {
        n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe()
    }, r);
    if (e.add(i), !o) return i
}

function Uu(e, t, n, r, o, i, s, a) {
    let c = [],
        u = 0,
        l = 0,
        d = !1,
        p = () => {
            d && !c.length && !u && t.complete()
        },
        f = g => u < r ? h(g) : c.push(g),
        h = g => {
            i && t.next(g), u++;
            let y = !1;
            A(n(g, l++)).subscribe(E(t, v => {
                o ? .(v), i ? f(v) : t.next(v)
            }, () => {
                y = !0
            }, void 0, () => {
                if (y) try {
                    for (u--; c.length && u < r;) {
                        let v = c.shift();
                        s ? re(t, s, () => h(v)) : h(v)
                    }
                    p()
                } catch (v) {
                    t.error(v)
                }
            }))
        };
    return e.subscribe(E(t, f, () => {
        d = !0, p()
    })), () => {
        a ? .()
    }
}

function he(e, t, n = 1 / 0) {
    return w(t) ? he((r, o) => J((i, s) => t(r, i, o, s))(A(e(r, o))), n) : (typeof t == "number" && (n = t), D((r, o) => Uu(r, o, e, n)))
}
var {
    isArray: om
} = Array;

function im(e, t) {
    return om(t) ? e(...t) : e(t)
}

function qt(e) {
    return J(t => im(e, t))
}
var sm = ["addListener", "removeListener"],
    am = ["addEventListener", "removeEventListener"],
    cm = ["on", "off"];

function Qi(e, t, n, r) {
    if (w(n) && (r = n, n = void 0), r) return Qi(e, t, n).pipe(qt(r));
    let [o, i] = dm(e) ? am.map(s => a => e[s](t, a, n)) : um(e) ? sm.map($u(e, t)) : lm(e) ? cm.map($u(e, t)) : [];
    if (!o && zt(e)) return he(s => Qi(s, t, n))(A(e));
    if (!o) throw new TypeError("Invalid event target");
    return new N(s => {
        let a = (...c) => s.next(1 < c.length ? c : c[0]);
        return o(a), () => i(a)
    })
}

function $u(e, t) {
    return n => r => e[n](t, r)
}

function um(e) {
    return w(e.addListener) && w(e.removeListener)
}

function lm(e) {
    return w(e.on) && w(e.off)
}

function dm(e) {
    return w(e.addEventListener) && w(e.removeEventListener)
}

function Ae(e, t) {
    return D((n, r) => {
        let o = 0;
        n.subscribe(E(r, i => e.call(t, i, o++) && r.next(i)))
    })
}

function Hu(e) {
    return D((t, n) => {
        A(e).subscribe(E(n, () => n.complete(), Ee)), !n.closed && t.subscribe(n)
    })
}

function xr(e, t, n) {
    let r = w(e) || t || n ? {
        next: e,
        error: t,
        complete: n
    } : e;
    return r ? D((o, i) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        o.subscribe(E(i, c => {
            var u;
            (u = r.next) === null || u === void 0 || u.call(r, c), i.next(c)
        }, () => {
            var c;
            a = !1, (c = r.complete) === null || c === void 0 || c.call(r), i.complete()
        }, c => {
            var u;
            a = !1, (u = r.error) === null || u === void 0 || u.call(r, c), i.error(c)
        }, () => {
            var c, u;
            a && ((c = r.unsubscribe) === null || c === void 0 || c.call(r)), (u = r.finalize) === null || u === void 0 || u.call(r)
        }))
    }) : Y
}

function Ki() {
    return D((e, t) => {
        let n = null;
        e._refCount++;
        let r = E(t, void 0, void 0, void 0, () => {
            if (!e || e._refCount <= 0 || 0 < --e._refCount) {
                n = null;
                return
            }
            let o = e._connection,
                i = n;
            n = null, o && (!i || o === i) && o.unsubscribe(), t.unsubscribe()
        });
        e.subscribe(r), r.closed || (n = e.connect())
    })
}
var Sn = class extends N {
    constructor(t, n) {
        super(), this.source = t, this.subjectFactory = n, this._subject = null, this._refCount = 0, this._connection = null, Zi(t) && (this.lift = t.lift)
    }
    _subscribe(t) {
        return this.getSubject().subscribe(t)
    }
    getSubject() {
        let t = this._subject;
        return (!t || t.isStopped) && (this._subject = this.subjectFactory()), this._subject
    }
    _teardown() {
        this._refCount = 0;
        let {
            _connection: t
        } = this;
        this._subject = this._connection = null, t ? .unsubscribe()
    }
    connect() {
        let t = this._connection;
        if (!t) {
            t = this._connection = new $;
            let n = this.getSubject();
            t.add(this.source.subscribe(E(n, void 0, () => {
                this._teardown(), n.complete()
            }, r => {
                this._teardown(), n.error(r)
            }, () => this._teardown()))), t.closed && (this._connection = null, t = $.EMPTY)
        }
        return t
    }
    refCount() {
        return Ki()(this)
    }
};
var zu = Ut(e => function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
});
var W = (() => {
        class e extends N {
            constructor() {
                super(), this.closed = !1, this.currentObservers = null, this.observers = [], this.isStopped = !1, this.hasError = !1, this.thrownError = null
            }
            lift(n) {
                let r = new Ar(this, this);
                return r.operator = n, r
            }
            _throwIfClosed() {
                if (this.closed) throw new zu
            }
            next(n) {
                Ht(() => {
                    if (this._throwIfClosed(), !this.isStopped) {
                        this.currentObservers || (this.currentObservers = Array.from(this.observers));
                        for (let r of this.currentObservers) r.next(n)
                    }
                })
            }
            error(n) {
                Ht(() => {
                    if (this._throwIfClosed(), !this.isStopped) {
                        this.hasError = this.isStopped = !0, this.thrownError = n;
                        let {
                            observers: r
                        } = this;
                        for (; r.length;) r.shift().error(n)
                    }
                })
            }
            complete() {
                Ht(() => {
                    if (this._throwIfClosed(), !this.isStopped) {
                        this.isStopped = !0;
                        let {
                            observers: n
                        } = this;
                        for (; n.length;) n.shift().complete()
                    }
                })
            }
            unsubscribe() {
                this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
            }
            get observed() {
                var n;
                return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0
            }
            _trySubscribe(n) {
                return this._throwIfClosed(), super._trySubscribe(n)
            }
            _subscribe(n) {
                return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n)
            }
            _innerSubscribe(n) {
                let {
                    hasError: r,
                    isStopped: o,
                    observers: i
                } = this;
                return r || o ? $i : (this.currentObservers = null, i.push(n), new $(() => {
                    this.currentObservers = null, ft(i, n)
                }))
            }
            _checkFinalizedStatuses(n) {
                let {
                    hasError: r,
                    thrownError: o,
                    isStopped: i
                } = this;
                r ? n.error(o) : i && n.complete()
            }
            asObservable() {
                let n = new N;
                return n.source = this, n
            }
        }
        return e.create = (t, n) => new Ar(t, n), e
    })(),
    Ar = class extends W {
        constructor(t, n) {
            super(), this.destination = t, this.source = n
        }
        next(t) {
            var n, r;
            (r = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || r === void 0 || r.call(n, t)
        }
        error(t) {
            var n, r;
            (r = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || r === void 0 || r.call(n, t)
        }
        complete() {
            var t, n;
            (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t)
        }
        _subscribe(t) {
            var n, r;
            return (r = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && r !== void 0 ? r : $i
        }
    };
var Nn = class extends W {
    constructor(t) {
        super(), this._value = t
    }
    get value() {
        return this.getValue()
    }
    _subscribe(t) {
        let n = super._subscribe(t);
        return !n.closed && t.next(this._value), n
    }
    getValue() {
        let {
            hasError: t,
            thrownError: n,
            _value: r
        } = this;
        if (t) throw n;
        return this._throwIfClosed(), r
    }
    next(t) {
        super.next(this._value = t)
    }
};
var xn = {
    now() {
        return (xn.delegate || Date).now()
    },
    delegate: void 0
};
var An = class extends W {
    constructor(t = 1 / 0, n = 1 / 0, r = xn) {
        super(), this._bufferSize = t, this._windowTime = n, this._timestampProvider = r, this._buffer = [], this._infiniteTimeWindow = !0, this._infiniteTimeWindow = n === 1 / 0, this._bufferSize = Math.max(1, t), this._windowTime = Math.max(1, n)
    }
    next(t) {
        let {
            isStopped: n,
            _buffer: r,
            _infiniteTimeWindow: o,
            _timestampProvider: i,
            _windowTime: s
        } = this;
        n || (r.push(t), !o && r.push(i.now() + s)), this._trimBuffer(), super.next(t)
    }
    _subscribe(t) {
        this._throwIfClosed(), this._trimBuffer();
        let n = this._innerSubscribe(t),
            {
                _infiniteTimeWindow: r,
                _buffer: o
            } = this,
            i = o.slice();
        for (let s = 0; s < i.length && !t.closed; s += r ? 1 : 2) t.next(i[s]);
        return this._checkFinalizedStatuses(t), n
    }
    _trimBuffer() {
        let {
            _bufferSize: t,
            _timestampProvider: n,
            _buffer: r,
            _infiniteTimeWindow: o
        } = this, i = (o ? 1 : 2) * t;
        if (t < 1 / 0 && i < r.length && r.splice(0, r.length - i), !o) {
            let s = n.now(),
                a = 0;
            for (let c = 1; c < r.length && r[c] <= s; c += 2) a = c;
            a && r.splice(0, a + 1)
        }
    }
};
var Rr = class extends $ {
    constructor(t, n) {
        super()
    }
    schedule(t, n = 0) {
        return this
    }
};
var Rn = {
    setInterval(e, t, ...n) {
        let {
            delegate: r
        } = Rn;
        return r ? .setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n)
    },
    clearInterval(e) {
        let {
            delegate: t
        } = Rn;
        return (t ? .clearInterval || clearInterval)(e)
    },
    delegate: void 0
};
var Or = class extends Rr {
    constructor(t, n) {
        super(t, n), this.scheduler = t, this.work = n, this.pending = !1
    }
    schedule(t, n = 0) {
        var r;
        if (this.closed) return this;
        this.state = t;
        let o = this.id,
            i = this.scheduler;
        return o != null && (this.id = this.recycleAsyncId(i, o, n)), this.pending = !0, this.delay = n, this.id = (r = this.id) !== null && r !== void 0 ? r : this.requestAsyncId(i, this.id, n), this
    }
    requestAsyncId(t, n, r = 0) {
        return Rn.setInterval(t.flush.bind(t, this), r)
    }
    recycleAsyncId(t, n, r = 0) {
        if (r != null && this.delay === r && this.pending === !1) return n;
        n != null && Rn.clearInterval(n)
    }
    execute(t, n) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        let r = this._execute(t, n);
        if (r) return r;
        this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
    }
    _execute(t, n) {
        let r = !1,
            o;
        try {
            this.work(t)
        } catch (i) {
            r = !0, o = i || new Error("Scheduled action threw falsy error")
        }
        if (r) return this.unsubscribe(), o
    }
    unsubscribe() {
        if (!this.closed) {
            let {
                id: t,
                scheduler: n
            } = this, {
                actions: r
            } = n;
            this.work = this.state = this.scheduler = null, this.pending = !1, ft(r, this), t != null && (this.id = this.recycleAsyncId(n, t, null)), this.delay = null, super.unsubscribe()
        }
    }
};
var Wt = class e {
    constructor(t, n = e.now) {
        this.schedulerActionCtor = t, this.now = n
    }
    schedule(t, n = 0, r) {
        return new this.schedulerActionCtor(this, t).schedule(r, n)
    }
};
Wt.now = xn.now;
var kr = class extends Wt {
    constructor(t, n = Wt.now) {
        super(t, n), this.actions = [], this._active = !1
    }
    flush(t) {
        let {
            actions: n
        } = this;
        if (this._active) {
            n.push(t);
            return
        }
        let r;
        this._active = !0;
        do
            if (r = t.execute(t.state, t.delay)) break; while (t = n.shift());
        if (this._active = !1, r) {
            for (; t = n.shift();) t.unsubscribe();
            throw r
        }
    }
};
var $e = new kr(Or),
    Gu = $e;
var mt = new N(e => e.complete());

function Fr(e) {
    return e && w(e.schedule)
}

function Ji(e) {
    return e[e.length - 1]
}

function Pr(e) {
    return w(Ji(e)) ? e.pop() : void 0
}

function Re(e) {
    return Fr(Ji(e)) ? e.pop() : void 0
}

function qu(e, t) {
    return typeof Ji(e) == "number" ? e.pop() : t
}

function Lr(e, t = 0) {
    return D((n, r) => {
        n.subscribe(E(r, o => re(r, e, () => r.next(o), t), () => re(r, e, () => r.complete(), t), o => re(r, e, () => r.error(o), t)))
    })
}

function jr(e, t = 0) {
    return D((n, r) => {
        r.add(e.schedule(() => n.subscribe(r), t))
    })
}

function Wu(e, t) {
    return A(e).pipe(jr(t), Lr(t))
}

function Zu(e, t) {
    return A(e).pipe(jr(t), Lr(t))
}

function Yu(e, t) {
    return new N(n => {
        let r = 0;
        return t.schedule(function() {
            r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule())
        })
    })
}

function Qu(e, t) {
    return new N(n => {
        let r;
        return re(n, t, () => {
            r = e[_r](), re(n, t, () => {
                let o, i;
                try {
                    ({
                        value: o,
                        done: i
                    } = r.next())
                } catch (s) {
                    n.error(s);
                    return
                }
                i ? n.complete() : n.next(o)
            }, 0, !0)
        }), () => w(r ? .return) && r.return()
    })
}

function Vr(e, t) {
    if (!e) throw new Error("Iterable cannot be null");
    return new N(n => {
        re(n, t, () => {
            let r = e[Symbol.asyncIterator]();
            re(n, t, () => {
                r.next().then(o => {
                    o.done ? n.complete() : n.next(o.value)
                })
            }, 0, !0)
        })
    })
}

function Ku(e, t) {
    return Vr(Sr(e), t)
}

function Ju(e, t) {
    if (e != null) {
        if (br(e)) return Wu(e, t);
        if (zt(e)) return Yu(e, t);
        if (Ir(e)) return Zu(e, t);
        if (Cr(e)) return Vr(e, t);
        if (Mr(e)) return Qu(e, t);
        if (Nr(e)) return Ku(e, t)
    }
    throw Tr(e)
}

function ge(e, t) {
    return t ? Ju(e, t) : A(e)
}

function On(...e) {
    let t = Re(e);
    return ge(e, t)
}

function fm(e, t) {
    let n = w(e) ? e : () => e,
        r = o => o.error(n());
    return new N(t ? o => t.schedule(r, 0, o) : r)
}

function pm(e) {
    return !!e && (e instanceof N || w(e.lift) && w(e.subscribe))
}

function Xu(e) {
    return e instanceof Date && !isNaN(e)
}
var {
    isArray: hm
} = Array, {
    getPrototypeOf: gm,
    prototype: mm,
    keys: ym
} = Object;

function Br(e) {
    if (e.length === 1) {
        let t = e[0];
        if (hm(t)) return {
            args: t,
            keys: null
        };
        if (vm(t)) {
            let n = ym(t);
            return {
                args: n.map(r => t[r]),
                keys: n
            }
        }
    }
    return {
        args: e,
        keys: null
    }
}

function vm(e) {
    return e && typeof e == "object" && gm(e) === mm
}

function Ur(e, t) {
    return e.reduce((n, r, o) => (n[r] = t[o], n), {})
}

function Dm(...e) {
    let t = Re(e),
        n = Pr(e),
        {
            args: r,
            keys: o
        } = Br(e);
    if (r.length === 0) return ge([], t);
    let i = new N(Em(r, t, o ? s => Ur(o, s) : Y));
    return n ? i.pipe(qt(n)) : i
}

function Em(e, t, n = Y) {
    return r => {
        el(t, () => {
            let {
                length: o
            } = e, i = new Array(o), s = o, a = o;
            for (let c = 0; c < o; c++) el(t, () => {
                let u = ge(e[c], t),
                    l = !1;
                u.subscribe(E(r, d => {
                    i[c] = d, l || (l = !0, a--), a || r.next(n(i.slice()))
                }, () => {
                    --s || r.complete()
                }))
            }, r)
        }, r)
    }
}

function el(e, t, n) {
    e ? re(n, e, t) : t()
}

function $r(e = 1 / 0) {
    return he(Y, e)
}

function tl() {
    return $r(1)
}

function Zt(...e) {
    return tl()(ge(e, Re(e)))
}

function wm(e) {
    return new N(t => {
        A(e()).subscribe(t)
    })
}

function Im(...e) {
    let t = Pr(e),
        {
            args: n,
            keys: r
        } = Br(e),
        o = new N(i => {
            let {
                length: s
            } = n;
            if (!s) {
                i.complete();
                return
            }
            let a = new Array(s),
                c = s,
                u = s;
            for (let l = 0; l < s; l++) {
                let d = !1;
                A(n[l]).subscribe(E(i, p => {
                    d || (d = !0, u--), a[l] = p
                }, () => c--, void 0, () => {
                    (!c || !d) && (u || i.next(r ? Ur(r, a) : a), i.complete())
                }))
            }
        });
    return t ? o.pipe(qt(t)) : o
}

function He(e = 0, t, n = Gu) {
    let r = -1;
    return t != null && (Fr(t) ? n = t : r = t), new N(o => {
        let i = Xu(e) ? +e - n.now() : e;
        i < 0 && (i = 0);
        let s = 0;
        return n.schedule(function() {
            o.closed || (o.next(s++), 0 <= r ? this.schedule(void 0, r) : o.complete())
        }, i)
    })
}

function bm(e = 0, t = $e) {
    return e < 0 && (e = 0), He(e, e, t)
}

function Cm(...e) {
    let t = Re(e),
        n = qu(e, 1 / 0),
        r = e;
    return r.length ? r.length === 1 ? A(r[0]) : $r(n)(ge(r, t)) : mt
}
var Tm = new N(Ee);

function nl(e) {
    return D((t, n) => {
        let r = !1,
            o = null,
            i = null,
            s = !1,
            a = () => {
                if (i ? .unsubscribe(), i = null, r) {
                    r = !1;
                    let u = o;
                    o = null, n.next(u)
                }
                s && n.complete()
            },
            c = () => {
                i = null, s && n.complete()
            };
        t.subscribe(E(n, u => {
            r = !0, o = u, i || A(e(u)).subscribe(i = E(n, a, c))
        }, () => {
            s = !0, (!r || !i || i.closed) && n.complete()
        }))
    })
}

function _m(e, t = $e) {
    return nl(() => He(e, t))
}

function Xi(e) {
    return D((t, n) => {
        let r = null,
            o = !1,
            i;
        r = t.subscribe(E(n, void 0, void 0, s => {
            i = A(e(s, Xi(e)(t))), r ? (r.unsubscribe(), r = null, i.subscribe(n)) : o = !0
        })), o && (r.unsubscribe(), r = null, i.subscribe(n))
    })
}

function Hr(e, t, n, r, o) {
    return (i, s) => {
        let a = n,
            c = t,
            u = 0;
        i.subscribe(E(s, l => {
            let d = u++;
            c = a ? e(c, l, d) : (a = !0, l), r && s.next(c)
        }, o && (() => {
            a && s.next(c), s.complete()
        })))
    }
}

function Mm(e, t) {
    return D(Hr(e, t, arguments.length >= 2, !1, !0))
}

function es(e, t) {
    return w(t) ? he(e, t, 1) : he(e, 1)
}

function rl(e) {
    return new N(t => e.subscribe(t))
}
var Sm = {
    connector: () => new W
};

function zr(e, t = Sm) {
    let {
        connector: n
    } = t;
    return D((r, o) => {
        let i = n();
        A(e(rl(i))).subscribe(o), o.add(r.subscribe(i))
    })
}

function Nm(e) {
    return D((t, n) => {
        let r = !1,
            o = null,
            i = null,
            s = () => {
                if (i ? .unsubscribe(), i = null, r) {
                    r = !1;
                    let a = o;
                    o = null, n.next(a)
                }
            };
        t.subscribe(E(n, a => {
            i ? .unsubscribe(), r = !0, o = a, i = E(n, s, Ee), A(e(a)).subscribe(i)
        }, () => {
            s(), n.complete()
        }, void 0, () => {
            o = i = null
        }))
    })
}

function xm(e, t = $e) {
    return D((n, r) => {
        let o = null,
            i = null,
            s = null,
            a = () => {
                if (o) {
                    o.unsubscribe(), o = null;
                    let u = i;
                    i = null, r.next(u)
                }
            };

        function c() {
            let u = s + e,
                l = t.now();
            if (l < u) {
                o = this.schedule(void 0, u - l), r.add(o);
                return
            }
            a()
        }
        n.subscribe(E(r, u => {
            i = u, s = t.now(), o || (o = t.schedule(c, e), r.add(o))
        }, () => {
            a(), r.complete()
        }, void 0, () => {
            i = o = null
        }))
    })
}

function Yt(e) {
    return D((t, n) => {
        let r = !1;
        t.subscribe(E(n, o => {
            r = !0, n.next(o)
        }, () => {
            r || n.next(e), n.complete()
        }))
    })
}

function yt(e) {
    return e <= 0 ? () => mt : D((t, n) => {
        let r = 0;
        t.subscribe(E(n, o => {
            ++r <= e && (n.next(o), e <= r && n.complete())
        }))
    })
}

function ol() {
    return D((e, t) => {
        e.subscribe(E(t, Ee))
    })
}

function il(e) {
    return J(() => e)
}

function ts(e, t) {
    return t ? n => Zt(t.pipe(yt(1), ol()), n.pipe(ts(e))) : he((n, r) => A(e(n, r)).pipe(yt(1), il(n)))
}

function Am(e, t = $e) {
    let n = He(e, t);
    return ts(() => n)
}

function sl(e, t = Y) {
    return e = e ? ? Rm, D((n, r) => {
        let o, i = !0;
        n.subscribe(E(r, s => {
            let a = t(s);
            (i || !e(o, a)) && (i = !1, o = a, r.next(s))
        }))
    })
}

function Rm(e, t) {
    return e === t
}

function Gr(e = Om) {
    return D((t, n) => {
        let r = !1;
        t.subscribe(E(n, o => {
            r = !0, n.next(o)
        }, () => r ? n.complete() : n.error(e())))
    })
}

function Om() {
    return new Ue
}

function kn(e) {
    return D((t, n) => {
        try {
            t.subscribe(n)
        } finally {
            n.add(e)
        }
    })
}

function km(e, t) {
    let n = arguments.length >= 2;
    return r => r.pipe(e ? Ae((o, i) => e(o, i, r)) : Y, yt(1), n ? Yt(t) : Gr(() => new Ue))
}

function ns(e) {
    return e <= 0 ? () => mt : D((t, n) => {
        let r = [];
        t.subscribe(E(n, o => {
            r.push(o), e < r.length && r.shift()
        }, () => {
            for (let o of r) n.next(o);
            n.complete()
        }, void 0, () => {
            r = null
        }))
    })
}

function Fm(e, t) {
    let n = arguments.length >= 2;
    return r => r.pipe(e ? Ae((o, i) => e(o, i, r)) : Y, ns(1), n ? Yt(t) : Gr(() => new Ue))
}

function al(e, t) {
    let n = w(e) ? e : () => e;
    return w(t) ? zr(t, {
        connector: n
    }) : r => new Sn(r, n)
}

function Pm() {
    return D((e, t) => {
        let n, r = !1;
        e.subscribe(E(t, o => {
            let i = n;
            n = o, r && t.next([i, o]), r = !0
        }))
    })
}

function Lm(e) {
    return e ? t => zr(e)(t) : t => al(new W)(t)
}

function jm(e = 1 / 0) {
    let t;
    e && typeof e == "object" ? t = e : t = {
        count: e
    };
    let {
        count: n = 1 / 0,
        delay: r,
        resetOnSuccess: o = !1
    } = t;
    return n <= 0 ? Y : D((i, s) => {
        let a = 0,
            c, u = () => {
                let l = !1;
                c = i.subscribe(E(s, d => {
                    o && (a = 0), s.next(d)
                }, void 0, d => {
                    if (a++ < n) {
                        let p = () => {
                            c ? (c.unsubscribe(), c = null, u()) : l = !0
                        };
                        if (r != null) {
                            let f = typeof r == "number" ? He(r) : A(r(d, a)),
                                h = E(s, () => {
                                    h.unsubscribe(), p()
                                }, () => {
                                    s.complete()
                                });
                            f.subscribe(h)
                        } else p()
                    } else s.error(d)
                })), l && (c.unsubscribe(), c = null, u())
            };
        u()
    })
}

function Vm(e, t) {
    return D(Hr(e, t, arguments.length >= 2, !0))
}

function cl(e = {}) {
    let {
        connector: t = () => new W,
        resetOnError: n = !0,
        resetOnComplete: r = !0,
        resetOnRefCountZero: o = !0
    } = e;
    return i => {
        let s, a, c, u = 0,
            l = !1,
            d = !1,
            p = () => {
                a ? .unsubscribe(), a = void 0
            },
            f = () => {
                p(), s = c = void 0, l = d = !1
            },
            h = () => {
                let g = s;
                f(), g ? .unsubscribe()
            };
        return D((g, y) => {
            u++, !d && !l && p();
            let v = c = c ? ? t();
            y.add(() => {
                u--, u === 0 && !d && !l && (a = rs(h, o))
            }), v.subscribe(y), !s && u > 0 && (s = new we({
                next: O => v.next(O),
                error: O => {
                    d = !0, p(), a = rs(f, n, O), v.error(O)
                },
                complete: () => {
                    l = !0, p(), a = rs(f, r), v.complete()
                }
            }), A(g).subscribe(s))
        })(i)
    }
}

function rs(e, t, ...n) {
    if (t === !0) {
        e();
        return
    }
    if (t === !1) return;
    let r = new we({
        next: () => {
            r.unsubscribe(), e()
        }
    });
    return A(t(...n)).subscribe(r)
}

function ul(e, t, n) {
    let r, o = !1;
    return e && typeof e == "object" ? {
        bufferSize: r = 1 / 0,
        windowTime: t = 1 / 0,
        refCount: o = !1,
        scheduler: n
    } = e : r = e ? ? 1 / 0, cl({
        connector: () => new An(r, t, n),
        resetOnError: !0,
        resetOnComplete: !1,
        resetOnRefCountZero: o
    })
}

function Bm(e) {
    return Ae((t, n) => e <= n)
}

function Um(e) {
    return D((t, n) => {
        let r = !1,
            o = 0;
        t.subscribe(E(n, i => (r || (r = !e(i, o++))) && n.next(i)))
    })
}

function $m(...e) {
    let t = Re(e);
    return D((n, r) => {
        (t ? Zt(e, n, t) : Zt(e, n)).subscribe(r)
    })
}

function qr(e, t) {
    return D((n, r) => {
        let o = null,
            i = 0,
            s = !1,
            a = () => s && !o && r.complete();
        n.subscribe(E(r, c => {
            o ? .unsubscribe();
            let u = 0,
                l = i++;
            A(e(c, l)).subscribe(o = E(r, d => r.next(t ? t(c, d, l, u++) : d), () => {
                o = null, a()
            }))
        }, () => {
            s = !0, a()
        }))
    })
}

function as(e, t) {
    return Object.is(e, t)
}
var H = null,
    Wr = !1,
    cs = 1,
    oe = Symbol("SIGNAL");

function x(e) {
    let t = H;
    return H = e, t
}

function us() {
    return H
}
var Qt = {
    version: 0,
    lastCleanEpoch: 0,
    dirty: !1,
    producerNode: void 0,
    producerLastReadVersion: void 0,
    producerIndexOfThis: void 0,
    nextProducerIndex: 0,
    liveConsumerNode: void 0,
    liveConsumerIndexOfThis: void 0,
    consumerAllowSignalWrites: !1,
    consumerIsAlwaysLive: !1,
    kind: "unknown",
    producerMustRecompute: () => !1,
    producerRecomputeValue: () => {},
    consumerMarkedDirty: () => {},
    consumerOnSignalRead: () => {}
};

function Pn(e) {
    if (Wr) throw new Error("");
    if (H === null) return;
    H.consumerOnSignalRead(e);
    let t = H.nextProducerIndex++;
    if (Jr(H), t < H.producerNode.length && H.producerNode[t] !== e && Fn(H)) {
        let n = H.producerNode[t];
        Kr(n, H.producerIndexOfThis[t])
    }
    H.producerNode[t] !== e && (H.producerNode[t] = e, H.producerIndexOfThis[t] = Fn(H) ? dl(e, H, t) : 0), H.producerLastReadVersion[t] = e.version
}

function ll() {
    cs++
}

function ls(e) {
    if (!(Fn(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === cs)) {
        if (!e.producerMustRecompute(e) && !Qr(e)) {
            ss(e);
            return
        }
        e.producerRecomputeValue(e), ss(e)
    }
}

function ds(e) {
    if (e.liveConsumerNode === void 0) return;
    let t = Wr;
    Wr = !0;
    try {
        for (let n of e.liveConsumerNode) n.dirty || Hm(n)
    } finally {
        Wr = t
    }
}

function fs() {
    return H ? .consumerAllowSignalWrites !== !1
}

function Hm(e) {
    e.dirty = !0, ds(e), e.consumerMarkedDirty ? .(e)
}

function ss(e) {
    e.dirty = !1, e.lastCleanEpoch = cs
}

function Ln(e) {
    return e && (e.nextProducerIndex = 0), x(e)
}

function Yr(e, t) {
    if (x(t), !(!e || e.producerNode === void 0 || e.producerIndexOfThis === void 0 || e.producerLastReadVersion === void 0)) {
        if (Fn(e))
            for (let n = e.nextProducerIndex; n < e.producerNode.length; n++) Kr(e.producerNode[n], e.producerIndexOfThis[n]);
        for (; e.producerNode.length > e.nextProducerIndex;) e.producerNode.pop(), e.producerLastReadVersion.pop(), e.producerIndexOfThis.pop()
    }
}

function Qr(e) {
    Jr(e);
    for (let t = 0; t < e.producerNode.length; t++) {
        let n = e.producerNode[t],
            r = e.producerLastReadVersion[t];
        if (r !== n.version || (ls(n), r !== n.version)) return !0
    }
    return !1
}

function jn(e) {
    if (Jr(e), Fn(e))
        for (let t = 0; t < e.producerNode.length; t++) Kr(e.producerNode[t], e.producerIndexOfThis[t]);
    e.producerNode.length = e.producerLastReadVersion.length = e.producerIndexOfThis.length = 0, e.liveConsumerNode && (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0)
}

function dl(e, t, n) {
    if (fl(e), e.liveConsumerNode.length === 0 && pl(e))
        for (let r = 0; r < e.producerNode.length; r++) e.producerIndexOfThis[r] = dl(e.producerNode[r], e, r);
    return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1
}

function Kr(e, t) {
    if (fl(e), e.liveConsumerNode.length === 1 && pl(e))
        for (let r = 0; r < e.producerNode.length; r++) Kr(e.producerNode[r], e.producerIndexOfThis[r]);
    let n = e.liveConsumerNode.length - 1;
    if (e.liveConsumerNode[t] = e.liveConsumerNode[n], e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n], e.liveConsumerNode.length--, e.liveConsumerIndexOfThis.length--, t < e.liveConsumerNode.length) {
        let r = e.liveConsumerIndexOfThis[t],
            o = e.liveConsumerNode[t];
        Jr(o), o.producerIndexOfThis[r] = t
    }
}

function Fn(e) {
    return e.consumerIsAlwaysLive || (e ? .liveConsumerNode ? .length ? ? 0) > 0
}

function Jr(e) {
    e.producerNode ? ? = [], e.producerIndexOfThis ? ? = [], e.producerLastReadVersion ? ? = []
}

function fl(e) {
    e.liveConsumerNode ? ? = [], e.liveConsumerIndexOfThis ? ? = []
}

function pl(e) {
    return e.producerNode !== void 0
}

function Xr(e, t) {
    let n = Object.create(zm);
    n.computation = e, t !== void 0 && (n.equal = t);
    let r = () => {
        if (ls(n), Pn(n), n.value === Zr) throw n.error;
        return n.value
    };
    return r[oe] = n, r
}
var os = Symbol("UNSET"),
    is = Symbol("COMPUTING"),
    Zr = Symbol("ERRORED"),
    zm = ne(Z({}, Qt), {
        value: os,
        dirty: !0,
        error: null,
        equal: as,
        kind: "computed",
        producerMustRecompute(e) {
            return e.value === os || e.value === is
        },
        producerRecomputeValue(e) {
            if (e.value === is) throw new Error("Detected cycle in computations.");
            let t = e.value;
            e.value = is;
            let n = Ln(e),
                r, o = !1;
            try {
                r = e.computation(), x(null), o = t !== os && t !== Zr && r !== Zr && e.equal(t, r)
            } catch (i) {
                r = Zr, e.error = i
            } finally {
                Yr(e, n)
            }
            if (o) {
                e.value = t;
                return
            }
            e.value = r, e.version++
        }
    });

function Gm() {
    throw new Error
}
var hl = Gm;

function gl(e) {
    hl(e)
}

function ps(e) {
    hl = e
}
var qm = null;

function hs(e, t) {
    let n = Object.create(eo);
    n.value = e, t !== void 0 && (n.equal = t);
    let r = () => (Pn(n), n.value);
    return r[oe] = n, r
}

function Vn(e, t) {
    fs() || gl(e), e.equal(e.value, t) || (e.value = t, Wm(e))
}

function gs(e, t) {
    fs() || gl(e), Vn(e, t(e.value))
}
var eo = ne(Z({}, Qt), {
    equal: as,
    value: void 0,
    kind: "signal"
});

function Wm(e) {
    e.version++, ll(), ds(e), qm ? .()
}

function ms(e) {
    let t = x(null);
    try {
        return e()
    } finally {
        x(t)
    }
}
var ys;

function Bn() {
    return ys
}

function ze(e) {
    let t = ys;
    return ys = e, t
}
var to = Symbol("NotFound");
var Is = {
        JSACTION: "jsaction"
    },
    bs = {
        JSACTION: "__jsaction",
        OWNER: "__owner"
    },
    Dl = {};

function Km(e) {
    return e[bs.JSACTION]
}

function ml(e, t) {
    e[bs.JSACTION] = t
}

function Jm(e) {
    return Dl[e]
}

function Xm(e, t) {
    Dl[e] = t
}
var I = {
        CLICK: "click",
        CLICKMOD: "clickmod",
        DBLCLICK: "dblclick",
        FOCUS: "focus",
        FOCUSIN: "focusin",
        BLUR: "blur",
        FOCUSOUT: "focusout",
        SUBMIT: "submit",
        KEYDOWN: "keydown",
        KEYPRESS: "keypress",
        KEYUP: "keyup",
        MOUSEOVER: "mouseover",
        MOUSEOUT: "mouseout",
        MOUSEENTER: "mouseenter",
        MOUSELEAVE: "mouseleave",
        POINTEROVER: "pointerover",
        POINTEROUT: "pointerout",
        POINTERENTER: "pointerenter",
        POINTERLEAVE: "pointerleave",
        ERROR: "error",
        LOAD: "load",
        TOUCHSTART: "touchstart",
        TOUCHEND: "touchend",
        TOUCHMOVE: "touchmove",
        TOGGLE: "toggle"
    },
    ey = [I.MOUSEENTER, I.MOUSELEAVE, "pointerenter", "pointerleave"],
    ak = [I.CLICK, I.DBLCLICK, I.FOCUSIN, I.FOCUSOUT, I.KEYDOWN, I.KEYUP, I.KEYPRESS, I.MOUSEOVER, I.MOUSEOUT, I.SUBMIT, I.TOUCHSTART, I.TOUCHEND, I.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"],
    ty = [I.FOCUS, I.BLUR, I.ERROR, I.LOAD, I.TOGGLE],
    Cs = e => ty.indexOf(e) >= 0;

function ny(e) {
    return e === I.MOUSEENTER ? I.MOUSEOVER : e === I.MOUSELEAVE ? I.MOUSEOUT : e === I.POINTERENTER ? I.POINTEROVER : e === I.POINTERLEAVE ? I.POINTEROUT : e
}

function ry(e, t, n, r) {
    let o = !1;
    Cs(t) && (o = !0);
    let i = typeof r == "boolean" ? {
        capture: o,
        passive: r
    } : o;
    return e.addEventListener(t, n, i), {
        eventType: t,
        handler: n,
        capture: o,
        passive: r
    }
}

function oy(e, t) {
    if (e.removeEventListener) {
        let n = typeof t.passive == "boolean" ? {
            capture: t.capture
        } : t.capture;
        e.removeEventListener(t.eventType, t.handler, n)
    } else e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler)
}

function iy(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1
}
var yl = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);

function sy(e) {
    return e.which === 2 || e.which == null && e.button === 4
}

function ay(e) {
    return yl && e.metaKey || !yl && e.ctrlKey || sy(e) || e.shiftKey
}

function cy(e, t, n) {
    let r = e.relatedTarget;
    return (e.type === I.MOUSEOVER && t === I.MOUSEENTER || e.type === I.MOUSEOUT && t === I.MOUSELEAVE || e.type === I.POINTEROVER && t === I.POINTERENTER || e.type === I.POINTEROUT && t === I.POINTERLEAVE) && (!r || r !== n && !n.contains(r))
}

function uy(e, t) {
    let n = {};
    for (let r in e) {
        if (r === "srcElement" || r === "target") continue;
        let o = r,
            i = e[o];
        typeof i != "function" && (n[o] = i)
    }
    return e.type === I.MOUSEOVER ? n.type = I.MOUSEENTER : e.type === I.MOUSEOUT ? n.type = I.MOUSELEAVE : e.type === I.POINTEROVER ? n.type = I.POINTERENTER : n.type = I.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n._originalEvent = e, n
}
var ly = typeof navigator < "u" && /iPhone|iPad|iPod/.test(navigator.userAgent),
    io = class {
        element;
        handlerInfos = [];
        constructor(t) {
            this.element = t
        }
        addEventListener(t, n, r) {
            ly && (this.element.style.cursor = "pointer"), this.handlerInfos.push(ry(this.element, t, n(this.element), r))
        }
        cleanUp() {
            for (let t = 0; t < this.handlerInfos.length; t++) oy(this.element, this.handlerInfos[t]);
            this.handlerInfos = []
        }
    },
    dy = {
        EVENT_ACTION_SEPARATOR: ":"
    };

function nt(e) {
    return e.eventType
}

function Ts(e, t) {
    e.eventType = t
}

function ro(e) {
    return e.event
}

function El(e, t) {
    e.event = t
}

function wl(e) {
    return e.targetElement
}

function Il(e, t) {
    e.targetElement = t
}

function bl(e) {
    return e.eic
}

function fy(e, t) {
    e.eic = t
}

function py(e) {
    return e.timeStamp
}

function hy(e, t) {
    e.timeStamp = t
}

function oo(e) {
    return e.eia
}

function Cl(e, t, n) {
    e.eia = [t, n]
}

function vs(e) {
    e.eia = void 0
}

function no(e) {
    return e[1]
}

function gy(e) {
    return e.eirp
}

function Tl(e, t) {
    e.eirp = t
}

function _l(e) {
    return e.eir
}

function Ml(e, t) {
    e.eir = t
}

function Sl(e) {
    return {
        eventType: e.eventType,
        event: e.event,
        targetElement: e.targetElement,
        eic: e.eic,
        eia: e.eia,
        timeStamp: e.timeStamp,
        eirp: e.eirp,
        eiack: e.eiack,
        eir: e.eir
    }
}

function my(e, t, n, r, o, i, s, a) {
    return {
        eventType: e,
        event: t,
        targetElement: n,
        eic: r,
        timeStamp: o,
        eia: i,
        eirp: s,
        eiack: a
    }
}
var Ds = class e {
        eventInfo;
        constructor(t) {
            this.eventInfo = t
        }
        getEventType() {
            return nt(this.eventInfo)
        }
        setEventType(t) {
            Ts(this.eventInfo, t)
        }
        getEvent() {
            return ro(this.eventInfo)
        }
        setEvent(t) {
            El(this.eventInfo, t)
        }
        getTargetElement() {
            return wl(this.eventInfo)
        }
        setTargetElement(t) {
            Il(this.eventInfo, t)
        }
        getContainer() {
            return bl(this.eventInfo)
        }
        setContainer(t) {
            fy(this.eventInfo, t)
        }
        getTimestamp() {
            return py(this.eventInfo)
        }
        setTimestamp(t) {
            hy(this.eventInfo, t)
        }
        getAction() {
            let t = oo(this.eventInfo);
            if (t) return {
                name: t[0],
                element: t[1]
            }
        }
        setAction(t) {
            if (!t) {
                vs(this.eventInfo);
                return
            }
            Cl(this.eventInfo, t.name, t.element)
        }
        getIsReplay() {
            return gy(this.eventInfo)
        }
        setIsReplay(t) {
            Tl(this.eventInfo, t)
        }
        getResolved() {
            return _l(this.eventInfo)
        }
        setResolved(t) {
            Ml(this.eventInfo, t)
        }
        clone() {
            return new e(Sl(this.eventInfo))
        }
    },
    yy = {},
    vy = /\s*;\s*/,
    Dy = I.CLICK,
    Es = class {
        a11yClickSupport = !1;
        clickModSupport = !0;
        syntheticMouseEventSupport;
        updateEventInfoForA11yClick = void 0;
        preventDefaultForA11yClick = void 0;
        populateClickOnlyAction = void 0;
        constructor({
            syntheticMouseEventSupport: t = !1,
            clickModSupport: n = !0
        } = {}) {
            this.syntheticMouseEventSupport = t, this.clickModSupport = n
        }
        resolveEventType(t) {
            this.clickModSupport && nt(t) === I.CLICK && ay(ro(t)) ? Ts(t, I.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t)
        }
        resolveAction(t) {
            _l(t) || (this.populateAction(t, wl(t)), Ml(t, !0))
        }
        resolveParentAction(t) {
            let n = oo(t),
                r = n && no(n);
            vs(t);
            let o = r && this.getParentNode(r);
            o && this.populateAction(t, o)
        }
        populateAction(t, n) {
            let r = n;
            for (; r && r !== bl(t) && (r.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(r, t), !oo(t));) r = this.getParentNode(r);
            let o = oo(t);
            if (o && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (nt(t) === I.MOUSEENTER || nt(t) === I.MOUSELEAVE || nt(t) === I.POINTERENTER || nt(t) === I.POINTERLEAVE)))
                if (cy(ro(t), nt(t), no(o))) {
                    let i = uy(ro(t), no(o));
                    El(t, i), Il(t, no(o))
                } else vs(t)
        }
        getParentNode(t) {
            let n = t[bs.OWNER];
            if (n) return n;
            let r = t.parentNode;
            return r ? .nodeName === "#document-fragment" ? r ? .host ? ? null : r
        }
        populateActionOnElement(t, n) {
            let r = this.parseActions(t),
                o = r[nt(n)];
            o !== void 0 && Cl(n, o, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, r)
        }
        parseActions(t) {
            let n = Km(t);
            if (!n) {
                let r = t.getAttribute(Is.JSACTION);
                if (!r) n = yy, ml(t, n);
                else {
                    if (n = Jm(r), !n) {
                        n = {};
                        let o = r.split(vy);
                        for (let i = 0; i < o.length; i++) {
                            let s = o[i];
                            if (!s) continue;
                            let a = s.indexOf(dy.EVENT_ACTION_SEPARATOR),
                                c = a !== -1,
                                u = c ? s.substr(0, a).trim() : Dy,
                                l = c ? s.substr(a + 1).trim() : s;
                            n[u] = l
                        }
                        Xm(r, n)
                    }
                    ml(t, n)
                }
            }
            return n
        }
        addA11yClickSupport(t, n, r) {
            this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = r
        }
    },
    Nl = function(e) {
        return e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", e
    }(Nl || {}),
    ws = class {
        dispatchDelegate;
        actionResolver;
        eventReplayer;
        eventReplayScheduled = !1;
        replayEventInfoWrappers = [];
        constructor(t, {
            actionResolver: n,
            eventReplayer: r
        } = {}) {
            this.dispatchDelegate = t, this.actionResolver = n, this.eventReplayer = r
        }
        dispatch(t) {
            let n = new Ds(t);
            this.actionResolver ? .resolveEventType(t), this.actionResolver ? .resolveAction(t);
            let r = n.getAction();
            if (r && Ey(r.element, n) && iy(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
                this.scheduleEventInfoWrapperReplay(n);
                return
            }
            this.dispatchDelegate(n)
        }
        scheduleEventInfoWrapperReplay(t) {
            this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => {
                this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers)
            }))
        }
    };

function Ey(e, t) {
    return e.tagName === "A" && (t.getEventType() === I.CLICK || t.getEventType() === I.CLICKMOD)
}
var xl = Symbol.for("propagationStopped"),
    _s = {
        REPLAY: 101
    };
var wy = "`preventDefault` called during event replay.";
var Iy = "`composedPath` called during event replay.",
    so = class {
        dispatchDelegate;
        clickModSupport;
        actionResolver;
        dispatcher;
        constructor(t, n = !0) {
            this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new Es({
                clickModSupport: n
            }), this.dispatcher = new ws(r => {
                this.dispatchToDelegate(r)
            }, {
                actionResolver: this.actionResolver
            })
        }
        dispatch(t) {
            this.dispatcher.dispatch(t)
        }
        dispatchToDelegate(t) {
            for (t.getIsReplay() && Ty(t), by(t); t.getAction();) {
                if (_y(t), Cs(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), Cy(t))) return;
                this.actionResolver.resolveParentAction(t.eventInfo)
            }
        }
    };

function by(e) {
    let t = e.getEvent(),
        n = e.getEvent().stopPropagation.bind(t),
        r = () => {
            t[xl] = !0, n()
        };
    vt(t, "stopPropagation", r), vt(t, "stopImmediatePropagation", r)
}

function Cy(e) {
    return !!e.getEvent()[xl]
}

function Ty(e) {
    let t = e.getEvent(),
        n = e.getTargetElement(),
        r = t.preventDefault.bind(t);
    vt(t, "target", n), vt(t, "eventPhase", _s.REPLAY), vt(t, "preventDefault", () => {
        throw r(), new Error(wy + "")
    }), vt(t, "composedPath", () => {
        throw new Error(Iy + "")
    })
}

function _y(e) {
    let t = e.getEvent(),
        n = e.getAction() ? .element;
    n && vt(t, "currentTarget", n, {
        configurable: !0
    })
}

function vt(e, t, n, {
    configurable: r = !1
} = {}) {
    Object.defineProperty(e, t, {
        value: n,
        configurable: r
    })
}

function Al(e, t) {
    e.ecrd(n => {
        t.dispatch(n)
    }, Nl.I_AM_THE_JSACTION_FRAMEWORK)
}

function My(e) {
    return e ? .q ? ? []
}

function Sy(e) {
    e && (vl(e.c, e.et, e.h), vl(e.c, e.etc, e.h, !0))
}

function vl(e, t, n, r) {
    for (let o = 0; o < t.length; o++) e.removeEventListener(t[o], n, r)
}
var Ny = !1,
    Rl = (() => {
        class e {
            static MOUSE_SPECIAL_SUPPORT = Ny;
            containerManager;
            eventHandlers = {};
            browserEventTypeToExtraEventTypes = {};
            dispatcher = null;
            queuedEventInfos = [];
            constructor(n) {
                this.containerManager = n
            }
            handleEvent(n, r, o) {
                let i = my(n, r, r.target, o, Date.now());
                this.handleEventInfo(i)
            }
            handleEventInfo(n) {
                if (!this.dispatcher) {
                    Tl(n, !0), this.queuedEventInfos ? .push(n);
                    return
                }
                this.dispatcher(n)
            }
            addEvent(n, r, o) {
                if (n in this.eventHandlers || !this.containerManager || !e.MOUSE_SPECIAL_SUPPORT && ey.indexOf(n) >= 0) return;
                let i = (a, c, u) => {
                    this.handleEvent(a, c, u)
                };
                this.eventHandlers[n] = i;
                let s = ny(r || n);
                if (s !== n) {
                    let a = this.browserEventTypeToExtraEventTypes[s] || [];
                    a.push(n), this.browserEventTypeToExtraEventTypes[s] = a
                }
                this.containerManager.addEventListener(s, a => c => {
                    i(n, c, a)
                }, o)
            }
            replayEarlyEvents(n = window._ejsa) {
                n && (this.replayEarlyEventInfos(n.q), Sy(n), delete window._ejsa)
            }
            replayEarlyEventInfos(n) {
                for (let r = 0; r < n.length; r++) {
                    let o = n[r],
                        i = this.getEventTypesForBrowserEventType(o.eventType);
                    for (let s = 0; s < i.length; s++) {
                        let a = Sl(o);
                        Ts(a, i[s]), this.handleEventInfo(a)
                    }
                }
            }
            getEventTypesForBrowserEventType(n) {
                let r = [];
                return this.eventHandlers[n] && r.push(n), this.browserEventTypeToExtraEventTypes[n] && r.push(...this.browserEventTypeToExtraEventTypes[n]), r
            }
            handler(n) {
                return this.eventHandlers[n]
            }
            cleanUp() {
                this.containerManager ? .cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = []
            }
            registerDispatcher(n, r) {
                this.ecrd(n, r)
            }
            ecrd(n, r) {
                if (this.dispatcher = n, this.queuedEventInfos ? .length) {
                    for (let o = 0; o < this.queuedEventInfos.length; o++) this.handleEventInfo(this.queuedEventInfos[o]);
                    this.queuedEventInfos = null
                }
            }
        }
        return e
    })();

function Ol(e, t = window) {
    return My(t._ejsas ? .[e])
}

function Ms(e, t = window) {
    t._ejsas && (t._ejsas[e] = void 0)
}
var Vd = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",
    b = class extends Error {
        code;
        constructor(t, n) {
            super(ti(t, n)), this.code = t
        }
    };

function ti(e, t) {
    return `${`NG0${Math.abs(e)}`}${t?": "+t:""}`
}
var Bd = Symbol("InputSignalNode#UNSET"),
    xy = ne(Z({}, eo), {
        transformFn: void 0,
        applyValueToInputSignal(e, t) {
            Vn(e, t)
        }
    });

function Ud(e, t) {
    let n = Object.create(xy);
    n.value = e, n.transformFn = t ? .transform;

    function r() {
        if (Pn(n), n.value === Bd) {
            let o = null;
            throw new b(-950, o)
        }
        return n.value
    }
    return r[oe] = n, r
}

function er(e) {
    return {
        toString: e
    }.toString()
}
var ao = "__parameters__";

function Ay(e) {
    return function(...n) {
        if (e) {
            let r = e(...n);
            for (let o in r) this[o] = r[o]
        }
    }
}

function $d(e, t, n) {
    return er(() => {
        let r = Ay(t);

        function o(...i) {
            if (this instanceof o) return r.apply(this, i), this;
            let s = new o(...i);
            return a.annotation = s, a;

            function a(c, u, l) {
                let d = c.hasOwnProperty(ao) ? c[ao] : Object.defineProperty(c, ao, {
                    value: []
                })[ao];
                for (; d.length <= l;) d.push(null);
                return (d[l] = d[l] || []).push(s), c
            }
        }
        return o.prototype.ngMetadataName = e, o.annotationCls = o, o
    })
}
var rt = globalThis;

function L(e) {
    for (let t in e)
        if (e[t] === L) return t;
    throw Error("Could not find renamed property on target object.")
}

function Ry(e, t) {
    for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n])
}

function se(e) {
    if (typeof e == "string") return e;
    if (Array.isArray(e)) return `[${e.map(se).join(", ")}]`;
    if (e == null) return "" + e;
    let t = e.overriddenName || e.name;
    if (t) return `${t}`;
    let n = e.toString();
    if (n == null) return "" + n;
    let r = n.indexOf(`
`);
    return r >= 0 ? n.slice(0, r) : n
}

function Ws(e, t) {
    return e ? t ? `${e} ${t}` : e : t || ""
}
var Oy = L({
    __forward_ref__: L
});

function Hd(e) {
    return e.__forward_ref__ = Hd, e.toString = function() {
        return se(this())
    }, e
}

function X(e) {
    return zd(e) ? e() : e
}

function zd(e) {
    return typeof e == "function" && e.hasOwnProperty(Oy) && e.__forward_ref__ === Hd
}

function k(e) {
    return {
        token: e.token,
        providedIn: e.providedIn || null,
        factory: e.factory,
        value: void 0
    }
}

function sc(e) {
    return {
        providers: e.providers || [],
        imports: e.imports || []
    }
}

function ni(e) {
    return kl(e, Gd) || kl(e, qd)
}

function Dk(e) {
    return ni(e) !== null
}

function kl(e, t) {
    return e.hasOwnProperty(t) ? e[t] : null
}

function ky(e) {
    let t = e && (e[Gd] || e[qd]);
    return t || null
}

function Fl(e) {
    return e && (e.hasOwnProperty(Pl) || e.hasOwnProperty(Fy)) ? e[Pl] : null
}
var Gd = L({\
        u0275prov: L
    }),
    Pl = L({\
        u0275inj: L
    }),
    qd = L({
        ngInjectableDef: L
    }),
    Fy = L({
        ngInjectorDef: L
    }),
    T = class {
        _desc;
        ngMetadataName = "InjectionToken";\
        u0275prov;
        constructor(t, n) {
            this._desc = t, this.\u0275prov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = k({
                token: this,
                providedIn: n.providedIn || "root",
                factory: n.factory
            }))
        }
        get multi() {
            return this
        }
        toString() {
            return `InjectionToken ${this._desc}`
        }
    };

function Wd(e) {
    return e && !!e.\u0275providers
}
var Py = L({\
        u0275cmp: L
    }),
    Ly = L({\
        u0275dir: L
    }),
    jy = L({\
        u0275pipe: L
    }),
    Vy = L({\
        u0275mod: L
    }),
    bo = L({\
        u0275fac: L
    }),
    zn = L({
        __NG_ELEMENT_ID__: L
    }),
    Ll = L({
        __NG_ENV_ID__: L
    });

function It(e) {
    return typeof e == "string" ? e : e == null ? "" : String(e)
}

function By(e) {
    return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : It(e)
}

function Zd(e, t) {
    throw new b(-200, e)
}

function ac(e, t) {
    throw new b(-201, !1)
}
var R = function(e) {
        return e[e.Default = 0] = "Default", e[e.Host = 1] = "Host", e[e.Self = 2] = "Self", e[e.SkipSelf = 4] = "SkipSelf", e[e.Optional = 8] = "Optional", e
    }(R || {}),
    Zs;

function Yd() {
    return Zs
}

function ie(e) {
    let t = Zs;
    return Zs = e, t
}

function Qd(e, t, n) {
    let r = ni(e);
    if (r && r.providedIn == "root") return r.value === void 0 ? r.value = r.factory() : r.value;
    if (n & R.Optional) return null;
    if (t !== void 0) return t;
    ac(e, "Injector")
}
var Uy = {},
    Et = Uy,
    Ys = "__NG_DI_FLAG__",
    Co = class {
        injector;
        constructor(t) {
            this.injector = t
        }
        retrieve(t, n) {
            let r = n;
            return this.injector.get(t, r.optional ? to : Et, r)
        }
    },
    To = "ngTempTokenPath",
    $y = "ngTokenPath",
    Hy = /\n/gm,
    zy = "\u0275",
    jl = "__source";

function Gy(e, t = R.Default) {
    if (Bn() === void 0) throw new b(-203, !1);
    if (Bn() === null) return Qd(e, void 0, t); {
        let n = Bn(),
            r;
        return n instanceof Co ? r = n.injector : r = n, r.get(e, t & R.Optional ? null : void 0, t)
    }
}

function U(e, t = R.Default) {
    return (Yd() || Gy)(X(e), t)
}

function m(e, t = R.Default) {
    return U(e, ri(t))
}

function ri(e) {
    return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4)
}

function Qs(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = X(e[n]);
        if (Array.isArray(r)) {
            if (r.length === 0) throw new b(900, !1);
            let o, i = R.Default;
            for (let s = 0; s < r.length; s++) {
                let a = r[s],
                    c = qy(a);
                typeof c == "number" ? c === -1 ? o = a.token : i |= c : o = a
            }
            t.push(U(o, i))
        } else t.push(U(r))
    }
    return t
}

function Kd(e, t) {
    return e[Ys] = t, e.prototype[Ys] = t, e
}

function qy(e) {
    return e[Ys]
}

function Wy(e, t, n, r) {
    let o = e[To];
    throw t[jl] && o.unshift(t[jl]), e.message = Zy(`
` + e.message, o, n, r), e[$y] = o, e[To] = null, e
}

function Zy(e, t, n, r = null) {
    e = e && e.charAt(0) === `
` && e.charAt(1) == zy ? e.slice(2) : e;
    let o = se(t);
    if (Array.isArray(t)) o = t.map(se).join(" -> ");
    else if (typeof t == "object") {
        let i = [];
        for (let s in t)
            if (t.hasOwnProperty(s)) {
                let a = t[s];
                i.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : se(a)))
            }
        o = `{${i.join(", ")}}`
    }
    return `${n}${r?"("+r+")":""}[${o}]: ${e.replace(Hy,`
  `)}`
}
var Jd = Kd($d("Optional"), 8);
var Xd = Kd($d("SkipSelf"), 4);

function bt(e, t) {
    let n = e.hasOwnProperty(bo);
    return n ? e[bo] : null
}

function Yy(e, t, n) {
    if (e.length !== t.length) return !1;
    for (let r = 0; r < e.length; r++) {
        let o = e[r],
            i = t[r];
        if (n && (o = n(o), i = n(i)), i !== o) return !1
    }
    return !0
}

function Qy(e) {
    return e.flat(Number.POSITIVE_INFINITY)
}

function cc(e, t) {
    e.forEach(n => Array.isArray(n) ? cc(n, t) : t(n))
}

function ef(e, t, n) {
    t >= e.length ? e.push(n) : e.splice(t, 0, n)
}

function _o(e, t) {
    return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
}

function Ky(e, t) {
    let n = [];
    for (let r = 0; r < e; r++) n.push(t);
    return n
}

function Jy(e, t, n, r) {
    let o = e.length;
    if (o == t) e.push(n, r);
    else if (o === 1) e.push(r, e[0]), e[0] = n;
    else {
        for (o--, e.push(e[o - 1], e[o]); o > t;) {
            let i = o - 2;
            e[o] = e[i], o--
        }
        e[t] = n, e[t + 1] = r
    }
}

function uc(e, t, n) {
    let r = tr(e, t);
    return r >= 0 ? e[r | 1] = n : (r = ~r, Jy(e, r, t, n)), r
}

function Ss(e, t) {
    let n = tr(e, t);
    if (n >= 0) return e[n | 1]
}

function tr(e, t) {
    return Xy(e, t, 1)
}

function Xy(e, t, n) {
    let r = 0,
        o = e.length >> n;
    for (; o !== r;) {
        let i = r + (o - r >> 1),
            s = e[i << n];
        if (t === s) return i << n;
        s > t ? o = i : r = i + 1
    }
    return ~(o << n)
}
var Ct = {},
    ee = [],
    an = new T(""),
    tf = new T("", -1),
    nf = new T(""),
    Mo = class {
        get(t, n = Et) {
            if (n === Et) {
                let r = new Error(`NullInjectorError: No provider for ${se(t)}!`);
                throw r.name = "NullInjectorError", r
            }
            return n
        }
    };

function rf(e, t) {
    let n = e[Vy] || null;
    if (!n && t === !0) throw new Error(`Type ${se(e)} does not have '\u0275mod' property.`);
    return n
}

function Ge(e) {
    return e[Py] || null
}

function of (e) {
    return e[Ly] || null
}

function sf(e) {
    return e[jy] || null
}

function lc(e) {
    return {\
        u0275providers: e
    }
}

function ev(...e) {
    return {\
        u0275providers: dc(!0, e),
        \u0275fromNgModule: !0
    }
}

function dc(e, ...t) {
    let n = [],
        r = new Set,
        o, i = s => {
            n.push(s)
        };
    return cc(t, s => {
        let a = s;
        Ks(a, i, [], r) && (o || = [], o.push(a))
    }), o !== void 0 && af(o, i), n
}

function af(e, t) {
    for (let n = 0; n < e.length; n++) {
        let {
            ngModule: r,
            providers: o
        } = e[n];
        fc(o, i => {
            t(i, r)
        })
    }
}

function Ks(e, t, n, r) {
    if (e = X(e), !e) return !1;
    let o = null,
        i = Fl(e),
        s = !i && Ge(e);
    if (!i && !s) {
        let c = e.ngModule;
        if (i = Fl(c), i) o = c;
        else return !1
    } else {
        if (s && !s.standalone) return !1;
        o = e
    }
    let a = r.has(o);
    if (s) {
        if (a) return !1;
        if (r.add(o), s.dependencies) {
            let c = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
            for (let u of c) Ks(u, t, n, r)
        }
    } else if (i) {
        if (i.imports != null && !a) {
            r.add(o);
            let u;
            try {
                cc(i.imports, l => {
                    Ks(l, t, n, r) && (u || = [], u.push(l))
                })
            } finally {}
            u !== void 0 && af(u, t)
        }
        if (!a) {
            let u = bt(o) || (() => new o);
            t({
                provide: o,
                useFactory: u,
                deps: ee
            }, o), t({
                provide: nf,
                useValue: o,
                multi: !0
            }, o), t({
                provide: an,
                useValue: () => U(o),
                multi: !0
            }, o)
        }
        let c = i.providers;
        if (c != null && !a) {
            let u = e;
            fc(c, l => {
                t(l, u)
            })
        }
    } else return !1;
    return o !== e && e.providers !== void 0
}

function fc(e, t) {
    for (let n of e) Wd(n) && (n = n.\u0275providers), Array.isArray(n) ? fc(n, t) : t(n)
}
var tv = L({
    provide: String,
    useValue: L
});

function cf(e) {
    return e !== null && typeof e == "object" && tv in e
}

function nv(e) {
    return !!(e && e.useExisting)
}

function rv(e) {
    return !!(e && e.useFactory)
}

function cn(e) {
    return typeof e == "function"
}

function ov(e) {
    return !!e.useClass
}
var uf = new T(""),
    go = {},
    Vl = {},
    Ns;

function oi() {
    return Ns === void 0 && (Ns = new Mo), Ns
}
var _e = class {},
    Gn = class extends _e {
        parent;
        source;
        scopes;
        records = new Map;
        _ngOnDestroyHooks = new Set;
        _onDestroyHooks = [];
        get destroyed() {
            return this._destroyed
        }
        _destroyed = !1;
        injectorDefTypes;
        constructor(t, n, r, o) {
            super(), this.parent = n, this.source = r, this.scopes = o, Xs(t, s => this.processProvider(s)), this.records.set(tf, Kt(void 0, this)), o.has("environment") && this.records.set(_e, Kt(void 0, this));
            let i = this.records.get(uf);
            i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(nf, ee, R.Self))
        }
        retrieve(t, n) {
            let r = n;
            return this.get(t, r.optional ? to : Et, r)
        }
        destroy() {
            $n(this), this._destroyed = !0;
            let t = x(null);
            try {
                for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
                let n = this._onDestroyHooks;
                this._onDestroyHooks = [];
                for (let r of n) r()
            } finally {
                this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), x(t)
            }
        }
        onDestroy(t) {
            return $n(this), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t)
        }
        runInContext(t) {
            $n(this);
            let n = ze(this),
                r = ie(void 0),
                o;
            try {
                return t()
            } finally {
                ze(n), ie(r)
            }
        }
        get(t, n = Et, r = R.Default) {
            if ($n(this), t.hasOwnProperty(Ll)) return t[Ll](this);
            r = ri(r);
            let o, i = ze(this),
                s = ie(void 0);
            try {
                if (!(r & R.SkipSelf)) {
                    let c = this.records.get(t);
                    if (c === void 0) {
                        let u = uv(t) && ni(t);
                        u && this.injectableDefInScope(u) ? c = Kt(Js(t), go) : c = null, this.records.set(t, c)
                    }
                    if (c != null) return this.hydrate(t, c)
                }
                let a = r & R.Self ? oi() : this.parent;
                return n = r & R.Optional && n === Et ? null : n, a.get(t, n)
            } catch (a) {
                if (a.name === "NullInjectorError") {
                    if ((a[To] = a[To] || []).unshift(se(t)), i) throw a;
                    return Wy(a, t, "R3InjectorError", this.source)
                } else throw a
            } finally {
                ie(s), ze(i)
            }
        }
        resolveInjectorInitializers() {
            let t = x(null),
                n = ze(this),
                r = ie(void 0),
                o;
            try {
                let i = this.get(an, ee, R.Self);
                for (let s of i) s()
            } finally {
                ze(n), ie(r), x(t)
            }
        }
        toString() {
            let t = [],
                n = this.records;
            for (let r of n.keys()) t.push(se(r));
            return `R3Injector[${t.join(", ")}]`
        }
        processProvider(t) {
            t = X(t);
            let n = cn(t) ? t : X(t && t.provide),
                r = sv(t);
            if (!cn(t) && t.multi === !0) {
                let o = this.records.get(n);
                o || (o = Kt(void 0, go, !0), o.factory = () => Qs(o.multi), this.records.set(n, o)), n = t, o.multi.push(t)
            }
            this.records.set(n, r)
        }
        hydrate(t, n) {
            let r = x(null);
            try {
                return n.value === Vl ? Zd(se(t)) : n.value === go && (n.value = Vl, n.value = n.factory()), typeof n.value == "object" && n.value && cv(n.value) && this._ngOnDestroyHooks.add(n.value), n.value
            } finally {
                x(r)
            }
        }
        injectableDefInScope(t) {
            if (!t.providedIn) return !1;
            let n = X(t.providedIn);
            return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n)
        }
        removeOnDestroy(t) {
            let n = this._onDestroyHooks.indexOf(t);
            n !== -1 && this._onDestroyHooks.splice(n, 1)
        }
    };

function Js(e) {
    let t = ni(e),
        n = t !== null ? t.factory : bt(e);
    if (n !== null) return n;
    if (e instanceof T) throw new b(204, !1);
    if (e instanceof Function) return iv(e);
    throw new b(204, !1)
}

function iv(e) {
    if (e.length > 0) throw new b(204, !1);
    let n = ky(e);
    return n !== null ? () => n.factory(e) : () => new e
}

function sv(e) {
    if (cf(e)) return Kt(void 0, e.useValue); {
        let t = lf(e);
        return Kt(t, go)
    }
}

function lf(e, t, n) {
    let r;
    if (cn(e)) {
        let o = X(e);
        return bt(o) || Js(o)
    } else if (cf(e)) r = () => X(e.useValue);
    else if (rv(e)) r = () => e.useFactory(...Qs(e.deps || []));
    else if (nv(e)) r = () => U(X(e.useExisting));
    else {
        let o = X(e && (e.useClass || e.provide));
        if (av(e)) r = () => new o(...Qs(e.deps));
        else return bt(o) || Js(o)
    }
    return r
}

function $n(e) {
    if (e.destroyed) throw new b(205, !1)
}

function Kt(e, t, n = !1) {
    return {
        factory: e,
        value: t,
        multi: n ? [] : void 0
    }
}

function av(e) {
    return !!e.deps
}

function cv(e) {
    return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
}

function uv(e) {
    return typeof e == "function" || typeof e == "object" && e instanceof T
}

function Xs(e, t) {
    for (let n of e) Array.isArray(n) ? Xs(n, t) : n && Wd(n) ? Xs(n.\u0275providers, t) : t(n)
}

function ii(e, t) {
    let n;
    e instanceof Gn ? ($n(e), n = e) : n = new Co(e);
    let r, o = ze(n),
        i = ie(void 0);
    try {
        return t()
    } finally {
        ze(o), ie(i)
    }
}

function df() {
    return Yd() !== void 0 || Bn() != null
}

function si(e) {
    if (!df()) throw new b(-203, !1)
}

function lv(e) {
    return typeof e == "function"
}
var le = 0,
    C = 1,
    _ = 2,
    q = 3,
    Ce = 4,
    ce = 5,
    ye = 6,
    So = 7,
    G = 8,
    qe = 9,
    We = 10,
    P = 11,
    qn = 12,
    Bl = 13,
    gn = 14,
    te = 15,
    Tt = 16,
    Jt = 17,
    Ze = 18,
    ai = 19,
    ff = 20,
    it = 21,
    xs = 22,
    _t = 23,
    me = 24,
    nn = 25,
    j = 26,
    pf = 1,
    Ye = 6,
    Qe = 7,
    No = 8,
    un = 9,
    Q = 10;

function Te(e) {
    return Array.isArray(e) && typeof e[pf] == "object"
}

function Le(e) {
    return Array.isArray(e) && e[pf] === !0
}

function pc(e) {
    return (e.flags & 4) !== 0
}

function kt(e) {
    return e.componentOffset > -1
}

function ci(e) {
    return (e.flags & 1) === 1
}

function ke(e) {
    return !!e.template
}

function Wn(e) {
    return (e[_] & 512) !== 0
}

function mn(e) {
    return (e[_] & 256) === 256
}
var ea = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, r) {
        this.previousValue = t, this.currentValue = n, this.firstChange = r
    }
    isFirstChange() {
        return this.firstChange
    }
};

function hf(e, t, n, r) {
    t !== null ? t.applyValueToInputSignal(t, r) : e[n] = r
}
var gf = (() => {
    let e = () => mf;
    return e.ngInherit = !0, e
})();

function mf(e) {
    return e.type.prototype.ngOnChanges && (e.setInput = fv), dv
}

function dv() {
    let e = vf(this),
        t = e ? .current;
    if (t) {
        let n = e.previous;
        if (n === Ct) e.previous = t;
        else
            for (let r in t) n[r] = t[r];
        e.current = null, this.ngOnChanges(t)
    }
}

function fv(e, t, n, r, o) {
    let i = this.declaredInputs[r],
        s = vf(e) || pv(e, {
            previous: Ct,
            current: null
        }),
        a = s.current || (s.current = {}),
        c = s.previous,
        u = c[i];
    a[i] = new ea(u && u.currentValue, n, c === Ct), hf(e, t, o, n)
}
var yf = "__ngSimpleChanges__";

function vf(e) {
    return e[yf] || null
}

function pv(e, t) {
    return e[yf] = t
}
var Ul = null;
var F = function(e, t = null, n) {
        Ul ? .(e, t, n)
    },
    Df = "svg",
    hv = "math";

function Me(e) {
    for (; Array.isArray(e);) e = e[le];
    return e
}

function Ef(e, t) {
    return Me(t[e])
}

function Ne(e, t) {
    return Me(t[e.index])
}

function nr(e, t) {
    return e.data[t]
}

function hc(e, t) {
    return e[t]
}

function Fe(e, t) {
    let n = t[e];
    return Te(n) ? n : n[le]
}

function gv(e) {
    return (e[_] & 4) === 4
}

function gc(e) {
    return (e[_] & 128) === 128
}

function mv(e) {
    return Le(e[q])
}

function st(e, t) {
    return t == null ? null : e[t]
}

function wf(e) {
    e[Jt] = 0
}

function If(e) {
    e[_] & 1024 || (e[_] |= 1024, gc(e) && yn(e))
}

function yv(e, t) {
    for (; e > 0;) t = t[gn], e--;
    return t
}

function ui(e) {
    return !!(e[_] & 9216 || e[me] ? .dirty)
}

function ta(e) {
    e[We].changeDetectionScheduler ? .notify(8), e[_] & 64 && (e[_] |= 1024), ui(e) && yn(e)
}

function yn(e) {
    e[We].changeDetectionScheduler ? .notify(0);
    let t = Mt(e);
    for (; t !== null && !(t[_] & 8192 || (t[_] |= 8192, !gc(t)));) t = Mt(t)
}

function bf(e, t) {
    if (mn(e)) throw new b(911, !1);
    e[it] === null && (e[it] = []), e[it].push(t)
}

function vv(e, t) {
    if (e[it] === null) return;
    let n = e[it].indexOf(t);
    n !== -1 && e[it].splice(n, 1)
}

function Mt(e) {
    let t = e[q];
    return Le(t) ? t[q] : t
}

function Cf(e) {
    return e[So] ? ? = []
}

function Tf(e) {
    return e.cleanup ? ? = []
}

function Dv(e, t, n, r) {
    let o = Cf(t);
    o.push(n), e.firstCreatePass && Tf(e).push(r, o.length - 1)
}
var S = {
    lFrame: xf(null),
    bindingsEnabled: !0,
    skipHydrationRootTNode: null
};
var na = !1;

function Ev() {
    return S.lFrame.elementDepthCount
}

function wv() {
    S.lFrame.elementDepthCount++
}

function Iv() {
    S.lFrame.elementDepthCount--
}

function mc() {
    return S.bindingsEnabled
}

function vn() {
    return S.skipHydrationRootTNode !== null
}

function bv(e) {
    return S.skipHydrationRootTNode === e
}

function Cv(e) {
    S.skipHydrationRootTNode = e
}

function Tv() {
    S.skipHydrationRootTNode = null
}

function M() {
    return S.lFrame.lView
}

function B() {
    return S.lFrame.tView
}

function Ek(e) {
    return S.lFrame.contextLView = e, e[G]
}

function wk(e) {
    return S.lFrame.contextLView = null, e
}

function K() {
    let e = _f();
    for (; e !== null && e.type === 64;) e = e.parent;
    return e
}

function _f() {
    return S.lFrame.currentTNode
}

function _v() {
    let e = S.lFrame,
        t = e.currentTNode;
    return e.isParent ? t : t.parent
}

function Ft(e, t) {
    let n = S.lFrame;
    n.currentTNode = e, n.isParent = t
}

function yc() {
    return S.lFrame.isParent
}

function vc() {
    S.lFrame.isParent = !1
}

function Mv() {
    return S.lFrame.contextLView
}

function Mf() {
    return na
}

function xo(e) {
    let t = na;
    return na = e, t
}

function Dc() {
    let e = S.lFrame,
        t = e.bindingRootIndex;
    return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
}

function Sv() {
    return S.lFrame.bindingIndex
}

function Nv(e) {
    return S.lFrame.bindingIndex = e
}

function Pt() {
    return S.lFrame.bindingIndex++
}

function Ec(e) {
    let t = S.lFrame,
        n = t.bindingIndex;
    return t.bindingIndex = t.bindingIndex + e, n
}

function xv() {
    return S.lFrame.inI18n
}

function Av(e, t) {
    let n = S.lFrame;
    n.bindingIndex = n.bindingRootIndex = e, ra(t)
}

function Rv() {
    return S.lFrame.currentDirectiveIndex
}

function ra(e) {
    S.lFrame.currentDirectiveIndex = e
}

function Ov(e) {
    let t = S.lFrame.currentDirectiveIndex;
    return t === -1 ? null : e[t]
}

function wc() {
    return S.lFrame.currentQueryIndex
}

function li(e) {
    S.lFrame.currentQueryIndex = e
}

function kv(e) {
    let t = e[C];
    return t.type === 2 ? t.declTNode : t.type === 1 ? e[ce] : null
}

function Sf(e, t, n) {
    if (n & R.SkipSelf) {
        let o = t,
            i = e;
        for (; o = o.parent, o === null && !(n & R.Host);)
            if (o = kv(i), o === null || (i = i[gn], o.type & 10)) break;
        if (o === null) return !1;
        t = o, e = i
    }
    let r = S.lFrame = Nf();
    return r.currentTNode = t, r.lView = e, !0
}

function Ic(e) {
    let t = Nf(),
        n = e[C];
    S.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1
}

function Nf() {
    let e = S.lFrame,
        t = e === null ? null : e.child;
    return t === null ? xf(e) : t
}

function xf(e) {
    let t = {
        currentTNode: null,
        isParent: !0,
        lView: null,
        tView: null,
        selectedIndex: -1,
        contextLView: null,
        elementDepthCount: 0,
        currentNamespace: null,
        currentDirectiveIndex: -1,
        bindingRootIndex: -1,
        bindingIndex: -1,
        currentQueryIndex: 0,
        parent: e,
        child: null,
        inI18n: !1
    };
    return e !== null && (e.child = t), t
}

function Af() {
    let e = S.lFrame;
    return S.lFrame = e.parent, e.currentTNode = null, e.lView = null, e
}
var Rf = Af;

function bc() {
    let e = Af();
    e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0
}

function Fv(e) {
    return (S.lFrame.contextLView = yv(e, S.lFrame.contextLView))[G]
}

function Je() {
    return S.lFrame.selectedIndex
}

function St(e) {
    S.lFrame.selectedIndex = e
}

function rr() {
    let e = S.lFrame;
    return nr(e.tView, e.selectedIndex)
}

function Ik() {
    S.lFrame.currentNamespace = Df
}

function bk() {
    Pv()
}

function Pv() {
    S.lFrame.currentNamespace = null
}

function Of() {
    return S.lFrame.currentNamespace
}
var kf = !0;

function di() {
    return kf
}

function ct(e) {
    kf = e
}

function Lv(e, t, n) {
    let {
        ngOnChanges: r,
        ngOnInit: o,
        ngDoCheck: i
    } = t.type.prototype;
    if (r) {
        let s = mf(t);
        (n.preOrderHooks ? ? = []).push(e, s), (n.preOrderCheckHooks ? ? = []).push(e, s)
    }
    o && (n.preOrderHooks ? ? = []).push(0 - e, o), i && ((n.preOrderHooks ? ? = []).push(e, i), (n.preOrderCheckHooks ? ? = []).push(e, i))
}

function Cc(e, t) {
    for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
        let i = e.data[n].type.prototype,
            {
                ngAfterContentInit: s,
                ngAfterContentChecked: a,
                ngAfterViewInit: c,
                ngAfterViewChecked: u,
                ngOnDestroy: l
            } = i;
        s && (e.contentHooks ? ? = []).push(-n, s), a && ((e.contentHooks ? ? = []).push(n, a), (e.contentCheckHooks ? ? = []).push(n, a)), c && (e.viewHooks ? ? = []).push(-n, c), u && ((e.viewHooks ? ? = []).push(n, u), (e.viewCheckHooks ? ? = []).push(n, u)), l != null && (e.destroyHooks ? ? = []).push(n, l)
    }
}

function mo(e, t, n) {
    Ff(e, t, 3, n)
}

function yo(e, t, n, r) {
    (e[_] & 3) === n && Ff(e, t, n, r)
}

function As(e, t) {
    let n = e[_];
    (n & 3) === t && (n &= 16383, n += 1, e[_] = n)
}

function Ff(e, t, n, r) {
    let o = r !== void 0 ? e[Jt] & 65535 : 0,
        i = r ? ? -1,
        s = t.length - 1,
        a = 0;
    for (let c = o; c < s; c++)
        if (typeof t[c + 1] == "number") {
            if (a = t[c], r != null && a >= r) break
        } else t[c] < 0 && (e[Jt] += 65536), (a < i || i == -1) && (jv(e, n, t, c), e[Jt] = (e[Jt] & 4294901760) + c + 2), c++
}

function $l(e, t) {
    F(4, e, t);
    let n = x(null);
    try {
        t.call(e)
    } finally {
        x(n), F(5, e, t)
    }
}

function jv(e, t, n, r) {
    let o = n[r] < 0,
        i = n[r + 1],
        s = o ? -n[r] : n[r],
        a = e[s];
    o ? e[_] >> 14 < e[Jt] >> 16 && (e[_] & 3) === t && (e[_] += 16384, $l(a, i)) : $l(a, i)
}
var rn = -1,
    Nt = class {
        factory;
        injectImpl;
        resolving = !1;
        canSeeViewProviders;
        multi;
        componentProviders;
        index;
        providerFactory;
        constructor(t, n, r) {
            this.factory = t, this.canSeeViewProviders = n, this.injectImpl = r
        }
    };

function Vv(e) {
    return (e.flags & 8) !== 0
}

function Bv(e) {
    return (e.flags & 16) !== 0
}

function Uv(e, t, n) {
    let r = 0;
    for (; r < n.length;) {
        let o = n[r];
        if (typeof o == "number") {
            if (o !== 0) break;
            r++;
            let i = n[r++],
                s = n[r++],
                a = n[r++];
            e.setAttribute(t, s, a, i)
        } else {
            let i = o,
                s = n[++r];
            $v(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++
        }
    }
    return r
}

function Pf(e) {
    return e === 3 || e === 4 || e === 6
}

function $v(e) {
    return e.charCodeAt(0) === 64
}

function ln(e, t) {
    if (!(t === null || t.length === 0))
        if (e === null || e.length === 0) e = t.slice();
        else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
                let o = t[r];
                typeof o == "number" ? n = o : n === 0 || (n === -1 || n === 2 ? Hl(e, n, o, null, t[++r]) : Hl(e, n, o, null, null))
            }
        }
    return e
}

function Hl(e, t, n, r, o) {
    let i = 0,
        s = e.length;
    if (t === -1) s = -1;
    else
        for (; i < e.length;) {
            let a = e[i++];
            if (typeof a == "number") {
                if (a === t) {
                    s = -1;
                    break
                } else if (a > t) {
                    s = i - 1;
                    break
                }
            }
        }
    for (; i < e.length;) {
        let a = e[i];
        if (typeof a == "number") break;
        if (a === n) {
            o !== null && (e[i + 1] = o);
            return
        }
        i++, o !== null && i++
    }
    s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), o !== null && e.splice(i++, 0, o)
}
var Rs = {},
    on = class {
        injector;
        parentInjector;
        constructor(t, n) {
            this.injector = t, this.parentInjector = n
        }
        get(t, n, r) {
            r = ri(r);
            let o = this.injector.get(t, Rs, r);
            return o !== Rs || n === Rs ? o : this.parentInjector.get(t, n, r)
        }
    };

function Lf(e) {
    return e !== rn
}

function Ao(e) {
    return e & 32767
}

function Hv(e) {
    return e >> 16
}

function Ro(e, t) {
    let n = Hv(e),
        r = t;
    for (; n > 0;) r = r[gn], n--;
    return r
}
var oa = !0;

function Oo(e) {
    let t = oa;
    return oa = e, t
}
var zv = 256,
    jf = zv - 1,
    Vf = 5,
    Gv = 0,
    Oe = {};

function qv(e, t, n) {
    let r;
    typeof n == "string" ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(zn) && (r = n[zn]), r == null && (r = n[zn] = Gv++);
    let o = r & jf,
        i = 1 << o;
    t.data[e + (o >> Vf)] |= i
}

function ko(e, t) {
    let n = Bf(e, t);
    if (n !== -1) return n;
    let r = t[C];
    r.firstCreatePass && (e.injectorIndex = t.length, Os(r.data, e), Os(t, null), Os(r.blueprint, null));
    let o = Tc(e, t),
        i = e.injectorIndex;
    if (Lf(o)) {
        let s = Ao(o),
            a = Ro(o, t),
            c = a[C].data;
        for (let u = 0; u < 8; u++) t[i + u] = a[s + u] | c[s + u]
    }
    return t[i + 8] = o, i
}

function Os(e, t) {
    e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
}

function Bf(e, t) {
    return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex
}

function Tc(e, t) {
    if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
    let n = 0,
        r = null,
        o = t;
    for (; o !== null;) {
        if (r = Gf(o), r === null) return rn;
        if (n++, o = o[gn], r.injectorIndex !== -1) return r.injectorIndex | n << 16
    }
    return rn
}

function ia(e, t, n) {
    qv(e, t, n)
}

function Wv(e, t) {
    if (t === "class") return e.classes;
    if (t === "style") return e.styles;
    let n = e.attrs;
    if (n) {
        let r = n.length,
            o = 0;
        for (; o < r;) {
            let i = n[o];
            if (Pf(i)) break;
            if (i === 0) o = o + 2;
            else if (typeof i == "number")
                for (o++; o < r && typeof n[o] == "string";) o++;
            else {
                if (i === t) return n[o + 1];
                o = o + 2
            }
        }
    }
    return null
}

function Uf(e, t, n) {
    if (n & R.Optional || e !== void 0) return e;
    ac(t, "NodeInjector")
}

function $f(e, t, n, r) {
    if (n & R.Optional && r === void 0 && (r = null), (n & (R.Self | R.Host)) === 0) {
        let o = e[qe],
            i = ie(void 0);
        try {
            return o ? o.get(t, r, n & R.Optional) : Qd(t, r, n & R.Optional)
        } finally {
            ie(i)
        }
    }
    return Uf(r, t, n)
}

function Hf(e, t, n, r = R.Default, o) {
    if (e !== null) {
        if (t[_] & 2048 && !(r & R.Self)) {
            let s = Kv(e, t, n, r, Oe);
            if (s !== Oe) return s
        }
        let i = zf(e, t, n, r, Oe);
        if (i !== Oe) return i
    }
    return $f(t, n, r, o)
}

function zf(e, t, n, r, o) {
    let i = Yv(n);
    if (typeof i == "function") {
        if (!Sf(t, e, r)) return r & R.Host ? Uf(o, n, r) : $f(t, n, r, o);
        try {
            let s;
            if (s = i(r), s == null && !(r & R.Optional)) ac(n);
            else return s
        } finally {
            Rf()
        }
    } else if (typeof i == "number") {
        let s = null,
            a = Bf(e, t),
            c = rn,
            u = r & R.Host ? t[te][ce] : null;
        for ((a === -1 || r & R.SkipSelf) && (c = a === -1 ? Tc(e, t) : t[a + 8], c === rn || !Gl(r, !1) ? a = -1 : (s = t[C], a = Ao(c), t = Ro(c, t))); a !== -1;) {
            let l = t[C];
            if (zl(i, a, l.data)) {
                let d = Zv(a, t, n, s, r, u);
                if (d !== Oe) return d
            }
            c = t[a + 8], c !== rn && Gl(r, t[C].data[a + 8] === u) && zl(i, a, t) ? (s = l, a = Ao(c), t = Ro(c, t)) : a = -1
        }
    }
    return o
}

function Zv(e, t, n, r, o, i) {
    let s = t[C],
        a = s.data[e + 8],
        c = r == null ? kt(a) && oa : r != s && (a.type & 3) !== 0,
        u = o & R.Host && i === a,
        l = vo(a, s, n, c, u);
    return l !== null ? Zn(t, s, l, a) : Oe
}

function vo(e, t, n, r, o) {
    let i = e.providerIndexes,
        s = t.data,
        a = i & 1048575,
        c = e.directiveStart,
        u = e.directiveEnd,
        l = i >> 20,
        d = r ? a : a + l,
        p = o ? a + l : u;
    for (let f = d; f < p; f++) {
        let h = s[f];
        if (f < c && n === h || f >= c && h.type === n) return f
    }
    if (o) {
        let f = s[c];
        if (f && ke(f) && f.type === n) return c
    }
    return null
}

function Zn(e, t, n, r) {
    let o = e[n],
        i = t.data;
    if (o instanceof Nt) {
        let s = o;
        s.resolving && Zd(By(i[n]));
        let a = Oo(s.canSeeViewProviders);
        s.resolving = !0;
        let c, u = s.injectImpl ? ie(s.injectImpl) : null,
            l = Sf(e, r, R.Default);
        try {
            o = e[n] = s.factory(void 0, i, e, r), t.firstCreatePass && n >= r.directiveStart && Lv(n, i[n], t)
        } finally {
            u !== null && ie(u), Oo(a), s.resolving = !1, Rf()
        }
    }
    return o
}

function Yv(e) {
    if (typeof e == "string") return e.charCodeAt(0) || 0;
    let t = e.hasOwnProperty(zn) ? e[zn] : void 0;
    return typeof t == "number" ? t >= 0 ? t & jf : Qv : t
}

function zl(e, t, n) {
    let r = 1 << e;
    return !!(n[t + (e >> Vf)] & r)
}

function Gl(e, t) {
    return !(e & R.Self) && !(e & R.Host && t)
}
var wt = class {
    _tNode;
    _lView;
    constructor(t, n) {
        this._tNode = t, this._lView = n
    }
    get(t, n, r) {
        return Hf(this._tNode, this._lView, t, ri(r), n)
    }
};

function Qv() {
    return new wt(K(), M())
}

function Ck(e) {
    return er(() => {
        let t = e.prototype.constructor,
            n = t[bo] || sa(t),
            r = Object.prototype,
            o = Object.getPrototypeOf(e.prototype).constructor;
        for (; o && o !== r;) {
            let i = o[bo] || sa(o);
            if (i && i !== n) return i;
            o = Object.getPrototypeOf(o)
        }
        return i => new i
    })
}

function sa(e) {
    return zd(e) ? () => {
        let t = sa(X(e));
        return t && t()
    } : bt(e)
}

function Kv(e, t, n, r, o) {
    let i = e,
        s = t;
    for (; i !== null && s !== null && s[_] & 2048 && !Wn(s);) {
        let a = zf(i, s, n, r | R.Self, Oe);
        if (a !== Oe) return a;
        let c = i.parent;
        if (!c) {
            let u = s[ff];
            if (u) {
                let l = u.get(n, Oe, r);
                if (l !== Oe) return l
            }
            c = Gf(s), s = s[gn]
        }
        i = c
    }
    return o
}

function Gf(e) {
    let t = e[C],
        n = t.type;
    return n === 2 ? t.declTNode : n === 1 ? e[ce] : null
}

function qf(e) {
    return Wv(K(), e)
}

function ql(e, t = null, n = null, r) {
    let o = Wf(e, t, n, r);
    return o.resolveInjectorInitializers(), o
}

function Wf(e, t = null, n = null, r, o = new Set) {
    let i = [n || ee, ev(e)];
    return r = r || (typeof e == "object" ? void 0 : se(e)), new Gn(i, t || oi(), r || null, o)
}
var Pe = class e {
    static THROW_IF_NOT_FOUND = Et;
    static NULL = new Mo;
    static create(t, n) {
        if (Array.isArray(t)) return ql({
            name: ""
        }, n, t, ""); {
            let r = t.name ? ? "";
            return ql({
                name: r
            }, t.parent, t.providers, r)
        }
    }
    static\ u0275prov = k({
        token: e,
        providedIn: "any",
        factory: () => U(tf)
    });
    static __NG_ELEMENT_ID__ = -1
};
var Wl = class {
        attributeName;
        constructor(t) {
            this.attributeName = t
        }
        __NG_ELEMENT_ID__ = () => qf(this.attributeName);
        toString() {
            return `HostAttributeToken ${this.attributeName}`
        }
    },
    Jv = new T("");
Jv.__NG_ELEMENT_ID__ = e => {
    let t = K();
    if (t === null) throw new b(204, !1);
    if (t.type & 2) return t.value;
    if (e & R.Optional) return null;
    throw new b(204, !1)
};
var Zf = !1,
    or = (() => {
        class e {
            static __NG_ELEMENT_ID__ = Xv;
            static __NG_ENV_ID__ = n => n
        }
        return e
    })(),
    Fo = class extends or {
        _lView;
        constructor(t) {
            super(), this._lView = t
        }
        onDestroy(t) {
            return bf(this._lView, t), () => vv(this._lView, t)
        }
    };

function Xv() {
    return new Fo(M())
}
var xt = class {},
    Yf = new T("", {
        providedIn: "root",
        factory: () => !1
    });
var Qf = new T(""),
    Kf = new T(""),
    Xe = (() => {
        class e {
            taskId = 0;
            pendingTasks = new Set;
            get _hasPendingTasks() {
                return this.hasPendingTasks.value
            }
            hasPendingTasks = new Nn(!1);
            add() {
                this._hasPendingTasks || this.hasPendingTasks.next(!0);
                let n = this.taskId++;
                return this.pendingTasks.add(n), n
            }
            has(n) {
                return this.pendingTasks.has(n)
            }
            remove(n) {
                this.pendingTasks.delete(n), this.pendingTasks.size === 0 && this._hasPendingTasks && this.hasPendingTasks.next(!1)
            }
            ngOnDestroy() {
                this.pendingTasks.clear(), this._hasPendingTasks && this.hasPendingTasks.next(!1)
            }
            static\ u0275prov = k({
                token: e,
                providedIn: "root",
                factory: () => new e
            })
        }
        return e
    })();
var aa = class extends W {
        __isAsync;
        destroyRef = void 0;
        pendingTasks = void 0;
        constructor(t = !1) {
            super(), this.__isAsync = t, df() && (this.destroyRef = m(or, {
                optional: !0
            }) ? ? void 0, this.pendingTasks = m(Xe, {
                optional: !0
            }) ? ? void 0)
        }
        emit(t) {
            let n = x(null);
            try {
                super.next(t)
            } finally {
                x(n)
            }
        }
        subscribe(t, n, r) {
            let o = t,
                i = n || (() => null),
                s = r;
            if (t && typeof t == "object") {
                let c = t;
                o = c.next ? .bind(c), i = c.error ? .bind(c), s = c.complete ? .bind(c)
            }
            this.__isAsync && (i = this.wrapInTimeout(i), o && (o = this.wrapInTimeout(o)), s && (s = this.wrapInTimeout(s)));
            let a = super.subscribe({
                next: o,
                error: i,
                complete: s
            });
            return t instanceof $ && t.add(a), a
        }
        wrapInTimeout(t) {
            return n => {
                let r = this.pendingTasks ? .add();
                setTimeout(() => {
                    t(n), r !== void 0 && this.pendingTasks ? .remove(r)
                })
            }
        }
    },
    ot = aa;

function Yn(...e) {}

function Jf(e) {
    let t, n;

    function r() {
        e = Yn;
        try {
            n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t)
        } catch {}
    }
    return t = setTimeout(() => {
        e(), r()
    }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => {
        e(), r()
    })), () => r()
}

function Zl(e) {
    return queueMicrotask(() => e()), () => {
        e = Yn
    }
}
var _c = "isAngularZone",
    Po = _c + "_ID",
    eD = 0,
    ae = class e {
        hasPendingMacrotasks = !1;
        hasPendingMicrotasks = !1;
        isStable = !0;
        onUnstable = new ot(!1);
        onMicrotaskEmpty = new ot(!1);
        onStable = new ot(!1);
        onError = new ot(!1);
        constructor(t) {
            let {
                enableLongStackTrace: n = !1,
                shouldCoalesceEventChangeDetection: r = !1,
                shouldCoalesceRunChangeDetection: o = !1,
                scheduleInRootZone: i = Zf
            } = t;
            if (typeof Zone > "u") throw new b(908, !1);
            Zone.assertZonePatched();
            let s = this;
            s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !o && r, s.shouldCoalesceRunChangeDetection = o, s.callbackScheduled = !1, s.scheduleInRootZone = i, rD(s)
        }
        static isInAngularZone() {
            return typeof Zone < "u" && Zone.current.get(_c) === !0
        }
        static assertInAngularZone() {
            if (!e.isInAngularZone()) throw new b(909, !1)
        }
        static assertNotInAngularZone() {
            if (e.isInAngularZone()) throw new b(909, !1)
        }
        run(t, n, r) {
            return this._inner.run(t, n, r)
        }
        runTask(t, n, r, o) {
            let i = this._inner,
                s = i.scheduleEventTask("NgZoneEvent: " + o, t, tD, Yn, Yn);
            try {
                return i.runTask(s, n, r)
            } finally {
                i.cancelTask(s)
            }
        }
        runGuarded(t, n, r) {
            return this._inner.runGuarded(t, n, r)
        }
        runOutsideAngular(t) {
            return this._outer.run(t)
        }
    },
    tD = {};

function Mc(e) {
    if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable) try {
        e._nesting++, e.onMicrotaskEmpty.emit(null)
    } finally {
        if (e._nesting--, !e.hasPendingMicrotasks) try {
            e.runOutsideAngular(() => e.onStable.emit(null))
        } finally {
            e.isStable = !0
        }
    }
}

function nD(e) {
    if (e.isCheckStableRunning || e.callbackScheduled) return;
    e.callbackScheduled = !0;

    function t() {
        Jf(() => {
            e.callbackScheduled = !1, ca(e), e.isCheckStableRunning = !0, Mc(e), e.isCheckStableRunning = !1
        })
    }
    e.scheduleInRootZone ? Zone.root.run(() => {
        t()
    }) : e._outer.run(() => {
        t()
    }), ca(e)
}

function rD(e) {
    let t = () => {
            nD(e)
        },
        n = eD++;
    e._inner = e._inner.fork({
        name: "angular",
        properties: {
            [_c]: !0,
            [Po]: n,
            [Po + n]: !0
        },
        onInvokeTask: (r, o, i, s, a, c) => {
            if (oD(c)) return r.invokeTask(i, s, a, c);
            try {
                return Yl(e), r.invokeTask(i, s, a, c)
            } finally {
                (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), Ql(e)
            }
        },
        onInvoke: (r, o, i, s, a, c, u) => {
            try {
                return Yl(e), r.invoke(i, s, a, c, u)
            } finally {
                e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !iD(c) && t(), Ql(e)
            }
        },
        onHasTask: (r, o, i, s) => {
            r.hasTask(i, s), o === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, ca(e), Mc(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask))
        },
        onHandleError: (r, o, i, s) => (r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1)
    })
}

function ca(e) {
    e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1
}

function Yl(e) {
    e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null))
}

function Ql(e) {
    e._nesting--, Mc(e)
}
var ua = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new ot;
    onMicrotaskEmpty = new ot;
    onStable = new ot;
    onError = new ot;
    run(t, n, r) {
        return t.apply(n, r)
    }
    runGuarded(t, n, r) {
        return t.apply(n, r)
    }
    runOutsideAngular(t) {
        return t()
    }
    runTask(t, n, r, o) {
        return t.apply(n, r)
    }
};

function oD(e) {
    return Xf(e, "__ignore_ng_zone__")
}

function iD(e) {
    return Xf(e, "__scheduler_tick__")
}

function Xf(e, t) {
    return !Array.isArray(e) || e.length !== 1 ? !1 : e[0] ? .data ? .[t] === !0
}
var at = class {
        _console = console;
        handleError(t) {
            this._console.error("ERROR", t)
        }
    },
    sD = new T("", {
        providedIn: "root",
        factory: () => {
            let e = m(ae),
                t = m(at);
            return n => e.runOutsideAngular(() => t.handleError(n))
        }
    }),
    la = class {
        destroyed = !1;
        listeners = null;
        errorHandler = m(at, {
            optional: !0
        });
        destroyRef = m(or);
        constructor() {
            this.destroyRef.onDestroy(() => {
                this.destroyed = !0, this.listeners = null
            })
        }
        subscribe(t) {
            if (this.destroyed) throw new b(953, !1);
            return (this.listeners ? ? = []).push(t), {
                unsubscribe: () => {
                    let n = this.listeners ? .indexOf(t);
                    n !== void 0 && n !== -1 && this.listeners ? .splice(n, 1)
                }
            }
        }
        emit(t) {
            if (this.destroyed) {
                console.warn(ti(953, !1));
                return
            }
            if (this.listeners === null) return;
            let n = x(null);
            try {
                for (let r of this.listeners) try {
                    r(t)
                } catch (o) {
                    this.errorHandler ? .handleError(o)
                }
            } finally {
                x(n)
            }
        }
    };

function Tk(e) {
    return new la
}

function Kl(e, t) {
    return Ud(e, t)
}

function aD(e) {
    return Ud(Bd, e)
}
var _k = (Kl.required = aD, Kl);

function cD() {
    return Dn(K(), M())
}

function Dn(e, t) {
    return new Lt(Ne(e, t))
}
var Lt = (() => {
    class e {
        nativeElement;
        constructor(n) {
            this.nativeElement = n
        }
        static __NG_ELEMENT_ID__ = cD
    }
    return e
})();

function ep(e) {
    return e instanceof Lt ? e.nativeElement : e
}

function uD(e) {
    return typeof e == "function" && e[oe] !== void 0
}

function tp(e, t) {
    let n = hs(e, t ? .equal),
        r = n[oe];
    return n.set = o => Vn(r, o), n.update = o => gs(r, o), n.asReadonly = lD.bind(n), n
}

function lD() {
    let e = this[oe];
    if (e.readonlyFn === void 0) {
        let t = () => this();
        t[oe] = e, e.readonlyFn = t
    }
    return e.readonlyFn
}

function np(e) {
    return uD(e) && typeof e.set == "function"
}

function dD() {
    return this._results[Symbol.iterator]()
}
var da = class {
        _emitDistinctChangesOnly;
        dirty = !0;
        _onDirty = void 0;
        _results = [];
        _changesDetected = !1;
        _changes = void 0;
        length = 0;
        first = void 0;
        last = void 0;
        get changes() {
            return this._changes ? ? = new W
        }
        constructor(t = !1) {
            this._emitDistinctChangesOnly = t
        }
        get(t) {
            return this._results[t]
        }
        map(t) {
            return this._results.map(t)
        }
        filter(t) {
            return this._results.filter(t)
        }
        find(t) {
            return this._results.find(t)
        }
        reduce(t, n) {
            return this._results.reduce(t, n)
        }
        forEach(t) {
            this._results.forEach(t)
        }
        some(t) {
            return this._results.some(t)
        }
        toArray() {
            return this._results.slice()
        }
        toString() {
            return this._results.toString()
        }
        reset(t, n) {
            this.dirty = !1;
            let r = Qy(t);
            (this._changesDetected = !Yy(this._results, r, n)) && (this._results = r, this.length = r.length, this.last = r[this.length - 1], this.first = r[0])
        }
        notifyOnChanges() {
            this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this)
        }
        onDirty(t) {
            this._onDirty = t
        }
        setDirty() {
            this.dirty = !0, this._onDirty ? .()
        }
        destroy() {
            this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe())
        }[Symbol.iterator] = dD
    },
    fD = "ngSkipHydration",
    pD = "ngskiphydration";

function rp(e) {
    let t = e.mergedAttrs;
    if (t === null) return !1;
    for (let n = 0; n < t.length; n += 2) {
        let r = t[n];
        if (typeof r == "number") return !1;
        if (typeof r == "string" && r.toLowerCase() === pD) return !0
    }
    return !1
}

function op(e) {
    return e.hasAttribute(fD)
}

function Lo(e) {
    return (e.flags & 128) === 128
}

function hD(e) {
    if (Lo(e)) return !0;
    let t = e.parent;
    for (; t;) {
        if (Lo(e) || rp(t)) return !0;
        t = t.parent
    }
    return !1
}
var ip = function(e) {
        return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e
    }(ip || {}),
    sp = new Map,
    gD = 0;

function mD() {
    return gD++
}

function yD(e) {
    sp.set(e[ai], e)
}

function fa(e) {
    sp.delete(e[ai])
}
var Jl = "__ngContext__";

function En(e, t) {
    Te(t) ? (e[Jl] = t[ai], yD(t)) : e[Jl] = t
}

function ap(e) {
    return up(e[qn])
}

function cp(e) {
    return up(e[Ce])
}

function up(e) {
    for (; e !== null && !Le(e);) e = e[Ce];
    return e
}
var pa;

function Mk(e) {
    pa = e
}

function ir() {
    if (pa !== void 0) return pa;
    if (typeof document < "u") return document;
    throw new b(210, !1)
}
var jo = new T("", {
        providedIn: "root",
        factory: () => vD
    }),
    vD = "ng",
    DD = new T(""),
    Sc = new T("", {
        providedIn: "platform",
        factory: () => "unknown"
    });
var Sk = new T(""),
    Nk = new T("", {
        providedIn: "root",
        factory: () => ir().body ? .querySelector("[ngCspNonce]") ? .getAttribute("ngCspNonce") || null
    });

function ED() {
    let e = new wn;
    return e.store = wD(ir(), m(jo)), e
}
var wn = (() => {
    class e {
        static\ u0275prov = k({
            token: e,
            providedIn: "root",
            factory: ED
        });
        store = {};
        onSerializeCallbacks = {};
        get(n, r) {
            return this.store[n] !== void 0 ? this.store[n] : r
        }
        set(n, r) {
            this.store[n] = r
        }
        remove(n) {
            delete this.store[n]
        }
        hasKey(n) {
            return this.store.hasOwnProperty(n)
        }
        get isEmpty() {
            return Object.keys(this.store).length === 0
        }
        onSerialize(n, r) {
            this.onSerializeCallbacks[n] = r
        }
        toJson() {
            for (let n in this.onSerializeCallbacks)
                if (this.onSerializeCallbacks.hasOwnProperty(n)) try {
                    this.store[n] = this.onSerializeCallbacks[n]()
                } catch (r) {
                    console.warn("Exception in onSerialize callback: ", r)
                }
            return JSON.stringify(this.store).replace(/</g, "\\u003C")
        }
    }
    return e
})();

function wD(e, t) {
    let n = e.getElementById(t + "-state");
    if (n ? .textContent) try {
        return JSON.parse(n.textContent)
    } catch (r) {
        console.warn("Exception while restoring TransferState for app " + t, r)
    }
    return {}
}
var lp = "h",
    dp = "b",
    ID = "f",
    bD = "n",
    CD = "e",
    TD = "t",
    Nc = "c",
    fp = "x",
    Vo = "r",
    _D = "i",
    MD = "n",
    pp = "d";
var SD = "di",
    ND = "s",
    xD = "p";
var co = new T(""),
    hp = !1,
    gp = new T("", {
        providedIn: "root",
        factory: () => hp
    });
var mp = new T(""),
    AD = !1,
    RD = new T(""),
    Xl = new T("", {
        providedIn: "root",
        factory: () => new Map
    }),
    xc = function(e) {
        return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e
    }(xc || {}),
    fi = new T(""),
    ed = new Set;

function je(e) {
    ed.has(e) || (ed.add(e), performance ? .mark ? .("mark_feature_usage", {
        detail: {
            feature: e
        }
    }))
}
var Ac = (() => {
    class e {
        view;
        node;
        constructor(n, r) {
            this.view = n, this.node = r
        }
        static __NG_ELEMENT_ID__ = OD
    }
    return e
})();

function OD() {
    return new Ac(M(), K())
}
var Xt = function(e) {
        return e[e.EarlyRead = 0] = "EarlyRead", e[e.Write = 1] = "Write", e[e.MixedReadWrite = 2] = "MixedReadWrite", e[e.Read = 3] = "Read", e
    }(Xt || {}),
    yp = (() => {
        class e {
            impl = null;
            execute() {
                this.impl ? .execute()
            }
            static\ u0275prov = k({
                token: e,
                providedIn: "root",
                factory: () => new e
            })
        }
        return e
    })(),
    kD = [Xt.EarlyRead, Xt.Write, Xt.MixedReadWrite, Xt.Read],
    FD = (() => {
        class e {
            ngZone = m(ae);
            scheduler = m(xt);
            errorHandler = m(at, {
                optional: !0
            });
            sequences = new Set;
            deferredRegistrations = new Set;
            executing = !1;
            constructor() {
                m(fi, {
                    optional: !0
                })
            }
            execute() {
                let n = this.sequences.size > 0;
                n && F(16), this.executing = !0;
                for (let r of kD)
                    for (let o of this.sequences)
                        if (!(o.erroredOrDestroyed || !o.hooks[r])) try {
                            o.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => {
                                let i = o.hooks[r];
                                return i(o.pipelinedValue)
                            }, o.snapshot))
                        } catch (i) {
                            o.erroredOrDestroyed = !0, this.errorHandler ? .handleError(i)
                        }
                this.executing = !1;
                for (let r of this.sequences) r.afterRun(), r.once && (this.sequences.delete(r), r.destroy());
                for (let r of this.deferredRegistrations) this.sequences.add(r);
                this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && F(17)
            }
            register(n) {
                let {
                    view: r
                } = n;
                r !== void 0 ? ((r[nn] ? ? = []).push(n), yn(r), r[_] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n)
            }
            addSequence(n) {
                this.sequences.add(n), this.scheduler.notify(7)
            }
            unregister(n) {
                this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n))
            }
            maybeTrace(n, r) {
                return r ? r.run(xc.AFTER_NEXT_RENDER, n) : n()
            }
            static\ u0275prov = k({
                token: e,
                providedIn: "root",
                factory: () => new e
            })
        }
        return e
    })(),
    ha = class {
        impl;
        hooks;
        view;
        once;
        snapshot;
        erroredOrDestroyed = !1;
        pipelinedValue = void 0;
        unregisterOnDestroy;
        constructor(t, n, r, o, i, s = null) {
            this.impl = t, this.hooks = n, this.view = r, this.once = o, this.snapshot = s, this.unregisterOnDestroy = i ? .onDestroy(() => this.destroy())
        }
        afterRun() {
            this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot ? .dispose(), this.snapshot = null
        }
        destroy() {
            this.impl.unregister(this), this.unregisterOnDestroy ? .();
            let t = this.view ? .[nn];
            t && (this.view[nn] = t.filter(n => n !== this))
        }
    };

function PD(e, t) {
    !t ? .injector && si(PD);
    let n = t ? .injector ? ? m(Pe);
    return je("NgAfterRender"), Dp(e, n, t, !1)
}

function vp(e, t) {
    !t ? .injector && si(vp);
    let n = t ? .injector ? ? m(Pe);
    return je("NgAfterNextRender"), Dp(e, n, t, !0)
}

function LD(e, t) {
    if (e instanceof Function) {
        let n = [void 0, void 0, void 0, void 0];
        return n[t] = e, n
    } else return [e.earlyRead, e.write, e.mixedReadWrite, e.read]
}

function Dp(e, t, n, r) {
    let o = t.get(yp);
    o.impl ? ? = t.get(FD);
    let i = t.get(fi, null, {
            optional: !0
        }),
        s = n ? .phase ? ? Xt.MixedReadWrite,
        a = n ? .manualCleanup !== !0 ? t.get(or) : null,
        c = t.get(Ac, null, {
            optional: !0
        }),
        u = new ha(o.impl, LD(e, s), c ? .view, r, a, i ? .snapshot(null));
    return o.impl.register(u), u
}
var ue = function(e) {
        return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e
    }(ue || {}),
    td = 0,
    jD = 1,
    z = function(e) {
        return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e
    }(z || {});
var VD = 0,
    pi = 1;
var BD = 4,
    UD = 5;
var $D = 7,
    sn = 8,
    HD = 9,
    Ep = function(e) {
        return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e
    }(Ep || {});

function Do(e, t) {
    let n = GD(e),
        r = t[n];
    if (r !== null) {
        for (let o of r) o();
        t[n] = null
    }
}

function zD(e) {
    Do(1, e), Do(0, e), Do(2, e)
}

function GD(e) {
    let t = BD;
    return e === 1 ? t = UD : e === 2 && (t = HD), t
}

function wp(e) {
    return e + 1
}

function sr(e, t) {
    let n = e[C],
        r = wp(t.index);
    return e[r]
}

function hi(e, t) {
    let n = wp(t.index);
    return e.data[n]
}

function qD(e, t, n) {
    let r = t[C],
        o = hi(r, n);
    switch (e) {
        case z.Complete:
            return o.primaryTmplIndex;
        case z.Loading:
            return o.loadingTmplIndex;
        case z.Error:
            return o.errorTmplIndex;
        case z.Placeholder:
            return o.placeholderTmplIndex;
        default:
            return null
    }
}

function nd(e, t) {
    return t === z.Placeholder ? e.placeholderBlockConfig ? .[td] ? ? null : t === z.Loading ? e.loadingBlockConfig ? .[td] ? ? null : null
}

function WD(e) {
    return e.loadingBlockConfig ? .[jD] ? ? null
}

function rd(e, t) {
    if (!e || e.length === 0) return t;
    let n = new Set(e);
    for (let r of t) n.add(r);
    return e.length === n.size ? e : Array.from(n)
}

function ZD(e, t) {
    let n = t.primaryTmplIndex + j;
    return nr(e, n)
}
var gi = "ngb";
var YD = (e, t, n) => {
        let r = e,
            o = r.__jsaction_fns ? ? new Map,
            i = o.get(t) ? ? [];
        i.push(n), o.set(t, i), r.__jsaction_fns = o
    },
    QD = (e, t) => {
        let n = e,
            r = n.getAttribute(gi) ? ? "",
            o = t.get(r) ? ? new Set;
        o.has(n) || o.add(n), t.set(r, o)
    };
var KD = e => {
        e.removeAttribute(Is.JSACTION), e.removeAttribute(gi), e.__jsaction_fns = void 0
    },
    JD = new T("", {
        providedIn: "root",
        factory: () => ({})
    });

function Ip(e, t) {
    let n = t ? .__jsaction_fns ? .get(e.type);
    if (!(!n || !t ? .isConnected))
        for (let r of n) r(e)
}
var Rc = new T("");
var XD = "__nghData__",
    bp = XD,
    eE = "__nghDeferData__",
    tE = eE,
    ks = "ngh",
    nE = "nghm",
    Cp = () => null;

function rE(e, t, n = !1) {
    let r = e.getAttribute(ks);
    if (r == null) return null;
    let [o, i] = r.split("|");
    if (r = n ? i : o, !r) return null;
    let s = i ? `|${i}` : "",
        a = n ? o : s,
        c = {};
    if (r !== "") {
        let l = t.get(wn, null, {
            optional: !0
        });
        l !== null && (c = l.get(bp, [])[Number(r)])
    }
    let u = {
        data: c,
        firstChild: e.firstChild ? ? null
    };
    return n && (u.firstChild = e, mi(u, 0, e.nextSibling)), a ? e.setAttribute(ks, a) : e.removeAttribute(ks), u
}

function oE() {
    Cp = rE
}

function Tp(e, t, n = !1) {
    return Cp(e, t, n)
}

function iE(e) {
    let t = e._lView;
    return t[C].type === 2 ? null : (Wn(t) && (t = t[j]), t)
}

function sE(e) {
    return e.textContent ? .replace(/\s/gm, "")
}

function aE(e) {
    let t = ir(),
        n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, {
            acceptNode(i) {
                let s = sE(i);
                return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
            }
        }),
        r, o = [];
    for (; r = n.nextNode();) o.push(r);
    for (let i of o) i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove()
}

function mi(e, t, n) {
    e.segmentHeads ? ? = {}, e.segmentHeads[t] = n
}

function ga(e, t) {
    return e.segmentHeads ? .[t] ? ? null
}

function cE(e) {
    return e.get(RD, !1, {
        optional: !0
    })
}

function uE(e, t) {
    let n = e.data,
        r = n[CD] ? .[t] ? ? null;
    return r === null && n[Nc] ? .[t] && (r = Oc(e, t)), r
}

function _p(e, t) {
    return e.data[Nc] ? .[t] ? ? null
}

function Oc(e, t) {
    let n = _p(e, t) ? ? [],
        r = 0;
    for (let o of n) r += o[Vo] * (o[fp] ? ? 1);
    return r
}

function lE(e) {
    if (typeof e.disconnectedNodes > "u") {
        let t = e.data[pp];
        e.disconnectedNodes = t ? new Set(t) : null
    }
    return e.disconnectedNodes
}

function ar(e, t) {
    if (typeof e.disconnectedNodes > "u") {
        let n = e.data[pp];
        e.disconnectedNodes = n ? new Set(n) : null
    }
    return !!lE(e) ? .has(t)
}

function dE(e, t) {
    let n = t.get(Rc),
        o = t.get(wn).get(tE, {}),
        i = !1,
        s = e,
        a = null,
        c = [];
    for (; !i && s;) {
        i = n.has(s);
        let u = n.hydrating.get(s);
        if (a === null && u != null) {
            a = u.promise;
            break
        }
        c.unshift(s), s = o[s][xD]
    }
    return {
        parentBlockPromise: a,
        hydrationQueue: c
    }
}

function Fs(e) {
    return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent ? .trim() === nE
}

function od(e) {
    for (; e && e.nodeType === Node.TEXT_NODE;) e = e.previousSibling;
    return e
}

function fE(e) {
    for (let r of e.body.childNodes)
        if (Fs(r)) return;
    let t = od(e.body.previousSibling);
    if (Fs(t)) return;
    let n = od(e.head.lastChild);
    if (!Fs(n)) throw new b(-507, !1)
}

function Mp(e, t) {
    let n = e.contentQueries;
    if (n !== null) {
        let r = x(null);
        try {
            for (let o = 0; o < n.length; o += 2) {
                let i = n[o],
                    s = n[o + 1];
                if (s !== -1) {
                    let a = e.data[s];
                    li(i), a.contentQueries(2, t[s], s)
                }
            }
        } finally {
            x(r)
        }
    }
}

function ma(e, t, n) {
    li(0);
    let r = x(null);
    try {
        t(e, n)
    } finally {
        x(r)
    }
}

function kc(e, t, n) {
    if (pc(t)) {
        let r = x(null);
        try {
            let o = t.directiveStart,
                i = t.directiveEnd;
            for (let s = o; s < i; s++) {
                let a = e.data[s];
                if (a.contentQueries) {
                    let c = n[s];
                    a.contentQueries(1, c, s)
                }
            }
        } finally {
            x(r)
        }
    }
}
var Qn = function(e) {
        return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e
    }(Qn || {}),
    uo;

function pE() {
    if (uo === void 0 && (uo = null, rt.trustedTypes)) try {
        uo = rt.trustedTypes.createPolicy("angular", {
            createHTML: e => e,
            createScript: e => e,
            createScriptURL: e => e
        })
    } catch {}
    return uo
}

function yi(e) {
    return pE() ? .createHTML(e) || e
}
var lo;

function Sp() {
    if (lo === void 0 && (lo = null, rt.trustedTypes)) try {
        lo = rt.trustedTypes.createPolicy("angular#unsafe-bypass", {
            createHTML: e => e,
            createScript: e => e,
            createScriptURL: e => e
        })
    } catch {}
    return lo
}

function id(e) {
    return Sp() ? .createHTML(e) || e
}

function sd(e) {
    return Sp() ? .createScriptURL(e) || e
}
var Ke = class {
        changingThisBreaksApplicationSecurity;
        constructor(t) {
            this.changingThisBreaksApplicationSecurity = t
        }
        toString() {
            return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Vd})`
        }
    },
    ya = class extends Ke {
        getTypeName() {
            return "HTML"
        }
    },
    va = class extends Ke {
        getTypeName() {
            return "Style"
        }
    },
    Da = class extends Ke {
        getTypeName() {
            return "Script"
        }
    },
    Ea = class extends Ke {
        getTypeName() {
            return "URL"
        }
    },
    wa = class extends Ke {
        getTypeName() {
            return "ResourceURL"
        }
    };

function In(e) {
    return e instanceof Ke ? e.changingThisBreaksApplicationSecurity : e
}

function Fc(e, t) {
    let n = hE(e);
    if (n != null && n !== t) {
        if (n === "ResourceURL" && t === "URL") return !0;
        throw new Error(`Required a safe ${t}, got a ${n} (see ${Vd})`)
    }
    return n === t
}

function hE(e) {
    return e instanceof Ke && e.getTypeName() || null
}

function xk(e) {
    return new ya(e)
}

function Ak(e) {
    return new va(e)
}

function Rk(e) {
    return new Da(e)
}

function Ok(e) {
    return new Ea(e)
}

function kk(e) {
    return new wa(e)
}

function gE(e) {
    let t = new ba(e);
    return mE() ? new Ia(t) : t
}
var Ia = class {
        inertDocumentHelper;
        constructor(t) {
            this.inertDocumentHelper = t
        }
        getInertBodyElement(t) {
            t = "<body><remove></remove>" + t;
            try {
                let n = new window.DOMParser().parseFromString(yi(t), "text/html").body;
                return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild ? .remove(), n)
            } catch {
                return null
            }
        }
    },
    ba = class {
        defaultDoc;
        inertDocument;
        constructor(t) {
            this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")
        }
        getInertBodyElement(t) {
            let n = this.inertDocument.createElement("template");
            return n.innerHTML = yi(t), n
        }
    };

function mE() {
    try {
        return !!new window.DOMParser().parseFromString(yi(""), "text/html")
    } catch {
        return !1
    }
}
var yE = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;

function Np(e) {
    return e = String(e), e.match(yE) ? e : "unsafe:" + e
}

function et(e) {
    let t = {};
    for (let n of e.split(",")) t[n] = !0;
    return t
}

function cr(...e) {
    let t = {};
    for (let n of e)
        for (let r in n) n.hasOwnProperty(r) && (t[r] = !0);
    return t
}
var xp = et("area,br,col,hr,img,wbr"),
    Ap = et("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
    Rp = et("rp,rt"),
    vE = cr(Rp, Ap),
    DE = cr(Ap, et("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),
    EE = cr(Rp, et("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),
    ad = cr(xp, DE, EE, vE),
    Op = et("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
    wE = et("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),
    IE = et("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),
    bE = cr(Op, wE, IE),
    CE = et("script,style,template"),
    Ca = class {
        sanitizedSomething = !1;
        buf = [];
        sanitizeChildren(t) {
            let n = t.firstChild,
                r = !0,
                o = [];
            for (; n;) {
                if (n.nodeType === Node.ELEMENT_NODE ? r = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, r && n.firstChild) {
                    o.push(n), n = ME(n);
                    continue
                }
                for (; n;) {
                    n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                    let i = _E(n);
                    if (i) {
                        n = i;
                        break
                    }
                    n = o.pop()
                }
            }
            return this.buf.join("")
        }
        startElement(t) {
            let n = cd(t).toLowerCase();
            if (!ad.hasOwnProperty(n)) return this.sanitizedSomething = !0, !CE.hasOwnProperty(n);
            this.buf.push("<"), this.buf.push(n);
            let r = t.attributes;
            for (let o = 0; o < r.length; o++) {
                let i = r.item(o),
                    s = i.name,
                    a = s.toLowerCase();
                if (!bE.hasOwnProperty(a)) {
                    this.sanitizedSomething = !0;
                    continue
                }
                let c = i.value;
                Op[a] && (c = Np(c)), this.buf.push(" ", s, '="', ud(c), '"')
            }
            return this.buf.push(">"), !0
        }
        endElement(t) {
            let n = cd(t).toLowerCase();
            ad.hasOwnProperty(n) && !xp.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">"))
        }
        chars(t) {
            this.buf.push(ud(t))
        }
    };

function TE(e, t) {
    return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY
}

function _E(e) {
    let t = e.nextSibling;
    if (t && e !== t.previousSibling) throw kp(t);
    return t
}

function ME(e) {
    let t = e.firstChild;
    if (t && TE(e, t)) throw kp(t);
    return t
}

function cd(e) {
    let t = e.nodeName;
    return typeof t == "string" ? t : "FORM"
}

function kp(e) {
    return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`)
}
var SE = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    NE = /([^\#-~ |!])/g;

function ud(e) {
    return e.replace(/&/g, "&amp;").replace(SE, function(t) {
        let n = t.charCodeAt(0),
            r = t.charCodeAt(1);
        return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";"
    }).replace(NE, function(t) {
        return "&#" + t.charCodeAt(0) + ";"
    }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
var fo;

function xE(e, t) {
    let n = null;
    try {
        fo = fo || gE(e);
        let r = t ? String(t) : "";
        n = fo.getInertBodyElement(r);
        let o = 5,
            i = r;
        do {
            if (o === 0) throw new Error("Failed to sanitize html because the input is unstable");
            o--, r = i, i = n.innerHTML, n = fo.getInertBodyElement(r)
        } while (r !== i);
        let a = new Ca().sanitizeChildren(ld(n) || n);
        return yi(a)
    } finally {
        if (n) {
            let r = ld(n) || n;
            for (; r.firstChild;) r.firstChild.remove()
        }
    }
}

function ld(e) {
    return "content" in e && AE(e) ? e.content : null
}

function AE(e) {
    return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"
}
var vi = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e
}(vi || {});

function Fk(e) {
    let t = Pc();
    return t ? id(t.sanitize(vi.HTML, e) || "") : Fc(e, "HTML") ? id(In(e)) : xE(ir(), It(e))
}

function RE(e) {
    let t = Pc();
    return t ? t.sanitize(vi.URL, e) || "" : Fc(e, "URL") ? In(e) : Np(It(e))
}

function OE(e) {
    let t = Pc();
    if (t) return sd(t.sanitize(vi.RESOURCE_URL, e) || "");
    if (Fc(e, "ResourceURL")) return sd(In(e));
    throw new b(904, !1)
}

function kE(e, t) {
    return t === "src" && (e === "embed" || e === "frame" || e === "iframe" || e === "media" || e === "script") || t === "href" && (e === "base" || e === "link") ? OE : RE
}

function Pk(e, t, n) {
    return kE(t, n)(e)
}

function Pc() {
    let e = M();
    return e && e[We].sanitizer
}
var FE = /^>|^->|<!--|-->|--!>|<!-$/g,
    PE = /(<|>)/g,
    LE = "\u200B$1\u200B";

function jE(e) {
    return e.replace(FE, t => t.replace(PE, LE))
}

function Lk(e) {
    return e.ownerDocument.defaultView
}

function VE(e) {
    return e.ownerDocument.body
}

function Fp(e) {
    return e instanceof Function ? e() : e
}

function BE(e, t, n) {
    let r = e.length;
    for (;;) {
        let o = e.indexOf(t, n);
        if (o === -1) return o;
        if (o === 0 || e.charCodeAt(o - 1) <= 32) {
            let i = t.length;
            if (o + i === r || e.charCodeAt(o + i) <= 32) return o
        }
        n = o + 1
    }
}
var Pp = "ng-template";

function UE(e, t, n, r) {
    let o = 0;
    if (r) {
        for (; o < t.length && typeof t[o] == "string"; o += 2)
            if (t[o] === "class" && BE(t[o + 1].toLowerCase(), n, 0) !== -1) return !0
    } else if (Lc(e)) return !1;
    if (o = t.indexOf(1, o), o > -1) {
        let i;
        for (; ++o < t.length && typeof(i = t[o]) == "string";)
            if (i.toLowerCase() === n) return !0
    }
    return !1
}

function Lc(e) {
    return e.type === 4 && e.value !== Pp
}

function $E(e, t, n) {
    let r = e.type === 4 && !n ? Pp : e.value;
    return t === r
}

function HE(e, t, n) {
    let r = 4,
        o = e.attrs,
        i = o !== null ? qE(o) : 0,
        s = !1;
    for (let a = 0; a < t.length; a++) {
        let c = t[a];
        if (typeof c == "number") {
            if (!s && !Ie(r) && !Ie(c)) return !1;
            if (s && Ie(c)) continue;
            s = !1, r = c | r & 1;
            continue
        }
        if (!s)
            if (r & 4) {
                if (r = 2 | r & 1, c !== "" && !$E(e, c, n) || c === "" && t.length === 1) {
                    if (Ie(r)) return !1;
                    s = !0
                }
            } else if (r & 8) {
            if (o === null || !UE(e, o, c, n)) {
                if (Ie(r)) return !1;
                s = !0
            }
        } else {
            let u = t[++a],
                l = zE(c, o, Lc(e), n);
            if (l === -1) {
                if (Ie(r)) return !1;
                s = !0;
                continue
            }
            if (u !== "") {
                let d;
                if (l > i ? d = "" : d = o[l + 1].toLowerCase(), r & 2 && u !== d) {
                    if (Ie(r)) return !1;
                    s = !0
                }
            }
        }
    }
    return Ie(r) || s
}

function Ie(e) {
    return (e & 1) === 0
}

function zE(e, t, n, r) {
    if (t === null) return -1;
    let o = 0;
    if (r || !n) {
        let i = !1;
        for (; o < t.length;) {
            let s = t[o];
            if (s === e) return o;
            if (s === 3 || s === 6) i = !0;
            else if (s === 1 || s === 2) {
                let a = t[++o];
                for (; typeof a == "string";) a = t[++o];
                continue
            } else {
                if (s === 4) break;
                if (s === 0) {
                    o += 4;
                    continue
                }
            }
            o += i ? 1 : 2
        }
        return -1
    } else return WE(t, e)
}

function Lp(e, t, n = !1) {
    for (let r = 0; r < t.length; r++)
        if (HE(e, t[r], n)) return !0;
    return !1
}

function GE(e) {
    let t = e.attrs;
    if (t != null) {
        let n = t.indexOf(5);
        if ((n & 1) === 0) return t[n + 1]
    }
    return null
}

function qE(e) {
    for (let t = 0; t < e.length; t++) {
        let n = e[t];
        if (Pf(n)) return t
    }
    return e.length
}

function WE(e, t) {
    let n = e.indexOf(4);
    if (n > -1)
        for (n++; n < e.length;) {
            let r = e[n];
            if (typeof r == "number") return -1;
            if (r === t) return n;
            n++
        }
    return -1
}

function ZE(e, t) {
    e: for (let n = 0; n < t.length; n++) {
        let r = t[n];
        if (e.length === r.length) {
            for (let o = 0; o < e.length; o++)
                if (e[o] !== r[o]) continue e;
            return !0
        }
    }
    return !1
}

function dd(e, t) {
    return e ? ":not(" + t.trim() + ")" : t
}

function YE(e) {
    let t = e[0],
        n = 1,
        r = 2,
        o = "",
        i = !1;
    for (; n < e.length;) {
        let s = e[n];
        if (typeof s == "string")
            if (r & 2) {
                let a = e[++n];
                o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]"
            } else r & 8 ? o += "." + s : r & 4 && (o += " " + s);
        else o !== "" && !Ie(s) && (t += dd(i, o), o = ""), r = s, i = i || !Ie(r);
        n++
    }
    return o !== "" && (t += dd(i, o)), t
}

function QE(e) {
    return e.map(YE).join(",")
}

function KE(e) {
    let t = [],
        n = [],
        r = 1,
        o = 2;
    for (; r < e.length;) {
        let i = e[r];
        if (typeof i == "string") o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
        else {
            if (!Ie(o)) break;
            o = i
        }
        r++
    }
    return n.length && t.push(1, ...n), t
}
var de = {};

function jp(e, t) {
    return e.createText(t)
}

function JE(e, t, n) {
    e.setValue(t, n)
}

function Vp(e, t) {
    return e.createComment(jE(t))
}

function jc(e, t, n) {
    return e.createElement(t, n)
}

function Bo(e, t, n, r, o) {
    e.insertBefore(t, n, r, o)
}

function Bp(e, t, n) {
    e.appendChild(t, n)
}

function fd(e, t, n, r, o) {
    r !== null ? Bo(e, t, n, r, o) : Bp(e, t, n)
}

function Vc(e, t, n) {
    e.removeChild(null, t, n)
}

function Up(e) {
    e.textContent = ""
}

function XE(e, t, n) {
    e.setAttribute(t, "style", n)
}

function ew(e, t, n) {
    n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n)
}

function $p(e, t, n) {
    let {
        mergedAttrs: r,
        classes: o,
        styles: i
    } = n;
    r !== null && Uv(e, t, r), o !== null && ew(e, t, o), i !== null && XE(e, t, i)
}

function Bc(e, t, n, r, o, i, s, a, c, u, l) {
    let d = j + r,
        p = d + o,
        f = tw(d, p),
        h = typeof u == "function" ? u() : u;
    return f[C] = {
        type: e,
        blueprint: f,
        template: n,
        queries: null,
        viewQuery: a,
        declTNode: t,
        data: f.slice().fill(null, d),
        bindingStartIndex: d,
        expandoStartIndex: p,
        hostBindingOpCodes: null,
        firstCreatePass: !0,
        firstUpdatePass: !0,
        staticViewQueries: !1,
        staticContentQueries: !1,
        preOrderHooks: null,
        preOrderCheckHooks: null,
        contentHooks: null,
        contentCheckHooks: null,
        viewHooks: null,
        viewCheckHooks: null,
        destroyHooks: null,
        cleanup: null,
        contentQueries: null,
        components: null,
        directiveRegistry: typeof i == "function" ? i() : i,
        pipeRegistry: typeof s == "function" ? s() : s,
        firstChild: null,
        schemas: c,
        consts: h,
        incompleteFirstPass: !1,
        ssrId: l
    }
}

function tw(e, t) {
    let n = [];
    for (let r = 0; r < t; r++) n.push(r < e ? null : de);
    return n
}

function nw(e) {
    let t = e.tView;
    return t === null || t.incompleteFirstPass ? e.tView = Bc(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t
}

function Uc(e, t, n, r, o, i, s, a, c, u, l) {
    let d = t.blueprint.slice();
    return d[le] = o, d[_] = r | 4 | 128 | 8 | 64 | 1024, (u !== null || e && e[_] & 2048) && (d[_] |= 2048), wf(d), d[q] = d[gn] = e, d[G] = n, d[We] = s || e && e[We], d[P] = a || e && e[P], d[qe] = c || e && e[qe] || null, d[ce] = i, d[ai] = mD(), d[ye] = l, d[ff] = u, d[te] = t.type == 2 ? e[te] : d, d
}

function rw(e, t, n) {
    let r = Ne(t, e),
        o = nw(n),
        i = e[We].rendererFactory,
        s = $c(e, Uc(e, o, null, Hp(n), r, t, null, i.createRenderer(r, n), null, null, null));
    return e[t.index] = s
}

function Hp(e) {
    let t = 16;
    return e.signals ? t = 4096 : e.onPush && (t = 64), t
}

function zp(e, t, n, r) {
    if (n === 0) return -1;
    let o = t.length;
    for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
    return o
}

function $c(e, t) {
    return e[qn] ? e[Bl][Ce] = t : e[qn] = t, e[Bl] = t, t
}

function jk(e = 1) {
    Gp(B(), M(), Je() + e, !1)
}

function Gp(e, t, n, r) {
    if (!r)
        if ((t[_] & 3) === 3) {
            let i = e.preOrderCheckHooks;
            i !== null && mo(t, i, n)
        } else {
            let i = e.preOrderHooks;
            i !== null && yo(t, i, 0, n)
        }
    St(n)
}
var Di = function(e) {
    return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e
}(Di || {});

function Ta(e, t, n, r) {
    let o = x(null);
    try {
        let [i, s, a] = e.inputs[n], c = null;
        (s & Di.SignalBased) !== 0 && (c = t[i][oe]), c !== null && c.transformFn !== void 0 ? r = c.transformFn(r) : a !== null && (r = a.call(t, r)), e.setInput !== null ? e.setInput(t, c, r, n, i) : hf(t, c, i, r)
    } finally {
        x(o)
    }
}

function qp(e, t, n, r, o) {
    let i = Je(),
        s = r & 2;
    try {
        St(-1), s && t.length > j && Gp(e, t, j, !1), F(s ? 2 : 0, o), n(r, o)
    } finally {
        St(i), F(s ? 3 : 1, o)
    }
}

function Ei(e, t, n) {
    lw(e, t, n), (n.flags & 64) === 64 && dw(e, t, n)
}

function Hc(e, t, n = Ne) {
    let r = t.localNames;
    if (r !== null) {
        let o = t.index + 1;
        for (let i = 0; i < r.length; i += 2) {
            let s = r[i + 1],
                a = s === -1 ? n(t, e) : e[s];
            e[o++] = a
        }
    }
}

function ow(e, t, n, r) {
    let i = r.get(gp, hp) || n === Qn.ShadowDom,
        s = e.selectRootElement(t, i);
    return iw(s), s
}

function iw(e) {
    Wp(e)
}
var Wp = () => null;

function sw(e) {
    op(e) ? Up(e) : aE(e)
}

function aw() {
    Wp = sw
}

function cw(e) {
    return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e
}

function wi(e, t, n, r, o, i, s, a) {
    if (!a && qc(t, e, n, r, o)) {
        kt(t) && uw(n, t.index);
        return
    }
    if (t.type & 3) {
        let c = Ne(t, n);
        r = cw(r), o = s != null ? s(o, t.value || "", r) : o, i.setProperty(c, r, o)
    } else t.type & 12
}

function uw(e, t) {
    let n = Fe(t, e);
    n[_] & 16 || (n[_] |= 64)
}

function lw(e, t, n) {
    let r = n.directiveStart,
        o = n.directiveEnd;
    kt(n) && rw(t, n, e.data[r + n.componentOffset]), e.firstCreatePass || ko(n, t);
    let i = n.initialInputs;
    for (let s = r; s < o; s++) {
        let a = e.data[s],
            c = Zn(t, e, s, n);
        if (En(c, t), i !== null && gw(t, s - r, c, a, n, i), ke(a)) {
            let u = Fe(n.index, t);
            u[G] = Zn(t, e, s, n)
        }
    }
}

function dw(e, t, n) {
    let r = n.directiveStart,
        o = n.directiveEnd,
        i = n.index,
        s = Rv();
    try {
        St(i);
        for (let a = r; a < o; a++) {
            let c = e.data[a],
                u = t[a];
            ra(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && fw(c, u)
        }
    } finally {
        St(-1), ra(s)
    }
}

function fw(e, t) {
    e.hostBindings !== null && e.hostBindings(1, t)
}

function zc(e, t) {
    let n = e.directiveRegistry,
        r = null;
    if (n)
        for (let o = 0; o < n.length; o++) {
            let i = n[o];
            Lp(t, i.selectors, !1) && (r ? ? = [], ke(i) ? r.unshift(i) : r.push(i))
        }
    return r
}

function pw(e, t, n, r, o, i) {
    let s = Ne(e, t);
    hw(t[P], s, i, e.value, n, r, o)
}

function hw(e, t, n, r, o, i, s) {
    if (i == null) e.removeAttribute(t, o, n);
    else {
        let a = s == null ? It(i) : s(i, r || "", o);
        e.setAttribute(t, o, a, n)
    }
}

function gw(e, t, n, r, o, i) {
    let s = i[t];
    if (s !== null)
        for (let a = 0; a < s.length; a += 2) {
            let c = s[a],
                u = s[a + 1];
            Ta(r, n, c, u)
        }
}

function Gc(e, t) {
    let n = e[qe],
        r = n ? n.get(at, null) : null;
    r && r.handleError(t)
}

function qc(e, t, n, r, o) {
    let i = e.inputs ? .[r],
        s = e.hostDirectiveInputs ? .[r],
        a = !1;
    if (s)
        for (let c = 0; c < s.length; c += 2) {
            let u = s[c],
                l = s[c + 1],
                d = t.data[u];
            Ta(d, n[u], l, o), a = !0
        }
    if (i)
        for (let c of i) {
            let u = n[c],
                l = t.data[c];
            Ta(l, u, r, o), a = !0
        }
    return a
}

function mw(e, t) {
    let n = Fe(t, e),
        r = n[C];
    yw(r, n);
    let o = n[le];
    o !== null && n[ye] === null && (n[ye] = Tp(o, n[qe])), F(18), Wc(r, n, n[G]), F(19, n[G])
}

function yw(e, t) {
    for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n])
}

function Wc(e, t, n) {
    Ic(t);
    try {
        let r = e.viewQuery;
        r !== null && ma(1, r, n);
        let o = e.template;
        o !== null && qp(e, t, o, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[Ze] ? .finishViewCreation(e), e.staticContentQueries && Mp(e, t), e.staticViewQueries && ma(2, e.viewQuery, n);
        let i = e.components;
        i !== null && vw(t, i)
    } catch (r) {
        throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), r
    } finally {
        t[_] &= -5, bc()
    }
}

function vw(e, t) {
    for (let n = 0; n < t.length; n++) mw(e, t[n])
}

function bn(e, t, n, r) {
    let o = x(null);
    try {
        let i = t.tView,
            a = e[_] & 4096 ? 4096 : 16,
            c = Uc(e, i, n, a, null, t, null, null, r ? .injector ? ? null, r ? .embeddedViewInjector ? ? null, r ? .dehydratedView ? ? null),
            u = e[t.index];
        c[Tt] = u;
        let l = e[Ze];
        return l !== null && (c[Ze] = l.createEmbeddedView(i)), Wc(i, c, n), c
    } finally {
        x(o)
    }
}

function At(e, t) {
    return !t || t.firstChild === null || Lo(e)
}
var Dw;

function Zc(e, t) {
    return Dw(e, t)
}
var Uo = function(e) {
    return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e
}(Uo || {});

function jt(e) {
    return (e.flags & 32) === 32
}

function en(e, t, n, r, o) {
    if (r != null) {
        let i, s = !1;
        Le(r) ? i = r : Te(r) && (s = !0, r = r[le]);
        let a = Me(r);
        e === 0 && n !== null ? o == null ? Bp(t, n, a) : Bo(t, n, a, o || null, !0) : e === 1 && n !== null ? Bo(t, n, a, o || null, !0) : e === 2 ? Vc(t, a, s) : e === 3 && t.destroyNode(a), i != null && Nw(t, e, i, n, o)
    }
}

function Ew(e, t) {
    Zp(e, t), t[le] = null, t[ce] = null
}

function ww(e, t, n, r, o, i) {
    r[le] = o, r[ce] = t, Ci(e, r, n, 1, o, i)
}

function Zp(e, t) {
    t[We].changeDetectionScheduler ? .notify(9), Ci(e, t, t[P], 2, null, null)
}

function Iw(e) {
    let t = e[qn];
    if (!t) return Ps(e[C], e);
    for (; t;) {
        let n = null;
        if (Te(t)) n = t[qn];
        else {
            let r = t[Q];
            r && (n = r)
        }
        if (!n) {
            for (; t && !t[Ce] && t !== e;) Te(t) && Ps(t[C], t), t = t[q];
            t === null && (t = e), Te(t) && Ps(t[C], t), n = t && t[Ce]
        }
        t = n
    }
}

function Yc(e, t) {
    let n = e[un],
        r = n.indexOf(t);
    n.splice(r, 1)
}

function Ii(e, t) {
    if (mn(t)) return;
    let n = t[P];
    n.destroyNode && Ci(e, t, n, 3, null, null), Iw(t)
}

function Ps(e, t) {
    if (mn(t)) return;
    let n = x(null);
    try {
        t[_] &= -129, t[_] |= 256, t[me] && jn(t[me]), Cw(e, t), bw(e, t), t[C].type === 1 && t[P].destroy();
        let r = t[Tt];
        if (r !== null && Le(t[q])) {
            r !== t[q] && Yc(r, t);
            let o = t[Ze];
            o !== null && o.detachView(e)
        }
        fa(t)
    } finally {
        x(n)
    }
}

function bw(e, t) {
    let n = e.cleanup,
        r = t[So];
    if (n !== null)
        for (let s = 0; s < n.length - 1; s += 2)
            if (typeof n[s] == "string") {
                let a = n[s + 3];
                a >= 0 ? r[a]() : r[-a].unsubscribe(), s += 2
            } else {
                let a = r[n[s + 1]];
                n[s].call(a)
            }
    r !== null && (t[So] = null);
    let o = t[it];
    if (o !== null) {
        t[it] = null;
        for (let s = 0; s < o.length; s++) {
            let a = o[s];
            a()
        }
    }
    let i = t[_t];
    if (i !== null) {
        t[_t] = null;
        for (let s of i) s.destroy()
    }
}

function Cw(e, t) {
    let n;
    if (e != null && (n = e.destroyHooks) != null)
        for (let r = 0; r < n.length; r += 2) {
            let o = t[n[r]];
            if (!(o instanceof Nt)) {
                let i = n[r + 1];
                if (Array.isArray(i))
                    for (let s = 0; s < i.length; s += 2) {
                        let a = o[i[s]],
                            c = i[s + 1];
                        F(4, a, c);
                        try {
                            c.call(a)
                        } finally {
                            F(5, a, c)
                        }
                    } else {
                        F(4, o, i);
                        try {
                            i.call(o)
                        } finally {
                            F(5, o, i)
                        }
                    }
            }
        }
}

function Yp(e, t, n) {
    return Tw(e, t.parent, n)
}

function Tw(e, t, n) {
    let r = t;
    for (; r !== null && r.type & 168;) t = r, r = t.parent;
    if (r === null) return n[le];
    if (kt(r)) {
        let {
            encapsulation: o
        } = e.data[r.directiveStart + r.componentOffset];
        if (o === Qn.None || o === Qn.Emulated) return null
    }
    return Ne(r, n)
}

function Qp(e, t, n) {
    return Mw(e, t, n)
}

function _w(e, t, n) {
    return e.type & 40 ? Ne(e, n) : null
}
var Mw = _w,
    pd;

function bi(e, t, n, r) {
    let o = Yp(e, r, t),
        i = t[P],
        s = r.parent || t[ce],
        a = Qp(s, r, t);
    if (o != null)
        if (Array.isArray(n))
            for (let c = 0; c < n.length; c++) fd(i, o, n[c], a, !1);
        else fd(i, o, n, a, !1);
    pd !== void 0 && pd(i, r, t, n, o)
}

function Hn(e, t) {
    if (t !== null) {
        let n = t.type;
        if (n & 3) return Ne(t, e);
        if (n & 4) return _a(-1, e[t.index]);
        if (n & 8) {
            let r = t.child;
            if (r !== null) return Hn(e, r); {
                let o = e[t.index];
                return Le(o) ? _a(-1, o) : Me(o)
            }
        } else {
            if (n & 128) return Hn(e, t.next);
            if (n & 32) return Zc(t, e)() || Me(e[t.index]); {
                let r = Kp(e, t);
                if (r !== null) {
                    if (Array.isArray(r)) return r[0];
                    let o = Mt(e[te]);
                    return Hn(o, r)
                } else return Hn(e, t.next)
            }
        }
    }
    return null
}

function Kp(e, t) {
    if (t !== null) {
        let r = e[te][ce],
            o = t.projection;
        return r.projection[o]
    }
    return null
}

function _a(e, t) {
    let n = Q + e + 1;
    if (n < t.length) {
        let r = t[n],
            o = r[C].firstChild;
        if (o !== null) return Hn(r, o)
    }
    return t[Qe]
}

function Qc(e, t, n, r, o, i, s) {
    for (; n != null;) {
        if (n.type === 128) {
            n = n.next;
            continue
        }
        let a = r[n.index],
            c = n.type;
        if (s && t === 0 && (a && En(Me(a), r), n.flags |= 2), !jt(n))
            if (c & 8) Qc(e, t, n.child, r, o, i, !1), en(t, e, o, a, i);
            else if (c & 32) {
            let u = Zc(n, r),
                l;
            for (; l = u();) en(t, e, o, l, i);
            en(t, e, o, a, i)
        } else c & 16 ? Jp(e, t, r, n, o, i) : en(t, e, o, a, i);
        n = s ? n.projectionNext : n.next
    }
}

function Ci(e, t, n, r, o, i) {
    Qc(n, r, e.firstChild, t, o, i, !1)
}

function Sw(e, t, n) {
    let r = t[P],
        o = Yp(e, n, t),
        i = n.parent || t[ce],
        s = Qp(i, n, t);
    Jp(r, 0, t, n, o, s)
}

function Jp(e, t, n, r, o, i) {
    let s = n[te],
        c = s[ce].projection[r.projection];
    if (Array.isArray(c))
        for (let u = 0; u < c.length; u++) {
            let l = c[u];
            en(t, e, o, l, i)
        } else {
            let u = c,
                l = s[q];
            Lo(r) && (u.flags |= 128), Qc(e, t, u, l, o, i, !0)
        }
}

function Nw(e, t, n, r, o) {
    let i = n[Qe],
        s = Me(n);
    i !== s && en(t, e, r, i, o);
    for (let a = Q; a < n.length; a++) {
        let c = n[a];
        Ci(c[C], c, e, t, r, i)
    }
}

function xw(e, t, n, r, o) {
    if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
    else {
        let i = r.indexOf("-") === -1 ? void 0 : Uo.DashCase;
        o == null ? e.removeStyle(n, r, i) : (typeof o == "string" && o.endsWith("!important") && (o = o.slice(0, -10), i |= Uo.Important), e.setStyle(n, r, o, i))
    }
}

function $o(e, t, n, r, o = !1) {
    for (; n !== null;) {
        if (n.type === 128) {
            n = o ? n.projectionNext : n.next;
            continue
        }
        let i = t[n.index];
        i !== null && r.push(Me(i)), Le(i) && Aw(i, r);
        let s = n.type;
        if (s & 8) $o(e, t, n.child, r);
        else if (s & 32) {
            let a = Zc(n, t),
                c;
            for (; c = a();) r.push(c)
        } else if (s & 16) {
            let a = Kp(t, n);
            if (Array.isArray(a)) r.push(...a);
            else {
                let c = Mt(t[te]);
                $o(c[C], c, a, r, !0)
            }
        }
        n = o ? n.projectionNext : n.next
    }
    return r
}

function Aw(e, t) {
    for (let n = Q; n < e.length; n++) {
        let r = e[n],
            o = r[C].firstChild;
        o !== null && $o(r[C], r, o, t)
    }
    e[Qe] !== e[le] && t.push(e[Qe])
}

function Xp(e) {
    if (e[nn] !== null) {
        for (let t of e[nn]) t.impl.addSequence(t);
        e[nn].length = 0
    }
}
var eh = [];

function Rw(e) {
    return e[me] ? ? Ow(e)
}

function Ow(e) {
    let t = eh.pop() ? ? Object.create(Fw);
    return t.lView = e, t
}

function kw(e) {
    e.lView[me] !== e && (e.lView = null, eh.push(e))
}
var Fw = ne(Z({}, Qt), {
    consumerIsAlwaysLive: !0,
    kind: "template",
    consumerMarkedDirty: e => {
        yn(e.lView)
    },
    consumerOnSignalRead() {
        this.lView[me] = this
    }
});

function Pw(e) {
    let t = e[me] ? ? Object.create(Lw);
    return t.lView = e, t
}
var Lw = ne(Z({}, Qt), {
    consumerIsAlwaysLive: !0,
    kind: "template",
    consumerMarkedDirty: e => {
        let t = Mt(e.lView);
        for (; t && !th(t[C]);) t = Mt(t);
        t && If(t)
    },
    consumerOnSignalRead() {
        this.lView[me] = this
    }
});

function th(e) {
    return e.type !== 2
}

function nh(e) {
    if (e[_t] === null) return;
    let t = !0;
    for (; t;) {
        let n = !1;
        for (let r of e[_t]) r.dirty && (n = !0, r.zone === null || Zone.current === r.zone ? r.run() : r.zone.run(() => r.run()));
        t = n && !!(e[_] & 8192)
    }
}
var jw = 100;

function rh(e, t = !0, n = 0) {
    let o = e[We].rendererFactory,
        i = !1;
    i || o.begin ? .();
    try {
        Vw(e, n)
    } catch (s) {
        throw t && Gc(e, s), s
    } finally {
        i || o.end ? .()
    }
}

function Vw(e, t) {
    let n = Mf();
    try {
        xo(!0), Ma(e, t);
        let r = 0;
        for (; ui(e);) {
            if (r === jw) throw new b(103, !1);
            r++, Ma(e, 1)
        }
    } finally {
        xo(n)
    }
}

function Bw(e, t, n, r) {
    if (mn(t)) return;
    let o = t[_],
        i = !1,
        s = !1;
    Ic(t);
    let a = !0,
        c = null,
        u = null;
    i || (th(e) ? (u = Rw(t), c = Ln(u)) : us() === null ? (a = !1, u = Pw(t), c = Ln(u)) : t[me] && (jn(t[me]), t[me] = null));
    try {
        wf(t), Nv(e.bindingStartIndex), n !== null && qp(e, t, n, 2, r);
        let l = (o & 3) === 3;
        if (!i)
            if (l) {
                let f = e.preOrderCheckHooks;
                f !== null && mo(t, f, null)
            } else {
                let f = e.preOrderHooks;
                f !== null && yo(t, f, 0, null), As(t, 0)
            }
        if (s || Uw(t), nh(t), oh(t, 0), e.contentQueries !== null && Mp(e, t), !i)
            if (l) {
                let f = e.contentCheckHooks;
                f !== null && mo(t, f)
            } else {
                let f = e.contentHooks;
                f !== null && yo(t, f, 1), As(t, 1)
            }
        Hw(e, t);
        let d = e.components;
        d !== null && sh(t, d, 0);
        let p = e.viewQuery;
        if (p !== null && ma(2, p, r), !i)
            if (l) {
                let f = e.viewCheckHooks;
                f !== null && mo(t, f)
            } else {
                let f = e.viewHooks;
                f !== null && yo(t, f, 2), As(t, 2)
            }
        if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[xs]) {
            for (let f of t[xs]) f();
            t[xs] = null
        }
        i || (Xp(t), t[_] &= -73)
    } catch (l) {
        throw i || yn(t), l
    } finally {
        u !== null && (Yr(u, c), a && kw(u)), bc()
    }
}

function oh(e, t) {
    for (let n = ap(e); n !== null; n = cp(n))
        for (let r = Q; r < n.length; r++) {
            let o = n[r];
            ih(o, t)
        }
}

function Uw(e) {
    for (let t = ap(e); t !== null; t = cp(t)) {
        if (!(t[_] & 2)) continue;
        let n = t[un];
        for (let r = 0; r < n.length; r++) {
            let o = n[r];
            If(o)
        }
    }
}

function $w(e, t, n) {
    F(18);
    let r = Fe(t, e);
    ih(r, n), F(19, r[G])
}

function ih(e, t) {
    gc(e) && Ma(e, t)
}

function Ma(e, t) {
    let r = e[C],
        o = e[_],
        i = e[me],
        s = !!(t === 0 && o & 16);
    if (s || = !!(o & 64 && t === 0), s || = !!(o & 1024), s || = !!(i ? .dirty && Qr(i)), s || = !1, i && (i.dirty = !1), e[_] &= -9217, s) Bw(r, e, r.template, e[G]);
    else if (o & 8192) {
        nh(e), oh(e, 1);
        let a = r.components;
        a !== null && sh(e, a, 1), Xp(e)
    }
}

function sh(e, t, n) {
    for (let r = 0; r < t.length; r++) $w(e, t[r], n)
}

function Hw(e, t) {
    let n = e.hostBindingOpCodes;
    if (n !== null) try {
        for (let r = 0; r < n.length; r++) {
            let o = n[r];
            if (o < 0) St(~o);
            else {
                let i = o,
                    s = n[++r],
                    a = n[++r];
                Av(s, i);
                let c = t[i];
                F(24, c), a(2, c), F(25, c)
            }
        }
    } finally {
        St(-1)
    }
}

function Ti(e, t) {
    let n = Mf() ? 64 : 1088;
    for (e[We].changeDetectionScheduler ? .notify(t); e;) {
        e[_] |= n;
        let r = Mt(e);
        if (Wn(e) && !r) return e;
        e = r
    }
    return null
}

function ah(e, t, n, r) {
    return [e, !0, 0, t, null, r, null, n, null, null]
}

function ch(e, t) {
    let n = Q + t;
    if (n < e.length) return e[n]
}

function Cn(e, t, n, r = !0) {
    let o = t[C];
    if (zw(o, t, e, n), r) {
        let s = _a(n, e),
            a = t[P],
            c = a.parentNode(e[Qe]);
        c !== null && ww(o, e[ce], a, t, c, s)
    }
    let i = t[ye];
    i !== null && i.firstChild !== null && (i.firstChild = null)
}

function Kc(e, t) {
    let n = Kn(e, t);
    return n !== void 0 && Ii(n[C], n), n
}

function Kn(e, t) {
    if (e.length <= Q) return;
    let n = Q + t,
        r = e[n];
    if (r) {
        let o = r[Tt];
        o !== null && o !== e && Yc(o, r), t > 0 && (e[n - 1][Ce] = r[Ce]);
        let i = _o(e, Q + t);
        Ew(r[C], r);
        let s = i[Ze];
        s !== null && s.detachView(i[C]), r[q] = null, r[Ce] = null, r[_] &= -129
    }
    return r
}

function zw(e, t, n, r) {
    let o = Q + r,
        i = n.length;
    r > 0 && (n[o - 1][Ce] = t), r < i - Q ? (t[Ce] = n[o], ef(n, Q + r, t)) : (n.push(t), t[Ce] = null), t[q] = n;
    let s = t[Tt];
    s !== null && n !== s && uh(s, t);
    let a = t[Ze];
    a !== null && a.insertView(e), ta(t), t[_] |= 128
}

function uh(e, t) {
    let n = e[un],
        r = t[q];
    if (Te(r)) e[_] |= 2;
    else {
        let o = r[q][te];
        t[te] !== o && (e[_] |= 2)
    }
    n === null ? e[un] = [t] : n.push(t)
}
var Jn = class {
    _lView;
    _cdRefInjectingView;
    notifyErrorHandler;
    _appRef = null;
    _attachedToViewContainer = !1;
    get rootNodes() {
        let t = this._lView,
            n = t[C];
        return $o(n, t, n.firstChild, [])
    }
    constructor(t, n, r = !0) {
        this._lView = t, this._cdRefInjectingView = n, this.notifyErrorHandler = r
    }
    get context() {
        return this._lView[G]
    }
    set context(t) {
        this._lView[G] = t
    }
    get destroyed() {
        return mn(this._lView)
    }
    destroy() {
        if (this._appRef) this._appRef.detachView(this);
        else if (this._attachedToViewContainer) {
            let t = this._lView[q];
            if (Le(t)) {
                let n = t[No],
                    r = n ? n.indexOf(this) : -1;
                r > -1 && (Kn(t, r), _o(n, r))
            }
            this._attachedToViewContainer = !1
        }
        Ii(this._lView[C], this._lView)
    }
    onDestroy(t) {
        bf(this._lView, t)
    }
    markForCheck() {
        Ti(this._cdRefInjectingView || this._lView, 4)
    }
    detach() {
        this._lView[_] &= -129
    }
    reattach() {
        ta(this._lView), this._lView[_] |= 128
    }
    detectChanges() {
        this._lView[_] |= 1024, rh(this._lView, this.notifyErrorHandler)
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
        if (this._appRef) throw new b(902, !1);
        this._attachedToViewContainer = !0
    }
    detachFromAppRef() {
        this._appRef = null;
        let t = Wn(this._lView),
            n = this._lView[Tt];
        n !== null && !t && Yc(n, this._lView), Zp(this._lView[C], this._lView)
    }
    attachToAppRef(t) {
        if (this._attachedToViewContainer) throw new b(902, !1);
        this._appRef = t;
        let n = Wn(this._lView),
            r = this._lView[Tt];
        r !== null && !n && uh(r, this._lView), ta(this._lView)
    }
};
var dn = (() => {
        class e {
            static __NG_ELEMENT_ID__ = Ww
        }
        return e
    })(),
    Gw = dn,
    qw = class extends Gw {
        _declarationLView;
        _declarationTContainer;
        elementRef;
        constructor(t, n, r) {
            super(), this._declarationLView = t, this._declarationTContainer = n, this.elementRef = r
        }
        get ssrId() {
            return this._declarationTContainer.tView ? .ssrId || null
        }
        createEmbeddedView(t, n) {
            return this.createEmbeddedViewImpl(t, n)
        }
        createEmbeddedViewImpl(t, n, r) {
            let o = bn(this._declarationLView, this._declarationTContainer, t, {
                embeddedViewInjector: n,
                dehydratedView: r
            });
            return new Jn(o)
        }
    };

function Ww() {
    return _i(K(), M())
}

function _i(e, t) {
    return e.type & 4 ? new qw(t, e, Dn(e, t)) : null
}

function ur(e, t, n, r, o) {
    let i = e.data[t];
    if (i === null) i = Zw(e, t, n, r, o), xv() && (i.flags |= 32);
    else if (i.type & 64) {
        i.type = n, i.value = r, i.attrs = o;
        let s = _v();
        i.injectorIndex = s === null ? -1 : s.injectorIndex
    }
    return Ft(i, !0), i
}

function Zw(e, t, n, r, o) {
    let i = _f(),
        s = yc(),
        a = s ? i : i && i.parent,
        c = e.data[t] = Qw(e, a, n, t, r, o);
    return Yw(e, c, i, s), c
}

function Yw(e, t, n, r) {
    e.firstChild === null && (e.firstChild = t), n !== null && (r ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n))
}

function Qw(e, t, n, r, o, i) {
    let s = t ? t.injectorIndex : -1,
        a = 0;
    return vn() && (a |= 128), {
        type: n,
        index: r,
        insertBeforeIndex: null,
        injectorIndex: s,
        directiveStart: -1,
        directiveEnd: -1,
        directiveStylingLast: -1,
        componentOffset: -1,
        propertyBindings: null,
        flags: a,
        providerIndexes: 0,
        value: o,
        attrs: i,
        mergedAttrs: null,
        localNames: null,
        initialInputs: null,
        inputs: null,
        hostDirectiveInputs: null,
        outputs: null,
        hostDirectiveOutputs: null,
        directiveToIndex: null,
        tView: null,
        next: null,
        prev: null,
        projectionNext: null,
        child: null,
        parent: t,
        projection: null,
        styles: null,
        stylesWithoutHost: null,
        residualStyles: void 0,
        classes: null,
        classesWithoutHost: null,
        residualClasses: void 0,
        classBindings: 0,
        styleBindings: 0
    }
}
var Kw = new RegExp(`^(\\d+)*(${dp}|${lp})*(.*)`);

function Jw(e) {
    let t = e.match(Kw),
        [n, r, o, i] = t,
        s = r ? parseInt(r, 10) : o,
        a = [];
    for (let [c, u, l] of i.matchAll(/(f|n)(\d*)/g)) {
        let d = parseInt(l, 10) || 1;
        a.push(u, d)
    }
    return [s, ...a]
}

function Xw(e) {
    return !e.prev && e.parent ? .type === 8
}

function Ls(e) {
    return e.index - j
}

function eI(e, t) {
    let n = e.i18nNodes;
    if (n) return n.get(t)
}

function Mi(e, t, n, r) {
    let o = Ls(r),
        i = eI(e, o);
    if (i === void 0) {
        let s = e.data[MD];
        if (s ? .[o]) i = nI(s[o], n);
        else if (t.firstChild === r) i = e.firstChild;
        else {
            let a = r.prev === null,
                c = r.prev ? ? r.parent;
            if (Xw(r)) {
                let u = Ls(r.parent);
                i = ga(e, u)
            } else {
                let u = Ne(c, n);
                if (a) i = u.firstChild;
                else {
                    let l = Ls(c),
                        d = ga(e, l);
                    if (c.type === 2 && d) {
                        let f = Oc(e, l) + 1;
                        i = Si(f, d)
                    } else i = u.nextSibling
                }
            }
        }
    }
    return i
}

function Si(e, t) {
    let n = t;
    for (let r = 0; r < e; r++) n = n.nextSibling;
    return n
}

function tI(e, t) {
    let n = e;
    for (let r = 0; r < t.length; r += 2) {
        let o = t[r],
            i = t[r + 1];
        for (let s = 0; s < i; s++) switch (o) {
            case ID:
                n = n.firstChild;
                break;
            case bD:
                n = n.nextSibling;
                break
        }
    }
    return n
}

function nI(e, t) {
    let [n, ...r] = Jw(e), o;
    if (n === lp) o = t[te][le];
    else if (n === dp) o = VE(t[te][le]);
    else {
        let i = Number(n);
        o = Me(t[i + j])
    }
    return tI(o, r)
}
var rI = !1;

function oI(e) {
    rI = e
}

function iI(e) {
    let t = e[ye];
    if (t) {
        let {
            i18nNodes: n,
            dehydratedIcuData: r
        } = t;
        if (n && r) {
            let o = e[P];
            for (let i of r.values()) sI(o, n, i)
        }
        t.i18nNodes = void 0, t.dehydratedIcuData = void 0
    }
}

function sI(e, t, n) {
    for (let r of n.node.cases[n.case]) {
        let o = t.get(r.index - j);
        o && Vc(e, o, !1)
    }
}

function lh(e) {
    let t = e[Ye] ? ? [],
        r = e[q][P],
        o = [];
    for (let i of t) i.data[SD] !== void 0 ? o.push(i) : dh(i, r);
    e[Ye] = o
}

function aI(e) {
    let {
        lContainer: t
    } = e, n = t[Ye];
    if (n === null) return;
    let o = t[q][P];
    for (let i of n) dh(i, o)
}

function dh(e, t) {
    let n = 0,
        r = e.firstChild;
    if (r) {
        let o = e.data[Vo];
        for (; n < o;) {
            let i = r.nextSibling;
            Vc(t, r, !1), r = i, n++
        }
    }
}

function Ni(e) {
    lh(e);
    let t = e[le];
    Te(t) && Ho(t);
    for (let n = Q; n < e.length; n++) Ho(e[n])
}

function Ho(e) {
    iI(e);
    let t = e[C];
    for (let n = j; n < t.bindingStartIndex; n++)
        if (Le(e[n])) {
            let r = e[n];
            Ni(r)
        } else Te(e[n]) && Ho(e[n])
}

function fh(e) {
    let t = e._views;
    for (let n of t) {
        let r = iE(n);
        r !== null && r[le] !== null && (Te(r) ? Ho(r) : Ni(r))
    }
}

function cI(e, t, n, r) {
    e !== null && (n.cleanup(t), Ni(e.lContainer), fh(r))
}

function uI(e, t) {
    let n = [];
    for (let r of t)
        for (let o = 0; o < (r[fp] ? ? 1); o++) {
            let i = {
                data: r,
                firstChild: null
            };
            r[Vo] > 0 && (i.firstChild = e, e = Si(r[Vo], e)), n.push(i)
        }
    return [e, n]
}
var ph = () => null;

function lI(e, t) {
    let n = e[Ye];
    return !t || n === null || n.length === 0 ? null : n[0].data[_D] === t ? n.shift() : (lh(e), null)
}

function dI() {
    ph = lI
}

function fn(e, t) {
    return ph(e, t)
}
var fI = class {},
    hh = class {},
    Sa = class {
        resolveComponentFactory(t) {
            throw Error(`No component factory found for ${se(t)}.`)
        }
    },
    xi = class {
        static NULL = new Sa
    },
    zo = class {},
    Jc = (() => {
        class e {
            destroyNode = null;
            static __NG_ELEMENT_ID__ = () => pI()
        }
        return e
    })();

function pI() {
    let e = M(),
        t = K(),
        n = Fe(t.index, e);
    return (Te(n) ? n : e)[P]
}
var hI = (() => {
    class e {
        static\ u0275prov = k({
            token: e,
            providedIn: "root",
            factory: () => null
        })
    }
    return e
})();

function Na(e, t, n) {
    let r = n ? e.styles : null,
        o = n ? e.classes : null,
        i = 0;
    if (t !== null)
        for (let s = 0; s < t.length; s++) {
            let a = t[s];
            if (typeof a == "number") i = a;
            else if (i == 1) o = Ws(o, a);
            else if (i == 2) {
                let c = a,
                    u = t[++s];
                r = Ws(r, c + ": " + u + ";")
            }
        }
    n ? e.styles = r : e.stylesWithoutHost = r, n ? e.classes = o : e.classesWithoutHost = o
}

function fe(e, t = R.Default) {
    let n = M();
    if (n === null) return U(e, t);
    let r = K();
    return Hf(r, n, X(e), t)
}

function Xc(e, t, n, r, o) {
    let i = r === null ? null : {
            "": -1
        },
        s = o(e, n);
    if (s !== null) {
        let a, c = null,
            u = null,
            l = mI(s);
        l === null ? a = s : [a, c, u] = l, DI(e, t, n, a, i, c, u)
    }
    i !== null && r !== null && gI(n, r, i)
}

function gI(e, t, n) {
    let r = e.localNames = [];
    for (let o = 0; o < t.length; o += 2) {
        let i = n[t[o + 1]];
        if (i == null) throw new b(-301, !1);
        r.push(t[o], i)
    }
}

function mI(e) {
    let t = null,
        n = !1;
    for (let s = 0; s < e.length; s++) {
        let a = e[s];
        if (s === 0 && ke(a) && (t = a), a.findHostDirectiveDefs !== null) {
            n = !0;
            break
        }
    }
    if (!n) return null;
    let r = null,
        o = null,
        i = null;
    for (let s of e) s.findHostDirectiveDefs !== null && (r ? ? = [], o ? ? = new Map, i ? ? = new Map, yI(s, r, i, o)), s === t && (r ? ? = [], r.push(s));
    return r !== null ? (r.push(...t === null ? e : e.slice(1)), [r, o, i]) : null
}

function yI(e, t, n, r) {
    let o = t.length;
    e.findHostDirectiveDefs(e, t, r), n.set(e, [o, t.length - 1])
}

function vI(e, t, n) {
    t.componentOffset = n, (e.components ? ? = []).push(t.index)
}

function DI(e, t, n, r, o, i, s) {
    let a = r.length,
        c = !1;
    for (let p = 0; p < a; p++) {
        let f = r[p];
        !c && ke(f) && (c = !0, vI(e, n, p)), ia(ko(n, t), e, f.type)
    }
    TI(n, e.data.length, a);
    for (let p = 0; p < a; p++) {
        let f = r[p];
        f.providersResolver && f.providersResolver(f)
    }
    let u = !1,
        l = !1,
        d = zp(e, t, a, null);
    a > 0 && (n.directiveToIndex = new Map);
    for (let p = 0; p < a; p++) {
        let f = r[p];
        if (n.mergedAttrs = ln(n.mergedAttrs, f.hostAttrs), wI(e, n, t, d, f), CI(d, f, o), s !== null && s.has(f)) {
            let [g, y] = s.get(f);
            n.directiveToIndex.set(f.type, [d, g + n.directiveStart, y + n.directiveStart])
        } else(i === null || !i.has(f)) && n.directiveToIndex.set(f.type, d);
        f.contentQueries !== null && (n.flags |= 4), (f.hostBindings !== null || f.hostAttrs !== null || f.hostVars !== 0) && (n.flags |= 64);
        let h = f.type.prototype;
        !u && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ? ? = []).push(n.index), u = !0), !l && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ? ? = []).push(n.index), l = !0), d++
    }
    EI(e, n, i)
}

function EI(e, t, n) {
    for (let r = t.directiveStart; r < t.directiveEnd; r++) {
        let o = e.data[r];
        if (n === null || !n.has(o)) hd(0, t, o, r), hd(1, t, o, r), md(t, r, !1);
        else {
            let i = n.get(o);
            gd(0, t, i, r), gd(1, t, i, r), md(t, r, !0)
        }
    }
}

function hd(e, t, n, r) {
    let o = e === 0 ? n.inputs : n.outputs;
    for (let i in o)
        if (o.hasOwnProperty(i)) {
            let s;
            e === 0 ? s = t.inputs ? ? = {} : s = t.outputs ? ? = {}, s[i] ? ? = [], s[i].push(r), gh(t, i)
        }
}

function gd(e, t, n, r) {
    let o = e === 0 ? n.inputs : n.outputs;
    for (let i in o)
        if (o.hasOwnProperty(i)) {
            let s = o[i],
                a;
            e === 0 ? a = t.hostDirectiveInputs ? ? = {} : a = t.hostDirectiveOutputs ? ? = {}, a[s] ? ? = [], a[s].push(r, i), gh(t, s)
        }
}

function gh(e, t) {
    t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16)
}

function md(e, t, n) {
    let {
        attrs: r,
        inputs: o,
        hostDirectiveInputs: i
    } = e;
    if (r === null || !n && o === null || n && i === null || Lc(e)) {
        e.initialInputs ? ? = [], e.initialInputs.push(null);
        return
    }
    let s = null,
        a = 0;
    for (; a < r.length;) {
        let c = r[a];
        if (c === 0) {
            a += 4;
            continue
        } else if (c === 5) {
            a += 2;
            continue
        } else if (typeof c == "number") break;
        if (!n && o.hasOwnProperty(c)) {
            let u = o[c];
            for (let l of u)
                if (l === t) {
                    s ? ? = [], s.push(c, r[a + 1]);
                    break
                }
        } else if (n && i.hasOwnProperty(c)) {
            let u = i[c];
            for (let l = 0; l < u.length; l += 2)
                if (u[l] === t) {
                    s ? ? = [], s.push(u[l + 1], r[a + 1]);
                    break
                }
        }
        a += 2
    }
    e.initialInputs ? ? = [], e.initialInputs.push(s)
}

function wI(e, t, n, r, o) {
    e.data[r] = o;
    let i = o.factory || (o.factory = bt(o.type, !0)),
        s = new Nt(i, ke(o), fe);
    e.blueprint[r] = s, n[r] = s, II(e, t, r, zp(e, n, o.hostVars, de), o)
}

function II(e, t, n, r, o) {
    let i = o.hostBindings;
    if (i) {
        let s = e.hostBindingOpCodes;
        s === null && (s = e.hostBindingOpCodes = []);
        let a = ~t.index;
        bI(s) != a && s.push(a), s.push(n, r, i)
    }
}

function bI(e) {
    let t = e.length;
    for (; t > 0;) {
        let n = e[--t];
        if (typeof n == "number" && n < 0) return n
    }
    return 0
}

function CI(e, t, n) {
    if (n) {
        if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
        ke(t) && (n[""] = e)
    }
}

function TI(e, t, n) {
    e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t
}

function mh(e, t, n, r, o, i, s, a) {
    let c = t.consts,
        u = st(c, s),
        l = ur(t, e, 2, r, u);
    return i && Xc(t, n, l, st(c, a), o), l.mergedAttrs = ln(l.mergedAttrs, l.attrs), l.attrs !== null && Na(l, l.attrs, !1), l.mergedAttrs !== null && Na(l, l.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, l), l
}

function yh(e, t) {
    Cc(e, t), pc(t) && e.queries.elementEnd(t)
}
var Go = class extends xi {
    ngModule;
    constructor(t) {
        super(), this.ngModule = t
    }
    resolveComponentFactory(t) {
        let n = Ge(t);
        return new Rt(n, this.ngModule)
    }
};

function _I(e) {
    return Object.keys(e).map(t => {
        let [n, r, o] = e[t], i = {
            propName: n,
            templateName: t,
            isSignal: (r & Di.SignalBased) !== 0
        };
        return o && (i.transform = o), i
    })
}

function MI(e) {
    return Object.keys(e).map(t => ({
        propName: e[t],
        templateName: t
    }))
}

function SI(e, t, n) {
    let r = t instanceof _e ? t : t ? .injector;
    return r && e.getStandaloneInjector !== null && (r = e.getStandaloneInjector(r) || r), r ? new on(n, r) : n
}

function NI(e) {
    let t = e.get(zo, null);
    if (t === null) throw new b(407, !1);
    let n = e.get(hI, null),
        r = e.get(xt, null);
    return {
        rendererFactory: t,
        sanitizer: n,
        changeDetectionScheduler: r
    }
}

function xI(e, t) {
    let n = (e.selectors[0][0] || "div").toLowerCase();
    return jc(t, n, n === "svg" ? Df : n === "math" ? hv : null)
}
var Rt = class extends hh {
        componentDef;
        ngModule;
        selector;
        componentType;
        ngContentSelectors;
        isBoundToModule;
        cachedInputs = null;
        cachedOutputs = null;
        get inputs() {
            return this.cachedInputs ? ? = _I(this.componentDef.inputs), this.cachedInputs
        }
        get outputs() {
            return this.cachedOutputs ? ? = MI(this.componentDef.outputs), this.cachedOutputs
        }
        constructor(t, n) {
            super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = QE(t.selectors), this.ngContentSelectors = t.ngContentSelectors ? ? [], this.isBoundToModule = !!n
        }
        create(t, n, r, o) {
            F(22);
            let i = x(null);
            try {
                let s = this.componentDef,
                    a = r ? ["ng-version", "19.2.4"] : KE(this.componentDef.selectors[0]),
                    c = Bc(0, null, null, 1, 0, null, null, null, null, [a], null),
                    u = SI(s, o || this.ngModule, t),
                    l = NI(u),
                    d = l.rendererFactory.createRenderer(null, s),
                    p = r ? ow(d, r, s.encapsulation, u) : xI(s, d),
                    f = Uc(null, c, null, 512 | Hp(s), null, null, l, d, u, null, Tp(p, u, !0));
                f[j] = p, Ic(f);
                let h = null;
                try {
                    let g = mh(j, c, f, "#host", () => [this.componentDef], !0, 0);
                    p && ($p(d, p, g), En(p, f)), Ei(c, f, g), kc(c, g, f), yh(c, g), n !== void 0 && AI(g, this.ngContentSelectors, n), h = Fe(g.index, f), f[G] = h[G], Wc(c, f, null)
                } catch (g) {
                    throw h !== null && fa(h), fa(f), g
                } finally {
                    F(23), bc()
                }
                return new xa(this.componentType, f)
            } finally {
                x(i)
            }
        }
    },
    xa = class extends fI {
        _rootLView;
        instance;
        hostView;
        changeDetectorRef;
        componentType;
        location;
        previousInputValues = null;
        _tNode;
        constructor(t, n) {
            super(), this._rootLView = n, this._tNode = nr(n[C], j), this.location = Dn(this._tNode, n), this.instance = Fe(this._tNode.index, n)[G], this.hostView = this.changeDetectorRef = new Jn(n, void 0, !1), this.componentType = t
        }
        setInput(t, n) {
            let r = this._tNode;
            if (this.previousInputValues ? ? = new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n)) return;
            let o = this._rootLView,
                i = qc(r, o[C], o, t, n);
            this.previousInputValues.set(t, n);
            let s = Fe(r.index, o);
            Ti(s, 1)
        }
        get injector() {
            return new wt(this._tNode, this._rootLView)
        }
        destroy() {
            this.hostView.destroy()
        }
        onDestroy(t) {
            this.hostView.onDestroy(t)
        }
    };

function AI(e, t, n) {
    let r = e.projection = [];
    for (let o = 0; o < t.length; o++) {
        let i = n[o];
        r.push(i != null && i.length ? Array.from(i) : null)
    }
}
var Tn = (() => {
    class e {
        static __NG_ELEMENT_ID__ = RI
    }
    return e
})();

function RI() {
    let e = K();
    return Dh(e, M())
}
var OI = Tn,
    vh = class extends OI {
        _lContainer;
        _hostTNode;
        _hostLView;
        constructor(t, n, r) {
            super(), this._lContainer = t, this._hostTNode = n, this._hostLView = r
        }
        get element() {
            return Dn(this._hostTNode, this._hostLView)
        }
        get injector() {
            return new wt(this._hostTNode, this._hostLView)
        }
        get parentInjector() {
            let t = Tc(this._hostTNode, this._hostLView);
            if (Lf(t)) {
                let n = Ro(t, this._hostLView),
                    r = Ao(t),
                    o = n[C].data[r + 8];
                return new wt(o, n)
            } else return new wt(null, this._hostLView)
        }
        clear() {
            for (; this.length > 0;) this.remove(this.length - 1)
        }
        get(t) {
            let n = yd(this._lContainer);
            return n !== null && n[t] || null
        }
        get length() {
            return this._lContainer.length - Q
        }
        createEmbeddedView(t, n, r) {
            let o, i;
            typeof r == "number" ? o = r : r != null && (o = r.index, i = r.injector);
            let s = fn(this._lContainer, t.ssrId),
                a = t.createEmbeddedViewImpl(n || {}, i, s);
            return this.insertImpl(a, o, At(this._hostTNode, s)), a
        }
        createComponent(t, n, r, o, i) {
            let s = t && !lv(t),
                a;
            if (s) a = n;
            else {
                let h = n || {};
                a = h.index, r = h.injector, o = h.projectableNodes, i = h.environmentInjector || h.ngModuleRef
            }
            let c = s ? t : new Rt(Ge(t)),
                u = r || this.parentInjector;
            if (!i && c.ngModule == null) {
                let g = (s ? u : this.parentInjector).get(_e, null);
                g && (i = g)
            }
            let l = Ge(c.componentType ? ? {}),
                d = fn(this._lContainer, l ? .id ? ? null),
                p = d ? .firstChild ? ? null,
                f = c.create(u, o, p, i);
            return this.insertImpl(f.hostView, a, At(this._hostTNode, d)), f
        }
        insert(t, n) {
            return this.insertImpl(t, n, !0)
        }
        insertImpl(t, n, r) {
            let o = t._lView;
            if (mv(o)) {
                let a = this.indexOf(t);
                if (a !== -1) this.detach(a);
                else {
                    let c = o[q],
                        u = new vh(c, c[ce], c[q]);
                    u.detach(u.indexOf(t))
                }
            }
            let i = this._adjustIndex(n),
                s = this._lContainer;
            return Cn(s, o, i, r), t.attachToViewContainerRef(), ef(js(s), i, t), t
        }
        move(t, n) {
            return this.insert(t, n)
        }
        indexOf(t) {
            let n = yd(this._lContainer);
            return n !== null ? n.indexOf(t) : -1
        }
        remove(t) {
            let n = this._adjustIndex(t, -1),
                r = Kn(this._lContainer, n);
            r && (_o(js(this._lContainer), n), Ii(r[C], r))
        }
        detach(t) {
            let n = this._adjustIndex(t, -1),
                r = Kn(this._lContainer, n);
            return r && _o(js(this._lContainer), n) != null ? new Jn(r) : null
        }
        _adjustIndex(t, n = 0) {
            return t ? ? this.length + n
        }
    };

function yd(e) {
    return e[No]
}

function js(e) {
    return e[No] || (e[No] = [])
}

function Dh(e, t) {
    let n, r = t[e.index];
    return Le(r) ? n = r : (n = ah(r, t, null, e), t[e.index] = n, $c(t, n)), Eh(n, t, e, r), new vh(n, e, t)
}

function kI(e, t) {
    let n = e[P],
        r = n.createComment(""),
        o = Ne(t, e),
        i = n.parentNode(o);
    return Bo(n, i, r, n.nextSibling(o), !1), r
}
var Eh = wh,
    eu = () => !1;

function FI(e, t, n) {
    return eu(e, t, n)
}

function wh(e, t, n, r) {
    if (e[Qe]) return;
    let o;
    n.type & 8 ? o = Me(r) : o = kI(t, n), e[Qe] = o
}

function PI(e, t, n) {
    if (e[Qe] && e[Ye]) return !0;
    let r = n[ye],
        o = t.index - j;
    if (!r || hD(t) || ar(r, o)) return !1;
    let s = ga(r, o),
        a = r.data[Nc] ? .[o],
        [c, u] = uI(s, a);
    return e[Qe] = c, e[Ye] = u, !0
}

function LI(e, t, n, r) {
    eu(e, n, t) || wh(e, t, n, r)
}

function jI() {
    Eh = LI, eu = PI
}
var Aa = class e {
        queryList;
        matches = null;
        constructor(t) {
            this.queryList = t
        }
        clone() {
            return new e(this.queryList)
        }
        setDirty() {
            this.queryList.setDirty()
        }
    },
    Ra = class e {
        queries;
        constructor(t = []) {
            this.queries = t
        }
        createEmbeddedView(t) {
            let n = t.queries;
            if (n !== null) {
                let r = t.contentQueries !== null ? t.contentQueries[0] : n.length,
                    o = [];
                for (let i = 0; i < r; i++) {
                    let s = n.getByIndex(i),
                        a = this.queries[s.indexInDeclarationView];
                    o.push(a.clone())
                }
                return new e(o)
            }
            return null
        }
        insertView(t) {
            this.dirtyQueriesWithMatches(t)
        }
        detachView(t) {
            this.dirtyQueriesWithMatches(t)
        }
        finishViewCreation(t) {
            this.dirtyQueriesWithMatches(t)
        }
        dirtyQueriesWithMatches(t) {
            for (let n = 0; n < this.queries.length; n++) nu(t, n).matches !== null && this.queries[n].setDirty()
        }
    },
    qo = class {
        flags;
        read;
        predicate;
        constructor(t, n, r = null) {
            this.flags = n, this.read = r, typeof t == "string" ? this.predicate = zI(t) : this.predicate = t
        }
    },
    Oa = class e {
        queries;
        constructor(t = []) {
            this.queries = t
        }
        elementStart(t, n) {
            for (let r = 0; r < this.queries.length; r++) this.queries[r].elementStart(t, n)
        }
        elementEnd(t) {
            for (let n = 0; n < this.queries.length; n++) this.queries[n].elementEnd(t)
        }
        embeddedTView(t) {
            let n = null;
            for (let r = 0; r < this.length; r++) {
                let o = n !== null ? n.length : 0,
                    i = this.getByIndex(r).embeddedTView(t, o);
                i && (i.indexInDeclarationView = r, n !== null ? n.push(i) : n = [i])
            }
            return n !== null ? new e(n) : null
        }
        template(t, n) {
            for (let r = 0; r < this.queries.length; r++) this.queries[r].template(t, n)
        }
        getByIndex(t) {
            return this.queries[t]
        }
        get length() {
            return this.queries.length
        }
        track(t) {
            this.queries.push(t)
        }
    },
    ka = class e {
        metadata;
        matches = null;
        indexInDeclarationView = -1;
        crossesNgTemplate = !1;
        _declarationNodeIndex;
        _appliesToNextNode = !0;
        constructor(t, n = -1) {
            this.metadata = t, this._declarationNodeIndex = n
        }
        elementStart(t, n) {
            this.isApplyingToNode(n) && this.matchTNode(t, n)
        }
        elementEnd(t) {
            this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
        }
        template(t, n) {
            this.elementStart(t, n)
        }
        embeddedTView(t, n) {
            return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null
        }
        isApplyingToNode(t) {
            if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
                let n = this._declarationNodeIndex,
                    r = t.parent;
                for (; r !== null && r.type & 8 && r.index !== n;) r = r.parent;
                return n === (r !== null ? r.index : -1)
            }
            return this._appliesToNextNode
        }
        matchTNode(t, n) {
            let r = this.metadata.predicate;
            if (Array.isArray(r))
                for (let o = 0; o < r.length; o++) {
                    let i = r[o];
                    this.matchTNodeWithReadOption(t, n, VI(n, i)), this.matchTNodeWithReadOption(t, n, vo(n, t, i, !1, !1))
                } else r === dn ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, vo(n, t, r, !1, !1))
        }
        matchTNodeWithReadOption(t, n, r) {
            if (r !== null) {
                let o = this.metadata.read;
                if (o !== null)
                    if (o === Lt || o === Tn || o === dn && n.type & 4) this.addMatch(n.index, -2);
                    else {
                        let i = vo(n, t, o, !1, !1);
                        i !== null && this.addMatch(n.index, i)
                    }
                else this.addMatch(n.index, r)
            }
        }
        addMatch(t, n) {
            this.matches === null ? this.matches = [t, n] : this.matches.push(t, n)
        }
    };

function VI(e, t) {
    let n = e.localNames;
    if (n !== null) {
        for (let r = 0; r < n.length; r += 2)
            if (n[r] === t) return n[r + 1]
    }
    return null
}

function BI(e, t) {
    return e.type & 11 ? Dn(e, t) : e.type & 4 ? _i(e, t) : null
}

function UI(e, t, n, r) {
    return n === -1 ? BI(t, e) : n === -2 ? $I(e, t, r) : Zn(e, e[C], n, t)
}

function $I(e, t, n) {
    if (n === Lt) return Dn(t, e);
    if (n === dn) return _i(t, e);
    if (n === Tn) return Dh(t, e)
}

function Ih(e, t, n, r) {
    let o = t[Ze].queries[r];
    if (o.matches === null) {
        let i = e.data,
            s = n.matches,
            a = [];
        for (let c = 0; s !== null && c < s.length; c += 2) {
            let u = s[c];
            if (u < 0) a.push(null);
            else {
                let l = i[u];
                a.push(UI(t, l, s[c + 1], n.metadata.read))
            }
        }
        o.matches = a
    }
    return o.matches
}

function Fa(e, t, n, r) {
    let o = e.queries.getByIndex(n),
        i = o.matches;
    if (i !== null) {
        let s = Ih(e, t, o, n);
        for (let a = 0; a < i.length; a += 2) {
            let c = i[a];
            if (c > 0) r.push(s[a / 2]);
            else {
                let u = i[a + 1],
                    l = t[-c];
                for (let d = Q; d < l.length; d++) {
                    let p = l[d];
                    p[Tt] === p[q] && Fa(p[C], p, u, r)
                }
                if (l[un] !== null) {
                    let d = l[un];
                    for (let p = 0; p < d.length; p++) {
                        let f = d[p];
                        Fa(f[C], f, u, r)
                    }
                }
            }
        }
    }
    return r
}

function tu(e, t) {
    return e[Ze].queries[t].queryList
}

function bh(e, t, n) {
    let r = new da((n & 4) === 4);
    return Dv(e, t, r, r.destroy), (t[Ze] ? ? = new Ra).queries.push(new Aa(r)) - 1
}

function Ch(e, t, n) {
    let r = B();
    return r.firstCreatePass && (Th(r, new qo(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)), bh(r, M(), t)
}

function HI(e, t, n, r) {
    let o = B();
    if (o.firstCreatePass) {
        let i = K();
        Th(o, new qo(t, n, r), i.index), GI(o, e), (n & 2) === 2 && (o.staticContentQueries = !0)
    }
    return bh(o, M(), n)
}

function zI(e) {
    return e.split(",").map(t => t.trim())
}

function Th(e, t, n) {
    e.queries === null && (e.queries = new Oa), e.queries.track(new ka(t, n))
}

function GI(e, t) {
    let n = e.contentQueries || (e.contentQueries = []),
        r = n.length ? n[n.length - 1] : -1;
    t !== r && n.push(e.queries.length - 1, t)
}

function nu(e, t) {
    return e.queries.getByIndex(t)
}

function _h(e, t) {
    let n = e[C],
        r = nu(n, t);
    return r.crossesNgTemplate ? Fa(n, e, t, []) : Ih(n, e, r, t)
}

function Mh(e, t, n) {
    let r, o = Xr(() => {
        r._dirtyCounter();
        let i = YI(r, e);
        if (t && i === void 0) throw new b(-951, !1);
        return i
    });
    return r = o[oe], r._dirtyCounter = tp(0), r._flatValue = void 0, o
}

function qI(e) {
    return Mh(!0, !1, e)
}

function WI(e) {
    return Mh(!0, !0, e)
}

function ZI(e, t) {
    let n = e[oe];
    n._lView = M(), n._queryIndex = t, n._queryList = tu(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(r => r + 1))
}

function YI(e, t) {
    let n = e._lView,
        r = e._queryIndex;
    if (n === void 0 || r === void 0 || n[_] & 4) return t ? void 0 : ee;
    let o = tu(n, r),
        i = _h(n, r);
    return o.reset(i, ep), t ? o.first : o._changesDetected || e._flatValue === void 0 ? e._flatValue = o.toArray() : e._flatValue
}

function vd(e, t) {
    return qI(t)
}

function QI(e, t) {
    return WI(t)
}
var Gk = (vd.required = QI, vd);
var pn = class {},
    KI = class {};
var Pa = class extends pn {
        ngModuleType;
        _parent;
        _bootstrapComponents = [];
        _r3Injector;
        instance;
        destroyCbs = [];
        componentFactoryResolver = new Go(this);
        constructor(t, n, r, o = !0) {
            super(), this.ngModuleType = t, this._parent = n;
            let i = rf(t);
            this._bootstrapComponents = Fp(i.bootstrap), this._r3Injector = Wf(t, n, [{
                provide: pn,
                useValue: this
            }, {
                provide: xi,
                useValue: this.componentFactoryResolver
            }, ...r], se(t), new Set(["environment"])), o && this.resolveInjectorInitializers()
        }
        resolveInjectorInitializers() {
            this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType)
        }
        get injector() {
            return this._r3Injector
        }
        destroy() {
            let t = this._r3Injector;
            !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null
        }
        onDestroy(t) {
            this.destroyCbs.push(t)
        }
    },
    La = class extends KI {
        moduleType;
        constructor(t) {
            super(), this.moduleType = t
        }
        create(t) {
            return new Pa(this.moduleType, t, [])
        }
    };
var Wo = class extends pn {
    injector;
    componentFactoryResolver = new Go(this);
    instance = null;
    constructor(t) {
        super();
        let n = new Gn([...t.providers, {
            provide: pn,
            useValue: this
        }, {
            provide: xi,
            useValue: this.componentFactoryResolver
        }], t.parent || oi(), t.debugName, new Set(["environment"]));
        this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers()
    }
    destroy() {
        this.injector.destroy()
    }
    onDestroy(t) {
        this.injector.onDestroy(t)
    }
};

function Sh(e, t, n = null) {
    return new Wo({
        providers: e,
        parent: t,
        debugName: n,
        runEnvironmentInitializers: !0
    }).injector
}
var JI = (() => {
    class e {
        _injector;
        cachedInjectors = new Map;
        constructor(n) {
            this._injector = n
        }
        getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n)) {
                let r = dc(!1, n.type),
                    o = r.length > 0 ? Sh([r], this._injector, `Standalone[${n.type.name}]`) : null;
                this.cachedInjectors.set(n, o)
            }
            return this.cachedInjectors.get(n)
        }
        ngOnDestroy() {
            try {
                for (let n of this.cachedInjectors.values()) n !== null && n.destroy()
            } finally {
                this.cachedInjectors.clear()
            }
        }
        static\ u0275prov = k({
            token: e,
            providedIn: "environment",
            factory: () => new e(U(_e))
        })
    }
    return e
})();

function Zk(e) {
    return er(() => {
        let t = Nh(e),
            n = ne(Z({}, t), {
                decls: e.decls,
                vars: e.vars,
                template: e.template,
                consts: e.consts || null,
                ngContentSelectors: e.ngContentSelectors,
                onPush: e.changeDetection === ip.OnPush,
                directiveDefs: null,
                pipeDefs: null,
                dependencies: t.standalone && e.dependencies || null,
                getStandaloneInjector: t.standalone ? o => o.get(JI).getOrCreateStandaloneInjector(n) : null,
                getExternalStyles: null,
                signals: e.signals ? ? !1,
                data: e.data || {},
                encapsulation: e.encapsulation || Qn.Emulated,
                styles: e.styles || ee,
                _: null,
                schemas: e.schemas || null,
                tView: null,
                id: ""
            });
        t.standalone && je("NgStandalone"), xh(n);
        let r = e.dependencies;
        return n.directiveDefs = Dd(r, !1), n.pipeDefs = Dd(r, !0), n.id = rb(n), n
    })
}

function XI(e) {
    return Ge(e) || of (e)
}

function eb(e) {
    return e !== null
}

function ru(e) {
    return er(() => ({
        type: e.type,
        bootstrap: e.bootstrap || ee,
        declarations: e.declarations || ee,
        imports: e.imports || ee,
        exports: e.exports || ee,
        transitiveCompileScopes: null,
        schemas: e.schemas || null,
        id: e.id || null
    }))
}

function tb(e, t) {
    if (e == null) return Ct;
    let n = {};
    for (let r in e)
        if (e.hasOwnProperty(r)) {
            let o = e[r],
                i, s, a, c;
            Array.isArray(o) ? (a = o[0], i = o[1], s = o[2] ? ? i, c = o[3] || null) : (i = o, s = o, a = Di.None, c = null), n[i] = [r, a, c], t[i] = s
        }
    return n
}

function nb(e) {
    if (e == null) return Ct;
    let t = {};
    for (let n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
    return t
}

function Ai(e) {
    return er(() => {
        let t = Nh(e);
        return xh(t), t
    })
}

function Ri(e) {
    return {
        type: e.type,
        name: e.name,
        factory: null,
        pure: e.pure !== !1,
        standalone: e.standalone ? ? !0,
        onDestroy: e.type.prototype.ngOnDestroy || null
    }
}

function Nh(e) {
    let t = {};
    return {
        type: e.type,
        providersResolver: null,
        factory: null,
        hostBindings: e.hostBindings || null,
        hostVars: e.hostVars || 0,
        hostAttrs: e.hostAttrs || null,
        contentQueries: e.contentQueries || null,
        declaredInputs: t,
        inputConfig: e.inputs || Ct,
        exportAs: e.exportAs || null,
        standalone: e.standalone ? ? !0,
        signals: e.signals === !0,
        selectors: e.selectors || ee,
        viewQuery: e.viewQuery || null,
        features: e.features || null,
        setInput: null,
        findHostDirectiveDefs: null,
        hostDirectives: null,
        inputs: tb(e.inputs, t),
        outputs: nb(e.outputs),
        debugInfo: null
    }
}

function xh(e) {
    e.features ? .forEach(t => t(e))
}

function Dd(e, t) {
    if (!e) return null;
    let n = t ? sf : XI;
    return () => (typeof e == "function" ? e() : e).map(r => n(r)).filter(eb)
}

function rb(e) {
    let t = 0,
        n = typeof e.consts == "function" ? "" : e.consts,
        r = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery];
    for (let i of r.join("|")) t = Math.imul(31, t) + i.charCodeAt(0) << 0;
    return t += 2147483648, "c" + t
}

function ob(e) {
    return Object.getPrototypeOf(e.prototype).constructor
}

function ib(e) {
    let t = ob(e.type),
        n = !0,
        r = [e];
    for (; t;) {
        let o;
        if (ke(e)) o = t.\u0275cmp || t.\u0275dir;
        else {
            if (t.\u0275cmp) throw new b(903, !1);
            o = t.\u0275dir
        }
        if (o) {
            if (n) {
                r.push(o);
                let s = e;
                s.inputs = Vs(e.inputs), s.declaredInputs = Vs(e.declaredInputs), s.outputs = Vs(e.outputs);
                let a = o.hostBindings;
                a && lb(e, a);
                let c = o.viewQuery,
                    u = o.contentQueries;
                if (c && cb(e, c), u && ub(e, u), sb(e, o), Ry(e.outputs, o.outputs), ke(o) && o.data.animation) {
                    let l = e.data;
                    l.animation = (l.animation || []).concat(o.data.animation)
                }
            }
            let i = o.features;
            if (i)
                for (let s = 0; s < i.length; s++) {
                    let a = i[s];
                    a && a.ngInherit && a(e), a === ib && (n = !1)
                }
        }
        t = Object.getPrototypeOf(t)
    }
    ab(r)
}

function sb(e, t) {
    for (let n in t.inputs) {
        if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
        let r = t.inputs[n];
        r !== void 0 && (e.inputs[n] = r, e.declaredInputs[n] = t.declaredInputs[n])
    }
}

function ab(e) {
    let t = 0,
        n = null;
    for (let r = e.length - 1; r >= 0; r--) {
        let o = e[r];
        o.hostVars = t += o.hostVars, o.hostAttrs = ln(o.hostAttrs, n = ln(n, o.hostAttrs))
    }
}

function Vs(e) {
    return e === Ct ? {} : e === ee ? [] : e
}

function cb(e, t) {
    let n = e.viewQuery;
    n ? e.viewQuery = (r, o) => {
        t(r, o), n(r, o)
    } : e.viewQuery = t
}

function ub(e, t) {
    let n = e.contentQueries;
    n ? e.contentQueries = (r, o, i) => {
        t(r, o, i), n(r, o, i)
    } : e.contentQueries = t
}

function lb(e, t) {
    let n = e.hostBindings;
    n ? e.hostBindings = (r, o) => {
        t(r, o), n(r, o)
    } : e.hostBindings = t
}

function Ah(e) {
    return ou(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1
}

function db(e, t) {
    if (Array.isArray(e))
        for (let n = 0; n < e.length; n++) t(e[n]);
    else {
        let n = e[Symbol.iterator](),
            r;
        for (; !(r = n.next()).done;) t(r.value)
    }
}

function ou(e) {
    return e !== null && (typeof e == "function" || typeof e == "object")
}

function Rh(e, t, n) {
    return e[t] = n
}

function ve(e, t, n) {
    let r = e[t];
    return Object.is(r, n) ? !1 : (e[t] = n, !0)
}

function Oh(e, t, n, r) {
    let o = ve(e, t, n);
    return ve(e, t + 1, r) || o
}

function fb(e, t, n, r, o, i, s, a, c) {
    let u = t.consts,
        l = ur(t, e, 4, s || null, a || null);
    mc() && Xc(t, n, l, st(u, c), zc), l.mergedAttrs = ln(l.mergedAttrs, l.attrs), Cc(t, l);
    let d = l.tView = Bc(2, l, r, o, i, t.directiveRegistry, t.pipeRegistry, null, t.schemas, u, null);
    return t.queries !== null && (t.queries.template(t, l), d.queries = t.queries.embeddedTView(l)), l
}

function Zo(e, t, n, r, o, i, s, a, c, u) {
    let l = n + j,
        d = t.firstCreatePass ? fb(l, t, e, r, o, i, s, a, c) : t.data[l];
    Ft(d, !1);
    let p = kh(t, e, d, n);
    di() && bi(t, e, p, d), En(p, e);
    let f = ah(p, e, p, d);
    return e[l] = f, $c(e, f), FI(f, d, e), ci(d) && Ei(t, e, d), c != null && Hc(e, d, u), d
}

function pb(e, t, n, r, o, i, s, a) {
    let c = M(),
        u = B(),
        l = st(u.consts, i);
    return Zo(c, u, e, t, n, r, o, l, s, a), pb
}
var kh = Fh;

function Fh(e, t, n, r) {
    return ct(!0), t[P].createComment("")
}

function hb(e, t, n, r) {
    let o = t[ye],
        i = !o || vn() || jt(n) || ar(o, r);
    if (ct(i), i) return Fh(e, t);
    let s = o.data[TD] ? .[r] ? ? null;
    s !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = s);
    let a = Mi(o, e, t, n);
    mi(o, r, a);
    let c = Oc(o, r);
    return Si(c, a)
}

function gb() {
    kh = hb
}
var mb = (() => {
    class e {
        cachedInjectors = new Map;
        getOrCreateInjector(n, r, o, i) {
            if (!this.cachedInjectors.has(n)) {
                let s = o.length > 0 ? Sh(o, r, i) : null;
                this.cachedInjectors.set(n, s)
            }
            return this.cachedInjectors.get(n)
        }
        ngOnDestroy() {
            try {
                for (let n of this.cachedInjectors.values()) n !== null && n.destroy()
            } finally {
                this.cachedInjectors.clear()
            }
        }
        static\ u0275prov = k({
            token: e,
            providedIn: "environment",
            factory: () => new e
        })
    }
    return e
})();
var yb = new T("");

function Bs(e, t, n) {
    return e.get(mb).getOrCreateInjector(t, e, n, "")
}

function vb(e, t, n) {
    if (e instanceof on) {
        let o = e.injector,
            i = e.parentInjector,
            s = Bs(i, t, n);
        return new on(o, s)
    }
    let r = e.get(_e);
    if (r !== e) {
        let o = Bs(r, t, n);
        return new on(e, o)
    }
    return Bs(e, t, n)
}

function tn(e, t, n, r = !1) {
    let o = n[q],
        i = o[C];
    if (mn(o)) return;
    let s = sr(o, t),
        a = s[pi],
        c = s[$D];
    if (!(c !== null && e < c) && Ed(a, e) && Ed(s[VD] ? ? -1, e)) {
        let u = hi(i, t),
            d = !r && !0 && (WD(u) !== null || nd(u, z.Loading) !== null || nd(u, z.Placeholder)) ? wb : Eb;
        try {
            d(e, s, n, t, o)
        } catch (p) {
            Gc(o, p)
        }
    }
}

function Db(e, t) {
    let n = e[Ye] ? .findIndex(o => o.data[ND] === t[pi]) ? ? -1;
    return {
        dehydratedView: n > -1 ? e[Ye][n] : null,
        dehydratedViewIx: n
    }
}

function Eb(e, t, n, r, o) {
    F(20);
    let i = qD(e, o, r);
    if (i !== null) {
        t[pi] = e;
        let s = o[C],
            a = i + j,
            c = nr(s, a),
            u = 0;
        Kc(n, u);
        let l;
        if (e === z.Complete) {
            let h = hi(s, r),
                g = h.providers;
            g && g.length > 0 && (l = vb(o[qe], h, g))
        }
        let {
            dehydratedView: d,
            dehydratedViewIx: p
        } = Db(n, t), f = bn(o, c, null, {
            injector: l,
            dehydratedView: d
        });
        if (Cn(n, f, u, At(c, d)), Ti(f, 2), p > -1 && n[Ye] ? .splice(p, 1), (e === z.Complete || e === z.Error) && Array.isArray(t[sn])) {
            for (let h of t[sn]) h();
            t[sn] = null
        }
    }
    F(21)
}

function Ed(e, t) {
    return e < t
}

function wd(e, t, n) {
    e.loadingPromise.then(() => {
        e.loadingState === ue.COMPLETE ? tn(z.Complete, t, n) : e.loadingState === ue.FAILED && tn(z.Error, t, n)
    })
}
var wb = null;
var Yk = (() => {
    class e {
        log(n) {
            console.log(n)
        }
        warn(n) {
            console.warn(n)
        }
        static\ u0275fac = function(r) {
            return new(r || e)
        };
        static\ u0275prov = k({
            token: e,
            factory: e.\u0275fac,
            providedIn: "platform"
        })
    }
    return e
})();
var Ib = new T("");
var Ph = (() => {
        class e {
            static\ u0275prov = k({
                token: e,
                providedIn: "root",
                factory: () => new ja
            })
        }
        return e
    })(),
    ja = class {
        queuedEffectCount = 0;
        queues = new Map;
        schedule(t) {
            this.enqueue(t)
        }
        remove(t) {
            let n = t.zone,
                r = this.queues.get(n);
            r.has(t) && (r.delete(t), this.queuedEffectCount--)
        }
        enqueue(t) {
            let n = t.zone;
            this.queues.has(n) || this.queues.set(n, new Set);
            let r = this.queues.get(n);
            r.has(t) || (this.queuedEffectCount++, r.add(t))
        }
        flush() {
            for (; this.queuedEffectCount > 0;)
                for (let [t, n] of this.queues) t === null ? this.flushQueue(n) : t.run(() => this.flushQueue(n))
        }
        flushQueue(t) {
            for (let n of t) t.delete(n), this.queuedEffectCount--, n.run()
        }
    };

function Oi(e) {
    return !!e && typeof e.then == "function"
}

function iu(e) {
    return !!e && typeof e.subscribe == "function"
}
var bb = new T("");
var Lh = (() => {
        class e {
            resolve;
            reject;
            initialized = !1;
            done = !1;
            donePromise = new Promise((n, r) => {
                this.resolve = n, this.reject = r
            });
            appInits = m(bb, {
                optional: !0
            }) ? ? [];
            injector = m(Pe);
            constructor() {}
            runInitializers() {
                if (this.initialized) return;
                let n = [];
                for (let o of this.appInits) {
                    let i = ii(this.injector, o);
                    if (Oi(i)) n.push(i);
                    else if (iu(i)) {
                        let s = new Promise((a, c) => {
                            i.subscribe({
                                complete: a,
                                error: c
                            })
                        });
                        n.push(s)
                    }
                }
                let r = () => {
                    this.done = !0, this.resolve()
                };
                Promise.all(n).then(() => {
                    r()
                }).catch(o => {
                    this.reject(o)
                }), n.length === 0 && r(), this.initialized = !0
            }
            static\ u0275fac = function(r) {
                return new(r || e)
            };
            static\ u0275prov = k({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
        return e
    })(),
    lr = new T("");

function Cb() {
    ps(() => {
        throw new b(600, !1)
    })
}

function Tb(e) {
    return e.isBoundToModule
}
var _b = 10;
var Se = (() => {
    class e {
        _runningTick = !1;
        _destroyed = !1;
        _destroyListeners = [];
        _views = [];
        internalErrorHandler = m(sD);
        afterRenderManager = m(yp);
        zonelessEnabled = m(Yf);
        rootEffectScheduler = m(Ph);
        dirtyFlags = 0;
        tracingSnapshot = null;
        externalTestViews = new Set;
        afterTick = new W;
        get allViews() {
            return [...this.externalTestViews.keys(), ...this._views]
        }
        get destroyed() {
            return this._destroyed
        }
        componentTypes = [];
        components = [];
        isStable = m(Xe).hasPendingTasks.pipe(J(n => !n));
        constructor() {
            m(fi, {
                optional: !0
            })
        }
        whenStable() {
            let n;
            return new Promise(r => {
                n = this.isStable.subscribe({
                    next: o => {
                        o && r()
                    }
                })
            }).finally(() => {
                n.unsubscribe()
            })
        }
        _injector = m(_e);
        _rendererFactory = null;
        get injector() {
            return this._injector
        }
        bootstrap(n, r) {
            F(10);
            let o = n instanceof hh;
            if (!this._injector.get(Lh).done) {
                let p = "";
                throw new b(405, p)
            }
            let s;
            o ? s = n : s = this._injector.get(xi).resolveComponentFactory(n), this.componentTypes.push(s.componentType);
            let a = Tb(s) ? void 0 : this._injector.get(pn),
                c = r || s.selector,
                u = s.create(Pe.NULL, [], c, a),
                l = u.location.nativeElement,
                d = u.injector.get(Ib, null);
            return d ? .registerApplication(l), u.onDestroy(() => {
                this.detachView(u.hostView), Eo(this.components, u), d ? .unregisterApplication(l)
            }), this._loadComponent(u), F(11, u), u
        }
        tick() {
            this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick()
        }
        _tick() {
            F(12), this.tracingSnapshot !== null ? this.tracingSnapshot.run(xc.CHANGE_DETECTION, this.tickImpl) : this.tickImpl()
        }
        tickImpl = () => {
            if (this._runningTick) throw new b(101, !1);
            let n = x(null);
            try {
                this._runningTick = !0, this.synchronize()
            } catch (r) {
                this.internalErrorHandler(r)
            } finally {
                this._runningTick = !1, this.tracingSnapshot ? .dispose(), this.tracingSnapshot = null, x(n), this.afterTick.next(), F(13)
            }
        };
        synchronize() {
            this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(zo, null, {
                optional: !0
            }));
            let n = 0;
            for (; this.dirtyFlags !== 0 && n++ < _b;) F(14), this.synchronizeOnce(), F(15)
        }
        synchronizeOnce() {
            if (this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()), this.dirtyFlags & 7) {
                let n = !!(this.dirtyFlags & 1);
                this.dirtyFlags &= -8, this.dirtyFlags |= 8;
                for (let {
                        _lView: r,
                        notifyErrorHandler: o
                    } of this.allViews) Mb(r, o, n, this.zonelessEnabled);
                if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23) return
            } else this._rendererFactory ? .begin ? .(), this._rendererFactory ? .end ? .();
            this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews()
        }
        syncDirtyFlagsWithViews() {
            if (this.allViews.some(({
                    _lView: n
                }) => ui(n))) {
                this.dirtyFlags |= 2;
                return
            } else this.dirtyFlags &= -8
        }
        attachView(n) {
            let r = n;
            this._views.push(r), r.attachToAppRef(this)
        }
        detachView(n) {
            let r = n;
            Eo(this._views, r), r.detachFromAppRef()
        }
        _loadComponent(n) {
            this.attachView(n.hostView), this.tick(), this.components.push(n), this._injector.get(lr, []).forEach(o => o(n))
        }
        ngOnDestroy() {
            if (!this._destroyed) try {
                this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy())
            } finally {
                this._destroyed = !0, this._views = [], this._destroyListeners = []
            }
        }
        onDestroy(n) {
            return this._destroyListeners.push(n), () => Eo(this._destroyListeners, n)
        }
        destroy() {
            if (this._destroyed) throw new b(406, !1);
            let n = this._injector;
            n.destroy && !n.destroyed && n.destroy()
        }
        get viewCount() {
            return this._views.length
        }
        static\ u0275fac = function(r) {
            return new(r || e)
        };
        static\ u0275prov = k({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
})();

function Eo(e, t) {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}

function Mb(e, t, n, r) {
    if (!n && !ui(e)) return;
    rh(e, t, n && !r ? 0 : 1)
}

function Sb(e, t, n) {
    let r = t[qe],
        o = t[C];
    if (e.loadingState !== ue.NOT_STARTED) return e.loadingPromise ? ? Promise.resolve();
    let i = sr(t, n),
        s = ZD(o, e);
    e.loadingState = ue.IN_PROGRESS, Do(1, i);
    let a = e.dependencyResolverFn,
        c = r.get(Xe),
        u = c.add();
    return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => {
        let d = !1,
            p = [],
            f = [];
        for (let h of l)
            if (h.status === "fulfilled") {
                let g = h.value,
                    y = Ge(g) || of (g);
                if (y) p.push(y);
                else {
                    let v = sf(g);
                    v && f.push(v)
                }
            } else {
                d = !0;
                break
            }
        if (e.loadingPromise = null, c.remove(u), d) {
            if (e.loadingState = ue.FAILED, e.errorTmplIndex === null) {
                let h = "",
                    g = new b(-750, !1);
                Gc(t, g)
            }
        } else {
            e.loadingState = ue.COMPLETE;
            let h = s.tView;
            if (p.length > 0) {
                h.directiveRegistry = rd(h.directiveRegistry, p);
                let g = p.map(v => v.type),
                    y = dc(!1, ...g);
                e.providers = y
            }
            f.length > 0 && (h.pipeRegistry = rd(h.pipeRegistry, f))
        }
    }), e.loadingPromise) : (e.loadingPromise = Promise.resolve().then(() => {
        e.loadingPromise = null, e.loadingState = ue.COMPLETE, c.remove(u)
    }), e.loadingPromise)
}

function Nb(e, t) {
    return t[qe].get(yb, null, {
        optional: !0
    }) ? .behavior !== Ep.Manual
}

function xb(e, t, n) {
    let r = t[C],
        o = t[n.index];
    if (!Nb(e, t)) return;
    let i = sr(t, n),
        s = hi(r, n);
    switch (zD(i), s.loadingState) {
        case ue.NOT_STARTED:
            tn(z.Loading, n, o), Sb(s, t, n), s.loadingState === ue.IN_PROGRESS && wd(s, n, o);
            break;
        case ue.IN_PROGRESS:
            tn(z.Loading, n, o), wd(s, n, o);
            break;
        case ue.COMPLETE:
            tn(z.Complete, n, o);
            break;
        case ue.FAILED:
            tn(z.Error, n, o);
            break;
        default:
    }
}

function Ab(e, t, n) {
    return Be(this, null, function*() {
        let r = e.get(Rc);
        if (r.hydrating.has(t)) return;
        let {
            parentBlockPromise: i,
            hydrationQueue: s
        } = dE(t, e);
        if (s.length === 0) return;
        i !== null && s.shift(), kb(r, s), i !== null && (yield i);
        let a = s[0];
        r.has(a) ? yield Id(e, s, n): r.awaitParentBlock(a, () => Be(this, null, function*() {
            return yield Id(e, s, n)
        }))
    })
}

function Id(e, t, n) {
    return Be(this, null, function*() {
        let r = e.get(Rc),
            o = r.hydrating,
            i = e.get(Xe),
            s = i.add();
        for (let c = 0; c < t.length; c++) {
            let u = t[c],
                l = r.get(u);
            if (l != null) {
                if (yield Pb(l), yield Fb(e), Rb(l)) {
                    aI(l), bd(t.slice(c), r);
                    break
                }
                o.get(u).resolve()
            } else {
                Ob(c, t, r), bd(t.slice(c), r);
                break
            }
        }
        let a = t[t.length - 1];
        yield o.get(a) ? .promise, i.remove(s), n && n(t), cI(r.get(a), t, r, e.get(Se))
    })
}

function Rb(e) {
    return sr(e.lView, e.tNode)[pi] === z.Error
}

function Ob(e, t, n) {
    let r = e - 1,
        o = r > -1 ? n.get(t[r]) : null;
    o && Ni(o.lContainer)
}

function bd(e, t) {
    let n = t.hydrating;
    for (let r in e) n.get(r) ? .reject();
    t.cleanup(e)
}

function kb(e, t) {
    for (let n of t) e.hydrating.set(n, Promise.withResolvers())
}

function Fb(e) {
    return new Promise(t => vp(t, {
        injector: e
    }))
}

function Pb(e) {
    return Be(this, null, function*() {
        let {
            tNode: t,
            lView: n
        } = e, r = sr(n, t);
        return new Promise(o => {
            Lb(r, o), xb(2, n, t)
        })
    })
}

function Lb(e, t) {
    Array.isArray(e[sn]) || (e[sn] = []), e[sn].push(t)
}

function jb(e, t, n, r) {
    let o = M(),
        i = Pt();
    if (ve(o, i, t)) {
        let s = B(),
            a = rr();
        pw(a, o, e, t, n, r)
    }
    return jb
}

function jh(e, t, n, r) {
    return ve(e, Pt(), n) ? t + It(n) + r : de
}

function Vb(e, t, n, r, o, i) {
    let s = Sv(),
        a = Oh(e, s, n, o);
    return Ec(2), a ? t + It(n) + r + It(o) + i : de
}

function po(e, t) {
    return e << 17 | t << 2
}

function Ot(e) {
    return e >> 17 & 32767
}

function Bb(e) {
    return (e & 2) == 2
}

function Ub(e, t) {
    return e & 131071 | t << 17
}

function Va(e) {
    return e | 2
}

function hn(e) {
    return (e & 131068) >> 2
}

function Us(e, t) {
    return e & -131069 | t << 2
}

function $b(e) {
    return (e & 1) === 1
}

function Ba(e) {
    return e | 1
}

function Hb(e, t, n, r, o, i) {
    let s = i ? t.classBindings : t.styleBindings,
        a = Ot(s),
        c = hn(s);
    e[r] = n;
    let u = !1,
        l;
    if (Array.isArray(n)) {
        let d = n;
        l = d[1], (l === null || tr(d, l) > 0) && (u = !0)
    } else l = n;
    if (o)
        if (c !== 0) {
            let p = Ot(e[a + 1]);
            e[r + 1] = po(p, a), p !== 0 && (e[p + 1] = Us(e[p + 1], r)), e[a + 1] = Ub(e[a + 1], r)
        } else e[r + 1] = po(a, 0), a !== 0 && (e[a + 1] = Us(e[a + 1], r)), a = r;
    else e[r + 1] = po(c, 0), a === 0 ? a = r : e[c + 1] = Us(e[c + 1], r), c = r;
    u && (e[r + 1] = Va(e[r + 1])), Cd(e, l, r, !0), Cd(e, l, r, !1), zb(t, l, e, r, i), s = po(a, c), i ? t.classBindings = s : t.styleBindings = s
}

function zb(e, t, n, r, o) {
    let i = o ? e.residualClasses : e.residualStyles;
    i != null && typeof t == "string" && tr(i, t) >= 0 && (n[r + 1] = Ba(n[r + 1]))
}

function Cd(e, t, n, r) {
    let o = e[n + 1],
        i = t === null,
        s = r ? Ot(o) : hn(o),
        a = !1;
    for (; s !== 0 && (a === !1 || i);) {
        let c = e[s],
            u = e[s + 1];
        Gb(c, t) && (a = !0, e[s + 1] = r ? Ba(u) : Va(u)), s = r ? Ot(u) : hn(u)
    }
    a && (e[n + 1] = r ? Va(o) : Ba(o))
}

function Gb(e, t) {
    return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? tr(e, t) >= 0 : !1
}
var be = {
    textEnd: 0,
    key: 0,
    keyEnd: 0,
    value: 0,
    valueEnd: 0
};

function qb(e) {
    return e.substring(be.key, be.keyEnd)
}

function Wb(e) {
    return Zb(e), Vh(e, Bh(e, 0, be.textEnd))
}

function Vh(e, t) {
    let n = be.textEnd;
    return n === t ? -1 : (t = be.keyEnd = Yb(e, be.key = t, n), Bh(e, t, n))
}

function Zb(e) {
    be.key = 0, be.keyEnd = 0, be.value = 0, be.valueEnd = 0, be.textEnd = e.length
}

function Bh(e, t, n) {
    for (; t < n && e.charCodeAt(t) <= 32;) t++;
    return t
}

function Yb(e, t, n) {
    for (; t < n && e.charCodeAt(t) > 32;) t++;
    return t
}

function Qb(e, t, n) {
    let r = M(),
        o = Pt();
    if (ve(r, o, t)) {
        let i = B(),
            s = rr();
        wi(i, s, r, e, t, r[P], n, !1)
    }
    return Qb
}

function Ua(e, t, n, r, o) {
    qc(t, e, n, o ? "class" : "style", r)
}

function Uh(e, t, n) {
    return $h(e, t, n, !1), Uh
}

function Kb(e, t) {
    return $h(e, t, null, !0), Kb
}

function Qk(e) {
    Xb(iC, Jb, e, !0)
}

function Jb(e, t) {
    for (let n = Wb(t); n >= 0; n = Vh(t, n)) uc(e, qb(t), !0)
}

function $h(e, t, n, r) {
    let o = M(),
        i = B(),
        s = Ec(2);
    if (i.firstUpdatePass && zh(i, e, s, r), t !== de && ve(o, s, t)) {
        let a = i.data[Je()];
        Gh(i, a, o, o[P], e, o[s + 1] = aC(t, n), r, s)
    }
}

function Xb(e, t, n, r) {
    let o = B(),
        i = Ec(2);
    o.firstUpdatePass && zh(o, null, i, r);
    let s = M();
    if (n !== de && ve(s, i, n)) {
        let a = o.data[Je()];
        if (qh(a, r) && !Hh(o, i)) {
            let c = r ? a.classesWithoutHost : a.stylesWithoutHost;
            c !== null && (n = Ws(c, n || "")), Ua(o, a, s, n, r)
        } else sC(o, a, s, s[P], s[i + 1], s[i + 1] = oC(e, t, n), r, i)
    }
}

function Hh(e, t) {
    return t >= e.expandoStartIndex
}

function zh(e, t, n, r) {
    let o = e.data;
    if (o[n + 1] === null) {
        let i = o[Je()],
            s = Hh(e, n);
        qh(i, r) && t === null && !s && (t = !1), t = eC(o, i, t, r), Hb(o, i, t, n, s, r)
    }
}

function eC(e, t, n, r) {
    let o = Ov(e),
        i = r ? t.residualClasses : t.residualStyles;
    if (o === null)(r ? t.classBindings : t.styleBindings) === 0 && (n = $s(null, e, t, n, r), n = Xn(n, t.attrs, r), i = null);
    else {
        let s = t.directiveStylingLast;
        if (s === -1 || e[s] !== o)
            if (n = $s(o, e, t, n, r), i === null) {
                let c = tC(e, t, r);
                c !== void 0 && Array.isArray(c) && (c = $s(null, e, t, c[1], r), c = Xn(c, t.attrs, r), nC(e, t, r, c))
            } else i = rC(e, t, r)
    }
    return i !== void 0 && (r ? t.residualClasses = i : t.residualStyles = i), n
}

function tC(e, t, n) {
    let r = n ? t.classBindings : t.styleBindings;
    if (hn(r) !== 0) return e[Ot(r)]
}

function nC(e, t, n, r) {
    let o = n ? t.classBindings : t.styleBindings;
    e[Ot(o)] = r
}

function rC(e, t, n) {
    let r, o = t.directiveEnd;
    for (let i = 1 + t.directiveStylingLast; i < o; i++) {
        let s = e[i].hostAttrs;
        r = Xn(r, s, n)
    }
    return Xn(r, t.attrs, n)
}

function $s(e, t, n, r, o) {
    let i = null,
        s = n.directiveEnd,
        a = n.directiveStylingLast;
    for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], r = Xn(r, i.hostAttrs, o), i !== e);) a++;
    return e !== null && (n.directiveStylingLast = a), r
}

function Xn(e, t, n) {
    let r = n ? 1 : 2,
        o = -1;
    if (t !== null)
        for (let i = 0; i < t.length; i++) {
            let s = t[i];
            typeof s == "number" ? o = s : o === r && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), uc(e, s, n ? !0 : t[++i]))
        }
    return e === void 0 ? null : e
}

function oC(e, t, n) {
    if (n == null || n === "") return ee;
    let r = [],
        o = In(n);
    if (Array.isArray(o))
        for (let i = 0; i < o.length; i++) e(r, o[i], !0);
    else if (typeof o == "object")
        for (let i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
    else typeof o == "string" && t(r, o);
    return r
}

function iC(e, t, n) {
    let r = String(t);
    r !== "" && !r.includes(" ") && uc(e, r, n)
}

function sC(e, t, n, r, o, i, s, a) {
    o === de && (o = ee);
    let c = 0,
        u = 0,
        l = 0 < o.length ? o[0] : null,
        d = 0 < i.length ? i[0] : null;
    for (; l !== null || d !== null;) {
        let p = c < o.length ? o[c + 1] : void 0,
            f = u < i.length ? i[u + 1] : void 0,
            h = null,
            g;
        l === d ? (c += 2, u += 2, p !== f && (h = d, g = f)) : d === null || l !== null && l < d ? (c += 2, h = l) : (u += 2, h = d, g = f), h !== null && Gh(e, t, n, r, h, g, s, a), l = c < o.length ? o[c] : null, d = u < i.length ? i[u] : null
    }
}

function Gh(e, t, n, r, o, i, s, a) {
    if (!(t.type & 3)) return;
    let c = e.data,
        u = c[a + 1],
        l = $b(u) ? Td(c, t, n, o, hn(u), s) : void 0;
    if (!Yo(l)) {
        Yo(i) || Bb(u) && (i = Td(c, null, n, o, a, s));
        let d = Ef(Je(), n);
        xw(r, s, d, o, i)
    }
}

function Td(e, t, n, r, o, i) {
    let s = t === null,
        a;
    for (; o > 0;) {
        let c = e[o],
            u = Array.isArray(c),
            l = u ? c[1] : c,
            d = l === null,
            p = n[o + 1];
        p === de && (p = d ? ee : void 0);
        let f = d ? Ss(p, r) : l === r ? p : void 0;
        if (u && !Yo(f) && (f = Ss(c, r)), Yo(f) && (a = f, s)) return a;
        let h = e[o + 1];
        o = s ? Ot(h) : hn(h)
    }
    if (t !== null) {
        let c = i ? t.residualClasses : t.residualStyles;
        c != null && (a = Ss(c, r))
    }
    return a
}

function Yo(e) {
    return e !== void 0
}

function aC(e, t) {
    return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = se(In(e)))), e
}

function qh(e, t) {
    return (e.flags & (t ? 8 : 16)) !== 0
}
var $a = class {
    destroy(t) {}
    updateValue(t, n) {}
    swap(t, n) {
        let r = Math.min(t, n),
            o = Math.max(t, n),
            i = this.detach(o);
        if (o - r > 1) {
            let s = this.detach(r);
            this.attach(r, i), this.attach(o, s)
        } else this.attach(r, i)
    }
    move(t, n) {
        this.attach(n, this.detach(t))
    }
};

function Hs(e, t, n, r, o) {
    return e === n && Object.is(t, r) ? 1 : Object.is(o(e, t), o(n, r)) ? -1 : 0
}

function cC(e, t, n) {
    let r, o, i = 0,
        s = e.length - 1,
        a = void 0;
    if (Array.isArray(t)) {
        let c = t.length - 1;
        for (; i <= s && i <= c;) {
            let u = e.at(i),
                l = t[i],
                d = Hs(i, u, i, l, n);
            if (d !== 0) {
                d < 0 && e.updateValue(i, l), i++;
                continue
            }
            let p = e.at(s),
                f = t[c],
                h = Hs(s, p, c, f, n);
            if (h !== 0) {
                h < 0 && e.updateValue(s, f), s--, c--;
                continue
            }
            let g = n(i, u),
                y = n(s, p),
                v = n(i, l);
            if (Object.is(v, y)) {
                let O = n(c, f);
                Object.is(O, g) ? (e.swap(i, s), e.updateValue(s, f), c--, s--) : e.move(s, i), e.updateValue(i, l), i++;
                continue
            }
            if (r ? ? = new Qo, o ? ? = Md(e, i, s, n), Ha(e, r, i, v)) e.updateValue(i, l), i++, s++;
            else if (o.has(v)) r.set(g, e.detach(i)), s--;
            else {
                let O = e.create(i, t[i]);
                e.attach(i, O), i++, s++
            }
        }
        for (; i <= c;) _d(e, r, n, i, t[i]), i++
    } else if (t != null) {
        let c = t[Symbol.iterator](),
            u = c.next();
        for (; !u.done && i <= s;) {
            let l = e.at(i),
                d = u.value,
                p = Hs(i, l, i, d, n);
            if (p !== 0) p < 0 && e.updateValue(i, d), i++, u = c.next();
            else {
                r ? ? = new Qo, o ? ? = Md(e, i, s, n);
                let f = n(i, d);
                if (Ha(e, r, i, f)) e.updateValue(i, d), i++, s++, u = c.next();
                else if (!o.has(f)) e.attach(i, e.create(i, d)), i++, s++, u = c.next();
                else {
                    let h = n(i, l);
                    r.set(h, e.detach(i)), s--
                }
            }
        }
        for (; !u.done;) _d(e, r, n, e.length, u.value), u = c.next()
    }
    for (; i <= s;) e.destroy(e.detach(s--));
    r ? .forEach(c => {
        e.destroy(c)
    })
}

function Ha(e, t, n, r) {
    return t !== void 0 && t.has(r) ? (e.attach(n, t.get(r)), t.delete(r), !0) : !1
}

function _d(e, t, n, r, o) {
    if (Ha(e, t, r, n(r, o))) e.updateValue(r, o);
    else {
        let i = e.create(r, o);
        e.attach(r, i)
    }
}

function Md(e, t, n, r) {
    let o = new Set;
    for (let i = t; i <= n; i++) o.add(r(i, e.at(i)));
    return o
}
var Qo = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) {
        return this.kvMap.has(t)
    }
    delete(t) {
        if (!this.has(t)) return !1;
        let n = this.kvMap.get(t);
        return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0
    }
    get(t) {
        return this.kvMap.get(t)
    }
    set(t, n) {
        if (this.kvMap.has(t)) {
            let r = this.kvMap.get(t);
            this._vMap === void 0 && (this._vMap = new Map);
            let o = this._vMap;
            for (; o.has(r);) r = o.get(r);
            o.set(r, n)
        } else this.kvMap.set(t, n)
    }
    forEach(t) {
        for (let [n, r] of this.kvMap)
            if (t(r, n), this._vMap !== void 0) {
                let o = this._vMap;
                for (; o.has(r);) r = o.get(r), t(r, n)
            }
    }
};

function Kk(e, t) {
    je("NgControlFlow");
    let n = M(),
        r = Pt(),
        o = n[r] !== de ? n[r] : -1,
        i = o !== -1 ? Ko(n, j + o) : void 0,
        s = 0;
    if (ve(n, r, e)) {
        let a = x(null);
        try {
            if (i !== void 0 && Kc(i, s), e !== -1) {
                let c = j + e,
                    u = Ko(n, c),
                    l = Wa(n[C], c),
                    d = fn(u, l.tView.ssrId),
                    p = bn(n, l, t, {
                        dehydratedView: d
                    });
                Cn(u, p, s, At(l, d))
            }
        } finally {
            x(a)
        }
    } else if (i !== void 0) {
        let a = ch(i, s);
        a !== void 0 && (a[G] = t)
    }
}
var za = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, r) {
        this.lContainer = t, this.$implicit = n, this.$index = r
    }
    get $count() {
        return this.lContainer.length - Q
    }
};

function Jk(e, t) {
    return t
}
var Ga = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, r) {
        this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = r
    }
};

function Xk(e, t, n, r, o, i, s, a, c, u, l, d, p) {
    je("NgControlFlow");
    let f = M(),
        h = B(),
        g = c !== void 0,
        y = M(),
        v = a ? s.bind(y[te][G]) : s,
        O = new Ga(g, v);
    y[j + e] = O, Zo(f, h, e + 1, t, n, r, o, st(h.consts, i)), g && Zo(f, h, e + 2, c, u, l, d, st(h.consts, p))
}
var qa = class extends $a {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, r) {
        super(), this.lContainer = t, this.hostLView = n, this.templateTNode = r
    }
    get length() {
        return this.lContainer.length - Q
    }
    at(t) {
        return this.getLView(t)[G].$implicit
    }
    attach(t, n) {
        let r = n[ye];
        this.needsIndexUpdate || = t !== this.length, Cn(this.lContainer, n, t, At(this.templateTNode, r))
    }
    detach(t) {
        return this.needsIndexUpdate || = t !== this.length - 1, uC(this.lContainer, t)
    }
    create(t, n) {
        let r = fn(this.lContainer, this.templateTNode.tView.ssrId),
            o = bn(this.hostLView, this.templateTNode, new za(this.lContainer, n, t), {
                dehydratedView: r
            });
        return this.operationsCounter ? .recordCreate(), o
    }
    destroy(t) {
        Ii(t[C], t), this.operationsCounter ? .recordDestroy()
    }
    updateValue(t, n) {
        this.getLView(t)[G].$implicit = n
    }
    reset() {
        this.needsIndexUpdate = !1, this.operationsCounter ? .reset()
    }
    updateIndexes() {
        if (this.needsIndexUpdate)
            for (let t = 0; t < this.length; t++) this.getLView(t)[G].$index = t
    }
    getLView(t) {
        return lC(this.lContainer, t)
    }
};

function eF(e) {
    let t = x(null),
        n = Je();
    try {
        let r = M(),
            o = r[C],
            i = r[n],
            s = n + 1,
            a = Ko(r, s);
        if (i.liveCollection === void 0) {
            let u = Wa(o, s);
            i.liveCollection = new qa(a, r, u)
        } else i.liveCollection.reset();
        let c = i.liveCollection;
        if (cC(c, e, i.trackByFn), c.updateIndexes(), i.hasEmptyBlock) {
            let u = Pt(),
                l = c.length === 0;
            if (ve(r, u, l)) {
                let d = n + 2,
                    p = Ko(r, d);
                if (l) {
                    let f = Wa(o, d),
                        h = fn(p, f.tView.ssrId),
                        g = bn(r, f, void 0, {
                            dehydratedView: h
                        });
                    Cn(p, g, 0, At(f, h))
                } else Kc(p, 0)
            }
        }
    } finally {
        x(t)
    }
}

function Ko(e, t) {
    return e[t]
}

function uC(e, t) {
    return Kn(e, t)
}

function lC(e, t) {
    return ch(e, t)
}

function Wa(e, t) {
    return nr(e, t)
}

function Wh(e, t, n, r) {
    let o = M(),
        i = B(),
        s = j + e,
        a = o[P],
        c = i.firstCreatePass ? mh(s, i, o, t, zc, mc(), n, r) : i.data[s],
        u = Yh(i, o, c, a, t, e);
    o[s] = u;
    let l = ci(c);
    return Ft(c, !0), $p(a, u, c), !jt(c) && di() && bi(i, o, u, c), (Ev() === 0 || l) && En(u, o), wv(), l && (Ei(i, o, c), kc(i, c, o)), r !== null && Hc(o, c), Wh
}

function Zh() {
    let e = K();
    yc() ? vc() : (e = e.parent, Ft(e, !1));
    let t = e;
    bv(t) && Tv(), Iv();
    let n = B();
    return n.firstCreatePass && yh(n, t), t.classesWithoutHost != null && Vv(t) && Ua(n, t, M(), t.classesWithoutHost, !0), t.stylesWithoutHost != null && Bv(t) && Ua(n, t, M(), t.stylesWithoutHost, !1), Zh
}

function dC(e, t, n, r) {
    return Wh(e, t, n, r), Zh(), dC
}
var Yh = (e, t, n, r, o, i) => (ct(!0), jc(r, o, Of()));

function fC(e, t, n, r, o, i) {
    let s = t[ye],
        a = !s || vn() || jt(n) || ar(s, i);
    if (ct(a), a) return jc(r, o, Of());
    let c = Mi(s, e, t, n);
    return _p(s, i) && mi(s, i, c.nextSibling), s && (rp(n) || op(c)) && kt(n) && (Cv(n), Up(c)), c
}

function pC() {
    Yh = fC
}

function hC(e, t, n, r, o) {
    let i = t.consts,
        s = st(i, r),
        a = ur(t, e, 8, "ng-container", s);
    s !== null && Na(a, s, !0);
    let c = st(i, o);
    return mc() && Xc(t, n, a, c, zc), a.mergedAttrs = ln(a.mergedAttrs, a.attrs), t.queries !== null && t.queries.elementStart(t, a), a
}

function Qh(e, t, n) {
    let r = M(),
        o = B(),
        i = e + j,
        s = o.firstCreatePass ? hC(i, o, r, t, n) : o.data[i];
    Ft(s, !0);
    let a = Jh(o, r, s, e);
    return r[i] = a, di() && bi(o, r, a, s), En(a, r), ci(s) && (Ei(o, r, s), kc(o, s, r)), n != null && Hc(r, s), Qh
}

function Kh() {
    let e = K(),
        t = B();
    return yc() ? vc() : (e = e.parent, Ft(e, !1)), t.firstCreatePass && (Cc(t, e), pc(e) && t.queries.elementEnd(e)), Kh
}

function gC(e, t, n) {
    return Qh(e, t, n), Kh(), gC
}
var Jh = (e, t, n, r) => (ct(!0), Vp(t[P], ""));

function mC(e, t, n, r) {
    let o, i = t[ye],
        s = !i || vn() || ar(i, r) || jt(n);
    if (ct(s), s) return Vp(t[P], "");
    let a = Mi(i, e, t, n),
        c = uE(i, r);
    return mi(i, r, a), o = Si(c, a), o
}

function yC() {
    Jh = mC
}

function tF() {
    return M()
}

function vC(e, t, n) {
    let r = M(),
        o = Pt();
    if (ve(r, o, t)) {
        let i = B(),
            s = rr();
        wi(i, s, r, e, t, r[P], n, !0)
    }
    return vC
}
var Dt = void 0;

function DC(e) {
    let t = Math.floor(Math.abs(e)),
        n = e.toString().replace(/^[^.]*\.?/, "").length;
    return t === 1 && n === 0 ? 1 : 5
}
var EC = ["en", [
            ["a", "p"],
            ["AM", "PM"], Dt
        ],
        [
            ["AM", "PM"], Dt, Dt
        ],
        [
            ["S", "M", "T", "W", "T", "F", "S"],
            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
        ], Dt, [
            ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        ], Dt, [
            ["B", "A"],
            ["BC", "AD"],
            ["Before Christ", "Anno Domini"]
        ], 0, [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", Dt, "{1} 'at' {0}", Dt],
        [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"],
        ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", DC
    ],
    zs = {};

function su(e) {
    let t = wC(e),
        n = Sd(t);
    if (n) return n;
    let r = t.split("-")[0];
    if (n = Sd(r), n) return n;
    if (r === "en") return EC;
    throw new b(701, !1)
}

function Sd(e) {
    return e in zs || (zs[e] = rt.ng && rt.ng.common && rt.ng.common.locales && rt.ng.common.locales[e]), zs[e]
}
var _n = function(e) {
    return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e
}(_n || {});

function wC(e) {
    return e.toLowerCase().replace(/_/g, "-")
}
var Jo = "en-US";
var IC = Jo;

function bC(e) {
    typeof e == "string" && (IC = e.toLowerCase().replace(/_/g, "-"))
}

function Nd(e, t, n, r) {
    return function o(i) {
        if (i === Function) return r;
        let s = kt(e) ? Fe(e.index, t) : t;
        Ti(s, 5);
        let a = xd(t, n, r, i),
            c = o.__ngNextListenerFn__;
        for (; c;) a = xd(t, n, c, i) && a, c = c.__ngNextListenerFn__;
        return a
    }
}

function xd(e, t, n, r) {
    let o = x(null);
    try {
        return F(6, t, n), n(r) !== !1
    } catch (i) {
        return CC(e, i), !1
    } finally {
        F(7, t, n), x(o)
    }
}

function CC(e, t) {
    let n = e[qe],
        r = n ? n.get(at, null) : null;
    r && r.handleError(t)
}

function Ad(e, t, n, r, o, i, s, a, c) {
    let u = n[r],
        d = t.data[r].outputs[o],
        f = u[d].subscribe(s),
        h = a.length;
    a.push(s, f), c && c.push(i, e.index, h, -(h + 1))
}
var Xh = (e, t, n) => {};

function Rd(e) {
    Xh = e
}

function TC(e, t, n, r) {
    let o = M(),
        i = B(),
        s = K();
    return eg(i, o, o[P], s, e, t, r), TC
}

function _C(e, t, n, r) {
    let o = e.cleanup;
    if (o != null)
        for (let i = 0; i < o.length - 1; i += 2) {
            let s = o[i];
            if (s === n && o[i + 1] === r) {
                let a = t[So],
                    c = o[i + 2];
                return a.length > c ? a[c] : null
            }
            typeof s == "string" && (i += 2)
        }
    return null
}

function eg(e, t, n, r, o, i, s) {
    let a = ci(r),
        u = e.firstCreatePass ? Tf(e) : null,
        l = t[G],
        d = Cf(t),
        p = !0;
    if (r.type & 3 || s) {
        let f = Ne(r, t),
            h = s ? s(f) : f,
            g = d.length,
            y = s ? O => s(Me(O[r.index])) : r.index,
            v = null;
        if (!s && a && (v = _C(e, t, o, r.index)), v !== null) {
            let O = v.__ngLastListenerFn__ || v;
            O.__ngNextListenerFn__ = i, v.__ngLastListenerFn__ = i, p = !1
        } else {
            i = Nd(r, t, l, i), Xh(h, o, i);
            let O = n.listen(h, o, i);
            d.push(i, O), u && u.push(o, y, g, g + 1)
        }
    } else i = Nd(r, t, l, i);
    if (p) {
        let f = r.outputs ? .[o],
            h = r.hostDirectiveOutputs ? .[o];
        if (h && h.length)
            for (let g = 0; g < h.length; g += 2) {
                let y = h[g],
                    v = h[g + 1];
                Ad(r, e, t, y, v, o, i, d, u)
            }
        if (f && f.length)
            for (let g of f) Ad(r, e, t, g, o, o, i, d, u)
    }
}

function nF(e = 1) {
    return Fv(e)
}

function MC(e, t) {
    let n = null,
        r = GE(e);
    for (let o = 0; o < t.length; o++) {
        let i = t[o];
        if (i === "*") {
            n = o;
            continue
        }
        if (r === null ? Lp(e, i, !0) : ZE(r, i)) return o
    }
    return n
}

function rF(e) {
    let t = M()[te][ce];
    if (!t.projection) {
        let n = e ? e.length : 1,
            r = t.projection = Ky(n, null),
            o = r.slice(),
            i = t.child;
        for (; i !== null;) {
            if (i.type !== 128) {
                let s = e ? MC(i, e) : 0;
                s !== null && (o[s] ? o[s].projectionNext = i : r[s] = i, o[s] = i)
            }
            i = i.next
        }
    }
}

function oF(e, t = 0, n, r, o, i) {
    let s = M(),
        a = B(),
        c = r ? e + 1 : null;
    c !== null && Zo(s, a, c, r, o, i, null, n);
    let u = ur(a, j + e, 16, null, n || null);
    u.projection === null && (u.projection = t), vc();
    let d = !s[ye] || vn();
    s[te][ce].projection[u.projection] === null && c !== null ? SC(s, a, c) : d && !jt(u) && Sw(a, s, u)
}

function SC(e, t, n) {
    let r = j + n,
        o = t.data[r],
        i = e[r],
        s = fn(i, o.tView.ssrId),
        a = bn(e, o, void 0, {
            dehydratedView: s
        });
    Cn(i, a, 0, At(o, s))
}

function NC(e, t, n) {
    return tg(e, "", t, "", n), NC
}

function tg(e, t, n, r, o) {
    let i = M(),
        s = jh(i, t, n, r);
    if (s !== de) {
        let a = B(),
            c = rr();
        wi(a, c, i, e, s, i[P], o, !1)
    }
    return tg
}

function iF(e, t, n, r) {
    HI(e, t, n, r)
}

function sF(e, t, n) {
    Ch(e, t, n)
}

function aF(e) {
    let t = M(),
        n = B(),
        r = wc();
    li(r + 1);
    let o = nu(n, r);
    if (e.dirty && gv(t) === ((o.metadata.flags & 2) === 2)) {
        if (o.matches === null) e.reset([]);
        else {
            let i = _h(t, r);
            e.reset(i, ep), e.notifyOnChanges()
        }
        return !0
    }
    return !1
}

function cF() {
    return tu(M(), wc())
}

function uF(e, t, n, r) {
    ZI(e, Ch(t, n, r))
}

function lF(e = 1) {
    li(wc() + e)
}

function xC(e, t, n, r) {
    n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = r
}

function dF(e) {
    let t = Mv();
    return hc(t, j + e)
}

function fF(e, t = "") {
    let n = M(),
        r = B(),
        o = e + j,
        i = r.firstCreatePass ? ur(r, o, 1, t, null) : r.data[o],
        s = ng(r, n, i, t, e);
    n[o] = s, di() && bi(r, n, s, i), Ft(i, !1)
}
var ng = (e, t, n, r, o) => (ct(!0), jp(t[P], r));

function AC(e, t, n, r, o) {
    let i = t[ye],
        s = !i || vn() || jt(n) || ar(i, o);
    return ct(s), s ? jp(t[P], r) : Mi(i, e, t, n)
}

function RC() {
    ng = AC
}

function OC(e) {
    return rg("", e, ""), OC
}

function rg(e, t, n) {
    let r = M(),
        o = jh(r, e, t, n);
    return o !== de && og(r, Je(), o), rg
}

function kC(e, t, n, r, o) {
    let i = M(),
        s = Vb(i, e, t, n, r, o);
    return s !== de && og(i, Je(), s), kC
}

function og(e, t, n) {
    let r = Ef(t, e);
    JE(e[P], r, n)
}

function FC(e, t, n) {
    np(t) && (t = t());
    let r = M(),
        o = Pt();
    if (ve(r, o, t)) {
        let i = B(),
            s = rr();
        wi(i, s, r, e, t, r[P], n, !1)
    }
    return FC
}

function pF(e, t) {
    let n = np(e);
    return n && e.set(t), n
}

function PC(e, t) {
    let n = M(),
        r = B(),
        o = K();
    return eg(r, n, n[P], o, e, t), PC
}

function LC(e, t, n) {
    let r = B();
    if (r.firstCreatePass) {
        let o = ke(e);
        Za(n, r.data, r.blueprint, o, !0), Za(t, r.data, r.blueprint, o, !1)
    }
}

function Za(e, t, n, r, o) {
    if (e = X(e), Array.isArray(e))
        for (let i = 0; i < e.length; i++) Za(e[i], t, n, r, o);
    else {
        let i = B(),
            s = M(),
            a = K(),
            c = cn(e) ? e : X(e.provide),
            u = lf(e),
            l = a.providerIndexes & 1048575,
            d = a.directiveStart,
            p = a.providerIndexes >> 20;
        if (cn(e) || !e.multi) {
            let f = new Nt(u, o, fe),
                h = qs(c, t, o ? l : l + p, d);
            h === -1 ? (ia(ko(a, s), i, c), Gs(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, o && (a.providerIndexes += 1048576), n.push(f), s.push(f)) : (n[h] = f, s[h] = f)
        } else {
            let f = qs(c, t, l + p, d),
                h = qs(c, t, l, l + p),
                g = f >= 0 && n[f],
                y = h >= 0 && n[h];
            if (o && !y || !o && !g) {
                ia(ko(a, s), i, c);
                let v = BC(o ? VC : jC, n.length, o, r, u);
                !o && y && (n[h].providerFactory = v), Gs(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, o && (a.providerIndexes += 1048576), n.push(v), s.push(v)
            } else {
                let v = ig(n[o ? h : f], u, !o && r);
                Gs(i, e, f > -1 ? f : h, v)
            }!o && r && y && n[h].componentProviders++
        }
    }
}

function Gs(e, t, n, r) {
    let o = cn(t),
        i = ov(t);
    if (o || i) {
        let c = (i ? X(t.useClass) : t).prototype.ngOnDestroy;
        if (c) {
            let u = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
                let l = u.indexOf(n);
                l === -1 ? u.push(n, [r, c]) : u[l + 1].push(r, c)
            } else u.push(n, c)
        }
    }
}

function ig(e, t, n) {
    return n && e.componentProviders++, e.multi.push(t) - 1
}

function qs(e, t, n, r) {
    for (let o = n; o < r; o++)
        if (t[o] === e) return o;
    return -1
}

function jC(e, t, n, r) {
    return Ya(this.multi, [])
}

function VC(e, t, n, r) {
    let o = this.multi,
        i;
    if (this.providerFactory) {
        let s = this.providerFactory.componentProviders,
            a = Zn(n, n[C], this.providerFactory.index, r);
        i = a.slice(0, s), Ya(o, i);
        for (let c = s; c < a.length; c++) i.push(a[c])
    } else i = [], Ya(o, i);
    return i
}

function Ya(e, t) {
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        t.push(r())
    }
    return t
}

function BC(e, t, n, r, o) {
    let i = new Nt(e, n, fe);
    return i.multi = [], i.index = t, i.componentProviders = 0, ig(i, o, r && !n), i
}

function hF(e, t = []) {
    return n => {
        n.providersResolver = (r, o) => LC(r, o ? o(e) : e, t)
    }
}

function gF(e, t, n, r) {
    return ag(M(), Dc(), e, t, n, r)
}

function sg(e, t) {
    let n = e[t];
    return n === de ? void 0 : n
}

function ag(e, t, n, r, o, i) {
    let s = t + n;
    return ve(e, s, o) ? Rh(e, s + 1, i ? r.call(i, o) : r(o)) : sg(e, s + 1)
}

function UC(e, t, n, r, o, i, s) {
    let a = t + n;
    return Oh(e, a, o, i) ? Rh(e, a + 2, s ? r.call(s, o, i) : r(o, i)) : sg(e, a + 2)
}

function mF(e, t) {
    let n = B(),
        r, o = e + j;
    n.firstCreatePass ? (r = $C(t, n.pipeRegistry), n.data[o] = r, r.onDestroy && (n.destroyHooks ? ? = []).push(o, r.onDestroy)) : r = n.data[o];
    let i = r.factory || (r.factory = bt(r.type, !0)),
        s, a = ie(fe);
    try {
        let c = Oo(!1),
            u = i();
        return Oo(c), xC(n, M(), o, u), u
    } finally {
        ie(a)
    }
}

function $C(e, t) {
    if (t)
        for (let n = t.length - 1; n >= 0; n--) {
            let r = t[n];
            if (e === r.name) return r
        }
}

function yF(e, t, n) {
    let r = e + j,
        o = M(),
        i = hc(o, r);
    return cg(o, r) ? ag(o, Dc(), t, i.transform, n, i) : i.transform(n)
}

function vF(e, t, n, r) {
    let o = e + j,
        i = M(),
        s = hc(i, o);
    return cg(i, o) ? UC(i, Dc(), t, s.transform, n, r, s) : s.transform(n, r)
}

function cg(e, t) {
    return e[C].data[t].pure
}

function DF(e, t) {
    return _i(e, t)
}
var Xo = class {
        full;
        major;
        minor;
        patch;
        constructor(t) {
            this.full = t;
            let n = t.split(".");
            this.major = n[0], this.minor = n[1], this.patch = n.slice(2).join(".")
        }
    },
    EF = new Xo("19.2.4"),
    Qa = class {
        ngModuleFactory;
        componentFactories;
        constructor(t, n) {
            this.ngModuleFactory = t, this.componentFactories = n
        }
    },
    wF = (() => {
        class e {
            compileModuleSync(n) {
                return new La(n)
            }
            compileModuleAsync(n) {
                return Promise.resolve(this.compileModuleSync(n))
            }
            compileModuleAndAllComponentsSync(n) {
                let r = this.compileModuleSync(n),
                    o = rf(n),
                    i = Fp(o.declarations).reduce((s, a) => {
                        let c = Ge(a);
                        return c && s.push(new Rt(c)), s
                    }, []);
                return new Qa(r, i)
            }
            compileModuleAndAllComponentsAsync(n) {
                return Promise.resolve(this.compileModuleAndAllComponentsSync(n))
            }
            clearCache() {}
            clearCacheFor(n) {}
            getModuleId(n) {}
            static\ u0275fac = function(r) {
                return new(r || e)
            };
            static\ u0275prov = k({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
        return e
    })();
var HC = (() => {
    class e {
        zone = m(ae);
        changeDetectionScheduler = m(xt);
        applicationRef = m(Se);
        _onMicrotaskEmptySubscription;
        initialize() {
            this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({
                next: () => {
                    this.changeDetectionScheduler.runningTick || this.zone.run(() => {
                        this.applicationRef.tick()
                    })
                }
            }))
        }
        ngOnDestroy() {
            this._onMicrotaskEmptySubscription ? .unsubscribe()
        }
        static\ u0275fac = function(r) {
            return new(r || e)
        };
        static\ u0275prov = k({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
})();

function zC({
    ngZoneFactory: e,
    ignoreChangesOutsideZone: t,
    scheduleInRootZone: n
}) {
    return e ? ? = () => new ae(ne(Z({}, GC()), {
        scheduleInRootZone: n
    })), [{
        provide: ae,
        useFactory: e
    }, {
        provide: an,
        multi: !0,
        useFactory: () => {
            let r = m(HC, {
                optional: !0
            });
            return () => r.initialize()
        }
    }, {
        provide: an,
        multi: !0,
        useFactory: () => {
            let r = m(qC);
            return () => {
                r.initialize()
            }
        }
    }, t === !0 ? {
        provide: Qf,
        useValue: !0
    } : [], {
        provide: Kf,
        useValue: n ? ? Zf
    }]
}

function GC(e) {
    return {
        enableLongStackTrace: !1,
        shouldCoalesceEventChangeDetection: e ? .eventCoalescing ? ? !1,
        shouldCoalesceRunChangeDetection: e ? .runCoalescing ? ? !1
    }
}
var qC = (() => {
    class e {
        subscription = new $;
        initialized = !1;
        zone = m(ae);
        pendingTasks = m(Xe);
        initialize() {
            if (this.initialized) return;
            this.initialized = !0;
            let n = null;
            !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => {
                this.subscription.add(this.zone.onStable.subscribe(() => {
                    ae.assertNotInAngularZone(), queueMicrotask(() => {
                        n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null)
                    })
                }))
            }), this.subscription.add(this.zone.onUnstable.subscribe(() => {
                ae.assertInAngularZone(), n ? ? = this.pendingTasks.add()
            }))
        }
        ngOnDestroy() {
            this.subscription.unsubscribe()
        }
        static\ u0275fac = function(r) {
            return new(r || e)
        };
        static\ u0275prov = k({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
})();
var WC = (() => {
    class e {
        appRef = m(Se);
        taskService = m(Xe);
        ngZone = m(ae);
        zonelessEnabled = m(Yf);
        tracing = m(fi, {
            optional: !0
        });
        disableScheduling = m(Qf, {
            optional: !0
        }) ? ? !1;
        zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
        schedulerTickApplyArgs = [{
            data: {
                __scheduler_tick__: !0
            }
        }];
        subscriptions = new $;
        angularZoneId = this.zoneIsDefined ? this.ngZone._inner ? .get(Po) : null;
        scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (m(Kf, {
            optional: !0
        }) ? ? !1);
        cancelScheduledCallback = null;
        useMicrotaskScheduler = !1;
        runningTick = !1;
        pendingRenderTaskId = null;
        constructor() {
            this.subscriptions.add(this.appRef.afterTick.subscribe(() => {
                this.runningTick || this.cleanup()
            })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => {
                this.runningTick || this.cleanup()
            })), this.disableScheduling || = !this.zonelessEnabled && (this.ngZone instanceof ua || !this.zoneIsDefined)
        }
        notify(n) {
            if (!this.zonelessEnabled && n === 5) return;
            let r = !1;
            switch (n) {
                case 0:
                    {
                        this.appRef.dirtyFlags |= 2;
                        break
                    }
                case 3:
                case 2:
                case 4:
                case 5:
                case 1:
                    {
                        this.appRef.dirtyFlags |= 4;
                        break
                    }
                case 6:
                    {
                        this.appRef.dirtyFlags |= 2,
                        r = !0;
                        break
                    }
                case 12:
                    {
                        this.appRef.dirtyFlags |= 16,
                        r = !0;
                        break
                    }
                case 13:
                    {
                        this.appRef.dirtyFlags |= 2,
                        r = !0;
                        break
                    }
                case 11:
                    {
                        r = !0;
                        break
                    }
                case 9:
                case 8:
                case 7:
                case 10:
                default:
                    this.appRef.dirtyFlags |= 8
            }
            if (this.appRef.tracingSnapshot = this.tracing ? .snapshot(this.appRef.tracingSnapshot) ? ? null, !this.shouldScheduleTick(r)) return;
            let o = this.useMicrotaskScheduler ? Zl : Jf;
            this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick()))
        }
        shouldScheduleTick(n) {
            return !(this.disableScheduling && !n || this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(Po + this.angularZoneId))
        }
        tick() {
            if (this.runningTick || this.appRef.destroyed) return;
            if (this.appRef.dirtyFlags === 0) {
                this.cleanup();
                return
            }!this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1);
            let n = this.taskService.add();
            try {
                this.ngZone.run(() => {
                    this.runningTick = !0, this.appRef._tick()
                }, void 0, this.schedulerTickApplyArgs)
            } catch (r) {
                throw this.taskService.remove(n), r
            } finally {
                this.cleanup()
            }
            this.useMicrotaskScheduler = !0, Zl(() => {
                this.useMicrotaskScheduler = !1, this.taskService.remove(n)
            })
        }
        ngOnDestroy() {
            this.subscriptions.unsubscribe(), this.cleanup()
        }
        cleanup() {
            if (this.runningTick = !1, this.cancelScheduledCallback ? .(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
                let n = this.pendingRenderTaskId;
                this.pendingRenderTaskId = null, this.taskService.remove(n)
            }
        }
        static\ u0275fac = function(r) {
            return new(r || e)
        };
        static\ u0275prov = k({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
})();

function ZC() {
    return typeof $localize < "u" && $localize.locale || Jo
}
var ki = new T("", {
    providedIn: "root",
    factory: () => m(ki, R.Optional | R.SkipSelf) || ZC()
});
var Ka = new T(""),
    YC = new T("");

function Un(e) {
    return !e.moduleRef
}

function QC(e) {
    let t = Un(e) ? e.r3Injector : e.moduleRef.injector,
        n = t.get(ae);
    return n.run(() => {
        Un(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers();
        let r = t.get(at, null),
            o;
        if (n.runOutsideAngular(() => {
                o = n.onError.subscribe({
                    next: i => {
                        r.handleError(i)
                    }
                })
            }), Un(e)) {
            let i = () => t.destroy(),
                s = e.platformInjector.get(Ka);
            s.add(i), t.onDestroy(() => {
                o.unsubscribe(), s.delete(i)
            })
        } else {
            let i = () => e.moduleRef.destroy(),
                s = e.platformInjector.get(Ka);
            s.add(i), e.moduleRef.onDestroy(() => {
                Eo(e.allPlatformModules, e.moduleRef), o.unsubscribe(), s.delete(i)
            })
        }
        return JC(r, n, () => {
            let i = t.get(Lh);
            return i.runInitializers(), i.donePromise.then(() => {
                let s = t.get(ki, Jo);
                if (bC(s || Jo), !t.get(YC, !0)) return Un(e) ? t.get(Se) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef);
                if (Un(e)) {
                    let c = t.get(Se);
                    return e.rootComponent !== void 0 && c.bootstrap(e.rootComponent), c
                } else return KC(e.moduleRef, e.allPlatformModules), e.moduleRef
            })
        })
    })
}

function KC(e, t) {
    let n = e.injector.get(Se);
    if (e._bootstrapComponents.length > 0) e._bootstrapComponents.forEach(r => n.bootstrap(r));
    else if (e.instance.ngDoBootstrap) e.instance.ngDoBootstrap(n);
    else throw new b(-403, !1);
    t.push(e)
}

function JC(e, t, n) {
    try {
        let r = n();
        return Oi(r) ? r.catch(o => {
            throw t.runOutsideAngular(() => e.handleError(o)), o
        }) : r
    } catch (r) {
        throw t.runOutsideAngular(() => e.handleError(r)), r
    }
}
var wo = null;

function XC(e = [], t) {
    return Pe.create({
        name: t,
        providers: [{
            provide: uf,
            useValue: "platform"
        }, {
            provide: Ka,
            useValue: new Set([() => wo = null])
        }, ...e]
    })
}

function eT(e = []) {
    if (wo) return wo;
    let t = XC(e);
    return wo = t, Cb(), tT(t), t
}

function tT(e) {
    let t = e.get(DD, null);
    ii(e, () => {
        t ? .forEach(n => n())
    })
}
var au = (() => {
    class e {
        static __NG_ELEMENT_ID__ = nT
    }
    return e
})();

function nT(e) {
    return rT(K(), M(), (e & 16) === 16)
}

function rT(e, t, n) {
    if (kt(e) && !n) {
        let r = Fe(e.index, t);
        return new Jn(r, r)
    } else if (e.type & 175) {
        let r = t[te];
        return new Jn(r, t)
    }
    return null
}
var Ja = class {
        constructor() {}
        supports(t) {
            return Ah(t)
        }
        create(t) {
            return new Xa(t)
        }
    },
    oT = (e, t) => t,
    Xa = class {
        length = 0;
        collection;
        _linkedRecords = null;
        _unlinkedRecords = null;
        _previousItHead = null;
        _itHead = null;
        _itTail = null;
        _additionsHead = null;
        _additionsTail = null;
        _movesHead = null;
        _movesTail = null;
        _removalsHead = null;
        _removalsTail = null;
        _identityChangesHead = null;
        _identityChangesTail = null;
        _trackByFn;
        constructor(t) {
            this._trackByFn = t || oT
        }
        forEachItem(t) {
            let n;
            for (n = this._itHead; n !== null; n = n._next) t(n)
        }
        forEachOperation(t) {
            let n = this._itHead,
                r = this._removalsHead,
                o = 0,
                i = null;
            for (; n || r;) {
                let s = !r || n && n.currentIndex < Od(r, o, i) ? n : r,
                    a = Od(s, o, i),
                    c = s.currentIndex;
                if (s === r) o--, r = r._nextRemoved;
                else if (n = n._next, s.previousIndex == null) o++;
                else {
                    i || (i = []);
                    let u = a - o,
                        l = c - o;
                    if (u != l) {
                        for (let p = 0; p < u; p++) {
                            let f = p < i.length ? i[p] : i[p] = 0,
                                h = f + p;
                            l <= h && h < u && (i[p] = f + 1)
                        }
                        let d = s.previousIndex;
                        i[d] = l - u
                    }
                }
                a !== c && t(s, a, c)
            }
        }
        forEachPreviousItem(t) {
            let n;
            for (n = this._previousItHead; n !== null; n = n._nextPrevious) t(n)
        }
        forEachAddedItem(t) {
            let n;
            for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n)
        }
        forEachMovedItem(t) {
            let n;
            for (n = this._movesHead; n !== null; n = n._nextMoved) t(n)
        }
        forEachRemovedItem(t) {
            let n;
            for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n)
        }
        forEachIdentityChange(t) {
            let n;
            for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange) t(n)
        }
        diff(t) {
            if (t == null && (t = []), !Ah(t)) throw new b(900, !1);
            return this.check(t) ? this : null
        }
        onDestroy() {}
        check(t) {
            this._reset();
            let n = this._itHead,
                r = !1,
                o, i, s;
            if (Array.isArray(t)) {
                this.length = t.length;
                for (let a = 0; a < this.length; a++) i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), r = !0) : (r && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next
            } else o = 0, db(t, a => {
                s = this._trackByFn(o, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, o), r = !0) : (r && (n = this._verifyReinsertion(n, a, s, o)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, o++
            }), this.length = o;
            return this._truncate(n), this.collection = t, this.isDirty
        }
        get isDirty() {
            return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null
        }
        _reset() {
            if (this.isDirty) {
                let t;
                for (t = this._previousItHead = this._itHead; t !== null; t = t._next) t._nextPrevious = t._next;
                for (t = this._additionsHead; t !== null; t = t._nextAdded) t.previousIndex = t.currentIndex;
                for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved) t.previousIndex = t.currentIndex;
                this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
            }
        }
        _mismatch(t, n, r, o) {
            let i;
            return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, o)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(r, o), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, o)) : t = this._addAfter(new ec(n, r), i, o)), t
        }
        _verifyReinsertion(t, n, r, o) {
            let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null);
            return i !== null ? t = this._reinsertAfter(i, t._prev, o) : t.currentIndex != o && (t.currentIndex = o, this._addToMoves(t, o)), t
        }
        _truncate(t) {
            for (; t !== null;) {
                let n = t._next;
                this._addToRemovals(this._unlink(t)), t = n
            }
            this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null)
        }
        _reinsertAfter(t, n, r) {
            this._unlinkedRecords !== null && this._unlinkedRecords.remove(t);
            let o = t._prevRemoved,
                i = t._nextRemoved;
            return o === null ? this._removalsHead = i : o._nextRemoved = i, i === null ? this._removalsTail = o : i._prevRemoved = o, this._insertAfter(t, n, r), this._addToMoves(t, r), t
        }
        _moveAfter(t, n, r) {
            return this._unlink(t), this._insertAfter(t, n, r), this._addToMoves(t, r), t
        }
        _addAfter(t, n, r) {
            return this._insertAfter(t, n, r), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t
        }
        _insertAfter(t, n, r) {
            let o = n === null ? this._itHead : n._next;
            return t._next = o, t._prev = n, o === null ? this._itTail = t : o._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new ei), this._linkedRecords.put(t), t.currentIndex = r, t
        }
        _remove(t) {
            return this._addToRemovals(this._unlink(t))
        }
        _unlink(t) {
            this._linkedRecords !== null && this._linkedRecords.remove(t);
            let n = t._prev,
                r = t._next;
            return n === null ? this._itHead = r : n._next = r, r === null ? this._itTail = n : r._prev = n, t
        }
        _addToMoves(t, n) {
            return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t
        }
        _addToRemovals(t) {
            return this._unlinkedRecords === null && (this._unlinkedRecords = new ei), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
        }
        _addIdentityChange(t, n) {
            return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t
        }
    },
    ec = class {
        item;
        trackById;
        currentIndex = null;
        previousIndex = null;
        _nextPrevious = null;
        _prev = null;
        _next = null;
        _prevDup = null;
        _nextDup = null;
        _prevRemoved = null;
        _nextRemoved = null;
        _nextAdded = null;
        _nextMoved = null;
        _nextIdentityChange = null;
        constructor(t, n) {
            this.item = t, this.trackById = n
        }
    },
    tc = class {
        _head = null;
        _tail = null;
        add(t) {
            this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
        }
        get(t, n) {
            let r;
            for (r = this._head; r !== null; r = r._nextDup)
                if ((n === null || n <= r.currentIndex) && Object.is(r.trackById, t)) return r;
            return null
        }
        remove(t) {
            let n = t._prevDup,
                r = t._nextDup;
            return n === null ? this._head = r : n._nextDup = r, r === null ? this._tail = n : r._prevDup = n, this._head === null
        }
    },
    ei = class {
        map = new Map;
        put(t) {
            let n = t.trackById,
                r = this.map.get(n);
            r || (r = new tc, this.map.set(n, r)), r.add(t)
        }
        get(t, n) {
            let r = t,
                o = this.map.get(r);
            return o ? o.get(t, n) : null
        }
        remove(t) {
            let n = t.trackById;
            return this.map.get(n).remove(t) && this.map.delete(n), t
        }
        get isEmpty() {
            return this.map.size === 0
        }
        clear() {
            this.map.clear()
        }
    };

function Od(e, t, n) {
    let r = e.previousIndex;
    if (r === null) return r;
    let o = 0;
    return n && r < n.length && (o = n[r]), r + t + o
}
var nc = class {
        constructor() {}
        supports(t) {
            return t instanceof Map || ou(t)
        }
        create() {
            return new rc
        }
    },
    rc = class {
        _records = new Map;
        _mapHead = null;
        _appendAfter = null;
        _previousMapHead = null;
        _changesHead = null;
        _changesTail = null;
        _additionsHead = null;
        _additionsTail = null;
        _removalsHead = null;
        _removalsTail = null;
        get isDirty() {
            return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null
        }
        forEachItem(t) {
            let n;
            for (n = this._mapHead; n !== null; n = n._next) t(n)
        }
        forEachPreviousItem(t) {
            let n;
            for (n = this._previousMapHead; n !== null; n = n._nextPrevious) t(n)
        }
        forEachChangedItem(t) {
            let n;
            for (n = this._changesHead; n !== null; n = n._nextChanged) t(n)
        }
        forEachAddedItem(t) {
            let n;
            for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n)
        }
        forEachRemovedItem(t) {
            let n;
            for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n)
        }
        diff(t) {
            if (!t) t = new Map;
            else if (!(t instanceof Map || ou(t))) throw new b(900, !1);
            return this.check(t) ? this : null
        }
        onDestroy() {}
        check(t) {
            this._reset();
            let n = this._mapHead;
            if (this._appendAfter = null, this._forEach(t, (r, o) => {
                    if (n && n.key === o) this._maybeAddToChanges(n, r), this._appendAfter = n, n = n._next;
                    else {
                        let i = this._getOrCreateRecordForKey(o, r);
                        n = this._insertBeforeOrAppend(n, i)
                    }
                }), n) {
                n._prev && (n._prev._next = null), this._removalsHead = n;
                for (let r = n; r !== null; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
            }
            return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
        }
        _insertBeforeOrAppend(t, n) {
            if (t) {
                let r = t._prev;
                return n._next = t, n._prev = r, t._prev = n, r && (r._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t
            }
            return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null
        }
        _getOrCreateRecordForKey(t, n) {
            if (this._records.has(t)) {
                let o = this._records.get(t);
                this._maybeAddToChanges(o, n);
                let i = o._prev,
                    s = o._next;
                return i && (i._next = s), s && (s._prev = i), o._next = null, o._prev = null, o
            }
            let r = new oc(t);
            return this._records.set(t, r), r.currentValue = n, this._addToAdditions(r), r
        }
        _reset() {
            if (this.isDirty) {
                let t;
                for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next) t._nextPrevious = t._next;
                for (t = this._changesHead; t !== null; t = t._nextChanged) t.previousValue = t.currentValue;
                for (t = this._additionsHead; t != null; t = t._nextAdded) t.previousValue = t.currentValue;
                this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
            }
        }
        _maybeAddToChanges(t, n) {
            Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t))
        }
        _addToAdditions(t) {
            this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
        }
        _addToChanges(t) {
            this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
        }
        _forEach(t, n) {
            t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(r => n(t[r], r))
        }
    },
    oc = class {
        key;
        previousValue = null;
        currentValue = null;
        _nextPrevious = null;
        _next = null;
        _prev = null;
        _nextAdded = null;
        _nextRemoved = null;
        _nextChanged = null;
        constructor(t) {
            this.key = t
        }
    };

function kd() {
    return new ug([new Ja])
}
var ug = (() => {
    class e {
        factories;
        static\ u0275prov = k({
            token: e,
            providedIn: "root",
            factory: kd
        });
        constructor(n) {
            this.factories = n
        }
        static create(n, r) {
            if (r != null) {
                let o = r.factories.slice();
                n = n.concat(o)
            }
            return new e(n)
        }
        static extend(n) {
            return {
                provide: e,
                useFactory: r => e.create(n, r || kd()),
                deps: [
                    [e, new Xd, new Jd]
                ]
            }
        }
        find(n) {
            let r = this.factories.find(o => o.supports(n));
            if (r != null) return r;
            throw new b(901, !1)
        }
    }
    return e
})();

function Fd() {
    return new cu([new nc])
}
var cu = (() => {
    class e {
        static\ u0275prov = k({
            token: e,
            providedIn: "root",
            factory: Fd
        });
        factories;
        constructor(n) {
            this.factories = n
        }
        static create(n, r) {
            if (r) {
                let o = r.factories.slice();
                n = n.concat(o)
            }
            return new e(n)
        }
        static extend(n) {
            return {
                provide: e,
                useFactory: r => e.create(n, r || Fd()),
                deps: [
                    [e, new Xd, new Jd]
                ]
            }
        }
        find(n) {
            let r = this.factories.find(o => o.supports(n));
            if (r) return r;
            throw new b(901, !1)
        }
    }
    return e
})();

function IF(e) {
    F(8);
    try {
        let {
            rootComponent: t,
            appProviders: n,
            platformProviders: r
        } = e, o = eT(r), i = [zC({}), {
            provide: xt,
            useExisting: WC
        }, ...n || []], s = new Wo({
            providers: i,
            parent: o,
            debugName: "",
            runEnvironmentInitializers: !1
        });
        return QC({
            r3Injector: s.injector,
            platformInjector: o,
            rootComponent: t
        })
    } catch (t) {
        return Promise.reject(t)
    } finally {
        F(9)
    }
}
var ho = new WeakSet,
    Pd = "",
    Io = [];

function Ld(e) {
    return e.get(mp, AD)
}

function bF() {
    let e = [{
        provide: mp,
        useFactory: () => {
            let t = !0; {
                let n = m(jo);
                t = !!window._ejsas ? .[n]
            }
            return t && je("NgEventReplay"), t
        }
    }];
    return e.push({
        provide: an,
        useValue: () => {
            let t = m(Se),
                {
                    injector: n
                } = t;
            if (!ho.has(t)) {
                let r = m(Xl);
                Ld(n) && Rd((o, i, s) => {
                    o.nodeType === Node.ELEMENT_NODE && (YD(o, i, s), QD(o, r))
                })
            }
        },
        multi: !0
    }, {
        provide: lr,
        useFactory: () => {
            let t = m(jo),
                n = m(Se),
                {
                    injector: r
                } = n;
            return () => {
                !Ld(r) || ho.has(n) || (ho.add(n), n.onDestroy(() => {
                    ho.delete(n), Ms(t), Rd(() => {})
                }), n.whenStable().then(() => {
                    if (n.destroyed) return;
                    let o = r.get(JD);
                    iT(o, r);
                    let i = r.get(Xl);
                    i.get(Pd) ? .forEach(KD), i.delete(Pd);
                    let s = o.instance;
                    cE(r) ? n.onDestroy(() => s.cleanUp()) : s.cleanUp()
                }))
            }
        },
        multi: !0
    }), e
}
var iT = (e, t) => {
    let n = t.get(jo),
        r = window._ejsas[n],
        o = e.instance = new Rl(new io(r.c));
    for (let a of r.et) o.addEvent(a);
    for (let a of r.etc) o.addEvent(a);
    let i = Ol(n);
    o.replayEarlyEventInfos(i), Ms(n);
    let s = new so(a => {
        sT(t, a, a.currentTarget)
    });
    Al(o, s)
};

function sT(e, t, n) {
    let r = (n && n.getAttribute(gi)) ? ? "";
    /d\d+/.test(r) ? aT(r, e, t, n) : t.eventPhase === _s.REPLAY && Ip(t, n)
}

function aT(e, t, n, r) {
    Io.push({
        event: n,
        currentTarget: r
    }), Ab(t, e, cT)
}

function cT(e) {
    let t = [...Io],
        n = new Set(e);
    Io = [];
    for (let {
            event: r,
            currentTarget: o
        } of t) {
        let i = o.getAttribute(gi);
        n.has(i) ? Ip(r, o) : Io.push({
            event: r,
            currentTarget: o
        })
    }
}
var jd = !1;

function uT() {
    jd || (jd = !0, oE(), pC(), RC(), yC(), gb(), jI(), dI(), aw())
}

function lT(e) {
    return e.whenStable()
}

function CF() {
    let e = [{
        provide: co,
        useFactory: () => {
            let t = !0;
            return t = !!m(wn, {
                optional: !0
            }) ? .get(bp, null), t && je("NgHydration"), t
        }
    }, {
        provide: an,
        useValue: () => {
            oI(!1), m(co) && (fE(ir()), uT())
        },
        multi: !0
    }];
    return e.push({
        provide: gp,
        useFactory: () => m(co)
    }, {
        provide: lr,
        useFactory: () => {
            if (m(co)) {
                let t = m(Se);
                return () => {
                    lT(t).then(() => {
                        t.destroyed || fh(t)
                    })
                }
            }
            return () => {}
        },
        multi: !0
    }), lc(e)
}

function dT(e) {
    return typeof e == "boolean" ? e : e != null && e !== "false"
}

function fT(e, t = NaN) {
    return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t
}

function uu(e) {
    return ms(e)
}

function pT(e, t) {
    return Xr(e, t ? .equal)
}
var ic = class {
    [oe];
    constructor(t) {
        this[oe] = t
    }
    destroy() {
        this[oe].destroy()
    }
};

function hT(e, t) {
    !t ? .injector && si(hT);
    let n = t ? .injector ? ? m(Pe),
        r = t ? .manualCleanup !== !0 ? n.get(or) : null,
        o, i = n.get(Ac, null, {
            optional: !0
        }),
        s = n.get(xt);
    return i !== null && !t ? .forceRoot ? (o = yT(i.view, s, e), r instanceof Fo && r._lView === i.view && (r = null)) : o = vT(e, n.get(Ph), s), o.injector = n, r !== null && (o.onDestroyFn = r.onDestroy(() => o.destroy())), new ic(o)
}
var lg = ne(Z({}, Qt), {
        consumerIsAlwaysLive: !0,
        consumerAllowSignalWrites: !0,
        dirty: !0,
        hasRun: !1,
        cleanupFns: void 0,
        zone: null,
        kind: "effect",
        onDestroyFn: Yn,
        run() {
            if (this.dirty = !1, this.hasRun && !Qr(this)) return;
            this.hasRun = !0;
            let e = r => (this.cleanupFns ? ? = []).push(r),
                t = Ln(this),
                n = xo(!1);
            try {
                this.maybeCleanup(), this.fn(e)
            } finally {
                xo(n), Yr(this, t)
            }
        },
        maybeCleanup() {
            if (this.cleanupFns ? .length) try {
                for (; this.cleanupFns.length;) this.cleanupFns.pop()()
            } finally {
                this.cleanupFns = []
            }
        }
    }),
    gT = ne(Z({}, lg), {
        consumerMarkedDirty() {
            this.scheduler.schedule(this), this.notifier.notify(12)
        },
        destroy() {
            jn(this), this.onDestroyFn(), this.maybeCleanup(), this.scheduler.remove(this)
        }
    }),
    mT = ne(Z({}, lg), {
        consumerMarkedDirty() {
            this.view[_] |= 8192, yn(this.view), this.notifier.notify(13)
        },
        destroy() {
            jn(this), this.onDestroyFn(), this.maybeCleanup(), this.view[_t] ? .delete(this)
        }
    });

function yT(e, t, n) {
    let r = Object.create(mT);
    return r.view = e, r.zone = typeof Zone < "u" ? Zone.current : null, r.notifier = t, r.fn = n, e[_t] ? ? = new Set, e[_t].add(r), r.consumerMarkedDirty(r), r
}

function vT(e, t, n) {
    let r = Object.create(gT);
    return r.fn = e, r.scheduler = t, r.notifier = n, r.zone = typeof Zone < "u" ? Zone.current : null, r.scheduler.schedule(r), r.notifier.notify(12), r
}

function TF(e, t) {
    let n = Ge(e),
        r = t.elementInjector || oi();
    return new Rt(n).create(r, t.projectableNodes, t.hostElement, t.environmentInjector)
}

function _F(e) {
    let t = Ge(e);
    if (!t) return null;
    let n = new Rt(t);
    return {
        get selector() {
            return n.selector
        },
        get type() {
            return n.componentType
        },
        get inputs() {
            return n.inputs
        },
        get outputs() {
            return n.outputs
        },
        get ngContentSelectors() {
            return n.ngContentSelectors
        },
        get isStandalone() {
            return t.standalone
        },
        get isSignal() {
            return t.signals
        }
    }
}
var Dg = null;

function lu() {
    return Dg
}

function QF(e) {
    Dg ? ? = e
}
var fg = class {};
var Li = new T(""),
    Eg = (() => {
        class e {
            historyGo(n) {
                throw new Error("")
            }
            static\ u0275fac = function(r) {
                return new(r || e)
            };
            static\ u0275prov = k({
                token: e,
                factory: () => m(DT),
                providedIn: "platform"
            })
        }
        return e
    })();
var DT = (() => {
    class e extends Eg {
        _location;
        _history;
        _doc = m(Li);
        constructor() {
            super(), this._location = window.location, this._history = window.history
        }
        getBaseHrefFromDOM() {
            return lu().getBaseHref(this._doc)
        }
        onPopState(n) {
            let r = lu().getGlobalEventTarget(this._doc, "window");
            return r.addEventListener("popstate", n, !1), () => r.removeEventListener("popstate", n)
        }
        onHashChange(n) {
            let r = lu().getGlobalEventTarget(this._doc, "window");
            return r.addEventListener("hashchange", n, !1), () => r.removeEventListener("hashchange", n)
        }
        get href() {
            return this._location.href
        }
        get protocol() {
            return this._location.protocol
        }
        get hostname() {
            return this._location.hostname
        }
        get port() {
            return this._location.port
        }
        get pathname() {
            return this._location.pathname
        }
        get search() {
            return this._location.search
        }
        get hash() {
            return this._location.hash
        }
        set pathname(n) {
            this._location.pathname = n
        }
        pushState(n, r, o) {
            this._history.pushState(n, r, o)
        }
        replaceState(n, r, o) {
            this._history.replaceState(n, r, o)
        }
        forward() {
            this._history.forward()
        }
        back() {
            this._history.back()
        }
        historyGo(n = 0) {
            this._history.go(n)
        }
        getState() {
            return this._history.state
        }
        static\ u0275fac = function(r) {
            return new(r || e)
        };
        static\ u0275prov = k({
            token: e,
            factory: () => new e,
            providedIn: "platform"
        })
    }
    return e
})();

function wg(e, t) {
    return e ? t ? e.endsWith("/") ? t.startsWith("/") ? e + t.slice(1) : e + t : t.startsWith("/") ? e + t : `${e}/${t}` : e : t
}

function pg(e) {
    let t = e.search(/#|\?|$/);
    return e[t - 1] === "/" ? e.slice(0, t - 1) + e.slice(t) : e
}

function Vt(e) {
    return e && e[0] !== "?" ? `?${e}` : e
}
var yu = (() => {
        class e {
            historyGo(n) {
                throw new Error("")
            }
            static\ u0275fac = function(r) {
                return new(r || e)
            };
            static\ u0275prov = k({
                token: e,
                factory: () => m(wT),
                providedIn: "root"
            })
        }
        return e
    })(),
    ET = new T(""),
    wT = (() => {
        class e extends yu {
            _platformLocation;
            _baseHref;
            _removeListenerFns = [];
            constructor(n, r) {
                super(), this._platformLocation = n, this._baseHref = r ? ? this._platformLocation.getBaseHrefFromDOM() ? ? m(Li).location ? .origin ? ? ""
            }
            ngOnDestroy() {
                for (; this._removeListenerFns.length;) this._removeListenerFns.pop()()
            }
            onPopState(n) {
                this._removeListenerFns.push(this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n))
            }
            getBaseHref() {
                return this._baseHref
            }
            prepareExternalUrl(n) {
                return wg(this._baseHref, n)
            }
            path(n = !1) {
                let r = this._platformLocation.pathname + Vt(this._platformLocation.search),
                    o = this._platformLocation.hash;
                return o && n ? `${r}${o}` : r
            }
            pushState(n, r, o, i) {
                let s = this.prepareExternalUrl(o + Vt(i));
                this._platformLocation.pushState(n, r, s)
            }
            replaceState(n, r, o, i) {
                let s = this.prepareExternalUrl(o + Vt(i));
                this._platformLocation.replaceState(n, r, s)
            }
            forward() {
                this._platformLocation.forward()
            }
            back() {
                this._platformLocation.back()
            }
            getState() {
                return this._platformLocation.getState()
            }
            historyGo(n = 0) {
                this._platformLocation.historyGo ? .(n)
            }
            static\ u0275fac = function(r) {
                return new(r || e)(U(Eg), U(ET, 8))
            };
            static\ u0275prov = k({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
        return e
    })();
var IT = (() => {
    class e {
        _subject = new W;
        _basePath;
        _locationStrategy;
        _urlChangeListeners = [];
        _urlChangeSubscription = null;
        constructor(n) {
            this._locationStrategy = n;
            let r = this._locationStrategy.getBaseHref();
            this._basePath = TT(pg(hg(r))), this._locationStrategy.onPopState(o => {
                this._subject.next({
                    url: this.path(!0),
                    pop: !0,
                    state: o.state,
                    type: o.type
                })
            })
        }
        ngOnDestroy() {
            this._urlChangeSubscription ? .unsubscribe(), this._urlChangeListeners = []
        }
        path(n = !1) {
            return this.normalize(this._locationStrategy.path(n))
        }
        getState() {
            return this._locationStrategy.getState()
        }
        isCurrentPathEqualTo(n, r = "") {
            return this.path() == this.normalize(n + Vt(r))
        }
        normalize(n) {
            return e.stripTrailingSlash(CT(this._basePath, hg(n)))
        }
        prepareExternalUrl(n) {
            return n && n[0] !== "/" && (n = "/" + n), this._locationStrategy.prepareExternalUrl(n)
        }
        go(n, r = "", o = null) {
            this._locationStrategy.pushState(o, "", n, r), this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Vt(r)), o)
        }
        replaceState(n, r = "", o = null) {
            this._locationStrategy.replaceState(o, "", n, r), this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Vt(r)), o)
        }
        forward() {
            this._locationStrategy.forward()
        }
        back() {
            this._locationStrategy.back()
        }
        historyGo(n = 0) {
            this._locationStrategy.historyGo ? .(n)
        }
        onUrlChange(n) {
            return this._urlChangeListeners.push(n), this._urlChangeSubscription ? ? = this.subscribe(r => {
                this._notifyUrlChangeListeners(r.url, r.state)
            }), () => {
                let r = this._urlChangeListeners.indexOf(n);
                this._urlChangeListeners.splice(r, 1), this._urlChangeListeners.length === 0 && (this._urlChangeSubscription ? .unsubscribe(), this._urlChangeSubscription = null)
            }
        }
        _notifyUrlChangeListeners(n = "", r) {
            this._urlChangeListeners.forEach(o => o(n, r))
        }
        subscribe(n, r, o) {
            return this._subject.subscribe({
                next: n,
                error: r ? ? void 0,
                complete: o ? ? void 0
            })
        }
        static normalizeQueryParams = Vt;
        static joinWithSlash = wg;
        static stripTrailingSlash = pg;
        static\ u0275fac = function(r) {
            return new(r || e)(U(yu))
        };
        static\ u0275prov = k({
            token: e,
            factory: () => bT(),
            providedIn: "root"
        })
    }
    return e
})();

function bT() {
    return new IT(U(yu))
}

function CT(e, t) {
    if (!e || !t.startsWith(e)) return t;
    let n = t.substring(e.length);
    return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t
}

function hg(e) {
    return e.replace(/\/index.html$/, "")
}

function TT(e) {
    if (new RegExp("^(https?:)?//").test(e)) {
        let [, n] = e.split(/\/\/[^\/]+/);
        return n
    }
    return e
}
var Ig = function(e) {
    return e[e.Decimal = 0] = "Decimal", e[e.Percent = 1] = "Percent", e[e.Currency = 2] = "Currency", e[e.Scientific = 3] = "Scientific", e
}(Ig || {});
var tt = {
    Decimal: 0,
    Group: 1,
    List: 2,
    PercentSign: 3,
    PlusSign: 4,
    MinusSign: 5,
    Exponential: 6,
    SuperscriptingExponent: 7,
    PerMille: 8,
    Infinity: 9,
    NaN: 10,
    TimeSeparator: 11,
    CurrencyDecimal: 12,
    CurrencyGroup: 13
};

function dr(e, t) {
    let n = su(e),
        r = n[_n.NumberSymbols][t];
    if (typeof r > "u") {
        if (t === tt.CurrencyDecimal) return n[_n.NumberSymbols][tt.Decimal];
        if (t === tt.CurrencyGroup) return n[_n.NumberSymbols][tt.Group]
    }
    return r
}

function _T(e, t) {
    return su(e)[_n.NumberFormats][t]
}
var MT = /^(\d+)?\.((\d+)(-(\d+))?)?$/,
    gg = 22,
    Fi = ".",
    fr = "0",
    ST = ";",
    NT = ",",
    du = "#";

function xT(e, t, n, r, o, i, s = !1) {
    let a = "",
        c = !1;
    if (!isFinite(e)) a = dr(n, tt.Infinity);
    else {
        let u = kT(e);
        s && (u = OT(u));
        let l = t.minInt,
            d = t.minFrac,
            p = t.maxFrac;
        if (i) {
            let O = i.match(MT);
            if (O === null) throw new Error(`${i} is not a valid digit info`);
            let V = O[1],
                De = O[3],
                xe = O[5];
            V != null && (l = fu(V)), De != null && (d = fu(De)), xe != null ? p = fu(xe) : De != null && d > p && (p = d)
        }
        FT(u, d, p);
        let f = u.digits,
            h = u.integerLen,
            g = u.exponent,
            y = [];
        for (c = f.every(O => !O); h < l; h++) f.unshift(0);
        for (; h < 0; h++) f.unshift(0);
        h > 0 ? y = f.splice(h, f.length) : (y = f, f = [0]);
        let v = [];
        for (f.length >= t.lgSize && v.unshift(f.splice(-t.lgSize, f.length).join("")); f.length > t.gSize;) v.unshift(f.splice(-t.gSize, f.length).join(""));
        f.length && v.unshift(f.join("")), a = v.join(dr(n, r)), y.length && (a += dr(n, o) + y.join("")), g && (a += dr(n, tt.Exponential) + "+" + g)
    }
    return e < 0 && !c ? a = t.negPre + a + t.negSuf : a = t.posPre + a + t.posSuf, a
}

function AT(e, t, n) {
    let r = _T(t, Ig.Decimal),
        o = RT(r, dr(t, tt.MinusSign));
    return xT(e, o, t, tt.Group, tt.Decimal, n)
}

function RT(e, t = "-") {
    let n = {
            minInt: 1,
            minFrac: 0,
            maxFrac: 0,
            posPre: "",
            posSuf: "",
            negPre: "",
            negSuf: "",
            gSize: 0,
            lgSize: 0
        },
        r = e.split(ST),
        o = r[0],
        i = r[1],
        s = o.indexOf(Fi) !== -1 ? o.split(Fi) : [o.substring(0, o.lastIndexOf(fr) + 1), o.substring(o.lastIndexOf(fr) + 1)],
        a = s[0],
        c = s[1] || "";
    n.posPre = a.substring(0, a.indexOf(du));
    for (let l = 0; l < c.length; l++) {
        let d = c.charAt(l);
        d === fr ? n.minFrac = n.maxFrac = l + 1 : d === du ? n.maxFrac = l + 1 : n.posSuf += d
    }
    let u = a.split(NT);
    if (n.gSize = u[1] ? u[1].length : 0, n.lgSize = u[2] || u[1] ? (u[2] || u[1]).length : 0, i) {
        let l = o.length - n.posPre.length - n.posSuf.length,
            d = i.indexOf(du);
        n.negPre = i.substring(0, d).replace(/'/g, ""), n.negSuf = i.slice(d + l).replace(/'/g, "")
    } else n.negPre = t + n.posPre, n.negSuf = n.posSuf;
    return n
}

function OT(e) {
    if (e.digits[0] === 0) return e;
    let t = e.digits.length - e.integerLen;
    return e.exponent ? e.exponent += 2 : (t === 0 ? e.digits.push(0, 0) : t === 1 && e.digits.push(0), e.integerLen += 2), e
}

function kT(e) {
    let t = Math.abs(e) + "",
        n = 0,
        r, o, i, s, a;
    for ((o = t.indexOf(Fi)) > -1 && (t = t.replace(Fi, "")), (i = t.search(/e/i)) > 0 ? (o < 0 && (o = i), o += +t.slice(i + 1), t = t.substring(0, i)) : o < 0 && (o = t.length), i = 0; t.charAt(i) === fr; i++);
    if (i === (a = t.length)) r = [0], o = 1;
    else {
        for (a--; t.charAt(a) === fr;) a--;
        for (o -= i, r = [], s = 0; i <= a; i++, s++) r[s] = Number(t.charAt(i))
    }
    return o > gg && (r = r.splice(0, gg - 1), n = o - 1, o = 1), {
        digits: r,
        exponent: n,
        integerLen: o
    }
}

function FT(e, t, n) {
    if (t > n) throw new Error(`The minimum number of digits after fraction (${t}) is higher than the maximum (${n}).`);
    let r = e.digits,
        o = r.length - e.integerLen,
        i = Math.min(Math.max(t, o), n),
        s = i + e.integerLen,
        a = r[s];
    if (s > 0) {
        r.splice(Math.max(e.integerLen, s));
        for (let d = s; d < r.length; d++) r[d] = 0
    } else {
        o = Math.max(0, o), e.integerLen = 1, r.length = Math.max(1, s = i + 1), r[0] = 0;
        for (let d = 1; d < s; d++) r[d] = 0
    }
    if (a >= 5)
        if (s - 1 < 0) {
            for (let d = 0; d > s; d--) r.unshift(0), e.integerLen++;
            r.unshift(1), e.integerLen++
        } else r[s - 1]++;
    for (; o < Math.max(0, i); o++) r.push(0);
    let c = i !== 0,
        u = t + e.integerLen,
        l = r.reduceRight(function(d, p, f, h) {
            return p = p + d, h[f] = p < 10 ? p : p - 10, c && (h[f] === 0 && f >= u ? h.pop() : c = !1), p >= 10 ? 1 : 0
        }, 0);
    l && (r.unshift(l), e.integerLen++)
}

function fu(e) {
    let t = parseInt(e);
    if (isNaN(t)) throw new Error("Invalid integer literal when parsing " + e);
    return t
}

function bg(e, t) {
    t = encodeURIComponent(t);
    for (let n of e.split(";")) {
        let r = n.indexOf("="),
            [o, i] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
        if (o.trim() === t) return decodeURIComponent(i)
    }
    return null
}
var pu = /\s+/,
    mg = [],
    KF = (() => {
        class e {
            _ngEl;
            _renderer;
            initialClasses = mg;
            rawClass;
            stateMap = new Map;
            constructor(n, r) {
                this._ngEl = n, this._renderer = r
            }
            set klass(n) {
                this.initialClasses = n != null ? n.trim().split(pu) : mg
            }
            set ngClass(n) {
                this.rawClass = typeof n == "string" ? n.trim().split(pu) : n
            }
            ngDoCheck() {
                for (let r of this.initialClasses) this._updateState(r, !0);
                let n = this.rawClass;
                if (Array.isArray(n) || n instanceof Set)
                    for (let r of n) this._updateState(r, !0);
                else if (n != null)
                    for (let r of Object.keys(n)) this._updateState(r, !!n[r]);
                this._applyStateDiff()
            }
            _updateState(n, r) {
                let o = this.stateMap.get(n);
                o !== void 0 ? (o.enabled !== r && (o.changed = !0, o.enabled = r), o.touched = !0) : this.stateMap.set(n, {
                    enabled: r,
                    changed: !0,
                    touched: !0
                })
            }
            _applyStateDiff() {
                for (let n of this.stateMap) {
                    let r = n[0],
                        o = n[1];
                    o.changed ? (this._toggleClass(r, o.enabled), o.changed = !1) : o.touched || (o.enabled && this._toggleClass(r, !1), this.stateMap.delete(r)), o.touched = !1
                }
            }
            _toggleClass(n, r) {
                n = n.trim(), n.length > 0 && n.split(pu).forEach(o => {
                    r ? this._renderer.addClass(this._ngEl.nativeElement, o) : this._renderer.removeClass(this._ngEl.nativeElement, o)
                })
            }
            static\ u0275fac = function(r) {
                return new(r || e)(fe(Lt), fe(Jc))
            };
            static\ u0275dir = Ai({
                type: e,
                selectors: [
                    ["", "ngClass", ""]
                ],
                inputs: {
                    klass: [0, "class", "klass"],
                    ngClass: "ngClass"
                }
            })
        }
        return e
    })();
var JF = (() => {
        class e {
            _viewContainer;
            _context = new hu;
            _thenTemplateRef = null;
            _elseTemplateRef = null;
            _thenViewRef = null;
            _elseViewRef = null;
            constructor(n, r) {
                this._viewContainer = n, this._thenTemplateRef = r
            }
            set ngIf(n) {
                this._context.$implicit = this._context.ngIf = n, this._updateView()
            }
            set ngIfThen(n) {
                yg(n, !1), this._thenTemplateRef = n, this._thenViewRef = null, this._updateView()
            }
            set ngIfElse(n) {
                yg(n, !1), this._elseTemplateRef = n, this._elseViewRef = null, this._updateView()
            }
            _updateView() {
                this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
            }
            static ngIfUseIfTypeGuard;
            static ngTemplateGuard_ngIf;
            static ngTemplateContextGuard(n, r) {
                return !0
            }
            static\ u0275fac = function(r) {
                return new(r || e)(fe(Tn), fe(dn))
            };
            static\ u0275dir = Ai({
                type: e,
                selectors: [
                    ["", "ngIf", ""]
                ],
                inputs: {
                    ngIf: "ngIf",
                    ngIfThen: "ngIfThen",
                    ngIfElse: "ngIfElse"
                }
            })
        }
        return e
    })(),
    hu = class {
        $implicit = null;
        ngIf = null
    };

function yg(e, t) {
    if (e && !e.createEmbeddedView) throw new b(2020, !1)
}
var XF = (() => {
    class e {
        _viewContainerRef;
        _viewRef = null;
        ngTemplateOutletContext = null;
        ngTemplateOutlet = null;
        ngTemplateOutletInjector = null;
        constructor(n) {
            this._viewContainerRef = n
        }
        ngOnChanges(n) {
            if (this._shouldRecreateView(n)) {
                let r = this._viewContainerRef;
                if (this._viewRef && r.remove(r.indexOf(this._viewRef)), !this.ngTemplateOutlet) {
                    this._viewRef = null;
                    return
                }
                let o = this._createContextForwardProxy();
                this._viewRef = r.createEmbeddedView(this.ngTemplateOutlet, o, {
                    injector: this.ngTemplateOutletInjector ? ? void 0
                })
            }
        }
        _shouldRecreateView(n) {
            return !!n.ngTemplateOutlet || !!n.ngTemplateOutletInjector
        }
        _createContextForwardProxy() {
            return new Proxy({}, {
                set: (n, r, o) => this.ngTemplateOutletContext ? Reflect.set(this.ngTemplateOutletContext, r, o) : !1,
                get: (n, r, o) => {
                    if (this.ngTemplateOutletContext) return Reflect.get(this.ngTemplateOutletContext, r, o)
                }
            })
        }
        static\ u0275fac = function(r) {
            return new(r || e)(fe(Tn))
        };
        static\ u0275dir = Ai({
            type: e,
            selectors: [
                ["", "ngTemplateOutlet", ""]
            ],
            inputs: {
                ngTemplateOutletContext: "ngTemplateOutletContext",
                ngTemplateOutlet: "ngTemplateOutlet",
                ngTemplateOutletInjector: "ngTemplateOutletInjector"
            },
            features: [gf]
        })
    }
    return e
})();

function Cg(e, t) {
    return new b(2100, !1)
}
var gu = class {
        createSubscription(t, n) {
            return uu(() => t.subscribe({
                next: n,
                error: r => {
                    throw r
                }
            }))
        }
        dispose(t) {
            uu(() => t.unsubscribe())
        }
    },
    mu = class {
        createSubscription(t, n) {
            return t.then(n, r => {
                throw r
            })
        }
        dispose(t) {}
    },
    PT = new mu,
    LT = new gu,
    eP = (() => {
        class e {
            _ref;
            _latestValue = null;
            markForCheckOnValueUpdate = !0;
            _subscription = null;
            _obj = null;
            _strategy = null;
            constructor(n) {
                this._ref = n
            }
            ngOnDestroy() {
                this._subscription && this._dispose(), this._ref = null
            }
            transform(n) {
                if (!this._obj) {
                    if (n) try {
                        this.markForCheckOnValueUpdate = !1, this._subscribe(n)
                    } finally {
                        this.markForCheckOnValueUpdate = !0
                    }
                    return this._latestValue
                }
                return n !== this._obj ? (this._dispose(), this.transform(n)) : this._latestValue
            }
            _subscribe(n) {
                this._obj = n, this._strategy = this._selectStrategy(n), this._subscription = this._strategy.createSubscription(n, r => this._updateLatestValue(n, r))
            }
            _selectStrategy(n) {
                if (Oi(n)) return PT;
                if (iu(n)) return LT;
                throw Cg(e, n)
            }
            _dispose() {
                this._strategy.dispose(this._subscription), this._latestValue = null, this._subscription = null, this._obj = null
            }
            _updateLatestValue(n, r) {
                n === this._obj && (this._latestValue = r, this.markForCheckOnValueUpdate && this._ref ? .markForCheck())
            }
            static\ u0275fac = function(r) {
                return new(r || e)(fe(au, 16))
            };
            static\ u0275pipe = Ri({
                name: "async",
                type: e,
                pure: !1
            })
        }
        return e
    })();

function jT(e, t) {
    return {
        key: e,
        value: t
    }
}
var tP = (() => {
    class e {
        differs;
        constructor(n) {
            this.differs = n
        }
        differ;
        keyValues = [];
        compareFn = vg;
        transform(n, r = vg) {
            if (!n || !(n instanceof Map) && typeof n != "object") return null;
            this.differ ? ? = this.differs.find(n).create();
            let o = this.differ.diff(n),
                i = r !== this.compareFn;
            return o && (this.keyValues = [], o.forEachItem(s => {
                this.keyValues.push(jT(s.key, s.currentValue))
            })), (o || i) && (r && this.keyValues.sort(r), this.compareFn = r), this.keyValues
        }
        static\ u0275fac = function(r) {
            return new(r || e)(fe(cu, 16))
        };
        static\ u0275pipe = Ri({
            name: "keyvalue",
            type: e,
            pure: !1
        })
    }
    return e
})();

function vg(e, t) {
    let n = e.key,
        r = t.key;
    if (n === r) return 0;
    if (n == null) return 1;
    if (r == null) return -1;
    if (typeof n == "string" && typeof r == "string") return n < r ? -1 : 1;
    if (typeof n == "number" && typeof r == "number") return n - r;
    if (typeof n == "boolean" && typeof r == "boolean") return n < r ? -1 : 1;
    let o = String(n),
        i = String(r);
    return o == i ? 0 : o < i ? -1 : 1
}
var nP = (() => {
    class e {
        _locale;
        constructor(n) {
            this._locale = n
        }
        transform(n, r, o) {
            if (!VT(n)) return null;
            o || = this._locale;
            try {
                let i = BT(n);
                return AT(i, o, r)
            } catch (i) {
                throw Cg(e, i.message)
            }
        }
        static\ u0275fac = function(r) {
            return new(r || e)(fe(ki, 16))
        };
        static\ u0275pipe = Ri({
            name: "number",
            type: e,
            pure: !0
        })
    }
    return e
})();

function VT(e) {
    return !(e == null || e === "" || e !== e)
}

function BT(e) {
    if (typeof e == "string" && !isNaN(Number(e) - parseFloat(e))) return Number(e);
    if (typeof e != "number") throw new Error(`${e} is not a number`);
    return e
}
var rP = (() => {
        class e {
            static\ u0275fac = function(r) {
                return new(r || e)
            };
            static\ u0275mod = ru({
                type: e
            });
            static\ u0275inj = sc({})
        }
        return e
    })(),
    UT = "browser",
    $T = "server";

function oP(e) {
    return e === UT
}

function iP(e) {
    return e === $T
}
var Pi = class {};
var gr = class {},
    mr = class {},
    Ve = class e {
        headers;
        normalizedNames = new Map;
        lazyInit;
        lazyUpdate = null;
        constructor(t) {
            t ? typeof t == "string" ? this.lazyInit = () => {
                this.headers = new Map, t.split(`
`).forEach(n => {
                    let r = n.indexOf(":");
                    if (r > 0) {
                        let o = n.slice(0, r),
                            i = n.slice(r + 1).trim();
                        this.addHeaderEntry(o, i)
                    }
                })
            } : typeof Headers < "u" && t instanceof Headers ? (this.headers = new Map, t.forEach((n, r) => {
                this.addHeaderEntry(r, n)
            })) : this.lazyInit = () => {
                this.headers = new Map, Object.entries(t).forEach(([n, r]) => {
                    this.setHeaderEntries(n, r)
                })
            } : this.headers = new Map
        }
        has(t) {
            return this.init(), this.headers.has(t.toLowerCase())
        }
        get(t) {
            this.init();
            let n = this.headers.get(t.toLowerCase());
            return n && n.length > 0 ? n[0] : null
        }
        keys() {
            return this.init(), Array.from(this.normalizedNames.values())
        }
        getAll(t) {
            return this.init(), this.headers.get(t.toLowerCase()) || null
        }
        append(t, n) {
            return this.clone({
                name: t,
                value: n,
                op: "a"
            })
        }
        set(t, n) {
            return this.clone({
                name: t,
                value: n,
                op: "s"
            })
        }
        delete(t, n) {
            return this.clone({
                name: t,
                value: n,
                op: "d"
            })
        }
        maybeSetNormalizedName(t, n) {
            this.normalizedNames.has(n) || this.normalizedNames.set(n, t)
        }
        init() {
            this.lazyInit && (this.lazyInit instanceof e ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(t => this.applyUpdate(t)), this.lazyUpdate = null))
        }
        copyFrom(t) {
            t.init(), Array.from(t.headers.keys()).forEach(n => {
                this.headers.set(n, t.headers.get(n)), this.normalizedNames.set(n, t.normalizedNames.get(n))
            })
        }
        clone(t) {
            let n = new e;
            return n.lazyInit = this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this, n.lazyUpdate = (this.lazyUpdate || []).concat([t]), n
        }
        applyUpdate(t) {
            let n = t.name.toLowerCase();
            switch (t.op) {
                case "a":
                case "s":
                    let r = t.value;
                    if (typeof r == "string" && (r = [r]), r.length === 0) return;
                    this.maybeSetNormalizedName(t.name, n);
                    let o = (t.op === "a" ? this.headers.get(n) : void 0) || [];
                    o.push(...r), this.headers.set(n, o);
                    break;
                case "d":
                    let i = t.value;
                    if (!i) this.headers.delete(n), this.normalizedNames.delete(n);
                    else {
                        let s = this.headers.get(n);
                        if (!s) return;
                        s = s.filter(a => i.indexOf(a) === -1), s.length === 0 ? (this.headers.delete(n), this.normalizedNames.delete(n)) : this.headers.set(n, s)
                    }
                    break
            }
        }
        addHeaderEntry(t, n) {
            let r = t.toLowerCase();
            this.maybeSetNormalizedName(t, r), this.headers.has(r) ? this.headers.get(r).push(n) : this.headers.set(r, [n])
        }
        setHeaderEntries(t, n) {
            let r = (Array.isArray(n) ? n : [n]).map(i => i.toString()),
                o = t.toLowerCase();
            this.headers.set(o, r), this.maybeSetNormalizedName(t, o)
        }
        forEach(t) {
            this.init(), Array.from(this.normalizedNames.keys()).forEach(n => t(this.normalizedNames.get(n), this.headers.get(n)))
        }
    };
var Eu = class {
    encodeKey(t) {
        return Tg(t)
    }
    encodeValue(t) {
        return Tg(t)
    }
    decodeKey(t) {
        return decodeURIComponent(t)
    }
    decodeValue(t) {
        return decodeURIComponent(t)
    }
};

function zT(e, t) {
    let n = new Map;
    return e.length > 0 && e.replace(/^\?/, "").split("&").forEach(o => {
        let i = o.indexOf("="),
            [s, a] = i == -1 ? [t.decodeKey(o), ""] : [t.decodeKey(o.slice(0, i)), t.decodeValue(o.slice(i + 1))],
            c = n.get(s) || [];
        c.push(a), n.set(s, c)
    }), n
}
var GT = /%(\d[a-f0-9])/gi,
    qT = {
        40: "@",
        "3A": ":",
        24: "$",
        "2C": ",",
        "3B": ";",
        "3D": "=",
        "3F": "?",
        "2F": "/"
    };

function Tg(e) {
    return encodeURIComponent(e).replace(GT, (t, n) => qT[n] ? ? t)
}

function ji(e) {
    return `${e}`
}
var lt = class e {
    map;
    encoder;
    updates = null;
    cloneFrom = null;
    constructor(t = {}) {
        if (this.encoder = t.encoder || new Eu, t.fromString) {
            if (t.fromObject) throw new b(2805, !1);
            this.map = zT(t.fromString, this.encoder)
        } else t.fromObject ? (this.map = new Map, Object.keys(t.fromObject).forEach(n => {
            let r = t.fromObject[n],
                o = Array.isArray(r) ? r.map(ji) : [ji(r)];
            this.map.set(n, o)
        })) : this.map = null
    }
    has(t) {
        return this.init(), this.map.has(t)
    }
    get(t) {
        this.init();
        let n = this.map.get(t);
        return n ? n[0] : null
    }
    getAll(t) {
        return this.init(), this.map.get(t) || null
    }
    keys() {
        return this.init(), Array.from(this.map.keys())
    }
    append(t, n) {
        return this.clone({
            param: t,
            value: n,
            op: "a"
        })
    }
    appendAll(t) {
        let n = [];
        return Object.keys(t).forEach(r => {
            let o = t[r];
            Array.isArray(o) ? o.forEach(i => {
                n.push({
                    param: r,
                    value: i,
                    op: "a"
                })
            }) : n.push({
                param: r,
                value: o,
                op: "a"
            })
        }), this.clone(n)
    }
    set(t, n) {
        return this.clone({
            param: t,
            value: n,
            op: "s"
        })
    }
    delete(t, n) {
        return this.clone({
            param: t,
            value: n,
            op: "d"
        })
    }
    toString() {
        return this.init(), this.keys().map(t => {
            let n = this.encoder.encodeKey(t);
            return this.map.get(t).map(r => n + "=" + this.encoder.encodeValue(r)).join("&")
        }).filter(t => t !== "").join("&")
    }
    clone(t) {
        let n = new e({
            encoder: this.encoder
        });
        return n.cloneFrom = this.cloneFrom || this, n.updates = (this.updates || []).concat(t), n
    }
    init() {
        this.map === null && (this.map = new Map), this.cloneFrom !== null && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(t => this.map.set(t, this.cloneFrom.map.get(t))), this.updates.forEach(t => {
            switch (t.op) {
                case "a":
                case "s":
                    let n = (t.op === "a" ? this.map.get(t.param) : void 0) || [];
                    n.push(ji(t.value)), this.map.set(t.param, n);
                    break;
                case "d":
                    if (t.value !== void 0) {
                        let r = this.map.get(t.param) || [],
                            o = r.indexOf(ji(t.value));
                        o !== -1 && r.splice(o, 1), r.length > 0 ? this.map.set(t.param, r) : this.map.delete(t.param)
                    } else {
                        this.map.delete(t.param);
                        break
                    }
            }
        }), this.cloneFrom = this.updates = null)
    }
};
var wu = class {
    map = new Map;
    set(t, n) {
        return this.map.set(t, n), this
    }
    get(t) {
        return this.map.has(t) || this.map.set(t, t.defaultValue()), this.map.get(t)
    }
    delete(t) {
        return this.map.delete(t), this
    }
    has(t) {
        return this.map.has(t)
    }
    keys() {
        return this.map.keys()
    }
};

function WT(e) {
    switch (e) {
        case "DELETE":
        case "GET":
        case "HEAD":
        case "OPTIONS":
        case "JSONP":
            return !1;
        default:
            return !0
    }
}

function _g(e) {
    return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer
}

function Mg(e) {
    return typeof Blob < "u" && e instanceof Blob
}

function Sg(e) {
    return typeof FormData < "u" && e instanceof FormData
}

function ZT(e) {
    return typeof URLSearchParams < "u" && e instanceof URLSearchParams
}
var pr = "Content-Type",
    Vi = "Accept",
    Tu = "X-Request-URL",
    kg = "text/plain",
    Fg = "application/json",
    Pg = `${Fg}, ${kg}, */*`,
    hr = class e {
        url;
        body = null;
        headers;
        context;
        reportProgress = !1;
        withCredentials = !1;
        responseType = "json";
        method;
        params;
        urlWithParams;
        transferCache;
        constructor(t, n, r, o) {
            this.url = n, this.method = t.toUpperCase();
            let i;
            if (WT(this.method) || o ? (this.body = r !== void 0 ? r : null, i = o) : i = r, i && (this.reportProgress = !!i.reportProgress, this.withCredentials = !!i.withCredentials, i.responseType && (this.responseType = i.responseType), i.headers && (this.headers = i.headers), i.context && (this.context = i.context), i.params && (this.params = i.params), this.transferCache = i.transferCache), this.headers ? ? = new Ve, this.context ? ? = new wu, !this.params) this.params = new lt, this.urlWithParams = n;
            else {
                let s = this.params.toString();
                if (s.length === 0) this.urlWithParams = n;
                else {
                    let a = n.indexOf("?"),
                        c = a === -1 ? "?" : a < n.length - 1 ? "&" : "";
                    this.urlWithParams = n + c + s
                }
            }
        }
        serializeBody() {
            return this.body === null ? null : typeof this.body == "string" || _g(this.body) || Mg(this.body) || Sg(this.body) || ZT(this.body) ? this.body : this.body instanceof lt ? this.body.toString() : typeof this.body == "object" || typeof this.body == "boolean" || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
        }
        detectContentTypeHeader() {
            return this.body === null || Sg(this.body) ? null : Mg(this.body) ? this.body.type || null : _g(this.body) ? null : typeof this.body == "string" ? kg : this.body instanceof lt ? "application/x-www-form-urlencoded;charset=UTF-8" : typeof this.body == "object" || typeof this.body == "number" || typeof this.body == "boolean" ? Fg : null
        }
        clone(t = {}) {
            let n = t.method || this.method,
                r = t.url || this.url,
                o = t.responseType || this.responseType,
                i = t.transferCache ? ? this.transferCache,
                s = t.body !== void 0 ? t.body : this.body,
                a = t.withCredentials ? ? this.withCredentials,
                c = t.reportProgress ? ? this.reportProgress,
                u = t.headers || this.headers,
                l = t.params || this.params,
                d = t.context ? ? this.context;
            return t.setHeaders !== void 0 && (u = Object.keys(t.setHeaders).reduce((p, f) => p.set(f, t.setHeaders[f]), u)), t.setParams && (l = Object.keys(t.setParams).reduce((p, f) => p.set(f, t.setParams[f]), l)), new e(n, r, s, {
                params: l,
                headers: u,
                context: d,
                reportProgress: c,
                responseType: o,
                withCredentials: a,
                transferCache: i
            })
        }
    },
    dt = function(e) {
        return e[e.Sent = 0] = "Sent", e[e.UploadProgress = 1] = "UploadProgress", e[e.ResponseHeader = 2] = "ResponseHeader", e[e.DownloadProgress = 3] = "DownloadProgress", e[e.Response = 4] = "Response", e[e.User = 5] = "User", e
    }(dt || {}),
    yr = class {
        headers;
        status;
        statusText;
        url;
        ok;
        type;
        constructor(t, n = 200, r = "OK") {
            this.headers = t.headers || new Ve, this.status = t.status !== void 0 ? t.status : n, this.statusText = t.statusText || r, this.url = t.url || null, this.ok = this.status >= 200 && this.status < 300
        }
    },
    Bi = class e extends yr {
        constructor(t = {}) {
            super(t)
        }
        type = dt.ResponseHeader;
        clone(t = {}) {
            return new e({
                headers: t.headers || this.headers,
                status: t.status !== void 0 ? t.status : this.status,
                statusText: t.statusText || this.statusText,
                url: t.url || this.url || void 0
            })
        }
    },
    Bt = class e extends yr {
        body;
        constructor(t = {}) {
            super(t), this.body = t.body !== void 0 ? t.body : null
        }
        type = dt.Response;
        clone(t = {}) {
            return new e({
                body: t.body !== void 0 ? t.body : this.body,
                headers: t.headers || this.headers,
                status: t.status !== void 0 ? t.status : this.status,
                statusText: t.statusText || this.statusText,
                url: t.url || this.url || void 0
            })
        }
    },
    ut = class extends yr {
        name = "HttpErrorResponse";
        message;
        error;
        ok = !1;
        constructor(t) {
            super(t, 0, "Unknown Error"), this.status >= 200 && this.status < 300 ? this.message = `Http failure during parsing for ${t.url||"(unknown url)"}` : this.message = `Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`, this.error = t.error || null
        }
    },
    Lg = 200,
    YT = 204;

function vu(e, t) {
    return {
        body: t,
        headers: e.headers,
        context: e.context,
        observe: e.observe,
        params: e.params,
        reportProgress: e.reportProgress,
        responseType: e.responseType,
        withCredentials: e.withCredentials,
        transferCache: e.transferCache
    }
}
var QT = (() => {
        class e {
            handler;
            constructor(n) {
                this.handler = n
            }
            request(n, r, o = {}) {
                let i;
                if (n instanceof hr) i = n;
                else {
                    let c;
                    o.headers instanceof Ve ? c = o.headers : c = new Ve(o.headers);
                    let u;
                    o.params && (o.params instanceof lt ? u = o.params : u = new lt({
                        fromObject: o.params
                    })), i = new hr(n, r, o.body !== void 0 ? o.body : null, {
                        headers: c,
                        context: o.context,
                        params: u,
                        reportProgress: o.reportProgress,
                        responseType: o.responseType || "json",
                        withCredentials: o.withCredentials,
                        transferCache: o.transferCache
                    })
                }
                let s = On(i).pipe(es(c => this.handler.handle(c)));
                if (n instanceof hr || o.observe === "events") return s;
                let a = s.pipe(Ae(c => c instanceof Bt));
                switch (o.observe || "body") {
                    case "body":
                        switch (i.responseType) {
                            case "arraybuffer":
                                return a.pipe(J(c => {
                                    if (c.body !== null && !(c.body instanceof ArrayBuffer)) throw new b(2806, !1);
                                    return c.body
                                }));
                            case "blob":
                                return a.pipe(J(c => {
                                    if (c.body !== null && !(c.body instanceof Blob)) throw new b(2807, !1);
                                    return c.body
                                }));
                            case "text":
                                return a.pipe(J(c => {
                                    if (c.body !== null && typeof c.body != "string") throw new b(2808, !1);
                                    return c.body
                                }));
                            case "json":
                            default:
                                return a.pipe(J(c => c.body))
                        }
                    case "response":
                        return a;
                    default:
                        throw new b(2809, !1)
                }
            }
            delete(n, r = {}) {
                return this.request("DELETE", n, r)
            }
            get(n, r = {}) {
                return this.request("GET", n, r)
            }
            head(n, r = {}) {
                return this.request("HEAD", n, r)
            }
            jsonp(n, r) {
                return this.request("JSONP", n, {
                    params: new lt().append(r, "JSONP_CALLBACK"),
                    observe: "body",
                    responseType: "json"
                })
            }
            options(n, r = {}) {
                return this.request("OPTIONS", n, r)
            }
            patch(n, r, o = {}) {
                return this.request("PATCH", n, vu(o, r))
            }
            post(n, r, o = {}) {
                return this.request("POST", n, vu(o, r))
            }
            put(n, r, o = {}) {
                return this.request("PUT", n, vu(o, r))
            }
            static\ u0275fac = function(r) {
                return new(r || e)(U(gr))
            };
            static\ u0275prov = k({
                token: e,
                factory: e.\u0275fac
            })
        }
        return e
    })(),
    KT = /^\)\]\}',?\n/;

function Ng(e) {
    if (e.url) return e.url;
    let t = Tu.toLocaleLowerCase();
    return e.headers.get(t)
}
var jg = new T(""),
    Du = (() => {
        class e {
            fetchImpl = m(Iu, {
                optional: !0
            }) ? .fetch ? ? ((...n) => globalThis.fetch(...n));
            ngZone = m(ae);
            handle(n) {
                return new N(r => {
                    let o = new AbortController;
                    return this.doRequest(n, o.signal, r).then(bu, i => r.error(new ut({
                        error: i
                    }))), () => o.abort()
                })
            }
            doRequest(n, r, o) {
                return Be(this, null, function*() {
                    let i = this.createRequestInit(n),
                        s;
                    try {
                        let f = this.ngZone.runOutsideAngular(() => this.fetchImpl(n.urlWithParams, Z({
                            signal: r
                        }, i)));
                        JT(f), o.next({
                            type: dt.Sent
                        }), s = yield f
                    } catch (f) {
                        o.error(new ut({
                            error: f,
                            status: f.status ? ? 0,
                            statusText: f.statusText,
                            url: n.urlWithParams,
                            headers: f.headers
                        }));
                        return
                    }
                    let a = new Ve(s.headers),
                        c = s.statusText,
                        u = Ng(s) ? ? n.urlWithParams,
                        l = s.status,
                        d = null;
                    if (n.reportProgress && o.next(new Bi({
                            headers: a,
                            status: l,
                            statusText: c,
                            url: u
                        })), s.body) {
                        let f = s.headers.get("content-length"),
                            h = [],
                            g = s.body.getReader(),
                            y = 0,
                            v, O, V = typeof Zone < "u" && Zone.current;
                        yield this.ngZone.runOutsideAngular(() => Be(this, null, function*() {
                            for (;;) {
                                let {
                                    done: xe,
                                    value: Mn
                                } = yield g.read();
                                if (xe) break;
                                if (h.push(Mn), y += Mn.length, n.reportProgress) {
                                    O = n.responseType === "text" ? (O ? ? "") + (v ? ? = new TextDecoder).decode(Mn, {
                                        stream: !0
                                    }) : void 0;
                                    let Su = () => o.next({
                                        type: dt.DownloadProgress,
                                        total: f ? +f : void 0,
                                        loaded: y,
                                        partialText: O
                                    });
                                    V ? V.run(Su) : Su()
                                }
                            }
                        }));
                        let De = this.concatChunks(h, y);
                        try {
                            let xe = s.headers.get(pr) ? ? "";
                            d = this.parseBody(n, De, xe)
                        } catch (xe) {
                            o.error(new ut({
                                error: xe,
                                headers: new Ve(s.headers),
                                status: s.status,
                                statusText: s.statusText,
                                url: Ng(s) ? ? n.urlWithParams
                            }));
                            return
                        }
                    }
                    l === 0 && (l = d ? Lg : 0), l >= 200 && l < 300 ? (o.next(new Bt({
                        body: d,
                        headers: a,
                        status: l,
                        statusText: c,
                        url: u
                    })), o.complete()) : o.error(new ut({
                        error: d,
                        headers: a,
                        status: l,
                        statusText: c,
                        url: u
                    }))
                })
            }
            parseBody(n, r, o) {
                switch (n.responseType) {
                    case "json":
                        let i = new TextDecoder().decode(r).replace(KT, "");
                        return i === "" ? null : JSON.parse(i);
                    case "text":
                        return new TextDecoder().decode(r);
                    case "blob":
                        return new Blob([r], {
                            type: o
                        });
                    case "arraybuffer":
                        return r.buffer
                }
            }
            createRequestInit(n) {
                let r = {},
                    o = n.withCredentials ? "include" : void 0;
                if (n.headers.forEach((i, s) => r[i] = s.join(",")), n.headers.has(Vi) || (r[Vi] = Pg), !n.headers.has(pr)) {
                    let i = n.detectContentTypeHeader();
                    i !== null && (r[pr] = i)
                }
                return {
                    body: n.serializeBody(),
                    method: n.method,
                    headers: r,
                    credentials: o
                }
            }
            concatChunks(n, r) {
                let o = new Uint8Array(r),
                    i = 0;
                for (let s of n) o.set(s, i), i += s.length;
                return o
            }
            static\ u0275fac = function(r) {
                return new(r || e)
            };
            static\ u0275prov = k({
                token: e,
                factory: e.\u0275fac
            })
        }
        return e
    })(),
    Iu = class {};

function bu() {}

function JT(e) {
    e.then(bu, bu)
}

function Vg(e, t) {
    return t(e)
}

function XT(e, t) {
    return (n, r) => t.intercept(n, {
        handle: o => e(o, r)
    })
}

function e_(e, t, n) {
    return (r, o) => ii(n, () => t(r, i => e(i, o)))
}
var t_ = new T(""),
    _u = new T(""),
    Bg = new T(""),
    Ug = new T("", {
        providedIn: "root",
        factory: () => !0
    });

function n_() {
    let e = null;
    return (t, n) => {
        e === null && (e = (m(t_, {
            optional: !0
        }) ? ? []).reduceRight(XT, Vg));
        let r = m(Xe);
        if (m(Ug)) {
            let i = r.add();
            return e(t, n).pipe(kn(() => r.remove(i)))
        } else return e(t, n)
    }
}
var xg = (() => {
    class e extends gr {
        backend;
        injector;
        chain = null;
        pendingTasks = m(Xe);
        contributeToStability = m(Ug);
        constructor(n, r) {
            super(), this.backend = n, this.injector = r
        }
        handle(n) {
            if (this.chain === null) {
                let r = Array.from(new Set([...this.injector.get(_u), ...this.injector.get(Bg, [])]));
                this.chain = r.reduceRight((o, i) => e_(o, i, this.injector), Vg)
            }
            if (this.contributeToStability) {
                let r = this.pendingTasks.add();
                return this.chain(n, o => this.backend.handle(o)).pipe(kn(() => this.pendingTasks.remove(r)))
            } else return this.chain(n, r => this.backend.handle(r))
        }
        static\ u0275fac = function(r) {
            return new(r || e)(U(mr), U(_e))
        };
        static\ u0275prov = k({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
})();
var r_ = /^\)\]\}',?\n/,
    o_ = RegExp(`^${Tu}:`, "m");

function i_(e) {
    return "responseURL" in e && e.responseURL ? e.responseURL : o_.test(e.getAllResponseHeaders()) ? e.getResponseHeader(Tu) : null
}
var Ag = (() => {
        class e {
            xhrFactory;
            constructor(n) {
                this.xhrFactory = n
            }
            handle(n) {
                if (n.method === "JSONP") throw new b(-2800, !1);
                let r = this.xhrFactory;
                return (r.\u0275loadImpl ? ge(r.\u0275loadImpl()) : On(null)).pipe(qr(() => new N(i => {
                    let s = r.build();
                    if (s.open(n.method, n.urlWithParams), n.withCredentials && (s.withCredentials = !0), n.headers.forEach((g, y) => s.setRequestHeader(g, y.join(","))), n.headers.has(Vi) || s.setRequestHeader(Vi, Pg), !n.headers.has(pr)) {
                        let g = n.detectContentTypeHeader();
                        g !== null && s.setRequestHeader(pr, g)
                    }
                    if (n.responseType) {
                        let g = n.responseType.toLowerCase();
                        s.responseType = g !== "json" ? g : "text"
                    }
                    let a = n.serializeBody(),
                        c = null,
                        u = () => {
                            if (c !== null) return c;
                            let g = s.statusText || "OK",
                                y = new Ve(s.getAllResponseHeaders()),
                                v = i_(s) || n.url;
                            return c = new Bi({
                                headers: y,
                                status: s.status,
                                statusText: g,
                                url: v
                            }), c
                        },
                        l = () => {
                            let {
                                headers: g,
                                status: y,
                                statusText: v,
                                url: O
                            } = u(), V = null;
                            y !== YT && (V = typeof s.response > "u" ? s.responseText : s.response), y === 0 && (y = V ? Lg : 0);
                            let De = y >= 200 && y < 300;
                            if (n.responseType === "json" && typeof V == "string") {
                                let xe = V;
                                V = V.replace(r_, "");
                                try {
                                    V = V !== "" ? JSON.parse(V) : null
                                } catch (Mn) {
                                    V = xe, De && (De = !1, V = {
                                        error: Mn,
                                        text: V
                                    })
                                }
                            }
                            De ? (i.next(new Bt({
                                body: V,
                                headers: g,
                                status: y,
                                statusText: v,
                                url: O || void 0
                            })), i.complete()) : i.error(new ut({
                                error: V,
                                headers: g,
                                status: y,
                                statusText: v,
                                url: O || void 0
                            }))
                        },
                        d = g => {
                            let {
                                url: y
                            } = u(), v = new ut({
                                error: g,
                                status: s.status || 0,
                                statusText: s.statusText || "Unknown Error",
                                url: y || void 0
                            });
                            i.error(v)
                        },
                        p = !1,
                        f = g => {
                            p || (i.next(u()), p = !0);
                            let y = {
                                type: dt.DownloadProgress,
                                loaded: g.loaded
                            };
                            g.lengthComputable && (y.total = g.total), n.responseType === "text" && s.responseText && (y.partialText = s.responseText), i.next(y)
                        },
                        h = g => {
                            let y = {
                                type: dt.UploadProgress,
                                loaded: g.loaded
                            };
                            g.lengthComputable && (y.total = g.total), i.next(y)
                        };
                    return s.addEventListener("load", l), s.addEventListener("error", d), s.addEventListener("timeout", d), s.addEventListener("abort", d), n.reportProgress && (s.addEventListener("progress", f), a !== null && s.upload && s.upload.addEventListener("progress", h)), s.send(a), i.next({
                        type: dt.Sent
                    }), () => {
                        s.removeEventListener("error", d), s.removeEventListener("abort", d), s.removeEventListener("load", l), s.removeEventListener("timeout", d), n.reportProgress && (s.removeEventListener("progress", f), a !== null && s.upload && s.upload.removeEventListener("progress", h)), s.readyState !== s.DONE && s.abort()
                    }
                })))
            }
            static\ u0275fac = function(r) {
                return new(r || e)(U(Pi))
            };
            static\ u0275prov = k({
                token: e,
                factory: e.\u0275fac
            })
        }
        return e
    })(),
    $g = new T(""),
    s_ = "XSRF-TOKEN",
    a_ = new T("", {
        providedIn: "root",
        factory: () => s_
    }),
    c_ = "X-XSRF-TOKEN",
    u_ = new T("", {
        providedIn: "root",
        factory: () => c_
    }),
    Ui = class {},
    l_ = (() => {
        class e {
            doc;
            platform;
            cookieName;
            lastCookieString = "";
            lastToken = null;
            parseCount = 0;
            constructor(n, r, o) {
                this.doc = n, this.platform = r, this.cookieName = o
            }
            getToken() {
                if (this.platform === "server") return null;
                let n = this.doc.cookie || "";
                return n !== this.lastCookieString && (this.parseCount++, this.lastToken = bg(n, this.cookieName), this.lastCookieString = n), this.lastToken
            }
            static\ u0275fac = function(r) {
                return new(r || e)(U(Li), U(Sc), U(a_))
            };
            static\ u0275prov = k({
                token: e,
                factory: e.\u0275fac
            })
        }
        return e
    })();

function d_(e, t) {
    let n = e.url.toLowerCase();
    if (!m($g) || e.method === "GET" || e.method === "HEAD" || n.startsWith("http://") || n.startsWith("https://")) return t(e);
    let r = m(Ui).getToken(),
        o = m(u_);
    return r != null && !e.headers.has(o) && (e = e.clone({
        headers: e.headers.set(o, r)
    })), t(e)
}
var Mu = function(e) {
    return e[e.Interceptors = 0] = "Interceptors", e[e.LegacyInterceptors = 1] = "LegacyInterceptors", e[e.CustomXsrfConfiguration = 2] = "CustomXsrfConfiguration", e[e.NoXsrfProtection = 3] = "NoXsrfProtection", e[e.JsonpSupport = 4] = "JsonpSupport", e[e.RequestsMadeViaParent = 5] = "RequestsMadeViaParent", e[e.Fetch = 6] = "Fetch", e
}(Mu || {});

function Hg(e, t) {
    return {\
        u0275kind: e,
        \u0275providers: t
    }
}

function wP(...e) {
    let t = [QT, Ag, xg, {
        provide: gr,
        useExisting: xg
    }, {
        provide: mr,
        useFactory: () => m(jg, {
            optional: !0
        }) ? ? m(Ag)
    }, {
        provide: _u,
        useValue: d_,
        multi: !0
    }, {
        provide: $g,
        useValue: !0
    }, {
        provide: Ui,
        useClass: l_
    }];
    for (let n of e) t.push(...n.\u0275providers);
    return lc(t)
}
var Rg = new T("");

function IP() {
    return Hg(Mu.LegacyInterceptors, [{
        provide: Rg,
        useFactory: n_
    }, {
        provide: _u,
        useExisting: Rg,
        multi: !0
    }])
}

function bP() {
    return Hg(Mu.Fetch, [Du, {
        provide: jg,
        useExisting: Du
    }, {
        provide: mr,
        useExisting: Du
    }])
}
var f_ = new T(""),
    p_ = "b",
    h_ = "h",
    g_ = "s",
    m_ = "st",
    y_ = "u",
    v_ = "rt",
    Cu = new T(""),
    D_ = ["GET", "HEAD"];

function E_(e, t) {
    let p = m(Cu),
        {
            isCacheActive: n
        } = p,
        r = Nu(p, ["isCacheActive"]),
        {
            transferCache: o,
            method: i
        } = e;
    if (!n || o === !1 || i === "POST" && !r.includePostRequests && !o || i !== "POST" && !D_.includes(i) || !r.includeRequestsWithAuthHeaders && w_(e) || r.filter ? .(e) === !1) return t(e);
    let s = m(wn);
    if (m(f_, {
            optional: !0
        })) throw new b(2803, !1);
    let c = e.url,
        u = I_(e, c),
        l = s.get(u, null),
        d = r.includeHeaders;
    if (typeof o == "object" && o.includeHeaders && (d = o.includeHeaders), l) {
        let {
            [p_]: f, [v_]: h, [h_]: g, [g_]: y, [m_]: v, [y_]: O
        } = l, V = f;
        switch (h) {
            case "arraybuffer":
                V = new TextEncoder().encode(f).buffer;
                break;
            case "blob":
                V = new Blob([f]);
                break
        }
        let De = new Ve(g);
        return On(new Bt({
            body: V,
            headers: De,
            status: y,
            statusText: v,
            url: O
        }))
    }
    return t(e).pipe(xr(f => {
        f instanceof Bt
    }))
}

function w_(e) {
    return e.headers.has("authorization") || e.headers.has("proxy-authorization")
}

function Og(e) {
    return [...e.keys()].sort().map(t => `${t}=${e.getAll(t)}`).join("&")
}

function I_(e, t) {
    let {
        params: n,
        method: r,
        responseType: o
    } = e, i = Og(n), s = e.serializeBody();
    s instanceof URLSearchParams ? s = Og(s) : typeof s != "string" && (s = "");
    let a = [r, o, t, s, i].join("|"),
        c = b_(a);
    return c
}

function b_(e) {
    let t = 0;
    for (let n of e) t = Math.imul(31, t) + n.charCodeAt(0) << 0;
    return t += 2147483648, t.toString()
}

function CP(e) {
    return [{
        provide: Cu,
        useFactory: () => (je("NgHttpTransferCache"), Z({
            isCacheActive: !0
        }, e))
    }, {
        provide: Bg,
        useValue: E_,
        multi: !0
    }, {
        provide: lr,
        multi: !0,
        useFactory: () => {
            let t = m(Se),
                n = m(Cu);
            return () => {
                t.whenStable().then(() => {
                    n.isCacheActive = !1
                })
            }
        }
    }]
}
export {
    $ as a, pe as b, Zg as c, N as d, Ki as e, Sn as f, W as g, Nn as h, An as i, mt as j, nM as k, ge as l, On as m, fm as n, pm as o, Ue as p, Wg as q, J as r, Dm as s, he as t, Zt as u, wm as v, Im as w, Qi as x, He as y, bm as z, Cm as A, Tm as B, Ae as C, _m as D, Xi as E, Mm as F, es as G, Nm as H, xm as I, Yt as J, yt as K, Am as L, sl as M, kn as N, km as O, ns as P, Fm as Q, Pm as R, Lm as S, jm as T, Vm as U, ul as V, Bm as W, Um as X, $m as Y, qr as Z, Hu as _, xr as $, b as aa, Hd as ba, k as ca, sc as da, Dk as ea, T as fa, R as ga, U as ha, m as ia, an as ja, tf as ka, lc as la, uf as ma, _e as na, ii as oa, si as pa, gf as qa, Ek as ra, wk as sa, Ik as ta, bk as ua, Ck as va, qf as wa, Pe as xa, Wl as ya, or as za, Xe as Aa, ot as Ba, ae as Ca, at as Da, Tk as Ea, _k as Fa, Lt as Ga, uD as Ha, tp as Ia, da as Ja, Mk as Ka, jo as La, DD as Ma, Sc as Na, Sk as Oa, Nk as Pa, fi as Qa, je as Ra, PD as Sa, vp as Ta, Qn as Ua, In as Va, Fc as Wa, xk as Xa, Ak as Ya, Rk as Za, Ok as _a, kk as $a, Np as ab, xE as bb, vi as cb, Fk as db, RE as eb, Pk as fb, Lk as gb, jk as hb, Uo as ib, dn as jb, zo as kb, Jc as lb, fe as mb, Tn as nb, Gk as ob, pn as pb, KI as qb, Sh as rb, Zk as sb, ru as tb, Ai as ub, Ri as vb, ib as wb, pb as xb, Yk as yb, Oi as zb, bb as Ab, lr as Bb, Se as Cb, jb as Db, Qb as Eb, Uh as Fb, Kb as Gb, Qk as Hb, Kk as Ib, Jk as Jb, Xk as Kb, eF as Lb, Wh as Mb, Zh as Nb, dC as Ob, Qh as Pb, Kh as Qb, gC as Rb, tF as Sb, vC as Tb, TC as Ub, nF as Vb, rF as Wb, oF as Xb, NC as Yb, iF as Zb, sF as _b, aF as $b, cF as ac, uF as bc, lF as cc, dF as dc, fF as ec, OC as fc, rg as gc, kC as hc, FC as ic, pF as jc, PC as kc, hF as lc, gF as mc, mF as nc, yF as oc, vF as pc, DF as qc, EF as rc, wF as sc, au as tc, ug as uc, IF as vc, bF as wc, CF as xc, dT as yc, fT as zc, uu as Ac, pT as Bc, hT as Cc, TF as Dc, _F as Ec, lu as Fc, QF as Gc, fg as Hc, Li as Ic, yu as Jc, IT as Kc, bg as Lc, KF as Mc, JF as Nc, XF as Oc, eP as Pc, tP as Qc, nP as Rc, rP as Sc, UT as Tc, oP as Uc, iP as Vc, Pi as Wc, QT as Xc, t_ as Yc, wP as Zc, IP as _c, bP as $c, CP as ad
};
//# sourceMappingURL=chunk-DIJUAHOD.js.map