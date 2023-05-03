import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React,  { useCallback, useEffect }  from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import { Color } from '../../../styles/Color';
import { NumericInput } from '../../../components/numericInput/NumericInput';


interface Props {
    source: ImageSourcePropType;
    text: string;
}

export const CardCart = ({source, text}: Props) => {

  const [fontsLoaded] = useFonts({
    overpassMedium: require('../../../../assets/fonts/Overpass-Medium.ttf'),
    overpassRegular: require('../../../../assets/fonts/Overpass-Regular.ttf'),
    overpassLigth: require('../../../../assets/fonts/Overpass-Light.ttf'),
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
     
      <View style={styles.content}>
          <View style={styles.containerImage}>
            <Image
              source={source}
              style={styles.image}
              resizeMode='cover'
            />
          </View>
            <View style={{width: '80%', paddingRight: 20}}>
              <Text style={styles.title}>{text}</Text>
              <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <NumericInput initialValue={50} onValueChange={(value) => console.log(value)} />
                <View style={styles.button_delete}>
                  <TouchableOpacity>
                    <AntDesign name="delete" size={18} color="#889FF0" />
                  </TouchableOpacity>
                </View>
              </View>
          </View>
      </View>
       
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 65,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    title:{
      fontFamily: 'overpassMedium',
      fontSize: 16,
      color: Color.white,
    },
    content:{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 15,
  },
    containerImage:{
      width: 80,
      height: 60,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    button_delete:{
      marginTop: 0,
    }
})