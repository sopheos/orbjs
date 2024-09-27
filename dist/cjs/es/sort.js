"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sort = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Sort = /*#__PURE__*/function () {
  function Sort() {
    (0, _classCallCheck2.default)(this, Sort);
    (0, _defineProperty2.default)(this, "data", []);
  }

  (0, _createClass2.default)(Sort, [{
    key: "asc",
    value: function asc(field) {
      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return this.add(field, 'asc', mode);
    }
  }, {
    key: "desc",
    value: function desc(field) {
      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return this.add(field, 'desc', mode);
    }
  }, {
    key: "add",
    value: function add(field, order, mode) {
      var obj = {};
      obj[field] = {
        order: order
      };
      if (mode) obj[field].mode = mode;
      this.data.push(obj);
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
      return new Sort();
    }
  }]);
  return Sort;
}();

exports.Sort = Sort;
//# sourceMappingURL=sort.js.map