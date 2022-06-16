# Module Federation example using Webpack and Re.Pack for React Native

## Installation

```bash
yarn
```

## Usage

### Running home container

App can be run as a standalone application using:
1. `yarn home start` (notice the dev server is running on port 9090)
2. `yarn home ios`/`yarn home android`
  
Or as part of a Host application.

### Running banking container

App can be run as a standalone application using:
1. `yarn banking start` (notice the dev server is running on port 9091)
2. `yarn banking ios`/`yarn banking android`
  
Or as part of a Host application.

### Running wallet container

App can be run as a standalone application using:
1. `yarn wallet start` (notice the dev server is running on port 9092)
2. `yarn wallet ios`/`yarn wallet android`
  
Or as part of a Host application.

### Running expense container

App can be run as a standalone application using:
1. `yarn expense start` (notice the dev server is running on port 9093)
2. `yarn expense ios`/`yarn expense android`
  
Or as part of a Host application.

### Running profile container

App can be run as a standalone application using:
1. `yarn profile start` (notice the dev server is running on port 9094)
2. `yarn profile ios`/`yarn profile android`
  
Or as part of a Host application.

### Running host application with app's containers (For each Terminal)
(notice the host dev server is running on port 8081)

1. Run dev server for home container: `yarn home start`
2. Run dev server for banking container: `yarn banking start`
3. Run dev server for wallet container: `yarn wallet start`
4. Run dev server for expense container: `yarn expense start`
5. Run dev server for profile container: `yarn profile start`
6. Run dev server for host application: `yarn host start`
7. Build host application: `yarn host ios`/`yarn host android`

### Notes

It might be helpful to open Re.Pack's web dashboard to analyse artifacts:

- http://localhost:9090/dashboard for home container
- http://localhost:9091/dashboard for banking container
- http://localhost:9092/dashboard for wallet container
- http://localhost:9093/dashboard for expense container
- http://localhost:9094/dashboard for profile container
- http://localhost:8081/dashboard for host container