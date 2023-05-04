import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { LinearGradient  } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

interface IProps{
    title: string;
}

export const Header = ({title}: IProps) => {
  const [fontsLoaded] = useFonts({
    overpassMedium: require('../../../assets/fonts/Overpass-Medium.ttf')
  })

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null
  }

  return (

     <LinearGradient
        colors={['#044C76', '#06324C', '#101231']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
        onLayout={onLayoutRootView}
    >
      <Text style={styles.title}>{title}</Text>
    </LinearGradient>

  )
}

const styles = StyleSheet.create({
    container: {
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
        width: '100%',
        height: 103,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 50,
        fontFamily: 'overpassMedium',
    }
})