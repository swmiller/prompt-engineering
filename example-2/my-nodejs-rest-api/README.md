# My Node.js REST API

This is a simple REST API built with Node.js and Express that responds with "Hello, World!" when accessed.

## Project Structure

```
my-nodejs-rest-api
├── src
│   ├── app.js
│   ├── controllers
│   │   └── helloController.js
│   ├── routes
│   │   └── helloRoute.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory:

   ```
   cd my-nodejs-rest-api
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the API

To start the server, run:

```
npm start
```

The API will be running at `http://localhost:3000/hello`.

### API Endpoint

- **GET /hello**: Returns "Hello, World!" as a response.

## License

This project is licensed under the MIT License.