import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Cart" component={CartScreen} />
                {/* Add other screens here */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
