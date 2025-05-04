import {
    A as U,
    B as At,
    C as It,
    c as Pt,
    d as W,
    e as ae,
    f as rt,
    g as le,
    h as he,
    j as kt,
    l as ce,
    m as de,
    n as Tt,
    r as fe,
    s as Mt,
    t as f,
    u as N,
    v as V,
    w as at,
    x as B
} from "./chunk-ZVDIJDKE.js";
import {
    kb as D,
    lb as xt
} from "./chunk-GFV577OQ.js";
import {
    $b as Ot,
    A as Gt,
    Ac as se,
    Ba as yt,
    C as q,
    Ca as w,
    Cb as qt,
    D as vt,
    Dc as oe,
    Eb as Jt,
    Ga as C,
    Gb as ot,
    Ic as m,
    Kc as ne,
    Mb as nt,
    Mc as re,
    Nb as Ct,
    Oa as et,
    Sa as $t,
    Sb as te,
    Ta as F,
    Ub as St,
    _ as v,
    _b as Rt,
    a as Q,
    ac as Et,
    ca as y,
    d as Wt,
    da as O,
    ec as ee,
    fa as L,
    fc as ie,
    g as _,
    hb as wt,
    ia as a,
    jb as it,
    kb as T,
    lb as Qt,
    m as Ut,
    na as J,
    nb as M,
    pb as bt,
    ra as Zt,
    sa as Kt,
    sb as X,
    tb as E,
    tc as Dt,
    ub as P,
    va as tt,
    wb as st,
    xa as x
} from "./chunk-DIJUAHOD.js";
import {
    a as R,
    b as Xt
} from "./chunk-XDKSGOKZ.js";
var pe = 20,
    A = (() => {
        class o {
            _ngZone = a(w);
            _platform = a(D);
            _renderer = a(T).createRenderer(null, null);
            _cleanupGlobalListener;
            constructor() {}
            _scrolled = new _;
            _scrolledCount = 0;
            scrollContainers = new Map;
            register(t) {
                this.scrollContainers.has(t) || this.scrollContainers.set(t, t.elementScrolled().subscribe(() => this._scrolled.next(t)))
            }
            deregister(t) {
                let e = this.scrollContainers.get(t);
                e && (e.unsubscribe(), this.scrollContainers.delete(t))
            }
            scrolled(t = pe) {
                return this._platform.isBrowser ? new Wt(e => {
                    this._cleanupGlobalListener || (this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next())));
                    let s = t > 0 ? this._scrolled.pipe(vt(t)).subscribe(e) : this._scrolled.subscribe(e);
                    return this._scrolledCount++, () => {
                        s.unsubscribe(), this._scrolledCount--, this._scrolledCount || (this._cleanupGlobalListener ? .(), this._cleanupGlobalListener = void 0)
                    }
                }) : Ut()
            }
            ngOnDestroy() {
                this._cleanupGlobalListener ? .(), this._cleanupGlobalListener = void 0, this.scrollContainers.forEach((t, e) => this.deregister(e)), this._scrolled.complete()
            }
            ancestorScrolled(t, e) {
                let s = this.getAncestorScrollContainers(t);
                return this.scrolled(e).pipe(q(n => !n || s.indexOf(n) > -1))
            }
            getAncestorScrollContainers(t) {
                let e = [];
                return this.scrollContainers.forEach((s, n) => {
                    this._scrollableContainsElement(n, t) && e.push(n)
                }), e
            }
            _scrollableContainsElement(t, e) {
                let s = le(e),
                    n = t.getElementRef().nativeElement;
                do
                    if (s == n) return !0; while (s = s.parentElement);
                return !1
            }
            static\ u0275fac = function(e) {
                return new(e || o)
            };
            static\ u0275prov = y({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })(),
    _e = (() => {
        class o {
            elementRef = a(C);
            scrollDispatcher = a(A);
            ngZone = a(w);
            dir = a(N, {
                optional: !0
            });
            _scrollElement = this.elementRef.nativeElement;
            _destroyed = new _;
            _renderer = a(Qt);
            _cleanupScroll;
            _elementScrolled = new _;
            constructor() {}
            ngOnInit() {
                this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", t => this._elementScrolled.next(t))), this.scrollDispatcher.register(this)
            }
            ngOnDestroy() {
                this._cleanupScroll ? .(), this._elementScrolled.complete(), this.scrollDispatcher.deregister(this), this._destroyed.next(), this._destroyed.complete()
            }
            elementScrolled() {
                return this._elementScrolled
            }
            getElementRef() {
                return this.elementRef
            }
            scrollTo(t) {
                let e = this.elementRef.nativeElement,
                    s = this.dir && this.dir.value == "rtl";
                t.left == null && (t.left = s ? t.end : t.start), t.right == null && (t.right = s ? t.start : t.end), t.bottom != null && (t.top = e.scrollHeight - e.clientHeight - t.bottom), s && B() != V.NORMAL ? (t.left != null && (t.right = e.scrollWidth - e.clientWidth - t.left), B() == V.INVERTED ? t.left = t.right : B() == V.NEGATED && (t.left = t.right ? -t.right : t.right)) : t.right != null && (t.left = e.scrollWidth - e.clientWidth - t.right), this._applyScrollToOptions(t)
            }
            _applyScrollToOptions(t) {
                let e = this.elementRef.nativeElement;
                at() ? e.scrollTo(t) : (t.top != null && (e.scrollTop = t.top), t.left != null && (e.scrollLeft = t.left))
            }
            measureScrollOffset(t) {
                let e = "left",
                    s = "right",
                    n = this.elementRef.nativeElement;
                if (t == "top") return n.scrollTop;
                if (t == "bottom") return n.scrollHeight - n.clientHeight - n.scrollTop;
                let r = this.dir && this.dir.value == "rtl";
                return t == "start" ? t = r ? s : e : t == "end" && (t = r ? e : s), r && B() == V.INVERTED ? t == e ? n.scrollWidth - n.clientWidth - n.scrollLeft : n.scrollLeft : r && B() == V.NEGATED ? t == e ? n.scrollLeft + n.scrollWidth - n.clientWidth : -n.scrollLeft : t == e ? n.scrollLeft : n.scrollWidth - n.clientWidth - n.scrollLeft
            }
            static\ u0275fac = function(e) {
                return new(e || o)
            };
            static\ u0275dir = P({
                type: o,
                selectors: [
                    ["", "cdk-scrollable", ""],
                    ["", "cdkScrollable", ""]
                ]
            })
        }
        return o
    })(),
    ue = 20,
    G = (() => {
        class o {
            _platform = a(D);
            _listeners;
            _viewportSize;
            _change = new _;
            _document = a(m, {
                optional: !0
            });
            constructor() {
                let t = a(w),
                    e = a(T).createRenderer(null, null);
                t.runOutsideAngular(() => {
                    if (this._platform.isBrowser) {
                        let s = n => this._change.next(n);
                        this._listeners = [e.listen("window", "resize", s), e.listen("window", "orientationchange", s)]
                    }
                    this.change().subscribe(() => this._viewportSize = null)
                })
            }
            ngOnDestroy() {
                this._listeners ? .forEach(t => t()), this._change.complete()
            }
            getViewportSize() {
                this._viewportSize || this._updateViewportSize();
                let t = {
                    width: this._viewportSize.width,
                    height: this._viewportSize.height
                };
                return this._platform.isBrowser || (this._viewportSize = null), t
            }
            getViewportRect() {
                let t = this.getViewportScrollPosition(),
                    {
                        width: e,
                        height: s
                    } = this.getViewportSize();
                return {
                    top: t.top,
                    left: t.left,
                    bottom: t.top + s,
                    right: t.left + e,
                    height: s,
                    width: e
                }
            }
            getViewportScrollPosition() {
                if (!this._platform.isBrowser) return {
                    top: 0,
                    left: 0
                };
                let t = this._document,
                    e = this._getWindow(),
                    s = t.documentElement,
                    n = s.getBoundingClientRect(),
                    r = -n.top || t.body.scrollTop || e.scrollY || s.scrollTop || 0,
                    l = -n.left || t.body.scrollLeft || e.scrollX || s.scrollLeft || 0;
                return {
                    top: r,
                    left: l
                }
            }
            change(t = ue) {
                return t > 0 ? this._change.pipe(vt(t)) : this._change
            }
            _getWindow() {
                return this._document.defaultView || window
            }
            _updateViewportSize() {
                let t = this._getWindow();
                this._viewportSize = this._platform.isBrowser ? {
                    width: t.innerWidth,
                    height: t.innerHeight
                } : {
                    width: 0,
                    height: 0
                }
            }
            static\ u0275fac = function(e) {
                return new(e || o)
            };
            static\ u0275prov = y({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })();
var z = (() => {
        class o {
            static\ u0275fac = function(e) {
                return new(e || o)
            };
            static\ u0275mod = E({
                type: o
            });
            static\ u0275inj = O({})
        }
        return o
    })(),
    lt = (() => {
        class o {
            static\ u0275fac = function(e) {
                return new(e || o)
            };
            static\ u0275mod = E({
                type: o
            });
            static\ u0275inj = O({
                imports: [U, z, U, z]
            })
        }
        return o
    })();
var Y = class {
        _attachedHost;
        attach(i) {
            return this._attachedHost = i, i.attach(this)
        }
        detach() {
            let i = this._attachedHost;
            i != null && (this._attachedHost = null, i.detach())
        }
        get isAttached() {
            return this._attachedHost != null
        }
        setAttachedHost(i) {
            this._attachedHost = i
        }
    },
    H = class extends Y {
        component;
        viewContainerRef;
        injector;
        componentFactoryResolver;
        projectableNodes;
        constructor(i, t, e, s, n) {
            super(), this.component = i, this.viewContainerRef = t, this.injector = e, this.projectableNodes = n
        }
    },
    j = class extends Y {
        templateRef;
        viewContainerRef;
        context;
        injector;
        constructor(i, t, e, s) {
            super(), this.templateRef = i, this.viewContainerRef = t, this.context = e, this.injector = s
        }
        get origin() {
            return this.templateRef.elementRef
        }
        attach(i, t = this.context) {
            return this.context = t, super.attach(i)
        }
        detach() {
            return this.context = void 0, super.detach()
        }
    },
    ht = class extends Y {
        element;
        constructor(i) {
            super(), this.element = i instanceof C ? i.nativeElement : i
        }
    },
    Z = class {
        _attachedPortal;
        _disposeFn;
        _isDisposed = !1;
        hasAttached() {
            return !!this._attachedPortal
        }
        attach(i) {
            if (i instanceof H) return this._attachedPortal = i, this.attachComponentPortal(i);
            if (i instanceof j) return this._attachedPortal = i, this.attachTemplatePortal(i);
            if (this.attachDomPortal && i instanceof ht) return this._attachedPortal = i, this.attachDomPortal(i)
        }
        attachDomPortal = null;
        detach() {
            this._attachedPortal && (this._attachedPortal.setAttachedHost(null), this._attachedPortal = null), this._invokeDisposeFn()
        }
        dispose() {
            this.hasAttached() && this.detach(), this._invokeDisposeFn(), this._isDisposed = !0
        }
        setDisposeFn(i) {
            this._disposeFn = i
        }
        _invokeDisposeFn() {
            this._disposeFn && (this._disposeFn(), this._disposeFn = null)
        }
    };
var K = class extends Z {
    outletElement;
    _appRef;
    _defaultInjector;
    _document;
    constructor(i, t, e, s, n) {
        super(), this.outletElement = i, this._appRef = e, this._defaultInjector = s, this._document = n
    }
    attachComponentPortal(i) {
        let t;
        if (i.viewContainerRef) {
            let e = i.injector || i.viewContainerRef.injector,
                s = e.get(bt, null, {
                    optional: !0
                }) || void 0;
            t = i.viewContainerRef.createComponent(i.component, {
                index: i.viewContainerRef.length,
                injector: e,
                ngModuleRef: s,
                projectableNodes: i.projectableNodes || void 0
            }), this.setDisposeFn(() => t.destroy())
        } else {
            let e = this._appRef,
                s = i.injector || this._defaultInjector || x.NULL,
                n = s.get(J, e.injector);
            t = oe(i.component, {
                elementInjector: s,
                environmentInjector: n,
                projectableNodes: i.projectableNodes || void 0
            }), e.attachView(t.hostView), this.setDisposeFn(() => {
                e.viewCount > 0 && e.detachView(t.hostView), t.destroy()
            })
        }
        return this.outletElement.appendChild(this._getComponentRootNode(t)), this._attachedPortal = i, t
    }
    attachTemplatePortal(i) {
        let t = i.viewContainerRef,
            e = t.createEmbeddedView(i.templateRef, i.context, {
                injector: i.injector
            });
        return e.rootNodes.forEach(s => this.outletElement.appendChild(s)), e.detectChanges(), this.setDisposeFn(() => {
            let s = t.indexOf(e);
            s !== -1 && t.remove(s)
        }), this._attachedPortal = i, e
    }
    attachDomPortal = i => {
        let t = i.element;
        t.parentNode;
        let e = this._document.createComment("dom-portal");
        t.parentNode.insertBefore(e, t), this.outletElement.appendChild(t), this._attachedPortal = i, super.setDisposeFn(() => {
            e.parentNode && e.parentNode.replaceChild(t, e)
        })
    };
    dispose() {
        super.dispose(), this.outletElement.remove()
    }
    _getComponentRootNode(i) {
        return i.hostView.rootNodes[0]
    }
};
var Be = (() => {
    class o extends j {
        constructor() {
            let t = a(it),
                e = a(M);
            super(t, e)
        }
        static\ u0275fac = function(e) {
            return new(e || o)
        };
        static\ u0275dir = P({
            type: o,
            selectors: [
                ["", "cdkPortal", ""]
            ],
            exportAs: ["cdkPortal"],
            features: [st]
        })
    }
    return o
})();
var ze = (() => {
    class o extends Z {
        _moduleRef = a(bt, {
            optional: !0
        });
        _document = a(m);
        _viewContainerRef = a(M);
        _isInitialized = !1;
        _attachedRef;
        constructor() {
            super()
        }
        get portal() {
            return this._attachedPortal
        }
        set portal(t) {
            this.hasAttached() && !t && !this._isInitialized || (this.hasAttached() && super.detach(), t && super.attach(t), this._attachedPortal = t || null)
        }
        attached = new yt;
        get attachedRef() {
            return this._attachedRef
        }
        ngOnInit() {
            this._isInitialized = !0
        }
        ngOnDestroy() {
            super.dispose(), this._attachedRef = this._attachedPortal = null
        }
        attachComponentPortal(t) {
            t.setAttachedHost(this);
            let e = t.viewContainerRef != null ? t.viewContainerRef : this._viewContainerRef,
                s = e.createComponent(t.component, {
                    index: e.length,
                    injector: t.injector || e.injector,
                    projectableNodes: t.projectableNodes || void 0,
                    ngModuleRef: this._moduleRef || void 0
                });
            return e !== this._viewContainerRef && this._getRootNode().appendChild(s.hostView.rootNodes[0]), super.setDisposeFn(() => s.destroy()), this._attachedPortal = t, this._attachedRef = s, this.attached.emit(s), s
        }
        attachTemplatePortal(t) {
            t.setAttachedHost(this);
            let e = this._viewContainerRef.createEmbeddedView(t.templateRef, t.context, {
                injector: t.injector
            });
            return super.setDisposeFn(() => this._viewContainerRef.clear()), this._attachedPortal = t, this._attachedRef = e, this.attached.emit(e), e
        }
        attachDomPortal = t => {
            let e = t.element;
            e.parentNode;
            let s = this._document.createComment("dom-portal");
            t.setAttachedHost(this), e.parentNode.insertBefore(s, e), this._getRootNode().appendChild(e), this._attachedPortal = t, super.setDisposeFn(() => {
                s.parentNode && s.parentNode.replaceChild(e, s)
            })
        };
        _getRootNode() {
            let t = this._viewContainerRef.element.nativeElement;
            return t.nodeType === t.ELEMENT_NODE ? t : t.parentNode
        }
        static\ u0275fac = function(e) {
            return new(e || o)
        };
        static\ u0275dir = P({
            type: o,
            selectors: [
                ["", "cdkPortalOutlet", ""]
            ],
            inputs: {
                portal: [0, "cdkPortalOutlet", "portal"]
            },
            outputs: {
                attached: "attached"
            },
            exportAs: ["cdkPortalOutlet"],
            features: [st]
        })
    }
    return o
})();
var Ft = (() => {
    class o {
        static\ u0275fac = function(e) {
            return new(e || o)
        };
        static\ u0275mod = E({
            type: o
        });
        static\ u0275inj = O({})
    }
    return o
})();
var ge = at(),
    ct = class {
        _viewportRuler;
        _previousHTMLStyles = {
            top: "",
            left: ""
        };
        _previousScrollPosition;
        _isEnabled = !1;
        _document;
        constructor(i, t) {
            this._viewportRuler = i, this._document = t
        }
        attach() {}
        enable() {
            if (this._canBeEnabled()) {
                let i = this._document.documentElement;
                this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(), this._previousHTMLStyles.left = i.style.left || "", this._previousHTMLStyles.top = i.style.top || "", i.style.left = f(-this._previousScrollPosition.left), i.style.top = f(-this._previousScrollPosition.top), i.classList.add("cdk-global-scrollblock"), this._isEnabled = !0
            }
        }
        disable() {
            if (this._isEnabled) {
                let i = this._document.documentElement,
                    t = this._document.body,
                    e = i.style,
                    s = t.style,
                    n = e.scrollBehavior || "",
                    r = s.scrollBehavior || "";
                this._isEnabled = !1, e.left = this._previousHTMLStyles.left, e.top = this._previousHTMLStyles.top, i.classList.remove("cdk-global-scrollblock"), ge && (e.scrollBehavior = s.scrollBehavior = "auto"), window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top), ge && (e.scrollBehavior = n, s.scrollBehavior = r)
            }
        }
        _canBeEnabled() {
            if (this._document.documentElement.classList.contains("cdk-global-scrollblock") || this._isEnabled) return !1;
            let t = this._document.body,
                e = this._viewportRuler.getViewportSize();
            return t.scrollHeight > e.height || t.scrollWidth > e.width
        }
    };
var dt = class {
        _scrollDispatcher;
        _ngZone;
        _viewportRuler;
        _config;
        _scrollSubscription = null;
        _overlayRef;
        _initialScrollPosition;
        constructor(i, t, e, s) {
            this._scrollDispatcher = i, this._ngZone = t, this._viewportRuler = e, this._config = s
        }
        attach(i) {
            this._overlayRef, this._overlayRef = i
        }
        enable() {
            if (this._scrollSubscription) return;
            let i = this._scrollDispatcher.scrolled(0).pipe(q(t => !t || !this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));
            this._config && this._config.threshold && this._config.threshold > 1 ? (this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top, this._scrollSubscription = i.subscribe(() => {
                let t = this._viewportRuler.getViewportScrollPosition().top;
                Math.abs(t - this._initialScrollPosition) > this._config.threshold ? this._detach() : this._overlayRef.updatePosition()
            })) : this._scrollSubscription = i.subscribe(this._detach)
        }
        disable() {
            this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null)
        }
        detach() {
            this.disable(), this._overlayRef = null
        }
        _detach = () => {
            this.disable(), this._overlayRef.hasAttached() && this._ngZone.run(() => this._overlayRef.detach())
        }
    },
    $ = class {
        enable() {}
        disable() {}
        attach() {}
    };

function Nt(o, i) {
    return i.some(t => {
        let e = o.bottom < t.top,
            s = o.top > t.bottom,
            n = o.right < t.left,
            r = o.left > t.right;
        return e || s || n || r
    })
}

function me(o, i) {
    return i.some(t => {
        let e = o.top < t.top,
            s = o.bottom > t.bottom,
            n = o.left < t.left,
            r = o.right > t.right;
        return e || s || n || r
    })
}
var ft = class {
        _scrollDispatcher;
        _viewportRuler;
        _ngZone;
        _config;
        _scrollSubscription = null;
        _overlayRef;
        constructor(i, t, e, s) {
            this._scrollDispatcher = i, this._viewportRuler = t, this._ngZone = e, this._config = s
        }
        attach(i) {
            this._overlayRef, this._overlayRef = i
        }
        enable() {
            if (!this._scrollSubscription) {
                let i = this._config ? this._config.scrollThrottle : 0;
                this._scrollSubscription = this._scrollDispatcher.scrolled(i).subscribe(() => {
                    if (this._overlayRef.updatePosition(), this._config && this._config.autoClose) {
                        let t = this._overlayRef.overlayElement.getBoundingClientRect(),
                            {
                                width: e,
                                height: s
                            } = this._viewportRuler.getViewportSize();
                        Nt(t, [{
                            width: e,
                            height: s,
                            bottom: s,
                            right: e,
                            top: 0,
                            left: 0
                        }]) && (this.disable(), this._ngZone.run(() => this._overlayRef.detach()))
                    }
                })
            }
        }
        disable() {
            this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null)
        }
        detach() {
            this.disable(), this._overlayRef = null
        }
    },
    Se = (() => {
        class o {
            _scrollDispatcher = a(A);
            _viewportRuler = a(G);
            _ngZone = a(w);
            _document = a(m);
            constructor() {}
            noop = () => new $;
            close = t => new dt(this._scrollDispatcher, this._ngZone, this._viewportRuler, t);
            block = () => new ct(this._viewportRuler, this._document);
            reposition = t => new ft(this._scrollDispatcher, this._viewportRuler, this._ngZone, t);
            static\ u0275fac = function(e) {
                return new(e || o)
            };
            static\ u0275prov = y({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })(),
    pt = class {
        positionStrategy;
        scrollStrategy = new $;
        panelClass = "";
        hasBackdrop = !1;
        backdropClass = "cdk-overlay-dark-backdrop";
        width;
        height;
        minWidth;
        minHeight;
        maxWidth;
        maxHeight;
        direction;
        disposeOnNavigation = !1;
        constructor(i) {
            if (i) {
                let t = Object.keys(i);
                for (let e of t) i[e] !== void 0 && (this[e] = i[e])
            }
        }
    };
var _t = class {
    connectionPair;
    scrollableViewProperties;
    constructor(i, t) {
        this.connectionPair = i, this.scrollableViewProperties = t
    }
};
var Re = (() => {
        class o {
            _attachedOverlays = [];
            _document = a(m);
            _isAttached;
            constructor() {}
            ngOnDestroy() {
                this.detach()
            }
            add(t) {
                this.remove(t), this._attachedOverlays.push(t)
            }
            remove(t) {
                let e = this._attachedOverlays.indexOf(t);
                e > -1 && this._attachedOverlays.splice(e, 1), this._attachedOverlays.length === 0 && this.detach()
            }
            static\ u0275fac = function(e) {
                return new(e || o)
            };
            static\ u0275prov = y({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })(),
    Oe = (() => {
        class o extends Re {
            _ngZone = a(w);
            _renderer = a(T).createRenderer(null, null);
            _cleanupKeydown;
            add(t) {
                super.add(t), this._isAttached || (this._ngZone.runOutsideAngular(() => {
                    this._cleanupKeydown = this._renderer.listen("body", "keydown", this._keydownListener)
                }), this._isAttached = !0)
            }
            detach() {
                this._isAttached && (this._cleanupKeydown ? .(), this._isAttached = !1)
            }
            _keydownListener = t => {
                let e = this._attachedOverlays;
                for (let s = e.length - 1; s > -1; s--)
                    if (e[s]._keydownEvents.observers.length > 0) {
                        this._ngZone.run(() => e[s]._keydownEvents.next(t));
                        break
                    }
            };
            static\ u0275fac = (() => {
                let t;
                return function(s) {
                    return (t || (t = tt(o)))(s || o)
                }
            })();
            static\ u0275prov = y({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })(),
    Ee = (() => {
        class o extends Re {
            _platform = a(D);
            _ngZone = a(w);
            _renderer = a(T).createRenderer(null, null);
            _cursorOriginalValue;
            _cursorStyleIsSet = !1;
            _pointerDownEventTarget;
            _cleanups;
            add(t) {
                if (super.add(t), !this._isAttached) {
                    let e = this._document.body,
                        s = {
                            capture: !0
                        };
                    this._cleanups = this._ngZone.runOutsideAngular(() => [W(this._renderer, e, "pointerdown", this._pointerDownListener, s), W(this._renderer, e, "click", this._clickListener, s), W(this._renderer, e, "auxclick", this._clickListener, s), W(this._renderer, e, "contextmenu", this._clickListener, s)]), this._platform.IOS && !this._cursorStyleIsSet && (this._cursorOriginalValue = e.style.cursor, e.style.cursor = "pointer", this._cursorStyleIsSet = !0), this._isAttached = !0
                }
            }
            detach() {
                this._isAttached && (this._cleanups ? .forEach(t => t()), this._cleanups = void 0, this._platform.IOS && this._cursorStyleIsSet && (this._document.body.style.cursor = this._cursorOriginalValue, this._cursorStyleIsSet = !1), this._isAttached = !1)
            }
            _pointerDownListener = t => {
                this._pointerDownEventTarget = Pt(t)
            };
            _clickListener = t => {
                let e = Pt(t),
                    s = t.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : e;
                this._pointerDownEventTarget = null;
                let n = this._attachedOverlays.slice();
                for (let r = n.length - 1; r > -1; r--) {
                    let l = n[r];
                    if (l._outsidePointerEvents.observers.length < 1 || !l.hasAttached()) continue;
                    if (ve(l.overlayElement, e) || ve(l.overlayElement, s)) break;
                    let c = l._outsidePointerEvents;
                    this._ngZone ? this._ngZone.run(() => c.next(t)) : c.next(t)
                }
            };
            static\ u0275fac = (() => {
                let t;
                return function(s) {
                    return (t || (t = tt(o)))(s || o)
                }
            })();
            static\ u0275prov = y({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })();

function ve(o, i) {
    let t = typeof ShadowRoot < "u" && ShadowRoot,
        e = i;
    for (; e;) {
        if (e === o) return !0;
        e = t && e instanceof ShadowRoot ? e.host : e.parentNode
    }
    return !1
}
var De = (() => {
        class o {
            static\ u0275fac = function(e) {
                return new(e || o)
            };
            static\ u0275cmp = X({
                type: o,
                selectors: [
                    ["ng-component"]
                ],
                hostAttrs: ["cdk-overlay-style-loader", ""],
                decls: 0,
                vars: 0,
                template: function(e, s) {},
                styles: [".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}"],
                encapsulation: 2,
                changeDetection: 0
            })
        }
        return o
    })(),
    Bt = (() => {
        class o {
            _platform = a(D);
            _containerElement;
            _document = a(m);
            _styleLoader = a(kt);
            constructor() {}
            ngOnDestroy() {
                this._containerElement ? .remove()
            }
            getContainerElement() {
                return this._loadStyles(), this._containerElement || this._createContainer(), this._containerElement
            }
            _createContainer() {
                let t = "cdk-overlay-container";
                if (this._platform.isBrowser || Mt()) {
                    let s = this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);
                    for (let n = 0; n < s.length; n++) s[n].remove()
                }
                let e = this._document.createElement("div");
                e.classList.add(t), Mt() ? e.setAttribute("platform", "test") : this._platform.isBrowser || e.setAttribute("platform", "server"), this._document.body.appendChild(e), this._containerElement = e
            }
            _loadStyles() {
                this._styleLoader.load(De)
            }
            static\ u0275fac = function(e) {
                return new(e || o)
            };
            static\ u0275prov = y({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })(),
    Vt = class {
        _renderer;
        _ngZone;
        element;
        _cleanupClick;
        _cleanupTransitionEnd;
        _fallbackTimeout;
        constructor(i, t, e, s) {
            this._renderer = t, this._ngZone = e, this.element = i.createElement("div"), this.element.classList.add("cdk-overlay-backdrop"), this._cleanupClick = t.listen(this.element, "click", s)
        }
        detach() {
            this._ngZone.runOutsideAngular(() => {
                let i = this.element;
                clearTimeout(this._fallbackTimeout), this._cleanupTransitionEnd ? .(), this._cleanupTransitionEnd = this._renderer.listen(i, "transitionend", this.dispose), this._fallbackTimeout = setTimeout(this.dispose, 500), i.style.pointerEvents = "none", i.classList.remove("cdk-overlay-backdrop-showing")
            })
        }
        dispose = () => {
            clearTimeout(this._fallbackTimeout), this._cleanupClick ? .(), this._cleanupTransitionEnd ? .(), this._cleanupClick = this._cleanupTransitionEnd = this._fallbackTimeout = void 0, this.element.remove()
        }
    },
    ut = class {
        _portalOutlet;
        _host;
        _pane;
        _config;
        _ngZone;
        _keyboardDispatcher;
        _document;
        _location;
        _outsideClickDispatcher;
        _animationsDisabled;
        _injector;
        _renderer;
        _backdropClick = new _;
        _attachments = new _;
        _detachments = new _;
        _positionStrategy;
        _scrollStrategy;
        _locationChanges = Q.EMPTY;
        _backdropRef = null;
        _previousHostParent;
        _keydownEvents = new _;
        _outsidePointerEvents = new _;
        _renders = new _;
        _afterRenderRef;
        _afterNextRenderRef;
        constructor(i, t, e, s, n, r, l, c, d, h = !1, p, S) {
            this._portalOutlet = i, this._host = t, this._pane = e, this._config = s, this._ngZone = n, this._keyboardDispatcher = r, this._document = l, this._location = c, this._outsideClickDispatcher = d, this._animationsDisabled = h, this._injector = p, this._renderer = S, s.scrollStrategy && (this._scrollStrategy = s.scrollStrategy, this._scrollStrategy.attach(this)), this._positionStrategy = s.positionStrategy, this._afterRenderRef = se(() => $t(() => {
                this._renders.next()
            }, {
                injector: this._injector
            }))
        }
        get overlayElement() {
            return this._pane
        }
        get backdropElement() {
            return this._backdropRef ? .element || null
        }
        get hostElement() {
            return this._host
        }
        attach(i) {
            !this._host.parentElement && this._previousHostParent && this._previousHostParent.appendChild(this._host);
            let t = this._portalOutlet.attach(i);
            return this._positionStrategy && this._positionStrategy.attach(this), this._updateStackingOrder(), this._updateElementSize(), this._updateElementDirection(), this._scrollStrategy && this._scrollStrategy.enable(), this._afterNextRenderRef ? .destroy(), this._afterNextRenderRef = F(() => {
                this.hasAttached() && this.updatePosition()
            }, {
                injector: this._injector
            }), this._togglePointerEvents(!0), this._config.hasBackdrop && this._attachBackdrop(), this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !0), this._attachments.next(), this._keyboardDispatcher.add(this), this._config.disposeOnNavigation && (this._locationChanges = this._location.subscribe(() => this.dispose())), this._outsideClickDispatcher.add(this), typeof t ? .onDestroy == "function" && t.onDestroy(() => {
                this.hasAttached() && this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()))
            }), t
        }
        detach() {
            if (!this.hasAttached()) return;
            this.detachBackdrop(), this._togglePointerEvents(!1), this._positionStrategy && this._positionStrategy.detach && this._positionStrategy.detach(), this._scrollStrategy && this._scrollStrategy.disable();
            let i = this._portalOutlet.detach();
            return this._detachments.next(), this._keyboardDispatcher.remove(this), this._detachContentWhenEmpty(), this._locationChanges.unsubscribe(), this._outsideClickDispatcher.remove(this), i
        }
        dispose() {
            let i = this.hasAttached();
            this._positionStrategy && this._positionStrategy.dispose(), this._disposeScrollStrategy(), this._backdropRef ? .dispose(), this._locationChanges.unsubscribe(), this._keyboardDispatcher.remove(this), this._portalOutlet.dispose(), this._attachments.complete(), this._backdropClick.complete(), this._keydownEvents.complete(), this._outsidePointerEvents.complete(), this._outsideClickDispatcher.remove(this), this._host ? .remove(), this._afterNextRenderRef ? .destroy(), this._previousHostParent = this._pane = this._host = this._backdropRef = null, i && this._detachments.next(), this._detachments.complete(), this._afterRenderRef.destroy(), this._renders.complete()
        }
        hasAttached() {
            return this._portalOutlet.hasAttached()
        }
        backdropClick() {
            return this._backdropClick
        }
        attachments() {
            return this._attachments
        }
        detachments() {
            return this._detachments
        }
        keydownEvents() {
            return this._keydownEvents
        }
        outsidePointerEvents() {
            return this._outsidePointerEvents
        }
        getConfig() {
            return this._config
        }
        updatePosition() {
            this._positionStrategy && this._positionStrategy.apply()
        }
        updatePositionStrategy(i) {
            i !== this._positionStrategy && (this._positionStrategy && this._positionStrategy.dispose(), this._positionStrategy = i, this.hasAttached() && (i.attach(this), this.updatePosition()))
        }
        updateSize(i) {
            this._config = R(R({}, this._config), i), this._updateElementSize()
        }
        setDirection(i) {
            this._config = Xt(R({}, this._config), {
                direction: i
            }), this._updateElementDirection()
        }
        addPanelClass(i) {
            this._pane && this._toggleClasses(this._pane, i, !0)
        }
        removePanelClass(i) {
            this._pane && this._toggleClasses(this._pane, i, !1)
        }
        getDirection() {
            let i = this._config.direction;
            return i ? typeof i == "string" ? i : i.value : "ltr"
        }
        updateScrollStrategy(i) {
            i !== this._scrollStrategy && (this._disposeScrollStrategy(), this._scrollStrategy = i, this.hasAttached() && (i.attach(this), i.enable()))
        }
        _updateElementDirection() {
            this._host.setAttribute("dir", this.getDirection())
        }
        _updateElementSize() {
            if (!this._pane) return;
            let i = this._pane.style;
            i.width = f(this._config.width), i.height = f(this._config.height), i.minWidth = f(this._config.minWidth), i.minHeight = f(this._config.minHeight), i.maxWidth = f(this._config.maxWidth), i.maxHeight = f(this._config.maxHeight)
        }
        _togglePointerEvents(i) {
            this._pane.style.pointerEvents = i ? "" : "none"
        }
        _attachBackdrop() {
            let i = "cdk-overlay-backdrop-showing";
            this._backdropRef ? .dispose(), this._backdropRef = new Vt(this._document, this._renderer, this._ngZone, t => {
                this._backdropClick.next(t)
            }), this._animationsDisabled && this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"), this._config.backdropClass && this._toggleClasses(this._backdropRef.element, this._config.backdropClass, !0), this._host.parentElement.insertBefore(this._backdropRef.element, this._host), !this._animationsDisabled && typeof requestAnimationFrame < "u" ? this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => this._backdropRef ? .element.classList.add(i))
            }) : this._backdropRef.element.classList.add(i)
        }
        _updateStackingOrder() {
            this._host.nextSibling && this._host.parentNode.appendChild(this._host)
        }
        detachBackdrop() {
            this._animationsDisabled ? (this._backdropRef ? .dispose(), this._backdropRef = null) : this._backdropRef ? .detach()
        }
        _toggleClasses(i, t, e) {
            let s = xt(t || []).filter(n => !!n);
            s.length && (e ? i.classList.add(...s) : i.classList.remove(...s))
        }
        _detachContentWhenEmpty() {
            this._ngZone.runOutsideAngular(() => {
                let i = this._renders.pipe(v(Gt(this._attachments, this._detachments))).subscribe(() => {
                    (!this._pane || !this._host || this._pane.children.length === 0) && (this._pane && this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !1), this._host && this._host.parentElement && (this._previousHostParent = this._host.parentElement, this._host.remove()), i.unsubscribe())
                })
            })
        }
        _disposeScrollStrategy() {
            let i = this._scrollStrategy;
            i ? .disable(), i ? .detach ? .()
        }
    },
    ye = "cdk-overlay-connected-position-bounding-box",
    Ye = /([A-Za-z%]+)$/,
    gt = class {
        _viewportRuler;
        _document;
        _platform;
        _overlayContainer;
        _overlayRef;
        _isInitialRender;
        _lastBoundingBoxSize = {
            width: 0,
            height: 0
        };
        _isPushed = !1;
        _canPush = !0;
        _growAfterOpen = !1;
        _hasFlexibleDimensions = !0;
        _positionLocked = !1;
        _originRect;
        _overlayRect;
        _viewportRect;
        _containerRect;
        _viewportMargin = 0;
        _scrollables = [];
        _preferredPositions = [];
        _origin;
        _pane;
        _isDisposed;
        _boundingBox;
        _lastPosition;
        _lastScrollVisibility;
        _positionChanges = new _;
        _resizeSubscription = Q.EMPTY;
        _offsetX = 0;
        _offsetY = 0;
        _transformOriginSelector;
        _appliedPanelClasses = [];
        _previousPushAmount;
        positionChanges = this._positionChanges;
        get positions() {
            return this._preferredPositions
        }
        constructor(i, t, e, s, n) {
            this._viewportRuler = t, this._document = e, this._platform = s, this._overlayContainer = n, this.setOrigin(i)
        }
        attach(i) {
            this._overlayRef && this._overlayRef, this._validatePositions(), i.hostElement.classList.add(ye), this._overlayRef = i, this._boundingBox = i.hostElement, this._pane = i.overlayElement, this._isDisposed = !1, this._isInitialRender = !0, this._lastPosition = null, this._resizeSubscription.unsubscribe(), this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
                this._isInitialRender = !0, this.apply()
            })
        }
        apply() {
            if (this._isDisposed || !this._platform.isBrowser) return;
            if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
                this.reapplyLastPosition();
                return
            }
            this._clearPanelClasses(), this._resetOverlayElementStyles(), this._resetBoundingBoxStyles(), this._viewportRect = this._getNarrowedViewportRect(), this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
            let i = this._originRect,
                t = this._overlayRect,
                e = this._viewportRect,
                s = this._containerRect,
                n = [],
                r;
            for (let l of this._preferredPositions) {
                let c = this._getOriginPoint(i, s, l),
                    d = this._getOverlayPoint(c, t, l),
                    h = this._getOverlayFit(d, t, e, l);
                if (h.isCompletelyWithinViewport) {
                    this._isPushed = !1, this._applyPosition(l, c);
                    return
                }
                if (this._canFitWithFlexibleDimensions(h, d, e)) {
                    n.push({
                        position: l,
                        origin: c,
                        overlayRect: t,
                        boundingBoxRect: this._calculateBoundingBoxRect(c, l)
                    });
                    continue
                }(!r || r.overlayFit.visibleArea < h.visibleArea) && (r = {
                    overlayFit: h,
                    overlayPoint: d,
                    originPoint: c,
                    position: l,
                    overlayRect: t
                })
            }
            if (n.length) {
                let l = null,
                    c = -1;
                for (let d of n) {
                    let h = d.boundingBoxRect.width * d.boundingBoxRect.height * (d.position.weight || 1);
                    h > c && (c = h, l = d)
                }
                this._isPushed = !1, this._applyPosition(l.position, l.origin);
                return
            }
            if (this._canPush) {
                this._isPushed = !0, this._applyPosition(r.position, r.originPoint);
                return
            }
            this._applyPosition(r.position, r.originPoint)
        }
        detach() {
            this._clearPanelClasses(), this._lastPosition = null, this._previousPushAmount = null, this._resizeSubscription.unsubscribe()
        }
        dispose() {
            this._isDisposed || (this._boundingBox && I(this._boundingBox.style, {
                top: "",
                left: "",
                right: "",
                bottom: "",
                height: "",
                width: "",
                alignItems: "",
                justifyContent: ""
            }), this._pane && this._resetOverlayElementStyles(), this._overlayRef && this._overlayRef.hostElement.classList.remove(ye), this.detach(), this._positionChanges.complete(), this._overlayRef = this._boundingBox = null, this._isDisposed = !0)
        }
        reapplyLastPosition() {
            if (this._isDisposed || !this._platform.isBrowser) return;
            let i = this._lastPosition;
            if (i) {
                this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._viewportRect = this._getNarrowedViewportRect(), this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
                let t = this._getOriginPoint(this._originRect, this._containerRect, i);
                this._applyPosition(i, t)
            } else this.apply()
        }
        withScrollableContainers(i) {
            return this._scrollables = i, this
        }
        withPositions(i) {
            return this._preferredPositions = i, i.indexOf(this._lastPosition) === -1 && (this._lastPosition = null), this._validatePositions(), this
        }
        withViewportMargin(i) {
            return this._viewportMargin = i, this
        }
        withFlexibleDimensions(i = !0) {
            return this._hasFlexibleDimensions = i, this
        }
        withGrowAfterOpen(i = !0) {
            return this._growAfterOpen = i, this
        }
        withPush(i = !0) {
            return this._canPush = i, this
        }
        withLockedPosition(i = !0) {
            return this._positionLocked = i, this
        }
        setOrigin(i) {
            return this._origin = i, this
        }
        withDefaultOffsetX(i) {
            return this._offsetX = i, this
        }
        withDefaultOffsetY(i) {
            return this._offsetY = i, this
        }
        withTransformOriginOn(i) {
            return this._transformOriginSelector = i, this
        }
        _getOriginPoint(i, t, e) {
            let s;
            if (e.originX == "center") s = i.left + i.width / 2;
            else {
                let r = this._isRtl() ? i.right : i.left,
                    l = this._isRtl() ? i.left : i.right;
                s = e.originX == "start" ? r : l
            }
            t.left < 0 && (s -= t.left);
            let n;
            return e.originY == "center" ? n = i.top + i.height / 2 : n = e.originY == "top" ? i.top : i.bottom, t.top < 0 && (n -= t.top), {
                x: s,
                y: n
            }
        }
        _getOverlayPoint(i, t, e) {
            let s;
            e.overlayX == "center" ? s = -t.width / 2 : e.overlayX === "start" ? s = this._isRtl() ? -t.width : 0 : s = this._isRtl() ? 0 : -t.width;
            let n;
            return e.overlayY == "center" ? n = -t.height / 2 : n = e.overlayY == "top" ? 0 : -t.height, {
                x: i.x + s,
                y: i.y + n
            }
        }
        _getOverlayFit(i, t, e, s) {
            let n = be(t),
                {
                    x: r,
                    y: l
                } = i,
                c = this._getOffset(s, "x"),
                d = this._getOffset(s, "y");
            c && (r += c), d && (l += d);
            let h = 0 - r,
                p = r + n.width - e.width,
                S = 0 - l,
                g = l + n.height - e.height,
                u = this._subtractOverflows(n.width, h, p),
                b = this._subtractOverflows(n.height, S, g),
                jt = u * b;
            return {
                visibleArea: jt,
                isCompletelyWithinViewport: n.width * n.height === jt,
                fitsInViewportVertically: b === n.height,
                fitsInViewportHorizontally: u == n.width
            }
        }
        _canFitWithFlexibleDimensions(i, t, e) {
            if (this._hasFlexibleDimensions) {
                let s = e.bottom - t.y,
                    n = e.right - t.x,
                    r = we(this._overlayRef.getConfig().minHeight),
                    l = we(this._overlayRef.getConfig().minWidth),
                    c = i.fitsInViewportVertically || r != null && r <= s,
                    d = i.fitsInViewportHorizontally || l != null && l <= n;
                return c && d
            }
            return !1
        }
        _pushOverlayOnScreen(i, t, e) {
            if (this._previousPushAmount && this._positionLocked) return {
                x: i.x + this._previousPushAmount.x,
                y: i.y + this._previousPushAmount.y
            };
            let s = be(t),
                n = this._viewportRect,
                r = Math.max(i.x + s.width - n.width, 0),
                l = Math.max(i.y + s.height - n.height, 0),
                c = Math.max(n.top - e.top - i.y, 0),
                d = Math.max(n.left - e.left - i.x, 0),
                h = 0,
                p = 0;
            return s.width <= n.width ? h = d || -r : h = i.x < this._viewportMargin ? n.left - e.left - i.x : 0, s.height <= n.height ? p = c || -l : p = i.y < this._viewportMargin ? n.top - e.top - i.y : 0, this._previousPushAmount = {
                x: h,
                y: p
            }, {
                x: i.x + h,
                y: i.y + p
            }
        }
        _applyPosition(i, t) {
            if (this._setTransformOrigin(i), this._setOverlayElementStyles(t, i), this._setBoundingBoxStyles(t, i), i.panelClass && this._addPanelClasses(i.panelClass), this._positionChanges.observers.length) {
                let e = this._getScrollVisibility();
                if (i !== this._lastPosition || !this._lastScrollVisibility || !He(this._lastScrollVisibility, e)) {
                    let s = new _t(i, e);
                    this._positionChanges.next(s)
                }
                this._lastScrollVisibility = e
            }
            this._lastPosition = i, this._isInitialRender = !1
        }
        _setTransformOrigin(i) {
            if (!this._transformOriginSelector) return;
            let t = this._boundingBox.querySelectorAll(this._transformOriginSelector),
                e, s = i.overlayY;
            i.overlayX === "center" ? e = "center" : this._isRtl() ? e = i.overlayX === "start" ? "right" : "left" : e = i.overlayX === "start" ? "left" : "right";
            for (let n = 0; n < t.length; n++) t[n].style.transformOrigin = `${e} ${s}`
        }
        _calculateBoundingBoxRect(i, t) {
            let e = this._viewportRect,
                s = this._isRtl(),
                n, r, l;
            if (t.overlayY === "top") r = i.y, n = e.height - r + this._viewportMargin;
            else if (t.overlayY === "bottom") l = e.height - i.y + this._viewportMargin * 2, n = e.height - l + this._viewportMargin;
            else {
                let g = Math.min(e.bottom - i.y + e.top, i.y),
                    u = this._lastBoundingBoxSize.height;
                n = g * 2, r = i.y - g, n > u && !this._isInitialRender && !this._growAfterOpen && (r = i.y - u / 2)
            }
            let c = t.overlayX === "start" && !s || t.overlayX === "end" && s,
                d = t.overlayX === "end" && !s || t.overlayX === "start" && s,
                h, p, S;
            if (d) S = e.width - i.x + this._viewportMargin * 2, h = i.x - this._viewportMargin;
            else if (c) p = i.x, h = e.right - i.x;
            else {
                let g = Math.min(e.right - i.x + e.left, i.x),
                    u = this._lastBoundingBoxSize.width;
                h = g * 2, p = i.x - g, h > u && !this._isInitialRender && !this._growAfterOpen && (p = i.x - u / 2)
            }
            return {
                top: r,
                left: p,
                bottom: l,
                right: S,
                width: h,
                height: n
            }
        }
        _setBoundingBoxStyles(i, t) {
            let e = this._calculateBoundingBoxRect(i, t);
            !this._isInitialRender && !this._growAfterOpen && (e.height = Math.min(e.height, this._lastBoundingBoxSize.height), e.width = Math.min(e.width, this._lastBoundingBoxSize.width));
            let s = {};
            if (this._hasExactPosition()) s.top = s.left = "0", s.bottom = s.right = s.maxHeight = s.maxWidth = "", s.width = s.height = "100%";
            else {
                let n = this._overlayRef.getConfig().maxHeight,
                    r = this._overlayRef.getConfig().maxWidth;
                s.height = f(e.height), s.top = f(e.top), s.bottom = f(e.bottom), s.width = f(e.width), s.left = f(e.left), s.right = f(e.right), t.overlayX === "center" ? s.alignItems = "center" : s.alignItems = t.overlayX === "end" ? "flex-end" : "flex-start", t.overlayY === "center" ? s.justifyContent = "center" : s.justifyContent = t.overlayY === "bottom" ? "flex-end" : "flex-start", n && (s.maxHeight = f(n)), r && (s.maxWidth = f(r))
            }
            this._lastBoundingBoxSize = e, I(this._boundingBox.style, s)
        }
        _resetBoundingBoxStyles() {
            I(this._boundingBox.style, {
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                height: "",
                width: "",
                alignItems: "",
                justifyContent: ""
            })
        }
        _resetOverlayElementStyles() {
            I(this._pane.style, {
                top: "",
                left: "",
                bottom: "",
                right: "",
                position: "",
                transform: ""
            })
        }
        _setOverlayElementStyles(i, t) {
            let e = {},
                s = this._hasExactPosition(),
                n = this._hasFlexibleDimensions,
                r = this._overlayRef.getConfig();
            if (s) {
                let h = this._viewportRuler.getViewportScrollPosition();
                I(e, this._getExactOverlayY(t, i, h)), I(e, this._getExactOverlayX(t, i, h))
            } else e.position = "static";
            let l = "",
                c = this._getOffset(t, "x"),
                d = this._getOffset(t, "y");
            c && (l += `translateX(${c}px) `), d && (l += `translateY(${d}px)`), e.transform = l.trim(), r.maxHeight && (s ? e.maxHeight = f(r.maxHeight) : n && (e.maxHeight = "")), r.maxWidth && (s ? e.maxWidth = f(r.maxWidth) : n && (e.maxWidth = "")), I(this._pane.style, e)
        }
        _getExactOverlayY(i, t, e) {
            let s = {
                    top: "",
                    bottom: ""
                },
                n = this._getOverlayPoint(t, this._overlayRect, i);
            if (this._isPushed && (n = this._pushOverlayOnScreen(n, this._overlayRect, e)), i.overlayY === "bottom") {
                let r = this._document.documentElement.clientHeight;
                s.bottom = `${r-(n.y+this._overlayRect.height)}px`
            } else s.top = f(n.y);
            return s
        }
        _getExactOverlayX(i, t, e) {
            let s = {
                    left: "",
                    right: ""
                },
                n = this._getOverlayPoint(t, this._overlayRect, i);
            this._isPushed && (n = this._pushOverlayOnScreen(n, this._overlayRect, e));
            let r;
            if (this._isRtl() ? r = i.overlayX === "end" ? "left" : "right" : r = i.overlayX === "end" ? "right" : "left", r === "right") {
                let l = this._document.documentElement.clientWidth;
                s.right = `${l-(n.x+this._overlayRect.width)}px`
            } else s.left = f(n.x);
            return s
        }
        _getScrollVisibility() {
            let i = this._getOriginRect(),
                t = this._pane.getBoundingClientRect(),
                e = this._scrollables.map(s => s.getElementRef().nativeElement.getBoundingClientRect());
            return {
                isOriginClipped: me(i, e),
                isOriginOutsideView: Nt(i, e),
                isOverlayClipped: me(t, e),
                isOverlayOutsideView: Nt(t, e)
            }
        }
        _subtractOverflows(i, ...t) {
            return t.reduce((e, s) => e - Math.max(s, 0), i)
        }
        _getNarrowedViewportRect() {
            let i = this._document.documentElement.clientWidth,
                t = this._document.documentElement.clientHeight,
                e = this._viewportRuler.getViewportScrollPosition();
            return {
                top: e.top + this._viewportMargin,
                left: e.left + this._viewportMargin,
                right: e.left + i - this._viewportMargin,
                bottom: e.top + t - this._viewportMargin,
                width: i - 2 * this._viewportMargin,
                height: t - 2 * this._viewportMargin
            }
        }
        _isRtl() {
            return this._overlayRef.getDirection() === "rtl"
        }
        _hasExactPosition() {
            return !this._hasFlexibleDimensions || this._isPushed
        }
        _getOffset(i, t) {
            return t === "x" ? i.offsetX == null ? this._offsetX : i.offsetX : i.offsetY == null ? this._offsetY : i.offsetY
        }
        _validatePositions() {}
        _addPanelClasses(i) {
            this._pane && xt(i).forEach(t => {
                t !== "" && this._appliedPanelClasses.indexOf(t) === -1 && (this._appliedPanelClasses.push(t), this._pane.classList.add(t))
            })
        }
        _clearPanelClasses() {
            this._pane && (this._appliedPanelClasses.forEach(i => {
                this._pane.classList.remove(i)
            }), this._appliedPanelClasses = [])
        }
        _getOriginRect() {
            let i = this._origin;
            if (i instanceof C) return i.nativeElement.getBoundingClientRect();
            if (i instanceof Element) return i.getBoundingClientRect();
            let t = i.width || 0,
                e = i.height || 0;
            return {
                top: i.y,
                bottom: i.y + e,
                left: i.x,
                right: i.x + t,
                height: e,
                width: t
            }
        }
    };

function I(o, i) {
    for (let t in i) i.hasOwnProperty(t) && (o[t] = i[t]);
    return o
}

function we(o) {
    if (typeof o != "number" && o != null) {
        let [i, t] = o.split(Ye);
        return !t || t === "px" ? parseFloat(i) : null
    }
    return o || null
}

function be(o) {
    return {
        top: Math.floor(o.top),
        right: Math.floor(o.right),
        bottom: Math.floor(o.bottom),
        left: Math.floor(o.left),
        width: Math.floor(o.width),
        height: Math.floor(o.height)
    }
}

function He(o, i) {
    return o === i ? !0 : o.isOriginClipped === i.isOriginClipped && o.isOriginOutsideView === i.isOriginOutsideView && o.isOverlayClipped === i.isOverlayClipped && o.isOverlayOutsideView === i.isOverlayOutsideView
}
var Ce = "cdk-global-overlay-wrapper",
    mt = class {
        _overlayRef;
        _cssPosition = "static";
        _topOffset = "";
        _bottomOffset = "";
        _alignItems = "";
        _xPosition = "";
        _xOffset = "";
        _width = "";
        _height = "";
        _isDisposed = !1;
        attach(i) {
            let t = i.getConfig();
            this._overlayRef = i, this._width && !t.width && i.updateSize({
                width: this._width
            }), this._height && !t.height && i.updateSize({
                height: this._height
            }), i.hostElement.classList.add(Ce), this._isDisposed = !1
        }
        top(i = "") {
            return this._bottomOffset = "", this._topOffset = i, this._alignItems = "flex-start", this
        }
        left(i = "") {
            return this._xOffset = i, this._xPosition = "left", this
        }
        bottom(i = "") {
            return this._topOffset = "", this._bottomOffset = i, this._alignItems = "flex-end", this
        }
        right(i = "") {
            return this._xOffset = i, this._xPosition = "right", this
        }
        start(i = "") {
            return this._xOffset = i, this._xPosition = "start", this
        }
        end(i = "") {
            return this._xOffset = i, this._xPosition = "end", this
        }
        width(i = "") {
            return this._overlayRef ? this._overlayRef.updateSize({
                width: i
            }) : this._width = i, this
        }
        height(i = "") {
            return this._overlayRef ? this._overlayRef.updateSize({
                height: i
            }) : this._height = i, this
        }
        centerHorizontally(i = "") {
            return this.left(i), this._xPosition = "center", this
        }
        centerVertically(i = "") {
            return this.top(i), this._alignItems = "center", this
        }
        apply() {
            if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
            let i = this._overlayRef.overlayElement.style,
                t = this._overlayRef.hostElement.style,
                e = this._overlayRef.getConfig(),
                {
                    width: s,
                    height: n,
                    maxWidth: r,
                    maxHeight: l
                } = e,
                c = (s === "100%" || s === "100vw") && (!r || r === "100%" || r === "100vw"),
                d = (n === "100%" || n === "100vh") && (!l || l === "100%" || l === "100vh"),
                h = this._xPosition,
                p = this._xOffset,
                S = this._overlayRef.getConfig().direction === "rtl",
                g = "",
                u = "",
                b = "";
            c ? b = "flex-start" : h === "center" ? (b = "center", S ? u = p : g = p) : S ? h === "left" || h === "end" ? (b = "flex-end", g = p) : (h === "right" || h === "start") && (b = "flex-start", u = p) : h === "left" || h === "start" ? (b = "flex-start", g = p) : (h === "right" || h === "end") && (b = "flex-end", u = p), i.position = this._cssPosition, i.marginLeft = c ? "0" : g, i.marginTop = d ? "0" : this._topOffset, i.marginBottom = this._bottomOffset, i.marginRight = c ? "0" : u, t.justifyContent = b, t.alignItems = d ? "flex-start" : this._alignItems
        }
        dispose() {
            if (this._isDisposed || !this._overlayRef) return;
            let i = this._overlayRef.overlayElement.style,
                t = this._overlayRef.hostElement,
                e = t.style;
            t.classList.remove(Ce), e.justifyContent = e.alignItems = i.marginTop = i.marginBottom = i.marginLeft = i.marginRight = i.position = "", this._overlayRef = null, this._isDisposed = !0
        }
    },
    Pe = (() => {
        class o {
            _viewportRuler = a(G);
            _document = a(m);
            _platform = a(D);
            _overlayContainer = a(Bt);
            constructor() {}
            global() {
                return new mt
            }
            flexibleConnectedTo(t) {
                return new gt(t, this._viewportRuler, this._document, this._platform, this._overlayContainer)
            }
            static\ u0275fac = function(e) {
                return new(e || o)
            };
            static\ u0275prov = y({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })(),
    k = (() => {
        class o {
            scrollStrategies = a(Se);
            _overlayContainer = a(Bt);
            _positionBuilder = a(Pe);
            _keyboardDispatcher = a(Oe);
            _injector = a(x);
            _ngZone = a(w);
            _document = a(m);
            _directionality = a(N);
            _location = a(ne);
            _outsideClickDispatcher = a(Ee);
            _animationsModuleType = a(et, {
                optional: !0
            });
            _idGenerator = a(de);
            _renderer = a(T).createRenderer(null, null);
            _appRef;
            _styleLoader = a(kt);
            constructor() {}
            create(t) {
                this._styleLoader.load(De);
                let e = this._createHostElement(),
                    s = this._createPaneElement(e),
                    n = this._createPortalOutlet(s),
                    r = new pt(t);
                return r.direction = r.direction || this._directionality.value, new ut(n, e, s, r, this._ngZone, this._keyboardDispatcher, this._document, this._location, this._outsideClickDispatcher, this._animationsModuleType === "NoopAnimations", this._injector.get(J), this._renderer)
            }
            position() {
                return this._positionBuilder
            }
            _createPaneElement(t) {
                let e = this._document.createElement("div");
                return e.id = this._idGenerator.getId("cdk-overlay-"), e.classList.add("cdk-overlay-pane"), t.appendChild(e), e
            }
            _createHostElement() {
                let t = this._document.createElement("div");
                return this._overlayContainer.getContainerElement().appendChild(t), t
            }
            _createPortalOutlet(t) {
                return this._appRef || (this._appRef = this._injector.get(qt)), new K(t, null, this._appRef, this._injector, this._document)
            }
            static\ u0275fac = function(e) {
                return new(e || o)
            };
            static\ u0275prov = y({
                token: o,
                factory: o.\u0275fac,
                providedIn: "root"
            })
        }
        return o
    })();
var je = new L("cdk-connected-overlay-scroll-strategy", {
    providedIn: "root",
    factory: () => {
        let o = a(k);
        return () => o.scrollStrategies.reposition()
    }
});

function Xe(o) {
    return () => o.scrollStrategies.reposition()
}
var We = {
        provide: je,
        deps: [k],
        useFactory: Xe
    },
    zt = (() => {
        class o {
            static\ u0275fac = function(e) {
                return new(e || o)
            };
            static\ u0275mod = E({
                type: o
            });
            static\ u0275inj = O({
                providers: [k, We],
                imports: [U, Ft, lt, lt]
            })
        }
        return o
    })();
var qe = ["tooltip"],
    Yt = 20;
var Ht = new L("mat-tooltip-scroll-strategy", {
    providedIn: "root",
    factory: () => {
        let o = a(k);
        return () => o.scrollStrategies.reposition({
            scrollThrottle: Yt
        })
    }
});

function Te(o) {
    return () => o.scrollStrategies.reposition({
        scrollThrottle: Yt
    })
}
var Me = {
    provide: Ht,
    deps: [k],
    useFactory: Te
};

function Ae() {
    return {
        showDelay: 0,
        hideDelay: 0,
        touchendHideDelay: 1500
    }
}
var Ie = new L("mat-tooltip-default-options", {
    providedIn: "root",
    factory: Ae
});
var ke = "tooltip-panel",
    xe = ae({
        passive: !0
    }),
    Je = 8,
    ti = 8,
    ei = 24,
    ii = 200,
    si = (() => {
        class o {
            _elementRef = a(C);
            _ngZone = a(w);
            _platform = a(D);
            _ariaDescriber = a(fe);
            _focusMonitor = a(he);
            _dir = a(N);
            _injector = a(x);
            _viewContainerRef = a(M);
            _defaultOptions = a(Ie, {
                optional: !0
            });
            _overlayRef;
            _tooltipInstance;
            _portal;
            _position = "below";
            _positionAtOrigin = !1;
            _disabled = !1;
            _tooltipClass;
            _viewInitialized = !1;
            _pointerExitEventsInitialized = !1;
            _tooltipComponent = Le;
            _viewportMargin = 8;
            _currentPosition;
            _cssClassPrefix = "mat-mdc";
            _ariaDescriptionPending;
            _dirSubscribed = !1;
            get position() {
                return this._position
            }
            set position(t) {
                t !== this._position && (this._position = t, this._overlayRef && (this._updatePosition(this._overlayRef), this._tooltipInstance ? .show(0), this._overlayRef.updatePosition()))
            }
            get positionAtOrigin() {
                return this._positionAtOrigin
            }
            set positionAtOrigin(t) {
                this._positionAtOrigin = At(t), this._detach(), this._overlayRef = null
            }
            get disabled() {
                return this._disabled
            }
            set disabled(t) {
                let e = At(t);
                this._disabled !== e && (this._disabled = e, e ? this.hide(0) : this._setupPointerEnterEventsIfNeeded(), this._syncAriaDescription(this.message))
            }
            get showDelay() {
                return this._showDelay
            }
            set showDelay(t) {
                this._showDelay = rt(t)
            }
            _showDelay;
            get hideDelay() {
                return this._hideDelay
            }
            set hideDelay(t) {
                this._hideDelay = rt(t), this._tooltipInstance && (this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay)
            }
            _hideDelay;
            touchGestures = "auto";
            get message() {
                return this._message
            }
            set message(t) {
                let e = this._message;
                this._message = t != null ? String(t).trim() : "", !this._message && this._isTooltipVisible() ? this.hide(0) : (this._setupPointerEnterEventsIfNeeded(), this._updateTooltipMessage()), this._syncAriaDescription(e)
            }
            _message = "";
            get tooltipClass() {
                return this._tooltipClass
            }
            set tooltipClass(t) {
                this._tooltipClass = t, this._tooltipInstance && this._setTooltipClass(this._tooltipClass)
            }
            _passiveListeners = [];
            _touchstartTimeout = null;
            _destroyed = new _;
            _isDestroyed = !1;
            constructor() {
                let t = this._defaultOptions;
                t && (this._showDelay = t.showDelay, this._hideDelay = t.hideDelay, t.position && (this.position = t.position), t.positionAtOrigin && (this.positionAtOrigin = t.positionAtOrigin), t.touchGestures && (this.touchGestures = t.touchGestures), t.tooltipClass && (this.tooltipClass = t.tooltipClass)), this._viewportMargin = Je
            }
            ngAfterViewInit() {
                this._viewInitialized = !0, this._setupPointerEnterEventsIfNeeded(), this._focusMonitor.monitor(this._elementRef).pipe(v(this._destroyed)).subscribe(t => {
                    t ? t === "keyboard" && this._ngZone.run(() => this.show()) : this._ngZone.run(() => this.hide(0))
                })
            }
            ngOnDestroy() {
                let t = this._elementRef.nativeElement;
                this._touchstartTimeout && clearTimeout(this._touchstartTimeout), this._overlayRef && (this._overlayRef.dispose(), this._tooltipInstance = null), this._passiveListeners.forEach(([e, s]) => {
                    t.removeEventListener(e, s, xe)
                }), this._passiveListeners.length = 0, this._destroyed.next(), this._destroyed.complete(), this._isDestroyed = !0, this._ariaDescriber.removeDescription(t, this.message, "tooltip"), this._focusMonitor.stopMonitoring(t)
            }
            show(t = this.showDelay, e) {
                if (this.disabled || !this.message || this._isTooltipVisible()) {
                    this._tooltipInstance ? ._cancelPendingAnimations();
                    return
                }
                let s = this._createOverlay(e);
                this._detach(), this._portal = this._portal || new H(this._tooltipComponent, this._viewContainerRef);
                let n = this._tooltipInstance = s.attach(this._portal).instance;
                n._triggerElement = this._elementRef.nativeElement, n._mouseLeaveHideDelay = this._hideDelay, n.afterHidden().pipe(v(this._destroyed)).subscribe(() => this._detach()), this._setTooltipClass(this._tooltipClass), this._updateTooltipMessage(), n.show(t)
            }
            hide(t = this.hideDelay) {
                let e = this._tooltipInstance;
                e && (e.isVisible() ? e.hide(t) : (e._cancelPendingAnimations(), this._detach()))
            }
            toggle(t) {
                this._isTooltipVisible() ? this.hide() : this.show(void 0, t)
            }
            _isTooltipVisible() {
                return !!this._tooltipInstance && this._tooltipInstance.isVisible()
            }
            _createOverlay(t) {
                if (this._overlayRef) {
                    let r = this._overlayRef.getConfig().positionStrategy;
                    if ((!this.positionAtOrigin || !t) && r._origin instanceof C) return this._overlayRef;
                    this._detach()
                }
                let e = this._injector.get(A).getAncestorScrollContainers(this._elementRef),
                    s = this._injector.get(k),
                    n = s.position().flexibleConnectedTo(this.positionAtOrigin ? t || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e);
                return n.positionChanges.pipe(v(this._destroyed)).subscribe(r => {
                    this._updateCurrentPositionClass(r.connectionPair), this._tooltipInstance && r.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible() && this._ngZone.run(() => this.hide(0))
                }), this._overlayRef = s.create({
                    direction: this._dir,
                    positionStrategy: n,
                    panelClass: `${this._cssClassPrefix}-${ke}`,
                    scrollStrategy: this._injector.get(Ht)()
                }), this._updatePosition(this._overlayRef), this._overlayRef.detachments().pipe(v(this._destroyed)).subscribe(() => this._detach()), this._overlayRef.outsidePointerEvents().pipe(v(this._destroyed)).subscribe(() => this._tooltipInstance ? ._handleBodyInteraction()), this._overlayRef.keydownEvents().pipe(v(this._destroyed)).subscribe(r => {
                    this._isTooltipVisible() && r.keyCode === 27 && !Tt(r) && (r.preventDefault(), r.stopPropagation(), this._ngZone.run(() => this.hide(0)))
                }), this._defaultOptions ? .disableTooltipInteractivity && this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`), this._dirSubscribed || (this._dirSubscribed = !0, this._dir.change.pipe(v(this._destroyed)).subscribe(() => {
                    this._overlayRef && this._updatePosition(this._overlayRef)
                })), this._overlayRef
            }
            _detach() {
                this._overlayRef && this._overlayRef.hasAttached() && this._overlayRef.detach(), this._tooltipInstance = null
            }
            _updatePosition(t) {
                let e = t.getConfig().positionStrategy,
                    s = this._getOrigin(),
                    n = this._getOverlayPosition();
                e.withPositions([this._addOffset(R(R({}, s.main), n.main)), this._addOffset(R(R({}, s.fallback), n.fallback))])
            }
            _addOffset(t) {
                let e = ti,
                    s = !this._dir || this._dir.value == "ltr";
                return t.originY === "top" ? t.offsetY = -e : t.originY === "bottom" ? t.offsetY = e : t.originX === "start" ? t.offsetX = s ? -e : e : t.originX === "end" && (t.offsetX = s ? e : -e), t
            }
            _getOrigin() {
                let t = !this._dir || this._dir.value == "ltr",
                    e = this.position,
                    s;
                e == "above" || e == "below" ? s = {
                    originX: "center",
                    originY: e == "above" ? "top" : "bottom"
                } : e == "before" || e == "left" && t || e == "right" && !t ? s = {
                    originX: "start",
                    originY: "center"
                } : (e == "after" || e == "right" && t || e == "left" && !t) && (s = {
                    originX: "end",
                    originY: "center"
                });
                let {
                    x: n,
                    y: r
                } = this._invertPosition(s.originX, s.originY);
                return {
                    main: s,
                    fallback: {
                        originX: n,
                        originY: r
                    }
                }
            }
            _getOverlayPosition() {
                let t = !this._dir || this._dir.value == "ltr",
                    e = this.position,
                    s;
                e == "above" ? s = {
                    overlayX: "center",
                    overlayY: "bottom"
                } : e == "below" ? s = {
                    overlayX: "center",
                    overlayY: "top"
                } : e == "before" || e == "left" && t || e == "right" && !t ? s = {
                    overlayX: "end",
                    overlayY: "center"
                } : (e == "after" || e == "right" && t || e == "left" && !t) && (s = {
                    overlayX: "start",
                    overlayY: "center"
                });
                let {
                    x: n,
                    y: r
                } = this._invertPosition(s.overlayX, s.overlayY);
                return {
                    main: s,
                    fallback: {
                        overlayX: n,
                        overlayY: r
                    }
                }
            }
            _updateTooltipMessage() {
                this._tooltipInstance && (this._tooltipInstance.message = this.message, this._tooltipInstance._markForCheck(), F(() => {
                    this._tooltipInstance && this._overlayRef.updatePosition()
                }, {
                    injector: this._injector
                }))
            }
            _setTooltipClass(t) {
                this._tooltipInstance && (this._tooltipInstance.tooltipClass = t, this._tooltipInstance._markForCheck())
            }
            _invertPosition(t, e) {
                return this.position === "above" || this.position === "below" ? e === "top" ? e = "bottom" : e === "bottom" && (e = "top") : t === "end" ? t = "start" : t === "start" && (t = "end"), {
                    x: t,
                    y: e
                }
            }
            _updateCurrentPositionClass(t) {
                let {
                    overlayY: e,
                    originX: s,
                    originY: n
                } = t, r;
                if (e === "center" ? this._dir && this._dir.value === "rtl" ? r = s === "end" ? "left" : "right" : r = s === "start" ? "left" : "right" : r = e === "bottom" && n === "top" ? "above" : "below", r !== this._currentPosition) {
                    let l = this._overlayRef;
                    if (l) {
                        let c = `${this._cssClassPrefix}-${ke}-`;
                        l.removePanelClass(c + this._currentPosition), l.addPanelClass(c + r)
                    }
                    this._currentPosition = r
                }
            }
            _setupPointerEnterEventsIfNeeded() {
                this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length || (this._platformSupportsMouseEvents() ? this._passiveListeners.push(["mouseenter", t => {
                    this._setupPointerExitEventsIfNeeded();
                    let e;
                    t.x !== void 0 && t.y !== void 0 && (e = t), this.show(void 0, e)
                }]) : this.touchGestures !== "off" && (this._disableNativeGesturesIfNecessary(), this._passiveListeners.push(["touchstart", t => {
                    let e = t.targetTouches ? .[0],
                        s = e ? {
                            x: e.clientX,
                            y: e.clientY
                        } : void 0;
                    this._setupPointerExitEventsIfNeeded(), this._touchstartTimeout && clearTimeout(this._touchstartTimeout);
                    let n = 500;
                    this._touchstartTimeout = setTimeout(() => {
                        this._touchstartTimeout = null, this.show(void 0, s)
                    }, this._defaultOptions ? .touchLongPressShowDelay ? ? n)
                }])), this._addListeners(this._passiveListeners))
            }
            _setupPointerExitEventsIfNeeded() {
                if (this._pointerExitEventsInitialized) return;
                this._pointerExitEventsInitialized = !0;
                let t = [];
                if (this._platformSupportsMouseEvents()) t.push(["mouseleave", e => {
                    let s = e.relatedTarget;
                    (!s || !this._overlayRef ? .overlayElement.contains(s)) && this.hide()
                }], ["wheel", e => this._wheelListener(e)]);
                else if (this.touchGestures !== "off") {
                    this._disableNativeGesturesIfNecessary();
                    let e = () => {
                        this._touchstartTimeout && clearTimeout(this._touchstartTimeout), this.hide(this._defaultOptions ? .touchendHideDelay)
                    };
                    t.push(["touchend", e], ["touchcancel", e])
                }
                this._addListeners(t), this._passiveListeners.push(...t)
            }
            _addListeners(t) {
                t.forEach(([e, s]) => {
                    this._elementRef.nativeElement.addEventListener(e, s, xe)
                })
            }
            _platformSupportsMouseEvents() {
                return !this._platform.IOS && !this._platform.ANDROID
            }
            _wheelListener(t) {
                if (this._isTooltipVisible()) {
                    let e = this._injector.get(m).elementFromPoint(t.clientX, t.clientY),
                        s = this._elementRef.nativeElement;
                    e !== s && !s.contains(e) && this.hide()
                }
            }
            _disableNativeGesturesIfNecessary() {
                let t = this.touchGestures;
                if (t !== "off") {
                    let e = this._elementRef.nativeElement,
                        s = e.style;
                    (t === "on" || e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA") && (s.userSelect = s.msUserSelect = s.webkitUserSelect = s.MozUserSelect = "none"), (t === "on" || !e.draggable) && (s.webkitUserDrag = "none"), s.touchAction = "none", s.webkitTapHighlightColor = "transparent"
                }
            }
            _syncAriaDescription(t) {
                this._ariaDescriptionPending || (this._ariaDescriptionPending = !0, this._ariaDescriber.removeDescription(this._elementRef.nativeElement, t, "tooltip"), this._isDestroyed || F({
                    write: () => {
                        this._ariaDescriptionPending = !1, this.message && !this.disabled && this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, "tooltip")
                    }
                }, {
                    injector: this._injector
                }))
            }
            static\ u0275fac = function(e) {
                return new(e || o)
            };
            static\ u0275dir = P({
                type: o,
                selectors: [
                    ["", "matTooltip", ""]
                ],
                hostAttrs: [1, "mat-mdc-tooltip-trigger"],
                hostVars: 2,
                hostBindings: function(e, s) {
                    e & 2 && ot("mat-mdc-tooltip-disabled", s.disabled)
                },
                inputs: {
                    position: [0, "matTooltipPosition", "position"],
                    positionAtOrigin: [0, "matTooltipPositionAtOrigin", "positionAtOrigin"],
                    disabled: [0, "matTooltipDisabled", "disabled"],
                    showDelay: [0, "matTooltipShowDelay", "showDelay"],
                    hideDelay: [0, "matTooltipHideDelay", "hideDelay"],
                    touchGestures: [0, "matTooltipTouchGestures", "touchGestures"],
                    message: [0, "matTooltip", "message"],
                    tooltipClass: [0, "matTooltipClass", "tooltipClass"]
                },
                exportAs: ["matTooltip"]
            })
        }
        return o
    })(),
    Le = (() => {
        class o {
            _changeDetectorRef = a(Dt);
            _elementRef = a(C);
            _isMultiline = !1;
            message;
            tooltipClass;
            _showTimeoutId;
            _hideTimeoutId;
            _triggerElement;
            _mouseLeaveHideDelay;
            _animationsDisabled;
            _tooltip;
            _closeOnInteraction = !1;
            _isVisible = !1;
            _onHide = new _;
            _showAnimation = "mat-mdc-tooltip-show";
            _hideAnimation = "mat-mdc-tooltip-hide";
            constructor() {
                let t = a(et, {
                    optional: !0
                });
                this._animationsDisabled = t === "NoopAnimations"
            }
            show(t) {
                this._hideTimeoutId != null && clearTimeout(this._hideTimeoutId), this._showTimeoutId = setTimeout(() => {
                    this._toggleVisibility(!0), this._showTimeoutId = void 0
                }, t)
            }
            hide(t) {
                this._showTimeoutId != null && clearTimeout(this._showTimeoutId), this._hideTimeoutId = setTimeout(() => {
                    this._toggleVisibility(!1), this._hideTimeoutId = void 0
                }, t)
            }
            afterHidden() {
                return this._onHide
            }
            isVisible() {
                return this._isVisible
            }
            ngOnDestroy() {
                this._cancelPendingAnimations(), this._onHide.complete(), this._triggerElement = null
            }
            _handleBodyInteraction() {
                this._closeOnInteraction && this.hide(0)
            }
            _markForCheck() {
                this._changeDetectorRef.markForCheck()
            }
            _handleMouseLeave({
                relatedTarget: t
            }) {
                (!t || !this._triggerElement.contains(t)) && (this.isVisible() ? this.hide(this._mouseLeaveHideDelay) : this._finalizeAnimation(!1))
            }
            _onShow() {
                this._isMultiline = this._isTooltipMultiline(), this._markForCheck()
            }
            _isTooltipMultiline() {
                let t = this._elementRef.nativeElement.getBoundingClientRect();
                return t.height > ei && t.width >= ii
            }
            _handleAnimationEnd({
                animationName: t
            }) {
                (t === this._showAnimation || t === this._hideAnimation) && this._finalizeAnimation(t === this._showAnimation)
            }
            _cancelPendingAnimations() {
                this._showTimeoutId != null && clearTimeout(this._showTimeoutId), this._hideTimeoutId != null && clearTimeout(this._hideTimeoutId), this._showTimeoutId = this._hideTimeoutId = void 0
            }
            _finalizeAnimation(t) {
                t ? this._closeOnInteraction = !0 : this.isVisible() || this._onHide.next()
            }
            _toggleVisibility(t) {
                let e = this._tooltip.nativeElement,
                    s = this._showAnimation,
                    n = this._hideAnimation;
                if (e.classList.remove(t ? n : s), e.classList.add(t ? s : n), this._isVisible !== t && (this._isVisible = t, this._changeDetectorRef.markForCheck()), t && !this._animationsDisabled && typeof getComputedStyle == "function") {
                    let r = getComputedStyle(e);
                    (r.getPropertyValue("animation-duration") === "0s" || r.getPropertyValue("animation-name") === "none") && (this._animationsDisabled = !0)
                }
                t && this._onShow(), this._animationsDisabled && (e.classList.add("_mat-animation-noopable"), this._finalizeAnimation(t))
            }
            static\ u0275fac = function(e) {
                return new(e || o)
            };
            static\ u0275cmp = X({
                type: o,
                selectors: [
                    ["mat-tooltip-component"]
                ],
                viewQuery: function(e, s) {
                    if (e & 1 && Rt(qe, 7), e & 2) {
                        let n;
                        Ot(n = Et()) && (s._tooltip = n.first)
                    }
                },
                hostAttrs: ["aria-hidden", "true"],
                hostBindings: function(e, s) {
                    e & 1 && St("mouseleave", function(r) {
                        return s._handleMouseLeave(r)
                    })
                },
                decls: 4,
                vars: 4,
                consts: [
                    ["tooltip", ""],
                    [1, "mdc-tooltip", "mat-mdc-tooltip", 3, "animationend", "ngClass"],
                    [1, "mat-mdc-tooltip-surface", "mdc-tooltip__surface"]
                ],
                template: function(e, s) {
                    if (e & 1) {
                        let n = te();
                        nt(0, "div", 1, 0), St("animationend", function(l) {
                            return Zt(n), Kt(s._handleAnimationEnd(l))
                        }), nt(2, "div", 2), ee(3), Ct()()
                    }
                    e & 2 && (ot("mdc-tooltip--multiline", s._isMultiline), Jt("ngClass", s.tooltipClass), wt(3), ie(s.message))
                },
                dependencies: [re],
                styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mdc-plain-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mdc-plain-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mdc-plain-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mdc-plain-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mdc-plain-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mdc-plain-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mdc-plain-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}'],
                encapsulation: 2,
                changeDetection: 0
            })
        }
        return o
    })(),
    oi = (() => {
        class o {
            static\ u0275fac = function(e) {
                return new(e || o)
            };
            static\ u0275mod = E({
                type: o
            });
            static\ u0275inj = O({
                providers: [Me],
                imports: [ce, zt, It, It, z]
            })
        }
        return o
    })();
export {
    _e as a, G as b, z as c, j as d, K as e, Be as f, ze as g, pt as h, k as i, zt as j, si as k, oi as l
};
//# sourceMappingURL=chunk-LF47DMI6.js.map