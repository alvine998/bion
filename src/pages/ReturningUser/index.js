import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import normalize from 'react-native-normalize';
import { biometric, ic_login, vector2 } from '../../assets';

function ReturningUser(props) {
    const [pass, setPass] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handlePass = (event) => {
        setPass(event)
    }

    const handleShowPass = () => {
        setShowPass(!showPass);
    }
    const setModalVisible = (visible) => {
        setShowModal(visible);
    }

    return (
        <View>
            <ScrollView style={{ backgroundColor: "#3531B3", height: "100%" }}>
                <View>
                    <Image source={vector2} style={{ width: '100%', height: normalize(144) }} />
                </View>
                <View>
                    <Image source={ic_login} style={{ marginTop: normalize(-80), width: normalize(100), height: normalize(100) }} />
                </View>

                <View style={{ paddingLeft: normalize(20) }}>
                    <Text style={{ fontFamily: "Nunito-Bold", color: "white", fontSize: normalize(30) }}>Welcome Back, Jonathan</Text>
                    <Text style={{ fontFamily: "Nunito-Regular", color: "white", fontSize: normalize(16) }}>
                        Please enter your password to login
                    </Text>

                    <View style={{ paddingTop: normalize(25) }}>
                        <Text style={{ fontFamily: "Nunito-Regular", color: "white", fontSize: normalize(14) }}>
                            Password
                        </Text>
                        <View style={{ paddingRight: normalize(20) }}>
                            <View style={{ width: "100%", height: normalize(50), paddingLeft: normalize(20), alignItems: "center", backgroundColor: "#221F7A", borderRadius: 5 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <TextInput secureTextEntry={showPass ? false : true} value={pass} onChangeText={handlePass.bind(this)} style={{ width: normalize(250) }} />
                                    <Text style={{ color: "#FF931C", lineHeight: 21, textAlign: "right", marginTop: normalize(15) }} onPress={() => handleShowPass()}>SHOW</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => props.navigation.navigate("forgot-password")}>
                                <Text style={{ color: "#FF931C", lineHeight: 21, textAlign: "right", marginRight:normalize(10) }}>FORGOT PASSWORD?</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Modal */}
                        <View>
                            <Modal animationType='slide' transparent visible={showModal} onRequestClose={() => { Alert.alert("Modal has been closed."); setModalVisible(!showModal) }}>
                                <View style={{ justifyContent: "center", alignItems: "center", marginTop: normalize(100) }}>
                                    <View style={{ alignItems: "center", backgroundColor: "white", width: "90%", height: normalize(250), borderRadius: 10 }}>
                                        <Text style={{ fontFamily: "Nunito-Bold", fontSize: normalize(25), color: "black", fontWeight: "bold", marginTop: normalize(20) }}>Sign-In</Text>
                                        <View style={{ marginTop: normalize(30) }}>
                                            <Image source={biometric} style={{ width: normalize(65), height: normalize(75) }} />
                                        </View>
                                        <Text style={{ fontFamily: "Nunito-Bold", color: "#808080", marginTop: normalize(10) }}>Touch the fingerprint sensor</Text>
                                        <TouchableOpacity style={{ marginRight: "70%", marginTop: normalize(30) }} onPress={() => setModalVisible(false)}>
                                            <Text style={{ fontFamily: "Nunito-Bold", color: "#1A73E8", textAlign: "left", fontWeight: "bold" }}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        </View>

                        <View style={{ paddingTop: normalize(80), justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <Text style={{ color: "#FF931C", lineHeight: 21, textAlign: "right", marginBottom: normalize(10) }}>LOGIN WITH BIOMETRICS</Text>
                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity onPress={() => props.navigation.navigate("login")} style={{ backgroundColor: "#FFB70A", width: normalize(250), height: normalize(50), borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ color: "#3531B3", textAlign: "center", fontFamily: "Nunito-Bold", lineHeight: 21, fontWeight: 'bold' }}>CONTINUE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default ReturningUser;