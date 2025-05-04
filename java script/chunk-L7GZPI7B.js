import {
    a as d,
    b as c
} from "./chunk-KSW6ZZ47.js";
import {
    i as h
} from "./chunk-KEGCD5JT.js";
import {
    f,
    h as p
} from "./chunk-U7BFU7SC.js";
import {
    ca as m,
    ia as n
} from "./chunk-DIJUAHOD.js";
import {
    k as a
} from "./chunk-XDKSGOKZ.js";
var F = (() => {
    class t {
        constructor() {
            this.ga = n(h), this.assets = n(f), this.isFirstFrame = !0, this.queueId = 0
        }
        loadModel() {
            return a(this, null, function*() {
                if (this.queueId++, this.worker) return;
                yield this.ga.trace("pix2pix", "init", () => a(this, null, function*() {
                    p ? this.worker = yield
                    import ("./pix2pix.model-IOABBBRH.js"): this.worker = d(new Worker(new URL("worker-5W3LQMRD.js",
                        import.meta.url), {
                        type: "module"
                    }))
                }));
                let [r, e] = yield Promise.all([this.assets.getDirectory("models/generator/model.h5.layers16/"), this.assets.getDirectory("models/upscaler/model.h5.layers/")]);
                yield this.ga.trace("pix2pix", "load", () => this.worker.loadModel(r, e))
            })
        }
        translate(r) {
            return a(this, null, function*() {
                let e = this.isFirstFrame ? "first-frame" : "frame";
                return this.ga.trace("pix2pix", e, () => a(this, null, function*() {
                    return this.isFirstFrame = !1, this.worker.translateQueue(this.queueId, r)
                }))
            })
        }
        static {
            this.\u0275fac = function(e) {
                return new(e || t)
            }
        }
        static {
            this.\u0275prov = m({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return t
})();

function w(t) {
    return a(this, null, function*() {
        let i = yield createImageBitmap(t);
        return c(i, [i])
    })
}

function y(t, i) {
    return a(this, null, function*() {
        let {
            width: r,
            height: e
        } = t;
        t instanceof HTMLVideoElement && (r = t.videoWidth, e = t.videoHeight);
        let s;
        if (i) s = i;
        else if (t instanceof HTMLCanvasElement) s = t.getContext("2d");
        else {
            let o = document.createElement("canvas");
            o.width = r, o.height = e, s = o.getContext("2d"), s.drawImage(t, 0, 0, r, e)
        }
        let l = s.getImageData(0, 0, r, e);
        return c(l, [l.data.buffer])
    })
}

function j(t, i) {
    return a(this, null, function*() {
        return "window" in globalThis && window.createImageBitmap && window.OffscreenCanvas ? w(t) : y(t, i)
    })
}
export {
    F as a, j as b
};
//# sourceMappingURL=chunk-L7GZPI7B.js.map