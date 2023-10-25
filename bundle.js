/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* mobile friendly CSS */
@media (max-width:960px) {


    /*footer styling */
    #footContain {
        display: flex;
        flex-direction: column;

        justify-content: space-around;
        align-items: center;
        background-color: cyan;
        padding: 10px;
    }

    /* form styling */
    

      .form-row #taskDescription {           
        width: 100%;
        height: 100%; 
        max-width: 169px;
      }

      .formPopup {
        min-width: 200px;
      }

}

@media (max-width:500px) {
    
    .tab {
        min-width: 30%;
    }

}




/* General CSS */
/*header styling */
#container {
    background-color: turquoise;
}

#headContain {
    display: flex;
    justify-content: space-around;

    background-color: cyan;
    padding-top: 10px;
    padding-bottom: 10px;

}

.tab {
    display: flex;
    padding: 20px;
    border: solid blue 3px;
    background-color: lightgray;    
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: large;
    border-radius: 30px;

    flex: 0 1 20%;
    min-width: 100px;

}

.tab:hover, .closeBtn:hover, #submitTodo {
    background-color: antiquewhite;
}

.tab:active, .closeBtn:active, #submitTodo{
    background-color: white;
    box-shadow: 0 2px #666;
    transform: translateY(4px);
}

/*body styling */
body {
    background-color: lightgray;
}

#content {
    min-height: 50vh;
}

/* Add To Do form styling */
.formPopup {
    display: none;
    position: fixed;
    top: 10%;
    width: 50%;
    margin: 5% auto; /* Only centers horizontally not vertically! */
    left: 0;
    right: 0;

    background-color: lightgoldenrodyellow;
    border: solid 3px;
}

.todoContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 300px;
}

.formContainer {
    display: flex;
    justify-content: center;
}

.form-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    font-weight: 250;


}

#form-row-1 label {
    font-weight: bold;
}

#taskPriority {
    min-width: 120.3px;
}

.todoContainer > .form-row > p {
    font-weight: bold;
}

.closeBtn {
    display: flex;
    background-color: lightgray;
    border: solid black 1px;
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bolder; 
}

#todoClose {
    align-self: flex-end; 
    margin-top: 20px;  
    margin-right: 20px;
}

#submitTodo {
    background-color: lightgrey;
    padding: 10px;
    margin-bottom: 20px;
}

.form-row textarea {
    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;
  
    border: 1px solid;
    border-radius: 3px;
  
    width: clamp(100%, 300px, 400px);
    height: 100%;
    margin-bottom: 10px;
    padding: 7px;
}

/* Show Projects Popup Styling */
.projectsPopup {
    display: none;
    background-color: lightblue;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 50vh;
    border: solid black 3px;
}

.formContainer2 {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.projectContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
}

#addProject {
    flex: 0;
    margin-top: 20px;
    width: 150px;
    height: 100px;
}

#projectsClose {
    margin-right: 20px;
    align-self: flex-end; 
    margin-top: 20px;  
    margin-right: 20px;
}

/* Content Styling */
table {
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    margin-bottom: 10px;
    background-color: black;
    text-align: center;
}

table td {
    background-color: white;
    border: solid black 1px;
    margin-top: 10px;
    padding: 10px;
}

table button {
    padding: 20px;
    border-radius: 10px;
}


/*footer styling */
#footContain {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: cyan;
    padding: 10px;

}

#footContain p {
    text-align: center;
    line-height: 20px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,wBAAwB;AACxB;;;IAGI,kBAAkB;IAClB;QACI,aAAa;QACb,sBAAsB;;QAEtB,6BAA6B;QAC7B,mBAAmB;QACnB,sBAAsB;QACtB,aAAa;IACjB;;IAEA,iBAAiB;;;MAGf;QACE,WAAW;QACX,YAAY;QACZ,gBAAgB;MAClB;;MAEA;QACE,gBAAgB;MAClB;;AAEN;;AAEA;;IAEI;QACI,cAAc;IAClB;;AAEJ;;;;;AAKA,gBAAgB;AAChB,kBAAkB;AAClB;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,6BAA6B;;IAE7B,sBAAsB;IACtB,iBAAiB;IACjB,oBAAoB;;AAExB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;;IAEnB,aAAa;IACb,gBAAgB;;AAEpB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;IACvB,sBAAsB;IACtB,0BAA0B;AAC9B;;AAEA,gBAAgB;AAChB;IACI,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;AACpB;;AAEA,2BAA2B;AAC3B;IACI,aAAa;IACb,eAAe;IACf,QAAQ;IACR,UAAU;IACV,eAAe,EAAE,8CAA8C;IAC/D,OAAO;IACP,QAAQ;;IAER,sCAAsC;IACtC,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;;;AAGpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,4CAA4C;IAC5C,eAAe;;IAEf,iBAAiB;IACjB,kBAAkB;;IAElB,gCAAgC;IAChC,YAAY;IACZ,mBAAmB;IACnB,YAAY;AAChB;;AAEA,gCAAgC;AAChC;IACI,aAAa;IACb,2BAA2B;IAC3B,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,aAAa;IACb,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,OAAO;IACP,gBAAgB;IAChB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA,oBAAoB;AACpB;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;;AAGA,kBAAkB;AAClB;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;;AAEjB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB","sourcesContent":["/* mobile friendly CSS */\n@media (max-width:960px) {\n\n\n    /*footer styling */\n    #footContain {\n        display: flex;\n        flex-direction: column;\n\n        justify-content: space-around;\n        align-items: center;\n        background-color: cyan;\n        padding: 10px;\n    }\n\n    /* form styling */\n    \n\n      .form-row #taskDescription {           \n        width: 100%;\n        height: 100%; \n        max-width: 169px;\n      }\n\n      .formPopup {\n        min-width: 200px;\n      }\n\n}\n\n@media (max-width:500px) {\n    \n    .tab {\n        min-width: 30%;\n    }\n\n}\n\n\n\n\n/* General CSS */\n/*header styling */\n#container {\n    background-color: turquoise;\n}\n\n#headContain {\n    display: flex;\n    justify-content: space-around;\n\n    background-color: cyan;\n    padding-top: 10px;\n    padding-bottom: 10px;\n\n}\n\n.tab {\n    display: flex;\n    padding: 20px;\n    border: solid blue 3px;\n    background-color: lightgray;    \n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    font-size: large;\n    border-radius: 30px;\n\n    flex: 0 1 20%;\n    min-width: 100px;\n\n}\n\n.tab:hover, .closeBtn:hover, #submitTodo {\n    background-color: antiquewhite;\n}\n\n.tab:active, .closeBtn:active, #submitTodo{\n    background-color: white;\n    box-shadow: 0 2px #666;\n    transform: translateY(4px);\n}\n\n/*body styling */\nbody {\n    background-color: lightgray;\n}\n\n#content {\n    min-height: 50vh;\n}\n\n/* Add To Do form styling */\n.formPopup {\n    display: none;\n    position: fixed;\n    top: 10%;\n    width: 50%;\n    margin: 5% auto; /* Only centers horizontally not vertically! */\n    left: 0;\n    right: 0;\n\n    background-color: lightgoldenrodyellow;\n    border: solid 3px;\n}\n\n.todoContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    max-width: 300px;\n}\n\n.formContainer {\n    display: flex;\n    justify-content: center;\n}\n\n.form-row {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 15px;\n    font-weight: 250;\n\n\n}\n\n#form-row-1 label {\n    font-weight: bold;\n}\n\n#taskPriority {\n    min-width: 120.3px;\n}\n\n.todoContainer > .form-row > p {\n    font-weight: bold;\n}\n\n.closeBtn {\n    display: flex;\n    background-color: lightgray;\n    border: solid black 1px;\n    width: 2rem;\n    height: 2rem;\n    align-items: center;\n    justify-content: center;\n    font-size: 2rem;\n    font-weight: bolder; \n}\n\n#todoClose {\n    align-self: flex-end; \n    margin-top: 20px;  \n    margin-right: 20px;\n}\n\n#submitTodo {\n    background-color: lightgrey;\n    padding: 10px;\n    margin-bottom: 20px;\n}\n\n.form-row textarea {\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 16px;\n  \n    border: 1px solid;\n    border-radius: 3px;\n  \n    width: clamp(100%, 300px, 400px);\n    height: 100%;\n    margin-bottom: 10px;\n    padding: 7px;\n}\n\n/* Show Projects Popup Styling */\n.projectsPopup {\n    display: none;\n    background-color: lightblue;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    height: 100vh;\n    width: 50vh;\n    border: solid black 3px;\n}\n\n.formContainer2 {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.projectContainer {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n#addProject {\n    flex: 0;\n    margin-top: 20px;\n    width: 150px;\n    height: 100px;\n}\n\n#projectsClose {\n    margin-right: 20px;\n    align-self: flex-end; \n    margin-top: 20px;  \n    margin-right: 20px;\n}\n\n/* Content Styling */\ntable {\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    background-color: black;\n    text-align: center;\n}\n\ntable td {\n    background-color: white;\n    border: solid black 1px;\n    margin-top: 10px;\n    padding: 10px;\n}\n\ntable button {\n    padding: 20px;\n    border-radius: 10px;\n}\n\n\n/*footer styling */\n#footContain {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: cyan;\n    padding: 10px;\n\n}\n\n#footContain p {\n    text-align: center;\n    line-height: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/checkStorage.js":
/*!*****************************!*\
  !*** ./src/checkStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isStorageAvailable: () => (/* binding */ isStorageAvailable)
/* harmony export */ });
//Check to see if localStorage is available:
window.storageStatus = '';

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }


//Provide result of if localStorage is available:
function isStorageAvailable() {
    if (storageAvailable("localStorage")) {
        //localStorage is available!
        storageStatus = "available";
    }
    else {
        // No localStorage available.
        storageStatus = "unavailable";
    }
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _checkStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkStorage */ "./src/checkStorage.js");



//check if localStorage is available
(0,_checkStorage__WEBPACK_IMPORTED_MODULE_0__.isStorageAvailable)();
console.log("localStorage:", storageStatus, ";length:", localStorage.length);


//Lit of Project Groups

////Functions for the To Do List
////Each project / To Do item should be editable, deletable, & completable.

//Create a project group to store tasks
function createProject(name) {
    const projectName = name;
    const taskList = [];


    localStorage.setItem(projectName, JSON.stringify(taskList));
    localStorage.setItem("Current Project", JSON.stringify(name));


}

//Currently selected project group
//Show Projects button UI should allow user to select 

function currentProject() {
    //check if localStorage is available
    (0,_checkStorage__WEBPACK_IMPORTED_MODULE_0__.isStorageAvailable)();

    //if localStorage is empty & available: create a project "Personal"
    if (localStorage.length == 0 ) {
        const Personal = createProject('Personal');

        localStorage.setItem("Current Project", JSON.stringify("Personal"));
        return "Personal";
    }
    
    //if localStorage is populated & available: select (most recent/first one?)
    if (localStorage.length > 0 && storageStatus == "available") {
        const currentProject = JSON.parse(localStorage.getItem("Current Project"));

        localStorage.setItem("Current Project", JSON.stringify(currentProject));

        return currentProject;
    }


    //if local storage is unavailable
    if (storageStatus == "unavailable") {
        //some code. Maybe an alert? Or innerText alert?
    }

}

//Create a To Do Task
function createTask(title, description, dueDate, priority) {
    if (priority == '' || priority == undefined) {
        //set default priority to 5 if empty
        priority = 5;
    }

    return {
        title,
        description,
        dueDate, 
        priority
    }
}

//Asign the To Do task to the current project
function assignTask(title, description, dueDate, priority) {
    //create task function
    const mytask = createTask(title, description, dueDate, priority);

    //Find current open project
    const Tasklist = JSON.parse(localStorage.getItem(currentProject()));

    //find out where task belongs in current project priority
    if (Tasklist.length == 0) {
        Tasklist.push(mytask);
        localStorage.setItem(currentProject(), JSON.stringify(Tasklist));
        return;
    }

    const year0 = (mytask.dueDate).substr(-4,4);
    const month0 = (mytask.dueDate).substr(0,2);
    const day0 = (mytask.dueDate).substr(3,2);
    const currentTaskDate = new Date(year0, month0, day0);

    const currentTaskLength = Tasklist.length;

    for (let i = 0; i < currentTaskLength; i++) {
        //if higher priority, add task
        if (mytask.priority > Tasklist[i].priority ) {
            Tasklist.splice([i], 0, mytask);
            break;
        }

        //check if current Index Due Date is later than new task Due Date
        const yearI = (Tasklist[i].dueDate).substr(-4,4);
        const monthI = (Tasklist[i].dueDate).substr(0,2);
        const dayI = (Tasklist[i].dueDate).substr(3,2);
        const IndexTaskDate = new Date(yearI, monthI, dayI);

        const compared = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(currentTaskDate, IndexTaskDate);

        //if same priority, but sooner due date, add task
        if (mytask.priority == Tasklist[i].priority && compared == -1 && mytask.dueDate != '') {
            Tasklist.splice([i], 0, mytask);
            break;
        }

        //Else, add new task to the end of the list (lowest priority)
        if (i == currentTaskLength -1) {
            Tasklist.push(mytask);
        }
    }


    //Add task to localStorage
    localStorage.setItem(currentProject(), JSON.stringify(Tasklist));
    console.log("myTaskList", Tasklist);
}

////UI Logic

//Add To Do Button
const addToDoBtn = document.querySelector("#addToDo");
const formPopup = document.querySelector("#todoForm");
addToDoBtn.addEventListener('click', () => {
        formPopup.style.display = "block";
});

//Add show Projects Button
const showProjectsBtn = document.querySelector("#showProjects");
const projectsPopupForm = document.querySelector(".projectsPopup");

showProjectsBtn.addEventListener('click', () => {
    projectsPopupForm.style.display = "block";
});

//Popups Buttons
const closeBtn = document.querySelector("#todoClose");
closeBtn.addEventListener('click', () => {
    formPopup.style.display = "none";
});

const closeBtn2 = document.querySelector("#projectsClose");
closeBtn2.addEventListener('click', () => {
    projectsPopupForm.style.display = "none";
});

//submit form
const todoForm = document.querySelector("#todoForm");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formTitle = document.getElementById("taskTitle").value;
    const formPriority = document.getElementById("taskPriority").value;
    const formDueDate = document.getElementById("taskDueDate").value;
    const formDescription = document.getElementById("taskDescription").value;

    //get date in preferred format
    const year = formDueDate.substr(0,4);
    const month = formDueDate.substr(5,2);
    const day = formDueDate.substr(-2,2);

    const newFormDuetDate = month + " " + day + " " + year;

    //assignTask from here
    assignTask(formTitle, formDescription, newFormDuetDate, formPriority);

    //add task to UI
    addTaskUI(formTitle, formDescription, newFormDuetDate, formPriority);

    //close form if neccesary?
    closeBtn.click();

});


//add To Dos to UI
const content = document.getElementById("content");

function addTaskUI(title, description, dueDate, priority) {
    //clear previous table
    var child = content.lastElementChild;  
    while (child) { 
        content.removeChild(child); 
        child = content.lastElementChild; 
    }

    let header = document.createElement('h2');
    header.innerText = currentProject();
    content.appendChild(header);
    header.style.textAlign = "center";

    let table = document.createElement('table');

    const Tasklist = JSON.parse(localStorage.getItem(currentProject()));

    //Header
    table.insertRow();
    let cell01 = table.rows[0].insertCell();
    cell01.textContent = "Title";
    let cell02 = table.rows[0].insertCell();
    cell02.textContent = "Priority";
    let cell03 = table.rows[0].insertCell();
    cell03.textContent = "Due Date";
    let cell04 = table.rows[0].insertCell();
    cell04.textContent = "Description";
    let cell06 = table.rows[0].insertCell();
    cell06.textContent = "Edit";
    let cell07 = table.rows[0].insertCell();
    cell07.textContent = "Delete";



    for (let row = 0; row < Tasklist.length; row++) {
        table.insertRow();
        //Display Data
        let newCell = table.rows[table.rows.length - 1].insertCell();
        newCell.textContent = Tasklist[row].title;
        let newCell2 = table.rows[table.rows.length - 1].insertCell();
        newCell2.textContent = Tasklist[row].priority;
        let newCell3 = table.rows[table.rows.length - 1].insertCell();
        newCell3.textContent = Tasklist[row].dueDate;
        let newCell4 = table.rows[table.rows.length - 1].insertCell();
        newCell4.textContent = Tasklist[row].description;

        //Display Buttons
        let newCell5 = table.rows[table.rows.length - 1].insertCell();
        let button1 = document.createElement('button');
        button1.addEventListener("click", editRowFunction);
        newCell5.append(button1);
        let newCell6 = table.rows[table.rows.length - 1].insertCell();
        let button2 = document.createElement('button');
        button2.addEventListener("click", deleteRowFunction);
        newCell6.append(button2);
    }
    content.appendChild(table);

    //show button (editRowFunction hides it)
    closeBtn.style.display = "flex";

    //clear input fields from before
    const projectTitleHTML = document.getElementById("taskTitle");
    const projectPriorityHTML = document.getElementById("taskPriority");
    const projectDueDateHTML = document.getElementById("taskDueDate");
    const projectDescriptionHTML = document.getElementById("taskDescription");

    projectTitleHTML.value = "";
    projectPriorityHTML.value = "";
    projectDueDateHTML.value = "";
    projectDescriptionHTML.value = "";
}

//edit task button
function editRowFunction() {
    const thisRow = this.parentNode.parentNode;
    const thisRowIndex = thisRow.rowIndex - 1;
    let Tasklist = JSON.parse(localStorage.getItem(currentProject()));

    //Form 
    const oldFormTitle = Tasklist[thisRowIndex].title;
    const oldFormPriority = Tasklist[thisRowIndex].priority;
    const oldFormDueDate = Tasklist[thisRowIndex].dueDate;
    const oldFormDescription = Tasklist[thisRowIndex].description;

    console.log(oldFormTitle);

    //open form
    formPopup.style.display = "block";

    //get value from input field
    const projectTitleHTML = document.getElementById("taskTitle");
    const projectPriorityHTML = document.getElementById("taskPriority");
    const projectDueDateHTML = document.getElementById("taskDueDate");
    const projectDescriptionHTML = document.getElementById("taskDescription");


    //change input field
    projectTitleHTML.value = `${oldFormTitle}`;
    projectPriorityHTML.value = `${oldFormPriority}`;
    projectDueDateHTML.value = `${oldFormDueDate}`;
    projectDescriptionHTML.value = `${oldFormDescription}`;

    //Need to find a way to delete old task only if form is submitted
    //for now, hiding the cancel button during editing
    closeBtn.style.display = "none";
    
    Tasklist.splice(thisRowIndex, 1);
    const projectName = currentProject();
    localStorage.setItem(projectName, JSON.stringify(Tasklist));


}

//delete task button
function deleteRowFunction() {
    const thisRow = this.parentNode.parentNode;
    const thisRowIndex = thisRow.rowIndex - 1;
    let Tasklist = JSON.parse(localStorage.getItem(currentProject()));

    const projectName = currentProject();

    Tasklist.splice(thisRowIndex, 1);
    localStorage.setItem(projectName, JSON.stringify(Tasklist));
    addTaskUI();

}

// Add Project UI
//Create New Project Submit Button
const projectContent = document.getElementById("projectContent");

const submitProjectBtn = document.querySelector("#submitProject");

submitProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //get value from input field
    const projectTitle = document.getElementById("addProjectForm").value;
    const projectTitleHTML = document.getElementById("addProjectForm");

    

    //create project from value & update UI
    createProject(projectTitle);
    addProjectUI(projectTitle);

    //clear input field
    projectTitleHTML.value = "";

});

//Add Project to UI
function addProjectUI(name) {
    //clear previous table
    var child = projectContent.lastElementChild;  
    while (child) { 
    projectContent.removeChild(child); 
    child = projectContent.lastElementChild; 
}
    //create table
    let ptable = document.createElement('table');

    ptable.insertRow();
    let pcell1 = ptable.rows[0].insertCell();
    pcell1.textContent = "Title";
    let pcell2 = ptable.rows[0].insertCell();
    pcell2.textContent = "Select";
    let pcell3 = ptable.rows[0].insertCell();
    pcell3.textContent = "Edit";
    let pcell4 = ptable.rows[0].insertCell();
    pcell4.textContent = "Delete";

    const allKeys = Object.keys(localStorage);

    for (let i = 0; i < localStorage.length; i++) {
        let key = allKeys[i];
        if (key != "Current Project") {
            ptable.insertRow();
            let pcell01 = ptable.rows[ptable.rows.length - 1].insertCell();
            pcell01.textContent = key;

            //Display Buttons
            //select
            let pcell02 = ptable.rows[ptable.rows.length - 1].insertCell();
            let pbutton1 = document.createElement('button');
            pcell02.append(pbutton1);
            pbutton1.addEventListener("click", selectProjectFunction);
            //edit
            let pcell03 = ptable.rows[ptable.rows.length - 1].insertCell();
            let pbutton2 = document.createElement('button');
            pcell03.append(pbutton2);
            pbutton2.addEventListener("click", editProjectFunction);
            //delete
            let pcell04 = ptable.rows[ptable.rows.length - 1].insertCell();
            let pbutton3 = document.createElement('button');
            pbutton3.addEventListener("click", deleteProjectFunction);
            pcell04.append(pbutton3);
        }
    }
    projectContent.appendChild(ptable);
}

//delete project button
function deleteProjectFunction() {
    //find Title of current row
    const thisRow = this.parentNode.parentNode;
    const thisRowTitle = (thisRow.cells[0].innerText);
    localStorage.removeItem(thisRowTitle);

    //reload To Do List
    addProjectUI();
}

//select project button
function selectProjectFunction() {
    //find Title of current row
    const thisRow = this.parentNode.parentNode;
    const thisRowTitle = (thisRow.cells[0].innerText);
    localStorage.setItem("Current Project", JSON.stringify(thisRowTitle));

    //reload To Do List
    addTaskUI();
}

//edit project button
function editProjectFunction() {
    //find Title of current row
    const thisRow = this.parentNode.parentNode;
    const thisRowTitle = (thisRow.cells[0].innerText);

    const Tasklist = JSON.parse(localStorage.getItem(thisRowTitle));
    show_prompt();

    function show_prompt() {
        var name = prompt('Please enter updated project name','');
        if (name != null && name != "") {
            //re-create project with new name
            localStorage.removeItem(thisRowTitle);
            localStorage.setItem(name, JSON.stringify(Tasklist));

            //update TaskUI header if it's the current project 
            if (currentProject() == thisRowTitle) {
            localStorage.setItem("Current Project", JSON.stringify(name));
            addTaskUI();
            }
        }
    }    
    addProjectUI();
}
//Set Current Project on Home Page to Personal if local Storage is empty
currentProject();
addTaskUI();
addProjectUI();




/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./src/main.js");





// console.log("Hello Worlds!");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFFBQVEsWUFBWSxNQUFNLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sY0FBYyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLFNBQVMsWUFBWSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxzQkFBc0IsV0FBVyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGVBQWUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxP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Q0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNGOztBQUVvQjs7QUFFdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vc3JjL2NoZWNrU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogbW9iaWxlIGZyaWVuZGx5IENTUyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6OTYwcHgpIHtcblxuXG4gICAgLypmb290ZXIgc3R5bGluZyAqL1xuICAgICNmb290Q29udGFpbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgLyogZm9ybSBzdHlsaW5nICovXG4gICAgXG5cbiAgICAgIC5mb3JtLXJvdyAjdGFza0Rlc2NyaXB0aW9uIHsgICAgICAgICAgIFxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAgICAgbWF4LXdpZHRoOiAxNjlweDtcbiAgICAgIH1cblxuICAgICAgLmZvcm1Qb3B1cCB7XG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6NTAwcHgpIHtcbiAgICBcbiAgICAudGFiIHtcbiAgICAgICAgbWluLXdpZHRoOiAzMCU7XG4gICAgfVxuXG59XG5cblxuXG5cbi8qIEdlbmVyYWwgQ1NTICovXG4vKmhlYWRlciBzdHlsaW5nICovXG4jY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7XG59XG5cbiNoZWFkQ29udGFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbn1cblxuLnRhYiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogc29saWQgYmx1ZSAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5OyAgICBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcblxuICAgIGZsZXg6IDAgMSAyMCU7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcblxufVxuXG4udGFiOmhvdmVyLCAuY2xvc2VCdG46aG92ZXIsICNzdWJtaXRUb2RvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG59XG5cbi50YWI6YWN0aXZlLCAuY2xvc2VCdG46YWN0aXZlLCAjc3VibWl0VG9kb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCAjNjY2O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuXG4vKmJvZHkgc3R5bGluZyAqL1xuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4jY29udGVudCB7XG4gICAgbWluLWhlaWdodDogNTB2aDtcbn1cblxuLyogQWRkIFRvIERvIGZvcm0gc3R5bGluZyAqL1xuLmZvcm1Qb3B1cCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAxMCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDUlIGF1dG87IC8qIE9ubHkgY2VudGVycyBob3Jpem9udGFsbHkgbm90IHZlcnRpY2FsbHkhICovXG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xuICAgIGJvcmRlcjogc29saWQgM3B4O1xufVxuXG4udG9kb0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG4uZm9ybUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvcm0tcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyNTA7XG5cblxufVxuXG4jZm9ybS1yb3ctMSBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiN0YXNrUHJpb3JpdHkge1xuICAgIG1pbi13aWR0aDogMTIwLjNweDtcbn1cblxuLnRvZG9Db250YWluZXIgPiAuZm9ybS1yb3cgPiBwIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsb3NlQnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgXG59XG5cbiN0b2RvQ2xvc2Uge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kOyBcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAgXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4jc3VibWl0VG9kbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm0tcm93IHRleHRhcmVhIHtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgXG4gICAgd2lkdGg6IGNsYW1wKDEwMCUsIDMwMHB4LCA0MDBweCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogN3B4O1xufVxuXG4vKiBTaG93IFByb2plY3RzIFBvcHVwIFN0eWxpbmcgKi9cbi5wcm9qZWN0c1BvcHVwIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDUwdmg7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAzcHg7XG59XG5cbi5mb3JtQ29udGFpbmVyMiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvamVjdENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNhZGRQcm9qZWN0IHtcbiAgICBmbGV4OiAwO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbiNwcm9qZWN0c0Nsb3NlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7IFxuICAgIG1hcmdpbi10b3A6IDIwcHg7ICBcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi8qIENvbnRlbnQgU3R5bGluZyAqL1xudGFibGUge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50YWJsZSB0ZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG50YWJsZSBidXR0b24ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuXG4vKmZvb3RlciBzdHlsaW5nICovXG4jZm9vdENvbnRhaW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbn1cblxuI2Zvb3RDb250YWluIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx3QkFBd0I7QUFDeEI7OztJQUdJLGtCQUFrQjtJQUNsQjtRQUNJLGFBQWE7UUFDYixzQkFBc0I7O1FBRXRCLDZCQUE2QjtRQUM3QixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLGFBQWE7SUFDakI7O0lBRUEsaUJBQWlCOzs7TUFHZjtRQUNFLFdBQVc7UUFDWCxZQUFZO1FBQ1osZ0JBQWdCO01BQ2xCOztNQUVBO1FBQ0UsZ0JBQWdCO01BQ2xCOztBQUVOOztBQUVBOztJQUVJO1FBQ0ksY0FBYztJQUNsQjs7QUFFSjs7Ozs7QUFLQSxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2Qjs7SUFFN0Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QiwwQkFBMEI7QUFDOUI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlLEVBQUUsOENBQThDO0lBQy9ELE9BQU87SUFDUCxRQUFROztJQUVSLHNDQUFzQztJQUN0QyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7SUFFbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7OztBQUdwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxlQUFlOztJQUVmLGlCQUFpQjtJQUNqQixrQkFBa0I7O0lBRWxCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7OztBQUdBLGtCQUFrQjtBQUNsQjtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogbW9iaWxlIGZyaWVuZGx5IENTUyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOjk2MHB4KSB7XFxuXFxuXFxuICAgIC8qZm9vdGVyIHN0eWxpbmcgKi9cXG4gICAgI2Zvb3RDb250YWluIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLyogZm9ybSBzdHlsaW5nICovXFxuICAgIFxcblxcbiAgICAgIC5mb3JtLXJvdyAjdGFza0Rlc2NyaXB0aW9uIHsgICAgICAgICAgIFxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICAgICAgbWF4LXdpZHRoOiAxNjlweDtcXG4gICAgICB9XFxuXFxuICAgICAgLmZvcm1Qb3B1cCB7XFxuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6NTAwcHgpIHtcXG4gICAgXFxuICAgIC50YWIge1xcbiAgICAgICAgbWluLXdpZHRoOiAzMCU7XFxuICAgIH1cXG5cXG59XFxuXFxuXFxuXFxuXFxuLyogR2VuZXJhbCBDU1MgKi9cXG4vKmhlYWRlciBzdHlsaW5nICovXFxuI2NvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHR1cnF1b2lzZTtcXG59XFxuXFxuI2hlYWRDb250YWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG5cXG59XFxuXFxuLnRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogc29saWQgYmx1ZSAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTsgICAgXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG5cXG4gICAgZmxleDogMCAxIDIwJTtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG5cXG59XFxuXFxuLnRhYjpob3ZlciwgLmNsb3NlQnRuOmhvdmVyLCAjc3VibWl0VG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuLnRhYjphY3RpdmUsIC5jbG9zZUJ0bjphY3RpdmUsICNzdWJtaXRUb2Rve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggIzY2NjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxufVxcblxcbi8qYm9keSBzdHlsaW5nICovXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xcbn1cXG5cXG4vKiBBZGQgVG8gRG8gZm9ybSBzdHlsaW5nICovXFxuLmZvcm1Qb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogNSUgYXV0bzsgLyogT25seSBjZW50ZXJzIGhvcml6b250YWxseSBub3QgdmVydGljYWxseSEgKi9cXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xcbiAgICBib3JkZXI6IHNvbGlkIDNweDtcXG59XFxuXFxuLnRvZG9Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogMjUwO1xcblxcblxcbn1cXG5cXG4jZm9ybS1yb3ctMSBsYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jdGFza1ByaW9yaXR5IHtcXG4gICAgbWluLXdpZHRoOiAxMjAuM3B4O1xcbn1cXG5cXG4udG9kb0NvbnRhaW5lciA+IC5mb3JtLXJvdyA+IHAge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlQnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgXFxufVxcblxcbiN0b2RvQ2xvc2Uge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7ICBcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jc3VibWl0VG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZvcm0tcm93IHRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIFxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgXFxuICAgIHdpZHRoOiBjbGFtcCgxMDAlLCAzMDBweCwgNDAwcHgpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuXFxuLyogU2hvdyBQcm9qZWN0cyBQb3B1cCBTdHlsaW5nICovXFxuLnByb2plY3RzUG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDUwdmg7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgM3B4O1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lcjIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICAgIGZsZXg6IDA7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI3Byb2plY3RzQ2xvc2Uge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kOyBcXG4gICAgbWFyZ2luLXRvcDogMjBweDsgIFxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi8qIENvbnRlbnQgU3R5bGluZyAqL1xcbnRhYmxlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudGFibGUgdGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbnRhYmxlIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcblxcbi8qZm9vdGVyIHN0eWxpbmcgKi9cXG4jZm9vdENvbnRhaW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG59XFxuXFxuI2Zvb3RDb250YWluIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9DaGVjayB0byBzZWUgaWYgbG9jYWxTdG9yYWdlIGlzIGF2YWlsYWJsZTpcbndpbmRvdy5zdG9yYWdlU3RhdHVzID0gJyc7XG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgIHN0b3JhZ2UgJiZcbiAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cblxuLy9Qcm92aWRlIHJlc3VsdCBvZiBpZiBsb2NhbFN0b3JhZ2UgaXMgYXZhaWxhYmxlOlxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RvcmFnZUF2YWlsYWJsZSgpIHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgICAvL2xvY2FsU3RvcmFnZSBpcyBhdmFpbGFibGUhXG4gICAgICAgIHN0b3JhZ2VTdGF0dXMgPSBcImF2YWlsYWJsZVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gTm8gbG9jYWxTdG9yYWdlIGF2YWlsYWJsZS5cbiAgICAgICAgc3RvcmFnZVN0YXR1cyA9IFwidW5hdmFpbGFibGVcIjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBpc1N0b3JhZ2VBdmFpbGFibGUgfSBmcm9tICcuL2NoZWNrU3RvcmFnZSc7XG5cbi8vY2hlY2sgaWYgbG9jYWxTdG9yYWdlIGlzIGF2YWlsYWJsZVxuaXNTdG9yYWdlQXZhaWxhYmxlKCk7XG5jb25zb2xlLmxvZyhcImxvY2FsU3RvcmFnZTpcIiwgc3RvcmFnZVN0YXR1cywgXCI7bGVuZ3RoOlwiLCBsb2NhbFN0b3JhZ2UubGVuZ3RoKTtcblxuXG4vL0xpdCBvZiBQcm9qZWN0IEdyb3Vwc1xuXG4vLy8vRnVuY3Rpb25zIGZvciB0aGUgVG8gRG8gTGlzdFxuLy8vL0VhY2ggcHJvamVjdCAvIFRvIERvIGl0ZW0gc2hvdWxkIGJlIGVkaXRhYmxlLCBkZWxldGFibGUsICYgY29tcGxldGFibGUuXG5cbi8vQ3JlYXRlIGEgcHJvamVjdCBncm91cCB0byBzdG9yZSB0YXNrc1xuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBuYW1lO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gW107XG5cblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQ3VycmVudCBQcm9qZWN0XCIsIEpTT04uc3RyaW5naWZ5KG5hbWUpKTtcblxuXG59XG5cbi8vQ3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgZ3JvdXBcbi8vU2hvdyBQcm9qZWN0cyBidXR0b24gVUkgc2hvdWxkIGFsbG93IHVzZXIgdG8gc2VsZWN0IFxuXG5mdW5jdGlvbiBjdXJyZW50UHJvamVjdCgpIHtcbiAgICAvL2NoZWNrIGlmIGxvY2FsU3RvcmFnZSBpcyBhdmFpbGFibGVcbiAgICBpc1N0b3JhZ2VBdmFpbGFibGUoKTtcblxuICAgIC8vaWYgbG9jYWxTdG9yYWdlIGlzIGVtcHR5ICYgYXZhaWxhYmxlOiBjcmVhdGUgYSBwcm9qZWN0IFwiUGVyc29uYWxcIlxuICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID09IDAgKSB7XG4gICAgICAgIGNvbnN0IFBlcnNvbmFsID0gY3JlYXRlUHJvamVjdCgnUGVyc29uYWwnKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkN1cnJlbnQgUHJvamVjdFwiLCBKU09OLnN0cmluZ2lmeShcIlBlcnNvbmFsXCIpKTtcbiAgICAgICAgcmV0dXJuIFwiUGVyc29uYWxcIjtcbiAgICB9XG4gICAgXG4gICAgLy9pZiBsb2NhbFN0b3JhZ2UgaXMgcG9wdWxhdGVkICYgYXZhaWxhYmxlOiBzZWxlY3QgKG1vc3QgcmVjZW50L2ZpcnN0IG9uZT8pXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwICYmIHN0b3JhZ2VTdGF0dXMgPT0gXCJhdmFpbGFibGVcIikge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDdXJyZW50IFByb2plY3RcIikpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQ3VycmVudCBQcm9qZWN0XCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0KSk7XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuICAgIH1cblxuXG4gICAgLy9pZiBsb2NhbCBzdG9yYWdlIGlzIHVuYXZhaWxhYmxlXG4gICAgaWYgKHN0b3JhZ2VTdGF0dXMgPT0gXCJ1bmF2YWlsYWJsZVwiKSB7XG4gICAgICAgIC8vc29tZSBjb2RlLiBNYXliZSBhbiBhbGVydD8gT3IgaW5uZXJUZXh0IGFsZXJ0P1xuICAgIH1cblxufVxuXG4vL0NyZWF0ZSBhIFRvIERvIFRhc2tcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBpZiAocHJpb3JpdHkgPT0gJycgfHwgcHJpb3JpdHkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vc2V0IGRlZmF1bHQgcHJpb3JpdHkgdG8gNSBpZiBlbXB0eVxuICAgICAgICBwcmlvcml0eSA9IDU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLCBcbiAgICAgICAgcHJpb3JpdHlcbiAgICB9XG59XG5cbi8vQXNpZ24gdGhlIFRvIERvIHRhc2sgdG8gdGhlIGN1cnJlbnQgcHJvamVjdFxuZnVuY3Rpb24gYXNzaWduVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgLy9jcmVhdGUgdGFzayBmdW5jdGlvblxuICAgIGNvbnN0IG15dGFzayA9IGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cbiAgICAvL0ZpbmQgY3VycmVudCBvcGVuIHByb2plY3RcbiAgICBjb25zdCBUYXNrbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3QoKSkpO1xuXG4gICAgLy9maW5kIG91dCB3aGVyZSB0YXNrIGJlbG9uZ3MgaW4gY3VycmVudCBwcm9qZWN0IHByaW9yaXR5XG4gICAgaWYgKFRhc2tsaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIFRhc2tsaXN0LnB1c2gobXl0YXNrKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2plY3QoKSwgSlNPTi5zdHJpbmdpZnkoVGFza2xpc3QpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHllYXIwID0gKG15dGFzay5kdWVEYXRlKS5zdWJzdHIoLTQsNCk7XG4gICAgY29uc3QgbW9udGgwID0gKG15dGFzay5kdWVEYXRlKS5zdWJzdHIoMCwyKTtcbiAgICBjb25zdCBkYXkwID0gKG15dGFzay5kdWVEYXRlKS5zdWJzdHIoMywyKTtcbiAgICBjb25zdCBjdXJyZW50VGFza0RhdGUgPSBuZXcgRGF0ZSh5ZWFyMCwgbW9udGgwLCBkYXkwKTtcblxuICAgIGNvbnN0IGN1cnJlbnRUYXNrTGVuZ3RoID0gVGFza2xpc3QubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50VGFza0xlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vaWYgaGlnaGVyIHByaW9yaXR5LCBhZGQgdGFza1xuICAgICAgICBpZiAobXl0YXNrLnByaW9yaXR5ID4gVGFza2xpc3RbaV0ucHJpb3JpdHkgKSB7XG4gICAgICAgICAgICBUYXNrbGlzdC5zcGxpY2UoW2ldLCAwLCBteXRhc2spO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NoZWNrIGlmIGN1cnJlbnQgSW5kZXggRHVlIERhdGUgaXMgbGF0ZXIgdGhhbiBuZXcgdGFzayBEdWUgRGF0ZVxuICAgICAgICBjb25zdCB5ZWFySSA9IChUYXNrbGlzdFtpXS5kdWVEYXRlKS5zdWJzdHIoLTQsNCk7XG4gICAgICAgIGNvbnN0IG1vbnRoSSA9IChUYXNrbGlzdFtpXS5kdWVEYXRlKS5zdWJzdHIoMCwyKTtcbiAgICAgICAgY29uc3QgZGF5SSA9IChUYXNrbGlzdFtpXS5kdWVEYXRlKS5zdWJzdHIoMywyKTtcbiAgICAgICAgY29uc3QgSW5kZXhUYXNrRGF0ZSA9IG5ldyBEYXRlKHllYXJJLCBtb250aEksIGRheUkpO1xuXG4gICAgICAgIGNvbnN0IGNvbXBhcmVkID0gY29tcGFyZUFzYyhjdXJyZW50VGFza0RhdGUsIEluZGV4VGFza0RhdGUpO1xuXG4gICAgICAgIC8vaWYgc2FtZSBwcmlvcml0eSwgYnV0IHNvb25lciBkdWUgZGF0ZSwgYWRkIHRhc2tcbiAgICAgICAgaWYgKG15dGFzay5wcmlvcml0eSA9PSBUYXNrbGlzdFtpXS5wcmlvcml0eSAmJiBjb21wYXJlZCA9PSAtMSAmJiBteXRhc2suZHVlRGF0ZSAhPSAnJykge1xuICAgICAgICAgICAgVGFza2xpc3Quc3BsaWNlKFtpXSwgMCwgbXl0YXNrKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9FbHNlLCBhZGQgbmV3IHRhc2sgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdCAobG93ZXN0IHByaW9yaXR5KVxuICAgICAgICBpZiAoaSA9PSBjdXJyZW50VGFza0xlbmd0aCAtMSkge1xuICAgICAgICAgICAgVGFza2xpc3QucHVzaChteXRhc2spO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvL0FkZCB0YXNrIHRvIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qZWN0KCksIEpTT04uc3RyaW5naWZ5KFRhc2tsaXN0KSk7XG4gICAgY29uc29sZS5sb2coXCJteVRhc2tMaXN0XCIsIFRhc2tsaXN0KTtcbn1cblxuLy8vL1VJIExvZ2ljXG5cbi8vQWRkIFRvIERvIEJ1dHRvblxuY29uc3QgYWRkVG9Eb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkVG9Eb1wiKTtcbmNvbnN0IGZvcm1Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0Zvcm1cIik7XG5hZGRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBmb3JtUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pO1xuXG4vL0FkZCBzaG93IFByb2plY3RzIEJ1dHRvblxuY29uc3Qgc2hvd1Byb2plY3RzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93UHJvamVjdHNcIik7XG5jb25zdCBwcm9qZWN0c1BvcHVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNQb3B1cFwiKTtcblxuc2hvd1Byb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3RzUG9wdXBGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KTtcblxuLy9Qb3B1cHMgQnV0dG9uc1xuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9DbG9zZVwiKTtcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvcm1Qb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxuY29uc3QgY2xvc2VCdG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c0Nsb3NlXCIpO1xuY2xvc2VCdG4yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3RzUG9wdXBGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG4vL3N1Ym1pdCBmb3JtXG5jb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0Zvcm1cIik7XG5cbnRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrVGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgZm9ybVByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrUHJpb3JpdHlcIikudmFsdWU7XG4gICAgY29uc3QgZm9ybUR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEdWVEYXRlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGZvcm1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuXG4gICAgLy9nZXQgZGF0ZSBpbiBwcmVmZXJyZWQgZm9ybWF0XG4gICAgY29uc3QgeWVhciA9IGZvcm1EdWVEYXRlLnN1YnN0cigwLDQpO1xuICAgIGNvbnN0IG1vbnRoID0gZm9ybUR1ZURhdGUuc3Vic3RyKDUsMik7XG4gICAgY29uc3QgZGF5ID0gZm9ybUR1ZURhdGUuc3Vic3RyKC0yLDIpO1xuXG4gICAgY29uc3QgbmV3Rm9ybUR1ZXREYXRlID0gbW9udGggKyBcIiBcIiArIGRheSArIFwiIFwiICsgeWVhcjtcblxuICAgIC8vYXNzaWduVGFzayBmcm9tIGhlcmVcbiAgICBhc3NpZ25UYXNrKGZvcm1UaXRsZSwgZm9ybURlc2NyaXB0aW9uLCBuZXdGb3JtRHVldERhdGUsIGZvcm1Qcmlvcml0eSk7XG5cbiAgICAvL2FkZCB0YXNrIHRvIFVJXG4gICAgYWRkVGFza1VJKGZvcm1UaXRsZSwgZm9ybURlc2NyaXB0aW9uLCBuZXdGb3JtRHVldERhdGUsIGZvcm1Qcmlvcml0eSk7XG5cbiAgICAvL2Nsb3NlIGZvcm0gaWYgbmVjY2VzYXJ5P1xuICAgIGNsb3NlQnRuLmNsaWNrKCk7XG5cbn0pO1xuXG5cbi8vYWRkIFRvIERvcyB0byBVSVxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuZnVuY3Rpb24gYWRkVGFza1VJKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAvL2NsZWFyIHByZXZpb3VzIHRhYmxlXG4gICAgdmFyIGNoaWxkID0gY29udGVudC5sYXN0RWxlbWVudENoaWxkOyAgXG4gICAgd2hpbGUgKGNoaWxkKSB7IFxuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNoaWxkKTsgXG4gICAgICAgIGNoaWxkID0gY29udGVudC5sYXN0RWxlbWVudENoaWxkOyBcbiAgICB9XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gY3VycmVudFByb2plY3QoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgaGVhZGVyLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuXG4gICAgY29uc3QgVGFza2xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KCkpKTtcblxuICAgIC8vSGVhZGVyXG4gICAgdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgbGV0IGNlbGwwMSA9IHRhYmxlLnJvd3NbMF0uaW5zZXJ0Q2VsbCgpO1xuICAgIGNlbGwwMS50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcbiAgICBsZXQgY2VsbDAyID0gdGFibGUucm93c1swXS5pbnNlcnRDZWxsKCk7XG4gICAgY2VsbDAyLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICAgIGxldCBjZWxsMDMgPSB0YWJsZS5yb3dzWzBdLmluc2VydENlbGwoKTtcbiAgICBjZWxsMDMudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gICAgbGV0IGNlbGwwNCA9IHRhYmxlLnJvd3NbMF0uaW5zZXJ0Q2VsbCgpO1xuICAgIGNlbGwwNC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBsZXQgY2VsbDA2ID0gdGFibGUucm93c1swXS5pbnNlcnRDZWxsKCk7XG4gICAgY2VsbDA2LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgbGV0IGNlbGwwNyA9IHRhYmxlLnJvd3NbMF0uaW5zZXJ0Q2VsbCgpO1xuICAgIGNlbGwwNy50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cblxuXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgVGFza2xpc3QubGVuZ3RoOyByb3crKykge1xuICAgICAgICB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgICAgLy9EaXNwbGF5IERhdGFcbiAgICAgICAgbGV0IG5ld0NlbGwgPSB0YWJsZS5yb3dzW3RhYmxlLnJvd3MubGVuZ3RoIC0gMV0uaW5zZXJ0Q2VsbCgpO1xuICAgICAgICBuZXdDZWxsLnRleHRDb250ZW50ID0gVGFza2xpc3Rbcm93XS50aXRsZTtcbiAgICAgICAgbGV0IG5ld0NlbGwyID0gdGFibGUucm93c1t0YWJsZS5yb3dzLmxlbmd0aCAtIDFdLmluc2VydENlbGwoKTtcbiAgICAgICAgbmV3Q2VsbDIudGV4dENvbnRlbnQgPSBUYXNrbGlzdFtyb3ddLnByaW9yaXR5O1xuICAgICAgICBsZXQgbmV3Q2VsbDMgPSB0YWJsZS5yb3dzW3RhYmxlLnJvd3MubGVuZ3RoIC0gMV0uaW5zZXJ0Q2VsbCgpO1xuICAgICAgICBuZXdDZWxsMy50ZXh0Q29udGVudCA9IFRhc2tsaXN0W3Jvd10uZHVlRGF0ZTtcbiAgICAgICAgbGV0IG5ld0NlbGw0ID0gdGFibGUucm93c1t0YWJsZS5yb3dzLmxlbmd0aCAtIDFdLmluc2VydENlbGwoKTtcbiAgICAgICAgbmV3Q2VsbDQudGV4dENvbnRlbnQgPSBUYXNrbGlzdFtyb3ddLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIC8vRGlzcGxheSBCdXR0b25zXG4gICAgICAgIGxldCBuZXdDZWxsNSA9IHRhYmxlLnJvd3NbdGFibGUucm93cy5sZW5ndGggLSAxXS5pbnNlcnRDZWxsKCk7XG4gICAgICAgIGxldCBidXR0b24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbjEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRSb3dGdW5jdGlvbik7XG4gICAgICAgIG5ld0NlbGw1LmFwcGVuZChidXR0b24xKTtcbiAgICAgICAgbGV0IG5ld0NlbGw2ID0gdGFibGUucm93c1t0YWJsZS5yb3dzLmxlbmd0aCAtIDFdLmluc2VydENlbGwoKTtcbiAgICAgICAgbGV0IGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlUm93RnVuY3Rpb24pO1xuICAgICAgICBuZXdDZWxsNi5hcHBlbmQoYnV0dG9uMik7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFibGUpO1xuXG4gICAgLy9zaG93IGJ1dHRvbiAoZWRpdFJvd0Z1bmN0aW9uIGhpZGVzIGl0KVxuICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgIC8vY2xlYXIgaW5wdXQgZmllbGRzIGZyb20gYmVmb3JlXG4gICAgY29uc3QgcHJvamVjdFRpdGxlSFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1RpdGxlXCIpO1xuICAgIGNvbnN0IHByb2plY3RQcmlvcml0eUhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tQcmlvcml0eVwiKTtcbiAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZUhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEdWVEYXRlXCIpO1xuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbkhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXNjcmlwdGlvblwiKTtcblxuICAgIHByb2plY3RUaXRsZUhUTUwudmFsdWUgPSBcIlwiO1xuICAgIHByb2plY3RQcmlvcml0eUhUTUwudmFsdWUgPSBcIlwiO1xuICAgIHByb2plY3REdWVEYXRlSFRNTC52YWx1ZSA9IFwiXCI7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uSFRNTC52YWx1ZSA9IFwiXCI7XG59XG5cbi8vZWRpdCB0YXNrIGJ1dHRvblxuZnVuY3Rpb24gZWRpdFJvd0Z1bmN0aW9uKCkge1xuICAgIGNvbnN0IHRoaXNSb3cgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCB0aGlzUm93SW5kZXggPSB0aGlzUm93LnJvd0luZGV4IC0gMTtcbiAgICBsZXQgVGFza2xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KCkpKTtcblxuICAgIC8vRm9ybSBcbiAgICBjb25zdCBvbGRGb3JtVGl0bGUgPSBUYXNrbGlzdFt0aGlzUm93SW5kZXhdLnRpdGxlO1xuICAgIGNvbnN0IG9sZEZvcm1Qcmlvcml0eSA9IFRhc2tsaXN0W3RoaXNSb3dJbmRleF0ucHJpb3JpdHk7XG4gICAgY29uc3Qgb2xkRm9ybUR1ZURhdGUgPSBUYXNrbGlzdFt0aGlzUm93SW5kZXhdLmR1ZURhdGU7XG4gICAgY29uc3Qgb2xkRm9ybURlc2NyaXB0aW9uID0gVGFza2xpc3RbdGhpc1Jvd0luZGV4XS5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnNvbGUubG9nKG9sZEZvcm1UaXRsZSk7XG5cbiAgICAvL29wZW4gZm9ybVxuICAgIGZvcm1Qb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgLy9nZXQgdmFsdWUgZnJvbSBpbnB1dCBmaWVsZFxuICAgIGNvbnN0IHByb2plY3RUaXRsZUhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUaXRsZVwiKTtcbiAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrUHJpb3JpdHlcIik7XG4gICAgY29uc3QgcHJvamVjdER1ZURhdGVIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRHVlRGF0ZVwiKTtcbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb25IVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGVzY3JpcHRpb25cIik7XG5cblxuICAgIC8vY2hhbmdlIGlucHV0IGZpZWxkXG4gICAgcHJvamVjdFRpdGxlSFRNTC52YWx1ZSA9IGAke29sZEZvcm1UaXRsZX1gO1xuICAgIHByb2plY3RQcmlvcml0eUhUTUwudmFsdWUgPSBgJHtvbGRGb3JtUHJpb3JpdHl9YDtcbiAgICBwcm9qZWN0RHVlRGF0ZUhUTUwudmFsdWUgPSBgJHtvbGRGb3JtRHVlRGF0ZX1gO1xuICAgIHByb2plY3REZXNjcmlwdGlvbkhUTUwudmFsdWUgPSBgJHtvbGRGb3JtRGVzY3JpcHRpb259YDtcblxuICAgIC8vTmVlZCB0byBmaW5kIGEgd2F5IHRvIGRlbGV0ZSBvbGQgdGFzayBvbmx5IGlmIGZvcm0gaXMgc3VibWl0dGVkXG4gICAgLy9mb3Igbm93LCBoaWRpbmcgdGhlIGNhbmNlbCBidXR0b24gZHVyaW5nIGVkaXRpbmdcbiAgICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgXG4gICAgVGFza2xpc3Quc3BsaWNlKHRoaXNSb3dJbmRleCwgMSk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBjdXJyZW50UHJvamVjdCgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShUYXNrbGlzdCkpO1xuXG5cbn1cblxuLy9kZWxldGUgdGFzayBidXR0b25cbmZ1bmN0aW9uIGRlbGV0ZVJvd0Z1bmN0aW9uKCkge1xuICAgIGNvbnN0IHRoaXNSb3cgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCB0aGlzUm93SW5kZXggPSB0aGlzUm93LnJvd0luZGV4IC0gMTtcbiAgICBsZXQgVGFza2xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KCkpKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gY3VycmVudFByb2plY3QoKTtcblxuICAgIFRhc2tsaXN0LnNwbGljZSh0aGlzUm93SW5kZXgsIDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShUYXNrbGlzdCkpO1xuICAgIGFkZFRhc2tVSSgpO1xuXG59XG5cbi8vIEFkZCBQcm9qZWN0IFVJXG4vL0NyZWF0ZSBOZXcgUHJvamVjdCBTdWJtaXQgQnV0dG9uXG5jb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdENvbnRlbnRcIik7XG5cbmNvbnN0IHN1Ym1pdFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFByb2plY3RcIik7XG5cbnN1Ym1pdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vZ2V0IHZhbHVlIGZyb20gaW5wdXQgZmllbGRcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RGb3JtXCIpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZUhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RGb3JtXCIpO1xuXG4gICAgXG5cbiAgICAvL2NyZWF0ZSBwcm9qZWN0IGZyb20gdmFsdWUgJiB1cGRhdGUgVUlcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gICAgYWRkUHJvamVjdFVJKHByb2plY3RUaXRsZSk7XG5cbiAgICAvL2NsZWFyIGlucHV0IGZpZWxkXG4gICAgcHJvamVjdFRpdGxlSFRNTC52YWx1ZSA9IFwiXCI7XG5cbn0pO1xuXG4vL0FkZCBQcm9qZWN0IHRvIFVJXG5mdW5jdGlvbiBhZGRQcm9qZWN0VUkobmFtZSkge1xuICAgIC8vY2xlYXIgcHJldmlvdXMgdGFibGVcbiAgICB2YXIgY2hpbGQgPSBwcm9qZWN0Q29udGVudC5sYXN0RWxlbWVudENoaWxkOyAgXG4gICAgd2hpbGUgKGNoaWxkKSB7IFxuICAgIHByb2plY3RDb250ZW50LnJlbW92ZUNoaWxkKGNoaWxkKTsgXG4gICAgY2hpbGQgPSBwcm9qZWN0Q29udGVudC5sYXN0RWxlbWVudENoaWxkOyBcbn1cbiAgICAvL2NyZWF0ZSB0YWJsZVxuICAgIGxldCBwdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuXG4gICAgcHRhYmxlLmluc2VydFJvdygpO1xuICAgIGxldCBwY2VsbDEgPSBwdGFibGUucm93c1swXS5pbnNlcnRDZWxsKCk7XG4gICAgcGNlbGwxLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xuICAgIGxldCBwY2VsbDIgPSBwdGFibGUucm93c1swXS5pbnNlcnRDZWxsKCk7XG4gICAgcGNlbGwyLnRleHRDb250ZW50ID0gXCJTZWxlY3RcIjtcbiAgICBsZXQgcGNlbGwzID0gcHRhYmxlLnJvd3NbMF0uaW5zZXJ0Q2VsbCgpO1xuICAgIHBjZWxsMy50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgIGxldCBwY2VsbDQgPSBwdGFibGUucm93c1swXS5pbnNlcnRDZWxsKCk7XG4gICAgcGNlbGw0LnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICAgIGNvbnN0IGFsbEtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGFsbEtleXNbaV07XG4gICAgICAgIGlmIChrZXkgIT0gXCJDdXJyZW50IFByb2plY3RcIikge1xuICAgICAgICAgICAgcHRhYmxlLmluc2VydFJvdygpO1xuICAgICAgICAgICAgbGV0IHBjZWxsMDEgPSBwdGFibGUucm93c1twdGFibGUucm93cy5sZW5ndGggLSAxXS5pbnNlcnRDZWxsKCk7XG4gICAgICAgICAgICBwY2VsbDAxLnRleHRDb250ZW50ID0ga2V5O1xuXG4gICAgICAgICAgICAvL0Rpc3BsYXkgQnV0dG9uc1xuICAgICAgICAgICAgLy9zZWxlY3RcbiAgICAgICAgICAgIGxldCBwY2VsbDAyID0gcHRhYmxlLnJvd3NbcHRhYmxlLnJvd3MubGVuZ3RoIC0gMV0uaW5zZXJ0Q2VsbCgpO1xuICAgICAgICAgICAgbGV0IHBidXR0b24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBwY2VsbDAyLmFwcGVuZChwYnV0dG9uMSk7XG4gICAgICAgICAgICBwYnV0dG9uMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0UHJvamVjdEZ1bmN0aW9uKTtcbiAgICAgICAgICAgIC8vZWRpdFxuICAgICAgICAgICAgbGV0IHBjZWxsMDMgPSBwdGFibGUucm93c1twdGFibGUucm93cy5sZW5ndGggLSAxXS5pbnNlcnRDZWxsKCk7XG4gICAgICAgICAgICBsZXQgcGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHBjZWxsMDMuYXBwZW5kKHBidXR0b24yKTtcbiAgICAgICAgICAgIHBidXR0b24yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0UHJvamVjdEZ1bmN0aW9uKTtcbiAgICAgICAgICAgIC8vZGVsZXRlXG4gICAgICAgICAgICBsZXQgcGNlbGwwNCA9IHB0YWJsZS5yb3dzW3B0YWJsZS5yb3dzLmxlbmd0aCAtIDFdLmluc2VydENlbGwoKTtcbiAgICAgICAgICAgIGxldCBwYnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcGJ1dHRvbjMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3RGdW5jdGlvbik7XG4gICAgICAgICAgICBwY2VsbDA0LmFwcGVuZChwYnV0dG9uMyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQocHRhYmxlKTtcbn1cblxuLy9kZWxldGUgcHJvamVjdCBidXR0b25cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGdW5jdGlvbigpIHtcbiAgICAvL2ZpbmQgVGl0bGUgb2YgY3VycmVudCByb3dcbiAgICBjb25zdCB0aGlzUm93ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgdGhpc1Jvd1RpdGxlID0gKHRoaXNSb3cuY2VsbHNbMF0uaW5uZXJUZXh0KTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzUm93VGl0bGUpO1xuXG4gICAgLy9yZWxvYWQgVG8gRG8gTGlzdFxuICAgIGFkZFByb2plY3RVSSgpO1xufVxuXG4vL3NlbGVjdCBwcm9qZWN0IGJ1dHRvblxuZnVuY3Rpb24gc2VsZWN0UHJvamVjdEZ1bmN0aW9uKCkge1xuICAgIC8vZmluZCBUaXRsZSBvZiBjdXJyZW50IHJvd1xuICAgIGNvbnN0IHRoaXNSb3cgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCB0aGlzUm93VGl0bGUgPSAodGhpc1Jvdy5jZWxsc1swXS5pbm5lclRleHQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQ3VycmVudCBQcm9qZWN0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXNSb3dUaXRsZSkpO1xuXG4gICAgLy9yZWxvYWQgVG8gRG8gTGlzdFxuICAgIGFkZFRhc2tVSSgpO1xufVxuXG4vL2VkaXQgcHJvamVjdCBidXR0b25cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0RnVuY3Rpb24oKSB7XG4gICAgLy9maW5kIFRpdGxlIG9mIGN1cnJlbnQgcm93XG4gICAgY29uc3QgdGhpc1JvdyA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IHRoaXNSb3dUaXRsZSA9ICh0aGlzUm93LmNlbGxzWzBdLmlubmVyVGV4dCk7XG5cbiAgICBjb25zdCBUYXNrbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpc1Jvd1RpdGxlKSk7XG4gICAgc2hvd19wcm9tcHQoKTtcblxuICAgIGZ1bmN0aW9uIHNob3dfcHJvbXB0KCkge1xuICAgICAgICB2YXIgbmFtZSA9IHByb21wdCgnUGxlYXNlIGVudGVyIHVwZGF0ZWQgcHJvamVjdCBuYW1lJywnJyk7XG4gICAgICAgIGlmIChuYW1lICE9IG51bGwgJiYgbmFtZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAvL3JlLWNyZWF0ZSBwcm9qZWN0IHdpdGggbmV3IG5hbWVcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXNSb3dUaXRsZSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShUYXNrbGlzdCkpO1xuXG4gICAgICAgICAgICAvL3VwZGF0ZSBUYXNrVUkgaGVhZGVyIGlmIGl0J3MgdGhlIGN1cnJlbnQgcHJvamVjdCBcbiAgICAgICAgICAgIGlmIChjdXJyZW50UHJvamVjdCgpID09IHRoaXNSb3dUaXRsZSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJDdXJyZW50IFByb2plY3RcIiwgSlNPTi5zdHJpbmdpZnkobmFtZSkpO1xuICAgICAgICAgICAgYWRkVGFza1VJKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICAgIFxuICAgIGFkZFByb2plY3RVSSgpO1xufVxuLy9TZXQgQ3VycmVudCBQcm9qZWN0IG9uIEhvbWUgUGFnZSB0byBQZXJzb25hbCBpZiBsb2NhbCBTdG9yYWdlIGlzIGVtcHR5XG5jdXJyZW50UHJvamVjdCgpO1xuYWRkVGFza1VJKCk7XG5hZGRQcm9qZWN0VUkoKTtcblxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL21haW4uanMnO1xuXG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSAnLi9tYWluLmpzJztcblxuLy8gY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZHMhXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9