"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_pt_br_code_samples_else_if_pt_br_pan"],{

/***/ "./src/languages/pt_br/code_samples/else_if.pt_br.pan":
/*!************************************************************!*\
  !*** ./src/languages/pt_br/code_samples/else_if.pt_br.pan ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nComandos Se também suportam um ou mais blocos Senão-Se opcionais.\r\nO código do bloco Senão-Se executa se a sua condição é verdadeira\r\ne todas as condições anteriores são falsas.\r\n\r\nCom um bloco Senão-Se, o comando Se pode ser declarado da seguinte forma:\r\nse primeira_condição\r\n\t// código que executa se primeira_condição é verdadeira\r\nsenão se segunda_condição\r\n\t// código que executa se primeira_condição é falsa\r\n\t// e segunda_condição é verdadeira\r\nfim\r\n\r\nOu com múltiplos blocos Senão-Se, e também um bloco Senão:\r\nse primeira_condição\r\n\t// código que executa se primeira_condição é verdadeira\r\nsenão se segunda_condição\r\n\t// código que executa se primeira_condição é falsa\r\n\t// e segunda_condição é verdadeira\r\nsenão se terceira_condição\r\n\t// código que executa se primeira_condição é falsa\r\n\t// e segunda_condição é falsa\r\n\t// e terceira_condição é verdadeira\r\nsenão\r\n\t// código que executa se nenhuma condição é verdadeira\r\nfim\r\n\r\n*/\r\n\r\n// O exemplo abaixo simula um dado de seis lados\r\n// e escreve uma mensagem com base no valor rolado\r\n\r\n// Note que o segundo parâmetro é o limite + 1\r\nnúmero dado = inteiro_aleatório(1, 6+1)\r\n\r\nescreva(dado)\r\n\r\nse dado == 6\r\n\tescreva(\"Ótima rolagem!\")\r\nsenão se dado <= 2\r\n\tescreva(\"Rolagem ruim!\")\r\nsenão\r\n\tescreva(\"Rolagem OK\")\r\nfim\r\n\r\n// Execute este exemplo várias vezes para obter resultados diferentes");

/***/ })

}]);