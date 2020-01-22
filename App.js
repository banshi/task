import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SearchDropDown from './src/components/search';

const items = [
  { id: 1, name: 'angellist' },
  { id: 2, name: 'codepen' },
  { id: 3, name: 'envelope' },
  { id: 4, name: 'etsy' },
  { id: 5, name: 'facebook' },
  { id: 6, name: 'foursquare' },
  { id: 7, name: 'github-alt' },
  { id: 8, name: 'github' },
  { id: 9, name: 'gitlab' },
  { id: 10, name: 'instagram' },
];
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 30 }}>
        <SearchDropDown items={items} />
      </View>
    );
  }
}