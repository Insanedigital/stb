import { ColorValue, NativeSyntheticEvent, View } from 'react-native'
import React from 'react'
import { RadioButton, RadioButtonProps } from 'react-native-radio-buttons-group';



interface Props {
    selected?: boolean | undefined;
    color?: string | undefined;
    id: string;
    onPress?: ((id: string) => void) | undefined;
    value?: string | undefined;
    borderColor?: string | undefined;
}


export const RadioButtons = ({selected, color, id, onPress, value, borderColor}: Props) => {
  return (

        <RadioButton 
            selected={selected} 
            color={color}
            id={id}
            onPress={onPress}
            size={20}
            value={value}
            borderColor={borderColor}
        />
  )
}
