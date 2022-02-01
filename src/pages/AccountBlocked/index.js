import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { phone, vector } from '../../assets';

function AccountBlocked(props) {
    let screenHeight = Dimensions.get("window").height;
    return (
        <ScrollView style={{ backgroundColor: "#3531B3", height: '100%' }}>
            <View>
                <Image source={vector} style={{ width: "100%", height: normalize(370), marginTop:normalize(-50) }} />
            </View>
            {/* <View style={{width:"100%", height:normalize(20), backgroundColor:"#87CEEB", marginTop:normalize(-150)}}/> */}
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={phone} style={{ width: normalize(200), height: normalize(160), marginTop: normalize(-150) }} />
            </View>

            <Text style={{ fontFamily: "Nunito-Bold", color: 'white', textAlign: 'center', fontSize: normalize(36) }}>Account Blocked</Text>
            <View style={{ paddingLeft: normalize(50), paddingRight: normalize(50) }}>
                <Text style={{ textAlign: 'center', fontFamily: "Nunito-Regular", color: "white" }}>
                    Password max. attemps reached for your account. Please reset password to login
                </Text>
            </View>

            <View style={{alignItems: 'center', justifyContent: 'center', marginTop:normalize(20), paddingBottom:normalize(30)}}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("reset-password")} style={{ backgroundColor: "#FFB70A", width: normalize(250), height: normalize(50), borderRadius: 25, alignItems:"center", justifyContent:"center" }}>
                    <Text style={{color:"#3531B3", textAlign:"center", fontFamily:"Nunito-Bold", fontWeight:'bold'}}>RESET PASSWORD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingTop:normalize(20)}}>
                    <Text style={{color:"#FFB70A"}}>LOG OUT OF THIS ACCOUNT</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    box1: {
        backgroundColor: '#221F7A',
        width: '100%',
        height: normalize(200)
    },
    box2: {
        backgroundColor: '#221F7A',
        width: '100%',
        height: normalize(200)
    }
})

export default AccountBlocked;