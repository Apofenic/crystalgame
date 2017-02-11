
$(document).ready(function() {
	
 	var crystalArray;
 	var number = $('#number');
 	var wins = 0;
 	var losses = 0;
 	var score = 0;


	//function that chooses the random number the user needs to add up to
	function randomNum() {
		
		var targetOne = Math.floor(Math.random() * 101 + 20);
		return targetOne;
	}	

	//function that returns an array of 4 random numbers between 1 and 12
    function crystalNums(){
		var functionArray =[];
		for (i=0; i<4;i++) {
			var choiceNum = Math.floor(Math.random() * 12 + 1);	
			functionArray.push(choiceNum);
		}
		return functionArray;
	}

	//function to reset the game for a new round
    function newRound(){
		randomNum();
		crystalNums();
		number.text(randomNum());
		crystalArray = crystalNums();
		console.log(crystalArray);
		score = 0;
	}
	
	// function GameLogic() {

	// 	var crystalValue = ($(this).attr("data-value"));
 //    	    crystalValue = parseInt(crystalValue);
    	
 //    	score = score + crystalValue;
 //    	$('#score').html(score);
    
	// 	if (score > number.text()){
	// 		losses++;
	// 		$('#losses').html('losses: '+losses);
	// 		$('#response').html('Sorry, That amount is too high');
	// 		newRound();
 //    		console.log("lose");
 //    	};

 //    	if (score == number.text()){
	// 		wins++;
	// 		$('#wins').html('wins: '+wins);
	// 		$('#response').html('You Got it!');
	// 		newRound();
 //    		console.log("win");
 //    };

	

	randomNum();
	crystalNums();
	number.text(randomNum());
	crystalArray = crystalNums();
	console.log(crystalArray);

	

	$('#ruby').on("click", function() {
		var crystals = $('.crystals');
		crystals.attr("data-value", crystalArray[0]);

		//GameLogic();

		var crystalValue = ($(this).attr("data-value"));
    	    crystalValue = parseInt(crystalValue);
    	
    	score = score + crystalValue;
    	$('#score').html(score);
    
		if (score > number.text()){
			losses++;
			$('#losses').html('losses: '+losses);
			$('#response').html('Sorry, That amount is too high');
			newRound();
    		console.log("lose");
    	};

    	if (score == number.text()){
			wins++;
			$('#wins').html('wins: '+wins);
			$('#response').html('You Got it!');
			newRound();
    		console.log("win");
    	};

	});

	$('#emerald').on("click", function() {
		var crystals = $('.crystals');
		crystals.attr("data-value", crystalArray[1]);

		var crystalValue = ($(this).attr("data-value"));
    	crystalValue = parseInt(crystalValue);
    	
    	score = score + crystalValue;
    	$('#score').html(score);
    	console.log(score);

    	if (score > number.text()){
			losses++;
			$('#losses').html('losses: '+losses);
			$('#response').html('Sorry, That amount is too high');
			newRound();
    		console.log("lose");
    	};

    	if (score == number.text()){
			wins++;
			$('#wins').html('wins: '+wins);
			$('#response').html('You Got it!');
			newRound();
    		console.log("win");

    	};
    });

	$('#sapphire').on("click", function() {
		var crystals = $('.crystals');
		crystals.attr("data-value", crystalArray[2]);

		var crystalValue = ($(this).attr("data-value"));
    	crystalValue = parseInt(crystalValue);
    	
    	score = score + crystalValue;
    	$('#score').html(score);
    	console.log(score);
		

		if (score > number.text()){
			losses++;
			$('#losses').html('losses: '+losses);
			$('#response').html('Sorry, That amount is too high');
			newRound();
    		console.log("lose");
    	};

    	if (score == number.text()){
			wins++;
			$('#wins').html('wins: '+wins);
			$('#response').html('You Got it!');
			newRound();
    		console.log("win");
		};
	});

	$('#amethyst').on("click", function() {
		var crystals = $('.crystals');
		crystals.attr("data-value", crystalArray[3]);

		var crystalValue = ($(this).attr("data-value"));
    	crystalValue = parseInt(crystalValue);
    	
    	score = score + crystalValue;
    	$('#score').html(score);
    	console.log(score);

    	if (score > number.text()){
			losses++;
			$('#losses').html('losses: '+losses);
			$('#response').html('Sorry, You Lose');
			newRound();
    		console.log("lose");
    	};

    	if (score == number.text()){
			wins++;
			$('#wins').html('wins: '+wins);
			$('#response').html('You Got it!');
			newRound();
    		console.log("win");

    	};

	});


	

});	
	 



  	

  
	

  







