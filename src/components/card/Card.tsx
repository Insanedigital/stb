import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { Color } from '../../styles/Color'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../../navigation/stacks/StackNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Product } from '../../screens/home/HomeScreen';

export interface CardProps {
  type: string;
  statusText: string;
  stockColor?: Product[];
  onPress?: () => void;
  image?: string
  item_id: string
}

type NavigationProps = NativeStackNavigationProp<RootStackParamList>



export const Card = ({type, statusText, image, onPress, item_id, stockColor}: CardProps) => {
  const MAX_COLORS_TO_SHOW = 5;

    const [fontsLoaded] = useFonts({
      overpassMedium: require('../../../assets/fonts/Overpass-Medium.ttf'),
      overpassLigth: require('../../../assets/fonts/Overpass-Light.ttf'),
    })

    const navigation = useNavigation<NavigationProps>()

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
      <View style={{paddingHorizontal: 5, width: '40%'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Product',  {id: item_id})}>
        <Image 
          source={{
            uri: image,
            method: 'POST',
            headers: {
              Pragma: 'no-cache',
            },
          }}
          alt={type}
          resizeMode='contain'
          style={styles.image}
        />
      </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('Product',  {id: item_id})}>
          <Text style={styles.title}>{type}</Text>
          <Text style={styles.paragraph}>Colores</Text>
        </TouchableOpacity>
        <View style={styles.colores}>
          {
            stockColor?.slice(0, MAX_COLORS_TO_SHOW)?.map((product, index) => (
              <View key={index} style={{
                backgroundColor: product.color, 
                width: 12, 
                height: 12, 
                borderRadius: 50,
                borderColor: 'gray',
                borderWidth: 0.5
              }}/>
            ))}
             {stockColor && stockColor.length > MAX_COLORS_TO_SHOW && (
              <Text style={styles.moreColorsText}>+{stockColor.length - MAX_COLORS_TO_SHOW} más</Text>
            )}
        </View>
      </View>
      <View style={styles.status}>
          <Text style={styles.statusText}>Entrega estimada: {statusText}</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
    width: 100,
    height: 100,
   
  },
  content: {
    width: '60%',
    height: 90,
    marginBottom: 10,
    justifyContent: 'flex-start',
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
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 190,    
  },
  statusText:{
    fontSize: 10,
    color: Color.dark,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'overpassLigth',
  },
  moreColorsText:{
    fontSize: 10,
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