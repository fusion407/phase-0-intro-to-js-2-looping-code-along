
function writeCards() {
    const name = ["Guadalupe", "Ollie", "Aki"];
    const msg = [];
    for(let i = 0; i < name.length; i++) {
        msg[i] = `Thank you, ${name[i]}, for the wonderful surprise gift!`;
    }
    return msg;
}
function countDown(n) {
    while(n >= 0) {
        console.log(n);
        n--;
    }
}