"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeoDistance = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _abstract_filter = require("./abstract_filter");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GeoDistance = /*#__PURE__*/function (_AbstractFilter) {
  (0, _inherits2.default)(GeoDistance, _AbstractFilter);

  var _super = _createSuper(GeoDistance);

  function GeoDistance(field, lat, lon, distance) {
    var _this;

    (0, _classCallCheck2.default)(this, GeoDistance);
    _this = _super.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "name", 'geo_distance');
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "field", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "distance", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "point", void 0);
    _this.field = field;
    _this.point = {
      lat: lat,
      lon: lon
    };
    _this.distance = distance;
    return _this;
  }

  (0, _createClass2.default)(GeoDistance, [{
    key: "toJSON",
    value: function toJSON() {
      var obj = {};
      obj[this.name] = {};
      obj[this.name]['distance'] = this.distance;
      obj[this.name][this.field] = this.point;
      return obj;
    }
  }], [{
    key: "make",
    value: function make(field, lat, lon, distance) {
      return new GeoDistance(field, lat, lon, distance);
    }
  }]);
  return GeoDistance;
}(_abstract_filter.AbstractFilter);

exports.GeoDistance = GeoDistance;
//# sourceMappingURL=geodistance.js.map