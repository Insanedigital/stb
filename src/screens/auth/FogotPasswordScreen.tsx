import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GradientLayout } from '../../components/layout/GradientLayou'
import { Input } from '../../components/Input/Input'

export const FogotPasswordScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <GradientLayout 
          style={{
            width:'100%',
            flex: 1,
          }}
        >

            <View style={styles.constainerImage}>
              <Image 
                source={require('../../../assets/LogoSTB.png')}
                alt='Logo'
                resizeMode='contain'
                style={styles.image}     
              />
            </View>
            <Input 
              Label='Email'
              placeholder='jhonDoe@example.com'
              style={styles.containerLabel} 
            />
          </GradientLayout>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  constainerImage:{
    width: '100%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    maxWidth: '100%',
  }, 
  containerLabel:{
    backgroundColor:'#030741', 
    width:'15%',
    position: 'absolute',
    borderRadius: 5,
    bottom: 50,
    left: 50,
    zIndex:1
  },
})