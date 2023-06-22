// eventhandler with class component


import React, { Component } from 'react';

class Eventhandlerc extends Component {

    Eventhandler1(){
        console.log("clicked button class component")
    }

    render() {
        return (
            <div>
                <button onClick={this.Eventhandler1}> click me</button>
            </div>
            
        );
    }
}

export default Eventhandlerc;