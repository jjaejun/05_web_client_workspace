/**
 * mouseover/mouseout
 *  - 자식요소 접근시에도 이벤트 발생 
 * mouseenter/mouseleave
 *  - 자식요소 접근시에도 이벤트 발생 안함
 */
$(".outer")
    // .mouseover(() => {
    //     console.log('mouseover');
    // })
    // .mouseout(() => {
    //     console.log('mouseout');
    // });
    // .mouseenter(() => {
    //     console.log('mouseenter');
    // })
    // .mouseleave(() => {
    //     console.log('mouseleave');
    // });
    // hover이벤트는 존재하지 않는다.
    .hover(() => {
        console.log('mouseenter');
    }, () => {
        console.log('mouseleave');
    });

$(title).hover((e) => {
    // e.target.classList.add('reverse');
    $(e.target).addClass('reverse');
}, (e) => {
    // e.target.classList.remove('reverse);
    $(e.target).removeClass('reverse');
});

/**
 * on 핸들러 바인딩
 * off 핸들러 인바인딩
 */
$(counter).on("click", (e) => {
    let n = $(e.target).html();
    $(e.target).html(--n);

    if(n == 0)
        $(e.target).off('click'); // 이벤트핸들러 제거
});

// 1회용
$(one).one('click', (e) => {
    console.log('🍖🍖🍖');
    $(e.target).html('🍖🍖🍖');
});

// trigger event
$(trg).on('click', (e) => {
    $(counter).trigger('click'); // 클릭이벤트 발생
});

$(memo).keyup((e) => {
    // console.log(e.target.value);
    // const len = $(memo).get(0).value.length;
    const len = e.target.value.length;
    const color = len > 30 ? 'red' : 'initial';
    const fontWeight = len > 30 ? 700 : 400;
    $("#len")
        .html(len)
        .css('color', color)
        .css('fontWeight', fontWeight);
});
$(document.memoFrm).submit((e) => {
    const memo = $(e.target.memo);
    if($memo.val().length > 30) {
        e.preventDefault();
        alert("글자수를 초과했습니다!! (30자 이내)");
    }

    // 초기화
    // jquery객체에는 reset이 없다.
    // $(e.target)[0].reset();
    $(e.target).get(0).reset();
});

// 누나 코드
// $(memo).on('keyup', (e) => {
//     const len = $("#len");
//     len.html(e.target.textLength);
//     e.target.textLength > 30 ? len.css('color', 'red') : len.css('color', '#000');
// });
// $(memoFrm).on('submit', (e) => {
//     return ($("#memo").val().length < 30);
// });