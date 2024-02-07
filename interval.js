// x++ vs ++x
// i++ vs ++i

console.log("first");
console.log("second");
let seconds = 0;
const intervalId = setInterval(() => {
  console.log(++seconds);
  if (seconds === 10) {
    clearInterval(intervalId);
  }
}, 1);

console.log("foruth");
console.log("fifth");
