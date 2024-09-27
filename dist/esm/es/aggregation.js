import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
export var Aggregation = /*#__PURE__*/function () {
  function Aggregation(name) {
    _classCallCheck(this, Aggregation);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "data", {});

    this.name = name;
  }

  _createClass(Aggregation, [{
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
//# sourceMappingURL=aggregation.js.map