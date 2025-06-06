var O = class {
        constructor() {
            this.gestureId = 0, this.requestedStart = new Map, this.disabledGestures = new Map, this.disabledScroll = new Set
        }
        createGesture(t) {
            var s;
            return new D(this, this.newID(), t.name, (s = t.priority) !== null && s !== void 0 ? s : 0, !!t.disableScroll)
        }
        createBlocker(t = {}) {
            return new M(this, this.newID(), t.disable, !!t.disableScroll)
        }
        start(t, s, r) {
            return this.canStart(t) ? (this.requestedStart.set(s, r), !0) : (this.requestedStart.delete(s), !1)
        }
        capture(t, s, r) {
            if (!this.start(t, s, r)) return !1;
            let a = this.requestedStart,
                n = -1e4;
            if (a.forEach(c => {
                    n = Math.max(n, c)
                }), n === r) {
                this.capturedId = s, a.clear();
                let c = new CustomEvent("ionGestureCaptured", {
                    detail: {
                        gestureName: t
                    }
                });
                return document.dispatchEvent(c), !0
            }
            return a.delete(s), !1
        }
        release(t) {
            this.requestedStart.delete(t), this.capturedId === t && (this.capturedId = void 0)
        }
        disableGesture(t, s) {
            let r = this.disabledGestures.get(t);
            r === void 0 && (r = new Set, this.disabledGestures.set(t, r)), r.add(s)
        }
        enableGesture(t, s) {
            let r = this.disabledGestures.get(t);
            r !== void 0 && r.delete(s)
        }
        disableScroll(t) {
            this.disabledScroll.add(t), this.disabledScroll.size === 1 && document.body.classList.add(x)
        }
        enableScroll(t) {
            this.disabledScroll.delete(t), this.disabledScroll.size === 0 && document.body.classList.remove(x)
        }
        canStart(t) {
            return !(this.capturedId !== void 0 || this.isDisabled(t))
        }
        isCaptured() {
            return this.capturedId !== void 0
        }
        isScrollDisabled() {
            return this.disabledScroll.size > 0
        }
        isDisabled(t) {
            let s = this.disabledGestures.get(t);
            return !!(s && s.size > 0)
        }
        newID() {
            return this.gestureId++, this.gestureId
        }
    },
    D = class {
        constructor(t, s, r, a, n) {
            this.id = s, this.name = r, this.disableScroll = n, this.priority = a * 1e6 + s, this.ctrl = t
        }
        canStart() {
            return this.ctrl ? this.ctrl.canStart(this.name) : !1
        }
        start() {
            return this.ctrl ? this.ctrl.start(this.name, this.id, this.priority) : !1
        }
        capture() {
            if (!this.ctrl) return !1;
            let t = this.ctrl.capture(this.name, this.id, this.priority);
            return t && this.disableScroll && this.ctrl.disableScroll(this.id), t
        }
        release() {
            this.ctrl && (this.ctrl.release(this.id), this.disableScroll && this.ctrl.enableScroll(this.id))
        }
        destroy() {
            this.release(), this.ctrl = void 0
        }
    },
    M = class {
        constructor(t, s, r, a) {
            this.id = s, this.disable = r, this.disableScroll = a, this.ctrl = t
        }
        block() {
            if (this.ctrl) {
                if (this.disable)
                    for (let t of this.disable) this.ctrl.disableGesture(t, this.id);
                this.disableScroll && this.ctrl.disableScroll(this.id)
            }
        }
        unblock() {
            if (this.ctrl) {
                if (this.disable)
                    for (let t of this.disable) this.ctrl.enableGesture(t, this.id);
                this.disableScroll && this.ctrl.enableScroll(this.id)
            }
        }
        destroy() {
            this.unblock(), this.ctrl = void 0
        }
    },
    x = "backdrop-no-scroll",
    C = new O;
var E = (e, t, s, r) => {
        let a = U(e) ? {
                capture: !!r.capture,
                passive: !!r.passive
            } : !!r.capture,
            n, c;
        return e.__zone_symbol__addEventListener ? (n = "__zone_symbol__addEventListener", c = "__zone_symbol__removeEventListener") : (n = "addEventListener", c = "removeEventListener"), e[n](t, s, a), () => {
            e[c](t, s, a)
        }
    },
    U = e => {
        if (_ === void 0) try {
            let t = Object.defineProperty({}, "passive", {
                get: () => {
                    _ = !0
                }
            });
            e.addEventListener("optsTest", () => {}, t)
        } catch {
            _ = !1
        }
        return !!_
    },
    _, W = 2e3,
    j = (e, t, s, r, a) => {
        let n, c, h, o, d, l, m, S = 0,
            p = f => {
                S = Date.now() + W, t(f) && (!c && s && (c = E(e, "touchmove", s, a)), h || (h = E(f.target, "touchend", i, a)), o || (o = E(f.target, "touchcancel", i, a)))
            },
            v = f => {
                S > Date.now() || t(f) && (!l && s && (l = E(q(e), "mousemove", s, a)), m || (m = E(q(e), "mouseup", y, a)))
            },
            i = f => {
                b(), r && r(f)
            },
            y = f => {
                T(), r && r(f)
            },
            b = () => {
                c && c(), h && h(), o && o(), c = h = o = void 0
            },
            T = () => {
                l && l(), m && m(), l = m = void 0
            },
            X = () => {
                b(), T()
            },
            Y = (f = !0) => {
                f ? (n || (n = E(e, "touchstart", p, a)), d || (d = E(e, "mousedown", v, a))) : (n && n(), d && d(), n = d = void 0, X())
            };
        return {
            enable: Y,
            stop: X,
            destroy: () => {
                Y(!1), r = s = t = void 0
            }
        }
    },
    q = e => e instanceof Document ? e : e.ownerDocument,
    B = (e, t, s) => {
        let r = s * (Math.PI / 180),
            a = e === "x",
            n = Math.cos(r),
            c = t * t,
            h = 0,
            o = 0,
            d = !1,
            l = 0;
        return {
            start(m, S) {
                h = m, o = S, l = 0, d = !0
            },
            detect(m, S) {
                if (!d) return !1;
                let p = m - h,
                    v = S - o,
                    i = p * p + v * v;
                if (i < c) return !1;
                let y = Math.sqrt(i),
                    b = (a ? p : v) / y;
                return b > n ? l = 1 : b < -n ? l = -1 : l = 0, d = !1, !0
            },
            isGesture() {
                return l !== 0
            },
            getDirection() {
                return l
            }
        }
    },
    K = e => {
        let t = !1,
            s = !1,
            r = !0,
            a = !1,
            n = Object.assign({
                disableScroll: !1,
                direction: "x",
                gesturePriority: 0,
                passive: !0,
                maxAngle: 40,
                threshold: 10
            }, e),
            c = n.canStart,
            h = n.onWillStart,
            o = n.onStart,
            d = n.onEnd,
            l = n.notCaptured,
            m = n.onMove,
            S = n.threshold,
            p = n.passive,
            v = n.blurOnStart,
            i = {
                type: "pan",
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
                event: void 0,
                data: void 0
            },
            y = B(n.direction, n.threshold, n.maxAngle),
            b = C.createGesture({
                name: e.gestureName,
                priority: e.gesturePriority,
                disableScroll: e.disableScroll
            }),
            T = u => {
                let L = A(u);
                return s || !r || (z(u, i), i.startX = i.currentX, i.startY = i.currentY, i.startTime = i.currentTime = L, i.velocityX = i.velocityY = i.deltaX = i.deltaY = 0, i.event = u, c && c(i) === !1) || (b.release(), !b.start()) ? !1 : (s = !0, S === 0 ? G() : (y.start(i.startX, i.startY), !0))
            },
            X = u => {
                if (t) {
                    !a && r && (a = !0, P(i, u), requestAnimationFrame(Y));
                    return
                }
                P(i, u), y.detect(i.currentX, i.currentY) && (!y.isGesture() || !G()) && k()
            },
            Y = () => {
                t && (a = !1, m && m(i))
            },
            G = () => b.capture() ? (t = !0, r = !1, i.startX = i.currentX, i.startY = i.currentY, i.startTime = i.currentTime, h ? h(i).then(I) : I(), !0) : !1,
            f = () => {
                if (typeof document < "u") {
                    let u = document.activeElement;
                    u ? .blur && u.blur()
                }
            },
            I = () => {
                v && f(), o && o(i), r = !0
            },
            g = () => {
                t = !1, s = !1, a = !1, r = !0, b.release()
            },
            R = u => {
                let L = t,
                    F = r;
                if (g(), !!F) {
                    if (P(i, u), L) {
                        d && d(i);
                        return
                    }
                    l && l(i)
                }
            },
            w = j(n.el, T, X, R, {
                capture: !1,
                passive: p
            }),
            k = () => {
                g(), w.stop(), l && l(i)
            };
        return {
            enable(u = !0) {
                u || (t && R(void 0), g()), w.enable(u)
            },
            destroy() {
                b.destroy(), w.destroy()
            }
        }
    },
    P = (e, t) => {
        if (!t) return;
        let s = e.currentX,
            r = e.currentY,
            a = e.currentTime;
        z(t, e);
        let n = e.currentX,
            c = e.currentY,
            o = (e.currentTime = A(t)) - a;
        if (o > 0 && o < 100) {
            let d = (n - s) / o,
                l = (c - r) / o;
            e.velocityX = d * .7 + e.velocityX * .3, e.velocityY = l * .7 + e.velocityY * .3
        }
        e.deltaX = n - e.startX, e.deltaY = c - e.startY, e.event = t
    },
    z = (e, t) => {
        let s = 0,
            r = 0;
        if (e) {
            let a = e.changedTouches;
            if (a && a.length > 0) {
                let n = a[0];
                s = n.clientX, r = n.clientY
            } else e.pageX !== void 0 && (s = e.pageX, r = e.pageY)
        }
        t.currentX = s, t.currentY = r
    },
    A = e => e.timeStamp || Date.now();
export {
    x as a, C as b, K as c
};
//# sourceMappingURL=chunk-DROM25MW.js.map