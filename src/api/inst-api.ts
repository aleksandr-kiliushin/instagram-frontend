import { PostType } from '../types/types';
import { instance } from './api';


export const instApi = {
	async requestPosts() {
		const response = await instance.get<PostType[]>('posts/')
		return response.data
	},
	async addPost(caption: string, image: File, ownerId: number) {
    const formData = new FormData()
    formData.append('caption', caption)
    // @ts-ignore
    formData.append('image', image)
    // @ts-ignore
    formData.append('ownerId', 2)
    
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