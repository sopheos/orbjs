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
export var Match = /*#__PURE__*/function (_AbstractFilter) {
  _inherits(Match, _AbstractFilter);

  var _super = _createSuper(Match);

  function Match(field, query) {
    var _this;

    _classCallCheck(this, Match);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "field", void 0);

    _defineProperty(_assertThisInitialized(_this), "data", {});

    _this.field = field;
    _this.data.query = query;
    return _this;
  }

  _createClass(Match, [{
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
}(AbstractFilter);
//# sourceMappingURL=match.js.map