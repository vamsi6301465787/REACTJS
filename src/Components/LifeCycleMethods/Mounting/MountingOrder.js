import { Component } from 'react'

class MountingOrder extends Component {
    constructor(props){
        super(props)
           this.state={
             message: 'vamsi'

        }
        console.log('Mounting Constructor')
    }

    static getDerivedStateFromProps(){
        console.log('Mounting getDerviedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('Mounting ComponentDidMount')
    }

    render() {
        return(
           console.log('Mounting Render')
        )
    }

}

export default MountingOrder