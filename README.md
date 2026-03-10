# Cab System SMS Frontend

A React application for the Cab System SMS booking platform.

## Features
- User registration and authentication
- Ride booking interface  
- Integration with backend API

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### Build
```bash
npm run build
```

Builds the app for production in the `build` folder.

### Environment Variables
Create a `.env` file in the root directory:
```
REACT_APP_API_URL=https://cabsystemsms-1.onrender.com
```

## Deployment

This project is configured for deployment on Vercel. Push changes to the `main` branch to auto-deploy.

## API Endpoints

- `POST /register` - Register a new user
- `POST /login` - Login user

## License

MIT
