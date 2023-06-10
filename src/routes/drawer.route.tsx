import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabRoutes } from './tab.route';
import { ExitScreen } from '../pages/drawer/exit';

const drawer = createDrawerNavigator();

export function DrawerRoutes() {
  return (
      <drawer.Navigator 
        initialRouteName="start"
        screenOptions = {{
          headerShown: true
        }}
      >
        <drawer.Screen 
          name="start" 
          component={TabRoutes} 
          options={{ 
            title: 'home'
          }}
        />
        <drawer.Screen
          name="exit"
          component={ExitScreen}
          options={{
            title: 'exit',
          }}
        />
      </drawer.Navigator>
  );
}