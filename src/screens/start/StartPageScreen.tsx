import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { GradientLayout } from '../../components/layout/GradientLayou';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '../../navigation/stacks/AuthStackNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

type Props = NativeStackNavigationProp<AuthStackParamList>

export const StartPageScreen = () => {
  const {navigate} = useNavigation<Props>()

  const [fontsLoaded] = useFonts({
    overpassRegular: require('../../../assets/fonts/Overpass-Regular.ttf'),
  })

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null
  }

  return (
    <View style={styles.container} onLayout={ onLayoutRootView }>
      <GradientLayout
        style={{
          width:'100%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
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
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigate('Login')}
          >
              <Text style={[styles.title, {fontFamily: 'overpassRegular'}]}>Ingresar</Text>
          </TouchableOpacity>
      </GradientLayout>
    </View>
  )
}