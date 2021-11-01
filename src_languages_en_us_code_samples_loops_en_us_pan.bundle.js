"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_en_us_code_samples_loops_en_us_pan"],{

/***/ "./src/languages/en_us/code_samples/loops.en_us.pan":
/*!**********************************************************!*\
  !*** ./src/languages/en_us/code_samples/loops.en_us.pan ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nLoops allow repeating the execution of a block of code\r\nuntil some condition causes it to stop.\r\n\r\nWhile loops are declared as:\r\nwhile condition\r\n\t// code that runs repeatedly until condition is false\r\nend\r\n\r\nFrom-To loops are declared as:\r\nfor number variable_name from expression to expression\r\n\t// code that runs once for each value in the interval\r\nend\r\n\r\nForever loops are declared as:\r\nforever\r\n\t// code that runs repeatedly until it is interrupted\r\nend\r\n\r\n*/\r\n\r\n\r\n// While loops repeat until the given condition is no longer true:\r\nnumber player_number = 1\r\nwhile player_number <= 4\r\n\twrite(\"Player #{player_number} joined!\")\r\n\tplayer_number += 1\r\nend\r\nnew_line()\r\n\r\n\r\n// From-To loops repeat once for each value in the from-to interval\r\n// updating the declared variable in every iteration:\r\nwrite(\"Calculating the first ten multiples of three\")\r\nfor number x from 1 to 10\r\n\twrite(3 * x)\r\nend\r\nnew_line()\r\n\r\n\r\n// Forever loops are infinite, so you must manually stop them:\r\nwrite(\"Starting game\")\r\n\r\nnumber max_retries = 5\r\nnumber retry = 1\r\nforever\r\n\tnumber roll = random_integer(1, 6+1)\r\n\twrite(\"Rolled a {roll}\")\r\n\r\n\tif roll == 6\r\n\t\ttext retry_name = \"roll\"\r\n\t\tif retry > 1\r\n\t\t\tretry_name += \"s\"  // make it plural\r\n\t\tend\r\n\r\n\t\twrite(\"Got a 6 in {retry} {retry_name}!\")\r\n\t\tbreak  // stop the loop (more on this later)\r\n\tend\r\n\r\n\tretry += 1\r\n\r\n\tif retry > max_retries\r\n\t\twrite(\"Better luck next time!\")\r\n\t\tbreak  // stop the loop (more on this later)\r\n\tend\r\nend\r\n\r\nwrite(\"Game over\")");

/***/ })

}]);