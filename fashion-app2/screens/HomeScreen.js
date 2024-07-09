import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    }, []);

    const addToCart = async (product) => {
        try {
            const cart = JSON.parse(await AsyncStorage.getItem('cart')) || [];
            cart.push(product);
            await AsyncStorage.setItem('cart', JSON.stringify(cart));
            Alert.alert('Success', 'Product added to cart');
        } catch (error) {
            console.error(error);
        }
    };

    const renderProduct = ({ item }) => (
        <TouchableOpacity style={styles.productContainer} onPress={() => navigation.navigate('ProductDetailScreen', { product: item })}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity onPress={() => addToCart(item)}>
                <Image source={require('../assets/add_circle.png')} style={styles.plusIcon} />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={styles.homeContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={require('../assets/Menu.png')} style={styles.icon} />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Image source={require('../assets/Logo.png')} style={styles.logo} />
                </View>
                <View style={styles.iconContainer}>
                    <Image source={require('../assets/Search.png')} style={styles.icon} />
                    <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                        <Image source={require('../assets/shoppingBag.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.headerContainer2}>
                <Text style={styles.text}>OUR STORY</Text>
                <View style={styles.iconContainer}>
                    <Image source={require('../assets/Listview.png')} style={styles.icon} />
                    <Image source={require('../assets/Filter.png')} style={styles.icon} />
                </View>
            </View>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        margin: 28,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 36,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    headerContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'stretch',
        marginLeft: 35,
    },
    text: {
        fontSize: 20,
        letterSpacing: 6,
        textAlign: 'center',
        marginBottom: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginHorizontal: 5,
    },
    listContainer: {
        paddingTop: 0,
    },
    productContainer: {
        flex: 1,
        margin: 10,
        padding: 2,
        borderRadius: 10,
        position: 'static',
        marginBottom: 15,
    },
    productImage: {
        width: 150,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 15,
    },
    plusIcon: {
        width: 24,
        height: 24,
        left: 120,
        bottom: 30,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    productDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    productPrice: {
        fontSize: 16,
        color: 'red',
        marginTop: 10,
    }
});
