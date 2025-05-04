import {
    a as E
} from "./chunk-PQFSWOT7.js";
import {
    b as H
} from "./chunk-KEGCD5JT.js";
import {
    ca as c,
    ia as a
} from "./chunk-DIJUAHOD.js";
import {
    k as l
} from "./chunk-XDKSGOKZ.js";
var B = (() => {
        class r {
            static {
                this.type = "[Video] Start Camera"
            }
        }
        return r
    })(),
    D = (() => {
        class r {
            static {
                this.type = "[Video] Set Video"
            }
            constructor(e) {
                this.src = e
            }
        }
        return r
    })(),
    O = (() => {
        class r {
            static {
                this.type = "[Video] Stop Video"
            }
        }
        return r
    })();
var g = (() => {
    class r {
        load() {
            return l(this, null, function*() {
                return r.importPromise || (r.importPromise = E()), this.tf = yield r.importPromise, this.tf.ready()
            })
        }
        get setBackend() {
            return this.tf.setBackend
        }
        get softmax() {
            return this.tf.softmax
        }
        get tidy() {
            return this.tf.tidy
        }
        get stack() {
            return this.tf.stack
        }
        get loadLayersModel() {
            return this.tf.loadLayersModel
        }
        get sub() {
            return this.tf.sub
        }
        get pow() {
            return this.tf.pow
        }
        get tensor2d() {
            return this.tf.tensor2d
        }
        get scalar() {
            return this.tf.scalar
        }
        get dot() {
            return this.tf.dot
        }
        get sqrt() {
            return this.tf.sqrt
        }
        get tensor() {
            return this.tf.tensor
        }
        get browser() {
            return this.tf.browser
        }
        get isNaN() {
            return this.tf.isNaN
        }
        static {
            this.\u0275fac = function(t) {
                return new(t || r)
            }
        }
        static {
            this.\u0275prov = c({
                token: r,
                factory: r.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return r
})();
var u = (() => {
    class r {
        load() {
            return l(this, null, function*() {
                r.importPromise || (r.importPromise =
                    import ("./three.module-CQBWPRRG.js")), this.three = yield r.importPromise
            })
        }
        get Vector2() {
            return this.three.Vector2
        }
        get Vector3() {
            return this.three.Vector3
        }
        get Box3() {
            return this.three.Box3
        }
        get Plane() {
            return this.three.Plane
        }
        get VectorKeyframeTrack() {
            return this.three.VectorKeyframeTrack
        }
        get QuaternionKeyframeTrack() {
            return this.three.QuaternionKeyframeTrack
        }
        get AnimationClip() {
            return this.three.AnimationClip
        }
        static {
            this.\u0275fac = function(t) {
                return new(t || r)
            }
        }
        static {
            this.\u0275prov = c({
                token: r,
                factory: r.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return r
})();
var P = (() => {
    class r {
        constructor() {
            this.tf = a(g), this.three = a(u)
        }
        normal(e, t) {
            let o = t.map(h => e[h]),
                i = new this.three.Vector3((o[0].x + o[1].x + o[2].x) / 3, (o[0].y + o[1].y + o[2].y) / 3, (o[0].z + o[1].z + o[2].z) / 3),
                n = new this.three.Plane().setFromCoplanarPoints(o[0], o[1], o[2]).normal;
            return {
                center: i,
                direction: n
            }
        }
        angle(e, t) {
            return (Math.atan2(e, t) * 180 / Math.PI + 360) % 360
        }
        normalize(e, t, o, i, s = !1) {
            let n = this.tf.tensor2d(e.map(j => [j.x, j.y, j.z])),
                h = new this.three.Vector3(1, 0, 0),
                d = t.direction.multiplyScalar(-1),
                f = new this.three.Vector3().crossVectors(h, d),
                p = new this.three.Vector3().crossVectors(d, f),
                w = this.tf.tensor2d([
                    [p.x, f.x, d.x],
                    [p.y, f.y, d.y],
                    [p.z, f.z, d.z]
                ]);
            n = n.sub(n.slice(0, 1)), n = this.tf.dot(n, w), s && (n = n.mul(this.tf.tensor2d([
                [-1, 1, 1]
            ])));
            let I = n.slice(o[0], 1),
                S = n.slice(o[1], 1).sub(I).arraySync(),
                F = 90 + this.angle(S[0][1], S[0][0]),
                V = Math.sin(F * Math.PI / 180),
                z = Math.cos(F * Math.PI / 180),
                b = this.tf.tensor2d([
                    [z, -V, 0],
                    [V, z, 0],
                    [0, 0, 1]
                ]);
            n = n.dot(b);
            let M = n.slice(o[0], 1),
                v = n.slice(o[1], 1),
                T = this.tf.pow(v.sub(M), 2).sum().sqrt(),
                x = this.tf.scalar(200).div(T);
            return n = n.mul(x), n.sub(n.slice(i, 1))
        }
        static {
            this.\u0275fac = function(t) {
                return new(t || r)
            }
        }
        static {
            this.\u0275prov = c({
                token: r,
                factory: r.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return r
})();
var N = (() => {
    class r {
        constructor() {
            this.poseNormalization = a(P), this.tf = a(g), this.three = a(u)
        }
        loadModel() {
            return l(this, null, function*() {
                yield Promise.all([this.tf.load(), this.three.load()]), this.leftHandSequentialModel = yield this.tf.loadLayersModel("assets/models/hand-shape/model.json");
                let e = new Promise(t => this.leftHandSequentialModel.save({
                    save: t
                }));
                this.rightHandSequentialModel = yield this.tf.loadLayersModel({
                    load: () => e
                })
            })
        }
        normalizeHand(e, t, o) {
            return this.poseNormalization.normalize(e, t, [0, 9], 0, o)
        }
        shape(e, t, o) {
            let i = o ? this.leftHandSequentialModel : this.rightHandSequentialModel;
            if (!i) return "\u{46121}";
            let n = 262145 + 96 * this.tf.tidy(() => {
                let h = this.normalizeHand(e, t, o),
                    d = i.predict(h.reshape([1, 1, 63]));
                return this.tf.softmax(d).argMax(2).dataSync()[0]
            });
            return String.fromCodePoint(n)
        }
        bbox(e) {
            return new this.three.Box3().setFromPoints(e)
        }
        normal(e, t = !1) {
            let o = this.poseNormalization.normal(e, [0, 5, 17]);
            return o.direction = o.direction.multiplyScalar(t ? -1 : 1), o
        }
        plane(e) {
            let t = e[0],
                o = e[13],
                i = Math.abs(o.y - t.y) * 1.5,
                s = Math.abs(o.z - t.z);
            return i > s ? "wall" : "floor"
        }
        angleRotationBucket(e) {
            return e += 360 / 16, e = (e + 360) % 360, Math.floor(e / 45)
        }
        rotation(e) {
            let t = e[0],
                o = e[13],
                i = this.poseNormalization.angle(o.y - t.y, o.x - t.x) + 90;
            return this.angleRotationBucket(i)
        }
        direction(e, t, o) {
            let i = o ? t.direction.x : -t.direction.x;
            switch (e) {
                case "wall":
                    let s = this.poseNormalization.angle(t.direction.z, i);
                    return s > 210 ? "me" : s > 150 ? "side" : "you";
                case "floor":
                    let n = this.poseNormalization.angle(t.direction.y, i);
                    return n > 0 ? "me" : n > -60 ? "side" : "you"
            }
        }
        drawBbox(e, t) {
            let o = new this.three.Vector3(t.canvas.width, t.canvas.height, 0),
                i = new this.three.Vector3().multiplyVectors(e.min, o),
                s = new this.three.Vector3().multiplyVectors(e.max, o);
            t.strokeStyle = "#0000FF", t.beginPath(), t.moveTo(i.x, i.y), t.lineTo(i.x, s.y), t.lineTo(s.x, s.y), t.lineTo(s.x, i.y), t.lineTo(i.x, i.y), t.stroke()
        }
        drawNormal(e, t) {
            let o = new this.three.Vector3(t.canvas.width, t.canvas.height, t.canvas.width),
                i = new this.three.Vector3().multiplyVectors(o, e.direction).normalize().multiplyScalar(100),
                s = new this.three.Vector3().multiplyVectors(o, e.center);
            t.strokeStyle = "#FFFF00", t.lineWidth = 10, t.beginPath(), t.moveTo(s.x, s.y), t.lineTo(s.x + i.x, s.y + i.y), t.stroke()
        }
        drawShape(e, t, o, i) {
            let s = t.shape.codePointAt(0),
                h = new Set(["\u{41E71}", "\u{41CF1}", "\u{46191}", "\u{45C51}", "\u{41DB1}", "\u{42351}", "\u{42291}"].map(w => w.codePointAt(0))).has(s + 16);
            o || (s += 8), s += o ? (8 - t.rotation) % 8 : t.rotation, h ? s += 16 : (t.plane === "floor" && (s += 48), s += {
                you: 0,
                side: 16,
                me: 32
            }[t.direction]);
            let d = String.fromCodePoint(s),
                f = new this.three.Vector2((t.bbox.min.x + t.bbox.max.x) / (2 * i.canvas.width), (t.bbox.min.y + t.bbox.max.y) / (2 * i.canvas.height)),
                p = m.textFontSize("\u{421C1}", e / 3, i);
            m.drawSWText(d, f, p, i)
        }
        drawHand(e, t, o, i) {
            this.drawShape(e, t, o, i)
        }
        draw(e, t) {
            e.leftHand && this.drawHand(e.body.shoulders.width, e.leftHand, !0, t), e.rightHand && this.drawHand(e.body.shoulders.width, e.rightHand, !1, t)
        }
        static {
            this.\u0275fac = function(t) {
                return new(t || r)
            }
        }
        static {
            this.\u0275prov = c({
                token: r,
                factory: r.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return r
})();
var L = (() => {
    class r {
        constructor() {
            this.three = a(u), this.holistic = a(H)
        }
        shoulders(e) {
            let t = e[this.holistic.POSE_LANDMARKS.LEFT_SHOULDER],
                o = e[this.holistic.POSE_LANDMARKS.RIGHT_SHOULDER];
            return {
                center: new this.three.Vector2((t.x + o.x) / 2, (t.y + o.y) / 2),
                width: Math.abs(t.x - o.x)
            }
        }
        drawShoulders(e, t) {
            let o = "\u{4E8E1}",
                i = m.textFontSize(o, e.width, t);
            m.drawSWText(o, e.center, i, t)
        }
        drawArm(e, t, o, i) {
            t.visibility < .8 || (i.strokeStyle = "black", i.beginPath(), i.moveTo(e.x * i.canvas.width, e.y * i.canvas.height), i.lineTo(t.x * i.canvas.width, t.y * i.canvas.height), o.visibility > .8 && i.lineTo(o.x * i.canvas.width, o.y * i.canvas.height), i.stroke())
        }
        drawArms(e, t) {
            t.lineWidth = e.shoulders.width * t.canvas.width / 50;
            let o = [{
                x: e.shoulders.center.x + .45 * e.shoulders.width,
                y: e.shoulders.center.y
            }, {
                x: e.shoulders.center.x - .45 * e.shoulders.width,
                y: e.shoulders.center.y
            }];
            this.drawArm(o[0], e.elbows[0], e.wrists[0], t), this.drawArm(o[1], e.elbows[1], e.wrists[1], t)
        }
        draw(e, t) {
            e && (this.drawShoulders(e.shoulders, t), this.drawArms(e, t))
        }
        static {
            this.\u0275fac = function(t) {
                return new(t || r)
            }
        }
        static {
            this.\u0275prov = c({
                token: r,
                factory: r.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return r
})();
var q = {
        Eyes: ["\u{4C7B1}", "\u{4C871}", "\u{4C811}", "\u{4C9F1}"],
        Eyebrows: ["\u{4C451}", "\u{4C3F1}", "\u{4C4B1}"],
        Mouth: ["\u{4DAB1}", "\u{4D871}", "\u{4D931}", "\u{4D631}", "\u{4D751}", "\u{4D811}", "\u{4DB71}"]
    },
    C = (() => {
        class r {
            constructor() {
                this.poseNormalization = a(P), this.tf = a(g), this.three = a(u)
            }
            loadModel() {
                return l(this, null, function*() {
                    return yield Promise.all([this.tf.load(), this.three.load()]), this.tf.loadLayersModel("assets/models/face-features/model.json").then(e => this.faceSequentialModel = e)
                })
            }
            normalize(e) {
                let t = this.poseNormalization.normal(e, [4, 133, 362]);
                return this.poseNormalization.normalize(e, t, [4, 6], 4)
            }
            shape(e) {
                let t = e[4],
                    o = this.faceSequentialModel;
                if (!o) return {
                    face: {
                        location: t,
                        symbol: "\u{4C781}"
                    }
                };
                let i = this.tf.tidy(() => {
                        let z = this.normalize(e),
                            b = o.predict(z.reshape([1, 1, 468 * 3]));
                        b = b.reshape([-1]);
                        let M = {},
                            v = 0;
                        for (let [T, x] of Object.entries(q)) M[T] = x[b.slice(v, x.length).argMax(0).dataSync()[0]], v += x.length;
                        return M
                    }),
                    s = this.shift(i.Eyes, 16),
                    n = (e[133].y + e[362].y) / 2,
                    h = new this.three.Vector2((e[133].x + e[33].x) / 2, n),
                    d = new this.three.Vector2((e[362].x + e[263].x) / 2, n),
                    f = (e[65].y + e[362].y) / 2,
                    p = this.shift(i.Eyebrows, 16),
                    w = new this.three.Vector2(e[282].x, f),
                    I = this.shift(i.Eyebrows, 32),
                    A = new this.three.Vector2(e[52].x, f),
                    S = (e[14].x + e[17].x) / 2,
                    F = (e[14].y + e[17].y) / 2,
                    V = new this.three.Vector2(S, F);
                return {
                    face: {
                        location: t,
                        symbol: "\u{4BFA1}"
                    },
                    eyes: {
                        left: {
                            location: h,
                            symbol: s
                        },
                        right: {
                            location: d,
                            symbol: s
                        }
                    },
                    eyebrows: {
                        left: {
                            location: w,
                            symbol: p
                        },
                        right: {
                            location: A,
                            symbol: I
                        }
                    },
                    mouth: {
                        location: V,
                        symbol: i.Mouth
                    }
                }
            }
            drawFaceFeature(e, t, o) {
                let i = m.textFontSize(t.symbol, e, o);
                m.drawSWText(t.symbol, t.location, i, o, !1)
            }
            draw(e, t) {
                if (!e.face) return;
                let o = e.body.shoulders.width,
                    {
                        face: i,
                        eyes: s,
                        eyebrows: n,
                        mouth: h
                    } = e.face;
                i && this.drawFaceFeature(o * .7, i, t), s && (this.drawFaceFeature(o * .2, s.left, t), this.drawFaceFeature(o * .2, s.right, t)), n && (this.drawFaceFeature(o * .15, n.left, t), this.drawFaceFeature(o * .15, n.right, t)), h && this.drawFaceFeature(o * .25, h, t)
            }
            shift(e, t) {
                return String.fromCodePoint(e.codePointAt(0) + t)
            }
            static {
                this.\u0275fac = function(t) {
                    return new(t || r)
                }
            }
            static {
                this.\u0275prov = c({
                    token: r,
                    factory: r.\u0275fac,
                    providedIn: "root"
                })
            }
        }
        return r
    })();
var m = (() => {
    class r {
        constructor() {
            this.bodyService = a(L), this.faceService = a(C), this.handsService = a(N)
        }
        static {
            this.fontsLoaded = !1
        }
        static get fontsModule() {
            return r.font || (r.font =
                import ("./font.min-ONPFCDP2.js")), r.font
        }
        static cssLoaded() {
            return l(this, null, function*() {
                let e = yield r.fontsModule;
                return new Promise(t => e.cssLoaded(t))
            })
        }
        static loadFonts() {
            return l(this, null, function*() {
                if (r.fontsLoaded) return;
                r.fontsLoaded = !0, (yield r.fontsModule).cssAppend("assets/fonts/signwriting/")
            })
        }
        static normalizeFSW(e) {
            return l(this, null, function*() {
                let {
                    signNormalize: t
                } = yield
                import ("./fsw-V5UIOJKZ.js");
                return t(e)
            })
        }
        static textFontSize(e, t, o) {
            o.font = "100px SuttonSignWritingOneD";
            let i = o.measureText(e);
            return 100 * (t * o.canvas.width / i.width)
        }
        static drawSWText(e, t, o, i, s = !0) {
            i.font = o + "px SuttonSignWritingOneD", i.textAlign = "center", i.textBaseline = "middle", i.fillStyle = "black";
            let n = s ? t.x * i.canvas.width : t.x,
                h = s ? t.y * i.canvas.height : t.y;
            i.fillText(e, n, h)
        }
        draw(e, t) {
            this.bodyService.draw(e.body, t), this.faceService.draw(e, t), this.handsService.draw(e, t)
        }
        static {
            this.\u0275fac = function(t) {
                return new(t || r)
            }
        }
        static {
            this.\u0275prov = c({
                token: r,
                factory: r.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return r
})();
var It = (() => {
    class r {
        getCamera(e) {
            return l(this, null, function*() {
                let t;
                try {
                    t = yield navigator.mediaDevices.getUserMedia({
                        audio: !1,
                        video: e
                    })
                } catch (o) {
                    throw console.error(o.message), o.message.includes("Permission denied") ? new Error("permissionDenied") : new Error("notConnected")
                }
                if (!t) throw new Error("notConnected");
                return t
            })
        }
        static {
            this.\u0275fac = function(t) {
                return new(t || r)
            }
        }
        static {
            this.\u0275prov = c({
                token: r,
                factory: r.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return r
})();
export {
    B as a, D as b, O as c, g as d, u as e, N as f, L as g, C as h, m as i, It as j
};
//# sourceMappingURL=chunk-DMMIEUFP.js.map