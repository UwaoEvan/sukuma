import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import arrow from '../assets/icons/right-arrow.png'
import { COLORS } from "../constants/colors";

export default function Card ({ title }){
    return (
        <TouchableOpacity style={styles.cont}>
            <View style={styles.leftCont}>
                <Text style={styles.goal}>{title}</Text>
                <Text style={styles.balance}>KES 12,000</Text>
            </View>
            <View style={styles.rightCont}>
                <View style={styles.border}>
                    <View style={styles.centerCont}>
                        <Text style={styles.text}>Finish Goal</Text>    
                    </View>
                </View>
                <Image source={arrow} resizeMode='contain' style={styles.icon}/>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    cont:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1 },
        elevation: 3,
        paddingHorizontal: 10,
        height: 70,
        marginVertical: 5
    },
    rightCont:{
        height: '100%',
        flexDirection: 'row'
    },
    centerCont:{
        backgroundColor: COLORS.green,
        borderRadius: 10,
        marginRight: 20
    },
    text: {
        textAlign: 'center',
        color: COLORS.white,
        padding: 5,
        fontFamily: 'Comfortaa-Medium',
        fontSize: 10
    },
    icon:{
        width: 10,
        height: 10,
        tintColor: COLORS.primary,
        alignSelf: 'center',
        marginLeft: 10,
        paddingHorizontal: 10
    },
    border: {
        borderRightColor: COLORS.primary,
        borderRightWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    goal: {
        fontFamily: 'Comfortaa-Bold',
        color: COLORS.primary,
        fontSize: 14,
        marginTop: 5
    },
    balance: {
        fontFamily: 'Comfortaa-Medium',
        fontSize: 12,
        color: '#ccc',
        paddingBottom: 10
    }
})