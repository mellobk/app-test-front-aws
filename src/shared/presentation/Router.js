import React from 'react';
import { Switch } from 'react-router-dom';
import authRouter from '../../domains/authentication/infrastructure/router';
import configurationRouter from '../../domains/configuration/infrastructure/router';
import permissionsRouter from '../../domains/permissions/infrastructure/router';
import homeRouter from '../../domains/home/infrastructure/router';
import modelsRouter from '../../domains/models/infrastructure/router';

const Router = () => {
	const defaultLayout = ({ children }) => <>{children}</>;
	const routes = [authRouter, homeRouter, configurationRouter, permissionsRouter, modelsRouter];

	return (
		<Switch>
			{routes.map((route) => {
				return route?.router?.map(({ path, page: Component, routeComponent: Route, exact = true, layout, ...rest }) => (
					<Route
						key={path}
						exact={exact}
						path={path}
						component={Component}
						layout={layout || route.layout || defaultLayout}
						{...rest}
					/> // use same key to avoid recreate layout on every render
				));
			})}
		</Switch>
	);
};

export default Router;
