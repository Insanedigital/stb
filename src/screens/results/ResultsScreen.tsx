import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/stacks/StackNavigation'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

type Props = NativeStackNavigationProp<RootStackParamList>

export const ResultsScreen = () => {
  const navigation = useNavigation<Props>()

  return (
    <View style={styles.container}>
      <TouchableOpacity
              style={styles.backButton} 
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      <Text>ResultsScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#040521',
      alignItems: 'center',
    },
    backButton: {
      position: 'relative',
      paddingTop: 30,
      paddingHorizontal: 30,
      zIndex: 1,
    },

})