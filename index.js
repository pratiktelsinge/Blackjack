let cards=[];
let sum=0;
let message='';
let hasBlackJack=false;
let isAlive=false;
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardEl=document.getElementById("cards-el");

function getRandomCard()
{
    let randomNum=Math.floor(Math.random()*13);
    if(randomNum > 10){
        return 10;
    }
    else if(randomNum === 1){
    return 11;
    }
    else
    {
    return randomNum;
    }
}

function startGame()
{
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame();
}

function renderGame()
{
    cardEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum<21)
    {
     message="Do want to draw a new card?"
    }
    else if(sum===21)
    {
        message="You've got Blackjack!"
        hasBlackJack=true;
    }
    else
    {
        message="You're out of game!"
        isAlive=false
    }
    messageEl.textContent=message;
}

function getNewCard()
{
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
