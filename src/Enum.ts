export default class Enum<T> {

  static items: Enum<any>[];

  static createEnum(value: any) {
    if (!this.isInit()) {
      this.initEnums();
    }

    const item = new this(value);
    this.items.push(item);

    return item;
  }

  static isInit(): boolean {
    return !!this.items;
  }

  static list(): Enum<any>[] {
    return this.items;
  }

  static valueOf(value: any): Enum<any> {
    return this.items.filter( item => {
      return item.value === value;
    })[0] as Enum<any>;
  }

  private static initEnums() {
    Object.defineProperty(this, "items", {
      value: [] as Enum<any>[],
      configurable: false,
      enumerable: true,
      writable: true
    });
  }

  value: T;

  constructor(value: T) {
    this.value = value;
  }

  string(): string {
    return this.value + "";
  }
}
