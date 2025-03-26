E-Shop: A Simple E-Commerce Application
E-Shop is a lightweight e-commerce application built with React, Redux, and Bootstrap. It fetches products from a public API, allows users to add items to a cart, adjust quantities, and proceed to a checkout page. The app features a responsive design and a search functionality to filter products.

Features
Product Listing: Displays products fetched from the EscuelaJS API.
Add to Cart: Add products to the cart with a button that toggles to "Added" when in cart.
Cart Management: View cart items, update quantities via dropdown, and remove items.
Checkout: Simple checkout page showing the total and clearing the cart upon confirmation.
Search Functionality: Filter products by title using a search bar on the home page.
Responsive Design: Built with Bootstrap for a mobile-friendly experience.
Tech Stack
Frontend: React (via Vite)
State Management: Redux Toolkit
Styling: Bootstrap, React-Bootstrap, Custom CSS
API: EscuelaJS Products API
Routing: React Router DOM
Prerequisites
Node.js (v16 or higher)
npm (v7 or higher)
Getting Started
1. Clone the Repository
git clone <repository-url>
cd ecommerce-redux
2. Install Dependencies
npm install
3. Run the Application
bash

npm run dev
Open your browser and navigate to http://localhost:5173.

4. Build for Production (Optional)
npm run build
The production-ready files will be in the dist folder.

Project Structure
text

ecommerce-redux/

├── public/                # Static assets

├── src/                   # Source code

│   ├── components/        # Reusable components
│   │   ├── CartItem.jsx   # Cart item row component
│   │   ├── Navbar.jsx     # Navigation bar with cart count
│   │   └── ProductCard.jsx # Product card with add-to-cart functionality
│   ├── pages/             # Page components
│   │   ├── Cart.jsx       # Cart page with table layout
│   │   ├── Checkout.jsx   # Checkout page
│   │   └── Home.jsx       # Home page with product grid and search
│   ├── redux/             # Redux store and slices
│   │   ├── cartSlice.js   # Cart state management
│   │   ├── productSlice.js # Product fetching and state
│   │   └── store.js       # Redux store configuration
│   ├── App.jsx            # Main app with routing
│   ├── main.jsx           # Entry point
│   └── styles.css         # Custom styles
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation


Key Components
ProductCard.jsx
Displays product image, title, price, and an "Add to Cart" button.
Button changes to "Added" and disables when the product is in the cart.
CartItem.jsx
Renders a table row for each cart item with image, title, price, quantity dropdown, and remove button.
Home.jsx
Fetches and displays products in a grid.
Includes a search bar to filter products by title.
Cart.jsx
Shows cart items in a table with total and a "Proceed to Checkout" button.
Checkout.jsx
Displays the total and clears the cart upon confirmation.
Redux Slices
productSlice.js: Manages product fetching and state.
cartSlice.js: Handles adding, removing, and updating cart items.
API Integration
The app uses the EscuelaJS Products API to fetch product data. Each product includes:

id, title, price, image, etc.
Example product:

json
{
  "id": 1,
  "title": "Majestic Mountain Graphic T-Shirt",
  "price": 44,
  "image": "https://i.imgur.com/QkIa5tT.jpeg"
}
Available Scripts
npm run dev: Start the development server.
npm run build: Build the app for production.
npm run preview: Preview the production build locally.
Styling
Bootstrap is used for responsive layouts and components.
Custom styles in src/styles.css enhance the design (e.g., card hover effects, button alignment).
Future Improvements
Add user authentication.
Implement a more detailed checkout process (e.g., payment integration).
Add pagination or infinite scroll for large product lists.
Include product categories and filters.
Troubleshooting
Products not loading: Check your internet connection and the API endpoint in productSlice.js.
Cart not updating: Verify Redux store setup in store.js and action dispatches.
Design issues: Ensure bootstrap/dist/css/bootstrap.min.css is imported in main.jsx.
Contributing
Feel free to fork this repository, submit issues, or create pull requests to improve the project.

License
This project is open-source and available under the .

Steps to Add the README
Create a file named README.md in the root of your project folder (ecommerce-redux/).
Copy and paste the content above into README.md.
Adjust any details (e.g., repository URL, file paths, or additional features) to match your specific setup.
Save the file.
Viewing the README
If you’re using GitHub, push the file to your repository, and it’ll render nicely on the repo’s main page.
Locally, open it in a Markdown viewer or text editor.
