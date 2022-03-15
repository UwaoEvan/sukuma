import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { COLORS } from '../constants/colors';
import close from '../assets/icons/close.png';

export default function Snackbar (props){
    const { modalVisible, setModalVisible, clicked, setClicked } = props;
    const handleModalClose = () => {
        setModalVisible(false);
        setClicked(false);
    }
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={styles.modalView}>
                <View style={styles.textCont}>
                    {   
                        clicked ? 
                        <Text style={styles.modalText}>User clicked snackbar</Text>
                        : 
                        <Text onPress={() => setClicked(true)} style={styles.modalText}>This is an in-app notification snackbar to show to the user when they perfom an action. Clicking it should change the text.</Text> 
                    }
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleModalClose}
                >
                    <Image source={close} resizeMode="contain" style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalView: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        margin: 20,
        backgroundColor: COLORS.pink,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    textCont:{
        width: '90%'
    },
    button: {
      padding: 10,
    },
    modalText: {
        fontFamily: "Comfortaa-Medium",
        color: "white",
    },
    icon:{
        width: 30,
        height: 30,
        tintColor: COLORS.white,
        marginRight: 10
    }
  });
  