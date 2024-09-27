import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
export var Bool = /*#__PURE__*/function () {
  function Bool() {
    _classCallCheck(this, Bool);

    _defineProperty(this, "data", {});
  }

  _createClass(Bool, [{
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
//# sourceMappingURL=bool.js.map