import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'


import { Header } from '../../components/header/Header'
import { Search } from '../../components/search/Search'
import { ButtonSetting } from '../../components/buttonSetting/ButtonSetting'
import { ButtonFilter } from '../../components/buttonFilter/ButtonFilter'
import { ButtonDirection } from '../../components/buttonDirection/ButtonDirection'
import { Card } from '../../components/card/Card'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/stacks/StackNavigation'
import { styles } from './styles'
import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = NativeStackScreenProps<RootStackParamList, 'THome'>

export const HomeScreen = ({navigation}: Props) => {
  const insets = useSafeAreaInsets();
  const [buttonIntransit, setButtonIntransit] = useState(false);
  const [buttonPromotion, setButtonPromotion] = useState(false);
  const [buttonBestsellers, setButtonBestsellers] = useState(false);
  const [buttonCustom, setButtonCustom] = useState(false);
  const [buttonDirection, setButtonDirection] = useState(false);

  const handleButtonIntransit = () => {
    setButtonIntransit(true);
    setButtonPromotion(false);
    setButtonBestsellers(false);
    setButtonCustom(false);
  };

  const handleButtonPromotion = () => {
    setButtonPromotion(true);
    setButtonIntransit(false);
    setButtonBestsellers(false);
    setButtonCustom(false);
  };

  const handleButtonBestsellers = () => {
    setButtonBestsellers(true);
    setButtonIntransit(false);
    setButtonPromotion(false);
    setButtonCustom(false);
  }

  const handleButtonCustom = () => {
    setButtonCustom(true);
    setButtonBestsellers(false);
    setButtonIntransit(false);
    setButtonPromotion(false);
  }

  const handleChangeDirectionLayout = () => {
    setButtonDirection(!buttonDirection);
  }

  
  return (
    <View style={[styles.container,
      {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }
    
    ]}>
        <StatusBar  style='light'/>
        <ScrollView style={{width:'100%'}}>
        <Header title='Home'/>
        <View style={styles.section_search}>
          <ButtonSetting />
            <Search size={'67%'}/>
          <ButtonDirection title='Vista' state={buttonDirection} onPress={handleChangeDirectionLayout} />
        </View>
       
      
      
        <View style={styles.section_nav}> 
          <ButtonFilter title='En tránsito' source={require('../../../assets/barco.png')} state={buttonIntransit} onPress={handleButtonIntransit} />
          <ButtonFilter title='Promoción' source={require('../../../assets/porcentaje.png')} state={buttonPromotion} onPress={handleButtonPromotion} />
          <ButtonFilter title='Más Vendidos' source={require('../../../assets/destellos.png')} state={buttonBestsellers} onPress={handleButtonBestsellers} />
          <ButtonFilter title='Personalizar' source={require('../../../assets/varita-magica.png')} state={buttonCustom} onPress={handleButtonCustom} />
        </View>
        <View style={styles.section_products}>
          
          <Card 
            title='Gorra Cerrada' 
            source={require('../../../assets/01.jpg')}
            statusText='Entrega estimada: 25 ene. 2023'
            onPress={() => navigation.navigate('Product', {id: '1', name: 'Gorra Cerrada'})}
          />
          <Card 
            title='Gorra Abierta' 
            source={require('../../../assets/02.jpg')}
            statusText='Entrega estimada: 4 abr. 2023'
            onPress={() => navigation.navigate('Product', {id: '2', name: 'Gorra Verde'})}
          />
          <Card 
            title='Gorra Con Diseño' 
            source={require('../../../assets/03.jpg')}
            statusText='Entrega estimada: 24 abr. 2023'
            onPress={() => navigation.navigate('Product', {id: '3', name: 'Sombrero Negro'})}
          />
          <Card 
            title='Sombrero Negro'  
            source={require('../../../assets/04.jpg')}
            statusText='Entrega estimada: 5 may. 2023'
            onPress={() => navigation.navigate('Product', {id: '4', name: 'Gorra Morada'})}
          />
           <Card 
            title='Gorra Nike' 
            source={require('../../../assets/04.jpg')}
            statusText='Entrega estimada: 5 may. 2023'
            onPress={() => navigation.navigate('Product', {id: '5', name: 'Gorra Abierta'})}
          />
           <Card 
            title='Gorra Nike' 
            source={require('../../../assets/04.jpg')}
            statusText='Entrega estimada: 5 may. 2023'
            onPress={() => navigation.navigate('Product', {id: '6', name: 'Gorra Roja'})}
          />


        </View>
        </ScrollView>
    </View>
  )
}

