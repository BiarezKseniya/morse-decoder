const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let numStr = '';
    let searchIndex = 0;
    let searchVal = '';
    let result = '';
    const numArray = Object.keys(MORSE_TABLE).map((element) => {
        numStr = '';
        for (let i = 0; i < element.length; i++) {
            element.slice(i, i + 1) === '.' ? numStr = numStr + '10' : numStr = numStr + '11';

        }
        for (let j = 0; numStr.length < 10; j++) {
            numStr = '0' + numStr;
        }

        return numStr;
    });
    for (let k = 0; k < expr.length; k = k + 10) {
        searchVal = expr.slice(k, k + 10);
        if (searchVal === '**********') {
            result = result + ' ';
        } else {
            searchIndex = numArray.indexOf(searchVal);
            result = result + Object.values(MORSE_TABLE)[searchIndex];
        }
    }
    return result;
}

module.exports = {
    decode
}