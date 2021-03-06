import axios, { AxiosResponse } from 'axios'

export const instance = axios.create({
	// baseURL: 'https://oaiyui-instbackend.herokuapp.com/api/'
	baseURL: 'http://localhost:8000/api/',
	headers: {
		// 'Authorization': `Token ${localStorage.getItem('token')}`,
		'Authorization': localStorage.getItem('token'),
	}
})


export interface SucRes<T> extends AxiosResponse<T> {
	data: T
	status: 200
}
export interface FailRes extends AxiosResponse {
	data: {msg: string}
	status: 202
}
export type CustomAxiosRes<T> = SucRes<T> | FailRes