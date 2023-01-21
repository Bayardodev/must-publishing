import React, { Component } from 'react'

import Container from './Container'
import Header from './Header'

export default class Layouts extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container/>
        
      </div>
    )
  }
}
