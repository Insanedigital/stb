import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { GradientLayout } from '../../components/layout/GradientLayou';
import PagerView from 'react-native-pager-view';
import { PageOne } from './components/PageOne';
import { PageTwo } from './components/PageTwo';
import { PageThree } from './components/PageThree';
import { PageFour } from './components/PageFour';

export const TutorialScreen = () => {
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
      <StatusBar style='auto' />
      <PagerView style={styles.viewPager} initialPage={0}>
        
        <View style={styles.page} key="1">
          <PageOne />
        </View>
        <View style={styles.page} key="2">
          <PageTwo />
        </View>
        <View style={styles.page} key="3">
          <PageThree />
        </View>
        <View style={styles.page} key="4">
          <PageFour />
        </View>
      </PagerView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e8e8',
  },
  viewPager: {
    height: '100%',	
    width: '100%',
    position: 'relative',
  },
  page: {
    height: '100%',	
  },
})