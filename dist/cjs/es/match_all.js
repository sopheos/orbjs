"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MatchAll = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _abstract_filter = require("./abstract_filter");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MatchAll = /*#__PURE__*/function (_AbstractFilter) {
  (0, _inherits2.default)(MatchAll, _AbstractFilter);

  var _super = _createSuper(MatchAll);

  function MatchAll() {
    (0, _classCallCheck2.default)(this, MatchAll);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(MatchAll, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        match_all: {}
      };
    }
  }], [{
    key: "make",
    value: function make() {
      return new MatchAll();
    }
  }]);
  return MatchAll;
}(_abstract_filter.AbstractFilter);

exports.MatchAll = MatchAll;
//# sourceMappingURL=match_all.js.map