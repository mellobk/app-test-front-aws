import { authHeader, handlePdfResponse, handleResponse } from '../../../shared/infrastructure/api/apiHandler';
import { createInvetory, getPdf, createTasks, deleteTasks, getInventory, getModels, getTasks, updateTasks, sendPdf } from './backend-urls';

export const getAllTaksk = () => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader(),
		body: JSON.stringify(),
	};
	return fetch(getTasks, requestOptions).then(handleResponse);
};

export const getAllInventory = (id) => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader(),
	};
	return fetch(getInventory(id), requestOptions).then(handleResponse);
};



export const createTask = (data = {}) => {
	const requestOptions = {
		method: 'POST',
		headers: authHeader(),
		body: JSON.stringify(data),
	};
	return fetch(createTasks, requestOptions).then(handleResponse);
};

export const downloadInventory = (data = {}) => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader(),
	};
	return fetch(getPdf(data), requestOptions).then(handlePdfResponse);
};


export const createInventory = (data = {}) => {
	const requestOptions = {
		method: 'POST',
		headers: authHeader(),
		body: JSON.stringify(data),
	};
	return fetch(createInvetory(data.id), requestOptions).then(handleResponse);
};

export const sendEmail = (data = {}) => {
	const requestOptions = {
		method: 'POST',
		headers: authHeader(),
		body: JSON.stringify(data),
	};
	return fetch(sendPdf(data.id), requestOptions).then(handleResponse);
};

export const updateTask = (data = {}) => {
	const requestOptions = {
		method: 'PATCH',
		headers: authHeader(),
		body: JSON.stringify(data),
	};
	return fetch(updateTasks(data.id), requestOptions).then(handleResponse);
};


export const deleteTask = (data = {}) => {
	const requestOptions = {
		method: 'DELETE',
		headers: authHeader(),
	};
	return fetch(deleteTasks(data), requestOptions).then(handleResponse);
};

export const getModel = (page = {}) => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader(),
	};
	return fetch(getModels(page), requestOptions).then(handleResponse);
};





export default getAllTaksk;