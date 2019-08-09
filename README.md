# Welcome to my own MyReads!

This is the first project of  Nanodegree React by  **Udacity**. Is a part of the final assessment for React Fundamentals course. A bookshelf app that allows user to select and categorize books as you have read, are currently reading, or want to read.



## Requirements

- nodejs
- npm

Use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.
This project is using [MDBReact](https://github.com/mdbootstrap/Admin-Dashboard-Template-React-Bootstrap).

## How to Run:

1.  [Download](https://github.com/thienry/myReads/archive/master.zip)  or  [Clone](https://github.com/thienry/myReads.git)  the Repository.
2.  Run  `npm install`  to install the project dependencies.
3.  Run the app using  `npm start`.
4.  App can be seen at:  `localhost:3000`.
The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file  [`BooksAPI.js`](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/src/BooksAPI.js)  contains the methods you will need to perform necessary operations on the backend:

-   [`getAll`](https://github.com/udacity/reactnd-project-myreads-starter#getall)
-   [`update`](https://github.com/udacity/reactnd-project-myreads-starter#update)
-   [`search`](https://github.com/udacity/reactnd-project-myreads-starter#search)

### [](https://github.com/udacity/reactnd-project-myreads-starter#getall)`getAll`

Method Signature:

getAll()

-   Returns a Promise which resolves to a JSON object containing a collection of book objects.
-   This collection represents the books currently in the bookshelves in your app.

### [](https://github.com/udacity/reactnd-project-myreads-starter#update)`update`

Method Signature:

update(book, shelf)

-   book:  `<Object>`  containing at minimum an  `id`  attribute
-   shelf:  `<String>`  contains one of ["wantToRead", "currentlyReading", "read"]
-   Returns a Promise which resolves to a JSON object containing the response data of the POST request

### [](https://github.com/udacity/reactnd-project-myreads-starter#search)`search`

Method Signature:

search(query)

-   query:  `<String>`
-   Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
-   These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

# Important

If you had a problem with the bootstrap module, do it this step:

- Enter in the `index.js` file and drop the line 4 and type the code below:

    import  'bootstrap-css-only/css/bootstrap.min.css';

