file).
Integrate React with a simple REST API to build a To-Do List application.
Tasks:
1. Create a Simple Backend API:
 o Set up a basic Node.js/Express server that provides the following endpoints:
  GET /todos – Returns a list of to-do items.
  POST /todos – Creates a new to-do item.
  DELETE /todos/{id} – Deletes a specific to-do item by ID.
2. Set up React Front-End:
 o Create a new React project.
 o Build components:
  A TodoList component that fetches and displays to-do items from the API.
  A NewTodo component with a form to create new to-do items and send the data to the API.
  A DeleteTodo component to delete to-do items.
3. Connect Front-End and Back-End:
 o Use Axios or Fetch API to make HTTP requests from React to the backend API.
 o Display the to-do items dynamically on the React page, and implement functionality to add and remove
items.
4. Test and Document:
 o Test the full flow of the application: Adding a to-do, listing to-dos, and deleting a to-do.
 o Submit a screenshot of the React application in action and provide the code for both the front-end a
