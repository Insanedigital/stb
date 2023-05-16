import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { GradientLayout } from '../../components/layout/GradientLayou'
import { Input } from '../../components/Input/Input'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../navigation/stacks/AuthStackNavigation'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { ButtomGradient } from '../../components/button/ButtomGradient'
import { Color } from '../../styles/Color'

type Props = NativeStackNavigationProp<AuthStackParamList>
export const FogotPasswordScreen = () => {

  const navigation = useNavigation<Props>()

  return (
    <SafeAreaView style={styles.container}>
        <GradientLayout 
          style={{
            width:'100%',
            flex: 1,
          }}
        >
           <TouchableOpacity
              style={styles.backButton} 
              onPress={() => navigation.navigate('ResetPassword')}
            >
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>

            <View style={styles.constainerImage}>
              <Image 
                source={require('../../../assets/LogoSTB.png')}
                alt='Logo'
                resizeMode='contain'
                style={styles.image}     
              />
            </View>
            <Input 
              Label='Password'
              placeholder='jhonDoe@example.com'
              style={styles.containerLabel} 
            />
            <View style={{marginTop: 30}}>
              <Input 
                Label='Confirmar Password'
                placeholder='jhonDoe@example.com'
                style={styles.containerLabel} 
              />
            </View>
            <View style={{width: '100%'}}>
                <ButtomGradient style={{
                  width: '60%',
                  marginVertical: 32,
                  alignSelf:'center',
                  justifyContent: 'center',
                  borderRadius: 25,
                  padding: 10,
                }}>
                  <TouchableOpacity style={styles.button} onPress={() => console.log('ForgotPassword')}>
                      <Text style={styles.buttonText}>
                        Enviar
                      </Text>
                  </TouchableOpacity>
                </ButtomGradient>
            </View>
          </GradientLayout>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  backButton: {
    position: 'relative',
    paddingTop: 30,
    paddingHorizontal: 30,
    zIndex: 1,
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
    position: 'absolute',
    borderRadius: 5,
    bottom: 50,
    left: 50,
    zIndex:1
  },
  button:{
    width:'100%'
  },
  buttonText:{
    color:Color.white,
    fontSize: 18,
    textAlign: 'center',
    //fontFamily:'Overpass-Regular'
  },
})