

https://user-images.githubusercontent.com/80541469/224831439-e951df15-2e08-4ad0-a946-63da6ab7bb99.mp4


## Casino Website
The Casino Website project is created with React + Vite, and it represents a minimal working casino website (MVP), which was given by ComeOn Group as test assignment. For this project, backend is provided by a mock api, while the solution is styled via [Semantic UI](http://semantic-ui.com/) and is set as responsive for various device/screen sizes.

## Assignment Criteria
These parts needs all to be completed for the assignment to be complete:

### Login functionality

* Connect the login form to the /login ajax call.
* On valid username/password, transition to the games list screen.
* On invalid username/password, provide feedback and allow to try again.

### Log out functionality

* Connect the log out button to the /logout ajax call.
* On valid log out, transition to login screen with empty input fields.

### Games list screen

* Requires user to be logged in
* List all games from the /games ajax call.
* List categories from /categories ajax call.
* Provide functionality for filtering by typing.
* Provide functionality to filter by category.
* Make it possible to start a game by clicking on the play icon.

### Game play screen

* Requires user to be logged in
* Load the selected game via the provided API
* Provide a way to go back to the Games list screen

### Install needed packages

```javascript
yarn
```

### Setup mock api
```javascript
yarn add json-server
```

```javascript
yarn mock-server
```

### Start up the project
```javascript
yarn run dev
```
### To start up the project, together with mock-server, run:
```javascript
yarn start
```

### It is possible to login with three accounts:

```
username: rebecka
password: secret

username: eric
password: dad

username: stoffe
password: rock

```
