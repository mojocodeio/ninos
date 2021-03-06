import React from 'react';
import logo from './logo.svg';
import './App.css';

import ABTest from './ABTest/ABTest';
import ABVariant from './ABVariant/ABVariant';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<ABTest name="COFFEE_BEER">
					<ABVariant isDefault={true} value="BEER">
						<p>
							Beer tastes fantastic in the evening
						</p>
					</ABVariant>
					<ABVariant value="COFFEE">
						<p>
							Coffee tastes really good in the morning
						</p>
					</ABVariant>
				</ABTest>
			</header>
		</div>
	);
}

export default App;
