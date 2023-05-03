import { View, 
  Text, 
  TextInput, 
  StyleSheet, 
  NativeSyntheticEvent, 
  TextInputFocusEventData, 
  StyleProp, 
  ViewStyle } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { Color } from '../../styles/Color'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

interface InputProps {
  Label: string;
  value?: string | undefined;
  placeholder?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
  marginTop?: number | string | undefined;
  style?: StyleProp<ViewStyle>;
}

export const Input = ({
  Label,
  value,
  placeholder,
  onChangeText,
  onBlur,
  marginTop, 
  style,

}: InputProps) => {
  const [fontsLoaded] = useFonts({
    overpassRegular: require('../../../assets/fonts/Overpass-Regular.ttf'),
    overpassLigth: require('../../../assets/fonts/Overpass-Light.ttf'),
  })

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null
  }
  return (
    <View style={{position: 'relative', marginTop: marginTop}} onLayout={onLayoutRootView}>
      <View style={style}>
        <Text style={[styles.label]}>{Label}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Color.grayDark}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
  </View>
  )
}

const styles = StyleSheet.create({
  label:{
    color:Color.grayDark, 
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'overpassLigth',
  },

  input:{
    alignSelf: 'center',
    width: '90%',
    maxWidth: 300,
    color: Color.whiteLight,
    fontSize: 12,
    borderColor: Color.blueLight,
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    fontFamily: 'overpassLigth'
  },
})