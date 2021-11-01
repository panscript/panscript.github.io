"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_fr_fr_code_samples_else_if_fr_fr_pan"],{

/***/ "./src/languages/fr_fr/code_samples/else_if.fr_fr.pan":
/*!************************************************************!*\
  !*** ./src/languages/fr_fr/code_samples/else_if.fr_fr.pan ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nLes commandes si prennent également en charge un ou plusieurs blocs \"sinon si\" facultatifs.\r\n\r\nLe code du bloc \"sinon si\" s'exécute si sa condition est vraie et toutes les conditions précédentes sont fausses.\r\n\r\nAvec un bloc \"sinon si\", la commande si peut être declarée comme suit :\r\nsi première_condition\r\n\t// code qui s'exécute si première_condition est vrai\r\nsinon si deuxième_condition\r\n\t// code qui s'exécute si first_condition est fausse\r\n\t// et la deuxième_condition est vrai\r\nfin\r\n\r\nOu avec plusieurs blocs sinon si, et aussi un sinon :\r\nsi première_condition\r\n\t// code qui s'exécute si première_condition est vrai\r\nsinon si deuxième_condition\r\n\t// code qui s'exécute si first_condition est fausse\r\n\t// et la deuxième_condition est vrai\r\nsinon si troisième_condition\r\n\t// code qui s'exécute si la première et deuxième conditions sont fausses et la troisième_condition est vrai\r\nsinon\r\n\t// code qui s'exécute si aucune condition n'est vraie\r\nfin\r\n*/\r\n\r\n// L'exemple ci-dessous simule un dé à six faces\r\n// et écrit un message basé sur la valeur roulée\r\n\r\n// Notez que le deuxième paramètre est la limite + 1\r\nnombre dé = aleatoire_entier(1, 6+1)\r\n\r\necrire(dé)\r\n\r\nsi dé >= 5\r\n\tecrire(\"Super lancer du dé !\")\r\nsinon si dé <= 2\r\n\tecrire(\"Mauvais lancer !\")\r\nsinon\r\n\tecrire(\"Lancer OK\")\r\nfin\r\n\r\n// Exécutez cet exemple plusieurs fois pour obtenir\r\n// des résultats différents");

/***/ })

}]);