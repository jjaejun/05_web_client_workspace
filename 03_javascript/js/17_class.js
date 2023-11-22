/**
 * class
 * - 생성자함수의 개선된 문법
 * - constructor 생성자
 * - 필드
 * - 메소드
 * - static 필드
 * - static 메소드
 */
const test1 = () => {
    const honggd = new Person('홍길동', 33);
    console.log(honggd);
    honggd.sayHello();

    console.log(Person, typeof Person);
    console.log(Person.prototype);
    console.log(Person.prototype == honggd.__proto__);

    // static : 생성자함수 소속의 필드/메소드
    console.log(Person.x);
    Person.y();
};

// this용법5. class안의 this는 현재객체를 가리킨다.
class Person {
    static x = 100;
    static y(){
        console.log('yyyyyyyyyy');
    }

    constructor(name, age){
        // new 연산자에 의해 호출되는 생성자 메소드
        this.name = name;
        this.age = age;
    }

    // Person.prototype에 작성 - Person객체가 상속하고, 공유함
    sayHello(){
        console.log(`안녕하세요, ${this.age}세 ${this.name}입니다.`);
    }
}

/**
 * 상속
 * - extends 부모클래스
 * - 생성자안에서 super() 부모생성자 호출가능
 * - override 가능
 * - super. 부모 필드/메소드에 접근 가능
 */
const test2 = () => {
    const honggd = new Dev('홍길동', 33, 'Javascript');
    console.log(honggd);

    honggd.sayHello();
}

class Dev extends Person {
    constructor(name, age, lang) {
        super(name, age); // Person.apply(this. [name, age]);
        this.lang = lang;
    }

    // override
    sayHello(){
        super.sayHello();
        console.log(`저는 ${this.lang}개발자 입니다.`);
    }
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
const test3 = () => {
    const books = [
        new Novel('작별하지 않는다', '한강', 12600, '서정'),
        new Novel('세이노의 가르침', '세이노', 6480, '자기개발'),
        new Novel('말의 진심', '최정우', 15750, '심리')
    ];

    books.forEach((book) => {
        book.read('이재준');
    });
}

function Book(title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;
}

Book.prototype.info = function(){
    console.log(`${this.title}/${this.author}/${this.price}원`);
}

class Novel extends Book {
    constructor(title, author, price, type) {
        super(title, author, price);
        this.type = type;
    }

    read(name){
        super.info();
        console.log(`${name} ${this.title}(${this.type})을 읽는다~ 📖`);
    }
}