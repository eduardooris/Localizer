import {Linking} from 'react-native';

interface LocationTypes {
  latitude?: number;
  longitude?: number;
}

export const abrirNoGoogleMaps = async ({
  latitude,
  longitude,
}: LocationTypes) => {
  try {
    Linking.openURL(`https://www.google.com/maps?q=${latitude},${longitude}`);
  } catch (error) {
    console.error('ERRO!', error);
  }
};

export const abrirNoWaze = async ({latitude, longitude}: LocationTypes) => {
  try {
    Linking.openURL(
      `https://www.waze.com/ul?ll=${latitude},${longitude}&navigate=yes`,
    );
  } catch (error) {
    console.error('ERRO!', error);
  }
};
