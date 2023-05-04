import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/stacks/StackNavigation'
import { AntDesign } from '@expo/vector-icons';
import { Color } from '../../styles/Color';
import { GradientLayout } from '../../components/layout/GradientLayou';
import { RadioButtons } from '../../components/checkRadioButton/RadionButton';
import { NumericInput } from '../../components/numericInput/NumericInput';
import { ButtomGradient } from '../../components/button/ButtomGradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const colors = [
  { id: '1', name: 'red' },
  { id:' 2', name: 'blue' },
  { id: '3', name: 'yellow' },
  { id: '4', name: 'green' },
  { id: '5', name: 'purple' },
];


type Props = NativeStackScreenProps<RootStackParamList, 'Product'>

export const ProductScreen = ({navigation, route}: Props) => {
  const [selectedColor, setSelectedColor] = useState('');
  
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

  function onPressRadioButton(color: string) {
    setSelectedColor(color); 
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <TouchableOpacity
        style={styles.backButton} 
        onPress={() => navigation.goBack()
      }>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.constainerImage}>
        <Image 
          source={require('../../../assets/05.jpg')}
          alt='Imagen del producto'
          resizeMode='cover'
          style={styles.image}
        /> 
      </View>
      <GradientLayout
        style={{
          width: '100%',
          height:'70%',
          borderTopRightRadius: 60,
          borderTopLeftRadius: 60, 
          paddingTop: 18,
        }}
      >
        <View style={styles.containerProduct}>
              <View style={styles.head}>
                <Text style={styles.title}>{route.params.name}-{route.params.id}</Text>
                <Text style={styles.code}>Código: 117247916</Text>
              </View>
              <View style={styles.description}>
                <Text style={styles.desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing anan elit...
                </Text>
                <Text style={styles.size}>
                  Material: Poliéster
                </Text>
                <View style={{ flexDirection: 'row' , alignItems: 'center', justifyContent:'space-between'}}>
                  <Text style={styles.size}>Talla: 54</Text>
                  <Text style={styles.containerPrice}>
                    P. unidad {' '}<Text style={styles.price}>$5.00</Text>
                  </Text>
                </View>
              </View>
              <View style={styles.section_color}>
                <Text style={[styles.size, {textAlign: 'left'}]}>Color</Text>
                <View style={styles.colors}>
                {
                  colors.map(color => (
                    <RadioButtons
                      key={color.id}
                      selected={selectedColor.includes(color.name)}
                      color={color.name}
                      id={color.id}
                      onPress={()=>onPressRadioButton(color.name)}
                      value={color.name}
                      borderColor={color.name}
                    />
                  ))
                }
                
                </View>
              </View>
              <Text style={[
                styles.desc, {
                  marginTop: 4, 
                  textAlign: 'right',
                  paddingHorizontal: 20
              }]}>
                    1000 disponibles
              </Text>
              <View style={styles.count}>
                <Text style={styles.size}>Cantidad</Text>
                <NumericInput 
                  initialValue={1}
                  onValueChange={(value) => console.log(value)}
                />
              </View>
              <View style={{paddingHorizontal: 20}}>
                <View style={styles.date_delivery}>
                  <Text style={styles.text_delivery}>
                    Fecha estimada de entrega: 25 ene. 2023
                  </Text>
                </View>
              </View>
            <View style={styles.action_price}>
              <View style={{
                  flexDirection: 'row',
                  justifyContent:'space-between',
                  alignItems: 'center', 
                  paddingHorizontal: 13,
                  height: 85,
              }}>
                <Text style={{
                      color:Color.blueLight, 
                      fontFamily: 'overpassRegular'
                    }}>P. total:  
                    <Text style={styles.text_price}>  $250.00</Text>
                  </Text>
                  <ButtomGradient style={{
                    width: '55%',
                    borderRadius: 50,
                    padding: 10,
                  }}>
                    <TouchableOpacity>
                      <Text style={{
                          color: Color.white, 
                          textAlign: 'center',
                          fontWeight: 'bold',
                          fontFamily: 'overpassRegular',
                        }}>
                          Agregar al carrito
                      </Text>
                    </TouchableOpacity>
                  </ButtomGradient>
              </View>
            </View>
        </View>
      </GradientLayout>

    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.white
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 999,
  },
  constainerImage:{
    width: '100%',
    height: '35%',
  },
  image: {
    width: '75%',
    maxWidth: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  containerProduct: {
    width: '100%',
    height: '90%',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    color: Color.white,
    fontFamily: 'overpassMedium',
  },
  code:{
    fontSize: 12,
    color: Color.grayLight,
    fontFamily: 'overpassLigth',
    fontWeight: '100',
  },
  description: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  desc:{
    fontSize: 14,
    color: Color.blueLight,
    fontFamily: 'overpassRegular',
  },
  size:{
    fontSize: 14,
    color: Color.whiteLight,
    marginVertical: 2,
    fontFamily: 'overpassRegular',
  },
  containerPrice:{
    fontSize: 12,
    color: Color.blueLight,
    textAlign: 'right',
    fontFamily: 'overpassLigth',
  },
  price:{
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.white,
    fontFamily: 'overpassMedium',
  },
  section_color: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  colors: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    width: '80%',
  },
  count: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    gap: 10,
    paddingHorizontal: 20,
  },
  date_delivery: {
    width: '100%',
    backgroundColor: '#CFDAFF',
    borderRadius: 50,
    marginTop: 10,
    padding: 5,
    
  },
  text_delivery:{
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'overpassLigth',
  },
  action_price: {
    width:'100%',
    justifyContent: 'center',
    backgroundColor: '#040521',
    height: 85,
    position: 'absolute',
    bottom: -55,
  },
  text_price:{
    fontSize: 15,
    fontWeight: 'bold',
    color: Color.white,
    fontFamily: 'overpassLigth',
  }
})