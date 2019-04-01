class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

// 먼저 클래스를 선언한 후에 생성을 해야함(함수는 순서가 상관이 없음)
const p = new Rectangle(10, 20);
console.log(p.width);
console.log(p.height);
console.log(p.area);

let Rectangle2 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

console.log(Rectangle2.name);

// named
let Rectangle3 = class Rectangle3 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

console.log(Rectangle3.name);