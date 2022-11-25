import { authHeader, handleResponse } from '../../../shared/infrastructure/api/apiHandler';
import { postLogin, postVerify, permission } from './backend-urls';

export const login = (data = {}) => {
	const requestOptions = {
		method: 'POST',
		headers: authHeader(),
		body: JSON.stringify(data),
	};
	return fetch(postLogin, requestOptions).then(handleResponse);
};

export const getAllPermissions = () => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader(),
	};
	return fetch(permission, requestOptions).then(handleResponse);
};

export const verify = (data = {}) => {
	const requestOptions = {
		method: 'POST',
		headers: authHeader(),
		body: JSON.stringify(data),
	};
	return fetch(postVerify, requestOptions).then(handleResponse);
};

export default login;