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

  _handlePress () {
    if (this.props.disable) {
      return;
    }
    this.setState({checked: !this.state.checked});
    this.props.onClick();
  }

  render() {
    const {
      theme = 'default',
      size = 'default',
      label = '',
      labelStyle = {},
      labelWordsStyle = {},
      style = {},
      disable = false
    } = this.props;

    let colorConfig = new BasicColor(theme, disable);
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableNativeFeedback
        style={[OuterView.outerView, {height: Size[size], width: Size[size]}, style]}
        background={TouchableNativeFeedback.Ripple(colorConfig.rippleColor, true)}
        onPress={() => this._handlePress()}
        {...this.props}>
        <View
          style={[{height: Size[size], flexDirection: 'row', width: Size[size]}, OuterView.ripple, style]}>
          <CheckboxItem size={Size[size]} scale={Scale[size]} theme={colorConfig.themeColor} checked={this.state.checked}/>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        style={[OuterView.outerView, {height: Size[size]}, labelStyle]}
        background={TouchableNativeFeedback.Ripple(colorConfig.rippleColor)}
        onPress={() => this._handlePress()}
      >
        <View style={[{height: Size[size], flexDirection: 'row', paddingLeft: 5, paddingRight: 5}, OuterView.ripple, labelStyle]}>
        <Text style={labelWordsStyle}>{label}</Text>
        </View>
      </TouchableNativeFeedback>
      </View>
    );
  }
}


export default Checkbox;
