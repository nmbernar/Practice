var letterCounter = function(name){
	var length = name.length;
	var totalvowels = 0;
	var totalconsonants = 0;
	for(var i = 0; i < length; i++){
		switch(name[i]){
			case "a":
			case "e":
			case "i":
			case "o":
			case "u":
				totalvowels++;
				break;
			case " ":
				break;
			default:
				totalconsonants++;
				break;
		}
	}
	var letters = new Array();
	letters[0] = totalvowels;
	letters[1] = totalconsonants;
	return letters;
}


var b2D = function(binary){
	var place = binary.length - 1;
	var total = 0;
	for(var i = 0; i < place+1; i++){
		total += Math.pow(2, place-i) * binary[i];
	}
	return total;
};

var d2B = function(decimal){
	var binary = new Array();
	index = 0;
	while(decimal !== 0){
		remainder = decimal % 2;
		binary[index++] = remainder;
		decimal = Math.floor(decimal / 2);
	}
	/*
	var place = index - 1;
	for(place; place >= 0; place--){
		document.write(binary[place]);
	}*/
	var newBinary = new Array();
	for(var i = 0; i < index+1; i++){
		newBinary[i] = binary[index-i];
	}
	return newBinary;
}

var primeFinder = function(number){
	for(var i=2; i < number; i++){
		if(number%i == 0){
			return "No.";
		}
	}
	return "Yes.";
}


$(document).ready(function(){
	$('#button1').click(function(){
		var input = $('input[name=dinput]').val();
		var answer = d2B(input);
		$('#result').html(answer);
	});
	$('#button2').click(function(){
		var input = $('input[name=binput]').val();
        var answer = b2D(input);
        $('#result').html(answer);
	});
	$('#button3').click(function(){
   		var input = $('input[name=nameinput]').val();
        var answer = letterCounter(input);
        $('#result').html("You have " + answer[0] + " vowels and " + answer[1] + " consonants.");
    });
	$('#button4').click(function(){
   	 var input = $('input[name=pinput]').val();
        var answer = primeFinder(input);
        $('#result').html(answer);
    });
});

