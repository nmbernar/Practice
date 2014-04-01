var letterCounter = function(){
	var name = prompt("What is your name?");
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
	document.write("Your name has " + totalvowels + " vowels and " + totalconsonants + " consonants.");
}


var b2D = function(){
	var binary = prompt("Binary value to convert? ");
	var place = binary.length - 1;
	var total = 0;
	for(var i = 0; i < place; i++){
		total += Math.pow(2, place-i) * binary[i];
	}
	document.write(total);
};

var d2B = function(){
	var decimal = prompt("Decimal value to convert? ");
	var binary = new Array();
	index = 0;
	while(decimal !== 0){
		remainder = decimal % 2;
		binary[index++] = remainder;
		decimal = Math.floor(decimal / 2);
	}
	var place = index - 1;
	for(place; place >= 0; place--){
		document.write(binary[place]);
	}
return true;
}

