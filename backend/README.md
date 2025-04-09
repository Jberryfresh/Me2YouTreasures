# Me2YouTreasures Backend Documentation

## Overview
This is the backend for the Me2YouTreasures project, a web application that allows users to post items for sale. The backend is built using Node.js and Express.js, and it interacts with a MongoDB database using Mongoose. JWT is implemented for authentication, particularly for admin functionalities.

## Project Structure
```
backend
├── src
│   ├── app.js                # Entry point for the backend application
│   ├── controllers           # Contains controllers for handling requests
│   │   └── productController.js # Controller for product-related operations
│   ├── models                # Contains Mongoose models
│   │   └── productModel.js   # Mongoose model for product data
│   ├── routes                # Contains route definitions
│   │   ├── adminRoutes.js    # Routes for admin functionalities
│   │   └── productRoutes.js   # Routes for public product functionalities
│   └── utils                 # Utility functions
│       └── jwt.js           # Functions for JWT generation and verification
├── package.json              # Backend dependencies and scripts
└── README.md                 # Documentation for the backend setup and usage
```

## Setup Instructions

1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd Me2YouTreasures/backend
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the backend directory and add the following variables:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. **Run the Application**
   ```
   npm start
   ```

## API Endpoints

### Admin Routes
- **POST /admin/products**: Add a new product (protected route)
- **PUT /admin/products/:id**: Update an existing product (protected route)
- **DELETE /admin/products/:id**: Delete a product (protected route)

### Product Routes
- **GET /products**: Retrieve a list of products
- **GET /products/:id**: Retrieve details of a specific product

## Authentication
JWT is used for securing admin routes. Ensure to include the token in the Authorization header when making requests to protected routes.

## License
This project is licensed under the MIT License.