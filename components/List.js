import React from 'react';
import { StyleSheet, Text, View, FlatList, Linking } from 'react-native';
import sd from '../appStaticData.js'

const ListItem = (props) => (
  <View style={styles.listItem}>
    <Text>{props.itemData['API']}</Text>
    <Text>{props.itemData['Auth']}</Text>
    <Text>{props.itemData['Category']}</Text>
    <Text>{props.itemData['Description']}</Text>
    <Text>{props.itemData['HTTPS']}</Text>
    <Text onPress={() => Linking.openURL(props.itemData['Link'])}>Go to website</Text>
  </View>
);

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.apiDataBase = sd.entries;
    this.checkCategory = this.checkCategory.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  static navigationOptions = {
    title: 'ApiList',
  };

  filterList(categoryName) {
    return this.apiDataBase.filter(item => item['Category'] === categoryName);
  }

  checkCategory() {
    const { navigation } = this.props;

    if (navigation.state.hasOwnProperty('params') &&
        navigation.state.params.hasOwnProperty('category')) {

        if(navigation.state.params.category !== 'All') {
          return this.filterList(navigation.state.params.category);
        }

        return this.apiDataBase;
    }

    return this.apiDataBase;
  }

  render() {
    const { navigation } = this.props;
    const list = this.checkCategory();

    return (
      <FlatList
          data={list}
          renderItem={({item}) => <ListItem style={styles.listItem} itemData={item} />}
        />
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    backgroundColor: 'skyblue',
    borderBottomWidth: 1,
    borderBottomColor: 'steelblue',
  },
  item: {
    color: '#fff',
  }
});
