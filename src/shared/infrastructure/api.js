import { authHeader, handleResponse } from './api/apiHandler';
import { getAllPlacesApp, getAllPlataformsApp, getProfilePicture } from './backend-urls';

export const getPlaces = () => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader(),
	};
	return fetch(getAllPlacesApp, requestOptions).then(handleResponse);
};

export const getPlataforms = () => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader(),
	};
	return fetch(getAllPlataformsApp, requestOptions).then(handleResponse);
};


export const getProfilePictures = (fileName) => {

	const requestOptions = {
		method: 'GET',
		headers: authHeader(),
	};
	return fetch(getProfilePicture(fileName), requestOptions).then(handleResponse);
};

export default getPlaces;