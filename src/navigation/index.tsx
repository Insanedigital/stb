import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "./tab/TabNavigation";
import { AuthStackNavigation } from "./stacks/AuthStackNavigation";
import { StackNavigation } from "./stacks";




export const NavigationApp = () => {

const authenticated = true;

    return (
      <> 
          <NavigationContainer>    
                  {
                    true? (
                      <StackNavigation /> 
                    ):(
                      <AuthStackNavigation />
                    )
                  }
          </NavigationContainer> 
      </>
    );
  }
  
  