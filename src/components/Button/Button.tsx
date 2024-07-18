import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {DesignSystem} from '../../util/Style/DesignSystem';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
interface ButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  loading?: boolean;
  type?: 'disabled' | 'outline' | 'default';
}

export const Button = ({
  onPress,
  disabled,
  size,
  children,
  loading,
  type = 'default',
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[style.button, types[type], sizes[size]]}
      onPress={onPress}
      disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator color={DesignSystem.colors.white} size={17} />
      ) : (
        <Text allowFontScaling={false} style={typesText[type]}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    height: hp(8),
    backgroundColor: DesignSystem.colors.secondary,
    justifyContent: 'center',
    borderRadius: hp(5),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 7,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  disabled: {
    backgroundColor: DesignSystem.colors.disabled,
    height: hp(8),
    justifyContent: 'center',
    borderRadius: hp(5),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 7,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  outline: {
    height: hp(8),
    backgroundColor: DesignSystem.colors.white,
    borderColor: DesignSystem.colors.secondary,
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: hp(5),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  textOutline: {
    color: DesignSystem.colors.secondary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  small: {
    width: 100,
  },
  medium: {
    width: 150,
  },
  large: {
    width: wp(85),
  },
});

const sizes = {
  small: style.small,
  medium: style.medium,
  large: style.large,
};

const types = {
  disabled: style.disabled,
  outline: style.outline,
  default: style.button,
};

const typesText = {
  outline: style.textOutline,
  default: style.text,
  disabled: style.text,
};
