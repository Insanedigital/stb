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
import DATA from '../../data/products.json';

const colors = [
  { id: '1', name: 'red' },
  { id:' 2', name: 'blue' },
  { id: '3', name: 'yellow' },
  { id: '4', name: 'green' },
  { id: '5', name: 'purple' },
];

const GORRA_ABIERTA = 'Gorra abierta ajustable, con visor curvo.'
const GORRA_CUBANA = 'CU: Gorra cubana ajustable, corte de corona plana y visor curvo.'
const GORRA_MISISIONERA = 'MIS: Gorra misionera cerrada, ajuste elástico, con visor de protección solar y capa protectora trasera.'
const SOMBRERO_CERRADO = 'SOM: sombrero cerrado, ajuste elástico, con visor de protección solar y capa protectora trasera.'
const GORRA_CERRADA = 'GROD: Gorra abierta ajustable, con diseño en distintas aplicaciones: bordados, estampados o placa'
const VISOR_PLANO = 'SN: Gorra con visor plano.'
const VISOR_SOLAR = 'VS: Visera solar ajustable, con visor curvo.'
const SNFX = 'XF: Gorra beisbolera cerrada con ajuste elástico y visor curvo.'
const GORRA_BEISBOLERA = 'GB: Gorra beisbolera cerrada con ajuste elástico y visor curvo.'
const VISOR_CURVO = 'VC: Visera solar ajustable, con visor curvo.'




type Props = NativeStackScreenProps<RootStackParamList, 'Product'>

export const ProductScreen = ({navigation, route}: Props) => {



  const {id} = route.params

  const product = DATA.products.find(item => item.item_id === parseInt(id)) 


  const [selectedColor, setSelectedColor] = useState('');
  const [description, setDescription] = useState('');
  
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

  useEffect(() => {
    getDescription()
  }, [product?.type])

  

  const getDescription = () => {
    if(product?.type.toLocaleLowerCase() === 'Gorra Abierta'){
      setDescription(GORRA_ABIERTA)
    } else if(product?.type.toLocaleLowerCase() === 'gorra cubana'){
      setDescription(GORRA_CUBANA)
    } else if(product?.type.toLocaleLowerCase() === 'gorra misionera'){
      setDescription(GORRA_MISISIONERA)
    } else if(product?.type.toLocaleLowerCase() === 'sombrero cerrado'){
      setDescription(SOMBRERO_CERRADO)
    } else if(product?.type.toLocaleLowerCase() === 'gorra cerrada'){
      setDescription(GORRA_CERRADA)
    } else if(product?.type === 'Gorra Plana'){
      setDescription(VISOR_PLANO)
    } else if(product?.type.toLocaleLowerCase() === 'visor solar'){
      setDescription(VISOR_SOLAR)
    } else if(product?.type.toLocaleLowerCase() === 'snfx'){
      setDescription(SNFX)
    } else if(product?.type === 'Gorra Beisbolera'){
      setDescription(GORRA_BEISBOLERA)
    } else if(product?.type.toLocaleLowerCase() === 'visor curvo'){
      setDescription(VISOR_CURVO)
    }
   }
 

    
    


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
          source={{uri: product?.images}}
          alt={product?.name}
          resizeMode='contain'
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
                <Text style={styles.title}>{product?.type}</Text>
                <Text style={styles.code}>Código: 117247916</Text>
              </View>
              <View style={styles.description}>
                <Text style={styles.desc}>
                  {description && description}
                </Text>
                <Text style={styles.size}>
                  Material: Poliéster
                </Text>
                <View style={{ flexDirection: 'row' , alignItems: 'center', justifyContent:'space-between'}}>
                  <Text style={styles.size}>{product?.size}</Text>
                  <Text style={styles.containerPrice}>
                    P. unidad {' '}<Text style={styles.price}>${product?.price_esp}</Text>
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
                    {product?.qty_expected} disponibles
              </Text>
              <View style={styles.count}>
                <Text style={styles.size}>Cantidad</Text>
                <NumericInput 
                  initialValue={product?.minimum_sales_units || 50}
                  onValueChange={(value) => console.log(value)}
                />
              </View>
              <View style={{paddingHorizontal: 20}}>
                <View style={styles.date_delivery}>
                  <Text style={styles.text_delivery}>
                    Fecha estimada de entrega: {product?.arrival_warehouse}
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
    width: '60%',
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