module.exports = function reverse (n) {
  //start reverse int task
  let strnum = Math.abs(n)+ '';
  let reverseNum = '';
  strnum.split('').reverse().forEach(digit => reverseNum += digit);
  return reverseNum*1;
}
