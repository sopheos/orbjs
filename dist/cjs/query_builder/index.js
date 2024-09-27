"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QB = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/**
 * Query Builder
 */
var QB = /*#__PURE__*/function () {
  // -------------------------------------------------------------------------
  function QB() {
    var _this = this;

    (0, _classCallCheck2.default)(this, QB);
    (0, _defineProperty2.default)(this, "data_save", void 0);
    (0, _defineProperty2.default)(this, "query_str", void 0);
    (0, _defineProperty2.default)(this, "query_data", void 0);
    (0, _defineProperty2.default)(this, "data_keys", void 0);
    (0, _defineProperty2.default)(this, "data_values", void 0);
    (0, _defineProperty2.default)(this, "data_raw_keys", void 0);
    (0, _defineProperty2.default)(this, "data_raw_values", void 0);
    (0, _defineProperty2.default)(this, "from_stmt", void 0);
    (0, _defineProperty2.default)(this, "group_stmt", void 0);
    (0, _defineProperty2.default)(this, "group_count", void 0);
    (0, _defineProperty2.default)(this, "group_level", void 0);
    (0, _defineProperty2.default)(this, "having_data", void 0);
    (0, _defineProperty2.default)(this, "having_stmt", void 0);
    (0, _defineProperty2.default)(this, "is_distinct", void 0);
    (0, _defineProperty2.default)(this, "join_stmt", void 0);
    (0, _defineProperty2.default)(this, "limit_nb", void 0);
    (0, _defineProperty2.default)(this, "offset_nb", void 0);
    (0, _defineProperty2.default)(this, "order_by", void 0);
    (0, _defineProperty2.default)(this, "select_stmt", void 0);
    (0, _defineProperty2.default)(this, "where_data", void 0);
    (0, _defineProperty2.default)(this, "where_stmt", void 0);
    (0, _defineProperty2.default)(this, "toString", function () {
      var query = _this.query_str;

      _this.query_data.forEach(function (e) {
        if (typeof e === 'string') {
          query = query.replace('?', "'" + e + "'");
        } else {
          query = query.replace('?', e);
        }
      });

      return query;
    });
    this.data_save = {};
    this.query_str = '';
    this.query_data = [];
    this.data_keys = [];
    this.data_values = [];
    this.data_raw_keys = [];
    this.data_raw_values = [];
    this.from_stmt = '';
    this.group_stmt = '';
    this.group_count = 0;
    this.group_level = 0;
    this.having_data = [];
    this.having_stmt = '';
    this.is_distinct = false;
    this.join_stmt = '';
    this.limit_nb = 0;
    this.offset_nb = 0;
    this.order_by = '';
    this.select_stmt = '';
    this.where_data = [];
    this.where_stmt = '';
  } // -------------------------------------------------------------------------
  // Save
  // -------------------------------------------------------------------------


  (0, _createClass2.default)(QB, [{
    key: "reset",
    value: function reset() {
      this.query_str = '';
      this.query_data = [];
      this.data_keys = [];
      this.data_values = [];
      this.data_raw_keys = [];
      this.data_raw_values = [];
      this.from_stmt = '';
      this.group_stmt = '';
      this.group_count = 0;
      this.group_level = 0;
      this.having_data = [];
      this.having_stmt = '';
      this.is_distinct = false;
      this.join_stmt = '';
      this.limit_nb = 0;
      this.offset_nb = 0;
      this.order_by = '';
      this.select_stmt = '';
      this.where_data = [];
      this.where_stmt = '';
      return this;
    }
  }, {
    key: "save",
    value: function save() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      this.data_save[name] = this.export();
      return this;
    }
  }, {
    key: "load",
    value: function load() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

      if (!this.data_save[name]) {
        return this;
      }

      this.data_keys = this.data_save[name].data_keys;
      this.data_values = this.data_save[name].data_values;
      this.data_raw_keys = this.data_save[name].data_raw_keys;
      this.data_raw_values = this.data_save[name].data_raw_values;
      this.from_stmt = this.data_save[name].from_stmt;
      this.group_stmt = this.data_save[name].group_stmt;
      this.group_count = this.data_save[name].group_count;
      this.group_level = this.data_save[name].group_level;
      this.having_data = this.data_save[name].having_data;
      this.having_stmt = this.data_save[name].having_stmt;
      this.is_distinct = this.data_save[name].is_distinct;
      this.join_stmt = this.data_save[name].join_stmt;
      this.limit_nb = this.data_save[name].limit_nb;
      this.offset_nb = this.data_save[name].offset_nb;
      this.order_by = this.data_save[name].order_by;
      this.select_stmt = this.data_save[name].select_stmt;
      this.where_data = this.data_save[name].where_data;
      this.where_stmt = this.data_save[name].where_stmt;
      return this;
    }
  }, {
    key: "export",
    value: function _export() {
      return {
        data_keys: this.data_keys,
        data_values: this.data_values,
        data_raw_keys: this.data_raw_keys,
        data_raw_values: this.data_raw_values,
        from_stmt: this.from_stmt,
        group_stmt: this.group_stmt,
        group_count: this.group_count,
        group_level: this.group_level,
        having_data: this.having_data,
        having_stmt: this.having_stmt,
        is_distinct: this.is_distinct,
        join_stmt: this.join_stmt,
        limit_nb: this.limit_nb,
        offset_nb: this.offset_nb,
        order_by: this.order_by,
        select_stmt: this.select_stmt,
        where_data: this.where_data,
        where_stmt: this.where_stmt
      };
    } // -------------------------------------------------------------------------
    // Select
    // -------------------------------------------------------------------------

  }, {
    key: "select",
    value: function select() {
      for (var _len = arguments.length, cols = new Array(_len), _key = 0; _key < _len; _key++) {
        cols[_key] = arguments[_key];
      }

      if (!cols.length) {
        return this;
      }

      this.select_stmt += ",\n\t" + cols.join(",\n\t");
      return this;
    }
  }, {
    key: "distinct",
    value: function distinct() {
      var is_distinct = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.is_distinct = true;
      return this;
    } // -------------------------------------------------------------------------
    // Table
    // -------------------------------------------------------------------------

  }, {
    key: "from",
    value: function from(table) {
      this.from_stmt = table;
      return this;
    }
  }, {
    key: "join",
    value: function join(table, cond) {
      return this._join(table, cond);
    }
  }, {
    key: "left",
    value: function left(table, cond) {
      return this._join(table, cond, 'LEFT');
    }
  }, {
    key: "right",
    value: function right(table, cond) {
      return this._join(table, cond, 'RIGHT');
    }
  }, {
    key: "_join",
    value: function _join(table, cond) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      this.join_stmt += "\n" + (type + " JOIN " + table + " ON " + cond).trim();
      return this;
    } // -------------------------------------------------------------------------
    // Where
    // -------------------------------------------------------------------------

  }, {
    key: "where",
    value: function where(statement) {
      for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        values[_key2 - 1] = arguments[_key2];
      }

      return this._where('AND', statement, values);
    }
  }, {
    key: "orWhere",
    value: function orWhere(statement) {
      for (var _len3 = arguments.length, values = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        values[_key3 - 1] = arguments[_key3];
      }

      return this._where('OR', statement, values);
    }
  }, {
    key: "whereIn",
    value: function whereIn(col, values) {
      return this._in("AND", "IN", col, values);
    }
  }, {
    key: "orWhereIn",
    value: function orWhereIn(col, values) {
      return this._in("OR", "IN", col, values);
    }
  }, {
    key: "whereNotIn",
    value: function whereNotIn(col, values) {
      return this._in("AND", "NOT IN", col, values);
    }
  }, {
    key: "orWhereNotIn",
    value: function orWhereNotIn(col, values) {
      return this._in("OR", "NOT IN", col, values);
    }
  }, {
    key: "like",
    value: function like(col, value) {
      return this.where(col + " LIKE ?", value);
    }
  }, {
    key: "orLike",
    value: function orLike(col, value) {
      return this.orWhere(col + " LIKE ?", value);
    }
  }, {
    key: "notLike",
    value: function notLike(col, value) {
      return this.where(col + " NOT LIKE ?", value);
    }
  }, {
    key: "orNotLike",
    value: function orNotLike(col, value) {
      return this.where(col + " NOT LIKE ?", value);
    }
  }, {
    key: "search",
    value: function search(cols, values) {
      var _this2 = this;

      values.forEach(function (v) {
        var str = "%" + v.trim() + "%";

        _this2.groupStart();

        cols.forEach(function (c) {
          _this2.orLike(c, str);
        });

        _this2.groupEnd();
      });
      return this;
    }
  }, {
    key: "groupStart",
    value: function groupStart() {
      return this._group('AND');
    }
  }, {
    key: "orGroupStart",
    value: function orGroupStart() {
      return this._group('OR');
    }
  }, {
    key: "groupEnd",
    value: function groupEnd() {
      if (this.group_level > 0) {
        this.where_stmt += "\n" + "\t".repeat(this.group_level) + ")";
        this.group_level--;
      }

      return this;
    }
  }, {
    key: "_where",
    value: function _where(prefix, statement, values) {
      var _this3 = this;

      // Add link keyword if not the first element of a group
      if (!this.where_stmt.length || this.group_count === 0) {
        prefix = "";
      }

      this.group_count++;
      values.forEach(function (v) {
        _this3.where_data.push(v);
      });
      this.where_stmt += "\n" + "\t".repeat(this.group_level + 1) + (prefix + " " + statement).trim();
      return this;
    }
  }, {
    key: "_in",
    value: function _in(prefix, operator, col, values) {
      if (values.length) {
        var statement = col + " " + operator + "  (" + ",?".repeat(values.length).substring(1) + ")";

        this._where(prefix, statement, values);
      }

      return this;
    }
  }, {
    key: "_group",
    value: function _group(prefix) {
      if (!this.where_stmt.length || this.group_count === 0) {
        prefix = "";
      }

      this.where_stmt += "\n" + "\t".repeat(this.group_level + 1) + (prefix + " (").trim();
      this.group_count = 0;
      this.group_level++;
      return this;
    } // -------------------------------------------------------------------------
    // Group & Having
    // -------------------------------------------------------------------------

  }, {
    key: "groupBy",
    value: function groupBy() {
      for (var _len4 = arguments.length, cols = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        cols[_key4] = arguments[_key4];
      }

      if (cols.length) {
        this.group_stmt += ",\n\t" + cols.join(",\n\t");
      }

      return this;
    }
  }, {
    key: "having",
    value: function having(statement) {
      for (var _len5 = arguments.length, values = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        values[_key5 - 1] = arguments[_key5];
      }

      return this._having('AND', statement, values);
    }
  }, {
    key: "orHaving",
    value: function orHaving(statement) {
      for (var _len6 = arguments.length, values = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        values[_key6 - 1] = arguments[_key6];
      }

      return this._having('OR', statement, values);
    }
  }, {
    key: "_having",
    value: function _having(prefix, statement, values) {
      var _this4 = this;

      if (!this.having_stmt.length) {
        prefix = "";
      }

      values.forEach(function (v) {
        _this4.having_data.push(v);
      });
      this.having_stmt += "\n\t" + (prefix + " " + statement).trim();
      return this;
    } // -------------------------------------------------------------------------
    // Order
    // -------------------------------------------------------------------------

  }, {
    key: "orderBy",
    value: function orderBy() {
      for (var _len7 = arguments.length, cols = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        cols[_key7] = arguments[_key7];
      }

      return this._order(cols);
    }
  }, {
    key: "orderAsc",
    value: function orderAsc() {
      for (var _len8 = arguments.length, cols = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        cols[_key8] = arguments[_key8];
      }

      return this._order(cols, 'ASC');
    }
  }, {
    key: "orderDesc",
    value: function orderDesc() {
      for (var _len9 = arguments.length, cols = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        cols[_key9] = arguments[_key9];
      }

      return this._order(cols, 'DESC');
    }
  }, {
    key: "_order",
    value: function _order(cols) {
      var suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (suffix) {
        suffix = " " + suffix;
      }

      if (cols.length) {
        this.order_by += ",\n\t" + cols.join(suffix + ",\n\t") + suffix;
      }

      return this;
    } // -------------------------------------------------------------------------
    // Limit
    // -------------------------------------------------------------------------

  }, {
    key: "limit",
    value: function limit(_limit) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.limit_nb = _limit;
      this.offset_nb = offset;
      return this;
    } // -------------------------------------------------------------------------
    // Set
    // -------------------------------------------------------------------------

  }, {
    key: "add",
    value: function add(col, value) {
      this.data_keys.push(col);
      this.data_values.push(value);
      return this;
    }
  }, {
    key: "addRaw",
    value: function addRaw(col, value) {
      this.data_raw_keys.push(col);
      this.data_raw_values.push(value);
      return this;
    }
  }, {
    key: "addList",
    value: function addList(data) {
      var _this5 = this;

      Object.keys(data).map(function (col) {
        _this5.add(col, data[col]);
      });
      return this;
    }
  }, {
    key: "addListRaw",
    value: function addListRaw(data) {
      var _this6 = this;

      Object.keys(data).map(function (col) {
        _this6.addRaw(col, data[col]);
      });
      return this;
    } // -------------------------------------------------------------------------
    // Build
    // -------------------------------------------------------------------------

  }, {
    key: "read",
    value: function read() {
      this.query_str = this._buildSelect() + this._buildFrom() + this._buildJoin() + this._buildWhere() + this._buildGroupBy() + this._buildHaving() + this._buildOrderBy() + this._buildLimit();
      this.query_data = this.where_data.concat(this.having_data);
      return this;
    }
  }, {
    key: "count",
    value: function count() {
      this.query_str = "SELECT\n\tCOUNT(*) AS sum" + this._buildFrom() + this._buildJoin() + this._buildWhere() + this._buildGroupBy() + this._buildHaving() + this._buildOrderBy() + this._buildLimit();

      if (this.group_stmt.length) {
        this.query_str = "SELECT COUNT(*) as sum FROM (\n" + this.query_str + "\n) as QBCOUNT";
      }

      this.query_data = this.where_data.concat(this.having_data);
      return this;
    }
  }, {
    key: "insert",
    value: function insert() {
      this.query_str = this._buildInsert(false);
      this.query_data = this.data_values;
      return this;
    }
  }, {
    key: "replace",
    value: function replace() {
      this.query_str = this._buildInsert(true);
      this.query_data = this.data_values;
      return this;
    }
  }, {
    key: "update",
    value: function update() {
      this.query_str = this._buildUpdate();
      this.query_data = this.data_values.concat(this.where_data);
      return this;
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.query_str = "" + this._buildDelete() + this._buildJoin() + this._buildWhere();

      if (this.order_by.length) {
        this.query_str += this._buildOrderBy();
      }

      if (this.limit_nb) {
        this.query_str += this._buildLimit();
      }

      this.query_data = this.where_data;
      return this;
    }
  }, {
    key: "batch",
    value: function batch(table, data) {
      var _this7 = this;

      var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var keys = Object.keys(data[0]);
      var frag = '(' + Array.from(keys).fill('?').join(',') + ')';
      this.query_str = replace ? 'REPLACE INTO ' : 'INSERT INTO ';
      this.query_str += table + ' (' + keys.join(',') + ') VALUES \n';
      this.query_data = [];
      data.forEach(function (e, k) {
        if (k > 0) _this7.query_str += ',\n';
        _this7.query_str += frag;
        Object.keys(e).forEach(function (k) {
          _this7.query_data.push(e[k]);
        });
      });
      return this;
    }
  }, {
    key: "_buildSelect",
    value: function _buildSelect() {
      if (!this.select_stmt.length) {
        this.select('*');
      }

      var distinct = this.is_distinct ? " DISTINCT" : "";
      return "SELECT" + distinct + this.select_stmt.substring(1);
    }
  }, {
    key: "_buildFrom",
    value: function _buildFrom() {
      return "\nFROM " + this.from_stmt;
    }
  }, {
    key: "_buildJoin",
    value: function _buildJoin() {
      return this.join_stmt;
    }
  }, {
    key: "_buildWhere",
    value: function _buildWhere() {
      while (this.group_level > 0) {
        this.groupEnd();
      }

      if (this.where_stmt.length) {
        return "\nWHERE" + this.where_stmt;
      }

      return "";
    }
  }, {
    key: "_buildGroupBy",
    value: function _buildGroupBy() {
      if (this.group_stmt.length) {
        return "\nGROUP BY" + this.group_stmt.substring(1);
      }

      return "";
    }
  }, {
    key: "_buildHaving",
    value: function _buildHaving() {
      if (this.having_stmt.length) {
        return "\nHAVING" + this.having_stmt;
      }

      return "";
    }
  }, {
    key: "_buildOrderBy",
    value: function _buildOrderBy() {
      if (this.order_by.length) {
        return "\nORDER BY" + this.order_by.substring(1);
      }

      return "";
    }
  }, {
    key: "_buildLimit",
    value: function _buildLimit() {
      if (this.limit_nb) {
        var sql = "\nLIMIT " + this.limit_nb;

        if (this.offset_nb) {
          sql += " OFFSET " + this.offset_nb;
        }

        return sql;
      }

      return "";
    }
  }, {
    key: "_buildInsert",
    value: function _buildInsert() {
      var replace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var keys = '';
      var values = '';

      if (this.data_keys.length) {
        keys += this.data_keys.join(",\n\t\t");
        values += ",\n\t\t?".repeat(this.data_keys.length).substring(1);
      }

      if (this.data_keys.length && this.data_raw_keys.length) {
        keys += ",\n\t\t";
        values += ",\n\t\t";
      }

      if (this.data_raw_keys.length) {
        keys += this.data_raw_keys.join(",\n\t\t");
        values += this.data_raw_values.join(",\n\t\t");
      }

      return (replace ? "REPLACE" : "INSERT") + " INTO\n\t" + this.from_stmt + "(\n\t\t" + keys + "\n\t)\n" + "VALUES \t(" + values + "\n\t)";
    }
  }, {
    key: "_buildUpdate",
    value: function _buildUpdate() {
      var _this8 = this;

      var sql = "UPDATE " + this.from_stmt + this._buildJoin() + "\nSET";
      var update = "";
      this.data_keys.forEach(function (col) {
        update += ",\n\t" + col + " = ?";
      });
      this.data_raw_keys.forEach(function (col, i) {
        update += ",\n\t" + col + " = " + _this8.data_raw_values[i];
      });

      if (update) {
        sql += update.substring(1);
      }

      sql += this._buildWhere();
      return sql;
    }
  }, {
    key: "_buildDelete",
    value: function _buildDelete() {
      var select = "";

      if (this.join_stmt.length) {
        var from = this.from_stmt.split(' ');
        select = from[from.length - 1];
      }

      return "DELETE " + select + " FROM\n\t" + this.from_stmt;
    } // -------------------------------------------------------------------------
    // Result
    // -------------------------------------------------------------------------

  }, {
    key: "query",
    value: function query() {
      return this.query_str;
    }
  }, {
    key: "data",
    value: function data() {
      return this.query_data;
    } // -------------------------------------------------------------------------

  }]);
  return QB;
}();

exports.QB = QB;
//# sourceMappingURL=index.js.map