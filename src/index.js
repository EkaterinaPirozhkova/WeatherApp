import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import styled, {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border - box;
}`
//ReactDOM.render(<App/>, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);