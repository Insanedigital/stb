import { StyleSheet } from 'react-native'
import { Color } from '../../../styles/Color'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#040521',
      alignItems: 'center',
    },
    section_search: {
      width: '100%',
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      alignItems: 'center',
      gap: 5,
    },
    section_nav: {
      width: '100%',
      paddingHorizontal: 20,
      flexDirection: 'row',
      gap: 15,
    }, 
    section_products:{
      marginTop: 10,
      paddingHorizontal: 15,
      alignSelf: 'center',
   
    }
  })