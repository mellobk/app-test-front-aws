import AdminLayout from '../../../shared/presentation/layouts/AdminLayout';
import Configuration from '../presentation/pages/Configuration';
import { PrivateRoute } from '../../../shared/presentation/redirect-route';
import { ConfigurationRoute } from './routes';

const configurationRouter = {
	layout: AdminLayout,
	router: [
		{
			path: ConfigurationRoute,
			page: Configuration,
			routeComponent: PrivateRoute,
			exact: true,
		},
	],
};

export default configurationRouter;
