import React, { useState } from 'react';
import { Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { arrow, biometric, header2, ic_warning, lockey, vector, vector2 } from '../../assets';

function Login(props) {
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const handleShowPass = () => {
        setShowPass(!showPass);
    }
    const setModalVisible = (visible) => {
        setShowModal(visible);
    }
    const setModalVisible2 = (visible) => {
        setShowModal2(visible);
    }

    const handlePhone = (event) => {
        setPhone(event)
    }
    const handlePass = (event) => {
        setPass(event)
    }

    const onLogin = () => {
        if (phone == '1234') {
            if (pass == '1234') {
                props.navigation.navigate("active-finger")
            } else {
                let wrong = pass !== '1234';
                while (wrong > 3) {
                    setModalVisible(true)
                }
            }
        } else {
            setShowModal(true)
        }
    }
    return (
        <View>
            <ScrollView style={{ backgroundColor: "#3531B3", height: "100%" }}>
                <View>
                    <Image source={header2} style={{ width: "100%" }} />
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity>
                            <Image source={arrow} style={{ marginLeft: normalize(20), marginTop: normalize(-190), width: normalize(24), height: normalize(24) }} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={{ color: "#FF931C", lineHeight: 21, marginLeft: normalize(290), marginTop: normalize(-190), fontWeight: "bold", fontSize: normalize(16) }}>HELP</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <View style={{ paddingLeft: normalize(20), marginTop: normalize(-110) }}>
                        <Text style={{ color: "white", fontFamily: "Nunito-Bold", fontSize: normalize(25), fontWeight: "bold" }}>Login</Text>
                        <Text style={{ color: "white" }}>Enter mobile number and password to login</Text>

                        <View>
                            <Text style={{ color: "white", marginTop: normalize(50), marginBottom: normalize(10) }}>Phone Number</Text>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <View style={{ width: normalize(330), justifyContent: "center", paddingLeft: normalize(10), height: normalize(50), borderRadius: 5, backgroundColor: "#221F7A", marginRight: normalize(20) }}>
                                    {/* <View style={{ flexDirection: "row",  }}> */}
                                    {/* <Text style={{ color: "white", fontSize: normalize(24) }}>+62</Text> */}
                                    <TextInput value={"+62 " + phone} onChangeText={handlePhone.bind(this)} maxLength={12} style={{ width: normalize(300), color: "white", fontSize: normalize(24), fontWeight: "bold" }} keyboardType={"number-pad"} />
                                    {/* </View> */}
                                </View>

                                <View style={{ marginTop: normalize(50) }}>
                                    <View style={{ width: normalize(330), paddingLeft: normalize(10), height: normalize(50), borderRadius: 5, backgroundColor: "#221F7A", marginRight: normalize(20) }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <TextInput value={pass} onChangeText={handlePass.bind(this)} secureTextEntry style={{ width: normalize(270), color: "white", fontSize: normalize(20) }} />
                                            <Text style={{ color: "#FF931C", lineHeight: 21, fontSize: normalize(16), marginTop: normalize(15), textAlign: "right" }}>SHOW</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity onPress={() => props.navigation.navigate("forgot-password")}>
                                        <Text style={{ color: "#FF931C", lineHeight: 21, fontSize: normalize(14), marginTop: normalize(10), textAlign: "right", marginRight: normalize(20) }}>FORGOT PASSWORD?</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: normalize(100), justifyContent: "center", alignItems: "center", paddingBottom: normalize(20) }}>
                        <TouchableOpacity onPress={() => onLogin()} style={{ backgroundColor: "#FFB70A", width: normalize(250), height: normalize(50), borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: "#3531B3", textAlign: "center", fontFamily: "Nunito-Bold", lineHeight: 21, fontWeight: 'bold' }}>CONTINUE</Text>
                        </TouchableOpacity>

                        {/* Modal */}
                        <View>
                            <Modal animationType='slide' transparent visible={showModal2} onRequestClose={() => { Alert.alert("Modal has been closed."); setModalVisible2(!showModal2) }}>
                                <View style={{ paddingTop: normalize(300) }}>
                                    <ScrollView style={{ backgroundColor: "#3531B3", height: normalize(350) }}>
                                        <View>
                                            <Image source={header2} style={{ width: normalize(350), height: normalize(300) }} />
                                            <TouchableOpacity onPress={()=>setModalVisible2(false)} style={{ borderWidth: 1, width: normalize(100), height: normalize(10), marginTop: normalize(-20), borderRadius:normalize(5), backgroundColor:"#808080", borderColor:"#808080" }}>

                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
                                            <Image source={ic_warning} style={{ width: normalize(100), height: normalize(100), marginTop: normalize(-250) }} />
                                        </View>
                                        <View style={{ paddingLeft: normalize(20), paddingRight: normalize(20), marginTop: normalize(-80) }}>
                                            <Text style={{ fontFamily: "Nunito-Regular", fontWeight: "bold", color: "white", fontSize: normalize(32) }}>
                                                You Don't Have a bion Account yet
                                            </Text>
                                        </View>
                                        <View style={{ paddingLeft: normalize(20), paddingRight: normalize(40) }}>
                                            <Text style={{ fontFamily: "Nunito-Regular", color: "white", fontSize: normalize(16) }}>
                                                Please register an account to access all Bion's feature
                                            </Text>
                                        </View>
                                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: normalize(60) }}>
                                            <TouchableOpacity onPress={() => props.navigation.navigate("bio-finger")} style={{ backgroundColor: "#FFB70A", width: normalize(250), height: normalize(50), borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
                                                <Text style={{ color: "#3531B3", textAlign: "center", fontFamily: "Nunito-Bold", lineHeight: 21, fontWeight: 'bold' }}>RESET PASSWORD</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </ScrollView>
                                </View>
                            </Modal>
                        </View>

                        {/* Modal */}
                        <View>
                            <Modal animationType='slide' transparent visible={showModal} onRequestClose={() => { Alert.alert("Modal has been closed."); setModalVisible(!showModal) }}>
                                <View>
                                    <ScrollView style={{ backgroundColor: "#3531B3", height: "100%" }}>
                                        <View>
                                            <Image source={vector} style={{ width: "100%", height: normalize(370), marginTop: normalize(-50) }} />
                                        </View>
                                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                                            <Text style={{ color: "white", fontSize: normalize(27), marginTop: normalize(-300), marginLeft: normalize(20) }}>x</Text>
                                        </TouchableOpacity>
                                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                                            <Image source={lockey} style={{ width: normalize(200), height: normalize(160), marginTop: normalize(-150) }} />
                                        </View>
                                        <View style={{ paddingLeft: normalize(20), paddingRight: normalize(20) }}>
                                            <Text style={{ fontFamily: "Nunito-Regular", fontWeight: "bold", color: "white", fontSize: normalize(32), textAlign: "center" }}>Password Max. Attempts Reached</Text>
                                        </View>
                                        <View style={{ paddingLeft: normalize(40), paddingRight: normalize(40) }}>
                                            <Text style={{ fontFamily: "Nunito-Regular", color: "white", fontSize: normalize(16), textAlign: "center" }}>
                                                Please reset your password to login to your account
                                            </Text>
                                        </View>
                                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: normalize(60) }}>
                                            <TouchableOpacity onPress={() => props.navigation.navigate("bio-finger")} style={{ backgroundColor: "#FFB70A", width: normalize(250), height: normalize(50), borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
                                                <Text style={{ color: "#3531B3", textAlign: "center", fontFamily: "Nunito-Bold", lineHeight: 21, fontWeight: 'bold' }}>RESET PASSWORD</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </ScrollView>
                                </View>
                            </Modal>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Login;