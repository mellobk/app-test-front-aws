import { createSelector } from '@reduxjs/toolkit';

export const projectState = (state) => state.adminLayout;

export const getNavBarLogo = createSelector(projectState, (adminLayout) => {
	const { navBarLogo } = adminLayout;
	return navBarLogo;
});

export const getAlertData = createSelector(projectState, (adminLayout) => {
	const { alertData } = adminLayout;
	return alertData;
});

export const getPlacesData = createSelector(projectState, (adminLayout) => {
	const { places } = adminLayout;
	const optionsPlaces = places.map(place => {
		return  {...place, 'label': place.nombre, 'value': place.nombre}
	})
	return optionsPlaces;
});



export const getPlatarforms = createSelector(projectState, (adminLayout) => {
	const { plataforms } = adminLayout;
	return plataforms;
});
