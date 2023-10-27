let lines = "1\n0".split("\n");
let count = lines[0];
console.log(count);

for (let i = 0; i < count; i++) {
    let number=lines[i +1];
  //console.log("Hello paiza");
  if (number== 0){
      console.log(`${number}は0`);
  }else if(0<number){
      console.log(`${number}はプラス`);
  }
}
// 入力される値
//1
//0

 //標準入力からの値取得方法はこちらをご確認ください

// 期待する出力値
//1
//0は0