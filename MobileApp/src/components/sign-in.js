import React, { Component } from 'react'
import {View, Text, TextInput, Platform} from 'react-native'

class SignIn extends Component {
    static propTypes = {

    };

    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <View>
                <Text>Please sign in</Text>
                <TextInput
                    value = {this.state.email}
                    style = {styles.input}
                    onChangeText = {this.handleEmailChange}
                    keyboardType = "email-address"
                />
                <TextInput
                    value = {this.state.password}
                    style = {styles.input}
                    onChangeText = {this.handlePasswordChange}
                    secureTextEntry
                />
            </View>
        )
    }

    handleEmailChange = email => this.setState({ email })
    handlePasswordChange = password => this.setState({ password })
}

const styles = {
    input: {
        ...Platform.select({
            ios: {
                borderBottomWidth: 1,
                borderBottomColor: '#000'
            },
            android: {
                
            }
        })
    }
}

export default SignIn