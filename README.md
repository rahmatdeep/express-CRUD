# Express CRUD API with MongoDB

This is a basic Express CRUD API for managing TODOs, using MongoDB as the database. The API provides endpoints for creating, updating, retrieving, and deleting TODOs.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository

#### bash

```
git clone <repository-url>
```

2. Install dependencies

#### bash

```
npm install
```

3. Start the server

#### bash

```
node index.js
```

## API Routes

### 1. Create TODO

Endpoint: POST /todos

Request:

#### JSON

```
{
  "title": "Your TODO Title",
  "description": "Your TODO Description"
}

```

Response (Success):

#### JSON

```
{
  "msg": "Todo created"
}
```

Response (Error):

#### JSON

```
{
  "msg": "You sent the wrong inputs",
  "error": "<error-details>"
}
```

### 2. Get All TODOs

Endpoint: Get /todos

Response (Success):

#### JSON

```
{
  "todoData": [
    {
      "_id": "your-todo-id",
      "title": "Your TODO Title",
      "description": "Your TODO Description",
      "completed": false
    },
    // ... other TODOs
  ]
}

```

Response (Error):

#### JSON

```
{
  "msg": "Server Error"
}
```

### 3. Mark TODO as Completed

Endpoint: PUT /completed

Request:

#### JSON

```
{
  "id": "your-todo-id"
}


```

Response (Success):

#### JSON

```
{
  "msg": "Todo is completed"
}

```

Response (Error):

#### JSON

```
{
  "msg": "You sent the wrong inputs"
}
```

### 4. Update TODO Description

Endpoint: PUT /description

Request:

#### JSON

```
{
  "id": "your-todo-id",
  "description": "Updated TODO Description"
}


```

Response (Success):

#### JSON

```
{
  "msg": "Description updated"
}

```

Response (Error):

#### JSON

```
{
  "msg": "You sent the wrong inputs"
}

```

### 5. Delete TODO

Endpoint: DELETE /todo

Request:

#### JSON

```
{
  "id": "your-todo-id"
}

```

Response (Success):

#### JSON

```
{
  "msg": "Todo deleted"
}
```

Response (Error):

#### JSON

```
{
  "msg": "Server Error"
}
```
