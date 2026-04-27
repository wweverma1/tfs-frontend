# TFS Frontend

This is the front-end application for TFS, a cinema theatre ticket booking platform inspired by BookMyShow. This project allows visitors to browse upcoming films, view movie details, and purchase tickets.

## 🚀 Live Demo
[View Deployment on Netlify](https://tfs-frontend.netlify.app)

## ✨ Key Features
* **Movie Browsing**: Explore available and upcoming movies on the home page.
* **Dedicated Movie Pages**: View specific details for individual movies (via the `/movie/:movie_id` route), with support for video playback using `react-player`.
* **Interactive Ticket Booking**: Select seats seamlessly utilizing the `react-seat-picker` library across the dedicated booking routes.
* **User Authentication**: Secure login access.
* **Digital Tickets**: View confirmed booking and ticket details.

## 🛠 Tech Stack
* **Core Framework**: React.js
* **State Management**: Redux Toolkit & React-Redux
* **Routing**: React Router DOM
* **Styling & UI**: Styled-Components, FontAwesome, React-Slick (Carousels), and React-Tooltip

## 💻 Local Development Setup

To run this project locally, clone the repository and run the following commands:

### `npm install`
Installs the necessary project dependencies defined in `package.json`.

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder, optimizing performance and minifying bundles.
