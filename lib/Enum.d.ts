export default class Enum<T> {
    static items: Enum<any>[];
    static createEnum(value: any): Enum<any>;
    static isInit(): boolean;
    static list(): Enum<any>[];
    static valueOf(value: any): Enum<any>;
    private static initEnums();
    value: T;
    constructor(value: T);
    string(): string;
}
