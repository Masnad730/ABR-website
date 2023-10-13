"use strict";
(() => {
var exports = {};
exports.id = 280;
exports.ids = [280];
exports.modules = {

/***/ 1759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ advisors2),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-select"
const external_react_select_namespaceObject = require("react-select");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_namespaceObject);
// EXTERNAL MODULE: external "react-loader-spinner"
var external_react_loader_spinner_ = __webpack_require__(1223);
var external_react_loader_spinner_default = /*#__PURE__*/__webpack_require__.n(external_react_loader_spinner_);
// EXTERNAL MODULE: ./components/layout/Layout.js + 4 modules
var Layout = __webpack_require__(2534);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/PracticeArea.js



const PracticeArea = ({ advisors , practiceArea  })=>{
    var ref;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "min-w-full bg-gray_light_2 font-openSans",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex min-w-full px-4 lg:max-w-full",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex-col flex-1 px-0 sm:px-8 py-12",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "my-6 text-base sm:text-lg text-gray-700",
                        children: `You searched for ${practiceArea}`
                    }),
                    advisors.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "No advisor Found"
                    }),
                    advisors.length > 0 && advisors.map((advisor)=>{
                        var ref2, ref1;
                        /*#__PURE__*/ return (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col sm:flex-row w-full my-6 bg-white rounded-md shadow",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex-1 flex items-center justify-center p-4 cursor-pointer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/advisor/[advisor]/",
                                        as: `/advisor/${advisor.slug}`,
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                alt: advisor.acf.firm_logo.name,
                                                src: (ref = (ref2 = advisor.acf.firm_logo) === null || ref2 === void 0 ? void 0 : (ref1 = ref2.sizes) === null || ref1 === void 0 ? void 0 : ref1.medium) !== null && ref !== void 0 ? ref : '',
                                                className: "w-28 md:w-36 lg:w-40 object-contain"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex-4 px-3 sm:px-8 py-4 border-l border-gray-200 border-solid",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "flex-auto text-lg sm:text-xl mb-2 font-bold font-notoSerif text-blue",
                                            children: advisor.acf.firm_name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "pb-4 border-b border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text-sm",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-sm md:text-medium lg:text-base font-semibold",
                                                            children: "Contact Person:"
                                                        }),
                                                        ' ',
                                                        "\xa0",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-sm md:text-medium lg:text-base",
                                                            children: advisor.acf.contact_person
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "text-sm md:text-medium lg:text-base font-semibold",
                                                            children: [
                                                                ' ',
                                                                "Expertise:"
                                                            ]
                                                        }),
                                                        ' ',
                                                        "\xa0",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-sm md:text-medium lg:text-base",
                                                            children: practiceArea
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text-sm",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-sm md:text-medium lg:text-base font-semibold",
                                                            children: "City:"
                                                        }),
                                                        ' ',
                                                        "\xa0",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-sm md:text-medium lg:text-base",
                                                            children: advisor.acf.citys
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "mt-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "text-sm",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "font-semibold",
                                                                    children: "Telephone:"
                                                                }),
                                                                " \xa0",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "cursor-pointer hover:underline",
                                                                    children: advisor.acf.phone_number
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "text-sm",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "font-semibold",
                                                                    children: "Email:"
                                                                }),
                                                                " \xa0",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "cursor-pointer hover:underline",
                                                                    children: advisor.acf.email
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex justify-end my-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                className: "border-none text-primary border-b border-solid group border-current inline-block bg-transparent pointer pb-0.5 custom-transition hover:text-grey_dark_1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/advisor/[advisor]/",
                                                        as: `/advisor/${advisor.slug}`,
                                                        passHref: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            target: "_blank",
                                                            children: "View Profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ml-1 custom-transition group-hover:ml-2",
                                                        children: "→"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, advisor.id);
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const components_PracticeArea = (PracticeArea);

// EXTERNAL MODULE: ./components/FetchData.js
var FetchData = __webpack_require__(1536);
;// CONCATENATED MODULE: ./pages/advisors.js







function advisors2({ areas  }) {
    const { 0: errMsg , 1: setErrMsg  } = (0,external_react_.useState)(null);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { 0: selectedOption1 , 1: setSelectedOption  } = (0,external_react_.useState)(null);
    const { 0: advisors1 , 1: setAdvisors  } = (0,external_react_.useState)(null);
    const { 0: isClicked , 1: setIsClicked  } = (0,external_react_.useState)(false);
    const { 0: practiceArea , 1: setPracticeArea  } = (0,external_react_.useState)('');
    const handleChange = (selectedOption)=>{
        setSelectedOption(selectedOption);
        setIsClicked(true);
        setAdvisors(null);
        setErrMsg('');
    };
    const handleClick = async ()=>{
        let advisors;
        if (selectedOption1 && isClicked) {
            setErrMsg('');
            setIsLoading(true);
            try {
                advisors = await (0,FetchData/* findAdvisorForPractice */.JI)(selectedOption1.label);
                setAdvisors(advisors);
                setIsLoading(false);
            } catch (error) {
                setErrMsg('an error occurred, please try again');
                setIsLoading(false);
            }
        //const practiceArea = allPracticeAreas.find((area) => area.id === selectedOption.value)
        } else {
            setErrMsg('Please select an expertise');
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        title: "Find an Advisor - Afghanistan Business Referrals (ABR)",
        descriptionContent: "ABR members represent Afghanistan leading legal, accountancy and financial advisers. Each member is recommended exclusively by jurisdiction and practice area expertise.",
        canonical: "https://abr.af/advisor/",
        active: "find an advisor",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "min-w-full bg-gray_light_2 font-openSans",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pb-7 md:pb-14 pt-12 md:pt-24",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col p-4 m-8 mb-0 border border-gray-300 border-solid md:p-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-2xl font-semibold sm:text-3xl",
                                children: "Find an Advisor"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mt-4 text-sm md:text-medium lg:text-base xl:text-lg",
                                children: "Please use the search function below to find the right adviser to meet your needs"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "items-center mt-2 flex flex-col md:flex-row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-full md:w-64",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_select_default()), {
                                            value: selectedOption1,
                                            onChange: handleChange,
                                            options: areas,
                                            isClearable: true,
                                            menuPlacement: "auto",
                                            isSearchable: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-full md:w-max mt-4 flex items-center justify-center text-white bg-gray-700 md:mt-0 sm:ml-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            onClick: handleClick,
                                            className: "flex items-center justify-items-center px-8 py-1.5 outline-none border-none focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: `${isLoading ? 'mr-4' : 'mr-0'}`,
                                                    children: "Search"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "flex items-center justify-center",
                                                    children: isLoading && /*#__PURE__*/ jsx_runtime_.jsx((external_react_loader_spinner_default()), {
                                                        type: "Oval",
                                                        color: "#fff",
                                                        height: 20,
                                                        width: 20
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-primary text-medium mt-2",
                                children: errMsg
                            })
                        ]
                    })
                })
            }),
            advisors1 && /*#__PURE__*/ jsx_runtime_.jsx(components_PracticeArea, {
                advisors: advisors1,
                isClicked: isClicked,
                practiceArea: selectedOption1.label
            })
        ]
    }));
};
async function getStaticProps(context) {
    const allPracticeAreas = await (0,FetchData/* getAllPracticeAreas */.Tb)();
    const areas = allPracticeAreas.map((area)=>({
            value: area.id,
            label: area.acf.practice_area
        })
    );
    return {
        props: {
            areas
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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,534,536], () => (__webpack_exec__(1759)));
module.exports = __webpack_exports__;

})();