import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './Components/Navigation/Navigation';
import {Provider} from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {
  render(){
    return (
      <Provider store = {Store}>
        <Navigation/>
      </Provider>
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
