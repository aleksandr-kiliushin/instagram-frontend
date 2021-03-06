import { User } from './../types/types'
import { instance, CustomAxiosRes } from './api'


export const authApi = {
	async initAuth() {
		const response: CustomAxiosRes<CurUserResData> = await instance.get('init_auth/')
		return response
	},
	async login(username: string, password: string) {
		const response: CustomAxiosRes<CurUserResData>= await instance.post('login/', {username, password})
		return response
	},
	async register(username: string, password: string) {
		const response: CustomAxiosRes<{msg: string}> = await instance.post('register/', {username, password})
		return response
	},
}



// types

interface CurUserResData extends User {
	token: string
}