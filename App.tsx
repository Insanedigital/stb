import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DrawerNavigation } from './src/navigation/drawer';
import { AuthStackNavigation } from './src/navigation/stacks/AuthStackNavigation';

export const isSignedIn = true


export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {
          isSignedIn? (
            <DrawerNavigation />
          ):(
            <AuthStackNavigation />
          )
        }
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

