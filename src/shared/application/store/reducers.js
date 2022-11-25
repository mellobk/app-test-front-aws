import { combineReducers } from 'redux';
import user, { initialState as userInitial } from '../../../domains/authentication/application/slices/user';
import home, { initialState as homeInitial } from '../../../domains/home/application/slices/home';
import configuration, { initialState as configurationInitial } from '../../../domains/configuration/application/slices/configuration';
import adminLayout, { initialState as adminLayoutInitial } from '../slices/adminLayout';
import permissions, { initialState as permissionInitial } from  '../../../domains/permissions/application/slices/permissions';
import model, { initialState as modelInitial } from  '../../../domains/models/application/slices/model';

export const initialStates = {
	user: userInitial,
	home: homeInitial,
	adminLayout: adminLayoutInitial,
	configuration: configurationInitial,
	permissions: permissionInitial,
	model: modelInitial

};

export default combineReducers({
	user,
	home,
	adminLayout,
	configuration,
	permissions,
	model
});
