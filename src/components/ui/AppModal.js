import React from 'react';
import { View, StyleSheet, Modal, Alert, Pressable, Text } from 'react-native'
import { COLORS } from '../../theme'

export const AppModal = ({ children, modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={[styles.modalView, styles.shadowProp]}>
                    {children}
                    
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>


        </Modal>
    );
}

const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },

    modalView: {
        marginTop: '20%',
        marginVertical: 20,
        marginHorizontal: 20,
        backgroundColor: COLORS.WHITE,
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
    },

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

})