import { User } from '../types/types';
import { instance } from './api';


export const authApi = {
	async getUserData(authUsername: string) {
		const response = await instance.get<User>(`users/${authUsername}/`)
		return response.data
	},
	async updateUserData(avatar: File, bio: string, username: string) {
    const formData = new FormData()
    formData.append('bio', bio)
		formData.append('avatar', avatar)
    await instance.put(
			`${username}/`,
			formData,
      {headers: {'content-type': 'multipart/form-data'}}
    )
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
	async like(postId: number, userId: number) {
		await instance.post(`posts/${postId}/like/`, {userId})
	},
	async follow(followedUserId: number, followerId: number) {
		await instance.post('follow/', {followedUserId, followerId})
	},
}