# Savoria Restaurant-Website

## 👥 Team Members & Roles

1. **Edmond Oketch** – UI/UX Designer
2. **Fidelis Ntoiti** – Full-Stack Developer
3. **Tenbite Daniel** – Full-Stack Developer
4. **Karanja Kariuki** – Generative AI Expert

## Overview

This is a modern Restaurant Website built with **HTML**, **Tailwind CSS**, and features an integrated **AI Chatbot** powered by the Gemini API. The entire application is containerized using **Docker** for easy deployment.

🔗 **Live Site:** [https://tenbite-daniel.github.io/Savoria/](https://tenbite-daniel.github.io/Savoria/)

## Features

- Responsive design using Tailwind CSS
- Interactive AI Chatbot for customer engagement (Gemini API)
- Easy deployment with Docker

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine
- Gemini API credentials

### Clone the Repository

```bash
git clone https://github.com/yourusername/restaurant-website.git
cd restaurant-website
```

### Configure Environment

Create a `.env` file and add your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### Build and Run with Docker

```bash
docker build -t restaurant-website .
docker run -p 8080:80 --env-file .env restaurant-website
```

Visit [http://localhost:8080](http://localhost:8080) in your browser.

## Project Structure

```
.
├── public/           # HTML files
├── src/              # Chatbot integration scripts
├── styles/           # Tailwind CSS files
├── Dockerfile
└── README.md
```

## Customization

- Update HTML in `public/` for your restaurant's content.
- Modify Tailwind CSS in `styles/` for custom styling.
- Chatbot logic can be extended in `src/chatbot.js`.

## License

MIT License
