# Nectia CRUD with Angular

This project was generated with Angular CLI 14.0.0 and Firebase 9.8.2. The aim of it is to perform an environment for stuff managing, in this case, clients.

## Development server

Once the project is already cloned, it is necessary to install all the dependencies.

- Open the console and type `npm install`.
- After that, run `ng serve` for a dev server.
- Navigate to `http://localhost:4200/`.
- The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Usage

- For running the application you have to firstly create a new user by providing an email and a password in the `register tab`.

- Secondly you have log in in the application by entering the credentials created before (`email & password`)

- This is the only way to be able to perfom the `actions` in the applications: `Create`, `Read`, `Update`, `Delete`

- For testing purposes there is a testing account: `osvaldo@gmail.com` | `123456` .

## Comments

Since this application was developed by using Firebase for authentication purposes, it was not possible to return the `Authorization` header with the corresponding `token`.

## License

I [unlicense](https://unlicense.org/) everything in this repository.
