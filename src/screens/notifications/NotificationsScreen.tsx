import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Header } from '../../components/header/Header';
import { CardNotif } from './components/CardNotif';


export const NotificationsScreens = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container,
      {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }
    
    ]}>
       <StatusBar style='light'/>
      <Header title='Notificaciones'/>
      <ScrollView style={{marginBottom: 30, paddingHorizontal: 12}}>
        <CardNotif />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#040521',
    gap: 20
  },
})