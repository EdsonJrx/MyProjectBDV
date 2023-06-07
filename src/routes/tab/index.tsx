import {Item1Screen} from '../../pages/tab/item1'
import {Item2Screen} from '../../pages/tab/item2'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
      <Tab.Navigator 
        initialRouteName="Item1"
        screenOptions = {{
          headerShown: false
        }}
        
      >
        <Tab.Screen 
          name="Item1" 
          component={Item1Screen} 
          options={{ 
            title: 'Item1'
          }}
          
        />
        <Tab.Screen
          name="Item2"
          component={Item2Screen}
          options={{
            title: 'Item2',
          }}
        />
      </Tab.Navigator>
  );
}