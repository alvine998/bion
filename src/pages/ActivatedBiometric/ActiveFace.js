import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { finger, footer, header3, vector } from '../../assets';

const ActiveFace = (props) => (
    <View>
        <ScrollView style={{ backgroundColor: "#221F7A", height: '100%' }}>
            <View>
                <Image source={header3} style={styles.head} />
            </View>
            <View>
                <View style={{paddingLeft:normalize(20), paddingRight:normalize(20)}}>
                    <Text style={styles.text1}>
                        Congratulation, Face ID is Activated
                    </Text>
                </View>

                <View style={{ paddingLeft: normalize(20), paddingRight: normalize(40) }}>
                    <Text style={{ fontFamily: "Nunito-Regular", color: "white" }}>
                        You can change your new password for the
                        next login
                    </Text>
                </View>
            </View>

            <View style={{marginTop:normalize(-100), paddingLeft:normalize(50)}}>
                <Image source={footer}/>
            </View>

            <View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: normalize(-120), paddingBottom: normalize(30) }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("account-blocked")} style={{ backgroundColor: "#FFB70A", width: normalize(250), height: normalize(50), borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: "#3531B3", textAlign: "center", fontFamily: "Nunito-Bold", fontWeight: 'bold', lineHeight: 21 }}>GO TO HOME</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </View>
);

export default ActiveFace;

const styles = StyleSheet.create({
    head: {
        width: "100%",
        height: normalize(370),
        marginTop: normalize(-50)
    },
    head2: {
        width: normalize(200),
        marginLeft:"50%"
    },
    text1: {
        fontFamily: "Nunito-Bold",
        color: 'white',
        fontSize: normalize(36),
        fontWeight:"bold"
    },
    text2: {

    }
})