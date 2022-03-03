let hotelsList = [];

class Hotel {
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

function registerHotel() {
  const name = document.getElementById("name").value;
  const numberOfRooms = Number(document.getElementById("rooms").value);
  const numberOfFloors = Number(document.getElementById("floors").value);
  const totalArea = Number(document.getElementById("area").value);

  if (
    name == "" ||
    numberOfRooms == "" ||
    numberOfFloors == "" ||
    totalArea == ""
  ) {
    alert("Please fill all the fields!");
  } else {
    alert("The hotel has been submitted");
  }

  const registeredHotel = new Hotel(
    name,
    numberOfRooms,
    numberOfFloors,
    totalArea
  );

  hotelsList.push(registeredHotel);

  displayHotels = `The registered hotels are: `;

  console.log(hotelsList.name);

  for (i = 0; i < hotelsList.length; i++) {
    displayHotels += `${hotelsList[i].name}, `;
  }

  document.getElementById("listHotels").innerHTML = `${displayHotels}`;

  return registeredHotel;
}

function deleteHotel() {
  const nameOfCancelHotel = document.getElementById("byeHotel").value;

  let validateHotel = false;
  let namePosition = 0;

  for (element of hotelsList) {
    if (element.name === nameOfCancelHotel) {
      validateHotel = true;
      console.log("Validate true");
      break;
    }
    console.log(namePosition++);
  }

  if (validateHotel) {
    hotelsList.splice(namePosition, 1);
  } else {
    alert(`Hotel not found in hotel list`);
  }

  displayHotels = "Current Hotels: ";

  for (i = 0; i < hotelsList.length; i++) {
    displayHotels += `${hotelsList[i].name}, `;
  }

  document.getElementById("updatedHotelList").innerHTML = `${displayHotels}`;
  alert(`The hotel has been deleted`);
}

function showHotel() {
  const HOTEL_SHOWING = document.getElementById("displayed").value;
}
