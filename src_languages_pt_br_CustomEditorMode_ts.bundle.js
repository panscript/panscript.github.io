"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_pt_br_CustomEditorMode_ts"],{

/***/ "./src/languages/pt_br/CustomEditorMode.ts":
/*!*************************************************!*\
  !*** ./src/languages/pt_br/CustomEditorMode.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModeFactory": () => (/* binding */ ModeFactory)
/* harmony export */ });
/* harmony import */ var _common_CommonEditorMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/CommonEditorMode */ "./src/languages/common/CommonEditorMode.ts");
/* harmony import */ var _CustomLocalizedStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomLocalizedStrings */ "./src/languages/pt_br/CustomLocalizedStrings.ts");


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

/***/ "./src/languages/pt_br/CustomLocalizedStrings.ts":
/*!*******************************************************!*\
  !*** ./src/languages/pt_br/CustomLocalizedStrings.ts ***!
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
    _this.PANSCRIPT_HEADLINE = "PanScript – programe no seu idioma";
    _this.LANGUAGE_SELECT_PROMPT = "Idioma:";
    _this.THEME_SELECT_PROMPT = "Tema:";
    _this.RUN_BUTTON_LABEL = "Executar";
    _this.UNDO_BUTTON_LABEL = "Desfazer";
    _this.REDO_BUTTON_LABEL = "Refazer";
    _this.RELOAD_BUTTON_LABEL = "Recarregar";
    _this.SAVE_BUTTON_LABEL = "Salvar";
    _this.LOAD_BUTTON_LABEL = "Carregar";
    _this.CLEAR_BUTTON_LABEL = "Limpar";
    _this.EXPLORER_FOLDER_YOUR_FILES = "Seus Arquivos";
    _this.EXPLORER_FOLDER_EXAMPLES = "Exemplos";
    _this.EXPLORER_FOLDER_BASICS = "1 - Básico";
    _this.EXPLORER_FOLDER_STANDARD_FUNCTIONS = "2 - Funções Padrão";
    _this.EXPLORER_FOLDER_EXPRESSIONS = "3 - Expressões";
    _this.EXPLORER_FOLDER_CONDITIONALS = "4 - Condicionais";
    _this.EXPLORER_FOLDER_LOOPS = "5 - Loops";
    _this.EXPLORER_FOLDER_USER_FUNCTIONS = "6 - Funções de Usuário";
    _this.EXPLORER_FILE_MAIN = "Principal";
    _this.EXPLORER_FILE_VARIABLES = "Variáveis";
    _this.EXPLORER_FILE_TYPES = "Tipos";
    _this.EXPLORER_FILE_CONSTANTS = "Constantes";
    _this.EXPLORER_FILE_TEXT_INTERPOLATION = "Interpolação de Texto";
    _this.EXPLORER_FILE_CONSOLE_FUNCTIONS = "Funções de Console";
    _this.EXPLORER_FILE_TEXT_FUNCTIONS = "Funções de Texto";
    _this.EXPLORER_FILE_MATH_FUNCTIONS = "Funções Matemáticas";
    _this.EXPLORER_FILE_EXPRESSIONS = "Expressões";
    _this.EXPLORER_FILE_IF = "Se";
    _this.EXPLORER_FILE_ELSE = "Senão";
    _this.EXPLORER_FILE_ELSE_IF = "Senão Se";
    _this.EXPLORER_FILE_LOOPS = "Loops";
    _this.EXPLORER_FILE_BREAK_AND_CONTINUE = "Interrompa e Continue";
    _this.EXPLORER_FILE_FUNCTIONS = "Funções";
    _this.EXPLORER_FILE_RECURSION = "Recursão";
    _this.KEYWORD_TRUE = "verdadeiro";
    _this.KEYWORD_FALSE = "falso";
    _this.KEYWORD_BREAK = "interrompa";
    _this.KEYWORD_CONSTANT = "constante";
    _this.KEYWORD_CONTINUE = "continue";
    _this.KEYWORD_ELSE = "senão";
    _this.KEYWORD_END = "fim";
    _this.KEYWORD_FOR = "para";
    _this.KEYWORD_FOREVER = "para sempre";
    _this.KEYWORD_FUNCTION = "função";
    _this.KEYWORD_GLOBAL = "global";
    _this.KEYWORD_IF = "se";
    _this.KEYWORD_IN = "em";
    _this.KEYWORD_RETURN = "retorne";
    _this.KEYWORD_RETURNS = "retorna";
    _this.KEYWORD_WHILE = "enquanto";
    _this.KEYWORD_NOT = "não";
    _this.KEYWORD_AND = "e";
    _this.KEYWORD_OR = "ou";
    _this.KEYWORD_TYPES = {
      logical: "lógico",
      number: "número",
      text: "texto",
      list: "lista",
      none: "nenhum",
      any: "qualquer",
      "...T": "...T"
    };
    _this.FUNCTION_WRITE = "escreva";
    _this.FUNCTION_WRITE_INLINE = "escreva_na_linha";
    _this.FUNCTION_NEW_LINE = "nova_linha";
    _this.FUNCTION_CLEAR = "limpe";
    _this.FUNCTION_TO_TEXT = "para_texto";
    _this.FUNCTION_PAD_LEFT = "preencha_esquerda";
    _this.FUNCTION_PAD_RIGHT = "preencha_direita";
    _this.FUNCTION_LENGTH = "comprimento";
    _this.FUNCTION_REPEAT = "repita";
    _this.FUNCTION_UPPER_CASE = "maiúsculas";
    _this.FUNCTION_LOWER_CASE = "minúsculas";
    _this.FUNCTION_SENTENCE_CASE = "sentença";
    _this.FUNCTION_LEFT = "esquerda";
    _this.FUNCTION_RIGHT = "direita";
    _this.FUNCTION_MIDDLE = "meio";
    _this.FUNCTION_SLICE_TEXT = "fatie_texto";
    _this.FUNCTION_REVERSE_TEXT = "inverta_texto";
    _this.FUNCTION_SPLIT = "quebre";
    _this.FUNCTION_IN_TEXT = "no_texto";
    _this.FUNCTION_POSITION = "posição";
    _this.FUNCTION_TRIM = "aparar";
    _this.FUNCTION_TRIM_LEFT = "aparar_esquerda";
    _this.FUNCTION_TRIM_RIGHT = "aparar_direita";
    _this.FUNCTION_PI = "pi";
    _this.FUNCTION_ABSOLUTE = "absoluto";
    _this.FUNCTION_POWER = "potência";
    _this.FUNCTION_SQUARE_ROOT = "raiz_quadrada";
    _this.FUNCTION_SINE = "seno";
    _this.FUNCTION_COSINE = "cosseno";
    _this.FUNCTION_TANGENT = "tangente";
    _this.FUNCTION_ARC_SINE = "arco_seno";
    _this.FUNCTION_ARC_COSINE = "arco_cosseno";
    _this.FUNCTION_ARC_TANGENT = "arco_tangente";
    _this.FUNCTION_EXPONENTIAL = "exponencial";
    _this.FUNCTION_NATURAL_LOGARITHM = "logaritmo_natural";
    _this.FUNCTION_LOGARITHM = "logaritmo";
    _this.FUNCTION_FLOOR = "piso";
    _this.FUNCTION_CEILING = "teto";
    _this.FUNCTION_TRUNCATE = "trunque";
    _this.FUNCTION_MINIMUM = "mínimo";
    _this.FUNCTION_MAXIMUM = "máximo";
    _this.FUNCTION_RANDOM_REAL = "real_aleatório";
    _this.FUNCTION_RANDOM_INTEGER = "inteiro_aleatório";
    _this.FUNCTION_ROUND = "arredonde";
    _this.FUNCTION_ROUND_N_PLACES = "arredonde_n_casas";
    _this.FUNCTION_TRUNCATE_N_PLACES = "trunque_n_casas";
    _this.FUNCTION_LIST = "lista";
    _this.FUNCTION_IS_EMPTY = "está_vazia";
    _this.FUNCTION_COUNT = "contagem";
    _this.FUNCTION_HEAD = "cabeça";
    _this.FUNCTION_TAIL = "cauda";
    _this.FUNCTION_FIRST_N = "primeiros_n";
    _this.FUNCTION_LAST_N = "últimos_n";
    _this.FUNCTION_IN_LIST = "na_lista";
    _this.FUNCTION_COUNT_OCCURRENCES = "conte_ocorrências";
    _this.FUNCTION_REMOVE = "remova";
    _this.FUNCTION_APPEND = "acrescente";
    _this.FUNCTION_JOIN = "junte";
    _this.FUNCTION_MINIMUM_ELEMENT = "elemento_mínimo";
    _this.FUNCTION_MAXIMUM_ELEMENT = "elemento_máximo";
    _this.FUNCTION_SORT = "ordene";
    _this.FUNCTION_REVERSE = "inverta";
    _this.FUNCTION_UNIQUE = "único";
    _this.FUNCTION_SLICE = "fatie_lista";
    _this.FUNCTION_SUM = "some";
    _this.FUNCTION_RANGE = "intervalo";
    _this.FUNCTION_ELEMENT_AT = "elemento_em";
    _this.FUNCTION_REMOVE_AT = "remova_em";
    _this.FUNCTION_RANDOM_ELEMENT = "elemento_aleatório";
    _this.FUNCTION_AVERAGE = "média";
    _this.FUNCTION_MEDIAN = "mediana";
    _this.FUNCTION_MODE = "moda";
    _this.FUNCTION_SHUFFLE = "embaralhe";
    _this.ERROR = "Erro";
    _this.ERROR_MESSAGE_END_OF_CODE_TOKEN = "o fim do código";
    _this.ERROR_MESSAGE_END_OF_LINE_TOKEN = "o fim da linha";
    _this.ERROR_MESSAGE_EMPTY_LIST = "Erro: a lista está vazia";
    _this.ERROR_MESSAGE_TEMPLATE_INDEX_OUT_OF_BOUNDS = "Erro: a lista não contém um item na posição ${position}";
    _this.ERROR_MESSAGE_TEMPLATE_UNKNOWN_TOKEN = "Erro: Não consegui entender o código na linha ${line}, coluna ${charPositionInLine}";
    _this.ERROR_MESSAGE_TEMPLATE_INVALID_SYNTAX = "Erro na linha ${line}:\r\nNão esperava encontrar ${symbolDescription}";
    _this.ERROR_MESSAGE_TEMPLATE_NAME_ALREADY_DEFINED = "Erro na linha ${line}:\r\nO identificador de nome ${name} está sendo definido uma segunda vez";
    _this.ERROR_MESSAGE_TEMPLATE_TYPE_MISMATCH = "Erro na linha ${line}:\r\nEsperava que o tipo de ${name} fosse ${expectedType}, mas era ${actualType}";
    _this.ERROR_MESSAGE_TEMPLATE_CONSTANT_REASSIGNMENT = 'Erro na linha ${line}:\r\nNão posso alterar o valor de ${name} porque foi declarado como "${constantKeyword}"';
    _this.ERROR_MESSAGE_TEMPLATE_UNDECLARED_IDENTIFIER = "Erro na linha ${line}:\r\nNão pude encontrar o identificador de nome ${name} no escopo atual";
    _this.ERROR_MESSAGE_GLOBAL_HINT = '\r\nPara acessar uma variável global dentro de uma função, vincule-a usando a palavra-chave "${globalKeyword}":\r\n${globalKeyword} ${name}';
    _this.ERROR_MESSAGE_WRITE_HINT = "\r\nTalvez você tenha tentado usar a função ${write}() ou ${write_inline}()?";
    return _this;
  }

  return CustomLocalizedStrings;
}(_common_CommonLocalizedStrings__WEBPACK_IMPORTED_MODULE_4__.CommonLocalizedStrings);

/***/ })

}]);