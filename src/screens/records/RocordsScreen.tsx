import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { ButtonSetting } from '../../components/buttonSetting/ButtonSetting';
import { Search } from '../../components/search/Search';
import { Header } from '../../components/header/Header';
import { CardHistory } from './component/CardHistory';
import DATA from '../../data/orders.json';

export interface Order {
  id: number
  customer_id: number
  date_created: string
  item_qty: number
  payment_status: string
  stage: string
  order_number: string
  amount: number
  seller_name: string
  customer_name: string
  items: Item[]
}

export interface Item {
  item_id: number
  item_name: string
  qty: number
  price: number
}


export const RecordsScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container,
      {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }    
    ]}>
       <StatusBar style='light'/>
      <Header title='Historial'/> 
      <View style={styles.section_search}>
        <Search size={'80%'}/>
        <ButtonSetting types={['intransit', 'promotion', 'bestsellers', 'custom']}/>
      </View>
      <ScrollView style={styles.section_content}>
       {
          DATA.orders.map((order: Order) => (
            <CardHistory 
              key={order.id}
              id={order.id}
              customer_id = {order.customer_id}
              date_created={order.date_created} 
              item_qty = {order.item_qty}
              payment_status={order.payment_status}
              stage={order.stage} 
              order_number={order.order_number}
              amount={order.amount}
              seller_name={order.seller_name}
              customer_name={order.customer_name}
              items={[
                {
                    item_id: order.items[0].item_id,
                    item_name: order.items[0].item_name,
                    qty: order.items[0].qty,
                    price: order.items[0].price 
                }
              ]}
            
            />
          ))
       }
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040521',
    alignItems: 'center',
  },
  section_search: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20
  },
  section_content: {
    marginTop: 10,
    paddingHorizontal: 12,
    width: '100%',
  }
})