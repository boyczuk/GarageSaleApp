import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddSaleScreen from '../screens/AddSaleScreen';

export type RootStackParamList = {
  Home: undefined;
  AddSale: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddSale" component={AddSaleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
