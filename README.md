# BeyondChats Article Automation Project (MERN Stack)

A complete **MERN Stack–based solution** for the BeyondChats assignment.  
This project automates article scraping, AI-based content enhancement, and displays both original and updated articles in a professional React frontend.

---

## 📌 Project Overview

This application automatically:

- Scrapes blog articles from **BeyondChats**
- Stores articles in a MongoDB database
- Enhances content using **Google Search + AI**
- Publishes updated articles
- Displays original and updated articles in a React-based UI

> ⚠️ Note:  
> This project is implemented using **MERN Stack instead of Laravel APIs**, while fully matching the task requirements.

---

## 🧩 Task Phases Implemented

### ✅ Phase 1: Article Scraping & CRUD APIs (Moderate)

- Scrapes articles from the **last page** of BeyondChats blogs  
  🔗 https://beyondchats.com/blogs/
- Fetches **5 oldest articles**
- Stores articles in **MongoDB**
- Implements complete **CRUD APIs**
  - Create Article
  - Read Articles
  - Update Article
  - Delete Article

These are stored as **original articles**.

---

### ✅ Phase 2: AI-Based Article Enhancement (Very Difficult)

A Node.js script performs the following steps:

1. Fetches articles from the backend APIs
2. Searches the article title on **Google**
3. Fetches **top 2 blog/article links** using **SerpAPI**
4. Scrapes the main content of those articles using **Cheerio**
5. Uses **Google Generative AI** to:
   - Mix original article content
   - Improve formatting, structure, and quality
   - Generate a new enhanced article
6. Publishes the updated article via CRUD APIs
7. Adds **reference article links** at the bottom of the updated article

Both **original** and **updated versions** are preserved.

---

### ✅ Phase 3: Frontend UI (Very Easy)

- Built using **React.js**
- Displays:
  - Original articles
  - Updated (AI-enhanced) articles
- Responsive and clean UI
- Article cards open full article view on click

---

## 🛠️ Tech Stack Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS (security)
- Axios
- Cheerio (HTML scraping)
- SerpAPI (Google Search results)
- @google/generative-ai (LLM integration)
- Cloudinary (image storage)
- dotenv

### Frontend
- React.js
- React Router DOM
- Axios
- Vite

---

## 📁 Project Structure



