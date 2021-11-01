"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_fr_fr_CustomEditorMode_ts"],{

/***/ "./src/languages/fr_fr/CustomEditorMode.ts":
/*!*************************************************!*\
  !*** ./src/languages/fr_fr/CustomEditorMode.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModeFactory": () => (/* binding */ ModeFactory)
/* harmony export */ });
/* harmony import */ var _common_CommonEditorMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/CommonEditorMode */ "./src/languages/common/CommonEditorMode.ts");
/* harmony import */ var _CustomLocalizedStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomLocalizedStrings */ "./src/languages/fr_fr/CustomLocalizedStrings.ts");


var localizedStrings = new _CustomLocalizedStrings__WEBPACK_IMPORTED_MODULE_1__.CustomLocalizedStrings();
var modeOptions = {
  reservedWordsToStyles: _common_CommonEditorMode__WEBPACK_IMPORTED_MODULE_0__.makeReservedWordsToStyles(localizedStrings),
  bracketRegExp: new RegExp("[" + _common_CommonEditorMode__WEBPACK_IMPORTED_MODULE_0__.escapeRegExpChars("{}[]()") + "]"),
  operatorRegExp: new RegExp("[" + _common_CommonEditorMode__WEBPACK_IMPORTED_MODULE_0__.escapeRegExpChars("=><!&|+-*/^%.") + "]"),
  decimalNumberRegExp: new RegExp("(?:(?:\\d+\\.?)|(?:\\d*\\.\\d+))(?:e[+-]?\\d+)?", "i"),
  hexNumberRegExp: new RegExp("0x[0-9a-f]+", "i"),
  binaryNumberRegExp: new RegExp("0b[01]+", "i"),
  identifierRegExp: new RegExp("[a-z\xC0-\xFF_][a-z\xC0-\xFF0-9_]*", "iu")
};
var ModeFactory = function ModeFactory() {
  return _common_CommonEditorMode__WEBPACK_IMPORTED_MODULE_0__.makeModeFactory(modeOptions);
};

/***/ }),

/***/ "./src/languages/fr_fr/CustomLocalizedStrings.ts":
/*!*******************************************************!*\
  !*** ./src/languages/fr_fr/CustomLocalizedStrings.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomLocalizedStrings": () => (/* binding */ CustomLocalizedStrings)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _common_CommonLocalizedStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/CommonLocalizedStrings */ "./src/languages/common/CommonLocalizedStrings.ts");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var CustomLocalizedStrings = /*#__PURE__*/function (_CommonLocalizedStrin) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomLocalizedStrings, _CommonLocalizedStrin);

  var _super = _createSuper(CustomLocalizedStrings);

  function CustomLocalizedStrings() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomLocalizedStrings);

    _this = _super.apply(this, arguments);
    _this.PANSCRIPT_HEADLINE = "PanScript – programme dans votre langue";
    _this.LANGUAGE_SELECT_PROMPT = "Langue:";
    _this.THEME_SELECT_PROMPT = "Thème:";
    _this.RUN_BUTTON_LABEL = "Éxécuter";
    _this.UNDO_BUTTON_LABEL = "Anuler";
    _this.REDO_BUTTON_LABEL = "Refaire";
    _this.RELOAD_BUTTON_LABEL = "Recharger";
    _this.SAVE_BUTTON_LABEL = "Enregistrer";
    _this.LOAD_BUTTON_LABEL = "Télécharger";
    _this.CLEAR_BUTTON_LABEL = "Effacer";
    _this.EXPLORER_FOLDER_YOUR_FILES = "Vos Fichiers";
    _this.EXPLORER_FOLDER_EXAMPLES = "Exemples";
    _this.EXPLORER_FOLDER_BASICS = "1 - Basique";
    _this.EXPLORER_FOLDER_STANDARD_FUNCTIONS = "2 - Fonctions standard";
    _this.EXPLORER_FOLDER_EXPRESSIONS = "3 - Expressions";
    _this.EXPLORER_FOLDER_CONDITIONALS = "4 - Conditionnels";
    _this.EXPLORER_FOLDER_LOOPS = "5 - Boucles";
    _this.EXPLORER_FOLDER_USER_FUNCTIONS = "6 - Fonctions d'utilisateur";
    _this.EXPLORER_FILE_MAIN = "Principale";
    _this.EXPLORER_FILE_VARIABLES = "Variables";
    _this.EXPLORER_FILE_TYPES = "Types";
    _this.EXPLORER_FILE_CONSTANTS = "Constantes";
    _this.EXPLORER_FILE_TEXT_INTERPOLATION = "Interpolation de texte";
    _this.EXPLORER_FILE_CONSOLE_FUNCTIONS = "Fonctions de la console";
    _this.EXPLORER_FILE_TEXT_FUNCTIONS = "Fonctions de texte";
    _this.EXPLORER_FILE_MATH_FUNCTIONS = "Fonctions mathematiques";
    _this.EXPLORER_FILE_EXPRESSIONS = "Expressions";
    _this.EXPLORER_FILE_IF = "Si";
    _this.EXPLORER_FILE_ELSE = "Sinon";
    _this.EXPLORER_FILE_ELSE_IF = "Sinon si";
    _this.EXPLORER_FILE_LOOPS = "Boucles";
    _this.EXPLORER_FILE_BREAK_AND_CONTINUE = "Arrêter et Continuer";
    _this.EXPLORER_FILE_FUNCTIONS = "Fonctions";
    _this.EXPLORER_FILE_RECURSION = "Recursion";
    _this.KEYWORD_TRUE = "vrai";
    _this.KEYWORD_FALSE = "faux";
    _this.KEYWORD_BREAK = "interromps";
    _this.KEYWORD_CONSTANT = "constant";
    _this.KEYWORD_CONTINUE = "continue";
    _this.KEYWORD_ELSE = "sinon";
    _this.KEYWORD_END = "fin";
    _this.KEYWORD_FOR = "pour";
    _this.KEYWORD_FOREVER = "pour toujours";
    _this.KEYWORD_FROM = "de";
    _this.KEYWORD_FUNCTION = "fonction";
    _this.KEYWORD_GLOBAL = "global";
    _this.KEYWORD_IF = "si";
    _this.KEYWORD_IN = "en";
    _this.KEYWORD_RETURN = "retourne";
    _this.KEYWORD_RETURNS = "renvoie";
    _this.KEYWORD_TO = "jusqua";
    _this.KEYWORD_WHILE = "tant que";
    _this.KEYWORD_NOT = "non";
    _this.KEYWORD_AND = "et";
    _this.KEYWORD_OR = "ou";
    _this.KEYWORD_TYPES = {
      logical: "logique",
      number: "nombre",
      text: "texte",
      none: "rien",
      any: "tout",
      "...T": "...T"
    };
    _this.FUNCTION_WRITE = "ecrire";
    _this.FUNCTION_WRITE_INLINE = "ecrire_dans_la_ligne";
    _this.FUNCTION_NEW_LINE = "nouvelle_ligne";
    _this.FUNCTION_CLEAR = "nettoyer";
    _this.FUNCTION_TO_TEXT = "vers_texte";
    _this.FUNCTION_PAD_LEFT = "remplir_gauche";
    _this.FUNCTION_PAD_RIGHT = "remplir_droite";
    _this.FUNCTION_LENGTH = "longueur";
    _this.FUNCTION_REPEAT = "repeter";
    _this.FUNCTION_UPPER_CASE = "majuscule";
    _this.FUNCTION_LOWER_CASE = "minuscule";
    _this.FUNCTION_SENTENCE_CASE = "phrase";
    _this.FUNCTION_LEFT = "gauche";
    _this.FUNCTION_RIGHT = "droite";
    _this.FUNCTION_MIDDLE = "milieu";
    _this.FUNCTION_SLICE_TEXT = "trancher_le_texte";
    _this.FUNCTION_REVERSE_TEXT = "inverser_le_texte";
    _this.FUNCTION_IN_TEXT = "dans_le_texte";
    _this.FUNCTION_POSITION = "position";
    _this.FUNCTION_TRIM = "couper";
    _this.FUNCTION_TRIM_LEFT = "couper_gauche";
    _this.FUNCTION_TRIM_RIGHT = "couper_droite";
    _this.FUNCTION_PI = "pi";
    _this.FUNCTION_ABSOLUTE = "absolute";
    _this.FUNCTION_POWER = "puissance";
    _this.FUNCTION_SQUARE_ROOT = "racine_carree";
    _this.FUNCTION_SINE = "sinus";
    _this.FUNCTION_COSINE = "cosinus";
    _this.FUNCTION_TANGENT = "tangente";
    _this.FUNCTION_ARC_SINE = "arc_sinus";
    _this.FUNCTION_ARC_COSINE = "arc_cosinus";
    _this.FUNCTION_ARC_TANGENT = "arc_tangente";
    _this.FUNCTION_EXPONENTIAL = "exponentiel";
    _this.FUNCTION_NATURAL_LOGARITHM = "logarithme_naturel";
    _this.FUNCTION_LOGARITHM = "logarithme";
    _this.FUNCTION_FLOOR = "plancher";
    _this.FUNCTION_CEILING = "plafond";
    _this.FUNCTION_TRUNCATE = "tronquer";
    _this.FUNCTION_MINIMUM = "minimum";
    _this.FUNCTION_MAXIMUM = "maximum";
    _this.FUNCTION_RANDOM_REAL = "aleatoire_reel";
    _this.FUNCTION_RANDOM_INTEGER = "aleatoire_entier";
    _this.FUNCTION_ROUND = "arrondir";
    _this.FUNCTION_ROUND_N_PLACES = "arrondir_n_places";
    _this.FUNCTION_TRUNCATE_N_PLACES = "tronquer_n_places";
    _this.ERROR = "Erreur";
    _this.ERROR_MESSAGE_END_OF_CODE_TOKEN = "la fin du code";
    _this.ERROR_MESSAGE_END_OF_LINE_TOKEN = "la fin de la ligne";
    _this.ERROR_MESSAGE_TEMPLATE_UNKNOWN_TOKEN = "Erreur: je n'ai pas compris le code de la ligne ${line}, colone ${charPositionInLine}";
    _this.ERROR_MESSAGE_TEMPLATE_INVALID_SYNTAX = "Erreur dans la ligne ${line}:\r\nJe ne m'attendais pas à trouver ${symbolDescription}";
    _this.ERROR_MESSAGE_TEMPLATE_NAME_ALREADY_DEFINED = "Erreur dans la ligne ${line}:\r\nL'identifiant qui porte le nom ${name} est défini une deuxième fois";
    _this.ERROR_MESSAGE_TEMPLATE_TYPE_MISMATCH = "Erreur dans la ligne ${line}:\r\nJe m'attendais que le type de ${name} soit ${expectedType}, mais c'était ${actualType}";
    _this.ERROR_MESSAGE_TEMPLATE_CONSTANT_REASSIGNMENT = 'Erreur dans la ligne ${line}:\r\nJe ne peux pas changer la valeur de ${name} parce que qu\'il a été declaré comme "${constantKeyword}"';
    _this.ERROR_MESSAGE_TEMPLATE_UNDECLARED_IDENTIFIER = "Erreur dans la ligne ${line}:\r\nJe n'ai pas trouvé l'identifiant avec le nom ${name} dans la portée actuelle";
    _this.ERROR_MESSAGE_TEMPLATE_ARGUMENTS_NUMBER = "Erreur dans la ligne ${line}:\r\nA função ${name} espera ${argumentsExpected} argumento(s), mas encontrei ${argumentsGiven} no lugar";
    _this.ERROR_MESSAGE_GLOBAL_HINT = '\r\nPour accéder à une variable globale dans une fonction, associez-la à l\'aide du mot-clé "${globalKeyword}":\r\n${globalKeyword} ${name}';
    _this.ERROR_MESSAGE_WRITE_HINT = "\r\nPeut-être avez-vous essayé d'utiliser la fonction ${write}() ou bien ${write_inline}()?";
    return _this;
  }

  return CustomLocalizedStrings;
}(_common_CommonLocalizedStrings__WEBPACK_IMPORTED_MODULE_4__.CommonLocalizedStrings);

/***/ })

}]);