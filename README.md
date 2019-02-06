![CF](http://i.imgur.com/7v5ASc8.png) LAB 30
=================================================

## Lab 30: Project City Explorer

### Author: George Raymond, Fletcher LaRure, Ryan Gallaway

### Links and Resources
* [repo](https://github.com/georgeraymond92/30-project-city-explorer)
* [travis](http://xyz.com)
* [back-end]https://city-explorer-backend.herokuapp.com) (however, not necessary with API harcoded)
* [AWS deployment](http://lab30-rfg.s3-website-us-west-2.amazonaws.com/) 

#### Documentation
* [swagger](http://xyz.com) (API assignments only)
* [jsdoc](http://xyz.com) (All assignments)

### Components
#### `footer.js`
#### `Header.js`
#### `map.js`
#### `meetup.js`
#### `movie.js`
#### `resultstring.js`
#### `searchform.js`
#### `trails.js`
#### `weather.js`
#### `yelp.js`

## Requirements
* Re-Implement the City Explorer Front-End using React
* With the exception the landing page, match the design and behavior of the [current application](https://codefellows.github.io/city_explorer/)
* Bypass the home page. Rather than ask for an API URL, use the deployed API, located here:
    * https://city-explorer-backend.herokuapp.com
* Accept an input for city, state
* Fetch the location from the API
* Call the API for each service to retrieve the correct data
* Render into each column, the properly formatted results of each service call

### Setup
#### `.env` requirements
* `PORT` - Port described in ENV

#### Running the app
* `npm start`
  
#### Tests
* `npm test`?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
![City Explorer UML](./assets/uml.jpg)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
