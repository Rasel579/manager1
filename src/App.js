import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
       return(
          <Provider store={store}>
              <Router />
          </Provider>
       );
    }
}

export default App;