import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, TouchableHighlight} from 'react-native';

const Category = [
    'All',
    'Animals',
    'Anime',
    'Anti-Malware',
    'Art & Design',
    'Books',
    'Business',
    'Calendar',
    'Cloud Storage & File Sharing',
    'Continuous Integration',
    'Cryptocurrency',
    'Currency Exchange',
    'Data Validation',
    'Development',
    'Dictionaries',
    'Documents & Productivity',
    'Environment',
    'Events',
    'Finance',
    'Food & Drink',
    'Fraud Prevention',
    'Games & Comics',
    'Geocoding',
    'Government',
    'Health',
    'Jobs',
    'Machine Learning',
    'Math',
    'Music',
    'News',
    'Open Data',
    'Open Source Projects',
    'Patent',
    'Personality',
    'Photography',
    'Science',
    'Security',
    'Shopping',
    'Social',
    'Sports & Fitness',
    'Test Data',
    'Text Analysis',
    'Tracking',
    'Transportation',
    'University',
    'URL Shorteners',
    'Vehicle',
    'Video',
    'Weather',
];

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.moveTo = this.moveTo.bind(this);
  }

  static navigationOptions = {
    title: 'Category',
  };


  moveTo(category) {
    this.props.navigation.navigate('Main', { category });
  }

  render() {
    return(
      <ScrollView style={styles.menuList}>
          {Category.map(item => {
              return(
                  <TouchableHighlight
                    key={item}
                    onPress={() => this.moveTo(item)}
                    underlayColor="white">
                      <Text style={styles.menuItem}>{item}</Text>
                  </TouchableHighlight>
              );
          })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  menuList: {
    padding: 20,
    backgroundColor: '#212121',
  },
  menuItem: {
    margin: 10,
    color: '#7E57C2',
    fontSize: 20,
  }
});
