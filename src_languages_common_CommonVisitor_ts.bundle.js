"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_common_CommonVisitor_ts"],{

/***/ "./src/languages/CommonSymbolTable.ts":
/*!********************************************!*\
  !*** ./src/languages/CommonSymbolTable.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SymbolTableScope": () => (/* binding */ SymbolTableScope),
/* harmony export */   "SymbolTable": () => (/* binding */ SymbolTable)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var SymbolTableScope = function SymbolTableScope(name) {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SymbolTableScope);

  this.name = "";

  this.getName = function () {
    return _this.name;
  };

  this.getNode = function (i) {
    return _this.symbols[i];
  };

  this.getAllNodes = function () {
    return _this.symbols;
  };

  this.pushNode = function (node) {
    _this.symbols.push(node);
  };

  this.length = function () {
    return _this.symbols.length;
  };

  this.symbols = [];

  if (name) {
    this.name = name;
  }
};
var SymbolTable = function SymbolTable() {
  var _this2 = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SymbolTable);

  this.symbolTable = [new SymbolTableScope("$global")];

  this.scopeLevel = function () {
    return _this2.symbolTable.length - 1;
  };

  this.pushNode = function (node) {
    var topScope = _this2.symbolTable[_this2.symbolTable.length - 1];
    topScope.pushNode(node);
  };

  this.pushGlobalNode = function (node) {
    var globalScope = _this2.symbolTable[0];
    globalScope.pushNode(node);
  };

  this.pushScope = function (name) {
    if (!name) {
      var currentScopeNumber = _this2.symbolTable.length - 1;
      var currentScope = _this2.symbolTable[currentScopeNumber];
      name = currentScope.getName();
    }

    _this2.symbolTable.push(new SymbolTableScope(name));
  };

  this.popScope = function () {
    if (_this2.symbolTable.length == 1) {
      return;
    }

    _this2.symbolTable.pop();
  };

  this.getCode = function () {
    var code = "";

    var _iterator = _createForOfIteratorHelper(_this2.symbolTable),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var scope = _step.value;

        var _iterator2 = _createForOfIteratorHelper(scope.getAllNodes()),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var node = _step2.value;
            code += node.code;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return code;
  };

  this.findCurrentFunction = function () {
    var currentScopeTop = _this2.symbolTable.length - 1;
    var scope = _this2.symbolTable[currentScopeTop];

    if (scope.getName() == "$global") {
      return;
    }

    var globalScope = _this2.symbolTable[0];
    return globalScope.getNode(globalScope.length() - 1);
  };

  this.findByNameInCurrentScope = function (name) {
    var currentScope = _this2.symbolTable.length - 1;
    return _this2.findByNameInScope(name, currentScope);
  };

  this.findByNameInGlobalScope = function (name) {
    return _this2.findByNameInScope(name, 0);
  };

  this.findByNameInAnyScope = function (name) {
    var currentScope = _this2.symbolTable.length - 1;

    for (var i = currentScope; i >= 0; --i) {
      var node = _this2.findByNameInScope(name, i);

      if (node) {
        return node;
      }
    }
  };

  this.findByNameInScope = function (name, scopeTop) {
    var scope = _this2.symbolTable[scopeTop];
    var scopeName = scope.getName();

    for (var i = scopeTop; i >= 0 && scope.getName() == scopeName; --i) {
      scope = _this2.symbolTable[i];

      var _iterator3 = _createForOfIteratorHelper(scope.getAllNodes()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var node = _step3.value;

          if (node.name == name) {
            return node;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  };
};

/***/ }),

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

/***/ "./src/languages/common/CommonStandardLibrary.ts":
/*!*******************************************************!*\
  !*** ./src/languages/common/CommonStandardLibrary.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonStandardLibrary": () => (/* binding */ CommonStandardLibrary)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CommonASTNode */ "./src/languages/CommonASTNode.ts");
/* harmony import */ var _CommonSymbolTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommonSymbolTable */ "./src/languages/CommonSymbolTable.ts");




var CommonStandardLibrary = /*#__PURE__*/function () {
  function CommonStandardLibrary() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommonStandardLibrary);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CommonStandardLibrary, null, [{
    key: "getStandardLibrarySymbolTable",
    value: function getStandardLibrarySymbolTable() {
      var table = new _CommonSymbolTable__WEBPACK_IMPORTED_MODULE_3__.SymbolTable();
      table.pushNode(this.getWriteDefinitionNode());
      table.pushNode(this.getWriteInlineDefinitionNode());
      table.pushNode(this.getNewLineDefinitionNode());
      table.pushNode(this.getClearDefinitionNode());
      table.pushNode(this.getToTextDefinitionNode());
      table.pushNode(this.getPadLeftDefinitionNode());
      table.pushNode(this.getPadRightDefinitionNode());
      table.pushNode(this.getLengthDefinitionNode());
      table.pushNode(this.getRepeatDefinitionNode());
      table.pushNode(this.getUpperCaseDefinitionNode());
      table.pushNode(this.getLowerCaseDefinitionNode());
      table.pushNode(this.getSentenceCaseDefinitionNode());
      table.pushNode(this.getLeftDefinitionNode());
      table.pushNode(this.getRightDefinitionNode());
      table.pushNode(this.getMiddleDefinitionNode());
      table.pushNode(this.getSliceTextDefinitionNode());
      table.pushNode(this.getReverseTextDefinitionNode());
      table.pushNode(this.getSplitDefinitionNode());
      table.pushNode(this.getInTextDefinitionNode());
      table.pushNode(this.getPositionDefinitionNode());
      table.pushNode(this.getTrimDefinitionNode());
      table.pushNode(this.getTrimLeftDefinitionNode());
      table.pushNode(this.getTrimRightDefinitionNode());
      table.pushNode(this.getPiDefinitionNode());
      table.pushNode(this.getAbsoluteDefinitionNode());
      table.pushNode(this.getPowerDefinitionNode());
      table.pushNode(this.getSquareRootDefinitionNode());
      table.pushNode(this.getSineDefinitionNode());
      table.pushNode(this.getCosineDefinitionNode());
      table.pushNode(this.getTangentDefinitionNode());
      table.pushNode(this.getArcSineDefinitionNode());
      table.pushNode(this.getArcCosineDefinitionNode());
      table.pushNode(this.getArcTangentDefinitionNode());
      table.pushNode(this.getExponentialDefinitionNode());
      table.pushNode(this.getNaturalLogarithmDefinitionNode());
      table.pushNode(this.getLogarithmDefinitionNode());
      table.pushNode(this.getFloorDefinitionNode());
      table.pushNode(this.getCeilingDefinitionNode());
      table.pushNode(this.getTruncateDefinitionNode());
      table.pushNode(this.getMinimumDefinitionNode());
      table.pushNode(this.getMaximumDefinitionNode());
      table.pushNode(this.getRandomRealDefinitionNode());
      table.pushNode(this.getRandomIntegerDefinitionNode());
      table.pushNode(this.getRoundDefinitionNode());
      table.pushNode(this.getRoundNPlacesDefinitionNode());
      table.pushNode(this.getTruncateNPlacesDefinitionNode());
      table.pushNode(this.getListDefinitionNode());
      table.pushNode(this.getIsEmptyDefinitionNode());
      table.pushNode(this.getCountDefinitionNode());
      table.pushNode(this.getHeadDefinitionNode());
      table.pushNode(this.getTailDefinitionNode());
      table.pushNode(this.getFirstNDefinitionNode());
      table.pushNode(this.getLastNDefinitionNode());
      table.pushNode(this.getInListDefinitionNode());
      table.pushNode(this.getCountOccurrencesDefinitionNode());
      table.pushNode(this.getRemoveDefinitionNode());
      table.pushNode(this.getAppendDefinitionNode());
      table.pushNode(this.getJoinDefinitionNode());
      table.pushNode(this.getMinimumElementDefinitionNode());
      table.pushNode(this.getMaximumElementDefinitionNode());
      table.pushNode(this.getSortDefinitionNode());
      table.pushNode(this.getReverseDefinitionNode());
      table.pushNode(this.getUniqueDefinitionNode());
      table.pushNode(this.getSliceDefinitionNode());
      table.pushNode(this.getSumDefinitionNode());
      table.pushNode(this.getRangeDefinitionNode());
      table.pushNode(this.getElementAtDefinitionNode());
      table.pushNode(this.getRemoveAtDefinitionNode());
      table.pushNode(this.getRandomElementDefinitionNode());
      table.pushNode(this.getAverageDefinitionNode());
      table.pushNode(this.getMedianDefinitionNode());
      table.pushNode(this.getModeDefinitionNode());
      table.pushNode(this.getShuffleDefinitionNode());
      return table;
    }
  }, {
    key: "getWriteDefinitionNode",
    value: function getWriteDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_write";
      node.code = "\n      function ".concat(node.name, "(x) {\n        xterm.writeln(x);\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([]);
      node.argList = [["x", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])]];
      return node;
    }
  }, {
    key: "getWriteInlineDefinitionNode",
    value: function getWriteInlineDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_write_inline";
      node.code = "\n      function ".concat(node.name, "(x) {\n        xterm.write(x);\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([]);
      node.argList = [["x", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])]];
      return node;
    }
  }, {
    key: "getNewLineDefinitionNode",
    value: function getNewLineDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_new_line";
      node.code = "\n      function ".concat(node.name, "() {\n        xterm.writeln(\"\");\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([]);
      node.argList = [];
      return node;
    }
  }, {
    key: "getClearDefinitionNode",
    value: function getClearDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_clear";
      node.code = "\n      function ".concat(node.name, "() {\n        xterm.clear();\n        xterm.refresh(0, xterm.rows - 1);\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([]);
      node.argList = [];
      return node;
    }
  }, {
    key: "getToTextDefinitionNode",
    value: function getToTextDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_to_text";
      node.code = "\n      function ".concat(node.name, "(x) {\n        if (Array.isArray(x)) {\n          return \"[\" + x.toString() + \"]\";\n        }\n\n        return x.toString();\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType();
      node.argList = [["x", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])]];
      return node;
    }
  }, {
    key: "getPadLeftDefinitionNode",
    value: function getPadLeftDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_pad_left";
      node.code = "\n      function ".concat(node.name, "(text, length, padding) {\n        return text.padStart(length, padding);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()], ["length", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()], ["padding", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()]];
      return node;
    }
  }, {
    key: "getPadRightDefinitionNode",
    value: function getPadRightDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_pad_right";
      node.code = "\n      function ".concat(node.name, "(text, length, padding) {\n        return text.padEnd(length, padding);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()], ["length", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()], ["padding", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()]];
      return node;
    }
  }, {
    key: "getLengthDefinitionNode",
    value: function getLengthDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_length";
      node.code = "\n      function ".concat(node.name, "(text) {\n        return text.length;\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()]];
      return node;
    }
  }, {
    key: "getRepeatDefinitionNode",
    value: function getRepeatDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_repeat";
      node.code = "\n      function ".concat(node.name, "(text, count) {\n        return text.repeat(count);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()], ["count", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getUpperCaseDefinitionNode",
    value: function getUpperCaseDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_upper_case";
      node.code = "\n      function ".concat(node.name, "(text) {\n        return text.toUpperCase();\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()]];
      return node;
    }
  }, {
    key: "getLowerCaseDefinitionNode",
    value: function getLowerCaseDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_lower_case";
      node.code = "\n      function ".concat(node.name, "(text) {\n        return text.toLowerCase();\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()]];
      return node;
    }
  }, {
    key: "getSentenceCaseDefinitionNode",
    value: function getSentenceCaseDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_sentence_case";
      node.code = "\n      function ".concat(node.name, "(text) {\n        return text[0].toUpperCase() + text.slice(1).toLowerCase();\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()]];
      return node;
    }
  }, {
    key: "getLeftDefinitionNode",
    value: function getLeftDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_left";
      node.code = "\n      function ".concat(node.name, "(text, count) {\n        return text.slice(0, count);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()], ["count", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getRightDefinitionNode",
    value: function getRightDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_right";
      node.code = "\n      function ".concat(node.name, "(text, count) {\n        return text.slice(-count);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()], ["count", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getMiddleDefinitionNode",
    value: function getMiddleDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_middle";
      node.code = "\n      function ".concat(node.name, "(text, position, count) {\n        return text.slice(position, position + count);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()], ["position", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()], ["count", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getSliceTextDefinitionNode",
    value: function getSliceTextDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_slice_text";
      node.code = "\n      function ".concat(node.name, "(text, start, end) {\n        return text.slice(start, end);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()], ["start", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()], ["end", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getReverseTextDefinitionNode",
    value: function getReverseTextDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_reverse_text";
      node.code = "\n      function ".concat(node.name, "(text) {\n        return text.split(\"\").reverse().join(\"\");\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()]];
      return node;
    }
  }, {
    key: "getSplitDefinitionNode",
    value: function getSplitDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_split";
      node.code = "\n      function ".concat(node.name, "(text, delimiter) {\n        return text.split(delimiter);\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Text]);
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()], ["delimiter", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()]];
      return node;
    }
  }, {
    key: "getInTextDefinitionNode",
    value: function getInTextDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_in_text";
      node.code = "\n      function ".concat(node.name, "(text, search_text) {\n        return text.includes(search_text);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.logicalType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()], ["search_text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()]];
      return node;
    }
  }, {
    key: "getPositionDefinitionNode",
    value: function getPositionDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_position";
      node.code = "\n      function ".concat(node.name, "(text, search_text) {\n        return text.indexOf(search_text);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()], ["search_text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()]];
      return node;
    }
  }, {
    key: "getTrimDefinitionNode",
    value: function getTrimDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_trim";
      node.code = "\n      function ".concat(node.name, "(text) {\n        return text.trim();\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()]];
      return node;
    }
  }, {
    key: "getTrimLeftDefinitionNode",
    value: function getTrimLeftDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_trim_left";
      node.code = "\n      function ".concat(node.name, "(text) {\n        return text.trimStart();\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()]];
      return node;
    }
  }, {
    key: "getTrimRightDefinitionNode",
    value: function getTrimRightDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_trim_right";
      node.code = "\n      function ".concat(node.name, "(text) {\n        return text.trimEnd();\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType();
      node.argList = [["text", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()]];
      return node;
    }
  }, {
    key: "getPiDefinitionNode",
    value: function getPiDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_pi";
      node.code = "\n      function ".concat(node.name, "() {\n        return Math.PI;\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [];
      return node;
    }
  }, {
    key: "getAbsoluteDefinitionNode",
    value: function getAbsoluteDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_absolute";
      node.code = "\n      function ".concat(node.name, "(x) {\n        return Math.abs(x);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getPowerDefinitionNode",
    value: function getPowerDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_power";
      node.code = "\n      function ".concat(node.name, "(x, n) {\n        return Math.pow(x, n);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()], ["n", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getSquareRootDefinitionNode",
    value: function getSquareRootDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_square_root";
      node.code = "\n      function ".concat(node.name, "(x) {\n        return Math.sqrt(x);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getSineDefinitionNode",
    value: function getSineDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_sine";
      node.code = "\n      function ".concat(node.name, "(x) {\n        return Math.sin(x);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getCosineDefinitionNode",
    value: function getCosineDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_cosine";
      node.code = "\n      function ".concat(node.name, "(x) {\n        return Math.cos(x);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getTangentDefinitionNode",
    value: function getTangentDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_tangent";
      node.code = "\n      function ".concat(node.name, "(x) {\n        return Math.tan(x);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getArcSineDefinitionNode",
    value: function getArcSineDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_arc_sine";
      node.code = "\n      function ".concat(node.name, "(x) {\n        return Math.asin(x);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getArcCosineDefinitionNode",
    value: function getArcCosineDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_arc_cosine";
      node.code = "\n      function ".concat(node.name, "(x) {\n        return Math.acos(x);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getArcTangentDefinitionNode",
    value: function getArcTangentDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_arc_tangent";
      node.code = "\n      function ".concat(node.name, "(x) {\n        return Math.atan(x);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getExponentialDefinitionNode",
    value: function getExponentialDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_exponential";
      node.code = "\n      function ".concat(node.name, "(x) {\n        return Math.exp(x);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getNaturalLogarithmDefinitionNode",
    value: function getNaturalLogarithmDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_natural_logarithm";
      node.code = "\n      function ".concat(node.name, "(x) {\n        return Math.log(x);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getLogarithmDefinitionNode",
    value: function getLogarithmDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_logarithm";
      node.code = "\n      function ".concat(node.name, "(x, b) {\n        return Math.log(x) / Math.log(b);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()], ["b", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getFloorDefinitionNode",
    value: function getFloorDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_floor";
      node.code = "\n      function ".concat(node.name, "(x) {\n        return Math.floor(x);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getCeilingDefinitionNode",
    value: function getCeilingDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_ceiling";
      node.code = "\n      function ".concat(node.name, "(x) {\n        return Math.ceil(x);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getTruncateDefinitionNode",
    value: function getTruncateDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_truncate";
      node.code = "\n      function ".concat(node.name, "(x) {\n        return Math.trunc(x);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getMinimumDefinitionNode",
    value: function getMinimumDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_minimum";
      node.code = "\n      function ".concat(node.name, "(x, y) {\n        return Math.min(x, y);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()], ["y", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getMaximumDefinitionNode",
    value: function getMaximumDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_maximum";
      node.code = "\n      function ".concat(node.name, "(x, y) {\n        return Math.max(x, y);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()], ["y", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getRandomRealDefinitionNode",
    value: function getRandomRealDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_random_real";
      node.code = "\n      function ".concat(node.name, "(a, b) {\n        // source: MDN\n        return Math.random() * (b - a) + a; // [a, b)\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["a", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()], ["b", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getRandomIntegerDefinitionNode",
    value: function getRandomIntegerDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_random_integer";
      node.code = "\n      function ".concat(node.name, "(a, b) {\n        // source: MDN\n        a = Math.ceil(a);\n        b = Math.floor(b);\n        return Math.floor(Math.random() * (b - a) + a); // [a, b)\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["a", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()], ["b", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getRoundDefinitionNode",
    value: function getRoundDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_round";
      node.code = "\n      function ".concat(node.name, "(x) {\n        return Math.round(Math.abs(x)) * Math.sign(x);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getRoundNPlacesDefinitionNode",
    value: function getRoundNPlacesDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_round_n_places";
      node.code = "\n      function ".concat(node.name, "(x, n) {\n        // source: MDN\n        // convert to e notation\n        let parts = (x + \"e\").split(\"e\");\n\n        // shift and apply function\n        x = __standard_round(+(parts[0] + \"e\" + (+parts[1] + n)));\n\n        // convert to e notation\n        parts = (x + \"e\").split(\"e\");\n\n        // unshift\n        return +(parts[0] + \"e\" + (+parts[1] - n));\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()], ["n", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getTruncateNPlacesDefinitionNode",
    value: function getTruncateNPlacesDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_truncate_n_places";
      node.code = "\n      function ".concat(node.name, "(x, n) {\n        // source: MDN\n        // convert to e notation\n        let parts = (x + \"e\").split(\"e\");\n\n        // shift and apply function\n        x = Math.trunc(+(parts[0] + \"e\" + (+parts[1] + n)));\n\n        // convert to e notation\n        parts = (x + \"e\").split(\"e\");\n\n        // unshift\n        return +(parts[0] + \"e\" + (+parts[1] - n));\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["x", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()], ["n", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getListDefinitionNode",
    value: function getListDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_list";
      node.code = "\n      function ".concat(node.name, "(...l) {\n        return l;\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any]);
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.VariadicZeroOrMore])]];
      return node;
    }
  }, {
    key: "getIsEmptyDefinitionNode",
    value: function getIsEmptyDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_is_empty";
      node.code = "\n      function ".concat(node.name, "(l) {\n        return l.length === 0;\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.logicalType();
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])]];
      return node;
    }
  }, {
    key: "getCountDefinitionNode",
    value: function getCountDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_count";
      node.code = "\n      function ".concat(node.name, "(l) {\n        return l.length;\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])]];
      return node;
    }
  }, {
    key: "getHeadDefinitionNode",
    value: function getHeadDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_head";
      node.code = "\n      function ".concat(node.name, "(l) {\n        if (l.length < 1) {\n          throw \"ERROR: the given list is empty\";\n        }\n\n        return l.slice(0, 1);\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any]);
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])]];
      return node;
    }
  }, {
    key: "getTailDefinitionNode",
    value: function getTailDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_tail";
      node.code = "\n      function ".concat(node.name, "(l) {\n        return l.slice(1);\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any]);
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])]];
      return node;
    }
  }, {
    key: "getFirstNDefinitionNode",
    value: function getFirstNDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_first_n";
      node.code = "\n      function ".concat(node.name, "(l, n) {\n        if (l.length < 1) {\n          throw \"ERROR: the given list is empty\";\n        }\n\n        return l.slice(0, n);\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any]);
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])], ["n", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getLastNDefinitionNode",
    value: function getLastNDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_last_n";
      node.code = "\n      function ".concat(node.name, "(l, n) {\n        if (l.length < 1) {\n          throw \"ERROR: the given list is empty\";\n        }\n\n        return l.slice(-n);\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any]);
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])], ["n", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getInListDefinitionNode",
    value: function getInListDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_in_list";
      node.code = "\n      function ".concat(node.name, "(l, e) {\n        return l.includes(e);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.logicalType();
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])], ["e", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])]];
      return node;
    }
  }, {
    key: "getCountOccurrencesDefinitionNode",
    value: function getCountOccurrencesDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_count_occurrences";
      node.code = "\n      function ".concat(node.name, "(l, e) {\n        return l.reduce((a, v) => (v === e ? a + 1 : a), 0);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])], ["e", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])]];
      return node;
    }
  }, {
    key: "getRemoveDefinitionNode",
    value: function getRemoveDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_remove";
      node.code = "\n      function ".concat(node.name, "(l, e) {\n        return l.filter((v) => v !== e);\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any]);
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])], ["e", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])]];
      return node;
    }
  }, {
    key: "getAppendDefinitionNode",
    value: function getAppendDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_append";
      node.code = "\n      function ".concat(node.name, "(l, e) {\n        return l.concat(e);\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any]);
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])], ["e", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])]];
      return node;
    }
  }, {
    key: "getJoinDefinitionNode",
    value: function getJoinDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_join";
      node.code = "\n      function ".concat(node.name, "(l, s) {\n        return l.join(s);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType();
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Text])], ["s", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.textType()]];
      return node;
    }
  }, {
    key: "getMinimumElementDefinitionNode",
    value: function getMinimumElementDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_minimum_element";
      node.code = "\n      function ".concat(node.name, "(l) {\n        if (l.length < 1) {\n          throw \"ERROR: the given list is empty\";\n        }\n\n        return Math.min(...l)\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Number])]];
      return node;
    }
  }, {
    key: "getMaximumElementDefinitionNode",
    value: function getMaximumElementDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_maximum_element";
      node.code = "\n      function ".concat(node.name, "(l) {\n        if (l.length < 1) {\n          throw \"ERROR: the given list is empty\";\n        }\n\n        return Math.max(...l);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Number])]];
      return node;
    }
  }, {
    key: "getSortDefinitionNode",
    value: function getSortDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_sort";
      node.code = "\n      function ".concat(node.name, "(l) {\n        return l.sort();\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any]);
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])]];
      return node;
    }
  }, {
    key: "getReverseDefinitionNode",
    value: function getReverseDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_reverse";
      node.code = "\n      function ".concat(node.name, "(l) {\n        return l.reverse();\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any]);
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])]];
      return node;
    }
  }, {
    key: "getUniqueDefinitionNode",
    value: function getUniqueDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_unique";
      node.code = "\n      function ".concat(node.name, "(l) {\n        return Array.from(new Set(l));\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any]);
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])]];
      return node;
    }
  }, {
    key: "getSliceDefinitionNode",
    value: function getSliceDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_slice";
      node.code = "\n      function ".concat(node.name, "(l, a, b) {\n        return l.slice(a, b);\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any]);
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])], ["a", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()], ["b", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getSumDefinitionNode",
    value: function getSumDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_sum";
      node.code = "\n      function ".concat(node.name, "(l) {\n        return l.reduce((a, b) => a + b, 0);\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Number])]];
      return node;
    }
  }, {
    key: "getRangeDefinitionNode",
    value: function getRangeDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_range";
      node.code = "\n      function ".concat(node.name, "(a, b, s) {\n        const min = Math.min(a, b);\n        const max = Math.max(a, b);\n        const count = Math.ceil((max - min) / s);\n        return Array(count).fill(a).map((x, y) => x + y * s);\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Number]);
      node.argList = [["a", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()], ["b", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()], ["s", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getElementAtDefinitionNode",
    value: function getElementAtDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_element_at";
      node.code = "\n      function ".concat(node.name, "(l, p) {\n        if (p > l.length - 1) {\n          throw \"ERROR: the given list does not contain an index \" + p;\n        }\n\n        return l[p];\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any]);
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])], ["p", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getRemoveAtDefinitionNode",
    value: function getRemoveAtDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_remove_at";
      node.code = "\n      function ".concat(node.name, "(l, p) {\n        if (p > l.length - 1) {\n          throw \"ERROR: the given list does not contain an index \" + p;\n        }\n\n        let copy = [...l];\n        copy.splice(p, 1);\n        return copy;\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any]);
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])], ["p", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getRandomElementDefinitionNode",
    value: function getRandomElementDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_random_element";
      node.code = "\n      function ".concat(node.name, "(l) {\n        if (l.length < 1) {\n          throw \"ERROR: the given list is empty\";\n        }\n\n        return l[Math.floor(Math.random() * l.length)];\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any]);
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])], ["p", _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType()]];
      return node;
    }
  }, {
    key: "getAverageDefinitionNode",
    value: function getAverageDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_average";
      node.code = "\n      function ".concat(node.name, "(l) {\n        if (l.length < 1) {\n          throw \"ERROR: the given list is empty\";\n        }\n\n        return __standard_sum(l) / l.length;\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Number])]];
      return node;
    }
  }, {
    key: "getMedianDefinitionNode",
    value: function getMedianDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_median";
      node.code = "\n      function ".concat(node.name, "(l) {\n        if (l.length < 1) {\n          throw \"ERROR: the given list is empty\";\n        }\n\n        const sorted = [...l].sort();\n        const half = Math.floor(l.length / 2);\n\n        if (l.length % 2 === 1) {\n          return sorted[half];\n        }\n\n        return (sorted[half - 1] + sorted[half]) / 2;\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Number])]];
      return node;
    }
  }, {
    key: "getModeDefinitionNode",
    value: function getModeDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_mode";
      node.code = "\n      function ".concat(node.name, "(l) {\n        var m = new Map();\n        var max_count = 0;\n        for (const v of l) {\n          const count = (m.get(v) || 0) + 1;\n          m.set(v, count);\n          max_count = Math.max(count, max_count);\n        }\n\n        var mode = [];\n        m.forEach((v, k) => {\n          if (v === max_count) {\n            mode.push(k);\n          }\n        });\n\n        return mode;\n      }\n    ");
      node.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType.numberType();
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Number])]];
      return node;
    }
  }, {
    key: "getShuffleDefinitionNode",
    value: function getShuffleDefinitionNode() {
      var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.ASTNode();
      node.name = "__standard_shuffle";
      node.code = "\n      function ".concat(node.name, "(l) {\n        let copy = [...l];\n\n        for (let i = copy.length - 1; i > 0; i--) {\n          const j = Math.floor(Math.random() * (i + 1));\n          [copy[i], copy[j]] = [copy[j], copy[i]];\n        }\n      }\n    ");
      node.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any]);
      node.argList = [["l", new _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanType([_CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.List, _CommonASTNode__WEBPACK_IMPORTED_MODULE_2__.PanTypePart.Any])]];
      return node;
    }
  }]);

  return CommonStandardLibrary;
}();

/***/ }),

/***/ "./src/languages/common/CommonVisitor.ts":
/*!***********************************************!*\
  !*** ./src/languages/common/CommonVisitor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonVisitor": () => (/* binding */ CommonVisitor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var antlr4ts_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antlr4ts/tree */ "./node_modules/antlr4ts/tree/index.js");
/* harmony import */ var antlr4ts_tree__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antlr4ts_tree__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CommonSymbolTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CommonSymbolTable */ "./src/languages/CommonSymbolTable.ts");
/* harmony import */ var _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CommonASTNode */ "./src/languages/CommonASTNode.ts");
/* harmony import */ var _CommonStandardLibrary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CommonStandardLibrary */ "./src/languages/common/CommonStandardLibrary.ts");
/* harmony import */ var _CommonErrorHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CommonErrorHandler */ "./src/languages/common/CommonErrorHandler.ts");
/* harmony import */ var _CommonLocalizedStrings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CommonLocalizedStrings */ "./src/languages/common/CommonLocalizedStrings.ts");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var CommonVisitor = /*#__PURE__*/function (_AbstractParseTreeVis) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CommonVisitor, _AbstractParseTreeVis);

  var _super = _createSuper(CommonVisitor);

  function CommonVisitor() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommonVisitor);

    _this = _super.call(this);
    _this.symbolTable = new _CommonSymbolTable__WEBPACK_IMPORTED_MODULE_7__.SymbolTable();
    _this.localizedStrings = new _CommonLocalizedStrings__WEBPACK_IMPORTED_MODULE_11__.CommonLocalizedStrings();
    _this.errorHandler = new _CommonErrorHandler__WEBPACK_IMPORTED_MODULE_10__.CommonErrorHandler(_this.localizedStrings);
    _this.symbolTable = _CommonStandardLibrary__WEBPACK_IMPORTED_MODULE_9__.CommonStandardLibrary.getStandardLibrarySymbolTable();
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CommonVisitor, [{
    key: "setErrorHandler",
    value: function setErrorHandler(errorHandler) {
      this.errorHandler = errorHandler;
    }
  }, {
    key: "defaultResult",
    value: function defaultResult() {
      return new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
    }
  }, {
    key: "visitProgram",
    value: function visitProgram(ctx) {
      var _this2 = this;

      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      newNode.code = "{\r\n";
      newNode.code += this.symbolTable.getCode();
      ctx.topStatement().map(function (topStatement) {
        newNode.code += (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", _this2).call(_this2, topStatement).code + "\r\n";
      });
      newNode.code += "\r\n}";
      return newNode;
    }
  }, {
    key: "visitTopStatement",
    value: function visitTopStatement(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var statement = ctx.getChild(0);
      newNode.code = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, statement).code;
      return newNode;
    }
  }, {
    key: "visitInnerStatement",
    value: function visitInnerStatement(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var statement = ctx.getChild(0);
      newNode.code = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, statement).code;
      return newNode;
    }
  }, {
    key: "visitStatement",
    value: function visitStatement(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var statement = ctx.getChild(0);
      newNode.code = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, statement).code + ";";
      return newNode;
    }
  }, {
    key: "visitGlobalStatement",
    value: function visitGlobalStatement(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var id = ctx.IDENTIFIER();
      var node = this.errorHandler.assertNameDefinedInGlobalScope(this.symbolTable, id.text, id.symbol);

      if (node) {
        this.symbolTable.pushNode(node);
      }

      return newNode;
    }
  }, {
    key: "visitFunctionDeclaration",
    value: function visitFunctionDeclaration(ctx) {
      var _this3 = this;

      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var id = ctx.IDENTIFIER();
      this.errorHandler.assertNameNotDefined(this.symbolTable, id.text, id.symbol);
      var optionalType = ctx.type();
      var optionalParamList = ctx.parameterList();
      var paramList;
      this.symbolTable.pushScope(id.text);
      newNode.name = id.text;

      if (optionalParamList) {
        paramList = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, optionalParamList);
        newNode.argList = paramList.argList;
      }

      if (optionalType) {
        var type = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, optionalType);

        newNode.type = type.type;
      }

      this.symbolTable.pushGlobalNode(newNode);
      newNode.code = "function ".concat(id.text, "(");

      if (optionalParamList && paramList) {
        newNode.code += paramList.code;
      }

      newNode.code += ") {\r\n";
      ctx.innerStatement().map(function (innerStatement) {
        newNode.code += (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", _this3).call(_this3, innerStatement).code + "\r\n";
      });
      newNode.code += "}";
      this.symbolTable.popScope();
      return newNode;
    }
  }, {
    key: "visitParameterList",
    value: function visitParameterList(ctx) {
      var _this4 = this;

      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var ids = ctx.IDENTIFIER();
      var types = ctx.type();
      ids.map(function (id, i) {
        _this4.errorHandler.assertNameNotDefined(_this4.symbolTable, id.text, id.symbol);

        var type = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", _this4).call(_this4, types[i]);

        var node = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
        node.code = id.text;
        node.type = type.type;
        node.name = id.text;

        _this4.symbolTable.pushNode(node);

        newNode.argList.concat([id.text, type.type]);
        newNode.code += id.text + ",";
      });
      return newNode;
    }
  }, {
    key: "visitVariableDeclaration",
    value: function visitVariableDeclaration(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var id = ctx.IDENTIFIER();
      this.errorHandler.assertNameNotDefined(this.symbolTable, id.text, id.symbol);

      var type = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.type());

      var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

      this.errorHandler.assertNodeType(expr, type.type, ctx.expression());
      newNode.name = id.text;
      newNode.type = type.type;
      var constant = ctx.CONSTANT();

      if (constant) {
        newNode.type.isConst = true;
      }

      this.symbolTable.pushNode(newNode);

      if (constant) {
        newNode.code = "const ".concat(id.text, " = ").concat(expr.code);
      } else {
        newNode.code = "let ".concat(id.text, " = ").concat(expr.code);
      }

      return newNode;
    }
  }, {
    key: "visitLogicalType",
    value: function visitLogicalType(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.logicalType();
      return newNode;
    }
  }, {
    key: "visitNumberType",
    value: function visitNumberType(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.numberType();
      return newNode;
    }
  }, {
    key: "visitTextType",
    value: function visitTextType(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.textType();
      return newNode;
    }
  }, {
    key: "visitListType",
    value: function visitListType(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();

      var subType = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.type());

      var typeList = [_CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanTypePart.List].concat(subType.type.type);
      newNode.type = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType(typeList);
      return newNode;
    }
  }, {
    key: "visitParenthesisExpression",
    value: function visitParenthesisExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();

      var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

      newNode.code = "(".concat(expr.code, ")");
      newNode.type = expr.type;
      return newNode;
    }
  }, {
    key: "visitPlusExpression",
    value: function visitPlusExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();

      var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

      this.errorHandler.assertNodeTypeNumber(expr, ctx.expression());
      newNode.code = "+".concat(expr.code);
      newNode.type = expr.type;
      return newNode;
    }
  }, {
    key: "visitMinusExpression",
    value: function visitMinusExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();

      var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

      this.errorHandler.assertNodeTypeNumber(expr, ctx.expression());
      newNode.code = "-".concat(expr.code);
      newNode.type = expr.type;
      return newNode;
    }
  }, {
    key: "visitNotExpression",
    value: function visitNotExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();

      var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

      this.errorHandler.assertNodeTypeLogical(expr, ctx.expression());
      newNode.code = "!".concat(expr.code);
      newNode.type = expr.type;
      return newNode;
    }
  }, {
    key: "visitPowerExpression",
    value: function visitPowerExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var leftChild = ctx.expression(0);

      var leftExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, leftChild);

      this.errorHandler.assertNodeTypeNumber(leftExpr, leftChild);
      var rightChild = ctx.expression(1);

      var rightExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, rightChild);

      this.errorHandler.assertNodeTypeNumber(rightExpr, rightChild);
      newNode.code = "Math.pow(".concat(leftExpr.code, ", ").concat(rightExpr.code, ")");
      newNode.type = leftExpr.type;
      return newNode;
    }
  }, {
    key: "visitMultiplyExpression",
    value: function visitMultiplyExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var leftChild = ctx.expression(0);

      var leftExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, leftChild);

      this.errorHandler.assertNodeTypeNumber(leftExpr, leftChild);
      var rightChild = ctx.expression(1);

      var rightExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, rightChild);

      this.errorHandler.assertNodeTypeNumber(rightExpr, rightChild);
      newNode.code = "".concat(leftExpr.code, "*").concat(rightExpr.code);
      newNode.type = leftExpr.type;
      return newNode;
    }
  }, {
    key: "visitDivideExpression",
    value: function visitDivideExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var leftChild = ctx.expression(0);

      var leftExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, leftChild);

      this.errorHandler.assertNodeTypeNumber(leftExpr, leftChild);
      var rightChild = ctx.expression(1);

      var rightExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, rightChild);

      this.errorHandler.assertNodeTypeNumber(rightExpr, rightChild);
      newNode.code = "".concat(leftExpr.code, "/").concat(rightExpr.code);
      newNode.type = leftExpr.type;
      return newNode;
    }
  }, {
    key: "visitRemainderExpression",
    value: function visitRemainderExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var leftChild = ctx.expression(0);

      var leftExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, leftChild);

      this.errorHandler.assertNodeTypeNumber(leftExpr, leftChild);
      var rightChild = ctx.expression(1);

      var rightExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, rightChild);

      this.errorHandler.assertNodeTypeNumber(rightExpr, rightChild);
      newNode.code = "".concat(leftExpr.code, "%").concat(rightExpr.code);
      newNode.type = leftExpr.type;
      return newNode;
    }
  }, {
    key: "visitAddExpression",
    value: function visitAddExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var leftChild = ctx.expression(0);

      var leftExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, leftChild);

      var allowedTypes = [_CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.numberType(), _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.textType()];
      this.errorHandler.assertNodeTypeAnyOf(leftExpr, allowedTypes, leftChild);
      var rightChild = ctx.expression(1);

      var rightExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, rightChild);

      this.errorHandler.assertNodeType(rightExpr, leftExpr.type, rightChild);
      newNode.code = "".concat(leftExpr.code, "+").concat(rightExpr.code);
      newNode.type = leftExpr.type;
      return newNode;
    }
  }, {
    key: "visitSubtractExpression",
    value: function visitSubtractExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var leftChild = ctx.expression(0);

      var leftExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, leftChild);

      this.errorHandler.assertNodeTypeNumber(leftExpr, leftChild);
      var rightChild = ctx.expression(1);

      var rightExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, rightChild);

      this.errorHandler.assertNodeTypeNumber(rightExpr, rightChild);
      newNode.code = "".concat(leftExpr.code, "-").concat(rightExpr.code);
      newNode.type = leftExpr.type;
      return newNode;
    }
  }, {
    key: "visitLessExpression",
    value: function visitLessExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var leftChild = ctx.expression(0);

      var leftExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, leftChild);

      this.errorHandler.assertNodeTypeNumber(leftExpr, leftChild);
      var rightChild = ctx.expression(1);

      var rightExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, rightChild);

      this.errorHandler.assertNodeTypeNumber(rightExpr, rightChild);
      newNode.code = "".concat(leftExpr.code, " < ").concat(rightExpr.code);
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.logicalType();
      return newNode;
    }
  }, {
    key: "visitLessEqualExpression",
    value: function visitLessEqualExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var leftChild = ctx.expression(0);

      var leftExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, leftChild);

      this.errorHandler.assertNodeTypeNumber(leftExpr, leftChild);
      var rightChild = ctx.expression(1);

      var rightExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, rightChild);

      this.errorHandler.assertNodeTypeNumber(rightExpr, rightChild);
      newNode.code = "".concat(leftExpr.code, " <= ").concat(rightExpr.code);
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.logicalType();
      return newNode;
    }
  }, {
    key: "visitGreaterExpression",
    value: function visitGreaterExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var leftChild = ctx.expression(0);

      var leftExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, leftChild);

      this.errorHandler.assertNodeTypeNumber(leftExpr, leftChild);
      var rightChild = ctx.expression(1);

      var rightExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, rightChild);

      this.errorHandler.assertNodeTypeNumber(rightExpr, rightChild);
      newNode.code = "".concat(leftExpr.code, " > ").concat(rightExpr.code);
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.logicalType();
      return newNode;
    }
  }, {
    key: "visitGreaterEqualExpression",
    value: function visitGreaterEqualExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var leftChild = ctx.expression(0);

      var leftExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, leftChild);

      this.errorHandler.assertNodeTypeNumber(leftExpr, leftChild);
      var rightChild = ctx.expression(1);

      var rightExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, rightChild);

      this.errorHandler.assertNodeTypeNumber(rightExpr, rightChild);
      newNode.code = "".concat(leftExpr.code, " >= ").concat(rightExpr.code);
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.logicalType();
      return newNode;
    }
  }, {
    key: "visitEqualExpression",
    value: function visitEqualExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var leftChild = ctx.expression(0);

      var leftExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, leftChild);

      var rightChild = ctx.expression(1);

      var rightExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, rightChild);

      this.errorHandler.assertNodeType(rightExpr, leftExpr.type, rightChild);
      newNode.code = "".concat(leftExpr.code, " == ").concat(rightExpr.code);
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.logicalType();
      return newNode;
    }
  }, {
    key: "visitDifferentExpression",
    value: function visitDifferentExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var leftChild = ctx.expression(0);

      var leftExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, leftChild);

      var rightChild = ctx.expression(1);

      var rightExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, rightChild);

      this.errorHandler.assertNodeType(rightExpr, leftExpr.type, rightChild);
      newNode.code = "".concat(leftExpr.code, " != ").concat(rightExpr.code);
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.logicalType();
      return newNode;
    }
  }, {
    key: "visitAndExpression",
    value: function visitAndExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var leftChild = ctx.expression(0);

      var leftExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, leftChild);

      this.errorHandler.assertNodeTypeLogical(leftExpr, leftChild);
      var rightChild = ctx.expression(1);

      var rightExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, rightChild);

      this.errorHandler.assertNodeTypeLogical(rightExpr, rightChild);
      newNode.code = "".concat(leftExpr.code, " && ").concat(rightExpr.code);
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.logicalType();
      return newNode;
    }
  }, {
    key: "visitOrExpression",
    value: function visitOrExpression(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var leftChild = ctx.expression(0);

      var leftExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, leftChild);

      this.errorHandler.assertNodeTypeLogical(leftExpr, leftChild);
      var rightChild = ctx.expression(1);

      var rightExpr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, rightChild);

      this.errorHandler.assertNodeTypeLogical(rightExpr, rightChild);
      newNode.code = "".concat(leftExpr.code, " || ").concat(rightExpr.code);
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.logicalType();
      return newNode;
    }
  }, {
    key: "visitAtomExpression",
    value: function visitAtomExpression(ctx) {
      return (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.atom());
    }
  }, {
    key: "visitTrueAtom",
    value: function visitTrueAtom(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      newNode.code = "true";
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.logicalType();
      return newNode;
    }
  }, {
    key: "visitFalseAtom",
    value: function visitFalseAtom(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      newNode.code = "false";
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.logicalType();
      return newNode;
    }
  }, {
    key: "visitNumberAtom",
    value: function visitNumberAtom(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      newNode.code = ctx.numberLiteral().text;
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.numberType();
      return newNode;
    }
  }, {
    key: "visitTextAtom",
    value: function visitTextAtom(ctx) {
      return (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.textLiteral());
    }
  }, {
    key: "visitSimpleTextLiteral",
    value: function visitSimpleTextLiteral(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.textType();
      newNode.code = "'";
      ctx.TEXT_CONTENT().map(function (textContent) {
        newNode.code += textContent.text;
      });
      newNode.code += "'";
      return newNode;
    }
  }, {
    key: "visitInterpolatedTextLiteral",
    value: function visitInterpolatedTextLiteral(ctx) {
      var _this5 = this;

      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.textType();
      newNode.code = "`";
      ctx.interpolatedText().map(function (interpolatedText) {
        newNode.code += (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", _this5).call(_this5, interpolatedText).code;
      });
      newNode.code += "`";
      return newNode;
    }
  }, {
    key: "visitInterpolatedSimpleText",
    value: function visitInterpolatedSimpleText(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      newNode.type = _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.textType();
      newNode.code = ctx.TEXT_CONTENT().text.replace(/^[\\]`/g, "\\`");
      return newNode;
    }
  }, {
    key: "visitInterpolatedExpressionText",
    value: function visitInterpolatedExpressionText(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();

      var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

      var toTextFunctionName = this.localizedStrings.FUNCTION_TO_TEXT;
      newNode.code = "${" + toTextFunctionName + "(" + expr.code + ")}";
      newNode.type = expr.type;
      return newNode;
    }
  }, {
    key: "visitFunctionCallAtom",
    value: function visitFunctionCallAtom(ctx) {
      return (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.functionCall());
    }
  }, {
    key: "visitIdentifierAtom",
    value: function visitIdentifierAtom(ctx) {
      var node = this.errorHandler.assertNameDefined(this.symbolTable, ctx.text, ctx.start);

      if (node) {
        node.code = node.name;
        return node;
      }

      return new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
    }
  }, {
    key: "visitAssignment",
    value: function visitAssignment(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var id = ctx.IDENTIFIER();
      var node = this.errorHandler.assertNameDefined(this.symbolTable, id.text, id.symbol);

      if (node) {
        this.errorHandler.assertIdentifierTypeNotConst(node, id.symbol);

        var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

        this.errorHandler.assertNodeType(expr, node.type, ctx.expression());
        newNode.code = "".concat(id.text, " = ").concat(expr.code);
      }

      return newNode;
    }
  }, {
    key: "visitAddAssignment",
    value: function visitAddAssignment(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var id = ctx.IDENTIFIER();
      var node = this.errorHandler.assertNameDefined(this.symbolTable, id.text, id.symbol);

      if (node) {
        this.errorHandler.assertIdentifierTypeNotConst(node, id.symbol);

        var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

        var allowedTypes = [_CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.numberType(), _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType.textType()];
        this.errorHandler.assertNodeTypeAnyOf(expr, allowedTypes, ctx.expression());
        this.errorHandler.assertNodeType(expr, node.type, ctx.expression());
        newNode.code = "".concat(id.text, " += ").concat(expr.code);
      }

      return newNode;
    }
  }, {
    key: "visitSubtractAssignment",
    value: function visitSubtractAssignment(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var id = ctx.IDENTIFIER();
      var node = this.errorHandler.assertNameDefined(this.symbolTable, id.text, id.symbol);

      if (node) {
        this.errorHandler.assertIdentifierTypeNotConst(node, id.symbol);

        var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

        this.errorHandler.assertNodeTypeNumber(expr, ctx.expression());
        this.errorHandler.assertNodeType(expr, node.type, ctx.expression());
        newNode.code = "".concat(id.text, " -= ").concat(expr.code);
      }

      return newNode;
    }
  }, {
    key: "visitMultiplyAssignment",
    value: function visitMultiplyAssignment(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var id = ctx.IDENTIFIER();
      var node = this.errorHandler.assertNameDefined(this.symbolTable, id.text, id.symbol);

      if (node) {
        this.errorHandler.assertIdentifierTypeNotConst(node, id.symbol);

        var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

        this.errorHandler.assertNodeTypeNumber(expr, ctx.expression());
        this.errorHandler.assertNodeType(expr, node.type, ctx.expression());
        newNode.code = "".concat(id.text, " *= ").concat(expr.code);
      }

      return newNode;
    }
  }, {
    key: "visitDivideAssignment",
    value: function visitDivideAssignment(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var id = ctx.IDENTIFIER();
      var node = this.errorHandler.assertNameDefined(this.symbolTable, id.text, id.symbol);

      if (node) {
        this.errorHandler.assertIdentifierTypeNotConst(node, id.symbol);

        var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

        this.errorHandler.assertNodeTypeNumber(expr, ctx.expression());
        this.errorHandler.assertNodeType(expr, node.type, ctx.expression());
        newNode.code = "".concat(id.text, " /= ").concat(expr.code);
      }

      return newNode;
    }
  }, {
    key: "visitRemainderAssignment",
    value: function visitRemainderAssignment(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var id = ctx.IDENTIFIER();
      var node = this.errorHandler.assertNameDefined(this.symbolTable, id.text, id.symbol);

      if (node) {
        this.errorHandler.assertIdentifierTypeNotConst(node, id.symbol);

        var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

        this.errorHandler.assertNodeTypeNumber(expr, ctx.expression());
        this.errorHandler.assertNodeType(expr, node.type, ctx.expression());
        newNode.code = "".concat(id.text, " %= ").concat(expr.code);
      }

      return newNode;
    }
  }, {
    key: "visitPowerAssignment",
    value: function visitPowerAssignment(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var id = ctx.IDENTIFIER();
      var node = this.errorHandler.assertNameDefined(this.symbolTable, id.text, id.symbol);

      if (node) {
        this.errorHandler.assertIdentifierTypeNotConst(node, id.symbol);

        var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

        this.errorHandler.assertNodeTypeNumber(expr, ctx.expression());
        this.errorHandler.assertNodeType(expr, node.type, ctx.expression());
        newNode.code = "".concat(id.text, " = Math.pow(").concat(id.text, ", ").concat(expr.code, ")");
      }

      return newNode;
    }
  }, {
    key: "visitIfStatement",
    value: function visitIfStatement(ctx) {
      var _this6 = this;

      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();

      var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

      this.errorHandler.assertNodeTypeLogical(expr, ctx.expression());
      this.symbolTable.pushScope();
      newNode.code = "if (".concat(expr.code, ") {\r\n");
      ctx.innerStatement().map(function (innerStatement) {
        newNode.code += (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", _this6).call(_this6, innerStatement).code + "\r\n";
      });
      newNode.code += "}";
      this.symbolTable.popScope();
      var optionalElseIfPart = ctx.elseIfPart();
      optionalElseIfPart.map(function (part) {
        _this6.symbolTable.pushScope();

        newNode.code += (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", _this6).call(_this6, part).code;

        _this6.symbolTable.popScope();
      });
      var optionalElsePart = ctx.elsePart();

      if (optionalElsePart) {
        this.symbolTable.pushScope();
        newNode.code += (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, optionalElsePart).code;
        this.symbolTable.popScope();
      }

      return newNode;
    }
  }, {
    key: "visitElseIfPart",
    value: function visitElseIfPart(ctx) {
      var _this7 = this;

      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();

      var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

      this.errorHandler.assertNodeTypeLogical(expr, ctx.expression());
      newNode.code = "\r\nelse if (".concat(expr.code, ") {\r\n");
      ctx.innerStatement().map(function (innerStatement) {
        newNode.code += (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", _this7).call(_this7, innerStatement).code + "\r\n";
      });
      newNode.code += "}";
      return newNode;
    }
  }, {
    key: "visitElsePart",
    value: function visitElsePart(ctx) {
      var _this8 = this;

      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      newNode.code = "\r\nelse {\r\n";
      ctx.innerStatement().map(function (innerStatement) {
        newNode.code += (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", _this8).call(_this8, innerStatement).code + "\r\n";
      });
      newNode.code += "}";
      return newNode;
    }
  }, {
    key: "visitForInStatement",
    value: function visitForInStatement(ctx) {
      var _this9 = this;

      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var id = ctx.IDENTIFIER();
      this.errorHandler.assertNameNotDefined(this.symbolTable, id.text, id.symbol);

      var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

      var type = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.type());

      var expectedExprType = [_CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanTypePart.List].concat(type.type.type);
      this.errorHandler.assertNodeType(expr, new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType(expectedExprType), ctx.expression());
      this.symbolTable.pushScope();
      var innerNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      innerNode.name = id.text;
      innerNode.type = type.type;
      innerNode.code = id.text;
      this.symbolTable.pushNode(innerNode);
      newNode.code = "for (let ".concat(id.text, " of ").concat(expr.code, ") {\r\n");
      ctx.innerStatement().map(function (innerStatement) {
        newNode.code += (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", _this9).call(_this9, innerStatement).code + "\r\n";
      });
      newNode.code += "}";
      this.symbolTable.popScope();
      return newNode;
    }
  }, {
    key: "visitWhileStatement",
    value: function visitWhileStatement(ctx) {
      var _this10 = this;

      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();

      var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, ctx.expression());

      this.errorHandler.assertNodeTypeLogical(expr, ctx.expression());
      this.symbolTable.pushScope();
      newNode.code = "while (".concat(expr.code, ") {\r\n");
      ctx.innerStatement().map(function (innerStatement) {
        newNode.code += (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", _this10).call(_this10, innerStatement).code + "\r\n";
      });
      newNode.code += "}";
      this.symbolTable.popScope();
      return newNode;
    }
  }, {
    key: "visitForeverStatement",
    value: function visitForeverStatement(ctx) {
      var _this11 = this;

      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      this.symbolTable.pushScope();
      newNode.code = "while (true) {\r\n";
      ctx.innerStatement().map(function (innerStatement) {
        newNode.code += (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", _this11).call(_this11, innerStatement).code + "\r\n";
      });
      newNode.code += "}";
      this.symbolTable.popScope();
      return newNode;
    }
  }, {
    key: "visitBreakStatement",
    value: function visitBreakStatement(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      newNode.code = "break";
      return newNode;
    }
  }, {
    key: "visitContinueStatement",
    value: function visitContinueStatement(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      newNode.code = "continue";
      return newNode;
    }
  }, {
    key: "visitFunctionCall",
    value: function visitFunctionCall(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var func = ctx.getChild(0);
      this.errorHandler.assertNameDefinedInGlobalScope(this.symbolTable, func.text, ctx.start);
      var node = this.symbolTable.findByNameInGlobalScope(func.text);

      if (node) {
        newNode.name = node.name;
        newNode.type = node.type;
      } else {
        newNode.name = func.text;
      }

      var optionalArgList = ctx.argumentList();
      newNode.code = "".concat(func.text, "(");

      if (optionalArgList) {
        newNode.code += (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, optionalArgList).code;
      }

      newNode.code += ")";
      return newNode;
    }
  }, {
    key: "visitArgumentList",
    value: function visitArgumentList(ctx) {
      var _this12 = this;

      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      ctx.expression().map(function (expr) {
        newNode.code += (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", _this12).call(_this12, expr).code + ",";
      });
      return newNode;
    }
  }, {
    key: "visitReturnStatement",
    value: function visitReturnStatement(ctx) {
      var newNode = new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.ASTNode();
      var optionalExpr = ctx.expression();
      var node = this.symbolTable.findCurrentFunction();

      if (node) {
        if (optionalExpr) {
          var expr = (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonVisitor.prototype), "visit", this).call(this, optionalExpr);

          this.errorHandler.assertNodeType(expr, node.type, optionalExpr);
          newNode.code = "return ".concat(expr.code);
        } else {
          this.errorHandler.assertNodeType(node, new _CommonASTNode__WEBPACK_IMPORTED_MODULE_8__.PanType(), ctx);
          newNode.code = "return";
        }
      }

      return newNode;
    }
  }]);

  return CommonVisitor;
}(antlr4ts_tree__WEBPACK_IMPORTED_MODULE_6__.AbstractParseTreeVisitor);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _get)
/* harmony export */ });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = (0,_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _superPropBase)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
    if (object === null) break;
  }

  return object;
}

/***/ })

}]);