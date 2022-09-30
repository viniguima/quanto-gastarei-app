import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
  
export default class App extends React.Component {
  render(){
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
                                accessible={false}>

      </TouchableWithoutFeedback>
    );
  }
}
  