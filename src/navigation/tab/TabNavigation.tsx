
import React, { useCallback, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigation } from '../stacks';
import {Feather, Ionicons} from '@expo/vector-icons';
import { ProfileScreen } from '../../screens/profile/ProfileScreen';
import { CartScreen } from '../../screens/cart/CartScreen';
import { RecordsScreen } from '../../screens/records/RocordsScreen';
import { NotificationsScreens } from '../../screens/notifications/NotificationsScreen';
import { Color } from '../../styles/Color';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { HomeScreen } from '../../screens/home/HomeScreen';

export type TabParamList={
    THome: undefined;
    Profile: undefined;
    Cart: undefined;
    Records: undefined;
    Notifications: undefined;
}



const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigation = () => {

/*     const [fontsLoaded] = useFonts({
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
    } */

    
    const icons = {
        THome: 'home',
        Profile: 'user',
        Cart: 'shopping-cart',
        Records: 'copy',
        Notifications: 'md-notifications-outline'
    };
    
  return (
        <Tab.Navigator> 

            <Tab.Group
             screenOptions={({route}) =>({
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: Color.white,
                tabBarInactiveTintColor: Color.white,
                tabBarStyle: {
                    backgroundColor: '#040521',
                    height: 70,
                    paddingTop: 12, 
                    paddingHorizontal: 5,
                      
                },
                tabBarLabelStyle: {
                    fontSize: 9,
                    fontWeight: '400',
                    //fontFamily: ' overpassLigth',
                  },
                  
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    const iconName = icons[route.name];
                    const IconComponent = iconName === 'md-notifications-outline' ? Ionicons : Feather;
                    return <IconComponent 
                        name={iconName as 'key'} 
                        size={focused ? 35 : 30}

                        style={{
                            color:focused ? Color.white : Color.whiteLight,
                            backgroundColor: focused ? '#01A0D5' : '#040521',
                            width:  focused ? 60 : 30,
                            height:  focused ? 60 : 30,
                            textAlign:'center',
                            borderRadius: 50,
                            padding: focused ? 12: 0,
                            transform: [
                                {translateY: focused ? -10 : 0},
                                {scale: focused ? 0.9 : 1},
                            ],
                            
                            alignContent: 'center',
                            alignSelf: 'center',
                        }}
                    />
                }
            })}
            
            
            
            >
               
                <Tab.Screen name='THome' component={HomeScreen} options={{title:'Home'}}/>
                <Tab.Screen name='Profile' component={ProfileScreen}  options={{title:'Mi Perfil'}}/>
                <Tab.Screen name='Cart' component={CartScreen} options={{ tabBarBadge: 3, title: 'Mi Carrito'}} />
                <Tab.Screen name='Records' component={RecordsScreen} options={{title:'Historial'}}/>
                <Tab.Screen name='Notifications' component={NotificationsScreens} options={{title:'Notificaciones'}}/>
            </Tab.Group>

        </Tab.Navigator>
   
  )
}