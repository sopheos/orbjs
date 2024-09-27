import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
export var Raw = /*#__PURE__*/function () {
  function Raw() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Raw);

    _defineProperty(this, "data", void 0);

    this.data = data;
  }

  _createClass(Raw, [{
    key: "set",
    value: function set(key, value) {
      this.data[key] = value;
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }], [{
    key: "make",
    value: function make() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Raw(data);
    }
  }]);

  return Raw;
}();
//# sourceMappingURL=raw.js.map