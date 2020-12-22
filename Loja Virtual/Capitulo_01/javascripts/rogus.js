//var total = document.getElementById("total");				
//var formattedText = floatToMoneyText(moneyTextoToFloat(total.innerHTML));
//writeTotal(3.14159);
//alert(formattedText === total.innerHTML);

function moneyTextoToFloat(text){
	var cleanText = text.replace("R$","").replace(",",".");	
	return parseFloat(cleanText);
}

function floatToMoneyText(value){
	var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
	text = "R$" + text;
	return text.substr(0, text.length - 2) + "," + text.substr(-2);
}

function readTotal(){
	var total = document.getElementById("total");
	return moneyTextoToFloat(total.innerHTML);
}

function writeTotal(value){
	var total = document.getElementById("total");
	total.innerHTML = floatToMoneyText(value);
}