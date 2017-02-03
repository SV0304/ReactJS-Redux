function getMonthlyPayment(){
	var principal = document.getElementById("principal").value;
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var c = new Calculator(principal, rate, years);
	document.getElementById("result").innerHTML = "$"+c.calculateMonthlyPayment();
}