
# ✈️ Travelo - Explore the World

A modern, high-performance landing page for **Travelo**, a travel agency specializing in Asian destinations. Built with **Tailwind CSS v4**, this project features a sleek dark mode, responsive navigation, and smooth interactive elements.

## ✨ Features

* **Dynamic Dark Mode:** A fully integrated dark/light theme toggle with persistent state logic.
* **Interactive Navigation:** A custom-built dropdown menu with smooth CSS transitions and "click-outside-to-close" functionality.
* **Modern Styling:** Utilizes the latest **Tailwind CSS v4** engine for utility-first styling and optimized performance.
* **Key Sections:**
* **Hero Banner:** Eye-catching introduction with dual-action buttons.
* **Services:** Grid-based layout showcasing core value propositions.
* **Best of Asia:** Featured spotlight section for top-tier destinations.
* **Country Explorer:** A clean, organized list of covered regions.
* **Testimonials:** User review cards with star ratings.


* **Fully Responsive:** Tailored layouts for mobile, tablet, and desktop views.

## 🛠️ Technologies Used

* **HTML5:** Semantic structure.
* **Tailwind CSS v4:** Cutting-edge styling using the new `@tailwindcss/browser` and CLI.
* **JavaScript (Vanilla):** Custom logic for theme switching and menu interactions.
* **Google Fonts:** `Plus Jakarta Sans` for clean, professional typography.
* **Font Awesome:** Scalable vector icons.

## 🚀 Getting Started

### Prerequisites

A modern web browser (Chrome, Firefox, or Edge) is required. If you wish to modify the styles using the Tailwind CLI, you will need **Node.js** installed.

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
│   ├── style.css        # Main Tailwind configuration and custom components
│   ├── dark.css         # Dark mode specific color overrides
│   ├── responsive.css   # Mobile and tablet specific adjustments
│   └── tailwind.init.css# Tailwind base imports
├── script.js            # Theme toggle and dropdown menu logic
├── index.html           # Main entry point
└── package.json         # Dependency management (Tailwind CLI)

```

## 💡 Customization

### Changing the Theme

The primary brand color is `#872BFF`. You can update this throughout the project by searching for the hex code or modifying the Tailwind classes in `index.html`.

### Adding Destinations

To add more countries, simply add a new `<h2>` tag with the class `county-name` inside the `#country-card` div in `index.html`.

### Dark Mode Logic

The dark mode is controlled via the `dark` class on the `<body>` tag. Specific color overrides for dark mode are maintained in `styles/dark.css`.

## 🤝 Contribution

Created and maintained by **Atonu Roy Chowdhury**.

If you'd like to contribute, feel free to fork the repo and submit a pull request. For significant changes, please open an issue first to discuss your ideas.

## 📝 License

This project is licensed under the MIT License.

---
