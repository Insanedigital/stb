import { 
  Image, 
  SafeAreaView, 
  ScrollView, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';

import { GradientLayout } from '../../components/layout/GradientLayou'
import { Color } from '../../styles/Color'
import { ButtomGradient } from '../../components/button/ButtomGradient';
import { styles } from './styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('El email deber ser valido')
    .required('El email es requerido')
    .trim(),
  password: Yup.string()
    .min(8, 'La contraseña debe ser mayor a 8 caracteres')
    .required('La contraseña es requerida')
    .trim(),
    terms: Yup.boolean()
    .oneOf([true], 'Debe aceptar los Términos y Condiciones')
    .required('Checkbox must be checked'),
    privacy: Yup.boolean()
    .oneOf([true], 'Debe aceptar las Politicas de Privacidad')
    .required('Checkbox must be checked'),
})

export const SignupScreen = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
      privacy: false,
      terms: false,
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => console.log(values),

  })

  const handleCheckboxChange = (value: boolean) => {
    handleChange('terms')(Boolean(value).valueOf().toString());
    handleChange('privacy')(Boolean(value).valueOf().toString());
  };
  
  console.log(values.privacy)
  return (
    <SafeAreaView style={styles.container}>
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
            <View style={{position: 'relative'}}>
              <View style={styles.containerLabel}>
                <Text style={styles.label}>Email</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder='jonhDoe@gmail.com'
                placeholderTextColor={Color.whiteLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View>
            {touched.email && errors.email && (
              <Text style={styles.text_error}>{errors.email}</Text>
            )}
            </View>
            <View style={{position: 'relative', marginTop: 30}}>
              <View style={styles.containerLabel_2}>
                <Text style={styles.label}>Password</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder='**************'
                placeholderTextColor={Color.whiteLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            {touched.password && errors.password && (
              <Text style={styles.text_error}>{errors.password}</Text>
            )}
            <View style={styles.section_checkbox}>
              <Checkbox 
                style={styles.checkbox}  
                value={values.terms}
                onValueChange={() => handleCheckboxChange(values.terms)} 
              />
              <Text style={styles.paragraph}>Aceptar términos y condiciones</Text>
            </View>
            {touched.terms && errors.terms && (
              <Text style={styles.text_error}>{errors.terms}</Text>
            )}
            <View style={styles.section_checkbox_2}>
              <Checkbox 
                style={styles.checkbox} 
                value={values.privacy}  
                onValueChange={() => handleCheckboxChange(values.privacy)} 
              />
              <Text style={styles.paragraph}>Política de privacidad</Text>
            </View>
            {touched.privacy && errors.privacy && (
              <Text style={styles.text_error}>{errors.privacy}</Text>
            )}
            <ButtomGradient style={{
               width: '80%',
               marginVertical: 32,
               alignSelf:'center',
               justifyContent: 'center',
               borderRadius: 25,
               padding: 10,
            }}>
              <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                  <Text style={styles.buttonText}>Ingresar</Text>
              </TouchableOpacity>
            </ButtomGradient>
           <TouchableOpacity style={styles.button}>
            <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
           </TouchableOpacity>
        </ScrollView>
        </GradientLayout>
    </SafeAreaView>
  )
}