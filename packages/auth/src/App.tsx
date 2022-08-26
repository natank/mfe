import React from 'react';
import { Routes, Route, MemoryRouter as Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { History } from 'history';
import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
	productionPrefix: 'au'
})

export default ({ onNavigate, initialEntries, index, onSignIn }: { onNavigate?: ({ pathname }: { pathname: string })=> void, initialEntries: string[], index?:number, onSignIn?: () => void }) => {
	return (
		<div>
			<StylesProvider generateClassName={generateClassName}>
				<Router initialEntries={initialEntries}>
					<Routes>
						<Route path="/auth/signin">
							<Signin onSignIn={onSignIn} />
						</Route>
						<Route path="/auth/signup">
							<Signup onSignIn={onSignIn} />
						</Route>
					</Routes>
				</Router>
			</StylesProvider>
		</div>
	);
};
