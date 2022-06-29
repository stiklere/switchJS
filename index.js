// Write a myNew function that replicates	all	the	behavior	of	the	new	operator.
// This	function	should	take	one	function	parameter	(the	constructor),	plus	an	unknown	
// number	of	additional	parameters	of	any	type	(arguments	for	the	constructor).
// When	invoked,	myNew	should	do	everything	new	does	and	return	the	same	object	new	
// would	evaluate	to,	as	specified	below:
// var	john	=	myNew(Person,	'John',	30)	- should	work	the	same	as:
// var	john	=		new	Person('John',	30);
// Note:	use	the	code	below	for	your	task:
// function	Person	(name,	age)	{
// 		this.name	=	name;
// 		this.age	=	age;
// }
// Person.prototype.introduce	=	function(){
// 		return	'My	name	is	'	+	this.name	+	'	and	I	am	'	+	this.age;
// };
// var	john	=	new	Person('John',	30);
// var	jack	=	new	Person('Jack',	40);
// console.log(	john.introduce()	);	//	My	name	is	John	and	I	am	30
// console.log(	jack.introduce()	);	//	My	name	is	Jack	and	I	am	40
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    return `My name is ${this.name} and I am ${this.age}`;
}

var john = new Person('John',30);
var jack = new Person('Jack', 40);
console.log(john.introduce());
console.log(jack.introduce());

function myNew(fn, ...params) {
    var newObj = Object.create(fn.prototype);

    return function() {
        fn.call(newObj, ...params)
        return newObj;
    }();
}

var johnMyNew = myNew(Person, 'John', 30);
var johnNewPerson = new Person('John', 30);

console.log(johnMyNew.introduce());
console.log(johnNewPerson.introduce());