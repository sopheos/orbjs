import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as mysql from 'mysql';
export var DB = /*#__PURE__*/function () {
  function DB(config) {
    _classCallCheck(this, DB);

    _defineProperty(this, "pool", void 0);

    this.pool = mysql.createPool(config);
  }

  _createClass(DB, [{
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
//# sourceMappingURL=index.js.map