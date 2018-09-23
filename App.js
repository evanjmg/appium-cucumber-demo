import React from 'react';
import { StyleSheet, Button,  View, Text, ActivityIndicator } from 'react-native'
import { TextField } from 'react-native-material-textfield'
const NUMBER_OF_REQUIRED_FIELDS = 3
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      isCompleted: false,
      form: {},
    }
  }
  submit = () => {
    if (this.isDisabled) return
    this.setState({ isLoading: true })
    setTimeout(
    () => {
      this.setState({ isLoading: false, isCompleted: true })
    },
    2000)
  }
  updateField(field) {
    return (value) => this.setState({ form: { ...this.state.form, [field]: value }})
  }
  get isDisabled() {
    const keys = Object.keys(this.state.form)
    if (keys.length !== NUMBER_OF_REQUIRED_FIELDS) return true
    return !!keys.find(key => !this.state.form[key])
  }
  get thankYou() {
    return `Thank you, ${this.state.form.firstName} ${this.state.form.lastName}`
  }
  reset = () => this.setState({ isCompleted: false, form: {} })
  render() {
    if (this.state.isLoading) {
      return (<View style={styles.centerScreen}>
        <ActivityIndicator size='large' />
      </View>)
    }
    if (this.state.isCompleted) {
      return (<View
        accessible={true}
        style={styles.centerScreen}
        accessibilityLabel='completed screen'>
        <Text accessibilityLabel='application submitted title' accessible={true} style={styles.text}>Application Submitted!</Text>
        <Text
          accessible={true}
          accessibilityLabel='thank you message'
          style={[styles.text]}>{this.thankYou}</Text>
        <View style={styles.backButton}>
          <Button title='Go Back' onPress={this.reset}/>
        </View>
      </View>)
    }
    return (
      <View style={styles.container}>
        <TextField
          onChangeText={this.updateField('firstName')}
          accessibilityLabel='first name input'
          accessible={true}
          autoCorrect={false}
          lineWidth={1}
          style={styles.input}
          value={this.state.form.firstName}
          label='First Name' />
        <TextField
          onChangeText={this.updateField('lastName')}
          accessibilityLabel='last name input'
          accessible={true}
          lineWidth={1}
          autoCorrect={false}
          value={this.state.form.lastName}
          label='Last Name' />
        <TextField
          onChangeText={this.updateField('email')}
          accessibilityLabel='email input'
          accessible={true}
          lineWidth={1}
          autoCorrect={false}
          value={this.state.form.email}
          containerStyle={styles.emailInput}
          label='Email' />
        <Button
          accessibilityLabel='submit button'
          accessible={true}
          onSubmitEditing={this.submit}
          disabled={this.isDisabled}
          title='Submit'
          onPress={this.submit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  emailInput: {
    marginBottom: 40,
  },
  backButton: {
    marginTop: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },

  centerScreen: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
