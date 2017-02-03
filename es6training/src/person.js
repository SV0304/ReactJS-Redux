import {Student} from 'student';

class Person extends Student{
		constructor(name,age,citizen){
			super(name,age);
			this.citizen = citizen;
		}

		getCitizen(){
			return this.citizen;
		}
		setCitizen(citizen){
			this.citizen = citizen;
		}
		getName(){
			return super.getName();
		}
	}

	var p1 = new Person("Shaju",35,"INDIAN");
	console.log(p1.getCitizen());
	console.log(p1.getName());