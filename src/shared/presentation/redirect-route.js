import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';
import { loginRoute } from '../../domains/authentication/infrastructure/routes';
import {homeRoute} from '../../domains/home/infrastructure/routes';


export const PrivateRoute = ({ component: Component, layout: Layout, title='', ...rest }) => {
	return (
		
		<Route
			{...rest}
			render={(props) =>
				localStorage.getItem('user') ? (
					<Layout path={rest.path} title={title}>
						<Component {...props}/>
					</Layout>
				) : (
					<Redirect to={{ pathname: loginRoute, state: { from: props.location } }} />
				)
			}
		/>
	);
};

PrivateRoute.propTypes = {
	component: Proptypes.elementType.isRequired,
	location: Proptypes.object,
	layout: Proptypes.elementType.isRequired,
};

export const UnauthenticatedRoute = ({ component: C, layout: Layout, ...rest }) => {
	const prevPath = typeof window !== 'undefined' && localStorage.getItem('prevPath');
	return (
		<Route
			{...rest}
			render={(props) =>
				// TODO - reverse temporal changes to ==> typeof window !== 'undefined' && !localStorage.getItem('user')
				typeof window !== 'undefined' ? (
					<Layout path={rest.path}>
						<C {...props} />
					</Layout>
				) : (
					<Redirect to={prevPath || homeRoute} />
				)
			}
		/>
	);
};

UnauthenticatedRoute.propTypes = {
	component: Proptypes.elementType.isRequired,
	layout: Proptypes.elementType.isRequired,
};

PrivateRoute.propTypes = {
	title: Proptypes.string,
};

