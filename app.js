'use strict'
const memo = new Map();
memo.set (0, 0);
memo.set(1, 1);
function fib(n){
    if(memo.has(n){
        return memo.get(n);
    }
    //連想配列がnをキーとした答えを持っていれば、その値をそのまま関数の値として返す
    //そうでない場合は再帰関数を計算して値を求め、それを連想配列に格納した後に返す

const value = fib(n - 1 ) + fib(n - 2 );
memo.set(n, value);
return value;
}

const length =40;
for (let i= 0; i <= length; i++){
    console.log(fib(i));
}
