import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getPlaces, getPlataforms} from '../../infrastructure/api';

export const initialState = {
	navBarLogo: null,
	alertData: { text: '', type: '', icon: '', dismissTime: 0 },
	places:[],
	plataforms:[],
	
};

export const configGetAllPlaces = createAsyncThunk(
	'config/configGetAllPlaces',
	async (_, { rejectWithValue }) => {
		try {
		    const response = await getPlaces();
	    	return response;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const configGetAllPlataforms = createAsyncThunk(
	'config/configGetAllPlataforms',
	async (_, { rejectWithValue }) => {
		try {
		    const response = await getPlataforms();
	    	return response;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

const AdminLayout = createSlice({
	name: 'adminLayout',
	initialState,
	reducers: {
		setNavBarLogo: (state, action) => {
			state.navBarLogo = action.payload;
		},
		setAlertData: (state, action) => {
			state.alertData = action.payload;
		},
	},
	extraReducers: {
		[configGetAllPlaces.pending]: (state) => {
			state.loading = true;

		},
		[configGetAllPlaces.rejected]: (state, { payload }) => {
			state.loading = false;
		
		},
		[configGetAllPlaces.fulfilled]: (state, { payload }) => {
			state.places = payload.data;	
		}, 
		[configGetAllPlataforms.pending]: (state) => {
			state.loading = true;

		},
		[configGetAllPlataforms.rejected]: (state, { payload }) => {
			state.loading = false;
		
		},
		[configGetAllPlataforms.fulfilled]: (state, { payload }) => {
			state.plataforms = payload.data;	
		},
	
	},
});

export const { setNavBarLogo, setAlertData } = AdminLayout.actions;

export default AdminLayout.reducer;
