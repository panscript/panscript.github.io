"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_en_us_code_samples_types_en_us_pan"],{

/***/ "./src/languages/en_us/code_samples/types.en_us.pan":
/*!**********************************************************!*\
  !*** ./src/languages/en_us/code_samples/types.en_us.pan ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nPanScript values have one of three primitive data types:\r\n- Text\r\n- Number\r\n- Logical\r\n\r\n*/\r\n\r\n// Text values are surrounded by double quotes (\") or simple quotes (')\r\ntext name = \"John\"\r\nwrite(\"This is a text\")\r\nwrite('This is also a text')\r\nwrite(\"This is \" + \"a text expression\")\r\nwrite(\"This is a text with interpolation: {name}\")\r\nwrite('This is a text without interpolation: {name}')\r\nnew_line()\r\n\r\n// more on text interpolation later\r\n\r\n\r\n// Number values\r\nconstant number PI = pi()\r\nconstant number TAU = PI * 2\r\nwrite(42)\t\t\t// positive integer\r\nwrite(-10)\t\t\t// negative number\r\nwrite(3.14)\t\t// real number\r\nwrite(.5)\t\t\t// optional whole part\r\nwrite(12.)\t\t\t// optional fractional part\r\nwrite(0x0f)\t\t// hexadecimal number\r\nwrite(0b101010)\t// binary number\r\nwrite(PI)\r\nwrite(TAU)\r\nnew_line()\r\n\r\n// more on constants later\r\n\r\n\r\n// Logical values\r\nlogical a = true\r\nlogical b = false\r\nwrite(\"not true: {not true}\")\r\nwrite(\"not false: {not false}\")\r\nwrite(\"not a: {not a}\")\r\nwrite(\"not b: {not b}\")\r\nwrite(\"true and true: {true and true}\")\r\nwrite(\"true and false: {true and false}\")\r\nwrite(\"false and true: {false and true}\")\r\nwrite(\"false and false: {false and false}\")\r\nwrite(\"a and b: {a and b}\")\r\nwrite(\"true or true: {true or true}\")\r\nwrite(\"true or false: {true or false}\")\r\nwrite(\"false or true: {false or true}\")\r\nwrite(\"false or false: {false or false}\")\r\nwrite(\"a or b: {a or b}\")\r\nnew_line()\r\n\r\n// more on expressions later");

/***/ })

}]);