import { instance } from './api';


export const authApi = {
	async fake(fake: number) {
		const response = await instance.get<number>('fake/')
		return response.data
	},
}