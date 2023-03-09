(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        75247: function(s, e, a) {
            "use strict";
            a.d(e, {
                ZP: function() {
                    return c
                }
            });
            const i = {
                    _origin: "https://api.emailjs.com"
                },
                t = (s, e, a) => {
                    if (!s) throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
                    if (!e) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
                    if (!a) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
                    return !0
                };
            class r {
                constructor(s) {
                    this.status = s.status, this.text = s.responseText
                }
            }
            const n = (s, e, a = {}) => new Promise(((t, n) => {
                const c = new XMLHttpRequest;
                c.addEventListener("load", (({
                    target: s
                }) => {
                    const e = new r(s);
                    200 === e.status || "OK" === e.text ? t(e) : n(e)
                })), c.addEventListener("error", (({
                    target: s
                }) => {
                    n(new r(s))
                })), c.open("POST", i._origin + s, !0), Object.keys(a).forEach((s => {
                    c.setRequestHeader(s, a[s])
                })), c.send(e)
            }));
            var c = {
                init: (s, e = "https://api.emailjs.com") => {
                    i._userID = s, i._origin = e
                },
                send: (s, e, a, r) => {
                    const c = r || i._userID;
                    t(c, s, e);
                    const l = {
                        lib_version: "3.6.2",
                        user_id: c,
                        service_id: s,
                        template_id: e,
                        template_params: a
                    };
                    return n("/api/v1.0/email/send", JSON.stringify(l), {
                        "Content-type": "application/json"
                    })
                },
                sendForm: (s, e, a, r) => {
                    const c = r || i._userID,
                        l = (s => {
                            let e;
                            if (e = "string" === typeof s ? document.querySelector(s) : s, !e || "FORM" !== e.nodeName) throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
                            return e
                        })(a);
                    t(c, s, e);
                    const o = new FormData(l);
                    return o.append("lib_version", "3.6.2"), o.append("service_id", s), o.append("template_id", e), o.append("user_id", c), n("/api/v1.0/email/send-form", o)
                }
            }
        },
        78581: function(s, e, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return a(53678)
            }])
        },
        73347: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893),
                t = a(67294),
                r = a(46066);
            a(98322), a(98745);

            function n(s, e, a) {
                return e in s ? Object.defineProperty(s, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : s[e] = a, s
            }

            function c(s) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(a);
                    "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(a).filter((function(s) {
                        return Object.getOwnPropertyDescriptor(a, s).enumerable
                    })))), i.forEach((function(e) {
                        n(s, e, a[e])
                    }))
                }
                return s
            }
            e.default = function() {
                var s = (0, t.useState)(null),
                    e = (s[0], s[1]);
                return (0, i.jsx)("section", {
                    id: "Collection",
                    children: (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsx)("div", {
                            className: "col-md-12 col-sm-12 collection-inner",
                            children: (0, i.jsxs)("div", {
                                className: "row",
                                children: [(0, i.jsx)("div", {
                                    className: "col-md-1 col-sm-1 text-center left image-center",
                                    children: (0, i.jsx)("img", {
                                        src: "assets/images/collection-txt.svg"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-md-11 col-sm-11 right",
                                    id: "collection-slider",
                                    children: (0, i.jsxs)(r.Z, c({
                                        ref: function(s) {
                                            return e(s)
                                        }
                                    }, {
                                        dots: !1,
                                        infinite: !0,
                                        loop: !0,
                                        autoplay: !0,
                                        speed: 2e3,
                                        autoplaySpeed: 2e3,
                                        slidesToShow: 5,
                                        slidesToScroll: 1,
                                        className: "slider-images"
                                    }, {
                                        children: [(0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_01.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_02.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_03.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_01.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_02.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_03.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_04.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_05.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_01.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_02.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_03.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_04.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_05.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_01.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_02.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_01.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_02.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_03.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_04.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_05.jpg"
                                            })
                                        })]
                                    }))
                                })]
                            })
                        })
                    })
                })
            }
        },
        17347: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893),
                t = a(67294),
                r = a(46066);
            a(98322), a(98745);

            function n(s, e, a) {
                return e in s ? Object.defineProperty(s, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : s[e] = a, s
            }

            function c(s) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(a);
                    "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(a).filter((function(s) {
                        return Object.getOwnPropertyDescriptor(a, s).enumerable
                    })))), i.forEach((function(e) {
                        n(s, e, a[e])
                    }))
                }
                return s
            }
            e.default = function() {
                var s = (0, t.useState)(null),
                    e = (s[0], s[1]);
                return (0, i.jsx)("section", {
                    id: "CollectionMobile",
                    children: (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsx)("div", {
                            className: "col-12 collection-inner",
                            children: (0, i.jsxs)("div", {
                                className: "row",
                                children: [(0, i.jsx)("div", {
                                    className: "col-2 text-center left ",
                                    children: (0, i.jsx)("img", {
                                        src: "assets/images/collection-txt.svg"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-10 right",
                                    id: "collection-mobile-slider",
                                    children: (0, i.jsxs)(r.Z, c({
                                        ref: function(s) {
                                            return e(s)
                                        }
                                    }, {
                                        dots: !1,
                                        infinite: !0,
                                        loop: !0,
                                        autoplay: !0,
                                        speed: 2e3,
                                        autoplaySpeed: 2e3,
                                        slidesToShow: 2,
                                        slidesToScroll: 1,
                                        className: "slider-images"
                                    }, {
                                        children: [(0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_01.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_02.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_03.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_01.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_02.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_03.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_04.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_05.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_01.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_02.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_03.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_04.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_05.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_01.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_02.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_01.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_02.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_03.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-1",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_04.jpg"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "collection-item gradient-2",
                                            children: (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_05.jpg"
                                            })
                                        })]
                                    }))
                                })]
                            })
                        })
                    })
                })
            }
        },
        4743: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893);
            a(67294);
            e.default = function() {
                return (0, i.jsx)("section", {
                    id: "Comingsoon",
                    children: (0, i.jsxs)("div", {
                        className: "row",
                        children: [(0, i.jsxs)("div", {
                            className: "col-md-6 col-12 left text-center",
                            children: [(0, i.jsx)("img", {
                                src: "assets/images/comingsoon-border.png"
                            }), (0, i.jsx)("h2", {
                                children: "Whitepaper"
                            }), (0, i.jsx)("a", {
                                target: "_blank",
                                href: "whitepaper",
                                className: "whitepaper",
                                children: "View"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "col-md-6 col-12 right text-center",
                            children: [(0, i.jsx)("img", {
                                src: "assets/images/comingsoon-border.png"
                            }), (0, i.jsx)("h2", {
                                children: "Tokenomics"
                            }), (0, i.jsx)("a", {
                                target: "_blank",
                                href: "whitepaper#Tokenomics",
                                className: "whitepaper",
                                children: "View"
                            })]
                        })]
                    })
                })
            }
        },
        88170: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893);
            a(67294);
            e.default = function() {
                return (0, i.jsx)("section", {
                    id: "ComingsoonMobile",
                    children: (0, i.jsxs)("div", {
                        className: "row",
                        children: [(0, i.jsxs)("div", {
                            className: "col-md-12 left text-center",
                            children: [(0, i.jsx)("img", {
                                src: "assets/images/comingsoon-border.png"
                            }), (0, i.jsx)("h2", {
                                children: "Whitepaper"
                            }), (0, i.jsx)("a", {
                                target: "_blank",
                                href: "whitepaper",
                                className: "whitepaper",
                                children: "View"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "col-md-12 right text-center mt-5",
                            children: [(0, i.jsx)("img", {
                                src: "assets/images/comingsoon-border.png"
                            }), (0, i.jsx)("h2", {
                                children: "Tokenomics"
                            }), (0, i.jsx)("a", {
                                target: "_blank",
                                href: "whitepaper#Tokenomics",
                                className: "whitepaper",
                                children: "View"
                            })]
                        })]
                    })
                })
            }
        },
        33471: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893),
                t = a(67294),
                r = a(75247),
                n = a(22920);
            a(40993);
            e.default = function() {
                var s = (0, t.useRef)();
                return (0, i.jsxs)("section", {
                    id: "Contact",
                    children: [(0, i.jsx)(n.Ix, {}), (0, i.jsx)("img", {
                        src: "assets/images/line.svg",
                        className: "line-one"
                    }), (0, i.jsx)("img", {
                        src: "assets/images/line.svg",
                        className: "line-two"
                    }), (0, i.jsx)("img", {
                        src: "assets/images/contact-triangle.png",
                        className: "contact-triangle"
                    }), (0, i.jsx)("img", {
                        src: "https://mazimatic.s3.ap-south-1.amazonaws.com/contact-focus.png",
                        className: "contact-focus"
                    }), (0, i.jsxs)("div", {
                        className: "row",
                        children: [(0, i.jsx)("div", {
                            className: "col-md-4 col-sm-4",
                            children: (0, i.jsx)("img", {
                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/contact-poster.png",
                                id: "Contactvideo"
                            })
                        }), (0, i.jsxs)("div", {
                            className: "col-md-8 col-sm-8",
                            children: [(0, i.jsx)("h2", {
                                children: "Contact Us"
                            }), (0, i.jsxs)("form", {
                                ref: s,
                                onSubmit: function(e) {
                                    e.preventDefault(), r.ZP.sendForm("service_nqzg4tq", "template_70qokfa", s.current, "Tx8CszlyOrnECPigx").then((function(s) {
                                        console.log(s.text), n.Am.success("Your Email Has Been Sent!", {
                                            position: "top-right",
                                            autoClose: 4e3,
                                            hideProgressBar: !1,
                                            closeOnClick: !0,
                                            pauseOnHover: !0,
                                            draggable: !0,
                                            progress: void 0
                                        })
                                    }), (function(s) {
                                        console.log(s.text), n.Am.error("There was an error in sending email.Try again later.", {
                                            position: "top-right",
                                            autoClose: 4e3,
                                            hideProgressBar: !1,
                                            closeOnClick: !0,
                                            pauseOnHover: !0,
                                            draggable: !0,
                                            progress: void 0
                                        })
                                    }))
                                },
                                children: [(0, i.jsx)("div", {
                                    className: "row first-row",
                                    children: (0, i.jsx)("div", {
                                        className: "col-md-12 col-sm-12",
                                        children: (0, i.jsx)("input", {
                                            type: "text",
                                            name: "user_name",
                                            placeholder: "Enter your name"
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "row second-row",
                                    children: (0, i.jsx)("div", {
                                        className: "col-md-12 col-sm-12",
                                        children: (0, i.jsx)("input", {
                                            type: "text",
                                            name: "user_email",
                                            placeholder: "Enter your email Id"
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "row second-row",
                                    children: (0, i.jsx)("div", {
                                        className: "col-md-12 col-sm-12",
                                        children: (0, i.jsx)("textarea", {
                                            name: "message",
                                            placeholder: "Write your message here...",
                                            rows: "4"
                                        })
                                    })
                                }), (0, i.jsx)("input", {
                                    className: "mt-4",
                                    type: "submit",
                                    value: "Send"
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        12299: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893),
                t = a(67294),
                r = a(75247),
                n = a(22920);
            a(40993);
            e.default = function() {
                var s = (0, t.useRef)();
                return (0, i.jsxs)("section", {
                    id: "ContactMobile",
                    children: [(0, i.jsx)(n.Ix, {}), (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsxs)("div", {
                            className: "col-md-12 text-center",
                            children: [(0, i.jsx)("h2", {
                                children: "Contact Us"
                            }), (0, i.jsxs)("form", {
                                ref: s,
                                onSubmit: function(e) {
                                    e.preventDefault(), r.ZP.sendForm("service_nqzg4tq", "template_70qokfa", s.current, "Tx8CszlyOrnECPigx").then((function(s) {
                                        console.log(s.text), n.Am.success("Your Email Has Been Sent!", {
                                            position: "top-right",
                                            autoClose: 4e3,
                                            hideProgressBar: !1,
                                            closeOnClick: !0,
                                            pauseOnHover: !0,
                                            draggable: !0,
                                            progress: void 0
                                        })
                                    }), (function(s) {
                                        console.log(s.text), n.Am.error("There was an error in sending email.Try again later.", {
                                            position: "top-right",
                                            autoClose: 4e3,
                                            hideProgressBar: !1,
                                            closeOnClick: !0,
                                            pauseOnHover: !0,
                                            draggable: !0,
                                            progress: void 0
                                        })
                                    }))
                                },
                                children: [(0, i.jsx)("input", {
                                    type: "text",
                                    name: "user_name",
                                    placeholder: "Enter your name",
                                    className: "mt-5"
                                }), (0, i.jsx)("input", {
                                    type: "text",
                                    name: "user_email",
                                    placeholder: "Enter your email Id",
                                    className: "mt-4"
                                }), (0, i.jsx)("textarea", {
                                    name: "message",
                                    placeholder: "Write your message here...",
                                    rows: "4",
                                    className: "mt-4"
                                }), (0, i.jsx)("input", {
                                    className: "mt-4",
                                    type: "submit",
                                    value: "Send"
                                }), (0, i.jsx)("button", {
                                    type: "submit",
                                    className: "sumb",
                                    children: "Send"
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        71146: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893);
            a(67294);
            e.default = function() {
                return (0, i.jsxs)("section", {
                    id: "Features",
                    children: [(0, i.jsx)("img", {
                        src: "https://mazimatic.s3.ap-south-1.amazonaws.com/features-focus-1.png",
                        className: "features-focus-1"
                    }), (0, i.jsx)("img", {
                        src: "https://mazimatic.s3.ap-south-1.amazonaws.com/features-focus-2.png",
                        className: "features-focus-2"
                    }), (0, i.jsx)("img", {
                        src: "assets/images/left-lines.png",
                        className: "left-lines"
                    }), (0, i.jsx)("img", {
                        src: "assets/images/right-lines.png",
                        className: "right-lines"
                    }), (0, i.jsx)("img", {
                        src: "assets/images/line.svg",
                        className: "bottom-line"
                    }), (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsxs)("div", {
                            className: "col-md-12 col-sm-12 text-center",
                            children: [(0, i.jsx)("h2", {
                                children: "Features"
                            }), (0, i.jsx)("h3", {
                                children: "CASINO VERSE"
                            }), (0, i.jsx)("img", {
                                src: "assets/images/line.svg",
                                className: "top-line"
                            })]
                        })
                    }), (0, i.jsxs)("div", {
                        className: "features-outer",
                        children: [(0, i.jsx)("img", {
                            src: "assets/images/line.svg",
                            className: "middle-line"
                        }), (0, i.jsxs)("div", {
                            className: "row features-inner",
                            children: [(0, i.jsx)("div", {
                                className: "col-md-4 col-sm-4 video-div",
                                children: (0, i.jsx)("img", {
                                    src: "https://mazimatic.s3.ap-south-1.amazonaws.com/feature-poster-1.png",
                                    id: "Featuresvideo"
                                })
                            }), (0, i.jsxs)("div", {
                                className: "col-md-4 col-sm-4 text-div",
                                children: [(0, i.jsx)("h4", {
                                    children: "PROTOTYPE"
                                }), (0, i.jsxs)("ul", {
                                    children: [(0, i.jsx)("li", {
                                        children: "-\xa0\xa0\xa0\xa0  Select Characters/Avatars"
                                    }), (0, i.jsx)("li", {
                                        children: "-\xa0\xa0\xa0\xa0  American Roulette"
                                    }), (0, i.jsx)("li", {
                                        children: "-\xa0\xa0\xa0\xa0  Invite Friends"
                                    }), (0, i.jsx)("li", {
                                        children: "-\xa0\xa0\xa0\xa0  Real Time voice chat"
                                    }), (0, i.jsx)("li", {
                                        children: "-\xa0\xa0\xa0\xa0  Feel the casino environment"
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "col-md-4 col-sm-4 text-div",
                                children: [(0, i.jsx)("h4", {
                                    children: "FINAL BUILD"
                                }), (0, i.jsxs)("ul", {
                                    children: [(0, i.jsx)("li", {
                                        children: "-\xa0\xa0\xa0\xa0  Select Characters/Avatars"
                                    }), (0, i.jsx)("li", {
                                        children: "-\xa0\xa0\xa0\xa0  Customize Avatars"
                                    }), (0, i.jsx)("li", {
                                        children: "-\xa0\xa0\xa0\xa0  Connect Wallet"
                                    }), (0, i.jsx)("li", {
                                        children: "-\xa0\xa0\xa0\xa0  Buy Avatars/Characters"
                                    }), (0, i.jsx)("li", {
                                        children: "-\xa0\xa0\xa0\xa0  Buy Chips"
                                    }), (0, i.jsx)("li", {
                                        children: "-\xa0\xa0\xa0\xa0  Real-time Voice Chats"
                                    }), (0, i.jsx)("li", {
                                        children: "-\xa0\xa0\xa0\xa0  Real Life game experience"
                                    }), (0, i.jsx)("li", {
                                        children: "-\xa0\xa0\xa0\xa0  Ambient Lightings"
                                    }), (0, i.jsx)("li", {
                                        children: "-\xa0\xa0\xa0\xa0  Select Dealers"
                                    }), (0, i.jsx)("li", {
                                        children: "-\xa0\xa0\xa0\xa0  Change tables/machines ( Free Play )"
                                    })]
                                })]
                            })]
                        })]
                    }), (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsx)("div", {
                            className: "col-md-12 col-sm-12 text-center",
                            children: (0, i.jsx)("h2", {
                                children: "Our Partners"
                            })
                        })
                    }), (0, i.jsx)("div", {
                        className: "row first-row",
                        children: (0, i.jsx)("img", {
                            src: "saita.png",
                            className: "partnerimage"
                        })
                    })]
                })
            }
        },
        13507: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893);
            a(67294);
            e.default = function() {
                return (0, i.jsxs)("section", {
                    id: "FeaturesMobile",
                    children: [(0, i.jsx)("img", {
                        src: "./assets/images/features-left.png",
                        className: "features-left"
                    }), (0, i.jsx)("img", {
                        src: "./assets/images/features-right.png",
                        className: "features-right"
                    }), (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsxs)("div", {
                            className: "col-md-12 text-center",
                            children: [(0, i.jsx)("h2", {
                                children: "Features"
                            }), (0, i.jsx)("h3", {
                                children: "CASINO VERSE"
                            }), (0, i.jsx)("hr", {}), (0, i.jsx)("h4", {
                                children: "PROTOTYPE"
                            }), (0, i.jsx)("p", {
                                className: "mt-5",
                                children: "- Select Characters/Avatars"
                            }), (0, i.jsx)("p", {
                                children: "- American Roulette"
                            }), (0, i.jsx)("p", {
                                children: "- Invite Friends"
                            }), (0, i.jsx)("p", {
                                children: "- Real Time voice chat"
                            }), (0, i.jsx)("p", {
                                children: "- Feel the casino environment"
                            }), (0, i.jsx)("h4", {
                                children: "FINAL BUILD"
                            }), (0, i.jsx)("p", {
                                className: "mt-5",
                                children: "- Select Characters/Avatars"
                            }), (0, i.jsx)("p", {
                                children: "- Customize Avatars"
                            }), (0, i.jsx)("p", {
                                children: "- Connect Wallet"
                            }), (0, i.jsx)("p", {
                                children: "- Buy Avatars/Characters"
                            }), (0, i.jsx)("p", {
                                children: "- Buy Chips"
                            }), (0, i.jsx)("p", {
                                children: "- Real-time Voice Chats"
                            }), (0, i.jsx)("p", {
                                children: "- Real Life game experience"
                            }), (0, i.jsx)("p", {
                                children: "- Ambient Lightings"
                            }), (0, i.jsx)("p", {
                                children: "- Select Dealers"
                            }), (0, i.jsx)("p", {
                                children: "- Change tables/machines ( Free Play )"
                            })]
                        })
                    }), (0, i.jsxs)("div", {
                        className: "row",
                        children: [(0, i.jsx)("div", {
                            className: "col-md-12 col-sm-12 text-center",
                            children: (0, i.jsx)("h2", {
                                children: "Our Partners"
                            })
                        }), "  "]
                    }), (0, i.jsx)("div", {
                        className: "features-outer",
                        children: (0, i.jsx)("img", {
                            src: "saita.png",
                            className: "partnerimage"
                        })
                    })]
                })
            }
        },
        538: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893);
            a(67294);
            e.default = function() {
                return (0, i.jsxs)("section", {
                    id: "Footer",
                    children: [(0, i.jsx)("img", {
                        src: "assets/images/footer-bg.svg",
                        className: "footer-bg"
                    }), (0, i.jsxs)("div", {
                        className: "row",
                        children: [(0, i.jsx)("div", {
                            className: "col-md-4 col-sm-4",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/logo/logo.svg",
                                className: "footer-logo"
                            })
                        }), (0, i.jsxs)("div", {
                            className: "col-md-4 col-sm-4 text-center",
                            children: [(0, i.jsx)("a", {
                                href: "#",
                                className: "to-top-a",
                                children: "BACK TO TOP"
                            }), (0, i.jsx)("br", {}), (0, i.jsx)("a", {
                                href: "#",
                                children: (0, i.jsx)("img", {
                                    src: "assets/images/to-top.svg",
                                    className: "to-top-img"
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "col-md-4 col-sm-4 text-right"
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "row link-row",
                        children: [(0, i.jsx)("div", {
                            className: "col-md-2 col-sm-2"
                        }), (0, i.jsxs)("div", {
                            className: "col-md-8 col-sm-8",
                            children: [(0, i.jsx)("a", {
                                href: "./#our-vision",
                                children: (0, i.jsx)("p", {
                                    children: "Our Vision"
                                })
                            }), (0, i.jsx)("a", {
                                href: "./#mazi-verse",
                                children: (0, i.jsx)("p", {
                                    children: "MaziVerse"
                                })
                            }), (0, i.jsx)("a", {
                                href: "./#Nftkart",
                                children: (0, i.jsx)("p", {
                                    children: "NFT's"
                                })
                            }), (0, i.jsx)("a", {
                                href: "./#Roadmap",
                                children: (0, i.jsx)("p", {
                                    children: "RoadMap"
                                })
                            }), (0, i.jsx)("a", {
                                href: "./#Features",
                                children: (0, i.jsx)("p", {
                                    children: "Features"
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "col-md-2 col-sm-2"
                        })]
                    }), (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsx)("div", {
                            className: "col-md-12 col-sm-12 bottom-row",
                            children: (0, i.jsxs)("div", {
                                className: "row",
                                children: [(0, i.jsx)("div", {
                                    className: "col-md-6 col-sm-6",
                                    children: (0, i.jsx)("p", {
                                        children: "Copyright   |   MaziMatic 2022"
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "col-md-6 col-sm-6 text-right",
                                    children: [(0, i.jsx)("a", {
                                        href: "/privacy-policy",
                                        children: "Privacy Policy |"
                                    }), (0, i.jsx)("a", {
                                        href: "/terms-and-conditions",
                                        children: "Terms & Conditions |"
                                    }), (0, i.jsx)("a", {
                                        href: "/disclaimer",
                                        children: "Disclaimer "
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
        },
        85623: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893);
            a(67294);
            e.default = function() {
                return (0, i.jsxs)("section", {
                    id: "FooterMobile",
                    children: [(0, i.jsx)("img", {
                        src: "./assets/images/footer-mobile-bg.svg",
                        className: "footer-mobile-bg"
                    }), (0, i.jsxs)("div", {
                        className: "row",
                        children: [(0, i.jsxs)("div", {
                            className: "col-md-12 text-center top-div",
                            children: [(0, i.jsx)("a", {
                                href: "#",
                                className: "to-top-a",
                                children: "BACK TO TOP"
                            }), (0, i.jsx)("br", {}), (0, i.jsx)("a", {
                                href: "#",
                                children: (0, i.jsx)("img", {
                                    src: "assets/images/to-top.svg",
                                    className: "to-top-img"
                                })
                            }), (0, i.jsx)("br", {}), (0, i.jsx)("img", {
                                src: "assets/images/footer-mobile-logo.svg",
                                className: "footer-mobile-logo"
                            }), (0, i.jsx)("div", {
                                className: "row link-row",
                                children: (0, i.jsxs)("div", {
                                    className: "col-md-12",
                                    children: [(0, i.jsx)("a", {
                                        href: "./#OurVisionMobile",
                                        children: (0, i.jsx)("p", {
                                            children: "Our Vision"
                                        })
                                    }), (0, i.jsx)("a", {
                                        href: "./#MaziVerseMobile",
                                        children: (0, i.jsx)("p", {
                                            children: "MaziVerse"
                                        })
                                    }), (0, i.jsx)("a", {
                                        href: "./#NftkartMobile",
                                        children: (0, i.jsx)("p", {
                                            children: "NFT's"
                                        })
                                    }), (0, i.jsx)("a", {
                                        href: "./#RoadmapMobile",
                                        children: (0, i.jsx)("p", {
                                            children: "RoadMap"
                                        })
                                    }), (0, i.jsx)("a", {
                                        href: "./#FeaturesMobile",
                                        children: (0, i.jsx)("p", {
                                            children: "Features"
                                        })
                                    })]
                                })
                            }), (0, i.jsx)("br", {}), (0, i.jsx)("a", {
                                href: "https://instagram.com/mazimatic.official?utm_medium=copy_link",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: "assets/images/icons/instagram.svg",
                                    className: "social"
                                })
                            }), (0, i.jsx)("a", {
                                href: "https://t.me/mazimatic",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: "assets/images/icons/telegram.svg",
                                    className: "social"
                                })
                            }), (0, i.jsx)("a", {
                                href: "https://m.facebook.com/mazimatic/",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: "assets/images/icons/facebook.svg",
                                    className: "social"
                                })
                            }), (0, i.jsx)("a", {
                                href: "https://twitter.com/mazimatic?s=11",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: "assets/images/icons/twitter.svg",
                                    className: "social"
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "col-md-12 bottom-div text-center",
                            children: [(0, i.jsx)("p", {
                                className: "mt-5",
                                children: "Copyright   |   MaziMatic 2022"
                            }), (0, i.jsx)("a", {
                                href: "privacy-policy",
                                children: "Privacy Policy |"
                            }), (0, i.jsx)("a", {
                                href: "terms-and-conditions",
                                children: "Terms & Conditions |"
                            }), (0, i.jsx)("a", {
                                href: "disclaimer",
                                children: "Disclaimer "
                            })]
                        })]
                    })]
                })
            }
        },
        97084: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893);
            a(67294);
            e.default = function() {
                return (0, i.jsx)("div", {
                    className: "ring-outer",
                    children: (0, i.jsxs)("div", {
                        className: "ring",
                        children: [(0, i.jsx)("img", {
                            src: "assets/images/logo.png",
                            height: "100",
                            width: "100",
                            className: "loader-logo"
                        }), (0, i.jsx)("div", {
                            className: "loaderk"
                        })]
                    })
                })
            }
        },

        
        47755: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893),
                t = a(67294),
                r = a(85518);
            e.default = function() {
                var s = (0, t.useState)(!1),
                    e = s[0],
                    a = s[1];
                (0, t.useEffect)((function() {
                    a("Safari" === r.KC)
                }), [r.KC]);
                var n = (0, t.useRef)(null);
                (0, t.useEffect)((function() {
                    n && n.current.play()
                }), []);
                var c = (0, t.useRef)();
                (0, t.useEffect)((function() {
                    setTimeout((function() {
                        c.current.play()
                    }), 2e3)
                }), []);
                var l = (0, t.useRef)();
                (0, t.useEffect)((function() {
                    setTimeout((function() {
                        l.current.play()
                    }), 3e3)
                }), []);
                var o = (0, t.useRef)();
                (0, t.useEffect)((function() {
                    setTimeout((function() {
                        o.current.play()
                    }), 2e3)
                }), []);
                var m = (0, t.useRef)();
                return (0, t.useEffect)((function() {
                    setTimeout((function() {
                        m.current.play()
                    }), 3e3)
                }), []), (0, i.jsxs)("section", {
                    id: "Mainbanner",
                    children: [(0, i.jsx)("video", {
                        ref: n,
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        id: "Bannervideo",
                        children: (0, i.jsx)("source", {
                            src: "https://mazimatic.s3.ap-south-1.amazonaws.com/videoo.mp4"
                        })
                    }), (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsx)("div", {
                            className: "col-md-12 col-sm-12 col-lg-12 text-center",
                            children: (0, i.jsxs)("p", {
                                className: "welcome_p",
                                children: ["Worlds first ", (0, i.jsx)("span", {
                                    children: (0, i.jsx)("a", {
                                        href: "/information",
                                        target: "_blank",
                                        children: "Multi-Entertainment"
                                    })
                                })]
                            })
                        })
                    }), (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsxs)("div", {
                            className: "col-md-12 col-sm-12 col-lg-12 text-center",
                            children: [(0, i.jsx)("h1", {
                                children: (0, i.jsx)("div", {
                                    children: "Metaverse"
                                })
                            }), (0, i.jsx)("h2", {
                                className: "blue-text",
                                children: "Introducing"
                            }), (0, i.jsx)("p", {
                                className: "title_p",
                                children: (0, i.jsx)("p", {
                                    children: "Play 2 Earn & Enjoy 2 Earn"
                                })
                            }), (0, i.jsxs)("p", {
                                className: "recomment_p",
                                children: [(0, i.jsx)("img", {
                                    src: "assets/images/icons/thumb.png"
                                }), "18034 people recommend this "]
                            })]
                        })
                    }), e ? (0, i.jsxs)(i.Fragment, {
                        children: [" ", (0, i.jsx)("img", {
                            src: "https://mazimatic.s3.ap-south-1.amazonaws.com/left_girl.png",
                            id: "left_girl"
                        }), (0, i.jsx)("img", {
                            src: "https://mazimatic.s3.ap-south-1.amazonaws.com/left_man.png",
                            id: "left_man"
                        }), (0, i.jsx)("img", {
                            src: "https://mazimatic.s3.ap-south-1.amazonaws.com/right_man.png",
                            id: "right_man"
                        }), (0, i.jsx)("img", {
                            src: "https://mazimatic.s3.ap-south-1.amazonaws.com/right_girl.png",
                            id: "right_girl"
                        })]
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("video", {
                            ref: c,
                            preload: "auto",
                            muted: !0,
                            id: "left_girl",
                            children: (0, i.jsx)("source", {
                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/left_girll.webm",
                                type: "video/webm"
                            })
                        }), (0, i.jsx)("video", {
                            ref: l,
                            preload: "auto",
                            muted: !0,
                            id: "left_man",
                            children: (0, i.jsx)("source", {
                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/left_mann.webm",
                                type: "video/webm"
                            })
                        }), (0, i.jsx)("video", {
                            ref: o,
                            preload: "auto",
                            muted: !0,
                            id: "right_man",
                            children: (0, i.jsx)("source", {
                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/right_mann.webm",
                                type: "video/webm"
                            })
                        }), (0, i.jsx)("video", {
                            ref: m,
                            preload: "auto",
                            muted: !0,
                            id: "right_girl",
                            children: (0, i.jsx)("source", {
                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/right_girll.webm",
                                type: "video/webm"
                            })
                        })]
                    })]
                })
            }
        },
        22390: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893),
                t = a(67294);
            e.default = function() {
                (0, t.useRef)(null);
                return (0, t.useEffect)((function() {}), []), (0, i.jsxs)("section", {
                    id: "MainbannerMobile",
                    children: [(0, i.jsx)("img", {
                        src: "https://mazimatic.s3.ap-south-1.amazonaws.com/video_background.png",
                        id: "Bannervideo"
                    }), (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsxs)("div", {
                            className: "col-md-12 text-center",
                            children: [(0, i.jsxs)("p", {
                                className: "wel_p mt-4",
                                children: ["Worlds first ", (0, i.jsx)("span", {
                                    children: (0, i.jsx)("a", {
                                        href: "/information",
                                        target: "_blank",
                                        children: "Multi-Entertainment"
                                    })
                                })]
                            }), (0, i.jsxs)("h1", {
                                children: ["Metaverse", (0, i.jsx)("br", {}), (0, i.jsx)("span", {
                                    children: "Introducing"
                                })]
                            }), (0, i.jsx)("p", {
                                className: "title_p",
                                children: "Play 2 Earn & Enjoy 2 Earn"
                            }), (0, i.jsx)("img", {
                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/characterss.png",
                                className: "characters-img-mobile",
                                alt: "online casino"
                            }), (0, i.jsx)("div", {
                                className: "bottom-blend"
                            })]
                        })
                    }), (0, i.jsx)("img", {
                        src: "https://mazimatic.s3.ap-south-1.amazonaws.com/left_girl.png",
                        id: "left_mobile_girl"
                    }), (0, i.jsx)("img", {
                        src: "https://mazimatic.s3.ap-south-1.amazonaws.com/left_man.png",
                        id: "left_mobile_man"
                    }), (0, i.jsx)("img", {
                        src: "https://mazimatic.s3.ap-south-1.amazonaws.com/right_man.png",
                        id: "right_mobile_man"
                    }), (0, i.jsx)("img", {
                        src: "https://mazimatic.s3.ap-south-1.amazonaws.com/right_girl.png",
                        id: "right_mobile_girl"
                    })]
                })
            }
        },
        86655: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893),
                t = a(67294),
                r = a(46066);
            a(98322), a(98745);

            function n(s, e, a) {
                return e in s ? Object.defineProperty(s, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : s[e] = a, s
            }

            function c(s) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(a);
                    "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(a).filter((function(s) {
                        return Object.getOwnPropertyDescriptor(a, s).enumerable
                    })))), i.forEach((function(e) {
                        n(s, e, a[e])
                    }))
                }
                return s
            }
            e.default = function() {
                var s = (0, t.useState)(null),
                    e = s[0],
                    a = s[1];
                return (0, i.jsxs)("section", {
                    id: "mazi-verse",
                    children: [(0, i.jsxs)("div", {
                        className: "maziverse-inner",
                        children: [(0, i.jsx)("hr", {
                            style: {
                                width: "100%",
                                position: "absolute",
                                bottom: "-25px",
                                opacity: .1
                            }
                        }), (0, i.jsxs)("div", {
                            className: "left",
                            children: [(0, i.jsx)("h1", {
                                children: "MaziVerse"
                            }), (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), (0, i.jsxs)("p", {
                                className: "first-p",
                                children: [(0, i.jsx)("span", {
                                    children: "MaziVerse"
                                }), " will be our Metaverse brand that will house different Metaverse projects. It will be a ", (0, i.jsx)("span", {
                                    children: "futuristic gaming platform "
                                }), "for users who wants to experience ", (0, i.jsx)("span", {
                                    children: "real-time casino games, clubbing, experience roller coster rides, and meet their favourite influencer."
                                }), (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), "We are able to combine ", (0, i.jsx)("span", {
                                    children: "Virtual reality gaming and social living experience"
                                }), " with latest decentralised Blockchain platform ", (0, i.jsx)("span", {
                                    children: "- Polygon"
                                }), " to deliver an outstanding project for our", (0, i.jsx)("span", {
                                    children: " seamless multi-player gaming, and transactions."
                                }), " "]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "right",
                            children: [(0, i.jsx)("br", {}), (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), (0, i.jsx)("h2", {
                                children: "Our initial rollouts will be"
                            }), (0, i.jsxs)("div", {
                                className: "row1 met",
                                children: [(0, i.jsxs)("div", {
                                    className: "section1",
                                    children: [(0, i.jsx)("img", {
                                        src: "assets/images/_.png"
                                    }), " \xa0\xa0", (0, i.jsx)("p", {
                                        children: "*CASINOVERSE"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "section2",
                                    children: [(0, i.jsx)("img", {
                                        src: "assets/images/_.png"
                                    }), " \xa0\xa0", (0, i.jsx)("p", {
                                        children: "ADVENTUREVERSE"
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "row2 met",
                                children: [(0, i.jsxs)("div", {
                                    className: "section3",
                                    children: [(0, i.jsx)("img", {
                                        src: "assets/images/_.png"
                                    }), " \xa0\xa0", (0, i.jsx)("p", {
                                        children: "PARTYVERSE"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "section4",
                                    children: [(0, i.jsx)("img", {
                                        src: "assets/images/_.png"
                                    }), " \xa0\xa0", (0, i.jsx)("p", {
                                        children: "INFLUENCERVERSE"
                                    })]
                                })]
                            })]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "maziverse-outer",
                        children: [(0, i.jsxs)("div", {
                            className: "wrapper slider",
                            children: [(0, i.jsx)("img", {
                                src: "assets/images/Rectangle 246.svg",
                                className: "w-images"
                            }), (0, i.jsxs)("div", {
                                style: {
                                    position: "absolute",
                                    top: "-3%",
                                    right: "10%"
                                },
                                children: [(0, i.jsx)("button", {
                                    onClick: function() {
                                        return null === e || void 0 === e ? void 0 : e.slickPrev()
                                    },
                                    children: (0, i.jsx)("img", {
                                        style: {
                                            width: "20%"
                                        },
                                        src: "assets/images/lt.png"
                                    })
                                }), (0, i.jsx)("button", {
                                    onClick: function() {
                                        return null === e || void 0 === e ? void 0 : e.slickNext()
                                    },
                                    children: (0, i.jsx)("img", {
                                        style: {
                                            width: "20%"
                                        },
                                        src: "assets/images/gt.png"
                                    })
                                })]
                            }), (0, i.jsxs)(r.Z, c({
                                ref: function(s) {
                                    return a(s)
                                }
                            }, {
                                dots: !1,
                                infinite: !0,
                                speed: 500,
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                className: "slider-images",
                                responsive: [{
                                    breakpoint: 900,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        adaptiveHeight: !0
                                    }
                                }, {
                                    breakpoint: 1580,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1
                                    }
                                }]
                            }, {
                                children: [(0, i.jsxs)("div", {
                                    className: "parent-prototype",
                                    children: [(0, i.jsx)("img", {
                                        src: "assets/images/influencer_banner_2 1.png"
                                    }), (0, i.jsx)("div", {
                                        className: "prototype",
                                        children: (0, i.jsx)("p", {
                                            children: "Prototyping"
                                        })
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "parent-prototype",
                                    children: [(0, i.jsx)("img", {
                                        src: "assets/images/casino_banner_1 1.png"
                                    }), (0, i.jsx)("div", {
                                        className: "prototype",
                                        children: (0, i.jsx)("p", {
                                            children: "Prototyping"
                                        })
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "parent-prototype",
                                    children: [(0, i.jsx)("img", {
                                        src: "assets/images/casino_banner_1 2.png"
                                    }), (0, i.jsx)("div", {
                                        className: "prototype",
                                        children: (0, i.jsx)("p", {
                                            children: "Prototyping"
                                        })
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "parent-prototype",
                                    children: [(0, i.jsx)("img", {
                                        src: "assets/images/influencer_banner_2 1.png"
                                    }), (0, i.jsx)("div", {
                                        className: "prototype",
                                        children: (0, i.jsx)("p", {
                                            children: "Prototyping"
                                        })
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "parent-prototype",
                                    children: [(0, i.jsx)("img", {
                                        src: "assets/images/casino_banner_1 1.png"
                                    }), (0, i.jsx)("div", {
                                        className: "prototype",
                                        children: (0, i.jsx)("p", {
                                            children: "Prototyping"
                                        })
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "parent-prototype",
                                    children: [(0, i.jsx)("img", {
                                        src: "assets/images/casino_banner_1 2.png"
                                    }), (0, i.jsx)("div", {
                                        className: "prototype",
                                        children: (0, i.jsx)("p", {
                                            children: "Prototyping"
                                        })
                                    })]
                                })]
                            }))]
                        }), (0, i.jsxs)("div", {
                            className: "outers",
                            children: [(0, i.jsx)("div", {
                                className: "outer-left",
                                children: (0, i.jsx)("h2", {
                                    children: "Play more, live more..."
                                })
                            }), (0, i.jsx)("div", {
                                className: "outer-right",
                                children: (0, i.jsx)("div", {
                                    className: "telegram",
                                    children: (0, i.jsxs)("a", {
                                        className: "join-btn",
                                        rel: "noopener noreferrer",
                                        href: "https://t.me/mazimatic",
                                        target: "_blank",
                                        children: [(0, i.jsx)("img", {
                                            src: "assets/images/icons/plane.svg"
                                        }), " JOIN OUR TELEGRAM GROUP "]
                                    })
                                })
                            })]
                        }), (0, i.jsx)("img", {
                            src: "assets/images/line.svg",
                            className: "line m"
                        })]
                    })]
                })
            }
        },
        88429: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893),
                t = a(67294),
                r = a(46066);
            a(98322), a(98745);

            function n(s, e, a) {
                return e in s ? Object.defineProperty(s, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : s[e] = a, s
            }

            function c(s) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(a);
                    "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(a).filter((function(s) {
                        return Object.getOwnPropertyDescriptor(a, s).enumerable
                    })))), i.forEach((function(e) {
                        n(s, e, a[e])
                    }))
                }
                return s
            }
            e.default = function() {
                var s = (0, t.useState)(null),
                    e = (s[0], s[1]);
                return (0, i.jsx)("section", {
                    id: "MaziVerseMobile",
                    children: (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsxs)("div", {
                            className: "col-md-12 text-center",
                            children: [(0, i.jsx)("h2", {
                                children: "MaziVerse"
                            }), (0, i.jsxs)("p", {
                                className: "mt-5",
                                children: [(0, i.jsx)("span", {
                                    children: "MaziVerse"
                                }), " will be our Metaverse brand that will house different Metaverse projects. It will be a ", (0, i.jsx)("span", {
                                    children: "futuristic gaming platform"
                                }), " for users who wants to experience ", (0, i.jsx)("span", {
                                    children: "real-time casino games, clubbing, experience roller coster rides, and meet their favourite influencer. "
                                })]
                            }), (0, i.jsxs)("p", {
                                className: "mt-5",
                                children: ["We are able to combine ", (0, i.jsx)("span", {
                                    children: "Virtual reality gaming and social living experience"
                                }), " with latest decentralised Blockchain platform ", (0, i.jsx)("span", {
                                    children: "- Polygon"
                                }), " to deliver an outstanding project for our ", (0, i.jsx)("span", {
                                    children: "seamless multi-player gaming, and transactions."
                                }), " "]
                            }), (0, i.jsx)("h3", {
                                className: "mt-5",
                                children: "Our initial rollouts will be"
                            }), (0, i.jsx)("h4", {
                                className: "mt-5",
                                children: "*CASINOVERSE"
                            }), (0, i.jsx)("h4", {
                                className: "mt-4",
                                children: "PARTYVERSE"
                            }), (0, i.jsx)("h4", {
                                className: "mt-4",
                                children: "ADVENTUREVERSE"
                            }), (0, i.jsx)("h4", {
                                className: "mt-4",
                                children: "INFLUENCERVERSE"
                            }), (0, i.jsx)("div", {
                                className: "row",
                                children: (0, i.jsx)("div", {
                                    className: "col-md-12",
                                    id: "maziverse-mobile-slider",
                                    children: (0, i.jsxs)(r.Z, c({
                                        ref: function(s) {
                                            return e(s)
                                        }
                                    }, {
                                        dots: !1,
                                        infinite: !0,
                                        loop: !0,
                                        speed: 4e3,
                                        autoplaySpeed: 4e3,
                                        slidesToShow: 2,
                                        slidesToScroll: 1,
                                        className: "slider-images"
                                    }, {
                                        children: [(0, i.jsx)("div", {
                                            className: "mazi-item",
                                            children: (0, i.jsx)("img", {
                                                src: "assets/images/influencer_banner_2 1.png"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "mazi-item",
                                            children: (0, i.jsx)("img", {
                                                src: "assets/images/casino_banner_1 1.png"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "mazi-item",
                                            children: (0, i.jsx)("img", {
                                                src: "assets/images/casino_banner_1 2.png"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "mazi-item",
                                            children: (0, i.jsx)("img", {
                                                src: "assets/images/influencer_banner_2 1.png"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "mazi-item",
                                            children: (0, i.jsx)("img", {
                                                src: "assets/images/casino_banner_1 1.png"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "mazi-item",
                                            children: (0, i.jsx)("img", {
                                                src: "assets/images/casino_banner_1 2.png"
                                            })
                                        })]
                                    }))
                                })
                            }), (0, i.jsxs)("a", {
                                className: "join-btn mt-4",
                                rel: "noopener noreferrer",
                                href: "https://t.me/mazimatic",
                                target: "_blank",
                                children: [(0, i.jsx)("img", {
                                    src: "assets/images/icons/plane.svg"
                                }), "JOIN OUR TELEGRAM GROUP "]
                            }), (0, i.jsx)("br", {}), (0, i.jsx)("hr", {})]
                        })
                    })
                })
            }
        },
        27733: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893);
            a(67294);
            e.default = function() {
                var s = function(s) {
                    var e = document.getElementById(s);
                    "block" === e.style.display ? e.style.display = "none" : e.style.display = "block"
                };
                return (0, i.jsxs)("nav", {
                    className: "navbar navbar-expand-lg navbar-dark bg-dark",
                    id: "Navbar",
                    children: [(0, i.jsx)("a", {
                        className: "navbar-brand",
                        href: "./",
                        children: (0, i.jsx)("img", {
                            src: "assets/logo/mazimatic_logo_db.png",
                            className: "navbar-logo",
                            alt: "mazimatic-logo"
                        })
                    }), (0, i.jsx)("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarNav",
                        "aria-controls": "navbarNav",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: (0, i.jsx)("span", {
                            className: "navbar-toggler-icon"
                        })
                    }), (0, i.jsxs)("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarNav",
                        children: [(0, i.jsxs)("ul", {
                            className: "navbar-nav ml-auto desktop-links",
                            children: [(0, i.jsx)("li", {
                                className: "nav-item",
                                children: (0, i.jsx)("a", {
                                    className: "nav-link",
                                    href: "./#vision-content",
                                    children: "Our Vision"
                                })
                            }), (0, i.jsx)("li", {
                                className: "nav-item",
                                children: (0, i.jsx)("a", {
                                    className: "nav-link",
                                    href: "./#Verse",
                                    children: "MaziVerse"
                                })
                            }), (0, i.jsxs)("li", {
                                class: "nav-item dropdown-link",
                                onClick: function(e) {
                                    return s("drop_1")
                                },
                                children: [(0, i.jsx)("a", {
                                    class: "nav-link dropdown-toggle",
                                    style: {
                                        color: "#25FF21"
                                    },
                                    children: "NFT"
                                }), (0, i.jsxs)("div", {
                                    class: "dropdown-div",
                                    id: "drop_1",
                                    children: [(0, i.jsx)("a", {
                                        href: "pitchdeck",
                                        target: "_blank",
                                        children: "NFT Pitchdeck"
                                    }), (0, i.jsx)("br", {}), (0, i.jsx)("a", {
                                        href: "nft",
                                        children: "Buy NFTs"
                                    }), (0, i.jsx)("br", {}), (0, i.jsx)("a", {
                                        href: "https://docs.google.com/forms/d/e/1FAIpQLScltiiwhsmrtM-c7DORQGa0Ccmgp3-J3xSuPSLhHxD_0AhBbg/viewform",
                                        target: "_blank",
                                        children: "Join The Waitlist"
                                    })]
                                })]
                            }), (0, i.jsx)("li", {
                                className: "nav-item",
                                children: (0, i.jsx)("a", {
                                    className: "nav-link",
                                    href: "./#Roadmap",
                                    children: "Roadmap"
                                })
                            }), (0, i.jsx)("li", {
                                className: "nav-item",
                                children: (0, i.jsx)("a", {
                                    className: "nav-link",
                                    target: "_blank",
                                    href: "whitepaper",
                                    children: "Whitepaper"
                                })
                            }), (0, i.jsx)("li", {
                                className: "nav-item",
                                children: (0, i.jsx)("a", {
                                    className: "nav-link",
                                    href: "./#Features",
                                    children: "Features"
                                })
                            }), (0, i.jsx)("li", {
                                className: "nav-item",
                                children: (0, i.jsx)("a", {
                                    className: "nav-link",
                                    href: "./#Contact",
                                    children: "Contact Us"
                                })
                            })]
                        }), (0, i.jsxs)("ul", {
                            className: "navbar-nav ml-auto mobile-links",
                            children: [(0, i.jsx)("li", {
                                className: "nav-item",
                                children: (0, i.jsx)("a", {
                                    className: "nav-link",
                                    href: "./#OurVisionMobile",
                                    children: "Our Vision"
                                })
                            }), (0, i.jsx)("li", {
                                className: "nav-item",
                                children: (0, i.jsx)("a", {
                                    className: "nav-link",
                                    href: "./#VerseMobile",
                                    children: "MaziVerse"
                                })
                            }), (0, i.jsxs)("li", {
                                class: "nav-item dropdown-link",
                                onClick: function(e) {
                                    return s("mobile_drop_1")
                                },
                                children: [(0, i.jsx)("a", {
                                    class: "nav-link dropdown-toggle",
                                    children: "NFT"
                                }), (0, i.jsxs)("div", {
                                    class: "dropdown-div",
                                    id: "mobile_drop_1",
                                    children: [(0, i.jsx)("a", {
                                        href: "pitchdeck",
                                        target: "_blank",
                                        children: "NFT Pitchdeck"
                                    }), (0, i.jsx)("br", {}), (0, i.jsx)("a", {
                                        href: "nft",
                                        children: "Buy NFTs"
                                    }), (0, i.jsx)("br", {}), (0, i.jsx)("a", {
                                        href: "https://docs.google.com/forms/d/e/1FAIpQLScltiiwhsmrtM-c7DORQGa0Ccmgp3-J3xSuPSLhHxD_0AhBbg/viewform",
                                        target: "_blank",
                                        children: "Join The Waitlist"
                                    })]
                                })]
                            }), (0, i.jsx)("li", {
                                className: "nav-item",
                                children: (0, i.jsx)("a", {
                                    className: "nav-link",
                                    href: "./#RoadmapMobile",
                                    children: "Roadmap"
                                })
                            }), (0, i.jsx)("li", {
                                className: "nav-item",
                                children: (0, i.jsx)("a", {
                                    className: "nav-link",
                                    target: "_blank",
                                    href: "whitepaper",
                                    children: "Whitepaper"
                                })
                            }), (0, i.jsx)("li", {
                                className: "nav-item",
                                children: (0, i.jsx)("a", {
                                    className: "nav-link",
                                    href: "./#FeaturesMobile",
                                    children: "Features"
                                })
                            }), (0, i.jsx)("li", {
                                className: "nav-item",
                                children: (0, i.jsx)("a", {
                                    className: "nav-link",
                                    href: "./#ContactMobile",
                                    children: "Contact Us"
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        25380: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893);
            a(67294);
            e.default = function() {
                return (0, i.jsxs)("section", {
                    id: "Nftkart",
                    children: [(0, i.jsx)("div", {
                        className: "nft-top-blend-div"
                    }), (0, i.jsx)("div", {
                        className: "nft-bottom-blend-div"
                    }), (0, i.jsx)("img", {
                        src: "https://mazimatic.s3.ap-south-1.amazonaws.com/nft-poster.png",
                        id: "Nftvideo"
                    }), (0, i.jsx)("img", {
                        src: "assets/images/line.svg",
                        className: "line"
                    }), (0, i.jsxs)("div", {
                        className: "row",
                        children: [(0, i.jsx)("div", {
                            className: "col-md-7 col-sm-7 left-div",
                            children: (0, i.jsxs)("div", {
                                className: "row",
                                children: [(0, i.jsx)("div", {
                                    className: "col-md-6 col-sm-6 left",
                                    children: (0, i.jsxs)("div", {
                                        className: "row",
                                        children: [(0, i.jsxs)("div", {
                                            className: "col-md-12 col-sm-12 nft-item",
                                            children: [(0, i.jsx)("h4", {
                                                children: "OG Sheep"
                                            }), (0, i.jsx)("h5", {
                                                children: "@udeen_lj"
                                            }), (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_01.jpg",
                                                className: "nft-img",
                                                alt: "online casino"
                                            }), (0, i.jsx)("button", {
                                                children: "2340 USDT"
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "col-md-12 col-sm-12 nft-item",
                                            children: [(0, i.jsx)("h4", {
                                                children: "OG Sheep"
                                            }), (0, i.jsx)("h5", {
                                                children: "@udeen_lj"
                                            }), (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_01.jpg",
                                                className: "nft-img",
                                                alt: "Crypto casino"
                                            }), (0, i.jsx)("button", {
                                                children: "10000 USDT"
                                            })]
                                        })]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-md-6 col-sm-6 right",
                                    children: (0, i.jsxs)("div", {
                                        className: "row",
                                        children: [(0, i.jsxs)("div", {
                                            className: "col-md-12 col-sm-12 nft-item",
                                            children: [(0, i.jsx)("h4", {
                                                children: "OG Sheep"
                                            }), (0, i.jsx)("h5", {
                                                children: "@udeen_lj"
                                            }), (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_01.jpg",
                                                className: "nft-img",
                                                alt: "metaverse Casino"
                                            }), (0, i.jsx)("button", {
                                                children: "2340 USDT"
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "col-md-12 col-sm-12 nft-item",
                                            children: [(0, i.jsx)("h4", {
                                                children: "OG Sheep"
                                            }), (0, i.jsx)("h5", {
                                                children: "@udeen_lj"
                                            }), (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_01.jpg",
                                                className: "nft-img",
                                                alt: "cryptocurrency casino"
                                            }), (0, i.jsx)("button", {
                                                children: "3500 USDT"
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "col-md-12 col-sm-12 nft-item",
                                            children: [(0, i.jsx)("h4", {
                                                children: "OG Sheep"
                                            }), (0, i.jsx)("h5", {
                                                children: "@udeen_lj"
                                            }), (0, i.jsx)("img", {
                                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_01.jpg",
                                                className: "nft-img",
                                                alt: "online casino"
                                            }), (0, i.jsx)("button", {
                                                children: "2340 USDT"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }), (0, i.jsxs)("div", {
                            className: "col-md-5 col-sm-5 right-div",
                            children: [(0, i.jsx)("h3", {
                                children: "NFTKart"
                            }), (0, i.jsxs)("p", {
                                className: "first-p",
                                children: [(0, i.jsx)("span", {
                                    children: "NFT's are the darling of Web3 and Maziverse is incomplete without its exclusive collection."
                                }), " Not just a collection, but we will have a builtin NFT marketplace where users can trade actively. "]
                            }), (0, i.jsx)("p", {
                                children: "Apart from signature NFT's like Louis Vuitton chairs & Cartier Roulette wheels, users will also be able to mint their own tokens as well. These non-fungible tokens will also be integrated seamlessly in the gameplay which will add more value to multiplayer gaming. "
                            }), (0, i.jsx)("p", {
                                children: "Furthermore, you can customise your avatar with NFT accessories from premium brands along with other luxury items. Everything in your widest desire is just a click away with our NFTs. Be it a swanky car or a lux yacht, you got everything required to make a splash. Use these fancy NFTs and make heads turn with your grand entry to the floor \ud83d\ude0e"
                            })]
                        })]
                    })]
                })
            }
        },
        64940: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893),
                t = a(67294),
                r = a(46066);
            a(98322), a(98745);

            function n(s, e, a) {
                return e in s ? Object.defineProperty(s, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : s[e] = a, s
            }

            function c(s) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(a);
                    "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(a).filter((function(s) {
                        return Object.getOwnPropertyDescriptor(a, s).enumerable
                    })))), i.forEach((function(e) {
                        n(s, e, a[e])
                    }))
                }
                return s
            }
            e.default = function() {
                var s = (0, t.useState)(null),
                    e = (s[0], s[1]);
                return (0, i.jsxs)("section", {
                    id: "NftkartMobile",
                    children: [(0, i.jsx)("img", {
                        src: "https://mazimatic.s3.ap-south-1.amazonaws.com/nft-poster.png",
                        id: "NftvideoMobile"
                    }), (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsxs)("div", {
                            className: "col-md-12 text-center",
                            children: [(0, i.jsx)("h2", {
                                children: "NFTKart"
                            }), (0, i.jsx)("br", {}), (0, i.jsxs)("p", {
                                className: "mt-5",
                                children: [(0, i.jsx)("span", {
                                    children: "NFT's are the darling of Web3 and Maziverse is incomplete without its exclusive collection."
                                }), " Not just a collection, but we will have a builtin NFT marketplace where users can trade actively."]
                            }), (0, i.jsx)("p", {
                                className: "mt-4",
                                children: "Apart from signature NFT's like Louis Vuitton chairs & Cartier Roulette wheels, users will also be able to mint their own tokens as well. These non-fungible tokens will also be integrated seamlessly in the gameplay which will add more value to multiplayer gaming."
                            }), (0, i.jsx)("p", {
                                className: "mt-4 mb-5",
                                children: "Furthermore, you can customise your avatar with NFT accessories from premium brands along with other luxury items. Everything in your widest desire is just a click away with our NFTs. Be it a swanky car or a lux yacht, you got everything required to make a splash. Use these fancy NFTs and make heads turn with your grand entry to the floor \ud83d\ude0e"
                            }), (0, i.jsx)("br", {}), (0, i.jsx)("hr", {}), (0, i.jsx)("br", {})]
                        })
                    }), (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsx)("div", {
                            className: "col-md-12",
                            id: "nft-mobile-slider",
                            children: (0, i.jsxs)(r.Z, c({
                                ref: function(s) {
                                    return e(s)
                                }
                            }, {
                                dots: !1,
                                infinite: !0,
                                loop: !0,
                                speed: 4e3,
                                autoplaySpeed: 4e3,
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                className: "slider-images"
                            }, {
                                children: [(0, i.jsxs)("div", {
                                    className: "nft-item",
                                    children: [(0, i.jsx)("h4", {
                                        children: "OG Sheep"
                                    }), (0, i.jsx)("h5", {
                                        children: "@udeen_lj"
                                    }), (0, i.jsx)("img", {
                                        src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/BMW_01.jpg",
                                        className: "nft-img",
                                        alt: "online casino"
                                    }), (0, i.jsx)("button", {
                                        children: "2340 USDT"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "nft-item",
                                    children: [(0, i.jsx)("h4", {
                                        children: "OG Sheep"
                                    }), (0, i.jsx)("h5", {
                                        children: "@udeen_lj"
                                    }), (0, i.jsx)("img", {
                                        src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Casino_table_01.jpg",
                                        className: "nft-img",
                                        alt: "Crypto casino"
                                    }), (0, i.jsx)("button", {
                                        children: "10000 USDT"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "nft-item",
                                    children: [(0, i.jsx)("h4", {
                                        children: "OG Sheep"
                                    }), (0, i.jsx)("h5", {
                                        children: "@udeen_lj"
                                    }), (0, i.jsx)("img", {
                                        src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/rolls_01.jpg",
                                        className: "nft-img",
                                        alt: "metaverse Casino"
                                    }), (0, i.jsx)("button", {
                                        children: "2340 USDT"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "nft-item",
                                    children: [(0, i.jsx)("h4", {
                                        children: "OG Sheep"
                                    }), (0, i.jsx)("h5", {
                                        children: "@udeen_lj"
                                    }), (0, i.jsx)("img", {
                                        src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Hotgirls_01.jpg",
                                        className: "nft-img",
                                        alt: "cryptocurrency casino"
                                    }), (0, i.jsx)("button", {
                                        children: "3500 USDT"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "nft-item",
                                    children: [(0, i.jsx)("h4", {
                                        children: "OG Sheep"
                                    }), (0, i.jsx)("h5", {
                                        children: "@udeen_lj"
                                    }), (0, i.jsx)("img", {
                                        src: "https://mazimatic.s3.ap-south-1.amazonaws.com/NFTs/Shoe_01.jpg",
                                        className: "nft-img",
                                        alt: "online casino"
                                    }), (0, i.jsx)("button", {
                                        children: "2340 USDT"
                                    })]
                                })]
                            }))
                        })
                    })]
                })
            }
        },
        7246: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893);
            a(67294);
            e.default = function() {
                return (0, i.jsxs)("section", {
                    id: "our-vision",
                    children: [(0, i.jsx)("iframe", {
                        width: "100%",
                        height: "800",
                        src: "https://www.youtube.com/embed/3MgqYz90GCM",
                        title: "YouTube video player",
                        frameborder: "0",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowfullscreen: !0
                    }), (0, i.jsxs)("div", {
                        className: "vision-content",
                        id: "vision-content",
                        children: [(0, i.jsx)("img", {
                            src: "assets/images/vision-bg.png",
                            className: "vision-bg"
                        }), (0, i.jsxs)("div", {
                            className: "row",
                            children: [(0, i.jsx)("div", {
                                className: "col-md-6",
                                children: (0, i.jsx)("h2", {
                                    children: "Our Vision"
                                })
                            }), (0, i.jsxs)("div", {
                                className: "col-md-6",
                                children: [(0, i.jsxs)("p", {
                                    children: [(0, i.jsx)("img", {
                                        src: "assets/images/vision-line.svg"
                                    }), (0, i.jsx)("span", {
                                        children: "Provide a never-like-before real world casino experience."
                                    }), "A virtual world for players to hang out and play-to-earn comfortably."]
                                }), (0, i.jsxs)("p", {
                                    children: [(0, i.jsx)("img", {
                                        src: "assets/images/vision-line.svg"
                                    }), (0, i.jsx)("span", {
                                        children: "Foster a high performing VR gaming environment"
                                    }), " that rewards players generously. A platform that enables you to connect & play with friends anywhere in the world."]
                                }), (0, i.jsxs)("p", {
                                    children: [(0, i.jsx)("img", {
                                        src: "assets/images/vision-line.svg"
                                    }), (0, i.jsx)("span", {
                                        children: "Create a safe, secure and trust worthy Metaverse platform."
                                    }), " Use solid & bleeding edge web3 technology that scales to accommodate millions of users."]
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        21162: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893),
                t = a(67294);
            e.default = function() {
                (0, t.useRef)();
                return (0, i.jsxs)("section", {
                    id: "OurVisionMobile",
                    children: [(0, i.jsx)("img", {
                        src: "./assets/images/our-vision-bg.svg",
                        className: "our-vision-bg"
                    }), (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsxs)("div", {
                            className: "col-md-12 text-center",
                            children: [(0, i.jsx)("h3", {
                                children: "Our Vision"
                            }), (0, i.jsxs)("p", {
                                className: "mt-5",
                                children: [(0, i.jsx)("span", {
                                    children: "Provide a never-like-before real world casino experience."
                                }), " A virtual world for players to hang out and play-to-earn comfortably."]
                            }), (0, i.jsxs)("p", {
                                className: "mt-4",
                                children: [(0, i.jsx)("span", {
                                    children: "Foster a high performing VR gaming environment"
                                }), " that rewards players generously. A platform that enables you to connect & play with friends anywhere in the world."]
                            }), (0, i.jsxs)("p", {
                                className: "mt-4",
                                children: [(0, i.jsx)("span", {
                                    children: "Create a safe, secure and trust worthy Metaverse platform."
                                }), " Use solid & bleeding edge web3 technology that scales to accommodate millions of users."]
                            }), (0, i.jsx)("iframe", {
                                width: "100%",
                                height: "350",
                                src: "https://www.youtube.com/embed/3MgqYz90GCM",
                                title: "YouTube video player",
                                frameborder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowfullscreen: !0
                            }), (0, i.jsxs)("h4", {
                                className: "mt-5",
                                children: ["Play more live more....", (0, i.jsx)("br", {}), (0, i.jsx)("span", {
                                    children: "Stay tuned"
                                })]
                            }), (0, i.jsx)("hr", {})]
                        })
                    })]
                })
            }
        },
        46209: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893);
            a(67294), a(11163);
            e.default = function() {
                return (0, i.jsxs)("section", {
                    id: "Play",
                    children: [(0, i.jsx)("div", {
                        className: "blend-div"
                    }), (0, i.jsxs)("div", {
                        className: "row play-outer",
                        children: [(0, i.jsxs)("div", {
                            className: "col-md-4 col-sm-4",
                            children: [(0, i.jsx)("img", {
                                src: "assets/images/left-lines.svg",
                                className: "left-lines-img"
                            }), (0, i.jsx)("img", {
                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/pie.svg",
                                className: "left-pie-img",
                                alt: "online casino"
                            }), (0, i.jsxs)("h3", {
                                className: "left-h3",
                                children: [(0, i.jsx)("span", {
                                    children: "Fort-Knox"
                                }), (0, i.jsx)("br", {}), "SECURE"]
                            }), (0, i.jsx)("p", {
                                className: "left-p",
                                children: "We take security very seriously. Certik audited contracts. 24-7 guarded by professionals."
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "col-md-4 col-sm-4 play-div",
                            children: [(0, i.jsx)("img", {
                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/shield.svg",
                                className: "shield-img",
                                alt: "Crypto casino"
                            }), (0, i.jsx)("img", {
                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/big-pie.png",
                                className: "big-pie-img",
                                alt: "metaverse Casino"
                            }), (0, i.jsxs)("h3", {
                                className: "white-txt middle-h3",
                                children: [(0, i.jsxs)("span", {
                                    children: ["Win every ", (0, i.jsx)("br", {}), "time you"]
                                }), (0, i.jsx)("br", {}), "PLAY"]
                            }), (0, i.jsx)("p", {
                                className: "middle-p",
                                children: "A Metaverse built for you to Win with style \u2728  A Royale casino filled with experiences."
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "col-md-4 col-sm-4",
                            children: [(0, i.jsx)("img", {
                                src: "assets/images/right-lines.svg",
                                className: "right-lines-img"
                            }), (0, i.jsx)("img", {
                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/pie.svg",
                                className: "right-pie-img",
                                alt: "online casino"
                            }), (0, i.jsxs)("h3", {
                                className: "right-h3",
                                children: [(0, i.jsx)("span", {
                                    children: "World class"
                                }), (0, i.jsx)("br", {}), "SUPPORT"]
                            }), (0, i.jsx)("p", {
                                className: "right-p",
                                children: "Real-time support 24-7 over email & chat. Award winning  'Customer First' process."
                            })]
                        })]
                    })]
                })
            }
        },
        94132: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893),
                t = a(67294),
                r = (a(23076), a(11163)),
                n = a(83253),
                c = a.n(n);

            function l(s, e) {
                (null == e || e > s.length) && (e = s.length);
                for (var a = 0, i = new Array(e); a < e; a++) i[a] = s[a];
                return i
            }

            function o(s, e) {
                return function(s) {
                    if (Array.isArray(s)) return s
                }(s) || function(s, e) {
                    var a = null == s ? null : "undefined" !== typeof Symbol && s[Symbol.iterator] || s["@@iterator"];
                    if (null != a) {
                        var i, t, r = [],
                            n = !0,
                            c = !1;
                        try {
                            for (a = a.call(s); !(n = (i = a.next()).done) && (r.push(i.value), !e || r.length !== e); n = !0);
                        } catch (l) {
                            c = !0, t = l
                        } finally {
                            try {
                                n || null == a.return || a.return()
                            } finally {
                                if (c) throw t
                            }
                        }
                        return r
                    }
                }(s, e) || function(s, e) {
                    if (!s) return;
                    if ("string" === typeof s) return l(s, e);
                    var a = Object.prototype.toString.call(s).slice(8, -1);
                    "Object" === a && s.constructor && (a = s.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(a);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return l(s, e)
                }(s, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var m = {
                content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    background: "transparent!important"
                }
            };
            e.default = function() {
                var s = function() {
                        n(!1)
                    },
                    e = o(t.useState(!1), 2),
                    a = e[0],
                    n = e[1];
                (0, r.useRouter)();
                (0, t.useEffect)((function() {
                    n(!1)
                }), []);
                return (0, i.jsxs)("section", {
                    id: "PlayMobile",
                    children: [(0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsxs)("div", {
                            className: "col-md-12 text-center buy",
                            children: [(0, i.jsx)("img", {
                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/pie.svg",
                                className: "pie-img",
                                alt: "online casino"
                            }), (0, i.jsxs)("h3", {
                                className: "mt-2",
                                children: [(0, i.jsx)("span", {
                                    children: "Fort-Knox"
                                }), (0, i.jsx)("br", {}), "SECURE"]
                            }), (0, i.jsx)("p", {
                                className: "left-p mt-3",
                                children: "We take security very seriously. Certik audited contracts. 24-7 guarded by professionals."
                            })]
                        })
                    }), (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsxs)("div", {
                            className: "col-md-12 text-center play",
                            children: [(0, i.jsx)("img", {
                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/big-pie.png",
                                className: "",
                                alt: "Crypto casino"
                            }), (0, i.jsxs)("h3", {
                                className: "blue-text mt-2",
                                children: [(0, i.jsx)("span", {
                                    children: "Win every-time you"
                                }), (0, i.jsx)("br", {}), "PLAY"]
                            }), (0, i.jsx)("p", {
                                className: "left-p mt-3",
                                children: "A Metaverse built for you to Win with style \u2728  A Royale casino filled with experiences."
                            })]
                        })
                    }), (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsxs)("div", {
                            className: "col-md-12 text-center buy",
                            children: [(0, i.jsx)("img", {
                                src: "https://mazimatic.s3.ap-south-1.amazonaws.com/pie.svg",
                                className: "pie-img",
                                alt: "metaverse Casino"
                            }), (0, i.jsxs)("h3", {
                                className: "mt-2",
                                children: [(0, i.jsx)("span", {
                                    children: "World class"
                                }), (0, i.jsx)("br", {}), "SUPPORT"]
                            }), (0, i.jsx)("p", {
                                className: "left-p mt-3",
                                children: "Real-time support 24-7 over email & chat. Award winning  'Customer First' process."
                            })]
                        })
                    }), a ? (0, i.jsxs)(c(), {
                        isOpen: a,
                        onRequestClose: s,
                        style: m,
                        contentLabel: "Example Modal",
                        children: [(0, i.jsx)("button", {
                            className: "closebutton",
                            onClick: s,
                            children: "X"
                        }), (0, i.jsx)("div", {
                            className: "popupimage",
                            children: (0, i.jsx)("a", {
                                href: "/nft",
                                children: (0, i.jsx)("img", {
                                    src: "nft_live.jpeg"
                                })
                            })
                        })]
                    }) : ""]
                })
            }
        },
        32712: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893),
                t = a(67294);
            e.default = function() {
                var s = (0, t.useRef)();
                return (0, t.useEffect)((function() {
                    setTimeout((function() {
                        s.current.play()
                    }), 5e3)
                }), []), (0, i.jsxs)("section", {
                    id: "Polygon",
                    children: [(0, i.jsx)("video", {
                        autoPlay: !0,
                        ref: s,
                        width: "250",
                        loop: !0,
                        muted: !0,
                        id: "Polygonvideo",
                        children: (0, i.jsx)("source", {
                            src: "https://mazimatic.s3.ap-south-1.amazonaws.com/polygon-video.mp4"
                        })
                    }), (0, i.jsx)("div", {
                        className: "blend-div-top"
                    }), (0, i.jsx)("div", {
                        className: "blend-div-bottom"
                    }), (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsxs)("div", {
                            className: "col-md-12 text-center",
                            children: [(0, i.jsx)("img", {
                                src: "assets/images/together.svg",
                                className: "together"
                            }), (0, i.jsx)("img", {
                                src: "assets/images/together-with-polygon.svg",
                                className: "together-with-polygon"
                            })]
                        })
                    })]
                })
            }
        },
        7581: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893);
            a(67294);
            e.default = function() {
                return (0, i.jsx)("section", {
                    id: "PolygonMobile",
                    children: (0, i.jsx)("div", {
                        className: "row",
                        children: (0, i.jsxs)("div", {
                            className: "col-md-12 text-center",
                            children: [(0, i.jsx)("img", {
                                src: "assets/images/together.svg",
                                className: "together"
                            }), (0, i.jsx)("img", {
                                src: "assets/images/together-with-polygon-mobile.svg",
                                className: "together-with-polygon"
                            })]
                        })
                    })
                })
            }
        },
        7005: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893);
            a(67294);
            e.default = function() {
                return (0, i.jsxs)("section", {
                    id: "Press",
                    children: [(0, i.jsxs)("h3", {
                        children: [(0, i.jsx)("img", {
                            src: "assets/images/press-line.svg",
                            className: "left-line"
                        }), "In the Press", (0, i.jsx)("img", {
                            src: "assets/images/press-line.svg",
                            className: "right-line"
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "row mt-5",
                        children: [(0, i.jsx)("div", {
                            className: "col-6 col-md-3 text-center",
                            children: (0, i.jsx)("a", {
                                href: "https://www.forbes.com/billionaires/",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: "assets/images/logo/forbes.png",
                                    alt: "forbes"
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "col-6 col-md-3 text-center",
                            children: (0, i.jsx)("a", {
                                href: "https://cointelegraph.com/",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: "assets/images/logo/cointelegraph.png",
                                    alt: "cointelegraph"
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "col-6 col-md-3 text-center",
                            children: (0, i.jsx)("a", {
                                href: "https://www.khaleejtimes.com/kt-network/mazimatic-a-metaverse-dedicated-to-entertainment-and-games",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: "assets/images/logo/kjtimes.png",
                                    alt: "khaleejtimes"
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "col-6 col-md-3 text-center",
                            children: (0, i.jsx)("a", {
                                href: "https://techbullion.com/mazimatic-raises-the-bar-of-play-to-earn-p2e-through-nfts-metaverse-and-blockchain-technology/",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: "https://mazimatic.s3.ap-south-1.amazonaws.com/techbullion.png",
                                    alt: "techbullion"
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "col-6 col-md-3 text-center",
                            children: (0, i.jsx)("a", {
                                href: "https://www.bbc.com/news",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: "assets/images/logo/bbc.png",
                                    alt: "bbc"
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "col-6 col-md-3 text-center",
                            children: (0, i.jsx)("a", {
                                href: "https://www.businessinsider.in/?r=US&IR=T",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: "assets/images/logo/business_insider.png",
                                    alt: "business-insider"
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "col-6 col-md-3 text-center",
                            children: (0, i.jsx)("a", {
                                href: "https://medium.com/@mazimatic/mazimatic-building-the-worlds-first-entertainment-metaverse-5346da12e5b0",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: "assets/images/logo/medium.png",
                                    alt: "medium-blog"
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "col-6 col-md-3 text-center",
                            children: (0, i.jsx)("a", {
                                href: "https://www.cryptonexa.com/2022/07/06/mazimatic-raises-the-bar-of-play-to-earn-p2e-through-nfts-metaverse-and-blockchain-technology/",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: "https://mazimatic.s3.ap-south-1.amazonaws.com/cryptonexa.png",
                                    alt: "cryptonexa"
                                })
                            })
                        })]
                    }), (0, i.jsx)("img", {
                        src: "assets/images/press-bottom-line.svg",
                        className: "press-bottom-line"
                    })]
                })
            }
        },
        83516: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893);
            a(67294);
            e.default = function() {
                return (0, i.jsxs)("section", {
                    id: "Security",
                    children: [(0, i.jsx)("hr", {}), (0, i.jsxs)("div", {
                        className: "row mt-5 mb-5",
                        children: [(0, i.jsx)("div", {
                            className: "col-md-2 text-center"
                        }), (0, i.jsx)("div", {
                            className: "col-6 col-md-2 text-center",
                            children: (0, i.jsx)("a", {
                                href: "https://www.mcafee.com/",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: "assets/images/logo/sec1.png",
                                    alt: "mcafee"
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "col-6 col-md-2 text-center",
                            children: (0, i.jsx)("a", {
                                href: "https://cointelegraph.com/",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: "assets/images/logo/sec2.png",
                                    alt: "bbb"
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "col-6 col-md-2 text-center",
                            children: (0, i.jsx)("a", {
                                href: "https://www.huffpost.com/",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: "assets/images/logo/sec3.png",
                                    alt: "trusted-verified"
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "col-6 col-md-2 text-center",
                            children: (0, i.jsx)("a", {
                                href: "https://www.sitelock.com/",
                                target: "_blank",
                                children: (0, i.jsx)("img", {
                                    src: "assets/images/logo/sec4.png",
                                    alt: "sitelock"
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "col-md-2 text-center"
                        })]
                    }), (0, i.jsx)("hr", {
                        className: "second_hr"
                    })]
                })
            }
        },
        98913: function(s, e, a) {
            "use strict";
            a.r(e);
            var i = a(85893),
                t = a(67294),
                r = a(46066);
            a(98322), a(98745);

            function n(s, e, a) {
                return e in s ? Object.defineProperty(s, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : s[e] = a, s
            }

            function c(s) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(a);
                    "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(a).filter((function(s) {
                        return Object.getOwnPropertyDescriptor(a, s).enumerable
                    })))), i.forEach((function(e) {
                        n(s, e, a[e])
                    }))
                }
                return s
            }
            e.default = function() {
                var s = (0, t.useState)(null),
                    e = (s[0], s[1]);
                return (0, i.jsx)("section", {
                    id: "Testimonial",
                    children: (0, i.jsxs)(r.Z, c({
                        ref: function(s) {
                            return e(s)
                        }
                    }, {
                        dots: !1,
                        infinite: !0,
                        speed: 100,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        className: "slider-images",
                        responsive: [{
                            breakpoint: 900,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                adaptiveHeight: !0
                            }
                        }, {
                            breakpoint: 1580,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1
                            }
                        }]
                    }, {
                        children: [(0, i.jsxs)("div", {
                            className: "testimonial-slide text-center gradient-2",
                            children: [(0, i.jsx)("p", {
                                children: '" Am just blown away! What these folks have done is something that can\'t be explained in words. This is the Metaverse experience I have been waiting for"'
                            }), (0, i.jsxs)("h2", {
                                children: [(0, i.jsx)("img", {
                                    className: "profile-img",
                                    src: "https://mazimatic.s3.ap-south-1.amazonaws.com/australian.jpg",
                                    alt: "online casino"
                                }), " Oliver Brown "]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "testimonial-slide text-center gradient-2",
                            children: [(0, i.jsx)("p", {
                                children: '"..Okay... I have played in some of the best casinos in Vegas. Mazimatic casino has done a fantabulous job bringing the exact rich feel with elegance and supremacy \ud83d\udc4c "'
                            }), (0, i.jsxs)("h2", {
                                children: [(0, i.jsx)("img", {
                                    className: "profile-img",
                                    src: "https://mazimatic.s3.ap-south-1.amazonaws.com/norway.jpg",
                                    alt: "Crypto casino"
                                }), "Ingeborg  Pedersen"]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "testimonial-slide text-center gradient-2",
                            children: [(0, i.jsx)("p", {
                                children: '" The type of crowd you see inside the Mazimatic\'s Casinoverse is cash rich and smooth. Earning in an online casino has never been so easy! "'
                            }), (0, i.jsxs)("h2", {
                                children: [(0, i.jsx)("img", {
                                    className: "profile-img",
                                    src: "https://mazimatic.s3.ap-south-1.amazonaws.com/japanese.jpg",
                                    alt: "metaverse Casino"
                                }), "Akira Takahashi"]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "testimonial-slide text-center gradient-2",
                            children: [(0, i.jsx)("p", {
                                children: '" Am new to all this. Got to give it to Mazimatic though, for the ease of use. Onboarding and playing was a breeze inside. Am definitely coming back everyday to win :) "'
                            }), (0, i.jsxs)("h2", {
                                children: [(0, i.jsx)("img", {
                                    className: "profile-img",
                                    src: "https://mazimatic.s3.ap-south-1.amazonaws.com/brazil.jpg",
                                    alt: "cryptocurrency casino"
                                }), "Juliana Souza"]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "testimonial-slide text-center gradient-2",
                            children: [(0, i.jsx)("p", {
                                children: '" Am just blown away! What these folks have done is something that can\'t be explained in words. This is the Metaverse experience I have been waiting for"'
                            }), (0, i.jsxs)("h2", {
                                children: [(0, i.jsx)("img", {
                                    className: "profile-img",
                                    src: "https://mazimatic.s3.ap-south-1.amazonaws.com/australian.jpg",
                                    alt: "online casino"
                                }), "Oliver Brown "]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "testimonial-slide text-center gradient-2",
                            children: [(0, i.jsx)("p", {
                                children: '"..Okay... I have played in some of the best casinos in Vegas. Mazimatic casino has done a fantabulous job bringing the exact rich feel with elegance and supremacy \ud83d\udc4c "'
                            }), (0, i.jsxs)("h2", {
                                children: [(0, i.jsx)("img", {
                                    className: "profile-img",
                                    src: "https://mazimatic.s3.ap-south-1.amazonaws.com/norway.jpg",
                                    alt: "Crypto casino"
                                }), "Ingeborg  Pedersen"]
                            })]
                        })]
                    }))
                })
            }
        },
        53678: function(s, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return E
                }
            });
            var i = a(85893),
                t = a(67294),
                r = a(9008),
                n = a(27733),
                c = a(47755),
                l = a(46209),
                o = (a(32712), a(98913), a(7246)),
                m = a(7005),
                d = (a(86655), a(24410)),
                h = a(83516),
                j = a(25380),
                x = a(73347),
                p = a(12426),
                g = a(71146),
                u = a(4743),
                f = a(97084),
                v = a(95469),
                N = (a(57294), a(33471)),
                b = a(538),
                w = a(22390),
                y = a(94132),
                z = (a(7581), a(21162)),
                _ = a(88377),
                T = (a(88429), a(64940)),
                k = a(17347),
                S = a(36810),
                O = a(13507),
                F = a(88170),
                C = a(71994),
                M = a(12299),
                P = a(85623);

            function E(s) {
                s.req;
                var e = (0, t.useState)(0),
                    a = (e[0], e[1], (0, t.useState)(!0)),
                    E = a[0],
                    R = a[1];
                return (0, t.useEffect)((function() {
                    setTimeout((function() {
                        R(!1)
                    }), 2e3)
                }), []), (0, i.jsxs)("div", {
                    children: [(0, i.jsxs)(r.default, {
                        children: [(0, i.jsx)("meta", {
                            charset: "UTF-8"
                        }), (0, i.jsx)("meta", {
                            "http-equiv": "X-UA-Compatible",
                            content: "IE=edge"
                        }), (0, i.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1.0"
                        }), (0, i.jsx)("title", {
                            children: "Mazimatic: A Metaverse dedicated for entertainment, games and fun.  "
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: "Mazimatic runs the most trusted gaming platform on the Metaverse. The platform provides \u2018Maziverse\u2019, a sophisticated VR environment with multiple realms ie. Partyverse, InfluencerVerse and Adventureverse"
                        }), (0, i.jsx)("meta", {
                            name: "keywords",
                            content: "Mazimatic, Online games, Crypto gaming, Metaverse games, Cryptocurrency games"
                        }), (0, i.jsx)("meta", {
                            property: "og:title",
                            content: "Mazimatic: A Metaverse dedicated for entertainment, games and fun."
                        }), (0, i.jsx)("script", {
                            src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
                        }), (0, i.jsx)("link", {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "assets/css/bootstrap.min.css"
                        }), (0, i.jsx)("script", {
                            src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
                        }), (0, i.jsx)("script", {
                            src: "assets/js/bootstrap.min.js"
                        }), (0, i.jsx)("link", {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "assets/css/main.css"
                        }), (0, i.jsx)("link", {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "assets/css/responsive.css"
                        }), (0, i.jsx)("link", {
                            rel: "stylesheet",
                            href: "assets/css/mobile.css"
                        }), (0, i.jsx)("link", {
                            rel: "stylesheet",
                            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                        }), (0, i.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }), (0, i.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: "assets/apple-touch-icon.png"
                        }), (0, i.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "assets/favicon-32x32.png"
                        }), (0, i.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "16x16",
                            href: "assets/favicon-16x16.png"
                        }), (0, i.jsx)("script", {
                            src: "https://cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.4.5/mobile-detect.min.js"
                        })]
                    }), 1 == E ? (0, i.jsx)("div", {
                        className: "top-wrapper",
                        children: (0, i.jsx)(f.default, {})
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("a", {
                            href: "https://instagram.com/mazimatic.official?utm_medium=copy_link",
                            target: "_blank",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/icons/instagram.svg",
                                className: "float"
                            })
                        }), (0, i.jsx)("a", {
                            href: "https://t.me/mazimatic",
                            target: "_blank",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/icons/telegram.svg",
                                className: "float2"
                            })
                        }), (0, i.jsx)("a", {
                            href: "https://m.facebook.com/mazimatic/",
                            target: "_blank",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/icons/facebook.svg",
                                className: "float3"
                            })
                        }), (0, i.jsx)("a", {
                            href: "https://twitter.com/mazimatic?s=11",
                            target: "_blank",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/icons/twitter.svg",
                                className: "float4"
                            })
                        }), (0, i.jsx)("a", {
                            href: "https://discord.gg/gcYZhMA6",
                            target: "_blank",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/icons/discord.png",
                                className: "float5"
                            })
                        }), (0, i.jsx)("a", {
                            href: "https://www.youtube.com/watch?v=3MgqYz90GCM",
                            target: "_blank",
                            children: (0, i.jsx)("img", {
                                src: "assets/images/icons/youtube.png",
                                className: "float6"
                            })
                        }), (0, i.jsxs)("div", {
                            className: "top-wrapper",
                            children: [(0, i.jsx)(n.default, {}), (0, i.jsx)(c.default, {})]
                        }), (0, i.jsx)(w.default, {}), (0, i.jsx)(l.default, {}), (0, i.jsx)(y.default, {}), (0, i.jsx)(o.default, {}), (0, i.jsx)(z.default, {}), (0, i.jsx)(m.default, {}), (0, i.jsx)(d.default, {}), (0, i.jsx)(_.default, {}), (0, i.jsx)(h.default, {}), (0, i.jsx)(j.default, {}), (0, i.jsx)(T.default, {}), (0, i.jsx)(x.default, {}), (0, i.jsx)(k.default, {}), (0, i.jsx)(p.default, {}), (0, i.jsx)(S.default, {}), (0, i.jsx)(g.default, {}), (0, i.jsx)(O.default, {}), (0, i.jsx)(u.default, {}), (0, i.jsx)(F.default, {}), (0, i.jsx)(C.default, {}), (0, i.jsx)(v.default, {}), (0, i.jsx)(N.default, {}), (0, i.jsx)(M.default, {}), (0, i.jsx)(b.default, {}), (0, i.jsx)(P.default, {})]
                    }), " "]
                })
            }
        },
        9008: function(s, e, a) {
            s.exports = a(5443)
        }
    },
    function(s) {
        s.O(0, [9143, 8913, 7842, 3076, 5518, 6810, 2426, 7294, 4410, 5553, 8377, 1994, 9774, 2888, 179], (function() {
            return e = 78581, s(s.s = e);
            var e
        }));
        var e = s.O();
        _N_E = e
    }
]);