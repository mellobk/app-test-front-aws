import { createSelector } from '@reduxjs/toolkit';

export const homeState = (state) => state.home ;

export const getDashboardMenu = createSelector(homeState, (home) => {
	const { dashBoardMenu } = home;
	return dashBoardMenu;
});

export const getTasks= createSelector(homeState, (home) => {
	const { tasks } = home;
	return tasks;
});

export const getInventory= createSelector(homeState, (home) => {
	const { inventory } = home;
	return inventory;
});

export const getLoadingTasks= createSelector(homeState, (home) => {
	const { loadingTasks } = home;
	return loadingTasks ;
});


export const getLoadingCreateTasks= createSelector(homeState, (home) => {
	const { loadingcreateTask } = home;
	return loadingcreateTask ;
});

export const searchTask= createSelector(homeState, (home) => {
	const { reloadTask } = home;
	return reloadTask ;
});

export const modalCreateTaskValue= createSelector(homeState, (home) => {
	const { modalCreatetask } = home;
	return modalCreatetask ;
});
