import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import AddSaleScreen from '../screens/AddSaleScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

export type RootStackParamList = {
  Home: undefined;
  AddSale: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = '';

            if (route.name === 'Garage Sales') {
              iconName = 'list';
            } else if (route.name === 'Add listing') {
              iconName = 'add-circle-outline'; // Big + sign
            } else if (route.name === 'Settings') {
              iconName = 'settings'; // Traditional cog
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Garage Sales" component={HomeScreen} />
        <Tab.Screen name="Add listing" component={AddSaleScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
