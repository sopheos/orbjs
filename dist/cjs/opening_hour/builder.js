"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.builder = builder;

var constant = _interopRequireWildcard(require("./constant"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Créé une horaire au format opening_hours à partir d'une liste d'objets horaires
 * @param {Array<Schedule>} schedules
 * @returns {string | null} opening_hour si horaires valident, null sinon
 */
function builder(schedules) {
  var listRules = [];
  schedules.forEach(function (schedule) {
    var ruleSequence = []; // Période

    if (schedule.period.start && schedule.period.end) {
      // Début période
      var splitStart = schedule.period.start.split('-');
      var dateStart = schedule.period.repeat ? '' : "".concat(splitStart[0], " ");
      var monthStart = constant.scheduleMonths.find(function (month) {
        return month.id === parseInt(splitStart[1], 10);
      });
      if (!monthStart) return null;
      dateStart += "".concat(monthStart.name, " ").concat(splitStart[2]); // Fin période

      var splitEnd = schedule.period.end.split('-');
      var dateEnd = schedule.period.repeat ? '' : "".concat(splitEnd[0], " ");
      var monthEnd = constant.scheduleMonths.find(function (scheduleMonth) {
        return scheduleMonth.id === parseInt(splitEnd[1], 10);
      });
      if (!monthEnd) return null;
      dateEnd += "".concat(monthEnd.name, " ").concat(splitEnd[2]);
      ruleSequence.push("".concat(dateStart, " - ").concat(dateEnd));
    } // Mois


    var monthRange = [];
    schedule.months.forEach(function (month) {
      var scheduleMonth = constant.scheduleMonths.find(function (scheduleMonth) {
        return scheduleMonth.id === month;
      });
      if (!scheduleMonth) return null;
      monthRange.push(scheduleMonth.name);
    });
    if (monthRange.length) ruleSequence.push(monthRange.join(',')); // Jour

    var dayRange = [];
    schedule.days.forEach(function (day) {
      var scheduleDay = constant.scheduleDays.find(function (scheduleDay) {
        return scheduleDay.id === day;
      });
      if (!scheduleDay) return null;
      dayRange.push(scheduleDay.name);
    });
    if (dayRange.length) ruleSequence.push(dayRange.join(',')); // Heure minute

    if (schedule.time.start && schedule.time.end) {
      ruleSequence.push("".concat(schedule.time.start, "-").concat(schedule.time.end));
    } // Status


    var status = constant.scheduleStatus.find(function (status) {
      return status.id === schedule.time.open;
    });
    if (!status) return null;
    ruleSequence.push(status.name);
    listRules.push(ruleSequence.join(' '));
  });
  return listRules.join(';');
}
//# sourceMappingURL=builder.js.map