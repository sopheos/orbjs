"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortGeo = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var SortGeo = /*#__PURE__*/function () {
  function SortGeo(field, lat, lon) {
    var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '_geo_distance';
    (0, _classCallCheck2.default)(this, SortGeo);
    (0, _defineProperty2.default)(this, "name", void 0);
    (0, _defineProperty2.default)(this, "field", void 0);
    (0, _defineProperty2.default)(this, "lat", void 0);
    (0, _defineProperty2.default)(this, "lon", void 0);
    this.name = name;
    this.field = field;
    this.lat = lat;
    this.lon = lon;
  }

  (0, _createClass2.default)(SortGeo, [{
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

exports.SortGeo = SortGeo;
//# sourceMappingURL=sort_geo.js.map