$("#btn1").on("click", () => {
    console.log('🍖🍖🍖');

    console.log($); // jQuery함수
    console.log(jQuery); // $ 변수명 충돌을 방지하기 위해 jQuery변수도 제공

    // $("선택자") -> jquery객체 반환(js태그객체를 감싼 객체)
    // jquery객체를 담은 변수는 $ 시작하는 관례가 있다.
    const $p1 = $("#p1");
    console.log($p1);
    $p1.css('color', 'red');

    // const $group1 = $(".group1");
    // console.log($group1);
    // $group1.css('text-decoration', 'underline');

    // 내 코드(미완)
    // const group1 = Array.from(document.querySelectorAll(".gruop1"));
    // console.log(group1);
    // group1.style.text-decoration = 'underline';

    // 누나 코드
    // [...document.querySelectorAll('.group1')].forEach((p) => p.style.textDecoration = 'underline');

    // 강사님 코드
    // document.querySelectorAll(".group1").forEach((p) => {
    //     group1.style.textDecoration = 'underline';
    // });

    // p태그에 font-size 2배 적옹
    $("p").css('font-size', '2em');

    // title속성이 있는 요소 background 적용
    $("[title]").css("background-color", "yellow");

    // title속성이 안녕3인 요소 color 변경
    $("[title=안녕3]").css("color", "blue");
});

/**
 * jquery 객체
 * js 객체
 */
$("#btn2").on('click', () => {
    // jquery 객체
    console.log($("p")); // p태그객체(js)를 감싼 객체

    // js객체
    console.log($("p")[0]); // p#p1
    console.log($("p").get(0)); // p#p1
    console.log($("p").get()); // [p#p1, p#p2, p#p3, p#p4, p#p5]

    // js객체를 전달해서 jquery 객체 생성
    console.log($(document.querySelector("#p1")));
    console.log($(p1));
    console.log($([p1, p2, p3]));
});

/**
 * jquery전용 선택자
 * - input 타입별로 Pseudo Class 선택자
 */
$("#btn3").on("click", () => {
    // input[type=text]
    $(":text")
        .css('background-color', 'tomato') // 메소드 chaining: jquery객체를 원래 다시 리턴하기 때문에 연결해서 사용 가능
        .css('color', 'white');
    // 객체형을 전달가능 (css 속성명 주의 : -이 있다면 문자열 처리 또는 카멜케이싱(지원된다))
    $(":password")
        .css({
            // 'background-color' : 'yellowgreen',
            backgroundColor : 'yellowgreen',
            'color' : 'white'
        });

    $(":radio#male").prop("checked", true); // 체크처리
    $(":checkbox#baseball, :checkbox#basketball").prop("checked", true);

    $(":button").val('Click me!'); //input 타입의 button을 변환(button 태그를 변환하지 않는다)
});

/**
 * 순서관련
 * -  :first
 * -  :last
 * -  :odd
 * -  :even
 * 
 * -  :eq(n)
 * -  :gt(n)
 * -  :lt(n)
 * 
 * 내용포함
 * -  :contains(text)
 * 
 * 자식요소포함
 * -  :has(selector)
 */
$(btn4).on('click', () => {
    // const $selected = $("#people tr:first"); // : first-child, :first-of-type
    // const $selected = $("#people tr:last"); // : last-child, :last-of-type
    // const $selected = $("#people tr:odd"); // 0-based index 홀수 :nth-child(2n + 1)
    // const $selected = $("#people tr:even"); // 0-based index 짝수 :nyh-child(2n)

    // const $selected = $("#people tr:eq(3)");
    // const $selected = $("#people tr:eq(0)");
    // const $selected = $("#people tr:lt(3)");

    // const $selected = $("#people tr:contains('A')"); // 텍스트기반
    const $selected = $("#people tr:has(a[href])"); // 텍스트기반

    $selected.css('background-color', 'slategrey');
});