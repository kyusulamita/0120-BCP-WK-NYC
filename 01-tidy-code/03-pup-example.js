const Pup = function(name) {
  this.name = name;
}


Pup.prototype.speak = function() {
  console.log(`Woof, I am ${this.name}`);
}


const markPup = new Pup(`Mark`);


// Don’t worry about what `this` means now!

// we will cover the `this` keyword in a future lecture :)
