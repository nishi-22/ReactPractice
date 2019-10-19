//here we have created context in usercontext file 
//2) then we provided context value in app file (from where we want to pass value to componentF)
//3)then we consumed that value in componentF through UserConsumer

import React from 'react';
import {UserConsumer} from './userContext';

class ComponentF extends React.Component{
    render(){
        return(
            <UserConsumer>
                {
                    (username) => {
                        return <div> Hello {username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}
export default ComponentF;