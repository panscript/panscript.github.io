"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_pt_br_CustomVisitor_ts"],{

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
    _this.EXPLORER_FOLDER_EXAMPLES = "Examplos";
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

/***/ }),

/***/ "./src/languages/pt_br/CustomStandardLibrary.ts":
/*!******************************************************!*\
  !*** ./src/languages/pt_br/CustomStandardLibrary.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomStandardLibrary": () => (/* binding */ CustomStandardLibrary)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _CommonSymbolTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CommonSymbolTable */ "./src/languages/CommonSymbolTable.ts");
/* harmony import */ var _common_CommonStandardLibrary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/CommonStandardLibrary */ "./src/languages/common/CommonStandardLibrary.ts");
/* harmony import */ var _CustomLocalizedStrings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CustomLocalizedStrings */ "./src/languages/pt_br/CustomLocalizedStrings.ts");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var CustomStandardLibrary = /*#__PURE__*/function (_CommonStandardLibrar) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CustomStandardLibrary, _CommonStandardLibrar);

  var _super = _createSuper(CustomStandardLibrary);

  function CustomStandardLibrary() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomStandardLibrary);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomStandardLibrary, null, [{
    key: "getStandardLibrarySymbolTable",
    value: function getStandardLibrarySymbolTable() {
      var table = new _CommonSymbolTable__WEBPACK_IMPORTED_MODULE_6__.SymbolTable();
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getWriteDefinitionNode", this).call(this));
      table.pushNode(this.getWriteDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getWriteInlineDefinitionNode", this).call(this));
      table.pushNode(this.getWriteInlineDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getNewLineDefinitionNode", this).call(this));
      table.pushNode(this.getNewLineDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getClearDefinitionNode", this).call(this));
      table.pushNode(this.getClearDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getToTextDefinitionNode", this).call(this));
      table.pushNode(this.getToTextDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getPadLeftDefinitionNode", this).call(this));
      table.pushNode(this.getPadLeftDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getPadRightDefinitionNode", this).call(this));
      table.pushNode(this.getPadRightDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getLengthDefinitionNode", this).call(this));
      table.pushNode(this.getLengthDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRepeatDefinitionNode", this).call(this));
      table.pushNode(this.getRepeatDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getUpperCaseDefinitionNode", this).call(this));
      table.pushNode(this.getUpperCaseDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getLowerCaseDefinitionNode", this).call(this));
      table.pushNode(this.getLowerCaseDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getSentenceCaseDefinitionNode", this).call(this));
      table.pushNode(this.getSentenceCaseDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getLeftDefinitionNode", this).call(this));
      table.pushNode(this.getLeftDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRightDefinitionNode", this).call(this));
      table.pushNode(this.getRightDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getMiddleDefinitionNode", this).call(this));
      table.pushNode(this.getMiddleDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getSliceTextDefinitionNode", this).call(this));
      table.pushNode(this.getSliceTextDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getReverseTextDefinitionNode", this).call(this));
      table.pushNode(this.getReverseTextDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getSplitDefinitionNode", this).call(this));
      table.pushNode(this.getSplitDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getInTextDefinitionNode", this).call(this));
      table.pushNode(this.getInTextDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getPositionDefinitionNode", this).call(this));
      table.pushNode(this.getPositionDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getTrimDefinitionNode", this).call(this));
      table.pushNode(this.getTrimDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getTrimLeftDefinitionNode", this).call(this));
      table.pushNode(this.getTrimLeftDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getTrimRightDefinitionNode", this).call(this));
      table.pushNode(this.getTrimRightDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getPiDefinitionNode", this).call(this));
      table.pushNode(this.getPiDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getAbsoluteDefinitionNode", this).call(this));
      table.pushNode(this.getAbsoluteDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getPowerDefinitionNode", this).call(this));
      table.pushNode(this.getPowerDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getSquareRootDefinitionNode", this).call(this));
      table.pushNode(this.getSquareRootDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getSineDefinitionNode", this).call(this));
      table.pushNode(this.getSineDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getCosineDefinitionNode", this).call(this));
      table.pushNode(this.getCosineDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getTangentDefinitionNode", this).call(this));
      table.pushNode(this.getTangentDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getArcSineDefinitionNode", this).call(this));
      table.pushNode(this.getArcSineDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getArcCosineDefinitionNode", this).call(this));
      table.pushNode(this.getArcCosineDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getArcTangentDefinitionNode", this).call(this));
      table.pushNode(this.getArcTangentDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getExponentialDefinitionNode", this).call(this));
      table.pushNode(this.getExponentialDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getNaturalLogarithmDefinitionNode", this).call(this));
      table.pushNode(this.getNaturalLogarithmDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getLogarithmDefinitionNode", this).call(this));
      table.pushNode(this.getLogarithmDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getFloorDefinitionNode", this).call(this));
      table.pushNode(this.getFloorDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getCeilingDefinitionNode", this).call(this));
      table.pushNode(this.getCeilingDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getTruncateDefinitionNode", this).call(this));
      table.pushNode(this.getTruncateDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getMinimumDefinitionNode", this).call(this));
      table.pushNode(this.getMinimumDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getMaximumDefinitionNode", this).call(this));
      table.pushNode(this.getMaximumDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRandomRealDefinitionNode", this).call(this));
      table.pushNode(this.getRandomRealDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRandomIntegerDefinitionNode", this).call(this));
      table.pushNode(this.getRandomIntegerDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRoundDefinitionNode", this).call(this));
      table.pushNode(this.getRoundDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRoundNPlacesDefinitionNode", this).call(this));
      table.pushNode(this.getRoundNPlacesDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getTruncateNPlacesDefinitionNode", this).call(this));
      table.pushNode(this.getTruncateNPlacesDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getListDefinitionNode", this).call(this));
      table.pushNode(this.getListDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getIsEmptyDefinitionNode", this).call(this));
      table.pushNode(this.getIsEmptyDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getCountDefinitionNode", this).call(this));
      table.pushNode(this.getCountDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getHeadDefinitionNode", this).call(this));
      table.pushNode(this.getHeadDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getTailDefinitionNode", this).call(this));
      table.pushNode(this.getTailDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getFirstNDefinitionNode", this).call(this));
      table.pushNode(this.getFirstNDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getLastNDefinitionNode", this).call(this));
      table.pushNode(this.getLastNDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getInListDefinitionNode", this).call(this));
      table.pushNode(this.getInListDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getCountOccurrencesDefinitionNode", this).call(this));
      table.pushNode(this.getCountOccurrencesDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRemoveDefinitionNode", this).call(this));
      table.pushNode(this.getRemoveDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getAppendDefinitionNode", this).call(this));
      table.pushNode(this.getAppendDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getJoinDefinitionNode", this).call(this));
      table.pushNode(this.getJoinDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getMinimumElementDefinitionNode", this).call(this));
      table.pushNode(this.getMinimumElementDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getMaximumElementDefinitionNode", this).call(this));
      table.pushNode(this.getMaximumElementDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getSortDefinitionNode", this).call(this));
      table.pushNode(this.getSortDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getReverseDefinitionNode", this).call(this));
      table.pushNode(this.getReverseDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getUniqueDefinitionNode", this).call(this));
      table.pushNode(this.getUniqueDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getSliceDefinitionNode", this).call(this));
      table.pushNode(this.getSliceDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getSumDefinitionNode", this).call(this));
      table.pushNode(this.getSumDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRangeDefinitionNode", this).call(this));
      table.pushNode(this.getRangeDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getElementAtDefinitionNode", this).call(this));
      table.pushNode(this.getElementAtDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRemoveAtDefinitionNode", this).call(this));
      table.pushNode(this.getRemoveAtDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRandomElementDefinitionNode", this).call(this));
      table.pushNode(this.getRandomElementDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getAverageDefinitionNode", this).call(this));
      table.pushNode(this.getAverageDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getMedianDefinitionNode", this).call(this));
      table.pushNode(this.getMedianDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getModeDefinitionNode", this).call(this));
      table.pushNode(this.getModeDefinitionNode());
      table.pushNode((0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getShuffleDefinitionNode", this).call(this));
      table.pushNode(this.getShuffleDefinitionNode());
      return table;
    }
  }, {
    key: "getWriteDefinitionNode",
    value: function getWriteDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getWriteDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_WRITE;
      var toTextFunctionName = this.localizedStrings.FUNCTION_TO_TEXT;
      node.code = "\n      function ".concat(node.name, "(x) {\n        return __standard_write(").concat(toTextFunctionName, "(x));\n      }\n    ");
      return node;
    }
  }, {
    key: "getWriteInlineDefinitionNode",
    value: function getWriteInlineDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getWriteInlineDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_WRITE_INLINE;
      var toTextFunctionName = this.localizedStrings.FUNCTION_TO_TEXT;
      node.code = "\n      function ".concat(node.name, "(x) {\n        return __standard_write_inline(").concat(toTextFunctionName, "(x));\n      }\n    ");
      return node;
    }
  }, {
    key: "getNewLineDefinitionNode",
    value: function getNewLineDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getNewLineDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_NEW_LINE;
      node.code = "\n      function ".concat(node.name, "() {\n        return __standard_new_line();\n      }\n    ");
      return node;
    }
  }, {
    key: "getClearDefinitionNode",
    value: function getClearDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getClearDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_CLEAR;
      node.code = "\n      function ".concat(node.name, "() {\n        return __standard_clear();\n      }\n    ");
      return node;
    }
  }, {
    key: "getToTextDefinitionNode",
    value: function getToTextDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getToTextDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_TO_TEXT;
      node.code = "\n      function ".concat(node.name, "(x) {\n        if (x === true) {\n          return \"").concat(this.localizedStrings.KEYWORD_TRUE, "\";\n        }\n\n        if (x === false) {\n          return \"").concat(this.localizedStrings.KEYWORD_FALSE, "\";\n        }\n\n        return __standard_to_text(x);\n      }\n    ");
      return node;
    }
  }, {
    key: "getPadLeftDefinitionNode",
    value: function getPadLeftDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getPadLeftDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_PAD_LEFT;
      node.code = "\n      function ".concat(node.name, "(text, length, padding) {\n        return __standard_pad_left(text, length, padding);\n      }\n    ");
      return node;
    }
  }, {
    key: "getPadRightDefinitionNode",
    value: function getPadRightDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getPadRightDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_PAD_RIGHT;
      node.code = "\n      function ".concat(node.name, "(text, length, padding) {\n        return __standard_pad_right(text, length, padding);\n      }\n    ");
      return node;
    }
  }, {
    key: "getLengthDefinitionNode",
    value: function getLengthDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getLengthDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_LENGTH;
      node.code = "\n      function ".concat(node.name, "(text) {\n        return __standard_length(text);\n      }\n    ");
      return node;
    }
  }, {
    key: "getRepeatDefinitionNode",
    value: function getRepeatDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRepeatDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_REPEAT;
      node.code = "\n      function ".concat(node.name, "(text, count) {\n        return __standard_repeat(text, count);\n      }\n    ");
      return node;
    }
  }, {
    key: "getUpperCaseDefinitionNode",
    value: function getUpperCaseDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getUpperCaseDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_UPPER_CASE;
      node.code = "\n      function ".concat(node.name, "(text) {\n        return __standard_upper_case(text);\n      }\n    ");
      return node;
    }
  }, {
    key: "getLowerCaseDefinitionNode",
    value: function getLowerCaseDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getLowerCaseDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_LOWER_CASE;
      node.code = "\n      function ".concat(node.name, "(text) {\n        return __standard_lower_case(text);\n      }\n    ");
      return node;
    }
  }, {
    key: "getSentenceCaseDefinitionNode",
    value: function getSentenceCaseDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getSentenceCaseDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_SENTENCE_CASE;
      node.code = "\n      function ".concat(node.name, "(text) {\n        return __standard_sentence_case(text);\n      }\n    ");
      return node;
    }
  }, {
    key: "getLeftDefinitionNode",
    value: function getLeftDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getLeftDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_LEFT;
      node.code = "\n      function ".concat(node.name, "(text, count) {\n        return __standard_left(text, count);\n      }\n    ");
      return node;
    }
  }, {
    key: "getRightDefinitionNode",
    value: function getRightDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRightDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_RIGHT;
      node.code = "\n      function ".concat(node.name, "(text, count) {\n        return __standard_right(text, count);\n      }\n    ");
      return node;
    }
  }, {
    key: "getMiddleDefinitionNode",
    value: function getMiddleDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getMiddleDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_MIDDLE;
      node.code = "\n      function ".concat(node.name, "(text, position, count) {\n        return __standard_middle(text, position, count);\n      }\n    ");
      return node;
    }
  }, {
    key: "getSliceTextDefinitionNode",
    value: function getSliceTextDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getSliceTextDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_SLICE_TEXT;
      node.code = "\n      function ".concat(node.name, "(text, start, end) {\n        return __standard_slice_text(text, start, end);\n      }\n    ");
      return node;
    }
  }, {
    key: "getReverseTextDefinitionNode",
    value: function getReverseTextDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getReverseTextDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_REVERSE_TEXT;
      node.code = "\n      function ".concat(node.name, "(text) {\n        return __standard_reverse_text(text);\n      }\n    ");
      return node;
    }
  }, {
    key: "getSplitDefinitionNode",
    value: function getSplitDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getSplitDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_SPLIT;
      node.code = "\n      function ".concat(node.name, "(text, delimiter) {\n        return __standard_split(text, delimiter);\n      }\n    ");
      return node;
    }
  }, {
    key: "getInTextDefinitionNode",
    value: function getInTextDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getInTextDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_IN_TEXT;
      node.code = "\n      function ".concat(node.name, "(text, search_text) {\n        return __standard_in_text(text, search_text);\n      }\n    ");
      return node;
    }
  }, {
    key: "getPositionDefinitionNode",
    value: function getPositionDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getPositionDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_POSITION;
      node.code = "\n      function ".concat(node.name, "(text, search_text) {\n        return __standard_position(text, search_text);\n      }\n    ");
      return node;
    }
  }, {
    key: "getTrimDefinitionNode",
    value: function getTrimDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getTrimDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_TRIM;
      node.code = "\n      function ".concat(node.name, "(text) {\n        return __standard_trim(text);\n      }\n    ");
      return node;
    }
  }, {
    key: "getTrimLeftDefinitionNode",
    value: function getTrimLeftDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getTrimLeftDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_TRIM_LEFT;
      node.code = "\n      function ".concat(node.name, "(text) {\n        return __standard_trim_left(text);\n      }\n    ");
      return node;
    }
  }, {
    key: "getTrimRightDefinitionNode",
    value: function getTrimRightDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getTrimRightDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_TRIM_RIGHT;
      node.code = "\n      function ".concat(node.name, "(text) {\n        return __standard_trim_right(text);\n      }\n    ");
      return node;
    }
  }, {
    key: "getPiDefinitionNode",
    value: function getPiDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getPiDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_PI;
      node.code = "\n      function ".concat(node.name, "() {\n        return __standard_pi();\n      }\n    ");
      return node;
    }
  }, {
    key: "getAbsoluteDefinitionNode",
    value: function getAbsoluteDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getAbsoluteDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_ABSOLUTE;
      node.code = "\n      function ".concat(node.name, "(x) {\n        return __standard_absolute(x);\n      }\n    ");
      return node;
    }
  }, {
    key: "getPowerDefinitionNode",
    value: function getPowerDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getPowerDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_POWER;
      node.code = "\n      function ".concat(node.name, "(x, n) {\n        return __standard_power(x, n);\n      }\n    ");
      return node;
    }
  }, {
    key: "getSquareRootDefinitionNode",
    value: function getSquareRootDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getSquareRootDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_SQUARE_ROOT;
      node.code = "\n      function ".concat(node.name, "(x) {\n        return __standard_square_root(x);\n      }\n    ");
      return node;
    }
  }, {
    key: "getSineDefinitionNode",
    value: function getSineDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getSineDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_SINE;
      node.code = "\n      function ".concat(node.name, "(x) {\n        return __standard_sine(x);\n      }\n    ");
      return node;
    }
  }, {
    key: "getCosineDefinitionNode",
    value: function getCosineDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getCosineDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_COSINE;
      node.code = "\n      function ".concat(node.name, "(x) {\n        return __standard_cosine(x);\n      }\n    ");
      return node;
    }
  }, {
    key: "getTangentDefinitionNode",
    value: function getTangentDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getTangentDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_TANGENT;
      node.code = "\n      function ".concat(node.name, "(x) {\n        return __standard_tangent(x);\n      }\n    ");
      return node;
    }
  }, {
    key: "getArcSineDefinitionNode",
    value: function getArcSineDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getArcSineDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_ARC_SINE;
      node.code = "\n      function ".concat(node.name, "(x) {\n        return __standard_arc_sine(x);\n      }\n    ");
      return node;
    }
  }, {
    key: "getArcCosineDefinitionNode",
    value: function getArcCosineDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getArcCosineDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_ARC_COSINE;
      node.code = "\n      function ".concat(node.name, "(x) {\n        return __standard_arc_cosine(x);\n      }\n    ");
      return node;
    }
  }, {
    key: "getArcTangentDefinitionNode",
    value: function getArcTangentDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getArcTangentDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_ARC_TANGENT;
      node.code = "\n      function ".concat(node.name, "(x) {\n        return __standard_arc_tangent(x);\n      }\n    ");
      return node;
    }
  }, {
    key: "getExponentialDefinitionNode",
    value: function getExponentialDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getExponentialDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_EXPONENTIAL;
      node.code = "\n      function ".concat(node.name, "(x) {\n        return __standard_exponential(x);\n      }\n    ");
      return node;
    }
  }, {
    key: "getNaturalLogarithmDefinitionNode",
    value: function getNaturalLogarithmDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getNaturalLogarithmDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_NATURAL_LOGARITHM;
      node.code = "\n      function ".concat(node.name, "(x) {\n        return __standard_natural_logarithm(x);\n      }\n    ");
      return node;
    }
  }, {
    key: "getLogarithmDefinitionNode",
    value: function getLogarithmDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getLogarithmDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_LOGARITHM;
      node.code = "\n      function ".concat(node.name, "(x, b) {\n        return __standard_logarithm(x, b);\n      }\n    ");
      return node;
    }
  }, {
    key: "getFloorDefinitionNode",
    value: function getFloorDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getFloorDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_FLOOR;
      node.code = "\n      function ".concat(node.name, "(x) {\n        return __standard_floor(x);\n      }\n    ");
      return node;
    }
  }, {
    key: "getCeilingDefinitionNode",
    value: function getCeilingDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getCeilingDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_CEILING;
      node.code = "\n      function ".concat(node.name, "(x) {\n        return __standard_ceiling(x);\n      }\n    ");
      return node;
    }
  }, {
    key: "getTruncateDefinitionNode",
    value: function getTruncateDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getTruncateDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_TRUNCATE;
      node.code = "\n      function ".concat(node.name, "(x) {\n        return __standard_truncate(x);\n      }\n    ");
      return node;
    }
  }, {
    key: "getMinimumDefinitionNode",
    value: function getMinimumDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getMinimumDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_MINIMUM;
      node.code = "\n      function ".concat(node.name, "(x, y) {\n        return __standard_minimum(x, y);\n      }\n    ");
      return node;
    }
  }, {
    key: "getMaximumDefinitionNode",
    value: function getMaximumDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getMaximumDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_MAXIMUM;
      node.code = "\n      function ".concat(node.name, "(x, y) {\n        return __standard_maximum(x, y);\n      }\n    ");
      return node;
    }
  }, {
    key: "getRandomRealDefinitionNode",
    value: function getRandomRealDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRandomRealDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_RANDOM_REAL;
      node.code = "\n      function ".concat(node.name, "(a, b) {\n        return __standard_random_real(a, b);\n      }\n    ");
      return node;
    }
  }, {
    key: "getRandomIntegerDefinitionNode",
    value: function getRandomIntegerDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRandomIntegerDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_RANDOM_INTEGER;
      node.code = "\n      function ".concat(node.name, "(a, b) {\n        return __standard_random_integer(a, b);\n      }\n    ");
      return node;
    }
  }, {
    key: "getRoundDefinitionNode",
    value: function getRoundDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRoundDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_ROUND;
      node.code = "\n      function ".concat(node.name, "(x) {\n        return __standard_round(x);\n      }\n    ");
      return node;
    }
  }, {
    key: "getRoundNPlacesDefinitionNode",
    value: function getRoundNPlacesDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRoundNPlacesDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_ROUND_N_PLACES;
      node.code = "\n      function ".concat(node.name, "(x, n) {\n        return __standard_round_n_places(x, n);\n      }\n    ");
      return node;
    }
  }, {
    key: "getTruncateNPlacesDefinitionNode",
    value: function getTruncateNPlacesDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getTruncateNPlacesDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_TRUNCATE_N_PLACES;
      node.code = "\n      function ".concat(node.name, "(x, n) {\n        return __standard_truncate_n_places(x, n);\n      }\n    ");
      return node;
    }
  }, {
    key: "getListDefinitionNode",
    value: function getListDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getListDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_LIST;
      node.code = "\n      function ".concat(node.name, "(...l) {\n        return __standard_list(...l);\n      }\n    ");
      return node;
    }
  }, {
    key: "getIsEmptyDefinitionNode",
    value: function getIsEmptyDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getIsEmptyDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_IS_EMPTY;
      node.code = "\n      function ".concat(node.name, "(l) {\n        return __standard_is_empty(l);\n      }\n    ");
      return node;
    }
  }, {
    key: "getCountDefinitionNode",
    value: function getCountDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getCountDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_COUNT;
      node.code = "\n      function ".concat(node.name, "(l) {\n        return __standard_count(l);\n      }\n    ");
      return node;
    }
  }, {
    key: "getHeadDefinitionNode",
    value: function getHeadDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getHeadDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_HEAD;
      node.code = "\n      function ".concat(node.name, "(l) {\n        return __standard_head(l);\n      }\n    ");
      return node;
    }
  }, {
    key: "getTailDefinitionNode",
    value: function getTailDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getTailDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_TAIL;
      node.code = "\n      function ".concat(node.name, "(l) {\n        return __standard_tail(l);\n      }\n    ");
      return node;
    }
  }, {
    key: "getFirstNDefinitionNode",
    value: function getFirstNDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getFirstNDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_FIRST_N;
      node.code = "\n      function ".concat(node.name, "(l, n) {\n        return __standard_first_n(l, n);\n      }\n    ");
      return node;
    }
  }, {
    key: "getLastNDefinitionNode",
    value: function getLastNDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getLastNDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_LAST_N;
      node.code = "\n      function ".concat(node.name, "(l, n) {\n        return __standard_last_n(l, n);\n      }\n    ");
      return node;
    }
  }, {
    key: "getInListDefinitionNode",
    value: function getInListDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getInListDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_IN_LIST;
      node.code = "\n      function ".concat(node.name, "(l, e) {\n        return __standard_in_list(l, e);\n      }\n    ");
      return node;
    }
  }, {
    key: "getCountOccurrencesDefinitionNode",
    value: function getCountOccurrencesDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getCountOccurrencesDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_COUNT_OCCURRENCES;
      node.code = "\n      function ".concat(node.name, "(l, e) {\n        return __standard_count_occurrences(l, e);\n      }\n    ");
      return node;
    }
  }, {
    key: "getRemoveDefinitionNode",
    value: function getRemoveDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRemoveDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_REMOVE;
      node.code = "\n      function ".concat(node.name, "(l, e) {\n        return __standard_remove(l, e);\n      }\n    ");
      return node;
    }
  }, {
    key: "getAppendDefinitionNode",
    value: function getAppendDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getAppendDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_APPEND;
      node.code = "\n      function ".concat(node.name, "(l, e) {\n        return __standard_append(l, e);\n      }\n    ");
      return node;
    }
  }, {
    key: "getJoinDefinitionNode",
    value: function getJoinDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getJoinDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_JOIN;
      node.code = "\n      function ".concat(node.name, "(l, s) {\n        return __standard_join(l, s);\n      }\n    ");
      return node;
    }
  }, {
    key: "getMinimumElementDefinitionNode",
    value: function getMinimumElementDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getMinimumElementDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_MINIMUM_ELEMENT;
      node.code = "\n      function ".concat(node.name, "(l) {\n        return __standard_minimum_element(l);\n      }\n    ");
      return node;
    }
  }, {
    key: "getMaximumElementDefinitionNode",
    value: function getMaximumElementDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getMaximumElementDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_MAXIMUM_ELEMENT;
      node.code = "\n      function ".concat(node.name, "(l) {\n        return __standard_maximum_element(l);\n      }\n    ");
      return node;
    }
  }, {
    key: "getSortDefinitionNode",
    value: function getSortDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getSortDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_SORT;
      node.code = "\n      function ".concat(node.name, "(l) {\n        return __standard_sort(l);\n      }\n    ");
      return node;
    }
  }, {
    key: "getReverseDefinitionNode",
    value: function getReverseDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getReverseDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_REVERSE;
      node.code = "\n      function ".concat(node.name, "(l) {\n        return __standard_reverse(l);\n      }\n    ");
      return node;
    }
  }, {
    key: "getUniqueDefinitionNode",
    value: function getUniqueDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getUniqueDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_UNIQUE;
      node.code = "\n      function ".concat(node.name, "(l) {\n        return __standard_unique(l);\n      }\n    ");
      return node;
    }
  }, {
    key: "getSliceDefinitionNode",
    value: function getSliceDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getSliceDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_SLICE;
      node.code = "\n      function ".concat(node.name, "(l, a, b) {\n        return __standard_slice(l, a, b);\n      }\n    ");
      return node;
    }
  }, {
    key: "getSumDefinitionNode",
    value: function getSumDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getSumDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_SUM;
      node.code = "\n      function ".concat(node.name, "(l) {\n        return __standard_sum(l);\n      }\n    ");
      return node;
    }
  }, {
    key: "getRangeDefinitionNode",
    value: function getRangeDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRangeDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_RANGE;
      node.code = "\n      function ".concat(node.name, "(a, b, s) {\n        return __standard_range(a, b, s);\n      }\n    ");
      return node;
    }
  }, {
    key: "getElementAtDefinitionNode",
    value: function getElementAtDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getElementAtDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_ELEMENT_AT;
      node.code = "\n      function ".concat(node.name, "(l, p) {\n        return __standard_element_at(l, p);\n      }\n    ");
      return node;
    }
  }, {
    key: "getRemoveAtDefinitionNode",
    value: function getRemoveAtDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRemoveAtDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_REMOVE_AT;
      node.code = "\n      function ".concat(node.name, "(l, p) {\n        return __standard_remove_at(l, p);\n      }\n    ");
      return node;
    }
  }, {
    key: "getRandomElementDefinitionNode",
    value: function getRandomElementDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getRandomElementDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_RANDOM_ELEMENT;
      node.code = "\n      function ".concat(node.name, "(l) {\n        return __random_element(l);\n      }\n    ");
      return node;
    }
  }, {
    key: "getAverageDefinitionNode",
    value: function getAverageDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getAverageDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_AVERAGE;
      node.code = "\n      function ".concat(node.name, "(l) {\n        return __standard_average(l);\n      }\n    ");
      return node;
    }
  }, {
    key: "getMedianDefinitionNode",
    value: function getMedianDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getMedianDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_MEDIAN;
      node.code = "\n      function ".concat(node.name, "(l) {\n        return __standard_median(l);\n      }\n    ");
      return node;
    }
  }, {
    key: "getModeDefinitionNode",
    value: function getModeDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getModeDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_MODE;
      node.code = "\n      function ".concat(node.name, "(l) {\n        return __standard_mode(l);\n      }\n    ");
      return node;
    }
  }, {
    key: "getShuffleDefinitionNode",
    value: function getShuffleDefinitionNode() {
      var node = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomStandardLibrary), "getShuffleDefinitionNode", this).call(this);

      node.name = this.localizedStrings.FUNCTION_SHUFFLE;
      node.code = "\n      function ".concat(node.name, "(l) {\n        return __standard_shuffle(l);\n      }\n    ");
      return node;
    }
  }]);

  return CustomStandardLibrary;
}(_common_CommonStandardLibrary__WEBPACK_IMPORTED_MODULE_7__.CommonStandardLibrary);
CustomStandardLibrary.localizedStrings = new _CustomLocalizedStrings__WEBPACK_IMPORTED_MODULE_8__.CustomLocalizedStrings();

/***/ }),

/***/ "./src/languages/pt_br/CustomVisitor.ts":
/*!**********************************************!*\
  !*** ./src/languages/pt_br/CustomVisitor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomVisitor": () => (/* binding */ CustomVisitor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _common_CommonVisitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/CommonVisitor */ "./src/languages/common/CommonVisitor.ts");
/* harmony import */ var _CustomLocalizedStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CustomLocalizedStrings */ "./src/languages/pt_br/CustomLocalizedStrings.ts");
/* harmony import */ var _CustomStandardLibrary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomStandardLibrary */ "./src/languages/pt_br/CustomStandardLibrary.ts");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var CustomVisitor = /*#__PURE__*/function (_CommonVisitor) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomVisitor, _CommonVisitor);

  var _super = _createSuper(CustomVisitor);

  function CustomVisitor() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomVisitor);

    _this = _super.call(this);
    _this.symbolTable = _CustomStandardLibrary__WEBPACK_IMPORTED_MODULE_6__.CustomStandardLibrary.getStandardLibrarySymbolTable();
    _this.localizedStrings = new _CustomLocalizedStrings__WEBPACK_IMPORTED_MODULE_5__.CustomLocalizedStrings();
    return _this;
  }

  return CustomVisitor;
}(_common_CommonVisitor__WEBPACK_IMPORTED_MODULE_4__.CommonVisitor);

/***/ })

}]);