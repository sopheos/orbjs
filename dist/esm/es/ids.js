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
export var Ids = /*#__PURE__*/function (_AbstractFilter) {
  _inherits(Ids, _AbstractFilter);

  var _super = _createSuper(Ids);

  function Ids(values) {
    var _this;

    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, Ids);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "data", {});

    if (type) _this.data.type = type;
    _this.data.values = values;
    return _this;
  }

  _createClass(Ids, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        ids: this.data
      };
    }
  }], [{
    key: "make",
    value: function make(values) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return new Ids(values, type);
    }
  }]);

  return Ids;
}(AbstractFilter);
//# sourceMappingURL=ids.js.map