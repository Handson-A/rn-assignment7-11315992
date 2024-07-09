import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const ProductDetail = ({ route }) => {
    const { product } = route.params || {};
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Image source={require('../assets/Menu.png')} style={styles.icon} />
                </TouchableOpacity>
                <Image source={require('../assets/Logo.png')} style={styles.logo} />
                <Image source={require('../assets/shoppingBag.png')} style={styles.icon} />
              
            </View>
            
                <>
                    <Image source={require('../assets/dress4.png') } style={styles.productImage} />
                    <View style={styles.detailsContainer}>
                        <Text style={styles.productTitle}></Text>
                        <Text style={styles.productSubtitle}>Recycle Boucle Knit Cardigan Pink</Text>
                        <Text style={styles.productPrice}>$168.00</Text>
                        <Text style={styles.productDescription}>
                            We work with monitoring programmes to ensure compliance with safety, health, and quality standards for our products.
                        </Text>
                        <Text style={styles.materialsTitle}>MATERIALS</Text>
                        <Text style={styles.productDescription}>
                            Do not use bleach{'\n'}
                            Do not tumble dry{'\n'}
                            Dry clean with tetrachloroethylene{'\n'}
                            Iron at a maximum of 110ºC/230ºF{'\n'}
                        </Text>
                        <Text style={styles.shippingInfo}>
                            Free Flat Rate Shipping{'\n'}
                            Estimated to be delivered on 09/11/2021 - 12/11/2021.
                        </Text>
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </>
           
        </ScrollView>
    );
};

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#FFF',
    },
    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
    },
    icon: {
        width: 24,
        height: 24,
    },
    productImage: {
        width: '100%',
        height: 400,
        resizeMode: 'contain',
    },
    detailsContainer: {
        padding: 20,
    },
    productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    productSubtitle: {
        fontSize: 18,
        color: '#666',
        marginVertical: 5,
    },
    productPrice: {
        fontSize: 20,
        color: 'red',
        marginVertical: 10,
    },
    productDescription: {
        fontSize: 16,
        color: '#666',
        marginVertical: 10,
    },
    materialsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    shippingInfo: {
        fontSize: 16,
        color: '#666',
        marginVertical: 10,
    },
    addButton: {
        backgroundColor: '#000',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
    },
    addButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});
