# Task List with Docker

A project built to understand how Docker works and how to deploy an application using it. Also used React's Context API to build a drag-and-drop task list.

Live app: https://lista-de-tarefas-two.vercel.app/

![App screenshot](https://user-images.githubusercontent.com/84880811/141588299-c765c4bb-b28f-4fdf-a76b-aa49033d77d7.png)

## What I learned

- Set up a Docker container using `docker-compose`
- Use a `Dockerfile` to build the application
- Understand Docker containers and images
- Use NGINX to expose the app on port 80, proxying to the container port
- Build a drag-and-drop task list with `react-beautiful-dnd`
- Manage global state with React's Context API

**Status: Completed**

## Running with Docker

> Requires Docker and Docker Compose installed.

```bash
git clone git@github.com:cifernando/lista-de-tarefas-docker.git
cd lista-de-tarefas-docker
docker-compose up
```

Open [http://localhost:8080](http://localhost:8080)

## Running with React

```bash
npm install
npm start
```

## Tech Stack

- Docker & Docker Compose
- React
- React Context API
- react-beautiful-dnd
- NGINX
