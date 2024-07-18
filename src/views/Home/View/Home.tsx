import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useViewModel} from '../ViewModel/Home';
import {DesignSystem} from '../../../util/Style/DesignSystem';
import Search from '../../../components/Search';
import MapView, {Marker, Polyline} from 'react-native-maps';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Text} from '../../../components/Text/Text';
import TagModal from '../components/TagModal';
import ButtonAdd from '../../../components/ButtonAdd';
import {ButtonFloat} from '../../../components/ButtonFloat';
export default function Home() {
  const {
    form,
    tags,
    calculateInitialRegion,
    getTag,
    tag,
    modal,
    closeModal,
    filterTag,
    seeHistory,
    historyList,
    closeHistory,
    navigate,
  } = useViewModel();
  const initialRegion = calculateInitialRegion(tags);

  if (seeHistory) {
    return (
      <View style={{flex: 1}}>
        <MapView style={styles.map} initialRegion={initialRegion}>
          <Polyline
            coordinates={
              historyList?.map(item => ({
                latitude: Number(item.latitude),
                longitude: Number(item.longitude),
              })) || []
            }
            strokeColor={DesignSystem.colors.secondary}
            strokeWidth={2}
          />
          {historyList.map((tagList, index) => {
            const opacidade = 1.1 - index / historyList.length;
            return (
              <Marker
                key={index}
                style={{opacity: opacidade}}
                coordinate={{
                  latitude: tagList.latitude,
                  longitude: tagList.longitude,
                }}>
                {tag?.lastLatLng.latitude === tagList.latitude &&
                tag.lastLatLng.longitude === tagList.longitude ? (
                  <MaterialIcons
                    name="location-pin"
                    color={DesignSystem.colors.secondary}
                    size={DesignSystem.icons.large}
                  />
                ) : (
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: DesignSystem.colors.secondary,
                      borderRadius: 15,
                    }}
                  />
                )}
              </Marker>
            );
          })}
        </MapView>
        <ButtonFloat>
          <TouchableOpacity
            onPress={closeHistory}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons
              name="close"
              color={DesignSystem.colors.cinza}
              size={DesignSystem.icons.medium}
            />
            <Text typography="medium">Voltar</Text>
          </TouchableOpacity>
        </ButtonFloat>
        {/* <View>
          <MaterialIcons
            name="arrow-back-ios"
            size={DesignSystem.icons.small}
          />
        </View> */}
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {tags.map((tag, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: tag.lastLatLng.latitude,
              longitude: tag.lastLatLng.longitude,
            }}>
            <TouchableOpacity
              onPress={() => getTag(tag)}
              style={{alignItems: 'center'}}>
              <Text typography="small" style={{color: '#000'}}>
                {tag.name}
              </Text>
              <MaterialIcons
                name="location-pin"
                color={DesignSystem.colors.secondary}
                size={DesignSystem.icons.large}
              />
            </TouchableOpacity>
          </Marker>
        ))}
      </MapView>
      <Search
        value={form.search}
        onChangeText={e => filterTag(e)}
        placeholder="Encontrar tag"
      />
      <TagModal
        tag={tag}
        visible={modal}
        close={closeModal}
        initialRegion={initialRegion}
      />
      <ButtonFloat>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flex: 1,
          }}>
          <TouchableOpacity>
            <MaterialIcons
              name="home"
              size={DesignSystem.icons.small}
              color={DesignSystem.colors.cinza}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="history"
              size={DesignSystem.icons.small}
              color={DesignSystem.colors.cinza}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: DesignSystem.colors.secondary,
              borderRadius: 200,
            }}>
            <MaterialIcons
              name="add"
              size={DesignSystem.icons.medium}
              color={DesignSystem.colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="arrow-back"
              size={DesignSystem.icons.small}
              color={DesignSystem.colors.cinza}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="add"
              size={DesignSystem.icons.small}
              color={DesignSystem.colors.cinza}
            />
          </TouchableOpacity>
        </View>
      </ButtonFloat>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
