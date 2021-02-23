import { PostType } from '../types/types';
import { instance } from './api';


export const instApi = {
	async requestPosts() {
		const response = await instance.get<PostType[]>('posts/')
		return response.data
	},
	async addComment(authorId: number, body: string, postId: number) {
		await instance.post('comment/', {commentData: {authorId, body, postId}})
	},
}