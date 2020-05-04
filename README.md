## Simple Forum App

The Objective of this project is to create a simple forum with JSON placeholder API.

You can [browse the app here](https://milinpaul.github.io/flight-search-app/).

## Technologies Used:

- [React](https://reactjs.org/)<br>
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>
- [JSON Placeholder API](https://jsonplaceholder.typicode.com/).<br>
- [Styled Components for Component Styling](https://styled-components.com/).<br>
- [React Router Dom for Routing](https://reacttraining.com/react-router/web/guides/quick-start).<br>
- Used [Domain Modular Pattern] for Folder Structure & Architecture.<br>

## Overview of an App Structure

In this simple forum app, the code base is structured as small functional units using the Domain Modular Pattern. The whole source code is divided into

#### [App](https://github.com/milinpaul/simpleforum/tree/master/src/App)

This folder contains all the application level code.

#### [Components](https://github.com/milinpaul/simpleforum/tree/master/src/App/Components)

This folder contains presentational components which will take input as props and render JSX elements. It also contains some resuable styled components as well.

#### [Containers](https://github.com/milinpaul/simpleforum/tree/master/src/App/Containers)

This folder contains connect components which shares state from redux and pass to child components as props.

#### [Hooks](https://github.com/milinpaul/simpleforum/tree/master/src/App/Hooks)

This folder contains `useRequest.js`, which uses browser fetch API in the background and return an array of data and loading value to use it in the container.

#### [Routes](https://github.com/milinpaul/simpleforum/tree/master/src/App/Routes)

This folder contains routes of this application. I used react-router-dom for routing purposes.

#### [Styles](https://github.com/milinpaul/simpleforum/tree/master/src/App/Styles)

This folder contains all the common styles for styled component plugin. `GlobalStlyes.js` is used as a reset css for removing the default padding and margins for the browser. And added default font family and font size to the html body. `Theme.js` file hold a primary and seconadry color to use consistent in the application. It can be expanded for later purposes.

#### [Helpers](https://github.com/milinpaul/simpleforum/tree/master/src/App/helpers)

This folder contains all the helper functions required in the application.

### To run the project:

1. Clone this repository.
2. Run `npm install`
3. Run `npm start`
