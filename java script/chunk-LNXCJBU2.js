import {
    k as n
} from "./chunk-ZGG45NVU.js";
var s = (r, ...o) => {
        let e = n.get("logLevel", "WARN");
        if (["WARN"].includes(e)) return console.warn(`[Ionic Warning]: ${r}`, ...o)
    },
    i = (r, ...o) => {
        let e = n.get("logLevel", "ERROR");
        if (["ERROR", "WARN"].includes(e)) return console.error(`[Ionic Error]: ${r}`, ...o)
    },
    c = (r, ...o) => console.error(`<${r.tagName.toLowerCase()}> must be used inside ${o.join(" or ")}.`);
export {
    s as a, i as b, c
};
//# sourceMappingURL=chunk-LNXCJBU2.js.map