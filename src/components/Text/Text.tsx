import React from 'react';
import {StyleSheet, Text as TextView, StyleProp, TextStyle} from 'react-native';
import {DesignSystem} from '../../util/Style/DesignSystem';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
interface TextProps {
  children: React.ReactNode;
  typography: 'small' | 'medium' | 'large';
  align?: 'center' | 'left' | 'right';
  style?: StyleProp<TextStyle>;
  color?: 'default' | 'primary' | 'secondary';
}

export const Text = ({
  typography,
  align = 'left',
  style,
  children,
  color,
}: TextProps) => {
  return (
    <TextView
      allowFontScaling={false}
      style={[
        styles.text,
        colors[color ? color : 'default'],
        typographyStyle[typography],
        aligns[align],
        style,
      ]}>
      {children}
    </TextView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#545454',
  },
  small: {
    fontSize: DesignSystem.typography.small,
    fontWeight: '400',
  },
  medium: {
    fontSize: DesignSystem.typography.medium,
    fontWeight: '500',
  },
  large: {
    fontSize: DesignSystem.typography.large,
    fontWeight: '700',
  },
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  default: {
    color: '#848484',
  },
  primary: {
    color: DesignSystem.colors.primary,
  },
  secondary: {
    color: DesignSystem.colors.secondary,
  },
});

const aligns = {
  center: styles.center,
  left: styles.left,
  right: styles.right,
};

const typographyStyle = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

const colors = {
  default: styles.default,
  primary: styles.primary,
  secondary: styles.secondary,
};
