import { Hotel } from "./hotel.js";

const REGISTER_BUTTON = document.getElementById("id_register");
REGISTER_BUTTON.addEventListener("click", () => {
  createHotel();
});

function createHotel() {
  const name = document.getElementById("id_name").value;
  const numberOfRooms = Number(document.getElementById("id_rooms").value);
  const numberOfFloors = Number(document.getElementById("id_floors").value);
  const totalArea = Number(document.getElementById("id_area").value);

  const registeredHotel = new Hotel({
    name: name,
    numberOfRooms: numberOfRooms,
    numberOfFloors: numberOfFloors,
    totalArea: totalArea,
  });

  let hotelsList = [];
  hotelsList.push(registeredHotel);

  let displayHotels = `The registered hotels are: `;

  for (let i = 0; i < hotelsList.length; i++) {
    displayHotels += `${hotelsList[i].name}, `;
  }
  console.log(hotelsList);
  console.log(displayHotels);
  //   document.getElementById(
  //     "id_registered_hotels"
  //   ).innerHTML = `${displayHotels}`;

  return registeredHotel;
}
