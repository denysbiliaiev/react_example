import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Persons from './persons'
import Events from './events'

class AdminPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Route path="/admin/people" component={Persons} />
        <Route path="/admin/events" component={Events} />
      </div>
    )
  }
}

export default AdminPage
