import axios from 'axios'

const API_URL = "https://discord.com/api"

const api = axios.create({
  baseURL: API_URL
})

export default api
