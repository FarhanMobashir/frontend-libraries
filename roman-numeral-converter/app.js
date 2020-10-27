// variables

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const output = document.querySelector('.output');
const reset = document.querySelector('.reset');




// event listener

button.addEventListener('click', convertToRoman);
button.addEventListener('click', function (e) {
    e.preventDefault();
});

reset.addEventListener("click", resetFunc);

// reset function


function resetFunc(e) {
    output.innerHTML = '';
    input.value = '';
}


function appender(n) {
    let one = 'I';
    let five = 'V';
    let ten = 'X';
    let fifty = 'L';
    let hundred = 'C';
    let fiveHun = 'D';
    let thousand = 'M';


    // exceptional cases

    if (n == 4 && n.length == 1) {

        return 'IV';
    }
    if (n == 0) {

        return '';
    }

    if (n == 9 && n.length == 1) {

        return 'IX';
    }

    if (n == 40 && n.length == 2) {

        return 'XL';
    }

    if (n == 90 && n.length == 2) {

        return 'XC';
    }

    if (n == 400 && n.length == 3) {

        return 'CD';
    }

    if (n == 900 && n.length == 3) {

        return 'CM';
    }




    // main cases

    if (n < 4 && n > 0 && n.length == 1) {

        return one.repeat(n);
    }

    if (n < 9 && n >= 5 && n.length == 1) {

        return five + one.repeat(n - 5);
    }

    if (n >= 10 && n < 40 && n.length == 2) {

        return ten.repeat(n[0]);
    }

    if (n < 90 && n > 40 && n.length == 2) {

        return fifty + ten.repeat(n[0] - 5);
    }

    if (n >= 100 && n < 400 && n.length == 3) {

        return hundred.repeat(n[0]);
    }

    if (n >= 500 && n < 900 && n.length == 3) {

        return fiveHun + hundred.repeat(n[0] - 5);
    }

    if (n >= 1000 && n < 4000 && n.length == 4) {

        return thousand.repeat(n[0]);
    }
}
function convertToRoman(num) {

    num = input.value;

    let result = '';
    let exp = [];
    //  let converter = appender();
    let zero = '0'
    let str = num.toString().split("");
    for (let i = 0; i < str.length; i++) {
        exp.push(str[i] + zero.repeat(str.length - i - 1))
    }
    for (let j = 0; j < exp.length; j++) {
        result = result.concat(appender(exp[j]))
    }
    output.innerHTML = result;
}

console.log(convertToRoman(num));

