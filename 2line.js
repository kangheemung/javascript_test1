
let lines = "2\n3".split("\n");

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);

if (a >= 0 && a <= 100 && b >= 0 && b <= 100) {
  console.log(a*b);
} else {
  console.log("入力値が範囲外です。");
}


