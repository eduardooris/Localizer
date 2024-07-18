import { StyleSheet, View, Platform, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import { DesignSystem } from '../../util/Style/DesignSystem';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Text } from '../Text/Text';
interface ContainerProps {
  children: React.ReactNode;
  noHeader?: boolean
  icon?: string
  title?: string
  onPress?: () => void
}

export default function Container({ children, noHeader, icon, title, onPress }: ContainerProps) {
  const { goBack } = useNavigation()
  return <View style={styles.container}>
    {!noHeader && (
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => onPress ? onPress : goBack()}>
          {/* <MaterialIcons name={icon ? icon : "arrow-back-ios"} color={DesignSystem.colors.secondary} size={DesignSystem.icons.small} /> */}
        </TouchableOpacity>
        <Text typography='medium'>{title}</Text>
        <View style={{ width: 25 }} />
      </View>
    )}
    {children}
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DesignSystem.colors.primary,
    paddingTop: Platform.OS == 'ios' ? '12%' : 0,
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal: 30,
    marginTop: 10
  }
});
