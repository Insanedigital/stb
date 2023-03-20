import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StartPageScreen } from '../../screens/start/StartPageScreen';
import { TutorialScreen } from '../../screens/tutorial/TutorialScreen';
import { LoginScreen } from '../../screens/auth/LoginScreen';
import { SignupScreen } from '../../screens/auth/SignupScreen';
import { HomeScreen } from '../../screens/home/HomeScreen';
import { ProductScreen } from '../../screens/product/ProductScreen';
import { CategoryScreen } from '../../screens/category/CategoryScreen';
import { ResultsScreen } from '../../screens/results/ResultsScreen';



export type RootStackParamList = {
    Tutorial: undefined;
    Home:  undefined;
    Product: undefined;
    Category: undefined;
    Results: undefined; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigation = () => {
  return (
        <Stack.Navigator
          screenOptions={{
            contentStyle: {flex: 1, backgroundColor: '#F3F3EF'}, 
            headerShown: false,
            statusBarColor: '#562738'
        }} 
        >
          <Stack.Screen name='Tutorial' component={TutorialScreen} />
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Product' component={ProductScreen} />
          <Stack.Screen name='Category' component={CategoryScreen} />
          <Stack.Screen name='Results' component={ResultsScreen} />
        </Stack.Navigator>
  )
}

