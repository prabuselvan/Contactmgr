import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Provider} from './context';
import './App.css';


class App extends Component {
  render() {
    
    // const name="PRABU";
    // const showHello = false;
    // const showMath =  true;
    // const num1=100;
    // const num2=200;
    // let math;

    // if (showMath) {
    //     math=<h4> {num1} + {num2} = {num1+ num2}</h4>
    // } else {
    //   math=null;
    // }
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager"/>
          {/* conditional rendering */}
          {/* {showHello ?  <h2> Hello {name.toUpperCase()}</h2> : null} */}
          {/* <h4> {math}</h4> */}
              <div className="container">
                    <Contacts/>
              </div>
        </div>
      </Provider>
    );
  }}

export default App;
