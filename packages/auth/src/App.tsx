import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { History } from 'history';
import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
	productionPrefix: 'au'
})

export default ({ history, onSignIn }: { history: History, onSignIn: () => void }) => {
	console.log(`Auth redndering app`)
	return (
		<div>
			<StylesProvider generateClassName={generateClassName}>
				<Router history={history}>
					<Switch>
						<Route path="/auth/signin">
							<Signin onSignIn={onSignIn} />
						</Route>
						<Route path="/auth/signup">
							<Signup onSignIn={onSignIn} />
						</Route>
					</Switch>
				</Router>
			</StylesProvider>
		</div>
	);
};
