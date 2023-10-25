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
    /* display: none; */
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,wBAAwB;AACxB;;;IAGI,kBAAkB;IAClB;QACI,aAAa;QACb,sBAAsB;;QAEtB,6BAA6B;QAC7B,mBAAmB;QACnB,sBAAsB;QACtB,aAAa;IACjB;;IAEA,iBAAiB;;;MAGf;QACE,WAAW;QACX,YAAY;QACZ,gBAAgB;MAClB;;MAEA;QACE,gBAAgB;MAClB;;AAEN;;AAEA;;IAEI;QACI,cAAc;IAClB;;AAEJ;;;;;AAKA,gBAAgB;AAChB,kBAAkB;AAClB;IACI,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,6BAA6B;;IAE7B,2BAA2B;IAC3B,iBAAiB;IACjB,oBAAoB;;AAExB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;;IAEnB,aAAa;IACb,gBAAgB;;AAEpB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;IACvB,sBAAsB;IACtB,0BAA0B;AAC9B;;AAEA,gBAAgB;AAChB;IACI,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;AACpB;;AAEA,2BAA2B;AAC3B;IACI,aAAa;IACb,eAAe;IACf,QAAQ;IACR,UAAU;IACV,eAAe,EAAE,8CAA8C;IAC/D,OAAO;IACP,QAAQ;;IAER,sCAAsC;IACtC,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;;;AAGpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,4CAA4C;IAC5C,eAAe;;IAEf,iBAAiB;IACjB,kBAAkB;;IAElB,gCAAgC;IAChC,YAAY;IACZ,mBAAmB;IACnB,YAAY;AAChB;;AAEA,gCAAgC;AAChC;IACI,mBAAmB;IACnB,wBAAwB;IACxB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,aAAa;IACb,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,OAAO;IACP,gBAAgB;IAChB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA,oBAAoB;AACpB;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;;AAGA,kBAAkB;AAClB;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;;AAEjB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB","sourcesContent":["/* mobile friendly CSS */\n@media (max-width:960px) {\n\n\n    /*footer styling */\n    #footContain {\n        display: flex;\n        flex-direction: column;\n\n        justify-content: space-around;\n        align-items: center;\n        background-color: cyan;\n        padding: 10px;\n    }\n\n    /* form styling */\n    \n\n      .form-row #taskDescription {           \n        width: 100%;\n        height: 100%; \n        max-width: 169px;\n      }\n\n      .formPopup {\n        min-width: 200px;\n      }\n\n}\n\n@media (max-width:500px) {\n    \n    .tab {\n        min-width: 30%;\n    }\n\n}\n\n\n\n\n/* General CSS */\n/*header styling */\n#container {\n    background-color: lightcoral;\n}\n\n#headContain {\n    display: flex;\n    justify-content: space-around;\n\n    background-color: turquoise;\n    padding-top: 10px;\n    padding-bottom: 10px;\n\n}\n\n.tab {\n    display: flex;\n    padding: 20px;\n    border: solid blue 3px;\n    background-color: lightgray;    \n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    font-size: large;\n    border-radius: 30px;\n\n    flex: 0 1 20%;\n    min-width: 100px;\n\n}\n\n.tab:hover, .closeBtn:hover, #submitTodo {\n    background-color: antiquewhite;\n}\n\n.tab:active, .closeBtn:active, #submitTodo{\n    background-color: white;\n    box-shadow: 0 2px #666;\n    transform: translateY(4px);\n}\n\n/*body styling */\nbody {\n    background-color: lightgray;\n}\n\n#content {\n    min-height: 50vh;\n}\n\n/* Add To Do form styling */\n.formPopup {\n    display: none;\n    position: fixed;\n    top: 10%;\n    width: 50%;\n    margin: 5% auto; /* Only centers horizontally not vertically! */\n    left: 0;\n    right: 0;\n\n    background-color: lightgoldenrodyellow;\n    border: solid 3px;\n}\n\n.todoContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    max-width: 300px;\n}\n\n.formContainer {\n    display: flex;\n    justify-content: center;\n}\n\n.form-row {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 15px;\n    font-weight: 250;\n\n\n}\n\n#form-row-1 label {\n    font-weight: bold;\n}\n\n#taskPriority {\n    min-width: 120.3px;\n}\n\n.todoContainer > .form-row > p {\n    font-weight: bold;\n}\n\n.closeBtn {\n    display: flex;\n    background-color: lightgray;\n    border: solid black 1px;\n    width: 2rem;\n    height: 2rem;\n    align-items: center;\n    justify-content: center;\n    font-size: 2rem;\n    font-weight: bolder; \n}\n\n#todoClose {\n    align-self: flex-end; \n    margin-top: 20px;  \n    margin-right: 20px;\n}\n\n#submitTodo {\n    background-color: lightgrey;\n    padding: 10px;\n    margin-bottom: 20px;\n}\n\n.form-row textarea {\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 16px;\n  \n    border: 1px solid;\n    border-radius: 3px;\n  \n    width: clamp(100%, 300px, 400px);\n    height: 100%;\n    margin-bottom: 10px;\n    padding: 7px;\n}\n\n/* Show Projects Popup Styling */\n.projectsPopup {\n    /* display: none; */\n    background-color: yellow;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    height: 100vh;\n    width: 50vh;\n}\n\n.formContainer2 {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.projectContainer {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n#addProject {\n    flex: 0;\n    margin-top: 20px;\n    width: 150px;\n    height: 100px;\n}\n\n#projectsClose {\n    margin-right: 20px;\n    align-self: flex-end; \n    margin-top: 20px;  \n    margin-right: 20px;\n}\n\n/* Content Styling */\ntable {\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    background-color: black;\n    text-align: center;\n}\n\ntable td {\n    background-color: white;\n    border: solid black 1px;\n    margin-top: 10px;\n}\n\ntable button {\n    padding: 20px;\n    border-radius: 10px;\n}\n\n\n/*footer styling */\n#footContain {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: cyan;\n    padding: 10px;\n\n}\n\n#footContain p {\n    text-align: center;\n    line-height: 20px;\n}\n"],"sourceRoot":""}]);
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



//clear localStorage as if I'm a new user
localStorage.clear();

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
        // button1.addEventListener("click", editRowFunction);
        newCell5.append(button1);
        let newCell6 = table.rows[table.rows.length - 1].insertCell();
        let button2 = document.createElement('button');
        button2.addEventListener("click", deleteRowFunction);
        newCell6.append(button2);
    }
    content.appendChild(table);
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
            //edit
            let pcell03 = ptable.rows[ptable.rows.length - 1].insertCell();
            let pbutton2 = document.createElement('button');
            pcell03.append(pbutton2);
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
    const thisRow = this.parentNode.parentNode;
    const thisRowTitle = (thisRow.cells[0].innerText);
    localStorage.removeItem(thisRowTitle);

    // Tasklist.splice(thisRowIndex, 1);
    // localStorage.setItem(projectName, JSON.stringify(Tasklist));
    addProjectUI();

}



//Dummy Tasks for testing

//Set Current Project on Home Page to Personal for testing


currentProject();


createProject("Work");

addProjectUI("Work");


assignTask('grocery shopping', 'a description', "11 30 2023", 2);

assignTask('something', '', "", 2);


// assignTask('Code this assignment', 'This TOP assignment', "11 01 2023", 2);

// assignTask('gym every day', '', '', 7);

// window.task4 = assignTask('sleep 8 hours', 'zzz', '', 2);

addTaskUI();
console.log("final", localStorage);
// console.log("final Personal parse",JSON.parse(localStorage.getItem("Personal")));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOztBQUVBOzs7QUFHQTs7O0FBR0E7O0FBRUE7OztBQUdBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JYZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0Y7O0FBRW9COztBQUV2QyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvY2hlY2tTdG9yYWdlLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BhY2thZ2UuanNvbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BhY2thZ2UuanNvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BhY2thZ2UuanNvbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBtb2JpbGUgZnJpZW5kbHkgQ1NTICovXG5AbWVkaWEgKG1heC13aWR0aDo5NjBweCkge1xuXG5cbiAgICAvKmZvb3RlciBzdHlsaW5nICovXG4gICAgI2Zvb3RDb250YWluIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAvKiBmb3JtIHN0eWxpbmcgKi9cbiAgICBcblxuICAgICAgLmZvcm0tcm93ICN0YXNrRGVzY3JpcHRpb24geyAgICAgICAgICAgXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICBtYXgtd2lkdGg6IDE2OXB4O1xuICAgICAgfVxuXG4gICAgICAuZm9ybVBvcHVwIHtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo1MDBweCkge1xuICAgIFxuICAgIC50YWIge1xuICAgICAgICBtaW4td2lkdGg6IDMwJTtcbiAgICB9XG5cbn1cblxuXG5cblxuLyogR2VuZXJhbCBDU1MgKi9cbi8qaGVhZGVyIHN0eWxpbmcgKi9cbiNjb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG59XG5cbiNoZWFkQ29udGFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHR1cnF1b2lzZTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxufVxuXG4udGFiIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCBibHVlIDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7ICAgIFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuXG4gICAgZmxleDogMCAxIDIwJTtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuXG59XG5cbi50YWI6aG92ZXIsIC5jbG9zZUJ0bjpob3ZlciwgI3N1Ym1pdFRvZG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLnRhYjphY3RpdmUsIC5jbG9zZUJ0bjphY3RpdmUsICNzdWJtaXRUb2Rve1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4ICM2NjY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG59XG5cbi8qYm9keSBzdHlsaW5nICovXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbiNjb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xufVxuXG4vKiBBZGQgVG8gRG8gZm9ybSBzdHlsaW5nICovXG4uZm9ybVBvcHVwIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDEwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogNSUgYXV0bzsgLyogT25seSBjZW50ZXJzIGhvcml6b250YWxseSBub3QgdmVydGljYWxseSEgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XG4gICAgYm9yZGVyOiBzb2xpZCAzcHg7XG59XG5cbi50b2RvQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIG1heC13aWR0aDogMzAwcHg7XG59XG5cbi5mb3JtQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9ybS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDI1MDtcblxuXG59XG5cbiNmb3JtLXJvdy0xIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3Rhc2tQcmlvcml0eSB7XG4gICAgbWluLXdpZHRoOiAxMjAuM3B4O1xufVxuXG4udG9kb0NvbnRhaW5lciA+IC5mb3JtLXJvdyA+IHAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2xvc2VCdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyOyBcbn1cblxuI3RvZG9DbG9zZSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7IFxuICAgIG1hcmdpbi10b3A6IDIwcHg7ICBcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbiNzdWJtaXRUb2RvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9ybS1yb3cgdGV4dGFyZWEge1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBcbiAgICB3aWR0aDogY2xhbXAoMTAwJSwgMzAwcHgsIDQwMHB4KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiA3cHg7XG59XG5cbi8qIFNob3cgUHJvamVjdHMgUG9wdXAgU3R5bGluZyAqL1xuLnByb2plY3RzUG9wdXAge1xuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogNTB2aDtcbn1cblxuLmZvcm1Db250YWluZXIyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9qZWN0Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2FkZFByb2plY3Qge1xuICAgIGZsZXg6IDA7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuI3Byb2plY3RzQ2xvc2Uge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgXG4gICAgbWFyZ2luLXRvcDogMjBweDsgIFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLyogQ29udGVudCBTdHlsaW5nICovXG50YWJsZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRhYmxlIHRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG50YWJsZSBidXR0b24ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuXG4vKmZvb3RlciBzdHlsaW5nICovXG4jZm9vdENvbnRhaW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbn1cblxuI2Zvb3RDb250YWluIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx3QkFBd0I7QUFDeEI7OztJQUdJLGtCQUFrQjtJQUNsQjtRQUNJLGFBQWE7UUFDYixzQkFBc0I7O1FBRXRCLDZCQUE2QjtRQUM3QixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLGFBQWE7SUFDakI7O0lBRUEsaUJBQWlCOzs7TUFHZjtRQUNFLFdBQVc7UUFDWCxZQUFZO1FBQ1osZ0JBQWdCO01BQ2xCOztNQUVBO1FBQ0UsZ0JBQWdCO01BQ2xCOztBQUVOOztBQUVBOztJQUVJO1FBQ0ksY0FBYztJQUNsQjs7QUFFSjs7Ozs7QUFLQSxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2Qjs7SUFFN0IsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QiwwQkFBMEI7QUFDOUI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlLEVBQUUsOENBQThDO0lBQy9ELE9BQU87SUFDUCxRQUFROztJQUVSLHNDQUFzQztJQUN0QyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7SUFFbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7OztBQUdwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxlQUFlOztJQUVmLGlCQUFpQjtJQUNqQixrQkFBa0I7O0lBRWxCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7OztBQUdBLGtCQUFrQjtBQUNsQjtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogbW9iaWxlIGZyaWVuZGx5IENTUyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOjk2MHB4KSB7XFxuXFxuXFxuICAgIC8qZm9vdGVyIHN0eWxpbmcgKi9cXG4gICAgI2Zvb3RDb250YWluIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLyogZm9ybSBzdHlsaW5nICovXFxuICAgIFxcblxcbiAgICAgIC5mb3JtLXJvdyAjdGFza0Rlc2NyaXB0aW9uIHsgICAgICAgICAgIFxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICAgICAgbWF4LXdpZHRoOiAxNjlweDtcXG4gICAgICB9XFxuXFxuICAgICAgLmZvcm1Qb3B1cCB7XFxuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6NTAwcHgpIHtcXG4gICAgXFxuICAgIC50YWIge1xcbiAgICAgICAgbWluLXdpZHRoOiAzMCU7XFxuICAgIH1cXG5cXG59XFxuXFxuXFxuXFxuXFxuLyogR2VuZXJhbCBDU1MgKi9cXG4vKmhlYWRlciBzdHlsaW5nICovXFxuI2NvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcblxcbiNoZWFkQ29udGFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG5cXG59XFxuXFxuLnRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogc29saWQgYmx1ZSAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTsgICAgXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG5cXG4gICAgZmxleDogMCAxIDIwJTtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG5cXG59XFxuXFxuLnRhYjpob3ZlciwgLmNsb3NlQnRuOmhvdmVyLCAjc3VibWl0VG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuLnRhYjphY3RpdmUsIC5jbG9zZUJ0bjphY3RpdmUsICNzdWJtaXRUb2Rve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggIzY2NjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxufVxcblxcbi8qYm9keSBzdHlsaW5nICovXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xcbn1cXG5cXG4vKiBBZGQgVG8gRG8gZm9ybSBzdHlsaW5nICovXFxuLmZvcm1Qb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogNSUgYXV0bzsgLyogT25seSBjZW50ZXJzIGhvcml6b250YWxseSBub3QgdmVydGljYWxseSEgKi9cXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xcbiAgICBib3JkZXI6IHNvbGlkIDNweDtcXG59XFxuXFxuLnRvZG9Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogMjUwO1xcblxcblxcbn1cXG5cXG4jZm9ybS1yb3ctMSBsYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jdGFza1ByaW9yaXR5IHtcXG4gICAgbWluLXdpZHRoOiAxMjAuM3B4O1xcbn1cXG5cXG4udG9kb0NvbnRhaW5lciA+IC5mb3JtLXJvdyA+IHAge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlQnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgXFxufVxcblxcbiN0b2RvQ2xvc2Uge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7ICBcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jc3VibWl0VG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZvcm0tcm93IHRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIFxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgXFxuICAgIHdpZHRoOiBjbGFtcCgxMDAlLCAzMDBweCwgNDAwcHgpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuXFxuLyogU2hvdyBQcm9qZWN0cyBQb3B1cCBTdHlsaW5nICovXFxuLnByb2plY3RzUG9wdXAge1xcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDUwdmg7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNhZGRQcm9qZWN0IHtcXG4gICAgZmxleDogMDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jcHJvamVjdHNDbG9zZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7IFxcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAgXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLyogQ29udGVudCBTdHlsaW5nICovXFxudGFibGUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG50YWJsZSB0ZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxudGFibGUgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuXFxuLypmb290ZXIgc3R5bGluZyAqL1xcbiNmb290Q29udGFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbn1cXG5cXG4jZm9vdENvbnRhaW4gcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxO1xuICAgIC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL0NoZWNrIHRvIHNlZSBpZiBsb2NhbFN0b3JhZ2UgaXMgYXZhaWxhYmxlOlxud2luZG93LnN0b3JhZ2VTdGF0dXMgPSAnJztcblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgc3RvcmFnZSAmJlxuICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuXG4vL1Byb3ZpZGUgcmVzdWx0IG9mIGlmIGxvY2FsU3RvcmFnZSBpcyBhdmFpbGFibGU6XG5leHBvcnQgZnVuY3Rpb24gaXNTdG9yYWdlQXZhaWxhYmxlKCkge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICAgIC8vbG9jYWxTdG9yYWdlIGlzIGF2YWlsYWJsZSFcbiAgICAgICAgc3RvcmFnZVN0YXR1cyA9IFwiYXZhaWxhYmxlXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBObyBsb2NhbFN0b3JhZ2UgYXZhaWxhYmxlLlxuICAgICAgICBzdG9yYWdlU3RhdHVzID0gXCJ1bmF2YWlsYWJsZVwiO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGlzU3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gJy4vY2hlY2tTdG9yYWdlJztcblxuLy9jbGVhciBsb2NhbFN0b3JhZ2UgYXMgaWYgSSdtIGEgbmV3IHVzZXJcbmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4vL2NoZWNrIGlmIGxvY2FsU3RvcmFnZSBpcyBhdmFpbGFibGVcbmlzU3RvcmFnZUF2YWlsYWJsZSgpO1xuY29uc29sZS5sb2coXCJsb2NhbFN0b3JhZ2U6XCIsIHN0b3JhZ2VTdGF0dXMsIFwiO2xlbmd0aDpcIiwgbG9jYWxTdG9yYWdlLmxlbmd0aCk7XG5cblxuLy9MaXQgb2YgUHJvamVjdCBHcm91cHNcblxuLy8vL0Z1bmN0aW9ucyBmb3IgdGhlIFRvIERvIExpc3Rcbi8vLy9FYWNoIHByb2plY3QgLyBUbyBEbyBpdGVtIHNob3VsZCBiZSBlZGl0YWJsZSwgZGVsZXRhYmxlLCAmIGNvbXBsZXRhYmxlLlxuXG4vL0NyZWF0ZSBhIHByb2plY3QgZ3JvdXAgdG8gc3RvcmUgdGFza3NcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmFtZTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IFtdO1xuXG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkN1cnJlbnQgUHJvamVjdFwiLCBKU09OLnN0cmluZ2lmeShuYW1lKSk7XG5cblxufVxuXG4vL0N1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0IGdyb3VwXG4vL1Nob3cgUHJvamVjdHMgYnV0dG9uIFVJIHNob3VsZCBhbGxvdyB1c2VyIHRvIHNlbGVjdCBcblxuZnVuY3Rpb24gY3VycmVudFByb2plY3QoKSB7XG4gICAgLy9jaGVjayBpZiBsb2NhbFN0b3JhZ2UgaXMgYXZhaWxhYmxlXG4gICAgaXNTdG9yYWdlQXZhaWxhYmxlKCk7XG5cbiAgICAvL2lmIGxvY2FsU3RvcmFnZSBpcyBlbXB0eSAmIGF2YWlsYWJsZTogY3JlYXRlIGEgcHJvamVjdCBcIlBlcnNvbmFsXCJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA9PSAwICkge1xuICAgICAgICBjb25zdCBQZXJzb25hbCA9IGNyZWF0ZVByb2plY3QoJ1BlcnNvbmFsJyk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJDdXJyZW50IFByb2plY3RcIiwgSlNPTi5zdHJpbmdpZnkoXCJQZXJzb25hbFwiKSk7XG4gICAgICAgIHJldHVybiBcIlBlcnNvbmFsXCI7XG4gICAgfVxuICAgIFxuICAgIC8vaWYgbG9jYWxTdG9yYWdlIGlzIHBvcHVsYXRlZCAmIGF2YWlsYWJsZTogc2VsZWN0IChtb3N0IHJlY2VudC9maXJzdCBvbmU/KVxuICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCAmJiBzdG9yYWdlU3RhdHVzID09IFwiYXZhaWxhYmxlXCIpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQ3VycmVudCBQcm9qZWN0XCIpKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkN1cnJlbnQgUHJvamVjdFwiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdCkpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcbiAgICB9XG5cblxuICAgIC8vaWYgbG9jYWwgc3RvcmFnZSBpcyB1bmF2YWlsYWJsZVxuICAgIGlmIChzdG9yYWdlU3RhdHVzID09IFwidW5hdmFpbGFibGVcIikge1xuICAgICAgICAvL3NvbWUgY29kZS4gTWF5YmUgYW4gYWxlcnQ/IE9yIGlubmVyVGV4dCBhbGVydD9cbiAgICB9XG5cbn1cblxuLy9DcmVhdGUgYSBUbyBEbyBUYXNrXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgaWYgKHByaW9yaXR5ID09ICcnIHx8IHByaW9yaXR5ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAvL3NldCBkZWZhdWx0IHByaW9yaXR5IHRvIDUgaWYgZW1wdHlcbiAgICAgICAgcHJpb3JpdHkgPSA1O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSwgXG4gICAgICAgIHByaW9yaXR5XG4gICAgfVxufVxuXG4vL0FzaWduIHRoZSBUbyBEbyB0YXNrIHRvIHRoZSBjdXJyZW50IHByb2plY3RcbmZ1bmN0aW9uIGFzc2lnblRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIC8vY3JlYXRlIHRhc2sgZnVuY3Rpb25cbiAgICBjb25zdCBteXRhc2sgPSBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuXG4gICAgLy9GaW5kIGN1cnJlbnQgb3BlbiBwcm9qZWN0XG4gICAgY29uc3QgVGFza2xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KCkpKTtcblxuICAgIC8vZmluZCBvdXQgd2hlcmUgdGFzayBiZWxvbmdzIGluIGN1cnJlbnQgcHJvamVjdCBwcmlvcml0eVxuICAgIGlmIChUYXNrbGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICBUYXNrbGlzdC5wdXNoKG15dGFzayk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qZWN0KCksIEpTT04uc3RyaW5naWZ5KFRhc2tsaXN0KSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB5ZWFyMCA9IChteXRhc2suZHVlRGF0ZSkuc3Vic3RyKC00LDQpO1xuICAgIGNvbnN0IG1vbnRoMCA9IChteXRhc2suZHVlRGF0ZSkuc3Vic3RyKDAsMik7XG4gICAgY29uc3QgZGF5MCA9IChteXRhc2suZHVlRGF0ZSkuc3Vic3RyKDMsMik7XG4gICAgY29uc3QgY3VycmVudFRhc2tEYXRlID0gbmV3IERhdGUoeWVhcjAsIG1vbnRoMCwgZGF5MCk7XG5cbiAgICBjb25zdCBjdXJyZW50VGFza0xlbmd0aCA9IFRhc2tsaXN0Lmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tMZW5ndGg7IGkrKykge1xuICAgICAgICAvL2lmIGhpZ2hlciBwcmlvcml0eSwgYWRkIHRhc2tcbiAgICAgICAgaWYgKG15dGFzay5wcmlvcml0eSA+IFRhc2tsaXN0W2ldLnByaW9yaXR5ICkge1xuICAgICAgICAgICAgVGFza2xpc3Quc3BsaWNlKFtpXSwgMCwgbXl0YXNrKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jaGVjayBpZiBjdXJyZW50IEluZGV4IER1ZSBEYXRlIGlzIGxhdGVyIHRoYW4gbmV3IHRhc2sgRHVlIERhdGVcbiAgICAgICAgY29uc3QgeWVhckkgPSAoVGFza2xpc3RbaV0uZHVlRGF0ZSkuc3Vic3RyKC00LDQpO1xuICAgICAgICBjb25zdCBtb250aEkgPSAoVGFza2xpc3RbaV0uZHVlRGF0ZSkuc3Vic3RyKDAsMik7XG4gICAgICAgIGNvbnN0IGRheUkgPSAoVGFza2xpc3RbaV0uZHVlRGF0ZSkuc3Vic3RyKDMsMik7XG4gICAgICAgIGNvbnN0IEluZGV4VGFza0RhdGUgPSBuZXcgRGF0ZSh5ZWFySSwgbW9udGhJLCBkYXlJKTtcblxuICAgICAgICBjb25zdCBjb21wYXJlZCA9IGNvbXBhcmVBc2MoY3VycmVudFRhc2tEYXRlLCBJbmRleFRhc2tEYXRlKTtcblxuICAgICAgICAvL2lmIHNhbWUgcHJpb3JpdHksIGJ1dCBzb29uZXIgZHVlIGRhdGUsIGFkZCB0YXNrXG4gICAgICAgIGlmIChteXRhc2sucHJpb3JpdHkgPT0gVGFza2xpc3RbaV0ucHJpb3JpdHkgJiYgY29tcGFyZWQgPT0gLTEgJiYgbXl0YXNrLmR1ZURhdGUgIT0gJycpIHtcbiAgICAgICAgICAgIFRhc2tsaXN0LnNwbGljZShbaV0sIDAsIG15dGFzayk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRWxzZSwgYWRkIG5ldyB0YXNrIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QgKGxvd2VzdCBwcmlvcml0eSlcbiAgICAgICAgaWYgKGkgPT0gY3VycmVudFRhc2tMZW5ndGggLTEpIHtcbiAgICAgICAgICAgIFRhc2tsaXN0LnB1c2gobXl0YXNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy9BZGQgdGFzayB0byBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50UHJvamVjdCgpLCBKU09OLnN0cmluZ2lmeShUYXNrbGlzdCkpO1xuICAgIGNvbnNvbGUubG9nKFwibXlUYXNrTGlzdFwiLCBUYXNrbGlzdCk7XG59XG5cbi8vLy9VSSBMb2dpY1xuXG4vL0FkZCBUbyBEbyBCdXR0b25cbmNvbnN0IGFkZFRvRG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRvRG9cIik7XG5jb25zdCBmb3JtUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Gb3JtXCIpO1xuYWRkVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZm9ybVBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KTtcblxuLy9BZGQgc2hvdyBQcm9qZWN0cyBCdXR0b25cbmNvbnN0IHNob3dQcm9qZWN0c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvd1Byb2plY3RzXCIpO1xuY29uc3QgcHJvamVjdHNQb3B1cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzUG9wdXBcIik7XG5cbnNob3dQcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0c1BvcHVwRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSk7XG5cbi8vUG9wdXBzIEJ1dHRvbnNcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvQ2xvc2VcIik7XG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmb3JtUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG5cbmNvbnN0IGNsb3NlQnRuMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNDbG9zZVwiKTtcbmNsb3NlQnRuMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0c1BvcHVwRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxuLy9zdWJtaXQgZm9ybVxuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Gb3JtXCIpO1xuXG50b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1RpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGZvcm1Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1ByaW9yaXR5XCIpLnZhbHVlO1xuICAgIGNvbnN0IGZvcm1EdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRHVlRGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCBmb3JtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEZXNjcmlwdGlvblwiKS52YWx1ZTtcblxuICAgIC8vZ2V0IGRhdGUgaW4gcHJlZmVycmVkIGZvcm1hdFxuICAgIGNvbnN0IHllYXIgPSBmb3JtRHVlRGF0ZS5zdWJzdHIoMCw0KTtcbiAgICBjb25zdCBtb250aCA9IGZvcm1EdWVEYXRlLnN1YnN0cig1LDIpO1xuICAgIGNvbnN0IGRheSA9IGZvcm1EdWVEYXRlLnN1YnN0cigtMiwyKTtcblxuICAgIGNvbnN0IG5ld0Zvcm1EdWV0RGF0ZSA9IG1vbnRoICsgXCIgXCIgKyBkYXkgKyBcIiBcIiArIHllYXI7XG5cbiAgICAvL2Fzc2lnblRhc2sgZnJvbSBoZXJlXG4gICAgYXNzaWduVGFzayhmb3JtVGl0bGUsIGZvcm1EZXNjcmlwdGlvbiwgbmV3Rm9ybUR1ZXREYXRlLCBmb3JtUHJpb3JpdHkpO1xuXG4gICAgLy9hZGQgdGFzayB0byBVSVxuICAgIGFkZFRhc2tVSShmb3JtVGl0bGUsIGZvcm1EZXNjcmlwdGlvbiwgbmV3Rm9ybUR1ZXREYXRlLCBmb3JtUHJpb3JpdHkpO1xuXG4gICAgLy9jbG9zZSBmb3JtIGlmIG5lY2Nlc2FyeT9cbiAgICBjbG9zZUJ0bi5jbGljaygpO1xuXG59KTtcblxuLy9hZGQgVG8gRG9zIHRvIFVJXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5mdW5jdGlvbiBhZGRUYXNrVUkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIC8vY2xlYXIgcHJldmlvdXMgdGFibGVcbiAgICB2YXIgY2hpbGQgPSBjb250ZW50Lmxhc3RFbGVtZW50Q2hpbGQ7ICBcbiAgICB3aGlsZSAoY2hpbGQpIHsgXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpOyBcbiAgICAgICAgY2hpbGQgPSBjb250ZW50Lmxhc3RFbGVtZW50Q2hpbGQ7IFxuICAgIH1cblxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSBjdXJyZW50UHJvamVjdCgpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBoZWFkZXIuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG5cbiAgICBjb25zdCBUYXNrbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3QoKSkpO1xuXG4gICAgLy9IZWFkZXJcbiAgICB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICBsZXQgY2VsbDAxID0gdGFibGUucm93c1swXS5pbnNlcnRDZWxsKCk7XG4gICAgY2VsbDAxLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xuICAgIGxldCBjZWxsMDIgPSB0YWJsZS5yb3dzWzBdLmluc2VydENlbGwoKTtcbiAgICBjZWxsMDIudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gICAgbGV0IGNlbGwwMyA9IHRhYmxlLnJvd3NbMF0uaW5zZXJ0Q2VsbCgpO1xuICAgIGNlbGwwMy50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcbiAgICBsZXQgY2VsbDA0ID0gdGFibGUucm93c1swXS5pbnNlcnRDZWxsKCk7XG4gICAgY2VsbDA0LnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIGxldCBjZWxsMDYgPSB0YWJsZS5yb3dzWzBdLmluc2VydENlbGwoKTtcbiAgICBjZWxsMDYudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBsZXQgY2VsbDA3ID0gdGFibGUucm93c1swXS5pbnNlcnRDZWxsKCk7XG4gICAgY2VsbDA3LnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuXG5cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBUYXNrbGlzdC5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgIHRhYmxlLmluc2VydFJvdygpO1xuICAgICAgICAvL0Rpc3BsYXkgRGF0YVxuICAgICAgICBsZXQgbmV3Q2VsbCA9IHRhYmxlLnJvd3NbdGFibGUucm93cy5sZW5ndGggLSAxXS5pbnNlcnRDZWxsKCk7XG4gICAgICAgIG5ld0NlbGwudGV4dENvbnRlbnQgPSBUYXNrbGlzdFtyb3ddLnRpdGxlO1xuICAgICAgICBsZXQgbmV3Q2VsbDIgPSB0YWJsZS5yb3dzW3RhYmxlLnJvd3MubGVuZ3RoIC0gMV0uaW5zZXJ0Q2VsbCgpO1xuICAgICAgICBuZXdDZWxsMi50ZXh0Q29udGVudCA9IFRhc2tsaXN0W3Jvd10ucHJpb3JpdHk7XG4gICAgICAgIGxldCBuZXdDZWxsMyA9IHRhYmxlLnJvd3NbdGFibGUucm93cy5sZW5ndGggLSAxXS5pbnNlcnRDZWxsKCk7XG4gICAgICAgIG5ld0NlbGwzLnRleHRDb250ZW50ID0gVGFza2xpc3Rbcm93XS5kdWVEYXRlO1xuICAgICAgICBsZXQgbmV3Q2VsbDQgPSB0YWJsZS5yb3dzW3RhYmxlLnJvd3MubGVuZ3RoIC0gMV0uaW5zZXJ0Q2VsbCgpO1xuICAgICAgICBuZXdDZWxsNC50ZXh0Q29udGVudCA9IFRhc2tsaXN0W3Jvd10uZGVzY3JpcHRpb247XG5cbiAgICAgICAgLy9EaXNwbGF5IEJ1dHRvbnNcbiAgICAgICAgbGV0IG5ld0NlbGw1ID0gdGFibGUucm93c1t0YWJsZS5yb3dzLmxlbmd0aCAtIDFdLmluc2VydENlbGwoKTtcbiAgICAgICAgbGV0IGJ1dHRvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgLy8gYnV0dG9uMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFJvd0Z1bmN0aW9uKTtcbiAgICAgICAgbmV3Q2VsbDUuYXBwZW5kKGJ1dHRvbjEpO1xuICAgICAgICBsZXQgbmV3Q2VsbDYgPSB0YWJsZS5yb3dzW3RhYmxlLnJvd3MubGVuZ3RoIC0gMV0uaW5zZXJ0Q2VsbCgpO1xuICAgICAgICBsZXQgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVSb3dGdW5jdGlvbik7XG4gICAgICAgIG5ld0NlbGw2LmFwcGVuZChidXR0b24yKTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJsZSk7XG59XG5cbi8vZGVsZXRlIHRhc2sgYnV0dG9uXG5mdW5jdGlvbiBkZWxldGVSb3dGdW5jdGlvbigpIHtcbiAgICBjb25zdCB0aGlzUm93ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgdGhpc1Jvd0luZGV4ID0gdGhpc1Jvdy5yb3dJbmRleCAtIDE7XG4gICAgbGV0IFRhc2tsaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdCgpKSk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGN1cnJlbnRQcm9qZWN0KCk7XG5cbiAgICBUYXNrbGlzdC5zcGxpY2UodGhpc1Jvd0luZGV4LCAxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkoVGFza2xpc3QpKTtcbiAgICBhZGRUYXNrVUkoKTtcblxufVxuXG4vLyBBZGQgUHJvamVjdCBVSVxuLy9DcmVhdGUgTmV3IFByb2plY3QgU3VibWl0IEJ1dHRvblxuY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RDb250ZW50XCIpO1xuXG5jb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRQcm9qZWN0XCIpO1xuXG5zdWJtaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvL2dldCB2YWx1ZSBmcm9tIGlucHV0IGZpZWxkXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0Rm9ybVwiKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0Rm9ybVwiKTtcblxuICAgIFxuXG4gICAgLy9jcmVhdGUgcHJvamVjdCBmcm9tIHZhbHVlICYgdXBkYXRlIFVJXG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0VGl0bGUpO1xuICAgIGFkZFByb2plY3RVSShwcm9qZWN0VGl0bGUpO1xuXG4gICAgLy9jbGVhciBpbnB1dCBmaWVsZFxuICAgIHByb2plY3RUaXRsZUhUTUwudmFsdWUgPSBcIlwiO1xufSk7XG5cbi8vQWRkIFByb2plY3QgdG8gVUlcbmZ1bmN0aW9uIGFkZFByb2plY3RVSShuYW1lKSB7XG4gICAgLy9jbGVhciBwcmV2aW91cyB0YWJsZVxuICAgIHZhciBjaGlsZCA9IHByb2plY3RDb250ZW50Lmxhc3RFbGVtZW50Q2hpbGQ7ICBcbiAgICB3aGlsZSAoY2hpbGQpIHsgXG4gICAgcHJvamVjdENvbnRlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpOyBcbiAgICBjaGlsZCA9IHByb2plY3RDb250ZW50Lmxhc3RFbGVtZW50Q2hpbGQ7IFxufVxuICAgIC8vY3JlYXRlIHRhYmxlXG4gICAgbGV0IHB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG5cbiAgICBwdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgbGV0IHBjZWxsMSA9IHB0YWJsZS5yb3dzWzBdLmluc2VydENlbGwoKTtcbiAgICBwY2VsbDEudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG4gICAgbGV0IHBjZWxsMiA9IHB0YWJsZS5yb3dzWzBdLmluc2VydENlbGwoKTtcbiAgICBwY2VsbDIudGV4dENvbnRlbnQgPSBcIlNlbGVjdFwiO1xuICAgIGxldCBwY2VsbDMgPSBwdGFibGUucm93c1swXS5pbnNlcnRDZWxsKCk7XG4gICAgcGNlbGwzLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgbGV0IHBjZWxsNCA9IHB0YWJsZS5yb3dzWzBdLmluc2VydENlbGwoKTtcbiAgICBwY2VsbDQudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuXG4gICAgY29uc3QgYWxsS2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0gYWxsS2V5c1tpXTtcbiAgICAgICAgaWYgKGtleSAhPSBcIkN1cnJlbnQgUHJvamVjdFwiKSB7XG4gICAgICAgICAgICBwdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgICAgICAgICBsZXQgcGNlbGwwMSA9IHB0YWJsZS5yb3dzW3B0YWJsZS5yb3dzLmxlbmd0aCAtIDFdLmluc2VydENlbGwoKTtcbiAgICAgICAgICAgIHBjZWxsMDEudGV4dENvbnRlbnQgPSBrZXk7XG5cbiAgICAgICAgICAgIC8vRGlzcGxheSBCdXR0b25zXG4gICAgICAgICAgICAvL3NlbGVjdFxuICAgICAgICAgICAgbGV0IHBjZWxsMDIgPSBwdGFibGUucm93c1twdGFibGUucm93cy5sZW5ndGggLSAxXS5pbnNlcnRDZWxsKCk7XG4gICAgICAgICAgICBsZXQgcGJ1dHRvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHBjZWxsMDIuYXBwZW5kKHBidXR0b24xKTtcbiAgICAgICAgICAgIC8vZWRpdFxuICAgICAgICAgICAgbGV0IHBjZWxsMDMgPSBwdGFibGUucm93c1twdGFibGUucm93cy5sZW5ndGggLSAxXS5pbnNlcnRDZWxsKCk7XG4gICAgICAgICAgICBsZXQgcGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHBjZWxsMDMuYXBwZW5kKHBidXR0b24yKTtcbiAgICAgICAgICAgIC8vZGVsZXRlXG4gICAgICAgICAgICBsZXQgcGNlbGwwNCA9IHB0YWJsZS5yb3dzW3B0YWJsZS5yb3dzLmxlbmd0aCAtIDFdLmluc2VydENlbGwoKTtcbiAgICAgICAgICAgIGxldCBwYnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcGJ1dHRvbjMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3RGdW5jdGlvbik7XG4gICAgICAgICAgICBwY2VsbDA0LmFwcGVuZChwYnV0dG9uMyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQocHRhYmxlKTtcbn1cblxuLy9kZWxldGUgcHJvamVjdCBidXR0b25cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGdW5jdGlvbigpIHtcbiAgICBjb25zdCB0aGlzUm93ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgdGhpc1Jvd1RpdGxlID0gKHRoaXNSb3cuY2VsbHNbMF0uaW5uZXJUZXh0KTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzUm93VGl0bGUpO1xuXG4gICAgLy8gVGFza2xpc3Quc3BsaWNlKHRoaXNSb3dJbmRleCwgMSk7XG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KFRhc2tsaXN0KSk7XG4gICAgYWRkUHJvamVjdFVJKCk7XG5cbn1cblxuXG5cbi8vRHVtbXkgVGFza3MgZm9yIHRlc3RpbmdcblxuLy9TZXQgQ3VycmVudCBQcm9qZWN0IG9uIEhvbWUgUGFnZSB0byBQZXJzb25hbCBmb3IgdGVzdGluZ1xuXG5cbmN1cnJlbnRQcm9qZWN0KCk7XG5cblxuY3JlYXRlUHJvamVjdChcIldvcmtcIik7XG5cbmFkZFByb2plY3RVSShcIldvcmtcIik7XG5cblxuYXNzaWduVGFzaygnZ3JvY2VyeSBzaG9wcGluZycsICdhIGRlc2NyaXB0aW9uJywgXCIxMSAzMCAyMDIzXCIsIDIpO1xuXG5hc3NpZ25UYXNrKCdzb21ldGhpbmcnLCAnJywgXCJcIiwgMik7XG5cblxuLy8gYXNzaWduVGFzaygnQ29kZSB0aGlzIGFzc2lnbm1lbnQnLCAnVGhpcyBUT1AgYXNzaWdubWVudCcsIFwiMTEgMDEgMjAyM1wiLCAyKTtcblxuLy8gYXNzaWduVGFzaygnZ3ltIGV2ZXJ5IGRheScsICcnLCAnJywgNyk7XG5cbi8vIHdpbmRvdy50YXNrNCA9IGFzc2lnblRhc2soJ3NsZWVwIDggaG91cnMnLCAnenp6JywgJycsIDIpO1xuXG5hZGRUYXNrVUkoKTtcbmNvbnNvbGUubG9nKFwiZmluYWxcIiwgbG9jYWxTdG9yYWdlKTtcbi8vIGNvbnNvbGUubG9nKFwiZmluYWwgUGVyc29uYWwgcGFyc2VcIixKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGVyc29uYWxcIikpKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vbWFpbi5qcyc7XG5cbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tICcuL21haW4uanMnO1xuXG4vLyBjb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkcyFcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=