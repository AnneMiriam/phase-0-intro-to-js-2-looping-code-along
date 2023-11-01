// Code your solutions in this file
const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards, event) {
    let thanks = [];
    for (let i = 0; i < cards.length; i++){
        thanks.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    }
    return thanks;
};

function countDown(x){
    let i = x;
    while (i >= 0){
        console.log(i--);
    }
}