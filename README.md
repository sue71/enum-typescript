# enum-typescript

JavaScript library for enums using Typescript

## Installation

`enum-typescript` can be installed as an npm module

```
npm install --save enum-typescript
```

## Basic Usage

```ts
import Enum from "Enum";

class Animal extends Enum<string> {
  static Dog = Animal.createEnum("Dog");
  static Cat = Animal.createEnum("Cat");

  string() {
    const value = this.value;
    return `I like ${value}.`;
  }
}

// mapping
Animal.valueOf("Dog") == Animal.Dog;
Animal.valueOf("Cat") == Animal.Cat;

// list
Animal.list(); // [Animal.Dog, Animal.Cat]
```

## Lincense

This project is licensed under the terms of the [MIT license](https://github.com/sue71/enum-typescript/blob/master/LICENSE).
