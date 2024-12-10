Define, document, create and test a simple Book Store API using Swagger/OpenAPI.
Tasks:
1. Create an OpenAPI Specification for the Book Store API:
 o Use Swagger Editor to define an OpenAPI specification for a basic Book Store API.
 o The API should have the following endpoints:
  GET /books – Retrieves a list of all books.
  POST /books – Adds a new book to the store.
  GET /books/{id} – Retrieves a specific book by ID.
  DELETE /books/{id} – Deletes a specific book by ID.
 Specification Details:
 o GET /books: Should return a list of books in JSON format, with each book having an id, title, author,
and price.
 o POST /books: Accepts a JSON object with title, author, and price to add a new book to the store.
 o GET /books/{id}: Accepts a book ID and retrieves the details of the specific book.
 o DELETE /books/{id}: Deletes a book by 
