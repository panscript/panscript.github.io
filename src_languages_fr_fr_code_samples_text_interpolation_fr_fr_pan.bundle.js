"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_fr_fr_code_samples_text_interpolation_fr_fr_pan"],{

/***/ "./src/languages/fr_fr/code_samples/text_interpolation.fr_fr.pan":
/*!***********************************************************************!*\
  !*** ./src/languages/fr_fr/code_samples/text_interpolation.fr_fr.pan ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nParfois, vous souhaitez afficher une variable avec du texte.\r\n\r\nPar exemple, la variable \"nom\" peut être référencée dans le texte\r\n\"Salut, nom !\" pour afficher un message d'accueil personnalisé.\r\n\r\n\r\n*/\r\n\r\ntexte nom = \"Jean\"\r\nnombre âge = 12\r\n\r\n\r\n// Vous pouvez le faire en utilisant \"+\" pour concaténer des textes :\r\necrire(\"Salut, \" + nom + \" !\")\r\necrire(\"Vous avez \" + vers_texte(âge) + \" ans aujourd'hui.\")\r\nnouvelle_ligne()\r\n\r\n\r\n// Ou vous pouvez utiliser l'interpolation de texte, où les valeurs\r\n// entre accolades ({}) sont automatiquement converties en type de texte :\r\necrire(\"Salut, {nom} !\")\r\necrire(\"Vous avez {âge} ans aujourd'hui.\")\r\nnouvelle_ligne()\r\n\r\n\r\n// Vous pouvez également éviter d'utiliser l'interpolation de texte en\r\n// utilisant des guillemets simples (') au lieu de guillemets doubles (\") :\r\necrire('Salut, {nom} !')\r\necrire('Vous avez {âge} ans aujourd\\'hui.')");

/***/ })

}]);