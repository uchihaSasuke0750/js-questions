let a = true;

let c = 0;

setTimeout(() => {
  a = false;
}, 2000);

while (a) {
  console.log(c++);
}
