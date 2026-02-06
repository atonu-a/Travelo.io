# ✈️ Travelo - Explore the World

A modern, high-performance landing page for **Travelo**, a travel agency specializing in Asian destinations. Built with **Tailwind CSS v4**, this project features a sleek dark mode, responsive navigation, and smooth interactive elements.

**🔗 [Live Demo**](https://travelo-49wj.onrender.com/)

## ✨ Features

* **Dynamic Dark Mode:** A fully integrated dark/light theme toggle with persistent state logic handled via JavaScript.
* **Interactive Navigation:** A custom-built dropdown menu with smooth CSS transitions and "click-outside-to-close" functionality.
* **Modern Styling:** Utilizes the latest **Tailwind CSS v4** engine for utility-first styling and optimized performance.
* **Key Sections:**
* **Hero Banner:** Eye-catching introduction with dual-action buttons and high-impact typography.
* **Services:** Grid-based layout showcasing core value propositions like "Everything You Need" and "Secure Payments".
* **Best of Asia:** Featured spotlight section for top-tier destinations like the Great Wall of China.
* **Country Explorer:** A clean, organized list of covered regions including Bangladesh, India, Japan, and more.
* **Testimonials:** User review cards with star ratings and responsive text alignment.


* **Fully Responsive:** Tailored layouts for mobile, tablet, and desktop views using custom utility classes.

## 🛠️ Technologies Used

* **HTML5:** Semantic structure and metadata.
* **Tailwind CSS v4:** Cutting-edge styling using the `@tailwindcss/browser` engine and CLI.
* **JavaScript (Vanilla):** Custom logic for theme switching, menu interactions, and UI state management.
* **Google Fonts:** `Plus Jakarta Sans` for clean, professional typography.
* **Font Awesome:** Scalable vector icons for social media and UI elements.

## 🚀 Getting Started

### Prerequisites

A modern web browser is required. If you wish to modify styles using the Tailwind CLI, you will need **Node.js** installed.

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/atonu-a/Travelo.io

```


2. **Navigate to the project directory:**
```bash
cd Travelo.io

```


3. **Install dependencies (Optional - for development):**
```bash
npm install

```


4. **Open the project:**
Simply open `index.html` in your browser.

## 📂 File Structure

```text
travelo/
├── assets/              # Images, icons, and logos
├── styles/
│   ├── style.css        # Main Tailwind components and utility overrides
│   ├── dark.css         # Dark mode specific color schemes and gradients
│   ├── responsive.css   # Mobile and tablet specific layout adjustments
│   └── tailwind.init.css# Tailwind base imports
├── script.js            # Theme toggle and dropdown menu logic
├── index.html           # Main entry point and structure
└── package.json         # Dependency management for Tailwind CLI

```

## 💡 Customization

### Dark Mode Logic

The theme is controlled by toggling the `.dark` class on the `<body>` element. Specific dark mode styles (like linear gradients and background colors) are isolated in `styles/dark.css` for easy maintenance.

### Interactive Menu

The navigation menu uses `max-height` transitions for a smooth accordion effect. The JavaScript includes a listener to close the menu automatically if a user clicks outside of it.

## 🤝 Contribution

Created and maintained by **Atonu Roy Chowdhury**.

Feel free to fork the repo and submit a pull request. For significant changes, please open an issue first to discuss your ideas.

## 📝 License

This project is licensed under the MIT License.

---
