import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Color } from '../../../styles/Color'
import { Order } from '../RocordsScreen';




export const CardHistory = ({...order}: Order) => {

    const [fontsLoaded] = useFonts({
        overpassMedium: require('../../../../assets/fonts/Overpass-Medium.ttf'),
        overpassRegular: require('../../../../assets/fonts/Overpass-Regular.ttf'),
        overpassLigth: require('../../../../assets/fonts/Overpass-Light.ttf'),
    })

    useEffect(() => {
        const prepare = async () => {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if(!fontsLoaded){
        return null
    }
    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Orden {order.id}</Text>
                </View>
                <View style={[styles.wrapper_status, order.payment_status == 'paid' ? {backgroundColor: 'green'} : {backgroundColor: 'red'}]}>
                    <Text style={styles.status_text}>
                        {order.payment_status}
                    </Text>
                </View>
            </View>
            <View style={styles.wrapper_description}>
                <View style={styles.wrapper_image}>
                    <Image
                        source={require('../../../../assets/04.jpg')}
                        resizeMode='contain'
                        style={styles.image}
                    />
                </View>
                <View style={styles.wrapper_items}>
                    <Text style={styles.title_description}>{order.item_qty} Unidades reservadas</Text>
                    <Text style={styles.text_items}>{`\u2022`} {order.items[0].qty} {order.items[0].item_name}</Text>
                    <TouchableOpacity>
                        <Text 
                            style={styles.text_button}>
                                Ver más
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.wrapper_sell}>
                <View style={styles.wrapper_seller}>
                    <Text style={[styles.text_seller,{
                        color: Color.white, 
                    }]}>
                        Asesor
                    </Text>
                    <Text style={[styles.text_seller,{
                        color: Color.blueLight, 
                    }]}>
                        {order.seller_name}
                    </Text>
                    <Text style={[styles.text_seller,{
                        color: Color.white, 
                    }]}>
                        Celular
                    </Text>
                    <Text style={[styles.text_seller,{
                        color: Color.blueLight, 
                    }]}>
                        991 234 567
                    </Text>
                </View>
                <View style={styles.wrapper_price_total}>
                    <View style={styles.wrapper_booking}>
                        <Text style={styles.text_total}>Precio de reserva{' '}</Text>
                        <Text style={styles.text_total}>${order.items[0].price}</Text>
                    </View>
                    <View style={{borderBottomWidth: 0.5, borderBottomColor: Color.blueLight}}/>
                    <View style={styles.wrapper_price}>
                        <Text style={styles.text_total}>Precio Total</Text>
                        <Text style={styles.text_total}>${order.amount}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.wrapper_actions}>
                <TouchableOpacity style={styles.button}>
                    <FontAwesome name="download" size={24} color={Color.white} />
                    <Text style={styles.text_download}>Cotización</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    }

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#0B2440',
        borderRadius: 15,
        paddingBottom: 20,
        
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 17,
        color: Color.white,
        fontWeight: 'bold',
        marginTop: 10,
        paddingLeft: 20,
        fontFamily: 'overpassMedium',
    },
    wrapper_status: {
        backgroundColor: '#0AB05D',
        padding: 5,
        width: '40%',
        justifyContent: 'center',
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    status_text: {
        fontSize: 12,
        color: Color.white,
        textAlign: 'center',
        fontFamily: 'overpassLigth',
    },
    wrapper_description: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 15
    }, 
    wrapper_image: {
        width: '30%',
        height: 120,
        justifyContent: 'center',
    },
    image: {
        maxWidth: '100%',
        borderRadius: 15,
        height: 100,
    },
    wrapper_items: {
        width: '70%',
    },
    title_description: {
        color: Color.white,
        fontSize: 14,
        marginVertical: 10,
        fontFamily: 'overpassRegular',
    },
    text_items:{
        color: Color.blueLight,
        fontSize: 11,
        lineHeight: 20,
        textAlign: 'left',
        fontFamily: 'overpassLigth',
    },
    text_button:{
        color: Color.white,
        fontSize: 12,
        textDecorationLine: 'underline',
        marginTop: 10,
        fontFamily: 'overpassLigth',
    },
    wrapper_sell: {
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100, 
        gap: 2,
    },
    wrapper_seller: {
        width: '38%',
        gap: 3
    },
    wrapper_price_total: {
        width: '66%',
        backgroundColor: '#030F37',
        borderRadius: 15,
        paddingVertical: 10,
        rowGap: 5,
    },
    wrapper_booking: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    text_total: {
        color: Color.white,
        fontSize: 12,
        fontFamily: 'overpassLigth',
    },
    wrapper_price: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    wrapper_actions:{
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 20
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Color.blueLight,
        width: '55%',
        alignSelf: 'flex-end',
    },
    text_download: {
        color: Color.white,
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'overpassLigth',
    },
    text_seller: {
        color: Color.blueLight,
        fontSize: 12,
        fontFamily: 'overpassLigth',
    }
})