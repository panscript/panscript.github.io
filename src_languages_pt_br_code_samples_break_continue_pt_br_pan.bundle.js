"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_pt_br_code_samples_break_continue_pt_br_pan"],{

/***/ "./src/languages/pt_br/code_samples/break_continue.pt_br.pan":
/*!*******************************************************************!*\
  !*** ./src/languages/pt_br/code_samples/break_continue.pt_br.pan ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nExistem ao menos três formas de se interromper um loop.\r\n\r\nInterrompa sai do loop, e a execução segue após o fim dele.\r\nContinue pula a iteração atual, mas continua dentro do loop.\r\n\r\nDentro de uma função, você também pode parar um loop usando\r\no comando Retorne (mais sobre isso a seguir).\r\n\r\n*/\r\n\r\nescreva(\"Começo do loop\")\r\n\r\nnumero i = 0\r\npara sempre\r\n\ti += 1\r\n\r\n\t// Interrompe o loop após 10 iterações\r\n\tse i > 10\r\n\t\tinterrompa\r\n\tfim\r\n\r\n\t// Pula múltiplos de três\r\n\tse i % 3 == 0\r\n\t\tcontinue\r\n\tfim\r\n\r\n\tescreva(i)\r\nfim\r\n\r\nescreva(\"Fim do loop\")");

/***/ })

}]);