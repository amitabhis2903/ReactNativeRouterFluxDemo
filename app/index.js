// app/index.js

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import OneScreen from './OneScreen';
import SecondScreen from './SecondScreen';


const App = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='one'
          component={OneScreen}
            title="One"
              intial
          />
          <Scene
            key="second"
              component={SecondScreen}
                title="Second"
          />
        </Scene>
      </Router>
  );
}

export default App;
