import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/tab/Home'
import Equipaments from '../screen/tab/Equipaments'
import Constructions from '../screen/tab/Constructions';
import NewApointment from '../screen/tab/NewApointment';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ButtonNew  from '../components/buttonNew';
import IconProfile from '../components/iconProfile';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

type TabNavigation = {
  home: undefined;
  equipaments: undefined;
  constructions: undefined;
  new: undefined;
};
export type TabTypes = BottomTabNavigationProp<TabNavigation>;

export function TabRoutes() {
  const navigation = useNavigation<TabTypes>();
  return (
      <Tab.Navigator 
        initialRouteName="home"
        screenOptions = {{
          headerShown: true,
          tabBarActiveTintColor: '#e91e63',
          headerRight:()=>(<IconProfile navigation={navigation}  />)
        }}
      >
        <Tab.Screen 
          name="home" 
          component={Home} 
          options={{ 
            title: 'home',
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color}  />
            ),
          }}
        />
        <Tab.Screen
          name="equipaments"
          component={Equipaments}
          options={{
            title: 'equipaments',
            tabBarLabel: 'Equipamentos',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="tanker-truck" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="constructions"
          component={Constructions}
          options={{
            title: 'constructions',
            tabBarLabel: 'Obras',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="office-building-marker" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="new"
          component={NewApointment}
          options={{
            title: 'new',
            tabBarLabel: '',
            tabBarIcon: ({ size, focused }) => (
              <ButtonNew size={size} focused={focused}/>
            ),
          }}
        />
      </Tab.Navigator>
  );
}