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
type CustomAsiosRes = SuccessRes<CurUserResData> | FailRes


export const authApi = {
	async requestAndSetToken(username: string, password: string) {
		const response: CustomAsiosRes = await instance.post('api-token-auth/', {username, password})
		return response
	},



	// old
	// async getUserFromToken() {

	// },
	// async getUserData(authUsername: string) {
	// 	const response = await instance.get<User>(`users/${authUsername}/`)
	// 	return response.data
	// },
	// async updateUserData(avatar: File, bio: string, username: string) {
  //   const formData = new FormData()
  //   formData.append('bio', bio)
	// 	formData.append('avatar', avatar)
  //   await instance.put(
	// 		`${username}/`,
	// 		formData,
  //     {headers: {'content-type': 'multipart/form-data'}}
  //   )
	// },
	// async register(username: string, password: string) {
	// 	await instance.post('register/', {username, password})
	// },
	// async like(postId: number, userId: number) {
	// 	await instance.post(`posts/${postId}/like/`, {userId})
	// },
	// async follow(followedUserId: number, followerId: number) {
	// 	await instance.post('follow/', {followedUserId, followerId})
	// },
}