const config = {
  BASE_URL:
    process.env.REACT_ENV === "prod"
      ? "https://backend-todo-list-btp5n3r8h-niraj-paudels-projects.vercel.app/api"
      : "http://localhost:3000/",
  API_BASE_URL:
    process.env.REACT_ENV === "prod"
      ? "https://backend-todo-list-btp5n3r8h-niraj-paudels-projects.vercel.app/api"
      : "http://localhost:8000/api",
  AUTO_CLOSE_TIME: 1000,
};

export default config;
