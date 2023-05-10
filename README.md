
# Library Management System

The Library Management System is a web application designed to efficiently manage the operations and resources of a library. It provides a digital platform for librarians and members to streamline various library tasks, such as managing memberships, and tracking book availability.

## Key Features

- Book Management: Librarian can manage books, includes adding books, updating books, and deleting books.
- Member Management: Manage library memberships, including member registration, member profile updation, and account termination.
- User Friendly: Provides a user-friendly interface for members and librarians.

## Database structure (MongoDB Atlas)

#### Database Name: IIT-M
#### Collections:
- users: This collection stores information about the library users or members. Each document (record) in the "users" collection represents a user and contains fields like username, password, role, and accessToken. These fields hold user-specific data, such as the user's username, password, role (e.g., member, librarian), and accessToken for authorization.
- books: The "books" collection holds details about the books available in the library. Each document in this collection represents a book and contains fields like bookId, bookName, and bookStatus. These fields store specific information about each book, such as its bookId, bookName, and bookStatus (e.g., AVAILABLE, UNAVAILABLE).

## Relationships between collections
![App Screenshot](https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81p8BSpmHePK_ZpZM7nUIPLIgvMqfkjr1-X0DDX4_vHUxLIkAc3L7ov20PEaOfGovJ-75IZRUJOOKqs8JohgIa-jL0vd=w1860-h953)


## API Reference

#### Sign Up

```http
  POST /signup
```
### Requirements:

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required** |
| `password`      | `string` | **Required** |
| `role`      | `string` | **Required** |

Request Body:

{
  "username": "JohnDoe",
  "password": "password123"
  "role": "member",
}

### Output:

Success Response:
- HTTP Status Code: 200 (OK)
- Response Body: { status: 201, message: "User created" }

### Possible Errors:

Error: Username already exists

HTTP Status Code: 409 (Conflicts)

Response Body: { status: 409, message: "Username already exists" }

Error: Internal Server Error

HTTP Status Code: 500 (Internal Server Error)

Response Body: { status: 500, message: "Internal Server Error" }

#### Login

```http
  POST /login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

