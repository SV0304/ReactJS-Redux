class Calculator{
	constructor(p,r,y){
		this.principal = p;
		this.rate = r;
		this.years = y;
	}

	calculateMonthlyPayment(){
		let monthlyRate = this.rate / 100 / 12;
		console.log(monthlyRate)
		let monthlyPayment = this.principal * monthlyRate/(1 - (Math.pow(1/(1+monthlyRate),this.years*12)));
		return monthlyPayment.toFixed(2);
	}
}