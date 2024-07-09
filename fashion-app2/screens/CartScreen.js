import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CartScreen({ navigation }) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            const storedCart = JSON.parse(await AsyncStorage.getItem('cart')) || [];
            setCart(storedCart);
        };
        fetchCart();
    }, []);

    const removeFromCart = async (product) => {
        try {
            const newCart = cart.filter(item => item.id !== product.id);
            await AsyncStorage.setItem('cart', JSON.stringify(newCart));
            setCart(newCart);
            Alert.alert('Success', 'Product removed from cart');
        } catch (error) {
            console.error(error);
        }
    };

    const renderProduct = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity onPress={() => removeFromCart(item)}>
                <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={require('../assets/Menu.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Cart</Text>
            </View>
            <FlatList
                data={cart}
                renderItem={renderProduct}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    icon: {
        width: 24,
        height: 24,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    listContainer: {
        paddingBottom: 20,
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    productTitle: {
        fontSize: 16,
        flex: 1,
    },
    productPrice: {
        fontSize: 16,
        color: 'red',
    },
    removeButton: {
        fontSize: 16,
        color: 'blue',
    },
});
