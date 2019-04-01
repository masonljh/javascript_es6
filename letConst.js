function f() {
    {
        let x;
        {
            // 블록 내에서만 쓰일 x이기 때문에 괜찮음
            const x = "sneaky";
            // 상수에서 다시 값을 세팅하려고 했으므로 에러
            x = "foo";
        }
        // 해당 블록 안에서 이미 x가 선언했음으로 에러
        let x = "inner";
    }
}
// f();

function varTest() {
    var x = 31;
    if (true) {
        var x = 71;     // 위의 x와 같은 변수임
        console.log(x);
    }
    console.log(x);
}
varTest();

function letTest() {
    let x = 41;
    if (true) {
        let x = 81;     // 위의 x와 다른 변수임
        console.log(x);
    }
    console.log(x);
}
letTest();

function varTest2() {
    if (true) {
        var x = 71;     // 외부까지 됨
        console.log(x);
    }
    console.log(x);
}
varTest2();

function letTest2() {
    if (true) {
        let x = 71;
        console.log(x);
    }
    console.log(x);     // 에러
}
// letTest2();