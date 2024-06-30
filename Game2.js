/*


Think about how you would build this project and write your plan down. 
Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
Deal 26 Cards to each Player from a Deck of 52 cards.
Iterate through the turns where each Player plays a Card.
The Player who played the higher card is awarded a point.
Ties result in zero points for both Players.
After all cards have been played, display the score and declare the winner.

Write a Unit Test using Mocha and Chai for at least one of the functions you write.
*/


class Player{
    constructor(player){
        this.player = player;
        this.point = 0;
        this.playerCard = [];
    }
}

class Card{
    constructor(suit, rank, point){
    this.rank = rank;
    this.suit = suit;
    this.point = point;
    }
}

class Deck{//deck class to build, shuffle and create deck
    constructor(){
            this.deck = [];
            this.suit = ['♠', '♣', '♥', '♦'];
            this.rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            this.point = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    }
    createDeck(){
        for(let i = 0; i < this.suit.length; i++){//loops through the suits
            for (let r = 0; r < this.rank.length; r++){//loops through ranks{
            this.deck.push(new Card(this.suit[i], this.rank[r], this.point[r]))//used r to remember it classifies rank  
        }
    }
    }
    shuffle() { 
        let shuffle = [];
        //should "shuffle" through the card to make them a random card 
        for (let i = 0; i < 52; i++) {
            let randomPosition = Math.floor((this.deck.length - 1) * Math.random());
            let randomItem = this.deck.splice(randomPosition,1);
            shuffle.push(...randomItem);
        }
        return shuffle;
}
    deal(player, shuffle){
        let deal1 = shuffle.splice(0,26)// picks 26 random cards;
        player[0].playerCard.push(...deal1);
        let deal2 = shuffle.splice(0,26)// picks 26 random cards; use splice so they leave the array, no copies
        player[1].playerCard.push(...deal2);//player 0 is first player, player 1 is second player 
    }

}
class Game{
    constructor(){
        this.player = [];
    }
    start(){//i mean this really starts it but needs play game to run
        this.player.push(new Player('Zelda'))
        this.player.push(new Player('Link'))
        console.log('Let the games begin!')

        //Create a deck
        let myDeck = new Deck();   //Callig the class to assign it new parameters with our info
        myDeck.createDeck();     //calling the create deck function in Deck class
        let shuffle = myDeck.shuffle();       //calling the shuffle function from Deck Class

        myDeck.deal(this.player, shuffle); //Adding in  cards to the player array and shuffling them 

        //starts the game like we used in the menu app last week 
        this.playGame();

        //gets the score 
        this.Score();
    }

    playGame(){
        console.log('Begin')
        let player1 = this.player[0]; //takes the first name
        let player2 = this.player[1]; //takes the second name

        let Winner = ''; //start this empty 
        let turn = 0; //starts the game off with nothing 
        
        while(player1.playerCard.length !== 0 && player2.playerCard.length !== 0){   //will play until out of cards
            let player1Card = player1.playerCard.pop();
            let player2Card = player2.playerCard.pop();
            if (player1Card.rank > player2Card.rank){
                Winner = player1.player;
                player1.point += 1;//player 1 gets one point
                console.log('Turn: ', turn += 1, '\n Player1 card: ', player1Card.suit, player1Card.rank, '\n Player 2 card: ', player2Card.suit, player2Card.rank,);
            }else if(player1Card.rank < player2Card.rank){
                Winner = player2.player;
                player2.point += 1;//player 2 gets one point
                console.log('Turn: ', turn += 1, '\n Player1 card: ', player1Card.suit, player1Card.rank, '\n Player 2 card: ', player2Card.suit, player2Card.rank,);
            }
            else{
               console.log('Tie! No points awarded. Turn :', turn += 1, '\n Player1 card: ', player1Card.suit, player1Card.rank, '\n Player 2 card: ', player2Card.suit, player2Card.rank,); 
            }
        }
        console.log('here');
        
    }
    Score(){
        let highestScore = '';//leaving this empty like we did winner
        let player1 = this.player[0]; //takes the first name
        let player2 = this.player[1]; //takes the second name
        let highestPoints = 0;   

        //if statement used to figure out who won
        if (player1.points > player2.points){
            highestPoints = player1.player;
            highestScore = player1.player;
            alert('Finish!! Winner is ', player1.player, 'with', player1.points,'.\n ', player2.player, 'had ', player2.points, '\n BYE!!')
        }else if(player1.points < player2.points){
            highestPoints = player2.player;
            highestScore = player2.player;
            alert('Finish!! Winner is ', player2.player, 'with', player2.points,'.\n ', player1.player, 'had ', player1.points, '\n BYE!!')
        }
        else{
          alert('You both lost.', player1.player,' and ', player2.player);
        }
    }

}


//Call the game class just like we did with menu app

let game = new Game();
game.start();