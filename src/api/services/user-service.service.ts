import apiClient from "../api-client.service"
import { User, UserCredentials } from "../../types"

export const userService = {
    login: async (credentials: UserCredentials) => {
        const { data } = await apiClient.post<{ token: string, user: User}>('/login', credentials);
        return data
    },
    register: async (userData: UserCredentials) => {
        const { data } = await apiClient.post<User>('/register', userData)
        return data
    },
    getUsers: async () => {
        const { data } = await apiClient.get('/api/users')
        console.log(data?.data)
        return data.data
    }
}