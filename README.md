# 📚 Book Search & Save

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation & Usage](#installation--usage)
- [Scripts](#scripts)
- [Summary](#summary)
- [Links](#links)
- [Screenshots](#screenshots)

## Overview

**Book Search & Save** is a web application designed for book lovers who want to discover new books and keep track of the ones they wish to purchase. Users can create an account, search for books, and save them to a personal list for easy access. The app integrates with the Google Books API to provide a wide selection of books, complete with detailed descriptions, images, and direct links for purchase.

## Features

✅ User authentication (Sign Up / Log In)  
✅ Search for books using keywords  
✅ Save books to a personal list  
✅ Remove books from the list  
✅ View book details including title, author, description, and cover image

## Technologies Used

- **Front-end:** React, HTML, CSS
- **Back-end:** Node.js, Express, MongoDB
- **GraphQL API:** Apollo Server, @apollo/client
- **Authentication:** [JWT](https://jwt.io/)
- **API:** Google Books API

## Installation & Usage

### 1️. Clone Repository

```sh
git clone git@github.com:san1718/mc21-Book_Search_Engine.git
```

### 2. Navigate to folder

```bash
cd mc21-Book_Search_Engine
```

### 3. Install Dependencies

```sh
npm run install
```

### 4. Run the Application Locally

```sh
npm run develop
```

### 5. Open in Browser and Navigate to: 
- [http://localhost:3000](http://localhost:3000)

## Scripts

The following scripts are available in the project:

```json
{
  "start": "node server/server.js",
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
  "install": "cd server && npm i && cd ../client && npm i",
  "build": "cd client && npm run build",
  "render-build": "npm install && npm run build"
}
```

| Script           | Command                | Description                                                       |
| ---------------- | ---------------------- | ----------------------------------------------------------------- |
| **Start**        | `npm start`            | Runs the server in production mode.                               |
| **Develop**      | `npm run develop`      | Runs both the client and server concurrently for development.     |
| **Install**      | `npm run install`      | Installs dependencies for both server and client.                 |
| **Build**        | `npm run build`        | Builds the React client for production.                           |
| **Render Build** | `npm run render-build` | Installs dependencies and builds the app (for Render deployment). |

## Summary

**Book Search & Save** simplifies the process of discovering and keeping track of books users want to purchase. By allowing users to create an account and save books to a personal list, this app ensures book lovers never lose track of their next great read.

## Links

🔗 [GitHub Repository](https://github.com/san1718/mc21-Book_Search_Engine)  
🚀 [Live Demo](https://mc21-book-search-engine.onrender.com)

## Screenshots

📌 **Homepage**  
<img width="1000" alt="Homepage" src="https://github.com/san1718/mc21-Book_Search_Engine/blob/main/images/Homepage.png">

📌 **Sign Up / Log In**  
<img width="1000" alt="LogIn" src="https://github.com/san1718/mc21-Book_Search_Engine/blob/main/images/SignUpLogIn.png">

📌 **Saved Books**  
<img width="1000" alt="SaveBook" src="https://github.com/san1718/mc21-Book_Search_Engine/blob/main/images/SavedBooks.png">

📌 **Remove Book**  
<img width="1000" alt="DeleteBook" src="https://github.com/san1718/mc21-Book_Search_Engine/blob/main/images/DeleteBooks.png">
