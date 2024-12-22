# Task Management API

This is a RESTful API for managing tasks and user authentication, built using Node.js, Express, and MongoDB.

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/)
- A package manager like npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/mayuryalij/VE3---Node.Js-Developer-Intern>
   cd <Server>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=5000
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will start on `http://localhost:5000`.

## API Endpoints

### Authentication

#### Register a New User

**POST** `/auth/register`

**Request Body:**
```json
{
  "username": "user1",
  "password": "password123"
}
```

**Responses:**
- `201`: User registered successfully.
- `400`: Validation error.

#### Log in an Existing User

**POST** `/auth/login`

**Request Body:**
```json
{
  "username": "user1",
  "password": "password123"
}
```

**Responses:**
- `200`: Login successful.
- `400`: Invalid credentials.
- `404`: User not found.

### Tasks

#### Retrieve All Tasks

**GET** `/tasks`

**Responses:**
- `200`: List of all tasks.
- `401`: Unauthorized. Token is missing or invalid.

#### Retrieve a Task by ID

**GET** `/tasks/{id}`

**Path Parameters:**
- `id`: The ID of the task to retrieve.

**Responses:**
- `200`: Task details.
- `404`: Task not found.

#### Create a New Task

**POST** `/tasks`

**Request Body:**
```json
{
  "num": "001",
  "title": "Task Title",
  "description": "Task Description",
  "writername": "Author Name"
}
```

**Responses:**
- `201`: Task created successfully.
- `400`: Title is required.

#### Update an Existing Task

**PUT** `/tasks/{id}`

**Path Parameters:**
- `id`: The ID of the task to update.

**Request Body:**
```json
{
  "num": "001",
  "title": "Updated Title",
  "description": "Updated Description",
  "writername": "Updated Author"
}
```

**Responses:**
- `200`: Task updated successfully.
- `404`: Task not found.

#### Delete a Task

**DELETE** `/tasks/{id}`

**Path Parameters:**
- `id`: The ID of the task to delete.

**Responses:**
- `200`: Task deleted successfully.
- `404`: Task not found.

## API Documentation

Swagger documentation is available at:

```
https://ve3-node-js-developer-intern.onrender.com/api-docs/#/
```



 
