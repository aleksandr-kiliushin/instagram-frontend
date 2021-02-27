import { User } from '../types/types';
import { instance } from './api';


export const authApi = {
	async getUserData(authUsername: string) {
		const response = await instance.get<User>(`get-user-by-username/${authUsername}`)
		return response.data
	},
	async tempAuthName(authUsername: string, password: string) {
		const response = await instance.post('api-token-auth/', {username: authUsername, password})
		localStorage.setItem('token', response.data.token)
		return response.status
	},
	async register(username: string, password: string) {
		await instance.post('register/', {username, password})
	},
	async testHello() {
		const response = await instance.get('hello/')
		console.log(response)
	},
}