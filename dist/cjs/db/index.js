"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DB = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var mysql = _interopRequireWildcard(require("mysql"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DB = /*#__PURE__*/function () {
  function DB(config) {
    (0, _classCallCheck2.default)(this, DB);
    (0, _defineProperty2.default)(this, "pool", void 0);
    this.pool = mysql.createPool(config);
  }

  (0, _createClass2.default)(DB, [{
    key: "query",
    value: function query(sql, args) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.pool.getConnection(function (err, connection) {
          if (err) reject(err);
          connection.query(sql, args, function (err, rows, fields) {
            connection.release();
            err ? reject(err) : resolve({
              rows: rows,
              fields: fields
            });
          });
        });
      });
    }
  }, {
    key: "end",
    value: function end() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.pool.end(function (err) {
          if (err) reject(err);
          resolve();
        });
      });
    }
  }]);
  return DB;
}();

exports.DB = DB;
//# sourceMappingURL=index.js.map