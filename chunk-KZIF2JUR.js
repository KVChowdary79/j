import {
    a
} from "./chunk-G6X3EYPO.js";
import {
    a as c
} from "./chunk-J7CTOMGD.js";
import {
    a as n
} from "./chunk-U7BFU7SC.js";
import {
    ia as r,
    ub as s,
    wb as o
} from "./chunk-DIJUAHOD.js";
var g = (() => {
    class t extends a {
        constructor() {
            super(), this.store = r(n), this.settingsState$ = this.store.select(e => e.settings)
        }
        applySetting(e, i) {
            this.store.dispatch(new c(e, i))
        }
        static {
            this.\u0275fac = function(i) {
                return new(i || t)
            }
        }
        static {
            this.\u0275dir = s({
                type: t,
                features: [o]
            })
        }
    }
    return t
})();
export {
    g as a
};
//# sourceMappingURL=chunk-KZIF2JUR.js.map