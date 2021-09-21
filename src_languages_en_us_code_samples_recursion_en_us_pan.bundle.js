"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_en_us_code_samples_recursion_en_us_pan"],{

/***/ "./src/languages/en_us/code_samples/recursion.en_us.pan":
/*!**************************************************************!*\
  !*** ./src/languages/en_us/code_samples/recursion.en_us.pan ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nRecursion is when a function calls itself.\r\nTwo prominent examples are the factorial and fibonacci functions.\r\n\r\nThe implementations below do not support negative numbers as arguments.\r\nCalling them with a negative number would cause an infinite loop.\r\n\r\n*/\r\n\r\nfunction factorial(number n) returns number\r\n\tif n == 0\r\n\t\treturn 1\r\n\tend\r\n\r\n\treturn n * factorial(n - 1)\r\nend\r\n\r\nwrite(\">>> factorial(n)\")\r\nwrite(factorial(0))\r\nwrite(factorial(1))\r\nwrite(factorial(2))\r\nwrite(factorial(3))\r\nwrite(factorial(4))\r\nwrite(factorial(5))\r\nwrite(factorial(6))\r\nwrite(factorial(7))\r\nnew_line()\r\n\r\n\r\nfunction fibonacci(number n) returns number\r\n\tif n == 0\r\n\t\treturn 0\r\n\telse if n == 1\r\n\t\treturn 1\r\n\tend\r\n\r\n\treturn fibonacci(n - 1) + fibonacci(n - 2)\r\nend\r\n\r\nwrite(\">>> fibonacci(n)\")\r\nwrite(fibonacci(0))\r\nwrite(fibonacci(1))\r\nwrite(fibonacci(2))\r\nwrite(fibonacci(3))\r\nwrite(fibonacci(4))\r\nwrite(fibonacci(5))\r\nwrite(fibonacci(6))\r\nwrite(fibonacci(7))\r\nnew_line()");

/***/ })

}]);