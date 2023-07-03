//変数を0~15までのランダムな整数を代入する
let num = Math.floor(Math.random()* 16);

//変数numの値を出力する
console.log(num);

//3と5の倍数の時、3と5の倍数ですと出力する
if (num % 3 === 0 & num % 5 === 0) {
  console.log('3と5の倍数です');
}

//3の倍数の時、3の倍数ですと出力する
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

//5の倍数の時、5の倍数ですと出力する
else if (num % 5 === 0) {
  console.log('5の倍数です');
}

//それ以外の時、変数numを出力する
else {
  console.log('変数numを出力する');
}