import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { Color } from '../../styles/Color'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

interface Props {
  title: string;
  statusText: string;
  stockColor?: string;
  source: ImageSourcePropType;
  onPress?: () => void;
}

export const Card = ({title, statusText, stockColor, source, onPress}: Props) => {
    const [fontsLoaded] = useFonts({
      overpassMedium: require('../../../assets/fonts/Overpass-Medium.ttf'),
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Image 
        source={source}
        alt='Imagen del producto'
        resizeMode='contain'
        style={styles.image}
      />
      <View style={styles.content}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.paragraph}>Colores</Text>
        </TouchableOpacity>
        <View style={styles.colores}>
          <View  style={{backgroundColor: 'black', width: 12, height: 12, borderRadius: 50}}/>
          <View  style={{backgroundColor: 'blue', width: 12, height: 12, borderRadius: 50}}/>
          <View  style={{backgroundColor: 'red', width: 12, height: 12, borderRadius: 50}}/>
          <View  style={{backgroundColor: 'yellow', width: 12, height: 12, borderRadius: 50}}/>
        </View>
        <View style={styles.status}>
          <Text style={styles.statusText}>{statusText}</Text>
        </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 400,
    height: 134,
    backgroundColor: Color.whiteLight,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
    position: 'relative',
    gap: 15
  }, 
  image: {
    width: 112,
    height: 112,
  },
  content: {
    width: '50%',
    maxWidth: 190,
    maxHeight:134
  },
  title:{
    fontSize: 18,
    fontFamily: 'overpassMedium',
    fontWeight: '800',
    color: Color.primary
  },
  paragraph: {
    fontSize: 12,
    fontWeight: '400',
    color: '#889FF0',
    fontFamily: 'overpassLigth',
    marginTop: 3,
  },
  colores:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
  },
  status:{
    backgroundColor: Color.grayLight,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 5,
    top: 18,
    right: 0,
    width: 190,    
  },
  statusText:{
    fontSize: 10,
    color: Color.dark,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'overpassLigth',
  }
})