/**
 * @param {string} sentence
 * @returns {string}
 */
export function removeWhitespaces(sentence: string): string {
  if (sentence) {
    let matchs = sentence.match(/\s{3,}/g);
    if (matchs) {
      matchs = matchs.filter((value, index, self) => { 
        return self.indexOf(value) === index;
      });
      matchs.forEach(match => {
        const regex = new RegExp('(?<=\\S)' + match + '(?=\\S)', 'g');
        const repl = match.substring(0, 2);
        sentence = sentence.replace(regex, repl);
      });
    }
    sentence = sentence.trim();
  }
  return sentence;
};
