import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginScreen} from '../pages/stack/login'
import { DrawerRoutes } from './drawer.route';

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
          name="login" 
          component={LoginScreen} 
          options={{ 
            title: 'login'
          }}
        />
        <Stack.Screen
          name="start-drawer"
          component={DrawerRoutes}
          options={{
            title: 'start-drawer',
          }}
        />
      </Stack.Navigator>
  );
}