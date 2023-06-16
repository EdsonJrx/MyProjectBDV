import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginScreen} from '../pages/stack/login'
import { DrawerRoutes } from './drawer.route';
import { TabRoutes } from './tab.route';

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
            title: 'login',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="start-drawer"
          component={TabRoutes}
          options={{
            title: 'Home',
            headerBackVisible: false
          }}
        />
      </Stack.Navigator>
  );
}