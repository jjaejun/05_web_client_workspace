/**
 * javascript는 prototype기반의 상속모델을 제공
 * - prototype객체가 부모역할
 */
const test1 = () => {
    const cars = [];
    cars.push(new Car("그렌져"));
    cars.push(new Car("소나타"));
    cars.push(new Car("카니발"));

    console.log(cars);

    cars.forEach((car) => car.move());
}

function Car(name) {
    this.name = name;
    // this.move = function(){
    //     console.log(`${this.name}이/가 이동합니다.🚗`);
    // };
}

Car.prototype.move = function(){
    console.log(`${this.name}이/가 이동합니다.🚗`);
}

/**
 * Car를 상속하는 Truck
 * - capacity 적재량
 * 
 * 상속구현
 * 1. 부모생성자호출 apply
 * 2. 프로토타입객체 지정 Object.create
 * 3. 프로토타입객체의 생성자함수 연결
 */
const test2 = () => {
    const bongo = new Truck('봉고', 1_000);
    console.log(bongo);
    bongo.move();
}

function Truck(name, capacity) {
    // 1. 부모생성자함수 호출 - 현재객체 기준으로 Car생성자함수 호출(super 대신)
    Car.apply(this, [name]);

    this.capacity = capacity;
}

// 2. 프로토타입객체 생성
// 전달한 객체를 상속하는 객체를 생성
Truck.prototype = Object.create(Car.prototype);
// 3. 프로토타입객체에 생성자함수 연결
Truck.prototype.constructor = Truck;

/**
 * this binding 함수
 * - apply(this객체, [...params])
 * - call(this객체, ...params) 호출
 * - bind(this객체) 바인딩 후 함수 반환
 */
const test3 = () => {
    const foo = function(a, b){
        // 일반함수에서의 this는 window를 가리킨다.
        console.log(this.id, a + b);
    };
    foo();

    const obj = {
        id : 'honggd1234'
    };
    // foo.apply(obj, [10, 20]);
    // foo.call(obj, 10, 20);
    const foo2 = foo.bind(obj);
    foo2(10, 20);
}

/**
 * Book
 * - title 책제목
 * - author 저자
 * - price 가격
 * - info메소드 : 책제목/저자/가격 출력
 * 
 * Novel
 * - Book속성전부
 * - type 장르 (연애 | SF | 심리 | 서정)
 * - read(이름) : ${누가} ${책제목}(${타입})을 읽는다~ 📖
 */
const test4 = () => {
    const books = [
        new Novel('작별하지 않는다', '한강', 12600, '서정'),
        new Novel('세이노의 가르침', '세이노', 6480, '자기개발'),
        new Novel('말의 진심', '최정우', 15750, '심리')
    ];
    books.forEach((book) => {
        book.info();
        book.read('이재준');
    })
}

function Book(title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;
}

Book.prototype.info = function(){
    console.log(`${this.title}/${this.author}/${this.price}원`);
}

// apply 사용시 [] 필수!!
// function Novel(title, [author, price, type]){
//     Book.apply(this, [title, author, price]);
//     this.type = type;
// }

function Novel(title, author, price, type){
    Book.call(this, title, author, price);
    this.type = type;
}

Novel.prototype = Object.create(Book.prototype);
Novel.prototype.constructor = Novel;

Novel.prototype.read = function(name){
    console.log(`${name} ${this.title}(${this.type})을 읽는다~ 📖`);
}

/**
 * - 생성자함수객체 - 
 * - 프로토타입
 * - 생성객체 - new연산자 호출결과
 * 
 * 화살표함수는 this를 재바인딩 할 수 없다.
 */
const test5 = () => {
    // A
    // A.prototype
    // new A()

    const a = new A();
    console.log(a.id);
    a.hello();

    // static
    console.log(A.id);
    A.hello();
}

function A() {
    this.id = '가나다'
    this.hello = function(){
        console.log('안녕');
    }
}

A.prototype.id = 'ABC';
A.prototype.hello = function(){
    console.log('HELLO');
}

// 함수객체에 직접 속성으로 등록(static)
A.id = 'xxx';
A.hello = function(){
    console.log('xxx');
}