import {StyleSheet, Text, TouchableOpacity, View  } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react'

import { GradientLayout } from '../../components/layout/GradientLayou'
import { Header } from '../../components/header/Header'
import { CardCart } from './component/CardCart'
import { ButtomGradient } from '../../components/button/ButtomGradient'
import { Color } from '../../styles/Color'




export const CartScreen = () => {
  const insets = useSafeAreaInsets();

  const [fontsLoaded] = useFonts({
    overpassMedium: require('../../../assets/fonts/Overpass-Medium.ttf'),
    overpassRegular: require('../../../assets/fonts/Overpass-Regular.ttf'),
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
    <View
      onLayout={onLayoutRootView} 
      style={[styles.container, 
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }]}
    >
      <StatusBar style='light' translucent/>
      <Header title='Mi Carrito'/>
      <GradientLayout
        style={{
          width: '100%',
          height:'80%',
          borderTopRightRadius: 45,
          borderTopLeftRadius: 45,
          paddingHorizontal: 10,
          marginTop: 20,
          paddingTop: 20,
 
        }}
      >
        
        <CardCart source={require('../../../assets/05.jpg')} text='Gorra Abierta Color Roja'/>
        <View style={{
          borderBottomWidth: 0.3, 
          borderBottomColor: Color.blueLight,
          marginVertical: 10
        }}/>
        <CardCart source={require('../../../assets/02.jpg')} text='Gorra Abierta '/>
        <View style={{
          borderBottomWidth: 0.3, 
          borderBottomColor: Color.blueLight,
          marginVertical: 10
        }}/>
        <CardCart source={require('../../../assets/01.jpg')} text='Sombrero Negro'/>
        <View style={{
          borderBottomWidth: 0.3, 
          borderBottomColor: Color.blueLight,
          marginVertical: 10
        }}/>
       <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20}}>
        <Text style={styles.text_total}>Total</Text>
        <Text style={styles.text_total}>$ 750</Text>
       </View>
        <View style={styles.separator}/>
        <View style={styles.wrapper_buttom}>
        <View style={styles.containerAmount}>
          <View style={styles.wrapper_amount}>
            <Text style={styles.texts}>Cantidad</Text>
            <Text style={styles.texts}>150</Text>
          </View>
          <View style={{width:'50%'}}>
            <Text style={styles.texts}>Total</Text>
            <Text style={styles.texts}>$750</Text>
          </View>
        </View>
        
          <ButtomGradient style={{
            borderRadius: 50,
            padding: 10,
          }}>
              <TouchableOpacity>
                <Text style={styles.text_buttom}>
                  Reservar
                </Text>
              </TouchableOpacity>
          </ButtomGradient>
        </View>
       
      </GradientLayout>

    
  </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040521',
    alignItems: 'center',
  },
  title:{
    color: Color.white,
    fontSize: 20,
    marginBottom: 20
  },
  containerAmount:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.blueDeep,
    width: '60%',
   
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-end',

  },
  wrapper_amount:{
      borderRightWidth: 1, 
      borderRightColor: Color.white, 
      width:'50%'
  },
  text_total:{
      color: Color.white,
      fontSize: 14,
      fontFamily: 'overpassMedium',
  },
  texts:{
      color: Color.white, textAlign:'center',
      fontSize: 12,
      fontFamily: 'overpassLigth',
  },
  separator:{
      marginVertical: 10, 
      borderBottomWidth: 0.3, 
      borderBottomColor:Color.blueLight,
      width: '100%',
  },
  wrapper_buttom:{
    flexDirection: 'row',
    paddingHorizontal: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15
  },
  text_buttom:{
      color: Color.white, 
      textAlign:'center',
      fontSize: 18,
      fontFamily: 'overpassMedium',
      paddingHorizontal: 12
  }
})