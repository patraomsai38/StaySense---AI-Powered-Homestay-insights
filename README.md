# 🏡 StaySense AI – AI Powered Homestay Insights

StaySense AI is an AI-powered homestay and eco-tourism platform designed to help homestay owners improve guest experiences through intelligent review analysis, booking insights, personalized travel recommendations, and smart homestay discovery.

---

# 🚀 Project Overview

StaySense AI leverages Artificial Intelligence (AI) and Natural Language Processing (NLP) to analyze guest reviews and provide actionable insights for homestay owners.

The platform aims to:

* Improve guest satisfaction
* Enhance homestay management
* Support sustainable eco-tourism
* Provide data-driven business insights
* Simplify homestay discovery and booking

---

# ✨ Features

## 🏠 Smart Homestay Experience

* Modern responsive user interface
* Responsive design across all devices
* Homestay discovery platform
* AI-powered guest experience insights

---

## 🏨 Homestay Explorer & Booking

* Search homestays by location
* Filter by budget
* Filter by guest ratings
* Interactive booking workflow
* Booking confirmation system
* Guest details form
* Check-in & Check-out date selection

---

## 🤖 AI Review Analysis

* Sentiment Analysis
* Review Categorization
* Feedback Insights
* AI-generated recommendations

---

## 📊 Host Dashboard

* Booking Statistics
* Occupancy Analytics
* Guest Satisfaction Metrics
* AI Review Insights
* Booking Trend Charts
* Review Sentiment Analysis Charts

---

## 🌍 Travel Recommendations

* Local Attractions
* Restaurants & Cafes
* Trekking Routes
* Eco-Tourism Activities

---

## 💬 AI Chat Assistant

* Interactive travel assistant
* Smart homestay guidance
* AI travel recommendations
* User assistance interface

---

## 🌦️ Weather Forecast Widget

* Local weather information
* Travel planning support
* Responsive weather widget

---

## 🔐 User Authentication UI

* Login Interface
* Forgot Password
* Create Account Option

---

## 🌙 Dark / Light Mode

* Theme Toggle Button
* React Context API
* Persistent Theme Preference
* Local Storage Support

---

# 🛠 Tech Stack

## Frontend

* React JS
* Vite
* Tailwind CSS v4
* React Router DOM
* React Context API
* Recharts

---

## Backend

* Node.js
* Express.js
* Prisma ORM
* CORS
* dotenv

---

## API Testing

* Postman

---

## Database

* PostgreSQL
* Supabase

---

## ORM

* Prisma ORM

---

## AI Technologies

- Google Gemini AI
- Prompt Engineering
- AI Chat Assistant
- Natural Language Processing (NLP)
- Personalized Travel Recommendations
- AI-powered User Assistance

---

# 📂 Project Structure

```text
StaySense/
│
backend/
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.js
│
├── prismaClient.js
├── server.js
├── package.json
├── package-lock.json
├── .env
├── .env.example
└── .gitignore
│
├── src/
│   │
│   ├── assets/
│   │   └── logo.png
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── ChatAssistant.jsx
│   │   │
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       ├── Modal.jsx
│   │       ├── Toast.jsx
│   │       ├── Loader.jsx
│   │       └── index.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Booking.jsx
│   │   ├── Login.jsx
│   │   └── ComponentsDemo.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── README.md
└── package.json
```

---

# 📅 Week 2 Deliverables Completed

✅ Frontend Skeleton Running Locally

✅ Responsive Home Page

✅ About Page

✅ Dashboard Page

✅ Login Page

✅ Reusable Components

✅ React Router Navigation

✅ Tailwind CSS Integration

✅ StaySense AI Branding & Logo

✅ Mobile Responsive Layout

---

# 📅 Week 3 Deliverables Completed

## 🎨 Figma Wireframes

Created wireframes for:

* ✅ Home Screen
* ✅ Dashboard Screen
* ✅ Login / Signup Screen
* ✅ Homestay Detail Screen
* ✅ AI Review Analysis Screen

---

## 🧩 Reusable UI Component Library

Implemented reusable UI components inside:

```text
src/components/ui/
```

Components Created:

* ✅ Button Component
* ✅ Input Component
* ✅ Modal Component
* ✅ Toast Component
* ✅ Loader Component
* ✅ Centralized Export File (`index.jsx`)

---

## 🖥 Component Showcase Page

Available Route:

```text
/components-demo
```

Demonstrates:

* Buttons
* Inputs
* Modal
* Toast Notifications
* Loader

---

## 🌙 Dark / Light Mode

Implemented:

* ✅ Theme Toggle Button
* ✅ React Context API
* ✅ Local Storage Persistence
* ✅ Dark Mode UI
* ✅ Light Mode UI

---

## 📱 Responsive Design Testing

Tested across:

* ✅ Mobile (375px)
* ✅ Tablet (768px)
* ✅ Desktop (1440px)

---

## 🚀 Additional Week 3 Enhancements

* ✅ AI Chat Assistant Widget
* ✅ Weather Forecast Widget
* ✅ Interactive Analytics Dashboard
* ✅ Booking Trends Visualization
* ✅ Review Sentiment Analysis Charts
* ✅ Homestay Explorer
* ✅ Location-Based Search
* ✅ Budget & Rating Filters
* ✅ Booking Confirmation Workflow

---

# 📅 Week 4 Deliverables Completed

## ⚙ Backend Development

Developed a backend using **Node.js** and **Express.js**.

Implemented:

* ✅ Express Server
* ✅ CORS Configuration
* ✅ Environment Variables using dotenv
* ✅ JSON Request Parsing
* ✅ Error Handling Middleware

---

## 🔗 REST API Endpoints

Implemented the following REST APIs:

| Method | Endpoint                                   | Description                  |
| ------ | ------------------------------------------ | ---------------------------- |
| GET    | `/api/homestays`                           | Get all homestays            |
| GET    | `/api/homestays/:id`                       | Get a homestay by ID         |
| POST   | `/api/homestays`                           | Create a new homestay        |
| PUT    | `/api/homestays/:id`                       | Update homestay details      |
| DELETE | `/api/homestays/:id`                       | Delete a homestay            |
| GET    | `/api/homestays/search/location/:location` | Search homestays by location |

---

## 🔄 Frontend Connected to Backend

Implemented:

* ✅ Fetch API Integration
* ✅ Dynamic Homestay Loading
* ✅ Backend Data Rendering
* ✅ Loading State
* ✅ Error Handling

---

## 🧪 API Testing

Completed API testing using **Postman**.

Included:

* ✅ CRUD API Testing
* ✅ Search Endpoint Testing
* ✅ Exported API Collection

---
# 📅 Week 5 Deliverables Completed

## 🗄 Database Integration

Integrated PostgreSQL using **Supabase** with **Prisma ORM**.

Completed:

- ✅ PostgreSQL Database Setup
- ✅ Supabase Cloud Database
- ✅ Prisma ORM Integration
- ✅ Database Migration
- ✅ Prisma Client Generation
- ✅ Seed Data

---

## 🔄 Persistent CRUD Operations

Migrated all REST APIs from in-memory storage to PostgreSQL.

Completed:

- ✅ Create Homestay
- ✅ Read Homestays
- ✅ Read Homestay by ID
- ✅ Update Homestay
- ✅ Delete Homestay
- ✅ Search Homestays by Location

---

## 🗄 Database Choice

This project uses **PostgreSQL** hosted on **Supabase**.

### Why PostgreSQL?

- Structured relational database
- Supports relationships between Users, Homestays and Bookings
- Reliable cloud-hosted storage
- Easy integration with Prisma ORM
- Persistent storage for CRUD operations

---

## 🗺 Database Schema

The application contains three entities:

- User
- Homestay
- Booking

Relationships:

- One User can have multiple Bookings.
- One Homestay can have multiple Bookings.
- Each Booking belongs to one User and one Homestay.

> *                      ┌─────────────────────────┐
                         │         User            │
                         ├─────────────────────────┤
                         │ id (PK)                 │
                         │ username (Unique)       │
                         │ password                │
                         │ createdAt               │
                         └──────────┬──────────────┘
                                    │
                                    │ 1
                                    │
                                    │
                                    │ *
                         ┌──────────▼──────────────┐
                         │       Booking           │
                         ├─────────────────────────┤
                         │ id (PK)                 │
                         │ checkIn                 │
                         │ checkOut                │
                         │ guests                  │
                         │ createdAt               │
                         │ userId (FK)             │
                         │ homestayId (FK)         │
                         └──────────┬──────────────┘
                                    │
                                    │ *
                                    │
                                    │ 1
                                    │
                         ┌──────────▼──────────────┐
                         │      Homestay           │
                         ├─────────────────────────┤
                         │ id (PK)                 │
                         │ name                    │
                         │ location                │
                         │ price                   │
                         │ rating                  │
                         │ description             │
                         │ image                   │
                         └─────────────────────────┘
---
## 🗄 Database Schema

The following ER diagram illustrates the database structure and relationships used in StaySense AI.

![Database Schema](./docs/W5_SchemaDiagram_[TBI-26101289].png)

---
# 📅 Week 6 Deliverables Completed

## 🔐 User Authentication & Authorization

Implemented a secure authentication and authorization system using **JWT (JSON Web Tokens)** and **bcrypt**.

### Completed:

- ✅ User Registration
- ✅ User Login
- ✅ Password Hashing using bcrypt
- ✅ JWT Token Generation
- ✅ JWT Verification Middleware
- ✅ Protected Backend Routes
- ✅ Secure Authentication Flow
- ✅ Environment Variable Configuration for Secret Keys

---

## 👤 User Management

Developed user account management features integrated with PostgreSQL.

Completed:

- ✅ Register New User
- ✅ Authenticate Existing User
- ✅ Store User Information in PostgreSQL
- ✅ Retrieve Authenticated User Details
- ✅ Persistent User Sessions

---

## 🏡 Booking Management System

Implemented a complete booking workflow for homestays.

Features:

- ✅ Book Homestays
- ✅ Booking Confirmation
- ✅ Store Booking Details in Database
- ✅ View My Bookings
- ✅ Cancel Booking
- ✅ Booking Status Management
- ✅ Booking History Persistence

---

## 🗄 Database Enhancements

Extended the database schema using Prisma ORM.

Completed:

- ✅ User Model
- ✅ Booking Model
- ✅ User-Booking Relationships
- ✅ Prisma Schema Updates
- ✅ Database Migration
- ✅ Prisma Client Regeneration

---

## 🔒 Security Enhancements

Implemented security best practices.

Completed:

- ✅ Password Hashing with bcrypt
- ✅ JWT-based Authentication
- ✅ Protected API Endpoints
- ✅ Authentication Middleware
- ✅ Secure Environment Variables
- ✅ Request Validation

---

# 📅 Week 7 Deliverables Completed

## 🤖 Google Gemini AI Integration

Integrated Google's **Gemini AI API** to provide intelligent assistance within the StaySense platform.

Completed:

- ✅ Gemini AI API Integration
- ✅ AI Chat Backend Service
- ✅ Prompt Engineering
- ✅ AI Response Generation
- ✅ Error Handling for AI Requests

---

## 💬 AI Travel Assistant

Developed an interactive AI-powered travel assistant.

Features:

- ✅ Floating AI Assistant Button
- ✅ Interactive Chat Interface
- ✅ Personalized Travel Recommendations
- ✅ Homestay Guidance
- ✅ User Query Assistance
- ✅ Real-time AI Responses

---

## 📍 Geoapify Maps & Location Services

Integrated Geoapify APIs for location-based services.

Completed:

- ✅ Nearby Homestay Discovery
- ✅ Interactive Map Integration
- ✅ Location Search
- ✅ Reverse Geocoding
- ✅ Distance-based Recommendations

---

## 🛠 Backend Enhancements

Improved backend architecture and API functionality.

Completed:

- ✅ AI Routes
- ✅ Location Routes
- ✅ Enhanced Booking APIs
- ✅ Updated Prisma Schema
- ✅ Improved Error Handling
- ✅ REST API Enhancements

---

## 📄 Documentation & Testing

Prepared project documentation and testing artifacts.

Completed:

- ✅ PROMPTS.md
- ✅ AI Prompt Testing
- ✅ Week 7 Demo PDF
- ✅ API Testing using Postman
- ✅ Environment Variable Documentation

---

## 🚀 Week 7 Highlights

Successfully enhanced StaySense AI with advanced AI and location-based capabilities.

Completed:

- ✅ Google Gemini AI Chat Assistant
- ✅ Geoapify Maps Integration
- ✅ Nearby Homestay Search
- ✅ Improved Booking Management
- ✅ Secure API Key Management using .env
- ✅ Professional Git Commit History
- ✅ Peer Code Reviews
- ✅ Week 7 Deliverables Successfully Completed

## ⚙ Set Up the Database

Follow these steps to configure the PostgreSQL database using Supabase.

## 1. Clone the Repository

```bash
git clone https://github.com/patraomsai38/StaySense---AI-Powered-Homestay-insights.git
cd StaySense---AI-Powered-Homestay-insights
```

---

## 2. Install Dependencies

### Frontend

```bash
npm install
```

### Backend

```bash
cd backend
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory and add the following variables:

```env
PORT=5000
DATABASE_URL=your_supabase_postgresql_connection_string
```

> Replace `your_supabase_postgresql_connection_string` with your actual PostgreSQL connection string from Supabase.

---

## 4. Run Database Migration

Apply the Prisma schema to your PostgreSQL database.

```bash
npx prisma migrate dev --name init
```

---

## 5. Generate Prisma Client

```bash
npx prisma generate
```

---

## 6. Seed the Database

Populate the database with sample homestay data.

```bash
node prisma/seed.js
```

---

## 7. Start the Backend Server

```bash
npm run dev
```

The backend server will run at:

```text
http://localhost:5000
```

---

## 8. Start the Frontend

Open a new terminal and run:

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

---

## 9. Verify the Database Connection

Open the application and verify that:

- ✅ Homestays are loaded from the PostgreSQL database.
- ✅ Create, Read, Update and Delete (CRUD) operations work successfully.
- ✅ Data persists after refreshing the application.

---

# 🌐 Local Development

## Clone Repository

```bash
git clone https://github.com/patraomsai38/StaySense---AI-Powered-Homestay-insights.git
```

---

## Install Frontend

```bash
npm install
```

Run Frontend

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173/
```

---

## Install Backend

```bash
cd backend
npm install
```

Run Backend

```bash
npm run dev
```

Backend URL:

```text
http://localhost:5000/
```

---

# 🛣 Available Routes

| Route              | Description                 |
| ------------------ | --------------------------- |
| `/`                | Home Page                   |
| `/about`           | About Page                  |
| `/dashboard`       | Analytics Dashboard         |
| `/booking`         | Homestay Explorer & Booking |
| `/login`           | Login Page                  |
| `/components-demo` | UI Component Showcase       |

---

# 📌 Current Project Status

## ✅ Completed

* Frontend Development
* Backend Development
* REST API Implementation
* Frontend-Backend Integration
* PostgreSQL Database Integration (Supabase)
* Prisma ORM Integration
* Database Schema Design
* Database Migration using Prisma
* Persistent CRUD Operations
* REST API Testing using Postman
* Routing & Navigation
* Responsive Design
* Reusable UI Component Library
* Dark / Light Mode
* Component Showcase Page
* Figma Wireframes
* AI Chat Assistant
* Weather Forecast Widget
* Interactive Dashboard
* Booking Trend Visualization
* Review Sentiment Charts
* Homestay Explorer
* Booking Workflow
* Search & Filter Functionality
* Environment Variable Configuration

---

## 🌐 Deployment Documentation

### Live Frontend
https://stay-sense-ai-powered-homestay-insi.vercel.app/

### Live Backend
https://staysense-backend.onrender.com/

---

## 🛠️ Tech Stack Summary

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- Passport.js (Google OAuth)
- JWT Authentication
- Prisma ORM

### Database
- PostgreSQL (via Prisma)

### APIs & Services
- Google Gemini API (AI Travel Assistant)
- Geoapify Places API
- Google OAuth 2.0

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: PostgreSQL

---

## ⚠️ Known Limitations on Free Tier

This project is deployed using free-tier cloud services, so the following limitations may be observed:

- **Render Free Tier:** The backend service automatically spins down after approximately **15 minutes of inactivity**. The first request after idle may take **30–60 seconds** while the server wakes up.
- **Google Gemini API:** The free API may occasionally return **503 – Model is experiencing high demand** during peak usage. Retrying the request after a few seconds usually resolves the issue.
- **Render Resources:** Limited CPU and memory may result in slightly slower response times during heavy usage.
- **Vercel Free Tier:** Deployment and bandwidth are subject to free-tier limits, although this does not affect normal project demonstrations.
---

# 👨‍💻 Developer

**Om Sai Patra**

**B.Tech Computer Science Engineering (AI & ML)**

**Technology Business Incubator (TBI)**

**AI-Assisted Full Stack Web Development Internship**

**StaySense AI – AI Powered Homestay Insights**
