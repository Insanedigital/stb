import { StyleSheet, View } from 'react-native'
import React, {useRef, useState} from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import PagerView  from 'react-native-pager-view';

import { PageOne } from './components/PageOne';
import { PageTwo } from './components/PageTwo';
import { PageThree } from './components/PageThree';
import { PageFour } from './components/PageFour';


export const TutorialScreen = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const insets = useSafeAreaInsets();
  const pagerRef = useRef<PagerView>(null);



  const handleNext = () => {
    if (currentPage <= 1) {
      pagerRef.current?.setPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      pagerRef.current?.setPage(currentPage - 1);
    }
  };

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
      <PagerView 
        style={styles.viewPager} 
        initialPage={0} 
        pageMargin={5}
        ref={pagerRef}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
      >
        
        <View style={styles.page} key="1">
          <PageOne setPage={handleNext}/>
        </View>
        <View style={styles.page} key="2">
          <PageTwo setPage={handleNext} back={handlePrev}/>
        </View>
        <View style={styles.page} key="3">
          <PageThree setPage={handleNext} back={handlePrev}/>
        </View>
        <View style={styles.page} key="4">
          <PageFour back={handlePrev}/>
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