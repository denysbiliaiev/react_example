import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import history from '../../history'

class AuthMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }
  }

  routes = ['/auth/signIn', '/auth/signUp']

  handleChange = (event, value) => {
    this.setState({ value })
    history.push(this.routes[value])
  }

  render() {
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          centered
        >
          <Tab label="Sign In" />
          <Tab label="Sign Up" />
        </Tabs>
      </Paper>
    )
  }
}

export default AuthMenu
