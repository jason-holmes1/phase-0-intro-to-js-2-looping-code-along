const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for(let i=0; i< gifts.length; i++){
        console.log('Wrapped ${gifts[i]} and added a bow!');
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);

function writeCards(names, message){
    const card = names;
    const cards = [];
    for(let i=0; i< names.length;i++){
       console.log('Thank you, ${names[i]} for the wonderful ${message} gift!');
       cards[i] = 'Thank you, '+names[i]+', for the wonderful ' +message+ ' gift!';
        debugger;
    }
    return cards;
}

function countDown(num){
    while(num>=0){
        console.log(num);
        num--;
    }
}
