function writeCards(listFriends, celebratedDay){
    let thankCard = [];
    for (let i=0; i<listFriends.length; i++){
      thankCard.push(`Thank you, ${listFriends[i]}, for the wonderful ${celebratedDay} gift!`);
    }

    return thankCard;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(){
    let i = 10;
    while(i >= 0){
        console.log(i);
        i--;
    }
}

countDown(10);


