import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StartPageScreen } from '../../screens/start/StartPageScreen';
import { LoginScreen } from '../../screens/auth/LoginScreen';
import { SignupScreen } from '../../screens/auth/SignupScreen';
import { Color } from '../../styles/Color';
import { FogotPasswordScreen } from '../../screens/auth/FogotPasswordScreen';
import { ResetPasswordScreen } from '../../screens/auth/ResetPasswordScreen';


export type AuthStackParamList = {
    StarPage: undefined;
    Signup: undefined;
    Login: undefined;
    ForgotPassword: undefined;
    ResetPassword: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator initialRouteName='StarPage'>
      <AuthStack.Group screenOptions={{
        headerShown: false,
        statusBarColor: Color.dark
      }}>
          <AuthStack.Screen name='StarPage' component={StartPageScreen} />
          <AuthStack.Screen name='Login' component={LoginScreen} />
          <AuthStack.Screen name='Signup' component={SignupScreen} />
          <AuthStack.Screen name='ForgotPassword' component={FogotPasswordScreen} />
          <AuthStack.Screen name='ResetPassword' component={ResetPasswordScreen} />
        </AuthStack.Group>
    </AuthStack.Navigator>
  )
}
