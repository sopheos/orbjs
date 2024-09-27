import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
export var AbstractFilter = /*#__PURE__*/function () {
  function AbstractFilter() {
    _classCallCheck(this, AbstractFilter);
  }

  _createClass(AbstractFilter, [{
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
//# sourceMappingURL=abstract_filter.js.map