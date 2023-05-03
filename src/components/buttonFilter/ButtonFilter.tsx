import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { Color } from '../../styles/Color';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


interface Props {
    title: string;
    //iconName: string;
    source: ImageSourcePropType
    state: boolean;
    onPress: () => void;
}

export const ButtonFilter = ({title, source, state, onPress}: Props) => {
  const [fontsLoaded] = useFonts({
    overpassLigth: require('../../../assets/fonts/Overpass-Light.ttf'),
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
    <TouchableOpacity 
        style={[styles.container, state && styles.selected]}
        onPress={onPress}
        onLayout={onLayoutRootView}
    >
        
      <Image
        source={source}
        style={{
          width: 24,
          height:24,
          resizeMode: 'contain',
        }}
      />
    
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.blueDark,
        width: '22%',
        height: 70,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selected: {
        backgroundColor: '#01A0D5',
    },
    title:{
        color: Color.white,
        marginTop: 2,
        fontSize: 9,
        fontFamily: 'overpassLigth',
    }
});