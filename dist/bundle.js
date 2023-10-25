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
    background-color: lightcoral;
}

#headContain {
    display: flex;
    justify-content: space-around;

    background-color: turquoise;
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
    background-color: yellow;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 50vh;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,wBAAwB;AACxB;;;IAGI,kBAAkB;IAClB;QACI,aAAa;QACb,sBAAsB;;QAEtB,6BAA6B;QAC7B,mBAAmB;QACnB,sBAAsB;QACtB,aAAa;IACjB;;IAEA,iBAAiB;;;MAGf;QACE,WAAW;QACX,YAAY;QACZ,gBAAgB;MAClB;;MAEA;QACE,gBAAgB;MAClB;;AAEN;;AAEA;;IAEI;QACI,cAAc;IAClB;;AAEJ;;;;;AAKA,gBAAgB;AAChB,kBAAkB;AAClB;IACI,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,6BAA6B;;IAE7B,2BAA2B;IAC3B,iBAAiB;IACjB,oBAAoB;;AAExB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;;IAEnB,aAAa;IACb,gBAAgB;;AAEpB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;IACvB,sBAAsB;IACtB,0BAA0B;AAC9B;;AAEA,gBAAgB;AAChB;IACI,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;AACpB;;AAEA,2BAA2B;AAC3B;IACI,aAAa;IACb,eAAe;IACf,QAAQ;IACR,UAAU;IACV,eAAe,EAAE,8CAA8C;IAC/D,OAAO;IACP,QAAQ;;IAER,sCAAsC;IACtC,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;;;AAGpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,4CAA4C;IAC5C,eAAe;;IAEf,iBAAiB;IACjB,kBAAkB;;IAElB,gCAAgC;IAChC,YAAY;IACZ,mBAAmB;IACnB,YAAY;AAChB;;AAEA,gCAAgC;AAChC;IACI,aAAa;IACb,wBAAwB;IACxB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,aAAa;IACb,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,OAAO;IACP,gBAAgB;IAChB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA,oBAAoB;AACpB;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;;AAGA,kBAAkB;AAClB;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;;AAEjB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB","sourcesContent":["/* mobile friendly CSS */\n@media (max-width:960px) {\n\n\n    /*footer styling */\n    #footContain {\n        display: flex;\n        flex-direction: column;\n\n        justify-content: space-around;\n        align-items: center;\n        background-color: cyan;\n        padding: 10px;\n    }\n\n    /* form styling */\n    \n\n      .form-row #taskDescription {           \n        width: 100%;\n        height: 100%; \n        max-width: 169px;\n      }\n\n      .formPopup {\n        min-width: 200px;\n      }\n\n}\n\n@media (max-width:500px) {\n    \n    .tab {\n        min-width: 30%;\n    }\n\n}\n\n\n\n\n/* General CSS */\n/*header styling */\n#container {\n    background-color: lightcoral;\n}\n\n#headContain {\n    display: flex;\n    justify-content: space-around;\n\n    background-color: turquoise;\n    padding-top: 10px;\n    padding-bottom: 10px;\n\n}\n\n.tab {\n    display: flex;\n    padding: 20px;\n    border: solid blue 3px;\n    background-color: lightgray;    \n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    font-size: large;\n    border-radius: 30px;\n\n    flex: 0 1 20%;\n    min-width: 100px;\n\n}\n\n.tab:hover, .closeBtn:hover, #submitTodo {\n    background-color: antiquewhite;\n}\n\n.tab:active, .closeBtn:active, #submitTodo{\n    background-color: white;\n    box-shadow: 0 2px #666;\n    transform: translateY(4px);\n}\n\n/*body styling */\nbody {\n    background-color: lightgray;\n}\n\n#content {\n    min-height: 50vh;\n}\n\n/* Add To Do form styling */\n.formPopup {\n    display: none;\n    position: fixed;\n    top: 10%;\n    width: 50%;\n    margin: 5% auto; /* Only centers horizontally not vertically! */\n    left: 0;\n    right: 0;\n\n    background-color: lightgoldenrodyellow;\n    border: solid 3px;\n}\n\n.todoContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    max-width: 300px;\n}\n\n.formContainer {\n    display: flex;\n    justify-content: center;\n}\n\n.form-row {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 15px;\n    font-weight: 250;\n\n\n}\n\n#form-row-1 label {\n    font-weight: bold;\n}\n\n#taskPriority {\n    min-width: 120.3px;\n}\n\n.todoContainer > .form-row > p {\n    font-weight: bold;\n}\n\n.closeBtn {\n    display: flex;\n    background-color: lightgray;\n    border: solid black 1px;\n    width: 2rem;\n    height: 2rem;\n    align-items: center;\n    justify-content: center;\n    font-size: 2rem;\n    font-weight: bolder; \n}\n\n#todoClose {\n    align-self: flex-end; \n    margin-top: 20px;  \n    margin-right: 20px;\n}\n\n#submitTodo {\n    background-color: lightgrey;\n    padding: 10px;\n    margin-bottom: 20px;\n}\n\n.form-row textarea {\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 16px;\n  \n    border: 1px solid;\n    border-radius: 3px;\n  \n    width: clamp(100%, 300px, 400px);\n    height: 100%;\n    margin-bottom: 10px;\n    padding: 7px;\n}\n\n/* Show Projects Popup Styling */\n.projectsPopup {\n    display: none;\n    background-color: yellow;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    height: 100vh;\n    width: 50vh;\n}\n\n.formContainer2 {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.projectContainer {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n#addProject {\n    flex: 0;\n    margin-top: 20px;\n    width: 150px;\n    height: 100px;\n}\n\n#projectsClose {\n    margin-right: 20px;\n    align-self: flex-end; \n    margin-top: 20px;  \n    margin-right: 20px;\n}\n\n/* Content Styling */\ntable {\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    background-color: black;\n    text-align: center;\n}\n\ntable td {\n    background-color: white;\n    border: solid black 1px;\n    margin-top: 10px;\n}\n\ntable button {\n    padding: 20px;\n    border-radius: 10px;\n}\n\n\n/*footer styling */\n#footContain {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: cyan;\n    padding: 10px;\n\n}\n\n#footContain p {\n    text-align: center;\n    line-height: 20px;\n}\n"],"sourceRoot":""}]);
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
localStorage.clear();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsUUFBUSxZQUFZLE1BQU0sVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxjQUFjLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sU0FBUyxZQUFZLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLHNCQUFzQixXQUFXLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsZUFBZSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZ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QWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDRjs7QUFFb0I7O0FBRXZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9jaGVja1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BhY2thZ2UuanNvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIG1vYmlsZSBmcmllbmRseSBDU1MgKi9cbkBtZWRpYSAobWF4LXdpZHRoOjk2MHB4KSB7XG5cblxuICAgIC8qZm9vdGVyIHN0eWxpbmcgKi9cbiAgICAjZm9vdENvbnRhaW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIC8qIGZvcm0gc3R5bGluZyAqL1xuICAgIFxuXG4gICAgICAuZm9ybS1yb3cgI3Rhc2tEZXNjcmlwdGlvbiB7ICAgICAgICAgICBcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTsgXG4gICAgICAgIG1heC13aWR0aDogMTY5cHg7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtUG9wdXAge1xuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KSB7XG4gICAgXG4gICAgLnRhYiB7XG4gICAgICAgIG1pbi13aWR0aDogMzAlO1xuICAgIH1cblxufVxuXG5cblxuXG4vKiBHZW5lcmFsIENTUyAqL1xuLypoZWFkZXIgc3R5bGluZyAqL1xuI2NvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbn1cblxuI2hlYWRDb250YWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHVycXVvaXNlO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG59XG5cbi50YWIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IHNvbGlkIGJsdWUgM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTsgICAgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG5cbiAgICBmbGV4OiAwIDEgMjAlO1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG5cbn1cblxuLnRhYjpob3ZlciwgLmNsb3NlQnRuOmhvdmVyLCAjc3VibWl0VG9kbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuXG4udGFiOmFjdGl2ZSwgLmNsb3NlQnRuOmFjdGl2ZSwgI3N1Ym1pdFRvZG97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAycHggIzY2NjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cblxuLypib2R5IHN0eWxpbmcgKi9cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuI2NvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG59XG5cbi8qIEFkZCBUbyBEbyBmb3JtIHN0eWxpbmcgKi9cbi5mb3JtUG9wdXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMTAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiA1JSBhdXRvOyAvKiBPbmx5IGNlbnRlcnMgaG9yaXpvbnRhbGx5IG5vdCB2ZXJ0aWNhbGx5ISAqL1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcbiAgICBib3JkZXI6IHNvbGlkIDNweDtcbn1cblxuLnRvZG9Db250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuLmZvcm1Db250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb3JtLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBmb250LXdlaWdodDogMjUwO1xuXG5cbn1cblxuI2Zvcm0tcm93LTEgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jdGFza1ByaW9yaXR5IHtcbiAgICBtaW4td2lkdGg6IDEyMC4zcHg7XG59XG5cbi50b2RvQ29udGFpbmVyID4gLmZvcm0tcm93ID4gcCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbG9zZUJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7IFxufVxuXG4jdG9kb0Nsb3NlIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgXG4gICAgbWFyZ2luLXRvcDogMjBweDsgIFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuI3N1Ym1pdFRvZG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLXJvdyB0ZXh0YXJlYSB7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICBcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIFxuICAgIHdpZHRoOiBjbGFtcCgxMDAlLCAzMDBweCwgNDAwcHgpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDdweDtcbn1cblxuLyogU2hvdyBQcm9qZWN0cyBQb3B1cCBTdHlsaW5nICovXG4ucHJvamVjdHNQb3B1cCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiA1MHZoO1xufVxuXG4uZm9ybUNvbnRhaW5lcjIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2plY3RDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jYWRkUHJvamVjdCB7XG4gICAgZmxleDogMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4jcHJvamVjdHNDbG9zZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kOyBcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAgXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4vKiBDb250ZW50IFN0eWxpbmcgKi9cbnRhYmxlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGFibGUgdGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnRhYmxlIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5cbi8qZm9vdGVyIHN0eWxpbmcgKi9cbiNmb290Q29udGFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XG4gICAgcGFkZGluZzogMTBweDtcblxufVxuXG4jZm9vdENvbnRhaW4gcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJw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LGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7O0FBR0Esa0JBQWtCO0FBQ2xCO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBtb2JpbGUgZnJpZW5kbHkgQ1NTICovXFxuQG1lZGlhIChtYXgtd2lkdGg6OTYwcHgpIHtcXG5cXG5cXG4gICAgLypmb290ZXIgc3R5bGluZyAqL1xcbiAgICAjZm9vdENvbnRhaW4ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcblxcbiAgICAvKiBmb3JtIHN0eWxpbmcgKi9cXG4gICAgXFxuXFxuICAgICAgLmZvcm0tcm93ICN0YXNrRGVzY3JpcHRpb24geyAgICAgICAgICAgXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTsgXFxuICAgICAgICBtYXgtd2lkdGg6IDE2OXB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAuZm9ybVBvcHVwIHtcXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgICAgfVxcblxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo1MDBweCkge1xcbiAgICBcXG4gICAgLnRhYiB7XFxuICAgICAgICBtaW4td2lkdGg6IDMwJTtcXG4gICAgfVxcblxcbn1cXG5cXG5cXG5cXG5cXG4vKiBHZW5lcmFsIENTUyAqL1xcbi8qaGVhZGVyIHN0eWxpbmcgKi9cXG4jY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuI2hlYWRDb250YWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHR1cnF1b2lzZTtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcblxcbn1cXG5cXG4udGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibHVlIDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5OyAgICBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcblxcbiAgICBmbGV4OiAwIDEgMjAlO1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcblxcbn1cXG5cXG4udGFiOmhvdmVyLCAuY2xvc2VCdG46aG92ZXIsICNzdWJtaXRUb2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4udGFiOmFjdGl2ZSwgLmNsb3NlQnRuOmFjdGl2ZSwgI3N1Ym1pdFRvZG97XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCAjNjY2O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG59XFxuXFxuLypib2R5IHN0eWxpbmcgKi9cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XFxufVxcblxcbi8qIEFkZCBUbyBEbyBmb3JtIHN0eWxpbmcgKi9cXG4uZm9ybVBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiA1JSBhdXRvOyAvKiBPbmx5IGNlbnRlcnMgaG9yaXpvbnRhbGx5IG5vdCB2ZXJ0aWNhbGx5ISAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XFxuICAgIGJvcmRlcjogc29saWQgM3B4O1xcbn1cXG5cXG4udG9kb0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyNTA7XFxuXFxuXFxufVxcblxcbiNmb3JtLXJvdy0xIGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiN0YXNrUHJpb3JpdHkge1xcbiAgICBtaW4td2lkdGg6IDEyMC4zcHg7XFxufVxcblxcbi50b2RvQ29udGFpbmVyID4gLmZvcm0tcm93ID4gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2VCdG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyOyBcXG59XFxuXFxuI3RvZG9DbG9zZSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kOyBcXG4gICAgbWFyZ2luLXRvcDogMjBweDsgIFxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbiNzdWJtaXRUb2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1yb3cgdGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBcXG4gICAgd2lkdGg6IGNsYW1wKDEwMCUsIDMwMHB4LCA0MDBweCk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogN3B4O1xcbn1cXG5cXG4vKiBTaG93IFByb2plY3RzIFBvcHVwIFN0eWxpbmcgKi9cXG4ucHJvamVjdHNQb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogNTB2aDtcXG59XFxuXFxuLmZvcm1Db250YWluZXIyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2FkZFByb2plY3Qge1xcbiAgICBmbGV4OiAwO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbiNwcm9qZWN0c0Nsb3NlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7ICBcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4vKiBDb250ZW50IFN0eWxpbmcgKi9cXG50YWJsZSB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnRhYmxlIHRkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG50YWJsZSBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG4vKmZvb3RlciBzdHlsaW5nICovXFxuI2Zvb3RDb250YWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxufVxcblxcbiNmb290Q29udGFpbiBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vQ2hlY2sgdG8gc2VlIGlmIGxvY2FsU3RvcmFnZSBpcyBhdmFpbGFibGU6XG53aW5kb3cuc3RvcmFnZVN0YXR1cyA9ICcnO1xuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICBzdG9yYWdlICYmXG4gICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG5cbi8vUHJvdmlkZSByZXN1bHQgb2YgaWYgbG9jYWxTdG9yYWdlIGlzIGF2YWlsYWJsZTpcbmV4cG9ydCBmdW5jdGlvbiBpc1N0b3JhZ2VBdmFpbGFibGUoKSB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgICAgLy9sb2NhbFN0b3JhZ2UgaXMgYXZhaWxhYmxlIVxuICAgICAgICBzdG9yYWdlU3RhdHVzID0gXCJhdmFpbGFibGVcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIE5vIGxvY2FsU3RvcmFnZSBhdmFpbGFibGUuXG4gICAgICAgIHN0b3JhZ2VTdGF0dXMgPSBcInVuYXZhaWxhYmxlXCI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgaXNTdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSAnLi9jaGVja1N0b3JhZ2UnO1xuXG4vL2NoZWNrIGlmIGxvY2FsU3RvcmFnZSBpcyBhdmFpbGFibGVcbmlzU3RvcmFnZUF2YWlsYWJsZSgpO1xuY29uc29sZS5sb2coXCJsb2NhbFN0b3JhZ2U6XCIsIHN0b3JhZ2VTdGF0dXMsIFwiO2xlbmd0aDpcIiwgbG9jYWxTdG9yYWdlLmxlbmd0aCk7XG5cblxuLy9MaXQgb2YgUHJvamVjdCBHcm91cHNcblxuLy8vL0Z1bmN0aW9ucyBmb3IgdGhlIFRvIERvIExpc3Rcbi8vLy9FYWNoIHByb2plY3QgLyBUbyBEbyBpdGVtIHNob3VsZCBiZSBlZGl0YWJsZSwgZGVsZXRhYmxlLCAmIGNvbXBsZXRhYmxlLlxuXG4vL0NyZWF0ZSBhIHByb2plY3QgZ3JvdXAgdG8gc3RvcmUgdGFza3NcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmFtZTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IFtdO1xuXG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkN1cnJlbnQgUHJvamVjdFwiLCBKU09OLnN0cmluZ2lmeShuYW1lKSk7XG5cblxufVxuXG4vL0N1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0IGdyb3VwXG4vL1Nob3cgUHJvamVjdHMgYnV0dG9uIFVJIHNob3VsZCBhbGxvdyB1c2VyIHRvIHNlbGVjdCBcblxuZnVuY3Rpb24gY3VycmVudFByb2plY3QoKSB7XG4gICAgLy9jaGVjayBpZiBsb2NhbFN0b3JhZ2UgaXMgYXZhaWxhYmxlXG4gICAgaXNTdG9yYWdlQXZhaWxhYmxlKCk7XG5cbiAgICAvL2lmIGxvY2FsU3RvcmFnZSBpcyBlbXB0eSAmIGF2YWlsYWJsZTogY3JlYXRlIGEgcHJvamVjdCBcIlBlcnNvbmFsXCJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA9PSAwICkge1xuICAgICAgICBjb25zdCBQZXJzb25hbCA9IGNyZWF0ZVByb2plY3QoJ1BlcnNvbmFsJyk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJDdXJyZW50IFByb2plY3RcIiwgSlNPTi5zdHJpbmdpZnkoXCJQZXJzb25hbFwiKSk7XG4gICAgICAgIHJldHVybiBcIlBlcnNvbmFsXCI7XG4gICAgfVxuICAgIFxuICAgIC8vaWYgbG9jYWxTdG9yYWdlIGlzIHBvcHVsYXRlZCAmIGF2YWlsYWJsZTogc2VsZWN0IChtb3N0IHJlY2VudC9maXJzdCBvbmU/KVxuICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCAmJiBzdG9yYWdlU3RhdHVzID09IFwiYXZhaWxhYmxlXCIpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQ3VycmVudCBQcm9qZWN0XCIpKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkN1cnJlbnQgUHJvamVjdFwiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdCkpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcbiAgICB9XG5cblxuICAgIC8vaWYgbG9jYWwgc3RvcmFnZSBpcyB1bmF2YWlsYWJsZVxuICAgIGlmIChzdG9yYWdlU3RhdHVzID09IFwidW5hdmFpbGFibGVcIikge1xuICAgICAgICAvL3NvbWUgY29kZS4gTWF5YmUgYW4gYWxlcnQ/IE9yIGlubmVyVGV4dCBhbGVydD9cbiAgICB9XG5cbn1cblxuLy9DcmVhdGUgYSBUbyBEbyBUYXNrXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgaWYgKHByaW9yaXR5ID09ICcnIHx8IHByaW9yaXR5ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAvL3NldCBkZWZhdWx0IHByaW9yaXR5IHRvIDUgaWYgZW1wdHlcbiAgICAgICAgcHJpb3JpdHkgPSA1O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSwgXG4gICAgICAgIHByaW9yaXR5XG4gICAgfVxufVxuXG4vL0FzaWduIHRoZSBUbyBEbyB0YXNrIHRvIHRoZSBjdXJyZW50IHByb2plY3RcbmZ1bmN0aW9uIGFzc2lnblRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIC8vY3JlYXRlIHRhc2sgZnVuY3Rpb25cbiAgICBjb25zdCBteXRhc2sgPSBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuXG4gICAgLy9GaW5kIGN1cnJlbnQgb3BlbiBwcm9qZWN0XG4gICAgY29uc3QgVGFza2xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KCkpKTtcblxuICAgIC8vZmluZCBvdXQgd2hlcmUgdGFzayBiZWxvbmdzIGluIGN1cnJlbnQgcHJvamVjdCBwcmlvcml0eVxuICAgIGlmIChUYXNrbGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICBUYXNrbGlzdC5wdXNoKG15dGFzayk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qZWN0KCksIEpTT04uc3RyaW5naWZ5KFRhc2tsaXN0KSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB5ZWFyMCA9IChteXRhc2suZHVlRGF0ZSkuc3Vic3RyKC00LDQpO1xuICAgIGNvbnN0IG1vbnRoMCA9IChteXRhc2suZHVlRGF0ZSkuc3Vic3RyKDAsMik7XG4gICAgY29uc3QgZGF5MCA9IChteXRhc2suZHVlRGF0ZSkuc3Vic3RyKDMsMik7XG4gICAgY29uc3QgY3VycmVudFRhc2tEYXRlID0gbmV3IERhdGUoeWVhcjAsIG1vbnRoMCwgZGF5MCk7XG5cbiAgICBjb25zdCBjdXJyZW50VGFza0xlbmd0aCA9IFRhc2tsaXN0Lmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tMZW5ndGg7IGkrKykge1xuICAgICAgICAvL2lmIGhpZ2hlciBwcmlvcml0eSwgYWRkIHRhc2tcbiAgICAgICAgaWYgKG15dGFzay5wcmlvcml0eSA+IFRhc2tsaXN0W2ldLnByaW9yaXR5ICkge1xuICAgICAgICAgICAgVGFza2xpc3Quc3BsaWNlKFtpXSwgMCwgbXl0YXNrKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jaGVjayBpZiBjdXJyZW50IEluZGV4IER1ZSBEYXRlIGlzIGxhdGVyIHRoYW4gbmV3IHRhc2sgRHVlIERhdGVcbiAgICAgICAgY29uc3QgeWVhckkgPSAoVGFza2xpc3RbaV0uZHVlRGF0ZSkuc3Vic3RyKC00LDQpO1xuICAgICAgICBjb25zdCBtb250aEkgPSAoVGFza2xpc3RbaV0uZHVlRGF0ZSkuc3Vic3RyKDAsMik7XG4gICAgICAgIGNvbnN0IGRheUkgPSAoVGFza2xpc3RbaV0uZHVlRGF0ZSkuc3Vic3RyKDMsMik7XG4gICAgICAgIGNvbnN0IEluZGV4VGFza0RhdGUgPSBuZXcgRGF0ZSh5ZWFySSwgbW9udGhJLCBkYXlJKTtcblxuICAgICAgICBjb25zdCBjb21wYXJlZCA9IGNvbXBhcmVBc2MoY3VycmVudFRhc2tEYXRlLCBJbmRleFRhc2tEYXRlKTtcblxuICAgICAgICAvL2lmIHNhbWUgcHJpb3JpdHksIGJ1dCBzb29uZXIgZHVlIGRhdGUsIGFkZCB0YXNrXG4gICAgICAgIGlmIChteXRhc2sucHJpb3JpdHkgPT0gVGFza2xpc3RbaV0ucHJpb3JpdHkgJiYgY29tcGFyZWQgPT0gLTEgJiYgbXl0YXNrLmR1ZURhdGUgIT0gJycpIHtcbiAgICAgICAgICAgIFRhc2tsaXN0LnNwbGljZShbaV0sIDAsIG15dGFzayk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRWxzZSwgYWRkIG5ldyB0YXNrIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QgKGxvd2VzdCBwcmlvcml0eSlcbiAgICAgICAgaWYgKGkgPT0gY3VycmVudFRhc2tMZW5ndGggLTEpIHtcbiAgICAgICAgICAgIFRhc2tsaXN0LnB1c2gobXl0YXNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy9BZGQgdGFzayB0byBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50UHJvamVjdCgpLCBKU09OLnN0cmluZ2lmeShUYXNrbGlzdCkpO1xuICAgIGNvbnNvbGUubG9nKFwibXlUYXNrTGlzdFwiLCBUYXNrbGlzdCk7XG59XG5cbi8vLy9VSSBMb2dpY1xuXG4vL0FkZCBUbyBEbyBCdXR0b25cbmNvbnN0IGFkZFRvRG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRvRG9cIik7XG5jb25zdCBmb3JtUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Gb3JtXCIpO1xuYWRkVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZm9ybVBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KTtcblxuLy9BZGQgc2hvdyBQcm9qZWN0cyBCdXR0b25cbmNvbnN0IHNob3dQcm9qZWN0c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvd1Byb2plY3RzXCIpO1xuY29uc3QgcHJvamVjdHNQb3B1cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzUG9wdXBcIik7XG5cbnNob3dQcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0c1BvcHVwRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSk7XG5cbi8vUG9wdXBzIEJ1dHRvbnNcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvQ2xvc2VcIik7XG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmb3JtUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG5cbmNvbnN0IGNsb3NlQnRuMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNDbG9zZVwiKTtcbmNsb3NlQnRuMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0c1BvcHVwRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxuLy9zdWJtaXQgZm9ybVxuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Gb3JtXCIpO1xuXG50b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1RpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGZvcm1Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1ByaW9yaXR5XCIpLnZhbHVlO1xuICAgIGNvbnN0IGZvcm1EdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRHVlRGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCBmb3JtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXNjcmlwdGlvblwiKS52YWx1ZTtcblxuICAgIC8vZ2V0IGRhdGUgaW4gcHJlZmVycmVkIGZvcm1hdFxuICAgIGNvbnN0IHllYXIgPSBmb3JtRHVlRGF0ZS5zdWJzdHIoMCw0KTtcbiAgICBjb25zdCBtb250aCA9IGZvcm1EdWVEYXRlLnN1YnN0cig1LDIpO1xuICAgIGNvbnN0IGRheSA9IGZvcm1EdWVEYXRlLnN1YnN0cigtMiwyKTtcblxuICAgIGNvbnN0IG5ld0Zvcm1EdWV0RGF0ZSA9IG1vbnRoICsgXCIgXCIgKyBkYXkgKyBcIiBcIiArIHllYXI7XG5cbiAgICAvL2Fzc2lnblRhc2sgZnJvbSBoZXJlXG4gICAgYXNzaWduVGFzayhmb3JtVGl0bGUsIGZvcm1EZXNjcmlwdGlvbiwgbmV3Rm9ybUR1ZXREYXRlLCBmb3JtUHJpb3JpdHkpO1xuXG4gICAgLy9hZGQgdGFzayB0byBVSVxuICAgIGFkZFRhc2tVSShmb3JtVGl0bGUsIGZvcm1EZXNjcmlwdGlvbiwgbmV3Rm9ybUR1ZXREYXRlLCBmb3JtUHJpb3JpdHkpO1xuXG4gICAgLy9jbG9zZSBmb3JtIGlmIG5lY2Nlc2FyeT9cbiAgICBjbG9zZUJ0bi5jbGljaygpO1xuXG59KTtcblxuXG4vL2FkZCBUbyBEb3MgdG8gVUlcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIGFkZFRhc2tVSSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgLy9jbGVhciBwcmV2aW91cyB0YWJsZVxuICAgIHZhciBjaGlsZCA9IGNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZDsgIFxuICAgIHdoaWxlIChjaGlsZCkgeyBcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjaGlsZCk7IFxuICAgICAgICBjaGlsZCA9IGNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZDsgXG4gICAgfVxuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IGN1cnJlbnRQcm9qZWN0KCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGhlYWRlci5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcblxuICAgIGNvbnN0IFRhc2tsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdCgpKSk7XG5cbiAgICAvL0hlYWRlclxuICAgIHRhYmxlLmluc2VydFJvdygpO1xuICAgIGxldCBjZWxsMDEgPSB0YWJsZS5yb3dzWzBdLmluc2VydENlbGwoKTtcbiAgICBjZWxsMDEudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG4gICAgbGV0IGNlbGwwMiA9IHRhYmxlLnJvd3NbMF0uaW5zZXJ0Q2VsbCgpO1xuICAgIGNlbGwwMi50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgICBsZXQgY2VsbDAzID0gdGFibGUucm93c1swXS5pbnNlcnRDZWxsKCk7XG4gICAgY2VsbDAzLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuICAgIGxldCBjZWxsMDQgPSB0YWJsZS5yb3dzWzBdLmluc2VydENlbGwoKTtcbiAgICBjZWxsMDQudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgbGV0IGNlbGwwNiA9IHRhYmxlLnJvd3NbMF0uaW5zZXJ0Q2VsbCgpO1xuICAgIGNlbGwwNi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgIGxldCBjZWxsMDcgPSB0YWJsZS5yb3dzWzBdLmluc2VydENlbGwoKTtcbiAgICBjZWxsMDcudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuXG5cblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IFRhc2tsaXN0Lmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgICAgIC8vRGlzcGxheSBEYXRhXG4gICAgICAgIGxldCBuZXdDZWxsID0gdGFibGUucm93c1t0YWJsZS5yb3dzLmxlbmd0aCAtIDFdLmluc2VydENlbGwoKTtcbiAgICAgICAgbmV3Q2VsbC50ZXh0Q29udGVudCA9IFRhc2tsaXN0W3Jvd10udGl0bGU7XG4gICAgICAgIGxldCBuZXdDZWxsMiA9IHRhYmxlLnJvd3NbdGFibGUucm93cy5sZW5ndGggLSAxXS5pbnNlcnRDZWxsKCk7XG4gICAgICAgIG5ld0NlbGwyLnRleHRDb250ZW50ID0gVGFza2xpc3Rbcm93XS5wcmlvcml0eTtcbiAgICAgICAgbGV0IG5ld0NlbGwzID0gdGFibGUucm93c1t0YWJsZS5yb3dzLmxlbmd0aCAtIDFdLmluc2VydENlbGwoKTtcbiAgICAgICAgbmV3Q2VsbDMudGV4dENvbnRlbnQgPSBUYXNrbGlzdFtyb3ddLmR1ZURhdGU7XG4gICAgICAgIGxldCBuZXdDZWxsNCA9IHRhYmxlLnJvd3NbdGFibGUucm93cy5sZW5ndGggLSAxXS5pbnNlcnRDZWxsKCk7XG4gICAgICAgIG5ld0NlbGw0LnRleHRDb250ZW50ID0gVGFza2xpc3Rbcm93XS5kZXNjcmlwdGlvbjtcblxuICAgICAgICAvL0Rpc3BsYXkgQnV0dG9uc1xuICAgICAgICBsZXQgbmV3Q2VsbDUgPSB0YWJsZS5yb3dzW3RhYmxlLnJvd3MubGVuZ3RoIC0gMV0uaW5zZXJ0Q2VsbCgpO1xuICAgICAgICBsZXQgYnV0dG9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24xLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0Um93RnVuY3Rpb24pO1xuICAgICAgICBuZXdDZWxsNS5hcHBlbmQoYnV0dG9uMSk7XG4gICAgICAgIGxldCBuZXdDZWxsNiA9IHRhYmxlLnJvd3NbdGFibGUucm93cy5sZW5ndGggLSAxXS5pbnNlcnRDZWxsKCk7XG4gICAgICAgIGxldCBidXR0b24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVJvd0Z1bmN0aW9uKTtcbiAgICAgICAgbmV3Q2VsbDYuYXBwZW5kKGJ1dHRvbjIpO1xuICAgIH1cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYmxlKTtcblxuICAgIC8vc2hvdyBidXR0b24gKGVkaXRSb3dGdW5jdGlvbiBoaWRlcyBpdClcbiAgICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICAvL2NsZWFyIGlucHV0IGZpZWxkcyBmcm9tIGJlZm9yZVxuICAgIGNvbnN0IHByb2plY3RUaXRsZUhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUaXRsZVwiKTtcbiAgICBjb25zdCBwcm9qZWN0UHJpb3JpdHlIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrUHJpb3JpdHlcIik7XG4gICAgY29uc3QgcHJvamVjdER1ZURhdGVIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRHVlRGF0ZVwiKTtcbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb25IVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGVzY3JpcHRpb25cIik7XG5cbiAgICBwcm9qZWN0VGl0bGVIVE1MLnZhbHVlID0gXCJcIjtcbiAgICBwcm9qZWN0UHJpb3JpdHlIVE1MLnZhbHVlID0gXCJcIjtcbiAgICBwcm9qZWN0RHVlRGF0ZUhUTUwudmFsdWUgPSBcIlwiO1xuICAgIHByb2plY3REZXNjcmlwdGlvbkhUTUwudmFsdWUgPSBcIlwiO1xufVxuXG4vL2VkaXQgdGFzayBidXR0b25cbmZ1bmN0aW9uIGVkaXRSb3dGdW5jdGlvbigpIHtcbiAgICBjb25zdCB0aGlzUm93ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgdGhpc1Jvd0luZGV4ID0gdGhpc1Jvdy5yb3dJbmRleCAtIDE7XG4gICAgbGV0IFRhc2tsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdCgpKSk7XG5cbiAgICAvL0Zvcm0gXG4gICAgY29uc3Qgb2xkRm9ybVRpdGxlID0gVGFza2xpc3RbdGhpc1Jvd0luZGV4XS50aXRsZTtcbiAgICBjb25zdCBvbGRGb3JtUHJpb3JpdHkgPSBUYXNrbGlzdFt0aGlzUm93SW5kZXhdLnByaW9yaXR5O1xuICAgIGNvbnN0IG9sZEZvcm1EdWVEYXRlID0gVGFza2xpc3RbdGhpc1Jvd0luZGV4XS5kdWVEYXRlO1xuICAgIGNvbnN0IG9sZEZvcm1EZXNjcmlwdGlvbiA9IFRhc2tsaXN0W3RoaXNSb3dJbmRleF0uZGVzY3JpcHRpb247XG5cbiAgICBjb25zb2xlLmxvZyhvbGRGb3JtVGl0bGUpO1xuXG4gICAgLy9vcGVuIGZvcm1cbiAgICBmb3JtUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIC8vZ2V0IHZhbHVlIGZyb20gaW5wdXQgZmllbGRcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrVGl0bGVcIik7XG4gICAgY29uc3QgcHJvamVjdFByaW9yaXR5SFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1ByaW9yaXR5XCIpO1xuICAgIGNvbnN0IHByb2plY3REdWVEYXRlSFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0R1ZURhdGVcIik7XG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uSFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Rlc2NyaXB0aW9uXCIpO1xuXG5cbiAgICAvL2NoYW5nZSBpbnB1dCBmaWVsZFxuICAgIHByb2plY3RUaXRsZUhUTUwudmFsdWUgPSBgJHtvbGRGb3JtVGl0bGV9YDtcbiAgICBwcm9qZWN0UHJpb3JpdHlIVE1MLnZhbHVlID0gYCR7b2xkRm9ybVByaW9yaXR5fWA7XG4gICAgcHJvamVjdER1ZURhdGVIVE1MLnZhbHVlID0gYCR7b2xkRm9ybUR1ZURhdGV9YDtcbiAgICBwcm9qZWN0RGVzY3JpcHRpb25IVE1MLnZhbHVlID0gYCR7b2xkRm9ybURlc2NyaXB0aW9ufWA7XG5cbiAgICAvL05lZWQgdG8gZmluZCBhIHdheSB0byBkZWxldGUgb2xkIHRhc2sgb25seSBpZiBmb3JtIGlzIHN1Ym1pdHRlZFxuICAgIC8vZm9yIG5vdywgaGlkaW5nIHRoZSBjYW5jZWwgYnV0dG9uIGR1cmluZyBlZGl0aW5nXG4gICAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIFxuICAgIFRhc2tsaXN0LnNwbGljZSh0aGlzUm93SW5kZXgsIDEpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gY3VycmVudFByb2plY3QoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkoVGFza2xpc3QpKTtcblxuXG59XG5cbi8vZGVsZXRlIHRhc2sgYnV0dG9uXG5mdW5jdGlvbiBkZWxldGVSb3dGdW5jdGlvbigpIHtcbiAgICBjb25zdCB0aGlzUm93ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgdGhpc1Jvd0luZGV4ID0gdGhpc1Jvdy5yb3dJbmRleCAtIDE7XG4gICAgbGV0IFRhc2tsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdCgpKSk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGN1cnJlbnRQcm9qZWN0KCk7XG5cbiAgICBUYXNrbGlzdC5zcGxpY2UodGhpc1Jvd0luZGV4LCAxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkoVGFza2xpc3QpKTtcbiAgICBhZGRUYXNrVUkoKTtcblxufVxuXG4vLyBBZGQgUHJvamVjdCBVSVxuLy9DcmVhdGUgTmV3IFByb2plY3QgU3VibWl0IEJ1dHRvblxuY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RDb250ZW50XCIpO1xuXG5jb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRQcm9qZWN0XCIpO1xuXG5zdWJtaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvL2dldCB2YWx1ZSBmcm9tIGlucHV0IGZpZWxkXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0Rm9ybVwiKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0Rm9ybVwiKTtcblxuICAgIFxuXG4gICAgLy9jcmVhdGUgcHJvamVjdCBmcm9tIHZhbHVlICYgdXBkYXRlIFVJXG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0VGl0bGUpO1xuICAgIGFkZFByb2plY3RVSShwcm9qZWN0VGl0bGUpO1xuXG4gICAgLy9jbGVhciBpbnB1dCBmaWVsZFxuICAgIHByb2plY3RUaXRsZUhUTUwudmFsdWUgPSBcIlwiO1xuXG59KTtcblxuLy9BZGQgUHJvamVjdCB0byBVSVxuZnVuY3Rpb24gYWRkUHJvamVjdFVJKG5hbWUpIHtcbiAgICAvL2NsZWFyIHByZXZpb3VzIHRhYmxlXG4gICAgdmFyIGNoaWxkID0gcHJvamVjdENvbnRlbnQubGFzdEVsZW1lbnRDaGlsZDsgIFxuICAgIHdoaWxlIChjaGlsZCkgeyBcbiAgICBwcm9qZWN0Q29udGVudC5yZW1vdmVDaGlsZChjaGlsZCk7IFxuICAgIGNoaWxkID0gcHJvamVjdENvbnRlbnQubGFzdEVsZW1lbnRDaGlsZDsgXG59XG4gICAgLy9jcmVhdGUgdGFibGVcbiAgICBsZXQgcHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcblxuICAgIHB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICBsZXQgcGNlbGwxID0gcHRhYmxlLnJvd3NbMF0uaW5zZXJ0Q2VsbCgpO1xuICAgIHBjZWxsMS50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcbiAgICBsZXQgcGNlbGwyID0gcHRhYmxlLnJvd3NbMF0uaW5zZXJ0Q2VsbCgpO1xuICAgIHBjZWxsMi50ZXh0Q29udGVudCA9IFwiU2VsZWN0XCI7XG4gICAgbGV0IHBjZWxsMyA9IHB0YWJsZS5yb3dzWzBdLmluc2VydENlbGwoKTtcbiAgICBwY2VsbDMudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBsZXQgcGNlbGw0ID0gcHRhYmxlLnJvd3NbMF0uaW5zZXJ0Q2VsbCgpO1xuICAgIHBjZWxsNC50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgICBjb25zdCBhbGxLZXlzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBhbGxLZXlzW2ldO1xuICAgICAgICBpZiAoa2V5ICE9IFwiQ3VycmVudCBQcm9qZWN0XCIpIHtcbiAgICAgICAgICAgIHB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgICAgICAgIGxldCBwY2VsbDAxID0gcHRhYmxlLnJvd3NbcHRhYmxlLnJvd3MubGVuZ3RoIC0gMV0uaW5zZXJ0Q2VsbCgpO1xuICAgICAgICAgICAgcGNlbGwwMS50ZXh0Q29udGVudCA9IGtleTtcblxuICAgICAgICAgICAgLy9EaXNwbGF5IEJ1dHRvbnNcbiAgICAgICAgICAgIC8vc2VsZWN0XG4gICAgICAgICAgICBsZXQgcGNlbGwwMiA9IHB0YWJsZS5yb3dzW3B0YWJsZS5yb3dzLmxlbmd0aCAtIDFdLmluc2VydENlbGwoKTtcbiAgICAgICAgICAgIGxldCBwYnV0dG9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcGNlbGwwMi5hcHBlbmQocGJ1dHRvbjEpO1xuICAgICAgICAgICAgcGJ1dHRvbjEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdFByb2plY3RGdW5jdGlvbik7XG4gICAgICAgICAgICAvL2VkaXRcbiAgICAgICAgICAgIGxldCBwY2VsbDAzID0gcHRhYmxlLnJvd3NbcHRhYmxlLnJvd3MubGVuZ3RoIC0gMV0uaW5zZXJ0Q2VsbCgpO1xuICAgICAgICAgICAgbGV0IHBidXR0b24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBwY2VsbDAzLmFwcGVuZChwYnV0dG9uMik7XG4gICAgICAgICAgICBwYnV0dG9uMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFByb2plY3RGdW5jdGlvbik7XG4gICAgICAgICAgICAvL2RlbGV0ZVxuICAgICAgICAgICAgbGV0IHBjZWxsMDQgPSBwdGFibGUucm93c1twdGFibGUucm93cy5sZW5ndGggLSAxXS5pbnNlcnRDZWxsKCk7XG4gICAgICAgICAgICBsZXQgcGJ1dHRvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHBidXR0b24zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0RnVuY3Rpb24pO1xuICAgICAgICAgICAgcGNlbGwwNC5hcHBlbmQocGJ1dHRvbjMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHB0YWJsZSk7XG59XG5cbi8vZGVsZXRlIHByb2plY3QgYnV0dG9uXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0RnVuY3Rpb24oKSB7XG4gICAgLy9maW5kIFRpdGxlIG9mIGN1cnJlbnQgcm93XG4gICAgY29uc3QgdGhpc1JvdyA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IHRoaXNSb3dUaXRsZSA9ICh0aGlzUm93LmNlbGxzWzBdLmlubmVyVGV4dCk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpc1Jvd1RpdGxlKTtcblxuICAgIC8vcmVsb2FkIFRvIERvIExpc3RcbiAgICBhZGRQcm9qZWN0VUkoKTtcbn1cblxuLy9zZWxlY3QgcHJvamVjdCBidXR0b25cbmZ1bmN0aW9uIHNlbGVjdFByb2plY3RGdW5jdGlvbigpIHtcbiAgICAvL2ZpbmQgVGl0bGUgb2YgY3VycmVudCByb3dcbiAgICBjb25zdCB0aGlzUm93ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgdGhpc1Jvd1RpdGxlID0gKHRoaXNSb3cuY2VsbHNbMF0uaW5uZXJUZXh0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkN1cnJlbnQgUHJvamVjdFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzUm93VGl0bGUpKTtcblxuICAgIC8vcmVsb2FkIFRvIERvIExpc3RcbiAgICBhZGRUYXNrVUkoKTtcbn1cblxuLy9lZGl0IHByb2plY3QgYnV0dG9uXG5mdW5jdGlvbiBlZGl0UHJvamVjdEZ1bmN0aW9uKCkge1xuICAgIC8vZmluZCBUaXRsZSBvZiBjdXJyZW50IHJvd1xuICAgIGNvbnN0IHRoaXNSb3cgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCB0aGlzUm93VGl0bGUgPSAodGhpc1Jvdy5jZWxsc1swXS5pbm5lclRleHQpO1xuXG4gICAgY29uc3QgVGFza2xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXNSb3dUaXRsZSkpO1xuICAgIHNob3dfcHJvbXB0KCk7XG5cbiAgICBmdW5jdGlvbiBzaG93X3Byb21wdCgpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBwcm9tcHQoJ1BsZWFzZSBlbnRlciB1cGRhdGVkIHByb2plY3QgbmFtZScsJycpO1xuICAgICAgICBpZiAobmFtZSAhPSBudWxsICYmIG5hbWUgIT0gXCJcIikge1xuICAgICAgICAgICAgLy9yZS1jcmVhdGUgcHJvamVjdCB3aXRoIG5ldyBuYW1lXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzUm93VGl0bGUpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoVGFza2xpc3QpKTtcblxuICAgICAgICAgICAgLy91cGRhdGUgVGFza1VJIGhlYWRlciBpZiBpdCdzIHRoZSBjdXJyZW50IHByb2plY3QgXG4gICAgICAgICAgICBpZiAoY3VycmVudFByb2plY3QoKSA9PSB0aGlzUm93VGl0bGUpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQ3VycmVudCBQcm9qZWN0XCIsIEpTT04uc3RyaW5naWZ5KG5hbWUpKTtcbiAgICAgICAgICAgIGFkZFRhc2tVSSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSAgICBcbiAgICBhZGRQcm9qZWN0VUkoKTtcbn1cbmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuLy9TZXQgQ3VycmVudCBQcm9qZWN0IG9uIEhvbWUgUGFnZSB0byBQZXJzb25hbCBpZiBsb2NhbCBTdG9yYWdlIGlzIGVtcHR5XG5jdXJyZW50UHJvamVjdCgpO1xuYWRkVGFza1VJKCk7XG5hZGRQcm9qZWN0VUkoKTtcblxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL21haW4uanMnO1xuXG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSAnLi9tYWluLmpzJztcblxuLy8gY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZHMhXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9