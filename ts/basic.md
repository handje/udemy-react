JS는 동적타입언어

- 함수 선언시에는 타입이 지정되지 않기때문에 에러없이 예상하지 못한 결과가 나올 수 있음
  => 정적타입언어인 타입스크립트 사용

ts는 브라우저에서 동작하지 않음 -> 자바스크립트로 컴파일해야함, 컴파일 과정에서 타입은 삭제됨

# 1. Types

```ts
//기본유형(Primitives type) : number, string, boolean
let age: number;
age = 10; //"son" => error
let name: string = "son";
let isRight: boolean;

//Object
let hobbies: string[];
hobbies = ["cooking", "singing"];

let person: {
  name: string;
  age: number;
};
person = {
  name: "son",
  age: 20,
  //isEmployee:true => error
};

let people: {
  name: string;
  age: number;
}[];
people = [
  { name: "son", age: 20 },
  { name: "jieun", age: 30 },
];

//타입추론(type inference)
let course = "react";
course = 1234; // error, 타입추론으로 string으로 사용
```

# 2.유니온(UNION)

- 여러 타입을 지정할 수 있음
- 값과 타입을 좀더 유연하게 정의할 수 있게 해줌

```ts
let course: string | number | boolean = "React";
course = 1234; // ok
```

# 3. 타입별칭(Type Aliases)

- 타입 중복 코드 방지

```ts
type Person = {
  name: string;
  age: number;
};
let person: Person;
let people: Person[];
```

# 4. Functions & types

- 매개변수,리턴에 타입 지정 가능
- 리턴은 타입추론이 발생하기 때문에 특별한 경우를 제외하고는 굳이 지정할 필요는 없음
- void: 함수의 반환타입, 아무것도 return하지 않을때 사용되는 특수한 타입

```ts
function add(a: number, b: number) {
  return a + b; //return값은 number로 타입 추론
}

function printOutput(value: any): void {
  console.log(value);
}
```

# 5. 제네릭(Generics)

- 사용이유 : 여러 타입이 가능할 경우 any를 사용하게 되면 타입스크립트는 실제 함수가 사용될때 매개변수로 들어오는 값의 타입을 알지못하기 때문에 예상하지 못한 결과를 막을 수 없음

```ts
function inserAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...ary];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = inserAtBeginning(demoArray, -1); //[-1,1,2,3]
const stringArr = insertAtBeginning(["a", "b", "c"], "d");
updatedArray[0].split(""); //error, any로 할 경우 타입추론이 불가능하여 에러가 발생하지 않음
```
