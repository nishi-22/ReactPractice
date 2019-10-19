// Higher Order Component  
//HoverCOunter.js and ClickCOunter.js implements same functionality count and incrementCOunt. 
//so passing those two components as a parameter and return updated one using HOC to both components. 
//SO that we don't have the redundant code.s

import React from 'react';

const withCounter = WrappedComponent => {

    class WithCounter extends React.Component{
        constructor(props){
            super(props);
            this.state={
                count: 0
            }
        }
        incrementCount=()=>{
            this.setState({
                count: this.state.count+ 1
            })
        }
        render(){
            return   <WrappedComponent 
            count={this.state.count}
            incrementCount={this.incrementCount}   />
            
        }
    }
    return WithCounter;
    

}
export default withCounter;

