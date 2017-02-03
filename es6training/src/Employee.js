	class Employee{
		constructor(name,salary){
			this.name = name;
			this.salary = salary;
		}
		show(){
			console.log(this.name+this.salary);
		}
	}

	var e1 = new Employee("Shaju",5000);
	e1.show();
