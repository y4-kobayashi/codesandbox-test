/**
 *  テンプレート文字列
 *  */

// const name = "yuri";
// const age = 26;

// // 従来
// const message = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message);

// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です!`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(10, 20));
