import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import {  getCurrentUser } from './domains/authentication/application/selectors/user';
import {  setCurrentUser } from './domains/authentication/application/slices/user';
import 'react-toastify/dist/ReactToastify.css';


import Router from './shared/presentation/Router';

const App = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(getCurrentUser);

	useEffect(() => {
		if (currentUser?.token) {
			dispatch(setCurrentUser({ ...currentUser }));
		
		}
	}, [currentUser, dispatch]);

	return <>
	<ToastContainer />
	<Router />
	</>
};

export default App;
