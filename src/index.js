/**
 * const,let変数宣言の特徴
 */

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数の上書き";
// console.log(val1);

// var val1 = "var変数の再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数の上書き";
// console.log(val2);

// let変数の再宣言は、できない
// let val2 = "let変数の再宣言"；
// console.log(val2);

const val3 = "const変数";
console.log(val3);

// const変数の上書き、及び、再宣言は、できない
// val3 = "const偏すの上書き";

// const val3 = "const変数の再宣言"

// const変数にオブジェクト
const val4 = {
  name: "hyoutan",
  age: 10
};
// constで定義したオブジェクトはプロパティの変更が可能
// nameオブジェクトの上書き
val4.name = "ひょうたん";
// オブジェクトにsexを追加
val4.sex = "おとこ";
console.log(val4);
// constで定義した配列はプロパティの変更が可能
// const変数に配列
const val5 = ["dog", "cat"];
// 配列[0]にfishを上書き
val5[0] = "fish";
// 配列にhumanを追加
val5.push("human");
console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "hyoutan";
// const age = 10;
// 「私の名前はhyoutanです。10歳です。」
// 従来の記述
// const message1 = "私の名前は" + name + "です。" + age + "歳です。";
// console.log(message1);
// テンプレート文字列を使った記述
// const message2 = `私の名前は${name}です。${age}歳です。`;
// console.log(message2);

/**
 * アロー関数の使い方
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です。"));

const func1 = function (str) {
  return str;
};
console.log(func1("func1です。"));

// アロー関数を使った記述
const func2 = (str) => {
  return str;
};
console.log(func2("func2です。"));

// const func3 = (nam1, nam2) => {
//   return nam1 + nam2;
// }
// {}の省略 処理が1行で終わる場合
const func3 = (nam1, nam2) => nam1 + nam2;
console.log(func3(11, 22));

/**
 * 分割代入
 */
// 変数を用意
// const myProfile = {
//   name: "hyoutan",
//   age: 20
// };
// const message3 = `私の名前は${myProfile.name}です。${age}歳です。`;
// console.log(message3);

//指定のオブジェクトからプロパティを抜き出す
// const { name, age } = myProfile;
// const message3 = `私の名前は${myProfile.name}です。${age}歳です。`;
// console.log(message3);

// 配列を用意
// const myProfile = [`hyoutan`, 33];
// console.log(`私の名前は${myProfile[0]}です。${myProfile[1]}です。`);
//指定の配列からプロパティを抜き出す 配列格納順序に気を付ける[0,1,2,3,4・・]
// const [name, age] = myProfile;
// console.log(`私の名前は${name}です。${age}です。`);

/**
 * デフォルト値
 */
// ★よくわからから後回し。動作は「省略記述」参考。
// const sayhello = (name) => {
//   return name;
// };
// sayhello("hyoutan");
// console.log(sayhello("hyoutan"));

// const message4 = `ようこそ。${name}さん。`
// console.log(message4);

// 省略記述
const sayHello = (name = "ゲスト") => console.log(`ようこそ。${name}さん。`);
sayHello("hyoutan");

/**
 * スプレット構文
 */
// 配列の展開 指定した配列を順番に取り出す
const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);
// // その１
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);
// // その2
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// 配列の複製・結合
const arr4 = [10, 20];
const arr5 = [30, 40];
// 複製
const arr6 = [...arr4];
console.log(arr6);
// 結合
const arr7 = [...arr4, ...arr5];
console.log(arr7);
// 配列の複製ではなく、代入を使った場合
const arr8 = arr4;
arr8[0] = 100;
console.log(arr8);
// ※arr4の値も100で上書きされてしまう
console.log(arr4);
/**
 * mapやfilterを使った配列
 */
// 従来の記述 for文で配列の値を抽出
const nameArr = ["山田", "田中", "ひょうたん"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }
// 並び順の表示 (引数)
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は、${nameArr[index]}です。`);
// }
// map関数 ある配列を別の配列に格納
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// });
// console.log(nameArr2);

// map関数
// nameArr.map((name) => console.log(name));
// 引数(順番)を使った記述
nameArr.map((name, index) => console.log(`${index + 1}番目は、${name}です。`));
// 条件をつけて配列を抽出・加工 例) ひょうたん以外の名前にさんを付ける
const NewNameArr = nameArr.map((name) => {
  if (name === "ひょうたん") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(NewNameArr);

// filter 配列から特定の条件で値を返す
const numArr = [1, 2, 3, 4, 5];
const NewNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(NewNumArr);
/**
 * 三項演算子 モダンJSではない。if文の代わり
 */
// ある条件 ? 条件がtrueの時:条件がfalseの時
// const val1 = 1 < 0 ? `trueです` : `falseです`;
// console.log(val1);
// // 数値の真偽を判定してカンマ区切りに変換
// const num = 1300000;
// const formattedNum =
//   typeof num === `number` ? num.toLocaleString() : `数値型を入力して下さい。`;
// console.log(formattedNum);
// // 数値の閾値を判定してコメントを返却
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を超えています。` : `許容範囲です。`;
// };
// console.log(checkSum(50, 60));

/**
 * 論理演算子の意味
 */
const flag1 = true;
const flag2 = false;
if (flag1 || flag2) {
  console.log("どちらかがtrueです");
}
if (flag1 && flag2) {
  console.log("どちらもtrueです");
}
// || (パイプライン) の左がfalseなら右を返却
const num = "100";
const fee = num || "金額未設定です。";
console.log(fee);
// && (アンパサンド) の左がtrueなら右を返却
const num2 = null;
const fee2 = num2 && "値がセットされました。";
console.log(fee2);
