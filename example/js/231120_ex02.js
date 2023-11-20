function ex01() {
    const str = prompt("사용자 입력 (prompt)");
    if (!str) {
        alert("그린나이트, 까모메식당, 본아이덴티티, 쇼생크탈출, 진격의 거인");
        return;
    }

    const movies = str.split(", ").sort();

    alert(movies[0] + ", " + movies[1] + ", " + movies[2] + ", " + movies[3] + ", " + movies[4]);
}

function ex02() {
    const rainbow = ["빨", "주", "노", "초", "파", "남", "보"];

    console.log(rainbow);
    rainbow.push(rainbow.shift());
    console.log(rainbow);
    rainbow.push(rainbow.shift());
    console.log(rainbow);
    rainbow.push(rainbow.shift());
    console.log(rainbow);
    rainbow.push(rainbow.shift());
    console.log(rainbow);
    rainbow.push(rainbow.shift());
    console.log(rainbow);
    rainbow.push(rainbow.shift());
    console.log(rainbow);
}

function ex03() {
    const arr1 = [];
    const arr2 = [];

    for(let i = 1; i < 101; i++) {
        arr1.push(i);
    }
    console.log(arr1);

    console.log(arr1.sort(function(a, b){
        if (a > b) return -1;
        if (b < a) return 1;
        return 0;
    }));
    console.log(arr2);
}