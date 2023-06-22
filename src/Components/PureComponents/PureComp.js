import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {

  render() {
    console.log('Pure Component')
    return (
      <div>
        <h1>Pure Component {this.props.name}</h1>
      </div>
    )
  }
}

export default PureComp
