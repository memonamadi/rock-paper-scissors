(function() {

	var endOfGame = false;

	$("button").on("click", function() {
  
  		var userChoice = $("button").data("id");
  		var choices = ["rock", "paper", "scissors"];
  		var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  		var showResult = $("#feedback p");
  		var scoreContainer = $("#score");
  		var userScoreContainer = $("#user_score p");
  		var computerScoreContainer = $("#computer_score p");
  		var userScore = 0;
  		var computerScore = 0;
  		var userOldScore = userScoreContainer.html();
  		var computerOldScore = computerScoreContainer.html();
  		var userNewScore;
  		var computerNewScore;
      var overlay = $("#overlay");
  		var gameResult = $("#overlay p");
      var playAgainButton = $("#overlay button");

  		results(userChoice, computerChoice);

  		if(endOfGame) {
  			endOfGame = false;
  			resetScore();
  			resetEndGameMessage();
  		}

  		endGameMessage();
      playAgain();

  		function results(choice1, choice2) {
    
    		var Element = function(name, defeats, loses) {
      			this.name = name;
      			this.defeats = defeats;
      			this.loses = loses;
    		};

    		var rock = new Element("rock", "scissors", "paper");
    		var paper = new Element("paper", "rock", "scissors");
    		var scissors = new Element("scissors", "paper", "rock");

    		var obj = [rock, paper, scissors];
    
    		for(var i = 0; i < obj.length; i++) {
      
      			if(obj[i].name === choice1) {
        
        			switch(choice2) {
          				case obj[i].defeats:
            				showResult.html(obj[i].name + " defeats " + obj[i].defeats);
            				userNewScore = parseFloat(userOldScore) + 1;
            				userScoreContainer.html(userNewScore);
            				break;
          				case obj[i].loses:
            				showResult.html(obj[i].name + " loses to " + obj[i].loses);
            				computerNewScore = parseFloat(computerOldScore) + 1;
            				computerScoreContainer.html(computerNewScore);
            				break;
          				case obj[i].name:
            				showResult.html(obj[i].name + " ties " + obj[i].name);
            				break;
        			}

      			} // end if statement
      
    		} // end for loop

  		} // end result()

  		function resetScore() {
    		userNewScore = 0;
    		userScoreContainer.html(userNewScore);
    		computerNewScore = 0;
    		computerScoreContainer.html(computerNewScore);
  		}
  
  		function endGameMessage() {
    		if(userNewScore == 5) {
            $(overlay).addClass('visible');
      			$(gameResult).append("YOU WIN!");
      			endOfGame = true;
    		} else if(computerNewScore == 5) {
            $(overlay).addClass('visible');
      			$(gameResult).append("GAME OVER!");
      			endOfGame = true;
    		}
  		}

  		function resetEndGameMessage() {
    		$(gameResult).html("");
        $(showResult).html("");
  		}

      function playAgain() {
        $(playAgainButton).on('click', function(){
          $(overlay).removeClass('visible');
        });
      }
 		
	}); // end click event

})(); 
