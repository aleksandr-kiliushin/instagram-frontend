import { PostType } from '../types/types';
import { instance } from './api';


export const instApi = {
	async requestPosts() {
		const response = await instance.get<PostType[]>('posts/')
		return response.data
	},
	async addPost(caption: string, image: File, ownerId: number) {
		await instance.post('posts/', {
			caption, image,
			imageUrl: 'http://1.bp.blogspot.com/-1ztptPpWjac/VN6b6LpeFNI/AAAAAAACwFk/X33qntF2wh0/s1600/delete-300x300.jpg',
			ownerId})
	},
	async addComment(authorId: number, body: string, postId: number) {
		await instance.post('comment/', {authorId, body, postId})
	},
	async deleteComment(commentId: number) {
		await instance.delete(`comment/${commentId}`)
	},
}