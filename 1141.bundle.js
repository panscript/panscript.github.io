"use strict";(self.webpackChunkpanscript=self.webpackChunkpanscript||[]).push([[1141,8628],{7930:(t,e,n)=>{n.d(e,{Hq:()=>o,_U:()=>_,ks:()=>a});var r,i=n(9439),E=n(4971);function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}!function(t){t[t.Base=0]="Base",t[t.Text=1]="Text",t[t.TextInterpolation=2]="TextInterpolation",t[t.Comment=3]="Comment"}(r||(r={}));var o=function(t){return[[t.KEYWORD_TRUE,"atom"],[t.KEYWORD_FALSE,"atom"],[t.KEYWORD_BREAK,"keyword"],[t.KEYWORD_CONSTANT,"keyword"],[t.KEYWORD_CONTINUE,"keyword"],[t.KEYWORD_ELSE,"keyword"],[t.KEYWORD_END,"keyword"],[t.KEYWORD_FOR,"keyword"],[t.KEYWORD_FOREVER,"keyword"],[t.KEYWORD_FROM,"keyword"],[t.KEYWORD_FUNCTION,"keyword"],[t.KEYWORD_GLOBAL,"keyword"],[t.KEYWORD_IF,"keyword"],[t.KEYWORD_IN,"keyword"],[t.KEYWORD_RETURN,"keyword"],[t.KEYWORD_RETURNS,"keyword"],[t.KEYWORD_TO,"keyword"],[t.KEYWORD_WHILE,"keyword"],[t.KEYWORD_NOT,"operator"],[t.KEYWORD_AND,"operator"],[t.KEYWORD_OR,"operator"],[t.KEYWORD_TYPES[E._j.Logical.toString()],"type"],[t.KEYWORD_TYPES[E._j.Number.toString()],"type"],[t.KEYWORD_TYPES[E._j.Text.toString()],"type"]].slice().sort((function(t,e){return t[0].localeCompare(e[0])})).reverse()},_=function(t){return t.replace(/[\\^$.|?*+(){}[\]/=:-]/g,"\\$&")},a=function(t){var e=t.reservedWordsToStyles,n=t.bracketRegExp,E=t.operatorRegExp,o=t.decimalNumberRegExp,a=t.hexNumberRegExp,R=t.binaryNumberRegExp,O=t.identifierRegExp,N=function(){return{states:[{modeState:r.Base}]}},T=function(t){return t.states[t.states.length-1]},h=function(t,N){if(t.match("//"))return t.skipToEnd(),"comment";if(t.match("#"))return t.skipToEnd(),"comment";if(t.match("/*")){var T={modeState:r.Comment};return N.states.push(T),"comment"}if(t.match(a))return"number";if(t.match(R))return"number";if(t.match(o))return"number";if(t.match('"')){var h={modeState:r.Text,quote:'"'};return N.states.push(h),"string"}if(t.match("'")){var u={modeState:r.Text,quote:"'"};return N.states.push(u),"string"}if(t.match(n))return"bracket";if(t.match(E))return"operator";var c,I=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var E,o=!0,_=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){_=!0,E=t},f:function(){try{o||null==n.return||n.return()}finally{if(_)throw E}}}}(e);try{for(I.s();!(c=I.n()).done;){var l=(0,i.Z)(c.value,2),L=l[0],S=l[1];if(t.match(_(L)))return t.match(O)?"variable":S}}catch(t){I.e(t)}finally{I.f()}return t.match(O)?"variable":(t.next(),null)};return{startState:function(){return N()},token:function(t,e){switch(T(e).modeState){case r.Base:return h(t,e);case r.Text:return function(t,e){if(t.sol())return Object.assign(e,N()),null;var n=T(e).quote;if(n&&t.match(n))return e.states.pop(),"string";if('"'==n&&t.match("{")){var i={modeState:r.TextInterpolation};return e.states.push(i),"bracket"}return t.match(/\\["'{]/)||t.next(),"string"}(t,e);case r.TextInterpolation:return function(t,e){return t.sol()?(Object.assign(e,N()),null):t.match("}")?(e.states.pop(),"bracket"):h(t,e)}(t,e);case r.Comment:return function(t,e){return t.match("*/")?(e.states.pop(),"comment"):(t.next(),"comment")}(t,e);default:return t.next(),"error"}}}}},6336:(t,e,n)=>{n.d(e,{a:()=>i});var r=n(5671),i=function t(){(0,r.Z)(this,t),this.PANSCRIPT_HEADLINE="PanScript – code in your language",this.LANGUAGE_SELECT_PROMPT="Language:",this.THEME_SELECT_PROMPT="Theme:",this.RUN_BUTTON_LABEL="Run",this.UNDO_BUTTON_LABEL="Undo",this.REDO_BUTTON_LABEL="Redo",this.RELOAD_BUTTON_LABEL="Reload",this.SAVE_BUTTON_LABEL="Save",this.LOAD_BUTTON_LABEL="Load",this.CLEAR_BUTTON_LABEL="Clear",this.EXPLORER_FOLDER_YOUR_FILES="Your Files",this.EXPLORER_FOLDER_EXAMPLES="Examples",this.EXPLORER_FOLDER_BASICS="1 - Basics",this.EXPLORER_FOLDER_STANDARD_FUNCTIONS="2 - Standard Functions",this.EXPLORER_FOLDER_EXPRESSIONS="3 - Expressions",this.EXPLORER_FOLDER_CONDITIONALS="4 - Conditionals",this.EXPLORER_FOLDER_LOOPS="5 - Loops",this.EXPLORER_FOLDER_USER_FUNCTIONS="6 - User Functions",this.EXPLORER_FILE_MAIN="Main",this.EXPLORER_FILE_VARIABLES="Variables",this.EXPLORER_FILE_TYPES="Types",this.EXPLORER_FILE_CONSTANTS="Constants",this.EXPLORER_FILE_TEXT_INTERPOLATION="Text Interpolation",this.EXPLORER_FILE_CONSOLE_FUNCTIONS="Console Functions",this.EXPLORER_FILE_TEXT_FUNCTIONS="Text Functions",this.EXPLORER_FILE_MATH_FUNCTIONS="Math Functions",this.EXPLORER_FILE_EXPRESSIONS="Expressions",this.EXPLORER_FILE_IF="If",this.EXPLORER_FILE_ELSE="Else",this.EXPLORER_FILE_ELSE_IF="Else If",this.EXPLORER_FILE_LOOPS="Loops",this.EXPLORER_FILE_BREAK_AND_CONTINUE="Break and Continue",this.EXPLORER_FILE_FUNCTIONS="Functions",this.EXPLORER_FILE_RECURSION="Recursion",this.KEYWORD_TRUE="true",this.KEYWORD_FALSE="false",this.KEYWORD_BREAK="break",this.KEYWORD_CONSTANT="constant",this.KEYWORD_CONTINUE="continue",this.KEYWORD_ELSE="else",this.KEYWORD_END="end",this.KEYWORD_FOR="for",this.KEYWORD_FOREVER="forever",this.KEYWORD_FROM="from",this.KEYWORD_FUNCTION="function",this.KEYWORD_GLOBAL="global",this.KEYWORD_IF="if",this.KEYWORD_IN="in",this.KEYWORD_RETURN="return",this.KEYWORD_RETURNS="returns",this.KEYWORD_TO="to",this.KEYWORD_WHILE="while",this.KEYWORD_NOT="not",this.KEYWORD_AND="and",this.KEYWORD_OR="or",this.KEYWORD_TYPES={logical:"logical",number:"number",text:"text",none:"none",any:"any","...T":"...T"},this.FUNCTION_WRITE="write",this.FUNCTION_WRITE_INLINE="write_inline",this.FUNCTION_NEW_LINE="new_line",this.FUNCTION_CLEAR="clear",this.FUNCTION_TO_TEXT="to_text",this.FUNCTION_PAD_LEFT="pad_left",this.FUNCTION_PAD_RIGHT="pad_right",this.FUNCTION_LENGTH="length",this.FUNCTION_REPEAT="repeat",this.FUNCTION_UPPER_CASE="upper_case",this.FUNCTION_LOWER_CASE="lower_case",this.FUNCTION_SENTENCE_CASE="sentence_case",this.FUNCTION_LEFT="left",this.FUNCTION_RIGHT="right",this.FUNCTION_MIDDLE="middle",this.FUNCTION_SLICE_TEXT="slice_text",this.FUNCTION_REVERSE_TEXT="reverse_text",this.FUNCTION_IN_TEXT="in_text",this.FUNCTION_POSITION="position",this.FUNCTION_TRIM="trim",this.FUNCTION_TRIM_LEFT="trim_left",this.FUNCTION_TRIM_RIGHT="trim_right",this.FUNCTION_PI="pi",this.FUNCTION_ABSOLUTE="absolute",this.FUNCTION_POWER="power",this.FUNCTION_SQUARE_ROOT="square_root",this.FUNCTION_SINE="sine",this.FUNCTION_COSINE="cosine",this.FUNCTION_TANGENT="tangent",this.FUNCTION_ARC_SINE="arc_sine",this.FUNCTION_ARC_COSINE="arc_cosine",this.FUNCTION_ARC_TANGENT="arc_tangent",this.FUNCTION_EXPONENTIAL="exponential",this.FUNCTION_NATURAL_LOGARITHM="natural_logarithm",this.FUNCTION_LOGARITHM="logarithm",this.FUNCTION_FLOOR="floor",this.FUNCTION_CEILING="ceiling",this.FUNCTION_TRUNCATE="truncate",this.FUNCTION_MINIMUM="minimum",this.FUNCTION_MAXIMUM="maximum",this.FUNCTION_RANDOM_REAL="random_real",this.FUNCTION_RANDOM_INTEGER="random_integer",this.FUNCTION_ROUND="round",this.FUNCTION_ROUND_N_PLACES="round_n_places",this.FUNCTION_TRUNCATE_N_PLACES="truncate_n_places",this.ERROR="Error",this.ERROR_MESSAGE_END_OF_CODE_TOKEN="the end of the code",this.ERROR_MESSAGE_END_OF_LINE_TOKEN="the end of the line",this.ERROR_MESSAGE_TEMPLATE_UNKNOWN_TOKEN="Error: I could not understand the code at line ${line}, column ${charPositionInLine}",this.ERROR_MESSAGE_TEMPLATE_INVALID_SYNTAX="Error at line ${line}:\r\nI was not expecting to find ${symbolDescription}",this.ERROR_MESSAGE_TEMPLATE_NAME_ALREADY_DEFINED="Error at line ${line}:\r\nThe identifier ${name} is being defined a second time",this.ERROR_MESSAGE_TEMPLATE_TYPE_MISMATCH="Error at line ${line}:\r\nI was expecting the type of ${name} to be ${expectedType}, but it was ${actualType}",this.ERROR_MESSAGE_TEMPLATE_CONSTANT_REASSIGNMENT='Error at line ${line}:\r\nI cannot modify the value of ${name} because it was declared as "${constantKeyword}"',this.ERROR_MESSAGE_TEMPLATE_UNDECLARED_IDENTIFIER="Error at line ${line}:\r\nI could not find the identifier ${name} in the current scope",this.ERROR_MESSAGE_TEMPLATE_ARGUMENTS_NUMBER="Error at line ${line}:\r\nFunction ${name} expects ${argumentsExpected} argument(s), but I have found ${argumentsGiven} instead",this.ERROR_MESSAGE_GLOBAL_HINT='\r\nTo access a global variable in a function, bind it using the "${globalKeyword}" keyword:\r\n${globalKeyword} ${name}',this.ERROR_MESSAGE_WRITE_HINT="\r\nPerhaps you've meant to use function ${write}() or ${write_inline}()?"}},1141:(t,e,n)=>{n.r(e),n.d(e,{ModeFactory:()=>s});var r=n(7930),i=new(n(8628).CustomLocalizedStrings),E={reservedWordsToStyles:r.Hq(i),bracketRegExp:new RegExp("["+r._U("{}[]()")+"]"),operatorRegExp:new RegExp("["+r._U("=><!&|+-*/^%.")+"]"),decimalNumberRegExp:new RegExp("(?:(?:\\d+\\.?)|(?:\\d*\\.\\d+))(?:e[+-]?\\d+)?","i"),hexNumberRegExp:new RegExp("0x[0-9a-f]+","i"),binaryNumberRegExp:new RegExp("0b[01]+","i"),identifierRegExp:new RegExp("[a-z_][a-z0-9_]*","i")},s=function(){return r.ks(E)}},8628:(t,e,n)=>{n.r(e),n.d(e,{CustomLocalizedStrings:()=>o});var r=n(5671),i=n(9340),E=n(2963),s=n(1120);var o=function(t){(0,i.Z)(_,t);var e,n,o=(e=_,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,s.Z)(e);if(n){var i=(0,s.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,E.Z)(this,t)});function _(){return(0,r.Z)(this,_),o.apply(this,arguments)}return _}(n(6336).a)}}]);