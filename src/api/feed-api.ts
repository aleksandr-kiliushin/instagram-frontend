import { PostType } from '../types/types'
import instance, { CustomAxiosRes } from './api'


export const feedApi = {
	async addPost(caption: string, images: FileList) {
    const formData = new FormData()
    formData.append('caption', caption)
		for (let i = 0; i < images.length; i++) {
			formData.append('images', images[i])
		}
    const response: CustomAxiosRes<{msg: string}> = await instance.post(
			'posts/', formData, {headers: {'content-type': 'multipart/form-data'}}
		)
		return response
	},
	async deletePost(id: number) {
		const response: CustomAxiosRes<{msg: string}> = await instance.delete(`posts/${id}/`)
		return response
	},
	async requestPosts() {
		const response: CustomAxiosRes<PostType[]> = await instance.get('posts/')
		return response
	},
	// async deletePost(postId: number) {
	// 	await instance.delete(`posts/${postId}`)
	// },
	// async addComment(authorId: number, body: string, postId: number) {
	// 	await instance.post('comment/', {authorId, body, postId})
	// },
	// async deleteComment(commentId: number) {
	// 	await instance.delete(`comment/${commentId}`)
	// },
}