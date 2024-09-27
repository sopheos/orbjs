import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
export var Sort = /*#__PURE__*/function () {
  function Sort() {
    _classCallCheck(this, Sort);

    _defineProperty(this, "data", []);
  }

  _createClass(Sort, [{
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
//# sourceMappingURL=sort.js.map