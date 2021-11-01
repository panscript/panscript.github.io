"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_fr_fr_code_samples_variables_fr_fr_pan"],{

/***/ "./src/languages/fr_fr/code_samples/variables.fr_fr.pan":
/*!**************************************************************!*\
  !*** ./src/languages/fr_fr/code_samples/variables.fr_fr.pan ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nLes variables sont déclarées comme suit :\r\ntype nom = valeur\r\n\r\noù :\r\n- le type peut être texte, nombre ou logique (plus de détails ci-dessous) ;\r\n- le nom doit commencer par une lettre ou un trait de soulignement ;\r\n- le nom peut contenir des lettres, des soulignements et des chiffres ;\r\n- la valeur doit avoir le type déclaré.\r\n\r\n*/\r\n\r\n// Exemples\r\ntexte nom = \"Jean Pierre François\"\r\ntexte adresse = \"42, rue calme\"\r\nnombre âge = 18\r\nnombre solde_en_compte = -100.25\r\nlogique dort = faux\r\nlogique est_en_train_détudier = vrai\r\n\r\n\r\n// Vous pouvez utiliser des noms de variables pour référencer leurs valeurs.\r\necrire(nom)\r\necrire(âge)\r\necrire(solde_en_compte)\r\necrire(est_en_train_détudier)\r\nnouvelle_ligne()\r\n\r\n\r\n// Vous pouvez attribuer de nouvelles valeurs aux variables\r\necrire(\"Fixer l'âge à 19 ans...\")\r\nâge = 19\r\necrire(âge)\r\nnouvelle_ligne()\r\n\r\n\r\n// Et utilisez-les dans des expressions (plus de détails ci-dessous)\r\necrire(\"Ajout de 100 BRL au solde du compte...\")\r\nsolde_en_compte = solde_en_compte + 100\r\necrire(solde_en_compte)\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\r\nMais vous ne pouvez pas déclarer deux fois la même variable,\r\nce qui explique pourquoi le code ci-dessous provoquerait une\r\nerreur s'il n'était pas dans ce bloc de commentaire :\r\n\r\nnombre âge = 19\r\n\r\n*/");

/***/ })

}]);