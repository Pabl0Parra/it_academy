//Create class
class Computers {
  brand;
  model;
  processor;
  ram;
  hard_drive_size;

  constructor(brand, model, processor, ram, hard_drive_size) {
    this.brand = brand;
    this.model = model;
    this.processor = processor;
    this.ram = ram;
    this.hard_drive_size = hard_drive_size;
  }

  //create consult attributes methods
  getBrand() {
    return `This computer is made by ${this.brand}`;
  }
  getModel() {
    return `This computer model is ${this.model}`;
  }
  getProcessor() {
    return `This computer's processor is ${this.processor}`;
  }
  getRam() {
    return `This computer has ${this.ram} + GB of RAM`;
  }
  getHardDriveSize() {
    return `This computer has a hard drive of ${this.hard_drive_size} GB`;
  }

  //create modifying methods
  set(processor) {
    this.processor = processor;
  }
  set(ram) {
    this.ram = ram;
  }
  set(hardDriveSize) {
    this.hardDriveSize = hardDriveSize;
  }

  //create method that receives a parameter & returns "Currently executing X"
}
