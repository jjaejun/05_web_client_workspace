/**
 * 동기 Synchronous: 짝을 맞춘다 (함수호출-리턴과 그 다음 실행의 짝을 맞춘다.)
 * 비동기 Asynchronous: 짝을 맞추지 않는다. (함수호출-리턴과 그 다음 실행의 짝을 맞추지 않는다.)
 * 
 * - js runtime은 싱글스레드로 작동한다.
 * - 시간이 오래 걸리는 작업(timer api, dom, event처리)은 백그라운드로 치워뒀다가 이후에 실행 (필연적으로 비동기처리가 이뤄짐)
 * 
 * 1. Web API Container에 등록
 * 2. Callback Queue 추가
 * 3. Event Loop에 의해 callstack에 추가 (callstack empty only!)
 */
document.querySelector("#btn1").addEventListener('click', () => {
    // 동기처리
    const value = foo();
    console.log(value);

    // 비동기처리
    let value2;
    setTimeout(() => {
        value2 = 200;
        console.log(value2);
    }, 1000);
    // console.log(value2);
});

const foo = () => 100;

/**
 * DOM에 요소를 추가/삭제하는 작업은 비동기로 처리된다.
 */
document.querySelector('#btn2').addEventListener("click", () => {
    // js/24_test.js를 동적으로 로드하고, 그안의 함수 test()를 호출
    // 1.
    // const script = document.createElement('script'); // <script></script>
    // script.src = 'js/24_test.js'; // <script src="js/24_test.js"></script>
    // document.head.append(script);
    // test(); // Uncaught ReferenceError: test is not defined
    // 2.
    loadScript('js/24_test.js', () => {
        test();
    });
});

const loadScript = (src, callback) => {
    const script = document.createElement('script'); // <script></script>
    script.src = src;
    script.onload = callback; // dom에 load가 완료되면 호출되는 핸들러
    document.head.append(script);
};

/**
 * 1초 간격으로 배경색을 빨주노초파남보
 * - setTimeout 연속 사용
 */
document.querySelector('#btn3').addEventListener("click", () => {
    const box = document.querySelector(".box");
    box.style.backgroundColor = 'red';

    // forEach로는 불가능
    // const rainbow = ['orange', 'yellow', 'green', 'blue', 'navy', 'violet']
    // rainbow.forEach(color, i => {
    //     setTimeout(() => {
    //         box.style.backgroundColor = color;
    //     }, 1000*i);
    // });
    
    setTimeout(() => {
        box.style.backgroundColor = 'orange';
        setTimeout(() => {
            box.style.backgroundColor = 'yellow';
            setTimeout(() => {
                box.style.backgroundColor = 'green';
                setTimeout(() => {
                    box.style.backgroundColor = 'blue';
                    setTimeout(() => {
                        box.style.backgroundColor = 'darkblue';
                        setTimeout(() => {
                            box.style.backgroundColor = 'purple';
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
});