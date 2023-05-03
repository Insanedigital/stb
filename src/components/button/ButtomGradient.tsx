import { StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

interface IProps {
    children: JSX.Element | JSX.Element[];
    style?: StyleProp<ViewStyle>
}

export const ButtomGradient = ({children, style}: IProps) => {
  return (
    <LinearGradient
             colors= { ['#030741', '#044A73', '#00C2FD' ]}
             start= { { x: 0.01, y: 0 }}
             end= { { x: 0.99, y: 1.1 }}
             style={style}
            
            >
                {children}
    </LinearGradient>
  )
}