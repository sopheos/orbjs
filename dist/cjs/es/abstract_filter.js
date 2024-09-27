"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbstractFilter = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var AbstractFilter = /*#__PURE__*/function () {
  function AbstractFilter() {
    (0, _classCallCheck2.default)(this, AbstractFilter);
  }

  (0, _createClass2.default)(AbstractFilter, [{
    key: "must",
    value: function must(bool) {
      bool.must(this);
      return this;
    }
  }, {
    key: "filter",
    value: function filter(bool) {
      bool.filter(this);
      return this;
    }
  }, {
    key: "should",
    value: function should(bool) {
      bool.should(this);
      return this;
    }
  }, {
    key: "mustNot",
    value: function mustNot(bool) {
      bool.mustNot(this);
      return this;
    }
  }]);
  return AbstractFilter;
}();

exports.AbstractFilter = AbstractFilter;
//# sourceMappingURL=abstract_filter.js.map