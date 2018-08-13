import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import Button from '@material-ui/core/Button'
import ErrorField from '../common/error-field'

class SignInForm extends Component {
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
            Sign In
          </Button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'auth'
})(SignInForm)
