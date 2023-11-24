/**
 * 정규표현식 Regular Expression
 * - 문자열에 대해서 유효성검사/검색/대체등을 처리하기 위한 표현식
 * - 조건/반복처리를 내부적으로 진행해서 간결하게 작성이 가능하다
 * - 문법자체 숙지가 어려운 편. (암호문 수준)
 * - 언어독립적
 */
document.querySelector("#btn1").addEventListener('click', () => {
    // 하나의 문자가 숫자(0123456789)인지 검사하는 정규식
    const re = /[0-9]/gi; // 추천(간단해서)
    const re2 = new RegExp(/[0-9]/gi);
    const re3 = new RegExp("[0-9]", "gi");

    console.dir(re, re2, re3);

    // 정규식 메소드
    // RegExp#test(string): boolean
    console.log(re.test("abc123")); //true
    console.log(re.test("xyzㅋㅋㅋ")); //false

    // 문자열 메소드
    // String#split(re): string[]
    console.log("a1b2c4d".split(re)); // ['a', 'b', 'c', 'd']

    // String#replace(re, newString): string
    console.log("abc-123".replace(re, '*')); // abc-***
    console.log("abc1def2ghi".replace(re, '<$&>')); // abc<1>def<2>ghi

    // String#match(re): {} 매칭된 결과 배열로 반환
    console.log("a1b2c3d".match(re)); // ['1', '2', '3']

    // String#search(re):number 매칭된 문자열의 인덱스반환
    console.log("a1b2c3d".search(re)); // 1
    console.log("xyzㅋㅋㅋㅋ".search(re)); // -1
});

/**
 * flags 옵션
 * - g : global 전역비교 수행
 * - i : ignore 대소문자 구분안함
 * - m : multiline 여러 줄인 경우 행단위비교
 */
document.querySelector("#btn2").addEventListener('click', (e) => {
    const src = 'Javascript jQuery Ajax sass';
    const area = e.target.nextElementSibling;
    area.innerHTML = `<p>${src.replace(/a/, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/a/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/a/gi, '<mark>$&</mark>')}</p>`
});

/**
 * anchor
 * - ^ 시작
 * - $ 끝
 */
document.querySelector("#btn3").addEventListener('click', (e) => {
    const src = 'Javascript jQuery Ajax sass xxx';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/j/gi, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/^j/gi, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/x/gi, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/x$/gi, '<mark>$&</mark>')}</p>`;

    const src2 = `Javascript
jQuery
Ajax
sass
xxx`;
    area.innerHTML += `<p>${src2.replace(/^j/gim, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src2.replace(/x$/gim, '<mark>$&</mark>')}</p>`;
});

/**
 * 임의의 문자하나 .
 * - 문자/특수문자/공백
 * - 개행문자는 처리되지 않음
 */
document.querySelector("#btn4").addEventListener('click', (e) => {
    const re = /^a.b/;
    console.log(re.test('acb')); // true
    console.log(re.test('a b')); // true
    console.log(re.test('a*b')); // true
    console.log(re.test('ab')); // false
    console.log(re.test('a\nb')); // false

    // in 다음에 한글자로 끝나는 문자열 검사
    const re2 = /in.$/;
    console.log(re2.test('going')); // true
    console.log(re2.test('inner')); // false
    console.log(re2.test('holidayin')); // false
});

/**
 * [] 한글자에 대한 값목록
 * - ascii code기반으로 범위설정
 * - ^으로 시작하면 반전처리
 */
document.querySelector("#btn5").addEventListener('click', (e) => {
    const src = `ABCDEFGhijklmn 가나다라마바사ㅋㅋㅎㅎㅓㅓㅏㅏ 1234567890 !@#$%^&*() \t\n`;
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/[aj]/gi, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/[^aj]/gi, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/^[aj]/gi, '<mark>$&</mark>')}</p>`

    area.innerHTML += `<p>${src.replace(/[0123456789]/gi, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/[0-9]/gi, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/[abcdefghijklmnopqrstuvwxyz]/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/[a-z]/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/[A-Z]/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/[0-9A-Za-z]/g, '<mark>$&</mark>')}</p>`
    // area.innerHTML += `<p>${src.replace(/[0-9A-z]/g, '<mark>$&</mark>')}</p>` 범위 설정의 기준이 아스키코드이기 때문에 Z-a사이 다른 문자들도 포함된다.
    area.innerHTML += `<p>${src.replace(/[가-힣]/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/[ㄱ-ㅎ | - | 가-힣]/g, '<mark>$&</mark>')}</p>`

    // 유의사항
    // 반전을 의미하려면 ^은 맨 첫번째 자리에서만 사용가능
    // /[A-Z^Q]/ 이런건 존재하지 않는다
    // 대신 /[A-PR-Z]/ 이렇게 사용해야함

    // 알파벳 소문자로 시작하는 문자열 검사
    const re = /^[a-z]/;
    console.log(re.test('abcde')); // true
    console.log(re.test('aㅏㅏㅏㅏㅏ')); // true
    console.log(re.test('ABCDE')); // false
    console.log(re.test('가나다')); // false
    
    console.log('-----------------');

    // 숫자 4자리인지 검사
    const re2 = /^[0-9]{4}$/;
    console.log(re2.test('1234')); // true
    console.log(re2.test('5678')); // true
    console.log(re2.test('12345')); // false
    console.log(re2.test('abcd')); // false
    console.log(re2.test('ab12')); // false
    console.log(re2.test('12')); // false
});

/**
 * 단축문자(문자하나)
 * - \d digit 숫자
 * - \w word 영문자/숫자/_
 * - \s whitespace 공백/개행/탭
 * 
 * 반전
 * - \D 숫자 아닌 문자
 * - \W 영문자/숫자/_ 아닌 문자
 * - \S 공백/개행/탭 아닌 문자
 */
document.querySelector("#btn6").addEventListener('click', (e) => {
    const src = `ABCDEFGhijklmn 가나다라마바사ㅋㅋㅎㅎㅓㅓㅏㅏ \t\n 1234567890 !@#$%^&*()_+| \t\n`;
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/\d/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[0-9]/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/\w/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[A-Za-z0-9_]/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/\s/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[ \n\t]/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/\D/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[^0-9]/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/\W/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[^A-Za-z0-9_]/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/\S/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[^ \n\t]/g, '<mark>$&</mark>')}</p>`;
});

/**
 * () 그룹핑
 * | OR
 */
document.querySelector("#btn7").addEventListener('click', (e) => {
    const src = '월요일에는 월요병, 화가 부르르르 화요일 홧병, 수수술한잔 하는 수요일, 목이 컥~ 목요일, 금방 오지 않는 금요일, 하지만 오늘은 금요일';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/(월요일|수요일|금요일)/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[월수금]요일/g, '<mark>$&</mark>')}</p>`;
});

/**
 * Escaping
 * - ^$|, 문법요소를 문자 그대로 사용하려면 \를 이용해 escaping처리 필수
 */
document.querySelector("#btn8").addEventListener('click', (e) => {
    const src = '3.4$';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/\$/, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/\./g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[$]/g, '<mark>$&</mark>')}</p>`; // []안에서는 escaping 불필요(\사용시 \\로 escaping 처리해야함)
    area.innerHTML += `<p>${src.replace(/[.]/g, '<mark>$&</mark>')}</p>`;
});

/**
 * 수량자 quantifier
 * - a* a가 0개 이상
 * - a+ a가 1개 이상
 * - a? a가 0 or 1개
 */
document.querySelector("#btn9").addEventListener('click', (e) => {
    const src = 'aabc abc bc';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/a*b/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/a+b/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/a?b/g, '<mark>$&</mark>')}</p>`;

    // a로 시작하고, z로 끝나는 문자열 검사
    const re = /^a.*z$/;
    console.log(re.test('abcdefghijklmnopqrstuvwxyz')); // true
    console.log(re.test('akz')); // true
    console.log(re.test('az')); // true
    console.log(re.test('abcdex')); // false
    console.log(re.test('xyz')); // false
    console.log(re.test('안az녕')); // false

    console.log('------------------------');

    // 영문자로만 이루어진 문자열 검사
    const re2 = /^[A-Za-z]+$/i;
    console.log(re2.test("ABCdef")); // true
    console.log(re2.test("ABC123def")); // false
    console.log(re2.test("")); // false
    console.log(re2.test("123")); // false
});

/**
 * 수량자
 * - a{5} a가 5개
 * - a{2, 5} a가 2개 이상 5개 이하
 * - a{2, } a가 2개 이상
 * but, a{, 5} 이런 문법은 없다
 */
document.querySelector("#btn10").addEventListener('click', (e) => {
    const src = 'aa aba abba abbba';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/ab{0,}a/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/ab*a/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/ab{1,}a/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/ab+a/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/ab{0,1}a/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/ab?a/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/ab{1}a/g, '<mark>$&</mark>')}</p>`

    // 숫자 4자리 체크
    const re = /^[0-9]{4}$/;
    console.log(re.test("1234")); // true
    console.log(re.test("12345")); // false
    console.log(re.test("123")); // false
    console.log(re.test("abcd")); // false
});

/**
 * 탐색 Look Around
 * - 탐색구문은 조회에 사용되고, 매칭결과에는 반영되지 않는다.
 * 
 * - 전방탐색 Look ahead
 *  - a(?=b) b가 뒤따르는 a를 검색
 *  - a(?!b) b가 뒤따르지 않는 a를 검색
 * 
 * - 후방탐색 Look behind
 *  - (?<=b)a b가 앞에 있는 a를 검색
 *  - (?<!b)a b가 앞에 없는 a를 검색
 */
document.querySelector("#btn11").addEventListener('click', (e) => {
    const area = e.target.nextElementSibling;

    const src1 = 'hello world hello tom hello jane hello world';
    area.innerHTML = `<p>${src1.replace(/hello(?= world)/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src1.replace(/hello(?! world)/g, '<mark>$&</mark>')}</p>`
    
    const src2 = 'hello world lotte world t world';
    area.innerHTML += `<p>${src2.replace(/(?<=hello )world/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src2.replace(/(?<!hello )world/g, '<mark>$&</mark>')}</p>`
});

/**
 * 비밀번호 정책
 * - 문자 8~12자리
 * - 영문자 포함
 * - 숫자포함
 * - 특수문자(!@#$%^&*())포함
 */
document.querySelector("#password").addEventListener('blur', (e) => {
    const regexps = [/^.{8,12}$/, /[A-Za-z]/, /[0-9]/, /[!@#$%^&*()]/];
    const pwVal = e.target.value;

    // 문자 8~12자리
    if (!regexps[0].test(pwVal)) {
        alert('비밀번호는 8~12자리여야 합니다.');
        return;
    }
    // 영문자 포함
    if (!regexps[1].test(pwVal)) {
        alert('비밀번호는 영문자를 하나 이상 포함해야 합니다.');
        return;
    }
    // 숫자 포함
    if (!regexps[2].test(pwVal)) {
        alert('비밀번호는 숫자를 하나 이상 포함해야 합니다.');
        return;
    }
    // 특수문자(!@#$%^&*()) 포함
    if (!regexps[3].test(pwVal)) {
        alert('비밀번호는 특수문자(!@#$%^&*())를 하나 이상 포함해야 합니다.');
        return;
    }

    alert('유효한 비밀번호입니다.');
});

/**
 * @실습문제 주민번호
 * - 6자리 생년월일 - 7자리 숫자
 * - '유효한 주민번호입니다.'
 * - '유효하지 않은 주민번호입니다.'
 */
document.querySelector("#btn-ssn").addEventListener('click', (e) => {
    const validation = /^[0-9]{6}[-][0-9]{7}$/g;
    // const validation = /^\d{6}-\d{7}$/g; 이렇게도 가능하다
    const ssn = document.getElementById('ssn');

    if(validation.test(ssn.value)) {
        alert("유효한 주민번호입니다.");
    } else {
        alert("유효하지 않은 주민번호입니다.");
    }
});

