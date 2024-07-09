import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/HomeScreen';
import Cart from '../screens/CartScreen';
import CustomDrawerContent from '../component/CustomDrawer';
import ProductDetail from '../screens/ProductDetailScreen'


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
             drawerContent={props => <CustomDrawerContent {...props} />}
             initialRouteName="Home" screenOptions={{ headerShown: false }}>

                <Drawer.Screen name="Home" component={Home}  />
                <Drawer.Screen name="Cart" component={Cart} />
                <Drawer.Screen name="Product Details" component={ProductDetail} screenOptions={{ headerShown: true }}/>
                <Drawer.Screen name="Jewelry" component={Cart} />
                <Drawer.Screen name="Location" component={Cart} />
                <Drawer.Screen name="Blog" component={Cart} />
                <Drawer.Screen name="Electronic" component={Cart} />
                <Drawer.Screen name="Clothing" component={Cart} />
                <Drawer.Screen name="Settings" component={Cart} />
              
              
                
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
