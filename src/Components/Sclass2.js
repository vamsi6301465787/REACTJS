// state with class component(state,setState)

import React, { Component } from 'react';

class Sclass2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         meassage:'welcome visitor'
      }
    }
    
    meassagefunction()
    {
        this.setState({
            meassage:'thankyou for login'
    })
            
    }

    render() {
        return (
            <div>
                <h1>{this.state.meassage}</h1>
                <button onClick={()=>this.meassagefunction()}>login</button>
            </div>
            
            
        );
    }
}

export default Sclass2;