import Axios from 'axios'

var Api = Axios.create({
  baseURL: 'http://localhost:5001/api',
  timeout: 1000
})

export default Api
