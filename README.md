# Task Manager

A simple and efficient task management application built with Node.js and Express. This project provides a clean REST API for managing tasks along with a lightweight frontend, and includes Docker and Kubernetes configurations for easy deployment.

---

## Features

- Create, read, update, and delete tasks
- Clean and intuitive user interface
- RESTful API architecture
- Docker containerization support
- Kubernetes deployment ready
- Lightweight and easy to set up

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework for building the API |
| **HTML/CSS** | Frontend interface (served from `public/` folder) |
| **Docker** | Containerization for consistent deployments |
| **Kubernetes** | Orchestration for scalable deployments |

---

## Project Structure

```
task-manager/
├── controllers/          # Request handlers and business logic
│   └── (controller files)
├── routes/               # API route definitions
│   └── (route files)
├── services/             # Business logic and data operations
│   └── (service files)
├── public/               # Static frontend assets (HTML, CSS, JS)
│   └── (static files)
├── app.js                # Main application entry point
├── package.json          # Project dependencies and scripts
├── Dockerfile            # Docker image configuration
├── deployment.yaml       # Kubernetes deployment configuration
└── service.yaml          # Kubernetes service configuration
```

### Directory Explanation

| Directory/File | Description |
|----------------|-------------|
| `controllers/` | Contains functions that handle incoming HTTP requests and return responses |
| `routes/` | Defines API endpoints and maps them to controller functions |
| `services/` | Encapsulates business logic and data manipulation |
| `public/` | Stores static frontend files served to the client |
| `app.js` | Main server file that initializes the Express application |
| `Dockerfile` | Instructions for building the Docker image |
| `deployment.yaml` | Kubernetes deployment specification |
| `service.yaml` | Kubernetes service specification for exposing the app |

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)
- [kubectl](https://kubernetes.io/docs/tasks/tools/) (optional, for Kubernetes deployment)

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Pawan-Builds/task-manager.git
   cd task-manager
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

---

## Running the Project Locally

### Development Mode

```bash
npm start
```

Or with nodemon (if configured):

```bash
npm run dev
```

The application will be available at: `http://localhost:3000`

---

## Running with Docker

### Build the Docker Image

```bash
docker build -t task-manager .
```

### Run the Container

```bash
docker run -p 3000:3000 task-manager
```

### Access the Application

Open your browser and navigate to: `http://localhost:3000`

---

## Kubernetes Deployment

### Prerequisites

- A running Kubernetes cluster (local or cloud)
- `kubectl` configured to communicate with your cluster

### Deploy to Kubernetes

1. **Apply the deployment configuration**

   ```bash
   kubectl apply -f deployment.yaml
   ```

2. **Apply the service configuration**

   ```bash
   kubectl apply -f service.yaml
   ```

3. **Verify the deployment**

   ```bash
   kubectl get deployments
   kubectl get pods
   kubectl get services
   ```

4. **Access the application**

   If using Minikube:
   ```bash
   minikube service task-manager-service
   ```

   For cloud deployments, use the external IP provided by the load balancer.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Serve the frontend application |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get a single task by ID |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task |

### Example API Request

```bash
# Get all tasks
curl http://localhost:3000/api/tasks

# Create a new task
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Complete README", "completed": false}'
```

---

## Screenshots

> _Add screenshots of your application here to showcase the UI and features._

| Home Page | Task List | Add Task |
|-----------|-----------|----------|
| ![Home](screenshots/home.png) | ![Tasks](screenshots/tasks.png) | ![Add](screenshots/add.png) |

---

## Author

**Pawan Singh**

- GitHub: [@Pawan-Builds](https://github.com/Pawan-Builds)
- Repository: [task-manager](https://github.com/Pawan-Builds/task-manager)

Feel free to reach out for questions, suggestions, or contributions!

---
