"use strict";
var Enum = (function () {
    function Enum(value) {
        this.value = value;
    }
    Enum.createEnum = function (value) {
        if (!this.isInit()) {
            this.initEnums();
        }
        var item = new this(value);
        this.items.push(item);
        return item;
    };
    Enum.isInit = function () {
        return !!this.items;
    };
    Enum.list = function () {
        return this.items;
    };
    Enum.valueOf = function (value) {
        return this.items.filter(function (item) {
            return item.value === value;
        })[0];
    };
    Enum.initEnums = function () {
        Object.defineProperty(this, "items", {
            value: [],
            configurable: false,
            enumerable: true,
            writable: true
        });
    };
    Enum.prototype.string = function () {
        return this.value + "";
    };
    return Enum;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Enum;
