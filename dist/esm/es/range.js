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
export var Range = /*#__PURE__*/function (_AbstractFilter) {
  _inherits(Range, _AbstractFilter);

  var _super = _createSuper(Range);

  function Range(field) {
    var _this;

    _classCallCheck(this, Range);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "field", void 0);

    _defineProperty(_assertThisInitialized(_this), "data", {});

    _this.field = field;
    return _this;
  }

  _createClass(Range, [{
    key: "gte",
    value: function gte(value) {
      return this.set('gte', value);
    }
  }, {
    key: "gt",
    value: function gt(value) {
      return this.set('gt', value);
    }
  }, {
    key: "lte",
    value: function lte(value) {
      return this.set('lte', value);
    }
  }, {
    key: "lt",
    value: function lt(value) {
      return this.set('lt', value);
    }
  }, {
    key: "boost",
    value: function boost() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.set('boost', value);
    }
  }, {
    key: "format",
    value: function format(value) {
      return this.set('format', value);
    }
  }, {
    key: "timezone",
    value: function timezone(value) {
      return this.set('time_zone', value);
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
      var obj = {
        range: {}
      };
      obj.range[this.field] = this.data;
      return obj;
    }
  }], [{
    key: "make",
    value: function make(field) {
      return new Range(field);
    }
  }]);

  return Range;
}(AbstractFilter);
//# sourceMappingURL=range.js.map