import axios from "axios";

export default class InstructorService {
  url = "http://localhost:5270/api/Instructors?Index=0&Size=10";

  getInstructor() {
    return axios.get(this.url);
  }
}
