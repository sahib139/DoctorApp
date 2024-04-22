# Welcome to the Doctor App

## Project Setup
- clone the project on your local.
- Execute `npm install` in the root directory.
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT = 3002`

- Finally, Run the `npm start` in the root directory to run the Server.

- `http://localhost:3002/api/v1/doctor-availability` API link for doctor-Availability using get method.

- Project is also live purpose , you can request in following ways.
    - `http://13.60.19.44:3002/hey`
        - response -> ```
        {
            "message": "hey"
        }
        ```
    - `http://13.60.19.44:3002/api/v1/doctor-availability?date=2025-02-22&time=10:33`
        - response -> ```
        {
          "data": {
            "isAvailable": true
          },
          "success": true,
          "message": "successfully fetch the response",
          "err": {}
        }
        ```
    - `http://13.60.19.44:3002/api/v1/doctor-availability?date=2025-02-22&time=13:01`
        - response -> ```
        {
          "data": {
            "isAvailable": false,
            "nextAvailableSlot": {
              "date": "2025-02-24",
              "time": "08:30"
            }
          },
          "success": true,
          "message": "successfully fetch the response",
          "err": {}
        }
        ```