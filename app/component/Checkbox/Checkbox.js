import React, {Component} from 'react';
import {
  Text,
  TouchableHighlight,
  ActivityIndicator,
  TouchableNativeFeedback,
  View
} from 'react-native';

import CheckboxItem from './CheckboxItem';
import {OuterView, BasicColor} from './CheckboxStyle';
import {Size, Scale} from './CheckboxInfo';

class Checkbox extends Component {

  constructor(props) {
    super(props);
    this.state = {checked: this.props.checked || false};
  }

  render() {
    const {
      theme = 'default',
      size = 'default',
      label = '',
      onClick = function () {}
    } = this.props;

    let colorConfig = new BasicColor(theme);

    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableNativeFeedback
        style={[OuterView.outerView, {height: Size[size], width: Size[size]}]}
        background={TouchableNativeFeedback.Ripple(colorConfig.rippleColor, true)}
        onPress={() => {this.setState({checked: !this.state.checked}); onClick();}}
        {...this.props}>
        <View
          style={[{height: Size[size], flexDirection: 'row', width: Size[size]}, OuterView.ripple]}>
          <CheckboxItem size={Size[size]} scale={Scale[size]} theme={colorConfig.themeColor} checked={this.state.checked}/>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => {this.setState({checked: !this.state.checked}); onClick();}}
      >
        <View>
        <Text >{label}</Text>
        </View>
      </TouchableNativeFeedback>
      </View>
    );
  }
}


export default Checkbox;
