import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { Term } from './term';
export var Wildcard = /*#__PURE__*/function (_Term) {
  _inherits(Wildcard, _Term);

  var _super = _createSuper(Wildcard);

  function Wildcard(field, value) {
    var _this;

    _classCallCheck(this, Wildcard);

    _this = _super.call(this, field, value);
    _this.name = 'wildcard';
    return _this;
  }

  _createClass(Wildcard, null, [{
    key: "make",
    value: function make(field, value) {
      return new Wildcard(field, value);
    }
  }]);

  return Wildcard;
}(Term);
//# sourceMappingURL=wildcard.js.map