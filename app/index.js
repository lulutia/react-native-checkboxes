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
            theme={'orange'}
            size={'default'}
            disable={false}
            label={'test'}
            onClick={() => this._onPressButton()}/>
      </View>
      );
  }
}

export default checkbox;
