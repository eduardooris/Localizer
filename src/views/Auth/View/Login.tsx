import React from 'react';
import {View, ScrollView, StyleSheet, Image, Platform} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {useViewModel} from '../ViewModel/Login';
import {Input} from '../../../components/Input/Input';
import {Button} from '../../../components/Button/Button';
import {DesignSystem} from '../../../util/Style/DesignSystem';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const sizeImage = hp(60);
const sizeImageHorizontalHeight = hp(10);
const sizeImageHorizontalWidth = wp(60);
const Logo = require('../../../assets/images/logoapp.png');
const LogoHorizontal = require('../../../assets/images/logohorizontal.png');
export default function Login() {
  const {signIn, form, setForm, loading} = useViewModel();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
      style={style.container}
      contentContainerStyle={style.contentContainerStyle}>
      <View style={style.containerImage}>
        <Image source={Logo} style={style.image} />
      </View>
      <View style={style.containerForm}>
        <View style={style.containerText}>
          <Image source={LogoHorizontal} style={style.imageHorizontal} />
          {/* <Text
            typography="medium"
            color="secondary"
            style={{fontWeight: 'bold'}}>
            Faça login{' '}
          </Text>
          <Text typography="medium" color="default" style={{fontSize: 18}}>
            em sua conta
          </Text> */}
        </View>
        <Input
          label="Login"
          placeholder="E-mail"
          onChangeText={e => setForm({username: e})}
          value={form.username}
        />
        <Input
          placeholder="Senha"
          icon="lock"
          onChangeText={e => setForm({password: e})}
          secureTextEntry={true}
          value={form.password}
        />

        <View style={style.containerButton}>
          <Button size="large" onPress={signIn} loading={loading}>
            Entrar
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DesignSystem.colors.secondary,
    paddingTop: hp(1),
  },
  contentContainerStyle: {
    flex: 1,
  },
  containerButton: {
    alignItems: 'center',
    marginTop: hp(3),
  },
  containerForm: {
    backgroundColor: '#fbf6fa',
    flex: 1,
    borderTopStartRadius: hp(12),
    // borderTopEndRadius: hp(5),
    paddingVertical: hp(5),
    paddingHorizontal: hp(3),
    zIndex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: hp(33),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: -1},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  containerText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(3),
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(5),
  },
  image: {
    width: sizeImage,
    height: sizeImage,
  },
  imageHorizontal: {
    width: sizeImageHorizontalWidth,
    height: sizeImageHorizontalHeight,
    resizeMode: 'contain',
  },
});
