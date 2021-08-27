
let input2 = document.querySelectorAll('input');

function getLocalStorageData() {

    for (let i = 0; i < input2.length; i++) {
        if (localStorage.getItem('language') == input2[i].value) {
            input2[i].checked = true;
        }
        if (localStorage.getItem('currency') == input2[i].value) {
            input2[i].checked = true;
        }
    }
}

function setLocalStorageData() {
    for (let i = 0; i < input2.length; i++) {
        if (input2[i].checked == true && input2[i].name == "language") {
            document.cookie = input2[i].name + '=' + input2[i].value;
            localStorage.setItem('language', input2[i].value)
        }
        if (input2[i].checked == true && input2[i].name == "currency") {
            document.cookie = input2[i].name + '=' + input2[i].value;
            localStorage.setItem('currency', input2[i].value)
        }
    }
}

document.body.addEventListener('load', getLocalStorageData())

