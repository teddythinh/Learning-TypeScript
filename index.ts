const num : number = 10;
const str : string = "Hello World";
const bool : boolean = true;
const thinh = {
  age: 10,
  deptraivl: true,
};

interface Person {
  age: number;
  deptraivl: boolean;
}

const thinh123: Person = {
  age: 10,
  deptraivl: true,
};

const people: Array<Person> = [];

people.push({
  age: 10,
  deptraivl: false,
});

for(const person of people) {
    console.log(person.age)
}

enum Color {
    Red, Blue, Green
}

function add(a: number, b: number) {
    return {a, b};
} 

const result = add(10, 20);
result.a;