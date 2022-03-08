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
  const BYE_HOTEL = document.getElementById("byeHotel").value;

  let validateHotel = false;
  let indexPosition = 0;

  for (element of hotelsList) {
    if (element.name === BYE_HOTEL) {
      validateHotel = true;
      break;
    }
    indexPosition++;
  }

  if (validateHotel) {
    hotelsList.splice(indexPosition, 1);
  } else {
    alert(`Hotel not found in database`);
  }

  displayHotels = "Current Hotels: ";

  for (i = 0; i < hotelsList.length; i++) {
    displayHotels += `${hotelsList[i].name}, `;
  }

  document.getElementById("updatedHotelList").innerHTML = `${displayHotels}`;
  alert(`The hotel has been deleted`);
}

function displayHotel() {
  const HOTEL_SHOWING = document.getElementById("displayed").value;

  let validateHotel = false;
  let indexPosition = 0;

  for (element of hotelsList) {
    if (element.name === HOTEL_SHOWING) {
      validateHotel = true;
      break;
    }
    indexPosition++;
  }

  if (validateHotel) {
    document.getElementById("displayHotel").innerHTML = `
    Name: ${hotelsList[indexPosition].name}<br>
    Number of rooms: ${hotelsList[indexPosition].numberOfRooms}<br>
    Number of floors: ${hotelsList[indexPosition].numberOfFloors}<br>
    Total area of the hotel: ${hotelsList[indexPosition].totalArea}m²<br>
    Additional information:
    ${hotelsList[indexPosition].calculateLaborCost()}
            `;
  } else {
    alert("Hotel not found in hotel list");
  }
}
let positionNameOnList = 0;

function modifyHotelName() {
  const HOTEL_NAME_TO_BE_MOD = document.getElementById("hotelName").value;

  const HOTEL_NEW_NAME = document.getElementById("newHotelName").value;

  let validateHotel = false;
  let indexPosition = 0;

  for (element of hotelsList) {
    if (element.name === HOTEL_NAME_TO_BE_MOD) {
      validateHotel = true;
      console.log("Validate true in modify");
      break;
    }

    indexPosition++;
    positionNameOnList = indexPosition;
  }

  if (validateHotel) {
    hotelsList[positionNameOnList].name = HOTEL_NEW_NAME;
    document.getElementById(
      "displayNewName"
    ).innerHTML = `The hotel new name is ${hotelsList[positionNameOnList].name}`;
  } else {
    alert("Hotel not found in hotel list");
  }
  displayHotels = "Current Hotels: ";

  for (i = 0; i < hotelsList.length; i++) {
    displayHotels += `${hotelsList[i].name}, `;
  }

  document.getElementById("displayNewList").innerHTML = `${displayHotels}`;
}

function modifyRooms() {
  const HOTEL_NEW_ROOMS = Number(document.getElementById("newRooms").value);

  hotelsList[positionNameOnList].numberOfRooms = HOTEL_NEW_ROOMS;
  document.getElementById(
    "displayNewRooms"
  ).innerHTML = `After the remodelations, the hotel has now ${hotelsList[positionNameOnList].numberOfRooms} rooms`;
}

function modifyFloors() {
  const HOTEL_NEW_FLOORS = Number(document.getElementById("newFloors").value);

  hotelsList[positionNameOnList].numberOfFloors = HOTEL_NEW_FLOORS;

  document.getElementById(
    "displayNewFloors"
  ).innerHTML = `After the remodelations, the hotel has now ${hotelsList[positionNameOnList].numberOfFloors} floors`;
}

function modifyArea() {
  const HOTEL_NEW_AREA = Number(document.getElementById("newArea").value);

  hotelsList[positionNameOnList].totalArea = HOTEL_NEW_AREA;

  document.getElementById(
    "displayNewArea"
  ).innerHTML = `After the remodelations, the hotel has now ${hotelsList[positionNameOnList].totalArea}m²`;
}
