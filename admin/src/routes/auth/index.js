import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import styles from './auth.module.scss'
import { signUp, signIn } from '../../ducks/auth'
import { AuthMenu, SignInForm, SignUpForm } from '../../components/auth'

class AuthPage extends Component {
  render() {
    return (
      <div className={styles.auth}>
        <AuthMenu />
        <Route
          path="/auth/signIn"
          render={() => <SignInForm onSubmit={this.signIn} />}
        />
        <Route
          path="/auth/signUp"
          render={() => <SignUpForm onSubmit={this.signUp} />}
        />
      </div>
    )
  }

  signUp = ({ email, password }) => this.props.signUp(email, password)
  signIn = ({ email, password }) => this.props.signIn(email, password)
}

export default connect(null, { signUp, signIn })(AuthPage)
