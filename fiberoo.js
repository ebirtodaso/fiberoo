function fib() {
  let count = 0;
  let memo = 1;
  const arr = [];
  for (let i = 0; arr.length < 50; i++) {
    arr.push(count);
    arr.push(memo);
    count += memo;
    memo += count;
  }
  return arr;
}

function numsToStrings(arr) {
  return _.map(arr, (num) => num.toString());
}

function numEvenNums(arr) {
  return _.filter(arr, (num) => num % 2 === 0).length;
}

console.log(fib());
console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));
