// Create a	Vector object that supports	addition, subtraction, dot products, and norms.	So,	for	example:
// var a = new Vector([1,2,3]);
// var b= new Vector([3,4,5]);
// var c = new Vector([5,6,7,8]);
// a.add(b); //	should return	a	new	Vector([4,	6,	8])
// a.subtract(b); // should	return	a	new	Vector([-2,	-2,	-2])
// a.dot(b); //	should	return	1*3	+	2*4	+	3*5	=	26
// a.norm(); //	should	return	sqrt(1^2	+	2^2	+	3^2)	=	sqrt(14)
// a.add(c); //	throws	an	error
// If you try to add, subtract,	or dot two vectors with	different lengths, you must	throw an error.
// Also	provide:
// a toString method, so that using	the	vectors	from above,	a.toString()===	'(1,2,3)'
// an equals method, to	check that two vectors that	have the same components are equal

class Vector {
    constructor(vectorValues) {
        this.vectorValues = vectorValues;
    }

    isArrayLengthEqual(aArray, bArray) {
        return aArray.length === bArray.length;
    }

    throwOnInvalidVectorLengths(vector) {
        if (!this.isArrayLengthEqual(vector.vectorValues, this.vectorValues)) {
            throw new Error('Arrays are not equal in length');
        }
    }

    add(vector) {
        this.throwOnInvalidVectorLengths(vector);
        return this.vectorValues.map((val, i) => val + vector.vectorValues[i]);
    }

    subtract(vector) {
        this.throwOnInvalidVectorLengths(vector)
        return this.vectorValues.map((val, i) => val - vector.vectorValues[i]);
    }

    dot(vector) {
        this.throwOnInvalidVectorLengths(vector);
        return this.vectorValues.reduce((prevValue, currValue, index) => prevValue + currValue * vector.vectorValues[index], 0);
    }

    norm() {
        return Math.sqrt(this.vectorValues.reduce((prevValue, currValue) => prevValue + Math.pow(currValue, 2), 0));
    }

    toString() {
        return `(${this.vectorValues.join()})`;
    }
}

var	a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var	c =	new	Vector([5, 6, 7, 8]);

console.log(a.add(b));
console.log(a.subtract(b));
console.log(a.dot(b));
console.log(a.norm());
console.log(a.toString());
console.log(a.add(c));