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
import { Color } from '../../styles/Color';
import { ProfileScreen } from '../../screens/profile/ProfileScreen';



export type RootStackParamList = {
    Tutorial: undefined;
    Home:  undefined;
    Product: {id: string, name: string};
    Category: undefined;
    Results: undefined; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigation = () => {
  return (
        <Stack.Navigator initialRouteName='Tutorial' >
          <Stack.Group  screenOptions={{
            headerShown: false,
            statusBarTranslucent: true,
           
        }}>
            {/* <Stack.Screen name='Tutorial' component={TutorialScreen} /> */}
            <Stack.Screen name='Tutorial' component={TutorialScreen} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Product' component={ProductScreen} options={{headerShown: false, presentation:'modal'}}/>
            <Stack.Screen name='Category' component={CategoryScreen} />
            <Stack.Screen name='Results' component={ResultsScreen} />         
          </Stack.Group>
        </Stack.Navigator>
  )
}

