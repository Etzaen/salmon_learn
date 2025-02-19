!(function (e) {
    var t = {};
    function r(i) {
        if (t[i]) return t[i].exports;
        var s = (t[i] = { i: i, l: !1, exports: {} });
        return e[i].call(s.exports, s, s.exports, r), (s.l = !0), s.exports;
    }
    (r.m = e),
        (r.c = t),
        (r.d = function (e, t, i) {
            r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
        }),
        (r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if ((r.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var s in e)
                    r.d(
                        i,
                        s,
                        function (t) {
                            return e[t];
                        }.bind(null, s)
                    );
            return i;
        }),
        (r.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 4));
})([
    function (e, t, r) {
        "use strict";
        e.exports = function (e) {
            var t = [];
            return (
                (t.toString = function () {
                    return this.map(function (t) {
                        var r = (function (e, t) {
                            var r = e[1] || "",
                                i = e[3];
                            if (!i) return r;
                            if (t && "function" == typeof btoa) {
                                var s = ((a = i), (o = btoa(unescape(encodeURIComponent(JSON.stringify(a))))), (h = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o)), "/*# ".concat(h, " */")),
                                    n = i.sources.map(function (e) {
                                        return "/*# sourceURL=".concat(i.sourceRoot || "").concat(e, " */");
                                    });
                                return [r].concat(n).concat([s]).join("\n");
                            }
                            var a, o, h;
                            return [r].join("\n");
                        })(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r;
                    }).join("");
                }),
                (t.i = function (e, r, i) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var s = {};
                    if (i)
                        for (var n = 0; n < this.length; n++) {
                            var a = this[n][0];
                            null != a && (s[a] = !0);
                        }
                    for (var o = 0; o < e.length; o++) {
                        var h = [].concat(e[o]);
                        (i && s[h[0]]) || (r && (h[2] ? (h[2] = "".concat(r, " and ").concat(h[2])) : (h[2] = r)), t.push(h));
                    }
                }),
                t
            );
        };
    },
    function (e, t, r) {
        var i = r(2),
            s = r(3);
        "string" == typeof (s = s.__esModule ? s.default : s) && (s = [[e.i, s, ""]]);
        var n = { insert: "head", singleton: !1 };
        i(s, n);
        e.exports = s.locals || {};
    },
    function (e, t, r) {
        "use strict";
        var i,
            s = function () {
                return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i;
            },
            n = (function () {
                var e = {};
                return function (t) {
                    if (void 0 === e[t]) {
                        var r = document.querySelector(t);
                        if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                            try {
                                r = r.contentDocument.head;
                            } catch (e) {
                                r = null;
                            }
                        e[t] = r;
                    }
                    return e[t];
                };
            })(),
            a = [];
        function o(e) {
            for (var t = -1, r = 0; r < a.length; r++)
                if (a[r].identifier === e) {
                    t = r;
                    break;
                }
            return t;
        }
        function h(e, t) {
            for (var r = {}, i = [], s = 0; s < e.length; s++) {
                var n = e[s],
                    h = t.base ? n[0] + t.base : n[0],
                    l = r[h] || 0,
                    c = "".concat(h, " ").concat(l);
                r[h] = l + 1;
                var p = o(c),
                    d = { css: n[1], media: n[2], sourceMap: n[3] };
                -1 !== p ? (a[p].references++, a[p].updater(d)) : a.push({ identifier: c, updater: f(d, t), references: 1 }), i.push(c);
            }
            return i;
        }
        function l(e) {
            var t = document.createElement("style"),
                i = e.attributes || {};
            if (void 0 === i.nonce) {
                var s = r.nc;
                s && (i.nonce = s);
            }
            if (
                (Object.keys(i).forEach(function (e) {
                    t.setAttribute(e, i[e]);
                }),
                "function" == typeof e.insert)
            )
                e.insert(t);
            else {
                var a = n(e.insert || "head");
                if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                a.appendChild(t);
            }
            return t;
        }
        var c,
            p =
                ((c = []),
                function (e, t) {
                    return (c[e] = t), c.filter(Boolean).join("\n");
                });
        function d(e, t, r, i) {
            var s = r ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
            if (e.styleSheet) e.styleSheet.cssText = p(t, s);
            else {
                var n = document.createTextNode(s),
                    a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(n, a[t]) : e.appendChild(n);
            }
        }
        function u(e, t, r) {
            var i = r.css,
                s = r.media,
                n = r.sourceMap;
            if ((s ? e.setAttribute("media", s) : e.removeAttribute("media"), n && btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n)))), " */")), e.styleSheet))
                e.styleSheet.cssText = i;
            else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(i));
            }
        }
        var g = null,
            m = 0;
        function f(e, t) {
            var r, i, s;
            if (t.singleton) {
                var n = m++;
                (r = g || (g = l(t))), (i = d.bind(null, r, n, !1)), (s = d.bind(null, r, n, !0));
            } else
                (r = l(t)),
                    (i = u.bind(null, r, t)),
                    (s = function () {
                        !(function (e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e);
                        })(r);
                    });
            return (
                i(e),
                function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        i((e = t));
                    } else s();
                }
            );
        }
        e.exports = function (e, t) {
            (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = s());
            var r = h((e = e || []), t);
            return function (e) {
                if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
                    for (var i = 0; i < r.length; i++) {
                        var s = o(r[i]);
                        a[s].references--;
                    }
                    for (var n = h(e, t), l = 0; l < r.length; l++) {
                        var c = o(r[l]);
                        0 === a[c].references && (a[c].updater(), a.splice(c, 1));
                    }
                    r = n;
                }
            };
        };
    },
    function (e, t, r) {
        "use strict";
        r.r(t);
        var i = r(0),
            s = r.n(i)()(!1);
        s.push([
            e.i,
            '#drizzlerjs-wrapper {\r\n\tposition: relative;\r\n\twidth: 640px;\r\n\theight: 960px;\r\n}\r\n\t#drizzlerjs-canvas-wrapper {\r\n\t\tposition: absolute;\r\n\t\tz-index: 100000000;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n\t#drizzlerjs-bottom-tools {\r\n\t\tposition: absolute;\r\n\t\tz-index: 100000001;\r\n\t\tbottom: 5px;\r\n\t    right: 8px;\r\n\t    text-align: right;\r\n\t}\r\n\t\t#drizzlerjs-bottom-tools h5 {\r\n\t\t\tbackground: #ff9800;\r\n\t\t\tcolor: White;\r\n\t\t\tfont-size: 14px;\r\n\t\t\tline-height: 26px;\r\n\t\t\theight: 24px;\r\n\t\t\twidth: 80px;\r\n\t\t\tclip-path: polygon(0 0, calc(100% - 10px) 0%, 100% 100%, 0% 100%);\r\n\t\t\tmargin: 8px 0 0;\r\n\t\t\tpadding: 0 0 0 10px;\r\n\t\t\tfont-weight: bold;\r\n\t\t\ttext-align: left;\r\n\t\t}\r\n\t\t#drizzlerjs-bottom-tools .h5-after {\r\n\t\t\tcontent: "";\r\n\t\t\tdisplay: block;\r\n\t\t\tmargin: 0;\r\n\t\t\tpadding: 0;\r\n\t\t\twidth: 453px;\r\n\t\t\theight: 2px;\r\n\t\t\tbackground: #ff9800;\r\n\t\t}\r\n\t\t.drizzlerjs-desc {\r\n\t\t\tfont-family: sans-serif;\r\n\t\t\tfont-weight: bold;\r\n\t\t\tfont-size: 18px;\r\n\t\t\twidth: 620px;\r\n\t\t\theight: 70px;\r\n\t\t\tline-height: 70px;\r\n\t\t\tbackground: #ffffff;\r\n\t\t\tcolor: #444444;\r\n\t\t\tposition: absolute;\r\n\t\t\tz-index: 99999999;\r\n\t\t\ttext-align: center;\r\n\t\t\tbox-sizing: border-box;\r\n\t\t\tcursor: pointer;\r\n\t\t\tfilter: drop-shadow(4px 4px 4px rgba(0,0,0,0.3));\r\n\t\t\tdisplay: none;\r\n\t\t    top: -95px;\r\n\t\t    left: 0;\r\n\t\t    width: max-content;\r\n\t\t    padding: 0 16px;\r\n\t\t}\r\n\t\t.drizzlerjs-desc:before {\r\n\t\t\tcontent: \'\';\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 50px;\r\n\t\t\tbottom: -20px;\r\n\t\t\tborder-top: 20px solid #ffffff;\r\n\t\t\tborder-right: 20px solid transparent;\r\n\t\t\tborder-left: 20px solid transparent;\r\n\t\t}\r\n\t\t.drizzlerjs-button-1,\r\n\t\t.drizzlerjs-button-2,\r\n\t\t.drizzlerjs-button-3 {\r\n\t\t\tfont-family: sans-serif;\r\n\t\t\tfont-weight: bold;\r\n\t\t\tfont-size: 18px;\r\n\t\t\tpadding: 10px 14px;\r\n\t\t\twidth: 147px;\r\n\t\t\tbackground: #ff9800;\r\n\t\t\tcolor: #ffffff;\r\n\t\t\tz-index: 99999999;\r\n\t\t\tposition: relative;\r\n\t\t\tdisplay: inline-block;\r\n\t\t    margin: 4px 6px 0 0;\r\n\t\t\ttext-align: center;\r\n\t\t\tbox-sizing: border-box;\r\n\t\t\tcursor: pointer;\r\n\t\t\tuser-select: none;\r\n\t\t}\r\n\t\t.drizzlerjs-button-2 {\r\n\t\t\tbackground: #2196F3;\r\n\t\t}\r\n\t\t.drizzlerjs-button-3 {\r\n\t\t\tbackground: #4caf50;\r\n\t\t}\r\n\t\t.drizzlerjs-button-1:hover,\r\n\t\t.drizzlerjs-button-2:hover,\r\n\t\t.drizzlerjs-button-3:hover {\r\n\t\t\tfilter: brightness(1.1);\r\n\t\t}\r\n\t#drizzlerjs-mask-tools {\r\n\t\tdisplay: none;\r\n\t\tposition: absolute;\r\n\t\tbackground: rgba(0, 0, 0, .8);\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tz-index: 100000002;\r\n\t}\r\n\t\t#drizzlerjs-mask-tools img {\r\n\t\t\twidth: 64px;\r\n\t\t\theight: 64px;\r\n\t\t\t/*position: absolute;*/\r\n\t\t\tpadding: 3px;\r\n\t\t\tmargin: 4px;\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\t\t#drizzlerjs-mask-tools img:hover {\r\n\t\t\tfilter: brightness(1.2);\r\n\t\t}\r\n\t#drizzlerjs-wrapper #drizzlerjs-options-wrapper {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\ttop: 0;\r\n\t\tmargin: 0;\r\n\t\tz-index: 100000003;\r\n\t\tbackground: rgba(20, 20, 20, 0.9);\r\n\t\tpadding: 50px 50px;\r\n\t    box-sizing: border-box;\r\n\t\ttext-align: center;\r\n\t}\r\n\t\t#drizzlerjs-options-wrapper h4 {\r\n\t\t\tcolor: #ffffff;\r\n\t\t\tmargin: 50px 0 30px;\r\n\t\t\tpadding: 0;\r\n\t\t\tfont-size: 30px;\r\n\t\t\tline-height: 30px;\r\n\t\t\ttext-align: center;\r\n\t\t}\r\n\t\t#drizzlerjs-options-wrapper h4:first-child {\r\n\t\t\tmargin-top: 0;\r\n\t\t}\r\n\t\t#drizzlerjs-options-wrapper ul {\r\n\t\t\tdisplay: inline-block;\r\n\t\t\twidth: max-content;\r\n\t\t\tlist-style-type: none;\r\n\t\t\tfont-size: 1.2em;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\tmargin: 0;\r\n\t\t\tpadding: 0;\r\n\t\t}\r\n\t\t#drizzlerjs-options-wrapper li {\r\n\t\t\twidth: max-content;\r\n\t\t\tdisplay: list-item;\r\n\t\t\ttext-align: -webkit-match-parent;\r\n\t\t\ttext-align: left;\r\n\t\t\tmargin-bottom: 30px;\r\n\t\t\tcolor: #ffffff;\r\n\t\t}\r\n\t\t\t#drizzlerjs-options-wrapper select {\r\n\t\t\t\tfont-size: 24px;\r\n\t\t\t\theight: 40px;\r\n\t\t\t\tline-height: 40px;\r\n\t\t\t\twidth: max-content;\r\n\t\t\t}\r\n\t#drizzlerjs-options-wrapper input[type=radio],\r\n\t#drizzlerjs-options-wrapper input[type=radio] + label,\r\n\t#drizzlerjs-options-wrapper input[type=checkbox],\r\n\t#drizzlerjs-options-wrapper input[type=checkbox] + label { cursor: pointer; font-weight: bold; }\r\n\t#drizzlerjs-options-wrapper input[type=checkbox] { display:none; }\r\n\t#drizzlerjs-options-wrapper input[type=checkbox] + label:before { display: inline-block; }\r\n\t#drizzlerjs-options-wrapper input[type=checkbox] + label:before { content: ""; background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBElEQVR4nO2bMW4DMQwEl1SSj+Vf7vzgtIGPdJPSUuW7CaCdlhAwGkDqGN3d2pikBWgcgBagcQBagOZjMStJR1XFVTJnkJkt6XM2nwaoqvsY49bdq0j/nZb0JelHkwjTy2XmIUkR8ThF7SK6+7eqIvP1a9/hD1g+4R0CLHEAWoDGAWgBGgegBWgcgBagcQBagMYBaAEaB6AFaByAFqBxAFqAxgFoARoHoAVoHIAWoHEAWoDGAWgBGgegBWgcgBagcQBagMYBaAEaB6AFaByAFqBxAFqAxgFoAZrtA6yWIY7LLE4kIh6r3chVgO+/c+PtVhdSVUOLO4Q3RzfHAWgBGgegBWied90subtO8cIAAAAASUVORK5CYII="); background-repeat: no-repeat; background-size: contain; background-position: 0 0;width: 1em; height: 1em; margin-right: 0.6em; margin-bottom: -0.1em; }\r\n\t#drizzlerjs-options-wrapper input[type=checkbox] + label:before { letter-spacing: 0.5em; }\r\n\t#drizzlerjs-options-wrapper input[type=checkbox]:checked + label { color: yellow; font-weight: bold; }\r\n\t#drizzlerjs-options-wrapper input[type=checkbox]:checked + label:before { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADyElEQVR4nO2aT4hVVRzHP+eUf95MBYMoOFRU5sJcCIKoEdbCGFtYm4iiNkUxVAvFhSC6EcGFoEa1jBYtahAX2cKVC2XAheHGCqopRakpyoT552P03fN1MW901PfePffvec/uF87qnvO93+/3nT/3/u4zEuJ/DBtaQGhUAYQWEBpVAKEFhEYVQGgBoVEFEFpAaFQBhBZQAK455/94/yAFMAXsGRtj0Fo2AMedoxE7SkK93qKIs/U6z7bwtiaK+LXT2AdhBhyyli21Gr/deyGKeMMYVnccHfrXy9CmJd7s4GufD0+vBnBFYn0H87t8uXoxgLFW632B+beT8BmppypCPwDbjGG81UWJIeA7YLEvYS8FcAHYagz/trrYXBKngUeTkPbKKXABeLmd+ZkZBp3jWxKaB3g4q7Ki4Ry/WMuQMfzT6rrEYuA48EQa/m6fAZdv3OAVY/i7XQfn+BTYnPoOXbCrt2vXZmdZG6N9OOt9unITdI5Za9lmDKfb9ZHY4Byj1rIky73yWAJfA5/kwHMb1jIcY34ZMJLV/DxZlin0pYRp8nyTx9SPIvZ7aD6R11LLEsBn94iqSYxmND8SZ77R4MM895q0ARxuJW5igmUSP6fk/OnqVR6L+eVXS0yGDuBgjMhVEuMJOSelzjs+c0+tZ/I0nygA51Cjwd4YkfMhbNTc66qvkLfiOBsNduRtPukMOOljfkEIr0URzoM39gSp11klMRE6AEm8kzCEj2L4zl+6xFIPnpNFmE8TwIw6FCLaiD/YhmtSYo3H+NeLMp8mAElcnJpiRcIQvmrB877HuEckLnZbAIoiTkk8lCCARRKnFnCc8BkXRRwo0nzqAJohHPENoBnCgMSPEv9JDHr0fzKKEp0k5QbQbO8mDOGZmzfZ7tn3i6LNS9nfBuvAS8ZwLgPHfZBYB5wH/2WWFlnfBmvOcWx6mpW5qLmD/ZRgHnIqijrHGWvZaozHt7gYaO6Y/Z6SqlW53MRaXnSOo3lwAbsps1SX86byQUYtz0k0ytj85lveSX8u8Xzawc6xk5LW/jyKqAn+cf06m/r7+TPJIInlzvG7tclr+1lQxFp7vK+PEYlFCce9V7Z5KG6zeQHuLpl1QjOs4YK0dESRu+2wxMeefYeApwvU0hZFHzdHJbZ49EtUZ8gThX8YcY6/rGWTMVxpdV1iwDkuh1j/UMIDh7WsBI5JbSs/r4YyD+X+P2AUGAf6gT6gBiwFngIGStJwH7ry22CZ6PbP44WjCiC0gNCoAggtIDSqAEILCI0qgNACQqMKILSA0LgF6pILd28Us9UAAAAASUVORK5CYII=") }\r\n\t#drizzlerjs-options-wrapper input[type=radio] { display:none; }\r\n\t#drizzlerjs-options-wrapper input[type=radio] + label:before { display: inline-block; }\r\n\t#drizzlerjs-options-wrapper input[type=radio] + label:before { content: ""; background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIjElEQVR4nO2bbWwlVRnH//PMbbddy9J9Kcu+wLJAs8omq8QE33AtQTeSaICEmiC4QTHoB98SDUQTLSYQJTEYQYxKiAY1cXsXv4gxJkq7JCggAY2uINV9Q3a362LZut3e3jvn/Pwwc9va3pk7t+3tS/SfnA8zc+ac5/+fZ84585xnpP/jfxvBYnQCtEtaJ+kCSZuTsl5SuyQkjUs6Lel4Uk4dOXJkZPv27aVm29YUAYBQ0kXOuXeGYfhuSTuSslFSWOf2SNIJSX+V9FIURQcqlcoz7e3trwZB4Jth74IBOL9SqXwQ+ClwkoXDK865R4H3AR1LzXMWgPXA7c65Z5xzbgGJz0QFOADcDJy/1Lx1+PDhNuBW4A9NJJ2Gp4EbgZYlIQ/sdM7tS57KUqHknHtkfHz88sUkHgJ7gRNLSHwmjhB7Q8ODekM3EA9AX/Tef97MVjXamaQJxdPda5LOSprw3svMWr33HWa2TlKXpLY5tH1W0j2SvhUEQe7pM7cAwHpJDwI3B0Hu27ykI5KeljQg6SVJxySNSCofPHgQSdq5c2cgqUVSp+Lpc0cQBD2S3mFml0oq5O3Pe//9kZGRuzZs2DCa18i6GB0d3QA81oBLjgOPAx8CNgIFIAAMCAcGBgrJucmSnAuTOkFy3FWpVG5wzu0HRhvo/xFgzYKQB9YA+3J2XAF+STxftyekw5lkGyhhX1+fAW3AbmC/c248py3fJV6Bzot8AfhGzg6Hoii6BVidGD1X0mnFElFvJN+064AvATYfAe4ASjk6exzo7uvrs1ruvVBlYGCgkIh7CfAT51yUqYBzZ6Mo6p0r+bcD/8yh8v3A+cRPqGnkp5f+/v4QOA/4CjBWx8ZjwBUNkR8eHu4gfqr1yN9L/H7O5z2f8/gArAK+kEOER4H803YURZ+q517A15eQ/KQIyXL8LjJeVefcBHBzLvLnzp3bBgzVId8PdCwx+eme8Abn3ENZBjvnnge6ZvKdNUK2t7d/WFLq2tp7/+dSqXSn4iDGogRU6iCQVDKzrylebNWEmV0p6fpZ56cfAJsk7c3orGxmd7a1tR3T8iBfRaA4kvRV7/2pjHofB9ZOPzHTAz7gvd+R0cA+SU/UuG85wCQ9bWaPZtR5axRFPTNvkiQBbZJuMbO0J/vvcrl8f7FYjOZtapOQ2PYDSYdSqhQKhcKtzz333OwYAnCVc24kYxx5GGhdBoNevdJKPD2nDYYngEkvn+7K15hZZy3ZvPeRpEeKxaKb+/NZNETlcvkxxYHVWTCzCyW9a/JYkogDCdektWhmz0o62NXVtZwGvpoYHBy01tbWlyX9NqPaJNeqB6yXtC3jhickjfX09MzbwGajp6dHxWJxXNIBxfGIWrgcOE+aEmC7pAtTKlOpVH5dLBaX/dOvore3F0nPeu9HUqpcImmTNCXAJUDN91/SaEtLy1Bv79w+qpYIgaRjZnYy5XpXFEVbpCkBtmSEuV4eGRkZGxwcXDEekNg65r0/nFIlLBQKm6UpATanNea9P3z69OnSSnj/q0hsLZlZmgBSwrkqwKyPhCrM7PXu7u5lu/jJgJP0r4zrXdKUAKszKpYU7+CuNFR3ndOwWpoSIOv9Xonkq8iyPZASAbz3ExkVW1bSFDgNgaTWtItVzlUPyHpXOnp7e5fj1189mPc+dQfZzF6TEgHM7HhGQ5uVoeQyRouZbcm4fkKa8oBXMyq+SfGAsZLGAhTbnBbZQglnk6RKpXJM0lhK5Y3lcnnjQlvYTBSLRU1MTHRJSvOA18vl8nEpEaClpeWQpOGUyoUwDHdrBXlAb28vq1ateovS1zdHW1tbpwSQdNJ7nzoOhGHYo3j3dkVgaGioRdLVSrHZe39EycBvkhQEQWRmqd/P3vv3Kv56WgleQHd390ZJ16ZWgKeCIED674jQb5SycjKztc65mxbUzCahWCxK0h7vfdoAOBqG4WD1YFKAM2fO/F5xbl5NBEFwh6QNWt5ewHXXXbde0kfNrGY+ovf++ZMnT75YPZ4UoLOzc0TSz9JaNrNuSR9ZQGObgo6OjuslXZV23cz2bdq0aXLGm7nC2694gyENn1UcTVl2XlAsFpF0kff+00pPqRmS9IvMhoDMPTbindbVzcwDaLQktrQDD9Sx/e66SgJXAqfSWvDeA3yG5bExOn2D9GNkJ3McBS6byXfWR04QBC9I+nGaQEno7B5Je5QedV1MeEm7Jd0rKSsH4HtBEPw9V4tjY2NbqJ+Hcxy4lkXMDKlRDLga+FsdW58E1jUkK3ATcbpbPRH29Pf310x9WwTy78lBfrRSqaQuirIEKADfrNM4wEgURZ9k8bJFqqkxtznnhuvY5oAv9/X1zS2eAXQCP88hgnPOPQxsJUmGXGji1QyxsbGxzcADzrlyDrt+BGTFO3OJcKlz7oUcnUGcK/gJoDNJZ1sIIarJkmuA24C/5LTlwNmzZzfNi3wVExMTu4A/5ewY4HngdqArEaHRjNEQCPr7+8MkTXcv8EwyBefB76gx5c0LwC4a+DEiMfYo8FClUrkJ2EK8WCkQ70ZPD7QGiUgFoD1x8xuccw8Ch/L2CeCce6oR8o2my1/mvf+2mb2/kfsUz9WvS3pF0h8lHZU06pwrh2GIpFXe+zVmdrGkXZK2ee/XZmSrzO7Ae8xsv6TPBUGQtZyfH4C1wIPARCNPpsk4B9wzPDy8OD9UEbvqLeQfkJqGJP/vhjlPdfMUYivxx1NWblGziJ8G7gMuWHTiNYR4m3Puh8DpRSA+DHwHePNS854FYJdz7j5gKOdCJS9KzrkXgbtLpdIbF9LmZv06uz6Kot2FQmGP4oysjd77TjPLu8NU8t6fMbMTkp6U9CtJTwVBcGahbW36pifxj41boyi6olAoXC7pYklbFcfsq7+0nJN0ynv/DzM7qjhy86Kk40EQNDU34T+lDtz7i7uZmgAAAABJRU5ErkJggg=="); background-repeat: no-repeat; background-size: contain; background-position: 0 0;width: 1em; height: 1em; margin-right: 0.4em; margin-bottom: -0.1em; }\r\n\t#drizzlerjs-options-wrapper input[type=radio] + label:before { letter-spacing: 0.5em; }\r\n\t#drizzlerjs-options-wrapper input[type=radio]:checked + label { color: yellow; font-weight: bold; }\r\n\t#drizzlerjs-options-wrapper input[type=radio]:checked + label:before { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHKElEQVR4nO2bb4xdRRnGf+/cXbttKgVW/tQWm1aUAE0hMQ2ISQMailEUrK7EFqoW8RMx+omoMRqNxPBZbaNYY6BYm4JoUKoRkT9qKwRoqbRGrQVaulb6B1tatrvzPn4459577t27e3fpnLNSfZL5MHPOmXmfZ2bOed+ZOfB//G/DqmhEYjpwJnA28NY89bszIwQcOA68DLyUp/3AITNeK9u2UgSQqAHnAVe4swS4IE/nmBG6PBuBfcBfgJ0h8DtgC7DXDC/D3mSQmCXxoRj5SYz80x2lSDGyJ0bukrhaYuZU8xwFiX6Jm2PkTzHiqYh3EGIkRh6V+ITErKnmjUSfxI0xsrUs0uOIsUXiIxK9U0X+4hjZECMjVZMviDAUI2slzq+SeE1iZYwMThXxDkI8n4+Gcr9qEjNj5PYYGZpq0h1EOCpxm0RfWeT7Y+THU020iwgeI2skTktN/i0xct9UE5yEEGsnKkLXOSNxmjt3mjFw8lJWB4nvhcDnzTg+3n3dvLIed776RiOf4xbgC9L4HMe9CKwCbk1mUoUww9z5MrBs3PvGuiBxuTsPmNGf3LoKIbEnBK4x47lO1zuOAImZ7nzljU4ewIy57nxRYlqn62NNgU8B7y/NqurxccaYCqOmgMQ8dx4y4+2lm1UhJJ4JgaVm/KtY3mkELD/VyAOYcSlwXXt5iwASs935ZGVWVQx3bpE4o1jWPgKuNeOCMo0wGztVgHcBVxYLGgJI9LlzY1ktt5KcjjQPuBh4G+TxS9lCmFFz56biGkJxBCwCLimh0ZxUL3AT0m+Bg5jtAp5F2gUcBH6NdAPQU7YQVwALRpVK3JY6KJGy5L5Y0lOaGDZLurTwbPoksarRQTl5c2eTGUtTydzswY8CdwHTG9fc/YUQwhPAPnfvBRaEEC6DegR3BFgOPFDvnKSQWFerFaZ7Hu7uTN/7i+X+aqNvY4xHJX1J0rmtBqkmaaGk9ZJcktwPS7qklFEQI5sl3lwUYHGMHE5LvlfSk8WxfUTSBwq8rZDqQvRKut3d80cek3stuQgxMijxzqIAA+l7f3n75L61QLwTDGD79u1vkvTT5mPLyhAgSlwFza/AnElOozHRnPtNf8rdd+7evfvOut5jPCqAhQsXnhgeHv4WcCwrXtlWbxIbA9n2XCaAezoBAKQ+4PJGPoTw8/nz57/GBLfient7nwJ2ZLn3QOdA7mTRFAA4K23dZ1J86wMvTOZpMxsGns9yM5HSbwK5czY0BZiRsnKzPto6O062DnfPN0INs1JGwAxoCpDY7zoKrRu5syfztKQa+RDNtHs1kV0tMGgKMJS27kPAK42cu1+9YcOGGmO/AFswNDT0jhDChVnuAPDvtOblzUBTgINp6x4GNjVyIYR3DwwMXJtnu462adOmfQ6ysFV6EBhJax4QAi9DLkAI7E1VcdNt/QFtHb5a0kWFwqIQRWdoFfCZLDeC2Q/b6k2GfdAcAckEaOIRpI3FgtnAbyRdL6mHVnUkaZakr7v7GqiHq/cAm9OblmEvNIOhJe48aJbua5A5LnOAR2D0Cttmd384hDAI9Lj7AuDDIYTzmrc8B1wF7C8jGDocAkvMeLZeMDdGdqV3h8kDmh0TDIXr2CrpwtJC4hh5RsqW/OtTYJDsdFZKlXNsJevJtdDl0Jd0DFiN9D7qjmAJcx9gN/mLvwfAjJEY+QOZ35kMUn0qDAI3I30HsxVIV2J2LtlUPwHsQ3oIs3uAbQ2/vyTyhMDjZtk7qPD2Zak7PzMr54BBMZiRAmYzyAQYJot7vHC9DAsadR8Jgfea8SS0rgk+QXY2r6yGG8TMnMxbPETRayzeUyIKgVZBADMOhcC9ZbdeJ9kpVYEQWG/W9K3b9wU2SpmDcCpC4m/AL4plLQKYsQO4v0qjqkQIrDPjxZayDjd9X8r85FMJEi+SLU+3YJQAZjwN3F2FUVUiBNaY8ff28o6RmcQcd35pxqLyTSsfEo+HwHVmo6PejgckzNgbAt+QUq8TVA+JoyHwtU7kYfxDUvcDa8oxqxpIKATuAB4e655xFyckTnfnbjM+mNy6CiCxLgQ+a1ZfYh+NiRyUXODOfWbpd47LhMRjIXCD2fh+TbdzgpixKwRWSvw5nXnlQmJLCHy6G3mYgAAAZmwLgeUS207evHIh8ccQWNHpk9cJExIAGiIsk/jV6zevXEhsDIGPTZT8623kjBj5doycSL1ScxIrPMdj5JuV/VAl0SOxIkZ2/BeQf1ri+m6HossSYm6MfDfl2YJJED8QI3dI2R7flELishj5UYwcqID4/hhZLaX5LCfdE5RY5NlRu2XAPLNszTFBvSeAf4TAemC9GTtT1Avl/TrbDyxx5xqyhdZzgNPNJvaPXx6DvEK2e/NoCGwCfm9W2HBMhNLPZ+aHEucCFwHnA/Py/Fk0DxEcI/theg/ZkvVfydbtXjIrYWOwgP8AFQpZgB4xgx4AAAAASUVORK5CYII="); }',
            "",
        ]),
            (t.default = s);
    },
    function (e, t, r) {
        "use strict";
        r.r(t);
        r(1);
        //loadStage();
        const i = ["course", "drizzler", "tool"],
            s = [
                [255, 255, 1],
                [255, 1, 255],
                [1, 255, 255],
                [255, 1, 1],
                [1, 1, 255],
                [1, 255, 1],
                [255, 127, 1],
                [1, 255, 127],
                [127, 1, 255],
                [127, 255, 1],
                [1, 127, 255],
                [255, 1, 127],
            ],
            n = { "squid-a": {}, "squid-b": {}, "squid-c": {}, "squid-d": {}, steelhead: { range: 200, blast: 50 }, scrapper: {}, maws: {}, stinger: {}, flyfish: {}, steeleel: {}, flipper: {}, bigshot: {}, slamminlid: { range: 140, }, fishstick: {},  mudmouth: {}, griller: {}, goldie: {}, chum: {}, "egg-golden": {} },
            a = ["rgb(150,220,150)", "rgb(217,255,217)", "rgb(217,255,217)"],
            o = ["rgb(255,160,255)", "rgb(255,200,255)", "rgb(255,200,255)"],
            h = "A".charCodeAt(),
            l = Math.floor(60),
            
            c = {
                shakeup: {
                    normal: {
                        name: { ja: "シェケナダム通常潮", en: "Spawning-Grounds-Normal-Tide" },
                        parks: [
                            [-29.1597, -1.9214],  //A Mid
                            [-42.7347, 21.2972], //B Mid
                            [-63.6533, 20.5737], //C Mid
                            [-49.5511, -6.2496], //D Mid
                            [-67.63, -13.5981], //E Mid
                            [-29.62, -26.5089], //F Mid
                            [-19.334, -37.6614], //G Mid
                            [-4.276, -34.5676], //H Mid
                            [-0.077, -9.931], //I Mid
                            [8.43933, 5.187028], //J Mid
                            [-9.016, 7.743], //K Mid
                            [3.735916, 23.877], //L Mid
                        ],
                        lines: ["LK", "LJ", "JK", "IJ", "IK", "IA", "IF", "IG", "IH", "KA", "AF", "FG", "GH", "AB", "BD", "DA", "DF", "FE", "ED", "CB", "CD", "CE"],
                        width: 2400,
                        height: 2400,
                        scale: 0.7,
                        regX: 880,
                        regY: 1060,
                        rotation: 180,
                        homes: [
                            [-14.39715, -9.259785],
                            [-18.64625, -9.366473],
                            [-16.62718, -6.959239],
                            [-16.42698, -11.78468],
                        ],
                        spawners: [
                            {
                                name: "shomen",
                                probability: 35,
                                vertexes: [
                                    [-17.25, 45.75],
                                    [3, 48],
                                    [17.25, 34.5],

                                    [25.5, 24],
                                    [28.5, 15.75],
                                    [30.75, -2.25],
                                    [15, -20.25],
                                ],
                            },
                            {
                                name: "kanaami",
                                probability: 35,
                                vertexes: [
                                    [-27.75, -73.5],
                                    [-9.574576, -59.85441],
                                    [5.259169, -54.155],
                                ],
                            },
                            {
                                name: "kancho",
                                probability: 30,
                                vertexes: [
                                    [-58.9402, 30],
                                    [-67.5, 30],
                                    [-75.75, 12],

                                    [-48.80204, -27.75],
                                    [-35.10831, 20.69544],
                                ],
                            },
                        ],
                    },
                    high: {
                        name: { ja: "シェケナダム満潮", en: "Spawning-Grounds-High-Tide" },
                        excludeParks: ["L", "J", "H", "G", "B", "C", "D"],
                        pushedParks: { 
                            0: [-27.19, -1.9251], //A
                            4: [-64.17, -13.95], //E
                            5: [-29.8, -26.5], //F
                            8: [-1.13, -10.17], //I
                            10: [-9.016, 7.74], //K
                        },
                        additionalLines: ["EA"],
                        spawners: [
                            {
                                name: "shomen", //Enemy0
                                probability: 35,
                                vertexes: [
                                    [-15, 12.75],
                                    [3, 2.25],
                                    [-3.75, 11.25],
                                ],
                            },
                            {
                                name: "kanaami", //Enemy1
                                probability: 35,
                                vertexes: [
                                    [0.75, 21.75],
                                    [-21, -26.71686],
                                ],
                            },
                            {
                                name: "kancho", //Enemy2
                                probability: 30,
                                vertexes: [
                                    [-52.5, 20.25],
                                    [-61.06263, -3.180546],
                                    //[-58.9402, 871],
                                ],
                            },
                        ],
                    },
                    low: {
                        name: { ja: "シェケナダム干潮", en: "Spawning-Grounds-Low-Tide" },
                        parks: [
                            [34.328, 23.44], //A Low
                            [24.7878, 57.3192], //B low
                            [4.77, 38.5832], //C Low
                            [7.6682, 5.6735], //D Low
                            [28.49, -9.314],//E Low
                            [59.06, -0.5175], //F Low
                            [51.2792, 30.3778], //G Low 
                            [-0.077, -9.931], //H Low
                            [-21.016, 8.743], //I Low
                            [-15.3, 23.21], //J Low
                            
                            //[-4.276, -34.5676], 
                            //[-67.63, -13.5981], 
                            //[-31.12, -26.5], 
                            //[-63.6533, 20.5737], 
                            //[-29.1597, -1.9214], 
                            //[-21.834, -37.6614], 
                        ],
                        lines: ["FE", "FA", "GA", "GE", "BA", "BC", "AE", "AD", "AC", "ED", "CD", "DH", "DI", "DJ", "HI", "JI", "CJ"],
                        width: 2400,
                        height: 2400,
                        scale: 0.6,
                        regX: 1349,
                        regY: 1313,
                        rotation: 237.5,
                        homes: [
                            [14.59864, 9.448983],
                            [14.9337, 13.27644],
                            [9.444763, 24.53551],
                            [11.88504, 21.61312],
                        ],
                        spawners: [
                            {
                                name: "shomen",
                                probability: 35,
                                vertexes: [
                                    [33, 74.32392],
                                    [16.83033, 75.41009],
                                    [7.5, 66.75],
                                ],
                            },
                            {
                                name: "hidari",
                                probability: 35,
                                vertexes: [
                                    [75.75, 45.75],
                                    [72.75, 26.25],
                                    [65.25, 51.75],
                                    [77.25, 35.25],
                                    [54, 54.75],
                                ],
                            },
                            {
                                name: "migi",
                                probability: 30,
                                vertexes: [
                                    [78, 14.25],
                                    [82.19252, 1.39984],
                                    [76.5, -9.75],
                                    [81, 7.5],
                                    [65.25, -13.5],
                                    [-52.5, 20.25],
                                ],
                            },
                        ],
                    },
                },
                shakeship: {
                    normal: {
                        name: { ja: "ドンブラコ通常潮", en: "Marooners-Bay-Normal-Tide" },
                        parks: [
                            [-36, -7.25], //A
                            [-18, 5.5], //B
                            [-6.5, -8.5], //C
                            [0, 3.5], //D
                            [10.5, -5.25], //E
                            [13.25, 8.5], //F
                            [19.75, 0], //G
                            [27.25, 14.75], //H
                            [-26.25, -34.25], //I
                            [-16.75, -22.25], //J
                            [-11, -40.5],  //K
                            [11.75, -22.5], //L
                            [18.25, -43], //M
                            [24, -9], //N
                            [31.75, -18.5], //O
                            [41.75, -3], //P
                            [41.75, 12.5], //Q
                            [35, 20.75], //R
                            [13.25, 21.25], //S
                            [-8.25, 17], //T
                            [-24, 29], //U
                            [-37.5, 27.25], //V

                        ],
                        lines: ["ML", "KJ", "IJ", "LJ", "JC", "CA", "LN", "ON", "OP", "PN", "PQ", "QR", "QH", "HR", "HG", "GF", "FH", "SR", "SF", "ST", "GN", "NE", "EG", "DE", "DF", "DC", "DB", "TU", "UV", "BA", "EC", "BT", "CB", "OL"],
                        width: 2400,
                        height: 2400,
                        scale: 0.66,
                        regX: 1205,
                        regY: 1120,
                        rotation: -90,
                        homes: [
                            [-40.25, -2.25],
                            [-38.5, -1],
                            [-38.5, 1],
                            [-40.25, 2.25],
                        ],
                        spawners: [
                            {
                                name: "shomen",
                                probability: 35,
                                vertexes: [
                                    [-24.5, -50],
                                    [34.25, -44.5],
                                    [7, -66.75],
                                    [-9.5, -52.75],
                                ],
                            },
                            {
                                name: "hidari",
                                probability: 30,
                                vertexes: [
                                    [52.75, -18.5],
                                    [29, 35],
                                    [54.25, 3.5],
                                    [52.75, 16.75],
                                    [40, 31.25],
                                ],
                            },
                            {
                                name: "migi",
                                probability: 35,
                                vertexes: [
                                    [-20.75, 45],
                                    [-46.5, 39.25],
                                    [-10.5, 40.5],
                                    [-55.75, 24],
                                    [-34.75, 46.5],
                                ],
                            },
                        ],
                    },
                    high: {
                        name: { ja: "ドンブラコ満潮", en: "Marooners-Bay-High-Tide" },
                        regX: 1205,
                        regY: 1170,
                        excludeParks: ["K", "I", "J", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
                        pushedParks: {
                            0: [-36, -7.25], //High A
                            1: [-18, 5.5], //High B
                            2: [-6.5, -8.5], //High C
                            3: [0, 3.5], //High D
                            4: [10.5, -5.25], //High E
                            5: [13.25, 8.5], //High F
                            6: [19.75, 0], //High G
                            7: [27.25, 14.75], //High H
                        },
                        additionalLines: [],
                        spawners: [
                            {
                                name: "shomen",
                                probability: 35,
                                vertexes: [
                                    [25.5, -14],
                                    [32.75, -13.75],
                                    //[998, 443],
                                ],
                            },
                            {
                                name: "hidari",
                                probability: 30,
                                vertexes: [
                                    [33.25, -7],
                                    [31.5, 20.25],
                                    //[946, 530],
                                ],
                            },
                            {
                                name: "migi",
                                probability: 35,
                                vertexes: [
                                    [17.75, 20.25],
                                    [10, 20.25],
                                    //[1147, 629],
                                ],
                            },
                        ],
                    },
                    low: {
                        name: { ja: "ドンブラコ干潮", en: "Marooners-Bay-Low-Tide" },
                        parks: [
                            [-51.5, 23.25], //A
                            [-65.5, 32], //B
                            [-75.5, 36.25], //C
                            [-86.75, 27.75], //Low D
                            [-87.25, 4.25], //E
                            [-63, -1.5], //F
                            [-52.75, -9.25], //G
                            [-70.75, -28], //H
                            [-38, -22.5], //I
                            [-36.25, 5.5], //J
                            [-36.25, -7.25], //K
                            [-37.75, 27.25], //L
                            //[10.25, -5.25],
                            //[-0.25, 3.5],
                            //[-11.25, -40.5],
                            //[13, 8.5],
                            //[13, 21.25],
                            //[-6.755469, -8.422655],
                            //[41.5, -3],
                            //[18, -43],
                            //[-24.25, 29],
                            //[-17, -22.25],
                            //[27, 14.75],
                            //[34.75, 20.75],
                            //[-8.5, 17],
                            //[41.5, 12.5],
                            //[-18.25, 5.5],
                            //[31.5, -18.5],
                            //[19.5, 0],
                            //[11.5, -22.5],
                            //[-26.5, -34.25],
                            //[23.75, -9.000001],
                        ],
                        lines: ["AB", "BC", "CD", "DE", "EF", "FA", "AL", "AJ", "JK", "KG", "GF", "GI", "GH"],
                        width: 2400,
                        height: 2400,
                        scale: 0.74,
                        regX: 740,
                        regY: 1220,
                        rotation: 90,
                        homes: [
                            [-39.25, 4.5],
                            [-39.24968, -4.5],
                            [-40.5, 1.5],
                            [-40.5, -1.5],
                        ],
                        spawners: [
                            {
                                name: "shomen",
                                probability: 35,
                                vertexes: [
                                    [-88, -28.5],
                                    [-83.5, -41.75],
                                    [-69.5, -46.5],
                                ],
                            },
                            {
                                name: "hidari",
                                probability: 35,
                                vertexes: [
                                    [-99, 21],
                                    [-103.5, -1],
                                    [-97, -11.25],
                                    [-103.75, 10.7],
                                ],
                            },
                            {
                                name: "migi",
                                probability: 30,
                                vertexes: [
                                    [-71.75, 51],
                                    [-95, 32.25],
                                    [-83.5, 50.25],
                                    [-92.5, 39],
                                ],
                            },
                        ],
                    },
                },
                shakespiral: {
                    normal: {
                        name: { ja: "Aシェケナダム通常潮", en: "Sockeye-Station-Normal-Tide" },
                        parks: [
                            [48.75, 16.5], 
                            [12.02213, 1.999771], 
                            [26, 26], 
                            [-2.293915, 25.75831], 
                            [5.494633, 48.81462], 
                            [34.5, 1.499771], 
                            [19.49463, 50.31462], 
                            [47, 48.5], 
                        ],
                        lines: ["CB", "CF", "CA", "CH", "CG", "CE", "CD", "BF", "FA", "AH", "HG", "GE", "ED", "DB"],
                        width: 2400,
                        height: 2400,
                        scale: 0.75,
                        regX: 1460,
                        regY: 1560,
                        rotation: 0,
                        homes: [
                            [46.5, 41.5],
                            [47.5, 45],
                            [44.5, 48],
                            [41, 47],
                        ],
                        spawners: [
                            {
                                name: "shomen",
                                probability: 35,
                                vertexes: [
                                    [49.53938, -1.3992],
                                    [20.72157, -20.04808],
                                    [30.77276, -19.6411],
                                ],
                            },
                            {
                                name: "kanaami",
                                probability: 35,
                                vertexes: [
                                    [-19.86098, 24.25905],
                                    [-1.058842, -9.118469],
                                    [10.66748, -19.10653],

                                    [-14.96098, 12.15905],
                                    [-2.558842, 5.881531],
                                ],
                            },
                            {
                                name: "kancho",
                                probability: 30,
                                vertexes: [
                                    [-22.48771, 44.05267],
                                    [-23.40578, 58.27251],
                                    [-5.458725, 81.80328],
                                    [-17.55873, 73.3033],
                                ],
                            },
                        ],
                    },
                    high: {
                        name: { ja: "Aシェケナダム満潮", en: "Sockeye-Station-High-Tide" },
                        parks: [
                            [49, 15.29999], 
                            [43.8, 51], 
                            [26, 26], 
                            [19.2, 49.5], 
                        ],
                        lines: ["AB", "AC", "BC", "BD", "CD"],
                        
                        excludeParks: [],
                        /*
                        pushedParks: { 
                        },*/
                        additionalLines: [],
                        
                        spawners: [
                            {
                                name: "shomen", //Enemy0
                                probability: 35,
                                vertexes: [
                                    [-4.486252, 58.95907],
                                    [12.29911, 44.82503],
                                    //[-3.75, 11.25],
                                ],
                            },
                            {
                                name: "kanaami", //Enemy1
                                probability: 35,
                                vertexes: [
                                    [15.5, 43.5],
                                    [14, 38.5],
                                ],
                            },
                            {
                                name: "kancho", //Enemy2
                                probability: 30,
                                vertexes: [
                                    [66, 16.5],
                                    [43.5, 10.5],
                                    //[-58.9402, 871],
                                ],
                            },
                        ],
                    },
                    low: {
                        name: { ja: "Aシェケナダム干潮", en: "Sockeye-Station-Low-Tide" },
                        parks: [
                            [-38, -23.5], 
                            [-7.191521, -18.55999], 
                            [-10.5, -45], 
                            [-19.91611, 3.35878], 
                            [-48.50005, 5.500206],
                            [4.5, 9.5], 
                            [48.5, 16.49977], 
                            [25.75294, 26.1353], 
                            [47, 48.5], 
                            [19.5, 50], 
                            [29.52213, 4.500229],
                            [-11.79391, 24.25831],
                            [12.89886, -10.50039],
                            [-10.49494, 54.81462],
                        ],
                        lines: ["AB", "AC", "AD", "AE", "BC", "BD", "DE", "BM", "BF", "DF", "DL", "FL", "FM", "FK", "FH", "MK", "KG", "GI", "IJ", "JN", "NL", "HK", "HG", "HI", "HJ", "HN", "HL"],
                        width: 2400,
                        height: 2400,
                        scale: 0.6,
                        regX: 1300,
                        regY: 1350,
                        rotation: 52,
                        homes: [
                            [-1.797695, 12.7843],
                            [2.523563, 11.16894],
                            [5.737995, 6.905766],
                            [5.611073, 2.710587],
                        ],
                        spawners: [
                            {
                                name: "shomen",
                                probability: 35,
                                vertexes: [
                                    [-57.09142, -29.66351],
                                    [-25.57679, -13.69005],
                                    [-47.92094, -41.49623],
                                ],
                            },
                            {
                                name: "hidari",
                                probability: 35,
                                vertexes: [
                                    [-30.84809, -0.4414864],
                                    [-63, -17],
                                    [-65.44569, -4.317926],
                                    [77.25, 35.25],
                                    [54, 54.75],
                                ],
                            },
                            {
                                name: "migi",
                                probability: 30,
                                vertexes: [
                                    [-37.16627, -49.81982],
                                    [-14.3, -22.9],
                                    [-26.57914, -55.42856],
                                ],
                            },
                        ],
                    },
                },
                shakedent: {
                    normal: {
                        name: { ja: "Aシェケナダム通常潮", en: "Gone-Fission-Hydroplant-Normal-Tide" },
                        parks: [
                            [-32.24969, 23.029], 
                            [-26, 3.5], 
                            [-17, 17], 
                            [-19, 50], 
                            [5.712739, 27.4131], 
                            [17.92322, 18.10565], 
                            [18, 49], 
                            [0.8873491, 54.83287], 
                            [24, 3.5],
                            [38.58512, 17.06417],
                            [0, 3],

                        ],
                        lines: ["AB", "BK", "KI", "IJ", "JF", "FG", "GH", "HD", "DA", "CA", "CB", "CK", "CE", "CD", "FK", "FI", "FE", "EG", "EH", "ED"],
                        width: 2400,
                        height: 2400,
                        scale: 0.72,
                        regX: 1200,
                        regY: 1500,
                        rotation: 0,
                        homes: [
                            [6, 45.5],
                            [6.75, 42],
                            [-0.4999973, 44],
                            [2.25, 46.5],
                        ],
                        spawners: [
                            {
                                name: "shomen",
                                probability: 35,
                                vertexes: [
                                    [-35.75, 13.5],
                                    [-48, 25.25],
                                    [-36, 39],
                                    [-36, 51],
                                    
                                ],
                            },
                            {
                                name: "kanaami",
                                probability: 35,
                                vertexes: [
                                    [-12, -9.5],
                                    [16.5, -9.5],
                                    [7.5, -9.5],
                                    
                                ],
                            },
                            {
                                name: "kancho",
                                probability: 30,
                                vertexes: [
                                    [54, 30],
                                    [54, 21],
                                    [54, 12],
                                ],
                            },
                        ],
                    },
                    high: {
                        name: { ja: "Aシェケナダム満潮", en: "Gone-Fission-Hydroplant-High-Tide" },
                        parks: [
                            [18, 49], 
                            [17.5, 23.5], 
                            [-14.5, 46.20302], 
                            [-11.5, 22.5], 
                            [0.8873491, 54.34407],
                        ],
                        lines: ["AE", "EC", "CD", "DB", "BA", "BE"],
                        scale: 0.82,
                        regX: 1220,
                        regY: 1640,
                        excludeParks: [],
                        /*
                        pushedParks: { 
                        },*/
                        additionalLines: [],
                        
                        spawners: [
                            {
                                name: "shomen", //Enemy0
                                probability: 35,
                                vertexes: [
                                    [-25, 40.5],
                                ],
                            },
                            {
                                name: "kanaami", //Enemy1
                                probability: 35,
                                vertexes: [
                                    [-0.078848, 24],
                                ],
                            },
                            {
                                name: "kancho", //Enemy2
                                probability: 30,
                                vertexes: [
                                    [36.91446, 23.8059],
                                ],
                            },
                        ],
                    },
                    low: {
                        name: { ja: "Aシェケナダム干潮", en: "Gone-Fission-Hydroplant-Low-Tide" },
                        parks: [
                            [17.94444, -53.37992], 
                            [-9, -43.66984], 
                            [11.70473, -35.86948], 
                            [16.12283, -19], 
                            [-28, -44.5],
                            [-27.5, -23.25], 
                            [-9.75, -10.5], 
                            [-10.82577, -27.69094], 
                            [-36.74969, 27.5], 
                            [-26, 3.5], 
                            [18, 49],
                            [5.212739, 29.4131],
                            [-13.94642, 18.04288],
                            [-19, 50.19182],
                            [-0.6126509, 54.83287],
                            [35, 9],
                            [18.92322, 23.10565],
                            [-6.63644, -60.66984],
                            [9.75, 2.5],
                        ],
                        lines: ["AC", "CD", "DS", "SP", "PQ", "QL", "LM", "MI", "IJ", "JF", "FE", "ER", "RA", "BR", "BC", "BH", "BE", "HC", "HG", "HF", "GF", "GD", "GS", "GJ", "SQ", "MS", "MJ",
                    "QK", "KO", "ON", "NI", "MN", "LO", "LK"
                    ],
                        width: 2400,
                        height: 2400,
                        scale: 0.62,
                        regX: 1160,
                        regY: 1240,
                        rotation: 0,
                        homes: [
                            [-13.24283, 8.620907],
                            [-8.692467, 9.782866],
                            [-4.131876, 8.768911],
                            [-1.5, 5.5],
                        ],
                        spawners: [
                            {
                                name: "shomen",
                                probability: 35,
                                vertexes: [
                                    [-41.05264, -74.53002],
                                    [-28.55264, -74.53002],
                                    [-50.05264, -67.03002],
                                    [-50.29672, -54.19886],
                                    
                                ],
                            },
                            {
                                name: "hidari",
                                probability: 35,
                                vertexes: [
                                    [-5, -76],
                                    [-13, -76.5],
                                    [-9, -76.5],

                                ],
                            },
                            {
                                name: "migi",
                                probability: 30,
                                vertexes: [
                                    [18.5, -73.5],
                                    [7.5, -73],
                                    [13, -73.5],
                                ],
                            },
                        ],
                    },
                },
                
                shaketoba: {
                    normal: {
                        name: { ja: "シャケト場通常潮", en: "Lost-Outpost-Normal-Tide" },
                        parks: [
                            [1134, 875],
                            [1040, 801],
                            [903, 912],
                            [893, 1142],
                            [808, 1112],
                            [566, 1228],
                            [743, 914],
                            [457, 953],
                            [545, 749],
                            [858, 694],
                            [872, 434],
                            [988, 322],
                            [1060, 640],
                            [1160, 517],
                            [1265, 682],
                            [1492, 657],
                            [1422, 764],
                            [1232, 868],
                            [1397, 905],
                            [1260, 1109],
                        ],
                        lines: ["FE", "ED", "DT", "TR", "TS", "RS", "RO", "OQ", "QR", "OP", "RA", "AB", "BC", "CG", "GE", "EH", "HG", "HI", "IJ", "JG", "JM", "MB", "MO", "ON", "LK", "LN", "KN", "KJ", "NM"],
                        width: 2e3,
                        height: 2e3,
                        scale: 0.569,
                        regX: 957,
                        regY: 772,
                        rotation: 0,
                        homes: [
                            [982, 810],
                            [982, 854],
                            [1040, 854],
                            [1040, 810],
                        ],
                        spawners: [
                            {
                                name: "shomen",
                                probability: 35,
                                vertexes: [
                                    [835, 227],
                                    [984, 269],
                                    [1120, 267],
                                ],
                            },
                            {
                                name: "hidari",
                                probability: 35,
                                vertexes: [
                                    [471, 731],
                                    [404, 947],
                                    [510, 1192],
                                ],
                            },
                            {
                                name: "migi",
                                probability: 30,
                                vertexes: [
                                    [1527, 691],
                                    [1501, 803],
                                    [1455, 930],
                                ],
                            },
                        ],
                    },
                    high: {
                        name: { ja: "シャケト場満潮", en: "Lost-Outpost-High-Tide" },
                        excludeParks: ["I", "H", "F", "E", "D", "S", "Q", "P", "N", "L", "K"],
                        pushedParks: { 19: [1199, 1039] },
                        additionalLines: [],
                        spawners: [
                            {
                                name: "shomen",
                                probability: 35,
                                vertexes: [
                                    [924, 566],
                                    [1032, 568],
                                    [1127, 568],
                                ],
                            },
                            {
                                name: "hidari",
                                probability: 35,
                                vertexes: [
                                    [684, 731],
                                    [682, 921],
                                    [782, 1046],
                                ],
                            },
                            {
                                name: "migi",
                                probability: 30,
                                vertexes: [
                                    [1366, 712],
                                    [1290, 884],
                                    [1192, 1109],
                                ],
                            },
                        ],
                    },
                    low: {
                        name: { ja: "シャケト場干潮", en: "Lost-Outpost-Low-Tide" },
                        parks: [
                            [1255, 1312],
                            [1373, 1322],
                            [1488, 1588],
                            [1248, 1514],
                            [1256, 1695],
                            [936, 1616],
                            [894, 1446],
                            [1038, 1312],
                            [1157, 1140],
                            [1331, 1159],
                            [1265, 1117],
                            [890, 1145],
                        ],
                        lines: ["DE", "DC", "DB", "DA", "DH", "DF", "CB", "BA", "AH", "HG", "GF", "AJ", "AI", "BJ", "JK", "KI", "IH", "HL", "HI"],
                        width: 2e3,
                        height: 2e3,
                        scale: 0.737,
                        regX: 1192,
                        regY: 1314,
                        rotation: 180,
                        homes: [
                            [1198, 1377],
                            [1130, 1377],
                            [1130, 1313],
                            [1198, 1313],
                        ],
                        spawners: [
                            {
                                name: "shomen",
                                probability: 35,
                                vertexes: [
                                    [1330, 1805],
                                    [1255, 1806],
                                    [1198, 1805],
                                ],
                            },
                            {
                                name: "hidari",
                                probability: 30,
                                vertexes: [
                                    [1563, 1666],
                                    [1520, 1668],
                                    [1479, 1668],
                                ],
                            },
                            {
                                name: "migi",
                                probability: 35,
                                vertexes: [
                                    [1012, 1802],
                                    [897, 1798],
                                    [843, 1798],
                                ],
                            },
                        ],
                    },
                },
                tokishirazu: {
                    normal: {
                        name: { ja: "トキシラズ通常潮", en: "Salmonid-Smokeyard-Normal-Tide" },
                        parks: [
                            [768, 1027],
                            [607, 1135],
                            [568, 1293],
                            [575, 977],
                            [481, 910],
                            [543, 687],
                            [664, 719],
                            [758, 669],
                            [851, 691],
                            [937, 762],
                            [1021, 838],
                            [1027, 964],
                            [894, 1046],
                            [960, 1227],
                        ],
                        lines: ["CB", "BA", "AM", "MN", "ML", "LK", "KJ", "JM", "JI", "IH", "HG", "GF", "FE", "ED", "GD", "DB"],
                        width: 2e3,
                        height: 2e3,
                        scale: 0.777,
                        regX: 726,
                        regY: 976,
                        rotation: 0,
                        homes: [
                            [757, 1062],
                            [667, 1062],
                            [667, 965],
                            [757, 965],
                        ],
                        spawners: [
                            {
                                name: "hidari",
                                probability: 35,
                                vertexes: [
                                    [539, 505],
                                    [381, 633],
                                    [385, 897],
                                ],
                            },
                            {
                                name: "ura",
                                probability: 30,
                                vertexes: [
                                    [1127, 1036],
                                    [951, 1390],
                                    [541, 1378],
                                ],
                            },
                            {
                                name: "migi",
                                probability: 35,
                                vertexes: [
                                    [1012, 495],
                                    [1121, 680],
                                    [1125, 849],
                                ],
                            },
                        ],
                    },
                    high: {
                        name: { ja: "トキシラズ通常潮", en: "Salmonid-Smokeyard-High-Tide" },
                        excludeParks: ["C", "E", "F", "K", "L", "N"],
                        additionalLines: [],
                        spawners: [
                            {
                                name: "hidari",
                                probability: 35,
                                vertexes: [
                                    [588, 578],
                                    [514, 629],
                                    [535, 734],
                                ],
                            },
                            {
                                name: "ura",
                                probability: 30,
                                vertexes: [
                                    [488, 1051],
                                    [746, 1196],
                                    [943, 970],
                                ],
                            },
                            {
                                name: "migi",
                                probability: 35,
                                vertexes: [
                                    [958, 578],
                                    [1035, 665],
                                    [1001, 767],
                                ],
                            },
                        ],
                    },
                    low: {
                        name: { ja: "トキシラズ干潮", en: "Salmonid-Smokeyard-Low-Tide" },
                        parks: [
                            [1184, 887],
                            [1250, 1058],
                            [1026, 1077],
                            [1429, 1080],
                            [1356, 1227],
                            [1564, 1154],
                            [1614, 1031],
                            [1616, 779],
                            [1564, 668],
                            [1514, 547],
                            [1412, 629],
                            [1243, 537],
                            [1225, 691],
                            [1337, 755],
                            [1026, 803],
                        ],
                        lines: ["GH", "HI", "IJ", "IK", "KJ", "KL", "KN", "NM", "LM", "MO", "OC", "CB", "BA", "AN", "GF", "FD", "FE", "ED", "DB", "BE"],
                        width: 2e3,
                        height: 2e3,
                        scale: 0.777,
                        regX: 1267,
                        regY: 890,
                        rotation: -90,
                        homes: [
                            [1228, 853],
                            [1228, 931],
                            [1228, 776],
                            [1228, 1008],
                        ],
                        spawners: [
                            {
                                name: "hidari",
                                probability: 35,
                                vertexes: [
                                    [1781, 570],
                                    [1781, 660],
                                    [1781, 750],
                                ],
                            },
                            {
                                name: "chuo",
                                probability: 30,
                                vertexes: [
                                    [1781, 763],
                                    [1781, 892],
                                    [1781, 1021],
                                ],
                            },
                            {
                                name: "migi",
                                probability: 35,
                                vertexes: [
                                    [1781, 1021],
                                    [1781, 1111],
                                    [1781, 1201],
                                ],
                            },
                        ],
                    },
                },
                porarisu: {
                    normal: {
                        name: { ja: "ポラリス通常潮", en: "Ruins-of-Ark-Polaris-Normal-Tide" },
                        parks: [
                            [962, 731],
                            [788, 797],
                            [883, 636],
                            [918, 507],
                            [832, 423],
                            [628, 411],
                            [628, 639],
                            [907, 862],
                            [982, 921],
                            [880, 1062],
                            [684, 836],
                            [1223, 918],
                            [1428, 932],
                            [1428, 718],
                            [1235, 833],
                            [1228, 654],
                            [1152, 590],
                            [1341, 502],
                            [1299, 317],
                            [1111, 313],
                        ],
                        lines: ["TS", "SR", "RP", "PN", "NM", "ML", "LO", "OP", "PQ", "QC", "CA", "AO", "OI", "IH", "HA", "IL", "IJ", "JK", "KB", "BC", "BG", "GF", "FE", "ED", "DC", "DT", "QA"],
                        width: 2e3,
                        height: 2e3,
                        scale: 0.659,
                        regX: 1036,
                        regY: 755,
                        rotation: 0,
                        homes: [
                            [1106, 707],
                            [1015, 707],
                            [1015, 791],
                            [1106, 791],
                        ],
                        spawners: [
                            {
                                name: "shomen",
                                probability: 35,
                                vertexes: [
                                    [1129, 164],
                                    [991, 338],
                                    [888, 335],
                                ],
                            },
                            {
                                name: "ura",
                                probability: 30,
                                vertexes: [
                                    [947, 1105],
                                    [657, 989],
                                    [651, 748],
                                ],
                            },
                            {
                                name: "migi",
                                probability: 35,
                                vertexes: [
                                    [1323, 168],
                                    [1404, 466],
                                    [1408, 604],
                                ],
                            },
                        ],
                    },
                    high: {
                        name: { ja: "ポラリス満潮", en: "Ruins-of-Ark-Polaris-High-Tide" },
                        excludeParks: ["F", "E", "D", "T", "S", "R", "N", "M", "L", "J", "K", "B", "G"],
                        additionalLines: [],
                        spawners: [
                            { name: "hidari", probability: 35, vertexes: [[848, 709]] },
                            { name: "ura", probability: 30, vertexes: [[1164, 898]] },
                            { name: "migi", probability: 35, vertexes: [[1206, 580]] },
                        ],
                    },
                    low: {
                        name: { ja: "ポラリス干潮", en: "Ruins-of-Ark-Polaris-Low-Tide" },
                        parks: [
                            [1168, 1351],
                            [935, 1354],
                            [1060, 1161],
                            [873, 1062],
                            [647, 1182],
                            [652, 1370],
                            [743, 1683],
                            [890, 1729],
                            [1211, 1692],
                            [1428, 1539],
                            [1478, 1269],
                            [1260, 1031],
                        ],
                        lines: ["LC", "CD", "DE", "EC", "CB", "BE", "EF", "FG", "GB", "GH", "HI", "IJ", "JK", "KL", "KA", "AC", "AI", "AB"],
                        width: 2e3,
                        height: 2e3,
                        scale: 0.584,
                        regX: 1090,
                        regY: 1260,
                        rotation: 180,
                        homes: [
                            [1024, 1334],
                            [1127, 1334],
                            [1127, 1240],
                            [1024, 1240],
                        ],
                        spawners: [
                            {
                                name: "shomen",
                                probability: 35,
                                vertexes: [
                                    [1259, 1798],
                                    [1036, 1885],
                                    [813, 1820],
                                ],
                            },
                            {
                                name: "hidari",
                                probability: 35,
                                vertexes: [
                                    [1349, 1798],
                                    [1536, 1592],
                                    [1589, 1360],
                                ],
                            },
                            {
                                name: "migi",
                                probability: 30,
                                vertexes: [
                                    [651, 1735],
                                    [567, 1543],
                                    [582, 1300],
                                ],
                            },
                        ],
                    },
                },
            },
            p = {
                0: { jp: "ボールドマーカー", en: "Sploosh-o-matic", range: 16 },
                10: { jp: "わかばシューター", en: "Splattershot Jr.", range: 23 },
                20: { jp: "シャープマーカー", en: "Splash-o-matic", range: 24 },
                30: { jp: "プロモデラーMG", en: "Aerospray MG", range: 23 },
                40: { jp: "スプラシューター", en: "Splattershot", range: 26 },
                50: { jp: ".52ガロン", en: ".52 Gal", range: 28 },
                60: { jp: "N-ZAP85", en: "N-ZAP '85", range: 26 },
                70: { jp: "プライムシューター", en: "Splattershot Pro", range: 35 },
                80: { jp: ".96ガロン", en: ".96 Gal", range: 37 },
                90: { jp: "ジェットスイーパー", en: "Jet Squelcher", range: 46 },
                100: { jp: "スペースシューター", en: "Splattershot Nova", range: 35 },

                200: { jp: "ノヴァブラスター", en: "Luna Blaster", range: 16, blast: 7 },
                210: { jp: "ホットブラスター", en: "Blaster", range: 21, blast: 7 },
                220: { jp: "ロングブラスター", en: "Range Blaster", range: 28, blast: 7 },
                230: { jp: "クラッシュブラスター", en: "Clash Blaster", range: 19, blast: 7 },
                240: { jp: "ラピッドブラスター", en: "Rapid Blaster", range: 31, blast: 7 },
                250: { jp: "Rブラスターエリート", en: "Rapid Blaster Pro", range: 36, blast: 7 },

                300: { jp: "L3リールガン", en: "L-3 Nozzlenose", range: 31 },
                310: { jp: "H3リールガン", en: "H-3 Nozzlenose", range: 35 },

                400: { jp: "ボトルガイザー", en: "Squeezer", range: 41 },

                1e3: { jp: "カーボンローラー", en: "Carbon Roller", range: 17 },
                1010: { jp: "スプラローラー", en: "Splat Roller", range: 25 },
                1020: { jp: "ダイナモローラー", en: "Dynamo Roller", range: 41 },
                1030: { jp: "ヴァリアブルローラー", en: "Flingza Roller", range: 21 },
                1040: { jp: "ワイドローラー", en: "Big Swig Roller", range: 31 },
                1100: { jp: "パブロ", en: "Inkbrush", range: 16 },
                1110: { jp: "ホクサイ", en: "Octobrush", range: 21 },

                2e3: { jp: "スクイックリンα", en: "Classic Squiffer", range: 38 },
                2010: { jp: "スプラチャージャー", en: "Splat Charger", range: 52 },
                2020: { jp: "スプラスコープ", en: "Splatterscope", range: 56 },
                2030: { jp: "リッター4K", en: "E-liter 4K", range: 62 },
                2040: { jp: "4Kスコープ", en: "E-liter 4K Scope", range: 66 },
                2050: { jp: "14式竹筒銃・甲", en: "Bamboozler 14 Mk I", range: 43 },
                2060: { jp: "ソイチューバー", en: "Goo Tuber", range: 42 },
                2070: { jp: "R-PEN/5H", en: "Snipewriter 5H", range: 62 },

                3e3: { jp: "バケットスロッシャー", en: "Slosher", range: 31 },
                3010: { jp: "ヒッセン", en: "Tri-Slosher", range: 24 }, //11.5
                3020: { jp: "スクリュースロッシャー", en: "Sloshing Machine", range: 30, blast: 3 }, //14.5 , 
                3030: { jp: "オーバーフロッシャー", en: "Bloblobber", range: 39, blast: 11 },
                3040: { jp: "エクスプロッシャー", en: "Explosher", range: 42, blast: 5 },

                4e3: { jp: "スプラスピナー", en: "Mini Splatling", range: 32 },
                4010: { jp: "バレルスピナー", en: "Heavy Splatling", range: 45 },
                4020: { jp: "ハイドラント", en: "Hydra Splatling", range: 54 },
                4030: { jp: "クーゲルシュライバー", en: "Ballpoint Splatling", range: 51 },
                4040: { jp: "ノーチラス47", en: "Nautilus 47", range: 39 },

                5e3: { jp: "スパッタリー", en: "Dapple Dualies", range: 19 },
                5010: { jp: "スプラマニューバー", en: "Splat Dualies", range: 26 },
                5020: { jp: "ケルビン525", en: "Glooga Dualies", range: 31, blast: 4 },
                5030: { jp: "デュアルスイーパー", en: "Dualie Squelchers", range: 34 },
                5040: { jp: "クアッドホッパーブラック", en: "Dark Tetra Dualies", range: 28 },

                6e3: { jp: "パラシェルター", en: "Splat Brella", range: 26 },
                6010: { jp: "キャンピングシェルター", en: "Tenta Brella", range: 32 },
                6020: { jp: "スパイガジェット", en: "Undercover Brella", range: 26 },

                7010: { jp: "トライストリンガー", en: "Tri-Stringer", range: 54, blast: 4},
                7020: { jp: "LACT-450", en: "REEF-LUX 450", range: 36 },
                

                8e3:  { jp: "ジムワイパー", en: "Splatana Stamper", range: 44 },
                8010:  { jp: "ドライブワイパー", en: "Splatana Wiper", range: 37 },
                //8e3: { jp: "スプラッシュボム", en: "Bomb", range: 48, blast: 10 },
                //8010: { jp: "ボムピッチャー", en: "Bomb Rush", range: 60, blast: 10 },
                //8020: { jp: "ジェットパック", en: "Inkjet", range: 62 },
                //8030: { jp: "スーパーチャクチ", en: "Splashdown", range: 29 },
                //8040: { jp: "ハイパープレッサー", en: "Stringray" },

                20900: { jp: "クマサン印のブラスター", en: "Grizzco Blaster", range: 19,  blast: 7 },
                22900: { jp: "クマサン印のチャージャー", en: "Grizzco Charger", range: 62 },
                23900: { jp: "クマサン印のスロッシャー", en: "Grizzco Slosher", range: 42, blast: 3 },
                26900: { jp: "クマサン印のシェルター", en: "Grizzco Brella", range: 26 },
                27900: { jp: "クマサン印のストリンガー", en: "Grizzco Stringer", range: 60, blast: 4 },
                28900: { jp: "クマサン印のワイパー", en: "Grizzco Splatana", blast: 30 },
            },
            d = {
                cubicIn: (e, t, r, i) => r * (e /= i) * e * e + t,
                cubicOut: (e, t, r, i) => ((e /= i), r * ((e -= 1) * e * e + 1) + t),
                cubicInOut: (e, t, r, i) => ((e /= i / 2) < 1 ? (r / 2) * e * e * e + t : (r / 2) * ((e -= 2) * e * e + 2) + t),
            };
        function u(e, t, r, i, s) {
            let n = null,
                a = 0;
            const o = Array.isArray(e) ? e : [e],
                h = Object.keys(t),
                l = {},
                c = {},
                p = Math.floor(r / (1e3 / 60));
            h.forEach((e) => {
                (l[e] = o[0][e]), (c[e] = t[e] - o[0][e]);
            });
            const u = () => {
                if (((a += 1), !(a < p))) return s && s(), void clearTimeout(n);
                n = setTimeout(u, 1e3 / 60);
                const e = {};
                h.forEach((r) => {
                    if (a < p) {
                        const t = d[i](a, l[r], c[r], p);
                        e[r] = t;
                    } else e[r] = t[r];
                }),
                    o.forEach((t) => {
                        t.set(e);
                    });
            };
            u();
        }
        function g(e, t) {
            return e > 0 && e < 100 && t > 0 && t < 100;
        }
        function m(e, t) {
            const r = document.createElement("canvas");
            return r.setAttribute("width", e), r.setAttribute("height", t), r;
        }
        function f(e, t, r, i) {
            let s,
                n = !1,
                a = !1,
                o = 0,
                h = 0,
                l = 0,
                c = 0;
            t.set({ cursor: "pointer" }),
                t.on("mousedown", () => {
                    (i.isDraggable && !i.isDraggable()) || ((a = !0), (n = !1), (s = M()), (l = e.mouseX), (c = e.mouseY), (o = e.mouseX - r[0].x), (h = e.mouseY - r[0].y), i.onMouseDown && i.onMouseDown());
                }),
                t.on("pressmove", () => {
                    if (a)
                        if (i.isSticky) {
                            const t = Math.abs(e.mouseX - l) + Math.abs(e.mouseY - c);
                            if ((!n && t > 10 && ((n = !0), (o = e.mouseX - r[0].x), (h = e.mouseY - r[0].y), i.onMouseMoveStart && i.onMouseMoveStart()), n)) {
                                let t = e.mouseX - o,
                                    s = e.mouseY - h;
                                (t = Math.max(0, Math.min(e.canvas.width, t))),
                                    (s = Math.max(0, Math.min(e.canvas.height, s))),
                                    r.forEach((e) => {
                                        e.set({ x: t, y: s });
                                    }),
                                    i.throwTarget &&
                                        i.currentCourse.isTrashEnabled &&
                                        (g(e.mouseX, e.mouseY)
                                            ? (i.currentCourse.$$trashClose.set({ alpha: 0 }), i.currentCourse.$$trashOpen.set({ alpha: 1 }))
                                            : (i.currentCourse.$$trashClose.set({ alpha: 1 }), i.currentCourse.$$trashOpen.set({ alpha: 0 }))),
                                    i.onMouseMove && i.onMouseMove();
                            }
                        } else if ((n || ((n = !0), i.onMouseMoveStart && i.onMouseMoveStart()), n)) {
                            let t = e.mouseX - o,
                                s = e.mouseY - h;
                            (t = Math.max(0, Math.min(640, t))),
                                (s = Math.max(0, Math.min(960, s))),
                                r.forEach((e) => {
                                    e.set({ x: t, y: s });
                                }),
                                i.throwTarget &&
                                    i.currentCourse.isTrashEnabled &&
                                    (g(e.mouseX, e.mouseY)
                                        ? (i.currentCourse.$$trashClose.set({ alpha: 0 }), i.currentCourse.$$trashOpen.set({ alpha: 1 }))
                                        : (i.currentCourse.$$trashClose.set({ alpha: 1 }), i.currentCourse.$$trashOpen.set({ alpha: 0 }))),
                                i.onMouseMove && i.onMouseMove();
                        }
                }),
                t.on("pressup", () => {
                    if (!a) return;
                    a = !1;
                    const t = { x: e.mouseX, y: e.mouseY };
                    !n && i.onMouseUpQuick && performance.now() - s < 200 ? i.onMouseUpQuick() : i.onMouseUp && i.onMouseUp(t),
                        i.throwTarget &&
                            i.currentCourse.isTrashEnabled &&
                            (g(e.mouseX, e.mouseY) && (i.throwTarget.remove(), i.currentCourse.$$trashClose.set({ alpha: 1 }), i.currentCourse.$$trashOpen.set({ alpha: 0 })), i.onThrow && i.onThrow());
                });
        }
        function b(e, t) {
            const r = { x: 0, y: 0, regX: 0, regY: 0, rotation: 0, scale: 1, alpha: 1, compositeOperation: "source-over", ...t };
            (r.originScale = r.scale), (r.originAlpha = r.alpha), e.set(r);
        }
        function y(e, t, r) {
            const i = r || t;
            e.cache(-t, -i, 2 * t, 2 * i);
        }
        function $(e) {
            const t = new createjs.Bitmap(e.src);
            return b(t, e), t;
        }
        function A(e) {
            const t = { compositeOperation: "multiply", strokeColor: e.colors[e.colors.length - 1], ...e },
                r = new createjs.Shape();
            return r.graphics.setStrokeStyle(t.strokeWidth).beginStroke(t.strokeColor).beginRadialGradientFill(t.colors, t.colorRates, 0, 0, 0, 0, 0, t.radius).drawCircle(0, 0, t.radius), b(r, t), y(r, t.radius), r;
        }
        function x(e) {
            return (function (e) {
                const t = { text: "", style: "bold 20px sans-serif", color: "#000000", textAlign: "left", textBaseline: "top", ...e },
                    r = new createjs.Text(t.text, t.style, t.color);
                b(r, t), void 0 !== t.cacheRadius && y(r, t.cacheRadius);
                return r;
            })({ textAlign: "center", textBaseline: "middle", ...e });
        }
        function w() {
            const e = new createjs.Shape();
            e.graphics.beginFill("#000000").drawRect(0, 0, 44, 14), b(e, { regX: Math.floor(22), regY: Math.floor(41) });
            const t = new createjs.Shape();
            return t.graphics.beginFill("#00ff00").drawRect(0, 0, 40, 10), b(t, { regX: Math.floor(20), regY: 34 + Math.floor(5) }), [e, t];
        }
        function z(e, t) {
            return { x: t.x - e.x, y: t.y - e.y };
        }
        function v(e, t) {
            const r = t * (Math.PI / 180),
                i = Math.sin(r),
                s = Math.cos(r);
            return { x: -i * e.y + s * e.x, y: i * e.x + s * e.y };
        }
        function k(e) {
            const t = Math.asin(e.y / Math.sqrt(e.x ** 2 + e.y ** 2)) * (180 / Math.PI);
            let r;
            return (r = e.y > 0 ? (e.x > 0 ? t : 180 - t) : e.x > 0 ? 360 - Math.abs(t) : 180 + Math.abs(t)), r % 360;
        }
        const C = void 0 !== window.performance;
        function M() {
            return C ? window.performance.now() : new Date().getTime();
        }
        function j(e, t) {
            return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
        }
        function E(e, t) {
            if (!e || 0 === t.length) return [null, null];
            let r = 1 / 0,
                i = 0,
                s = t[0];
            return (
                t.forEach((t, n) => {
                    const a = j(e, t);
                    a < r && ((r = a), (i = n), (s = t));
                }),
                [s, i, r]
            );
        }
        function S(e, t) {
            const r = [];
            return (
                e.forEach((e) => {
                    for (let r = 0; r < t.length; r += 1) if (e === t[r].currentPark) return;
                    r.push(e);
                }),
                r
            );
        }
        function D(e) {
            const t = "string" == typeof e ? document.getElementById(e) : e,
                r = t.cloneNode(!1);
            t.parentNode.replaceChild(r, t);
        }
        function I(e, t = "canvas", r = "image/png") {
            const i = (function (e, t = "image/png") {
                    const r = "string" == typeof e ? document.getElementById(e) : e,
                        i = r.toDataURL(t).split(","),
                        s = atob(i[1]),
                        n = i[0].split(":")[1].split(";")[0];
                    let a = new Uint8Array(s.length);
                    for (let e = 0; e < s.length; e++) a[e] = s.charCodeAt(e);
                    return new Blob([a], { type: n });
                })(e, r),
                s = window.URL.createObjectURL(i),
                n = document.createEvent("MouseEvents");
            n.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
            const a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
            (a.href = s), (a.download = t), a.dispatchEvent(n);
        }
        const B = function (e, t, r) {
            (this.alphabet = e), (this.x = t), (this.y = r), (this.connectParks = []);
        };
        class T {
            constructor(e, t, r) {
                Object.keys(e).forEach((t) => {
                    this[t] = e[t];
                }),
                    (this.zMap = t),
                    (this.parks = []),
                    (this.pointer = r),
                    (this.isTrashEnabled = !1),
                    (this.isVisibleArrow = !0),
                    (this.isSelectingVoronoi = !1),
                    (this.isVisibleVoronoi = !1),
                    (this.isTogglingVoronoi = !1),
                    (this.shouldUpdateVoronoi = !0),
                    (this.isVisibleConnectMap = !0),
                    (this.isArrowUpdateStopped = !1),
                    (this.isVisibleDrizzlerCircle = !1),
                    (this.timerOfArrowUpdate = null),
                    (this.$$parentLayer = r.$$parentLayer),
                    (this.canvasWidth = this.pointer.canvasWidth),
                    (this.canvasHeight = this.pointer.canvasHeight),
                    this.parseDefine(e);
            }
            convertAllCoordinates(e) {
                "parks" in e &&
                    e.parks.forEach((e) => {
                        this.convertCoordinates(e);
                    }),
                    "homes" in e &&
                        e.homes.forEach((e) => {
                            this.convertCoordinates(e);
                        }),
                    "spawners" in e &&
                        e.spawners.forEach((e) => {
                            e.vertexes.forEach((e) => {
                                this.convertCoordinates(e);
                            });
                        });
            }
            convertCoordinates(e) {
                this.width, this.height;
                const t = v({ x: ((e[0] * 10) - this.regX + 1200) * this.scale, y: ((e[1] * 10)- this.regY + 1200) * this.scale }, this.rotation),
                    r = this.canvasWidth / 2 + t.x,
                    i = this.canvasHeight / 2 + t.y;
                (e[0] = r), (e[1] = i);
            }
            parseDefine(e) {
                this.convertAllCoordinates(e),
                    e.parks.forEach((e, t) => {
                        const r = ((i = t), String.fromCharCode(h + i));
                        var i;
                        this.parks.push(new B(r, e[0], e[1]));
                    }),
                    e.lines.forEach((e) => {
                        const t = e.charAt(0).toUpperCase(),
                            r = e.charAt(1).toUpperCase(),
                            i = this.getPark(t),
                            s = this.getPark(r);
                        i.connectParks.push(s), s.connectParks.push(i);
                    });
                for (let e = 0; e < this.parks.length; e += 1) {
                    0 === this.parks[e].connectParks.length && (this.parks.splice(e, 1), (e -= 1));
                }
            }
            getPark(e) {
                const t = parseInt(e, 10);
                if (!Number.isNaN(t)) return this.parks[t];
                for (let t = 0; t < this.parks.length; t += 1) if (this.parks[t].alphabet === e) return this.parks[t];
                return null;
            }
            paintVoronoi() {
                if (!this.isVisibleVoronoi) return void (this.shouldUpdateVoronoi = !0);
                const e = this.$$paint.image.getContext("2d"),
                    t = s;
                (e.fillStyle = "#ffffff"), e.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
                let r = null;
                if (
                    (this.pointer.drizzlers.forEach((e) => {
                        e.isEnabledVoronoi && (r = e);
                    }),
                    !r)
                )
                    return;
                const i = S(r.currentPark.connectParks, this.pointer.drizzlers);
                if (0 === i.length) return;
                if (1 === i.length) return (e.fillStyle = `rgb(${t[0][0]}, ${t[0][1]}, ${t[0][2]})`), void e.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
                const n = this.pointer.squids.length >= 2,
                    a = [];
                this.pointer.squids.forEach((e, t) => {
                    a[t] = { x: e.x, y: e.y };
                });
                const o = e.getImageData(0, 0, this.canvasWidth, this.canvasHeight);
                for (let e = 0; e < this.canvasWidth; e += 1)
                    for (let s = 0; s < this.canvasHeight; s += 1) {
                        let h;
                        if (n) {
                            (a[0].x = e), (a[0].y = s);
                            const t = E(r, a)[0];
                            [, h] = E(t, i);
                        } else [, h] = E({ x: e, y: s }, i);
                        const l = 4 * (e + s * this.canvasWidth);
                        [o.data[l + 0], o.data[l + 1], o.data[l + 2]] = t[h];
                    }
                e.putImageData(o, 0, 0), (this.shouldUpdateVoronoi = !1);
            }
            updateDrizzlerArrows(e) {
                clearTimeout(this.timerOfArrowUpdate),
                    (this.timerOfArrowUpdate = setTimeout(() => {
                        this.pointer.drizzlers.forEach((t) => {
                            t.updateArrow(e);
                        });
                    }, 10));
            }
            hideDrizzlerArrows() {
                this.pointer.drizzlers.forEach((e) => {
                    e.hideArrow();
                });
            }
            showDrizzlerArrows() {
                this.pointer.drizzlers.forEach((e) => {
                    e.showArrow();
                });
            }
            setNull() {
                (this.$$leftSeconds = null), (this.$$paint = null), (this.$$trashOpen = null), (this.$$trashClose = null), (this.$$connectMapContainer = null);
            }
            draw() {
                const e = new createjs.Shape();
                e.graphics.beginFill("#f2f2f2").rect(0, 0, this.canvasWidth, this.canvasHeight), this.$$parentLayer.addChild(e);
                const t = $({
                    src: this.image,
                    rotation: this.rotation,
                    scale: this.scale,
                    regX: this.width / 2 - (this.width / 2 - this.regX),
                    regY: this.height / 2 - (this.height / 2 - this.regY),
                    x: this.canvasWidth / 2,
                    y: this.canvasHeight / 2,
                });
                this.$$parentLayer.addChild(t),
                    (this.$$leftSeconds = new createjs.Text("", "bold 30px sans-serif", "black")),
                    (this.$$leftSeconds.x = 20),
                    (this.$$leftSeconds.y = 20),
                    this.$$parentLayer.addChild(this.$$leftSeconds),
                    (this.isTrashEnabled = !1),
                    this.pointer.isRTMode ||
                        ((this.isTrashEnabled = !0),
                        (this.$$trashOpen = new createjs.Bitmap(this.pointer.pieceImageDir + "/trash-open.png")),
                        this.$$trashOpen.set({ alpha: 0, x: 0, y: 0 }),
                        this.$$parentLayer.addChild(this.$$trashOpen),
                        (this.$$trashClose = new createjs.Bitmap(this.pointer.pieceImageDir + "/trash-close.png")),
                        this.$$trashClose.set({ alpha: 1, x: 0, y: 0 }),
                        this.$$parentLayer.addChild(this.$$trashClose)),
                    (this.$$connectMapContainer = new createjs.Container()),
                    this.$$parentLayer.addChild(this.$$connectMapContainer);
                const r = new createjs.Shape();
                this.parks.forEach((e) => {
                    const t = r.graphics;
                    t.beginFill("#ffffff"), t.drawCircle(e.x, e.y, 14);
                }),
                    r.cache(0, 0, this.width, this.height),
                    this.$$connectMapContainer.addChild(r);
                const i = new createjs.Shape();
                this.lines.forEach((e) => {
                    const t = e.charAt(0).toUpperCase(),
                        r = e.charAt(1).toUpperCase(),
                        s = this.getPark(t),
                        n = this.getPark(r);
                    i.graphics.setStrokeStyle(4, "round").beginStroke("#ffffff").moveTo(s.x, s.y).lineTo(n.x, n.y).endStroke();
                }),
                    this.lines.forEach((e) => {
                        const t = e.charAt(0).toUpperCase(),
                            r = e.charAt(1).toUpperCase(),
                            s = this.getPark(t),
                            n = this.getPark(r);
                        i.graphics.setStrokeStyle(2, "round").beginStroke("#00bcd4").moveTo(s.x, s.y).lineTo(n.x, n.y).endStroke();
                    }),
                    i.cache(0, 0, this.width, this.height),
                    this.$$connectMapContainer.addChild(i),
                    this.parks.forEach((e, t) => {
                        const r = new createjs.Shape().set({ x: e.x, y: e.y });
                        r.graphics.beginFill("#2196f3").drawCircle(0, 0, 13), y(r, 14), this.$$connectMapContainer.addChild(r);
                        const i = new createjs.Text(e.alphabet, "bold 20px sans-serif", "#ffffff").set({ textAlign: "center", textBaseline: "middle", x: e.x, y: e.y });
                        y(i, Math.ceil(10)), this.$$connectMapContainer.addChild(i);
                    }),
                    (this.$$paint = $({ src: m(this.canvasWidth, this.canvasHeight), alpha: 0.25, compositeOperation: "multiply" })),
                    this.$$parentLayer.addChild(this.$$paint);
            }
        }
        class P {
            constructor(e, t, r, i) {
                (this.pointer = i),
                    (this.brothers = i.rockets),
                    (this.$$parentLayer = i.$$parentLayer),
                    (this.frame = 0),
                    (this.isAlive = !0),
                    (this.next = { frame: -1, func: null }),
                    (this.maxLife = 100),
                    (this.currentLife = 100),
                    (this.isFirstMove = !0),
                    (this.isTurned = !1),
                    (this.hasArmor = !0),
                    this.draw(e, r),
                    this.setEvent(),
                    this.setVelocity(t),
                    this.setNext(60, () => {
                        (this.vx = 0),
                            (this.vy = 0),
                            (this.ax = 0),
                            (this.ay = 0),
                            this.removeArmor(),
                            (this.isFirstMove = !1),
                            this.setNext(140, () => {
                                this.isAlive && !this.isTurned && this.generateRain();
                            });
                    });
            }
            get x() {
                return this.$$container.x;
            }
            set x(e) {
                this.$$container.x = e;
            }
            get y() {
                return this.$$container.y;
            }
            set y(e) {
                this.$$container.y = e;
            }
            get z() {
                return this.$$container.z;
            }
            set z(e) {
                this.$$container.z = e;
            }
            get scale() {
                return this.$$container.scale;
            }
            set scale(e) {
                this.$$container.scale = e;
            }
            get alpha() {
                return this.$$container.alpha;
            }
            set alpha(e) {
                this.$$container.alpha = e;
            }
            set(e, t) {
                (this.x = e), (this.y = t);
            }
            draw(e, t) {
                (this.$$container = new createjs.Container()),
                    (this.$$rocketContainer = new createjs.Container()),
                    (this.$$lifeBarContainer = new createjs.Container()),
                    this.$$container.addChild(this.$$rocketContainer, this.$$lifeBarContainer),
                    (this.$$container.x = e.x),
                    (this.$$container.y = e.y),
                    (this.$$container.z = this.pointer.currentCourse.zMap.get(e.x, e.y)),
                    (this.$$rocketContainer.rotation = t),
                    (this.$$lifeBarContainer.alpha = 0),
                    (this.$$lifeBarContainer.originAlpha = 0),
                    this.$$parentLayer.addChild(this.$$container),
                    (this.$$rocket = $({ src: this.pointer.pieceImageDir + "/rocket.png", regX: 64, regY: 64, scale: 0.3125 })),
                    this.$$rocketContainer.addChild(this.$$rocket),
                    (this.$$rocketMeat = $({ src: this.pointer.pieceImageDir + "/rocket-meat.png", regX: 64, regY: 64, scale: 0.3125, alpha: 0 })),
                    this.$$rocketContainer.addChild(this.$$rocketMeat),
                    ([this.$$lifeBarBg, this.$$lifeBar] = w()),
                    this.$$lifeBarContainer.addChild(this.$$lifeBarBg),
                    this.$$lifeBarContainer.addChild(this.$$lifeBar);
            }
            setEvent() {
                (this.$$rocketContainer.cursor = "pointer"),
                    this.$$rocketContainer.on("mousedown", () => {
                        this.isAlive && (this.hasArmor || this.receiveDamage(85));
                    });
            }
            setVelocity(e) {
                const t = (e.x / 60) * 2,
                    r = (e.y / 60) * 2;
                let i = 0;
                for (let e = 1; e <= 60; e += 1) i += e;
                const s = (e.x - 60 * t) / i,
                    n = (e.y - 60 * r) / i;
                (this.vx = t), (this.vy = r), (this.ax = s), (this.ay = n), (this.vscale = 0), (this.valpha = 0);
            }
            tick() {
                if (((this.frame += 1), this.isFirstMove)) (this.vx += this.ax), (this.vy += this.ay), this.pointer.currentCourse.zMap.moveObjectWithZMap(this, 35);
                else if (this.isTurned) {
                    const e = this.pointer.currentCourse.zMap.moveObjectWithZMap(this, 35);
                    this.pointer.drizzlers.forEach((e) => {
                        j(this, e) < 30 && (this.die(), e.die());
                    }),
                        e < 1 && this.die();
                }
                (this.alpha += this.valpha), (this.scale += this.vscale), this.next.frame > -1 && this.frame >= this.next.frame && ((this.next.frame = -1), this.next.func());
            }
            removeArmor() {
                (this.hasArmor = !1), (this.$$rocketMeat.alpha = 1);
            }
            receiveDamage(e) {
                this.currentLife = Math.max(0, this.currentLife - e);
                const t = this.currentLife / this.maxLife;
                1 !== t && (this.$$lifeBarContainer.alpha = 1);
                const r = this.$$lifeBar.graphics;
                r.clear(), r.beginFill("#00ff00"), r.drawRect(0, 0, 40 * t, 10), 0 === this.currentLife && ((this.$$lifeBarContainer.alpha = 0), this.turn());
            }
            turn() {
                this.isTurned = !0;
                const e = k(z(this.pointer.squids[0] || { x: 0, y: 0 }, this)),
                    t = v({ x: 250 * this.pointer.currentCourse.scale, y: 0 }, e);
                (this.$$rocketContainer.rotation = e),
                    (this.vx = t.x / 50),
                    (this.vy = t.y / 50),
                    this.setNext(50, () => {
                        this.isAlive && this.die();
                    });
            }
            generateRain() {
                (this.hasArmor = !0),
                    (this.vscale = 0.02),
                    (this.valpha = -0.05),
                    this.setNext(20, () => {
                        this.die();
                    });
            }
            setNext(e, t) {
                (this.next.frame = this.frame + e), (this.next.func = t);
            }
            die() {
                (this.isAlive = !1), this.remove();
            }
            remove() {
                this.removeGraphics(), this.removeMeFromBrothers();
            }
            removeMeFromBrothers() {
                const e = this.brothers.indexOf(this);
                e > -1 && this.brothers.splice(e, 1);
            }
            removeGraphics() {
                this.$$parentLayer.removeChild(this.$$container);
            }
        }
        const L = {
            linearTween: (e, t, r, i) => (r * e) / i + t,
            easeInQuad: (e, t, r, i) => r * (e /= i) * e + t,
            easeOutQuad: (e, t, r, i) => -r * (e /= i) * (e - 2) + t,
            easeInOutQuad: (e, t, r, i) => ((e /= i / 2) < 1 ? (r / 2) * e * e + t : (-r / 2) * ((e -= 1) * (e - 2) - 1) + t),
            easeInCubic: (e, t, r, i) => r * (e /= i) * e * e + t,
            easeOutCubic: (e, t, r, i) => ((e /= i), r * ((e -= 1) * e * e + 1) + t),
            easeInOutCubic: (e, t, r, i) => ((e /= i / 2) < 1 ? (r / 2) * e * e * e + t : (r / 2) * ((e -= 2) * e * e + 2) + t),
            easeInQuart: (e, t, r, i) => r * (e /= i) * e * e * e + t,
            easeOutQuart: (e, t, r, i) => ((e /= i), -r * ((e -= 1) * e * e * e - 1) + t),
            easeInOutQuart: (e, t, r, i) => ((e /= i / 2) < 1 ? (r / 2) * e * e * e * e + t : (-r / 2) * ((e -= 2) * e * e * e - 2) + t),
            easeInQuint: (e, t, r, i) => r * (e /= i) * e * e * e * e + t,
            easeOutQuint: (e, t, r, i) => ((e /= i), r * ((e -= 1) * e * e * e * e + 1) + t),
            easeInOutQuint: (e, t, r, i) => ((e /= i / 2) < 1 ? (r / 2) * e * e * e * e * e + t : (r / 2) * ((e -= 2) * e * e * e * e + 2) + t),
            easeInSine: (e, t, r, i) => -r * Math.cos((e / i) * (Math.PI / 2)) + r + t,
            easeOutSine: (e, t, r, i) => r * Math.sin((e / i) * (Math.PI / 2)) + t,
            easeInOutSine: (e, t, r, i) => (-r / 2) * (Math.cos((Math.PI * e) / i) - 1) + t,
            easeInExpo: (e, t, r, i) => r * Math.pow(2, 10 * (e / i - 1)) + t,
            easeOutExpo: (e, t, r, i) => r * (1 - Math.pow(2, (-10 * e) / i)) + t,
            easeInOutExpo: (e, t, r, i) => ((e /= i / 2) < 1 ? (r / 2) * Math.pow(2, 10 * (e - 1)) + t : ((e -= 1), (r / 2) * (2 - Math.pow(2, -10 * e)) + t)),
            easeInCirc: (e, t, r, i) => ((e /= i), -r * (Math.sqrt(1 - e * e) - 1) + t),
            easeOutCirc: (e, t, r, i) => ((e /= i), (e -= 1), r * Math.sqrt(1 - e * e) + t),
            easeInOutCirc: (e, t, r, i) => ((e /= i / 2) < 1 ? (-r / 2) * (Math.sqrt(1 - e * e) - 1) + t : ((e -= 2), (r / 2) * (Math.sqrt(1 - e * e) + 1) + t)),
        };
        class O {
            constructor(e) {
                (this.parentObject = e), (this.isUpdate = !1), (this.onComplete = null), (this.queue = []), (this.handle = {}), (this.easing = L);
            }
            addAnim(e, ...t) {
                let r,
                    i = 1e3,
                    s = "easeOutCubic",
                    n = null,
                    a = {},
                    o = !1;
                t.forEach((e) => {
                    switch (typeof e) {
                        case "number":
                            i = e;
                            break;
                        case "string":
                            s = e;
                            break;
                        case "function":
                            n = e;
                            break;
                        case "object":
                            a = e;
                    }
                });
                const h = Math.floor(i);
                0 !== this.queue.length && a.isOverwrite
                    ? (([r] = this.queue),
                      "function" == typeof r.callback && r.callback(),
                      (r.frame = 0),
                      (r.type = s),
                      (r.callback = n),
                      (r.duration = h),
                      Object.keys(e).forEach((t) => {
                          const i = this.parentObject[t],
                              s = e[t],
                              n = s - i;
                          0 !== n && ((r.props[t].startValue = i), (r.props[t].endValue = s), (r.props[t].changeInValue = n));
                      }))
                    : ((r = { props: {}, frame: 0, duration: h, type: s, callback: n }),
                      void 0 !== a.types && (r.types = a.types),
                      Object.keys(e).forEach((t) => {
                          const i = this.parentObject[t],
                              s = e[t],
                              n = s - i;
                          (r.props[t] = { startValue: i, endValue: s, changeInValue: n }), (o = !0);
                      }),
                      0 !== this.queue.length || o ? this.queue.push(r) : "function" == typeof r.callback && r.callback());
            }
            getProperty(e) {
                return this.parentObject[e];
            }
            tick() {
                if (0 === this.queue.length) return (this.isUpdate = !1), !1;
                const e = this.queue[0];
                e.frame += 1;
                const t = {};
                if (
                    (Object.keys(e.props).forEach((r) => {
                        const i = e.types ? e.types[r] : e.type,
                            s = e.props[r],
                            n = e.frame >= e.duration ? s.endValue : this.easing[i](e.frame, s.startValue, s.changeInValue, e.duration);
                        (this.parentObject[r] = n), (t[r] = n);
                    }),
                    e.frame >= e.duration)
                ) {
                    if (("function" == typeof e.callback && e.callback(), this.queue.shift(), 0 !== this.queue.length)) {
                        let e,
                            t = !1;
                        do {
                            ([e] = this.queue),
                                Object.keys(e.props).forEach((r) => {
                                    (e.props[r].startValue = this.parentObject[r]), (e.props[r].changeInValue = e.props[r].endValue - e.props[r].startValue), 0 !== e.props[r].changeInValue && (t = !0);
                                }),
                                t || ("function" == typeof e.callback && e.callback(), this.queue.shift());
                        } while (this.queue.length > 0 && !t);
                    }
                    0 === this.queue.length && "function" == typeof this.onComplete && (this.onComplete(), (this.onComplete = null));
                }
                return (this.isUpdate = !0), !0;
            }
        }
        class R {
            constructor(e, t) {
                (this.pointer = t),
                    (this.brothers = t.drizzlers),
                    (this.$$parentLayer = t.$$parentLayer),
                    (this.$$lowerLayer = t.$$lowerLayer),
                    (this.frame = 0),
                    (this.isAlive = !0),
                    (this.next = { frame: -1, func: null }),
                    (this.maxLife = 900),
                    (this.currentLife = 900),
                    (this.arrowExists = !1),
                    (this.currentPark = null),
                    (this.oldTargetPark = null),
                    (this.targetPark = null),
                    (this.isSearching = !0),
                    (this.isHeadstand = !1),
                    (this.attackCount = 0),
                    (this.targetSquid = null),
                    (this.animaters = []),
                    (this.isEnabledVoronoi = !1),
                    this.draw(e),
                    this.animaters.push(new O(this.$$drizzler)),
                    this.animaters.push(new O(this.$$container)),
                    this.setEvent(),
                    this.pointer.isRTMode ? this.spawn(e) : (this.currentPark = e);
            }
            draw(e) {
                (this.$$container = new createjs.Container()),
                    (this.$$container.x = e.x),
                    (this.$$container.y = e.y),

                    (this.$$handle = new createjs.Shape()),
                    this.$$handle.graphics.beginFill("rgba(180, 180, 180, 0.01)"),
                    this.$$handle.graphics.drawCircle(0, 0, 40 * this.pointer.currentCourse.scale),
                    this.$$container.addChild(this.$$handle),
                    
                    (this.$$lifeBarContainer = new createjs.Container()),
                    (this.$$lifeBarContainer.alpha = 0),
                    (this.$$lifeBarContainer.originAlpha = 0),
                    this.$$container.addChild(this.$$lifeBarContainer),
                    this.$$parentLayer.addChild(this.$$container),
                    (this.$$circle = A({ x: e.x, y: e.y, radius: 300 * this.pointer.currentCourse.scale, colors: ["#fff", "rgb(180, 230, 255)"], colorRates: [0.7, 1], strokeWidth: 1, strokeColor: "rgb(180, 230, 255)" })),
                    this.$$lowerLayer.addChild(this.$$circle),
                    (this.$$arrow = (function () {
                        const e = new createjs.Shape();
                        return (e.graphics.moveToLineTo = (t, r, i, s) => (e.graphics.moveTo(t, r).lineTo(t + i, r + s), e.graphics)), e;
                    })()),
                    this.$$container.addChild(this.$$arrow),
                    (this.$$drizzler = $({ src: this.pointer.pieceImageDir + "/drizzler.png", regX: 64, regY: 64, scale: 60 / 128 })),
                    this.$$container.addChild(this.$$drizzler),
                    (this.$$drizzlerTriangle = $({ src: this.pointer.pieceImageDir + "/triangle.png", y: -60, regX: 64, regY: 64, scale: 60 / 128, alpha: 0 })),
                    this.$$container.addChild(this.$$drizzlerTriangle);
                const t = this.pointer.isRTMode ? 0 : 1;
                (this.$$drizzlerPosBg = (function (e) {
                    const t = { color: "#000000", strokeWidth: 0, strokeColor: e.color, ...e },
                        r = new createjs.Shape();
                    return r.graphics.setStrokeStyle(t.strokeWidth).beginStroke(t.strokeColor).beginFill(t.color).drawCircle(0, 0, t.radius), b(r, t), y(r, t.radius), r;
                })({ radius: 13, color: "#d8d4c7", alpha: t })),
                    this.$$container.addChild(this.$$drizzlerPosBg),
                    (this.$$drizzlerPosText = x({ text: void 0 !== e.alphabet ? e.alphabet : "", style: "bold 20px sans-serif", color: "#28331f", alpha: t, cacheRadius: Math.ceil(10) })),
                    this.$$container.addChild(this.$$drizzlerPosText),
                    ([this.$$lifeBarBg, this.$$lifeBar] = w()),
                    this.$$lifeBarContainer.addChild(this.$$lifeBarBg),
                    this.$$lifeBarContainer.addChild(this.$$lifeBar);
            }
            setEvent() {
                this.pointer.isRTMode
                    ? ((this.$$drizzler.cursor = "pointer"),
                      this.$$drizzler.on("mousedown", () => {
                          this.isAlive && this.isHeadstand && this.receiveDamage(85);
                      }))
                    : f(this.pointer.stage, this.$$handle, [this.$$container, this.$$circle], {
                          isSticky: !0,
                          onMouseMoveStart: () => {
                              this.hideArrow();
                          },
                          onMouseUpQuick: () => {
                              this.pointer.currentCourse.isSelectingVoronoi ? this.enableVoronoi() : this.toggleSearching();
                          },
                          onMouseUp: (e) => {
                              const t = S(this.pointer.currentCourse.parks, this.pointer.drizzlers);
                              t.push(this.currentPark);
                              const r = E(e, t)[0];
                              this.move(r), this.pointer.currentCourse.updateDrizzlerArrows(!0);
                          },
                          throwTarget: this,
                          currentCourse: this.pointer.currentCourse,
                      });
            }
            get x() {
                return this.$$container.x;
            }
            set x(e) {
                this.$$container.x = e;
            }
            get y() {
                return this.$$container.y;
            }
            set y(e) {
                this.$$container.y = e;
            }
            spawn(e) {
                this.$$container.children.forEach((e) => {
                    0 !== e.originAlpha && e.set({ alpha: 0.3 });
                }),
                    this.pointer.currentCourse.isVisibleDrizzlerCircle || ((this.isSearching = !1), (this.$$circle.alpha = 0));
                const t = E(e, S(this.pointer.currentCourse.parks, this.pointer.drizzlers))[0];
                this.fly(t), (this.currentPark = t);
            }
            tick() {
                (this.frame += 1), this.animaters.forEach((e) => e.tick()), this.next.frame > -1 && this.frame >= this.next.frame && ((this.next.frame = -1), this.next.func());
            }
            tryFlying() {
                const { connectParks: e } = this.currentPark,
                    t = S(e, this.pointer.drizzlers);
                if (t.length > 0) {
                    if (1 === t.length) [this.targetPark] = t;
                    else if (this.pointer.squids.length > 0) {
                        const [e] = E(this, this.pointer.squids);
                        [this.targetPark] = E(e, t);
                    } else [this.targetPark] = E(this, t);
                    this.setNext(80, () => {
                        this.fly(this.targetPark);
                    }),
                        (this.currentPark = this.targetPark);
                } else
                    this.setNext(80, () => {
                        this.tryFlying();
                    });
            }
            fly(e) {
                (this.$$drizzlerPosText.text = e.alphabet),
                    (this.$$circle.x = e.x),
                    (this.$$circle.y = e.y),
                    (this.targetPark = null),
                    (this.targetSquid = null),
                    (this.isHeadstand = !0),
                    this.setFlyAnimation(e.x, e.y, () => {
                        if (this.isAlive) {
                            (this.attackCount = 0), (this.isHeadstand = !1);
                            const [e, , t] = E(this, this.pointer.squids);
                            (this.targetSquid = e),
                                t <= 322 * this.pointer.currentCourse.scale
                                    ? this.setNext(220, () => {
                                          this.attack();
                                      })
                                    : this.tryFlying();
                        }
                    });
            }
            attack() {
                (this.isHeadstand = !0), (this.$$drizzler.rotation = 180), (this.attackCount += 1);
                const e = k(z(this.currentPark, this.targetSquid || { x: 0, y: 0 })),
                    t = { x: 180 * this.pointer.currentCourse.scale, y: 0 },
                    r = e + (this.pointer.xors.getRandom(40) - 20),
                    i = v(t, r),
                    s = new P(this.currentPark, i, r, this.pointer);
                this.pointer.rockets.push(s),
                    this.setNext(180, () => {
                        this.isAlive &&
                            ((this.isHeadstand = !1),
                            (this.$$drizzler.rotation = 0),
                            this.attackCount < 2
                                ? this.setNext(220, () => {
                                      this.attack();
                                  })
                                : this.tryFlying());
                    });
            }
            receiveDamage(e) {
                this.currentLife = Math.max(0, this.currentLife - e);
                const t = this.currentLife / this.maxLife;
                t > 0 && t < 1 && (this.$$lifeBarContainer.alpha = 1);
                const r = this.$$lifeBar.graphics;
                r.clear(), r.beginFill("#00ff00"), r.drawRect(0, 0, 40 * t, 10), 0 === this.currentLife && ((this.$$lifeBarContainer.alpha = 0), this.die());
            }
            setNext(e, t) {
                (this.next.frame = this.frame + e), (this.next.func = t);
            }
            toggleSearching() {
                this.isSearching = !this.isSearching;
                const e = this.isSearching ? 1 : 0;
                u(this.$$circle, { alpha: e }, 300, "cubicOut");
            }
            setFlyAnimation(e, t, r) {
                const i = this.$$drizzler.originScale,
                    s = this.$$drizzler.originAlpha,
                    n = { alpha: s, scale: i },
                    a = { alpha: (s + this.$$drizzler.alpha) / 2, scale: 1.5 * i };
                this.animaters[0].addAnim(a, 90, { types: { alpha: "easeInCubic", scale: "easeOutCubic" } }),
                    this.animaters[0].addAnim(n, 90, { types: { alpha: "easeOutCubic", scale: "easeInCubic" } }),
                    this.animaters[1].addAnim({ x: e, y: t }, 180, "easeInOutCubic"),
                    r && (this.animaters[1].onComplete = r);
            }
            updateArrow(e) {
                if (null === this.currentPark) return;
                this.oldTargetPark = this.targetPark;
                const t = E(this, this.pointer.squids)[0],
                    r = E(t, S(this.currentPark.connectParks, this.pointer.drizzlers))[0];
                r
                    ? ((this.targetPark = r),
                      (this.targetPark === this.oldTargetPark && this.arrowExists) ||
                          (!(function (e, t, r, i, s, n) {
                              const a = z(t, r),
                                  o = Math.sqrt(a.x ** 2 + a.y ** 2),
                                  h = o - 2 * i,
                                  l = a.y / o,
                                  c = Math.asin(l) * (180 / Math.PI),
                                  p = [
                                      [i, 0, h, 0],
                                      [i + h, 0, -30, 10],
                                      [i + h, 0, -30, -10],
                                  ];
                              n && (p.push([i, 0, 30, 10]), p.push([i, 0, 30, -10])),
                                  e.graphics.clear().setStrokeStyle(8, "round").beginStroke("#605b3e"),
                                  p.forEach((t) => {
                                      e.graphics.moveToLineTo(...t);
                                  }),
                                  e.graphics.endStroke().setStrokeStyle(2, "round").beginStroke("#aaa485"),
                                  p.forEach((t) => {
                                      e.graphics.moveToLineTo(...t);
                                  }),
                                  e.graphics.endStroke(),
                                  e.cache(-30, -40, h + 60, 80),
                                  e.set({ rotation: a.x > 0 ? c : 180 - c }),
                                  s && (e.set({ scaleX: 0 }), u(e, { scaleX: 1 }, 300, "cubicOut"));
                          })(this.$$arrow, this.currentPark, r, 21, e && this.pointer.currentCourse.isVisibleArrow, !1),
                          this.pointer.currentCourse.isVisibleArrow || this.hideArrow(),
                          (this.arrowExists = !0)))
                    : this.arrowExists && ((this.targetPark = r), this.hideArrow());
            }
            hideArrow() {
                (this.$$arrow.scaleX = 0), (this.arrowExists = !1);
            }
            showArrow() {
                (this.$$arrow.scaleX = 1), (this.arrowExists = !0);
            }
            enableVoronoi() {
                (this.pointer.currentCourse.shouldUpdateVoronoi = !0),
                    (this.pointer.currentCourse.isSelectingVoronoi = !1),
                    this.pointer.drizzlers.forEach((e) => {
                        e.disableVoronoi();
                    }),
                    (this.isEnabledVoronoi = !0),
                    this.$$drizzlerTriangle.set({ alpha: 1 }),
                    window.drizzlerjs.toggleVoronoi(!0),
                    document.getElementById("drizzlerjs-voronoi-desc").style.setProperty("display", "none");
            }
            disableVoronoi() {
                (this.isEnabledVoronoi = !1), this.$$drizzlerTriangle.set({ alpha: 0 });
            }
            move(e) {
                (this.currentPark = e),
                    (this.$$drizzlerPosText.text = e.alphabet),
                    (this.targetPark = null),
                    this.hideArrow(),
                    this.setMoveAnimation(e.x, e.y, () => {
                        this.$$arrow && (this.$$arrow.alpha = 1), this.pointer.currentCourse.isVisibleVoronoi ? this.pointer.currentCourse.paintVoronoi() : (this.pointer.currentCourse.isPaintedVoronoi = !1);
                    }),
                    y(this.$$drizzlerPosText, Math.ceil(10));
            }
            setMoveAnimation(e, t, r) {
                const i = j({ x: this.$$drizzler.x, y: this.$$drizzler.y }, { x: e, y: t });
                let s = 300;
                (s *= Math.min(1, i / 100)), (s = Math.max(100, Math.floor(s))), u([this.$$container, this.$$circle], { x: e, y: t }, s, "cubicOut", r);
            }
            die() {
                (this.isAlive = !1), this.remove();
            }
            remove() {
                this.removeGraphics(), this.removeMeFromBrothers();
            }
            removeGraphics() {
                this.$$parentLayer.removeChild(this.$$container), this.pointer.$$lowerLayer.removeChild(this.$$circle);
            }
            removeMeFromBrothers() {
                const e = this.brothers.indexOf(this);
                e > -1 && this.brothers.splice(e, 1);
            }
        }
        class V {
            constructor(e) {
                (this.x = 123456789), (this.y = 362436069), (this.z = 521288629), (this.w = e || 88675123);
            }
            random() {
                const e = this.x ^ (this.x << 11);
                return (this.x = this.y), (this.y = this.z), (this.z = this.w), (this.w = this.w ^ (this.w >> 19) ^ e ^ (e >> 8)), this.w;
            }
            getRandom(e) {
                return this.random() % e;
            }
        }
        class G {
            constructor(e, t, r, i) {
                (this.pointer = i), (this.brothers = i.squids), (this.$$parentLayer = i.$$parentLayer), this.draw(e, t, r), this.setEvent();
            }
            draw(e = this.x, t = this.y, r = this.index) {
                const i = r > 0 ? "octa.png" : "squid.png";
                this.removeGraphics(), (this.$$squid = $({ src: `${this.pointer.pieceImageDir}/${i}`, regX: 64, regY: 64, scale: 50 / 128, x: e, y: t })), this.$$parentLayer.addChild(this.$$squid);
            }
            setEvent() {
                f(this.pointer.stage, this.$$squid, [this.$$squid], {
                    onMouseMove: () => {
                        this.pointer.isRTMode || this.pointer.currentCourse.updateDrizzlerArrows(!1);
                    },
                    onMouseUp: () => {
                        this.pointer.isRTMode || (this.pointer.currentCourse.updateDrizzlerArrows(!1), this.index > 0 && this.pointer.currentCourse.paintVoronoi());
                    },
                    onThrow: () => {
                        this.pointer.isRTMode || (this.pointer.currentCourse.updateDrizzlerArrows(!1), this.pointer.currentCourse.paintVoronoi());
                    },
                    throwTarget: this,
                    currentCourse: this.pointer.currentCourse,
                });
            }
            get index() {
                return this.brothers.indexOf(this);
            }
            get x() {
                return this.$$squid.x;
            }
            set x(e) {
                this.$$squid.x = e;
            }
            get y() {
                return this.$$squid.y;
            }
            set y(e) {
                this.$$squid.y = e;
            }
            remove() {
                this.removeGraphics(),
                    this.removeMeFromBrothers(),
                    this.brothers.forEach((e) => {
                        e.draw(), e.setEvent();
                    });
            }
            removeGraphics() {
                this.$$parentLayer.removeChild(this.$$squid);
            }
            removeMeFromBrothers() {
                const e = this.brothers.indexOf(this);
                e > -1 && this.brothers.splice(e, 1);
            }
        }
        class H {
            constructor(e, t, r, i, s, n, a, o, h) {
                (this.pointer = h), (this.brothers = h.bitmaps), (this.$$parentLayer = h.$$parentLayer), (this.$$lowerLayer = h.$$lowerLayer), (this.isSearching = !0), this.draw(e, t, r, i, s, n, a, o), this.setEvent();
            }
            draw(e, t, r, i, s, n, a, o) {
                if (((this.$$container = new createjs.Container()), (this.$$container.x = t), (this.$$container.y = r), this.$$parentLayer.addChild(this.$$container), a)) {
                    const e = n * this.pointer.currentCourse.scale,
                        i = (n + a) * this.pointer.currentCourse.scale,
                        s = e / i,
                        h = 0.001;
                    (this.$$circle = A({ x: t, y: r, radius: i, colors: ["#fff", ...o], colorRates: [0.6, s, s + h, 1] })), this.$$lowerLayer.addChild(this.$$circle);
                } else
                    n
                        ? ((this.$$circle = A({ x: t, y: r, radius: n * this.pointer.currentCourse.scale, colors: ["#fff", o[0]], colorRates: [0.7, 1] })), this.$$lowerLayer.addChild(this.$$circle))
                        : ((this.$$circle = new createjs.Shape()), this.$$lowerLayer.addChild(this.$$circle));
                (this.$$handle = new createjs.Shape()),
                    this.$$handle.graphics.beginFill("rgba(180, 180, 180, 0.7)"),
                    this.$$handle.graphics.drawCircle(0, 0, i * s + 2),
                    this.$$container.addChild(this.$$handle),
                    (this.$$bitmap = $({ src: e, regX: i, regY: i, scale: s })),
                    this.$$container.addChild(this.$$bitmap);
            }
            setEvent() {
                f(this.pointer.stage, this.$$handle, [this.$$container, this.$$circle], {
                    onMouseUpQuick: () => {
                        this.toggleSearching();
                    },
                    throwTarget: this,
                    currentCourse: this.pointer.currentCourse,
                });
            }
            get x() {
                return this.$$container.x;
            }
            set x(e) {
                this.$$container.x = e;
            }
            get y() {
                return this.$$container.y;
            }
            set y(e) {
                this.$$container.y = e;
            }
            toggleSearching() {
                this.isSearching = !this.isSearching;
                const e = this.isSearching ? 1 : 0;
                u(this.$$circle, { alpha: e }, 300, "cubicOut");
            }
            remove() {
                this.removeGraphics(), this.removeMeFromBrothers();
            }
            removeGraphics() {
                this.$$parentLayer.removeChild(this.$$container), this.pointer.$$lowerLayer.removeChild(this.$$circle);
            }
            removeMeFromBrothers() {
                const e = this.brothers.indexOf(this);
                e > -1 && this.brothers.splice(e, 1);
            }
        }
        const Y = (e, t, r) => e > t || Math.abs(t - e) < r;
        class N {
            constructor(e) {
                (this.image = e), (this.width = 640), (this.height = 960);
            }
            load(e, t = 0) {
                return new Promise((r) => {
                    let i;
                    if ((void 0 === e ? ((i = document.createElement("img")), (i.src = this.image)) : (i = e), 0 === i.naturalWidth))
                        return 0 === t
                            ? void i.addEventListener(
                                  "load",
                                  () => {
                                      r(this.load(i, 1));
                                  },
                                  { once: !0 }
                              )
                            : void console.log("error!");
                    const s = document.createElement("canvas"),
                        n = i.naturalWidth,
                        a = i.naturalHeight;
                    s.setAttribute("width", n), s.setAttribute("height", a), (this.width = n), (this.height = a);
                    const o = s.getContext("2d");
                    o.drawImage(i, 0, 0, n, a);
                    const h = o.getImageData(0, 0, n, a).data,
                        l = [];
                    let c = 0;
                    for (let e = 0; e < a; e += 1) {
                        l[e] = [];
                        for (let t = 0; t < n; t += 1) {
                            const r = h[c];
                            (l[e][t] = r), (c += 4);
                        }
                    }
                    (this.zMap = l), r();
                });
            }
            get(...e) {
                let [t, r] = e;
                return (t = Math.max(0, Math.min(this.width - 1, t))), (r = Math.max(0, Math.min(this.height - 1, r))), this.zMap[Math.floor(r)][Math.floor(t)];
            }
            getOld(e, t) {
                return e >= this.width || t >= this.height || e < 0 || t < 0 ? 1 / 0 : this.zMap[Math.floor(t)][Math.floor(e)];
            }
            moveObjectWithZMap(e, t) {
                const r = Math.sign(e.vx),
                    i = Math.sign(e.vy);
                let s = Math.abs(Math.floor(e.vx)),
                    n = e.vx - r * s;
                0 === n && ((s -= r), (n = r));
                let a = Math.abs(Math.floor(e.vy)),
                    o = e.vy - i * a;
                0 === o && ((a -= i), (o = i));
                const h = Math.max(s + 1, a + 1);
                let l = 0,
                    c = 0,
                    { x: p } = e,
                    { y: d } = e;
                const { z: u } = e,
                    g = void 0 !== e.z;
                let m,
                    f = 0;
                for (m = 0; m < h; m += 1) {
                    let e = !1;
                    if (m < s + 1) {
                        const a = m === s ? n : r,
                            o = g ? u : this.get(p, d),
                            h = this.get(p + a, d);
                        Y(o, h, t) ? ((p += a), (e = !0)) : 0 !== i && Y(o, this.get(p + a, d + i), t) && ((d += i), (l += 1), (f += 0.5), l > 1 && ((l = 0), (p += r)), (e = !0));
                    }
                    if (m < a + 1) {
                        const s = m === a ? o : i,
                            n = g ? u : this.get(p, d),
                            h = this.get(p, d + s);
                        Y(n, h, t) ? ((d += s), (e = !0)) : 0 !== r && Y(n, this.get(p + r, d + s), t) && ((p += r), (c += 1), (f += 0.5), c > 1 && ((c = 0), (d += i)), (e = !0));
                    }
                    if (!e) break;
                }
                return e.set(p, d), (m - f) / h;
            }
        }
        window.drizzlerjs = (() => {
            let e, t, r, s, h, d, u, g, f, b, y, $, A, x, w, z, v;
            const k = [];
            let C,
                j,
                E,
                S = !1;
            const B = () => {
                C.querySelector("#drizzlerjs-options-wrapper").style.setProperty("display", "none");
            };
            const P = (t) => {
                    if (!r.isRTMode) return;
                    if (h.length >= 3) return;
                    const i = t.randomScore % z.vertexes.length,
                        n = { x: z.vertexes[i][0], y: z.vertexes[i][1] },
                        a = new R(n, {
                            xors: $,
                            stage: e,
                            squids: d,
                            rockets: u,
                            drizzlers: h,
                            currentCourse: s,
                            $$lowerLayer: A.course,
                            $$parentLayer: A.drizzler,
                            isRTMode: r.isRTMode,
                            zmapImageDir: r.zmapImageDir,
                            pieceImageDir: r.pieceImageDir,
                            weaponImageDir: r.weaponImageDir,
                            courseImageDir: r.courseImageDir,
                        });
                    h.push(a);
                },
                L = () => {
                    if (r.isRTMode) return void P();
                    if (h.length + 1 > s.parks.length) return;
                    let t = null;
                    for (let e = s.parks.length - 1; e >= 0; e -= 1) {
                        let r = !0;
                        t = s.parks[e].alphabet;
                        for (let e = 0; e < h.length; e += 1)
                            if (t === h[e].currentPark.alphabet) {
                                r = !1;
                                break;
                            }
                        if (r) break;
                        t = null;
                    }
                    if (null === t) return;
                    const i = new R(s.getPark(t), {
                        xors: $,
                        stage: e,
                        squids: d,
                        rockets: u,
                        drizzlers: h,
                        currentCourse: s,
                        $$lowerLayer: A.course,
                        $$parentLayer: A.drizzler,
                        isRTMode: r.isRTMode,
                        zmapImageDir: r.zmapImageDir,
                        pieceImageDir: r.pieceImageDir,
                        weaponImageDir: r.weaponImageDir,
                        courseImageDir: r.courseImageDir,
                    });
                    h.push(i), r.isRTMode || (s.updateDrizzlerArrows(!0), s.paintVoronoi());
                },
                O = () => {
                    if (d.length >= 4) return;
                    const t = d.length,
                        i = s.homes[t],
                        n = new G(...i, d.length, {
                            stage: e,
                            squids: d,
                            currentCourse: s,
                            $$parentLayer: A.drizzler,
                            isRTMode: r.isRTMode,
                            zmapImageDir: r.zmapImageDir,
                            pieceImageDir: r.pieceImageDir,
                            weaponImageDir: r.weaponImageDir,
                            courseImageDir: r.courseImageDir,
                        });
                    d.push(n), r.isRTMode || (s.updateDrizzlerArrows(!0), s.paintVoronoi());
                },
                Y = () => {
                    [h, d, u, g].forEach((e) => {
                        for (; e.length > 0; ) e[e.length - 1].remove();
                    }),
                        s.paintVoronoi();
                },
                J = (e) => {
                    if (void 0 !== e && e === s.isVisibleVoronoi) return;
                    s.isVisibleVoronoi = !s.isVisibleVoronoi;
                    const t = s.isVisibleVoronoi ? 0.25 : 0;
                    s.isVisibleVoronoi && s.shouldUpdateVoronoi && s.paintVoronoi(),
                        s.$$paint.set({ alpha: t }),
                        s.isVisibleVoronoi ||
                            h.forEach((e) => {
                                e.disableVoronoi();
                            });
                },
                q = () => {
                    e.update();
                },
                F = () => {
                    for (0; 0 !== f.length && y === f[0].frame; ) P(f[0]), f.shift();
                    for (; 0 !== b.length && y === b[0].frame; ) (z = b[0].spnDir), b.shift();
                    const t = Math.max(0, y - l),
                        r = Math.floor(t / 60),
                        i = Math.max(0, 100 - r);
                    w !== i && ((s.$$leftSeconds.text = i), (w = i)),
                        h.forEach((e) => {
                            e.tick();
                        }),
                        u.forEach((e) => {
                            e.tick();
                        }),
                        e.update(),
                        (y += 1);
                },
                Q = (t) => {
                    const i = document.getElementById("drizzlerjs-mask-tools");
                    let h,
                        l,
                        c = 0,
                        d = 0;
                    Object.keys(n).forEach((t, o) => {
                        const p = `${r.pieceImageDir}/${t}.png`;
                        (h = c + Math.floor((d + o) / 7)), (l = (d + o) % 7);
                        const u = document.createElement("img");
                        (u.src = p),
                            u.addEventListener(
                                "click",
                                () => {
                                    i.style.setProperty("display", "none"),
                                        ((t) => {
                                            const i = n[t],
                                                o = new H(`${r.pieceImageDir}/${t}.png`, 320, 480, 64, 50 / 128, i.range || 0, i.blast || 0, a, {
                                                    stage: e,
                                                    bitmaps: g,
                                                    currentCourse: s,
                                                    $$lowerLayer: A.course,
                                                    $$parentLayer: A.drizzler,
                                                    isRTMode: r.isRTMode,
                                                    zmapImageDir: r.zmapImageDir,
                                                    pieceImageDir: r.pieceImageDir,
                                                    weaponImageDir: r.weaponImageDir,
                                                    courseImageDir: r.courseImageDir,
                                                });
                                            g.push(o);
                                        })(t);
                                },
                                !1
                            ),
                            i.appendChild(u);
                    }),
                        (c = h),
                        (d = l + 1),
                        Object.keys(p).forEach((t, n) => {
                            const a = `${r.weaponImageDir}/${t}.png`;
                            (h = c + Math.floor((n + d) / 7)), (l = (n + d) % 7);
                            const u = document.createElement("img");
                            (u.src = a),
                                u.addEventListener(
                                    "click",
                                    () => {
                                        i.style.setProperty("display", "none"),
                                            ((t) => {
                                                const i = p[t],
                                                    n = new H(`${r.weaponImageDir}/${t}.png`, 320, 480, 128, 50 / 256, (i.range || 0) * (4.7045), (i.blast || 0) * (4.7045), o, {
                                                        stage: e,
                                                        bitmaps: g,
                                                        currentCourse: s,
                                                        $$lowerLayer: A.course,
                                                        $$parentLayer: A.drizzler,
                                                        isRTMode: r.isRTMode,
                                                        zmapImageDir: r.zmapImageDir,
                                                        pieceImageDir: r.pieceImageDir,
                                                        weaponImageDir: r.weaponImageDir,
                                                        courseImageDir: r.courseImageDir,
                                                    });
                                                g.push(n);
                                            })(t);
                                    },
                                    !1
                                ),
                                i.appendChild(u);
                        });
                },
                X = () => {
                    (r = null), (s = null), (d = []), (u = []), (g = []), (h = []), (z = null), (f = []), (b = []), (y = 0), ($ = null), (x = !1), (w = null), (v = 0);
                },
                U = (s) => {
                    if (r) return;
                    if (
                        (X(),
                        (r = s),
                        (s.canvasWidth = s.canvasWidth || 640),
                        (s.canvasHeight = s.canvasHeight || 960),
                        (C = document.getElementById("drizzlerjs-wrapper")),
                        (j = C.querySelectorAll(".for-save")),
                        (E = document.getElementById("drizzlerjs-canvas-wrapper")),
                        (function () {
                            var e = localStorage.getItem("drizzlerjs");
                            if (null !== e) {
                                var t = JSON.parse(e);
                                Array.prototype.forEach.call(j, (e) => {
                                    e.checked = !1;
                                }),
                                    Array.prototype.forEach.call(j, (e) => {
                                        const r = e.getAttribute("id");
                                        t[r] && (e.checked = !0);
                                    });
                            }
                        })(),
                        t ||
                            ((t = m(s.canvasWidth, s.canvasHeight)),
                            (e = new createjs.Stage(t)),
                            createjs.Touch.isSupported() ? createjs.Touch.enable(e) : e.enableMouseOver(),
                            (A = {}),
                            i.forEach((t) => {
                                (A[t] = new createjs.Container()), e.addChild(A[t]);
                            })),
                        E.append(t),
                        C.style.setProperty("width", s.canvasWidth + "px"),
                        C.style.setProperty("height", s.canvasHeight + "px"),
                        s.isRTMode ? (createjs.Ticker.timingMode = createjs.Ticker.RAF) : ((createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED), (createjs.Ticker.framerate = 30)),
                        Q(),
                        s.isRTMode
                            ? (document.getElementById("drizzlerjs-rtmode-tools").style.setProperty("display", "block"), document.getElementById("drizzlerjs-not-rtmode-tools").style.setProperty("display", "none"))
                            : (document.getElementById("drizzlerjs-rtmode-tools").style.setProperty("display", "none"), document.getElementById("drizzlerjs-not-rtmode-tools").style.setProperty("display", "block")),
                        Array.prototype.forEach.call(j, (e) => {
                            e.addEventListener("change", () => {
                                !(function () {
                                    const e = {};
                                    Array.prototype.forEach.call(j, (t) => {
                                        const r = t.getAttribute("id");
                                        r && (e[r] = t.checked);
                                    });
                                    const t = JSON.stringify(e);
                                    localStorage.setItem("drizzlerjs", t);
                                })();
                            });
                        }),
                        "en" === r.lang)
                    ) {
                        const e = C.querySelectorAll(".for-translation");
                        Array.prototype.forEach.call(e, (e) => {
                            e.textContent = e.getAttribute("en-text");
                        });
                    }
                    const n = C.querySelector("#drizzlerjs-course-select");
                    n &&
                        n.addEventListener("change", () => {
                            Z();
                            const e = n.selectedIndex,
                                t = n.options[e].value,
                                r = t.split("-")[0],
                                i = t.split("-")[1];
                            K({ course: r, tide: i }), B();
                        }),
                        console.log("drizzlerjs initialized.");
                },
                K = async (t = r) => {
                    r || U(t),
                        (v = Math.floor(M())),
                        ($ = new V(v)),
                        await (async (t, i) => {
                            const n = `${t}-${i}`,
                                a = {
                                    stage: e,
                                    squids: d,
                                    drizzlers: h,
                                    $$parentLayer: A.course,
                                    isRTMode: r.isRTMode,
                                    zmapImageDir: r.zmapImageDir,
                                    pieceImageDir: r.pieceImageDir,
                                    weaponImageDir: r.weaponImageDir,
                                    courseImageDir: r.courseImageDir,
                                    canvasWidth: r.canvasWidth,
                                    canvasHeight: r.canvasHeight,
                                };
                            if (void 0 === k[n]) {
                                const e = "high" === i ? "normal" : i,
                                    s = `${r.zmapImageDir}/${t}-${e}.png`,
                                    o = new N(s);
                                let h;
                                if ((await o.load(), "high" !== i)) h = JSON.parse(JSON.stringify(c[t][i]));
                                else {
                                    const e = c[t][i],
                                        r = JSON.parse(JSON.stringify(c[t].normal));
                                    e.excludeParks.forEach((e) => {
                                        for (let t = 0; t < r.lines.length; t += 1) r.lines[t].indexOf(e) > -1 && (r.lines.splice(t, 1), (t -= 1));
                                    }),
                                        e.additionalLines.forEach((e) => {
                                            r.lines.push(e);
                                        }),
                                        e.pushedParks &&
                                            Object.keys(e.pushedParks).forEach((t) => {
                                                r.parks[t] = e.pushedParks[t];
                                            }),
                                        Object.keys(e).forEach((t) => {
                                            r[t] = e[t];
                                        }),
                                        (h = r);
                                }
                                (h.image = `${r.courseImageDir}/${t}-${i}.png`), (k[n] = new T(h, o, a));
                            }
                            (s = k[n]), (s.pointer = a), s.draw();
                        })(t.course, t.tide),
                        t.isRTMode
                            ? (O(),
                              ((e = 25, t = 200) => {
                                  f = [];
                                  const r = l,
                                      i = Math.max(2, Math.min(99, e - 1)),
                                      n = Math.floor(3 + t / 50),
                                      a = 72 / n,
                                      o = Math.ceil(100 / a),
                                      h = Math.floor(i / (n + 1)),
                                      c = (function (e, t) {
                                          const r = [];
                                          for (let i = 0; i < e; i += 1) r[i] = t;
                                          return r;
                                      })(n + 1, h),
                                      p = i - (n + 1) * h,
                                      d = [];
                                  for (let e = 0; e < n + 1; e += 1) d.push({ spawningIndex: e, score: $.getRandom(100) });
                                  d.sort((e, t) => (e.score > t.score ? -1 : 1));
                                  for (let e = 0; e < p; e += 1) {
                                      c[d[e].spawningIndex] += 1;
                                  }
                                  for (let e = 0; e < c.length; e += 1) {
                                      const t = e * a;
                                      for (let i = 0; i < c[e]; i += 1) {
                                          let s;
                                          s = 0 === e && 0 === i ? 0 : e < c.length - 1 ? $.getRandom(100) / 100 : 0 === i ? 0 : $.getRandom(20) / 100;
                                          const n = t + a * s,
                                              o = { frame: r + Math.floor(60 * n), bossKind: "drizzler", randomScore: $.getRandom(100) };
                                          f.push(o);
                                      }
                                  }
                                  f.sort((e, t) => (e.frame < t.frame ? -1 : 1)), (b = []);
                                  for (let e = 0; e < o; e += 1) {
                                      let t = $.getRandom(100),
                                          i = null;
                                      for (let e = 0; e < s.spawners.length; e += 1) {
                                          if (t < s.spawners[e].probability) {
                                              i = s.spawners[e];
                                              break;
                                          }
                                          t -= s.spawners[e].probability;
                                      }
                                      null !== i ? b.push({ frame: r + Math.floor(e * a * 60), spnDir: i }) : console.log("spawning direction error!");
                                  }
                                  (z = b[0].spnDir), b.shift();
                              })(),
                              createjs.Ticker.on("tick", F))
                            : (L(), O(), createjs.Ticker.on("tick", q)),
                        (x = !0),
                        console.log("drizzlerjs started.");
                },
                Z = () => {
                    createjs.Ticker.reset(),
                        Y(),
                        Object.keys(A).forEach((e) => {
                            A[e].removeAllChildren();
                        }),
                        e.update(),
                        s.setNull(),
                        (y = 0),
                        (x = !1),
                        console.log("drizzlerjs stopped.");
                };
            return {
                stop: Z,
                start: K,
                finalize: () => {
                    if (!r) return;
                    x && Z();
                    D("drizzlerjs-canvas-wrapper"), D("drizzlerjs-mask-tools"), X(), console.log("drizzlerjs finalized.");
                },
                addSquid: O,
                initialize: U,
                showOptions: () => {
                    C.querySelector("#drizzlerjs-options-wrapper").style.setProperty("display", "block");
                },
                hideOptions: B,
                addDrizzler: L,
                toggleArrow: () => {
                    (s.isVisibleArrow = !s.isVisibleArrow), s.isVisibleArrow ? s.showDrizzlerArrows(!1) : s.hideDrizzlerArrows();
                },
                toggleVoronoi: J,
                stepDrizzlers: () => {
                    h.forEach((e) => {
                        e.targetPark && e.move(e.targetPark);
                    }),
                        s.updateDrizzlerArrows(!0);
                },
                downloadCanvas: () => {
                    if (S) return;
                    S = !0;
                    const t = document.createElement("p");
                    t.style.setProperty("margin", "0"),
                        t.style.setProperty("padding", "0"),
                        t.style.setProperty("line-height", "auto"),
                        t.style.setProperty("position", "fixed"),
                        t.style.setProperty("left", "-100%"),
                        t.style.setProperty("top", "-100%"),
                        t.style.setProperty("font-size", "100px"),
                        (t.textContent = "A"),
                        E.appendChild(t);
                    const i = t.clientHeight;
                    (window.html2canvasTextOffsetY = i > 100 ? Math.floor(0.15 * (i - 100)) : 0), E.removeChild(t);
                    const n = new Date(),
                        a = n.getFullYear(),
                        o = n.getMonth() + 1,
                        h = n.getDate(),
                        l = n.getHours(),
                        c = n.getMinutes(),
                        p = n.getSeconds(),
                        d = a + "-" + ("00" + o).slice(-2) + "-" + ("00" + h).slice(-2) + "-" + ("00" + l).slice(-2) + "-" + ("00" + c).slice(-2) + "-" + ("00" + p).slice(-2);
                    let u, g, m, f;
                    s.$$trashOpen && ((u = s.$$trashOpen.alpha), (g = s.$$trashClose.alpha), (s.$$trashOpen.alpha = 0), (s.$$trashClose.alpha = 0), e.update()),
                        (m = document.querySelector("#tyrano_base")),
                        m && ((f = m.style.getPropertyValue("transform")), m.style.setProperty("transform", "none"));
                    const b = () => {
                        (S = !1), m && m.style.setProperty("transform", f), s.$$trashOpen && ((s.$$trashOpen.alpha = u), (s.$$trashClose.alpha = g), e.update());
                    };
                    html2canvas(C, { backgroundColor: null, x: 0, y: 0, scrollX: 0, scrollY: 0, logging: !1 })
                        .then((e) => {
                            I(e, s.name[r.lang] + "-" + d), b();
                        })
                        .catch((e) => {
                            b();
                        });
                },
                removeAllPieces: Y,
                toggleConnectMap: () => {
                    s.isVisibleConnectMap = !s.isVisibleConnectMap;
                    const e = s.isVisibleConnectMap ? 1 : 0;
                    s.$$connectMapContainer.set({ alpha: e });
                },
                toggleDrizzlerCircle: () => {
                    s.isVisibleDrizzlerCircle = !s.isVisibleDrizzlerCircle;
                    const e = s.isVisibleDrizzlerCircle ? 1 : 0,
                        t = [];
                    h.forEach((e) => {
                        t.push(e.$$circle);
                    }),
                        t.forEach((t) => {
                            t.set({ alpha: e });
                        });
                },
                selectStartVoronoi: () => {
                    if ((document.getElementById("drizzlerjs-voronoi-desc").style.setProperty("display", "none"), s.isVisibleVoronoi)) return void J(!1);
                    const e = s.$$paint.image.getContext("2d");
                    s.isSelectingVoronoi
                        ? ((e.fillStyle = "#ffffff"), e.fillRect(0, 0, r.canvasWidth, r.canvasHeight), J(!1), (s.isSelectingVoronoi = !1))
                        : (s.$$paint.set({ alpha: 0.25 }),
                          (e.fillStyle = "#000000"),
                          e.fillRect(0, 0, r.canvasWidth, r.canvasHeight),
                          (s.isSelectingVoronoi = !0),
                          document.getElementById("drizzlerjs-voronoi-desc").style.setProperty("display", "block"));
                },
            };
        })();
    },
]);
