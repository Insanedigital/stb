import { 
  ActivityIndicator,
  Alert,
  Image, 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text,
  TouchableOpacity, 
  View } from 'react-native'
import React, { useCallback, useContext, useEffect } from 'react'
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { GradientLayout } from '../../components/layout/GradientLayou'
import { Color } from '../../styles/Color'
import { ButtomGradient } from '../../components/button/ButtomGradient';
import { Input } from '../../components/Input/Input';

import { AuthStackParamList } from '../../navigation/stacks/AuthStackNavigation';
import { AuthContext } from '../../store/users/auth/authContext';



type Props = NativeStackNavigationProp<AuthStackParamList>

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('El email deber ser valido')
    .required('El email es requerido')
    .trim(),
  password: Yup.string()
    .min(8, 'La contraseña debe ser mayor o igual a 8 caracteres')
    .required('La contraseña es requerida')
    .trim(),
  terms: Yup.boolean()
    .oneOf([true], 'Debe aceptar los Términos y Condiciones')
    .required('Checkbox must be checked'),
  privacy: Yup.boolean()
    .oneOf([true], 'Debe aceptar las Politicas de Privacidad')
    .required('Checkbox must be checked'),
})



export const LoginScreen = () => {

  const {navigate} = useNavigation<Props>()

  const {signIn, loading, isLoggedIn} = useContext(AuthContext)

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
      privacy: false,
      terms: false,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, actions) => {  
      const {email, password} = values 
       await signIn(email, password)
       console.log(isLoggedIn)
       if(isLoggedIn){
        actions.resetForm({
          values: {
            email: '',
            password: '',
            privacy: false,
            terms: false,
          }
        })
      }
    }
  })
       /* await signIn(values.email, values.password);
        if(isLoggedIn){
          actions.resetForm({
            values: {
              email: '',
              password: '',
              privacy: false,
              terms: false,
            },
          })
          console.log('user',user)
        } else{
          console.log(error)
         Alert.alert('Error', error!, [ { text: 'Ok', onPress: () => null, style: 'cancel' }])
        } */
        
       

  const [fontsLoaded] = useFonts({
    overpassMedium: require('../../../assets/fonts/Overpass-Medium.ttf'),
    overpassRegular: require('../../../assets/fonts/Overpass-Regular.ttf'),
    overpassLigth: require('../../../assets/fonts/Overpass-Light.ttf'),
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

  const handleCheckboxChangeTerms = (value: boolean) => {
    handleChange('terms')(Boolean(value).valueOf().toString());
  };

  const handleCheckboxChangePrivacy = (value: boolean) => {
    handleChange('privacy')(Boolean(value).valueOf().toString());
  };


  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <GradientLayout 
          style={{
            width:'100%',
            flex: 1,
          }}
        >
          <ScrollView>
            <View style={styles.constainerImage}>
              <Image 
                source={require('../../../assets/LogoSTB.png')}
                alt='Logo'
                resizeMode='contain'
                style={styles.image}     
              />
            </View>
            <Input 
              Label='Usuario'
              placeholder='jhonDoe@example.com'
              value={values.email} 
              onChangeText={handleChange('email')} 
              onBlur={handleBlur('email')}
              style={styles.containerLabel}

            />
            {touched.email && errors.email && (<Text style={styles.text_error}>{errors.email}</Text>)}

            <Input 
              Label='Contraseña' 
              placeholder='********'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              marginTop={30}
              style={styles.containerLabel_2}

            />
           {touched.password && errors.password && (<Text style={styles.text_error}>{errors.password}</Text>)}

            <View style={styles.section_checkbox}>
              <Checkbox 
                style={styles.checkbox}  
                value={values.terms}
                color={Color.blueDark}
                onValueChange={() => handleCheckboxChangeTerms(values.terms)} 
              />
              <Text style={{color: Color.white, fontSize: 12, fontWeight:'400'}}>
                Aceptar {' '}
                <Text style={styles.paragraph}>términos y condiciones</Text>
              </Text>
            </View>
            {touched.terms && errors.terms && (<Text style={styles.text_error}>{errors.terms}</Text>)}
            <View style={styles.section_checkbox_2}>
              <Checkbox 
                style={styles.checkbox}
                color={Color.blueDark} 
                value={values.privacy}  
                onValueChange={() => handleCheckboxChangePrivacy(values.privacy)} 
              />
              <Text style={styles.paragraph}>Política de privacidad</Text>
            </View>
            {touched.privacy && errors.privacy && (<Text style={styles.text_error}>{errors.privacy}</Text>)}
            <ButtomGradient style={{
               width: '80%',
               marginVertical: 32,
               alignSelf:'center',
               justifyContent: 'center',
               borderRadius: 25,
               padding: 10,
            }}>
              <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                  <Text style={styles.buttonText}>
                   {loading? <ActivityIndicator size={'small'} color={Color.blueLight}/> : 'Ingresar'}
                  </Text>
              </TouchableOpacity>
            </ButtomGradient>
           <TouchableOpacity style={styles.button} onPress={() => navigate('ResetPassword')}>
            <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
           </TouchableOpacity>
        </ScrollView>
        </GradientLayout>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
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
    position: 'absolute',
    borderRadius: 5,
    bottom: 50,
    left: 50,
    zIndex:1
  },
  containerLabel_2:{
    backgroundColor:'#030741', 
    position: 'absolute',
    bottom: 50,
    left: 50,
    zIndex:1
  },
  
  section_checkbox:{
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 15
  },
  section_checkbox_2:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 15
  },
  checkbox:{
    borderColor: Color.grayDark,
    margin: 15,
    borderWidth: 0.9,
  },
  paragraph:{
    fontSize: 12,
    color: Color.whiteLight,
    textDecorationLine:'underline',
    fontWeight:'400',
    fontFamily:'overpassLigth'
  },
  
  button:{
    width:'100%'
  },
  buttonText:{
    color:Color.white,
    fontSize: 18,
    textAlign: 'center',
    fontFamily:'overpassMedium'
  },

  link:{
    color: Color.white, 
    fontSize: 12, 
    textAlign:'center', 
    textDecorationLine:'underline', 
    marginBottom: 20,
    fontWeight:'400',
    fontFamily:'overpassLigth'
   
  }, 
  text_error:{
    color: 'red', 
    fontSize: 13, 
    textAlign:'center', 
    marginVertical: 5,
    fontFamily:'overpassRegular'
  }
})