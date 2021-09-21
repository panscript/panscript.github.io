"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_pt_br_code_samples_functions_pt_br_pan"],{

/***/ "./src/languages/pt_br/code_samples/functions.pt_br.pan":
/*!**************************************************************!*\
  !*** ./src/languages/pt_br/code_samples/functions.pt_br.pan ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nFunções de usuário são funções criadas por você, o usuário.\r\nVocê pode criar funções para reutilizar trechos de código várias vezes,\r\nou para organizar seu código em partes menores, mais fáceis de testar.\r\n\r\nFunções são declaradas da seguinte forma:\r\nfunção nome(tipo_parâmetro nome_parâmetro, ...) retorna tipo\r\n\t// código que executa quando a função é chamada\r\nfim\r\n\r\nOu, para funções sem tipo, da seguinte forma:\r\nfunção nome(tipo_parâmetro nome_parâmetro, ...)\r\n\t// código que executa quando a função é chamada\r\nfim\r\n\r\nVocê pode sair da função a qualquer momento com o comando retorne.\r\nRetorne é usado para devolver um resultado a quem chamou a função.\r\n\r\n*/\r\n\r\n// Funções tipadas retornam um valor do tipo especificado\r\nfunção resposta() retorna número\r\n\t// Retorna o número 42\r\n\tretorne 42\r\nfim\r\n\r\nescreva(\">>> resposta()\")\r\nescreva(resposta())\r\nnova_linha()\r\n\r\n\r\n// Funções podem ter zero ou mais parâmetros tipados\r\nfunção incremente(número x) retorna número\r\n\t// Retorna o valor de x incrementado em 1\r\n\tretorne x + 1\r\nfim\r\n\r\nescreva(\">>> incremente(x)\")\r\nescreva(incremente(1))\t\t\t\t// note a compositação de funções\r\nescreva(incremente(incremente(1)))\t// note a compositação de funções\r\nnova_linha()\r\n\r\n\r\nfunção saudação(texto nome) retorna texto\r\n\tretorne \"Olá, {nome}!\"\r\nfim\r\n\r\nescreva(\">>> saudação(nome)\")\r\nescreva(saudação(\"João\"))\r\nnova_linha()\r\n\r\n\r\nfunção é_palíndromo(texto palavra, lógico insensível_à_caixa) retorna lógico\r\n\tse insensível_à_caixa\r\n\t\tpalavra = minúsculas(palavra)\r\n\tfim\r\n\r\n\t// Implementação ingênua (naïve)\r\n\tretorne palavra == inverta_texto(palavra)\r\nfim\r\n\r\nescreva(\">>> é_palíndromo(palavra, insensível_à_caixa)\")\r\nescreva(é_palíndromo(\"Radar\", falso))\r\nescreva(é_palíndromo(\"Radar\", verdadeiro))\r\nescreva(é_palíndromo(\"Olá\", verdadeiro))\r\nnova_linha()\r\n\r\n\r\n// Funções sem tipo não retornam um valor\r\nfunção desenhe_triângulo(número lado)\r\n\t// Se lado for zero ou negativo, não desenha nada\r\n\tse lado <= 0\r\n\t\tretorne  // saia da função aqui\r\n\tfim\r\n\r\n\tnúmero i = 1\r\n\tpara sempre\r\n\t\tse i > lado\r\n\t\t\tretorne  // outra forma de interromper um loop\r\n\t\tfim\r\n\r\n\t\tescreva(repita(\"x\", i))\r\n\t\ti += 1\r\n\tfim\r\nfim\r\n\r\nescreva(\">>> desenhe_triângulo(lado)\")\r\ndesenhe_triângulo(5)\r\nnova_linha()");

/***/ })

}]);