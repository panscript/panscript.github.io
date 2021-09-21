"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_en_us_code_samples_functions_en_us_pan"],{

/***/ "./src/languages/en_us/code_samples/functions.en_us.pan":
/*!**************************************************************!*\
  !*** ./src/languages/en_us/code_samples/functions.en_us.pan ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nUser functions are functions created by you, the user.\r\nYou can create functions to reuse snippets of code multiple times,\r\nor to organize your code in smaller parts that are easier to test.\r\n\r\nFunctions are declared as:\r\nfunction name(parameter_type parameter_name, ...) returns type\r\n\t// code that runs when the function is called\r\nend\r\n\r\nOr, for untyped functions, as:\r\nfunction name(parameter_type parameter_name, ...)\r\n\t// code that runs when the function is called\r\nend\r\n\r\nYou may exit the function anytime using a return statement.\r\nReturn is used to provide a result back to the caller.\r\n\r\n*/\r\n\r\n// Typed functions return a value of the specified type\r\nfunction answer() returns number\r\n\t// Returns the number 42\r\n\treturn 42\r\nend\r\n\r\nwrite(\">>> answer()\")\r\nwrite(answer())\r\nnew_line()\r\n\r\n\r\n// Functions may have zero or more typed parameters\r\nfunction increment(number x) returns number\r\n\t// Return the value of x incremented by 1\r\n\treturn x + 1\r\nend\r\n\r\nwrite(\">>> increment(x)\")\r\nwrite(increment(1))\t\t\t// notice function composition\r\nwrite(increment(increment(1)))\t// notice function composition\r\nnew_line()\r\n\r\n\r\nfunction greet(text name) returns text\r\n\treturn \"Hello, {name}!\"\r\nend\r\n\r\nwrite(\">>> greet(name)\")\r\nwrite(greet(\"John\"))\r\nnew_line()\r\n\r\n\r\nfunction is_palindrome(text word, logical case_insensitive) returns logical\r\n\tif case_insensitive\r\n\t\tword = lower_case(word)\r\n\tend\r\n\r\n\t// Naïve implementation\r\n\treturn word == reverse_text(word)\r\nend\r\n\r\nwrite(\">>> is_palindrome(word, case_insensitive)\")\r\nwrite(is_palindrome(\"Radar\", false))\r\nwrite(is_palindrome(\"Radar\", true))\r\nwrite(is_palindrome(\"Hello\", true))\r\nnew_line()\r\n\r\n\r\n// Untyped functions do not return a value\r\nfunction draw_triangle(number side)\r\n\t// If side is zero or negative, don't draw anything\r\n\tif side <= 0\r\n\t\treturn  // exit the function here\r\n\tend\r\n\r\n\tnumber i = 1\r\n\tforever\r\n\t\tif i > side\r\n\t\t\treturn  // yet another way to stop a loop\r\n\t\tend\r\n\r\n\t\twrite(repeat(\"x\", i))\r\n\t\ti += 1\r\n\tend\r\nend\r\n\r\nwrite(\">>> draw_triangle(side)\")\r\ndraw_triangle(5)\r\nnew_line()");

/***/ })

}]);