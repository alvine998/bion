import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { arrow, header2 } from '../../assets';

function ForgotPassword(props) {
    const [active, setActive] = useState('');

    return (
        <View>
            <ScrollView style={{ backgroundColor: "#3531B3", height: "100%" }}>
                <View>
                    <View>
                        <Image source={header2} style={{ width: "100%" }} />
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
                                <Image source={arrow} style={{ marginLeft: normalize(20), marginTop: normalize(-190), width: normalize(24), height: normalize(24) }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={{ paddingLeft: normalize(20), marginTop: normalize(-100) }}>
                            <Text style={{ color: "white", fontFamily: "Nunito-Bold", fontSize: normalize(25), fontWeight: "bold" }}>Forgot Password</Text>
                            <Text style={{ color: "white" }}>Confirm your identity to reset your password</Text>
                        </View>
                    </View>
                    <View style={{ paddingLeft: normalize(20), paddingRight: normalize(20), marginTop: normalize(-20) }}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity onPress={() => setActive('1')} style={{ backgroundColor: "#221F7A", width: "100%", padding: normalize(15), height: normalize(90), borderRadius: 10 }}>
                                <Text style={{ fontFamily: "Nunito-Regular", fontWeight: "bold", fontSize: normalize(18), color: "white" }}>ATM Info</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: "column" }}>
                                        <Text style={{ fontFamily: "Nunito-Regular", fontSize: normalize(14), color: "white" }}>Verify using ATM card number and ATM PIN</Text>
                                    </View>
                                    <View style={{ flexDirection: "column", alignItems:"flex-end", justifyContent:"flex-end" }}>
                                        <View style={{ width: normalize(20), height: normalize(20), borderRadius: 20, borderColor: "#FFB70A", borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                                            {
                                                active == '1' ? (<View style={{ width: normalize(15), height: normalize(15), borderRadius: 50, backgroundColor: "#FFB70A" }} />
                                                ) : null
                                            }
                                        </View>
                                    </View>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setActive('2')} style={{ marginTop: normalize(20), backgroundColor: "#221F7A", width: "100%", padding: normalize(15), height: normalize(90), borderRadius: 10 }}>
                                <Text style={{ fontFamily: "Nunito-Regular", fontWeight: "bold", fontSize: normalize(18), color: "white" }}>Account Number KTP</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontFamily: "Nunito-Regular", fontSize: normalize(14), color: "white" }}>
                                        Verify using account number / KTP number and app transaction PIN
                                    </Text>
                                    <View style={{ width: normalize(20), height: normalize(20), borderRadius: 20, borderColor: "#FFB70A", borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                                        {
                                            active == '2' ? (<View style={{ width: normalize(15), height: normalize(15), borderRadius: 50, backgroundColor: "#FFB70A" }} />) : null
                                        }
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setActive('3')} style={{ marginTop: normalize(20), backgroundColor: "#221F7A", width: "100%", padding: normalize(15), height: normalize(90), borderRadius: 10 }}>
                                <Text style={{ fontFamily: "Nunito-Regular", fontWeight: "bold", fontSize: normalize(18), color: "white" }}>I can't remember my info</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontFamily: "Nunito-Regular", fontSize: normalize(14), color: "white"}}>
                                        You will be asked to have a video call to verify your identity
                                    </Text>
                                    <View style={{ width: normalize(20), height: normalize(20), borderRadius: 20, borderColor: "#FFB70A", borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
                                        {
                                            active == '3' ? (<View style={{ width: normalize(15), height: normalize(15), borderRadius: 50, backgroundColor: "#FFB70A" }} />) : null
                                        }
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <View style={{ paddingTop: normalize(15) }} />
                            <TouchableOpacity onPress={() => props.navigation.navigate("account-blocked")} style={{ backgroundColor: "#FFB70A", width: normalize(250), height: normalize(50), borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ color: "#3531B3", textAlign: "center", fontFamily: "Nunito-Bold", lineHeight: 21, fontWeight: 'bold' }}>RESET PASSWORD</Text>
                            </TouchableOpacity>
                            <View style={{ paddingBottom: normalize(20) }} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default ForgotPassword;