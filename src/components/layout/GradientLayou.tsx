import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { LinearGradient  } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface Iprops {
    children: JSX.Element | JSX.Element[];
    style?: StyleProp<ViewStyle>
}
export const GradientLayout = ({children, style}: Iprops) => {
    const insets = useSafeAreaInsets();
  return (
    <LinearGradient
        colors= { ['#114E77', '#001B44', '#2C0423']}
        start= { { x: 1.99, y: 0 }}
        end= { { x: 0, y: 1.1 }}
        style={style}
      >
        <View style={{
            paddingTop: insets.top, 
            paddingLeft: insets.left,
            paddingRight: insets.right,
            paddingBottom: insets.bottom 
        }}>
            {children}
        </View>
    </LinearGradient>
  )
}


//colors={['#0A3E56', '#010430']}
