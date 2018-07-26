import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirstPage from './FirstPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FirstPage />, document.getElementById('root'));
registerServiceWorker();
