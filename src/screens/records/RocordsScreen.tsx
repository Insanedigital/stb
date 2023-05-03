import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { ButtonSetting } from '../../components/buttonSetting/ButtonSetting';
import { Search } from '../../components/search/Search';
import { Header } from '../../components/header/Header';
import { CardHistory } from './component/CardHistory';


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
        <ButtonSetting />
      </View>
      <ScrollView style={styles.section_content}>
        <CardHistory />
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