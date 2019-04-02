var map = {};
var a = Symbol('a');

map[a] = 123;
map["b"] = 456;

console.log(map[a]); // 123
console.log(map["b"]); // 456

for (let key in map) {
    console.log(key); // b
}

// Object.keys는 개체 고유의 열거형 속성들을 for..in 루프에 의해 제공되는 순서와 동일한 순서로 리턴
console.log(Object.keys(map)); // ["b"]