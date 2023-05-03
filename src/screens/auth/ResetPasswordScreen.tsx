
import { sendPasswordResetEmail, verifyPasswordResetCode  } from 'firebase/auth';
import { ActivityIndicator, Image, SafeAreaView,  StyleSheet, Text, View } from 'react-native'
import { GradientLayout } from '../../components/layout/GradientLayou'
import { Input } from '../../components/Input/Input'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ButtomGradient } from '../../components/button/ButtomGradient';
import { Color } from '../../styles/Color';
import { AntDesign } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/stacks/AuthStackNavigation';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackNavigationProp<AuthStackParamList>
export const ResetPasswordScreen = () => {
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
          onPress={() => navigation.navigate('StarPage')}
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
            <Text style={styles.title}>Recupera tu Contraseña</Text>
            <Input 
              Label='Email'
              placeholder='jhonDoe@example.com'
              style={styles.containerLabel} 
            />
            <View style={{width: '100%'}}>
                <ButtomGradient style={{
                  width: '40%',
                  marginVertical: 32,
                  alignSelf:'center',
                  justifyContent: 'center',
                  borderRadius: 25,
                  padding: 10,
                }}>
                  <TouchableOpacity style={styles.button} onPress={() => console.log('Hola Mundo')}>
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
  title:{
    fontSize: 24,
    fontWeight: '400',
    color: Color.whiteLight,
    marginVertical: 30,
    textAlign: 'center',
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

