import AdminLayout from '../../../shared/presentation/layouts/AdminLayout';
import Permissions from '../presentation/pages/Permissions';
import { PrivateRoute } from '../../../shared/presentation/redirect-route';
import { permissionsRoute } from './routes';

const permissionsRouter = {
	layout: AdminLayout,
	router: [
		{
			path: permissionsRoute,
			page: Permissions,
			routeComponent: PrivateRoute,
			exact: true,
		},
	],
};

export default permissionsRouter;
