process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
let lines = [];
let reader = require('readline').createInterface({
input: process.stdin,
output: process.stdout
});
function printNum(N) {
for (let i =1; i<=N; i++) {
console.log(i);
}
}
reader.on('line', (line) => {
const N=parseInt(line);
printNum(N);
});