import {
    Xc as g,
    ca as a,
    ia as o,
    r as i
} from "./chunk-DIJUAHOD.js";
var k = (() => {
    class n {
        constructor() {
            this.http = o(g), this.signedLanguages = ["ase", "gsg", "fsl", "bfi", "ils", "sgg", "ssr", "slf", "isr", "ssp", "jos", "rsl-by", "bqn", "csl", "csq", "cse", "dsl", "ins", "nzs", "eso", "fse", "asq", "gss-cy", "gss", "icl", "ise", "jsl", "lsl", "lls", "psc", "pso", "bzs", "psr", "rms", "rsl", "svk", "aed", "csg", "csf", "mfs", "swl", "tsm", "ukl", "pks"], this.spokenLanguages = ["en", "de", "fr", "af", "sq", "am", "ar", "hy", "az", "eu", "be", "bn", "bs", "bg", "ca", "ceb", "ny", "zh", "co", "hr", "cs", "da", "nl", "eo", "et", "tl", "fi", "fy", "gl", "ka", "es", "el", "gu", "ht", "ha", "haw", "he", "hi", "hmn", "hu", "is", "ig", "id", "ga", "it", "ja", "jv", "kn", "kk", "km", "rw", "ko", "ku", "ky", "lo", "la", "lv", "lt", "lb", "mk", "mg", "ms", "ml", "mt", "mi", "mr", "mn", "my", "ne", "no", "or", "ps", "fa", "pl", "pt", "pa", "ro", "ru", "sm", "gd", "sr", "st", "sn", "sd", "si", "sk", "sl", "so", "su", "sw", "sv", "tg", "ta", "tt", "te", "th", "tr", "tk", "uk", "ur", "ug", "uz", "vi", "cy", "xh", "yi", "yo", "zu"]
        }
        splitSpokenSentences(t, s) {
            if (!("Segmenter" in Intl)) return [s];
            this.lastSpokenLanguageSegmenter ? .language !== t && (this.lastSpokenLanguageSegmenter = {
                language: t,
                segmenter: new Intl.Segmenter(t, {
                    granularity: "sentence"
                })
            });
            let e = this.lastSpokenLanguageSegmenter.segmenter.segment(s);
            return Array.from(e).map(r => r.segment)
        }
        normalizeSpokenLanguageText(t, s) {
            let e = new URLSearchParams;
            e.set("lang", t), e.set("text", s);
            let r = "https://sign.mt/api/text-normalization?" + e.toString();
            return this.http.get(r).pipe(i(p => p.text))
        }
        describeSignWriting(t) {
            return this.http.post("https://sign.mt/api/signwriting-description", {
                data: {
                    fsw: t
                }
            }).pipe(i(e => e.result.description))
        }
        translateSpokenToSigned(t, s, e) {
            return `https://us-central1-sign-mt.cloudfunctions.net/spoken_text_to_signed_pose?text=${encodeURIComponent(t)}&spoken=${s}&signed=${e}`
        }
        static {
            this.\u0275fac = function(s) {
                return new(s || n)
            }
        }
        static {
            this.\u0275prov = a({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            })
        }
    }
    return n
})();
export {
    k as a
};
//# sourceMappingURL=chunk-NA7WVPXZ.js.map