
import { UnauthenticatedRoute } from '../../../shared/presentation/redirect-route';
import LoginPage from '../presentation/pages/Login';
import  {loginRoute} from './routes';

const authRouter = {

	router: [
		{
			path: loginRoute,
			page: LoginPage,
			routeComponent: UnauthenticatedRoute,
			
		}
	],
};

export default authRouter;
