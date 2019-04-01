function f(x, y=12) {
    // y값이 없다면 12를 default로 함
    return x + y;
}

console.log(f(3));

function f2(x, ...y) {
    // y는 array ["hello", true]
    return x * y.length;
}

console.log(f2(3, "hello", true));

function f3(x, y, z) {
    return x + y + z;
}

console.log(f3(...[1, 2, 3]));