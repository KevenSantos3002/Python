let val1 = 6
let val2 = 6
let val3 = 6
if (val1 == val2 && val1 == val3) {
    console.log("Os valores são iguais")

} else {
    if (val1 > val2 && val1 > val3) {
        console.log(" O maior valor é  " + val1)
    } else if (val2 > val1 && val2 > val3) {
        console.log(" O maior valor é " + val2)
    } else {
        console.log(" O maior valor é " + val3)
    }
}