let IS_PROD = true;  // true for Render deployment

const server = IS_PROD
  ? "https://zoomproject-1.onrender.com"  // 👈 replace with your backend Render URL
  : "http://localhost:8000";

export default server;
