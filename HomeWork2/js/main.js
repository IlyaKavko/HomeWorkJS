// Первое задание

let str = prompt('Введите слово')
function checkPalindrom(str) {
    if (str == str.split('').reverse().join('')) {
        console.log('Это палиндром');
    } else {
        console.log('Это не палиндром');
    }
}
checkPalindrom(str);

// Второе задание

function min(a, b) {
    return a < b ? a : b;
}
console.log(min(35,25));

function max(a, b) {
    return a > b ? a : b;
}
console.log(max(834,775));

// Третье задание

function randomIn() {
    return Math.floor(Math.random() * 100) + 1;
}

function getRandom() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(randomIn());
    }
    return arr;
}


function getZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      let arrNumber = arr[i].toString().split('');
      for (let j = 0; j < arrNumber.length; j++) {
          if(arrNumber[j] === '0') {
              arrNumber.splice(j, 1, 'zero');
              arr.splice(i, 1, arrNumber.join(''));
          }
      }
    }
    return arr;
}

let zeroArr = getRandom();
console.log(zeroArr);
console.log(getZero(zeroArr));