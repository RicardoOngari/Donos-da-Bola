import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mobile-10tt.onrender.com/api/jogadores',
});

export default api;
