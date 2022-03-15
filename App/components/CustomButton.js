import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function CustomButton ({ style, onPress }){
    return (
        <TouchableOpacity style={[styles.cont, style]} onPress={onPress}>
            <Text style={styles.title}>Show Snackbar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cont:{
        backgroundColor: COLORS.green,
        padding: 10,
        borderRadius: 20
    },
    title: {
        color: COLORS.white,
        fontFamily: 'Comfortaa-Bold',
        fontSize: 16,
        textAlign: 'center'
    }
})