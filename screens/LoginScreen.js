import React from "react";
import { Button, View, StyleSheet, Text, TextInput} from "react-native";
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import {loginUser} from "../redux/actions"

import {login} from '../api'

class LoginScreen extends React.Component {
  static propTypes = {
    err: PropTypes.string,
    token: PropTypes.string,
    loginUser: PropTypes.func,
  }
  state = {
    username: "",
    password: "",
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) this.props.naviagtion.navigate("Main")
  }

  handleUsernameUpdate = username => {
    this.setState({username})
  }
  handlePasswordUpdate = (password) => {
    this.setState({password})
  }
  _login = async () => {
    this.props.loginUser(this.state.username, this.state.password)
  }
  loginLazy = () => {
    this.props.navigation.navigate("Main")
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{this.props.err}</Text>
        <TextInput style={styles.input}
        placeholder="username"
        value={this.state.username}
        onChangeText={this.handleUsernameUpdate}
        autoCapitalize="none"
         />
        <TextInput style={styles.input}
        placeholder="password"
        value={this.state.password}
        onChangeText={this.handlePasswordUpdate}
        secureTextEntry
        />

        <Button title="Press to Log In" onPress={this.loginLazy} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  errorText: {
    textAlign: "center",
    color: "red",
  },
  input: {
    borderColor: 'green',
    borderWidth: 1,
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  }
});

const mapStateToProps = state => ({
  err: state.user.loginErr,
  token: state.user.token,
})
export default connect(mapStateToProps, {loginUser})(LoginScreen)