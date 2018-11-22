import axios from "axios";

const api = "api";
const baseUrl = "https://jsonplaceholder.typicode.com/";
export default {
  deleteHero(hero) {
    return axios.delete(`${api}/hero/${hero.id}`);
  },
  getHeroes() {
    return axios.get(`${api}/users`);
  },
  addHero(hero) {
    return axios.post(`${api}/hero/`, { hero });
  },
  updateHero(hero) {
    return axios.put(`${api}/hero/${hero.id}`, { hero });
  }
};
