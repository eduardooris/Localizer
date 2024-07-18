import React from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import {DesignSystem} from '../../util/Style/DesignSystem';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface ButtonFloatProps {
  children: React.ReactNode;
}

const ButtonFloat = ({children}: ButtonFloatProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: DesignSystem.colors.gray,
    position: 'absolute',
    bottom: hp(5),
    borderRadius: 100,
    height: hp(10),
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginHorizontal: wp(3),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  containerButton: {
    backgroundColor: DesignSystem.colors.white,
    flex: 1,
    width: '100%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

export {ButtonFloat};
