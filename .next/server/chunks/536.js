"use strict";
exports.id = 536;
exports.ids = [536];
exports.modules = {

/***/ 1536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Iy": () => (/* binding */ getAdvisors),
/* harmony export */   "Tb": () => (/* binding */ getAllPracticeAreas),
/* harmony export */   "JI": () => (/* binding */ findAdvisorForPractice),
/* harmony export */   "Jq": () => (/* binding */ getPosts)
/* harmony export */ });
/* unused harmony export getPracticeArea */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

//  headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//     // update with your user-agent
//   },
async function getAdvisors() {
    const advisors = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://wpbackend.navisa.af/wp-json/wp/v2/abr-advisor/?per_page=20').then((res)=>res.data
    ).catch((err)=>console.log(err)
    );
    return advisors;
}
async function getPracticeArea(id) {
    const practiceArea = await axios.get(`https://wpbackend.navisa.af/wp-json/wp/v2/abr-advisor-practice/${id}`).then((res)=>res.data
    ).catch((err)=>console.log(err)
    );
    return practiceArea;
}
async function getAllPracticeAreas() {
    const practiceAreas = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://wpbackend.navisa.af/wp-json/wp/v2/abr-advisor-practice/?per_page=50').then((res)=>res.data
    ).catch((err)=>console.log(err)
    );
    return practiceAreas;
}
async function findAdvisorForPractice(practiceArea) {
    const advisors = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://wpbackend.navisa.af/wp-json/wp/v2/abr-advisor/?per_page=20').then((res)=>res.data
    ).catch((err)=>console.log(err)
    );
    const selectedAdvisor = advisors.filter((advisor)=>advisor.acf.practice_area.find((area)=>area.post_title === practiceArea
        )
    );
    return selectedAdvisor;
}
async function getPosts() {
    const posts = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://wpbackend.navisa.af/wp-json/wp/v2/masnad-insights/?per_page=100').then((res)=>res.data
    ).catch((err)=>console.log(err)
    );
    // const res = await fetch(
    //   'https://wpbackend.navisa.af/wp-json/wp/v2/masnad-insights/?per_page=100',
    //   {
    //     method: 'GET',
    //     headers: {
    //       // update with your user-agent
    //       'User-Agent': '*',
    //       'Content-Type': 'application/json; charset=UTF-8',
    //     },
    //   }
    // )
    // const posts = await res.json()
    return posts;
}


/***/ })

};
;