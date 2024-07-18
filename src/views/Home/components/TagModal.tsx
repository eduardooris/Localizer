import {
  View,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';
import SwipeModalWithText from '../../../components/SwipeModal/SwipeModal';
import React, {useState} from 'react';
import {TagsTypes} from '../../../types/Tags';
import {Button} from '../../../components/Button/Button';
import {Text} from '../../../components/Text/Text';
import MapView, {Marker, Polyline} from 'react-native-maps';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {DesignSystem} from '../../../util/Style/DesignSystem';
import {formatDate} from '../../../util/Format/formatDate';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {abrirNoGoogleMaps, abrirNoWaze} from '../helpers/openMapApp';
import {useDispatch} from 'react-redux';
const {width, height} = Dimensions.get('screen');

interface TagModalProps {
  visible: boolean;
  close: () => void;
  initialRegion: any;
  tag: TagsTypes | null;
}

export default function TagModal({visible, close, tag}: TagModalProps) {
  const [seeApp, setSeeApp] = useState(false);
  const dispatch = useDispatch();

  const seeHistory = () => {
    close();
    dispatch({
      type: 'SET_HISTORY',
      payload: {seeHistory: true, historyList: tag?.historyList},
    });
  };

  return (
    <SwipeModalWithText visible={visible} closeModal={close} height={34}>
      <View
        style={{
          marginTop: hp(1),
          justifyContent: 'space-between',
          height: hp(50),
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                typography="medium"
                style={{fontWeight: 'bold', color: '#545454'}}>
                {tag?.name}
              </Text>
              <Text typography="small" color="secondary">
                {tag?.sn}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons
                name="location-pin"
                color={DesignSystem.colors.secondary}
                size={DesignSystem.icons.small}
              />
              <Text typography="small" color="secondary">
                4.1km
              </Text>
            </View>
          </View>

          <View style={{marginTop: 20}}>
            <Text typography="small" style={styles.text}>
              Último endereço:{' '}
            </Text>
            <Text typography="small">{tag?.lastAddress}</Text>
            <View style={styles.separator} />
            <Text typography="small" style={styles.text}>
              Visto por último
            </Text>
            <Text typography="small">{formatDate(tag?.bandtime ?? '')}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Button size="medium" onPress={() => seeHistory()}>
            Ver Histórico
          </Button>
          <Button size="medium" type="outline" onPress={() => setSeeApp(true)}>
            <MaterialIcons
              name="map"
              size={DesignSystem.icons.medium}
              color={DesignSystem.colors.secondary}
            />
          </Button>
        </View>
      </View>

      <Modal visible={seeApp} transparent={true}>
        <View style={styles.containerModal}>
          <Pressable
            onPress={() => setSeeApp(false)}
            style={styles.containerDark}
          />
          <View style={styles.boxModal}>
            <View style={styles.boxModalPadding}>
              <View style={{width: '100%', alignItems: 'flex-end'}}>
                <Pressable onPress={() => setSeeApp(false)}>
                  <MaterialIcons
                    name="close"
                    size={DesignSystem.icons.medium}
                    color={DesignSystem.colors.secondary}
                  />
                </Pressable>
              </View>
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={() =>
                    abrirNoGoogleMaps({
                      latitude: tag?.lastLatLng.latitude,
                      longitude: tag?.lastLatLng.longitude,
                    })
                  }
                  style={styles.buttonSpacer}>
                  <Text typography="small">{'Google Maps'}</Text>
                </TouchableOpacity>
                <View style={styles.lineSpacer} />
                <TouchableOpacity
                  onPress={() =>
                    abrirNoWaze({
                      latitude: tag?.lastLatLng.latitude,
                      longitude: tag?.lastLatLng.longitude,
                    })
                  }
                  style={styles.buttonSpacer}>
                  <Text typography="small">{'Waze'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SwipeModalWithText>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  container: {
    height: height / 10,
    borderRadius: 26,
    justifyContent: 'center',
  },
  buttonSpacer: {
    paddingLeft: 20,
  },
  buttonSpacerText: {
    fontSize: 17,
  },
  lineSpacer: {
    borderWidth: 0.8,
    borderColor: DesignSystem.colors.secondary,
    marginVertical: 15,
    marginLeft: 20,
  },
  sizeTextHeader: {
    fontSize: 13,
  },
  containerModal: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
  },
  containerDark: {
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.9,
    width: '100%',
    height: '100%',
  },
  boxModal: {
    width: 350,
    backgroundColor: DesignSystem.colors.white,
    borderRadius: 25,
  },
  boxModalPadding: {
    margin: 10,
    borderRadius: 25,
    paddingBottom: 25,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: DesignSystem.colors.secondary,
    marginVertical: 15,
  },
  text: {
    fontWeight: '700',
    marginBottom: 7,
  },
});
