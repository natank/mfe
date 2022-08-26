import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import Header from './components/Header';
import Progress from './components/Progress'

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
	productionPrefix: 'co',
})

const history = createBrowserHistory();

export default () => {
	const [isSignedIn, setIsSignedIn] = useState(false)

	useEffect(() => {
		if (isSignedIn) {
			history.push('/dashboard');
		}
	}, [isSignedIn])
	return (
		<Router>
			<StylesProvider generateClassName={generateClassName}>
				<div>
					<Header {...{ isSignedIn }} onSignOut={() => { setIsSignedIn(false) }} />
					<Suspense fallback={<Progress />}>
						<Routes>
							<Route path="/auth" element={<AuthLazy onSignIn={() => setIsSignedIn(true)} />} />
							<Route path="/dashboard" element = {!isSignedIn && <Navigate to='/' />}>
								<Route index element={<DashboardLazy />} />
							</Route>
							<Route path="/*" element={<MarketingLazy />} />
						</Routes>
					</Suspense>
				</div>
			</StylesProvider>
		</Router>
	);
};
