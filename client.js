'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Right from './components/right';

if (typeof window !== 'undefined') {
	window.onload = function() {
		ReactDOM.render(
			<Right />,
			document.getElementById('main')
		);
	};
}
