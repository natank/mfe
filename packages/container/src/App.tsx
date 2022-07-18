import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
	productionPrefix: 'co',
})

export default () => {
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<div>
					<Header signedIn={9} onSignOut={() => { }} />
					<MarketingApp />
				</div>
			</StylesProvider>
		</BrowserRouter>
	);
};
