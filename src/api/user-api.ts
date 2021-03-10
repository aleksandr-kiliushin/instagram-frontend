import { PostType, UserType } from './../types/types'
import instance, { CustomAxiosRes } from './api'


export const userApi = {
	async deleteAvatar() {
		const response: CustomAxiosRes<{avatar: UserType['avatar']}> = await instance.delete('avatar/')
		return response
	},
	async follow(id: UserType['id']) {
		const response: CustomAxiosRes<{msg: string}> = await instance.put(`follow/${id}/`)
		return response
	},
	async initAuth() {
		const response: CustomAxiosRes<CurUserResData> = await instance.get('init_auth/')
		return response
	},
	async like(id: PostType['id']) {
		const response: CustomAxiosRes<{msg: string}> = await instance.put(`like/${id}/`)
		return response
	},
	async login(username: UserType['username'], password: string) {
		const response: CustomAxiosRes<CurUserResData>= await instance.post('login/', {username, password})
		return response
	},
	async register(username: UserType['username'], password: string) {
		const response: CustomAxiosRes<{msg: string}> = await instance.post('register/', {username, password})
		return response
	},
	async reqUsers() {
		const response: CustomAxiosRes<UserType[]> = await instance.get('users/')
		return response
	},
	async updateAvatar(avatar: File) {
    const formData = new FormData()
		formData.append('avatar', avatar)
    const response: CustomAxiosRes<{avatar: UserType['avatar']}> = await instance.post(
			'avatar/', formData, {headers: {'content-type': 'multipart/form-data'}}
		)
		return response
	},
}



// types

interface CurUserResData extends UserType {
	token: string
}