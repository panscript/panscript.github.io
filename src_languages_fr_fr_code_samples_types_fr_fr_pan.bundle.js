"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_fr_fr_code_samples_types_fr_fr_pan"],{

/***/ "./src/languages/fr_fr/code_samples/types.fr_fr.pan":
/*!**********************************************************!*\
  !*** ./src/languages/fr_fr/code_samples/types.fr_fr.pan ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nOs valores em PanScript têm um de três tipos primitivos:\r\n- Texto\r\n- Número\r\n- Lógico\r\n\r\n*/\r\n\r\n// Valores textuais são cercados de aspas duplas (\") ou aspas simples (')\r\ntexto nome = \"João\"\r\nescreva(\"Isto é um texto\")\r\nescreva('Isto também é um texto')\r\nescreva(\"Isto é \" + \"uma expressão textual\")\r\nescreva(\"Isto é um texto com interpolação: {nome}\")\r\nescreva('Isto é um texto sem interpolação: {nome}')\r\nnova_linha()\r\n\r\n// mais sobre interpolação de texto a seguir\r\n\r\n\r\n// Valores numéricos\r\nconstante número PI = pi()\r\nconstante número TAU = PI * 2\r\nescreva(42)\t\t\t// inteiro positivo\r\nescreva(-10)\t\t// número negativo\r\nescreva(3.14)\t\t// número real\r\nescreva(.5)\t\t\t// parte inteira opcional\r\nescreva(12.)\t\t// parte fracionária opcional\r\nescreva(0x0f)\t\t// número hexadecimal\r\nescreva(0b101010)\t// número binário\r\nescreva(PI)\r\nescreva(TAU)\r\nnova_linha()\r\n\r\n// mais sobre contantes a seguir\r\n\r\n\r\n// Valores lógicos\r\nlógico a = verdadeiro\r\nlógico b = falso\r\nescreva(\"não verdadeiro: {não verdadeiro}\")\r\nescreva(\"não falso: {não falso}\")\r\nescreva(\"não a: {não a}\")\r\nescreva(\"não b: {não b}\")\r\nescreva(\"verdadeiro e verdadeiro: {verdadeiro e verdadeiro}\")\r\nescreva(\"verdadeiro e falso: {verdadeiro e falso}\")\r\nescreva(\"falso e verdadeiro: {falso e verdadeiro}\")\r\nescreva(\"falso e falso: {falso e falso}\")\r\nescreva(\"a e b: {a e b}\")\r\nescreva(\"verdadeiro ou verdadeiro: {verdadeiro ou verdadeiro}\")\r\nescreva(\"verdadeiro ou falso: {verdadeiro ou falso}\")\r\nescreva(\"falso ou verdadeiro: {falso ou verdadeiro}\")\r\nescreva(\"falso ou falso: {falso ou falso}\")\r\nescreva(\"a ou b: {a ou b}\")\r\nnova_linha()\r\n\r\n// mais sobre expressões a seguir");

/***/ })

}]);