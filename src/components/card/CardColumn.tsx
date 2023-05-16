import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CardProps } from './Card'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/stacks/StackNavigation'
import { Color } from '../../styles/Color'

type NavigationProps = NativeStackNavigationProp<RootStackParamList>

const MAX_COLORS_TO_SHOW = 5;

export const CardColumn = ({item_id, statusText, image, type, onPress, stockColor}: CardProps) => {
    const navigation = useNavigation<NavigationProps>()
  return (
    <View style={styles.container}>
    <View style={{ width: 140, height: 145}}>
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
    </View>
    <View style={{position: 'relative', width: '100%', paddingLeft: 10}}>
      <TouchableOpacity onPress={() => navigation.navigate('Product',  {id: item_id})}>
        <Text style={styles.title}>{type}</Text>
        <Text style={styles.paragraph}>Colores</Text>
      </TouchableOpacity>
      <View style={styles.colores}>
        {
          stockColor?.slice(0, MAX_COLORS_TO_SHOW)?.map((product) => (
            <View 
            key={product.item_id} 
            style={{
              backgroundColor: product.color, 
              width: 12, 
              height: 12, 
              borderRadius: 50,
              borderColor: 'gray',
              borderWidth: 0.5,
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
        width: '49%',
        maxWidth: 175,
        height: 250,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
    },
    image: {
        width: 140,
        height: 135,
    },
      title:{
        fontSize: 15,
        fontFamily: 'overpassMedium',
        fontWeight: '800',
        color: Color.primary
      },
      paragraph: {
        fontSize: 12,
        fontWeight: '400',
        color: '#889FF0',
        fontFamily: 'overpassLigth',
      },
      colores:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        marginVertical: 5,
      },
      status:{
        backgroundColor: Color.grayLight,
        borderRadius: 15,
        width: '100%',
        maxWidth: 175, 
        paddingHorizontal: 5,
        position: 'absolute',
        bottom: 0   
      },
      statusText:{
        fontSize: 10,
        color: Color.dark,
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: 'overpassLigth',
      },
      moreColorsText:{
        fontSize: 8,
      }
})