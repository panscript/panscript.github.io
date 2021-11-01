"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_pt_br_code_samples_variables_pt_br_pan"],{

/***/ "./src/languages/pt_br/code_samples/variables.pt_br.pan":
/*!**************************************************************!*\
  !*** ./src/languages/pt_br/code_samples/variables.pt_br.pan ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nVariáveis são declaradas da seguinte forma:\r\ntipo nome = valor\r\n\r\nOnde:\r\n- tipo pode ser texto, número, or lógico (mais sobre isso a seguir);\r\n- nome deve começar com uma letra ou um underline;\r\n- nome pode conter letras, underlines, e números;\r\n- valor deve ter o tipo declarado.\r\n\r\n*/\r\n\r\n// Exemplos\r\ntexto nome = \"João da Silva\"\r\ntexto endereço = \"Rua Calma, 42\"\r\nnumero idade = 18\r\nnumero saldo_em_conta = -100.25\r\nlogico está_dormindo = falso\r\nlogico está_estudando = verdadeiro\r\n\r\n\r\n// Você pode usar nomes de variáveis para referenciar os seus valores\r\nescreva(nome)\r\nescreva(idade)\r\nescreva(saldo_em_conta)\r\nescreva(está_estudando)\r\nnova_linha()\r\n\r\n\r\n// Você pode atribuir novos valores às variáveis\r\nescreva(\"Definindo idade como 19...\")\r\nidade = 19\r\nescreva(idade)\r\nnova_linha()\r\n\r\n\r\n// E usá-las em expressões (mais sobre isso a seguir)\r\nescreva(\"Somando R$ 100 ao saldo em conta...\")\r\nsaldo_em_conta = saldo_em_conta + 100\r\nescreva(saldo_em_conta)\r\nnova_linha()\r\n\r\n\r\n/*\r\n\r\nMas você não pode declarar a mesma variável duas vezes,\r\no que explica por que o código abaixo causaria um erro\r\nse não estivesse dentro deste bloco de comentário:\r\n\r\nnumero idade = 19\r\n\r\n*/");

/***/ })

}]);