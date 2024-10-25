# NASA Photo of the Day App

## Description

This project is a web application that allows users to view NASA's Astronomy Picture of the Day (APOD) along with its details. Users can select a date using a date picker, and the app fetches and displays the relevant photo, video, or other media along with its title and copyright information. The app also supports sharing the media link and provides a gallery view with infinite scrolling for additional exploration.

## Features

- **Date Picker**: Select any date from 1995 to the current day to view the APOD for that date.
- **Media Display**: View images and videos, with appropriate thumbnails based on the media type.
- **Infinite Scrolling**: Load more photos as you scroll down the gallery.
- **Sharing**: Easily share the media link using the share button.

## Technologies Used

- Vite React
- Material-UI (MUI)
- Axios for API requests
- React Copy to Clipboard for sharing functionality
- React Infinite Scroll 
- NASA's APOD API

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Navigate into the project directory:
   ```bash
   cd <project-name>
3. Install dependencies:
   ```bash
   npm install
4. Create a .env file in the root of your project and add your NASA API key:
   ```bash
   VITE_API_KEY=<your_api_key>
5. Start the development server:
   ```bash
   npm run dev

## Usage
* Open your browser and navigate to the specified port to access the app.
* See the APOD.
* Explore the gallery by scrolling down to load more content.
* Click on the "Share" button to copy the media link to your clipboard.

