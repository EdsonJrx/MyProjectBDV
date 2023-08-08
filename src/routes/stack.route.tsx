import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../pages/stack/login'
import { TabRoutes } from './tab.route';
import ProfileScreen from '../pages/stack/profile';

const Stack = createNativeStackNavigator();

type StackNavigation = {
  login: undefined;
  start_drawer: undefined;
  profile:undefined;
};
export type StackTypes = NativeStackNavigationProp<StackNavigation>;

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
          name="profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerBackVisible: true
          }}
        />
        <Stack.Screen
          name="start_drawer"
          component={TabRoutes}
          options={{
            title: 'Home',
            headerBackVisible: false
          }}
        />
      </Stack.Navigator>
  );
}