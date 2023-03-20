import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StartPageScreen } from '../../screens/start/StartPageScreen';
import { LoginScreen } from '../../screens/auth/LoginScreen';
import { SignupScreen } from '../../screens/auth/SignupScreen';


export type AuthStackParamList = {
    StarPage: undefined;
    Signup: undefined;
    Login: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator>
        <AuthStack.Screen name='StarPage' component={StartPageScreen} />
        <AuthStack.Screen name='Login' component={LoginScreen} />
        <AuthStack.Screen name='Signup' component={SignupScreen} />
    </AuthStack.Navigator>
  )
}
