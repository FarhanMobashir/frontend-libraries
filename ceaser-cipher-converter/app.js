// variables

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const output = document.querySelector('.output');
const reset = document.querySelector('.reset');




// event listener

button.addEventListener('click', ceaserCipher);
button.addEventListener('click', function (e) {
    e.preventDefault();
});

reset.addEventListener("click", resetFunc);

// reset function


function resetFunc(e) {
    output.innerHTML = '';
    input.value = '';
}
function ceaserCipher(str) {
    str = input.value.toUpperCase();
    let result;
    let arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charCodeAt();

    }

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > 64 && arr[j] < 78) {
            arr[j] = String.fromCharCode(arr[j] + 13);
        }
        if (arr[j] > 64 && arr[j] <= 90 && arr[j] > 78) {
            arr[j] = String.fromCharCode(arr[j] - 13);
        }
        else if (arr[j] == 78) {
            arr[j] = String.fromCharCode(arr[j] - 13);
        }

        else if (arr[j] > 0 && arr[j] < 64) {
            arr[j] = String.fromCharCode(arr[j]);
        }

    }
    result = arr.join("");
    output.innerHTML = result;

}
