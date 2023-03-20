import { createDrawerNavigator } from "@react-navigation/drawer";
import React from 'react'
import { DrawerManeu } from "./menu/DrawerMenu";
import { TabNavigation } from "../tab";
import { AboutScreen } from "../../screens/about/AboutScreen";
import { ContactScreen } from "../../screens/contact/ContactScreen";
import { TutorialScreen } from "../../screens/tutorial/TutorialScreen";

const Drawer = createDrawerNavigator()

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
        drawerContent={(props) => <DrawerManeu {...props} />}
        screenOptions={{ headerShown: false}}
    >
        <Drawer.Screen name="DrawTutorial" component={TutorialScreen} options={{title:'Tutorial'}} />
        <Drawer.Screen name="DrawHome" component={TabNavigation} options={{title:'Home'}} />
        <Drawer.Screen name="DrawProfile" component={TabNavigation} />
        <Drawer.Screen name="DrawRecords" component={TabNavigation} />
        <Drawer.Screen name="DrawAbout" component={AboutScreen}/>
        <Drawer.Screen name="DrawContactUs" component={ContactScreen}/>

        

    </Drawer.Navigator>
  )
}