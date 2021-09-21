"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_en_us_code_samples_text_interpolation_en_us_pan"],{

/***/ "./src/languages/en_us/code_samples/text_interpolation.en_us.pan":
/*!***********************************************************************!*\
  !*** ./src/languages/en_us/code_samples/text_interpolation.en_us.pan ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nSometimes you want to display a variable along with some text.\r\n\r\nFor example, the variable \"name\" could be referenced in\r\nthe text \"Hello, name!\" to show a personalized greeting.\r\n\r\n*/\r\n\r\ntext name = \"John\"\r\nnumber age = 12\r\n\r\n\r\n// You can do that using \"+\" to concatenate texts:\r\nwrite(\"Hello, \" + name + \"!\")\r\nwrite(\"You are \" + to_text(age) + \" years old today.\")\r\nnew_line()\r\n\r\n\r\n// Or you can use text interpolation, in which values inside\r\n// curly braces ({}) are automatically converted to text:\r\nwrite(\"Hello, {name}!\")\r\nwrite(\"You are {age} years old today.\")\r\nnew_line()\r\n\r\n\r\n// You can also avoid text interpolation by using\r\n// single quotes (') instead of double quotes (\"):\r\nwrite('Hello, {name}!')\r\nwrite('You are {age} years old today.')");

/***/ })

}]);