import { PostType } from '../types/types'
import { instance } from './api'


export const instApi = {
	async requestPosts() {
		const response = await instance.get<PostType[]>('posts/')
		return response.data
	},
	async addPost(caption: string, images: FileList, ownerId: number) {
    const formData = new FormData()
    formData.append('caption', caption)
		for (let i = 0; i < images.length; i++) {
			formData.append('images', images[i])
		}
    // @ts-ignore
    formData.append('ownerId', ownerId)
    
    await instance.post('http://localhost:8000/api/posts/',
      formData,
      {headers: {'content-type': 'multipart/form-data'}}
    )
	},
	async deletePost(postId: number) {
		await instance.delete(`posts/${postId}`)
	},
	async addComment(authorId: number, body: string, postId: number) {
		await instance.post('comment/', {authorId, body, postId})
	},
	async deleteComment(commentId: number) {
		await instance.delete(`comment/${commentId}`)
	},
}