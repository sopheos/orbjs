import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { AbstractFilter } from './abstract_filter';
export var MatchAll = /*#__PURE__*/function (_AbstractFilter) {
  _inherits(MatchAll, _AbstractFilter);

  var _super = _createSuper(MatchAll);

  function MatchAll() {
    _classCallCheck(this, MatchAll);

    return _super.apply(this, arguments);
  }

  _createClass(MatchAll, [{
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
}(AbstractFilter);
//# sourceMappingURL=match_all.js.map