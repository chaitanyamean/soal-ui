import React from 'react';

import {isAuth} from '../../helpers/auth';
import Cards from '../../components/cards/cards';

const Dashboard = ({history}) => {
    return(
        <React.Fragment>
            <Cards />
            
        </React.Fragment>
    )
}


export default Dashboard;