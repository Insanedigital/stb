import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { GradientLayout } from '../../../components/layout/GradientLayou'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Color } from '../../../styles/Color';
import { ButtomGradient } from '../../../components/button/ButtomGradient';

export const PageTwo = () => {
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
        <View style={styles.wrapper_image}>
            <Image 
                source={require('../../../../assets/welcome/PageTwo.png')}
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
                Modifica tu perfil
            </Text>
            <Text style={styles.paragraph}>
                Agrega tu información personal de una manera muy simple
            </Text>

            <View style={styles.actions}>
            <TouchableOpacity style={styles.ghost_button}>
                <Text style={[styles.text_button, { color:Color.blueLight, textAlign: 'left' }]}>
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
              <TouchableOpacity>
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
    wrapper_image:{
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
       maxWidth: '100%',
       width: '90%',
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