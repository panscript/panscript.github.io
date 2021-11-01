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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nLes valeurs dans PanScript ont l'un des trois types primitifs :\r\n- texte\r\n- nombre\r\n- logique\r\n\r\n*/\r\n\r\n// Les valeurs textuelles sont entourées de guillemets doubles (\") ou de guillemets simples (')\r\ntexte nom = \"Jean\"\r\necrire(\"Ceci est un texte\")\r\necrire('Ceci est aussi un texte')\r\necrire(\"Ceci est \" + \"une expression textuelle\")\r\necrire(\"Ceci est du texte interpolé : {nom}\")\r\necrire('Ceci est du texte non interpolé : {nom}')\r\nnouvelle_ligne()\r\n\r\n// En savoir plus sur l'interpolation ci-dessous\r\n\r\n\r\n// Valeurs numériques\r\nconstant nombre PI = pi()\r\nconstant nombre TAU = PI * 2\r\necrire(42)\t\t\t// entier positif\r\necrire(-10)\t\t\t// nombre negatif\r\necrire(3.14)\t\t// nombre réel\r\necrire(.5)\t\t\t// partie entière facultative\r\necrire(12.)\t\t\t// partie fractionnaire facultative\r\necrire(0x0f)\t\t// nombre hexadécimal\r\necrire(0b101010)\t// nombre binaire\r\necrire(PI)\r\necrire(TAU)\r\nnouvelle_ligne()\r\n\r\n// plus sur les constantes ci-dessous\r\n\r\n// Valeurs logiques\r\nlogique x = vrai\r\nlogique y = faux\r\necrire(\"non vrai : {non vrai}\")\r\necrire(\"non faux : {non faux}\")\r\necrire(\"non x : {non x}\")\r\necrire(\"non y : {non y}\")\r\necrire(\"vrai et vrai : {vrai et vrai}\")\r\necrire(\"vrai et faux : {vrai et faux}\")\r\necrire(\"faux et vrai : {faux et vrai}\")\r\necrire(\"faux et faux : {faux et faux}\")\r\necrire(\"x et y : {x et y}\")\r\necrire(\"vrai ou vrai : {vrai ou vrai}\")\r\necrire(\"vrai ou faux : {vrai ou faux}\")\r\necrire(\"faux ou vrai : {faux ou vrai}\")\r\necrire(\"faux ou faux : {faux ou faux}\")\r\necrire(\"x ou y : {x ou y}\")\r\nnouvelle_ligne()\r\n\r\n// plus sur les expressions ci-dessous");

/***/ })

}]);