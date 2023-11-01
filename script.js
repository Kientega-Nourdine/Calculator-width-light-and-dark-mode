const mode = document.querySelector('.mode');
const displayScreen = document.querySelector('.display-screen');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');

//////////////////////// Mode ///////////////////////
mode.addEventListener('click', () => {
    window.document.body.classList.toggle('light-mode-variables');
});

//////////////// Calculator /////////////////
const buttons = document.querySelectorAll('.btn');

buttons.forEach((item) => {

    item.addEventListener('click', () => {
        if (item.id == 'clear'){
            displayScreen.textContent = '';
        } else if (item.id == 'del') {
            let string = displayScreen.textContent.toString();
            displayScreen.textContent = string.substring(0, string.length - 1);
        } else if ( displayScreen.textContent != '' && item.id == 'equal') {
            displayScreen.textContent = eval(displayScreen.textContent);
        } else if (displayScreen.textContent == '' && item.id == 'equal') {
            displayScreen.textContent = 'Empty';
            setTimeout(() => { displayScreen.textContent = ''}, 2000);
        } else { 
            displayScreen.textContent += item.id;
        }
    })
});