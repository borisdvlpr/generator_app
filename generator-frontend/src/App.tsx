import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Generator from './pages/Generator/Generator';
import Payments from './pages/Payments/Payments';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Generator />} />
					<Route path="/payments" element={<Payments />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
