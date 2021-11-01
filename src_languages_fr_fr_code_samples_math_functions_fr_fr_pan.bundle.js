"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_fr_fr_code_samples_math_functions_fr_fr_pan"],{

/***/ "./src/languages/fr_fr/code_samples/math_functions.fr_fr.pan":
/*!*******************************************************************!*\
  !*** ./src/languages/fr_fr/code_samples/math_functions.fr_fr.pan ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// Les fonctions mathématiques sont des fonctions qui manipulent des variables et des valeurs numériques.\r\n\r\n/*\r\n\tabsolute(x)\r\n\tRenvoie la valeur absolue (magnitude) de x.\r\n\tSi x >= 0, renvoie x ; sinon, renvoie -x.\r\n*/\r\necrire(\">>> absolute(x)\")\r\necrire(absolute(10))\r\necrire(absolute(-10))\r\necrire(absolute(0))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\tminimum(x, y)\r\n\tRenvoie la plus petite valeur entre x et y.\r\n*/\r\necrire(\">>> minimum(x, y)\")\r\necrire(minimum(1, 2))\r\necrire(minimum(2, 1))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\tmaximum(x, y)\r\n\tRenvoie la plus grande valeur entre x et y.\r\n*/\r\necrire(\">>> maximum(x, y)\")\r\necrire(maximum(1, 2))\r\necrire(maximum(2, 1))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\tplancher(x)\r\n\tRenvoie le plus grand entier inférieur à x.\r\n*/\r\necrire(\">>> plancher(x)\")\r\necrire(plancher(0.5))\r\necrire(plancher(-0.5))\r\necrire(plancher(5.7))\r\necrire(plancher(-1.1))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\tplafond(x)\r\n\tRenvoie le plus petit entier supérieur à x.\r\n*/\r\necrire(\">>> plafond(x)\")\r\necrire(plafond(0.5))\r\necrire(plafond(-0.5))\r\necrire(plafond(5.7))\r\necrire(plafond(-1.1))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\tarrondir(x)\r\n\tRenvoie x arrondi à l'entier le plus proche.\r\n\tLe \"point du milieu\" (.5) est arrondi \"loin de zéro\".\r\n*/\r\necrire(\">>> arrondir(x)\")\r\necrire(arrondir(0.5))\r\necrire(arrondir(-0.5))\r\necrire(arrondir(5.7))\r\necrire(arrondir(-1.1))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\ttronquer(x)\r\n\tRenvoie la partie entière de x, sans aucune décimale.\r\n*/\r\necrire(\">>> tronquer(x)\")\r\necrire(tronquer(0.5))\r\necrire(tronquer(-0.5))\r\necrire(tronquer(5.7))\r\necrire(tronquer(-1.1))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\tarrondir_n_places(x, n)\r\n\tRenvoie x arrondi à n décimales.\r\n\tLe \"point du milieu\" (.5) est arrondi \"loin de zéro\".\r\n*/\r\necrire(\">>> arrondir_n_places(x, n)\")\r\necrire(arrondir_n_places(0.55, 1))\r\necrire(arrondir_n_places(pi() / 4, 2))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\ttronquer_n_places(x, n)\r\n\tRenvoie x tronqué à n décimales.\r\n*/\r\necrire(\">>> tronquer_n_places(x, n)\")\r\necrire(tronquer_n_places(0.55, 1))\r\necrire(tronquer_n_places(pi() / 4, 2))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\taleatoire_reel(a, b)\r\n\tRenvoie un nombre aléatoire réel entre a (inclus) et b (non inclus).\r\n*/\r\necrire(\">>> aleatoire_reel(a, b)\")\r\necrire(aleatoire_reel(0, 1))\r\necrire(aleatoire_reel(1, 100))\r\necrire(aleatoire_reel(1, 100))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\taleatoire_entier(a, b)\r\n\tRenvoie un nombre aléatoire entier entre a (inclus) et b (non inclus).\r\n*/\r\necrire(\">>> aleatoire_entier(a, b)\")\r\necrire(aleatoire_entier(0, 1))\r\necrire(aleatoire_entier(1, 100))\r\necrire(aleatoire_entier(1, 100))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\tracine_carree(x)\r\n\tRenvoie la racine carrée de x. Équivalent à la puissance(x, 1/2).\r\n*/\r\necrire(\">>> racine_carree(x)\")\r\necrire(racine_carree(9))\r\necrire(racine_carree(16))\r\necrire(puissance(16, 1/2))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\tpuissance(x, n)\r\n\tRenvoie x à la puissance n.\r\n*/\r\necrire(\">>> puissance(x, n)\")\r\necrire(puissance(2, 0))\r\necrire(puissance(2, 1))\r\necrire(puissance(2, 2))\r\necrire(puissance(2, 3))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\tlogarithme(x, b)\r\n\tRenvoie le logarithme de x en base b.\r\n\tLe résultat est l'exposant dans l'équation : (b^e = x).\r\n*/\r\necrire(\">>> logarithme(x, b)\")\r\necrire(logarithme(8, 2))\r\necrire(logarithme(100, 10))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\tpi()\r\n\tRenvoie une approximation de la constante Pi.\r\n*/\r\necrire(\">>> pi()\")\r\necrire(pi())\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\tsinus(x)\r\n\tRenvoie le sinus de x.\r\n\tx doit être en radians.\r\n*/\r\necrire(\">>> sinus(x)\")\r\necrire(sinus(pi() / 2))\r\necrire(sinus(-pi() / 2))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\tcosinus(x)\r\n\tRenvoie le cosinus de x.\r\n\tx doit être en radians.\r\n*/\r\necrire(\">>> cosinus(x)\")\r\necrire(cosinus(0))\r\necrire(cosinus(pi()))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\ttangente(x)\r\n\tRenvoie la tangente de x.\r\n\tx doit être en radians.\r\n*/\r\necrire(\">>> tangente(x)\")\r\necrire(tangente(1))\r\necrire(tangente(2))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\tarc_sinus(x)\r\n\tRenvoie l'arc sinus de x. L'inverse du sinus.\r\n\tLe résultat est en radians.\r\n*/\r\necrire(\">>> arc_sinus(x)\")\r\necrire(arc_sinus(1))\r\necrire(arc_sinus(-1))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\tarc_cosinus(x)\r\n\tRenvoie l'arc cosinus de x. L'inverse du cosinus.\r\n\tLe résultat est en radians.\r\n*/\r\necrire(\">>> arc_cosinus(x)\")\r\necrire(arc_cosinus(1))\r\necrire(arc_cosinus(-1))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\tarc_tangente(x)\r\n\tRenvoie l'arc tangente de x. L'inverse de la tangente.\r\n\tLe résultat est en radians.\r\n*/\r\necrire(\">>> arc_tangente(x)\")\r\necrire(arc_tangente(1))\r\necrire(arc_tangente(-1))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\texponentielx)\r\n\tRenvoie l'exponentielle de x.\r\n\texponentiel(1) est le nombre d'Euler.\r\n*/\r\necrire(\">>> exponentiel(x)\")\r\necrire(exponentiel(0.5))\r\necrire(exponentiel(1))\r\necrire(exponentiel(2))\r\nnouvelle_ligne()\r\n\r\n\r\n/*\r\n\tlogarithme_naturel(x)\r\n\tRenvoie le logarithme népérien de x. L'inverse de l'exponentielle.\r\n*/\r\necrire(\">>> logarithme_naturel(x)\")\r\necrire(logarithme_naturel(0.5))\r\necrire(logarithme_naturel(1))\r\necrire(logarithme_naturel(2))\r\nnouvelle_ligne()");

/***/ })

}]);