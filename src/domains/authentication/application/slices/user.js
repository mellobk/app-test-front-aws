import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {login, verify, getAllPermissions} from '../../infrastructure/api';
import { history } from '../../../../shared/application/helpers/history';
import { toastApp } from '../../../../shared/application/helpers/common-functions';

const userData = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user'));
const colors = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('colors'));
// const socket = io.connect("http://localhost:3002");
const socket = []

export const initialState = {
	permissions:[],
	currentUser: userData,
	loading: false,
	loadingVerify: false,
	userError: '',
	dataTwoFactor:{},
	twoFactor:false,
	twoFactorUsername:'',
	currentColors:colors,
	menu:[],
	socket,
	onlineUsers:[],
	myNewConversation:[]
};

export const updateUser = createAsyncThunk('user/updateUser', async (userToUpdate, { rejectWithValue }) => {
	try {
		typeof window !== 'undefined' && localStorage.setItem('user', JSON.stringify(userToUpdate));
		return userToUpdate;
	} catch (error) {
		return rejectWithValue(error);
	}
});

export const userLogin = createAsyncThunk(
	'user/userLogin',
	async (data, { rejectWithValue }) => {
		try {
			const response = await login(data);
			typeof window !== 'undefined' && localStorage.setItem('user', JSON.stringify(response.data));
			history.push('/')		 
			return {response};
		} catch (error) {
			toastApp('error',error)
			return rejectWithValue(error);
		}
	},
);


export const userPermissions = createAsyncThunk(
	'user/userPermissions',
	async (_, { rejectWithValue }) => {
		try {
			const response = await getAllPermissions(); 
			return {response};
		} catch (error) {
			toastApp('error',error)
			return rejectWithValue(error);
		}
	},
);



export const userVerify = createAsyncThunk(
	'user/userVerify',
	async (data, { getState, rejectWithValue }) => {
		const state = getState(); 
		try {
			 const sendData = {userName:state.user.twoFactorUsername , token:data}
		    const response = await verify(sendData);
	    	typeof window !== 'undefined' && localStorage.setItem('user', JSON.stringify(response.data));
			// typeof window !== 'undefined' && localStorage.setItem('colors', JSON.stringify(response.data.colors));
			history.push('/')		 
			return response;
		} catch (error) {
			toastApp('error',error)
			return rejectWithValue(error);
		}
	},
);



const User = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCurrentUser(state, { payload }) {
			state.user = payload;
		},
		setColors(state, { payload }) {
			state.currentColors = payload;
		},
		setMenu(state, { payload }) {
			state.menu = payload;
		},
		setOnlineUsers(state, { payload }) {
			state.onlineUsers = payload;
		},
	},

	extraReducers: {
		[userLogin.pending]: (state) => {
			state.loading = true;
			state.userError = null;
		},
		[userLogin.rejected]: (state, { payload }) => {
			state.loading = false;
			state.userError = payload;
		},
		[userLogin.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.twoFactor = payload.data;
			state.twoFactorUsername = payload.username;
	
		},
		
		[userVerify.pending]: (state) => {
			state.loadingVerify = true;
			state.userError = null;
		},
		[userVerify.rejected]: (state, { payload }) => {
			state.loadingVerify = false;
		},
		[userVerify.fulfilled]: (state, { payload }) => {
			state.loadingVerify = false;
	
		},
		[userPermissions.pending]: (state) => {
			state.loadingVerify = true;
			state.userError = null;
		},
		[userPermissions.rejected]: (state, { payload }) => {
			state.loadingVerify = false;
		},
		[userPermissions.fulfilled]: (state, { payload }) => {
			state.permissions = payload.response.data;
	
		},
	},
});





export const { setCurrentUser, setColors, setMenu, setOnlineUsers } = User.actions;

export default User.reducer;
