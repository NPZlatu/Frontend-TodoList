const config = {
  BASE_URL:
    process.env.REACT_ENV === "prod"
      ? "https://production-api.example.com/api"
      : "http://localhost:3000/",
  API_BASE_URL:
    process.env.REACT_ENV === "prod"
      ? "https://production-api.example.com/api"
      : "http://localhost:8000/api",
  AUTO_CLOSE_TIME: 1000,
};

export default config;
