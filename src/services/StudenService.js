import axios from "axios";

export default class StudentService {
  url = "http://localhost:5270/api/Students?Index=0&Size=10";

  getStudents() {
    return axios.get(this.url);
  }

  addStudent(student) {
    return axios.post("http://localhost:5270/api/Students", student);
  }
}
