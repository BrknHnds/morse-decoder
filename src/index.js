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
    let morzeTableBinary = {};
    morzeTableBinary[' '] = '**********';
    for (const iterator in MORSE_TABLE) {
        morzeTableBinary[MORSE_TABLE[iterator]] = String(iterator.replace(/-/g, '11').replace(/\./g, '10'));
    }
    let slicedExprArr = [];
    for (let i = 0; i < expr.length; i += 10) {
        slicedExprArr.push(expr.slice(i, i + 10).replace(/00+/g, ''));
    }
    let result = '';
    slicedExprArr.forEach(e => {
        for (const key in morzeTableBinary) {
            if (e == morzeTableBinary[key]) {
                result += `${key}`;
                return;
            }
        }
    })
    return result;
}

module.exports = {
    decode
}