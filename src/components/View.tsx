import React, {PropsWithChildren} from 'react';
import {StyleSheet, View as ViewBase, ViewProps, ViewStyle} from 'react-native';

interface IView extends ViewProps {
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  bg?: string;
  flexD?: ViewStyle['flexDirection'];
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
}

const View: React.FC<PropsWithChildren<IView>> = props => {
  const {style, children, bg, flexD, ...customStyle} = props;

  const styles = StyleSheet.flatten([
    {
      backgroundColor: bg,
      flexDirection: flexD,
    },
    customStyle,
    style,
  ]);

  return <ViewBase style={styles}>{children}</ViewBase>;
};

export default View;
