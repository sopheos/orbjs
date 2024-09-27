"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fuzzy = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _term = require("./term");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Fuzzy = /*#__PURE__*/function (_Term) {
  (0, _inherits2.default)(Fuzzy, _Term);

  var _super = _createSuper(Fuzzy);

  function Fuzzy(field, value) {
    var _this;

    (0, _classCallCheck2.default)(this, Fuzzy);
    _this = _super.call(this, field, value);
    _this.name = 'fuzzy';
    return _this;
  }

  (0, _createClass2.default)(Fuzzy, [{
    key: "fuzziness",
    value: function fuzziness() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'AUTO';
      return this.set('fuzziness', value);
    }
  }, {
    key: "prefixLength",
    value: function prefixLength(value) {
      return this.set('prefix_length', value);
    }
  }, {
    key: "maxExpansions",
    value: function maxExpansions(value) {
      return this.set('max_expansions', value);
    }
  }, {
    key: "transpositions",
    value: function transpositions(value) {
      return this.set('transpositions', value);
    }
  }], [{
    key: "make",
    value: function make(field, value) {
      return new Fuzzy(field, value);
    }
  }]);
  return Fuzzy;
}(_term.Term);

exports.Fuzzy = Fuzzy;
//# sourceMappingURL=fuzzy.js.map