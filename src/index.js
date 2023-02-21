module.exports = function toReadable (number) {
  let strNum = number.toString();
  let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',  'nine',  'ten',  'eleven',  'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',  'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number === 0) return 'zero';
  else if (number < 20) return units[number]; 
  else if (number < 100) return (tens[strNum[0]] + ' ' + units[strNum[1]]).trim();
  else if (number < 1000) {
    if (strNum[1] === '0' && strNum[2] === '0') return units[strNum[0]] + ' hundred';
    else return (units[strNum[0]] + ' hundred ' + toReadable(Number(strNum[1]) * 10 + Number(strNum[2]))).trim();
  }
}