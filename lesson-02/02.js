let dice1 // your code
let dice2 // your code
let isWinningDouble=false // your code

dice1=Math.floor(1+Math.random()*6);
dice2=Math.floor(1+Math.random()*6);
if(dice1===dice2 && dice1>3){
    isWinningDouble=true;
}

console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)
if (isWinningDouble) {
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
}
