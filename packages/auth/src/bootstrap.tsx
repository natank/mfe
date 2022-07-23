import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, Location, createBrowserHistory, History } from 'history';
// Mount function to start up the app
console.log("in bootstrap")
const mount = (el: Element, { onSignIn, onNavigate, defaultHistory, initialPath }:
	{ onSignIn?: () => void, onNavigate?: () => void, defaultHistory?: History<unknown>, initialPath?: string }) => {
	const history = defaultHistory || createMemoryHistory({
		initialEntries: [initialPath]
	});
	onNavigate &&
		(
			history.listen(onNavigate)
		);
	ReactDOM.render(<App {...{ history, onSignIn }} />, el);
	return {
		onParentNavigate: (location: Location) => {
			const { pathname: nextPathName } = location;
			console.log(`nextPathName: ${nextPathName} el: ${(el)}`)
			const { pathname } = history.location;
			pathname !== nextPathName
				&& (
					history.push(nextPathName)
				);

		}
	}
};
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#_auth-dev-root');

	if (devRoot) {
		mount(devRoot, {
			defaultHistory: createBrowserHistory()
		});
	}
}

export default mount;
