# Me2YouTreasures Frontend

This is the frontend part of the Me2YouTreasures project, built using React and Next.js. The application allows users to browse and purchase items, while providing an admin interface for managing products.

## Project Structure

- **pages/**: Contains the application's pages.
  - **_app.js**: Custom App component for initializing pages.
  - **index.js**: Home page of the application.
  - **product/**: Contains product-related pages.
    - **[id].js**: Dynamic route for individual product details.
    - **index.js**: Product listing page.
  - **admin.js**: Admin page for managing products.

- **components/**: Contains reusable components.
  - **Header.js**: Navigation and branding component.
  - **Footer.js**: Footer component for all pages.
  - **ProductCard.js**: Component for displaying individual product information.

- **styles/**: Contains global styles.
  - **globals.css**: Global CSS styles for the application.

## Getting Started

To get started with the frontend, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd Me2YouTreasures/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Features

- User-friendly interface for browsing products.
- Admin interface for adding and managing products.
- Dynamic product details page.
- Responsive design for optimal viewing on various devices.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.