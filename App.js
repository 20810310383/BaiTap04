import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Square} from './Compoment/Square.js';

export default function App() {
  return (   
    <View style={styles.container}>
        <Square/>
    </View>
  );
}

