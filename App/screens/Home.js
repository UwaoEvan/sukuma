import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Snackbar from "react-native-snackbar";

import { COLORS } from "../constants/colors";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";

export default function Home (){
    Snackbar.show({
        text: 'Hello world',
        duration: Snackbar.LENGTH_SHORT,
    })

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Afternoon Jo</Text>
                    <Text style={styles.subTitle}>Here's the latest</Text>
                </View>
                <View>
                    <Text style={styles.balance}>KES 42,000</Text>
                    <Text style={styles.subTitle}>Total funds</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.innerCont}>
                    <Text style={styles.fTitle}>Your Goals</Text>
                    <Card title="Goal 1"/>
                    <Card title="Goal 2"/>
                </View>
                <CustomButton style={{ marginBottom: 20 }}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        flex: 1,
    },
    fTitle: {
        fontFamily: 'Comfortaa-Bold',
        color: COLORS.primary,
        fontSize: 16,
        marginTop: 10,
        marginLeft: 5
    },
    title: {
        fontFamily: 'Comfortaa-Bold',
        color: COLORS.white,
        fontSize: 20
    },
    subTitle: {
        color: COLORS.white,
        fontSize: 14,
        fontFamily: 'Comfortaa-Medium'
    },
    balance: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 20,
        color: COLORS.green
    },
    header: {
        flex: 0.3,
        marginHorizontal: 20,
        justifyContent: 'space-evenly'
    },
    footer: {
        backgroundColor: COLORS.white,
        flex: 0.7,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 15,
        justifyContent: 'space-between'
    }
})