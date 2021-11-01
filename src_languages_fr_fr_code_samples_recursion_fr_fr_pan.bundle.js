"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_fr_fr_code_samples_recursion_fr_fr_pan"],{

/***/ "./src/languages/fr_fr/code_samples/recursion.fr_fr.pan":
/*!**************************************************************!*\
  !*** ./src/languages/fr_fr/code_samples/recursion.fr_fr.pan ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nLa récursivité, c'est quand une fonction s'appelle elle-même.  Deux\r\nexemples pertinents sont les fonctions factorielles et de Fibonacci.\r\n\r\nLes implémentations ci-dessous ne prennent pas en charge les nombres\r\nnégatifs comme arguments. Les appeler avec un nombre négatif\r\nprovoquerait une boucle infinie.\r\n\r\n*/\r\n\r\nfonction factoriel(nombre n) renvoie nombre\r\n\tsi n == 0\r\n\t\tretourne 1\r\n\tfin\r\n\r\n\tretourne n * factoriel(n - 1)\r\nfin\r\n\r\necrire(\">>> factoriel(n)\")\r\necrire(factoriel(0))\r\necrire(factoriel(1))\r\necrire(factoriel(2))\r\necrire(factoriel(3))\r\necrire(factoriel(4))\r\necrire(factoriel(5))\r\necrire(factoriel(6))\r\necrire(factoriel(7))\r\nnouvelle_ligne()\r\n\r\n\r\nfonction fibonacci(nombre n) renvoie nombre\r\n\tsi n == 0\r\n\t\tretourne 0\r\n\tsinon si n == 1\r\n\t\tretourne 1\r\n\tfin\r\n\r\n\tretourne fibonacci(n - 1) + fibonacci(n - 2)\r\nfin\r\n\r\necrire(\">>> fibonacci(n)\")\r\necrire(fibonacci(0))\r\necrire(fibonacci(1))\r\necrire(fibonacci(2))\r\necrire(fibonacci(3))\r\necrire(fibonacci(4))\r\necrire(fibonacci(5))\r\necrire(fibonacci(6))\r\necrire(fibonacci(7))\r\nnouvelle_ligne()");

/***/ })

}]);