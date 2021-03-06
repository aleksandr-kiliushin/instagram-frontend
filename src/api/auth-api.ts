import { AxiosResponse } from 'axios';
import { CurUser } from './../types/types';
import { instance } from './api';


interface SuccessRes<T> extends AxiosResponse<T> {
	data: T
	status: 200
}
interface FailRes extends AxiosResponse {
	data: {msg: string}
	status: 202
}
interface CurUserResData extends CurUser {
	token: string
}
type CustomAxiosRes<T> = SuccessRes<T> | FailRes


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