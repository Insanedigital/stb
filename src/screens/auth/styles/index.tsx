import { StyleSheet } from 'react-native'
import { Color } from '../../../styles/Color'

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
      fontWeight:'100',
    },
    
    button:{
      width:'100%'
    },
    buttonText:{
      color:Color.white,
      fontSize: 18,
      textAlign: 'center',
    },
  
    link:{
      color: Color.white, 
      fontSize: 12, 
      textAlign:'center', 
      textDecorationLine:'underline', 
      marginBottom: 20,
      fontWeight:'400'
    }, 
    text_error:{
      color: 'red', 
      fontSize: 13, 
      textAlign:'center', 
      marginVertical: 5
    }
  })