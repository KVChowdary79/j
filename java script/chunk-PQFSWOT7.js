import {
    k as t
} from "./chunk-XDKSGOKZ.js";

function s() {
    return t(this, null, function*() {
        let a = yield
        import ("./dist-DXOWKMT4.js");
        if (yield a.ready(), "navigator" in globalThis && "gpu" in navigator && (yield
                import ("./dist-MSS2PIRU.js"), yield a.setBackend("webgpu")), a.getBackend() === "cpu") {
            let {
                setWasmPaths: i
            } = yield
            import ("./dist-ISFX34R2.js");
            i("assets/models/tfjs-backend-wasm/"), yield a.setBackend("wasm")
        }
        return a
    })
}
export {
    s as a
};
//# sourceMappingURL=chunk-PQFSWOT7.js.map