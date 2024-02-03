function fizzBuzz(n) {
  let res = "";
  for (var i = 1; i <= n; i++) {
    i % 15 === 0
      ? (res = "fizzbuzz")
      : i % 3 === 0
      ? (res = "fizz")
      : i % 5 === 0
      ? (res = "buzz")
      : (res = i);
    console.log(res);
    // if (i % 3 === 0 && i % 5 === 0) {
    //     console.log("fizzbuzz");
    // }
    // else if (i % 3 === 0) {
    //     console.log("fizz");
    // }
    // else if (i % 5 === 0) {
    //     console.log("buzz");
    // }
    // else {
    //     console.log(i);
    // }
  }
}
fizzBuzz(20);
module.exports = fizzBuzz;
