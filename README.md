# Employee Tracker
This is a simple [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) application built with JavaScript and React which allows users to interact with an employees list.

## Libraries Used
* create-react-app
* React-Router
* Redux + React-Redux
* Bootstrap + Reactstrap

## Running The App
This application can be run locally by first cloning this repo and then running:

```
npm install
npm run build
npm start
```

You can then visit http://localhost:1234 in your browser to view the application.

Alternatively you can view a running version of this application hosted on Heroku [here](https://employeetrackertool.herokuapp.com/login).

## Using The App
Start by entering your name to login to the app. 

You then have the ability to:

* View all users
* Filter users by their status (active/inactive)
* Create new users
* View details for individual users
* Update & delete users

As there is no persistance layer to this application, all changes will be lost on a browser refresh and the employee list will revert to the default values.