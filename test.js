(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
module.exports = function () {
	return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
};

},{}],2:[function(require,module,exports){
'use strict';

function assembleStyles () {
	var styles = {
		modifiers: {
			reset: [0, 0],
			bold: [1, 22], // 21 isn't widely supported and 22 does the same thing
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		colors: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],
			gray: [90, 39]
		},
		bgColors: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49]
		}
	};

	// fix humans
	styles.colors.grey = styles.colors.gray;

	Object.keys(styles).forEach(function (groupName) {
		var group = styles[groupName];

		Object.keys(group).forEach(function (styleName) {
			var style = group[styleName];

			styles[styleName] = group[styleName] = {
				open: '\u001b[' + style[0] + 'm',
				close: '\u001b[' + style[1] + 'm'
			};
		});

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});
	});

	return styles;
}

Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});

},{}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":59}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/number/is-nan"), __esModule: true };
},{"core-js/library/fn/number/is-nan":60}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-properties"), __esModule: true };
},{"core-js/library/fn/object/define-properties":61}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":62}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/freeze"), __esModule: true };
},{"core-js/library/fn/object/freeze":63}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":6}],10:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperties = require("../core-js/object/define-properties");

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _freeze = require("../core-js/object/freeze");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (strings, raw) {
  return (0, _freeze2.default)((0, _defineProperties2.default)(strings, {
    raw: {
      value: (0, _freeze2.default)(raw)
    }
  }));
};
},{"../core-js/object/define-properties":5,"../core-js/object/freeze":7}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require("../core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
},{"../core-js/array/from":3}],12:[function(require,module,exports){
'use strict';

/**
 * @class TemplateTag
 * @classdesc Consumes a pipeline of composable transformer plugins and produces a template tag.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['', ''], ['', '']);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TemplateTag = function () {
  /**
   * constructs a template tag
   * @constructs TemplateTag
   * @param  {...Object} [...transformers] - an array or arguments list of transformers
   * @return {Function}                    - a template tag
   */
  function TemplateTag() {
    var _this = this;

    for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
      transformers[_key] = arguments[_key];
    }

    (0, _classCallCheck3.default)(this, TemplateTag);

    this.tag = function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      // if the first argument passed is a function, assume it is a template tag and return
      // an intermediary tag that processes the template using the aforementioned tag, passing the
      // result to our tag
      if (typeof args[0] === 'function') {
        return _this.interimTag.bind(_this, args.shift());
      }

      // else, return a transformed end result of processing the template with our tag
      return _this.transformEndResult(args.shift().reduce(_this.processSubstitutions.bind(_this, args)));
    };

    // if first argument is an array, extrude it as a list of transformers
    if (transformers.length && Array.isArray(transformers[0])) {
      transformers = transformers[0];
    }

    // if any transformers are functions, this means they are not initiated - automatically initiate them
    this.transformers = transformers.map(function (transformer) {
      return typeof transformer === 'function' ? transformer() : transformer;
    });

    // return an ES2015 template tag
    return this.tag;
  }

  /**
   * Applies all transformers to a template literal tagged with this method.
   * If a function is passed as the first argument, assumes the function is a template tag
   * and applies it to the template, returning a template tag.
   * @param  {(Function|Array<String>)} args[0] - Either a template tag or an array containing template strings separated by identifier
   * @param  {...*} [args[1]]                   - Optional list of substitution values.
   * @return {(String|Function)}                - Either an intermediary tag function or the results of processing the template.
   */


  (0, _createClass3.default)(TemplateTag, [{
    key: 'interimTag',


    /**
     * An intermediary template tag that receives a template tag and passes the result of calling the template with the received
     * template tag to our own template tag.
     * @param  {Function}        nextTag          - the received template tag
     * @param  {Array<String>}   template         - the template to process
     * @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
     * @return {*}                                - the final processed value
     */
    value: function interimTag(previousTag, template) {
      for (var _len3 = arguments.length, substitutions = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        substitutions[_key3 - 2] = arguments[_key3];
      }

      return this.tag(_templateObject, previousTag.apply(undefined, [template].concat(substitutions)));
    }

    /**
     * Performs bulk processing on the tagged template, transforming each substitution and then
     * concatenating the resulting values into a string.
     * @param  {Array<*>} substitutions - an array of all remaining substitutions present in this template
     * @param  {String}   resultSoFar   - this iteration's result string so far
     * @param  {String}   remainingPart - the template chunk after the current substitution
     * @return {String}                 - the result of joining this iteration's processed substitution with the result
     */

  }, {
    key: 'processSubstitutions',
    value: function processSubstitutions(substitutions, resultSoFar, remainingPart) {
      var substitution = this.transformSubstitution(substitutions.shift(), resultSoFar);
      return resultSoFar + substitution + remainingPart;
    }

    /**
     * When a substitution is encountered, iterates through each transformer and applies the transformer's
     * `onSubstitution` method to the substitution.
     * @param  {*}      substitution - The current substitution
     * @param  {String} resultSoFar  - The result up to and excluding this substitution.
     * @return {*}                   - The final result of applying all substitution transformations.
     */

  }, {
    key: 'transformSubstitution',
    value: function transformSubstitution(substitution, resultSoFar) {
      var cb = function cb(res, transform) {
        return transform.onSubstitution ? transform.onSubstitution(res, resultSoFar) : res;
      };
      return this.transformers.reduce(cb, substitution);
    }

    /**
     * Iterates through each transformer, applying the transformer's `onEndResult` method to the
     * template literal after all substitutions have finished processing.
     * @param  {String} endResult - The processed template, just before it is returned from the tag
     * @return {String}           - The final results of processing each transformer
     */

  }, {
    key: 'transformEndResult',
    value: function transformEndResult(endResult) {
      var cb = function cb(res, transform) {
        return transform.onEndResult ? transform.onEndResult(res) : res;
      };
      return this.transformers.reduce(cb, endResult);
    }
  }]);
  return TemplateTag;
}();

exports.default = TemplateTag;
module.exports = exports['default'];

},{"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"babel-runtime/helpers/taggedTemplateLiteral":10}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _TemplateTag = require('./TemplateTag');

var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TemplateTag2.default;
module.exports = exports['default'];

},{"./TemplateTag":12}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _html = require('../html');

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _html2.default;
module.exports = exports['default'];

},{"../html":22}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TemplateTag = require('../TemplateTag');

var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

var _stripIndentTransformer = require('../stripIndentTransformer');

var _stripIndentTransformer2 = _interopRequireDefault(_stripIndentTransformer);

var _inlineArrayTransformer = require('../inlineArrayTransformer');

var _inlineArrayTransformer2 = _interopRequireDefault(_inlineArrayTransformer);

var _trimResultTransformer = require('../trimResultTransformer');

var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commaLists = new _TemplateTag2.default((0, _inlineArrayTransformer2.default)({ separator: ',' }), _stripIndentTransformer2.default, _trimResultTransformer2.default);

exports.default = commaLists;
module.exports = exports['default'];

},{"../TemplateTag":13,"../inlineArrayTransformer":24,"../stripIndentTransformer":53,"../trimResultTransformer":57}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _commaLists = require('./commaLists');

var _commaLists2 = _interopRequireDefault(_commaLists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _commaLists2.default;
module.exports = exports['default'];

},{"./commaLists":15}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TemplateTag = require('../TemplateTag');

var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

var _stripIndentTransformer = require('../stripIndentTransformer');

var _stripIndentTransformer2 = _interopRequireDefault(_stripIndentTransformer);

var _inlineArrayTransformer = require('../inlineArrayTransformer');

var _inlineArrayTransformer2 = _interopRequireDefault(_inlineArrayTransformer);

var _trimResultTransformer = require('../trimResultTransformer');

var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commaListsAnd = new _TemplateTag2.default((0, _inlineArrayTransformer2.default)({ separator: ',', conjunction: 'and' }), _stripIndentTransformer2.default, _trimResultTransformer2.default);

exports.default = commaListsAnd;
module.exports = exports['default'];

},{"../TemplateTag":13,"../inlineArrayTransformer":24,"../stripIndentTransformer":53,"../trimResultTransformer":57}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _commaListsAnd = require('./commaListsAnd');

var _commaListsAnd2 = _interopRequireDefault(_commaListsAnd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _commaListsAnd2.default;
module.exports = exports['default'];

},{"./commaListsAnd":17}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TemplateTag = require('../TemplateTag');

var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

var _stripIndentTransformer = require('../stripIndentTransformer');

var _stripIndentTransformer2 = _interopRequireDefault(_stripIndentTransformer);

var _inlineArrayTransformer = require('../inlineArrayTransformer');

var _inlineArrayTransformer2 = _interopRequireDefault(_inlineArrayTransformer);

var _trimResultTransformer = require('../trimResultTransformer');

var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commaListsOr = new _TemplateTag2.default((0, _inlineArrayTransformer2.default)({ separator: ',', conjunction: 'or' }), _stripIndentTransformer2.default, _trimResultTransformer2.default);

exports.default = commaListsOr;
module.exports = exports['default'];

},{"../TemplateTag":13,"../inlineArrayTransformer":24,"../stripIndentTransformer":53,"../trimResultTransformer":57}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _commaListsOr = require('./commaListsOr');

var _commaListsOr2 = _interopRequireDefault(_commaListsOr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _commaListsOr2.default;
module.exports = exports['default'];

},{"./commaListsOr":19}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TemplateTag = require('../TemplateTag');

var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

var _stripIndentTransformer = require('../stripIndentTransformer');

var _stripIndentTransformer2 = _interopRequireDefault(_stripIndentTransformer);

var _inlineArrayTransformer = require('../inlineArrayTransformer');

var _inlineArrayTransformer2 = _interopRequireDefault(_inlineArrayTransformer);

var _trimResultTransformer = require('../trimResultTransformer');

var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

var _splitStringTransformer = require('../splitStringTransformer');

var _splitStringTransformer2 = _interopRequireDefault(_splitStringTransformer);

var _removeNonPrintingValuesTransformer = require('../removeNonPrintingValuesTransformer');

var _removeNonPrintingValuesTransformer2 = _interopRequireDefault(_removeNonPrintingValuesTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html = new _TemplateTag2.default((0, _splitStringTransformer2.default)('\n'), _removeNonPrintingValuesTransformer2.default, _inlineArrayTransformer2.default, _stripIndentTransformer2.default, _trimResultTransformer2.default);

exports.default = html;
module.exports = exports['default'];

},{"../TemplateTag":13,"../inlineArrayTransformer":24,"../removeNonPrintingValuesTransformer":40,"../splitStringTransformer":49,"../stripIndentTransformer":53,"../trimResultTransformer":57}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _html = require('./html');

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _html2.default;
module.exports = exports['default'];

},{"./html":21}],23:[function(require,module,exports){
'use strict';

// core

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stripIndents = exports.stripIndent = exports.oneLineInlineLists = exports.inlineLists = exports.oneLineCommaListsAnd = exports.oneLineCommaListsOr = exports.oneLineCommaLists = exports.oneLineTrim = exports.oneLine = exports.safeHtml = exports.source = exports.codeBlock = exports.html = exports.commaListsOr = exports.commaListsAnd = exports.commaLists = exports.removeNonPrintingValuesTransformer = exports.splitStringTransformer = exports.inlineArrayTransformer = exports.replaceSubstitutionTransformer = exports.replaceResultTransformer = exports.stripIndentTransformer = exports.trimResultTransformer = exports.TemplateTag = undefined;

var _TemplateTag2 = require('./TemplateTag');

var _TemplateTag3 = _interopRequireDefault(_TemplateTag2);

var _trimResultTransformer2 = require('./trimResultTransformer');

var _trimResultTransformer3 = _interopRequireDefault(_trimResultTransformer2);

var _stripIndentTransformer2 = require('./stripIndentTransformer');

var _stripIndentTransformer3 = _interopRequireDefault(_stripIndentTransformer2);

var _replaceResultTransformer2 = require('./replaceResultTransformer');

var _replaceResultTransformer3 = _interopRequireDefault(_replaceResultTransformer2);

var _replaceSubstitutionTransformer2 = require('./replaceSubstitutionTransformer');

var _replaceSubstitutionTransformer3 = _interopRequireDefault(_replaceSubstitutionTransformer2);

var _inlineArrayTransformer2 = require('./inlineArrayTransformer');

var _inlineArrayTransformer3 = _interopRequireDefault(_inlineArrayTransformer2);

var _splitStringTransformer2 = require('./splitStringTransformer');

var _splitStringTransformer3 = _interopRequireDefault(_splitStringTransformer2);

var _removeNonPrintingValuesTransformer2 = require('./removeNonPrintingValuesTransformer');

var _removeNonPrintingValuesTransformer3 = _interopRequireDefault(_removeNonPrintingValuesTransformer2);

var _commaLists2 = require('./commaLists');

var _commaLists3 = _interopRequireDefault(_commaLists2);

var _commaListsAnd2 = require('./commaListsAnd');

var _commaListsAnd3 = _interopRequireDefault(_commaListsAnd2);

var _commaListsOr2 = require('./commaListsOr');

var _commaListsOr3 = _interopRequireDefault(_commaListsOr2);

var _html2 = require('./html');

var _html3 = _interopRequireDefault(_html2);

var _codeBlock2 = require('./codeBlock');

var _codeBlock3 = _interopRequireDefault(_codeBlock2);

var _source2 = require('./source');

var _source3 = _interopRequireDefault(_source2);

var _safeHtml2 = require('./safeHtml');

var _safeHtml3 = _interopRequireDefault(_safeHtml2);

var _oneLine2 = require('./oneLine');

var _oneLine3 = _interopRequireDefault(_oneLine2);

var _oneLineTrim2 = require('./oneLineTrim');

var _oneLineTrim3 = _interopRequireDefault(_oneLineTrim2);

var _oneLineCommaLists2 = require('./oneLineCommaLists');

var _oneLineCommaLists3 = _interopRequireDefault(_oneLineCommaLists2);

var _oneLineCommaListsOr2 = require('./oneLineCommaListsOr');

var _oneLineCommaListsOr3 = _interopRequireDefault(_oneLineCommaListsOr2);

var _oneLineCommaListsAnd2 = require('./oneLineCommaListsAnd');

var _oneLineCommaListsAnd3 = _interopRequireDefault(_oneLineCommaListsAnd2);

var _inlineLists2 = require('./inlineLists');

var _inlineLists3 = _interopRequireDefault(_inlineLists2);

var _oneLineInlineLists2 = require('./oneLineInlineLists');

var _oneLineInlineLists3 = _interopRequireDefault(_oneLineInlineLists2);

var _stripIndent2 = require('./stripIndent');

var _stripIndent3 = _interopRequireDefault(_stripIndent2);

var _stripIndents2 = require('./stripIndents');

var _stripIndents3 = _interopRequireDefault(_stripIndents2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TemplateTag = _TemplateTag3.default;

// transformers

exports.trimResultTransformer = _trimResultTransformer3.default;
exports.stripIndentTransformer = _stripIndentTransformer3.default;
exports.replaceResultTransformer = _replaceResultTransformer3.default;
exports.replaceSubstitutionTransformer = _replaceSubstitutionTransformer3.default;
exports.inlineArrayTransformer = _inlineArrayTransformer3.default;
exports.splitStringTransformer = _splitStringTransformer3.default;
exports.removeNonPrintingValuesTransformer = _removeNonPrintingValuesTransformer3.default;

// tags

exports.commaLists = _commaLists3.default;
exports.commaListsAnd = _commaListsAnd3.default;
exports.commaListsOr = _commaListsOr3.default;
exports.html = _html3.default;
exports.codeBlock = _codeBlock3.default;
exports.source = _source3.default;
exports.safeHtml = _safeHtml3.default;
exports.oneLine = _oneLine3.default;
exports.oneLineTrim = _oneLineTrim3.default;
exports.oneLineCommaLists = _oneLineCommaLists3.default;
exports.oneLineCommaListsOr = _oneLineCommaListsOr3.default;
exports.oneLineCommaListsAnd = _oneLineCommaListsAnd3.default;
exports.inlineLists = _inlineLists3.default;
exports.oneLineInlineLists = _oneLineInlineLists3.default;
exports.stripIndent = _stripIndent3.default;
exports.stripIndents = _stripIndents3.default;

},{"./TemplateTag":13,"./codeBlock":14,"./commaLists":16,"./commaListsAnd":18,"./commaListsOr":20,"./html":22,"./inlineArrayTransformer":24,"./inlineLists":26,"./oneLine":28,"./oneLineCommaLists":30,"./oneLineCommaListsAnd":32,"./oneLineCommaListsOr":34,"./oneLineInlineLists":36,"./oneLineTrim":38,"./removeNonPrintingValuesTransformer":40,"./replaceResultTransformer":42,"./replaceSubstitutionTransformer":44,"./safeHtml":46,"./source":48,"./splitStringTransformer":49,"./stripIndent":51,"./stripIndentTransformer":53,"./stripIndents":55,"./trimResultTransformer":57}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _inlineArrayTransformer = require('./inlineArrayTransformer');

var _inlineArrayTransformer2 = _interopRequireDefault(_inlineArrayTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _inlineArrayTransformer2.default;
module.exports = exports['default'];

},{"./inlineArrayTransformer":25}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaults = {
  separator: '',
  conjunction: '',
  serial: false

  /**
   * Converts an array substitution to a string containing a list
   * @param  {String} [opts.separator = ''] - the character that separates each item
   * @param  {String} [opts.conjunction = '']  - replace the last separator with this
   * @param  {Boolean} [opts.serial = false] - include the separator before the conjunction? (Oxford comma use-case)
   *
   * @return {Object}                     - a TemplateTag transformer
   */
};var inlineArrayTransformer = function inlineArrayTransformer() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      // only operate on arrays
      if (Array.isArray(substitution)) {
        var arrayLength = substitution.length;
        var separator = opts.separator;
        var conjunction = opts.conjunction;
        var serial = opts.serial;
        // join each item in the array into a string where each item is separated by separator
        // be sure to maintain indentation
        var indent = resultSoFar.match(/(\n?[^\S\n]+)$/);
        if (indent) {
          substitution = substitution.join(separator + indent[1]);
        } else {
          substitution = substitution.join(separator + ' ');
        }
        // if conjunction is set, replace the last separator with conjunction, but only if there is more than one substitution
        if (conjunction && arrayLength > 1) {
          var separatorIndex = substitution.lastIndexOf(separator);
          substitution = substitution.slice(0, separatorIndex) + (serial ? separator : '') + ' ' + conjunction + substitution.slice(separatorIndex + 1);
        }
      }
      return substitution;
    }
  };
};

exports.default = inlineArrayTransformer;
module.exports = exports['default'];

},{}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _inlineLists = require('./inlineLists');

var _inlineLists2 = _interopRequireDefault(_inlineLists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _inlineLists2.default;
module.exports = exports['default'];

},{"./inlineLists":27}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TemplateTag = require('../TemplateTag');

var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

var _stripIndentTransformer = require('../stripIndentTransformer');

var _stripIndentTransformer2 = _interopRequireDefault(_stripIndentTransformer);

var _inlineArrayTransformer = require('../inlineArrayTransformer');

var _inlineArrayTransformer2 = _interopRequireDefault(_inlineArrayTransformer);

var _trimResultTransformer = require('../trimResultTransformer');

var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inlineLists = new _TemplateTag2.default(_inlineArrayTransformer2.default, _stripIndentTransformer2.default, _trimResultTransformer2.default);

exports.default = inlineLists;
module.exports = exports['default'];

},{"../TemplateTag":13,"../inlineArrayTransformer":24,"../stripIndentTransformer":53,"../trimResultTransformer":57}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _oneLine = require('./oneLine');

var _oneLine2 = _interopRequireDefault(_oneLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _oneLine2.default;
module.exports = exports['default'];

},{"./oneLine":29}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TemplateTag = require('../TemplateTag');

var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

var _trimResultTransformer = require('../trimResultTransformer');

var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

var _replaceResultTransformer = require('../replaceResultTransformer');

var _replaceResultTransformer2 = _interopRequireDefault(_replaceResultTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneLine = new _TemplateTag2.default((0, _replaceResultTransformer2.default)(/(?:\n(?:\s*))+/g, ' '), _trimResultTransformer2.default);

exports.default = oneLine;
module.exports = exports['default'];

},{"../TemplateTag":13,"../replaceResultTransformer":42,"../trimResultTransformer":57}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _oneLineCommaLists = require('./oneLineCommaLists');

var _oneLineCommaLists2 = _interopRequireDefault(_oneLineCommaLists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _oneLineCommaLists2.default;
module.exports = exports['default'];

},{"./oneLineCommaLists":31}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TemplateTag = require('../TemplateTag');

var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

var _inlineArrayTransformer = require('../inlineArrayTransformer');

var _inlineArrayTransformer2 = _interopRequireDefault(_inlineArrayTransformer);

var _trimResultTransformer = require('../trimResultTransformer');

var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

var _replaceResultTransformer = require('../replaceResultTransformer');

var _replaceResultTransformer2 = _interopRequireDefault(_replaceResultTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneLineCommaLists = new _TemplateTag2.default((0, _inlineArrayTransformer2.default)({ separator: ',' }), (0, _replaceResultTransformer2.default)(/(?:\s+)/g, ' '), _trimResultTransformer2.default);

exports.default = oneLineCommaLists;
module.exports = exports['default'];

},{"../TemplateTag":13,"../inlineArrayTransformer":24,"../replaceResultTransformer":42,"../trimResultTransformer":57}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _oneLineCommaListsAnd = require('./oneLineCommaListsAnd');

var _oneLineCommaListsAnd2 = _interopRequireDefault(_oneLineCommaListsAnd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _oneLineCommaListsAnd2.default;
module.exports = exports['default'];

},{"./oneLineCommaListsAnd":33}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TemplateTag = require('../TemplateTag');

var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

var _inlineArrayTransformer = require('../inlineArrayTransformer');

var _inlineArrayTransformer2 = _interopRequireDefault(_inlineArrayTransformer);

var _trimResultTransformer = require('../trimResultTransformer');

var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

var _replaceResultTransformer = require('../replaceResultTransformer');

var _replaceResultTransformer2 = _interopRequireDefault(_replaceResultTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneLineCommaListsAnd = new _TemplateTag2.default((0, _inlineArrayTransformer2.default)({ separator: ',', conjunction: 'and' }), (0, _replaceResultTransformer2.default)(/(?:\s+)/g, ' '), _trimResultTransformer2.default);

exports.default = oneLineCommaListsAnd;
module.exports = exports['default'];

},{"../TemplateTag":13,"../inlineArrayTransformer":24,"../replaceResultTransformer":42,"../trimResultTransformer":57}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _oneLineCommaListsOr = require('./oneLineCommaListsOr');

var _oneLineCommaListsOr2 = _interopRequireDefault(_oneLineCommaListsOr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _oneLineCommaListsOr2.default;
module.exports = exports['default'];

},{"./oneLineCommaListsOr":35}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TemplateTag = require('../TemplateTag');

var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

var _inlineArrayTransformer = require('../inlineArrayTransformer');

var _inlineArrayTransformer2 = _interopRequireDefault(_inlineArrayTransformer);

var _trimResultTransformer = require('../trimResultTransformer');

var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

var _replaceResultTransformer = require('../replaceResultTransformer');

var _replaceResultTransformer2 = _interopRequireDefault(_replaceResultTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneLineCommaListsOr = new _TemplateTag2.default((0, _inlineArrayTransformer2.default)({ separator: ',', conjunction: 'or' }), (0, _replaceResultTransformer2.default)(/(?:\s+)/g, ' '), _trimResultTransformer2.default);

exports.default = oneLineCommaListsOr;
module.exports = exports['default'];

},{"../TemplateTag":13,"../inlineArrayTransformer":24,"../replaceResultTransformer":42,"../trimResultTransformer":57}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _oneLineInlineLists = require('./oneLineInlineLists');

var _oneLineInlineLists2 = _interopRequireDefault(_oneLineInlineLists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _oneLineInlineLists2.default;
module.exports = exports['default'];

},{"./oneLineInlineLists":37}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TemplateTag = require('../TemplateTag');

var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

var _inlineArrayTransformer = require('../inlineArrayTransformer');

var _inlineArrayTransformer2 = _interopRequireDefault(_inlineArrayTransformer);

var _trimResultTransformer = require('../trimResultTransformer');

var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

var _replaceResultTransformer = require('../replaceResultTransformer');

var _replaceResultTransformer2 = _interopRequireDefault(_replaceResultTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneLineInlineLists = new _TemplateTag2.default(_inlineArrayTransformer2.default, (0, _replaceResultTransformer2.default)(/(?:\s+)/g, ' '), _trimResultTransformer2.default);

exports.default = oneLineInlineLists;
module.exports = exports['default'];

},{"../TemplateTag":13,"../inlineArrayTransformer":24,"../replaceResultTransformer":42,"../trimResultTransformer":57}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _oneLineTrim = require('./oneLineTrim');

var _oneLineTrim2 = _interopRequireDefault(_oneLineTrim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _oneLineTrim2.default;
module.exports = exports['default'];

},{"./oneLineTrim":39}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TemplateTag = require('../TemplateTag');

var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

var _trimResultTransformer = require('../trimResultTransformer');

var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

var _replaceResultTransformer = require('../replaceResultTransformer');

var _replaceResultTransformer2 = _interopRequireDefault(_replaceResultTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneLineTrim = new _TemplateTag2.default((0, _replaceResultTransformer2.default)(/(?:\n\s*)/g, ''), _trimResultTransformer2.default);

exports.default = oneLineTrim;
module.exports = exports['default'];

},{"../TemplateTag":13,"../replaceResultTransformer":42,"../trimResultTransformer":57}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _removeNonPrintingValuesTransformer = require('./removeNonPrintingValuesTransformer');

var _removeNonPrintingValuesTransformer2 = _interopRequireDefault(_removeNonPrintingValuesTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _removeNonPrintingValuesTransformer2.default;
module.exports = exports['default'];

},{"./removeNonPrintingValuesTransformer":41}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNan = require('babel-runtime/core-js/number/is-nan');

var _isNan2 = _interopRequireDefault(_isNan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isValidValue = function isValidValue(x) {
  return x != null && !(0, _isNan2.default)(x) && typeof x !== 'boolean';
};

var removeNonPrintingValuesTransformer = function removeNonPrintingValuesTransformer() {
  return {
    onSubstitution: function onSubstitution(substitution) {
      if (Array.isArray(substitution)) {
        return substitution.filter(isValidValue);
      }
      if (isValidValue(substitution)) {
        return substitution;
      }
      return '';
    }
  };
};

exports.default = removeNonPrintingValuesTransformer;
module.exports = exports['default'];

},{"babel-runtime/core-js/number/is-nan":4}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _replaceResultTransformer = require('./replaceResultTransformer');

var _replaceResultTransformer2 = _interopRequireDefault(_replaceResultTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _replaceResultTransformer2.default;
module.exports = exports['default'];

},{"./replaceResultTransformer":43}],43:[function(require,module,exports){
'use strict';

/**
 * Replaces tabs, newlines and spaces with the chosen value when they occur in sequences
 * @param  {(String|RegExp)} replaceWhat - the value or pattern that should be replaced
 * @param  {*}               replaceWith - the replacement value
 * @return {Object}                      - a TemplateTag transformer
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var replaceResultTransformer = function replaceResultTransformer(replaceWhat, replaceWith) {
  return {
    onEndResult: function onEndResult(endResult) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceResultTransformer requires at least 2 arguments.');
      }
      return endResult.replace(replaceWhat, replaceWith);
    }
  };
};

exports.default = replaceResultTransformer;
module.exports = exports['default'];

},{}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _replaceSubstitutionTransformer = require('./replaceSubstitutionTransformer');

var _replaceSubstitutionTransformer2 = _interopRequireDefault(_replaceSubstitutionTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _replaceSubstitutionTransformer2.default;
module.exports = exports['default'];

},{"./replaceSubstitutionTransformer":45}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var replaceSubstitutionTransformer = function replaceSubstitutionTransformer(replaceWhat, replaceWith) {
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceSubstitutionTransformer requires at least 2 arguments.');
      }

      // Do not touch if null or undefined
      if (substitution == null) {
        return substitution;
      } else {
        return substitution.toString().replace(replaceWhat, replaceWith);
      }
    }
  };
};

exports.default = replaceSubstitutionTransformer;
module.exports = exports['default'];

},{}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _safeHtml = require('./safeHtml');

var _safeHtml2 = _interopRequireDefault(_safeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _safeHtml2.default;
module.exports = exports['default'];

},{"./safeHtml":47}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TemplateTag = require('../TemplateTag');

var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

var _stripIndentTransformer = require('../stripIndentTransformer');

var _stripIndentTransformer2 = _interopRequireDefault(_stripIndentTransformer);

var _inlineArrayTransformer = require('../inlineArrayTransformer');

var _inlineArrayTransformer2 = _interopRequireDefault(_inlineArrayTransformer);

var _trimResultTransformer = require('../trimResultTransformer');

var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

var _splitStringTransformer = require('../splitStringTransformer');

var _splitStringTransformer2 = _interopRequireDefault(_splitStringTransformer);

var _replaceSubstitutionTransformer = require('../replaceSubstitutionTransformer');

var _replaceSubstitutionTransformer2 = _interopRequireDefault(_replaceSubstitutionTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var safeHtml = new _TemplateTag2.default((0, _splitStringTransformer2.default)('\n'), _inlineArrayTransformer2.default, _stripIndentTransformer2.default, _trimResultTransformer2.default, (0, _replaceSubstitutionTransformer2.default)(/&/g, '&amp;'), (0, _replaceSubstitutionTransformer2.default)(/</g, '&lt;'), (0, _replaceSubstitutionTransformer2.default)(/>/g, '&gt;'), (0, _replaceSubstitutionTransformer2.default)(/"/g, '&quot;'), (0, _replaceSubstitutionTransformer2.default)(/'/g, '&#x27;'), (0, _replaceSubstitutionTransformer2.default)(/`/g, '&#x60;'));

exports.default = safeHtml;
module.exports = exports['default'];

},{"../TemplateTag":13,"../inlineArrayTransformer":24,"../replaceSubstitutionTransformer":44,"../splitStringTransformer":49,"../stripIndentTransformer":53,"../trimResultTransformer":57}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _html = require('../html');

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _html2.default;
module.exports = exports['default'];

},{"../html":22}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _splitStringTransformer = require('./splitStringTransformer');

var _splitStringTransformer2 = _interopRequireDefault(_splitStringTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _splitStringTransformer2.default;
module.exports = exports['default'];

},{"./splitStringTransformer":50}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var splitStringTransformer = function splitStringTransformer(splitBy) {
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      if (splitBy != null && typeof splitBy === 'string') {
        if (typeof substitution === 'string' && substitution.includes(splitBy)) {
          substitution = substitution.split(splitBy);
        }
      } else {
        throw new Error('You need to specify a string character to split by.');
      }
      return substitution;
    }
  };
};

exports.default = splitStringTransformer;
module.exports = exports['default'];

},{}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stripIndent = require('./stripIndent');

var _stripIndent2 = _interopRequireDefault(_stripIndent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _stripIndent2.default;
module.exports = exports['default'];

},{"./stripIndent":52}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TemplateTag = require('../TemplateTag');

var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

var _stripIndentTransformer = require('../stripIndentTransformer');

var _stripIndentTransformer2 = _interopRequireDefault(_stripIndentTransformer);

var _trimResultTransformer = require('../trimResultTransformer');

var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stripIndent = new _TemplateTag2.default(_stripIndentTransformer2.default, _trimResultTransformer2.default);

exports.default = stripIndent;
module.exports = exports['default'];

},{"../TemplateTag":13,"../stripIndentTransformer":53,"../trimResultTransformer":57}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stripIndentTransformer = require('./stripIndentTransformer');

var _stripIndentTransformer2 = _interopRequireDefault(_stripIndentTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _stripIndentTransformer2.default;
module.exports = exports['default'];

},{"./stripIndentTransformer":54}],54:[function(require,module,exports){
'use strict';

/**
 * strips indentation from a template literal
 * @param  {String} type = 'initial' - whether to remove all indentation or just leading indentation. can be 'all' or 'initial'
 * @return {Object}                  - a TemplateTag transformer
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stripIndentTransformer = function stripIndentTransformer() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'initial';
  return {
    onEndResult: function onEndResult(endResult) {
      if (type === 'initial') {
        // remove the shortest leading indentation from each line
        var match = endResult.match(/^[ \t]*(?=\S)/gm);
        // return early if there's nothing to strip
        if (match === null) {
          return endResult;
        }
        var indent = Math.min.apply(Math, (0, _toConsumableArray3.default)(match.map(function (el) {
          return el.length;
        })));
        var regexp = new RegExp('^[ \\t]{' + indent + '}', 'gm');
        endResult = indent > 0 ? endResult.replace(regexp, '') : endResult;
      } else if (type === 'all') {
        // remove all indentation from each line
        endResult = endResult.replace(/(?:\n[^\S\n]*)/g, '\n');
      } else {
        throw new Error('Unknown type: ' + type);
      }
      return endResult;
    }
  };
};

exports.default = stripIndentTransformer;
module.exports = exports['default'];

},{"babel-runtime/helpers/toConsumableArray":11}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stripIndents = require('./stripIndents');

var _stripIndents2 = _interopRequireDefault(_stripIndents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _stripIndents2.default;
module.exports = exports['default'];

},{"./stripIndents":56}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TemplateTag = require('../TemplateTag');

var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

var _stripIndentTransformer = require('../stripIndentTransformer');

var _stripIndentTransformer2 = _interopRequireDefault(_stripIndentTransformer);

var _trimResultTransformer = require('../trimResultTransformer');

var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stripIndents = new _TemplateTag2.default((0, _stripIndentTransformer2.default)('all'), _trimResultTransformer2.default);

exports.default = stripIndents;
module.exports = exports['default'];

},{"../TemplateTag":13,"../stripIndentTransformer":53,"../trimResultTransformer":57}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _trimResultTransformer = require('./trimResultTransformer');

var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _trimResultTransformer2.default;
module.exports = exports['default'];

},{"./trimResultTransformer":58}],58:[function(require,module,exports){
'use strict';

/**
 * TemplateTag transformer that trims whitespace on the end result of a tagged template
 * @param  {String} side = '' - The side of the string to trim. Can be 'start' or 'end' (alternatively 'left' or 'right')
 * @return {Object}           - a TemplateTag transformer
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var trimResultTransformer = function trimResultTransformer() {
  var side = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    onEndResult: function onEndResult(endResult) {
      if (side === '') {
        return endResult.trim();
      }

      side = side.toLowerCase();

      if (side === 'start' || side === 'left') {
        return endResult.replace(/^\s*/, '');
      }

      if (side === 'end' || side === 'right') {
        return endResult.replace(/\s*$/, '');
      }

      throw new Error('Side not supported: ' + side);
    }
  };
};

exports.default = trimResultTransformer;
module.exports = exports['default'];

},{}],59:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;

},{"../../modules/_core":69,"../../modules/es6.array.from":115,"../../modules/es6.string.iterator":120}],60:[function(require,module,exports){
require('../../modules/es6.number.is-nan');
module.exports = require('../../modules/_core').Number.isNaN;

},{"../../modules/_core":69,"../../modules/es6.number.is-nan":116}],61:[function(require,module,exports){
require('../../modules/es6.object.define-properties');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};

},{"../../modules/_core":69,"../../modules/es6.object.define-properties":117}],62:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":69,"../../modules/es6.object.define-property":118}],63:[function(require,module,exports){
require('../../modules/es6.object.freeze');
module.exports = require('../../modules/_core').Object.freeze;

},{"../../modules/_core":69,"../../modules/es6.object.freeze":119}],64:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],65:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":85}],66:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":106,"./_to-iobject":108,"./_to-length":109}],67:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":68,"./_wks":113}],68:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],69:[function(require,module,exports){
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],70:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":94,"./_property-desc":100}],71:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":64}],72:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],73:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":77}],74:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":78,"./_is-object":85}],75:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],76:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":69,"./_ctx":71,"./_global":78,"./_hide":80}],77:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],78:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],79:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],80:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":73,"./_object-dp":94,"./_property-desc":100}],81:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":78}],82:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":73,"./_dom-create":74,"./_fails":77}],83:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":68}],84:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":90,"./_wks":113}],85:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],86:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":65}],87:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":80,"./_object-create":93,"./_property-desc":100,"./_set-to-string-tag":102,"./_wks":113}],88:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var has = require('./_has');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":76,"./_has":79,"./_hide":80,"./_iter-create":87,"./_iterators":90,"./_library":91,"./_object-gpo":96,"./_redefine":101,"./_set-to-string-tag":102,"./_wks":113}],89:[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":113}],90:[function(require,module,exports){
module.exports = {};

},{}],91:[function(require,module,exports){
module.exports = true;

},{}],92:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":77,"./_has":79,"./_is-object":85,"./_object-dp":94,"./_uid":112}],93:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":65,"./_dom-create":74,"./_enum-bug-keys":75,"./_html":81,"./_object-dps":95,"./_shared-key":103}],94:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":65,"./_descriptors":73,"./_ie8-dom-define":82,"./_to-primitive":111}],95:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":65,"./_descriptors":73,"./_object-dp":94,"./_object-keys":98}],96:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":79,"./_shared-key":103,"./_to-object":110}],97:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":66,"./_has":79,"./_shared-key":103,"./_to-iobject":108}],98:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":75,"./_object-keys-internal":97}],99:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":69,"./_export":76,"./_fails":77}],100:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],101:[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":80}],102:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":79,"./_object-dp":94,"./_wks":113}],103:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":104,"./_uid":112}],104:[function(require,module,exports){
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

},{"./_global":78}],105:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":72,"./_to-integer":107}],106:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":107}],107:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],108:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":72,"./_iobject":83}],109:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":107}],110:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":72}],111:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":85}],112:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],113:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":78,"./_shared":104,"./_uid":112}],114:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":67,"./_core":69,"./_iterators":90,"./_wks":113}],115:[function(require,module,exports){
'use strict';
var ctx = require('./_ctx');
var $export = require('./_export');
var toObject = require('./_to-object');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var toLength = require('./_to-length');
var createProperty = require('./_create-property');
var getIterFn = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":70,"./_ctx":71,"./_export":76,"./_is-array-iter":84,"./_iter-call":86,"./_iter-detect":89,"./_to-length":109,"./_to-object":110,"./core.get-iterator-method":114}],116:[function(require,module,exports){
// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

},{"./_export":76}],117:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperties: require('./_object-dps') });

},{"./_descriptors":73,"./_export":76,"./_object-dps":95}],118:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":73,"./_export":76,"./_object-dp":94}],119:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

},{"./_is-object":85,"./_meta":92,"./_object-sap":99}],120:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":88,"./_string-at":105}],121:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.dlv=n()}(this,function(){function e(e,n,t,o){for(o=0,n=n.split?n.split("."):n;e&&o<n.length;)e=e[n[o++]];return void 0===e?t:e}return e});
},{}],122:[function(require,module,exports){
'use strict';

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};

},{}],123:[function(require,module,exports){
'use strict';
var ansiRegex = require('ansi-regex');
var re = new RegExp(ansiRegex().source); // remove the `g` flag
module.exports = re.test.bind(re);

},{"ansi-regex":1}],124:[function(require,module,exports){
'use strict';
module.exports = (str, count, opts) => {
	// Support older versions: use the third parameter as options.indent
	// TODO: Remove the workaround in the next major version
	const options = typeof opts === 'object' ? Object.assign({indent: ' '}, opts) : {indent: opts || ' '};
	count = count === undefined ? 1 : count;

	if (typeof str !== 'string') {
		throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof str}\``);
	}

	if (typeof count !== 'number') {
		throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof count}\``);
	}

	if (typeof options.indent !== 'string') {
		throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof options.indent}\``);
	}

	if (count === 0) {
		return str;
	}

	const regex = options.includeEmptyLines ? /^/mg : /^(?!\s*$)/mg;
	return str.replace(regex, options.indent.repeat(count));
}
;

},{}],125:[function(require,module,exports){
(function (global){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (typeof key == 'number' && value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  if (!(isArray(source) || isTypedArray(source))) {
    var props = baseKeysIn(source);
  }
  arrayEach(props || source, function(srcValue, key) {
    if (props) {
      key = srcValue;
      srcValue = source[key];
    }
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  });
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    newValue = srcValue;
    if (isArray(srcValue) || isTypedArray(srcValue)) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else {
        isCommon = false;
        newValue = baseClone(srcValue, true);
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        isCommon = false;
        newValue = baseClone(srcValue, true);
      }
      else {
        newValue = objValue;
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = merge;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],126:[function(require,module,exports){
(function (process){
'use strict';

var loglevel = require('loglevel');
var chalk = require('chalk');

var loggers = {};

module.exports = getLogger;

function getLogger() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$level = _ref.level,
      level = _ref$level === undefined ? getDefaultLevel() : _ref$level,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === undefined ? '' : _ref$prefix;

  if (loggers[prefix]) {
    return loggers[prefix];
  }
  var coloredPrefix = prefix ? `${chalk.dim(prefix)} ` : '';
  var levelPrefix = {
    TRACE: chalk.dim('[TRACE]'),
    DEBUG: chalk.cyan('[DEBUG]'),
    INFO: chalk.blue('[INFO]'),
    WARN: chalk.yellow('[WARN]'),
    ERROR: chalk.red('[ERROR]')
  };

  var logger = loglevel.getLogger(`${prefix}-logger`);

  // this is the plugin "api"
  var originalFactory = logger.methodFactory;
  logger.methodFactory = methodFactory;

  var originalSetLevel = logger.setLevel;
  logger.setLevel = setLevel;
  logger.setLevel(level);
  loggers[prefix] = logger;
  return logger;

  function methodFactory() {
    for (var _len = arguments.length, factoryArgs = Array(_len), _key = 0; _key < _len; _key++) {
      factoryArgs[_key] = arguments[_key];
    }

    var logLevel = factoryArgs[0];

    var rawMethod = originalFactory.apply(undefined, factoryArgs);
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return rawMethod.apply(undefined, [`${coloredPrefix}${levelPrefix[logLevel.toUpperCase()]}:`].concat(args));
    };
  }

  function setLevel(levelToSetTo) {
    var persist = false; // uses browser localStorage
    return originalSetLevel.call(logger, levelToSetTo, persist);
  }
}

function getDefaultLevel() {
  var logLevel = process.env.LOG_LEVEL;

  if (logLevel === 'undefined' || !logLevel) {
    return 'warn';
  }
  return logLevel;
}
}).call(this,require('_process'))
},{"_process":139,"chalk":127,"loglevel":129}],127:[function(require,module,exports){
(function (process){
'use strict';
var escapeStringRegexp = require('escape-string-regexp');
var ansiStyles = require('ansi-styles');
var stripAnsi = require('strip-ansi');
var hasAnsi = require('has-ansi');
var supportsColor = require('supports-color');
var defineProps = Object.defineProperties;
var isSimpleWindowsTerm = process.platform === 'win32' && !/^xterm/i.test(process.env.TERM);

function Chalk(options) {
	// detect mode if not set manually
	this.enabled = !options || options.enabled === undefined ? supportsColor : options.enabled;
}

// use bright blue on Windows as the normal blue color is illegible
if (isSimpleWindowsTerm) {
	ansiStyles.blue.open = '\u001b[94m';
}

var styles = (function () {
	var ret = {};

	Object.keys(ansiStyles).forEach(function (key) {
		ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');

		ret[key] = {
			get: function () {
				return build.call(this, this._styles.concat(key));
			}
		};
	});

	return ret;
})();

var proto = defineProps(function chalk() {}, styles);

function build(_styles) {
	var builder = function () {
		return applyStyle.apply(builder, arguments);
	};

	builder._styles = _styles;
	builder.enabled = this.enabled;
	// __proto__ is used because we must return a function, but there is
	// no way to create a function with a different prototype.
	/* eslint-disable no-proto */
	builder.__proto__ = proto;

	return builder;
}

function applyStyle() {
	// support varags, but simply cast to string in case there's only one arg
	var args = arguments;
	var argsLen = args.length;
	var str = argsLen !== 0 && String(arguments[0]);

	if (argsLen > 1) {
		// don't slice `arguments`, it prevents v8 optimizations
		for (var a = 1; a < argsLen; a++) {
			str += ' ' + args[a];
		}
	}

	if (!this.enabled || !str) {
		return str;
	}

	var nestedStyles = this._styles;
	var i = nestedStyles.length;

	// Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
	// see https://github.com/chalk/chalk/issues/58
	// If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.
	var originalDim = ansiStyles.dim.open;
	if (isSimpleWindowsTerm && (nestedStyles.indexOf('gray') !== -1 || nestedStyles.indexOf('grey') !== -1)) {
		ansiStyles.dim.open = '';
	}

	while (i--) {
		var code = ansiStyles[nestedStyles[i]];

		// Replace any instances already present with a re-opening code
		// otherwise only the part of the string until said closing code
		// will be colored, and the rest will simply be 'plain'.
		str = code.open + str.replace(code.closeRe, code.open) + code.close;
	}

	// Reset the original 'dim' if we changed it to work around the Windows dimmed gray issue.
	ansiStyles.dim.open = originalDim;

	return str;
}

function init() {
	var ret = {};

	Object.keys(styles).forEach(function (name) {
		ret[name] = {
			get: function () {
				return build.call(this, [name]);
			}
		};
	});

	return ret;
}

defineProps(Chalk.prototype, init());

module.exports = new Chalk();
module.exports.styles = ansiStyles;
module.exports.hasColor = hasAnsi;
module.exports.stripColor = stripAnsi;
module.exports.supportsColor = supportsColor;

}).call(this,require('_process'))
},{"_process":139,"ansi-styles":2,"escape-string-regexp":122,"has-ansi":123,"strip-ansi":128,"supports-color":134}],128:[function(require,module,exports){
'use strict';
var ansiRegex = require('ansi-regex')();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};

},{"ansi-regex":1}],129:[function(require,module,exports){
/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(definition);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = definition();
    } else {
        root.log = definition();
    }
}(this, function () {
    "use strict";

    // Slightly dubious tricks to cut down minimized file size
    var noop = function() {};
    var undefinedType = "undefined";

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    // Cross-browser bind equivalent that works at least back to IE6
    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // Build the best logging method possible for this env
    // Wherever possible we want to bind, not wrap, to preserve stack traces
    function realMethod(methodName) {
        if (methodName === 'debug') {
            methodName = 'log';
        }

        if (typeof console === undefinedType) {
            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    // These private functions always need `this` to be set properly

    function replaceLoggingMethods(level, loggerName) {
        /*jshint validthis:true */
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, loggerName);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this, level, loggerName);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, level, loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, defaultLevel, factory) {
      var self = this;
      var currentLevel;
      var storageKey = "loglevel";
      if (name) {
        storageKey += ":" + name;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          if (typeof window === undefinedType) return;

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          if (typeof window === undefinedType) return;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          // Fallback to cookies if local storage gives us nothing
          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var location = cookie.indexOf(
                      encodeURIComponent(storageKey) + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      /*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */

      self.name = name;

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          return currentLevel;
      };

      self.setLevel = function (level, persist) {
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              currentLevel = level;
              if (persist !== false) {  // defaults to true
                  persistLevelIfPossible(level);
              }
              replaceLoggingMethods.call(self, level, name);
              if (typeof console === undefinedType && level < self.levels.SILENT) {
                  return "No console available for logging";
              }
          } else {
              throw "log.setLevel() called with invalid level: " + level;
          }
      };

      self.setDefaultLevel = function (level) {
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      // Initialize with the right level
      var initialLevel = getPersistedLevel();
      if (initialLevel == null) {
          initialLevel = defaultLevel == null ? "WARN" : defaultLevel;
      }
      self.setLevel(initialLevel, false);
    }

    /*
     *
     * Top-level API
     *
     */

    var defaultLogger = new Logger();

    var _loggersByName = {};
    defaultLogger.getLogger = function getLogger(name) {
        if (typeof name !== "string" || name === "") {
          throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
          logger = _loggersByName[name] = new Logger(
            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
    };

    return defaultLogger;
}));

},{}],130:[function(require,module,exports){
(function (process,__filename){
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* eslint no-console:0, global-require:0, import/no-dynamic-require:0 */
/* eslint complexity: [1, 13] */


var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _requireRelative = require("require-relative");

var _requireRelative2 = _interopRequireDefault(_requireRelative);

var _prettyFormat = require("pretty-format");

var _prettyFormat2 = _interopRequireDefault(_prettyFormat);

var _commonTags = require("common-tags");

var _indentString = require("indent-string");

var _indentString2 = _interopRequireDefault(_indentString);

var _loglevelColoredLevelPrefix = require("loglevel-colored-level-prefix");

var _loglevelColoredLevelPrefix2 = _interopRequireDefault(_loglevelColoredLevelPrefix);

var _lodash = require("lodash.merge");

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _loglevelColoredLevelPrefix2.default)({ prefix: "prettier-eslint" });

// CommonJS + ES6 modules... is it worth it? Probably not...
module.exports = format;

/**
 * Formats the text with prettier and then eslint based on the given options
 * @param {String} options.filePath - the path of the file being formatted
 *  can be used in leu of `eslintConfig` (eslint will be used to find the
 *  relevant config for the file). Will also be used to load the `text` if
 *  `text` is not provided.
 * @param {String} options.text - the text (JavaScript code) to format
 * @param {String} options.eslintPath - the path to the eslint module to use.
 *   Will default to require.resolve('eslint')
 * @param {String} options.prettierPath - the path to the prettier module.
 *   Will default to require.resovlve('prettierPath')
 * @param {Object} options.eslintConfig - the config to use for formatting
 *  with ESLint.
 * @param {Object} options.prettierOptions - the options to pass for
 *  formatting with `prettier`. If not provided, prettier-eslint will attempt
 *  to create the options based on the eslintConfig
 * @param {Object} options.fallbackPrettierOptions - the options to pass for
 *  formatting with `prettier` if the given option is not inferrable from the
 *  eslintConfig.
 * @param {String} options.logLevel - the level for the logs
 *  (error, warn, info, debug, trace)
 * @param {Boolean} options.prettierLast - Run Prettier Last
 * @return {String} - the formatted string
 */
function format(options) {
  var _options$logLevel = options.logLevel,
      logLevel = _options$logLevel === undefined ? getDefaultLogLevel() : _options$logLevel;

  logger.setLevel(logLevel);
  logger.trace("called format with options:", (0, _prettyFormat2.default)(options));

  var filePath = options.filePath,
      _options$text = options.text,
      text = _options$text === undefined ? getTextFromFilePath(filePath) : _options$text,
      _options$eslintPath = options.eslintPath,
      eslintPath = _options$eslintPath === undefined ? getModulePath(filePath, "eslint") : _options$eslintPath,
      _options$prettierPath = options.prettierPath,
      prettierPath = _options$prettierPath === undefined ? getModulePath(filePath, "prettier") : _options$prettierPath,
      prettierLast = options.prettierLast,
      fallbackPrettierOptions = options.fallbackPrettierOptions;


  var eslintConfig = (0, _lodash2.default)({}, options.eslintConfig, getConfig(filePath, eslintPath));

  var prettierOptions = (0, _lodash2.default)({}, getPrettierConfig(filePath, prettierPath), options.prettierOptions);

  var formattingOptions = (0, _utils.getOptionsForFormatting)(eslintConfig, prettierOptions, fallbackPrettierOptions);

  logger.debug("inferred options:", (0, _prettyFormat2.default)({
    filePath,
    text,
    eslintPath,
    prettierPath,
    eslintConfig: formattingOptions.eslint,
    prettierOptions: formattingOptions.prettier,
    logLevel,
    prettierLast
  }));

  var isCss = /\.(css)$/.test(filePath);
  var isLess = /\.(less)$/.test(filePath);
  var isScss = /\.(scss)$/.test(filePath);
  var isTypeScript = /\.(ts|tsx)$/.test(filePath);
  var isGraphQL = /\.(graphql|gql)$/.test(filePath);
  var isJson = /\.json$/.test(filePath);

  if (isCss) {
    formattingOptions.prettier.parser = "css";
  } else if (isLess) {
    formattingOptions.prettier.parser = "less";
  } else if (isScss) {
    formattingOptions.prettier.parser = "scss";
  } else if (isTypeScript) {
    formattingOptions.prettier.parser = "typescript";
    // XXX: It seems babylon is getting a TypeScript plugin.
    // Should that be used instead?
    formattingOptions.eslint.parser = "typescript-eslint-parser";
  } else if (isGraphQL) {
    formattingOptions.prettier.parser = "graphql";
  } else if (isJson) {
    formattingOptions.prettier.parser = "json";
    formattingOptions.prettier.trailingComma = "none";
  }

  var prettify = createPrettify(formattingOptions.prettier, prettierPath);

  if (isCss || isLess || isScss || isGraphQL || isJson) {
    return prettify(text, filePath);
  }

  var eslintFix = createEslintFix(formattingOptions.eslint, eslintPath);

  if (prettierLast) {
    return prettify(eslintFix(text, filePath));
  }
  return eslintFix(prettify(text), filePath);
}

function createPrettify(formatOptions, prettierPath) {
  return function prettify(text) {
    logger.debug("calling prettier on text");
    logger.trace(_commonTags.stripIndent`
      prettier input:

      ${(0, _indentString2.default)(text, 2)}
    `);
    var prettier = requireModule(prettierPath, "prettier");
    try {
      logger.trace(`calling prettier.format with the text and prettierOptions`);
      var output = prettier.format(text, formatOptions);
      logger.trace("prettier: output === input", output === text);
      logger.trace(_commonTags.stripIndent`
        prettier output:

        ${(0, _indentString2.default)(output, 2)}
      `);
      return output;
    } catch (error) {
      logger.error("prettier formatting failed due to a prettier error");
      throw error;
    }
  };
}

function createEslintFix(eslintConfig, eslintPath) {
  return function eslintFix(text, filePath) {
    var eslint = getESLintCLIEngine(eslintPath, eslintConfig);
    try {
      logger.trace(`calling eslint.executeOnText with the text`);
      var report = eslint.executeOnText(text, filePath, true);
      logger.trace(`executeOnText returned the following report:`, (0, _prettyFormat2.default)(report));
      // default the output to text because if there's nothing
      // to fix, eslint doesn't provide `output`

      var _report$results = _slicedToArray(report.results, 1),
          _report$results$0$out = _report$results[0].output,
          output = _report$results$0$out === undefined ? text : _report$results$0$out;

      logger.trace("eslint --fix: output === input", output === text);
      // NOTE: We're ignoring linting errors/warnings here and
      // defaulting to the given text if there are any
      // because all we're trying to do is fix what we can.
      // We don't care about what we can't
      logger.trace(_commonTags.stripIndent`
        eslint --fix output:

        ${(0, _indentString2.default)(output, 2)}
      `);
      return output;
    } catch (error) {
      logger.error("eslint fix failed due to an eslint error");
      throw error;
    }
  };
}

function getTextFromFilePath(filePath) {
  try {
    logger.trace(_commonTags.oneLine`
        attempting fs.readFileSync to get
        the text for file at "${filePath}"
      `);
    return _fs2.default.readFileSync(filePath, "utf8");
  } catch (error) {
    logger.error(_commonTags.oneLine`
        failed to get the text to format
        from the given filePath: "${filePath}"
      `);
    throw error;
  }
}

function getConfig(filePath, eslintPath) {
  var eslintOptions = {};
  if (filePath) {
    eslintOptions.cwd = _path2.default.dirname(filePath);
  }
  logger.trace(_commonTags.oneLine`
      creating ESLint CLI Engine to get the config for
      "${filePath || process.cwd()}"
    `);
  var configFinder = getESLintCLIEngine(eslintPath, eslintOptions);
  try {
    logger.debug(`getting eslint config for file at "${filePath}"`);
    var config = configFinder.getConfigForFile(filePath);
    logger.trace(`eslint config for "${filePath}" received`, (0, _prettyFormat2.default)(config));
    return config;
  } catch (error) {
    // is this noisy? Try setting options.disableLog to false
    logger.debug("Unable to find config");
    console.log(error, error.stack)
    return { rules: {} };
  }
}

function getPrettierConfig(filePath, prettierPath) {
  var prettier = requireModule(prettierPath, "prettier");

  // NOTE: Backward-compatibility with old prettier versions (<1.7)
  //       that don't have ``resolveConfig.sync` method.
  return typeof prettier.resolveConfig.sync === "undefined" ? {} : prettier.resolveConfig.sync(filePath);
}

function requireModule(modulePath, name) {
  try {
    logger.trace(`requiring "${name}" module at "${modulePath}"`);
    return require(modulePath);
  } catch (error) {
    logger.error(_commonTags.oneLine`
      There was trouble getting "${name}".
      Is "${modulePath}" a correct path to the "${name}" module?
    `);
    throw error;
  }
}

function getModulePath() {
  var filePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __filename;
  var moduleName = arguments[1];

  try {
    return _requireRelative2.default.resolve(moduleName, filePath);
  } catch (error) {
    logger.debug(_commonTags.oneLine`
        There was a problem finding the ${moduleName}
        module. Using prettier-eslint's version.
      `, error.message, error.stack);
    return require.resolve(moduleName);
  }
}

function getESLintCLIEngine(eslintPath, eslintOptions) {
  var _requireModule = requireModule(eslintPath, "eslint"),
      CLIEngine = _requireModule.CLIEngine;

  try {
    return new CLIEngine(eslintOptions);
  } catch (error) {
    logger.error(`There was trouble creating the ESLint CLIEngine.`);
    throw error;
  }
}

function getDefaultLogLevel() {
  return process.env.LOG_LEVEL || "warn";
}
}).call(this,require('_process'),"/node_modules/prettier-eslint/dist/index.js")
},{"./utils":131,"_process":139,"common-tags":23,"fs":137,"indent-string":124,"lodash.merge":125,"loglevel-colored-level-prefix":126,"path":138,"pretty-format":132,"require-relative":133}],131:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptionsForFormatting = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _commonTags = require("common-tags");

var _dlv = require("dlv");

var _dlv2 = _interopRequireDefault(_dlv);

var _loglevelColoredLevelPrefix = require("loglevel-colored-level-prefix");

var _loglevelColoredLevelPrefix2 = _interopRequireDefault(_loglevelColoredLevelPrefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _loglevelColoredLevelPrefix2.default)({ prefix: "prettier-eslint" });
var RULE_DISABLED = {};
var RULE_NOT_CONFIGURED = "RULE_NOT_CONFIGURED";
var OPTION_GETTERS = {
  printWidth: {
    ruleValue: function ruleValue(rules) {
      return getRuleValue(rules, "max-len", "code");
    },
    ruleValueToPrettierOption: getPrintWidth
  },
  tabWidth: {
    ruleValue: function ruleValue(rules) {
      var value = getRuleValue(rules, "indent");
      if (value === "tab") {
        value = getRuleValue(rules, "max-len", "tabWidth");
      }
      return value;
    },
    ruleValueToPrettierOption: getTabWidth
  },
  parser: {
    ruleValue: function ruleValue() {
      return RULE_NOT_CONFIGURED;
    },
    ruleValueToPrettierOption: getParser
  },
  singleQuote: {
    ruleValue: function ruleValue(rules) {
      return getRuleValue(rules, "quotes");
    },
    ruleValueToPrettierOption: getSingleQuote
  },
  trailingComma: {
    ruleValue: function ruleValue(rules) {
      return getRuleValue(rules, "comma-dangle");
    },
    ruleValueToPrettierOption: getTrailingComma
  },
  bracketSpacing: {
    ruleValue: function ruleValue(rules) {
      return getRuleValue(rules, "object-curly-spacing");
    },
    ruleValueToPrettierOption: getBracketSpacing
  },
  semi: {
    ruleValue: function ruleValue(rules) {
      return getRuleValue(rules, "semi");
    },
    ruleValueToPrettierOption: getSemi
  },
  useTabs: {
    ruleValue: function ruleValue(rules) {
      return getRuleValue(rules, "indent");
    },
    ruleValueToPrettierOption: getUseTabs
  }
};

/* eslint import/prefer-default-export:0 */
exports.getOptionsForFormatting = getOptionsForFormatting;


function getOptionsForFormatting(eslintConfig) {
  var prettierOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackPrettierOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var eslint = getRelevantESLintConfig(eslintConfig);
  var prettier = getPrettierOptionsFromESLintRules(eslint, prettierOptions, fallbackPrettierOptions);
  return { eslint, prettier };
}

function getRelevantESLintConfig(eslintConfig) {
  var rules = eslintConfig.rules;
  // TODO: remove rules that are not fixable for perf
  // this will require we load the config for every rule...
  // not sure that'll be worth the effort
  // but we may be able to maintain a manual list of rules that
  // are definitely not fixable. Which is what we'll do for now...

  var rulesThatWillNeverBeFixable = [
  // TODO add more
  "valid-jsdoc", "global-require", "no-with"];

  logger.debug("reducing eslint rules down to relevant rules only");
  var relevantRules = Object.keys(rules).reduce(function (rulesAccumulator, ruleName) {
    if (rulesThatWillNeverBeFixable.indexOf(ruleName) === -1) {
      logger.trace(`adding to relevant rules:`, JSON.stringify({ [ruleName]: rules[ruleName] }));
      rulesAccumulator[ruleName] = rules[ruleName];
    } else {
      logger.trace(`omitting from relevant rules:`, JSON.stringify({ [ruleName]: rules[ruleName] }));
    }
    return rulesAccumulator;
  }, {});

  return _extends({
    // defaults
    useEslintrc: false
  }, eslintConfig, {
    // overrides
    rules: relevantRules,
    fix: true,
    globals: [] // must be an array for some reason :-/
  });
}

/**
 * This accepts an eslintConfig object and converts
 * it to the `prettier` options object
 */
function getPrettierOptionsFromESLintRules(eslintConfig, prettierOptions, fallbackPrettierOptions) {
  var rules = eslintConfig.rules;


  return Object.keys(OPTION_GETTERS).reduce(function (options, key) {
    return configureOptions(prettierOptions, fallbackPrettierOptions, key, options, rules);
  }, prettierOptions);
}

// If an ESLint rule that prettier can be configured with is enabled create a
// prettier configuration object that reflects the ESLint rule configuration.
function configureOptions(prettierOptions, fallbackPrettierOptions, key, options, rules) {
  var givenOption = prettierOptions[key];
  var optionIsGiven = givenOption !== undefined;

  if (optionIsGiven) {
    options[key] = givenOption;
  } else {
    var _OPTION_GETTERS$key = OPTION_GETTERS[key],
        ruleValue = _OPTION_GETTERS$key.ruleValue,
        ruleValueToPrettierOption = _OPTION_GETTERS$key.ruleValueToPrettierOption;

    var eslintRuleValue = ruleValue(rules);

    var option = ruleValueToPrettierOption(eslintRuleValue, fallbackPrettierOptions, rules);

    if (option !== undefined) {
      options[key] = option;
    }
  }

  return options;
}

function getPrintWidth(eslintValue, fallbacks) {
  return makePrettierOption("printWidth", eslintValue, fallbacks);
}

function getTabWidth(eslintValue, fallbacks) {
  return makePrettierOption("tabWidth", eslintValue, fallbacks);
}

function getParser(eslintValue, fallbacks) {
  // TODO: handle flow parser config
  return makePrettierOption("parser", eslintValue, fallbacks);
}

function getSingleQuote(eslintValue, fallbacks) {
  var prettierValue = void 0;

  if (eslintValue === "single") {
    prettierValue = true;
  } else if (eslintValue === "double") {
    prettierValue = false;
  } else if (eslintValue === "backtick") {
    prettierValue = false;
  } else {
    prettierValue = eslintValue;
  }

  return makePrettierOption("singleQuote", prettierValue, fallbacks);
}

function getTrailingComma(value, fallbacks, rules) {
  var prettierValue = void 0;
  var actualValue = rules["comma-dangle"];

  if (value === "never") {
    prettierValue = "none";
  } else if (typeof value === "string" && value.indexOf("always") === 0) {
    prettierValue = "es5";
  } else if (typeof actualValue === "object") {
    prettierValue = getValFromTrailingCommaConfig(actualValue);
  } else {
    prettierValue = RULE_NOT_CONFIGURED;
  }

  return makePrettierOption("trailingComma", prettierValue, fallbacks);
}

function getValFromTrailingCommaConfig(objectConfig) {
  var _objectConfig = _slicedToArray(objectConfig, 2),
      _objectConfig$ = _objectConfig[1],
      _objectConfig$$arrays = _objectConfig$.arrays,
      arrays = _objectConfig$$arrays === undefined ? "" : _objectConfig$$arrays,
      _objectConfig$$object = _objectConfig$.objects,
      objects = _objectConfig$$object === undefined ? "" : _objectConfig$$object,
      _objectConfig$$functi = _objectConfig$.functions,
      functions = _objectConfig$$functi === undefined ? "" : _objectConfig$$functi;

  var fns = isAlways(functions);
  var es5 = [arrays, objects].some(isAlways);

  if (fns) {
    return "all";
  } else if (es5) {
    return "es5";
  } else {
    return "none";
  }
}

function getBracketSpacing(eslintValue, fallbacks) {
  var prettierValue = void 0;

  if (eslintValue === "never") {
    prettierValue = false;
  } else if (eslintValue === "always") {
    prettierValue = true;
  } else {
    prettierValue = eslintValue;
  }

  return makePrettierOption("bracketSpacing", prettierValue, fallbacks);
}

function getSemi(eslintValue, fallbacks) {
  var prettierValue = void 0;

  if (eslintValue === "never") {
    prettierValue = false;
  } else if (eslintValue === "always") {
    prettierValue = true;
  } else {
    prettierValue = eslintValue;
  }

  return makePrettierOption("semi", prettierValue, fallbacks);
}

function getUseTabs(eslintValue, fallbacks) {
  var prettierValue = void 0;

  if (eslintValue === "tab") {
    prettierValue = true;
  } else {
    prettierValue = RULE_NOT_CONFIGURED;
  }

  return makePrettierOption("useTabs", prettierValue, fallbacks);
}

function extractRuleValue(objPath, name, value) {
  if (objPath) {
    logger.trace(_commonTags.oneLine`
        Getting the value from object configuration of ${name}.
        delving into ${JSON.stringify(value)} with path "${objPath}"
      `);

    return (0, _dlv2.default)(value, objPath, RULE_NOT_CONFIGURED);
  }

  logger.debug(_commonTags.oneLine`
      The ${name} rule is using an object configuration
      of ${JSON.stringify(value)} but prettier-eslint is
      not currently capable of getting the prettier value
      based on an object configuration for ${name}.
      Please file an issue (and make a pull request?)
    `);

  return undefined;
}

function getRuleValue(rules, name, objPath) {
  var ruleConfig = rules[name];

  if (Array.isArray(ruleConfig)) {
    var _ruleConfig = _slicedToArray(ruleConfig, 2),
        ruleSetting = _ruleConfig[0],
        value = _ruleConfig[1];

    // If `ruleSetting` is set to disable the ESLint rule don't use `value` as
    // it might be a value provided by an overriden config package e.g. airbnb
    // overriden by config-prettier. The airbnb values are provided even though
    // config-prettier disables the rule. Instead use fallback or prettier
    // default.


    if (ruleSetting === 0 || ruleSetting === "off") {
      return RULE_DISABLED;
    }

    if (typeof value === "object") {
      return extractRuleValue(objPath, name, value);
    } else {
      logger.trace(_commonTags.oneLine`
          The ${name} rule is configured with a
          non-object value of ${value}. Using that value.
        `);
      return value;
    }
  }

  return RULE_NOT_CONFIGURED;
}

function isAlways(val) {
  return val.indexOf("always") === 0;
}

function makePrettierOption(prettierRuleName, prettierRuleValue, fallbacks) {
  if (prettierRuleValue !== RULE_NOT_CONFIGURED && prettierRuleValue !== RULE_DISABLED && typeof prettierRuleValue !== "undefined") {
    return prettierRuleValue;
  }

  var fallback = fallbacks[prettierRuleName];
  if (typeof fallback !== "undefined") {
    logger.debug(_commonTags.oneLine`
        The ${prettierRuleName} rule is not configured,
        using provided fallback of ${fallback}
      `);
    return fallback;
  }

  logger.debug(_commonTags.oneLine`
      The ${prettierRuleName} rule is not configured,
      let prettier decide
    `);
  return undefined;
}
},{"common-tags":23,"dlv":121,"loglevel-colored-level-prefix":126}],132:[function(require,module,exports){
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var toString$2 = {}.toString;

var _cof = function (it) {
  return toString$2.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function (key) {
  return store[key] || (store[key] = {});
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document) && _isObject(document.createElement);
var _domCreate = function (it) {
  return is ? document.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.14 Object.keys(O)



_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

var keys$1 = _core.Object.keys;

var keys = createCommonjsModule(function (module) {
module.exports = { "default": keys$1, __esModule: true };
});

var _Object$keys = unwrapExports(keys);

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = true;

var _redefine = _hide;

var _iterators = {};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$1 = _global.document;
var _html = document$1 && document$1.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

'use strict';



var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

'use strict';









var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

'use strict';
var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var _addToUnscopables = function () { /* empty */ };

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

'use strict';





// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

_addToUnscopables('keys');
_addToUnscopables('values');
_addToUnscopables('entries');

var TO_STRING_TAG = _wks('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
  _iterators[NAME] = _iterators.Array;
}

var f$1 = _wks;

var _wksExt = {
	f: f$1
};

var iterator$2 = _wksExt.f('iterator');

var iterator = createCommonjsModule(function (module) {
module.exports = { "default": iterator$2, __esModule: true };
});

unwrapExports(iterator);

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});

var defineProperty = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$5
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN$1 = _objectGopn.f;
var toString$3 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$4 = function getOwnPropertyNames(it) {
  return windowNames && toString$3.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
	f: f$4
};

var gOPD$1 = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD$1(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$6
};

'use strict';
// ECMAScript 6 symbols shim





var META = _meta.KEY;


















var gOPD = _objectGopd.f;
var dP$1 = _objectDp.f;
var gOPN = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$1({}, 'a', {
    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto$1, key);
  if (protoDesc) delete ObjectProto$1[key];
  dP$1(it, key, D);
  if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
} : dP$1;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !_isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

_wksDefine('asyncIterator');

_wksDefine('observable');

var symbol$1 = _core.Symbol;

var symbol = createCommonjsModule(function (module) {
module.exports = { "default": symbol$1, __esModule: true };
});

var _Symbol = unwrapExports(symbol);

var _typeof_1 = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _iterator2 = _interopRequireDefault(iterator);



var _symbol2 = _interopRequireDefault(symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

var _typeof = unwrapExports(_typeof_1);

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

var $Object = _core.Object;
var defineProperty$2 = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

var defineProperty$1 = createCommonjsModule(function (module) {
module.exports = { "default": defineProperty$2, __esModule: true };
});

var _Object$defineProperty = unwrapExports(defineProperty$1);

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var ITERATOR$1 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$1]
    || it['@@iterator']
    || _iterators[_classof(it)];
};

var core_getIterator = _core.getIterator = function (it) {
  var iterFn = core_getIteratorMethod(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return _anObject(iterFn.call(it));
};

var getIterator$1 = core_getIterator;

var getIterator = createCommonjsModule(function (module) {
module.exports = { "default": getIterator$1, __esModule: true };
});

var _getIterator = unwrapExports(getIterator);

var _redefineAll = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else _hide(target, key, src[key]);
  } return target;
};

var _anInstance = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

// call something on iterator step with safe closing on error

var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$2 = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$2] === it);
};

var _forOf = createCommonjsModule(function (module) {
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
  var f = _ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = _iterCall(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

'use strict';




var SPECIES = _wks('species');

var _setSpecies = function (KEY) {
  var C = typeof _core[KEY] == 'function' ? _core[KEY] : _global[KEY];
  if (_descriptors && C && !C[SPECIES]) _objectDp.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

var _validateCollection = function (it, TYPE) {
  if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

'use strict';
var dP$2 = _objectDp.f;









var fastKey = _meta.fastKey;

var SIZE = _descriptors ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

var _collectionStrong = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      _anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = _objectCreate(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
    });
    _redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = _validateCollection(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        _validateCollection(this, NAME);
        var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(_validateCollection(this, NAME), key);
      }
    });
    if (_descriptors) dP$2(C.prototype, 'size', {
      get: function () {
        return _validateCollection(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    _iterDefine(C, NAME, function (iterated, kind) {
      this._t = _validateCollection(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return _iterStep(1);
      }
      // return step by kind
      if (kind == 'keys') return _iterStep(0, entry.k);
      if (kind == 'values') return _iterStep(0, entry.v);
      return _iterStep(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    _setSpecies(NAME);
  }
};

var SPECIES$1 = _wks('species');

var _arraySpeciesConstructor = function (original) {
  var C;
  if (_isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
    if (_isObject(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


var _arraySpeciesCreate = function (original, length) {
  return new (_arraySpeciesConstructor(original))(length);
};

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex





var _arrayMethods = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || _arraySpeciesCreate;
  return function ($this, callbackfn, that) {
    var O = _toObject($this);
    var self = _iobject(O);
    var f = _ctx(callbackfn, that, 3);
    var length = _toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

'use strict';










var dP$3 = _objectDp.f;
var each = _arrayMethods(0);


var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = _global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!_descriptors || typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    _redefineAll(C.prototype, methods);
    _meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      _anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) _forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) _hide(C.prototype, KEY, function (a, b) {
        _anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !_isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP$3(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  _setToStringTag(C, NAME);

  O[NAME] = C;
  _export(_export.G + _export.W + _export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

'use strict';


var MAP = 'Map';

// 23.1 Map Objects
var es6_map = _collection(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return _collectionStrong.def(_validateCollection(this, MAP), key === 0 ? 0 : key, value);
  }
}, _collectionStrong, true);

var _arrayFromIterable = function (iter, ITERATOR) {
  var result = [];
  _forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


var _collectionToJson = function (NAME) {
  return function toJSON() {
    if (_classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return _arrayFromIterable(this);
  };
};

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


_export(_export.P + _export.R, 'Map', { toJSON: _collectionToJson('Map') });

'use strict';
// https://tc39.github.io/proposal-setmap-offrom/


var _setCollectionOf = function (COLLECTION) {
  _export(_export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
_setCollectionOf('Map');

'use strict';
// https://tc39.github.io/proposal-setmap-offrom/





var _setCollectionFrom = function (COLLECTION) {
  _export(_export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    _aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) _aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = _ctx(mapFn, arguments[2], 2);
      _forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      _forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
_setCollectionFrom('Map');

var map$1 = _core.Map;

var map = createCommonjsModule(function (module) {
module.exports = { "default": map$1, __esModule: true };
});

var _Map = unwrapExports(map);

'use strict';

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var conversions = createCommonjsModule(function (module) {
/* MIT license */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in colorName) {
	if (colorName.hasOwnProperty(key)) {
		reverseKeywords[colorName[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var v;

	if (max === 0) {
		s = 0;
	} else {
		s = (delta / max * 1000) / 10;
	}

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	v = ((max / 255) * 1000) / 10;

	return [h, s, v];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in colorName) {
		if (colorName.hasOwnProperty(keyword)) {
			var value = colorName[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return colorName[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
});

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

// https://jsperf.com/object-keys-vs-for-in-with-closure/3
var models$1 = Object.keys(conversions);

function buildGraph() {
	var graph = {};

	for (var len = models$1.length, i = 0; i < len; i++) {
		graph[models$1[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;

'use strict';

var ansiStyles = createCommonjsModule(function (module) {
	'use strict';

	var wrapAnsi16 = function wrapAnsi16(fn, offset) {
		return function () {
			var code = fn.apply(colorConvert, arguments);
			return '\x1B[' + (code + offset) + 'm';
		};
	};

	var wrapAnsi256 = function wrapAnsi256(fn, offset) {
		return function () {
			var code = fn.apply(colorConvert, arguments);
			return '\x1B[' + (38 + offset) + ';5;' + code + 'm';
		};
	};

	var wrapAnsi16m = function wrapAnsi16m(fn, offset) {
		return function () {
			var rgb = fn.apply(colorConvert, arguments);
			return '\x1B[' + (38 + offset) + ';2;' + rgb[0] + ';' + rgb[1] + ';' + rgb[2] + 'm';
		};
	};

	function assembleStyles() {
		var codes = new _Map();
		var styles = {
			modifier: {
				reset: [0, 0],
				// 21 isn't widely supported and 22 does the same thing
				bold: [1, 22],
				dim: [2, 22],
				italic: [3, 23],
				underline: [4, 24],
				inverse: [7, 27],
				hidden: [8, 28],
				strikethrough: [9, 29]
			},
			color: {
				black: [30, 39],
				red: [31, 39],
				green: [32, 39],
				yellow: [33, 39],
				blue: [34, 39],
				magenta: [35, 39],
				cyan: [36, 39],
				white: [37, 39],
				gray: [90, 39],

				// Bright color
				redBright: [91, 39],
				greenBright: [92, 39],
				yellowBright: [93, 39],
				blueBright: [94, 39],
				magentaBright: [95, 39],
				cyanBright: [96, 39],
				whiteBright: [97, 39]
			},
			bgColor: {
				bgBlack: [40, 49],
				bgRed: [41, 49],
				bgGreen: [42, 49],
				bgYellow: [43, 49],
				bgBlue: [44, 49],
				bgMagenta: [45, 49],
				bgCyan: [46, 49],
				bgWhite: [47, 49],

				// Bright color
				bgBlackBright: [100, 49],
				bgRedBright: [101, 49],
				bgGreenBright: [102, 49],
				bgYellowBright: [103, 49],
				bgBlueBright: [104, 49],
				bgMagentaBright: [105, 49],
				bgCyanBright: [106, 49],
				bgWhiteBright: [107, 49]
			}
		};

		// Fix humans
		styles.color.grey = styles.color.gray;

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = _getIterator(_Object$keys(styles)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var groupName = _step.value;

				var group = styles[groupName];

				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = _getIterator(_Object$keys(group)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var styleName = _step3.value;

						var style = group[styleName];

						styles[styleName] = {
							open: '\x1B[' + style[0] + 'm',
							close: '\x1B[' + style[1] + 'm'
						};

						group[styleName] = styles[styleName];

						codes.set(style[0], style[1]);
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}

				_Object$defineProperty(styles, groupName, {
					value: group,
					enumerable: false
				});

				Object.defineProperty(styles, 'codes', {
					value: codes,
					enumerable: false
				});
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		var rgb2rgb = function rgb2rgb(r, g, b) {
			return [r, g, b];
		};

		styles.color.close = '\x1B[39m';
		styles.bgColor.close = '\x1B[49m';

		styles.color.ansi = {};
		styles.color.ansi256 = {};
		styles.color.ansi16m = {
			rgb: wrapAnsi16m(rgb2rgb, 0)
		};

		styles.bgColor.ansi = {};
		styles.bgColor.ansi256 = {};
		styles.bgColor.ansi16m = {
			rgb: wrapAnsi16m(rgb2rgb, 10)
		};

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = _getIterator(_Object$keys(colorConvert)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var key = _step2.value;

				if (_typeof(colorConvert[key]) !== 'object') {
					continue;
				}

				var suite = colorConvert[key];

				if ('ansi16' in suite) {
					styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
					styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
				}

				if ('ansi256' in suite) {
					styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
					styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
				}

				if ('rgb' in suite) {
					styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
					styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
				}
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		return styles;
	}

	// Make the export immutable
	Object.defineProperty(module, 'exports', {
		enumerable: true,
		get: assembleStyles
	});
});

var getOwnPropertySymbols$1 = _core.Object.getOwnPropertySymbols;

var getOwnPropertySymbols = createCommonjsModule(function (module) {
module.exports = { "default": getOwnPropertySymbols$1, __esModule: true };
});

var _Object$getOwnPropertySymbols = unwrapExports(getOwnPropertySymbols);

'use strict';

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *      
 */

var getSymbols = _Object$getOwnPropertySymbols || function (obj) {
  return [];
};

var isSymbol$1 = function isSymbol(key) {
  return (
    // $FlowFixMe string literal `symbol`. This value is not a valid `typeof` return value
    (typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'symbol' || toString.call(key) === '[object Symbol]'
  );
};

// Return entries (for example, of a map)
// with spacing, indentation, and comma
// without surrounding punctuation (for example, braces)
function printIteratorEntries(
// Flow 0.51.0: property `@@iterator` of $Iterator not found in Object
// To allow simplistic getRecordIterator in immutable.js
iterator, config, indentation, depth, refs, printer) {
  var separator = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : ': ';

  var result = '';
  var current = iterator.next();

  if (!current.done) {
    result += config.spacingOuter;

    var indentationNext = indentation + config.indent;

    while (!current.done) {
      var name = printer(current.value[0], config, indentationNext, depth, refs);
      var value = printer(current.value[1], config, indentationNext, depth, refs);

      result += indentationNext + name + separator + value;

      current = iterator.next();

      if (!current.done) {
        result += ',' + config.spacingInner;
      } else if (!config.min) {
        result += ',';
      }
    }

    result += config.spacingOuter + indentation;
  }

  return result;
}

// Return values (for example, of a set)
// with spacing, indentation, and comma
// without surrounding punctuation (braces or brackets)
function printIteratorValues(iterator, config, indentation, depth, refs, printer) {
  var result = '';
  var current = iterator.next();

  if (!current.done) {
    result += config.spacingOuter;

    var indentationNext = indentation + config.indent;

    while (!current.done) {
      result += indentationNext + printer(current.value, config, indentationNext, depth, refs);

      current = iterator.next();

      if (!current.done) {
        result += ',' + config.spacingInner;
      } else if (!config.min) {
        result += ',';
      }
    }

    result += config.spacingOuter + indentation;
  }

  return result;
}

// Return items (for example, of an array)
// with spacing, indentation, and comma
// without surrounding punctuation (for example, brackets)
function printListItems(list, config, indentation, depth, refs, printer) {
  var result = '';

  if (list.length) {
    result += config.spacingOuter;

    var indentationNext = indentation + config.indent;

    for (var i = 0; i < list.length; i++) {
      result += indentationNext + printer(list[i], config, indentationNext, depth, refs);

      if (i < list.length - 1) {
        result += ',' + config.spacingInner;
      } else if (!config.min) {
        result += ',';
      }
    }

    result += config.spacingOuter + indentation;
  }

  return result;
}

// Return properties of an object
// with spacing, indentation, and comma
// without surrounding punctuation (for example, braces)
function printObjectProperties(val, config, indentation, depth, refs, printer) {
  var result = '';
  var keys$$1 = _Object$keys(val).sort();
  var symbols = getSymbols(val);

  if (symbols.length) {
    keys$$1 = keys$$1.filter(function (key) {
      return !isSymbol$1(key);
    }).concat(symbols);
  }

  if (keys$$1.length) {
    result += config.spacingOuter;

    var indentationNext = indentation + config.indent;

    for (var i = 0; i < keys$$1.length; i++) {
      var key = keys$$1[i];
      var name = printer(key, config, indentationNext, depth, refs);
      var value = printer(val[key], config, indentationNext, depth, refs);

      result += indentationNext + name + ': ' + value;

      if (i < keys$$1.length - 1) {
        result += ',' + config.spacingInner;
      } else if (!config.min) {
        result += ',';
      }
    }

    result += config.spacingOuter + indentation;
  }

  return result;
}

var _for$1 = _core.Symbol['for'];

var _for = createCommonjsModule(function (module) {
module.exports = { "default": _for$1, __esModule: true };
});

var _Symbol$for = unwrapExports(_for);

'use strict';

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *      
 */

var asymmetricMatcher = _Symbol$for('jest.asymmetricMatcher');
var SPACE = ' ';

var serialize = function serialize(val, config, indentation, depth, refs, printer) {
  var stringedValue = val.toString();

  if (stringedValue === 'ArrayContaining') {
    if (++depth > config.maxDepth) {
      return '[' + stringedValue + ']';
    }
    return stringedValue + SPACE + '[' + printListItems(val.sample, config, indentation, depth, refs, printer) + ']';
  }

  if (stringedValue === 'ObjectContaining') {
    if (++depth > config.maxDepth) {
      return '[' + stringedValue + ']';
    }
    return stringedValue + SPACE + '{' + printObjectProperties(val.sample, config, indentation, depth, refs, printer) + '}';
  }

  if (stringedValue === 'StringMatching') {
    return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
  }

  if (stringedValue === 'StringContaining') {
    return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
  }

  return val.toAsymmetricMatcher();
};

var test = function test(val) {
  return val && val.$$typeof === asymmetricMatcher;
};

var AsymmetricMatcher = { serialize: serialize, test: test };

'use strict';

var ansiRegex = createCommonjsModule(function (module) {
	'use strict';

	module.exports = function () {
		var pattern = ['[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)', '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))'].join('|');

		return new RegExp(pattern, 'g');
	};
});

'use strict';

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *      
 */

var toHumanReadableAnsi = function toHumanReadableAnsi(text) {
  return text.replace(ansiRegex(), function (match, offset, string) {
    switch (match) {
      case ansiStyles.red.close:
      case ansiStyles.green.close:
      case ansiStyles.cyan.close:
      case ansiStyles.gray.close:
      case ansiStyles.white.close:
      case ansiStyles.yellow.close:
      case ansiStyles.bgRed.close:
      case ansiStyles.bgGreen.close:
      case ansiStyles.bgCyan.close:
      case ansiStyles.inverse.close:
      case ansiStyles.dim.close:
      case ansiStyles.bold.close:
      case ansiStyles.reset.open:
      case ansiStyles.reset.close:
        return '</>';
      case ansiStyles.red.open:
        return '<red>';
      case ansiStyles.green.open:
        return '<green>';
      case ansiStyles.cyan.open:
        return '<cyan>';
      case ansiStyles.gray.open:
        return '<gray>';
      case ansiStyles.white.open:
        return '<white>';
      case ansiStyles.yellow.open:
        return '<yellow>';
      case ansiStyles.bgRed.open:
        return '<bgRed>';
      case ansiStyles.bgGreen.open:
        return '<bgGreen>';
      case ansiStyles.bgCyan.open:
        return '<bgCyan>';
      case ansiStyles.inverse.open:
        return '<inverse>';
      case ansiStyles.dim.open:
        return '<dim>';
      case ansiStyles.bold.open:
        return '<bold>';
      default:
        return '';
    }
  });
};

var test$1 = function test(val) {
  return typeof val === 'string' && val.match(ansiRegex());
};

var serialize$1 = function serialize(val, config, indentation, depth, refs, printer) {
  return printer(toHumanReadableAnsi(val), config, indentation, depth, refs);
};

var ConvertAnsi = { serialize: serialize$1, test: test$1 };

'use strict';

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *      
 */

function escapeHTML(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

'use strict';

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *      
 */

// Return empty string if keys is empty.
var printProps = function printProps(keys, props, config, indentation, depth, refs, printer) {
  var indentationNext = indentation + config.indent;
  var colors = config.colors;
  return keys.map(function (key) {
    var value = props[key];
    var printed = printer(value, config, indentationNext, depth, refs);

    if (typeof value !== 'string') {
      if (printed.indexOf('\n') !== -1) {
        printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation;
      }
      printed = '{' + printed + '}';
    }

    return config.spacingInner + indentation + colors.prop.open + key + colors.prop.close + '=' + colors.value.open + printed + colors.value.close;
  }).join('');
};

// Return empty string if children is empty.
var printChildren = function printChildren(children, config, indentation, depth, refs, printer) {
  return children.map(function (child) {
    return config.spacingOuter + indentation + (typeof child === 'string' ? printText(child, config) : printer(child, config, indentation, depth, refs));
  }).join('');
};

var printText = function printText(text, config) {
  var contentColor = config.colors.content;
  return contentColor.open + escapeHTML(text) + contentColor.close;
};

var printComment = function printComment(comment, config) {
  var commentColor = config.colors.comment;
  return commentColor.open + '<!--' + escapeHTML(comment) + '-->' + commentColor.close;
};

// Separate the functions to format props, children, and element,
// so a plugin could override a particular function, if needed.
// Too bad, so sad: the traditional (but unnecessary) space
// in a self-closing tagColor requires a second test of printedProps.
var printElement = function printElement(type, printedProps, printedChildren, config, indentation) {
  var tagColor = config.colors.tag;
  return tagColor.open + '<' + type + (printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open) + (printedChildren ? '>' + tagColor.close + printedChildren + config.spacingOuter + indentation + tagColor.open + '</' + type : (printedProps && !config.min ? '' : ' ') + '/') + '>' + tagColor.close;
};

var printElementAsLeaf = function printElementAsLeaf(type, config) {
  var tagColor = config.colors.tag;
  return tagColor.open + '<' + type + tagColor.close + ' …' + tagColor.open + ' />' + tagColor.close;
};

'use strict';

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *      
 */

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

var ELEMENT_REGEXP = /^(HTML|SVG)\w*?Element$/;

var testNode = function testNode(nodeType, name) {
  return nodeType === ELEMENT_NODE && ELEMENT_REGEXP.test(name) || nodeType === TEXT_NODE && name === 'Text' || nodeType === COMMENT_NODE && name === 'Comment';
};

var test$2 = function test(val) {
  return val && val.constructor && val.constructor.name && testNode(val.nodeType, val.constructor.name);
};

// Convert array of attribute objects to keys array and props object.
var keysMapper = function keysMapper(attribute) {
  return attribute.name;
};
var propsReducer = function propsReducer(props, attribute) {
  props[attribute.name] = attribute.value;
  return props;
};

var serialize$2 = function serialize(node, config, indentation, depth, refs, printer) {
  if (node.nodeType === TEXT_NODE) {
    return printText(node.data, config);
  }

  if (node.nodeType === COMMENT_NODE) {
    return printComment(node.data, config);
  }

  var type = node.tagName.toLowerCase();
  if (++depth > config.maxDepth) {
    return printElementAsLeaf(type, config);
  }

  return printElement(type, printProps(Array.prototype.map.call(node.attributes, keysMapper).sort(), Array.prototype.reduce.call(node.attributes, propsReducer, {}), config, indentation + config.indent, depth, refs, printer), printChildren(Array.prototype.slice.call(node.childNodes), config, indentation + config.indent, depth, refs, printer), config, indentation);
};

var DOMElement = { serialize: serialize$2, test: test$2 };

'use strict';

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *      
 */

// SENTINEL constants are from https://github.com/facebook/immutable-js
var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
var IS_RECORD_SENTINEL = '@@__IMMUTABLE_RECORD__@@'; // immutable v4
var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

var getImmutableName = function getImmutableName(name) {
  return 'Immutable.' + name;
};
var printAsLeaf = function printAsLeaf(name) {
  return '[' + name + ']';
};
var SPACE$1 = ' ';
var LAZY = '…'; // Seq is lazy if it calls a method like filter

var printImmutableEntries = function printImmutableEntries(val, config, indentation, depth, refs, printer, type) {
  return ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : getImmutableName(type) + SPACE$1 + '{' + printIteratorEntries(val.entries(), config, indentation, depth, refs, printer) + '}';
};

// Return an iterator for Immutable Record in v4 or later.
var getRecordEntries = function getRecordEntries(val) {
  var i = 0;
  return {
    next: function next() {
      if (i < val._keys.length) {
        var key = val._keys[i++];
        return { done: false, value: [key, val.get(key)] };
      }
      return { done: true };
    }
  };
};

var printImmutableRecord = function printImmutableRecord(val, config, indentation, depth, refs, printer) {
  // _name property is defined only for an Immutable Record instance
  // which was constructed with a second optional descriptive name arg
  var name = getImmutableName(val._name || 'Record');
  var entries = _typeof(Array.isArray(val._keys)) ? getRecordEntries(val) // immutable v4
  : val.entries(); // Record is a collection in immutable v3
  return ++depth > config.maxDepth ? printAsLeaf(name) : name + SPACE$1 + '{' + printIteratorEntries(entries, config, indentation, depth, refs, printer) + '}';
};

var printImmutableSeq = function printImmutableSeq(val, config, indentation, depth, refs, printer) {
  var name = getImmutableName('Seq');

  if (++depth > config.maxDepth) {
    return printAsLeaf(name);
  }

  if (val[IS_KEYED_SENTINEL]) {
    return name + SPACE$1 + '{' + (
    // from Immutable collection of entries or from ECMAScript object
    val._iter || val._object ? printIteratorEntries(val.entries(), config, indentation, depth, refs, printer) : LAZY) + '}';
  }

  return name + SPACE$1 + '[' + (val._iter || // from Immutable collection of values
  val._array || // from ECMAScript array
  val._collection || // from ECMAScript collection in immutable v4
  val._iterable // from ECMAScript collection in immutable v3
  ? printIteratorValues(val.values(), config, indentation, depth, refs, printer) : LAZY) + ']';
};

var printImmutableValues = function printImmutableValues(val, config, indentation, depth, refs, printer, type) {
  return ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : getImmutableName(type) + SPACE$1 + '[' + printIteratorValues(val.values(), config, indentation, depth, refs, printer) + ']';
};

var serialize$3 = function serialize(val, config, indentation, depth, refs, printer) {
  if (val[IS_MAP_SENTINEL]) {
    return printImmutableEntries(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? 'OrderedMap' : 'Map');
  }

  if (val[IS_LIST_SENTINEL]) {
    return printImmutableValues(val, config, indentation, depth, refs, printer, 'List');
  }
  if (val[IS_SET_SENTINEL]) {
    return printImmutableValues(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? 'OrderedSet' : 'Set');
  }
  if (val[IS_STACK_SENTINEL]) {
    return printImmutableValues(val, config, indentation, depth, refs, printer, 'Stack');
  }

  if (val[IS_SEQ_SENTINEL]) {
    return printImmutableSeq(val, config, indentation, depth, refs, printer);
  }

  // For compatibility with immutable v3 and v4, let record be the default.
  return printImmutableRecord(val, config, indentation, depth, refs, printer);
};

var test$3 = function test(val) {
  return val && (val[IS_ITERABLE_SENTINEL] || val[IS_RECORD_SENTINEL]);
};

var Immutable = { serialize: serialize$3, test: test$3 };

'use strict';

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *      
 */

var elementSymbol = _Symbol$for('react.element');

// Given element.props.children, or subtree during recursive traversal,
// return flattened array of children.
var getChildren = function getChildren(arg) {
  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (Array.isArray(arg)) {
    arg.forEach(function (item) {
      getChildren(item, children);
    });
  } else if (arg != null && arg !== false) {
    children.push(arg);
  }
  return children;
};

var getType = function getType(element) {
  if (typeof element.type === 'string') {
    return element.type;
  }
  if (typeof element.type === 'function') {
    return element.type.displayName || element.type.name || 'Unknown';
  }
  return 'UNDEFINED';
};

var serialize$4 = function serialize(element, config, indentation, depth, refs, printer) {
  return ++depth > config.maxDepth ? printElementAsLeaf(getType(element), config) : printElement(getType(element), printProps(_Object$keys(element.props).filter(function (key) {
    return key !== 'children';
  }).sort(), element.props, config, indentation + config.indent, depth, refs, printer), printChildren(getChildren(element.props.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
};

var test$4 = function test(val) {
  return val && val.$$typeof === elementSymbol;
};

var ReactElement = { serialize: serialize$4, test: test$4 };

'use strict';

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *      
 */

var testSymbol = _Symbol$for('react.test.json');

var serialize$5 = function serialize(object, config, indentation, depth, refs, printer) {
  return ++depth > config.maxDepth ? printElementAsLeaf(object.type, config) : printElement(object.type, object.props ? printProps(_Object$keys(object.props).sort(),
  // Despite ternary expression, Flow 0.51.0 found incorrect error:
  // undefined is incompatible with the expected param type of Object
  // $FlowFixMe
  object.props, config, indentation + config.indent, depth, refs, printer) : '', object.children ? printChildren(object.children, config, indentation + config.indent, depth, refs, printer) : '', config, indentation);
};

var test$5 = function test(val) {
  return val && val.$$typeof === testSymbol;
};

var ReactTestComponent = { serialize: serialize$5, test: test$5 };

'use strict';

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *      
 */

var toString$1 = Object.prototype.toString;
var toISOString = Date.prototype.toISOString;
var errorToString = Error.prototype.toString;
var regExpToString = RegExp.prototype.toString;
var symbolToString = _Symbol.prototype.toString;

var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
var NEWLINE_REGEXP = /\n/gi;

function isToStringedArrayType(toStringed) {
  return toStringed === '[object Array]' || toStringed === '[object ArrayBuffer]' || toStringed === '[object DataView]' || toStringed === '[object Float32Array]' || toStringed === '[object Float64Array]' || toStringed === '[object Int8Array]' || toStringed === '[object Int16Array]' || toStringed === '[object Int32Array]' || toStringed === '[object Uint8Array]' || toStringed === '[object Uint8ClampedArray]' || toStringed === '[object Uint16Array]' || toStringed === '[object Uint32Array]';
}

function printNumber(val) {
  if (val != +val) {
    return 'NaN';
  }
  var isNegativeZero = val === 0 && 1 / val < 0;
  return isNegativeZero ? '-0' : '' + val;
}

function printFunction(val, printFunctionName) {
  if (!printFunctionName) {
    return '[Function]';
  }
  return '[Function ' + (val.name || 'anonymous') + ']';
}

function printSymbol(val) {
  return symbolToString.call(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
}

function printError(val) {
  return '[' + errorToString.call(val) + ']';
}

function printBasicValue(val, printFunctionName, escapeRegex) {
  if (val === true || val === false) {
    return '' + val;
  }
  if (val === undefined) {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }

  var typeOf = typeof val === 'undefined' ? 'undefined' : _typeof(val);

  if (typeOf === 'number') {
    return printNumber(val);
  }
  if (typeOf === 'string') {
    return '"' + val.replace(/"|\\/g, '\\$&') + '"';
  }
  if (typeOf === 'function') {
    return printFunction(val, printFunctionName);
  }
  if (typeOf === 'symbol') {
    return printSymbol(val);
  }

  var toStringed = toString$1.call(val);

  if (toStringed === '[object WeakMap]') {
    return 'WeakMap {}';
  }
  if (toStringed === '[object WeakSet]') {
    return 'WeakSet {}';
  }
  if (toStringed === '[object Function]' || toStringed === '[object GeneratorFunction]') {
    return printFunction(val, printFunctionName);
  }
  if (toStringed === '[object Symbol]') {
    return printSymbol(val);
  }
  if (toStringed === '[object Date]') {
    return toISOString.call(val);
  }
  if (toStringed === '[object Error]') {
    return printError(val);
  }
  if (toStringed === '[object RegExp]') {
    if (escapeRegex) {
      // https://github.com/benjamingr/RegExp.escape/blob/master/polyfill.js
      return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    return regExpToString.call(val);
  }

  if (val instanceof Error) {
    return printError(val);
  }

  return null;
}

function printComplexValue(val, config, indentation, depth, refs) {
  if (refs.indexOf(val) !== -1) {
    return '[Circular]';
  }
  refs = refs.slice();
  refs.push(val);

  var hitMaxDepth = ++depth > config.maxDepth;
  var min = config.min;

  if (config.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === 'function') {
    return printer(val.toJSON(), config, indentation, depth, refs);
  }

  var toStringed = toString$1.call(val);
  if (toStringed === '[object Arguments]') {
    return hitMaxDepth ? '[Arguments]' : (min ? '' : 'Arguments ') + '[' + printListItems(val, config, indentation, depth, refs, printer) + ']';
  }
  if (isToStringedArrayType(toStringed)) {
    return hitMaxDepth ? '[' + val.constructor.name + ']' : (min ? '' : val.constructor.name + ' ') + '[' + printListItems(val, config, indentation, depth, refs, printer) + ']';
  }
  if (toStringed === '[object Map]') {
    return hitMaxDepth ? '[Map]' : 'Map {' + printIteratorEntries(val.entries(), config, indentation, depth, refs, printer, ' => ') + '}';
  }
  if (toStringed === '[object Set]') {
    return hitMaxDepth ? '[Set]' : 'Set {' + printIteratorValues(val.values(), config, indentation, depth, refs, printer) + '}';
  }

  return hitMaxDepth ? '[' + (val.constructor ? val.constructor.name : 'Object') + ']' : (min ? '' : (val.constructor ? val.constructor.name : 'Object') + ' ') + '{' + printObjectProperties(val, config, indentation, depth, refs, printer) + '}';
}

function printPlugin(plugin, val, config, indentation, depth, refs) {
  var printed = plugin.serialize ? plugin.serialize(val, config, indentation, depth, refs, printer) : plugin.print(val, function (valChild) {
    return printer(valChild, config, indentation, depth, refs);
  }, function (str) {
    var indentationNext = indentation + config.indent;
    return indentationNext + str.replace(NEWLINE_REGEXP, '\n' + indentationNext);
  }, {
    edgeSpacing: config.spacingOuter,
    min: config.min,
    spacing: config.spacingInner
  }, config.colors);
  if (typeof printed !== 'string') {
    throw new Error('pretty-format: Plugin must return type "string" but instead returned "' + (typeof printed === 'undefined' ? 'undefined' : _typeof(printed)) + '".');
  }
  return printed;
}

function findPlugin(plugins, val) {
  for (var p = 0; p < plugins.length; p++) {
    if (plugins[p].test(val)) {
      return plugins[p];
    }
  }

  return null;
}

function printer(val, config, indentation, depth, refs) {
  var plugin = findPlugin(config.plugins, val);
  if (plugin !== null) {
    return printPlugin(plugin, val, config, indentation, depth, refs);
  }

  var basicResult = printBasicValue(val, config.printFunctionName, config.escapeRegex);
  if (basicResult !== null) {
    return basicResult;
  }

  return printComplexValue(val, config, indentation, depth, refs);
}

var DEFAULT_THEME = {
  comment: 'gray',
  content: 'reset',
  prop: 'yellow',
  tag: 'cyan',
  value: 'green'
};

var DEFAULT_THEME_KEYS = _Object$keys(DEFAULT_THEME);

var DEFAULT_OPTIONS = {
  callToJSON: true,
  escapeRegex: false,
  highlight: false,
  indent: 2,
  maxDepth: Infinity,
  min: false,
  plugins: [],
  printFunctionName: true,
  theme: DEFAULT_THEME
};

function validateOptions(options) {
  _Object$keys(options).forEach(function (key) {
    if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
      throw new Error('pretty-format: Unknown option "' + key + '".');
    }
  });

  if (options.min && options.indent !== undefined && options.indent !== 0) {
    throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
  }

  if (options.theme !== undefined) {
    if (options.theme === null) {
      throw new Error('pretty-format: Option "theme" must not be null.');
    }

    if (_typeof(options.theme) !== 'object') {
      throw new Error('pretty-format: Option "theme" must be of type "object" but instead received "' + _typeof(options.theme) + '".');
    }
  }
}

var getColorsHighlight = function getColorsHighlight(options) {
  return DEFAULT_THEME_KEYS.reduce(function (colors, key) {
    var value = options.theme && options.theme[key] !== undefined ? options.theme[key] : DEFAULT_THEME[key];
    var color = ansiStyles[value];
    if (color && typeof color.close === 'string' && typeof color.open === 'string') {
      colors[key] = color;
    } else {
      throw new Error('pretty-format: Option "theme" has a key "' + key + '" whose value "' + value + '" is undefined in ansi-styles.');
    }
    return colors;
  }, {});
};

var getColorsEmpty = function getColorsEmpty() {
  return DEFAULT_THEME_KEYS.reduce(function (colors, key) {
    colors[key] = { close: '', open: '' };
    return colors;
  }, {});
};

var getPrintFunctionName = function getPrintFunctionName(options) {
  return options && options.printFunctionName !== undefined ? options.printFunctionName : DEFAULT_OPTIONS.printFunctionName;
};

var getEscapeRegex = function getEscapeRegex(options) {
  return options && options.escapeRegex !== undefined ? options.escapeRegex : DEFAULT_OPTIONS.escapeRegex;
};

var getConfig = function getConfig(options) {
  return {
    callToJSON: options && options.callToJSON !== undefined ? options.callToJSON : DEFAULT_OPTIONS.callToJSON,
    colors: options && options.highlight ? getColorsHighlight(options) : getColorsEmpty(),
    escapeRegex: getEscapeRegex(options),
    indent: options && options.min ? '' : createIndent(options && options.indent !== undefined ? options.indent : DEFAULT_OPTIONS.indent),
    maxDepth: options && options.maxDepth !== undefined ? options.maxDepth : DEFAULT_OPTIONS.maxDepth,
    min: options && options.min !== undefined ? options.min : DEFAULT_OPTIONS.min,
    plugins: options && options.plugins !== undefined ? options.plugins : DEFAULT_OPTIONS.plugins,
    printFunctionName: getPrintFunctionName(options),
    spacingInner: options && options.min ? ' ' : '\n',
    spacingOuter: options && options.min ? '' : '\n'
  };
};

function createIndent(indent) {
  return new Array(indent + 1).join(' ');
}

function prettyFormat(val, options) {
  if (options) {
    validateOptions(options);
    if (options.plugins) {
      var plugin = findPlugin(options.plugins, val);
      if (plugin !== null) {
        return printPlugin(plugin, val, getConfig(options), '', 0, []);
      }
    }
  }

  var basicResult = printBasicValue(val, getPrintFunctionName(options), getEscapeRegex(options));
  if (basicResult !== null) {
    return basicResult;
  }

  return printComplexValue(val, getConfig(options), '', 0, []);
}

prettyFormat.plugins = {
  AsymmetricMatcher: AsymmetricMatcher,
  ConvertAnsi: ConvertAnsi,
  DOMElement: DOMElement,
  Immutable: Immutable,
  ReactElement: ReactElement,
  ReactTestComponent: ReactTestComponent
};

module.exports = prettyFormat;

})));

},{}],133:[function(require,module,exports){
(function (process){
/*
relative require
*/'use strict';

var path = require('path');
var Module = require('module');

var modules = {};

var getModule = function(dir) {
  var rootPath = dir ? path.resolve(dir) : process.cwd();
  var rootName = path.join(rootPath, '@root');
  var root = modules[rootName];
  if (!root) {
    root = new Module(rootName);
    root.filename = rootName;
    root.paths = Module._nodeModulePaths(rootPath);
    modules[rootName] = root;
  }
  return root;
};

var requireRelative = function(requested, relativeTo) {
  var root = getModule(relativeTo);
  return root.require(requested);
};

requireRelative.resolve = function(requested, relativeTo) {
  var root = getModule(relativeTo);
  return Module._resolveFilename(requested, root);
};

module.exports = requireRelative;

}).call(this,require('_process'))
},{"_process":139,"module":137,"path":138}],134:[function(require,module,exports){
(function (process){
'use strict';
var argv = process.argv;

var terminator = argv.indexOf('--');
var hasFlag = function (flag) {
	flag = '--' + flag;
	var pos = argv.indexOf(flag);
	return pos !== -1 && (terminator !== -1 ? pos < terminator : true);
};

module.exports = (function () {
	if ('FORCE_COLOR' in process.env) {
		return true;
	}

	if (hasFlag('no-color') ||
		hasFlag('no-colors') ||
		hasFlag('color=false')) {
		return false;
	}

	if (hasFlag('color') ||
		hasFlag('colors') ||
		hasFlag('color=true') ||
		hasFlag('color=always')) {
		return true;
	}

	if (process.stdout && !process.stdout.isTTY) {
		return false;
	}

	if (process.platform === 'win32') {
		return true;
	}

	if ('COLORTERM' in process.env) {
		return true;
	}

	if (process.env.TERM === 'dumb') {
		return false;
	}

	if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
		return true;
	}

	return false;
})();

}).call(this,require('_process'))
},{"_process":139}],135:[function(require,module,exports){
// var esprima = require('esprima')
// var escodegen = require('escodegen')
// module.exports = function(s){
//     var ast = esprima.parse(s);
//     return escodegen.generate(ast, {format: escodegen.FORMAT_MINIFY}) || s;
// }

},{}],136:[function(require,module,exports){
// this should run in the browser
const format = require('prettier-eslint')
const path = require('path')

module.export = function doit (config) {
  var source = config.source

  if (config.minifyFirst) {
    source = require('./minify')(source)
  }

  console.log(
    'Executing prettier-eslint with style ' +
      eslintPath +
      ' - input : ' +
      config.input
  )

  const options = {
    text: source,
    filePath: eslintPath
    // logLevel: 'debug'
  }

  const formatted = format(options)

  if (config.output) {
    shell.ShellString(formatted).to(config.output)
  } else {
    console.log(formatted)
  }
  return formatted
}

},{"./minify":135,"path":138,"prettier-eslint":130}],137:[function(require,module,exports){

},{}],138:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":139}],139:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[136]);
