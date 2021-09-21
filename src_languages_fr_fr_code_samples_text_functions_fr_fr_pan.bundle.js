"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_fr_fr_code_samples_text_functions_fr_fr_pan"],{

/***/ "./src/languages/fr_fr/code_samples/text_functions.fr_fr.pan":
/*!*******************************************************************!*\
  !*** ./src/languages/fr_fr/code_samples/text_functions.fr_fr.pan ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// Funções de texto são funções que manipulam variáveis e valores textuais.\r\n\r\n/*\r\n\tpara_texto(x)\r\n\tConverte qualquer valor 'x' para o tipo texto.\r\n*/\r\nescreva(\">>> para_texto(x)\")\r\nescreva(\"Número: \" + para_texto(42))\r\nescreva(\"Lógico: \" + para_texto(verdadeiro))\r\nnova_linha()\r\n\r\n\r\n/*\r\n\tcomprimento(texto)\r\n\tRetorna o comprimento de um dado texto.\r\n*/\r\nescreva(\">>> comprimento(texto)\")\r\nescreva(comprimento(\"Olá\"))\r\nescreva(comprimento(\"\"))\r\nnova_linha()\r\n\r\n\r\n/*\r\n\tmaiúsculas(texto)\r\n\tRetorna o texto com todas as letras maiúsculas.\r\n*/\r\nescreva(\">>> maiúsculas(texto)\")\r\nescreva(maiúsculas(\"minúsculas\"))\r\nescreva(maiúsculas(\"MAIÚSCULAS\"))\r\nescreva(maiúsculas(\"Sentença\"))\r\nnova_linha()\r\n\r\n\r\n/*\r\n\tminúsculas(texto)\r\n\tRetorna o texto com todas as letras minúsculas.\r\n*/\r\nescreva(\">>> minúsculas(texto)\")\r\nescreva(minúsculas(\"minúsculas\"))\r\nescreva(minúsculas(\"MAIÚSCULAS\"))\r\nescreva(minúsculas(\"Sentença\"))\r\nnova_linha()\r\n\r\n\r\n/*\r\n\tsentença(texto)\r\n\tRetorna o texto com a primeira letra maiúscula e as demais minúsculas.\r\n*/\r\nescreva(\">>> sentença(texto)\")\r\nescreva(maiúsculas(\"minúsculas\"))\r\nescreva(maiúsculas(\"MAIÚSCULAS\"))\r\nescreva(maiúsculas(\"Sentença\"))\r\nnova_linha()\r\n\r\n\r\n/*\r\n\tesquerda(texto, contagem)\r\n\tRetorna até 'contagem' caracteres mais à esquerda do texto.\r\n*/\r\nescreva(\">>> esquerda(texto, contagem)\")\r\nescreva(esquerda(\"Texto longo\", 7))\r\nescreva(esquerda(\"Texto\", 7))\r\nnova_linha()\r\n\r\n\r\n/*\r\n\tdireita(texto, contagem)\r\n\tRetorna até 'contagem' caracteres mais à esquerda do texto.\r\n*/\r\nescreva(\">>> direita(texto, contagem)\")\r\nescreva(direita(\"Texto longo\", 7))\r\nescreva(direita(\"Texto\", 7))\r\nnova_linha()\r\n\r\n\r\n/*\r\n\tmeio(texto, posição, contagem)\r\n\tRetorna até 'contagem' caracteres do texto a partir de dada posição.\r\n\tA posição é 0-indexada, então 0 é o começo do texto.\r\n*/\r\nescreva(\">>> meio(texto, posição, contagem)\")\r\nescreva(meio(\"ABCDEFG\", 0, 3))\r\nescreva(meio(\"ABCDEFG\", 2, 3))\r\nescreva(meio(\"ABCDEFG\", 2, 10))\r\nnova_linha()\r\n\r\n\r\n/*\r\n\tfatie_texto(texto, início, fim)\r\n\tRetorna todos os caracteres do texto entre as posições 'início' e 'fim'.\r\n\tPosições são 0-indexadas, então 0 é o começo do texto.\r\n*/\r\nescreva(\">>> fatie_texto(texto, início, fim)\")\r\nescreva(fatie_texto(\"ABCDEFG\", 0, 3))\r\nescreva(fatie_texto(\"ABCDEFG\", 2, 3))\r\nescreva(fatie_texto(\"ABCDEFG\", 2, 10))\r\nnova_linha()\r\n\r\n\r\n/*\r\n\tno_texto(texto, texto_buscado)\r\n\tRetorna um valor lógico indicando se 'texto_buscado' ocorre no texto.\r\n*/\r\nescreva(\">>> no_texto(texto, texto_buscado)\")\r\nescreva(no_texto(\"Este é um texto\", \"Este\"))\r\nescreva(no_texto(\"Este é um texto\", \"este\"))\r\nnova_linha()\r\n\r\n\r\n/*\r\n\tposição(texto, texto_buscado)\r\n\tRetorna a posição da primeira ocorrência de 'texto_buscado' no texto.\r\n\tA posição retornada é 0-indexada, então 0 é o começo do texto.\r\n\tRetorna -1 se 'texto_buscado' não ocorre no texto.\r\n*/\r\nescreva(\">>> posição(texto, texto_buscado)\")\r\nescreva(posição(\"Este é um texto\", \"Este\"))\r\nescreva(posição(\"Este é um texto\", \"este\"))\r\nnova_linha()\r\n\r\n\r\n/*\r\n\tpreencha_esquerda(texto, comprimeiro, preenchimento)\r\n\tPreencha o dado texto usando 'preenchimento' até o 'comprimento' desejado.\r\n\tO 'preenchimento' é inserido à esquerda do texto.\r\n*/\r\nescreva(\">>> preencha_esquerda(texto, comprimeiro, preenchimento)\")\r\nescreva(preencha_esquerda(\"12345\", 8, \"0\"))\r\nescreva(preencha_esquerda(\"12345\", 10, \"ab\"))\r\nnova_linha()\r\n\r\n\r\n/*\r\n\tpreencha_direita(texto, comprimeiro, preenchimento)\r\n\tPreencha o dado texto usando 'preenchimento' até o 'comprimento' desejado.\r\n\tO 'preenchimento' é inserido à direita do texto.\r\n*/\r\nescreva(\">>> preencha_direita(texto, comprimeiro, preenchimento)\")\r\nescreva(preencha_direita(\"12345\", 8, \"0\"))\r\nescreva(preencha_direita(\"12345\", 10, \"ab\"))\r\nnova_linha()\r\n\r\n\r\n/*\r\n\trepita(texto, contagem)\r\n\tRepete o dado texto 'contagem' vezes.\r\n*/\r\nescreva(\">>> repita(texto, contagem)\")\r\nescreva(repita(\"a\", 5))\r\nescreva(repita(\"abc\", 2))\r\nnova_linha()\r\n\r\n\r\n/*\r\n\tinverta_texto(texto)\r\n\tRetorna o texto com todos os caracteres em ordem contrária.\r\n*/\r\nescreva(\">>> inverta_texto(texto)\")\r\nescreva(inverta_texto(\"Olá\"))\r\nnova_linha()\r\n\r\n\r\n/*\r\n\taparar(texto)\r\n\tRetorna o texto sem espaços em branco no começo e no fim.\r\n*/\r\nescreva(\">>> aparar(texto)\")\r\nescreva(\"'\" + aparar(\" Olá \") + \"'\")\r\nnova_linha()\r\n\r\n\r\n/*\r\n\taparar_esquerda(texto)\r\n\tRetorna o texto sem espaços em branco no começo.\r\n*/\r\nescreva(\">>> aparar_esquerda(texto)\")\r\nescreva(\"'\" + aparar_esquerda(\" Olá \") + \"'\")\r\nnova_linha()\r\n\r\n\r\n/*\r\n\taparar_direita(texto)\r\n\tRetorna o texto sem espaços em branco no fim.\r\n*/\r\nescreva(\">>> aparar_direita(texto)\")\r\nescreva(\"'\" + aparar_direita(\" Olá \") + \"'\")\r\nnova_linha()");

/***/ })

}]);