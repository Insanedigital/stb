import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient  } from 'expo-linear-gradient';
//import { useFonts } from 'expo-font';

interface IProps{
    title: string;
}

export const Header = ({title}: IProps) => {

/*   const [fontsLoaded] = useFonts({
    'Overpass-Regular': require('../../../assets/fonts/overpass/Overpass-Regular.ttf'),
  });

if (!fontsLoaded) {
    return;
} */
  return (
    <LinearGradient
        colors={['#044C76', '#06324C', '#101231']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
    >
      <Text style={styles.title}>{title}</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        width: '100%',
        height: 103,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 50,
        //fontFamily: 'Overpass-Regular',
    }
})