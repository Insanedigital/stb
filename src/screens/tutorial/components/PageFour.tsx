import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { GradientLayout } from '../../../components/layout/GradientLayou'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';

import { Color } from '../../../styles/Color';
import { ButtomGradient } from '../../../components/button/ButtomGradient';
import { RootStackParamList } from '../../../navigation/stacks/StackNavigation';


type PropsNavigation = NativeStackNavigationProp<RootStackParamList>
interface IProps {
    back: () => void;
}

export const PageFour = ({back}: IProps) => {

    const navigation = useNavigation<PropsNavigation>()

    const [fontsLoaded] = useFonts({
        overpassMedium: require('../../../../assets/fonts/Overpass-Medium.ttf'),
        overpassRegular: require('../../../../assets/fonts/Overpass-Regular.ttf'),
        overpassLigth: require('../../../../assets/fonts/Overpass-Light.ttf'),
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
    <View style={styles.container} onLayout={onLayoutRootView}>
          <TouchableOpacity
            style={styles.backButton} 
            onPress={() => back()}
        >
            <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.wrapper_image}>
            <Image 
                source={require('../../../../assets/welcome/PageFour.png')}
                alt='Welcome'
                resizeMode='contain'
                style={styles.image}
            />
        </View>
        <GradientLayout
            style={{
                width: '100%',
                height: '50%',
                borderTopRightRadius: 51,
                borderTopLeftRadius: 51,
                paddingHorizontal: 25,
                paddingTop: 18,
            }}
        >
            <Text style={styles.title}>
                Revisa tu historial de compras
            </Text>
            <Text style={styles.paragraph}>
                Escoge el contenedor de la cual quieres reservar y dale reservar
            </Text>

            <View style={styles.actions}>
            <TouchableOpacity style={styles.ghost_button} onPress={()=> navigation.navigate('Home')}>
                <Text style={[styles.text_button, { color:Color.blueLight, textAlign:'left' }]}>
                   Omitir
                </Text>
            </TouchableOpacity>

            <ButtomGradient style={{
              width: 170,
              marginVertical: 32,
              alignSelf:'center',
              justifyContent: 'center',
              borderRadius: 25,
              padding: 10,
            }}>
              <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                  <Text style={styles.text_button}>
                   Siguiente
                  </Text>
              </TouchableOpacity>
            </ButtomGradient>

            </View>
        </GradientLayout>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 999,
      },
    wrapper_image:{
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
       maxWidth: '100%',
       width: '75%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'overpassMedium',
        color: Color.white,
        textAlign: 'center',
        marginBottom: 30
    },
    paragraph: {
        fontSize: 14,
        textAlign: 'center',
        color: Color.blueLight,
        fontFamily: 'overpassRegular',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 30,
    },
    ghost_button: {
        width: '40%',
    },
    text_button: {
        color: Color.white,
        fontFamily: 'overpassRegular',
        fontSize: 18,
        textAlign: 'center',
    }
})