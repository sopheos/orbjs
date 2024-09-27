"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bool = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Bool = /*#__PURE__*/function () {
  function Bool() {
    (0, _classCallCheck2.default)(this, Bool);
    (0, _defineProperty2.default)(this, "data", {});
  }

  (0, _createClass2.default)(Bool, [{
    key: "must",
    value: function must(value) {
      return this.add('must', value);
    }
  }, {
    key: "filter",
    value: function filter(value) {
      return this.add('filter', value);
    }
  }, {
    key: "should",
    value: function should(value) {
      return this.add('should', value);
    }
  }, {
    key: "mustNot",
    value: function mustNot(value) {
      return this.add('must_not', value);
    }
  }, {
    key: "minimumShouldMatch",
    value: function minimumShouldMatch(value) {
      return this.set('minimum_should_match', value);
    }
  }, {
    key: "boost",
    value: function boost() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.set('boost', value);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.data[key] = value;
      return this;
    }
  }, {
    key: "add",
    value: function add(type, value) {
      if (!this.data[type]) this.data[type] = [];
      this.data[type].push(value);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        bool: this.data
      };
    }
  }], [{
    key: "make",
    value: function make() {
      return new Bool();
    }
  }]);
  return Bool;
}();

exports.Bool = Bool;
//# sourceMappingURL=bool.js.map