import {TouchableOpacity, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface IButtonProps {
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<PropsWithChildren<IButtonProps>> = props => {
  const customStyles = StyleSheet.flatten([props.style, styles.container]);

  return (
    <TouchableOpacity style={customStyles}>{props.children}</TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
