import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    constainerImage:{
      width: '100%',
      height: 150,
      alignSelf:'center'
    },
    image:{
      maxWidth: '100%',
    }, 
    title: {
      color:'#D3CECE',
      fontWeight:'400',
      fontSize: 18
    },
    button:{
      borderRadius: 100,
      borderWidth: 1,
      borderColor: '#D3CECE',
      width: 265,
      height: 45,
      alignItems: 'center',
      justifyContent:'center'
    }
    
  });