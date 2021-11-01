"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_fr_fr_code_samples_break_continue_fr_fr_pan"],{

/***/ "./src/languages/fr_fr/code_samples/break_continue.fr_fr.pan":
/*!*******************************************************************!*\
  !*** ./src/languages/fr_fr/code_samples/break_continue.fr_fr.pan ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nIl y a au moins trois façons d'interrompre une boucle.\r\n\r\ninterromps quitte la boucle et l'exécution suit après sa fin.\r\ncontinue saute l'itération actuelle, mais continue à l'intérieur de la boucle. \r\n\r\nDans une fonction, vous pouvez également arrêter une boucle à l'aide\r\nde la commande retourne (plus sur ceci ci-dessous).\r\n\r\n*/\r\n\r\necrire(\"Debut de la boucle\")\r\n\r\nnombre i = 0\r\npour toujours\r\n\ti += 1\r\n\r\n\t// Interrompre la boucle après 10 itérations\r\n\tsi i > 10\r\n\t\tinterromps\r\n\tfin\r\n\r\n\t// Soute les multiples de trois\r\n\tsi i % 3 == 0\r\n\t\tcontinue\r\n\tfin\r\n\r\n\tecrire(i)\r\nfin\r\n\r\necrire(\"Fin de la boucle\")");

/***/ })

}]);