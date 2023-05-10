
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
- Response Body: { status: 200, message: "Login successful",
      accessToken: accessToken,
      role: role,
      username: username,
    }

### Possible Errors:

Error: Username already exists

HTTP Status Code: 401 (user not found)

Response Body: { status: 401, message: "User not found" }

Error: Internal Server Error

HTTP Status Code: 500 (Internal Server Error)

Response Body: { status: 500, message: "Internal Server Error" }

#### librarian

```http
  GET /librarian
```
### Output:

Success Response:
- HTTP Status Code: 200 (OK)
- Response Body: {
      status: 200,
      message: "Success",
      books: result,
      members: resultMembers,
    }

### Possible Errors:

Error: Username already exists

HTTP Status Code: 403 (Forbidden)

Response Body: { status: 403, message: "Forbidden", role: role }

Error: Internal Server Error

HTTP Status Code: 500 (Internal Server Error)

Response Body: { status: 500, message: "Internal Server Error" }

#### addbook

```http
  POST /addbook
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bookId`      | `string` | **Required** |
| `bookName`      | `string` | **Required** |

Request Body:

{
  "bookId": "123",
  "bookName": "Js interview notes"
}

### Output:

Success Response:
- HTTP Status Code: 201 (created)
- Response Body: { status: 201, message: "Book added" }

### Possible Errors:

Error: Username already exists

HTTP Status Code: 403 (Forbidden)

Response Body: { status: 403, message: "Forbidden", role: role }

Error: Internal Server Error

HTTP Status Code: 500 (Internal Server Error)

Response Body: { status: 500, message: "Internal Server Error" }

#### updatebook

```http
  PUT /updatebook
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bookId`      | `string` | **Required** |
| `bookName`      | `string` | **Required** |
| `bookStatus`      | `string` | **Required** |
| `bookUniqueId`      | `string` | **Required** |

Request Body: 

{ bookName, bookId, bookStatus, bookUniqueId }

### Output:

Success Response:
- HTTP Status Code: 200 (OK)
- Response Body: { status: 200, message: "Book updated" }

### Possible Errors:

Error: Username already exists

HTTP Status Code: 403 (Forbidden)

Response Body: { status: 403, message: "Forbidden", role: role }

Error: Not found

HTTP Status Code: 404 (not found)

Response Body: { status: 404, message: "Book not found" }

Error: Internal Server Error

HTTP Status Code: 500 (Internal Server Error)

Response Body: { status: 500, message: "Internal Server Error" }

#### deletebook

```http
  DELETE /deletebook
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bookId`      | `string` | **Required** |

Request Body: 

{ bookId }

### Output:

Success Response:
- HTTP Status Code: 200 (OK)
- Response Body: { status: 200, message: "Book deleted" }

### Possible Errors:

Error: Username already exists

HTTP Status Code: 403 (Forbidden)

Response Body: { status: 403, message: "Forbidden", role: role }

Error: Not found

HTTP Status Code: 404 (not found)

Response Body: { status: 404, message: "Book not found" }

Error: Internal Server Error

HTTP Status Code: 500 (Internal Server Error)

Response Body: { status: 500, message: "Internal Server Error" }


#### updatemembers

```http
  PUT /updatemembers
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `membersUsername`      | `string` | **Required** |
| `membersPassword`      | `string` | **Required** |
| `membersId`      | `string` | **Required** |

Request Body: 

{ membersUsername, membersPassword, membersId }

### Output:

Success Response:
- HTTP Status Code: 200 (OK)
- Response Body: { status: 200, message: "Book updated" }

### Possible Errors:

Error: Username already exists

HTTP Status Code: 403 (Forbidden)

Response Body: { status: 403, message: "Forbidden", role: role }

Error: Not found

HTTP Status Code: 404 (not found)

Response Body: { status: 404, message: "Book not found" }

Error: Internal Server Error

HTTP Status Code: 500 (Internal Server Error)

Response Body: { status: 500, message: "Internal Server Error" }

#### addmember

```http
  POST /addmember
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `membersUsername`      | `string` | **Required** |
| `membersPassword`      | `string` | **Required** |

Request Body: 

{ membersUsername, membersPassword }

### Output:

Success Response:
- HTTP Status Code: 201 (created)
- Response Body: { status: 201, message: "member added" }

### Possible Errors:

Error: Username already exists

HTTP Status Code: 403 (Forbidden)

Response Body: { status: 403, message: "Forbidden", role: role }

Error: Not found

HTTP Status Code: 409 (already exists)

Response Body: { status: 409, message: "Username already exists" }

Error: Internal Server Error

HTTP Status Code: 500 (Internal Server Error)

Response Body: { status: 500, message: "Internal Server Error" }


#### deletemember

```http
  DELETE /deletemember
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `membersId`      | `string` | **Required** |

Request Body: 

{ membersUsername, membersPassword, membersId }

### Output:

Success Response:
- HTTP Status Code: 200 (OK)
- Response Body: { status: 200, message: "Member deleted" }

### Possible Errors:

Error: Not found

HTTP Status Code: 404 (not found)

Response Body: { status: 404, message: "Book not found" }

Error: Internal Server Error

HTTP Status Code: 500 (Internal Server Error)

Response Body: { status: 500, message: "Internal Server Error" }


#### member

```http
  GET /member
```
### Output:

Success Response:
- HTTP Status Code: 200 (OK)
- Response Body: {
      status: 200,
      message: "Success",
      books: result,
      members: result1,
    }

### Possible Errors:

Error: Username already exists

HTTP Status Code: 403 (Forbidden)

Response Body: { status: 403, message: "Forbidden", role: role }

Error: Not found

HTTP Status Code: 404 (not found)

Response Body: { status: 404, message: "Book not found" }

Error: Internal Server Error

HTTP Status Code: 500 (Internal Server Error)

Response Body: { status: 500, message: "Internal Server Error" }

#### borrowBook

```http
  PUT /borrowBook
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bookId`      | `string` | **Required** |

Request Body: 

{ bookId }

### Output:

Success Response:
- HTTP Status Code: 200 (OK)
- Response Body: { status: 200, message: "Book updated" }

### Possible Errors:

Error: Username already exists

HTTP Status Code: 403 (Forbidden)

Response Body: { status: 403, message: "Forbidden", role: role }

Error: Not found

HTTP Status Code: 404 (not found)

Response Body: { status: 404, message: "Book not found" }

Error: Internal Server Error

HTTP Status Code: 500 (Internal Server Error)

Response Body: { status: 500, message: "Internal Server Error" }


#### returnBook

```http
  PUT /returnBook
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bookId`      | `string` | **Required** |

Request Body: 

{ bookId }

### Output:

Success Response:
- HTTP Status Code: 200 (OK)
- Response Body: { status: 200, message: "Book updated" }

### Possible Errors:

Error: Username already exists

HTTP Status Code: 403 (Forbidden)

Response Body: { status: 403, message: "Forbidden", role: role }

Error: Not found

HTTP Status Code: 404 (not found)

Response Body: { status: 404, message: "Book not found" }

Error: Internal Server Error

HTTP Status Code: 500 (Internal Server Error)

Response Body: { status: 500, message: "Internal Server Error" }

## Frontend and flow of website

 Here's a documentation of the front end and the flow of a basic library management system:

**Technology used**
- HTML5
- Bootstrap5
- Vanilla JavaScript

**Flow of Website**

User Registration: The user registration page allows new users to create an account. It typically includes form fields to input personal information such as username, password, and role. Upon successful registration, users are redirected to the login page.

User Login: The login page allows registered users to authenticate themselves by entering their credentials. It consists of input fields for username and password. After successful login, users are redirected to their dashboard.

User Dashboard: The user dashboard serves as a personalized area for users to access various features and information. It may include sections like borrowed books, return books.

Book Borrowing: Users can borrow available books by selecting the desired book and initiating the borrowing process. This typically involves confirming the borrowing request. The book becomes unavailable for others until returned.

Book Return: Users can return borrowed books by accessing their borrowed books section and selecting the return option for the respective book. The book's availability status is updated.

## Deployment(frontend)

To host an HTML/CSS application (frontend) on Vercel by connecting your GitHub account, you can follow these steps:

#### GitHub Setup

- Ensure that your HTML/CSS application is stored in a GitHub repository. If not, create a new repository and push your code to it.
- Make sure you have a Vercel account. If not, sign up at https://vercel.com/.
####  Connect GitHub Account to Vercel

- Log in to your Vercel account.
- On the Vercel dashboard, click on "Import Project."
- Select the "GitHub" option.
- Choose the repository that contains your HTML/CSS application.
- Configure Deployment Settings

- After connecting the repository, you'll see the "Import Project" page.
- Configure the deployment settings as per your requirements. - Ensure that the build command is correctly set, or leave it empty if no build process is required for your HTML/CSS application.
- Click on "Deploy" to proceed.
- Deploy and Verify

- Vercel will initiate the deployment process and provide you with a deployment URL once it's completed.
- Access the provided URL to verify that your HTML/CSS application is successfully hosted on Vercel.
- Make sure to test the application's functionality and appearance on the deployed site.

That's it! Your HTML/CSS application is now hosted on Vercel, and subsequent changes pushed to your GitHub repository will trigger automated deployments. You can further customize your deployment settings on the Vercel dashboard to suit your specific requirements.

## Deployment(backend)

#### Connect GitHub Repository to Deployment Platform

- Connect your GitHub repository to the deployment platform.The exact steps may vary depending on the platform, but typically you will need to authorize the platform to access your GitHub account and select the repository you want to deploy.
Configure Deployment Settings

- Configure the deployment settings for your Express application on the deployment platform. This may include specifying the build command, environment variables, and other deployment-related configurations. Consult the documentation of your chosen deployment platform for specific instructions.
Deploy Application

- Trigger the deployment process. This may involve clicking a "Deploy" button or initiating the deployment through a CLI command, depending on the platform.
- The deployment platform will fetch the code from your GitHub repository, build the application, and deploy it according to your configuration.
Verify and Test

Once the deployment is completed, you will receive a deployment URL.
Access the provided URL to verify that your Express application is successfully hosted and running on the deployment platform.
Test your application's functionality to ensure that it works as expected.
