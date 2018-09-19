import React from 'react';
import { StyleSheet, Button,  View, Text } from 'react-native'
import { TextField } from 'react-native-text-field'
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      isCompleted: false,
    }
  }
  submit = () => {
    this.setState({ isLoading: true })
    setTimeout(
    () => {
      this.setState({ isLoading: false, isCompleted: true })
    },
    500)
  }
  render() {
    if (this.state.isCompleted) {
      return (<View accessiblityLabel='completed screen'>
        <Text>Application Submitted!</Text>
      </View>)
    }
    return (
      <View style={styles.container}>
        <TextField accessiblityLabel='first name input' accessible={true} label='First Name' />
        <TextField accessiblityLabel='last name input' accessible={true} label='Last Name' />
        <TextField accessiblityLabel='email input' accessible={true} label='Email' />
        <TextField label='Phone Number' />
        <Button
          accessibilityLabel='submit button'
          accessible={true}
          onPress={this.submit}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
