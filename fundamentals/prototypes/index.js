const person_proto = { name: "Proto John" }

const person = Object.create(person_proto);
person.name = "John"
console.log(person, "console person")
console.log(person.name, "console person name")
console.log(person_proto.name, "console person proto name")
console.log(person.__proto__, "console person proto")


//Pattern 1: Object.create (delegation, a.k.a. OLOO)

/*const Animal = {
    init(name){ this.name = name; return this; },
    speak(){ return `${this.name} makes a sound`; }
  };
  
  const Dog = Object.create(Animal);
  Dog.speak = function(){ return `${this.name} barks`; };
  
  const fido = Object.create(Dog).init("Fido");
  console.log(fido.speak()); // "Fido barks"
  console.log(Object.getPrototypeOf(fido) === Dog); // true
*/


//Pattern 2: Constructor functions + .prototype

function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function () {
    return `${this.name} makes a sound`;
}

function Dog(name, breed) {
    Animal.call(this, name)
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.speak = function () {
    return `${this.name} barks`;
}

const fido = new Dog("Fido", "Lab");
console.log(fido.speak()); // "Fido barks"
console.log(fido instanceof Dog); // true
console.log(fido instanceof Animal); // true

Animal.prototype.sayHello = function(){
    return `Hello, my name is ${this.name}`;
}

console.log(fido.sayHello()); // "Hello, my name is Fido"
console.log(fido.speak()); // "Fido barks"