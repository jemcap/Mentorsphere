import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5500/'

const apiClient = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
        'Content-Type': "application/json"
    }
})

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
}, (error) => Promise.reject(error))


export default apiClient