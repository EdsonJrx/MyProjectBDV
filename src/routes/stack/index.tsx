import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginScreen} from '../../pages/stack/login'
import {HomeScreen} from '../../pages/stack/home'
import { Item1Screen } from '../../pages/tab/item1';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions = {{
          headerShown: false
        }}
        
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ 
            title: 'Login'
          }}
          
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
        />
        
      </Stack.Navigator>
  );
}