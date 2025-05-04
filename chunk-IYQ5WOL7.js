import {
    a as oe
} from "./chunk-KZIF2JUR.js";
import {
    k as ae,
    l as se
} from "./chunk-LF47DMI6.js";
import {
    a as gt
} from "./chunk-G6X3EYPO.js";
import {
    a as Ut,
    b as Kt,
    c as Mt,
    d as mt,
    e as dt,
    f as zt,
    g as Qt,
    h as Gt,
    i as ht,
    j as ce
} from "./chunk-DMMIEUFP.js";
import {
    a as ne
} from "./chunk-J7CTOMGD.js";
import {
    b as pt,
    c as Jt,
    d as Xt,
    f as v,
    g as Zt,
    j as ft
} from "./chunk-KEGCD5JT.js";
import {
    a as w,
    b as R,
    c as O,
    e as lt,
    f as Yt,
    g as re
} from "./chunk-U7BFU7SC.js";
import {
    J as Bt,
    K as Nt,
    Wa as te,
    eb as ee,
    fa as rt,
    fb as ie,
    jb as ut,
    la as ct,
    ma as jt
} from "./chunk-GFV577OQ.js";
import {
    $ as h,
    C as u,
    Db as Rt,
    Eb as q,
    Ga as Wt,
    Hb as $t,
    Ib as L,
    M as wt,
    Mb as H,
    Nb as V,
    O as N,
    Ob as P,
    Pb as nt,
    Pc as st,
    Qb as ot,
    Sb as Y,
    Ub as J,
    Vb as y,
    _ as A,
    bc as z,
    ca as b,
    cc as at,
    da as et,
    ec as Lt,
    fc as Pt,
    hb as C,
    ia as c,
    k as _,
    nc as D,
    ob as j,
    oc as I,
    q as It,
    r as B,
    ra as Q,
    s as Ft,
    sa as G,
    sb as U,
    tb as it,
    wb as K,
    xb as E
} from "./chunk-DIJUAHOD.js";
import {
    a as qt,
    b as Dt,
    f as ye,
    h as xe,
    k as S
} from "./chunk-XDKSGOKZ.js";
var le = ye((At, Tt) => {
    (function(i, o) {
        typeof At == "object" && typeof Tt < "u" ? Tt.exports = o() : typeof define == "function" && define.amd ? define(o) : i.Stats = o()
    })(At, function() {
        var i = function() {
            function o(p) {
                return n.appendChild(p.dom), p
            }

            function t(p) {
                for (var d = 0; d < n.children.length; d++) n.children[d].style.display = d === p ? "block" : "none";
                e = p
            }
            var e = 0,
                n = document.createElement("div");
            n.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", n.addEventListener("click", function(p) {
                p.preventDefault(), t(++e % n.children.length)
            }, !1);
            var a = (performance || Date).now(),
                s = a,
                r = 0,
                m = o(new i.Panel("FPS", "#0ff", "#002")),
                g = o(new i.Panel("MS", "#0f0", "#020"));
            if (self.performance && self.performance.memory) var l = o(new i.Panel("MB", "#f08", "#201"));
            return t(0), {
                REVISION: 16,
                dom: n,
                addPanel: o,
                showPanel: t,
                begin: function() {
                    a = (performance || Date).now()
                },
                end: function() {
                    r++;
                    var p = (performance || Date).now();
                    if (g.update(p - a, 200), p > s + 1e3 && (m.update(1e3 * r / (p - s), 100), s = p, r = 0, l)) {
                        var d = performance.memory;
                        l.update(d.usedJSHeapSize / 1048576, d.jsHeapSizeLimit / 1048576)
                    }
                    return p
                },
                update: function() {
                    a = this.end()
                },
                domElement: n,
                setMode: t
            }
        };
        return i.Panel = function(o, t, e) {
            var n = 1 / 0,
                a = 0,
                s = Math.round,
                r = s(window.devicePixelRatio || 1),
                m = 80 * r,
                g = 48 * r,
                l = 3 * r,
                p = 2 * r,
                d = 3 * r,
                x = 15 * r,
                k = 74 * r,
                T = 30 * r,
                $ = document.createElement("canvas");
            $.width = m, $.height = g, $.style.cssText = "width:80px;height:48px";
            var f = $.getContext("2d");
            return f.font = "bold " + 9 * r + "px Helvetica,Arial,sans-serif", f.textBaseline = "top", f.fillStyle = e, f.fillRect(0, 0, m, g), f.fillStyle = t, f.fillText(o, l, p), f.fillRect(d, x, k, T), f.fillStyle = e, f.globalAlpha = .9, f.fillRect(d, x, k, T), {
                dom: $,
                update: function(tt, _e) {
                    n = Math.min(n, tt), a = Math.max(a, tt), f.fillStyle = e, f.globalAlpha = 1, f.fillRect(0, 0, m, x), f.fillStyle = t, f.fillText(s(tt) + " " + o + " (" + s(n) + "-" + s(a) + ")", l, p), f.drawImage($, d + r, x, k - r, T, d, x, k - r, T), f.fillRect(d + k - r, x, r, T), f.fillStyle = e, f.globalAlpha = .9, f.fillRect(d + k - r, x, r, s((1 - tt / _e) * T))
                }
            }
        }, i
    })
});
var vt = xe(le());

function me(i) {
    return new Promise(o => setTimeout(o, i))
}

function be(i, o) {
    if (i & 1) {
        let t = Y();
        H(0, "ion-fab")(1, "ion-fab-button", 1), J("click", function() {
            Q(t);
            let n = y(3);
            return G(n.applySetting("receiveVideo", !1))
        }), P(2, "ion-icon", 2), V()()
    }
    if (i & 2) {
        let t = y(2).$implicit;
        C(), q("matTooltip", t("receiveVideo.on")), Rt("aria-label", t("receiveVideo.on"))
    }
}

function Ce(i, o) {
    if (i & 1) {
        let t = Y();
        H(0, "ion-fab")(1, "ion-fab-button", 3), J("click", function() {
            Q(t);
            let n = y(3);
            return G(n.applySetting("receiveVideo", !0))
        }), P(2, "ion-icon", 4), V()()
    }
    if (i & 2) {
        let t = y(2).$implicit;
        C(), q("matTooltip", t("receiveVideo.off")), Rt("aria-label", t("receiveVideo.off"))
    }
}

function Ee(i, o) {
    i & 1 && E(0, be, 3, 2, "ion-fab")(1, Ce, 3, 2, "ion-fab"), i & 2 && L(o.receiveVideo ? 0 : 1)
}

function we(i, o) {
    if (i & 1 && (nt(0), E(1, Ee, 2, 1), D(2, "async"), ot()), i & 2) {
        let t, e = y();
        C(), L((t = I(2, 1, e.settingsState$)) ? 1 : -1, t)
    }
}
var de = (() => {
    class i extends oe {
        constructor() {
            super(), ut({
                videocamOutline: ie,
                videocamOffOutline: ee
            })
        }
        static {
            this.\u0275fac = function(e) {
                return new(e || i)
            }
        }
        static {
            this.\u0275cmp = U({
                type: i,
                selectors: [
                    ["app-video-controls"]
                ],
                features: [K],
                decls: 1,
                vars: 1,
                consts: [
                    [4, "transloco", "translocoRead"],
                    [1, "transparent", 3, "click", "matTooltip"],
                    ["name", "videocam-outline"],
                    ["color", "danger", 3, "click", "matTooltip"],
                    ["name", "videocam-off-outline"]
                ],
                template: function(e, n) {
                    e & 1 && E(0, we, 3, 3, "ng-container", 0), e & 2 && q("translocoRead", "video.controls")
                },
                dependencies: [se, ae, st, Bt, Nt, rt, ct],
                styles: [`ion-fab[_ngcontent-%COMP%]{position:absolute;right:16px;bottom:0;margin:0 6px}ion-fab[_ngcontent-%COMP%]   ion-fab-button.transparent[_ngcontent-%COMP%]{--background: transparent;--box-shadow: 0 0 0 1px inset white}
/*# sourceMappingURL=video-controls.component-BSP4T2LN.css.map */`]
            })
        }
    }
    return i
})();
var Re = ["modelViewer"],
    pe = (() => {
        class i extends gt {
            static {
                this.isCustomElementDefined = !1
            }
            constructor() {
                super(), this.store = c(w), this.three = c(dt), this.assets = c(Yt), this.modelViewerEl = j("modelViewer"), this.fps = 1, this.animationState$ = this.store.select(t => t.animation), i.isCustomElementDefined || (
                    import ("./model-viewer-FC2HCPCO.js"), i.isCustomElementDefined = !0)
            }
            ngAfterViewInit() {
                return S(this, null, function*() {
                    yield Promise.all([this.three.load(), this.attach3DCharacter()]), customElements.get("model-viewer") || (yield customElements.whenDefined("model-viewer"));
                    let t = customElements.get("model-viewer");
                    t.minimumRenderScale = 1;
                    let e = 0,
                        n = this.modelViewerEl().nativeElement;
                    this.applyStyle(n), n.addEventListener("load", () => {
                        let a = this.getScene();
                        this.animationState$.pipe(B(s => s.tracks), h(s => {
                            let r = "u" + e++,
                                m = [];
                            s && Object.entries(s).forEach(([l, p]) => {
                                let d = p.map((k, T) => T / this.fps),
                                    x = [].concat(...p);
                                m.push(new this.three.QuaternionKeyframeTrack(l, d, x))
                            });
                            let g = new this.three.AnimationClip(r, 0, m);
                            a.animationsByName.set(r, g), a.playAnimation(r), n.paused && n.play()
                        }), A(this.ngUnsubscribe)).subscribe()
                    })
                })
            }
            getScene() {
                let t = this.modelViewerEl().nativeElement,
                    e = Object.getOwnPropertySymbols(t).find(n => String(n) === "Symbol(scene)");
                return t[e]
            }
            applyStyle(t) {
                if (document.dir === "rtl") return;
                let e = document.createElement("style");
                e.innerHTML = `
      a#default-ar-button {
        transform-origin: bottom left;
        right: initial;
        left: 16px;
      }`, t.shadowRoot.appendChild(e)
            }
            attach3DCharacter() {
                return S(this, null, function*() {
                    let t = {
                        src: "3d/character.glb"
                    };
                    re && (t["ios-src"] = "3d/character.usdz");
                    for (let [e, n] of Object.entries(t)) {
                        let a = yield this.assets.getFileUri(n);
                        this.modelViewerEl().nativeElement.setAttribute(e, a)
                    }
                })
            }
            static {
                this.\u0275fac = function(e) {
                    return new(e || i)
                }
            }
            static {
                this.\u0275cmp = U({
                    type: i,
                    selectors: [
                        ["app-animation"]
                    ],
                    viewQuery: function(e, n) {
                        e & 1 && z(n.modelViewerEl, Re, 5), e & 2 && at()
                    },
                    inputs: {
                        fps: "fps"
                    },
                    features: [K],
                    decls: 2,
                    vars: 0,
                    consts: [
                        ["modelViewer", ""],
                        ["alt", "3D Sign Language Avatar", "camera-controls", "", "camera-orbit", "0deg 90deg auto", "camera-target", "0m 2.8m 0m", "field-of-view", "90deg", "interaction-prompt", "none", "loading", "eager", "preload", "", "ar", "", "ar-scale", "fixed", "xr-environment", "", "ar-modes", "scene-viewer webxr quick-look"]
                    ],
                    template: function(e, n) {
                        e & 1 && P(0, "model-viewer", 1, 0)
                    },
                    styles: [`[_nghost-%COMP%]{position:absolute;width:100%;height:100%}model-viewer[_ngcontent-%COMP%]{width:100%;height:100%;--poster-color: transparent;--progress-mask: transparent;--progress-bar-color: var(--ion-color-primary)}
/*# sourceMappingURL=animation.component-HMP27N3Q.css.map */`]
                })
            }
        }
        return i
    })();
var he = ["mixamorigHead.quaternion", "mixamorigNeck.quaternion", "mixamorigSpine.quaternion", "mixamorigSpine1.quaternion", "mixamorigSpine2.quaternion", "mixamorigHips.quaternion", "mixamorigLeftUpLeg.quaternion", "mixamorigLeftLeg.quaternion", "mixamorigLeftToeBase.quaternion", "mixamorigLeftFoot.quaternion", "mixamorigLeftArm.quaternion", "mixamorigLeftShoulder.quaternion", "mixamorigLeftForeArm.quaternion", "mixamorigRightUpLeg.quaternion", "mixamorigRightLeg.quaternion", "mixamorigRightToeBase.quaternion", "mixamorigRightFoot.quaternion", "mixamorigRightArm.quaternion", "mixamorigRightShoulder.quaternion", "mixamorigRightForeArm.quaternion", "mixamorigLeftHand.quaternion", "mixamorigLeftHandThumb1.quaternion", "mixamorigLeftHandThumb2.quaternion", "mixamorigLeftHandThumb3.quaternion", "mixamorigLeftHandIndex1.quaternion", "mixamorigLeftHandIndex2.quaternion", "mixamorigLeftHandIndex3.quaternion", "mixamorigLeftHandMiddle1.quaternion", "mixamorigLeftHandMiddle2.quaternion", "mixamorigLeftHandMiddle3.quaternion", "mixamorigLeftHandRing1.quaternion", "mixamorigLeftHandRing2.quaternion", "mixamorigLeftHandRing3.quaternion", "mixamorigLeftHandPinky1.quaternion", "mixamorigLeftHandPinky2.quaternion", "mixamorigLeftHandPinky3.quaternion", "mixamorigRightHand.quaternion", "mixamorigRightHandThumb1.quaternion", "mixamorigRightHandThumb2.quaternion", "mixamorigRightHandThumb3.quaternion", "mixamorigRightHandIndex1.quaternion", "mixamorigRightHandIndex2.quaternion", "mixamorigRightHandIndex3.quaternion", "mixamorigRightHandMiddle1.quaternion", "mixamorigRightHandMiddle2.quaternion", "mixamorigRightHandMiddle3.quaternion", "mixamorigRightHandRing1.quaternion", "mixamorigRightHandRing2.quaternion", "mixamorigRightHandRing3.quaternion", "mixamorigRightHandPinky1.quaternion", "mixamorigRightHandPinky2.quaternion", "mixamorigRightHandPinky3.quaternion"],
    fe = (() => {
        class i {
            constructor() {
                this.tf = c(mt), this.poseService = c(ft)
            }
            loadModel() {
                return S(this, null, function*() {
                    return yield this.tf.load(), this.tf.loadLayersModel("assets/models/pose-animation/model.json").then(t => this.sequentialModel = t)
                })
            }
            normalizePose(t) {
                let e = this.poseService.normalizeHolistic(t, ["poseLandmarks", "leftHandLandmarks", "rightHandLandmarks"]);
                return this.tf.tensor(e.map(n => [n.x, n.y, n.z]))
            }
            estimate(t) {
                if (!this.sequentialModel) return null;
                let e = this.tf.tidy(() => {
                        let a = t.map(l => this.normalizePose(l).reshape([1, 225])),
                            s = this.tf.stack(a, 1);
                        return this.sequentialModel.predict(s).reshape([a.length, he.length, 4]).transpose([1, 0, 2]).arraySync()
                    }),
                    n = {};
                return he.forEach((a, s) => n[a] = e[s]), n
            }
            static {
                this.\u0275fac = function(e) {
                    return new(e || i)
                }
            }
            static {
                this.\u0275prov = b({
                    token: i,
                    factory: i.\u0275fac,
                    providedIn: "root"
                })
            }
        }
        return i
    })();
var Ht = (() => {
    class i {
        static {
            this.type = "[Animation] Get animation state from pose"
        }
        constructor(t) {
            this.pose = t
        }
    }
    return i
})();
var Pe = {
        tracks: null
    },
    X = class St {
        constructor() {
            this.store = c(w), this.animation = c(fe), this.isAnimatePose = !1, this.pose$ = this.store.select(o => o.pose.pose), this.animatePose$ = this.store.select(o => o.settings.animatePose)
        }
        ngxsOnInit({
            dispatch: o
        }) {
            this.animatePose$.pipe(u(Boolean), N(), h(() => this.animation.loadModel())).subscribe(), this.animatePose$.subscribe(t => this.isAnimatePose = t), this.pose$.pipe(u(Boolean), u(() => this.isAnimatePose), h(t => o(new Ht(t)))).subscribe()
        }
        animatePose(n, a) {
            return S(this, arguments, function*({
                getState: o,
                patchState: t
            }, {
                pose: e
            }) {
                let s = this.animation.estimate([e]);
                t({
                    tracks: s
                })
            })
        }
        static {
            this.\u0275fac = function(t) {
                return new(t || St)
            }
        }
        static {
            this.\u0275prov = b({
                token: St,
                factory: St.\u0275fac
            })
        }
    };
_([R(Ht)], X.prototype, "animatePose", null);
X = _([O({
    name: "animation",
    defaults: Pe
})], X);
var ue = (() => {
    class i {
        static {
            this.\u0275fac = function(e) {
                return new(e || i)
            }
        }
        static {
            this.\u0275mod = it({
                type: i
            })
        }
        static {
            this.\u0275inj = et({
                providers: [lt([X])]
            })
        }
    }
    return i
})();
var Me = ["video"],
    Ae = ["canvas"],
    Te = ["stats"];

function He(i, o) {
    if (i & 1 && (H(0, "p"), Lt(1), V()), i & 2) {
        let t = y().$implicit,
            e = y(2);
        C(), Pt(t("errors." + e.error))
    }
}

function Ve(i, o) {
    i & 1 && (H(0, "p"), Lt(1), D(2, "transloco"), V()), i & 2 && (C(), Pt(I(2, 1, "pose.loading")))
}

function Oe(i, o) {
    if (i & 1 && (nt(0), E(1, He, 2, 1, "p")(2, Ve, 3, 3, "p"), ot()), i & 2) {
        let t = y(),
            e = y();
        C(), L(e.error ? 1 : t.isLoaded ? -1 : 2)
    }
}

function ke(i, o) {
    if (i & 1) {
        let t = Y();
        H(0, "div", 8), J("click", function() {
            Q(t);
            let n = y(3);
            return G(n.replayVideo())
        }), P(1, "ion-icon", 9), V()
    }
}

function qe(i, o) {
    i & 1 && P(0, "app-animation")
}

function De(i, o) {
    i & 1 && P(0, "app-video-controls")
}

function Ie(i, o) {
    if (i & 1 && (E(0, Oe, 3, 1, "ng-container", 3), H(1, "div", 4), P(2, "video", 5, 0)(4, "canvas", 6, 1)(6, "div", null, 2), E(8, ke, 2, 0, "div", 7), V(), E(9, qe, 1, 0, "app-animation"), D(10, "async"), E(11, De, 1, 0, "app-video-controls")), i & 2) {
        let t = y(),
            e = y();
        q("translocoRead", "video"), C(), q("hidden", t.error || !o.isLoaded), C(7), L(e.videoEnded ? 8 : -1), C(), L(I(10, 5, e.animatePose$) ? 9 : -1), C(2), L(e.displayControls ? 11 : -1)
    }
}

function Fe(i, o) {
    if (i & 1 && (E(0, Ie, 12, 7), D(1, "async")), i & 2) {
        let t, e = y();
        L((t = I(1, 1, e.poseState$)) ? 0 : -1, t)
    }
}
var ge = (() => {
    class i extends gt {
        constructor() {
            super(), this.store = c(w), this.settingsState$ = this.store.select(t => t.settings), this.animatePose$ = this.store.select(t => t.settings.animatePose), this.videoState$ = this.store.select(t => t.video), this.poseState$ = this.store.select(t => t.pose), this.signWritingState$ = this.store.select(t => t.signWriting), this.signingProbability$ = this.store.select(t => t.detector.signingProbability), this.poseService = c(ft), this.signWritingService = c(ht), this.elementRef = c(Wt), this.videoEl = j("video"), this.canvasEl = j("canvas"), this.statsEl = j("stats"), this.aspectRatio = "aspect-16-9", this.displayFps = !0, this.displayControls = !0, this.videoEnded = !1, this.fpsStats = new vt.default, this.signingStats = new vt.default, "document" in globalThis && (this.appRootEl = document.querySelector("ion-app") ? ? document.body), ut({
                playCircleOutline: te
            })
        }
        ngAfterViewInit() {
            let t = this.videoEl();
            this.setCamera(), this.setStats(), this.trackPose(), this.canvasCtx = this.canvasEl().nativeElement.getContext("2d"), this.preloadSignWritingFont(), this.drawChanges(), this.preloadPoseEstimationModel(), t.nativeElement.addEventListener("loadeddata", this.appLoop.bind(this)), t.nativeElement.addEventListener("ended", () => this.videoEnded = !0);
            let e = new ResizeObserver(this.scaleCanvas.bind(this));
            e.observe(this.elementRef.nativeElement), e.observe(this.appRootEl)
        }
        appLoop() {
            return S(this, null, function*() {
                let t = this.videoEl().nativeElement,
                    e = new Xt(t),
                    n = null;
                for (; t.readyState !== 0;) t.currentTime !== n && (n = t.currentTime, yield It(this.store.dispatch(e))), yield me(0)
            })
        }
        setCamera() {
            let t = this.videoEl().nativeElement;
            t.muted = !0, t.addEventListener("loadedmetadata", () => t.play()), this.videoState$.pipe(h(({
                camera: e,
                src: n
            }) => {
                this.videoEnded = !1, t.src = n || "", t.srcObject = e
            }), A(this.ngUnsubscribe)).subscribe(), this.videoState$.pipe(B(e => e.videoSettings), u(Boolean), h(({
                width: e,
                height: n
            }) => {
                let a = this.canvasEl();
                a.nativeElement.width = e, a.nativeElement.height = n, requestAnimationFrame(this.scaleCanvas.bind(this))
            }), h(e => this.aspectRatio = "aspect-" + e.aspectRatio), A(this.ngUnsubscribe)).subscribe()
        }
        scaleCanvas() {
            requestAnimationFrame(() => {
                let t = this.elementRef.nativeElement.getBoundingClientRect(),
                    e = this.appRootEl.getBoundingClientRect(),
                    n = Math.min(t.width, e.width),
                    a = this.canvasEl().nativeElement,
                    s = n / a.width;
                a.style.transform = `scale(-${s}, ${s}) translateX(-100%)`, this.elementRef.nativeElement.style.height = a.height * s + "px", a.parentElement.style.width = n + "px"
            })
        }
        trackPose() {
            this.poseState$.pipe(B(t => t.pose), u(Boolean), h(() => {
                this.fpsStats.end(), this.fpsStats.begin()
            }), A(this.ngUnsubscribe)).subscribe()
        }
        preloadSignWritingFont() {
            this.canvasCtx.font = "100px SuttonSignWritingOneD", this.canvasCtx.fillText("Preload SignWriting", 0, 0)
        }
        preloadPoseEstimationModel() {
            this.store.dispatch(Jt)
        }
        drawChanges() {
            let t = this.canvasCtx,
                e = t.canvas;
            Ft([this.poseState$, this.signWritingState$, this.settingsState$]).pipe(wt((n, a) => n[1].timestamp === a[1].timestamp), h(([n, a, s]) => {
                n.pose && (t.clearRect(0, 0, e.width, e.height), s.drawVideo ? t.drawImage(n.pose.image, 0, 0, e.width, e.height) : (t.fillStyle = "white", t.fillRect(0, 0, e.width, e.height)), s.drawPose && this.poseService.draw(n.pose, t), s.drawSignWriting && this.signWritingService.draw(a, t))
            }), A(this.ngUnsubscribe)).subscribe()
        }
        setStats() {
            this.fpsStats.showPanel(0), this.fpsStats.dom.style.position = "absolute", this.statsEl().nativeElement.appendChild(this.fpsStats.dom), this.displayFps || (this.fpsStats.dom.style.display = "none");
            let t = new vt.default.Panel("Signing", "#ff8", "#221");
            this.signingStats.dom.innerHTML = "", this.signingStats.addPanel(t), this.signingStats.showPanel(0), this.signingStats.dom.style.position = "absolute", this.signingStats.dom.style.left = "80px", this.statsEl().nativeElement.appendChild(this.signingStats.dom), this.setDetectorListener(t)
        }
        setDetectorListener(t) {
            this.signingProbability$.pipe(h(e => t.update(e * 100, 100)), A(this.ngUnsubscribe)).subscribe(), this.settingsState$.pipe(B(e => e.detectSign), wt(), h(e => {
                this.signingStats.dom.style.display = e ? "block" : "none"
            }), A(this.ngUnsubscribe)).subscribe()
        }
        replayVideo() {
            this.videoEnded = !1;
            let t = this.videoEl().nativeElement;
            return t.currentTime = 0, t.play()
        }
        static {
            this.\u0275fac = function(e) {
                return new(e || i)
            }
        }
        static {
            this.\u0275cmp = U({
                type: i,
                selectors: [
                    ["app-video"]
                ],
                viewQuery: function(e, n) {
                    e & 1 && (z(n.videoEl, Me, 5), z(n.canvasEl, Ae, 5), z(n.statsEl, Te, 5)), e & 2 && at(3)
                },
                hostVars: 2,
                hostBindings: function(e, n) {
                    e & 2 && $t(n.aspectRatio)
                },
                inputs: {
                    displayFps: "displayFps",
                    displayControls: "displayControls"
                },
                features: [K],
                decls: 2,
                vars: 3,
                consts: [
                    ["video", ""],
                    ["canvas", ""],
                    ["stats", ""],
                    [4, "transloco", "translocoRead"],
                    ["id", "video-container", 3, "hidden"],
                    ["muted", "", "playsinline", "", "crossorigin", "anonymous"],
                    ["height", "100%", "width", "100%"],
                    [1, "video-overlay"],
                    [1, "video-overlay", 3, "click"],
                    ["name", "play-circle-outline"]
                ],
                template: function(e, n) {
                    if (e & 1 && (E(0, Fe, 2, 3), D(1, "async")), e & 2) {
                        let a;
                        L((a = I(1, 1, n.videoState$)) ? 0 : -1, a)
                    }
                },
                dependencies: [ue, pe, de, rt, st, jt, ct],
                styles: [`[_nghost-%COMP%]{background:#202124;display:flex;position:relative;color:#fff;align-items:center;overflow:hidden;min-height:216px}p[_ngcontent-%COMP%]{margin:auto;text-align:center;font-size:36px;line-height:48px}#video-container[_ngcontent-%COMP%]{height:100%;overflow:hidden}#video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{display:none}#video-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{transform-origin:top left}  html[dir=rtl] #video-container canvas{transform-origin:top right!important}app-video-controls[_ngcontent-%COMP%]{position:absolute;bottom:16px;left:0;right:0}app-video-help[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px}.video-overlay[_ngcontent-%COMP%]{background:#0003;height:100%;width:100%;position:absolute;top:0;display:flex;align-items:center;justify-content:center}.video-overlay[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:4em}.video-overlay[_ngcontent-%COMP%]:hover{cursor:pointer;background:#0006}
/*# sourceMappingURL=video.component-QPRP4SUT.css.map */`]
            })
        }
    }
    return i
})();
var _t, Se = {
        camera: null,
        src: null,
        videoSettings: null,
        error: null
    },
    F = class yt {
        static {
            _t = this
        }
        constructor() {
            this.store = c(w), this.navigator = c(ce), this.receiveVideo$ = this.store.select(o => o.settings.receiveVideo)
        }
        ngxsOnInit({
            dispatch: o
        }) {
            this.receiveVideo$.pipe(u(t => !t), h(() => o(Mt))).subscribe()
        }
        stopVideo({
            patchState: o,
            getState: t
        }) {
            let {
                camera: e,
                error: n
            } = t();
            e && e.getTracks().forEach(a => a.stop()), o(Dt(qt({}, Se), {
                error: n || "turnedOff"
            }))
        }
        startCamera(o) {
            return S(this, null, function*() {
                let {
                    patchState: t,
                    dispatch: e
                } = o;
                t({
                    error: "starting"
                }), this.stopVideo(o);
                let n = () => e(new ne("receiveVideo", !1));
                try {
                    let a = yield this.navigator.getCamera({
                        facingMode: "user",
                        aspectRatio: 1,
                        width: {
                            min: 1280
                        },
                        height: {
                            min: 720
                        },
                        frameRate: 120
                    }), s = a.getVideoTracks()[0], r = s.getSettings(), m = {
                        aspectRatio: _t.aspectRatio(r.aspectRatio),
                        frameRate: r.frameRate,
                        width: r.width,
                        height: r.height
                    };
                    s.addEventListener("ended", n), t({
                        camera: a,
                        videoSettings: m,
                        error: null
                    })
                } catch (a) {
                    t({
                        error: a.message
                    }), n()
                }
            })
        }
        setVideo(e, n) {
            return S(this, arguments, function*(o, {
                src: t
            }) {
                let {
                    patchState: a
                } = o;
                a({
                    error: null
                }), this.stopVideo(o);
                let s = document.createElement("video");
                s.addEventListener("loadedmetadata", () => {
                    let r = s.videoWidth,
                        m = s.videoHeight,
                        g = {
                            aspectRatio: _t.aspectRatio(r / m),
                            frameRate: null,
                            width: r,
                            height: m
                        };
                    a({
                        src: t,
                        videoSettings: g,
                        error: null
                    }), s.remove()
                }), s.src = t
            })
        }
        static aspectRatio(o) {
            return o > 1.9 ? "2-1" : o < 1.5 ? o < 1.1 ? "1-1" : "4-3" : "16-9"
        }
        static {
            this.\u0275fac = function(t) {
                return new(t || yt)
            }
        }
        static {
            this.\u0275prov = b({
                token: yt,
                factory: yt.\u0275fac
            })
        }
    };
_([R(Mt)], F.prototype, "stopVideo", null);
_([R(Ut)], F.prototype, "startCamera", null);
_([R(Kt)], F.prototype, "setVideo", null);
F = _t = _([O({
    name: "video",
    defaults: Se
})], F);
var xt = 20,
    ve = (() => {
        class i {
            constructor() {
                this.tf = c(mt), this.holistic = c(pt), this.shoulderWidth = new Float32Array(xt).fill(0), this.shoulderWidthIndex = 0
            }
            loadModel() {
                return S(this, null, function*() {
                    return Promise.all([this.holistic.load(), this.tf.load().then(() => this.tf.loadLayersModel("assets/models/sign-detector/model.json")).then(t => this.sequentialModel = t)])
                })
            }
            distance(t, e) {
                let n = t.x - e.x,
                    a = t.y - e.y;
                return Math.sqrt(n * n + a * a)
            }
            normalizePose(t) {
                let e = t.poseLandmarks || new Array(Object.keys(this.holistic.POSE_LANDMARKS).length).fill(v),
                    n = t.leftHandLandmarks || new Array(21).fill(v),
                    a = t.leftHandLandmarks || new Array(21).fill(v),
                    s = e.concat(n, a).map(d => this.isValidLandmark(d) ? d : v),
                    r = s[this.holistic.POSE_LANDMARKS.LEFT_SHOULDER],
                    m = s[this.holistic.POSE_LANDMARKS.RIGHT_SHOULDER];
                if (r.x > 0 && m.x > 0 && (this.shoulderWidth[this.shoulderWidthIndex % xt] = this.distance(r, m), this.shoulderWidthIndex++), this.shoulderWidthIndex < xt) return null;
                let g = this.shoulderWidth.reduce((d, x) => d + x, 0) / xt,
                    l = new Array(s.length);
                s.forEach((d, x) => {
                    l[x] = {
                        x: d.x / g,
                        y: d.y / g
                    }
                });
                let p = {
                    x: (l[this.holistic.POSE_LANDMARKS.LEFT_SHOULDER].x + l[this.holistic.POSE_LANDMARKS.RIGHT_SHOULDER].x) / 2,
                    y: (l[this.holistic.POSE_LANDMARKS.LEFT_SHOULDER].y + l[this.holistic.POSE_LANDMARKS.RIGHT_SHOULDER].y) / 2
                };
                return [l[this.holistic.POSE_LANDMARKS.NOSE], p, l[this.holistic.POSE_LANDMARKS.RIGHT_SHOULDER], l[this.holistic.POSE_LANDMARKS.RIGHT_ELBOW], l[this.holistic.POSE_LANDMARKS.RIGHT_WRIST], l[this.holistic.POSE_LANDMARKS.LEFT_SHOULDER], l[this.holistic.POSE_LANDMARKS.LEFT_ELBOW], l[this.holistic.POSE_LANDMARKS.LEFT_WRIST], v, v, v, v, v, v, v, l[this.holistic.POSE_LANDMARKS.RIGHT_EYE], l[this.holistic.POSE_LANDMARKS.LEFT_EYE], l[this.holistic.POSE_LANDMARKS.RIGHT_EAR], l[this.holistic.POSE_LANDMARKS.LEFT_EAR], v, v, v, v, v, v]
            }
            isValidLandmark(t) {
                return t.x > .02 && t.x < .98 && t.y > .02 && t.y < .98
            }
            distance2DTensors(t, e, n = 1) {
                let a = new Float32Array(t.length).fill(0);
                for (let s = 0; s < a.length; s += 1) {
                    let r = t[s],
                        m = e[s];
                    r.x > 0 && m.x > 0 && (a[s] = this.distance(r, m) * n)
                }
                return a
            }
            getSequentialConfidence(t) {
                return this.tf.tidy(() => {
                    let e = this.sequentialModel.predict(this.tf.tensor(t).reshape([1, 1, t.length]));
                    return this.tf.softmax(e).dataSync()[1]
                })
            }
            detect(t) {
                let e = performance.now() / 1e3,
                    n = 0,
                    a = this.normalizePose(t);
                if (this.lastPose && a) {
                    let s = 1 / (e - this.lastTimestamp),
                        r = this.distance2DTensors(a, this.lastPose, s);
                    n = this.getSequentialConfidence(r)
                }
                return this.lastTimestamp = e, this.lastPose = a, n
            }
            static {
                this.\u0275fac = function(e) {
                    return new(e || i)
                }
            }
            static {
                this.\u0275prov = b({
                    token: i,
                    factory: i.\u0275fac,
                    providedIn: "root"
                })
            }
        }
        return i
    })();
var Vt = (() => {
    class i {
        static {
            this.type = "[Detector] Detect If Signing"
        }
        constructor(t) {
            this.pose = t
        }
    }
    return i
})();
var We = {
        signingProbability: 0,
        isSigning: !1
    },
    Z = class bt {
        constructor() {
            this.store = c(w), this.detector = c(ve), this.detectSign = !1, this.pose$ = this.store.select(o => o.pose.pose), this.detectSign$ = this.store.select(o => o.settings.detectSign)
        }
        ngxsOnInit({
            dispatch: o
        }) {
            this.detectSign$.pipe(u(Boolean), N(), h(() => this.detector.loadModel())).subscribe(), this.detectSign$.subscribe(t => this.detectSign = t), this.pose$.pipe(u(Boolean), u(() => this.detectSign), h(t => o(new Vt(t)))).subscribe()
        }
        detectSigning({
            getState: o,
            patchState: t
        }, {
            pose: e
        }) {
            let n = this.detector.detect(e);
            t({
                signingProbability: n,
                isSigning: n > .5
            })
        }
        static {
            this.\u0275fac = function(t) {
                return new(t || bt)
            }
        }
        static {
            this.\u0275prov = b({
                token: bt,
                factory: bt.\u0275fac
            })
        }
    };
_([R(Vt)], Z.prototype, "detectSigning", null);
Z = _([O({
    name: "detector",
    defaults: We
})], Z);
var Ct = (() => {
        class i {
            static {
                this.type = "[SignWriting - Hands] Estimate Hand Shape"
            }
            constructor(t, e, n) {
                this.hand = t, this.landmarks = e, this.poseImage = n
            }
        }
        return i
    })(),
    Ot = (() => {
        class i {
            static {
                this.type = "[SignWriting - Face] Estimate Face Shape"
            }
            constructor(t, e) {
                this.landmarks = t, this.poseImage = e
            }
        }
        return i
    })(),
    kt = (() => {
        class i {
            static {
                this.type = "[SignWriting - Body] Calculate Body Factors"
            }
            constructor(t) {
                this.pose = t
            }
        }
        return i
    })();
var $e = {
        timestamp: null,
        body: null,
        face: null,
        leftHand: null,
        rightHand: null
    },
    W = class Et {
        constructor() {
            this.store = c(w), this.bodyService = c(Qt), this.faceService = c(Gt), this.handsService = c(zt), this.three = c(dt), this.holistic = c(pt), this.drawSignWriting = !1, this.pose$ = this.store.select(o => o.pose.pose), this.drawSignWriting$ = this.store.select(o => o.settings.drawSignWriting)
        }
        ngxsOnInit({
            patchState: o,
            dispatch: t
        }) {
            this.drawSignWriting$.pipe(u(Boolean), N(), h(() => Promise.all([this.handsService.loadModel(), this.faceService.loadModel(), ht.loadFonts()]))).subscribe(), this.drawSignWriting$.subscribe(e => this.drawSignWriting = e), this.pose$.pipe(u(Boolean), u(() => this.drawSignWriting), h(e => {
                t([new kt(e), new Ot(e.faceLandmarks, e.image), new Ct("leftHand", e.leftHandLandmarks, e.image), new Ct("rightHand", e.rightHandLandmarks, e.image)]).subscribe(() => o({
                    timestamp: Date.now()
                }))
            })).subscribe(), this.pose$.pipe(u(Boolean), u(() => !this.drawSignWriting), h(() => {
                o({
                    timestamp: Date.now()
                })
            })).subscribe()
        }
        calculateBody(n, a) {
            return S(this, arguments, function*({
                patchState: o,
                dispatch: t
            }, {
                pose: e
            }) {
                if (!e.poseLandmarks) {
                    o({
                        body: null
                    });
                    return
                }
                o({
                    body: {
                        shoulders: this.bodyService.shoulders(e.poseLandmarks),
                        elbows: [e.poseLandmarks[this.holistic.POSE_LANDMARKS.LEFT_ELBOW], e.poseLandmarks[this.holistic.POSE_LANDMARKS.RIGHT_ELBOW]],
                        wrists: [e.poseLandmarks[this.holistic.POSE_LANDMARKS.LEFT_WRIST], e.poseLandmarks[this.holistic.POSE_LANDMARKS.RIGHT_WRIST]]
                    }
                })
            })
        }
        estimateFace(a, s) {
            return S(this, arguments, function*({
                patchState: o,
                dispatch: t
            }, {
                landmarks: e,
                poseImage: n
            }) {
                if (!e) {
                    o({
                        face: null
                    });
                    return
                }
                yield this.three.load();
                let r = e.map(m => new this.three.Vector3(m.x * n.width, m.y * n.height, m.z * n.width));
                o({
                    face: this.faceService.shape(r)
                })
            })
        }
        estimateHand(s, r) {
            return S(this, arguments, function*({
                patchState: o,
                dispatch: t
            }, {
                hand: e,
                landmarks: n,
                poseImage: a
            }) {
                if (!n) {
                    o({
                        [e]: null
                    });
                    return
                }
                let m = e === "leftHand";
                yield this.three.load();
                let g = n.map(d => new this.three.Vector3(d.x * a.width, d.y * a.height, d.z * a.width)),
                    l = this.handsService.normal(g, m),
                    p = this.handsService.plane(g);
                o({
                    [e]: {
                        bbox: this.handsService.bbox(g),
                        normal: l,
                        plane: p,
                        rotation: this.handsService.rotation(g),
                        direction: this.handsService.direction(p, l, m),
                        shape: this.handsService.shape(g, l, m)
                    }
                })
            })
        }
        static {
            this.\u0275fac = function(t) {
                return new(t || Et)
            }
        }
        static {
            this.\u0275prov = b({
                token: Et,
                factory: Et.\u0275fac
            })
        }
    };
_([R(kt)], W.prototype, "calculateBody", null);
_([R(Ot)], W.prototype, "estimateFace", null);
_([R(Ct)], W.prototype, "estimateHand", null);
W = _([O({
    name: "signWriting",
    defaults: $e
})], W);
var Un = (() => {
    class i {
        static {
            this.\u0275fac = function(e) {
                return new(e || i)
            }
        }
        static {
            this.\u0275mod = it({
                type: i
            })
        }
        static {
            this.\u0275inj = et({
                providers: [lt([F, W, Zt, Z])],
                imports: [ge]
            })
        }
    }
    return i
})();
export {
    pe as a, ge as b, Un as c
};
//# sourceMappingURL=chunk-IYQ5WOL7.js.map