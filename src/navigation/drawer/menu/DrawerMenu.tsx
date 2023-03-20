import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer"
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native"


export const  DrawerManeu = ({navigation}: DrawerContentComponentProps ) => {
    return (
      <DrawerContentScrollView>
        <View style={styles.container}>
          <View style={styles.containerImage}>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.title}>Bienvenid@</Text>
          <Text style={styles.title}>hector.rodriguezb</Text>
        </View>
        <View style={styles.containerLink}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('DrawHome')}
          >
            <Text style={styles.Link}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> navigation.navigate('TabProfile')}
          >
            <Text style={styles.Link}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> navigation.navigate('TabRecords')}
          >
            <Text style={styles.Link}>Historial</Text>
          </TouchableOpacity>
          
          
          <TouchableOpacity
            onPress={()=> navigation.navigate('DrawAbout')}
          >
            <Text style={styles.Link}>Nosotros</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> navigation.navigate('DrawContactUs')}
          >
            <Text style={styles.Link}>Contactanos</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Link}>Cerrar Sesion</Text>
          </TouchableOpacity>
          
        </View>
      </DrawerContentScrollView>
    )
  }
  
  const styles = StyleSheet.create({
    container:{
      alignItems: 'center', 
      marginTop: 10
    },
    containerImage:{
      position: 'absolute', 
      top: 25, 
      alignSelf: 'center', 
      right: 75
    },
    image:{
      width: 120, 
      height:120, 
      resizeMode:'cover'
    },
    title:{
      textAlign:'center', 
      fontWeight: '900', 
      fontSize: 18,
      color:'#000',
    },
    containerLink:{
      marginTop: 20, 
      paddingHorizontal: 20
    },
    Link:{
      fontSize: 18,
      marginVertical: 13,
      color:'black',
      fontWeight: '900'
    }
  })