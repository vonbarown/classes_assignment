// # Class Exercises

// (1 - 6 are the same as on the previous lab, but creating classes using ES6 syntax instead of constructor functions)

// ## Question 1

console.log(`\nQuestion 1a.Write a class called 'Person' that has 3 properties: a first name, a last name and a middle name. 
Create 2 instances of a 'Person'. Print one of their first names.\n`);

class Person {
    constructor(firstName,middleName,lastName){
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }
}

let Nelson = new Person ('Nelson', 'Rolihlahla', 'Mandela');
let Voniel = new Person ('Voniel', 'Barrington', 'Brown');

console.log(Nelson.firstName);

console.log(`\nQuestion 1b. Write a method in 'Person' called 'fullName' that will return a formatted string of an instance's full name. 
Call this method on both the instances you created in part a.`);


Person.prototype.fullName = function (){
    console.log(`\nThe full name of ${this.firstName} is: ${this.firstName} ${this.middleName} ${this.lastName}`); 
}

Nelson.fullName();
Voniel.fullName();

// ## Question 2

// a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
class Book {
    constructor (title,author,rating){
        this.title = title;
        this.author =author;
        this.rating= rating;
 }
}

let bladeItSelf = new Book ('The Blade Itself', 'Joe Abercrombie', 8);
let eyeOfWorld = new Book ('The Eye of The World', 'Robert Jordan', 9);
let blackCompany = new Book ('The Black Company', 'Glen Cook', 7)

// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
Book.prototype.isGood = function () {
    if (this.rating >= 7){
        return true
    } else {
        return false
    }
}
// ## Question 3

// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
class Dog{
    constructor (name,breed,mood,hungry){
        this.name =name;
        this.breed =mood;
        this.hungry = hungry;
    }
}

// b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
Dog.prototype.playFetch = function (){
    this.hungry = true;
    this.mood = 'playful'
    console.log('Ruff');
}
// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
Dog.prototype.feed = function() {
    if (this.hungry !== true){
        this.hungry = false
        console.log('woof'); 
    }
    console.log("This dog doesn't look hungry"); 
}
// d. Add a method called `toString` that returns a description of the dog:
Dog.prototype.toString = function (){
    console.log(`the name of the dog is: ${this.name} and it is ${this.mood}`);
}
// ## Question 4

// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.

    let freezingPoint = {
        celsius: 0,
        fahrenheit: 32,
        kelvin: 273.2,
    }


 console.log(`\nQuestion 4b. Make a class called 'Celsius' that has one property: 'celsius', and two methods 
 'getFahrenheitTemp', and 'getKelvinTemp'.`);
    
class Celsius{
    constructor(celsius){
        this.celsius = celsius;
    }
    getFahrenheitTemp (){
        console.log(1.8 * this.celsius + 32)
    }

    getKelvinTemp (){
        console.log(this.celsius+ 273); 
    }
}
// ```js
let outsideTempt = new Celsius(45)
console.log(outsideTempt.celsius)//returns 10.0
outsideTempt.getKelvinTemp() //returns 283.0
outsideTempt.getFahrenheitTemp() //returns 50.0
// ```

// c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
Celsius.prototype.isBelowFreezing = function(){
    return  this.celsius < 0
}

if (outsideTempt.isBelowFreezing() === true) {
    console.log(`It's freezing brrrr`);
    
} else {
    console.log(`It's not that cold`);
    
}

// ## Question 5

// a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
class Movie {
    constructor (name,year,genre,cast,description){
        this.name =name;
        this.year =year;
        this.genre = genre;
        this.cast =cast;
        this.description =description;    
    }
}
let BeastOfNoNation = new Movie ('Beast of No Nation', 2015, 'drama','Idris elba and Abraham Attah', 'tragic war drama on stolen youth')

console.log(`\nQuestion5b.Create an method inside 'Movie' called 'blurb' that returns a formatted string describing the movie.`);

Movie.prototype.blurb = function (){
    console.log(`\n${this.name} released in ${this.year} it was a ${this.genre} starring ${this.cast}, about ${this.description} `);
    
}
BeastOfNoNation.blurb();
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."


console.log(`\n## Question 6`);

// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)

// ```js

// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}

// // => 5
// ```
class Vector {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    plus(vec){
     this.x += vec.x
     this.y += vec.y;
    return this
    }

    minus(vec){
        this.x-=vec.x;
        this.y-=vec.y;
        return this;
    }

    getLength (){
    //let point = Math.pow(this.x,2) + Math.pow(this.y,2)
    return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))
    //return Math.sqrt(point);
    }
}

let v1 = new Vector(1, 2)
let v2 = new Vector(2, 3)

console.log(v1.plus(v2));
console.log(v1.minus(v2));

let v3 = new Vector(3, 4)
console.log(v3.getLength());


// ## Question 7

// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`

// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`

// c. Give each class a static method called `numberOfWheels` that returns the number of wheels (2 for bikes, 4 for cars).  
//Why does it make sense for this to be a static method instead of an instance method?

/* It makes senses for this to be a static method because all bike and cars make with the class object should have the same amount of
wheels. But a particular 
*/

// ## Question 8
// a. Make a class called `Vehicle` with properties `color` and `name`.  
//Give it a method called `makeSound` which logs "WHHOOSSSH" to the console

// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.

// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"

// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"

console.log(`\nQuestions 7 and 8`);

// creating the vehicle class to be extended later by ar and bike
class Vehicle {
    constructor (color,name){
        this.color = color;
        this.name = name;
    }

    makesound (){
        console.log('\nWHHOOSSSH');
        
    }
}

// creating the car class => extension of vehicle
class Car extends Vehicle {
    constructor(color,name,make,model){
        super(color,name)
        this.make = make;
        this.model = model;
    }

    static numberOfWheels (){
       return 4;
        
    }
}
// creating an instance car
let tesla = new Car ('red','Carry McCarface','Tesla','Model S');
console.log(tesla);

//creating the bike class => extension of vehicle
class Bike extends Vehicle{
    constructor(gears,hasBell,color,name){
        super(color,name)
        this.gears =gears;
        this.hasBell =hasBell;
    }

    static numberOfWheels (){
        return 2;
        
    }
}
 
// creating an instance of Bike f
let bmx = new Bike (7,true,'green','Bikey McBikeface')
console.log(bmx);

bmx.makesound();
console.log();
