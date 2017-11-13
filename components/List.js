import React from 'react';
import { StyleSheet, Text, View, FlatList, Linking } from 'react-native';
import sd from '../appStaticData.js'

const isAuthInItem = (text) => (text !== null ? text : 'No');

const ListItem = (props) => (
  <View style={styles.listItem}>

    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={[styles.item, styles.name]}>{props.itemData['API']}</Text>
      <Text style={styles.item}>{props.itemData['Category']}</Text>
    </View>

    <Text style={styles.item}>{`Auth: ${isAuthInItem(props.itemData['Auth'])}`}</Text>
    <Text style={styles.item}>{props.itemData['Description']}</Text>
    <Text style={styles.item}>{props.itemData['HTTPS']}</Text>

    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
      <Text
        style={styles.goText}
        onPress={() => Linking.openURL(props.itemData['Link'])}
        >Go to website</Text>
    </View>

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
          style={styles.list}
          data={list}
          renderItem={
            ({item}) =>
            <ListItem
              key={item['Api']}
              style={styles.listItem}
              itemData={item} />}
        />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#212121',
  },
  listItem: {
    width: '100%',
    padding: 20,
    backgroundColor: '#212121',
    borderBottomWidth: 0.5,
    borderBottomColor: '#7E57C2',
  },
  item: {
    color: '#fff'
  },
  name: {
    fontSize: 20,
    marginBottom: 5
  },
  goText: {
    color: '#03A9F4',
    fontSize: 14
  }
});
