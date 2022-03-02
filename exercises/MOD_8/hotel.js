export class Hotel {
  name;
  numberOfRooms;
  numberOfFloors;
  totalArea;

  constructor(name, numberOfRooms, numberOfFloors, totalArea) {
    this.name = name;
    this.numberOfRooms = numberOfRooms;
    this.numberOfFloors = numberOfFloors;
    this.totalArea = totalArea;
  }
  get name() {
    return this._name;
  }
  get numbersOfRooms() {
    return this._numberOfRooms;
  }
  get numberOfFloors() {
    return this._numberOfFloors;
  }
  get totalArea() {
    return this._totalArea;
  }
  set name(newName) {
    return (this.name = newName);
  }
  set numberOfRooms(newRooms) {
    return (this.numberOfRooms = newRooms);
  }
  set numberOfFloors(newFloors) {
    return (this.numberOfFloors = newFloors);
  }
  set totalArea(newArea) {
    return (this.totalArea = newArea);
  }
  calculateLaborCost() {
    const NUMBER_OF_EMPLOYEES = this.numberOfRooms / 20;
    const TOTAL_COST = NUMBER_OF_EMPLOYEES * 1500;

    return `The monthly labor cost for the room service department of the ${this.name} hotel is ${TOTAL_COST}`;
  }
}
