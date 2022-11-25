
import AdminLayout from '../../../shared/presentation/layouts/AdminLayout';
import { PrivateRoute } from '../../../shared/presentation/redirect-route';
import BankAccountInformation from '../presentation/pages/BankAccountInformation/BankAccountInformation';
import EmailInformation from '../presentation/pages/EmailInformation/EmailInformation';
import PersonalInformation from '../presentation/pages/PersonalInformation/PersonalInformation';
import CreationModelThankYouPage from '../presentation/pages/CreationModelThankYouPage/CreationModelThankYouPage';
import  {bankInformationRoute, emailInformationRoute, personalInformationRoute, thankYouPageInformationRoute} from './routes';

const modelsRouter = {
	layout: AdminLayout,

	router: [
		{
			title: 'Creación Modelo',
			path: personalInformationRoute,
			page: PersonalInformation,
			routeComponent: PrivateRoute,
			
		},
		{
			title: 'Creación Modelo',
			path: emailInformationRoute,
			page: EmailInformation,
			routeComponent: PrivateRoute,
			
		},
		{
			title: 'Creación Modelo',
			path: bankInformationRoute,
			page: BankAccountInformation,
			routeComponent: PrivateRoute,
			
		},
		{
			title: 'Creación Modelo',
			path: thankYouPageInformationRoute,
			page: CreationModelThankYouPage,
			routeComponent: PrivateRoute,
			
		}
	],
};

export default modelsRouter;
