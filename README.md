# BeyondChats Article Automation Project (MERN Stack)

This project is a complete implementation of the BeyondChats assignment.
Although the task originally mentioned Laravel APIs, this project is built
entirely using the MERN Stack while keeping the same logic, workflow, and outcomes.

---

## Project Overview

This application automatically:

- Scrapes blog articles from BeyondChats
- Stores original articles in MongoDB
- Enhances articles using Google Search and AI
- Publishes updated articles
- Displays both original and updated articles in a React frontend

---

## Task Phases Implemented

---

## Phase 1: Article Scraping & CRUD APIs (Moderate Difficulty)

- Scrapes articles from the last page of BeyondChats blogs  
  https://beyondchats.com/blogs/
- Fetches the 5 oldest articles
- Stores articles in MongoDB
- Implements complete CRUD APIs:
  - Create Article
  - Read Articles
  - Update Article
  - Delete Article

These are stored as original articles in the database.

---

## Phase 2: AI-Based Article Enhancement (Very Difficult)

A Node.js script performs the following:

- Fetches articles from Phase 1 APIs
- Searches the article title on Google
- Fetches the top 2 ranking blog/article links
- Scrapes main content from those websites using Cheerio
- Uses Google Generative AI to:
  - Mix original article content
  - Improve formatting and structure
  - Generate an enhanced article
- Publishes the updated article using CRUD APIs
- Adds reference article links at the bottom of the updated article

---

## Phase 3: Frontend UI (Very Easy)

- Built using ReactJS
- Fetches articles from backend APIs
- Displays original as well as updated articles
- Responsive and professional blog-style UI

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend
- React.js
- React Router DOM
- Axios

### Libraries & Tools
- cors
- axios
- cheerio
- serpapi
- @google/generative-ai
- dotenv
- cloudinary

---

## How to Run the Project Locally

---

### Backend Setup

Navigate to backend folder:

```bash
cd backend




