import React from 'react'

const FunctionComp =(OriginalComponent,incrementNumber)=>{
    class NewComponent extends React.Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count:0,
             name:'vamsi'
          }
        }

        clickHandler2=()=>{
            this.setState((prevstate)=>{
                return {
                    count:prevstate.count+incrementNumber
                }
            })
        }
        render() {
            return ( <OriginalComponent name={this.state.name} count={this.state.count} clickHandler={this.clickHandler2}
                {...this.props} /> )
            }
          }
    
   return NewComponent
    
}



export default FunctionComp
