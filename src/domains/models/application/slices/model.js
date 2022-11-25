import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { modelStep } from '../../../../shared/application/constants/form';
import { toastApp } from '../../../../shared/application/helpers/common-functions';
import {createModel} from '../../infrastructure/api';

// const socket = io.connect("http://localhost:3002");



export const initialState = {
	loading: false,
	stepModels:modelStep,
	creationFormInformation:{
		campus: '',
		modelpassword: '',
		nick: '',
		phone: '',
		lastname: '',
		name: '',
		identity: '',
		picture: '',
		email: '',
		emailpassword: '',
		identitybank: '',
		bankname: '',
		lastnamebank: '',
		adressBank: '',
		turns:'',
		rent:'',
		bank:'',
		bankaccount:''
		
	},
	creationError:false,
	loadingCreateModel:false
};


export const userCreatemModel = createAsyncThunk(
	'user/userCreatemModel',
	async (data, { rejectWithValue }) => {
		try {
		    const response = await createModel(data);
	    	return response;
		} catch (error) {
			toastApp('error',error)
			return rejectWithValue(error);
		}
	},
);




const Model = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setStepCreateModels(state, { payload }) {
			state.stepModels = payload;
		},
		setCreateModelsFrom(state, { payload }) {
			const formData = JSON.parse(
				JSON.stringify(state.creationFormInformation)
			  );

			state.creationFormInformation = {...formData, ...payload};
		},

	},

	extraReducers: {
		[userCreatemModel.pending]: (state) => {
			state.loadingCreateModel = true;
			state.creationError = null;
		},
		[userCreatemModel.rejected]: (state, { payload }) => {
			state.loadingCreateModel = false;
			state.creationError = payload;
		},
		[userCreatemModel.fulfilled]: (state, { payload }) => {
			state.loadingCreateModel = false;
			state.creationError = false;
	
		},

	},
});


export const { setStepCreateModels, setCreateModelsFrom } = Model.actions;

export default Model.reducer;
