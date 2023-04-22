import axios from "axios";

export default class UniversityService {
  static async getUniversities() {
    try {
      const resp = await axios.get('http://www.unicomp.kz/api/universities')
      return resp.data
    } catch (e) {
      console.log(e)
    }
  }

  static async getCategories() {
    try {
      const resp = await axios.get('http://www.unicomp.kz/api/categories')
      return resp.data
    } catch (e) {
      console.log(e)
    }
  }
}