// Proxying a normal object
var target = {};
var handler = {
  get: function (receiver, name) {
    return `Hello, ${name}!`;
  }
};

var p = new Proxy(target, handler);
console.log(p.world); // 'Hello, world!'

// Proxying a function object
var target2 = function () { return 'I am the target2'; };
var handler2 = {
  apply: function (receiver, ...args) {
    return 'I am the proxy2';
  }
};

var p = new Proxy(target2, handler2);
console.log(p()); // 'I am the proxy2'

let validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }

        // The default behavior to store the value 
        obj[prop] = value;
    }
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = 'young'; // Throws an exception
person.age = 300; // Throws an exception

// proxy의 handler가 가질 수 있는 트랩(trap)들
// var handler =
// {
//   get:...,
//   set:...,
//   has:...,
//   deleteProperty:...,
//   apply:...,
//   construct:...,
//   getOwnPropertyDescriptor:...,
//   defineProperty:...,
//   getPrototypeOf:...,
//   setPrototypeOf:...,
//   enumerate:...,
//   ownKeys:...,
//   preventExtensions:...,
//   isExtensible:...
// }