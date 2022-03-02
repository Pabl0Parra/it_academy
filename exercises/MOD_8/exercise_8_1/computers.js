export class Computer {
  #brand;
  #model;
  #processor;
  #ram;
  #hardDriveSize;

  constructor(brand, model, processor, ram, hardDriveSize) {
    this.#brand = brand;
    this.#model = model;
    this.#processor = processor;
    this.#ram = ram;
    this.#hardDriveSize = hardDriveSize;
  }

  //create consult attributes methods
  getBrand() {
    return `This computer is made by ${this.#brand}`;
  }
  getModel() {
    return `This computer model is ${this.#model}`;
  }
  getProcessor() {
    return `This computer's processor is ${this.#processor}`;
  }
  getRam() {
    return `This computer has ${this.#ram} + GB of RAM`;
  }
  getHardDriveSize() {
    return `This computer has a hard drive of ${this.#hardDriveSize} GB`;
  }

  //create modifying methods
  set(newProcessor) {
    this.#processor = newProcessor;
  }
  set(newRam) {
    this.#ram = newRam;
  }
  set(hardDriveSize) {
    this.#hardDriveSize = hardDriveSize;
  }
  //create method that receives a parameter & returns "Currently executing X"
  showBeingExecuted(programName) {
    return `Currently executing ${programName}`;
  }
  //create method that returns all the computers attributes
  toString() {
    return `This computer is made by ${this.#brand}, the model is ${
      this.#model
    }, the processor name is ${this.#processor}, it has ${
      this.#ram
    } + GB of RAM & a hard drive of ${this.#hardDriveSize} GB`;
  }
}
