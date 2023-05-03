import React, { useCallback, useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo, MaterialIcons } from '@expo/vector-icons';

import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
   } from "react-native-popup-menu";
import { FontAwesome } from '@expo/vector-icons';
import { RadioButton } from 'react-native-radio-buttons-group';
import { Color } from '../../styles/Color';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';



interface IProps {
    children: JSX.Element | JSX.Element[]
} 
const category = [
    { id: '1', name: 'Gorra abierta' },
    { id:' 2', name: 'Gorra cerrada' },
    { id: '3', name: 'Gorra plana' },
    { id: '4', name: 'Gorra con diseño' },
    { id: '5', name: 'Sombrero' },
  ];

const dates = [
    { id: '1', arrival_warehouse: 'Enero 2023' },
    { id: '2', arrival_warehouse: 'Enero 2023' },
    { id: '3', arrival_warehouse: 'Abril 2023' },
    { id: '4', arrival_warehouse: 'Mayo 2023' },
]

export const ButtonSetting = () => {
    const [showCategoryOptions, setShowCategoryOptions] = useState(true);
    const [showDateOptions, setShowDateOptions] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const [fontsLoaded] = useFonts({
        overpassMedium: require('../../../assets/fonts/Overpass-Medium.ttf'),
        overpassRegular: require('../../../assets/fonts/Overpass-Regular.ttf'),
        overpassLigth: require('../../../assets/fonts/Overpass-Light.ttf'),
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


    const toggleCategoryOptions = () => {
        setShowCategoryOptions(!showCategoryOptions);
    };
    
    const toggleDateOptions = () => {
        setShowDateOptions(!showDateOptions);
    };


    function onPressRadioButton(name: string) {
        setSelectedCategory(name); 
    }

    function selectDateRaddioButton(date: string) {
        setSelectedDate(date);
    }
    

  return (
    <View onLayout={onLayoutRootView}>
    <LinearGradient
        colors= { ['#030741', '#044A73', '#00C2FD' ]}
        start= { { x: 0.01, y: 0 }}
        end= { { x: 0.99, y: 1.1 }}
        style={styles.container}
        
    >
        <Menu style={styles.button}>
            <MenuTrigger>
                <FontAwesome name="sliders" size={24} color="white" />
            </MenuTrigger>
            <MenuOptions>
                <MenuOption style={styles.option} >
                    <TouchableOpacity 
                        onPress={toggleCategoryOptions}
                        style={[styles.selected, showCategoryOptions && {backgroundColor:  Color.grayLight}]}
                    >
                        <Text style={styles.title}>Tipo de artículo</Text>
                        {
                        showCategoryOptions?
                            <MaterialIcons name="keyboard-arrow-down" size={24} color={Color.grayDark} /> :
                            <MaterialIcons name="keyboard-arrow-up" size={24} color={Color.grayDark} />
                        }
                    </TouchableOpacity>
                </MenuOption>
                {showCategoryOptions && category.map(({ id, name }) => (
                <MenuOption style={styles.option} key={id}>
                    <RadioButton 
                        key={id}
                        selected={selectedCategory.includes(name)}
                        color={'#889FF0'}
                        id={id}
                        onPress={()=> onPressRadioButton(name)}
                        value={name}
                        size={18}
            
                    />
                    <Text style={styles.text_item}>{name}</Text>
                </MenuOption>
                ))}
                <View style={{borderBottomWidth: 0.5, borderBottomColor: Color.grayLight}}/>
                <MenuOption style={styles.option}>
                    <TouchableOpacity 
                        onPress={toggleDateOptions}  
                        style={[styles.selected, showDateOptions && {backgroundColor:  Color.grayLight}]}
                    >
                        <Text style={styles.title}>Fecha</Text>
                        {
                            showDateOptions?
                                <MaterialIcons name="keyboard-arrow-down" size={24} color={Color.grayDark} /> :
                                <MaterialIcons name="keyboard-arrow-up" size={24} color={Color.grayDark} />
                        }
                    </TouchableOpacity>
                </MenuOption>
                {showDateOptions && dates.map(({ id, arrival_warehouse }) => (
                    <MenuOption style={styles.option} key={id}>
                        <RadioButton 
                            key={id}
                            selected={selectedDate.includes(arrival_warehouse)}
                            color={'#889FF0'}
                            id={id}
                            onPress={()=> selectDateRaddioButton(arrival_warehouse)}
                            value={arrival_warehouse}
                            size={18}
                
                        />
                        <Text style={styles.text_item}>{arrival_warehouse}</Text>
                    </MenuOption>
                ))}
                <View style={{borderBottomWidth: 0.5, borderBottomColor: Color.grayLight}}/>
                <MenuOption style={styles.option}>
                    
                    <TouchableOpacity onPress={ ()=> console.log('Cerrar sesion')} style={[styles.selected, {justifyContent: 'flex-start'}]}>
                        <Entypo name="log-out" size={24} color={Color.grayDark} />
                        <Text style={styles.title}>
                            Cerrar Sesión
                        </Text>
                    </TouchableOpacity>
                </MenuOption>
                
            </MenuOptions>
        </Menu>
    </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '100%',
       justifyContent: 'center',
       alignItems: 'center',
    },
    option: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
    },
    selected:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        gap: 10,
        
        borderRadius: 50,
        width: '100%',
        paddingHorizontal: 20,
    },
    title:{
        fontFamily: 'overpassRegular',
        fontSize: 14,
    },
    text_item:{
        fontFamily: 'overpassLight',
        fontSize: 12,
    }
})