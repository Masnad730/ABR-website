"use strict";
(() => {
var exports = {};
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 5392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ post1),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
;// CONCATENATED MODULE: external "html-react-parser"
const external_html_react_parser_namespaceObject = require("html-react-parser");
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_namespaceObject);
// EXTERNAL MODULE: ./components/layout/Layout.js + 4 modules
var Layout = __webpack_require__(2534);
// EXTERNAL MODULE: ./components/FetchData.js
var FetchData = __webpack_require__(1536);
;// CONCATENATED MODULE: ./pages/article/[slug].js






function post1({ posts , post: post2  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: `${post2.title.rendered} - Afghanistan Business Referrals (ABR)`,
        descriptionContent: post2.acf.description.substring(0, 160),
        canonical: `https://abr.af/article/${post2.slug}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "min-w-full box-border font-notoSerif",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-center md:flex-row py-4 px-8 md:px-16 text-white h-48 background-img-3",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "max-w-full tracking-wider pl-6 border-l-4 border-white font-bold font-openSans",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-xl md:text-2xl lg:text-3xl mb-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: post2.title.rendered
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-xs",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "fas fa-clock mr-2"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.IntlProvider, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedDate, {
                                                value: post2.modified,
                                                day: "2-digit",
                                                month: "long",
                                                year: "numeric"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "min-w-full",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex py-16 flex-col lg:flex-row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex-3 flex px-6 lg:px-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mt-6 mb-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-sm md:text-medium lg:text-base xl:text-lg font-openSans leading-6-important whitespace-pre-wrap list-decimal",
                                            children: external_html_react_parser_default()(post2.acf.description)
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex-1 border-l border-gray_light_3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "px-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "font-bold headline",
                                                children: "Related Posts"
                                            })
                                        }),
                                        posts.map((post)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "border-b border-gray_light_3 last:border-b-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mt-4 mb-2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "text-sm md:text-medium lg:text-base leading-6-important transition-all hover:underline hover:text-primary",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/article/[article]",
                                                                as: `/article/${post.slug}`,
                                                                children: post.title.rendered
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mb-3",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "text-xs font-workSans",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.IntlProvider, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedDate, {
                                                                    value: post.modified,
                                                                    day: "2-digit",
                                                                    month: "long",
                                                                    year: "numeric"
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        )
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
async function getStaticPaths() {
    const posts = await (0,FetchData/* getPosts */.Jq)();
    const paths = posts.map((post)=>({
            params: {
                slug: post.slug
            }
        })
    );
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const posts = await (0,FetchData/* getPosts */.Jq)();
    const post3 = posts.find((post)=>post.slug === params.slug
    );
    return {
        props: {
            post: post3,
            posts
        }
    };
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3126:
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ 1223:
/***/ ((module) => {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,534,536], () => (__webpack_exec__(5392)));
module.exports = __webpack_exports__;

})();