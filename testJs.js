// 1. Написать функцию которая принимает в себя строчное значение
// состоящее из одного слова. В слове могут быть буквы разных
// регистров. Результатом выполнения данной функции должна быть
// строка, в которой первая буквы заглавная, а все последующие в
// нижнем регистре
// Пример:
// someFn(‘пиТеР’) // Питер
// someFn(‘javaScript’) // Javascript

const someFn = (text) => {
  let newString = text[0].toUpperCase() + text.slice(1).toLowerCase();
  return console.log(newString);
};
someFn("пиТеР");
someFn("javaScript");

//2//

const sayHello = (name) => {
  if (name === "Mark") {
    return console.log(`Hi,${name}`);
  }
  return console.log(`Hello,${name}`);
};
sayHello("Oleg");
sayHello("Victor");
sayHello("Mark");

//3//
// Написать функцию, которая принимает массив строк и допустимую
// длину. Результатом выполнения должен быть новый массив,
// состоящий из строк, длина которые не превышают допустимую
// длину.
// Пример
// filterStrings([‘I love JS’, some very long string, ‘hell’], 9)
// // [‘I love JS’, ‘hell’]
// ---
// filterStrings([‘a’, ‘ab’, ‘abc’], 2) // [‘a’, ‘ab’]

const filterStrings = (string, number) => {
  let filterArr = string.filter((str) => str.length <= number);
  return console.log(filterArr);
};
filterStrings(["a", "ab", "abc"], 2);
filterStrings(["I love JS", "some very long string", "hell"], 9);
