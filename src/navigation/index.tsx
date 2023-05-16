import {useContext} from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "./tab/TabNavigation";
import { AuthStackNavigation } from "./stacks/AuthStackNavigation";
import { StackNavigation } from "./stacks";
import { AuthContext } from "../store/users/auth/authContext";




export const NavigationApp = () => {

 const {isLoggedIn} = useContext(AuthContext)

const authenticated = false;

    return (
      <> 
          <NavigationContainer>    
                  {
                    isLoggedIn? (
                      <StackNavigation /> 
                    ):(
                      <AuthStackNavigation />
                    )
                  }
          </NavigationContainer> 
      </>
    );
  }
  
  