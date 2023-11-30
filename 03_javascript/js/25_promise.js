/**
 * Promise
 * - 비동기작업(producing code) + 콜백(consuming code)를 명쾌히 작성하는 문법
 * 
 * - Promise 객체는 status/result 상태값을 가진다.
 *  - status : pending -> fulfilled | rejected
 *  - result : undefined -> value | error객체
 * 
 * - Promise객체는 두개의 callback함수를 가진다.
 *  - resolve : 정상처리된 경우 호출하는 콜백
 *  - reject : 오류가 발생한 경우 호출하는 콜백
 */
document.querySelector("#btn1").addEventListener('click', () => {
    // Promise에 전달하는 함수
    // - resolve 함수
    // - reject 함수
    const promise = new Promise((resolve, reject) => {
        try {
            // 난수를 생성시 짝수면 정상처리, 홀수면 오류!
            const n = Math.trunc(Math.random() * 100 + 1); // 1 ~ 100
            if (n % 2 == 0)
                resolve(n); // n = Promise#result
            else
                throw new Error('홀수라서 실패!!!');
        } catch (e) {
            reject(e); // e => Promise#result
        }
    });

    // callback 작성
    promise.then((value) => {
        // 성공(fulfilled)시 콜백
        console.log(`🎐🎐🎐 ${value} 🎉🎉🎉`);
    }, (err) => {
        // 실패(rejected)시 콜백
        console.error(err);
    });

    console.log(promise);
});

document.querySelector("#btn2").addEventListener("click", () => {
    delay(3000)
        .then(() => {
            // 콜백함수
            console.log('🍔🍔🍔');
        });
        
    // 2초후에 🍙🍙🍙 출력
    delay(2000).then(() => {
        console.log('🍙🍙🍙');
    });
});

const delay = (millis) => {
    return new Promise((resolve) => {
        // 비동기작업
        setTimeout(() => resolve(), millis);
    });
}

document.querySelector("#btn3").addEventListener("click", () => {
    loadScript('js/24_test.js')
        .then(() => {
            test();
        });
});

const loadScript = (src) => new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve; // load 이벤트 발생시 resolve(핸들러) 호출!
    document.head.append(script);
});

/**
 * Promise Chain
 * - Promise는 연속적으로 사용가능하다. 콜백지옥을 then지옥으로 대체
 * - 암묵적으로 프로미스객체 반환(명시적으로 반환한 값이 있다면, 프로미스의 result값으로 사용된다.)
 * - 명시적으로 프로미스 객체를 반환할수도 있다.
 */
document.querySelector("#btn4").addEventListener("click", () => {
    // result값 반환
    new Promise((resolve) => {
        // 비동기작업
        resolve(2);
    }).then((value) => {
        // 콜백처리
        console.log(value); // 2
        return value * 2;
    }).then((value) => {
        console.log(value);
    });

    // promise객체 반환
    templete(3).then((value) => {
        console.log(value);
        return templete(value * 2);
    }).then((value) => {
        console.log(value);
        return templete(value * 2);
    }).then((value) => {
        console.log(value);
        return templete(value * 2);
    });

    // 1초후에 🥩, 1초후에 🍙, 1초후에 🍛 출력
    delay(1000).then(() => {
        console.log('🥩🥩🥩');
        return delay(1000);
    }).then(() => {
        console.log('🍙🍙🍙');
        return delay(1000);
    }).then(() => {
        console.log('🍛🍛🍛');
        return delay(1000);
    });
});

const templete = (value) => new Promise((resolve) => {
    resolve(value);
});

/**
 * - changeBGColor : Promise객체를 반환하는 함수 (비동기작업)
 * - then절 (콜백함수)
 */
const box = document.querySelector(".box");    
document.querySelector("#btn5").addEventListener("click", () => {
    // changeBGColor('red', 1000).then(() => {
    //     return changeBGColor('orange', 1000)
    // }).then(() => {
    //     return changeBGColor('yellow', 1000)
    // }).then(() => {
    //     return changeBGColor('green', 1000)
    // }).then(() => {
    //     return changeBGColor('blue', 1000)
    // }).then(() => {
    //     return changeBGColor('navy', 1000)
    // }).then(() => {
    //     return changeBGColor('purple', 1000)
    // });
    // refactoring
    changeBGColor('red', 1000)
    .then(() => changeBGColor('orange', 1000))
    .then(() => changeBGColor('yellow', 1000))
    .then(() => changeBGColor('green', 1000))
    .then(() => changeBGColor('blue', 1000))
    .then(() => changeBGColor('navy', 1000))
    .then(() => changeBGColor('purple', 1000));
});

const changeBGColor = (color, millis) => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
        box.style.backgroundColor = color;
    }, millis);
});