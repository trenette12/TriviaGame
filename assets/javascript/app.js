var answersRight = 0;
var answersWrong = 0; 
var countdown;
var timeElapsed = 30;

//Game Timer function that calls the countdownStart function//
function gameTimer(){
	countdownStart();
}
//countdownStart function that starts the timer. When user runs out of time, the results page will appear.//
function countdownStart() {
	countdown = setTimeout("countdownStart()", 1000);
	if (timeElapsed > 0) {
		timeElapsed--;
		$("#timer").html("Time Left: " + timeElapsed);		
	} else {
		$("#sports-trivia-form").hide();
		$("#score").show();
	}

}
//This clearTimer function will clear the timer and start over//
function clearTimer() {
	clearTimeout(countdown);
}

function refreshPage(){
	setTimeout(function(){
	location.reload();
	}, 5 * 1000);
}

//This startGame function will start once the user clicks the start button. Once the button is clicked the questions form will appear.
$(document).ready(function startGame(){
    $("#startgame").click((function(){
    $("#sports-trivia-form").show();
    $("#sports-trivia-form").removeClass("hidden");
    $("#donebutton").removeClass("hidden");
    gameTimer();

        // initGame();
    }))
        endGame();

});
//When user clicks on the correct answer which has a class of a4 it will be added to the answersRight variable, else they'll be added to the answersWrong variable.//
$(document).ready(function(){
	$("#donebutton").on("click", function() {
		if ($("#a4").is(':checked')) {
			answersRight++;
			$("#right-answers").html("Right Answers: " + answersRight);
		} 		else {
			answersWrong++;
			$("#wrong-answers").html("Wrong Answers: " + answersWrong);
		} if ($("#a6").is(':checked')) {
			answersRight++;
			$("#right-answers").html("Right Answers: " + answersRight);
		} 		else {
			answersWrong++;
			$("#wrong-answers").html("Wrong Answers: " + answersWrong);
		}	if ($("#a11").is(':checked')) {
			answersRight++;
			$("#right-answers").html("Right Answers: " + answersRight);
		} 		else {
			answersWrong++;
			$("#wrong-answers").html("Wrong Answers: " + answersWrong);
		}	if ($("#a13").is(':checked')) {
			answersRight++;
			$("#right-answers").html("Right Answers: " + answersRight);
		} 		else {
			answersWrong++;
			$("#wrong-answers").html("Wrong Answers: " + answersWrong);
		}	if ($("#a19").is(':checked')) {
			answersRight++;
			$("#right-answers").html("Right Answers: " + answersRight);
		} 
		else {
			answersWrong++;
			$("#wrong-answers").html("Wrong Answers: " + answersWrong);
		}
	})

});
//this function hides the trivia form and shows the results of the trivia game//
function endGame() {
	$("#donebutton").on("click", function(){
		$("#sports-trivia-form").hide();
		$("#startgame").show();
		$("#score").show();
		clearTimer();
		refreshPage();

	})
};


	// $(document).on("click", ".a4", function() {
	// 	answersRight++;
	// 	$("#right-answers").append(" " + answersRight);


	// })
	// console.log(initGame);
 //    };
