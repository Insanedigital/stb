import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Color } from '../../../styles/Color';
import { ButtomGradient } from '../../../components/button/ButtomGradient';
import { RootStackParamList } from '../../../navigation/stacks/StackNavigation';
import { GradientLayout } from '../../../components/layout/GradientLayou'


type PropsNavigation = NativeStackNavigationProp<RootStackParamList>


interface IProps {
    setPage: () => void;
    back: () => void;
}


export const PageThree = ({setPage, back}: IProps) => {

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
                source={require('../../../../assets/welcome/PageThree.png')}
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
            <View style={styles.contentTutorial}>
            <Text style={styles.title}>
                Reserva tus productos
            </Text>
            <Text style={styles.paragraph}>
                Escoge el producto que quieres reservar, define el color, la cantidad haz clic en reservar y listo.
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
            </View>
        </GradientLayout>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Color.bgMain,
    },
    contentTutorial:{
        paddingHorizontal: 20,
      
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
       width: '65%',
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
        fontSize: 18,
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