import { View, Image, Dimensions, ScrollView, StyleSheet, NativeSyntheticEvent } from 'react-native'
import React, { useState } from 'react'

const { width } = Dimensions.get('window');
const images = [
  '../../../assets/05.jpg',
  'https://via.placeholder.com/300x150',
  'https://via.placeholder.com/300x150',
  'https://via.placeholder.com/300x150',
  'https://via.placeholder.com/300x150',
  'https://via.placeholder.com/300x150',
  'https://via.placeholder.com/300x150',
];

export const Slider = () => {
const [activeIndex, setActiveIndex] = useState(0);
const handleImageChange = (event: any) => {
const { contentOffset } = event.nativeEvent;
const index = Math.round(contentOffset.x / width);
    setActiveIndex(index);
};
  return (
    <View>
     
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleImageChange}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{ width, height: 300 }}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})
{/* <View style={{ flexDirection: 'row' }}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,
              marginHorizontal: 10,
              opacity: index === activeIndex ? 1 : 0.5,
            }}
          />
        ))}
      </View> */}