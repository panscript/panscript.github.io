"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_fr_fr_code_samples_else_fr_fr_pan"],{

/***/ "./src/languages/fr_fr/code_samples/else.fr_fr.pan":
/*!*********************************************************!*\
  !*** ./src/languages/fr_fr/code_samples/else.fr_fr.pan ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nLes commandes si prennent en charge un bloc sinon facultatif.\r\n\r\nLe code du bloc sinon s'exécute si la condition est fausse.\r\n\r\nAvec un bloc sinon, la commande si est déclarée comme suit :\r\nsi condition\r\n\t// code qui s'exécute si la condition est vraie\r\nsinon\r\n\t// code qui s'exécute si la condition est fausse\r\nfin\r\n\r\n*/\r\n\r\n// L'exemple ci-dessous simule un dé à six faces\r\n// et écrit un message basé sur la valeur obtenue \r\n\r\n// Notez que le deuxième paramètre est la limite + 1\r\nnombre dé = aleatoire_entier(1, 6+1)\r\n\r\necrire(dé)\r\n\r\nsi dé >= 5\r\n\tecrire(\"Super lancer de dés !\")\r\nsinon\r\n\tecrire(\"Lancer OK\")\r\nfin\r\n\r\n// Exécutez cet exemple plusieurs fois pour obtenir\r\n// des résultats différents");

/***/ })

}]);