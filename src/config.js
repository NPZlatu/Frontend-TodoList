const config = {
  BASE_URL:
    process.env.REACT_ENV === "prod"
      ? "https://backend-todo-list-three.vercel.app/api"
      : "http://localhost:3000/",
  API_BASE_URL:
    process.env.REACT_ENV === "prod"
      ? "https://backend-todo-list-three.vercel.app/api"
      : "https://backend-todo-list-three.vercel.app/api",
  AUTO_CLOSE_TIME: 1000,
};

export default config;
