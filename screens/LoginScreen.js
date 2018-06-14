import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class LoginScreen extends React.Component {
  state = {
    username: "",
    password: "",
  }

  handleUsernameUpdate(username) {
    this.setState({ username })
  }
  handlePasswordUpdate(password) {
    this.setState({ password })
  }
  _login = () => {
    this.props.navigation.navigate("Main");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You are currently logged out.</Text>
        <TextInput placeholder="username" value={this.state.username} onChangeText={this.handleUsernameUpdate} />
        <TextInput placeholder="password" value={this.state.password} onChangeText={this.handlePasswordUpdate} />

        <Button title="Press to Log In" onPress={this._login} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  text: {
    textAlign: "center"
  }
});
