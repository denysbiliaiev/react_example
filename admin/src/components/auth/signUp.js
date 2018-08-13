import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import validator from 'email-validator'
import Button from '@material-ui/core/Button'
import ErrorField from '../common/error-field'

class SignUpForm extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <Field name="email" label="Email" component={ErrorField} />
          <Field
            name="password"
            label="Password"
            type="password"
            component={ErrorField}
          />
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </div>
    )
  }
}

const validate = ({ email, password }) => {
  const errors = {}

  if (!email) errors.email = 'email is a required field'
  if (email && !validator.validate(email)) errors.email = 'invalid email'

  if (!password) errors.password = 'password is a required field'
  if (password && password.length < 8) errors.password = 'to short'

  return errors
}

export default reduxForm({
  form: 'auth',
  validate
})(SignUpForm)
