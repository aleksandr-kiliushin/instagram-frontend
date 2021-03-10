import axios, { AxiosResponse } from 'axios'


const instance = axios.create()

instance.interceptors.request.use(
  async (config) => {
		config.baseURL = 'https://alexander-kilyushin-instagram.herokuapp.com/api/'
		// config.baseURL = 'http://localhost:8000/api/'
    config.headers = {
      Authorization: localStorage.getItem('token'),
    }
    return config
  },
  (error) => {
    Promise.reject(error);
  }
)

export default instance




// types

export interface SucRes<T> extends AxiosResponse<T> {
	data: T
	status: 200
}
export interface FailRes extends AxiosResponse {
	data: {msg: string}
	status: 202
}
export type CustomAxiosRes<T> = SucRes<T> | FailRes