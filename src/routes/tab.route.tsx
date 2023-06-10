import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../pages/tab/home'
import {EquipamentsScreen} from '../pages/tab/equipaments'
import { ConstructionsScreen } from '../pages/tab/constructions';
import { NewScreen } from '../pages/tab/new';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
      <Tab.Navigator 
        initialRouteName="home"
        screenOptions = {{
          headerShown: false
        }}
      >
        <Tab.Screen 
          name="home" 
          component={HomeScreen} 
          options={{ 
            title: 'home'
          }}
        />
        <Tab.Screen
          name="equipaments"
          component={EquipamentsScreen}
          options={{
            title: 'equipaments',
          }}
        />
        <Tab.Screen
          name="constructions"
          component={ConstructionsScreen}
          options={{
            title: 'constructions',
          }}
        />
        <Tab.Screen
          name="new"
          component={NewScreen}
          options={{
            title: 'new',
          }}
        />
      </Tab.Navigator>
  );
}