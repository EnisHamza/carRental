# Car Rental API

This is a REST API for a rental car system built with Node,Express Js and MongoDB.

## Setup

1. Clone the Repository:
   git clone [https://github.com/EnisHamza/carRental.git]
   cd carRental

2. Install Dependencies:
   npm install

3. Create a .env file in the root directory with the following content:
   PORT = 3000
   MONGODB_URI = mongodb://localhost:27017/carRental
   JWT_SECRET = your_jwt_secret_key (mine is 97aef4825a794232a7701d558bed914dcb36be59597319026d2ab5b99f7fd6d4)

5. Start the Server:
   node server.js or npm start

Endpoints
POST /register: Register a new user.
POST /login: Login with username and password
GET /my-profile: Get the profile of the logged-in user (requires JWT authentication).
GET /rental-cars: Get a list of available cars to rent. Can be filtered by year, color, steering_type, and number_of_seats.

Testing
You can use tools like Postman to test the endpoints.
POST http://localhost:5000/auth/register  {"fullName": "John Doe", "email": "john@example.com", "username": "johndoe", "password": "password123"},
POST http://localhost:5000/auth/login  {"username": "johndoe", "password": "password123"},
GET http://localhost:5000/auth/my-profile  "Authorization: <jwt-token>",
GET http://localhost:3000/cars/rental-cars or fliter by color http://localhost:3000/cars/rental-cars?color=black
