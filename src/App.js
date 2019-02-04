import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyAR3L3aDTCCn6GZQReb0kzJxuHTnAED8TM',
            authDomain: 'manager-f374e.firebaseapp.com',
            databaseURL: 'https://manager-f374e.firebaseio.com',
            projectId: 'manager-f374e',
            storageBucket: 'manager-f374e.appspot.com',
            messagingSenderId: '785796283902'
          };
            firebase.initializeApp(config);
    }
    render(){
       return(
          <Provider store={createStore(reducers)}>
              <View>
                  <Text>
                      Hello
                  </Text>
              </View>
          </Provider>
       );
    }
}

export default App;