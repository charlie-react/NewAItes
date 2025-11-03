// src/config.js
export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://newaites-server.onrender.com" 
    : "http://localhost:5000"; 
