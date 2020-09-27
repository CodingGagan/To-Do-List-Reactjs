import React, { Component } from 'react';
import Header from './Component/Layout/Header'
// import About from './Component/Pages/About';
// import Contact from './Component/Pages/Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import StarfieldAnimation from 'react-starfield-animation'
// import Axios from 'axios';
class App extends React.Component {


  render() {
    return (
      <React.Fragment>
        <StarfieldAnimation
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: -1
          }}
        />
        <Header />
      </React.Fragment>
    );
  }
}




export default App;
