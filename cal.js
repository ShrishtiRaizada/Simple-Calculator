
let display = document.getElementById('display');
buttons = document.querySelectorAll('button');

let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (event) => {
        buttonText = event.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {

            buttonText = '*';
            screenValue += buttonText;
            display.value = screenValue;

        }
        else if (buttonText == 'AC') {

            screenValue = "";
            display.value = screenValue;

        }
        else if (buttonText == '=') {

            display.value = eval(screenValue);

        }
        else {

            screenValue += buttonText;
            display.value = screenValue;

        }

    })
}

