import {
    a as J,
    b as R,
    c as tt
} from "./chunk-U7BFU7SC.js";
import {
    ca as F,
    ia as P,
    k as I
} from "./chunk-DIJUAHOD.js";
import {
    b as N
} from "./chunk-5INLNTLQ.js";
import {
    f as Lt,
    h as Tt,
    k as g
} from "./chunk-XDKSGOKZ.js";
var wt = Lt(Et => {
    (function() {
        "use strict";

        function e(i) {
            var s = 0;
            return function() {
                return s < i.length ? {
                    done: !1,
                    value: i[s++]
                } : {
                    done: !0
                }
            }
        }
        var o = typeof Object.defineProperties == "function" ? Object.defineProperty : function(i, s, a) {
            return i == Array.prototype || i == Object.prototype || (i[s] = a.value), i
        };

        function t(i) {
            i = [typeof globalThis == "object" && globalThis, i, typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global];
            for (var s = 0; s < i.length; ++s) {
                var a = i[s];
                if (a && a.Math == Math) return a
            }
            throw Error("Cannot find global object")
        }
        var r = t(this);

        function n(i, s) {
            if (s) t: {
                var a = r;i = i.split(".");
                for (var c = 0; c < i.length - 1; c++) {
                    var h = i[c];
                    if (!(h in a)) break t;
                    a = a[h]
                }
                i = i[i.length - 1],
                c = a[i],
                s = s(c),
                s != c && s != null && o(a, i, {
                    configurable: !0,
                    writable: !0,
                    value: s
                })
            }
        }

        function f(i) {
            var s = typeof Symbol < "u" && Symbol.iterator && i[Symbol.iterator];
            return s ? s.call(i) : {
                next: e(i)
            }
        }
        var d = typeof Object.assign == "function" ? Object.assign : function(i, s) {
            for (var a = 1; a < arguments.length; a++) {
                var c = arguments[a];
                if (c)
                    for (var h in c) Object.prototype.hasOwnProperty.call(c, h) && (i[h] = c[h])
            }
            return i
        };
        n("Object.assign", function(i) {
            return i || d
        }), n("Array.prototype.fill", function(i) {
            return i || function(s, a, c) {
                var h = this.length || 0;
                for (0 > a && (a = Math.max(0, h + a)), (c == null || c > h) && (c = h), c = Number(c), 0 > c && (c = Math.max(0, h + c)), a = Number(a || 0); a < c; a++) this[a] = s;
                return this
            }
        });

        function l(i) {
            return i || Array.prototype.fill
        }
        n("Int8Array.prototype.fill", l), n("Uint8Array.prototype.fill", l), n("Uint8ClampedArray.prototype.fill", l), n("Int16Array.prototype.fill", l), n("Uint16Array.prototype.fill", l), n("Int32Array.prototype.fill", l), n("Uint32Array.prototype.fill", l), n("Float32Array.prototype.fill", l), n("Float64Array.prototype.fill", l);
        var u = this || self;

        function m(i, s) {
            i = i.split(".");
            var a = u;
            i[0] in a || typeof a.execScript > "u" || a.execScript("var " + i[0]);
            for (var c; i.length && (c = i.shift());) i.length || s === void 0 ? a[c] && a[c] !== Object.prototype[c] ? a = a[c] : a = a[c] = {} : a[c] = s
        }
        var H = {
            color: "white",
            lineWidth: 4,
            radius: 6,
            visibilityMin: .5
        };

        function T(i) {
            return i = i || {}, Object.assign({}, H, {
                fillColor: i.color
            }, i)
        }

        function E(i, s) {
            return i instanceof Function ? i(s) : i
        }

        function C(i, s, a) {
            return Math.max(Math.min(s, a), Math.min(Math.max(s, a), i))
        }
        m("clamp", C), m("drawLandmarks", function(i, s, a) {
            if (s) {
                a = T(a), i.save();
                var c = i.canvas,
                    h = 0;
                s = f(s);
                for (var p = s.next(); !p.done; p = s.next())
                    if (p = p.value, p !== void 0 && (p.visibility === void 0 || p.visibility > a.visibilityMin)) {
                        i.fillStyle = E(a.fillColor, {
                            index: h,
                            from: p
                        }), i.strokeStyle = E(a.color, {
                            index: h,
                            from: p
                        }), i.lineWidth = E(a.lineWidth, {
                            index: h,
                            from: p
                        });
                        var v = new Path2D;
                        v.arc(p.x * c.width, p.y * c.height, E(a.radius, {
                            index: h,
                            from: p
                        }), 0, 2 * Math.PI), i.fill(v), i.stroke(v), ++h
                    }
                i.restore()
            }
        }), m("drawConnectors", function(i, s, a, c) {
            if (s && a) {
                c = T(c), i.save();
                var h = i.canvas,
                    p = 0;
                a = f(a);
                for (var v = a.next(); !v.done; v = a.next()) {
                    var w = v.value;
                    i.beginPath(), v = s[w[0]], w = s[w[1]], v && w && (v.visibility === void 0 || v.visibility > c.visibilityMin) && (w.visibility === void 0 || w.visibility > c.visibilityMin) && (i.strokeStyle = E(c.color, {
                        index: p,
                        from: v,
                        to: w
                    }), i.lineWidth = E(c.lineWidth, {
                        index: p,
                        from: v,
                        to: w
                    }), i.moveTo(v.x * h.width, v.y * h.height), i.lineTo(w.x * h.width, w.y * h.height)), ++p, i.stroke()
                }
                i.restore()
            }
        }), m("drawRectangle", function(i, s, a) {
            a = T(a), i.save();
            var c = i.canvas;
            i.beginPath(), i.lineWidth = E(a.lineWidth, {}), i.strokeStyle = E(a.color, {}), i.fillStyle = E(a.fillColor, {}), i.translate(s.xCenter * c.width, s.yCenter * c.height), i.rotate(s.rotation * Math.PI / 180), i.rect(-s.width / 2 * c.width, -s.height / 2 * c.height, s.width * c.width, s.height * c.height), i.translate(-s.xCenter * c.width, -s.yCenter * c.height), i.stroke(), i.fill(), i.restore()
        }), m("lerp", function(i, s, a, c, h) {
            return C(c * (1 - (i - s) / (a - s)) + h * (1 - (a - i) / (a - s)), c, h)
        })
    }).call(Et)
});
var et = {
    production: !0,
    firebase: {
        apiKey: "AIzaSyAtVDGmDVCwWunWW2ocgeHWnAsUhHuXvcg",
        authDomain: "sign-mt.firebaseapp.com",
        projectId: "sign-mt",
        storageBucket: "sign-mt.appspot.com",
        messagingSenderId: "665830225099",
        appId: "1:665830225099:web:18e0669d5847a4b047974e",
        measurementId: "G-1LXY5W5Z9H"
    },
    reCAPTCHAKey: "6Ldsxb8oAAAAAGyUZbyd0QruivPSudqAWFygR-4t"
};
var G;
var ct = -1,
    M = function(e) {
        addEventListener("pageshow", function(o) {
            o.persisted && (ct = o.timeStamp, e(o))
        }, !0)
    },
    lt = function() {
        var e = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
        if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
    },
    K = function() {
        var e = lt();
        return e && e.activationStart || 0
    },
    A = function(e, o) {
        var t = lt(),
            r = "navigate";
        return ct >= 0 ? r = "back-forward-cache" : t && (document.prerendering || K() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : t.type && (r = t.type.replace(/_/g, "-"))), {
            name: e,
            value: o === void 0 ? -1 : o,
            rating: "good",
            delta: 0,
            entries: [],
            id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
            navigationType: r
        }
    },
    O = function(e, o, t) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                var r = new PerformanceObserver(function(n) {
                    Promise.resolve().then(function() {
                        o(n.getEntries())
                    })
                });
                return r.observe(Object.assign({
                    type: e,
                    buffered: !0
                }, t || {})), r
            }
        } catch {}
    },
    L = function(e, o, t, r) {
        var n, f;
        return function(d) {
            o.value >= 0 && (d || r) && ((f = o.value - (n || 0)) || n === void 0) && (n = o.value, o.delta = f, o.rating = function(l, u) {
                return l > u[1] ? "poor" : l > u[0] ? "needs-improvement" : "good"
            }(o.value, t), e(o))
        }
    },
    V = function(e) {
        requestAnimationFrame(function() {
            return requestAnimationFrame(function() {
                return e()
            })
        })
    },
    W = function(e) {
        document.addEventListener("visibilitychange", function() {
            document.visibilityState === "hidden" && e()
        })
    },
    U = function(e) {
        var o = !1;
        return function() {
            o || (e(), o = !0)
        }
    },
    b = -1,
    it = function() {
        return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0
    },
    j = function(e) {
        document.visibilityState === "hidden" && b > -1 && (b = e.type === "visibilitychange" ? e.timeStamp : 0, Pt())
    },
    rt = function() {
        addEventListener("visibilitychange", j, !0), addEventListener("prerenderingchange", j, !0)
    },
    Pt = function() {
        removeEventListener("visibilitychange", j, !0), removeEventListener("prerenderingchange", j, !0)
    },
    dt = function() {
        return b < 0 && (b = it(), rt(), M(function() {
            setTimeout(function() {
                b = it(), rt()
            }, 0)
        })), {
            get firstHiddenTime() {
                return b
            }
        }
    },
    q = function(e) {
        document.prerendering ? addEventListener("prerenderingchange", function() {
            return e()
        }, !0) : e()
    },
    nt = [1800, 3e3],
    bt = function(e, o) {
        o = o || {}, q(function() {
            var t, r = dt(),
                n = A("FCP"),
                f = O("paint", function(d) {
                    d.forEach(function(l) {
                        l.name === "first-contentful-paint" && (f.disconnect(), l.startTime < r.firstHiddenTime && (n.value = Math.max(l.startTime - K(), 0), n.entries.push(l), t(!0)))
                    })
                });
            f && (t = L(e, n, nt, o.reportAllChanges), M(function(d) {
                n = A("FCP"), t = L(e, n, nt, o.reportAllChanges), V(function() {
                    n.value = performance.now() - d.timeStamp, t(!0)
                })
            }))
        })
    },
    ot = [.1, .25],
    ft = function(e, o) {
        o = o || {}, bt(U(function() {
            var t, r = A("CLS", 0),
                n = 0,
                f = [],
                d = function(u) {
                    u.forEach(function(m) {
                        if (!m.hadRecentInput) {
                            var H = f[0],
                                T = f[f.length - 1];
                            n && m.startTime - T.startTime < 1e3 && m.startTime - H.startTime < 5e3 ? (n += m.value, f.push(m)) : (n = m.value, f = [m])
                        }
                    }), n > r.value && (r.value = n, r.entries = f, t())
                },
                l = O("layout-shift", d);
            l && (t = L(e, r, ot, o.reportAllChanges), W(function() {
                d(l.takeRecords()), t(!0)
            }), M(function() {
                n = 0, r = A("CLS", 0), t = L(e, r, ot, o.reportAllChanges), V(function() {
                    return t()
                })
            }), setTimeout(t, 0))
        }))
    },
    ut = 0,
    z = 1 / 0,
    x = 0,
    Ht = function(e) {
        e.forEach(function(o) {
            o.interactionId && (z = Math.min(z, o.interactionId), x = Math.max(x, o.interactionId), ut = x ? (x - z) / 7 + 1 : 0)
        })
    },
    ht = function() {
        return G ? ut : performance.interactionCount || 0
    },
    It = function() {
        "interactionCount" in performance || G || (G = O("event", Ht, {
            type: "event",
            buffered: !0,
            durationThreshold: 0
        }))
    },
    S = [],
    D = new Map,
    mt = 0,
    Mt = function() {
        var e = Math.min(S.length - 1, Math.floor((ht() - mt) / 50));
        return S[e]
    },
    Ot = [],
    _t = function(e) {
        if (Ot.forEach(function(n) {
                return n(e)
            }), e.interactionId || e.entryType === "first-input") {
            var o = S[S.length - 1],
                t = D.get(e.interactionId);
            if (t || S.length < 10 || e.duration > o.latency) {
                if (t) e.duration > t.latency ? (t.entries = [e], t.latency = e.duration) : e.duration === t.latency && e.startTime === t.entries[0].startTime && t.entries.push(e);
                else {
                    var r = {
                        id: e.interactionId,
                        latency: e.duration,
                        entries: [e]
                    };
                    D.set(r.id, r), S.push(r)
                }
                S.sort(function(n, f) {
                    return f.latency - n.latency
                }), S.length > 10 && S.splice(10).forEach(function(n) {
                    return D.delete(n.id)
                })
            }
        }
    },
    pt = function(e) {
        var o = self.requestIdleCallback || self.setTimeout,
            t = -1;
        return e = U(e), document.visibilityState === "hidden" ? e() : (t = o(e), W(e)), t
    },
    at = [200, 500],
    vt = function(e, o) {
        "PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype && (o = o || {}, q(function() {
            var t;
            It();
            var r, n = A("INP"),
                f = function(l) {
                    pt(function() {
                        l.forEach(_t);
                        var u = Mt();
                        u && u.latency !== n.value && (n.value = u.latency, n.entries = u.entries, r())
                    })
                },
                d = O("event", f, {
                    durationThreshold: (t = o.durationThreshold) !== null && t !== void 0 ? t : 40
                });
            r = L(e, n, at, o.reportAllChanges), d && (d.observe({
                type: "first-input",
                buffered: !0
            }), W(function() {
                f(d.takeRecords()), r(!0)
            }), M(function() {
                mt = ht(), S.length = 0, D.clear(), n = A("INP"), r = L(e, n, at, o.reportAllChanges)
            }))
        }))
    },
    st = [2500, 4e3],
    Y = {},
    yt = function(e, o) {
        o = o || {}, q(function() {
            var t, r = dt(),
                n = A("LCP"),
                f = function(u) {
                    o.reportAllChanges || (u = u.slice(-1)), u.forEach(function(m) {
                        m.startTime < r.firstHiddenTime && (n.value = Math.max(m.startTime - K(), 0), n.entries = [m], t())
                    })
                },
                d = O("largest-contentful-paint", f);
            if (d) {
                t = L(e, n, st, o.reportAllChanges);
                var l = U(function() {
                    Y[n.id] || (f(d.takeRecords()), d.disconnect(), Y[n.id] = !0, t(!0))
                });
                ["keydown", "click"].forEach(function(u) {
                    addEventListener(u, function() {
                        return pt(l)
                    }, {
                        once: !0,
                        capture: !0
                    })
                }), W(l), M(function(u) {
                    n = A("LCP"), t = L(e, n, st, o.reportAllChanges), V(function() {
                        n.value = performance.now() - u.timeStamp, Y[n.id] = !0, t(!0)
                    })
                })
            }
        })
    };
var $ = N("FirebaseAnalytics", {
    web: () =>
        import ("./web-JOU53XVC.js").then(e => new e.FirebaseAnalyticsWeb)
});
var X = N("FirebasePerformance", {
    web: () =>
        import ("./web-CZW64YIG.js").then(e => new e.FirebasePerformanceWeb)
});

function kt(e) {
    return !!e && typeof e.then == "function"
}
var gt = (() => {
    class e {
        constructor() {
            this.traces = [], this.logPerformanceMetrics()
        }
        get isSupported() {
            return et.firebase.measurementId && "window" in globalThis && "document" in globalThis
        }
        setCurrentScreen(t) {
            return g(this, null, function*() {
                this.isSupported && (yield $.setCurrentScreen({
                    screenName: t
                }))
            })
        }
        logPerformanceMetrics() {
            if (!this.isSupported) return;
            let t = ({
                name: r,
                delta: n,
                value: f,
                id: d
            }) => $.logEvent({
                name: r,
                params: {
                    value: n,
                    metric_id: d,
                    metric_value: f,
                    metric_delta: n
                }
            });
            ft(t), vt(t), yt(t)
        }
        trace(t, r, n) {
            return g(this, null, function*() {
                if (!this.isSupported) return n();
                let f = performance.now(),
                    d = `${t}:${r}`;
                yield X.startTrace({
                    traceName: d
                });
                let l = () => {
                        this.traces.push({
                            name: d,
                            time: performance.now() - f
                        }), X.stopTrace({
                            traceName: d
                        }).catch().then()
                    },
                    u = n();
                return kt(u) ? u = u.then(m => g(this, null, function*() {
                    return l(), m
                })) : l(), u
            })
        }
        static {
            this.\u0275fac = function(r) {
                return new(r || e)
            }
        }
        static {
            this.\u0275prov = F({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return e
})();
var y = Tt(wt());
var St = (() => {
        class e {
            static {
                this.type = "[Pose] Load Pose Estimation Model"
            }
            constructor() {}
        }
        return e
    })(),
    Ct = (() => {
        class e {
            static {
                this.type = "[Pose] Pose Video Frame"
            }
            constructor(t) {
                this.video = t
            }
        }
        return e
    })(),
    Q = (() => {
        class e {
            static {
                this.type = "[Pose] Store Frame Pose"
            }
            constructor(t) {
                this.pose = t
            }
        }
        return e
    })();
var k = {
        x: 0,
        y: 0,
        z: 0
    },
    Nt = {
        isLoaded: !1,
        pose: null
    },
    _ = class B {
        constructor() {
            this.poseService = P(Ft), this.store = P(J)
        }
        ngxsOnInit() {
            this.poseService.onResults(o => {
                let t = document.createElement("canvas");
                t.width = o.image.width, t.height = o.image.height, t.getContext("2d").drawImage(o.image, 0, 0, t.width, t.height), this.store.dispatch(new Q({
                    faceLandmarks: o.faceLandmarks,
                    poseLandmarks: o.poseLandmarks,
                    leftHandLandmarks: o.leftHandLandmarks,
                    rightHandLandmarks: o.rightHandLandmarks,
                    image: t
                }))
            })
        }
        loadPose() {
            return g(this, null, function*() {
                yield this.poseService.load()
            })
        }
        poseFrame(n, f) {
            return g(this, arguments, function*({
                patchState: o,
                dispatch: t
            }, {
                video: r
            }) {
                yield this.poseService.predict(r)
            })
        }
        storePose({
            getState: o,
            patchState: t
        }, {
            pose: r
        }) {
            t({
                isLoaded: !0,
                pose: r
            })
        }
        static {
            this.\u0275fac = function(t) {
                return new(t || B)
            }
        }
        static {
            this.\u0275prov = F({
                token: B,
                factory: B.\u0275fac
            })
        }
    };
I([R(St)], _.prototype, "loadPose", null);
I([R(Ct)], _.prototype, "poseFrame", null);
I([R(Q)], _.prototype, "storePose", null);
_ = I([tt({
    name: "pose",
    defaults: Nt
})], _);
var At = (() => {
    class e {
        load() {
            return g(this, null, function*() {
                return this.importPromise || (this.importPromise =
                    import ("./holistic-6ANH6JQU.js").then(t => this.holistic = t.default)), this.importPromise
            })
        }
        get Holistic() {
            return this.holistic.Holistic
        }
        get POSE_LANDMARKS() {
            return this.holistic.POSE_LANDMARKS
        }
        get POSE_CONNECTIONS() {
            return this.holistic.POSE_CONNECTIONS
        }
        get HAND_CONNECTIONS() {
            return this.holistic.HAND_CONNECTIONS
        }
        get FACEMESH_TESSELATION() {
            return this.holistic.FACEMESH_TESSELATION
        }
        get FACEMESH_RIGHT_EYE() {
            return this.holistic.FACEMESH_RIGHT_EYE
        }
        get FACEMESH_RIGHT_EYEBROW() {
            return this.holistic.FACEMESH_RIGHT_EYEBROW
        }
        get FACEMESH_LEFT_EYE() {
            return this.holistic.FACEMESH_LEFT_EYE
        }
        get FACEMESH_LEFT_EYEBROW() {
            return this.holistic.FACEMESH_LEFT_EYEBROW
        }
        get FACEMESH_FACE_OVAL() {
            return this.holistic.FACEMESH_FACE_OVAL
        }
        get FACEMESH_LIPS() {
            return this.holistic.FACEMESH_LIPS
        }
        static {
            this.\u0275fac = function(r) {
                return new(r || e)
            }
        }
        static {
            this.\u0275prov = F({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return e
})();
var Rt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22],
    Ft = (() => {
        class e {
            constructor() {
                this.ga = P(gt), this.holistic = P(At), this.isFirstFrame = !0, this.onResultsCallbacks = []
            }
            onResults(t) {
                this.onResultsCallbacks.push(t)
            }
            load() {
                return g(this, null, function*() {
                    e.loadPromise || (e.loadPromise = this._load());
                    try {
                        yield e.loadPromise
                    } catch (t) {
                        console.error(t), alert(t.message)
                    }
                })
            }
            _load() {
                return g(this, null, function*() {
                    this.model || (yield this.holistic.load(), yield this.ga.trace("pose", "load", () => g(this, null, function*() {
                        this.model = new this.holistic.Holistic({
                            locateFile: r => `assets/models/holistic/${r}`
                        }), this.model.setOptions({
                            upperBodyOnly: !1,
                            modelComplexity: 1
                        }), yield this.model.initialize();
                        let t = document.createElement("canvas");
                        t.width = 256, t.height = 256, yield this.model.send({
                            image: t
                        }), t.remove(), this.model.onResults(r => {
                            for (let n of this.onResultsCallbacks) n(r)
                        })
                    })))
                })
            }
            predict(t) {
                return g(this, null, function*() {
                    yield this.load();
                    let r = this.isFirstFrame ? "first-frame" : "frame";
                    yield this.ga.trace("pose", r, () => (this.isFirstFrame = !1, this.model.send({
                        image: t
                    })))
                })
            }
            drawBody(t, r) {
                let n = Array.from(t);
                for (let f of Rt) delete n[f];
                y.drawConnectors(r, n, this.holistic.POSE_CONNECTIONS, {
                    color: "#00FF00"
                }), y.drawLandmarks(r, n, {
                    color: "#00FF00",
                    fillColor: "#FF0000"
                })
            }
            drawHand(t, r, n, f, d) {
                y.drawConnectors(r, t, this.holistic.HAND_CONNECTIONS, {
                    color: n
                }), y.drawLandmarks(r, t, {
                    color: f,
                    fillColor: d,
                    lineWidth: 2,
                    radius: l => y.lerp(l.z, -.15, .1, 10, 1)
                })
            }
            drawFace(t, r) {
                y.drawConnectors(r, t, this.holistic.FACEMESH_TESSELATION, {
                    color: "#C0C0C070",
                    lineWidth: 1
                }), y.drawConnectors(r, t, this.holistic.FACEMESH_RIGHT_EYE, {
                    color: "#FF3030"
                }), y.drawConnectors(r, t, this.holistic.FACEMESH_RIGHT_EYEBROW, {
                    color: "#FF3030"
                }), y.drawConnectors(r, t, this.holistic.FACEMESH_LEFT_EYE, {
                    color: "#30FF30"
                }), y.drawConnectors(r, t, this.holistic.FACEMESH_LEFT_EYEBROW, {
                    color: "#30FF30"
                }), y.drawConnectors(r, t, this.holistic.FACEMESH_FACE_OVAL, {
                    color: "#E0E0E0"
                }), y.drawConnectors(r, t, this.holistic.FACEMESH_LIPS, {
                    color: "#E0E0E0"
                })
            }
            drawConnect(t, r) {
                for (let n of t) {
                    let f = n[0],
                        d = n[1];
                    if (f && d) {
                        if (f.visibility && d.visibility && (f.visibility < .1 || d.visibility < .1)) continue;
                        r.beginPath(), r.moveTo(f.x * r.canvas.width, f.y * r.canvas.height), r.lineTo(d.x * r.canvas.width, d.y * r.canvas.height), r.stroke()
                    }
                }
            }
            drawElbowHandsConnection(t, r) {
                r.lineWidth = 5, t.rightHandLandmarks && (r.strokeStyle = "#00FF00", this.drawConnect([
                    [t.poseLandmarks[this.holistic.POSE_LANDMARKS.RIGHT_ELBOW], t.rightHandLandmarks[0]]
                ], r)), t.leftHandLandmarks && (r.strokeStyle = "#FF0000", this.drawConnect([
                    [t.poseLandmarks[this.holistic.POSE_LANDMARKS.LEFT_ELBOW], t.leftHandLandmarks[0]]
                ], r))
            }
            draw(t, r) {
                t.poseLandmarks && (this.drawBody(t.poseLandmarks, r), this.drawElbowHandsConnection(t, r)), t.leftHandLandmarks && this.drawHand(t.leftHandLandmarks, r, "#CC0000", "#FF0000", "#00FF00"), t.rightHandLandmarks && this.drawHand(t.rightHandLandmarks, r, "#00CC00", "#00FF00", "#FF0000"), t.faceLandmarks && this.drawFace(t.faceLandmarks, r), r.restore()
            }
            normalizeHolistic(t, r, n = !0) {
                let f = {
                        poseLandmarks: t.poseLandmarks || new Array(33).fill(k),
                        faceLandmarks: t.faceLandmarks || new Array(468).fill(k),
                        leftHandLandmarks: t.leftHandLandmarks || new Array(21).fill(k),
                        rightHandLandmarks: t.rightHandLandmarks || new Array(21).fill(k)
                    },
                    d = r.reduce((l, u) => l.concat(f[u]), []);
                if (d = d.map(l => ({
                        x: l.x * t.image.width,
                        y: l.y * t.image.height,
                        z: l.z * t.image.width
                    })), n && t.poseLandmarks) {
                    let l = d[this.holistic.POSE_LANDMARKS.LEFT_SHOULDER],
                        u = d[this.holistic.POSE_LANDMARKS.RIGHT_SHOULDER],
                        m = Math.sqrt((u.x - l.x) ** 2 + (u.y - l.y) ** 2 + (u.z - l.z) ** 2),
                        H = (l.x + u.x) / 2,
                        T = (l.y + u.y) / 2,
                        E = (l.z + u.z) / 2;
                    d = d.map(C => ({
                        x: C.x === 0 ? 0 : (C.x - H) / m,
                        y: C.y === 0 ? 0 : (C.y - T) / m,
                        z: C.z === 0 ? 0 : (C.z - E) / m
                    }))
                }
                return d
            }
            static {
                this.\u0275fac = function(r) {
                    return new(r || e)
                }
            }
            static {
                this.\u0275prov = F({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                })
            }
        }
        return e
    })();
export {
    et as a, At as b, St as c, Ct as d, Q as e, k as f, _ as g, $ as h, gt as i, Ft as j
};
//# sourceMappingURL=chunk-KEGCD5JT.js.map