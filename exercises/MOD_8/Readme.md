//Instructions
They ask us to create an application to register, modify, view and delete hotels.

The hotel class must have the following attributes: name, number of rooms, number of floors and total area of ​​the hotel. As methods, it will only have to have the getters and setters of the class and a method called calculateMaintenance(). This method must take into account that each service person can serve 20 rooms and must show how many people are needed to serve the hotel room service and what is the total cost allocated to the service knowing that these people charge 1,500. € per month.

The createHotel() function must ask the user to enter the name, number of rooms, number of floors and total area of ​​the hotel on the screen (or it must receive these data by parameter). Once you have requested all this data, you must instantiate the class object and add it to an array of hotels.

The darDeBaixaHotel() function must receive the name of the hotel that you want to cancel. The user will enter the name of the hotel and if the hotel is within the array, we will delete it and display a message on the screen informing the user that we have deleted the hotel. If we have not found the hotel within the array, we will notify the user saying that the hotel was not within our application.

The verHotel() function must receive the name of the hotel that you want us to show on the screen, if the hotel is in our application, we will show the hotel, if it is not, we will inform the user saying that the hotel that has been requested is not within our app.
When we display the hotel, in addition to displaying the number of rooms, number of floors, and total area of ​​the hotel, the calculateMaintenance() method will also be called.

The modifyHotel() function should receive the name of the hotel we want to modify. The user will enter the name of the hotel. If we have it in the application, we will ask you if you want to modify the number of rooms, the number of floors or the total area of ​​the hotel. We will make the pertinent modification and notify the user that the modification has been made.
