import AdminLayout from '../../../shared/presentation/layouts/AdminLayout';
import Home from '../presentation/pages/Home/Home';
import { PrivateRoute } from '../../../shared/presentation/redirect-route';
import { homeRoute, inventoryRoute } from './routes';
import Invetory from '../presentation/pages/Invetory/Invetory';

const homeRouter = {
	layout: AdminLayout,
	router: [
		{   
			path: homeRoute,
			page: Home,
			routeComponent: PrivateRoute,
			exact: true,
		},
		{   
			path: inventoryRoute(),
			page: Invetory,
			routeComponent: PrivateRoute,
			exact: true,
		},
	],
};

export default homeRouter;
