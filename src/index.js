import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'PT Sans', sans-serif;
}

body {
    background: #F4F5F9;
}
`

const theme = {
    colors: {
        main: '#42567A',
        blue: '#3877EE',
        red: '#EF5DA8'
    },
    media: {
        tablet: '(max-width: 768px)',
        mobile: '(max-width: 500px)'
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <Global />
        <App />
    </ThemeProvider>
);

