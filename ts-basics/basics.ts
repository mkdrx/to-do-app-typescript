// Primitives

let age: number;

age = 12;

let userName: string;

userName = "mrk";

let isStudent: boolean;

isStudent = true;

// Arrays
// array of strings, in this case
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

// Type Alias
type Person = {
  name: string;
  age: number;
};

// Object type
let person: Person;

// or a variable with an array of objects
let people: Person[];

// Type inference
// typescript sees course variable was set to a string and will auto-set the type
let course: string | number;

course = 34234;

// Functions & types - return type is set by inference if not stated otherwise, e.g:
// const test = (a: number, b: number): number

const test = (a: number, b: number) => {
  return a + b;
};

// => void - means it never returns
const printOutput = (value: any) => {
  console.log(value);
};

// Generics

const insertAtBeginning = <T>(array: T[], value: T) => {
  const newArray = [value, ...array];
  return newArray;
};

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// Will show an error now if we try to: updatedArray[0].split('') - can't split a number
