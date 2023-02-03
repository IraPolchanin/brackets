module.exports = function check(str, bracketsConfig) {

  while (str.length) {
    const len = str.length;

    bracketsConfig.map(el => {
      str = str.replace((el[0] + el[1]), '');
    });

    if (str.length == len) return false;
  }

  return true;
}
