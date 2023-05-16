import React, { useCallback, useEffect, useState } from 'react'
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  ActivityIndicator } from 'react-native'


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
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'
import stabApi from '../../store/axios.config'
import { FlatList } from 'react-native-gesture-handler'
import DATA from '../../data/products.json'
import { FlatlistProducts } from '../../components/flatlistProducts/FlatlistProducts'
import { Color } from '../../styles/Color'
import { CardColumn } from '../../components/card/CardColumn'


export interface Product {
  qty_expected: number;
  item_id: number;
  container_id: number;
  family: string;
  color: string;
  name: string;
  price_vip: number;
  price_esp: number;
  price_container: number;
  minimum_sales_units: number;
  container_number: string;
  arrival_warehouse: string;
  status: string;
  type: string;
  images: string;
  size: string;
}

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>



export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const [buttonIntransit, setButtonIntransit] = useState(false);
  const [buttonPromotion, setButtonPromotion] = useState(false);
  const [buttonBestsellers, setButtonBestsellers] = useState(false);
  const [buttonCustom, setButtonCustom] = useState(false);
  const [buttonDirection, setButtonDirection] = useState(false);
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [numColumns, setNumColumns] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);

 /*  const getProducts = async () => {
    setLoading(true)
    try {
      const response: any = await stabApi.get('containerToApp')
      setLoading(false)
      return response
      //console.log(response)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

 

  useEffect(() => {
    
      const results: any = getProducts()
      setProducts(results)
      },
  []) */
    
 

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

  const toggleColumns = () => {
    setNumColumns(numColumns === 1 ? 2 : 1);
  };

  const groupedProducts: Record<string, Product[]>= DATA.products.reduce((acc: any, product) => {
    const type = product.type;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(product);
      return acc;
  }, {});

  const productsToRender = selectedType ? groupedProducts[selectedType] : DATA.products;

  if(loading){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#040521'}}>
        <ActivityIndicator size='large' color={Color.blueLight}/>
      </View>
    )
  }

  return (
    <View style={[styles.container,
      {
        paddingTop: insets.top,
      }
    
    ]}>
        <StatusBar  style='light'/>
        <ScrollView style={{width:'100%'}}>
          <Header title='Home'/>
          <View style={[styles.section_search, {paddingHorizontal: 10}]}>
          <ButtonSetting 
           types={Object.keys(groupedProducts)}
           selectedType={selectedType}
           onChange={(type) => setSelectedType(type)}
          />
            <Search size={'67%'}/>
          <ButtonDirection title='Vista' state={buttonDirection} onPress={handleChangeDirectionLayout} />
        </View>
        <View style={[styles.section_nav, {paddingHorizontal: 10}]}> 
          <ButtonFilter title='En tránsito' source={require('../../../assets/barco.png')} state={buttonIntransit} onPress={handleButtonIntransit} />
          <ButtonFilter title='Promoción' source={require('../../../assets/porcentaje.png')} state={buttonPromotion} onPress={handleButtonPromotion} />
          <ButtonFilter title='Más Vendidos' source={require('../../../assets/destellos.png')} state={buttonBestsellers} onPress={handleButtonBestsellers} />
          <ButtonFilter title='Personalizar' source={require('../../../assets/varita-magica.png')} state={buttonCustom} onPress={handleButtonCustom} />
        </View>
       
        <View style={styles.section_products}>

        {
          Object.entries(groupedProducts).map(([type, products]) => 
            selectedType === type ? (
            buttonDirection ? (
              <CardColumn 
                key={`cardColumn-${type}`}
                type={type} 
                statusText={products[0]?.arrival_warehouse} 
                image={products[0]?.images} 
                item_id={products[0]?.item_id.toLocaleString()}
                stockColor={products}
              /> 
            ) : (
              <Card 
                key={`card-${type}`}
                type={type} 
                statusText={products[0]?.arrival_warehouse} 
                image={products[0]?.images} 
                item_id={products[0]?.item_id.toLocaleString()}
                stockColor={products}
              />
            )
          ) : buttonDirection ? (
            <CardColumn 
              key={`cardColumn-${type}`}
              type={type} 
              statusText={products[0]?.arrival_warehouse} 
              image={products[0]?.images} 
              item_id={products[0]?.item_id.toLocaleString()}
              stockColor={products}
            /> 
          ) : (
            <Card 
              key={`card-${type}`}
              type={type} 
              statusText={products[0]?.arrival_warehouse} 
              image={products[0]?.images} 
              item_id={products[0]?.item_id.toLocaleString()}
              stockColor={products}
            />
          ))
        } 

        </View>
        </ScrollView>
    </View>
  )
}

