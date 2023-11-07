var diceOne=Math.floor(Math.random()*6)+1
var diceTwo=Math.floor(Math.random()*6)+1
document.querySelector(".img1").setAttribute("src","images/dice"+ diceOne+".png")
document.querySelector(".img2").setAttribute("src","images/dice"+ diceTwo+".png")
if (diceOne>diceTwo){
    document.querySelector("h1").textContent="🚩Player 1 Wins"
}
else if (diceOne==diceTwo){
    document.querySelector("h1").textContent="Draw"
}
else{
    document.querySelector("h1").textContent="Player 2 wins🚩"
}