import 'react-native-gesture-handler'
import { View } from 'react-native';

import { NavigationApp, } from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MenuProvider } from "react-native-popup-menu";
import { AuthProvider } from './src/store/users/auth/authProvider';




export default function App() {


  return (
    <SafeAreaProvider>
      <AuthProvider>
        <MenuProvider>
          <NavigationApp />
        </MenuProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}

