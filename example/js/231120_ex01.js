function printProduct() {
    const inputs = document.getElementsByTagName("input");
    const goodirum = inputs[0].value;
    console.log(goodirum);
    const productAmount = inputs[1].value;
    console.log(productAmount);
    const productLevel = inputs[2].value;
    console.log(productLevel);
    const message = document.getElementById("message").value;
    console.log(message);
    console.dir(message);

    result.innerHTML = "상품명 : " + goodirum + "<br>" + "납품수량 : " + productAmount + "<br>" + "납품등급 : " + productLevel + "<br>" + "기타사항 : " + message;
}