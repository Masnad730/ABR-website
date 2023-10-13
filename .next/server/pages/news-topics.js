"use strict";
(() => {
var exports = {};
exports.id = 488;
exports.ids = [488];
exports.modules = {

/***/ 6441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ post1),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
;// CONCATENATED MODULE: external "react-scroll"
const external_react_scroll_namespaceObject = require("react-scroll");
// EXTERNAL MODULE: ./components/layout/Layout.js + 4 modules
var Layout = __webpack_require__(2534);
;// CONCATENATED MODULE: ./components/Pagination.js


const Pagination = ({ postsPerPage , totalPosts , currentPage , paginate  })=>{
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex flex-col items-start mb-4",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex text-gray-700",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-8 w-8 mr-1 flex justify-center items-center cursor-pointer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            height: "100%",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            className: "feather feather-chevron-left w-4 h-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                points: "15 18 9 12 15 6"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex h-8 font-medium ",
                        children: pageNumbers.map((pageNumber)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `w-8 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in ${pageNumber === currentPage ? 'border-b-2 border-secondary' : ''}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>paginate(pageNumber)
                                    ,
                                    className: "border-none focus:outline-none",
                                    children: pageNumber
                                })
                            }, pageNumber)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-8 w-8 ml-1 flex justify-center items-center cursor-pointer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            height: "100%",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            className: "feather feather-chevron-right w-4 h-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                points: "9 18 15 12 9 6"
                            })
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const components_Pagination = (Pagination);

// EXTERNAL MODULE: ./components/FetchData.js
var FetchData = __webpack_require__(1536);
;// CONCATENATED MODULE: ./pages/news-topics.js








function post1({ posts  }) {
    const { 0: currentPage , 1: setCurrentPage  } = (0,external_react_.useState)(1);
    const { 0: postsPerPage  } = (0,external_react_.useState)(3);
    // Get current Posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber)=>{
        external_react_scroll_namespaceObject.animateScroll.scrollTo(300);
        setCurrentPage(pageNumber);
    };
    const selectedPosts = currentPosts.map((post)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mb-12",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "max-w-screen-lg h-auto md:h-96",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "w-full h-full object-cover",
                        src: post.acf.image.url,
                        alt: post.acf.image.title
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mt-6 mb-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-lg md:text-xl font-semibold hover:text-primary",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/article/[article]",
                            as: `/article/${post.slug}`,
                            children: post.title.rendered
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-sm font-workSans",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.IntlProvider, {
                            locale: "en-US",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedDate, {
                                value: post.modified,
                                day: "2-digit",
                                month: "long",
                                year: "numeric"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-4 text-sm md:text-medium lg:text-base xl:text-lg font-openSans leading-6-important line-clamp-3",
                    dangerouslySetInnerHTML: {
                        __html: post.acf.description.substring(0, 150)
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-sm",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "font-openSans border-none text-primary text-sm md:text-medium lg:text-base border-b border-solid group border-current inline-block bg-transparent pointer pb-0.5 custom-transition hover:text-grey_dark_1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/article/[article]",
                                as: `/article/${post.slug}`,
                                children: "Read More"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "ml-1 custom-transition group-hover:ml-2",
                                children: "→"
                            })
                        ]
                    })
                })
            ]
        }, post.id)
    );
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: "News & Topics - Afghanistan Business Referrals (ABR)",
        descriptionContent: "",
        canonical: "https://abr.af/news-topics/",
        active: "news and topic",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "min-w-full box-border font-notoSerif",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col py-10 px-8 md:px-16 justify-center items-center text-white background-img-3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-xl md:text-3xl mb-2 font-bold font-notoSerif",
                        children: "Blog"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "min-w-full",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col lg:flex-row py-16",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex-3 px-6 md:px-8 xl:px-12",
                                children: [
                                    selectedPosts,
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_Pagination, {
                                        postsPerPage: postsPerPage,
                                        totalPosts: posts.length,
                                        paginate: paginate,
                                        currentPage: currentPage
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex-1 border-l border-gray_light_3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "px-6 md:px-8 lg:px-6 pt-12",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "font-bold headline",
                                                children: "Recent Posts"
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
                                            }, post.id)
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
const getStaticProps = async ()=>{
    const posts = await (0,FetchData/* getPosts */.Jq)();
    return {
        props: {
            posts: posts
        }
    };
};


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,534,536], () => (__webpack_exec__(6441)));
module.exports = __webpack_exports__;

})();