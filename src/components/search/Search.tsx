import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

interface Props {
  size?: number | string;
}
export const Search = ({size}: Props) => {
  return (
    <View style={[styles.container, {width: size}]}>
      <TextInput 
        style={styles.input} 
        placeholder='Gorra azul' 
      />
      <TouchableOpacity>
        <Ionicons name="search-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '70%',
        height: 40,
        borderRadius: 25,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    input: {
        width: '90%',
    }
})