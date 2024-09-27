/**
 * @param {string} sentence
 * @returns {string}
 */
export function removeWhitespaces(sentence) {
  if (sentence) {
    var matchs = sentence.match(/\s{3,}/g);

    if (matchs) {
      matchs = matchs.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
      matchs.forEach(function (match) {
        var regex = new RegExp('(?<=\\S)' + match + '(?=\\S)', 'g');
        var repl = match.substring(0, 2);
        sentence = sentence.replace(regex, repl);
      });
    }

    sentence = sentence.trim();
  }

  return sentence;
}
;
//# sourceMappingURL=whitespaces.js.map