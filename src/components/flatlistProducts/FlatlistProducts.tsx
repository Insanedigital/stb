import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Card } from '../card/Card'
import DATA from '../../data/products.json'
import { ProductsAPIResponse } from '../../store/products/products.services'
import { TypeSelector } from './TypeSelector'

interface Product {
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

  interface Props{
    numColumns: number
  }

export const FlatlistProducts= ({numColumns}: Props) => {
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const groupedProducts: Record<string, Product[]>  = DATA.products.reduce((acc, product) => {
        const type = product.type;
        if (!acc[type]) {
          acc[type] = [];
        }
        acc[type].push(product);
        return acc;
      }, {});

      const data = selectedType ? groupedProducts[selectedType] : DATA.products;

      
  const rowHeight = 150 / numColumns + 20; // 20 is the margin between items
  const numRows = Math.ceil(data.length / numColumns);
  const height = rowHeight * numRows;


  return (
    <View style={{ overflow: 'scroll'}}>
        <FlatList
            data={data}
            numColumns={numColumns}
            renderItem={({ item }) => <Card type={item.type} statusText={item.arrival_warehouse} image={item?.images} item_id={item.item_id.toLocaleString()}/>}
            contentContainerStyle={{
                width: '100%',
                paddingHorizontal: 10
            }}
            ListHeaderComponent={
                <TypeSelector
                types={Object.keys(groupedProducts)}
                selectedType={selectedType}
                onChange={(type) => setSelectedType(type)}
                />
            }
        />
    </View>
  )
}

