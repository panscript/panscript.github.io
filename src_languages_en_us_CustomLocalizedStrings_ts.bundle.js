"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_en_us_CustomLocalizedStrings_ts"],{

/***/ "./src/languages/common/CommonLocalizedStrings.ts":
/*!********************************************************!*\
  !*** ./src/languages/common/CommonLocalizedStrings.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonLocalizedStrings": () => (/* binding */ CommonLocalizedStrings)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");

var CommonLocalizedStrings = function CommonLocalizedStrings() {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommonLocalizedStrings);

  this.PANSCRIPT_HEADLINE = "PanScript – code in your language";
  this.LANGUAGE_SELECT_PROMPT = "Language:";
  this.THEME_SELECT_PROMPT = "Theme:";
  this.RUN_BUTTON_LABEL = "Run";
  this.UNDO_BUTTON_LABEL = "Undo";
  this.REDO_BUTTON_LABEL = "Redo";
  this.RELOAD_BUTTON_LABEL = "Reload";
  this.SAVE_BUTTON_LABEL = "Save";
  this.LOAD_BUTTON_LABEL = "Load";
  this.CLEAR_BUTTON_LABEL = "Clear";
  this.EXPLORER_FOLDER_YOUR_FILES = "Your Files";
  this.EXPLORER_FOLDER_EXAMPLES = "Examples";
  this.EXPLORER_FOLDER_BASICS = "1 - Basics";
  this.EXPLORER_FOLDER_STANDARD_FUNCTIONS = "2 - Standard Functions";
  this.EXPLORER_FOLDER_EXPRESSIONS = "3 - Expressions";
  this.EXPLORER_FOLDER_CONDITIONALS = "4 - Conditionals";
  this.EXPLORER_FOLDER_LOOPS = "5 - Loops";
  this.EXPLORER_FOLDER_USER_FUNCTIONS = "6 - User Functions";
  this.EXPLORER_FILE_MAIN = "Main";
  this.EXPLORER_FILE_VARIABLES = "Variables";
  this.EXPLORER_FILE_TYPES = "Types";
  this.EXPLORER_FILE_CONSTANTS = "Constants";
  this.EXPLORER_FILE_TEXT_INTERPOLATION = "Text Interpolation";
  this.EXPLORER_FILE_CONSOLE_FUNCTIONS = "Console Functions";
  this.EXPLORER_FILE_TEXT_FUNCTIONS = "Text Functions";
  this.EXPLORER_FILE_MATH_FUNCTIONS = "Math Functions";
  this.EXPLORER_FILE_EXPRESSIONS = "Expressions";
  this.EXPLORER_FILE_IF = "If";
  this.EXPLORER_FILE_ELSE = "Else";
  this.EXPLORER_FILE_ELSE_IF = "Else If";
  this.EXPLORER_FILE_LOOPS = "Loops";
  this.EXPLORER_FILE_BREAK_AND_CONTINUE = "Break and Continue";
  this.EXPLORER_FILE_FUNCTIONS = "Functions";
  this.EXPLORER_FILE_RECURSION = "Recursion";
  this.KEYWORD_TRUE = "true";
  this.KEYWORD_FALSE = "false";
  this.KEYWORD_BREAK = "break";
  this.KEYWORD_CONSTANT = "constant";
  this.KEYWORD_CONTINUE = "continue";
  this.KEYWORD_ELSE = "else";
  this.KEYWORD_END = "end";
  this.KEYWORD_FOR = "for";
  this.KEYWORD_FOREVER = "forever";
  this.KEYWORD_FUNCTION = "function";
  this.KEYWORD_GLOBAL = "global";
  this.KEYWORD_IF = "if";
  this.KEYWORD_IN = "in";
  this.KEYWORD_RETURN = "return";
  this.KEYWORD_RETURNS = "returns";
  this.KEYWORD_WHILE = "while";
  this.KEYWORD_NOT = "not";
  this.KEYWORD_AND = "and";
  this.KEYWORD_OR = "or";
  this.KEYWORD_TYPES = {
    logical: "logical",
    number: "number",
    text: "text",
    list: "list",
    none: "none",
    any: "any",
    "...T": "...T"
  };
  this.FUNCTION_WRITE = "write";
  this.FUNCTION_WRITE_INLINE = "write_inline";
  this.FUNCTION_NEW_LINE = "new_line";
  this.FUNCTION_CLEAR = "clear";
  this.FUNCTION_TO_TEXT = "to_text";
  this.FUNCTION_PAD_LEFT = "pad_left";
  this.FUNCTION_PAD_RIGHT = "pad_right";
  this.FUNCTION_LENGTH = "length";
  this.FUNCTION_REPEAT = "repeat";
  this.FUNCTION_UPPER_CASE = "upper_case";
  this.FUNCTION_LOWER_CASE = "lower_case";
  this.FUNCTION_SENTENCE_CASE = "sentence_case";
  this.FUNCTION_LEFT = "left";
  this.FUNCTION_RIGHT = "right";
  this.FUNCTION_MIDDLE = "middle";
  this.FUNCTION_SLICE_TEXT = "slice_text";
  this.FUNCTION_REVERSE_TEXT = "reverse_text";
  this.FUNCTION_SPLIT = "split";
  this.FUNCTION_IN_TEXT = "in_text";
  this.FUNCTION_POSITION = "position";
  this.FUNCTION_TRIM = "trim";
  this.FUNCTION_TRIM_LEFT = "trim_left";
  this.FUNCTION_TRIM_RIGHT = "trim_right";
  this.FUNCTION_PI = "pi";
  this.FUNCTION_ABSOLUTE = "absolute";
  this.FUNCTION_POWER = "power";
  this.FUNCTION_SQUARE_ROOT = "square_root";
  this.FUNCTION_SINE = "sine";
  this.FUNCTION_COSINE = "cosine";
  this.FUNCTION_TANGENT = "tangent";
  this.FUNCTION_ARC_SINE = "arc_sine";
  this.FUNCTION_ARC_COSINE = "arc_cosine";
  this.FUNCTION_ARC_TANGENT = "arc_tangent";
  this.FUNCTION_EXPONENTIAL = "exponential";
  this.FUNCTION_NATURAL_LOGARITHM = "natural_logarithm";
  this.FUNCTION_LOGARITHM = "logarithm";
  this.FUNCTION_FLOOR = "floor";
  this.FUNCTION_CEILING = "ceiling";
  this.FUNCTION_TRUNCATE = "truncate";
  this.FUNCTION_MINIMUM = "minimum";
  this.FUNCTION_MAXIMUM = "maximum";
  this.FUNCTION_RANDOM_REAL = "random_real";
  this.FUNCTION_RANDOM_INTEGER = "random_integer";
  this.FUNCTION_ROUND = "round";
  this.FUNCTION_ROUND_N_PLACES = "round_n_places";
  this.FUNCTION_TRUNCATE_N_PLACES = "truncate_n_places";
  this.FUNCTION_LIST = "list";
  this.FUNCTION_IS_EMPTY = "is_empty";
  this.FUNCTION_COUNT = "count";
  this.FUNCTION_HEAD = "head";
  this.FUNCTION_TAIL = "tail";
  this.FUNCTION_FIRST_N = "first_n";
  this.FUNCTION_LAST_N = "last_n";
  this.FUNCTION_IN_LIST = "in_list";
  this.FUNCTION_COUNT_OCCURRENCES = "count_occurrences";
  this.FUNCTION_REMOVE = "remove";
  this.FUNCTION_APPEND = "append";
  this.FUNCTION_JOIN = "join";
  this.FUNCTION_MINIMUM_ELEMENT = "minimum_element";
  this.FUNCTION_MAXIMUM_ELEMENT = "maximum_element";
  this.FUNCTION_SORT = "sort";
  this.FUNCTION_REVERSE = "reverse";
  this.FUNCTION_UNIQUE = "unique";
  this.FUNCTION_SLICE = "slice";
  this.FUNCTION_SUM = "sum";
  this.FUNCTION_RANGE = "range";
  this.FUNCTION_ELEMENT_AT = "element_at";
  this.FUNCTION_REMOVE_AT = "remove_at";
  this.FUNCTION_RANDOM_ELEMENT = "random_element";
  this.FUNCTION_AVERAGE = "average";
  this.FUNCTION_MEDIAN = "median";
  this.FUNCTION_MODE = "mode";
  this.FUNCTION_SHUFFLE = "shuffle";
  this.ERROR = "Error";
  this.ERROR_MESSAGE_END_OF_CODE_TOKEN = "the end of the code";
  this.ERROR_MESSAGE_END_OF_LINE_TOKEN = "the end of the line";
  this.ERROR_MESSAGE_EMPTY_LIST = "Error: the given list is empty";
  this.ERROR_MESSAGE_TEMPLATE_INDEX_OUT_OF_BOUNDS = "Error: the given list does not contain an item at position ${position}";
  this.ERROR_MESSAGE_TEMPLATE_UNKNOWN_TOKEN = "Error: I could not understand the code at line ${line}, column ${charPositionInLine}";
  this.ERROR_MESSAGE_TEMPLATE_INVALID_SYNTAX = "Error at line ${line}:\r\nI was not expecting to find ${symbolDescription}";
  this.ERROR_MESSAGE_TEMPLATE_NAME_ALREADY_DEFINED = "Error at line ${line}:\r\nThe identifier ${name} is being defined a second time";
  this.ERROR_MESSAGE_TEMPLATE_TYPE_MISMATCH = "Error at line ${line}:\r\nI was expecting the type of ${name} to be ${expectedType}, but it was ${actualType}";
  this.ERROR_MESSAGE_TEMPLATE_CONSTANT_REASSIGNMENT = 'Error at line ${line}:\r\nI cannot modify the value of ${name} because it was declared as "${constantKeyword}"';
  this.ERROR_MESSAGE_TEMPLATE_UNDECLARED_IDENTIFIER = "Error at line ${line}:\r\nI could not find the identifier ${name} in the current scope";
  this.ERROR_MESSAGE_GLOBAL_HINT = '\r\nTo access a global variable in a function, bind it using the "${globalKeyword}" keyword:\r\n${globalKeyword} ${name}';
  this.ERROR_MESSAGE_WRITE_HINT = "\r\nPerhaps you've meant to use function ${write}() or ${write_inline}()?";
};

/***/ }),

/***/ "./src/languages/en_us/CustomLocalizedStrings.ts":
/*!*******************************************************!*\
  !*** ./src/languages/en_us/CustomLocalizedStrings.ts ***!
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
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomLocalizedStrings);

    return _super.apply(this, arguments);
  }

  return CustomLocalizedStrings;
}(_common_CommonLocalizedStrings__WEBPACK_IMPORTED_MODULE_4__.CommonLocalizedStrings);

/***/ })

}]);