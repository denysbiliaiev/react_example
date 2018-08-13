import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { authorizedSelector } from '../../ducks/auth'

class ProtectedRoute extends Component {
  static propTypes = {}

  render() {
    const { component, ...rest } = this.props
    return <Route {...rest} render={this.getComponent} />
  }

  getComponent = ({ match }) => {
    return this.props.authorized ? (
      <this.props.component match={match} />
    ) : (
      <div>
        <NavLink to="/auth/signIn" activeStyle={{ color: 'red' }}>
          Please signIn
        </NavLink>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    authorized: authorizedSelector(state)
  }),
  null,
  null,
  { pure: false }
)(ProtectedRoute)
