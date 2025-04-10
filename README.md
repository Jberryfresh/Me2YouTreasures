# Me2YouTreasures Project

### **STILL UNDER CONSTRUCTION**

## Overview
Me2YouTreasures is a web application designed to allow users to post items for sale. The project is built using React and Next.js for the frontend, and Node.js with Express.js for the backend. It utilizes MongoDB for data storage and Mongoose for database interaction, with JWT for authentication.

## Project Structure
The project is organized into two main directories: `frontend` and `backend`.

### Frontend
- **Framework**: Next.js
- **Pages**:
  - Home page (`/`)
  - Product listing page (`/product`)
  - Product details page (`/product/[id]`)
  - Admin page (`/admin`)
- **Components**:
  - Header
  - Footer
  - ProductCard
- **Styles**: Global CSS styles

### Backend
- **Framework**: Node.js with Express.js
- **Database**: MongoDB
- **Controllers**:
  - ProductController for handling product-related operations
- **Models**:
  - Mongoose model for products
- **Routes**:
  - Admin routes for managing products
  - Public routes for listing and retrieving product details
- **Utilities**:
  - JWT utility functions for authentication

## Setup Instructions

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

## Features
- User-friendly interface for browsing and purchasing items.
- Admin functionality for managing product listings.
- Secure authentication using JWT.

## License
This project is licensed under the MIT License.
