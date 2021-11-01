"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_fr_fr_code_samples_loops_fr_fr_pan"],{

/***/ "./src/languages/fr_fr/code_samples/loops.fr_fr.pan":
/*!**********************************************************!*\
  !*** ./src/languages/fr_fr/code_samples/loops.fr_fr.pan ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*\r\n\r\nLes boucles vous permettent de répéter l'exécution d'un bloc de code\r\njusqu'à ce qu'une condition l'arrête.\r\n\r\nLes boucles \"tant que\" sont déclarées comme suit :\r\ntant que condition\r\n\t// code qui s'exécute à plusieurs reprises\r\n\t// jusqu'à ce que la condition soit fausse \r\nfin\r\n\r\nLes boucles De-Jusqu'à sont déclarées comme suit :\r\npour nombre nom_variable de expression jusqua expression\r\n\t// code qui s'exécute à plusieurs reprises\r\nfin\r\n\r\nLes boucles \"pour toujours\" sont déclarées comme suit :\r\npour toujours\r\n\t// code qui s'exécute à plusieurs reprises\r\n\t// jusqu'à ce qu'il soit interrompu \r\nfin\r\n\r\n*/\r\n\r\n// Les boucles \"tant que\" s'exécutent jusqu'à ce que la condition testée soit fausse :\r\nnombre nombre_joueur = 1\r\ntant que nombre_joueur <= 4\r\n\tecrire(\"Joueur #{nombre_joueur} a entré !\")\r\n\tnombre_joueur += 1\r\nfin\r\nnouvelle_ligne()\r\n\r\n// Les boucles De-Jusqu'à se répètent une fois pour chaque valeur dans l'interval\r\n// en mettant à jour la variable déclarée à chaque itération :\r\necrire(\"Calculer les dix premiers multiples de trois\")\r\npour nombre x de 1 jusqua 10\r\n\tecrire(3 * x)\r\nfin\r\nnouvelle_ligne()\r\n\r\n// Les boucles \"pour toujours\" sont infinies, vous\r\n// devez donc les arrêter manuellement :\r\necrire(\"La partie va commencer\")\r\n\r\nnombre max_essais = 5\r\nnombre essais = 1\r\npour toujours\r\n\tnombre dé = aleatoire_entier(1, 6+1)\r\n\tecrire(\"Lancer {dé}\")\r\n\r\n\tsi dé == 6\r\n\t\ttexte nom_essais = \"essais\"\r\n\t\tecrire(\"Nous avons obtenu un 6 en {essais} {nom_essais} !\")\r\n\t\tinterromps  // quitter la boucle (plus de détails ci-dessous)\r\n\tfin\r\n\r\n\tessais += 1\r\n\r\n\tsi essais > max_essais\r\n\t\tecrire(\"Plus de chance la prochaine fois !\")\r\n\t\tinterromps  // quitter la boucle (plus de détails ci-dessous)\r\n\tfin\r\nfin\r\n\r\necrire(\"Fin de la partie\")");

/***/ })

}]);