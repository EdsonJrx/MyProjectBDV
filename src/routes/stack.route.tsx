import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/stack/Login'
import { TabRoutes } from './tab.route';
import Profile from '../screen/stack/Profile';
import Preload from '../screen/stack/Preload';

const Stack = createNativeStackNavigator();

type StackNavigation = {
  login: undefined;
  home: undefined;
  profile:undefined;
};
export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export function StackRoutes() {
  return (
      <Stack.Navigator 
        initialRouteName="home"
        screenOptions = {{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="preload" 
          component={Preload} 
          options={{ 
            title: 'Preload',
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="login" 
          component={Login} 
          options={{ 
            title: 'Login',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
          options={{
            title: 'Profile',
            headerBackVisible: true
          }}
        />
        <Stack.Screen
          name="home"
          component={TabRoutes}
          options={{
            title: 'Home',
            headerBackVisible: false
          }}
        />
      </Stack.Navigator>
  );
}