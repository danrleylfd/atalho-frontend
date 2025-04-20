import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8080" });
//  const api = axios.create({ baseURL: "https://denkitsu.up.railway.app" });
// const api = axios.create({ baseURL: 'https://denkitsu.glitch.me'});

api.defaults.headers.common["Content-Type"] = "application/json";

export default api;
