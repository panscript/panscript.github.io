"use strict";
(self["webpackChunkpanscript"] = self["webpackChunkpanscript"] || []).push([["src_languages_pt_br_generated_CustomParser_ts"],{

/***/ "./src/languages/pt_br/generated/CustomParser.ts":
/*!*******************************************************!*\
  !*** ./src/languages/pt_br/generated/CustomParser.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomParser": () => (/* binding */ CustomParser),
/* harmony export */   "ProgramContext": () => (/* binding */ ProgramContext),
/* harmony export */   "TopStatementContext": () => (/* binding */ TopStatementContext),
/* harmony export */   "InnerStatementContext": () => (/* binding */ InnerStatementContext),
/* harmony export */   "StatementContext": () => (/* binding */ StatementContext),
/* harmony export */   "GlobalStatementContext": () => (/* binding */ GlobalStatementContext),
/* harmony export */   "FunctionDeclarationContext": () => (/* binding */ FunctionDeclarationContext),
/* harmony export */   "ParameterListContext": () => (/* binding */ ParameterListContext),
/* harmony export */   "VariableDeclarationContext": () => (/* binding */ VariableDeclarationContext),
/* harmony export */   "TypeContext": () => (/* binding */ TypeContext),
/* harmony export */   "LogicalTypeContext": () => (/* binding */ LogicalTypeContext),
/* harmony export */   "NumberTypeContext": () => (/* binding */ NumberTypeContext),
/* harmony export */   "TextTypeContext": () => (/* binding */ TextTypeContext),
/* harmony export */   "ExpressionContext": () => (/* binding */ ExpressionContext),
/* harmony export */   "ParenthesisExpressionContext": () => (/* binding */ ParenthesisExpressionContext),
/* harmony export */   "PlusExpressionContext": () => (/* binding */ PlusExpressionContext),
/* harmony export */   "MinusExpressionContext": () => (/* binding */ MinusExpressionContext),
/* harmony export */   "NotExpressionContext": () => (/* binding */ NotExpressionContext),
/* harmony export */   "PowerExpressionContext": () => (/* binding */ PowerExpressionContext),
/* harmony export */   "MultiplyExpressionContext": () => (/* binding */ MultiplyExpressionContext),
/* harmony export */   "DivideExpressionContext": () => (/* binding */ DivideExpressionContext),
/* harmony export */   "RemainderExpressionContext": () => (/* binding */ RemainderExpressionContext),
/* harmony export */   "AddExpressionContext": () => (/* binding */ AddExpressionContext),
/* harmony export */   "SubtractExpressionContext": () => (/* binding */ SubtractExpressionContext),
/* harmony export */   "LessExpressionContext": () => (/* binding */ LessExpressionContext),
/* harmony export */   "LessEqualExpressionContext": () => (/* binding */ LessEqualExpressionContext),
/* harmony export */   "GreaterExpressionContext": () => (/* binding */ GreaterExpressionContext),
/* harmony export */   "GreaterEqualExpressionContext": () => (/* binding */ GreaterEqualExpressionContext),
/* harmony export */   "EqualExpressionContext": () => (/* binding */ EqualExpressionContext),
/* harmony export */   "DifferentExpressionContext": () => (/* binding */ DifferentExpressionContext),
/* harmony export */   "AndExpressionContext": () => (/* binding */ AndExpressionContext),
/* harmony export */   "OrExpressionContext": () => (/* binding */ OrExpressionContext),
/* harmony export */   "AtomExpressionContext": () => (/* binding */ AtomExpressionContext),
/* harmony export */   "AtomContext": () => (/* binding */ AtomContext),
/* harmony export */   "TrueAtomContext": () => (/* binding */ TrueAtomContext),
/* harmony export */   "FalseAtomContext": () => (/* binding */ FalseAtomContext),
/* harmony export */   "NumberAtomContext": () => (/* binding */ NumberAtomContext),
/* harmony export */   "TextAtomContext": () => (/* binding */ TextAtomContext),
/* harmony export */   "FunctionCallAtomContext": () => (/* binding */ FunctionCallAtomContext),
/* harmony export */   "IdentifierAtomContext": () => (/* binding */ IdentifierAtomContext),
/* harmony export */   "NumberLiteralContext": () => (/* binding */ NumberLiteralContext),
/* harmony export */   "TextLiteralContext": () => (/* binding */ TextLiteralContext),
/* harmony export */   "SimpleTextLiteralContext": () => (/* binding */ SimpleTextLiteralContext),
/* harmony export */   "InterpolatedTextLiteralContext": () => (/* binding */ InterpolatedTextLiteralContext),
/* harmony export */   "InterpolatedTextContext": () => (/* binding */ InterpolatedTextContext),
/* harmony export */   "InterpolatedSimpleTextContext": () => (/* binding */ InterpolatedSimpleTextContext),
/* harmony export */   "InterpolatedExpressionTextContext": () => (/* binding */ InterpolatedExpressionTextContext),
/* harmony export */   "FunctionCallContext": () => (/* binding */ FunctionCallContext),
/* harmony export */   "ArgumentListContext": () => (/* binding */ ArgumentListContext),
/* harmony export */   "VariableAssignmentContext": () => (/* binding */ VariableAssignmentContext),
/* harmony export */   "AssignmentContext": () => (/* binding */ AssignmentContext),
/* harmony export */   "AddAssignmentContext": () => (/* binding */ AddAssignmentContext),
/* harmony export */   "SubtractAssignmentContext": () => (/* binding */ SubtractAssignmentContext),
/* harmony export */   "MultiplyAssignmentContext": () => (/* binding */ MultiplyAssignmentContext),
/* harmony export */   "DivideAssignmentContext": () => (/* binding */ DivideAssignmentContext),
/* harmony export */   "RemainderAssignmentContext": () => (/* binding */ RemainderAssignmentContext),
/* harmony export */   "PowerAssignmentContext": () => (/* binding */ PowerAssignmentContext),
/* harmony export */   "IfStatementContext": () => (/* binding */ IfStatementContext),
/* harmony export */   "ElseIfPartContext": () => (/* binding */ ElseIfPartContext),
/* harmony export */   "ElsePartContext": () => (/* binding */ ElsePartContext),
/* harmony export */   "ForFromToStatementContext": () => (/* binding */ ForFromToStatementContext),
/* harmony export */   "WhileStatementContext": () => (/* binding */ WhileStatementContext),
/* harmony export */   "ForeverStatementContext": () => (/* binding */ ForeverStatementContext),
/* harmony export */   "BreakStatementContext": () => (/* binding */ BreakStatementContext),
/* harmony export */   "ContinueStatementContext": () => (/* binding */ ContinueStatementContext),
/* harmony export */   "ReturnStatementContext": () => (/* binding */ ReturnStatementContext),
/* harmony export */   "EosContext": () => (/* binding */ EosContext)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var antlr4ts_atn_ATN__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antlr4ts/atn/ATN */ "./node_modules/antlr4ts/atn/ATN.js");
/* harmony import */ var antlr4ts_atn_ATN__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antlr4ts_atn_ATN__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antlr4ts_atn_ATNDeserializer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antlr4ts/atn/ATNDeserializer */ "./node_modules/antlr4ts/atn/ATNDeserializer.js");
/* harmony import */ var antlr4ts_atn_ATNDeserializer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antlr4ts_atn_ATNDeserializer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antlr4ts_FailedPredicateException__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antlr4ts/FailedPredicateException */ "./node_modules/antlr4ts/FailedPredicateException.js");
/* harmony import */ var antlr4ts_FailedPredicateException__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antlr4ts_FailedPredicateException__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antlr4ts_NoViableAltException__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antlr4ts/NoViableAltException */ "./node_modules/antlr4ts/NoViableAltException.js");
/* harmony import */ var antlr4ts_NoViableAltException__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antlr4ts_NoViableAltException__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antlr4ts_Parser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antlr4ts/Parser */ "./node_modules/antlr4ts/Parser.js");
/* harmony import */ var antlr4ts_Parser__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antlr4ts_Parser__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antlr4ts/ParserRuleContext */ "./node_modules/antlr4ts/ParserRuleContext.js");
/* harmony import */ var antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antlr4ts_atn_ParserATNSimulator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antlr4ts/atn/ParserATNSimulator */ "./node_modules/antlr4ts/atn/ParserATNSimulator.js");
/* harmony import */ var antlr4ts_atn_ParserATNSimulator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antlr4ts_atn_ParserATNSimulator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antlr4ts/RecognitionException */ "./node_modules/antlr4ts/RecognitionException.js");
/* harmony import */ var antlr4ts_Token__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antlr4ts/Token */ "./node_modules/antlr4ts/Token.js");
/* harmony import */ var antlr4ts_VocabularyImpl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antlr4ts/VocabularyImpl */ "./node_modules/antlr4ts/VocabularyImpl.js");
/* harmony import */ var antlr4ts_VocabularyImpl__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antlr4ts_VocabularyImpl__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antlr4ts_misc_Utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antlr4ts/misc/Utils */ "./node_modules/antlr4ts/misc/Utils.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }












var CustomParser = /*#__PURE__*/function (_Parser) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CustomParser, _Parser);

  var _super = _createSuper(CustomParser);

  function CustomParser(input) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CustomParser);

    _this = _super.call(this, input);
    _this._interp = new antlr4ts_atn_ParserATNSimulator__WEBPACK_IMPORTED_MODULE_13__.ParserATNSimulator(CustomParser._ATN, (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CustomParser, [{
    key: "vocabulary",
    get: function get() {
      return CustomParser.VOCABULARY;
    }
  }, {
    key: "grammarFileName",
    get: function get() {
      return "CustomParser.g4";
    }
  }, {
    key: "ruleNames",
    get: function get() {
      return CustomParser.ruleNames;
    }
  }, {
    key: "serializedATN",
    get: function get() {
      return CustomParser._serializedATN;
    }
  }, {
    key: "createFailedPredicateException",
    value: function createFailedPredicateException(predicate, message) {
      return new antlr4ts_FailedPredicateException__WEBPACK_IMPORTED_MODULE_9__.FailedPredicateException(this, predicate, message);
    }
  }, {
    key: "program",
    value: function program() {
      var _localctx = new ProgramContext(this._ctx, this.state);

      this.enterRule(_localctx, 0, CustomParser.RULE_program);

      var _la;

      try {
        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 57;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          while (_la === CustomParser.NEWLINE) {
            {
              {
                this.state = 54;
                this.match(CustomParser.NEWLINE);
              }
            }
            this.state = 59;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          }

          this.state = 63;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          while ((_la & ~0x1F) === 0 && (1 << _la & (1 << CustomParser.CONSTANT | 1 << CustomParser.FOR | 1 << CustomParser.FOREVER | 1 << CustomParser.FUNCTION | 1 << CustomParser.IF | 1 << CustomParser.WHILE | 1 << CustomParser.LOGICAL | 1 << CustomParser.NUMBER | 1 << CustomParser.TEXT)) !== 0 || _la === CustomParser.IDENTIFIER) {
            {
              {
                this.state = 60;
                this.topStatement();
              }
            }
            this.state = 65;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          }
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "topStatement",
    value: function topStatement() {
      var _localctx = new TopStatementContext(this._ctx, this.state);

      this.enterRule(_localctx, 2, CustomParser.RULE_topStatement);

      try {
        this.state = 70;

        this._errHandler.sync(this);

        switch (this._input.LA(1)) {
          case CustomParser.FUNCTION:
            this.enterOuterAlt(_localctx, 1);
            {
              this.state = 66;
              this.functionDeclaration();
              this.state = 67;
              this.eos();
            }
            break;

          case CustomParser.CONSTANT:
          case CustomParser.FOR:
          case CustomParser.FOREVER:
          case CustomParser.IF:
          case CustomParser.WHILE:
          case CustomParser.LOGICAL:
          case CustomParser.NUMBER:
          case CustomParser.TEXT:
          case CustomParser.IDENTIFIER:
            this.enterOuterAlt(_localctx, 2);
            {
              this.state = 69;
              this.statement();
            }
            break;

          default:
            throw new antlr4ts_NoViableAltException__WEBPACK_IMPORTED_MODULE_10__.NoViableAltException(this);
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "innerStatement",
    value: function innerStatement() {
      var _localctx = new InnerStatementContext(this._ctx, this.state);

      this.enterRule(_localctx, 4, CustomParser.RULE_innerStatement);

      try {
        this.state = 85;

        this._errHandler.sync(this);

        switch (this._input.LA(1)) {
          case CustomParser.GLOBAL:
            this.enterOuterAlt(_localctx, 1);
            {
              this.state = 72;
              this.globalStatement();
              this.state = 73;
              this.eos();
            }
            break;

          case CustomParser.BREAK:
            this.enterOuterAlt(_localctx, 2);
            {
              this.state = 75;
              this.breakStatement();
              this.state = 76;
              this.eos();
            }
            break;

          case CustomParser.CONTINUE:
            this.enterOuterAlt(_localctx, 3);
            {
              this.state = 78;
              this.continueStatement();
              this.state = 79;
              this.eos();
            }
            break;

          case CustomParser.RETURN:
            this.enterOuterAlt(_localctx, 4);
            {
              this.state = 81;
              this.returnStatement();
              this.state = 82;
              this.eos();
            }
            break;

          case CustomParser.CONSTANT:
          case CustomParser.FOR:
          case CustomParser.FOREVER:
          case CustomParser.IF:
          case CustomParser.WHILE:
          case CustomParser.LOGICAL:
          case CustomParser.NUMBER:
          case CustomParser.TEXT:
          case CustomParser.IDENTIFIER:
            this.enterOuterAlt(_localctx, 5);
            {
              this.state = 84;
              this.statement();
            }
            break;

          default:
            throw new antlr4ts_NoViableAltException__WEBPACK_IMPORTED_MODULE_10__.NoViableAltException(this);
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "statement",
    value: function statement() {
      var _localctx = new StatementContext(this._ctx, this.state);

      this.enterRule(_localctx, 6, CustomParser.RULE_statement);

      try {
        this.state = 108;

        this._errHandler.sync(this);

        switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
          case 1:
            this.enterOuterAlt(_localctx, 1);
            {
              this.state = 87;
              this.variableDeclaration();
              this.state = 88;
              this.eos();
            }
            break;

          case 2:
            this.enterOuterAlt(_localctx, 2);
            {
              this.state = 90;
              this.variableAssignment();
              this.state = 91;
              this.eos();
            }
            break;

          case 3:
            this.enterOuterAlt(_localctx, 3);
            {
              this.state = 93;
              this.ifStatement();
              this.state = 94;
              this.eos();
            }
            break;

          case 4:
            this.enterOuterAlt(_localctx, 4);
            {
              this.state = 96;
              this.forFromToStatement();
              this.state = 97;
              this.eos();
            }
            break;

          case 5:
            this.enterOuterAlt(_localctx, 5);
            {
              this.state = 99;
              this.whileStatement();
              this.state = 100;
              this.eos();
            }
            break;

          case 6:
            this.enterOuterAlt(_localctx, 6);
            {
              this.state = 102;
              this.foreverStatement();
              this.state = 103;
              this.eos();
            }
            break;

          case 7:
            this.enterOuterAlt(_localctx, 7);
            {
              this.state = 105;
              this.functionCall();
              this.state = 106;
              this.eos();
            }
            break;
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "globalStatement",
    value: function globalStatement() {
      var _localctx = new GlobalStatementContext(this._ctx, this.state);

      this.enterRule(_localctx, 8, CustomParser.RULE_globalStatement);

      try {
        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 110;
          this.match(CustomParser.GLOBAL);
          this.state = 111;
          this.match(CustomParser.IDENTIFIER);
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "functionDeclaration",
    value: function functionDeclaration() {
      var _localctx = new FunctionDeclarationContext(this._ctx, this.state);

      this.enterRule(_localctx, 10, CustomParser.RULE_functionDeclaration);

      var _la;

      try {
        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 113;
          this.match(CustomParser.FUNCTION);
          this.state = 114;
          this.match(CustomParser.IDENTIFIER);
          this.state = 115;
          this.match(CustomParser.OPEN_PARENTHESIS);
          this.state = 117;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          if ((_la & ~0x1F) === 0 && (1 << _la & (1 << CustomParser.LOGICAL | 1 << CustomParser.NUMBER | 1 << CustomParser.TEXT)) !== 0) {
            {
              this.state = 116;
              this.parameterList();
            }
          }

          this.state = 119;
          this.match(CustomParser.CLOSE_PARENTHESIS);
          this.state = 122;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          if (_la === CustomParser.RETURNS) {
            {
              this.state = 120;
              this.match(CustomParser.RETURNS);
              this.state = 121;
              this.type();
            }
          }

          this.state = 125;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          do {
            {
              {
                this.state = 124;
                this.match(CustomParser.NEWLINE);
              }
            }
            this.state = 127;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          } while (_la === CustomParser.NEWLINE);

          this.state = 132;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          while ((_la & ~0x1F) === 0 && (1 << _la & (1 << CustomParser.BREAK | 1 << CustomParser.CONSTANT | 1 << CustomParser.CONTINUE | 1 << CustomParser.FOR | 1 << CustomParser.FOREVER | 1 << CustomParser.GLOBAL | 1 << CustomParser.IF | 1 << CustomParser.RETURN | 1 << CustomParser.WHILE | 1 << CustomParser.LOGICAL | 1 << CustomParser.NUMBER | 1 << CustomParser.TEXT)) !== 0 || _la === CustomParser.IDENTIFIER) {
            {
              {
                this.state = 129;
                this.innerStatement();
              }
            }
            this.state = 134;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          }

          this.state = 135;
          this.match(CustomParser.END);
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "parameterList",
    value: function parameterList() {
      var _localctx = new ParameterListContext(this._ctx, this.state);

      this.enterRule(_localctx, 12, CustomParser.RULE_parameterList);

      var _la;

      try {
        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 137;
          this.type();
          this.state = 138;
          this.match(CustomParser.IDENTIFIER);
          this.state = 145;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          while (_la === CustomParser.COMMA) {
            {
              {
                this.state = 139;
                this.match(CustomParser.COMMA);
                this.state = 140;
                this.type();
                this.state = 141;
                this.match(CustomParser.IDENTIFIER);
              }
            }
            this.state = 147;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          }
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "variableDeclaration",
    value: function variableDeclaration() {
      var _localctx = new VariableDeclarationContext(this._ctx, this.state);

      this.enterRule(_localctx, 14, CustomParser.RULE_variableDeclaration);

      var _la;

      try {
        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 149;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          if (_la === CustomParser.CONSTANT) {
            {
              this.state = 148;
              this.match(CustomParser.CONSTANT);
            }
          }

          this.state = 151;
          this.type();
          this.state = 152;
          this.match(CustomParser.IDENTIFIER);
          this.state = 153;
          this.match(CustomParser.ASSIGN);
          this.state = 154;
          this.expression(0);
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "type",
    value: function type() {
      var _localctx = new TypeContext(this._ctx, this.state);

      this.enterRule(_localctx, 16, CustomParser.RULE_type);

      try {
        this.state = 159;

        this._errHandler.sync(this);

        switch (this._input.LA(1)) {
          case CustomParser.LOGICAL:
            _localctx = new LogicalTypeContext(_localctx);
            this.enterOuterAlt(_localctx, 1);
            {
              this.state = 156;
              this.match(CustomParser.LOGICAL);
            }
            break;

          case CustomParser.NUMBER:
            _localctx = new NumberTypeContext(_localctx);
            this.enterOuterAlt(_localctx, 2);
            {
              this.state = 157;
              this.match(CustomParser.NUMBER);
            }
            break;

          case CustomParser.TEXT:
            _localctx = new TextTypeContext(_localctx);
            this.enterOuterAlt(_localctx, 3);
            {
              this.state = 158;
              this.match(CustomParser.TEXT);
            }
            break;

          default:
            throw new antlr4ts_NoViableAltException__WEBPACK_IMPORTED_MODULE_10__.NoViableAltException(this);
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "expression",
    value: function expression(_p) {
      if (_p === undefined) {
        _p = 0;
      }

      var _parentctx = this._ctx;
      var _parentState = this.state;

      var _localctx = new ExpressionContext(this._ctx, _parentState);

      var _prevctx = _localctx;
      var _startState = 18;
      this.enterRecursionRule(_localctx, 18, CustomParser.RULE_expression, _p);

      try {
        var _alt;

        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 173;

          this._errHandler.sync(this);

          switch (this._input.LA(1)) {
            case CustomParser.OPEN_PARENTHESIS:
              {
                _localctx = new ParenthesisExpressionContext(_localctx);
                this._ctx = _localctx;
                _prevctx = _localctx;
                this.state = 162;
                this.match(CustomParser.OPEN_PARENTHESIS);
                this.state = 163;
                this.expression(0);
                this.state = 164;
                this.match(CustomParser.CLOSE_PARENTHESIS);
              }
              break;

            case CustomParser.ADD:
              {
                _localctx = new PlusExpressionContext(_localctx);
                this._ctx = _localctx;
                _prevctx = _localctx;
                this.state = 166;
                this.match(CustomParser.ADD);
                this.state = 167;
                this.expression(18);
              }
              break;

            case CustomParser.SUBTRACT:
              {
                _localctx = new MinusExpressionContext(_localctx);
                this._ctx = _localctx;
                _prevctx = _localctx;
                this.state = 168;
                this.match(CustomParser.SUBTRACT);
                this.state = 169;
                this.expression(17);
              }
              break;

            case CustomParser.NOT:
              {
                _localctx = new NotExpressionContext(_localctx);
                this._ctx = _localctx;
                _prevctx = _localctx;
                this.state = 170;
                this.match(CustomParser.NOT);
                this.state = 171;
                this.expression(16);
              }
              break;

            case CustomParser.TRUE:
            case CustomParser.FALSE:
            case CustomParser.QUOTE_SINGLE:
            case CustomParser.QUOTE_DOUBLE:
            case CustomParser.IDENTIFIER:
            case CustomParser.DECIMAL_NUMBER:
            case CustomParser.HEX_NUMBER:
            case CustomParser.BINARY_NUMBER:
              {
                _localctx = new AtomExpressionContext(_localctx);
                this._ctx = _localctx;
                _prevctx = _localctx;
                this.state = 172;
                this.atom();
              }
              break;

            default:
              throw new antlr4ts_NoViableAltException__WEBPACK_IMPORTED_MODULE_10__.NoViableAltException(this);
          }

          this._ctx._stop = this._input.tryLT(-1);
          this.state = 219;

          this._errHandler.sync(this);

          _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);

          while (_alt !== 2 && _alt !== antlr4ts_atn_ATN__WEBPACK_IMPORTED_MODULE_7__.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
              if (this._parseListeners != null) {
                this.triggerExitRuleEvent();
              }

              _prevctx = _localctx;
              {
                this.state = 217;

                this._errHandler.sync(this);

                switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                  case 1:
                    {
                      _localctx = new PowerExpressionContext(new ExpressionContext(_parentctx, _parentState));
                      this.pushNewRecursionContext(_localctx, _startState, CustomParser.RULE_expression);
                      this.state = 175;

                      if (!this.precpred(this._ctx, 15)) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                      }

                      this.state = 176;
                      this.match(CustomParser.POWER);
                      this.state = 177;
                      this.expression(15);
                    }
                    break;

                  case 2:
                    {
                      _localctx = new MultiplyExpressionContext(new ExpressionContext(_parentctx, _parentState));
                      this.pushNewRecursionContext(_localctx, _startState, CustomParser.RULE_expression);
                      this.state = 178;

                      if (!this.precpred(this._ctx, 14)) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                      }

                      this.state = 179;
                      this.match(CustomParser.MULTIPLY);
                      this.state = 180;
                      this.expression(15);
                    }
                    break;

                  case 3:
                    {
                      _localctx = new DivideExpressionContext(new ExpressionContext(_parentctx, _parentState));
                      this.pushNewRecursionContext(_localctx, _startState, CustomParser.RULE_expression);
                      this.state = 181;

                      if (!this.precpred(this._ctx, 13)) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                      }

                      this.state = 182;
                      this.match(CustomParser.DIVIDE);
                      this.state = 183;
                      this.expression(14);
                    }
                    break;

                  case 4:
                    {
                      _localctx = new RemainderExpressionContext(new ExpressionContext(_parentctx, _parentState));
                      this.pushNewRecursionContext(_localctx, _startState, CustomParser.RULE_expression);
                      this.state = 184;

                      if (!this.precpred(this._ctx, 12)) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                      }

                      this.state = 185;
                      this.match(CustomParser.REMAINDER);
                      this.state = 186;
                      this.expression(13);
                    }
                    break;

                  case 5:
                    {
                      _localctx = new AddExpressionContext(new ExpressionContext(_parentctx, _parentState));
                      this.pushNewRecursionContext(_localctx, _startState, CustomParser.RULE_expression);
                      this.state = 187;

                      if (!this.precpred(this._ctx, 11)) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                      }

                      this.state = 188;
                      this.match(CustomParser.ADD);
                      this.state = 189;
                      this.expression(12);
                    }
                    break;

                  case 6:
                    {
                      _localctx = new SubtractExpressionContext(new ExpressionContext(_parentctx, _parentState));
                      this.pushNewRecursionContext(_localctx, _startState, CustomParser.RULE_expression);
                      this.state = 190;

                      if (!this.precpred(this._ctx, 10)) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                      }

                      this.state = 191;
                      this.match(CustomParser.SUBTRACT);
                      this.state = 192;
                      this.expression(11);
                    }
                    break;

                  case 7:
                    {
                      _localctx = new LessExpressionContext(new ExpressionContext(_parentctx, _parentState));
                      this.pushNewRecursionContext(_localctx, _startState, CustomParser.RULE_expression);
                      this.state = 193;

                      if (!this.precpred(this._ctx, 9)) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                      }

                      this.state = 194;
                      this.match(CustomParser.LESS);
                      this.state = 195;
                      this.expression(10);
                    }
                    break;

                  case 8:
                    {
                      _localctx = new LessEqualExpressionContext(new ExpressionContext(_parentctx, _parentState));
                      this.pushNewRecursionContext(_localctx, _startState, CustomParser.RULE_expression);
                      this.state = 196;

                      if (!this.precpred(this._ctx, 8)) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                      }

                      this.state = 197;
                      this.match(CustomParser.LESS_OR_EQUAL);
                      this.state = 198;
                      this.expression(9);
                    }
                    break;

                  case 9:
                    {
                      _localctx = new GreaterExpressionContext(new ExpressionContext(_parentctx, _parentState));
                      this.pushNewRecursionContext(_localctx, _startState, CustomParser.RULE_expression);
                      this.state = 199;

                      if (!this.precpred(this._ctx, 7)) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                      }

                      this.state = 200;
                      this.match(CustomParser.GREATER);
                      this.state = 201;
                      this.expression(8);
                    }
                    break;

                  case 10:
                    {
                      _localctx = new GreaterEqualExpressionContext(new ExpressionContext(_parentctx, _parentState));
                      this.pushNewRecursionContext(_localctx, _startState, CustomParser.RULE_expression);
                      this.state = 202;

                      if (!this.precpred(this._ctx, 6)) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                      }

                      this.state = 203;
                      this.match(CustomParser.GREATER_OR_EQUAL);
                      this.state = 204;
                      this.expression(7);
                    }
                    break;

                  case 11:
                    {
                      _localctx = new EqualExpressionContext(new ExpressionContext(_parentctx, _parentState));
                      this.pushNewRecursionContext(_localctx, _startState, CustomParser.RULE_expression);
                      this.state = 205;

                      if (!this.precpred(this._ctx, 5)) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                      }

                      this.state = 206;
                      this.match(CustomParser.EQUAL);
                      this.state = 207;
                      this.expression(6);
                    }
                    break;

                  case 12:
                    {
                      _localctx = new DifferentExpressionContext(new ExpressionContext(_parentctx, _parentState));
                      this.pushNewRecursionContext(_localctx, _startState, CustomParser.RULE_expression);
                      this.state = 208;

                      if (!this.precpred(this._ctx, 4)) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                      }

                      this.state = 209;
                      this.match(CustomParser.DIFFERENT);
                      this.state = 210;
                      this.expression(5);
                    }
                    break;

                  case 13:
                    {
                      _localctx = new AndExpressionContext(new ExpressionContext(_parentctx, _parentState));
                      this.pushNewRecursionContext(_localctx, _startState, CustomParser.RULE_expression);
                      this.state = 211;

                      if (!this.precpred(this._ctx, 3)) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                      }

                      this.state = 212;
                      this.match(CustomParser.AND);
                      this.state = 213;
                      this.expression(4);
                    }
                    break;

                  case 14:
                    {
                      _localctx = new OrExpressionContext(new ExpressionContext(_parentctx, _parentState));
                      this.pushNewRecursionContext(_localctx, _startState, CustomParser.RULE_expression);
                      this.state = 214;

                      if (!this.precpred(this._ctx, 2)) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                      }

                      this.state = 215;
                      this.match(CustomParser.OR);
                      this.state = 216;
                      this.expression(3);
                    }
                    break;
                }
              }
            }

            this.state = 221;

            this._errHandler.sync(this);

            _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
          }
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.unrollRecursionContexts(_parentctx);
      }

      return _localctx;
    }
  }, {
    key: "atom",
    value: function atom() {
      var _localctx = new AtomContext(this._ctx, this.state);

      this.enterRule(_localctx, 20, CustomParser.RULE_atom);

      try {
        this.state = 228;

        this._errHandler.sync(this);

        switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
          case 1:
            _localctx = new TrueAtomContext(_localctx);
            this.enterOuterAlt(_localctx, 1);
            {
              this.state = 222;
              this.match(CustomParser.TRUE);
            }
            break;

          case 2:
            _localctx = new FalseAtomContext(_localctx);
            this.enterOuterAlt(_localctx, 2);
            {
              this.state = 223;
              this.match(CustomParser.FALSE);
            }
            break;

          case 3:
            _localctx = new NumberAtomContext(_localctx);
            this.enterOuterAlt(_localctx, 3);
            {
              this.state = 224;
              this.numberLiteral();
            }
            break;

          case 4:
            _localctx = new TextAtomContext(_localctx);
            this.enterOuterAlt(_localctx, 4);
            {
              this.state = 225;
              this.textLiteral();
            }
            break;

          case 5:
            _localctx = new FunctionCallAtomContext(_localctx);
            this.enterOuterAlt(_localctx, 5);
            {
              this.state = 226;
              this.functionCall();
            }
            break;

          case 6:
            _localctx = new IdentifierAtomContext(_localctx);
            this.enterOuterAlt(_localctx, 6);
            {
              this.state = 227;
              this.match(CustomParser.IDENTIFIER);
            }
            break;
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "numberLiteral",
    value: function numberLiteral() {
      var _localctx = new NumberLiteralContext(this._ctx, this.state);

      this.enterRule(_localctx, 22, CustomParser.RULE_numberLiteral);

      var _la;

      try {
        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 230;
          _la = this._input.LA(1);

          if (!((_la - 55 & ~0x1F) === 0 && (1 << _la - 55 & (1 << CustomParser.DECIMAL_NUMBER - 55 | 1 << CustomParser.HEX_NUMBER - 55 | 1 << CustomParser.BINARY_NUMBER - 55)) !== 0)) {
            this._errHandler.recoverInline(this);
          } else {
            if (this._input.LA(1) === antlr4ts_Token__WEBPACK_IMPORTED_MODULE_15__.Token.EOF) {
              this.matchedEOF = true;
            }

            this._errHandler.reportMatch(this);

            this.consume();
          }
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "textLiteral",
    value: function textLiteral() {
      var _localctx = new TextLiteralContext(this._ctx, this.state);

      this.enterRule(_localctx, 24, CustomParser.RULE_textLiteral);

      var _la;

      try {
        this.state = 248;

        this._errHandler.sync(this);

        switch (this._input.LA(1)) {
          case CustomParser.QUOTE_SINGLE:
            _localctx = new SimpleTextLiteralContext(_localctx);
            this.enterOuterAlt(_localctx, 1);
            {
              this.state = 232;
              this.match(CustomParser.QUOTE_SINGLE);
              this.state = 236;

              this._errHandler.sync(this);

              _la = this._input.LA(1);

              while (_la === CustomParser.TEXT_CONTENT) {
                {
                  {
                    this.state = 233;
                    this.match(CustomParser.TEXT_CONTENT);
                  }
                }
                this.state = 238;

                this._errHandler.sync(this);

                _la = this._input.LA(1);
              }

              this.state = 239;
              this.match(CustomParser.QUOTE_SINGLE);
            }
            break;

          case CustomParser.QUOTE_DOUBLE:
            _localctx = new InterpolatedTextLiteralContext(_localctx);
            this.enterOuterAlt(_localctx, 2);
            {
              this.state = 240;
              this.match(CustomParser.QUOTE_DOUBLE);
              this.state = 244;

              this._errHandler.sync(this);

              _la = this._input.LA(1);

              while (_la === CustomParser.TEXT_CONTENT || _la === CustomParser.OPEN_BRACE) {
                {
                  {
                    this.state = 241;
                    this.interpolatedText();
                  }
                }
                this.state = 246;

                this._errHandler.sync(this);

                _la = this._input.LA(1);
              }

              this.state = 247;
              this.match(CustomParser.QUOTE_DOUBLE);
            }
            break;

          default:
            throw new antlr4ts_NoViableAltException__WEBPACK_IMPORTED_MODULE_10__.NoViableAltException(this);
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "interpolatedText",
    value: function interpolatedText() {
      var _localctx = new InterpolatedTextContext(this._ctx, this.state);

      this.enterRule(_localctx, 26, CustomParser.RULE_interpolatedText);

      try {
        this.state = 255;

        this._errHandler.sync(this);

        switch (this._input.LA(1)) {
          case CustomParser.TEXT_CONTENT:
            _localctx = new InterpolatedSimpleTextContext(_localctx);
            this.enterOuterAlt(_localctx, 1);
            {
              this.state = 250;
              this.match(CustomParser.TEXT_CONTENT);
            }
            break;

          case CustomParser.OPEN_BRACE:
            _localctx = new InterpolatedExpressionTextContext(_localctx);
            this.enterOuterAlt(_localctx, 2);
            {
              this.state = 251;
              this.match(CustomParser.OPEN_BRACE);
              this.state = 252;
              this.expression(0);
              this.state = 253;
              this.match(CustomParser.CLOSE_BRACE);
            }
            break;

          default:
            throw new antlr4ts_NoViableAltException__WEBPACK_IMPORTED_MODULE_10__.NoViableAltException(this);
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "functionCall",
    value: function functionCall() {
      var _localctx = new FunctionCallContext(this._ctx, this.state);

      this.enterRule(_localctx, 28, CustomParser.RULE_functionCall);

      var _la;

      try {
        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 257;
          this.match(CustomParser.IDENTIFIER);
          this.state = 258;
          this.match(CustomParser.OPEN_PARENTHESIS);
          this.state = 260;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          if ((_la & ~0x1F) === 0 && (1 << _la & (1 << CustomParser.TRUE | 1 << CustomParser.FALSE | 1 << CustomParser.NOT | 1 << CustomParser.ADD | 1 << CustomParser.SUBTRACT)) !== 0 || (_la - 44 & ~0x1F) === 0 && (1 << _la - 44 & (1 << CustomParser.OPEN_PARENTHESIS - 44 | 1 << CustomParser.QUOTE_SINGLE - 44 | 1 << CustomParser.QUOTE_DOUBLE - 44 | 1 << CustomParser.IDENTIFIER - 44 | 1 << CustomParser.DECIMAL_NUMBER - 44 | 1 << CustomParser.HEX_NUMBER - 44 | 1 << CustomParser.BINARY_NUMBER - 44)) !== 0) {
            {
              this.state = 259;
              this.argumentList();
            }
          }

          this.state = 262;
          this.match(CustomParser.CLOSE_PARENTHESIS);
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "argumentList",
    value: function argumentList() {
      var _localctx = new ArgumentListContext(this._ctx, this.state);

      this.enterRule(_localctx, 30, CustomParser.RULE_argumentList);

      var _la;

      try {
        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 264;
          this.expression(0);
          this.state = 269;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          while (_la === CustomParser.COMMA) {
            {
              {
                this.state = 265;
                this.match(CustomParser.COMMA);
                this.state = 266;
                this.expression(0);
              }
            }
            this.state = 271;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          }
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "variableAssignment",
    value: function variableAssignment() {
      var _localctx = new VariableAssignmentContext(this._ctx, this.state);

      this.enterRule(_localctx, 32, CustomParser.RULE_variableAssignment);

      try {
        this.state = 293;

        this._errHandler.sync(this);

        switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
          case 1:
            _localctx = new AssignmentContext(_localctx);
            this.enterOuterAlt(_localctx, 1);
            {
              this.state = 272;
              this.match(CustomParser.IDENTIFIER);
              this.state = 273;
              this.match(CustomParser.ASSIGN);
              this.state = 274;
              this.expression(0);
            }
            break;

          case 2:
            _localctx = new AddAssignmentContext(_localctx);
            this.enterOuterAlt(_localctx, 2);
            {
              this.state = 275;
              this.match(CustomParser.IDENTIFIER);
              this.state = 276;
              this.match(CustomParser.ADD_ASSIGN);
              this.state = 277;
              this.expression(0);
            }
            break;

          case 3:
            _localctx = new SubtractAssignmentContext(_localctx);
            this.enterOuterAlt(_localctx, 3);
            {
              this.state = 278;
              this.match(CustomParser.IDENTIFIER);
              this.state = 279;
              this.match(CustomParser.SUBTRACT_ASSIGN);
              this.state = 280;
              this.expression(0);
            }
            break;

          case 4:
            _localctx = new MultiplyAssignmentContext(_localctx);
            this.enterOuterAlt(_localctx, 4);
            {
              this.state = 281;
              this.match(CustomParser.IDENTIFIER);
              this.state = 282;
              this.match(CustomParser.MULTIPLY_ASSIGN);
              this.state = 283;
              this.expression(0);
            }
            break;

          case 5:
            _localctx = new DivideAssignmentContext(_localctx);
            this.enterOuterAlt(_localctx, 5);
            {
              this.state = 284;
              this.match(CustomParser.IDENTIFIER);
              this.state = 285;
              this.match(CustomParser.DIVIDE_ASSIGN);
              this.state = 286;
              this.expression(0);
            }
            break;

          case 6:
            _localctx = new RemainderAssignmentContext(_localctx);
            this.enterOuterAlt(_localctx, 6);
            {
              this.state = 287;
              this.match(CustomParser.IDENTIFIER);
              this.state = 288;
              this.match(CustomParser.REMAINDER_ASSIGN);
              this.state = 289;
              this.expression(0);
            }
            break;

          case 7:
            _localctx = new PowerAssignmentContext(_localctx);
            this.enterOuterAlt(_localctx, 7);
            {
              this.state = 290;
              this.match(CustomParser.IDENTIFIER);
              this.state = 291;
              this.match(CustomParser.POWER_ASSIGN);
              this.state = 292;
              this.expression(0);
            }
            break;
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "ifStatement",
    value: function ifStatement() {
      var _localctx = new IfStatementContext(this._ctx, this.state);

      this.enterRule(_localctx, 34, CustomParser.RULE_ifStatement);

      var _la;

      try {
        var _alt;

        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 295;
          this.match(CustomParser.IF);
          this.state = 296;
          this.expression(0);
          this.state = 298;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          do {
            {
              {
                this.state = 297;
                this.match(CustomParser.NEWLINE);
              }
            }
            this.state = 300;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          } while (_la === CustomParser.NEWLINE);

          this.state = 305;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          while ((_la & ~0x1F) === 0 && (1 << _la & (1 << CustomParser.BREAK | 1 << CustomParser.CONSTANT | 1 << CustomParser.CONTINUE | 1 << CustomParser.FOR | 1 << CustomParser.FOREVER | 1 << CustomParser.GLOBAL | 1 << CustomParser.IF | 1 << CustomParser.RETURN | 1 << CustomParser.WHILE | 1 << CustomParser.LOGICAL | 1 << CustomParser.NUMBER | 1 << CustomParser.TEXT)) !== 0 || _la === CustomParser.IDENTIFIER) {
            {
              {
                this.state = 302;
                this.innerStatement();
              }
            }
            this.state = 307;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          }

          this.state = 311;

          this._errHandler.sync(this);

          _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);

          while (_alt !== 2 && _alt !== antlr4ts_atn_ATN__WEBPACK_IMPORTED_MODULE_7__.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
              {
                {
                  this.state = 308;
                  this.elseIfPart();
                }
              }
            }

            this.state = 313;

            this._errHandler.sync(this);

            _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
          }

          this.state = 315;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          if (_la === CustomParser.ELSE) {
            {
              this.state = 314;
              this.elsePart();
            }
          }

          this.state = 317;
          this.match(CustomParser.END);
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "elseIfPart",
    value: function elseIfPart() {
      var _localctx = new ElseIfPartContext(this._ctx, this.state);

      this.enterRule(_localctx, 36, CustomParser.RULE_elseIfPart);

      var _la;

      try {
        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 319;
          this.match(CustomParser.ELSE);
          this.state = 320;
          this.match(CustomParser.IF);
          this.state = 321;
          this.expression(0);
          this.state = 323;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          do {
            {
              {
                this.state = 322;
                this.match(CustomParser.NEWLINE);
              }
            }
            this.state = 325;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          } while (_la === CustomParser.NEWLINE);

          this.state = 330;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          while ((_la & ~0x1F) === 0 && (1 << _la & (1 << CustomParser.BREAK | 1 << CustomParser.CONSTANT | 1 << CustomParser.CONTINUE | 1 << CustomParser.FOR | 1 << CustomParser.FOREVER | 1 << CustomParser.GLOBAL | 1 << CustomParser.IF | 1 << CustomParser.RETURN | 1 << CustomParser.WHILE | 1 << CustomParser.LOGICAL | 1 << CustomParser.NUMBER | 1 << CustomParser.TEXT)) !== 0 || _la === CustomParser.IDENTIFIER) {
            {
              {
                this.state = 327;
                this.innerStatement();
              }
            }
            this.state = 332;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          }
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "elsePart",
    value: function elsePart() {
      var _localctx = new ElsePartContext(this._ctx, this.state);

      this.enterRule(_localctx, 38, CustomParser.RULE_elsePart);

      var _la;

      try {
        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 333;
          this.match(CustomParser.ELSE);
          this.state = 335;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          do {
            {
              {
                this.state = 334;
                this.match(CustomParser.NEWLINE);
              }
            }
            this.state = 337;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          } while (_la === CustomParser.NEWLINE);

          this.state = 342;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          while ((_la & ~0x1F) === 0 && (1 << _la & (1 << CustomParser.BREAK | 1 << CustomParser.CONSTANT | 1 << CustomParser.CONTINUE | 1 << CustomParser.FOR | 1 << CustomParser.FOREVER | 1 << CustomParser.GLOBAL | 1 << CustomParser.IF | 1 << CustomParser.RETURN | 1 << CustomParser.WHILE | 1 << CustomParser.LOGICAL | 1 << CustomParser.NUMBER | 1 << CustomParser.TEXT)) !== 0 || _la === CustomParser.IDENTIFIER) {
            {
              {
                this.state = 339;
                this.innerStatement();
              }
            }
            this.state = 344;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          }
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "forFromToStatement",
    value: function forFromToStatement() {
      var _localctx = new ForFromToStatementContext(this._ctx, this.state);

      this.enterRule(_localctx, 40, CustomParser.RULE_forFromToStatement);

      var _la;

      try {
        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 345;
          this.match(CustomParser.FOR);
          this.state = 346;
          this.type();
          this.state = 347;
          this.match(CustomParser.IDENTIFIER);
          this.state = 348;
          this.match(CustomParser.FROM);
          this.state = 349;
          this.expression(0);
          this.state = 350;
          this.match(CustomParser.TO);
          this.state = 351;
          this.expression(0);
          this.state = 353;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          do {
            {
              {
                this.state = 352;
                this.match(CustomParser.NEWLINE);
              }
            }
            this.state = 355;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          } while (_la === CustomParser.NEWLINE);

          this.state = 360;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          while ((_la & ~0x1F) === 0 && (1 << _la & (1 << CustomParser.BREAK | 1 << CustomParser.CONSTANT | 1 << CustomParser.CONTINUE | 1 << CustomParser.FOR | 1 << CustomParser.FOREVER | 1 << CustomParser.GLOBAL | 1 << CustomParser.IF | 1 << CustomParser.RETURN | 1 << CustomParser.WHILE | 1 << CustomParser.LOGICAL | 1 << CustomParser.NUMBER | 1 << CustomParser.TEXT)) !== 0 || _la === CustomParser.IDENTIFIER) {
            {
              {
                this.state = 357;
                this.innerStatement();
              }
            }
            this.state = 362;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          }

          this.state = 363;
          this.match(CustomParser.END);
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "whileStatement",
    value: function whileStatement() {
      var _localctx = new WhileStatementContext(this._ctx, this.state);

      this.enterRule(_localctx, 42, CustomParser.RULE_whileStatement);

      var _la;

      try {
        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 365;
          this.match(CustomParser.WHILE);
          this.state = 366;
          this.expression(0);
          this.state = 368;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          do {
            {
              {
                this.state = 367;
                this.match(CustomParser.NEWLINE);
              }
            }
            this.state = 370;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          } while (_la === CustomParser.NEWLINE);

          this.state = 375;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          while ((_la & ~0x1F) === 0 && (1 << _la & (1 << CustomParser.BREAK | 1 << CustomParser.CONSTANT | 1 << CustomParser.CONTINUE | 1 << CustomParser.FOR | 1 << CustomParser.FOREVER | 1 << CustomParser.GLOBAL | 1 << CustomParser.IF | 1 << CustomParser.RETURN | 1 << CustomParser.WHILE | 1 << CustomParser.LOGICAL | 1 << CustomParser.NUMBER | 1 << CustomParser.TEXT)) !== 0 || _la === CustomParser.IDENTIFIER) {
            {
              {
                this.state = 372;
                this.innerStatement();
              }
            }
            this.state = 377;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          }

          this.state = 378;
          this.match(CustomParser.END);
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "foreverStatement",
    value: function foreverStatement() {
      var _localctx = new ForeverStatementContext(this._ctx, this.state);

      this.enterRule(_localctx, 44, CustomParser.RULE_foreverStatement);

      var _la;

      try {
        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 380;
          this.match(CustomParser.FOREVER);
          this.state = 382;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          do {
            {
              {
                this.state = 381;
                this.match(CustomParser.NEWLINE);
              }
            }
            this.state = 384;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          } while (_la === CustomParser.NEWLINE);

          this.state = 389;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          while ((_la & ~0x1F) === 0 && (1 << _la & (1 << CustomParser.BREAK | 1 << CustomParser.CONSTANT | 1 << CustomParser.CONTINUE | 1 << CustomParser.FOR | 1 << CustomParser.FOREVER | 1 << CustomParser.GLOBAL | 1 << CustomParser.IF | 1 << CustomParser.RETURN | 1 << CustomParser.WHILE | 1 << CustomParser.LOGICAL | 1 << CustomParser.NUMBER | 1 << CustomParser.TEXT)) !== 0 || _la === CustomParser.IDENTIFIER) {
            {
              {
                this.state = 386;
                this.innerStatement();
              }
            }
            this.state = 391;

            this._errHandler.sync(this);

            _la = this._input.LA(1);
          }

          this.state = 392;
          this.match(CustomParser.END);
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "breakStatement",
    value: function breakStatement() {
      var _localctx = new BreakStatementContext(this._ctx, this.state);

      this.enterRule(_localctx, 46, CustomParser.RULE_breakStatement);

      try {
        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 394;
          this.match(CustomParser.BREAK);
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "continueStatement",
    value: function continueStatement() {
      var _localctx = new ContinueStatementContext(this._ctx, this.state);

      this.enterRule(_localctx, 48, CustomParser.RULE_continueStatement);

      try {
        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 396;
          this.match(CustomParser.CONTINUE);
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "returnStatement",
    value: function returnStatement() {
      var _localctx = new ReturnStatementContext(this._ctx, this.state);

      this.enterRule(_localctx, 50, CustomParser.RULE_returnStatement);

      var _la;

      try {
        this.enterOuterAlt(_localctx, 1);
        {
          this.state = 398;
          this.match(CustomParser.RETURN);
          this.state = 400;

          this._errHandler.sync(this);

          _la = this._input.LA(1);

          if ((_la & ~0x1F) === 0 && (1 << _la & (1 << CustomParser.TRUE | 1 << CustomParser.FALSE | 1 << CustomParser.NOT | 1 << CustomParser.ADD | 1 << CustomParser.SUBTRACT)) !== 0 || (_la - 44 & ~0x1F) === 0 && (1 << _la - 44 & (1 << CustomParser.OPEN_PARENTHESIS - 44 | 1 << CustomParser.QUOTE_SINGLE - 44 | 1 << CustomParser.QUOTE_DOUBLE - 44 | 1 << CustomParser.IDENTIFIER - 44 | 1 << CustomParser.DECIMAL_NUMBER - 44 | 1 << CustomParser.HEX_NUMBER - 44 | 1 << CustomParser.BINARY_NUMBER - 44)) !== 0) {
            {
              this.state = 399;
              this.expression(0);
            }
          }
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "eos",
    value: function eos() {
      var _localctx = new EosContext(this._ctx, this.state);

      this.enterRule(_localctx, 52, CustomParser.RULE_eos);

      var _la;

      try {
        this.state = 411;

        this._errHandler.sync(this);

        switch (this._input.LA(1)) {
          case CustomParser.NEWLINE:
            this.enterOuterAlt(_localctx, 1);
            {
              this.state = 403;

              this._errHandler.sync(this);

              _la = this._input.LA(1);

              do {
                {
                  {
                    this.state = 402;
                    this.match(CustomParser.NEWLINE);
                  }
                }
                this.state = 405;

                this._errHandler.sync(this);

                _la = this._input.LA(1);
              } while (_la === CustomParser.NEWLINE);

              this.state = 408;

              this._errHandler.sync(this);

              switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                case 1:
                  {
                    this.state = 407;
                    this.match(CustomParser.EOF);
                  }
                  break;
              }
            }
            break;

          case CustomParser.EOF:
            this.enterOuterAlt(_localctx, 2);
            {
              this.state = 410;
              this.match(CustomParser.EOF);
            }
            break;

          default:
            throw new antlr4ts_NoViableAltException__WEBPACK_IMPORTED_MODULE_10__.NoViableAltException(this);
        }
      } catch (re) {
        if (re instanceof antlr4ts_RecognitionException__WEBPACK_IMPORTED_MODULE_14__.RecognitionException) {
          _localctx.exception = re;

          this._errHandler.reportError(this, re);

          this._errHandler.recover(this, re);
        } else {
          throw re;
        }
      } finally {
        this.exitRule();
      }

      return _localctx;
    }
  }, {
    key: "sempred",
    value: function sempred(_localctx, ruleIndex, predIndex) {
      switch (ruleIndex) {
        case 9:
          return this.expression_sempred(_localctx, predIndex);
      }

      return true;
    }
  }, {
    key: "expression_sempred",
    value: function expression_sempred(_localctx, predIndex) {
      switch (predIndex) {
        case 0:
          return this.precpred(this._ctx, 15);

        case 1:
          return this.precpred(this._ctx, 14);

        case 2:
          return this.precpred(this._ctx, 13);

        case 3:
          return this.precpred(this._ctx, 12);

        case 4:
          return this.precpred(this._ctx, 11);

        case 5:
          return this.precpred(this._ctx, 10);

        case 6:
          return this.precpred(this._ctx, 9);

        case 7:
          return this.precpred(this._ctx, 8);

        case 8:
          return this.precpred(this._ctx, 7);

        case 9:
          return this.precpred(this._ctx, 6);

        case 10:
          return this.precpred(this._ctx, 5);

        case 11:
          return this.precpred(this._ctx, 4);

        case 12:
          return this.precpred(this._ctx, 3);

        case 13:
          return this.precpred(this._ctx, 2);
      }

      return true;
    }
  }], [{
    key: "_ATN",
    get: function get() {
      if (!CustomParser.__ATN) {
        CustomParser.__ATN = new antlr4ts_atn_ATNDeserializer__WEBPACK_IMPORTED_MODULE_8__.ATNDeserializer().deserialize(antlr4ts_misc_Utils__WEBPACK_IMPORTED_MODULE_17__.toCharArray(CustomParser._serializedATN));
      }

      return CustomParser.__ATN;
    }
  }]);

  return CustomParser;
}(antlr4ts_Parser__WEBPACK_IMPORTED_MODULE_11__.Parser);
CustomParser.TEXT_CONTENT = 1;
CustomParser.TRUE = 2;
CustomParser.FALSE = 3;
CustomParser.BREAK = 4;
CustomParser.CONSTANT = 5;
CustomParser.CONTINUE = 6;
CustomParser.ELSE = 7;
CustomParser.END = 8;
CustomParser.FOR = 9;
CustomParser.FOREVER = 10;
CustomParser.FROM = 11;
CustomParser.FUNCTION = 12;
CustomParser.GLOBAL = 13;
CustomParser.IF = 14;
CustomParser.RETURN = 15;
CustomParser.RETURNS = 16;
CustomParser.TO = 17;
CustomParser.WHILE = 18;
CustomParser.AND = 19;
CustomParser.OR = 20;
CustomParser.NOT = 21;
CustomParser.LOGICAL = 22;
CustomParser.NUMBER = 23;
CustomParser.TEXT = 24;
CustomParser.ASSIGN = 25;
CustomParser.ADD = 26;
CustomParser.SUBTRACT = 27;
CustomParser.MULTIPLY = 28;
CustomParser.DIVIDE = 29;
CustomParser.REMAINDER = 30;
CustomParser.POWER = 31;
CustomParser.ADD_ASSIGN = 32;
CustomParser.SUBTRACT_ASSIGN = 33;
CustomParser.MULTIPLY_ASSIGN = 34;
CustomParser.DIVIDE_ASSIGN = 35;
CustomParser.REMAINDER_ASSIGN = 36;
CustomParser.POWER_ASSIGN = 37;
CustomParser.LESS = 38;
CustomParser.LESS_OR_EQUAL = 39;
CustomParser.GREATER = 40;
CustomParser.GREATER_OR_EQUAL = 41;
CustomParser.EQUAL = 42;
CustomParser.DIFFERENT = 43;
CustomParser.OPEN_PARENTHESIS = 44;
CustomParser.CLOSE_PARENTHESIS = 45;
CustomParser.OPEN_BRACKET = 46;
CustomParser.CLOSE_BRACKET = 47;
CustomParser.OPEN_BRACE = 48;
CustomParser.CLOSE_BRACE = 49;
CustomParser.DOT = 50;
CustomParser.COMMA = 51;
CustomParser.QUOTE_SINGLE = 52;
CustomParser.QUOTE_DOUBLE = 53;
CustomParser.IDENTIFIER = 54;
CustomParser.DECIMAL_NUMBER = 55;
CustomParser.HEX_NUMBER = 56;
CustomParser.BINARY_NUMBER = 57;
CustomParser.NEWLINE = 58;
CustomParser.WHITESPACE = 59;
CustomParser.LINE_COMMENT = 60;
CustomParser.BLOCK_COMMENT = 61;
CustomParser.UNKNOWN = 62;
CustomParser.SINGLE_QUOTE_NEWLINE = 63;
CustomParser.DOUBLE_QUOTE_NEWLINE = 64;
CustomParser.RULE_program = 0;
CustomParser.RULE_topStatement = 1;
CustomParser.RULE_innerStatement = 2;
CustomParser.RULE_statement = 3;
CustomParser.RULE_globalStatement = 4;
CustomParser.RULE_functionDeclaration = 5;
CustomParser.RULE_parameterList = 6;
CustomParser.RULE_variableDeclaration = 7;
CustomParser.RULE_type = 8;
CustomParser.RULE_expression = 9;
CustomParser.RULE_atom = 10;
CustomParser.RULE_numberLiteral = 11;
CustomParser.RULE_textLiteral = 12;
CustomParser.RULE_interpolatedText = 13;
CustomParser.RULE_functionCall = 14;
CustomParser.RULE_argumentList = 15;
CustomParser.RULE_variableAssignment = 16;
CustomParser.RULE_ifStatement = 17;
CustomParser.RULE_elseIfPart = 18;
CustomParser.RULE_elsePart = 19;
CustomParser.RULE_forFromToStatement = 20;
CustomParser.RULE_whileStatement = 21;
CustomParser.RULE_foreverStatement = 22;
CustomParser.RULE_breakStatement = 23;
CustomParser.RULE_continueStatement = 24;
CustomParser.RULE_returnStatement = 25;
CustomParser.RULE_eos = 26;
CustomParser.ruleNames = ["program", "topStatement", "innerStatement", "statement", "globalStatement", "functionDeclaration", "parameterList", "variableDeclaration", "type", "expression", "atom", "numberLiteral", "textLiteral", "interpolatedText", "functionCall", "argumentList", "variableAssignment", "ifStatement", "elseIfPart", "elsePart", "forFromToStatement", "whileStatement", "foreverStatement", "breakStatement", "continueStatement", "returnStatement", "eos"];
CustomParser._LITERAL_NAMES = [undefined, undefined, "'verdadeiro'", "'falso'", "'interrompa'", "'constante'", "'continue'", "'senao'", "'fim'", "'para'", "'para sempre'", "'de'", "'funcao'", "'global'", "'se'", "'retorne'", "'retorna'", "'ate'", "'enquanto'", undefined, undefined, undefined, "'logico'", "'numero'", "'texto'", "'='", "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'+='", "'-='", "'*='", "'/='", "'%='", "'^='", "'<'", "'<='", "'>'", "'>='", "'=='", "'!='", "'('", "')'", "'['", "']'", "'{'", "'}'", "'.'", "','"];
CustomParser._SYMBOLIC_NAMES = [undefined, "TEXT_CONTENT", "TRUE", "FALSE", "BREAK", "CONSTANT", "CONTINUE", "ELSE", "END", "FOR", "FOREVER", "FROM", "FUNCTION", "GLOBAL", "IF", "RETURN", "RETURNS", "TO", "WHILE", "AND", "OR", "NOT", "LOGICAL", "NUMBER", "TEXT", "ASSIGN", "ADD", "SUBTRACT", "MULTIPLY", "DIVIDE", "REMAINDER", "POWER", "ADD_ASSIGN", "SUBTRACT_ASSIGN", "MULTIPLY_ASSIGN", "DIVIDE_ASSIGN", "REMAINDER_ASSIGN", "POWER_ASSIGN", "LESS", "LESS_OR_EQUAL", "GREATER", "GREATER_OR_EQUAL", "EQUAL", "DIFFERENT", "OPEN_PARENTHESIS", "CLOSE_PARENTHESIS", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_BRACE", "CLOSE_BRACE", "DOT", "COMMA", "QUOTE_SINGLE", "QUOTE_DOUBLE", "IDENTIFIER", "DECIMAL_NUMBER", "HEX_NUMBER", "BINARY_NUMBER", "NEWLINE", "WHITESPACE", "LINE_COMMENT", "BLOCK_COMMENT", "UNKNOWN", "SINGLE_QUOTE_NEWLINE", "DOUBLE_QUOTE_NEWLINE"];
CustomParser.VOCABULARY = new antlr4ts_VocabularyImpl__WEBPACK_IMPORTED_MODULE_16__.VocabularyImpl(CustomParser._LITERAL_NAMES, CustomParser._SYMBOLIC_NAMES, []);
CustomParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\u01A0\x04\x02" + "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" + "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" + "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" + "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" + "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x03" + "\x02\x07\x02:\n\x02\f\x02\x0E\x02=\v\x02\x03\x02\x07\x02@\n\x02\f\x02" + "\x0E\x02C\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03I\n\x03\x03\x04" + "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" + "\x03\x04\x03\x04\x03\x04\x05\x04X\n\x04\x03\x05\x03\x05\x03\x05\x03\x05" + "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" + "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" + "o\n\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" + "x\n\x07\x03\x07\x03\x07\x03\x07\x05\x07}\n\x07\x03\x07\x06\x07\x80\n\x07" + "\r\x07\x0E\x07\x81\x03\x07\x07\x07\x85\n\x07\f\x07\x0E\x07\x88\v\x07\x03" + "\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\x92\n\b\f\b\x0E" + "\b\x95\v\b\x03\t\x05\t\x98\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03" + "\n\x03\n\x05\n\xA2\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" + "\x03\v\x03\v\x03\v\x03\v\x05\v\xB0\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" + "\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" + "\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" + "\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" + "\v\x07\v\xDC\n\v\f\v\x0E\v\xDF\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" + "\x05\f\xE7\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x07\x0E\xED\n\x0E\f\x0E\x0E" + "\x0E\xF0\v\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xF5\n\x0E\f\x0E\x0E\x0E" + "\xF8\v\x0E\x03\x0E\x05\x0E\xFB\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" + "\x0F\x05\x0F\u0102\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0107\n\x10\x03" + "\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11\u010E\n\x11\f\x11\x0E\x11" + "\u0111\x0B\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" + "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" + "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0128\n\x12\x03\x13\x03\x13" + "\x03\x13\x06\x13\u012D\n\x13\r\x13\x0E\x13\u012E\x03\x13\x07\x13\u0132" + "\n\x13\f\x13\x0E\x13\u0135\x0B\x13\x03\x13\x07\x13\u0138\n\x13\f\x13\x0E" + "\x13\u013B\x0B\x13\x03\x13\x05\x13\u013E\n\x13\x03\x13\x03\x13\x03\x14\x03" + "\x14\x03\x14\x03\x14\x06\x14\u0146\n\x14\r\x14\x0E\x14\u0147\x03\x14\x07" + "\x14\u014B\n\x14\f\x14\x0E\x14\u014E\x0B\x14\x03\x15\x03\x15\x06\x15\u0152" + "\n\x15\r\x15\x0E\x15\u0153\x03\x15\x07\x15\u0157\n\x15\f\x15\x0E\x15\u015A" + "\v\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" + "\x06\x16\u0164\n\x16\r\x16\x0E\x16\u0165\x03\x16\x07\x16\u0169\n\x16\f" + "\x16\x0E\x16\u016C\x0B\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x06\x17" + "\u0173\n\x17\r\x17\x0E\x17\u0174\x03\x17\x07\x17\u0178\n\x17\f\x17\x0E" + "\x17\u017B\x0B\x17\x03\x17\x03\x17\x03\x18\x03\x18\x06\x18\u0181\n\x18\r" + "\x18\x0E\x18\u0182\x03\x18\x07\x18\u0186\n\x18\f\x18\x0E\x18\u0189\x0B\x18" + "\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B" + "\u0193\n\x1B\x03\x1C\x06\x1C\u0196\n\x1C\r\x1C\x0E\x1C\u0197\x03\x1C\x05" + "\x1C\u019B\n\x1C\x03\x1C\x05\x1C\u019E\n\x1C\x03\x1C\x02\x02\x03\x14\x1D" + "\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" + "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" + "*\x02,\x02.\x020\x022\x024\x026\x02\x02\x03\x03\x029;\x02\u01CE\x02;\x03" + "\x02\x02\x02\x04H\x03\x02\x02\x02\x06W\x03\x02\x02\x02\bn\x03\x02\x02" + "\x02\np\x03\x02\x02\x02\fs\x03\x02\x02\x02\x0E\x8B\x03\x02\x02\x02\x10" + "\x97\x03\x02\x02\x02\x12\xA1\x03\x02\x02\x02\x14\xAF\x03\x02\x02\x02\x16" + "\xE6\x03\x02\x02\x02\x18\xE8\x03\x02\x02\x02\x1A\xFA\x03\x02\x02\x02\x1C" + "\u0101\x03\x02\x02\x02\x1E\u0103\x03\x02\x02\x02 \u010A\x03\x02\x02\x02" + "\"\u0127\x03\x02\x02\x02$\u0129\x03\x02\x02\x02&\u0141\x03\x02\x02\x02" + "(\u014F\x03\x02\x02\x02*\u015B\x03\x02\x02\x02,\u016F\x03\x02\x02\x02" + ".\u017E\x03\x02\x02\x020\u018C\x03\x02\x02\x022\u018E\x03\x02\x02\x02" + "4\u0190\x03\x02\x02\x026\u019D\x03\x02\x02\x028:\x07<\x02\x0298\x03\x02" + "\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<A\x03\x02" + "\x02\x02=;\x03\x02\x02\x02>@\x05\x04\x03\x02?>\x03\x02\x02\x02@C\x03\x02" + "\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02B\x03\x03\x02\x02\x02CA\x03" + "\x02\x02\x02DE\x05\f\x07\x02EF\x056\x1C\x02FI\x03\x02\x02\x02GI\x05\b" + "\x05\x02HD\x03\x02\x02\x02HG\x03\x02\x02\x02I\x05\x03\x02\x02\x02JK\x05" + "\n\x06\x02KL\x056\x1C\x02LX\x03\x02\x02\x02MN\x050\x19\x02NO\x056\x1C" + "\x02OX\x03\x02\x02\x02PQ\x052\x1A\x02QR\x056\x1C\x02RX\x03\x02\x02\x02" + "ST\x054\x1B\x02TU\x056\x1C\x02UX\x03\x02\x02\x02VX\x05\b\x05\x02WJ\x03" + "\x02\x02\x02WM\x03\x02\x02\x02WP\x03\x02\x02\x02WS\x03\x02\x02\x02WV\x03" + "\x02\x02\x02X\x07\x03\x02\x02\x02YZ\x05\x10\t\x02Z[\x056\x1C\x02[o\x03" + "\x02\x02\x02\\]\x05\"\x12\x02]^\x056\x1C\x02^o\x03\x02\x02\x02_`\x05$" + "\x13\x02`a\x056\x1C\x02ao\x03\x02\x02\x02bc\x05*\x16\x02cd\x056\x1C\x02" + "do\x03\x02\x02\x02ef\x05,\x17\x02fg\x056\x1C\x02go\x03\x02\x02\x02hi\x05" + ".\x18\x02ij\x056\x1C\x02jo\x03\x02\x02\x02kl\x05\x1E\x10\x02lm\x056\x1C" + "\x02mo\x03\x02\x02\x02nY\x03\x02\x02\x02n\\\x03\x02\x02\x02n_\x03\x02" + "\x02\x02nb\x03\x02\x02\x02ne\x03\x02\x02\x02nh\x03\x02\x02\x02nk\x03\x02" + "\x02\x02o\t\x03\x02\x02\x02pq\x07\x0F\x02\x02qr\x078\x02\x02r\v\x03\x02" + "\x02\x02st\x07\x0E\x02\x02tu\x078\x02\x02uw\x07.\x02\x02vx\x05\x0E\b\x02" + "wv\x03\x02\x02\x02wx\x03\x02\x02\x02xy\x03\x02\x02\x02y|\x07/\x02\x02" + "z{\x07\x12\x02\x02{}\x05\x12\n\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02" + "}\x7F\x03\x02\x02\x02~\x80\x07<\x02\x02\x7F~\x03\x02\x02\x02\x80\x81\x03" + "\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x86\x03" + "\x02\x02\x02\x83\x85\x05\x06\x04\x02\x84\x83\x03\x02\x02\x02\x85\x88\x03" + "\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x89\x03" + "\x02\x02\x02\x88\x86\x03\x02\x02\x02\x89\x8A\x07\n\x02\x02\x8A\r\x03\x02" + "\x02\x02\x8B\x8C\x05\x12\n\x02\x8C\x93\x078\x02\x02\x8D\x8E\x075\x02\x02" + "\x8E\x8F\x05\x12\n\x02\x8F\x90\x078\x02\x02\x90\x92\x03\x02\x02\x02\x91" + "\x8D\x03\x02\x02\x02\x92\x95\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93" + "\x94\x03\x02\x02\x02\x94\x0F\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x96" + "\x98\x07\x07\x02\x02\x97\x96\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98" + "\x99\x03\x02\x02\x02\x99\x9A\x05\x12\n\x02\x9A\x9B\x078\x02\x02\x9B\x9C" + "\x07\x1B\x02\x02\x9C\x9D\x05\x14\v\x02\x9D\x11\x03\x02\x02\x02\x9E\xA2" + "\x07\x18\x02\x02\x9F\xA2\x07\x19\x02\x02\xA0\xA2\x07\x1A\x02\x02\xA1\x9E" + "\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\x13" + "\x03\x02\x02\x02\xA3\xA4\b\v\x01\x02\xA4\xA5\x07.\x02\x02\xA5\xA6\x05" + "\x14\v\x02\xA6\xA7\x07/\x02\x02\xA7\xB0\x03\x02\x02\x02\xA8\xA9\x07\x1C" + "\x02\x02\xA9\xB0\x05\x14\v\x14\xAA\xAB\x07\x1D\x02\x02\xAB\xB0\x05\x14" + "\v\x13\xAC\xAD\x07\x17\x02\x02\xAD\xB0\x05\x14\v\x12\xAE\xB0\x05\x16\f" + "\x02\xAF\xA3\x03\x02\x02\x02\xAF\xA8\x03\x02\x02\x02\xAF\xAA\x03\x02\x02" + "\x02\xAF\xAC\x03\x02\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\xDD\x03\x02\x02" + "\x02\xB1\xB2\f\x11\x02\x02\xB2\xB3\x07!\x02\x02\xB3\xDC\x05\x14\v\x11" + "\xB4\xB5\f\x10\x02\x02\xB5\xB6\x07\x1E\x02\x02\xB6\xDC\x05\x14\v\x11\xB7" + "\xB8\f\x0F\x02\x02\xB8\xB9\x07\x1F\x02\x02\xB9\xDC\x05\x14\v\x10\xBA\xBB" + "\f\x0E\x02\x02\xBB\xBC\x07 \x02\x02\xBC\xDC\x05\x14\v\x0F\xBD\xBE\f\r" + "\x02\x02\xBE\xBF\x07\x1C\x02\x02\xBF\xDC\x05\x14\v\x0E\xC0\xC1\f\f\x02" + "\x02\xC1\xC2\x07\x1D\x02\x02\xC2\xDC\x05\x14\v\r\xC3\xC4\f\v\x02\x02\xC4" + "\xC5\x07(\x02\x02\xC5\xDC\x05\x14\v\f\xC6\xC7\f\n\x02\x02\xC7\xC8\x07" + ")\x02\x02\xC8\xDC\x05\x14\v\v\xC9\xCA\f\t\x02\x02\xCA\xCB\x07*\x02\x02" + "\xCB\xDC\x05\x14\v\n\xCC\xCD\f\b\x02\x02\xCD\xCE\x07+\x02\x02\xCE\xDC" + "\x05\x14\v\t\xCF\xD0\f\x07\x02\x02\xD0\xD1\x07,\x02\x02\xD1\xDC\x05\x14" + "\v\b\xD2\xD3\f\x06\x02\x02\xD3\xD4\x07-\x02\x02\xD4\xDC\x05\x14\v\x07" + "\xD5\xD6\f\x05\x02\x02\xD6\xD7\x07\x15\x02\x02\xD7\xDC\x05\x14\v\x06\xD8" + "\xD9\f\x04\x02\x02\xD9\xDA\x07\x16\x02\x02\xDA\xDC\x05\x14\v\x05\xDB\xB1" + "\x03\x02\x02\x02\xDB\xB4\x03\x02\x02\x02\xDB\xB7\x03\x02\x02\x02\xDB\xBA" + "\x03\x02\x02\x02\xDB\xBD\x03\x02\x02\x02\xDB\xC0\x03\x02\x02\x02\xDB\xC3" + "\x03\x02\x02\x02\xDB\xC6\x03\x02\x02\x02\xDB\xC9\x03\x02\x02\x02\xDB\xCC" + "\x03\x02\x02\x02\xDB\xCF\x03\x02\x02\x02\xDB\xD2\x03\x02\x02\x02\xDB\xD5" + "\x03\x02\x02\x02\xDB\xD8\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD\xDB" + "\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\x15\x03\x02\x02\x02\xDF\xDD" + "\x03\x02\x02\x02\xE0\xE7\x07\x04\x02\x02\xE1\xE7\x07\x05\x02\x02\xE2\xE7" + "\x05\x18\r\x02\xE3\xE7\x05\x1A\x0E\x02\xE4\xE7\x05\x1E\x10\x02\xE5\xE7" + "\x078\x02\x02\xE6\xE0\x03\x02\x02\x02\xE6\xE1\x03\x02\x02\x02\xE6\xE2" + "\x03\x02\x02\x02\xE6\xE3\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE5" + "\x03\x02\x02\x02\xE7\x17\x03\x02\x02\x02\xE8\xE9\t\x02\x02\x02\xE9\x19" + "\x03\x02\x02\x02\xEA\xEE\x076\x02\x02\xEB\xED\x07\x03\x02\x02\xEC\xEB" + "\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF" + "\x03\x02\x02\x02\xEF\xF1\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1\xFB" + "\x076\x02\x02\xF2\xF6\x077\x02\x02\xF3\xF5\x05\x1C\x0F\x02\xF4\xF3\x03" + "\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03" + "\x02\x02\x02\xF7\xF9\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFB\x07" + "7\x02\x02\xFA\xEA\x03\x02\x02\x02\xFA\xF2\x03\x02\x02\x02\xFB\x1B\x03" + "\x02\x02\x02\xFC\u0102\x07\x03\x02\x02\xFD\xFE\x072\x02\x02\xFE\xFF\x05" + "\x14\x0B\x02\xFF\u0100\x073\x02\x02\u0100\u0102\x03\x02\x02\x02\u0101\xFC" + "\x03\x02\x02\x02\u0101\xFD\x03\x02\x02\x02\u0102\x1D\x03\x02\x02\x02\u0103" + "\u0104\x078\x02\x02\u0104\u0106\x07.\x02\x02\u0105\u0107\x05 \x11\x02" + "\u0106\u0105\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x03" + "\x02\x02\x02\u0108\u0109\x07/\x02\x02\u0109\x1F\x03\x02\x02\x02\u010A" + "\u010F\x05\x14\x0B\x02\u010B\u010C\x075\x02\x02\u010C\u010E\x05\x14\x0B\x02" + "\u010D\u010B\x03\x02\x02\x02\u010E\u0111\x03\x02\x02\x02\u010F\u010D\x03" + "\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110!\x03\x02\x02\x02\u0111" + "\u010F\x03\x02\x02\x02\u0112\u0113\x078\x02\x02\u0113\u0114\x07\x1B\x02" + "\x02\u0114\u0128\x05\x14\x0B\x02\u0115\u0116\x078\x02\x02\u0116\u0117\x07" + "\"\x02\x02\u0117\u0128\x05\x14\x0B\x02\u0118\u0119\x078\x02\x02\u0119\u011A" + "\x07#\x02\x02\u011A\u0128\x05\x14\x0B\x02\u011B\u011C\x078\x02\x02\u011C" + "\u011D\x07$\x02\x02\u011D\u0128\x05\x14\x0B\x02\u011E\u011F\x078\x02\x02" + "\u011F\u0120\x07%\x02\x02\u0120\u0128\x05\x14\x0B\x02\u0121\u0122\x078\x02" + "\x02\u0122\u0123\x07&\x02\x02\u0123\u0128\x05\x14\x0B\x02\u0124\u0125\x07" + "8\x02\x02\u0125\u0126\x07'\x02\x02\u0126\u0128\x05\x14\x0B\x02\u0127\u0112" + "\x03\x02\x02\x02\u0127\u0115\x03\x02\x02\x02\u0127\u0118\x03\x02\x02\x02" + "\u0127\u011B\x03\x02\x02\x02\u0127\u011E\x03\x02\x02\x02\u0127\u0121\x03" + "\x02\x02\x02\u0127\u0124\x03\x02\x02\x02\u0128#\x03\x02\x02\x02\u0129" + "\u012A\x07\x10\x02\x02\u012A\u012C\x05\x14\x0B\x02\u012B\u012D\x07<\x02" + "\x02\u012C\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u012C" + "\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0133\x03\x02\x02\x02" + "\u0130\u0132\x05\x06\x04\x02\u0131\u0130\x03\x02\x02\x02\u0132\u0135\x03" + "\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134" + "\u0139\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0136\u0138\x05&\x14" + "\x02\u0137\u0136\x03\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139\u0137" + "\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02" + "\u013B\u0139\x03\x02\x02\x02\u013C\u013E\x05(\x15\x02\u013D\u013C\x03" + "\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F" + "\u0140\x07\n\x02\x02\u0140%\x03\x02\x02\x02\u0141\u0142\x07\t\x02\x02" + "\u0142\u0143\x07\x10\x02\x02\u0143\u0145\x05\x14\x0B\x02\u0144\u0146\x07" + "<\x02\x02\u0145\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147" + "\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014C\x03\x02" + "\x02\x02\u0149\u014B\x05\x06\x04\x02\u014A\u0149\x03\x02\x02\x02\u014B" + "\u014E\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014C\u014D\x03\x02" + "\x02\x02\u014D'\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014F\u0151" + "\x07\t\x02\x02\u0150\u0152\x07<\x02\x02\u0151\u0150\x03\x02\x02\x02\u0152" + "\u0153\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154\x03\x02" + "\x02\x02\u0154\u0158\x03\x02\x02\x02\u0155\u0157\x05\x06\x04\x02\u0156" + "\u0155\x03\x02\x02\x02\u0157\u015A\x03\x02\x02\x02\u0158\u0156\x03\x02" + "\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159)\x03\x02\x02\x02\u015A\u0158" + "\x03\x02\x02\x02\u015B\u015C\x07\x0B\x02\x02\u015C\u015D\x05\x12\n\x02\u015D" + "\u015E\x078\x02\x02\u015E\u015F\x07\r\x02\x02\u015F\u0160\x05\x14\x0B\x02" + "\u0160\u0161\x07\x13\x02\x02\u0161\u0163\x05\x14\x0B\x02\u0162\u0164\x07" + "<\x02\x02\u0163\u0162\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165" + "\u0163\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u016A\x03\x02" + "\x02\x02\u0167\u0169\x05\x06\x04\x02\u0168\u0167\x03\x02\x02\x02\u0169" + "\u016C\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016A\u016B\x03\x02" + "\x02\x02\u016B\u016D\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016D" + "\u016E\x07\n\x02\x02\u016E+\x03\x02\x02\x02\u016F\u0170\x07\x14\x02\x02" + "\u0170\u0172\x05\x14\x0B\x02\u0171\u0173\x07<\x02\x02\u0172\u0171\x03\x02" + "\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174" + "\u0175\x03\x02\x02\x02\u0175\u0179\x03\x02\x02\x02\u0176\u0178\x05\x06" + "\x04\x02\u0177\u0176\x03\x02\x02\x02\u0178\u017B\x03\x02\x02\x02\u0179" + "\u0177\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017C\x03\x02" + "\x02\x02\u017B\u0179\x03\x02\x02\x02\u017C\u017D\x07\n\x02\x02\u017D-" + "\x03\x02\x02\x02\u017E\u0180\x07\f\x02\x02\u017F\u0181\x07<\x02\x02\u0180" + "\u017F\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0180\x03\x02" + "\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0187\x03\x02\x02\x02\u0184" + "\u0186\x05\x06\x04\x02\u0185\u0184\x03\x02\x02\x02\u0186\u0189\x03\x02" + "\x02\x02\u0187\u0185\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188" + "\u018A\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u018A\u018B\x07\n\x02" + "\x02\u018B/\x03\x02\x02\x02\u018C\u018D\x07\x06\x02\x02\u018D1\x03\x02" + "\x02\x02\u018E\u018F\x07\b\x02\x02\u018F3\x03\x02\x02\x02\u0190\u0192" + "\x07\x11\x02\x02\u0191\u0193\x05\x14\x0B\x02\u0192\u0191\x03\x02\x02\x02" + "\u0192\u0193\x03\x02\x02\x02\u01935\x03\x02\x02\x02\u0194\u0196\x07<\x02" + "\x02\u0195\u0194\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0195" + "\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u019A\x03\x02\x02\x02" + "\u0199\u019B\x07\x02\x02\x03\u019A\u0199\x03\x02\x02\x02\u019A\u019B\x03" + "\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019E\x07\x02\x02\x03\u019D" + "\u0195\x03\x02\x02\x02\u019D\u019C\x03\x02\x02\x02\u019E7\x03\x02\x02" + "\x02+;AHWnw|\x81\x86\x93\x97\xA1\xAF\xDB\xDD\xE6\xEE\xF6\xFA\u0101\u0106" + "\u010F\u0127\u012E\u0133\u0139\u013D\u0147\u014C\u0153\u0158\u0165\u016A" + "\u0174\u0179\u0182\u0187\u0192\u0197\u019A\u019D";
var ProgramContext = /*#__PURE__*/function (_ParserRuleContext) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProgramContext, _ParserRuleContext);

  var _super2 = _createSuper(ProgramContext);

  function ProgramContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProgramContext);

    return _super2.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProgramContext, [{
    key: "NEWLINE",
    value: function NEWLINE(i) {
      if (i === undefined) {
        return this.getTokens(CustomParser.NEWLINE);
      } else {
        return this.getToken(CustomParser.NEWLINE, i);
      }
    }
  }, {
    key: "topStatement",
    value: function topStatement(i) {
      if (i === undefined) {
        return this.getRuleContexts(TopStatementContext);
      } else {
        return this.getRuleContext(i, TopStatementContext);
      }
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_program;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitProgram) {
        return visitor.visitProgram(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return ProgramContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var TopStatementContext = /*#__PURE__*/function (_ParserRuleContext2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TopStatementContext, _ParserRuleContext2);

  var _super3 = _createSuper(TopStatementContext);

  function TopStatementContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TopStatementContext);

    return _super3.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TopStatementContext, [{
    key: "functionDeclaration",
    value: function functionDeclaration() {
      return this.tryGetRuleContext(0, FunctionDeclarationContext);
    }
  }, {
    key: "eos",
    value: function eos() {
      return this.tryGetRuleContext(0, EosContext);
    }
  }, {
    key: "statement",
    value: function statement() {
      return this.tryGetRuleContext(0, StatementContext);
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_topStatement;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitTopStatement) {
        return visitor.visitTopStatement(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return TopStatementContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var InnerStatementContext = /*#__PURE__*/function (_ParserRuleContext3) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(InnerStatementContext, _ParserRuleContext3);

  var _super4 = _createSuper(InnerStatementContext);

  function InnerStatementContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InnerStatementContext);

    return _super4.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(InnerStatementContext, [{
    key: "globalStatement",
    value: function globalStatement() {
      return this.tryGetRuleContext(0, GlobalStatementContext);
    }
  }, {
    key: "eos",
    value: function eos() {
      return this.tryGetRuleContext(0, EosContext);
    }
  }, {
    key: "breakStatement",
    value: function breakStatement() {
      return this.tryGetRuleContext(0, BreakStatementContext);
    }
  }, {
    key: "continueStatement",
    value: function continueStatement() {
      return this.tryGetRuleContext(0, ContinueStatementContext);
    }
  }, {
    key: "returnStatement",
    value: function returnStatement() {
      return this.tryGetRuleContext(0, ReturnStatementContext);
    }
  }, {
    key: "statement",
    value: function statement() {
      return this.tryGetRuleContext(0, StatementContext);
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_innerStatement;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitInnerStatement) {
        return visitor.visitInnerStatement(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return InnerStatementContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var StatementContext = /*#__PURE__*/function (_ParserRuleContext4) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StatementContext, _ParserRuleContext4);

  var _super5 = _createSuper(StatementContext);

  function StatementContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StatementContext);

    return _super5.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(StatementContext, [{
    key: "variableDeclaration",
    value: function variableDeclaration() {
      return this.tryGetRuleContext(0, VariableDeclarationContext);
    }
  }, {
    key: "eos",
    value: function eos() {
      return this.getRuleContext(0, EosContext);
    }
  }, {
    key: "variableAssignment",
    value: function variableAssignment() {
      return this.tryGetRuleContext(0, VariableAssignmentContext);
    }
  }, {
    key: "ifStatement",
    value: function ifStatement() {
      return this.tryGetRuleContext(0, IfStatementContext);
    }
  }, {
    key: "forFromToStatement",
    value: function forFromToStatement() {
      return this.tryGetRuleContext(0, ForFromToStatementContext);
    }
  }, {
    key: "whileStatement",
    value: function whileStatement() {
      return this.tryGetRuleContext(0, WhileStatementContext);
    }
  }, {
    key: "foreverStatement",
    value: function foreverStatement() {
      return this.tryGetRuleContext(0, ForeverStatementContext);
    }
  }, {
    key: "functionCall",
    value: function functionCall() {
      return this.tryGetRuleContext(0, FunctionCallContext);
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_statement;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitStatement) {
        return visitor.visitStatement(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return StatementContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var GlobalStatementContext = /*#__PURE__*/function (_ParserRuleContext5) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GlobalStatementContext, _ParserRuleContext5);

  var _super6 = _createSuper(GlobalStatementContext);

  function GlobalStatementContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GlobalStatementContext);

    return _super6.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GlobalStatementContext, [{
    key: "GLOBAL",
    value: function GLOBAL() {
      return this.getToken(CustomParser.GLOBAL, 0);
    }
  }, {
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(CustomParser.IDENTIFIER, 0);
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_globalStatement;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitGlobalStatement) {
        return visitor.visitGlobalStatement(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return GlobalStatementContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var FunctionDeclarationContext = /*#__PURE__*/function (_ParserRuleContext6) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FunctionDeclarationContext, _ParserRuleContext6);

  var _super7 = _createSuper(FunctionDeclarationContext);

  function FunctionDeclarationContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FunctionDeclarationContext);

    return _super7.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(FunctionDeclarationContext, [{
    key: "FUNCTION",
    value: function FUNCTION() {
      return this.getToken(CustomParser.FUNCTION, 0);
    }
  }, {
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(CustomParser.IDENTIFIER, 0);
    }
  }, {
    key: "OPEN_PARENTHESIS",
    value: function OPEN_PARENTHESIS() {
      return this.getToken(CustomParser.OPEN_PARENTHESIS, 0);
    }
  }, {
    key: "CLOSE_PARENTHESIS",
    value: function CLOSE_PARENTHESIS() {
      return this.getToken(CustomParser.CLOSE_PARENTHESIS, 0);
    }
  }, {
    key: "END",
    value: function END() {
      return this.getToken(CustomParser.END, 0);
    }
  }, {
    key: "parameterList",
    value: function parameterList() {
      return this.tryGetRuleContext(0, ParameterListContext);
    }
  }, {
    key: "RETURNS",
    value: function RETURNS() {
      return this.tryGetToken(CustomParser.RETURNS, 0);
    }
  }, {
    key: "type",
    value: function type() {
      return this.tryGetRuleContext(0, TypeContext);
    }
  }, {
    key: "NEWLINE",
    value: function NEWLINE(i) {
      if (i === undefined) {
        return this.getTokens(CustomParser.NEWLINE);
      } else {
        return this.getToken(CustomParser.NEWLINE, i);
      }
    }
  }, {
    key: "innerStatement",
    value: function innerStatement(i) {
      if (i === undefined) {
        return this.getRuleContexts(InnerStatementContext);
      } else {
        return this.getRuleContext(i, InnerStatementContext);
      }
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_functionDeclaration;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitFunctionDeclaration) {
        return visitor.visitFunctionDeclaration(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return FunctionDeclarationContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var ParameterListContext = /*#__PURE__*/function (_ParserRuleContext7) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ParameterListContext, _ParserRuleContext7);

  var _super8 = _createSuper(ParameterListContext);

  function ParameterListContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ParameterListContext);

    return _super8.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ParameterListContext, [{
    key: "type",
    value: function type(i) {
      if (i === undefined) {
        return this.getRuleContexts(TypeContext);
      } else {
        return this.getRuleContext(i, TypeContext);
      }
    }
  }, {
    key: "IDENTIFIER",
    value: function IDENTIFIER(i) {
      if (i === undefined) {
        return this.getTokens(CustomParser.IDENTIFIER);
      } else {
        return this.getToken(CustomParser.IDENTIFIER, i);
      }
    }
  }, {
    key: "COMMA",
    value: function COMMA(i) {
      if (i === undefined) {
        return this.getTokens(CustomParser.COMMA);
      } else {
        return this.getToken(CustomParser.COMMA, i);
      }
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_parameterList;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitParameterList) {
        return visitor.visitParameterList(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return ParameterListContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var VariableDeclarationContext = /*#__PURE__*/function (_ParserRuleContext8) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(VariableDeclarationContext, _ParserRuleContext8);

  var _super9 = _createSuper(VariableDeclarationContext);

  function VariableDeclarationContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VariableDeclarationContext);

    return _super9.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(VariableDeclarationContext, [{
    key: "type",
    value: function type() {
      return this.getRuleContext(0, TypeContext);
    }
  }, {
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(CustomParser.IDENTIFIER, 0);
    }
  }, {
    key: "ASSIGN",
    value: function ASSIGN() {
      return this.getToken(CustomParser.ASSIGN, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getRuleContext(0, ExpressionContext);
    }
  }, {
    key: "CONSTANT",
    value: function CONSTANT() {
      return this.tryGetToken(CustomParser.CONSTANT, 0);
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_variableDeclaration;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitVariableDeclaration) {
        return visitor.visitVariableDeclaration(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return VariableDeclarationContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var TypeContext = /*#__PURE__*/function (_ParserRuleContext9) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TypeContext, _ParserRuleContext9);

  var _super10 = _createSuper(TypeContext);

  function TypeContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TypeContext);

    return _super10.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TypeContext, [{
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_type;
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(ctx) {
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(TypeContext.prototype), "copyFrom", this).call(this, ctx);
    }
  }]);

  return TypeContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var LogicalTypeContext = /*#__PURE__*/function (_TypeContext) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LogicalTypeContext, _TypeContext);

  var _super11 = _createSuper(LogicalTypeContext);

  function LogicalTypeContext(ctx) {
    var _this2;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LogicalTypeContext);

    _this2 = _super11.call(this, ctx.parent, ctx.invokingState);

    _this2.copyFrom(ctx);

    return _this2;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LogicalTypeContext, [{
    key: "LOGICAL",
    value: function LOGICAL() {
      return this.getToken(CustomParser.LOGICAL, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitLogicalType) {
        return visitor.visitLogicalType(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return LogicalTypeContext;
}(TypeContext);
var NumberTypeContext = /*#__PURE__*/function (_TypeContext2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NumberTypeContext, _TypeContext2);

  var _super12 = _createSuper(NumberTypeContext);

  function NumberTypeContext(ctx) {
    var _this3;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NumberTypeContext);

    _this3 = _super12.call(this, ctx.parent, ctx.invokingState);

    _this3.copyFrom(ctx);

    return _this3;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(NumberTypeContext, [{
    key: "NUMBER",
    value: function NUMBER() {
      return this.getToken(CustomParser.NUMBER, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitNumberType) {
        return visitor.visitNumberType(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return NumberTypeContext;
}(TypeContext);
var TextTypeContext = /*#__PURE__*/function (_TypeContext3) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TextTypeContext, _TypeContext3);

  var _super13 = _createSuper(TextTypeContext);

  function TextTypeContext(ctx) {
    var _this4;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TextTypeContext);

    _this4 = _super13.call(this, ctx.parent, ctx.invokingState);

    _this4.copyFrom(ctx);

    return _this4;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TextTypeContext, [{
    key: "TEXT",
    value: function TEXT() {
      return this.getToken(CustomParser.TEXT, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitTextType) {
        return visitor.visitTextType(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return TextTypeContext;
}(TypeContext);
var ExpressionContext = /*#__PURE__*/function (_ParserRuleContext10) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ExpressionContext, _ParserRuleContext10);

  var _super14 = _createSuper(ExpressionContext);

  function ExpressionContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ExpressionContext);

    return _super14.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ExpressionContext, [{
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_expression;
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(ctx) {
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ExpressionContext.prototype), "copyFrom", this).call(this, ctx);
    }
  }]);

  return ExpressionContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var ParenthesisExpressionContext = /*#__PURE__*/function (_ExpressionContext) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ParenthesisExpressionContext, _ExpressionContext);

  var _super15 = _createSuper(ParenthesisExpressionContext);

  function ParenthesisExpressionContext(ctx) {
    var _this5;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ParenthesisExpressionContext);

    _this5 = _super15.call(this, ctx.parent, ctx.invokingState);

    _this5.copyFrom(ctx);

    return _this5;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ParenthesisExpressionContext, [{
    key: "OPEN_PARENTHESIS",
    value: function OPEN_PARENTHESIS() {
      return this.getToken(CustomParser.OPEN_PARENTHESIS, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getRuleContext(0, ExpressionContext);
    }
  }, {
    key: "CLOSE_PARENTHESIS",
    value: function CLOSE_PARENTHESIS() {
      return this.getToken(CustomParser.CLOSE_PARENTHESIS, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitParenthesisExpression) {
        return visitor.visitParenthesisExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return ParenthesisExpressionContext;
}(ExpressionContext);
var PlusExpressionContext = /*#__PURE__*/function (_ExpressionContext2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PlusExpressionContext, _ExpressionContext2);

  var _super16 = _createSuper(PlusExpressionContext);

  function PlusExpressionContext(ctx) {
    var _this6;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PlusExpressionContext);

    _this6 = _super16.call(this, ctx.parent, ctx.invokingState);

    _this6.copyFrom(ctx);

    return _this6;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PlusExpressionContext, [{
    key: "ADD",
    value: function ADD() {
      return this.getToken(CustomParser.ADD, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getRuleContext(0, ExpressionContext);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitPlusExpression) {
        return visitor.visitPlusExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return PlusExpressionContext;
}(ExpressionContext);
var MinusExpressionContext = /*#__PURE__*/function (_ExpressionContext3) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MinusExpressionContext, _ExpressionContext3);

  var _super17 = _createSuper(MinusExpressionContext);

  function MinusExpressionContext(ctx) {
    var _this7;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MinusExpressionContext);

    _this7 = _super17.call(this, ctx.parent, ctx.invokingState);

    _this7.copyFrom(ctx);

    return _this7;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MinusExpressionContext, [{
    key: "SUBTRACT",
    value: function SUBTRACT() {
      return this.getToken(CustomParser.SUBTRACT, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getRuleContext(0, ExpressionContext);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitMinusExpression) {
        return visitor.visitMinusExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return MinusExpressionContext;
}(ExpressionContext);
var NotExpressionContext = /*#__PURE__*/function (_ExpressionContext4) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NotExpressionContext, _ExpressionContext4);

  var _super18 = _createSuper(NotExpressionContext);

  function NotExpressionContext(ctx) {
    var _this8;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NotExpressionContext);

    _this8 = _super18.call(this, ctx.parent, ctx.invokingState);

    _this8.copyFrom(ctx);

    return _this8;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(NotExpressionContext, [{
    key: "NOT",
    value: function NOT() {
      return this.getToken(CustomParser.NOT, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getRuleContext(0, ExpressionContext);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitNotExpression) {
        return visitor.visitNotExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return NotExpressionContext;
}(ExpressionContext);
var PowerExpressionContext = /*#__PURE__*/function (_ExpressionContext5) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PowerExpressionContext, _ExpressionContext5);

  var _super19 = _createSuper(PowerExpressionContext);

  function PowerExpressionContext(ctx) {
    var _this9;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PowerExpressionContext);

    _this9 = _super19.call(this, ctx.parent, ctx.invokingState);

    _this9.copyFrom(ctx);

    return _this9;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PowerExpressionContext, [{
    key: "expression",
    value: function expression(i) {
      if (i === undefined) {
        return this.getRuleContexts(ExpressionContext);
      } else {
        return this.getRuleContext(i, ExpressionContext);
      }
    }
  }, {
    key: "POWER",
    value: function POWER() {
      return this.getToken(CustomParser.POWER, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitPowerExpression) {
        return visitor.visitPowerExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return PowerExpressionContext;
}(ExpressionContext);
var MultiplyExpressionContext = /*#__PURE__*/function (_ExpressionContext6) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MultiplyExpressionContext, _ExpressionContext6);

  var _super20 = _createSuper(MultiplyExpressionContext);

  function MultiplyExpressionContext(ctx) {
    var _this10;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MultiplyExpressionContext);

    _this10 = _super20.call(this, ctx.parent, ctx.invokingState);

    _this10.copyFrom(ctx);

    return _this10;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MultiplyExpressionContext, [{
    key: "expression",
    value: function expression(i) {
      if (i === undefined) {
        return this.getRuleContexts(ExpressionContext);
      } else {
        return this.getRuleContext(i, ExpressionContext);
      }
    }
  }, {
    key: "MULTIPLY",
    value: function MULTIPLY() {
      return this.getToken(CustomParser.MULTIPLY, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitMultiplyExpression) {
        return visitor.visitMultiplyExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return MultiplyExpressionContext;
}(ExpressionContext);
var DivideExpressionContext = /*#__PURE__*/function (_ExpressionContext7) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DivideExpressionContext, _ExpressionContext7);

  var _super21 = _createSuper(DivideExpressionContext);

  function DivideExpressionContext(ctx) {
    var _this11;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DivideExpressionContext);

    _this11 = _super21.call(this, ctx.parent, ctx.invokingState);

    _this11.copyFrom(ctx);

    return _this11;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DivideExpressionContext, [{
    key: "expression",
    value: function expression(i) {
      if (i === undefined) {
        return this.getRuleContexts(ExpressionContext);
      } else {
        return this.getRuleContext(i, ExpressionContext);
      }
    }
  }, {
    key: "DIVIDE",
    value: function DIVIDE() {
      return this.getToken(CustomParser.DIVIDE, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitDivideExpression) {
        return visitor.visitDivideExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return DivideExpressionContext;
}(ExpressionContext);
var RemainderExpressionContext = /*#__PURE__*/function (_ExpressionContext8) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RemainderExpressionContext, _ExpressionContext8);

  var _super22 = _createSuper(RemainderExpressionContext);

  function RemainderExpressionContext(ctx) {
    var _this12;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RemainderExpressionContext);

    _this12 = _super22.call(this, ctx.parent, ctx.invokingState);

    _this12.copyFrom(ctx);

    return _this12;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RemainderExpressionContext, [{
    key: "expression",
    value: function expression(i) {
      if (i === undefined) {
        return this.getRuleContexts(ExpressionContext);
      } else {
        return this.getRuleContext(i, ExpressionContext);
      }
    }
  }, {
    key: "REMAINDER",
    value: function REMAINDER() {
      return this.getToken(CustomParser.REMAINDER, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitRemainderExpression) {
        return visitor.visitRemainderExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return RemainderExpressionContext;
}(ExpressionContext);
var AddExpressionContext = /*#__PURE__*/function (_ExpressionContext9) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AddExpressionContext, _ExpressionContext9);

  var _super23 = _createSuper(AddExpressionContext);

  function AddExpressionContext(ctx) {
    var _this13;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddExpressionContext);

    _this13 = _super23.call(this, ctx.parent, ctx.invokingState);

    _this13.copyFrom(ctx);

    return _this13;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AddExpressionContext, [{
    key: "expression",
    value: function expression(i) {
      if (i === undefined) {
        return this.getRuleContexts(ExpressionContext);
      } else {
        return this.getRuleContext(i, ExpressionContext);
      }
    }
  }, {
    key: "ADD",
    value: function ADD() {
      return this.getToken(CustomParser.ADD, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitAddExpression) {
        return visitor.visitAddExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return AddExpressionContext;
}(ExpressionContext);
var SubtractExpressionContext = /*#__PURE__*/function (_ExpressionContext10) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SubtractExpressionContext, _ExpressionContext10);

  var _super24 = _createSuper(SubtractExpressionContext);

  function SubtractExpressionContext(ctx) {
    var _this14;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SubtractExpressionContext);

    _this14 = _super24.call(this, ctx.parent, ctx.invokingState);

    _this14.copyFrom(ctx);

    return _this14;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SubtractExpressionContext, [{
    key: "expression",
    value: function expression(i) {
      if (i === undefined) {
        return this.getRuleContexts(ExpressionContext);
      } else {
        return this.getRuleContext(i, ExpressionContext);
      }
    }
  }, {
    key: "SUBTRACT",
    value: function SUBTRACT() {
      return this.getToken(CustomParser.SUBTRACT, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitSubtractExpression) {
        return visitor.visitSubtractExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return SubtractExpressionContext;
}(ExpressionContext);
var LessExpressionContext = /*#__PURE__*/function (_ExpressionContext11) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LessExpressionContext, _ExpressionContext11);

  var _super25 = _createSuper(LessExpressionContext);

  function LessExpressionContext(ctx) {
    var _this15;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LessExpressionContext);

    _this15 = _super25.call(this, ctx.parent, ctx.invokingState);

    _this15.copyFrom(ctx);

    return _this15;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LessExpressionContext, [{
    key: "expression",
    value: function expression(i) {
      if (i === undefined) {
        return this.getRuleContexts(ExpressionContext);
      } else {
        return this.getRuleContext(i, ExpressionContext);
      }
    }
  }, {
    key: "LESS",
    value: function LESS() {
      return this.getToken(CustomParser.LESS, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitLessExpression) {
        return visitor.visitLessExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return LessExpressionContext;
}(ExpressionContext);
var LessEqualExpressionContext = /*#__PURE__*/function (_ExpressionContext12) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LessEqualExpressionContext, _ExpressionContext12);

  var _super26 = _createSuper(LessEqualExpressionContext);

  function LessEqualExpressionContext(ctx) {
    var _this16;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LessEqualExpressionContext);

    _this16 = _super26.call(this, ctx.parent, ctx.invokingState);

    _this16.copyFrom(ctx);

    return _this16;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LessEqualExpressionContext, [{
    key: "expression",
    value: function expression(i) {
      if (i === undefined) {
        return this.getRuleContexts(ExpressionContext);
      } else {
        return this.getRuleContext(i, ExpressionContext);
      }
    }
  }, {
    key: "LESS_OR_EQUAL",
    value: function LESS_OR_EQUAL() {
      return this.getToken(CustomParser.LESS_OR_EQUAL, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitLessEqualExpression) {
        return visitor.visitLessEqualExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return LessEqualExpressionContext;
}(ExpressionContext);
var GreaterExpressionContext = /*#__PURE__*/function (_ExpressionContext13) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GreaterExpressionContext, _ExpressionContext13);

  var _super27 = _createSuper(GreaterExpressionContext);

  function GreaterExpressionContext(ctx) {
    var _this17;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GreaterExpressionContext);

    _this17 = _super27.call(this, ctx.parent, ctx.invokingState);

    _this17.copyFrom(ctx);

    return _this17;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GreaterExpressionContext, [{
    key: "expression",
    value: function expression(i) {
      if (i === undefined) {
        return this.getRuleContexts(ExpressionContext);
      } else {
        return this.getRuleContext(i, ExpressionContext);
      }
    }
  }, {
    key: "GREATER",
    value: function GREATER() {
      return this.getToken(CustomParser.GREATER, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitGreaterExpression) {
        return visitor.visitGreaterExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return GreaterExpressionContext;
}(ExpressionContext);
var GreaterEqualExpressionContext = /*#__PURE__*/function (_ExpressionContext14) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GreaterEqualExpressionContext, _ExpressionContext14);

  var _super28 = _createSuper(GreaterEqualExpressionContext);

  function GreaterEqualExpressionContext(ctx) {
    var _this18;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GreaterEqualExpressionContext);

    _this18 = _super28.call(this, ctx.parent, ctx.invokingState);

    _this18.copyFrom(ctx);

    return _this18;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GreaterEqualExpressionContext, [{
    key: "expression",
    value: function expression(i) {
      if (i === undefined) {
        return this.getRuleContexts(ExpressionContext);
      } else {
        return this.getRuleContext(i, ExpressionContext);
      }
    }
  }, {
    key: "GREATER_OR_EQUAL",
    value: function GREATER_OR_EQUAL() {
      return this.getToken(CustomParser.GREATER_OR_EQUAL, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitGreaterEqualExpression) {
        return visitor.visitGreaterEqualExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return GreaterEqualExpressionContext;
}(ExpressionContext);
var EqualExpressionContext = /*#__PURE__*/function (_ExpressionContext15) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(EqualExpressionContext, _ExpressionContext15);

  var _super29 = _createSuper(EqualExpressionContext);

  function EqualExpressionContext(ctx) {
    var _this19;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EqualExpressionContext);

    _this19 = _super29.call(this, ctx.parent, ctx.invokingState);

    _this19.copyFrom(ctx);

    return _this19;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(EqualExpressionContext, [{
    key: "expression",
    value: function expression(i) {
      if (i === undefined) {
        return this.getRuleContexts(ExpressionContext);
      } else {
        return this.getRuleContext(i, ExpressionContext);
      }
    }
  }, {
    key: "EQUAL",
    value: function EQUAL() {
      return this.getToken(CustomParser.EQUAL, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitEqualExpression) {
        return visitor.visitEqualExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return EqualExpressionContext;
}(ExpressionContext);
var DifferentExpressionContext = /*#__PURE__*/function (_ExpressionContext16) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DifferentExpressionContext, _ExpressionContext16);

  var _super30 = _createSuper(DifferentExpressionContext);

  function DifferentExpressionContext(ctx) {
    var _this20;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DifferentExpressionContext);

    _this20 = _super30.call(this, ctx.parent, ctx.invokingState);

    _this20.copyFrom(ctx);

    return _this20;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DifferentExpressionContext, [{
    key: "expression",
    value: function expression(i) {
      if (i === undefined) {
        return this.getRuleContexts(ExpressionContext);
      } else {
        return this.getRuleContext(i, ExpressionContext);
      }
    }
  }, {
    key: "DIFFERENT",
    value: function DIFFERENT() {
      return this.getToken(CustomParser.DIFFERENT, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitDifferentExpression) {
        return visitor.visitDifferentExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return DifferentExpressionContext;
}(ExpressionContext);
var AndExpressionContext = /*#__PURE__*/function (_ExpressionContext17) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AndExpressionContext, _ExpressionContext17);

  var _super31 = _createSuper(AndExpressionContext);

  function AndExpressionContext(ctx) {
    var _this21;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AndExpressionContext);

    _this21 = _super31.call(this, ctx.parent, ctx.invokingState);

    _this21.copyFrom(ctx);

    return _this21;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AndExpressionContext, [{
    key: "expression",
    value: function expression(i) {
      if (i === undefined) {
        return this.getRuleContexts(ExpressionContext);
      } else {
        return this.getRuleContext(i, ExpressionContext);
      }
    }
  }, {
    key: "AND",
    value: function AND() {
      return this.getToken(CustomParser.AND, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitAndExpression) {
        return visitor.visitAndExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return AndExpressionContext;
}(ExpressionContext);
var OrExpressionContext = /*#__PURE__*/function (_ExpressionContext18) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(OrExpressionContext, _ExpressionContext18);

  var _super32 = _createSuper(OrExpressionContext);

  function OrExpressionContext(ctx) {
    var _this22;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, OrExpressionContext);

    _this22 = _super32.call(this, ctx.parent, ctx.invokingState);

    _this22.copyFrom(ctx);

    return _this22;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(OrExpressionContext, [{
    key: "expression",
    value: function expression(i) {
      if (i === undefined) {
        return this.getRuleContexts(ExpressionContext);
      } else {
        return this.getRuleContext(i, ExpressionContext);
      }
    }
  }, {
    key: "OR",
    value: function OR() {
      return this.getToken(CustomParser.OR, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitOrExpression) {
        return visitor.visitOrExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return OrExpressionContext;
}(ExpressionContext);
var AtomExpressionContext = /*#__PURE__*/function (_ExpressionContext19) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AtomExpressionContext, _ExpressionContext19);

  var _super33 = _createSuper(AtomExpressionContext);

  function AtomExpressionContext(ctx) {
    var _this23;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AtomExpressionContext);

    _this23 = _super33.call(this, ctx.parent, ctx.invokingState);

    _this23.copyFrom(ctx);

    return _this23;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AtomExpressionContext, [{
    key: "atom",
    value: function atom() {
      return this.getRuleContext(0, AtomContext);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitAtomExpression) {
        return visitor.visitAtomExpression(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return AtomExpressionContext;
}(ExpressionContext);
var AtomContext = /*#__PURE__*/function (_ParserRuleContext11) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AtomContext, _ParserRuleContext11);

  var _super34 = _createSuper(AtomContext);

  function AtomContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AtomContext);

    return _super34.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AtomContext, [{
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_atom;
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(ctx) {
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(AtomContext.prototype), "copyFrom", this).call(this, ctx);
    }
  }]);

  return AtomContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var TrueAtomContext = /*#__PURE__*/function (_AtomContext) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TrueAtomContext, _AtomContext);

  var _super35 = _createSuper(TrueAtomContext);

  function TrueAtomContext(ctx) {
    var _this24;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TrueAtomContext);

    _this24 = _super35.call(this, ctx.parent, ctx.invokingState);

    _this24.copyFrom(ctx);

    return _this24;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TrueAtomContext, [{
    key: "TRUE",
    value: function TRUE() {
      return this.getToken(CustomParser.TRUE, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitTrueAtom) {
        return visitor.visitTrueAtom(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return TrueAtomContext;
}(AtomContext);
var FalseAtomContext = /*#__PURE__*/function (_AtomContext2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FalseAtomContext, _AtomContext2);

  var _super36 = _createSuper(FalseAtomContext);

  function FalseAtomContext(ctx) {
    var _this25;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FalseAtomContext);

    _this25 = _super36.call(this, ctx.parent, ctx.invokingState);

    _this25.copyFrom(ctx);

    return _this25;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(FalseAtomContext, [{
    key: "FALSE",
    value: function FALSE() {
      return this.getToken(CustomParser.FALSE, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitFalseAtom) {
        return visitor.visitFalseAtom(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return FalseAtomContext;
}(AtomContext);
var NumberAtomContext = /*#__PURE__*/function (_AtomContext3) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NumberAtomContext, _AtomContext3);

  var _super37 = _createSuper(NumberAtomContext);

  function NumberAtomContext(ctx) {
    var _this26;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NumberAtomContext);

    _this26 = _super37.call(this, ctx.parent, ctx.invokingState);

    _this26.copyFrom(ctx);

    return _this26;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(NumberAtomContext, [{
    key: "numberLiteral",
    value: function numberLiteral() {
      return this.getRuleContext(0, NumberLiteralContext);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitNumberAtom) {
        return visitor.visitNumberAtom(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return NumberAtomContext;
}(AtomContext);
var TextAtomContext = /*#__PURE__*/function (_AtomContext4) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TextAtomContext, _AtomContext4);

  var _super38 = _createSuper(TextAtomContext);

  function TextAtomContext(ctx) {
    var _this27;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TextAtomContext);

    _this27 = _super38.call(this, ctx.parent, ctx.invokingState);

    _this27.copyFrom(ctx);

    return _this27;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TextAtomContext, [{
    key: "textLiteral",
    value: function textLiteral() {
      return this.getRuleContext(0, TextLiteralContext);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitTextAtom) {
        return visitor.visitTextAtom(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return TextAtomContext;
}(AtomContext);
var FunctionCallAtomContext = /*#__PURE__*/function (_AtomContext5) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FunctionCallAtomContext, _AtomContext5);

  var _super39 = _createSuper(FunctionCallAtomContext);

  function FunctionCallAtomContext(ctx) {
    var _this28;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FunctionCallAtomContext);

    _this28 = _super39.call(this, ctx.parent, ctx.invokingState);

    _this28.copyFrom(ctx);

    return _this28;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(FunctionCallAtomContext, [{
    key: "functionCall",
    value: function functionCall() {
      return this.getRuleContext(0, FunctionCallContext);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitFunctionCallAtom) {
        return visitor.visitFunctionCallAtom(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return FunctionCallAtomContext;
}(AtomContext);
var IdentifierAtomContext = /*#__PURE__*/function (_AtomContext6) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(IdentifierAtomContext, _AtomContext6);

  var _super40 = _createSuper(IdentifierAtomContext);

  function IdentifierAtomContext(ctx) {
    var _this29;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, IdentifierAtomContext);

    _this29 = _super40.call(this, ctx.parent, ctx.invokingState);

    _this29.copyFrom(ctx);

    return _this29;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(IdentifierAtomContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(CustomParser.IDENTIFIER, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitIdentifierAtom) {
        return visitor.visitIdentifierAtom(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return IdentifierAtomContext;
}(AtomContext);
var NumberLiteralContext = /*#__PURE__*/function (_ParserRuleContext12) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NumberLiteralContext, _ParserRuleContext12);

  var _super41 = _createSuper(NumberLiteralContext);

  function NumberLiteralContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NumberLiteralContext);

    return _super41.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(NumberLiteralContext, [{
    key: "DECIMAL_NUMBER",
    value: function DECIMAL_NUMBER() {
      return this.tryGetToken(CustomParser.DECIMAL_NUMBER, 0);
    }
  }, {
    key: "HEX_NUMBER",
    value: function HEX_NUMBER() {
      return this.tryGetToken(CustomParser.HEX_NUMBER, 0);
    }
  }, {
    key: "BINARY_NUMBER",
    value: function BINARY_NUMBER() {
      return this.tryGetToken(CustomParser.BINARY_NUMBER, 0);
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_numberLiteral;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitNumberLiteral) {
        return visitor.visitNumberLiteral(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return NumberLiteralContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var TextLiteralContext = /*#__PURE__*/function (_ParserRuleContext13) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TextLiteralContext, _ParserRuleContext13);

  var _super42 = _createSuper(TextLiteralContext);

  function TextLiteralContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TextLiteralContext);

    return _super42.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TextLiteralContext, [{
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_textLiteral;
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(ctx) {
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(TextLiteralContext.prototype), "copyFrom", this).call(this, ctx);
    }
  }]);

  return TextLiteralContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var SimpleTextLiteralContext = /*#__PURE__*/function (_TextLiteralContext) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SimpleTextLiteralContext, _TextLiteralContext);

  var _super43 = _createSuper(SimpleTextLiteralContext);

  function SimpleTextLiteralContext(ctx) {
    var _this30;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SimpleTextLiteralContext);

    _this30 = _super43.call(this, ctx.parent, ctx.invokingState);

    _this30.copyFrom(ctx);

    return _this30;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SimpleTextLiteralContext, [{
    key: "QUOTE_SINGLE",
    value: function QUOTE_SINGLE(i) {
      if (i === undefined) {
        return this.getTokens(CustomParser.QUOTE_SINGLE);
      } else {
        return this.getToken(CustomParser.QUOTE_SINGLE, i);
      }
    }
  }, {
    key: "TEXT_CONTENT",
    value: function TEXT_CONTENT(i) {
      if (i === undefined) {
        return this.getTokens(CustomParser.TEXT_CONTENT);
      } else {
        return this.getToken(CustomParser.TEXT_CONTENT, i);
      }
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitSimpleTextLiteral) {
        return visitor.visitSimpleTextLiteral(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return SimpleTextLiteralContext;
}(TextLiteralContext);
var InterpolatedTextLiteralContext = /*#__PURE__*/function (_TextLiteralContext2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(InterpolatedTextLiteralContext, _TextLiteralContext2);

  var _super44 = _createSuper(InterpolatedTextLiteralContext);

  function InterpolatedTextLiteralContext(ctx) {
    var _this31;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InterpolatedTextLiteralContext);

    _this31 = _super44.call(this, ctx.parent, ctx.invokingState);

    _this31.copyFrom(ctx);

    return _this31;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(InterpolatedTextLiteralContext, [{
    key: "QUOTE_DOUBLE",
    value: function QUOTE_DOUBLE(i) {
      if (i === undefined) {
        return this.getTokens(CustomParser.QUOTE_DOUBLE);
      } else {
        return this.getToken(CustomParser.QUOTE_DOUBLE, i);
      }
    }
  }, {
    key: "interpolatedText",
    value: function interpolatedText(i) {
      if (i === undefined) {
        return this.getRuleContexts(InterpolatedTextContext);
      } else {
        return this.getRuleContext(i, InterpolatedTextContext);
      }
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitInterpolatedTextLiteral) {
        return visitor.visitInterpolatedTextLiteral(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return InterpolatedTextLiteralContext;
}(TextLiteralContext);
var InterpolatedTextContext = /*#__PURE__*/function (_ParserRuleContext14) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(InterpolatedTextContext, _ParserRuleContext14);

  var _super45 = _createSuper(InterpolatedTextContext);

  function InterpolatedTextContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InterpolatedTextContext);

    return _super45.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(InterpolatedTextContext, [{
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_interpolatedText;
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(ctx) {
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(InterpolatedTextContext.prototype), "copyFrom", this).call(this, ctx);
    }
  }]);

  return InterpolatedTextContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var InterpolatedSimpleTextContext = /*#__PURE__*/function (_InterpolatedTextCont) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(InterpolatedSimpleTextContext, _InterpolatedTextCont);

  var _super46 = _createSuper(InterpolatedSimpleTextContext);

  function InterpolatedSimpleTextContext(ctx) {
    var _this32;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InterpolatedSimpleTextContext);

    _this32 = _super46.call(this, ctx.parent, ctx.invokingState);

    _this32.copyFrom(ctx);

    return _this32;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(InterpolatedSimpleTextContext, [{
    key: "TEXT_CONTENT",
    value: function TEXT_CONTENT() {
      return this.getToken(CustomParser.TEXT_CONTENT, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitInterpolatedSimpleText) {
        return visitor.visitInterpolatedSimpleText(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return InterpolatedSimpleTextContext;
}(InterpolatedTextContext);
var InterpolatedExpressionTextContext = /*#__PURE__*/function (_InterpolatedTextCont2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(InterpolatedExpressionTextContext, _InterpolatedTextCont2);

  var _super47 = _createSuper(InterpolatedExpressionTextContext);

  function InterpolatedExpressionTextContext(ctx) {
    var _this33;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InterpolatedExpressionTextContext);

    _this33 = _super47.call(this, ctx.parent, ctx.invokingState);

    _this33.copyFrom(ctx);

    return _this33;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(InterpolatedExpressionTextContext, [{
    key: "OPEN_BRACE",
    value: function OPEN_BRACE() {
      return this.getToken(CustomParser.OPEN_BRACE, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getRuleContext(0, ExpressionContext);
    }
  }, {
    key: "CLOSE_BRACE",
    value: function CLOSE_BRACE() {
      return this.getToken(CustomParser.CLOSE_BRACE, 0);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitInterpolatedExpressionText) {
        return visitor.visitInterpolatedExpressionText(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return InterpolatedExpressionTextContext;
}(InterpolatedTextContext);
var FunctionCallContext = /*#__PURE__*/function (_ParserRuleContext15) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FunctionCallContext, _ParserRuleContext15);

  var _super48 = _createSuper(FunctionCallContext);

  function FunctionCallContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FunctionCallContext);

    return _super48.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(FunctionCallContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(CustomParser.IDENTIFIER, 0);
    }
  }, {
    key: "OPEN_PARENTHESIS",
    value: function OPEN_PARENTHESIS() {
      return this.getToken(CustomParser.OPEN_PARENTHESIS, 0);
    }
  }, {
    key: "CLOSE_PARENTHESIS",
    value: function CLOSE_PARENTHESIS() {
      return this.getToken(CustomParser.CLOSE_PARENTHESIS, 0);
    }
  }, {
    key: "argumentList",
    value: function argumentList() {
      return this.tryGetRuleContext(0, ArgumentListContext);
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_functionCall;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitFunctionCall) {
        return visitor.visitFunctionCall(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return FunctionCallContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var ArgumentListContext = /*#__PURE__*/function (_ParserRuleContext16) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ArgumentListContext, _ParserRuleContext16);

  var _super49 = _createSuper(ArgumentListContext);

  function ArgumentListContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ArgumentListContext);

    return _super49.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ArgumentListContext, [{
    key: "expression",
    value: function expression(i) {
      if (i === undefined) {
        return this.getRuleContexts(ExpressionContext);
      } else {
        return this.getRuleContext(i, ExpressionContext);
      }
    }
  }, {
    key: "COMMA",
    value: function COMMA(i) {
      if (i === undefined) {
        return this.getTokens(CustomParser.COMMA);
      } else {
        return this.getToken(CustomParser.COMMA, i);
      }
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_argumentList;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitArgumentList) {
        return visitor.visitArgumentList(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return ArgumentListContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var VariableAssignmentContext = /*#__PURE__*/function (_ParserRuleContext17) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(VariableAssignmentContext, _ParserRuleContext17);

  var _super50 = _createSuper(VariableAssignmentContext);

  function VariableAssignmentContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VariableAssignmentContext);

    return _super50.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(VariableAssignmentContext, [{
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_variableAssignment;
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(ctx) {
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(VariableAssignmentContext.prototype), "copyFrom", this).call(this, ctx);
    }
  }]);

  return VariableAssignmentContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var AssignmentContext = /*#__PURE__*/function (_VariableAssignmentCo) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AssignmentContext, _VariableAssignmentCo);

  var _super51 = _createSuper(AssignmentContext);

  function AssignmentContext(ctx) {
    var _this34;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AssignmentContext);

    _this34 = _super51.call(this, ctx.parent, ctx.invokingState);

    _this34.copyFrom(ctx);

    return _this34;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AssignmentContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(CustomParser.IDENTIFIER, 0);
    }
  }, {
    key: "ASSIGN",
    value: function ASSIGN() {
      return this.getToken(CustomParser.ASSIGN, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getRuleContext(0, ExpressionContext);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitAssignment) {
        return visitor.visitAssignment(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return AssignmentContext;
}(VariableAssignmentContext);
var AddAssignmentContext = /*#__PURE__*/function (_VariableAssignmentCo2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AddAssignmentContext, _VariableAssignmentCo2);

  var _super52 = _createSuper(AddAssignmentContext);

  function AddAssignmentContext(ctx) {
    var _this35;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddAssignmentContext);

    _this35 = _super52.call(this, ctx.parent, ctx.invokingState);

    _this35.copyFrom(ctx);

    return _this35;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AddAssignmentContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(CustomParser.IDENTIFIER, 0);
    }
  }, {
    key: "ADD_ASSIGN",
    value: function ADD_ASSIGN() {
      return this.getToken(CustomParser.ADD_ASSIGN, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getRuleContext(0, ExpressionContext);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitAddAssignment) {
        return visitor.visitAddAssignment(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return AddAssignmentContext;
}(VariableAssignmentContext);
var SubtractAssignmentContext = /*#__PURE__*/function (_VariableAssignmentCo3) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SubtractAssignmentContext, _VariableAssignmentCo3);

  var _super53 = _createSuper(SubtractAssignmentContext);

  function SubtractAssignmentContext(ctx) {
    var _this36;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SubtractAssignmentContext);

    _this36 = _super53.call(this, ctx.parent, ctx.invokingState);

    _this36.copyFrom(ctx);

    return _this36;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SubtractAssignmentContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(CustomParser.IDENTIFIER, 0);
    }
  }, {
    key: "SUBTRACT_ASSIGN",
    value: function SUBTRACT_ASSIGN() {
      return this.getToken(CustomParser.SUBTRACT_ASSIGN, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getRuleContext(0, ExpressionContext);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitSubtractAssignment) {
        return visitor.visitSubtractAssignment(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return SubtractAssignmentContext;
}(VariableAssignmentContext);
var MultiplyAssignmentContext = /*#__PURE__*/function (_VariableAssignmentCo4) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MultiplyAssignmentContext, _VariableAssignmentCo4);

  var _super54 = _createSuper(MultiplyAssignmentContext);

  function MultiplyAssignmentContext(ctx) {
    var _this37;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MultiplyAssignmentContext);

    _this37 = _super54.call(this, ctx.parent, ctx.invokingState);

    _this37.copyFrom(ctx);

    return _this37;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MultiplyAssignmentContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(CustomParser.IDENTIFIER, 0);
    }
  }, {
    key: "MULTIPLY_ASSIGN",
    value: function MULTIPLY_ASSIGN() {
      return this.getToken(CustomParser.MULTIPLY_ASSIGN, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getRuleContext(0, ExpressionContext);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitMultiplyAssignment) {
        return visitor.visitMultiplyAssignment(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return MultiplyAssignmentContext;
}(VariableAssignmentContext);
var DivideAssignmentContext = /*#__PURE__*/function (_VariableAssignmentCo5) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DivideAssignmentContext, _VariableAssignmentCo5);

  var _super55 = _createSuper(DivideAssignmentContext);

  function DivideAssignmentContext(ctx) {
    var _this38;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DivideAssignmentContext);

    _this38 = _super55.call(this, ctx.parent, ctx.invokingState);

    _this38.copyFrom(ctx);

    return _this38;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DivideAssignmentContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(CustomParser.IDENTIFIER, 0);
    }
  }, {
    key: "DIVIDE_ASSIGN",
    value: function DIVIDE_ASSIGN() {
      return this.getToken(CustomParser.DIVIDE_ASSIGN, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getRuleContext(0, ExpressionContext);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitDivideAssignment) {
        return visitor.visitDivideAssignment(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return DivideAssignmentContext;
}(VariableAssignmentContext);
var RemainderAssignmentContext = /*#__PURE__*/function (_VariableAssignmentCo6) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RemainderAssignmentContext, _VariableAssignmentCo6);

  var _super56 = _createSuper(RemainderAssignmentContext);

  function RemainderAssignmentContext(ctx) {
    var _this39;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RemainderAssignmentContext);

    _this39 = _super56.call(this, ctx.parent, ctx.invokingState);

    _this39.copyFrom(ctx);

    return _this39;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RemainderAssignmentContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(CustomParser.IDENTIFIER, 0);
    }
  }, {
    key: "REMAINDER_ASSIGN",
    value: function REMAINDER_ASSIGN() {
      return this.getToken(CustomParser.REMAINDER_ASSIGN, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getRuleContext(0, ExpressionContext);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitRemainderAssignment) {
        return visitor.visitRemainderAssignment(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return RemainderAssignmentContext;
}(VariableAssignmentContext);
var PowerAssignmentContext = /*#__PURE__*/function (_VariableAssignmentCo7) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PowerAssignmentContext, _VariableAssignmentCo7);

  var _super57 = _createSuper(PowerAssignmentContext);

  function PowerAssignmentContext(ctx) {
    var _this40;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PowerAssignmentContext);

    _this40 = _super57.call(this, ctx.parent, ctx.invokingState);

    _this40.copyFrom(ctx);

    return _this40;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PowerAssignmentContext, [{
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(CustomParser.IDENTIFIER, 0);
    }
  }, {
    key: "POWER_ASSIGN",
    value: function POWER_ASSIGN() {
      return this.getToken(CustomParser.POWER_ASSIGN, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getRuleContext(0, ExpressionContext);
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitPowerAssignment) {
        return visitor.visitPowerAssignment(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return PowerAssignmentContext;
}(VariableAssignmentContext);
var IfStatementContext = /*#__PURE__*/function (_ParserRuleContext18) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(IfStatementContext, _ParserRuleContext18);

  var _super58 = _createSuper(IfStatementContext);

  function IfStatementContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, IfStatementContext);

    return _super58.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(IfStatementContext, [{
    key: "IF",
    value: function IF() {
      return this.getToken(CustomParser.IF, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getRuleContext(0, ExpressionContext);
    }
  }, {
    key: "END",
    value: function END() {
      return this.getToken(CustomParser.END, 0);
    }
  }, {
    key: "NEWLINE",
    value: function NEWLINE(i) {
      if (i === undefined) {
        return this.getTokens(CustomParser.NEWLINE);
      } else {
        return this.getToken(CustomParser.NEWLINE, i);
      }
    }
  }, {
    key: "innerStatement",
    value: function innerStatement(i) {
      if (i === undefined) {
        return this.getRuleContexts(InnerStatementContext);
      } else {
        return this.getRuleContext(i, InnerStatementContext);
      }
    }
  }, {
    key: "elseIfPart",
    value: function elseIfPart(i) {
      if (i === undefined) {
        return this.getRuleContexts(ElseIfPartContext);
      } else {
        return this.getRuleContext(i, ElseIfPartContext);
      }
    }
  }, {
    key: "elsePart",
    value: function elsePart() {
      return this.tryGetRuleContext(0, ElsePartContext);
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_ifStatement;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitIfStatement) {
        return visitor.visitIfStatement(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return IfStatementContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var ElseIfPartContext = /*#__PURE__*/function (_ParserRuleContext19) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ElseIfPartContext, _ParserRuleContext19);

  var _super59 = _createSuper(ElseIfPartContext);

  function ElseIfPartContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ElseIfPartContext);

    return _super59.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ElseIfPartContext, [{
    key: "ELSE",
    value: function ELSE() {
      return this.getToken(CustomParser.ELSE, 0);
    }
  }, {
    key: "IF",
    value: function IF() {
      return this.getToken(CustomParser.IF, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getRuleContext(0, ExpressionContext);
    }
  }, {
    key: "NEWLINE",
    value: function NEWLINE(i) {
      if (i === undefined) {
        return this.getTokens(CustomParser.NEWLINE);
      } else {
        return this.getToken(CustomParser.NEWLINE, i);
      }
    }
  }, {
    key: "innerStatement",
    value: function innerStatement(i) {
      if (i === undefined) {
        return this.getRuleContexts(InnerStatementContext);
      } else {
        return this.getRuleContext(i, InnerStatementContext);
      }
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_elseIfPart;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitElseIfPart) {
        return visitor.visitElseIfPart(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return ElseIfPartContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var ElsePartContext = /*#__PURE__*/function (_ParserRuleContext20) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ElsePartContext, _ParserRuleContext20);

  var _super60 = _createSuper(ElsePartContext);

  function ElsePartContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ElsePartContext);

    return _super60.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ElsePartContext, [{
    key: "ELSE",
    value: function ELSE() {
      return this.getToken(CustomParser.ELSE, 0);
    }
  }, {
    key: "NEWLINE",
    value: function NEWLINE(i) {
      if (i === undefined) {
        return this.getTokens(CustomParser.NEWLINE);
      } else {
        return this.getToken(CustomParser.NEWLINE, i);
      }
    }
  }, {
    key: "innerStatement",
    value: function innerStatement(i) {
      if (i === undefined) {
        return this.getRuleContexts(InnerStatementContext);
      } else {
        return this.getRuleContext(i, InnerStatementContext);
      }
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_elsePart;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitElsePart) {
        return visitor.visitElsePart(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return ElsePartContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var ForFromToStatementContext = /*#__PURE__*/function (_ParserRuleContext21) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ForFromToStatementContext, _ParserRuleContext21);

  var _super61 = _createSuper(ForFromToStatementContext);

  function ForFromToStatementContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ForFromToStatementContext);

    return _super61.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ForFromToStatementContext, [{
    key: "FOR",
    value: function FOR() {
      return this.getToken(CustomParser.FOR, 0);
    }
  }, {
    key: "type",
    value: function type() {
      return this.getRuleContext(0, TypeContext);
    }
  }, {
    key: "IDENTIFIER",
    value: function IDENTIFIER() {
      return this.getToken(CustomParser.IDENTIFIER, 0);
    }
  }, {
    key: "FROM",
    value: function FROM() {
      return this.getToken(CustomParser.FROM, 0);
    }
  }, {
    key: "expression",
    value: function expression(i) {
      if (i === undefined) {
        return this.getRuleContexts(ExpressionContext);
      } else {
        return this.getRuleContext(i, ExpressionContext);
      }
    }
  }, {
    key: "TO",
    value: function TO() {
      return this.getToken(CustomParser.TO, 0);
    }
  }, {
    key: "END",
    value: function END() {
      return this.getToken(CustomParser.END, 0);
    }
  }, {
    key: "NEWLINE",
    value: function NEWLINE(i) {
      if (i === undefined) {
        return this.getTokens(CustomParser.NEWLINE);
      } else {
        return this.getToken(CustomParser.NEWLINE, i);
      }
    }
  }, {
    key: "innerStatement",
    value: function innerStatement(i) {
      if (i === undefined) {
        return this.getRuleContexts(InnerStatementContext);
      } else {
        return this.getRuleContext(i, InnerStatementContext);
      }
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_forFromToStatement;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitForFromToStatement) {
        return visitor.visitForFromToStatement(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return ForFromToStatementContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var WhileStatementContext = /*#__PURE__*/function (_ParserRuleContext22) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(WhileStatementContext, _ParserRuleContext22);

  var _super62 = _createSuper(WhileStatementContext);

  function WhileStatementContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WhileStatementContext);

    return _super62.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(WhileStatementContext, [{
    key: "WHILE",
    value: function WHILE() {
      return this.getToken(CustomParser.WHILE, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.getRuleContext(0, ExpressionContext);
    }
  }, {
    key: "END",
    value: function END() {
      return this.getToken(CustomParser.END, 0);
    }
  }, {
    key: "NEWLINE",
    value: function NEWLINE(i) {
      if (i === undefined) {
        return this.getTokens(CustomParser.NEWLINE);
      } else {
        return this.getToken(CustomParser.NEWLINE, i);
      }
    }
  }, {
    key: "innerStatement",
    value: function innerStatement(i) {
      if (i === undefined) {
        return this.getRuleContexts(InnerStatementContext);
      } else {
        return this.getRuleContext(i, InnerStatementContext);
      }
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_whileStatement;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitWhileStatement) {
        return visitor.visitWhileStatement(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return WhileStatementContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var ForeverStatementContext = /*#__PURE__*/function (_ParserRuleContext23) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ForeverStatementContext, _ParserRuleContext23);

  var _super63 = _createSuper(ForeverStatementContext);

  function ForeverStatementContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ForeverStatementContext);

    return _super63.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ForeverStatementContext, [{
    key: "FOREVER",
    value: function FOREVER() {
      return this.getToken(CustomParser.FOREVER, 0);
    }
  }, {
    key: "END",
    value: function END() {
      return this.getToken(CustomParser.END, 0);
    }
  }, {
    key: "NEWLINE",
    value: function NEWLINE(i) {
      if (i === undefined) {
        return this.getTokens(CustomParser.NEWLINE);
      } else {
        return this.getToken(CustomParser.NEWLINE, i);
      }
    }
  }, {
    key: "innerStatement",
    value: function innerStatement(i) {
      if (i === undefined) {
        return this.getRuleContexts(InnerStatementContext);
      } else {
        return this.getRuleContext(i, InnerStatementContext);
      }
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_foreverStatement;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitForeverStatement) {
        return visitor.visitForeverStatement(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return ForeverStatementContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var BreakStatementContext = /*#__PURE__*/function (_ParserRuleContext24) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BreakStatementContext, _ParserRuleContext24);

  var _super64 = _createSuper(BreakStatementContext);

  function BreakStatementContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BreakStatementContext);

    return _super64.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BreakStatementContext, [{
    key: "BREAK",
    value: function BREAK() {
      return this.getToken(CustomParser.BREAK, 0);
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_breakStatement;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitBreakStatement) {
        return visitor.visitBreakStatement(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return BreakStatementContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var ContinueStatementContext = /*#__PURE__*/function (_ParserRuleContext25) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ContinueStatementContext, _ParserRuleContext25);

  var _super65 = _createSuper(ContinueStatementContext);

  function ContinueStatementContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ContinueStatementContext);

    return _super65.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ContinueStatementContext, [{
    key: "CONTINUE",
    value: function CONTINUE() {
      return this.getToken(CustomParser.CONTINUE, 0);
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_continueStatement;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitContinueStatement) {
        return visitor.visitContinueStatement(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return ContinueStatementContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var ReturnStatementContext = /*#__PURE__*/function (_ParserRuleContext26) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ReturnStatementContext, _ParserRuleContext26);

  var _super66 = _createSuper(ReturnStatementContext);

  function ReturnStatementContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ReturnStatementContext);

    return _super66.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ReturnStatementContext, [{
    key: "RETURN",
    value: function RETURN() {
      return this.getToken(CustomParser.RETURN, 0);
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.tryGetRuleContext(0, ExpressionContext);
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_returnStatement;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitReturnStatement) {
        return visitor.visitReturnStatement(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return ReturnStatementContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);
var EosContext = /*#__PURE__*/function (_ParserRuleContext27) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(EosContext, _ParserRuleContext27);

  var _super67 = _createSuper(EosContext);

  function EosContext(parent, invokingState) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EosContext);

    return _super67.call(this, parent, invokingState);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(EosContext, [{
    key: "NEWLINE",
    value: function NEWLINE(i) {
      if (i === undefined) {
        return this.getTokens(CustomParser.NEWLINE);
      } else {
        return this.getToken(CustomParser.NEWLINE, i);
      }
    }
  }, {
    key: "EOF",
    value: function EOF() {
      return this.tryGetToken(CustomParser.EOF, 0);
    }
  }, {
    key: "ruleIndex",
    get: function get() {
      return CustomParser.RULE_eos;
    }
  }, {
    key: "accept",
    value: function accept(visitor) {
      if (visitor.visitEos) {
        return visitor.visitEos(this);
      } else {
        return visitor.visitChildren(this);
      }
    }
  }]);

  return EosContext;
}(antlr4ts_ParserRuleContext__WEBPACK_IMPORTED_MODULE_12__.ParserRuleContext);

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