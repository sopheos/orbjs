"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Raw = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Raw = /*#__PURE__*/function () {
  function Raw() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Raw);
    (0, _defineProperty2.default)(this, "data", void 0);
    this.data = data;
  }

  (0, _createClass2.default)(Raw, [{
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

exports.Raw = Raw;
//# sourceMappingURL=raw.js.map