import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { storeUserData } from '../Config/Reducer';
import userData from '../Config/userData';
import { DELETE_ICON, EDIT_ICON, CREATE_ICON } from '../../assets/images';
import { createUser } from '../Create/Create';
import { deleteUser } from '../Delete/Delete';
import { editUser } from '../Update/Update';

const Read = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const userDetails = useSelector(state => state.users.userData);

    useEffect(() => {
        dispatch(storeUserData(userData));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.head}>CREATE NEW USER</Text>
                <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(true)}>
                    <Image source={CREATE_ICON} style={styles.icon} />
                    <Text style={styles.btnText}>Create</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {userDetails && userDetails?.map((item) => (
                    <View key={item.id} style={styles.cardContent}>
                        <View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text>{item.body}</Text>
                        </View>
                        <View style={styles.btnContent}>
                            <TouchableOpacity style={styles.btn} onPress={() => editUser(item.id)} >
                                <Image source={EDIT_ICON} style={styles.icon} />
                                <Text style={styles.btnText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={() => deleteUser(item.id)} >
                                <Image source={DELETE_ICON} style={styles.icon} />
                                <Text style={styles.btnText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
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
                    <View style={styles.modalView}>
                        <TextInput
                            style={styles.input}
                            // onChangeText={onChangeText}
                            // value={text}
                            maxLength={40}
                        />
                         <TextInput
                            style={styles.input}
                            // onChangeText={onChangeText}
                            // value={text}
                            maxLength={40}
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View >
    )
}

export default Read;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    head: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 25,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    cardContent: {
        padding: 12,
        margin: 16,
        backgroundColor: '#42b0f5',
        borderRadius: 10,
    },
    btnContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        backgroundColor: '#0a58ab',
        borderRadius: 10,
        width: 150,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        marginTop: 20,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        padding: 12,
        paddingRight: 10,
    },
    icon: {
        marginLeft: 10,
        marginTop: 10,
        width: '22%',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
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
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
