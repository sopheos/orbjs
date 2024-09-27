"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Aggregation = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Aggregation = /*#__PURE__*/function () {
  function Aggregation(name) {
    (0, _classCallCheck2.default)(this, Aggregation);
    (0, _defineProperty2.default)(this, "name", void 0);
    (0, _defineProperty2.default)(this, "data", {});
    this.name = name;
  }

  (0, _createClass2.default)(Aggregation, [{
    key: "field",
    value: function field(name) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.data[name] = data;
      return this;
    }
  }, {
    key: "addToQuery",
    value: function addToQuery(query) {
      query.aggs(this);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var obj = {};
      obj[this.name] = this.data;
      return obj;
    }
  }], [{
    key: "make",
    value: function make(name) {
      return new Aggregation(name);
    }
  }]);
  return Aggregation;
}();

exports.Aggregation = Aggregation;
//# sourceMappingURL=aggregation.js.map