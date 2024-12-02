import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Импортируем глобальные стили
import App from './App';
import { Provider } from 'react-redux';
import store from './slice/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);