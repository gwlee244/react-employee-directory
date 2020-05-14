import axios from "axios";

export default {
  searchAll: function() {
    return axios.get("https://randomuser.me/api/?results=20&nat=us");
  },
  searchFemales: function() {
    return axios.get("https://randomuser.me/api/?gender=female&results=20&nat=us");
  },
  searchMales: function() {
    return axios.get("https://randomuser.me/api/?gender=male&results=20&nat=us");
  }
}
    