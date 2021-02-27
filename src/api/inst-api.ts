import { PostType } from '../types/types';
import { instance } from './api';


export const instApi = {
	async requestPosts() {
		const response = await instance.get<PostType[]>('posts/')
		return response.data
	},
	async addPost(caption: string, images: FileList, ownerId: number) {
  //   const formData = new FormData()
  //   formData.append('caption', caption)
  //   // @ts-ignore
	// 	// images.forEach(image => {
	// 	// 	formData.append('images', image)
	// 	// })
  //   formData.append('images', images)
  //   // @ts-ignore
  //   formData.append('ownerId', ownerId)

	// 	const x = formData
    
  //   await instance.post('http://localhost:8000/api/posts/',
  //     formData,
  //     {headers: {'content-type': 'multipart/form-data'}}
  //   )
	// },
	// async addPost(caption: string, images: FileList, ownerId: number) {
	// 	await instance.post('comment/', {authorId, body, postId})
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