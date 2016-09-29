import React, {Component} from 'react';
import {
  View
} from 'react-native';
import {Checkbox} from 'component';

// data

class checkbox extends Component {
  _onPressButton () {
    console.log('onpress');
  }
  render() {
    return (
      <View style={{marginLeft: 20, marginTop: 20}}>
         <Checkbox
            style={{marginLeft: 100}}
            theme={'orange'}
            size={'default'}
            disable={false}
            checked={true}
            label={'just a test'}
            labelStyle={{marginLeft: 20}}
            labelWordsStyle={{color: '#000'}}
            onClick={() => this._onPressButton()}/>
      </View>
      );
  }
}

export default checkbox;
