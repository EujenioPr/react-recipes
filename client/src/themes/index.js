import React from 'react';

const ThemeContext = React.createContext();

export const light = {
    backgroundColor: '#fff',
    color: '#545454'
}

export const dark = {
    backgroundColor: '#333',
    color: '#fff',
    bgColorDarker: (bool) => {
        if(bool) {
            return { backgroundColor: '#545454' };
        } else {
            return;
        }
    }
}

export default ThemeContext;