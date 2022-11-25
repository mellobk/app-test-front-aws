import { authHeader, handleResponse } from '../../../shared/infrastructure/api/apiHandler';
import { postCreateModel } from './backend-urls';

export const createModel = (data = {}) => {
	const requestOptions = {
		method: 'POST',
		headers: authHeader(),
		body: JSON.stringify(data),
	};
	return fetch(postCreateModel, requestOptions).then(handleResponse);
};

export default createModel;