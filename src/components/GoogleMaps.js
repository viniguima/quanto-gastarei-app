import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
export default class GoogleMaps extends Component {
    render() {
        return <WebView source={{ uri: 'https://www.google.com.br/maps/dir//' }} />;
      }
  }