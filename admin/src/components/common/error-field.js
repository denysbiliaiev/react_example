import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'

class ErrorField extends Component {
  static propTypes = {}

  render() {
    const {
      input,
      meta: { error, touched },
      ...rest
    } = this.props

    const isValueNotCorrect = touched && error
    const errorMessage = isValueNotCorrect && (
      <h3 style={{ color: 'red' }}>{error}</h3>
    )

    return (
      <div>
        <TextField error={isValueNotCorrect} {...input} {...rest} />
        <FormHelperText className="errorValidation">
          {errorMessage}
        </FormHelperText>
      </div>
    )
  }
}

export default ErrorField
