export class Student{
		constructor(name,age){
			this.name = name;
			this._age = age;
		}

		getName(){
			return this.name;
		}
		setName(value){
			this.name = value;
		}

		set age(value){
			this._age = value;
		}

		get age(){
			return this._age;
		}
	}	

