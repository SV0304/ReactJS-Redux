function testlet(){
	let a = 30;
	if(true){
		let a = 50;
		console.log("In block a:"+a);
	}
	console.log("Outside block a:"+a);
}

testlet();