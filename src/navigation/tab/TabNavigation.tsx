
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigation } from '../stacks';
import {Feather, Ionicons} from '@expo/vector-icons';
import { ProfileScreen } from '../../screens/profile/ProfileScreen';
import { CartScreen } from '../../screens/cart/CartScreen';
import { RecordsScreen } from '../../screens/records/RocordsScreen';
import { NotificationsScreens } from '../../screens/notifications/NotificationsScreen';

export type TabParamList={
    TabHome: undefined;
    TabProfile: undefined;
    TabCart: undefined;
    TabRecords: undefined;
    TabNotifications: undefined;
}



const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigation = () => {

    const icons = {
        TabHome: 'home',
        TabProfile: 'user',
        TabCart: 'shopping-cart',
        TabRecords: 'copy',
        TabNotifications: 'md-notifications-outline'
    };
    
  return (
        <Tab.Navigator
            screenOptions={({route}) =>({
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray",
                headerShown: false,
                statusBarColor: '#562738',
                tabBarIcon: ({focused, color, size}) => {
                    const iconName = icons[route.name];
                    const IconComponent = iconName === 'md-notifications-outline' ? Ionicons : Feather;
                    return <IconComponent 
                        name={iconName as 'key'} 
                        size={24} 
                        color={focused ? 'black' : 'gray'} 
                    />
                }
            })}
    
        >

            <Tab.Screen name='TabHome' component={StackNavigation} options={{title:'Home'}}/>
            <Tab.Screen name='TabProfile' component={ProfileScreen} options={{title:'Profile'}}/>
            <Tab.Screen name='TabCart' component={CartScreen} options={{title:'Cart'}}/>
            <Tab.Screen name='TabRecords' component={RecordsScreen} options={{title:'Historial'}}/>
            <Tab.Screen name='TabNotifications' component={NotificationsScreens} options={{title:'Notificaciones'}}/>

        </Tab.Navigator>
   
  )
}