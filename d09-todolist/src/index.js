import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Todo} from './context';

ReactDOM.render( <
    React.StrictMode >
    <Todo.Provider value={{}}>
        <App / >
    </Todo.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);