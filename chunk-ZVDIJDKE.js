import {
    kb as p,
    nb as Me
} from "./chunk-GFV577OQ.js";
import {
    $ as ve,
    Ba as T,
    C as R,
    Ca as g,
    Cb as Te,
    Cc as Ce,
    Dc as we,
    Ga as v,
    Ha as q,
    I as S,
    Ia as ye,
    Ic as h,
    Ja as M,
    K as z,
    La as j,
    M as pe,
    W as be,
    _ as ge,
    a as N,
    ca as c,
    d as _e,
    da as m,
    f as me,
    fa as l,
    g as d,
    h as fe,
    ia as o,
    kb as Ee,
    m as A,
    na as Ie,
    o as x,
    r as L,
    rc as X,
    sb as Ae,
    tb as f,
    ub as C,
    xa as P,
    yc as Q
} from "./chunk-DIJUAHOD.js";
import {
    a as G
} from "./chunk-XDKSGOKZ.js";
var F;

function Fe() {
    if (F == null && typeof window < "u") try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: () => F = !0
        }))
    } finally {
        F = F || !1
    }
    return F
}

function J(i) {
    return Fe() ? i : !!i.capture
}

function ee(i, s = 0) {
    return ke(i) ? Number(i) : arguments.length === 2 ? s : 0
}

function ke(i) {
    return !isNaN(parseFloat(i)) && !isNaN(Number(i))
}

function I(i) {
    return i instanceof v ? i.nativeElement : i
}

function te(i) {
    return i.buttons === 0 || i.detail === 0
}

function ie(i) {
    let s = i.touches && i.touches[0] || i.changedTouches && i.changedTouches[0];
    return !!s && s.identifier === -1 && (s.radiusX == null || s.radiusX === 1) && (s.radiusY == null || s.radiusY === 1)
}
var se;

function De() {
    if (se == null) {
        let i = typeof document < "u" ? document.head : null;
        se = !!(i && (i.createShadowRoot || i.attachShadow))
    }
    return se
}

function ne(i) {
    if (De()) {
        let s = i.getRootNode ? i.getRootNode() : null;
        if (typeof ShadowRoot < "u" && ShadowRoot && s instanceof ShadowRoot) return s
    }
    return null
}

function y(i) {
    return i.composedPath ? i.composedPath()[0] : i.target
}

function k(i, s, e, t, n) {
    let r = parseInt(X.major),
        a = parseInt(X.minor);
    return r > 19 || r === 19 && a > 0 || r === 0 && a === 0 ? i.listen(s, e, t, n) : (s.addEventListener(e, t, n), () => {
        s.removeEventListener(e, t, n)
    })
}
var Oe = new l("cdk-input-modality-detector-options"),
    Ne = {
        ignoreKeys: [18, 17, 224, 91, 16]
    },
    xe = 650,
    re = {
        passive: !0,
        capture: !0
    },
    Le = (() => {
        class i {
            _platform = o(p);
            _listenerCleanups;
            modalityDetected;
            modalityChanged;
            get mostRecentModality() {
                return this._modality.value
            }
            _mostRecentTarget = null;
            _modality = new fe(null);
            _options;
            _lastTouchMs = 0;
            _onKeydown = e => {
                this._options ? .ignoreKeys ? .some(t => t === e.keyCode) || (this._modality.next("keyboard"), this._mostRecentTarget = y(e))
            };
            _onMousedown = e => {
                Date.now() - this._lastTouchMs < xe || (this._modality.next(te(e) ? "keyboard" : "mouse"), this._mostRecentTarget = y(e))
            };
            _onTouchstart = e => {
                if (ie(e)) {
                    this._modality.next("keyboard");
                    return
                }
                this._lastTouchMs = Date.now(), this._modality.next("touch"), this._mostRecentTarget = y(e)
            };
            constructor() {
                let e = o(g),
                    t = o(h),
                    n = o(Oe, {
                        optional: !0
                    });
                if (this._options = G(G({}, Ne), n), this.modalityDetected = this._modality.pipe(be(1)), this.modalityChanged = this.modalityDetected.pipe(pe()), this._platform.isBrowser) {
                    let r = o(Ee).createRenderer(null, null);
                    this._listenerCleanups = e.runOutsideAngular(() => [k(r, t, "keydown", this._onKeydown, re), k(r, t, "mousedown", this._onMousedown, re), k(r, t, "touchstart", this._onTouchstart, re)])
                }
            }
            ngOnDestroy() {
                this._modality.complete(), this._listenerCleanups ? .forEach(e => e())
            }
            static\ u0275fac = function(t) {
                return new(t || i)
            };
            static\ u0275prov = c({
                token: i,
                factory: i.\u0275fac,
                providedIn: "root"
            })
        }
        return i
    })(),
    D = function(i) {
        return i[i.IMMEDIATE = 0] = "IMMEDIATE", i[i.EVENTUAL = 1] = "EVENTUAL", i
    }(D || {}),
    Re = new l("cdk-focus-monitor-default-options"),
    B = J({
        passive: !0,
        capture: !0
    }),
    Se = (() => {
        class i {
            _ngZone = o(g);
            _platform = o(p);
            _inputModalityDetector = o(Le);
            _origin = null;
            _lastFocusOrigin;
            _windowFocused = !1;
            _windowFocusTimeoutId;
            _originTimeoutId;
            _originFromTouchInteraction = !1;
            _elementInfo = new Map;
            _monitoredElementCount = 0;
            _rootNodeFocusListenerCount = new Map;
            _detectionMode;
            _windowFocusListener = () => {
                this._windowFocused = !0, this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = !1)
            };
            _document = o(h, {
                optional: !0
            });
            _stopInputModalityDetector = new d;
            constructor() {
                let e = o(Re, {
                    optional: !0
                });
                this._detectionMode = e ? .detectionMode || D.IMMEDIATE
            }
            _rootNodeFocusAndBlurListener = e => {
                let t = y(e);
                for (let n = t; n; n = n.parentElement) e.type === "focus" ? this._onFocus(e, n) : this._onBlur(e, n)
            };
            monitor(e, t = !1) {
                let n = I(e);
                if (!this._platform.isBrowser || n.nodeType !== 1) return A();
                let r = ne(n) || this._getDocument(),
                    a = this._elementInfo.get(n);
                if (a) return t && (a.checkChildren = !0), a.subject;
                let u = {
                    checkChildren: t,
                    subject: new d,
                    rootNode: r
                };
                return this._elementInfo.set(n, u), this._registerGlobalListeners(u), u.subject
            }
            stopMonitoring(e) {
                let t = I(e),
                    n = this._elementInfo.get(t);
                n && (n.subject.complete(), this._setClasses(t), this._elementInfo.delete(t), this._removeGlobalListeners(n))
            }
            focusVia(e, t, n) {
                let r = I(e),
                    a = this._getDocument().activeElement;
                r === a ? this._getClosestElementsInfo(r).forEach(([u, Z]) => this._originChanged(u, t, Z)) : (this._setOrigin(t), typeof r.focus == "function" && r.focus(n))
            }
            ngOnDestroy() {
                this._elementInfo.forEach((e, t) => this.stopMonitoring(t))
            }
            _getDocument() {
                return this._document || document
            }
            _getWindow() {
                return this._getDocument().defaultView || window
            }
            _getFocusOrigin(e) {
                return this._origin ? this._originFromTouchInteraction ? this._shouldBeAttributedToTouch(e) ? "touch" : "program" : this._origin : this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : e && this._isLastInteractionFromInputLabel(e) ? "mouse" : "program"
            }
            _shouldBeAttributedToTouch(e) {
                return this._detectionMode === D.EVENTUAL || !!e ? .contains(this._inputModalityDetector._mostRecentTarget)
            }
            _setClasses(e, t) {
                e.classList.toggle("cdk-focused", !!t), e.classList.toggle("cdk-touch-focused", t === "touch"), e.classList.toggle("cdk-keyboard-focused", t === "keyboard"), e.classList.toggle("cdk-mouse-focused", t === "mouse"), e.classList.toggle("cdk-program-focused", t === "program")
            }
            _setOrigin(e, t = !1) {
                this._ngZone.runOutsideAngular(() => {
                    if (this._origin = e, this._originFromTouchInteraction = e === "touch" && t, this._detectionMode === D.IMMEDIATE) {
                        clearTimeout(this._originTimeoutId);
                        let n = this._originFromTouchInteraction ? xe : 1;
                        this._originTimeoutId = setTimeout(() => this._origin = null, n)
                    }
                })
            }
            _onFocus(e, t) {
                let n = this._elementInfo.get(t),
                    r = y(e);
                !n || !n.checkChildren && t !== r || this._originChanged(t, this._getFocusOrigin(r), n)
            }
            _onBlur(e, t) {
                let n = this._elementInfo.get(t);
                !n || n.checkChildren && e.relatedTarget instanceof Node && t.contains(e.relatedTarget) || (this._setClasses(t), this._emitOrigin(n, null))
            }
            _emitOrigin(e, t) {
                e.subject.observers.length && this._ngZone.run(() => e.subject.next(t))
            }
            _registerGlobalListeners(e) {
                if (!this._platform.isBrowser) return;
                let t = e.rootNode,
                    n = this._rootNodeFocusListenerCount.get(t) || 0;
                n || this._ngZone.runOutsideAngular(() => {
                    t.addEventListener("focus", this._rootNodeFocusAndBlurListener, B), t.addEventListener("blur", this._rootNodeFocusAndBlurListener, B)
                }), this._rootNodeFocusListenerCount.set(t, n + 1), ++this._monitoredElementCount === 1 && (this._ngZone.runOutsideAngular(() => {
                    this._getWindow().addEventListener("focus", this._windowFocusListener)
                }), this._inputModalityDetector.modalityDetected.pipe(ge(this._stopInputModalityDetector)).subscribe(r => {
                    this._setOrigin(r, !0)
                }))
            }
            _removeGlobalListeners(e) {
                let t = e.rootNode;
                if (this._rootNodeFocusListenerCount.has(t)) {
                    let n = this._rootNodeFocusListenerCount.get(t);
                    n > 1 ? this._rootNodeFocusListenerCount.set(t, n - 1) : (t.removeEventListener("focus", this._rootNodeFocusAndBlurListener, B), t.removeEventListener("blur", this._rootNodeFocusAndBlurListener, B), this._rootNodeFocusListenerCount.delete(t))
                }--this._monitoredElementCount || (this._getWindow().removeEventListener("focus", this._windowFocusListener), this._stopInputModalityDetector.next(), clearTimeout(this._windowFocusTimeoutId), clearTimeout(this._originTimeoutId))
            }
            _originChanged(e, t, n) {
                this._setClasses(e, t), this._emitOrigin(n, t), this._lastFocusOrigin = t
            }
            _getClosestElementsInfo(e) {
                let t = [];
                return this._elementInfo.forEach((n, r) => {
                    (r === e || n.checkChildren && r.contains(e)) && t.push([r, n])
                }), t
            }
            _isLastInteractionFromInputLabel(e) {
                let {
                    _mostRecentTarget: t,
                    mostRecentModality: n
                } = this._inputModalityDetector;
                if (n !== "mouse" || !t || t === e || e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA" || e.disabled) return !1;
                let r = e.labels;
                if (r) {
                    for (let a = 0; a < r.length; a++)
                        if (r[a].contains(t)) return !0
                }
                return !1
            }
            static\ u0275fac = function(t) {
                return new(t || i)
            };
            static\ u0275prov = c({
                token: i,
                factory: i.\u0275fac,
                providedIn: "root"
            })
        }
        return i
    })(),
    qe = (() => {
        class i {
            _elementRef = o(v);
            _focusMonitor = o(Se);
            _monitorSubscription;
            _focusOrigin = null;
            cdkFocusChange = new T;
            constructor() {}
            get focusOrigin() {
                return this._focusOrigin
            }
            ngAfterViewInit() {
                let e = this._elementRef.nativeElement;
                this._monitorSubscription = this._focusMonitor.monitor(e, e.nodeType === 1 && e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t => {
                    this._focusOrigin = t, this.cdkFocusChange.emit(t)
                })
            }
            ngOnDestroy() {
                this._focusMonitor.stopMonitoring(this._elementRef), this._monitorSubscription && this._monitorSubscription.unsubscribe()
            }
            static\ u0275fac = function(t) {
                return new(t || i)
            };
            static\ u0275dir = C({
                type: i,
                selectors: [
                    ["", "cdkMonitorElementFocus", ""],
                    ["", "cdkMonitorSubtreeFocus", ""]
                ],
                outputs: {
                    cdkFocusChange: "cdkFocusChange"
                },
                exportAs: ["cdkMonitorFocus"]
            })
        }
        return i
    })();
var K = new WeakMap,
    Pe = (() => {
        class i {
            _appRef;
            _injector = o(P);
            _environmentInjector = o(Ie);
            load(e) {
                let t = this._appRef = this._appRef || this._injector.get(Te),
                    n = K.get(t);
                n || (n = {
                    loaders: new Set,
                    refs: []
                }, K.set(t, n), t.onDestroy(() => {
                    K.get(t) ? .refs.forEach(r => r.destroy()), K.delete(t)
                })), n.loaders.has(e) || (n.loaders.add(e), n.refs.push(we(e, {
                    environmentInjector: this._environmentInjector
                })))
            }
            static\ u0275fac = function(t) {
                return new(t || i)
            };
            static\ u0275prov = c({
                token: i,
                factory: i.\u0275fac,
                providedIn: "root"
            })
        }
        return i
    })();
var je = (() => {
    class i {
        static\ u0275fac = function(t) {
            return new(t || i)
        };
        static\ u0275cmp = Ae({
            type: i,
            selectors: [
                ["ng-component"]
            ],
            exportAs: ["cdkVisuallyHidden"],
            decls: 0,
            vars: 0,
            template: function(t, n) {},
            styles: [".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}"],
            encapsulation: 2,
            changeDetection: 0
        })
    }
    return i
})();

function Xe(i) {
    if (i.type === "characterData" && i.target instanceof Comment) return !0;
    if (i.type === "childList") {
        for (let s = 0; s < i.addedNodes.length; s++)
            if (!(i.addedNodes[s] instanceof Comment)) return !1;
        for (let s = 0; s < i.removedNodes.length; s++)
            if (!(i.removedNodes[s] instanceof Comment)) return !1;
        return !0
    }
    return !1
}
var Be = (() => {
        class i {
            create(e) {
                return typeof MutationObserver > "u" ? null : new MutationObserver(e)
            }
            static\ u0275fac = function(t) {
                return new(t || i)
            };
            static\ u0275prov = c({
                token: i,
                factory: i.\u0275fac,
                providedIn: "root"
            })
        }
        return i
    })(),
    Ke = (() => {
        class i {
            _mutationObserverFactory = o(Be);
            _observedElements = new Map;
            _ngZone = o(g);
            constructor() {}
            ngOnDestroy() {
                this._observedElements.forEach((e, t) => this._cleanupObserver(t))
            }
            observe(e) {
                let t = I(e);
                return new _e(n => {
                    let a = this._observeElement(t).pipe(L(u => u.filter(Z => !Xe(Z))), R(u => !!u.length)).subscribe(u => {
                        this._ngZone.run(() => {
                            n.next(u)
                        })
                    });
                    return () => {
                        a.unsubscribe(), this._unobserveElement(t)
                    }
                })
            }
            _observeElement(e) {
                return this._ngZone.runOutsideAngular(() => {
                    if (this._observedElements.has(e)) this._observedElements.get(e).count++;
                    else {
                        let t = new d,
                            n = this._mutationObserverFactory.create(r => t.next(r));
                        n && n.observe(e, {
                            characterData: !0,
                            childList: !0,
                            subtree: !0
                        }), this._observedElements.set(e, {
                            observer: n,
                            stream: t,
                            count: 1
                        })
                    }
                    return this._observedElements.get(e).stream
                })
            }
            _unobserveElement(e) {
                this._observedElements.has(e) && (this._observedElements.get(e).count--, this._observedElements.get(e).count || this._cleanupObserver(e))
            }
            _cleanupObserver(e) {
                if (this._observedElements.has(e)) {
                    let {
                        observer: t,
                        stream: n
                    } = this._observedElements.get(e);
                    t && t.disconnect(), n.complete(), this._observedElements.delete(e)
                }
            }
            static\ u0275fac = function(t) {
                return new(t || i)
            };
            static\ u0275prov = c({
                token: i,
                factory: i.\u0275fac,
                providedIn: "root"
            })
        }
        return i
    })(),
    Gt = (() => {
        class i {
            _contentObserver = o(Ke);
            _elementRef = o(v);
            event = new T;
            get disabled() {
                return this._disabled
            }
            set disabled(e) {
                this._disabled = e, this._disabled ? this._unsubscribe() : this._subscribe()
            }
            _disabled = !1;
            get debounce() {
                return this._debounce
            }
            set debounce(e) {
                this._debounce = ee(e), this._subscribe()
            }
            _debounce;
            _currentSubscription = null;
            constructor() {}
            ngAfterContentInit() {
                !this._currentSubscription && !this.disabled && this._subscribe()
            }
            ngOnDestroy() {
                this._unsubscribe()
            }
            _subscribe() {
                this._unsubscribe();
                let e = this._contentObserver.observe(this._elementRef);
                this._currentSubscription = (this.debounce ? e.pipe(S(this.debounce)) : e).subscribe(this.event)
            }
            _unsubscribe() {
                this._currentSubscription ? .unsubscribe()
            }
            static\ u0275fac = function(t) {
                return new(t || i)
            };
            static\ u0275dir = C({
                type: i,
                selectors: [
                    ["", "cdkObserveContent", ""]
                ],
                inputs: {
                    disabled: [2, "cdkObserveContentDisabled", "disabled", Q],
                    debounce: "debounce"
                },
                outputs: {
                    event: "cdkObserveContent"
                },
                exportAs: ["cdkObserveContent"]
            })
        }
        return i
    })(),
    Ue = (() => {
        class i {
            static\ u0275fac = function(t) {
                return new(t || i)
            };
            static\ u0275mod = f({
                type: i
            });
            static\ u0275inj = m({
                providers: [Be]
            })
        }
        return i
    })();
var b = function(i) {
        return i[i.NONE = 0] = "NONE", i[i.BLACK_ON_WHITE = 1] = "BLACK_ON_WHITE", i[i.WHITE_ON_BLACK = 2] = "WHITE_ON_BLACK", i
    }(b || {}),
    Ve = "cdk-high-contrast-black-on-white",
    He = "cdk-high-contrast-white-on-black",
    oe = "cdk-high-contrast-active",
    U = (() => {
        class i {
            _platform = o(p);
            _hasCheckedHighContrastMode;
            _document = o(h);
            _breakpointSubscription;
            constructor() {
                this._breakpointSubscription = o(Me).observe("(forced-colors: active)").subscribe(() => {
                    this._hasCheckedHighContrastMode && (this._hasCheckedHighContrastMode = !1, this._applyBodyHighContrastModeCssClasses())
                })
            }
            getHighContrastMode() {
                if (!this._platform.isBrowser) return b.NONE;
                let e = this._document.createElement("div");
                e.style.backgroundColor = "rgb(1,2,3)", e.style.position = "absolute", this._document.body.appendChild(e);
                let t = this._document.defaultView || window,
                    n = t && t.getComputedStyle ? t.getComputedStyle(e) : null,
                    r = (n && n.backgroundColor || "").replace(/ /g, "");
                switch (e.remove(), r) {
                    case "rgb(0,0,0)":
                    case "rgb(45,50,54)":
                    case "rgb(32,32,32)":
                        return b.WHITE_ON_BLACK;
                    case "rgb(255,255,255)":
                    case "rgb(255,250,239)":
                        return b.BLACK_ON_WHITE
                }
                return b.NONE
            }
            ngOnDestroy() {
                this._breakpointSubscription.unsubscribe()
            }
            _applyBodyHighContrastModeCssClasses() {
                if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
                    let e = this._document.body.classList;
                    e.remove(oe, Ve, He), this._hasCheckedHighContrastMode = !0;
                    let t = this.getHighContrastMode();
                    t === b.BLACK_ON_WHITE ? e.add(oe, Ve) : t === b.WHITE_ON_BLACK && e.add(oe, He)
                }
            }
            static\ u0275fac = function(t) {
                return new(t || i)
            };
            static\ u0275prov = c({
                token: i,
                factory: i.\u0275fac,
                providedIn: "root"
            })
        }
        return i
    })(),
    Qe = (() => {
        class i {
            constructor() {
                o(U)._applyBodyHighContrastModeCssClasses()
            }
            static\ u0275fac = function(t) {
                return new(t || i)
            };
            static\ u0275mod = f({
                type: i
            });
            static\ u0275inj = m({
                imports: [Ue]
            })
        }
        return i
    })();

function We(i, ...s) {
    return s.length ? s.some(e => i[e]) : i.altKey || i.shiftKey || i.ctrlKey || i.metaKey
}
var ae = {},
    Je = (() => {
        class i {
            _appId = o(j);
            getId(e) {
                return this._appId !== "ng" && (e += this._appId), ae.hasOwnProperty(e) || (ae[e] = 0), `${e}${ae[e]++}`
            }
            static\ u0275fac = function(t) {
                return new(t || i)
            };
            static\ u0275prov = c({
                token: i,
                factory: i.\u0275fac,
                providedIn: "root"
            })
        }
        return i
    })();
var et = 200,
    w = class {
        _letterKeyStream = new d;
        _items = [];
        _selectedItemIndex = -1;
        _pressedLetters = [];
        _skipPredicateFn;
        _selectedItem = new d;
        selectedItem = this._selectedItem;
        constructor(s, e) {
            let t = typeof e ? .debounceInterval == "number" ? e.debounceInterval : et;
            e ? .skipPredicate && (this._skipPredicateFn = e.skipPredicate), this.setItems(s), this._setupKeyHandler(t)
        }
        destroy() {
            this._pressedLetters = [], this._letterKeyStream.complete(), this._selectedItem.complete()
        }
        setCurrentSelectedItemIndex(s) {
            this._selectedItemIndex = s
        }
        setItems(s) {
            this._items = s
        }
        handleKey(s) {
            let e = s.keyCode;
            s.key && s.key.length === 1 ? this._letterKeyStream.next(s.key.toLocaleUpperCase()) : (e >= 65 && e <= 90 || e >= 48 && e <= 57) && this._letterKeyStream.next(String.fromCharCode(e))
        }
        isTyping() {
            return this._pressedLetters.length > 0
        }
        reset() {
            this._pressedLetters = []
        }
        _setupKeyHandler(s) {
            this._letterKeyStream.pipe(ve(e => this._pressedLetters.push(e)), S(s), R(() => this._pressedLetters.length > 0), L(() => this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e => {
                for (let t = 1; t < this._items.length + 1; t++) {
                    let n = (this._selectedItemIndex + t) % this._items.length,
                        r = this._items[n];
                    if (!this._skipPredicateFn ? .(r) && r.getLabel ? .().toLocaleUpperCase().trim().indexOf(e) === 0) {
                        this._selectedItem.next(r);
                        break
                    }
                }
                this._pressedLetters = []
            })
        }
    };
var V = class {
    _items;
    _activeItemIndex = -1;
    _activeItem = ye(null);
    _wrap = !1;
    _typeaheadSubscription = N.EMPTY;
    _itemChangesSubscription;
    _vertical = !0;
    _horizontal;
    _allowedModifierKeys = [];
    _homeAndEnd = !1;
    _pageUpAndDown = {
        enabled: !1,
        delta: 10
    };
    _effectRef;
    _typeahead;
    _skipPredicateFn = s => s.disabled;
    constructor(s, e) {
        this._items = s, s instanceof M ? this._itemChangesSubscription = s.changes.subscribe(t => this._itemsChanged(t.toArray())) : q(s) && (this._effectRef = Ce(() => this._itemsChanged(s()), {
            injector: e
        }))
    }
    tabOut = new d;
    change = new d;
    skipPredicate(s) {
        return this._skipPredicateFn = s, this
    }
    withWrap(s = !0) {
        return this._wrap = s, this
    }
    withVerticalOrientation(s = !0) {
        return this._vertical = s, this
    }
    withHorizontalOrientation(s) {
        return this._horizontal = s, this
    }
    withAllowedModifierKeys(s) {
        return this._allowedModifierKeys = s, this
    }
    withTypeAhead(s = 200) {
        this._typeaheadSubscription.unsubscribe();
        let e = this._getItemsArray();
        return this._typeahead = new w(e, {
            debounceInterval: typeof s == "number" ? s : void 0,
            skipPredicate: t => this._skipPredicateFn(t)
        }), this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(t => {
            this.setActiveItem(t)
        }), this
    }
    cancelTypeahead() {
        return this._typeahead ? .reset(), this
    }
    withHomeAndEnd(s = !0) {
        return this._homeAndEnd = s, this
    }
    withPageUpDown(s = !0, e = 10) {
        return this._pageUpAndDown = {
            enabled: s,
            delta: e
        }, this
    }
    setActiveItem(s) {
        let e = this._activeItem();
        this.updateActiveItem(s), this._activeItem() !== e && this.change.next(this._activeItemIndex)
    }
    onKeydown(s) {
        let e = s.keyCode,
            n = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(r => !s[r] || this._allowedModifierKeys.indexOf(r) > -1);
        switch (e) {
            case 9:
                this.tabOut.next();
                return;
            case 40:
                if (this._vertical && n) {
                    this.setNextItemActive();
                    break
                } else return;
            case 38:
                if (this._vertical && n) {
                    this.setPreviousItemActive();
                    break
                } else return;
            case 39:
                if (this._horizontal && n) {
                    this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
                    break
                } else return;
            case 37:
                if (this._horizontal && n) {
                    this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
                    break
                } else return;
            case 36:
                if (this._homeAndEnd && n) {
                    this.setFirstItemActive();
                    break
                } else return;
            case 35:
                if (this._homeAndEnd && n) {
                    this.setLastItemActive();
                    break
                } else return;
            case 33:
                if (this._pageUpAndDown.enabled && n) {
                    let r = this._activeItemIndex - this._pageUpAndDown.delta;
                    this._setActiveItemByIndex(r > 0 ? r : 0, 1);
                    break
                } else return;
            case 34:
                if (this._pageUpAndDown.enabled && n) {
                    let r = this._activeItemIndex + this._pageUpAndDown.delta,
                        a = this._getItemsArray().length;
                    this._setActiveItemByIndex(r < a ? r : a - 1, -1);
                    break
                } else return;
            default:
                (n || We(s, "shiftKey")) && this._typeahead ? .handleKey(s);
                return
        }
        this._typeahead ? .reset(), s.preventDefault()
    }
    get activeItemIndex() {
        return this._activeItemIndex
    }
    get activeItem() {
        return this._activeItem()
    }
    isTyping() {
        return !!this._typeahead && this._typeahead.isTyping()
    }
    setFirstItemActive() {
        this._setActiveItemByIndex(0, 1)
    }
    setLastItemActive() {
        this._setActiveItemByIndex(this._getItemsArray().length - 1, -1)
    }
    setNextItemActive() {
        this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1)
    }
    setPreviousItemActive() {
        this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1)
    }
    updateActiveItem(s) {
        let e = this._getItemsArray(),
            t = typeof s == "number" ? s : e.indexOf(s),
            n = e[t];
        this._activeItem.set(n ? ? null), this._activeItemIndex = t, this._typeahead ? .setCurrentSelectedItemIndex(t)
    }
    destroy() {
        this._typeaheadSubscription.unsubscribe(), this._itemChangesSubscription ? .unsubscribe(), this._effectRef ? .destroy(), this._typeahead ? .destroy(), this.tabOut.complete(), this.change.complete()
    }
    _setActiveItemByDelta(s) {
        this._wrap ? this._setActiveInWrapMode(s) : this._setActiveInDefaultMode(s)
    }
    _setActiveInWrapMode(s) {
        let e = this._getItemsArray();
        for (let t = 1; t <= e.length; t++) {
            let n = (this._activeItemIndex + s * t + e.length) % e.length,
                r = e[n];
            if (!this._skipPredicateFn(r)) {
                this.setActiveItem(n);
                return
            }
        }
    }
    _setActiveInDefaultMode(s) {
        this._setActiveItemByIndex(this._activeItemIndex + s, s)
    }
    _setActiveItemByIndex(s, e) {
        let t = this._getItemsArray();
        if (t[s]) {
            for (; this._skipPredicateFn(t[s]);)
                if (s += e, !t[s]) return;
            this.setActiveItem(s)
        }
    }
    _getItemsArray() {
        return q(this._items) ? this._items() : this._items instanceof M ? this._items.toArray() : this._items
    }
    _itemsChanged(s) {
        this._typeahead ? .setItems(s);
        let e = this._activeItem();
        if (e) {
            let t = s.indexOf(e);
            t > -1 && t !== this._activeItemIndex && (this._activeItemIndex = t, this._typeahead ? .setCurrentSelectedItemIndex(t))
        }
    }
};
var ce = class extends V {
    _origin = "program";
    setFocusOrigin(s) {
        return this._origin = s, this
    }
    setActiveItem(s) {
        super.setActiveItem(s), this.activeItem && this.activeItem.focus(this._origin)
    }
};

function de(i) {
    return x(i) ? i : A(i)
}
var ue = class {
    _activeItemIndex = -1;
    _activeItem = null;
    _shouldActivationFollowFocus = !1;
    _horizontalOrientation = "ltr";
    _skipPredicateFn = s => !1;
    _trackByFn = s => s;
    _items = [];
    _typeahead;
    _typeaheadSubscription = N.EMPTY;
    _hasInitialFocused = !1;
    _initializeFocus() {
        if (this._hasInitialFocused || this._items.length === 0) return;
        let s = 0;
        for (let t = 0; t < this._items.length; t++)
            if (!this._skipPredicateFn(this._items[t]) && !this._isItemDisabled(this._items[t])) {
                s = t;
                break
            }
        let e = this._items[s];
        e.makeFocusable ? (this._activeItem ? .unfocus(), this._activeItemIndex = s, this._activeItem = e, this._typeahead ? .setCurrentSelectedItemIndex(s), e.makeFocusable()) : this.focusItem(s), this._hasInitialFocused = !0
    }
    constructor(s, e) {
        s instanceof M ? (this._items = s.toArray(), s.changes.subscribe(t => {
            this._items = t.toArray(), this._typeahead ? .setItems(this._items), this._updateActiveItemIndex(this._items), this._initializeFocus()
        })) : x(s) ? s.subscribe(t => {
            this._items = t, this._typeahead ? .setItems(t), this._updateActiveItemIndex(t), this._initializeFocus()
        }) : (this._items = s, this._initializeFocus()), typeof e.shouldActivationFollowFocus == "boolean" && (this._shouldActivationFollowFocus = e.shouldActivationFollowFocus), e.horizontalOrientation && (this._horizontalOrientation = e.horizontalOrientation), e.skipPredicate && (this._skipPredicateFn = e.skipPredicate), e.trackBy && (this._trackByFn = e.trackBy), typeof e.typeAheadDebounceInterval < "u" && this._setTypeAhead(e.typeAheadDebounceInterval)
    }
    change = new d;
    destroy() {
        this._typeaheadSubscription.unsubscribe(), this._typeahead ? .destroy(), this.change.complete()
    }
    onKeydown(s) {
        switch (s.key) {
            case "Tab":
                return;
            case "ArrowDown":
                this._focusNextItem();
                break;
            case "ArrowUp":
                this._focusPreviousItem();
                break;
            case "ArrowRight":
                this._horizontalOrientation === "rtl" ? this._collapseCurrentItem() : this._expandCurrentItem();
                break;
            case "ArrowLeft":
                this._horizontalOrientation === "rtl" ? this._expandCurrentItem() : this._collapseCurrentItem();
                break;
            case "Home":
                this._focusFirstItem();
                break;
            case "End":
                this._focusLastItem();
                break;
            case "Enter":
            case " ":
                this._activateCurrentItem();
                break;
            default:
                if (s.key === "*") {
                    this._expandAllItemsAtCurrentItemLevel();
                    break
                }
                this._typeahead ? .handleKey(s);
                return
        }
        this._typeahead ? .reset(), s.preventDefault()
    }
    getActiveItemIndex() {
        return this._activeItemIndex
    }
    getActiveItem() {
        return this._activeItem
    }
    _focusFirstItem() {
        this.focusItem(this._findNextAvailableItemIndex(-1))
    }
    _focusLastItem() {
        this.focusItem(this._findPreviousAvailableItemIndex(this._items.length))
    }
    _focusNextItem() {
        this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex))
    }
    _focusPreviousItem() {
        this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex))
    }
    focusItem(s, e = {}) {
        e.emitChangeEvent ? ? = !0;
        let t = typeof s == "number" ? s : this._items.findIndex(a => this._trackByFn(a) === this._trackByFn(s));
        if (t < 0 || t >= this._items.length) return;
        let n = this._items[t];
        if (this._activeItem !== null && this._trackByFn(n) === this._trackByFn(this._activeItem)) return;
        let r = this._activeItem;
        this._activeItem = n ? ? null, this._activeItemIndex = t, this._typeahead ? .setCurrentSelectedItemIndex(t), this._activeItem ? .focus(), r ? .unfocus(), e.emitChangeEvent && this.change.next(this._activeItem), this._shouldActivationFollowFocus && this._activateCurrentItem()
    }
    _updateActiveItemIndex(s) {
        let e = this._activeItem;
        if (!e) return;
        let t = s.findIndex(n => this._trackByFn(n) === this._trackByFn(e));
        t > -1 && t !== this._activeItemIndex && (this._activeItemIndex = t, this._typeahead ? .setCurrentSelectedItemIndex(t))
    }
    _setTypeAhead(s) {
        this._typeahead = new w(this._items, {
            debounceInterval: typeof s == "number" ? s : void 0,
            skipPredicate: e => this._skipPredicateFn(e)
        }), this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(e => {
            this.focusItem(e)
        })
    }
    _findNextAvailableItemIndex(s) {
        for (let e = s + 1; e < this._items.length; e++)
            if (!this._skipPredicateFn(this._items[e])) return e;
        return s
    }
    _findPreviousAvailableItemIndex(s) {
        for (let e = s - 1; e >= 0; e--)
            if (!this._skipPredicateFn(this._items[e])) return e;
        return s
    }
    _collapseCurrentItem() {
        if (this._activeItem)
            if (this._isCurrentItemExpanded()) this._activeItem.collapse();
            else {
                let s = this._activeItem.getParent();
                if (!s || this._skipPredicateFn(s)) return;
                this.focusItem(s)
            }
    }
    _expandCurrentItem() {
        this._activeItem && (this._isCurrentItemExpanded() ? de(this._activeItem.getChildren()).pipe(z(1)).subscribe(s => {
            let e = s.find(t => !this._skipPredicateFn(t));
            e && this.focusItem(e)
        }) : this._activeItem.expand())
    }
    _isCurrentItemExpanded() {
        return this._activeItem ? typeof this._activeItem.isExpanded == "boolean" ? this._activeItem.isExpanded : this._activeItem.isExpanded() : !1
    }
    _isItemDisabled(s) {
        return typeof s.isDisabled == "boolean" ? s.isDisabled : s.isDisabled ? .()
    }
    _expandAllItemsAtCurrentItemLevel() {
        if (!this._activeItem) return;
        let s = this._activeItem.getParent(),
            e;
        s ? e = de(s.getChildren()) : e = A(this._items.filter(t => t.getParent() === null)), e.pipe(z(1)).subscribe(t => {
            for (let n of t) n.expand()
        })
    }
    _activateCurrentItem() {
        this._activeItem ? .activate()
    }
};

function tt() {
    return (i, s) => new ue(i, s)
}
var Vi = new l("tree-key-manager", {
    providedIn: "root",
    factory: tt
});
var $e = " ";

function it(i, s, e) {
    let t = W(i, s);
    e = e.trim(), !t.some(n => n.trim() === e) && (t.push(e), i.setAttribute(s, t.join($e)))
}

function st(i, s, e) {
    let t = W(i, s);
    e = e.trim();
    let n = t.filter(r => r !== e);
    n.length ? i.setAttribute(s, n.join($e)) : i.removeAttribute(s)
}

function W(i, s) {
    return i.getAttribute(s) ? .match(/\S+/g) ? ? []
}
var Ze = "cdk-describedby-message",
    H = "cdk-describedby-host",
    he = 0,
    os = (() => {
        class i {
            _platform = o(p);
            _document = o(h);
            _messageRegistry = new Map;
            _messagesContainer = null;
            _id = `${he++}`;
            constructor() {
                o(Pe).load(je), this._id = o(j) + "-" + he++
            }
            describe(e, t, n) {
                if (!this._canBeDescribed(e, t)) return;
                let r = le(t, n);
                typeof t != "string" ? (Ye(t, this._id), this._messageRegistry.set(r, {
                    messageElement: t,
                    referenceCount: 0
                })) : this._messageRegistry.has(r) || this._createMessageElement(t, n), this._isElementDescribedByMessage(e, r) || this._addMessageReference(e, r)
            }
            removeDescription(e, t, n) {
                if (!t || !this._isElementNode(e)) return;
                let r = le(t, n);
                if (this._isElementDescribedByMessage(e, r) && this._removeMessageReference(e, r), typeof t == "string") {
                    let a = this._messageRegistry.get(r);
                    a && a.referenceCount === 0 && this._deleteMessageElement(r)
                }
                this._messagesContainer ? .childNodes.length === 0 && (this._messagesContainer.remove(), this._messagesContainer = null)
            }
            ngOnDestroy() {
                let e = this._document.querySelectorAll(`[${H}="${this._id}"]`);
                for (let t = 0; t < e.length; t++) this._removeCdkDescribedByReferenceIds(e[t]), e[t].removeAttribute(H);
                this._messagesContainer ? .remove(), this._messagesContainer = null, this._messageRegistry.clear()
            }
            _createMessageElement(e, t) {
                let n = this._document.createElement("div");
                Ye(n, this._id), n.textContent = e, t && n.setAttribute("role", t), this._createMessagesContainer(), this._messagesContainer.appendChild(n), this._messageRegistry.set(le(e, t), {
                    messageElement: n,
                    referenceCount: 0
                })
            }
            _deleteMessageElement(e) {
                this._messageRegistry.get(e) ? .messageElement ? .remove(), this._messageRegistry.delete(e)
            }
            _createMessagesContainer() {
                if (this._messagesContainer) return;
                let e = "cdk-describedby-message-container",
                    t = this._document.querySelectorAll(`.${e}[platform="server"]`);
                for (let r = 0; r < t.length; r++) t[r].remove();
                let n = this._document.createElement("div");
                n.style.visibility = "hidden", n.classList.add(e), n.classList.add("cdk-visually-hidden"), this._platform.isBrowser || n.setAttribute("platform", "server"), this._document.body.appendChild(n), this._messagesContainer = n
            }
            _removeCdkDescribedByReferenceIds(e) {
                let t = W(e, "aria-describedby").filter(n => n.indexOf(Ze) != 0);
                e.setAttribute("aria-describedby", t.join(" "))
            }
            _addMessageReference(e, t) {
                let n = this._messageRegistry.get(t);
                it(e, "aria-describedby", n.messageElement.id), e.setAttribute(H, this._id), n.referenceCount++
            }
            _removeMessageReference(e, t) {
                let n = this._messageRegistry.get(t);
                n.referenceCount--, st(e, "aria-describedby", n.messageElement.id), e.removeAttribute(H)
            }
            _isElementDescribedByMessage(e, t) {
                let n = W(e, "aria-describedby"),
                    r = this._messageRegistry.get(t),
                    a = r && r.messageElement.id;
                return !!a && n.indexOf(a) != -1
            }
            _canBeDescribed(e, t) {
                if (!this._isElementNode(e)) return !1;
                if (t && typeof t == "object") return !0;
                let n = t == null ? "" : `${t}`.trim(),
                    r = e.getAttribute("aria-label");
                return n ? !r || r.trim() !== n : !1
            }
            _isElementNode(e) {
                return e.nodeType === this._document.ELEMENT_NODE
            }
            static\ u0275fac = function(t) {
                return new(t || i)
            };
            static\ u0275prov = c({
                token: i,
                factory: i.\u0275fac,
                providedIn: "root"
            })
        }
        return i
    })();

function le(i, s) {
    return typeof i == "string" ? `${s||""}/${i}` : i
}

function Ye(i, s) {
    i.id || (i.id = `${Ze}-${s}-${he++}`)
}
var Ge = new l("cdk-dir-doc", {
    providedIn: "root",
    factory: nt
});

function nt() {
    return o(h)
}
var rt = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;

function ot(i) {
    let s = i ? .toLowerCase() || "";
    return s === "auto" && typeof navigator < "u" && navigator ? .language ? rt.test(navigator.language) ? "rtl" : "ltr" : s === "rtl" ? "rtl" : "ltr"
}
var at = (() => {
    class i {
        value = "ltr";
        change = new T;
        constructor() {
            let e = o(Ge, {
                optional: !0
            });
            if (e) {
                let t = e.body ? e.body.dir : null,
                    n = e.documentElement ? e.documentElement.dir : null;
                this.value = ot(t || n || "ltr")
            }
        }
        ngOnDestroy() {
            this.change.complete()
        }
        static\ u0275fac = function(t) {
            return new(t || i)
        };
        static\ u0275prov = c({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
    }
    return i
})();

function bs(i) {
    return i == null ? "" : typeof i == "string" ? i : `${i}px`
}

function vs(i) {
    return i != null && `${i}` != "false"
}
var O = function(i) {
        return i[i.NORMAL = 0] = "NORMAL", i[i.NEGATED = 1] = "NEGATED", i[i.INVERTED = 2] = "INVERTED", i
    }(O || {}),
    Y, E;

function Es() {
    if (E == null) {
        if (typeof document != "object" || !document || typeof Element != "function" || !Element) return E = !1, E;
        if ("scrollBehavior" in document.documentElement.style) E = !0;
        else {
            let i = Element.prototype.scrollTo;
            i ? E = !/\{\s*\[native code\]\s*\}/.test(i.toString()) : E = !1
        }
    }
    return E
}

function As() {
    if (typeof document != "object" || !document) return O.NORMAL;
    if (Y == null) {
        let i = document.createElement("div"),
            s = i.style;
        i.dir = "rtl", s.width = "1px", s.overflow = "auto", s.visibility = "hidden", s.pointerEvents = "none", s.position = "absolute";
        let e = document.createElement("div"),
            t = e.style;
        t.width = "2px", t.height = "1px", i.appendChild(e), document.body.appendChild(i), Y = O.NORMAL, i.scrollLeft === 0 && (i.scrollLeft = 1, Y = i.scrollLeft === 0 ? O.NEGATED : O.INVERTED), i.remove()
    }
    return Y
}

function Cs() {
    return typeof __karma__ < "u" && !!__karma__ || typeof jasmine < "u" && !!jasmine || typeof jest < "u" && !!jest || typeof Mocha < "u" && !!Mocha
}
var $ = (() => {
    class i {
        static\ u0275fac = function(t) {
            return new(t || i)
        };
        static\ u0275mod = f({
            type: i
        });
        static\ u0275inj = m({})
    }
    return i
})();
var Ws = (() => {
    class i {
        constructor() {
            o(U)._applyBodyHighContrastModeCssClasses()
        }
        static\ u0275fac = function(t) {
            return new(t || i)
        };
        static\ u0275mod = f({
            type: i
        });
        static\ u0275inj = m({
            imports: [$, $]
        })
    }
    return i
})();
var ze = class {};

function Zs(i) {
    return i && typeof i.connect == "function" && !(i instanceof me)
}
export {
    te as a, ie as b, y as c, k as d, J as e, ee as f, I as g, Se as h, qe as i, Pe as j, Gt as k, Qe as l, Je as m, We as n, ce as o, de as p, Vi as q, os as r, Cs as s, bs as t, at as u, O as v, Es as w, As as x, ze as y, Zs as z, $ as A, vs as B, Ws as C
};
//# sourceMappingURL=chunk-ZVDIJDKE.js.map