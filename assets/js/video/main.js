"object" == typeof navigator && function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : e.Plyr = t()
}(this, function() {
    "use strict";

    function e(e, t) {
        if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function t(e, t) {
        for(var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function n(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e, t) {
        return function(e) {
            if(Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = [],
                i = !0,
                a = !1,
                s = void 0;
            try {
                for(var o, r = e[Symbol.iterator](); !(i = (o = r.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
            } catch (e) {
                a = !0, s = e
            } finally {
                try {
                    i || null == r.return || r.return()
                } finally {
                    if(a) throw s
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function s(e) {
        return function(e) {
            if(Array.isArray(e)) {
                for(var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function(e) {
            if(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var o = function(e) {
            return null != e ? e.constructor : null
        },
        r = function(e, t) {
            return Boolean(e && t && e instanceof t)
        },
        l = function(e) {
            return null == e
        },
        c = function(e) {
            return o(e) === Object
        },
        u = function(e) {
            return o(e) === String
        },
        d = function(e) {
            return Array.isArray(e)
        },
        h = function(e) {
            return r(e, NodeList)
        },
        p = function(e) {
            return l(e) || (u(e) || d(e) || h(e)) && !e.length || c(e) && !Object.keys(e).length
        },
        m = {
            nullOrUndefined: l,
            object: c,
            number: function(e) {
                return o(e) === Number && !Number.isNaN(e)
            },
            string: u,
            boolean: function(e) {
                return o(e) === Boolean
            },
            function: function(e) {
                return o(e) === Function
            },
            array: d,
            weakMap: function(e) {
                return r(e, WeakMap)
            },
            nodeList: h,
            element: function(e) {
                return r(e, Element)
            },
            textNode: function(e) {
                return o(e) === Text
            },
            event: function(e) {
                return r(e, Event)
            },
            keyboardEvent: function(e) {
                return r(e, KeyboardEvent)
            },
            cue: function(e) {
                return r(e, window.TextTrackCue) || r(e, window.VTTCue)
            },
            track: function(e) {
                return r(e, TextTrack) || !l(e) && u(e.kind)
            },
            url: function(e) {
                if(r(e, window.URL)) return !0;
                if(!u(e)) return !1;
                var t = e;
                e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
                try {
                    return !p(new URL(t).hostname)
                } catch (e) {
                    return !1
                }
            },
            empty: p
        },
        f = function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        return e = !0, null
                    }
                });
                window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
            } catch (e) {}
            return e
        }();

    function g(e, t, n) {
        var i = this,
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if(e && "addEventListener" in e && !m.empty(t) && m.function(n)) {
            var r = t.split(" "),
                l = o;
            f && (l = {
                passive: s,
                capture: o
            }), r.forEach(function(t) {
                i && i.eventListeners && a && i.eventListeners.push({
                    element: e,
                    type: t,
                    callback: n,
                    options: l
                }), e[a ? "addEventListener" : "removeEventListener"](t, n, l)
            })
        }
    }

    function y(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        g.call(this, e, t, n, !0, i, a)
    }

    function v(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        g.call(this, e, t, n, !1, i, a)
    }

    function b(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        g.call(this, e, t, function s() {
            v(e, t, s, i, a);
            for(var o = arguments.length, r = new Array(o), l = 0; l < o; l++) r[l] = arguments[l];
            n.apply(this, r)
        }, !0, i, a)
    }

    function k(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if(m.element(e) && !m.empty(t)) {
            var a = new CustomEvent(t, {
                bubbles: n,
                detail: Object.assign({}, i, {
                    plyr: this
                })
            });
            e.dispatchEvent(a)
        }
    }

    function w(e, t) {
        var n = e.length ? e : [e];
        Array.from(n).reverse().forEach(function(e, n) {
            var i = n > 0 ? t.cloneNode(!0) : t,
                a = e.parentNode,
                s = e.nextSibling;
            i.appendChild(e), s ? a.insertBefore(i, s) : a.appendChild(i)
        })
    }

    function T(e, t) {
        m.element(e) && !m.empty(t) && Object.entries(t).filter(function(e) {
            var t = a(e, 2)[1];
            return !m.nullOrUndefined(t)
        }).forEach(function(t) {
            var n = a(t, 2),
                i = n[0],
                s = n[1];
            return e.setAttribute(i, s)
        })
    }

    function A(e, t, n) {
        var i = document.createElement(e);
        return m.object(t) && T(i, t), m.string(n) && (i.innerText = n), i
    }

    function E(e, t, n, i) {
        m.element(t) && t.appendChild(A(e, n, i))
    }

    function P(e) {
        m.nodeList(e) || m.array(e) ? Array.from(e).forEach(P) : m.element(e) && m.element(e.parentNode) && e.parentNode.removeChild(e)
    }

    function C(e) {
        if(m.element(e))
            for(var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
    }

    function S(e, t) {
        return m.element(t) && m.element(t.parentNode) && m.element(e) ? (t.parentNode.replaceChild(e, t), e) : null
    }

    function M(e, t) {
        if(!m.string(e) || m.empty(e)) return {};
        var n = {},
            i = t;
        return e.split(",").forEach(function(e) {
            var t = e.trim(),
                a = t.replace(".", ""),
                s = t.replace(/[[\]]/g, "").split("="),
                o = s[0],
                r = s.length > 1 ? s[1].replace(/["']/g, "") : "";
            switch(t.charAt(0)) {
                case ".":
                    m.object(i) && m.string(i.class) && (i.class += " ".concat(a)), n.class = a;
                    break;
                case "#":
                    n.id = t.replace("#", "");
                    break;
                case "[":
                    n[o] = r
            }
        }), n
    }

    function N(e, t) {
        if(m.element(e)) {
            var n = t;
            m.boolean(n) || (n = !e.hidden), n ? e.setAttribute("hidden", "") : e.removeAttribute("hidden")
        }
    }

    function L(e, t, n) {
        if(m.nodeList(e)) return Array.from(e).map(function(e) {
            return L(e, t, n)
        });
        if(m.element(e)) {
            var i = "toggle";
            return void 0 !== n && (i = n ? "add" : "remove"), e.classList[i](t), e.classList.contains(t)
        }
        return !1
    }

    function x(e, t) {
        return m.element(e) && e.classList.contains(t)
    }

    function I(e, t) {
        var n = {
            Element: Element
        };
        return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function() {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }).call(e, t)
    }

    function _(e) {
        return this.elements.container.querySelectorAll(e)
    }

    function j(e) {
        return this.elements.container.querySelector(e)
    }

    function O() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        m.element(e) && (e.focus(), t && L(e, this.config.classNames.tabFocus))
    }
    var q, R, B, D = (q = document.createElement("span"), R = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
    }, B = Object.keys(R).find(function(e) {
        return void 0 !== q.style[e]
    }), !!m.string(B) && R[B]);

    function V(e) {
        setTimeout(function() {
            try {
                N(e, !0), e.offsetHeight, N(e, !1)
            } catch (e) {}
        }, 0)
    }
    var H, F = {
            isIE: !!document.documentMode,
            isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
            isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
            isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
        },
        U = {
            "audio/ogg": "vorbis",
            "audio/wav": "1",
            "video/webm": "vp8, vorbis",
            "video/mp4": "avc1.42E01E, mp4a.40.2",
            "video/ogg": "theora"
        },
        z = {
            audio: "canPlayType" in document.createElement("audio"),
            video: "canPlayType" in document.createElement("video"),
            check: function(e, t, n) {
                var i = F.isIPhone && n && z.playsinline,
                    a = z[e] || "html5" !== t;
                return {
                    api: a,
                    ui: a && z.rangeInput && ("video" !== e || !F.isIPhone || i)
                }
            },
            pip: !(F.isIPhone || !m.function(A("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || A("video").disablePictureInPicture)),
            airplay: m.function(window.WebKitPlaybackTargetAvailabilityEvent),
            playsinline: "playsInline" in document.createElement("video"),
            mime: function(e) {
                var t, n = a(e.split("/"), 1)[0];
                if(!this.isHTML5 || n !== this.type) return !1;
                e && e.includes("codecs=") ? t = e : "audio/mpeg" === e ? t = "audio/mpeg;" : e in U && (t = "".concat(e, '; codecs="').concat(U[e], '"'));
                try {
                    return Boolean(t && this.media.canPlayType(t).replace(/no/, ""))
                } catch (e) {
                    return !1
                }
            },
            textTracks: "textTracks" in document.createElement("video"),
            rangeInput: (H = document.createElement("input"), H.type = "range", "range" === H.type),
            touch: "ontouchstart" in document.documentElement,
            transitions: !1 !== D,
            reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
        },
        W = {
            getSources: function() {
                var e = this;
                return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function(t) {
                    return z.mime.call(e, t.getAttribute("type"))
                }) : []
            },
            getQualityOptions: function() {
                return W.getSources.call(this).map(function(e) {
                    return Number(e.getAttribute("size"))
                }).filter(Boolean)
            },
            extend: function() {
                if(this.isHTML5) {
                    var e = this;
                    Object.defineProperty(e.media, "quality", {
                        get: function() {
                            var t = W.getSources.call(e).find(function(t) {
                                return t.getAttribute("src") === e.source
                            });
                            return t && Number(t.getAttribute("size"))
                        },
                        set: function(t) {
                            var n = W.getSources.call(e).find(function(e) {
                                return Number(e.getAttribute("size")) === t
                            });
                            if(n) {
                                var i = e.media,
                                    a = i.currentTime,
                                    s = i.paused,
                                    o = i.preload,
                                    r = i.readyState;
                                e.media.src = n.getAttribute("src"), ("none" !== o || r) && (e.once("loadedmetadata", function() {
                                    e.currentTime = a, s || e.play()
                                }), e.media.load()), k.call(e, e.media, "qualitychange", !1, {
                                    quality: t
                                })
                            }
                        }
                    })
                }
            },
            cancelRequests: function() {
                this.isHTML5 && (P(W.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
            }
        };

    function K(e) {
        return m.array(e) ? e.filter(function(t, n) {
            return e.indexOf(t) === n
        }) : e
    }

    function Y(e, t) {
        return t.split(".").reduce(function(e, t) {
            return e && e[t]
        }, e)
    }

    function J() {
        for(var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
        if(!n.length) return e;
        var s = n.shift();
        return m.object(s) ? (Object.keys(s).forEach(function(t) {
            m.object(s[t]) ? (Object.keys(e).includes(t) || Object.assign(e, i({}, t, {})), J(e[t], s[t])) : Object.assign(e, i({}, t, s[t]))
        }), J.apply(void 0, [e].concat(n))) : e
    }

    function Q(e) {
        for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        return m.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function(e, t) {
            return n[t].toString()
        })
    }

    function $() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"), "g"), n.toString())
    }

    function G() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function(e) {
            return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
        })
    }

    function X() {
        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
        return (e = function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
            return e = $(e, "-", " "), e = $(e, "_", " "), $(e = G(e), " ", "")
        }(e)).charAt(0).toLowerCase() + e.slice(1)
    }

    function Z(e) {
        var t = document.createElement("div");
        return t.appendChild(e), t.innerHTML
    }
    var ee = {
            pip: "PIP",
            airplay: "AirPlay",
            html5: "HTML5",
            vimeo: "Vimeo",
            youtube: "YouTube"
        },
        te = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if(m.empty(e) || m.empty(t)) return "";
            var n = Y(t.i18n, e);
            if(m.empty(n)) return Object.keys(ee).includes(e) ? ee[e] : "";
            var i = {
                "{seektime}": t.seekTime,
                "{title}": t.title
            };
            return Object.entries(i).forEach(function(e) {
                var t = a(e, 2),
                    i = t[0],
                    s = t[1];
                n = $(n, i, s)
            }), n
        },
        ne = function() {
            function t(n) {
                e(this, t), this.enabled = n.config.storage.enabled, this.key = n.config.storage.key
            }
            return n(t, [{
                key: "get",
                value: function(e) {
                    if(!t.supported || !this.enabled) return null;
                    var n = window.localStorage.getItem(this.key);
                    if(m.empty(n)) return null;
                    var i = JSON.parse(n);
                    return m.string(e) && e.length ? i[e] : i
                }
            }, {
                key: "set",
                value: function(e) {
                    if(t.supported && this.enabled && m.object(e)) {
                        var n = this.get();
                        m.empty(n) && (n = {}), J(n, e), window.localStorage.setItem(this.key, JSON.stringify(n))
                    }
                }
            }], [{
                key: "supported",
                get: function() {
                    try {
                        if(!("localStorage" in window)) return !1;
                        return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0
                    } catch (e) {
                        return !1
                    }
                }
            }]), t
        }();

    function ie(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
        return new Promise(function(n, i) {
            try {
                var a = new XMLHttpRequest;
                if(!("withCredentials" in a)) return;
                a.addEventListener("load", function() {
                    if("text" === t) try {
                        n(JSON.parse(a.responseText))
                    } catch (e) {
                        n(a.responseText)
                    } else n(a.response)
                }), a.addEventListener("error", function() {
                    throw new Error(a.status)
                }), a.open("GET", e, !0), a.responseType = t, a.send()
            } catch (e) {
                i(e)
            }
        })
    }

    function ae(e, t) {
        if(m.string(e)) {
            var n = m.string(t),
                i = function() {
                    return null !== document.getElementById(t)
                },
                a = function(e, t) {
                    e.innerHTML = t, n && i() || document.body.insertAdjacentElement("afterbegin", e)
                };
            if(!n || !i()) {
                var s = ne.supported,
                    o = document.createElement("div");
                if(o.setAttribute("hidden", ""), n && o.setAttribute("id", t), s) {
                    var r = window.localStorage.getItem("".concat("cache", "-").concat(t));
                    if(null !== r) {
                        var l = JSON.parse(r);
                        a(o, l.content)
                    }
                }
                ie(e).then(function(e) {
                    m.empty(e) || (s && window.localStorage.setItem("".concat("cache", "-").concat(t), JSON.stringify({
                        content: e
                    })), a(o, e))
                }).catch(function() {})
            }
        }
    }
    var se = function(e) {
            return parseInt(e / 60 / 60 % 60, 10)
        },
        oe = function(e) {
            return parseInt(e / 60 % 60, 10)
        },
        re = function(e) {
            return parseInt(e % 60, 10)
        };

    function le() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if(!m.number(e)) return le(null, t, n);
        var i = function(e) {
                return "0".concat(e).slice(-2)
            },
            a = se(e),
            s = oe(e),
            o = re(e);
        return a = t || a > 0 ? "".concat(a, ":") : "", "".concat(n && e > 0 ? "-" : "").concat(a).concat(i(s), ":").concat(i(o))
    }
    var ce = {
        getIconUrl: function() {
            var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || F.isIE && !window.svg4everybody;
            return {
                url: this.config.iconUrl,
                cors: e
            }
        },
        findElements: function() {
            try {
                return this.elements.controls = j.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                    play: _.call(this, this.config.selectors.buttons.play),
                    pause: j.call(this, this.config.selectors.buttons.pause),
                    restart: j.call(this, this.config.selectors.buttons.restart),
                    rewind: j.call(this, this.config.selectors.buttons.rewind),
                    fastForward: j.call(this, this.config.selectors.buttons.fastForward),
                    mute: j.call(this, this.config.selectors.buttons.mute),
                    pip: j.call(this, this.config.selectors.buttons.pip),
                    airplay: j.call(this, this.config.selectors.buttons.airplay),
                    settings: j.call(this, this.config.selectors.buttons.settings),
                    captions: j.call(this, this.config.selectors.buttons.captions),
                    fullscreen: j.call(this, this.config.selectors.buttons.fullscreen)
                }, this.elements.progress = j.call(this, this.config.selectors.progress), this.elements.inputs = {
                    seek: j.call(this, this.config.selectors.inputs.seek),
                    volume: j.call(this, this.config.selectors.inputs.volume)
                }, this.elements.display = {
                    buffer: j.call(this, this.config.selectors.display.buffer),
                    currentTime: j.call(this, this.config.selectors.display.currentTime),
                    duration: j.call(this, this.config.selectors.display.duration)
                }, m.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0
            } catch (e) {
                return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
            }
        },
        createIcon: function(e, t) {
            var n = ce.getIconUrl.call(this),
                i = "".concat(n.cors ? "" : n.url, "#").concat(this.config.iconPrefix),
                a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            T(a, J(t, {
                role: "presentation",
                focusable: "false"
            }));
            var s = document.createElementNS("http://www.w3.org/2000/svg", "use"),
                o = "".concat(i, "-").concat(e);
            return "href" in s && s.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), s.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), a.appendChild(s), a
        },
        createLabel: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = te(e, this.config);
            return A("span", Object.assign({}, t, {
                class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
            }), n)
        },
        createBadge: function(e) {
            if(m.empty(e)) return null;
            var t = A("span", {
                class: this.config.classNames.menu.value
            });
            return t.appendChild(A("span", {
                class: this.config.classNames.menu.badge
            }, e)), t
        },
        createButton: function(e, t) {
            var n = Object.assign({}, t),
                i = X(e),
                a = {
                    element: "button",
                    toggle: !1,
                    label: null,
                    icon: null,
                    labelPressed: null,
                    iconPressed: null
                };
            switch(["element", "icon", "label"].forEach(function(e) {
                    Object.keys(n).includes(e) && (a[e] = n[e], delete n[e])
                }), "button" !== a.element || Object.keys(n).includes("type") || (n.type = "button"), Object.keys(n).includes("class") ? n.class.includes(this.config.classNames.control) || (n.class += " ".concat(this.config.classNames.control)) : n.class = this.config.classNames.control, e) {
                case "play":
                    a.toggle = !0, a.label = "play", a.labelPressed = "pause", a.icon = "play", a.iconPressed = "pause";
                    break;
                case "mute":
                    a.toggle = !0, a.label = "mute", a.labelPressed = "unmute", a.icon = "volume", a.iconPressed = "muted";
                    break;
                case "captions":
                    a.toggle = !0, a.label = "enableCaptions", a.labelPressed = "disableCaptions", a.icon = "captions-off", a.iconPressed = "captions-on";
                    break;
                case "fullscreen":
                    a.toggle = !0, a.label = "enterFullscreen", a.labelPressed = "exitFullscreen", a.icon = "enter-fullscreen", a.iconPressed = "exit-fullscreen";
                    break;
                case "play-large":
                    n.class += " ".concat(this.config.classNames.control, "--overlaid"), i = "play", a.label = "play", a.icon = "play";
                    break;
                default:
                    m.empty(a.label) && (a.label = i), m.empty(a.icon) && (a.icon = e)
            }
            var s = A(a.element);
            return a.toggle ? (s.appendChild(ce.createIcon.call(this, a.iconPressed, {
                class: "icon--pressed"
            })), s.appendChild(ce.createIcon.call(this, a.icon, {
                class: "icon--not-pressed"
            })), s.appendChild(ce.createLabel.call(this, a.labelPressed, {
                class: "label--pressed"
            })), s.appendChild(ce.createLabel.call(this, a.label, {
                class: "label--not-pressed"
            }))) : (s.appendChild(ce.createIcon.call(this, a.icon)), s.appendChild(ce.createLabel.call(this, a.label))), J(n, M(this.config.selectors.buttons[i], n)), T(s, n), "play" === i ? (m.array(this.elements.buttons[i]) || (this.elements.buttons[i] = []), this.elements.buttons[i].push(s)) : this.elements.buttons[i] = s, s
        },
        createRange: function(e, t) {
            var n = A("input", J(M(this.config.selectors.inputs[e]), {
                type: "range",
                min: 0,
                max: 100,
                step: .01,
                value: 0,
                autocomplete: "off",
                role: "slider",
                "aria-label": te(e, this.config),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": 0
            }, t));
            return this.elements.inputs[e] = n, ce.updateRangeFill.call(this, n), n
        },
        createProgress: function(e, t) {
            var n = A("progress", J(M(this.config.selectors.display[e]), {
                min: 0,
                max: 100,
                value: 0,
                role: "presentation",
                "aria-hidden": !0
            }, t));
            if("volume" !== e) {
                n.appendChild(A("span", null, "0"));
                var i = {
                        played: "played",
                        buffer: "buffered"
                    } [e],
                    a = i ? te(i, this.config) : "";
                n.innerText = "% ".concat(a.toLowerCase())
            }
            return this.elements.display[e] = n, n
        },
        createTime: function(e) {
            var t = M(this.config.selectors.display[e]),
                n = A("div", J(t, {
                    class: "".concat(this.config.classNames.display.time, " ").concat(t.class ? t.class : "").trim(),
                    "aria-label": te(e, this.config)
                }), "00:00");
            return this.elements.display[e] = n, n
        },
        bindMenuItemShortcuts: function(e, t) {
            var n = this;
            y(e, "keydown keyup", function(i) {
                if([32, 38, 39, 40].includes(i.which) && (i.preventDefault(), i.stopPropagation(), "keydown" !== i.type)) {
                    var a, s = I(e, '[role="menuitemradio"]');
                    if(!s && [32, 39].includes(i.which)) ce.showMenuPanel.call(n, t, !0);
                    else 32 !== i.which && (40 === i.which || s && 39 === i.which ? (a = e.nextElementSibling, m.element(a) || (a = e.parentNode.firstElementChild)) : (a = e.previousElementSibling, m.element(a) || (a = e.parentNode.lastElementChild)), O.call(n, a, !0))
                }
            }, !1), y(e, "keyup", function(e) {
                13 === e.which && ce.focusFirstMenuItem.call(n, null, !0)
            })
        },
        createMenuItem: function(e) {
            var t = this,
                n = e.value,
                i = e.list,
                a = e.type,
                s = e.title,
                o = e.badge,
                r = void 0 === o ? null : o,
                l = e.checked,
                c = void 0 !== l && l,
                u = M(this.config.selectors.inputs[a]),
                d = A("button", J(u, {
                    type: "button",
                    role: "menuitemradio",
                    class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(),
                    "aria-checked": c,
                    value: n
                })),
                h = A("span");
            h.innerHTML = s, m.element(r) && h.appendChild(r), d.appendChild(h), Object.defineProperty(d, "checked", {
                enumerable: !0,
                get: function() {
                    return "true" === d.getAttribute("aria-checked")
                },
                set: function(e) {
                    e && Array.from(d.parentNode.children).filter(function(e) {
                        return I(e, '[role="menuitemradio"]')
                    }).forEach(function(e) {
                        return e.setAttribute("aria-checked", "false")
                    }), d.setAttribute("aria-checked", e ? "true" : "false")
                }
            }), this.listeners.bind(d, "click keyup", function(e) {
                if(!m.keyboardEvent(e) || 32 === e.which) {
                    switch(e.preventDefault(), e.stopPropagation(), d.checked = !0, a) {
                        case "language":
                            t.currentTrack = Number(n);
                            break;
                        case "quality":
                            t.quality = n;
                            break;
                        case "speed":
                            t.speed = parseFloat(n)
                    }
                    ce.showMenuPanel.call(t, "home", m.keyboardEvent(e))
                }
            }, a, !1), ce.bindMenuItemShortcuts.call(this, d, a), i.appendChild(d)
        },
        formatTime: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return m.number(e) ? le(e, se(this.duration) > 0, t) : e
        },
        updateTimeDisplay: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            m.element(e) && m.number(t) && (e.innerText = ce.formatTime(t, n))
        },
        updateVolume: function() {
            this.supported.ui && (m.element(this.elements.inputs.volume) && ce.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), m.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
        },
        setRange: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            m.element(e) && (e.value = t, ce.updateRangeFill.call(this, e))
        },
        updateProgress: function(e) {
            var t = this;
            if(this.supported.ui && m.event(e)) {
                var n, i, a = 0;
                if(e) switch(e.type) {
                    case "timeupdate":
                    case "seeking":
                    case "seeked":
                        n = this.currentTime, i = this.duration, a = 0 === n || 0 === i || Number.isNaN(n) || Number.isNaN(i) ? 0 : (n / i * 100).toFixed(2), "timeupdate" === e.type && ce.setRange.call(this, this.elements.inputs.seek, a);
                        break;
                    case "playing":
                    case "progress":
                        ! function(e, n) {
                            var i = m.number(n) ? n : 0,
                                a = m.element(e) ? e : t.elements.display.buffer;
                            if(m.element(a)) {
                                a.value = i;
                                var s = a.getElementsByTagName("span")[0];
                                m.element(s) && (s.childNodes[0].nodeValue = i)
                            }
                        }(this.elements.display.buffer, 100 * this.buffered)
                }
            }
        },
        updateRangeFill: function(e) {
            var t = m.event(e) ? e.target : e;
            if(m.element(t) && "range" === t.getAttribute("type")) {
                if(I(t, this.config.selectors.inputs.seek)) {
                    t.setAttribute("aria-valuenow", this.currentTime);
                    var n = ce.formatTime(this.currentTime),
                        i = ce.formatTime(this.duration),
                        a = te("seekLabel", this.config);
                    t.setAttribute("aria-valuetext", a.replace("{currentTime}", n).replace("{duration}", i))
                } else if(I(t, this.config.selectors.inputs.volume)) {
                    var s = 100 * t.value;
                    t.setAttribute("aria-valuenow", s), t.setAttribute("aria-valuetext", "".concat(s.toFixed(1), "%"))
                } else t.setAttribute("aria-valuenow", t.value);
                F.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"))
            }
        },
        updateSeekTooltip: function(e) {
            var t = this;
            if(this.config.tooltips.seek && m.element(this.elements.inputs.seek) && m.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
                var n = 0,
                    i = this.elements.progress.getBoundingClientRect(),
                    a = "".concat(this.config.classNames.tooltip, "--visible"),
                    s = function(e) {
                        L(t.elements.display.seekTooltip, a, e)
                    };
                if(this.touch) s(!1);
                else {
                    if(m.event(e)) n = 100 / i.width * (e.pageX - i.left);
                    else {
                        if(!x(this.elements.display.seekTooltip, a)) return;
                        n = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                    }
                    n < 0 ? n = 0 : n > 100 && (n = 100), ce.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * n), this.elements.display.seekTooltip.style.left = "".concat(n, "%"), m.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && s("mouseenter" === e.type)
                }
            }
        },
        timeUpdate: function(e) {
            var t = !m.element(this.elements.display.duration) && this.config.invertTime;
            ce.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || ce.updateProgress.call(this, e)
        },
        durationUpdate: function() {
            if(this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                if(this.duration >= Math.pow(2, 32)) return N(this.elements.display.currentTime, !0), void N(this.elements.progress, !0);
                m.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                var e = m.element(this.elements.display.duration);
                !e && this.config.displayDuration && this.paused && ce.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && ce.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), ce.updateSeekTooltip.call(this)
            }
        },
        toggleMenuButton: function(e, t) {
            N(this.elements.settings.buttons[e], !t)
        },
        updateSetting: function(e, t, n) {
            var i = this.elements.settings.panels[e],
                a = null,
                s = t;
            if("captions" === e) a = this.currentTrack;
            else {
                if(a = m.empty(n) ? this[e] : n, m.empty(a) && (a = this.config[e].default), !m.empty(this.options[e]) && !this.options[e].includes(a)) return void this.debug.warn("Unsupported value of '".concat(a, "' for ").concat(e));
                if(!this.config[e].options.includes(a)) return void this.debug.warn("Disabled value of '".concat(a, "' for ").concat(e))
            }
            if(m.element(s) || (s = i && i.querySelector('[role="menu"]')), m.element(s)) {
                this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = ce.getLabel.call(this, e, a);
                var o = s && s.querySelector('[value="'.concat(a, '"]'));
                m.element(o) && (o.checked = !0)
            }
        },
        getLabel: function(e, t) {
            switch(e) {
                case "speed":
                    return 1 === t ? te("normal", this.config) : "".concat(t, "&times;");
                case "quality":
                    if(m.number(t)) {
                        var n = te("qualityLabel.".concat(t), this.config);
                        return n.length ? n : "".concat(t, "p")
                    }
                    return G(t);
                case "captions":
                    return he.getLabel.call(this);
                default:
                    return null
            }
        },
        setQualityMenu: function(e) {
            var t = this;
            if(m.element(this.elements.settings.panels.quality)) {
                var n = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                m.array(e) && (this.options.quality = K(e).filter(function(e) {
                    return t.config.quality.options.includes(e)
                }));
                var i = !m.empty(this.options.quality) && this.options.quality.length > 1;
                if(ce.toggleMenuButton.call(this, "quality", i), C(n), ce.checkMenu.call(this), i) {
                    this.options.quality.sort(function(e, n) {
                        var i = t.config.quality.options;
                        return i.indexOf(e) > i.indexOf(n) ? 1 : -1
                    }).forEach(function(e) {
                        ce.createMenuItem.call(t, {
                            value: e,
                            list: n,
                            type: "quality",
                            title: ce.getLabel.call(t, "quality", e),
                            badge: function(e) {
                                var n = te("qualityBadge.".concat(e), t.config);
                                return n.length ? ce.createBadge.call(t, n) : null
                            }(e)
                        })
                    }), ce.updateSetting.call(this, "quality", n)
                }
            }
        },
        setCaptionsMenu: function() {
            var e = this;
            if(m.element(this.elements.settings.panels.captions)) {
                var t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                    n = he.getTracks.call(this),
                    i = Boolean(n.length);
                if(ce.toggleMenuButton.call(this, "captions", i), C(t), ce.checkMenu.call(this), i) {
                    var a = n.map(function(n, i) {
                        return {
                            value: i,
                            checked: e.captions.toggled && e.currentTrack === i,
                            title: he.getLabel.call(e, n),
                            badge: n.language && ce.createBadge.call(e, n.language.toUpperCase()),
                            list: t,
                            type: "language"
                        }
                    });
                    a.unshift({
                        value: -1,
                        checked: !this.captions.toggled,
                        title: te("disabled", this.config),
                        list: t,
                        type: "language"
                    }), a.forEach(ce.createMenuItem.bind(this)), ce.updateSetting.call(this, "captions", t)
                }
            }
        },
        setSpeedMenu: function(e) {
            var t = this;
            if(m.element(this.elements.settings.panels.speed)) {
                var n = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                m.array(e) ? this.options.speed = e : (this.isHTML5 || this.isVimeo) && (this.options.speed = [1]), this.options.speed = this.options.speed.filter(function(e) {
                    return t.config.speed.options.includes(e)
                });
                var i = !m.empty(this.options.speed) && this.options.speed.length > 1;
                ce.toggleMenuButton.call(this, "speed", i), C(n), ce.checkMenu.call(this), i && (this.options.speed.forEach(function(e) {
                    ce.createMenuItem.call(t, {
                        value: e,
                        list: n,
                        type: "speed",
                        title: ce.getLabel.call(t, "speed", e)
                    })
                }), ce.updateSetting.call(this, "speed", n))
            }
        },
        checkMenu: function() {
            var e = this.elements.settings.buttons,
                t = !m.empty(e) && Object.values(e).some(function(e) {
                    return !e.hidden
                });
            N(this.elements.settings.menu, !t)
        },
        focusFirstMenuItem: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if(!this.elements.settings.popup.hidden) {
                var n = e;
                m.element(n) || (n = Object.values(this.elements.settings.panels).find(function(e) {
                    return !e.hidden
                }));
                var i = n.querySelector('[role^="menuitem"]');
                O.call(this, i, t)
            }
        },
        toggleMenu: function(e) {
            var t = this.elements.settings.popup,
                n = this.elements.buttons.settings;
            if(m.element(t) && m.element(n)) {
                var i = t.hidden,
                    a = i;
                if(m.boolean(e)) a = e;
                else if(m.keyboardEvent(e) && 27 === e.which) a = !1;
                else if(m.event(e)) {
                    var s = t.contains(e.target);
                    if(s || !s && e.target !== n && a) return
                }
                n.setAttribute("aria-expanded", a), N(t, !a), L(this.elements.container, this.config.classNames.menu.open, a), a && m.keyboardEvent(e) ? ce.focusFirstMenuItem.call(this, null, !0) : a || i || O.call(this, n, m.keyboardEvent(e))
            }
        },
        getMenuSize: function(e) {
            var t = e.cloneNode(!0);
            t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
            var n = t.scrollWidth,
                i = t.scrollHeight;
            return P(t), {
                width: n,
                height: i
            }
        },
        showMenuPanel: function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = document.getElementById("plyr-settings-".concat(this.id, "-").concat(t));
            if(m.element(i)) {
                var a = i.parentNode,
                    s = Array.from(a.children).find(function(e) {
                        return !e.hidden
                    });
                if(z.transitions && !z.reducedMotion) {
                    a.style.width = "".concat(s.scrollWidth, "px"), a.style.height = "".concat(s.scrollHeight, "px");
                    var o = ce.getMenuSize.call(this, i);
                    y.call(this, a, D, function t(n) {
                        n.target === a && ["width", "height"].includes(n.propertyName) && (a.style.width = "", a.style.height = "", v.call(e, a, D, t))
                    }), a.style.width = "".concat(o.width, "px"), a.style.height = "".concat(o.height, "px")
                }
                N(s, !0), N(i, !1), ce.focusFirstMenuItem.call(this, i, n)
            }
        },
        setDownloadLink: function() {
            var e = this.elements.buttons.download;
            m.element(e) && e.setAttribute("href", this.download)
        },
        create: function(e) {
            var t = this,
                n = A("div", M(this.config.selectors.controls.wrapper));
            if(this.config.controls.includes("restart") && n.appendChild(ce.createButton.call(this, "restart")), this.config.controls.includes("rewind") && n.appendChild(ce.createButton.call(this, "rewind")), this.config.controls.includes("play") && n.appendChild(ce.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && n.appendChild(ce.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
                var i = A("div", M(this.config.selectors.progress));
                if(i.appendChild(ce.createRange.call(this, "seek", {
                        id: "plyr-seek-".concat(e.id)
                    })), i.appendChild(ce.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
                    var a = A("span", {
                        class: this.config.classNames.tooltip
                    }, "00:00");
                    i.appendChild(a), this.elements.display.seekTooltip = a
                }
                this.elements.progress = i, n.appendChild(this.elements.progress)
            }
            if(this.config.controls.includes("current-time") && n.appendChild(ce.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && n.appendChild(ce.createTime.call(this, "duration")), this.config.controls.includes("mute") || this.config.controls.includes("volume")) {
                var s = A("div", {
                    class: "plyr__volume"
                });
                if(this.config.controls.includes("mute") && s.appendChild(ce.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
                    var o = {
                        max: 1,
                        step: .05,
                        value: this.config.volume
                    };
                    s.appendChild(ce.createRange.call(this, "volume", J(o, {
                        id: "plyr-volume-".concat(e.id)
                    }))), this.elements.volume = s
                }
                n.appendChild(s)
            }
            if(this.config.controls.includes("captions") && n.appendChild(ce.createButton.call(this, "captions")), this.config.controls.includes("settings") && !m.empty(this.config.settings)) {
                var r = A("div", {
                    class: "plyr__menu",
                    hidden: ""
                });
                r.appendChild(ce.createButton.call(this, "settings", {
                    "aria-haspopup": !0,
                    "aria-controls": "plyr-settings-".concat(e.id),
                    "aria-expanded": !1
                }));
                var l = A("div", {
                        class: "plyr__menu__container",
                        id: "plyr-settings-".concat(e.id),
                        hidden: ""
                    }),
                    c = A("div"),
                    u = A("div", {
                        id: "plyr-settings-".concat(e.id, "-home")
                    }),
                    d = A("div", {
                        role: "menu"
                    });
                u.appendChild(d), c.appendChild(u), this.elements.settings.panels.home = u, this.config.settings.forEach(function(n) {
                    var i = A("button", J(M(t.config.selectors.buttons.settings), {
                        type: "button",
                        class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
                        role: "menuitem",
                        "aria-haspopup": !0,
                        hidden: ""
                    }));
                    ce.bindMenuItemShortcuts.call(t, i, n), y(i, "click", function() {
                        ce.showMenuPanel.call(t, n, !1)
                    });
                    var a = A("span", null, te(n, t.config)),
                        s = A("span", {
                            class: t.config.classNames.menu.value
                        });
                    s.innerHTML = e[n], a.appendChild(s), i.appendChild(a), d.appendChild(i);
                    var o = A("div", {
                            id: "plyr-settings-".concat(e.id, "-").concat(n),
                            hidden: ""
                        }),
                        r = A("button", {
                            type: "button",
                            class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
                        });
                    r.appendChild(A("span", {
                        "aria-hidden": !0
                    }, te(n, t.config))), r.appendChild(A("span", {
                        class: t.config.classNames.hidden
                    }, te("menuBack", t.config))), y(o, "keydown", function(e) {
                        37 === e.which && (e.preventDefault(), e.stopPropagation(), ce.showMenuPanel.call(t, "home", !0))
                    }, !1), y(r, "click", function() {
                        ce.showMenuPanel.call(t, "home", !1)
                    }), o.appendChild(r), o.appendChild(A("div", {
                        role: "menu"
                    })), c.appendChild(o), t.elements.settings.buttons[n] = i, t.elements.settings.panels[n] = o
                }), l.appendChild(c), r.appendChild(l), n.appendChild(r), this.elements.settings.popup = l, this.elements.settings.menu = r
            }
            if(this.config.controls.includes("pip") && z.pip && n.appendChild(ce.createButton.call(this, "pip")), this.config.controls.includes("airplay") && z.airplay && n.appendChild(ce.createButton.call(this, "airplay")), this.config.controls.includes("download")) {
                var h = {
                        element: "a",
                        href: this.download,
                        target: "_blank"
                    },
                    p = this.config.urls.download;
                !m.url(p) && this.isEmbed && J(h, {
                    icon: "logo-".concat(this.provider),
                    label: this.provider
                }), n.appendChild(ce.createButton.call(this, "download", h))
            }
            return this.config.controls.includes("fullscreen") && n.appendChild(ce.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(ce.createButton.call(this, "play-large")), this.elements.controls = n, this.isHTML5 && ce.setQualityMenu.call(this, W.getQualityOptions.call(this)), ce.setSpeedMenu.call(this), n
        },
        inject: function() {
            var e = this;
            if(this.config.loadSprite) {
                var t = ce.getIconUrl.call(this);
                t.cors && ae(t.url, "sprite-plyr")
            }
            this.id = Math.floor(1e4 * Math.random());
            var n = null;
            this.elements.controls = null;
            var i = {
                    id: this.id,
                    seektime: this.config.seekTime,
                    title: this.config.title
                },
                s = !0;
            m.function(this.config.controls) && (this.config.controls = this.config.controls.call(this.props)), this.config.controls || (this.config.controls = []), m.element(this.config.controls) || m.string(this.config.controls) ? n = this.config.controls : (n = ce.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: he.getLabel.call(this)
            }), s = !1);
            var o, r = function(e) {
                var t = e;
                return Object.entries(i).forEach(function(e) {
                    var n = a(e, 2),
                        i = n[0],
                        s = n[1];
                    t = $(t, "{".concat(i, "}"), s)
                }), t
            };
            if(s && (m.string(this.config.controls) ? n = r(n) : m.element(n) && (n.innerHTML = r(n.innerHTML))), m.string(this.config.selectors.controls.container) && (o = document.querySelector(this.config.selectors.controls.container)), m.element(o) || (o = this.elements.container), o[m.element(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), m.element(this.elements.controls) || ce.findElements.call(this), !m.empty(this.elements.buttons)) {
                var l = function(t) {
                    var n = e.config.classNames.controlPressed;
                    Object.defineProperty(t, "pressed", {
                        enumerable: !0,
                        get: function() {
                            return x(t, n)
                        },
                        set: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            L(t, n, e)
                        }
                    })
                };
                Object.values(this.elements.buttons).filter(Boolean).forEach(function(e) {
                    m.array(e) || m.nodeList(e) ? Array.from(e).filter(Boolean).forEach(l) : l(e)
                })
            }
            if(window.navigator.userAgent.includes("Edge") && V(o), this.config.tooltips.controls) {
                var c = this.config,
                    u = c.classNames,
                    d = c.selectors,
                    h = "".concat(d.controls.wrapper, " ").concat(d.labels, " .").concat(u.hidden),
                    p = _.call(this, h);
                Array.from(p).forEach(function(t) {
                    L(t, e.config.classNames.hidden, !1), L(t, e.config.classNames.tooltip, !0)
                })
            }
        }
    };

    function ue(e) {
        var t = e;
        if(!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) {
            var n = document.createElement("a");
            n.href = t, t = n.href
        }
        try {
            return new URL(t)
        } catch (e) {
            return null
        }
    }

    function de(e) {
        var t = new URLSearchParams;
        return m.object(e) && Object.entries(e).forEach(function(e) {
            var n = a(e, 2),
                i = n[0],
                s = n[1];
            t.set(i, s)
        }), t
    }
    var he = {
            setup: function() {
                if(this.supported.ui)
                    if(!this.isVideo || this.isYouTube || this.isHTML5 && !z.textTracks) m.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && ce.setCaptionsMenu.call(this);
                    else {
                        var e, t;
                        if(m.element(this.elements.captions) || (this.elements.captions = A("div", M(this.config.selectors.captions)), e = this.elements.captions, t = this.elements.wrapper, m.element(e) && m.element(t) && t.parentNode.insertBefore(e, t.nextSibling)), F.isIE && window.URL) {
                            var n = this.media.querySelectorAll("track");
                            Array.from(n).forEach(function(e) {
                                var t = e.getAttribute("src"),
                                    n = ue(t);
                                null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && ie(t, "blob").then(function(t) {
                                    e.setAttribute("src", window.URL.createObjectURL(t))
                                }).catch(function() {
                                    P(e)
                                })
                            })
                        }
                        var i = K((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function(e) {
                                return e.split("-")[0]
                            })),
                            s = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                        if("auto" === s) s = a(i, 1)[0];
                        var o = this.storage.get("captions");
                        if(m.boolean(o) || (o = this.config.captions.active), Object.assign(this.captions, {
                                toggled: !1,
                                active: o,
                                language: s,
                                languages: i
                            }), this.isHTML5) {
                            var r = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                            y.call(this, this.media.textTracks, r, he.update.bind(this))
                        }
                        setTimeout(he.update.bind(this), 0)
                    }
            },
            update: function() {
                var e = this,
                    t = he.getTracks.call(this, !0),
                    n = this.captions,
                    i = n.active,
                    a = n.language,
                    s = n.meta,
                    o = n.currentTrackNode,
                    r = Boolean(t.find(function(e) {
                        return e.language === a
                    }));
                this.isHTML5 && this.isVideo && t.filter(function(e) {
                    return !s.get(e)
                }).forEach(function(t) {
                    e.debug.log("Track added", t), s.set(t, {
                        default: "showing" === t.mode
                    }), t.mode = "hidden", y.call(e, t, "cuechange", function() {
                        return he.updateCues.call(e)
                    })
                }), (r && this.language !== a || !t.includes(o)) && (he.setLanguage.call(this, a), he.toggle.call(this, i && r)), L(this.elements.container, this.config.classNames.captions.enabled, !m.empty(t)), (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && ce.setCaptionsMenu.call(this)
            },
            toggle: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if(this.supported.ui) {
                    var n = this.captions.toggled,
                        i = this.config.classNames.captions.active,
                        a = m.nullOrUndefined(e) ? !n : e;
                    if(a !== n) {
                        if(t || (this.captions.active = a, this.storage.set({
                                captions: a
                            })), !this.language && a && !t) {
                            var o = he.getTracks.call(this),
                                r = he.findTrack.call(this, [this.captions.language].concat(s(this.captions.languages)), !0);
                            return this.captions.language = r.language, void he.set.call(this, o.indexOf(r))
                        }
                        this.elements.buttons.captions && (this.elements.buttons.captions.pressed = a), L(this.elements.container, i, a), this.captions.toggled = a, ce.updateSetting.call(this, "captions"), k.call(this, this.media, a ? "captionsenabled" : "captionsdisabled")
                    }
                }
            },
            set: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = he.getTracks.call(this);
                if(-1 !== e)
                    if(m.number(e))
                        if(e in n) {
                            if(this.captions.currentTrack !== e) {
                                this.captions.currentTrack = e;
                                var i = n[e],
                                    a = (i || {}).language;
                                this.captions.currentTrackNode = i, ce.updateSetting.call(this, "captions"), t || (this.captions.language = a, this.storage.set({
                                    language: a
                                })), this.isVimeo && this.embed.enableTextTrack(a), k.call(this, this.media, "languagechange")
                            }
                            he.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && he.updateCues.call(this)
                        } else this.debug.warn("Track not found", e);
                else this.debug.warn("Invalid caption argument", e);
                else he.toggle.call(this, !1, t)
            },
            setLanguage: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if(m.string(e)) {
                    var n = e.toLowerCase();
                    this.captions.language = n;
                    var i = he.getTracks.call(this),
                        a = he.findTrack.call(this, [n]);
                    he.set.call(this, i.indexOf(a), t)
                } else this.debug.warn("Invalid language argument", e)
            },
            getTracks: function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return Array.from((this.media || {}).textTracks || []).filter(function(n) {
                    return !e.isHTML5 || t || e.captions.meta.has(n)
                }).filter(function(e) {
                    return ["captions", "subtitles"].includes(e.kind)
                })
            },
            findTrack: function(e) {
                var t, n = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    a = he.getTracks.call(this),
                    s = function(e) {
                        return Number((n.captions.meta.get(e) || {}).default)
                    },
                    o = Array.from(a).sort(function(e, t) {
                        return s(t) - s(e)
                    });
                return e.every(function(e) {
                    return !(t = o.find(function(t) {
                        return t.language === e
                    }))
                }), t || (i ? o[0] : void 0)
            },
            getCurrentTrack: function() {
                return he.getTracks.call(this)[this.currentTrack]
            },
            getLabel: function(e) {
                var t = e;
                return !m.track(t) && z.textTracks && this.captions.toggled && (t = he.getCurrentTrack.call(this)), m.track(t) ? m.empty(t.label) ? m.empty(t.language) ? te("enabled", this.config) : e.language.toUpperCase() : t.label : te("disabled", this.config)
            },
            updateCues: function(e) {
                if(this.supported.ui)
                    if(m.element(this.elements.captions))
                        if(m.nullOrUndefined(e) || Array.isArray(e)) {
                            var t = e;
                            if(!t) {
                                var n = he.getCurrentTrack.call(this);
                                t = Array.from((n || {}).activeCues || []).map(function(e) {
                                    return e.getCueAsHTML()
                                }).map(Z)
                            }
                            var i = t.map(function(e) {
                                return e.trim()
                            }).join("\n");
                            if(i !== this.elements.captions.innerHTML) {
                                C(this.elements.captions);
                                var a = A("span", M(this.config.selectors.caption));
                                a.innerHTML = i, this.elements.captions.appendChild(a), k.call(this, this.media, "cuechange")
                            }
                        } else this.debug.warn("updateCues: Invalid input", e);
                else this.debug.warn("No captions element to render to")
            }
        },
        pe = {
            enabled: !0,
            title: "",
            debug: !1,
            autoplay: !1,
            autopause: !0,
            playsinline: !0,
            seekTime: 10,
            volume: 1,
            muted: !1,
            duration: null,
            displayDuration: !0,
            invertTime: !0,
            toggleInvert: !0,
            ratio: "16:9",
            clickToPlay: !0,
            hideControls: !0,
            resetOnEnd: !1,
            disableContextMenu: !0,
            loadSprite: !0,
            iconPrefix: "plyr",
            iconUrl: "https://cdn.plyr.io/3.4.6/plyr.svg",
            blankVideo: "https://cdn.plyr.io/static/blank.mp4",
            quality: {
                default: 576,
                options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
            },
            loop: {
                active: !1
            },
            speed: {
                selected: 1,
                options: [.5, .75, 1, 1.25, 1.5, 1.75, 2]
            },
            keyboard: {
                focused: !0,
                global: !1
            },
            tooltips: {
                controls: !1,
                seek: !0
            },
            captions: {
                active: !1,
                language: "auto",
                update: !1
            },
            fullscreen: {
                enabled: !0,
                fallback: !0,
                iosNative: !1
            },
            storage: {
                enabled: !0,
                key: "plyr"
            },
            controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
            settings: ["captions", "quality", "speed"],
            i18n: {
                restart: "Restart",
                rewind: "Rewind {seektime}s",
                play: "Play",
                pause: "Pause",
                fastForward: "Forward {seektime}s",
                seek: "Seek",
                seekLabel: "{currentTime} of {duration}",
                played: "Played",
                buffered: "Buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                mute: "Mute",
                unmute: "Unmute",
                enableCaptions: "Enable captions",
                disableCaptions: "Disable captions",
                download: "Download",
                enterFullscreen: "Enter fullscreen",
                exitFullscreen: "Exit fullscreen",
                frameTitle: "Player for {title}",
                captions: "Captions",
                settings: "Settings",
                menuBack: "Go back to previous menu",
                speed: "Speed",
                normal: "Normal",
                quality: "Quality",
                loop: "Loop",
                start: "Start",
                end: "End",
                all: "All",
                reset: "Reset",
                disabled: "Disabled",
                enabled: "Enabled",
                advertisement: "Ad",
                qualityBadge: {
                    2160: "4K",
                    1440: "HD",
                    1080: "HD",
                    720: "HD",
                    576: "SD",
                    480: "SD"
                }
            },
            urls: {
                download: null,
                vimeo: {
                    sdk: "https://player.vimeo.com/api/player.js",
                    iframe: "https://player.vimeo.com/video/{0}?{1}",
                    api: "https://vimeo.com/api/v2/video/{0}.json"
                },
                youtube: {
                    sdk: "https://www.youtube.com/iframe_api",
                    api: "https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet"
                },
                googleIMA: {
                    sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                }
            },
            listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                fastForward: null,
                mute: null,
                volume: null,
                captions: null,
                download: null,
                fullscreen: null,
                pip: null,
                airplay: null,
                speed: null,
                quality: null,
                loop: null,
                language: null
            },
            events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
            selectors: {
                editable: "input, textarea, select, [contenteditable]",
                container: ".plyr",
                controls: {
                    container: null,
                    wrapper: ".plyr__controls"
                },
                labels: "[data-plyr]",
                buttons: {
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    fastForward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    download: '[data-plyr="download"]',
                    fullscreen: '[data-plyr="fullscreen"]',
                    pip: '[data-plyr="pip"]',
                    airplay: '[data-plyr="airplay"]',
                    settings: '[data-plyr="settings"]',
                    loop: '[data-plyr="loop"]'
                },
                inputs: {
                    seek: '[data-plyr="seek"]',
                    volume: '[data-plyr="volume"]',
                    speed: '[data-plyr="speed"]',
                    language: '[data-plyr="language"]',
                    quality: '[data-plyr="quality"]'
                },
                display: {
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration",
                    buffer: ".plyr__progress__buffer",
                    loop: ".plyr__progress__loop",
                    volume: ".plyr__volume--display"
                },
                progress: ".plyr__progress",
                captions: ".plyr__captions",
                caption: ".plyr__caption",
                menu: {
                    quality: ".js-plyr__menu__list--quality"
                }
            },
            classNames: {
                type: "plyr--{0}",
                provider: "plyr--{0}",
                video: "plyr__video-wrapper",
                embed: "plyr__video-embed",
                embedContainer: "plyr__video-embed__container",
                poster: "plyr__poster",
                posterEnabled: "plyr__poster-enabled",
                ads: "plyr__ads",
                control: "plyr__control",
                controlPressed: "plyr__control--pressed",
                playing: "plyr--playing",
                paused: "plyr--paused",
                stopped: "plyr--stopped",
                loading: "plyr--loading",
                hover: "plyr--hover",
                tooltip: "plyr__tooltip",
                cues: "plyr__cues",
                hidden: "plyr__sr-only",
                hideControls: "plyr--hide-controls",
                isIos: "plyr--is-ios",
                isTouch: "plyr--is-touch",
                uiSupported: "plyr--full-ui",
                noTransition: "plyr--no-transition",
                display: {
                    time: "plyr__time"
                },
                menu: {
                    value: "plyr__menu__value",
                    badge: "plyr__badge",
                    open: "plyr--menu-open"
                },
                captions: {
                    enabled: "plyr--captions-enabled",
                    active: "plyr--captions-active"
                },
                fullscreen: {
                    enabled: "plyr--fullscreen-enabled",
                    fallback: "plyr--fullscreen-fallback"
                },
                pip: {
                    supported: "plyr--pip-supported",
                    active: "plyr--pip-active"
                },
                airplay: {
                    supported: "plyr--airplay-supported",
                    active: "plyr--airplay-active"
                },
                tabFocus: "plyr__tab-focus"
            },
            attributes: {
                embed: {
                    provider: "data-plyr-provider",
                    id: "data-plyr-embed-id"
                }
            },
            keys: {
                google: null
            },
            ads: {
                enabled: !1,
                publisherId: ""
            }
        },
        me = "picture-in-picture",
        fe = "inline",
        ge = {
            html5: "html5",
            youtube: "youtube",
            vimeo: "vimeo"
        },
        ye = {
            audio: "audio",
            video: "video"
        };
    var ve = function() {},
        be = function() {
            function t() {
                var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e(this, t), this.enabled = window.console && n, this.enabled && this.log("Debugging enabled")
            }
            return n(t, [{
                key: "log",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.log, console) : ve
                }
            }, {
                key: "warn",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.warn, console) : ve
                }
            }, {
                key: "error",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.error, console) : ve
                }
            }]), t
        }();

    function ke() {
        if(this.enabled) {
            var e = this.player.elements.buttons.fullscreen;
            m.element(e) && (e.pressed = this.active), k.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0), F.isIos || function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if(m.element(e)) {
                    var n = _.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
                        i = n[0],
                        a = n[n.length - 1];
                    g.call(this, this.elements.container, "keydown", function(e) {
                        if("Tab" === e.key && 9 === e.keyCode) {
                            var t = document.activeElement;
                            t !== a || e.shiftKey ? t === i && e.shiftKey && (a.focus(), e.preventDefault()) : (i.focus(), e.preventDefault())
                        }
                    }, t, !1)
                }
            }.call(this.player, this.target, this.active)
        }
    }

    function we() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if(t ? this.scrollPosition = {
                x: window.scrollX || 0,
                y: window.scrollY || 0
            } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = t ? "hidden" : "", L(this.target, this.player.config.classNames.fullscreen.fallback, t), F.isIos) {
            var n = document.head.querySelector('meta[name="viewport"]'),
                i = "viewport-fit=cover";
            n || (n = document.createElement("meta")).setAttribute("name", "viewport");
            var a = m.string(n.content) && n.content.includes(i);
            t ? (this.cleanupViewport = !a, a || (n.content += ",".concat(i))) : this.cleanupViewport && (n.content = n.content.split(",").filter(function(e) {
                return e.trim() !== i
            }).join(",")), setTimeout(function() {
                return V(e.target)
            }, 100)
        }
        ke.call(this)
    }
    var Te = function() {
        function t(n) {
            var i = this;
            e(this, t), this.player = n, this.prefix = t.prefix, this.property = t.property, this.scrollPosition = {
                x: 0,
                y: 0
            }, y.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function() {
                ke.call(i)
            }), y.call(this.player, this.player.elements.container, "dblclick", function(e) {
                m.element(i.player.elements.controls) && i.player.elements.controls.contains(e.target) || i.toggle()
            }), this.update()
        }
        return n(t, [{
            key: "update",
            value: function() {
                this.enabled ? this.player.debug.log("".concat(t.native ? "Native" : "Fallback", " fullscreen enabled")) : this.player.debug.log("Fullscreen not supported and fallback disabled"), L(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
            }
        }, {
            key: "enter",
            value: function() {
                this.enabled && (F.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : t.native ? this.prefix ? m.empty(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen() : we.call(this, !0))
            }
        }, {
            key: "exit",
            value: function() {
                if(this.enabled)
                    if(F.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();
                    else if(t.native)
                    if(this.prefix) {
                        if(!m.empty(this.prefix)) {
                            var e = "moz" === this.prefix ? "Cancel" : "Exit";
                            document["".concat(this.prefix).concat(e).concat(this.property)]()
                        }
                    } else(document.cancelFullScreen || document.exitFullscreen).call(document);
                else we.call(this, !1)
            }
        }, {
            key: "toggle",
            value: function() {
                this.active ? this.exit() : this.enter()
            }
        }, {
            key: "enabled",
            get: function() {
                return (t.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
            }
        }, {
            key: "active",
            get: function() {
                return !!this.enabled && (t.native ? (this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement) === this.target : x(this.target, this.player.config.classNames.fullscreen.fallback))
            }
        }, {
            key: "target",
            get: function() {
                return F.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container
            }
        }], [{
            key: "native",
            get: function() {
                return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
            }
        }, {
            key: "prefix",
            get: function() {
                if(m.function(document.exitFullscreen)) return "";
                var e = "";
                return ["webkit", "moz", "ms"].some(function(t) {
                    return !(!m.function(document["".concat(t, "ExitFullscreen")]) && !m.function(document["".concat(t, "CancelFullScreen")])) && (e = t, !0)
                }), e
            }
        }, {
            key: "property",
            get: function() {
                return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
            }
        }]), t
    }();

    function Ae(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Promise(function(n, i) {
            var a = new Image,
                s = function() {
                    delete a.onload, delete a.onerror, (a.naturalWidth >= t ? n : i)(a)
                };
            Object.assign(a, {
                onload: s,
                onerror: s,
                src: e
            })
        })
    }
    var Ee = {
            addStyleHook: function() {
                L(this.elements.container, this.config.selectors.container.replace(".", ""), !0), L(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
            },
            toggleNativeControls: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
            },
            build: function() {
                var e = this;
                if(this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void Ee.toggleNativeControls.call(this, !0);
                m.element(this.elements.controls) || (ce.inject.call(this), this.listeners.controls()), Ee.toggleNativeControls.call(this), this.isHTML5 && he.setup.call(this), this.volume = null, this.muted = null, this.speed = null, this.loop = null, this.quality = null, ce.updateVolume.call(this), ce.timeUpdate.call(this), Ee.checkPlaying.call(this), L(this.elements.container, this.config.classNames.pip.supported, z.pip && this.isHTML5 && this.isVideo), L(this.elements.container, this.config.classNames.airplay.supported, z.airplay && this.isHTML5), L(this.elements.container, this.config.classNames.isIos, F.isIos), L(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function() {
                    k.call(e, e.media, "ready")
                }, 0), Ee.setTitle.call(this), this.poster && Ee.setPoster.call(this, this.poster, !1).catch(function() {}), this.config.duration && ce.durationUpdate.call(this)
            },
            setTitle: function() {
                var e = te("play", this.config);
                if(m.string(this.config.title) && !m.empty(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach(function(t) {
                        t.setAttribute("aria-label", e)
                    }), this.isEmbed) {
                    var t = j.call(this, "iframe");
                    if(!m.element(t)) return;
                    var n = m.empty(this.config.title) ? "video" : this.config.title,
                        i = te("frameTitle", this.config);
                    t.setAttribute("title", i.replace("{title}", n))
                }
            },
            togglePoster: function(e) {
                L(this.elements.container, this.config.classNames.posterEnabled, e)
            },
            setPoster: function(e) {
                var t = this;
                return arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] || !this.poster ? (this.media.setAttribute("poster", e), function() {
                    var e = this;
                    return new Promise(function(t) {
                        return e.ready ? setTimeout(t, 0) : y.call(e, e.elements.container, "ready", t)
                    }).then(function() {})
                }.call(this).then(function() {
                    return Ae(e)
                }).catch(function(n) {
                    throw e === t.poster && Ee.togglePoster.call(t, !1), n
                }).then(function() {
                    if(e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster")
                }).then(function() {
                    return Object.assign(t.elements.poster.style, {
                        backgroundImage: "url('".concat(e, "')"),
                        backgroundSize: ""
                    }), Ee.togglePoster.call(t, !0), e
                })) : Promise.reject(new Error("Poster already set"))
            },
            checkPlaying: function(e) {
                var t = this;
                L(this.elements.container, this.config.classNames.playing, this.playing), L(this.elements.container, this.config.classNames.paused, this.paused), L(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function(e) {
                    e.pressed = t.playing
                }), m.event(e) && "timeupdate" === e.type || Ee.toggleControls.call(this)
            },
            checkLoading: function(e) {
                var t = this;
                this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function() {
                    L(t.elements.container, t.config.classNames.loading, t.loading), Ee.toggleControls.call(t)
                }, this.loading ? 250 : 0)
            },
            toggleControls: function(e) {
                var t = this.elements.controls;
                if(t && this.config.hideControls) {
                    var n = this.touch && this.lastSeekTime + 2e3 > Date.now();
                    this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || n))
                }
            }
        },
        Pe = function() {
            function t(n) {
                e(this, t), this.player = n, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
            }
            return n(t, [{
                key: "handleKey",
                value: function(e) {
                    var t = this.player,
                        n = t.elements,
                        i = e.keyCode ? e.keyCode : e.which,
                        a = "keydown" === e.type,
                        s = a && i === this.lastKey;
                    if(!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && m.number(i)) {
                        if(a) {
                            var o = document.activeElement;
                            if(m.element(o)) {
                                var r = t.config.selectors.editable;
                                if(o !== n.inputs.seek && I(o, r)) return;
                                if(32 === e.which && I(o, 'button, [role^="menuitem"]')) return
                            }
                            switch([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(i) && (e.preventDefault(), e.stopPropagation()), i) {
                                case 48:
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    s || (t.currentTime = t.duration / 10 * (i - 48));
                                    break;
                                case 32:
                                case 75:
                                    s || t.togglePlay();
                                    break;
                                case 38:
                                    t.increaseVolume(.1);
                                    break;
                                case 40:
                                    t.decreaseVolume(.1);
                                    break;
                                case 77:
                                    s || (t.muted = !t.muted);
                                    break;
                                case 39:
                                    t.forward();
                                    break;
                                case 37:
                                    t.rewind();
                                    break;
                                case 70:
                                    t.fullscreen.toggle();
                                    break;
                                case 67:
                                    s || t.toggleCaptions();
                                    break;
                                case 76:
                                    t.loop = !t.loop
                            }!t.fullscreen.enabled && t.fullscreen.active && 27 === i && t.fullscreen.toggle(), this.lastKey = i
                        } else this.lastKey = null
                    }
                }
            }, {
                key: "toggleMenu",
                value: function(e) {
                    ce.toggleMenu.call(this.player, e)
                }
            }, {
                key: "firstTouch",
                value: function() {
                    var e = this.player,
                        t = e.elements;
                    e.touch = !0, L(t.container, e.config.classNames.isTouch, !0)
                }
            }, {
                key: "setTabFocus",
                value: function(e) {
                    var t = this.player,
                        n = t.elements;
                    if(clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
                        "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                        var i, a = e.timeStamp - this.lastKeyDown <= 20;
                        if("focus" !== e.type || a) i = t.config.classNames.tabFocus, L(_.call(t, ".".concat(i)), i, !1), this.focusTimer = setTimeout(function() {
                            var e = document.activeElement;
                            n.container.contains(e) && L(document.activeElement, t.config.classNames.tabFocus, !0)
                        }, 10)
                    }
                }
            }, {
                key: "global",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = this.player;
                    t.config.keyboard.global && g.call(t, window, "keydown keyup", this.handleKey, e, !1), g.call(t, document.body, "click", this.toggleMenu, e), b.call(t, document.body, "touchstart", this.firstTouch), g.call(t, document.body, "keydown focus blur", this.setTabFocus, e, !1, !0)
                }
            }, {
                key: "container",
                value: function() {
                    var e = this.player,
                        t = e.elements;
                    !e.config.keyboard.global && e.config.keyboard.focused && y.call(e, t.container, "keydown keyup", this.handleKey, !1), y.call(e, t.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function(n) {
                        var i = t.controls;
                        i && "enterfullscreen" === n.type && (i.pressed = !1, i.hover = !1);
                        var a = 0;
                        ["touchstart", "touchmove", "mousemove"].includes(n.type) && (Ee.toggleControls.call(e, !0), a = e.touch ? 3e3 : 2e3), clearTimeout(e.timers.controls), e.timers.controls = setTimeout(function() {
                            return Ee.toggleControls.call(e, !1)
                        }, a)
                    })
                }
            }, {
                key: "media",
                value: function() {
                    var e = this.player,
                        t = e.elements;
                    if(y.call(e, e.media, "timeupdate seeking seeked", function(t) {
                            return ce.timeUpdate.call(e, t)
                        }), y.call(e, e.media, "durationchange loadeddata loadedmetadata", function(t) {
                            return ce.durationUpdate.call(e, t)
                        }), y.call(e, e.media, "canplay", function() {
                            N(t.volume, !e.hasAudio), N(t.buttons.mute, !e.hasAudio)
                        }), y.call(e, e.media, "ended", function() {
                            e.isHTML5 && e.isVideo && e.config.resetOnEnd && e.restart()
                        }), y.call(e, e.media, "progress playing seeking seeked", function(t) {
                            return ce.updateProgress.call(e, t)
                        }), y.call(e, e.media, "volumechange", function(t) {
                            return ce.updateVolume.call(e, t)
                        }), y.call(e, e.media, "playing play pause ended emptied timeupdate", function(t) {
                            return Ee.checkPlaying.call(e, t)
                        }), y.call(e, e.media, "waiting canplay seeked playing", function(t) {
                            return Ee.checkLoading.call(e, t)
                        }), y.call(e, e.media, "playing", function() {
                            e.ads && e.ads.enabled && !e.ads.initialized && e.ads.managerPromise.then(function() {
                                return e.ads.play()
                            }).catch(function() {
                                return e.play()
                            })
                        }), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                        var n = j.call(e, ".".concat(e.config.classNames.video));
                        if(!m.element(n)) return;
                        y.call(e, t.container, "click", function(i) {
                            ([t.container, n].includes(i.target) || n.contains(i.target)) && (e.touch && e.config.hideControls || (e.ended ? (e.restart(), e.play()) : e.togglePlay()))
                        })
                    }
                    e.supported.ui && e.config.disableContextMenu && y.call(e, t.wrapper, "contextmenu", function(e) {
                        e.preventDefault()
                    }, !1), y.call(e, e.media, "volumechange", function() {
                        e.storage.set({
                            volume: e.volume,
                            muted: e.muted
                        })
                    }), y.call(e, e.media, "ratechange", function() {
                        ce.updateSetting.call(e, "speed"), e.storage.set({
                            speed: e.speed
                        })
                    }), y.call(e, e.media, "qualitychange", function(t) {
                        ce.updateSetting.call(e, "quality", null, t.detail.quality)
                    }), y.call(e, e.media, "ready qualitychange", function() {
                        ce.setDownloadLink.call(e)
                    });
                    var i = e.config.events.concat(["keyup", "keydown"]).join(" ");
                    y.call(e, e.media, i, function(n) {
                        var i = n.detail,
                            a = void 0 === i ? {} : i;
                        "error" === n.type && (a = e.media.error), k.call(e, t.container, n.type, !0, a)
                    })
                }
            }, {
                key: "proxy",
                value: function(e, t, n) {
                    var i = this.player,
                        a = i.config.listeners[n],
                        s = !0;
                    m.function(a) && (s = a.call(i, e)), s && m.function(t) && t.call(i, e)
                }
            }, {
                key: "bind",
                value: function(e, t, n, i) {
                    var a = this,
                        s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        o = this.player,
                        r = o.config.listeners[i],
                        l = m.function(r);
                    y.call(o, e, t, function(e) {
                        return a.proxy(e, n, i)
                    }, s && !l)
                }
            }, {
                key: "controls",
                value: function() {
                    var e = this,
                        t = this.player,
                        n = t.elements,
                        i = F.isIE ? "change" : "input";
                    if(n.buttons.play && Array.from(n.buttons.play).forEach(function(n) {
                            e.bind(n, "click", t.togglePlay, "play")
                        }), this.bind(n.buttons.restart, "click", t.restart, "restart"), this.bind(n.buttons.rewind, "click", t.rewind, "rewind"), this.bind(n.buttons.fastForward, "click", t.forward, "fastForward"), this.bind(n.buttons.mute, "click", function() {
                            t.muted = !t.muted
                        }, "mute"), this.bind(n.buttons.captions, "click", function() {
                            return t.toggleCaptions()
                        }), this.bind(n.buttons.download, "click", function() {
                            k.call(t, t.media, "download")
                        }, "download"), this.bind(n.buttons.fullscreen, "click", function() {
                            t.fullscreen.toggle()
                        }, "fullscreen"), this.bind(n.buttons.pip, "click", function() {
                            t.pip = "toggle"
                        }, "pip"), this.bind(n.buttons.airplay, "click", t.airplay, "airplay"), this.bind(n.buttons.settings, "click", function(e) {
                            e.stopPropagation(), ce.toggleMenu.call(t, e)
                        }), this.bind(n.buttons.settings, "keyup", function(e) {
                            var n = e.which;
                            [13, 32].includes(n) && (13 !== n ? (e.preventDefault(), e.stopPropagation(), ce.toggleMenu.call(t, e)) : ce.focusFirstMenuItem.call(t, null, !0))
                        }, null, !1), this.bind(n.settings.menu, "keydown", function(e) {
                            27 === e.which && ce.toggleMenu.call(t, e)
                        }), this.bind(n.inputs.seek, "mousedown mousemove", function(e) {
                            var t = n.progress.getBoundingClientRect(),
                                i = 100 / t.width * (e.pageX - t.left);
                            e.currentTarget.setAttribute("seek-value", i)
                        }), this.bind(n.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function(e) {
                            var n = e.currentTarget,
                                i = e.keyCode ? e.keyCode : e.which;
                            if(!m.keyboardEvent(e) || 39 === i || 37 === i) {
                                t.lastSeekTime = Date.now();
                                var a = n.hasAttribute("play-on-seeked"),
                                    s = ["mouseup", "touchend", "keyup"].includes(e.type);
                                a && s ? (n.removeAttribute("play-on-seeked"), t.play()) : !s && t.playing && (n.setAttribute("play-on-seeked", ""), t.pause())
                            }
                        }), F.isIos) {
                        var s = _.call(t, 'input[type="range"]');
                        Array.from(s).forEach(function(t) {
                            return e.bind(t, i, function(e) {
                                return V(e.target)
                            })
                        })
                    }
                    this.bind(n.inputs.seek, i, function(e) {
                        var n = e.currentTarget,
                            i = n.getAttribute("seek-value");
                        m.empty(i) && (i = n.value), n.removeAttribute("seek-value"), t.currentTime = i / n.max * t.duration
                    }, "seek"), this.bind(n.progress, "mouseenter mouseleave mousemove", function(e) {
                        return ce.updateSeekTooltip.call(t, e)
                    }), F.isWebkit && Array.from(_.call(t, 'input[type="range"]')).forEach(function(n) {
                        e.bind(n, "input", function(e) {
                            return ce.updateRangeFill.call(t, e.target)
                        })
                    }), t.config.toggleInvert && !m.element(n.display.duration) && this.bind(n.display.currentTime, "click", function() {
                        0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, ce.timeUpdate.call(t))
                    }), this.bind(n.inputs.volume, i, function(e) {
                        t.volume = e.target.value
                    }, "volume"), this.bind(n.controls, "mouseenter mouseleave", function(e) {
                        n.controls.hover = !t.touch && "mouseenter" === e.type
                    }), this.bind(n.controls, "mousedown mouseup touchstart touchend touchcancel", function(e) {
                        n.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                    }), this.bind(n.controls, "focusin", function() {
                        var n = t.config,
                            i = t.elements,
                            a = t.timers;
                        L(i.controls, n.classNames.noTransition, !0), Ee.toggleControls.call(t, !0), setTimeout(function() {
                            L(i.controls, n.classNames.noTransition, !1)
                        }, 0);
                        var s = e.touch ? 3e3 : 4e3;
                        clearTimeout(a.controls), a.controls = setTimeout(function() {
                            return Ee.toggleControls.call(t, !1)
                        }, s)
                    }), this.bind(n.inputs.volume, "wheel", function(e) {
                        var n = e.webkitDirectionInvertedFromDevice,
                            i = a([e.deltaX, -e.deltaY].map(function(e) {
                                return n ? -e : e
                            }), 2),
                            s = i[0],
                            o = i[1],
                            r = Math.sign(Math.abs(s) > Math.abs(o) ? s : o);
                        t.increaseVolume(r / 50);
                        var l = t.media.volume;
                        (1 === r && l < 1 || -1 === r && l > 0) && e.preventDefault()
                    }, "volume", !1)
                }
            }]), t
        }();
    "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var Ce, Se = (function(e, t) {
        var n;
        n = function() {
            var e = function() {},
                t = {},
                n = {},
                i = {};

            function a(e, t) {
                if(e) {
                    var a = i[e];
                    if(n[e] = t, a)
                        for(; a.length;) a[0](e, t), a.splice(0, 1)
                }
            }

            function s(t, n) {
                t.call && (t = {
                    success: t
                }), n.length ? (t.error || e)(n) : (t.success || e)(t)
            }

            function o(t, n, i, a) {
                var s, r, l = document,
                    c = i.async,
                    u = (i.numRetries || 0) + 1,
                    d = i.before || e,
                    h = t.replace(/^(css|img)!/, "");
                a = a || 0, /(^css!|\.css$)/.test(t) ? (s = !0, (r = l.createElement("link")).rel = "stylesheet", r.href = h) : /(^img!|\.(png|gif|jpg|svg)$)/.test(t) ? (r = l.createElement("img")).src = h : ((r = l.createElement("script")).src = t, r.async = void 0 === c || c), r.onload = r.onerror = r.onbeforeload = function(e) {
                    var l = e.type[0];
                    if(s && "hideFocus" in r) try {
                        r.sheet.cssText.length || (l = "e")
                    } catch (e) {
                        l = "e"
                    }
                    if("e" == l && (a += 1) < u) return o(t, n, i, a);
                    n(t, l, e.defaultPrevented)
                }, !1 !== d(t, r) && l.head.appendChild(r)
            }

            function r(e, n, i) {
                var r, l;
                if(n && n.trim && (r = n), l = (r ? i : n) || {}, r) {
                    if(r in t) throw "LoadJS";
                    t[r] = !0
                }! function(e, t, n) {
                    var i, a, s = (e = e.push ? e : [e]).length,
                        r = s,
                        l = [];
                    for(i = function(e, n, i) {
                            if("e" == n && l.push(e), "b" == n) {
                                if(!i) return;
                                l.push(e)
                            }--s || t(l)
                        }, a = 0; a < r; a++) o(e[a], i, n)
                }(e, function(e) {
                    s(l, e), a(r, e)
                }, l)
            }
            return r.ready = function(e, t) {
                return function(e, t) {
                    e = e.push ? e : [e];
                    var a, s, o, r = [],
                        l = e.length,
                        c = l;
                    for(a = function(e, n) {
                            n.length && r.push(e), --c || t(r)
                        }; l--;) s = e[l], (o = n[s]) ? a(s, o) : (i[s] = i[s] || []).push(a)
                }(e, function(e) {
                    s(t, e)
                }), r
            }, r.done = function(e) {
                a(e, [])
            }, r.reset = function() {
                t = {}, n = {}, i = {}
            }, r.isDefined = function(e) {
                return e in t
            }, r
        }, e.exports = n()
    }(Ce = {
        exports: {}
    }, Ce.exports), Ce.exports);

    function Me(e) {
        return new Promise(function(t, n) {
            Se(e, {
                success: t,
                error: n
            })
        })
    }

    function Ne(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, k.call(this, this.media, e ? "play" : "pause"))
    }
    var Le = {
        setup: function() {
            var e = this;
            L(this.elements.wrapper, this.config.classNames.embed, !0), Le.setAspectRatio.call(this), m.object(window.Vimeo) ? Le.ready.call(this) : Me(this.config.urls.vimeo.sdk).then(function() {
                Le.ready.call(e)
            }).catch(function(t) {
                e.debug.warn("Vimeo API failed to load", t)
            })
        },
        setAspectRatio: function(e) {
            var t = a((m.string(e) ? e : this.config.ratio).split(":"), 2),
                n = 100 / t[0] * t[1];
            if(this.elements.wrapper.style.paddingBottom = "".concat(n, "%"), this.supported.ui) {
                var i = (240 - n) / 4.8;
                this.media.style.transform = "translateY(-".concat(i, "%)")
            }
        },
        ready: function() {
            var e = this,
                t = this,
                n = de({
                    loop: t.config.loop.active,
                    autoplay: t.autoplay,
                    byline: !1,
                    portrait: !1,
                    title: !1,
                    speed: !0,
                    transparent: 0,
                    gesture: "media",
                    playsinline: !this.config.fullscreen.iosNative
                }),
                i = t.media.getAttribute("src");
            m.empty(i) && (i = t.media.getAttribute(t.config.attributes.embed.id));
            var a, s = (a = i, m.empty(a) ? null : m.number(Number(a)) ? a : a.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : a),
                o = A("iframe"),
                r = Q(t.config.urls.vimeo.iframe, s, n);
            o.setAttribute("src", r), o.setAttribute("allowfullscreen", ""), o.setAttribute("allowtransparency", ""), o.setAttribute("allow", "autoplay");
            var l = A("div", {
                poster: t.poster,
                class: t.config.classNames.embedContainer
            });
            l.appendChild(o), t.media = S(l, t.media), ie(Q(t.config.urls.vimeo.api, s), "json").then(function(e) {
                if(!m.empty(e)) {
                    var n = new URL(e[0].thumbnail_large);
                    n.pathname = "".concat(n.pathname.split("_")[0], ".jpg"), Ee.setPoster.call(t, n.href).catch(function() {})
                }
            }), t.embed = new window.Vimeo.Player(o, {
                autopause: t.config.autopause,
                muted: t.muted
            }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function() {
                return Ne.call(t, !0), t.embed.play()
            }, t.media.pause = function() {
                return Ne.call(t, !1), t.embed.pause()
            }, t.media.stop = function() {
                t.pause(), t.currentTime = 0
            };
            var c = t.media.currentTime;
            Object.defineProperty(t.media, "currentTime", {
                get: function() {
                    return c
                },
                set: function(e) {
                    var n = t.embed,
                        i = t.media,
                        a = t.paused,
                        s = t.volume,
                        o = a && !n.hasPlayed;
                    i.seeking = !0, k.call(t, i, "seeking"), Promise.resolve(o && n.setVolume(0)).then(function() {
                        return n.setCurrentTime(e)
                    }).then(function() {
                        return o && n.pause()
                    }).then(function() {
                        return o && n.setVolume(s)
                    }).catch(function() {})
                }
            });
            var u = t.config.speed.selected;
            Object.defineProperty(t.media, "playbackRate", {
                get: function() {
                    return u
                },
                set: function(e) {
                    t.embed.setPlaybackRate(e).then(function() {
                        u = e, k.call(t, t.media, "ratechange")
                    }).catch(function(e) {
                        "Error" === e.name && ce.setSpeedMenu.call(t, [])
                    })
                }
            });
            var d = t.config.volume;
            Object.defineProperty(t.media, "volume", {
                get: function() {
                    return d
                },
                set: function(e) {
                    t.embed.setVolume(e).then(function() {
                        d = e, k.call(t, t.media, "volumechange")
                    })
                }
            });
            var h = t.config.muted;
            Object.defineProperty(t.media, "muted", {
                get: function() {
                    return h
                },
                set: function(e) {
                    var n = !!m.boolean(e) && e;
                    t.embed.setVolume(n ? 0 : t.config.volume).then(function() {
                        h = n, k.call(t, t.media, "volumechange")
                    })
                }
            });
            var p, f = t.config.loop;
            Object.defineProperty(t.media, "loop", {
                get: function() {
                    return f
                },
                set: function(e) {
                    var n = m.boolean(e) ? e : t.config.loop.active;
                    t.embed.setLoop(n).then(function() {
                        f = n
                    })
                }
            }), t.embed.getVideoUrl().then(function(e) {
                p = e, ce.setDownloadLink.call(t)
            }).catch(function(t) {
                e.debug.warn(t)
            }), Object.defineProperty(t.media, "currentSrc", {
                get: function() {
                    return p
                }
            }), Object.defineProperty(t.media, "ended", {
                get: function() {
                    return t.currentTime === t.duration
                }
            }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function(t) {
                var n = function(e, t) {
                    var n = function e(t, n) {
                        return 0 === n ? t : e(n, t % n)
                    }(e, t);
                    return "".concat(e / n, ":").concat(t / n)
                }(t[0], t[1]);
                Le.setAspectRatio.call(e, n)
            }), t.embed.setAutopause(t.config.autopause).then(function(e) {
                t.config.autopause = e
            }), t.embed.getVideoTitle().then(function(n) {
                t.config.title = n, Ee.setTitle.call(e)
            }), t.embed.getCurrentTime().then(function(e) {
                c = e, k.call(t, t.media, "timeupdate")
            }), t.embed.getDuration().then(function(e) {
                t.media.duration = e, k.call(t, t.media, "durationchange")
            }), t.embed.getTextTracks().then(function(e) {
                t.media.textTracks = e, he.setup.call(t)
            }), t.embed.on("cuechange", function(e) {
                var n = e.cues,
                    i = (void 0 === n ? [] : n).map(function(e) {
                        return t = e.text, n = document.createDocumentFragment(), i = document.createElement("div"), n.appendChild(i), i.innerHTML = t, n.firstChild.innerText;
                        var t, n, i
                    });
                he.updateCues.call(t, i)
            }), t.embed.on("loaded", function() {
                (t.embed.getPaused().then(function(e) {
                    Ne.call(t, !e), e || k.call(t, t.media, "playing")
                }), m.element(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1)
            }), t.embed.on("play", function() {
                Ne.call(t, !0), k.call(t, t.media, "playing")
            }), t.embed.on("pause", function() {
                Ne.call(t, !1)
            }), t.embed.on("timeupdate", function(e) {
                t.media.seeking = !1, c = e.seconds, k.call(t, t.media, "timeupdate")
            }), t.embed.on("progress", function(e) {
                t.media.buffered = e.percent, k.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && k.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function(e) {
                    e !== t.media.duration && (t.media.duration = e, k.call(t, t.media, "durationchange"))
                })
            }), t.embed.on("seeked", function() {
                t.media.seeking = !1, k.call(t, t.media, "seeked")
            }), t.embed.on("ended", function() {
                t.media.paused = !0, k.call(t, t.media, "ended")
            }), t.embed.on("error", function(e) {
                t.media.error = e, k.call(t, t.media, "error")
            }), setTimeout(function() {
                return Ee.build.call(t)
            }, 0)
        }
    };

    function xe(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, k.call(this, this.media, e ? "play" : "pause"))
    }
    var Ie, _e = {
            setup: function() {
                var e = this;
                L(this.elements.wrapper, this.config.classNames.embed, !0), _e.setAspectRatio.call(this), m.object(window.YT) && m.function(window.YT.Player) ? _e.ready.call(this) : (Me(this.config.urls.youtube.sdk).catch(function(t) {
                    e.debug.warn("YouTube API failed to load", t)
                }), window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [], window.onYouTubeReadyCallbacks.push(function() {
                    _e.ready.call(e)
                }), window.onYouTubeIframeAPIReady = function() {
                    window.onYouTubeReadyCallbacks.forEach(function(e) {
                        e()
                    })
                })
            },
            getTitle: function(e) {
                var t = this;
                if(m.function(this.embed.getVideoData)) {
                    var n = this.embed.getVideoData().title;
                    if(m.empty(n)) return this.config.title = n, void Ee.setTitle.call(this)
                }
                var i = this.config.keys.google;
                m.string(i) && !m.empty(i) && ie(Q(this.config.urls.youtube.api, e, i)).then(function(e) {
                    m.object(e) && (t.config.title = e.items[0].snippet.title, Ee.setTitle.call(t))
                }).catch(function() {})
            },
            setAspectRatio: function() {
                var e = this.config.ratio.split(":");
                this.elements.wrapper.style.paddingBottom = "".concat(100 / e[0] * e[1], "%")
            },
            ready: function() {
                var e = this,
                    t = e.media.getAttribute("id");
                if(m.empty(t) || !t.startsWith("youtube-")) {
                    var n = e.media.getAttribute("src");
                    m.empty(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));
                    var i, a, s = (i = n, m.empty(i) ? null : i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : i),
                        o = (a = e.provider, "".concat(a, "-").concat(Math.floor(1e4 * Math.random()))),
                        r = A("div", {
                            id: o,
                            poster: e.poster
                        });
                    e.media = S(r, e.media);
                    var l = function(e) {
                        return "https://img.youtube.com/vi/".concat(s, "/").concat(e, "default.jpg")
                    };
                    Ae(l("maxres"), 121).catch(function() {
                        return Ae(l("sd"), 121)
                    }).catch(function() {
                        return Ae(l("hq"))
                    }).then(function(t) {
                        return Ee.setPoster.call(e, t.src)
                    }).then(function(t) {
                        t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                    }).catch(function() {}), e.embed = new window.YT.Player(o, {
                        videoId: s,
                        playerVars: {
                            autoplay: e.config.autoplay ? 1 : 0,
                            hl: e.config.hl,
                            controls: e.supported.ui ? 0 : 1,
                            rel: 0,
                            showinfo: 0,
                            iv_load_policy: 3,
                            modestbranding: 1,
                            disablekb: 1,
                            playsinline: 1,
                            widget_referrer: window ? window.location.href : null,
                            cc_load_policy: e.captions.active ? 1 : 0,
                            cc_lang_pref: e.config.captions.language
                        },
                        events: {
                            onError: function(t) {
                                if(!e.media.error) {
                                    var n = t.data,
                                        i = {
                                            2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                            5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                            100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                            101: "The owner of the requested video does not allow it to be played in embedded players.",
                                            150: "The owner of the requested video does not allow it to be played in embedded players."
                                        } [n] || "An unknown error occured";
                                    e.media.error = {
                                        code: n,
                                        message: i
                                    }, k.call(e, e.media, "error")
                                }
                            },
                            onPlaybackRateChange: function(t) {
                                var n = t.target;
                                e.media.playbackRate = n.getPlaybackRate(), k.call(e, e.media, "ratechange")
                            },
                            onReady: function(t) {
                                if(!m.function(e.media.play)) {
                                    var n = t.target;
                                    _e.getTitle.call(e, s), e.media.play = function() {
                                        xe.call(e, !0), n.playVideo()
                                    }, e.media.pause = function() {
                                        xe.call(e, !1), n.pauseVideo()
                                    }, e.media.stop = function() {
                                        n.stopVideo()
                                    }, e.media.duration = n.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                        get: function() {
                                            return Number(n.getCurrentTime())
                                        },
                                        set: function(t) {
                                            e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, k.call(e, e.media, "seeking"), n.seekTo(t)
                                        }
                                    }), Object.defineProperty(e.media, "playbackRate", {
                                        get: function() {
                                            return n.getPlaybackRate()
                                        },
                                        set: function(e) {
                                            n.setPlaybackRate(e)
                                        }
                                    });
                                    var i = e.config.volume;
                                    Object.defineProperty(e.media, "volume", {
                                        get: function() {
                                            return i
                                        },
                                        set: function(t) {
                                            i = t, n.setVolume(100 * i), k.call(e, e.media, "volumechange")
                                        }
                                    });
                                    var a = e.config.muted;
                                    Object.defineProperty(e.media, "muted", {
                                        get: function() {
                                            return a
                                        },
                                        set: function(t) {
                                            var i = m.boolean(t) ? t : a;
                                            a = i, n[i ? "mute" : "unMute"](), k.call(e, e.media, "volumechange")
                                        }
                                    }), Object.defineProperty(e.media, "currentSrc", {
                                        get: function() {
                                            return n.getVideoUrl()
                                        }
                                    }), Object.defineProperty(e.media, "ended", {
                                        get: function() {
                                            return e.currentTime === e.duration
                                        }
                                    }), e.options.speed = n.getAvailablePlaybackRates(), e.supported.ui && e.media.setAttribute("tabindex", -1), k.call(e, e.media, "timeupdate"), k.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function() {
                                        e.media.buffered = n.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && k.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), k.call(e, e.media, "canplaythrough"))
                                    }, 200), setTimeout(function() {
                                        return Ee.build.call(e)
                                    }, 50)
                                }
                            },
                            onStateChange: function(t) {
                                var n = t.target;
                                switch(clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, k.call(e, e.media, "seeked")), t.data) {
                                    case -1:
                                        k.call(e, e.media, "timeupdate"), e.media.buffered = n.getVideoLoadedFraction(), k.call(e, e.media, "progress");
                                        break;
                                    case 0:
                                        xe.call(e, !1), e.media.loop ? (n.stopVideo(), n.playVideo()) : k.call(e, e.media, "ended");
                                        break;
                                    case 1:
                                        e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (xe.call(e, !0), k.call(e, e.media, "playing"), e.timers.playing = setInterval(function() {
                                            k.call(e, e.media, "timeupdate")
                                        }, 50), e.media.duration !== n.getDuration() && (e.media.duration = n.getDuration(), k.call(e, e.media, "durationchange")));
                                        break;
                                    case 2:
                                        e.muted || e.embed.unMute(), xe.call(e, !1)
                                }
                                k.call(e, e.elements.container, "statechange", !1, {
                                    code: t.data
                                })
                            }
                        }
                    })
                }
            }
        },
        je = {
            setup: function() {
                this.media ? (L(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), L(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && L(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = A("div", {
                    class: this.config.classNames.video
                }), w(this.media, this.elements.wrapper), this.elements.poster = A("div", {
                    class: this.config.classNames.poster
                }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? W.extend.call(this) : this.isYouTube ? _e.setup.call(this) : this.isVimeo && Le.setup.call(this)) : this.debug.warn("No media element found!")
            }
        },
        Oe = function() {
            function t(n) {
                var i = this;
                e(this, t), this.player = n, this.publisherId = n.config.ads.publisherId, this.playing = !1, this.initialized = !1, this.elements = {
                    container: null,
                    displayContainer: null
                }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function(e, t) {
                    i.on("loaded", e), i.on("error", t)
                }), this.load()
            }
            return n(t, [{
                key: "load",
                value: function() {
                    var e = this;
                    this.enabled && (m.object(window.google) && m.object(window.google.ima) ? this.ready() : Me(this.player.config.urls.googleIMA.sdk).then(function() {
                        e.ready()
                    }).catch(function() {
                        e.trigger("error", new Error("Google IMA SDK failed to load"))
                    }))
                }
            }, {
                key: "ready",
                value: function() {
                    var e = this;
                    this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function() {
                        e.clearSafetyTimer("onAdsManagerLoaded()")
                    }), this.listeners(), this.setupIMA()
                }
            }, {
                key: "setupIMA",
                value: function() {
                    this.elements.container = A("div", {
                        class: this.player.config.classNames.ads
                    }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container), this.requestAds()
                }
            }, {
                key: "requestAds",
                value: function() {
                    var e = this,
                        t = this.player.elements.container;
                    try {
                        this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function(t) {
                            return e.onAdsManagerLoaded(t)
                        }, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(t) {
                            return e.onAdError(t)
                        }, !1);
                        var n = new google.ima.AdsRequest;
                        n.adTagUrl = this.tagUrl, n.linearAdSlotWidth = t.offsetWidth, n.linearAdSlotHeight = t.offsetHeight, n.nonLinearAdSlotWidth = t.offsetWidth, n.nonLinearAdSlotHeight = t.offsetHeight, n.forceNonLinearFullSlot = !1, n.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(n)
                    } catch (e) {
                        this.onAdError(e)
                    }
                }
            }, {
                key: "pollCountdown",
                value: function() {
                    var e = this;
                    if(!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                    this.countdownTimer = setInterval(function() {
                        var t = le(Math.max(e.manager.getRemainingTime(), 0)),
                            n = "".concat(te("advertisement", e.player.config), " - ").concat(t);
                        e.elements.container.setAttribute("data-badge-text", n)
                    }, 100)
                }
            }, {
                key: "onAdsManagerLoaded",
                value: function(e) {
                    var t = this;
                    if(this.enabled) {
                        var n = new google.ima.AdsRenderingSettings;
                        n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), m.empty(this.cuePoints) || this.cuePoints.forEach(function(e) {
                            if(0 !== e && -1 !== e && e < t.player.duration) {
                                var n = t.player.elements.progress;
                                if(m.element(n)) {
                                    var i = 100 / t.player.duration * e,
                                        a = A("span", {
                                            class: t.player.config.classNames.cues
                                        });
                                    a.style.left = "".concat(i.toString(), "%"), n.appendChild(a)
                                }
                            }
                        }), this.manager.setVolume(this.player.volume), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(e) {
                            return t.onAdError(e)
                        }), Object.keys(google.ima.AdEvent.Type).forEach(function(e) {
                            t.manager.addEventListener(google.ima.AdEvent.Type[e], function(e) {
                                return t.onAdEvent(e)
                            })
                        }), this.trigger("loaded")
                    }
                }
            }, {
                key: "onAdEvent",
                value: function(e) {
                    var t = this,
                        n = this.player.elements.container,
                        i = e.getAd(),
                        a = function(e) {
                            var n = "ads".concat(e.replace(/_/g, "").toLowerCase());
                            k.call(t.player, t.player.media, n)
                        };
                    switch(e.type) {
                        case google.ima.AdEvent.Type.LOADED:
                            this.trigger("loaded"), a(e.type), this.pollCountdown(!0), i.isLinear() || (i.width = n.offsetWidth, i.height = n.offsetHeight);
                            break;
                        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                            a(e.type), this.loadAds();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                            a(e.type), this.pauseContent();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                            a(e.type), this.pollCountdown(), this.resumeContent();
                            break;
                        case google.ima.AdEvent.Type.STARTED:
                        case google.ima.AdEvent.Type.MIDPOINT:
                        case google.ima.AdEvent.Type.COMPLETE:
                        case google.ima.AdEvent.Type.IMPRESSION:
                        case google.ima.AdEvent.Type.CLICK:
                            a(e.type)
                    }
                }
            }, {
                key: "onAdError",
                value: function(e) {
                    this.cancel(), this.player.debug.warn("Ads error", e)
                }
            }, {
                key: "listeners",
                value: function() {
                    var e, t = this,
                        n = this.player.elements.container;
                    this.player.on("ended", function() {
                        t.loader.contentComplete()
                    }), this.player.on("seeking", function() {
                        return e = t.player.currentTime
                    }), this.player.on("seeked", function() {
                        var n = t.player.currentTime;
                        m.empty(t.cuePoints) || t.cuePoints.forEach(function(i, a) {
                            e < i && i < n && (t.manager.discardAdBreak(), t.cuePoints.splice(a, 1))
                        })
                    }), window.addEventListener("resize", function() {
                        t.manager && t.manager.resize(n.offsetWidth, n.offsetHeight, google.ima.ViewMode.NORMAL)
                    })
                }
            }, {
                key: "play",
                value: function() {
                    var e = this,
                        t = this.player.elements.container;
                    this.managerPromise || this.resumeContent(), this.managerPromise.then(function() {
                        e.elements.displayContainer.initialize();
                        try {
                            e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0
                        } catch (t) {
                            e.onAdError(t)
                        }
                    }).catch(function() {})
                }
            }, {
                key: "resumeContent",
                value: function() {
                    this.elements.container.style.zIndex = "", this.playing = !1, this.player.currentTime < this.player.duration && this.player.play()
                }
            }, {
                key: "pauseContent",
                value: function() {
                    this.elements.container.style.zIndex = 3, this.playing = !0, this.player.pause()
                }
            }, {
                key: "cancel",
                value: function() {
                    this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
                }
            }, {
                key: "loadAds",
                value: function() {
                    var e = this;
                    this.managerPromise.then(function() {
                        e.manager && e.manager.destroy(), e.managerPromise = new Promise(function(t) {
                            e.on("loaded", t), e.player.debug.log(e.manager)
                        }), e.requestAds()
                    }).catch(function() {})
                }
            }, {
                key: "trigger",
                value: function(e) {
                    for(var t = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                    var s = this.events[e];
                    m.array(s) && s.forEach(function(e) {
                        m.function(e) && e.apply(t, i)
                    })
                }
            }, {
                key: "on",
                value: function(e, t) {
                    return m.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this
                }
            }, {
                key: "startSafetyTimer",
                value: function(e, t) {
                    var n = this;
                    this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout(function() {
                        n.cancel(), n.clearSafetyTimer("startSafetyTimer()")
                    }, e)
                }
            }, {
                key: "clearSafetyTimer",
                value: function(e) {
                    m.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null)
                }
            }, {
                key: "enabled",
                get: function() {
                    return this.player.isHTML5 && this.player.isVideo && this.player.config.ads.enabled && !m.empty(this.publisherId)
                }
            }, {
                key: "tagUrl",
                get: function() {
                    var e = {
                        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                        AV_CHANNELID: "5a0458dc28a06145e4519d21",
                        AV_URL: window.location.hostname,
                        cb: Date.now(),
                        AV_WIDTH: 640,
                        AV_HEIGHT: 480,
                        AV_CDIM2: this.publisherId
                    };
                    return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(de(e))
                }
            }]), t
        }(),
        qe = {
            insertElements: function(e, t) {
                var n = this;
                m.string(t) ? E(e, this.media, {
                    src: t
                }) : m.array(t) && t.forEach(function(t) {
                    E(e, n.media, t)
                })
            },
            change: function(e) {
                var t = this;
                Y(e, "sources.length") ? (W.cancelRequests.call(this), this.destroy.call(this, function() {
                    t.options.quality = [], P(t.media), t.media = null, m.element(t.elements.container) && t.elements.container.removeAttribute("class");
                    var n = e.sources,
                        i = e.type,
                        s = a(n, 1)[0],
                        o = s.provider,
                        r = void 0 === o ? ge.html5 : o,
                        l = s.src,
                        c = "html5" === r ? i : "div",
                        u = "html5" === r ? {} : {
                            src: l
                        };
                    Object.assign(t, {
                        provider: r,
                        type: i,
                        supported: z.check(i, r, t.config.playsinline),
                        media: A(c, u)
                    }), t.elements.container.appendChild(t.media), m.boolean(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), m.empty(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), Ee.addStyleHook.call(t), t.isHTML5 && qe.insertElements.call(t, "source", n), t.config.title = e.title, je.setup.call(t), t.isHTML5 && ("tracks" in e && qe.insertElements.call(t, "track", e.tracks), t.media.load()), (t.isHTML5 || t.isEmbed && !t.supported.ui) && Ee.build.call(t), t.fullscreen.update()
                }, !0)) : this.debug.warn("Invalid source format")
            }
        },
        Re = function() {
            function t(n, i) {
                var a = this;
                if(e(this, t), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = z.touch, this.media = n, m.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || m.nodeList(this.media) || m.array(this.media)) && (this.media = this.media[0]), this.config = J({}, pe, t.defaults, i || {}, function() {
                        try {
                            return JSON.parse(a.media.getAttribute("data-plyr-config"))
                        } catch (e) {
                            return {}
                        }
                    }()), this.elements = {
                        container: null,
                        captions: null,
                        buttons: {},
                        display: {},
                        progress: {},
                        inputs: {},
                        settings: {
                            popup: null,
                            menu: null,
                            panels: {},
                            buttons: {}
                        }
                    }, this.captions = {
                        active: null,
                        currentTrack: -1,
                        meta: new WeakMap
                    }, this.fullscreen = {
                        active: !1
                    }, this.options = {
                        speed: [],
                        quality: []
                    }, this.debug = new be(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", z), !m.nullOrUndefined(this.media) && m.element(this.media))
                    if(this.media.plyr) this.debug.warn("Target already setup");
                    else if(this.config.enabled)
                    if(z.check().api) {
                        var s = this.media.cloneNode(!0);
                        s.autoplay = !1, this.elements.original = s;
                        var o = this.media.tagName.toLowerCase(),
                            r = null,
                            l = null;
                        switch(o) {
                            case "div":
                                if(r = this.media.querySelector("iframe"), m.element(r)) {
                                    if(l = ue(r.getAttribute("src")), this.provider = function(e) {
                                            return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(e) ? ge.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? ge.vimeo : null
                                        }(l.toString()), this.elements.container = this.media, this.media = r, this.elements.container.className = "", l.search.length) {
                                        var c = ["1", "true"];
                                        c.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), c.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = c.includes(l.searchParams.get("playsinline")), this.config.hl = l.searchParams.get("hl")) : this.config.playsinline = !0
                                    }
                                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                                if(m.empty(this.provider) || !Object.keys(ge).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                                this.type = ye.video;
                                break;
                            case "video":
                            case "audio":
                                this.type = o, this.provider = ge.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                                break;
                            default:
                                return void this.debug.error("Setup failed: unsupported type")
                        }
                        this.supported = z.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new Pe(this), this.storage = new ne(this), this.media.plyr = this, m.element(this.elements.container) || (this.elements.container = A("div"), w(this.media, this.elements.container)), Ee.addStyleHook.call(this), je.setup.call(this), this.config.debug && y.call(this, this.elements.container, this.config.events.join(" "), function(e) {
                            a.debug.log("event: ".concat(e.type))
                        }), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Ee.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new Te(this), this.config.ads.enabled && (this.ads = new Oe(this)), this.config.autoplay && this.play(), this.lastSeekTime = 0) : this.debug.error("Setup failed: no support")
                    } else this.debug.error("Setup failed: no support");
                else this.debug.error("Setup failed: disabled by config");
                else this.debug.error("Setup failed: no suitable element passed")
            }
            return n(t, [{
                key: "play",
                value: function() {
                    return m.function(this.media.play) ? this.media.play() : null
                }
            }, {
                key: "pause",
                value: function() {
                    this.playing && m.function(this.media.pause) && this.media.pause()
                }
            }, {
                key: "togglePlay",
                value: function(e) {
                    (m.boolean(e) ? e : !this.playing) ? this.play(): this.pause()
                }
            }, {
                key: "stop",
                value: function() {
                    this.isHTML5 ? (this.pause(), this.restart()) : m.function(this.media.stop) && this.media.stop()
                }
            }, {
                key: "restart",
                value: function() {
                    this.currentTime = 0
                }
            }, {
                key: "rewind",
                value: function(e) {
                    this.currentTime = this.currentTime - (m.number(e) ? e : this.config.seekTime)
                }
            }, {
                key: "forward",
                value: function(e) {
                    this.currentTime = this.currentTime + (m.number(e) ? e : this.config.seekTime)
                }
            }, {
                key: "increaseVolume",
                value: function(e) {
                    var t = this.media.muted ? 0 : this.volume;
                    this.volume = t + (m.number(e) ? e : 0)
                }
            }, {
                key: "decreaseVolume",
                value: function(e) {
                    this.increaseVolume(-e)
                }
            }, {
                key: "toggleCaptions",
                value: function(e) {
                    he.toggle.call(this, e, !1)
                }
            }, {
                key: "airplay",
                value: function() {
                    z.airplay && this.media.webkitShowPlaybackTargetPicker()
                }
            }, {
                key: "toggleControls",
                value: function(e) {
                    if(this.supported.ui && !this.isAudio) {
                        var t = x(this.elements.container, this.config.classNames.hideControls),
                            n = void 0 === e ? void 0 : !e,
                            i = L(this.elements.container, this.config.classNames.hideControls, n);
                        if(i && this.config.controls.includes("settings") && !m.empty(this.config.settings) && ce.toggleMenu.call(this, !1), i !== t) {
                            var a = i ? "controlshidden" : "controlsshown";
                            k.call(this, this.media, a)
                        }
                        return !i
                    }
                    return !1
                }
            }, {
                key: "on",
                value: function(e, t) {
                    y.call(this, this.elements.container, e, t)
                }
            }, {
                key: "once",
                value: function(e, t) {
                    b.call(this, this.elements.container, e, t)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    v(this.elements.container, e, t)
                }
            }, {
                key: "destroy",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if(this.ready) {
                        var i = function() {
                            document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (P(t.elements.buttons.play), P(t.elements.captions), P(t.elements.controls), P(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), m.function(e) && e()) : (function() {
                                this && this.eventListeners && (this.eventListeners.forEach(function(e) {
                                    var t = e.element,
                                        n = e.type,
                                        i = e.callback,
                                        a = e.options;
                                    t.removeEventListener(n, i, a)
                                }), this.eventListeners = [])
                            }.call(t), S(t.elements.original, t.elements.container), k.call(t, t.elements.original, "destroyed", !0), m.function(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function() {
                                t.elements = null, t.media = null
                            }, 200))
                        };
                        this.stop(), this.isHTML5 ? (clearTimeout(this.timers.loading), Ee.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && m.function(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200))
                    }
                }
            }, {
                key: "supports",
                value: function(e) {
                    return z.mime.call(this, e)
                }
            }, {
                key: "isHTML5",
                get: function() {
                    return Boolean(this.provider === ge.html5)
                }
            }, {
                key: "isEmbed",
                get: function() {
                    return Boolean(this.isYouTube || this.isVimeo)
                }
            }, {
                key: "isYouTube",
                get: function() {
                    return Boolean(this.provider === ge.youtube)
                }
            }, {
                key: "isVimeo",
                get: function() {
                    return Boolean(this.provider === ge.vimeo)
                }
            }, {
                key: "isVideo",
                get: function() {
                    return Boolean(this.type === ye.video)
                }
            }, {
                key: "isAudio",
                get: function() {
                    return Boolean(this.type === ye.audio)
                }
            }, {
                key: "playing",
                get: function() {
                    return Boolean(this.ready && !this.paused && !this.ended)
                }
            }, {
                key: "paused",
                get: function() {
                    return Boolean(this.media.paused)
                }
            }, {
                key: "stopped",
                get: function() {
                    return Boolean(this.paused && 0 === this.currentTime)
                }
            }, {
                key: "ended",
                get: function() {
                    return Boolean(this.media.ended)
                }
            }, {
                key: "currentTime",
                set: function(e) {
                    if(this.duration) {
                        var t = m.number(e) && e > 0;
                        this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
                    }
                },
                get: function() {
                    return Number(this.media.currentTime)
                }
            }, {
                key: "buffered",
                get: function() {
                    var e = this.media.buffered;
                    return m.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
                }
            }, {
                key: "seeking",
                get: function() {
                    return Boolean(this.media.seeking)
                }
            }, {
                key: "duration",
                get: function() {
                    var e = parseFloat(this.config.duration),
                        t = (this.media || {}).duration,
                        n = m.number(t) && t !== 1 / 0 ? t : 0;
                    return e || n
                }
            }, {
                key: "volume",
                set: function(e) {
                    var t = e;
                    m.string(t) && (t = Number(t)), m.number(t) || (t = this.storage.get("volume")), m.number(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !m.empty(e) && this.muted && t > 0 && (this.muted = !1)
                },
                get: function() {
                    return Number(this.media.volume)
                }
            }, {
                key: "muted",
                set: function(e) {
                    var t = e;
                    m.boolean(t) || (t = this.storage.get("muted")), m.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
                },
                get: function() {
                    return Boolean(this.media.muted)
                }
            }, {
                key: "hasAudio",
                get: function() {
                    return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)))
                }
            }, {
                key: "speed",
                set: function(e) {
                    var t = null;
                    m.number(e) && (t = e), m.number(t) || (t = this.storage.get("speed")), m.number(t) || (t = this.config.speed.selected), t < .1 && (t = .1), t > 2 && (t = 2), this.config.speed.options.includes(t) ? (this.config.speed.selected = t, this.media.playbackRate = t) : this.debug.warn("Unsupported speed (".concat(t, ")"))
                },
                get: function() {
                    return Number(this.media.playbackRate)
                }
            }, {
                key: "quality",
                set: function(e) {
                    var t = this.config.quality,
                        n = this.options.quality;
                    if(n.length) {
                        var i = [!m.empty(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(m.number),
                            a = !0;
                        if(!n.includes(i)) {
                            var s = function(e, t) {
                                return m.array(e) && e.length ? e.reduce(function(e, n) {
                                    return Math.abs(n - t) < Math.abs(e - t) ? n : e
                                }) : null
                            }(n, i);
                            this.debug.warn("Unsupported quality option: ".concat(i, ", using ").concat(s, " instead")), i = s, a = !1
                        }
                        t.selected = i, this.media.quality = i, a && this.storage.set({
                            quality: i
                        })
                    }
                },
                get: function() {
                    return this.media.quality
                }
            }, {
                key: "loop",
                set: function(e) {
                    var t = m.boolean(e) ? e : this.config.loop.active;
                    this.config.loop.active = t, this.media.loop = t
                },
                get: function() {
                    return Boolean(this.media.loop)
                }
            }, {
                key: "source",
                set: function(e) {
                    qe.change.call(this, e)
                },
                get: function() {
                    return this.media.currentSrc
                }
            }, {
                key: "download",
                get: function() {
                    var e = this.config.urls.download;
                    return m.url(e) ? e : this.source
                }
            }, {
                key: "poster",
                set: function(e) {
                    this.isVideo ? Ee.setPoster.call(this, e, !1).catch(function() {}) : this.debug.warn("Poster can only be set for video")
                },
                get: function() {
                    return this.isVideo ? this.media.getAttribute("poster") : null
                }
            }, {
                key: "autoplay",
                set: function(e) {
                    var t = m.boolean(e) ? e : this.config.autoplay;
                    this.config.autoplay = t
                },
                get: function() {
                    return Boolean(this.config.autoplay)
                }
            }, {
                key: "currentTrack",
                set: function(e) {
                    he.set.call(this, e, !1)
                },
                get: function() {
                    var e = this.captions,
                        t = e.toggled,
                        n = e.currentTrack;
                    return t ? n : -1
                }
            }, {
                key: "language",
                set: function(e) {
                    he.setLanguage.call(this, e, !1)
                },
                get: function() {
                    return (he.getCurrentTrack.call(this) || {}).language
                }
            }, {
                key: "pip",
                set: function(e) {
                    if(z.pip) {
                        var t = m.boolean(e) ? e : !this.pip;
                        m.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? me : fe), m.function(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                    }
                },
                get: function() {
                    return z.pip ? m.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === me : null
                }
            }], [{
                key: "supported",
                value: function(e, t, n) {
                    return z.check(e, t, n)
                }
            }, {
                key: "loadSprite",
                value: function(e, t) {
                    return ae(e, t)
                }
            }, {
                key: "setup",
                value: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = null;
                    return m.string(e) ? i = Array.from(document.querySelectorAll(e)) : m.nodeList(e) ? i = Array.from(e) : m.array(e) && (i = e.filter(m.element)), m.empty(i) ? null : i.map(function(e) {
                        return new t(e, n)
                    })
                }
            }]), t
        }();
    return Re.defaults = (Ie = pe, JSON.parse(JSON.stringify(Ie))), Re
});