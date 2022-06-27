// Create a	function NamedOne which	takes first	& last names as	parameters and	returns	
// an object with firstName, lastName and fullName ( = firstName + a space + lastName )	
// properties which	should be all accessible.

function NamedOne(firstName, lastName) {

   let person = {

        firstName,
        lastName, 

        get fullName() {
                return `${this.firstName} ${this.lastName}`
            },

        set fullName(value) {
            const [firstName, lastName] = value.split(" ");

            if (firstName && lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
            } else {
                console.log('Name is not updated, check if name you entered match "Name Surname" format');
            }
        },
    }
    
    return person;
}

var	namedOne = new NamedOne("Naomi","Wang");

namedOne.firstName = "John";
namedOne.lastName = "Doe";

console.log({firstName: namedOne.firstName, lastName: namedOne.lastName, fullName: namedOne.fullName});

namedOne.fullName = "Bill Smith";

console.log({firstName: namedOne.firstName, lastName: namedOne.lastName, fullName: namedOne.fullName});


namedOne.fullName = "Tom";

console.log({firstName: namedOne.firstName, lastName: namedOne.lastName, fullName: namedOne.fullName});

namedOne.fullName = "TomDonnovan";

console.log({firstName: namedOne.firstName, lastName: namedOne.lastName, fullName: namedOne.fullName});
