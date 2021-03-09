import { CommentType, PostType } from '../types/types'
import instance, { CustomAxiosRes } from './api'


export const feedApi = {
	async addComment(body: CommentType['body'], postId: PostType['id']) {
		const response: CustomAxiosRes<{comment: CommentType}> = await instance.post(`comment/${postId}/`, {body})
		return response
	},
	async addPost(caption: PostType['caption'], images: FileList) {
    const formData = new FormData()
    formData.append('caption', caption)
		for (let i = 0; i < images.length; i++) {
			formData.append('images', images[i])
		}
    const response: CustomAxiosRes<{post: PostType}> = await instance.post(
			'posts/', formData, {headers: {'content-type': 'multipart/form-data'}}
		)
		return response
	},
	async deleteComment(commentId: CommentType['id']) {
		const response: CustomAxiosRes<{msg: string}> = await instance.delete(`comment/${commentId}/`)
		return response
	},
	async deletePost(id: PostType['id']) {
		const response: CustomAxiosRes<{msg: string}> = await instance.delete(`posts/${id}/`)
		return response
	},
	async reqPosts(startId: PostType['id']) {
		const response: CustomAxiosRes<{posts: PostType[], are_posts_over: boolean}> = await instance.get(
			`/posts?startId=${startId}`
		)
		return response
	},
}