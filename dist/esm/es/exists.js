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
export var Exists = /*#__PURE__*/function (_AbstractFilter) {
  _inherits(Exists, _AbstractFilter);

  var _super = _createSuper(Exists);

  function Exists(field) {
    var _this;

    _classCallCheck(this, Exists);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "field", void 0);

    _this.field = field;
    return _this;
  }

  _createClass(Exists, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        exists: {
          field: this.field
        }
      };
    }
  }], [{
    key: "make",
    value: function make(field) {
      return new Exists(field);
    }
  }]);

  return Exists;
}(AbstractFilter);
//# sourceMappingURL=exists.js.map