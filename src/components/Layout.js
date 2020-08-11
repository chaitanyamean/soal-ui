import React, {useState} from 'react';
import {Redirect} from 'react-router';

const Layout = () => {

    const [isLogged, setLogged] = useState(true)

    const nav = () => (
        <ul className="nav nav-tabs bg-warning">
        {isLogged ? 
            <React.Fragment>
                <Redirect push to="/user/dashboard" />
            </React.Fragment> :      
            <React.Fragment>
                <div>This is not logged</div>
            </React.Fragment>
        }
        </ul>
    )

    return(
        <React.Fragment>
         {nav()} <div className="container pt-5 pb-5">This is layout</div>
        </React.Fragment>
    )
}


export default Layout;