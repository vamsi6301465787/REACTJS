// eventhandler with class component (binding this keyword 4 approaches)

import React, { Component } from 'react';

class BindingEvents extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         message: "Welcome to event binding"
      }

    //   this.clickHandler=this.clickHandler.bind(this)          // 3
    }


    // clickHandler()
    // {
    //     this.setState({
    //         message:"Thanking you for login"
    //     })
    // }
    
    clickHandler=()=>{
        this.setState({
            message: "Thanking you for  login"
        })
    }


    render() {
        return (
            <div>
                {/* 1 */}

                        {/* <h1> {this.state.message} </h1>
                        <button onClick={this.clickHandler.bind(this)}>
                            login
                        </button> */}

              {/* 2 */}

                    {/* <h1> {this.state.message} </h1>
                    <button onClick={()=>{this.clickHandler()}}>
                        login
                    </button> */}

              {/* 3 */}
                
                    {/* <h1> {this.state.message} </h1>
                    <button onClick={this.clickHandler}>
                        login
                    </button> */}
              
              {/* 4 */}
                 
                   <h1> {this.state.message} </h1>
                        <button onClick={this.clickHandler}>
                            login
                        </button> 
                  

            </div>
            
        );
    }
}

export default BindingEvents;