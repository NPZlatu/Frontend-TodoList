# Todo Frontend

## Description

This is a React-based frontend application for a Todo app. It includes dependencies for routing, UI notifications, API requests, and testing. This project was created as part of Assignment 1 for my CI/CD course. I am currently studying at the Auckland Institute of Studies.

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Demo

A live demo of the project.

[Click here to view the demo](https://frontend-todo-list-nine.vercel.app/)

## Installation

Ensure you have [Node.js](https://nodejs.org/) installed. Then, clone the repository and install dependencies:

```sh
git clone https://github.com/NPZlatu/Frontend-TodoList
cd todo_frontend
npm install
```

## Usage

### Start Development Server

This command starts the development server:

```sh
npm start
```

The application will be available at `http://localhost:3000/`.

### Build for Production

To create a production build, run:

```sh
npm run build:prod
```

The output will be placed in the `build/` folder.

### Build for Local Environment

To create a build for local use:

```sh
npm run build:local
```

## Features

- **React 18** for building UI components.
- **React Router** for navigation.
- **Axios** for making API requests.
- **TailwindCSS** for styling.
- **React Toastify** for notifications.
- **Cypress** for end-to-end testing.
- **React Testing Library** for unit testing.
- **Jest** for running tests.
- **Cross-env** for environment variable management.

## Configuration

The `src/config.js` file acts as a configuration file for different environments. It contains settings for API URLs and other environment-specific values.

Example configuration:

```
export const API_URL = "https://api.example.com";
```

## Project Structure

```
📦 todo_frontend
├── 📂 public          # Static files (index.html, favicons, etc.)
├── 📂 src             # Application source code
│   ├── 📂 components  # Reusable UI components
│        ├── 📂 App
│        │     ├── AppComponent.js # Main application component
│        │     ├── AppComponent.css # Main component styles
│        │     ├── AppComponent.test.js # Unit tests for Main component
│        ├── Other Components
│   ├── 📜 config.js   # Configuration file
│   └── 📜 index.js    # Entry point
├── 📂 cypress         # End-to-end tests
├── 📜 package.json    # Dependencies and scripts
├── 📜 tailwind.config.js # TailwindCSS configuration
└── 📜 README.md       # Documentation
```

## Available Scripts

```sh
npm start       # Start the development server
npm run build   # Build for production
npm test        # Run unit and integration tests
npm run e2e:local  # Run Cypress E2E tests in local environment
npm run e2e:prod   # Run Cypress E2E tests in production environment
```

## Testing

### Run Unit and Integration Tests

```sh
npm test
```

### Run End-to-End Tests

For local environment:

```sh
npm run e2e:local
```

For production environment:

```sh
npm run e2e:prod
```

## Deployment

This project is deployed using [Vercel](https://vercel.com/). Any changes pushed to the repository trigger an automatic deployment.

To manually build and deploy:

```sh
npm run build
```

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push the branch: `git push origin feature-name`
5. Submit a Pull Request.

## License

This project is licensed under the MIT License.
