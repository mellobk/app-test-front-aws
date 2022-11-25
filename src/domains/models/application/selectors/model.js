import { createSelector } from '@reduxjs/toolkit';

export const modelState = (state) => state.model;

export const getSteps = createSelector(modelState, (model) => {
	const { stepModels } = model;
	return stepModels;
});


export const getCreationFormData = createSelector(modelState, (model) => {
	const { creationFormInformation } = model;
	return creationFormInformation;
});

export const errorCreateModel = createSelector(modelState, (model) => {
	const { creationError } = model;
	return creationError;
});

export const loadCreateModel = createSelector(modelState, (model) => {
	const { loadingCreateModel } = model;
	return loadingCreateModel;
});


