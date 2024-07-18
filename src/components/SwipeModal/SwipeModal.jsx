import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import { View, StyleSheet } from 'react-native';
import { DesignSystem } from '../../util/Style/DesignSystem';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
const SwipeModalWithText = ({
  visible,
  closeModal,
  height,
  background = DesignSystem.colors.primary,
  children,
  borderColor = DesignSystem.colors.primary,
}) => {
  return (
    <SwipeUpDownModal
      modalVisible={visible}
      ContentModal={
        <View
          style={[
            styles.containerContent,
            { marginTop: hp(height), backgroundColor: borderColor },
          ]}>
          <View style={[styles.container, { backgroundColor: background }]}>
  
            <View style={styles.containerChildren}>{children}</View>
          </View>
        </View>
      }
      onClose={() => {
        closeModal(false);
      }}
    />
  );
};

export const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    backgroundColor: DesignSystem.colors.white,
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    borderRadius: 30,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  containerChildren: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});

export default SwipeModalWithText;
