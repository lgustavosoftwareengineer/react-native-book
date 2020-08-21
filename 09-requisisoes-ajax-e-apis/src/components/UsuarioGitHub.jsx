import React from 'react';
import { Button, Text, View, TextInput, StyleSheet, Image } from 'react-native';

class UsuarioGitHub extends React.Component {
  // Defining the states
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      user: 'tonicprism',
    };
    this.fetchData = this.fetchData.bind(this);
  }

  // Fetch data from github public api
  fetchData() {
    fetch(`https://api.github.com/users/${this.state.user}`)
      .then((response) => response.json())
      .then((json) => this.setState({ data: json }))
      .catch((err) => this.setState({ data: { err } }));
  }

  // Life cycles
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.data}>
          <Image style={styles.tinyLogo} source={{ uri: `${this.state.data.avatar_url}` }} />
          <View style={styles.dataCentered}>
            <Text>
              <Text style={styles.title}>Username: </Text> {this.state.data.login}
            </Text>
            <Text>
              <Text style={styles.title}>Location: </Text> {this.state.data.location}
            </Text>
            <Text>
              <Text style={styles.title}>Public repos:</Text> {this.state.data.public_repos}
            </Text>
          </View>
          <Text>
            <Text style={styles.title}>Bio:</Text> {this.state.data.bio}
          </Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(user) => this.setState({ user })}
            value={this.state.user}
          />
        </View>
        <View>
          <Button
            title="Search Data"
            onPress={this.fetchData}
            accessibilityLabel="Fetch the date of a github user"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  data: {
    padding: 20,
  },

  dataCentered: {
    alignItems: 'center',
    margin: '3%',
  },

  title: {
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },

  tinyLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 20,
  },

  input: {
    fontSize: 20,
    padding: 2,
  },
});

export default UsuarioGitHub;
