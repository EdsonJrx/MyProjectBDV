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
  user: undefined;
};
export type TabTypes = BottomTabNavigationProp<TabNavigation>;

export function TabRoutes() {
  const navigation = useNavigation<TabTypes>();
  return (
      <Tab.Navigator 
        initialRouteName="home"
        screenOptions = {{
          headerShown: true,
          tabBarActiveTintColor: '#fff',
          headerRight:()=>(<IconProfile navigation={navigation}/>),
          headerStyle: {
            backgroundColor: '#004682',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarStyle:{
            backgroundColor: '#004682',
          }
        }}
      >
        <Tab.Screen 
          name="home" 
          component={Home} 
          options={{ 
            title: 'BDVs',
            tabBarLabel: 'BDVs',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color}  />
            ),
          }}
        />
        <Tab.Screen
          name="equipaments"
          component={Equipaments}
          options={{
            title: 'Equipamentos',
            tabBarLabel: 'Equipamentos',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="tanker-truck" size={size} color={color} />
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
        <Tab.Screen
          name="constructions"
          component={Constructions}
          options={{
            title: 'Obras',
            tabBarLabel: 'Obras',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="office-building-marker" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={Constructions}
          options={{
            title: 'Usuario',
            tabBarLabel: 'Usuário',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-circle" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}