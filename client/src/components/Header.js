import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import ThemeContext from '../themes';


export default () => {
    return(
        <ThemeContext.Consumer>
            {(context) => (
                <React.Fragment>
                    <div style={context.theme} className='ui very padded container segment'>
                        <Link style={context.theme} className='ui left floated header header-title' to='/'>CookBook</Link>
                        <button className="ui secondary button right floated icon header-changetheme" onClick={context.toggleTheme}>
                            <i className="icon tint"></i>
                        </button>
                    </div>
                </React.Fragment>
            )}
        </ThemeContext.Consumer>
    )
}