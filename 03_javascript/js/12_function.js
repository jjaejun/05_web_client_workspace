test1();
// 함수선언식에는 정상작동
// 함수표현식에는 Uncaught ReferenceError: Cannot access 'test1' before initialization

/**
 * 함수 선언식
 * - hoisting 처리됨
 * - <script>태그, js파일을 처리시에 함수가 끌어올려져서(hoisting) 먼저 등록!
 */
function test1() {
    console.log('🥗🧀🥗');
}

/**
 * 함수 표현식
 * - hoisting 처리 안됨
 * - Uncaught ReferenceError: Cannot access 'test1' before initialization
 * - 변수에 함수라는 값대입
 * - 익명함수 전달 (이름을 쓰더라도 무시되기 때문)
 */
// const test1 = function() {
//     console.log('🥗🧀🥗');
// };

/**
 * IIFE
 * - Immediately Invoked Function Expression
 * - 함수 선언과 호출을 동시에 처리 (1회용)
 * - 전역변수 노출 대신 지역변수로 처리하기 위한 용도
 */
(function(){
    console.log('🍘🍙🍘');
    let cnt = 0;
})()

// 매개변수(parameter): 선언부, 매개인자가 담긴 공간
// 매개인자(argument): 호출부, 함수에 전달할 값
(function(text){
    console.log(text);
})('🍔🍔🍔')

/**
 * 자바스크립트 매개변수 선언과 다르게 매개인자를 전달해도 오류가 나지 않는다. (근본이 없기 때문)
 * - arguments: 함수의 모든 매개인자를 관리하는 숨은 참조배열
 */
const test2 = function() {
    foo(10, 20);
    foo(10, 20, 30);
    foo(10);
    foo();
}

const foo = function(m, n){
    console.log(m, n);
    console.log(arguments);
}

/**
 * 모든 자바스크립트 함수에는 리턴값이 있다.
 * 명시하지 않은 경우 undefined가 반환된다.
 */
const test3 = function() {
    console.log(bar());
}

const bar = function(){ return; }

/**
 * 화살표함수
 * - 익명함수를 간결하게 작성하는 방법
 * - (매개변수) => { 함수실행부 }
 * 
 * - 생성자함수로 사용불가
 * - 함수자체 this가 없고, 부모 this를 가져와 사용
 */
const test4 = function() {
    console.log(koo(1, 2, 3))
};

// const koo = (a, b, c) => {
//     return a + b + c;
// };
// return 구문 한줄만 있을때 { return } 생략가능
const koo = (a, b, c) => a + b + c

// const boo = (b) => {
//     console.log(b);
// };
// 실행구문이 한줄뿐일때도 {} 생략가능
const boo = (b) => console.log(b)

// 매개변수가 하나뿐일때, () 생략가능
const hoo = h => {
    console.log(h);
    console.log(typeof h);
}

/**
 * 나머지 파라미터 Rest Parameter
 * - 매개인자 여러개를 배열로 처리
 * - 전개연산자와 동일한 모양이지만, 변수 자리에만 사용가능
 * - 일반매개변수와 혼용시 마지막에 한번만 사용가능
 */
const test5 = () => {
    const names = ['홍길동', '신사임당', '세종대왕'];
    zoo(...names); // 전개연산자 (값)

    zoo('캡틴아메리카', '헐크');
}

const zoo = (captain, ...names) => { // 나머지 파라미터 (변수(공간))
    console.log(captain, names);
}

const test6 = () => {
    console.log(calc('plus', 10, 20)); // 30
    console.log(calc('minus', 30, 20)); // 10
    console.log(calc('multiply', 10, 20, 30)); // 6000
    console.log(calc('divide', 30, 6)); // 5
    console.log(calc('remain', 10, 3)); // 3.333...
}

// const calc = (operator, ...nums) => {
//     let n;
//     switch (operator){
//     case "plus": 
//         n = nums[0]
//         for(let i = 1; i < nums.length; i++) {
//             n += nums[i];
//         }
//         return n;
//     case "minus":
//         n = nums[0];
//         for(let i = 1; i < nums.length; i++) {
//             n -= nums[i];
//         }
//         return n;
//     case "multiply":
//         n = nums[0]
//         for(let i = 1; i < nums.length; i++) {
//             n *= nums[i];
//         }
//         return n;
//     case "divide":
//         n = nums[0];
//         for(let i = 1; i < nums.length; i++) {
//             n /= nums[i];
//         }
//         return n;
//     case "remain":
//         n = nums[0];
//         for(let i = 1; i < nums.length; i++) {
//             n /= nums[i];
//         }
//         return n;
//     }
// }

// 강사님 코드
// const calc = (operater, ...nums) => {
//     switch (operater) {
//         case 'plus':
//             return nums.reduce((num1, num2) => num1 + num2);
//         case 'minus':
//             return nums.reduce((num1, num2) => num1 - num2);
//         case 'multiply':
//             return nums.reduce((num1, num2) => num1 * num2);
//         case 'divide':
//             return nums.reduce((num1, num2) => num1 / num2);
//         case 'remain':
//             return nums.reduce((num1, num2) => num1 % num2);
//     }
// }

// refactoring
// const calc = (type, ...nums) => {
//     return nums.reduce((agg, n) => {
//         switch (type) {
//             case 'plus': return agg + n;
//             case 'minus': return agg - n;
//             case 'multiply': return agg * n;
//             case 'divide': return agg / n;
//             case 'remain': return agg % n;
//         }
//     });
// }

const calc = (type, ...nums) => 
nums.reduce((agg, n) => {
    switch (type) {
        case 'plus': return agg + n;
        case 'minus': return agg - n;
        case 'multiply': return agg * n;
        case 'divide': return agg / n;
        case 'remain': return agg % n;
    }
})

/**
 * 자바스크립트에서 함수는 1급 객체이다. (함수는 값이다)
 * - 변수에 대입/함수호출전달/함수리턴값
 */
const test7 = () => {
    const a = 3;
    const b = a;
    // console.log(b); // 3
    
    const k = () => console.log('🥩🥩🥩');
    // k()
    const m = k;
    // console.log(m); // () => console.log('🥩🥩🥩')
    // m();

    // runner(() => console.log('🍦🍦🍦'));
    runner((n) => console.log(`🍗${n}`));

    // 계산기 예제
    console.log(calc2((a, b) => a + b, 10, 20)); // 30
    console.log(calc2((a, b) => a - b, 10, 20)); // -10
    console.log(calc2((a, b) => a * b, 10, 20)); // 200
    console.log(calc2((a, b) => a / b, 10, 20)); // 0.5
    console.log(calc2((a, b) => a % b, 10, 20)); // 10
}

const runner = (f) => {
    for(let i = 0; i < 10; i++)
    f(i + 1);
}

// func = (a, b) => a + b
const calc2 = (func, a, b) => {
    // console.log(func, a, b);
    return func(a, b);
}

/**
 * 함수를 리턴값으로 사용하기
 */
const test8 = () => {
    // const k = () => console.log('🍨🍨🍨');
    const k = getFunction();
    // const k = (text) => console.log('${text}🍨🍨🍨');
    k('길동', '디저트 먹어~'); // 길동아 디저트 먹어~ 🍨🍨🍨

    const friends = ['길동', '철수', '영희', '혁'];
    friends.forEach((name) => {
        k(name, '디저트 먹어~');
    });

    // const sayHello = (names) => console.log("Hello~ ${name}")
    const sayHello = getFunction2('Hello');
    sayHello('길동');
    // const sayGoodbye = (names) => console.log("Goodbye~ ${name}")
    const sayGoodbye = getFunction2('Goodbye');
    sayGoodbye('길동');
    // 돈 좀 꿔줘~ 길동
    const borrowSomeMoney = getFunction2('돈 좀 꿔줘');
    borrowSomeMoney('길동');
}

const getFunction = () => {
    return (name, text) => console.log(`${name} ${text} 🍨🍨🍨`);
}

// const getFunction2 = (greeting) => {
//     return (name) => console.log(`${greeting}~ ${name}`);
// }
const getFunction2 = (greeting) => (name) => console.log(`${greeting}~ ${name}`)

/**
 * tagMaker 함수를 작성하세요.
 * - 특정태그를 만드는 함수를 반환
 * - 반환된 함수에 태그의 내용을 전달해 호출가능
 * - div#result에 요소를 추가
 */
const test9 = () => {
    const writeP = tagMaker('p');
    const writeMark = tagMaker('mark');
    const writeButton = tagMaker('button');

    const result = document.querySelector("#result");
    result.innerHTML = writeP('안녕');
    result.innerHTML += writeMark('밥 먹었니?');
    result.innerHTML += writeButton('클릭');
}

const tagMaker = (tag) => (content) => `<${tag}>${content}</${tag}>`