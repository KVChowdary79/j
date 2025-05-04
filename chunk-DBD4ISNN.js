import {
    a as n
} from "./chunk-NA7WVPXZ.js";
import {
    ca as o,
    ha as i
} from "./chunk-DIJUAHOD.js";
var c = {
        iw: "he"
    },
    s = "en",
    l = (() => {
        class t {
            constructor(e) {
                this.translationService = e
            }
            languageCode(e) {
                let r = c[e] ? ? e;
                return this.translationService.spokenLanguages.includes(r) ? r : s
            }
            static {
                this.\u0275fac = function(r) {
                    return new(r || t)(i(n))
                }
            }
            static {
                this.\u0275prov = o({
                    token: t,
                    factory: t.\u0275fac,
                    providedIn: "root"
                })
            }
        }
        return t
    })();
export {
    l as a
};
//# sourceMappingURL=chunk-DBD4ISNN.js.map