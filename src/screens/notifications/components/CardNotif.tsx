import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { Color } from '../../../styles/Color'
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export const CardNotif = () => {

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
      <View style={styles.wrapper_date}>
        <Text style={styles.text_date}>14/03/2023</Text>
        <Text style={styles.text_date}>14:20</Text>
      </View>
      <View style={styles.wrapper_title}>
        <Text style={styles.title}>Su pago ha sido confirmado</Text>
        <FontAwesome name="circle" size={10} color="#00FF3C" />
      </View>
      <Text style={styles.paragrapf}>
        Su pago correspondiente al pedido 1234 ha sido confirmado con éxito y los productos han sido reservados
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#0B2440',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    wrapper_date:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        gap: 10
    },
    text_date:{
        color:Color.blueLight,
        fontSize: 12,
        fontFamily:'overpassLigth'
    },
    wrapper_title:{
        marginVertical: 10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
    },
    title:{
        color:Color.white,
        fontSize: 18,
        fontFamily:'overpassMedium',
        fontWeight:'600'

    }, 
    paragrapf:{
        color:Color.blueLight,
        fontSize: 14,
        fontFamily:'overpassRegular',
    }

})