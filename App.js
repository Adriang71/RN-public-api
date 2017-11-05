import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList } from 'react-native';
import sd from './appStaticData.js'

const ListItem = (props) => (
  <View>
    <Text>{props.itemData['API']}</Text>
    <Text>{props.itemData['Auth']}</Text>
    <Text>{props.itemData['Category']}</Text>
    <Text>{props.itemData['Description']}</Text>
    <Text>{props.itemData['HTTPS']}</Text>
    <Text>{props.itemData['Link']}</Text>
  </View>
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let somthing = sd.entries[0]['API'];
    return (
      <View style={styles.container}>
        <Text>{somthing}</Text>
        <FlatList
            data={sd.entries}
            renderItem={({item}) => <ListItem style={styles.item} itemData={item} />}
          />
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
