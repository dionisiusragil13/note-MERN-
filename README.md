# 📝 CRUD Notes App

A simple and robust notes application built with the **MERN** (MongoDB, Express.js, React, Node.js) stack, allowing users to **Create**, **Read**, **Update**, and **Delete** notes seamlessly.

---

## 🚀 Features

- **Create Notes**: Easily add new notes with titles and content.
- **Read Notes**: View all your notes in a clean and organized interface.
- **Update Notes**: Edit existing notes to keep them up-to-date.
- **Delete Notes**: Remove notes you no longer need.
- **Responsive Design**: Enjoy a consistent experience across various devices.

---

## 🛠️ Tech Stack

This application leverages the power of the MERN stack:

### Frontend
- **React**: A declarative, efficient, and flexible JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client used for making API requests to the backend.
- **React Router DOM**: For declarative routing within the React application.

### Backend
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A minimalist web framework for building RESTful APIs.
- **Mongoose**: Provides a schema-based solution to model your MongoDB data.
- **CORS**: Middleware to enable cross-origin requests.

### Database
- **MongoDB**: A NoSQL document database offering high performance and easy scalability.

---

## 🏁 Getting Started

Follow these steps to get your CRUD Notes App running on your local machine.

### ✅ Prerequisites

Make sure you have the following installed:

- **Node.js** (LTS version recommended)
- **MongoDB** (Community Server or MongoDB Atlas)

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```
### 2. install backend dependecies

```bash
cd backend
npm install
```
### 3. install frontend dependencies

```bash
cd ../frontend
npm install
```

## 🔐 Environment Variables Setup

### step:

1. open folder `backend`.
2. create new file `.env`.
3. copy and paste:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001

UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```
