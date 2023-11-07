var game_pattern = [];
var buttonColours= ['red','blue','green','yellow'];
var userClickedPattern= [];
var startGame = false
var level = 0
function nextSequence(){
    if (startGame)
    {
        var randomNumber = Math.floor(Math.random()*4);
        var chosen_color= buttonColours[randomNumber];
        game_pattern.push(chosen_color);
        $('#'+chosen_color).fadeOut(80).fadeIn(80);
        var sound= new Audio("sounds/"+chosen_color+".mp3");
        sound.play();
        level+=1;
        $('h1').text("Level " + level);
        ans=0;
        userClickedPattern=[]
    }

}



$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    userSound = new Audio ("sounds/"+userChosenColour+".mp3");
    userSound.play();
    animatePress(userChosenColour)
    checkAns(userClickedPattern.length)
    if (userClickedPattern.length==game_pattern.length)
    {
        setTimeout(nextSequence,500)
    }
    
})


$(document).keydown(function(){
    if(startGame == false){
        startGame = true
        level = 0
        userClickedPattern= []
        game_pattern = [];
        nextSequence()
        $('h1').text("Level "+ level)
    }
})


function animatePress(currColor){
    var self= $('.btn#'+currColor)
    self.addClass('pressed');
    setTimeout(function(){
    self.removeClass('pressed');
    },100)
}
function checkAns(currAns){
    if(userClickedPattern[currAns-1] != game_pattern[currAns-1]){
        console.log("false")
        wrongAns()
    }
}
function wrongAns (){
    $('body').addClass('game-over')
    setTimeout(function(){
        $('body').removeClass('game-over');
        },200)
    $('h1').text('Game Over, Press Any Key to Restart')
    startGame=false

}