import {
    a as pi,
    b as St,
    c as fi,
    d as mi,
    e as Tn,
    f as Cn,
    g as kn,
    h as gi,
    i as yi,
    j as Si,
    k as _i,
    l as We,
    m as vi,
    n as Pn,
    o as bi
} from "./chunk-C2KWHI4F.js";
import "./chunk-YDPNAOYE.js";
import {
    a as wi,
    b as Ei,
    c as Ti,
    i as Kt,
    j as Ri
} from "./chunk-DMMIEUFP.js";
import {
    a as Di
} from "./chunk-J7CTOMGD.js";
import "./chunk-PQFSWOT7.js";
import {
    a as Ue
} from "./chunk-DBD4ISNN.js";
import {
    a as Vt
} from "./chunk-NA7WVPXZ.js";
import {
    a as De,
    e as ki,
    h as Pi,
    i as $t,
    j as Ai
} from "./chunk-KEGCD5JT.js";
import {
    a as ui,
    b as J,
    c as jt,
    d as di,
    e as hi,
    f as Ci,
    h as Fi
} from "./chunk-U7BFU7SC.js";
import {
    a as Oi,
    b as xi
} from "./chunk-USZFSAGP.js";
import "./chunk-GLOBIKT5.js";
import {
    B as Zs,
    I as Js,
    Ka as Mi,
    P as ei,
    Ua as Li,
    Z as ti,
    _ as ni,
    a as Vs,
    b as Ks,
    ba as si,
    c as $s,
    ca as ii,
    f as qs,
    fa as ri,
    g as Ws,
    h as Bt,
    ja as oi,
    jb as Ni,
    k as Us,
    ka as ai,
    l as zt,
    m as Qs,
    ma as li,
    mb as Ii,
    n as Hs,
    na as ci,
    t as Gs,
    u as Ys,
    y as Xs
} from "./chunk-GFV577OQ.js";
import {
    $ as Te,
    $c as js,
    A as _n,
    Ab as Is,
    B as st,
    C as ue,
    Ca as Ot,
    Cb as bn,
    E as je,
    Eb as Fs,
    Ic as Os,
    K as Ve,
    L as ks,
    Mb as fe,
    Nb as _e,
    Oa as vn,
    Ob as mt,
    Ra as Ns,
    S as Ps,
    Xc as xt,
    Yc as xs,
    Z as Ke,
    Zc as Bs,
    _c as zs,
    aa as I,
    ca as Z,
    ec as Ne,
    fa as As,
    fc as wn,
    g as ws,
    gc as En,
    ha as $e,
    hb as ft,
    ia as Q,
    j as pt,
    k as H,
    kb as Ds,
    l as ze,
    la as Ms,
    m as nt,
    n as Es,
    nc as gt,
    oc as yt,
    q as Ts,
    r as Se,
    sb as it,
    u as Cs,
    v as yn,
    x as Sn,
    xa as Ls
} from "./chunk-DIJUAHOD.js";
import {
    a as Qe,
    b as An
} from "./chunk-GN2XDD6F.js";
import {
    x as Rs
} from "./chunk-7XRFTPTI.js";
import {
    a as qe
} from "./chunk-5INLNTLQ.js";
import "./chunk-G53WN73B.js";
import "./chunk-7RKXYYCK.js";
import "./chunk-7JRWGPZB.js";
import "./chunk-TFYTOQTJ.js";
import "./chunk-LNXCJBU2.js";
import "./chunk-QYCU5LFW.js";
import "./chunk-ZGG45NVU.js";
import "./chunk-CBTCPHC5.js";
import "./chunk-5HUCFAOZ.js";
import "./chunk-DROM25MW.js";
import "./chunk-F4PI7WOR.js";
import "./chunk-ILNDS6YC.js";
import "./chunk-7T7YRGPO.js";
import {
    a as oe,
    b as gn,
    d as bs,
    k as N
} from "./chunk-XDKSGOKZ.js";
var Bi = (() => {
    class s {
        static {
            this.\u0275fac = function(n) {
                return new(n || s)
            }
        }
        static {
            this.\u0275cmp = it({
                type: s,
                selectors: [
                    ["app-not-found"]
                ],
                decls: 15,
                vars: 13,
                consts: [
                    [3, "fullscreen"],
                    ["color", "primary", "routerLink", "/translate"]
                ],
                template: function(n, i) {
                    n & 1 && (fe(0, "ion-content", 0)(1, "h1")(2, "b"), Ne(3, "404"), _e(), Ne(4), gt(5, "transloco"), _e(), fe(6, "p"), Ne(7), gt(8, "transloco"), _e(), fe(9, "p"), Ne(10), gt(11, "transloco"), _e(), fe(12, "ion-button", 1), Ne(13), gt(14, "transloco"), _e()()), n & 2 && (Fs("fullscreen", !0), ft(4), En(": ", yt(5, 5, "404.title"), ""), ft(3), wn(yt(8, 7, "404.doesNotExist")), ft(3), wn(yt(11, 9, "404.errorLogged")), ft(3), En(" ", yt(14, 11, "404.goHome"), " "))
                },
                dependencies: [Js, Zs, li, Qs],
                styles: [`ion-content[_ngcontent-%COMP%]{text-align:center}
/*# sourceMappingURL=not-found.component-UIADTAMO.css.map */`]
            })
        }
    }
    return s
})();
var zi = (() => {
    class s {
        constructor() {
            this.http = Q(xt), this.assets = Q(Ci)
        }
        initWorker() {
            return N(this, null, function*() {
                if (this.worker) return;
                let {
                    createBergamotWorker: t
                } = yield
                import ("./esm-O723TQF3.js");
                this.worker = t("/browsermt/worker.js"), yield this.worker.importBergamotWorker("bergamot-translator-worker.js", "bergamot-translator-worker.wasm")
            })
        }
        createModelRegistry(t) {
            return N(this, null, function*() {
                let n = {},
                    i = yield this.assets.getDirectory(t);
                for (let [r, a] of i.entries()) {
                    let o = r.split(".").shift();
                    n[o] = {
                        name: a,
                        size: 0,
                        estimatedCompressedSize: 0,
                        modelType: "prod"
                    }
                }
                return n
            })
        }
        loadOfflineModel(t, n, i) {
            return N(this, null, function*() {
                let r = `${n}${i}`;
                if (this.loadedModel === r) return;
                let a = `models/browsermt/${t}/${n}-${i}/`;
                if (!this.assets.stat(a).exists) throw new Error(`Model '${a}' not found locally`);
                let l = {
                    [r]: yield this.createModelRegistry(a)
                };
                yield this.initWorker(), yield this.worker.loadModel(n, i, l), this.loadedModel = r
            })
        }
        translateOffline(t, n, i, r) {
            return N(this, null, function*() {
                yield this.loadOfflineModel(t, i, r);
                let a = yield this.worker.translate(i, r, [n], [{
                    isHtml: !1
                }]);
                return typeof a[0] == "string" && (a = a.map(o => ({
                    text: o
                }))), a = a.map(({
                    text: o
                }) => ({
                    text: this.postProcessSignWriting(o)
                })), a[0]
            })
        }
        translateOnline(t, n, i, r, a) {
            let o = "https://sign.mt/api/spoken-text-to-signwriting",
                l = {
                    data: {
                        texts: i.map(c => c.trim()),
                        spoken_language: r,
                        signed_language: a
                    }
                };
            return this.http.post(o, l).pipe(Se(c => ({
                text: c.result.output.join(" ")
            })))
        }
        translateSpokenToSignWriting(t, n, i, r) {
            let a = "spoken-to-signed",
                o = () => {
                    let d = `${this.preProcessSpokenText(t)}`;
                    return ze(this.translateOffline(a, d, i, r))
                },
                l = () => {
                    let d = `$${i} $${r} ${this.preProcessSpokenText(t)}`;
                    return ze(this.translateOffline(a, d, "spoken", "signed"))
                },
                c = () => this.translateOnline(a, t, n, i, r);
            return o().pipe(je(l), ue(() => !("navigator" in globalThis) || navigator.onLine), je(c))
        }
        preProcessSpokenText(t) {
            return t.replace(`
`, " ")
        }
        postProcessSignWriting(t) {
            return t = t.replace(/\$[^\s]+/g, ""), t = t.replace(/ /g, ""), t = t.replace(/(\d)M/g, "$1 M"), t
        }
        static {
            this.\u0275fac = function(n) {
                return new(n || s)
            }
        }
        static {
            this.\u0275prov = Z({
                token: s,
                factory: s.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return s
})();

function qt() {
    return "window" in globalThis ? new URLSearchParams(window.location.search) : new URLSearchParams
}
var ji = {
        spokenToSigned: !0,
        inputMode: "text",
        spokenLanguage: "en",
        signedLanguage: "ase",
        detectedLanguage: null,
        spokenLanguageText: "",
        normalizedSpokenLanguageText: null,
        spokenLanguageSentences: [],
        signWriting: [],
        signedLanguagePose: null,
        signedLanguageVideo: null
    },
    G = class Wt {
        constructor() {
            this.store = Q(ui), this.service = Q(Vt), this.swService = Q(zi), this.poseService = Q(Ai), this.languageDetectionService = Q(Ue), this.poseViewerSetting$ = this.store.select(e => e.settings.poseViewer), this.pose$ = this.store.select(e => e.pose.pose)
        }
        ngxsOnInit(e) {
            this.initFromUrl(e), e.dispatch(We), this.poseViewerSetting$.pipe(Te(() => e.dispatch(new Cn(null)))).subscribe()
        }
        initFromUrl({
            dispatch: e,
            patchState: t
        }) {
            let n = qt(),
                i = n.get("sil");
            i && t({
                signedLanguage: i
            });
            let r = n.get("spl");
            r && t({
                spokenLanguage: r
            });
            let a = n.get("text");
            a && e(new Tn(a))
        }
        flipTranslationMode(i) {
            return N(this, arguments, function*({
                getState: e,
                patchState: t,
                dispatch: n
            }) {
                let {
                    spokenToSigned: r,
                    spokenLanguage: a,
                    signedLanguage: o,
                    detectedLanguage: l,
                    signedLanguageVideo: c
                } = e();
                t({
                    spokenToSigned: !r,
                    spokenLanguage: a ? ? l,
                    signedLanguage: o ? ? l,
                    detectedLanguage: null,
                    signedLanguageVideo: null
                }), n(r ? c ? [new St("upload"), new Ei(c)] : new St("webcam") : new St("text"))
            })
        }
        setInputMode(r, a) {
            return N(this, arguments, function*({
                patchState: e,
                getState: t,
                dispatch: n
            }, {
                mode: i
            }) {
                let {
                    inputMode: o
                } = t();
                o !== i && (e({
                    inputMode: i
                }), n([Ti, We]), i === "webcam" && n(wi))
            })
        }
        detectLanguage(e, t) {
            return N(this, null, function*() {
                if (e.length === 0) {
                    t({
                        detectedLanguage: null
                    });
                    return
                }
                yield this.languageDetectionService.init();
                let n = yield this.languageDetectionService.detectSpokenLanguage(e);
                t({
                    detectedLanguage: n
                })
            })
        }
        setSpokenLanguage(r, a) {
            return N(this, arguments, function*({
                patchState: e,
                getState: t,
                dispatch: n
            }, {
                language: i
            }) {
                if (e({
                        spokenLanguage: i
                    }), !i) {
                    let {
                        spokenLanguageText: o
                    } = t();
                    yield this.detectLanguage(o, e)
                }
                n([We, Pn])
            })
        }
        setSignedLanguage(i, r) {
            return N(this, arguments, function*({
                patchState: e,
                dispatch: t
            }, {
                language: n
            }) {
                e({
                    signedLanguage: n
                }), t(We)
            })
        }
        setSpokenLanguageText(r, a) {
            return N(this, arguments, function*({
                patchState: e,
                getState: t,
                dispatch: n
            }, {
                text: i
            }) {
                let {
                    spokenLanguage: o,
                    spokenToSigned: l
                } = t(), c = i.trim();
                if (e({
                        spokenLanguageText: i,
                        normalizedSpokenLanguageText: null
                    }), !l) return;
                let d = this.detectLanguage(c, e);
                o || (yield d);
                let {
                    detectedLanguage: u
                } = t(), f = o || u;
                e({
                    spokenLanguageSentences: this.service.splitSpokenSentences(f, c)
                }), n(We)
            })
        }
        suggestAlternativeText({
            patchState: e,
            getState: t
        }) {
            let {
                spokenToSigned: n,
                spokenLanguageText: i,
                spokenLanguage: r,
                detectedLanguage: a
            } = t(), o = i.trim();
            return !n || !o || r !== a ? pt : "navigator" in globalThis && !navigator.onLine ? pt : this.service.normalizeSpokenLanguageText(r, o).pipe(ue(l => l !== o), Te(l => e({
                normalizedSpokenLanguageText: l
            })))
        }
        describeSignWritingSign({
            patchState: e,
            getState: t
        }, {
            fsw: n
        }) {
            return "navigator" in globalThis && !navigator.onLine ? pt : this.service.describeSignWriting(n).pipe(je(i => nt(i.message)), Te(i => {
                let {
                    signWriting: r
                } = t(), a = r.map(o => {
                    let l = oe({}, o);
                    return l.fsw === n && (l.description = i), l
                });
                e({
                    signWriting: a
                })
            }))
        }
        setSignedLanguageVideo(n, i) {
            return N(this, arguments, function*({
                patchState: e
            }, {
                url: t
            }) {
                e({
                    signedLanguageVideo: t
                })
            })
        }
        setSignWritingText(n, i) {
            return N(this, arguments, function*({
                patchState: e
            }, {
                text: t
            }) {
                yield Kt.loadFonts(), yield Kt.cssLoaded();
                let a = (yield Promise.all(t.map(o => {
                    let l = o.startsWith("M") ? o : "M500x500" + o;
                    return Kt.normalizeFSW(l)
                }))).map(o => ({
                    fsw: o
                }));
                e({
                    signWriting: a
                })
            })
        }
        changeTranslation({
            getState: e,
            patchState: t,
            dispatch: n
        }) {
            let {
                spokenToSigned: i,
                spokenLanguage: r,
                signedLanguage: a,
                detectedLanguage: o,
                spokenLanguageText: l,
                spokenLanguageSentences: c
            } = e();
            if (i) {
                t({
                    signedLanguageVideo: null,
                    signWriting: null
                });
                let d = l.trim();
                if (!d) t({
                    signedLanguagePose: null,
                    signWriting: []
                });
                else {
                    let u = r || o,
                        f = this.service.translateSpokenToSigned(d, u, a);
                    return t({
                        signedLanguagePose: f
                    }), this.swService.translateSpokenToSignWriting(d, c, u, a).pipe(Te(({
                        text: m
                    }) => n(new kn(m.split(" ")))))
                }
            }
            return pt
        }
        uploadPoseFile({
            getState: e,
            patchState: t
        }, {
            url: n
        }) {
            let {
                spokenToSigned: i
            } = e();
            i && t({
                signedLanguagePose: n,
                signedLanguageVideo: ji.signedLanguageVideo
            })
        }
        copySignedLanguageVideo(t) {
            return N(this, arguments, function*({
                getState: e
            }) {
                let {
                    signedLanguageVideo: n
                } = e(), r = yield(yield fetch(n)).blob();
                try {
                    let a = new ClipboardItem({
                        [r.type]: Promise.resolve(r)
                    });
                    yield navigator.clipboard.write([a])
                } catch (a) {
                    console.error(a), alert(`Copying "${r.type}" on this device is not supported`)
                }
            })
        }
        copySpokenLanguageText(t) {
            return N(this, arguments, function*({
                getState: e
            }) {
                let {
                    spokenLanguageText: n
                } = e();
                try {
                    let {
                        Clipboard: i
                    } = yield
                    import ("./esm-4LQBRNZF.js");
                    yield i.write({
                        string: n
                    })
                } catch (i) {
                    console.error(i), alert(i.message)
                }
            })
        }
        shareNative(e) {
            return N(this, null, function*() {
                let {
                    Directory: t,
                    Filesystem: n
                } = yield
                import ("./esm-442P45VC.js"), {
                    blobToBase64: i
                } = yield
                import ("./es-EDU3VJZY.js"), r = yield i(e), a = {
                    directory: t.Cache,
                    path: "video.mp4"
                };
                yield n.writeFile(gn(oe({}, a), {
                    data: r
                }));
                let {
                    uri: o
                } = yield n.getUri(a), {
                    Share: l
                } = yield
                import ("./esm-2JFMJCPC.js");
                yield l.share({
                    url: o
                })
            })
        }
        shareWeb(e) {
            return N(this, null, function*() {
                if (!("share" in navigator)) {
                    alert("Share functionality is not available");
                    return
                }
                let t = [e],
                    n = window.location.href,
                    i = "Signed Language Video for text";
                "canShare" in navigator && navigator.canShare({
                    files: t
                }) ? yield navigator.share({
                    files: t
                }): yield navigator.share({
                    text: i,
                    title: i,
                    url: n
                })
            })
        }
        shareSignedLanguageVideo(t) {
            return N(this, arguments, function*({
                getState: e
            }) {
                let {
                    signedLanguageVideo: n
                } = e(), r = yield(yield fetch(n)).blob(), a = r.type.split("/").pop(), o = new File([r], "video." + a, {
                    type: r.type
                });
                return qe.isNativePlatform() ? this.shareNative(o) : this.shareWeb(o)
            })
        }
        downloadSignedLanguageVideo(t) {
            return N(this, arguments, function*({
                getState: e
            }) {
                let {
                    signedLanguageVideo: n,
                    spokenLanguageText: i
                } = e(), r = encodeURIComponent(i).replaceAll("%20", "-");
                r = r.slice(0, 250);
                let a = document.createElement("a");
                a.href = n, a.download = r, document.body.appendChild(a);
                try {
                    a.click()
                } catch {
                    alert(`Downloading "${r}" on this device is not supported`)
                }
                document.body.removeChild(a)
            })
        }
        storePose({
            getState: e,
            patchState: t
        }, {
            pose: n
        }) {
            let {
                signedLanguagePose: i
            } = e(), r = ["poseLandmarks", "faceLandmarks", "leftHandLandmarks", "rightHandLandmarks"], a = this.poseService.normalizeHolistic(n, r)
        }
        static {
            this.\u0275fac = function(t) {
                return new(t || Wt)
            }
        }
        static {
            this.\u0275prov = Z({
                token: Wt,
                factory: Wt.\u0275fac
            })
        }
    };
H([J(pi)], G.prototype, "flipTranslationMode", null);
H([J(St)], G.prototype, "setInputMode", null);
H([J(fi)], G.prototype, "setSpokenLanguage", null);
H([J(mi)], G.prototype, "setSignedLanguage", null);
H([J(Tn)], G.prototype, "setSpokenLanguageText", null);
H([J(Pn, {
    cancelUncompleted: !0
})], G.prototype, "suggestAlternativeText", null);
H([J(bi, {
    cancelUncompleted: !0
})], G.prototype, "describeSignWritingSign", null);
H([J(Cn)], G.prototype, "setSignedLanguageVideo", null);
H([J(kn)], G.prototype, "setSignWritingText", null);
H([J(We, {
    cancelUncompleted: !0
})], G.prototype, "changeTranslation", null);
H([J(vi)], G.prototype, "uploadPoseFile", null);
H([J(gi)], G.prototype, "copySignedLanguageVideo", null);
H([J(yi)], G.prototype, "copySpokenLanguageText", null);
H([J(Si)], G.prototype, "shareSignedLanguageVideo", null);
H([J(_i)], G.prototype, "downloadSignedLanguageVideo", null);
H([J(ki)], G.prototype, "storePose", null);
G = H([jt({
    name: "translate",
    defaults: ji
})], G);
var Mn = (() => {
    class s extends Ue {
        constructor() {
            let t = Q(Vt);
            super(t), this.ga = Q($t)
        }
        init() {
            return N(this, null, function*() {
                if (this.detector) return;
                let t = yield this.ga.trace("language-detector", "import", () =>
                    import ("./text_bundle-J6CO5ZQV.js"));
                this.detector = yield this.ga.trace("language-detector", "create", () => N(this, null, function*() {
                    let n = "assets/models/mediapipe-language-detector",
                        i = yield t.FilesetResolver.forTextTasks(n);
                    return yield t.LanguageDetector.createFromModelPath(i, `${n}/model.tflite`)
                }))
            })
        }
        detectSpokenLanguage(t) {
            return N(this, null, function*() {
                if (!this.detector) return this.languageCode(null);
                let {
                    languages: n
                } = yield this.ga.trace("language-detector", "detect", () => this.detector.detect(t));
                return n.length === 0 ? this.languageCode(null) : this.languageCode(n[0].languageCode)
            })
        }
        static {
            this.\u0275fac = function(n) {
                return new(n || s)
            }
        }
        static {
            this.\u0275prov = Z({
                token: s,
                factory: s.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return s
})();
var Vi = (() => {
    class s {
        constructor() {
            this.router = Q(zt), this.isMainPage$ = this.router.events.pipe(ue(t => t instanceof Bt), Se(t => t.urlAfterRedirects === "/")), Ni({
                home: Mi,
                person: Li
            })
        }
        static {
            this.\u0275fac = function(n) {
                return new(n || s)
            }
        }
        static {
            this.\u0275cmp = it({
                type: s,
                selectors: [
                    ["app-main"]
                ],
                decls: 10,
                vars: 0,
                consts: [
                    ["slot", "bottom"],
                    ["tab", "translate"],
                    ["aria-hidden", "true", "name", "home"],
                    ["tab", "settings"],
                    ["aria-hidden", "true", "name", "person"]
                ],
                template: function(n, i) {
                    n & 1 && (fe(0, "ion-tabs")(1, "ion-tab-bar", 0)(2, "ion-tab-button", 1), mt(3, "ion-icon", 2), fe(4, "ion-label"), Ne(5, "Home"), _e()(), fe(6, "ion-tab-button", 3), mt(7, "ion-icon", 4), fe(8, "ion-label"), Ne(9, "Settings"), _e()()()())
                },
                dependencies: [si, ti, ni, ri, ei],
                encapsulation: 2
            })
        }
    }
    return s
})();
var Ki = [{
    path: "playground",
    loadComponent: () =>
        import ("./playground.component-4QGHSS43.js").then(s => s.PlaygroundComponent)
}, {
    path: "benchmark",
    loadComponent: () =>
        import ("./benchmark.component-LR5LYMG6.js").then(s => s.BenchmarkComponent),
    providers: [{
        provide: Ue,
        useClass: Mn
    }]
}, {
    path: "about",
    loadChildren: () =>
        import ("./landing.routes-HORPZLN3.js").then(s => s.routes)
}, {
    path: "legal",
    loadChildren: () =>
        import ("./landing.routes-HORPZLN3.js").then(s => s.routes)
}, {
    path: "",
    component: Vi,
    children: [{
        path: "",
        loadComponent: () =>
            import ("./translate.component-2DM77ETD.js").then(s => s.TranslateComponent),
        providers: [hi([G]), {
            provide: Ue,
            useClass: Mn
        }]
    }, {
        path: "translate",
        redirectTo: ""
    }, {
        path: "settings",
        loadChildren: () =>
            import ("./settings.routes-V24HQWIH.js").then(s => s.routes)
    }]
}, {
    path: "**",
    component: Bi
}];
var $i = (() => {
    class s {
        static {
            this.isInitialized = !1
        }
        static getToken() {
            return N(this, null, function*() {
                let {
                    FirebaseAppCheck: t
                } = yield
                import ("./esm-BTPDFMC7.js");
                s.isInitialized || (yield t.initialize({
                    siteKey: De.reCAPTCHAKey,
                    debug: !De.production
                }));
                let {
                    token: n
                } = yield t.getToken({
                    forceRefresh: !1
                });
                return n
            })
        }
    }
    return s
})();
var qi = (() => {
    class s {
        intercept(t, n) {
            return t.url.includes("/api/") || t.url.includes("cloudfunctions.net") || t.url.includes("sign-mt/us-central1") ? ze($i.getToken()).pipe(Ke(r => n.handle(t.clone({
                headers: t.headers.set("X-Firebase-AppCheck", r).set("X-AppCheck-Token", r)
            })))) : n.handle(t)
        }
        static {
            this.\u0275fac = function(n) {
                return new(n || s)
            }
        }
        static {
            this.\u0275prov = Z({
                token: s,
                factory: s.\u0275fac
            })
        }
    }
    return s
})();
var Wi = (() => {
        class s {
            constructor() {
                this.http = Q(xt)
            }
            getTranslation(t) {
                let n = `assets/i18n/${t}.json`;
                return this.http.get(n).pipe(je(i => {
                    throw console.error(`Couldn't load translation file '${n}'`, i), i
                }))
            }
            static {
                this.\u0275fac = function(n) {
                    return new(n || s)
                }
            }
            static {
                this.\u0275prov = Z({
                    token: s,
                    factory: s.\u0275fac,
                    providedIn: "root"
                })
            }
        }
        return s
    })(),
    Ui = {
        provide: ai,
        useValue: ["", "countries", "languages", "signedLanguagesShort"]
    };
var Qi = [ci({
    config: {
        availableLangs: Oi.map(s => s.key),
        defaultLang: "en",
        fallbackLang: "en",
        reRenderOnLangChange: !0,
        prodMode: !0,
        missingHandler: {
            useFallbackTranslation: !0
        }
    },
    loader: Wi
}), Ui];
var ao = {
        receiveVideo: !1,
        detectSign: !1,
        animatePose: !1,
        drawVideo: !0,
        drawPose: !0,
        drawSignWriting: !1,
        poseViewer: "pose",
        appearance: "#ffffff"
    },
    _t = class Ut {
        setSetting({
            patchState: e
        }, {
            setting: t,
            value: n
        }) {
            e({
                [t]: n
            })
        }
        static {
            this.\u0275fac = function(t) {
                return new(t || Ut)
            }
        }
        static {
            this.\u0275prov = Z({
                token: Ut,
                factory: Ut.\u0275fac
            })
        }
    };
H([J(Di)], _t.prototype, "setSetting", null);
_t = H([jt({
    name: "settings",
    defaults: ao
})], _t);
var bt = "Service workers are disabled or not supported by this browser";

function uo(s) {
    return yn(() => Es(new Error(s)))
}
var rt = class {
        serviceWorker;
        worker;
        registration;
        events;
        constructor(e) {
            if (this.serviceWorker = e, !e) this.worker = this.events = this.registration = uo(bt);
            else {
                let n = Sn(e, "controllerchange").pipe(Se(() => e.controller)),
                    i = yn(() => nt(e.controller)),
                    r = Cs(i, n);
                this.worker = r.pipe(ue(d => !!d)), this.registration = this.worker.pipe(Ke(() => e.getRegistration()));
                let c = Sn(e, "message").pipe(Se(d => d.data)).pipe(ue(d => d && d.type)).pipe(Ps());
                c.connect(), this.events = c
            }
        }
        postMessage(e, t) {
            return this.worker.pipe(Ve(1), Te(n => {
                n.postMessage(oe({
                    action: e
                }, t))
            })).toPromise().then(() => {})
        }
        postMessageWithOperation(e, t, n) {
            let i = this.waitForOperationCompleted(n),
                r = this.postMessage(e, t);
            return Promise.all([r, i]).then(([, a]) => a)
        }
        generateNonce() {
            return Math.round(Math.random() * 1e7)
        }
        eventsOfType(e) {
            let t;
            return typeof e == "string" ? t = n => n.type === e : t = n => e.includes(n.type), this.events.pipe(ue(t))
        }
        nextEventOfType(e) {
            return this.eventsOfType(e).pipe(Ve(1))
        }
        waitForOperationCompleted(e) {
            return this.eventsOfType("OPERATION_COMPLETED").pipe(ue(t => t.nonce === e), Ve(1), Se(t => {
                if (t.result !== void 0) return t.result;
                throw new Error(t.error)
            })).toPromise()
        }
        get isEnabled() {
            return !!this.serviceWorker
        }
    },
    ho = (() => {
        class s {
            sw;
            messages;
            notificationClicks;
            subscription;
            get isEnabled() {
                return this.sw.isEnabled
            }
            pushManager = null;
            subscriptionChanges = new ws;
            constructor(t) {
                if (this.sw = t, !t.isEnabled) {
                    this.messages = st, this.notificationClicks = st, this.subscription = st;
                    return
                }
                this.messages = this.sw.eventsOfType("PUSH").pipe(Se(i => i.data)), this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(Se(i => i.data)), this.pushManager = this.sw.registration.pipe(Se(i => i.pushManager));
                let n = this.pushManager.pipe(Ke(i => i.getSubscription()));
                this.subscription = _n(n, this.subscriptionChanges)
            }
            requestSubscription(t) {
                if (!this.sw.isEnabled || this.pushManager === null) return Promise.reject(new Error(bt));
                let n = {
                        userVisibleOnly: !0
                    },
                    i = this.decodeBase64(t.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+")),
                    r = new Uint8Array(new ArrayBuffer(i.length));
                for (let a = 0; a < i.length; a++) r[a] = i.charCodeAt(a);
                return n.applicationServerKey = r, this.pushManager.pipe(Ke(a => a.subscribe(n)), Ve(1)).toPromise().then(a => (this.subscriptionChanges.next(a), a))
            }
            unsubscribe() {
                if (!this.sw.isEnabled) return Promise.reject(new Error(bt));
                let t = n => {
                    if (n === null) throw new Error("Not subscribed to push notifications.");
                    return n.unsubscribe().then(i => {
                        if (!i) throw new Error("Unsubscribe failed!");
                        this.subscriptionChanges.next(null)
                    })
                };
                return this.subscription.pipe(Ve(1), Ke(t)).toPromise()
            }
            decodeBase64(t) {
                return atob(t)
            }
            static\ u0275fac = function(n) {
                return new(n || s)($e(rt))
            };
            static\ u0275prov = Z({
                token: s,
                factory: s.\u0275fac
            })
        }
        return s
    })(),
    po = (() => {
        class s {
            sw;
            versionUpdates;
            unrecoverable;
            get isEnabled() {
                return this.sw.isEnabled
            }
            constructor(t) {
                if (this.sw = t, !t.isEnabled) {
                    this.versionUpdates = st, this.unrecoverable = st;
                    return
                }
                this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]), this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE")
            }
            checkForUpdate() {
                if (!this.sw.isEnabled) return Promise.reject(new Error(bt));
                let t = this.sw.generateNonce();
                return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
                    nonce: t
                }, t)
            }
            activateUpdate() {
                if (!this.sw.isEnabled) return Promise.reject(new Error(bt));
                let t = this.sw.generateNonce();
                return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
                    nonce: t
                }, t)
            }
            static\ u0275fac = function(n) {
                return new(n || s)($e(rt))
            };
            static\ u0275prov = Z({
                token: s,
                factory: s.\u0275fac
            })
        }
        return s
    })();
var Hi = new As("");

function fo(s, e, t) {
    return () => {
        if (!("serviceWorker" in navigator && t.enabled !== !1)) return;
        let n = s.get(Ot),
            i = s.get(bn);
        n.runOutsideAngular(() => {
            let a = navigator.serviceWorker,
                o = () => a.controller ? .postMessage({
                    action: "INITIALIZE"
                });
            a.addEventListener("controllerchange", o), i.onDestroy(() => {
                a.removeEventListener("controllerchange", o)
            })
        });
        let r;
        if (typeof t.registrationStrategy == "function") r = t.registrationStrategy();
        else {
            let [a, ...o] = (t.registrationStrategy || "registerWhenStable:30000").split(":");
            switch (a) {
                case "registerImmediately":
                    r = nt(null);
                    break;
                case "registerWithDelay":
                    r = Gi(+o[0] || 0);
                    break;
                case "registerWhenStable":
                    let l = ze(s.get(bn).whenStable());
                    r = o[0] ? _n(l, Gi(+o[0])) : l;
                    break;
                default:
                    throw new Error(`Unknown ServiceWorker registration strategy: ${t.registrationStrategy}`)
            }
        }
        n.runOutsideAngular(() => r.pipe(Ve(1)).subscribe(() => navigator.serviceWorker.register(e, {
            scope: t.scope
        }).catch(a => console.error("Service worker registration failed with:", a))))
    }
}

function Gi(s) {
    return nt(null).pipe(ks(s))
}

function mo(s) {
    return new rt(s.enabled !== !1 ? navigator.serviceWorker : void 0)
}
var vt = class {
    enabled;
    scope;
    registrationStrategy
};

function Yi(s, e = {}) {
    return Ms([ho, po, {
        provide: Hi,
        useValue: s
    }, {
        provide: vt,
        useValue: e
    }, {
        provide: rt,
        useFactory: mo,
        deps: [vt]
    }, {
        provide: Is,
        useFactory: fo,
        deps: [Ls, Hi, vt],
        multi: !0
    }])
}
var L = function(s) {
        return s[s.State = 0] = "State", s[s.Transition = 1] = "Transition", s[s.Sequence = 2] = "Sequence", s[s.Group = 3] = "Group", s[s.Animate = 4] = "Animate", s[s.Keyframes = 5] = "Keyframes", s[s.Style = 6] = "Style", s[s.Trigger = 7] = "Trigger", s[s.Reference = 8] = "Reference", s[s.AnimateChild = 9] = "AnimateChild", s[s.AnimateRef = 10] = "AnimateRef", s[s.Query = 11] = "Query", s[s.Stagger = 12] = "Stagger", s
    }(L || {}),
    Ce = "*";

function Xi(s, e = null) {
    return {
        type: L.Sequence,
        steps: s,
        options: e
    }
}

function Ln(s) {
    return {
        type: L.Style,
        styles: s,
        offset: null
    }
}
var Re = class {
        _onDoneFns = [];
        _onStartFns = [];
        _onDestroyFns = [];
        _originalOnDoneFns = [];
        _originalOnStartFns = [];
        _started = !1;
        _destroyed = !1;
        _finished = !1;
        _position = 0;
        parentPlayer = null;
        totalTime;
        constructor(e = 0, t = 0) {
            this.totalTime = e + t
        }
        _onFinish() {
            this._finished || (this._finished = !0, this._onDoneFns.forEach(e => e()), this._onDoneFns = [])
        }
        onStart(e) {
            this._originalOnStartFns.push(e), this._onStartFns.push(e)
        }
        onDone(e) {
            this._originalOnDoneFns.push(e), this._onDoneFns.push(e)
        }
        onDestroy(e) {
            this._onDestroyFns.push(e)
        }
        hasStarted() {
            return this._started
        }
        init() {}
        play() {
            this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
        }
        triggerMicrotask() {
            queueMicrotask(() => this._onFinish())
        }
        _onStart() {
            this._onStartFns.forEach(e => e()), this._onStartFns = []
        }
        pause() {}
        restart() {}
        finish() {
            this._onFinish()
        }
        destroy() {
            this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(e => e()), this._onDestroyFns = [])
        }
        reset() {
            this._started = !1, this._finished = !1, this._onStartFns = this._originalOnStartFns, this._onDoneFns = this._originalOnDoneFns
        }
        setPosition(e) {
            this._position = this.totalTime ? e * this.totalTime : 1
        }
        getPosition() {
            return this.totalTime ? this._position / this.totalTime : 1
        }
        triggerCallback(e) {
            let t = e == "start" ? this._onStartFns : this._onDoneFns;
            t.forEach(n => n()), t.length = 0
        }
    },
    wt = class {
        _onDoneFns = [];
        _onStartFns = [];
        _finished = !1;
        _started = !1;
        _destroyed = !1;
        _onDestroyFns = [];
        parentPlayer = null;
        totalTime = 0;
        players;
        constructor(e) {
            this.players = e;
            let t = 0,
                n = 0,
                i = 0,
                r = this.players.length;
            r == 0 ? queueMicrotask(() => this._onFinish()) : this.players.forEach(a => {
                a.onDone(() => {
                    ++t == r && this._onFinish()
                }), a.onDestroy(() => {
                    ++n == r && this._onDestroy()
                }), a.onStart(() => {
                    ++i == r && this._onStart()
                })
            }), this.totalTime = this.players.reduce((a, o) => Math.max(a, o.totalTime), 0)
        }
        _onFinish() {
            this._finished || (this._finished = !0, this._onDoneFns.forEach(e => e()), this._onDoneFns = [])
        }
        init() {
            this.players.forEach(e => e.init())
        }
        onStart(e) {
            this._onStartFns.push(e)
        }
        _onStart() {
            this.hasStarted() || (this._started = !0, this._onStartFns.forEach(e => e()), this._onStartFns = [])
        }
        onDone(e) {
            this._onDoneFns.push(e)
        }
        onDestroy(e) {
            this._onDestroyFns.push(e)
        }
        hasStarted() {
            return this._started
        }
        play() {
            this.parentPlayer || this.init(), this._onStart(), this.players.forEach(e => e.play())
        }
        pause() {
            this.players.forEach(e => e.pause())
        }
        restart() {
            this.players.forEach(e => e.restart())
        }
        finish() {
            this._onFinish(), this.players.forEach(e => e.finish())
        }
        destroy() {
            this._onDestroy()
        }
        _onDestroy() {
            this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(e => e.destroy()), this._onDestroyFns.forEach(e => e()), this._onDestroyFns = [])
        }
        reset() {
            this.players.forEach(e => e.reset()), this._destroyed = !1, this._finished = !1, this._started = !1
        }
        setPosition(e) {
            let t = e * this.totalTime;
            this.players.forEach(n => {
                let i = n.totalTime ? Math.min(1, t / n.totalTime) : 1;
                n.setPosition(i)
            })
        }
        getPosition() {
            let e = this.players.reduce((t, n) => t === null || n.totalTime > t.totalTime ? n : t, null);
            return e != null ? e.getPosition() : 0
        }
        beforeDestroy() {
            this.players.forEach(e => {
                e.beforeDestroy && e.beforeDestroy()
            })
        }
        triggerCallback(e) {
            let t = e == "start" ? this._onStartFns : this._onDoneFns;
            t.forEach(n => n()), t.length = 0
        }
    },
    Qt = "!";

function Zi(s) {
    return new I(3e3, !1)
}

function go() {
    return new I(3100, !1)
}

function yo() {
    return new I(3101, !1)
}

function So(s) {
    return new I(3001, !1)
}

function _o(s) {
    return new I(3003, !1)
}

function vo(s) {
    return new I(3004, !1)
}

function bo(s, e) {
    return new I(3005, !1)
}

function wo() {
    return new I(3006, !1)
}

function Eo() {
    return new I(3007, !1)
}

function To(s, e) {
    return new I(3008, !1)
}

function Co(s) {
    return new I(3002, !1)
}

function ko(s, e, t, n, i) {
    return new I(3010, !1)
}

function Po() {
    return new I(3011, !1)
}

function Ao() {
    return new I(3012, !1)
}

function Mo() {
    return new I(3200, !1)
}

function Lo() {
    return new I(3202, !1)
}

function No() {
    return new I(3013, !1)
}

function Do(s) {
    return new I(3014, !1)
}

function Io(s) {
    return new I(3015, !1)
}

function Fo(s) {
    return new I(3016, !1)
}

function Ro(s, e) {
    return new I(3404, !1)
}

function Oo(s) {
    return new I(3502, !1)
}

function xo(s) {
    return new I(3503, !1)
}

function Bo() {
    return new I(3300, !1)
}

function zo(s) {
    return new I(3504, !1)
}

function jo(s) {
    return new I(3301, !1)
}

function Vo(s, e) {
    return new I(3302, !1)
}

function Ko(s) {
    return new I(3303, !1)
}

function $o(s, e) {
    return new I(3400, !1)
}

function qo(s) {
    return new I(3401, !1)
}

function Wo(s) {
    return new I(3402, !1)
}

function Uo(s, e) {
    return new I(3505, !1)
}

function Oe(s) {
    switch (s.length) {
        case 0:
            return new Re;
        case 1:
            return s[0];
        default:
            return new wt(s)
    }
}

function hr(s, e, t = new Map, n = new Map) {
    let i = [],
        r = [],
        a = -1,
        o = null;
    if (e.forEach(l => {
            let c = l.get("offset"),
                d = c == a,
                u = d && o || new Map;
            l.forEach((f, m) => {
                let h = m,
                    g = f;
                if (m !== "offset") switch (h = s.normalizePropertyName(h, i), g) {
                    case Qt:
                        g = t.get(m);
                        break;
                    case Ce:
                        g = n.get(m);
                        break;
                    default:
                        g = s.normalizeStyleValue(m, h, g, i);
                        break
                }
                u.set(h, g)
            }), d || r.push(u), o = u, a = c
        }), i.length) throw Oo(i);
    return r
}

function Zn(s, e, t, n) {
    switch (e) {
        case "start":
            s.onStart(() => n(t && Nn(t, "start", s)));
            break;
        case "done":
            s.onDone(() => n(t && Nn(t, "done", s)));
            break;
        case "destroy":
            s.onDestroy(() => n(t && Nn(t, "destroy", s)));
            break
    }
}

function Nn(s, e, t) {
    let n = t.totalTime,
        i = !!t.disabled,
        r = Jn(s.element, s.triggerName, s.fromState, s.toState, e || s.phaseName, n ? ? s.totalTime, i),
        a = s._data;
    return a != null && (r._data = a), r
}

function Jn(s, e, t, n, i = "", r = 0, a) {
    return {
        element: s,
        triggerName: e,
        fromState: t,
        toState: n,
        phaseName: i,
        totalTime: r,
        disabled: !!a
    }
}

function he(s, e, t) {
    let n = s.get(e);
    return n || s.set(e, n = t), n
}

function Ji(s) {
    let e = s.indexOf(":"),
        t = s.substring(1, e),
        n = s.slice(e + 1);
    return [t, n]
}
var Qo = typeof document > "u" ? null : document.documentElement;

function es(s) {
    let e = s.parentNode || s.host || null;
    return e === Qo ? null : e
}

function Ho(s) {
    return s.substring(1, 6) == "ebkit"
}
var He = null,
    er = !1;

function Go(s) {
    He || (He = Yo() || {}, er = He.style ? "WebkitAppearance" in He.style : !1);
    let e = !0;
    return He.style && !Ho(s) && (e = s in He.style, !e && er && (e = "Webkit" + s.charAt(0).toUpperCase() + s.slice(1) in He.style)), e
}

function Yo() {
    return typeof document < "u" ? document.body : null
}

function pr(s, e) {
    for (; e;) {
        if (e === s) return !0;
        e = es(e)
    }
    return !1
}

function fr(s, e, t) {
    if (t) return Array.from(s.querySelectorAll(e));
    let n = s.querySelector(e);
    return n ? [n] : []
}
var ts = (() => {
        class s {
            validateStyleProperty(t) {
                return Go(t)
            }
            containsElement(t, n) {
                return pr(t, n)
            }
            getParentElement(t) {
                return es(t)
            }
            query(t, n, i) {
                return fr(t, n, i)
            }
            computeStyle(t, n, i) {
                return i || ""
            }
            animate(t, n, i, r, a, o = [], l) {
                return new Re(i, r)
            }
            static\ u0275fac = function(n) {
                return new(n || s)
            };
            static\ u0275prov = Z({
                token: s,
                factory: s.\u0275fac
            })
        }
        return s
    })(),
    Xe = class {
        static NOOP = new ts
    },
    Ze = class {};
var Xo = 1e3,
    mr = "{{",
    Zo = "}}",
    gr = "ng-enter",
    xn = "ng-leave",
    Ht = "ng-trigger",
    Jt = ".ng-trigger",
    tr = "ng-animating",
    Bn = ".ng-animating";

function Ie(s) {
    if (typeof s == "number") return s;
    let e = s.match(/^(-?[\.\d]+)(m?s)/);
    return !e || e.length < 2 ? 0 : zn(parseFloat(e[1]), e[2])
}

function zn(s, e) {
    switch (e) {
        case "s":
            return s * Xo;
        default:
            return s
    }
}

function en(s, e, t) {
    return s.hasOwnProperty("duration") ? s : Jo(s, e, t)
}

function Jo(s, e, t) {
    let n = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
        i, r = 0,
        a = "";
    if (typeof s == "string") {
        let o = s.match(n);
        if (o === null) return e.push(Zi(s)), {
            duration: 0,
            delay: 0,
            easing: ""
        };
        i = zn(parseFloat(o[1]), o[2]);
        let l = o[3];
        l != null && (r = zn(parseFloat(l), o[4]));
        let c = o[5];
        c && (a = c)
    } else i = s;
    if (!t) {
        let o = !1,
            l = e.length;
        i < 0 && (e.push(go()), o = !0), r < 0 && (e.push(yo()), o = !0), o && e.splice(l, 0, Zi(s))
    }
    return {
        duration: i,
        delay: r,
        easing: a
    }
}

function ea(s) {
    return s.length ? s[0] instanceof Map ? s : s.map(e => new Map(Object.entries(e))) : []
}

function ke(s, e, t) {
    e.forEach((n, i) => {
        let r = ns(i);
        t && !t.has(i) && t.set(i, s.style[r]), s.style[r] = n
    })
}

function Ye(s, e) {
    e.forEach((t, n) => {
        let i = ns(n);
        s.style[i] = ""
    })
}

function Et(s) {
    return Array.isArray(s) ? s.length == 1 ? s[0] : Xi(s) : s
}

function ta(s, e, t) {
    let n = e.params || {},
        i = yr(s);
    i.length && i.forEach(r => {
        n.hasOwnProperty(r) || t.push(So(r))
    })
}
var jn = new RegExp(`${mr}\\s*(.+?)\\s*${Zo}`, "g");

function yr(s) {
    let e = [];
    if (typeof s == "string") {
        let t;
        for (; t = jn.exec(s);) e.push(t[1]);
        jn.lastIndex = 0
    }
    return e
}

function Ct(s, e, t) {
    let n = `${s}`,
        i = n.replace(jn, (r, a) => {
            let o = e[a];
            return o == null && (t.push(_o(a)), o = ""), o.toString()
        });
    return i == n ? s : i
}
var na = /-+([a-z0-9])/g;

function ns(s) {
    return s.replace(na, (...e) => e[1].toUpperCase())
}

function sa(s, e) {
    return s === 0 || e === 0
}

function ia(s, e, t) {
    if (t.size && e.length) {
        let n = e[0],
            i = [];
        if (t.forEach((r, a) => {
                n.has(a) || i.push(a), n.set(a, r)
            }), i.length)
            for (let r = 1; r < e.length; r++) {
                let a = e[r];
                i.forEach(o => a.set(o, ss(s, o)))
            }
    }
    return e
}

function de(s, e, t) {
    switch (e.type) {
        case L.Trigger:
            return s.visitTrigger(e, t);
        case L.State:
            return s.visitState(e, t);
        case L.Transition:
            return s.visitTransition(e, t);
        case L.Sequence:
            return s.visitSequence(e, t);
        case L.Group:
            return s.visitGroup(e, t);
        case L.Animate:
            return s.visitAnimate(e, t);
        case L.Keyframes:
            return s.visitKeyframes(e, t);
        case L.Style:
            return s.visitStyle(e, t);
        case L.Reference:
            return s.visitReference(e, t);
        case L.AnimateChild:
            return s.visitAnimateChild(e, t);
        case L.AnimateRef:
            return s.visitAnimateRef(e, t);
        case L.Query:
            return s.visitQuery(e, t);
        case L.Stagger:
            return s.visitStagger(e, t);
        default:
            throw vo(e.type)
    }
}

function ss(s, e) {
    return window.getComputedStyle(s)[e]
}
var ra = new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]),
    tn = class extends Ze {
        normalizePropertyName(e, t) {
            return ns(e)
        }
        normalizeStyleValue(e, t, n, i) {
            let r = "",
                a = n.toString().trim();
            if (ra.has(t) && n !== 0 && n !== "0")
                if (typeof n == "number") r = "px";
                else {
                    let o = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                    o && o[1].length == 0 && i.push(bo(e, n))
                }
            return a + r
        }
    };
var nn = "*";

function oa(s, e) {
    let t = [];
    return typeof s == "string" ? s.split(/\s*,\s*/).forEach(n => aa(n, t, e)) : t.push(s), t
}

function aa(s, e, t) {
    if (s[0] == ":") {
        let l = la(s, t);
        if (typeof l == "function") {
            e.push(l);
            return
        }
        s = l
    }
    let n = s.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
    if (n == null || n.length < 4) return t.push(Io(s)), e;
    let i = n[1],
        r = n[2],
        a = n[3];
    e.push(nr(i, a));
    let o = i == nn && a == nn;
    r[0] == "<" && !o && e.push(nr(a, i))
}

function la(s, e) {
    switch (s) {
        case ":enter":
            return "void => *";
        case ":leave":
            return "* => void";
        case ":increment":
            return (t, n) => parseFloat(n) > parseFloat(t);
        case ":decrement":
            return (t, n) => parseFloat(n) < parseFloat(t);
        default:
            return e.push(Fo(s)), "* => *"
    }
}
var Gt = new Set(["true", "1"]),
    Yt = new Set(["false", "0"]);

function nr(s, e) {
    let t = Gt.has(s) || Yt.has(s),
        n = Gt.has(e) || Yt.has(e);
    return (i, r) => {
        let a = s == nn || s == i,
            o = e == nn || e == r;
        return !a && t && typeof i == "boolean" && (a = i ? Gt.has(s) : Yt.has(s)), !o && n && typeof r == "boolean" && (o = r ? Gt.has(e) : Yt.has(e)), a && o
    }
}
var Sr = ":self",
    ca = new RegExp(`s*${Sr}s*,?`, "g");

function _r(s, e, t, n) {
    return new Vn(s).build(e, t, n)
}
var sr = "",
    Vn = class {
        _driver;
        constructor(e) {
            this._driver = e
        }
        build(e, t, n) {
            let i = new Kn(t);
            return this._resetContextStyleTimingState(i), de(this, Et(e), i)
        }
        _resetContextStyleTimingState(e) {
            e.currentQuerySelector = sr, e.collectedStyles = new Map, e.collectedStyles.set(sr, new Map), e.currentTime = 0
        }
        visitTrigger(e, t) {
            let n = t.queryCount = 0,
                i = t.depCount = 0,
                r = [],
                a = [];
            return e.name.charAt(0) == "@" && t.errors.push(wo()), e.definitions.forEach(o => {
                if (this._resetContextStyleTimingState(t), o.type == L.State) {
                    let l = o,
                        c = l.name;
                    c.toString().split(/\s*,\s*/).forEach(d => {
                        l.name = d, r.push(this.visitState(l, t))
                    }), l.name = c
                } else if (o.type == L.Transition) {
                    let l = this.visitTransition(o, t);
                    n += l.queryCount, i += l.depCount, a.push(l)
                } else t.errors.push(Eo())
            }), {
                type: L.Trigger,
                name: e.name,
                states: r,
                transitions: a,
                queryCount: n,
                depCount: i,
                options: null
            }
        }
        visitState(e, t) {
            let n = this.visitStyle(e.styles, t),
                i = e.options && e.options.params || null;
            if (n.containsDynamicStyles) {
                let r = new Set,
                    a = i || {};
                n.styles.forEach(o => {
                    o instanceof Map && o.forEach(l => {
                        yr(l).forEach(c => {
                            a.hasOwnProperty(c) || r.add(c)
                        })
                    })
                }), r.size && t.errors.push(To(e.name, [...r.values()]))
            }
            return {
                type: L.State,
                name: e.name,
                style: n,
                options: i ? {
                    params: i
                } : null
            }
        }
        visitTransition(e, t) {
            t.queryCount = 0, t.depCount = 0;
            let n = de(this, Et(e.animation), t),
                i = oa(e.expr, t.errors);
            return {
                type: L.Transition,
                matchers: i,
                animation: n,
                queryCount: t.queryCount,
                depCount: t.depCount,
                options: Ge(e.options)
            }
        }
        visitSequence(e, t) {
            return {
                type: L.Sequence,
                steps: e.steps.map(n => de(this, n, t)),
                options: Ge(e.options)
            }
        }
        visitGroup(e, t) {
            let n = t.currentTime,
                i = 0,
                r = e.steps.map(a => {
                    t.currentTime = n;
                    let o = de(this, a, t);
                    return i = Math.max(i, t.currentTime), o
                });
            return t.currentTime = i, {
                type: L.Group,
                steps: r,
                options: Ge(e.options)
            }
        }
        visitAnimate(e, t) {
            let n = pa(e.timings, t.errors);
            t.currentAnimateTimings = n;
            let i, r = e.styles ? e.styles : Ln({});
            if (r.type == L.Keyframes) i = this.visitKeyframes(r, t);
            else {
                let a = e.styles,
                    o = !1;
                if (!a) {
                    o = !0;
                    let c = {};
                    n.easing && (c.easing = n.easing), a = Ln(c)
                }
                t.currentTime += n.duration + n.delay;
                let l = this.visitStyle(a, t);
                l.isEmptyStep = o, i = l
            }
            return t.currentAnimateTimings = null, {
                type: L.Animate,
                timings: n,
                style: i,
                options: null
            }
        }
        visitStyle(e, t) {
            let n = this._makeStyleAst(e, t);
            return this._validateStyleAst(n, t), n
        }
        _makeStyleAst(e, t) {
            let n = [],
                i = Array.isArray(e.styles) ? e.styles : [e.styles];
            for (let o of i) typeof o == "string" ? o === Ce ? n.push(o) : t.errors.push(Co(o)) : n.push(new Map(Object.entries(o)));
            let r = !1,
                a = null;
            return n.forEach(o => {
                if (o instanceof Map && (o.has("easing") && (a = o.get("easing"), o.delete("easing")), !r)) {
                    for (let l of o.values())
                        if (l.toString().indexOf(mr) >= 0) {
                            r = !0;
                            break
                        }
                }
            }), {
                type: L.Style,
                styles: n,
                easing: a,
                offset: e.offset,
                containsDynamicStyles: r,
                options: null
            }
        }
        _validateStyleAst(e, t) {
            let n = t.currentAnimateTimings,
                i = t.currentTime,
                r = t.currentTime;
            n && r > 0 && (r -= n.duration + n.delay), e.styles.forEach(a => {
                typeof a != "string" && a.forEach((o, l) => {
                    let c = t.collectedStyles.get(t.currentQuerySelector),
                        d = c.get(l),
                        u = !0;
                    d && (r != i && r >= d.startTime && i <= d.endTime && (t.errors.push(ko(l, d.startTime, d.endTime, r, i)), u = !1), r = d.startTime), u && c.set(l, {
                        startTime: r,
                        endTime: i
                    }), t.options && ta(o, t.options, t.errors)
                })
            })
        }
        visitKeyframes(e, t) {
            let n = {
                type: L.Keyframes,
                styles: [],
                options: null
            };
            if (!t.currentAnimateTimings) return t.errors.push(Po()), n;
            let i = 1,
                r = 0,
                a = [],
                o = !1,
                l = !1,
                c = 0,
                d = e.steps.map(C => {
                    let k = this._makeStyleAst(C, t),
                        b = k.offset != null ? k.offset : ha(k.styles),
                        E = 0;
                    return b != null && (r++, E = k.offset = b), l = l || E < 0 || E > 1, o = o || E < c, c = E, a.push(E), k
                });
            l && t.errors.push(Ao()), o && t.errors.push(Mo());
            let u = e.steps.length,
                f = 0;
            r > 0 && r < u ? t.errors.push(Lo()) : r == 0 && (f = i / (u - 1));
            let m = u - 1,
                h = t.currentTime,
                g = t.currentAnimateTimings,
                w = g.duration;
            return d.forEach((C, k) => {
                let b = f > 0 ? k == m ? 1 : f * k : a[k],
                    E = b * w;
                t.currentTime = h + g.delay + E, g.duration = E, this._validateStyleAst(C, t), C.offset = b, n.styles.push(C)
            }), n
        }
        visitReference(e, t) {
            return {
                type: L.Reference,
                animation: de(this, Et(e.animation), t),
                options: Ge(e.options)
            }
        }
        visitAnimateChild(e, t) {
            return t.depCount++, {
                type: L.AnimateChild,
                options: Ge(e.options)
            }
        }
        visitAnimateRef(e, t) {
            return {
                type: L.AnimateRef,
                animation: this.visitReference(e.animation, t),
                options: Ge(e.options)
            }
        }
        visitQuery(e, t) {
            let n = t.currentQuerySelector,
                i = e.options || {};
            t.queryCount++, t.currentQuery = e;
            let [r, a] = ua(e.selector);
            t.currentQuerySelector = n.length ? n + " " + r : r, he(t.collectedStyles, t.currentQuerySelector, new Map);
            let o = de(this, Et(e.animation), t);
            return t.currentQuery = null, t.currentQuerySelector = n, {
                type: L.Query,
                selector: r,
                limit: i.limit || 0,
                optional: !!i.optional,
                includeSelf: a,
                animation: o,
                originalSelector: e.selector,
                options: Ge(e.options)
            }
        }
        visitStagger(e, t) {
            t.currentQuery || t.errors.push(No());
            let n = e.timings === "full" ? {
                duration: 0,
                delay: 0,
                easing: "full"
            } : en(e.timings, t.errors, !0);
            return {
                type: L.Stagger,
                animation: de(this, Et(e.animation), t),
                timings: n,
                options: null
            }
        }
    };

function ua(s) {
    let e = !!s.split(/\s*,\s*/).find(t => t == Sr);
    return e && (s = s.replace(ca, "")), s = s.replace(/@\*/g, Jt).replace(/@\w+/g, t => Jt + "-" + t.slice(1)).replace(/:animating/g, Bn), [s, e]
}

function da(s) {
    return s ? oe({}, s) : null
}
var Kn = class {
    errors;
    queryCount = 0;
    depCount = 0;
    currentTransition = null;
    currentQuery = null;
    currentQuerySelector = null;
    currentAnimateTimings = null;
    currentTime = 0;
    collectedStyles = new Map;
    options = null;
    unsupportedCSSPropertiesFound = new Set;
    constructor(e) {
        this.errors = e
    }
};

function ha(s) {
    if (typeof s == "string") return null;
    let e = null;
    if (Array.isArray(s)) s.forEach(t => {
        if (t instanceof Map && t.has("offset")) {
            let n = t;
            e = parseFloat(n.get("offset")), n.delete("offset")
        }
    });
    else if (s instanceof Map && s.has("offset")) {
        let t = s;
        e = parseFloat(t.get("offset")), t.delete("offset")
    }
    return e
}

function pa(s, e) {
    if (s.hasOwnProperty("duration")) return s;
    if (typeof s == "number") {
        let r = en(s, e).duration;
        return Dn(r, 0, "")
    }
    let t = s;
    if (t.split(/\s+/).some(r => r.charAt(0) == "{" && r.charAt(1) == "{")) {
        let r = Dn(0, 0, "");
        return r.dynamic = !0, r.strValue = t, r
    }
    let i = en(t, e);
    return Dn(i.duration, i.delay, i.easing)
}

function Ge(s) {
    return s ? (s = oe({}, s), s.params && (s.params = da(s.params))) : s = {}, s
}

function Dn(s, e, t) {
    return {
        duration: s,
        delay: e,
        easing: t
    }
}

function is(s, e, t, n, i, r, a = null, o = !1) {
    return {
        type: 1,
        element: s,
        keyframes: e,
        preStyleProps: t,
        postStyleProps: n,
        duration: i,
        delay: r,
        totalTime: i + r,
        easing: a,
        subTimeline: o
    }
}
var kt = class {
        _map = new Map;
        get(e) {
            return this._map.get(e) || []
        }
        append(e, t) {
            let n = this._map.get(e);
            n || this._map.set(e, n = []), n.push(...t)
        }
        has(e) {
            return this._map.has(e)
        }
        clear() {
            this._map.clear()
        }
    },
    fa = 1,
    ma = ":enter",
    ga = new RegExp(ma, "g"),
    ya = ":leave",
    Sa = new RegExp(ya, "g");

function vr(s, e, t, n, i, r = new Map, a = new Map, o, l, c = []) {
    return new $n().buildKeyframes(s, e, t, n, i, r, a, o, l, c)
}
var $n = class {
        buildKeyframes(e, t, n, i, r, a, o, l, c, d = []) {
            c = c || new kt;
            let u = new qn(e, t, c, i, r, d, []);
            u.options = l;
            let f = l.delay ? Ie(l.delay) : 0;
            u.currentTimeline.delayNextStep(f), u.currentTimeline.setStyles([a], null, u.errors, l), de(this, n, u);
            let m = u.timelines.filter(h => h.containsAnimation());
            if (m.length && o.size) {
                let h;
                for (let g = m.length - 1; g >= 0; g--) {
                    let w = m[g];
                    if (w.element === t) {
                        h = w;
                        break
                    }
                }
                h && !h.allowOnlyTimelineStyles() && h.setStyles([o], null, u.errors, l)
            }
            return m.length ? m.map(h => h.buildKeyframes()) : [is(t, [], [], [], 0, f, "", !1)]
        }
        visitTrigger(e, t) {}
        visitState(e, t) {}
        visitTransition(e, t) {}
        visitAnimateChild(e, t) {
            let n = t.subInstructions.get(t.element);
            if (n) {
                let i = t.createSubContext(e.options),
                    r = t.currentTimeline.currentTime,
                    a = this._visitSubInstructions(n, i, i.options);
                r != a && t.transformIntoNewTimeline(a)
            }
            t.previousNode = e
        }
        visitAnimateRef(e, t) {
            let n = t.createSubContext(e.options);
            n.transformIntoNewTimeline(), this._applyAnimationRefDelays([e.options, e.animation.options], t, n), this.visitReference(e.animation, n), t.transformIntoNewTimeline(n.currentTimeline.currentTime), t.previousNode = e
        }
        _applyAnimationRefDelays(e, t, n) {
            for (let i of e) {
                let r = i ? .delay;
                if (r) {
                    let a = typeof r == "number" ? r : Ie(Ct(r, i ? .params ? ? {}, t.errors));
                    n.delayNextStep(a)
                }
            }
        }
        _visitSubInstructions(e, t, n) {
            let r = t.currentTimeline.currentTime,
                a = n.duration != null ? Ie(n.duration) : null,
                o = n.delay != null ? Ie(n.delay) : null;
            return a !== 0 && e.forEach(l => {
                let c = t.appendInstructionToTimeline(l, a, o);
                r = Math.max(r, c.duration + c.delay)
            }), r
        }
        visitReference(e, t) {
            t.updateOptions(e.options, !0), de(this, e.animation, t), t.previousNode = e
        }
        visitSequence(e, t) {
            let n = t.subContextCount,
                i = t,
                r = e.options;
            if (r && (r.params || r.delay) && (i = t.createSubContext(r), i.transformIntoNewTimeline(), r.delay != null)) {
                i.previousNode.type == L.Style && (i.currentTimeline.snapshotCurrentStyles(), i.previousNode = sn);
                let a = Ie(r.delay);
                i.delayNextStep(a)
            }
            e.steps.length && (e.steps.forEach(a => de(this, a, i)), i.currentTimeline.applyStylesToKeyframe(), i.subContextCount > n && i.transformIntoNewTimeline()), t.previousNode = e
        }
        visitGroup(e, t) {
            let n = [],
                i = t.currentTimeline.currentTime,
                r = e.options && e.options.delay ? Ie(e.options.delay) : 0;
            e.steps.forEach(a => {
                let o = t.createSubContext(e.options);
                r && o.delayNextStep(r), de(this, a, o), i = Math.max(i, o.currentTimeline.currentTime), n.push(o.currentTimeline)
            }), n.forEach(a => t.currentTimeline.mergeTimelineCollectedStyles(a)), t.transformIntoNewTimeline(i), t.previousNode = e
        }
        _visitTiming(e, t) {
            if (e.dynamic) {
                let n = e.strValue,
                    i = t.params ? Ct(n, t.params, t.errors) : n;
                return en(i, t.errors)
            } else return {
                duration: e.duration,
                delay: e.delay,
                easing: e.easing
            }
        }
        visitAnimate(e, t) {
            let n = t.currentAnimateTimings = this._visitTiming(e.timings, t),
                i = t.currentTimeline;
            n.delay && (t.incrementTime(n.delay), i.snapshotCurrentStyles());
            let r = e.style;
            r.type == L.Keyframes ? this.visitKeyframes(r, t) : (t.incrementTime(n.duration), this.visitStyle(r, t), i.applyStylesToKeyframe()), t.currentAnimateTimings = null, t.previousNode = e
        }
        visitStyle(e, t) {
            let n = t.currentTimeline,
                i = t.currentAnimateTimings;
            !i && n.hasCurrentStyleProperties() && n.forwardFrame();
            let r = i && i.easing || e.easing;
            e.isEmptyStep ? n.applyEmptyStep(r) : n.setStyles(e.styles, r, t.errors, t.options), t.previousNode = e
        }
        visitKeyframes(e, t) {
            let n = t.currentAnimateTimings,
                i = t.currentTimeline.duration,
                r = n.duration,
                o = t.createSubContext().currentTimeline;
            o.easing = n.easing, e.styles.forEach(l => {
                let c = l.offset || 0;
                o.forwardTime(c * r), o.setStyles(l.styles, l.easing, t.errors, t.options), o.applyStylesToKeyframe()
            }), t.currentTimeline.mergeTimelineCollectedStyles(o), t.transformIntoNewTimeline(i + r), t.previousNode = e
        }
        visitQuery(e, t) {
            let n = t.currentTimeline.currentTime,
                i = e.options || {},
                r = i.delay ? Ie(i.delay) : 0;
            r && (t.previousNode.type === L.Style || n == 0 && t.currentTimeline.hasCurrentStyleProperties()) && (t.currentTimeline.snapshotCurrentStyles(), t.previousNode = sn);
            let a = n,
                o = t.invokeQuery(e.selector, e.originalSelector, e.limit, e.includeSelf, !!i.optional, t.errors);
            t.currentQueryTotal = o.length;
            let l = null;
            o.forEach((c, d) => {
                t.currentQueryIndex = d;
                let u = t.createSubContext(e.options, c);
                r && u.delayNextStep(r), c === t.element && (l = u.currentTimeline), de(this, e.animation, u), u.currentTimeline.applyStylesToKeyframe();
                let f = u.currentTimeline.currentTime;
                a = Math.max(a, f)
            }), t.currentQueryIndex = 0, t.currentQueryTotal = 0, t.transformIntoNewTimeline(a), l && (t.currentTimeline.mergeTimelineCollectedStyles(l), t.currentTimeline.snapshotCurrentStyles()), t.previousNode = e
        }
        visitStagger(e, t) {
            let n = t.parentContext,
                i = t.currentTimeline,
                r = e.timings,
                a = Math.abs(r.duration),
                o = a * (t.currentQueryTotal - 1),
                l = a * t.currentQueryIndex;
            switch (r.duration < 0 ? "reverse" : r.easing) {
                case "reverse":
                    l = o - l;
                    break;
                case "full":
                    l = n.currentStaggerTime;
                    break
            }
            let d = t.currentTimeline;
            l && d.delayNextStep(l);
            let u = d.currentTime;
            de(this, e.animation, t), t.previousNode = e, n.currentStaggerTime = i.currentTime - u + (i.startTime - n.currentTimeline.startTime)
        }
    },
    sn = {},
    qn = class s {
        _driver;
        element;
        subInstructions;
        _enterClassName;
        _leaveClassName;
        errors;
        timelines;
        parentContext = null;
        currentTimeline;
        currentAnimateTimings = null;
        previousNode = sn;
        subContextCount = 0;
        options = {};
        currentQueryIndex = 0;
        currentQueryTotal = 0;
        currentStaggerTime = 0;
        constructor(e, t, n, i, r, a, o, l) {
            this._driver = e, this.element = t, this.subInstructions = n, this._enterClassName = i, this._leaveClassName = r, this.errors = a, this.timelines = o, this.currentTimeline = l || new rn(this._driver, t, 0), o.push(this.currentTimeline)
        }
        get params() {
            return this.options.params
        }
        updateOptions(e, t) {
            if (!e) return;
            let n = e,
                i = this.options;
            n.duration != null && (i.duration = Ie(n.duration)), n.delay != null && (i.delay = Ie(n.delay));
            let r = n.params;
            if (r) {
                let a = i.params;
                a || (a = this.options.params = {}), Object.keys(r).forEach(o => {
                    (!t || !a.hasOwnProperty(o)) && (a[o] = Ct(r[o], a, this.errors))
                })
            }
        }
        _copyOptions() {
            let e = {};
            if (this.options) {
                let t = this.options.params;
                if (t) {
                    let n = e.params = {};
                    Object.keys(t).forEach(i => {
                        n[i] = t[i]
                    })
                }
            }
            return e
        }
        createSubContext(e = null, t, n) {
            let i = t || this.element,
                r = new s(this._driver, i, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(i, n || 0));
            return r.previousNode = this.previousNode, r.currentAnimateTimings = this.currentAnimateTimings, r.options = this._copyOptions(), r.updateOptions(e), r.currentQueryIndex = this.currentQueryIndex, r.currentQueryTotal = this.currentQueryTotal, r.parentContext = this, this.subContextCount++, r
        }
        transformIntoNewTimeline(e) {
            return this.previousNode = sn, this.currentTimeline = this.currentTimeline.fork(this.element, e), this.timelines.push(this.currentTimeline), this.currentTimeline
        }
        appendInstructionToTimeline(e, t, n) {
            let i = {
                    duration: t ? ? e.duration,
                    delay: this.currentTimeline.currentTime + (n ? ? 0) + e.delay,
                    easing: ""
                },
                r = new Wn(this._driver, e.element, e.keyframes, e.preStyleProps, e.postStyleProps, i, e.stretchStartingKeyframe);
            return this.timelines.push(r), i
        }
        incrementTime(e) {
            this.currentTimeline.forwardTime(this.currentTimeline.duration + e)
        }
        delayNextStep(e) {
            e > 0 && this.currentTimeline.delayNextStep(e)
        }
        invokeQuery(e, t, n, i, r, a) {
            let o = [];
            if (i && o.push(this.element), e.length > 0) {
                e = e.replace(ga, "." + this._enterClassName), e = e.replace(Sa, "." + this._leaveClassName);
                let l = n != 1,
                    c = this._driver.query(this.element, e, l);
                n !== 0 && (c = n < 0 ? c.slice(c.length + n, c.length) : c.slice(0, n)), o.push(...c)
            }
            return !r && o.length == 0 && a.push(Do(t)), o
        }
    },
    rn = class s {
        _driver;
        element;
        startTime;
        _elementTimelineStylesLookup;
        duration = 0;
        easing = null;
        _previousKeyframe = new Map;
        _currentKeyframe = new Map;
        _keyframes = new Map;
        _styleSummary = new Map;
        _localTimelineStyles = new Map;
        _globalTimelineStyles;
        _pendingStyles = new Map;
        _backFill = new Map;
        _currentEmptyStepKeyframe = null;
        constructor(e, t, n, i) {
            this._driver = e, this.element = t, this.startTime = n, this._elementTimelineStylesLookup = i, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(t), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(t, this._localTimelineStyles)), this._loadKeyframe()
        }
        containsAnimation() {
            switch (this._keyframes.size) {
                case 0:
                    return !1;
                case 1:
                    return this.hasCurrentStyleProperties();
                default:
                    return !0
            }
        }
        hasCurrentStyleProperties() {
            return this._currentKeyframe.size > 0
        }
        get currentTime() {
            return this.startTime + this.duration
        }
        delayNextStep(e) {
            let t = this._keyframes.size === 1 && this._pendingStyles.size;
            this.duration || t ? (this.forwardTime(this.currentTime + e), t && this.snapshotCurrentStyles()) : this.startTime += e
        }
        fork(e, t) {
            return this.applyStylesToKeyframe(), new s(this._driver, e, t || this.currentTime, this._elementTimelineStylesLookup)
        }
        _loadKeyframe() {
            this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = new Map, this._keyframes.set(this.duration, this._currentKeyframe))
        }
        forwardFrame() {
            this.duration += fa, this._loadKeyframe()
        }
        forwardTime(e) {
            this.applyStylesToKeyframe(), this.duration = e, this._loadKeyframe()
        }
        _updateStyle(e, t) {
            this._localTimelineStyles.set(e, t), this._globalTimelineStyles.set(e, t), this._styleSummary.set(e, {
                time: this.currentTime,
                value: t
            })
        }
        allowOnlyTimelineStyles() {
            return this._currentEmptyStepKeyframe !== this._currentKeyframe
        }
        applyEmptyStep(e) {
            e && this._previousKeyframe.set("easing", e);
            for (let [t, n] of this._globalTimelineStyles) this._backFill.set(t, n || Ce), this._currentKeyframe.set(t, Ce);
            this._currentEmptyStepKeyframe = this._currentKeyframe
        }
        setStyles(e, t, n, i) {
            t && this._previousKeyframe.set("easing", t);
            let r = i && i.params || {},
                a = _a(e, this._globalTimelineStyles);
            for (let [o, l] of a) {
                let c = Ct(l, r, n);
                this._pendingStyles.set(o, c), this._localTimelineStyles.has(o) || this._backFill.set(o, this._globalTimelineStyles.get(o) ? ? Ce), this._updateStyle(o, c)
            }
        }
        applyStylesToKeyframe() {
            this._pendingStyles.size != 0 && (this._pendingStyles.forEach((e, t) => {
                this._currentKeyframe.set(t, e)
            }), this._pendingStyles.clear(), this._localTimelineStyles.forEach((e, t) => {
                this._currentKeyframe.has(t) || this._currentKeyframe.set(t, e)
            }))
        }
        snapshotCurrentStyles() {
            for (let [e, t] of this._localTimelineStyles) this._pendingStyles.set(e, t), this._updateStyle(e, t)
        }
        getFinalKeyframe() {
            return this._keyframes.get(this.duration)
        }
        get properties() {
            let e = [];
            for (let t in this._currentKeyframe) e.push(t);
            return e
        }
        mergeTimelineCollectedStyles(e) {
            e._styleSummary.forEach((t, n) => {
                let i = this._styleSummary.get(n);
                (!i || t.time > i.time) && this._updateStyle(n, t.value)
            })
        }
        buildKeyframes() {
            this.applyStylesToKeyframe();
            let e = new Set,
                t = new Set,
                n = this._keyframes.size === 1 && this.duration === 0,
                i = [];
            this._keyframes.forEach((o, l) => {
                let c = new Map([...this._backFill, ...o]);
                c.forEach((d, u) => {
                    d === Qt ? e.add(u) : d === Ce && t.add(u)
                }), n || c.set("offset", l / this.duration), i.push(c)
            });
            let r = [...e.values()],
                a = [...t.values()];
            if (n) {
                let o = i[0],
                    l = new Map(o);
                o.set("offset", 0), l.set("offset", 1), i = [o, l]
            }
            return is(this.element, i, r, a, this.duration, this.startTime, this.easing, !1)
        }
    },
    Wn = class extends rn {
        keyframes;
        preStyleProps;
        postStyleProps;
        _stretchStartingKeyframe;
        timings;
        constructor(e, t, n, i, r, a, o = !1) {
            super(e, t, a.delay), this.keyframes = n, this.preStyleProps = i, this.postStyleProps = r, this._stretchStartingKeyframe = o, this.timings = {
                duration: a.duration,
                delay: a.delay,
                easing: a.easing
            }
        }
        containsAnimation() {
            return this.keyframes.length > 1
        }
        buildKeyframes() {
            let e = this.keyframes,
                {
                    delay: t,
                    duration: n,
                    easing: i
                } = this.timings;
            if (this._stretchStartingKeyframe && t) {
                let r = [],
                    a = n + t,
                    o = t / a,
                    l = new Map(e[0]);
                l.set("offset", 0), r.push(l);
                let c = new Map(e[0]);
                c.set("offset", ir(o)), r.push(c);
                let d = e.length - 1;
                for (let u = 1; u <= d; u++) {
                    let f = new Map(e[u]),
                        m = f.get("offset"),
                        h = t + m * n;
                    f.set("offset", ir(h / a)), r.push(f)
                }
                n = a, t = 0, i = "", e = r
            }
            return is(this.element, e, this.preStyleProps, this.postStyleProps, n, t, i, !0)
        }
    };

function ir(s, e = 3) {
    let t = Math.pow(10, e - 1);
    return Math.round(s * t) / t
}

function _a(s, e) {
    let t = new Map,
        n;
    return s.forEach(i => {
        if (i === "*") {
            n ? ? = e.keys();
            for (let r of n) t.set(r, Ce)
        } else
            for (let [r, a] of i) t.set(r, a)
    }), t
}

function rr(s, e, t, n, i, r, a, o, l, c, d, u, f) {
    return {
        type: 0,
        element: s,
        triggerName: e,
        isRemovalTransition: i,
        fromState: t,
        fromStyles: r,
        toState: n,
        toStyles: a,
        timelines: o,
        queriedElements: l,
        preStyleProps: c,
        postStyleProps: d,
        totalTime: u,
        errors: f
    }
}
var In = {},
    on = class {
        _triggerName;
        ast;
        _stateStyles;
        constructor(e, t, n) {
            this._triggerName = e, this.ast = t, this._stateStyles = n
        }
        match(e, t, n, i) {
            return va(this.ast.matchers, e, t, n, i)
        }
        buildStyles(e, t, n) {
            let i = this._stateStyles.get("*");
            return e !== void 0 && (i = this._stateStyles.get(e ? .toString()) || i), i ? i.buildStyles(t, n) : new Map
        }
        build(e, t, n, i, r, a, o, l, c, d) {
            let u = [],
                f = this.ast.options && this.ast.options.params || In,
                m = o && o.params || In,
                h = this.buildStyles(n, m, u),
                g = l && l.params || In,
                w = this.buildStyles(i, g, u),
                C = new Set,
                k = new Map,
                b = new Map,
                E = i === "void",
                R = {
                    params: br(g, f),
                    delay: this.ast.options ? .delay
                },
                x = d ? [] : vr(e, t, this.ast.animation, r, a, h, w, R, c, u),
                M = 0;
            return x.forEach(B => {
                M = Math.max(B.duration + B.delay, M)
            }), u.length ? rr(t, this._triggerName, n, i, E, h, w, [], [], k, b, M, u) : (x.forEach(B => {
                let le = B.element,
                    ce = he(k, le, new Set);
                B.preStyleProps.forEach(ne => ce.add(ne));
                let re = he(b, le, new Set);
                B.postStyleProps.forEach(ne => re.add(ne)), le !== t && C.add(le)
            }), rr(t, this._triggerName, n, i, E, h, w, x, [...C.values()], k, b, M))
        }
    };

function va(s, e, t, n, i) {
    return s.some(r => r(e, t, n, i))
}

function br(s, e) {
    let t = oe({}, e);
    return Object.entries(s).forEach(([n, i]) => {
        i != null && (t[n] = i)
    }), t
}
var Un = class {
    styles;
    defaultParams;
    normalizer;
    constructor(e, t, n) {
        this.styles = e, this.defaultParams = t, this.normalizer = n
    }
    buildStyles(e, t) {
        let n = new Map,
            i = br(e, this.defaultParams);
        return this.styles.styles.forEach(r => {
            typeof r != "string" && r.forEach((a, o) => {
                a && (a = Ct(a, i, t));
                let l = this.normalizer.normalizePropertyName(o, t);
                a = this.normalizer.normalizeStyleValue(o, l, a, t), n.set(o, a)
            })
        }), n
    }
};

function ba(s, e, t) {
    return new Qn(s, e, t)
}
var Qn = class {
    name;
    ast;
    _normalizer;
    transitionFactories = [];
    fallbackTransition;
    states = new Map;
    constructor(e, t, n) {
        this.name = e, this.ast = t, this._normalizer = n, t.states.forEach(i => {
            let r = i.options && i.options.params || {};
            this.states.set(i.name, new Un(i.style, r, n))
        }), or(this.states, "true", "1"), or(this.states, "false", "0"), t.transitions.forEach(i => {
            this.transitionFactories.push(new on(e, i, this.states))
        }), this.fallbackTransition = wa(e, this.states)
    }
    get containsQueries() {
        return this.ast.queryCount > 0
    }
    matchTransition(e, t, n, i) {
        return this.transitionFactories.find(a => a.match(e, t, n, i)) || null
    }
    matchStyles(e, t, n) {
        return this.fallbackTransition.buildStyles(e, t, n)
    }
};

function wa(s, e, t) {
    let n = [(a, o) => !0],
        i = {
            type: L.Sequence,
            steps: [],
            options: null
        },
        r = {
            type: L.Transition,
            animation: i,
            matchers: n,
            options: null,
            queryCount: 0,
            depCount: 0
        };
    return new on(s, r, e)
}

function or(s, e, t) {
    s.has(e) ? s.has(t) || s.set(t, s.get(e)) : s.has(t) && s.set(e, s.get(t))
}
var Ea = new kt,
    Hn = class {
        bodyNode;
        _driver;
        _normalizer;
        _animations = new Map;
        _playersById = new Map;
        players = [];
        constructor(e, t, n) {
            this.bodyNode = e, this._driver = t, this._normalizer = n
        }
        register(e, t) {
            let n = [],
                i = [],
                r = _r(this._driver, t, n, i);
            if (n.length) throw xo(n);
            this._animations.set(e, r)
        }
        _buildPlayer(e, t, n) {
            let i = e.element,
                r = hr(this._normalizer, e.keyframes, t, n);
            return this._driver.animate(i, r, e.duration, e.delay, e.easing, [], !0)
        }
        create(e, t, n = {}) {
            let i = [],
                r = this._animations.get(e),
                a, o = new Map;
            if (r ? (a = vr(this._driver, t, r, gr, xn, new Map, new Map, n, Ea, i), a.forEach(d => {
                    let u = he(o, d.element, new Map);
                    d.postStyleProps.forEach(f => u.set(f, null))
                })) : (i.push(Bo()), a = []), i.length) throw zo(i);
            o.forEach((d, u) => {
                d.forEach((f, m) => {
                    d.set(m, this._driver.computeStyle(u, m, Ce))
                })
            });
            let l = a.map(d => {
                    let u = o.get(d.element);
                    return this._buildPlayer(d, new Map, u)
                }),
                c = Oe(l);
            return this._playersById.set(e, c), c.onDestroy(() => this.destroy(e)), this.players.push(c), c
        }
        destroy(e) {
            let t = this._getPlayer(e);
            t.destroy(), this._playersById.delete(e);
            let n = this.players.indexOf(t);
            n >= 0 && this.players.splice(n, 1)
        }
        _getPlayer(e) {
            let t = this._playersById.get(e);
            if (!t) throw jo(e);
            return t
        }
        listen(e, t, n, i) {
            let r = Jn(t, "", "", "");
            return Zn(this._getPlayer(e), n, r, i), () => {}
        }
        command(e, t, n, i) {
            if (n == "register") {
                this.register(e, i[0]);
                return
            }
            if (n == "create") {
                let a = i[0] || {};
                this.create(e, t, a);
                return
            }
            let r = this._getPlayer(e);
            switch (n) {
                case "play":
                    r.play();
                    break;
                case "pause":
                    r.pause();
                    break;
                case "reset":
                    r.reset();
                    break;
                case "restart":
                    r.restart();
                    break;
                case "finish":
                    r.finish();
                    break;
                case "init":
                    r.init();
                    break;
                case "setPosition":
                    r.setPosition(parseFloat(i[0]));
                    break;
                case "destroy":
                    this.destroy(e);
                    break
            }
        }
    },
    ar = "ng-animate-queued",
    Ta = ".ng-animate-queued",
    Fn = "ng-animate-disabled",
    Ca = ".ng-animate-disabled",
    ka = "ng-star-inserted",
    Pa = ".ng-star-inserted",
    Aa = [],
    wr = {
        namespaceId: "",
        setForRemoval: !1,
        setForMove: !1,
        hasAnimation: !1,
        removedBeforeQueried: !1
    },
    Ma = {
        namespaceId: "",
        setForMove: !1,
        setForRemoval: !1,
        hasAnimation: !1,
        removedBeforeQueried: !0
    },
    be = "__ng_removed",
    Pt = class {
        namespaceId;
        value;
        options;
        get params() {
            return this.options.params
        }
        constructor(e, t = "") {
            this.namespaceId = t;
            let n = e && e.hasOwnProperty("value"),
                i = n ? e.value : e;
            if (this.value = Na(i), n) {
                let r = e,
                    {
                        value: a
                    } = r,
                    o = bs(r, ["value"]);
                this.options = o
            } else this.options = {};
            this.options.params || (this.options.params = {})
        }
        absorbOptions(e) {
            let t = e.params;
            if (t) {
                let n = this.options.params;
                Object.keys(t).forEach(i => {
                    n[i] == null && (n[i] = t[i])
                })
            }
        }
    },
    Tt = "void",
    Rn = new Pt(Tt),
    Gn = class {
        id;
        hostElement;
        _engine;
        players = [];
        _triggers = new Map;
        _queue = [];
        _elementListeners = new Map;
        _hostClassName;
        constructor(e, t, n) {
            this.id = e, this.hostElement = t, this._engine = n, this._hostClassName = "ng-tns-" + e, me(t, this._hostClassName)
        }
        listen(e, t, n, i) {
            if (!this._triggers.has(t)) throw Vo(n, t);
            if (n == null || n.length == 0) throw Ko(t);
            if (!Da(n)) throw $o(n, t);
            let r = he(this._elementListeners, e, []),
                a = {
                    name: t,
                    phase: n,
                    callback: i
                };
            r.push(a);
            let o = he(this._engine.statesByElement, e, new Map);
            return o.has(t) || (me(e, Ht), me(e, Ht + "-" + t), o.set(t, Rn)), () => {
                this._engine.afterFlush(() => {
                    let l = r.indexOf(a);
                    l >= 0 && r.splice(l, 1), this._triggers.has(t) || o.delete(t)
                })
            }
        }
        register(e, t) {
            return this._triggers.has(e) ? !1 : (this._triggers.set(e, t), !0)
        }
        _getTrigger(e) {
            let t = this._triggers.get(e);
            if (!t) throw qo(e);
            return t
        }
        trigger(e, t, n, i = !0) {
            let r = this._getTrigger(t),
                a = new At(this.id, t, e),
                o = this._engine.statesByElement.get(e);
            o || (me(e, Ht), me(e, Ht + "-" + t), this._engine.statesByElement.set(e, o = new Map));
            let l = o.get(t),
                c = new Pt(n, this.id);
            if (!(n && n.hasOwnProperty("value")) && l && c.absorbOptions(l.options), o.set(t, c), l || (l = Rn), !(c.value === Tt) && l.value === c.value) {
                if (!Ra(l.params, c.params)) {
                    let g = [],
                        w = r.matchStyles(l.value, l.params, g),
                        C = r.matchStyles(c.value, c.params, g);
                    g.length ? this._engine.reportError(g) : this._engine.afterFlush(() => {
                        Ye(e, w), ke(e, C)
                    })
                }
                return
            }
            let f = he(this._engine.playersByElement, e, []);
            f.forEach(g => {
                g.namespaceId == this.id && g.triggerName == t && g.queued && g.destroy()
            });
            let m = r.matchTransition(l.value, c.value, e, c.params),
                h = !1;
            if (!m) {
                if (!i) return;
                m = r.fallbackTransition, h = !0
            }
            return this._engine.totalQueuedPlayers++, this._queue.push({
                element: e,
                triggerName: t,
                transition: m,
                fromState: l,
                toState: c,
                player: a,
                isFallbackTransition: h
            }), h || (me(e, ar), a.onStart(() => {
                ot(e, ar)
            })), a.onDone(() => {
                let g = this.players.indexOf(a);
                g >= 0 && this.players.splice(g, 1);
                let w = this._engine.playersByElement.get(e);
                if (w) {
                    let C = w.indexOf(a);
                    C >= 0 && w.splice(C, 1)
                }
            }), this.players.push(a), f.push(a), a
        }
        deregister(e) {
            this._triggers.delete(e), this._engine.statesByElement.forEach(t => t.delete(e)), this._elementListeners.forEach((t, n) => {
                this._elementListeners.set(n, t.filter(i => i.name != e))
            })
        }
        clearElementCache(e) {
            this._engine.statesByElement.delete(e), this._elementListeners.delete(e);
            let t = this._engine.playersByElement.get(e);
            t && (t.forEach(n => n.destroy()), this._engine.playersByElement.delete(e))
        }
        _signalRemovalForInnerTriggers(e, t) {
            let n = this._engine.driver.query(e, Jt, !0);
            n.forEach(i => {
                if (i[be]) return;
                let r = this._engine.fetchNamespacesByElement(i);
                r.size ? r.forEach(a => a.triggerLeaveAnimation(i, t, !1, !0)) : this.clearElementCache(i)
            }), this._engine.afterFlushAnimationsDone(() => n.forEach(i => this.clearElementCache(i)))
        }
        triggerLeaveAnimation(e, t, n, i) {
            let r = this._engine.statesByElement.get(e),
                a = new Map;
            if (r) {
                let o = [];
                if (r.forEach((l, c) => {
                        if (a.set(c, l.value), this._triggers.has(c)) {
                            let d = this.trigger(e, c, Tt, i);
                            d && o.push(d)
                        }
                    }), o.length) return this._engine.markElementAsRemoved(this.id, e, !0, t, a), n && Oe(o).onDone(() => this._engine.processLeaveNode(e)), !0
            }
            return !1
        }
        prepareLeaveAnimationListeners(e) {
            let t = this._elementListeners.get(e),
                n = this._engine.statesByElement.get(e);
            if (t && n) {
                let i = new Set;
                t.forEach(r => {
                    let a = r.name;
                    if (i.has(a)) return;
                    i.add(a);
                    let l = this._triggers.get(a).fallbackTransition,
                        c = n.get(a) || Rn,
                        d = new Pt(Tt),
                        u = new At(this.id, a, e);
                    this._engine.totalQueuedPlayers++, this._queue.push({
                        element: e,
                        triggerName: a,
                        transition: l,
                        fromState: c,
                        toState: d,
                        player: u,
                        isFallbackTransition: !0
                    })
                })
            }
        }
        removeNode(e, t) {
            let n = this._engine;
            if (e.childElementCount && this._signalRemovalForInnerTriggers(e, t), this.triggerLeaveAnimation(e, t, !0)) return;
            let i = !1;
            if (n.totalAnimations) {
                let r = n.players.length ? n.playersByQueriedElement.get(e) : [];
                if (r && r.length) i = !0;
                else {
                    let a = e;
                    for (; a = a.parentNode;)
                        if (n.statesByElement.get(a)) {
                            i = !0;
                            break
                        }
                }
            }
            if (this.prepareLeaveAnimationListeners(e), i) n.markElementAsRemoved(this.id, e, !1, t);
            else {
                let r = e[be];
                (!r || r === wr) && (n.afterFlush(() => this.clearElementCache(e)), n.destroyInnerAnimations(e), n._onRemovalComplete(e, t))
            }
        }
        insertNode(e, t) {
            me(e, this._hostClassName)
        }
        drainQueuedTransitions(e) {
            let t = [];
            return this._queue.forEach(n => {
                let i = n.player;
                if (i.destroyed) return;
                let r = n.element,
                    a = this._elementListeners.get(r);
                a && a.forEach(o => {
                    if (o.name == n.triggerName) {
                        let l = Jn(r, n.triggerName, n.fromState.value, n.toState.value);
                        l._data = e, Zn(n.player, o.phase, l, o.callback)
                    }
                }), i.markedForDestroy ? this._engine.afterFlush(() => {
                    i.destroy()
                }) : t.push(n)
            }), this._queue = [], t.sort((n, i) => {
                let r = n.transition.ast.depCount,
                    a = i.transition.ast.depCount;
                return r == 0 || a == 0 ? r - a : this._engine.driver.containsElement(n.element, i.element) ? 1 : -1
            })
        }
        destroy(e) {
            this.players.forEach(t => t.destroy()), this._signalRemovalForInnerTriggers(this.hostElement, e)
        }
    },
    Yn = class {
        bodyNode;
        driver;
        _normalizer;
        players = [];
        newHostElements = new Map;
        playersByElement = new Map;
        playersByQueriedElement = new Map;
        statesByElement = new Map;
        disabledNodes = new Set;
        totalAnimations = 0;
        totalQueuedPlayers = 0;
        _namespaceLookup = {};
        _namespaceList = [];
        _flushFns = [];
        _whenQuietFns = [];
        namespacesByHostElement = new Map;
        collectedEnterElements = [];
        collectedLeaveElements = [];
        onRemovalComplete = (e, t) => {};
        _onRemovalComplete(e, t) {
            this.onRemovalComplete(e, t)
        }
        constructor(e, t, n) {
            this.bodyNode = e, this.driver = t, this._normalizer = n
        }
        get queuedPlayers() {
            let e = [];
            return this._namespaceList.forEach(t => {
                t.players.forEach(n => {
                    n.queued && e.push(n)
                })
            }), e
        }
        createNamespace(e, t) {
            let n = new Gn(e, t, this);
            return this.bodyNode && this.driver.containsElement(this.bodyNode, t) ? this._balanceNamespaceList(n, t) : (this.newHostElements.set(t, n), this.collectEnterElement(t)), this._namespaceLookup[e] = n
        }
        _balanceNamespaceList(e, t) {
            let n = this._namespaceList,
                i = this.namespacesByHostElement;
            if (n.length - 1 >= 0) {
                let a = !1,
                    o = this.driver.getParentElement(t);
                for (; o;) {
                    let l = i.get(o);
                    if (l) {
                        let c = n.indexOf(l);
                        n.splice(c + 1, 0, e), a = !0;
                        break
                    }
                    o = this.driver.getParentElement(o)
                }
                a || n.unshift(e)
            } else n.push(e);
            return i.set(t, e), e
        }
        register(e, t) {
            let n = this._namespaceLookup[e];
            return n || (n = this.createNamespace(e, t)), n
        }
        registerTrigger(e, t, n) {
            let i = this._namespaceLookup[e];
            i && i.register(t, n) && this.totalAnimations++
        }
        destroy(e, t) {
            e && (this.afterFlush(() => {}), this.afterFlushAnimationsDone(() => {
                let n = this._fetchNamespace(e);
                this.namespacesByHostElement.delete(n.hostElement);
                let i = this._namespaceList.indexOf(n);
                i >= 0 && this._namespaceList.splice(i, 1), n.destroy(t), delete this._namespaceLookup[e]
            }))
        }
        _fetchNamespace(e) {
            return this._namespaceLookup[e]
        }
        fetchNamespacesByElement(e) {
            let t = new Set,
                n = this.statesByElement.get(e);
            if (n) {
                for (let i of n.values())
                    if (i.namespaceId) {
                        let r = this._fetchNamespace(i.namespaceId);
                        r && t.add(r)
                    }
            }
            return t
        }
        trigger(e, t, n, i) {
            if (Xt(t)) {
                let r = this._fetchNamespace(e);
                if (r) return r.trigger(t, n, i), !0
            }
            return !1
        }
        insertNode(e, t, n, i) {
            if (!Xt(t)) return;
            let r = t[be];
            if (r && r.setForRemoval) {
                r.setForRemoval = !1, r.setForMove = !0;
                let a = this.collectedLeaveElements.indexOf(t);
                a >= 0 && this.collectedLeaveElements.splice(a, 1)
            }
            if (e) {
                let a = this._fetchNamespace(e);
                a && a.insertNode(t, n)
            }
            i && this.collectEnterElement(t)
        }
        collectEnterElement(e) {
            this.collectedEnterElements.push(e)
        }
        markElementAsDisabled(e, t) {
            t ? this.disabledNodes.has(e) || (this.disabledNodes.add(e), me(e, Fn)) : this.disabledNodes.has(e) && (this.disabledNodes.delete(e), ot(e, Fn))
        }
        removeNode(e, t, n) {
            if (Xt(t)) {
                let i = e ? this._fetchNamespace(e) : null;
                i ? i.removeNode(t, n) : this.markElementAsRemoved(e, t, !1, n);
                let r = this.namespacesByHostElement.get(t);
                r && r.id !== e && r.removeNode(t, n)
            } else this._onRemovalComplete(t, n)
        }
        markElementAsRemoved(e, t, n, i, r) {
            this.collectedLeaveElements.push(t), t[be] = {
                namespaceId: e,
                setForRemoval: i,
                hasAnimation: n,
                removedBeforeQueried: !1,
                previousTriggersValues: r
            }
        }
        listen(e, t, n, i, r) {
            return Xt(t) ? this._fetchNamespace(e).listen(t, n, i, r) : () => {}
        }
        _buildInstruction(e, t, n, i, r) {
            return e.transition.build(this.driver, e.element, e.fromState.value, e.toState.value, n, i, e.fromState.options, e.toState.options, t, r)
        }
        destroyInnerAnimations(e) {
            let t = this.driver.query(e, Jt, !0);
            t.forEach(n => this.destroyActiveAnimationsForElement(n)), this.playersByQueriedElement.size != 0 && (t = this.driver.query(e, Bn, !0), t.forEach(n => this.finishActiveQueriedAnimationOnElement(n)))
        }
        destroyActiveAnimationsForElement(e) {
            let t = this.playersByElement.get(e);
            t && t.forEach(n => {
                n.queued ? n.markedForDestroy = !0 : n.destroy()
            })
        }
        finishActiveQueriedAnimationOnElement(e) {
            let t = this.playersByQueriedElement.get(e);
            t && t.forEach(n => n.finish())
        }
        whenRenderingDone() {
            return new Promise(e => {
                if (this.players.length) return Oe(this.players).onDone(() => e());
                e()
            })
        }
        processLeaveNode(e) {
            let t = e[be];
            if (t && t.setForRemoval) {
                if (e[be] = wr, t.namespaceId) {
                    this.destroyInnerAnimations(e);
                    let n = this._fetchNamespace(t.namespaceId);
                    n && n.clearElementCache(e)
                }
                this._onRemovalComplete(e, t.setForRemoval)
            }
            e.classList ? .contains(Fn) && this.markElementAsDisabled(e, !1), this.driver.query(e, Ca, !0).forEach(n => {
                this.markElementAsDisabled(n, !1)
            })
        }
        flush(e = -1) {
            let t = [];
            if (this.newHostElements.size && (this.newHostElements.forEach((n, i) => this._balanceNamespaceList(n, i)), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length)
                for (let n = 0; n < this.collectedEnterElements.length; n++) {
                    let i = this.collectedEnterElements[n];
                    me(i, ka)
                }
            if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                let n = [];
                try {
                    t = this._flushAnimations(n, e)
                } finally {
                    for (let i = 0; i < n.length; i++) n[i]()
                }
            } else
                for (let n = 0; n < this.collectedLeaveElements.length; n++) {
                    let i = this.collectedLeaveElements[n];
                    this.processLeaveNode(i)
                }
            if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach(n => n()), this._flushFns = [], this._whenQuietFns.length) {
                let n = this._whenQuietFns;
                this._whenQuietFns = [], t.length ? Oe(t).onDone(() => {
                    n.forEach(i => i())
                }) : n.forEach(i => i())
            }
        }
        reportError(e) {
            throw Wo(e)
        }
        _flushAnimations(e, t) {
            let n = new kt,
                i = [],
                r = new Map,
                a = [],
                o = new Map,
                l = new Map,
                c = new Map,
                d = new Set;
            this.disabledNodes.forEach(y => {
                d.add(y);
                let S = this.driver.query(y, Ta, !0);
                for (let T = 0; T < S.length; T++) d.add(S[T])
            });
            let u = this.bodyNode,
                f = Array.from(this.statesByElement.keys()),
                m = ur(f, this.collectedEnterElements),
                h = new Map,
                g = 0;
            m.forEach((y, S) => {
                let T = gr + g++;
                h.set(S, T), y.forEach(P => me(P, T))
            });
            let w = [],
                C = new Set,
                k = new Set;
            for (let y = 0; y < this.collectedLeaveElements.length; y++) {
                let S = this.collectedLeaveElements[y],
                    T = S[be];
                T && T.setForRemoval && (w.push(S), C.add(S), T.hasAnimation ? this.driver.query(S, Pa, !0).forEach(P => C.add(P)) : k.add(S))
            }
            let b = new Map,
                E = ur(f, Array.from(C));
            E.forEach((y, S) => {
                let T = xn + g++;
                b.set(S, T), y.forEach(P => me(P, T))
            }), e.push(() => {
                m.forEach((y, S) => {
                    let T = h.get(S);
                    y.forEach(P => ot(P, T))
                }), E.forEach((y, S) => {
                    let T = b.get(S);
                    y.forEach(P => ot(P, T))
                }), w.forEach(y => {
                    this.processLeaveNode(y)
                })
            });
            let R = [],
                x = [];
            for (let y = this._namespaceList.length - 1; y >= 0; y--) this._namespaceList[y].drainQueuedTransitions(t).forEach(T => {
                let P = T.player,
                    V = T.element;
                if (R.push(P), this.collectedEnterElements.length) {
                    let O = V[be];
                    if (O && O.setForMove) {
                        if (O.previousTriggersValues && O.previousTriggersValues.has(T.triggerName)) {
                            let z = O.previousTriggersValues.get(T.triggerName),
                                q = this.statesByElement.get(T.element);
                            if (q && q.has(T.triggerName)) {
                                let pe = q.get(T.triggerName);
                                pe.value = z, q.set(T.triggerName, pe)
                            }
                        }
                        P.destroy();
                        return
                    }
                }
                let X = !u || !this.driver.containsElement(u, V),
                    K = b.get(V),
                    ge = h.get(V),
                    $ = this._buildInstruction(T, n, ge, K, X);
                if ($.errors && $.errors.length) {
                    x.push($);
                    return
                }
                if (X) {
                    P.onStart(() => Ye(V, $.fromStyles)), P.onDestroy(() => ke(V, $.toStyles)), i.push(P);
                    return
                }
                if (T.isFallbackTransition) {
                    P.onStart(() => Ye(V, $.fromStyles)), P.onDestroy(() => ke(V, $.toStyles)), i.push(P);
                    return
                }
                let Rt = [];
                $.timelines.forEach(O => {
                    O.stretchStartingKeyframe = !0, this.disabledNodes.has(O.element) || Rt.push(O)
                }), $.timelines = Rt, n.append(V, $.timelines);
                let ee = {
                    instruction: $,
                    player: P,
                    element: V
                };
                a.push(ee), $.queriedElements.forEach(O => he(o, O, []).push(P)), $.preStyleProps.forEach((O, z) => {
                    if (O.size) {
                        let q = l.get(z);
                        q || l.set(z, q = new Set), O.forEach((pe, ye) => q.add(ye))
                    }
                }), $.postStyleProps.forEach((O, z) => {
                    let q = c.get(z);
                    q || c.set(z, q = new Set), O.forEach((pe, ye) => q.add(ye))
                })
            });
            if (x.length) {
                let y = [];
                x.forEach(S => {
                    y.push(Uo(S.triggerName, S.errors))
                }), R.forEach(S => S.destroy()), this.reportError(y)
            }
            let M = new Map,
                B = new Map;
            a.forEach(y => {
                let S = y.element;
                n.has(S) && (B.set(S, S), this._beforeAnimationBuild(y.player.namespaceId, y.instruction, M))
            }), i.forEach(y => {
                let S = y.element;
                this._getPreviousPlayers(S, !1, y.namespaceId, y.triggerName, null).forEach(P => {
                    he(M, S, []).push(P), P.destroy()
                })
            });
            let le = w.filter(y => dr(y, l, c)),
                ce = new Map;
            cr(ce, this.driver, k, c, Ce).forEach(y => {
                dr(y, l, c) && le.push(y)
            });
            let ne = new Map;
            m.forEach((y, S) => {
                cr(ne, this.driver, new Set(y), l, Qt)
            }), le.forEach(y => {
                let S = ce.get(y),
                    T = ne.get(y);
                ce.set(y, new Map([...S ? .entries() ? ? [], ...T ? .entries() ? ? []]))
            });
            let se = [],
                Y = [],
                te = {};
            a.forEach(y => {
                let {
                    element: S,
                    player: T,
                    instruction: P
                } = y;
                if (n.has(S)) {
                    if (d.has(S)) {
                        T.onDestroy(() => ke(S, P.toStyles)), T.disabled = !0, T.overrideTotalTime(P.totalTime), i.push(T);
                        return
                    }
                    let V = te;
                    if (B.size > 1) {
                        let K = S,
                            ge = [];
                        for (; K = K.parentNode;) {
                            let $ = B.get(K);
                            if ($) {
                                V = $;
                                break
                            }
                            ge.push(K)
                        }
                        ge.forEach($ => B.set($, V))
                    }
                    let X = this._buildAnimation(T.namespaceId, P, M, r, ne, ce);
                    if (T.setRealPlayer(X), V === te) se.push(T);
                    else {
                        let K = this.playersByElement.get(V);
                        K && K.length && (T.parentPlayer = Oe(K)), i.push(T)
                    }
                } else Ye(S, P.fromStyles), T.onDestroy(() => ke(S, P.toStyles)), Y.push(T), d.has(S) && i.push(T)
            }), Y.forEach(y => {
                let S = r.get(y.element);
                if (S && S.length) {
                    let T = Oe(S);
                    y.setRealPlayer(T)
                }
            }), i.forEach(y => {
                y.parentPlayer ? y.syncPlayerEvents(y.parentPlayer) : y.destroy()
            });
            for (let y = 0; y < w.length; y++) {
                let S = w[y],
                    T = S[be];
                if (ot(S, xn), T && T.hasAnimation) continue;
                let P = [];
                if (o.size) {
                    let X = o.get(S);
                    X && X.length && P.push(...X);
                    let K = this.driver.query(S, Bn, !0);
                    for (let ge = 0; ge < K.length; ge++) {
                        let $ = o.get(K[ge]);
                        $ && $.length && P.push(...$)
                    }
                }
                let V = P.filter(X => !X.destroyed);
                V.length ? Ia(this, S, V) : this.processLeaveNode(S)
            }
            return w.length = 0, se.forEach(y => {
                this.players.push(y), y.onDone(() => {
                    y.destroy();
                    let S = this.players.indexOf(y);
                    this.players.splice(S, 1)
                }), y.play()
            }), se
        }
        afterFlush(e) {
            this._flushFns.push(e)
        }
        afterFlushAnimationsDone(e) {
            this._whenQuietFns.push(e)
        }
        _getPreviousPlayers(e, t, n, i, r) {
            let a = [];
            if (t) {
                let o = this.playersByQueriedElement.get(e);
                o && (a = o)
            } else {
                let o = this.playersByElement.get(e);
                if (o) {
                    let l = !r || r == Tt;
                    o.forEach(c => {
                        c.queued || !l && c.triggerName != i || a.push(c)
                    })
                }
            }
            return (n || i) && (a = a.filter(o => !(n && n != o.namespaceId || i && i != o.triggerName))), a
        }
        _beforeAnimationBuild(e, t, n) {
            let i = t.triggerName,
                r = t.element,
                a = t.isRemovalTransition ? void 0 : e,
                o = t.isRemovalTransition ? void 0 : i;
            for (let l of t.timelines) {
                let c = l.element,
                    d = c !== r,
                    u = he(n, c, []);
                this._getPreviousPlayers(c, d, a, o, t.toState).forEach(m => {
                    let h = m.getRealPlayer();
                    h.beforeDestroy && h.beforeDestroy(), m.destroy(), u.push(m)
                })
            }
            Ye(r, t.fromStyles)
        }
        _buildAnimation(e, t, n, i, r, a) {
            let o = t.triggerName,
                l = t.element,
                c = [],
                d = new Set,
                u = new Set,
                f = t.timelines.map(h => {
                    let g = h.element;
                    d.add(g);
                    let w = g[be];
                    if (w && w.removedBeforeQueried) return new Re(h.duration, h.delay);
                    let C = g !== l,
                        k = Fa((n.get(g) || Aa).map(M => M.getRealPlayer())).filter(M => {
                            let B = M;
                            return B.element ? B.element === g : !1
                        }),
                        b = r.get(g),
                        E = a.get(g),
                        R = hr(this._normalizer, h.keyframes, b, E),
                        x = this._buildPlayer(h, R, k);
                    if (h.subTimeline && i && u.add(g), C) {
                        let M = new At(e, o, g);
                        M.setRealPlayer(x), c.push(M)
                    }
                    return x
                });
            c.forEach(h => {
                he(this.playersByQueriedElement, h.element, []).push(h), h.onDone(() => La(this.playersByQueriedElement, h.element, h))
            }), d.forEach(h => me(h, tr));
            let m = Oe(f);
            return m.onDestroy(() => {
                d.forEach(h => ot(h, tr)), ke(l, t.toStyles)
            }), u.forEach(h => {
                he(i, h, []).push(m)
            }), m
        }
        _buildPlayer(e, t, n) {
            return t.length > 0 ? this.driver.animate(e.element, t, e.duration, e.delay, e.easing, n) : new Re(e.duration, e.delay)
        }
    },
    At = class {
        namespaceId;
        triggerName;
        element;
        _player = new Re;
        _containsRealPlayer = !1;
        _queuedCallbacks = new Map;
        destroyed = !1;
        parentPlayer = null;
        markedForDestroy = !1;
        disabled = !1;
        queued = !0;
        totalTime = 0;
        constructor(e, t, n) {
            this.namespaceId = e, this.triggerName = t, this.element = n
        }
        setRealPlayer(e) {
            this._containsRealPlayer || (this._player = e, this._queuedCallbacks.forEach((t, n) => {
                t.forEach(i => Zn(e, n, void 0, i))
            }), this._queuedCallbacks.clear(), this._containsRealPlayer = !0, this.overrideTotalTime(e.totalTime), this.queued = !1)
        }
        getRealPlayer() {
            return this._player
        }
        overrideTotalTime(e) {
            this.totalTime = e
        }
        syncPlayerEvents(e) {
            let t = this._player;
            t.triggerCallback && e.onStart(() => t.triggerCallback("start")), e.onDone(() => this.finish()), e.onDestroy(() => this.destroy())
        }
        _queueEvent(e, t) {
            he(this._queuedCallbacks, e, []).push(t)
        }
        onDone(e) {
            this.queued && this._queueEvent("done", e), this._player.onDone(e)
        }
        onStart(e) {
            this.queued && this._queueEvent("start", e), this._player.onStart(e)
        }
        onDestroy(e) {
            this.queued && this._queueEvent("destroy", e), this._player.onDestroy(e)
        }
        init() {
            this._player.init()
        }
        hasStarted() {
            return this.queued ? !1 : this._player.hasStarted()
        }
        play() {
            !this.queued && this._player.play()
        }
        pause() {
            !this.queued && this._player.pause()
        }
        restart() {
            !this.queued && this._player.restart()
        }
        finish() {
            this._player.finish()
        }
        destroy() {
            this.destroyed = !0, this._player.destroy()
        }
        reset() {
            !this.queued && this._player.reset()
        }
        setPosition(e) {
            this.queued || this._player.setPosition(e)
        }
        getPosition() {
            return this.queued ? 0 : this._player.getPosition()
        }
        triggerCallback(e) {
            let t = this._player;
            t.triggerCallback && t.triggerCallback(e)
        }
    };

function La(s, e, t) {
    let n = s.get(e);
    if (n) {
        if (n.length) {
            let i = n.indexOf(t);
            n.splice(i, 1)
        }
        n.length == 0 && s.delete(e)
    }
    return n
}

function Na(s) {
    return s ? ? null
}

function Xt(s) {
    return s && s.nodeType === 1
}

function Da(s) {
    return s == "start" || s == "done"
}

function lr(s, e) {
    let t = s.style.display;
    return s.style.display = e ? ? "none", t
}

function cr(s, e, t, n, i) {
    let r = [];
    t.forEach(l => r.push(lr(l)));
    let a = [];
    n.forEach((l, c) => {
        let d = new Map;
        l.forEach(u => {
            let f = e.computeStyle(c, u, i);
            d.set(u, f), (!f || f.length == 0) && (c[be] = Ma, a.push(c))
        }), s.set(c, d)
    });
    let o = 0;
    return t.forEach(l => lr(l, r[o++])), a
}

function ur(s, e) {
    let t = new Map;
    if (s.forEach(o => t.set(o, [])), e.length == 0) return t;
    let n = 1,
        i = new Set(e),
        r = new Map;

    function a(o) {
        if (!o) return n;
        let l = r.get(o);
        if (l) return l;
        let c = o.parentNode;
        return t.has(c) ? l = c : i.has(c) ? l = n : l = a(c), r.set(o, l), l
    }
    return e.forEach(o => {
        let l = a(o);
        l !== n && t.get(l).push(o)
    }), t
}

function me(s, e) {
    s.classList ? .add(e)
}

function ot(s, e) {
    s.classList ? .remove(e)
}

function Ia(s, e, t) {
    Oe(t).onDone(() => s.processLeaveNode(e))
}

function Fa(s) {
    let e = [];
    return Er(s, e), e
}

function Er(s, e) {
    for (let t = 0; t < s.length; t++) {
        let n = s[t];
        n instanceof wt ? Er(n.players, e) : e.push(n)
    }
}

function Ra(s, e) {
    let t = Object.keys(s),
        n = Object.keys(e);
    if (t.length != n.length) return !1;
    for (let i = 0; i < t.length; i++) {
        let r = t[i];
        if (!e.hasOwnProperty(r) || s[r] !== e[r]) return !1
    }
    return !0
}

function dr(s, e, t) {
    let n = t.get(s);
    if (!n) return !1;
    let i = e.get(s);
    return i ? n.forEach(r => i.add(r)) : e.set(s, n), t.delete(s), !0
}
var at = class {
    _driver;
    _normalizer;
    _transitionEngine;
    _timelineEngine;
    _triggerCache = {};
    onRemovalComplete = (e, t) => {};
    constructor(e, t, n) {
        this._driver = t, this._normalizer = n, this._transitionEngine = new Yn(e.body, t, n), this._timelineEngine = new Hn(e.body, t, n), this._transitionEngine.onRemovalComplete = (i, r) => this.onRemovalComplete(i, r)
    }
    registerTrigger(e, t, n, i, r) {
        let a = e + "-" + i,
            o = this._triggerCache[a];
        if (!o) {
            let l = [],
                c = [],
                d = _r(this._driver, r, l, c);
            if (l.length) throw Ro(i, l);
            o = ba(i, d, this._normalizer), this._triggerCache[a] = o
        }
        this._transitionEngine.registerTrigger(t, i, o)
    }
    register(e, t) {
        this._transitionEngine.register(e, t)
    }
    destroy(e, t) {
        this._transitionEngine.destroy(e, t)
    }
    onInsert(e, t, n, i) {
        this._transitionEngine.insertNode(e, t, n, i)
    }
    onRemove(e, t, n) {
        this._transitionEngine.removeNode(e, t, n)
    }
    disableAnimations(e, t) {
        this._transitionEngine.markElementAsDisabled(e, t)
    }
    process(e, t, n, i) {
        if (n.charAt(0) == "@") {
            let [r, a] = Ji(n), o = i;
            this._timelineEngine.command(r, t, a, o)
        } else this._transitionEngine.trigger(e, t, n, i)
    }
    listen(e, t, n, i, r) {
        if (n.charAt(0) == "@") {
            let [a, o] = Ji(n);
            return this._timelineEngine.listen(a, t, o, r)
        }
        return this._transitionEngine.listen(e, t, n, i, r)
    }
    flush(e = -1) {
        this._transitionEngine.flush(e)
    }
    get players() {
        return [...this._transitionEngine.players, ...this._timelineEngine.players]
    }
    whenRenderingDone() {
        return this._transitionEngine.whenRenderingDone()
    }
    afterFlushAnimationsDone(e) {
        this._transitionEngine.afterFlushAnimationsDone(e)
    }
};

function Oa(s, e) {
    let t = null,
        n = null;
    return Array.isArray(e) && e.length ? (t = On(e[0]), e.length > 1 && (n = On(e[e.length - 1]))) : e instanceof Map && (t = On(e)), t || n ? new xa(s, t, n) : null
}
var xa = (() => {
    class s {
        _element;
        _startStyles;
        _endStyles;
        static initialStylesByElement = new WeakMap;
        _state = 0;
        _initialStyles;
        constructor(t, n, i) {
            this._element = t, this._startStyles = n, this._endStyles = i;
            let r = s.initialStylesByElement.get(t);
            r || s.initialStylesByElement.set(t, r = new Map), this._initialStyles = r
        }
        start() {
            this._state < 1 && (this._startStyles && ke(this._element, this._startStyles, this._initialStyles), this._state = 1)
        }
        finish() {
            this.start(), this._state < 2 && (ke(this._element, this._initialStyles), this._endStyles && (ke(this._element, this._endStyles), this._endStyles = null), this._state = 1)
        }
        destroy() {
            this.finish(), this._state < 3 && (s.initialStylesByElement.delete(this._element), this._startStyles && (Ye(this._element, this._startStyles), this._endStyles = null), this._endStyles && (Ye(this._element, this._endStyles), this._endStyles = null), ke(this._element, this._initialStyles), this._state = 3)
        }
    }
    return s
})();

function On(s) {
    let e = null;
    return s.forEach((t, n) => {
        Ba(n) && (e = e || new Map, e.set(n, t))
    }), e
}

function Ba(s) {
    return s === "display" || s === "position"
}
var an = class {
        element;
        keyframes;
        options;
        _specialStyles;
        _onDoneFns = [];
        _onStartFns = [];
        _onDestroyFns = [];
        _duration;
        _delay;
        _initialized = !1;
        _finished = !1;
        _started = !1;
        _destroyed = !1;
        _finalKeyframe;
        _originalOnDoneFns = [];
        _originalOnStartFns = [];
        domPlayer;
        time = 0;
        parentPlayer = null;
        currentSnapshot = new Map;
        constructor(e, t, n, i) {
            this.element = e, this.keyframes = t, this.options = n, this._specialStyles = i, this._duration = n.duration, this._delay = n.delay || 0, this.time = this._duration + this._delay
        }
        _onFinish() {
            this._finished || (this._finished = !0, this._onDoneFns.forEach(e => e()), this._onDoneFns = [])
        }
        init() {
            this._buildPlayer(), this._preparePlayerBeforeStart()
        }
        _buildPlayer() {
            if (this._initialized) return;
            this._initialized = !0;
            let e = this.keyframes;
            this.domPlayer = this._triggerWebAnimation(this.element, e, this.options), this._finalKeyframe = e.length ? e[e.length - 1] : new Map;
            let t = () => this._onFinish();
            this.domPlayer.addEventListener("finish", t), this.onDestroy(() => {
                this.domPlayer.removeEventListener("finish", t)
            })
        }
        _preparePlayerBeforeStart() {
            this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
        }
        _convertKeyframesToObject(e) {
            let t = [];
            return e.forEach(n => {
                t.push(Object.fromEntries(n))
            }), t
        }
        _triggerWebAnimation(e, t, n) {
            return e.animate(this._convertKeyframesToObject(t), n)
        }
        onStart(e) {
            this._originalOnStartFns.push(e), this._onStartFns.push(e)
        }
        onDone(e) {
            this._originalOnDoneFns.push(e), this._onDoneFns.push(e)
        }
        onDestroy(e) {
            this._onDestroyFns.push(e)
        }
        play() {
            this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach(e => e()), this._onStartFns = [], this._started = !0, this._specialStyles && this._specialStyles.start()), this.domPlayer.play()
        }
        pause() {
            this.init(), this.domPlayer.pause()
        }
        finish() {
            this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish()
        }
        reset() {
            this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1, this._onStartFns = this._originalOnStartFns, this._onDoneFns = this._originalOnDoneFns
        }
        _resetDomPlayerState() {
            this.domPlayer && this.domPlayer.cancel()
        }
        restart() {
            this.reset(), this.play()
        }
        hasStarted() {
            return this._started
        }
        destroy() {
            this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(e => e()), this._onDestroyFns = [])
        }
        setPosition(e) {
            this.domPlayer === void 0 && this.init(), this.domPlayer.currentTime = e * this.time
        }
        getPosition() {
            return +(this.domPlayer.currentTime ? ? 0) / this.time
        }
        get totalTime() {
            return this._delay + this._duration
        }
        beforeDestroy() {
            let e = new Map;
            this.hasStarted() && this._finalKeyframe.forEach((n, i) => {
                i !== "offset" && e.set(i, this._finished ? n : ss(this.element, i))
            }), this.currentSnapshot = e
        }
        triggerCallback(e) {
            let t = e === "start" ? this._onStartFns : this._onDoneFns;
            t.forEach(n => n()), t.length = 0
        }
    },
    ln = class {
        validateStyleProperty(e) {
            return !0
        }
        validateAnimatableStyleProperty(e) {
            return !0
        }
        containsElement(e, t) {
            return pr(e, t)
        }
        getParentElement(e) {
            return es(e)
        }
        query(e, t, n) {
            return fr(e, t, n)
        }
        computeStyle(e, t, n) {
            return ss(e, t)
        }
        animate(e, t, n, i, r, a = []) {
            let o = i == 0 ? "both" : "forwards",
                l = {
                    duration: n,
                    delay: i,
                    fill: o
                };
            r && (l.easing = r);
            let c = new Map,
                d = a.filter(m => m instanceof an);
            sa(n, i) && d.forEach(m => {
                m.currentSnapshot.forEach((h, g) => c.set(g, h))
            });
            let u = ea(t).map(m => new Map(m));
            u = ia(e, u, c);
            let f = Oa(e, u);
            return new an(e, u, l, f)
        }
    };
var Zt = "@",
    Tr = "@.disabled",
    cn = class {
        namespaceId;
        delegate;
        engine;
        _onDestroy;\
        u0275type = 0;
        constructor(e, t, n, i) {
            this.namespaceId = e, this.delegate = t, this.engine = n, this._onDestroy = i
        }
        get data() {
            return this.delegate.data
        }
        destroyNode(e) {
            this.delegate.destroyNode ? .(e)
        }
        destroy() {
            this.engine.destroy(this.namespaceId, this.delegate), this.engine.afterFlushAnimationsDone(() => {
                queueMicrotask(() => {
                    this.delegate.destroy()
                })
            }), this._onDestroy ? .()
        }
        createElement(e, t) {
            return this.delegate.createElement(e, t)
        }
        createComment(e) {
            return this.delegate.createComment(e)
        }
        createText(e) {
            return this.delegate.createText(e)
        }
        appendChild(e, t) {
            this.delegate.appendChild(e, t), this.engine.onInsert(this.namespaceId, t, e, !1)
        }
        insertBefore(e, t, n, i = !0) {
            this.delegate.insertBefore(e, t, n), this.engine.onInsert(this.namespaceId, t, e, i)
        }
        removeChild(e, t, n) {
            this.parentNode(t) && this.engine.onRemove(this.namespaceId, t, this.delegate)
        }
        selectRootElement(e, t) {
            return this.delegate.selectRootElement(e, t)
        }
        parentNode(e) {
            return this.delegate.parentNode(e)
        }
        nextSibling(e) {
            return this.delegate.nextSibling(e)
        }
        setAttribute(e, t, n, i) {
            this.delegate.setAttribute(e, t, n, i)
        }
        removeAttribute(e, t, n) {
            this.delegate.removeAttribute(e, t, n)
        }
        addClass(e, t) {
            this.delegate.addClass(e, t)
        }
        removeClass(e, t) {
            this.delegate.removeClass(e, t)
        }
        setStyle(e, t, n, i) {
            this.delegate.setStyle(e, t, n, i)
        }
        removeStyle(e, t, n) {
            this.delegate.removeStyle(e, t, n)
        }
        setProperty(e, t, n) {
            t.charAt(0) == Zt && t == Tr ? this.disableAnimations(e, !!n) : this.delegate.setProperty(e, t, n)
        }
        setValue(e, t) {
            this.delegate.setValue(e, t)
        }
        listen(e, t, n, i) {
            return this.delegate.listen(e, t, n, i)
        }
        disableAnimations(e, t) {
            this.engine.disableAnimations(e, t)
        }
    },
    Xn = class extends cn {
        factory;
        constructor(e, t, n, i, r) {
            super(t, n, i, r), this.factory = e, this.namespaceId = t
        }
        setProperty(e, t, n) {
            t.charAt(0) == Zt ? t.charAt(1) == "." && t == Tr ? (n = n === void 0 ? !0 : !!n, this.disableAnimations(e, n)) : this.engine.process(this.namespaceId, e, t.slice(1), n) : this.delegate.setProperty(e, t, n)
        }
        listen(e, t, n, i) {
            if (t.charAt(0) == Zt) {
                let r = za(e),
                    a = t.slice(1),
                    o = "";
                return a.charAt(0) != Zt && ([a, o] = ja(a)), this.engine.listen(this.namespaceId, r, a, o, l => {
                    let c = l._data || -1;
                    this.factory.scheduleListenerCallback(c, n, l)
                })
            }
            return this.delegate.listen(e, t, n, i)
        }
    };

function za(s) {
    switch (s) {
        case "body":
            return document.body;
        case "document":
            return document;
        case "window":
            return window;
        default:
            return s
    }
}

function ja(s) {
    let e = s.indexOf("."),
        t = s.substring(0, e),
        n = s.slice(e + 1);
    return [t, n]
}
var un = class {
    delegate;
    engine;
    _zone;
    _currentId = 0;
    _microtaskId = 1;
    _animationCallbacksBuffer = [];
    _rendererCache = new Map;
    _cdRecurDepth = 0;
    constructor(e, t, n) {
        this.delegate = e, this.engine = t, this._zone = n, t.onRemovalComplete = (i, r) => {
            r ? .removeChild(null, i)
        }
    }
    createRenderer(e, t) {
        let n = "",
            i = this.delegate.createRenderer(e, t);
        if (!e || !t ? .data ? .animation) {
            let c = this._rendererCache,
                d = c.get(i);
            if (!d) {
                let u = () => c.delete(i);
                d = new cn(n, i, this.engine, u), c.set(i, d)
            }
            return d
        }
        let r = t.id,
            a = t.id + "-" + this._currentId;
        this._currentId++, this.engine.register(a, e);
        let o = c => {
            Array.isArray(c) ? c.forEach(o) : this.engine.registerTrigger(r, a, e, c.name, c)
        };
        return t.data.animation.forEach(o), new Xn(this, a, i, this.engine)
    }
    begin() {
        this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
    }
    _scheduleCountTask() {
        queueMicrotask(() => {
            this._microtaskId++
        })
    }
    scheduleListenerCallback(e, t, n) {
        if (e >= 0 && e < this._microtaskId) {
            this._zone.run(() => t(n));
            return
        }
        let i = this._animationCallbacksBuffer;
        i.length == 0 && queueMicrotask(() => {
            this._zone.run(() => {
                i.forEach(r => {
                    let [a, o] = r;
                    a(o)
                }), this._animationCallbacksBuffer = []
            })
        }), i.push([t, n])
    }
    end() {
        this._cdRecurDepth--, this._cdRecurDepth == 0 && this._zone.runOutsideAngular(() => {
            this._scheduleCountTask(), this.engine.flush(this._microtaskId)
        }), this.delegate.end && this.delegate.end()
    }
    whenRenderingDone() {
        return this.engine.whenRenderingDone()
    }
    componentReplaced(e) {
        this.engine.flush(), this.delegate.componentReplaced ? .(e)
    }
};
var Ka = (() => {
    class s extends at {
        constructor(t, n, i) {
            super(t, n, i)
        }
        ngOnDestroy() {
            this.flush()
        }
        static\ u0275fac = function(n) {
            return new(n || s)($e(Os), $e(Xe), $e(Ze))
        };
        static\ u0275prov = Z({
            token: s,
            factory: s.\u0275fac
        })
    }
    return s
})();

function $a() {
    return new tn
}

function qa(s, e, t) {
    return new un(s, e, t)
}
var Cr = [{
        provide: Ze,
        useFactory: $a
    }, {
        provide: at,
        useClass: Ka
    }, {
        provide: Ds,
        useFactory: qa,
        deps: [Vs, at, Ot]
    }],
    Yc = [{
        provide: Xe,
        useClass: ts
    }, {
        provide: vn,
        useValue: "NoopAnimations"
    }, ...Cr],
    Wa = [{
        provide: Xe,
        useFactory: () => new ln
    }, {
        provide: vn,
        useFactory: () => "BrowserAnimations"
    }, ...Cr];

function kr() {
    return Ns("NgEagerAnimations"), [...Wa]
}
var Ua = {
        developmentMode: !De.production,
        selectorOptions: {
            suppressErrors: !1,
            injectContainerState: !1
        },
        compatibility: {
            strictContentSecurityPolicy: !0
        }
    },
    Pr = {
        providers: [Ws(qs()), Hs(Ki), {
            provide: Us,
            useClass: Gs
        }, ii({
            mode: Fi ? "ios" : "md"
        }), kr(), Yi("ngsw-worker.js", {
            enabled: De.production,
            registrationStrategy: "registerWhenStable:30000"
        }), Ri, Bs(js(), zs()), {
            provide: xs,
            useClass: qi,
            multi: !0
        }, ...Qi, di([_t], Ua)]
    };
var xr = "opt-in",
    Mt = "opt-out",
    Br = "show--consent",
    zr = "show--preferences",
    Ar = "disable--interaction",
    pn = "data-category",
    F = "div",
    we = "button",
    Ee = "aria-hidden",
    Lt = "btn-group",
    ie = "click",
    ct = "data-role",
    fs = "consentModal",
    ms = "preferencesModal",
    us = class {
        constructor() {
            this.t = {
                mode: xr,
                revision: 0,
                autoShow: !0,
                lazyHtmlGeneration: !0,
                autoClearCookies: !0,
                manageScriptTags: !0,
                hideFromBots: !0,
                cookie: {
                    name: "cc_cookie",
                    expiresAfterDays: 182,
                    domain: "",
                    path: "/",
                    secure: !0,
                    sameSite: "Lax"
                }
            }, this.o = {
                i: {},
                l: "",
                _: {},
                u: {},
                p: {},
                m: [],
                v: !1,
                h: null,
                C: null,
                S: null,
                M: "",
                D: !0,
                T: !1,
                k: !1,
                A: !1,
                N: !1,
                H: [],
                V: !1,
                I: !0,
                L: [],
                j: !1,
                F: "",
                P: !1,
                O: [],
                R: [],
                B: [],
                $: [],
                G: !1,
                J: !1,
                U: !1,
                q: [],
                K: [],
                W: [],
                X: {},
                Y: {},
                Z: {},
                ee: {},
                te: {},
                oe: []
            }, this.ne = {
                ae: {},
                se: {}
            }, this.ce = {}, this.re = {
                ie: "cc:onFirstConsent",
                le: "cc:onConsent",
                de: "cc:onChange",
                fe: "cc:onModalShow",
                _e: "cc:onModalHide",
                ue: "cc:onModalReady"
            }
        }
    },
    p = new us,
    jr = (s, e) => s.indexOf(e),
    j = (s, e) => jr(s, e) !== -1,
    mn = s => Array.isArray(s),
    ut = s => typeof s == "string",
    ds = s => !!s && typeof s == "object" && !mn(s),
    Pe = s => typeof s == "function",
    Je = s => Object.keys(s),
    Vr = s => Array.from(new Set(s)),
    fn = () => document.activeElement,
    lt = s => s.preventDefault(),
    gs = (s, e) => s.querySelectorAll(e);
var v = s => {
        let e = document.createElement(s);
        return s === we && (e.type = s), e
    },
    A = (s, e, t) => s.setAttribute(e, t),
    rs = (s, e, t) => {
        s.removeAttribute(t ? "data-" + e : e)
    },
    dn = (s, e, t) => s.getAttribute(t ? "data-" + e : e),
    _ = (s, e) => s.appendChild(e),
    W = (s, e) => s.classList.add(e),
    ae = (s, e) => W(s, "cm__" + e),
    D = (s, e) => W(s, "pm__" + e),
    Be = (s, e) => s.classList.remove(e),
    xe = s => {
        if (typeof s != "object") return s;
        if (s instanceof Date) return new Date(s.getTime());
        let e = Array.isArray(s) ? [] : {};
        for (let t in s) {
            let n = s[t];
            e[t] = xe(n)
        }
        return e
    };
var Mr = (s, e) => dispatchEvent(new CustomEvent(s, {
        detail: e
    })),
    U = (s, e, t, n) => {
        s.addEventListener(e, t), n && p.o.m.push({
            pe: s,
            ge: e,
            me: t
        })
    },
    Lr = () => {
        let s = p.t.cookie.expiresAfterDays;
        return Pe(s) ? s(p.o.F) : s
    },
    os = (s, e) => {
        let t = s || [],
            n = e || [];
        return t.filter(i => !j(n, i)).concat(n.filter(i => !j(t, i)))
    },
    Kr = s => {
        p.o.R = Vr(s), p.o.F = (() => {
            let e = "custom",
                {
                    R: t,
                    O: n,
                    B: i
                } = p.o,
                r = t.length;
            return r === n.length ? e = "all" : r === i.length && (e = "necessary"), e
        })()
    },
    $r = (s, e, t, n) => {
        let i = "accept-",
            {
                show: r,
                showPreferences: a,
                hide: o,
                hidePreferences: l,
                acceptCategory: c
            } = e,
            d = s || document,
            u = b => gs(d, `[data-cc="${b}"]`),
            f = (b, E) => {
                lt(b), c(E), l(), o()
            },
            m = u("show-preferencesModal"),
            h = u("show-consentModal"),
            g = u(i + "all"),
            w = u(i + "necessary"),
            C = u(i + "custom"),
            k = p.t.lazyHtmlGeneration;
        for (let b of m) A(b, "aria-haspopup", "dialog"), U(b, ie, E => {
            lt(E), a()
        }), k && (U(b, "mouseenter", E => {
            lt(E), p.o.N || t(e, n)
        }, !0), U(b, "focus", () => {
            p.o.N || t(e, n)
        }));
        for (let b of h) A(b, "aria-haspopup", "dialog"), U(b, ie, E => {
            lt(E), r(!0)
        }, !0);
        for (let b of g) U(b, ie, E => {
            f(E, "all")
        }, !0);
        for (let b of C) U(b, ie, E => {
            f(E)
        }, !0);
        for (let b of w) U(b, ie, E => {
            f(E, [])
        }, !0)
    },
    Ae = (s, e) => {
        s && (e && (s.tabIndex = -1), s.focus(), e && s.removeAttribute("tabindex"))
    },
    qr = (s, e) => {
        let t = n => {
            n.target.removeEventListener("transitionend", t), n.propertyName === "opacity" && getComputedStyle(s).opacity === "1" && Ae((i => i === 1 ? p.ne.be : p.ne.ve)(e))
        };
        U(s, "transitionend", t)
    },
    Nr, Wr = s => {
        clearTimeout(Nr), s ? W(p.ne.ye, Ar) : Nr = setTimeout(() => {
            Be(p.ne.ye, Ar)
        }, 500)
    },
    Qa = ["M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5", "M 3.572 13.406 L 8.281 18.115 L 20.428 5.885", "M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 "],
    Dt = (s = 0, e = 1.5) => `<svg viewBox="0 0 24 24" stroke-width="${e}"><path d="${Qa[s]}"/></svg>`,
    Ur = s => {
        let e = p.ne,
            t = p.o;
        (n => {
            let i = n === e.he,
                r = t.i.disablePageInteraction ? e.ye : i ? e.Ce : e.ye;
            U(r, "keydown", a => {
                if (a.key !== "Tab" || !(i ? t.k && !t.A : t.A)) return;
                let o = fn(),
                    l = i ? t.q : t.K;
                l.length !== 0 && (a.shiftKey ? o !== l[0] && n.contains(o) || (lt(a), Ae(l[1])) : o !== l[1] && n.contains(o) || (lt(a), Ae(l[0])))
            }, !0)
        })(s)
    },
    Ha = ["[href]", we, "input", "details", "[tabindex]"].map(s => s + ':not([tabindex="-1"])').join(","),
    Qr = s => {
        let {
            o: e,
            ne: t
        } = p, n = (i, r) => {
            let a = gs(i, Ha);
            r[0] = a[0], r[1] = a[a.length - 1]
        };
        s === 1 && e.T && n(t.he, e.q), s === 2 && e.N && n(t.we, e.K)
    },
    Me = (s, e, t) => {
        let {
            de: n,
            le: i,
            ie: r,
            _e: a,
            ue: o,
            fe: l
        } = p.ce, c = p.re;
        if (e) {
            let u = {
                modalName: e
            };
            return s === c.fe ? Pe(l) && l(u) : s === c._e ? Pe(a) && a(u) : (u.modal = t, Pe(o) && o(u)), Mr(s, u)
        }
        let d = {
            cookie: p.o.p
        };
        s === c.ie ? Pe(r) && r(xe(d)) : s === c.le ? Pe(i) && i(xe(d)) : (d.changedCategories = p.o.L, d.changedServices = p.o.ee, Pe(n) && n(xe(d))), Mr(s, xe(d))
    },
    It = (s, e) => {
        try {
            return s()
        } catch (t) {
            return !e && console.warn("CookieConsent:", t), !1
        }
    },
    hs = s => {
        let {
            Y: e,
            ee: t,
            O: n,
            X: i,
            oe: r,
            p: a,
            L: o
        } = p.o;
        for (let u of n) {
            let f = t[u] || e[u] || [];
            for (let m of f) {
                let h = i[u][m];
                if (!h) continue;
                let {
                    onAccept: g,
                    onReject: w
                } = h;
                !h.Se && j(e[u], m) ? (h.Se = !0, Pe(g) && g()) : h.Se && !j(e[u], m) && (h.Se = !1, Pe(w) && w())
            }
        }
        if (!p.t.manageScriptTags) return;
        let l = r,
            c = s || a.categories || [],
            d = (u, f) => {
                if (f >= u.length) return;
                let m = r[f];
                if (m.xe) return d(u, f + 1);
                let h = m.Me,
                    g = m.De,
                    w = m.Te,
                    C = j(c, g),
                    k = !!w && j(e[g], w);
                if (!w && !m.ke && C || !w && m.ke && !C && j(o, g) || w && !m.ke && k || w && m.ke && !k && j(t[g] || [], w)) {
                    m.xe = !0;
                    let b = dn(h, "type", !0);
                    rs(h, "type", !!b), rs(h, pn);
                    let E = dn(h, "src", !0);
                    E && rs(h, "src", !0);
                    let R = v("script");
                    R.textContent = h.innerHTML;
                    for (let {
                            nodeName: M
                        } of h.attributes) A(R, M, h[M] || dn(h, M));
                    b && (R.type = b), E ? R.src = E : E = h.src;
                    let x = !!E && (!b || ["text/javascript", "module"].includes(b));
                    if (x && (R.onload = R.onerror = () => {
                            d(u, ++f)
                        }), h.replaceWith(R), x) return
                }
                d(u, ++f)
            };
        d(l, 0)
    },
    hn = "bottom",
    ps = "left",
    Hr = "center",
    ys = "right",
    as = "inline",
    Gr = "wide",
    Yr = "pm--",
    ls = ["middle", "top", hn],
    Dr = [ps, Hr, ys],
    Ga = {
        box: {
            Ee: [Gr, as],
            Ae: ls,
            Ne: Dr,
            He: hn,
            Ve: ys
        },
        cloud: {
            Ee: [as],
            Ae: ls,
            Ne: Dr,
            He: hn,
            Ve: Hr
        },
        bar: {
            Ee: [as],
            Ae: ls.slice(1),
            Ne: [],
            He: hn,
            Ve: ""
        }
    },
    Ya = {
        box: {
            Ee: [],
            Ae: [],
            Ne: [],
            He: "",
            Ve: ""
        },
        bar: {
            Ee: [Gr],
            Ae: [],
            Ne: [ps, ys],
            He: "",
            Ve: ps
        }
    },
    Xr = s => {
        let e = p.o.i.guiOptions,
            t = e && e.consentModal,
            n = e && e.preferencesModal;
        s === 0 && Ir(p.ne.he, Ga, t, "cm--", "box", "cm"), s === 1 && Ir(p.ne.we, Ya, n, Yr, "box", "pm")
    },
    Ir = (s, e, t, n, i, r) => {
        s.className = r;
        let a = t && t.layout,
            o = t && t.position,
            l = t && t.flipButtons,
            c = !t || t.equalWeightButtons !== !1,
            d = a && a.split(" ") || [],
            u = d[0],
            f = d[1],
            m = u in e ? u : i,
            h = e[m],
            g = j(h.Ee, f) && f,
            w = o && o.split(" ") || [],
            C = w[0],
            k = n === Yr ? w[0] : w[1],
            b = j(h.Ae, C) ? C : h.He,
            E = j(h.Ne, k) ? k : h.Ve,
            R = M => {
                M && W(s, n + M)
            };
        R(m), R(g), R(b), R(E), l && R("flip");
        let x = r + "__btn--secondary";
        if (r === "cm") {
            let {
                Ie: M,
                Le: B
            } = p.ne;
            M && (c ? Be(M, x) : W(M, x)), B && (c ? Be(B, x) : W(B, x))
        } else {
            let {
                je: M
            } = p.ne;
            M && (c ? Be(M, x) : W(M, x))
        }
    },
    Ft = (s, e) => {
        let t = p.o,
            n = p.ne,
            {
                hide: i,
                hidePreferences: r,
                acceptCategory: a
            } = s,
            o = E => {
                a(E), r(), i()
            },
            l = t.u && t.u.preferencesModal;
        if (!l) return;
        let c = l.title,
            d = l.closeIconLabel,
            u = l.acceptAllBtn,
            f = l.acceptNecessaryBtn,
            m = l.savePreferencesBtn,
            h = l.sections || [],
            g = u || f || m;
        if (n.Fe) n.Pe = v(F), D(n.Pe, "body");
        else {
            n.Fe = v(F), W(n.Fe, "pm-wrapper");
            let E = v("div");
            W(E, "pm-overlay"), _(n.Fe, E), U(E, ie, r), n.we = v(F), W(n.we, "pm"), A(n.we, "role", "dialog"), A(n.we, Ee, !0), A(n.we, "aria-modal", !0), A(n.we, "aria-labelledby", "pm__title"), U(n.ye, "keydown", R => {
                R.keyCode === 27 && r()
            }, !0), n.Oe = v(F), D(n.Oe, "header"), n.Re = v("h2"), D(n.Re, "title"), n.Re.id = "pm__title", n.Be = v(we), D(n.Be, "close-btn"), A(n.Be, "aria-label", l.closeIconLabel || ""), U(n.Be, ie, r), n.$e = v("span"), n.$e.innerHTML = Dt(), _(n.Be, n.$e), n.Ge = v(F), D(n.Ge, "body"), n.Je = v(F), D(n.Je, "footer");
            var w = v(F);
            W(w, "btns");
            var C = v(F),
                k = v(F);
            D(C, Lt), D(k, Lt), _(n.Je, C), _(n.Je, k), _(n.Oe, n.Re), _(n.Oe, n.Be), n.ve = v(F), A(n.ve, "tabIndex", -1), _(n.we, n.ve), _(n.we, n.Oe), _(n.we, n.Ge), g && _(n.we, n.Je), _(n.Fe, n.we)
        }
        let b;
        c && (n.Re.innerHTML = c, d && A(n.Be, "aria-label", d)), h.forEach((E, R) => {
            let x = E.title,
                M = E.description,
                B = E.linkedCategory,
                le = B && t.P[B],
                ce = E.cookieTable,
                re = ce && ce.body,
                ne = ce && ce.caption,
                se = re && re.length > 0,
                Y = !!le,
                te = Y && t.X[B],
                y = ds(te) && Je(te) || [],
                S = Y && (!!M || !!se || Je(te).length > 0);
            var T = v(F);
            if (D(T, "section"), S || M) {
                var P = v(F);
                D(P, "section-desc-wrapper")
            }
            let V = y.length;
            if (S && V > 0) {
                let ee = v(F);
                D(ee, "section-services");
                for (let O of y) {
                    let z = te[O],
                        q = z && z.label || O,
                        pe = v(F),
                        ye = v(F),
                        dt = v(F),
                        et = v(F);
                    D(pe, "service"), D(et, "service-title"), D(ye, "service-header"), D(dt, "service-icon");
                    let Le = Fr(q, O, le, !0, B);
                    et.innerHTML = q, _(ye, dt), _(ye, et), _(pe, ye), _(pe, Le), _(ee, pe)
                }
                _(P, ee)
            }
            if (x) {
                var X = v(F),
                    K = v(Y ? we : F);
                if (D(X, "section-title-wrapper"), D(K, "section-title"), K.innerHTML = x, _(X, K), Y) {
                    let ee = v("span");
                    ee.innerHTML = Dt(2, 3.5), D(ee, "section-arrow"), _(X, ee), T.className += "--toggle";
                    let O = Fr(x, B, le),
                        z = l.serviceCounterLabel;
                    if (V > 0 && ut(z)) {
                        let q = v("span");
                        D(q, "badge"), D(q, "service-counter"), A(q, Ee, !0), A(q, "data-servicecounter", V), z && (z = z.split("|"), z = z.length > 1 && V > 1 ? z[1] : z[0], A(q, "data-counterlabel", z)), q.innerHTML = V + (z ? " " + z : ""), _(K, q)
                    }
                    if (S) {
                        D(T, "section--expandable");
                        var ge = B + "-desc";
                        A(K, "aria-expanded", !1), A(K, "aria-controls", ge)
                    }
                    _(X, O)
                } else A(K, "role", "heading"), A(K, "aria-level", "3");
                _(T, X)
            }
            if (M) {
                var $ = v("p");
                D($, "section-desc"), $.innerHTML = M, _(P, $)
            }
            if (S && (A(P, Ee, "true"), P.id = ge, ((ee, O, z) => {
                    U(K, ie, () => {
                        O.classList.contains("is-expanded") ? (Be(O, "is-expanded"), A(z, "aria-expanded", "false"), A(ee, Ee, "true")) : (W(O, "is-expanded"), A(z, "aria-expanded", "true"), A(ee, Ee, "false"))
                    })
                })(P, T, K), se)) {
                let ee = v("table"),
                    O = v("thead"),
                    z = v("tbody");
                if (ne) {
                    let Le = v("caption");
                    D(Le, "table-caption"), Le.innerHTML = ne, ee.appendChild(Le)
                }
                D(ee, "section-table"), D(O, "table-head"), D(z, "table-body");
                let q = ce.headers,
                    pe = Je(q),
                    ye = n.Ue.createDocumentFragment(),
                    dt = v("tr");
                for (let Le of pe) {
                    let tt = q[Le],
                        Fe = v("th");
                    Fe.id = "cc__row-" + tt + R, A(Fe, "scope", "col"), D(Fe, "table-th"), Fe.innerHTML = tt, _(ye, Fe)
                }
                _(dt, ye), _(O, dt);
                let et = n.Ue.createDocumentFragment();
                for (let Le of re) {
                    let tt = v("tr");
                    D(tt, "table-tr");
                    for (let Fe of pe) {
                        let _s = q[Fe],
                            oo = Le[Fe],
                            ht = v("td"),
                            vs = v(F);
                        D(ht, "table-td"), A(ht, "data-column", _s), A(ht, "headers", "cc__row-" + _s + R), vs.insertAdjacentHTML("beforeend", oo), _(ht, vs), _(tt, ht)
                    }
                    _(et, tt)
                }
                _(z, et), _(ee, O), _(ee, z), _(P, ee)
            }(S || M) && _(T, P);
            let Rt = n.Pe || n.Ge;
            Y ? (b || (b = v(F), D(b, "section-toggles")), b.appendChild(T)) : b = null, _(Rt, b || T)
        }), u && (n.ze || (n.ze = v(we), D(n.ze, "btn"), A(n.ze, ct, "all"), _(C, n.ze), U(n.ze, ie, () => o("all"))), n.ze.innerHTML = u), f && (n.je || (n.je = v(we), D(n.je, "btn"), A(n.je, ct, "necessary"), _(C, n.je), U(n.je, ie, () => o([]))), n.je.innerHTML = f), m && (n.qe || (n.qe = v(we), D(n.qe, "btn"), D(n.qe, "btn--secondary"), A(n.qe, ct, "save"), _(k, n.qe), U(n.qe, ie, () => o())), n.qe.innerHTML = m), n.Pe && (n.we.replaceChild(n.Pe, n.Ge), n.Ge = n.Pe), Xr(1), t.N || (t.N = !0, Me(p.re.ue, ms, n.we), e(s), _(n.Ce, n.Fe), Ur(n.we), setTimeout(() => W(n.Fe, "cc--anim"), 100)), Qr(2)
    };

function Fr(s, e, t, n, i) {
    let r = p.o,
        a = p.ne,
        o = v("label"),
        l = v("input"),
        c = v("span"),
        d = v("span"),
        u = v("span"),
        f = v("span"),
        m = v("span");
    if (f.innerHTML = Dt(1, 3), m.innerHTML = Dt(0, 3), l.type = "checkbox", W(o, "section__toggle-wrapper"), W(l, "section__toggle"), W(f, "toggle__icon-on"), W(m, "toggle__icon-off"), W(c, "toggle__icon"), W(d, "toggle__icon-circle"), W(u, "toggle__label"), A(c, Ee, "true"), n ? (W(o, "toggle-service"), A(l, pn, i), a.se[i][e] = l) : a.ae[e] = l, n ? (h => {
            U(l, "change", () => {
                let g = a.se[h],
                    w = a.ae[h];
                r.Z[h] = [];
                for (let C in g) {
                    let k = g[C];
                    k.checked && r.Z[h].push(k.value)
                }
                w.checked = r.Z[h].length > 0
            })
        })(i) : (h => {
            U(l, ie, () => {
                let g = a.se[h],
                    w = l.checked;
                r.Z[h] = [];
                for (let C in g) g[C].checked = w, w && r.Z[h].push(C)
            })
        })(e), l.value = e, u.textContent = s.replace(/<.*>.*<\/.*>/gm, ""), _(d, m), _(d, f), _(c, d), r.D)(t.readOnly || t.enabled) && (l.checked = !0);
    else if (n) {
        let h = r.Y[i];
        l.checked = t.readOnly || j(h, e)
    } else j(r.R, e) && (l.checked = !0);
    return t.readOnly && (l.disabled = !0), _(o, l), _(o, c), _(o, u), o
}
var cs = () => {
        let s = v("span");
        return p.ne.Ke || (p.ne.Ke = s), s
    },
    Zr = (s, e) => {
        let t = p.o,
            n = p.ne,
            {
                hide: i,
                showPreferences: r,
                acceptCategory: a
            } = s,
            o = t.u && t.u.consentModal;
        if (!o) return;
        let l = o.acceptAllBtn,
            c = o.acceptNecessaryBtn,
            d = o.showPreferencesBtn,
            u = o.closeIconLabel,
            f = o.footer,
            m = o.label,
            h = o.title,
            g = C => {
                i(), a(C)
            };
        if (!n.Qe) {
            n.Qe = v(F), n.he = v(F), n.We = v(F), n.Xe = v(F), n.Ye = v(F), W(n.Qe, "cm-wrapper"), W(n.he, "cm"), ae(n.We, "body"), ae(n.Xe, "texts"), ae(n.Ye, "btns"), A(n.he, "role", "dialog"), A(n.he, "aria-modal", "true"), A(n.he, Ee, "false"), A(n.he, "aria-describedby", "cm__desc"), m ? A(n.he, "aria-label", m) : h && A(n.he, "aria-labelledby", "cm__title");
            let C = "box",
                k = t.i.guiOptions,
                b = k && k.consentModal,
                E = (b && b.layout || C).split(" ")[0] === C;
            h && u && E && (n.Le || (n.Le = v(we), n.Le.innerHTML = Dt(), ae(n.Le, "btn"), ae(n.Le, "btn--close"), U(n.Le, ie, () => {
                g([])
            }), _(n.We, n.Le)), A(n.Le, "aria-label", u)), _(n.We, n.Xe), (l || c || d) && _(n.We, n.Ye), n.be = v(F), A(n.be, "tabIndex", -1), _(n.he, n.be), _(n.he, n.We), _(n.Qe, n.he)
        }
        h && (n.Ze || (n.Ze = v("h2"), n.Ze.className = n.Ze.id = "cm__title", _(n.Xe, n.Ze)), n.Ze.innerHTML = h);
        let w = o.description;
        if (w && (t.V && (w = w.replace("{{revisionMessage}}", t.I ? "" : o.revisionMessage || "")), n.et || (n.et = v("p"), n.et.className = n.et.id = "cm__desc", _(n.Xe, n.et)), n.et.innerHTML = w), l && (n.tt || (n.tt = v(we), _(n.tt, cs()), ae(n.tt, "btn"), A(n.tt, ct, "all"), U(n.tt, ie, () => {
                g("all")
            })), n.tt.firstElementChild.innerHTML = l), c && (n.Ie || (n.Ie = v(we), _(n.Ie, cs()), ae(n.Ie, "btn"), A(n.Ie, ct, "necessary"), U(n.Ie, ie, () => {
                g([])
            })), n.Ie.firstElementChild.innerHTML = c), d && (n.ot || (n.ot = v(we), _(n.ot, cs()), ae(n.ot, "btn"), ae(n.ot, "btn--secondary"), A(n.ot, ct, "show"), U(n.ot, "mouseenter", () => {
                t.N || Ft(s, e)
            }), U(n.ot, ie, r)), n.ot.firstElementChild.innerHTML = d), n.nt || (n.nt = v(F), ae(n.nt, Lt), l && _(n.nt, n.tt), c && _(n.nt, n.Ie), (l || c) && _(n.We, n.nt), _(n.Ye, n.nt)), n.ot && !n.st && (n.st = v(F), n.Ie && n.tt ? (ae(n.st, Lt), _(n.st, n.ot), _(n.Ye, n.st)) : (_(n.nt, n.ot), ae(n.nt, Lt + "--uneven"))), f) {
            if (!n.ct) {
                let C = v(F),
                    k = v(F);
                n.ct = v(F), ae(C, "footer"), ae(k, "links"), ae(n.ct, "link-group"), _(k, n.ct), _(C, k), _(n.he, C)
            }
            n.ct.innerHTML = f
        }
        Xr(0), t.T || (t.T = !0, Me(p.re.ue, fs, n.he), e(s), _(n.Ce, n.Qe), Ur(n.he), setTimeout(() => W(n.Qe, "cc--anim"), 100)), Qr(1), $r(n.We, s, Ft, e)
    },
    Jr = s => {
        if (!ut(s)) return null;
        if (s in p.o._) return s;
        let e = s.slice(0, 2);
        return e in p.o._ ? e : null
    },
    eo = () => p.o.l || p.o.i.language.default,
    to = s => {
        s && (p.o.l = s)
    },
    Xa = s => N(void 0, null, function*() {
        let e = p.o,
            t = Jr(s) ? s : eo(),
            n = e._[t];
        if (ut(n) ? n = yield(i => N(void 0, null, function*() {
                try {
                    return yield(yield fetch(i)).json()
                } catch (r) {
                    return console.error(r), !1
                }
            }))(n): Pe(n) && (n = yield n()), !n) throw `Could not load translation for the '${t}' language`;
        return e.u = n, to(t), !0
    }),
    Za = () => {
        let s = p.o.i.language.rtl,
            e = p.ne.Ce;
        s && e && (mn(s) || (s = [s]), j(s, p.o.l) ? W(e, "cc--rtl") : Be(e, "cc--rtl"))
    },
    Nt = () => {
        let s = p.ne;
        if (s.Ce) return;
        s.Ce = v(F), s.Ce.id = "cc-main", s.Ce.setAttribute("data-nosnippet", ""), Za();
        let e = p.o.i.root;
        e && ut(e) && (e = document.querySelector(e)), (e || s.Ue.body).appendChild(s.Ce)
    },
    Ja = s => It(() => localStorage.removeItem(s)),
    Rr = (s, e) => {
        if (e instanceof RegExp) return s.filter(t => e.test(t)); {
            let t = jr(s, e);
            return t > -1 ? [s[t]] : []
        }
    },
    el = s => {
        let {
            hostname: e,
            protocol: t
        } = location, {
            name: n,
            path: i,
            domain: r,
            sameSite: a,
            useLocalStorage: o,
            secure: l
        } = p.t.cookie, c = s ? (() => {
            let m = p.o.S,
                h = m ? new Date - m : 0;
            return 864e5 * Lr() - h
        })() : 864e5 * Lr(), d = new Date;
        d.setTime(d.getTime() + c), p.o.p.expirationTime = d.getTime();
        let u = JSON.stringify(p.o.p),
            f = n + "=" + encodeURIComponent(u) + (c !== 0 ? "; expires=" + d.toUTCString() : "") + "; Path=" + i + "; SameSite=" + a;
        j(e, ".") && (f += "; Domain=" + r), l && t === "https:" && (f += "; Secure"), o ? ((m, h) => {
            It(() => localStorage.setItem(m, h))
        })(n, u) : document.cookie = f, p.o.p
    },
    Or = (s, e, t) => {
        if (s.length === 0) return;
        let n = t || p.t.cookie.domain,
            i = e || p.t.cookie.path,
            r = n.slice(0, 4) === "www.",
            a = r && n.substring(4),
            o = (l, c) => {
                c && c.slice(0, 1) !== "." && (c = "." + c), document.cookie = l + "=; path=" + i + (c ? "; domain=" + c : "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            };
        for (let l of s) o(l, t), t || o(l, n), r && o(l, a)
    },
    tl = s => {
        let e = s || p.t.cookie.name,
            t = p.t.cookie.useLocalStorage;
        return ((i, r) => {
            let a;
            return a = It(() => JSON.parse(r ? i : decodeURIComponent(i)), !0) || {}, a
        })(t ? (n = e, It(() => localStorage.getItem(n)) || "") : nl(e, !0), t);
        var n
    },
    nl = (s, e) => {
        let t = document.cookie.match("(^|;)\\s*" + s + "\\s*=\\s*([^;]+)");
        return t ? e ? t.pop() : s : ""
    },
    sl = s => {
        let e = document.cookie.split(/;\s*/),
            t = [];
        for (let n of e) {
            let i = n.split("=")[0];
            s ? It(() => {
                s.test(i) && t.push(i)
            }) : t.push(i)
        }
        return t
    },
    il = (s, e = []) => {
        ((t, n) => {
            let {
                O: i,
                R: r,
                B: a,
                N: o,
                Z: l,
                $: c,
                X: d
            } = p.o, u = [];
            if (t) {
                mn(t) ? u.push(...t) : ut(t) && (u = t === "all" ? i : [t]);
                for (let f of i) l[f] = j(u, f) ? Je(d[f]) : []
            } else u = [...r, ...c], o && (u = (() => {
                let f = p.ne.ae;
                if (!f) return [];
                let m = [];
                for (let h in f) f[h].checked && m.push(h);
                return m
            })());
            u = u.filter(f => !j(i, f) || !j(n, f)), u.push(...a), Kr(u)
        })(s, e), (() => {
            let t = p.o,
                {
                    Z: n,
                    B: i,
                    Y: r,
                    X: a,
                    O: o
                } = t,
                l = o;
            t.te = xe(r);
            for (let c of l) {
                let d = a[c],
                    u = Je(d),
                    f = n[c] && n[c].length > 0,
                    m = j(i, c);
                if (u.length !== 0) {
                    if (r[c] = [], m) r[c].push(...u);
                    else if (f) {
                        let h = n[c];
                        r[c].push(...h)
                    } else r[c] = t.Z[c];
                    r[c] = Vr(r[c])
                }
            }
        })(), (() => {
            let t = p.o;
            t.L = p.t.mode === Mt && t.D ? os(t.$, t.R) : os(t.R, t.p.categories);
            let n = t.L.length > 0,
                i = !1;
            for (let l of t.O) t.ee[l] = os(t.Y[l], t.te[l]), t.ee[l].length > 0 && (i = !0);
            let r = p.ne.ae;
            for (let l in r) r[l].checked = j(t.R, l);
            for (let l of t.O) {
                let c = p.ne.se[l],
                    d = t.Y[l];
                for (let u in c) c[u].checked = j(d, u)
            }
            t.C || (t.C = new Date), t.M || (t.M = ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, l => (l ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> l / 4).toString(16))), t.p = {
                categories: xe(t.R),
                revision: p.t.revision,
                data: t.h,
                consentTimestamp: t.C.toISOString(),
                consentId: t.M,
                services: xe(t.Y),
                languageCode: p.o.l
            }, t.S && (t.p.lastConsentTimestamp = t.S.toISOString());
            let a = !1,
                o = n || i;
            (t.D || o) && (t.D && (t.D = !1, a = !0), t.S = t.S ? new Date : t.C, t.p.lastConsentTimestamp = t.S.toISOString(), el(), p.t.autoClearCookies && (a || o) && (l => {
                let c = p.o,
                    d = sl(),
                    u = (f => {
                        let m = p.o;
                        return (f ? m.O : m.L).filter(h => {
                            let g = m.P[h];
                            return !!g && !g.readOnly && !!g.autoClear
                        })
                    })(l);
                for (let f in c.ee)
                    for (let m of c.ee[f]) {
                        let h = c.X[f][m].cookies;
                        if (!j(c.Y[f], m) && h)
                            for (let g of h) {
                                let w = Rr(d, g.name);
                                Or(w, g.path, g.domain)
                            }
                    }
                for (let f of u) {
                    let m = c.P[f].autoClear,
                        h = m && m.cookies || [],
                        g = j(c.L, f),
                        w = !j(c.R, f),
                        C = g && w;
                    if (l ? w : C) {
                        m.reloadPage && C && (c.j = !0);
                        for (let k of h) {
                            let b = Rr(d, k.name);
                            Or(b, k.path, k.domain)
                        }
                    }
                }
            })(a), hs()), a && (Me(p.re.ie), Me(p.re.le), p.t.mode === xr) || (o && Me(p.re.de), t.j && (t.j = !1, location.reload()))
        })()
    },
    rl = s => {
        let e = p.o.D ? [] : p.o.R;
        return j(e, s)
    };
var ol = (s, e) => {
    let t = p.o.D ? [] : p.o.Y[e] || [];
    return j(t, s)
};
var no = s => {
        let {
            ne: e,
            o: t
        } = p;
        if (!t.k) {
            if (!t.T) {
                if (!s) return;
                Zr(Ss, Nt)
            }
            t.k = !0, t.J = fn(), t.v && Wr(!0), qr(e.he, 1), W(e.ye, Br), A(e.he, Ee, "false"), setTimeout(() => {
                Ae(p.ne.be)
            }, 100), Me(p.re.fe, fs)
        }
    },
    al = () => {
        let {
            ne: s,
            o: e,
            re: t
        } = p;
        e.k && (e.k = !1, e.v && Wr(), Ae(s.Ke, !0), Be(s.ye, Br), A(s.he, Ee, "true"), Ae(e.J), e.J = null, Me(t._e, fs))
    },
    ll = () => {
        let s = p.o;
        s.A || (s.N || Ft(Ss, Nt), s.A = !0, s.k ? s.U = fn() : s.J = fn(), qr(p.ne.we, 2), W(p.ne.ye, zr), A(p.ne.we, Ee, "false"), setTimeout(() => {
            Ae(p.ne.ve)
        }, 100), Me(p.re.fe, ms))
    },
    cl = () => {
        let s = p.o;
        s.A && (s.A = !1, (() => {
            let e = so(),
                t = p.o.P,
                n = p.ne.ae,
                i = p.ne.se,
                r = a => j(p.o.$, a);
            for (let a in n) {
                let o = !!t[a].readOnly;
                n[a].checked = o || (e ? rl(a) : r(a));
                for (let l in i[a]) i[a][l].checked = o || (e ? ol(l, a) : r(a))
            }
        })(), Ae(p.ne.$e, !0), Be(p.ne.ye, zr), A(p.ne.we, Ee, "true"), s.k ? (Ae(s.U), s.U = null) : (Ae(s.J), s.J = null), Me(p.re._e, ms))
    },
    Ss = {
        show: no,
        hide: al,
        showPreferences: ll,
        hidePreferences: cl,
        acceptCategory: il
    };
var so = () => !p.o.D,
    io = s => N(void 0, null, function*() {
        let {
            o: e,
            t,
            re: n
        } = p, i = window;
        if (!i._ccRun) {
            if (i._ccRun = !0, (o => {
                    let {
                        ne: l,
                        t: c,
                        o: d
                    } = p, u = c, f = d, {
                        cookie: m
                    } = u, h = p.ce, g = o.cookie, w = o.categories, C = Je(w) || [], k = navigator, b = document;
                    l.Ue = b, l.ye = b.documentElement, m.domain = location.hostname, f.i = o, f.P = w, f.O = C, f._ = o.language.translations, f.v = !!o.disablePageInteraction, h.ie = o.onFirstConsent, h.le = o.onConsent, h.de = o.onChange, h._e = o.onModalHide, h.fe = o.onModalShow, h.ue = o.onModalReady;
                    let {
                        mode: E,
                        autoShow: R,
                        lazyHtmlGeneration: x,
                        autoClearCookies: M,
                        revision: B,
                        manageScriptTags: le,
                        hideFromBots: ce
                    } = o;
                    E === Mt && (u.mode = E), typeof M == "boolean" && (u.autoClearCookies = M), typeof le == "boolean" && (u.manageScriptTags = le), typeof B == "number" && B >= 0 && (u.revision = B, f.V = !0), typeof R == "boolean" && (u.autoShow = R), typeof x == "boolean" && (u.lazyHtmlGeneration = x), ce === !1 && (u.hideFromBots = !1), u.hideFromBots === !0 && k && (f.G = k.userAgent && /bot|crawl|spider|slurp|teoma/i.test(k.userAgent) || k.webdriver), ds(g) && (u.cookie = oe(oe({}, m), g)), u.autoClearCookies, f.V, u.manageScriptTags, (re => {
                        let {
                            P: ne,
                            X: se,
                            Y,
                            Z: te,
                            B: y
                        } = p.o;
                        for (let S of re) {
                            let T = ne[S],
                                P = T.services || {},
                                V = ds(P) && Je(P) || [];
                            se[S] = {}, Y[S] = [], te[S] = [], T.readOnly && (y.push(S), Y[S] = V), p.ne.se[S] = {};
                            for (let X of V) {
                                let K = P[X];
                                K.Se = !1, se[S][X] = K
                            }
                        }
                    })(C), (() => {
                        if (!p.t.manageScriptTags) return;
                        let re = p.o,
                            ne = gs(document, "script[" + pn + "]");
                        for (let se of ne) {
                            let Y = dn(se, pn),
                                te = se.dataset.service || "",
                                y = !1;
                            if (Y && Y.charAt(0) === "!" && (Y = Y.slice(1), y = !0), te.charAt(0) === "!" && (te = te.slice(1), y = !0), j(re.O, Y) && (re.oe.push({
                                    Me: se,
                                    xe: !1,
                                    ke: y,
                                    De: Y,
                                    Te: te
                                }), te)) {
                                let S = re.X[Y];
                                S[te] || (S[te] = {
                                    Se: !1
                                })
                            }
                        }
                    })(), to((() => {
                        let re = p.o.i.language.autoDetect;
                        if (re) {
                            let ne = {
                                    browser: navigator.language,
                                    document: document.documentElement.lang
                                },
                                se = Jr(ne[re]);
                            if (se) return se
                        }
                        return eo()
                    })())
                })(s), e.G) return;
            (() => {
                let o = p.o,
                    l = p.t,
                    c = tl(),
                    {
                        categories: d,
                        services: u,
                        consentId: f,
                        consentTimestamp: m,
                        lastConsentTimestamp: h,
                        data: g,
                        revision: w
                    } = c,
                    C = mn(d);
                o.p = c, o.M = f;
                let k = !!f && ut(f);
                o.C = m, o.C && (o.C = new Date(m)), o.S = h, o.S && (o.S = new Date(h)), o.h = g !== void 0 ? g : null, o.V && k && w !== l.revision && (o.I = !1), o.D = !(k && o.I && o.C && o.S && C), l.cookie.useLocalStorage && !o.D && (o.D = new Date().getTime() > (c.expirationTime || 0), o.D && Ja(l.cookie.name)), o.D, (() => {
                    let b = p.o;
                    for (let E of b.O) {
                        let R = b.P[E];
                        if (R.readOnly || R.enabled) {
                            b.$.push(E);
                            let x = b.X[E] || {};
                            for (let M in x) b.Z[E].push(M), b.i.mode === Mt && b.Y[E].push(M)
                        }
                    }
                })(), o.D ? l.mode === Mt && (o.R = [...o.$]) : (o.Y = oe(oe({}, o.Y), u), o.Z = oe({}, o.Y), Kr([...o.B, ...d]))
            })();
            let a = so();
            if (!(yield Xa())) return !1;
            if ($r(null, r = Ss, Ft, Nt), p.o.D && Zr(r, Nt), p.t.lazyHtmlGeneration || Ft(r, Nt), t.autoShow && !a && no(!0), a) return hs(), Me(n.le);
            t.mode === Mt && hs(e.$)
        }
        var r
    });
var ro = (() => {
    class s {
        constructor() {
            this.meta = Q($s), this.ga = Q($t), this.transloco = Q(oi), this.router = Q(zt), this.mediaMatcher = Q(Ii), this.urlParams = qt(), this.listenLanguageChange(), this.logRouterNavigation(), this.checkURLEmbedding(), this.updateToolbarColor(), this.setPageKeyboardClass()
        }
        ngAfterViewInit() {
            return N(this, null, function*() {
                if (qe.isNativePlatform()) {
                    this.meta.updateTag({
                        name: "viewport",
                        content: "minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, initial-scale=1.0, viewport-fit=cover, width=device-width"
                    });
                    let {
                        SplashScreen: t
                    } = yield
                    import ("./esm-BKKEPGSN.js");
                    yield t.hide()
                }
                this.initCookieConsent()
            })
        }
        updateToolbarColor() {
            if (!("window" in globalThis)) return;
            let t = this.mediaMatcher.matchMedia("(prefers-color-scheme: dark)");

            function n() {
                let i = document.querySelector("ion-toolbar");
                if (!i) return requestAnimationFrame(n);
                let r = window.getComputedStyle(i).getPropertyValue("--background");
                if (!r) return requestAnimationFrame(n);
                let o = `meta[name="theme-color"][media="(prefers-color-scheme: ${t.matches?"dark":"light"})"]`;
                document.head.querySelector(o).setAttribute("content", r)
            }
            t.addEventListener("change", n), n()
        }
        initCookieConsent() {
            return io({
                root: "body",
                autoShow: !0,
                hideFromBots: !0,
                cookie: {
                    name: "cc_cookie",
                    domain: location.hostname,
                    path: "/",
                    sameSite: "Lax",
                    expiresAfterDays: 182
                },
                guiOptions: {
                    consentModal: {
                        layout: "cloud inline",
                        position: "bottom center",
                        equalWeightButtons: !0,
                        flipButtons: !1
                    },
                    preferencesModal: {
                        layout: "box",
                        equalWeightButtons: !0,
                        flipButtons: !1
                    }
                },
                onConsent: ({
                    cookie: t
                }) => {
                    console.log("Consent given:", t);
                    let n = {
                        functionality: [Qe.FunctionalityStorage, Qe.PersonalizationStorage],
                        analytics: [Qe.AnalyticsStorage],
                        marketing: [Qe.AdStorage, Qe.AdPersonalization, Qe.AdUserData]
                    };
                    for (let [i, r] of Object.entries(n)) {
                        let a = t.categories.includes(i) ? An.Granted : An.Denied;
                        for (let o of r) Pi.setConsent({
                            type: o,
                            status: a
                        })
                    }
                },
                categories: {
                    necessary: {
                        enabled: !0,
                        readOnly: !0
                    },
                    functionality: {
                        enabled: !0
                    },
                    analytics: {
                        autoClear: {
                            cookies: [{
                                name: /^_ga/
                            }, {
                                name: "_gid"
                            }]
                        },
                        services: {
                            ga: {
                                label: "Google Analytics"
                            }
                        }
                    },
                    marketing: {}
                },
                language: {
                    default: "en",
                    translations: {
                        en: "assets/i18n/cookies/en.json"
                    }
                }
            })
        }
        logRouterNavigation() {
            let t = Ts(this.transloco.events$.pipe(ue(n => n.type === "translationLoadSuccess")));
            this.router.events.pipe(ue(n => n instanceof Bt), Te(n => N(this, null, function*() {
                yield t, yield this.ga.setCurrentScreen(n.urlAfterRedirects)
            }))).subscribe()
        }
        listenLanguageChange() {
            let t = this.urlParams.get("lang");
            if (!("navigator" in globalThis) || !("document" in globalThis)) {
                t && this.transloco.setActiveLang(t);
                return
            }
            this.transloco.langChanges$.pipe(Te(n => {
                document.documentElement.lang = n, document.dir = ["he", "ar", "fa", "ku", "ps", "sd", "ug", "ur", "yi"].includes(n) ? "rtl" : "ltr";
                let i = Array.from(document.head.children).find(r => r.getAttribute("rel") === "search");
                i && i.setAttribute("href", `/opensearch.xml?lang=${n}`)
            })).subscribe(), this.transloco.setActiveLang(t || xi(navigator.language))
        }
        checkURLEmbedding() {
            this.urlParams.get("embed") !== null && document.body.classList.add("embed")
        }
        setPageKeyboardClass() {
            return N(this, null, function*() {
                if (!qe.isNativePlatform()) return;
                let {
                    Keyboard: t
                } = yield
                import ("./esm-OB3WVJDH.js"), n = document.documentElement, i = "keyboard-is-open";
                t.addListener("keyboardWillShow", () => n.classList.add(i)), t.addListener("keyboardWillHide", () => n.classList.remove(i))
            })
        }
        static {
            this.\u0275fac = function(n) {
                return new(n || s)
            }
        }
        static {
            this.\u0275cmp = it({
                type: s,
                selectors: [
                    ["app-root"]
                ],
                decls: 2,
                vars: 0,
                template: function(n, i) {
                    n & 1 && (fe(0, "ion-app"), mt(1, "ion-router-outlet"), _e())
                },
                dependencies: [Xs, Ys],
                encapsulation: 2
            })
        }
    }
    return s
})();
De.production && void 0;
qe.isNativePlatform() || Rs(De.firebase);
Ks(ro, Pr).catch(s => console.error(s));
//# sourceMappingURL=main-7PXAMWLX.js.map