"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Match = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _abstract_filter = require("./abstract_filter");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Match = /*#__PURE__*/function (_AbstractFilter) {
  (0, _inherits2.default)(Match, _AbstractFilter);

  var _super = _createSuper(Match);

  function Match(field, query) {
    var _this;

    (0, _classCallCheck2.default)(this, Match);
    _this = _super.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "field", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "data", {});
    _this.field = field;
    _this.data.query = query;
    return _this;
  }

  (0, _createClass2.default)(Match, [{
    key: "set",
    value: function set(option, value) {
      this.data[option] = value;
      return this;
    }
  }, {
    key: "boost",
    value: function boost() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.set('boost', value);
    }
  }, {
    key: "fuzzy",
    value: function fuzzy() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'AUTO';
      return this.set('fuzziness', value);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var obj = {
        match: {}
      };
      obj.match[this.field] = this.data;
      return obj;
    }
  }], [{
    key: "make",
    value: function make(field, query) {
      return new Match(field, query);
    }
  }]);
  return Match;
}(_abstract_filter.AbstractFilter);

exports.Match = Match;
//# sourceMappingURL=match.js.map