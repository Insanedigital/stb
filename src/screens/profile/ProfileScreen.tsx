import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { 
  Entypo, 
  SimpleLineIcons, 
  FontAwesome5, 
  MaterialCommunityIcons, 
  AntDesign, 
  FontAwesome } from '@expo/vector-icons';

import { Input } from '../../components/Input/Input'
import { Header } from '../../components/header/Header'
import { Color } from '../../styles/Color'
import { ButtomGradient } from '../../components/button/ButtomGradient'
import DATA from '../../data/users.json'





export const ProfileScreen = () => {

  const user = DATA.users.find(user => user.id === 1)

  const insets = useSafeAreaInsets();

  const [fisrtsName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneAux, setPhoneAux] = useState('')
  const [address, setAddress] = useState('')

  
  const [fisrtsNameIsDisabled, setFirstNameIsDisabled] = useState(false)
  const [emailIsDisabled, setEmailIsDisabled] = useState(false)
  const [phoneIsDisabled, setPhoneIsDisabled] = useState(false)
  const [phoneAuxIsDisabled, setPhoneAuxIsDisabled] = useState(false)
  const [addressIsDisabled, setAddressIsDisabled] = useState(false)

  
  const [fontsLoaded] = useFonts({
    overpassMedium: require('../../../assets/fonts/Overpass-Medium.ttf'),
    overpassRegular: require('../../../assets/fonts/Overpass-Regular.ttf'),
    overpassLight: require('../../../assets/fonts/Overpass-Light.ttf'),
  })

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  useEffect(() => {
    if(user){
      setFirstName(user?.username)
      setEmail(user?.email)
      setPhone(user?.phone)
      setFirstNameIsDisabled(true)
      setEmailIsDisabled(true)
      setPhoneIsDisabled(true)
    }
  }, [user])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null
  }

  return (
    <View 
      onLayout={onLayoutRootView}
      style={[styles.container, {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
      }]} 
    >
      
      <StatusBar style='light'/>
      <Header title='Mi Perfil'/>
     <ScrollView>
        <View style={styles.constainerUser}>
          <View style={{position: 'relative'}}>
          <TouchableOpacity>
            <Entypo name="edit" 
              size={14} 
              color={Color.blueDark}
              style={[styles.icon_button, {
                backgroundColor: Color.whiteLight,
                zIndex: 999,
                right: -5,
                top: 5
              }]} 
            />
          </TouchableOpacity>
            <FontAwesome name="user-circle" size={88} color="white" style={{zIndex: -1}} />
          </View>
          <View>
            <Text style={styles.text_user}>
                User {user?.id}
            </Text>
            <View style={styles.wrapper_status}>
              <SimpleLineIcons 
                name="diamond" 
                size={21} 
                color='#445078' 
                style={{backgroundColor: '#CFDAFF', borderRadius: 100, padding: 5}}
              />
              <Text style={styles.texts_blue}>{user?.type}</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerInfo}>
          <View style={styles.icon}>
            <FontAwesome5 name="building" size={24} color={Color.blueLight} />
            <Text style={styles.texts_blue}>{user?.enterprise}</Text>
          </View>
          <View style={styles.icon}>
          <MaterialCommunityIcons name="email-outline" size={24} color={Color.blueLight} />
            <Text style={styles.texts}>{user?.email}</Text>
          </View>
          <View style={styles.icon}>
          <AntDesign name="mobile1" size={24} color={Color.blueLight} />
            <Text style={styles.texts}>{user?.phone}</Text>
          </View>
          <View style={styles.icon}>
          <AntDesign name="enviromento" size={24} color={Color.blueLight} />
            <Text style={[styles.texts, {width: '70%'}]}>Main Street, North Park 123, 12F Orchid</Text>
          </View>
          
        </View>
        <View style={styles.containerForm}>
          <View style={styles.containerInput}>
          <TouchableOpacity 
            onPress={() => setFirstNameIsDisabled(!fisrtsNameIsDisabled)}
            style={{zIndex: 1}} 
          >
            <Entypo name="edit" 
              size={14} 
              color={Color.blueDark}
              style={styles.icon_button} 
            />
          </TouchableOpacity>
         
            <Input 
              Label='Nombre' 
              onChangeText={setFirstName} 
              placeholder='Nombre'
              value={fisrtsName}
              style={styles.input}
              disabled={fisrtsNameIsDisabled}
            />
          </View>
          <View style={styles.containerInput}>
          <TouchableOpacity 
          onPress={() => setEmailIsDisabled(!emailIsDisabled)}
          style={{zIndex: 1}} 
          >
            <Entypo name="edit" 
              size={14} 
              color={Color.blueDark}
              style={styles.icon_button}
            />
          </TouchableOpacity>
          
          <Input 
            Label='E-mail'
            onChangeText={setEmail} 
            value={email}
            placeholder='E-mail'
            style={styles.input}
            disabled={emailIsDisabled}
           />
           </View>
           <View style={styles.containerInput}>
           <TouchableOpacity 
           onPress={() => setPhoneIsDisabled(!phoneIsDisabled)}
           style={{zIndex: 1}} 
           >
            <Entypo name="edit" 
              size={14} 
              color={Color.blueDark}
              style={styles.icon_button} 
            />
          </TouchableOpacity>
          <Input 
            Label='Celular' 
            onChangeText={setPhone} 
            value={phone}
            placeholder='Numero de Celular'
            style={styles.input}
            disabled={phoneIsDisabled}
          />
          </View>
          <View style={styles.containerInput}>
          <TouchableOpacity style={{zIndex: 1}} >
            <Entypo name="edit" 
              size={14} 
              color={Color.blueDark}
              style={styles.icon_button} 
            />
          </TouchableOpacity>
          <Input 
            Label='Opcional' 
            onChangeText={setPhoneAux} 
            value={phoneAux}
            placeholder='Numero de Celular Opcional'
            style={styles.input}
          />
          </View>
          <View style={styles.containerInput}>
          <TouchableOpacity style={{zIndex: 1}} >
            <Entypo name="edit" 
              size={14} 
              color={Color.blueDark}
              style={styles.icon_button} 
            />
          </TouchableOpacity >
          <Input 
            Label='Direccion' 
            onChangeText={setAddress}
            value={address} 
            placeholder='Direccion'
            style={styles.input}
          />
          </View>
        </View>
       {
        fisrtsNameIsDisabled || emailIsDisabled || phoneIsDisabled ? (
          <View style={styles.wrapper_buttom}>
          <ButtomGradient style={{
            width: '70%',
            borderRadius: 50,
            padding: 10,
          }}
          colors={['#687488', '#687488', '#687488']}>
              <TouchableOpacity>
                <Text style={[styles.text_buttom, {color: Color.grayLight}]}>
                  Guardar Cambios
                </Text>
              </TouchableOpacity>
          </ButtomGradient>
        </View>

        ): (
        <View style={styles.wrapper_buttom}>
          <ButtomGradient style={{
            width: '70%',
            borderRadius: 50,
            padding: 10,
          }}
          colors={['#030741', '#044A73', '#00C2FD' ]}
         >
              <TouchableOpacity>
                <Text style={styles.text_buttom}>
                  Guardar Cambios
                </Text>
              </TouchableOpacity>
          </ButtomGradient>
        </View>

        )
       }
        <View style={{width:'100%', marginTop: 40}}>
          <Text style={styles.link}>Cambiar contraseña</Text>
          <Text style={[styles.link, {marginTop: 30}]}>Términos y condiciones</Text>
          <Text style={[styles.link, {marginVertical: 20}]}>Política de privacidad</Text>
        </View>
     </ScrollView>
    </View>
  )
}
export const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#040521', 
    alignItems: 'center',
  },
  constainerUser: {
    flexDirection: 'row',
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 20
  },
  text_user: {
    color:Color.white, 
    fontSize: 18, 
    fontWeight:'700',
    fontFamily:'overpassMedium'
    
  },
  wrapper_status: {
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'flex-start',
    marginTop: 10,
    gap: 10
  },
  texts_blue:{
      color: Color.blueLight,
      fontSize: 12,
      fontFamily: 'overpassLight'
  },
  containerInfo:{
    backgroundColor: '#0B2440',
    width: '100%',
    height: 200,
    borderRadius: 15,
    padding: 20,
    gap: 10
  },
  texts:{
      color: Color.white,
      fontSize: 12,
      fontFamily: 'overpassLight'
  },
  icon:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    gap: 10
  },
  containerForm:{
    backgroundColor: '#0B2440',
    width: '100%',
    height: 450,
    borderRadius: 15,
    padding: 20,
    gap: 20,
    marginTop: 20
  },
  containerInput:{
    width: '100%',
    position: 'relative',
  },
  input:{
    backgroundColor:'#0B2440', 
    position: 'absolute', 
    borderRadius: 5,
    bottom: 50,
    left: 50,
    zIndex:1
  },
  wrapper_buttom:{
    alignItems: 'center',
    marginTop: 40, 
    width: '100%',
  },
  text_buttom:{
    color: Color.white, 
    textAlign:'center',
    fontSize: 18,
    fontFamily: 'overpassRegular'
  },
  link:{
    color: Color.white,
    textAlign:'right',
    textDecorationLine: 'underline',
    fontSize: 14,
    fontFamily: 'overpassRegular',
  },
  icon_button:{
    position: 'absolute',
    right: 10,
    top: -8,
    backgroundColor: Color.blueLight,
    borderRadius: 50,
    padding: 3,
    zIndex: 999
  }
})