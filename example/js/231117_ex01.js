function printValue() {
    const inputs = document.getElementsByTagName("input");
    const name = inputs[0].value;
    const pname = inputs[1].value;
    const price = inputs[2].value;
    console.dir(name);
    console.dir(pname);
    console.dir(price);
    
    area.innerHTML = "구입자 : " + name + "님<br>";
    area.innerHTML += "구입상품 : " + pname + "<br>";
    area.innerHTML += "구매가격 : " + price + "만원";

    // 초기화
    // 1. input 태그별
    // for (let = 0; i < inputs.length; i++)
    // input[i].value = '';

    // 2. 폼단위
    // document.querySelector("[name=purchaseFrm]");
    // document.forms[0]
    // document.forms.purchaseFrm
    // document.purchaseFrm.reset(); // 폼하위의 input태그 value속성 초기화
}