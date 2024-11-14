# 🌱 Live Coding Challenge (Intern Edition)

This **Live Coding Challenge** is designed to test and develop your skills in JavaScript, HTML, and CSS. This assignment focuses on rendering and sorting product data for an e-commerce product collection page using Tailwind CSS, JavaScript, and best practices in front-end development.

## 📂 Project Structure

Here’s a breakdown of the project structure to help you get familiar:

```plaintext
intern-livecoding-em/
├── index.html              # Main HTML file for the project
├── src/                    # Source folder for all code assets
│   ├── data/               # Contains sample data for the products
│   ├── utils/              # Utility functions for display and sorting
│   ├── main.css            # Main stylesheet
│   └── main.js             # Main JavaScript entry point
├── tailwind.config.js      # Tailwind config file
├── postcss.config.js       # PostCSS config file
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite config file
└── README.md               # Project README file
```

## 🛠️ Getting Started

To get set up with the project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/askphill/intern-livecoding-em.git
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

4. **View in Browser**

   Navigate to `https://localhost:5173/` in your browser to see the project in action. Hot module reloading is enabled, so any changes you make will automatically update in the browser.

## 🚀 Task Overview

In this challenge, you’ll complete a few `TODO` sections marked in the code.

### Assignment Details

1. **Event Listener for Sorting**

   - **File:** `src/main.js`
   - **Task:** In the `initialize` function, there’s a `TODO` comment where you need to include an event listener for the sorting functionality. 
     - This listener should call `handleSort` when the `#sortSelect` dropdown is changed, allowing the user to sort products by price.
   - **Expected Outcome:** Products should re-render in ascending or descending order when the user selects a sorting option.

2. **Footer Styling**
   - **File:** `index.html`
   - **Task:** In the footer section, there’s a TODO comment directing you to style the footer. There is already content. You should try and re-create the layout to look like the one on our [own website](https://askphill.com/).
     - You can use either standard CSS or Tailwind CSS.
     - If you opt for standard CSS, add your css to `src/main.css`.
     - For Tailwind, add the classes directly on the elements.
   - **Expected Outcome:** The footer should have a polished look with clear visual hierarchy and proper spacing. 
     -  Multi-column setup for the footer Navigation Links, Region/Time, and Address.
     -  Don’t worry about the font style but show font size differences.

## 💡 Tips

- Keep your code clean and use clear variable names.
- Test the sorting and display functionality thoroughly so that the products render as expected.
- Don't worry about completing the entire task within the time limit, focus on demonstrating your problem-solving skills and communication abilities. We rather see a small amount of good code than a big amount of bad code 😃
- Please walk us through the steps you are taking and your thinking process.
- If you are stuck or confused, do not hesitate to ask questions!

### 🎉🎉 Happy Coding 🎉🎉
