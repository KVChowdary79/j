import {
    C as b,
    a as U,
    b as k,
    c as H,
    e as _,
    g as v,
    j as E
} from "./chunk-ZVDIJDKE.js";
import {
    kb as G
} from "./chunk-GFV577OQ.js";
import {
    Ca as N,
    Ga as F,
    Gb as S,
    Oa as L,
    da as O,
    fa as A,
    ia as p,
    sb as m,
    tb as P,
    ub as x,
    xa as C
} from "./chunk-DIJUAHOD.js";
import {
    a
} from "./chunk-XDKSGOKZ.js";
var l = function(n) {
        return n[n.FADING_IN = 0] = "FADING_IN", n[n.VISIBLE = 1] = "VISIBLE", n[n.FADING_OUT = 2] = "FADING_OUT", n[n.HIDDEN = 3] = "HIDDEN", n
    }(l || {}),
    D = class {
        _renderer;
        element;
        config;
        _animationForciblyDisabledThroughCss;
        state = l.HIDDEN;
        constructor(t, e, i, s = !1) {
            this._renderer = t, this.element = e, this.config = i, this._animationForciblyDisabledThroughCss = s
        }
        fadeOut() {
            this._renderer.fadeOutRipple(this)
        }
    },
    B = _({
        passive: !0,
        capture: !0
    }),
    T = class {
        _events = new Map;
        addHandler(t, e, i, s) {
            let r = this._events.get(e);
            if (r) {
                let d = r.get(i);
                d ? d.add(s) : r.set(i, new Set([s]))
            } else this._events.set(e, new Map([
                [i, new Set([s])]
            ])), t.runOutsideAngular(() => {
                document.addEventListener(e, this._delegateEventHandler, B)
            })
        }
        removeHandler(t, e, i) {
            let s = this._events.get(t);
            if (!s) return;
            let r = s.get(e);
            r && (r.delete(i), r.size === 0 && s.delete(e), s.size === 0 && (this._events.delete(t), document.removeEventListener(t, this._delegateEventHandler, B)))
        }
        _delegateEventHandler = t => {
            let e = H(t);
            e && this._events.get(t.type) ? .forEach((i, s) => {
                (s === e || s.contains(e)) && i.forEach(r => r.handleEvent(t))
            })
        }
    },
    z = {
        enterDuration: 225,
        exitDuration: 150
    },
    J = 800,
    V = _({
        passive: !0,
        capture: !0
    }),
    Z = ["mousedown", "touchstart"],
    $ = ["mouseup", "mouseleave", "touchend", "touchcancel"],
    K = (() => {
        class n {
            static\ u0275fac = function(i) {
                return new(i || n)
            };
            static\ u0275cmp = m({
                type: n,
                selectors: [
                    ["ng-component"]
                ],
                hostAttrs: ["mat-ripple-style-loader", ""],
                decls: 0,
                vars: 0,
                template: function(i, s) {},
                styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}"],
                encapsulation: 2,
                changeDetection: 0
            })
        }
        return n
    })(),
    y = class n {
        _target;
        _ngZone;
        _platform;
        _containerElement;
        _triggerElement;
        _isPointerDown = !1;
        _activeRipples = new Map;
        _mostRecentTransientRipple;
        _lastTouchStartEvent;
        _pointerUpEventsRegistered = !1;
        _containerRect;
        static _eventManager = new T;
        constructor(t, e, i, s, r) {
            this._target = t, this._ngZone = e, this._platform = s, s.isBrowser && (this._containerElement = v(i)), r && r.get(E).load(K)
        }
        fadeInRipple(t, e, i = {}) {
            let s = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect(),
                r = a(a({}, z), i.animation);
            i.centered && (t = s.left + s.width / 2, e = s.top + s.height / 2);
            let d = i.radius || Q(t, e, s),
                Y = t - s.left,
                X = e - s.top,
                u = r.enterDuration,
                o = document.createElement("div");
            o.classList.add("mat-ripple-element"), o.style.left = `${Y-d}px`, o.style.top = `${X-d}px`, o.style.height = `${d*2}px`, o.style.width = `${d*2}px`, i.color != null && (o.style.backgroundColor = i.color), o.style.transitionDuration = `${u}ms`, this._containerElement.appendChild(o);
            let R = window.getComputedStyle(o),
                q = R.transitionProperty,
                I = R.transitionDuration,
                f = q === "none" || I === "0s" || I === "0s, 0s" || s.width === 0 && s.height === 0,
                c = new D(this, o, i, f);
            o.style.transform = "scale3d(1, 1, 1)", c.state = l.FADING_IN, i.persistent || (this._mostRecentTransientRipple = c);
            let h = null;
            return !f && (u || r.exitDuration) && this._ngZone.runOutsideAngular(() => {
                let M = () => {
                        h && (h.fallbackTimer = null), clearTimeout(w), this._finishRippleTransition(c)
                    },
                    g = () => this._destroyRipple(c),
                    w = setTimeout(g, u + 100);
                o.addEventListener("transitionend", M), o.addEventListener("transitioncancel", g), h = {
                    onTransitionEnd: M,
                    onTransitionCancel: g,
                    fallbackTimer: w
                }
            }), this._activeRipples.set(c, h), (f || !u) && this._finishRippleTransition(c), c
        }
        fadeOutRipple(t) {
            if (t.state === l.FADING_OUT || t.state === l.HIDDEN) return;
            let e = t.element,
                i = a(a({}, z), t.config.animation);
            e.style.transitionDuration = `${i.exitDuration}ms`, e.style.opacity = "0", t.state = l.FADING_OUT, (t._animationForciblyDisabledThroughCss || !i.exitDuration) && this._finishRippleTransition(t)
        }
        fadeOutAll() {
            this._getActiveRipples().forEach(t => t.fadeOut())
        }
        fadeOutAllNonPersistent() {
            this._getActiveRipples().forEach(t => {
                t.config.persistent || t.fadeOut()
            })
        }
        setupTriggerEvents(t) {
            let e = v(t);
            !this._platform.isBrowser || !e || e === this._triggerElement || (this._removeTriggerEvents(), this._triggerElement = e, Z.forEach(i => {
                n._eventManager.addHandler(this._ngZone, i, e, this)
            }))
        }
        handleEvent(t) {
            t.type === "mousedown" ? this._onMousedown(t) : t.type === "touchstart" ? this._onTouchStart(t) : this._onPointerUp(), this._pointerUpEventsRegistered || (this._ngZone.runOutsideAngular(() => {
                $.forEach(e => {
                    this._triggerElement.addEventListener(e, this, V)
                })
            }), this._pointerUpEventsRegistered = !0)
        }
        _finishRippleTransition(t) {
            t.state === l.FADING_IN ? this._startFadeOutTransition(t) : t.state === l.FADING_OUT && this._destroyRipple(t)
        }
        _startFadeOutTransition(t) {
            let e = t === this._mostRecentTransientRipple,
                {
                    persistent: i
                } = t.config;
            t.state = l.VISIBLE, !i && (!e || !this._isPointerDown) && t.fadeOut()
        }
        _destroyRipple(t) {
            let e = this._activeRipples.get(t) ? ? null;
            this._activeRipples.delete(t), this._activeRipples.size || (this._containerRect = null), t === this._mostRecentTransientRipple && (this._mostRecentTransientRipple = null), t.state = l.HIDDEN, e !== null && (t.element.removeEventListener("transitionend", e.onTransitionEnd), t.element.removeEventListener("transitioncancel", e.onTransitionCancel), e.fallbackTimer !== null && clearTimeout(e.fallbackTimer)), t.element.remove()
        }
        _onMousedown(t) {
            let e = U(t),
                i = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + J;
            !this._target.rippleDisabled && !e && !i && (this._isPointerDown = !0, this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig))
        }
        _onTouchStart(t) {
            if (!this._target.rippleDisabled && !k(t)) {
                this._lastTouchStartEvent = Date.now(), this._isPointerDown = !0;
                let e = t.changedTouches;
                if (e)
                    for (let i = 0; i < e.length; i++) this.fadeInRipple(e[i].clientX, e[i].clientY, this._target.rippleConfig)
            }
        }
        _onPointerUp() {
            this._isPointerDown && (this._isPointerDown = !1, this._getActiveRipples().forEach(t => {
                let e = t.state === l.VISIBLE || t.config.terminateOnPointerUp && t.state === l.FADING_IN;
                !t.config.persistent && e && t.fadeOut()
            }))
        }
        _getActiveRipples() {
            return Array.from(this._activeRipples.keys())
        }
        _removeTriggerEvents() {
            let t = this._triggerElement;
            t && (Z.forEach(e => n._eventManager.removeHandler(e, t, this)), this._pointerUpEventsRegistered && ($.forEach(e => t.removeEventListener(e, this, V)), this._pointerUpEventsRegistered = !1))
        }
    };

function Q(n, t, e) {
    let i = Math.max(Math.abs(n - e.left), Math.abs(n - e.right)),
        s = Math.max(Math.abs(t - e.top), Math.abs(t - e.bottom));
    return Math.sqrt(i * i + s * s)
}
var W = new A("mat-ripple-global-options"),
    ut = (() => {
        class n {
            _elementRef = p(F);
            _animationMode = p(L, {
                optional: !0
            });
            color;
            unbounded;
            centered;
            radius = 0;
            animation;
            get disabled() {
                return this._disabled
            }
            set disabled(e) {
                e && this.fadeOutAllNonPersistent(), this._disabled = e, this._setupTriggerEventsIfEnabled()
            }
            _disabled = !1;
            get trigger() {
                return this._trigger || this._elementRef.nativeElement
            }
            set trigger(e) {
                this._trigger = e, this._setupTriggerEventsIfEnabled()
            }
            _trigger;
            _rippleRenderer;
            _globalOptions;
            _isInitialized = !1;
            constructor() {
                let e = p(N),
                    i = p(G),
                    s = p(W, {
                        optional: !0
                    }),
                    r = p(C);
                this._globalOptions = s || {}, this._rippleRenderer = new y(this, e, this._elementRef, i, r)
            }
            ngOnInit() {
                this._isInitialized = !0, this._setupTriggerEventsIfEnabled()
            }
            ngOnDestroy() {
                this._rippleRenderer._removeTriggerEvents()
            }
            fadeOutAll() {
                this._rippleRenderer.fadeOutAll()
            }
            fadeOutAllNonPersistent() {
                this._rippleRenderer.fadeOutAllNonPersistent()
            }
            get rippleConfig() {
                return {
                    centered: this.centered,
                    radius: this.radius,
                    color: this.color,
                    animation: a(a(a({}, this._globalOptions.animation), this._animationMode === "NoopAnimations" ? {
                        enterDuration: 0,
                        exitDuration: 0
                    } : {}), this.animation),
                    terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
                }
            }
            get rippleDisabled() {
                return this.disabled || !!this._globalOptions.disabled
            }
            _setupTriggerEventsIfEnabled() {
                !this.disabled && this._isInitialized && this._rippleRenderer.setupTriggerEvents(this.trigger)
            }
            launch(e, i = 0, s) {
                return typeof e == "number" ? this._rippleRenderer.fadeInRipple(e, i, a(a({}, this.rippleConfig), s)) : this._rippleRenderer.fadeInRipple(0, 0, a(a({}, this.rippleConfig), e))
            }
            static\ u0275fac = function(i) {
                return new(i || n)
            };
            static\ u0275dir = x({
                type: n,
                selectors: [
                    ["", "mat-ripple", ""],
                    ["", "matRipple", ""]
                ],
                hostAttrs: [1, "mat-ripple"],
                hostVars: 2,
                hostBindings: function(i, s) {
                    i & 2 && S("mat-ripple-unbounded", s.unbounded)
                },
                inputs: {
                    color: [0, "matRippleColor", "color"],
                    unbounded: [0, "matRippleUnbounded", "unbounded"],
                    centered: [0, "matRippleCentered", "centered"],
                    radius: [0, "matRippleRadius", "radius"],
                    animation: [0, "matRippleAnimation", "animation"],
                    disabled: [0, "matRippleDisabled", "disabled"],
                    trigger: [0, "matRippleTrigger", "trigger"]
                },
                exportAs: ["matRipple"]
            })
        }
        return n
    })();
var ft = (() => {
    class n {
        static\ u0275fac = function(i) {
            return new(i || n)
        };
        static\ u0275cmp = m({
            type: n,
            selectors: [
                ["structural-styles"]
            ],
            decls: 0,
            vars: 0,
            template: function(i, s) {},
            styles: ['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}'],
            encapsulation: 2,
            changeDetection: 0
        })
    }
    return n
})();
var vt = (() => {
    class n {
        static\ u0275fac = function(i) {
            return new(i || n)
        };
        static\ u0275mod = P({
            type: n
        });
        static\ u0275inj = O({
            imports: [b, b]
        })
    }
    return n
})();
export {
    z as a, y as b, W as c, ut as d, ft as e, vt as f
};
//# sourceMappingURL=chunk-RJ3QQZ44.js.map