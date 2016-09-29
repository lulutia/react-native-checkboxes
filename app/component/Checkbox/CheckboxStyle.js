import StyleSheet from 'react-native-stylesheet-xg';
import {BackgroundColors, ActiveColor, DisableColor} from './CheckboxInfo';
import {Color, RGB, HSL} from 'react-native-colortool';

export class BasicColor {
  constructor (theme) {
    this.theme = theme || '';
    this.themeColor = this.getBasicColor();
  }

  colorJoint (color) {
    return 'hsla(' + color.h + ', ' + color.s + '%, ' + color.l + '%, ' + color.a + ')';
  }

  getBasicColor () {
    let themeMap = ['orange', 'blue', 'red', 'gray', 'default'];
    let themeColor;
    if (themeMap.indexOf(this.theme) === -1) {
      let newColor = HSL.rgbToHsl(Color.format(this.theme));
      let newColorRipple = this.colorJoint(newColor.lighten(0.3));
      themeColor = this.colorJoint(newColor);
      this.rippleColor = newColorRipple;
    } else {
      themeColor = BackgroundColors[this.theme];
      this.rippleColor = DisableColor[this.theme + 'Disable'];
    }
    return themeColor;
  }
}
export let OuterView = StyleSheet.create({
  outerView: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ripple: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
