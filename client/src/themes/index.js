import React from 'react';

const ThemeContext = React.createContext();

export const light = {
    backgroundColor: '#fff',
    color: '#545454'
}

export const dark = {
    backgroundColor: '#333',
    color: '#fff'
}

export default ThemeContext;