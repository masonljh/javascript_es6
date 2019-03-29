// Expression bodies
var evens = [1, 3, 5, 7, 9, 11, 13, 15];
var fives = [];

var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));

console.log(nums);

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

console.log(fives);

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
}

bob._friends.push('Teddy');
bob._friends.push('Ricky');
bob.printFriends();