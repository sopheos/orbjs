import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { AbstractFilter } from './abstract_filter';
export var Terms = /*#__PURE__*/function (_AbstractFilter) {
  _inherits(Terms, _AbstractFilter);

  var _super = _createSuper(Terms);

  function Terms(field, values) {
    var _this;

    _classCallCheck(this, Terms);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "field", void 0);

    _defineProperty(_assertThisInitialized(_this), "data", void 0);

    _this.field = field;
    _this.data = values;
    return _this;
  }

  _createClass(Terms, [{
    key: "toJSON",
    value: function toJSON() {
      var obj = {
        terms: {}
      };
      obj.terms[this.field] = this.data;
      return obj;
    }
  }], [{
    key: "make",
    value: function make(field) {
      for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
      }

      return new Terms(field, values);
    }
  }]);

  return Terms;
}(AbstractFilter);
//# sourceMappingURL=terms.js.map