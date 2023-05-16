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
      alignItems: 'center',
      gap: 5,
    },
    section_nav: {
      width: '100%',
  
      flexDirection: 'row',
      gap: 12.5,
      justifyContent: 'center',
      alignItems: 'center',
    }, 
    section_products:{
      width: '100%', 
      paddingHorizontal: 10, 
      alignItems: 'center', 
      flexDirection: 'row', 
      flexWrap: 'wrap',
      gap: 6,
      marginVertical: 10,
    }
  })