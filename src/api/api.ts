import axios from 'axios'

export const instance = axios.create({
	// baseURL: 'https://oaiyui-instbackend.herokuapp.com/api/'
	baseURL: 'http://localhost:8000/api/',
	headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`,
		// 'token': localStorage.getItem('token'),
		// 'token': 'fe55593b0029e0cd9c26eb0971c22cd35aec4c0a',
	}
})