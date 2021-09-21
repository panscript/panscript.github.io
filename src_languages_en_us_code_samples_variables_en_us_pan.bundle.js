"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_en_us_code_samples_variables_en_us_pan"],{

/***/ "./src/languages/en_us/code_samples/variables.en_us.pan":
/*!**************************************************************!*\
  !*** ./src/languages/en_us/code_samples/variables.en_us.pan ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nVariables are declared as:\r\ntype name = value\r\n\r\nWhere:\r\n- type is either text, number, or logical (more on types later);\r\n- name must start with a letter or an underscore;\r\n- name may contain letters, underscores and numbers;\r\n- value must have the declared type.\r\n\r\n*/\r\n\r\n// Examples\r\ntext name = \"John Smith\"\r\ntext address = \"42 Calm Street\"\r\nnumber age = 18\r\nnumber account_balance = -100.25\r\nlogical is_sleeping = false\r\nlogical is_studying = true\r\n\r\n\r\n// You can use variable names to reference their values\r\nwrite(name)\r\nwrite(age)\r\nwrite(account_balance)\r\nwrite(is_studying)\r\nnew_line()\r\n\r\n\r\n// You may also reassign variables to new values\r\nwrite(\"Setting age to 19...\")\r\nage = 19\r\nwrite(age)\r\nnew_line()\r\n\r\n\r\n// And use them in expressions (more on this later)\r\nwrite(\"Adding $100 to account balance...\")\r\naccount_balance = account_balance + 100\r\nwrite(account_balance)\r\nnew_line()\r\n\r\n\r\n/*\r\n\r\nBut you cannot declare the same variable twice,\r\nwhich is why the code below would cause an error\r\nif it wasn't inside this comment block:\r\n\r\nnumber age = 19\r\n\r\n*/");

/***/ })

}]);