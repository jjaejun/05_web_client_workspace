/**
 * jQuery
 * - javascript 라이브러리(기능구현이 된 채로 제공되는 코드 뭉치)
 * - 브라우저간의 호환 이슈, DOM제어, 이벤트처리등을 간결히 사용할 수 있도록 지원하는 라이브러리이다.
 * 
 * 1. jquery.js 다운로드후 서버에서 함께 제공
 * 2. CDN(Content Delivery Network) 방식: 웹상의 jquery.js를 클라이언트가 직접 다운로드 받아서 사용
 * 
 * 
 * jquery방식의 이벤트핸들러 등록
 */
$("#btn1").on("click", (e) => {
    console.log('🥩🥩🥩');
});

$("#btn2").on("click", (e) => {
    console.log('🍖🍖🍖');
});