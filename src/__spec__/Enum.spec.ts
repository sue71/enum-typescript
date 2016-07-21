/* global describe, it, expect */
/* tslint:disable:no-unused-variable */
import { expect } from "chai";
import * as React from "react";
import TestUtils = require("react-addons-test-utils");
import Enum from "../Enum";

class Animal extends Enum<string> {
  static Dog = Animal.createEnum("Dog");
  static Cat = Animal.createEnum("Cat");

  string() {
    const value = this.value;
    return `I like ${value}.`;
  }
}

describe("Enum", () => {

  beforeEach(() => {
  });

  describe("#valueOf", () => {

    it("should get enum from value", () => {
      expect(Animal.valueOf("Dog")).to.eq(Animal.Dog);
      expect(Animal.valueOf("Cat")).to.eq(Animal.Cat);
    });

  });

  describe("#createEnum", () => {

    it("check if it works", () => {
      const enumValue = Animal.createEnum("Fish");
      expect(enumValue.value).to.eq("Fish");
    });

  });

  describe("#string", () => {

    it("should get string value from enum", () => {
      expect(Animal.Dog.string()).to.eq("I like Dog.");
      expect(Animal.Cat.string()).to.eq("I like Cat.");
    });

  });

  describe("#list", () => {

    it("should list all values", () => {
      const list = Animal.list();
      expect(list.length).to.eq(3);
      expect(list[0].value).to.eq("Dog");
      expect(list[1].value).to.eq("Cat");
      expect(list[2].value).to.eq("Fish");
    });

  });

});
