import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createMemoryHistory, Location, createBrowserHistory, History } from 'history';
// Mount function to start up the app
const mount = (el: Element, { onSignIn, onNavigate, initialPath='/' }:
	{ onSignIn?: () => void, onNavigate?: ({pathname}:{pathname: string}) => void, initialPath?: string }) => {
	const root = ReactDOM.createRoot(el);
	root.render(<App onNavigate={onNavigate} initialEntries={[initialPath]} onSignIn={onSignIn}/>);
	return {
		onParentNavigate: (location: Location) => {
			const { pathname: nextPathName } = location;
		}
	}
};
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#_auth-dev-root');

	if (devRoot) {
		mount(devRoot, {});
	}
}

export default mount;
