import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "./tab/TabNavigation";
import { AuthStackNavigation } from "./stacks/AuthStackNavigation";




export const NavigationApp = () => {

const authenticated= true;

    return (
      <> 
          <NavigationContainer>    
                  {
                    authenticated? (
                      <TabNavigation /> 
                    ):(
                      <AuthStackNavigation />
                    )
                  }
          </NavigationContainer> 
      </>
    );
  }
  
  