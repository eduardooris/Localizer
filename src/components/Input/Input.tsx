import React, {useState} from 'react';
import {Text} from '../Text/Text';
import Icon from '@expo/vector-icons/FontAwesome'
import {DesignSystem} from '../../util/Style/DesignSystem';
import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/Entypo'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
interface InputProps {
  placeholder: string;
  value: string;
  icon?: string;
  secureTextEntry?: boolean;
  label?: string;
  onChangeText: (text: string) => void;
}

export const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  icon,
  label,
}: InputProps) => {
  const [secureTextEntryState, setSecureTextEntryState] = useState(
    secureTextEntry ? true : false,
  );

  return (
    <>
      <Text typography="small" style={style.text} color="default">
        {label}
      </Text>
      <View style={style.containerInput}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={'#545454'}
          autoCapitalize="none"
          style={style.input}
          secureTextEntry={secureTextEntryState}
        />
        {secureTextEntry ? (
          <TouchableOpacity
            onPress={() => setSecureTextEntryState(!secureTextEntryState)}>
            <MaterialIcons
              name={secureTextEntryState ? 'eye' : 'eye-with-line'}
              color="#545454"
              size={DesignSystem.icons.small}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </>
  );
};

const style = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    marginBottom: hp(1.2),
    marginLeft: wp(1),
    color: '#000',
  },
  input: {
    flex: 1,
    color: '#545454',
    fontSize: DesignSystem.typography.small,
    ...Platform.select({
      ios: {
        height: hp(5),
      },
      android: {
        height: hp(5),
      },
    }),
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: DesignSystem.colors.white,
    padding: hp(1.3),
    borderRadius: hp(3),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 2,
      },
    }),
  },
});
