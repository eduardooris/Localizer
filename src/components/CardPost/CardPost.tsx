import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DesignSystem} from '../../util/Style/DesignSystem';

interface CardPostProps {
  children: React.ReactNode;
}

export const CardPost = ({children}: CardPostProps) => {
  return <View style={style.container}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    backgroundColor: DesignSystem.colors.secondary,
    width: 350,
    // height: 100,
    margin: 5,
    borderRadius: 5,
  },
});
