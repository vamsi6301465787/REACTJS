// state with class component(state,setState) about function how to use 5 or 10 calling

import React, { Component } from 'react';

class Scclass3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         count1:0
      }
    }
    
    incrementfunction(){
        this.setState({
            count: this.state.count+1
        })
    }

    incrementfive(){
        this.setState((prevState)=>(
            {
               count1: prevState.count1+1
            }
        ))
    }

    increments(){
        this.incrementfive();
        this.incrementfive();
        this.incrementfive();
        this.incrementfive();
        this.incrementfive();
    }

    // increments five times not possaible (because multiple setSet states are treated as single stata)

   
    render() {
        return (
            <div>
                <h1>
                    count-{this.state.count}
                     <br></br><button onClick={()=>this.incrementfunction()}>
                        increment
                    </button>
                    <br></br>
                    <hr></hr>
                    count1-{this.state.count1}
                    <br></br><button onClick={()=>this.increments()}>increment1</button>
                   
               </h1>
            </div>
            
        );
    }
}

export default Scclass3;