import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { Term } from './term';
export var Fuzzy = /*#__PURE__*/function (_Term) {
  _inherits(Fuzzy, _Term);

  var _super = _createSuper(Fuzzy);

  function Fuzzy(field, value) {
    var _this;

    _classCallCheck(this, Fuzzy);

    _this = _super.call(this, field, value);
    _this.name = 'fuzzy';
    return _this;
  }

  _createClass(Fuzzy, [{
    key: "fuzziness",
    value: function fuzziness() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'AUTO';
      return this.set('fuzziness', value);
    }
  }, {
    key: "prefixLength",
    value: function prefixLength(value) {
      return this.set('prefix_length', value);
    }
  }, {
    key: "maxExpansions",
    value: function maxExpansions(value) {
      return this.set('max_expansions', value);
    }
  }, {
    key: "transpositions",
    value: function transpositions(value) {
      return this.set('transpositions', value);
    }
  }], [{
    key: "make",
    value: function make(field, value) {
      return new Fuzzy(field, value);
    }
  }]);

  return Fuzzy;
}(Term);
//# sourceMappingURL=fuzzy.js.map