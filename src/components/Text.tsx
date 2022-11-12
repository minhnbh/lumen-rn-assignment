import {
  Text as TextBase,
  TextProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import View from './View';

interface IText extends TextProps {
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  italic?: boolean;
  lineHeight?: number;
  center?: boolean;
}

const fontFamily: Record<string, string> = {
  '200': 'Hellix-Thin',
  '300': 'Hellix-Light',
  '400': 'Hellix-Regular',
  '500': 'Hellix-Medium',
  '600': 'Hellix-SemiBold',
  '700': 'Hellix-Bold',
  bold: 'Hellix-ExtraBold',
};

const Text: React.FC<PropsWithChildren<IText>> = props => {
  const {
    fontSize,
    color,
    fontWeight = '400',
    italic,
    lineHeight,
    center,
  } = props;
  const containerStyle: StyleProp<ViewStyle> = StyleSheet.flatten([
    {
      justifyContent: center ? 'center' : undefined,
      alignItems: center ? 'center' : undefined,
    },
  ]);

  const styles = StyleSheet.flatten([
    {
      fontSize: fontSize,
      color: color,
      lineHeight: lineHeight,
    },
    props.style,
  ]);

  if (fontWeight) {
    if (!fontFamily[fontWeight]) {
      styles.fontFamily = fontFamily['400'];
    } else {
      styles.fontFamily = fontFamily[fontWeight.toString()];
    }
  }

  if (styles.fontStyle === 'italic' || italic) {
    styles.fontFamily = `${styles.fontFamily}Italic`;
  }

  return (
    <View style={containerStyle}>
      <TextBase style={styles}>{props.children}</TextBase>
    </View>
  );
};

export default Text;
