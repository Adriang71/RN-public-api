import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Category = [
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
        this.state = 'All';
        this._onPressButton = this._onPressButton.bind(this);
        this._onPressButton = this._onPressButton.bind(this);
    }

    _onPressButton() {
        console.log('work');
    }

    _createMenuItems() {
        Category.map(item => {
            return (
                <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                  <View>
                    <Text>{item}</Text>
                  </View>
                </TouchableHighlight>
            );
        });
    }

    render() {
        return(
            <View>
                <Text></Text>
            </View>
        );
    }
}
