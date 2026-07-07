# TaskFlow – Task Management System

A full-stack task management application built using React, TypeScript, Express, PostgreSQL and Prisma.

## Features

- User Registration
- User Login
- JWT Authentication
- Create Tasks
- View Tasks
- Edit Tasks
- Delete Tasks
- Search Tasks
- Dashboard Statistics

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express
- Prisma ORM

### Database

- PostgreSQL

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Database

```bash
npx prisma migrate dev
```

## API Endpoints

POST /api/auth/register

POST /api/auth/login

GET /api/tasks

POST /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id