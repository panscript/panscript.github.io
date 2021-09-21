"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_pt_br_code_samples_loops_pt_br_pan"],{

/***/ "./src/languages/pt_br/code_samples/loops.pt_br.pan":
/*!**********************************************************!*\
  !*** ./src/languages/pt_br/code_samples/loops.pt_br.pan ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nLoops permitem repetir a execução de um bloco de código\r\naté alguma condição causar a sua parada.\r\n\r\nLoops Enquanto são declarados da seguinte forma:\r\nenquanto condição\r\n\t// código que executa repetidamente até que a condição seja falsa\r\nfim\r\n\r\nLoops Para-Sempre são declarados da seguinte forma:\r\npara sempre\r\n\t// código que executa repetidamente até ser interrompido\r\nfim\r\n\r\n*/\r\n\r\n\r\n// Loops Enquanto repetem até que a condição testada seja falsa:\r\nnúmero número_jogador = 1\r\nenquanto número_jogador <= 4\r\n\tescreva(\"Jogador #{número_jogador} entrou!\")\r\n\tnúmero_jogador += 1\r\nfim\r\nnova_linha()\r\n\r\n\r\n// Loops Para-Sempre são infinitos, então você deve pará-los manualmente:\r\nescreva(\"Iniciando jogo\")\r\n\r\nnúmero máx_tentativas = 5\r\nnúmero tentativa = 1\r\npara sempre\r\n\tnúmero dado = inteiro_aleatório(1, 6+1)\r\n\tescreva(\"Rolou um {dado}\")\r\n\r\n\tse dado == 6\r\n\t\ttexto nome_tentativa = \"tentativa\"\r\n\t\tse tentativa > 1\r\n\t\t\tnome_tentativa += \"s\"  // deixa no plural\r\n\t\tfim\r\n\r\n\t\tescreva(\"Tirou um 6 em {tentativa} {nome_tentativa}!\")\r\n\t\tinterrompa  // para o loop (mais sobre isso a seguir)\r\n\tfim\r\n\r\n\ttentativa += 1\r\n\r\n\tse tentativa > máx_tentativas\r\n\t\tescreva(\"Mais sorte da próxima vez!\")\r\n\t\tinterrompa  // para o loop (mais sobre isso a seguir)\r\n\tfim\r\nfim\r\n\r\nescreva(\"Fim de jogo\")");

/***/ })

}]);