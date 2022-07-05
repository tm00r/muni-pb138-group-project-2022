# MUNI PB138 Group Project - The ordering system

## Project task
Create system that allows you to create order templates for production.
It displays a shopping list for each order according to the template.
For each order there are individual production steps that have a deadline.
For an order, the current status of the steps for its successful completion is kept.

## Project Team
-   Timur Gareev               - UI design, frontend, APIs, application workflow
-   Dominika Blehová           - frontend, APIs, application workflow
-   Patrik Michal Vlček        - backend, APIs, dockerization, database.

## Features

-   [x] Displaying current templates and orders
-   [x] Create, delete of templates and orders
-   [x] Filling templates and orders with items in the required quantity
-   [x] Filling templates and orders with steps and deadline assignment for it
-   [x] Marking of the steps completion
-   [x] Сontrol of deadlines and marking expired deadlines
-   [x] Automatic marking of completed orders after all steps have been completed
-   [x] Input validation for template filling and order editing form.
-   [x] Form change control
-   [x] Pop-ups for resetting or saving changes made to an order or a template

## Project structure

```
- backend ()
    ├ prisma
        ├ migrations           - folder with Prisma generated migrations
        └ schema.prisma        - Prisma schema data models
    └ src
        ├ index                - express backend api declarations
        ├ client               - Prisma client declaration
        └ resources            - folder with backend prisma queries

- frontend ()
    ├ .storybook (contains storybook tooling configs)
    └ src
        |-- assets             - folder containing every needed static image
        |-- components         - folder with React components
        |-- pages              - folder with application layouts
        |-- states             - folder with Recoil atoms, selectors and data fetcher
        |-- static             - folder with empty template form and domain
        |-- stories            - folder with storybook stories components
        |-- styles             - folder with CSS styles
        |-- types              - folder with global defined types
```

## Technologies

### Frontend

-   HTML- standard markup language for Web pages.
-   CSS - language for styling of HTML document.
-   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.
-   [Vite](https://vitejs.dev/) - Frontend build tooling for React application.
-   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
-   [React Bootstrap](https://react-bootstrap.github.io/) - frontend framework rebuild in React (used only for Modal components).

### API

-   [SWR](https://swr.vercel.app/ru) - React Hooks library for data fetching.
-   [Axios](https://axios-http.com/) - promise-based HTTP Client for node.js and the browser.

### Backend

-   [Prisma](https://www.prisma.io/) - Object–relational mapping toolkit for Node.js and TypeScript.
-   [Express](https://expressjs.com/) - minimal and flexible Node.js web application framework.
-   [Postgres](https://www.postgresql.org/) - A relational database.

### Tooling

-   [Docker](https://www.docker.com/) - software platform for building, running, managing and distributing applications.
-   [Insomnia](https://insomnia.rest/) - desktop app for API design and testing.
-   [Figma](https://www.figma.com/) - collaborative interface design tool.
-   [Storybook](https://storybook.js.org/) - tool for building UI components and pages in isolation.
-   [Git](https://git-scm.com/) - A distributed version control system.
-   [Gitlab CI](https://about.gitlab.com/gitlab-ci/) - A continuous integration service for Git.
-   [Prettier](https://prettier.io/) - A tool to format code.
-   [Eslint](https://eslint.org/) - A linter for JavaScript and JSX.

## Service connection

### Adminer
For Adminer connection:
1. Go to `127.0.0.1:8080`
2. Select PostgresSQL as database
3. Fill up `server: database`, `Username: admin`, `Password: your desired password`, `Database: OrderHub`
4. Click `Login`.

### OrderHub frontend service
For OrderHub frontend application connection go to `127.0.0.1:8000`

### OrderHub backend service
OrderHub backend application runs on `127.0.0.1:4000`

### OrderHub database service
OrderHub database runs on `127.0.0.1:5432`


## Run application with Docker-Compose
1. Before running `docker-compose` in the project directory create file `db_password.txt` inside folder `secrets` and add there your desired password to the database.

2. In the backend directory create file `.env` from copy `.env.example`

3. Replace `%DATABASE_PASSWORD%` in `.env` by your desired password same that it is written in `db_password.txt`.

4. To start services run in the project directory `docker-compose -d up`

5. To stop services run in the project directory `docker-compose -f stop`

6. To down services run in the project directory `docker-compose -f down`


## Available Scripts

In the backend directory, you can run:

### `npm install`
Run `npm install` to install all the dependencies

### `npm run start
Run `npm run start` to run express backend application

### `npx prisma migrate reset`
Run `npx prisma migrate reset` to reset database to default state

`npx prisma migrate dev`
Run `npx prisma migrate dev` to apply migrations to database in development environment

`npx prisma generate`
Run `npx prisma generate` to generate database based on migrations

`npx prisma migrate dev --name %NAME%`
Run `npx prisma migrate dev --name %NAME%` to create a new database migration run

In the frontend directory, you can run:

### `npm install`
Run `npm install` to install all the dependencies

### `npm run vite`
Run `npm run vite` to run vite frontend application

### `npm run storybook`
Run `npm run storybook` to run storybook toolkit

### `npm run build`
Run `npm run storybook` to build frontend application
