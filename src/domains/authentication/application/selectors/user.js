import { createSelector } from '@reduxjs/toolkit';

export const userState = (state) => state.user;

export const getCurrentUser = createSelector(userState, (user) => {
	const { currentUser } = user;
	return currentUser;
});

export const getColors= createSelector(userState, (user) => {
	const { currentColors } = user;
	return currentColors;
});

export const getPermissions= createSelector(userState, (user) => {
	const { permissions } = user;
	return permissions;
});

export const getTwoFactor= createSelector(userState, (user) => {
	const { twoFactor } = user;
	return twoFactor;
});


export const getOnlineUsers= createSelector(userState, (user) => {
	const { onlineUsers } = user;
	return onlineUsers;
});

export const getAuthLoading= createSelector(userState, (user) => {
	const { loading } = user;
	return loading;
});


export const getAuthVerifyLoading= createSelector(userState, (user) => {
	const { loadingVerify } = user;
	return loadingVerify;
});




export const getSocketConnection= createSelector(userState, (user) => {
	const { socket } = user;
	return socket;
});


export const getMenu= createSelector(userState, (user) => {
	const { menu } = user;
	return menu;
});

export const colorsApp= createSelector(userState, (user) => {
	const { currentColors } = user;
	let colors = {}
	currentColors &&(

		colors= {
			primaryColor:currentColors[0]?.color_hexa_decimal,
			secundaryColor:currentColors[1]?.color_hexa_decimal,
			enfasisColor:currentColors[2]?.color_hexa_decimal,
			textMenuColor:currentColors[3]?.color_hexa_decimal,
		
		
		  }
	)

	return colors;
});



export const selectCurrentUserName = createSelector(userState, (user) => {
	const { currentUser } = user;
	const name = currentUser?.name || currentUser?.first_name || currentUser?.user_detail?.name || '';
	return name.split(' ')[0];
});
