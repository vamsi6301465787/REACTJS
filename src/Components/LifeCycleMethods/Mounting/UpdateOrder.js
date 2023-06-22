import { Component } from 'react'

export class UpdateOrder extends Component {
    constructor(props){
        super(props)
           this.state={
             message: 'Mounting'

        }
        console.log('Mounting Constructor')
        this.handlerChange=this.handlerChange.bind(this)
    }

    static getDerivedStateFromProps(props,state){
        console.log('Mounting getDerviedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('Mounting ComponentDidMount')
    }

    shouldComponentUpdate(){
        console.log('Update shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('Update getSnapShotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevprops,prevstate,snapshot){
        console.log('Update componentDidUpdate')
    }
    
    handlerChange(){
        this.setState({
            message: 'Update'
        })
    }


    render() {
        console.log('Mounting Render')
        return(
            <div>
              <div>LifeCycle Methods</div>
              <button onClick={this.handlerChange}>Change State</button>  
           </div>
        )
    }

}


export default UpdateOrder
