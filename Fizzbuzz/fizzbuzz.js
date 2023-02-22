function fizzbuzz() {
    input = document.querySelector('#fizzbuzz-input').value
    const outputElem = document.getElementById('fizzbuzz-output');

    if (input <= 0) {
        outputElem.innerText = 'Not a positive integer';
    }
    else {
        let str = 'Given: ' + input + '\n';

        for (let i = 1; i <= input; i++) {
            let tempStr = '';

            if (i % 15 === 0) {
                tempStr = 'Fizzbuzz (' + i + ')\n';
            }
            else if (i % 5 === 0) {
                tempStr = 'Buzz (' + i + ')\n';
            }
            else if (i % 3 === 0) {
                tempStr = 'Fizz (' + i + ')\n';
            }
            else {
                tempStr = i + '\n';
            }

            str += tempStr;
        }

        outputElem.innerText = str;
    }
}