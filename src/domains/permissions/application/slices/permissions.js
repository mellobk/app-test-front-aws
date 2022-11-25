import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	defaultPermissions: [],
};

const Permissions = createSlice({
	name: 'permissions',
	initialState,
	reducers: {},
});

export default Permissions.reducer;
