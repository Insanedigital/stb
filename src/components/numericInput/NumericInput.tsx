import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Color } from '../../styles/Color';

interface Props {
    initialValue: number;
    onValueChange: (value: number) => void;
}

export const NumericInput = ({ initialValue, onValueChange }: Props) => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (newValue: string) => {
    const intValue = parseInt(newValue, 10);
    if (!isNaN(intValue)) {
      setValue(intValue);
      onValueChange(intValue);
    }
  };

  const handleIncrement = () => {
    setValue(value + 1);
    onValueChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
      onValueChange(value - 1);
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleDecrement}>
      <AntDesign name="minuscircle" size={24} color="#CFDAFF" />
      </TouchableOpacity>
      <View style={{ marginHorizontal: 15 }}>
        
        <TextInput
          keyboardType="numeric"
          value={value.toString()}
          onChangeText={handleValueChange}
          style={{
              color: Color.white,
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
          }}
        />
      </View>
      <TouchableOpacity onPress={handleIncrement}>
        <AntDesign name="pluscircle" size={24} color="#CFDAFF" />
      </TouchableOpacity>
    </View>
  );
};
