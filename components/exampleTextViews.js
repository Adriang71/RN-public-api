import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Blink = (props) => {
  let display = props.isShow ? props.text : '';
  return (
    <Text style={[styles.red, styles.bigblue]} >{display}</Text>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShow: true};
    setInterval(() => {
      this.setState({isShow: !this.state.isShow});
    }, 1000);
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }

    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
        <Blink
          isShow={this.state.isShow}
          text="E up App.js to start working on your kkkk!"
        />
        <Blink
          style={styles.red}
          isShow={this.state.isShow}
          text="Changes you make will automatically reload."
        />
        <Blink
          isShow={this.state.isShow}
          text="Shake your phone to open the developer menu."
        />
        <Image source={pic} style={{width: 193, height: 110}}/>
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
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
