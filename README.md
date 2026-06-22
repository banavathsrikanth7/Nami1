# Nami - AI Chatbot Platform

## Overview

Nami is a full-stack AI chatbot platform that enables users to authenticate securely, create conversations, interact with Google's Gemini AI model, and maintain chat history.

## Features

* Firebase Authentication

  * Email/Password Login
  * Google OAuth Login

* AI Chat System

  * Gemini 2.5 Flash Integration
  * Real-time AI Responses

* Conversation Management

  * Create Conversations
  * Store Messages
  * Persistent Chat History

* Database Integration

  * PostgreSQL (Neon)
  * SQLAlchemy ORM

* Responsive Frontend

  * React.js
  * Tailwind CSS
  * Mobile-Friendly UI

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Firebase Authentication

### Backend

* FastAPI
* SQLAlchemy
* PostgreSQL
* Gemini API

### Deployment

* Vercel (Frontend)
* Render (Backend)
* Neon (Database)

## Project Structure

frontend/
├── components/
├── pages/
├── services/

backend/
├── app/
│ ├── models/
│ ├── routes/
│ ├── schemas/
│ ├── services/
│ └── dependencies/

## Installation

### Backend

pip install -r requirements.txt

uvicorn app.main:app --reload

### Frontend

npm install

npm run dev

## Future Improvements

* Streaming AI Responses
* Conversation Renaming
* Chat Search
* Dark Mode
* File Upload Support
* Multi-AI Provider Support

## Author

Banavath Srikanth

B.Tech Electrical Engineering

IIT Kharagpur
