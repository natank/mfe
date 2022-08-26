import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
	productionPrefix: 'ma'
})

export default ({ onNavigate , initialPath}: { initialPath: string, onNavigate?: ({ pathname }: { pathname: string })=> void }) => {
	const location = useLocation()
	const {pathname} = location;
	const navigate = useNavigate();
	useEffect(()=>{
		onNavigate && onNavigate({pathname: location.pathname}) 
	},[pathname])
	useEffect(() => {
		navigate(initialPath)
	}, [initialPath])
	return (
		<div>
			<StylesProvider generateClassName={generateClassName}>
				<Routes>
					<Route path='/pricing' element={<Pricing />} />
					<Route path='/' element={<Landing />} />
				</Routes>
			</StylesProvider>
		</div>
	);
};
