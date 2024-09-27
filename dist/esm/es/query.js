import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
export var Query = /*#__PURE__*/function () {
  function Query() {
    _classCallCheck(this, Query);

    _defineProperty(this, "data", {});
  }

  _createClass(Query, [{
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
//# sourceMappingURL=query.js.map