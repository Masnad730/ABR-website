"use strict";
exports.id = 534;
exports.ids = [534];
exports.modules = {

/***/ 2534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/ScrollToTop.js


const url = '/images/sprite.svg';
const ScrollToTop = ({ showBelow  })=>{
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(showBelow ? false : true);
    const handleScroll = ()=>{
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true);
        } else {
            if (show) setShow(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll);
            return ()=>window.removeEventListener(`scroll`, handleScroll)
            ;
        }
    });
    const handleClick = ()=>{
        window[`scrollTo`]({
            top: 0,
            behavior: `smooth`
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: show && /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                fill: "currentColor",
                className: "w-8 h-8 outline-none fixed bottom-6 z-10 cursor-pointer opacity-80 right-4 hover:opacity-100 custom-transition scroll-top",
                onClick: handleClick,
                children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                    xlinkHref: `${url}#up-arrow-circle`
                })
            })
        })
    }));
};
/* harmony default export */ const components_ScrollToTop = (ScrollToTop);

;// CONCATENATED MODULE: ./components/Topbar.js


const Topbar_url = '/images/sprite.svg';
const Topbar = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex-col flex-1 hidden sm:flex bg-gray_light_1 font-openSans",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "flex justify-between h-10 px-12 border-b font-medium text-gray-900",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "flex items-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "flex items-center justify-center text-sm",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "flex items-center justify-center mr-4 not-italic",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "flaticon-phone-call mr-1 flex items-center"
                                    }),
                                    "+93 781 221 122"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "flex items-center justify-center mr-4 not-italic",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "flaticon-email mr-1 flex items-center"
                                    }),
                                    "info@abr.af"
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mr-4 last:mr-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.facebook.com/Afghanistan-Business-Referrals-109269684063502/",
                                target: "blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    fill: "currentColor",
                                    className: "w-4 h-4 fill-current",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                        xlinkHref: `${Topbar_url}#facebook`
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mr-4 last:mr-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    fill: "currentColor",
                                    className: "w-4 h-4 fill-current",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                        xlinkHref: `${Topbar_url}#twitter`
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mr-4 last:mr-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    fill: "currentColor",
                                    className: "w-4 h-4 fill-current",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                        xlinkHref: `${Topbar_url}#youtube`
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Topbar = (Topbar);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Header.js



const Header = ({ active  })=>{
    const { 0: showSearchBar , 1: setShowSearhBar  } = (0,external_react_.useState)(false);
    const onSearchClick = ()=>setShowSearhBar(!showSearchBar)
    ;
    const onCloseClick = ()=>setShowSearhBar(!showSearchBar)
    ;
    const SearchBar = ()=>{
        const { 0: searchTerm , 1: setSearchTerm  } = (0,external_react_.useState)('');
        const handleInputChange = (e)=>setSearchTerm(e.target.value)
        ;
        const handleSubmit = (e)=>{};
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bg-gray_light_2 flex items-center justify-between px-8 absolute left-0 top-auto right-0 w-full z-50 transition-all",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-base flex-1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        onSubmit: handleSubmit,
                        method: "GET",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "my-8 lg:mx-96 flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    name: "q",
                                    type: "text",
                                    placeholder: "Enter your keywords...",
                                    className: "text-base w-full p-2 bg-transparent border-b border-grey_dark_2 border-solid placeholder-grey_dark_3 focus:outline-none focus:bg-transparent",
                                    value: searchTerm,
                                    onChange: handleInputChange,
                                    required: true
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "border-none focus:outline-none",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "flaticon-loupe -ml-5"
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-2xl",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        title: "Close (Esc)",
                        type: "button",
                        onClick: onCloseClick,
                        children: "\xd7"
                    })
                })
            ]
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "relative z-10 top-0 left-0 bg-white p-0 m-0 min-w-full transition-all font-openSans border-b border-gray_light_3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between md:px-6 lg:px-10 px-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "menu-toggle",
                        className: "hidden pointer-cursor menu-toggle",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            className: "fill-current",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                    children: "menu-toggle"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "py-3 w-20 md:w-28",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "object-contain w-full last:max-w-none",
                                src: "/images/abr-logo.png",
                                alt: "Afghanistan Business"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: "hidden",
                        type: "checkbox",
                        id: "menu-toggle"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "text-sm md:text-medium self-stretch flex text-gray-800 navbar",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "menu-toggle",
                                className: "hidden absolute top-6 right-4 pointer-cursor text-white menu-toggle",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    className: "fill-current",
                                    width: "30",
                                    height: "30",
                                    viewBox: "0 0 20 20",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                            children: "cancel-menu"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "p-0 m-0 uppercase list-none inline-flex lg:-mr-64 xl:-mr-128",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mx-3.5 flex items-center justify-center relative border-hover__transition",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: `${active === 'home' ? 'text-secondary' : ''} hover:text-secondary transition-all`,
                                                children: "home"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mx-3.5 flex items-center justify-center relative border-hover__transition",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/advisors/",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: `${active === 'find an advisor' ? 'text-secondary' : ''} hover:text-secondary transition-all`,
                                                children: "find an advisor"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mx-3.5 flex items-center justify-center relative border-hover__transition",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/news-topics/",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: `${active === 'news and topic' ? 'text-secondary' : ''} hover:text-secondary transition-all`,
                                                children: "news and topic"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "mx-3.5 relative group hidden items-center justify-center lg:inline-flex border-hover__transition",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: `${active === 'about' ? 'text-secondary' : ''} hover:text-secondary transition-all`,
                                                href: "#",
                                                children: "about"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "inline-flex justify-center items-center",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    className: "w-4 h-4 ml-1 fill-current",
                                                    viewBox: "0 0 20 20",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                        }),
                                                        ' '
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "bg-white text-black absolute z-50 list-none left-0 top-24 invisible opacity-0 rounded border-5 border-gray_light_2 group-hover:opacity-100 group-hover:visible group-hover:top-22 drop-menu custom-transition",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "m-4 pr-12 pb-1 border-b border-gray_dark_2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/about/",
                                                            passHref: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "block hover:text-secondary",
                                                                children: "about ABR"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "m-4 pr-12 pb-1 border-b border-gray_dark_2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/membership/",
                                                            passHref: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "block hover:text-secondary",
                                                                children: "membership"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "px-3.5 py-2 hidden text-center sub-menu",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/about/",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "hover:text-secondary",
                                                children: "about ABR"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "px-3.5 py-2 hidden text-center sub-menu",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/membership/",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "hover:text-secondary",
                                                children: "membership"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mx-3.5 flex items-center justify-center relative border-hover__transition",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/contact",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: `${active === 'contact' ? 'text-secondary' : ''} hover:text-secondary transition-all`,
                                                children: "contact"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: onSearchClick,
                        className: "flex items-center justify-center focus:outline-none border-none",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "flex items-center justify-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "flaticon-loupe mx-3.5"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "transition-all",
                children: showSearchBar && /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {})
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: external "react-loader-spinner"
var external_react_loader_spinner_ = __webpack_require__(1223);
var external_react_loader_spinner_default = /*#__PURE__*/__webpack_require__.n(external_react_loader_spinner_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./components/Footer.js





const Footer_url = '/images/sprite.svg';
const Footer = ()=>{
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)('');
    const { 0: successMessage , 1: setSuccessMessage  } = (0,external_react_.useState)('');
    const handleChange = (e)=>{
        setEmail(e.target.value);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        await external_axios_default().post('https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token', {
            username: 'admin',
            password: 'I6FR%0^hD@Z[@'
        }).then(async (res1)=>{
            console.log(res1.data.token);
            await external_axios_default().post('https://wpbackend.navisa.af/wp-json/wp/v2/abr-subscribed-email', {
                title: 'Email Subscription - Afghanistan Business Referrals',
                status: 'publish',
                fields: {
                    email: email
                }
            }, {
                headers: {
                    Authorization: `Bearer ${res1.data.token}`
                }
            }).then((res)=>{
                console.log(res);
                setIsLoading(false);
                if (res.status === 201) {
                    setSuccessMessage('Your email is registered successfully');
                } else {
                    setSuccessMessage('Your email is not registered, please try again');
                }
            }).catch((err)=>{
                console.log(err);
                setIsLoading(false);
                setSuccessMessage('Your email is not registered, please try again');
            });
        }).catch((err)=>{
            console.log(err);
        });
        setTimeout(()=>{
            setSuccessMessage('');
        }, 3000);
        setEmail('');
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-gray-300 text-gray-900 font-openSans",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "px-4 md:px-6 lg:px-12 py-14 pb-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col md:flex-row flex-wrap",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "md:flex-container-50 lg:flex-2 flex flex-col items-center mb-6 lg:mb-0 mr-0 lg:mr-8 last:mr-0",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "mb-4 text-base font-semibold",
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-sm md:text-medium lg:text-base leading-6-important",
                                        children: "Afghanistan Business Referrals (ABR) is a multi-disciplinary professional services network that provides legal, accountancy, financial advice to companies and individuals in the jurisdiction of Afghanistan."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "md:flex-container-50 lg:flex-1 flex flex-col xl:items-center mb-6 lg:mb-0 mr-0 lg:mr-8 last:mr-0",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mb-4 text-base font-semibold",
                                        children: "Quick Links"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mb-2 last:mb-0 text-sm md:text-medium lg:text-base",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/about/",
                                                    children: "About Us"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mb-2 last:mb-0 text-sm md:text-medium lg:text-base",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/advisors/",
                                                    children: "Find an Advisor"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mb-2 last:mb-0 text-sm md:text-medium lg:text-base",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/membership/",
                                                    children: "Our Membership"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mb-2 last:mb-0 text-sm md:text-medium lg:text-base",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/contact/",
                                                    children: "Contact Us"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "md:flex-container-50 lg:flex-1 text-sm mb-6 lg:mb-0 mr-0 lg:mr-8 last:mr-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-4 text-base font-semibold",
                                    children: "Newsletter"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-sm md:text-medium lg:text-base",
                                    children: "Subscribe to our newsletter"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        onSubmit: handleSubmit,
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex my-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "email",
                                                        name: "email",
                                                        className: "py-2 px-3 border-none focus:outline-none",
                                                        placeholder: "your@mail.com",
                                                        value: email,
                                                        onChange: handleChange,
                                                        required: true
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                        className: "py-2 px-2 text-sm flex uppercase focus:outline-none border-none text-white bg-black lg:px-4",
                                                        type: "submit",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: `${isLoading ? 'mr-4' : 'mr-0'}`,
                                                                children: "subscribe"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "flex items-center justify-center",
                                                                children: isLoading && /*#__PURE__*/ jsx_runtime_.jsx((external_react_loader_spinner_default()), {
                                                                    type: "Oval",
                                                                    color: "#fff",
                                                                    height: 15,
                                                                    width: 15
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-sm text-primary",
                                                children: successMessage
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "md:flex-container-50 lg:flex-1 flex flex-col mb-6 lg:mb-0 mr-0 lg:mr-8 last:mr-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-4 text-base font-semibold",
                                    children: "Contact Us"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("address", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "list-none flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "flex mb-2 last:mb-0 text-sm md:text-medium lg:text-base",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "flaticon-pin mr-3 text-secondary_dark_2"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "not-italic",
                                                        children: "Ansori Street, Shahri Now, District 10, Kabul, Afghanistan"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "flex mb-2 last:mb-0 text-sm md:text-medium lg:text-base",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "flaticon-phone-call mr-3 text-secondary_dark_2"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "not-italic",
                                                        children: "+93 781 221 122"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "flex items-center mb-2 last:mb-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-whatsapp mr-3 text-secondary_dark_2 text-sm md:text-medium lg:text-lg"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "not-italic",
                                                        children: "+93 730 830 830"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "flex mb-2 last:mb-0 text-sm md:text-medium lg:text-base",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "flaticon-email mr-3 text-secondary_dark_2"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "not-italic",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "mailto:info@abr.af",
                                                            children: "info@abr.af"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex py-6 text-xs text-gray_light_1",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "flex items-center justify-between uppercase p-2 bg-red-700 hover:bg-red-900 mr-2 last:mr-0",
                            href: "/ABR-BROCHURE.pdf",
                            target: "_blank",
                            children: [
                                "firm brochure",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "inline-flex items-center justify-center w-4 h-4 ml-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        fill: "currentColor",
                                        className: "w-full h-full p-0 m-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                            xlinkHref: `${Footer_url}#pdf`
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "flex items-center justify-between uppercase p-2 bg-red-700 hover:bg-red-900 mr-2 last:mr-0",
                            href: "/ABR-BROCHURE-DARI.pdf",
                            target: "_blank",
                            children: [
                                "firm brochure - dari",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "inline-flex items-center justify-center w-4 h-4 ml-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        fill: "currentColor",
                                        className: "w-full h-full p-0 m-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                            xlinkHref: `${Footer_url}#pdf`
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    className: "border-grey_dark_3 my-6"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-center items-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-sm pb-2",
                        children: [
                            "Copyright \xa9 Afghanistan Business Referrals ",
                            new Date().getFullYear()
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/layout/Layout.js







const Layout = ({ children , title , canonical , descriptionContent , active  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "google-site-verification",
                        content: "Yoe0pG5MtP-BpmIMJXQxmsJ7DhS76N1Mty6FegxFCX4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "mobile-web-app-capable",
                        content: "yes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "apple-mobile-web-app-capable",
                        content: "yes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: canonical
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: descriptionContent
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "Law firm in Afghanistan Legal Advisor, Law offices in Afghanistan, Law firm, Law firm near by, Top law firms, Top law firms in Afghanistan, Taxation law in Afghanistan, Latest business news, Corporate law firm in Afghanistan, Famous law firms, Aviation law in Afghanistan, Banking law in Afghanistan, Business crimes in Afghanistan, Construction and infrastructure in Afghanistan, Employment and labor Law, Energy and natural resources of Afghanistan, Afghanistan government, Immigration law, Insolvency, Bankruptcy and Restructuring in Afghanistan, Insurance law in Afghanistan, Intellectual Property in Afghanistan, Litigation in Afghanistan, Arbitration and dispute resolution in Afghanistan, Media and Entertainment law in Afghanistan, Taxation in Afghanistan, Legal articles, Incorporation in Afghanistan, Law firm names, Attorney in Afghanistan, List of attorneys in Afghanistan, Afghanistan lawyers, Afghanistan top lawyers, Trademark registration in Afghanistan, Notarization in Afghanistan, Notary in Afghanistan, Intellectual Property rights in Afghanistan, Translation in Afghanistan, Dari Translation, Translation Company in Afghanistan, Translation services in Afghanistan, "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Afghanistan Business Referral - ABR"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "Afghanistan Business Referral - ABR"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: "Afghanistan Business Referrals (ABR) is a multi-disciplinary professional services network that provides legal, accountancy, financial advice to companies and individuals in the jurisdiction of Afghanistan."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: "https://abr.af/"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "https://abr.af/images/abr-logo.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image:secure_url",
                        content: "https://abr.af/images/abr-logo.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: "Afghanistan Business Referral - ABR"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: "A multi-disciplinary professional services network that provides legal, accountancy, financial advice to companies and individuals in the jurisdiction of Afghanistan."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: "https://abr.af/images/abr-logo.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_ScrollToTop, {
                        showBelow: 250
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Topbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                        active: active
                    }),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                ]
            })
        ]
    }));
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;