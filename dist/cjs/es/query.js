"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Query = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Query = /*#__PURE__*/function () {
  function Query() {
    (0, _classCallCheck2.default)(this, Query);
    (0, _defineProperty2.default)(this, "data", {});
  }

  (0, _createClass2.default)(Query, [{
    key: "set",
    value: function set(key, value) {
      this.data[key] = value;
      return this;
    }
  }, {
    key: "size",
    value: function size() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      return this.set('size', value);
    }
  }, {
    key: "from",
    value: function from() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.set('from', value);
    }
  }, {
    key: "query",
    value: function query(value) {
      return this.set('query', value);
    }
  }, {
    key: "conflictsProceed",
    value: function conflictsProceed() {
      return this.set('conflicts', 'proceed');
    }
  }, {
    key: "aggs",
    value: function aggs(agg) {
      var values = agg.toJSON();
      if (!this.data['aggs']) this.data['aggs'] = {};

      for (var i in values) {
        this.data['aggs'][i] = values[i];
      }

      return this;
    }
  }, {
    key: "sort",
    value: function sort(value) {
      return this.set('sort', value);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }], [{
    key: "make",
    value: function make() {
      return new Query();
    }
  }]);
  return Query;
}();

exports.Query = Query;
//# sourceMappingURL=query.js.map