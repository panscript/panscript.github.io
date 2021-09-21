"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_pt_br_code_samples_recursion_pt_br_pan"],{

/***/ "./src/languages/pt_br/code_samples/recursion.pt_br.pan":
/*!**************************************************************!*\
  !*** ./src/languages/pt_br/code_samples/recursion.pt_br.pan ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nRecursão é quando uma função chama a si mesma.\r\nDois exemplos relevantes são as funções fatorial e fibonacci.\r\n\r\nAs implementações abaixo não suportam números negativos como argumentos.\r\nChamá-las com um número negativo causaria um loop infinito.\r\n\r\n*/\r\n\r\nfunção fatorial(número n) retorna número\r\n\tse n == 0\r\n\t\tretorne 1\r\n\tfim\r\n\r\n\tretorne n * fatorial(n - 1)\r\nfim\r\n\r\nescreva(\">>> fatorial(n)\")\r\nescreva(fatorial(0))\r\nescreva(fatorial(1))\r\nescreva(fatorial(2))\r\nescreva(fatorial(3))\r\nescreva(fatorial(4))\r\nescreva(fatorial(5))\r\nescreva(fatorial(6))\r\nescreva(fatorial(7))\r\nnova_linha()\r\n\r\n\r\nfunção fibonacci(número n) retorna número\r\n\tse n == 0\r\n\t\tretorne 0\r\n\tsenão se n == 1\r\n\t\tretorne 1\r\n\tfim\r\n\r\n\tretorne fibonacci(n - 1) + fibonacci(n - 2)\r\nfim\r\n\r\nescreva(\">>> fibonacci(n)\")\r\nescreva(fibonacci(0))\r\nescreva(fibonacci(1))\r\nescreva(fibonacci(2))\r\nescreva(fibonacci(3))\r\nescreva(fibonacci(4))\r\nescreva(fibonacci(5))\r\nescreva(fibonacci(6))\r\nescreva(fibonacci(7))\r\nnova_linha()");

/***/ })

}]);