"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Term = void 0;

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

var Term = /*#__PURE__*/function (_AbstractFilter) {
  (0, _inherits2.default)(Term, _AbstractFilter);

  var _super = _createSuper(Term);

  function Term(field, value) {
    var _this;

    (0, _classCallCheck2.default)(this, Term);
    _this = _super.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "name", 'term');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "field", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "data", {});
    _this.field = field;

    _this.set('value', value);

    return _this;
  }

  (0, _createClass2.default)(Term, [{
    key: "boost",
    value: function boost() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.set('boost', value);
    }
  }, {
    key: "set",
    value: function set(option, value) {
      this.data[option] = value;
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var obj = {};
      obj[this.name] = {};
      obj[this.name][this.field] = this.data;
      return obj;
    }
  }], [{
    key: "make",
    value: function make(field, value) {
      return new Term(field, value);
    }
  }]);
  return Term;
}(_abstract_filter.AbstractFilter);

exports.Term = Term;
//# sourceMappingURL=term.js.map