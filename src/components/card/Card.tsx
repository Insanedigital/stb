import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { Color } from '../../styles/Color'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export interface CardProps {
 
  type: string;
  statusText: string;
  stockColor?: string;
  source: ImageSourcePropType
  onPress?: () => void;
}

export const Card = ({type, statusText, source, onPress}: CardProps) => {
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
      <View style={{paddingHorizontal: 5, width: 100}}>
        <Image 
          source={source}
          alt={type}
          resizeMode='contain'
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.title}>{type}</Text>
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
    gap: 10,
  }, 
  image: {
    width: 120,
    height: 120,
   
  },
  content: {
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
    right: -20,
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


/* qty_expected?: number,
container_id?: number,
family?: string,
color?: string,
name?: string,
price_vip?:number,
price_esp?: number,
price_container?: number,
minimum_sales_units?: number,
container_number?: string,
arrival_warehouse?: number,
status?: string,
size?: string
item_id?: number; */