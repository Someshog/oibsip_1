const inputBox = document.querySelector('.inputbox');
const buttons = document.querySelectorAll('.button');
let calc = '';
console.log(eval('33/2-6'))
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === '=') {

            try {
                inputBox.value = eval(calc);
            } catch (e) {
                inputBox.value = 'Error';
                setTimeout(() => {
                    inputBox.value = '';
                    calc = '';
                }, 2000
                )
            }
        }

        else if (value === 'C') {
            inputBox.value = '';
        }
        else if (value === 'del') {
            let str = inputBox.value;
            let newStr = str.slice(0, -1);
            inputBox.value = newStr;

        }
        else {
            inputBox.value += value;
            calc += value
        }
        calc = inputBox.value;
        calc = calc.replaceAll('x', '*')
    });
});