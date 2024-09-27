import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
export var SortGeo = /*#__PURE__*/function () {
  function SortGeo(field, lat, lon) {
    var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '_geo_distance';

    _classCallCheck(this, SortGeo);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "field", void 0);

    _defineProperty(this, "lat", void 0);

    _defineProperty(this, "lon", void 0);

    this.name = name;
    this.field = field;
    this.lat = lat;
    this.lon = lon;
  }

  _createClass(SortGeo, [{
    key: "toJSON",
    value: function toJSON() {
      var obj = {};
      obj[this.name] = {};
      obj[this.name][this.field] = {
        lat: this.lat,
        lon: this.lon
      };
      obj[this.name]['order'] = "asc";
      obj[this.name]['unit'] = "m";
      return obj;
    }
  }], [{
    key: "make",
    value: function make(field, lat, lon) {
      var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '_geo_distance';
      return new SortGeo(field, lat, lon, name);
    }
  }]);

  return SortGeo;
}();
//# sourceMappingURL=sort_geo.js.map