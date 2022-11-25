import { loginRoute } from '../../../domains/authentication/infrastructure/routes';
import { ERROR_ON_REQUEST, SERVER_SIDE_ERROR } from '../../application/constants/messages/error-messages';
import { history } from '../../application/helpers/history';

export const handleResponse = (response) => {
	return response.json().then((data) => {
		if (!response.ok) {
			if (response.status === 401) {
				typeof window !== 'undefined' && localStorage.removeItem('user');
				history.push(loginRoute);
			}
			const unknowMessage = response.status >= 500 ? SERVER_SIDE_ERROR : ERROR_ON_REQUEST;
			let error = (data && (data.error || data.message)) || unknowMessage;
			if (response.status === 404) {
				error = 'NOT_FOUND';
			}
			return Promise.reject(data.error_type ? data : error);
		}
		return data;
	});
};

export const handlePdfResponse = (response) => {
	return response.blob().then((data) => {
		if (!response.ok) {
			if (response.status === 401) {
				typeof window !== 'undefined' && localStorage.removeItem('user');
				history.push(loginRoute);
			}
			const unknowMessage = response.status >= 500 ? SERVER_SIDE_ERROR : ERROR_ON_REQUEST;
			let error = (data && (data.error || data.message)) || unknowMessage;
			if (response.status === 404) {
				error = 'NOT_FOUND';
			}
			return Promise.reject(data.error_type ? data : error);
		}
		return data;
	});
};


export function authHeader(contentType = 'application/json') {
	// return authorization header with jwt token
	const user = JSON.parse(localStorage.getItem('user'));
	if (user && user.token) {
		return new Headers({ 'x-access-token': `${user.token}`, 'Content-Type': contentType });
	}
	return new Headers({ 'Content-Type': contentType });
}
