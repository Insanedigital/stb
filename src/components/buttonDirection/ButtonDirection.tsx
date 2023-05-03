import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Color } from '../../styles/Color'


interface Props {
    state: boolean;
    onPress: () => void;
    title: string;
}

export const ButtonDirection = ({state, onPress, title}: Props) => {
  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={onPress}
    >
        <Text style={styles.title}>{title}</Text>
      {
        state ? (
            <View>
                <View style={styles.wrapperIcon}>
                    <View style={styles.icon}/>
                    <View style={styles.icon}/>
                </View>
                <View style={styles.wrapperIcon}>
                    <View style={styles.icon}/>
                    <View style={styles.icon}/>
                </View>
            </View>
        ): (
            <View style={styles.wrapperIcon_2}>
                <View style={styles.icon_2}/>
                <View style={styles.icon_2}/>
            </View>
        )
      }

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.blueDark,
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        color: Color.white,
        fontSize: 8,
    },
    wrapperIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        gap: 3,
        marginTop: 2
    },
    icon: {
        width: 10,
        height: 8,
        borderWidth: 1,
        borderColor: Color.blueLight,
    },
    wrapperIcon_2: {
        alignItems: 'center',
        alignContent: 'center',
        gap: 4,
        width: '100%',
        marginTop: 2
    },
    icon_2: {
        width: '50%',
        height: 7,
        borderWidth: 1,
        borderColor: Color.blueLight,
        borderRadius: 1,
    },
})