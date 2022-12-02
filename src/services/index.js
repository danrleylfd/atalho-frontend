const axios = require('axios');

const api = axios.create({ baseURL: "https://atalho.up.railway.app" });
// const api = axios.create({ baseURL: 'https://atalho.glitch.me'});

api.defaults.headers.common["Content-Type"] = "application/json";

export default api;
