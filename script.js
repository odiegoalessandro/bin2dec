function toDecimal(bin) {
    const reversed = bin.split('').reverse();
    let dec = 0;

    for (let c = 0; c < reversed.length; c++) {
        if (reversed[c] === '1') {
            dec += Math.pow(2, c);
        }
    }

    return decimalNumber.innerText = dec
}

var binaryNumber = document.querySelector('.binaryNumber')
var decimalNumber = document.querySelector('.decimalNumber')
var btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    toDecimal(binaryNumber.value)
})